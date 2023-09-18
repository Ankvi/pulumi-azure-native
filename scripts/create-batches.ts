import { mkdir, readdir, rm } from "node:fs/promises";
import { getPackageNames } from "./packages";

const BATCH_SIZE = 20;

try {
    await mkdir(`${import.meta.dir}/../batches`);
} catch (error) {}

try {
    await rm(`${import.meta.dir}/../batches/*`);
} catch (error) {}

const packageNames = await getPackageNames();

const batches: { [key: number]: string[] } = {};

for (const [index, name] of packageNames.entries()) {
    const batchNumber = Math.floor(index/BATCH_SIZE);

    if (!batches[batchNumber]) {
        batches[batchNumber] = [];
    }

    batches[batchNumber].push(name);
}

await Promise.all(Object.entries(batches).map(async ([batchNumber, names]) => {
    await Bun.write(`${import.meta.dir}/../batches/batch-${batchNumber}`, names.join("\n"));
}))
