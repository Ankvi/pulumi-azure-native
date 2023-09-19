import { program } from "commander";
import { getBatches, getCurrentBatchNumber } from "./batches";

program
    .option("-y, --yes", "Always publish")
    .parse();

const batches = await getBatches();

const batchNumber = getCurrentBatchNumber();
console.log(`Batch number: ${batchNumber}`)

const packagesForCurrentHour = batches[batchNumber];

if (!packagesForCurrentHour) {
    console.log("No packages for current hour");
    process.exit(0);
}

console.log("Packages to publish:");
console.log(JSON.stringify(packagesForCurrentHour, null, 4));

const options = program.opts();

if (!options.yes) {
    const result = prompt("Continue? [y/N] ");
    if (result?.toLowerCase() !== "y") {
        console.log("Will not publish. Exiting.");
        process.exit(0);
    }
}

for (const name of packagesForCurrentHour) {
    console.log(`Publishing ${name}`);

    const proc = Bun.spawn(["pnpm", "--filter", name, "publish"], {
        cwd: `${import.meta.dir}/..`
    });
    await proc.exited;

    console.log(`Finished publishing ${name}. Waiting 10 seconds until next publish to avoid rate limiting.`);
    await Bun.sleep(10 * 1000);
}
