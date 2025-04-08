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
 * Gets the application SSH endpoint
 */
export interface ApplicationGetEndpointResponse {
    /**
     * The destination port to connect to.
     */
    destinationPort?: number;
    /**
     * The location of the endpoint.
     */
    location?: string;
    /**
     * The private ip address of the endpoint.
     */
    privateIPAddress?: string;
    /**
     * The public port to connect to.
     */
    publicPort?: number;
}

/**
 * Gets the application HTTP endpoints.
 */
export interface ApplicationGetHttpsEndpointResponse {
    /**
     * The list of access modes for the application.
     */
    accessModes?: string[];
    /**
     * The destination port to connect to.
     */
    destinationPort?: number;
    /**
     * The value indicates whether to disable GatewayAuth.
     */
    disableGatewayAuth?: boolean;
    /**
     * The location of the endpoint.
     */
    location: string;
    /**
     * The private ip address of the endpoint.
     */
    privateIPAddress?: string;
    /**
     * The public port to connect to.
     */
    publicPort: number;
}

/**
 * The HDInsight cluster application GET response.
 */
export interface ApplicationPropertiesResponse {
    /**
     * The application state.
     */
    applicationState: string;
    /**
     * The application type.
     */
    applicationType?: string;
    /**
     * The list of roles in the cluster.
     */
    computeProfile?: ComputeProfileResponse;
    /**
     * The application create date time.
     */
    createdDate: string;
    /**
     * The list of errors.
     */
    errors?: ErrorsResponse[];
    /**
     * The list of application HTTPS endpoints.
     */
    httpsEndpoints?: ApplicationGetHttpsEndpointResponse[];
    /**
     * The list of install script actions.
     */
    installScriptActions?: RuntimeScriptActionResponse[];
    /**
     * The marketplace identifier.
     */
    marketplaceIdentifier: string;
    /**
     * The private link configurations.
     */
    privateLinkConfigurations?: PrivateLinkConfigurationResponse[];
    /**
     * The provisioning state of the application.
     */
    provisioningState: string;
    /**
     * The list of application SSH endpoints.
     */
    sshEndpoints?: ApplicationGetEndpointResponse[];
    /**
     * The list of uninstall script actions.
     */
    uninstallScriptActions?: RuntimeScriptActionResponse[];
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
 * The load-based autoscale request parameters
 */
export interface AutoscaleCapacityResponse {
    /**
     * The maximum instance count of the cluster
     */
    maxInstanceCount?: number;
    /**
     * The minimum instance count of the cluster
     */
    minInstanceCount?: number;
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
 * Schedule-based autoscale request parameters
 */
export interface AutoscaleRecurrenceResponse {
    /**
     * Array of schedule-based autoscale rules
     */
    schedule?: AutoscaleScheduleResponse[];
    /**
     * The time zone for the autoscale schedule times
     */
    timeZone?: string;
}

/**
 * The autoscale request parameters
 */
export interface AutoscaleResponse {
    /**
     * Parameters for load-based autoscale
     */
    capacity?: AutoscaleCapacityResponse;
    /**
     * Parameters for schedule-based autoscale
     */
    recurrence?: AutoscaleRecurrenceResponse;
}

/**
 * Parameters for a schedule-based autoscale rule, consisting of an array of days + a time and capacity
 */
export interface AutoscaleScheduleResponse {
    /**
     * Days of the week for a schedule-based autoscale rule
     */
    days?: string[];
    /**
     * Time and capacity for a schedule-based autoscale rule
     */
    timeAndCapacity?: AutoscaleTimeAndCapacityResponse;
}

/**
 * Time and capacity request parameters
 */
export interface AutoscaleTimeAndCapacityResponse {
    /**
     * The maximum instance count of the cluster
     */
    maxInstanceCount?: number;
    /**
     * The minimum instance count of the cluster
     */
    minInstanceCount?: number;
    /**
     * 24-hour time in the form xx:xx
     */
    time?: string;
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
 * The information of AAD security group.
 */
export interface ClientGroupInfoResponse {
    /**
     * The AAD security group id.
     */
    groupId?: string;
    /**
     * The AAD security group name.
     */
    groupName?: string;
}

/**
 * Cluster access profile.
 */
export interface ClusterAccessProfileResponse {
    /**
     * Whether to create cluster using private IP instead of public IP. This property must be set at create time.
     */
    enableInternalIngress: boolean;
    /**
     * Private link service resource ID. Only when enableInternalIngress is true, this property will be returned.
     */
    privateLinkServiceId: string;
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
 * The cluster definition.
 */
export interface ClusterDefinitionResponse {
    /**
     * The link to the blueprint.
     */
    blueprint?: string;
    /**
     * The versions of different services in the cluster.
     */
    componentVersion?: {[key: string]: string};
    /**
     * The cluster configurations.
     */
    configurations?: any;
    /**
     * The type of cluster.
     */
    kind?: string;
}

/**
 * The properties of cluster.
 */
export interface ClusterGetPropertiesResponse {
    /**
     * The cluster definition.
     */
    clusterDefinition: ClusterDefinitionResponse;
    /**
     * The hdp version of the cluster.
     */
    clusterHdpVersion?: string;
    /**
     * The cluster id.
     */
    clusterId?: string;
    /**
     * The state of the cluster.
     */
    clusterState?: string;
    /**
     * The version of the cluster.
     */
    clusterVersion?: string;
    /**
     * The compute isolation properties.
     */
    computeIsolationProperties?: ComputeIsolationPropertiesResponse;
    /**
     * The compute profile.
     */
    computeProfile?: ComputeProfileResponse;
    /**
     * The list of connectivity endpoints.
     */
    connectivityEndpoints?: ConnectivityEndpointResponse[];
    /**
     * The date on which the cluster was created.
     */
    createdDate?: string;
    /**
     * The disk encryption properties.
     */
    diskEncryptionProperties?: DiskEncryptionPropertiesResponse;
    /**
     * The encryption-in-transit properties.
     */
    encryptionInTransitProperties?: EncryptionInTransitPropertiesResponse;
    /**
     * The list of errors.
     */
    errors?: ErrorsResponse[];
    /**
     * The excluded services config.
     */
    excludedServicesConfig?: ExcludedServicesConfigResponse;
    /**
     * The cluster kafka rest proxy configuration.
     */
    kafkaRestProperties?: KafkaRestPropertiesResponse;
    /**
     * The minimal supported tls version.
     */
    minSupportedTlsVersion?: string;
    /**
     * The network properties.
     */
    networkProperties?: NetworkPropertiesResponse;
    /**
     * The type of operating system.
     */
    osType?: string;
    /**
     * The list of private endpoint connections.
     */
    privateEndpointConnections: PrivateEndpointConnectionResponse[];
    /**
     * The private link configurations.
     */
    privateLinkConfigurations?: PrivateLinkConfigurationResponse[];
    /**
     * The provisioning state, which only appears in the response.
     */
    provisioningState?: string;
    /**
     * The quota information.
     */
    quotaInfo?: QuotaInfoResponse;
    /**
     * The security profile.
     */
    securityProfile?: SecurityProfileResponse;
    /**
     * The storage profile.
     */
    storageProfile?: StorageProfileResponse;
    /**
     * The cluster tier.
     */
    tier?: string;
}
/**
 * clusterGetPropertiesResponseProvideDefaults sets the appropriate defaults for ClusterGetPropertiesResponse
 */
export function clusterGetPropertiesResponseProvideDefaults(val: ClusterGetPropertiesResponse): ClusterGetPropertiesResponse {
    return {
        ...val,
        computeIsolationProperties: (val.computeIsolationProperties ? computeIsolationPropertiesResponseProvideDefaults(val.computeIsolationProperties) : undefined),
        diskEncryptionProperties: (val.diskEncryptionProperties ? diskEncryptionPropertiesResponseProvideDefaults(val.diskEncryptionProperties) : undefined),
        encryptionInTransitProperties: (val.encryptionInTransitProperties ? encryptionInTransitPropertiesResponseProvideDefaults(val.encryptionInTransitProperties) : undefined),
    };
}

/**
 * Identity for the cluster.
 */
export interface ClusterIdentityResponse {
    /**
     * The principal id of cluster identity. This property will only be provided for a system assigned identity.
     */
    principalId: string;
    /**
     * The tenant id associated with the cluster. This property will only be provided for a system assigned identity.
     */
    tenantId: string;
    /**
     * The type of identity used for the cluster. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities.
     */
    type?: string;
    /**
     * The list of user identities associated with the cluster. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
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
 * The compute profile.
 */
export interface ClusterPoolComputeProfileResponse {
    /**
     * The list of Availability zones to use for AKS VMSS nodes.
     */
    availabilityZones?: string[];
    /**
     * The nodes definitions.
     */
    nodes: NodeProfileResponse[];
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
    /**
     * Gets or sets the IP tag for the public IPs created along with the HDInsightOnAks ClusterPools and Clusters. 
     */
    publicIpTag?: IpTagResponse;
}

/**
 * CLuster pool compute profile.
 */
export interface ClusterPoolResourcePropertiesResponseComputeProfile {
    /**
     * The list of Availability zones to use for AKS VMSS nodes.
     */
    availabilityZones?: string[];
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
     * IP ranges are specified in CIDR format, e.g. 137.117.106.88/29. This feature is not compatible with private AKS clusters. So you cannot set enablePrivateApiServer to true and apiServerAuthorizedIpRanges at the same time. Currently, this property is not supported and please don't use it.
     */
    apiServerAuthorizedIpRanges?: string[];
    /**
     * ClusterPool is based on AKS cluster. AKS cluster exposes the API server to public internet by default. If you set this property to true, a private AKS cluster will be created, and it will use private apiserver, which is not exposed to public internet.
     */
    enablePrivateApiServer?: boolean;
    /**
     * This can only be set at cluster pool creation time and cannot be changed later. 
     */
    outboundType?: string;
    /**
     * Cluster pool subnet resource id.
     */
    subnetId: string;
}
/**
 * clusterPoolResourcePropertiesResponseNetworkProfileProvideDefaults sets the appropriate defaults for ClusterPoolResourcePropertiesResponseNetworkProfile
 */
export function clusterPoolResourcePropertiesResponseNetworkProfileProvideDefaults(val: ClusterPoolResourcePropertiesResponseNetworkProfile): ClusterPoolResourcePropertiesResponseNetworkProfile {
    return {
        ...val,
        outboundType: (val.outboundType) ?? "loadBalancer",
    };
}

/**
 * Ssh profile for the cluster.
 */
export interface ClusterPoolSshProfileResponse {
    /**
     * Number of ssh pods per cluster.
     */
    count: number;
    /**
     * Prefix of the pod names. Pod number will be appended to the prefix. The ingress URLs for the pods will be available at <clusterFqdn>/<sshBasePath>/<prefix>-<number>
     */
    podPrefix: string;
    /**
     * The virtual machine SKU.
     */
    vmSize?: string;
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
     * Cluster access profile.
     */
    clusterAccessProfile?: ClusterAccessProfileResponse;
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
     * This is deprecated. Please use managed identity profile instead.
     */
    identityProfile?: IdentityProfileResponse;
    /**
     * The Kafka cluster profile.
     */
    kafkaProfile?: KafkaProfileResponse;
    /**
     * LLAP cluster profile.
     */
    llapProfile?: any;
    /**
     * Cluster log analytics profile to enable or disable OMS agent for cluster.
     */
    logAnalyticsProfile?: ClusterLogAnalyticsProfileResponse;
    /**
     * This property is required by Trino, Spark and Flink cluster but is optional for Kafka cluster.
     */
    managedIdentityProfile?: ManagedIdentityProfileResponse;
    /**
     * Version with three part.
     */
    ossVersion: string;
    /**
     * Cluster Prometheus profile.
     */
    prometheusProfile?: ClusterPrometheusProfileResponse;
    /**
     * Cluster Ranger plugin profile.
     */
    rangerPluginProfile?: ClusterRangerPluginProfileResponse;
    /**
     * The ranger cluster profile.
     */
    rangerProfile?: RangerProfileResponse;
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
    sshProfile?: ClusterPoolSshProfileResponse;
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
        flinkProfile: (val.flinkProfile ? flinkProfileResponseProvideDefaults(val.flinkProfile) : undefined),
        kafkaProfile: (val.kafkaProfile ? kafkaProfileResponseProvideDefaults(val.kafkaProfile) : undefined),
        prometheusProfile: (val.prometheusProfile ? clusterPrometheusProfileResponseProvideDefaults(val.prometheusProfile) : undefined),
        rangerPluginProfile: (val.rangerPluginProfile ? clusterRangerPluginProfileResponseProvideDefaults(val.rangerPluginProfile) : undefined),
        rangerProfile: (val.rangerProfile ? rangerProfileResponseProvideDefaults(val.rangerProfile) : undefined),
        sparkProfile: (val.sparkProfile ? sparkProfileResponseProvideDefaults(val.sparkProfile) : undefined),
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
 * Cluster Ranger plugin profile.
 */
export interface ClusterRangerPluginProfileResponse {
    /**
     * Enable Ranger for cluster or not.
     */
    enabled: boolean;
}
/**
 * clusterRangerPluginProfileResponseProvideDefaults sets the appropriate defaults for ClusterRangerPluginProfileResponse
 */
export function clusterRangerPluginProfileResponseProvideDefaults(val: ClusterRangerPluginProfileResponse): ClusterRangerPluginProfileResponse {
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
 * The compute isolation properties.
 */
export interface ComputeIsolationPropertiesResponse {
    /**
     * The flag indicates whether enable compute isolation or not.
     */
    enableComputeIsolation?: boolean;
    /**
     * The host sku.
     */
    hostSku?: string;
}
/**
 * computeIsolationPropertiesResponseProvideDefaults sets the appropriate defaults for ComputeIsolationPropertiesResponse
 */
export function computeIsolationPropertiesResponseProvideDefaults(val: ComputeIsolationPropertiesResponse): ComputeIsolationPropertiesResponse {
    return {
        ...val,
        enableComputeIsolation: (val.enableComputeIsolation) ?? false,
    };
}

/**
 * Describes the compute profile.
 */
export interface ComputeProfileResponse {
    /**
     * The list of roles in the cluster.
     */
    roles?: RoleResponse[];
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
 * The connectivity properties
 */
export interface ConnectivityEndpointResponse {
    /**
     * The location of the endpoint.
     */
    location?: string;
    /**
     * The name of the endpoint.
     */
    name?: string;
    /**
     * The port to connect to.
     */
    port?: number;
    /**
     * The private ip address of the endpoint.
     */
    privateIPAddress?: string;
    /**
     * The protocol of the endpoint.
     */
    protocol?: string;
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
    /**
     * Private web connectivity endpoint. This property will only be returned when enableInternalIngress is true.
     */
    privateFqdn?: string;
}

/**
 * The data disks groups for the role.
 */
export interface DataDisksGroupsResponse {
    /**
     * ReadOnly. The DiskSize in GB. Do not set this value.
     */
    diskSizeGB: number;
    /**
     * The number of disks per node.
     */
    disksPerNode?: number;
    /**
     * ReadOnly. The storage account type. Do not set this value.
     */
    storageAccountType: string;
}

/**
 * The disk encryption properties
 */
export interface DiskEncryptionPropertiesResponse {
    /**
     * Algorithm identifier for encryption, default RSA-OAEP.
     */
    encryptionAlgorithm?: string;
    /**
     * Indicates whether or not resource disk encryption is enabled.
     */
    encryptionAtHost?: boolean;
    /**
     * Key name that is used for enabling disk encryption.
     */
    keyName?: string;
    /**
     * Specific key version that is used for enabling disk encryption.
     */
    keyVersion?: string;
    /**
     * Resource ID of Managed Identity that is used to access the key vault.
     */
    msiResourceId?: string;
    /**
     * Base key vault URI where the customers key is located eg. https://myvault.vault.azure.net
     */
    vaultUri?: string;
}
/**
 * diskEncryptionPropertiesResponseProvideDefaults sets the appropriate defaults for DiskEncryptionPropertiesResponse
 */
export function diskEncryptionPropertiesResponseProvideDefaults(val: DiskEncryptionPropertiesResponse): DiskEncryptionPropertiesResponse {
    return {
        ...val,
        encryptionAtHost: (val.encryptionAtHost) ?? false,
    };
}

/**
 * Kafka disk storage profile.
 */
export interface DiskStorageProfileResponse {
    /**
     * Managed Disk size in GB. The maximum supported disk size for Standard and Premium HDD/SSD is 32TB, except for Premium SSD v2, which supports up to 64TB.
     */
    dataDiskSize: number;
    /**
     * Managed Disk Type.
     */
    dataDiskType: string;
}

/**
 * The encryption-in-transit properties.
 */
export interface EncryptionInTransitPropertiesResponse {
    /**
     * Indicates whether or not inter cluster node communication is encrypted in transit.
     */
    isEncryptionInTransitEnabled?: boolean;
}
/**
 * encryptionInTransitPropertiesResponseProvideDefaults sets the appropriate defaults for EncryptionInTransitPropertiesResponse
 */
export function encryptionInTransitPropertiesResponseProvideDefaults(val: EncryptionInTransitPropertiesResponse): EncryptionInTransitPropertiesResponse {
    return {
        ...val,
        isEncryptionInTransitEnabled: (val.isEncryptionInTransitEnabled) ?? false,
    };
}

/**
 * The error message associated with the cluster creation.
 */
export interface ErrorsResponse {
    /**
     * The error code.
     */
    code?: string;
    /**
     * The error message.
     */
    message?: string;
}

/**
 * The configuration that services will be excluded when creating cluster.
 */
export interface ExcludedServicesConfigResponse {
    /**
     * The config id of excluded services.
     */
    excludedServicesConfigId?: string;
    /**
     * The list of excluded services.
     */
    excludedServicesList?: string;
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
 * flinkCatalogOptionsResponseProvideDefaults sets the appropriate defaults for FlinkCatalogOptionsResponse
 */
export function flinkCatalogOptionsResponseProvideDefaults(val: FlinkCatalogOptionsResponse): FlinkCatalogOptionsResponse {
    return {
        ...val,
        hive: (val.hive ? flinkHiveCatalogOptionResponseProvideDefaults(val.hive) : undefined),
    };
}

/**
 * Hive Catalog Option for Flink cluster.
 */
export interface FlinkHiveCatalogOptionResponse {
    /**
     * The authentication mode to connect to your Hive metastore database. More details: https://learn.microsoft.com/en-us/azure/azure-sql/database/logins-create-manage?view=azuresql#authentication-and-authorization
     */
    metastoreDbConnectionAuthenticationMode?: string;
    /**
     * Secret reference name from secretsProfile.secrets containing password for database connection.
     */
    metastoreDbConnectionPasswordSecret?: string;
    /**
     * Connection string for hive metastore database.
     */
    metastoreDbConnectionURL: string;
    /**
     * User name for database connection.
     */
    metastoreDbConnectionUserName?: string;
}
/**
 * flinkHiveCatalogOptionResponseProvideDefaults sets the appropriate defaults for FlinkHiveCatalogOptionResponse
 */
export function flinkHiveCatalogOptionResponseProvideDefaults(val: FlinkHiveCatalogOptionResponse): FlinkHiveCatalogOptionResponse {
    return {
        ...val,
        metastoreDbConnectionAuthenticationMode: (val.metastoreDbConnectionAuthenticationMode) ?? "IdentityAuth",
    };
}

/**
 * Job specifications for flink clusters in application deployment mode. The specification is immutable even if job properties are changed by calling the RunJob API, please use the ListJob API to get the latest job information.
 */
export interface FlinkJobProfileResponse {
    /**
     * A string property representing additional JVM arguments for the Flink job. It should be space separated value.
     */
    args?: string;
    /**
     * A string property that specifies the entry class for the Flink job. If not specified, the entry point is auto-detected from the flink job jar package.
     */
    entryClass?: string;
    /**
     * A string property that represents the name of the job JAR.
     */
    jarName: string;
    /**
     * A string property that specifies the directory where the job JAR is located.
     */
    jobJarDirectory: string;
    /**
     * A string property that represents the name of the savepoint for the Flink job
     */
    savePointName?: string;
    /**
     * A string property that indicates the upgrade mode to be performed on the Flink job. It can have one of the following enum values => STATELESS_UPDATE, UPDATE, LAST_STATE_UPDATE.
     */
    upgradeMode: string;
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
     * A string property that indicates the deployment mode of Flink cluster. It can have one of the following enum values => Application, Session. Default value is Session
     */
    deploymentMode?: string;
    /**
     * History Server container/ process CPU and memory requirements
     */
    historyServer?: ComputeResourceDefinitionResponse;
    /**
     * Job Manager container/ process CPU and memory requirements
     */
    jobManager: ComputeResourceDefinitionResponse;
    /**
     * Job specifications for flink clusters in application deployment mode. The specification is immutable even if job properties are changed by calling the RunJob API, please use the ListJob API to get the latest job information.
     */
    jobSpec?: FlinkJobProfileResponse;
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
 * flinkProfileResponseProvideDefaults sets the appropriate defaults for FlinkProfileResponse
 */
export function flinkProfileResponseProvideDefaults(val: FlinkProfileResponse): FlinkProfileResponse {
    return {
        ...val,
        catalogOptions: (val.catalogOptions ? flinkCatalogOptionsResponseProvideDefaults(val.catalogOptions) : undefined),
    };
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
 * The hardware profile.
 */
export interface HardwareProfileResponse {
    /**
     * The size of the VM
     */
    vmSize?: string;
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
     * The authentication mode to connect to your Hive metastore database. More details: https://learn.microsoft.com/en-us/azure/azure-sql/database/logins-create-manage?view=azuresql#authentication-and-authorization
     */
    metastoreDbConnectionAuthenticationMode?: string;
    /**
     * Secret reference name from secretsProfile.secrets containing password for database connection.
     */
    metastoreDbConnectionPasswordSecret?: string;
    /**
     * Connection string for hive metastore database.
     */
    metastoreDbConnectionURL: string;
    /**
     * User name for database connection.
     */
    metastoreDbConnectionUserName?: string;
    /**
     * Metastore root directory URI, format: abfs[s]://<container>@<account_name>.dfs.core.windows.net/<path>. More details: https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction-abfs-uri
     */
    metastoreWarehouseDir: string;
}
/**
 * hiveCatalogOptionResponseProvideDefaults sets the appropriate defaults for HiveCatalogOptionResponse
 */
export function hiveCatalogOptionResponseProvideDefaults(val: HiveCatalogOptionResponse): HiveCatalogOptionResponse {
    return {
        ...val,
        metastoreDbConnectionAuthenticationMode: (val.metastoreDbConnectionAuthenticationMode) ?? "IdentityAuth",
    };
}

/**
 * The ip configurations for the private link service.
 */
export interface IPConfigurationResponse {
    /**
     * The private link IP configuration id.
     */
    id: string;
    /**
     * The name of private link IP configuration.
     */
    name: string;
    /**
     * Indicates whether this IP configuration is primary for the corresponding NIC.
     */
    primary?: boolean;
    /**
     * The IP address.
     */
    privateIPAddress?: string;
    /**
     * The method that private IP address is allocated.
     */
    privateIPAllocationMethod?: string;
    /**
     * The private link configuration provisioning state, which only appears in the response.
     */
    provisioningState: string;
    /**
     * The subnet resource id.
     */
    subnet?: ResourceIdResponse;
    /**
     * The type of the private link IP configuration.
     */
    type: string;
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
 * Contains the IpTag associated with the public IP address
 */
export interface IpTagResponse {
    /**
     * Gets or sets the ipTag type: Example FirstPartyUsage.
     */
    ipTagType: string;
    /**
     * Gets or sets value of the IpTag associated with the public IP. Example HDInsight, SQL, Storage etc
     */
    tag: string;
}

/**
 * Kafka bootstrap server and broker related connectivity endpoints.
 */
export interface KafkaConnectivityEndpointsResponse {
    /**
     * bootstrap server connectivity endpoint.
     */
    bootstrapServerEndpoint?: string;
    /**
     * Kafka broker endpoint list.
     */
    brokerEndpoints?: string[];
}

/**
 * The Kafka cluster profile.
 */
export interface KafkaProfileResponse {
    /**
     * Kafka bootstrap server and brokers related connectivity endpoints.
     */
    connectivityEndpoints: KafkaConnectivityEndpointsResponse;
    /**
     * Kafka disk storage profile.
     */
    diskStorage: DiskStorageProfileResponse;
    /**
     * Expose Kafka cluster in KRaft mode.
     */
    enableKRaft?: boolean;
    /**
     * Expose worker nodes as public endpoints.
     */
    enablePublicEndpoints?: boolean;
    /**
     * Fully qualified path of Azure Storage container used for Tiered Storage.
     */
    remoteStorageUri?: string;
}
/**
 * kafkaProfileResponseProvideDefaults sets the appropriate defaults for KafkaProfileResponse
 */
export function kafkaProfileResponseProvideDefaults(val: KafkaProfileResponse): KafkaProfileResponse {
    return {
        ...val,
        enableKRaft: (val.enableKRaft) ?? true,
        enablePublicEndpoints: (val.enablePublicEndpoints) ?? false,
    };
}

/**
 * The kafka rest proxy configuration which contains AAD security group information.
 */
export interface KafkaRestPropertiesResponse {
    /**
     * The information of AAD security group.
     */
    clientGroupInfo?: ClientGroupInfoResponse;
    /**
     * The configurations that need to be overriden.
     */
    configurationOverride?: {[key: string]: string};
}

/**
 * The ssh username, password, and ssh public key.
 */
export interface LinuxOperatingSystemProfileResponse {
    /**
     * The password.
     */
    password?: string;
    /**
     * The SSH profile.
     */
    sshProfile?: SshProfileResponse;
    /**
     * The username.
     */
    username?: string;
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
 * The details of managed identity.
 */
export interface ManagedIdentityProfileResponse {
    /**
     * The list of managed identity.
     */
    identityList: ManagedIdentitySpecResponse[];
}

/**
 * The details of a managed identity.
 */
export interface ManagedIdentitySpecResponse {
    /**
     * ClientId of the managed identity.
     */
    clientId: string;
    /**
     * ObjectId of the managed identity.
     */
    objectId: string;
    /**
     * ResourceId of the managed identity.
     */
    resourceId: string;
    /**
     * The type of managed identity.
     */
    type: string;
}

/**
 * The network properties.
 */
export interface NetworkPropertiesResponse {
    /**
     * A value to describe how the outbound dependencies of a HDInsight cluster are managed. 'Managed' means that the outbound dependencies are managed by the HDInsight service. 'External' means that the outbound dependencies are managed by a customer specific solution.
     */
    outboundDependenciesManagedType?: string;
    /**
     * Indicates whether or not private link is enabled.
     */
    privateLink?: string;
    /**
     * Gets or sets the IP tag for the public IPs created along with the HDInsight Clusters. 
     */
    publicIpTag?: IpTagResponse;
    /**
     * The direction for the resource provider connection.
     */
    resourceProviderConnection?: string;
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
 * The Linux operation systems profile.
 */
export interface OsProfileResponse {
    /**
     * The Linux OS profile.
     */
    linuxOperatingSystemProfile?: LinuxOperatingSystemProfileResponse;
}

/**
 * The private endpoint connection.
 */
export interface PrivateEndpointConnectionResponse {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    id: string;
    /**
     * The link identifier.
     */
    linkIdentifier: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * The private endpoint of the private endpoint connection
     */
    privateEndpoint: PrivateEndpointResponse;
    /**
     * The private link service connection state.
     */
    privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateResponse;
    /**
     * The provisioning state, which only appears in the response.
     */
    provisioningState: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    systemData: SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}

/**
 * The private endpoint.
 */
export interface PrivateEndpointResponse {
    /**
     * The private endpoint id.
     */
    id?: string;
}

/**
 * The private link configuration.
 */
export interface PrivateLinkConfigurationResponse {
    /**
     * The HDInsight private linkable sub-resource name to apply the private link configuration to. For example, 'headnode', 'gateway', 'edgenode'.
     */
    groupId: string;
    /**
     * The private link configuration id.
     */
    id: string;
    /**
     * The IP configurations for the private link service.
     */
    ipConfigurations: IPConfigurationResponse[];
    /**
     * The name of private link configuration.
     */
    name: string;
    /**
     * The private link configuration provisioning state, which only appears in the response.
     */
    provisioningState: string;
    /**
     * The type of the private link configuration.
     */
    type: string;
}

/**
 * The private link service connection state.
 */
export interface PrivateLinkServiceConnectionStateResponse {
    /**
     * Whether there is further actions.
     */
    actionsRequired?: string;
    /**
     * The optional description of the status.
     */
    description?: string;
    /**
     * The concrete private link service connection.
     */
    status: string;
}

/**
 * The quota properties for the cluster.
 */
export interface QuotaInfoResponse {
    /**
     * The cores used by the cluster.
     */
    coresUsed?: number;
}

/**
 * Specification for the Ranger Admin service.
 */
export interface RangerAdminSpecResponse {
    /**
     * List of usernames that should be marked as ranger admins. These usernames should match the user principal name (UPN) of the respective AAD users.
     */
    admins: string[];
    database: RangerAdminSpecResponseDatabase;
}

export interface RangerAdminSpecResponseDatabase {
    /**
     * The database URL
     */
    host: string;
    /**
     * The database name
     */
    name: string;
    /**
     * Reference for the database password
     */
    passwordSecretRef?: string;
    /**
     * The name of the database user
     */
    username?: string;
}

/**
 * Properties required to describe audit log storage.
 */
export interface RangerAuditSpecResponse {
    /**
     * Azure storage location of the blobs. MSI should have read/write access to this Storage account.
     */
    storageAccount?: string;
}

/**
 * The ranger cluster profile.
 */
export interface RangerProfileResponse {
    /**
     * Specification for the Ranger Admin service.
     */
    rangerAdmin: RangerAdminSpecResponse;
    /**
     * Properties required to describe audit log storage.
     */
    rangerAudit?: RangerAuditSpecResponse;
    /**
     * Specification for the Ranger Usersync service
     */
    rangerUsersync: RangerUsersyncSpecResponse;
}
/**
 * rangerProfileResponseProvideDefaults sets the appropriate defaults for RangerProfileResponse
 */
export function rangerProfileResponseProvideDefaults(val: RangerProfileResponse): RangerProfileResponse {
    return {
        ...val,
        rangerUsersync: rangerUsersyncSpecResponseProvideDefaults(val.rangerUsersync),
    };
}

/**
 * Specification for the Ranger Usersync service
 */
export interface RangerUsersyncSpecResponse {
    /**
     * Denotes whether usersync service should be enabled
     */
    enabled?: boolean;
    /**
     * List of groups that should be synced. These group names should match the object id of the respective AAD groups.
     */
    groups?: string[];
    /**
     * User & groups can be synced automatically or via a static list that's refreshed.
     */
    mode?: string;
    /**
     * Azure storage location of a mapping file that lists user & group associations.
     */
    userMappingLocation?: string;
    /**
     * List of user names that should be synced. These usernames should match the User principal name of the respective AAD users.
     */
    users?: string[];
}
/**
 * rangerUsersyncSpecResponseProvideDefaults sets the appropriate defaults for RangerUsersyncSpecResponse
 */
export function rangerUsersyncSpecResponseProvideDefaults(val: RangerUsersyncSpecResponse): RangerUsersyncSpecResponse {
    return {
        ...val,
        enabled: (val.enabled) ?? true,
        mode: (val.mode) ?? "automatic",
    };
}

/**
 * The azure resource id.
 */
export interface ResourceIdResponse {
    /**
     * The azure resource id.
     */
    id?: string;
}

/**
 * Describes a role on the cluster.
 */
export interface RoleResponse {
    /**
     * The autoscale configurations.
     */
    autoscaleConfiguration?: AutoscaleResponse;
    /**
     * The data disks groups for the role.
     */
    dataDisksGroups?: DataDisksGroupsResponse[];
    /**
     * Indicates whether encrypt the data disks.
     */
    encryptDataDisks?: boolean;
    /**
     * The hardware profile.
     */
    hardwareProfile?: HardwareProfileResponse;
    /**
     * The minimum instance count of the cluster.
     */
    minInstanceCount?: number;
    /**
     * The name of the role.
     */
    name?: string;
    /**
     * The operating system profile.
     */
    osProfile?: OsProfileResponse;
    /**
     * The list of script actions on the role.
     */
    scriptActions?: ScriptActionResponse[];
    /**
     * The instance count of the cluster.
     */
    targetInstanceCount?: number;
    /**
     * The name of the virtual machine group.
     */
    vMGroupName?: string;
    /**
     * The virtual network profile.
     */
    virtualNetworkProfile?: VirtualNetworkProfileResponse;
}
/**
 * roleResponseProvideDefaults sets the appropriate defaults for RoleResponse
 */
export function roleResponseProvideDefaults(val: RoleResponse): RoleResponse {
    return {
        ...val,
        encryptDataDisks: (val.encryptDataDisks) ?? false,
    };
}

/**
 * Describes a script action on a running cluster.
 */
export interface RuntimeScriptActionResponse {
    /**
     * The application name of the script action, if any.
     */
    applicationName: string;
    /**
     * The name of the script action.
     */
    name: string;
    /**
     * The parameters for the script
     */
    parameters?: string;
    /**
     * The list of roles where script will be executed.
     */
    roles: string[];
    /**
     * The URI to the script.
     */
    uri: string;
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
 * Describes a script action on role on the cluster.
 */
export interface ScriptActionResponse {
    /**
     * The name of the script action.
     */
    name: string;
    /**
     * The parameters for the script provided.
     */
    parameters: string;
    /**
     * The URI to the script.
     */
    uri: string;
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
 * The security profile which contains Ssh public key for the HDInsight cluster.
 */
export interface SecurityProfileResponse {
    /**
     * The resource ID of the user's Azure Active Directory Domain Service.
     */
    aaddsResourceId?: string;
    /**
     * Optional. The Distinguished Names for cluster user groups
     */
    clusterUsersGroupDNs?: string[];
    /**
     * The directory type.
     */
    directoryType?: string;
    /**
     * The organization's active directory domain.
     */
    domain?: string;
    /**
     * The domain admin password.
     */
    domainUserPassword?: string;
    /**
     * The domain user account that will have admin privileges on the cluster.
     */
    domainUsername?: string;
    /**
     * The LDAPS protocol URLs to communicate with the Active Directory.
     */
    ldapsUrls?: string[];
    /**
     * User assigned identity that has permissions to read and create cluster-related artifacts in the user's AADDS.
     */
    msiResourceId?: string;
    /**
     * The organizational unit within the Active Directory to place the cluster and service accounts.
     */
    organizationalUnitDN?: string;
}

/**
 * The metastore specification for Spark cluster.
 */
export interface SparkMetastoreSpecResponse {
    /**
     * The authentication mode to connect to your Hive metastore database. More details: https://learn.microsoft.com/en-us/azure/azure-sql/database/logins-create-manage?view=azuresql#authentication-and-authorization
     */
    dbConnectionAuthenticationMode?: string;
    /**
     * The database name.
     */
    dbName: string;
    /**
     * The secret name which contains the database user password.
     */
    dbPasswordSecretName?: string;
    /**
     * The database server host.
     */
    dbServerHost: string;
    /**
     * The database user name.
     */
    dbUserName?: string;
    /**
     * The key vault resource id.
     */
    keyVaultId?: string;
    /**
     * The thrift url.
     */
    thriftUrl?: string;
}
/**
 * sparkMetastoreSpecResponseProvideDefaults sets the appropriate defaults for SparkMetastoreSpecResponse
 */
export function sparkMetastoreSpecResponseProvideDefaults(val: SparkMetastoreSpecResponse): SparkMetastoreSpecResponse {
    return {
        ...val,
        dbConnectionAuthenticationMode: (val.dbConnectionAuthenticationMode) ?? "IdentityAuth",
    };
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
 * sparkProfileResponseProvideDefaults sets the appropriate defaults for SparkProfileResponse
 */
export function sparkProfileResponseProvideDefaults(val: SparkProfileResponse): SparkProfileResponse {
    return {
        ...val,
        metastoreSpec: (val.metastoreSpec ? sparkMetastoreSpecResponseProvideDefaults(val.metastoreSpec) : undefined),
    };
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
    /**
     * Private SSH connectivity endpoint. This property will only be returned when enableInternalIngress is true.
     */
    privateSshEndpoint?: string;
}

/**
 * The list of SSH public keys.
 */
export interface SshProfileResponse {
    /**
     * The list of SSH public keys.
     */
    publicKeys?: SshPublicKeyResponse[];
}

/**
 * The SSH public key for the cluster nodes.
 */
export interface SshPublicKeyResponse {
    /**
     * The certificate for SSH.
     */
    certificateData?: string;
}

/**
 * The storage Account.
 */
export interface StorageAccountResponse {
    /**
     * The container in the storage account, only to be specified for WASB storage accounts.
     */
    container?: string;
    /**
     * Enable secure channel or not, it's an optional field. Default value is false when cluster version < 5.1 and true when cluster version >= 5.1 , 
     */
    enableSecureChannel?: boolean;
    /**
     * The filesystem, only to be specified for Azure Data Lake Storage Gen 2.
     */
    fileSystem?: string;
    /**
     * The file share name.
     */
    fileshare?: string;
    /**
     * Whether or not the storage account is the default storage account.
     */
    isDefault?: boolean;
    /**
     * The storage account access key.
     */
    key?: string;
    /**
     * The managed identity (MSI) that is allowed to access the storage account, only to be specified for Azure Data Lake Storage Gen 2.
     */
    msiResourceId?: string;
    /**
     * The name of the storage account.
     */
    name?: string;
    /**
     * The resource ID of storage account, only to be specified for Azure Data Lake Storage Gen 2.
     */
    resourceId?: string;
    /**
     * The shared access signature key.
     */
    saskey?: string;
}

/**
 * The storage profile.
 */
export interface StorageProfileResponse {
    /**
     * The list of storage accounts in the cluster.
     */
    storageaccounts?: StorageAccountResponse[];
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

/**
 * The User Assigned Identity
 */
export interface UserAssignedIdentityResponse {
    /**
     * The client id of user assigned identity.
     */
    clientId: string;
    /**
     * The principal id of user assigned identity.
     */
    principalId: string;
    /**
     * The tenant id of user assigned identity.
     */
    tenantId?: string;
}

/**
 * The virtual network properties.
 */
export interface VirtualNetworkProfileResponse {
    /**
     * The ID of the virtual network.
     */
    id?: string;
    /**
     * The name of the subnet.
     */
    subnet?: string;
}
