export const ServerKeyType = {
    ServiceManaged: "ServiceManaged",
    AzureKeyVault: "AzureKeyVault",
} as const;

export type ServerKeyType = (typeof ServerKeyType)[keyof typeof ServerKeyType];
