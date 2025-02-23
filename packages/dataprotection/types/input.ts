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
    tagInfo?: pulumi.Input<RetentionTagArgs>;
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
    backupParameters?: pulumi.Input<AzureBackupParamsArgs>;
    /**
     * DataStoreInfo base
     */
    dataStore: pulumi.Input<DataStoreInfoBaseArgs>;
    name: pulumi.Input<string>;
    /**
     *
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
    alertsForAllJobFailures?: pulumi.Input<string | enums.AlertsState>;
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
    resourceGroupId?: pulumi.Input<string>;
}

/**
 * Azure retention rule
 */
export interface AzureRetentionRuleArgs {
    isDefault?: pulumi.Input<boolean>;
    lifecycles: pulumi.Input<pulumi.Input<SourceLifeCycleArgs>[]>;
    name: pulumi.Input<string>;
    /**
     *
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
    dataSourceSetInfo?: pulumi.Input<DatasourceSetArgs>;
    /**
     * Credentials to use to authenticate with data source provider.
     */
    datasourceAuthCredentials?: pulumi.Input<SecretStoreBasedAuthCredentialsArgs>;
    /**
     * Gets or sets the Backup Instance friendly name.
     */
    friendlyName?: pulumi.Input<string>;
    objectType: pulumi.Input<string>;
    /**
     * Gets or sets the policy information.
     */
    policyInfo: pulumi.Input<PolicyInfoArgs>;
    /**
     * Specifies the type of validation. In case of DeepValidation, all validations from /validateForBackup API will run again.
     */
    validationType?: pulumi.Input<string | enums.ValidationType>;
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
     *
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
     * ISO 8601 repeating time interval format
     */
    repeatingTimeIntervals: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Time zone for a schedule. Example: Pacific Standard Time
     */
    timeZone?: pulumi.Input<string>;
}

/**
 * Backup Vault
 */
export interface BackupVaultArgs {
    /**
     * Feature Settings
     */
    featureSettings?: pulumi.Input<FeatureSettingsArgs>;
    /**
     * Monitoring Settings
     */
    monitoringSettings?: pulumi.Input<MonitoringSettingsArgs>;
    /**
     * Security Settings
     */
    securitySettings?: pulumi.Input<SecuritySettingsArgs>;
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
 * Copy on Expiry Option
 */
export interface CopyOnExpiryOptionArgs {
    /**
     * Type of the specific object - used for deserializing
     * Expected value is 'CopyOnExpiryOption'.
     */
    objectType: pulumi.Input<"CopyOnExpiryOption">;
}

/**
 * CrossSubscriptionRestore Settings
 */
export interface CrossSubscriptionRestoreSettingsArgs {
    /**
     * CrossSubscriptionRestore state
     */
    state?: pulumi.Input<string | enums.CrossSubscriptionRestoreState>;
}

/**
 * Duration based custom options to copy
 */
export interface CustomCopyOptionArgs {
    /**
     * Data copied after given timespan
     */
    duration?: pulumi.Input<string>;
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
    datasourceType?: pulumi.Input<string>;
    /**
     * Type of Datasource object, used to initialize the right inherited type
     */
    objectType?: pulumi.Input<string>;
    /**
     * Full ARM ID of the resource. For azure resources, this is ARM ID. For non azure resources, this will be the ID created by backup service via Fabric/Vault.
     */
    resourceID: pulumi.Input<string>;
    /**
     * Location of datasource.
     */
    resourceLocation?: pulumi.Input<string>;
    /**
     * Unique identifier of the resource in the context of parent.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * Resource Type of Datasource.
     */
    resourceType?: pulumi.Input<string>;
    /**
     * Uri of the resource.
     */
    resourceUri?: pulumi.Input<string>;
}

/**
 * DatasourceSet details of datasource to be backed up
 */
export interface DatasourceSetArgs {
    /**
     * DatasourceType of the resource.
     */
    datasourceType?: pulumi.Input<string>;
    /**
     * Type of Datasource object, used to initialize the right inherited type
     */
    objectType?: pulumi.Input<string>;
    /**
     * Full ARM ID of the resource. For azure resources, this is ARM ID. For non azure resources, this will be the ID created by backup service via Fabric/Vault.
     */
    resourceID: pulumi.Input<string>;
    /**
     * Location of datasource.
     */
    resourceLocation?: pulumi.Input<string>;
    /**
     * Unique identifier of the resource in the context of parent.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * Resource Type of Datasource.
     */
    resourceType?: pulumi.Input<string>;
    /**
     * Uri of the resource.
     */
    resourceUri?: pulumi.Input<string>;
}

/**
 * Day of the week
 */
export interface DayArgs {
    /**
     * Date of the month
     */
    date?: pulumi.Input<number>;
    /**
     * Whether Date is last date of month
     */
    isLast?: pulumi.Input<boolean>;
}

/**
 * Identity details
 */
export interface DppIdentityDetailsArgs {
    /**
     * The identityType which can be either SystemAssigned or None
     */
    type?: pulumi.Input<string>;
}

/**
 * Class containing feature settings of vault
 */
export interface FeatureSettingsArgs {
    /**
     * CrossSubscriptionRestore Settings
     */
    crossSubscriptionRestoreSettings?: pulumi.Input<CrossSubscriptionRestoreSettingsArgs>;
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
    state?: pulumi.Input<string | enums.ImmutabilityState>;
}

/**
 * Parameters for Kubernetes Cluster Backup Datasource
 */
export interface KubernetesClusterBackupDatasourceParametersArgs {
    /**
     * Gets or sets the exclude namespaces property. This property sets the namespaces to be excluded during restore.
     */
    excludedNamespaces?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Gets or sets the exclude resource types property. This property sets the resource types to be excluded during restore.
     */
    excludedResourceTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Gets or sets the include cluster resources property. This property if enabled will include cluster scope resources during restore.
     */
    includeClusterScopeResources: pulumi.Input<boolean>;
    /**
     * Gets or sets the include namespaces property. This property sets the namespaces to be included during restore.
     */
    includedNamespaces?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Gets or sets the include resource types property. This property sets the resource types to be included during restore.
     */
    includedResourceTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Gets or sets the LabelSelectors property. This property sets the resource with such label selectors to be included during restore.
     */
    labelSelectors?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Type of the specific object - used for deserializing
     * Expected value is 'KubernetesClusterBackupDatasourceParameters'.
     */
    objectType: pulumi.Input<"KubernetesClusterBackupDatasourceParameters">;
    /**
     * Gets or sets the volume snapshot property. This property if enabled will take volume snapshots during restore.
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
    azureMonitorAlertSettings?: pulumi.Input<AzureMonitorAlertSettingsArgs>;
}

/**
 * Policy Info in backupInstance
 */
export interface PolicyInfoArgs {
    policyId: pulumi.Input<string>;
    /**
     * Policy parameters for the backup instance
     */
    policyParameters?: pulumi.Input<PolicyParametersArgs>;
}

/**
 * Parameters in Policy
 */
export interface PolicyParametersArgs {
    /**
     * Gets or sets the Backup Data Source Parameters
     */
    backupDatasourceParametersList?: pulumi.Input<pulumi.Input<BlobBackupDatasourceParametersArgs | KubernetesClusterBackupDatasourceParametersArgs>[]>;
    /**
     * Gets or sets the DataStore Parameters
     */
    dataStoreParametersList?: pulumi.Input<pulumi.Input<AzureOperationalStoreParametersArgs>[]>;
}

export interface ResourceGuardArgs {
    /**
     * List of critical operations which are not protected by this resourceGuard
     */
    vaultCriticalOperationExclusionList?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * VaultCritical Operation protected by a resource guard
 */
export interface ResourceGuardOperationDetailArgs {
    defaultResourceRequest?: pulumi.Input<string>;
    vaultCriticalOperation?: pulumi.Input<string>;
}

/**
 * ResourceGuardProxyBase object, used in ResourceGuardProxyBaseResource
 */
export interface ResourceGuardProxyBaseArgs {
    description?: pulumi.Input<string>;
    lastUpdatedTime?: pulumi.Input<string>;
    resourceGuardOperationDetails?: pulumi.Input<pulumi.Input<ResourceGuardOperationDetailArgs>[]>;
    resourceGuardResourceId?: pulumi.Input<string>;
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
    absoluteCriteria?: pulumi.Input<pulumi.Input<string | enums.AbsoluteMarker>[]>;
    /**
     * This is day of the month from 1 to 28 other wise last of month
     */
    daysOfMonth?: pulumi.Input<pulumi.Input<DayArgs>[]>;
    /**
     * It should be Sunday/Monday/T..../Saturday
     */
    daysOfTheWeek?: pulumi.Input<pulumi.Input<string | enums.DayOfWeek>[]>;
    /**
     * It should be January/February/....../December
     */
    monthsOfYear?: pulumi.Input<pulumi.Input<string | enums.Month>[]>;
    /**
     * Type of the specific object - used for deserializing
     * Expected value is 'ScheduleBasedBackupCriteria'.
     */
    objectType: pulumi.Input<"ScheduleBasedBackupCriteria">;
    /**
     * List of schedule times for backup
     */
    scheduleTimes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * It should be First/Second/Third/Fourth/Last
     */
    weeksOfTheMonth?: pulumi.Input<pulumi.Input<string | enums.WeekNumber>[]>;
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
    secretStoreResource?: pulumi.Input<SecretStoreResourceArgs>;
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
    uri?: pulumi.Input<string>;
    /**
     * Gets or sets value stored in secret store resource
     */
    value?: pulumi.Input<string>;
}

/**
 * Class containing security settings of vault
 */
export interface SecuritySettingsArgs {
    /**
     * Immutability Settings at vault level
     */
    immutabilitySettings?: pulumi.Input<ImmutabilitySettingsArgs>;
    /**
     * Soft delete related settings
     */
    softDeleteSettings?: pulumi.Input<SoftDeleteSettingsArgs>;
}

/**
 * Soft delete related settings
 */
export interface SoftDeleteSettingsArgs {
    /**
     * Soft delete retention duration
     */
    retentionDurationInDays?: pulumi.Input<number>;
    /**
     * State of soft delete
     */
    state?: pulumi.Input<string | enums.SoftDeleteState>;
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
    targetDataStoreCopySettings?: pulumi.Input<pulumi.Input<TargetCopySettingArgs>[]>;
}

/**
 * Storage setting
 */
export interface StorageSettingArgs {
    /**
     * Gets or sets the type of the datastore.
     */
    datastoreType?: pulumi.Input<string | enums.StorageSettingStoreTypes>;
    /**
     * Gets or sets the type.
     */
    type?: pulumi.Input<string | enums.StorageSettingTypes>;
}

/**
 * Tagging criteria
 */
export interface TaggingCriteriaArgs {
    /**
     * Criteria which decides whether the tag can be applied to a triggered backup.
     */
    criteria?: pulumi.Input<pulumi.Input<ScheduleBasedBackupCriteriaArgs>[]>;
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











