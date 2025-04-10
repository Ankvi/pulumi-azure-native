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
 * The hardware profile.
 */
export interface HardwareProfileResponse {
    /**
     * The size of the VM
     */
    vmSize?: string;
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
 * The network properties.
 */
export interface NetworkPropertiesResponse {
    /**
     * Indicates whether or not private link is enabled.
     */
    privateLink?: string;
    /**
     * The direction for the resource provider connection.
     */
    resourceProviderConnection?: string;
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







