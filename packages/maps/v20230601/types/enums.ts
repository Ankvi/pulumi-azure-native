export const IdentityType = {
    SystemAssignedIdentity: "systemAssignedIdentity",
    UserAssignedIdentity: "userAssignedIdentity",
    DelegatedResourceIdentity: "delegatedResourceIdentity",
} as const;

export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const InfrastructureEncryption = {
    Enabled: "enabled",
    Disabled: "disabled",
} as const;

export type InfrastructureEncryption = (typeof InfrastructureEncryption)[keyof typeof InfrastructureEncryption];

export const Kind = {
    Gen1: "Gen1",
    Gen2: "Gen2",
} as const;

export type Kind = (typeof Kind)[keyof typeof Kind];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
} as const;

export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const Name = {
    S0: "S0",
    S1: "S1",
    G2: "G2",
} as const;

export type Name = (typeof Name)[keyof typeof Name];

export const SigningKey = {
    PrimaryKey: "primaryKey",
    SecondaryKey: "secondaryKey",
    ManagedIdentity: "managedIdentity",
} as const;

export type SigningKey = (typeof SigningKey)[keyof typeof SigningKey];