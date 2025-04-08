import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Gets the application SSH endpoint
 */
export interface ApplicationGetEndpointArgs {
    /**
     * The destination port to connect to.
     */
    destinationPort?: pulumi.Input<number>;
    /**
     * The location of the endpoint.
     */
    location?: pulumi.Input<string>;
    /**
     * The private ip address of the endpoint.
     */
    privateIPAddress?: pulumi.Input<string>;
    /**
     * The public port to connect to.
     */
    publicPort?: pulumi.Input<number>;
}

/**
 * Gets the application HTTP endpoints.
 */
export interface ApplicationGetHttpsEndpointArgs {
    /**
     * The list of access modes for the application.
     */
    accessModes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The destination port to connect to.
     */
    destinationPort?: pulumi.Input<number>;
    /**
     * The value indicates whether to disable GatewayAuth.
     */
    disableGatewayAuth?: pulumi.Input<boolean>;
    /**
     * The private ip address of the endpoint.
     */
    privateIPAddress?: pulumi.Input<string>;
    /**
     * The subdomain suffix of the application.
     */
    subDomainSuffix?: pulumi.Input<string>;
}

/**
 * The HDInsight cluster application GET response.
 */
export interface ApplicationPropertiesArgs {
    /**
     * The application type.
     */
    applicationType?: pulumi.Input<string>;
    /**
     * The list of roles in the cluster.
     */
    computeProfile?: pulumi.Input<ComputeProfileArgs>;
    /**
     * The list of errors.
     */
    errors?: pulumi.Input<pulumi.Input<ErrorsArgs>[]>;
    /**
     * The list of application HTTPS endpoints.
     */
    httpsEndpoints?: pulumi.Input<pulumi.Input<ApplicationGetHttpsEndpointArgs>[]>;
    /**
     * The list of install script actions.
     */
    installScriptActions?: pulumi.Input<pulumi.Input<RuntimeScriptActionArgs>[]>;
    /**
     * The private link configurations.
     */
    privateLinkConfigurations?: pulumi.Input<pulumi.Input<PrivateLinkConfigurationArgs>[]>;
    /**
     * The list of application SSH endpoints.
     */
    sshEndpoints?: pulumi.Input<pulumi.Input<ApplicationGetEndpointArgs>[]>;
    /**
     * The list of uninstall script actions.
     */
    uninstallScriptActions?: pulumi.Input<pulumi.Input<RuntimeScriptActionArgs>[]>;
}

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
 * The autoscale request parameters
 */
export interface AutoscaleArgs {
    /**
     * Parameters for load-based autoscale
     */
    capacity?: pulumi.Input<AutoscaleCapacityArgs>;
    /**
     * Parameters for schedule-based autoscale
     */
    recurrence?: pulumi.Input<AutoscaleRecurrenceArgs>;
}

/**
 * The load-based autoscale request parameters
 */
export interface AutoscaleCapacityArgs {
    /**
     * The maximum instance count of the cluster
     */
    maxInstanceCount?: pulumi.Input<number>;
    /**
     * The minimum instance count of the cluster
     */
    minInstanceCount?: pulumi.Input<number>;
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
 * Schedule-based autoscale request parameters
 */
export interface AutoscaleRecurrenceArgs {
    /**
     * Array of schedule-based autoscale rules
     */
    schedule?: pulumi.Input<pulumi.Input<AutoscaleScheduleArgs>[]>;
    /**
     * The time zone for the autoscale schedule times
     */
    timeZone?: pulumi.Input<string>;
}

/**
 * Parameters for a schedule-based autoscale rule, consisting of an array of days + a time and capacity
 */
export interface AutoscaleScheduleArgs {
    /**
     * Days of the week for a schedule-based autoscale rule
     */
    days?: pulumi.Input<pulumi.Input<string | enums.DaysOfWeek>[]>;
    /**
     * Time and capacity for a schedule-based autoscale rule
     */
    timeAndCapacity?: pulumi.Input<AutoscaleTimeAndCapacityArgs>;
}

/**
 * Time and capacity request parameters
 */
export interface AutoscaleTimeAndCapacityArgs {
    /**
     * The maximum instance count of the cluster
     */
    maxInstanceCount?: pulumi.Input<number>;
    /**
     * The minimum instance count of the cluster
     */
    minInstanceCount?: pulumi.Input<number>;
    /**
     * 24-hour time in the form xx:xx
     */
    time?: pulumi.Input<string>;
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
 * The information of AAD security group.
 */
export interface ClientGroupInfoArgs {
    /**
     * The AAD security group id.
     */
    groupId?: pulumi.Input<string>;
    /**
     * The AAD security group name.
     */
    groupName?: pulumi.Input<string>;
}

/**
 * Cluster access profile.
 */
export interface ClusterAccessProfileArgs {
    /**
     * Whether to create cluster using private IP instead of public IP. This property must be set at create time.
     */
    enableInternalIngress: pulumi.Input<boolean>;
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
 * The cluster create parameters.
 */
export interface ClusterCreatePropertiesArgs {
    /**
     * The cluster definition.
     */
    clusterDefinition?: pulumi.Input<ClusterDefinitionArgs>;
    /**
     * The version of the cluster.
     */
    clusterVersion?: pulumi.Input<string>;
    /**
     * The compute isolation properties.
     */
    computeIsolationProperties?: pulumi.Input<ComputeIsolationPropertiesArgs>;
    /**
     * The compute profile.
     */
    computeProfile?: pulumi.Input<ComputeProfileArgs>;
    /**
     * The disk encryption properties.
     */
    diskEncryptionProperties?: pulumi.Input<DiskEncryptionPropertiesArgs>;
    /**
     * The encryption-in-transit properties.
     */
    encryptionInTransitProperties?: pulumi.Input<EncryptionInTransitPropertiesArgs>;
    /**
     * The cluster kafka rest proxy configuration.
     */
    kafkaRestProperties?: pulumi.Input<KafkaRestPropertiesArgs>;
    /**
     * The minimal supported tls version.
     */
    minSupportedTlsVersion?: pulumi.Input<string>;
    /**
     * The network properties.
     */
    networkProperties?: pulumi.Input<NetworkPropertiesArgs>;
    /**
     * The type of operating system.
     */
    osType?: pulumi.Input<string | enums.OSType>;
    /**
     * The private link configurations.
     */
    privateLinkConfigurations?: pulumi.Input<pulumi.Input<PrivateLinkConfigurationArgs>[]>;
    /**
     * The security profile.
     */
    securityProfile?: pulumi.Input<SecurityProfileArgs>;
    /**
     * The storage profile.
     */
    storageProfile?: pulumi.Input<StorageProfileArgs>;
    /**
     * The cluster tier.
     */
    tier?: pulumi.Input<string | enums.Tier>;
}
/**
 * clusterCreatePropertiesArgsProvideDefaults sets the appropriate defaults for ClusterCreatePropertiesArgs
 */
export function clusterCreatePropertiesArgsProvideDefaults(val: ClusterCreatePropertiesArgs): ClusterCreatePropertiesArgs {
    return {
        ...val,
        computeIsolationProperties: (val.computeIsolationProperties ? pulumi.output(val.computeIsolationProperties).apply(computeIsolationPropertiesArgsProvideDefaults) : undefined),
        diskEncryptionProperties: (val.diskEncryptionProperties ? pulumi.output(val.diskEncryptionProperties).apply(diskEncryptionPropertiesArgsProvideDefaults) : undefined),
        encryptionInTransitProperties: (val.encryptionInTransitProperties ? pulumi.output(val.encryptionInTransitProperties).apply(encryptionInTransitPropertiesArgsProvideDefaults) : undefined),
        tier: (val.tier) ?? "Standard",
    };
}

/**
 * The cluster definition.
 */
export interface ClusterDefinitionArgs {
    /**
     * The link to the blueprint.
     */
    blueprint?: pulumi.Input<string>;
    /**
     * The versions of different services in the cluster.
     */
    componentVersion?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The cluster configurations.
     */
    configurations?: any;
    /**
     * The type of cluster.
     */
    kind?: pulumi.Input<string>;
}

/**
 * Identity for the cluster.
 */
export interface ClusterIdentityArgs {
    /**
     * The type of identity used for the cluster. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities.
     */
    type?: pulumi.Input<string | enums.ResourceIdentityType>;
    /**
     * The list of user identities associated with the cluster. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: pulumi.Input<{[key: string]: pulumi.Input<UserAssignedIdentityArgs>}>;
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
 * The compute profile.
 */
export interface ClusterPoolComputeProfileArgs {
    /**
     * The list of Availability zones to use for AKS VMSS nodes.
     */
    availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The nodes definitions.
     */
    nodes: pulumi.Input<pulumi.Input<NodeProfileArgs>[]>;
}

/**
 * CLuster pool profile.
 */
export interface ClusterPoolResourcePropertiesClusterPoolProfileArgs {
    /**
     * Cluster pool version is a 2-part version.
     */
    clusterPoolVersion: pulumi.Input<string>;
    /**
     * Gets or sets the IP tag for the public IPs created along with the HDInsightOnAks ClusterPools and Clusters. 
     */
    publicIpTag?: pulumi.Input<IpTagArgs>;
}

/**
 * CLuster pool compute profile.
 */
export interface ClusterPoolResourcePropertiesComputeProfileArgs {
    /**
     * The list of Availability zones to use for AKS VMSS nodes.
     */
    availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
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
     * IP ranges are specified in CIDR format, e.g. 137.117.106.88/29. This feature is not compatible with private AKS clusters. So you cannot set enablePrivateApiServer to true and apiServerAuthorizedIpRanges at the same time. Currently, this property is not supported and please don't use it.
     */
    apiServerAuthorizedIpRanges?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * ClusterPool is based on AKS cluster. AKS cluster exposes the API server to public internet by default. If you set this property to true, a private AKS cluster will be created, and it will use private apiserver, which is not exposed to public internet.
     */
    enablePrivateApiServer?: pulumi.Input<boolean>;
    /**
     * This can only be set at cluster pool creation time and cannot be changed later. 
     */
    outboundType?: pulumi.Input<string | enums.OutboundType>;
    /**
     * Cluster pool subnet resource id.
     */
    subnetId: pulumi.Input<string>;
}
/**
 * clusterPoolResourcePropertiesNetworkProfileArgsProvideDefaults sets the appropriate defaults for ClusterPoolResourcePropertiesNetworkProfileArgs
 */
export function clusterPoolResourcePropertiesNetworkProfileArgsProvideDefaults(val: ClusterPoolResourcePropertiesNetworkProfileArgs): ClusterPoolResourcePropertiesNetworkProfileArgs {
    return {
        ...val,
        outboundType: (val.outboundType) ?? "loadBalancer",
    };
}

/**
 * Ssh profile for the cluster.
 */
export interface ClusterPoolSshProfileArgs {
    /**
     * Number of ssh pods per cluster.
     */
    count: pulumi.Input<number>;
    /**
     * The virtual machine SKU.
     */
    vmSize?: pulumi.Input<string>;
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
     * Cluster access profile.
     */
    clusterAccessProfile?: pulumi.Input<ClusterAccessProfileArgs>;
    /**
     * Version with 3/4 part.
     */
    clusterVersion: pulumi.Input<string>;
    /**
     * The Flink cluster profile.
     */
    flinkProfile?: pulumi.Input<FlinkProfileArgs>;
    /**
     * This is deprecated. Please use managed identity profile instead.
     */
    identityProfile?: pulumi.Input<IdentityProfileArgs>;
    /**
     * The Kafka cluster profile.
     */
    kafkaProfile?: pulumi.Input<KafkaProfileArgs>;
    /**
     * LLAP cluster profile.
     */
    llapProfile?: any;
    /**
     * Cluster log analytics profile to enable or disable OMS agent for cluster.
     */
    logAnalyticsProfile?: pulumi.Input<ClusterLogAnalyticsProfileArgs>;
    /**
     * This property is required by Trino, Spark and Flink cluster but is optional for Kafka cluster.
     */
    managedIdentityProfile?: pulumi.Input<ManagedIdentityProfileArgs>;
    /**
     * Version with three part.
     */
    ossVersion: pulumi.Input<string>;
    /**
     * Cluster Prometheus profile.
     */
    prometheusProfile?: pulumi.Input<ClusterPrometheusProfileArgs>;
    /**
     * Cluster Ranger plugin profile.
     */
    rangerPluginProfile?: pulumi.Input<ClusterRangerPluginProfileArgs>;
    /**
     * The ranger cluster profile.
     */
    rangerProfile?: pulumi.Input<RangerProfileArgs>;
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
    sshProfile?: pulumi.Input<ClusterPoolSshProfileArgs>;
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
        flinkProfile: (val.flinkProfile ? pulumi.output(val.flinkProfile).apply(flinkProfileArgsProvideDefaults) : undefined),
        kafkaProfile: (val.kafkaProfile ? pulumi.output(val.kafkaProfile).apply(kafkaProfileArgsProvideDefaults) : undefined),
        prometheusProfile: (val.prometheusProfile ? pulumi.output(val.prometheusProfile).apply(clusterPrometheusProfileArgsProvideDefaults) : undefined),
        rangerPluginProfile: (val.rangerPluginProfile ? pulumi.output(val.rangerPluginProfile).apply(clusterRangerPluginProfileArgsProvideDefaults) : undefined),
        rangerProfile: (val.rangerProfile ? pulumi.output(val.rangerProfile).apply(rangerProfileArgsProvideDefaults) : undefined),
        sparkProfile: (val.sparkProfile ? pulumi.output(val.sparkProfile).apply(sparkProfileArgsProvideDefaults) : undefined),
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
 * Cluster Ranger plugin profile.
 */
export interface ClusterRangerPluginProfileArgs {
    /**
     * Enable Ranger for cluster or not.
     */
    enabled: pulumi.Input<boolean>;
}
/**
 * clusterRangerPluginProfileArgsProvideDefaults sets the appropriate defaults for ClusterRangerPluginProfileArgs
 */
export function clusterRangerPluginProfileArgsProvideDefaults(val: ClusterRangerPluginProfileArgs): ClusterRangerPluginProfileArgs {
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
 * The compute isolation properties.
 */
export interface ComputeIsolationPropertiesArgs {
    /**
     * The flag indicates whether enable compute isolation or not.
     */
    enableComputeIsolation?: pulumi.Input<boolean>;
    /**
     * The host sku.
     */
    hostSku?: pulumi.Input<string>;
}
/**
 * computeIsolationPropertiesArgsProvideDefaults sets the appropriate defaults for ComputeIsolationPropertiesArgs
 */
export function computeIsolationPropertiesArgsProvideDefaults(val: ComputeIsolationPropertiesArgs): ComputeIsolationPropertiesArgs {
    return {
        ...val,
        enableComputeIsolation: (val.enableComputeIsolation) ?? false,
    };
}

/**
 * Describes the compute profile.
 */
export interface ComputeProfileArgs {
    /**
     * The list of roles in the cluster.
     */
    roles?: pulumi.Input<pulumi.Input<RoleArgs>[]>;
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
 * The data disks groups for the role.
 */
export interface DataDisksGroupsArgs {
    /**
     * The number of disks per node.
     */
    disksPerNode?: pulumi.Input<number>;
}

/**
 * The disk encryption properties
 */
export interface DiskEncryptionPropertiesArgs {
    /**
     * Algorithm identifier for encryption, default RSA-OAEP.
     */
    encryptionAlgorithm?: pulumi.Input<string | enums.JsonWebKeyEncryptionAlgorithm>;
    /**
     * Indicates whether or not resource disk encryption is enabled.
     */
    encryptionAtHost?: pulumi.Input<boolean>;
    /**
     * Key name that is used for enabling disk encryption.
     */
    keyName?: pulumi.Input<string>;
    /**
     * Specific key version that is used for enabling disk encryption.
     */
    keyVersion?: pulumi.Input<string>;
    /**
     * Resource ID of Managed Identity that is used to access the key vault.
     */
    msiResourceId?: pulumi.Input<string>;
    /**
     * Base key vault URI where the customers key is located eg. https://myvault.vault.azure.net
     */
    vaultUri?: pulumi.Input<string>;
}
/**
 * diskEncryptionPropertiesArgsProvideDefaults sets the appropriate defaults for DiskEncryptionPropertiesArgs
 */
export function diskEncryptionPropertiesArgsProvideDefaults(val: DiskEncryptionPropertiesArgs): DiskEncryptionPropertiesArgs {
    return {
        ...val,
        encryptionAtHost: (val.encryptionAtHost) ?? false,
    };
}

/**
 * Kafka disk storage profile.
 */
export interface DiskStorageProfileArgs {
    /**
     * Managed Disk size in GB. The maximum supported disk size for Standard and Premium HDD/SSD is 32TB, except for Premium SSD v2, which supports up to 64TB.
     */
    dataDiskSize: pulumi.Input<number>;
    /**
     * Managed Disk Type.
     */
    dataDiskType: pulumi.Input<string | enums.DataDiskType>;
}

/**
 * The encryption-in-transit properties.
 */
export interface EncryptionInTransitPropertiesArgs {
    /**
     * Indicates whether or not inter cluster node communication is encrypted in transit.
     */
    isEncryptionInTransitEnabled?: pulumi.Input<boolean>;
}
/**
 * encryptionInTransitPropertiesArgsProvideDefaults sets the appropriate defaults for EncryptionInTransitPropertiesArgs
 */
export function encryptionInTransitPropertiesArgsProvideDefaults(val: EncryptionInTransitPropertiesArgs): EncryptionInTransitPropertiesArgs {
    return {
        ...val,
        isEncryptionInTransitEnabled: (val.isEncryptionInTransitEnabled) ?? false,
    };
}

/**
 * The error message associated with the cluster creation.
 */
export interface ErrorsArgs {
    /**
     * The error code.
     */
    code?: pulumi.Input<string>;
    /**
     * The error message.
     */
    message?: pulumi.Input<string>;
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
 * flinkCatalogOptionsArgsProvideDefaults sets the appropriate defaults for FlinkCatalogOptionsArgs
 */
export function flinkCatalogOptionsArgsProvideDefaults(val: FlinkCatalogOptionsArgs): FlinkCatalogOptionsArgs {
    return {
        ...val,
        hive: (val.hive ? pulumi.output(val.hive).apply(flinkHiveCatalogOptionArgsProvideDefaults) : undefined),
    };
}

/**
 * Hive Catalog Option for Flink cluster.
 */
export interface FlinkHiveCatalogOptionArgs {
    /**
     * The authentication mode to connect to your Hive metastore database. More details: https://learn.microsoft.com/en-us/azure/azure-sql/database/logins-create-manage?view=azuresql#authentication-and-authorization
     */
    metastoreDbConnectionAuthenticationMode?: pulumi.Input<string | enums.MetastoreDbConnectionAuthenticationMode>;
    /**
     * Secret reference name from secretsProfile.secrets containing password for database connection.
     */
    metastoreDbConnectionPasswordSecret?: pulumi.Input<string>;
    /**
     * Connection string for hive metastore database.
     */
    metastoreDbConnectionURL: pulumi.Input<string>;
    /**
     * User name for database connection.
     */
    metastoreDbConnectionUserName?: pulumi.Input<string>;
}
/**
 * flinkHiveCatalogOptionArgsProvideDefaults sets the appropriate defaults for FlinkHiveCatalogOptionArgs
 */
export function flinkHiveCatalogOptionArgsProvideDefaults(val: FlinkHiveCatalogOptionArgs): FlinkHiveCatalogOptionArgs {
    return {
        ...val,
        metastoreDbConnectionAuthenticationMode: (val.metastoreDbConnectionAuthenticationMode) ?? "IdentityAuth",
    };
}

/**
 * Job specifications for flink clusters in application deployment mode. The specification is immutable even if job properties are changed by calling the RunJob API, please use the ListJob API to get the latest job information.
 */
export interface FlinkJobProfileArgs {
    /**
     * A string property representing additional JVM arguments for the Flink job. It should be space separated value.
     */
    args?: pulumi.Input<string>;
    /**
     * A string property that specifies the entry class for the Flink job. If not specified, the entry point is auto-detected from the flink job jar package.
     */
    entryClass?: pulumi.Input<string>;
    /**
     * A string property that represents the name of the job JAR.
     */
    jarName: pulumi.Input<string>;
    /**
     * A string property that specifies the directory where the job JAR is located.
     */
    jobJarDirectory: pulumi.Input<string>;
    /**
     * A string property that represents the name of the savepoint for the Flink job
     */
    savePointName?: pulumi.Input<string>;
    /**
     * A string property that indicates the upgrade mode to be performed on the Flink job. It can have one of the following enum values => STATELESS_UPDATE, UPDATE, LAST_STATE_UPDATE.
     */
    upgradeMode: pulumi.Input<string | enums.UpgradeMode>;
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
     * A string property that indicates the deployment mode of Flink cluster. It can have one of the following enum values => Application, Session. Default value is Session
     */
    deploymentMode?: pulumi.Input<string | enums.DeploymentMode>;
    /**
     * History Server container/ process CPU and memory requirements
     */
    historyServer?: pulumi.Input<ComputeResourceDefinitionArgs>;
    /**
     * Job Manager container/ process CPU and memory requirements
     */
    jobManager: pulumi.Input<ComputeResourceDefinitionArgs>;
    /**
     * Job specifications for flink clusters in application deployment mode. The specification is immutable even if job properties are changed by calling the RunJob API, please use the ListJob API to get the latest job information.
     */
    jobSpec?: pulumi.Input<FlinkJobProfileArgs>;
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
 * flinkProfileArgsProvideDefaults sets the appropriate defaults for FlinkProfileArgs
 */
export function flinkProfileArgsProvideDefaults(val: FlinkProfileArgs): FlinkProfileArgs {
    return {
        ...val,
        catalogOptions: (val.catalogOptions ? pulumi.output(val.catalogOptions).apply(flinkCatalogOptionsArgsProvideDefaults) : undefined),
    };
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
 * The hardware profile.
 */
export interface HardwareProfileArgs {
    /**
     * The size of the VM
     */
    vmSize?: pulumi.Input<string>;
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
     * The authentication mode to connect to your Hive metastore database. More details: https://learn.microsoft.com/en-us/azure/azure-sql/database/logins-create-manage?view=azuresql#authentication-and-authorization
     */
    metastoreDbConnectionAuthenticationMode?: pulumi.Input<string | enums.MetastoreDbConnectionAuthenticationMode>;
    /**
     * Secret reference name from secretsProfile.secrets containing password for database connection.
     */
    metastoreDbConnectionPasswordSecret?: pulumi.Input<string>;
    /**
     * Connection string for hive metastore database.
     */
    metastoreDbConnectionURL: pulumi.Input<string>;
    /**
     * User name for database connection.
     */
    metastoreDbConnectionUserName?: pulumi.Input<string>;
    /**
     * Metastore root directory URI, format: abfs[s]://<container>@<account_name>.dfs.core.windows.net/<path>. More details: https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction-abfs-uri
     */
    metastoreWarehouseDir: pulumi.Input<string>;
}
/**
 * hiveCatalogOptionArgsProvideDefaults sets the appropriate defaults for HiveCatalogOptionArgs
 */
export function hiveCatalogOptionArgsProvideDefaults(val: HiveCatalogOptionArgs): HiveCatalogOptionArgs {
    return {
        ...val,
        metastoreDbConnectionAuthenticationMode: (val.metastoreDbConnectionAuthenticationMode) ?? "IdentityAuth",
    };
}

/**
 * The ip configurations for the private link service.
 */
export interface IPConfigurationArgs {
    /**
     * The name of private link IP configuration.
     */
    name: pulumi.Input<string>;
    /**
     * Indicates whether this IP configuration is primary for the corresponding NIC.
     */
    primary?: pulumi.Input<boolean>;
    /**
     * The IP address.
     */
    privateIPAddress?: pulumi.Input<string>;
    /**
     * The method that private IP address is allocated.
     */
    privateIPAllocationMethod?: pulumi.Input<string | enums.PrivateIPAllocationMethod>;
    /**
     * The subnet resource id.
     */
    subnet?: pulumi.Input<ResourceIdArgs>;
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
 * Contains the IpTag associated with the public IP address
 */
export interface IpTagArgs {
    /**
     * Gets or sets the ipTag type: Example FirstPartyUsage.
     */
    ipTagType: pulumi.Input<string>;
    /**
     * Gets or sets value of the IpTag associated with the public IP. Example HDInsight, SQL, Storage etc
     */
    tag: pulumi.Input<string>;
}

/**
 * The Kafka cluster profile.
 */
export interface KafkaProfileArgs {
    /**
     * Kafka disk storage profile.
     */
    diskStorage: pulumi.Input<DiskStorageProfileArgs>;
    /**
     * Expose Kafka cluster in KRaft mode.
     */
    enableKRaft?: pulumi.Input<boolean>;
    /**
     * Expose worker nodes as public endpoints.
     */
    enablePublicEndpoints?: pulumi.Input<boolean>;
    /**
     * Fully qualified path of Azure Storage container used for Tiered Storage.
     */
    remoteStorageUri?: pulumi.Input<string>;
}
/**
 * kafkaProfileArgsProvideDefaults sets the appropriate defaults for KafkaProfileArgs
 */
export function kafkaProfileArgsProvideDefaults(val: KafkaProfileArgs): KafkaProfileArgs {
    return {
        ...val,
        enableKRaft: (val.enableKRaft) ?? true,
        enablePublicEndpoints: (val.enablePublicEndpoints) ?? false,
    };
}

/**
 * The kafka rest proxy configuration which contains AAD security group information.
 */
export interface KafkaRestPropertiesArgs {
    /**
     * The information of AAD security group.
     */
    clientGroupInfo?: pulumi.Input<ClientGroupInfoArgs>;
    /**
     * The configurations that need to be overriden.
     */
    configurationOverride?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The ssh username, password, and ssh public key.
 */
export interface LinuxOperatingSystemProfileArgs {
    /**
     * The password.
     */
    password?: pulumi.Input<string>;
    /**
     * The SSH profile.
     */
    sshProfile?: pulumi.Input<SshProfileArgs>;
    /**
     * The username.
     */
    username?: pulumi.Input<string>;
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
 * The details of managed identity.
 */
export interface ManagedIdentityProfileArgs {
    /**
     * The list of managed identity.
     */
    identityList: pulumi.Input<pulumi.Input<ManagedIdentitySpecArgs>[]>;
}

/**
 * The details of a managed identity.
 */
export interface ManagedIdentitySpecArgs {
    /**
     * ClientId of the managed identity.
     */
    clientId: pulumi.Input<string>;
    /**
     * ObjectId of the managed identity.
     */
    objectId: pulumi.Input<string>;
    /**
     * ResourceId of the managed identity.
     */
    resourceId: pulumi.Input<string>;
    /**
     * The type of managed identity.
     */
    type: pulumi.Input<string | enums.ManagedIdentityType>;
}

/**
 * The network properties.
 */
export interface NetworkPropertiesArgs {
    /**
     * A value to describe how the outbound dependencies of a HDInsight cluster are managed. 'Managed' means that the outbound dependencies are managed by the HDInsight service. 'External' means that the outbound dependencies are managed by a customer specific solution.
     */
    outboundDependenciesManagedType?: pulumi.Input<string | enums.OutboundDependenciesManagedType>;
    /**
     * Indicates whether or not private link is enabled.
     */
    privateLink?: pulumi.Input<string | enums.PrivateLink>;
    /**
     * Gets or sets the IP tag for the public IPs created along with the HDInsight Clusters. 
     */
    publicIpTag?: pulumi.Input<IpTagArgs>;
    /**
     * The direction for the resource provider connection.
     */
    resourceProviderConnection?: pulumi.Input<string | enums.ResourceProviderConnection>;
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
 * The Linux operation systems profile.
 */
export interface OsProfileArgs {
    /**
     * The Linux OS profile.
     */
    linuxOperatingSystemProfile?: pulumi.Input<LinuxOperatingSystemProfileArgs>;
}

/**
 * The private link configuration.
 */
export interface PrivateLinkConfigurationArgs {
    /**
     * The HDInsight private linkable sub-resource name to apply the private link configuration to. For example, 'headnode', 'gateway', 'edgenode'.
     */
    groupId: pulumi.Input<string>;
    /**
     * The IP configurations for the private link service.
     */
    ipConfigurations: pulumi.Input<pulumi.Input<IPConfigurationArgs>[]>;
    /**
     * The name of private link configuration.
     */
    name: pulumi.Input<string>;
}

/**
 * The private link service connection state.
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * Whether there is further actions.
     */
    actionsRequired?: pulumi.Input<string>;
    /**
     * The optional description of the status.
     */
    description?: pulumi.Input<string>;
    /**
     * The concrete private link service connection.
     */
    status: pulumi.Input<string | enums.PrivateLinkServiceConnectionStatus>;
}

/**
 * Specification for the Ranger Admin service.
 */
export interface RangerAdminSpecArgs {
    /**
     * List of usernames that should be marked as ranger admins. These usernames should match the user principal name (UPN) of the respective AAD users.
     */
    admins: pulumi.Input<pulumi.Input<string>[]>;
    database: pulumi.Input<RangerAdminSpecDatabaseArgs>;
}

export interface RangerAdminSpecDatabaseArgs {
    /**
     * The database URL
     */
    host: pulumi.Input<string>;
    /**
     * The database name
     */
    name: pulumi.Input<string>;
    /**
     * Reference for the database password
     */
    passwordSecretRef?: pulumi.Input<string>;
    /**
     * The name of the database user
     */
    username?: pulumi.Input<string>;
}

/**
 * Properties required to describe audit log storage.
 */
export interface RangerAuditSpecArgs {
    /**
     * Azure storage location of the blobs. MSI should have read/write access to this Storage account.
     */
    storageAccount?: pulumi.Input<string>;
}

/**
 * The ranger cluster profile.
 */
export interface RangerProfileArgs {
    /**
     * Specification for the Ranger Admin service.
     */
    rangerAdmin: pulumi.Input<RangerAdminSpecArgs>;
    /**
     * Properties required to describe audit log storage.
     */
    rangerAudit?: pulumi.Input<RangerAuditSpecArgs>;
    /**
     * Specification for the Ranger Usersync service
     */
    rangerUsersync: pulumi.Input<RangerUsersyncSpecArgs>;
}
/**
 * rangerProfileArgsProvideDefaults sets the appropriate defaults for RangerProfileArgs
 */
export function rangerProfileArgsProvideDefaults(val: RangerProfileArgs): RangerProfileArgs {
    return {
        ...val,
        rangerUsersync: pulumi.output(val.rangerUsersync).apply(rangerUsersyncSpecArgsProvideDefaults),
    };
}

/**
 * Specification for the Ranger Usersync service
 */
export interface RangerUsersyncSpecArgs {
    /**
     * Denotes whether usersync service should be enabled
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * List of groups that should be synced. These group names should match the object id of the respective AAD groups.
     */
    groups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * User & groups can be synced automatically or via a static list that's refreshed.
     */
    mode?: pulumi.Input<string | enums.RangerUsersyncMode>;
    /**
     * Azure storage location of a mapping file that lists user & group associations.
     */
    userMappingLocation?: pulumi.Input<string>;
    /**
     * List of user names that should be synced. These usernames should match the User principal name of the respective AAD users.
     */
    users?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * rangerUsersyncSpecArgsProvideDefaults sets the appropriate defaults for RangerUsersyncSpecArgs
 */
export function rangerUsersyncSpecArgsProvideDefaults(val: RangerUsersyncSpecArgs): RangerUsersyncSpecArgs {
    return {
        ...val,
        enabled: (val.enabled) ?? true,
        mode: (val.mode) ?? "automatic",
    };
}

/**
 * The azure resource id.
 */
export interface ResourceIdArgs {
    /**
     * The azure resource id.
     */
    id?: pulumi.Input<string>;
}

/**
 * Describes a role on the cluster.
 */
export interface RoleArgs {
    /**
     * The autoscale configurations.
     */
    autoscaleConfiguration?: pulumi.Input<AutoscaleArgs>;
    /**
     * The data disks groups for the role.
     */
    dataDisksGroups?: pulumi.Input<pulumi.Input<DataDisksGroupsArgs>[]>;
    /**
     * Indicates whether encrypt the data disks.
     */
    encryptDataDisks?: pulumi.Input<boolean>;
    /**
     * The hardware profile.
     */
    hardwareProfile?: pulumi.Input<HardwareProfileArgs>;
    /**
     * The minimum instance count of the cluster.
     */
    minInstanceCount?: pulumi.Input<number>;
    /**
     * The name of the role.
     */
    name?: pulumi.Input<string>;
    /**
     * The operating system profile.
     */
    osProfile?: pulumi.Input<OsProfileArgs>;
    /**
     * The list of script actions on the role.
     */
    scriptActions?: pulumi.Input<pulumi.Input<ScriptActionArgs>[]>;
    /**
     * The instance count of the cluster.
     */
    targetInstanceCount?: pulumi.Input<number>;
    /**
     * The name of the virtual machine group.
     */
    vMGroupName?: pulumi.Input<string>;
    /**
     * The virtual network profile.
     */
    virtualNetworkProfile?: pulumi.Input<VirtualNetworkProfileArgs>;
}
/**
 * roleArgsProvideDefaults sets the appropriate defaults for RoleArgs
 */
export function roleArgsProvideDefaults(val: RoleArgs): RoleArgs {
    return {
        ...val,
        encryptDataDisks: (val.encryptDataDisks) ?? false,
    };
}

/**
 * Describes a script action on a running cluster.
 */
export interface RuntimeScriptActionArgs {
    /**
     * The name of the script action.
     */
    name: pulumi.Input<string>;
    /**
     * The parameters for the script
     */
    parameters?: pulumi.Input<string>;
    /**
     * The list of roles where script will be executed.
     */
    roles: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The URI to the script.
     */
    uri: pulumi.Input<string>;
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
 * Describes a script action on role on the cluster.
 */
export interface ScriptActionArgs {
    /**
     * The name of the script action.
     */
    name: pulumi.Input<string>;
    /**
     * The parameters for the script provided.
     */
    parameters: pulumi.Input<string>;
    /**
     * The URI to the script.
     */
    uri: pulumi.Input<string>;
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
 * The security profile which contains Ssh public key for the HDInsight cluster.
 */
export interface SecurityProfileArgs {
    /**
     * The resource ID of the user's Azure Active Directory Domain Service.
     */
    aaddsResourceId?: pulumi.Input<string>;
    /**
     * Optional. The Distinguished Names for cluster user groups
     */
    clusterUsersGroupDNs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The directory type.
     */
    directoryType?: pulumi.Input<string | enums.DirectoryType>;
    /**
     * The organization's active directory domain.
     */
    domain?: pulumi.Input<string>;
    /**
     * The domain admin password.
     */
    domainUserPassword?: pulumi.Input<string>;
    /**
     * The domain user account that will have admin privileges on the cluster.
     */
    domainUsername?: pulumi.Input<string>;
    /**
     * The LDAPS protocol URLs to communicate with the Active Directory.
     */
    ldapsUrls?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * User assigned identity that has permissions to read and create cluster-related artifacts in the user's AADDS.
     */
    msiResourceId?: pulumi.Input<string>;
    /**
     * The organizational unit within the Active Directory to place the cluster and service accounts.
     */
    organizationalUnitDN?: pulumi.Input<string>;
}

/**
 * The metastore specification for Spark cluster.
 */
export interface SparkMetastoreSpecArgs {
    /**
     * The authentication mode to connect to your Hive metastore database. More details: https://learn.microsoft.com/en-us/azure/azure-sql/database/logins-create-manage?view=azuresql#authentication-and-authorization
     */
    dbConnectionAuthenticationMode?: pulumi.Input<string | enums.DbConnectionAuthenticationMode>;
    /**
     * The database name.
     */
    dbName: pulumi.Input<string>;
    /**
     * The secret name which contains the database user password.
     */
    dbPasswordSecretName?: pulumi.Input<string>;
    /**
     * The database server host.
     */
    dbServerHost: pulumi.Input<string>;
    /**
     * The database user name.
     */
    dbUserName?: pulumi.Input<string>;
    /**
     * The key vault resource id.
     */
    keyVaultId?: pulumi.Input<string>;
    /**
     * The thrift url.
     */
    thriftUrl?: pulumi.Input<string>;
}
/**
 * sparkMetastoreSpecArgsProvideDefaults sets the appropriate defaults for SparkMetastoreSpecArgs
 */
export function sparkMetastoreSpecArgsProvideDefaults(val: SparkMetastoreSpecArgs): SparkMetastoreSpecArgs {
    return {
        ...val,
        dbConnectionAuthenticationMode: (val.dbConnectionAuthenticationMode) ?? "IdentityAuth",
    };
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
 * sparkProfileArgsProvideDefaults sets the appropriate defaults for SparkProfileArgs
 */
export function sparkProfileArgsProvideDefaults(val: SparkProfileArgs): SparkProfileArgs {
    return {
        ...val,
        metastoreSpec: (val.metastoreSpec ? pulumi.output(val.metastoreSpec).apply(sparkMetastoreSpecArgsProvideDefaults) : undefined),
    };
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
 * The list of SSH public keys.
 */
export interface SshProfileArgs {
    /**
     * The list of SSH public keys.
     */
    publicKeys?: pulumi.Input<pulumi.Input<SshPublicKeyArgs>[]>;
}

/**
 * The SSH public key for the cluster nodes.
 */
export interface SshPublicKeyArgs {
    /**
     * The certificate for SSH.
     */
    certificateData?: pulumi.Input<string>;
}

/**
 * The storage Account.
 */
export interface StorageAccountArgs {
    /**
     * The container in the storage account, only to be specified for WASB storage accounts.
     */
    container?: pulumi.Input<string>;
    /**
     * Enable secure channel or not, it's an optional field. Default value is false when cluster version < 5.1 and true when cluster version >= 5.1 , 
     */
    enableSecureChannel?: pulumi.Input<boolean>;
    /**
     * The filesystem, only to be specified for Azure Data Lake Storage Gen 2.
     */
    fileSystem?: pulumi.Input<string>;
    /**
     * The file share name.
     */
    fileshare?: pulumi.Input<string>;
    /**
     * Whether or not the storage account is the default storage account.
     */
    isDefault?: pulumi.Input<boolean>;
    /**
     * The storage account access key.
     */
    key?: pulumi.Input<string>;
    /**
     * The managed identity (MSI) that is allowed to access the storage account, only to be specified for Azure Data Lake Storage Gen 2.
     */
    msiResourceId?: pulumi.Input<string>;
    /**
     * The name of the storage account.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource ID of storage account, only to be specified for Azure Data Lake Storage Gen 2.
     */
    resourceId?: pulumi.Input<string>;
    /**
     * The shared access signature key.
     */
    saskey?: pulumi.Input<string>;
}

/**
 * The storage profile.
 */
export interface StorageProfileArgs {
    /**
     * The list of storage accounts in the cluster.
     */
    storageaccounts?: pulumi.Input<pulumi.Input<StorageAccountArgs>[]>;
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

/**
 * The User Assigned Identity
 */
export interface UserAssignedIdentityArgs {
    /**
     * The tenant id of user assigned identity.
     */
    tenantId?: pulumi.Input<string>;
}

/**
 * The virtual network properties.
 */
export interface VirtualNetworkProfileArgs {
    /**
     * The ID of the virtual network.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the subnet.
     */
    subnet?: pulumi.Input<string>;
}
