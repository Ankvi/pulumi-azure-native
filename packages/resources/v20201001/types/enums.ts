export const CleanupOptions = {
    Always: "Always",
    OnSuccess: "OnSuccess",
    OnExpiration: "OnExpiration",
} as const;

export type CleanupOptions = (typeof CleanupOptions)[keyof typeof CleanupOptions];

export const ManagedServiceIdentityType = {
    UserAssigned: "UserAssigned",
} as const;

export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const ScriptType = {
    AzurePowerShell: "AzurePowerShell",
    AzureCLI: "AzureCLI",
} as const;

export type ScriptType = (typeof ScriptType)[keyof typeof ScriptType];
