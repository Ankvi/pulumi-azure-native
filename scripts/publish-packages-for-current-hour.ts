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

    const buildProcess = Bun.spawn(["pnpm", "--filter", name, "build"]);
    const exitCode = await buildProcess.exited;
    if (exitCode) {
        throw new Error(`Build failed with exit code: ${exitCode}\n${buildProcess.stderr}`);
    }

    await Bun.spawn(["pnpm", "--filter", name, "publish"]).exited;
}
