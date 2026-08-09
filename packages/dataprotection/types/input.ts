import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Delete option with duration
 */
export interface AbsoluteDeleteOptionArgs {
    /**
     * Duration of deletion after given timespan
     */
    duration: pulumi.Input<string>;
    /**
     * Type of the specific object - used for deserializing
     * Expected value is 'AbsoluteDeleteOption'.
     */
    objectType: pulumi.Input<"AbsoluteDeleteOption">;
}

/**
 * Adhoc backup tagging criteria
 */
export interface AdhocBasedTaggingCriteriaArgs {
    /**
     * Retention tag information
     */
    tagInfo?: pulumi.Input<RetentionTagArgs | undefined>;
}

/**
 * Adhoc trigger context
 */
export interface AdhocBasedTriggerContextArgs {
    /**
     * Type of the specific object - used for deserializing
     * Expected value is 'AdhocBasedTriggerContext'.
     */
    objectType: pulumi.Input<"AdhocBasedTriggerContext">;
    /**
     * Tagging Criteria containing retention tag for adhoc backup.
     */
    taggingCriteria: pulumi.Input<AdhocBasedTaggingCriteriaArgs>;
}

/**
 * Azure backup parameters
 */
export interface AzureBackupParamsArgs {
    /**
     * BackupType ; Full/Incremental etc
     */
    backupType: pulumi.Input<string>;
    /**
     * Type of the specific object - used for deserializing
     * Expected value is 'AzureBackupParams'.
     */
    objectType: pulumi.Input<"AzureBackupParams">;
}

/**
 * Azure backup rule
 */
export interface AzureBackupRuleArgs {
    /**
     * BackupParameters base
     */
    backupParameters?: pulumi.Input<AzureBackupParamsArgs | undefined>;
    /**
     * DataStoreInfo base
     */
    dataStore: pulumi.Input<DataStoreInfoBaseArgs>;
    name: pulumi.Input<string>;
    /**
     * Expected value is 'AzureBackupRule'.
     */
    objectType: pulumi.Input<"AzureBackupRule">;
    /**
     * Trigger context
     */
    trigger: pulumi.Input<AdhocBasedTriggerContextArgs | ScheduleBasedTriggerContextArgs>;
}

/**
 * Settings for Azure Monitor based alerts
 */
export interface AzureMonitorAlertSettingsArgs {
    alertsForAllJobFailures?: pulumi.Input<string | enums.AlertsState | undefined>;
}

/**
 * Parameters for Operational-Tier DataStore
 */
export interface AzureOperationalStoreParametersArgs {
    /**
     * type of datastore; Operational/Vault/Archive
     */
    dataStoreType: pulumi.Input<string | enums.DataStoreTypes>;
    /**
     * Type of the specific object - used for deserializing
     * Expected value is 'AzureOperationalStoreParameters'.
     */
    objectType: pulumi.Input<"AzureOperationalStoreParameters">;
    /**
     * Gets or sets the Snapshot Resource Group Uri.
     */
    resourceGroupId?: pulumi.Input<string | undefined>;
}

/**
 * Azure retention rule
 */
export interface AzureRetentionRuleArgs {
    isDefault?: pulumi.Input<boolean | undefined>;
    lifecycles: pulumi.Input<pulumi.Input<SourceLifeCycleArgs>[]>;
    name: pulumi.Input<string>;
    /**
     * Expected value is 'AzureRetentionRule'.
     */
    objectType: pulumi.Input<"AzureRetentionRule">;
}

/**
 * Backup Instance
 */
export interface BackupInstanceArgs {
    /**
     * Gets or sets the data source information.
     */
    dataSourceInfo: pulumi.Input<DatasourceArgs>;
    /**
     * Gets or sets the data source set information.
     */
    dataSourceSetInfo?: pulumi.Input<DatasourceSetArgs | undefined>;
    /**
     * Credentials to use to authenticate with data source provider.
     */
    datasourceAuthCredentials?: pulumi.Input<SecretStoreBasedAuthCredentialsArgs | undefined>;
    /**
     * Gets or sets the Backup Instance friendly name.
     */
    friendlyName?: pulumi.Input<string | undefined>;
    /**
     * Contains information of the Identity Details for the BI.
     * If it is null, default will be considered as System Assigned.
     */
    identityDetails?: pulumi.Input<IdentityDetailsArgs | undefined>;
    objectType: pulumi.Input<string>;
    /**
     * Gets or sets the policy information.
     */
    policyInfo: pulumi.Input<PolicyInfoArgs>;
    /**
     * ResourceGuardOperationRequests on which LAC check will be performed
     */
    resourceGuardOperationRequests?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Specifies the type of validation. In case of DeepValidation, all validations from /validateForBackup API will run again.
     */
    validationType?: pulumi.Input<string | enums.ValidationType | undefined>;
}

/**
 * Rule based backup policy
 */
export interface BackupPolicyArgs {
    /**
     * Type of datasource for the backup management
     */
    datasourceTypes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Expected value is 'BackupPolicy'.
     */
    objectType: pulumi.Input<"BackupPolicy">;
    /**
     * Policy rule dictionary that contains rules for each backuptype i.e Full/Incremental/Logs etc
     */
    policyRules: pulumi.Input<pulumi.Input<AzureBackupRuleArgs | AzureRetentionRuleArgs>[]>;
}

/**
 * Schedule for backup
 */
export interface BackupScheduleArgs {
    /**
     * Repeating time intervals that define the backup schedule.
     *
     * Each value must follow the format: `R/YYYY-MM-DDThh:mm:ss[.fff][Z|(+/-)hh:mm]/Duration`
     *
     * Only the exact formats listed below are supported. Other ISO 8601 variations are not accepted.
     *
     * Supported time formats:
     * - `Thh:mm:ss.fff` (with milliseconds)
     * - `Thh:mm:ss` (with seconds)
     * - `Thh:mm` (hours and minutes only)
     *
     * A timezone indicator (`Z`, `+hh:mm`, or `-hh:mm`) may be appended to any of the above.
     *
     * Unsupported formats include compact notation such as `T1430`, `T143045`, or `T14.5`.
     *
     * Examples:
     * - `R/2023-10-15T14:30:00Z/P1W`
     * - `R/2023-10-15T14:30:45.123+05:30/P1D`
     * - `R/2023-10-15T14:30Z/P1D`
     */
    repeatingTimeIntervals: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Time Zone for a schedule.
     *
     * Supported timezone indicators include:
     * - 'Z' for UTC
     * - '+00:00'
     * - '+05:30'
     * - '-08:00'
     *
     * Examples:
     * - 2023-10-15T14:30:45Z
     * - 2023-10-15T14:30:45.123+05:30
     * - 2023-10-15T14:30-08:00
     */
    timeZone?: pulumi.Input<string | undefined>;
}

/**
 * Backup Vault
 */
export interface BackupVaultArgs {
    /**
     * Feature Settings
     */
    featureSettings?: pulumi.Input<FeatureSettingsArgs | undefined>;
    /**
     * Monitoring Settings
     */
    monitoringSettings?: pulumi.Input<MonitoringSettingsArgs | undefined>;
    /**
     * List of replicated regions for Backup Vault
     */
    replicatedRegions?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * ResourceGuardOperationRequests on which LAC check will be performed
     */
    resourceGuardOperationRequests?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Security Settings
     */
    securitySettings?: pulumi.Input<SecuritySettingsArgs | undefined>;
    /**
     * Storage Settings
     */
    storageSettings: pulumi.Input<pulumi.Input<StorageSettingArgs>[]>;
}

/**
 * Parameters to be used during configuration of backup of blobs
 */
export interface BlobBackupDatasourceParametersArgs {
    /**
     * List of containers to be backed up during configuration of backup of blobs
     */
    containersList: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Type of the specific object - used for deserializing
     * Expected value is 'BlobBackupDatasourceParameters'.
     */
    objectType: pulumi.Input<"BlobBackupDatasourceParameters">;
}

/**
 * The details of the managed identity used for CMK
 */
export interface CmkKekIdentityArgs {
    /**
     * The managed identity to be used which has access permissions to the Key Vault. Provide a value here in case identity types: 'UserAssigned' only.
     */
    identityId?: pulumi.Input<string | undefined>;
    /**
     * The identity type. 'SystemAssigned' and 'UserAssigned' are mutually exclusive. 'SystemAssigned' will use implicitly created managed identity.
     */
    identityType?: pulumi.Input<string | enums.IdentityType | undefined>;
}

/**
 * The properties of the Key Vault which hosts CMK
 */
export interface CmkKeyVaultPropertiesArgs {
    /**
     * The key uri of the Customer Managed Key
     */
    keyUri?: pulumi.Input<string | undefined>;
}

/**
 * Copy on Expiry Option
 */
export interface CopyOnExpiryOptionArgs {
    /**
     * Type of the specific object - used for deserializing
     * Expected value is 'CopyOnExpiryOption'.
     */
    objectType: pulumi.Input<"CopyOnExpiryOption">;
}

export interface CrossRegionRestoreSettingsArgs {
    /**
     * CrossRegionRestore state
     */
    state?: pulumi.Input<string | enums.CrossRegionRestoreState | undefined>;
}

/**
 * CrossSubscriptionRestore Settings
 */
export interface CrossSubscriptionRestoreSettingsArgs {
    /**
     * CrossSubscriptionRestore state
     */
    state?: pulumi.Input<string | enums.CrossSubscriptionRestoreState | undefined>;
}

/**
 * Duration based custom options to copy
 */
export interface CustomCopyOptionArgs {
    /**
     * Data copied after given timespan
     */
    duration?: pulumi.Input<string | undefined>;
    /**
     * Type of the specific object - used for deserializing
     * Expected value is 'CustomCopyOption'.
     */
    objectType: pulumi.Input<"CustomCopyOption">;
}

/**
 * DataStoreInfo base
 */
export interface DataStoreInfoBaseArgs {
    /**
     * type of datastore; Operational/Vault/Archive
     */
    dataStoreType: pulumi.Input<string | enums.DataStoreTypes>;
    /**
     * Type of Datasource object, used to initialize the right inherited type
     */
    objectType: pulumi.Input<string>;
}

/**
 * Datasource to be backed up
 */
export interface DatasourceArgs {
    /**
     * DatasourceType of the resource.
     */
    datasourceType?: pulumi.Input<string | undefined>;
    /**
     * Type of Datasource object, used to initialize the right inherited type
     */
    objectType?: pulumi.Input<string | undefined>;
    /**
     * Full ARM ID of the resource. For azure resources, this is ARM ID. For non azure resources, this will be the ID created by backup service via Fabric/Vault.
     */
    resourceID: pulumi.Input<string>;
    /**
     * Location of datasource.
     */
    resourceLocation?: pulumi.Input<string | undefined>;
    /**
     * Unique identifier of the resource in the context of parent.
     */
    resourceName?: pulumi.Input<string | undefined>;
    /**
     * Properties specific to data source
     */
    resourceProperties?: pulumi.Input<DefaultResourcePropertiesArgs | undefined>;
    /**
     * Resource Type of Datasource.
     */
    resourceType?: pulumi.Input<string | undefined>;
    /**
     * Uri of the resource.
     */
    resourceUri?: pulumi.Input<string | undefined>;
}

/**
 * DatasourceSet details of datasource to be backed up
 */
export interface DatasourceSetArgs {
    /**
     * DatasourceType of the resource.
     */
    datasourceType?: pulumi.Input<string | undefined>;
    /**
     * Type of Datasource object, used to initialize the right inherited type
     */
    objectType?: pulumi.Input<string | undefined>;
    /**
     * Full ARM ID of the resource. For azure resources, this is ARM ID. For non azure resources, this will be the ID created by backup service via Fabric/Vault.
     */
    resourceID: pulumi.Input<string>;
    /**
     * Location of datasource.
     */
    resourceLocation?: pulumi.Input<string | undefined>;
    /**
     * Unique identifier of the resource in the context of parent.
     */
    resourceName?: pulumi.Input<string | undefined>;
    /**
     * Properties specific to data source set
     */
    resourceProperties?: pulumi.Input<DefaultResourcePropertiesArgs | undefined>;
    /**
     * Resource Type of Datasource.
     */
    resourceType?: pulumi.Input<string | undefined>;
    /**
     * Uri of the resource.
     */
    resourceUri?: pulumi.Input<string | undefined>;
}

/**
 * Day of the week
 */
export interface DayArgs {
    /**
     * Date of the month
     */
    date?: pulumi.Input<number | undefined>;
    /**
     * Whether Date is last date of month
     */
    isLast?: pulumi.Input<boolean | undefined>;
}

/**
 * Default source properties
 */
export interface DefaultResourcePropertiesArgs {
    /**
     * Type of the specific object - used for deserializing
     * Expected value is 'DefaultResourceProperties'.
     */
    objectType: pulumi.Input<"DefaultResourceProperties">;
}

/**
 * Identity details
 */
export interface DppIdentityDetailsArgs {
    /**
     * The identityType which can be either SystemAssigned, UserAssigned, 'SystemAssigned,UserAssigned' or None
     */
    type?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the user assigned identities.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Customer Managed Key details of the resource.
 */
export interface EncryptionSettingsArgs {
    /**
     * Enabling/Disabling the Double Encryption state
     */
    infrastructureEncryption?: pulumi.Input<string | enums.InfrastructureEncryptionState | undefined>;
    /**
     * The details of the managed identity used for CMK
     */
    kekIdentity?: pulumi.Input<CmkKekIdentityArgs | undefined>;
    /**
     * The properties of the Key Vault which hosts CMK
     */
    keyVaultProperties?: pulumi.Input<CmkKeyVaultPropertiesArgs | undefined>;
    /**
     * Encryption state of the Backup Vault.
     */
    state?: pulumi.Input<string | enums.EncryptionState | undefined>;
}

/**
 * Class containing feature settings of vault
 */
export interface FeatureSettingsArgs {
    crossRegionRestoreSettings?: pulumi.Input<CrossRegionRestoreSettingsArgs | undefined>;
    /**
     * CrossSubscriptionRestore Settings
     */
    crossSubscriptionRestoreSettings?: pulumi.Input<CrossSubscriptionRestoreSettingsArgs | undefined>;
}

export interface IdentityDetailsArgs {
    /**
     * Specifies if the BI is protected by System Identity.
     */
    useSystemAssignedIdentity?: pulumi.Input<boolean | undefined>;
    /**
     * ARM URL for User Assigned Identity.
     */
    userAssignedIdentityArmUrl?: pulumi.Input<string | undefined>;
}

/**
 * Immediate copy Option
 */
export interface ImmediateCopyOptionArgs {
    /**
     * Type of the specific object - used for deserializing
     * Expected value is 'ImmediateCopyOption'.
     */
    objectType: pulumi.Input<"ImmediateCopyOption">;
}

/**
 * Immutability Settings at vault level
 */
export interface ImmutabilitySettingsArgs {
    /**
     * Immutability state
     */
    state?: pulumi.Input<string | enums.ImmutabilityState | undefined>;
}

/**
 * Parameters for Kubernetes Cluster Backup Datasource
 */
export interface KubernetesClusterBackupDatasourceParametersArgs {
    /**
     * Gets or sets the backup hook references. This property sets the hook reference to be executed during backup.
     */
    backupHookReferences?: pulumi.Input<pulumi.Input<NamespacedNameResourceArgs>[] | undefined>;
    /**
     * Gets or sets the exclude namespaces property. This property sets the namespaces to be excluded during backup.
     */
    excludedNamespaces?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Gets or sets the exclude resource types property. This property sets the resource types to be excluded during backup.
     */
    excludedResourceTypes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Gets or sets the include cluster resources property. This property if enabled will include cluster scope resources during backup.
     */
    includeClusterScopeResources: pulumi.Input<boolean>;
    /**
     * Gets or sets the include namespaces property. This property sets the namespaces to be included during backup.
     */
    includedNamespaces?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Gets or sets the include resource types property. This property sets the resource types to be included during backup.
     */
    includedResourceTypes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Gets or sets the include volume types property. This property sets the volume types to be included during backup.
     */
    includedVolumeTypes?: pulumi.Input<pulumi.Input<string | enums.AKSVolumeTypes>[] | undefined>;
    /**
     * Gets or sets the LabelSelectors property. This property sets the resource with such label selectors to be included during backup.
     */
    labelSelectors?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Type of the specific object - used for deserializing
     * Expected value is 'KubernetesClusterBackupDatasourceParameters'.
     */
    objectType: pulumi.Input<"KubernetesClusterBackupDatasourceParameters">;
    /**
     * Gets or sets the volume snapshot property. This property if enabled will take volume snapshots during backup.
     */
    snapshotVolumes: pulumi.Input<boolean>;
}

/**
 * Monitoring Settings
 */
export interface MonitoringSettingsArgs {
    /**
     * Settings for Azure Monitor based alerts
     */
    azureMonitorAlertSettings?: pulumi.Input<AzureMonitorAlertSettingsArgs | undefined>;
}

/**
 * Class to refer resources which contains namespace and name
 */
export interface NamespacedNameResourceArgs {
    /**
     * Name of the resource
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Namespace in which the resource exists
     */
    namespace?: pulumi.Input<string | undefined>;
}

/**
 * Policy Info in backupInstance
 */
export interface PolicyInfoArgs {
    policyId: pulumi.Input<string>;
    /**
     * Policy parameters for the backup instance
     */
    policyParameters?: pulumi.Input<PolicyParametersArgs | undefined>;
}

/**
 * Parameters in Policy
 */
export interface PolicyParametersArgs {
    /**
     * Gets or sets the Backup Data Source Parameters
     */
    backupDatasourceParametersList?: pulumi.Input<pulumi.Input<BlobBackupDatasourceParametersArgs | KubernetesClusterBackupDatasourceParametersArgs>[] | undefined>;
    /**
     * Gets or sets the DataStore Parameters
     */
    dataStoreParametersList?: pulumi.Input<pulumi.Input<AzureOperationalStoreParametersArgs>[] | undefined>;
}

export interface ResourceGuardArgs {
    /**
     * List of critical operations which are not protected by this resourceGuard
     */
    vaultCriticalOperationExclusionList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * VaultCritical Operation protected by a resource guard
 */
export interface ResourceGuardOperationDetailArgs {
    defaultResourceRequest?: pulumi.Input<string | undefined>;
    vaultCriticalOperation?: pulumi.Input<string | undefined>;
}

/**
 * ResourceGuardProxyBase object, used in ResourceGuardProxyBaseResource
 */
export interface ResourceGuardProxyBaseArgs {
    description?: pulumi.Input<string | undefined>;
    lastUpdatedTime?: pulumi.Input<string | undefined>;
    resourceGuardOperationDetails?: pulumi.Input<pulumi.Input<ResourceGuardOperationDetailArgs>[] | undefined>;
    resourceGuardResourceId?: pulumi.Input<string | undefined>;
}

/**
 * Retention tag
 */
export interface RetentionTagArgs {
    /**
     * Retention Tag Name to relate it to retention rule.
     */
    tagName: pulumi.Input<string>;
}

/**
 * Schedule based backup criteria
 */
export interface ScheduleBasedBackupCriteriaArgs {
    /**
     * it contains absolute values like "AllBackup" / "FirstOfDay" / "FirstOfWeek" / "FirstOfMonth"
     * and should be part of AbsoluteMarker enum
     */
    absoluteCriteria?: pulumi.Input<pulumi.Input<string | enums.AbsoluteMarker>[] | undefined>;
    /**
     * This is day of the month from 1 to 28 other wise last of month
     */
    daysOfMonth?: pulumi.Input<pulumi.Input<DayArgs>[] | undefined>;
    /**
     * It should be Sunday/Monday/T..../Saturday
     */
    daysOfTheWeek?: pulumi.Input<pulumi.Input<string | enums.DayOfWeek>[] | undefined>;
    /**
     * It should be January/February/....../December
     */
    monthsOfYear?: pulumi.Input<pulumi.Input<string | enums.Month>[] | undefined>;
    /**
     * Type of the specific object - used for deserializing
     * Expected value is 'ScheduleBasedBackupCriteria'.
     */
    objectType: pulumi.Input<"ScheduleBasedBackupCriteria">;
    /**
     * List of schedule times for backup
     */
    scheduleTimes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * It should be First/Second/Third/Fourth/Last
     */
    weeksOfTheMonth?: pulumi.Input<pulumi.Input<string | enums.WeekNumber>[] | undefined>;
}

/**
 * Schedule based trigger context
 */
export interface ScheduleBasedTriggerContextArgs {
    /**
     * Type of the specific object - used for deserializing
     * Expected value is 'ScheduleBasedTriggerContext'.
     */
    objectType: pulumi.Input<"ScheduleBasedTriggerContext">;
    /**
     * Schedule for this backup
     */
    schedule: pulumi.Input<BackupScheduleArgs>;
    /**
     * List of tags that can be applicable for given schedule.
     */
    taggingCriteria: pulumi.Input<pulumi.Input<TaggingCriteriaArgs>[]>;
}

/**
 * Secret store based authentication credentials.
 */
export interface SecretStoreBasedAuthCredentialsArgs {
    /**
     * Type of the specific object - used for deserializing
     * Expected value is 'SecretStoreBasedAuthCredentials'.
     */
    objectType: pulumi.Input<"SecretStoreBasedAuthCredentials">;
    /**
     * Secret store resource
     */
    secretStoreResource?: pulumi.Input<SecretStoreResourceArgs | undefined>;
}

/**
 * Class representing a secret store resource.
 */
export interface SecretStoreResourceArgs {
    /**
     * Gets or sets the type of secret store
     */
    secretStoreType: pulumi.Input<string | enums.SecretStoreType>;
    /**
     * Uri to get to the resource
     */
    uri?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets value stored in secret store resource
     */
    value?: pulumi.Input<string | undefined>;
}

/**
 * Class containing security settings of vault
 */
export interface SecuritySettingsArgs {
    /**
     * Customer Managed Key details of the resource.
     */
    encryptionSettings?: pulumi.Input<EncryptionSettingsArgs | undefined>;
    /**
     * Immutability Settings at vault level
     */
    immutabilitySettings?: pulumi.Input<ImmutabilitySettingsArgs | undefined>;
    /**
     * Soft delete related settings
     */
    softDeleteSettings?: pulumi.Input<SoftDeleteSettingsArgs | undefined>;
}

/**
 * Soft delete related settings
 */
export interface SoftDeleteSettingsArgs {
    /**
     * Soft delete retention duration
     */
    retentionDurationInDays?: pulumi.Input<number | undefined>;
    /**
     * State of soft delete
     */
    state?: pulumi.Input<string | enums.SoftDeleteState | undefined>;
}

/**
 * Source LifeCycle
 */
export interface SourceLifeCycleArgs {
    /**
     * Delete Option
     */
    deleteAfter: pulumi.Input<AbsoluteDeleteOptionArgs>;
    /**
     * DataStoreInfo base
     */
    sourceDataStore: pulumi.Input<DataStoreInfoBaseArgs>;
    targetDataStoreCopySettings?: pulumi.Input<pulumi.Input<TargetCopySettingArgs>[] | undefined>;
}

/**
 * Storage setting
 */
export interface StorageSettingArgs {
    /**
     * Gets or sets the type of the datastore.
     */
    datastoreType?: pulumi.Input<string | enums.StorageSettingStoreTypes | undefined>;
    /**
     * Gets or sets the type.
     */
    type?: pulumi.Input<string | enums.StorageSettingTypes | undefined>;
}

/**
 * Tagging criteria
 */
export interface TaggingCriteriaArgs {
    /**
     * Criteria which decides whether the tag can be applied to a triggered backup.
     */
    criteria?: pulumi.Input<pulumi.Input<ScheduleBasedBackupCriteriaArgs>[] | undefined>;
    /**
     * Specifies if tag is default.
     */
    isDefault: pulumi.Input<boolean>;
    /**
     * Retention tag information
     */
    tagInfo: pulumi.Input<RetentionTagArgs>;
    /**
     * Retention Tag priority.
     */
    taggingPriority: pulumi.Input<number>;
}

/**
 * Target copy settings
 */
export interface TargetCopySettingArgs {
    /**
     * It can be CustomCopyOption or ImmediateCopyOption.
     */
    copyAfter: pulumi.Input<CopyOnExpiryOptionArgs | CustomCopyOptionArgs | ImmediateCopyOptionArgs>;
    /**
     * Info of target datastore
     */
    dataStore: pulumi.Input<DataStoreInfoBaseArgs>;
}
