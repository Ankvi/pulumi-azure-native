import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export interface AccessPolicyResponse {
    /**
     * Expiry time of the access policy
     */
    expiryTime?: string;
    /**
     * List of abbreviated permissions.
     */
    permission?: string;
    /**
     * Start time of the access policy
     */
    startTime?: string;
}

/**
 * This defines account-level immutability policy properties.
 */
export interface AccountImmutabilityPolicyPropertiesResponse {
    /**
     * This property can only be changed for disabled and unlocked time-based retention policies. When enabled, new blocks can be written to an append blob while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted.
     */
    allowProtectedAppendWrites?: boolean;
    /**
     * The immutability period for the blobs in the container since the policy creation, in days.
     */
    immutabilityPeriodSinceCreationInDays?: number;
    /**
     * The ImmutabilityPolicy state defines the mode of the policy. Disabled state disables the policy, Unlocked state allows increase and decrease of immutability retention time and also allows toggling allowProtectedAppendWrites property, Locked state only allows the increase of the immutability retention time. A policy can only be created in a Disabled or Unlocked state and can be toggled between the two states. Only a policy in an Unlocked state can transition to a Locked state which cannot be reverted.
     */
    state?: string;
}

/**
 * Settings properties for Active Directory (AD).
 */
export interface ActiveDirectoryPropertiesResponse {
    /**
     * Specifies the Active Directory account type for Azure Storage.
     */
    accountType?: string;
    /**
     * Specifies the security identifier (SID) for Azure Storage.
     */
    azureStorageSid?: string;
    /**
     * Specifies the domain GUID.
     */
    domainGuid: string;
    /**
     * Specifies the primary domain that the AD DNS server is authoritative for.
     */
    domainName: string;
    /**
     * Specifies the security identifier (SID).
     */
    domainSid?: string;
    /**
     * Specifies the Active Directory forest to get.
     */
    forestName?: string;
    /**
     * Specifies the NetBIOS domain name.
     */
    netBiosDomainName?: string;
    /**
     * Specifies the Active Directory SAMAccountName for Azure Storage.
     */
    samAccountName?: string;
}

/**
 * Settings for Azure Files identity based authentication.
 */
export interface AzureFilesIdentityBasedAuthenticationResponse {
    /**
     * Required if directoryServiceOptions are AD, optional if they are AADKERB.
     */
    activeDirectoryProperties?: ActiveDirectoryPropertiesResponse;
    /**
     * Default share permission for users using Kerberos authentication if RBAC role is not assigned.
     */
    defaultSharePermission?: string;
    /**
     * Indicates the directory service used. Note that this enum may be extended in the future.
     */
    directoryServiceOptions: string;
}

/**
 * This property defines the creation time based filtering condition. Blob Inventory schema parameter 'Creation-Time' is mandatory with this filter.
 */
export interface BlobInventoryCreationTimeResponse {
    /**
     * When set the policy filters the objects that are created in the last N days. Where N is an integer value between 1 to 36500.
     */
    lastNDays?: number;
}

/**
 * An object that defines the blob inventory rule.
 */
export interface BlobInventoryPolicyDefinitionResponse {
    /**
     * An object that defines the filter set.
     */
    filters?: BlobInventoryPolicyFilterResponse;
    /**
     * This is a required field, it specifies the format for the inventory files.
     */
    format: string;
    /**
     * This is a required field. This field specifies the scope of the inventory created either at the blob or container level.
     */
    objectType: string;
    /**
     * This is a required field. This field is used to schedule an inventory formation.
     */
    schedule: string;
    /**
     * This is a required field. This field specifies the fields and properties of the object to be included in the inventory. The Schema field value 'Name' is always required. The valid values for this field for the 'Blob' definition.objectType include 'Name, Creation-Time, Last-Modified, Content-Length, Content-MD5, BlobType, AccessTier, AccessTierChangeTime, AccessTierInferred, Tags, Expiry-Time, hdi_isfolder, Owner, Group, Permissions, Acl, Snapshot, VersionId, IsCurrentVersion, Metadata, LastAccessTime, Tags, Etag, ContentType, ContentEncoding, ContentLanguage, ContentCRC64, CacheControl, ContentDisposition, LeaseStatus, LeaseState, LeaseDuration, ServerEncrypted, Deleted, DeletionId, DeletedTime, RemainingRetentionDays, ImmutabilityPolicyUntilDate, ImmutabilityPolicyMode, LegalHold, CopyId, CopyStatus, CopySource, CopyProgress, CopyCompletionTime, CopyStatusDescription, CustomerProvidedKeySha256, RehydratePriority, ArchiveStatus, XmsBlobSequenceNumber, EncryptionScope, IncrementalCopy, TagCount'. For Blob object type schema field value 'DeletedTime' is applicable only for Hns enabled accounts. The valid values for 'Container' definition.objectType include 'Name, Last-Modified, Metadata, LeaseStatus, LeaseState, LeaseDuration, PublicAccess, HasImmutabilityPolicy, HasLegalHold, Etag, DefaultEncryptionScope, DenyEncryptionScopeOverride, ImmutableStorageWithVersioningEnabled, Deleted, Version, DeletedTime, RemainingRetentionDays'. Schema field values 'Expiry-Time, hdi_isfolder, Owner, Group, Permissions, Acl, DeletionId' are valid only for Hns enabled accounts.Schema field values 'Tags, TagCount' are only valid for Non-Hns accounts.
     */
    schemaFields: string[];
}

/**
 * An object that defines the blob inventory rule filter conditions. For 'Blob' definition.objectType all filter properties are applicable, 'blobTypes' is required and others are optional. For 'Container' definition.objectType only prefixMatch is applicable and is optional.
 */
export interface BlobInventoryPolicyFilterResponse {
    /**
     * An array of predefined enum values. Valid values include blockBlob, appendBlob, pageBlob. Hns accounts does not support pageBlobs. This field is required when definition.objectType property is set to 'Blob'.
     */
    blobTypes?: string[];
    /**
     * This property is used to filter objects based on the object creation time
     */
    creationTime?: BlobInventoryCreationTimeResponse;
    /**
     * An array of strings with maximum 10 blob prefixes to be excluded from the inventory.
     */
    excludePrefix?: string[];
    /**
     * Includes blob versions in blob inventory when value is set to true. The definition.schemaFields values 'VersionId and IsCurrentVersion' are required if this property is set to true, else they must be excluded.
     */
    includeBlobVersions?: boolean;
    /**
     * For 'Container' definition.objectType the definition.schemaFields must include 'Deleted, Version, DeletedTime and RemainingRetentionDays'. For 'Blob' definition.objectType and HNS enabled storage accounts the definition.schemaFields must include 'DeletionId, Deleted, DeletedTime and RemainingRetentionDays' and for Hns disabled accounts the definition.schemaFields must include 'Deleted and RemainingRetentionDays', else it must be excluded.
     */
    includeDeleted?: boolean;
    /**
     * Includes blob snapshots in blob inventory when value is set to true. The definition.schemaFields value 'Snapshot' is required if this property is set to true, else it must be excluded.
     */
    includeSnapshots?: boolean;
    /**
     * An array of strings with maximum 10 blob prefixes to be included in the inventory.
     */
    prefixMatch?: string[];
}

/**
 * An object that wraps the blob inventory rule. Each rule is uniquely defined by name.
 */
export interface BlobInventoryPolicyRuleResponse {
    /**
     * An object that defines the blob inventory policy rule.
     */
    definition: BlobInventoryPolicyDefinitionResponse;
    /**
     * Container name where blob inventory files are stored. Must be pre-created.
     */
    destination: string;
    /**
     * Rule is enabled when set to true.
     */
    enabled: boolean;
    /**
     * A rule name can contain any combination of alpha numeric characters. Rule name is case-sensitive. It must be unique within a policy.
     */
    name: string;
}

/**
 * The storage account blob inventory policy rules.
 */
export interface BlobInventoryPolicySchemaResponse {
    /**
     * Deprecated Property from API version 2021-04-01 onwards, the required destination container name must be specified at the rule level 'policy.rule.destination'
     */
    destination: string;
    /**
     * Policy is enabled if set to true.
     */
    enabled: boolean;
    /**
     * The storage account blob inventory policy rules. The rule is applied when it is enabled.
     */
    rules: BlobInventoryPolicyRuleResponse[];
    /**
     * The valid value is Inventory
     */
    type: string;
}

/**
 * Blob restore parameters
 */
export interface BlobRestoreParametersResponse {
    /**
     * Blob ranges to restore.
     */
    blobRanges: BlobRestoreRangeResponse[];
    /**
     * Restore blob to the specified time.
     */
    timeToRestore: string;
}

/**
 * Blob range
 */
export interface BlobRestoreRangeResponse {
    /**
     * Blob end range. This is exclusive. Empty means account end.
     */
    endRange: string;
    /**
     * Blob start range. This is inclusive. Empty means account start.
     */
    startRange: string;
}

/**
 * Blob restore status.
 */
export interface BlobRestoreStatusResponse {
    /**
     * Failure reason when blob restore is failed.
     */
    failureReason: string;
    /**
     * Blob restore request parameters.
     */
    parameters: BlobRestoreParametersResponse;
    /**
     * Id for tracking blob restore request.
     */
    restoreId: string;
    /**
     * The status of blob restore progress. Possible values are: - InProgress: Indicates that blob restore is ongoing. - Complete: Indicates that blob restore has been completed successfully. - Failed: Indicates that blob restore is failed.
     */
    status: string;
}

/**
 * The blob service properties for change feed events.
 */
export interface ChangeFeedResponse {
    /**
     * Indicates whether change feed event logging is enabled for the Blob service.
     */
    enabled?: boolean;
    /**
     * Indicates the duration of changeFeed retention in days. Minimum value is 1 day and maximum value is 146000 days (400 years). A null value indicates an infinite retention of the change feed.
     */
    retentionInDays?: number;
}

/**
 * Specifies a CORS rule for the Blob service.
 */
export interface CorsRuleResponse {
    /**
     * Required if CorsRule element is present. A list of headers allowed to be part of the cross-origin request.
     */
    allowedHeaders: string[];
    /**
     * Required if CorsRule element is present. A list of HTTP methods that are allowed to be executed by the origin.
     */
    allowedMethods: string[];
    /**
     * Required if CorsRule element is present. A list of origin domains that will be allowed via CORS, or "*" to allow all domains
     */
    allowedOrigins: string[];
    /**
     * Required if CorsRule element is present. A list of response headers to expose to CORS clients.
     */
    exposedHeaders: string[];
    /**
     * Required if CorsRule element is present. The number of seconds that the client/browser should cache a preflight response.
     */
    maxAgeInSeconds: number;
}

/**
 * Sets the CORS rules. You can include up to five CorsRule elements in the request. 
 */
export interface CorsRulesResponse {
    /**
     * The List of CORS rules. You can include up to five CorsRule elements in the request. 
     */
    corsRules?: CorsRuleResponse[];
}

/**
 * The custom domain assigned to this storage account. This can be set via Update.
 */
export interface CustomDomainResponse {
    /**
     * Gets or sets the custom domain name assigned to the storage account. Name is the CNAME source.
     */
    name: string;
    /**
     * Indicates whether indirect CName validation is enabled. Default value is false. This should only be set on updates.
     */
    useSubDomainName?: boolean;
}

/**
 * Object to define snapshot and version action conditions.
 */
export interface DateAfterCreationResponse {
    /**
     * Value indicating the age in days after creation
     */
    daysAfterCreationGreaterThan: number;
    /**
     * Value indicating the age in days after last blob tier change time. This property is only applicable for tierToArchive actions and requires daysAfterCreationGreaterThan to be set for snapshots and blob version based actions. The blob will be archived if both the conditions are satisfied.
     */
    daysAfterLastTierChangeGreaterThan?: number;
}

/**
 * Object to define the base blob action conditions. Properties daysAfterModificationGreaterThan, daysAfterLastAccessTimeGreaterThan and daysAfterCreationGreaterThan are mutually exclusive. The daysAfterLastTierChangeGreaterThan property is only applicable for tierToArchive actions which requires daysAfterModificationGreaterThan to be set, also it cannot be used in conjunction with daysAfterLastAccessTimeGreaterThan or daysAfterCreationGreaterThan.
 */
export interface DateAfterModificationResponse {
    /**
     * Value indicating the age in days after blob creation.
     */
    daysAfterCreationGreaterThan?: number;
    /**
     * Value indicating the age in days after last blob access. This property can only be used in conjunction with last access time tracking policy
     */
    daysAfterLastAccessTimeGreaterThan?: number;
    /**
     * Value indicating the age in days after last blob tier change time. This property is only applicable for tierToArchive actions and requires daysAfterModificationGreaterThan to be set for baseBlobs based actions. The blob will be archived if both the conditions are satisfied.
     */
    daysAfterLastTierChangeGreaterThan?: number;
    /**
     * Value indicating the age in days after last modification
     */
    daysAfterModificationGreaterThan?: number;
}

/**
 * The service properties for soft delete.
 */
export interface DeleteRetentionPolicyResponse {
    /**
     * This property when set to true allows deletion of the soft deleted blob versions and snapshots. This property cannot be used blob restore policy. This property only applies to blob service and does not apply to containers or file share.
     */
    allowPermanentDelete?: boolean;
    /**
     * Indicates the number of days that the deleted item should be retained. The minimum specified value can be 1 and the maximum value can be 365.
     */
    days?: number;
    /**
     * Indicates whether DeleteRetentionPolicy is enabled.
     */
    enabled?: boolean;
}

/**
 * Encryption identity for the storage account.
 */
export interface EncryptionIdentityResponse {
    /**
     * ClientId of the multi-tenant application to be used in conjunction with the user-assigned identity for cross-tenant customer-managed-keys server-side encryption on the storage account.
     */
    encryptionFederatedIdentityClientId?: string;
    /**
     * Resource identifier of the UserAssigned identity to be associated with server-side encryption on the storage account.
     */
    encryptionUserAssignedIdentity?: string;
}

/**
 * The encryption settings on the storage account.
 */
export interface EncryptionResponse {
    /**
     * The identity to be used with service-side encryption at rest.
     */
    encryptionIdentity?: EncryptionIdentityResponse;
    /**
     * The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Storage, Microsoft.Keyvault
     */
    keySource?: string;
    /**
     * Properties provided by key vault.
     */
    keyVaultProperties?: KeyVaultPropertiesResponse;
    /**
     * A boolean indicating whether or not the service applies a secondary layer of encryption with platform managed keys for data at rest.
     */
    requireInfrastructureEncryption?: boolean;
    /**
     * List of services which support encryption.
     */
    services?: EncryptionServicesResponse;
}
/**
 * encryptionResponseProvideDefaults sets the appropriate defaults for EncryptionResponse
 */
export function encryptionResponseProvideDefaults(val: EncryptionResponse): EncryptionResponse {
    return {
        ...val,
        keySource: (val.keySource) ?? "Microsoft.Storage",
    };
}

/**
 * The key vault properties for the encryption scope. This is a required field if encryption scope 'source' attribute is set to 'Microsoft.KeyVault'.
 */
export interface EncryptionScopeKeyVaultPropertiesResponse {
    /**
     * The object identifier of the current versioned Key Vault Key in use.
     */
    currentVersionedKeyIdentifier: string;
    /**
     * The object identifier for a key vault key object. When applied, the encryption scope will use the key referenced by the identifier to enable customer-managed key support on this encryption scope.
     */
    keyUri?: string;
    /**
     * Timestamp of last rotation of the Key Vault Key.
     */
    lastKeyRotationTimestamp: string;
}

/**
 * A service that allows server-side encryption to be used.
 */
export interface EncryptionServiceResponse {
    /**
     * A boolean indicating whether or not the service encrypts the data as it is stored. Encryption at rest is enabled by default today and cannot be disabled.
     */
    enabled?: boolean;
    /**
     * Encryption key type to be used for the encryption service. 'Account' key type implies that an account-scoped encryption key will be used. 'Service' key type implies that a default service key is used.
     */
    keyType?: string;
    /**
     * Gets a rough estimate of the date/time when the encryption was last enabled by the user. Data is encrypted at rest by default today and cannot be disabled.
     */
    lastEnabledTime: string;
}

/**
 * A list of services that support encryption.
 */
export interface EncryptionServicesResponse {
    /**
     * The encryption function of the blob storage service.
     */
    blob?: EncryptionServiceResponse;
    /**
     * The encryption function of the file storage service.
     */
    file?: EncryptionServiceResponse;
    /**
     * The encryption function of the queue storage service.
     */
    queue?: EncryptionServiceResponse;
    /**
     * The encryption function of the table storage service.
     */
    table?: EncryptionServiceResponse;
}

/**
 * The URIs that are used to perform a retrieval of a public blob, queue, table, web or dfs object.
 */
export interface EndpointsResponse {
    /**
     * Gets the blob endpoint.
     */
    blob: string;
    /**
     * Gets the dfs endpoint.
     */
    dfs: string;
    /**
     * Gets the file endpoint.
     */
    file: string;
    /**
     * Gets the internet routing storage endpoints
     */
    internetEndpoints?: StorageAccountInternetEndpointsResponse;
    /**
     * Gets the microsoft routing storage endpoints.
     */
    microsoftEndpoints?: StorageAccountMicrosoftEndpointsResponse;
    /**
     * Gets the queue endpoint.
     */
    queue: string;
    /**
     * Gets the table endpoint.
     */
    table: string;
    /**
     * Gets the web endpoint.
     */
    web: string;
}

/**
 * Target helps provide filter parameters for the objects in the storage account and forms the execution context for the storage task
 */
export interface ExecutionTargetResponse {
    /**
     * List of object prefixes to be excluded from task execution. If there is a conflict between include and exclude prefixes, the exclude prefix will be the determining factor
     */
    excludePrefix?: string[];
    /**
     * Required list of object prefixes to be included for task execution
     */
    prefix?: string[];
}

/**
 * Execution trigger for storage task assignment
 */
export interface ExecutionTriggerResponse {
    /**
     * The trigger parameters of the storage task assignment execution
     */
    parameters: TriggerParametersResponse;
    /**
     * The trigger type of the storage task assignment execution
     */
    type: string;
}

/**
 * The complex type of the extended location.
 */
export interface ExtendedLocationResponse {
    /**
     * The name of the extended location.
     */
    name?: string;
    /**
     * The type of the extended location.
     */
    type?: string;
}

/**
 * File Share Paid Bursting properties.
 */
export interface FileSharePropertiesResponseFileSharePaidBursting {
    /**
     * Indicates whether paid bursting is enabled for the share. This property is only for file shares created under Files Provisioned v1 SSD account type.
     */
    paidBurstingEnabled?: boolean;
    /**
     * The maximum paid bursting bandwidth for the share, in mebibytes per second. This property is only for file shares created under Files Provisioned v1 SSD account type. The maximum allowed value is 10340 which is the maximum allowed bandwidth for a share.
     */
    paidBurstingMaxBandwidthMibps?: number;
    /**
     * The maximum paid bursting IOPS for the share. This property is only for file shares created under Files Provisioned v1 SSD account type. The maximum allowed value is 102400 which is the maximum allowed IOPS for a share.
     */
    paidBurstingMaxIops?: number;
}

/**
 * Statistics related to replication for storage account's Blob, Table, Queue and File services. It is only available when geo-redundant replication is enabled for the storage account.
 */
export interface GeoReplicationStatsResponse {
    /**
     * A boolean flag which indicates whether or not account failover is supported for the account.
     */
    canFailover: boolean;
    /**
     * A boolean flag which indicates whether or not planned account failover is supported for the account.
     */
    canPlannedFailover: boolean;
    /**
     * All primary writes preceding this UTC date/time value are guaranteed to be available for read operations. Primary writes following this point in time may or may not be available for reads. Element may be default value if value of LastSyncTime is not available, this can happen if secondary is offline or we are in bootstrap.
     */
    lastSyncTime: string;
    /**
     * The redundancy type of the account after an account failover is performed.
     */
    postFailoverRedundancy: string;
    /**
     * The redundancy type of the account after a planned account failover is performed.
     */
    postPlannedFailoverRedundancy: string;
    /**
     * The status of the secondary location. Possible values are: - Live: Indicates that the secondary location is active and operational. - Bootstrap: Indicates initial synchronization from the primary location to the secondary location is in progress.This typically occurs when replication is first enabled. - Unavailable: Indicates that the secondary location is temporarily unavailable.
     */
    status: string;
}

/**
 * IP rule with specific IP or IP range in CIDR format.
 */
export interface IPRuleResponse {
    /**
     * The action of IP ACL rule.
     */
    action?: string;
    /**
     * Specifies the IP or IP range in CIDR format. Only IPV4 address is allowed.
     */
    iPAddressOrRange: string;
}
/**
 * ipruleResponseProvideDefaults sets the appropriate defaults for IPRuleResponse
 */
export function ipruleResponseProvideDefaults(val: IPRuleResponse): IPRuleResponse {
    return {
        ...val,
        action: (val.action) ?? "Allow",
    };
}

/**
 * Identity for the resource.
 */
export interface IdentityResponse {
    /**
     * The principal ID of resource identity.
     */
    principalId: string;
    /**
     * The tenant ID of resource.
     */
    tenantId: string;
    /**
     * The identity type.
     */
    type: string;
    /**
     * Gets or sets a list of key value pairs that describe the set of User Assigned identities that will be used with this storage account. The key is the ARM resource identifier of the identity. Only 1 User Assigned identity is permitted here.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
}

/**
 * The properties of an ImmutabilityPolicy of a blob container.
 */
export interface ImmutabilityPolicyPropertiesResponse {
    /**
     * This property can only be changed for unlocked time-based retention policies. When enabled, new blocks can be written to an append blob while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. This property cannot be changed with ExtendImmutabilityPolicy API.
     */
    allowProtectedAppendWrites?: boolean;
    /**
     * This property can only be changed for unlocked time-based retention policies. When enabled, new blocks can be written to both 'Append and Bock Blobs' while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. This property cannot be changed with ExtendImmutabilityPolicy API. The 'allowProtectedAppendWrites' and 'allowProtectedAppendWritesAll' properties are mutually exclusive.
     */
    allowProtectedAppendWritesAll?: boolean;
    /**
     * ImmutabilityPolicy Etag.
     */
    etag: string;
    /**
     * The immutability period for the blobs in the container since the policy creation, in days.
     */
    immutabilityPeriodSinceCreationInDays?: number;
    /**
     * The ImmutabilityPolicy state of a blob container, possible values include: Locked and Unlocked.
     */
    state: string;
    /**
     * The ImmutabilityPolicy update history of the blob container.
     */
    updateHistory: UpdateHistoryPropertyResponse[];
}

/**
 * This property enables and defines account-level immutability. Enabling the feature auto-enables Blob Versioning.
 */
export interface ImmutableStorageAccountResponse {
    /**
     * A boolean flag which enables account-level immutability. All the containers under such an account have object-level immutability enabled by default.
     */
    enabled?: boolean;
    /**
     * Specifies the default account-level immutability policy which is inherited and applied to objects that do not possess an explicit immutability policy at the object level. The object-level immutability policy has higher precedence than the container-level immutability policy, which has a higher precedence than the account-level immutability policy.
     */
    immutabilityPolicy?: AccountImmutabilityPolicyPropertiesResponse;
}

/**
 * Object level immutability properties of the container.
 */
export interface ImmutableStorageWithVersioningResponse {
    /**
     * This is an immutable property, when set to true it enables object level immutability at the container level.
     */
    enabled?: boolean;
    /**
     * This property denotes the container level immutability to object level immutability migration state.
     */
    migrationState: string;
    /**
     * Returns the date and time the object level immutability was enabled.
     */
    timeStamp: string;
}

/**
 * Storage account keys creation time.
 */
export interface KeyCreationTimeResponse {
    key1?: string;
    key2?: string;
}

/**
 * KeyPolicy assigned to the storage account.
 */
export interface KeyPolicyResponse {
    /**
     * The key expiration period in days.
     */
    keyExpirationPeriodInDays: number;
}

/**
 * Properties of key vault.
 */
export interface KeyVaultPropertiesResponse {
    /**
     * This is a read only property that represents the expiration time of the current version of the customer managed key used for encryption.
     */
    currentVersionedKeyExpirationTimestamp: string;
    /**
     * The object identifier of the current versioned Key Vault Key in use.
     */
    currentVersionedKeyIdentifier: string;
    /**
     * The name of KeyVault key.
     */
    keyName?: string;
    /**
     * The Uri of KeyVault.
     */
    keyVaultUri?: string;
    /**
     * The version of KeyVault key.
     */
    keyVersion?: string;
    /**
     * Timestamp of last rotation of the Key Vault Key.
     */
    lastKeyRotationTimestamp: string;
}

/**
 * The blob service properties for Last access time based tracking policy.
 */
export interface LastAccessTimeTrackingPolicyResponse {
    /**
     * An array of predefined supported blob types. Only blockBlob is the supported value. This field is currently read only
     */
    blobType?: string[];
    /**
     * When set to true last access time based tracking is enabled.
     */
    enable: boolean;
    /**
     * Name of the policy. The valid value is AccessTimeTracking. This field is currently read only
     */
    name?: string;
    /**
     * The field specifies blob object tracking granularity in days, typically how often the blob object should be tracked.This field is currently read only with value as 1
     */
    trackingGranularityInDays?: number;
}

/**
 * The LegalHold property of a blob container.
 */
export interface LegalHoldPropertiesResponse {
    /**
     * The hasLegalHold public property is set to true by SRP if there are at least one existing tag. The hasLegalHold public property is set to false by SRP if all existing legal hold tags are cleared out. There can be a maximum of 1000 blob containers with hasLegalHold=true for a given account.
     */
    hasLegalHold: boolean;
    /**
     * Protected append blob writes history.
     */
    protectedAppendWritesHistory?: ProtectedAppendWritesHistoryResponse;
    /**
     * The list of LegalHold tags of a blob container.
     */
    tags?: TagPropertyResponse[];
}

/**
 * Actions are applied to the filtered blobs when the execution condition is met.
 */
export interface ManagementPolicyActionResponse {
    /**
     * The management policy action for base blob
     */
    baseBlob?: ManagementPolicyBaseBlobResponse;
    /**
     * The management policy action for snapshot
     */
    snapshot?: ManagementPolicySnapShotResponse;
    /**
     * The management policy action for version
     */
    version?: ManagementPolicyVersionResponse;
}

/**
 * Management policy action for base blob.
 */
export interface ManagementPolicyBaseBlobResponse {
    /**
     * The function to delete the blob
     */
    delete?: DateAfterModificationResponse;
    /**
     * This property enables auto tiering of a blob from cool to hot on a blob access. This property requires tierToCool.daysAfterLastAccessTimeGreaterThan.
     */
    enableAutoTierToHotFromCool?: boolean;
    /**
     * The function to tier blobs to archive storage.
     */
    tierToArchive?: DateAfterModificationResponse;
    /**
     * The function to tier blobs to cold storage.
     */
    tierToCold?: DateAfterModificationResponse;
    /**
     * The function to tier blobs to cool storage.
     */
    tierToCool?: DateAfterModificationResponse;
    /**
     * The function to tier blobs to hot storage. This action can only be used with Premium Block Blob Storage Accounts
     */
    tierToHot?: DateAfterModificationResponse;
}

/**
 * An object that defines the Lifecycle rule. Each definition is made up with a filters set and an actions set.
 */
export interface ManagementPolicyDefinitionResponse {
    /**
     * An object that defines the action set.
     */
    actions: ManagementPolicyActionResponse;
    /**
     * An object that defines the filter set.
     */
    filters?: ManagementPolicyFilterResponse;
}

/**
 * Filters limit rule actions to a subset of blobs within the storage account. If multiple filters are defined, a logical AND is performed on all filters. 
 */
export interface ManagementPolicyFilterResponse {
    /**
     * An array of blob index tag based filters, there can be at most 10 tag filters
     */
    blobIndexMatch?: TagFilterResponse[];
    /**
     * An array of predefined enum values. Currently blockBlob supports all tiering and delete actions. Only delete actions are supported for appendBlob.
     */
    blobTypes: string[];
    /**
     * An array of strings for prefixes to be match.
     */
    prefixMatch?: string[];
}

/**
 * An object that wraps the Lifecycle rule. Each rule is uniquely defined by name.
 */
export interface ManagementPolicyRuleResponse {
    /**
     * An object that defines the Lifecycle rule.
     */
    definition: ManagementPolicyDefinitionResponse;
    /**
     * Rule is enabled if set to true.
     */
    enabled?: boolean;
    /**
     * A rule name can contain any combination of alpha numeric characters. Rule name is case-sensitive. It must be unique within a policy.
     */
    name: string;
    /**
     * The valid value is Lifecycle
     */
    type: string;
}

/**
 * The Storage Account ManagementPolicies Rules. See more details in: https://learn.microsoft.com/azure/storage/blobs/lifecycle-management-overview.
 */
export interface ManagementPolicySchemaResponse {
    /**
     * The Storage Account ManagementPolicies Rules. See more details in: https://learn.microsoft.com/azure/storage/blobs/lifecycle-management-overview.
     */
    rules: ManagementPolicyRuleResponse[];
}

/**
 * Management policy action for snapshot.
 */
export interface ManagementPolicySnapShotResponse {
    /**
     * The function to delete the blob snapshot
     */
    delete?: DateAfterCreationResponse;
    /**
     * The function to tier blob snapshot to archive storage.
     */
    tierToArchive?: DateAfterCreationResponse;
    /**
     * The function to tier blobs to cold storage.
     */
    tierToCold?: DateAfterCreationResponse;
    /**
     * The function to tier blob snapshot to cool storage.
     */
    tierToCool?: DateAfterCreationResponse;
    /**
     * The function to tier blobs to hot storage. This action can only be used with Premium Block Blob Storage Accounts
     */
    tierToHot?: DateAfterCreationResponse;
}

/**
 * Management policy action for blob version.
 */
export interface ManagementPolicyVersionResponse {
    /**
     * The function to delete the blob version
     */
    delete?: DateAfterCreationResponse;
    /**
     * The function to tier blob version to archive storage.
     */
    tierToArchive?: DateAfterCreationResponse;
    /**
     * The function to tier blobs to cold storage.
     */
    tierToCold?: DateAfterCreationResponse;
    /**
     * The function to tier blob version to cool storage.
     */
    tierToCool?: DateAfterCreationResponse;
    /**
     * The function to tier blobs to hot storage. This action can only be used with Premium Block Blob Storage Accounts
     */
    tierToHot?: DateAfterCreationResponse;
}

/**
 * Multichannel setting. Applies to Premium FileStorage only.
 */
export interface MultichannelResponse {
    /**
     * Indicates whether multichannel is enabled
     */
    enabled?: boolean;
}

/**
 * Network rule set
 */
export interface NetworkRuleSetResponse {
    /**
     * Specifies whether traffic is bypassed for Logging/Metrics/AzureServices. Possible values are any combination of Logging|Metrics|AzureServices (For example, "Logging, Metrics"), or None to bypass none of those traffics.
     */
    bypass?: string;
    /**
     * Specifies the default action of allow or deny when no other rules match.
     */
    defaultAction: string;
    /**
     * Sets the IP ACL rules
     */
    ipRules?: IPRuleResponse[];
    /**
     * Sets the resource access rules
     */
    resourceAccessRules?: ResourceAccessRuleResponse[];
    /**
     * Sets the virtual network rules
     */
    virtualNetworkRules?: VirtualNetworkRuleResponse[];
}
/**
 * networkRuleSetResponseProvideDefaults sets the appropriate defaults for NetworkRuleSetResponse
 */
export function networkRuleSetResponseProvideDefaults(val: NetworkRuleSetResponse): NetworkRuleSetResponse {
    return {
        ...val,
        bypass: (val.bypass) ?? "AzureServices",
        defaultAction: (val.defaultAction) ?? "Allow",
    };
}

/**
 * Filters limit replication to a subset of blobs within the storage account. A logical OR is performed on values in the filter. If multiple filters are defined, a logical AND is performed on all filters.
 */
export interface ObjectReplicationPolicyFilterResponse {
    /**
     * Blobs created after the time will be replicated to the destination. It must be in datetime format 'yyyy-MM-ddTHH:mm:ssZ'. Example: 2020-02-19T16:05:00Z
     */
    minCreationTime?: string;
    /**
     * Optional. Filters the results to replicate only blobs whose names begin with the specified prefix.
     */
    prefixMatch?: string[];
}

/**
 * Optional. The object replication policy metrics feature options.
 */
export interface ObjectReplicationPolicyPropertiesResponseMetrics {
    /**
     * Indicates whether object replication metrics feature is enabled for the policy.
     */
    enabled?: boolean;
}

/**
 * The replication policy rule between two containers.
 */
export interface ObjectReplicationPolicyRuleResponse {
    /**
     * Required. Destination container name.
     */
    destinationContainer: string;
    /**
     * Optional. An object that defines the filter set.
     */
    filters?: ObjectReplicationPolicyFilterResponse;
    /**
     * Rule Id is auto-generated for each new rule on destination account. It is required for put policy on source account.
     */
    ruleId?: string;
    /**
     * Required. Source container name.
     */
    sourceContainer: string;
}

export interface PermissionScopeResponse {
    /**
     * The permissions for the local user. Possible values include: Read (r), Write (w), Delete (d), List (l), Create (c), Modify Ownership (o), and Modify Permissions (p).
     */
    permissions: string;
    /**
     * The name of resource, normally the container name or the file share name, used by the local user.
     */
    resourceName: string;
    /**
     * The service used by the local user, e.g. blob, file.
     */
    service: string;
}

/**
 * The Private Endpoint Connection resource.
 */
export interface PrivateEndpointConnectionResponse {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * The resource of private end point.
     */
    privateEndpoint?: PrivateEndpointResponse;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateResponse;
    /**
     * The provisioning state of the private endpoint connection resource.
     */
    provisioningState: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}

/**
 * The Private Endpoint resource.
 */
export interface PrivateEndpointResponse {
    /**
     * The ARM identifier for Private Endpoint
     */
    id: string;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateResponse {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionRequired?: string;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: string;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: string;
}

/**
 * Protected append writes history setting for the blob container with Legal holds.
 */
export interface ProtectedAppendWritesHistoryResponse {
    /**
     * When enabled, new blocks can be written to both 'Append and Bock Blobs' while maintaining legal hold protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted.
     */
    allowProtectedAppendWritesAll?: boolean;
    /**
     * Returns the date and time the tag was added.
     */
    timestamp: string;
}

/**
 * Protocol settings for file service
 */
export interface ProtocolSettingsResponse {
    /**
     * Setting for SMB protocol
     */
    smb?: SmbSettingResponse;
}

/**
 * Resource Access Rule.
 */
export interface ResourceAccessRuleResponse {
    /**
     * Resource Id
     */
    resourceId?: string;
    /**
     * Tenant Id
     */
    tenantId?: string;
}

/**
 * The blob service properties for blob restore policy
 */
export interface RestorePolicyPropertiesResponse {
    /**
     * how long this blob can be restored. It should be great than zero and less than DeleteRetentionPolicy.days.
     */
    days?: number;
    /**
     * Blob restore is enabled if set to true.
     */
    enabled: boolean;
    /**
     * Deprecated in favor of minRestoreTime property.
     */
    lastEnabledTime: string;
    /**
     * Returns the minimum date and time that the restore can be started.
     */
    minRestoreTime: string;
}

/**
 * Routing preference defines the type of network, either microsoft or internet routing to be used to deliver the user data, the default option is microsoft routing
 */
export interface RoutingPreferenceResponse {
    /**
     * A boolean flag which indicates whether internet routing storage endpoints are to be published
     */
    publishInternetEndpoints?: boolean;
    /**
     * A boolean flag which indicates whether microsoft routing storage endpoints are to be published
     */
    publishMicrosoftEndpoints?: boolean;
    /**
     * Routing Choice defines the kind of network routing opted by the user.
     */
    routingChoice?: string;
}

/**
 * SasPolicy assigned to the storage account.
 */
export interface SasPolicyResponse {
    /**
     * The SAS Expiration Action defines the action to be performed when sasPolicy.sasExpirationPeriod is violated. The 'Log' action can be used for audit purposes and the 'Block' action can be used to block and deny the usage of SAS tokens that do not adhere to the sas policy expiration period.
     */
    expirationAction: string;
    /**
     * The SAS expiration period, DD.HH:MM:SS.
     */
    sasExpirationPeriod: string;
}
/**
 * sasPolicyResponseProvideDefaults sets the appropriate defaults for SasPolicyResponse
 */
export function sasPolicyResponseProvideDefaults(val: SasPolicyResponse): SasPolicyResponse {
    return {
        ...val,
        expirationAction: (val.expirationAction) ?? "Log",
    };
}

export interface SignedIdentifierResponse {
    /**
     * Access policy
     */
    accessPolicy?: AccessPolicyResponse;
    /**
     * An unique identifier of the stored access policy.
     */
    id?: string;
}

/**
 * The SKU of the storage account.
 */
export interface SkuResponse {
    /**
     * The SKU name. Required for account creation; optional for update. Note that in older versions, SKU name was called accountType.
     */
    name: string;
    /**
     * The SKU tier. This is based on the SKU name.
     */
    tier: string;
}

/**
 * Setting for SMB protocol
 */
export interface SmbSettingResponse {
    /**
     * SMB authentication methods supported by server. Valid values are NTLMv2, Kerberos. Should be passed as a string with delimiter ';'.
     */
    authenticationMethods?: string;
    /**
     * SMB channel encryption supported by server. Valid values are AES-128-CCM, AES-128-GCM, AES-256-GCM. Should be passed as a string with delimiter ';'.
     */
    channelEncryption?: string;
    /**
     * Kerberos ticket encryption supported by server. Valid values are RC4-HMAC, AES-256. Should be passed as a string with delimiter ';'
     */
    kerberosTicketEncryption?: string;
    /**
     * Multichannel setting. Applies to Premium FileStorage only.
     */
    multichannel?: MultichannelResponse;
    /**
     * SMB protocol versions supported by server. Valid values are SMB2.1, SMB3.0, SMB3.1.1. Should be passed as a string with delimiter ';'.
     */
    versions?: string;
}

export interface SshPublicKeyResponse {
    /**
     * Optional. It is used to store the function/usage of the key
     */
    description?: string;
    /**
     * Ssh public key base64 encoded. The format should be: '<keyType> <keyData>', e.g. ssh-rsa AAAABBBB
     */
    key?: string;
}

/**
 * The URIs that are used to perform a retrieval of a public blob, file, web or dfs object via a internet routing endpoint.
 */
export interface StorageAccountInternetEndpointsResponse {
    /**
     * Gets the blob endpoint.
     */
    blob: string;
    /**
     * Gets the dfs endpoint.
     */
    dfs: string;
    /**
     * Gets the file endpoint.
     */
    file: string;
    /**
     * Gets the web endpoint.
     */
    web: string;
}

/**
 * An access key for the storage account.
 */
export interface StorageAccountKeyResponse {
    /**
     * Creation time of the key, in round trip date format.
     */
    creationTime: string;
    /**
     * Name of the key.
     */
    keyName: string;
    /**
     * Permissions for the key -- read-only or full permissions.
     */
    permissions: string;
    /**
     * Base 64-encoded value of the key.
     */
    value: string;
}

/**
 * The URIs that are used to perform a retrieval of a public blob, queue, table, web or dfs object via a microsoft routing endpoint.
 */
export interface StorageAccountMicrosoftEndpointsResponse {
    /**
     * Gets the blob endpoint.
     */
    blob: string;
    /**
     * Gets the dfs endpoint.
     */
    dfs: string;
    /**
     * Gets the file endpoint.
     */
    file: string;
    /**
     * Gets the queue endpoint.
     */
    queue: string;
    /**
     * Gets the table endpoint.
     */
    table: string;
    /**
     * Gets the web endpoint.
     */
    web: string;
}

/**
 * This defines the sku conversion status object for asynchronous sku conversions.
 */
export interface StorageAccountSkuConversionStatusResponse {
    /**
     * This property represents the sku conversion end time.
     */
    endTime: string;
    /**
     * This property indicates the current sku conversion status.
     */
    skuConversionStatus: string;
    /**
     * This property represents the sku conversion start time.
     */
    startTime: string;
    /**
     * This property represents the target sku name to which the account sku is being converted asynchronously.
     */
    targetSkuName?: string;
}

/**
 * Execution context of the storage task assignment.
 */
export interface StorageTaskAssignmentExecutionContextResponse {
    /**
     * Execution target of the storage task assignment
     */
    target?: ExecutionTargetResponse;
    /**
     * Execution trigger of the storage task assignment
     */
    trigger: ExecutionTriggerResponse;
}

/**
 * Properties of the storage task assignment.
 */
export interface StorageTaskAssignmentPropertiesResponse {
    /**
     * Text that describes the purpose of the storage task assignment
     */
    description: string;
    /**
     * Whether the storage task assignment is enabled or not
     */
    enabled: boolean;
    /**
     * The storage task assignment execution context
     */
    executionContext: StorageTaskAssignmentExecutionContextResponse;
    /**
     * Represents the provisioning state of the storage task assignment.
     */
    provisioningState: string;
    /**
     * The storage task assignment report
     */
    report: StorageTaskAssignmentReportResponse;
    /**
     * Run status of storage task assignment
     */
    runStatus?: StorageTaskReportPropertiesResponse;
    /**
     * Id of the corresponding storage task
     */
    taskId: string;
}

/**
 * The storage task assignment report
 */
export interface StorageTaskAssignmentReportResponse {
    /**
     * The container prefix for the location of storage task assignment report
     */
    prefix: string;
}

/**
 * Storage task execution report for a run instance.
 */
export interface StorageTaskReportPropertiesResponse {
    /**
     * End time of the run instance. Filter options such as startTime gt '2023-06-26T20:51:24.4494016Z' and other comparison operators can be used as described for DateTime properties in https://learn.microsoft.com/rest/api/storageservices/querying-tables-and-entities#supported-comparison-operators
     */
    finishTime: string;
    /**
     * Total number of objects where task operation failed when was attempted. Filter options such as objectFailedCount eq 0 and other comparison operators can be used as described for Numerical properties in https://learn.microsoft.com/rest/api/storageservices/querying-tables-and-entities#supported-comparison-operators
     */
    objectFailedCount: string;
    /**
     * Total number of objects that meet the storage tasks condition and were operated upon. Filter options such as objectsOperatedOnCount ge 100 and other comparison operators can be used as described for Numerical properties in https://learn.microsoft.com/rest/api/storageservices/querying-tables-and-entities#supported-comparison-operators
     */
    objectsOperatedOnCount: string;
    /**
     * Total number of objects where task operation succeeded when was attempted.Filter options such as objectsSucceededCount gt 150 and other comparison operators can be used as described for Numerical properties in https://learn.microsoft.com/rest/api/storageservices/querying-tables-and-entities#supported-comparison-operators
     */
    objectsSucceededCount: string;
    /**
     * Total number of objects that meet the condition as defined in the storage task assignment execution context. Filter options such as objectsTargetedCount gt 50 and other comparison operators can be used as described for Numerical properties in https://learn.microsoft.com/rest/api/storageservices/querying-tables-and-entities#supported-comparison-operators
     */
    objectsTargetedCount: string;
    /**
     * Represents the overall result of the execution for the run instance
     */
    runResult: string;
    /**
     * Represents the status of the execution.
     */
    runStatusEnum: string;
    /**
     * Well known Azure Storage error code that represents the error encountered during execution of the run instance.
     */
    runStatusError: string;
    /**
     * Start time of the run instance. Filter options such as startTime gt '2023-06-26T20:51:24.4494016Z' and other comparison operators can be used as described for DateTime properties in https://learn.microsoft.com/rest/api/storageservices/querying-tables-and-entities#supported-comparison-operators
     */
    startTime: string;
    /**
     * Represents the Storage Account Id where the storage task definition was applied and executed.
     */
    storageAccountId: string;
    /**
     * Full path to the verbose report stored in the reporting container as specified in the assignment execution context for the storage account. 
     */
    summaryReportPath: string;
    /**
     * Represents the Storage Task Assignment Id associated with the storage task that provided an execution context.
     */
    taskAssignmentId: string;
    /**
     * Storage Task Arm Id.
     */
    taskId: string;
    /**
     * Storage Task Version
     */
    taskVersion: string;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}

/**
 * Table Access Policy Properties Object.
 */
export interface TableAccessPolicyResponse {
    /**
     * Expiry time of the access policy
     */
    expiryTime?: string;
    /**
     * Required. List of abbreviated permissions. Supported permission values include 'r','a','u','d'
     */
    permission: string;
    /**
     * Start time of the access policy
     */
    startTime?: string;
}

/**
 * Object to set Table Access Policy.
 */
export interface TableSignedIdentifierResponse {
    /**
     * Access policy
     */
    accessPolicy?: TableAccessPolicyResponse;
    /**
     * unique-64-character-value of the stored access policy.
     */
    id: string;
}

/**
 * Blob index tag based filtering for blob objects
 */
export interface TagFilterResponse {
    /**
     * This is the filter tag name, it can have 1 - 128 characters
     */
    name: string;
    /**
     * This is the comparison operator which is used for object comparison and filtering. Only == (equality operator) is currently supported
     */
    op: string;
    /**
     * This is the filter tag value field used for tag based filtering, it can have 0 - 256 characters
     */
    value: string;
}

/**
 * A tag of the LegalHold of a blob container.
 */
export interface TagPropertyResponse {
    /**
     * Returns the Object ID of the user who added the tag.
     */
    objectIdentifier: string;
    /**
     * The tag value.
     */
    tag: string;
    /**
     * Returns the Tenant ID that issued the token for the user who added the tag.
     */
    tenantId: string;
    /**
     * Returns the date and time the tag was added.
     */
    timestamp: string;
    /**
     * Returns the User Principal Name of the user who added the tag.
     */
    upn: string;
}

/**
 * The trigger parameters update for the storage task assignment execution
 */
export interface TriggerParametersResponse {
    /**
     * When to end task execution. This is a required field when ExecutionTrigger.properties.type is 'OnSchedule'; this property should not be present when ExecutionTrigger.properties.type is 'RunOnce'
     */
    endBy?: string;
    /**
     * Run interval of task execution. This is a required field when ExecutionTrigger.properties.type is 'OnSchedule'; this property should not be present when ExecutionTrigger.properties.type is 'RunOnce'
     */
    interval?: number;
    /**
     * Run interval unit of task execution. This is a required field when ExecutionTrigger.properties.type is 'OnSchedule'; this property should not be present when ExecutionTrigger.properties.type is 'RunOnce'
     */
    intervalUnit?: string;
    /**
     * When to start task execution. This is a required field when ExecutionTrigger.properties.type is 'OnSchedule'; this property should not be present when ExecutionTrigger.properties.type is 'RunOnce'
     */
    startFrom?: string;
    /**
     * When to start task execution. This is an optional field when ExecutionTrigger.properties.type is 'RunOnce'; this property should not be present when ExecutionTrigger.properties.type is 'OnSchedule'
     */
    startOn?: string;
}

/**
 * An update history of the ImmutabilityPolicy of a blob container.
 */
export interface UpdateHistoryPropertyResponse {
    /**
     * This property can only be changed for unlocked time-based retention policies. When enabled, new blocks can be written to an append blob while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. This property cannot be changed with ExtendImmutabilityPolicy API.
     */
    allowProtectedAppendWrites?: boolean;
    /**
     * This property can only be changed for unlocked time-based retention policies. When enabled, new blocks can be written to both 'Append and Bock Blobs' while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. This property cannot be changed with ExtendImmutabilityPolicy API. The 'allowProtectedAppendWrites' and 'allowProtectedAppendWritesAll' properties are mutually exclusive.
     */
    allowProtectedAppendWritesAll?: boolean;
    /**
     * The immutability period for the blobs in the container since the policy creation, in days.
     */
    immutabilityPeriodSinceCreationInDays: number;
    /**
     * Returns the Object ID of the user who updated the ImmutabilityPolicy.
     */
    objectIdentifier: string;
    /**
     * Returns the Tenant ID that issued the token for the user who updated the ImmutabilityPolicy.
     */
    tenantId: string;
    /**
     * Returns the date and time the ImmutabilityPolicy was updated.
     */
    timestamp: string;
    /**
     * The ImmutabilityPolicy update type of a blob container, possible values include: put, lock and extend.
     */
    update: string;
    /**
     * Returns the User Principal Name of the user who updated the ImmutabilityPolicy.
     */
    upn: string;
}

/**
 * UserAssignedIdentity for the resource.
 */
export interface UserAssignedIdentityResponse {
    /**
     * The client ID of the identity.
     */
    clientId: string;
    /**
     * The principal ID of the identity.
     */
    principalId: string;
}

/**
 * Virtual Network rule.
 */
export interface VirtualNetworkRuleResponse {
    /**
     * The action of virtual network rule.
     */
    action?: string;
    /**
     * Gets the state of virtual network rule.
     */
    state?: string;
    /**
     * Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.
     */
    virtualNetworkResourceId: string;
}
/**
 * virtualNetworkRuleResponseProvideDefaults sets the appropriate defaults for VirtualNetworkRuleResponse
 */
export function virtualNetworkRuleResponseProvideDefaults(val: VirtualNetworkRuleResponse): VirtualNetworkRuleResponse {
    return {
        ...val,
        action: (val.action) ?? "Allow",
    };
}
