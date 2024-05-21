import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export interface AccessPolicyArgs {
    /**
     * Expiry time of the access policy
     */
    expiryTime?: pulumi.Input<string>;
    /**
     * List of abbreviated permissions.
     */
    permission?: pulumi.Input<string>;
    /**
     * Start time of the access policy
     */
    startTime?: pulumi.Input<string>;
}

/**
 * This defines account-level immutability policy properties.
 */
export interface AccountImmutabilityPolicyPropertiesArgs {
    /**
     * This property can only be changed for disabled and unlocked time-based retention policies. When enabled, new blocks can be written to an append blob while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted.
     */
    allowProtectedAppendWrites?: pulumi.Input<boolean>;
    /**
     * The immutability period for the blobs in the container since the policy creation, in days.
     */
    immutabilityPeriodSinceCreationInDays?: pulumi.Input<number>;
    /**
     * The ImmutabilityPolicy state defines the mode of the policy. Disabled state disables the policy, Unlocked state allows increase and decrease of immutability retention time and also allows toggling allowProtectedAppendWrites property, Locked state only allows the increase of the immutability retention time. A policy can only be created in a Disabled or Unlocked state and can be toggled between the two states. Only a policy in an Unlocked state can transition to a Locked state which cannot be reverted.
     */
    state?: pulumi.Input<string | enums.AccountImmutabilityPolicyState>;
}

/**
 * Settings properties for Active Directory (AD).
 */
export interface ActiveDirectoryPropertiesArgs {
    /**
     * Specifies the Active Directory account type for Azure Storage.
     */
    accountType?: pulumi.Input<string | enums.AccountType>;
    /**
     * Specifies the security identifier (SID) for Azure Storage.
     */
    azureStorageSid?: pulumi.Input<string>;
    /**
     * Specifies the domain GUID.
     */
    domainGuid: pulumi.Input<string>;
    /**
     * Specifies the primary domain that the AD DNS server is authoritative for.
     */
    domainName: pulumi.Input<string>;
    /**
     * Specifies the security identifier (SID).
     */
    domainSid?: pulumi.Input<string>;
    /**
     * Specifies the Active Directory forest to get.
     */
    forestName?: pulumi.Input<string>;
    /**
     * Specifies the NetBIOS domain name.
     */
    netBiosDomainName?: pulumi.Input<string>;
    /**
     * Specifies the Active Directory SAMAccountName for Azure Storage.
     */
    samAccountName?: pulumi.Input<string>;
}

/**
 * Settings for Azure Files identity based authentication.
 */
export interface AzureFilesIdentityBasedAuthenticationArgs {
    /**
     * Required if directoryServiceOptions are AD, optional if they are AADKERB.
     */
    activeDirectoryProperties?: pulumi.Input<ActiveDirectoryPropertiesArgs>;
    /**
     * Default share permission for users using Kerberos authentication if RBAC role is not assigned.
     */
    defaultSharePermission?: pulumi.Input<string | enums.DefaultSharePermission>;
    /**
     * Indicates the directory service used. Note that this enum may be extended in the future.
     */
    directoryServiceOptions: pulumi.Input<string | enums.DirectoryServiceOptions>;
}

/**
 * An object that defines the blob inventory rule.
 */
export interface BlobInventoryPolicyDefinitionArgs {
    /**
     * An object that defines the filter set.
     */
    filters?: pulumi.Input<BlobInventoryPolicyFilterArgs>;
    /**
     * This is a required field, it specifies the format for the inventory files.
     */
    format: pulumi.Input<string | enums.Format>;
    /**
     * This is a required field. This field specifies the scope of the inventory created either at the blob or container level.
     */
    objectType: pulumi.Input<string | enums.ObjectType>;
    /**
     * This is a required field. This field is used to schedule an inventory formation.
     */
    schedule: pulumi.Input<string | enums.Schedule>;
    /**
     * This is a required field. This field specifies the fields and properties of the object to be included in the inventory. The Schema field value 'Name' is always required. The valid values for this field for the 'Blob' definition.objectType include 'Name, Creation-Time, Last-Modified, Content-Length, Content-MD5, BlobType, AccessTier, AccessTierChangeTime, AccessTierInferred, Tags, Expiry-Time, hdi_isfolder, Owner, Group, Permissions, Acl, Snapshot, VersionId, IsCurrentVersion, Metadata, LastAccessTime, Tags, Etag, ContentType, ContentEncoding, ContentLanguage, ContentCRC64, CacheControl, ContentDisposition, LeaseStatus, LeaseState, LeaseDuration, ServerEncrypted, Deleted, DeletionId, DeletedTime, RemainingRetentionDays, ImmutabilityPolicyUntilDate, ImmutabilityPolicyMode, LegalHold, CopyId, CopyStatus, CopySource, CopyProgress, CopyCompletionTime, CopyStatusDescription, CustomerProvidedKeySha256, RehydratePriority, ArchiveStatus, XmsBlobSequenceNumber, EncryptionScope, IncrementalCopy, TagCount'. For Blob object type schema field value 'DeletedTime' is applicable only for Hns enabled accounts. The valid values for 'Container' definition.objectType include 'Name, Last-Modified, Metadata, LeaseStatus, LeaseState, LeaseDuration, PublicAccess, HasImmutabilityPolicy, HasLegalHold, Etag, DefaultEncryptionScope, DenyEncryptionScopeOverride, ImmutableStorageWithVersioningEnabled, Deleted, Version, DeletedTime, RemainingRetentionDays'. Schema field values 'Expiry-Time, hdi_isfolder, Owner, Group, Permissions, Acl, DeletionId' are valid only for Hns enabled accounts.Schema field values 'Tags, TagCount' are only valid for Non-Hns accounts.
     */
    schemaFields: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * An object that defines the blob inventory rule filter conditions. For 'Blob' definition.objectType all filter properties are applicable, 'blobTypes' is required and others are optional. For 'Container' definition.objectType only prefixMatch is applicable and is optional.
 */
export interface BlobInventoryPolicyFilterArgs {
    /**
     * An array of predefined enum values. Valid values include blockBlob, appendBlob, pageBlob. Hns accounts does not support pageBlobs. This field is required when definition.objectType property is set to 'Blob'.
     */
    blobTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An array of strings with maximum 10 blob prefixes to be excluded from the inventory.
     */
    excludePrefix?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Includes blob versions in blob inventory when value is set to true. The definition.schemaFields values 'VersionId and IsCurrentVersion' are required if this property is set to true, else they must be excluded.
     */
    includeBlobVersions?: pulumi.Input<boolean>;
    /**
     * For 'Container' definition.objectType the definition.schemaFields must include 'Deleted, Version, DeletedTime and RemainingRetentionDays'. For 'Blob' definition.objectType and HNS enabled storage accounts the definition.schemaFields must include 'DeletionId, Deleted, DeletedTime and RemainingRetentionDays' and for Hns disabled accounts the definition.schemaFields must include 'Deleted and RemainingRetentionDays', else it must be excluded.
     */
    includeDeleted?: pulumi.Input<boolean>;
    /**
     * Includes blob snapshots in blob inventory when value is set to true. The definition.schemaFields value 'Snapshot' is required if this property is set to true, else it must be excluded.
     */
    includeSnapshots?: pulumi.Input<boolean>;
    /**
     * An array of strings with maximum 10 blob prefixes to be included in the inventory.
     */
    prefixMatch?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * An object that wraps the blob inventory rule. Each rule is uniquely defined by name.
 */
export interface BlobInventoryPolicyRuleArgs {
    /**
     * An object that defines the blob inventory policy rule.
     */
    definition: pulumi.Input<BlobInventoryPolicyDefinitionArgs>;
    /**
     * Container name where blob inventory files are stored. Must be pre-created.
     */
    destination: pulumi.Input<string>;
    /**
     * Rule is enabled when set to true.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * A rule name can contain any combination of alpha numeric characters. Rule name is case-sensitive. It must be unique within a policy.
     */
    name: pulumi.Input<string>;
}

/**
 * The storage account blob inventory policy rules.
 */
export interface BlobInventoryPolicySchemaArgs {
    /**
     * Policy is enabled if set to true.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * The storage account blob inventory policy rules. The rule is applied when it is enabled.
     */
    rules: pulumi.Input<pulumi.Input<BlobInventoryPolicyRuleArgs>[]>;
    /**
     * The valid value is Inventory
     */
    type: pulumi.Input<string | enums.InventoryRuleType>;
}

/**
 * The blob service properties for change feed events.
 */
export interface ChangeFeedArgs {
    /**
     * Indicates whether change feed event logging is enabled for the Blob service.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Indicates the duration of changeFeed retention in days. Minimum value is 1 day and maximum value is 146000 days (400 years). A null value indicates an infinite retention of the change feed.
     */
    retentionInDays?: pulumi.Input<number>;
}

/**
 * Specifies a CORS rule for the Blob service.
 */
export interface CorsRuleArgs {
    /**
     * Required if CorsRule element is present. A list of headers allowed to be part of the cross-origin request.
     */
    allowedHeaders: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Required if CorsRule element is present. A list of HTTP methods that are allowed to be executed by the origin.
     */
    allowedMethods: pulumi.Input<pulumi.Input<string | enums.AllowedMethods>[]>;
    /**
     * Required if CorsRule element is present. A list of origin domains that will be allowed via CORS, or "*" to allow all domains
     */
    allowedOrigins: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Required if CorsRule element is present. A list of response headers to expose to CORS clients.
     */
    exposedHeaders: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Required if CorsRule element is present. The number of seconds that the client/browser should cache a preflight response.
     */
    maxAgeInSeconds: pulumi.Input<number>;
}

/**
 * Sets the CORS rules. You can include up to five CorsRule elements in the request. 
 */
export interface CorsRulesArgs {
    /**
     * The List of CORS rules. You can include up to five CorsRule elements in the request. 
     */
    corsRules?: pulumi.Input<pulumi.Input<CorsRuleArgs>[]>;
}

/**
 * The custom domain assigned to this storage account. This can be set via Update.
 */
export interface CustomDomainArgs {
    /**
     * Gets or sets the custom domain name assigned to the storage account. Name is the CNAME source.
     */
    name: pulumi.Input<string>;
    /**
     * Indicates whether indirect CName validation is enabled. Default value is false. This should only be set on updates.
     */
    useSubDomainName?: pulumi.Input<boolean>;
}

/**
 * Object to define snapshot and version action conditions.
 */
export interface DateAfterCreationArgs {
    /**
     * Value indicating the age in days after creation
     */
    daysAfterCreationGreaterThan: pulumi.Input<number>;
    /**
     * Value indicating the age in days after last blob tier change time. This property is only applicable for tierToArchive actions and requires daysAfterCreationGreaterThan to be set for snapshots and blob version based actions. The blob will be archived if both the conditions are satisfied.
     */
    daysAfterLastTierChangeGreaterThan?: pulumi.Input<number>;
}

/**
 * Object to define the base blob action conditions. Properties daysAfterModificationGreaterThan, daysAfterLastAccessTimeGreaterThan and daysAfterCreationGreaterThan are mutually exclusive. The daysAfterLastTierChangeGreaterThan property is only applicable for tierToArchive actions which requires daysAfterModificationGreaterThan to be set, also it cannot be used in conjunction with daysAfterLastAccessTimeGreaterThan or daysAfterCreationGreaterThan.
 */
export interface DateAfterModificationArgs {
    /**
     * Value indicating the age in days after blob creation.
     */
    daysAfterCreationGreaterThan?: pulumi.Input<number>;
    /**
     * Value indicating the age in days after last blob access. This property can only be used in conjunction with last access time tracking policy
     */
    daysAfterLastAccessTimeGreaterThan?: pulumi.Input<number>;
    /**
     * Value indicating the age in days after last blob tier change time. This property is only applicable for tierToArchive actions and requires daysAfterModificationGreaterThan to be set for baseBlobs based actions. The blob will be archived if both the conditions are satisfied.
     */
    daysAfterLastTierChangeGreaterThan?: pulumi.Input<number>;
    /**
     * Value indicating the age in days after last modification
     */
    daysAfterModificationGreaterThan?: pulumi.Input<number>;
}

/**
 * The service properties for soft delete.
 */
export interface DeleteRetentionPolicyArgs {
    /**
     * This property when set to true allows deletion of the soft deleted blob versions and snapshots. This property cannot be used blob restore policy. This property only applies to blob service and does not apply to containers or file share.
     */
    allowPermanentDelete?: pulumi.Input<boolean>;
    /**
     * Indicates the number of days that the deleted item should be retained. The minimum specified value can be 1 and the maximum value can be 365.
     */
    days?: pulumi.Input<number>;
    /**
     * Indicates whether DeleteRetentionPolicy is enabled.
     */
    enabled?: pulumi.Input<boolean>;
}

/**
 * The encryption settings on the storage account.
 */
export interface EncryptionArgs {
    /**
     * The identity to be used with service-side encryption at rest.
     */
    encryptionIdentity?: pulumi.Input<EncryptionIdentityArgs>;
    /**
     * The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Storage, Microsoft.Keyvault
     */
    keySource?: pulumi.Input<string | enums.KeySource>;
    /**
     * Properties provided by key vault.
     */
    keyVaultProperties?: pulumi.Input<KeyVaultPropertiesArgs>;
    /**
     * A boolean indicating whether or not the service applies a secondary layer of encryption with platform managed keys for data at rest.
     */
    requireInfrastructureEncryption?: pulumi.Input<boolean>;
    /**
     * List of services which support encryption.
     */
    services?: pulumi.Input<EncryptionServicesArgs>;
}
/**
 * encryptionArgsProvideDefaults sets the appropriate defaults for EncryptionArgs
 */
export function encryptionArgsProvideDefaults(val: EncryptionArgs): EncryptionArgs {
    return {
        ...val,
        keySource: (val.keySource) ?? "Microsoft.Storage",
    };
}

/**
 * Encryption identity for the storage account.
 */
export interface EncryptionIdentityArgs {
    /**
     * ClientId of the multi-tenant application to be used in conjunction with the user-assigned identity for cross-tenant customer-managed-keys server-side encryption on the storage account.
     */
    encryptionFederatedIdentityClientId?: pulumi.Input<string>;
    /**
     * Resource identifier of the UserAssigned identity to be associated with server-side encryption on the storage account.
     */
    encryptionUserAssignedIdentity?: pulumi.Input<string>;
}

/**
 * The key vault properties for the encryption scope. This is a required field if encryption scope 'source' attribute is set to 'Microsoft.KeyVault'.
 */
export interface EncryptionScopeKeyVaultPropertiesArgs {
    /**
     * The object identifier for a key vault key object. When applied, the encryption scope will use the key referenced by the identifier to enable customer-managed key support on this encryption scope.
     */
    keyUri?: pulumi.Input<string>;
}

/**
 * A service that allows server-side encryption to be used.
 */
export interface EncryptionServiceArgs {
    /**
     * A boolean indicating whether or not the service encrypts the data as it is stored. Encryption at rest is enabled by default today and cannot be disabled.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Encryption key type to be used for the encryption service. 'Account' key type implies that an account-scoped encryption key will be used. 'Service' key type implies that a default service key is used.
     */
    keyType?: pulumi.Input<string | enums.KeyType>;
}

/**
 * A list of services that support encryption.
 */
export interface EncryptionServicesArgs {
    /**
     * The encryption function of the blob storage service.
     */
    blob?: pulumi.Input<EncryptionServiceArgs>;
    /**
     * The encryption function of the file storage service.
     */
    file?: pulumi.Input<EncryptionServiceArgs>;
    /**
     * The encryption function of the queue storage service.
     */
    queue?: pulumi.Input<EncryptionServiceArgs>;
    /**
     * The encryption function of the table storage service.
     */
    table?: pulumi.Input<EncryptionServiceArgs>;
}

/**
 * Target helps provide filter parameters for the objects in the storage account and forms the execution context for the storage task
 */
export interface ExecutionTargetArgs {
    /**
     * List of object prefixes to be excluded from task execution. If there is a conflict between include and exclude prefixes, the exclude prefix will be the determining factor
     */
    excludePrefix?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Required list of object prefixes to be included for task execution
     */
    prefix: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Execution trigger for storage task assignment
 */
export interface ExecutionTriggerArgs {
    /**
     * The trigger parameters of the storage task assignment execution
     */
    parameters: pulumi.Input<TriggerParametersArgs>;
    /**
     * The trigger type of the storage task assignment execution
     */
    type: pulumi.Input<enums.TriggerType>;
}

/**
 * The complex type of the extended location.
 */
export interface ExtendedLocationArgs {
    /**
     * The name of the extended location.
     */
    name?: pulumi.Input<string>;
    /**
     * The type of the extended location.
     */
    type?: pulumi.Input<string | enums.ExtendedLocationTypes>;
}

/**
 * IP rule with specific IP or IP range in CIDR format.
 */
export interface IPRuleArgs {
    /**
     * The action of IP ACL rule.
     */
    action?: pulumi.Input<enums.Action>;
    /**
     * Specifies the IP or IP range in CIDR format. Only IPV4 address is allowed.
     */
    iPAddressOrRange: pulumi.Input<string>;
}
/**
 * ipruleArgsProvideDefaults sets the appropriate defaults for IPRuleArgs
 */
export function ipruleArgsProvideDefaults(val: IPRuleArgs): IPRuleArgs {
    return {
        ...val,
        action: (val.action) ?? "Allow",
    };
}

/**
 * Identity for the resource.
 */
export interface IdentityArgs {
    /**
     * The identity type.
     */
    type: pulumi.Input<string | enums.IdentityType>;
    /**
     * Gets or sets a list of key value pairs that describe the set of User Assigned identities that will be used with this storage account. The key is the ARM resource identifier of the identity. Only 1 User Assigned identity is permitted here.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * This property enables and defines account-level immutability. Enabling the feature auto-enables Blob Versioning.
 */
export interface ImmutableStorageAccountArgs {
    /**
     * A boolean flag which enables account-level immutability. All the containers under such an account have object-level immutability enabled by default.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Specifies the default account-level immutability policy which is inherited and applied to objects that do not possess an explicit immutability policy at the object level. The object-level immutability policy has higher precedence than the container-level immutability policy, which has a higher precedence than the account-level immutability policy.
     */
    immutabilityPolicy?: pulumi.Input<AccountImmutabilityPolicyPropertiesArgs>;
}

/**
 * Object level immutability properties of the container.
 */
export interface ImmutableStorageWithVersioningArgs {
    /**
     * This is an immutable property, when set to true it enables object level immutability at the container level.
     */
    enabled?: pulumi.Input<boolean>;
}

/**
 * KeyPolicy assigned to the storage account.
 */
export interface KeyPolicyArgs {
    /**
     * The key expiration period in days.
     */
    keyExpirationPeriodInDays: pulumi.Input<number>;
}

/**
 * Properties of key vault.
 */
export interface KeyVaultPropertiesArgs {
    /**
     * The name of KeyVault key.
     */
    keyName?: pulumi.Input<string>;
    /**
     * The Uri of KeyVault.
     */
    keyVaultUri?: pulumi.Input<string>;
    /**
     * The version of KeyVault key.
     */
    keyVersion?: pulumi.Input<string>;
}

/**
 * The blob service properties for Last access time based tracking policy.
 */
export interface LastAccessTimeTrackingPolicyArgs {
    /**
     * An array of predefined supported blob types. Only blockBlob is the supported value. This field is currently read only
     */
    blobType?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * When set to true last access time based tracking is enabled.
     */
    enable: pulumi.Input<boolean>;
    /**
     * Name of the policy. The valid value is AccessTimeTracking. This field is currently read only
     */
    name?: pulumi.Input<string | enums.Name>;
    /**
     * The field specifies blob object tracking granularity in days, typically how often the blob object should be tracked.This field is currently read only with value as 1
     */
    trackingGranularityInDays?: pulumi.Input<number>;
}

/**
 * Actions are applied to the filtered blobs when the execution condition is met.
 */
export interface ManagementPolicyActionArgs {
    /**
     * The management policy action for base blob
     */
    baseBlob?: pulumi.Input<ManagementPolicyBaseBlobArgs>;
    /**
     * The management policy action for snapshot
     */
    snapshot?: pulumi.Input<ManagementPolicySnapShotArgs>;
    /**
     * The management policy action for version
     */
    version?: pulumi.Input<ManagementPolicyVersionArgs>;
}

/**
 * Management policy action for base blob.
 */
export interface ManagementPolicyBaseBlobArgs {
    /**
     * The function to delete the blob
     */
    delete?: pulumi.Input<DateAfterModificationArgs>;
    /**
     * This property enables auto tiering of a blob from cool to hot on a blob access. This property requires tierToCool.daysAfterLastAccessTimeGreaterThan.
     */
    enableAutoTierToHotFromCool?: pulumi.Input<boolean>;
    /**
     * The function to tier blobs to archive storage.
     */
    tierToArchive?: pulumi.Input<DateAfterModificationArgs>;
    /**
     * The function to tier blobs to cold storage.
     */
    tierToCold?: pulumi.Input<DateAfterModificationArgs>;
    /**
     * The function to tier blobs to cool storage.
     */
    tierToCool?: pulumi.Input<DateAfterModificationArgs>;
    /**
     * The function to tier blobs to hot storage. This action can only be used with Premium Block Blob Storage Accounts
     */
    tierToHot?: pulumi.Input<DateAfterModificationArgs>;
}

/**
 * An object that defines the Lifecycle rule. Each definition is made up with a filters set and an actions set.
 */
export interface ManagementPolicyDefinitionArgs {
    /**
     * An object that defines the action set.
     */
    actions: pulumi.Input<ManagementPolicyActionArgs>;
    /**
     * An object that defines the filter set.
     */
    filters?: pulumi.Input<ManagementPolicyFilterArgs>;
}

/**
 * Filters limit rule actions to a subset of blobs within the storage account. If multiple filters are defined, a logical AND is performed on all filters. 
 */
export interface ManagementPolicyFilterArgs {
    /**
     * An array of blob index tag based filters, there can be at most 10 tag filters
     */
    blobIndexMatch?: pulumi.Input<pulumi.Input<TagFilterArgs>[]>;
    /**
     * An array of predefined enum values. Currently blockBlob supports all tiering and delete actions. Only delete actions are supported for appendBlob.
     */
    blobTypes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An array of strings for prefixes to be match.
     */
    prefixMatch?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * An object that wraps the Lifecycle rule. Each rule is uniquely defined by name.
 */
export interface ManagementPolicyRuleArgs {
    /**
     * An object that defines the Lifecycle rule.
     */
    definition: pulumi.Input<ManagementPolicyDefinitionArgs>;
    /**
     * Rule is enabled if set to true.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * A rule name can contain any combination of alpha numeric characters. Rule name is case-sensitive. It must be unique within a policy.
     */
    name: pulumi.Input<string>;
    /**
     * The valid value is Lifecycle
     */
    type: pulumi.Input<string | enums.RuleType>;
}

/**
 * The Storage Account ManagementPolicies Rules. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts.
 */
export interface ManagementPolicySchemaArgs {
    /**
     * The Storage Account ManagementPolicies Rules. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts.
     */
    rules: pulumi.Input<pulumi.Input<ManagementPolicyRuleArgs>[]>;
}

/**
 * Management policy action for snapshot.
 */
export interface ManagementPolicySnapShotArgs {
    /**
     * The function to delete the blob snapshot
     */
    delete?: pulumi.Input<DateAfterCreationArgs>;
    /**
     * The function to tier blob snapshot to archive storage.
     */
    tierToArchive?: pulumi.Input<DateAfterCreationArgs>;
    /**
     * The function to tier blobs to cold storage.
     */
    tierToCold?: pulumi.Input<DateAfterCreationArgs>;
    /**
     * The function to tier blob snapshot to cool storage.
     */
    tierToCool?: pulumi.Input<DateAfterCreationArgs>;
    /**
     * The function to tier blobs to hot storage. This action can only be used with Premium Block Blob Storage Accounts
     */
    tierToHot?: pulumi.Input<DateAfterCreationArgs>;
}

/**
 * Management policy action for blob version.
 */
export interface ManagementPolicyVersionArgs {
    /**
     * The function to delete the blob version
     */
    delete?: pulumi.Input<DateAfterCreationArgs>;
    /**
     * The function to tier blob version to archive storage.
     */
    tierToArchive?: pulumi.Input<DateAfterCreationArgs>;
    /**
     * The function to tier blobs to cold storage.
     */
    tierToCold?: pulumi.Input<DateAfterCreationArgs>;
    /**
     * The function to tier blob version to cool storage.
     */
    tierToCool?: pulumi.Input<DateAfterCreationArgs>;
    /**
     * The function to tier blobs to hot storage. This action can only be used with Premium Block Blob Storage Accounts
     */
    tierToHot?: pulumi.Input<DateAfterCreationArgs>;
}

/**
 * Multichannel setting. Applies to Premium FileStorage only.
 */
export interface MultichannelArgs {
    /**
     * Indicates whether multichannel is enabled
     */
    enabled?: pulumi.Input<boolean>;
}

/**
 * Network rule set
 */
export interface NetworkRuleSetArgs {
    /**
     * Specifies whether traffic is bypassed for Logging/Metrics/AzureServices. Possible values are any combination of Logging|Metrics|AzureServices (For example, "Logging, Metrics"), or None to bypass none of those traffics.
     */
    bypass?: pulumi.Input<string | enums.Bypass>;
    /**
     * Specifies the default action of allow or deny when no other rules match.
     */
    defaultAction: pulumi.Input<enums.DefaultAction>;
    /**
     * Sets the IP ACL rules
     */
    ipRules?: pulumi.Input<pulumi.Input<IPRuleArgs>[]>;
    /**
     * Sets the resource access rules
     */
    resourceAccessRules?: pulumi.Input<pulumi.Input<ResourceAccessRuleArgs>[]>;
    /**
     * Sets the virtual network rules
     */
    virtualNetworkRules?: pulumi.Input<pulumi.Input<VirtualNetworkRuleArgs>[]>;
}
/**
 * networkRuleSetArgsProvideDefaults sets the appropriate defaults for NetworkRuleSetArgs
 */
export function networkRuleSetArgsProvideDefaults(val: NetworkRuleSetArgs): NetworkRuleSetArgs {
    return {
        ...val,
        bypass: (val.bypass) ?? "AzureServices",
        defaultAction: (val.defaultAction) ?? "Allow",
    };
}

/**
 * Filters limit replication to a subset of blobs within the storage account. A logical OR is performed on values in the filter. If multiple filters are defined, a logical AND is performed on all filters.
 */
export interface ObjectReplicationPolicyFilterArgs {
    /**
     * Blobs created after the time will be replicated to the destination. It must be in datetime format 'yyyy-MM-ddTHH:mm:ssZ'. Example: 2020-02-19T16:05:00Z
     */
    minCreationTime?: pulumi.Input<string>;
    /**
     * Optional. Filters the results to replicate only blobs whose names begin with the specified prefix.
     */
    prefixMatch?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The replication policy rule between two containers.
 */
export interface ObjectReplicationPolicyRuleArgs {
    /**
     * Required. Destination container name.
     */
    destinationContainer: pulumi.Input<string>;
    /**
     * Optional. An object that defines the filter set.
     */
    filters?: pulumi.Input<ObjectReplicationPolicyFilterArgs>;
    /**
     * Rule Id is auto-generated for each new rule on destination account. It is required for put policy on source account.
     */
    ruleId?: pulumi.Input<string>;
    /**
     * Required. Source container name.
     */
    sourceContainer: pulumi.Input<string>;
}

export interface PermissionScopeArgs {
    /**
     * The permissions for the local user. Possible values include: Read (r), Write (w), Delete (d), List (l), and Create (c).
     */
    permissions: pulumi.Input<string>;
    /**
     * The name of resource, normally the container name or the file share name, used by the local user.
     */
    resourceName: pulumi.Input<string>;
    /**
     * The service used by the local user, e.g. blob, file.
     */
    service: pulumi.Input<string>;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionRequired?: pulumi.Input<string>;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
}

/**
 * Protocol settings for file service
 */
export interface ProtocolSettingsArgs {
    /**
     * Setting for SMB protocol
     */
    smb?: pulumi.Input<SmbSettingArgs>;
}

/**
 * Resource Access Rule.
 */
export interface ResourceAccessRuleArgs {
    /**
     * Resource Id
     */
    resourceId?: pulumi.Input<string>;
    /**
     * Tenant Id
     */
    tenantId?: pulumi.Input<string>;
}

/**
 * The blob service properties for blob restore policy
 */
export interface RestorePolicyPropertiesArgs {
    /**
     * how long this blob can be restored. It should be great than zero and less than DeleteRetentionPolicy.days.
     */
    days?: pulumi.Input<number>;
    /**
     * Blob restore is enabled if set to true.
     */
    enabled: pulumi.Input<boolean>;
}

/**
 * Routing preference defines the type of network, either microsoft or internet routing to be used to deliver the user data, the default option is microsoft routing
 */
export interface RoutingPreferenceArgs {
    /**
     * A boolean flag which indicates whether internet routing storage endpoints are to be published
     */
    publishInternetEndpoints?: pulumi.Input<boolean>;
    /**
     * A boolean flag which indicates whether microsoft routing storage endpoints are to be published
     */
    publishMicrosoftEndpoints?: pulumi.Input<boolean>;
    /**
     * Routing Choice defines the kind of network routing opted by the user.
     */
    routingChoice?: pulumi.Input<string | enums.RoutingChoice>;
}

/**
 * SasPolicy assigned to the storage account.
 */
export interface SasPolicyArgs {
    /**
     * The SAS expiration action. Can only be Log.
     */
    expirationAction: pulumi.Input<string | enums.ExpirationAction>;
    /**
     * The SAS expiration period, DD.HH:MM:SS.
     */
    sasExpirationPeriod: pulumi.Input<string>;
}
/**
 * sasPolicyArgsProvideDefaults sets the appropriate defaults for SasPolicyArgs
 */
export function sasPolicyArgsProvideDefaults(val: SasPolicyArgs): SasPolicyArgs {
    return {
        ...val,
        expirationAction: (val.expirationAction) ?? "Log",
    };
}

export interface SignedIdentifierArgs {
    /**
     * Access policy
     */
    accessPolicy?: pulumi.Input<AccessPolicyArgs>;
    /**
     * An unique identifier of the stored access policy.
     */
    id?: pulumi.Input<string>;
}

/**
 * The SKU of the storage account.
 */
export interface SkuArgs {
    /**
     * The SKU name. Required for account creation; optional for update. Note that in older versions, SKU name was called accountType.
     */
    name: pulumi.Input<string | enums.SkuName>;
}

/**
 * Setting for SMB protocol
 */
export interface SmbSettingArgs {
    /**
     * SMB authentication methods supported by server. Valid values are NTLMv2, Kerberos. Should be passed as a string with delimiter ';'.
     */
    authenticationMethods?: pulumi.Input<string>;
    /**
     * SMB channel encryption supported by server. Valid values are AES-128-CCM, AES-128-GCM, AES-256-GCM. Should be passed as a string with delimiter ';'.
     */
    channelEncryption?: pulumi.Input<string>;
    /**
     * Kerberos ticket encryption supported by server. Valid values are RC4-HMAC, AES-256. Should be passed as a string with delimiter ';'
     */
    kerberosTicketEncryption?: pulumi.Input<string>;
    /**
     * Multichannel setting. Applies to Premium FileStorage only.
     */
    multichannel?: pulumi.Input<MultichannelArgs>;
    /**
     * SMB protocol versions supported by server. Valid values are SMB2.1, SMB3.0, SMB3.1.1. Should be passed as a string with delimiter ';'.
     */
    versions?: pulumi.Input<string>;
}

export interface SshPublicKeyArgs {
    /**
     * Optional. It is used to store the function/usage of the key
     */
    description?: pulumi.Input<string>;
    /**
     * Ssh public key base64 encoded. The format should be: '<keyType> <keyData>', e.g. ssh-rsa AAAABBBB
     */
    key?: pulumi.Input<string>;
}

/**
 * Execution context of the storage task assignment.
 */
export interface StorageTaskAssignmentExecutionContextArgs {
    /**
     * Execution target of the storage task assignment
     */
    target: pulumi.Input<ExecutionTargetArgs>;
    /**
     * Execution trigger of the storage task assignment
     */
    trigger: pulumi.Input<ExecutionTriggerArgs>;
}

/**
 * Properties of the storage task assignment.
 */
export interface StorageTaskAssignmentPropertiesArgs {
    /**
     * Text that describes the purpose of the storage task assignment
     */
    description: pulumi.Input<string>;
    /**
     * Whether the storage task assignment is enabled or not
     */
    enabled: pulumi.Input<boolean>;
    /**
     * The storage task assignment execution context
     */
    executionContext: pulumi.Input<StorageTaskAssignmentExecutionContextArgs>;
    /**
     * The storage task assignment report
     */
    report: pulumi.Input<StorageTaskAssignmentReportArgs>;
    /**
     * Id of the corresponding storage task
     */
    taskId: pulumi.Input<string>;
}

/**
 * The storage task assignment report
 */
export interface StorageTaskAssignmentReportArgs {
    /**
     * The container prefix for the location of storage task assignment report
     */
    prefix: pulumi.Input<string>;
}

/**
 * Table Access Policy Properties Object.
 */
export interface TableAccessPolicyArgs {
    /**
     * Expiry time of the access policy
     */
    expiryTime?: pulumi.Input<string>;
    /**
     * Required. List of abbreviated permissions. Supported permission values include 'r','a','u','d'
     */
    permission: pulumi.Input<string>;
    /**
     * Start time of the access policy
     */
    startTime?: pulumi.Input<string>;
}

/**
 * Object to set Table Access Policy.
 */
export interface TableSignedIdentifierArgs {
    /**
     * Access policy
     */
    accessPolicy?: pulumi.Input<TableAccessPolicyArgs>;
    /**
     * unique-64-character-value of the stored access policy.
     */
    id: pulumi.Input<string>;
}

/**
 * Blob index tag based filtering for blob objects
 */
export interface TagFilterArgs {
    /**
     * This is the filter tag name, it can have 1 - 128 characters
     */
    name: pulumi.Input<string>;
    /**
     * This is the comparison operator which is used for object comparison and filtering. Only == (equality operator) is currently supported
     */
    op: pulumi.Input<string>;
    /**
     * This is the filter tag value field used for tag based filtering, it can have 0 - 256 characters
     */
    value: pulumi.Input<string>;
}

/**
 * The trigger parameters update for the storage task assignment execution
 */
export interface TriggerParametersArgs {
    /**
     * When to end task execution. This is a required field when ExecutionTrigger.properties.type is 'OnSchedule'; this property should not be present when ExecutionTrigger.properties.type is 'RunOnce'
     */
    endBy?: pulumi.Input<string>;
    /**
     * Run interval of task execution. This is a required field when ExecutionTrigger.properties.type is 'OnSchedule'; this property should not be present when ExecutionTrigger.properties.type is 'RunOnce'
     */
    interval?: pulumi.Input<number>;
    /**
     * Run interval unit of task execution. This is a required field when ExecutionTrigger.properties.type is 'OnSchedule'; this property should not be present when ExecutionTrigger.properties.type is 'RunOnce'
     */
    intervalUnit?: pulumi.Input<enums.IntervalUnit>;
    /**
     * When to start task execution. This is a required field when ExecutionTrigger.properties.type is 'OnSchedule'; this property should not be present when ExecutionTrigger.properties.type is 'RunOnce'
     */
    startFrom?: pulumi.Input<string>;
    /**
     * When to start task execution. This is an optional field when ExecutionTrigger.properties.type is 'RunOnce'; this property should not be present when ExecutionTrigger.properties.type is 'OnSchedule'
     */
    startOn?: pulumi.Input<string>;
}

/**
 * Virtual Network rule.
 */
export interface VirtualNetworkRuleArgs {
    /**
     * The action of virtual network rule.
     */
    action?: pulumi.Input<enums.Action>;
    /**
     * Gets the state of virtual network rule.
     */
    state?: pulumi.Input<string | enums.State>;
    /**
     * Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.
     */
    virtualNetworkResourceId: pulumi.Input<string>;
}
/**
 * virtualNetworkRuleArgsProvideDefaults sets the appropriate defaults for VirtualNetworkRuleArgs
 */
export function virtualNetworkRuleArgsProvideDefaults(val: VirtualNetworkRuleArgs): VirtualNetworkRuleArgs {
    return {
        ...val,
        action: (val.action) ?? "Allow",
    };
}



