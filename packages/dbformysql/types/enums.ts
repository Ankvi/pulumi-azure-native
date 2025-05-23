export const AdministratorType = {
    ActiveDirectory: "ActiveDirectory",
} as const;

/**
 * The type of administrator.
 */
export type AdministratorType = (typeof AdministratorType)[keyof typeof AdministratorType];

export const ConfigurationSource = {
    System_default: "system-default",
    User_override: "user-override",
} as const;

/**
 * Source of the configuration.
 */
export type ConfigurationSource = (typeof ConfigurationSource)[keyof typeof ConfigurationSource];

export const CreateMode = {
    Default: "Default",
    PointInTimeRestore: "PointInTimeRestore",
    GeoRestore: "GeoRestore",
    Replica: "Replica",
} as const;

/**
 * The mode to create a new server.
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

export const GeoRedundantBackup = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Enable Geo-redundant or not for server backup.
 */
export type GeoRedundantBackup = (typeof GeoRedundantBackup)[keyof typeof GeoRedundantBackup];

export const HighAvailabilityMode = {
    Disabled: "Disabled",
    ZoneRedundant: "ZoneRedundant",
    SameZone: "SameZone",
} as const;

/**
 * High availability mode for a server.
 */
export type HighAvailabilityMode = (typeof HighAvailabilityMode)[keyof typeof HighAvailabilityMode];

export const IdentityType = {
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const ImportSourceStorageType = {
    AzureBlob: "AzureBlob",
} as const;

/**
 * Storage type of import source.
 */
export type ImportSourceStorageType = (typeof ImportSourceStorageType)[keyof typeof ImportSourceStorageType];

export const InfrastructureEncryption = {
    /**
     * Default value for single layer of encryption for data at rest.
     */
    Enabled: "Enabled",
    /**
     * Additional (2nd) layer of encryption for data at rest
     */
    Disabled: "Disabled",
} as const;

/**
 * Status showing whether the server enabled infrastructure encryption.
 */
export type InfrastructureEncryption = (typeof InfrastructureEncryption)[keyof typeof InfrastructureEncryption];

export const ManagedServiceIdentityType = {
    UserAssigned: "UserAssigned",
} as const;

/**
 * Type of managed service identity.
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const MinimalTlsVersionEnum = {
    TLS1_0: "TLS1_0",
    TLS1_1: "TLS1_1",
    TLS1_2: "TLS1_2",
    TLSEnforcementDisabled: "TLSEnforcementDisabled",
} as const;

/**
 * Enforce a minimal Tls version for the server.
 */
export type MinimalTlsVersionEnum = (typeof MinimalTlsVersionEnum)[keyof typeof MinimalTlsVersionEnum];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

/**
 * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
 */
export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const PublicNetworkAccessEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether or not public network access is allowed for this server. Value is optional but if passed in, must be 'Enabled' or 'Disabled'
 */
export type PublicNetworkAccessEnum = (typeof PublicNetworkAccessEnum)[keyof typeof PublicNetworkAccessEnum];

export const ReplicationRole = {
    None: "None",
    Source: "Source",
    Replica: "Replica",
} as const;

/**
 * The replication role.
 */
export type ReplicationRole = (typeof ReplicationRole)[keyof typeof ReplicationRole];

export const ServerSkuTier = {
    Burstable: "Burstable",
    GeneralPurpose: "GeneralPurpose",
    MemoryOptimized: "MemoryOptimized",
} as const;

/**
 * The tier of the particular SKU, e.g. GeneralPurpose.
 */
export type ServerSkuTier = (typeof ServerSkuTier)[keyof typeof ServerSkuTier];

export const ServerVersion = {
    ServerVersion_5_7: "5.7",
    ServerVersion_8_0_21: "8.0.21",
} as const;

/**
 * Server version.
 */
export type ServerVersion = (typeof ServerVersion)[keyof typeof ServerVersion];

export const SingleServerSkuTier = {
    Basic: "Basic",
    GeneralPurpose: "GeneralPurpose",
    MemoryOptimized: "MemoryOptimized",
} as const;

/**
 * The tier of the particular SKU, e.g. Basic.
 */
export type SingleServerSkuTier = (typeof SingleServerSkuTier)[keyof typeof SingleServerSkuTier];

export const SingleServerVersion = {
    SingleServerVersion_5_6: "5.6",
    SingleServerVersion_5_7: "5.7",
    SingleServerVersion_8_0: "8.0",
} as const;

/**
 * Server version.
 */
export type SingleServerVersion = (typeof SingleServerVersion)[keyof typeof SingleServerVersion];

export const SslEnforcementEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Enable ssl enforcement or not when connect to server.
 */
export type SslEnforcementEnum = (typeof SslEnforcementEnum)[keyof typeof SslEnforcementEnum];

export const StorageAutogrow = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Enable Storage Auto Grow.
 */
export type StorageAutogrow = (typeof StorageAutogrow)[keyof typeof StorageAutogrow];

export const StorageRedundancyEnum = {
    LocalRedundancy: "LocalRedundancy",
    ZoneRedundancy: "ZoneRedundancy",
} as const;

/**
 * The redundant type of the server storage. The parameter is used for server creation.
 */
export type StorageRedundancyEnum = (typeof StorageRedundancyEnum)[keyof typeof StorageRedundancyEnum];
