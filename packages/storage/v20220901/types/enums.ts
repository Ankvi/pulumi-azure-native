export const AccessTier = {
    Hot: "Hot",
    Cool: "Cool",
    Premium: "Premium",
} as const;

export type AccessTier = (typeof AccessTier)[keyof typeof AccessTier];

export const AccountImmutabilityPolicyState = {
    Unlocked: "Unlocked",
    Locked: "Locked",
    Disabled: "Disabled",
} as const;

export type AccountImmutabilityPolicyState = (typeof AccountImmutabilityPolicyState)[keyof typeof AccountImmutabilityPolicyState];

export const AccountType = {
    User: "User",
    Computer: "Computer",
} as const;

export type AccountType = (typeof AccountType)[keyof typeof AccountType];

export const Action = {
    Allow: "Allow",
} as const;

export type Action = (typeof Action)[keyof typeof Action];

export const AllowedCopyScope = {
    PrivateLink: "PrivateLink",
    AAD: "AAD",
} as const;

export type AllowedCopyScope = (typeof AllowedCopyScope)[keyof typeof AllowedCopyScope];

export const AllowedMethods = {
    DELETE: "DELETE",
    GET: "GET",
    HEAD: "HEAD",
    MERGE: "MERGE",
    POST: "POST",
    OPTIONS: "OPTIONS",
    PUT: "PUT",
    PATCH: "PATCH",
} as const;

export type AllowedMethods = (typeof AllowedMethods)[keyof typeof AllowedMethods];

export const Bypass = {
    None: "None",
    Logging: "Logging",
    Metrics: "Metrics",
    AzureServices: "AzureServices",
} as const;

export type Bypass = (typeof Bypass)[keyof typeof Bypass];

export const DefaultAction = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

export type DefaultAction = (typeof DefaultAction)[keyof typeof DefaultAction];

export const DefaultSharePermission = {
    None: "None",
    StorageFileDataSmbShareReader: "StorageFileDataSmbShareReader",
    StorageFileDataSmbShareContributor: "StorageFileDataSmbShareContributor",
    StorageFileDataSmbShareElevatedContributor: "StorageFileDataSmbShareElevatedContributor",
} as const;

export type DefaultSharePermission = (typeof DefaultSharePermission)[keyof typeof DefaultSharePermission];

export const DirectoryServiceOptions = {
    None: "None",
    AADDS: "AADDS",
    AD: "AD",
    AADKERB: "AADKERB",
} as const;

export type DirectoryServiceOptions = (typeof DirectoryServiceOptions)[keyof typeof DirectoryServiceOptions];

export const DnsEndpointType = {
    Standard: "Standard",
    AzureDnsZone: "AzureDnsZone",
} as const;

export type DnsEndpointType = (typeof DnsEndpointType)[keyof typeof DnsEndpointType];

export const EnabledProtocols = {
    SMB: "SMB",
    NFS: "NFS",
} as const;

export type EnabledProtocols = (typeof EnabledProtocols)[keyof typeof EnabledProtocols];

export const EncryptionScopeSource = {
    Microsoft_Storage: "Microsoft.Storage",
    Microsoft_KeyVault: "Microsoft.KeyVault",
} as const;

export type EncryptionScopeSource = (typeof EncryptionScopeSource)[keyof typeof EncryptionScopeSource];

export const EncryptionScopeState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type EncryptionScopeState = (typeof EncryptionScopeState)[keyof typeof EncryptionScopeState];

export const ExpirationAction = {
    Log: "Log",
} as const;

export type ExpirationAction = (typeof ExpirationAction)[keyof typeof ExpirationAction];

export const ExtendedLocationTypes = {
    EdgeZone: "EdgeZone",
} as const;

export type ExtendedLocationTypes = (typeof ExtendedLocationTypes)[keyof typeof ExtendedLocationTypes];

export const Format = {
    Csv: "Csv",
    Parquet: "Parquet",
} as const;

export type Format = (typeof Format)[keyof typeof Format];

export const HttpProtocol = {
    Https_http: "https,http",
    Https: "https",
} as const;

export type HttpProtocol = (typeof HttpProtocol)[keyof typeof HttpProtocol];

export const IdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const InventoryRuleType = {
    Inventory: "Inventory",
} as const;

export type InventoryRuleType = (typeof InventoryRuleType)[keyof typeof InventoryRuleType];

export const KeySource = {
    Microsoft_Storage: "Microsoft.Storage",
    Microsoft_Keyvault: "Microsoft.Keyvault",
} as const;

export type KeySource = (typeof KeySource)[keyof typeof KeySource];

export const KeyType = {
    Service: "Service",
    Account: "Account",
} as const;

export type KeyType = (typeof KeyType)[keyof typeof KeyType];

export const Kind = {
    Storage: "Storage",
    StorageV2: "StorageV2",
    BlobStorage: "BlobStorage",
    FileStorage: "FileStorage",
    BlockBlobStorage: "BlockBlobStorage",
} as const;

export type Kind = (typeof Kind)[keyof typeof Kind];

export const LargeFileSharesState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type LargeFileSharesState = (typeof LargeFileSharesState)[keyof typeof LargeFileSharesState];

export const MinimumTlsVersion = {
    TLS1_0: "TLS1_0",
    TLS1_1: "TLS1_1",
    TLS1_2: "TLS1_2",
} as const;

export type MinimumTlsVersion = (typeof MinimumTlsVersion)[keyof typeof MinimumTlsVersion];

export const Name = {
    AccessTimeTracking: "AccessTimeTracking",
} as const;

export type Name = (typeof Name)[keyof typeof Name];

export const ObjectType = {
    Blob: "Blob",
    Container: "Container",
} as const;

export type ObjectType = (typeof ObjectType)[keyof typeof ObjectType];

export const Permissions = {
    R: "r",
    D: "d",
    W: "w",
    L: "l",
    A: "a",
    C: "c",
    U: "u",
    P: "p",
} as const;

export type Permissions = (typeof Permissions)[keyof typeof Permissions];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const PublicAccess = {
    Container: "Container",
    Blob: "Blob",
    None: "None",
} as const;

export type PublicAccess = (typeof PublicAccess)[keyof typeof PublicAccess];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const RootSquashType = {
    NoRootSquash: "NoRootSquash",
    RootSquash: "RootSquash",
    AllSquash: "AllSquash",
} as const;

export type RootSquashType = (typeof RootSquashType)[keyof typeof RootSquashType];

export const RoutingChoice = {
    MicrosoftRouting: "MicrosoftRouting",
    InternetRouting: "InternetRouting",
} as const;

export type RoutingChoice = (typeof RoutingChoice)[keyof typeof RoutingChoice];

export const RuleType = {
    Lifecycle: "Lifecycle",
} as const;

export type RuleType = (typeof RuleType)[keyof typeof RuleType];

export const Schedule = {
    Daily: "Daily",
    Weekly: "Weekly",
} as const;

export type Schedule = (typeof Schedule)[keyof typeof Schedule];

export const Services = {
    B: "b",
    Q: "q",
    T: "t",
    F: "f",
} as const;

export type Services = (typeof Services)[keyof typeof Services];

export const ShareAccessTier = {
    TransactionOptimized: "TransactionOptimized",
    Hot: "Hot",
    Cool: "Cool",
    Premium: "Premium",
} as const;

export type ShareAccessTier = (typeof ShareAccessTier)[keyof typeof ShareAccessTier];

export const SignedResource = {
    B: "b",
    C: "c",
    F: "f",
    S: "s",
} as const;

export type SignedResource = (typeof SignedResource)[keyof typeof SignedResource];

export const SignedResourceTypes = {
    S: "s",
    C: "c",
    O: "o",
} as const;

export type SignedResourceTypes = (typeof SignedResourceTypes)[keyof typeof SignedResourceTypes];

export const SkuName = {
    Standard_LRS: "Standard_LRS",
    Standard_GRS: "Standard_GRS",
    Standard_RAGRS: "Standard_RAGRS",
    Standard_ZRS: "Standard_ZRS",
    Premium_LRS: "Premium_LRS",
    Premium_ZRS: "Premium_ZRS",
    Standard_GZRS: "Standard_GZRS",
    Standard_RAGZRS: "Standard_RAGZRS",
} as const;

export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const State = {
    Provisioning: "Provisioning",
    Deprovisioning: "Deprovisioning",
    Succeeded: "Succeeded",
    Failed: "Failed",
    NetworkSourceDeleted: "NetworkSourceDeleted",
} as const;

export type State = (typeof State)[keyof typeof State];
