export const DataFormat = {
    MULTIJSON: "MULTIJSON",
    JSON: "JSON",
    CSV: "CSV",
} as const;

export type DataFormat = (typeof DataFormat)[keyof typeof DataFormat];
