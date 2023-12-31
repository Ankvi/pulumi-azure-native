export const AccountResourceRequestOperationType = {
    Unknown: "unknown",
    Create: "create",
    Update: "update",
    Link: "link",
} as const;

/**
 * The type of the operation.
 */
export type AccountResourceRequestOperationType = (typeof AccountResourceRequestOperationType)[keyof typeof AccountResourceRequestOperationType];
