export const Kind = {
    Gen1: "Gen1",
    Gen2: "Gen2",
} as const;

export type Kind = (typeof Kind)[keyof typeof Kind];

export const Name = {
    S0: "S0",
    S1: "S1",
    G2: "G2",
} as const;

export type Name = (typeof Name)[keyof typeof Name];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const SigningKey = {
    PrimaryKey: "primaryKey",
    SecondaryKey: "secondaryKey",
} as const;

export type SigningKey = (typeof SigningKey)[keyof typeof SigningKey];
