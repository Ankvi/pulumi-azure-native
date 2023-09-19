export const ServerKeyType = {
    AzureKeyVault: "AzureKeyVault",
} as const;

export type ServerKeyType = (typeof ServerKeyType)[keyof typeof ServerKeyType];
