export const AutoscaleType = {
    ScheduleBased: "ScheduleBased",
    LoadBased: "LoadBased",
} as const;

/**
 * User to specify which type of Autoscale to be implemented - Scheduled Based or Load Based.
 */
export type AutoscaleType = (typeof AutoscaleType)[keyof typeof AutoscaleType];

export const ComparisonOperator = {
    GreaterThan: "greaterThan",
    GreaterThanOrEqual: "greaterThanOrEqual",
    LessThan: "lessThan",
    LessThanOrEqual: "lessThanOrEqual",
} as const;

/**
 * The comparison operator.
 */
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

export const ContentEncoding = {
    Base64: "Base64",
    None: "None",
} as const;

/**
 * This property indicates if the content is encoded and is case-insensitive. Please set the value to base64 if the content is base64 encoded. Set it to none or skip it if the content is plain text.
 */
export type ContentEncoding = (typeof ContentEncoding)[keyof typeof ContentEncoding];

export const DataDiskType = {
    Standard_HDD_LRS: "Standard_HDD_LRS",
    Standard_SSD_LRS: "Standard_SSD_LRS",
    Standard_SSD_ZRS: "Standard_SSD_ZRS",
    Premium_SSD_LRS: "Premium_SSD_LRS",
    Premium_SSD_ZRS: "Premium_SSD_ZRS",
    Premium_SSD_v2_LRS: "Premium_SSD_v2_LRS",
} as const;

/**
 * Managed Disk Type.
 */
export type DataDiskType = (typeof DataDiskType)[keyof typeof DataDiskType];

export const DaysOfWeek = {
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
    Sunday: "Sunday",
} as const;

export type DaysOfWeek = (typeof DaysOfWeek)[keyof typeof DaysOfWeek];

export const DbConnectionAuthenticationMode = {
    /**
     * The password-based authentication to connect to your Hive metastore database. 
     */
    SqlAuth: "SqlAuth",
    /**
     * The managed-identity-based authentication to connect to your Hive metastore database. 
     */
    IdentityAuth: "IdentityAuth",
} as const;

/**
 * The authentication mode to connect to your Hive metastore database. More details: https://learn.microsoft.com/en-us/azure/azure-sql/database/logins-create-manage?view=azuresql#authentication-and-authorization
 */
export type DbConnectionAuthenticationMode = (typeof DbConnectionAuthenticationMode)[keyof typeof DbConnectionAuthenticationMode];

export const DeploymentMode = {
    Application: "Application",
    Session: "Session",
} as const;

/**
 * A string property that indicates the deployment mode of Flink cluster. It can have one of the following enum values => Application, Session. Default value is Session
 */
export type DeploymentMode = (typeof DeploymentMode)[keyof typeof DeploymentMode];

export const DirectoryType = {
    ActiveDirectory: "ActiveDirectory",
} as const;

/**
 * The directory type.
 */
export type DirectoryType = (typeof DirectoryType)[keyof typeof DirectoryType];

export const JsonWebKeyEncryptionAlgorithm = {
    RSA_OAEP: "RSA-OAEP",
    RSA_OAEP_256: "RSA-OAEP-256",
    RSA1_5: "RSA1_5",
} as const;

/**
 * Algorithm identifier for encryption, default RSA-OAEP.
 */
export type JsonWebKeyEncryptionAlgorithm = (typeof JsonWebKeyEncryptionAlgorithm)[keyof typeof JsonWebKeyEncryptionAlgorithm];

export const KeyVaultObjectType = {
    Key: "Key",
    Secret: "Secret",
    Certificate: "Certificate",
} as const;

/**
 * Type of key vault object: secret, key or certificate.
 */
export type KeyVaultObjectType = (typeof KeyVaultObjectType)[keyof typeof KeyVaultObjectType];

export const ManagedIdentityType = {
    Cluster: "cluster",
    User: "user",
    Internal: "internal",
} as const;

/**
 * The type of managed identity.
 */
export type ManagedIdentityType = (typeof ManagedIdentityType)[keyof typeof ManagedIdentityType];

export const MetastoreDbConnectionAuthenticationMode = {
    /**
     * The password-based authentication to connect to your Hive metastore database. 
     */
    SqlAuth: "SqlAuth",
    /**
     * The managed-identity-based authentication to connect to your Hive metastore database. 
     */
    IdentityAuth: "IdentityAuth",
} as const;

/**
 * The authentication mode to connect to your Hive metastore database. More details: https://learn.microsoft.com/en-us/azure/azure-sql/database/logins-create-manage?view=azuresql#authentication-and-authorization
 */
export type MetastoreDbConnectionAuthenticationMode = (typeof MetastoreDbConnectionAuthenticationMode)[keyof typeof MetastoreDbConnectionAuthenticationMode];

export const OSType = {
    Windows: "Windows",
    Linux: "Linux",
} as const;

/**
 * The type of operating system.
 */
export type OSType = (typeof OSType)[keyof typeof OSType];

export const OutboundDependenciesManagedType = {
    Managed: "Managed",
    External: "External",
} as const;

/**
 * A value to describe how the outbound dependencies of a HDInsight cluster are managed. 'Managed' means that the outbound dependencies are managed by the HDInsight service. 'External' means that the outbound dependencies are managed by a customer specific solution.
 */
export type OutboundDependenciesManagedType = (typeof OutboundDependenciesManagedType)[keyof typeof OutboundDependenciesManagedType];

export const OutboundType = {
    /**
     * The load balancer is used for egress through an AKS assigned public IP. This supports Kubernetes services of type 'loadBalancer'. 
     */
    LoadBalancer: "loadBalancer",
    /**
     * Egress paths must be defined by the user. This is an advanced scenario and requires proper network configuration. 
     */
    UserDefinedRouting: "userDefinedRouting",
} as const;

/**
 * This can only be set at cluster pool creation time and cannot be changed later. 
 */
export type OutboundType = (typeof OutboundType)[keyof typeof OutboundType];

export const PrivateIPAllocationMethod = {
    Dynamic: "dynamic",
    Static: "static",
} as const;

/**
 * The method that private IP address is allocated.
 */
export type PrivateIPAllocationMethod = (typeof PrivateIPAllocationMethod)[keyof typeof PrivateIPAllocationMethod];

export const PrivateLink = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * Indicates whether or not private link is enabled.
 */
export type PrivateLink = (typeof PrivateLink)[keyof typeof PrivateLink];

export const PrivateLinkServiceConnectionStatus = {
    Approved: "Approved",
    Rejected: "Rejected",
    Pending: "Pending",
    Removed: "Removed",
} as const;

/**
 * The concrete private link service connection.
 */
export type PrivateLinkServiceConnectionStatus = (typeof PrivateLinkServiceConnectionStatus)[keyof typeof PrivateLinkServiceConnectionStatus];

export const RangerUsersyncMode = {
    Static: "static",
    Automatic: "automatic",
} as const;

/**
 * User & groups can be synced automatically or via a static list that's refreshed.
 */
export type RangerUsersyncMode = (typeof RangerUsersyncMode)[keyof typeof RangerUsersyncMode];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

/**
 * The type of identity used for the cluster. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const ResourceProviderConnection = {
    Inbound: "Inbound",
    Outbound: "Outbound",
} as const;

/**
 * The direction for the resource provider connection.
 */
export type ResourceProviderConnection = (typeof ResourceProviderConnection)[keyof typeof ResourceProviderConnection];

export const ScaleActionType = {
    Scaleup: "scaleup",
    Scaledown: "scaledown",
} as const;

/**
 * The action type.
 */
export type ScaleActionType = (typeof ScaleActionType)[keyof typeof ScaleActionType];

export const ScheduleDay = {
    Sunday: "Sunday",
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
} as const;

export type ScheduleDay = (typeof ScheduleDay)[keyof typeof ScheduleDay];

export const Tier = {
    Standard: "Standard",
    Premium: "Premium",
} as const;

/**
 * The cluster tier.
 */
export type Tier = (typeof Tier)[keyof typeof Tier];

export const UpgradeMode = {
    STATELESS_UPDATE: "STATELESS_UPDATE",
    UPDATE: "UPDATE",
    LAST_STATE_UPDATE: "LAST_STATE_UPDATE",
} as const;

/**
 * A string property that indicates the upgrade mode to be performed on the Flink job. It can have one of the following enum values => STATELESS_UPDATE, UPDATE, LAST_STATE_UPDATE.
 */
export type UpgradeMode = (typeof UpgradeMode)[keyof typeof UpgradeMode];
