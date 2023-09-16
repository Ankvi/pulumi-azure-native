import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace dataprotection {
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

    export namespace v20221101preview {
        /**
         * Identity details
         */
        export interface DppIdentityDetailsArgs {
            /**
             * The identityType which can be either SystemAssigned or None
             */
            type?: pulumi.Input<string>;
        }

        export interface ResourceGuardArgs {
            /**
             * List of critical operations which are not protected by this resourceGuard
             */
            vaultCriticalOperationExclusionList?: pulumi.Input<pulumi.Input<string>[]>;
        }

    }

    export namespace v20230101 {
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
            tagInfo?: pulumi.Input<v20230101.RetentionTagArgs>;
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
            taggingCriteria: pulumi.Input<v20230101.AdhocBasedTaggingCriteriaArgs>;
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
            backupParameters?: pulumi.Input<v20230101.AzureBackupParamsArgs>;
            /**
             * DataStoreInfo base
             */
            dataStore: pulumi.Input<v20230101.DataStoreInfoBaseArgs>;
            name: pulumi.Input<string>;
            /**
             *
             * Expected value is 'AzureBackupRule'.
             */
            objectType: pulumi.Input<"AzureBackupRule">;
            /**
             * Trigger context
             */
            trigger: pulumi.Input<v20230101.AdhocBasedTriggerContextArgs | v20230101.ScheduleBasedTriggerContextArgs>;
        }

        /**
         * Settings for Azure Monitor based alerts
         */
        export interface AzureMonitorAlertSettingsArgs {
            alertsForAllJobFailures?: pulumi.Input<string | enums.v20230101.AlertsState>;
        }

        /**
         * Parameters for Operational-Tier DataStore
         */
        export interface AzureOperationalStoreParametersArgs {
            /**
             * type of datastore; Operational/Vault/Archive
             */
            dataStoreType: pulumi.Input<string | enums.v20230101.DataStoreTypes>;
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
            lifecycles: pulumi.Input<pulumi.Input<v20230101.SourceLifeCycleArgs>[]>;
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
            dataSourceInfo: pulumi.Input<v20230101.DatasourceArgs>;
            /**
             * Gets or sets the data source set information.
             */
            dataSourceSetInfo?: pulumi.Input<v20230101.DatasourceSetArgs>;
            /**
             * Credentials to use to authenticate with data source provider.
             */
            datasourceAuthCredentials?: pulumi.Input<v20230101.SecretStoreBasedAuthCredentialsArgs>;
            /**
             * Gets or sets the Backup Instance friendly name.
             */
            friendlyName?: pulumi.Input<string>;
            objectType: pulumi.Input<string>;
            /**
             * Gets or sets the policy information.
             */
            policyInfo: pulumi.Input<v20230101.PolicyInfoArgs>;
            /**
             * Specifies the type of validation. In case of DeepValidation, all validations from /validateForBackup API will run again.
             */
            validationType?: pulumi.Input<string | enums.v20230101.ValidationType>;
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
            policyRules: pulumi.Input<pulumi.Input<v20230101.AzureBackupRuleArgs | v20230101.AzureRetentionRuleArgs>[]>;
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
            featureSettings?: pulumi.Input<v20230101.FeatureSettingsArgs>;
            /**
             * Monitoring Settings
             */
            monitoringSettings?: pulumi.Input<v20230101.MonitoringSettingsArgs>;
            /**
             * Security Settings
             */
            securitySettings?: pulumi.Input<v20230101.SecuritySettingsArgs>;
            /**
             * Storage Settings
             */
            storageSettings: pulumi.Input<pulumi.Input<v20230101.StorageSettingArgs>[]>;
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
            state?: pulumi.Input<string | enums.v20230101.CrossSubscriptionRestoreState>;
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
            dataStoreType: pulumi.Input<string | enums.v20230101.DataStoreTypes>;
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
            crossSubscriptionRestoreSettings?: pulumi.Input<v20230101.CrossSubscriptionRestoreSettingsArgs>;
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
            state?: pulumi.Input<string | enums.v20230101.ImmutabilityState>;
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
            azureMonitorAlertSettings?: pulumi.Input<v20230101.AzureMonitorAlertSettingsArgs>;
        }

        /**
         * Policy Info in backupInstance
         */
        export interface PolicyInfoArgs {
            policyId: pulumi.Input<string>;
            /**
             * Policy parameters for the backup instance
             */
            policyParameters?: pulumi.Input<v20230101.PolicyParametersArgs>;
        }

        /**
         * Parameters in Policy
         */
        export interface PolicyParametersArgs {
            /**
             * Gets or sets the Backup Data Source Parameters
             */
            backupDatasourceParametersList?: pulumi.Input<pulumi.Input<v20230101.BlobBackupDatasourceParametersArgs | v20230101.KubernetesClusterBackupDatasourceParametersArgs>[]>;
            /**
             * Gets or sets the DataStore Parameters
             */
            dataStoreParametersList?: pulumi.Input<pulumi.Input<v20230101.AzureOperationalStoreParametersArgs>[]>;
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
            resourceGuardOperationDetails?: pulumi.Input<pulumi.Input<v20230101.ResourceGuardOperationDetailArgs>[]>;
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
            absoluteCriteria?: pulumi.Input<pulumi.Input<string | enums.v20230101.AbsoluteMarker>[]>;
            /**
             * This is day of the month from 1 to 28 other wise last of month
             */
            daysOfMonth?: pulumi.Input<pulumi.Input<v20230101.DayArgs>[]>;
            /**
             * It should be Sunday/Monday/T..../Saturday
             */
            daysOfTheWeek?: pulumi.Input<pulumi.Input<string | enums.v20230101.DayOfWeek>[]>;
            /**
             * It should be January/February/....../December
             */
            monthsOfYear?: pulumi.Input<pulumi.Input<string | enums.v20230101.Month>[]>;
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
            weeksOfTheMonth?: pulumi.Input<pulumi.Input<string | enums.v20230101.WeekNumber>[]>;
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
            schedule: pulumi.Input<v20230101.BackupScheduleArgs>;
            /**
             * List of tags that can be applicable for given schedule.
             */
            taggingCriteria: pulumi.Input<pulumi.Input<v20230101.TaggingCriteriaArgs>[]>;
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
            secretStoreResource?: pulumi.Input<v20230101.SecretStoreResourceArgs>;
        }

        /**
         * Class representing a secret store resource.
         */
        export interface SecretStoreResourceArgs {
            /**
             * Gets or sets the type of secret store
             */
            secretStoreType: pulumi.Input<string | enums.v20230101.SecretStoreType>;
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
            immutabilitySettings?: pulumi.Input<v20230101.ImmutabilitySettingsArgs>;
            /**
             * Soft delete related settings
             */
            softDeleteSettings?: pulumi.Input<v20230101.SoftDeleteSettingsArgs>;
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
            state?: pulumi.Input<string | enums.v20230101.SoftDeleteState>;
        }

        /**
         * Source LifeCycle
         */
        export interface SourceLifeCycleArgs {
            /**
             * Delete Option
             */
            deleteAfter: pulumi.Input<v20230101.AbsoluteDeleteOptionArgs>;
            /**
             * DataStoreInfo base
             */
            sourceDataStore: pulumi.Input<v20230101.DataStoreInfoBaseArgs>;
            targetDataStoreCopySettings?: pulumi.Input<pulumi.Input<v20230101.TargetCopySettingArgs>[]>;
        }

        /**
         * Storage setting
         */
        export interface StorageSettingArgs {
            /**
             * Gets or sets the type of the datastore.
             */
            datastoreType?: pulumi.Input<string | enums.v20230101.StorageSettingStoreTypes>;
            /**
             * Gets or sets the type.
             */
            type?: pulumi.Input<string | enums.v20230101.StorageSettingTypes>;
        }

        /**
         * Tagging criteria
         */
        export interface TaggingCriteriaArgs {
            /**
             * Criteria which decides whether the tag can be applied to a triggered backup.
             */
            criteria?: pulumi.Input<pulumi.Input<v20230101.ScheduleBasedBackupCriteriaArgs>[]>;
            /**
             * Specifies if tag is default.
             */
            isDefault: pulumi.Input<boolean>;
            /**
             * Retention tag information
             */
            tagInfo: pulumi.Input<v20230101.RetentionTagArgs>;
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
            copyAfter: pulumi.Input<v20230101.CopyOnExpiryOptionArgs | v20230101.CustomCopyOptionArgs | v20230101.ImmediateCopyOptionArgs>;
            /**
             * Info of target datastore
             */
            dataStore: pulumi.Input<v20230101.DataStoreInfoBaseArgs>;
        }

    }

    export namespace v20230401preview {
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
            tagInfo?: pulumi.Input<v20230401preview.RetentionTagArgs>;
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
            taggingCriteria: pulumi.Input<v20230401preview.AdhocBasedTaggingCriteriaArgs>;
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
            backupParameters?: pulumi.Input<v20230401preview.AzureBackupParamsArgs>;
            /**
             * DataStoreInfo base
             */
            dataStore: pulumi.Input<v20230401preview.DataStoreInfoBaseArgs>;
            name: pulumi.Input<string>;
            /**
             *
             * Expected value is 'AzureBackupRule'.
             */
            objectType: pulumi.Input<"AzureBackupRule">;
            /**
             * Trigger context
             */
            trigger: pulumi.Input<v20230401preview.AdhocBasedTriggerContextArgs | v20230401preview.ScheduleBasedTriggerContextArgs>;
        }

        /**
         * Settings for Azure Monitor based alerts
         */
        export interface AzureMonitorAlertSettingsArgs {
            alertsForAllJobFailures?: pulumi.Input<string | enums.v20230401preview.AlertsState>;
        }

        /**
         * Parameters for Operational-Tier DataStore
         */
        export interface AzureOperationalStoreParametersArgs {
            /**
             * type of datastore; Operational/Vault/Archive
             */
            dataStoreType: pulumi.Input<string | enums.v20230401preview.DataStoreTypes>;
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
            lifecycles: pulumi.Input<pulumi.Input<v20230401preview.SourceLifeCycleArgs>[]>;
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
            dataSourceInfo: pulumi.Input<v20230401preview.DatasourceArgs>;
            /**
             * Gets or sets the data source set information.
             */
            dataSourceSetInfo?: pulumi.Input<v20230401preview.DatasourceSetArgs>;
            /**
             * Credentials to use to authenticate with data source provider.
             */
            datasourceAuthCredentials?: pulumi.Input<v20230401preview.SecretStoreBasedAuthCredentialsArgs>;
            /**
             * Gets or sets the Backup Instance friendly name.
             */
            friendlyName?: pulumi.Input<string>;
            /**
             * Contains information of the Identity Details for the BI.
             * If it is null, default will be considered as System Assigned.
             */
            identityDetails?: pulumi.Input<v20230401preview.IdentityDetailsArgs>;
            objectType: pulumi.Input<string>;
            /**
             * Gets or sets the policy information.
             */
            policyInfo: pulumi.Input<v20230401preview.PolicyInfoArgs>;
            /**
             * Specifies the type of validation. In case of DeepValidation, all validations from /validateForBackup API will run again.
             */
            validationType?: pulumi.Input<string | enums.v20230401preview.ValidationType>;
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
            policyRules: pulumi.Input<pulumi.Input<v20230401preview.AzureBackupRuleArgs | v20230401preview.AzureRetentionRuleArgs>[]>;
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
            featureSettings?: pulumi.Input<v20230401preview.FeatureSettingsArgs>;
            /**
             * Monitoring Settings
             */
            monitoringSettings?: pulumi.Input<v20230401preview.MonitoringSettingsArgs>;
            /**
             * Security Settings
             */
            securitySettings?: pulumi.Input<v20230401preview.SecuritySettingsArgs>;
            /**
             * Storage Settings
             */
            storageSettings: pulumi.Input<pulumi.Input<v20230401preview.StorageSettingArgs>[]>;
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

        export interface CrossRegionRestoreSettingsArgs {
            /**
             * CrossRegionRestore state
             */
            state?: pulumi.Input<string | enums.v20230401preview.CrossRegionRestoreState>;
        }

        /**
         * CrossSubscriptionRestore Settings
         */
        export interface CrossSubscriptionRestoreSettingsArgs {
            /**
             * CrossSubscriptionRestore state
             */
            state?: pulumi.Input<string | enums.v20230401preview.CrossSubscriptionRestoreState>;
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
            dataStoreType: pulumi.Input<string | enums.v20230401preview.DataStoreTypes>;
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
             * The identityType which can be either SystemAssigned, UserAssigned, 'SystemAssigned,UserAssigned' or None
             */
            type?: pulumi.Input<string>;
            /**
             * Gets or sets the user assigned identities.
             */
            userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Class containing feature settings of vault
         */
        export interface FeatureSettingsArgs {
            crossRegionRestoreSettings?: pulumi.Input<v20230401preview.CrossRegionRestoreSettingsArgs>;
            /**
             * CrossSubscriptionRestore Settings
             */
            crossSubscriptionRestoreSettings?: pulumi.Input<v20230401preview.CrossSubscriptionRestoreSettingsArgs>;
        }

        export interface IdentityDetailsArgs {
            /**
             * Specifies if the BI is protected by System Identity.
             */
            useSystemAssignedIdentity?: pulumi.Input<boolean>;
            /**
             * ARM URL for User Assigned Identity.
             */
            userAssignedIdentityArmUrl?: pulumi.Input<string>;
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
            state?: pulumi.Input<string | enums.v20230401preview.ImmutabilityState>;
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
            azureMonitorAlertSettings?: pulumi.Input<v20230401preview.AzureMonitorAlertSettingsArgs>;
        }

        /**
         * Policy Info in backupInstance
         */
        export interface PolicyInfoArgs {
            policyId: pulumi.Input<string>;
            /**
             * Policy parameters for the backup instance
             */
            policyParameters?: pulumi.Input<v20230401preview.PolicyParametersArgs>;
        }

        /**
         * Parameters in Policy
         */
        export interface PolicyParametersArgs {
            /**
             * Gets or sets the Backup Data Source Parameters
             */
            backupDatasourceParametersList?: pulumi.Input<pulumi.Input<v20230401preview.BlobBackupDatasourceParametersArgs | v20230401preview.KubernetesClusterBackupDatasourceParametersArgs>[]>;
            /**
             * Gets or sets the DataStore Parameters
             */
            dataStoreParametersList?: pulumi.Input<pulumi.Input<v20230401preview.AzureOperationalStoreParametersArgs>[]>;
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
            resourceGuardOperationDetails?: pulumi.Input<pulumi.Input<v20230401preview.ResourceGuardOperationDetailArgs>[]>;
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
            absoluteCriteria?: pulumi.Input<pulumi.Input<string | enums.v20230401preview.AbsoluteMarker>[]>;
            /**
             * This is day of the month from 1 to 28 other wise last of month
             */
            daysOfMonth?: pulumi.Input<pulumi.Input<v20230401preview.DayArgs>[]>;
            /**
             * It should be Sunday/Monday/T..../Saturday
             */
            daysOfTheWeek?: pulumi.Input<pulumi.Input<string | enums.v20230401preview.DayOfWeek>[]>;
            /**
             * It should be January/February/....../December
             */
            monthsOfYear?: pulumi.Input<pulumi.Input<string | enums.v20230401preview.Month>[]>;
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
            weeksOfTheMonth?: pulumi.Input<pulumi.Input<string | enums.v20230401preview.WeekNumber>[]>;
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
            schedule: pulumi.Input<v20230401preview.BackupScheduleArgs>;
            /**
             * List of tags that can be applicable for given schedule.
             */
            taggingCriteria: pulumi.Input<pulumi.Input<v20230401preview.TaggingCriteriaArgs>[]>;
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
            secretStoreResource?: pulumi.Input<v20230401preview.SecretStoreResourceArgs>;
        }

        /**
         * Class representing a secret store resource.
         */
        export interface SecretStoreResourceArgs {
            /**
             * Gets or sets the type of secret store
             */
            secretStoreType: pulumi.Input<string | enums.v20230401preview.SecretStoreType>;
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
            immutabilitySettings?: pulumi.Input<v20230401preview.ImmutabilitySettingsArgs>;
            /**
             * Soft delete related settings
             */
            softDeleteSettings?: pulumi.Input<v20230401preview.SoftDeleteSettingsArgs>;
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
            state?: pulumi.Input<string | enums.v20230401preview.SoftDeleteState>;
        }

        /**
         * Source LifeCycle
         */
        export interface SourceLifeCycleArgs {
            /**
             * Delete Option
             */
            deleteAfter: pulumi.Input<v20230401preview.AbsoluteDeleteOptionArgs>;
            /**
             * DataStoreInfo base
             */
            sourceDataStore: pulumi.Input<v20230401preview.DataStoreInfoBaseArgs>;
            targetDataStoreCopySettings?: pulumi.Input<pulumi.Input<v20230401preview.TargetCopySettingArgs>[]>;
        }

        /**
         * Storage setting
         */
        export interface StorageSettingArgs {
            /**
             * Gets or sets the type of the datastore.
             */
            datastoreType?: pulumi.Input<string | enums.v20230401preview.StorageSettingStoreTypes>;
            /**
             * Gets or sets the type.
             */
            type?: pulumi.Input<string | enums.v20230401preview.StorageSettingTypes>;
        }

        /**
         * Tagging criteria
         */
        export interface TaggingCriteriaArgs {
            /**
             * Criteria which decides whether the tag can be applied to a triggered backup.
             */
            criteria?: pulumi.Input<pulumi.Input<v20230401preview.ScheduleBasedBackupCriteriaArgs>[]>;
            /**
             * Specifies if tag is default.
             */
            isDefault: pulumi.Input<boolean>;
            /**
             * Retention tag information
             */
            tagInfo: pulumi.Input<v20230401preview.RetentionTagArgs>;
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
            copyAfter: pulumi.Input<v20230401preview.CopyOnExpiryOptionArgs | v20230401preview.CustomCopyOptionArgs | v20230401preview.ImmediateCopyOptionArgs>;
            /**
             * Info of target datastore
             */
            dataStore: pulumi.Input<v20230401preview.DataStoreInfoBaseArgs>;
        }

    }

    export namespace v20230501 {
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
            tagInfo?: pulumi.Input<v20230501.RetentionTagArgs>;
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
            taggingCriteria: pulumi.Input<v20230501.AdhocBasedTaggingCriteriaArgs>;
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
            backupParameters?: pulumi.Input<v20230501.AzureBackupParamsArgs>;
            /**
             * DataStoreInfo base
             */
            dataStore: pulumi.Input<v20230501.DataStoreInfoBaseArgs>;
            name: pulumi.Input<string>;
            /**
             *
             * Expected value is 'AzureBackupRule'.
             */
            objectType: pulumi.Input<"AzureBackupRule">;
            /**
             * Trigger context
             */
            trigger: pulumi.Input<v20230501.AdhocBasedTriggerContextArgs | v20230501.ScheduleBasedTriggerContextArgs>;
        }

        /**
         * Settings for Azure Monitor based alerts
         */
        export interface AzureMonitorAlertSettingsArgs {
            alertsForAllJobFailures?: pulumi.Input<string | enums.v20230501.AlertsState>;
        }

        /**
         * Parameters for Operational-Tier DataStore
         */
        export interface AzureOperationalStoreParametersArgs {
            /**
             * type of datastore; Operational/Vault/Archive
             */
            dataStoreType: pulumi.Input<string | enums.v20230501.DataStoreTypes>;
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
            lifecycles: pulumi.Input<pulumi.Input<v20230501.SourceLifeCycleArgs>[]>;
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
            dataSourceInfo: pulumi.Input<v20230501.DatasourceArgs>;
            /**
             * Gets or sets the data source set information.
             */
            dataSourceSetInfo?: pulumi.Input<v20230501.DatasourceSetArgs>;
            /**
             * Credentials to use to authenticate with data source provider.
             */
            datasourceAuthCredentials?: pulumi.Input<v20230501.SecretStoreBasedAuthCredentialsArgs>;
            /**
             * Gets or sets the Backup Instance friendly name.
             */
            friendlyName?: pulumi.Input<string>;
            /**
             * Contains information of the Identity Details for the BI.
             * If it is null, default will be considered as System Assigned.
             */
            identityDetails?: pulumi.Input<v20230501.IdentityDetailsArgs>;
            objectType: pulumi.Input<string>;
            /**
             * Gets or sets the policy information.
             */
            policyInfo: pulumi.Input<v20230501.PolicyInfoArgs>;
            /**
             * Specifies the type of validation. In case of DeepValidation, all validations from /validateForBackup API will run again.
             */
            validationType?: pulumi.Input<string | enums.v20230501.ValidationType>;
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
            policyRules: pulumi.Input<pulumi.Input<v20230501.AzureBackupRuleArgs | v20230501.AzureRetentionRuleArgs>[]>;
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
            featureSettings?: pulumi.Input<v20230501.FeatureSettingsArgs>;
            /**
             * Monitoring Settings
             */
            monitoringSettings?: pulumi.Input<v20230501.MonitoringSettingsArgs>;
            /**
             * Security Settings
             */
            securitySettings?: pulumi.Input<v20230501.SecuritySettingsArgs>;
            /**
             * Storage Settings
             */
            storageSettings: pulumi.Input<pulumi.Input<v20230501.StorageSettingArgs>[]>;
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

        export interface CrossRegionRestoreSettingsArgs {
            /**
             * CrossRegionRestore state
             */
            state?: pulumi.Input<string | enums.v20230501.CrossRegionRestoreState>;
        }

        /**
         * CrossSubscriptionRestore Settings
         */
        export interface CrossSubscriptionRestoreSettingsArgs {
            /**
             * CrossSubscriptionRestore state
             */
            state?: pulumi.Input<string | enums.v20230501.CrossSubscriptionRestoreState>;
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
            dataStoreType: pulumi.Input<string | enums.v20230501.DataStoreTypes>;
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
             * Properties specific to data source
             */
            resourceProperties?: pulumi.Input<v20230501.DefaultResourcePropertiesArgs>;
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
             * Properties specific to data source set
             */
            resourceProperties?: pulumi.Input<v20230501.DefaultResourcePropertiesArgs>;
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
            type?: pulumi.Input<string>;
            /**
             * Gets or sets the user assigned identities.
             */
            userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Class containing feature settings of vault
         */
        export interface FeatureSettingsArgs {
            crossRegionRestoreSettings?: pulumi.Input<v20230501.CrossRegionRestoreSettingsArgs>;
            /**
             * CrossSubscriptionRestore Settings
             */
            crossSubscriptionRestoreSettings?: pulumi.Input<v20230501.CrossSubscriptionRestoreSettingsArgs>;
        }

        export interface IdentityDetailsArgs {
            /**
             * Specifies if the BI is protected by System Identity.
             */
            useSystemAssignedIdentity?: pulumi.Input<boolean>;
            /**
             * ARM URL for User Assigned Identity.
             */
            userAssignedIdentityArmUrl?: pulumi.Input<string>;
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
            state?: pulumi.Input<string | enums.v20230501.ImmutabilityState>;
        }

        /**
         * Parameters for Kubernetes Cluster Backup Datasource
         */
        export interface KubernetesClusterBackupDatasourceParametersArgs {
            /**
             * Gets or sets the backup hook references. This property sets the hook reference to be executed during backup.
             */
            backupHookReferences?: pulumi.Input<pulumi.Input<v20230501.NamespacedNameResourceArgs>[]>;
            /**
             * Gets or sets the exclude namespaces property. This property sets the namespaces to be excluded during backup.
             */
            excludedNamespaces?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Gets or sets the exclude resource types property. This property sets the resource types to be excluded during backup.
             */
            excludedResourceTypes?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Gets or sets the include cluster resources property. This property if enabled will include cluster scope resources during backup.
             */
            includeClusterScopeResources: pulumi.Input<boolean>;
            /**
             * Gets or sets the include namespaces property. This property sets the namespaces to be included during backup.
             */
            includedNamespaces?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Gets or sets the include resource types property. This property sets the resource types to be included during backup.
             */
            includedResourceTypes?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Gets or sets the LabelSelectors property. This property sets the resource with such label selectors to be included during backup.
             */
            labelSelectors?: pulumi.Input<pulumi.Input<string>[]>;
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
            azureMonitorAlertSettings?: pulumi.Input<v20230501.AzureMonitorAlertSettingsArgs>;
        }

        /**
         * Class to refer resources which contains namespace and name
         */
        export interface NamespacedNameResourceArgs {
            /**
             * Name of the resource
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace in which the resource exists
             */
            namespace?: pulumi.Input<string>;
        }

        /**
         * Policy Info in backupInstance
         */
        export interface PolicyInfoArgs {
            policyId: pulumi.Input<string>;
            /**
             * Policy parameters for the backup instance
             */
            policyParameters?: pulumi.Input<v20230501.PolicyParametersArgs>;
        }

        /**
         * Parameters in Policy
         */
        export interface PolicyParametersArgs {
            /**
             * Gets or sets the Backup Data Source Parameters
             */
            backupDatasourceParametersList?: pulumi.Input<pulumi.Input<v20230501.BlobBackupDatasourceParametersArgs | v20230501.KubernetesClusterBackupDatasourceParametersArgs>[]>;
            /**
             * Gets or sets the DataStore Parameters
             */
            dataStoreParametersList?: pulumi.Input<pulumi.Input<v20230501.AzureOperationalStoreParametersArgs>[]>;
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
            resourceGuardOperationDetails?: pulumi.Input<pulumi.Input<v20230501.ResourceGuardOperationDetailArgs>[]>;
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
            absoluteCriteria?: pulumi.Input<pulumi.Input<string | enums.v20230501.AbsoluteMarker>[]>;
            /**
             * This is day of the month from 1 to 28 other wise last of month
             */
            daysOfMonth?: pulumi.Input<pulumi.Input<v20230501.DayArgs>[]>;
            /**
             * It should be Sunday/Monday/T..../Saturday
             */
            daysOfTheWeek?: pulumi.Input<pulumi.Input<string | enums.v20230501.DayOfWeek>[]>;
            /**
             * It should be January/February/....../December
             */
            monthsOfYear?: pulumi.Input<pulumi.Input<string | enums.v20230501.Month>[]>;
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
            weeksOfTheMonth?: pulumi.Input<pulumi.Input<string | enums.v20230501.WeekNumber>[]>;
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
            schedule: pulumi.Input<v20230501.BackupScheduleArgs>;
            /**
             * List of tags that can be applicable for given schedule.
             */
            taggingCriteria: pulumi.Input<pulumi.Input<v20230501.TaggingCriteriaArgs>[]>;
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
            secretStoreResource?: pulumi.Input<v20230501.SecretStoreResourceArgs>;
        }

        /**
         * Class representing a secret store resource.
         */
        export interface SecretStoreResourceArgs {
            /**
             * Gets or sets the type of secret store
             */
            secretStoreType: pulumi.Input<string | enums.v20230501.SecretStoreType>;
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
            immutabilitySettings?: pulumi.Input<v20230501.ImmutabilitySettingsArgs>;
            /**
             * Soft delete related settings
             */
            softDeleteSettings?: pulumi.Input<v20230501.SoftDeleteSettingsArgs>;
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
            state?: pulumi.Input<string | enums.v20230501.SoftDeleteState>;
        }

        /**
         * Source LifeCycle
         */
        export interface SourceLifeCycleArgs {
            /**
             * Delete Option
             */
            deleteAfter: pulumi.Input<v20230501.AbsoluteDeleteOptionArgs>;
            /**
             * DataStoreInfo base
             */
            sourceDataStore: pulumi.Input<v20230501.DataStoreInfoBaseArgs>;
            targetDataStoreCopySettings?: pulumi.Input<pulumi.Input<v20230501.TargetCopySettingArgs>[]>;
        }

        /**
         * Storage setting
         */
        export interface StorageSettingArgs {
            /**
             * Gets or sets the type of the datastore.
             */
            datastoreType?: pulumi.Input<string | enums.v20230501.StorageSettingStoreTypes>;
            /**
             * Gets or sets the type.
             */
            type?: pulumi.Input<string | enums.v20230501.StorageSettingTypes>;
        }

        /**
         * Tagging criteria
         */
        export interface TaggingCriteriaArgs {
            /**
             * Criteria which decides whether the tag can be applied to a triggered backup.
             */
            criteria?: pulumi.Input<pulumi.Input<v20230501.ScheduleBasedBackupCriteriaArgs>[]>;
            /**
             * Specifies if tag is default.
             */
            isDefault: pulumi.Input<boolean>;
            /**
             * Retention tag information
             */
            tagInfo: pulumi.Input<v20230501.RetentionTagArgs>;
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
            copyAfter: pulumi.Input<v20230501.CopyOnExpiryOptionArgs | v20230501.CustomCopyOptionArgs | v20230501.ImmediateCopyOptionArgs>;
            /**
             * Info of target datastore
             */
            dataStore: pulumi.Input<v20230501.DataStoreInfoBaseArgs>;
        }

    }
}
