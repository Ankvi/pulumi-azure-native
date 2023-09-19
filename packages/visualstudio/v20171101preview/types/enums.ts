export const AccountResourceRequestOperationType = {
    Unknown: "unknown",
    Create: "create",
    Update: "update",
    Link: "link",
} as const;

export type AccountResourceRequestOperationType = (typeof AccountResourceRequestOperationType)[keyof typeof AccountResourceRequestOperationType];
