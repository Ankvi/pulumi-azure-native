import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Delete option with duration
 */
export interface AbsoluteDeleteOptionResponse {
    /**
     * Duration of deletion after given timespan
     */
    duration: string;
    /**
     * Type of the specific object - used for deserializing
     * Expected value is 'AbsoluteDeleteOption'.
     */
    objectType: "AbsoluteDeleteOption";
}

/**
 * Adhoc backup tagging criteria
 */
export interface AdhocBasedTaggingCriteriaResponse {
    /**
     * Retention tag information
     */
    tagInfo?: RetentionTagResponse;
}

/**
 * Adhoc trigger context
 */
export interface AdhocBasedTriggerContextResponse {
    /**
     * Type of the specific object - used for deserializing
     * Expected value is 'AdhocBasedTriggerContext'.
     */
    objectType: "AdhocBasedTriggerContext";
    /**
     * Tagging Criteria containing retention tag for adhoc backup.
     */
    taggingCriteria: AdhocBasedTaggingCriteriaResponse;
}

/**
 * Azure backup parameters
 */
export interface AzureBackupParamsResponse {
    /**
     * BackupType ; Full/Incremental etc
     */
    backupType: string;
    /**
     * Type of the specific object - used for deserializing
     * Expected value is 'AzureBackupParams'.
     */
    objectType: "AzureBackupParams";
}

/**
 * Azure backup rule
 */
export interface AzureBackupRuleResponse {
    /**
     * BackupParameters base
     */
    backupParameters?: AzureBackupParamsResponse;
    /**
     * DataStoreInfo base
     */
    dataStore: DataStoreInfoBaseResponse;
    name: string;
    /**
     *
     * Expected value is 'AzureBackupRule'.
     */
    objectType: "AzureBackupRule";
    /**
     * Trigger context
     */
    trigger: AdhocBasedTriggerContextResponse | ScheduleBasedTriggerContextResponse;
}

/**
 * Settings for Azure Monitor based alerts
 */
export interface AzureMonitorAlertSettingsResponse {
    alertsForAllJobFailures?: string;
}

/**
 * Parameters for Operational-Tier DataStore
 */
export interface AzureOperationalStoreParametersResponse {
    /**
     * type of datastore; Operational/Vault/Archive
     */
    dataStoreType: string;
    /**
     * Type of the specific object - used for deserializing
     * Expected value is 'AzureOperationalStoreParameters'.
     */
    objectType: "AzureOperationalStoreParameters";
    /**
     * Gets or sets the Snapshot Resource Group Uri.
     */
    resourceGroupId?: string;
}

/**
 * Azure retention rule
 */
export interface AzureRetentionRuleResponse {
    isDefault?: boolean;
    lifecycles: SourceLifeCycleResponse[];
    name: string;
    /**
     *
     * Expected value is 'AzureRetentionRule'.
     */
    objectType: "AzureRetentionRule";
}

/**
 * Backup Instance
 */
export interface BackupInstanceResponse {
    /**
     * Specifies the current protection state of the resource
     */
    currentProtectionState: string;
    /**
     * Gets or sets the data source information.
     */
    dataSourceInfo: DatasourceResponse;
    /**
     * Gets or sets the data source set information.
     */
    dataSourceSetInfo?: DatasourceSetResponse;
    /**
     * Credentials to use to authenticate with data source provider.
     */
    datasourceAuthCredentials?: SecretStoreBasedAuthCredentialsResponse;
    /**
     * Gets or sets the Backup Instance friendly name.
     */
    friendlyName?: string;
    objectType: string;
    /**
     * Gets or sets the policy information.
     */
    policyInfo: PolicyInfoResponse;
    /**
     * Specifies the protection error of the resource
     */
    protectionErrorDetails: UserFacingErrorResponse;
    /**
     * Specifies the protection status of the resource
     */
    protectionStatus: ProtectionStatusDetailsResponse;
    /**
     * Specifies the provisioning state of the resource i.e. provisioning/updating/Succeeded/Failed
     */
    provisioningState: string;
    /**
     * Specifies the type of validation. In case of DeepValidation, all validations from /validateForBackup API will run again.
     */
    validationType?: string;
}

/**
 * Rule based backup policy
 */
export interface BackupPolicyResponse {
    /**
     * Type of datasource for the backup management
     */
    datasourceTypes: string[];
    /**
     *
     * Expected value is 'BackupPolicy'.
     */
    objectType: "BackupPolicy";
    /**
     * Policy rule dictionary that contains rules for each backuptype i.e Full/Incremental/Logs etc
     */
    policyRules: (AzureBackupRuleResponse | AzureRetentionRuleResponse)[];
}

/**
 * Schedule for backup
 */
export interface BackupScheduleResponse {
    /**
     * ISO 8601 repeating time interval format
     */
    repeatingTimeIntervals: string[];
    /**
     * Time zone for a schedule. Example: Pacific Standard Time
     */
    timeZone?: string;
}

/**
 * Backup Vault
 */
export interface BackupVaultResponse {
    /**
     * Feature Settings
     */
    featureSettings?: FeatureSettingsResponse;
    /**
     * Is vault protected by resource guard
     */
    isVaultProtectedByResourceGuard: boolean;
    /**
     * Monitoring Settings
     */
    monitoringSettings?: MonitoringSettingsResponse;
    /**
     * Provisioning state of the BackupVault resource
     */
    provisioningState: string;
    /**
     * Resource move details for backup vault
     */
    resourceMoveDetails: ResourceMoveDetailsResponse;
    /**
     * Resource move state for backup vault
     */
    resourceMoveState: string;
    /**
     * Security Settings
     */
    securitySettings?: SecuritySettingsResponse;
    /**
     * Storage Settings
     */
    storageSettings: StorageSettingResponse[];
}

/**
 * Parameters to be used during configuration of backup of blobs
 */
export interface BlobBackupDatasourceParametersResponse {
    /**
     * List of containers to be backed up during configuration of backup of blobs
     */
    containersList: string[];
    /**
     * Type of the specific object - used for deserializing
     * Expected value is 'BlobBackupDatasourceParameters'.
     */
    objectType: "BlobBackupDatasourceParameters";
}

/**
 * Copy on Expiry Option
 */
export interface CopyOnExpiryOptionResponse {
    /**
     * Type of the specific object - used for deserializing
     * Expected value is 'CopyOnExpiryOption'.
     */
    objectType: "CopyOnExpiryOption";
}

/**
 * CrossSubscriptionRestore Settings
 */
export interface CrossSubscriptionRestoreSettingsResponse {
    /**
     * CrossSubscriptionRestore state
     */
    state?: string;
}

/**
 * Duration based custom options to copy
 */
export interface CustomCopyOptionResponse {
    /**
     * Data copied after given timespan
     */
    duration?: string;
    /**
     * Type of the specific object - used for deserializing
     * Expected value is 'CustomCopyOption'.
     */
    objectType: "CustomCopyOption";
}

/**
 * DataStoreInfo base
 */
export interface DataStoreInfoBaseResponse {
    /**
     * type of datastore; Operational/Vault/Archive
     */
    dataStoreType: string;
    /**
     * Type of Datasource object, used to initialize the right inherited type
     */
    objectType: string;
}

/**
 * Datasource to be backed up
 */
export interface DatasourceResponse {
    /**
     * DatasourceType of the resource.
     */
    datasourceType?: string;
    /**
     * Type of Datasource object, used to initialize the right inherited type
     */
    objectType?: string;
    /**
     * Full ARM ID of the resource. For azure resources, this is ARM ID. For non azure resources, this will be the ID created by backup service via Fabric/Vault.
     */
    resourceID: string;
    /**
     * Location of datasource.
     */
    resourceLocation?: string;
    /**
     * Unique identifier of the resource in the context of parent.
     */
    resourceName?: string;
    /**
     * Resource Type of Datasource.
     */
    resourceType?: string;
    /**
     * Uri of the resource.
     */
    resourceUri?: string;
}

/**
 * DatasourceSet details of datasource to be backed up
 */
export interface DatasourceSetResponse {
    /**
     * DatasourceType of the resource.
     */
    datasourceType?: string;
    /**
     * Type of Datasource object, used to initialize the right inherited type
     */
    objectType?: string;
    /**
     * Full ARM ID of the resource. For azure resources, this is ARM ID. For non azure resources, this will be the ID created by backup service via Fabric/Vault.
     */
    resourceID: string;
    /**
     * Location of datasource.
     */
    resourceLocation?: string;
    /**
     * Unique identifier of the resource in the context of parent.
     */
    resourceName?: string;
    /**
     * Resource Type of Datasource.
     */
    resourceType?: string;
    /**
     * Uri of the resource.
     */
    resourceUri?: string;
}

/**
 * Day of the week
 */
export interface DayResponse {
    /**
     * Date of the month
     */
    date?: number;
    /**
     * Whether Date is last date of month
     */
    isLast?: boolean;
}

/**
 * Identity details
 */
export interface DppIdentityDetailsResponse {
    /**
     * The object ID of the service principal object for the managed identity that is used to grant role-based access to an Azure resource.
     */
    principalId: string;
    /**
     * A Globally Unique Identifier (GUID) that represents the Azure AD tenant where the resource is now a member.
     */
    tenantId: string;
    /**
     * The identityType which can be either SystemAssigned or None
     */
    type?: string;
}

/**
 * Class containing feature settings of vault
 */
export interface FeatureSettingsResponse {
    /**
     * CrossSubscriptionRestore Settings
     */
    crossSubscriptionRestoreSettings?: CrossSubscriptionRestoreSettingsResponse;
}

/**
 * Immediate copy Option
 */
export interface ImmediateCopyOptionResponse {
    /**
     * Type of the specific object - used for deserializing
     * Expected value is 'ImmediateCopyOption'.
     */
    objectType: "ImmediateCopyOption";
}

/**
 * Immutability Settings at vault level
 */
export interface ImmutabilitySettingsResponse {
    /**
     * Immutability state
     */
    state?: string;
}

/**
 * Inner Error
 */
export interface InnerErrorResponse {
    /**
     * Any Key value pairs that can be provided to the client for additional  verbose information.
     */
    additionalInfo?: {[key: string]: string};
    /**
     * Unique code for this error
     */
    code?: string;
    /**
     * Child Inner Error, to allow Nesting.
     */
    embeddedInnerError?: InnerErrorResponse;
}

/**
 * Parameters for Kubernetes Cluster Backup Datasource
 */
export interface KubernetesClusterBackupDatasourceParametersResponse {
    /**
     * Gets or sets the exclude namespaces property. This property sets the namespaces to be excluded during restore.
     */
    excludedNamespaces?: string[];
    /**
     * Gets or sets the exclude resource types property. This property sets the resource types to be excluded during restore.
     */
    excludedResourceTypes?: string[];
    /**
     * Gets or sets the include cluster resources property. This property if enabled will include cluster scope resources during restore.
     */
    includeClusterScopeResources: boolean;
    /**
     * Gets or sets the include namespaces property. This property sets the namespaces to be included during restore.
     */
    includedNamespaces?: string[];
    /**
     * Gets or sets the include resource types property. This property sets the resource types to be included during restore.
     */
    includedResourceTypes?: string[];
    /**
     * Gets or sets the LabelSelectors property. This property sets the resource with such label selectors to be included during restore.
     */
    labelSelectors?: string[];
    /**
     * Type of the specific object - used for deserializing
     * Expected value is 'KubernetesClusterBackupDatasourceParameters'.
     */
    objectType: "KubernetesClusterBackupDatasourceParameters";
    /**
     * Gets or sets the volume snapshot property. This property if enabled will take volume snapshots during restore.
     */
    snapshotVolumes: boolean;
}

/**
 * Monitoring Settings
 */
export interface MonitoringSettingsResponse {
    /**
     * Settings for Azure Monitor based alerts
     */
    azureMonitorAlertSettings?: AzureMonitorAlertSettingsResponse;
}

/**
 * Policy Info in backupInstance
 */
export interface PolicyInfoResponse {
    policyId: string;
    /**
     * Policy parameters for the backup instance
     */
    policyParameters?: PolicyParametersResponse;
    policyVersion: string;
}

/**
 * Parameters in Policy
 */
export interface PolicyParametersResponse {
    /**
     * Gets or sets the Backup Data Source Parameters
     */
    backupDatasourceParametersList?: (BlobBackupDatasourceParametersResponse | KubernetesClusterBackupDatasourceParametersResponse)[];
    /**
     * Gets or sets the DataStore Parameters
     */
    dataStoreParametersList?: AzureOperationalStoreParametersResponse[];
}

/**
 * Protection status details
 */
export interface ProtectionStatusDetailsResponse {
    /**
     * Specifies the protection status error of the resource
     */
    errorDetails?: UserFacingErrorResponse;
    /**
     * Specifies the protection status of the resource
     */
    status?: string;
}

/**
 * VaultCritical Operation protected by a resource guard
 */
export interface ResourceGuardOperationDetailResponse {
    defaultResourceRequest?: string;
    vaultCriticalOperation?: string;
}

/**
 * This class contains all the details about a critical operation.
 */
export interface ResourceGuardOperationResponse {
    /**
     * Type of resource request.
     */
    requestResourceType: string;
    /**
     * Name of the critical operation.
     */
    vaultCriticalOperation: string;
}

/**
 * ResourceGuardProxyBase object, used in ResourceGuardProxyBaseResource
 */
export interface ResourceGuardProxyBaseResponse {
    description?: string;
    lastUpdatedTime?: string;
    resourceGuardOperationDetails?: ResourceGuardOperationDetailResponse[];
    resourceGuardResourceId?: string;
}

export interface ResourceGuardResponse {
    /**
     * This flag indicates whether auto approval is allowed or not.
     */
    allowAutoApprovals: boolean;
    /**
     * Description about the pre-req steps to perform all the critical operations.
     */
    description: string;
    /**
     * Provisioning state of the BackupVault resource
     */
    provisioningState: string;
    /**
     * {readonly} List of operation details those are protected by the ResourceGuard resource
     */
    resourceGuardOperations: ResourceGuardOperationResponse[];
    /**
     * List of critical operations which are not protected by this resourceGuard
     */
    vaultCriticalOperationExclusionList?: string[];
}

/**
 * ResourceMoveDetails will be returned in response to GetResource call from ARM
 */
export interface ResourceMoveDetailsResponse {
    /**
     * Completion time in UTC of latest ResourceMove operation attempted. ISO 8601 format.
     */
    completionTimeUtc?: string;
    /**
     * CorrelationId of latest ResourceMove operation attempted
     */
    operationId?: string;
    /**
     * ARM resource path of source resource
     */
    sourceResourcePath?: string;
    /**
     * Start time in UTC of latest ResourceMove operation attempted. ISO 8601 format.
     */
    startTimeUtc?: string;
    /**
     * ARM resource path of target resource used in latest ResourceMove operation
     */
    targetResourcePath?: string;
}

/**
 * Retention tag
 */
export interface RetentionTagResponse {
    /**
     * Retention Tag version.
     */
    eTag: string;
    /**
     * Retention Tag version.
     */
    id: string;
    /**
     * Retention Tag Name to relate it to retention rule.
     */
    tagName: string;
}

/**
 * Schedule based backup criteria
 */
export interface ScheduleBasedBackupCriteriaResponse {
    /**
     * it contains absolute values like "AllBackup" / "FirstOfDay" / "FirstOfWeek" / "FirstOfMonth"
     * and should be part of AbsoluteMarker enum
     */
    absoluteCriteria?: string[];
    /**
     * This is day of the month from 1 to 28 other wise last of month
     */
    daysOfMonth?: DayResponse[];
    /**
     * It should be Sunday/Monday/T..../Saturday
     */
    daysOfTheWeek?: string[];
    /**
     * It should be January/February/....../December
     */
    monthsOfYear?: string[];
    /**
     * Type of the specific object - used for deserializing
     * Expected value is 'ScheduleBasedBackupCriteria'.
     */
    objectType: "ScheduleBasedBackupCriteria";
    /**
     * List of schedule times for backup
     */
    scheduleTimes?: string[];
    /**
     * It should be First/Second/Third/Fourth/Last
     */
    weeksOfTheMonth?: string[];
}

/**
 * Schedule based trigger context
 */
export interface ScheduleBasedTriggerContextResponse {
    /**
     * Type of the specific object - used for deserializing
     * Expected value is 'ScheduleBasedTriggerContext'.
     */
    objectType: "ScheduleBasedTriggerContext";
    /**
     * Schedule for this backup
     */
    schedule: BackupScheduleResponse;
    /**
     * List of tags that can be applicable for given schedule.
     */
    taggingCriteria: TaggingCriteriaResponse[];
}

/**
 * Secret store based authentication credentials.
 */
export interface SecretStoreBasedAuthCredentialsResponse {
    /**
     * Type of the specific object - used for deserializing
     * Expected value is 'SecretStoreBasedAuthCredentials'.
     */
    objectType: "SecretStoreBasedAuthCredentials";
    /**
     * Secret store resource
     */
    secretStoreResource?: SecretStoreResourceResponse;
}

/**
 * Class representing a secret store resource.
 */
export interface SecretStoreResourceResponse {
    /**
     * Gets or sets the type of secret store
     */
    secretStoreType: string;
    /**
     * Uri to get to the resource
     */
    uri?: string;
    /**
     * Gets or sets value stored in secret store resource
     */
    value?: string;
}

/**
 * Class containing security settings of vault
 */
export interface SecuritySettingsResponse {
    /**
     * Immutability Settings at vault level
     */
    immutabilitySettings?: ImmutabilitySettingsResponse;
    /**
     * Soft delete related settings
     */
    softDeleteSettings?: SoftDeleteSettingsResponse;
}

/**
 * Soft delete related settings
 */
export interface SoftDeleteSettingsResponse {
    /**
     * Soft delete retention duration
     */
    retentionDurationInDays?: number;
    /**
     * State of soft delete
     */
    state?: string;
}

/**
 * Source LifeCycle
 */
export interface SourceLifeCycleResponse {
    /**
     * Delete Option
     */
    deleteAfter: AbsoluteDeleteOptionResponse;
    /**
     * DataStoreInfo base
     */
    sourceDataStore: DataStoreInfoBaseResponse;
    targetDataStoreCopySettings?: TargetCopySettingResponse[];
}

/**
 * Storage setting
 */
export interface StorageSettingResponse {
    /**
     * Gets or sets the type of the datastore.
     */
    datastoreType?: string;
    /**
     * Gets or sets the type.
     */
    type?: string;
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
 * Tagging criteria
 */
export interface TaggingCriteriaResponse {
    /**
     * Criteria which decides whether the tag can be applied to a triggered backup.
     */
    criteria?: ScheduleBasedBackupCriteriaResponse[];
    /**
     * Specifies if tag is default.
     */
    isDefault: boolean;
    /**
     * Retention tag information
     */
    tagInfo: RetentionTagResponse;
    /**
     * Retention Tag priority.
     */
    taggingPriority: number;
}

/**
 * Target copy settings
 */
export interface TargetCopySettingResponse {
    /**
     * It can be CustomCopyOption or ImmediateCopyOption.
     */
    copyAfter: CopyOnExpiryOptionResponse | CustomCopyOptionResponse | ImmediateCopyOptionResponse;
    /**
     * Info of target datastore
     */
    dataStore: DataStoreInfoBaseResponse;
}

/**
 * Error object used by layers that have access to localized content, and propagate that to user
 */
export interface UserFacingErrorResponse {
    /**
     * Unique code for this error
     */
    code?: string;
    /**
     * Additional related Errors
     */
    details?: UserFacingErrorResponse[];
    /**
     * Inner Error
     */
    innerError?: InnerErrorResponse;
    /**
     * Whether the operation will be retryable or not
     */
    isRetryable?: boolean;
    /**
     * Whether the operation is due to a user error or service error
     */
    isUserError?: boolean;
    message?: string;
    /**
     * Any key value pairs that can be injected inside error object
     */
    properties?: {[key: string]: string};
    /**
     * RecommendedAction � localized.
     */
    recommendedAction?: string[];
    /**
     * Target of the error.
     */
    target?: string;
}




