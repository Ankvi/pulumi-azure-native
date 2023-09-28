export const DataFormat = {
    MULTIJSON: "MULTIJSON",
    JSON: "JSON",
    CSV: "CSV",
} as const;

/**
 * The data format of the message. Optionally the data format can be added to each message.
 */
export type DataFormat = (typeof DataFormat)[keyof typeof DataFormat];
