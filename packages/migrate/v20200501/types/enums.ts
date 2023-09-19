export const Status = {
    Approved: "Approved",
    Pending: "Pending",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

export type Status = (typeof Status)[keyof typeof Status];
