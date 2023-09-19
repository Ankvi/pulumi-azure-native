import { setSystemTime, test, expect, describe } from "bun:test";
import { BATCH_SIZE, getCurrentBatchNumber } from "../batches";

type BatchNumberTestCase = {
    date: string;
    expected: number;
}


describe("getCurrentBatchNumber tests", () => {
    test("A week of events should result in all batches", () => {
        const days = [...Array(7).keys()];
        const hours = [...Array(24).keys()];

        const dates: Date[] = [];
        for (const day of days) {
            for (const hour of hours) {
                dates.push(new Date(2023, 0, 1 + day, hour, 0, 0));
            }
        }

        const result = dates.map(date => {
            setSystemTime(date);
            return getCurrentBatchNumber();
        });

        const unique = new Set<number>(result);
        const expected = [...Array(BATCH_SIZE).keys()];
        expect(unique).toEqual(expected);
    });

    test.each<BatchNumberTestCase>([
        {
            date: "2023-01-01T00:00:00.000Z",
            expected: 0
        },
        {
            date: "2023-01-01T03:00:00.000Z",
            expected: 1
        }
    ])("Should return expected batch number", (({ date, expected }) => {
            setSystemTime(new Date(date));
            const result = getCurrentBatchNumber();
            expect(result).toBe(expected);
        }));
});

