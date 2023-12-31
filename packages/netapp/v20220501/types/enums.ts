export const IdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * The identity type.
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const KeySource = {
    /**
     * Microsoft-managed key encryption
     */
    Microsoft_NetApp: "Microsoft.NetApp",
    /**
     * Customer-managed key encryption
     */
    Microsoft_KeyVault: "Microsoft.KeyVault",
} as const;

/**
 * The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.NetApp, Microsoft.KeyVault
 */
export type KeySource = (typeof KeySource)[keyof typeof KeySource];
