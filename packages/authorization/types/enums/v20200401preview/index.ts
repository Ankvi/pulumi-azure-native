// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const PrincipalType = {
    User: "User",
    Group: "Group",
    ServicePrincipal: "ServicePrincipal",
    ForeignGroup: "ForeignGroup",
} as const;

export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];
