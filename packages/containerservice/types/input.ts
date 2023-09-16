import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace containerservice {
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
     * Azure Key Vault key management service settings for the security profile.
     */
    export interface AzureKeyVaultKmsArgs {
        /**
         * Whether to enable Azure Key Vault key management service. The default is false.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * Identifier of Azure Key Vault key. See [key identifier format](https://docs.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates#vault-name-and-object-name) for more details. When Azure Key Vault key management service is enabled, this field is required and must be a valid key identifier. When Azure Key Vault key management service is disabled, leave the field empty.
         */
        keyId?: pulumi.Input<string>;
        /**
         * Network access of key vault. The possible values are `Public` and `Private`. `Public` means the key vault allows public access from all networks. `Private` means the key vault disables public access and enables private link. The default value is `Public`.
         */
        keyVaultNetworkAccess?: pulumi.Input<string | enums.KeyVaultNetworkAccessTypes>;
        /**
         * Resource ID of key vault. When keyVaultNetworkAccess is `Private`, this field is required and must be a valid resource ID. When keyVaultNetworkAccess is `Public`, leave the field empty.
         */
        keyVaultResourceId?: pulumi.Input<string>;
    }
    /**
     * azureKeyVaultKmsArgsProvideDefaults sets the appropriate defaults for AzureKeyVaultKmsArgs
     */
    export function azureKeyVaultKmsArgsProvideDefaults(val: AzureKeyVaultKmsArgs): AzureKeyVaultKmsArgs {
        return {
            ...val,
            keyVaultNetworkAccess: (val.keyVaultNetworkAccess) ?? "Public",
        };
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
         * IP families are used to determine single-stack or dual-stack clusters. For single-stack, the expected value is IPv4. For dual-stack, the expected values are IPv4 and IPv6.
         */
        ipFamilies?: pulumi.Input<pulumi.Input<string | enums.IpFamily>[]>;
        /**
         * Profile of the cluster load balancer.
         */
        loadBalancerProfile?: pulumi.Input<ManagedClusterLoadBalancerProfileArgs>;
        /**
         * The default is 'standard'. See [Azure Load Balancer SKUs](https://docs.microsoft.com/azure/load-balancer/skus) for more information about the differences between load balancer SKUs.
         */
        loadBalancerSku?: pulumi.Input<string | enums.LoadBalancerSku>;
        /**
         * Profile of the cluster NAT gateway.
         */
        natGatewayProfile?: pulumi.Input<ManagedClusterNATGatewayProfileArgs>;
        /**
         * Network dataplane used in the Kubernetes cluster.
         */
        networkDataplane?: pulumi.Input<string | enums.NetworkDataplane>;
        /**
         * This cannot be specified if networkPlugin is anything other than 'azure'.
         */
        networkMode?: pulumi.Input<string | enums.NetworkMode>;
        /**
         * Network plugin used for building the Kubernetes network.
         */
        networkPlugin?: pulumi.Input<string | enums.NetworkPlugin>;
        /**
         * The mode the network plugin should use.
         */
        networkPluginMode?: pulumi.Input<string | enums.NetworkPluginMode>;
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
         * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
         */
        podCidrs?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
         */
        serviceCidr?: pulumi.Input<string>;
        /**
         * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking. They must not overlap with any Subnet IP ranges.
         */
        serviceCidrs?: pulumi.Input<pulumi.Input<string>[]>;
    }
    /**
     * containerServiceNetworkProfileArgsProvideDefaults sets the appropriate defaults for ContainerServiceNetworkProfileArgs
     */
    export function containerServiceNetworkProfileArgsProvideDefaults(val: ContainerServiceNetworkProfileArgs): ContainerServiceNetworkProfileArgs {
        return {
            ...val,
            dnsServiceIP: (val.dnsServiceIP) ?? "10.0.0.10",
            loadBalancerProfile: (val.loadBalancerProfile ? pulumi.output(val.loadBalancerProfile).apply(managedClusterLoadBalancerProfileArgsProvideDefaults) : undefined),
            natGatewayProfile: (val.natGatewayProfile ? pulumi.output(val.natGatewayProfile).apply(managedClusterNATGatewayProfileArgsProvideDefaults) : undefined),
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
     * Data used when creating a target resource from a source resource.
     */
    export interface CreationDataArgs {
        /**
         * This is the ARM ID of the source object to be used to create the target object.
         */
        sourceResourceId?: pulumi.Input<string>;
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
     * The FleetHubProfile configures the fleet hub.
     */
    export interface FleetHubProfileArgs {
        /**
         * DNS prefix used to create the FQDN for the Fleet hub.
         */
        dnsPrefix?: pulumi.Input<string>;
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
         * (DEPRECATED) The client AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
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
         * (DEPRECATED) The server AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
         */
        serverAppID?: pulumi.Input<string>;
        /**
         * (DEPRECATED) The server AAD application secret. Learn more at https://aka.ms/aks/aad-legacy.
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
         * Whether to disable run command for the cluster or not.
         */
        disableRunCommand?: pulumi.Input<boolean>;
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
         * CreationData to be used to specify the source Snapshot ID if the node pool will be created/upgraded using a snapshot.
         */
        creationData?: pulumi.Input<CreationDataArgs>;
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
         * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}. For more information see [Azure dedicated hosts](https://docs.microsoft.com/azure/virtual-machines/dedicated-hosts).
         */
        hostGroupID?: pulumi.Input<string>;
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
         * Both patch version <major.minor.patch> (e.g. 1.20.13) and <major.minor> (e.g. 1.20) are supported. When <major.minor> is specified, the latest supported GA patch version is chosen automatically. Updating the cluster with the same <major.minor> once it has been created (e.g. 1.14.x -> 1.14) will not trigger an upgrade, even if a newer patch version is available. As a best practice, you should upgrade all node pools in an AKS cluster to the same Kubernetes version. The node pool version must have the same major version as the control plane. The node pool minor version must be within two minor versions of the control plane version. The node pool version cannot be greater than the control plane version. For more information see [upgrading a node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#upgrade-a-node-pool).
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
         * Specifies the OS SKU used by the agent pool. The default is Ubuntu if OSType is Linux. The default is Windows2019 when Kubernetes <= 1.24 or Windows2022 when Kubernetes >= 1.25 if OSType is Windows.
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
         * When an Agent Pool is first created it is initially Running. The Agent Pool can be stopped by setting this field to Stopped. A stopped Agent Pool stops all of its VMs and does not accrue billing charges. An Agent Pool can only be stopped if it is Running and provisioning state is Succeeded
         */
        powerState?: pulumi.Input<PowerStateArgs>;
        /**
         * The ID for Proximity Placement Group.
         */
        proximityPlacementGroupID?: pulumi.Input<string>;
        /**
         * This also effects the cluster autoscaler behavior. If not specified, it defaults to Delete.
         */
        scaleDownMode?: pulumi.Input<string | enums.ScaleDownMode>;
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
        /**
         * Determines the type of workload a node can run.
         */
        workloadRuntime?: pulumi.Input<string | enums.WorkloadRuntime>;
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
     * Azure Monitor addon profiles for monitoring the managed cluster.
     */
    export interface ManagedClusterAzureMonitorProfileArgs {
        /**
         * Metrics profile for the Azure Monitor managed service for Prometheus addon. Collect out-of-the-box Kubernetes infrastructure metrics to send to an Azure Monitor Workspace and configure additional scraping for custom targets. See aka.ms/AzureManagedPrometheus for an overview.
         */
        metrics?: pulumi.Input<ManagedClusterAzureMonitorProfileMetricsArgs>;
    }

    /**
     * Kube State Metrics profile for the Azure Managed Prometheus addon. These optional settings are for the kube-state-metrics pod that is deployed with the addon. See aka.ms/AzureManagedPrometheus-optional-parameters for details.
     */
    export interface ManagedClusterAzureMonitorProfileKubeStateMetricsArgs {
        /**
         * Comma-separated list of Kubernetes annotation keys that will be used in the resource's labels metric (Example: 'namespaces=[kubernetes.io/team,...],pods=[kubernetes.io/team],...'). By default the metric contains only resource name and namespace labels.
         */
        metricAnnotationsAllowList?: pulumi.Input<string>;
        /**
         * Comma-separated list of additional Kubernetes label keys that will be used in the resource's labels metric (Example: 'namespaces=[k8s-label-1,k8s-label-n,...],pods=[app],...'). By default the metric contains only resource name and namespace labels.
         */
        metricLabelsAllowlist?: pulumi.Input<string>;
    }

    /**
     * Metrics profile for the Azure Monitor managed service for Prometheus addon. Collect out-of-the-box Kubernetes infrastructure metrics to send to an Azure Monitor Workspace and configure additional scraping for custom targets. See aka.ms/AzureManagedPrometheus for an overview.
     */
    export interface ManagedClusterAzureMonitorProfileMetricsArgs {
        /**
         * Whether to enable or disable the Azure Managed Prometheus addon for Prometheus monitoring. See aka.ms/AzureManagedPrometheus-aks-enable for details on enabling and disabling.
         */
        enabled: pulumi.Input<boolean>;
        /**
         * Kube State Metrics profile for the Azure Managed Prometheus addon. These optional settings are for the kube-state-metrics pod that is deployed with the addon. See aka.ms/AzureManagedPrometheus-optional-parameters for details.
         */
        kubeStateMetrics?: pulumi.Input<ManagedClusterAzureMonitorProfileKubeStateMetricsArgs>;
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
         * Enable multiple standard load balancers per AKS cluster or not.
         */
        enableMultipleStandardLoadBalancers?: pulumi.Input<boolean>;
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
         * The desired number of IPv4 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1. 
         */
        count?: pulumi.Input<number>;
        /**
         * The desired number of IPv6 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 0 for single-stack and 1 for dual-stack. 
         */
        countIPv6?: pulumi.Input<number>;
    }
    /**
     * managedClusterLoadBalancerProfileManagedOutboundIPsArgsProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs
     */
    export function managedClusterLoadBalancerProfileManagedOutboundIPsArgsProvideDefaults(val: ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs): ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs {
        return {
            ...val,
            count: (val.count) ?? 1,
            countIPv6: (val.countIPv6) ?? 0,
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
     * Profile of the managed outbound IP resources of the managed cluster.
     */
    export interface ManagedClusterManagedOutboundIPProfileArgs {
        /**
         * The desired number of outbound IPs created/managed by Azure. Allowed values must be in the range of 1 to 16 (inclusive). The default value is 1. 
         */
        count?: pulumi.Input<number>;
    }
    /**
     * managedClusterManagedOutboundIPProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterManagedOutboundIPProfileArgs
     */
    export function managedClusterManagedOutboundIPProfileArgsProvideDefaults(val: ManagedClusterManagedOutboundIPProfileArgs): ManagedClusterManagedOutboundIPProfileArgs {
        return {
            ...val,
            count: (val.count) ?? 1,
        };
    }

    /**
     * Profile of the managed cluster NAT gateway.
     */
    export interface ManagedClusterNATGatewayProfileArgs {
        /**
         * The effective outbound IP resources of the cluster NAT gateway.
         */
        effectiveOutboundIPs?: pulumi.Input<pulumi.Input<ResourceReferenceArgs>[]>;
        /**
         * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 4 minutes.
         */
        idleTimeoutInMinutes?: pulumi.Input<number>;
        /**
         * Profile of the managed outbound IP resources of the cluster NAT gateway.
         */
        managedOutboundIPProfile?: pulumi.Input<ManagedClusterManagedOutboundIPProfileArgs>;
    }
    /**
     * managedClusterNATGatewayProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterNATGatewayProfileArgs
     */
    export function managedClusterNATGatewayProfileArgsProvideDefaults(val: ManagedClusterNATGatewayProfileArgs): ManagedClusterNATGatewayProfileArgs {
        return {
            ...val,
            idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 4,
            managedOutboundIPProfile: (val.managedOutboundIPProfile ? pulumi.output(val.managedOutboundIPProfile).apply(managedClusterManagedOutboundIPProfileArgsProvideDefaults) : undefined),
        };
    }

    /**
     * The OIDC issuer profile of the Managed Cluster.
     */
    export interface ManagedClusterOIDCIssuerProfileArgs {
        /**
         * Whether the OIDC issuer is enabled.
         */
        enabled?: pulumi.Input<boolean>;
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

    /**
     * The SKU of a Managed Cluster.
     */
    export interface ManagedClusterSKUArgs {
        /**
         * The name of a managed cluster SKU.
         */
        name?: pulumi.Input<string | enums.ManagedClusterSKUName>;
        /**
         * If not specified, the default is 'Free'. See [AKS Pricing Tier](https://learn.microsoft.com/azure/aks/free-standard-pricing-tiers) for more details.
         */
        tier?: pulumi.Input<string | enums.ManagedClusterSKUTier>;
    }

    /**
     * Security profile for the container service cluster.
     */
    export interface ManagedClusterSecurityProfileArgs {
        /**
         * Azure Key Vault [key management service](https://kubernetes.io/docs/tasks/administer-cluster/kms-provider/) settings for the security profile.
         */
        azureKeyVaultKms?: pulumi.Input<AzureKeyVaultKmsArgs>;
        /**
         * Microsoft Defender settings for the security profile.
         */
        defender?: pulumi.Input<ManagedClusterSecurityProfileDefenderArgs>;
        /**
         * Image Cleaner settings for the security profile.
         */
        imageCleaner?: pulumi.Input<ManagedClusterSecurityProfileImageCleanerArgs>;
        /**
         * Workload identity settings for the security profile. Workload identity enables Kubernetes applications to access Azure cloud resources securely with Azure AD. See https://aka.ms/aks/wi for more details.
         */
        workloadIdentity?: pulumi.Input<ManagedClusterSecurityProfileWorkloadIdentityArgs>;
    }
    /**
     * managedClusterSecurityProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterSecurityProfileArgs
     */
    export function managedClusterSecurityProfileArgsProvideDefaults(val: ManagedClusterSecurityProfileArgs): ManagedClusterSecurityProfileArgs {
        return {
            ...val,
            azureKeyVaultKms: (val.azureKeyVaultKms ? pulumi.output(val.azureKeyVaultKms).apply(azureKeyVaultKmsArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Microsoft Defender settings for the security profile.
     */
    export interface ManagedClusterSecurityProfileDefenderArgs {
        /**
         * Resource ID of the Log Analytics workspace to be associated with Microsoft Defender. When Microsoft Defender is enabled, this field is required and must be a valid workspace resource ID. When Microsoft Defender is disabled, leave the field empty.
         */
        logAnalyticsWorkspaceResourceId?: pulumi.Input<string>;
        /**
         * Microsoft Defender threat detection for Cloud settings for the security profile.
         */
        securityMonitoring?: pulumi.Input<ManagedClusterSecurityProfileDefenderSecurityMonitoringArgs>;
    }

    /**
     * Microsoft Defender settings for the security profile threat detection.
     */
    export interface ManagedClusterSecurityProfileDefenderSecurityMonitoringArgs {
        /**
         * Whether to enable Defender threat detection
         */
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * Image Cleaner removes unused images from nodes, freeing up disk space and helping to reduce attack surface area. Here are settings for the security profile.
     */
    export interface ManagedClusterSecurityProfileImageCleanerArgs {
        /**
         * Whether to enable Image Cleaner on AKS cluster.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * Image Cleaner scanning interval in hours.
         */
        intervalHours?: pulumi.Input<number>;
    }

    /**
     * Workload identity settings for the security profile.
     */
    export interface ManagedClusterSecurityProfileWorkloadIdentityArgs {
        /**
         * Whether to enable workload identity.
         */
        enabled?: pulumi.Input<boolean>;
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
     * Storage profile for the container service cluster.
     */
    export interface ManagedClusterStorageProfileArgs {
        /**
         * AzureBlob CSI Driver settings for the storage profile.
         */
        blobCSIDriver?: pulumi.Input<ManagedClusterStorageProfileBlobCSIDriverArgs>;
        /**
         * AzureDisk CSI Driver settings for the storage profile.
         */
        diskCSIDriver?: pulumi.Input<ManagedClusterStorageProfileDiskCSIDriverArgs>;
        /**
         * AzureFile CSI Driver settings for the storage profile.
         */
        fileCSIDriver?: pulumi.Input<ManagedClusterStorageProfileFileCSIDriverArgs>;
        /**
         * Snapshot Controller settings for the storage profile.
         */
        snapshotController?: pulumi.Input<ManagedClusterStorageProfileSnapshotControllerArgs>;
    }

    /**
     * AzureBlob CSI Driver settings for the storage profile.
     */
    export interface ManagedClusterStorageProfileBlobCSIDriverArgs {
        /**
         * Whether to enable AzureBlob CSI Driver. The default value is false.
         */
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * AzureDisk CSI Driver settings for the storage profile.
     */
    export interface ManagedClusterStorageProfileDiskCSIDriverArgs {
        /**
         * Whether to enable AzureDisk CSI Driver. The default value is true.
         */
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * AzureFile CSI Driver settings for the storage profile.
     */
    export interface ManagedClusterStorageProfileFileCSIDriverArgs {
        /**
         * Whether to enable AzureFile CSI Driver. The default value is true.
         */
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * Snapshot Controller settings for the storage profile.
     */
    export interface ManagedClusterStorageProfileSnapshotControllerArgs {
        /**
         * Whether to enable Snapshot Controller. The default value is true.
         */
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * The update to be applied to the ManagedClusters.
     */
    export interface ManagedClusterUpdateArgs {
        /**
         * The upgrade to apply to the ManagedClusters.
         */
        upgrade: pulumi.Input<ManagedClusterUpgradeSpecArgs>;
    }

    /**
     * The upgrade to apply to a ManagedCluster.
     */
    export interface ManagedClusterUpgradeSpecArgs {
        /**
         * The Kubernetes version to upgrade the member clusters to.
         */
        kubernetesVersion?: pulumi.Input<string>;
        /**
         * The upgrade type.
         * Full requires the KubernetesVersion property to be set.
         * NodeImageOnly requires the KubernetesVersion property not to be set.
         */
        type: pulumi.Input<string | enums.ManagedClusterUpgradeType>;
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
         * The Windows gMSA Profile in the Managed Cluster.
         */
        gmsaProfile?: pulumi.Input<WindowsGmsaProfileArgs>;
        /**
         * The license type to use for Windows VMs. See [Azure Hybrid User Benefits](https://azure.microsoft.com/pricing/hybrid-benefit/faq/) for more details.
         */
        licenseType?: pulumi.Input<string | enums.LicenseType>;
    }

    /**
     * Workload Auto-scaler profile for the managed cluster.
     */
    export interface ManagedClusterWorkloadAutoScalerProfileArgs {
        /**
         * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
         */
        keda?: pulumi.Input<ManagedClusterWorkloadAutoScalerProfileKedaArgs>;
    }

    /**
     * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
     */
    export interface ManagedClusterWorkloadAutoScalerProfileKedaArgs {
        /**
         * Whether to enable KEDA.
         */
        enabled: pulumi.Input<boolean>;
    }

    /**
     * Represents the OpenShift networking configuration
     */
    export interface NetworkProfileArgs {
        /**
         * CIDR of subnet used to create PLS needed for management of the cluster
         */
        managementSubnetCidr?: pulumi.Input<string>;
        /**
         * CIDR for the OpenShift Vnet.
         */
        vnetCidr?: pulumi.Input<string>;
        /**
         * ID of the Vnet created for OSA cluster.
         */
        vnetId?: pulumi.Input<string>;
    }
    /**
     * networkProfileArgsProvideDefaults sets the appropriate defaults for NetworkProfileArgs
     */
    export function networkProfileArgsProvideDefaults(val: NetworkProfileArgs): NetworkProfileArgs {
        return {
            ...val,
            vnetCidr: (val.vnetCidr) ?? "10.0.0.0/8",
        };
    }

    /**
     * Defines further properties on the API.
     */
    export interface OpenShiftAPIPropertiesArgs {
        /**
         * Specifies if API server is public or private.
         */
        privateApiServer?: pulumi.Input<boolean>;
    }

    /**
     * Defines the Identity provider for MS AAD.
     */
    export interface OpenShiftManagedClusterAADIdentityProviderArgs {
        /**
         * The clientId password associated with the provider.
         */
        clientId?: pulumi.Input<string>;
        /**
         * The groupId to be granted cluster admin role.
         */
        customerAdminGroupId?: pulumi.Input<string>;
        /**
         * The kind of the provider.
         * Expected value is 'AADIdentityProvider'.
         */
        kind: pulumi.Input<"AADIdentityProvider">;
        /**
         * The secret password associated with the provider.
         */
        secret?: pulumi.Input<string>;
        /**
         * The tenantId associated with the provider.
         */
        tenantId?: pulumi.Input<string>;
    }

    /**
     * Defines the configuration of the OpenShift cluster VMs.
     */
    export interface OpenShiftManagedClusterAgentPoolProfileArgs {
        /**
         * Number of agents (VMs) to host docker containers.
         */
        count: pulumi.Input<number>;
        /**
         * Unique name of the pool profile in the context of the subscription and resource group.
         */
        name: pulumi.Input<string>;
        /**
         * OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
         */
        osType?: pulumi.Input<string | enums.OSType>;
        /**
         * Define the role of the AgentPoolProfile.
         */
        role?: pulumi.Input<string | enums.OpenShiftAgentPoolProfileRole>;
        /**
         * Subnet CIDR for the peering.
         */
        subnetCidr?: pulumi.Input<string>;
        /**
         * Size of agent VMs.
         */
        vmSize: pulumi.Input<string | enums.OpenShiftContainerServiceVMSize>;
    }
    /**
     * openShiftManagedClusterAgentPoolProfileArgsProvideDefaults sets the appropriate defaults for OpenShiftManagedClusterAgentPoolProfileArgs
     */
    export function openShiftManagedClusterAgentPoolProfileArgsProvideDefaults(val: OpenShiftManagedClusterAgentPoolProfileArgs): OpenShiftManagedClusterAgentPoolProfileArgs {
        return {
            ...val,
            subnetCidr: (val.subnetCidr) ?? "10.0.0.0/24",
        };
    }

    /**
     * Defines all possible authentication profiles for the OpenShift cluster.
     */
    export interface OpenShiftManagedClusterAuthProfileArgs {
        /**
         * Type of authentication profile to use.
         */
        identityProviders?: pulumi.Input<pulumi.Input<OpenShiftManagedClusterIdentityProviderArgs>[]>;
    }

    /**
     * Defines the configuration of the identity providers to be used in the OpenShift cluster.
     */
    export interface OpenShiftManagedClusterIdentityProviderArgs {
        /**
         * Name of the provider.
         */
        name?: pulumi.Input<string>;
        /**
         * Configuration of the provider.
         */
        provider?: pulumi.Input<OpenShiftManagedClusterAADIdentityProviderArgs>;
    }

    /**
     * OpenShiftManagedClusterMaterPoolProfile contains configuration for OpenShift master VMs.
     */
    export interface OpenShiftManagedClusterMasterPoolProfileArgs {
        /**
         * Defines further properties on the API.
         */
        apiProperties?: pulumi.Input<OpenShiftAPIPropertiesArgs>;
        /**
         * Number of masters (VMs) to host docker containers. The default value is 3.
         */
        count: pulumi.Input<number>;
        /**
         * Subnet CIDR for the peering.
         */
        subnetCidr?: pulumi.Input<string>;
        /**
         * Size of agent VMs.
         */
        vmSize: pulumi.Input<string | enums.OpenShiftContainerServiceVMSize>;
    }

    /**
     * Defines the configuration for Log Analytics integration.
     */
    export interface OpenShiftManagedClusterMonitorProfileArgs {
        /**
         * If the Log analytics integration should be turned on or off
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * Azure Resource Manager Resource ID for the Log Analytics workspace to integrate with.
         */
        workspaceResourceID?: pulumi.Input<string>;
    }

    /**
     * Represents an OpenShift router
     */
    export interface OpenShiftRouterProfileArgs {
        /**
         * Name of the router profile.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Describes the Power State of the cluster
     */
    export interface PowerStateArgs {
        /**
         * Tells whether the cluster is Running or Stopped
         */
        code?: pulumi.Input<string | enums.Code>;
    }

    /**
     * Private endpoint which a connection belongs to.
     */
    export interface PrivateEndpointArgs {
        /**
         * The resource ID of the private endpoint
         */
        id?: pulumi.Input<string>;
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
     * The state of a private link service connection.
     */
    export interface PrivateLinkServiceConnectionStateArgs {
        /**
         * The private link service connection description.
         */
        description?: pulumi.Input<string>;
        /**
         * The private link service connection status.
         */
        status?: pulumi.Input<string | enums.ConnectionStatus>;
    }

    /**
     * Used for establishing the purchase context of any 3rd Party artifact through MarketPlace.
     */
    export interface PurchasePlanArgs {
        /**
         * The plan ID.
         */
        name?: pulumi.Input<string>;
        /**
         * Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
         */
        product?: pulumi.Input<string>;
        /**
         * The promotion code.
         */
        promotionCode?: pulumi.Input<string>;
        /**
         * The plan ID.
         */
        publisher?: pulumi.Input<string>;
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
     * Time in a week.
     */
    export interface TimeInWeekArgs {
        /**
         * The day of the week.
         */
        day?: pulumi.Input<string | enums.WeekDay>;
        /**
         * Each integer hour represents a time range beginning at 0m after the hour ending at the next hour (non-inclusive). 0 corresponds to 00:00 UTC, 23 corresponds to 23:00 UTC. Specifying [0, 1] means the 00:00 - 02:00 UTC time range.
         */
        hourSlots?: pulumi.Input<pulumi.Input<number>[]>;
    }

    /**
     * For example, between 2021-05-25T13:00:00Z and 2021-05-25T14:00:00Z.
     */
    export interface TimeSpanArgs {
        /**
         * The end of a time span
         */
        end?: pulumi.Input<string>;
        /**
         * The start of a time span
         */
        start?: pulumi.Input<string>;
    }

    /**
     * A group to be updated.
     */
    export interface UpdateGroupArgs {
        /**
         * The name of the Fleet member group to update. 
         * It should match the name of an existing FleetMember group.
         * A group can only appear once across all UpdateStages in the UpdateRun.
         */
        name: pulumi.Input<string>;
    }

    /**
     * The UpdateRunStrategy configures the sequence of Stages and Groups in which the clusters will be updated.
     */
    export interface UpdateRunStrategyArgs {
        /**
         * The list of stages that compose this update run.
         */
        stages: pulumi.Input<pulumi.Input<UpdateStageArgs>[]>;
    }

    /**
     * Contains the groups to be updated by an UpdateRun.
     * Update order:
     * - Sequential between stages: Stages run sequentially. The previous stage must complete before the next one starts.
     * - Parallel within a stage: Groups within a stage run in parallel.
     * - Sequential within a group: Clusters within a group are updated sequentially.
     */
    export interface UpdateStageArgs {
        /**
         * The time in seconds to wait at the end of this stage before starting the next one. Defaults to 0 seconds if unspecified.
         */
        afterStageWaitInSeconds?: pulumi.Input<number>;
        /**
         * A list of group names that compose the stage.
         * The groups will be updated in parallel. Each group name can only appear once in the UpdateRun.
         */
        groups?: pulumi.Input<pulumi.Input<UpdateGroupArgs>[]>;
        /**
         * The name of the stage. Must be unique within the UpdateRun.
         */
        name: pulumi.Input<string>;
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

    /**
     * Windows gMSA Profile in the managed cluster.
     */
    export interface WindowsGmsaProfileArgs {
        /**
         * Specifies the DNS server for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
         */
        dnsServer?: pulumi.Input<string>;
        /**
         * Specifies whether to enable Windows gMSA in the managed cluster.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * Specifies the root domain name for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
         */
        rootDomainName?: pulumi.Input<string>;
    }

    export namespace v20190601 {
        /**
         * Profile for Linux VMs in the container service cluster.
         */
        export interface ContainerServiceLinuxProfileArgs {
            /**
             * The administrator username to use for Linux VMs.
             */
            adminUsername: pulumi.Input<string>;
            /**
             * SSH configuration for Linux-based VMs running on Azure.
             */
            ssh: pulumi.Input<v20190601.ContainerServiceSshConfigurationArgs>;
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
             * The load balancer sku for the managed cluster.
             */
            loadBalancerSku?: pulumi.Input<string | enums.v20190601.LoadBalancerSku>;
            /**
             * Network plugin used for building Kubernetes network.
             */
            networkPlugin?: pulumi.Input<string | enums.v20190601.NetworkPlugin>;
            /**
             * Network policy used for building Kubernetes network.
             */
            networkPolicy?: pulumi.Input<string | enums.v20190601.NetworkPolicy>;
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
                networkPlugin: (val.networkPlugin) ?? "kubenet",
                podCidr: (val.podCidr) ?? "10.244.0.0/16",
                serviceCidr: (val.serviceCidr) ?? "10.0.0.0/16",
            };
        }

        /**
         * SSH configuration for Linux-based VMs running on Azure.
         */
        export interface ContainerServiceSshConfigurationArgs {
            /**
             * The list of SSH public keys used to authenticate with Linux-based VMs. Only expect one key specified.
             */
            publicKeys: pulumi.Input<pulumi.Input<v20190601.ContainerServiceSshPublicKeyArgs>[]>;
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
         * AADProfile specifies attributes for Azure Active Directory integration.
         */
        export interface ManagedClusterAADProfileArgs {
            /**
             * The client AAD application ID.
             */
            clientAppID: pulumi.Input<string>;
            /**
             * The server AAD application ID.
             */
            serverAppID: pulumi.Input<string>;
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
             * (PREVIEW) Availability zones for nodes. Must use VirtualMachineScaleSets AgentPoolType.
             */
            availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Number of agents (VMs) to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
             */
            count?: pulumi.Input<number>;
            /**
             * Whether to enable auto-scaler
             */
            enableAutoScaling?: pulumi.Input<boolean>;
            /**
             * Enable public IP for nodes
             */
            enableNodePublicIP?: pulumi.Input<boolean>;
            /**
             * Maximum number of nodes for auto-scaling
             */
            maxCount?: pulumi.Input<number>;
            /**
             * Maximum number of pods that can run on a node.
             */
            maxPods?: pulumi.Input<number>;
            /**
             * Minimum number of nodes for auto-scaling
             */
            minCount?: pulumi.Input<number>;
            /**
             * Unique name of the agent pool profile in the context of the subscription and resource group.
             */
            name: pulumi.Input<string>;
            /**
             * Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
             */
            nodeTaints?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Version of orchestrator specified when creating the managed cluster.
             */
            orchestratorVersion?: pulumi.Input<string>;
            /**
             * OS Disk Size in GB to be used to specify the disk size for every machine in this master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
             */
            osDiskSizeGB?: pulumi.Input<number>;
            /**
             * OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
             */
            osType?: pulumi.Input<string | enums.v20190601.OSType>;
            /**
             * ScaleSetEvictionPolicy to be used to specify eviction policy for low priority virtual machine scale set. Default to Delete.
             */
            scaleSetEvictionPolicy?: pulumi.Input<string | enums.v20190601.ScaleSetEvictionPolicy>;
            /**
             * ScaleSetPriority to be used to specify virtual machine scale set priority. Default to regular.
             */
            scaleSetPriority?: pulumi.Input<string | enums.v20190601.ScaleSetPriority>;
            /**
             * AgentPoolType represents types of an agent pool
             */
            type?: pulumi.Input<string | enums.v20190601.AgentPoolType>;
            /**
             * Size of agent VMs.
             */
            vmSize?: pulumi.Input<string | enums.v20190601.ContainerServiceVMSizeTypes>;
            /**
             * VNet SubnetID specifies the VNet's subnet identifier.
             */
            vnetSubnetID?: pulumi.Input<string>;
        }

        /**
         * Identity for the managed cluster.
         */
        export interface ManagedClusterIdentityArgs {
            /**
             * The type of identity used for the managed cluster. Type 'SystemAssigned' will use an implicitly created identity in master components and an auto-created user assigned identity in MC_ resource group in agent nodes. Type 'None' will not use MSI for the managed cluster, service principal will be used instead.
             */
            type?: pulumi.Input<enums.v20190601.ResourceIdentityType>;
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
         * Profile for Windows VMs in the container service cluster.
         */
        export interface ManagedClusterWindowsProfileArgs {
            /**
             * Specifies the password of the administrator account. <br><br> **Minimum-length:** 8 characters <br><br> **Max-length:** 123 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!"
             */
            adminPassword?: pulumi.Input<string>;
            /**
             * Specifies the name of the administrator account. <br><br> **restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length:** 1 character <br><br> **Max-length:** 20 characters
             */
            adminUsername: pulumi.Input<string>;
        }

    }

    export namespace v20191027preview {
        /**
         * Represents the OpenShift networking configuration
         */
        export interface NetworkProfileArgs {
            /**
             * CIDR of subnet used to create PLS needed for management of the cluster
             */
            managementSubnetCidr?: pulumi.Input<string>;
            /**
             * CIDR for the OpenShift Vnet.
             */
            vnetCidr?: pulumi.Input<string>;
            /**
             * ID of the Vnet created for OSA cluster.
             */
            vnetId?: pulumi.Input<string>;
        }
        /**
         * networkProfileArgsProvideDefaults sets the appropriate defaults for NetworkProfileArgs
         */
        export function networkProfileArgsProvideDefaults(val: NetworkProfileArgs): NetworkProfileArgs {
            return {
                ...val,
                vnetCidr: (val.vnetCidr) ?? "10.0.0.0/8",
            };
        }

        /**
         * Defines further properties on the API.
         */
        export interface OpenShiftAPIPropertiesArgs {
            /**
             * Specifies if API server is public or private.
             */
            privateApiServer?: pulumi.Input<boolean>;
        }

        /**
         * Defines the Identity provider for MS AAD.
         */
        export interface OpenShiftManagedClusterAADIdentityProviderArgs {
            /**
             * The clientId password associated with the provider.
             */
            clientId?: pulumi.Input<string>;
            /**
             * The groupId to be granted cluster admin role.
             */
            customerAdminGroupId?: pulumi.Input<string>;
            /**
             * The kind of the provider.
             * Expected value is 'AADIdentityProvider'.
             */
            kind: pulumi.Input<"AADIdentityProvider">;
            /**
             * The secret password associated with the provider.
             */
            secret?: pulumi.Input<string>;
            /**
             * The tenantId associated with the provider.
             */
            tenantId?: pulumi.Input<string>;
        }

        /**
         * Defines the configuration of the OpenShift cluster VMs.
         */
        export interface OpenShiftManagedClusterAgentPoolProfileArgs {
            /**
             * Number of agents (VMs) to host docker containers.
             */
            count: pulumi.Input<number>;
            /**
             * Unique name of the pool profile in the context of the subscription and resource group.
             */
            name: pulumi.Input<string>;
            /**
             * OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
             */
            osType?: pulumi.Input<string | enums.v20191027preview.OSType>;
            /**
             * Define the role of the AgentPoolProfile.
             */
            role?: pulumi.Input<string | enums.v20191027preview.OpenShiftAgentPoolProfileRole>;
            /**
             * Subnet CIDR for the peering.
             */
            subnetCidr?: pulumi.Input<string>;
            /**
             * Size of agent VMs.
             */
            vmSize: pulumi.Input<string | enums.v20191027preview.OpenShiftContainerServiceVMSize>;
        }
        /**
         * openShiftManagedClusterAgentPoolProfileArgsProvideDefaults sets the appropriate defaults for OpenShiftManagedClusterAgentPoolProfileArgs
         */
        export function openShiftManagedClusterAgentPoolProfileArgsProvideDefaults(val: OpenShiftManagedClusterAgentPoolProfileArgs): OpenShiftManagedClusterAgentPoolProfileArgs {
            return {
                ...val,
                subnetCidr: (val.subnetCidr) ?? "10.0.0.0/24",
            };
        }

        /**
         * Defines all possible authentication profiles for the OpenShift cluster.
         */
        export interface OpenShiftManagedClusterAuthProfileArgs {
            /**
             * Type of authentication profile to use.
             */
            identityProviders?: pulumi.Input<pulumi.Input<v20191027preview.OpenShiftManagedClusterIdentityProviderArgs>[]>;
        }

        /**
         * Defines the configuration of the identity providers to be used in the OpenShift cluster.
         */
        export interface OpenShiftManagedClusterIdentityProviderArgs {
            /**
             * Name of the provider.
             */
            name?: pulumi.Input<string>;
            /**
             * Configuration of the provider.
             */
            provider?: pulumi.Input<v20191027preview.OpenShiftManagedClusterAADIdentityProviderArgs>;
        }

        /**
         * OpenShiftManagedClusterMaterPoolProfile contains configuration for OpenShift master VMs.
         */
        export interface OpenShiftManagedClusterMasterPoolProfileArgs {
            /**
             * Defines further properties on the API.
             */
            apiProperties?: pulumi.Input<v20191027preview.OpenShiftAPIPropertiesArgs>;
            /**
             * Number of masters (VMs) to host docker containers. The default value is 3.
             */
            count: pulumi.Input<number>;
            /**
             * Subnet CIDR for the peering.
             */
            subnetCidr?: pulumi.Input<string>;
            /**
             * Size of agent VMs.
             */
            vmSize: pulumi.Input<string | enums.v20191027preview.OpenShiftContainerServiceVMSize>;
        }

        /**
         * Defines the configuration for Log Analytics integration.
         */
        export interface OpenShiftManagedClusterMonitorProfileArgs {
            /**
             * If the Log analytics integration should be turned on or off
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Azure Resource Manager Resource ID for the Log Analytics workspace to integrate with.
             */
            workspaceResourceID?: pulumi.Input<string>;
        }

        /**
         * Represents an OpenShift router
         */
        export interface OpenShiftRouterProfileArgs {
            /**
             * Name of the router profile.
             */
            name?: pulumi.Input<string>;
        }

        /**
         * Used for establishing the purchase context of any 3rd Party artifact through MarketPlace.
         */
        export interface PurchasePlanArgs {
            /**
             * The plan ID.
             */
            name?: pulumi.Input<string>;
            /**
             * Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
             */
            product?: pulumi.Input<string>;
            /**
             * The promotion code.
             */
            promotionCode?: pulumi.Input<string>;
            /**
             * The plan ID.
             */
            publisher?: pulumi.Input<string>;
        }

    }

    export namespace v20200601 {
        /**
         * Settings for upgrading an agentpool
         */
        export interface AgentPoolUpgradeSettingsArgs {
            /**
             * Count or percentage of additional nodes to be added during upgrade. If empty uses AKS default
             */
            maxSurge?: pulumi.Input<string>;
        }

    }

    export namespace v20210201 {
        /**
         * Settings for upgrading an agentpool
         */
        export interface AgentPoolUpgradeSettingsArgs {
            /**
             * Count or percentage of additional nodes to be added during upgrade. If empty uses AKS default
             */
            maxSurge?: pulumi.Input<string>;
        }

        /**
         * Kubelet configurations of agent nodes.
         */
        export interface KubeletConfigArgs {
            /**
             * Allowlist of unsafe sysctls or unsafe sysctl patterns (ending in `*`).
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
             * Enable CPU CFS quota enforcement for containers that specify CPU limits.
             */
            cpuCfsQuota?: pulumi.Input<boolean>;
            /**
             * Sets CPU CFS quota period value.
             */
            cpuCfsQuotaPeriod?: pulumi.Input<string>;
            /**
             * CPU Manager policy to use.
             */
            cpuManagerPolicy?: pulumi.Input<string>;
            /**
             * If set to true it will make the Kubelet fail to start if swap is enabled on the node.
             */
            failSwapOn?: pulumi.Input<boolean>;
            /**
             * The percent of disk usage after which image garbage collection is always run.
             */
            imageGcHighThreshold?: pulumi.Input<number>;
            /**
             * The percent of disk usage before which image garbage collection is never run.
             */
            imageGcLowThreshold?: pulumi.Input<number>;
            /**
             * The maximum number of processes per pod.
             */
            podMaxPids?: pulumi.Input<number>;
            /**
             * Topology Manager policy to use.
             */
            topologyManagerPolicy?: pulumi.Input<string>;
        }

        /**
         * OS configurations of Linux agent nodes.
         */
        export interface LinuxOSConfigArgs {
            /**
             * SwapFileSizeMB specifies size in MB of a swap file will be created on each node.
             */
            swapFileSizeMB?: pulumi.Input<number>;
            /**
             * Sysctl settings for Linux agent nodes.
             */
            sysctls?: pulumi.Input<v20210201.SysctlConfigArgs>;
            /**
             * Transparent Huge Page defrag configuration.
             */
            transparentHugePageDefrag?: pulumi.Input<string>;
            /**
             * Transparent Huge Page enabled configuration.
             */
            transparentHugePageEnabled?: pulumi.Input<string>;
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

    }

    export namespace v20210501 {
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
            ssh: pulumi.Input<v20210501.ContainerServiceSshConfigurationArgs>;
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
            loadBalancerProfile?: pulumi.Input<v20210501.ManagedClusterLoadBalancerProfileArgs>;
            /**
             * The default is 'standard'. See [Azure Load Balancer SKUs](https://docs.microsoft.com/azure/load-balancer/skus) for more information about the differences between load balancer SKUs.
             */
            loadBalancerSku?: pulumi.Input<string | enums.v20210501.LoadBalancerSku>;
            /**
             * This cannot be specified if networkPlugin is anything other than 'azure'.
             */
            networkMode?: pulumi.Input<string | enums.v20210501.NetworkMode>;
            /**
             * Network plugin used for building the Kubernetes network.
             */
            networkPlugin?: pulumi.Input<string | enums.v20210501.NetworkPlugin>;
            /**
             * Network policy used for building the Kubernetes network.
             */
            networkPolicy?: pulumi.Input<string | enums.v20210501.NetworkPolicy>;
            /**
             * This can only be set at cluster creation time and cannot be changed later. For more information see [egress outbound type](https://docs.microsoft.com/azure/aks/egress-outboundtype).
             */
            outboundType?: pulumi.Input<string | enums.v20210501.OutboundType>;
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
                loadBalancerProfile: (val.loadBalancerProfile ? pulumi.output(val.loadBalancerProfile).apply(v20210501.managedClusterLoadBalancerProfileArgsProvideDefaults) : undefined),
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
            publicKeys: pulumi.Input<pulumi.Input<v20210501.ContainerServiceSshPublicKeyArgs>[]>;
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
            type?: pulumi.Input<string | enums.v20210501.ExtendedLocationTypes>;
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
            sysctls?: pulumi.Input<v20210501.SysctlConfigArgs>;
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
            gpuInstanceProfile?: pulumi.Input<string | enums.v20210501.GPUInstanceProfile>;
            /**
             * The Kubelet configuration on the agent pool nodes.
             */
            kubeletConfig?: pulumi.Input<v20210501.KubeletConfigArgs>;
            /**
             * Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage.
             */
            kubeletDiskType?: pulumi.Input<string | enums.v20210501.KubeletDiskType>;
            /**
             * The OS configuration of Linux agent nodes.
             */
            linuxOSConfig?: pulumi.Input<v20210501.LinuxOSConfigArgs>;
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
            mode?: pulumi.Input<string | enums.v20210501.AgentPoolMode>;
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
            osDiskType?: pulumi.Input<string | enums.v20210501.OSDiskType>;
            /**
             * Specifies an OS SKU. This value must not be specified if OSType is Windows.
             */
            osSKU?: pulumi.Input<string | enums.v20210501.OSSKU>;
            /**
             * The operating system type. The default is Linux.
             */
            osType?: pulumi.Input<string | enums.v20210501.OSType>;
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
            scaleSetEvictionPolicy?: pulumi.Input<string | enums.v20210501.ScaleSetEvictionPolicy>;
            /**
             * The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'.
             */
            scaleSetPriority?: pulumi.Input<string | enums.v20210501.ScaleSetPriority>;
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
            type?: pulumi.Input<string | enums.v20210501.AgentPoolType>;
            /**
             * Settings for upgrading the agentpool
             */
            upgradeSettings?: pulumi.Input<v20210501.AgentPoolUpgradeSettingsArgs>;
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
            upgradeChannel?: pulumi.Input<string | enums.v20210501.UpgradeChannel>;
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
            type?: pulumi.Input<enums.v20210501.ResourceIdentityType>;
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
            effectiveOutboundIPs?: pulumi.Input<pulumi.Input<v20210501.ResourceReferenceArgs>[]>;
            /**
             * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 30 minutes.
             */
            idleTimeoutInMinutes?: pulumi.Input<number>;
            /**
             * Desired managed outbound IPs for the cluster load balancer.
             */
            managedOutboundIPs?: pulumi.Input<v20210501.ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs>;
            /**
             * Desired outbound IP Prefix resources for the cluster load balancer.
             */
            outboundIPPrefixes?: pulumi.Input<v20210501.ManagedClusterLoadBalancerProfileOutboundIPPrefixesArgs>;
            /**
             * Desired outbound IP resources for the cluster load balancer.
             */
            outboundIPs?: pulumi.Input<v20210501.ManagedClusterLoadBalancerProfileOutboundIPsArgs>;
        }
        /**
         * managedClusterLoadBalancerProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileArgs
         */
        export function managedClusterLoadBalancerProfileArgsProvideDefaults(val: ManagedClusterLoadBalancerProfileArgs): ManagedClusterLoadBalancerProfileArgs {
            return {
                ...val,
                allocatedOutboundPorts: (val.allocatedOutboundPorts) ?? 0,
                idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 30,
                managedOutboundIPs: (val.managedOutboundIPs ? pulumi.output(val.managedOutboundIPs).apply(v20210501.managedClusterLoadBalancerProfileManagedOutboundIPsArgsProvideDefaults) : undefined),
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
            publicIPPrefixes?: pulumi.Input<pulumi.Input<v20210501.ResourceReferenceArgs>[]>;
        }

        /**
         * Desired outbound IP resources for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileOutboundIPsArgs {
            /**
             * A list of public IP resources.
             */
            publicIPs?: pulumi.Input<pulumi.Input<v20210501.ResourceReferenceArgs>[]>;
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
            identity: pulumi.Input<v20210501.UserAssignedIdentityArgs>;
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
            userAssignedIdentities?: pulumi.Input<pulumi.Input<v20210501.ManagedClusterPodIdentityArgs>[]>;
            /**
             * The pod identity exceptions to allow.
             */
            userAssignedIdentityExceptions?: pulumi.Input<pulumi.Input<v20210501.ManagedClusterPodIdentityExceptionArgs>[]>;
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
            expander?: pulumi.Input<string | enums.v20210501.Expander>;
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
            name?: pulumi.Input<string | enums.v20210501.ManagedClusterSKUName>;
            /**
             * If not specified, the default is 'Free'. See [uptime SLA](https://docs.microsoft.com/azure/aks/uptime-sla) for more details.
             */
            tier?: pulumi.Input<string | enums.v20210501.ManagedClusterSKUTier>;
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
            licenseType?: pulumi.Input<string | enums.v20210501.LicenseType>;
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

    }

    export namespace v20210801 {
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
         * Data used when creating a target resource from a source resource.
         */
        export interface CreationDataArgs {
            /**
             * This is the ARM ID of the source object to be used to create the target object.
             */
            sourceResourceId?: pulumi.Input<string>;
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
            sysctls?: pulumi.Input<v20210801.SysctlConfigArgs>;
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

    }

    export namespace v20220402preview {
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
         * Data used when creating a target resource from a source resource.
         */
        export interface CreationDataArgs {
            /**
             * This is the ARM ID of the source object to be used to create the target object.
             */
            sourceResourceId?: pulumi.Input<string>;
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
            sysctls?: pulumi.Input<v20220402preview.SysctlConfigArgs>;
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
         * Describes the Power State of the cluster
         */
        export interface PowerStateArgs {
            /**
             * Tells whether the cluster is Running or Stopped
             */
            code?: pulumi.Input<string | enums.v20220402preview.Code>;
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

    }

    export namespace v20220702preview {
        /**
         * The FleetHubProfile configures the fleet hub.
         */
        export interface FleetHubProfileArgs {
            /**
             * DNS prefix used to create the FQDN for the Fleet hub.
             */
            dnsPrefix?: pulumi.Input<string>;
        }

    }

    export namespace v20230315preview {
        /**
         * The FleetHubProfile configures the fleet hub.
         */
        export interface FleetHubProfileArgs {
            /**
             * DNS prefix used to create the FQDN for the Fleet hub.
             */
            dnsPrefix?: pulumi.Input<string>;
        }

        /**
         * The update to be applied to the ManagedClusters.
         */
        export interface ManagedClusterUpdateArgs {
            /**
             * The upgrade to apply to the ManagedClusters.
             */
            upgrade: pulumi.Input<v20230315preview.ManagedClusterUpgradeSpecArgs>;
        }

        /**
         * The upgrade to apply to a ManagedCluster.
         */
        export interface ManagedClusterUpgradeSpecArgs {
            /**
             * The Kubernetes version to upgrade the member clusters to.
             */
            kubernetesVersion?: pulumi.Input<string>;
            /**
             * The upgrade type.
             * Full requires the KubernetesVersion property to be set.
             * NodeImageOnly requires the KubernetesVersion property not to be set.
             */
            type: pulumi.Input<string | enums.v20230315preview.ManagedClusterUpgradeType>;
        }

        /**
         * A group to be updated.
         */
        export interface UpdateGroupArgs {
            /**
             * The name of the Fleet member group to update. 
             * It should match the name of an existing FleetMember group.
             * A group can only appear once across all UpdateStages in the UpdateRun.
             */
            name: pulumi.Input<string>;
        }

        /**
         * The UpdateRunStrategy configures the sequence of Stages and Groups in which the clusters will be updated.
         */
        export interface UpdateRunStrategyArgs {
            /**
             * The list of stages that compose this update run.
             */
            stages: pulumi.Input<pulumi.Input<v20230315preview.UpdateStageArgs>[]>;
        }

        /**
         * Contains the groups to be updated by an UpdateRun.
         * Update order:
         * - Sequential between stages: Stages run sequentially. The previous stage must complete before the next one starts.
         * - Parallel within a stage: Groups within a stage run in parallel.
         * - Sequential within a group: Clusters within a group are updated sequentially.
         */
        export interface UpdateStageArgs {
            /**
             * The time in seconds to wait at the end of this stage before starting the next one. Defaults to 0 seconds if unspecified.
             */
            afterStageWaitInSeconds?: pulumi.Input<number>;
            /**
             * A list of group names that compose the stage.
             * The groups will be updated in parallel. Each group name can only appear once in the UpdateRun.
             */
            groups?: pulumi.Input<pulumi.Input<v20230315preview.UpdateGroupArgs>[]>;
            /**
             * The name of the stage. Must be unique within the UpdateRun.
             */
            name: pulumi.Input<string>;
        }

    }

    export namespace v20230401 {
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
         * Azure Key Vault key management service settings for the security profile.
         */
        export interface AzureKeyVaultKmsArgs {
            /**
             * Whether to enable Azure Key Vault key management service. The default is false.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Identifier of Azure Key Vault key. See [key identifier format](https://docs.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates#vault-name-and-object-name) for more details. When Azure Key Vault key management service is enabled, this field is required and must be a valid key identifier. When Azure Key Vault key management service is disabled, leave the field empty.
             */
            keyId?: pulumi.Input<string>;
            /**
             * Network access of key vault. The possible values are `Public` and `Private`. `Public` means the key vault allows public access from all networks. `Private` means the key vault disables public access and enables private link. The default value is `Public`.
             */
            keyVaultNetworkAccess?: pulumi.Input<string | enums.v20230401.KeyVaultNetworkAccessTypes>;
            /**
             * Resource ID of key vault. When keyVaultNetworkAccess is `Private`, this field is required and must be a valid resource ID. When keyVaultNetworkAccess is `Public`, leave the field empty.
             */
            keyVaultResourceId?: pulumi.Input<string>;
        }
        /**
         * azureKeyVaultKmsArgsProvideDefaults sets the appropriate defaults for AzureKeyVaultKmsArgs
         */
        export function azureKeyVaultKmsArgsProvideDefaults(val: AzureKeyVaultKmsArgs): AzureKeyVaultKmsArgs {
            return {
                ...val,
                keyVaultNetworkAccess: (val.keyVaultNetworkAccess) ?? "Public",
            };
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
            ssh: pulumi.Input<v20230401.ContainerServiceSshConfigurationArgs>;
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
             * IP families are used to determine single-stack or dual-stack clusters. For single-stack, the expected value is IPv4. For dual-stack, the expected values are IPv4 and IPv6.
             */
            ipFamilies?: pulumi.Input<pulumi.Input<string | enums.v20230401.IpFamily>[]>;
            /**
             * Profile of the cluster load balancer.
             */
            loadBalancerProfile?: pulumi.Input<v20230401.ManagedClusterLoadBalancerProfileArgs>;
            /**
             * The default is 'standard'. See [Azure Load Balancer SKUs](https://docs.microsoft.com/azure/load-balancer/skus) for more information about the differences between load balancer SKUs.
             */
            loadBalancerSku?: pulumi.Input<string | enums.v20230401.LoadBalancerSku>;
            /**
             * Profile of the cluster NAT gateway.
             */
            natGatewayProfile?: pulumi.Input<v20230401.ManagedClusterNATGatewayProfileArgs>;
            /**
             * Network dataplane used in the Kubernetes cluster.
             */
            networkDataplane?: pulumi.Input<string | enums.v20230401.NetworkDataplane>;
            /**
             * This cannot be specified if networkPlugin is anything other than 'azure'.
             */
            networkMode?: pulumi.Input<string | enums.v20230401.NetworkMode>;
            /**
             * Network plugin used for building the Kubernetes network.
             */
            networkPlugin?: pulumi.Input<string | enums.v20230401.NetworkPlugin>;
            /**
             * The mode the network plugin should use.
             */
            networkPluginMode?: pulumi.Input<string | enums.v20230401.NetworkPluginMode>;
            /**
             * Network policy used for building the Kubernetes network.
             */
            networkPolicy?: pulumi.Input<string | enums.v20230401.NetworkPolicy>;
            /**
             * This can only be set at cluster creation time and cannot be changed later. For more information see [egress outbound type](https://docs.microsoft.com/azure/aks/egress-outboundtype).
             */
            outboundType?: pulumi.Input<string | enums.v20230401.OutboundType>;
            /**
             * A CIDR notation IP range from which to assign pod IPs when kubenet is used.
             */
            podCidr?: pulumi.Input<string>;
            /**
             * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
             */
            podCidrs?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
             */
            serviceCidr?: pulumi.Input<string>;
            /**
             * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking. They must not overlap with any Subnet IP ranges.
             */
            serviceCidrs?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * containerServiceNetworkProfileArgsProvideDefaults sets the appropriate defaults for ContainerServiceNetworkProfileArgs
         */
        export function containerServiceNetworkProfileArgsProvideDefaults(val: ContainerServiceNetworkProfileArgs): ContainerServiceNetworkProfileArgs {
            return {
                ...val,
                dnsServiceIP: (val.dnsServiceIP) ?? "10.0.0.10",
                loadBalancerProfile: (val.loadBalancerProfile ? pulumi.output(val.loadBalancerProfile).apply(v20230401.managedClusterLoadBalancerProfileArgsProvideDefaults) : undefined),
                natGatewayProfile: (val.natGatewayProfile ? pulumi.output(val.natGatewayProfile).apply(v20230401.managedClusterNATGatewayProfileArgsProvideDefaults) : undefined),
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
            publicKeys: pulumi.Input<pulumi.Input<v20230401.ContainerServiceSshPublicKeyArgs>[]>;
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
         * Data used when creating a target resource from a source resource.
         */
        export interface CreationDataArgs {
            /**
             * This is the ARM ID of the source object to be used to create the target object.
             */
            sourceResourceId?: pulumi.Input<string>;
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
            type?: pulumi.Input<string | enums.v20230401.ExtendedLocationTypes>;
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
            sysctls?: pulumi.Input<v20230401.SysctlConfigArgs>;
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
             * (DEPRECATED) The client AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
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
             * (DEPRECATED) The server AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
             */
            serverAppID?: pulumi.Input<string>;
            /**
             * (DEPRECATED) The server AAD application secret. Learn more at https://aka.ms/aks/aad-legacy.
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
             * Whether to disable run command for the cluster or not.
             */
            disableRunCommand?: pulumi.Input<boolean>;
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
             * CreationData to be used to specify the source Snapshot ID if the node pool will be created/upgraded using a snapshot.
             */
            creationData?: pulumi.Input<v20230401.CreationDataArgs>;
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
            gpuInstanceProfile?: pulumi.Input<string | enums.v20230401.GPUInstanceProfile>;
            /**
             * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}. For more information see [Azure dedicated hosts](https://docs.microsoft.com/azure/virtual-machines/dedicated-hosts).
             */
            hostGroupID?: pulumi.Input<string>;
            /**
             * The Kubelet configuration on the agent pool nodes.
             */
            kubeletConfig?: pulumi.Input<v20230401.KubeletConfigArgs>;
            /**
             * Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage.
             */
            kubeletDiskType?: pulumi.Input<string | enums.v20230401.KubeletDiskType>;
            /**
             * The OS configuration of Linux agent nodes.
             */
            linuxOSConfig?: pulumi.Input<v20230401.LinuxOSConfigArgs>;
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
            mode?: pulumi.Input<string | enums.v20230401.AgentPoolMode>;
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
             * Both patch version <major.minor.patch> (e.g. 1.20.13) and <major.minor> (e.g. 1.20) are supported. When <major.minor> is specified, the latest supported GA patch version is chosen automatically. Updating the cluster with the same <major.minor> once it has been created (e.g. 1.14.x -> 1.14) will not trigger an upgrade, even if a newer patch version is available. As a best practice, you should upgrade all node pools in an AKS cluster to the same Kubernetes version. The node pool version must have the same major version as the control plane. The node pool minor version must be within two minor versions of the control plane version. The node pool version cannot be greater than the control plane version. For more information see [upgrading a node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#upgrade-a-node-pool).
             */
            orchestratorVersion?: pulumi.Input<string>;
            /**
             * OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
             */
            osDiskSizeGB?: pulumi.Input<number>;
            /**
             * The default is 'Ephemeral' if the VM supports it and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation. For more information see [Ephemeral OS](https://docs.microsoft.com/azure/aks/cluster-configuration#ephemeral-os).
             */
            osDiskType?: pulumi.Input<string | enums.v20230401.OSDiskType>;
            /**
             * Specifies the OS SKU used by the agent pool. The default is Ubuntu if OSType is Linux. The default is Windows2019 when Kubernetes <= 1.24 or Windows2022 when Kubernetes >= 1.25 if OSType is Windows.
             */
            osSKU?: pulumi.Input<string | enums.v20230401.OSSKU>;
            /**
             * The operating system type. The default is Linux.
             */
            osType?: pulumi.Input<string | enums.v20230401.OSType>;
            /**
             * If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
             */
            podSubnetID?: pulumi.Input<string>;
            /**
             * When an Agent Pool is first created it is initially Running. The Agent Pool can be stopped by setting this field to Stopped. A stopped Agent Pool stops all of its VMs and does not accrue billing charges. An Agent Pool can only be stopped if it is Running and provisioning state is Succeeded
             */
            powerState?: pulumi.Input<v20230401.PowerStateArgs>;
            /**
             * The ID for Proximity Placement Group.
             */
            proximityPlacementGroupID?: pulumi.Input<string>;
            /**
             * This also effects the cluster autoscaler behavior. If not specified, it defaults to Delete.
             */
            scaleDownMode?: pulumi.Input<string | enums.v20230401.ScaleDownMode>;
            /**
             * This cannot be specified unless the scaleSetPriority is 'Spot'. If not specified, the default is 'Delete'.
             */
            scaleSetEvictionPolicy?: pulumi.Input<string | enums.v20230401.ScaleSetEvictionPolicy>;
            /**
             * The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'.
             */
            scaleSetPriority?: pulumi.Input<string | enums.v20230401.ScaleSetPriority>;
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
            type?: pulumi.Input<string | enums.v20230401.AgentPoolType>;
            /**
             * Settings for upgrading the agentpool
             */
            upgradeSettings?: pulumi.Input<v20230401.AgentPoolUpgradeSettingsArgs>;
            /**
             * VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. For more details on restricted VM sizes, see: https://docs.microsoft.com/azure/aks/quotas-skus-regions
             */
            vmSize?: pulumi.Input<string>;
            /**
             * If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
             */
            vnetSubnetID?: pulumi.Input<string>;
            /**
             * Determines the type of workload a node can run.
             */
            workloadRuntime?: pulumi.Input<string | enums.v20230401.WorkloadRuntime>;
        }

        /**
         * Auto upgrade profile for a managed cluster.
         */
        export interface ManagedClusterAutoUpgradeProfileArgs {
            /**
             * For more information see [setting the AKS cluster auto-upgrade channel](https://docs.microsoft.com/azure/aks/upgrade-cluster#set-auto-upgrade-channel).
             */
            upgradeChannel?: pulumi.Input<string | enums.v20230401.UpgradeChannel>;
        }

        /**
         * Azure Monitor addon profiles for monitoring the managed cluster.
         */
        export interface ManagedClusterAzureMonitorProfileArgs {
            /**
             * Metrics profile for the Azure Monitor managed service for Prometheus addon. Collect out-of-the-box Kubernetes infrastructure metrics to send to an Azure Monitor Workspace and configure additional scraping for custom targets. See aka.ms/AzureManagedPrometheus for an overview.
             */
            metrics?: pulumi.Input<v20230401.ManagedClusterAzureMonitorProfileMetricsArgs>;
        }

        /**
         * Kube State Metrics profile for the Azure Managed Prometheus addon. These optional settings are for the kube-state-metrics pod that is deployed with the addon. See aka.ms/AzureManagedPrometheus-optional-parameters for details.
         */
        export interface ManagedClusterAzureMonitorProfileKubeStateMetricsArgs {
            /**
             * Comma-separated list of Kubernetes annotation keys that will be used in the resource's labels metric (Example: 'namespaces=[kubernetes.io/team,...],pods=[kubernetes.io/team],...'). By default the metric contains only resource name and namespace labels.
             */
            metricAnnotationsAllowList?: pulumi.Input<string>;
            /**
             * Comma-separated list of additional Kubernetes label keys that will be used in the resource's labels metric (Example: 'namespaces=[k8s-label-1,k8s-label-n,...],pods=[app],...'). By default the metric contains only resource name and namespace labels.
             */
            metricLabelsAllowlist?: pulumi.Input<string>;
        }

        /**
         * Metrics profile for the Azure Monitor managed service for Prometheus addon. Collect out-of-the-box Kubernetes infrastructure metrics to send to an Azure Monitor Workspace and configure additional scraping for custom targets. See aka.ms/AzureManagedPrometheus for an overview.
         */
        export interface ManagedClusterAzureMonitorProfileMetricsArgs {
            /**
             * Whether to enable or disable the Azure Managed Prometheus addon for Prometheus monitoring. See aka.ms/AzureManagedPrometheus-aks-enable for details on enabling and disabling.
             */
            enabled: pulumi.Input<boolean>;
            /**
             * Kube State Metrics profile for the Azure Managed Prometheus addon. These optional settings are for the kube-state-metrics pod that is deployed with the addon. See aka.ms/AzureManagedPrometheus-optional-parameters for details.
             */
            kubeStateMetrics?: pulumi.Input<v20230401.ManagedClusterAzureMonitorProfileKubeStateMetricsArgs>;
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
            type?: pulumi.Input<enums.v20230401.ResourceIdentityType>;
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
            effectiveOutboundIPs?: pulumi.Input<pulumi.Input<v20230401.ResourceReferenceArgs>[]>;
            /**
             * Enable multiple standard load balancers per AKS cluster or not.
             */
            enableMultipleStandardLoadBalancers?: pulumi.Input<boolean>;
            /**
             * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 30 minutes.
             */
            idleTimeoutInMinutes?: pulumi.Input<number>;
            /**
             * Desired managed outbound IPs for the cluster load balancer.
             */
            managedOutboundIPs?: pulumi.Input<v20230401.ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs>;
            /**
             * Desired outbound IP Prefix resources for the cluster load balancer.
             */
            outboundIPPrefixes?: pulumi.Input<v20230401.ManagedClusterLoadBalancerProfileOutboundIPPrefixesArgs>;
            /**
             * Desired outbound IP resources for the cluster load balancer.
             */
            outboundIPs?: pulumi.Input<v20230401.ManagedClusterLoadBalancerProfileOutboundIPsArgs>;
        }
        /**
         * managedClusterLoadBalancerProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileArgs
         */
        export function managedClusterLoadBalancerProfileArgsProvideDefaults(val: ManagedClusterLoadBalancerProfileArgs): ManagedClusterLoadBalancerProfileArgs {
            return {
                ...val,
                allocatedOutboundPorts: (val.allocatedOutboundPorts) ?? 0,
                idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 30,
                managedOutboundIPs: (val.managedOutboundIPs ? pulumi.output(val.managedOutboundIPs).apply(v20230401.managedClusterLoadBalancerProfileManagedOutboundIPsArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Desired managed outbound IPs for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs {
            /**
             * The desired number of IPv4 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1. 
             */
            count?: pulumi.Input<number>;
            /**
             * The desired number of IPv6 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 0 for single-stack and 1 for dual-stack. 
             */
            countIPv6?: pulumi.Input<number>;
        }
        /**
         * managedClusterLoadBalancerProfileManagedOutboundIPsArgsProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs
         */
        export function managedClusterLoadBalancerProfileManagedOutboundIPsArgsProvideDefaults(val: ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs): ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs {
            return {
                ...val,
                count: (val.count) ?? 1,
                countIPv6: (val.countIPv6) ?? 0,
            };
        }

        /**
         * Desired outbound IP Prefix resources for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileOutboundIPPrefixesArgs {
            /**
             * A list of public IP prefix resources.
             */
            publicIPPrefixes?: pulumi.Input<pulumi.Input<v20230401.ResourceReferenceArgs>[]>;
        }

        /**
         * Desired outbound IP resources for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileOutboundIPsArgs {
            /**
             * A list of public IP resources.
             */
            publicIPs?: pulumi.Input<pulumi.Input<v20230401.ResourceReferenceArgs>[]>;
        }

        /**
         * Profile of the managed outbound IP resources of the managed cluster.
         */
        export interface ManagedClusterManagedOutboundIPProfileArgs {
            /**
             * The desired number of outbound IPs created/managed by Azure. Allowed values must be in the range of 1 to 16 (inclusive). The default value is 1. 
             */
            count?: pulumi.Input<number>;
        }
        /**
         * managedClusterManagedOutboundIPProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterManagedOutboundIPProfileArgs
         */
        export function managedClusterManagedOutboundIPProfileArgsProvideDefaults(val: ManagedClusterManagedOutboundIPProfileArgs): ManagedClusterManagedOutboundIPProfileArgs {
            return {
                ...val,
                count: (val.count) ?? 1,
            };
        }

        /**
         * Profile of the managed cluster NAT gateway.
         */
        export interface ManagedClusterNATGatewayProfileArgs {
            /**
             * The effective outbound IP resources of the cluster NAT gateway.
             */
            effectiveOutboundIPs?: pulumi.Input<pulumi.Input<v20230401.ResourceReferenceArgs>[]>;
            /**
             * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 4 minutes.
             */
            idleTimeoutInMinutes?: pulumi.Input<number>;
            /**
             * Profile of the managed outbound IP resources of the cluster NAT gateway.
             */
            managedOutboundIPProfile?: pulumi.Input<v20230401.ManagedClusterManagedOutboundIPProfileArgs>;
        }
        /**
         * managedClusterNATGatewayProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterNATGatewayProfileArgs
         */
        export function managedClusterNATGatewayProfileArgsProvideDefaults(val: ManagedClusterNATGatewayProfileArgs): ManagedClusterNATGatewayProfileArgs {
            return {
                ...val,
                idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 4,
                managedOutboundIPProfile: (val.managedOutboundIPProfile ? pulumi.output(val.managedOutboundIPProfile).apply(v20230401.managedClusterManagedOutboundIPProfileArgsProvideDefaults) : undefined),
            };
        }

        /**
         * The OIDC issuer profile of the Managed Cluster.
         */
        export interface ManagedClusterOIDCIssuerProfileArgs {
            /**
             * Whether the OIDC issuer is enabled.
             */
            enabled?: pulumi.Input<boolean>;
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
            identity: pulumi.Input<v20230401.UserAssignedIdentityArgs>;
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
            userAssignedIdentities?: pulumi.Input<pulumi.Input<v20230401.ManagedClusterPodIdentityArgs>[]>;
            /**
             * The pod identity exceptions to allow.
             */
            userAssignedIdentityExceptions?: pulumi.Input<pulumi.Input<v20230401.ManagedClusterPodIdentityExceptionArgs>[]>;
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
            expander?: pulumi.Input<string | enums.v20230401.Expander>;
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

        /**
         * The SKU of a Managed Cluster.
         */
        export interface ManagedClusterSKUArgs {
            /**
             * The name of a managed cluster SKU.
             */
            name?: pulumi.Input<string | enums.v20230401.ManagedClusterSKUName>;
            /**
             * If not specified, the default is 'Free'. See [AKS Pricing Tier](https://learn.microsoft.com/azure/aks/free-standard-pricing-tiers) for more details.
             */
            tier?: pulumi.Input<string | enums.v20230401.ManagedClusterSKUTier>;
        }

        /**
         * Security profile for the container service cluster.
         */
        export interface ManagedClusterSecurityProfileArgs {
            /**
             * Azure Key Vault [key management service](https://kubernetes.io/docs/tasks/administer-cluster/kms-provider/) settings for the security profile.
             */
            azureKeyVaultKms?: pulumi.Input<v20230401.AzureKeyVaultKmsArgs>;
            /**
             * Microsoft Defender settings for the security profile.
             */
            defender?: pulumi.Input<v20230401.ManagedClusterSecurityProfileDefenderArgs>;
            /**
             * Image Cleaner settings for the security profile.
             */
            imageCleaner?: pulumi.Input<v20230401.ManagedClusterSecurityProfileImageCleanerArgs>;
            /**
             * Workload identity settings for the security profile. Workload identity enables Kubernetes applications to access Azure cloud resources securely with Azure AD. See https://aka.ms/aks/wi for more details.
             */
            workloadIdentity?: pulumi.Input<v20230401.ManagedClusterSecurityProfileWorkloadIdentityArgs>;
        }
        /**
         * managedClusterSecurityProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterSecurityProfileArgs
         */
        export function managedClusterSecurityProfileArgsProvideDefaults(val: ManagedClusterSecurityProfileArgs): ManagedClusterSecurityProfileArgs {
            return {
                ...val,
                azureKeyVaultKms: (val.azureKeyVaultKms ? pulumi.output(val.azureKeyVaultKms).apply(v20230401.azureKeyVaultKmsArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Microsoft Defender settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileDefenderArgs {
            /**
             * Resource ID of the Log Analytics workspace to be associated with Microsoft Defender. When Microsoft Defender is enabled, this field is required and must be a valid workspace resource ID. When Microsoft Defender is disabled, leave the field empty.
             */
            logAnalyticsWorkspaceResourceId?: pulumi.Input<string>;
            /**
             * Microsoft Defender threat detection for Cloud settings for the security profile.
             */
            securityMonitoring?: pulumi.Input<v20230401.ManagedClusterSecurityProfileDefenderSecurityMonitoringArgs>;
        }

        /**
         * Microsoft Defender settings for the security profile threat detection.
         */
        export interface ManagedClusterSecurityProfileDefenderSecurityMonitoringArgs {
            /**
             * Whether to enable Defender threat detection
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * Image Cleaner removes unused images from nodes, freeing up disk space and helping to reduce attack surface area. Here are settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileImageCleanerArgs {
            /**
             * Whether to enable Image Cleaner on AKS cluster.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Image Cleaner scanning interval in hours.
             */
            intervalHours?: pulumi.Input<number>;
        }

        /**
         * Workload identity settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileWorkloadIdentityArgs {
            /**
             * Whether to enable workload identity.
             */
            enabled?: pulumi.Input<boolean>;
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
         * Storage profile for the container service cluster.
         */
        export interface ManagedClusterStorageProfileArgs {
            /**
             * AzureBlob CSI Driver settings for the storage profile.
             */
            blobCSIDriver?: pulumi.Input<v20230401.ManagedClusterStorageProfileBlobCSIDriverArgs>;
            /**
             * AzureDisk CSI Driver settings for the storage profile.
             */
            diskCSIDriver?: pulumi.Input<v20230401.ManagedClusterStorageProfileDiskCSIDriverArgs>;
            /**
             * AzureFile CSI Driver settings for the storage profile.
             */
            fileCSIDriver?: pulumi.Input<v20230401.ManagedClusterStorageProfileFileCSIDriverArgs>;
            /**
             * Snapshot Controller settings for the storage profile.
             */
            snapshotController?: pulumi.Input<v20230401.ManagedClusterStorageProfileSnapshotControllerArgs>;
        }

        /**
         * AzureBlob CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileBlobCSIDriverArgs {
            /**
             * Whether to enable AzureBlob CSI Driver. The default value is false.
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * AzureDisk CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileDiskCSIDriverArgs {
            /**
             * Whether to enable AzureDisk CSI Driver. The default value is true.
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * AzureFile CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileFileCSIDriverArgs {
            /**
             * Whether to enable AzureFile CSI Driver. The default value is true.
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * Snapshot Controller settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileSnapshotControllerArgs {
            /**
             * Whether to enable Snapshot Controller. The default value is true.
             */
            enabled?: pulumi.Input<boolean>;
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
             * The Windows gMSA Profile in the Managed Cluster.
             */
            gmsaProfile?: pulumi.Input<v20230401.WindowsGmsaProfileArgs>;
            /**
             * The license type to use for Windows VMs. See [Azure Hybrid User Benefits](https://azure.microsoft.com/pricing/hybrid-benefit/faq/) for more details.
             */
            licenseType?: pulumi.Input<string | enums.v20230401.LicenseType>;
        }

        /**
         * Workload Auto-scaler profile for the managed cluster.
         */
        export interface ManagedClusterWorkloadAutoScalerProfileArgs {
            /**
             * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
             */
            keda?: pulumi.Input<v20230401.ManagedClusterWorkloadAutoScalerProfileKedaArgs>;
        }

        /**
         * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
         */
        export interface ManagedClusterWorkloadAutoScalerProfileKedaArgs {
            /**
             * Whether to enable KEDA.
             */
            enabled: pulumi.Input<boolean>;
        }

        /**
         * Describes the Power State of the cluster
         */
        export interface PowerStateArgs {
            /**
             * Tells whether the cluster is Running or Stopped
             */
            code?: pulumi.Input<string | enums.v20230401.Code>;
        }

        /**
         * Private endpoint which a connection belongs to.
         */
        export interface PrivateEndpointArgs {
            /**
             * The resource ID of the private endpoint
             */
            id?: pulumi.Input<string>;
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
         * The state of a private link service connection.
         */
        export interface PrivateLinkServiceConnectionStateArgs {
            /**
             * The private link service connection description.
             */
            description?: pulumi.Input<string>;
            /**
             * The private link service connection status.
             */
            status?: pulumi.Input<string | enums.v20230401.ConnectionStatus>;
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
         * Time in a week.
         */
        export interface TimeInWeekArgs {
            /**
             * The day of the week.
             */
            day?: pulumi.Input<string | enums.v20230401.WeekDay>;
            /**
             * Each integer hour represents a time range beginning at 0m after the hour ending at the next hour (non-inclusive). 0 corresponds to 00:00 UTC, 23 corresponds to 23:00 UTC. Specifying [0, 1] means the 00:00 - 02:00 UTC time range.
             */
            hourSlots?: pulumi.Input<pulumi.Input<number>[]>;
        }

        /**
         * For example, between 2021-05-25T13:00:00Z and 2021-05-25T14:00:00Z.
         */
        export interface TimeSpanArgs {
            /**
             * The end of a time span
             */
            end?: pulumi.Input<string>;
            /**
             * The start of a time span
             */
            start?: pulumi.Input<string>;
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

        /**
         * Windows gMSA Profile in the managed cluster.
         */
        export interface WindowsGmsaProfileArgs {
            /**
             * Specifies the DNS server for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
             */
            dnsServer?: pulumi.Input<string>;
            /**
             * Specifies whether to enable Windows gMSA in the managed cluster.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Specifies the root domain name for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
             */
            rootDomainName?: pulumi.Input<string>;
        }

    }

    export namespace v20230502preview {
        /**
         * For schedules like: 'recur every month on the 15th' or 'recur every 3 months on the 20th'.
         */
        export interface AbsoluteMonthlyScheduleArgs {
            /**
             * The date of the month.
             */
            dayOfMonth: pulumi.Input<number>;
            /**
             * Specifies the number of months between each set of occurrences.
             */
            intervalMonths: pulumi.Input<number>;
        }

        /**
         * Network settings of an agent pool.
         */
        export interface AgentPoolNetworkProfileArgs {
            /**
             * The port ranges that are allowed to access. The specified ranges are allowed to overlap.
             */
            allowedHostPorts?: pulumi.Input<pulumi.Input<v20230502preview.PortRangeArgs>[]>;
            /**
             * The IDs of the application security groups which agent pool will associate when created.
             */
            applicationSecurityGroups?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * IPTags of instance-level public IPs.
             */
            nodePublicIPTags?: pulumi.Input<pulumi.Input<v20230502preview.IPTagArgs>[]>;
        }

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
         * The Windows agent pool's specific profile.
         */
        export interface AgentPoolWindowsProfileArgs {
            /**
             * The default value is false. Outbound NAT can only be disabled if the cluster outboundType is NAT Gateway and the Windows agent pool does not have node public IP enabled.
             */
            disableOutboundNat?: pulumi.Input<boolean>;
        }

        /**
         * Azure Key Vault key management service settings for the security profile.
         */
        export interface AzureKeyVaultKmsArgs {
            /**
             * Whether to enable Azure Key Vault key management service. The default is false.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Identifier of Azure Key Vault key. See [key identifier format](https://docs.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates#vault-name-and-object-name) for more details. When Azure Key Vault key management service is enabled, this field is required and must be a valid key identifier. When Azure Key Vault key management service is disabled, leave the field empty.
             */
            keyId?: pulumi.Input<string>;
            /**
             * Network access of key vault. The possible values are `Public` and `Private`. `Public` means the key vault allows public access from all networks. `Private` means the key vault disables public access and enables private link. The default value is `Public`.
             */
            keyVaultNetworkAccess?: pulumi.Input<string | enums.v20230502preview.KeyVaultNetworkAccessTypes>;
            /**
             * Resource ID of key vault. When keyVaultNetworkAccess is `Private`, this field is required and must be a valid resource ID. When keyVaultNetworkAccess is `Public`, leave the field empty.
             */
            keyVaultResourceId?: pulumi.Input<string>;
        }
        /**
         * azureKeyVaultKmsArgsProvideDefaults sets the appropriate defaults for AzureKeyVaultKmsArgs
         */
        export function azureKeyVaultKmsArgsProvideDefaults(val: AzureKeyVaultKmsArgs): AzureKeyVaultKmsArgs {
            return {
                ...val,
                keyVaultNetworkAccess: (val.keyVaultNetworkAccess) ?? "Public",
            };
        }

        /**
         * Settings for upgrading a cluster.
         */
        export interface ClusterUpgradeSettingsArgs {
            /**
             * Settings for overrides.
             */
            overrideSettings?: pulumi.Input<v20230502preview.UpgradeOverrideSettingsArgs>;
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
            ssh: pulumi.Input<v20230502preview.ContainerServiceSshConfigurationArgs>;
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
             * IP families are used to determine single-stack or dual-stack clusters. For single-stack, the expected value is IPv4. For dual-stack, the expected values are IPv4 and IPv6.
             */
            ipFamilies?: pulumi.Input<pulumi.Input<string | enums.v20230502preview.IpFamily>[]>;
            /**
             * Holds configuration customizations for kube-proxy. Any values not defined will use the kube-proxy defaulting behavior. See https://v<version>.docs.kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/ where <version> is represented by a <major version>-<minor version> string. Kubernetes version 1.23 would be '1-23'.
             */
            kubeProxyConfig?: pulumi.Input<v20230502preview.ContainerServiceNetworkProfileKubeProxyConfigArgs>;
            /**
             * Profile of the cluster load balancer.
             */
            loadBalancerProfile?: pulumi.Input<v20230502preview.ManagedClusterLoadBalancerProfileArgs>;
            /**
             * The default is 'standard'. See [Azure Load Balancer SKUs](https://docs.microsoft.com/azure/load-balancer/skus) for more information about the differences between load balancer SKUs.
             */
            loadBalancerSku?: pulumi.Input<string | enums.v20230502preview.LoadBalancerSku>;
            /**
             * This addon can be used to configure network monitoring and generate network monitoring data in Prometheus format
             */
            monitoring?: pulumi.Input<v20230502preview.NetworkMonitoringArgs>;
            /**
             * Profile of the cluster NAT gateway.
             */
            natGatewayProfile?: pulumi.Input<v20230502preview.ManagedClusterNATGatewayProfileArgs>;
            /**
             * Network dataplane used in the Kubernetes cluster.
             */
            networkDataplane?: pulumi.Input<string | enums.v20230502preview.NetworkDataplane>;
            /**
             * This cannot be specified if networkPlugin is anything other than 'azure'.
             */
            networkMode?: pulumi.Input<string | enums.v20230502preview.NetworkMode>;
            /**
             * Network plugin used for building the Kubernetes network.
             */
            networkPlugin?: pulumi.Input<string | enums.v20230502preview.NetworkPlugin>;
            /**
             * Network plugin mode used for building the Kubernetes network.
             */
            networkPluginMode?: pulumi.Input<string | enums.v20230502preview.NetworkPluginMode>;
            /**
             * Network policy used for building the Kubernetes network.
             */
            networkPolicy?: pulumi.Input<string | enums.v20230502preview.NetworkPolicy>;
            /**
             * This can only be set at cluster creation time and cannot be changed later. For more information see [egress outbound type](https://docs.microsoft.com/azure/aks/egress-outboundtype).
             */
            outboundType?: pulumi.Input<string | enums.v20230502preview.OutboundType>;
            /**
             * A CIDR notation IP range from which to assign pod IPs when kubenet is used.
             */
            podCidr?: pulumi.Input<string>;
            /**
             * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
             */
            podCidrs?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
             */
            serviceCidr?: pulumi.Input<string>;
            /**
             * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking. They must not overlap with any Subnet IP ranges.
             */
            serviceCidrs?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * containerServiceNetworkProfileArgsProvideDefaults sets the appropriate defaults for ContainerServiceNetworkProfileArgs
         */
        export function containerServiceNetworkProfileArgsProvideDefaults(val: ContainerServiceNetworkProfileArgs): ContainerServiceNetworkProfileArgs {
            return {
                ...val,
                dnsServiceIP: (val.dnsServiceIP) ?? "10.0.0.10",
                loadBalancerProfile: (val.loadBalancerProfile ? pulumi.output(val.loadBalancerProfile).apply(v20230502preview.managedClusterLoadBalancerProfileArgsProvideDefaults) : undefined),
                natGatewayProfile: (val.natGatewayProfile ? pulumi.output(val.natGatewayProfile).apply(v20230502preview.managedClusterNATGatewayProfileArgsProvideDefaults) : undefined),
                outboundType: (val.outboundType) ?? "loadBalancer",
                podCidr: (val.podCidr) ?? "10.244.0.0/16",
                serviceCidr: (val.serviceCidr) ?? "10.0.0.0/16",
            };
        }

        /**
         * Holds configuration customizations for IPVS. May only be specified if 'mode' is set to 'IPVS'.
         */
        export interface ContainerServiceNetworkProfileIpvsConfigArgs {
            /**
             * IPVS scheduler, for more information please see http://www.linuxvirtualserver.org/docs/scheduling.html.
             */
            scheduler?: pulumi.Input<string | enums.v20230502preview.IpvsScheduler>;
            /**
             * The timeout value used for IPVS TCP sessions after receiving a FIN in seconds. Must be a positive integer value.
             */
            tcpFinTimeoutSeconds?: pulumi.Input<number>;
            /**
             * The timeout value used for idle IPVS TCP sessions in seconds. Must be a positive integer value.
             */
            tcpTimeoutSeconds?: pulumi.Input<number>;
            /**
             * The timeout value used for IPVS UDP packets in seconds. Must be a positive integer value.
             */
            udpTimeoutSeconds?: pulumi.Input<number>;
        }

        /**
         * Holds configuration customizations for kube-proxy. Any values not defined will use the kube-proxy defaulting behavior. See https://v<version>.docs.kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/ where <version> is represented by a <major version>-<minor version> string. Kubernetes version 1.23 would be '1-23'.
         */
        export interface ContainerServiceNetworkProfileKubeProxyConfigArgs {
            /**
             * Whether to enable on kube-proxy on the cluster (if no 'kubeProxyConfig' exists, kube-proxy is enabled in AKS by default without these customizations).
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Holds configuration customizations for IPVS. May only be specified if 'mode' is set to 'IPVS'.
             */
            ipvsConfig?: pulumi.Input<v20230502preview.ContainerServiceNetworkProfileIpvsConfigArgs>;
            /**
             * Specify which proxy mode to use ('IPTABLES' or 'IPVS')
             */
            mode?: pulumi.Input<string | enums.v20230502preview.Mode>;
        }

        /**
         * SSH configuration for Linux-based VMs running on Azure.
         */
        export interface ContainerServiceSshConfigurationArgs {
            /**
             * The list of SSH public keys used to authenticate with Linux-based VMs. A maximum of 1 key may be specified.
             */
            publicKeys: pulumi.Input<pulumi.Input<v20230502preview.ContainerServiceSshPublicKeyArgs>[]>;
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
         * Data used when creating a target resource from a source resource.
         */
        export interface CreationDataArgs {
            /**
             * This is the ARM ID of the source object to be used to create the target object.
             */
            sourceResourceId?: pulumi.Input<string>;
        }

        /**
         * For schedules like: 'recur every day' or 'recur every 3 days'.
         */
        export interface DailyScheduleArgs {
            /**
             * Specifies the number of days between each set of occurrences.
             */
            intervalDays: pulumi.Input<number>;
        }

        /**
         * For example, between '2022-12-23' and '2023-01-05'.
         */
        export interface DateSpanArgs {
            /**
             * The end date of the date span.
             */
            end: pulumi.Input<string>;
            /**
             * The start date of the date span.
             */
            start: pulumi.Input<string>;
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
            type?: pulumi.Input<string | enums.v20230502preview.ExtendedLocationTypes>;
        }

        /**
         * The Guardrails profile.
         */
        export interface GuardrailsProfileArgs {
            /**
             * List of namespaces excluded from guardrails checks
             */
            excludedNamespaces?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The guardrails level to be used. By default, Guardrails is enabled for all namespaces except those that AKS excludes via systemExcludedNamespaces
             */
            level: pulumi.Input<string | enums.v20230502preview.Level>;
            /**
             * The version of constraints to use
             */
            version: pulumi.Input<string>;
        }

        /**
         * Contains the IPTag associated with the object.
         */
        export interface IPTagArgs {
            /**
             * The IP tag type. Example: RoutingPreference.
             */
            ipTagType?: pulumi.Input<string>;
            /**
             * The value of the IP tag associated with the public IP. Example: Internet.
             */
            tag?: pulumi.Input<string>;
        }

        /**
         * Istio components configuration.
         */
        export interface IstioComponentsArgs {
            /**
             * Istio ingress gateways.
             */
            ingressGateways?: pulumi.Input<pulumi.Input<v20230502preview.IstioIngressGatewayArgs>[]>;
        }

        /**
         * Istio ingress gateway configuration. For now, we support up to one external ingress gateway named `aks-istio-ingressgateway-external` and one internal ingress gateway named `aks-istio-ingressgateway-internal`.
         */
        export interface IstioIngressGatewayArgs {
            /**
             * Whether to enable the ingress gateway.
             */
            enabled: pulumi.Input<boolean>;
            /**
             * Mode of an ingress gateway.
             */
            mode: pulumi.Input<string | enums.v20230502preview.IstioIngressGatewayMode>;
        }

        /**
         * Istio service mesh configuration.
         */
        export interface IstioServiceMeshArgs {
            /**
             * Istio components configuration.
             */
            components?: pulumi.Input<v20230502preview.IstioComponentsArgs>;
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
            sysctls?: pulumi.Input<v20230502preview.SysctlConfigArgs>;
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
         * Maintenance window used to configure scheduled auto-upgrade for a Managed Cluster.
         */
        export interface MaintenanceWindowArgs {
            /**
             * Length of maintenance window range from 4 to 24 hours.
             */
            durationHours: pulumi.Input<number>;
            /**
             * Date ranges on which upgrade is not allowed. 'utcOffset' applies to this field. For example, with 'utcOffset: +02:00' and 'dateSpan' being '2022-12-23' to '2023-01-03', maintenance will be blocked from '2022-12-22 22:00' to '2023-01-03 22:00' in UTC time.
             */
            notAllowedDates?: pulumi.Input<pulumi.Input<v20230502preview.DateSpanArgs>[]>;
            /**
             * Recurrence schedule for the maintenance window.
             */
            schedule: pulumi.Input<v20230502preview.ScheduleArgs>;
            /**
             * The date the maintenance window activates. If the current date is before this date, the maintenance window is inactive and will not be used for upgrades. If not specified, the maintenance window will be active right away.
             */
            startDate?: pulumi.Input<string>;
            /**
             * The start time of the maintenance window. Accepted values are from '00:00' to '23:59'. 'utcOffset' applies to this field. For example: '02:00' with 'utcOffset: +02:00' means UTC time '00:00'.
             */
            startTime: pulumi.Input<string>;
            /**
             * The UTC offset in format +/-HH:mm. For example, '+05:30' for IST and '-07:00' for PST. If not specified, the default is '+00:00'.
             */
            utcOffset?: pulumi.Input<string>;
        }
        /**
         * maintenanceWindowArgsProvideDefaults sets the appropriate defaults for MaintenanceWindowArgs
         */
        export function maintenanceWindowArgsProvideDefaults(val: MaintenanceWindowArgs): MaintenanceWindowArgs {
            return {
                ...val,
                durationHours: (val.durationHours) ?? 24,
            };
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
             * (DEPRECATED) The client AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
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
             * (DEPRECATED) The server AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
             */
            serverAppID?: pulumi.Input<string>;
            /**
             * (DEPRECATED) The server AAD application secret. Learn more at https://aka.ms/aks/aad-legacy.
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
             * Whether to disable run command for the cluster or not.
             */
            disableRunCommand?: pulumi.Input<boolean>;
            /**
             * For more details, see [Creating a private AKS cluster](https://docs.microsoft.com/azure/aks/private-clusters).
             */
            enablePrivateCluster?: pulumi.Input<boolean>;
            /**
             * Whether to create additional public FQDN for private cluster or not.
             */
            enablePrivateClusterPublicFQDN?: pulumi.Input<boolean>;
            /**
             * Whether to enable apiserver vnet integration for the cluster or not.
             */
            enableVnetIntegration?: pulumi.Input<boolean>;
            /**
             * The default is System. For more details see [configure private DNS zone](https://docs.microsoft.com/azure/aks/private-clusters#configure-private-dns-zone). Allowed values are 'system' and 'none'.
             */
            privateDNSZone?: pulumi.Input<string>;
            /**
             * It is required when: 1. creating a new cluster with BYO Vnet; 2. updating an existing cluster to enable apiserver vnet integration.
             */
            subnetId?: pulumi.Input<string>;
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
             * AKS will associate the specified agent pool with the Capacity Reservation Group.
             */
            capacityReservationGroupID?: pulumi.Input<string>;
            /**
             * Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 1000 (inclusive) for user pools and in the range of 1 to 1000 (inclusive) for system pools. The default value is 1.
             */
            count?: pulumi.Input<number>;
            /**
             * CreationData to be used to specify the source Snapshot ID if the node pool will be created/upgraded using a snapshot.
             */
            creationData?: pulumi.Input<v20230502preview.CreationDataArgs>;
            /**
             * Whether to enable auto-scaler
             */
            enableAutoScaling?: pulumi.Input<boolean>;
            /**
             * When set to true, AKS adds a label to the node indicating that the feature is enabled and deploys a daemonset along with host services to sync custom certificate authorities from user-provided list of base64 encoded certificates into node trust stores. Defaults to false.
             */
            enableCustomCATrust?: pulumi.Input<boolean>;
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
            gpuInstanceProfile?: pulumi.Input<string | enums.v20230502preview.GPUInstanceProfile>;
            /**
             * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}. For more information see [Azure dedicated hosts](https://docs.microsoft.com/azure/virtual-machines/dedicated-hosts).
             */
            hostGroupID?: pulumi.Input<string>;
            /**
             * The Kubelet configuration on the agent pool nodes.
             */
            kubeletConfig?: pulumi.Input<v20230502preview.KubeletConfigArgs>;
            /**
             * Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage.
             */
            kubeletDiskType?: pulumi.Input<string | enums.v20230502preview.KubeletDiskType>;
            /**
             * The OS configuration of Linux agent nodes.
             */
            linuxOSConfig?: pulumi.Input<v20230502preview.LinuxOSConfigArgs>;
            /**
             * The maximum number of nodes for auto-scaling
             */
            maxCount?: pulumi.Input<number>;
            /**
             * The maximum number of pods that can run on a node.
             */
            maxPods?: pulumi.Input<number>;
            /**
             * A base64-encoded string which will be written to /etc/motd after decoding. This allows customization of the message of the day for Linux nodes. It must not be specified for Windows nodes. It must be a static string (i.e., will be printed raw and not be executed as a script).
             */
            messageOfTheDay?: pulumi.Input<string>;
            /**
             * The minimum number of nodes for auto-scaling
             */
            minCount?: pulumi.Input<number>;
            /**
             * A cluster must have at least one 'System' Agent Pool at all times. For additional information on agent pool restrictions and best practices, see: https://docs.microsoft.com/azure/aks/use-system-pools
             */
            mode?: pulumi.Input<string | enums.v20230502preview.AgentPoolMode>;
            /**
             * Windows agent pool names must be 6 characters or less.
             */
            name: pulumi.Input<string>;
            /**
             * Network-related settings of an agent pool.
             */
            networkProfile?: pulumi.Input<v20230502preview.AgentPoolNetworkProfileArgs>;
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
             * Both patch version <major.minor.patch> and <major.minor> are supported. When <major.minor> is specified, the latest supported patch version is chosen automatically. Updating the agent pool with the same <major.minor> once it has been created will not trigger an upgrade, even if a newer patch version is available. As a best practice, you should upgrade all node pools in an AKS cluster to the same Kubernetes version. The node pool version must have the same major version as the control plane. The node pool minor version must be within two minor versions of the control plane version. The node pool version cannot be greater than the control plane version. For more information see [upgrading a node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#upgrade-a-node-pool).
             */
            orchestratorVersion?: pulumi.Input<string>;
            /**
             * OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
             */
            osDiskSizeGB?: pulumi.Input<number>;
            /**
             * The default is 'Ephemeral' if the VM supports it and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation. For more information see [Ephemeral OS](https://docs.microsoft.com/azure/aks/cluster-configuration#ephemeral-os).
             */
            osDiskType?: pulumi.Input<string | enums.v20230502preview.OSDiskType>;
            /**
             * Specifies the OS SKU used by the agent pool. If not specified, the default is Ubuntu if OSType=Linux or Windows2019 if OSType=Windows. And the default Windows OSSKU will be changed to Windows2022 after Windows2019 is deprecated.
             */
            osSKU?: pulumi.Input<string | enums.v20230502preview.OSSKU>;
            /**
             * The operating system type. The default is Linux.
             */
            osType?: pulumi.Input<string | enums.v20230502preview.OSType>;
            /**
             * If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
             */
            podSubnetID?: pulumi.Input<string>;
            /**
             * When an Agent Pool is first created it is initially Running. The Agent Pool can be stopped by setting this field to Stopped. A stopped Agent Pool stops all of its VMs and does not accrue billing charges. An Agent Pool can only be stopped if it is Running and provisioning state is Succeeded
             */
            powerState?: pulumi.Input<v20230502preview.PowerStateArgs>;
            /**
             * The ID for Proximity Placement Group.
             */
            proximityPlacementGroupID?: pulumi.Input<string>;
            /**
             * This also effects the cluster autoscaler behavior. If not specified, it defaults to Delete.
             */
            scaleDownMode?: pulumi.Input<string | enums.v20230502preview.ScaleDownMode>;
            /**
             * This cannot be specified unless the scaleSetPriority is 'Spot'. If not specified, the default is 'Delete'.
             */
            scaleSetEvictionPolicy?: pulumi.Input<string | enums.v20230502preview.ScaleSetEvictionPolicy>;
            /**
             * The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'.
             */
            scaleSetPriority?: pulumi.Input<string | enums.v20230502preview.ScaleSetPriority>;
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
            type?: pulumi.Input<string | enums.v20230502preview.AgentPoolType>;
            /**
             * Settings for upgrading the agentpool
             */
            upgradeSettings?: pulumi.Input<v20230502preview.AgentPoolUpgradeSettingsArgs>;
            /**
             * VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. For more details on restricted VM sizes, see: https://docs.microsoft.com/azure/aks/quotas-skus-regions
             */
            vmSize?: pulumi.Input<string>;
            /**
             * If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
             */
            vnetSubnetID?: pulumi.Input<string>;
            /**
             * The Windows agent pool's specific profile.
             */
            windowsProfile?: pulumi.Input<v20230502preview.AgentPoolWindowsProfileArgs>;
            /**
             * Determines the type of workload a node can run.
             */
            workloadRuntime?: pulumi.Input<string | enums.v20230502preview.WorkloadRuntime>;
        }

        /**
         * Auto upgrade profile for a managed cluster.
         */
        export interface ManagedClusterAutoUpgradeProfileArgs {
            /**
             * The default is Unmanaged, but may change to either NodeImage or SecurityPatch at GA.
             */
            nodeOSUpgradeChannel?: pulumi.Input<string | enums.v20230502preview.NodeOSUpgradeChannel>;
            /**
             * For more information see [setting the AKS cluster auto-upgrade channel](https://docs.microsoft.com/azure/aks/upgrade-cluster#set-auto-upgrade-channel).
             */
            upgradeChannel?: pulumi.Input<string | enums.v20230502preview.UpgradeChannel>;
        }

        /**
         * Prometheus addon profile for the container service cluster
         */
        export interface ManagedClusterAzureMonitorProfileArgs {
            /**
             * Metrics profile for the prometheus service addon
             */
            metrics?: pulumi.Input<v20230502preview.ManagedClusterAzureMonitorProfileMetricsArgs>;
        }

        /**
         * Kube State Metrics for prometheus addon profile for the container service cluster
         */
        export interface ManagedClusterAzureMonitorProfileKubeStateMetricsArgs {
            /**
             * Comma-separated list of additional Kubernetes label keys that will be used in the resource's labels metric.
             */
            metricAnnotationsAllowList?: pulumi.Input<string>;
            /**
             * Comma-separated list of Kubernetes annotations keys that will be used in the resource's labels metric. 
             */
            metricLabelsAllowlist?: pulumi.Input<string>;
        }

        /**
         * Metrics profile for the prometheus service addon
         */
        export interface ManagedClusterAzureMonitorProfileMetricsArgs {
            /**
             * Whether to enable the Prometheus collector
             */
            enabled: pulumi.Input<boolean>;
            /**
             * Kube State Metrics for prometheus addon profile for the container service cluster
             */
            kubeStateMetrics?: pulumi.Input<v20230502preview.ManagedClusterAzureMonitorProfileKubeStateMetricsArgs>;
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
            type?: pulumi.Input<enums.v20230502preview.ResourceIdentityType>;
            /**
             * The keys must be ARM resource IDs in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Ingress profile for the container service cluster.
         */
        export interface ManagedClusterIngressProfileArgs {
            /**
             * Web App Routing settings for the ingress profile.
             */
            webAppRouting?: pulumi.Input<v20230502preview.ManagedClusterIngressProfileWebAppRoutingArgs>;
        }

        /**
         * Web App Routing settings for the ingress profile.
         */
        export interface ManagedClusterIngressProfileWebAppRoutingArgs {
            /**
             * Resource ID of the DNS Zone to be associated with the web app. Used only when Web App Routing is enabled.
             */
            dnsZoneResourceId?: pulumi.Input<string>;
            /**
             * Whether to enable Web App Routing.
             */
            enabled?: pulumi.Input<boolean>;
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
             * The type of the managed inbound Load Balancer BackendPool.
             */
            backendPoolType?: pulumi.Input<string | enums.v20230502preview.BackendPoolType>;
            /**
             * The effective outbound IP resources of the cluster load balancer.
             */
            effectiveOutboundIPs?: pulumi.Input<pulumi.Input<v20230502preview.ResourceReferenceArgs>[]>;
            /**
             * Enable multiple standard load balancers per AKS cluster or not.
             */
            enableMultipleStandardLoadBalancers?: pulumi.Input<boolean>;
            /**
             * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 30 minutes.
             */
            idleTimeoutInMinutes?: pulumi.Input<number>;
            /**
             * Desired managed outbound IPs for the cluster load balancer.
             */
            managedOutboundIPs?: pulumi.Input<v20230502preview.ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs>;
            /**
             * Desired outbound IP Prefix resources for the cluster load balancer.
             */
            outboundIPPrefixes?: pulumi.Input<v20230502preview.ManagedClusterLoadBalancerProfileOutboundIPPrefixesArgs>;
            /**
             * Desired outbound IP resources for the cluster load balancer.
             */
            outboundIPs?: pulumi.Input<v20230502preview.ManagedClusterLoadBalancerProfileOutboundIPsArgs>;
        }
        /**
         * managedClusterLoadBalancerProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileArgs
         */
        export function managedClusterLoadBalancerProfileArgsProvideDefaults(val: ManagedClusterLoadBalancerProfileArgs): ManagedClusterLoadBalancerProfileArgs {
            return {
                ...val,
                allocatedOutboundPorts: (val.allocatedOutboundPorts) ?? 0,
                backendPoolType: (val.backendPoolType) ?? "NodeIPConfiguration",
                idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 30,
                managedOutboundIPs: (val.managedOutboundIPs ? pulumi.output(val.managedOutboundIPs).apply(v20230502preview.managedClusterLoadBalancerProfileManagedOutboundIPsArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Desired managed outbound IPs for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs {
            /**
             * The desired number of IPv4 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1. 
             */
            count?: pulumi.Input<number>;
            /**
             * The desired number of IPv6 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 0 for single-stack and 1 for dual-stack. 
             */
            countIPv6?: pulumi.Input<number>;
        }
        /**
         * managedClusterLoadBalancerProfileManagedOutboundIPsArgsProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs
         */
        export function managedClusterLoadBalancerProfileManagedOutboundIPsArgsProvideDefaults(val: ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs): ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs {
            return {
                ...val,
                count: (val.count) ?? 1,
                countIPv6: (val.countIPv6) ?? 0,
            };
        }

        /**
         * Desired outbound IP Prefix resources for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileOutboundIPPrefixesArgs {
            /**
             * A list of public IP prefix resources.
             */
            publicIPPrefixes?: pulumi.Input<pulumi.Input<v20230502preview.ResourceReferenceArgs>[]>;
        }

        /**
         * Desired outbound IP resources for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileOutboundIPsArgs {
            /**
             * A list of public IP resources.
             */
            publicIPs?: pulumi.Input<pulumi.Input<v20230502preview.ResourceReferenceArgs>[]>;
        }

        /**
         * Profile of the managed outbound IP resources of the managed cluster.
         */
        export interface ManagedClusterManagedOutboundIPProfileArgs {
            /**
             * The desired number of outbound IPs created/managed by Azure. Allowed values must be in the range of 1 to 16 (inclusive). The default value is 1. 
             */
            count?: pulumi.Input<number>;
        }
        /**
         * managedClusterManagedOutboundIPProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterManagedOutboundIPProfileArgs
         */
        export function managedClusterManagedOutboundIPProfileArgsProvideDefaults(val: ManagedClusterManagedOutboundIPProfileArgs): ManagedClusterManagedOutboundIPProfileArgs {
            return {
                ...val,
                count: (val.count) ?? 1,
            };
        }

        /**
         * Profile of the managed cluster NAT gateway.
         */
        export interface ManagedClusterNATGatewayProfileArgs {
            /**
             * The effective outbound IP resources of the cluster NAT gateway.
             */
            effectiveOutboundIPs?: pulumi.Input<pulumi.Input<v20230502preview.ResourceReferenceArgs>[]>;
            /**
             * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 4 minutes.
             */
            idleTimeoutInMinutes?: pulumi.Input<number>;
            /**
             * Profile of the managed outbound IP resources of the cluster NAT gateway.
             */
            managedOutboundIPProfile?: pulumi.Input<v20230502preview.ManagedClusterManagedOutboundIPProfileArgs>;
        }
        /**
         * managedClusterNATGatewayProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterNATGatewayProfileArgs
         */
        export function managedClusterNATGatewayProfileArgsProvideDefaults(val: ManagedClusterNATGatewayProfileArgs): ManagedClusterNATGatewayProfileArgs {
            return {
                ...val,
                idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 4,
                managedOutboundIPProfile: (val.managedOutboundIPProfile ? pulumi.output(val.managedOutboundIPProfile).apply(v20230502preview.managedClusterManagedOutboundIPProfileArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Node resource group lockdown profile for a managed cluster.
         */
        export interface ManagedClusterNodeResourceGroupProfileArgs {
            /**
             * The restriction level applied to the cluster's node resource group
             */
            restrictionLevel?: pulumi.Input<string | enums.v20230502preview.RestrictionLevel>;
        }

        /**
         * The OIDC issuer profile of the Managed Cluster.
         */
        export interface ManagedClusterOIDCIssuerProfileArgs {
            /**
             * Whether the OIDC issuer is enabled.
             */
            enabled?: pulumi.Input<boolean>;
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
            identity: pulumi.Input<v20230502preview.UserAssignedIdentityArgs>;
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
            userAssignedIdentities?: pulumi.Input<pulumi.Input<v20230502preview.ManagedClusterPodIdentityArgs>[]>;
            /**
             * The pod identity exceptions to allow.
             */
            userAssignedIdentityExceptions?: pulumi.Input<pulumi.Input<v20230502preview.ManagedClusterPodIdentityExceptionArgs>[]>;
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
            expander?: pulumi.Input<string | enums.v20230502preview.Expander>;
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

        /**
         * The SKU of a Managed Cluster.
         */
        export interface ManagedClusterSKUArgs {
            /**
             * The name of a managed cluster SKU.
             */
            name?: pulumi.Input<string | enums.v20230502preview.ManagedClusterSKUName>;
            /**
             * If not specified, the default is 'Free'. See [AKS Pricing Tier](https://learn.microsoft.com/azure/aks/free-standard-pricing-tiers) for more details.
             */
            tier?: pulumi.Input<string | enums.v20230502preview.ManagedClusterSKUTier>;
        }

        /**
         * Security profile for the container service cluster.
         */
        export interface ManagedClusterSecurityProfileArgs {
            /**
             * Azure Key Vault [key management service](https://kubernetes.io/docs/tasks/administer-cluster/kms-provider/) settings for the security profile.
             */
            azureKeyVaultKms?: pulumi.Input<v20230502preview.AzureKeyVaultKmsArgs>;
            /**
             * A list of up to 10 base64 encoded CAs that will be added to the trust store on nodes with the Custom CA Trust feature enabled. For more information see [Custom CA Trust Certificates](https://learn.microsoft.com/en-us/azure/aks/custom-certificate-authority)
             */
            customCATrustCertificates?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Microsoft Defender settings for the security profile.
             */
            defender?: pulumi.Input<v20230502preview.ManagedClusterSecurityProfileDefenderArgs>;
            /**
             * Image Cleaner settings for the security profile.
             */
            imageCleaner?: pulumi.Input<v20230502preview.ManagedClusterSecurityProfileImageCleanerArgs>;
            /**
             * [Node Restriction](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#noderestriction) settings for the security profile.
             */
            nodeRestriction?: pulumi.Input<v20230502preview.ManagedClusterSecurityProfileNodeRestrictionArgs>;
            /**
             * Workload identity settings for the security profile. Workload identity enables Kubernetes applications to access Azure cloud resources securely with Azure AD. See https://aka.ms/aks/wi for more details.
             */
            workloadIdentity?: pulumi.Input<v20230502preview.ManagedClusterSecurityProfileWorkloadIdentityArgs>;
        }
        /**
         * managedClusterSecurityProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterSecurityProfileArgs
         */
        export function managedClusterSecurityProfileArgsProvideDefaults(val: ManagedClusterSecurityProfileArgs): ManagedClusterSecurityProfileArgs {
            return {
                ...val,
                azureKeyVaultKms: (val.azureKeyVaultKms ? pulumi.output(val.azureKeyVaultKms).apply(v20230502preview.azureKeyVaultKmsArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Microsoft Defender settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileDefenderArgs {
            /**
             * Resource ID of the Log Analytics workspace to be associated with Microsoft Defender. When Microsoft Defender is enabled, this field is required and must be a valid workspace resource ID. When Microsoft Defender is disabled, leave the field empty.
             */
            logAnalyticsWorkspaceResourceId?: pulumi.Input<string>;
            /**
             * Microsoft Defender threat detection for Cloud settings for the security profile.
             */
            securityMonitoring?: pulumi.Input<v20230502preview.ManagedClusterSecurityProfileDefenderSecurityMonitoringArgs>;
        }

        /**
         * Microsoft Defender settings for the security profile threat detection.
         */
        export interface ManagedClusterSecurityProfileDefenderSecurityMonitoringArgs {
            /**
             * Whether to enable Defender threat detection
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * Image Cleaner removes unused images from nodes, freeing up disk space and helping to reduce attack surface area. Here are settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileImageCleanerArgs {
            /**
             * Whether to enable Image Cleaner on AKS cluster.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Image Cleaner scanning interval in hours.
             */
            intervalHours?: pulumi.Input<number>;
        }

        /**
         * Node Restriction settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileNodeRestrictionArgs {
            /**
             * Whether to enable Node Restriction
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * Workload identity settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileWorkloadIdentityArgs {
            /**
             * Whether to enable workload identity.
             */
            enabled?: pulumi.Input<boolean>;
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
         * Storage profile for the container service cluster.
         */
        export interface ManagedClusterStorageProfileArgs {
            /**
             * AzureBlob CSI Driver settings for the storage profile.
             */
            blobCSIDriver?: pulumi.Input<v20230502preview.ManagedClusterStorageProfileBlobCSIDriverArgs>;
            /**
             * AzureDisk CSI Driver settings for the storage profile.
             */
            diskCSIDriver?: pulumi.Input<v20230502preview.ManagedClusterStorageProfileDiskCSIDriverArgs>;
            /**
             * AzureFile CSI Driver settings for the storage profile.
             */
            fileCSIDriver?: pulumi.Input<v20230502preview.ManagedClusterStorageProfileFileCSIDriverArgs>;
            /**
             * Snapshot Controller settings for the storage profile.
             */
            snapshotController?: pulumi.Input<v20230502preview.ManagedClusterStorageProfileSnapshotControllerArgs>;
        }

        /**
         * AzureBlob CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileBlobCSIDriverArgs {
            /**
             * Whether to enable AzureBlob CSI Driver. The default value is false.
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * AzureDisk CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileDiskCSIDriverArgs {
            /**
             * Whether to enable AzureDisk CSI Driver. The default value is true.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * The version of AzureDisk CSI Driver. The default value is v1.
             */
            version?: pulumi.Input<string>;
        }

        /**
         * AzureFile CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileFileCSIDriverArgs {
            /**
             * Whether to enable AzureFile CSI Driver. The default value is true.
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * Snapshot Controller settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileSnapshotControllerArgs {
            /**
             * Whether to enable Snapshot Controller. The default value is true.
             */
            enabled?: pulumi.Input<boolean>;
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
             * The Windows gMSA Profile in the Managed Cluster.
             */
            gmsaProfile?: pulumi.Input<v20230502preview.WindowsGmsaProfileArgs>;
            /**
             * The license type to use for Windows VMs. See [Azure Hybrid User Benefits](https://azure.microsoft.com/pricing/hybrid-benefit/faq/) for more details.
             */
            licenseType?: pulumi.Input<string | enums.v20230502preview.LicenseType>;
        }

        /**
         * Workload Auto-scaler profile for the managed cluster.
         */
        export interface ManagedClusterWorkloadAutoScalerProfileArgs {
            /**
             * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
             */
            keda?: pulumi.Input<v20230502preview.ManagedClusterWorkloadAutoScalerProfileKedaArgs>;
            verticalPodAutoscaler?: pulumi.Input<v20230502preview.ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs>;
        }
        /**
         * managedClusterWorkloadAutoScalerProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterWorkloadAutoScalerProfileArgs
         */
        export function managedClusterWorkloadAutoScalerProfileArgsProvideDefaults(val: ManagedClusterWorkloadAutoScalerProfileArgs): ManagedClusterWorkloadAutoScalerProfileArgs {
            return {
                ...val,
                verticalPodAutoscaler: (val.verticalPodAutoscaler ? pulumi.output(val.verticalPodAutoscaler).apply(v20230502preview.managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgsProvideDefaults) : undefined),
            };
        }

        /**
         * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
         */
        export interface ManagedClusterWorkloadAutoScalerProfileKedaArgs {
            /**
             * Whether to enable KEDA.
             */
            enabled: pulumi.Input<boolean>;
        }

        export interface ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs {
            /**
             * Controls which resource value autoscaler will change. Default value is RequestsAndLimits.
             */
            controlledValues: pulumi.Input<string | enums.v20230502preview.ControlledValues>;
            /**
             * Whether to enable VPA. Default value is false.
             */
            enabled: pulumi.Input<boolean>;
            /**
             * Each update mode level is a superset of the lower levels. Off<Initial<Recreate<=Auto. For example: if UpdateMode is Initial, it means VPA sets the recommended resources in the VerticalPodAutoscaler Custom Resource (from UpdateMode Off) and also assigns resources on pod creation (from Initial). The default value is Off.
             */
            updateMode: pulumi.Input<string | enums.v20230502preview.UpdateMode>;
        }
        /**
         * managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgsProvideDefaults sets the appropriate defaults for ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs
         */
        export function managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgsProvideDefaults(val: ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs): ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs {
            return {
                ...val,
                controlledValues: (val.controlledValues) ?? "RequestsAndLimits",
                enabled: (val.enabled) ?? false,
                updateMode: (val.updateMode) ?? "Off",
            };
        }

        /**
         * This addon can be used to configure network monitoring and generate network monitoring data in Prometheus format
         */
        export interface NetworkMonitoringArgs {
            /**
             * Enable or disable the network monitoring plugin on the cluster
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * The port range.
         */
        export interface PortRangeArgs {
            /**
             * The maximum port that is included in the range. It should be ranged from 1 to 65535, and be greater than or equal to portStart.
             */
            portEnd?: pulumi.Input<number>;
            /**
             * The minimum port that is included in the range. It should be ranged from 1 to 65535, and be less than or equal to portEnd.
             */
            portStart?: pulumi.Input<number>;
            /**
             * The network protocol of the port.
             */
            protocol?: pulumi.Input<string | enums.v20230502preview.Protocol>;
        }

        /**
         * Describes the Power State of the cluster
         */
        export interface PowerStateArgs {
            /**
             * Tells whether the cluster is Running or Stopped
             */
            code?: pulumi.Input<string | enums.v20230502preview.Code>;
        }

        /**
         * Private endpoint which a connection belongs to.
         */
        export interface PrivateEndpointArgs {
            /**
             * The resource ID of the private endpoint
             */
            id?: pulumi.Input<string>;
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
         * The state of a private link service connection.
         */
        export interface PrivateLinkServiceConnectionStateArgs {
            /**
             * The private link service connection description.
             */
            description?: pulumi.Input<string>;
            /**
             * The private link service connection status.
             */
            status?: pulumi.Input<string | enums.v20230502preview.ConnectionStatus>;
        }

        /**
         * For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'.
         */
        export interface RelativeMonthlyScheduleArgs {
            /**
             * Specifies on which day of the week the maintenance occurs.
             */
            dayOfWeek: pulumi.Input<string | enums.v20230502preview.WeekDay>;
            /**
             * Specifies the number of months between each set of occurrences.
             */
            intervalMonths: pulumi.Input<number>;
            /**
             * Specifies on which instance of the allowed days specified in daysOfWeek the maintenance occurs.
             */
            weekIndex: pulumi.Input<string | enums.v20230502preview.Type>;
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
         * One and only one of the schedule types should be specified. Choose either 'daily', 'weekly', 'absoluteMonthly' or 'relativeMonthly' for your maintenance schedule.
         */
        export interface ScheduleArgs {
            /**
             * For schedules like: 'recur every month on the 15th' or 'recur every 3 months on the 20th'.
             */
            absoluteMonthly?: pulumi.Input<v20230502preview.AbsoluteMonthlyScheduleArgs>;
            /**
             * For schedules like: 'recur every day' or 'recur every 3 days'.
             */
            daily?: pulumi.Input<v20230502preview.DailyScheduleArgs>;
            /**
             * For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'.
             */
            relativeMonthly?: pulumi.Input<v20230502preview.RelativeMonthlyScheduleArgs>;
            /**
             * For schedules like: 'recur every Monday' or 'recur every 3 weeks on Wednesday'.
             */
            weekly?: pulumi.Input<v20230502preview.WeeklyScheduleArgs>;
        }

        /**
         * Service mesh profile for a managed cluster.
         */
        export interface ServiceMeshProfileArgs {
            /**
             * Istio service mesh configuration.
             */
            istio?: pulumi.Input<v20230502preview.IstioServiceMeshArgs>;
            /**
             * Mode of the service mesh.
             */
            mode: pulumi.Input<string | enums.v20230502preview.ServiceMeshMode>;
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
         * Time in a week.
         */
        export interface TimeInWeekArgs {
            /**
             * The day of the week.
             */
            day?: pulumi.Input<string | enums.v20230502preview.WeekDay>;
            /**
             * Each integer hour represents a time range beginning at 0m after the hour ending at the next hour (non-inclusive). 0 corresponds to 00:00 UTC, 23 corresponds to 23:00 UTC. Specifying [0, 1] means the 00:00 - 02:00 UTC time range.
             */
            hourSlots?: pulumi.Input<pulumi.Input<number>[]>;
        }

        /**
         * For example, between 2021-05-25T13:00:00Z and 2021-05-25T14:00:00Z.
         */
        export interface TimeSpanArgs {
            /**
             * The end of a time span
             */
            end?: pulumi.Input<string>;
            /**
             * The start of a time span
             */
            start?: pulumi.Input<string>;
        }

        /**
         * Settings for overrides when upgrading a cluster.
         */
        export interface UpgradeOverrideSettingsArgs {
            /**
             * List of upgrade overrides when upgrading a cluster's control plane.
             */
            controlPlaneOverrides?: pulumi.Input<pulumi.Input<string | enums.v20230502preview.ControlPlaneUpgradeOverride>[]>;
            /**
             * Until when the overrides are effective. Note that this only matches the start time of an upgrade, and the effectiveness won't change once an upgrade starts even if the `until` expires as upgrade proceeds. This field is not set by default. It must be set for the overrides to take effect.
             */
            until?: pulumi.Input<string>;
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

        /**
         * For schedules like: 'recur every Monday' or 'recur every 3 weeks on Wednesday'.
         */
        export interface WeeklyScheduleArgs {
            /**
             * Specifies on which day of the week the maintenance occurs.
             */
            dayOfWeek: pulumi.Input<string | enums.v20230502preview.WeekDay>;
            /**
             * Specifies the number of weeks between each set of occurrences.
             */
            intervalWeeks: pulumi.Input<number>;
        }

        /**
         * Windows gMSA Profile in the managed cluster.
         */
        export interface WindowsGmsaProfileArgs {
            /**
             * Specifies the DNS server for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
             */
            dnsServer?: pulumi.Input<string>;
            /**
             * Specifies whether to enable Windows gMSA in the managed cluster.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Specifies the root domain name for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
             */
            rootDomainName?: pulumi.Input<string>;
        }

    }

    export namespace v20230601 {
        /**
         * For schedules like: 'recur every month on the 15th' or 'recur every 3 months on the 20th'.
         */
        export interface AbsoluteMonthlyScheduleArgs {
            /**
             * The date of the month.
             */
            dayOfMonth: pulumi.Input<number>;
            /**
             * Specifies the number of months between each set of occurrences.
             */
            intervalMonths: pulumi.Input<number>;
        }

        /**
         * Settings for upgrading an agentpool
         */
        export interface AgentPoolUpgradeSettingsArgs {
            /**
             * The amount of time (in minutes) to wait on eviction of pods and graceful termination per node. This eviction wait time honors waiting on pod disruption budgets. If this time is exceeded, the upgrade fails. If not specified, the default is 30 minutes.
             */
            drainTimeoutInMinutes?: pulumi.Input<number>;
            /**
             * This can either be set to an integer (e.g. '5') or a percentage (e.g. '50%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified, the default is 1. For more information, including best practices, see: https://docs.microsoft.com/azure/aks/upgrade-cluster#customize-node-surge-upgrade
             */
            maxSurge?: pulumi.Input<string>;
        }

        /**
         * Azure Key Vault key management service settings for the security profile.
         */
        export interface AzureKeyVaultKmsArgs {
            /**
             * Whether to enable Azure Key Vault key management service. The default is false.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Identifier of Azure Key Vault key. See [key identifier format](https://docs.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates#vault-name-and-object-name) for more details. When Azure Key Vault key management service is enabled, this field is required and must be a valid key identifier. When Azure Key Vault key management service is disabled, leave the field empty.
             */
            keyId?: pulumi.Input<string>;
            /**
             * Network access of key vault. The possible values are `Public` and `Private`. `Public` means the key vault allows public access from all networks. `Private` means the key vault disables public access and enables private link. The default value is `Public`.
             */
            keyVaultNetworkAccess?: pulumi.Input<string | enums.v20230601.KeyVaultNetworkAccessTypes>;
            /**
             * Resource ID of key vault. When keyVaultNetworkAccess is `Private`, this field is required and must be a valid resource ID. When keyVaultNetworkAccess is `Public`, leave the field empty.
             */
            keyVaultResourceId?: pulumi.Input<string>;
        }
        /**
         * azureKeyVaultKmsArgsProvideDefaults sets the appropriate defaults for AzureKeyVaultKmsArgs
         */
        export function azureKeyVaultKmsArgsProvideDefaults(val: AzureKeyVaultKmsArgs): AzureKeyVaultKmsArgs {
            return {
                ...val,
                keyVaultNetworkAccess: (val.keyVaultNetworkAccess) ?? "Public",
            };
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
            ssh: pulumi.Input<v20230601.ContainerServiceSshConfigurationArgs>;
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
             * IP families are used to determine single-stack or dual-stack clusters. For single-stack, the expected value is IPv4. For dual-stack, the expected values are IPv4 and IPv6.
             */
            ipFamilies?: pulumi.Input<pulumi.Input<string | enums.v20230601.IpFamily>[]>;
            /**
             * Profile of the cluster load balancer.
             */
            loadBalancerProfile?: pulumi.Input<v20230601.ManagedClusterLoadBalancerProfileArgs>;
            /**
             * The default is 'standard'. See [Azure Load Balancer SKUs](https://docs.microsoft.com/azure/load-balancer/skus) for more information about the differences between load balancer SKUs.
             */
            loadBalancerSku?: pulumi.Input<string | enums.v20230601.LoadBalancerSku>;
            /**
             * Profile of the cluster NAT gateway.
             */
            natGatewayProfile?: pulumi.Input<v20230601.ManagedClusterNATGatewayProfileArgs>;
            /**
             * Network dataplane used in the Kubernetes cluster.
             */
            networkDataplane?: pulumi.Input<string | enums.v20230601.NetworkDataplane>;
            /**
             * This cannot be specified if networkPlugin is anything other than 'azure'.
             */
            networkMode?: pulumi.Input<string | enums.v20230601.NetworkMode>;
            /**
             * Network plugin used for building the Kubernetes network.
             */
            networkPlugin?: pulumi.Input<string | enums.v20230601.NetworkPlugin>;
            /**
             * The mode the network plugin should use.
             */
            networkPluginMode?: pulumi.Input<string | enums.v20230601.NetworkPluginMode>;
            /**
             * Network policy used for building the Kubernetes network.
             */
            networkPolicy?: pulumi.Input<string | enums.v20230601.NetworkPolicy>;
            /**
             * This can only be set at cluster creation time and cannot be changed later. For more information see [egress outbound type](https://docs.microsoft.com/azure/aks/egress-outboundtype).
             */
            outboundType?: pulumi.Input<string | enums.v20230601.OutboundType>;
            /**
             * A CIDR notation IP range from which to assign pod IPs when kubenet is used.
             */
            podCidr?: pulumi.Input<string>;
            /**
             * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
             */
            podCidrs?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
             */
            serviceCidr?: pulumi.Input<string>;
            /**
             * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking. They must not overlap with any Subnet IP ranges.
             */
            serviceCidrs?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * containerServiceNetworkProfileArgsProvideDefaults sets the appropriate defaults for ContainerServiceNetworkProfileArgs
         */
        export function containerServiceNetworkProfileArgsProvideDefaults(val: ContainerServiceNetworkProfileArgs): ContainerServiceNetworkProfileArgs {
            return {
                ...val,
                dnsServiceIP: (val.dnsServiceIP) ?? "10.0.0.10",
                loadBalancerProfile: (val.loadBalancerProfile ? pulumi.output(val.loadBalancerProfile).apply(v20230601.managedClusterLoadBalancerProfileArgsProvideDefaults) : undefined),
                natGatewayProfile: (val.natGatewayProfile ? pulumi.output(val.natGatewayProfile).apply(v20230601.managedClusterNATGatewayProfileArgsProvideDefaults) : undefined),
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
            publicKeys: pulumi.Input<pulumi.Input<v20230601.ContainerServiceSshPublicKeyArgs>[]>;
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
         * Data used when creating a target resource from a source resource.
         */
        export interface CreationDataArgs {
            /**
             * This is the ARM ID of the source object to be used to create the target object.
             */
            sourceResourceId?: pulumi.Input<string>;
        }

        /**
         * For schedules like: 'recur every day' or 'recur every 3 days'.
         */
        export interface DailyScheduleArgs {
            /**
             * Specifies the number of days between each set of occurrences.
             */
            intervalDays: pulumi.Input<number>;
        }

        /**
         * For example, between '2022-12-23' and '2023-01-05'.
         */
        export interface DateSpanArgs {
            /**
             * The end date of the date span.
             */
            end: pulumi.Input<string>;
            /**
             * The start date of the date span.
             */
            start: pulumi.Input<string>;
        }

        /**
         * Delegated resource properties - internal use only.
         */
        export interface DelegatedResourceArgs {
            /**
             * The source resource location - internal use only.
             */
            location?: pulumi.Input<string>;
            /**
             * The delegation id of the referral delegation (optional) - internal use only.
             */
            referralResource?: pulumi.Input<string>;
            /**
             * The ARM resource id of the delegated resource - internal use only.
             */
            resourceId?: pulumi.Input<string>;
            /**
             * The tenant id of the delegated resource - internal use only.
             */
            tenantId?: pulumi.Input<string>;
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
            type?: pulumi.Input<string | enums.v20230601.ExtendedLocationTypes>;
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
            sysctls?: pulumi.Input<v20230601.SysctlConfigArgs>;
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
         * Maintenance window used to configure scheduled auto-upgrade for a Managed Cluster.
         */
        export interface MaintenanceWindowArgs {
            /**
             * Length of maintenance window range from 4 to 24 hours.
             */
            durationHours: pulumi.Input<number>;
            /**
             * Date ranges on which upgrade is not allowed. 'utcOffset' applies to this field. For example, with 'utcOffset: +02:00' and 'dateSpan' being '2022-12-23' to '2023-01-03', maintenance will be blocked from '2022-12-22 22:00' to '2023-01-03 22:00' in UTC time.
             */
            notAllowedDates?: pulumi.Input<pulumi.Input<v20230601.DateSpanArgs>[]>;
            /**
             * Recurrence schedule for the maintenance window.
             */
            schedule: pulumi.Input<v20230601.ScheduleArgs>;
            /**
             * The date the maintenance window activates. If the current date is before this date, the maintenance window is inactive and will not be used for upgrades. If not specified, the maintenance window will be active right away.
             */
            startDate?: pulumi.Input<string>;
            /**
             * The start time of the maintenance window. Accepted values are from '00:00' to '23:59'. 'utcOffset' applies to this field. For example: '02:00' with 'utcOffset: +02:00' means UTC time '00:00'.
             */
            startTime: pulumi.Input<string>;
            /**
             * The UTC offset in format +/-HH:mm. For example, '+05:30' for IST and '-07:00' for PST. If not specified, the default is '+00:00'.
             */
            utcOffset?: pulumi.Input<string>;
        }
        /**
         * maintenanceWindowArgsProvideDefaults sets the appropriate defaults for MaintenanceWindowArgs
         */
        export function maintenanceWindowArgsProvideDefaults(val: MaintenanceWindowArgs): MaintenanceWindowArgs {
            return {
                ...val,
                durationHours: (val.durationHours) ?? 24,
            };
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
             * (DEPRECATED) The client AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
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
             * (DEPRECATED) The server AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
             */
            serverAppID?: pulumi.Input<string>;
            /**
             * (DEPRECATED) The server AAD application secret. Learn more at https://aka.ms/aks/aad-legacy.
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
             * Whether to disable run command for the cluster or not.
             */
            disableRunCommand?: pulumi.Input<boolean>;
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
             * CreationData to be used to specify the source Snapshot ID if the node pool will be created/upgraded using a snapshot.
             */
            creationData?: pulumi.Input<v20230601.CreationDataArgs>;
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
            gpuInstanceProfile?: pulumi.Input<string | enums.v20230601.GPUInstanceProfile>;
            /**
             * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}. For more information see [Azure dedicated hosts](https://docs.microsoft.com/azure/virtual-machines/dedicated-hosts).
             */
            hostGroupID?: pulumi.Input<string>;
            /**
             * The Kubelet configuration on the agent pool nodes.
             */
            kubeletConfig?: pulumi.Input<v20230601.KubeletConfigArgs>;
            /**
             * Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage.
             */
            kubeletDiskType?: pulumi.Input<string | enums.v20230601.KubeletDiskType>;
            /**
             * The OS configuration of Linux agent nodes.
             */
            linuxOSConfig?: pulumi.Input<v20230601.LinuxOSConfigArgs>;
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
            mode?: pulumi.Input<string | enums.v20230601.AgentPoolMode>;
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
             * Both patch version <major.minor.patch> (e.g. 1.20.13) and <major.minor> (e.g. 1.20) are supported. When <major.minor> is specified, the latest supported GA patch version is chosen automatically. Updating the cluster with the same <major.minor> once it has been created (e.g. 1.14.x -> 1.14) will not trigger an upgrade, even if a newer patch version is available. As a best practice, you should upgrade all node pools in an AKS cluster to the same Kubernetes version. The node pool version must have the same major version as the control plane. The node pool minor version must be within two minor versions of the control plane version. The node pool version cannot be greater than the control plane version. For more information see [upgrading a node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#upgrade-a-node-pool).
             */
            orchestratorVersion?: pulumi.Input<string>;
            /**
             * OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
             */
            osDiskSizeGB?: pulumi.Input<number>;
            /**
             * The default is 'Ephemeral' if the VM supports it and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation. For more information see [Ephemeral OS](https://docs.microsoft.com/azure/aks/cluster-configuration#ephemeral-os).
             */
            osDiskType?: pulumi.Input<string | enums.v20230601.OSDiskType>;
            /**
             * Specifies the OS SKU used by the agent pool. The default is Ubuntu if OSType is Linux. The default is Windows2019 when Kubernetes <= 1.24 or Windows2022 when Kubernetes >= 1.25 if OSType is Windows.
             */
            osSKU?: pulumi.Input<string | enums.v20230601.OSSKU>;
            /**
             * The operating system type. The default is Linux.
             */
            osType?: pulumi.Input<string | enums.v20230601.OSType>;
            /**
             * If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
             */
            podSubnetID?: pulumi.Input<string>;
            /**
             * When an Agent Pool is first created it is initially Running. The Agent Pool can be stopped by setting this field to Stopped. A stopped Agent Pool stops all of its VMs and does not accrue billing charges. An Agent Pool can only be stopped if it is Running and provisioning state is Succeeded
             */
            powerState?: pulumi.Input<v20230601.PowerStateArgs>;
            /**
             * The ID for Proximity Placement Group.
             */
            proximityPlacementGroupID?: pulumi.Input<string>;
            /**
             * This also effects the cluster autoscaler behavior. If not specified, it defaults to Delete.
             */
            scaleDownMode?: pulumi.Input<string | enums.v20230601.ScaleDownMode>;
            /**
             * This cannot be specified unless the scaleSetPriority is 'Spot'. If not specified, the default is 'Delete'.
             */
            scaleSetEvictionPolicy?: pulumi.Input<string | enums.v20230601.ScaleSetEvictionPolicy>;
            /**
             * The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'.
             */
            scaleSetPriority?: pulumi.Input<string | enums.v20230601.ScaleSetPriority>;
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
            type?: pulumi.Input<string | enums.v20230601.AgentPoolType>;
            /**
             * Settings for upgrading the agentpool
             */
            upgradeSettings?: pulumi.Input<v20230601.AgentPoolUpgradeSettingsArgs>;
            /**
             * VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. For more details on restricted VM sizes, see: https://docs.microsoft.com/azure/aks/quotas-skus-regions
             */
            vmSize?: pulumi.Input<string>;
            /**
             * If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
             */
            vnetSubnetID?: pulumi.Input<string>;
            /**
             * Determines the type of workload a node can run.
             */
            workloadRuntime?: pulumi.Input<string | enums.v20230601.WorkloadRuntime>;
        }

        /**
         * Auto upgrade profile for a managed cluster.
         */
        export interface ManagedClusterAutoUpgradeProfileArgs {
            /**
             * Manner in which the OS on your nodes is updated. The default is NodeImage.
             */
            nodeOSUpgradeChannel?: pulumi.Input<string | enums.v20230601.NodeOSUpgradeChannel>;
            /**
             * For more information see [setting the AKS cluster auto-upgrade channel](https://docs.microsoft.com/azure/aks/upgrade-cluster#set-auto-upgrade-channel).
             */
            upgradeChannel?: pulumi.Input<string | enums.v20230601.UpgradeChannel>;
        }

        /**
         * Azure Monitor addon profiles for monitoring the managed cluster.
         */
        export interface ManagedClusterAzureMonitorProfileArgs {
            /**
             * Metrics profile for the Azure Monitor managed service for Prometheus addon. Collect out-of-the-box Kubernetes infrastructure metrics to send to an Azure Monitor Workspace and configure additional scraping for custom targets. See aka.ms/AzureManagedPrometheus for an overview.
             */
            metrics?: pulumi.Input<v20230601.ManagedClusterAzureMonitorProfileMetricsArgs>;
        }

        /**
         * Kube State Metrics profile for the Azure Managed Prometheus addon. These optional settings are for the kube-state-metrics pod that is deployed with the addon. See aka.ms/AzureManagedPrometheus-optional-parameters for details.
         */
        export interface ManagedClusterAzureMonitorProfileKubeStateMetricsArgs {
            /**
             * Comma-separated list of Kubernetes annotation keys that will be used in the resource's labels metric (Example: 'namespaces=[kubernetes.io/team,...],pods=[kubernetes.io/team],...'). By default the metric contains only resource name and namespace labels.
             */
            metricAnnotationsAllowList?: pulumi.Input<string>;
            /**
             * Comma-separated list of additional Kubernetes label keys that will be used in the resource's labels metric (Example: 'namespaces=[k8s-label-1,k8s-label-n,...],pods=[app],...'). By default the metric contains only resource name and namespace labels.
             */
            metricLabelsAllowlist?: pulumi.Input<string>;
        }

        /**
         * Metrics profile for the Azure Monitor managed service for Prometheus addon. Collect out-of-the-box Kubernetes infrastructure metrics to send to an Azure Monitor Workspace and configure additional scraping for custom targets. See aka.ms/AzureManagedPrometheus for an overview.
         */
        export interface ManagedClusterAzureMonitorProfileMetricsArgs {
            /**
             * Whether to enable or disable the Azure Managed Prometheus addon for Prometheus monitoring. See aka.ms/AzureManagedPrometheus-aks-enable for details on enabling and disabling.
             */
            enabled: pulumi.Input<boolean>;
            /**
             * Kube State Metrics profile for the Azure Managed Prometheus addon. These optional settings are for the kube-state-metrics pod that is deployed with the addon. See aka.ms/AzureManagedPrometheus-optional-parameters for details.
             */
            kubeStateMetrics?: pulumi.Input<v20230601.ManagedClusterAzureMonitorProfileKubeStateMetricsArgs>;
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
             * The delegated identity resources assigned to this managed cluster. This can only be set by another Azure Resource Provider, and managed cluster only accept one delegated identity resource. Internal use only.
             */
            delegatedResources?: pulumi.Input<{[key: string]: pulumi.Input<v20230601.DelegatedResourceArgs>}>;
            /**
             * For more information see [use managed identities in AKS](https://docs.microsoft.com/azure/aks/use-managed-identity).
             */
            type?: pulumi.Input<enums.v20230601.ResourceIdentityType>;
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
            effectiveOutboundIPs?: pulumi.Input<pulumi.Input<v20230601.ResourceReferenceArgs>[]>;
            /**
             * Enable multiple standard load balancers per AKS cluster or not.
             */
            enableMultipleStandardLoadBalancers?: pulumi.Input<boolean>;
            /**
             * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 30 minutes.
             */
            idleTimeoutInMinutes?: pulumi.Input<number>;
            /**
             * Desired managed outbound IPs for the cluster load balancer.
             */
            managedOutboundIPs?: pulumi.Input<v20230601.ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs>;
            /**
             * Desired outbound IP Prefix resources for the cluster load balancer.
             */
            outboundIPPrefixes?: pulumi.Input<v20230601.ManagedClusterLoadBalancerProfileOutboundIPPrefixesArgs>;
            /**
             * Desired outbound IP resources for the cluster load balancer.
             */
            outboundIPs?: pulumi.Input<v20230601.ManagedClusterLoadBalancerProfileOutboundIPsArgs>;
        }
        /**
         * managedClusterLoadBalancerProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileArgs
         */
        export function managedClusterLoadBalancerProfileArgsProvideDefaults(val: ManagedClusterLoadBalancerProfileArgs): ManagedClusterLoadBalancerProfileArgs {
            return {
                ...val,
                allocatedOutboundPorts: (val.allocatedOutboundPorts) ?? 0,
                idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 30,
                managedOutboundIPs: (val.managedOutboundIPs ? pulumi.output(val.managedOutboundIPs).apply(v20230601.managedClusterLoadBalancerProfileManagedOutboundIPsArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Desired managed outbound IPs for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs {
            /**
             * The desired number of IPv4 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1. 
             */
            count?: pulumi.Input<number>;
            /**
             * The desired number of IPv6 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 0 for single-stack and 1 for dual-stack. 
             */
            countIPv6?: pulumi.Input<number>;
        }
        /**
         * managedClusterLoadBalancerProfileManagedOutboundIPsArgsProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs
         */
        export function managedClusterLoadBalancerProfileManagedOutboundIPsArgsProvideDefaults(val: ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs): ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs {
            return {
                ...val,
                count: (val.count) ?? 1,
                countIPv6: (val.countIPv6) ?? 0,
            };
        }

        /**
         * Desired outbound IP Prefix resources for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileOutboundIPPrefixesArgs {
            /**
             * A list of public IP prefix resources.
             */
            publicIPPrefixes?: pulumi.Input<pulumi.Input<v20230601.ResourceReferenceArgs>[]>;
        }

        /**
         * Desired outbound IP resources for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileOutboundIPsArgs {
            /**
             * A list of public IP resources.
             */
            publicIPs?: pulumi.Input<pulumi.Input<v20230601.ResourceReferenceArgs>[]>;
        }

        /**
         * Profile of the managed outbound IP resources of the managed cluster.
         */
        export interface ManagedClusterManagedOutboundIPProfileArgs {
            /**
             * The desired number of outbound IPs created/managed by Azure. Allowed values must be in the range of 1 to 16 (inclusive). The default value is 1. 
             */
            count?: pulumi.Input<number>;
        }
        /**
         * managedClusterManagedOutboundIPProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterManagedOutboundIPProfileArgs
         */
        export function managedClusterManagedOutboundIPProfileArgsProvideDefaults(val: ManagedClusterManagedOutboundIPProfileArgs): ManagedClusterManagedOutboundIPProfileArgs {
            return {
                ...val,
                count: (val.count) ?? 1,
            };
        }

        /**
         * Profile of the managed cluster NAT gateway.
         */
        export interface ManagedClusterNATGatewayProfileArgs {
            /**
             * The effective outbound IP resources of the cluster NAT gateway.
             */
            effectiveOutboundIPs?: pulumi.Input<pulumi.Input<v20230601.ResourceReferenceArgs>[]>;
            /**
             * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 4 minutes.
             */
            idleTimeoutInMinutes?: pulumi.Input<number>;
            /**
             * Profile of the managed outbound IP resources of the cluster NAT gateway.
             */
            managedOutboundIPProfile?: pulumi.Input<v20230601.ManagedClusterManagedOutboundIPProfileArgs>;
        }
        /**
         * managedClusterNATGatewayProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterNATGatewayProfileArgs
         */
        export function managedClusterNATGatewayProfileArgsProvideDefaults(val: ManagedClusterNATGatewayProfileArgs): ManagedClusterNATGatewayProfileArgs {
            return {
                ...val,
                idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 4,
                managedOutboundIPProfile: (val.managedOutboundIPProfile ? pulumi.output(val.managedOutboundIPProfile).apply(v20230601.managedClusterManagedOutboundIPProfileArgsProvideDefaults) : undefined),
            };
        }

        /**
         * The OIDC issuer profile of the Managed Cluster.
         */
        export interface ManagedClusterOIDCIssuerProfileArgs {
            /**
             * Whether the OIDC issuer is enabled.
             */
            enabled?: pulumi.Input<boolean>;
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
            identity: pulumi.Input<v20230601.UserAssignedIdentityArgs>;
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
            userAssignedIdentities?: pulumi.Input<pulumi.Input<v20230601.ManagedClusterPodIdentityArgs>[]>;
            /**
             * The pod identity exceptions to allow.
             */
            userAssignedIdentityExceptions?: pulumi.Input<pulumi.Input<v20230601.ManagedClusterPodIdentityExceptionArgs>[]>;
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
            expander?: pulumi.Input<string | enums.v20230601.Expander>;
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

        /**
         * The SKU of a Managed Cluster.
         */
        export interface ManagedClusterSKUArgs {
            /**
             * The name of a managed cluster SKU.
             */
            name?: pulumi.Input<string | enums.v20230601.ManagedClusterSKUName>;
            /**
             * If not specified, the default is 'Free'. See [AKS Pricing Tier](https://learn.microsoft.com/azure/aks/free-standard-pricing-tiers) for more details.
             */
            tier?: pulumi.Input<string | enums.v20230601.ManagedClusterSKUTier>;
        }

        /**
         * Security profile for the container service cluster.
         */
        export interface ManagedClusterSecurityProfileArgs {
            /**
             * Azure Key Vault [key management service](https://kubernetes.io/docs/tasks/administer-cluster/kms-provider/) settings for the security profile.
             */
            azureKeyVaultKms?: pulumi.Input<v20230601.AzureKeyVaultKmsArgs>;
            /**
             * Microsoft Defender settings for the security profile.
             */
            defender?: pulumi.Input<v20230601.ManagedClusterSecurityProfileDefenderArgs>;
            /**
             * Image Cleaner settings for the security profile.
             */
            imageCleaner?: pulumi.Input<v20230601.ManagedClusterSecurityProfileImageCleanerArgs>;
            /**
             * Workload identity settings for the security profile. Workload identity enables Kubernetes applications to access Azure cloud resources securely with Azure AD. See https://aka.ms/aks/wi for more details.
             */
            workloadIdentity?: pulumi.Input<v20230601.ManagedClusterSecurityProfileWorkloadIdentityArgs>;
        }
        /**
         * managedClusterSecurityProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterSecurityProfileArgs
         */
        export function managedClusterSecurityProfileArgsProvideDefaults(val: ManagedClusterSecurityProfileArgs): ManagedClusterSecurityProfileArgs {
            return {
                ...val,
                azureKeyVaultKms: (val.azureKeyVaultKms ? pulumi.output(val.azureKeyVaultKms).apply(v20230601.azureKeyVaultKmsArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Microsoft Defender settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileDefenderArgs {
            /**
             * Resource ID of the Log Analytics workspace to be associated with Microsoft Defender. When Microsoft Defender is enabled, this field is required and must be a valid workspace resource ID. When Microsoft Defender is disabled, leave the field empty.
             */
            logAnalyticsWorkspaceResourceId?: pulumi.Input<string>;
            /**
             * Microsoft Defender threat detection for Cloud settings for the security profile.
             */
            securityMonitoring?: pulumi.Input<v20230601.ManagedClusterSecurityProfileDefenderSecurityMonitoringArgs>;
        }

        /**
         * Microsoft Defender settings for the security profile threat detection.
         */
        export interface ManagedClusterSecurityProfileDefenderSecurityMonitoringArgs {
            /**
             * Whether to enable Defender threat detection
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * Image Cleaner removes unused images from nodes, freeing up disk space and helping to reduce attack surface area. Here are settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileImageCleanerArgs {
            /**
             * Whether to enable Image Cleaner on AKS cluster.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Image Cleaner scanning interval in hours.
             */
            intervalHours?: pulumi.Input<number>;
        }

        /**
         * Workload identity settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileWorkloadIdentityArgs {
            /**
             * Whether to enable workload identity.
             */
            enabled?: pulumi.Input<boolean>;
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
         * Storage profile for the container service cluster.
         */
        export interface ManagedClusterStorageProfileArgs {
            /**
             * AzureBlob CSI Driver settings for the storage profile.
             */
            blobCSIDriver?: pulumi.Input<v20230601.ManagedClusterStorageProfileBlobCSIDriverArgs>;
            /**
             * AzureDisk CSI Driver settings for the storage profile.
             */
            diskCSIDriver?: pulumi.Input<v20230601.ManagedClusterStorageProfileDiskCSIDriverArgs>;
            /**
             * AzureFile CSI Driver settings for the storage profile.
             */
            fileCSIDriver?: pulumi.Input<v20230601.ManagedClusterStorageProfileFileCSIDriverArgs>;
            /**
             * Snapshot Controller settings for the storage profile.
             */
            snapshotController?: pulumi.Input<v20230601.ManagedClusterStorageProfileSnapshotControllerArgs>;
        }

        /**
         * AzureBlob CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileBlobCSIDriverArgs {
            /**
             * Whether to enable AzureBlob CSI Driver. The default value is false.
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * AzureDisk CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileDiskCSIDriverArgs {
            /**
             * Whether to enable AzureDisk CSI Driver. The default value is true.
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * AzureFile CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileFileCSIDriverArgs {
            /**
             * Whether to enable AzureFile CSI Driver. The default value is true.
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * Snapshot Controller settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileSnapshotControllerArgs {
            /**
             * Whether to enable Snapshot Controller. The default value is true.
             */
            enabled?: pulumi.Input<boolean>;
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
             * The Windows gMSA Profile in the Managed Cluster.
             */
            gmsaProfile?: pulumi.Input<v20230601.WindowsGmsaProfileArgs>;
            /**
             * The license type to use for Windows VMs. See [Azure Hybrid User Benefits](https://azure.microsoft.com/pricing/hybrid-benefit/faq/) for more details.
             */
            licenseType?: pulumi.Input<string | enums.v20230601.LicenseType>;
        }

        /**
         * Workload Auto-scaler profile for the managed cluster.
         */
        export interface ManagedClusterWorkloadAutoScalerProfileArgs {
            /**
             * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
             */
            keda?: pulumi.Input<v20230601.ManagedClusterWorkloadAutoScalerProfileKedaArgs>;
            /**
             * VPA (Vertical Pod Autoscaler) settings for the workload auto-scaler profile.
             */
            verticalPodAutoscaler?: pulumi.Input<v20230601.ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs>;
        }
        /**
         * managedClusterWorkloadAutoScalerProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterWorkloadAutoScalerProfileArgs
         */
        export function managedClusterWorkloadAutoScalerProfileArgsProvideDefaults(val: ManagedClusterWorkloadAutoScalerProfileArgs): ManagedClusterWorkloadAutoScalerProfileArgs {
            return {
                ...val,
                verticalPodAutoscaler: (val.verticalPodAutoscaler ? pulumi.output(val.verticalPodAutoscaler).apply(v20230601.managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgsProvideDefaults) : undefined),
            };
        }

        /**
         * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
         */
        export interface ManagedClusterWorkloadAutoScalerProfileKedaArgs {
            /**
             * Whether to enable KEDA.
             */
            enabled: pulumi.Input<boolean>;
        }

        /**
         * VPA (Vertical Pod Autoscaler) settings for the workload auto-scaler profile.
         */
        export interface ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs {
            /**
             * Whether to enable VPA. Default value is false.
             */
            enabled: pulumi.Input<boolean>;
        }
        /**
         * managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgsProvideDefaults sets the appropriate defaults for ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs
         */
        export function managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgsProvideDefaults(val: ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs): ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs {
            return {
                ...val,
                enabled: (val.enabled) ?? false,
            };
        }

        /**
         * Describes the Power State of the cluster
         */
        export interface PowerStateArgs {
            /**
             * Tells whether the cluster is Running or Stopped
             */
            code?: pulumi.Input<string | enums.v20230601.Code>;
        }

        /**
         * Private endpoint which a connection belongs to.
         */
        export interface PrivateEndpointArgs {
            /**
             * The resource ID of the private endpoint
             */
            id?: pulumi.Input<string>;
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
         * The state of a private link service connection.
         */
        export interface PrivateLinkServiceConnectionStateArgs {
            /**
             * The private link service connection description.
             */
            description?: pulumi.Input<string>;
            /**
             * The private link service connection status.
             */
            status?: pulumi.Input<string | enums.v20230601.ConnectionStatus>;
        }

        /**
         * For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'.
         */
        export interface RelativeMonthlyScheduleArgs {
            /**
             * Specifies on which day of the week the maintenance occurs.
             */
            dayOfWeek: pulumi.Input<string | enums.v20230601.WeekDay>;
            /**
             * Specifies the number of months between each set of occurrences.
             */
            intervalMonths: pulumi.Input<number>;
            /**
             * Specifies on which week of the month the dayOfWeek applies.
             */
            weekIndex: pulumi.Input<string | enums.v20230601.Type>;
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
         * One and only one of the schedule types should be specified. Choose either 'daily', 'weekly', 'absoluteMonthly' or 'relativeMonthly' for your maintenance schedule.
         */
        export interface ScheduleArgs {
            /**
             * For schedules like: 'recur every month on the 15th' or 'recur every 3 months on the 20th'.
             */
            absoluteMonthly?: pulumi.Input<v20230601.AbsoluteMonthlyScheduleArgs>;
            /**
             * For schedules like: 'recur every day' or 'recur every 3 days'.
             */
            daily?: pulumi.Input<v20230601.DailyScheduleArgs>;
            /**
             * For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'.
             */
            relativeMonthly?: pulumi.Input<v20230601.RelativeMonthlyScheduleArgs>;
            /**
             * For schedules like: 'recur every Monday' or 'recur every 3 weeks on Wednesday'.
             */
            weekly?: pulumi.Input<v20230601.WeeklyScheduleArgs>;
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
         * Time in a week.
         */
        export interface TimeInWeekArgs {
            /**
             * The day of the week.
             */
            day?: pulumi.Input<string | enums.v20230601.WeekDay>;
            /**
             * Each integer hour represents a time range beginning at 0m after the hour ending at the next hour (non-inclusive). 0 corresponds to 00:00 UTC, 23 corresponds to 23:00 UTC. Specifying [0, 1] means the 00:00 - 02:00 UTC time range.
             */
            hourSlots?: pulumi.Input<pulumi.Input<number>[]>;
        }

        /**
         * For example, between 2021-05-25T13:00:00Z and 2021-05-25T14:00:00Z.
         */
        export interface TimeSpanArgs {
            /**
             * The end of a time span
             */
            end?: pulumi.Input<string>;
            /**
             * The start of a time span
             */
            start?: pulumi.Input<string>;
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

        /**
         * For schedules like: 'recur every Monday' or 'recur every 3 weeks on Wednesday'.
         */
        export interface WeeklyScheduleArgs {
            /**
             * Specifies on which day of the week the maintenance occurs.
             */
            dayOfWeek: pulumi.Input<string | enums.v20230601.WeekDay>;
            /**
             * Specifies the number of weeks between each set of occurrences.
             */
            intervalWeeks: pulumi.Input<number>;
        }

        /**
         * Windows gMSA Profile in the managed cluster.
         */
        export interface WindowsGmsaProfileArgs {
            /**
             * Specifies the DNS server for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
             */
            dnsServer?: pulumi.Input<string>;
            /**
             * Specifies whether to enable Windows gMSA in the managed cluster.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Specifies the root domain name for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
             */
            rootDomainName?: pulumi.Input<string>;
        }

    }

    export namespace v20230602preview {
        /**
         * For schedules like: 'recur every month on the 15th' or 'recur every 3 months on the 20th'.
         */
        export interface AbsoluteMonthlyScheduleArgs {
            /**
             * The date of the month.
             */
            dayOfMonth: pulumi.Input<number>;
            /**
             * Specifies the number of months between each set of occurrences.
             */
            intervalMonths: pulumi.Input<number>;
        }

        /**
         * Network settings of an agent pool.
         */
        export interface AgentPoolNetworkProfileArgs {
            /**
             * The port ranges that are allowed to access. The specified ranges are allowed to overlap.
             */
            allowedHostPorts?: pulumi.Input<pulumi.Input<v20230602preview.PortRangeArgs>[]>;
            /**
             * The IDs of the application security groups which agent pool will associate when created.
             */
            applicationSecurityGroups?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * IPTags of instance-level public IPs.
             */
            nodePublicIPTags?: pulumi.Input<pulumi.Input<v20230602preview.IPTagArgs>[]>;
        }

        /**
         * The security settings of an agent pool.
         */
        export interface AgentPoolSecurityProfileArgs {
            /**
             * SSH access method of an agent pool.
             */
            sshAccess?: pulumi.Input<string | enums.v20230602preview.AgentPoolSSHAccess>;
        }

        /**
         * Settings for upgrading an agentpool
         */
        export interface AgentPoolUpgradeSettingsArgs {
            /**
             * The amount of time (in minutes) to wait on eviction of pods and graceful termination per node. This eviction wait time honors waiting on pod disruption budgets. If this time is exceeded, the upgrade fails. If not specified, the default is 30 minutes.
             */
            drainTimeoutInMinutes?: pulumi.Input<number>;
            /**
             * This can either be set to an integer (e.g. '5') or a percentage (e.g. '50%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified, the default is 1. For more information, including best practices, see: https://docs.microsoft.com/azure/aks/upgrade-cluster#customize-node-surge-upgrade
             */
            maxSurge?: pulumi.Input<string>;
        }

        /**
         * The Windows agent pool's specific profile.
         */
        export interface AgentPoolWindowsProfileArgs {
            /**
             * The default value is false. Outbound NAT can only be disabled if the cluster outboundType is NAT Gateway and the Windows agent pool does not have node public IP enabled.
             */
            disableOutboundNat?: pulumi.Input<boolean>;
        }

        /**
         * Azure Key Vault key management service settings for the security profile.
         */
        export interface AzureKeyVaultKmsArgs {
            /**
             * Whether to enable Azure Key Vault key management service. The default is false.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Identifier of Azure Key Vault key. See [key identifier format](https://docs.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates#vault-name-and-object-name) for more details. When Azure Key Vault key management service is enabled, this field is required and must be a valid key identifier. When Azure Key Vault key management service is disabled, leave the field empty.
             */
            keyId?: pulumi.Input<string>;
            /**
             * Network access of key vault. The possible values are `Public` and `Private`. `Public` means the key vault allows public access from all networks. `Private` means the key vault disables public access and enables private link. The default value is `Public`.
             */
            keyVaultNetworkAccess?: pulumi.Input<string | enums.v20230602preview.KeyVaultNetworkAccessTypes>;
            /**
             * Resource ID of key vault. When keyVaultNetworkAccess is `Private`, this field is required and must be a valid resource ID. When keyVaultNetworkAccess is `Public`, leave the field empty.
             */
            keyVaultResourceId?: pulumi.Input<string>;
        }
        /**
         * azureKeyVaultKmsArgsProvideDefaults sets the appropriate defaults for AzureKeyVaultKmsArgs
         */
        export function azureKeyVaultKmsArgsProvideDefaults(val: AzureKeyVaultKmsArgs): AzureKeyVaultKmsArgs {
            return {
                ...val,
                keyVaultNetworkAccess: (val.keyVaultNetworkAccess) ?? "Public",
            };
        }

        /**
         * Settings for upgrading a cluster.
         */
        export interface ClusterUpgradeSettingsArgs {
            /**
             * Settings for overrides.
             */
            overrideSettings?: pulumi.Input<v20230602preview.UpgradeOverrideSettingsArgs>;
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
            ssh: pulumi.Input<v20230602preview.ContainerServiceSshConfigurationArgs>;
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
             * IP families are used to determine single-stack or dual-stack clusters. For single-stack, the expected value is IPv4. For dual-stack, the expected values are IPv4 and IPv6.
             */
            ipFamilies?: pulumi.Input<pulumi.Input<string | enums.v20230602preview.IpFamily>[]>;
            /**
             * Holds configuration customizations for kube-proxy. Any values not defined will use the kube-proxy defaulting behavior. See https://v<version>.docs.kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/ where <version> is represented by a <major version>-<minor version> string. Kubernetes version 1.23 would be '1-23'.
             */
            kubeProxyConfig?: pulumi.Input<v20230602preview.ContainerServiceNetworkProfileKubeProxyConfigArgs>;
            /**
             * Profile of the cluster load balancer.
             */
            loadBalancerProfile?: pulumi.Input<v20230602preview.ManagedClusterLoadBalancerProfileArgs>;
            /**
             * The default is 'standard'. See [Azure Load Balancer SKUs](https://docs.microsoft.com/azure/load-balancer/skus) for more information about the differences between load balancer SKUs.
             */
            loadBalancerSku?: pulumi.Input<string | enums.v20230602preview.LoadBalancerSku>;
            /**
             * This addon can be used to configure network monitoring and generate network monitoring data in Prometheus format
             */
            monitoring?: pulumi.Input<v20230602preview.NetworkMonitoringArgs>;
            /**
             * Profile of the cluster NAT gateway.
             */
            natGatewayProfile?: pulumi.Input<v20230602preview.ManagedClusterNATGatewayProfileArgs>;
            /**
             * Network dataplane used in the Kubernetes cluster.
             */
            networkDataplane?: pulumi.Input<string | enums.v20230602preview.NetworkDataplane>;
            /**
             * This cannot be specified if networkPlugin is anything other than 'azure'.
             */
            networkMode?: pulumi.Input<string | enums.v20230602preview.NetworkMode>;
            /**
             * Network plugin used for building the Kubernetes network.
             */
            networkPlugin?: pulumi.Input<string | enums.v20230602preview.NetworkPlugin>;
            /**
             * Network plugin mode used for building the Kubernetes network.
             */
            networkPluginMode?: pulumi.Input<string | enums.v20230602preview.NetworkPluginMode>;
            /**
             * Network policy used for building the Kubernetes network.
             */
            networkPolicy?: pulumi.Input<string | enums.v20230602preview.NetworkPolicy>;
            /**
             * This can only be set at cluster creation time and cannot be changed later. For more information see [egress outbound type](https://docs.microsoft.com/azure/aks/egress-outboundtype).
             */
            outboundType?: pulumi.Input<string | enums.v20230602preview.OutboundType>;
            /**
             * A CIDR notation IP range from which to assign pod IPs when kubenet is used.
             */
            podCidr?: pulumi.Input<string>;
            /**
             * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
             */
            podCidrs?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
             */
            serviceCidr?: pulumi.Input<string>;
            /**
             * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking. They must not overlap with any Subnet IP ranges.
             */
            serviceCidrs?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * containerServiceNetworkProfileArgsProvideDefaults sets the appropriate defaults for ContainerServiceNetworkProfileArgs
         */
        export function containerServiceNetworkProfileArgsProvideDefaults(val: ContainerServiceNetworkProfileArgs): ContainerServiceNetworkProfileArgs {
            return {
                ...val,
                dnsServiceIP: (val.dnsServiceIP) ?? "10.0.0.10",
                loadBalancerProfile: (val.loadBalancerProfile ? pulumi.output(val.loadBalancerProfile).apply(v20230602preview.managedClusterLoadBalancerProfileArgsProvideDefaults) : undefined),
                natGatewayProfile: (val.natGatewayProfile ? pulumi.output(val.natGatewayProfile).apply(v20230602preview.managedClusterNATGatewayProfileArgsProvideDefaults) : undefined),
                outboundType: (val.outboundType) ?? "loadBalancer",
                podCidr: (val.podCidr) ?? "10.244.0.0/16",
                serviceCidr: (val.serviceCidr) ?? "10.0.0.0/16",
            };
        }

        /**
         * Holds configuration customizations for IPVS. May only be specified if 'mode' is set to 'IPVS'.
         */
        export interface ContainerServiceNetworkProfileIpvsConfigArgs {
            /**
             * IPVS scheduler, for more information please see http://www.linuxvirtualserver.org/docs/scheduling.html.
             */
            scheduler?: pulumi.Input<string | enums.v20230602preview.IpvsScheduler>;
            /**
             * The timeout value used for IPVS TCP sessions after receiving a FIN in seconds. Must be a positive integer value.
             */
            tcpFinTimeoutSeconds?: pulumi.Input<number>;
            /**
             * The timeout value used for idle IPVS TCP sessions in seconds. Must be a positive integer value.
             */
            tcpTimeoutSeconds?: pulumi.Input<number>;
            /**
             * The timeout value used for IPVS UDP packets in seconds. Must be a positive integer value.
             */
            udpTimeoutSeconds?: pulumi.Input<number>;
        }

        /**
         * Holds configuration customizations for kube-proxy. Any values not defined will use the kube-proxy defaulting behavior. See https://v<version>.docs.kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/ where <version> is represented by a <major version>-<minor version> string. Kubernetes version 1.23 would be '1-23'.
         */
        export interface ContainerServiceNetworkProfileKubeProxyConfigArgs {
            /**
             * Whether to enable on kube-proxy on the cluster (if no 'kubeProxyConfig' exists, kube-proxy is enabled in AKS by default without these customizations).
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Holds configuration customizations for IPVS. May only be specified if 'mode' is set to 'IPVS'.
             */
            ipvsConfig?: pulumi.Input<v20230602preview.ContainerServiceNetworkProfileIpvsConfigArgs>;
            /**
             * Specify which proxy mode to use ('IPTABLES' or 'IPVS')
             */
            mode?: pulumi.Input<string | enums.v20230602preview.Mode>;
        }

        /**
         * SSH configuration for Linux-based VMs running on Azure.
         */
        export interface ContainerServiceSshConfigurationArgs {
            /**
             * The list of SSH public keys used to authenticate with Linux-based VMs. A maximum of 1 key may be specified.
             */
            publicKeys: pulumi.Input<pulumi.Input<v20230602preview.ContainerServiceSshPublicKeyArgs>[]>;
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
         * Data used when creating a target resource from a source resource.
         */
        export interface CreationDataArgs {
            /**
             * This is the ARM ID of the source object to be used to create the target object.
             */
            sourceResourceId?: pulumi.Input<string>;
        }

        /**
         * For schedules like: 'recur every day' or 'recur every 3 days'.
         */
        export interface DailyScheduleArgs {
            /**
             * Specifies the number of days between each set of occurrences.
             */
            intervalDays: pulumi.Input<number>;
        }

        /**
         * For example, between '2022-12-23' and '2023-01-05'.
         */
        export interface DateSpanArgs {
            /**
             * The end date of the date span.
             */
            end: pulumi.Input<string>;
            /**
             * The start date of the date span.
             */
            start: pulumi.Input<string>;
        }

        /**
         * Delegated resource properties - internal use only.
         */
        export interface DelegatedResourceArgs {
            /**
             * The source resource location - internal use only.
             */
            location?: pulumi.Input<string>;
            /**
             * The delegation id of the referral delegation (optional) - internal use only.
             */
            referralResource?: pulumi.Input<string>;
            /**
             * The ARM resource id of the delegated resource - internal use only.
             */
            resourceId?: pulumi.Input<string>;
            /**
             * The tenant id of the delegated resource - internal use only.
             */
            tenantId?: pulumi.Input<string>;
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
            type?: pulumi.Input<string | enums.v20230602preview.ExtendedLocationTypes>;
        }

        /**
         * The Guardrails profile.
         */
        export interface GuardrailsProfileArgs {
            /**
             * List of namespaces excluded from guardrails checks
             */
            excludedNamespaces?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The guardrails level to be used. By default, Guardrails is enabled for all namespaces except those that AKS excludes via systemExcludedNamespaces
             */
            level: pulumi.Input<string | enums.v20230602preview.Level>;
            /**
             * The version of constraints to use
             */
            version: pulumi.Input<string>;
        }

        /**
         * Contains the IPTag associated with the object.
         */
        export interface IPTagArgs {
            /**
             * The IP tag type. Example: RoutingPreference.
             */
            ipTagType?: pulumi.Input<string>;
            /**
             * The value of the IP tag associated with the public IP. Example: Internet.
             */
            tag?: pulumi.Input<string>;
        }

        /**
         * Istio Service Mesh Certificate Authority (CA) configuration. For now, we only support plugin certificates as described here https://aka.ms/asm-plugin-ca
         */
        export interface IstioCertificateAuthorityArgs {
            /**
             * Plugin certificates information for Service Mesh.
             */
            plugin?: pulumi.Input<v20230602preview.IstioPluginCertificateAuthorityArgs>;
        }

        /**
         * Istio components configuration.
         */
        export interface IstioComponentsArgs {
            /**
             * Istio egress gateways.
             */
            egressGateways?: pulumi.Input<pulumi.Input<v20230602preview.IstioEgressGatewayArgs>[]>;
            /**
             * Istio ingress gateways.
             */
            ingressGateways?: pulumi.Input<pulumi.Input<v20230602preview.IstioIngressGatewayArgs>[]>;
        }

        /**
         * Istio egress gateway configuration.
         */
        export interface IstioEgressGatewayArgs {
            /**
             * Whether to enable the egress gateway.
             */
            enabled: pulumi.Input<boolean>;
            /**
             * NodeSelector for scheduling the egress gateway.
             */
            nodeSelector?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        }

        /**
         * Istio ingress gateway configuration. For now, we support up to one external ingress gateway named `aks-istio-ingressgateway-external` and one internal ingress gateway named `aks-istio-ingressgateway-internal`.
         */
        export interface IstioIngressGatewayArgs {
            /**
             * Whether to enable the ingress gateway.
             */
            enabled: pulumi.Input<boolean>;
            /**
             * Mode of an ingress gateway.
             */
            mode: pulumi.Input<string | enums.v20230602preview.IstioIngressGatewayMode>;
        }

        /**
         * Plugin certificates information for Service Mesh.
         */
        export interface IstioPluginCertificateAuthorityArgs {
            /**
             * Certificate chain object name in Azure Key Vault.
             */
            certChainObjectName?: pulumi.Input<string>;
            /**
             * Intermediate certificate object name in Azure Key Vault.
             */
            certObjectName?: pulumi.Input<string>;
            /**
             * Intermediate certificate private key object name in Azure Key Vault.
             */
            keyObjectName?: pulumi.Input<string>;
            /**
             * The resource ID of the Key Vault.
             */
            keyVaultId?: pulumi.Input<string>;
            /**
             * Root certificate object name in Azure Key Vault.
             */
            rootCertObjectName?: pulumi.Input<string>;
        }

        /**
         * Istio service mesh configuration.
         */
        export interface IstioServiceMeshArgs {
            /**
             * Istio Service Mesh Certificate Authority (CA) configuration. For now, we only support plugin certificates as described here https://aka.ms/asm-plugin-ca
             */
            certificateAuthority?: pulumi.Input<v20230602preview.IstioCertificateAuthorityArgs>;
            /**
             * Istio components configuration.
             */
            components?: pulumi.Input<v20230602preview.IstioComponentsArgs>;
            /**
             * The list of revisions of the Istio control plane. When an upgrade is not in progress, this holds one value. When canary upgrade is in progress, this can only hold two consecutive values. For more information, see: https://learn.microsoft.com/en-us/azure/aks/istio-upgrade
             */
            revisions?: pulumi.Input<pulumi.Input<string>[]>;
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
            sysctls?: pulumi.Input<v20230602preview.SysctlConfigArgs>;
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
         * Maintenance window used to configure scheduled auto-upgrade for a Managed Cluster.
         */
        export interface MaintenanceWindowArgs {
            /**
             * Length of maintenance window range from 4 to 24 hours.
             */
            durationHours: pulumi.Input<number>;
            /**
             * Date ranges on which upgrade is not allowed. 'utcOffset' applies to this field. For example, with 'utcOffset: +02:00' and 'dateSpan' being '2022-12-23' to '2023-01-03', maintenance will be blocked from '2022-12-22 22:00' to '2023-01-03 22:00' in UTC time.
             */
            notAllowedDates?: pulumi.Input<pulumi.Input<v20230602preview.DateSpanArgs>[]>;
            /**
             * Recurrence schedule for the maintenance window.
             */
            schedule: pulumi.Input<v20230602preview.ScheduleArgs>;
            /**
             * The date the maintenance window activates. If the current date is before this date, the maintenance window is inactive and will not be used for upgrades. If not specified, the maintenance window will be active right away.
             */
            startDate?: pulumi.Input<string>;
            /**
             * The start time of the maintenance window. Accepted values are from '00:00' to '23:59'. 'utcOffset' applies to this field. For example: '02:00' with 'utcOffset: +02:00' means UTC time '00:00'.
             */
            startTime: pulumi.Input<string>;
            /**
             * The UTC offset in format +/-HH:mm. For example, '+05:30' for IST and '-07:00' for PST. If not specified, the default is '+00:00'.
             */
            utcOffset?: pulumi.Input<string>;
        }
        /**
         * maintenanceWindowArgsProvideDefaults sets the appropriate defaults for MaintenanceWindowArgs
         */
        export function maintenanceWindowArgsProvideDefaults(val: MaintenanceWindowArgs): MaintenanceWindowArgs {
            return {
                ...val,
                durationHours: (val.durationHours) ?? 24,
            };
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
             * (DEPRECATED) The client AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
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
             * (DEPRECATED) The server AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
             */
            serverAppID?: pulumi.Input<string>;
            /**
             * (DEPRECATED) The server AAD application secret. Learn more at https://aka.ms/aks/aad-legacy.
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
             * Whether to disable run command for the cluster or not.
             */
            disableRunCommand?: pulumi.Input<boolean>;
            /**
             * For more details, see [Creating a private AKS cluster](https://docs.microsoft.com/azure/aks/private-clusters).
             */
            enablePrivateCluster?: pulumi.Input<boolean>;
            /**
             * Whether to create additional public FQDN for private cluster or not.
             */
            enablePrivateClusterPublicFQDN?: pulumi.Input<boolean>;
            /**
             * Whether to enable apiserver vnet integration for the cluster or not.
             */
            enableVnetIntegration?: pulumi.Input<boolean>;
            /**
             * The default is System. For more details see [configure private DNS zone](https://docs.microsoft.com/azure/aks/private-clusters#configure-private-dns-zone). Allowed values are 'system' and 'none'.
             */
            privateDNSZone?: pulumi.Input<string>;
            /**
             * It is required when: 1. creating a new cluster with BYO Vnet; 2. updating an existing cluster to enable apiserver vnet integration.
             */
            subnetId?: pulumi.Input<string>;
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
             * AKS will associate the specified agent pool with the Capacity Reservation Group.
             */
            capacityReservationGroupID?: pulumi.Input<string>;
            /**
             * Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 1000 (inclusive) for user pools and in the range of 1 to 1000 (inclusive) for system pools. The default value is 1.
             */
            count?: pulumi.Input<number>;
            /**
             * CreationData to be used to specify the source Snapshot ID if the node pool will be created/upgraded using a snapshot.
             */
            creationData?: pulumi.Input<v20230602preview.CreationDataArgs>;
            /**
             * Whether to enable auto-scaler
             */
            enableAutoScaling?: pulumi.Input<boolean>;
            /**
             * When set to true, AKS adds a label to the node indicating that the feature is enabled and deploys a daemonset along with host services to sync custom certificate authorities from user-provided list of base64 encoded certificates into node trust stores. Defaults to false.
             */
            enableCustomCATrust?: pulumi.Input<boolean>;
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
            gpuInstanceProfile?: pulumi.Input<string | enums.v20230602preview.GPUInstanceProfile>;
            /**
             * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}. For more information see [Azure dedicated hosts](https://docs.microsoft.com/azure/virtual-machines/dedicated-hosts).
             */
            hostGroupID?: pulumi.Input<string>;
            /**
             * The Kubelet configuration on the agent pool nodes.
             */
            kubeletConfig?: pulumi.Input<v20230602preview.KubeletConfigArgs>;
            /**
             * Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage.
             */
            kubeletDiskType?: pulumi.Input<string | enums.v20230602preview.KubeletDiskType>;
            /**
             * The OS configuration of Linux agent nodes.
             */
            linuxOSConfig?: pulumi.Input<v20230602preview.LinuxOSConfigArgs>;
            /**
             * The maximum number of nodes for auto-scaling
             */
            maxCount?: pulumi.Input<number>;
            /**
             * The maximum number of pods that can run on a node.
             */
            maxPods?: pulumi.Input<number>;
            /**
             * A base64-encoded string which will be written to /etc/motd after decoding. This allows customization of the message of the day for Linux nodes. It must not be specified for Windows nodes. It must be a static string (i.e., will be printed raw and not be executed as a script).
             */
            messageOfTheDay?: pulumi.Input<string>;
            /**
             * The minimum number of nodes for auto-scaling
             */
            minCount?: pulumi.Input<number>;
            /**
             * A cluster must have at least one 'System' Agent Pool at all times. For additional information on agent pool restrictions and best practices, see: https://docs.microsoft.com/azure/aks/use-system-pools
             */
            mode?: pulumi.Input<string | enums.v20230602preview.AgentPoolMode>;
            /**
             * Windows agent pool names must be 6 characters or less.
             */
            name: pulumi.Input<string>;
            /**
             * Network-related settings of an agent pool.
             */
            networkProfile?: pulumi.Input<v20230602preview.AgentPoolNetworkProfileArgs>;
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
             * Both patch version <major.minor.patch> and <major.minor> are supported. When <major.minor> is specified, the latest supported patch version is chosen automatically. Updating the agent pool with the same <major.minor> once it has been created will not trigger an upgrade, even if a newer patch version is available. As a best practice, you should upgrade all node pools in an AKS cluster to the same Kubernetes version. The node pool version must have the same major version as the control plane. The node pool minor version must be within two minor versions of the control plane version. The node pool version cannot be greater than the control plane version. For more information see [upgrading a node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#upgrade-a-node-pool).
             */
            orchestratorVersion?: pulumi.Input<string>;
            /**
             * OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
             */
            osDiskSizeGB?: pulumi.Input<number>;
            /**
             * The default is 'Ephemeral' if the VM supports it and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation. For more information see [Ephemeral OS](https://docs.microsoft.com/azure/aks/cluster-configuration#ephemeral-os).
             */
            osDiskType?: pulumi.Input<string | enums.v20230602preview.OSDiskType>;
            /**
             * Specifies the OS SKU used by the agent pool. If not specified, the default is Ubuntu if OSType=Linux or Windows2019 if OSType=Windows. And the default Windows OSSKU will be changed to Windows2022 after Windows2019 is deprecated.
             */
            osSKU?: pulumi.Input<string | enums.v20230602preview.OSSKU>;
            /**
             * The operating system type. The default is Linux.
             */
            osType?: pulumi.Input<string | enums.v20230602preview.OSType>;
            /**
             * If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
             */
            podSubnetID?: pulumi.Input<string>;
            /**
             * When an Agent Pool is first created it is initially Running. The Agent Pool can be stopped by setting this field to Stopped. A stopped Agent Pool stops all of its VMs and does not accrue billing charges. An Agent Pool can only be stopped if it is Running and provisioning state is Succeeded
             */
            powerState?: pulumi.Input<v20230602preview.PowerStateArgs>;
            /**
             * The ID for Proximity Placement Group.
             */
            proximityPlacementGroupID?: pulumi.Input<string>;
            /**
             * This also effects the cluster autoscaler behavior. If not specified, it defaults to Delete.
             */
            scaleDownMode?: pulumi.Input<string | enums.v20230602preview.ScaleDownMode>;
            /**
             * This cannot be specified unless the scaleSetPriority is 'Spot'. If not specified, the default is 'Delete'.
             */
            scaleSetEvictionPolicy?: pulumi.Input<string | enums.v20230602preview.ScaleSetEvictionPolicy>;
            /**
             * The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'.
             */
            scaleSetPriority?: pulumi.Input<string | enums.v20230602preview.ScaleSetPriority>;
            /**
             * The security settings of an agent pool.
             */
            securityProfile?: pulumi.Input<v20230602preview.AgentPoolSecurityProfileArgs>;
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
            type?: pulumi.Input<string | enums.v20230602preview.AgentPoolType>;
            /**
             * Settings for upgrading the agentpool
             */
            upgradeSettings?: pulumi.Input<v20230602preview.AgentPoolUpgradeSettingsArgs>;
            /**
             * VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. For more details on restricted VM sizes, see: https://docs.microsoft.com/azure/aks/quotas-skus-regions
             */
            vmSize?: pulumi.Input<string>;
            /**
             * If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
             */
            vnetSubnetID?: pulumi.Input<string>;
            /**
             * The Windows agent pool's specific profile.
             */
            windowsProfile?: pulumi.Input<v20230602preview.AgentPoolWindowsProfileArgs>;
            /**
             * Determines the type of workload a node can run.
             */
            workloadRuntime?: pulumi.Input<string | enums.v20230602preview.WorkloadRuntime>;
        }

        /**
         * Auto upgrade profile for a managed cluster.
         */
        export interface ManagedClusterAutoUpgradeProfileArgs {
            /**
             * The default is Unmanaged, but may change to either NodeImage or SecurityPatch at GA.
             */
            nodeOSUpgradeChannel?: pulumi.Input<string | enums.v20230602preview.NodeOSUpgradeChannel>;
            /**
             * For more information see [setting the AKS cluster auto-upgrade channel](https://docs.microsoft.com/azure/aks/upgrade-cluster#set-auto-upgrade-channel).
             */
            upgradeChannel?: pulumi.Input<string | enums.v20230602preview.UpgradeChannel>;
        }

        /**
         * Prometheus addon profile for the container service cluster
         */
        export interface ManagedClusterAzureMonitorProfileArgs {
            /**
             * Metrics profile for the prometheus service addon
             */
            metrics?: pulumi.Input<v20230602preview.ManagedClusterAzureMonitorProfileMetricsArgs>;
        }

        /**
         * Kube State Metrics for prometheus addon profile for the container service cluster
         */
        export interface ManagedClusterAzureMonitorProfileKubeStateMetricsArgs {
            /**
             * Comma-separated list of additional Kubernetes label keys that will be used in the resource's labels metric.
             */
            metricAnnotationsAllowList?: pulumi.Input<string>;
            /**
             * Comma-separated list of Kubernetes annotations keys that will be used in the resource's labels metric. 
             */
            metricLabelsAllowlist?: pulumi.Input<string>;
        }

        /**
         * Metrics profile for the prometheus service addon
         */
        export interface ManagedClusterAzureMonitorProfileMetricsArgs {
            /**
             * Whether to enable the Prometheus collector
             */
            enabled: pulumi.Input<boolean>;
            /**
             * Kube State Metrics for prometheus addon profile for the container service cluster
             */
            kubeStateMetrics?: pulumi.Input<v20230602preview.ManagedClusterAzureMonitorProfileKubeStateMetricsArgs>;
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
             * The delegated identity resources assigned to this managed cluster. This can only be set by another Azure Resource Provider, and managed cluster only accept one delegated identity resource. Internal use only.
             */
            delegatedResources?: pulumi.Input<{[key: string]: pulumi.Input<v20230602preview.DelegatedResourceArgs>}>;
            /**
             * For more information see [use managed identities in AKS](https://docs.microsoft.com/azure/aks/use-managed-identity).
             */
            type?: pulumi.Input<enums.v20230602preview.ResourceIdentityType>;
            /**
             * The keys must be ARM resource IDs in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Ingress profile for the container service cluster.
         */
        export interface ManagedClusterIngressProfileArgs {
            /**
             * Web App Routing settings for the ingress profile.
             */
            webAppRouting?: pulumi.Input<v20230602preview.ManagedClusterIngressProfileWebAppRoutingArgs>;
        }

        /**
         * Web App Routing settings for the ingress profile.
         */
        export interface ManagedClusterIngressProfileWebAppRoutingArgs {
            /**
             * Resource ID of the DNS Zone to be associated with the web app. Used only when Web App Routing is enabled.
             */
            dnsZoneResourceId?: pulumi.Input<string>;
            /**
             * Whether to enable Web App Routing.
             */
            enabled?: pulumi.Input<boolean>;
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
             * The type of the managed inbound Load Balancer BackendPool.
             */
            backendPoolType?: pulumi.Input<string | enums.v20230602preview.BackendPoolType>;
            /**
             * The effective outbound IP resources of the cluster load balancer.
             */
            effectiveOutboundIPs?: pulumi.Input<pulumi.Input<v20230602preview.ResourceReferenceArgs>[]>;
            /**
             * Enable multiple standard load balancers per AKS cluster or not.
             */
            enableMultipleStandardLoadBalancers?: pulumi.Input<boolean>;
            /**
             * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 30 minutes.
             */
            idleTimeoutInMinutes?: pulumi.Input<number>;
            /**
             * Desired managed outbound IPs for the cluster load balancer.
             */
            managedOutboundIPs?: pulumi.Input<v20230602preview.ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs>;
            /**
             * Desired outbound IP Prefix resources for the cluster load balancer.
             */
            outboundIPPrefixes?: pulumi.Input<v20230602preview.ManagedClusterLoadBalancerProfileOutboundIPPrefixesArgs>;
            /**
             * Desired outbound IP resources for the cluster load balancer.
             */
            outboundIPs?: pulumi.Input<v20230602preview.ManagedClusterLoadBalancerProfileOutboundIPsArgs>;
        }
        /**
         * managedClusterLoadBalancerProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileArgs
         */
        export function managedClusterLoadBalancerProfileArgsProvideDefaults(val: ManagedClusterLoadBalancerProfileArgs): ManagedClusterLoadBalancerProfileArgs {
            return {
                ...val,
                allocatedOutboundPorts: (val.allocatedOutboundPorts) ?? 0,
                backendPoolType: (val.backendPoolType) ?? "NodeIPConfiguration",
                idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 30,
                managedOutboundIPs: (val.managedOutboundIPs ? pulumi.output(val.managedOutboundIPs).apply(v20230602preview.managedClusterLoadBalancerProfileManagedOutboundIPsArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Desired managed outbound IPs for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs {
            /**
             * The desired number of IPv4 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1. 
             */
            count?: pulumi.Input<number>;
            /**
             * The desired number of IPv6 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 0 for single-stack and 1 for dual-stack. 
             */
            countIPv6?: pulumi.Input<number>;
        }
        /**
         * managedClusterLoadBalancerProfileManagedOutboundIPsArgsProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs
         */
        export function managedClusterLoadBalancerProfileManagedOutboundIPsArgsProvideDefaults(val: ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs): ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs {
            return {
                ...val,
                count: (val.count) ?? 1,
                countIPv6: (val.countIPv6) ?? 0,
            };
        }

        /**
         * Desired outbound IP Prefix resources for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileOutboundIPPrefixesArgs {
            /**
             * A list of public IP prefix resources.
             */
            publicIPPrefixes?: pulumi.Input<pulumi.Input<v20230602preview.ResourceReferenceArgs>[]>;
        }

        /**
         * Desired outbound IP resources for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileOutboundIPsArgs {
            /**
             * A list of public IP resources.
             */
            publicIPs?: pulumi.Input<pulumi.Input<v20230602preview.ResourceReferenceArgs>[]>;
        }

        /**
         * Profile of the managed outbound IP resources of the managed cluster.
         */
        export interface ManagedClusterManagedOutboundIPProfileArgs {
            /**
             * The desired number of outbound IPs created/managed by Azure. Allowed values must be in the range of 1 to 16 (inclusive). The default value is 1. 
             */
            count?: pulumi.Input<number>;
        }
        /**
         * managedClusterManagedOutboundIPProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterManagedOutboundIPProfileArgs
         */
        export function managedClusterManagedOutboundIPProfileArgsProvideDefaults(val: ManagedClusterManagedOutboundIPProfileArgs): ManagedClusterManagedOutboundIPProfileArgs {
            return {
                ...val,
                count: (val.count) ?? 1,
            };
        }

        /**
         * Profile of the managed cluster NAT gateway.
         */
        export interface ManagedClusterNATGatewayProfileArgs {
            /**
             * The effective outbound IP resources of the cluster NAT gateway.
             */
            effectiveOutboundIPs?: pulumi.Input<pulumi.Input<v20230602preview.ResourceReferenceArgs>[]>;
            /**
             * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 4 minutes.
             */
            idleTimeoutInMinutes?: pulumi.Input<number>;
            /**
             * Profile of the managed outbound IP resources of the cluster NAT gateway.
             */
            managedOutboundIPProfile?: pulumi.Input<v20230602preview.ManagedClusterManagedOutboundIPProfileArgs>;
        }
        /**
         * managedClusterNATGatewayProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterNATGatewayProfileArgs
         */
        export function managedClusterNATGatewayProfileArgsProvideDefaults(val: ManagedClusterNATGatewayProfileArgs): ManagedClusterNATGatewayProfileArgs {
            return {
                ...val,
                idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 4,
                managedOutboundIPProfile: (val.managedOutboundIPProfile ? pulumi.output(val.managedOutboundIPProfile).apply(v20230602preview.managedClusterManagedOutboundIPProfileArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Node resource group lockdown profile for a managed cluster.
         */
        export interface ManagedClusterNodeResourceGroupProfileArgs {
            /**
             * The restriction level applied to the cluster's node resource group
             */
            restrictionLevel?: pulumi.Input<string | enums.v20230602preview.RestrictionLevel>;
        }

        /**
         * The OIDC issuer profile of the Managed Cluster.
         */
        export interface ManagedClusterOIDCIssuerProfileArgs {
            /**
             * Whether the OIDC issuer is enabled.
             */
            enabled?: pulumi.Input<boolean>;
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
            identity: pulumi.Input<v20230602preview.UserAssignedIdentityArgs>;
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
            userAssignedIdentities?: pulumi.Input<pulumi.Input<v20230602preview.ManagedClusterPodIdentityArgs>[]>;
            /**
             * The pod identity exceptions to allow.
             */
            userAssignedIdentityExceptions?: pulumi.Input<pulumi.Input<v20230602preview.ManagedClusterPodIdentityExceptionArgs>[]>;
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
            expander?: pulumi.Input<string | enums.v20230602preview.Expander>;
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

        /**
         * The SKU of a Managed Cluster.
         */
        export interface ManagedClusterSKUArgs {
            /**
             * The name of a managed cluster SKU.
             */
            name?: pulumi.Input<string | enums.v20230602preview.ManagedClusterSKUName>;
            /**
             * If not specified, the default is 'Free'. See [AKS Pricing Tier](https://learn.microsoft.com/azure/aks/free-standard-pricing-tiers) for more details.
             */
            tier?: pulumi.Input<string | enums.v20230602preview.ManagedClusterSKUTier>;
        }

        /**
         * Security profile for the container service cluster.
         */
        export interface ManagedClusterSecurityProfileArgs {
            /**
             * Azure Key Vault [key management service](https://kubernetes.io/docs/tasks/administer-cluster/kms-provider/) settings for the security profile.
             */
            azureKeyVaultKms?: pulumi.Input<v20230602preview.AzureKeyVaultKmsArgs>;
            /**
             * A list of up to 10 base64 encoded CAs that will be added to the trust store on nodes with the Custom CA Trust feature enabled. For more information see [Custom CA Trust Certificates](https://learn.microsoft.com/en-us/azure/aks/custom-certificate-authority)
             */
            customCATrustCertificates?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Microsoft Defender settings for the security profile.
             */
            defender?: pulumi.Input<v20230602preview.ManagedClusterSecurityProfileDefenderArgs>;
            /**
             * Image Cleaner settings for the security profile.
             */
            imageCleaner?: pulumi.Input<v20230602preview.ManagedClusterSecurityProfileImageCleanerArgs>;
            /**
             * Image integrity is a feature that works with Azure Policy to verify image integrity by signature. This will not have any effect unless Azure Policy is applied to enforce image signatures. See https://aka.ms/aks/image-integrity for how to use this feature via policy.
             */
            imageIntegrity?: pulumi.Input<v20230602preview.ManagedClusterSecurityProfileImageIntegrityArgs>;
            /**
             * [Node Restriction](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#noderestriction) settings for the security profile.
             */
            nodeRestriction?: pulumi.Input<v20230602preview.ManagedClusterSecurityProfileNodeRestrictionArgs>;
            /**
             * Workload identity settings for the security profile. Workload identity enables Kubernetes applications to access Azure cloud resources securely with Azure AD. See https://aka.ms/aks/wi for more details.
             */
            workloadIdentity?: pulumi.Input<v20230602preview.ManagedClusterSecurityProfileWorkloadIdentityArgs>;
        }
        /**
         * managedClusterSecurityProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterSecurityProfileArgs
         */
        export function managedClusterSecurityProfileArgsProvideDefaults(val: ManagedClusterSecurityProfileArgs): ManagedClusterSecurityProfileArgs {
            return {
                ...val,
                azureKeyVaultKms: (val.azureKeyVaultKms ? pulumi.output(val.azureKeyVaultKms).apply(v20230602preview.azureKeyVaultKmsArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Microsoft Defender settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileDefenderArgs {
            /**
             * Resource ID of the Log Analytics workspace to be associated with Microsoft Defender. When Microsoft Defender is enabled, this field is required and must be a valid workspace resource ID. When Microsoft Defender is disabled, leave the field empty.
             */
            logAnalyticsWorkspaceResourceId?: pulumi.Input<string>;
            /**
             * Microsoft Defender threat detection for Cloud settings for the security profile.
             */
            securityMonitoring?: pulumi.Input<v20230602preview.ManagedClusterSecurityProfileDefenderSecurityMonitoringArgs>;
        }

        /**
         * Microsoft Defender settings for the security profile threat detection.
         */
        export interface ManagedClusterSecurityProfileDefenderSecurityMonitoringArgs {
            /**
             * Whether to enable Defender threat detection
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * Image Cleaner removes unused images from nodes, freeing up disk space and helping to reduce attack surface area. Here are settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileImageCleanerArgs {
            /**
             * Whether to enable Image Cleaner on AKS cluster.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Image Cleaner scanning interval in hours.
             */
            intervalHours?: pulumi.Input<number>;
        }

        /**
         * Image integrity related settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileImageIntegrityArgs {
            /**
             * Whether to enable image integrity. The default value is false.
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * Node Restriction settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileNodeRestrictionArgs {
            /**
             * Whether to enable Node Restriction
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * Workload identity settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileWorkloadIdentityArgs {
            /**
             * Whether to enable workload identity.
             */
            enabled?: pulumi.Input<boolean>;
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
         * Storage profile for the container service cluster.
         */
        export interface ManagedClusterStorageProfileArgs {
            /**
             * AzureBlob CSI Driver settings for the storage profile.
             */
            blobCSIDriver?: pulumi.Input<v20230602preview.ManagedClusterStorageProfileBlobCSIDriverArgs>;
            /**
             * AzureDisk CSI Driver settings for the storage profile.
             */
            diskCSIDriver?: pulumi.Input<v20230602preview.ManagedClusterStorageProfileDiskCSIDriverArgs>;
            /**
             * AzureFile CSI Driver settings for the storage profile.
             */
            fileCSIDriver?: pulumi.Input<v20230602preview.ManagedClusterStorageProfileFileCSIDriverArgs>;
            /**
             * Snapshot Controller settings for the storage profile.
             */
            snapshotController?: pulumi.Input<v20230602preview.ManagedClusterStorageProfileSnapshotControllerArgs>;
        }

        /**
         * AzureBlob CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileBlobCSIDriverArgs {
            /**
             * Whether to enable AzureBlob CSI Driver. The default value is false.
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * AzureDisk CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileDiskCSIDriverArgs {
            /**
             * Whether to enable AzureDisk CSI Driver. The default value is true.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * The version of AzureDisk CSI Driver. The default value is v1.
             */
            version?: pulumi.Input<string>;
        }

        /**
         * AzureFile CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileFileCSIDriverArgs {
            /**
             * Whether to enable AzureFile CSI Driver. The default value is true.
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * Snapshot Controller settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileSnapshotControllerArgs {
            /**
             * Whether to enable Snapshot Controller. The default value is true.
             */
            enabled?: pulumi.Input<boolean>;
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
             * The Windows gMSA Profile in the Managed Cluster.
             */
            gmsaProfile?: pulumi.Input<v20230602preview.WindowsGmsaProfileArgs>;
            /**
             * The license type to use for Windows VMs. See [Azure Hybrid User Benefits](https://azure.microsoft.com/pricing/hybrid-benefit/faq/) for more details.
             */
            licenseType?: pulumi.Input<string | enums.v20230602preview.LicenseType>;
        }

        /**
         * Workload Auto-scaler profile for the managed cluster.
         */
        export interface ManagedClusterWorkloadAutoScalerProfileArgs {
            /**
             * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
             */
            keda?: pulumi.Input<v20230602preview.ManagedClusterWorkloadAutoScalerProfileKedaArgs>;
            verticalPodAutoscaler?: pulumi.Input<v20230602preview.ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs>;
        }
        /**
         * managedClusterWorkloadAutoScalerProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterWorkloadAutoScalerProfileArgs
         */
        export function managedClusterWorkloadAutoScalerProfileArgsProvideDefaults(val: ManagedClusterWorkloadAutoScalerProfileArgs): ManagedClusterWorkloadAutoScalerProfileArgs {
            return {
                ...val,
                verticalPodAutoscaler: (val.verticalPodAutoscaler ? pulumi.output(val.verticalPodAutoscaler).apply(v20230602preview.managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgsProvideDefaults) : undefined),
            };
        }

        /**
         * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
         */
        export interface ManagedClusterWorkloadAutoScalerProfileKedaArgs {
            /**
             * Whether to enable KEDA.
             */
            enabled: pulumi.Input<boolean>;
        }

        export interface ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs {
            /**
             * Controls which resource value autoscaler will change. Default value is RequestsAndLimits.
             */
            controlledValues: pulumi.Input<string | enums.v20230602preview.ControlledValues>;
            /**
             * Whether to enable VPA. Default value is false.
             */
            enabled: pulumi.Input<boolean>;
            /**
             * Each update mode level is a superset of the lower levels. Off<Initial<Recreate<=Auto. For example: if UpdateMode is Initial, it means VPA sets the recommended resources in the VerticalPodAutoscaler Custom Resource (from UpdateMode Off) and also assigns resources on pod creation (from Initial). The default value is Off.
             */
            updateMode: pulumi.Input<string | enums.v20230602preview.UpdateMode>;
        }
        /**
         * managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgsProvideDefaults sets the appropriate defaults for ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs
         */
        export function managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgsProvideDefaults(val: ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs): ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs {
            return {
                ...val,
                controlledValues: (val.controlledValues) ?? "RequestsAndLimits",
                enabled: (val.enabled) ?? false,
                updateMode: (val.updateMode) ?? "Off",
            };
        }

        /**
         * This addon can be used to configure network monitoring and generate network monitoring data in Prometheus format
         */
        export interface NetworkMonitoringArgs {
            /**
             * Enable or disable the network monitoring plugin on the cluster
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * The port range.
         */
        export interface PortRangeArgs {
            /**
             * The maximum port that is included in the range. It should be ranged from 1 to 65535, and be greater than or equal to portStart.
             */
            portEnd?: pulumi.Input<number>;
            /**
             * The minimum port that is included in the range. It should be ranged from 1 to 65535, and be less than or equal to portEnd.
             */
            portStart?: pulumi.Input<number>;
            /**
             * The network protocol of the port.
             */
            protocol?: pulumi.Input<string | enums.v20230602preview.Protocol>;
        }

        /**
         * Describes the Power State of the cluster
         */
        export interface PowerStateArgs {
            /**
             * Tells whether the cluster is Running or Stopped
             */
            code?: pulumi.Input<string | enums.v20230602preview.Code>;
        }

        /**
         * Private endpoint which a connection belongs to.
         */
        export interface PrivateEndpointArgs {
            /**
             * The resource ID of the private endpoint
             */
            id?: pulumi.Input<string>;
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
         * The state of a private link service connection.
         */
        export interface PrivateLinkServiceConnectionStateArgs {
            /**
             * The private link service connection description.
             */
            description?: pulumi.Input<string>;
            /**
             * The private link service connection status.
             */
            status?: pulumi.Input<string | enums.v20230602preview.ConnectionStatus>;
        }

        /**
         * For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'.
         */
        export interface RelativeMonthlyScheduleArgs {
            /**
             * Specifies on which day of the week the maintenance occurs.
             */
            dayOfWeek: pulumi.Input<string | enums.v20230602preview.WeekDay>;
            /**
             * Specifies the number of months between each set of occurrences.
             */
            intervalMonths: pulumi.Input<number>;
            /**
             * Specifies on which instance of the allowed days specified in daysOfWeek the maintenance occurs.
             */
            weekIndex: pulumi.Input<string | enums.v20230602preview.Type>;
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
         * One and only one of the schedule types should be specified. Choose either 'daily', 'weekly', 'absoluteMonthly' or 'relativeMonthly' for your maintenance schedule.
         */
        export interface ScheduleArgs {
            /**
             * For schedules like: 'recur every month on the 15th' or 'recur every 3 months on the 20th'.
             */
            absoluteMonthly?: pulumi.Input<v20230602preview.AbsoluteMonthlyScheduleArgs>;
            /**
             * For schedules like: 'recur every day' or 'recur every 3 days'.
             */
            daily?: pulumi.Input<v20230602preview.DailyScheduleArgs>;
            /**
             * For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'.
             */
            relativeMonthly?: pulumi.Input<v20230602preview.RelativeMonthlyScheduleArgs>;
            /**
             * For schedules like: 'recur every Monday' or 'recur every 3 weeks on Wednesday'.
             */
            weekly?: pulumi.Input<v20230602preview.WeeklyScheduleArgs>;
        }

        /**
         * Service mesh profile for a managed cluster.
         */
        export interface ServiceMeshProfileArgs {
            /**
             * Istio service mesh configuration.
             */
            istio?: pulumi.Input<v20230602preview.IstioServiceMeshArgs>;
            /**
             * Mode of the service mesh.
             */
            mode: pulumi.Input<string | enums.v20230602preview.ServiceMeshMode>;
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
         * Time in a week.
         */
        export interface TimeInWeekArgs {
            /**
             * The day of the week.
             */
            day?: pulumi.Input<string | enums.v20230602preview.WeekDay>;
            /**
             * Each integer hour represents a time range beginning at 0m after the hour ending at the next hour (non-inclusive). 0 corresponds to 00:00 UTC, 23 corresponds to 23:00 UTC. Specifying [0, 1] means the 00:00 - 02:00 UTC time range.
             */
            hourSlots?: pulumi.Input<pulumi.Input<number>[]>;
        }

        /**
         * For example, between 2021-05-25T13:00:00Z and 2021-05-25T14:00:00Z.
         */
        export interface TimeSpanArgs {
            /**
             * The end of a time span
             */
            end?: pulumi.Input<string>;
            /**
             * The start of a time span
             */
            start?: pulumi.Input<string>;
        }

        /**
         * Settings for overrides when upgrading a cluster.
         */
        export interface UpgradeOverrideSettingsArgs {
            /**
             * List of upgrade overrides when upgrading a cluster's control plane.
             */
            controlPlaneOverrides?: pulumi.Input<pulumi.Input<string | enums.v20230602preview.ControlPlaneUpgradeOverride>[]>;
            /**
             * Until when the overrides are effective. Note that this only matches the start time of an upgrade, and the effectiveness won't change once an upgrade starts even if the `until` expires as upgrade proceeds. This field is not set by default. It must be set for the overrides to take effect.
             */
            until?: pulumi.Input<string>;
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

        /**
         * For schedules like: 'recur every Monday' or 'recur every 3 weeks on Wednesday'.
         */
        export interface WeeklyScheduleArgs {
            /**
             * Specifies on which day of the week the maintenance occurs.
             */
            dayOfWeek: pulumi.Input<string | enums.v20230602preview.WeekDay>;
            /**
             * Specifies the number of weeks between each set of occurrences.
             */
            intervalWeeks: pulumi.Input<number>;
        }

        /**
         * Windows gMSA Profile in the managed cluster.
         */
        export interface WindowsGmsaProfileArgs {
            /**
             * Specifies the DNS server for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
             */
            dnsServer?: pulumi.Input<string>;
            /**
             * Specifies whether to enable Windows gMSA in the managed cluster.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Specifies the root domain name for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
             */
            rootDomainName?: pulumi.Input<string>;
        }

    }

    export namespace v20230615preview {
        /**
         * Access profile for the Fleet hub API server.
         */
        export interface APIServerAccessProfileArgs {
            /**
             * Whether to create the Fleet hub as a private cluster or not.
             */
            enablePrivateCluster?: pulumi.Input<boolean>;
            /**
             * Whether to enable apiserver vnet integration for the Fleet hub or not.
             */
            enableVnetIntegration?: pulumi.Input<boolean>;
            /**
             * The subnet to be used when apiserver vnet integration is enabled. It is required when creating a new Fleet with BYO vnet.
             */
            subnetId?: pulumi.Input<string>;
        }

        /**
         * Agent profile for the Fleet hub.
         */
        export interface AgentProfileArgs {
            /**
             * The ID of the subnet which the Fleet hub node will join on startup. If this is not specified, a vnet and subnet will be generated and used.
             */
            subnetId?: pulumi.Input<string>;
        }

        /**
         * The FleetHubProfile configures the fleet hub.
         */
        export interface FleetHubProfileArgs {
            /**
             * The agent profile for the Fleet hub.
             */
            agentProfile?: pulumi.Input<v20230615preview.AgentProfileArgs>;
            /**
             * The access profile for the Fleet hub API server.
             */
            apiServerAccessProfile?: pulumi.Input<v20230615preview.APIServerAccessProfileArgs>;
            /**
             * DNS prefix used to create the FQDN for the Fleet hub.
             */
            dnsPrefix?: pulumi.Input<string>;
        }

        /**
         * The update to be applied to the ManagedClusters.
         */
        export interface ManagedClusterUpdateArgs {
            /**
             * The node image upgrade to be applied to the target nodes in update run.
             */
            nodeImageSelection?: pulumi.Input<v20230615preview.NodeImageSelectionArgs>;
            /**
             * The upgrade to apply to the ManagedClusters.
             */
            upgrade: pulumi.Input<v20230615preview.ManagedClusterUpgradeSpecArgs>;
        }

        /**
         * The upgrade to apply to a ManagedCluster.
         */
        export interface ManagedClusterUpgradeSpecArgs {
            /**
             * The Kubernetes version to upgrade the member clusters to.
             */
            kubernetesVersion?: pulumi.Input<string>;
            /**
             * The upgrade type.
             * Full requires the KubernetesVersion property to be set.
             * NodeImageOnly requires the KubernetesVersion property not to be set.
             */
            type: pulumi.Input<string | enums.v20230615preview.ManagedClusterUpgradeType>;
        }

        /**
         * Managed service identity (system assigned and/or user assigned identities)
         */
        export interface ManagedServiceIdentityArgs {
            /**
             * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
             */
            type: pulumi.Input<string | enums.v20230615preview.ManagedServiceIdentityType>;
            /**
             * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
             */
            userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * The node image upgrade to be applied to the target nodes in update run.
         */
        export interface NodeImageSelectionArgs {
            /**
             * The node image upgrade type.
             */
            type: pulumi.Input<string | enums.v20230615preview.NodeImageSelectionType>;
        }

        /**
         * A group to be updated.
         */
        export interface UpdateGroupArgs {
            /**
             * The name of the Fleet member group to update. 
             * It should match the name of an existing FleetMember group.
             * A group can only appear once across all UpdateStages in the UpdateRun.
             */
            name: pulumi.Input<string>;
        }

        /**
         * The UpdateRunStrategy configures the sequence of Stages and Groups in which the clusters will be updated.
         */
        export interface UpdateRunStrategyArgs {
            /**
             * The list of stages that compose this update run.
             */
            stages: pulumi.Input<pulumi.Input<v20230615preview.UpdateStageArgs>[]>;
        }

        /**
         * Contains the groups to be updated by an UpdateRun.
         * Update order:
         * - Sequential between stages: Stages run sequentially. The previous stage must complete before the next one starts.
         * - Parallel within a stage: Groups within a stage run in parallel.
         * - Sequential within a group: Clusters within a group are updated sequentially.
         */
        export interface UpdateStageArgs {
            /**
             * The time in seconds to wait at the end of this stage before starting the next one. Defaults to 0 seconds if unspecified.
             */
            afterStageWaitInSeconds?: pulumi.Input<number>;
            /**
             * A list of group names that compose the stage.
             * The groups will be updated in parallel. Each group name can only appear once in the UpdateRun.
             */
            groups?: pulumi.Input<pulumi.Input<v20230615preview.UpdateGroupArgs>[]>;
            /**
             * The name of the stage. Must be unique within the UpdateRun.
             */
            name: pulumi.Input<string>;
        }

    }

    export namespace v20230701 {
        /**
         * For schedules like: 'recur every month on the 15th' or 'recur every 3 months on the 20th'.
         */
        export interface AbsoluteMonthlyScheduleArgs {
            /**
             * The date of the month.
             */
            dayOfMonth: pulumi.Input<number>;
            /**
             * Specifies the number of months between each set of occurrences.
             */
            intervalMonths: pulumi.Input<number>;
        }

        /**
         * Settings for upgrading an agentpool
         */
        export interface AgentPoolUpgradeSettingsArgs {
            /**
             * The amount of time (in minutes) to wait on eviction of pods and graceful termination per node. This eviction wait time honors waiting on pod disruption budgets. If this time is exceeded, the upgrade fails. If not specified, the default is 30 minutes.
             */
            drainTimeoutInMinutes?: pulumi.Input<number>;
            /**
             * This can either be set to an integer (e.g. '5') or a percentage (e.g. '50%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified, the default is 1. For more information, including best practices, see: https://docs.microsoft.com/azure/aks/upgrade-cluster#customize-node-surge-upgrade
             */
            maxSurge?: pulumi.Input<string>;
        }

        /**
         * Azure Key Vault key management service settings for the security profile.
         */
        export interface AzureKeyVaultKmsArgs {
            /**
             * Whether to enable Azure Key Vault key management service. The default is false.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Identifier of Azure Key Vault key. See [key identifier format](https://docs.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates#vault-name-and-object-name) for more details. When Azure Key Vault key management service is enabled, this field is required and must be a valid key identifier. When Azure Key Vault key management service is disabled, leave the field empty.
             */
            keyId?: pulumi.Input<string>;
            /**
             * Network access of key vault. The possible values are `Public` and `Private`. `Public` means the key vault allows public access from all networks. `Private` means the key vault disables public access and enables private link. The default value is `Public`.
             */
            keyVaultNetworkAccess?: pulumi.Input<string | enums.v20230701.KeyVaultNetworkAccessTypes>;
            /**
             * Resource ID of key vault. When keyVaultNetworkAccess is `Private`, this field is required and must be a valid resource ID. When keyVaultNetworkAccess is `Public`, leave the field empty.
             */
            keyVaultResourceId?: pulumi.Input<string>;
        }
        /**
         * azureKeyVaultKmsArgsProvideDefaults sets the appropriate defaults for AzureKeyVaultKmsArgs
         */
        export function azureKeyVaultKmsArgsProvideDefaults(val: AzureKeyVaultKmsArgs): AzureKeyVaultKmsArgs {
            return {
                ...val,
                keyVaultNetworkAccess: (val.keyVaultNetworkAccess) ?? "Public",
            };
        }

        /**
         * Settings for upgrading a cluster.
         */
        export interface ClusterUpgradeSettingsArgs {
            /**
             * Settings for overrides.
             */
            overrideSettings?: pulumi.Input<v20230701.UpgradeOverrideSettingsArgs>;
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
            ssh: pulumi.Input<v20230701.ContainerServiceSshConfigurationArgs>;
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
             * IP families are used to determine single-stack or dual-stack clusters. For single-stack, the expected value is IPv4. For dual-stack, the expected values are IPv4 and IPv6.
             */
            ipFamilies?: pulumi.Input<pulumi.Input<string | enums.v20230701.IpFamily>[]>;
            /**
             * Profile of the cluster load balancer.
             */
            loadBalancerProfile?: pulumi.Input<v20230701.ManagedClusterLoadBalancerProfileArgs>;
            /**
             * The default is 'standard'. See [Azure Load Balancer SKUs](https://docs.microsoft.com/azure/load-balancer/skus) for more information about the differences between load balancer SKUs.
             */
            loadBalancerSku?: pulumi.Input<string | enums.v20230701.LoadBalancerSku>;
            /**
             * Profile of the cluster NAT gateway.
             */
            natGatewayProfile?: pulumi.Input<v20230701.ManagedClusterNATGatewayProfileArgs>;
            /**
             * Network dataplane used in the Kubernetes cluster.
             */
            networkDataplane?: pulumi.Input<string | enums.v20230701.NetworkDataplane>;
            /**
             * This cannot be specified if networkPlugin is anything other than 'azure'.
             */
            networkMode?: pulumi.Input<string | enums.v20230701.NetworkMode>;
            /**
             * Network plugin used for building the Kubernetes network.
             */
            networkPlugin?: pulumi.Input<string | enums.v20230701.NetworkPlugin>;
            /**
             * The mode the network plugin should use.
             */
            networkPluginMode?: pulumi.Input<string | enums.v20230701.NetworkPluginMode>;
            /**
             * Network policy used for building the Kubernetes network.
             */
            networkPolicy?: pulumi.Input<string | enums.v20230701.NetworkPolicy>;
            /**
             * This can only be set at cluster creation time and cannot be changed later. For more information see [egress outbound type](https://docs.microsoft.com/azure/aks/egress-outboundtype).
             */
            outboundType?: pulumi.Input<string | enums.v20230701.OutboundType>;
            /**
             * A CIDR notation IP range from which to assign pod IPs when kubenet is used.
             */
            podCidr?: pulumi.Input<string>;
            /**
             * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
             */
            podCidrs?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
             */
            serviceCidr?: pulumi.Input<string>;
            /**
             * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking. They must not overlap with any Subnet IP ranges.
             */
            serviceCidrs?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * containerServiceNetworkProfileArgsProvideDefaults sets the appropriate defaults for ContainerServiceNetworkProfileArgs
         */
        export function containerServiceNetworkProfileArgsProvideDefaults(val: ContainerServiceNetworkProfileArgs): ContainerServiceNetworkProfileArgs {
            return {
                ...val,
                dnsServiceIP: (val.dnsServiceIP) ?? "10.0.0.10",
                loadBalancerProfile: (val.loadBalancerProfile ? pulumi.output(val.loadBalancerProfile).apply(v20230701.managedClusterLoadBalancerProfileArgsProvideDefaults) : undefined),
                natGatewayProfile: (val.natGatewayProfile ? pulumi.output(val.natGatewayProfile).apply(v20230701.managedClusterNATGatewayProfileArgsProvideDefaults) : undefined),
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
            publicKeys: pulumi.Input<pulumi.Input<v20230701.ContainerServiceSshPublicKeyArgs>[]>;
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
         * Data used when creating a target resource from a source resource.
         */
        export interface CreationDataArgs {
            /**
             * This is the ARM ID of the source object to be used to create the target object.
             */
            sourceResourceId?: pulumi.Input<string>;
        }

        /**
         * For schedules like: 'recur every day' or 'recur every 3 days'.
         */
        export interface DailyScheduleArgs {
            /**
             * Specifies the number of days between each set of occurrences.
             */
            intervalDays: pulumi.Input<number>;
        }

        /**
         * For example, between '2022-12-23' and '2023-01-05'.
         */
        export interface DateSpanArgs {
            /**
             * The end date of the date span.
             */
            end: pulumi.Input<string>;
            /**
             * The start date of the date span.
             */
            start: pulumi.Input<string>;
        }

        /**
         * Delegated resource properties - internal use only.
         */
        export interface DelegatedResourceArgs {
            /**
             * The source resource location - internal use only.
             */
            location?: pulumi.Input<string>;
            /**
             * The delegation id of the referral delegation (optional) - internal use only.
             */
            referralResource?: pulumi.Input<string>;
            /**
             * The ARM resource id of the delegated resource - internal use only.
             */
            resourceId?: pulumi.Input<string>;
            /**
             * The tenant id of the delegated resource - internal use only.
             */
            tenantId?: pulumi.Input<string>;
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
            type?: pulumi.Input<string | enums.v20230701.ExtendedLocationTypes>;
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
            sysctls?: pulumi.Input<v20230701.SysctlConfigArgs>;
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
         * Maintenance window used to configure scheduled auto-upgrade for a Managed Cluster.
         */
        export interface MaintenanceWindowArgs {
            /**
             * Length of maintenance window range from 4 to 24 hours.
             */
            durationHours: pulumi.Input<number>;
            /**
             * Date ranges on which upgrade is not allowed. 'utcOffset' applies to this field. For example, with 'utcOffset: +02:00' and 'dateSpan' being '2022-12-23' to '2023-01-03', maintenance will be blocked from '2022-12-22 22:00' to '2023-01-03 22:00' in UTC time.
             */
            notAllowedDates?: pulumi.Input<pulumi.Input<v20230701.DateSpanArgs>[]>;
            /**
             * Recurrence schedule for the maintenance window.
             */
            schedule: pulumi.Input<v20230701.ScheduleArgs>;
            /**
             * The date the maintenance window activates. If the current date is before this date, the maintenance window is inactive and will not be used for upgrades. If not specified, the maintenance window will be active right away.
             */
            startDate?: pulumi.Input<string>;
            /**
             * The start time of the maintenance window. Accepted values are from '00:00' to '23:59'. 'utcOffset' applies to this field. For example: '02:00' with 'utcOffset: +02:00' means UTC time '00:00'.
             */
            startTime: pulumi.Input<string>;
            /**
             * The UTC offset in format +/-HH:mm. For example, '+05:30' for IST and '-07:00' for PST. If not specified, the default is '+00:00'.
             */
            utcOffset?: pulumi.Input<string>;
        }
        /**
         * maintenanceWindowArgsProvideDefaults sets the appropriate defaults for MaintenanceWindowArgs
         */
        export function maintenanceWindowArgsProvideDefaults(val: MaintenanceWindowArgs): MaintenanceWindowArgs {
            return {
                ...val,
                durationHours: (val.durationHours) ?? 24,
            };
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
             * (DEPRECATED) The client AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
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
             * (DEPRECATED) The server AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
             */
            serverAppID?: pulumi.Input<string>;
            /**
             * (DEPRECATED) The server AAD application secret. Learn more at https://aka.ms/aks/aad-legacy.
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
             * Whether to disable run command for the cluster or not.
             */
            disableRunCommand?: pulumi.Input<boolean>;
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
             * CreationData to be used to specify the source Snapshot ID if the node pool will be created/upgraded using a snapshot.
             */
            creationData?: pulumi.Input<v20230701.CreationDataArgs>;
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
            gpuInstanceProfile?: pulumi.Input<string | enums.v20230701.GPUInstanceProfile>;
            /**
             * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}. For more information see [Azure dedicated hosts](https://docs.microsoft.com/azure/virtual-machines/dedicated-hosts).
             */
            hostGroupID?: pulumi.Input<string>;
            /**
             * The Kubelet configuration on the agent pool nodes.
             */
            kubeletConfig?: pulumi.Input<v20230701.KubeletConfigArgs>;
            /**
             * Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage.
             */
            kubeletDiskType?: pulumi.Input<string | enums.v20230701.KubeletDiskType>;
            /**
             * The OS configuration of Linux agent nodes.
             */
            linuxOSConfig?: pulumi.Input<v20230701.LinuxOSConfigArgs>;
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
            mode?: pulumi.Input<string | enums.v20230701.AgentPoolMode>;
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
             * Both patch version <major.minor.patch> (e.g. 1.20.13) and <major.minor> (e.g. 1.20) are supported. When <major.minor> is specified, the latest supported GA patch version is chosen automatically. Updating the cluster with the same <major.minor> once it has been created (e.g. 1.14.x -> 1.14) will not trigger an upgrade, even if a newer patch version is available. As a best practice, you should upgrade all node pools in an AKS cluster to the same Kubernetes version. The node pool version must have the same major version as the control plane. The node pool minor version must be within two minor versions of the control plane version. The node pool version cannot be greater than the control plane version. For more information see [upgrading a node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#upgrade-a-node-pool).
             */
            orchestratorVersion?: pulumi.Input<string>;
            /**
             * OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
             */
            osDiskSizeGB?: pulumi.Input<number>;
            /**
             * The default is 'Ephemeral' if the VM supports it and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation. For more information see [Ephemeral OS](https://docs.microsoft.com/azure/aks/cluster-configuration#ephemeral-os).
             */
            osDiskType?: pulumi.Input<string | enums.v20230701.OSDiskType>;
            /**
             * Specifies the OS SKU used by the agent pool. The default is Ubuntu if OSType is Linux. The default is Windows2019 when Kubernetes <= 1.24 or Windows2022 when Kubernetes >= 1.25 if OSType is Windows.
             */
            osSKU?: pulumi.Input<string | enums.v20230701.OSSKU>;
            /**
             * The operating system type. The default is Linux.
             */
            osType?: pulumi.Input<string | enums.v20230701.OSType>;
            /**
             * If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
             */
            podSubnetID?: pulumi.Input<string>;
            /**
             * When an Agent Pool is first created it is initially Running. The Agent Pool can be stopped by setting this field to Stopped. A stopped Agent Pool stops all of its VMs and does not accrue billing charges. An Agent Pool can only be stopped if it is Running and provisioning state is Succeeded
             */
            powerState?: pulumi.Input<v20230701.PowerStateArgs>;
            /**
             * The ID for Proximity Placement Group.
             */
            proximityPlacementGroupID?: pulumi.Input<string>;
            /**
             * This also effects the cluster autoscaler behavior. If not specified, it defaults to Delete.
             */
            scaleDownMode?: pulumi.Input<string | enums.v20230701.ScaleDownMode>;
            /**
             * This cannot be specified unless the scaleSetPriority is 'Spot'. If not specified, the default is 'Delete'.
             */
            scaleSetEvictionPolicy?: pulumi.Input<string | enums.v20230701.ScaleSetEvictionPolicy>;
            /**
             * The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'.
             */
            scaleSetPriority?: pulumi.Input<string | enums.v20230701.ScaleSetPriority>;
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
            type?: pulumi.Input<string | enums.v20230701.AgentPoolType>;
            /**
             * Settings for upgrading the agentpool
             */
            upgradeSettings?: pulumi.Input<v20230701.AgentPoolUpgradeSettingsArgs>;
            /**
             * VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. For more details on restricted VM sizes, see: https://docs.microsoft.com/azure/aks/quotas-skus-regions
             */
            vmSize?: pulumi.Input<string>;
            /**
             * If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
             */
            vnetSubnetID?: pulumi.Input<string>;
            /**
             * Determines the type of workload a node can run.
             */
            workloadRuntime?: pulumi.Input<string | enums.v20230701.WorkloadRuntime>;
        }

        /**
         * Auto upgrade profile for a managed cluster.
         */
        export interface ManagedClusterAutoUpgradeProfileArgs {
            /**
             * Manner in which the OS on your nodes is updated. The default is NodeImage.
             */
            nodeOSUpgradeChannel?: pulumi.Input<string | enums.v20230701.NodeOSUpgradeChannel>;
            /**
             * For more information see [setting the AKS cluster auto-upgrade channel](https://docs.microsoft.com/azure/aks/upgrade-cluster#set-auto-upgrade-channel).
             */
            upgradeChannel?: pulumi.Input<string | enums.v20230701.UpgradeChannel>;
        }

        /**
         * Azure Monitor addon profiles for monitoring the managed cluster.
         */
        export interface ManagedClusterAzureMonitorProfileArgs {
            /**
             * Metrics profile for the Azure Monitor managed service for Prometheus addon. Collect out-of-the-box Kubernetes infrastructure metrics to send to an Azure Monitor Workspace and configure additional scraping for custom targets. See aka.ms/AzureManagedPrometheus for an overview.
             */
            metrics?: pulumi.Input<v20230701.ManagedClusterAzureMonitorProfileMetricsArgs>;
        }

        /**
         * Kube State Metrics profile for the Azure Managed Prometheus addon. These optional settings are for the kube-state-metrics pod that is deployed with the addon. See aka.ms/AzureManagedPrometheus-optional-parameters for details.
         */
        export interface ManagedClusterAzureMonitorProfileKubeStateMetricsArgs {
            /**
             * Comma-separated list of Kubernetes annotation keys that will be used in the resource's labels metric (Example: 'namespaces=[kubernetes.io/team,...],pods=[kubernetes.io/team],...'). By default the metric contains only resource name and namespace labels.
             */
            metricAnnotationsAllowList?: pulumi.Input<string>;
            /**
             * Comma-separated list of additional Kubernetes label keys that will be used in the resource's labels metric (Example: 'namespaces=[k8s-label-1,k8s-label-n,...],pods=[app],...'). By default the metric contains only resource name and namespace labels.
             */
            metricLabelsAllowlist?: pulumi.Input<string>;
        }

        /**
         * Metrics profile for the Azure Monitor managed service for Prometheus addon. Collect out-of-the-box Kubernetes infrastructure metrics to send to an Azure Monitor Workspace and configure additional scraping for custom targets. See aka.ms/AzureManagedPrometheus for an overview.
         */
        export interface ManagedClusterAzureMonitorProfileMetricsArgs {
            /**
             * Whether to enable or disable the Azure Managed Prometheus addon for Prometheus monitoring. See aka.ms/AzureManagedPrometheus-aks-enable for details on enabling and disabling.
             */
            enabled: pulumi.Input<boolean>;
            /**
             * Kube State Metrics profile for the Azure Managed Prometheus addon. These optional settings are for the kube-state-metrics pod that is deployed with the addon. See aka.ms/AzureManagedPrometheus-optional-parameters for details.
             */
            kubeStateMetrics?: pulumi.Input<v20230701.ManagedClusterAzureMonitorProfileKubeStateMetricsArgs>;
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
             * The delegated identity resources assigned to this managed cluster. This can only be set by another Azure Resource Provider, and managed cluster only accept one delegated identity resource. Internal use only.
             */
            delegatedResources?: pulumi.Input<{[key: string]: pulumi.Input<v20230701.DelegatedResourceArgs>}>;
            /**
             * For more information see [use managed identities in AKS](https://docs.microsoft.com/azure/aks/use-managed-identity).
             */
            type?: pulumi.Input<enums.v20230701.ResourceIdentityType>;
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
            effectiveOutboundIPs?: pulumi.Input<pulumi.Input<v20230701.ResourceReferenceArgs>[]>;
            /**
             * Enable multiple standard load balancers per AKS cluster or not.
             */
            enableMultipleStandardLoadBalancers?: pulumi.Input<boolean>;
            /**
             * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 30 minutes.
             */
            idleTimeoutInMinutes?: pulumi.Input<number>;
            /**
             * Desired managed outbound IPs for the cluster load balancer.
             */
            managedOutboundIPs?: pulumi.Input<v20230701.ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs>;
            /**
             * Desired outbound IP Prefix resources for the cluster load balancer.
             */
            outboundIPPrefixes?: pulumi.Input<v20230701.ManagedClusterLoadBalancerProfileOutboundIPPrefixesArgs>;
            /**
             * Desired outbound IP resources for the cluster load balancer.
             */
            outboundIPs?: pulumi.Input<v20230701.ManagedClusterLoadBalancerProfileOutboundIPsArgs>;
        }
        /**
         * managedClusterLoadBalancerProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileArgs
         */
        export function managedClusterLoadBalancerProfileArgsProvideDefaults(val: ManagedClusterLoadBalancerProfileArgs): ManagedClusterLoadBalancerProfileArgs {
            return {
                ...val,
                allocatedOutboundPorts: (val.allocatedOutboundPorts) ?? 0,
                idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 30,
                managedOutboundIPs: (val.managedOutboundIPs ? pulumi.output(val.managedOutboundIPs).apply(v20230701.managedClusterLoadBalancerProfileManagedOutboundIPsArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Desired managed outbound IPs for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs {
            /**
             * The desired number of IPv4 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1. 
             */
            count?: pulumi.Input<number>;
            /**
             * The desired number of IPv6 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 0 for single-stack and 1 for dual-stack. 
             */
            countIPv6?: pulumi.Input<number>;
        }
        /**
         * managedClusterLoadBalancerProfileManagedOutboundIPsArgsProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs
         */
        export function managedClusterLoadBalancerProfileManagedOutboundIPsArgsProvideDefaults(val: ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs): ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs {
            return {
                ...val,
                count: (val.count) ?? 1,
                countIPv6: (val.countIPv6) ?? 0,
            };
        }

        /**
         * Desired outbound IP Prefix resources for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileOutboundIPPrefixesArgs {
            /**
             * A list of public IP prefix resources.
             */
            publicIPPrefixes?: pulumi.Input<pulumi.Input<v20230701.ResourceReferenceArgs>[]>;
        }

        /**
         * Desired outbound IP resources for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileOutboundIPsArgs {
            /**
             * A list of public IP resources.
             */
            publicIPs?: pulumi.Input<pulumi.Input<v20230701.ResourceReferenceArgs>[]>;
        }

        /**
         * Profile of the managed outbound IP resources of the managed cluster.
         */
        export interface ManagedClusterManagedOutboundIPProfileArgs {
            /**
             * The desired number of outbound IPs created/managed by Azure. Allowed values must be in the range of 1 to 16 (inclusive). The default value is 1. 
             */
            count?: pulumi.Input<number>;
        }
        /**
         * managedClusterManagedOutboundIPProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterManagedOutboundIPProfileArgs
         */
        export function managedClusterManagedOutboundIPProfileArgsProvideDefaults(val: ManagedClusterManagedOutboundIPProfileArgs): ManagedClusterManagedOutboundIPProfileArgs {
            return {
                ...val,
                count: (val.count) ?? 1,
            };
        }

        /**
         * Profile of the managed cluster NAT gateway.
         */
        export interface ManagedClusterNATGatewayProfileArgs {
            /**
             * The effective outbound IP resources of the cluster NAT gateway.
             */
            effectiveOutboundIPs?: pulumi.Input<pulumi.Input<v20230701.ResourceReferenceArgs>[]>;
            /**
             * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 4 minutes.
             */
            idleTimeoutInMinutes?: pulumi.Input<number>;
            /**
             * Profile of the managed outbound IP resources of the cluster NAT gateway.
             */
            managedOutboundIPProfile?: pulumi.Input<v20230701.ManagedClusterManagedOutboundIPProfileArgs>;
        }
        /**
         * managedClusterNATGatewayProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterNATGatewayProfileArgs
         */
        export function managedClusterNATGatewayProfileArgsProvideDefaults(val: ManagedClusterNATGatewayProfileArgs): ManagedClusterNATGatewayProfileArgs {
            return {
                ...val,
                idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 4,
                managedOutboundIPProfile: (val.managedOutboundIPProfile ? pulumi.output(val.managedOutboundIPProfile).apply(v20230701.managedClusterManagedOutboundIPProfileArgsProvideDefaults) : undefined),
            };
        }

        /**
         * The OIDC issuer profile of the Managed Cluster.
         */
        export interface ManagedClusterOIDCIssuerProfileArgs {
            /**
             * Whether the OIDC issuer is enabled.
             */
            enabled?: pulumi.Input<boolean>;
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
            identity: pulumi.Input<v20230701.UserAssignedIdentityArgs>;
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
            userAssignedIdentities?: pulumi.Input<pulumi.Input<v20230701.ManagedClusterPodIdentityArgs>[]>;
            /**
             * The pod identity exceptions to allow.
             */
            userAssignedIdentityExceptions?: pulumi.Input<pulumi.Input<v20230701.ManagedClusterPodIdentityExceptionArgs>[]>;
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
            expander?: pulumi.Input<string | enums.v20230701.Expander>;
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

        /**
         * The SKU of a Managed Cluster.
         */
        export interface ManagedClusterSKUArgs {
            /**
             * The name of a managed cluster SKU.
             */
            name?: pulumi.Input<string | enums.v20230701.ManagedClusterSKUName>;
            /**
             * If not specified, the default is 'Free'. See [AKS Pricing Tier](https://learn.microsoft.com/azure/aks/free-standard-pricing-tiers) for more details.
             */
            tier?: pulumi.Input<string | enums.v20230701.ManagedClusterSKUTier>;
        }

        /**
         * Security profile for the container service cluster.
         */
        export interface ManagedClusterSecurityProfileArgs {
            /**
             * Azure Key Vault [key management service](https://kubernetes.io/docs/tasks/administer-cluster/kms-provider/) settings for the security profile.
             */
            azureKeyVaultKms?: pulumi.Input<v20230701.AzureKeyVaultKmsArgs>;
            /**
             * Microsoft Defender settings for the security profile.
             */
            defender?: pulumi.Input<v20230701.ManagedClusterSecurityProfileDefenderArgs>;
            /**
             * Image Cleaner settings for the security profile.
             */
            imageCleaner?: pulumi.Input<v20230701.ManagedClusterSecurityProfileImageCleanerArgs>;
            /**
             * Workload identity settings for the security profile. Workload identity enables Kubernetes applications to access Azure cloud resources securely with Azure AD. See https://aka.ms/aks/wi for more details.
             */
            workloadIdentity?: pulumi.Input<v20230701.ManagedClusterSecurityProfileWorkloadIdentityArgs>;
        }
        /**
         * managedClusterSecurityProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterSecurityProfileArgs
         */
        export function managedClusterSecurityProfileArgsProvideDefaults(val: ManagedClusterSecurityProfileArgs): ManagedClusterSecurityProfileArgs {
            return {
                ...val,
                azureKeyVaultKms: (val.azureKeyVaultKms ? pulumi.output(val.azureKeyVaultKms).apply(v20230701.azureKeyVaultKmsArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Microsoft Defender settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileDefenderArgs {
            /**
             * Resource ID of the Log Analytics workspace to be associated with Microsoft Defender. When Microsoft Defender is enabled, this field is required and must be a valid workspace resource ID. When Microsoft Defender is disabled, leave the field empty.
             */
            logAnalyticsWorkspaceResourceId?: pulumi.Input<string>;
            /**
             * Microsoft Defender threat detection for Cloud settings for the security profile.
             */
            securityMonitoring?: pulumi.Input<v20230701.ManagedClusterSecurityProfileDefenderSecurityMonitoringArgs>;
        }

        /**
         * Microsoft Defender settings for the security profile threat detection.
         */
        export interface ManagedClusterSecurityProfileDefenderSecurityMonitoringArgs {
            /**
             * Whether to enable Defender threat detection
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * Image Cleaner removes unused images from nodes, freeing up disk space and helping to reduce attack surface area. Here are settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileImageCleanerArgs {
            /**
             * Whether to enable Image Cleaner on AKS cluster.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Image Cleaner scanning interval in hours.
             */
            intervalHours?: pulumi.Input<number>;
        }

        /**
         * Workload identity settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileWorkloadIdentityArgs {
            /**
             * Whether to enable workload identity.
             */
            enabled?: pulumi.Input<boolean>;
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
         * Storage profile for the container service cluster.
         */
        export interface ManagedClusterStorageProfileArgs {
            /**
             * AzureBlob CSI Driver settings for the storage profile.
             */
            blobCSIDriver?: pulumi.Input<v20230701.ManagedClusterStorageProfileBlobCSIDriverArgs>;
            /**
             * AzureDisk CSI Driver settings for the storage profile.
             */
            diskCSIDriver?: pulumi.Input<v20230701.ManagedClusterStorageProfileDiskCSIDriverArgs>;
            /**
             * AzureFile CSI Driver settings for the storage profile.
             */
            fileCSIDriver?: pulumi.Input<v20230701.ManagedClusterStorageProfileFileCSIDriverArgs>;
            /**
             * Snapshot Controller settings for the storage profile.
             */
            snapshotController?: pulumi.Input<v20230701.ManagedClusterStorageProfileSnapshotControllerArgs>;
        }

        /**
         * AzureBlob CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileBlobCSIDriverArgs {
            /**
             * Whether to enable AzureBlob CSI Driver. The default value is false.
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * AzureDisk CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileDiskCSIDriverArgs {
            /**
             * Whether to enable AzureDisk CSI Driver. The default value is true.
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * AzureFile CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileFileCSIDriverArgs {
            /**
             * Whether to enable AzureFile CSI Driver. The default value is true.
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * Snapshot Controller settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileSnapshotControllerArgs {
            /**
             * Whether to enable Snapshot Controller. The default value is true.
             */
            enabled?: pulumi.Input<boolean>;
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
             * The Windows gMSA Profile in the Managed Cluster.
             */
            gmsaProfile?: pulumi.Input<v20230701.WindowsGmsaProfileArgs>;
            /**
             * The license type to use for Windows VMs. See [Azure Hybrid User Benefits](https://azure.microsoft.com/pricing/hybrid-benefit/faq/) for more details.
             */
            licenseType?: pulumi.Input<string | enums.v20230701.LicenseType>;
        }

        /**
         * Workload Auto-scaler profile for the managed cluster.
         */
        export interface ManagedClusterWorkloadAutoScalerProfileArgs {
            /**
             * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
             */
            keda?: pulumi.Input<v20230701.ManagedClusterWorkloadAutoScalerProfileKedaArgs>;
            /**
             * VPA (Vertical Pod Autoscaler) settings for the workload auto-scaler profile.
             */
            verticalPodAutoscaler?: pulumi.Input<v20230701.ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs>;
        }
        /**
         * managedClusterWorkloadAutoScalerProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterWorkloadAutoScalerProfileArgs
         */
        export function managedClusterWorkloadAutoScalerProfileArgsProvideDefaults(val: ManagedClusterWorkloadAutoScalerProfileArgs): ManagedClusterWorkloadAutoScalerProfileArgs {
            return {
                ...val,
                verticalPodAutoscaler: (val.verticalPodAutoscaler ? pulumi.output(val.verticalPodAutoscaler).apply(v20230701.managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgsProvideDefaults) : undefined),
            };
        }

        /**
         * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
         */
        export interface ManagedClusterWorkloadAutoScalerProfileKedaArgs {
            /**
             * Whether to enable KEDA.
             */
            enabled: pulumi.Input<boolean>;
        }

        /**
         * VPA (Vertical Pod Autoscaler) settings for the workload auto-scaler profile.
         */
        export interface ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs {
            /**
             * Whether to enable VPA. Default value is false.
             */
            enabled: pulumi.Input<boolean>;
        }
        /**
         * managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgsProvideDefaults sets the appropriate defaults for ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs
         */
        export function managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgsProvideDefaults(val: ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs): ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs {
            return {
                ...val,
                enabled: (val.enabled) ?? false,
            };
        }

        /**
         * Describes the Power State of the cluster
         */
        export interface PowerStateArgs {
            /**
             * Tells whether the cluster is Running or Stopped
             */
            code?: pulumi.Input<string | enums.v20230701.Code>;
        }

        /**
         * Private endpoint which a connection belongs to.
         */
        export interface PrivateEndpointArgs {
            /**
             * The resource ID of the private endpoint
             */
            id?: pulumi.Input<string>;
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
         * The state of a private link service connection.
         */
        export interface PrivateLinkServiceConnectionStateArgs {
            /**
             * The private link service connection description.
             */
            description?: pulumi.Input<string>;
            /**
             * The private link service connection status.
             */
            status?: pulumi.Input<string | enums.v20230701.ConnectionStatus>;
        }

        /**
         * For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'.
         */
        export interface RelativeMonthlyScheduleArgs {
            /**
             * Specifies on which day of the week the maintenance occurs.
             */
            dayOfWeek: pulumi.Input<string | enums.v20230701.WeekDay>;
            /**
             * Specifies the number of months between each set of occurrences.
             */
            intervalMonths: pulumi.Input<number>;
            /**
             * Specifies on which week of the month the dayOfWeek applies.
             */
            weekIndex: pulumi.Input<string | enums.v20230701.Type>;
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
         * One and only one of the schedule types should be specified. Choose either 'daily', 'weekly', 'absoluteMonthly' or 'relativeMonthly' for your maintenance schedule.
         */
        export interface ScheduleArgs {
            /**
             * For schedules like: 'recur every month on the 15th' or 'recur every 3 months on the 20th'.
             */
            absoluteMonthly?: pulumi.Input<v20230701.AbsoluteMonthlyScheduleArgs>;
            /**
             * For schedules like: 'recur every day' or 'recur every 3 days'.
             */
            daily?: pulumi.Input<v20230701.DailyScheduleArgs>;
            /**
             * For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'.
             */
            relativeMonthly?: pulumi.Input<v20230701.RelativeMonthlyScheduleArgs>;
            /**
             * For schedules like: 'recur every Monday' or 'recur every 3 weeks on Wednesday'.
             */
            weekly?: pulumi.Input<v20230701.WeeklyScheduleArgs>;
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
         * Time in a week.
         */
        export interface TimeInWeekArgs {
            /**
             * The day of the week.
             */
            day?: pulumi.Input<string | enums.v20230701.WeekDay>;
            /**
             * Each integer hour represents a time range beginning at 0m after the hour ending at the next hour (non-inclusive). 0 corresponds to 00:00 UTC, 23 corresponds to 23:00 UTC. Specifying [0, 1] means the 00:00 - 02:00 UTC time range.
             */
            hourSlots?: pulumi.Input<pulumi.Input<number>[]>;
        }

        /**
         * For example, between 2021-05-25T13:00:00Z and 2021-05-25T14:00:00Z.
         */
        export interface TimeSpanArgs {
            /**
             * The end of a time span
             */
            end?: pulumi.Input<string>;
            /**
             * The start of a time span
             */
            start?: pulumi.Input<string>;
        }

        /**
         * Settings for overrides when upgrading a cluster.
         */
        export interface UpgradeOverrideSettingsArgs {
            /**
             * Whether to force upgrade the cluster. Note that this option instructs upgrade operation to bypass upgrade protections such as checking for deprecated API usage. Enable this option only with caution.
             */
            forceUpgrade?: pulumi.Input<boolean>;
            /**
             * Until when the overrides are effective. Note that this only matches the start time of an upgrade, and the effectiveness won't change once an upgrade starts even if the `until` expires as upgrade proceeds. This field is not set by default. It must be set for the overrides to take effect.
             */
            until?: pulumi.Input<string>;
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

        /**
         * For schedules like: 'recur every Monday' or 'recur every 3 weeks on Wednesday'.
         */
        export interface WeeklyScheduleArgs {
            /**
             * Specifies on which day of the week the maintenance occurs.
             */
            dayOfWeek: pulumi.Input<string | enums.v20230701.WeekDay>;
            /**
             * Specifies the number of weeks between each set of occurrences.
             */
            intervalWeeks: pulumi.Input<number>;
        }

        /**
         * Windows gMSA Profile in the managed cluster.
         */
        export interface WindowsGmsaProfileArgs {
            /**
             * Specifies the DNS server for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
             */
            dnsServer?: pulumi.Input<string>;
            /**
             * Specifies whether to enable Windows gMSA in the managed cluster.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Specifies the root domain name for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
             */
            rootDomainName?: pulumi.Input<string>;
        }

    }

    export namespace v20230702preview {
        /**
         * For schedules like: 'recur every month on the 15th' or 'recur every 3 months on the 20th'.
         */
        export interface AbsoluteMonthlyScheduleArgs {
            /**
             * The date of the month.
             */
            dayOfMonth: pulumi.Input<number>;
            /**
             * Specifies the number of months between each set of occurrences.
             */
            intervalMonths: pulumi.Input<number>;
        }

        /**
         * Network settings of an agent pool.
         */
        export interface AgentPoolNetworkProfileArgs {
            /**
             * The port ranges that are allowed to access. The specified ranges are allowed to overlap.
             */
            allowedHostPorts?: pulumi.Input<pulumi.Input<v20230702preview.PortRangeArgs>[]>;
            /**
             * The IDs of the application security groups which agent pool will associate when created.
             */
            applicationSecurityGroups?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * IPTags of instance-level public IPs.
             */
            nodePublicIPTags?: pulumi.Input<pulumi.Input<v20230702preview.IPTagArgs>[]>;
        }

        /**
         * The security settings of an agent pool.
         */
        export interface AgentPoolSecurityProfileArgs {
            /**
             * SSH access method of an agent pool.
             */
            sshAccess?: pulumi.Input<string | enums.v20230702preview.AgentPoolSSHAccess>;
        }

        /**
         * Settings for upgrading an agentpool
         */
        export interface AgentPoolUpgradeSettingsArgs {
            /**
             * The amount of time (in minutes) to wait on eviction of pods and graceful termination per node. This eviction wait time honors waiting on pod disruption budgets. If this time is exceeded, the upgrade fails. If not specified, the default is 30 minutes.
             */
            drainTimeoutInMinutes?: pulumi.Input<number>;
            /**
             * This can either be set to an integer (e.g. '5') or a percentage (e.g. '50%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified, the default is 1. For more information, including best practices, see: https://docs.microsoft.com/azure/aks/upgrade-cluster#customize-node-surge-upgrade
             */
            maxSurge?: pulumi.Input<string>;
        }

        /**
         * The Windows agent pool's specific profile.
         */
        export interface AgentPoolWindowsProfileArgs {
            /**
             * The default value is false. Outbound NAT can only be disabled if the cluster outboundType is NAT Gateway and the Windows agent pool does not have node public IP enabled.
             */
            disableOutboundNat?: pulumi.Input<boolean>;
        }

        /**
         * Azure Key Vault key management service settings for the security profile.
         */
        export interface AzureKeyVaultKmsArgs {
            /**
             * Whether to enable Azure Key Vault key management service. The default is false.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Identifier of Azure Key Vault key. See [key identifier format](https://docs.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates#vault-name-and-object-name) for more details. When Azure Key Vault key management service is enabled, this field is required and must be a valid key identifier. When Azure Key Vault key management service is disabled, leave the field empty.
             */
            keyId?: pulumi.Input<string>;
            /**
             * Network access of key vault. The possible values are `Public` and `Private`. `Public` means the key vault allows public access from all networks. `Private` means the key vault disables public access and enables private link. The default value is `Public`.
             */
            keyVaultNetworkAccess?: pulumi.Input<string | enums.v20230702preview.KeyVaultNetworkAccessTypes>;
            /**
             * Resource ID of key vault. When keyVaultNetworkAccess is `Private`, this field is required and must be a valid resource ID. When keyVaultNetworkAccess is `Public`, leave the field empty.
             */
            keyVaultResourceId?: pulumi.Input<string>;
        }
        /**
         * azureKeyVaultKmsArgsProvideDefaults sets the appropriate defaults for AzureKeyVaultKmsArgs
         */
        export function azureKeyVaultKmsArgsProvideDefaults(val: AzureKeyVaultKmsArgs): AzureKeyVaultKmsArgs {
            return {
                ...val,
                keyVaultNetworkAccess: (val.keyVaultNetworkAccess) ?? "Public",
            };
        }

        /**
         * Settings for upgrading a cluster.
         */
        export interface ClusterUpgradeSettingsArgs {
            /**
             * Settings for overrides.
             */
            overrideSettings?: pulumi.Input<v20230702preview.UpgradeOverrideSettingsArgs>;
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
            ssh: pulumi.Input<v20230702preview.ContainerServiceSshConfigurationArgs>;
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
             * IP families are used to determine single-stack or dual-stack clusters. For single-stack, the expected value is IPv4. For dual-stack, the expected values are IPv4 and IPv6.
             */
            ipFamilies?: pulumi.Input<pulumi.Input<string | enums.v20230702preview.IpFamily>[]>;
            /**
             * Holds configuration customizations for kube-proxy. Any values not defined will use the kube-proxy defaulting behavior. See https://v<version>.docs.kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/ where <version> is represented by a <major version>-<minor version> string. Kubernetes version 1.23 would be '1-23'.
             */
            kubeProxyConfig?: pulumi.Input<v20230702preview.ContainerServiceNetworkProfileKubeProxyConfigArgs>;
            /**
             * Profile of the cluster load balancer.
             */
            loadBalancerProfile?: pulumi.Input<v20230702preview.ManagedClusterLoadBalancerProfileArgs>;
            /**
             * The default is 'standard'. See [Azure Load Balancer SKUs](https://docs.microsoft.com/azure/load-balancer/skus) for more information about the differences between load balancer SKUs.
             */
            loadBalancerSku?: pulumi.Input<string | enums.v20230702preview.LoadBalancerSku>;
            /**
             * This addon can be used to configure network monitoring and generate network monitoring data in Prometheus format
             */
            monitoring?: pulumi.Input<v20230702preview.NetworkMonitoringArgs>;
            /**
             * Profile of the cluster NAT gateway.
             */
            natGatewayProfile?: pulumi.Input<v20230702preview.ManagedClusterNATGatewayProfileArgs>;
            /**
             * Network dataplane used in the Kubernetes cluster.
             */
            networkDataplane?: pulumi.Input<string | enums.v20230702preview.NetworkDataplane>;
            /**
             * This cannot be specified if networkPlugin is anything other than 'azure'.
             */
            networkMode?: pulumi.Input<string | enums.v20230702preview.NetworkMode>;
            /**
             * Network plugin used for building the Kubernetes network.
             */
            networkPlugin?: pulumi.Input<string | enums.v20230702preview.NetworkPlugin>;
            /**
             * Network plugin mode used for building the Kubernetes network.
             */
            networkPluginMode?: pulumi.Input<string | enums.v20230702preview.NetworkPluginMode>;
            /**
             * Network policy used for building the Kubernetes network.
             */
            networkPolicy?: pulumi.Input<string | enums.v20230702preview.NetworkPolicy>;
            /**
             * This can only be set at cluster creation time and cannot be changed later. For more information see [egress outbound type](https://docs.microsoft.com/azure/aks/egress-outboundtype).
             */
            outboundType?: pulumi.Input<string | enums.v20230702preview.OutboundType>;
            /**
             * A CIDR notation IP range from which to assign pod IPs when kubenet is used.
             */
            podCidr?: pulumi.Input<string>;
            /**
             * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
             */
            podCidrs?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
             */
            serviceCidr?: pulumi.Input<string>;
            /**
             * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking. They must not overlap with any Subnet IP ranges.
             */
            serviceCidrs?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * containerServiceNetworkProfileArgsProvideDefaults sets the appropriate defaults for ContainerServiceNetworkProfileArgs
         */
        export function containerServiceNetworkProfileArgsProvideDefaults(val: ContainerServiceNetworkProfileArgs): ContainerServiceNetworkProfileArgs {
            return {
                ...val,
                dnsServiceIP: (val.dnsServiceIP) ?? "10.0.0.10",
                loadBalancerProfile: (val.loadBalancerProfile ? pulumi.output(val.loadBalancerProfile).apply(v20230702preview.managedClusterLoadBalancerProfileArgsProvideDefaults) : undefined),
                natGatewayProfile: (val.natGatewayProfile ? pulumi.output(val.natGatewayProfile).apply(v20230702preview.managedClusterNATGatewayProfileArgsProvideDefaults) : undefined),
                outboundType: (val.outboundType) ?? "loadBalancer",
                podCidr: (val.podCidr) ?? "10.244.0.0/16",
                serviceCidr: (val.serviceCidr) ?? "10.0.0.0/16",
            };
        }

        /**
         * Holds configuration customizations for IPVS. May only be specified if 'mode' is set to 'IPVS'.
         */
        export interface ContainerServiceNetworkProfileIpvsConfigArgs {
            /**
             * IPVS scheduler, for more information please see http://www.linuxvirtualserver.org/docs/scheduling.html.
             */
            scheduler?: pulumi.Input<string | enums.v20230702preview.IpvsScheduler>;
            /**
             * The timeout value used for IPVS TCP sessions after receiving a FIN in seconds. Must be a positive integer value.
             */
            tcpFinTimeoutSeconds?: pulumi.Input<number>;
            /**
             * The timeout value used for idle IPVS TCP sessions in seconds. Must be a positive integer value.
             */
            tcpTimeoutSeconds?: pulumi.Input<number>;
            /**
             * The timeout value used for IPVS UDP packets in seconds. Must be a positive integer value.
             */
            udpTimeoutSeconds?: pulumi.Input<number>;
        }

        /**
         * Holds configuration customizations for kube-proxy. Any values not defined will use the kube-proxy defaulting behavior. See https://v<version>.docs.kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/ where <version> is represented by a <major version>-<minor version> string. Kubernetes version 1.23 would be '1-23'.
         */
        export interface ContainerServiceNetworkProfileKubeProxyConfigArgs {
            /**
             * Whether to enable on kube-proxy on the cluster (if no 'kubeProxyConfig' exists, kube-proxy is enabled in AKS by default without these customizations).
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Holds configuration customizations for IPVS. May only be specified if 'mode' is set to 'IPVS'.
             */
            ipvsConfig?: pulumi.Input<v20230702preview.ContainerServiceNetworkProfileIpvsConfigArgs>;
            /**
             * Specify which proxy mode to use ('IPTABLES' or 'IPVS')
             */
            mode?: pulumi.Input<string | enums.v20230702preview.Mode>;
        }

        /**
         * SSH configuration for Linux-based VMs running on Azure.
         */
        export interface ContainerServiceSshConfigurationArgs {
            /**
             * The list of SSH public keys used to authenticate with Linux-based VMs. A maximum of 1 key may be specified.
             */
            publicKeys: pulumi.Input<pulumi.Input<v20230702preview.ContainerServiceSshPublicKeyArgs>[]>;
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
         * Data used when creating a target resource from a source resource.
         */
        export interface CreationDataArgs {
            /**
             * This is the ARM ID of the source object to be used to create the target object.
             */
            sourceResourceId?: pulumi.Input<string>;
        }

        /**
         * For schedules like: 'recur every day' or 'recur every 3 days'.
         */
        export interface DailyScheduleArgs {
            /**
             * Specifies the number of days between each set of occurrences.
             */
            intervalDays: pulumi.Input<number>;
        }

        /**
         * For example, between '2022-12-23' and '2023-01-05'.
         */
        export interface DateSpanArgs {
            /**
             * The end date of the date span.
             */
            end: pulumi.Input<string>;
            /**
             * The start date of the date span.
             */
            start: pulumi.Input<string>;
        }

        /**
         * Delegated resource properties - internal use only.
         */
        export interface DelegatedResourceArgs {
            /**
             * The source resource location - internal use only.
             */
            location?: pulumi.Input<string>;
            /**
             * The delegation id of the referral delegation (optional) - internal use only.
             */
            referralResource?: pulumi.Input<string>;
            /**
             * The ARM resource id of the delegated resource - internal use only.
             */
            resourceId?: pulumi.Input<string>;
            /**
             * The tenant id of the delegated resource - internal use only.
             */
            tenantId?: pulumi.Input<string>;
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
            type?: pulumi.Input<string | enums.v20230702preview.ExtendedLocationTypes>;
        }

        /**
         * The Guardrails profile.
         */
        export interface GuardrailsProfileArgs {
            /**
             * List of namespaces excluded from guardrails checks
             */
            excludedNamespaces?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The guardrails level to be used. By default, Guardrails is enabled for all namespaces except those that AKS excludes via systemExcludedNamespaces
             */
            level: pulumi.Input<string | enums.v20230702preview.Level>;
            /**
             * The version of constraints to use
             */
            version?: pulumi.Input<string>;
        }

        /**
         * Contains the IPTag associated with the object.
         */
        export interface IPTagArgs {
            /**
             * The IP tag type. Example: RoutingPreference.
             */
            ipTagType?: pulumi.Input<string>;
            /**
             * The value of the IP tag associated with the public IP. Example: Internet.
             */
            tag?: pulumi.Input<string>;
        }

        /**
         * Istio Service Mesh Certificate Authority (CA) configuration. For now, we only support plugin certificates as described here https://aka.ms/asm-plugin-ca
         */
        export interface IstioCertificateAuthorityArgs {
            /**
             * Plugin certificates information for Service Mesh.
             */
            plugin?: pulumi.Input<v20230702preview.IstioPluginCertificateAuthorityArgs>;
        }

        /**
         * Istio components configuration.
         */
        export interface IstioComponentsArgs {
            /**
             * Istio egress gateways.
             */
            egressGateways?: pulumi.Input<pulumi.Input<v20230702preview.IstioEgressGatewayArgs>[]>;
            /**
             * Istio ingress gateways.
             */
            ingressGateways?: pulumi.Input<pulumi.Input<v20230702preview.IstioIngressGatewayArgs>[]>;
        }

        /**
         * Istio egress gateway configuration.
         */
        export interface IstioEgressGatewayArgs {
            /**
             * Whether to enable the egress gateway.
             */
            enabled: pulumi.Input<boolean>;
            /**
             * NodeSelector for scheduling the egress gateway.
             */
            nodeSelector?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        }

        /**
         * Istio ingress gateway configuration. For now, we support up to one external ingress gateway named `aks-istio-ingressgateway-external` and one internal ingress gateway named `aks-istio-ingressgateway-internal`.
         */
        export interface IstioIngressGatewayArgs {
            /**
             * Whether to enable the ingress gateway.
             */
            enabled: pulumi.Input<boolean>;
            /**
             * Mode of an ingress gateway.
             */
            mode: pulumi.Input<string | enums.v20230702preview.IstioIngressGatewayMode>;
        }

        /**
         * Plugin certificates information for Service Mesh.
         */
        export interface IstioPluginCertificateAuthorityArgs {
            /**
             * Certificate chain object name in Azure Key Vault.
             */
            certChainObjectName?: pulumi.Input<string>;
            /**
             * Intermediate certificate object name in Azure Key Vault.
             */
            certObjectName?: pulumi.Input<string>;
            /**
             * Intermediate certificate private key object name in Azure Key Vault.
             */
            keyObjectName?: pulumi.Input<string>;
            /**
             * The resource ID of the Key Vault.
             */
            keyVaultId?: pulumi.Input<string>;
            /**
             * Root certificate object name in Azure Key Vault.
             */
            rootCertObjectName?: pulumi.Input<string>;
        }

        /**
         * Istio service mesh configuration.
         */
        export interface IstioServiceMeshArgs {
            /**
             * Istio Service Mesh Certificate Authority (CA) configuration. For now, we only support plugin certificates as described here https://aka.ms/asm-plugin-ca
             */
            certificateAuthority?: pulumi.Input<v20230702preview.IstioCertificateAuthorityArgs>;
            /**
             * Istio components configuration.
             */
            components?: pulumi.Input<v20230702preview.IstioComponentsArgs>;
            /**
             * The list of revisions of the Istio control plane. When an upgrade is not in progress, this holds one value. When canary upgrade is in progress, this can only hold two consecutive values. For more information, see: https://learn.microsoft.com/en-us/azure/aks/istio-upgrade
             */
            revisions?: pulumi.Input<pulumi.Input<string>[]>;
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
            sysctls?: pulumi.Input<v20230702preview.SysctlConfigArgs>;
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
         * Maintenance window used to configure scheduled auto-upgrade for a Managed Cluster.
         */
        export interface MaintenanceWindowArgs {
            /**
             * Length of maintenance window range from 4 to 24 hours.
             */
            durationHours: pulumi.Input<number>;
            /**
             * Date ranges on which upgrade is not allowed. 'utcOffset' applies to this field. For example, with 'utcOffset: +02:00' and 'dateSpan' being '2022-12-23' to '2023-01-03', maintenance will be blocked from '2022-12-22 22:00' to '2023-01-03 22:00' in UTC time.
             */
            notAllowedDates?: pulumi.Input<pulumi.Input<v20230702preview.DateSpanArgs>[]>;
            /**
             * Recurrence schedule for the maintenance window.
             */
            schedule: pulumi.Input<v20230702preview.ScheduleArgs>;
            /**
             * The date the maintenance window activates. If the current date is before this date, the maintenance window is inactive and will not be used for upgrades. If not specified, the maintenance window will be active right away.
             */
            startDate?: pulumi.Input<string>;
            /**
             * The start time of the maintenance window. Accepted values are from '00:00' to '23:59'. 'utcOffset' applies to this field. For example: '02:00' with 'utcOffset: +02:00' means UTC time '00:00'.
             */
            startTime: pulumi.Input<string>;
            /**
             * The UTC offset in format +/-HH:mm. For example, '+05:30' for IST and '-07:00' for PST. If not specified, the default is '+00:00'.
             */
            utcOffset?: pulumi.Input<string>;
        }
        /**
         * maintenanceWindowArgsProvideDefaults sets the appropriate defaults for MaintenanceWindowArgs
         */
        export function maintenanceWindowArgsProvideDefaults(val: MaintenanceWindowArgs): MaintenanceWindowArgs {
            return {
                ...val,
                durationHours: (val.durationHours) ?? 24,
            };
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
             * (DEPRECATED) The client AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
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
             * (DEPRECATED) The server AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
             */
            serverAppID?: pulumi.Input<string>;
            /**
             * (DEPRECATED) The server AAD application secret. Learn more at https://aka.ms/aks/aad-legacy.
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
             * Whether to disable run command for the cluster or not.
             */
            disableRunCommand?: pulumi.Input<boolean>;
            /**
             * For more details, see [Creating a private AKS cluster](https://docs.microsoft.com/azure/aks/private-clusters).
             */
            enablePrivateCluster?: pulumi.Input<boolean>;
            /**
             * Whether to create additional public FQDN for private cluster or not.
             */
            enablePrivateClusterPublicFQDN?: pulumi.Input<boolean>;
            /**
             * Whether to enable apiserver vnet integration for the cluster or not.
             */
            enableVnetIntegration?: pulumi.Input<boolean>;
            /**
             * The default is System. For more details see [configure private DNS zone](https://docs.microsoft.com/azure/aks/private-clusters#configure-private-dns-zone). Allowed values are 'system' and 'none'.
             */
            privateDNSZone?: pulumi.Input<string>;
            /**
             * It is required when: 1. creating a new cluster with BYO Vnet; 2. updating an existing cluster to enable apiserver vnet integration.
             */
            subnetId?: pulumi.Input<string>;
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
             * AKS will associate the specified agent pool with the Capacity Reservation Group.
             */
            capacityReservationGroupID?: pulumi.Input<string>;
            /**
             * Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 1000 (inclusive) for user pools and in the range of 1 to 1000 (inclusive) for system pools. The default value is 1.
             */
            count?: pulumi.Input<number>;
            /**
             * CreationData to be used to specify the source Snapshot ID if the node pool will be created/upgraded using a snapshot.
             */
            creationData?: pulumi.Input<v20230702preview.CreationDataArgs>;
            /**
             * Whether to enable auto-scaler
             */
            enableAutoScaling?: pulumi.Input<boolean>;
            /**
             * When set to true, AKS adds a label to the node indicating that the feature is enabled and deploys a daemonset along with host services to sync custom certificate authorities from user-provided list of base64 encoded certificates into node trust stores. Defaults to false.
             */
            enableCustomCATrust?: pulumi.Input<boolean>;
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
            gpuInstanceProfile?: pulumi.Input<string | enums.v20230702preview.GPUInstanceProfile>;
            /**
             * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}. For more information see [Azure dedicated hosts](https://docs.microsoft.com/azure/virtual-machines/dedicated-hosts).
             */
            hostGroupID?: pulumi.Input<string>;
            /**
             * The Kubelet configuration on the agent pool nodes.
             */
            kubeletConfig?: pulumi.Input<v20230702preview.KubeletConfigArgs>;
            /**
             * Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage.
             */
            kubeletDiskType?: pulumi.Input<string | enums.v20230702preview.KubeletDiskType>;
            /**
             * The OS configuration of Linux agent nodes.
             */
            linuxOSConfig?: pulumi.Input<v20230702preview.LinuxOSConfigArgs>;
            /**
             * The maximum number of nodes for auto-scaling
             */
            maxCount?: pulumi.Input<number>;
            /**
             * The maximum number of pods that can run on a node.
             */
            maxPods?: pulumi.Input<number>;
            /**
             * A base64-encoded string which will be written to /etc/motd after decoding. This allows customization of the message of the day for Linux nodes. It must not be specified for Windows nodes. It must be a static string (i.e., will be printed raw and not be executed as a script).
             */
            messageOfTheDay?: pulumi.Input<string>;
            /**
             * The minimum number of nodes for auto-scaling
             */
            minCount?: pulumi.Input<number>;
            /**
             * A cluster must have at least one 'System' Agent Pool at all times. For additional information on agent pool restrictions and best practices, see: https://docs.microsoft.com/azure/aks/use-system-pools
             */
            mode?: pulumi.Input<string | enums.v20230702preview.AgentPoolMode>;
            /**
             * Windows agent pool names must be 6 characters or less.
             */
            name: pulumi.Input<string>;
            /**
             * Network-related settings of an agent pool.
             */
            networkProfile?: pulumi.Input<v20230702preview.AgentPoolNetworkProfileArgs>;
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
             * Both patch version <major.minor.patch> and <major.minor> are supported. When <major.minor> is specified, the latest supported patch version is chosen automatically. Updating the agent pool with the same <major.minor> once it has been created will not trigger an upgrade, even if a newer patch version is available. As a best practice, you should upgrade all node pools in an AKS cluster to the same Kubernetes version. The node pool version must have the same major version as the control plane. The node pool minor version must be within two minor versions of the control plane version. The node pool version cannot be greater than the control plane version. For more information see [upgrading a node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#upgrade-a-node-pool).
             */
            orchestratorVersion?: pulumi.Input<string>;
            /**
             * OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
             */
            osDiskSizeGB?: pulumi.Input<number>;
            /**
             * The default is 'Ephemeral' if the VM supports it and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation. For more information see [Ephemeral OS](https://docs.microsoft.com/azure/aks/cluster-configuration#ephemeral-os).
             */
            osDiskType?: pulumi.Input<string | enums.v20230702preview.OSDiskType>;
            /**
             * Specifies the OS SKU used by the agent pool. If not specified, the default is Ubuntu if OSType=Linux or Windows2019 if OSType=Windows. And the default Windows OSSKU will be changed to Windows2022 after Windows2019 is deprecated.
             */
            osSKU?: pulumi.Input<string | enums.v20230702preview.OSSKU>;
            /**
             * The operating system type. The default is Linux.
             */
            osType?: pulumi.Input<string | enums.v20230702preview.OSType>;
            /**
             * If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
             */
            podSubnetID?: pulumi.Input<string>;
            /**
             * When an Agent Pool is first created it is initially Running. The Agent Pool can be stopped by setting this field to Stopped. A stopped Agent Pool stops all of its VMs and does not accrue billing charges. An Agent Pool can only be stopped if it is Running and provisioning state is Succeeded
             */
            powerState?: pulumi.Input<v20230702preview.PowerStateArgs>;
            /**
             * The ID for Proximity Placement Group.
             */
            proximityPlacementGroupID?: pulumi.Input<string>;
            /**
             * This also effects the cluster autoscaler behavior. If not specified, it defaults to Delete.
             */
            scaleDownMode?: pulumi.Input<string | enums.v20230702preview.ScaleDownMode>;
            /**
             * This cannot be specified unless the scaleSetPriority is 'Spot'. If not specified, the default is 'Delete'.
             */
            scaleSetEvictionPolicy?: pulumi.Input<string | enums.v20230702preview.ScaleSetEvictionPolicy>;
            /**
             * The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'.
             */
            scaleSetPriority?: pulumi.Input<string | enums.v20230702preview.ScaleSetPriority>;
            /**
             * The security settings of an agent pool.
             */
            securityProfile?: pulumi.Input<v20230702preview.AgentPoolSecurityProfileArgs>;
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
            type?: pulumi.Input<string | enums.v20230702preview.AgentPoolType>;
            /**
             * Settings for upgrading the agentpool
             */
            upgradeSettings?: pulumi.Input<v20230702preview.AgentPoolUpgradeSettingsArgs>;
            /**
             * VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. For more details on restricted VM sizes, see: https://docs.microsoft.com/azure/aks/quotas-skus-regions
             */
            vmSize?: pulumi.Input<string>;
            /**
             * If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
             */
            vnetSubnetID?: pulumi.Input<string>;
            /**
             * The Windows agent pool's specific profile.
             */
            windowsProfile?: pulumi.Input<v20230702preview.AgentPoolWindowsProfileArgs>;
            /**
             * Determines the type of workload a node can run.
             */
            workloadRuntime?: pulumi.Input<string | enums.v20230702preview.WorkloadRuntime>;
        }

        /**
         * Auto upgrade profile for a managed cluster.
         */
        export interface ManagedClusterAutoUpgradeProfileArgs {
            /**
             * The default is Unmanaged, but may change to either NodeImage or SecurityPatch at GA.
             */
            nodeOSUpgradeChannel?: pulumi.Input<string | enums.v20230702preview.NodeOSUpgradeChannel>;
            /**
             * For more information see [setting the AKS cluster auto-upgrade channel](https://docs.microsoft.com/azure/aks/upgrade-cluster#set-auto-upgrade-channel).
             */
            upgradeChannel?: pulumi.Input<string | enums.v20230702preview.UpgradeChannel>;
        }

        /**
         * Prometheus addon profile for the container service cluster
         */
        export interface ManagedClusterAzureMonitorProfileArgs {
            /**
             * Logs profile for the Azure Monitor Infrastructure and Application Logs. Collect out-of-the-box Kubernetes infrastructure & application logs to send to Azure Monitor. See aka.ms/AzureMonitorContainerInsights for an overview.
             */
            logs?: pulumi.Input<v20230702preview.ManagedClusterAzureMonitorProfileLogsArgs>;
            /**
             * Metrics profile for the prometheus service addon
             */
            metrics?: pulumi.Input<v20230702preview.ManagedClusterAzureMonitorProfileMetricsArgs>;
        }

        /**
         * Application Monitoring Profile for Kubernetes Application Container. Collects application logs, metrics and traces through auto-instrumentation of the application using Azure Monitor OpenTelemetry based SDKs. See aka.ms/AzureMonitorApplicationMonitoring for an overview.
         */
        export interface ManagedClusterAzureMonitorProfileAppMonitoringArgs {
            /**
             * Indicates if Application Monitoring enabled or not.
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * Application Monitoring Open Telemetry Metrics Profile for Kubernetes Application Container Metrics. Collects OpenTelemetry metrics through auto-instrumentation of the application using Azure Monitor OpenTelemetry based SDKs. See aka.ms/AzureMonitorApplicationMonitoring for an overview.
         */
        export interface ManagedClusterAzureMonitorProfileAppMonitoringOpenTelemetryMetricsArgs {
            /**
             * Indicates if Application Monitoring Open Telemetry Metrics is enabled or not.
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * Azure Monitor Container Insights Profile for Kubernetes Events, Inventory and Container stdout & stderr logs etc. See aka.ms/AzureMonitorContainerInsights for an overview.
         */
        export interface ManagedClusterAzureMonitorProfileContainerInsightsArgs {
            /**
             * Indicates if Azure Monitor Container Insights Logs Addon is enabled or not.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Fully Qualified ARM Resource Id of Azure Log Analytics Workspace for storing Azure Monitor Container Insights Logs.
             */
            logAnalyticsWorkspaceResourceId?: pulumi.Input<string>;
            /**
             * Windows Host Logs Profile for Kubernetes Windows Nodes Log Collection. Collects ETW, Event Logs and Text logs etc. See aka.ms/AzureMonitorContainerInsights for an overview.
             */
            windowsHostLogs?: pulumi.Input<v20230702preview.ManagedClusterAzureMonitorProfileWindowsHostLogsArgs>;
        }

        /**
         * Kube State Metrics for prometheus addon profile for the container service cluster
         */
        export interface ManagedClusterAzureMonitorProfileKubeStateMetricsArgs {
            /**
             * Comma-separated list of additional Kubernetes label keys that will be used in the resource's labels metric.
             */
            metricAnnotationsAllowList?: pulumi.Input<string>;
            /**
             * Comma-separated list of Kubernetes annotations keys that will be used in the resource's labels metric. 
             */
            metricLabelsAllowlist?: pulumi.Input<string>;
        }

        /**
         * Logs profile for the Azure Monitor Infrastructure and Application Logs. Collect out-of-the-box Kubernetes infrastructure & application logs to send to Azure Monitor. See aka.ms/AzureMonitorContainerInsights for an overview.
         */
        export interface ManagedClusterAzureMonitorProfileLogsArgs {
            /**
             * Application Monitoring Profile for Kubernetes Application Container. Collects application logs, metrics and traces through auto-instrumentation of the application using Azure Monitor OpenTelemetry based SDKs. See aka.ms/AzureMonitorApplicationMonitoring for an overview.
             */
            appMonitoring?: pulumi.Input<v20230702preview.ManagedClusterAzureMonitorProfileAppMonitoringArgs>;
            /**
             * Azure Monitor Container Insights Profile for Kubernetes Events, Inventory and Container stdout & stderr logs etc. See aka.ms/AzureMonitorContainerInsights for an overview.
             */
            containerInsights?: pulumi.Input<v20230702preview.ManagedClusterAzureMonitorProfileContainerInsightsArgs>;
        }

        /**
         * Metrics profile for the prometheus service addon
         */
        export interface ManagedClusterAzureMonitorProfileMetricsArgs {
            /**
             * Application Monitoring Open Telemetry Metrics Profile for Kubernetes Application Container Metrics. Collects OpenTelemetry metrics through auto-instrumentation of the application using Azure Monitor OpenTelemetry based SDKs. See aka.ms/AzureMonitorApplicationMonitoring for an overview.
             */
            appMonitoringOpenTelemetryMetrics?: pulumi.Input<v20230702preview.ManagedClusterAzureMonitorProfileAppMonitoringOpenTelemetryMetricsArgs>;
            /**
             * Whether to enable the Prometheus collector
             */
            enabled: pulumi.Input<boolean>;
            /**
             * Kube State Metrics for prometheus addon profile for the container service cluster
             */
            kubeStateMetrics?: pulumi.Input<v20230702preview.ManagedClusterAzureMonitorProfileKubeStateMetricsArgs>;
        }

        /**
         * Windows Host Logs Profile for Kubernetes Windows Nodes Log Collection. Collects ETW, Event Logs and Text logs etc. See aka.ms/AzureMonitorContainerInsights for an overview.
         */
        export interface ManagedClusterAzureMonitorProfileWindowsHostLogsArgs {
            /**
             * Indicates if Windows Host Log Collection is enabled or not for Azure Monitor Container Insights Logs Addon.
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * The cost analysis configuration for the cluster
         */
        export interface ManagedClusterCostAnalysisArgs {
            /**
             * The Managed Cluster sku.tier must be set to 'Standard' to enable this feature. Enabling this will add Kubernetes Namespace and Deployment details to the Cost Analysis views in the Azure portal. If not specified, the default is false. For more information see aka.ms/aks/docs/cost-analysis.
             */
            enabled?: pulumi.Input<boolean>;
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
             * The delegated identity resources assigned to this managed cluster. This can only be set by another Azure Resource Provider, and managed cluster only accept one delegated identity resource. Internal use only.
             */
            delegatedResources?: pulumi.Input<{[key: string]: pulumi.Input<v20230702preview.DelegatedResourceArgs>}>;
            /**
             * For more information see [use managed identities in AKS](https://docs.microsoft.com/azure/aks/use-managed-identity).
             */
            type?: pulumi.Input<enums.v20230702preview.ResourceIdentityType>;
            /**
             * The keys must be ARM resource IDs in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Ingress profile for the container service cluster.
         */
        export interface ManagedClusterIngressProfileArgs {
            /**
             * Web App Routing settings for the ingress profile.
             */
            webAppRouting?: pulumi.Input<v20230702preview.ManagedClusterIngressProfileWebAppRoutingArgs>;
        }

        /**
         * Web App Routing settings for the ingress profile.
         */
        export interface ManagedClusterIngressProfileWebAppRoutingArgs {
            /**
             * Resource IDs of the public DNS zones to be associated with the Web App Routing add-on. Used only when Web App Routing is enabled. All public DNS zones must be in the same resource group.
             */
            dnsZoneResourceIds?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Whether to enable Web App Routing.
             */
            enabled?: pulumi.Input<boolean>;
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
             * The type of the managed inbound Load Balancer BackendPool.
             */
            backendPoolType?: pulumi.Input<string | enums.v20230702preview.BackendPoolType>;
            /**
             * The effective outbound IP resources of the cluster load balancer.
             */
            effectiveOutboundIPs?: pulumi.Input<pulumi.Input<v20230702preview.ResourceReferenceArgs>[]>;
            /**
             * Enable multiple standard load balancers per AKS cluster or not.
             */
            enableMultipleStandardLoadBalancers?: pulumi.Input<boolean>;
            /**
             * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 30 minutes.
             */
            idleTimeoutInMinutes?: pulumi.Input<number>;
            /**
             * Desired managed outbound IPs for the cluster load balancer.
             */
            managedOutboundIPs?: pulumi.Input<v20230702preview.ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs>;
            /**
             * Desired outbound IP Prefix resources for the cluster load balancer.
             */
            outboundIPPrefixes?: pulumi.Input<v20230702preview.ManagedClusterLoadBalancerProfileOutboundIPPrefixesArgs>;
            /**
             * Desired outbound IP resources for the cluster load balancer.
             */
            outboundIPs?: pulumi.Input<v20230702preview.ManagedClusterLoadBalancerProfileOutboundIPsArgs>;
        }
        /**
         * managedClusterLoadBalancerProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileArgs
         */
        export function managedClusterLoadBalancerProfileArgsProvideDefaults(val: ManagedClusterLoadBalancerProfileArgs): ManagedClusterLoadBalancerProfileArgs {
            return {
                ...val,
                allocatedOutboundPorts: (val.allocatedOutboundPorts) ?? 0,
                backendPoolType: (val.backendPoolType) ?? "NodeIPConfiguration",
                idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 30,
                managedOutboundIPs: (val.managedOutboundIPs ? pulumi.output(val.managedOutboundIPs).apply(v20230702preview.managedClusterLoadBalancerProfileManagedOutboundIPsArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Desired managed outbound IPs for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs {
            /**
             * The desired number of IPv4 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1. 
             */
            count?: pulumi.Input<number>;
            /**
             * The desired number of IPv6 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 0 for single-stack and 1 for dual-stack. 
             */
            countIPv6?: pulumi.Input<number>;
        }
        /**
         * managedClusterLoadBalancerProfileManagedOutboundIPsArgsProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs
         */
        export function managedClusterLoadBalancerProfileManagedOutboundIPsArgsProvideDefaults(val: ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs): ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs {
            return {
                ...val,
                count: (val.count) ?? 1,
                countIPv6: (val.countIPv6) ?? 0,
            };
        }

        /**
         * Desired outbound IP Prefix resources for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileOutboundIPPrefixesArgs {
            /**
             * A list of public IP prefix resources.
             */
            publicIPPrefixes?: pulumi.Input<pulumi.Input<v20230702preview.ResourceReferenceArgs>[]>;
        }

        /**
         * Desired outbound IP resources for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileOutboundIPsArgs {
            /**
             * A list of public IP resources.
             */
            publicIPs?: pulumi.Input<pulumi.Input<v20230702preview.ResourceReferenceArgs>[]>;
        }

        /**
         * Profile of the managed outbound IP resources of the managed cluster.
         */
        export interface ManagedClusterManagedOutboundIPProfileArgs {
            /**
             * The desired number of outbound IPs created/managed by Azure. Allowed values must be in the range of 1 to 16 (inclusive). The default value is 1. 
             */
            count?: pulumi.Input<number>;
        }
        /**
         * managedClusterManagedOutboundIPProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterManagedOutboundIPProfileArgs
         */
        export function managedClusterManagedOutboundIPProfileArgsProvideDefaults(val: ManagedClusterManagedOutboundIPProfileArgs): ManagedClusterManagedOutboundIPProfileArgs {
            return {
                ...val,
                count: (val.count) ?? 1,
            };
        }

        /**
         * The metrics profile for the ManagedCluster.
         */
        export interface ManagedClusterMetricsProfileArgs {
            /**
             * The cost analysis configuration for the cluster
             */
            costAnalysis?: pulumi.Input<v20230702preview.ManagedClusterCostAnalysisArgs>;
        }

        /**
         * Profile of the managed cluster NAT gateway.
         */
        export interface ManagedClusterNATGatewayProfileArgs {
            /**
             * The effective outbound IP resources of the cluster NAT gateway.
             */
            effectiveOutboundIPs?: pulumi.Input<pulumi.Input<v20230702preview.ResourceReferenceArgs>[]>;
            /**
             * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 4 minutes.
             */
            idleTimeoutInMinutes?: pulumi.Input<number>;
            /**
             * Profile of the managed outbound IP resources of the cluster NAT gateway.
             */
            managedOutboundIPProfile?: pulumi.Input<v20230702preview.ManagedClusterManagedOutboundIPProfileArgs>;
        }
        /**
         * managedClusterNATGatewayProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterNATGatewayProfileArgs
         */
        export function managedClusterNATGatewayProfileArgsProvideDefaults(val: ManagedClusterNATGatewayProfileArgs): ManagedClusterNATGatewayProfileArgs {
            return {
                ...val,
                idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 4,
                managedOutboundIPProfile: (val.managedOutboundIPProfile ? pulumi.output(val.managedOutboundIPProfile).apply(v20230702preview.managedClusterManagedOutboundIPProfileArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Node resource group lockdown profile for a managed cluster.
         */
        export interface ManagedClusterNodeResourceGroupProfileArgs {
            /**
             * The restriction level applied to the cluster's node resource group
             */
            restrictionLevel?: pulumi.Input<string | enums.v20230702preview.RestrictionLevel>;
        }

        /**
         * The OIDC issuer profile of the Managed Cluster.
         */
        export interface ManagedClusterOIDCIssuerProfileArgs {
            /**
             * Whether the OIDC issuer is enabled.
             */
            enabled?: pulumi.Input<boolean>;
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
            identity: pulumi.Input<v20230702preview.UserAssignedIdentityArgs>;
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
            userAssignedIdentities?: pulumi.Input<pulumi.Input<v20230702preview.ManagedClusterPodIdentityArgs>[]>;
            /**
             * The pod identity exceptions to allow.
             */
            userAssignedIdentityExceptions?: pulumi.Input<pulumi.Input<v20230702preview.ManagedClusterPodIdentityExceptionArgs>[]>;
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
            expander?: pulumi.Input<string | enums.v20230702preview.Expander>;
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

        /**
         * The SKU of a Managed Cluster.
         */
        export interface ManagedClusterSKUArgs {
            /**
             * The name of a managed cluster SKU.
             */
            name?: pulumi.Input<string | enums.v20230702preview.ManagedClusterSKUName>;
            /**
             * If not specified, the default is 'Free'. See [AKS Pricing Tier](https://learn.microsoft.com/azure/aks/free-standard-pricing-tiers) for more details.
             */
            tier?: pulumi.Input<string | enums.v20230702preview.ManagedClusterSKUTier>;
        }

        /**
         * Security profile for the container service cluster.
         */
        export interface ManagedClusterSecurityProfileArgs {
            /**
             * Azure Key Vault [key management service](https://kubernetes.io/docs/tasks/administer-cluster/kms-provider/) settings for the security profile.
             */
            azureKeyVaultKms?: pulumi.Input<v20230702preview.AzureKeyVaultKmsArgs>;
            /**
             * A list of up to 10 base64 encoded CAs that will be added to the trust store on nodes with the Custom CA Trust feature enabled. For more information see [Custom CA Trust Certificates](https://learn.microsoft.com/en-us/azure/aks/custom-certificate-authority)
             */
            customCATrustCertificates?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Microsoft Defender settings for the security profile.
             */
            defender?: pulumi.Input<v20230702preview.ManagedClusterSecurityProfileDefenderArgs>;
            /**
             * Image Cleaner settings for the security profile.
             */
            imageCleaner?: pulumi.Input<v20230702preview.ManagedClusterSecurityProfileImageCleanerArgs>;
            /**
             * Image integrity is a feature that works with Azure Policy to verify image integrity by signature. This will not have any effect unless Azure Policy is applied to enforce image signatures. See https://aka.ms/aks/image-integrity for how to use this feature via policy.
             */
            imageIntegrity?: pulumi.Input<v20230702preview.ManagedClusterSecurityProfileImageIntegrityArgs>;
            /**
             * [Node Restriction](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#noderestriction) settings for the security profile.
             */
            nodeRestriction?: pulumi.Input<v20230702preview.ManagedClusterSecurityProfileNodeRestrictionArgs>;
            /**
             * Workload identity settings for the security profile. Workload identity enables Kubernetes applications to access Azure cloud resources securely with Azure AD. See https://aka.ms/aks/wi for more details.
             */
            workloadIdentity?: pulumi.Input<v20230702preview.ManagedClusterSecurityProfileWorkloadIdentityArgs>;
        }
        /**
         * managedClusterSecurityProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterSecurityProfileArgs
         */
        export function managedClusterSecurityProfileArgsProvideDefaults(val: ManagedClusterSecurityProfileArgs): ManagedClusterSecurityProfileArgs {
            return {
                ...val,
                azureKeyVaultKms: (val.azureKeyVaultKms ? pulumi.output(val.azureKeyVaultKms).apply(v20230702preview.azureKeyVaultKmsArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Microsoft Defender settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileDefenderArgs {
            /**
             * Resource ID of the Log Analytics workspace to be associated with Microsoft Defender. When Microsoft Defender is enabled, this field is required and must be a valid workspace resource ID. When Microsoft Defender is disabled, leave the field empty.
             */
            logAnalyticsWorkspaceResourceId?: pulumi.Input<string>;
            /**
             * Microsoft Defender threat detection for Cloud settings for the security profile.
             */
            securityMonitoring?: pulumi.Input<v20230702preview.ManagedClusterSecurityProfileDefenderSecurityMonitoringArgs>;
        }

        /**
         * Microsoft Defender settings for the security profile threat detection.
         */
        export interface ManagedClusterSecurityProfileDefenderSecurityMonitoringArgs {
            /**
             * Whether to enable Defender threat detection
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * Image Cleaner removes unused images from nodes, freeing up disk space and helping to reduce attack surface area. Here are settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileImageCleanerArgs {
            /**
             * Whether to enable Image Cleaner on AKS cluster.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Image Cleaner scanning interval in hours.
             */
            intervalHours?: pulumi.Input<number>;
        }

        /**
         * Image integrity related settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileImageIntegrityArgs {
            /**
             * Whether to enable image integrity. The default value is false.
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * Node Restriction settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileNodeRestrictionArgs {
            /**
             * Whether to enable Node Restriction
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * Workload identity settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileWorkloadIdentityArgs {
            /**
             * Whether to enable workload identity.
             */
            enabled?: pulumi.Input<boolean>;
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
         * Storage profile for the container service cluster.
         */
        export interface ManagedClusterStorageProfileArgs {
            /**
             * AzureBlob CSI Driver settings for the storage profile.
             */
            blobCSIDriver?: pulumi.Input<v20230702preview.ManagedClusterStorageProfileBlobCSIDriverArgs>;
            /**
             * AzureDisk CSI Driver settings for the storage profile.
             */
            diskCSIDriver?: pulumi.Input<v20230702preview.ManagedClusterStorageProfileDiskCSIDriverArgs>;
            /**
             * AzureFile CSI Driver settings for the storage profile.
             */
            fileCSIDriver?: pulumi.Input<v20230702preview.ManagedClusterStorageProfileFileCSIDriverArgs>;
            /**
             * Snapshot Controller settings for the storage profile.
             */
            snapshotController?: pulumi.Input<v20230702preview.ManagedClusterStorageProfileSnapshotControllerArgs>;
        }

        /**
         * AzureBlob CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileBlobCSIDriverArgs {
            /**
             * Whether to enable AzureBlob CSI Driver. The default value is false.
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * AzureDisk CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileDiskCSIDriverArgs {
            /**
             * Whether to enable AzureDisk CSI Driver. The default value is true.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * The version of AzureDisk CSI Driver. The default value is v1.
             */
            version?: pulumi.Input<string>;
        }

        /**
         * AzureFile CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileFileCSIDriverArgs {
            /**
             * Whether to enable AzureFile CSI Driver. The default value is true.
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * Snapshot Controller settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileSnapshotControllerArgs {
            /**
             * Whether to enable Snapshot Controller. The default value is true.
             */
            enabled?: pulumi.Input<boolean>;
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
             * The Windows gMSA Profile in the Managed Cluster.
             */
            gmsaProfile?: pulumi.Input<v20230702preview.WindowsGmsaProfileArgs>;
            /**
             * The license type to use for Windows VMs. See [Azure Hybrid User Benefits](https://azure.microsoft.com/pricing/hybrid-benefit/faq/) for more details.
             */
            licenseType?: pulumi.Input<string | enums.v20230702preview.LicenseType>;
        }

        /**
         * Workload Auto-scaler profile for the managed cluster.
         */
        export interface ManagedClusterWorkloadAutoScalerProfileArgs {
            /**
             * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
             */
            keda?: pulumi.Input<v20230702preview.ManagedClusterWorkloadAutoScalerProfileKedaArgs>;
            verticalPodAutoscaler?: pulumi.Input<v20230702preview.ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs>;
        }
        /**
         * managedClusterWorkloadAutoScalerProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterWorkloadAutoScalerProfileArgs
         */
        export function managedClusterWorkloadAutoScalerProfileArgsProvideDefaults(val: ManagedClusterWorkloadAutoScalerProfileArgs): ManagedClusterWorkloadAutoScalerProfileArgs {
            return {
                ...val,
                verticalPodAutoscaler: (val.verticalPodAutoscaler ? pulumi.output(val.verticalPodAutoscaler).apply(v20230702preview.managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgsProvideDefaults) : undefined),
            };
        }

        /**
         * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
         */
        export interface ManagedClusterWorkloadAutoScalerProfileKedaArgs {
            /**
             * Whether to enable KEDA.
             */
            enabled: pulumi.Input<boolean>;
        }

        export interface ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs {
            /**
             * Whether to enable VPA. Default value is false.
             */
            enabled: pulumi.Input<boolean>;
        }
        /**
         * managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgsProvideDefaults sets the appropriate defaults for ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs
         */
        export function managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgsProvideDefaults(val: ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs): ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs {
            return {
                ...val,
                enabled: (val.enabled) ?? false,
            };
        }

        /**
         * This addon can be used to configure network monitoring and generate network monitoring data in Prometheus format
         */
        export interface NetworkMonitoringArgs {
            /**
             * Enable or disable the network monitoring plugin on the cluster
             */
            enabled?: pulumi.Input<boolean>;
        }

        /**
         * The port range.
         */
        export interface PortRangeArgs {
            /**
             * The maximum port that is included in the range. It should be ranged from 1 to 65535, and be greater than or equal to portStart.
             */
            portEnd?: pulumi.Input<number>;
            /**
             * The minimum port that is included in the range. It should be ranged from 1 to 65535, and be less than or equal to portEnd.
             */
            portStart?: pulumi.Input<number>;
            /**
             * The network protocol of the port.
             */
            protocol?: pulumi.Input<string | enums.v20230702preview.Protocol>;
        }

        /**
         * Describes the Power State of the cluster
         */
        export interface PowerStateArgs {
            /**
             * Tells whether the cluster is Running or Stopped
             */
            code?: pulumi.Input<string | enums.v20230702preview.Code>;
        }

        /**
         * Private endpoint which a connection belongs to.
         */
        export interface PrivateEndpointArgs {
            /**
             * The resource ID of the private endpoint
             */
            id?: pulumi.Input<string>;
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
         * The state of a private link service connection.
         */
        export interface PrivateLinkServiceConnectionStateArgs {
            /**
             * The private link service connection description.
             */
            description?: pulumi.Input<string>;
            /**
             * The private link service connection status.
             */
            status?: pulumi.Input<string | enums.v20230702preview.ConnectionStatus>;
        }

        /**
         * For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'.
         */
        export interface RelativeMonthlyScheduleArgs {
            /**
             * Specifies on which day of the week the maintenance occurs.
             */
            dayOfWeek: pulumi.Input<string | enums.v20230702preview.WeekDay>;
            /**
             * Specifies the number of months between each set of occurrences.
             */
            intervalMonths: pulumi.Input<number>;
            /**
             * Specifies on which instance of the allowed days specified in daysOfWeek the maintenance occurs.
             */
            weekIndex: pulumi.Input<string | enums.v20230702preview.Type>;
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
         * One and only one of the schedule types should be specified. Choose either 'daily', 'weekly', 'absoluteMonthly' or 'relativeMonthly' for your maintenance schedule.
         */
        export interface ScheduleArgs {
            /**
             * For schedules like: 'recur every month on the 15th' or 'recur every 3 months on the 20th'.
             */
            absoluteMonthly?: pulumi.Input<v20230702preview.AbsoluteMonthlyScheduleArgs>;
            /**
             * For schedules like: 'recur every day' or 'recur every 3 days'.
             */
            daily?: pulumi.Input<v20230702preview.DailyScheduleArgs>;
            /**
             * For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'.
             */
            relativeMonthly?: pulumi.Input<v20230702preview.RelativeMonthlyScheduleArgs>;
            /**
             * For schedules like: 'recur every Monday' or 'recur every 3 weeks on Wednesday'.
             */
            weekly?: pulumi.Input<v20230702preview.WeeklyScheduleArgs>;
        }

        /**
         * Service mesh profile for a managed cluster.
         */
        export interface ServiceMeshProfileArgs {
            /**
             * Istio service mesh configuration.
             */
            istio?: pulumi.Input<v20230702preview.IstioServiceMeshArgs>;
            /**
             * Mode of the service mesh.
             */
            mode: pulumi.Input<string | enums.v20230702preview.ServiceMeshMode>;
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
         * Time in a week.
         */
        export interface TimeInWeekArgs {
            /**
             * The day of the week.
             */
            day?: pulumi.Input<string | enums.v20230702preview.WeekDay>;
            /**
             * Each integer hour represents a time range beginning at 0m after the hour ending at the next hour (non-inclusive). 0 corresponds to 00:00 UTC, 23 corresponds to 23:00 UTC. Specifying [0, 1] means the 00:00 - 02:00 UTC time range.
             */
            hourSlots?: pulumi.Input<pulumi.Input<number>[]>;
        }

        /**
         * For example, between 2021-05-25T13:00:00Z and 2021-05-25T14:00:00Z.
         */
        export interface TimeSpanArgs {
            /**
             * The end of a time span
             */
            end?: pulumi.Input<string>;
            /**
             * The start of a time span
             */
            start?: pulumi.Input<string>;
        }

        /**
         * Settings for overrides when upgrading a cluster.
         */
        export interface UpgradeOverrideSettingsArgs {
            /**
             * Whether to force upgrade the cluster. Note that this option instructs upgrade operation to bypass upgrade protections such as checking for deprecated API usage. Enable this option only with caution.
             */
            forceUpgrade?: pulumi.Input<boolean>;
            /**
             * Until when the overrides are effective. Note that this only matches the start time of an upgrade, and the effectiveness won't change once an upgrade starts even if the `until` expires as upgrade proceeds. This field is not set by default. It must be set for the overrides to take effect.
             */
            until?: pulumi.Input<string>;
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

        /**
         * For schedules like: 'recur every Monday' or 'recur every 3 weeks on Wednesday'.
         */
        export interface WeeklyScheduleArgs {
            /**
             * Specifies on which day of the week the maintenance occurs.
             */
            dayOfWeek: pulumi.Input<string | enums.v20230702preview.WeekDay>;
            /**
             * Specifies the number of weeks between each set of occurrences.
             */
            intervalWeeks: pulumi.Input<number>;
        }

        /**
         * Windows gMSA Profile in the managed cluster.
         */
        export interface WindowsGmsaProfileArgs {
            /**
             * Specifies the DNS server for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
             */
            dnsServer?: pulumi.Input<string>;
            /**
             * Specifies whether to enable Windows gMSA in the managed cluster.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Specifies the root domain name for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
             */
            rootDomainName?: pulumi.Input<string>;
        }

    }
}
