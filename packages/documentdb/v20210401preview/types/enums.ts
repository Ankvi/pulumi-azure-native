export const BackupPolicyType = {
    Periodic: "Periodic",
    Continuous: "Continuous",
} as const;

export type BackupPolicyType = (typeof BackupPolicyType)[keyof typeof BackupPolicyType];

export const BackupStorageRedundancy = {
    Geo: "Geo",
    Local: "Local",
    Zone: "Zone",
} as const;

export type BackupStorageRedundancy = (typeof BackupStorageRedundancy)[keyof typeof BackupStorageRedundancy];

export const ConnectorOffer = {
    Small: "Small",
} as const;

export type ConnectorOffer = (typeof ConnectorOffer)[keyof typeof ConnectorOffer];

export const CreateMode = {
    Default: "Default",
    Restore: "Restore",
} as const;

export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const DatabaseAccountKind = {
    GlobalDocumentDB: "GlobalDocumentDB",
    MongoDB: "MongoDB",
    Parse: "Parse",
} as const;

export type DatabaseAccountKind = (typeof DatabaseAccountKind)[keyof typeof DatabaseAccountKind];

export const DatabaseAccountOfferType = {
    Standard: "Standard",
} as const;

export type DatabaseAccountOfferType = (typeof DatabaseAccountOfferType)[keyof typeof DatabaseAccountOfferType];

export const DefaultConsistencyLevel = {
    Eventual: "Eventual",
    Session: "Session",
    BoundedStaleness: "BoundedStaleness",
    Strong: "Strong",
    ConsistentPrefix: "ConsistentPrefix",
} as const;

export type DefaultConsistencyLevel = (typeof DefaultConsistencyLevel)[keyof typeof DefaultConsistencyLevel];

export const NetworkAclBypass = {
    None: "None",
    AzureServices: "AzureServices",
} as const;

export type NetworkAclBypass = (typeof NetworkAclBypass)[keyof typeof NetworkAclBypass];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
    None: "None",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const RestoreMode = {
    PointInTime: "PointInTime",
} as const;

export type RestoreMode = (typeof RestoreMode)[keyof typeof RestoreMode];

export const ServerVersion = {
    ServerVersion_3_2: "3.2",
    ServerVersion_3_6: "3.6",
    ServerVersion_4_0: "4.0",
} as const;

export type ServerVersion = (typeof ServerVersion)[keyof typeof ServerVersion];