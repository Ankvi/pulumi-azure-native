export const ServerKeyType = {
    ServiceManaged: "ServiceManaged",
    AzureKeyVault: "AzureKeyVault",
} as const;

/**
 * The server key type like 'ServiceManaged', 'AzureKeyVault'.
 */
export type ServerKeyType = (typeof ServerKeyType)[keyof typeof ServerKeyType];
