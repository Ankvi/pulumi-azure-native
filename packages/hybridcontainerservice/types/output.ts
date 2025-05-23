import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * AAD Profile specifies attributes for Azure Active Directory integration.
 */
export interface AADProfileResponseResponse {
    /**
     * The list of AAD group object IDs that will have admin role of the cluster.
     */
    adminGroupObjectIDs?: string[];
    /**
     * The client AAD application ID.
     */
    clientAppID?: string;
    /**
     * Whether to enable Azure RBAC for Kubernetes authorization.
     */
    enableAzureRbac?: boolean;
    /**
     * Whether to enable managed AAD.
     */
    managed?: boolean;
    /**
     * The server AAD application ID.
     */
    serverAppID?: string;
    /**
     * The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription.
     */
    tenantID?: string;
}

/**
 * Addon configurations
 */
export interface AddonProfilesResponse {
    /**
     * Config - Key-value pairs for configuring an add-on.
     */
    config?: {[key: string]: string};
    /**
     * Enabled - Whether the add-on is enabled or not.
     */
    enabled?: boolean;
}

/**
 * Status of the addon
 */
export interface AddonStatusResponse {
    /**
     * ErrorMessage will be set in the event that there is a terminal problem reconciling the AddOn and will contain a more verbose string suitable for logging and human consumption.
     */
    errorMessage?: string;
    /**
     * Phase represents the current phase of cluster actuation. E.g. Pending, Running, Terminating, Failed etc.
     */
    phase?: string;
    ready?: boolean;
}

export interface AgentPoolProvisioningStatusResponseError {
    code?: string;
    message?: string;
}

/**
 * Contains Provisioning errors
 */
export interface AgentPoolProvisioningStatusResponseProvisioningStatus {
    error?: AgentPoolProvisioningStatusResponseError;
    operationId?: string;
    /**
     * Phase represents the current phase of cluster actuation. E.g. Pending, Running, Terminating, Failed etc.
     */
    phase?: string;
    status?: string;
}

/**
 * HybridAKSNodePoolStatus defines the observed state of HybridAKSNodePool
 */
export interface AgentPoolProvisioningStatusResponseStatus {
    /**
     * ErrorMessage - Error messages during creation of cluster
     */
    errorMessage?: string;
    /**
     * Contains Provisioning errors
     */
    provisioningStatus?: AgentPoolProvisioningStatusResponseProvisioningStatus;
    /**
     * Total number of ready machines targeted by this deployment.
     */
    readyReplicas?: number;
    /**
     * Total number of non-terminated machines targeted by this deployment
     */
    replicas?: number;
}

export interface AgentPoolResponseExtendedLocation {
    /**
     * The extended location name.
     */
    name?: string;
    /**
     * The extended location type.
     */
    type?: string;
}

/**
 * Defines the Arc Agent properties for the Provisioned clusters.
 */
export interface ArcAgentProfileResponse {
    /**
     * Indicates whether the Arc agents on the provisioned clusters be upgraded automatically to the latest version. Defaults to Enabled.
     */
    agentAutoUpgrade?: string;
    /**
     * Version of the Arc agents to be installed on the provisioned Provisioned cluster resource
     */
    agentVersion?: string;
}
/**
 * arcAgentProfileResponseProvideDefaults sets the appropriate defaults for ArcAgentProfileResponse
 */
export function arcAgentProfileResponseProvideDefaults(val: ArcAgentProfileResponse): ArcAgentProfileResponse {
    return {
        ...val,
        agentAutoUpgrade: (val.agentAutoUpgrade) ?? "Enabled",
    };
}

/**
 * Defines the observed Arc Agent status that is resourceSynced back to the ARM resource.
 */
export interface ArcAgentStatusResponse {
    /**
     * Version of the Arc agents currently running on the Provisioned cluster resource.
     */
    agentVersion?: string;
    /**
     * Number of CPU cores present in the Provisioned cluster resource
     */
    coreCount?: number;
    /**
     * Observed deployment state of the Arc Agents on the target cluster. Possible values include: 'pending', 'provisioning', 'provisioned', 'deleting', 'failed', 'upgrading'
     */
    deploymentState?: string;
    /**
     * Error messages while onboarding/upgrading/uninstalling the Arc agents
     */
    errorMessage?: string;
    /**
     * Last connected timestamp of the Provisioned cluster resource.
     */
    lastConnectivityTime?: string;
    /**
     * ManagedIdentity certificate expiration time (ValidUntil).
     */
    managedIdentityCertificateExpirationTime?: string;
    /**
     * Onboarding public key for provisioning the Managed identity for the HybridAKS cluster. Will be used to create the hybridIdentityMetadata proxy resource and will not be persisted.
     */
    onboardingPublicKey?: string;
}

/**
 * CloudProviderProfile - The underlying cloud infra provider properties.
 */
export interface CloudProviderProfileResponse {
    /**
     * InfraNetworkProfile - List of infra network profiles for the provisioned cluster
     */
    infraNetworkProfile?: CloudProviderProfileResponseInfraNetworkProfile;
    /**
     * InfraStorageProfile - List of infra storage profiles for the provisioned cluster
     */
    infraStorageProfile?: CloudProviderProfileResponseInfraStorageProfile;
}

/**
 * InfraNetworkProfile - List of infra network profiles for the provisioned cluster
 */
export interface CloudProviderProfileResponseInfraNetworkProfile {
    /**
     * Array of references to azure resource corresponding to the new HybridAKSNetwork object e.g. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridContainerService/virtualNetworks/{virtualNetworkName}
     */
    vnetSubnetIds?: string[];
}

/**
 * InfraStorageProfile - List of infra storage profiles for the provisioned cluster
 */
export interface CloudProviderProfileResponseInfraStorageProfile {
    /**
     * Reference to azure resource corresponding to the new HybridAKSStorage object e.g. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridContainerService/storageSpaces/{storageSpaceName}
     */
    storageSpaceIds?: string[];
}

/**
 * API server endpoint for the control plane
 */
export interface ControlPlaneEndpointProfileResponseControlPlaneEndpoint {
    /**
     * Host IP address for API server
     */
    hostIP?: string;
    /**
     * Port for the API server
     */
    port?: string;
}

/**
 * ControlPlaneProfile - The control plane properties for the provisioned cluster.
 */
export interface ControlPlaneProfileResponse {
    /**
     * AvailabilityZones - The list of Availability zones to use for nodes. Datacenter racks modelled as zones
     */
    availabilityZones?: string[];
    /**
     * The underlying cloud infra provider properties.
     */
    cloudProviderProfile?: CloudProviderProfileResponse;
    /**
     * API server endpoint for the control plane
     */
    controlPlaneEndpoint?: ControlPlaneEndpointProfileResponseControlPlaneEndpoint;
    /**
     * Count - Number of agents to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
     */
    count?: number;
    /**
     * Profile for Linux VMs in the container service cluster.
     */
    linuxProfile?: LinuxProfilePropertiesResponse;
    /**
     * The maximum number of nodes for auto-scaling
     */
    maxCount?: number;
    /**
     * The maximum number of pods that can run on a node.
     */
    maxPods?: number;
    /**
     * The minimum number of nodes for auto-scaling
     */
    minCount?: number;
    /**
     * Mode - AgentPoolMode represents mode of an agent pool. Possible values include: 'System', 'LB', 'User'. Default is 'User'
     */
    mode?: string;
    /**
     * Unique name of the agent pool profile in the context of the subscription and resource group.
     */
    name?: string;
    /**
     * The version of node image
     */
    nodeImageVersion?: string;
    /**
     * NodeLabels - Agent pool node labels to be persisted across all nodes in agent pool.
     */
    nodeLabels?: {[key: string]: string};
    /**
     * NodeTaints - Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
     */
    nodeTaints?: string[];
    /**
     * OsType - OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux. Possible values include: 'Linux', 'Windows'
     */
    osType?: string;
    /**
     * VmSize - The size of the agent pool VMs.
     */
    vmSize?: string;
}
/**
 * controlPlaneProfileResponseProvideDefaults sets the appropriate defaults for ControlPlaneProfileResponse
 */
export function controlPlaneProfileResponseProvideDefaults(val: ControlPlaneProfileResponse): ControlPlaneProfileResponse {
    return {
        ...val,
        count: (val.count) ?? 1,
        mode: (val.mode) ?? "User",
    };
}

/**
 * The credential result response.
 */
export interface CredentialResultResponse {
    /**
     * The name of the credential.
     */
    name: string;
    /**
     * Base64-encoded Kubernetes configuration file.
     */
    value: string;
}

/**
 * Configurations for provisioning the cluster with HTTP proxy servers.
 */
export interface HttpProxyConfigResponseResponse {
    /**
     * The HTTP proxy server endpoint to use.
     */
    httpProxy?: string;
    /**
     * The HTTPS proxy server endpoint to use.
     */
    httpsProxy?: string;
    /**
     * The endpoints that should not go through proxy.
     */
    noProxy?: string[];
    /**
     * Alternative CA cert to use for connecting to proxy servers.
     */
    trustedCa?: string;
    /**
     * Username to use for connecting to proxy server
     */
    username?: string;
}

/**
 * LinuxProfile - Profile for Linux VMs in the container service cluster.
 */
export interface LinuxProfilePropertiesResponse {
    /**
     * AdminUsername - The administrator username to use for Linux VMs.
     */
    adminUsername?: string;
    /**
     * SSH - SSH configuration for Linux-based VMs running on Azure.
     */
    ssh?: LinuxProfilePropertiesResponseSsh;
}

export interface LinuxProfilePropertiesResponsePublicKeys {
    /**
     * KeyData - Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.
     */
    keyData?: string;
}

/**
 * SSH - SSH configuration for Linux-based VMs running on Azure.
 */
export interface LinuxProfilePropertiesResponseSsh {
    /**
     * PublicKeys - The list of SSH public keys used to authenticate with Linux-based VMs. Only expect one key specified.
     */
    publicKeys?: LinuxProfilePropertiesResponsePublicKeys[];
}

export interface ListCredentialResponseResponseError {
    code?: string;
    message?: string;
}

export interface ListCredentialResponseResponseProperties {
    /**
     * Base64-encoded Kubernetes configuration file.
     */
    kubeconfigs: CredentialResultResponse[];
}

/**
 * LoadBalancerProfile - Profile of the cluster load balancer.
 */
export interface LoadBalancerProfileResponse {
    /**
     * AvailabilityZones - The list of Availability zones to use for nodes. Datacenter racks modelled as zones
     */
    availabilityZones?: string[];
    /**
     * The underlying cloud infra provider properties.
     */
    cloudProviderProfile?: CloudProviderProfileResponse;
    /**
     * Count - Number of agents to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
     */
    count?: number;
    /**
     * Profile for Linux VMs in the container service cluster.
     */
    linuxProfile?: LinuxProfilePropertiesResponse;
    /**
     * The maximum number of nodes for auto-scaling
     */
    maxCount?: number;
    /**
     * The maximum number of pods that can run on a node.
     */
    maxPods?: number;
    /**
     * The minimum number of nodes for auto-scaling
     */
    minCount?: number;
    /**
     * Mode - AgentPoolMode represents mode of an agent pool. Possible values include: 'System', 'LB', 'User'. Default is 'User'
     */
    mode?: string;
    /**
     * Unique name of the agent pool profile in the context of the subscription and resource group.
     */
    name?: string;
    /**
     * The version of node image
     */
    nodeImageVersion?: string;
    /**
     * NodeLabels - Agent pool node labels to be persisted across all nodes in agent pool.
     */
    nodeLabels?: {[key: string]: string};
    /**
     * NodeTaints - Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
     */
    nodeTaints?: string[];
    /**
     * OsType - OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux. Possible values include: 'Linux', 'Windows'
     */
    osType?: string;
    /**
     * VmSize - The size of the agent pool VMs.
     */
    vmSize?: string;
}
/**
 * loadBalancerProfileResponseProvideDefaults sets the appropriate defaults for LoadBalancerProfileResponse
 */
export function loadBalancerProfileResponseProvideDefaults(val: LoadBalancerProfileResponse): LoadBalancerProfileResponse {
    return {
        ...val,
        count: (val.count) ?? 1,
        mode: (val.mode) ?? "User",
    };
}

/**
 * Agent pool profile along with a name parameter
 */
export interface NamedAgentPoolProfileResponse {
    /**
     * AvailabilityZones - The list of Availability zones to use for nodes. Datacenter racks modelled as zones
     */
    availabilityZones?: string[];
    /**
     * The underlying cloud infra provider properties.
     */
    cloudProviderProfile?: CloudProviderProfileResponse;
    /**
     * Count - Number of agents to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
     */
    count?: number;
    /**
     * The maximum number of nodes for auto-scaling
     */
    maxCount?: number;
    /**
     * The maximum number of pods that can run on a node.
     */
    maxPods?: number;
    /**
     * The minimum number of nodes for auto-scaling
     */
    minCount?: number;
    /**
     * Mode - AgentPoolMode represents mode of an agent pool. Possible values include: 'System', 'LB', 'User'. Default is 'User'
     */
    mode?: string;
    /**
     * Unique name of the agent pool profile in the context of the subscription and resource group.
     */
    name?: string;
    /**
     * The version of node image
     */
    nodeImageVersion?: string;
    /**
     * NodeLabels - Agent pool node labels to be persisted across all nodes in agent pool.
     */
    nodeLabels?: {[key: string]: string};
    /**
     * NodeTaints - Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
     */
    nodeTaints?: string[];
    /**
     * OsType - OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux. Possible values include: 'Linux', 'Windows'
     */
    osType?: string;
    /**
     * VmSize - The size of the agent pool VMs.
     */
    vmSize?: string;
}
/**
 * namedAgentPoolProfileResponseProvideDefaults sets the appropriate defaults for NamedAgentPoolProfileResponse
 */
export function namedAgentPoolProfileResponseProvideDefaults(val: NamedAgentPoolProfileResponse): NamedAgentPoolProfileResponse {
    return {
        ...val,
        count: (val.count) ?? 1,
        mode: (val.mode) ?? "User",
    };
}

/**
 * NetworkProfile - Profile of network configuration.
 */
export interface NetworkProfileResponse {
    /**
     * DNSServiceIP - An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
     */
    dnsServiceIP?: string;
    /**
     * LoadBalancerProfile - Profile of the cluster load balancer.
     */
    loadBalancerProfile?: LoadBalancerProfileResponse;
    /**
     * LoadBalancerSku - The load balancer sku for the provisioned cluster. Possible values: 'unstacked-haproxy', 'stacked-kube-vip', 'stacked-metallb', 'unmanaged'. The default is 'unmanaged'.
     */
    loadBalancerSku?: string;
    /**
     * NetworkPolicy - Network policy used for building Kubernetes network. Possible values include: 'calico', 'flannel'. Default is 'calico'
     */
    networkPolicy?: string;
    /**
     * PodCidr - A CIDR notation IP range from which to assign pod IPs when kubenet is used.
     */
    podCidr?: string;
    /**
     * The CIDR notation IP ranges from which to assign pod IPs. One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
     */
    podCidrs?: string[];
    /**
     * ServiceCidr - A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
     */
    serviceCidr?: string;
    /**
     * The CIDR notation IP ranges from which to assign service cluster IPs. One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking. They must not overlap with any Subnet IP ranges.
     */
    serviceCidrs?: string[];
}
/**
 * networkProfileResponseProvideDefaults sets the appropriate defaults for NetworkProfileResponse
 */
export function networkProfileResponseProvideDefaults(val: NetworkProfileResponse): NetworkProfileResponse {
    return {
        ...val,
        loadBalancerProfile: (val.loadBalancerProfile ? loadBalancerProfileResponseProvideDefaults(val.loadBalancerProfile) : undefined),
        loadBalancerSku: (val.loadBalancerSku) ?? "unmanaged",
        networkPolicy: (val.networkPolicy) ?? "calico",
    };
}

/**
 * Identity for the Provisioned cluster.
 */
export interface ProvisionedClusterIdentityResponse {
    /**
     * The principal id of provisioned cluster identity. This property will only be provided for a system assigned identity.
     */
    principalId: string;
    /**
     * The tenant id associated with the provisioned cluster. This property will only be provided for a system assigned identity.
     */
    tenantId: string;
    /**
     * The type of identity used for the provisioned cluster. The type SystemAssigned, includes a system created identity. The type None means no identity is assigned to the provisioned cluster.
     */
    type: string;
}

export interface ProvisionedClustersCommonPropertiesResponseError {
    code?: string;
    message?: string;
}

/**
 * Additional features specs like Arc Agent Onboarding.
 */
export interface ProvisionedClustersCommonPropertiesResponseFeatures {
    /**
     * Arc agentry configuration for the provisioned cluster.
     */
    arcAgentProfile?: ArcAgentProfileResponse;
}
/**
 * provisionedClustersCommonPropertiesResponseFeaturesProvideDefaults sets the appropriate defaults for ProvisionedClustersCommonPropertiesResponseFeatures
 */
export function provisionedClustersCommonPropertiesResponseFeaturesProvideDefaults(val: ProvisionedClustersCommonPropertiesResponseFeatures): ProvisionedClustersCommonPropertiesResponseFeatures {
    return {
        ...val,
        arcAgentProfile: (val.arcAgentProfile ? arcAgentProfileResponseProvideDefaults(val.arcAgentProfile) : undefined),
    };
}

/**
 * Additional features status like Arc Agent Onboarding.
 */
export interface ProvisionedClustersCommonPropertiesResponseFeaturesStatus {
    /**
     * Defines the observed Arc Agent status that is resourceSynced back to the ARM resource.
     */
    arcAgentStatus?: ArcAgentStatusResponse;
}

/**
 * Contains Provisioning errors
 */
export interface ProvisionedClustersCommonPropertiesResponseProvisioningStatus {
    error?: ProvisionedClustersCommonPropertiesResponseError;
    operationId?: string;
    /**
     * Phase represents the current phase of cluster actuation. E.g. Pending, Running, Terminating, Failed etc.
     */
    phase?: string;
    status?: string;
}

/**
 * HybridAKSClusterStatus defines the observed state of HybridAKSCluster
 */
export interface ProvisionedClustersCommonPropertiesResponseStatus {
    /**
     * AddonStatus - Status of Addons
     */
    addonStatus?: {[key: string]: AddonStatusResponse};
    /**
     * ErrorMessage - Error messages during creation of cluster
     */
    errorMessage?: string;
    /**
     * Additional features status like Arc Agent Onboarding.
     */
    featuresStatus?: ProvisionedClustersCommonPropertiesResponseFeaturesStatus;
    /**
     * Contains Provisioning errors
     */
    provisioningStatus?: ProvisionedClustersCommonPropertiesResponseProvisioningStatus;
}

export interface ProvisionedClustersResponsePropertiesResponse {
    /**
     * AAD profile for the provisioned cluster.
     */
    aadProfile?: AADProfileResponseResponse;
    /**
     * AddonProfiles - Profile of managed cluster add-on.
     */
    addonProfiles?: {[key: string]: AddonProfilesResponse};
    /**
     * The agent pools of the cluster.
     */
    agentPoolProfiles?: NamedAgentPoolProfileResponse[];
    /**
     * The underlying cloud infra provider properties.
     */
    cloudProviderProfile?: CloudProviderProfileResponse;
    /**
     * ControlPlane - ControlPlane Configuration
     */
    controlPlane?: ControlPlaneProfileResponse;
    /**
     * EnableRBAC - Whether to enable Kubernetes Role-Based Access Control.
     */
    enableRbac?: boolean;
    /**
     * Additional features specs like Arc Agent Onboarding.
     */
    features?: ProvisionedClustersCommonPropertiesResponseFeatures;
    /**
     * HttpProxyConfig - Configurations for provisioning the cluster with HTTP proxy servers.
     */
    httpProxyConfig?: HttpProxyConfigResponseResponse;
    /**
     * KubernetesVersion - Version of Kubernetes specified when creating the managed cluster.
     */
    kubernetesVersion?: string;
    /**
     * LinuxProfile - The profile for Linux VMs in the Provisioned Cluster.
     */
    linuxProfile?: LinuxProfilePropertiesResponse;
    /**
     * NetworkProfile - Profile of network configuration.
     */
    networkProfile?: NetworkProfileResponse;
    /**
     * NodeResourceGroup - Name of the resource group containing agent pool nodes.
     */
    nodeResourceGroup?: string;
    provisioningState: string;
    /**
     * HybridAKSClusterStatus defines the observed state of HybridAKSCluster
     */
    status: ProvisionedClustersCommonPropertiesResponseStatus;
    /**
     * WindowsProfile - Profile for Windows VMs in the Provisioned Cluster.
     */
    windowsProfile?: WindowsProfileResponseResponse;
}
/**
 * provisionedClustersResponsePropertiesResponseProvideDefaults sets the appropriate defaults for ProvisionedClustersResponsePropertiesResponse
 */
export function provisionedClustersResponsePropertiesResponseProvideDefaults(val: ProvisionedClustersResponsePropertiesResponse): ProvisionedClustersResponsePropertiesResponse {
    return {
        ...val,
        controlPlane: (val.controlPlane ? controlPlaneProfileResponseProvideDefaults(val.controlPlane) : undefined),
        features: (val.features ? provisionedClustersCommonPropertiesResponseFeaturesProvideDefaults(val.features) : undefined),
        networkProfile: (val.networkProfile ? networkProfileResponseProvideDefaults(val.networkProfile) : undefined),
    };
}

export interface ProvisionedClustersResponseResponseExtendedLocation {
    /**
     * The extended location name.
     */
    name?: string;
    /**
     * The extended location type.
     */
    type?: string;
}

/**
 * HybridAKSStorageSpec defines the desired state of HybridAKSStorage
 */
export interface StorageSpacesPropertiesResponse {
    hciStorageProfile?: StorageSpacesPropertiesResponseHciStorageProfile;
    provisioningState: string;
    /**
     * HybridAKSStorageStatus defines the observed state of HybridAKSStorage
     */
    status?: StorageSpacesPropertiesResponseStatus;
    vmwareStorageProfile?: StorageSpacesPropertiesResponseVmwareStorageProfile;
}

export interface StorageSpacesPropertiesResponseError {
    code?: string;
    message?: string;
}

export interface StorageSpacesPropertiesResponseHciStorageProfile {
    /**
     * Resource group in MOC(Microsoft On-premises Cloud)
     */
    mocGroup?: string;
    /**
     * Location in MOC(Microsoft On-premises Cloud)
     */
    mocLocation?: string;
    /**
     * Name of the storage container in MOC(Microsoft On-premises Cloud)
     */
    mocStorageContainer?: string;
}

/**
 * Contains Provisioning errors
 */
export interface StorageSpacesPropertiesResponseProvisioningStatus {
    error?: StorageSpacesPropertiesResponseError;
    operationId?: string;
    /**
     * Phase represents the current phase of cluster actuation. E.g. Pending, Running, Terminating, Failed etc.
     */
    phase?: string;
    status?: string;
}

/**
 * HybridAKSStorageStatus defines the observed state of HybridAKSStorage
 */
export interface StorageSpacesPropertiesResponseStatus {
    /**
     * Contains Provisioning errors
     */
    provisioningStatus?: StorageSpacesPropertiesResponseProvisioningStatus;
}

export interface StorageSpacesPropertiesResponseVmwareStorageProfile {
    /**
     * Name of the datacenter in VSphere
     */
    datacenter?: string;
    /**
     * Name of the datastore in VSphere
     */
    datastore?: string;
    /**
     * Name of the folder in VSphere
     */
    folder?: string;
    /**
     * Name of the resource pool in VSphere
     */
    resourcePool?: string;
}

export interface StorageSpacesResponseExtendedLocation {
    /**
     * The extended location name.
     */
    name?: string;
    /**
     * The extended location type.
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
 * HybridAKSNetworkSpec defines the desired state of HybridAKSNetwork
 */
export interface VirtualNetworksPropertiesResponse {
    /**
     * Address of the DHCP servers associated with the network
     */
    dhcpServers: string[];
    /**
     * Address of the DNS servers associated with the network
     */
    dnsServers?: string[];
    /**
     * Address of the Gateway associated with the network
     */
    gateway?: string;
    infraVnetProfile?: VirtualNetworksPropertiesResponseInfraVnetProfile;
    /**
     * IP Address Prefix of the network
     */
    ipAddressPrefix?: string;
    provisioningState: string;
    /**
     * HybridAKSNetworkStatus defines the observed state of HybridAKSNetwork
     */
    status: VirtualNetworksPropertiesResponseStatus;
    /**
     * Virtual IP Pool for Kubernetes
     */
    vipPool?: VirtualNetworksPropertiesResponseVipPool[];
    /**
     * VLAN Id used by the network
     */
    vlanID: string;
    /**
     * IP Pool for Virtual Machines
     */
    vmipPool?: VirtualNetworksPropertiesResponseVmipPool[];
}

export interface VirtualNetworksPropertiesResponseError {
    code?: string;
    message?: string;
}

/**
 * Infra network profile for HCI platform
 */
export interface VirtualNetworksPropertiesResponseHci {
    /**
     * Resource group in MOC(Microsoft On-premises Cloud)
     */
    mocGroup?: string;
    /**
     * Location in MOC(Microsoft On-premises Cloud)
     */
    mocLocation?: string;
    /**
     * Virtual Network name in MOC(Microsoft On-premises Cloud)
     */
    mocVnetName?: string;
}

export interface VirtualNetworksPropertiesResponseInfraVnetProfile {
    /**
     * Infra network profile for HCI platform
     */
    hci?: VirtualNetworksPropertiesResponseHci;
    /**
     * Infra network profile for the NetworkCloud platform
     */
    networkCloud?: VirtualNetworksPropertiesResponseNetworkCloud;
    /**
     * Infra network profile for VMware platform
     */
    vmware?: VirtualNetworksPropertiesResponseVmware;
}

/**
 * Infra network profile for the NetworkCloud platform
 */
export interface VirtualNetworksPropertiesResponseNetworkCloud {
    /**
     * The ARM ID of Network Cloud Network Resource to Associate with this VirtualNetwork
     */
    networkId?: string;
}

/**
 * Contains Provisioning errors
 */
export interface VirtualNetworksPropertiesResponseProvisioningStatus {
    error?: VirtualNetworksPropertiesResponseError;
    operationId?: string;
    /**
     * Phase represents the current phase of cluster actuation. E.g. Pending, Running, Terminating, Failed etc.
     */
    phase?: string;
    status?: string;
}

/**
 * HybridAKSNetworkStatus defines the observed state of HybridAKSNetwork
 */
export interface VirtualNetworksPropertiesResponseStatus {
    /**
     * Contains Provisioning errors
     */
    provisioningStatus?: VirtualNetworksPropertiesResponseProvisioningStatus;
}

export interface VirtualNetworksPropertiesResponseVipPool {
    /**
     * Ending IP address for the IP Pool
     */
    endIP?: string;
    /**
     * Starting IP address for the IP Pool
     */
    startIP?: string;
}

export interface VirtualNetworksPropertiesResponseVmipPool {
    /**
     * Ending IP address for the IP Pool
     */
    endIP?: string;
    /**
     * Starting IP address for the IP Pool
     */
    startIP?: string;
}

/**
 * Infra network profile for VMware platform
 */
export interface VirtualNetworksPropertiesResponseVmware {
    /**
     * Name of the network segment in VSphere
     */
    segmentName?: string;
}

export interface VirtualNetworksResponseExtendedLocation {
    /**
     * The extended location name.
     */
    name?: string;
    /**
     * The extended location type.
     */
    type?: string;
}

/**
 * Profile for Windows VMs in the container service cluster.
 */
export interface WindowsProfileResponseResponse {
    /**
     * AdminUsername - Specifies the name of the administrator account. <br><br> **restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length:** 1 character <br><br> **Max-length:** 20 characters
     */
    adminUsername?: string;
    /**
     * EnableCSIProxy - Whether to enable CSI proxy.
     */
    enableCsiProxy?: boolean;
    /**
     * LicenseType - The licenseType to use for Windows VMs. Windows_Server is used to enable Azure Hybrid User Benefits for Windows VMs. Possible values include: 'None', 'Windows_Server'
     */
    licenseType?: string;
}
