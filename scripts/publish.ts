import { program } from "commander";
import { getPackageInfos } from "./packages";
import { SkippedError, build, dryRun, publish } from "./publishing-helpers";

const delimiter = "===================================";

type Options = {
    yes: boolean;
    concurrency: number;
    max: number;
};

program
    .option("-y, --yes", "Always publish", false)
    .option<number>(
        "-, --concurrency <number>",
        "Maximum number of packages to process at the same time",
        (numericString) => parseInt(numericString),
        5,
    )
    .option<number>(
        "-m, --max <number>",
        "Maximum number of published packages",
        (numericString) => parseInt(numericString),
        10,
    )
    .parse();

const packages = await getPackageInfos();

const options = program.opts<Options>();

// TODO: Implement concurrency. Can't be bothered right now, kek

const publishing = new Set<string>();
const published = new Set<string>();
const skipped = new Set<string>();
const failed = new Map<string, Error>();

for (const pkg of packages) {
    try {
        console.log("Checking if package", pkg.name, "should be updated");
        await dryRun(pkg);

        console.log("Building package", pkg.name);
        await build(pkg);

        console.log("Build succeeded. Publishing");
        publishing.add(pkg.name);
        await publish(pkg);
        published.add(pkg.name);

        if (published.size >= options.max) {
            console.log("Reached maximum packages to publish. Exiting.");
            break;
        }
    } catch (error) {
        if (!(error instanceof Error)) {
            throw new Error("Unknown error: " + error);
        }
        if (error instanceof SkippedError) {
            console.log(pkg.name, "has the latest version. Skipping");
            skipped.add(pkg.name);
            continue;
        }

        console.log(error.message);
        failed.set(pkg.name, error);
    } finally {
        publishing.delete(pkg.name);
    }
}

console.log(delimiter);
console.log("The following packages failed:");
failed.forEach((name) => console.log(`- ${name}`));
console.log("");

console.log(delimiter);
console.log("The following packages were skipped:");
skipped.forEach((name) => console.log(`- ${name}`));
console.log("");

console.log(delimiter);
console.log("The following packages were published:");
published.forEach((name) => console.log(`- ${name}`));
