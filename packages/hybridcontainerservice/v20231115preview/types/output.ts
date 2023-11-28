import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Defines the addon status profile.
     */
    export interface AddonStatusProfileResponse {
        /**
         * Error message while deploying the addon
         */
        errorMessage?: string;
        /**
         * Name of the addon
         */
        name?: string;
        /**
         * Observed phase of the addon on the target cluster. Possible values include: 'pending', 'provisioning', 'provisioning {HelmChartInstalled}', 'provisioning {MSICertificateDownloaded}', 'provisioned', 'deleting', 'failed', 'upgrading'
         */
        phase?: string;
        /**
         * Indicates whether the addon is ready
         */
        ready?: boolean;
    }

    export interface AgentPoolProvisioningStatusResponseError {
        code?: string;
        message?: string;
    }

    /**
     * Contains Provisioning errors
     */
    export interface AgentPoolProvisioningStatusResponseOperationStatus {
        error?: AgentPoolProvisioningStatusResponseError;
        operationId?: string;
        status?: string;
    }

    /**
     * Defines the observed state of the agent pool
     */
    export interface AgentPoolProvisioningStatusResponseStatus {
        /**
         * ErrorMessage - Error messages during creation of agent pool
         */
        errorMessage?: string;
        /**
         * Contains Provisioning errors
         */
        operationStatus?: AgentPoolProvisioningStatusResponseOperationStatus;
        readyReplicas?: AgentPoolUpdateProfileResponse[];
    }

    /**
     * AgentPool update configuration
     */
    export interface AgentPoolUpdateProfileResponse {
        /**
         * Count - Number of agents to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
         */
        count?: number;
        /**
         * VmSize - The size of the agent pool VMs.
         */
        vmSize?: string;
    }
    /**
     * agentPoolUpdateProfileResponseProvideDefaults sets the appropriate defaults for AgentPoolUpdateProfileResponse
     */
    export function agentPoolUpdateProfileResponseProvideDefaults(val: AgentPoolUpdateProfileResponse): AgentPoolUpdateProfileResponse {
        return {
            ...val,
            count: (val.count) ?? 1,
        };
    }

    /**
     * CloudProviderProfile - The underlying cloud infra provider properties.
     */
    export interface CloudProviderProfileResponse {
        /**
         * InfraNetworkProfile - List of infra network profiles for the provisioned cluster
         */
        infraNetworkProfile?: CloudProviderProfileResponseInfraNetworkProfile;
    }

    /**
     * InfraNetworkProfile - List of infra network profiles for the provisioned cluster
     */
    export interface CloudProviderProfileResponseInfraNetworkProfile {
        /**
         * Array of references to azure resource corresponding to the Network object e.g. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/logicalNetworks/{logicalNetworkName}
         */
        vnetSubnetIds?: string[];
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
        port?: number;
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
         * Unique name of the agent pool profile in the context of the subscription and resource group.
         */
        name?: string;
        /**
         * The version of node image
         */
        nodeImageVersion?: string;
        /**
         * Specifies the OS SKU used by the agent pool. The default is CBLMariner if OSType is Linux. The default is Windows2019 when OSType is Windows.
         */
        osSKU?: string;
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
     * Extended Location definition
     */
    export interface ExtendedLocationResponse {
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
     * Kubernetes Patch Version profile
     */
    export interface KubernetesPatchVersionsResponse {
        /**
         * Whether the kubernetes version variant (Linux, Windows, Windows2022) is ready or not
         */
        readiness?: KubernetesVersionReadinessResponse[];
        /**
         * Possible upgrade path for given patch version
         */
        upgrades?: string[];
    }

    /**
     * Capabilities on this kubernetes version
     */
    export interface KubernetesVersionCapabilitiesResponse {
        supportPlan?: string[];
    }

    /**
     * Kubernetes version profile for given major.minor release
     */
    export interface KubernetesVersionProfilePropertiesResponse {
        /**
         * Capabilities on this kubernetes version
         */
        capabilities: KubernetesVersionCapabilitiesResponse;
        /**
         * Whether this version is in preview mode.
         */
        isPreview: boolean;
        /**
         * Patch versions of a Kubernetes release
         */
        patchVersions: {[key: string]: KubernetesPatchVersionsResponse};
        /**
         * major.minor version of Kubernetes release
         */
        version: string;
    }

    export interface KubernetesVersionProfileResponseProperties {
        /**
         * Provisioning state of the resource
         */
        provisioningState: string;
        /**
         * List of supported Kubernetes versions
         */
        values?: KubernetesVersionProfilePropertiesResponse[];
    }

    /**
     * Whether a particular kubernetes version's variant (CBLMariner, Windows, Windows2022) is ready or not 
     */
    export interface KubernetesVersionReadinessResponse {
        /**
         * If image is not ready, the error message for version not being ready
         */
        errorMessage: string;
        /**
         * The particular KubernetesVersion's Image's OS SKU (CBLMariner, Windows, Windows2022)
         */
        osSku: string;
        /**
         * The particular KubernetesVersion's Image's OS Type (Linux, Windows)
         */
        osType: string;
        /**
         * Whether or not the given image is ready
         */
        ready: boolean;
    }
    /**
     * kubernetesVersionReadinessResponseProvideDefaults sets the appropriate defaults for KubernetesVersionReadinessResponse
     */
    export function kubernetesVersionReadinessResponseProvideDefaults(val: KubernetesVersionReadinessResponse): KubernetesVersionReadinessResponse {
        return {
            ...val,
            osSku: (val.osSku) ?? "CBLMariner",
            osType: (val.osType) ?? "Linux",
        };
    }

    /**
     * LinuxProfile - Profile for Linux VMs in the container service cluster.
     */
    export interface LinuxProfilePropertiesResponse {
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
     * Agent pool profile along with a name parameter
     */
    export interface NamedAgentPoolProfileResponse {
        /**
         * AvailabilityZones - The list of Availability zones to use for nodes. Datacenter racks modelled as zones
         */
        availabilityZones?: string[];
        /**
         * Count - Number of agents to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
         */
        count?: number;
        /**
         * Unique name of the agent pool profile in the context of the subscription and resource group.
         */
        name?: string;
        /**
         * The version of node image
         */
        nodeImageVersion?: string;
        /**
         * Specifies the OS SKU used by the agent pool. The default is CBLMariner if OSType is Linux. The default is Windows2019 when OSType is Windows.
         */
        osSKU?: string;
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
        };
    }

    /**
     * NetworkProfile - Profile of network configuration.
     */
    export interface NetworkProfileResponse {
        /**
         * LoadBalancerProfile - Profile of the cluster load balancer.
         */
        loadBalancerProfile?: NetworkProfileResponseLoadBalancerProfile;
        /**
         * NetworkPolicy - Network policy used for building Kubernetes network. Possible values include: 'calico', 'flannel'. Default is 'calico'
         */
        networkPolicy?: string;
        /**
         * PodCidr - A CIDR notation IP range from which to assign pod IPs when kubenet is used.
         */
        podCidr?: string;
    }
    /**
     * networkProfileResponseProvideDefaults sets the appropriate defaults for NetworkProfileResponse
     */
    export function networkProfileResponseProvideDefaults(val: NetworkProfileResponse): NetworkProfileResponse {
        return {
            ...val,
            loadBalancerProfile: (val.loadBalancerProfile ? networkProfileResponseLoadBalancerProfileProvideDefaults(val.loadBalancerProfile) : undefined),
            networkPolicy: (val.networkPolicy) ?? "calico",
        };
    }

    /**
     * LoadBalancerProfile - Profile of the cluster load balancer.
     */
    export interface NetworkProfileResponseLoadBalancerProfile {
        /**
         * Count - Number of load balancer VMs. The default value is 0.
         */
        count?: number;
    }
    /**
     * networkProfileResponseLoadBalancerProfileProvideDefaults sets the appropriate defaults for NetworkProfileResponseLoadBalancerProfile
     */
    export function networkProfileResponseLoadBalancerProfileProvideDefaults(val: NetworkProfileResponseLoadBalancerProfile): NetworkProfileResponseLoadBalancerProfile {
        return {
            ...val,
            count: (val.count) ?? 0,
        };
    }

    /**
     * The license profile of the provisioned cluster.
     */
    export interface ProvisionedClusterLicenseProfileResponse {
        /**
         * Indicates whether Azure Hybrid Benefit is opted in
         */
        azureHybridBenefit?: string;
    }
    /**
     * provisionedClusterLicenseProfileResponseProvideDefaults sets the appropriate defaults for ProvisionedClusterLicenseProfileResponse
     */
    export function provisionedClusterLicenseProfileResponseProvideDefaults(val: ProvisionedClusterLicenseProfileResponse): ProvisionedClusterLicenseProfileResponse {
        return {
            ...val,
            azureHybridBenefit: (val.azureHybridBenefit) ?? "NotApplicable",
        };
    }

    /**
     * All properties of the provisioned cluster
     */
    export interface ProvisionedClusterPropertiesResponse {
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
         * KubernetesVersion - Version of Kubernetes specified when creating the managed cluster.
         */
        kubernetesVersion?: string;
        /**
         * The license profile of the provisioned cluster.
         */
        licenseProfile?: ProvisionedClusterLicenseProfileResponse;
        /**
         * LinuxProfile - The profile for Linux VMs in the Provisioned Cluster.
         */
        linuxProfile?: LinuxProfilePropertiesResponse;
        /**
         * NetworkProfile - Profile of network configuration.
         */
        networkProfile?: NetworkProfileResponse;
        /**
         * Provisioning state of the resource
         */
        provisioningState: string;
        /**
         * HybridAKSClusterStatus defines the observed state of HybridAKSCluster
         */
        status: ProvisionedClusterPropertiesResponseStatus;
    }
    /**
     * provisionedClusterPropertiesResponseProvideDefaults sets the appropriate defaults for ProvisionedClusterPropertiesResponse
     */
    export function provisionedClusterPropertiesResponseProvideDefaults(val: ProvisionedClusterPropertiesResponse): ProvisionedClusterPropertiesResponse {
        return {
            ...val,
            controlPlane: (val.controlPlane ? controlPlaneProfileResponseProvideDefaults(val.controlPlane) : undefined),
            licenseProfile: (val.licenseProfile ? provisionedClusterLicenseProfileResponseProvideDefaults(val.licenseProfile) : undefined),
            networkProfile: (val.networkProfile ? networkProfileResponseProvideDefaults(val.networkProfile) : undefined),
        };
    }

    export interface ProvisionedClusterPropertiesResponseError {
        code?: string;
        message?: string;
    }

    /**
     * Contains Provisioning errors
     */
    export interface ProvisionedClusterPropertiesResponseOperationStatus {
        error?: ProvisionedClusterPropertiesResponseError;
        operationId?: string;
        status?: string;
    }

    /**
     * HybridAKSClusterStatus defines the observed state of HybridAKSCluster
     */
    export interface ProvisionedClusterPropertiesResponseStatus {
        /**
         * Status of the control plane components
         */
        controlPlaneStatus?: AddonStatusProfileResponse[];
        /**
         * ErrorMessage - Error messages during creation of cluster
         */
        errorMessage?: string;
        /**
         * Contains Provisioning errors
         */
        operationStatus?: ProvisionedClusterPropertiesResponseOperationStatus;
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
    export interface VirtualNetworkPropertiesResponse {
        /**
         * Address of the DHCP servers associated with the network
         */
        dhcpServers?: string[];
        /**
         * Address of the DNS servers associated with the network
         */
        dnsServers?: string[];
        /**
         * Address of the Gateway associated with the network
         */
        gateway?: string;
        infraVnetProfile?: VirtualNetworkPropertiesResponseInfraVnetProfile;
        /**
         * IP Address Prefix of the network
         */
        ipAddressPrefix?: string;
        provisioningState: string;
        /**
         * HybridAKSNetworkStatus defines the observed state of HybridAKSNetwork
         */
        status: VirtualNetworkPropertiesResponseStatus;
        /**
         * Virtual IP Pool for Kubernetes
         */
        vipPool?: VirtualNetworkPropertiesResponseVipPool[];
        /**
         * VLAN Id used by the network
         */
        vlanID?: number;
        /**
         * IP Pool for Virtual Machines
         */
        vmipPool?: VirtualNetworkPropertiesResponseVmipPool[];
    }

    export interface VirtualNetworkPropertiesResponseError {
        code?: string;
        message?: string;
    }

    /**
     * Infra network profile for HCI platform
     */
    export interface VirtualNetworkPropertiesResponseHci {
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

    export interface VirtualNetworkPropertiesResponseInfraVnetProfile {
        /**
         * Infra network profile for HCI platform
         */
        hci?: VirtualNetworkPropertiesResponseHci;
        /**
         * Infra network profile for VMware platform
         */
        vmware?: VirtualNetworkPropertiesResponseVmware;
    }

    /**
     * Contains Provisioning errors
     */
    export interface VirtualNetworkPropertiesResponseOperationStatus {
        error?: VirtualNetworkPropertiesResponseError;
        operationId?: string;
        /**
         * Phase represents the current phase of the virtual network provisioning. E.g. Pending, Running, Terminating, Failed etc.
         */
        phase?: string;
        status?: string;
    }

    /**
     * HybridAKSNetworkStatus defines the observed state of HybridAKSNetwork
     */
    export interface VirtualNetworkPropertiesResponseStatus {
        /**
         * Contains Provisioning errors
         */
        operationStatus?: VirtualNetworkPropertiesResponseOperationStatus;
    }

    export interface VirtualNetworkPropertiesResponseVipPool {
        /**
         * Ending IP address for the IP Pool
         */
        endIP?: string;
        /**
         * Starting IP address for the IP Pool
         */
        startIP?: string;
    }

    export interface VirtualNetworkPropertiesResponseVmipPool {
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
    export interface VirtualNetworkPropertiesResponseVmware {
        /**
         * Name of the network segment in VSphere
         */
        segmentName?: string;
    }

    export interface VirtualNetworkResponseExtendedLocation {
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
     * describes the vm sku capabilities object
     */
    export interface VmSkuCapabilitiesResponse {
        /**
         * An invariant to describe the feature
         */
        name: string;
        /**
         * An invariant if the feature is measured by quantity
         */
        value: string;
    }

    /**
     * The profile for supported VM skus
     */
    export interface VmSkuProfilePropertiesResponse {
        /**
         * A name value pair to describe the specific vm's capability
         */
        capabilities: VmSkuCapabilitiesResponse[];
        /**
         * The name of the VM Family
         */
        name: string;
        /**
         * The resource type of the vm
         */
        resourceType: string;
        /**
         * The size of the VM Family
         */
        size: string;
        /**
         * The tier of the VM Family
         */
        tier: string;
    }

    export interface VmSkuProfileResponseProperties {
        /**
         * Provisioning state of the resource
         */
        provisioningState: string;
        /**
         * Array of HybridAKS Support VM Skus
         */
        values?: VmSkuProfilePropertiesResponse[];
    }
