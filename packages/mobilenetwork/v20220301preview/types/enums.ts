export const CoreNetworkType = {
    /**
     * 5G core
     */
    CoreNetworkType_5GC: "5GC",
    /**
     * EPC / 4G core
     */
    EPC: "EPC",
} as const;

export type CoreNetworkType = (typeof CoreNetworkType)[keyof typeof CoreNetworkType];

export const CreatedByType = {
    User: "User",
    Application: "Application",
    ManagedIdentity: "ManagedIdentity",
    Key: "Key",
} as const;

export type CreatedByType = (typeof CreatedByType)[keyof typeof CreatedByType];
