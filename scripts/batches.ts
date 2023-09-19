import { getPackageNames } from "./packages";

export const DAYS = 6;
export const HOURS = 24 / 3;
export const BATCH_SIZE = DAYS * HOURS;

export type Batches = {
    [key: number]: string[];
}

export async function getBatches(): Promise<Batches> {
    const packageNames = await getPackageNames();
    const batches: Batches  = {};

    for (const [index, name] of packageNames.entries()) {
        const batchNumber = index % BATCH_SIZE;

        if (!batches[batchNumber]) {
            batches[batchNumber] = [];
        }

        batches[batchNumber].push(name);
    }
    return batches;
}

export function getCurrentBatchNumber(): number {
    const now = new Date();
    const currentDay = now.getDay() % DAYS;
    const currentHour = now.getHours();
    const batchNumber = currentDay * HOURS + currentHour;

    return batchNumber;
}
