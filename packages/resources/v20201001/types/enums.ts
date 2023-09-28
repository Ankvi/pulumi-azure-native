export const CleanupOptions = {
    Always: "Always",
    OnSuccess: "OnSuccess",
    OnExpiration: "OnExpiration",
} as const;

/**
 * The clean up preference when the script execution gets in a terminal state. Default setting is 'Always'.
 */
export type CleanupOptions = (typeof CleanupOptions)[keyof typeof CleanupOptions];

export const ManagedServiceIdentityType = {
    UserAssigned: "UserAssigned",
} as const;

/**
 * Type of the managed identity.
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const ScriptType = {
    AzurePowerShell: "AzurePowerShell",
    AzureCLI: "AzureCLI",
} as const;

/**
 * Type of the script.
 */
export type ScriptType = (typeof ScriptType)[keyof typeof ScriptType];
