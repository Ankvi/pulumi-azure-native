export const CreateMode = {
    Default: "Default",
    PointInTimeRestore: "PointInTimeRestore",
    Replica: "Replica",
    GeoRestore: "GeoRestore",
} as const;

/**
 * The mode to create a new MySQL server.
 */
export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const DataEncryptionType = {
    AzureKeyVault: "AzureKeyVault",
    SystemManaged: "SystemManaged",
} as const;

/**
 * The key type, AzureKeyVault for enable cmk, SystemManaged for disable cmk.
 */
export type DataEncryptionType = (typeof DataEncryptionType)[keyof typeof DataEncryptionType];

export const EnableStatusEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Enable Log On Disk or not.
 */
export type EnableStatusEnum = (typeof EnableStatusEnum)[keyof typeof EnableStatusEnum];

export const HighAvailabilityMode = {
    Disabled: "Disabled",
    ZoneRedundant: "ZoneRedundant",
    SameZone: "SameZone",
} as const;

/**
 * High availability mode for a server.
 */
export type HighAvailabilityMode = (typeof HighAvailabilityMode)[keyof typeof HighAvailabilityMode];

export const ManagedServiceIdentityType = {
    UserAssigned: "UserAssigned",
} as const;

/**
 * Type of managed service identity.
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

/**
 * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
 */
export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const ReplicationRole = {
    None: "None",
    Source: "Source",
    Replica: "Replica",
} as const;

/**
 * The replication role.
 */
export type ReplicationRole = (typeof ReplicationRole)[keyof typeof ReplicationRole];

export const ServerVersion = {
    ServerVersion_5_7: "5.7",
    ServerVersion_8_0_21: "8.0.21",
} as const;

/**
 * Server version.
 */
export type ServerVersion = (typeof ServerVersion)[keyof typeof ServerVersion];

export const SkuTier = {
    Burstable: "Burstable",
    GeneralPurpose: "GeneralPurpose",
    MemoryOptimized: "MemoryOptimized",
} as const;

/**
 * The tier of the particular SKU, e.g. GeneralPurpose.
 */
export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];
