import { getPackageNames } from "./packages";

const DAYS = 2;
const HOURS = 24;
const BATCH_SIZE = DAYS * HOURS;

const packageNames = await getPackageNames();

console.log(`Total number of packages: ${packageNames.length}`);

const batches: { [key: number]: string[] } = {};

for (const [index, name] of packageNames.entries()) {
    const batchNumber = index % BATCH_SIZE;

    if (!batches[batchNumber]) {
        batches[batchNumber] = [];
    }

    batches[batchNumber].push(name);
}

const now = new Date();
const currentDay = now.getDay() % 2;
const currentHour = now.getHours();
const batchNumber = (currentDay * HOURS) + currentHour;

console.log(`Current day: ${currentDay}`)
console.log(`Current hour: ${currentHour}`);
console.log(`Batch number: ${batchNumber}`)

const packagesForCurrentHour = batches[batchNumber];

if (!packagesForCurrentHour) {
    console.log("No packages for current hour");
    process.exit(0);
}

console.log("Packages to publish:");
console.log(JSON.stringify(packagesForCurrentHour, null, 4));

const result = prompt("Continue? [y/N] ");
if (result?.toLowerCase() !== "y") {
    console.log("Will not publish. Exiting.");
    process.exit(0);
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
