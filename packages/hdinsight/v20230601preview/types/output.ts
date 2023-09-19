import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Identity properties of the AKS cluster agentpool MSI
     */
    export interface AksClusterProfileResponseAksClusterAgentPoolIdentityProfile {
        /**
         * ClientId of the MSI.
         */
        msiClientId: string;
        /**
         * ObjectId of the MSI.
         */
        msiObjectId: string;
        /**
         * ResourceId of the MSI.
         */
        msiResourceId: string;
    }

    /**
     * Authorization profile with details of AAD user Ids and group Ids authorized for data plane access.
     */
    export interface AuthorizationProfileResponse {
        /**
         * AAD group Ids authorized for data plane access.
         */
        groupIds?: string[];
        /**
         * AAD user Ids authorized for data plane access.
         */
        userIds?: string[];
    }

    /**
     * This is the Autoscale profile for the cluster. This will allow customer to create cluster enabled with Autoscale.
     */
    export interface AutoscaleProfileResponse {
        /**
         * User to specify which type of Autoscale to be implemented - Scheduled Based or Load Based.
         */
        autoscaleType?: string;
        /**
         * This indicates whether auto scale is enabled on HDInsight on AKS cluster.
         */
        enabled: boolean;
        /**
         * This property is for graceful decommission timeout; It has a default setting of 3600 seconds before forced shutdown takes place. This is the maximal time to wait for running containers and applications to complete before transition a DECOMMISSIONING node into DECOMMISSIONED. The default value is 3600 seconds. Negative value (like -1) is handled as infinite timeout.
         */
        gracefulDecommissionTimeout?: number;
        /**
         * Profiles of load based Autoscale.
         */
        loadBasedConfig?: LoadBasedConfigResponse;
        /**
         * Profiles of schedule based Autoscale.
         */
        scheduleBasedConfig?: ScheduleBasedConfigResponse;
    }

    /**
     * Trino cluster catalog options.
     */
    export interface CatalogOptionsResponse {
        /**
         * hive catalog options.
         */
        hive?: HiveCatalogOptionResponse[];
    }

    /**
     * Cluster configuration files.
     */
    export interface ClusterConfigFileResponse {
        /**
         * Free form content of the entire configuration file.
         */
        content?: string;
        /**
         * This property indicates if the content is encoded and is case-insensitive. Please set the value to base64 if the content is base64 encoded. Set it to none or skip it if the content is plain text.
         */
        encoding?: string;
        /**
         * Configuration file name.
         */
        fileName: string;
        /**
         * Path of the config file if content is specified.
         */
        path?: string;
        /**
         * List of key value pairs
         * where key represents a valid service configuration name and value represents the value of the config.
         */
        values?: {[key: string]: string};
    }

    /**
     * Collection of logs to be enabled or disabled for log analytics.
     */
    export interface ClusterLogAnalyticsApplicationLogsResponse {
        /**
         * True if stderror is enabled, otherwise false.
         */
        stdErrorEnabled?: boolean;
        /**
         * True if stdout is enabled, otherwise false.
         */
        stdOutEnabled?: boolean;
    }

    /**
     * Cluster log analytics profile to enable or disable OMS agent for cluster.
     */
    export interface ClusterLogAnalyticsProfileResponse {
        /**
         * Collection of logs to be enabled or disabled for log analytics.
         */
        applicationLogs?: ClusterLogAnalyticsApplicationLogsResponse;
        /**
         * True if log analytics is enabled for the cluster, otherwise false.
         */
        enabled: boolean;
        /**
         * True if metrics are enabled, otherwise false.
         */
        metricsEnabled?: boolean;
    }

    /**
     * Properties of underlying AKS cluster.
     */
    export interface ClusterPoolResourcePropertiesResponseAksClusterProfile {
        /**
         * Identity properties of the AKS cluster agentpool MSI
         */
        aksClusterAgentPoolIdentityProfile?: AksClusterProfileResponseAksClusterAgentPoolIdentityProfile;
        /**
         * ARM Resource ID of the AKS cluster
         */
        aksClusterResourceId?: string;
        /**
         * AKS control plane and default node pool version of this ClusterPool
         */
        aksVersion: string;
    }

    /**
     * CLuster pool profile.
     */
    export interface ClusterPoolResourcePropertiesResponseClusterPoolProfile {
        /**
         * Cluster pool version is a 2-part version.
         */
        clusterPoolVersion: string;
    }

    /**
     * CLuster pool compute profile.
     */
    export interface ClusterPoolResourcePropertiesResponseComputeProfile {
        /**
         * The number of virtual machines.
         */
        count: number;
        /**
         * The virtual machine SKU.
         */
        vmSize: string;
    }

    /**
     * Cluster pool log analytics profile to enable OMS agent for AKS cluster.
     */
    export interface ClusterPoolResourcePropertiesResponseLogAnalyticsProfile {
        /**
         * True if log analytics is enabled for cluster pool, otherwise false.
         */
        enabled: boolean;
        /**
         * Log analytics workspace to associate with the OMS agent.
         */
        workspaceId?: string;
    }

    /**
     * Cluster pool network profile.
     */
    export interface ClusterPoolResourcePropertiesResponseNetworkProfile {
        /**
         * Cluster pool subnet resource id.
         */
        subnetId: string;
    }

    /**
     * Cluster profile.
     */
    export interface ClusterProfileResponse {
        /**
         * Authorization profile with details of AAD user Ids and group Ids authorized for data plane access.
         */
        authorizationProfile: AuthorizationProfileResponse;
        /**
         * This is the Autoscale profile for the cluster. This will allow customer to create cluster enabled with Autoscale.
         */
        autoscaleProfile?: AutoscaleProfileResponse;
        /**
         * Version with 3/4 part.
         */
        clusterVersion: string;
        /**
         * Component list of this cluster type and version.
         */
        components: ClusterProfileResponseComponents[];
        /**
         * Cluster connectivity profile.
         */
        connectivityProfile: ConnectivityProfileResponse;
        /**
         * The Flink cluster profile.
         */
        flinkProfile?: FlinkProfileResponse;
        /**
         * Identity Profile with details of an MSI.
         */
        identityProfile: IdentityProfileResponse;
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
        logAnalyticsProfile?: ClusterLogAnalyticsProfileResponse;
        /**
         * Version with three part.
         */
        ossVersion: string;
        /**
         * Cluster Prometheus profile.
         */
        prometheusProfile?: ClusterPrometheusProfileResponse;
        /**
         * The script action profile list.
         */
        scriptActionProfiles?: ScriptActionProfileResponse[];
        /**
         * The cluster secret profile.
         */
        secretsProfile?: SecretsProfileResponse;
        /**
         * The service configs profiles.
         */
        serviceConfigsProfiles?: ClusterServiceConfigsProfileResponse[];
        /**
         * The spark cluster profile.
         */
        sparkProfile?: SparkProfileResponse;
        /**
         * Ssh profile for the cluster.
         */
        sshProfile?: SshProfileResponse;
        /**
         * Stub cluster profile.
         */
        stubProfile?: any;
        /**
         * Trino Cluster profile.
         */
        trinoProfile?: TrinoProfileResponse;
    }
    /**
     * clusterProfileResponseProvideDefaults sets the appropriate defaults for ClusterProfileResponse
     */
    export function clusterProfileResponseProvideDefaults(val: ClusterProfileResponse): ClusterProfileResponse {
        return {
            ...val,
            prometheusProfile: (val.prometheusProfile ? clusterPrometheusProfileResponseProvideDefaults(val.prometheusProfile) : undefined),
            trinoProfile: (val.trinoProfile ? trinoProfileResponseProvideDefaults(val.trinoProfile) : undefined),
        };
    }

    export interface ClusterProfileResponseComponents {
        name?: string;
        version?: string;
    }

    /**
     * Cluster Prometheus profile.
     */
    export interface ClusterPrometheusProfileResponse {
        /**
         * Enable Prometheus for cluster or not.
         */
        enabled: boolean;
    }
    /**
     * clusterPrometheusProfileResponseProvideDefaults sets the appropriate defaults for ClusterPrometheusProfileResponse
     */
    export function clusterPrometheusProfileResponseProvideDefaults(val: ClusterPrometheusProfileResponse): ClusterPrometheusProfileResponse {
        return {
            ...val,
            enabled: (val.enabled) ?? false,
        };
    }

    /**
     * Cluster configs per component.
     */
    export interface ClusterServiceConfigResponse {
        /**
         * Name of the component the config files should apply to.
         */
        component: string;
        /**
         * List of Config Files.
         */
        files: ClusterConfigFileResponse[];
    }

    /**
     * Cluster service configs.
     */
    export interface ClusterServiceConfigsProfileResponse {
        /**
         * List of service configs.
         */
        configs: ClusterServiceConfigResponse[];
        /**
         * Name of the service the configurations should apply to.
         */
        serviceName: string;
    }

    /**
     * The comparison rule.
     */
    export interface ComparisonRuleResponse {
        /**
         * The comparison operator.
         */
        operator: string;
        /**
         * Threshold setting.
         */
        threshold: number;
    }

    /**
     * The compute profile.
     */
    export interface ComputeProfileResponse {
        /**
         * The nodes definitions.
         */
        nodes: NodeProfileResponse[];
    }

    /**
     * The cpu and memory requirement definition.
     */
    export interface ComputeResourceDefinitionResponse {
        /**
         * The required CPU.
         */
        cpu: number;
        /**
         * The required memory in MB, Container memory will be 110 percentile
         */
        memory: number;
    }

    /**
     * Cluster connectivity profile.
     */
    export interface ConnectivityProfileResponse {
        /**
         * List of SSH connectivity endpoints.
         */
        ssh?: SshConnectivityEndpointResponse[];
        /**
         * Web connectivity endpoint details.
         */
        web: ConnectivityProfileResponseWeb;
    }

    /**
     * Web connectivity endpoint details.
     */
    export interface ConnectivityProfileResponseWeb {
        /**
         * Web connectivity endpoint.
         */
        fqdn: string;
    }

    /**
     * Flink cluster catalog options.
     */
    export interface FlinkCatalogOptionsResponse {
        /**
         * Hive Catalog Option for Flink cluster.
         */
        hive?: FlinkHiveCatalogOptionResponse;
    }

    /**
     * Hive Catalog Option for Flink cluster.
     */
    export interface FlinkHiveCatalogOptionResponse {
        /**
         * Secret reference name from secretsProfile.secrets containing password for database connection.
         */
        metastoreDbConnectionPasswordSecret: string;
        /**
         * Connection string for hive metastore database.
         */
        metastoreDbConnectionURL: string;
        /**
         * User name for database connection.
         */
        metastoreDbConnectionUserName: string;
    }

    /**
     * The Flink cluster profile.
     */
    export interface FlinkProfileResponse {
        /**
         * Flink cluster catalog options.
         */
        catalogOptions?: FlinkCatalogOptionsResponse;
        /**
         * History Server container/ process CPU and memory requirements
         */
        historyServer?: ComputeResourceDefinitionResponse;
        /**
         * Job Manager container/ process CPU and memory requirements
         */
        jobManager: ComputeResourceDefinitionResponse;
        /**
         * The number of task managers.
         */
        numReplicas?: number;
        /**
         * The storage profile
         */
        storage: FlinkStorageProfileResponse;
        /**
         * Task Manager container/ process CPU and memory requirements
         */
        taskManager: ComputeResourceDefinitionResponse;
    }

    /**
     * The storage profile
     */
    export interface FlinkStorageProfileResponse {
        /**
         * Storage account uri which is used for savepoint and checkpoint state.
         */
        storageUri: string;
        /**
         * Storage key is only required for wasb(s) storage.
         */
        storagekey?: string;
    }

    /**
     * Hive Catalog Option
     */
    export interface HiveCatalogOptionResponse {
        /**
         * Name of trino catalog which should use specified hive metastore.
         */
        catalogName: string;
        /**
         * Secret reference name from secretsProfile.secrets containing password for database connection.
         */
        metastoreDbConnectionPasswordSecret: string;
        /**
         * Connection string for hive metastore database.
         */
        metastoreDbConnectionURL: string;
        /**
         * User name for database connection.
         */
        metastoreDbConnectionUserName: string;
        /**
         * Metastore root directory URI, format: abfs[s]://<container>@<account_name>.dfs.core.windows.net/<path>. More details: https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction-abfs-uri
         */
        metastoreWarehouseDir: string;
    }

    /**
     * Identity Profile with details of an MSI.
     */
    export interface IdentityProfileResponse {
        /**
         * ClientId of the MSI.
         */
        msiClientId: string;
        /**
         * ObjectId of the MSI.
         */
        msiObjectId: string;
        /**
         * ResourceId of the MSI.
         */
        msiResourceId: string;
    }

    /**
     * Profile of load based Autoscale.
     */
    export interface LoadBasedConfigResponse {
        /**
         * This is a cool down period, this is a time period in seconds, which determines the amount of time that must elapse between a scaling activity started by a rule and the start of the next scaling activity, regardless of the rule that triggers it. The default value is 300 seconds.
         */
        cooldownPeriod?: number;
        /**
         * User needs to set the maximum number of nodes for load based scaling, the load based scaling will use this to scale up and scale down between minimum and maximum number of nodes.
         */
        maxNodes: number;
        /**
         * User needs to set the minimum number of nodes for load based scaling, the load based scaling will use this to scale up and scale down between minimum and maximum number of nodes.
         */
        minNodes: number;
        /**
         * User can specify the poll interval, this is the time period (in seconds) after which scaling metrics are polled for triggering a scaling operation.
         */
        pollInterval?: number;
        /**
         * The scaling rules.
         */
        scalingRules: ScalingRuleResponse[];
    }

    /**
     * The node profile.
     */
    export interface NodeProfileResponse {
        /**
         * The number of virtual machines.
         */
        count: number;
        /**
         * The node type.
         */
        type: string;
        /**
         * The virtual machine SKU.
         */
        vmSize: string;
    }

    /**
     * The scaling rule.
     */
    export interface ScalingRuleResponse {
        /**
         * The action type.
         */
        actionType: string;
        /**
         * The comparison rule.
         */
        comparisonRule: ComparisonRuleResponse;
        /**
         * This is an evaluation count for a scaling condition, the number of times a trigger condition should be successful, before scaling activity is triggered.
         */
        evaluationCount: number;
        /**
         * Metrics name for individual workloads. For example: cpu
         */
        scalingMetric: string;
    }

    /**
     * Profile of schedule based Autoscale.
     */
    export interface ScheduleBasedConfigResponse {
        /**
         * Setting default node count of current schedule configuration. Default node count specifies the number of nodes which are default when an specified scaling operation is executed (scale up/scale down)
         */
        defaultCount: number;
        /**
         * This specifies the schedules where scheduled based Autoscale to be enabled, the user has a choice to set multiple rules within the schedule across days and times (start/end).
         */
        schedules: ScheduleResponse[];
        /**
         * User has to specify the timezone on which the schedule has to be set for schedule based autoscale configuration.
         */
        timeZone: string;
    }

    /**
     * Schedule definition.
     */
    export interface ScheduleResponse {
        /**
         * User has to set the node count anticipated at end of the scaling operation of the set current schedule configuration, format is integer.
         */
        count: number;
        /**
         * User has to set the days where schedule has to be set for autoscale operation.
         */
        days: string[];
        /**
         * User has to set the end time of current schedule configuration, format like 10:30 (HH:MM).
         */
        endTime: string;
        /**
         * User has to set the start time of current schedule configuration, format like 10:30 (HH:MM).
         */
        startTime: string;
    }

    /**
     * The script action profile.
     */
    export interface ScriptActionProfileResponse {
        /**
         * Script name.
         */
        name: string;
        /**
         * Additional parameters for the script action. It should be space-separated list of arguments required for script execution.
         */
        parameters?: string;
        /**
         * List of services to apply the script action.
         */
        services: string[];
        /**
         * Specify if the script should persist on the cluster.
         */
        shouldPersist?: boolean;
        /**
         * Timeout duration for the script action in minutes.
         */
        timeoutInMinutes?: number;
        /**
         * Type of the script action. Supported type is bash scripts.
         */
        type: string;
        /**
         * Url of the script file.
         */
        url: string;
    }
    /**
     * scriptActionProfileResponseProvideDefaults sets the appropriate defaults for ScriptActionProfileResponse
     */
    export function scriptActionProfileResponseProvideDefaults(val: ScriptActionProfileResponse): ScriptActionProfileResponse {
        return {
            ...val,
            shouldPersist: (val.shouldPersist) ?? true,
        };
    }

    /**
     * Secret reference and corresponding properties of a key vault secret.
     */
    export interface SecretReferenceResponse {
        /**
         * Object identifier name of the secret in key vault.
         */
        keyVaultObjectName: string;
        /**
         * Reference name of the secret to be used in service configs.
         */
        referenceName: string;
        /**
         * Type of key vault object: secret, key or certificate.
         */
        type: string;
        /**
         * Version of the secret in key vault.
         */
        version?: string;
    }

    /**
     * The cluster secret profile.
     */
    export interface SecretsProfileResponse {
        /**
         * Name of the user Key Vault where all the cluster specific user secrets are stored.
         */
        keyVaultResourceId: string;
        /**
         * Properties of Key Vault secret.
         */
        secrets?: SecretReferenceResponse[];
    }

    /**
     * The metastore specification for Spark cluster.
     */
    export interface SparkMetastoreSpecResponse {
        /**
         * The database name.
         */
        dbName: string;
        /**
         * The secret name which contains the database user password.
         */
        dbPasswordSecretName: string;
        /**
         * The database server host.
         */
        dbServerHost: string;
        /**
         * The database user name.
         */
        dbUserName: string;
        /**
         * The key vault resource id.
         */
        keyVaultId: string;
        /**
         * The thrift url.
         */
        thriftUrl?: string;
    }

    /**
     * The spark cluster profile.
     */
    export interface SparkProfileResponse {
        /**
         * The default storage URL.
         */
        defaultStorageUrl?: string;
        /**
         * The metastore specification for Spark cluster.
         */
        metastoreSpec?: SparkMetastoreSpecResponse;
        /**
         * Spark user plugins spec
         */
        userPluginsSpec?: SparkUserPluginsResponse;
    }

    /**
     * Spark user plugin.
     */
    export interface SparkUserPluginResponse {
        /**
         * Fully qualified path to the folder containing the plugins.
         */
        path: string;
    }

    /**
     * Spark user plugins spec
     */
    export interface SparkUserPluginsResponse {
        /**
         * Spark user plugins.
         */
        plugins?: SparkUserPluginResponse[];
    }

    /**
     * SSH connectivity endpoint details.
     */
    export interface SshConnectivityEndpointResponse {
        /**
         * SSH connectivity endpoint.
         */
        endpoint: string;
    }

    /**
     * Ssh profile for the cluster.
     */
    export interface SshProfileResponse {
        /**
         * Number of ssh pods per cluster.
         */
        count: number;
        /**
         * Prefix of the pod names. Pod number will be appended to the prefix. The ingress URLs for the pods will be available at <clusterFqdn>/<sshBasePath>/<prefix>-<number>
         */
        podPrefix: string;
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
     * Trino Coordinator.
     */
    export interface TrinoCoordinatorResponse {
        /**
         * The flag that if enable debug or not.
         */
        enable?: boolean;
        /**
         * The flag that if enable coordinator HA, uses multiple coordinator replicas with auto failover, one per each head node. Default: true.
         */
        highAvailabilityEnabled?: boolean;
        /**
         * The debug port.
         */
        port?: number;
        /**
         * The flag that if suspend debug or not.
         */
        suspend?: boolean;
    }
    /**
     * trinoCoordinatorResponseProvideDefaults sets the appropriate defaults for TrinoCoordinatorResponse
     */
    export function trinoCoordinatorResponseProvideDefaults(val: TrinoCoordinatorResponse): TrinoCoordinatorResponse {
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
    export interface TrinoProfileResponse {
        /**
         * Trino cluster catalog options.
         */
        catalogOptions?: CatalogOptionsResponse;
        /**
         * Trino Coordinator.
         */
        coordinator?: TrinoCoordinatorResponse;
        /**
         * Trino user plugins spec
         */
        userPluginsSpec?: TrinoUserPluginsResponse;
        /**
         * User telemetry
         */
        userTelemetrySpec?: TrinoUserTelemetryResponse;
        /**
         * Trino worker.
         */
        worker?: TrinoWorkerResponse;
    }
    /**
     * trinoProfileResponseProvideDefaults sets the appropriate defaults for TrinoProfileResponse
     */
    export function trinoProfileResponseProvideDefaults(val: TrinoProfileResponse): TrinoProfileResponse {
        return {
            ...val,
            coordinator: (val.coordinator ? trinoCoordinatorResponseProvideDefaults(val.coordinator) : undefined),
            userTelemetrySpec: (val.userTelemetrySpec ? trinoUserTelemetryResponseProvideDefaults(val.userTelemetrySpec) : undefined),
            worker: (val.worker ? trinoWorkerResponseProvideDefaults(val.worker) : undefined),
        };
    }

    /**
     * Trino user telemetry definition.
     */
    export interface TrinoTelemetryConfigResponse {
        /**
         * Hive Catalog name used to mount external tables on the logs written by trino, if not specified there tables are not created.
         */
        hivecatalogName?: string;
        /**
         * Schema of the above catalog to use, to mount query logs as external tables, if not specified tables will be mounted under schema trinologs.
         */
        hivecatalogSchema?: string;
        /**
         * Retention period for query log table partitions, this doesn't have any affect on actual data.
         */
        partitionRetentionInDays?: number;
        /**
         * Azure storage location of the blobs.
         */
        path?: string;
    }
    /**
     * trinoTelemetryConfigResponseProvideDefaults sets the appropriate defaults for TrinoTelemetryConfigResponse
     */
    export function trinoTelemetryConfigResponseProvideDefaults(val: TrinoTelemetryConfigResponse): TrinoTelemetryConfigResponse {
        return {
            ...val,
            hivecatalogSchema: (val.hivecatalogSchema) ?? "trinologs",
            partitionRetentionInDays: (val.partitionRetentionInDays) ?? 365,
        };
    }

    /**
     * Trino user plugin.
     */
    export interface TrinoUserPluginResponse {
        /**
         * Denotes whether the plugin is active or not.
         */
        enabled?: boolean;
        /**
         * This field maps to the sub-directory in trino plugins location, that will contain all the plugins under path.
         */
        name?: string;
        /**
         * Fully qualified path to the folder containing the plugins.
         */
        path?: string;
    }

    /**
     * Trino user plugins spec
     */
    export interface TrinoUserPluginsResponse {
        /**
         * Trino user plugins.
         */
        plugins?: TrinoUserPluginResponse[];
    }

    /**
     * User telemetry
     */
    export interface TrinoUserTelemetryResponse {
        /**
         * Trino user telemetry definition.
         */
        storage?: TrinoTelemetryConfigResponse;
    }
    /**
     * trinoUserTelemetryResponseProvideDefaults sets the appropriate defaults for TrinoUserTelemetryResponse
     */
    export function trinoUserTelemetryResponseProvideDefaults(val: TrinoUserTelemetryResponse): TrinoUserTelemetryResponse {
        return {
            ...val,
            storage: (val.storage ? trinoTelemetryConfigResponseProvideDefaults(val.storage) : undefined),
        };
    }

    /**
     * Trino worker.
     */
    export interface TrinoWorkerResponse {
        /**
         * The flag that if enable debug or not.
         */
        enable?: boolean;
        /**
         * The debug port.
         */
        port?: number;
        /**
         * The flag that if suspend debug or not.
         */
        suspend?: boolean;
    }
    /**
     * trinoWorkerResponseProvideDefaults sets the appropriate defaults for TrinoWorkerResponse
     */
    export function trinoWorkerResponseProvideDefaults(val: TrinoWorkerResponse): TrinoWorkerResponse {
        return {
            ...val,
            enable: (val.enable) ?? false,
            port: (val.port) ?? 8008,
            suspend: (val.suspend) ?? false,
        };
    }
