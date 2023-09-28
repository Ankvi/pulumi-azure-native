export const ServerKeyType = {
    AzureKeyVault: "AzureKeyVault",
} as const;

/**
 * The key type like  'AzureKeyVault'.
 */
export type ServerKeyType = (typeof ServerKeyType)[keyof typeof ServerKeyType];
