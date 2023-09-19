export const Status = {
    Pending: "Pending",
    Extracting: "Extracting",
    Analyzing: "Analyzing",
    Ready: "Ready",
    Error: "Error",
} as const;

export type Status = (typeof Status)[keyof typeof Status];
