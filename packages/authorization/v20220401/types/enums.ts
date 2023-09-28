export const PrincipalType = {
    User: "User",
    Group: "Group",
    ServicePrincipal: "ServicePrincipal",
    ForeignGroup: "ForeignGroup",
    Device: "Device",
} as const;

/**
 * The principal type of the assigned principal ID.
 */
export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];
