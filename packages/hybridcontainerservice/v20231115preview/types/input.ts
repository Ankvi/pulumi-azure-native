import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface AgentPoolProvisioningStatusErrorArgs {
        code?: pulumi.Input<string>;
        message?: pulumi.Input<string>;
    }

    /**
     * Contains Provisioning errors
     */
    export interface AgentPoolProvisioningStatusOperationStatusArgs {
        error?: pulumi.Input<AgentPoolProvisioningStatusErrorArgs>;
        operationId?: pulumi.Input<string>;
        status?: pulumi.Input<string>;
    }

    /**
     * Defines the observed state of the agent pool
     */
    export interface AgentPoolProvisioningStatusStatusArgs {
        /**
         * ErrorMessage - Error messages during creation of agent pool
         */
        errorMessage?: pulumi.Input<string>;
        /**
         * Contains Provisioning errors
         */
        operationStatus?: pulumi.Input<AgentPoolProvisioningStatusOperationStatusArgs>;
        readyReplicas?: pulumi.Input<pulumi.Input<AgentPoolUpdateProfileArgs>[]>;
    }

    /**
     * AgentPool update configuration
     */
    export interface AgentPoolUpdateProfileArgs {
        /**
         * Count - Number of agents to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
         */
        count?: pulumi.Input<number>;
        /**
         * VmSize - The size of the agent pool VMs.
         */
        vmSize?: pulumi.Input<string>;
    }
    /**
     * agentPoolUpdateProfileArgsProvideDefaults sets the appropriate defaults for AgentPoolUpdateProfileArgs
     */
    export function agentPoolUpdateProfileArgsProvideDefaults(val: AgentPoolUpdateProfileArgs): AgentPoolUpdateProfileArgs {
        return {
            ...val,
            count: (val.count) ?? 1,
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
    }

    /**
     * InfraNetworkProfile - List of infra network profiles for the provisioned cluster
     */
    export interface CloudProviderProfileInfraNetworkProfileArgs {
        /**
         * Array of references to azure resource corresponding to the Network object e.g. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/logicalNetworks/{logicalNetworkName}
         */
        vnetSubnetIds?: pulumi.Input<pulumi.Input<string>[]>;
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
        port?: pulumi.Input<number>;
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
         * Unique name of the agent pool profile in the context of the subscription and resource group.
         */
        name?: pulumi.Input<string>;
        /**
         * The version of node image
         */
        nodeImageVersion?: pulumi.Input<string>;
        /**
         * Specifies the OS SKU used by the agent pool. The default is CBLMariner if OSType is Linux. The default is Windows2019 when OSType is Windows.
         */
        osSKU?: pulumi.Input<string | enums.OSSKU>;
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
        };
    }

    /**
     * Extended Location definition
     */
    export interface ExtendedLocationArgs {
        /**
         * The extended location name.
         */
        name?: pulumi.Input<string>;
        /**
         * The extended location type.
         */
        type?: pulumi.Input<string | enums.ExtendedLocationTypes>;
    }

    /**
     * LinuxProfile - Profile for Linux VMs in the container service cluster.
     */
    export interface LinuxProfilePropertiesArgs {
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
     * Agent pool profile along with a name parameter
     */
    export interface NamedAgentPoolProfileArgs {
        /**
         * AvailabilityZones - The list of Availability zones to use for nodes. Datacenter racks modelled as zones
         */
        availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Count - Number of agents to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
         */
        count?: pulumi.Input<number>;
        /**
         * Unique name of the agent pool profile in the context of the subscription and resource group.
         */
        name?: pulumi.Input<string>;
        /**
         * The version of node image
         */
        nodeImageVersion?: pulumi.Input<string>;
        /**
         * Specifies the OS SKU used by the agent pool. The default is CBLMariner if OSType is Linux. The default is Windows2019 when OSType is Windows.
         */
        osSKU?: pulumi.Input<string | enums.OSSKU>;
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
        };
    }

    /**
     * NetworkProfile - Profile of network configuration.
     */
    export interface NetworkProfileArgs {
        /**
         * LoadBalancerProfile - Profile of the cluster load balancer.
         */
        loadBalancerProfile?: pulumi.Input<NetworkProfileLoadBalancerProfileArgs>;
        /**
         * NetworkPolicy - Network policy used for building Kubernetes network. Possible values include: 'calico', 'flannel'. Default is 'calico'
         */
        networkPolicy?: pulumi.Input<string | enums.NetworkPolicy>;
        /**
         * PodCidr - A CIDR notation IP range from which to assign pod IPs when kubenet is used.
         */
        podCidr?: pulumi.Input<string>;
    }
    /**
     * networkProfileArgsProvideDefaults sets the appropriate defaults for NetworkProfileArgs
     */
    export function networkProfileArgsProvideDefaults(val: NetworkProfileArgs): NetworkProfileArgs {
        return {
            ...val,
            loadBalancerProfile: (val.loadBalancerProfile ? pulumi.output(val.loadBalancerProfile).apply(networkProfileLoadBalancerProfileArgsProvideDefaults) : undefined),
            networkPolicy: (val.networkPolicy) ?? "calico",
        };
    }

    /**
     * LoadBalancerProfile - Profile of the cluster load balancer.
     */
    export interface NetworkProfileLoadBalancerProfileArgs {
        /**
         * Count - Number of load balancer VMs. The default value is 0.
         */
        count?: pulumi.Input<number>;
    }
    /**
     * networkProfileLoadBalancerProfileArgsProvideDefaults sets the appropriate defaults for NetworkProfileLoadBalancerProfileArgs
     */
    export function networkProfileLoadBalancerProfileArgsProvideDefaults(val: NetworkProfileLoadBalancerProfileArgs): NetworkProfileLoadBalancerProfileArgs {
        return {
            ...val,
            count: (val.count) ?? 0,
        };
    }

    /**
     * The license profile of the provisioned cluster.
     */
    export interface ProvisionedClusterLicenseProfileArgs {
        /**
         * Indicates whether Azure Hybrid Benefit is opted in
         */
        azureHybridBenefit?: pulumi.Input<string | enums.AzureHybridBenefit>;
    }
    /**
     * provisionedClusterLicenseProfileArgsProvideDefaults sets the appropriate defaults for ProvisionedClusterLicenseProfileArgs
     */
    export function provisionedClusterLicenseProfileArgsProvideDefaults(val: ProvisionedClusterLicenseProfileArgs): ProvisionedClusterLicenseProfileArgs {
        return {
            ...val,
            azureHybridBenefit: (val.azureHybridBenefit) ?? "NotApplicable",
        };
    }

    /**
     * All properties of the provisioned cluster
     */
    export interface ProvisionedClusterPropertiesArgs {
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
         * KubernetesVersion - Version of Kubernetes specified when creating the managed cluster.
         */
        kubernetesVersion?: pulumi.Input<string>;
        /**
         * The license profile of the provisioned cluster.
         */
        licenseProfile?: pulumi.Input<ProvisionedClusterLicenseProfileArgs>;
        /**
         * LinuxProfile - The profile for Linux VMs in the Provisioned Cluster.
         */
        linuxProfile?: pulumi.Input<LinuxProfilePropertiesArgs>;
        /**
         * NetworkProfile - Profile of network configuration.
         */
        networkProfile?: pulumi.Input<NetworkProfileArgs>;
    }
    /**
     * provisionedClusterPropertiesArgsProvideDefaults sets the appropriate defaults for ProvisionedClusterPropertiesArgs
     */
    export function provisionedClusterPropertiesArgsProvideDefaults(val: ProvisionedClusterPropertiesArgs): ProvisionedClusterPropertiesArgs {
        return {
            ...val,
            controlPlane: (val.controlPlane ? pulumi.output(val.controlPlane).apply(controlPlaneProfileArgsProvideDefaults) : undefined),
            licenseProfile: (val.licenseProfile ? pulumi.output(val.licenseProfile).apply(provisionedClusterLicenseProfileArgsProvideDefaults) : undefined),
            networkProfile: (val.networkProfile ? pulumi.output(val.networkProfile).apply(networkProfileArgsProvideDefaults) : undefined),
        };
    }

    export interface VirtualNetworkExtendedLocationArgs {
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
    export interface VirtualNetworkPropertiesArgs {
        /**
         * Address of the DHCP servers associated with the network
         */
        dhcpServers?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Address of the DNS servers associated with the network
         */
        dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Address of the Gateway associated with the network
         */
        gateway?: pulumi.Input<string>;
        infraVnetProfile?: pulumi.Input<VirtualNetworkPropertiesInfraVnetProfileArgs>;
        /**
         * IP Address Prefix of the network
         */
        ipAddressPrefix?: pulumi.Input<string>;
        /**
         * Virtual IP Pool for Kubernetes
         */
        vipPool?: pulumi.Input<pulumi.Input<VirtualNetworkPropertiesVipPoolArgs>[]>;
        /**
         * VLAN Id used by the network
         */
        vlanID?: pulumi.Input<number>;
        /**
         * IP Pool for Virtual Machines
         */
        vmipPool?: pulumi.Input<pulumi.Input<VirtualNetworkPropertiesVmipPoolArgs>[]>;
    }

    /**
     * Infra network profile for HCI platform
     */
    export interface VirtualNetworkPropertiesHciArgs {
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

    export interface VirtualNetworkPropertiesInfraVnetProfileArgs {
        /**
         * Infra network profile for HCI platform
         */
        hci?: pulumi.Input<VirtualNetworkPropertiesHciArgs>;
        /**
         * Infra network profile for VMware platform
         */
        vmware?: pulumi.Input<VirtualNetworkPropertiesVmwareArgs>;
    }

    export interface VirtualNetworkPropertiesVipPoolArgs {
        /**
         * Ending IP address for the IP Pool
         */
        endIP?: pulumi.Input<string>;
        /**
         * Starting IP address for the IP Pool
         */
        startIP?: pulumi.Input<string>;
    }

    export interface VirtualNetworkPropertiesVmipPoolArgs {
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
    export interface VirtualNetworkPropertiesVmwareArgs {
        /**
         * Name of the network segment in VSphere
         */
        segmentName?: pulumi.Input<string>;
    }
