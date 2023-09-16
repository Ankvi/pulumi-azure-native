import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace hybridcontainerservice {
    /**
     * AAD Profile specifies attributes for Azure Active Directory integration.
     */
    export interface AADProfileArgs {
        /**
         * The list of AAD group object IDs that will have admin role of the cluster.
         */
        adminGroupObjectIDs?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The client AAD application ID.
         */
        clientAppID?: pulumi.Input<string>;
        /**
         * Whether to enable Azure RBAC for Kubernetes authorization.
         */
        enableAzureRbac?: pulumi.Input<boolean>;
        /**
         * Whether to enable managed AAD.
         */
        managed?: pulumi.Input<boolean>;
        /**
         * The server AAD application ID.
         */
        serverAppID?: pulumi.Input<string>;
        /**
         * The server AAD application secret.
         */
        serverAppSecret?: pulumi.Input<string>;
        /**
         * The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription.
         */
        tenantID?: pulumi.Input<string>;
    }

    /**
     * Addon configurations
     */
    export interface AddonProfilesArgs {
        /**
         * Config - Key-value pairs for configuring an add-on.
         */
        config?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Enabled - Whether the add-on is enabled or not.
         */
        enabled?: pulumi.Input<boolean>;
    }

    export interface AgentPoolExtendedLocationArgs {
        /**
         * The extended location name.
         */
        name?: pulumi.Input<string>;
        /**
         * The extended location type.
         */
        type?: pulumi.Input<string>;
    }

    export interface AgentPoolProvisioningStatusErrorArgs {
        code?: pulumi.Input<string>;
        message?: pulumi.Input<string>;
    }

    /**
     * Contains Provisioning errors
     */
    export interface AgentPoolProvisioningStatusProvisioningStatusArgs {
        error?: pulumi.Input<AgentPoolProvisioningStatusErrorArgs>;
        operationId?: pulumi.Input<string>;
        /**
         * Phase represents the current phase of cluster actuation. E.g. Pending, Running, Terminating, Failed etc.
         */
        phase?: pulumi.Input<string>;
        status?: pulumi.Input<string>;
    }

    /**
     * HybridAKSNodePoolStatus defines the observed state of HybridAKSNodePool
     */
    export interface AgentPoolProvisioningStatusStatusArgs {
        /**
         * ErrorMessage - Error messages during creation of cluster
         */
        errorMessage?: pulumi.Input<string>;
        /**
         * Contains Provisioning errors
         */
        provisioningStatus?: pulumi.Input<AgentPoolProvisioningStatusProvisioningStatusArgs>;
        /**
         * Total number of ready machines targeted by this deployment.
         */
        readyReplicas?: pulumi.Input<number>;
        /**
         * Total number of non-terminated machines targeted by this deployment
         */
        replicas?: pulumi.Input<number>;
    }

    /**
     * Defines the Arc Agent properties for the Provisioned clusters.
     */
    export interface ArcAgentProfileArgs {
        /**
         * Indicates whether the Arc agents on the provisioned clusters be upgraded automatically to the latest version. Defaults to Enabled.
         */
        agentAutoUpgrade?: pulumi.Input<string | enums.AutoUpgradeOptions>;
        /**
         * Version of the Arc agents to be installed on the provisioned Provisioned cluster resource
         */
        agentVersion?: pulumi.Input<string>;
    }
    /**
     * arcAgentProfileArgsProvideDefaults sets the appropriate defaults for ArcAgentProfileArgs
     */
    export function arcAgentProfileArgsProvideDefaults(val: ArcAgentProfileArgs): ArcAgentProfileArgs {
        return {
            ...val,
            agentAutoUpgrade: (val.agentAutoUpgrade) ?? "Enabled",
        };
    }

    /**
     * CloudProviderProfile - The underlying cloud infra provider properties.
     */
    export interface CloudProviderProfileArgs {
        /**
         * InfraNetworkProfile - List of infra network profiles for the provisioned cluster
         */
        infraNetworkProfile?: pulumi.Input<CloudProviderProfileInfraNetworkProfileArgs>;
        /**
         * InfraStorageProfile - List of infra storage profiles for the provisioned cluster
         */
        infraStorageProfile?: pulumi.Input<CloudProviderProfileInfraStorageProfileArgs>;
    }

    /**
     * InfraNetworkProfile - List of infra network profiles for the provisioned cluster
     */
    export interface CloudProviderProfileInfraNetworkProfileArgs {
        /**
         * Array of references to azure resource corresponding to the new HybridAKSNetwork object e.g. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridContainerService/virtualNetworks/{virtualNetworkName}
         */
        vnetSubnetIds?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * InfraStorageProfile - List of infra storage profiles for the provisioned cluster
     */
    export interface CloudProviderProfileInfraStorageProfileArgs {
        /**
         * Reference to azure resource corresponding to the new HybridAKSStorage object e.g. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridContainerService/storageSpaces/{storageSpaceName}
         */
        storageSpaceIds?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * API server endpoint for the control plane
     */
    export interface ControlPlaneEndpointProfileControlPlaneEndpointArgs {
        /**
         * Host IP address for API server
         */
        hostIP?: pulumi.Input<string>;
        /**
         * Port for the API server
         */
        port?: pulumi.Input<string>;
    }

    /**
     * ControlPlaneProfile - The control plane properties for the provisioned cluster.
     */
    export interface ControlPlaneProfileArgs {
        /**
         * AvailabilityZones - The list of Availability zones to use for nodes. Datacenter racks modelled as zones
         */
        availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The underlying cloud infra provider properties.
         */
        cloudProviderProfile?: pulumi.Input<CloudProviderProfileArgs>;
        /**
         * API server endpoint for the control plane
         */
        controlPlaneEndpoint?: pulumi.Input<ControlPlaneEndpointProfileControlPlaneEndpointArgs>;
        /**
         * Count - Number of agents to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
         */
        count?: pulumi.Input<number>;
        /**
         * Profile for Linux VMs in the container service cluster.
         */
        linuxProfile?: pulumi.Input<LinuxProfilePropertiesArgs>;
        /**
         * The maximum number of nodes for auto-scaling
         */
        maxCount?: pulumi.Input<number>;
        /**
         * The maximum number of pods that can run on a node.
         */
        maxPods?: pulumi.Input<number>;
        /**
         * The minimum number of nodes for auto-scaling
         */
        minCount?: pulumi.Input<number>;
        /**
         * Mode - AgentPoolMode represents mode of an agent pool. Possible values include: 'System', 'LB', 'User'. Default is 'User'
         */
        mode?: pulumi.Input<string | enums.Mode>;
        /**
         * Unique name of the agent pool profile in the context of the subscription and resource group.
         */
        name?: pulumi.Input<string>;
        /**
         * The version of node image
         */
        nodeImageVersion?: pulumi.Input<string>;
        /**
         * NodeLabels - Agent pool node labels to be persisted across all nodes in agent pool.
         */
        nodeLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * NodeTaints - Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
         */
        nodeTaints?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * OsType - OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux. Possible values include: 'Linux', 'Windows'
         */
        osType?: pulumi.Input<string | enums.OsType>;
        /**
         * VmSize - The size of the agent pool VMs.
         */
        vmSize?: pulumi.Input<string>;
    }
    /**
     * controlPlaneProfileArgsProvideDefaults sets the appropriate defaults for ControlPlaneProfileArgs
     */
    export function controlPlaneProfileArgsProvideDefaults(val: ControlPlaneProfileArgs): ControlPlaneProfileArgs {
        return {
            ...val,
            count: (val.count) ?? 1,
            mode: (val.mode) ?? "User",
        };
    }

    /**
     * Configurations for provisioning the cluster with HTTP proxy servers.
     */
    export interface HttpProxyConfigArgs {
        /**
         * The HTTP proxy server endpoint to use.
         */
        httpProxy?: pulumi.Input<string>;
        /**
         * The HTTPS proxy server endpoint to use.
         */
        httpsProxy?: pulumi.Input<string>;
        /**
         * The endpoints that should not go through proxy.
         */
        noProxy?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Password to use for connecting to proxy server
         */
        password?: pulumi.Input<string>;
        /**
         * Alternative CA cert to use for connecting to proxy servers.
         */
        trustedCa?: pulumi.Input<string>;
        /**
         * Username to use for connecting to proxy server
         */
        username?: pulumi.Input<string>;
    }

    /**
     * LinuxProfile - Profile for Linux VMs in the container service cluster.
     */
    export interface LinuxProfilePropertiesArgs {
        /**
         * AdminUsername - The administrator username to use for Linux VMs.
         */
        adminUsername?: pulumi.Input<string>;
        /**
         * SSH - SSH configuration for Linux-based VMs running on Azure.
         */
        ssh?: pulumi.Input<LinuxProfilePropertiesSshArgs>;
    }

    export interface LinuxProfilePropertiesPublicKeysArgs {
        /**
         * KeyData - Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.
         */
        keyData?: pulumi.Input<string>;
    }

    /**
     * SSH - SSH configuration for Linux-based VMs running on Azure.
     */
    export interface LinuxProfilePropertiesSshArgs {
        /**
         * PublicKeys - The list of SSH public keys used to authenticate with Linux-based VMs. Only expect one key specified.
         */
        publicKeys?: pulumi.Input<pulumi.Input<LinuxProfilePropertiesPublicKeysArgs>[]>;
    }

    /**
     * LoadBalancerProfile - Profile of the cluster load balancer.
     */
    export interface LoadBalancerProfileArgs {
        /**
         * AvailabilityZones - The list of Availability zones to use for nodes. Datacenter racks modelled as zones
         */
        availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The underlying cloud infra provider properties.
         */
        cloudProviderProfile?: pulumi.Input<CloudProviderProfileArgs>;
        /**
         * Count - Number of agents to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
         */
        count?: pulumi.Input<number>;
        /**
         * Profile for Linux VMs in the container service cluster.
         */
        linuxProfile?: pulumi.Input<LinuxProfilePropertiesArgs>;
        /**
         * The maximum number of nodes for auto-scaling
         */
        maxCount?: pulumi.Input<number>;
        /**
         * The maximum number of pods that can run on a node.
         */
        maxPods?: pulumi.Input<number>;
        /**
         * The minimum number of nodes for auto-scaling
         */
        minCount?: pulumi.Input<number>;
        /**
         * Mode - AgentPoolMode represents mode of an agent pool. Possible values include: 'System', 'LB', 'User'. Default is 'User'
         */
        mode?: pulumi.Input<string | enums.Mode>;
        /**
         * Unique name of the agent pool profile in the context of the subscription and resource group.
         */
        name?: pulumi.Input<string>;
        /**
         * The version of node image
         */
        nodeImageVersion?: pulumi.Input<string>;
        /**
         * NodeLabels - Agent pool node labels to be persisted across all nodes in agent pool.
         */
        nodeLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * NodeTaints - Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
         */
        nodeTaints?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * OsType - OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux. Possible values include: 'Linux', 'Windows'
         */
        osType?: pulumi.Input<string | enums.OsType>;
        /**
         * VmSize - The size of the agent pool VMs.
         */
        vmSize?: pulumi.Input<string>;
    }
    /**
     * loadBalancerProfileArgsProvideDefaults sets the appropriate defaults for LoadBalancerProfileArgs
     */
    export function loadBalancerProfileArgsProvideDefaults(val: LoadBalancerProfileArgs): LoadBalancerProfileArgs {
        return {
            ...val,
            count: (val.count) ?? 1,
            mode: (val.mode) ?? "User",
        };
    }

    /**
     * Agent pool profile along with a name parameter
     */
    export interface NamedAgentPoolProfileArgs {
        /**
         * AvailabilityZones - The list of Availability zones to use for nodes. Datacenter racks modelled as zones
         */
        availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The underlying cloud infra provider properties.
         */
        cloudProviderProfile?: pulumi.Input<CloudProviderProfileArgs>;
        /**
         * Count - Number of agents to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
         */
        count?: pulumi.Input<number>;
        /**
         * The maximum number of nodes for auto-scaling
         */
        maxCount?: pulumi.Input<number>;
        /**
         * The maximum number of pods that can run on a node.
         */
        maxPods?: pulumi.Input<number>;
        /**
         * The minimum number of nodes for auto-scaling
         */
        minCount?: pulumi.Input<number>;
        /**
         * Mode - AgentPoolMode represents mode of an agent pool. Possible values include: 'System', 'LB', 'User'. Default is 'User'
         */
        mode?: pulumi.Input<string | enums.Mode>;
        /**
         * Unique name of the agent pool profile in the context of the subscription and resource group.
         */
        name?: pulumi.Input<string>;
        /**
         * The version of node image
         */
        nodeImageVersion?: pulumi.Input<string>;
        /**
         * NodeLabels - Agent pool node labels to be persisted across all nodes in agent pool.
         */
        nodeLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * NodeTaints - Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
         */
        nodeTaints?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * OsType - OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux. Possible values include: 'Linux', 'Windows'
         */
        osType?: pulumi.Input<string | enums.OsType>;
        /**
         * VmSize - The size of the agent pool VMs.
         */
        vmSize?: pulumi.Input<string>;
    }
    /**
     * namedAgentPoolProfileArgsProvideDefaults sets the appropriate defaults for NamedAgentPoolProfileArgs
     */
    export function namedAgentPoolProfileArgsProvideDefaults(val: NamedAgentPoolProfileArgs): NamedAgentPoolProfileArgs {
        return {
            ...val,
            count: (val.count) ?? 1,
            mode: (val.mode) ?? "User",
        };
    }

    /**
     * NetworkProfile - Profile of network configuration.
     */
    export interface NetworkProfileArgs {
        /**
         * DNSServiceIP - An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
         */
        dnsServiceIP?: pulumi.Input<string>;
        /**
         * LoadBalancerProfile - Profile of the cluster load balancer.
         */
        loadBalancerProfile?: pulumi.Input<LoadBalancerProfileArgs>;
        /**
         * LoadBalancerSku - The load balancer sku for the provisioned cluster. Possible values: 'unstacked-haproxy', 'stacked-kube-vip', 'stacked-metallb', 'unmanaged'. The default is 'unmanaged'.
         */
        loadBalancerSku?: pulumi.Input<string | enums.LoadBalancerSku>;
        /**
         * NetworkPolicy - Network policy used for building Kubernetes network. Possible values include: 'calico', 'flannel'. Default is 'calico'
         */
        networkPolicy?: pulumi.Input<string | enums.NetworkPolicy>;
        /**
         * PodCidr - A CIDR notation IP range from which to assign pod IPs when kubenet is used.
         */
        podCidr?: pulumi.Input<string>;
        /**
         * The CIDR notation IP ranges from which to assign pod IPs. One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
         */
        podCidrs?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * ServiceCidr - A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
         */
        serviceCidr?: pulumi.Input<string>;
        /**
         * The CIDR notation IP ranges from which to assign service cluster IPs. One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking. They must not overlap with any Subnet IP ranges.
         */
        serviceCidrs?: pulumi.Input<pulumi.Input<string>[]>;
    }
    /**
     * networkProfileArgsProvideDefaults sets the appropriate defaults for NetworkProfileArgs
     */
    export function networkProfileArgsProvideDefaults(val: NetworkProfileArgs): NetworkProfileArgs {
        return {
            ...val,
            loadBalancerProfile: (val.loadBalancerProfile ? pulumi.output(val.loadBalancerProfile).apply(loadBalancerProfileArgsProvideDefaults) : undefined),
            loadBalancerSku: (val.loadBalancerSku) ?? "unmanaged",
            networkPolicy: (val.networkPolicy) ?? "calico",
        };
    }

    /**
     * Identity for the Provisioned cluster.
     */
    export interface ProvisionedClusterIdentityArgs {
        /**
         * The type of identity used for the provisioned cluster. The type SystemAssigned, includes a system created identity. The type None means no identity is assigned to the provisioned cluster.
         */
        type: pulumi.Input<enums.ResourceIdentityType>;
    }

    /**
     * All properties of the provisioned cluster
     */
    export interface ProvisionedClustersAllPropertiesArgs {
        /**
         * AAD profile for the provisioned cluster.
         */
        aadProfile?: pulumi.Input<AADProfileArgs>;
        /**
         * AddonProfiles - Profile of managed cluster add-on.
         */
        addonProfiles?: pulumi.Input<{[key: string]: pulumi.Input<AddonProfilesArgs>}>;
        /**
         * The agent pools of the cluster.
         */
        agentPoolProfiles?: pulumi.Input<pulumi.Input<NamedAgentPoolProfileArgs>[]>;
        /**
         * The underlying cloud infra provider properties.
         */
        cloudProviderProfile?: pulumi.Input<CloudProviderProfileArgs>;
        /**
         * ControlPlane - ControlPlane Configuration
         */
        controlPlane?: pulumi.Input<ControlPlaneProfileArgs>;
        /**
         * EnableRBAC - Whether to enable Kubernetes Role-Based Access Control.
         */
        enableRbac?: pulumi.Input<boolean>;
        /**
         * Additional features specs like Arc Agent Onboarding.
         */
        features?: pulumi.Input<ProvisionedClustersCommonPropertiesFeaturesArgs>;
        /**
         * HttpProxyConfig - Configurations for provisioning the cluster with HTTP proxy servers.
         */
        httpProxyConfig?: pulumi.Input<HttpProxyConfigArgs>;
        /**
         * KubernetesVersion - Version of Kubernetes specified when creating the managed cluster.
         */
        kubernetesVersion?: pulumi.Input<string>;
        /**
         * LinuxProfile - The profile for Linux VMs in the Provisioned Cluster.
         */
        linuxProfile?: pulumi.Input<LinuxProfilePropertiesArgs>;
        /**
         * NetworkProfile - Profile of network configuration.
         */
        networkProfile?: pulumi.Input<NetworkProfileArgs>;
        /**
         * NodeResourceGroup - Name of the resource group containing agent pool nodes.
         */
        nodeResourceGroup?: pulumi.Input<string>;
        /**
         * WindowsProfile - Profile for Windows VMs in the Provisioned Cluster.
         */
        windowsProfile?: pulumi.Input<WindowsProfileArgs>;
    }
    /**
     * provisionedClustersAllPropertiesArgsProvideDefaults sets the appropriate defaults for ProvisionedClustersAllPropertiesArgs
     */
    export function provisionedClustersAllPropertiesArgsProvideDefaults(val: ProvisionedClustersAllPropertiesArgs): ProvisionedClustersAllPropertiesArgs {
        return {
            ...val,
            controlPlane: (val.controlPlane ? pulumi.output(val.controlPlane).apply(controlPlaneProfileArgsProvideDefaults) : undefined),
            features: (val.features ? pulumi.output(val.features).apply(provisionedClustersCommonPropertiesFeaturesArgsProvideDefaults) : undefined),
            networkProfile: (val.networkProfile ? pulumi.output(val.networkProfile).apply(networkProfileArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Additional features specs like Arc Agent Onboarding.
     */
    export interface ProvisionedClustersCommonPropertiesFeaturesArgs {
        /**
         * Arc agentry configuration for the provisioned cluster.
         */
        arcAgentProfile?: pulumi.Input<ArcAgentProfileArgs>;
    }
    /**
     * provisionedClustersCommonPropertiesFeaturesArgsProvideDefaults sets the appropriate defaults for ProvisionedClustersCommonPropertiesFeaturesArgs
     */
    export function provisionedClustersCommonPropertiesFeaturesArgsProvideDefaults(val: ProvisionedClustersCommonPropertiesFeaturesArgs): ProvisionedClustersCommonPropertiesFeaturesArgs {
        return {
            ...val,
            arcAgentProfile: (val.arcAgentProfile ? pulumi.output(val.arcAgentProfile).apply(arcAgentProfileArgsProvideDefaults) : undefined),
        };
    }

    export interface ProvisionedClustersExtendedLocationArgs {
        /**
         * The extended location name.
         */
        name?: pulumi.Input<string>;
        /**
         * The extended location type.
         */
        type?: pulumi.Input<string>;
    }

    export interface StorageSpacesExtendedLocationArgs {
        /**
         * The extended location name.
         */
        name?: pulumi.Input<string>;
        /**
         * The extended location type.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * HybridAKSStorageSpec defines the desired state of HybridAKSStorage
     */
    export interface StorageSpacesPropertiesArgs {
        hciStorageProfile?: pulumi.Input<StorageSpacesPropertiesHciStorageProfileArgs>;
        /**
         * HybridAKSStorageStatus defines the observed state of HybridAKSStorage
         */
        status?: pulumi.Input<StorageSpacesPropertiesStatusArgs>;
        vmwareStorageProfile?: pulumi.Input<StorageSpacesPropertiesVmwareStorageProfileArgs>;
    }

    export interface StorageSpacesPropertiesErrorArgs {
        code?: pulumi.Input<string>;
        message?: pulumi.Input<string>;
    }

    export interface StorageSpacesPropertiesHciStorageProfileArgs {
        /**
         * Resource group in MOC(Microsoft On-premises Cloud)
         */
        mocGroup?: pulumi.Input<string>;
        /**
         * Location in MOC(Microsoft On-premises Cloud)
         */
        mocLocation?: pulumi.Input<string>;
        /**
         * Name of the storage container in MOC(Microsoft On-premises Cloud)
         */
        mocStorageContainer?: pulumi.Input<string>;
    }

    /**
     * Contains Provisioning errors
     */
    export interface StorageSpacesPropertiesProvisioningStatusArgs {
        error?: pulumi.Input<StorageSpacesPropertiesErrorArgs>;
        operationId?: pulumi.Input<string>;
        /**
         * Phase represents the current phase of cluster actuation. E.g. Pending, Running, Terminating, Failed etc.
         */
        phase?: pulumi.Input<string>;
        status?: pulumi.Input<string>;
    }

    /**
     * HybridAKSStorageStatus defines the observed state of HybridAKSStorage
     */
    export interface StorageSpacesPropertiesStatusArgs {
        /**
         * Contains Provisioning errors
         */
        provisioningStatus?: pulumi.Input<StorageSpacesPropertiesProvisioningStatusArgs>;
    }

    export interface StorageSpacesPropertiesVmwareStorageProfileArgs {
        /**
         * Name of the datacenter in VSphere
         */
        datacenter?: pulumi.Input<string>;
        /**
         * Name of the datastore in VSphere
         */
        datastore?: pulumi.Input<string>;
        /**
         * Name of the folder in VSphere
         */
        folder?: pulumi.Input<string>;
        /**
         * Name of the resource pool in VSphere
         */
        resourcePool?: pulumi.Input<string>;
    }

    export interface VirtualNetworksExtendedLocationArgs {
        /**
         * The extended location name.
         */
        name?: pulumi.Input<string>;
        /**
         * The extended location type.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * HybridAKSNetworkSpec defines the desired state of HybridAKSNetwork
     */
    export interface VirtualNetworksPropertiesArgs {
        /**
         * Address of the DNS servers associated with the network
         */
        dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Address of the Gateway associated with the network
         */
        gateway?: pulumi.Input<string>;
        infraVnetProfile?: pulumi.Input<VirtualNetworksPropertiesInfraVnetProfileArgs>;
        /**
         * IP Address Prefix of the network
         */
        ipAddressPrefix?: pulumi.Input<string>;
        /**
         * Virtual IP Pool for Kubernetes
         */
        vipPool?: pulumi.Input<pulumi.Input<VirtualNetworksPropertiesVipPoolArgs>[]>;
        /**
         * IP Pool for Virtual Machines
         */
        vmipPool?: pulumi.Input<pulumi.Input<VirtualNetworksPropertiesVmipPoolArgs>[]>;
    }

    /**
     * Infra network profile for HCI platform
     */
    export interface VirtualNetworksPropertiesHciArgs {
        /**
         * Resource group in MOC(Microsoft On-premises Cloud)
         */
        mocGroup?: pulumi.Input<string>;
        /**
         * Location in MOC(Microsoft On-premises Cloud)
         */
        mocLocation?: pulumi.Input<string>;
        /**
         * Virtual Network name in MOC(Microsoft On-premises Cloud)
         */
        mocVnetName?: pulumi.Input<string>;
    }

    export interface VirtualNetworksPropertiesInfraVnetProfileArgs {
        /**
         * Infra network profile for HCI platform
         */
        hci?: pulumi.Input<VirtualNetworksPropertiesHciArgs>;
        /**
         * Infra network profile for the NetworkCloud platform
         */
        networkCloud?: pulumi.Input<VirtualNetworksPropertiesNetworkCloudArgs>;
        /**
         * Infra network profile for VMware platform
         */
        vmware?: pulumi.Input<VirtualNetworksPropertiesVmwareArgs>;
    }

    /**
     * Infra network profile for the NetworkCloud platform
     */
    export interface VirtualNetworksPropertiesNetworkCloudArgs {
        /**
         * The ARM ID of Network Cloud Network Resource to Associate with this VirtualNetwork
         */
        networkId?: pulumi.Input<string>;
    }

    export interface VirtualNetworksPropertiesVipPoolArgs {
        /**
         * Ending IP address for the IP Pool
         */
        endIP?: pulumi.Input<string>;
        /**
         * Starting IP address for the IP Pool
         */
        startIP?: pulumi.Input<string>;
    }

    export interface VirtualNetworksPropertiesVmipPoolArgs {
        /**
         * Ending IP address for the IP Pool
         */
        endIP?: pulumi.Input<string>;
        /**
         * Starting IP address for the IP Pool
         */
        startIP?: pulumi.Input<string>;
    }

    /**
     * Infra network profile for VMware platform
     */
    export interface VirtualNetworksPropertiesVmwareArgs {
        /**
         * Name of the network segment in VSphere
         */
        segmentName?: pulumi.Input<string>;
    }

    /**
     * WindowsProfile - Profile for Windows VMs in the container service cluster.
     */
    export interface WindowsProfileArgs {
        /**
         * AdminPassword - Specifies the password of the administrator account. <br><br> **Minimum-length:** 8 characters <br><br> **Max-length:** 123 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!"
         */
        adminPassword?: pulumi.Input<string>;
        /**
         * AdminUsername - Specifies the name of the administrator account. <br><br> **restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length:** 1 character <br><br> **Max-length:** 20 characters
         */
        adminUsername?: pulumi.Input<string>;
        /**
         * EnableCSIProxy - Whether to enable CSI proxy.
         */
        enableCsiProxy?: pulumi.Input<boolean>;
        /**
         * LicenseType - The licenseType to use for Windows VMs. Windows_Server is used to enable Azure Hybrid User Benefits for Windows VMs. Possible values include: 'None', 'Windows_Server'
         */
        licenseType?: pulumi.Input<string | enums.LicenseType>;
    }

    export namespace v20220501preview {
        /**
         * AAD Profile specifies attributes for Azure Active Directory integration.
         */
        export interface AADProfileArgs {
            /**
             * The list of AAD group object IDs that will have admin role of the cluster.
             */
            adminGroupObjectIDs?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The client AAD application ID.
             */
            clientAppID?: pulumi.Input<string>;
            /**
             * Whether to enable Azure RBAC for Kubernetes authorization.
             */
            enableAzureRbac?: pulumi.Input<boolean>;
            /**
             * Whether to enable managed AAD.
             */
            managed?: pulumi.Input<boolean>;
            /**
             * The server AAD application ID.
             */
            serverAppID?: pulumi.Input<string>;
            /**
             * The server AAD application secret.
             */
            serverAppSecret?: pulumi.Input<string>;
            /**
             * The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription.
             */
            tenantID?: pulumi.Input<string>;
        }

        /**
         * Addon configurations
         */
        export interface AddonProfilesArgs {
            /**
             * Config - Key-value pairs for configuring an add-on.
             */
            config?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Enabled - Whether the add-on is enabled or not.
             */
            enabled?: pulumi.Input<boolean>;
        }

        export interface AgentPoolExtendedLocationArgs {
            /**
             * The extended location name.
             */
            name?: pulumi.Input<string>;
            /**
             * The extended location type.
             */
            type?: pulumi.Input<string>;
        }

        export interface AgentPoolProvisioningStatusErrorArgs {
            code?: pulumi.Input<string>;
            message?: pulumi.Input<string>;
        }

        /**
         * Contains Provisioning errors
         */
        export interface AgentPoolProvisioningStatusProvisioningStatusArgs {
            error?: pulumi.Input<v20220501preview.AgentPoolProvisioningStatusErrorArgs>;
            operationId?: pulumi.Input<string>;
            /**
             * Phase represents the current phase of cluster actuation. E.g. Pending, Running, Terminating, Failed etc.
             */
            phase?: pulumi.Input<string>;
            status?: pulumi.Input<string>;
        }

        /**
         * HybridAKSNodePoolStatus defines the observed state of HybridAKSNodePool
         */
        export interface AgentPoolProvisioningStatusStatusArgs {
            /**
             * ErrorMessage - Error messages during creation of cluster
             */
            errorMessage?: pulumi.Input<string>;
            /**
             * Contains Provisioning errors
             */
            provisioningStatus?: pulumi.Input<v20220501preview.AgentPoolProvisioningStatusProvisioningStatusArgs>;
            /**
             * Total number of ready machines targeted by this deployment.
             */
            readyReplicas?: pulumi.Input<number>;
            /**
             * Total number of non-terminated machines targeted by this deployment
             */
            replicas?: pulumi.Input<number>;
        }

        /**
         * Defines the Arc Agent properties for the Provisioned clusters.
         */
        export interface ArcAgentProfileArgs {
            /**
             * Indicates whether the Arc agents on the provisioned clusters be upgraded automatically to the latest version. Defaults to Enabled.
             */
            agentAutoUpgrade?: pulumi.Input<string | enums.v20220501preview.AutoUpgradeOptions>;
            /**
             * Version of the Arc agents to be installed on the provisioned Provisioned cluster resource
             */
            agentVersion?: pulumi.Input<string>;
        }
        /**
         * arcAgentProfileArgsProvideDefaults sets the appropriate defaults for ArcAgentProfileArgs
         */
        export function arcAgentProfileArgsProvideDefaults(val: ArcAgentProfileArgs): ArcAgentProfileArgs {
            return {
                ...val,
                agentAutoUpgrade: (val.agentAutoUpgrade) ?? "Enabled",
            };
        }

        /**
         * CloudProviderProfile - The underlying cloud infra provider properties.
         */
        export interface CloudProviderProfileArgs {
            /**
             * InfraNetworkProfile - List of infra network profiles for the provisioned cluster
             */
            infraNetworkProfile?: pulumi.Input<v20220501preview.CloudProviderProfileInfraNetworkProfileArgs>;
            /**
             * InfraStorageProfile - List of infra storage profiles for the provisioned cluster
             */
            infraStorageProfile?: pulumi.Input<v20220501preview.CloudProviderProfileInfraStorageProfileArgs>;
        }

        /**
         * InfraNetworkProfile - List of infra network profiles for the provisioned cluster
         */
        export interface CloudProviderProfileInfraNetworkProfileArgs {
            /**
             * Array of references to azure resource corresponding to the new HybridAKSNetwork object e.g. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridContainerService/virtualNetworks/{virtualNetworkName}
             */
            vnetSubnetIds?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * InfraStorageProfile - List of infra storage profiles for the provisioned cluster
         */
        export interface CloudProviderProfileInfraStorageProfileArgs {
            /**
             * Reference to azure resource corresponding to the new HybridAKSStorage object e.g. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridContainerService/storageSpaces/{storageSpaceName}
             */
            storageSpaceIds?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * API server endpoint for the control plane
         */
        export interface ControlPlaneEndpointProfileControlPlaneEndpointArgs {
            /**
             * Host IP address for API server
             */
            hostIP?: pulumi.Input<string>;
            /**
             * Port for the API server
             */
            port?: pulumi.Input<string>;
        }

        /**
         * ControlPlaneProfile - The control plane properties for the provisioned cluster.
         */
        export interface ControlPlaneProfileArgs {
            /**
             * AvailabilityZones - The list of Availability zones to use for nodes. Datacenter racks modelled as zones
             */
            availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The underlying cloud infra provider properties.
             */
            cloudProviderProfile?: pulumi.Input<v20220501preview.CloudProviderProfileArgs>;
            /**
             * API server endpoint for the control plane
             */
            controlPlaneEndpoint?: pulumi.Input<v20220501preview.ControlPlaneEndpointProfileControlPlaneEndpointArgs>;
            /**
             * Count - Number of agents to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
             */
            count?: pulumi.Input<number>;
            /**
             * Profile for Linux VMs in the container service cluster.
             */
            linuxProfile?: pulumi.Input<v20220501preview.LinuxProfilePropertiesArgs>;
            /**
             * The maximum number of nodes for auto-scaling
             */
            maxCount?: pulumi.Input<number>;
            /**
             * The maximum number of pods that can run on a node.
             */
            maxPods?: pulumi.Input<number>;
            /**
             * The minimum number of nodes for auto-scaling
             */
            minCount?: pulumi.Input<number>;
            /**
             * Mode - AgentPoolMode represents mode of an agent pool. Possible values include: 'System', 'LB', 'User'. Default is 'User'
             */
            mode?: pulumi.Input<string | enums.v20220501preview.Mode>;
            /**
             * Unique name of the agent pool profile in the context of the subscription and resource group.
             */
            name?: pulumi.Input<string>;
            /**
             * The version of node image
             */
            nodeImageVersion?: pulumi.Input<string>;
            /**
             * NodeLabels - Agent pool node labels to be persisted across all nodes in agent pool.
             */
            nodeLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * NodeTaints - Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
             */
            nodeTaints?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * OsType - OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux. Possible values include: 'Linux', 'Windows'
             */
            osType?: pulumi.Input<string | enums.v20220501preview.OsType>;
            /**
             * VmSize - The size of the agent pool VMs.
             */
            vmSize?: pulumi.Input<string>;
        }
        /**
         * controlPlaneProfileArgsProvideDefaults sets the appropriate defaults for ControlPlaneProfileArgs
         */
        export function controlPlaneProfileArgsProvideDefaults(val: ControlPlaneProfileArgs): ControlPlaneProfileArgs {
            return {
                ...val,
                count: (val.count) ?? 1,
                mode: (val.mode) ?? "User",
                osType: (val.osType) ?? "Linux",
            };
        }

        /**
         * Configurations for provisioning the cluster with HTTP proxy servers.
         */
        export interface HttpProxyConfigArgs {
            /**
             * The HTTP proxy server endpoint to use.
             */
            httpProxy?: pulumi.Input<string>;
            /**
             * The HTTPS proxy server endpoint to use.
             */
            httpsProxy?: pulumi.Input<string>;
            /**
             * The endpoints that should not go through proxy.
             */
            noProxy?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Password to use for connecting to proxy server
             */
            password?: pulumi.Input<string>;
            /**
             * Alternative CA cert to use for connecting to proxy servers.
             */
            trustedCa?: pulumi.Input<string>;
            /**
             * Username to use for connecting to proxy server
             */
            username?: pulumi.Input<string>;
        }

        /**
         * LinuxProfile - Profile for Linux VMs in the container service cluster.
         */
        export interface LinuxProfilePropertiesArgs {
            /**
             * AdminUsername - The administrator username to use for Linux VMs.
             */
            adminUsername?: pulumi.Input<string>;
            /**
             * SSH - SSH configuration for Linux-based VMs running on Azure.
             */
            ssh?: pulumi.Input<v20220501preview.LinuxProfilePropertiesSshArgs>;
        }

        export interface LinuxProfilePropertiesPublicKeysArgs {
            /**
             * KeyData - Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.
             */
            keyData?: pulumi.Input<string>;
        }

        /**
         * SSH - SSH configuration for Linux-based VMs running on Azure.
         */
        export interface LinuxProfilePropertiesSshArgs {
            /**
             * PublicKeys - The list of SSH public keys used to authenticate with Linux-based VMs. Only expect one key specified.
             */
            publicKeys?: pulumi.Input<pulumi.Input<v20220501preview.LinuxProfilePropertiesPublicKeysArgs>[]>;
        }

        /**
         * LoadBalancerProfile - Profile of the cluster load balancer.
         */
        export interface LoadBalancerProfileArgs {
            /**
             * AvailabilityZones - The list of Availability zones to use for nodes. Datacenter racks modelled as zones
             */
            availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The underlying cloud infra provider properties.
             */
            cloudProviderProfile?: pulumi.Input<v20220501preview.CloudProviderProfileArgs>;
            /**
             * Count - Number of agents to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
             */
            count?: pulumi.Input<number>;
            /**
             * Profile for Linux VMs in the container service cluster.
             */
            linuxProfile?: pulumi.Input<v20220501preview.LinuxProfilePropertiesArgs>;
            /**
             * The maximum number of nodes for auto-scaling
             */
            maxCount?: pulumi.Input<number>;
            /**
             * The maximum number of pods that can run on a node.
             */
            maxPods?: pulumi.Input<number>;
            /**
             * The minimum number of nodes for auto-scaling
             */
            minCount?: pulumi.Input<number>;
            /**
             * Mode - AgentPoolMode represents mode of an agent pool. Possible values include: 'System', 'LB', 'User'. Default is 'User'
             */
            mode?: pulumi.Input<string | enums.v20220501preview.Mode>;
            /**
             * Unique name of the agent pool profile in the context of the subscription and resource group.
             */
            name?: pulumi.Input<string>;
            /**
             * The version of node image
             */
            nodeImageVersion?: pulumi.Input<string>;
            /**
             * NodeLabels - Agent pool node labels to be persisted across all nodes in agent pool.
             */
            nodeLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * NodeTaints - Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
             */
            nodeTaints?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * OsType - OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux. Possible values include: 'Linux', 'Windows'
             */
            osType?: pulumi.Input<string | enums.v20220501preview.OsType>;
            /**
             * VmSize - The size of the agent pool VMs.
             */
            vmSize?: pulumi.Input<string>;
        }
        /**
         * loadBalancerProfileArgsProvideDefaults sets the appropriate defaults for LoadBalancerProfileArgs
         */
        export function loadBalancerProfileArgsProvideDefaults(val: LoadBalancerProfileArgs): LoadBalancerProfileArgs {
            return {
                ...val,
                count: (val.count) ?? 1,
                mode: (val.mode) ?? "User",
                osType: (val.osType) ?? "Linux",
            };
        }

        /**
         * Agent pool profile along with a name parameter
         */
        export interface NamedAgentPoolProfileArgs {
            /**
             * AvailabilityZones - The list of Availability zones to use for nodes. Datacenter racks modelled as zones
             */
            availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The underlying cloud infra provider properties.
             */
            cloudProviderProfile?: pulumi.Input<v20220501preview.CloudProviderProfileArgs>;
            /**
             * Count - Number of agents to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
             */
            count?: pulumi.Input<number>;
            /**
             * The maximum number of nodes for auto-scaling
             */
            maxCount?: pulumi.Input<number>;
            /**
             * The maximum number of pods that can run on a node.
             */
            maxPods?: pulumi.Input<number>;
            /**
             * The minimum number of nodes for auto-scaling
             */
            minCount?: pulumi.Input<number>;
            /**
             * Mode - AgentPoolMode represents mode of an agent pool. Possible values include: 'System', 'LB', 'User'. Default is 'User'
             */
            mode?: pulumi.Input<string | enums.v20220501preview.Mode>;
            /**
             * Unique name of the agent pool profile in the context of the subscription and resource group.
             */
            name?: pulumi.Input<string>;
            /**
             * The version of node image
             */
            nodeImageVersion?: pulumi.Input<string>;
            /**
             * NodeLabels - Agent pool node labels to be persisted across all nodes in agent pool.
             */
            nodeLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * NodeTaints - Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
             */
            nodeTaints?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * OsType - OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux. Possible values include: 'Linux', 'Windows'
             */
            osType?: pulumi.Input<string | enums.v20220501preview.OsType>;
            /**
             * VmSize - The size of the agent pool VMs.
             */
            vmSize?: pulumi.Input<string>;
        }
        /**
         * namedAgentPoolProfileArgsProvideDefaults sets the appropriate defaults for NamedAgentPoolProfileArgs
         */
        export function namedAgentPoolProfileArgsProvideDefaults(val: NamedAgentPoolProfileArgs): NamedAgentPoolProfileArgs {
            return {
                ...val,
                count: (val.count) ?? 1,
                mode: (val.mode) ?? "User",
                osType: (val.osType) ?? "Linux",
            };
        }

        /**
         * NetworkProfile - Profile of network configuration.
         */
        export interface NetworkProfileArgs {
            /**
             * DNSServiceIP - An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
             */
            dnsServiceIP?: pulumi.Input<string>;
            /**
             * LoadBalancerProfile - Profile of the cluster load balancer.
             */
            loadBalancerProfile?: pulumi.Input<v20220501preview.LoadBalancerProfileArgs>;
            /**
             * LoadBalancerSku - The load balancer sku for the provisioned cluster. Possible values: 'unstacked-haproxy', 'stacked-kube-vip', 'stacked-metallb', 'unmanaged'. The default is 'unmanaged'.
             */
            loadBalancerSku?: pulumi.Input<string | enums.v20220501preview.LoadBalancerSku>;
            /**
             * NetworkPolicy - Network policy used for building Kubernetes network. Possible values include: 'calico', 'flannel'. Default is 'calico'
             */
            networkPolicy?: pulumi.Input<string | enums.v20220501preview.NetworkPolicy>;
            /**
             * PodCidr - A CIDR notation IP range from which to assign pod IPs when kubenet is used.
             */
            podCidr?: pulumi.Input<string>;
            /**
             * The CIDR notation IP ranges from which to assign pod IPs. One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
             */
            podCidrs?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * ServiceCidr - A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
             */
            serviceCidr?: pulumi.Input<string>;
            /**
             * The CIDR notation IP ranges from which to assign service cluster IPs. One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking. They must not overlap with any Subnet IP ranges.
             */
            serviceCidrs?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * networkProfileArgsProvideDefaults sets the appropriate defaults for NetworkProfileArgs
         */
        export function networkProfileArgsProvideDefaults(val: NetworkProfileArgs): NetworkProfileArgs {
            return {
                ...val,
                loadBalancerProfile: (val.loadBalancerProfile ? pulumi.output(val.loadBalancerProfile).apply(v20220501preview.loadBalancerProfileArgsProvideDefaults) : undefined),
                loadBalancerSku: (val.loadBalancerSku) ?? "unmanaged",
                networkPolicy: (val.networkPolicy) ?? "calico",
            };
        }

        /**
         * Identity for the Provisioned cluster.
         */
        export interface ProvisionedClusterIdentityArgs {
            /**
             * The type of identity used for the provisioned cluster. The type SystemAssigned, includes a system created identity. The type None means no identity is assigned to the provisioned cluster.
             */
            type: pulumi.Input<enums.v20220501preview.ResourceIdentityType>;
        }

        /**
         * All properties of the provisioned cluster
         */
        export interface ProvisionedClustersAllPropertiesArgs {
            /**
             * AAD profile for the provisioned cluster.
             */
            aadProfile?: pulumi.Input<v20220501preview.AADProfileArgs>;
            /**
             * AddonProfiles - Profile of managed cluster add-on.
             */
            addonProfiles?: pulumi.Input<{[key: string]: pulumi.Input<v20220501preview.AddonProfilesArgs>}>;
            /**
             * The agent pools of the cluster.
             */
            agentPoolProfiles?: pulumi.Input<pulumi.Input<v20220501preview.NamedAgentPoolProfileArgs>[]>;
            /**
             * The underlying cloud infra provider properties.
             */
            cloudProviderProfile?: pulumi.Input<v20220501preview.CloudProviderProfileArgs>;
            /**
             * ControlPlane - ControlPlane Configuration
             */
            controlPlane?: pulumi.Input<v20220501preview.ControlPlaneProfileArgs>;
            /**
             * EnableRBAC - Whether to enable Kubernetes Role-Based Access Control.
             */
            enableRbac?: pulumi.Input<boolean>;
            /**
             * Additional features specs like Arc Agent Onboarding.
             */
            features?: pulumi.Input<v20220501preview.ProvisionedClustersCommonPropertiesFeaturesArgs>;
            /**
             * HttpProxyConfig - Configurations for provisioning the cluster with HTTP proxy servers.
             */
            httpProxyConfig?: pulumi.Input<v20220501preview.HttpProxyConfigArgs>;
            /**
             * KubernetesVersion - Version of Kubernetes specified when creating the managed cluster.
             */
            kubernetesVersion?: pulumi.Input<string>;
            /**
             * LinuxProfile - The profile for Linux VMs in the Provisioned Cluster.
             */
            linuxProfile?: pulumi.Input<v20220501preview.LinuxProfilePropertiesArgs>;
            /**
             * NetworkProfile - Profile of network configuration.
             */
            networkProfile?: pulumi.Input<v20220501preview.NetworkProfileArgs>;
            /**
             * NodeResourceGroup - Name of the resource group containing agent pool nodes.
             */
            nodeResourceGroup?: pulumi.Input<string>;
            /**
             * WindowsProfile - Profile for Windows VMs in the Provisioned Cluster.
             */
            windowsProfile?: pulumi.Input<v20220501preview.WindowsProfileArgs>;
        }
        /**
         * provisionedClustersAllPropertiesArgsProvideDefaults sets the appropriate defaults for ProvisionedClustersAllPropertiesArgs
         */
        export function provisionedClustersAllPropertiesArgsProvideDefaults(val: ProvisionedClustersAllPropertiesArgs): ProvisionedClustersAllPropertiesArgs {
            return {
                ...val,
                controlPlane: (val.controlPlane ? pulumi.output(val.controlPlane).apply(v20220501preview.controlPlaneProfileArgsProvideDefaults) : undefined),
                features: (val.features ? pulumi.output(val.features).apply(v20220501preview.provisionedClustersCommonPropertiesFeaturesArgsProvideDefaults) : undefined),
                networkProfile: (val.networkProfile ? pulumi.output(val.networkProfile).apply(v20220501preview.networkProfileArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Additional features specs like Arc Agent Onboarding.
         */
        export interface ProvisionedClustersCommonPropertiesFeaturesArgs {
            /**
             * Arc agentry configuration for the provisioned cluster.
             */
            arcAgentProfile?: pulumi.Input<v20220501preview.ArcAgentProfileArgs>;
        }
        /**
         * provisionedClustersCommonPropertiesFeaturesArgsProvideDefaults sets the appropriate defaults for ProvisionedClustersCommonPropertiesFeaturesArgs
         */
        export function provisionedClustersCommonPropertiesFeaturesArgsProvideDefaults(val: ProvisionedClustersCommonPropertiesFeaturesArgs): ProvisionedClustersCommonPropertiesFeaturesArgs {
            return {
                ...val,
                arcAgentProfile: (val.arcAgentProfile ? pulumi.output(val.arcAgentProfile).apply(v20220501preview.arcAgentProfileArgsProvideDefaults) : undefined),
            };
        }

        export interface ProvisionedClustersExtendedLocationArgs {
            /**
             * The extended location name.
             */
            name?: pulumi.Input<string>;
            /**
             * The extended location type.
             */
            type?: pulumi.Input<string>;
        }

        /**
         * WindowsProfile - Profile for Windows VMs in the container service cluster.
         */
        export interface WindowsProfileArgs {
            /**
             * AdminPassword - Specifies the password of the administrator account. <br><br> **Minimum-length:** 8 characters <br><br> **Max-length:** 123 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!"
             */
            adminPassword?: pulumi.Input<string>;
            /**
             * AdminUsername - Specifies the name of the administrator account. <br><br> **restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length:** 1 character <br><br> **Max-length:** 20 characters
             */
            adminUsername?: pulumi.Input<string>;
            /**
             * EnableCSIProxy - Whether to enable CSI proxy.
             */
            enableCsiProxy?: pulumi.Input<boolean>;
            /**
             * LicenseType - The licenseType to use for Windows VMs. Windows_Server is used to enable Azure Hybrid User Benefits for Windows VMs. Possible values include: 'None', 'Windows_Server'
             */
            licenseType?: pulumi.Input<string | enums.v20220501preview.LicenseType>;
        }

    }

    export namespace v20220901preview {
        /**
         * AAD Profile specifies attributes for Azure Active Directory integration.
         */
        export interface AADProfileArgs {
            /**
             * The list of AAD group object IDs that will have admin role of the cluster.
             */
            adminGroupObjectIDs?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The client AAD application ID.
             */
            clientAppID?: pulumi.Input<string>;
            /**
             * Whether to enable Azure RBAC for Kubernetes authorization.
             */
            enableAzureRbac?: pulumi.Input<boolean>;
            /**
             * Whether to enable managed AAD.
             */
            managed?: pulumi.Input<boolean>;
            /**
             * The server AAD application ID.
             */
            serverAppID?: pulumi.Input<string>;
            /**
             * The server AAD application secret.
             */
            serverAppSecret?: pulumi.Input<string>;
            /**
             * The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription.
             */
            tenantID?: pulumi.Input<string>;
        }

        /**
         * Addon configurations
         */
        export interface AddonProfilesArgs {
            /**
             * Config - Key-value pairs for configuring an add-on.
             */
            config?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Enabled - Whether the add-on is enabled or not.
             */
            enabled?: pulumi.Input<boolean>;
        }

        export interface AgentPoolExtendedLocationArgs {
            /**
             * The extended location name.
             */
            name?: pulumi.Input<string>;
            /**
             * The extended location type.
             */
            type?: pulumi.Input<string>;
        }

        export interface AgentPoolProvisioningStatusErrorArgs {
            code?: pulumi.Input<string>;
            message?: pulumi.Input<string>;
        }

        /**
         * Contains Provisioning errors
         */
        export interface AgentPoolProvisioningStatusProvisioningStatusArgs {
            error?: pulumi.Input<v20220901preview.AgentPoolProvisioningStatusErrorArgs>;
            operationId?: pulumi.Input<string>;
            /**
             * Phase represents the current phase of cluster actuation. E.g. Pending, Running, Terminating, Failed etc.
             */
            phase?: pulumi.Input<string>;
            status?: pulumi.Input<string>;
        }

        /**
         * HybridAKSNodePoolStatus defines the observed state of HybridAKSNodePool
         */
        export interface AgentPoolProvisioningStatusStatusArgs {
            /**
             * ErrorMessage - Error messages during creation of cluster
             */
            errorMessage?: pulumi.Input<string>;
            /**
             * Contains Provisioning errors
             */
            provisioningStatus?: pulumi.Input<v20220901preview.AgentPoolProvisioningStatusProvisioningStatusArgs>;
            /**
             * Total number of ready machines targeted by this deployment.
             */
            readyReplicas?: pulumi.Input<number>;
            /**
             * Total number of non-terminated machines targeted by this deployment
             */
            replicas?: pulumi.Input<number>;
        }

        /**
         * Defines the Arc Agent properties for the Provisioned clusters.
         */
        export interface ArcAgentProfileArgs {
            /**
             * Indicates whether the Arc agents on the provisioned clusters be upgraded automatically to the latest version. Defaults to Enabled.
             */
            agentAutoUpgrade?: pulumi.Input<string | enums.v20220901preview.AutoUpgradeOptions>;
            /**
             * Version of the Arc agents to be installed on the provisioned Provisioned cluster resource
             */
            agentVersion?: pulumi.Input<string>;
        }
        /**
         * arcAgentProfileArgsProvideDefaults sets the appropriate defaults for ArcAgentProfileArgs
         */
        export function arcAgentProfileArgsProvideDefaults(val: ArcAgentProfileArgs): ArcAgentProfileArgs {
            return {
                ...val,
                agentAutoUpgrade: (val.agentAutoUpgrade) ?? "Enabled",
            };
        }

        /**
         * CloudProviderProfile - The underlying cloud infra provider properties.
         */
        export interface CloudProviderProfileArgs {
            /**
             * InfraNetworkProfile - List of infra network profiles for the provisioned cluster
             */
            infraNetworkProfile?: pulumi.Input<v20220901preview.CloudProviderProfileInfraNetworkProfileArgs>;
            /**
             * InfraStorageProfile - List of infra storage profiles for the provisioned cluster
             */
            infraStorageProfile?: pulumi.Input<v20220901preview.CloudProviderProfileInfraStorageProfileArgs>;
        }

        /**
         * InfraNetworkProfile - List of infra network profiles for the provisioned cluster
         */
        export interface CloudProviderProfileInfraNetworkProfileArgs {
            /**
             * Array of references to azure resource corresponding to the new HybridAKSNetwork object e.g. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridContainerService/virtualNetworks/{virtualNetworkName}
             */
            vnetSubnetIds?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * InfraStorageProfile - List of infra storage profiles for the provisioned cluster
         */
        export interface CloudProviderProfileInfraStorageProfileArgs {
            /**
             * Reference to azure resource corresponding to the new HybridAKSStorage object e.g. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridContainerService/storageSpaces/{storageSpaceName}
             */
            storageSpaceIds?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * API server endpoint for the control plane
         */
        export interface ControlPlaneEndpointProfileControlPlaneEndpointArgs {
            /**
             * Host IP address for API server
             */
            hostIP?: pulumi.Input<string>;
            /**
             * Port for the API server
             */
            port?: pulumi.Input<string>;
        }

        /**
         * ControlPlaneProfile - The control plane properties for the provisioned cluster.
         */
        export interface ControlPlaneProfileArgs {
            /**
             * AvailabilityZones - The list of Availability zones to use for nodes. Datacenter racks modelled as zones
             */
            availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The underlying cloud infra provider properties.
             */
            cloudProviderProfile?: pulumi.Input<v20220901preview.CloudProviderProfileArgs>;
            /**
             * API server endpoint for the control plane
             */
            controlPlaneEndpoint?: pulumi.Input<v20220901preview.ControlPlaneEndpointProfileControlPlaneEndpointArgs>;
            /**
             * Count - Number of agents to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
             */
            count?: pulumi.Input<number>;
            /**
             * Profile for Linux VMs in the container service cluster.
             */
            linuxProfile?: pulumi.Input<v20220901preview.LinuxProfilePropertiesArgs>;
            /**
             * The maximum number of nodes for auto-scaling
             */
            maxCount?: pulumi.Input<number>;
            /**
             * The maximum number of pods that can run on a node.
             */
            maxPods?: pulumi.Input<number>;
            /**
             * The minimum number of nodes for auto-scaling
             */
            minCount?: pulumi.Input<number>;
            /**
             * Mode - AgentPoolMode represents mode of an agent pool. Possible values include: 'System', 'LB', 'User'. Default is 'User'
             */
            mode?: pulumi.Input<string | enums.v20220901preview.Mode>;
            /**
             * Unique name of the agent pool profile in the context of the subscription and resource group.
             */
            name?: pulumi.Input<string>;
            /**
             * The version of node image
             */
            nodeImageVersion?: pulumi.Input<string>;
            /**
             * NodeLabels - Agent pool node labels to be persisted across all nodes in agent pool.
             */
            nodeLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * NodeTaints - Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
             */
            nodeTaints?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * OsType - OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux. Possible values include: 'Linux', 'Windows'
             */
            osType?: pulumi.Input<string | enums.v20220901preview.OsType>;
            /**
             * VmSize - The size of the agent pool VMs.
             */
            vmSize?: pulumi.Input<string>;
        }
        /**
         * controlPlaneProfileArgsProvideDefaults sets the appropriate defaults for ControlPlaneProfileArgs
         */
        export function controlPlaneProfileArgsProvideDefaults(val: ControlPlaneProfileArgs): ControlPlaneProfileArgs {
            return {
                ...val,
                count: (val.count) ?? 1,
                mode: (val.mode) ?? "User",
            };
        }

        /**
         * Configurations for provisioning the cluster with HTTP proxy servers.
         */
        export interface HttpProxyConfigArgs {
            /**
             * The HTTP proxy server endpoint to use.
             */
            httpProxy?: pulumi.Input<string>;
            /**
             * The HTTPS proxy server endpoint to use.
             */
            httpsProxy?: pulumi.Input<string>;
            /**
             * The endpoints that should not go through proxy.
             */
            noProxy?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Password to use for connecting to proxy server
             */
            password?: pulumi.Input<string>;
            /**
             * Alternative CA cert to use for connecting to proxy servers.
             */
            trustedCa?: pulumi.Input<string>;
            /**
             * Username to use for connecting to proxy server
             */
            username?: pulumi.Input<string>;
        }

        /**
         * LinuxProfile - Profile for Linux VMs in the container service cluster.
         */
        export interface LinuxProfilePropertiesArgs {
            /**
             * AdminUsername - The administrator username to use for Linux VMs.
             */
            adminUsername?: pulumi.Input<string>;
            /**
             * SSH - SSH configuration for Linux-based VMs running on Azure.
             */
            ssh?: pulumi.Input<v20220901preview.LinuxProfilePropertiesSshArgs>;
        }

        export interface LinuxProfilePropertiesPublicKeysArgs {
            /**
             * KeyData - Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.
             */
            keyData?: pulumi.Input<string>;
        }

        /**
         * SSH - SSH configuration for Linux-based VMs running on Azure.
         */
        export interface LinuxProfilePropertiesSshArgs {
            /**
             * PublicKeys - The list of SSH public keys used to authenticate with Linux-based VMs. Only expect one key specified.
             */
            publicKeys?: pulumi.Input<pulumi.Input<v20220901preview.LinuxProfilePropertiesPublicKeysArgs>[]>;
        }

        /**
         * LoadBalancerProfile - Profile of the cluster load balancer.
         */
        export interface LoadBalancerProfileArgs {
            /**
             * AvailabilityZones - The list of Availability zones to use for nodes. Datacenter racks modelled as zones
             */
            availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The underlying cloud infra provider properties.
             */
            cloudProviderProfile?: pulumi.Input<v20220901preview.CloudProviderProfileArgs>;
            /**
             * Count - Number of agents to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
             */
            count?: pulumi.Input<number>;
            /**
             * Profile for Linux VMs in the container service cluster.
             */
            linuxProfile?: pulumi.Input<v20220901preview.LinuxProfilePropertiesArgs>;
            /**
             * The maximum number of nodes for auto-scaling
             */
            maxCount?: pulumi.Input<number>;
            /**
             * The maximum number of pods that can run on a node.
             */
            maxPods?: pulumi.Input<number>;
            /**
             * The minimum number of nodes for auto-scaling
             */
            minCount?: pulumi.Input<number>;
            /**
             * Mode - AgentPoolMode represents mode of an agent pool. Possible values include: 'System', 'LB', 'User'. Default is 'User'
             */
            mode?: pulumi.Input<string | enums.v20220901preview.Mode>;
            /**
             * Unique name of the agent pool profile in the context of the subscription and resource group.
             */
            name?: pulumi.Input<string>;
            /**
             * The version of node image
             */
            nodeImageVersion?: pulumi.Input<string>;
            /**
             * NodeLabels - Agent pool node labels to be persisted across all nodes in agent pool.
             */
            nodeLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * NodeTaints - Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
             */
            nodeTaints?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * OsType - OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux. Possible values include: 'Linux', 'Windows'
             */
            osType?: pulumi.Input<string | enums.v20220901preview.OsType>;
            /**
             * VmSize - The size of the agent pool VMs.
             */
            vmSize?: pulumi.Input<string>;
        }
        /**
         * loadBalancerProfileArgsProvideDefaults sets the appropriate defaults for LoadBalancerProfileArgs
         */
        export function loadBalancerProfileArgsProvideDefaults(val: LoadBalancerProfileArgs): LoadBalancerProfileArgs {
            return {
                ...val,
                count: (val.count) ?? 1,
                mode: (val.mode) ?? "User",
            };
        }

        /**
         * Agent pool profile along with a name parameter
         */
        export interface NamedAgentPoolProfileArgs {
            /**
             * AvailabilityZones - The list of Availability zones to use for nodes. Datacenter racks modelled as zones
             */
            availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The underlying cloud infra provider properties.
             */
            cloudProviderProfile?: pulumi.Input<v20220901preview.CloudProviderProfileArgs>;
            /**
             * Count - Number of agents to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
             */
            count?: pulumi.Input<number>;
            /**
             * The maximum number of nodes for auto-scaling
             */
            maxCount?: pulumi.Input<number>;
            /**
             * The maximum number of pods that can run on a node.
             */
            maxPods?: pulumi.Input<number>;
            /**
             * The minimum number of nodes for auto-scaling
             */
            minCount?: pulumi.Input<number>;
            /**
             * Mode - AgentPoolMode represents mode of an agent pool. Possible values include: 'System', 'LB', 'User'. Default is 'User'
             */
            mode?: pulumi.Input<string | enums.v20220901preview.Mode>;
            /**
             * Unique name of the agent pool profile in the context of the subscription and resource group.
             */
            name?: pulumi.Input<string>;
            /**
             * The version of node image
             */
            nodeImageVersion?: pulumi.Input<string>;
            /**
             * NodeLabels - Agent pool node labels to be persisted across all nodes in agent pool.
             */
            nodeLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * NodeTaints - Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
             */
            nodeTaints?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * OsType - OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux. Possible values include: 'Linux', 'Windows'
             */
            osType?: pulumi.Input<string | enums.v20220901preview.OsType>;
            /**
             * VmSize - The size of the agent pool VMs.
             */
            vmSize?: pulumi.Input<string>;
        }
        /**
         * namedAgentPoolProfileArgsProvideDefaults sets the appropriate defaults for NamedAgentPoolProfileArgs
         */
        export function namedAgentPoolProfileArgsProvideDefaults(val: NamedAgentPoolProfileArgs): NamedAgentPoolProfileArgs {
            return {
                ...val,
                count: (val.count) ?? 1,
                mode: (val.mode) ?? "User",
            };
        }

        /**
         * NetworkProfile - Profile of network configuration.
         */
        export interface NetworkProfileArgs {
            /**
             * DNSServiceIP - An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
             */
            dnsServiceIP?: pulumi.Input<string>;
            /**
             * LoadBalancerProfile - Profile of the cluster load balancer.
             */
            loadBalancerProfile?: pulumi.Input<v20220901preview.LoadBalancerProfileArgs>;
            /**
             * LoadBalancerSku - The load balancer sku for the provisioned cluster. Possible values: 'unstacked-haproxy', 'stacked-kube-vip', 'stacked-metallb', 'unmanaged'. The default is 'unmanaged'.
             */
            loadBalancerSku?: pulumi.Input<string | enums.v20220901preview.LoadBalancerSku>;
            /**
             * NetworkPolicy - Network policy used for building Kubernetes network. Possible values include: 'calico', 'flannel'. Default is 'calico'
             */
            networkPolicy?: pulumi.Input<string | enums.v20220901preview.NetworkPolicy>;
            /**
             * PodCidr - A CIDR notation IP range from which to assign pod IPs when kubenet is used.
             */
            podCidr?: pulumi.Input<string>;
            /**
             * The CIDR notation IP ranges from which to assign pod IPs. One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
             */
            podCidrs?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * ServiceCidr - A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
             */
            serviceCidr?: pulumi.Input<string>;
            /**
             * The CIDR notation IP ranges from which to assign service cluster IPs. One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking. They must not overlap with any Subnet IP ranges.
             */
            serviceCidrs?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * networkProfileArgsProvideDefaults sets the appropriate defaults for NetworkProfileArgs
         */
        export function networkProfileArgsProvideDefaults(val: NetworkProfileArgs): NetworkProfileArgs {
            return {
                ...val,
                loadBalancerProfile: (val.loadBalancerProfile ? pulumi.output(val.loadBalancerProfile).apply(v20220901preview.loadBalancerProfileArgsProvideDefaults) : undefined),
                loadBalancerSku: (val.loadBalancerSku) ?? "unmanaged",
                networkPolicy: (val.networkPolicy) ?? "calico",
            };
        }

        /**
         * Identity for the Provisioned cluster.
         */
        export interface ProvisionedClusterIdentityArgs {
            /**
             * The type of identity used for the provisioned cluster. The type SystemAssigned, includes a system created identity. The type None means no identity is assigned to the provisioned cluster.
             */
            type: pulumi.Input<enums.v20220901preview.ResourceIdentityType>;
        }

        /**
         * All properties of the provisioned cluster
         */
        export interface ProvisionedClustersAllPropertiesArgs {
            /**
             * AAD profile for the provisioned cluster.
             */
            aadProfile?: pulumi.Input<v20220901preview.AADProfileArgs>;
            /**
             * AddonProfiles - Profile of managed cluster add-on.
             */
            addonProfiles?: pulumi.Input<{[key: string]: pulumi.Input<v20220901preview.AddonProfilesArgs>}>;
            /**
             * The agent pools of the cluster.
             */
            agentPoolProfiles?: pulumi.Input<pulumi.Input<v20220901preview.NamedAgentPoolProfileArgs>[]>;
            /**
             * The underlying cloud infra provider properties.
             */
            cloudProviderProfile?: pulumi.Input<v20220901preview.CloudProviderProfileArgs>;
            /**
             * ControlPlane - ControlPlane Configuration
             */
            controlPlane?: pulumi.Input<v20220901preview.ControlPlaneProfileArgs>;
            /**
             * EnableRBAC - Whether to enable Kubernetes Role-Based Access Control.
             */
            enableRbac?: pulumi.Input<boolean>;
            /**
             * Additional features specs like Arc Agent Onboarding.
             */
            features?: pulumi.Input<v20220901preview.ProvisionedClustersCommonPropertiesFeaturesArgs>;
            /**
             * HttpProxyConfig - Configurations for provisioning the cluster with HTTP proxy servers.
             */
            httpProxyConfig?: pulumi.Input<v20220901preview.HttpProxyConfigArgs>;
            /**
             * KubernetesVersion - Version of Kubernetes specified when creating the managed cluster.
             */
            kubernetesVersion?: pulumi.Input<string>;
            /**
             * LinuxProfile - The profile for Linux VMs in the Provisioned Cluster.
             */
            linuxProfile?: pulumi.Input<v20220901preview.LinuxProfilePropertiesArgs>;
            /**
             * NetworkProfile - Profile of network configuration.
             */
            networkProfile?: pulumi.Input<v20220901preview.NetworkProfileArgs>;
            /**
             * NodeResourceGroup - Name of the resource group containing agent pool nodes.
             */
            nodeResourceGroup?: pulumi.Input<string>;
            /**
             * WindowsProfile - Profile for Windows VMs in the Provisioned Cluster.
             */
            windowsProfile?: pulumi.Input<v20220901preview.WindowsProfileArgs>;
        }
        /**
         * provisionedClustersAllPropertiesArgsProvideDefaults sets the appropriate defaults for ProvisionedClustersAllPropertiesArgs
         */
        export function provisionedClustersAllPropertiesArgsProvideDefaults(val: ProvisionedClustersAllPropertiesArgs): ProvisionedClustersAllPropertiesArgs {
            return {
                ...val,
                controlPlane: (val.controlPlane ? pulumi.output(val.controlPlane).apply(v20220901preview.controlPlaneProfileArgsProvideDefaults) : undefined),
                features: (val.features ? pulumi.output(val.features).apply(v20220901preview.provisionedClustersCommonPropertiesFeaturesArgsProvideDefaults) : undefined),
                networkProfile: (val.networkProfile ? pulumi.output(val.networkProfile).apply(v20220901preview.networkProfileArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Additional features specs like Arc Agent Onboarding.
         */
        export interface ProvisionedClustersCommonPropertiesFeaturesArgs {
            /**
             * Arc agentry configuration for the provisioned cluster.
             */
            arcAgentProfile?: pulumi.Input<v20220901preview.ArcAgentProfileArgs>;
        }
        /**
         * provisionedClustersCommonPropertiesFeaturesArgsProvideDefaults sets the appropriate defaults for ProvisionedClustersCommonPropertiesFeaturesArgs
         */
        export function provisionedClustersCommonPropertiesFeaturesArgsProvideDefaults(val: ProvisionedClustersCommonPropertiesFeaturesArgs): ProvisionedClustersCommonPropertiesFeaturesArgs {
            return {
                ...val,
                arcAgentProfile: (val.arcAgentProfile ? pulumi.output(val.arcAgentProfile).apply(v20220901preview.arcAgentProfileArgsProvideDefaults) : undefined),
            };
        }

        export interface ProvisionedClustersExtendedLocationArgs {
            /**
             * The extended location name.
             */
            name?: pulumi.Input<string>;
            /**
             * The extended location type.
             */
            type?: pulumi.Input<string>;
        }

        export interface StorageSpacesExtendedLocationArgs {
            /**
             * The extended location name.
             */
            name?: pulumi.Input<string>;
            /**
             * The extended location type.
             */
            type?: pulumi.Input<string>;
        }

        /**
         * HybridAKSStorageSpec defines the desired state of HybridAKSStorage
         */
        export interface StorageSpacesPropertiesArgs {
            hciStorageProfile?: pulumi.Input<v20220901preview.StorageSpacesPropertiesHciStorageProfileArgs>;
            /**
             * HybridAKSStorageStatus defines the observed state of HybridAKSStorage
             */
            status?: pulumi.Input<v20220901preview.StorageSpacesPropertiesStatusArgs>;
            vmwareStorageProfile?: pulumi.Input<v20220901preview.StorageSpacesPropertiesVmwareStorageProfileArgs>;
        }

        export interface StorageSpacesPropertiesErrorArgs {
            code?: pulumi.Input<string>;
            message?: pulumi.Input<string>;
        }

        export interface StorageSpacesPropertiesHciStorageProfileArgs {
            /**
             * Resource group in MOC(Microsoft On-premises Cloud)
             */
            mocGroup?: pulumi.Input<string>;
            /**
             * Location in MOC(Microsoft On-premises Cloud)
             */
            mocLocation?: pulumi.Input<string>;
            /**
             * Name of the storage container in MOC(Microsoft On-premises Cloud)
             */
            mocStorageContainer?: pulumi.Input<string>;
        }

        /**
         * Contains Provisioning errors
         */
        export interface StorageSpacesPropertiesProvisioningStatusArgs {
            error?: pulumi.Input<v20220901preview.StorageSpacesPropertiesErrorArgs>;
            operationId?: pulumi.Input<string>;
            /**
             * Phase represents the current phase of cluster actuation. E.g. Pending, Running, Terminating, Failed etc.
             */
            phase?: pulumi.Input<string>;
            status?: pulumi.Input<string>;
        }

        /**
         * HybridAKSStorageStatus defines the observed state of HybridAKSStorage
         */
        export interface StorageSpacesPropertiesStatusArgs {
            /**
             * Contains Provisioning errors
             */
            provisioningStatus?: pulumi.Input<v20220901preview.StorageSpacesPropertiesProvisioningStatusArgs>;
        }

        export interface StorageSpacesPropertiesVmwareStorageProfileArgs {
            /**
             * Name of the datacenter in VSphere
             */
            datacenter?: pulumi.Input<string>;
            /**
             * Name of the datastore in VSphere
             */
            datastore?: pulumi.Input<string>;
            /**
             * Name of the folder in VSphere
             */
            folder?: pulumi.Input<string>;
            /**
             * Name of the resource pool in VSphere
             */
            resourcePool?: pulumi.Input<string>;
        }

        export interface VirtualNetworksExtendedLocationArgs {
            /**
             * The extended location name.
             */
            name?: pulumi.Input<string>;
            /**
             * The extended location type.
             */
            type?: pulumi.Input<string>;
        }

        /**
         * HybridAKSNetworkSpec defines the desired state of HybridAKSNetwork
         */
        export interface VirtualNetworksPropertiesArgs {
            /**
             * Address of the DNS servers associated with the network
             */
            dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Address of the Gateway associated with the network
             */
            gateway?: pulumi.Input<string>;
            infraVnetProfile?: pulumi.Input<v20220901preview.VirtualNetworksPropertiesInfraVnetProfileArgs>;
            /**
             * IP Address Prefix of the network
             */
            ipAddressPrefix?: pulumi.Input<string>;
            /**
             * Virtual IP Pool for Kubernetes
             */
            vipPool?: pulumi.Input<pulumi.Input<v20220901preview.VirtualNetworksPropertiesVipPoolArgs>[]>;
            /**
             * IP Pool for Virtual Machines
             */
            vmipPool?: pulumi.Input<pulumi.Input<v20220901preview.VirtualNetworksPropertiesVmipPoolArgs>[]>;
        }

        /**
         * Infra network profile for HCI platform
         */
        export interface VirtualNetworksPropertiesHciArgs {
            /**
             * Resource group in MOC(Microsoft On-premises Cloud)
             */
            mocGroup?: pulumi.Input<string>;
            /**
             * Location in MOC(Microsoft On-premises Cloud)
             */
            mocLocation?: pulumi.Input<string>;
            /**
             * Virtual Network name in MOC(Microsoft On-premises Cloud)
             */
            mocVnetName?: pulumi.Input<string>;
        }

        export interface VirtualNetworksPropertiesInfraVnetProfileArgs {
            /**
             * Infra network profile for HCI platform
             */
            hci?: pulumi.Input<v20220901preview.VirtualNetworksPropertiesHciArgs>;
            /**
             * Infra network profile for the NetworkCloud platform
             */
            networkCloud?: pulumi.Input<v20220901preview.VirtualNetworksPropertiesNetworkCloudArgs>;
            /**
             * Infra network profile for VMware platform
             */
            vmware?: pulumi.Input<v20220901preview.VirtualNetworksPropertiesVmwareArgs>;
        }

        /**
         * Infra network profile for the NetworkCloud platform
         */
        export interface VirtualNetworksPropertiesNetworkCloudArgs {
            /**
             * The ARM ID of Network Cloud Network Resource to Associate with this VirtualNetwork
             */
            networkId?: pulumi.Input<string>;
        }

        export interface VirtualNetworksPropertiesVipPoolArgs {
            /**
             * Ending IP address for the IP Pool
             */
            endIP?: pulumi.Input<string>;
            /**
             * Starting IP address for the IP Pool
             */
            startIP?: pulumi.Input<string>;
        }

        export interface VirtualNetworksPropertiesVmipPoolArgs {
            /**
             * Ending IP address for the IP Pool
             */
            endIP?: pulumi.Input<string>;
            /**
             * Starting IP address for the IP Pool
             */
            startIP?: pulumi.Input<string>;
        }

        /**
         * Infra network profile for VMware platform
         */
        export interface VirtualNetworksPropertiesVmwareArgs {
            /**
             * Name of the network segment in VSphere
             */
            segmentName?: pulumi.Input<string>;
        }

        /**
         * WindowsProfile - Profile for Windows VMs in the container service cluster.
         */
        export interface WindowsProfileArgs {
            /**
             * AdminPassword - Specifies the password of the administrator account. <br><br> **Minimum-length:** 8 characters <br><br> **Max-length:** 123 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!"
             */
            adminPassword?: pulumi.Input<string>;
            /**
             * AdminUsername - Specifies the name of the administrator account. <br><br> **restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length:** 1 character <br><br> **Max-length:** 20 characters
             */
            adminUsername?: pulumi.Input<string>;
            /**
             * EnableCSIProxy - Whether to enable CSI proxy.
             */
            enableCsiProxy?: pulumi.Input<boolean>;
            /**
             * LicenseType - The licenseType to use for Windows VMs. Windows_Server is used to enable Azure Hybrid User Benefits for Windows VMs. Possible values include: 'None', 'Windows_Server'
             */
            licenseType?: pulumi.Input<string | enums.v20220901preview.LicenseType>;
        }

    }
}
