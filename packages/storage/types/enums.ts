export const AccessTier = {
    Hot: "Hot",
    Cool: "Cool",
    Premium: "Premium",
    Cold: "Cold",
} as const;

/**
 * Required for storage accounts where kind = BlobStorage. The access tier is used for billing. The 'Premium' access tier is the default value for premium block blobs storage account type and it cannot be changed for the premium block blobs storage account type.
 */
export type AccessTier = (typeof AccessTier)[keyof typeof AccessTier];

export const AccountImmutabilityPolicyState = {
    Unlocked: "Unlocked",
    Locked: "Locked",
    Disabled: "Disabled",
} as const;

/**
 * The ImmutabilityPolicy state defines the mode of the policy. Disabled state disables the policy, Unlocked state allows increase and decrease of immutability retention time and also allows toggling allowProtectedAppendWrites property, Locked state only allows the increase of the immutability retention time. A policy can only be created in a Disabled or Unlocked state and can be toggled between the two states. Only a policy in an Unlocked state can transition to a Locked state which cannot be reverted.
 */
export type AccountImmutabilityPolicyState = (typeof AccountImmutabilityPolicyState)[keyof typeof AccountImmutabilityPolicyState];

export const AccountType = {
    User: "User",
    Computer: "Computer",
} as const;

/**
 * Specifies the Active Directory account type for Azure Storage.
 */
export type AccountType = (typeof AccountType)[keyof typeof AccountType];

export const Action = {
    Allow: "Allow",
} as const;

/**
 * The action of virtual network rule.
 */
export type Action = (typeof Action)[keyof typeof Action];

export const AllowedCopyScope = {
    PrivateLink: "PrivateLink",
    AAD: "AAD",
} as const;

/**
 * Restrict copy to and from Storage Accounts within an AAD tenant or with Private Links to the same VNet.
 */
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
    CONNECT: "CONNECT",
    TRACE: "TRACE",
} as const;

export type AllowedMethods = (typeof AllowedMethods)[keyof typeof AllowedMethods];

export const BlobAccessTier = {
    /**
     * Optimized for storing data that is accessed frequently.
     */
    Hot: "Hot",
    /**
     * Optimized for storing data that is infrequently accessed and stored for at least 30 days.
     */
    Cool: "Cool",
    /**
     * Optimized for storing data that is rarely accessed and stored for at least 180 days with flexible latency requirements, on the order of hours.
     */
    Archive: "Archive",
} as const;

/**
 * The access tier of a storage blob.
 */
export type BlobAccessTier = (typeof BlobAccessTier)[keyof typeof BlobAccessTier];

export const BlobType = {
    /**
     * Block blobs store text and binary data. Block blobs are made up of blocks of data that can be managed individually.
     */
    Block: "Block",
    /**
     * Append blobs are made up of blocks like block blobs, but are optimized for append operations.
     */
    Append: "Append",
} as const;

/**
 * The type of a storage blob to be created.
 */
export type BlobType = (typeof BlobType)[keyof typeof BlobType];

export const Bypass = {
    None: "None",
    Logging: "Logging",
    Metrics: "Metrics",
    AzureServices: "AzureServices",
} as const;

/**
 * Specifies whether traffic is bypassed for Logging/Metrics/AzureServices. Possible values are any combination of Logging|Metrics|AzureServices (For example, "Logging, Metrics"), or None to bypass none of those traffics.
 */
export type Bypass = (typeof Bypass)[keyof typeof Bypass];

export const DefaultAction = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

/**
 * Specifies the default action of allow or deny when no other rules match.
 */
export type DefaultAction = (typeof DefaultAction)[keyof typeof DefaultAction];

export const DefaultSharePermission = {
    None: "None",
    StorageFileDataSmbShareReader: "StorageFileDataSmbShareReader",
    StorageFileDataSmbShareContributor: "StorageFileDataSmbShareContributor",
    StorageFileDataSmbShareElevatedContributor: "StorageFileDataSmbShareElevatedContributor",
} as const;

/**
 * Default share permission for users using Kerberos authentication if RBAC role is not assigned.
 */
export type DefaultSharePermission = (typeof DefaultSharePermission)[keyof typeof DefaultSharePermission];

export const DirectoryServiceOptions = {
    None: "None",
    AADDS: "AADDS",
    AD: "AD",
    AADKERB: "AADKERB",
} as const;

/**
 * Indicates the directory service used. Note that this enum may be extended in the future.
 */
export type DirectoryServiceOptions = (typeof DirectoryServiceOptions)[keyof typeof DirectoryServiceOptions];

export const DnsEndpointType = {
    Standard: "Standard",
    AzureDnsZone: "AzureDnsZone",
} as const;

/**
 * Allows you to specify the type of endpoint. Set this to AzureDNSZone to create a large number of accounts in a single subscription, which creates accounts in an Azure DNS Zone and the endpoint URL will have an alphanumeric DNS Zone identifier.
 */
export type DnsEndpointType = (typeof DnsEndpointType)[keyof typeof DnsEndpointType];

export const EnabledProtocols = {
    SMB: "SMB",
    NFS: "NFS",
} as const;

/**
 * The authentication protocol that is used for the file share. Can only be specified when creating a share.
 */
export type EnabledProtocols = (typeof EnabledProtocols)[keyof typeof EnabledProtocols];

export const EncryptionScopeSource = {
    Microsoft_Storage: "Microsoft.Storage",
    Microsoft_KeyVault: "Microsoft.KeyVault",
} as const;

/**
 * The provider for the encryption scope. Possible values (case-insensitive):  Microsoft.Storage, Microsoft.KeyVault.
 */
export type EncryptionScopeSource = (typeof EncryptionScopeSource)[keyof typeof EncryptionScopeSource];

export const EncryptionScopeState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The state of the encryption scope. Possible values (case-insensitive):  Enabled, Disabled.
 */
export type EncryptionScopeState = (typeof EncryptionScopeState)[keyof typeof EncryptionScopeState];

export const ExpirationAction = {
    Log: "Log",
    Block: "Block",
} as const;

/**
 * The SAS Expiration Action defines the action to be performed when sasPolicy.sasExpirationPeriod is violated. The 'Log' action can be used for audit purposes and the 'Block' action can be used to block and deny the usage of SAS tokens that do not adhere to the sas policy expiration period.
 */
export type ExpirationAction = (typeof ExpirationAction)[keyof typeof ExpirationAction];

export const ExtendedLocationTypes = {
    EdgeZone: "EdgeZone",
} as const;

/**
 * The type of the extended location.
 */
export type ExtendedLocationTypes = (typeof ExtendedLocationTypes)[keyof typeof ExtendedLocationTypes];

export const Format = {
    Csv: "Csv",
    Parquet: "Parquet",
} as const;

/**
 * This is a required field, it specifies the format for the inventory files.
 */
export type Format = (typeof Format)[keyof typeof Format];

export const HttpProtocol = {
    Https_http: "https,http",
    Https: "https",
} as const;

/**
 * The protocol permitted for a request made with the account SAS.
 */
export type HttpProtocol = (typeof HttpProtocol)[keyof typeof HttpProtocol];

export const IdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * The identity type.
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const IntervalUnit = {
    Days: "Days",
} as const;

/**
 * Run interval unit of task execution. This is a required field when ExecutionTrigger.properties.type is 'OnSchedule'; this property should not be present when ExecutionTrigger.properties.type is 'RunOnce'
 */
export type IntervalUnit = (typeof IntervalUnit)[keyof typeof IntervalUnit];

export const InventoryRuleType = {
    Inventory: "Inventory",
} as const;

/**
 * The valid value is Inventory
 */
export type InventoryRuleType = (typeof InventoryRuleType)[keyof typeof InventoryRuleType];

export const KeySource = {
    Microsoft_Storage: "Microsoft.Storage",
    Microsoft_Keyvault: "Microsoft.Keyvault",
} as const;

/**
 * The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Storage, Microsoft.Keyvault
 */
export type KeySource = (typeof KeySource)[keyof typeof KeySource];

export const KeyType = {
    Service: "Service",
    Account: "Account",
} as const;

/**
 * Encryption key type to be used for the encryption service. 'Account' key type implies that an account-scoped encryption key will be used. 'Service' key type implies that a default service key is used.
 */
export type KeyType = (typeof KeyType)[keyof typeof KeyType];

export const Kind = {
    Storage: "Storage",
    StorageV2: "StorageV2",
    BlobStorage: "BlobStorage",
    FileStorage: "FileStorage",
    BlockBlobStorage: "BlockBlobStorage",
} as const;

/**
 * Required. Indicates the type of storage account.
 */
export type Kind = (typeof Kind)[keyof typeof Kind];

export const LargeFileSharesState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * Allow large file shares if sets to Enabled. It cannot be disabled once it is enabled.
 */
export type LargeFileSharesState = (typeof LargeFileSharesState)[keyof typeof LargeFileSharesState];

export const MinimumTlsVersion = {
    TLS1_0: "TLS1_0",
    TLS1_1: "TLS1_1",
    TLS1_2: "TLS1_2",
    TLS1_3: "TLS1_3",
} as const;

/**
 * Set the minimum TLS version to be permitted on requests to storage. The default interpretation is TLS 1.0 for this property.
 */
export type MinimumTlsVersion = (typeof MinimumTlsVersion)[keyof typeof MinimumTlsVersion];

export const Name = {
    AccessTimeTracking: "AccessTimeTracking",
} as const;

/**
 * Name of the policy. The valid value is AccessTimeTracking. This field is currently read only
 */
export type Name = (typeof Name)[keyof typeof Name];

export const ObjectType = {
    Blob: "Blob",
    Container: "Container",
} as const;

/**
 * This is a required field. This field specifies the scope of the inventory created either at the blob or container level.
 */
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

/**
 * The signed permissions for the service SAS. Possible values include: Read (r), Write (w), Delete (d), List (l), Add (a), Create (c), Update (u) and Process (p).
 */
export type Permissions = (typeof Permissions)[keyof typeof Permissions];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

/**
 * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
 */
export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const PublicAccess = {
    Container: "Container",
    Blob: "Blob",
    None: "None",
} as const;

/**
 * Specifies whether data in the container may be accessed publicly and the level of access.
 */
export type PublicAccess = (typeof PublicAccess)[keyof typeof PublicAccess];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
    SecuredByPerimeter: "SecuredByPerimeter",
} as const;

/**
 * Allow, disallow, or let Network Security Perimeter configuration to evaluate public network access to Storage Account. Value is optional but if passed in, must be 'Enabled', 'Disabled' or 'SecuredByPerimeter'.
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const RootSquashType = {
    NoRootSquash: "NoRootSquash",
    RootSquash: "RootSquash",
    AllSquash: "AllSquash",
} as const;

/**
 * The property is for NFS share only. The default is NoRootSquash.
 */
export type RootSquashType = (typeof RootSquashType)[keyof typeof RootSquashType];

export const RoutingChoice = {
    MicrosoftRouting: "MicrosoftRouting",
    InternetRouting: "InternetRouting",
} as const;

/**
 * Routing Choice defines the kind of network routing opted by the user.
 */
export type RoutingChoice = (typeof RoutingChoice)[keyof typeof RoutingChoice];

export const RuleType = {
    Lifecycle: "Lifecycle",
} as const;

/**
 * The valid value is Lifecycle
 */
export type RuleType = (typeof RuleType)[keyof typeof RuleType];

export const Schedule = {
    Daily: "Daily",
    Weekly: "Weekly",
} as const;

/**
 * This is a required field. This field is used to schedule an inventory formation.
 */
export type Schedule = (typeof Schedule)[keyof typeof Schedule];

export const Services = {
    B: "b",
    Q: "q",
    T: "t",
    F: "f",
} as const;

/**
 * The signed services accessible with the account SAS. Possible values include: Blob (b), Queue (q), Table (t), File (f).
 */
export type Services = (typeof Services)[keyof typeof Services];

export const ShareAccessTier = {
    TransactionOptimized: "TransactionOptimized",
    Hot: "Hot",
    Cool: "Cool",
    Premium: "Premium",
} as const;

/**
 * Access tier for specific share. GpV2 account can choose between TransactionOptimized (default), Hot, and Cool. FileStorage account can choose Premium.
 */
export type ShareAccessTier = (typeof ShareAccessTier)[keyof typeof ShareAccessTier];

export const SignedResource = {
    B: "b",
    C: "c",
    F: "f",
    S: "s",
} as const;

/**
 * The signed services accessible with the service SAS. Possible values include: Blob (b), Container (c), File (f), Share (s).
 */
export type SignedResource = (typeof SignedResource)[keyof typeof SignedResource];

export const SignedResourceTypes = {
    S: "s",
    C: "c",
    O: "o",
} as const;

/**
 * The signed resource types that are accessible with the account SAS. Service (s): Access to service-level APIs; Container (c): Access to container-level APIs; Object (o): Access to object-level APIs for blobs, queue messages, table entities, and files.
 */
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
    StandardV2_LRS: "StandardV2_LRS",
    StandardV2_GRS: "StandardV2_GRS",
    StandardV2_ZRS: "StandardV2_ZRS",
    StandardV2_GZRS: "StandardV2_GZRS",
    PremiumV2_LRS: "PremiumV2_LRS",
    PremiumV2_ZRS: "PremiumV2_ZRS",
} as const;

/**
 * The SKU name. Required for account creation; optional for update. Note that in older versions, SKU name was called accountType.
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const State = {
    Provisioning: "Provisioning",
    Deprovisioning: "Deprovisioning",
    Succeeded: "Succeeded",
    Failed: "Failed",
    NetworkSourceDeleted: "NetworkSourceDeleted",
} as const;

/**
 * Gets the state of virtual network rule.
 */
export type State = (typeof State)[keyof typeof State];

export const TriggerType = {
    RunOnce: "RunOnce",
    OnSchedule: "OnSchedule",
} as const;

/**
 * The trigger type of the storage task assignment execution
 */
export type TriggerType = (typeof TriggerType)[keyof typeof TriggerType];
