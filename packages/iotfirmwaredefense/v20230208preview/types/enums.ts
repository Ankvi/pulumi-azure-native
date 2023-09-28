export const Status = {
    Pending: "Pending",
    Extracting: "Extracting",
    Analyzing: "Analyzing",
    Ready: "Ready",
    Error: "Error",
} as const;

/**
 * The status of firmware scan.
 */
export type Status = (typeof Status)[keyof typeof Status];
