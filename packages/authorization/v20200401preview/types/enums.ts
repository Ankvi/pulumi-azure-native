export const PrincipalType = {
    User: "User",
    Group: "Group",
    ServicePrincipal: "ServicePrincipal",
    ForeignGroup: "ForeignGroup",
} as const;

export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];
