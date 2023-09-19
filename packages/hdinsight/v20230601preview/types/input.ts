import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Authorization profile with details of AAD user Ids and group Ids authorized for data plane access.
     */
    export interface AuthorizationProfileArgs {
        /**
         * AAD group Ids authorized for data plane access.
         */
        groupIds?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * AAD user Ids authorized for data plane access.
         */
        userIds?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * This is the Autoscale profile for the cluster. This will allow customer to create cluster enabled with Autoscale.
     */
    export interface AutoscaleProfileArgs {
        /**
         * User to specify which type of Autoscale to be implemented - Scheduled Based or Load Based.
         */
        autoscaleType?: pulumi.Input<string | enums.AutoscaleType>;
        /**
         * This indicates whether auto scale is enabled on HDInsight on AKS cluster.
         */
        enabled: pulumi.Input<boolean>;
        /**
         * This property is for graceful decommission timeout; It has a default setting of 3600 seconds before forced shutdown takes place. This is the maximal time to wait for running containers and applications to complete before transition a DECOMMISSIONING node into DECOMMISSIONED. The default value is 3600 seconds. Negative value (like -1) is handled as infinite timeout.
         */
        gracefulDecommissionTimeout?: pulumi.Input<number>;
        /**
         * Profiles of load based Autoscale.
         */
        loadBasedConfig?: pulumi.Input<LoadBasedConfigArgs>;
        /**
         * Profiles of schedule based Autoscale.
         */
        scheduleBasedConfig?: pulumi.Input<ScheduleBasedConfigArgs>;
    }

    /**
     * Trino cluster catalog options.
     */
    export interface CatalogOptionsArgs {
        /**
         * hive catalog options.
         */
        hive?: pulumi.Input<pulumi.Input<HiveCatalogOptionArgs>[]>;
    }

    /**
     * Cluster configuration files.
     */
    export interface ClusterConfigFileArgs {
        /**
         * Free form content of the entire configuration file.
         */
        content?: pulumi.Input<string>;
        /**
         * This property indicates if the content is encoded and is case-insensitive. Please set the value to base64 if the content is base64 encoded. Set it to none or skip it if the content is plain text.
         */
        encoding?: pulumi.Input<string | enums.ContentEncoding>;
        /**
         * Configuration file name.
         */
        fileName: pulumi.Input<string>;
        /**
         * Path of the config file if content is specified.
         */
        path?: pulumi.Input<string>;
        /**
         * List of key value pairs
         * where key represents a valid service configuration name and value represents the value of the config.
         */
        values?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * Collection of logs to be enabled or disabled for log analytics.
     */
    export interface ClusterLogAnalyticsApplicationLogsArgs {
        /**
         * True if stderror is enabled, otherwise false.
         */
        stdErrorEnabled?: pulumi.Input<boolean>;
        /**
         * True if stdout is enabled, otherwise false.
         */
        stdOutEnabled?: pulumi.Input<boolean>;
    }

    /**
     * Cluster log analytics profile to enable or disable OMS agent for cluster.
     */
    export interface ClusterLogAnalyticsProfileArgs {
        /**
         * Collection of logs to be enabled or disabled for log analytics.
         */
        applicationLogs?: pulumi.Input<ClusterLogAnalyticsApplicationLogsArgs>;
        /**
         * True if log analytics is enabled for the cluster, otherwise false.
         */
        enabled: pulumi.Input<boolean>;
        /**
         * True if metrics are enabled, otherwise false.
         */
        metricsEnabled?: pulumi.Input<boolean>;
    }

    /**
     * CLuster pool profile.
     */
    export interface ClusterPoolResourcePropertiesClusterPoolProfileArgs {
        /**
         * Cluster pool version is a 2-part version.
         */
        clusterPoolVersion: pulumi.Input<string>;
    }

    /**
     * CLuster pool compute profile.
     */
    export interface ClusterPoolResourcePropertiesComputeProfileArgs {
        /**
         * The virtual machine SKU.
         */
        vmSize: pulumi.Input<string>;
    }

    /**
     * Cluster pool log analytics profile to enable OMS agent for AKS cluster.
     */
    export interface ClusterPoolResourcePropertiesLogAnalyticsProfileArgs {
        /**
         * True if log analytics is enabled for cluster pool, otherwise false.
         */
        enabled: pulumi.Input<boolean>;
        /**
         * Log analytics workspace to associate with the OMS agent.
         */
        workspaceId?: pulumi.Input<string>;
    }

    /**
     * Cluster pool network profile.
     */
    export interface ClusterPoolResourcePropertiesNetworkProfileArgs {
        /**
         * Cluster pool subnet resource id.
         */
        subnetId: pulumi.Input<string>;
    }

    /**
     * Cluster profile.
     */
    export interface ClusterProfileArgs {
        /**
         * Authorization profile with details of AAD user Ids and group Ids authorized for data plane access.
         */
        authorizationProfile: pulumi.Input<AuthorizationProfileArgs>;
        /**
         * This is the Autoscale profile for the cluster. This will allow customer to create cluster enabled with Autoscale.
         */
        autoscaleProfile?: pulumi.Input<AutoscaleProfileArgs>;
        /**
         * Version with 3/4 part.
         */
        clusterVersion: pulumi.Input<string>;
        /**
         * The Flink cluster profile.
         */
        flinkProfile?: pulumi.Input<FlinkProfileArgs>;
        /**
         * Identity Profile with details of an MSI.
         */
        identityProfile: pulumi.Input<IdentityProfileArgs>;
        /**
         * Kafka cluster profile.
         */
        kafkaProfile?: any;
        /**
         * LLAP cluster profile.
         */
        llapProfile?: any;
        /**
         * Cluster log analytics profile to enable or disable OMS agent for cluster.
         */
        logAnalyticsProfile?: pulumi.Input<ClusterLogAnalyticsProfileArgs>;
        /**
         * Version with three part.
         */
        ossVersion: pulumi.Input<string>;
        /**
         * Cluster Prometheus profile.
         */
        prometheusProfile?: pulumi.Input<ClusterPrometheusProfileArgs>;
        /**
         * The script action profile list.
         */
        scriptActionProfiles?: pulumi.Input<pulumi.Input<ScriptActionProfileArgs>[]>;
        /**
         * The cluster secret profile.
         */
        secretsProfile?: pulumi.Input<SecretsProfileArgs>;
        /**
         * The service configs profiles.
         */
        serviceConfigsProfiles?: pulumi.Input<pulumi.Input<ClusterServiceConfigsProfileArgs>[]>;
        /**
         * The spark cluster profile.
         */
        sparkProfile?: pulumi.Input<SparkProfileArgs>;
        /**
         * Ssh profile for the cluster.
         */
        sshProfile?: pulumi.Input<SshProfileArgs>;
        /**
         * Stub cluster profile.
         */
        stubProfile?: any;
        /**
         * Trino Cluster profile.
         */
        trinoProfile?: pulumi.Input<TrinoProfileArgs>;
    }
    /**
     * clusterProfileArgsProvideDefaults sets the appropriate defaults for ClusterProfileArgs
     */
    export function clusterProfileArgsProvideDefaults(val: ClusterProfileArgs): ClusterProfileArgs {
        return {
            ...val,
            prometheusProfile: (val.prometheusProfile ? pulumi.output(val.prometheusProfile).apply(clusterPrometheusProfileArgsProvideDefaults) : undefined),
            trinoProfile: (val.trinoProfile ? pulumi.output(val.trinoProfile).apply(trinoProfileArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Cluster Prometheus profile.
     */
    export interface ClusterPrometheusProfileArgs {
        /**
         * Enable Prometheus for cluster or not.
         */
        enabled: pulumi.Input<boolean>;
    }
    /**
     * clusterPrometheusProfileArgsProvideDefaults sets the appropriate defaults for ClusterPrometheusProfileArgs
     */
    export function clusterPrometheusProfileArgsProvideDefaults(val: ClusterPrometheusProfileArgs): ClusterPrometheusProfileArgs {
        return {
            ...val,
            enabled: (val.enabled) ?? false,
        };
    }

    /**
     * Cluster configs per component.
     */
    export interface ClusterServiceConfigArgs {
        /**
         * Name of the component the config files should apply to.
         */
        component: pulumi.Input<string>;
        /**
         * List of Config Files.
         */
        files: pulumi.Input<pulumi.Input<ClusterConfigFileArgs>[]>;
    }

    /**
     * Cluster service configs.
     */
    export interface ClusterServiceConfigsProfileArgs {
        /**
         * List of service configs.
         */
        configs: pulumi.Input<pulumi.Input<ClusterServiceConfigArgs>[]>;
        /**
         * Name of the service the configurations should apply to.
         */
        serviceName: pulumi.Input<string>;
    }

    /**
     * The comparison rule.
     */
    export interface ComparisonRuleArgs {
        /**
         * The comparison operator.
         */
        operator: pulumi.Input<string | enums.ComparisonOperator>;
        /**
         * Threshold setting.
         */
        threshold: pulumi.Input<number>;
    }

    /**
     * The compute profile.
     */
    export interface ComputeProfileArgs {
        /**
         * The nodes definitions.
         */
        nodes: pulumi.Input<pulumi.Input<NodeProfileArgs>[]>;
    }

    /**
     * The cpu and memory requirement definition.
     */
    export interface ComputeResourceDefinitionArgs {
        /**
         * The required CPU.
         */
        cpu: pulumi.Input<number>;
        /**
         * The required memory in MB, Container memory will be 110 percentile
         */
        memory: pulumi.Input<number>;
    }

    /**
     * Flink cluster catalog options.
     */
    export interface FlinkCatalogOptionsArgs {
        /**
         * Hive Catalog Option for Flink cluster.
         */
        hive?: pulumi.Input<FlinkHiveCatalogOptionArgs>;
    }

    /**
     * Hive Catalog Option for Flink cluster.
     */
    export interface FlinkHiveCatalogOptionArgs {
        /**
         * Secret reference name from secretsProfile.secrets containing password for database connection.
         */
        metastoreDbConnectionPasswordSecret: pulumi.Input<string>;
        /**
         * Connection string for hive metastore database.
         */
        metastoreDbConnectionURL: pulumi.Input<string>;
        /**
         * User name for database connection.
         */
        metastoreDbConnectionUserName: pulumi.Input<string>;
    }

    /**
     * The Flink cluster profile.
     */
    export interface FlinkProfileArgs {
        /**
         * Flink cluster catalog options.
         */
        catalogOptions?: pulumi.Input<FlinkCatalogOptionsArgs>;
        /**
         * History Server container/ process CPU and memory requirements
         */
        historyServer?: pulumi.Input<ComputeResourceDefinitionArgs>;
        /**
         * Job Manager container/ process CPU and memory requirements
         */
        jobManager: pulumi.Input<ComputeResourceDefinitionArgs>;
        /**
         * The number of task managers.
         */
        numReplicas?: pulumi.Input<number>;
        /**
         * The storage profile
         */
        storage: pulumi.Input<FlinkStorageProfileArgs>;
        /**
         * Task Manager container/ process CPU and memory requirements
         */
        taskManager: pulumi.Input<ComputeResourceDefinitionArgs>;
    }

    /**
     * The storage profile
     */
    export interface FlinkStorageProfileArgs {
        /**
         * Storage account uri which is used for savepoint and checkpoint state.
         */
        storageUri: pulumi.Input<string>;
        /**
         * Storage key is only required for wasb(s) storage.
         */
        storagekey?: pulumi.Input<string>;
    }

    /**
     * Hive Catalog Option
     */
    export interface HiveCatalogOptionArgs {
        /**
         * Name of trino catalog which should use specified hive metastore.
         */
        catalogName: pulumi.Input<string>;
        /**
         * Secret reference name from secretsProfile.secrets containing password for database connection.
         */
        metastoreDbConnectionPasswordSecret: pulumi.Input<string>;
        /**
         * Connection string for hive metastore database.
         */
        metastoreDbConnectionURL: pulumi.Input<string>;
        /**
         * User name for database connection.
         */
        metastoreDbConnectionUserName: pulumi.Input<string>;
        /**
         * Metastore root directory URI, format: abfs[s]://<container>@<account_name>.dfs.core.windows.net/<path>. More details: https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction-abfs-uri
         */
        metastoreWarehouseDir: pulumi.Input<string>;
    }

    /**
     * Identity Profile with details of an MSI.
     */
    export interface IdentityProfileArgs {
        /**
         * ClientId of the MSI.
         */
        msiClientId: pulumi.Input<string>;
        /**
         * ObjectId of the MSI.
         */
        msiObjectId: pulumi.Input<string>;
        /**
         * ResourceId of the MSI.
         */
        msiResourceId: pulumi.Input<string>;
    }

    /**
     * Profile of load based Autoscale.
     */
    export interface LoadBasedConfigArgs {
        /**
         * This is a cool down period, this is a time period in seconds, which determines the amount of time that must elapse between a scaling activity started by a rule and the start of the next scaling activity, regardless of the rule that triggers it. The default value is 300 seconds.
         */
        cooldownPeriod?: pulumi.Input<number>;
        /**
         * User needs to set the maximum number of nodes for load based scaling, the load based scaling will use this to scale up and scale down between minimum and maximum number of nodes.
         */
        maxNodes: pulumi.Input<number>;
        /**
         * User needs to set the minimum number of nodes for load based scaling, the load based scaling will use this to scale up and scale down between minimum and maximum number of nodes.
         */
        minNodes: pulumi.Input<number>;
        /**
         * User can specify the poll interval, this is the time period (in seconds) after which scaling metrics are polled for triggering a scaling operation.
         */
        pollInterval?: pulumi.Input<number>;
        /**
         * The scaling rules.
         */
        scalingRules: pulumi.Input<pulumi.Input<ScalingRuleArgs>[]>;
    }

    /**
     * The node profile.
     */
    export interface NodeProfileArgs {
        /**
         * The number of virtual machines.
         */
        count: pulumi.Input<number>;
        /**
         * The node type.
         */
        type: pulumi.Input<string>;
        /**
         * The virtual machine SKU.
         */
        vmSize: pulumi.Input<string>;
    }

    /**
     * The scaling rule.
     */
    export interface ScalingRuleArgs {
        /**
         * The action type.
         */
        actionType: pulumi.Input<string | enums.ScaleActionType>;
        /**
         * The comparison rule.
         */
        comparisonRule: pulumi.Input<ComparisonRuleArgs>;
        /**
         * This is an evaluation count for a scaling condition, the number of times a trigger condition should be successful, before scaling activity is triggered.
         */
        evaluationCount: pulumi.Input<number>;
        /**
         * Metrics name for individual workloads. For example: cpu
         */
        scalingMetric: pulumi.Input<string>;
    }

    /**
     * Schedule definition.
     */
    export interface ScheduleArgs {
        /**
         * User has to set the node count anticipated at end of the scaling operation of the set current schedule configuration, format is integer.
         */
        count: pulumi.Input<number>;
        /**
         * User has to set the days where schedule has to be set for autoscale operation.
         */
        days: pulumi.Input<pulumi.Input<string | enums.ScheduleDay>[]>;
        /**
         * User has to set the end time of current schedule configuration, format like 10:30 (HH:MM).
         */
        endTime: pulumi.Input<string>;
        /**
         * User has to set the start time of current schedule configuration, format like 10:30 (HH:MM).
         */
        startTime: pulumi.Input<string>;
    }

    /**
     * Profile of schedule based Autoscale.
     */
    export interface ScheduleBasedConfigArgs {
        /**
         * Setting default node count of current schedule configuration. Default node count specifies the number of nodes which are default when an specified scaling operation is executed (scale up/scale down)
         */
        defaultCount: pulumi.Input<number>;
        /**
         * This specifies the schedules where scheduled based Autoscale to be enabled, the user has a choice to set multiple rules within the schedule across days and times (start/end).
         */
        schedules: pulumi.Input<pulumi.Input<ScheduleArgs>[]>;
        /**
         * User has to specify the timezone on which the schedule has to be set for schedule based autoscale configuration.
         */
        timeZone: pulumi.Input<string>;
    }

    /**
     * The script action profile.
     */
    export interface ScriptActionProfileArgs {
        /**
         * Script name.
         */
        name: pulumi.Input<string>;
        /**
         * Additional parameters for the script action. It should be space-separated list of arguments required for script execution.
         */
        parameters?: pulumi.Input<string>;
        /**
         * List of services to apply the script action.
         */
        services: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Specify if the script should persist on the cluster.
         */
        shouldPersist?: pulumi.Input<boolean>;
        /**
         * Timeout duration for the script action in minutes.
         */
        timeoutInMinutes?: pulumi.Input<number>;
        /**
         * Type of the script action. Supported type is bash scripts.
         */
        type: pulumi.Input<string>;
        /**
         * Url of the script file.
         */
        url: pulumi.Input<string>;
    }
    /**
     * scriptActionProfileArgsProvideDefaults sets the appropriate defaults for ScriptActionProfileArgs
     */
    export function scriptActionProfileArgsProvideDefaults(val: ScriptActionProfileArgs): ScriptActionProfileArgs {
        return {
            ...val,
            shouldPersist: (val.shouldPersist) ?? true,
        };
    }

    /**
     * Secret reference and corresponding properties of a key vault secret.
     */
    export interface SecretReferenceArgs {
        /**
         * Object identifier name of the secret in key vault.
         */
        keyVaultObjectName: pulumi.Input<string>;
        /**
         * Reference name of the secret to be used in service configs.
         */
        referenceName: pulumi.Input<string>;
        /**
         * Type of key vault object: secret, key or certificate.
         */
        type: pulumi.Input<string | enums.KeyVaultObjectType>;
        /**
         * Version of the secret in key vault.
         */
        version?: pulumi.Input<string>;
    }

    /**
     * The cluster secret profile.
     */
    export interface SecretsProfileArgs {
        /**
         * Name of the user Key Vault where all the cluster specific user secrets are stored.
         */
        keyVaultResourceId: pulumi.Input<string>;
        /**
         * Properties of Key Vault secret.
         */
        secrets?: pulumi.Input<pulumi.Input<SecretReferenceArgs>[]>;
    }

    /**
     * The metastore specification for Spark cluster.
     */
    export interface SparkMetastoreSpecArgs {
        /**
         * The database name.
         */
        dbName: pulumi.Input<string>;
        /**
         * The secret name which contains the database user password.
         */
        dbPasswordSecretName: pulumi.Input<string>;
        /**
         * The database server host.
         */
        dbServerHost: pulumi.Input<string>;
        /**
         * The database user name.
         */
        dbUserName: pulumi.Input<string>;
        /**
         * The key vault resource id.
         */
        keyVaultId: pulumi.Input<string>;
        /**
         * The thrift url.
         */
        thriftUrl?: pulumi.Input<string>;
    }

    /**
     * The spark cluster profile.
     */
    export interface SparkProfileArgs {
        /**
         * The default storage URL.
         */
        defaultStorageUrl?: pulumi.Input<string>;
        /**
         * The metastore specification for Spark cluster.
         */
        metastoreSpec?: pulumi.Input<SparkMetastoreSpecArgs>;
        /**
         * Spark user plugins spec
         */
        userPluginsSpec?: pulumi.Input<SparkUserPluginsArgs>;
    }

    /**
     * Spark user plugin.
     */
    export interface SparkUserPluginArgs {
        /**
         * Fully qualified path to the folder containing the plugins.
         */
        path: pulumi.Input<string>;
    }

    /**
     * Spark user plugins spec
     */
    export interface SparkUserPluginsArgs {
        /**
         * Spark user plugins.
         */
        plugins?: pulumi.Input<pulumi.Input<SparkUserPluginArgs>[]>;
    }

    /**
     * Ssh profile for the cluster.
     */
    export interface SshProfileArgs {
        /**
         * Number of ssh pods per cluster.
         */
        count: pulumi.Input<number>;
    }

    /**
     * Trino Coordinator.
     */
    export interface TrinoCoordinatorArgs {
        /**
         * The flag that if enable debug or not.
         */
        enable?: pulumi.Input<boolean>;
        /**
         * The flag that if enable coordinator HA, uses multiple coordinator replicas with auto failover, one per each head node. Default: true.
         */
        highAvailabilityEnabled?: pulumi.Input<boolean>;
        /**
         * The debug port.
         */
        port?: pulumi.Input<number>;
        /**
         * The flag that if suspend debug or not.
         */
        suspend?: pulumi.Input<boolean>;
    }
    /**
     * trinoCoordinatorArgsProvideDefaults sets the appropriate defaults for TrinoCoordinatorArgs
     */
    export function trinoCoordinatorArgsProvideDefaults(val: TrinoCoordinatorArgs): TrinoCoordinatorArgs {
        return {
            ...val,
            enable: (val.enable) ?? false,
            highAvailabilityEnabled: (val.highAvailabilityEnabled) ?? true,
            port: (val.port) ?? 8008,
            suspend: (val.suspend) ?? false,
        };
    }

    /**
     * Trino Cluster profile.
     */
    export interface TrinoProfileArgs {
        /**
         * Trino cluster catalog options.
         */
        catalogOptions?: pulumi.Input<CatalogOptionsArgs>;
        /**
         * Trino Coordinator.
         */
        coordinator?: pulumi.Input<TrinoCoordinatorArgs>;
        /**
         * Trino user plugins spec
         */
        userPluginsSpec?: pulumi.Input<TrinoUserPluginsArgs>;
        /**
         * User telemetry
         */
        userTelemetrySpec?: pulumi.Input<TrinoUserTelemetryArgs>;
        /**
         * Trino worker.
         */
        worker?: pulumi.Input<TrinoWorkerArgs>;
    }
    /**
     * trinoProfileArgsProvideDefaults sets the appropriate defaults for TrinoProfileArgs
     */
    export function trinoProfileArgsProvideDefaults(val: TrinoProfileArgs): TrinoProfileArgs {
        return {
            ...val,
            coordinator: (val.coordinator ? pulumi.output(val.coordinator).apply(trinoCoordinatorArgsProvideDefaults) : undefined),
            userTelemetrySpec: (val.userTelemetrySpec ? pulumi.output(val.userTelemetrySpec).apply(trinoUserTelemetryArgsProvideDefaults) : undefined),
            worker: (val.worker ? pulumi.output(val.worker).apply(trinoWorkerArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Trino user telemetry definition.
     */
    export interface TrinoTelemetryConfigArgs {
        /**
         * Hive Catalog name used to mount external tables on the logs written by trino, if not specified there tables are not created.
         */
        hivecatalogName?: pulumi.Input<string>;
        /**
         * Schema of the above catalog to use, to mount query logs as external tables, if not specified tables will be mounted under schema trinologs.
         */
        hivecatalogSchema?: pulumi.Input<string>;
        /**
         * Retention period for query log table partitions, this doesn't have any affect on actual data.
         */
        partitionRetentionInDays?: pulumi.Input<number>;
        /**
         * Azure storage location of the blobs.
         */
        path?: pulumi.Input<string>;
    }
    /**
     * trinoTelemetryConfigArgsProvideDefaults sets the appropriate defaults for TrinoTelemetryConfigArgs
     */
    export function trinoTelemetryConfigArgsProvideDefaults(val: TrinoTelemetryConfigArgs): TrinoTelemetryConfigArgs {
        return {
            ...val,
            hivecatalogSchema: (val.hivecatalogSchema) ?? "trinologs",
            partitionRetentionInDays: (val.partitionRetentionInDays) ?? 365,
        };
    }

    /**
     * Trino user plugin.
     */
    export interface TrinoUserPluginArgs {
        /**
         * Denotes whether the plugin is active or not.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * This field maps to the sub-directory in trino plugins location, that will contain all the plugins under path.
         */
        name?: pulumi.Input<string>;
        /**
         * Fully qualified path to the folder containing the plugins.
         */
        path?: pulumi.Input<string>;
    }

    /**
     * Trino user plugins spec
     */
    export interface TrinoUserPluginsArgs {
        /**
         * Trino user plugins.
         */
        plugins?: pulumi.Input<pulumi.Input<TrinoUserPluginArgs>[]>;
    }

    /**
     * User telemetry
     */
    export interface TrinoUserTelemetryArgs {
        /**
         * Trino user telemetry definition.
         */
        storage?: pulumi.Input<TrinoTelemetryConfigArgs>;
    }
    /**
     * trinoUserTelemetryArgsProvideDefaults sets the appropriate defaults for TrinoUserTelemetryArgs
     */
    export function trinoUserTelemetryArgsProvideDefaults(val: TrinoUserTelemetryArgs): TrinoUserTelemetryArgs {
        return {
            ...val,
            storage: (val.storage ? pulumi.output(val.storage).apply(trinoTelemetryConfigArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Trino worker.
     */
    export interface TrinoWorkerArgs {
        /**
         * The flag that if enable debug or not.
         */
        enable?: pulumi.Input<boolean>;
        /**
         * The debug port.
         */
        port?: pulumi.Input<number>;
        /**
         * The flag that if suspend debug or not.
         */
        suspend?: pulumi.Input<boolean>;
    }
    /**
     * trinoWorkerArgsProvideDefaults sets the appropriate defaults for TrinoWorkerArgs
     */
    export function trinoWorkerArgsProvideDefaults(val: TrinoWorkerArgs): TrinoWorkerArgs {
        return {
            ...val,
            enable: (val.enable) ?? false,
            port: (val.port) ?? 8008,
            suspend: (val.suspend) ?? false,
        };
    }
