import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Settings for upgrading an agentpool
     */
    export interface AgentPoolUpgradeSettingsArgs {
        /**
         * This can either be set to an integer (e.g. '5') or a percentage (e.g. '50%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified, the default is 1. For more information, including best practices, see: https://docs.microsoft.com/azure/aks/upgrade-cluster#customize-node-surge-upgrade
         */
        maxSurge?: pulumi.Input<string>;
    }

    /**
     * Profile for Linux VMs in the container service cluster.
     */
    export interface ContainerServiceLinuxProfileArgs {
        /**
         * The administrator username to use for Linux VMs.
         */
        adminUsername: pulumi.Input<string>;
        /**
         * The SSH configuration for Linux-based VMs running on Azure.
         */
        ssh: pulumi.Input<ContainerServiceSshConfigurationArgs>;
    }

    /**
     * Profile of network configuration.
     */
    export interface ContainerServiceNetworkProfileArgs {
        /**
         * An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
         */
        dnsServiceIP?: pulumi.Input<string>;
        /**
         * A CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the Kubernetes service address range.
         */
        dockerBridgeCidr?: pulumi.Input<string>;
        /**
         * Profile of the cluster load balancer.
         */
        loadBalancerProfile?: pulumi.Input<ManagedClusterLoadBalancerProfileArgs>;
        /**
         * The default is 'standard'. See [Azure Load Balancer SKUs](https://docs.microsoft.com/azure/load-balancer/skus) for more information about the differences between load balancer SKUs.
         */
        loadBalancerSku?: pulumi.Input<string | enums.LoadBalancerSku>;
        /**
         * This cannot be specified if networkPlugin is anything other than 'azure'.
         */
        networkMode?: pulumi.Input<string | enums.NetworkMode>;
        /**
         * Network plugin used for building the Kubernetes network.
         */
        networkPlugin?: pulumi.Input<string | enums.NetworkPlugin>;
        /**
         * Network policy used for building the Kubernetes network.
         */
        networkPolicy?: pulumi.Input<string | enums.NetworkPolicy>;
        /**
         * This can only be set at cluster creation time and cannot be changed later. For more information see [egress outbound type](https://docs.microsoft.com/azure/aks/egress-outboundtype).
         */
        outboundType?: pulumi.Input<string | enums.OutboundType>;
        /**
         * A CIDR notation IP range from which to assign pod IPs when kubenet is used.
         */
        podCidr?: pulumi.Input<string>;
        /**
         * A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
         */
        serviceCidr?: pulumi.Input<string>;
    }
    /**
     * containerServiceNetworkProfileArgsProvideDefaults sets the appropriate defaults for ContainerServiceNetworkProfileArgs
     */
    export function containerServiceNetworkProfileArgsProvideDefaults(val: ContainerServiceNetworkProfileArgs): ContainerServiceNetworkProfileArgs {
        return {
            ...val,
            dnsServiceIP: (val.dnsServiceIP) ?? "10.0.0.10",
            dockerBridgeCidr: (val.dockerBridgeCidr) ?? "172.17.0.1/16",
            loadBalancerProfile: (val.loadBalancerProfile ? pulumi.output(val.loadBalancerProfile).apply(managedClusterLoadBalancerProfileArgsProvideDefaults) : undefined),
            networkPlugin: (val.networkPlugin) ?? "kubenet",
            outboundType: (val.outboundType) ?? "loadBalancer",
            podCidr: (val.podCidr) ?? "10.244.0.0/16",
            serviceCidr: (val.serviceCidr) ?? "10.0.0.0/16",
        };
    }

    /**
     * SSH configuration for Linux-based VMs running on Azure.
     */
    export interface ContainerServiceSshConfigurationArgs {
        /**
         * The list of SSH public keys used to authenticate with Linux-based VMs. A maximum of 1 key may be specified.
         */
        publicKeys: pulumi.Input<pulumi.Input<ContainerServiceSshPublicKeyArgs>[]>;
    }

    /**
     * Contains information about SSH certificate public key data.
     */
    export interface ContainerServiceSshPublicKeyArgs {
        /**
         * Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.
         */
        keyData: pulumi.Input<string>;
    }

    /**
     * The complex type of the extended location.
     */
    export interface ExtendedLocationArgs {
        /**
         * The name of the extended location.
         */
        name?: pulumi.Input<string>;
        /**
         * The type of the extended location.
         */
        type?: pulumi.Input<string | enums.ExtendedLocationTypes>;
    }

    /**
     * See [AKS custom node configuration](https://docs.microsoft.com/azure/aks/custom-node-configuration) for more details.
     */
    export interface KubeletConfigArgs {
        /**
         * Allowed list of unsafe sysctls or unsafe sysctl patterns (ending in `*`).
         */
        allowedUnsafeSysctls?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The maximum number of container log files that can be present for a container. The number must be ≥ 2.
         */
        containerLogMaxFiles?: pulumi.Input<number>;
        /**
         * The maximum size (e.g. 10Mi) of container log file before it is rotated.
         */
        containerLogMaxSizeMB?: pulumi.Input<number>;
        /**
         * The default is true.
         */
        cpuCfsQuota?: pulumi.Input<boolean>;
        /**
         * The default is '100ms.' Valid values are a sequence of decimal numbers with an optional fraction and a unit suffix. For example: '300ms', '2h45m'. Supported units are 'ns', 'us', 'ms', 's', 'm', and 'h'.
         */
        cpuCfsQuotaPeriod?: pulumi.Input<string>;
        /**
         * The default is 'none'. See [Kubernetes CPU management policies](https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/#cpu-management-policies) for more information. Allowed values are 'none' and 'static'.
         */
        cpuManagerPolicy?: pulumi.Input<string>;
        /**
         * If set to true it will make the Kubelet fail to start if swap is enabled on the node.
         */
        failSwapOn?: pulumi.Input<boolean>;
        /**
         * To disable image garbage collection, set to 100. The default is 85%
         */
        imageGcHighThreshold?: pulumi.Input<number>;
        /**
         * This cannot be set higher than imageGcHighThreshold. The default is 80%
         */
        imageGcLowThreshold?: pulumi.Input<number>;
        /**
         * The maximum number of processes per pod.
         */
        podMaxPids?: pulumi.Input<number>;
        /**
         * For more information see [Kubernetes Topology Manager](https://kubernetes.io/docs/tasks/administer-cluster/topology-manager). The default is 'none'. Allowed values are 'none', 'best-effort', 'restricted', and 'single-numa-node'.
         */
        topologyManagerPolicy?: pulumi.Input<string>;
    }

    /**
     * See [AKS custom node configuration](https://docs.microsoft.com/azure/aks/custom-node-configuration) for more details.
     */
    export interface LinuxOSConfigArgs {
        /**
         * The size in MB of a swap file that will be created on each node.
         */
        swapFileSizeMB?: pulumi.Input<number>;
        /**
         * Sysctl settings for Linux agent nodes.
         */
        sysctls?: pulumi.Input<SysctlConfigArgs>;
        /**
         * Valid values are 'always', 'defer', 'defer+madvise', 'madvise' and 'never'. The default is 'madvise'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
         */
        transparentHugePageDefrag?: pulumi.Input<string>;
        /**
         * Valid values are 'always', 'madvise', and 'never'. The default is 'always'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
         */
        transparentHugePageEnabled?: pulumi.Input<string>;
    }

    /**
     * For more details see [managed AAD on AKS](https://docs.microsoft.com/azure/aks/managed-aad).
     */
    export interface ManagedClusterAADProfileArgs {
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
        enableAzureRBAC?: pulumi.Input<boolean>;
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
     * Access profile for managed cluster API server.
     */
    export interface ManagedClusterAPIServerAccessProfileArgs {
        /**
         * IP ranges are specified in CIDR format, e.g. 137.117.106.88/29. This feature is not compatible with clusters that use Public IP Per Node, or clusters that are using a Basic Load Balancer. For more information see [API server authorized IP ranges](https://docs.microsoft.com/azure/aks/api-server-authorized-ip-ranges).
         */
        authorizedIPRanges?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * For more details, see [Creating a private AKS cluster](https://docs.microsoft.com/azure/aks/private-clusters).
         */
        enablePrivateCluster?: pulumi.Input<boolean>;
        /**
         * Whether to create additional public FQDN for private cluster or not.
         */
        enablePrivateClusterPublicFQDN?: pulumi.Input<boolean>;
        /**
         * The default is System. For more details see [configure private DNS zone](https://docs.microsoft.com/azure/aks/private-clusters#configure-private-dns-zone). Allowed values are 'system' and 'none'.
         */
        privateDNSZone?: pulumi.Input<string>;
    }

    /**
     * A Kubernetes add-on profile for a managed cluster.
     */
    export interface ManagedClusterAddonProfileArgs {
        /**
         * Key-value pairs for configuring an add-on.
         */
        config?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Whether the add-on is enabled or not.
         */
        enabled: pulumi.Input<boolean>;
    }

    /**
     * Profile for the container service agent pool.
     */
    export interface ManagedClusterAgentPoolProfileArgs {
        /**
         * The list of Availability zones to use for nodes. This can only be specified if the AgentPoolType property is 'VirtualMachineScaleSets'.
         */
        availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 1000 (inclusive) for user pools and in the range of 1 to 1000 (inclusive) for system pools. The default value is 1.
         */
        count?: pulumi.Input<number>;
        /**
         * Whether to enable auto-scaler
         */
        enableAutoScaling?: pulumi.Input<boolean>;
        /**
         * This is only supported on certain VM sizes and in certain Azure regions. For more information, see: https://docs.microsoft.com/azure/aks/enable-host-encryption
         */
        enableEncryptionAtHost?: pulumi.Input<boolean>;
        /**
         * See [Add a FIPS-enabled node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#add-a-fips-enabled-node-pool-preview) for more details.
         */
        enableFIPS?: pulumi.Input<boolean>;
        /**
         * Some scenarios may require nodes in a node pool to receive their own dedicated public IP addresses. A common scenario is for gaming workloads, where a console needs to make a direct connection to a cloud virtual machine to minimize hops. For more information see [assigning a public IP per node](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#assign-a-public-ip-per-node-for-your-node-pools). The default is false.
         */
        enableNodePublicIP?: pulumi.Input<boolean>;
        /**
         * Whether to enable UltraSSD
         */
        enableUltraSSD?: pulumi.Input<boolean>;
        /**
         * GPUInstanceProfile to be used to specify GPU MIG instance profile for supported GPU VM SKU.
         */
        gpuInstanceProfile?: pulumi.Input<string | enums.GPUInstanceProfile>;
        /**
         * The Kubelet configuration on the agent pool nodes.
         */
        kubeletConfig?: pulumi.Input<KubeletConfigArgs>;
        /**
         * Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage.
         */
        kubeletDiskType?: pulumi.Input<string | enums.KubeletDiskType>;
        /**
         * The OS configuration of Linux agent nodes.
         */
        linuxOSConfig?: pulumi.Input<LinuxOSConfigArgs>;
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
         * A cluster must have at least one 'System' Agent Pool at all times. For additional information on agent pool restrictions and best practices, see: https://docs.microsoft.com/azure/aks/use-system-pools
         */
        mode?: pulumi.Input<string | enums.AgentPoolMode>;
        /**
         * Windows agent pool names must be 6 characters or less.
         */
        name: pulumi.Input<string>;
        /**
         * The node labels to be persisted across all nodes in agent pool.
         */
        nodeLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIPPrefixName}
         */
        nodePublicIPPrefixID?: pulumi.Input<string>;
        /**
         * The taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
         */
        nodeTaints?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * As a best practice, you should upgrade all node pools in an AKS cluster to the same Kubernetes version. The node pool version must have the same major version as the control plane. The node pool minor version must be within two minor versions of the control plane version. The node pool version cannot be greater than the control plane version. For more information see [upgrading a node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#upgrade-a-node-pool).
         */
        orchestratorVersion?: pulumi.Input<string>;
        /**
         * OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
         */
        osDiskSizeGB?: pulumi.Input<number>;
        /**
         * The default is 'Ephemeral' if the VM supports it and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation. For more information see [Ephemeral OS](https://docs.microsoft.com/azure/aks/cluster-configuration#ephemeral-os).
         */
        osDiskType?: pulumi.Input<string | enums.OSDiskType>;
        /**
         * Specifies an OS SKU. This value must not be specified if OSType is Windows.
         */
        osSKU?: pulumi.Input<string | enums.OSSKU>;
        /**
         * The operating system type. The default is Linux.
         */
        osType?: pulumi.Input<string | enums.OSType>;
        /**
         * If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
         */
        podSubnetID?: pulumi.Input<string>;
        /**
         * The ID for Proximity Placement Group.
         */
        proximityPlacementGroupID?: pulumi.Input<string>;
        /**
         * This cannot be specified unless the scaleSetPriority is 'Spot'. If not specified, the default is 'Delete'.
         */
        scaleSetEvictionPolicy?: pulumi.Input<string | enums.ScaleSetEvictionPolicy>;
        /**
         * The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'.
         */
        scaleSetPriority?: pulumi.Input<string | enums.ScaleSetPriority>;
        /**
         * Possible values are any decimal value greater than zero or -1 which indicates the willingness to pay any on-demand price. For more details on spot pricing, see [spot VMs pricing](https://docs.microsoft.com/azure/virtual-machines/spot-vms#pricing)
         */
        spotMaxPrice?: pulumi.Input<number>;
        /**
         * The tags to be persisted on the agent pool virtual machine scale set.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The type of Agent Pool.
         */
        type?: pulumi.Input<string | enums.AgentPoolType>;
        /**
         * Settings for upgrading the agentpool
         */
        upgradeSettings?: pulumi.Input<AgentPoolUpgradeSettingsArgs>;
        /**
         * VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. For more details on restricted VM sizes, see: https://docs.microsoft.com/azure/aks/quotas-skus-regions
         */
        vmSize?: pulumi.Input<string>;
        /**
         * If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
         */
        vnetSubnetID?: pulumi.Input<string>;
    }

    /**
     * Auto upgrade profile for a managed cluster.
     */
    export interface ManagedClusterAutoUpgradeProfileArgs {
        /**
         * For more information see [setting the AKS cluster auto-upgrade channel](https://docs.microsoft.com/azure/aks/upgrade-cluster#set-auto-upgrade-channel).
         */
        upgradeChannel?: pulumi.Input<string | enums.UpgradeChannel>;
    }

    /**
     * Cluster HTTP proxy configuration.
     */
    export interface ManagedClusterHTTPProxyConfigArgs {
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
         * Alternative CA cert to use for connecting to proxy servers.
         */
        trustedCa?: pulumi.Input<string>;
    }

    /**
     * Identity for the managed cluster.
     */
    export interface ManagedClusterIdentityArgs {
        /**
         * For more information see [use managed identities in AKS](https://docs.microsoft.com/azure/aks/use-managed-identity).
         */
        type?: pulumi.Input<enums.ResourceIdentityType>;
        /**
         * The keys must be ARM resource IDs in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Profile of the managed cluster load balancer.
     */
    export interface ManagedClusterLoadBalancerProfileArgs {
        /**
         * The desired number of allocated SNAT ports per VM. Allowed values are in the range of 0 to 64000 (inclusive). The default value is 0 which results in Azure dynamically allocating ports.
         */
        allocatedOutboundPorts?: pulumi.Input<number>;
        /**
         * The effective outbound IP resources of the cluster load balancer.
         */
        effectiveOutboundIPs?: pulumi.Input<pulumi.Input<ResourceReferenceArgs>[]>;
        /**
         * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 30 minutes.
         */
        idleTimeoutInMinutes?: pulumi.Input<number>;
        /**
         * Desired managed outbound IPs for the cluster load balancer.
         */
        managedOutboundIPs?: pulumi.Input<ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs>;
        /**
         * Desired outbound IP Prefix resources for the cluster load balancer.
         */
        outboundIPPrefixes?: pulumi.Input<ManagedClusterLoadBalancerProfileOutboundIPPrefixesArgs>;
        /**
         * Desired outbound IP resources for the cluster load balancer.
         */
        outboundIPs?: pulumi.Input<ManagedClusterLoadBalancerProfileOutboundIPsArgs>;
    }
    /**
     * managedClusterLoadBalancerProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileArgs
     */
    export function managedClusterLoadBalancerProfileArgsProvideDefaults(val: ManagedClusterLoadBalancerProfileArgs): ManagedClusterLoadBalancerProfileArgs {
        return {
            ...val,
            allocatedOutboundPorts: (val.allocatedOutboundPorts) ?? 0,
            idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 30,
            managedOutboundIPs: (val.managedOutboundIPs ? pulumi.output(val.managedOutboundIPs).apply(managedClusterLoadBalancerProfileManagedOutboundIPsArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Desired managed outbound IPs for the cluster load balancer.
     */
    export interface ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs {
        /**
         * The desired number of outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1. 
         */
        count?: pulumi.Input<number>;
    }
    /**
     * managedClusterLoadBalancerProfileManagedOutboundIPsArgsProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs
     */
    export function managedClusterLoadBalancerProfileManagedOutboundIPsArgsProvideDefaults(val: ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs): ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs {
        return {
            ...val,
            count: (val.count) ?? 1,
        };
    }

    /**
     * Desired outbound IP Prefix resources for the cluster load balancer.
     */
    export interface ManagedClusterLoadBalancerProfileOutboundIPPrefixesArgs {
        /**
         * A list of public IP prefix resources.
         */
        publicIPPrefixes?: pulumi.Input<pulumi.Input<ResourceReferenceArgs>[]>;
    }

    /**
     * Desired outbound IP resources for the cluster load balancer.
     */
    export interface ManagedClusterLoadBalancerProfileOutboundIPsArgs {
        /**
         * A list of public IP resources.
         */
        publicIPs?: pulumi.Input<pulumi.Input<ResourceReferenceArgs>[]>;
    }

    /**
     * Details about the pod identity assigned to the Managed Cluster.
     */
    export interface ManagedClusterPodIdentityArgs {
        /**
         * The binding selector to use for the AzureIdentityBinding resource.
         */
        bindingSelector?: pulumi.Input<string>;
        /**
         * The user assigned identity details.
         */
        identity: pulumi.Input<UserAssignedIdentityArgs>;
        /**
         * The name of the pod identity.
         */
        name: pulumi.Input<string>;
        /**
         * The namespace of the pod identity.
         */
        namespace: pulumi.Input<string>;
    }

    /**
     * See [disable AAD Pod Identity for a specific Pod/Application](https://azure.github.io/aad-pod-identity/docs/configure/application_exception/) for more details.
     */
    export interface ManagedClusterPodIdentityExceptionArgs {
        /**
         * The name of the pod identity exception.
         */
        name: pulumi.Input<string>;
        /**
         * The namespace of the pod identity exception.
         */
        namespace: pulumi.Input<string>;
        /**
         * The pod labels to match.
         */
        podLabels: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * See [use AAD pod identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity) for more details on pod identity integration.
     */
    export interface ManagedClusterPodIdentityProfileArgs {
        /**
         * Running in Kubenet is disabled by default due to the security related nature of AAD Pod Identity and the risks of IP spoofing. See [using Kubenet network plugin with AAD Pod Identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity#using-kubenet-network-plugin-with-azure-active-directory-pod-managed-identities) for more information.
         */
        allowNetworkPluginKubenet?: pulumi.Input<boolean>;
        /**
         * Whether the pod identity addon is enabled.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * The pod identities to use in the cluster.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<ManagedClusterPodIdentityArgs>[]>;
        /**
         * The pod identity exceptions to allow.
         */
        userAssignedIdentityExceptions?: pulumi.Input<pulumi.Input<ManagedClusterPodIdentityExceptionArgs>[]>;
    }

    /**
     * Parameters to be applied to the cluster-autoscaler when enabled
     */
    export interface ManagedClusterPropertiesAutoScalerProfileArgs {
        /**
         * Valid values are 'true' and 'false'
         */
        balanceSimilarNodeGroups?: pulumi.Input<string>;
        /**
         * If not specified, the default is 'random'. See [expanders](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#what-are-expanders) for more information.
         */
        expander?: pulumi.Input<string | enums.Expander>;
        /**
         * The default is 10.
         */
        maxEmptyBulkDelete?: pulumi.Input<string>;
        /**
         * The default is 600.
         */
        maxGracefulTerminationSec?: pulumi.Input<string>;
        /**
         * The default is '15m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
         */
        maxNodeProvisionTime?: pulumi.Input<string>;
        /**
         * The default is 45. The maximum is 100 and the minimum is 0.
         */
        maxTotalUnreadyPercentage?: pulumi.Input<string>;
        /**
         * For scenarios like burst/batch scale where you don't want CA to act before the kubernetes scheduler could schedule all the pods, you can tell CA to ignore unscheduled pods before they're a certain age. The default is '0s'. Values must be an integer followed by a unit ('s' for seconds, 'm' for minutes, 'h' for hours, etc).
         */
        newPodScaleUpDelay?: pulumi.Input<string>;
        /**
         * This must be an integer. The default is 3.
         */
        okTotalUnreadyCount?: pulumi.Input<string>;
        /**
         * The default is '10m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
         */
        scaleDownDelayAfterAdd?: pulumi.Input<string>;
        /**
         * The default is the scan-interval. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
         */
        scaleDownDelayAfterDelete?: pulumi.Input<string>;
        /**
         * The default is '3m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
         */
        scaleDownDelayAfterFailure?: pulumi.Input<string>;
        /**
         * The default is '10m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
         */
        scaleDownUnneededTime?: pulumi.Input<string>;
        /**
         * The default is '20m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
         */
        scaleDownUnreadyTime?: pulumi.Input<string>;
        /**
         * The default is '0.5'.
         */
        scaleDownUtilizationThreshold?: pulumi.Input<string>;
        /**
         * The default is '10'. Values must be an integer number of seconds.
         */
        scanInterval?: pulumi.Input<string>;
        /**
         * The default is true.
         */
        skipNodesWithLocalStorage?: pulumi.Input<string>;
        /**
         * The default is true.
         */
        skipNodesWithSystemPods?: pulumi.Input<string>;
    }

    export interface ManagedClusterPropertiesIdentityProfileArgs {
        /**
         * The client ID of the user assigned identity.
         */
        clientId?: pulumi.Input<string>;
        /**
         * The object ID of the user assigned identity.
         */
        objectId?: pulumi.Input<string>;
        /**
         * The resource ID of the user assigned identity.
         */
        resourceId?: pulumi.Input<string>;
    }

    /**
     * The SKU of a Managed Cluster.
     */
    export interface ManagedClusterSKUArgs {
        /**
         * The name of a managed cluster SKU.
         */
        name?: pulumi.Input<string | enums.ManagedClusterSKUName>;
        /**
         * If not specified, the default is 'Free'. See [uptime SLA](https://docs.microsoft.com/azure/aks/uptime-sla) for more details.
         */
        tier?: pulumi.Input<string | enums.ManagedClusterSKUTier>;
    }

    /**
     * Information about a service principal identity for the cluster to use for manipulating Azure APIs.
     */
    export interface ManagedClusterServicePrincipalProfileArgs {
        /**
         * The ID for the service principal.
         */
        clientId: pulumi.Input<string>;
        /**
         * The secret password associated with the service principal in plain text.
         */
        secret?: pulumi.Input<string>;
    }

    /**
     * Profile for Windows VMs in the managed cluster.
     */
    export interface ManagedClusterWindowsProfileArgs {
        /**
         * Specifies the password of the administrator account. <br><br> **Minimum-length:** 8 characters <br><br> **Max-length:** 123 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!"
         */
        adminPassword?: pulumi.Input<string>;
        /**
         * Specifies the name of the administrator account. <br><br> **Restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length:** 1 character <br><br> **Max-length:** 20 characters
         */
        adminUsername: pulumi.Input<string>;
        /**
         * For more details on CSI proxy, see the [CSI proxy GitHub repo](https://github.com/kubernetes-csi/csi-proxy).
         */
        enableCSIProxy?: pulumi.Input<boolean>;
        /**
         * The license type to use for Windows VMs. See [Azure Hybrid User Benefits](https://azure.microsoft.com/pricing/hybrid-benefit/faq/) for more details.
         */
        licenseType?: pulumi.Input<string | enums.LicenseType>;
    }

    /**
     * A private link resource
     */
    export interface PrivateLinkResourceArgs {
        /**
         * The group ID of the resource.
         */
        groupId?: pulumi.Input<string>;
        /**
         * The ID of the private link resource.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the private link resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The RequiredMembers of the resource
         */
        requiredMembers?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The resource type.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * A reference to an Azure resource.
     */
    export interface ResourceReferenceArgs {
        /**
         * The fully qualified Azure resource id.
         */
        id?: pulumi.Input<string>;
    }

    /**
     * Sysctl settings for Linux agent nodes.
     */
    export interface SysctlConfigArgs {
        /**
         * Sysctl setting fs.aio-max-nr.
         */
        fsAioMaxNr?: pulumi.Input<number>;
        /**
         * Sysctl setting fs.file-max.
         */
        fsFileMax?: pulumi.Input<number>;
        /**
         * Sysctl setting fs.inotify.max_user_watches.
         */
        fsInotifyMaxUserWatches?: pulumi.Input<number>;
        /**
         * Sysctl setting fs.nr_open.
         */
        fsNrOpen?: pulumi.Input<number>;
        /**
         * Sysctl setting kernel.threads-max.
         */
        kernelThreadsMax?: pulumi.Input<number>;
        /**
         * Sysctl setting net.core.netdev_max_backlog.
         */
        netCoreNetdevMaxBacklog?: pulumi.Input<number>;
        /**
         * Sysctl setting net.core.optmem_max.
         */
        netCoreOptmemMax?: pulumi.Input<number>;
        /**
         * Sysctl setting net.core.rmem_default.
         */
        netCoreRmemDefault?: pulumi.Input<number>;
        /**
         * Sysctl setting net.core.rmem_max.
         */
        netCoreRmemMax?: pulumi.Input<number>;
        /**
         * Sysctl setting net.core.somaxconn.
         */
        netCoreSomaxconn?: pulumi.Input<number>;
        /**
         * Sysctl setting net.core.wmem_default.
         */
        netCoreWmemDefault?: pulumi.Input<number>;
        /**
         * Sysctl setting net.core.wmem_max.
         */
        netCoreWmemMax?: pulumi.Input<number>;
        /**
         * Sysctl setting net.ipv4.ip_local_port_range.
         */
        netIpv4IpLocalPortRange?: pulumi.Input<string>;
        /**
         * Sysctl setting net.ipv4.neigh.default.gc_thresh1.
         */
        netIpv4NeighDefaultGcThresh1?: pulumi.Input<number>;
        /**
         * Sysctl setting net.ipv4.neigh.default.gc_thresh2.
         */
        netIpv4NeighDefaultGcThresh2?: pulumi.Input<number>;
        /**
         * Sysctl setting net.ipv4.neigh.default.gc_thresh3.
         */
        netIpv4NeighDefaultGcThresh3?: pulumi.Input<number>;
        /**
         * Sysctl setting net.ipv4.tcp_fin_timeout.
         */
        netIpv4TcpFinTimeout?: pulumi.Input<number>;
        /**
         * Sysctl setting net.ipv4.tcp_keepalive_probes.
         */
        netIpv4TcpKeepaliveProbes?: pulumi.Input<number>;
        /**
         * Sysctl setting net.ipv4.tcp_keepalive_time.
         */
        netIpv4TcpKeepaliveTime?: pulumi.Input<number>;
        /**
         * Sysctl setting net.ipv4.tcp_max_syn_backlog.
         */
        netIpv4TcpMaxSynBacklog?: pulumi.Input<number>;
        /**
         * Sysctl setting net.ipv4.tcp_max_tw_buckets.
         */
        netIpv4TcpMaxTwBuckets?: pulumi.Input<number>;
        /**
         * Sysctl setting net.ipv4.tcp_tw_reuse.
         */
        netIpv4TcpTwReuse?: pulumi.Input<boolean>;
        /**
         * Sysctl setting net.ipv4.tcp_keepalive_intvl.
         */
        netIpv4TcpkeepaliveIntvl?: pulumi.Input<number>;
        /**
         * Sysctl setting net.netfilter.nf_conntrack_buckets.
         */
        netNetfilterNfConntrackBuckets?: pulumi.Input<number>;
        /**
         * Sysctl setting net.netfilter.nf_conntrack_max.
         */
        netNetfilterNfConntrackMax?: pulumi.Input<number>;
        /**
         * Sysctl setting vm.max_map_count.
         */
        vmMaxMapCount?: pulumi.Input<number>;
        /**
         * Sysctl setting vm.swappiness.
         */
        vmSwappiness?: pulumi.Input<number>;
        /**
         * Sysctl setting vm.vfs_cache_pressure.
         */
        vmVfsCachePressure?: pulumi.Input<number>;
    }

    /**
     * Details about a user assigned identity.
     */
    export interface UserAssignedIdentityArgs {
        /**
         * The client ID of the user assigned identity.
         */
        clientId?: pulumi.Input<string>;
        /**
         * The object ID of the user assigned identity.
         */
        objectId?: pulumi.Input<string>;
        /**
         * The resource ID of the user assigned identity.
         */
        resourceId?: pulumi.Input<string>;
    }
