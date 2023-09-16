import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace containerservice {
    /**
     * Settings for upgrading an agentpool
     */
    export interface AgentPoolUpgradeSettingsResponse {
        /**
         * This can either be set to an integer (e.g. '5') or a percentage (e.g. '50%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified, the default is 1. For more information, including best practices, see: https://docs.microsoft.com/azure/aks/upgrade-cluster#customize-node-surge-upgrade
         */
        maxSurge?: string;
    }

    /**
     * Azure Key Vault key management service settings for the security profile.
     */
    export interface AzureKeyVaultKmsResponse {
        /**
         * Whether to enable Azure Key Vault key management service. The default is false.
         */
        enabled?: boolean;
        /**
         * Identifier of Azure Key Vault key. See [key identifier format](https://docs.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates#vault-name-and-object-name) for more details. When Azure Key Vault key management service is enabled, this field is required and must be a valid key identifier. When Azure Key Vault key management service is disabled, leave the field empty.
         */
        keyId?: string;
        /**
         * Network access of key vault. The possible values are `Public` and `Private`. `Public` means the key vault allows public access from all networks. `Private` means the key vault disables public access and enables private link. The default value is `Public`.
         */
        keyVaultNetworkAccess?: string;
        /**
         * Resource ID of key vault. When keyVaultNetworkAccess is `Private`, this field is required and must be a valid resource ID. When keyVaultNetworkAccess is `Public`, leave the field empty.
         */
        keyVaultResourceId?: string;
    }
    /**
     * azureKeyVaultKmsResponseProvideDefaults sets the appropriate defaults for AzureKeyVaultKmsResponse
     */
    export function azureKeyVaultKmsResponseProvideDefaults(val: AzureKeyVaultKmsResponse): AzureKeyVaultKmsResponse {
        return {
            ...val,
            keyVaultNetworkAccess: (val.keyVaultNetworkAccess) ?? "Public",
        };
    }

    /**
     * Profile for Linux VMs in the container service cluster.
     */
    export interface ContainerServiceLinuxProfileResponse {
        /**
         * The administrator username to use for Linux VMs.
         */
        adminUsername: string;
        /**
         * The SSH configuration for Linux-based VMs running on Azure.
         */
        ssh: ContainerServiceSshConfigurationResponse;
    }

    /**
     * Profile of network configuration.
     */
    export interface ContainerServiceNetworkProfileResponse {
        /**
         * An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
         */
        dnsServiceIP?: string;
        /**
         * IP families are used to determine single-stack or dual-stack clusters. For single-stack, the expected value is IPv4. For dual-stack, the expected values are IPv4 and IPv6.
         */
        ipFamilies?: string[];
        /**
         * Profile of the cluster load balancer.
         */
        loadBalancerProfile?: ManagedClusterLoadBalancerProfileResponse;
        /**
         * The default is 'standard'. See [Azure Load Balancer SKUs](https://docs.microsoft.com/azure/load-balancer/skus) for more information about the differences between load balancer SKUs.
         */
        loadBalancerSku?: string;
        /**
         * Profile of the cluster NAT gateway.
         */
        natGatewayProfile?: ManagedClusterNATGatewayProfileResponse;
        /**
         * Network dataplane used in the Kubernetes cluster.
         */
        networkDataplane?: string;
        /**
         * This cannot be specified if networkPlugin is anything other than 'azure'.
         */
        networkMode?: string;
        /**
         * Network plugin used for building the Kubernetes network.
         */
        networkPlugin?: string;
        /**
         * The mode the network plugin should use.
         */
        networkPluginMode?: string;
        /**
         * Network policy used for building the Kubernetes network.
         */
        networkPolicy?: string;
        /**
         * This can only be set at cluster creation time and cannot be changed later. For more information see [egress outbound type](https://docs.microsoft.com/azure/aks/egress-outboundtype).
         */
        outboundType?: string;
        /**
         * A CIDR notation IP range from which to assign pod IPs when kubenet is used.
         */
        podCidr?: string;
        /**
         * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
         */
        podCidrs?: string[];
        /**
         * A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
         */
        serviceCidr?: string;
        /**
         * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking. They must not overlap with any Subnet IP ranges.
         */
        serviceCidrs?: string[];
    }
    /**
     * containerServiceNetworkProfileResponseProvideDefaults sets the appropriate defaults for ContainerServiceNetworkProfileResponse
     */
    export function containerServiceNetworkProfileResponseProvideDefaults(val: ContainerServiceNetworkProfileResponse): ContainerServiceNetworkProfileResponse {
        return {
            ...val,
            dnsServiceIP: (val.dnsServiceIP) ?? "10.0.0.10",
            loadBalancerProfile: (val.loadBalancerProfile ? managedClusterLoadBalancerProfileResponseProvideDefaults(val.loadBalancerProfile) : undefined),
            natGatewayProfile: (val.natGatewayProfile ? managedClusterNATGatewayProfileResponseProvideDefaults(val.natGatewayProfile) : undefined),
            networkPlugin: (val.networkPlugin) ?? "kubenet",
            outboundType: (val.outboundType) ?? "loadBalancer",
            podCidr: (val.podCidr) ?? "10.244.0.0/16",
            serviceCidr: (val.serviceCidr) ?? "10.0.0.0/16",
        };
    }

    /**
     * SSH configuration for Linux-based VMs running on Azure.
     */
    export interface ContainerServiceSshConfigurationResponse {
        /**
         * The list of SSH public keys used to authenticate with Linux-based VMs. A maximum of 1 key may be specified.
         */
        publicKeys: ContainerServiceSshPublicKeyResponse[];
    }

    /**
     * Contains information about SSH certificate public key data.
     */
    export interface ContainerServiceSshPublicKeyResponse {
        /**
         * Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.
         */
        keyData: string;
    }

    /**
     * Data used when creating a target resource from a source resource.
     */
    export interface CreationDataResponse {
        /**
         * This is the ARM ID of the source object to be used to create the target object.
         */
        sourceResourceId?: string;
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
     * The resource management error additional info.
     */
    export interface ErrorAdditionalInfoResponse {
        /**
         * The additional info.
         */
        info: any;
        /**
         * The additional info type.
         */
        type: string;
    }

    /**
     * The error detail.
     */
    export interface ErrorDetailResponse {
        /**
         * The error additional info.
         */
        additionalInfo: ErrorAdditionalInfoResponse[];
        /**
         * The error code.
         */
        code: string;
        /**
         * The error details.
         */
        details: ErrorDetailResponse[];
        /**
         * The error message.
         */
        message: string;
        /**
         * The error target.
         */
        target: string;
    }

    /**
     * The complex type of the extended location.
     */
    export interface ExtendedLocationResponse {
        /**
         * The name of the extended location.
         */
        name?: string;
        /**
         * The type of the extended location.
         */
        type?: string;
    }

    /**
     * One credential result item.
     */
    export interface FleetCredentialResultResponse {
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
     * The FleetHubProfile configures the fleet hub.
     */
    export interface FleetHubProfileResponse {
        /**
         * DNS prefix used to create the FQDN for the Fleet hub.
         */
        dnsPrefix?: string;
        /**
         * The FQDN of the Fleet hub.
         */
        fqdn: string;
        /**
         * The Kubernetes version of the Fleet hub.
         */
        kubernetesVersion: string;
    }

    /**
     * See [AKS custom node configuration](https://docs.microsoft.com/azure/aks/custom-node-configuration) for more details.
     */
    export interface KubeletConfigResponse {
        /**
         * Allowed list of unsafe sysctls or unsafe sysctl patterns (ending in `*`).
         */
        allowedUnsafeSysctls?: string[];
        /**
         * The maximum number of container log files that can be present for a container. The number must be ≥ 2.
         */
        containerLogMaxFiles?: number;
        /**
         * The maximum size (e.g. 10Mi) of container log file before it is rotated.
         */
        containerLogMaxSizeMB?: number;
        /**
         * The default is true.
         */
        cpuCfsQuota?: boolean;
        /**
         * The default is '100ms.' Valid values are a sequence of decimal numbers with an optional fraction and a unit suffix. For example: '300ms', '2h45m'. Supported units are 'ns', 'us', 'ms', 's', 'm', and 'h'.
         */
        cpuCfsQuotaPeriod?: string;
        /**
         * The default is 'none'. See [Kubernetes CPU management policies](https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/#cpu-management-policies) for more information. Allowed values are 'none' and 'static'.
         */
        cpuManagerPolicy?: string;
        /**
         * If set to true it will make the Kubelet fail to start if swap is enabled on the node.
         */
        failSwapOn?: boolean;
        /**
         * To disable image garbage collection, set to 100. The default is 85%
         */
        imageGcHighThreshold?: number;
        /**
         * This cannot be set higher than imageGcHighThreshold. The default is 80%
         */
        imageGcLowThreshold?: number;
        /**
         * The maximum number of processes per pod.
         */
        podMaxPids?: number;
        /**
         * For more information see [Kubernetes Topology Manager](https://kubernetes.io/docs/tasks/administer-cluster/topology-manager). The default is 'none'. Allowed values are 'none', 'best-effort', 'restricted', and 'single-numa-node'.
         */
        topologyManagerPolicy?: string;
    }

    /**
     * See [AKS custom node configuration](https://docs.microsoft.com/azure/aks/custom-node-configuration) for more details.
     */
    export interface LinuxOSConfigResponse {
        /**
         * The size in MB of a swap file that will be created on each node.
         */
        swapFileSizeMB?: number;
        /**
         * Sysctl settings for Linux agent nodes.
         */
        sysctls?: SysctlConfigResponse;
        /**
         * Valid values are 'always', 'defer', 'defer+madvise', 'madvise' and 'never'. The default is 'madvise'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
         */
        transparentHugePageDefrag?: string;
        /**
         * Valid values are 'always', 'madvise', and 'never'. The default is 'always'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
         */
        transparentHugePageEnabled?: string;
    }

    /**
     * For more details see [managed AAD on AKS](https://docs.microsoft.com/azure/aks/managed-aad).
     */
    export interface ManagedClusterAADProfileResponse {
        /**
         * The list of AAD group object IDs that will have admin role of the cluster.
         */
        adminGroupObjectIDs?: string[];
        /**
         * (DEPRECATED) The client AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
         */
        clientAppID?: string;
        /**
         * Whether to enable Azure RBAC for Kubernetes authorization.
         */
        enableAzureRBAC?: boolean;
        /**
         * Whether to enable managed AAD.
         */
        managed?: boolean;
        /**
         * (DEPRECATED) The server AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
         */
        serverAppID?: string;
        /**
         * (DEPRECATED) The server AAD application secret. Learn more at https://aka.ms/aks/aad-legacy.
         */
        serverAppSecret?: string;
        /**
         * The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription.
         */
        tenantID?: string;
    }

    /**
     * Access profile for managed cluster API server.
     */
    export interface ManagedClusterAPIServerAccessProfileResponse {
        /**
         * IP ranges are specified in CIDR format, e.g. 137.117.106.88/29. This feature is not compatible with clusters that use Public IP Per Node, or clusters that are using a Basic Load Balancer. For more information see [API server authorized IP ranges](https://docs.microsoft.com/azure/aks/api-server-authorized-ip-ranges).
         */
        authorizedIPRanges?: string[];
        /**
         * Whether to disable run command for the cluster or not.
         */
        disableRunCommand?: boolean;
        /**
         * For more details, see [Creating a private AKS cluster](https://docs.microsoft.com/azure/aks/private-clusters).
         */
        enablePrivateCluster?: boolean;
        /**
         * Whether to create additional public FQDN for private cluster or not.
         */
        enablePrivateClusterPublicFQDN?: boolean;
        /**
         * The default is System. For more details see [configure private DNS zone](https://docs.microsoft.com/azure/aks/private-clusters#configure-private-dns-zone). Allowed values are 'system' and 'none'.
         */
        privateDNSZone?: string;
    }

    /**
     * A Kubernetes add-on profile for a managed cluster.
     */
    export interface ManagedClusterAddonProfileResponse {
        /**
         * Key-value pairs for configuring an add-on.
         */
        config?: {[key: string]: string};
        /**
         * Whether the add-on is enabled or not.
         */
        enabled: boolean;
        /**
         * Information of user assigned identity used by this add-on.
         */
        identity: ManagedClusterAddonProfileResponseIdentity;
    }

    /**
     * Information of user assigned identity used by this add-on.
     */
    export interface ManagedClusterAddonProfileResponseIdentity {
        /**
         * The client ID of the user assigned identity.
         */
        clientId?: string;
        /**
         * The object ID of the user assigned identity.
         */
        objectId?: string;
        /**
         * The resource ID of the user assigned identity.
         */
        resourceId?: string;
    }

    /**
     * Profile for the container service agent pool.
     */
    export interface ManagedClusterAgentPoolProfileResponse {
        /**
         * The list of Availability zones to use for nodes. This can only be specified if the AgentPoolType property is 'VirtualMachineScaleSets'.
         */
        availabilityZones?: string[];
        /**
         * Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 1000 (inclusive) for user pools and in the range of 1 to 1000 (inclusive) for system pools. The default value is 1.
         */
        count?: number;
        /**
         * CreationData to be used to specify the source Snapshot ID if the node pool will be created/upgraded using a snapshot.
         */
        creationData?: CreationDataResponse;
        /**
         * If orchestratorVersion is a fully specified version <major.minor.patch>, this field will be exactly equal to it. If orchestratorVersion is <major.minor>, this field will contain the full <major.minor.patch> version being used.
         */
        currentOrchestratorVersion: string;
        /**
         * Whether to enable auto-scaler
         */
        enableAutoScaling?: boolean;
        /**
         * This is only supported on certain VM sizes and in certain Azure regions. For more information, see: https://docs.microsoft.com/azure/aks/enable-host-encryption
         */
        enableEncryptionAtHost?: boolean;
        /**
         * See [Add a FIPS-enabled node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#add-a-fips-enabled-node-pool-preview) for more details.
         */
        enableFIPS?: boolean;
        /**
         * Some scenarios may require nodes in a node pool to receive their own dedicated public IP addresses. A common scenario is for gaming workloads, where a console needs to make a direct connection to a cloud virtual machine to minimize hops. For more information see [assigning a public IP per node](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#assign-a-public-ip-per-node-for-your-node-pools). The default is false.
         */
        enableNodePublicIP?: boolean;
        /**
         * Whether to enable UltraSSD
         */
        enableUltraSSD?: boolean;
        /**
         * GPUInstanceProfile to be used to specify GPU MIG instance profile for supported GPU VM SKU.
         */
        gpuInstanceProfile?: string;
        /**
         * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}. For more information see [Azure dedicated hosts](https://docs.microsoft.com/azure/virtual-machines/dedicated-hosts).
         */
        hostGroupID?: string;
        /**
         * The Kubelet configuration on the agent pool nodes.
         */
        kubeletConfig?: KubeletConfigResponse;
        /**
         * Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage.
         */
        kubeletDiskType?: string;
        /**
         * The OS configuration of Linux agent nodes.
         */
        linuxOSConfig?: LinuxOSConfigResponse;
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
         * A cluster must have at least one 'System' Agent Pool at all times. For additional information on agent pool restrictions and best practices, see: https://docs.microsoft.com/azure/aks/use-system-pools
         */
        mode?: string;
        /**
         * Windows agent pool names must be 6 characters or less.
         */
        name: string;
        /**
         * The version of node image
         */
        nodeImageVersion: string;
        /**
         * The node labels to be persisted across all nodes in agent pool.
         */
        nodeLabels?: {[key: string]: string};
        /**
         * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIPPrefixName}
         */
        nodePublicIPPrefixID?: string;
        /**
         * The taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
         */
        nodeTaints?: string[];
        /**
         * Both patch version <major.minor.patch> (e.g. 1.20.13) and <major.minor> (e.g. 1.20) are supported. When <major.minor> is specified, the latest supported GA patch version is chosen automatically. Updating the cluster with the same <major.minor> once it has been created (e.g. 1.14.x -> 1.14) will not trigger an upgrade, even if a newer patch version is available. As a best practice, you should upgrade all node pools in an AKS cluster to the same Kubernetes version. The node pool version must have the same major version as the control plane. The node pool minor version must be within two minor versions of the control plane version. The node pool version cannot be greater than the control plane version. For more information see [upgrading a node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#upgrade-a-node-pool).
         */
        orchestratorVersion?: string;
        /**
         * OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
         */
        osDiskSizeGB?: number;
        /**
         * The default is 'Ephemeral' if the VM supports it and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation. For more information see [Ephemeral OS](https://docs.microsoft.com/azure/aks/cluster-configuration#ephemeral-os).
         */
        osDiskType?: string;
        /**
         * Specifies the OS SKU used by the agent pool. The default is Ubuntu if OSType is Linux. The default is Windows2019 when Kubernetes <= 1.24 or Windows2022 when Kubernetes >= 1.25 if OSType is Windows.
         */
        osSKU?: string;
        /**
         * The operating system type. The default is Linux.
         */
        osType?: string;
        /**
         * If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
         */
        podSubnetID?: string;
        /**
         * When an Agent Pool is first created it is initially Running. The Agent Pool can be stopped by setting this field to Stopped. A stopped Agent Pool stops all of its VMs and does not accrue billing charges. An Agent Pool can only be stopped if it is Running and provisioning state is Succeeded
         */
        powerState?: PowerStateResponse;
        /**
         * The current deployment or provisioning state.
         */
        provisioningState: string;
        /**
         * The ID for Proximity Placement Group.
         */
        proximityPlacementGroupID?: string;
        /**
         * This also effects the cluster autoscaler behavior. If not specified, it defaults to Delete.
         */
        scaleDownMode?: string;
        /**
         * This cannot be specified unless the scaleSetPriority is 'Spot'. If not specified, the default is 'Delete'.
         */
        scaleSetEvictionPolicy?: string;
        /**
         * The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'.
         */
        scaleSetPriority?: string;
        /**
         * Possible values are any decimal value greater than zero or -1 which indicates the willingness to pay any on-demand price. For more details on spot pricing, see [spot VMs pricing](https://docs.microsoft.com/azure/virtual-machines/spot-vms#pricing)
         */
        spotMaxPrice?: number;
        /**
         * The tags to be persisted on the agent pool virtual machine scale set.
         */
        tags?: {[key: string]: string};
        /**
         * The type of Agent Pool.
         */
        type?: string;
        /**
         * Settings for upgrading the agentpool
         */
        upgradeSettings?: AgentPoolUpgradeSettingsResponse;
        /**
         * VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. For more details on restricted VM sizes, see: https://docs.microsoft.com/azure/aks/quotas-skus-regions
         */
        vmSize?: string;
        /**
         * If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
         */
        vnetSubnetID?: string;
        /**
         * Determines the type of workload a node can run.
         */
        workloadRuntime?: string;
    }

    /**
     * Auto upgrade profile for a managed cluster.
     */
    export interface ManagedClusterAutoUpgradeProfileResponse {
        /**
         * For more information see [setting the AKS cluster auto-upgrade channel](https://docs.microsoft.com/azure/aks/upgrade-cluster#set-auto-upgrade-channel).
         */
        upgradeChannel?: string;
    }

    /**
     * Kube State Metrics profile for the Azure Managed Prometheus addon. These optional settings are for the kube-state-metrics pod that is deployed with the addon. See aka.ms/AzureManagedPrometheus-optional-parameters for details.
     */
    export interface ManagedClusterAzureMonitorProfileKubeStateMetricsResponse {
        /**
         * Comma-separated list of Kubernetes annotation keys that will be used in the resource's labels metric (Example: 'namespaces=[kubernetes.io/team,...],pods=[kubernetes.io/team],...'). By default the metric contains only resource name and namespace labels.
         */
        metricAnnotationsAllowList?: string;
        /**
         * Comma-separated list of additional Kubernetes label keys that will be used in the resource's labels metric (Example: 'namespaces=[k8s-label-1,k8s-label-n,...],pods=[app],...'). By default the metric contains only resource name and namespace labels.
         */
        metricLabelsAllowlist?: string;
    }

    /**
     * Metrics profile for the Azure Monitor managed service for Prometheus addon. Collect out-of-the-box Kubernetes infrastructure metrics to send to an Azure Monitor Workspace and configure additional scraping for custom targets. See aka.ms/AzureManagedPrometheus for an overview.
     */
    export interface ManagedClusterAzureMonitorProfileMetricsResponse {
        /**
         * Whether to enable or disable the Azure Managed Prometheus addon for Prometheus monitoring. See aka.ms/AzureManagedPrometheus-aks-enable for details on enabling and disabling.
         */
        enabled: boolean;
        /**
         * Kube State Metrics profile for the Azure Managed Prometheus addon. These optional settings are for the kube-state-metrics pod that is deployed with the addon. See aka.ms/AzureManagedPrometheus-optional-parameters for details.
         */
        kubeStateMetrics?: ManagedClusterAzureMonitorProfileKubeStateMetricsResponse;
    }

    /**
     * Azure Monitor addon profiles for monitoring the managed cluster.
     */
    export interface ManagedClusterAzureMonitorProfileResponse {
        /**
         * Metrics profile for the Azure Monitor managed service for Prometheus addon. Collect out-of-the-box Kubernetes infrastructure metrics to send to an Azure Monitor Workspace and configure additional scraping for custom targets. See aka.ms/AzureManagedPrometheus for an overview.
         */
        metrics?: ManagedClusterAzureMonitorProfileMetricsResponse;
    }

    /**
     * Cluster HTTP proxy configuration.
     */
    export interface ManagedClusterHTTPProxyConfigResponse {
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
    }

    /**
     * Identity for the managed cluster.
     */
    export interface ManagedClusterIdentityResponse {
        /**
         * The principal id of the system assigned identity which is used by master components.
         */
        principalId: string;
        /**
         * The tenant id of the system assigned identity which is used by master components.
         */
        tenantId: string;
        /**
         * For more information see [use managed identities in AKS](https://docs.microsoft.com/azure/aks/use-managed-identity).
         */
        type?: string;
        /**
         * The keys must be ARM resource IDs in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: {[key: string]: ManagedClusterIdentityResponseUserAssignedIdentities};
    }

    export interface ManagedClusterIdentityResponseUserAssignedIdentities {
        /**
         * The client id of user assigned identity.
         */
        clientId: string;
        /**
         * The principal id of user assigned identity.
         */
        principalId: string;
    }

    /**
     * Profile of the managed cluster load balancer.
     */
    export interface ManagedClusterLoadBalancerProfileResponse {
        /**
         * The desired number of allocated SNAT ports per VM. Allowed values are in the range of 0 to 64000 (inclusive). The default value is 0 which results in Azure dynamically allocating ports.
         */
        allocatedOutboundPorts?: number;
        /**
         * The effective outbound IP resources of the cluster load balancer.
         */
        effectiveOutboundIPs?: ResourceReferenceResponse[];
        /**
         * Enable multiple standard load balancers per AKS cluster or not.
         */
        enableMultipleStandardLoadBalancers?: boolean;
        /**
         * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 30 minutes.
         */
        idleTimeoutInMinutes?: number;
        /**
         * Desired managed outbound IPs for the cluster load balancer.
         */
        managedOutboundIPs?: ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs;
        /**
         * Desired outbound IP Prefix resources for the cluster load balancer.
         */
        outboundIPPrefixes?: ManagedClusterLoadBalancerProfileResponseOutboundIPPrefixes;
        /**
         * Desired outbound IP resources for the cluster load balancer.
         */
        outboundIPs?: ManagedClusterLoadBalancerProfileResponseOutboundIPs;
    }
    /**
     * managedClusterLoadBalancerProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileResponse
     */
    export function managedClusterLoadBalancerProfileResponseProvideDefaults(val: ManagedClusterLoadBalancerProfileResponse): ManagedClusterLoadBalancerProfileResponse {
        return {
            ...val,
            allocatedOutboundPorts: (val.allocatedOutboundPorts) ?? 0,
            idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 30,
            managedOutboundIPs: (val.managedOutboundIPs ? managedClusterLoadBalancerProfileResponseManagedOutboundIPsProvideDefaults(val.managedOutboundIPs) : undefined),
        };
    }

    /**
     * Desired managed outbound IPs for the cluster load balancer.
     */
    export interface ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs {
        /**
         * The desired number of IPv4 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1. 
         */
        count?: number;
        /**
         * The desired number of IPv6 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 0 for single-stack and 1 for dual-stack. 
         */
        countIPv6?: number;
    }
    /**
     * managedClusterLoadBalancerProfileResponseManagedOutboundIPsProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs
     */
    export function managedClusterLoadBalancerProfileResponseManagedOutboundIPsProvideDefaults(val: ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs): ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs {
        return {
            ...val,
            count: (val.count) ?? 1,
            countIPv6: (val.countIPv6) ?? 0,
        };
    }

    /**
     * Desired outbound IP Prefix resources for the cluster load balancer.
     */
    export interface ManagedClusterLoadBalancerProfileResponseOutboundIPPrefixes {
        /**
         * A list of public IP prefix resources.
         */
        publicIPPrefixes?: ResourceReferenceResponse[];
    }

    /**
     * Desired outbound IP resources for the cluster load balancer.
     */
    export interface ManagedClusterLoadBalancerProfileResponseOutboundIPs {
        /**
         * A list of public IP resources.
         */
        publicIPs?: ResourceReferenceResponse[];
    }

    /**
     * Profile of the managed outbound IP resources of the managed cluster.
     */
    export interface ManagedClusterManagedOutboundIPProfileResponse {
        /**
         * The desired number of outbound IPs created/managed by Azure. Allowed values must be in the range of 1 to 16 (inclusive). The default value is 1. 
         */
        count?: number;
    }
    /**
     * managedClusterManagedOutboundIPProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterManagedOutboundIPProfileResponse
     */
    export function managedClusterManagedOutboundIPProfileResponseProvideDefaults(val: ManagedClusterManagedOutboundIPProfileResponse): ManagedClusterManagedOutboundIPProfileResponse {
        return {
            ...val,
            count: (val.count) ?? 1,
        };
    }

    /**
     * Profile of the managed cluster NAT gateway.
     */
    export interface ManagedClusterNATGatewayProfileResponse {
        /**
         * The effective outbound IP resources of the cluster NAT gateway.
         */
        effectiveOutboundIPs?: ResourceReferenceResponse[];
        /**
         * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 4 minutes.
         */
        idleTimeoutInMinutes?: number;
        /**
         * Profile of the managed outbound IP resources of the cluster NAT gateway.
         */
        managedOutboundIPProfile?: ManagedClusterManagedOutboundIPProfileResponse;
    }
    /**
     * managedClusterNATGatewayProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterNATGatewayProfileResponse
     */
    export function managedClusterNATGatewayProfileResponseProvideDefaults(val: ManagedClusterNATGatewayProfileResponse): ManagedClusterNATGatewayProfileResponse {
        return {
            ...val,
            idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 4,
            managedOutboundIPProfile: (val.managedOutboundIPProfile ? managedClusterManagedOutboundIPProfileResponseProvideDefaults(val.managedOutboundIPProfile) : undefined),
        };
    }

    /**
     * The OIDC issuer profile of the Managed Cluster.
     */
    export interface ManagedClusterOIDCIssuerProfileResponse {
        /**
         * Whether the OIDC issuer is enabled.
         */
        enabled?: boolean;
        /**
         * The OIDC issuer url of the Managed Cluster.
         */
        issuerURL: string;
    }

    /**
     * See [disable AAD Pod Identity for a specific Pod/Application](https://azure.github.io/aad-pod-identity/docs/configure/application_exception/) for more details.
     */
    export interface ManagedClusterPodIdentityExceptionResponse {
        /**
         * The name of the pod identity exception.
         */
        name: string;
        /**
         * The namespace of the pod identity exception.
         */
        namespace: string;
        /**
         * The pod labels to match.
         */
        podLabels: {[key: string]: string};
    }

    /**
     * See [use AAD pod identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity) for more details on pod identity integration.
     */
    export interface ManagedClusterPodIdentityProfileResponse {
        /**
         * Running in Kubenet is disabled by default due to the security related nature of AAD Pod Identity and the risks of IP spoofing. See [using Kubenet network plugin with AAD Pod Identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity#using-kubenet-network-plugin-with-azure-active-directory-pod-managed-identities) for more information.
         */
        allowNetworkPluginKubenet?: boolean;
        /**
         * Whether the pod identity addon is enabled.
         */
        enabled?: boolean;
        /**
         * The pod identities to use in the cluster.
         */
        userAssignedIdentities?: ManagedClusterPodIdentityResponse[];
        /**
         * The pod identity exceptions to allow.
         */
        userAssignedIdentityExceptions?: ManagedClusterPodIdentityExceptionResponse[];
    }

    /**
     * An error response from the pod identity provisioning.
     */
    export interface ManagedClusterPodIdentityProvisioningErrorBodyResponse {
        /**
         * An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
         */
        code?: string;
        /**
         * A list of additional details about the error.
         */
        details?: ManagedClusterPodIdentityProvisioningErrorBodyResponse[];
        /**
         * A message describing the error, intended to be suitable for display in a user interface.
         */
        message?: string;
        /**
         * The target of the particular error. For example, the name of the property in error.
         */
        target?: string;
    }

    /**
     * An error response from the pod identity provisioning.
     */
    export interface ManagedClusterPodIdentityProvisioningErrorResponse {
        /**
         * Details about the error.
         */
        error?: ManagedClusterPodIdentityProvisioningErrorBodyResponse;
    }

    /**
     * Details about the pod identity assigned to the Managed Cluster.
     */
    export interface ManagedClusterPodIdentityResponse {
        /**
         * The binding selector to use for the AzureIdentityBinding resource.
         */
        bindingSelector?: string;
        /**
         * The user assigned identity details.
         */
        identity: UserAssignedIdentityResponse;
        /**
         * The name of the pod identity.
         */
        name: string;
        /**
         * The namespace of the pod identity.
         */
        namespace: string;
        provisioningInfo: ManagedClusterPodIdentityResponseProvisioningInfo;
        /**
         * The current provisioning state of the pod identity.
         */
        provisioningState: string;
    }

    export interface ManagedClusterPodIdentityResponseProvisioningInfo {
        /**
         * Pod identity assignment error (if any).
         */
        error?: ManagedClusterPodIdentityProvisioningErrorResponse;
    }

    /**
     * managed cluster properties for snapshot, these properties are read only.
     */
    export interface ManagedClusterPropertiesForSnapshotResponse {
        /**
         * Whether the cluster has enabled Kubernetes Role-Based Access Control or not.
         */
        enableRbac?: boolean;
        /**
         * The current kubernetes version.
         */
        kubernetesVersion?: string;
        /**
         * The current network profile.
         */
        networkProfile: NetworkProfileForSnapshotResponse;
        /**
         * The current managed cluster sku.
         */
        sku?: ManagedClusterSKUResponse;
    }

    /**
     * Parameters to be applied to the cluster-autoscaler when enabled
     */
    export interface ManagedClusterPropertiesResponseAutoScalerProfile {
        /**
         * Valid values are 'true' and 'false'
         */
        balanceSimilarNodeGroups?: string;
        /**
         * If not specified, the default is 'random'. See [expanders](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#what-are-expanders) for more information.
         */
        expander?: string;
        /**
         * The default is 10.
         */
        maxEmptyBulkDelete?: string;
        /**
         * The default is 600.
         */
        maxGracefulTerminationSec?: string;
        /**
         * The default is '15m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
         */
        maxNodeProvisionTime?: string;
        /**
         * The default is 45. The maximum is 100 and the minimum is 0.
         */
        maxTotalUnreadyPercentage?: string;
        /**
         * For scenarios like burst/batch scale where you don't want CA to act before the kubernetes scheduler could schedule all the pods, you can tell CA to ignore unscheduled pods before they're a certain age. The default is '0s'. Values must be an integer followed by a unit ('s' for seconds, 'm' for minutes, 'h' for hours, etc).
         */
        newPodScaleUpDelay?: string;
        /**
         * This must be an integer. The default is 3.
         */
        okTotalUnreadyCount?: string;
        /**
         * The default is '10m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
         */
        scaleDownDelayAfterAdd?: string;
        /**
         * The default is the scan-interval. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
         */
        scaleDownDelayAfterDelete?: string;
        /**
         * The default is '3m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
         */
        scaleDownDelayAfterFailure?: string;
        /**
         * The default is '10m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
         */
        scaleDownUnneededTime?: string;
        /**
         * The default is '20m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
         */
        scaleDownUnreadyTime?: string;
        /**
         * The default is '0.5'.
         */
        scaleDownUtilizationThreshold?: string;
        /**
         * The default is '10'. Values must be an integer number of seconds.
         */
        scanInterval?: string;
        /**
         * The default is true.
         */
        skipNodesWithLocalStorage?: string;
        /**
         * The default is true.
         */
        skipNodesWithSystemPods?: string;
    }

    /**
     * The SKU of a Managed Cluster.
     */
    export interface ManagedClusterSKUResponse {
        /**
         * The name of a managed cluster SKU.
         */
        name?: string;
        /**
         * If not specified, the default is 'Free'. See [AKS Pricing Tier](https://learn.microsoft.com/azure/aks/free-standard-pricing-tiers) for more details.
         */
        tier?: string;
    }

    /**
     * Microsoft Defender settings for the security profile.
     */
    export interface ManagedClusterSecurityProfileDefenderResponse {
        /**
         * Resource ID of the Log Analytics workspace to be associated with Microsoft Defender. When Microsoft Defender is enabled, this field is required and must be a valid workspace resource ID. When Microsoft Defender is disabled, leave the field empty.
         */
        logAnalyticsWorkspaceResourceId?: string;
        /**
         * Microsoft Defender threat detection for Cloud settings for the security profile.
         */
        securityMonitoring?: ManagedClusterSecurityProfileDefenderSecurityMonitoringResponse;
    }

    /**
     * Microsoft Defender settings for the security profile threat detection.
     */
    export interface ManagedClusterSecurityProfileDefenderSecurityMonitoringResponse {
        /**
         * Whether to enable Defender threat detection
         */
        enabled?: boolean;
    }

    /**
     * Image Cleaner removes unused images from nodes, freeing up disk space and helping to reduce attack surface area. Here are settings for the security profile.
     */
    export interface ManagedClusterSecurityProfileImageCleanerResponse {
        /**
         * Whether to enable Image Cleaner on AKS cluster.
         */
        enabled?: boolean;
        /**
         * Image Cleaner scanning interval in hours.
         */
        intervalHours?: number;
    }

    /**
     * Security profile for the container service cluster.
     */
    export interface ManagedClusterSecurityProfileResponse {
        /**
         * Azure Key Vault [key management service](https://kubernetes.io/docs/tasks/administer-cluster/kms-provider/) settings for the security profile.
         */
        azureKeyVaultKms?: AzureKeyVaultKmsResponse;
        /**
         * Microsoft Defender settings for the security profile.
         */
        defender?: ManagedClusterSecurityProfileDefenderResponse;
        /**
         * Image Cleaner settings for the security profile.
         */
        imageCleaner?: ManagedClusterSecurityProfileImageCleanerResponse;
        /**
         * Workload identity settings for the security profile. Workload identity enables Kubernetes applications to access Azure cloud resources securely with Azure AD. See https://aka.ms/aks/wi for more details.
         */
        workloadIdentity?: ManagedClusterSecurityProfileWorkloadIdentityResponse;
    }
    /**
     * managedClusterSecurityProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterSecurityProfileResponse
     */
    export function managedClusterSecurityProfileResponseProvideDefaults(val: ManagedClusterSecurityProfileResponse): ManagedClusterSecurityProfileResponse {
        return {
            ...val,
            azureKeyVaultKms: (val.azureKeyVaultKms ? azureKeyVaultKmsResponseProvideDefaults(val.azureKeyVaultKms) : undefined),
        };
    }

    /**
     * Workload identity settings for the security profile.
     */
    export interface ManagedClusterSecurityProfileWorkloadIdentityResponse {
        /**
         * Whether to enable workload identity.
         */
        enabled?: boolean;
    }

    /**
     * Information about a service principal identity for the cluster to use for manipulating Azure APIs.
     */
    export interface ManagedClusterServicePrincipalProfileResponse {
        /**
         * The ID for the service principal.
         */
        clientId: string;
        /**
         * The secret password associated with the service principal in plain text.
         */
        secret?: string;
    }

    /**
     * AzureBlob CSI Driver settings for the storage profile.
     */
    export interface ManagedClusterStorageProfileBlobCSIDriverResponse {
        /**
         * Whether to enable AzureBlob CSI Driver. The default value is false.
         */
        enabled?: boolean;
    }

    /**
     * AzureDisk CSI Driver settings for the storage profile.
     */
    export interface ManagedClusterStorageProfileDiskCSIDriverResponse {
        /**
         * Whether to enable AzureDisk CSI Driver. The default value is true.
         */
        enabled?: boolean;
    }

    /**
     * AzureFile CSI Driver settings for the storage profile.
     */
    export interface ManagedClusterStorageProfileFileCSIDriverResponse {
        /**
         * Whether to enable AzureFile CSI Driver. The default value is true.
         */
        enabled?: boolean;
    }

    /**
     * Storage profile for the container service cluster.
     */
    export interface ManagedClusterStorageProfileResponse {
        /**
         * AzureBlob CSI Driver settings for the storage profile.
         */
        blobCSIDriver?: ManagedClusterStorageProfileBlobCSIDriverResponse;
        /**
         * AzureDisk CSI Driver settings for the storage profile.
         */
        diskCSIDriver?: ManagedClusterStorageProfileDiskCSIDriverResponse;
        /**
         * AzureFile CSI Driver settings for the storage profile.
         */
        fileCSIDriver?: ManagedClusterStorageProfileFileCSIDriverResponse;
        /**
         * Snapshot Controller settings for the storage profile.
         */
        snapshotController?: ManagedClusterStorageProfileSnapshotControllerResponse;
    }

    /**
     * Snapshot Controller settings for the storage profile.
     */
    export interface ManagedClusterStorageProfileSnapshotControllerResponse {
        /**
         * Whether to enable Snapshot Controller. The default value is true.
         */
        enabled?: boolean;
    }

    /**
     * The update to be applied to the ManagedClusters.
     */
    export interface ManagedClusterUpdateResponse {
        /**
         * The upgrade to apply to the ManagedClusters.
         */
        upgrade: ManagedClusterUpgradeSpecResponse;
    }

    /**
     * The upgrade to apply to a ManagedCluster.
     */
    export interface ManagedClusterUpgradeSpecResponse {
        /**
         * The Kubernetes version to upgrade the member clusters to.
         */
        kubernetesVersion?: string;
        /**
         * The upgrade type.
         * Full requires the KubernetesVersion property to be set.
         * NodeImageOnly requires the KubernetesVersion property not to be set.
         */
        type: string;
    }

    /**
     * Profile for Windows VMs in the managed cluster.
     */
    export interface ManagedClusterWindowsProfileResponse {
        /**
         * Specifies the password of the administrator account. <br><br> **Minimum-length:** 8 characters <br><br> **Max-length:** 123 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!"
         */
        adminPassword?: string;
        /**
         * Specifies the name of the administrator account. <br><br> **Restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length:** 1 character <br><br> **Max-length:** 20 characters
         */
        adminUsername: string;
        /**
         * For more details on CSI proxy, see the [CSI proxy GitHub repo](https://github.com/kubernetes-csi/csi-proxy).
         */
        enableCSIProxy?: boolean;
        /**
         * The Windows gMSA Profile in the Managed Cluster.
         */
        gmsaProfile?: WindowsGmsaProfileResponse;
        /**
         * The license type to use for Windows VMs. See [Azure Hybrid User Benefits](https://azure.microsoft.com/pricing/hybrid-benefit/faq/) for more details.
         */
        licenseType?: string;
    }

    /**
     * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
     */
    export interface ManagedClusterWorkloadAutoScalerProfileKedaResponse {
        /**
         * Whether to enable KEDA.
         */
        enabled: boolean;
    }

    /**
     * Workload Auto-scaler profile for the managed cluster.
     */
    export interface ManagedClusterWorkloadAutoScalerProfileResponse {
        /**
         * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
         */
        keda?: ManagedClusterWorkloadAutoScalerProfileKedaResponse;
    }

    /**
     * The status of a member update operation.
     */
    export interface MemberUpdateStatusResponse {
        /**
         * The Azure resource id of the target Kubernetes cluster.
         */
        clusterResourceId: string;
        /**
         * The name of the FleetMember.
         */
        name: string;
        /**
         * The operation resource id of the latest attempt to perform the operation.
         */
        operationId: string;
        /**
         * The status of the MemberUpdate operation.
         */
        status: UpdateStatusResponse;
    }

    /**
     * network profile for managed cluster snapshot, these properties are read only.
     */
    export interface NetworkProfileForSnapshotResponse {
        /**
         * loadBalancerSku for managed cluster snapshot.
         */
        loadBalancerSku?: string;
        /**
         * networkMode for managed cluster snapshot.
         */
        networkMode?: string;
        /**
         * networkPlugin for managed cluster snapshot.
         */
        networkPlugin?: string;
        /**
         * NetworkPluginMode for managed cluster snapshot.
         */
        networkPluginMode?: string;
        /**
         * networkPolicy for managed cluster snapshot.
         */
        networkPolicy?: string;
    }

    /**
     * Represents the OpenShift networking configuration
     */
    export interface NetworkProfileResponse {
        /**
         * CIDR of subnet used to create PLS needed for management of the cluster
         */
        managementSubnetCidr?: string;
        /**
         * CIDR for the OpenShift Vnet.
         */
        vnetCidr?: string;
        /**
         * ID of the Vnet created for OSA cluster.
         */
        vnetId?: string;
    }
    /**
     * networkProfileResponseProvideDefaults sets the appropriate defaults for NetworkProfileResponse
     */
    export function networkProfileResponseProvideDefaults(val: NetworkProfileResponse): NetworkProfileResponse {
        return {
            ...val,
            vnetCidr: (val.vnetCidr) ?? "10.0.0.0/8",
        };
    }

    /**
     * Defines further properties on the API.
     */
    export interface OpenShiftAPIPropertiesResponse {
        /**
         * Specifies if API server is public or private.
         */
        privateApiServer?: boolean;
    }

    /**
     * Defines the Identity provider for MS AAD.
     */
    export interface OpenShiftManagedClusterAADIdentityProviderResponse {
        /**
         * The clientId password associated with the provider.
         */
        clientId?: string;
        /**
         * The groupId to be granted cluster admin role.
         */
        customerAdminGroupId?: string;
        /**
         * The kind of the provider.
         * Expected value is 'AADIdentityProvider'.
         */
        kind: "AADIdentityProvider";
        /**
         * The secret password associated with the provider.
         */
        secret?: string;
        /**
         * The tenantId associated with the provider.
         */
        tenantId?: string;
    }

    /**
     * Defines the configuration of the OpenShift cluster VMs.
     */
    export interface OpenShiftManagedClusterAgentPoolProfileResponse {
        /**
         * Number of agents (VMs) to host docker containers.
         */
        count: number;
        /**
         * Unique name of the pool profile in the context of the subscription and resource group.
         */
        name: string;
        /**
         * OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
         */
        osType?: string;
        /**
         * Define the role of the AgentPoolProfile.
         */
        role?: string;
        /**
         * Subnet CIDR for the peering.
         */
        subnetCidr?: string;
        /**
         * Size of agent VMs.
         */
        vmSize: string;
    }
    /**
     * openShiftManagedClusterAgentPoolProfileResponseProvideDefaults sets the appropriate defaults for OpenShiftManagedClusterAgentPoolProfileResponse
     */
    export function openShiftManagedClusterAgentPoolProfileResponseProvideDefaults(val: OpenShiftManagedClusterAgentPoolProfileResponse): OpenShiftManagedClusterAgentPoolProfileResponse {
        return {
            ...val,
            subnetCidr: (val.subnetCidr) ?? "10.0.0.0/24",
        };
    }

    /**
     * Defines all possible authentication profiles for the OpenShift cluster.
     */
    export interface OpenShiftManagedClusterAuthProfileResponse {
        /**
         * Type of authentication profile to use.
         */
        identityProviders?: OpenShiftManagedClusterIdentityProviderResponse[];
    }

    /**
     * Defines the configuration of the identity providers to be used in the OpenShift cluster.
     */
    export interface OpenShiftManagedClusterIdentityProviderResponse {
        /**
         * Name of the provider.
         */
        name?: string;
        /**
         * Configuration of the provider.
         */
        provider?: OpenShiftManagedClusterAADIdentityProviderResponse;
    }

    /**
     * OpenShiftManagedClusterMaterPoolProfile contains configuration for OpenShift master VMs.
     */
    export interface OpenShiftManagedClusterMasterPoolProfileResponse {
        /**
         * Defines further properties on the API.
         */
        apiProperties?: OpenShiftAPIPropertiesResponse;
        /**
         * Number of masters (VMs) to host docker containers. The default value is 3.
         */
        count: number;
        /**
         * Subnet CIDR for the peering.
         */
        subnetCidr?: string;
        /**
         * Size of agent VMs.
         */
        vmSize: string;
    }

    /**
     * Defines the configuration for Log Analytics integration.
     */
    export interface OpenShiftManagedClusterMonitorProfileResponse {
        /**
         * If the Log analytics integration should be turned on or off
         */
        enabled?: boolean;
        /**
         * Azure Resource Manager Resource ID for the Log Analytics workspace to integrate with.
         */
        workspaceResourceID?: string;
    }

    /**
     * Represents an OpenShift router
     */
    export interface OpenShiftRouterProfileResponse {
        /**
         * Auto-allocated FQDN for the OpenShift router.
         */
        fqdn: string;
        /**
         * Name of the router profile.
         */
        name?: string;
        /**
         * DNS subdomain for OpenShift router.
         */
        publicSubdomain: string;
    }

    /**
     * Describes the Power State of the cluster
     */
    export interface PowerStateResponse {
        /**
         * Tells whether the cluster is Running or Stopped
         */
        code?: string;
    }

    /**
     * Private endpoint which a connection belongs to.
     */
    export interface PrivateEndpointResponse {
        /**
         * The resource ID of the private endpoint
         */
        id?: string;
    }

    /**
     * A private link resource
     */
    export interface PrivateLinkResourceResponse {
        /**
         * The group ID of the resource.
         */
        groupId?: string;
        /**
         * The ID of the private link resource.
         */
        id?: string;
        /**
         * The name of the private link resource.
         */
        name?: string;
        /**
         * The private link service ID of the resource, this field is exposed only to NRP internally.
         */
        privateLinkServiceID: string;
        /**
         * The RequiredMembers of the resource
         */
        requiredMembers?: string[];
        /**
         * The resource type.
         */
        type?: string;
    }

    /**
     * The state of a private link service connection.
     */
    export interface PrivateLinkServiceConnectionStateResponse {
        /**
         * The private link service connection description.
         */
        description?: string;
        /**
         * The private link service connection status.
         */
        status?: string;
    }

    /**
     * Used for establishing the purchase context of any 3rd Party artifact through MarketPlace.
     */
    export interface PurchasePlanResponse {
        /**
         * The plan ID.
         */
        name?: string;
        /**
         * Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
         */
        product?: string;
        /**
         * The promotion code.
         */
        promotionCode?: string;
        /**
         * The plan ID.
         */
        publisher?: string;
    }

    /**
     * A reference to an Azure resource.
     */
    export interface ResourceReferenceResponse {
        /**
         * The fully qualified Azure resource id.
         */
        id?: string;
    }

    /**
     * Sysctl settings for Linux agent nodes.
     */
    export interface SysctlConfigResponse {
        /**
         * Sysctl setting fs.aio-max-nr.
         */
        fsAioMaxNr?: number;
        /**
         * Sysctl setting fs.file-max.
         */
        fsFileMax?: number;
        /**
         * Sysctl setting fs.inotify.max_user_watches.
         */
        fsInotifyMaxUserWatches?: number;
        /**
         * Sysctl setting fs.nr_open.
         */
        fsNrOpen?: number;
        /**
         * Sysctl setting kernel.threads-max.
         */
        kernelThreadsMax?: number;
        /**
         * Sysctl setting net.core.netdev_max_backlog.
         */
        netCoreNetdevMaxBacklog?: number;
        /**
         * Sysctl setting net.core.optmem_max.
         */
        netCoreOptmemMax?: number;
        /**
         * Sysctl setting net.core.rmem_default.
         */
        netCoreRmemDefault?: number;
        /**
         * Sysctl setting net.core.rmem_max.
         */
        netCoreRmemMax?: number;
        /**
         * Sysctl setting net.core.somaxconn.
         */
        netCoreSomaxconn?: number;
        /**
         * Sysctl setting net.core.wmem_default.
         */
        netCoreWmemDefault?: number;
        /**
         * Sysctl setting net.core.wmem_max.
         */
        netCoreWmemMax?: number;
        /**
         * Sysctl setting net.ipv4.ip_local_port_range.
         */
        netIpv4IpLocalPortRange?: string;
        /**
         * Sysctl setting net.ipv4.neigh.default.gc_thresh1.
         */
        netIpv4NeighDefaultGcThresh1?: number;
        /**
         * Sysctl setting net.ipv4.neigh.default.gc_thresh2.
         */
        netIpv4NeighDefaultGcThresh2?: number;
        /**
         * Sysctl setting net.ipv4.neigh.default.gc_thresh3.
         */
        netIpv4NeighDefaultGcThresh3?: number;
        /**
         * Sysctl setting net.ipv4.tcp_fin_timeout.
         */
        netIpv4TcpFinTimeout?: number;
        /**
         * Sysctl setting net.ipv4.tcp_keepalive_probes.
         */
        netIpv4TcpKeepaliveProbes?: number;
        /**
         * Sysctl setting net.ipv4.tcp_keepalive_time.
         */
        netIpv4TcpKeepaliveTime?: number;
        /**
         * Sysctl setting net.ipv4.tcp_max_syn_backlog.
         */
        netIpv4TcpMaxSynBacklog?: number;
        /**
         * Sysctl setting net.ipv4.tcp_max_tw_buckets.
         */
        netIpv4TcpMaxTwBuckets?: number;
        /**
         * Sysctl setting net.ipv4.tcp_tw_reuse.
         */
        netIpv4TcpTwReuse?: boolean;
        /**
         * Sysctl setting net.ipv4.tcp_keepalive_intvl.
         */
        netIpv4TcpkeepaliveIntvl?: number;
        /**
         * Sysctl setting net.netfilter.nf_conntrack_buckets.
         */
        netNetfilterNfConntrackBuckets?: number;
        /**
         * Sysctl setting net.netfilter.nf_conntrack_max.
         */
        netNetfilterNfConntrackMax?: number;
        /**
         * Sysctl setting vm.max_map_count.
         */
        vmMaxMapCount?: number;
        /**
         * Sysctl setting vm.swappiness.
         */
        vmSwappiness?: number;
        /**
         * Sysctl setting vm.vfs_cache_pressure.
         */
        vmVfsCachePressure?: number;
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
     * Time in a week.
     */
    export interface TimeInWeekResponse {
        /**
         * The day of the week.
         */
        day?: string;
        /**
         * Each integer hour represents a time range beginning at 0m after the hour ending at the next hour (non-inclusive). 0 corresponds to 00:00 UTC, 23 corresponds to 23:00 UTC. Specifying [0, 1] means the 00:00 - 02:00 UTC time range.
         */
        hourSlots?: number[];
    }

    /**
     * For example, between 2021-05-25T13:00:00Z and 2021-05-25T14:00:00Z.
     */
    export interface TimeSpanResponse {
        /**
         * The end of a time span
         */
        end?: string;
        /**
         * The start of a time span
         */
        start?: string;
    }

    /**
     * A group to be updated.
     */
    export interface UpdateGroupResponse {
        /**
         * The name of the Fleet member group to update. 
         * It should match the name of an existing FleetMember group.
         * A group can only appear once across all UpdateStages in the UpdateRun.
         */
        name: string;
    }

    /**
     * The status of a UpdateGroup.
     */
    export interface UpdateGroupStatusResponse {
        /**
         * The list of member this UpdateGroup updates.
         */
        members: MemberUpdateStatusResponse[];
        /**
         * The name of the UpdateGroup.
         */
        name: string;
        /**
         * The status of the UpdateGroup.
         */
        status: UpdateStatusResponse;
    }

    /**
     * The status of a UpdateRun.
     */
    export interface UpdateRunStatusResponse {
        /**
         * The stages composing an update run. Stages are run sequentially withing an UpdateRun.
         */
        stages: UpdateStageStatusResponse[];
        /**
         * The status of the UpdateRun.
         */
        status: UpdateStatusResponse;
    }

    /**
     * The UpdateRunStrategy configures the sequence of Stages and Groups in which the clusters will be updated.
     */
    export interface UpdateRunStrategyResponse {
        /**
         * The list of stages that compose this update run.
         */
        stages: UpdateStageResponse[];
    }

    /**
     * Contains the groups to be updated by an UpdateRun.
     * Update order:
     * - Sequential between stages: Stages run sequentially. The previous stage must complete before the next one starts.
     * - Parallel within a stage: Groups within a stage run in parallel.
     * - Sequential within a group: Clusters within a group are updated sequentially.
     */
    export interface UpdateStageResponse {
        /**
         * The time in seconds to wait at the end of this stage before starting the next one. Defaults to 0 seconds if unspecified.
         */
        afterStageWaitInSeconds?: number;
        /**
         * A list of group names that compose the stage.
         * The groups will be updated in parallel. Each group name can only appear once in the UpdateRun.
         */
        groups?: UpdateGroupResponse[];
        /**
         * The name of the stage. Must be unique within the UpdateRun.
         */
        name: string;
    }

    /**
     * The status of a UpdateStage.
     */
    export interface UpdateStageStatusResponse {
        /**
         * The status of the wait period configured on the UpdateStage.
         */
        afterStageWaitStatus: WaitStatusResponse;
        /**
         * The list of groups to be updated as part of this UpdateStage.
         */
        groups: UpdateGroupStatusResponse[];
        /**
         * The name of the UpdateStage.
         */
        name: string;
        /**
         * The status of the UpdateStage.
         */
        status: UpdateStatusResponse;
    }

    /**
     * The status for an operation or group of operations.
     */
    export interface UpdateStatusResponse {
        /**
         * The time the operation or group was completed.
         */
        completedTime: string;
        /**
         * The error details when a failure is encountered.
         */
        error: ErrorDetailResponse;
        /**
         * The time the operation or group was started.
         */
        startTime: string;
        /**
         * The State of the operation or group.
         */
        state: string;
    }

    /**
     * Details about a user assigned identity.
     */
    export interface UserAssignedIdentityResponse {
        /**
         * The client ID of the user assigned identity.
         */
        clientId?: string;
        /**
         * The object ID of the user assigned identity.
         */
        objectId?: string;
        /**
         * The resource ID of the user assigned identity.
         */
        resourceId?: string;
    }

    /**
     * The status of the wait duration.
     */
    export interface WaitStatusResponse {
        /**
         * The status of the wait duration.
         */
        status: UpdateStatusResponse;
        /**
         * The wait duration configured in seconds.
         */
        waitDurationInSeconds: number;
    }

    /**
     * Windows gMSA Profile in the managed cluster.
     */
    export interface WindowsGmsaProfileResponse {
        /**
         * Specifies the DNS server for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
         */
        dnsServer?: string;
        /**
         * Specifies whether to enable Windows gMSA in the managed cluster.
         */
        enabled?: boolean;
        /**
         * Specifies the root domain name for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
         */
        rootDomainName?: string;
    }

    export namespace v20190601 {
        /**
         * Profile for Linux VMs in the container service cluster.
         */
        export interface ContainerServiceLinuxProfileResponse {
            /**
             * The administrator username to use for Linux VMs.
             */
            adminUsername: string;
            /**
             * SSH configuration for Linux-based VMs running on Azure.
             */
            ssh: v20190601.ContainerServiceSshConfigurationResponse;
        }

        /**
         * Profile of network configuration.
         */
        export interface ContainerServiceNetworkProfileResponse {
            /**
             * An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
             */
            dnsServiceIP?: string;
            /**
             * A CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the Kubernetes service address range.
             */
            dockerBridgeCidr?: string;
            /**
             * The load balancer sku for the managed cluster.
             */
            loadBalancerSku?: string;
            /**
             * Network plugin used for building Kubernetes network.
             */
            networkPlugin?: string;
            /**
             * Network policy used for building Kubernetes network.
             */
            networkPolicy?: string;
            /**
             * A CIDR notation IP range from which to assign pod IPs when kubenet is used.
             */
            podCidr?: string;
            /**
             * A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
             */
            serviceCidr?: string;
        }
        /**
         * containerServiceNetworkProfileResponseProvideDefaults sets the appropriate defaults for ContainerServiceNetworkProfileResponse
         */
        export function containerServiceNetworkProfileResponseProvideDefaults(val: ContainerServiceNetworkProfileResponse): ContainerServiceNetworkProfileResponse {
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
        export interface ContainerServiceSshConfigurationResponse {
            /**
             * The list of SSH public keys used to authenticate with Linux-based VMs. Only expect one key specified.
             */
            publicKeys: v20190601.ContainerServiceSshPublicKeyResponse[];
        }

        /**
         * Contains information about SSH certificate public key data.
         */
        export interface ContainerServiceSshPublicKeyResponse {
            /**
             * Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.
             */
            keyData: string;
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
         * AADProfile specifies attributes for Azure Active Directory integration.
         */
        export interface ManagedClusterAADProfileResponse {
            /**
             * The client AAD application ID.
             */
            clientAppID: string;
            /**
             * The server AAD application ID.
             */
            serverAppID: string;
            /**
             * The server AAD application secret.
             */
            serverAppSecret?: string;
            /**
             * The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription.
             */
            tenantID?: string;
        }

        /**
         * A Kubernetes add-on profile for a managed cluster.
         */
        export interface ManagedClusterAddonProfileResponse {
            /**
             * Key-value pairs for configuring an add-on.
             */
            config?: {[key: string]: string};
            /**
             * Whether the add-on is enabled or not.
             */
            enabled: boolean;
        }

        /**
         * Profile for the container service agent pool.
         */
        export interface ManagedClusterAgentPoolProfileResponse {
            /**
             * (PREVIEW) Availability zones for nodes. Must use VirtualMachineScaleSets AgentPoolType.
             */
            availabilityZones?: string[];
            /**
             * Number of agents (VMs) to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
             */
            count?: number;
            /**
             * Whether to enable auto-scaler
             */
            enableAutoScaling?: boolean;
            /**
             * Enable public IP for nodes
             */
            enableNodePublicIP?: boolean;
            /**
             * Maximum number of nodes for auto-scaling
             */
            maxCount?: number;
            /**
             * Maximum number of pods that can run on a node.
             */
            maxPods?: number;
            /**
             * Minimum number of nodes for auto-scaling
             */
            minCount?: number;
            /**
             * Unique name of the agent pool profile in the context of the subscription and resource group.
             */
            name: string;
            /**
             * Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
             */
            nodeTaints?: string[];
            /**
             * Version of orchestrator specified when creating the managed cluster.
             */
            orchestratorVersion?: string;
            /**
             * OS Disk Size in GB to be used to specify the disk size for every machine in this master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
             */
            osDiskSizeGB?: number;
            /**
             * OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
             */
            osType?: string;
            /**
             * The current deployment or provisioning state, which only appears in the response.
             */
            provisioningState: string;
            /**
             * ScaleSetEvictionPolicy to be used to specify eviction policy for low priority virtual machine scale set. Default to Delete.
             */
            scaleSetEvictionPolicy?: string;
            /**
             * ScaleSetPriority to be used to specify virtual machine scale set priority. Default to regular.
             */
            scaleSetPriority?: string;
            /**
             * AgentPoolType represents types of an agent pool
             */
            type?: string;
            /**
             * Size of agent VMs.
             */
            vmSize?: string;
            /**
             * VNet SubnetID specifies the VNet's subnet identifier.
             */
            vnetSubnetID?: string;
        }

        /**
         * Identity for the managed cluster.
         */
        export interface ManagedClusterIdentityResponse {
            /**
             * The principal id of the system assigned identity which is used by master components.
             */
            principalId: string;
            /**
             * The tenant id of the system assigned identity which is used by master components.
             */
            tenantId: string;
            /**
             * The type of identity used for the managed cluster. Type 'SystemAssigned' will use an implicitly created identity in master components and an auto-created user assigned identity in MC_ resource group in agent nodes. Type 'None' will not use MSI for the managed cluster, service principal will be used instead.
             */
            type?: string;
        }

        /**
         * Information about a service principal identity for the cluster to use for manipulating Azure APIs.
         */
        export interface ManagedClusterServicePrincipalProfileResponse {
            /**
             * The ID for the service principal.
             */
            clientId: string;
            /**
             * The secret password associated with the service principal in plain text.
             */
            secret?: string;
        }

        /**
         * Profile for Windows VMs in the container service cluster.
         */
        export interface ManagedClusterWindowsProfileResponse {
            /**
             * Specifies the password of the administrator account. <br><br> **Minimum-length:** 8 characters <br><br> **Max-length:** 123 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!"
             */
            adminPassword?: string;
            /**
             * Specifies the name of the administrator account. <br><br> **restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length:** 1 character <br><br> **Max-length:** 20 characters
             */
            adminUsername: string;
        }

    }

    export namespace v20191027preview {
        /**
         * Represents the OpenShift networking configuration
         */
        export interface NetworkProfileResponse {
            /**
             * CIDR of subnet used to create PLS needed for management of the cluster
             */
            managementSubnetCidr?: string;
            /**
             * CIDR for the OpenShift Vnet.
             */
            vnetCidr?: string;
            /**
             * ID of the Vnet created for OSA cluster.
             */
            vnetId?: string;
        }
        /**
         * networkProfileResponseProvideDefaults sets the appropriate defaults for NetworkProfileResponse
         */
        export function networkProfileResponseProvideDefaults(val: NetworkProfileResponse): NetworkProfileResponse {
            return {
                ...val,
                vnetCidr: (val.vnetCidr) ?? "10.0.0.0/8",
            };
        }

        /**
         * Defines further properties on the API.
         */
        export interface OpenShiftAPIPropertiesResponse {
            /**
             * Specifies if API server is public or private.
             */
            privateApiServer?: boolean;
        }

        /**
         * Defines the Identity provider for MS AAD.
         */
        export interface OpenShiftManagedClusterAADIdentityProviderResponse {
            /**
             * The clientId password associated with the provider.
             */
            clientId?: string;
            /**
             * The groupId to be granted cluster admin role.
             */
            customerAdminGroupId?: string;
            /**
             * The kind of the provider.
             * Expected value is 'AADIdentityProvider'.
             */
            kind: "AADIdentityProvider";
            /**
             * The secret password associated with the provider.
             */
            secret?: string;
            /**
             * The tenantId associated with the provider.
             */
            tenantId?: string;
        }

        /**
         * Defines the configuration of the OpenShift cluster VMs.
         */
        export interface OpenShiftManagedClusterAgentPoolProfileResponse {
            /**
             * Number of agents (VMs) to host docker containers.
             */
            count: number;
            /**
             * Unique name of the pool profile in the context of the subscription and resource group.
             */
            name: string;
            /**
             * OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
             */
            osType?: string;
            /**
             * Define the role of the AgentPoolProfile.
             */
            role?: string;
            /**
             * Subnet CIDR for the peering.
             */
            subnetCidr?: string;
            /**
             * Size of agent VMs.
             */
            vmSize: string;
        }
        /**
         * openShiftManagedClusterAgentPoolProfileResponseProvideDefaults sets the appropriate defaults for OpenShiftManagedClusterAgentPoolProfileResponse
         */
        export function openShiftManagedClusterAgentPoolProfileResponseProvideDefaults(val: OpenShiftManagedClusterAgentPoolProfileResponse): OpenShiftManagedClusterAgentPoolProfileResponse {
            return {
                ...val,
                subnetCidr: (val.subnetCidr) ?? "10.0.0.0/24",
            };
        }

        /**
         * Defines all possible authentication profiles for the OpenShift cluster.
         */
        export interface OpenShiftManagedClusterAuthProfileResponse {
            /**
             * Type of authentication profile to use.
             */
            identityProviders?: v20191027preview.OpenShiftManagedClusterIdentityProviderResponse[];
        }

        /**
         * Defines the configuration of the identity providers to be used in the OpenShift cluster.
         */
        export interface OpenShiftManagedClusterIdentityProviderResponse {
            /**
             * Name of the provider.
             */
            name?: string;
            /**
             * Configuration of the provider.
             */
            provider?: v20191027preview.OpenShiftManagedClusterAADIdentityProviderResponse;
        }

        /**
         * OpenShiftManagedClusterMaterPoolProfile contains configuration for OpenShift master VMs.
         */
        export interface OpenShiftManagedClusterMasterPoolProfileResponse {
            /**
             * Defines further properties on the API.
             */
            apiProperties?: v20191027preview.OpenShiftAPIPropertiesResponse;
            /**
             * Number of masters (VMs) to host docker containers. The default value is 3.
             */
            count: number;
            /**
             * Subnet CIDR for the peering.
             */
            subnetCidr?: string;
            /**
             * Size of agent VMs.
             */
            vmSize: string;
        }

        /**
         * Defines the configuration for Log Analytics integration.
         */
        export interface OpenShiftManagedClusterMonitorProfileResponse {
            /**
             * If the Log analytics integration should be turned on or off
             */
            enabled?: boolean;
            /**
             * Azure Resource Manager Resource ID for the Log Analytics workspace to integrate with.
             */
            workspaceResourceID?: string;
        }

        /**
         * Represents an OpenShift router
         */
        export interface OpenShiftRouterProfileResponse {
            /**
             * Auto-allocated FQDN for the OpenShift router.
             */
            fqdn: string;
            /**
             * Name of the router profile.
             */
            name?: string;
            /**
             * DNS subdomain for OpenShift router.
             */
            publicSubdomain: string;
        }

        /**
         * Used for establishing the purchase context of any 3rd Party artifact through MarketPlace.
         */
        export interface PurchasePlanResponse {
            /**
             * The plan ID.
             */
            name?: string;
            /**
             * Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
             */
            product?: string;
            /**
             * The promotion code.
             */
            promotionCode?: string;
            /**
             * The plan ID.
             */
            publisher?: string;
        }

    }

    export namespace v20200601 {
        /**
         * Settings for upgrading an agentpool
         */
        export interface AgentPoolUpgradeSettingsResponse {
            /**
             * Count or percentage of additional nodes to be added during upgrade. If empty uses AKS default
             */
            maxSurge?: string;
        }

    }

    export namespace v20210201 {
        /**
         * Settings for upgrading an agentpool
         */
        export interface AgentPoolUpgradeSettingsResponse {
            /**
             * Count or percentage of additional nodes to be added during upgrade. If empty uses AKS default
             */
            maxSurge?: string;
        }

        /**
         * Kubelet configurations of agent nodes.
         */
        export interface KubeletConfigResponse {
            /**
             * Allowlist of unsafe sysctls or unsafe sysctl patterns (ending in `*`).
             */
            allowedUnsafeSysctls?: string[];
            /**
             * The maximum number of container log files that can be present for a container. The number must be ≥ 2.
             */
            containerLogMaxFiles?: number;
            /**
             * The maximum size (e.g. 10Mi) of container log file before it is rotated.
             */
            containerLogMaxSizeMB?: number;
            /**
             * Enable CPU CFS quota enforcement for containers that specify CPU limits.
             */
            cpuCfsQuota?: boolean;
            /**
             * Sets CPU CFS quota period value.
             */
            cpuCfsQuotaPeriod?: string;
            /**
             * CPU Manager policy to use.
             */
            cpuManagerPolicy?: string;
            /**
             * If set to true it will make the Kubelet fail to start if swap is enabled on the node.
             */
            failSwapOn?: boolean;
            /**
             * The percent of disk usage after which image garbage collection is always run.
             */
            imageGcHighThreshold?: number;
            /**
             * The percent of disk usage before which image garbage collection is never run.
             */
            imageGcLowThreshold?: number;
            /**
             * The maximum number of processes per pod.
             */
            podMaxPids?: number;
            /**
             * Topology Manager policy to use.
             */
            topologyManagerPolicy?: string;
        }

        /**
         * OS configurations of Linux agent nodes.
         */
        export interface LinuxOSConfigResponse {
            /**
             * SwapFileSizeMB specifies size in MB of a swap file will be created on each node.
             */
            swapFileSizeMB?: number;
            /**
             * Sysctl settings for Linux agent nodes.
             */
            sysctls?: v20210201.SysctlConfigResponse;
            /**
             * Transparent Huge Page defrag configuration.
             */
            transparentHugePageDefrag?: string;
            /**
             * Transparent Huge Page enabled configuration.
             */
            transparentHugePageEnabled?: string;
        }

        /**
         * Describes the Power State of the cluster
         */
        export interface PowerStateResponse {
            /**
             * Tells whether the cluster is Running or Stopped
             */
            code?: string;
        }

        /**
         * Sysctl settings for Linux agent nodes.
         */
        export interface SysctlConfigResponse {
            /**
             * Sysctl setting fs.aio-max-nr.
             */
            fsAioMaxNr?: number;
            /**
             * Sysctl setting fs.file-max.
             */
            fsFileMax?: number;
            /**
             * Sysctl setting fs.inotify.max_user_watches.
             */
            fsInotifyMaxUserWatches?: number;
            /**
             * Sysctl setting fs.nr_open.
             */
            fsNrOpen?: number;
            /**
             * Sysctl setting kernel.threads-max.
             */
            kernelThreadsMax?: number;
            /**
             * Sysctl setting net.core.netdev_max_backlog.
             */
            netCoreNetdevMaxBacklog?: number;
            /**
             * Sysctl setting net.core.optmem_max.
             */
            netCoreOptmemMax?: number;
            /**
             * Sysctl setting net.core.rmem_default.
             */
            netCoreRmemDefault?: number;
            /**
             * Sysctl setting net.core.rmem_max.
             */
            netCoreRmemMax?: number;
            /**
             * Sysctl setting net.core.somaxconn.
             */
            netCoreSomaxconn?: number;
            /**
             * Sysctl setting net.core.wmem_default.
             */
            netCoreWmemDefault?: number;
            /**
             * Sysctl setting net.core.wmem_max.
             */
            netCoreWmemMax?: number;
            /**
             * Sysctl setting net.ipv4.ip_local_port_range.
             */
            netIpv4IpLocalPortRange?: string;
            /**
             * Sysctl setting net.ipv4.neigh.default.gc_thresh1.
             */
            netIpv4NeighDefaultGcThresh1?: number;
            /**
             * Sysctl setting net.ipv4.neigh.default.gc_thresh2.
             */
            netIpv4NeighDefaultGcThresh2?: number;
            /**
             * Sysctl setting net.ipv4.neigh.default.gc_thresh3.
             */
            netIpv4NeighDefaultGcThresh3?: number;
            /**
             * Sysctl setting net.ipv4.tcp_fin_timeout.
             */
            netIpv4TcpFinTimeout?: number;
            /**
             * Sysctl setting net.ipv4.tcp_keepalive_probes.
             */
            netIpv4TcpKeepaliveProbes?: number;
            /**
             * Sysctl setting net.ipv4.tcp_keepalive_time.
             */
            netIpv4TcpKeepaliveTime?: number;
            /**
             * Sysctl setting net.ipv4.tcp_max_syn_backlog.
             */
            netIpv4TcpMaxSynBacklog?: number;
            /**
             * Sysctl setting net.ipv4.tcp_max_tw_buckets.
             */
            netIpv4TcpMaxTwBuckets?: number;
            /**
             * Sysctl setting net.ipv4.tcp_tw_reuse.
             */
            netIpv4TcpTwReuse?: boolean;
            /**
             * Sysctl setting net.ipv4.tcp_keepalive_intvl.
             */
            netIpv4TcpkeepaliveIntvl?: number;
            /**
             * Sysctl setting net.netfilter.nf_conntrack_buckets.
             */
            netNetfilterNfConntrackBuckets?: number;
            /**
             * Sysctl setting net.netfilter.nf_conntrack_max.
             */
            netNetfilterNfConntrackMax?: number;
            /**
             * Sysctl setting vm.max_map_count.
             */
            vmMaxMapCount?: number;
            /**
             * Sysctl setting vm.swappiness.
             */
            vmSwappiness?: number;
            /**
             * Sysctl setting vm.vfs_cache_pressure.
             */
            vmVfsCachePressure?: number;
        }

    }

    export namespace v20210501 {
        /**
         * Settings for upgrading an agentpool
         */
        export interface AgentPoolUpgradeSettingsResponse {
            /**
             * This can either be set to an integer (e.g. '5') or a percentage (e.g. '50%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified, the default is 1. For more information, including best practices, see: https://docs.microsoft.com/azure/aks/upgrade-cluster#customize-node-surge-upgrade
             */
            maxSurge?: string;
        }

        /**
         * Profile for Linux VMs in the container service cluster.
         */
        export interface ContainerServiceLinuxProfileResponse {
            /**
             * The administrator username to use for Linux VMs.
             */
            adminUsername: string;
            /**
             * The SSH configuration for Linux-based VMs running on Azure.
             */
            ssh: v20210501.ContainerServiceSshConfigurationResponse;
        }

        /**
         * Profile of network configuration.
         */
        export interface ContainerServiceNetworkProfileResponse {
            /**
             * An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
             */
            dnsServiceIP?: string;
            /**
             * A CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the Kubernetes service address range.
             */
            dockerBridgeCidr?: string;
            /**
             * Profile of the cluster load balancer.
             */
            loadBalancerProfile?: v20210501.ManagedClusterLoadBalancerProfileResponse;
            /**
             * The default is 'standard'. See [Azure Load Balancer SKUs](https://docs.microsoft.com/azure/load-balancer/skus) for more information about the differences between load balancer SKUs.
             */
            loadBalancerSku?: string;
            /**
             * This cannot be specified if networkPlugin is anything other than 'azure'.
             */
            networkMode?: string;
            /**
             * Network plugin used for building the Kubernetes network.
             */
            networkPlugin?: string;
            /**
             * Network policy used for building the Kubernetes network.
             */
            networkPolicy?: string;
            /**
             * This can only be set at cluster creation time and cannot be changed later. For more information see [egress outbound type](https://docs.microsoft.com/azure/aks/egress-outboundtype).
             */
            outboundType?: string;
            /**
             * A CIDR notation IP range from which to assign pod IPs when kubenet is used.
             */
            podCidr?: string;
            /**
             * A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
             */
            serviceCidr?: string;
        }
        /**
         * containerServiceNetworkProfileResponseProvideDefaults sets the appropriate defaults for ContainerServiceNetworkProfileResponse
         */
        export function containerServiceNetworkProfileResponseProvideDefaults(val: ContainerServiceNetworkProfileResponse): ContainerServiceNetworkProfileResponse {
            return {
                ...val,
                dnsServiceIP: (val.dnsServiceIP) ?? "10.0.0.10",
                dockerBridgeCidr: (val.dockerBridgeCidr) ?? "172.17.0.1/16",
                loadBalancerProfile: (val.loadBalancerProfile ? v20210501.managedClusterLoadBalancerProfileResponseProvideDefaults(val.loadBalancerProfile) : undefined),
                networkPlugin: (val.networkPlugin) ?? "kubenet",
                outboundType: (val.outboundType) ?? "loadBalancer",
                podCidr: (val.podCidr) ?? "10.244.0.0/16",
                serviceCidr: (val.serviceCidr) ?? "10.0.0.0/16",
            };
        }

        /**
         * SSH configuration for Linux-based VMs running on Azure.
         */
        export interface ContainerServiceSshConfigurationResponse {
            /**
             * The list of SSH public keys used to authenticate with Linux-based VMs. A maximum of 1 key may be specified.
             */
            publicKeys: v20210501.ContainerServiceSshPublicKeyResponse[];
        }

        /**
         * Contains information about SSH certificate public key data.
         */
        export interface ContainerServiceSshPublicKeyResponse {
            /**
             * Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.
             */
            keyData: string;
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
         * The complex type of the extended location.
         */
        export interface ExtendedLocationResponse {
            /**
             * The name of the extended location.
             */
            name?: string;
            /**
             * The type of the extended location.
             */
            type?: string;
        }

        /**
         * See [AKS custom node configuration](https://docs.microsoft.com/azure/aks/custom-node-configuration) for more details.
         */
        export interface KubeletConfigResponse {
            /**
             * Allowed list of unsafe sysctls or unsafe sysctl patterns (ending in `*`).
             */
            allowedUnsafeSysctls?: string[];
            /**
             * The maximum number of container log files that can be present for a container. The number must be ≥ 2.
             */
            containerLogMaxFiles?: number;
            /**
             * The maximum size (e.g. 10Mi) of container log file before it is rotated.
             */
            containerLogMaxSizeMB?: number;
            /**
             * The default is true.
             */
            cpuCfsQuota?: boolean;
            /**
             * The default is '100ms.' Valid values are a sequence of decimal numbers with an optional fraction and a unit suffix. For example: '300ms', '2h45m'. Supported units are 'ns', 'us', 'ms', 's', 'm', and 'h'.
             */
            cpuCfsQuotaPeriod?: string;
            /**
             * The default is 'none'. See [Kubernetes CPU management policies](https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/#cpu-management-policies) for more information. Allowed values are 'none' and 'static'.
             */
            cpuManagerPolicy?: string;
            /**
             * If set to true it will make the Kubelet fail to start if swap is enabled on the node.
             */
            failSwapOn?: boolean;
            /**
             * To disable image garbage collection, set to 100. The default is 85%
             */
            imageGcHighThreshold?: number;
            /**
             * This cannot be set higher than imageGcHighThreshold. The default is 80%
             */
            imageGcLowThreshold?: number;
            /**
             * The maximum number of processes per pod.
             */
            podMaxPids?: number;
            /**
             * For more information see [Kubernetes Topology Manager](https://kubernetes.io/docs/tasks/administer-cluster/topology-manager). The default is 'none'. Allowed values are 'none', 'best-effort', 'restricted', and 'single-numa-node'.
             */
            topologyManagerPolicy?: string;
        }

        /**
         * See [AKS custom node configuration](https://docs.microsoft.com/azure/aks/custom-node-configuration) for more details.
         */
        export interface LinuxOSConfigResponse {
            /**
             * The size in MB of a swap file that will be created on each node.
             */
            swapFileSizeMB?: number;
            /**
             * Sysctl settings for Linux agent nodes.
             */
            sysctls?: v20210501.SysctlConfigResponse;
            /**
             * Valid values are 'always', 'defer', 'defer+madvise', 'madvise' and 'never'. The default is 'madvise'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
             */
            transparentHugePageDefrag?: string;
            /**
             * Valid values are 'always', 'madvise', and 'never'. The default is 'always'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
             */
            transparentHugePageEnabled?: string;
        }

        /**
         * For more details see [managed AAD on AKS](https://docs.microsoft.com/azure/aks/managed-aad).
         */
        export interface ManagedClusterAADProfileResponse {
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
            enableAzureRBAC?: boolean;
            /**
             * Whether to enable managed AAD.
             */
            managed?: boolean;
            /**
             * The server AAD application ID.
             */
            serverAppID?: string;
            /**
             * The server AAD application secret.
             */
            serverAppSecret?: string;
            /**
             * The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription.
             */
            tenantID?: string;
        }

        /**
         * Access profile for managed cluster API server.
         */
        export interface ManagedClusterAPIServerAccessProfileResponse {
            /**
             * IP ranges are specified in CIDR format, e.g. 137.117.106.88/29. This feature is not compatible with clusters that use Public IP Per Node, or clusters that are using a Basic Load Balancer. For more information see [API server authorized IP ranges](https://docs.microsoft.com/azure/aks/api-server-authorized-ip-ranges).
             */
            authorizedIPRanges?: string[];
            /**
             * For more details, see [Creating a private AKS cluster](https://docs.microsoft.com/azure/aks/private-clusters).
             */
            enablePrivateCluster?: boolean;
            /**
             * Whether to create additional public FQDN for private cluster or not.
             */
            enablePrivateClusterPublicFQDN?: boolean;
            /**
             * The default is System. For more details see [configure private DNS zone](https://docs.microsoft.com/azure/aks/private-clusters#configure-private-dns-zone). Allowed values are 'system' and 'none'.
             */
            privateDNSZone?: string;
        }

        /**
         * A Kubernetes add-on profile for a managed cluster.
         */
        export interface ManagedClusterAddonProfileResponse {
            /**
             * Key-value pairs for configuring an add-on.
             */
            config?: {[key: string]: string};
            /**
             * Whether the add-on is enabled or not.
             */
            enabled: boolean;
            /**
             * Information of user assigned identity used by this add-on.
             */
            identity: v20210501.ManagedClusterAddonProfileResponseIdentity;
        }

        /**
         * Information of user assigned identity used by this add-on.
         */
        export interface ManagedClusterAddonProfileResponseIdentity {
            /**
             * The client ID of the user assigned identity.
             */
            clientId?: string;
            /**
             * The object ID of the user assigned identity.
             */
            objectId?: string;
            /**
             * The resource ID of the user assigned identity.
             */
            resourceId?: string;
        }

        /**
         * Profile for the container service agent pool.
         */
        export interface ManagedClusterAgentPoolProfileResponse {
            /**
             * The list of Availability zones to use for nodes. This can only be specified if the AgentPoolType property is 'VirtualMachineScaleSets'.
             */
            availabilityZones?: string[];
            /**
             * Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 1000 (inclusive) for user pools and in the range of 1 to 1000 (inclusive) for system pools. The default value is 1.
             */
            count?: number;
            /**
             * Whether to enable auto-scaler
             */
            enableAutoScaling?: boolean;
            /**
             * This is only supported on certain VM sizes and in certain Azure regions. For more information, see: https://docs.microsoft.com/azure/aks/enable-host-encryption
             */
            enableEncryptionAtHost?: boolean;
            /**
             * See [Add a FIPS-enabled node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#add-a-fips-enabled-node-pool-preview) for more details.
             */
            enableFIPS?: boolean;
            /**
             * Some scenarios may require nodes in a node pool to receive their own dedicated public IP addresses. A common scenario is for gaming workloads, where a console needs to make a direct connection to a cloud virtual machine to minimize hops. For more information see [assigning a public IP per node](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#assign-a-public-ip-per-node-for-your-node-pools). The default is false.
             */
            enableNodePublicIP?: boolean;
            /**
             * Whether to enable UltraSSD
             */
            enableUltraSSD?: boolean;
            /**
             * GPUInstanceProfile to be used to specify GPU MIG instance profile for supported GPU VM SKU.
             */
            gpuInstanceProfile?: string;
            /**
             * The Kubelet configuration on the agent pool nodes.
             */
            kubeletConfig?: v20210501.KubeletConfigResponse;
            /**
             * Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage.
             */
            kubeletDiskType?: string;
            /**
             * The OS configuration of Linux agent nodes.
             */
            linuxOSConfig?: v20210501.LinuxOSConfigResponse;
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
             * A cluster must have at least one 'System' Agent Pool at all times. For additional information on agent pool restrictions and best practices, see: https://docs.microsoft.com/azure/aks/use-system-pools
             */
            mode?: string;
            /**
             * Windows agent pool names must be 6 characters or less.
             */
            name: string;
            /**
             * The version of node image
             */
            nodeImageVersion: string;
            /**
             * The node labels to be persisted across all nodes in agent pool.
             */
            nodeLabels?: {[key: string]: string};
            /**
             * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIPPrefixName}
             */
            nodePublicIPPrefixID?: string;
            /**
             * The taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
             */
            nodeTaints?: string[];
            /**
             * As a best practice, you should upgrade all node pools in an AKS cluster to the same Kubernetes version. The node pool version must have the same major version as the control plane. The node pool minor version must be within two minor versions of the control plane version. The node pool version cannot be greater than the control plane version. For more information see [upgrading a node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#upgrade-a-node-pool).
             */
            orchestratorVersion?: string;
            /**
             * OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
             */
            osDiskSizeGB?: number;
            /**
             * The default is 'Ephemeral' if the VM supports it and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation. For more information see [Ephemeral OS](https://docs.microsoft.com/azure/aks/cluster-configuration#ephemeral-os).
             */
            osDiskType?: string;
            /**
             * Specifies an OS SKU. This value must not be specified if OSType is Windows.
             */
            osSKU?: string;
            /**
             * The operating system type. The default is Linux.
             */
            osType?: string;
            /**
             * If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
             */
            podSubnetID?: string;
            /**
             * Describes whether the Agent Pool is Running or Stopped
             */
            powerState: v20210501.PowerStateResponse;
            /**
             * The current deployment or provisioning state.
             */
            provisioningState: string;
            /**
             * The ID for Proximity Placement Group.
             */
            proximityPlacementGroupID?: string;
            /**
             * This cannot be specified unless the scaleSetPriority is 'Spot'. If not specified, the default is 'Delete'.
             */
            scaleSetEvictionPolicy?: string;
            /**
             * The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'.
             */
            scaleSetPriority?: string;
            /**
             * Possible values are any decimal value greater than zero or -1 which indicates the willingness to pay any on-demand price. For more details on spot pricing, see [spot VMs pricing](https://docs.microsoft.com/azure/virtual-machines/spot-vms#pricing)
             */
            spotMaxPrice?: number;
            /**
             * The tags to be persisted on the agent pool virtual machine scale set.
             */
            tags?: {[key: string]: string};
            /**
             * The type of Agent Pool.
             */
            type?: string;
            /**
             * Settings for upgrading the agentpool
             */
            upgradeSettings?: v20210501.AgentPoolUpgradeSettingsResponse;
            /**
             * VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. For more details on restricted VM sizes, see: https://docs.microsoft.com/azure/aks/quotas-skus-regions
             */
            vmSize?: string;
            /**
             * If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
             */
            vnetSubnetID?: string;
        }

        /**
         * Auto upgrade profile for a managed cluster.
         */
        export interface ManagedClusterAutoUpgradeProfileResponse {
            /**
             * For more information see [setting the AKS cluster auto-upgrade channel](https://docs.microsoft.com/azure/aks/upgrade-cluster#set-auto-upgrade-channel).
             */
            upgradeChannel?: string;
        }

        /**
         * Cluster HTTP proxy configuration.
         */
        export interface ManagedClusterHTTPProxyConfigResponse {
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
        }

        /**
         * Identity for the managed cluster.
         */
        export interface ManagedClusterIdentityResponse {
            /**
             * The principal id of the system assigned identity which is used by master components.
             */
            principalId: string;
            /**
             * The tenant id of the system assigned identity which is used by master components.
             */
            tenantId: string;
            /**
             * For more information see [use managed identities in AKS](https://docs.microsoft.com/azure/aks/use-managed-identity).
             */
            type?: string;
            /**
             * The keys must be ARM resource IDs in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentities?: {[key: string]: v20210501.ManagedClusterIdentityResponseUserAssignedIdentities};
        }

        export interface ManagedClusterIdentityResponseUserAssignedIdentities {
            /**
             * The client id of user assigned identity.
             */
            clientId: string;
            /**
             * The principal id of user assigned identity.
             */
            principalId: string;
        }

        /**
         * Profile of the managed cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileResponse {
            /**
             * The desired number of allocated SNAT ports per VM. Allowed values are in the range of 0 to 64000 (inclusive). The default value is 0 which results in Azure dynamically allocating ports.
             */
            allocatedOutboundPorts?: number;
            /**
             * The effective outbound IP resources of the cluster load balancer.
             */
            effectiveOutboundIPs?: v20210501.ResourceReferenceResponse[];
            /**
             * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 30 minutes.
             */
            idleTimeoutInMinutes?: number;
            /**
             * Desired managed outbound IPs for the cluster load balancer.
             */
            managedOutboundIPs?: v20210501.ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs;
            /**
             * Desired outbound IP Prefix resources for the cluster load balancer.
             */
            outboundIPPrefixes?: v20210501.ManagedClusterLoadBalancerProfileResponseOutboundIPPrefixes;
            /**
             * Desired outbound IP resources for the cluster load balancer.
             */
            outboundIPs?: v20210501.ManagedClusterLoadBalancerProfileResponseOutboundIPs;
        }
        /**
         * managedClusterLoadBalancerProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileResponse
         */
        export function managedClusterLoadBalancerProfileResponseProvideDefaults(val: ManagedClusterLoadBalancerProfileResponse): ManagedClusterLoadBalancerProfileResponse {
            return {
                ...val,
                allocatedOutboundPorts: (val.allocatedOutboundPorts) ?? 0,
                idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 30,
                managedOutboundIPs: (val.managedOutboundIPs ? v20210501.managedClusterLoadBalancerProfileResponseManagedOutboundIPsProvideDefaults(val.managedOutboundIPs) : undefined),
            };
        }

        /**
         * Desired managed outbound IPs for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs {
            /**
             * The desired number of outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1. 
             */
            count?: number;
        }
        /**
         * managedClusterLoadBalancerProfileResponseManagedOutboundIPsProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs
         */
        export function managedClusterLoadBalancerProfileResponseManagedOutboundIPsProvideDefaults(val: ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs): ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs {
            return {
                ...val,
                count: (val.count) ?? 1,
            };
        }

        /**
         * Desired outbound IP Prefix resources for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileResponseOutboundIPPrefixes {
            /**
             * A list of public IP prefix resources.
             */
            publicIPPrefixes?: v20210501.ResourceReferenceResponse[];
        }

        /**
         * Desired outbound IP resources for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileResponseOutboundIPs {
            /**
             * A list of public IP resources.
             */
            publicIPs?: v20210501.ResourceReferenceResponse[];
        }

        /**
         * See [disable AAD Pod Identity for a specific Pod/Application](https://azure.github.io/aad-pod-identity/docs/configure/application_exception/) for more details.
         */
        export interface ManagedClusterPodIdentityExceptionResponse {
            /**
             * The name of the pod identity exception.
             */
            name: string;
            /**
             * The namespace of the pod identity exception.
             */
            namespace: string;
            /**
             * The pod labels to match.
             */
            podLabels: {[key: string]: string};
        }

        /**
         * See [use AAD pod identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity) for more details on pod identity integration.
         */
        export interface ManagedClusterPodIdentityProfileResponse {
            /**
             * Running in Kubenet is disabled by default due to the security related nature of AAD Pod Identity and the risks of IP spoofing. See [using Kubenet network plugin with AAD Pod Identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity#using-kubenet-network-plugin-with-azure-active-directory-pod-managed-identities) for more information.
             */
            allowNetworkPluginKubenet?: boolean;
            /**
             * Whether the pod identity addon is enabled.
             */
            enabled?: boolean;
            /**
             * The pod identities to use in the cluster.
             */
            userAssignedIdentities?: v20210501.ManagedClusterPodIdentityResponse[];
            /**
             * The pod identity exceptions to allow.
             */
            userAssignedIdentityExceptions?: v20210501.ManagedClusterPodIdentityExceptionResponse[];
        }

        /**
         * An error response from the pod identity provisioning.
         */
        export interface ManagedClusterPodIdentityProvisioningErrorBodyResponse {
            /**
             * An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
             */
            code?: string;
            /**
             * A list of additional details about the error.
             */
            details?: v20210501.ManagedClusterPodIdentityProvisioningErrorBodyResponse[];
            /**
             * A message describing the error, intended to be suitable for display in a user interface.
             */
            message?: string;
            /**
             * The target of the particular error. For example, the name of the property in error.
             */
            target?: string;
        }

        /**
         * An error response from the pod identity provisioning.
         */
        export interface ManagedClusterPodIdentityProvisioningErrorResponse {
            /**
             * Details about the error.
             */
            error?: v20210501.ManagedClusterPodIdentityProvisioningErrorBodyResponse;
        }

        /**
         * Details about the pod identity assigned to the Managed Cluster.
         */
        export interface ManagedClusterPodIdentityResponse {
            /**
             * The binding selector to use for the AzureIdentityBinding resource.
             */
            bindingSelector?: string;
            /**
             * The user assigned identity details.
             */
            identity: v20210501.UserAssignedIdentityResponse;
            /**
             * The name of the pod identity.
             */
            name: string;
            /**
             * The namespace of the pod identity.
             */
            namespace: string;
            provisioningInfo: v20210501.ManagedClusterPodIdentityResponseProvisioningInfo;
            /**
             * The current provisioning state of the pod identity.
             */
            provisioningState: string;
        }

        export interface ManagedClusterPodIdentityResponseProvisioningInfo {
            /**
             * Pod identity assignment error (if any).
             */
            error?: v20210501.ManagedClusterPodIdentityProvisioningErrorResponse;
        }

        /**
         * Parameters to be applied to the cluster-autoscaler when enabled
         */
        export interface ManagedClusterPropertiesResponseAutoScalerProfile {
            /**
             * Valid values are 'true' and 'false'
             */
            balanceSimilarNodeGroups?: string;
            /**
             * If not specified, the default is 'random'. See [expanders](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#what-are-expanders) for more information.
             */
            expander?: string;
            /**
             * The default is 10.
             */
            maxEmptyBulkDelete?: string;
            /**
             * The default is 600.
             */
            maxGracefulTerminationSec?: string;
            /**
             * The default is '15m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            maxNodeProvisionTime?: string;
            /**
             * The default is 45. The maximum is 100 and the minimum is 0.
             */
            maxTotalUnreadyPercentage?: string;
            /**
             * For scenarios like burst/batch scale where you don't want CA to act before the kubernetes scheduler could schedule all the pods, you can tell CA to ignore unscheduled pods before they're a certain age. The default is '0s'. Values must be an integer followed by a unit ('s' for seconds, 'm' for minutes, 'h' for hours, etc).
             */
            newPodScaleUpDelay?: string;
            /**
             * This must be an integer. The default is 3.
             */
            okTotalUnreadyCount?: string;
            /**
             * The default is '10m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownDelayAfterAdd?: string;
            /**
             * The default is the scan-interval. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownDelayAfterDelete?: string;
            /**
             * The default is '3m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownDelayAfterFailure?: string;
            /**
             * The default is '10m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownUnneededTime?: string;
            /**
             * The default is '20m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownUnreadyTime?: string;
            /**
             * The default is '0.5'.
             */
            scaleDownUtilizationThreshold?: string;
            /**
             * The default is '10'. Values must be an integer number of seconds.
             */
            scanInterval?: string;
            /**
             * The default is true.
             */
            skipNodesWithLocalStorage?: string;
            /**
             * The default is true.
             */
            skipNodesWithSystemPods?: string;
        }

        export interface ManagedClusterPropertiesResponseIdentityProfile {
            /**
             * The client ID of the user assigned identity.
             */
            clientId?: string;
            /**
             * The object ID of the user assigned identity.
             */
            objectId?: string;
            /**
             * The resource ID of the user assigned identity.
             */
            resourceId?: string;
        }

        /**
         * The SKU of a Managed Cluster.
         */
        export interface ManagedClusterSKUResponse {
            /**
             * The name of a managed cluster SKU.
             */
            name?: string;
            /**
             * If not specified, the default is 'Free'. See [uptime SLA](https://docs.microsoft.com/azure/aks/uptime-sla) for more details.
             */
            tier?: string;
        }

        /**
         * Information about a service principal identity for the cluster to use for manipulating Azure APIs.
         */
        export interface ManagedClusterServicePrincipalProfileResponse {
            /**
             * The ID for the service principal.
             */
            clientId: string;
            /**
             * The secret password associated with the service principal in plain text.
             */
            secret?: string;
        }

        /**
         * Profile for Windows VMs in the managed cluster.
         */
        export interface ManagedClusterWindowsProfileResponse {
            /**
             * Specifies the password of the administrator account. <br><br> **Minimum-length:** 8 characters <br><br> **Max-length:** 123 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!"
             */
            adminPassword?: string;
            /**
             * Specifies the name of the administrator account. <br><br> **Restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length:** 1 character <br><br> **Max-length:** 20 characters
             */
            adminUsername: string;
            /**
             * For more details on CSI proxy, see the [CSI proxy GitHub repo](https://github.com/kubernetes-csi/csi-proxy).
             */
            enableCSIProxy?: boolean;
            /**
             * The license type to use for Windows VMs. See [Azure Hybrid User Benefits](https://azure.microsoft.com/pricing/hybrid-benefit/faq/) for more details.
             */
            licenseType?: string;
        }

        /**
         * Describes the Power State of the cluster
         */
        export interface PowerStateResponse {
            /**
             * Tells whether the cluster is Running or Stopped
             */
            code?: string;
        }

        /**
         * A private link resource
         */
        export interface PrivateLinkResourceResponse {
            /**
             * The group ID of the resource.
             */
            groupId?: string;
            /**
             * The ID of the private link resource.
             */
            id?: string;
            /**
             * The name of the private link resource.
             */
            name?: string;
            /**
             * The private link service ID of the resource, this field is exposed only to NRP internally.
             */
            privateLinkServiceID: string;
            /**
             * The RequiredMembers of the resource
             */
            requiredMembers?: string[];
            /**
             * The resource type.
             */
            type?: string;
        }

        /**
         * A reference to an Azure resource.
         */
        export interface ResourceReferenceResponse {
            /**
             * The fully qualified Azure resource id.
             */
            id?: string;
        }

        /**
         * Sysctl settings for Linux agent nodes.
         */
        export interface SysctlConfigResponse {
            /**
             * Sysctl setting fs.aio-max-nr.
             */
            fsAioMaxNr?: number;
            /**
             * Sysctl setting fs.file-max.
             */
            fsFileMax?: number;
            /**
             * Sysctl setting fs.inotify.max_user_watches.
             */
            fsInotifyMaxUserWatches?: number;
            /**
             * Sysctl setting fs.nr_open.
             */
            fsNrOpen?: number;
            /**
             * Sysctl setting kernel.threads-max.
             */
            kernelThreadsMax?: number;
            /**
             * Sysctl setting net.core.netdev_max_backlog.
             */
            netCoreNetdevMaxBacklog?: number;
            /**
             * Sysctl setting net.core.optmem_max.
             */
            netCoreOptmemMax?: number;
            /**
             * Sysctl setting net.core.rmem_default.
             */
            netCoreRmemDefault?: number;
            /**
             * Sysctl setting net.core.rmem_max.
             */
            netCoreRmemMax?: number;
            /**
             * Sysctl setting net.core.somaxconn.
             */
            netCoreSomaxconn?: number;
            /**
             * Sysctl setting net.core.wmem_default.
             */
            netCoreWmemDefault?: number;
            /**
             * Sysctl setting net.core.wmem_max.
             */
            netCoreWmemMax?: number;
            /**
             * Sysctl setting net.ipv4.ip_local_port_range.
             */
            netIpv4IpLocalPortRange?: string;
            /**
             * Sysctl setting net.ipv4.neigh.default.gc_thresh1.
             */
            netIpv4NeighDefaultGcThresh1?: number;
            /**
             * Sysctl setting net.ipv4.neigh.default.gc_thresh2.
             */
            netIpv4NeighDefaultGcThresh2?: number;
            /**
             * Sysctl setting net.ipv4.neigh.default.gc_thresh3.
             */
            netIpv4NeighDefaultGcThresh3?: number;
            /**
             * Sysctl setting net.ipv4.tcp_fin_timeout.
             */
            netIpv4TcpFinTimeout?: number;
            /**
             * Sysctl setting net.ipv4.tcp_keepalive_probes.
             */
            netIpv4TcpKeepaliveProbes?: number;
            /**
             * Sysctl setting net.ipv4.tcp_keepalive_time.
             */
            netIpv4TcpKeepaliveTime?: number;
            /**
             * Sysctl setting net.ipv4.tcp_max_syn_backlog.
             */
            netIpv4TcpMaxSynBacklog?: number;
            /**
             * Sysctl setting net.ipv4.tcp_max_tw_buckets.
             */
            netIpv4TcpMaxTwBuckets?: number;
            /**
             * Sysctl setting net.ipv4.tcp_tw_reuse.
             */
            netIpv4TcpTwReuse?: boolean;
            /**
             * Sysctl setting net.ipv4.tcp_keepalive_intvl.
             */
            netIpv4TcpkeepaliveIntvl?: number;
            /**
             * Sysctl setting net.netfilter.nf_conntrack_buckets.
             */
            netNetfilterNfConntrackBuckets?: number;
            /**
             * Sysctl setting net.netfilter.nf_conntrack_max.
             */
            netNetfilterNfConntrackMax?: number;
            /**
             * Sysctl setting vm.max_map_count.
             */
            vmMaxMapCount?: number;
            /**
             * Sysctl setting vm.swappiness.
             */
            vmSwappiness?: number;
            /**
             * Sysctl setting vm.vfs_cache_pressure.
             */
            vmVfsCachePressure?: number;
        }

        /**
         * Details about a user assigned identity.
         */
        export interface UserAssignedIdentityResponse {
            /**
             * The client ID of the user assigned identity.
             */
            clientId?: string;
            /**
             * The object ID of the user assigned identity.
             */
            objectId?: string;
            /**
             * The resource ID of the user assigned identity.
             */
            resourceId?: string;
        }

    }

    export namespace v20210801 {
        /**
         * Settings for upgrading an agentpool
         */
        export interface AgentPoolUpgradeSettingsResponse {
            /**
             * This can either be set to an integer (e.g. '5') or a percentage (e.g. '50%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified, the default is 1. For more information, including best practices, see: https://docs.microsoft.com/azure/aks/upgrade-cluster#customize-node-surge-upgrade
             */
            maxSurge?: string;
        }

        /**
         * Data used when creating a target resource from a source resource.
         */
        export interface CreationDataResponse {
            /**
             * This is the ARM ID of the source object to be used to create the target object.
             */
            sourceResourceId?: string;
        }

        /**
         * See [AKS custom node configuration](https://docs.microsoft.com/azure/aks/custom-node-configuration) for more details.
         */
        export interface KubeletConfigResponse {
            /**
             * Allowed list of unsafe sysctls or unsafe sysctl patterns (ending in `*`).
             */
            allowedUnsafeSysctls?: string[];
            /**
             * The maximum number of container log files that can be present for a container. The number must be ≥ 2.
             */
            containerLogMaxFiles?: number;
            /**
             * The maximum size (e.g. 10Mi) of container log file before it is rotated.
             */
            containerLogMaxSizeMB?: number;
            /**
             * The default is true.
             */
            cpuCfsQuota?: boolean;
            /**
             * The default is '100ms.' Valid values are a sequence of decimal numbers with an optional fraction and a unit suffix. For example: '300ms', '2h45m'. Supported units are 'ns', 'us', 'ms', 's', 'm', and 'h'.
             */
            cpuCfsQuotaPeriod?: string;
            /**
             * The default is 'none'. See [Kubernetes CPU management policies](https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/#cpu-management-policies) for more information. Allowed values are 'none' and 'static'.
             */
            cpuManagerPolicy?: string;
            /**
             * If set to true it will make the Kubelet fail to start if swap is enabled on the node.
             */
            failSwapOn?: boolean;
            /**
             * To disable image garbage collection, set to 100. The default is 85%
             */
            imageGcHighThreshold?: number;
            /**
             * This cannot be set higher than imageGcHighThreshold. The default is 80%
             */
            imageGcLowThreshold?: number;
            /**
             * The maximum number of processes per pod.
             */
            podMaxPids?: number;
            /**
             * For more information see [Kubernetes Topology Manager](https://kubernetes.io/docs/tasks/administer-cluster/topology-manager). The default is 'none'. Allowed values are 'none', 'best-effort', 'restricted', and 'single-numa-node'.
             */
            topologyManagerPolicy?: string;
        }

        /**
         * See [AKS custom node configuration](https://docs.microsoft.com/azure/aks/custom-node-configuration) for more details.
         */
        export interface LinuxOSConfigResponse {
            /**
             * The size in MB of a swap file that will be created on each node.
             */
            swapFileSizeMB?: number;
            /**
             * Sysctl settings for Linux agent nodes.
             */
            sysctls?: v20210801.SysctlConfigResponse;
            /**
             * Valid values are 'always', 'defer', 'defer+madvise', 'madvise' and 'never'. The default is 'madvise'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
             */
            transparentHugePageDefrag?: string;
            /**
             * Valid values are 'always', 'madvise', and 'never'. The default is 'always'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
             */
            transparentHugePageEnabled?: string;
        }

        /**
         * Describes the Power State of the cluster
         */
        export interface PowerStateResponse {
            /**
             * Tells whether the cluster is Running or Stopped
             */
            code?: string;
        }

        /**
         * Sysctl settings for Linux agent nodes.
         */
        export interface SysctlConfigResponse {
            /**
             * Sysctl setting fs.aio-max-nr.
             */
            fsAioMaxNr?: number;
            /**
             * Sysctl setting fs.file-max.
             */
            fsFileMax?: number;
            /**
             * Sysctl setting fs.inotify.max_user_watches.
             */
            fsInotifyMaxUserWatches?: number;
            /**
             * Sysctl setting fs.nr_open.
             */
            fsNrOpen?: number;
            /**
             * Sysctl setting kernel.threads-max.
             */
            kernelThreadsMax?: number;
            /**
             * Sysctl setting net.core.netdev_max_backlog.
             */
            netCoreNetdevMaxBacklog?: number;
            /**
             * Sysctl setting net.core.optmem_max.
             */
            netCoreOptmemMax?: number;
            /**
             * Sysctl setting net.core.rmem_default.
             */
            netCoreRmemDefault?: number;
            /**
             * Sysctl setting net.core.rmem_max.
             */
            netCoreRmemMax?: number;
            /**
             * Sysctl setting net.core.somaxconn.
             */
            netCoreSomaxconn?: number;
            /**
             * Sysctl setting net.core.wmem_default.
             */
            netCoreWmemDefault?: number;
            /**
             * Sysctl setting net.core.wmem_max.
             */
            netCoreWmemMax?: number;
            /**
             * Sysctl setting net.ipv4.ip_local_port_range.
             */
            netIpv4IpLocalPortRange?: string;
            /**
             * Sysctl setting net.ipv4.neigh.default.gc_thresh1.
             */
            netIpv4NeighDefaultGcThresh1?: number;
            /**
             * Sysctl setting net.ipv4.neigh.default.gc_thresh2.
             */
            netIpv4NeighDefaultGcThresh2?: number;
            /**
             * Sysctl setting net.ipv4.neigh.default.gc_thresh3.
             */
            netIpv4NeighDefaultGcThresh3?: number;
            /**
             * Sysctl setting net.ipv4.tcp_fin_timeout.
             */
            netIpv4TcpFinTimeout?: number;
            /**
             * Sysctl setting net.ipv4.tcp_keepalive_probes.
             */
            netIpv4TcpKeepaliveProbes?: number;
            /**
             * Sysctl setting net.ipv4.tcp_keepalive_time.
             */
            netIpv4TcpKeepaliveTime?: number;
            /**
             * Sysctl setting net.ipv4.tcp_max_syn_backlog.
             */
            netIpv4TcpMaxSynBacklog?: number;
            /**
             * Sysctl setting net.ipv4.tcp_max_tw_buckets.
             */
            netIpv4TcpMaxTwBuckets?: number;
            /**
             * Sysctl setting net.ipv4.tcp_tw_reuse.
             */
            netIpv4TcpTwReuse?: boolean;
            /**
             * Sysctl setting net.ipv4.tcp_keepalive_intvl.
             */
            netIpv4TcpkeepaliveIntvl?: number;
            /**
             * Sysctl setting net.netfilter.nf_conntrack_buckets.
             */
            netNetfilterNfConntrackBuckets?: number;
            /**
             * Sysctl setting net.netfilter.nf_conntrack_max.
             */
            netNetfilterNfConntrackMax?: number;
            /**
             * Sysctl setting vm.max_map_count.
             */
            vmMaxMapCount?: number;
            /**
             * Sysctl setting vm.swappiness.
             */
            vmSwappiness?: number;
            /**
             * Sysctl setting vm.vfs_cache_pressure.
             */
            vmVfsCachePressure?: number;
        }

    }

    export namespace v20220402preview {
        /**
         * Settings for upgrading an agentpool
         */
        export interface AgentPoolUpgradeSettingsResponse {
            /**
             * This can either be set to an integer (e.g. '5') or a percentage (e.g. '50%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified, the default is 1. For more information, including best practices, see: https://docs.microsoft.com/azure/aks/upgrade-cluster#customize-node-surge-upgrade
             */
            maxSurge?: string;
        }

        /**
         * Data used when creating a target resource from a source resource.
         */
        export interface CreationDataResponse {
            /**
             * This is the ARM ID of the source object to be used to create the target object.
             */
            sourceResourceId?: string;
        }

        /**
         * See [AKS custom node configuration](https://docs.microsoft.com/azure/aks/custom-node-configuration) for more details.
         */
        export interface KubeletConfigResponse {
            /**
             * Allowed list of unsafe sysctls or unsafe sysctl patterns (ending in `*`).
             */
            allowedUnsafeSysctls?: string[];
            /**
             * The maximum number of container log files that can be present for a container. The number must be ≥ 2.
             */
            containerLogMaxFiles?: number;
            /**
             * The maximum size (e.g. 10Mi) of container log file before it is rotated.
             */
            containerLogMaxSizeMB?: number;
            /**
             * The default is true.
             */
            cpuCfsQuota?: boolean;
            /**
             * The default is '100ms.' Valid values are a sequence of decimal numbers with an optional fraction and a unit suffix. For example: '300ms', '2h45m'. Supported units are 'ns', 'us', 'ms', 's', 'm', and 'h'.
             */
            cpuCfsQuotaPeriod?: string;
            /**
             * The default is 'none'. See [Kubernetes CPU management policies](https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/#cpu-management-policies) for more information. Allowed values are 'none' and 'static'.
             */
            cpuManagerPolicy?: string;
            /**
             * If set to true it will make the Kubelet fail to start if swap is enabled on the node.
             */
            failSwapOn?: boolean;
            /**
             * To disable image garbage collection, set to 100. The default is 85%
             */
            imageGcHighThreshold?: number;
            /**
             * This cannot be set higher than imageGcHighThreshold. The default is 80%
             */
            imageGcLowThreshold?: number;
            /**
             * The maximum number of processes per pod.
             */
            podMaxPids?: number;
            /**
             * For more information see [Kubernetes Topology Manager](https://kubernetes.io/docs/tasks/administer-cluster/topology-manager). The default is 'none'. Allowed values are 'none', 'best-effort', 'restricted', and 'single-numa-node'.
             */
            topologyManagerPolicy?: string;
        }

        /**
         * See [AKS custom node configuration](https://docs.microsoft.com/azure/aks/custom-node-configuration) for more details.
         */
        export interface LinuxOSConfigResponse {
            /**
             * The size in MB of a swap file that will be created on each node.
             */
            swapFileSizeMB?: number;
            /**
             * Sysctl settings for Linux agent nodes.
             */
            sysctls?: v20220402preview.SysctlConfigResponse;
            /**
             * Valid values are 'always', 'defer', 'defer+madvise', 'madvise' and 'never'. The default is 'madvise'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
             */
            transparentHugePageDefrag?: string;
            /**
             * Valid values are 'always', 'madvise', and 'never'. The default is 'always'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
             */
            transparentHugePageEnabled?: string;
        }

        /**
         * Describes the Power State of the cluster
         */
        export interface PowerStateResponse {
            /**
             * Tells whether the cluster is Running or Stopped
             */
            code?: string;
        }

        /**
         * Sysctl settings for Linux agent nodes.
         */
        export interface SysctlConfigResponse {
            /**
             * Sysctl setting fs.aio-max-nr.
             */
            fsAioMaxNr?: number;
            /**
             * Sysctl setting fs.file-max.
             */
            fsFileMax?: number;
            /**
             * Sysctl setting fs.inotify.max_user_watches.
             */
            fsInotifyMaxUserWatches?: number;
            /**
             * Sysctl setting fs.nr_open.
             */
            fsNrOpen?: number;
            /**
             * Sysctl setting kernel.threads-max.
             */
            kernelThreadsMax?: number;
            /**
             * Sysctl setting net.core.netdev_max_backlog.
             */
            netCoreNetdevMaxBacklog?: number;
            /**
             * Sysctl setting net.core.optmem_max.
             */
            netCoreOptmemMax?: number;
            /**
             * Sysctl setting net.core.rmem_default.
             */
            netCoreRmemDefault?: number;
            /**
             * Sysctl setting net.core.rmem_max.
             */
            netCoreRmemMax?: number;
            /**
             * Sysctl setting net.core.somaxconn.
             */
            netCoreSomaxconn?: number;
            /**
             * Sysctl setting net.core.wmem_default.
             */
            netCoreWmemDefault?: number;
            /**
             * Sysctl setting net.core.wmem_max.
             */
            netCoreWmemMax?: number;
            /**
             * Sysctl setting net.ipv4.ip_local_port_range.
             */
            netIpv4IpLocalPortRange?: string;
            /**
             * Sysctl setting net.ipv4.neigh.default.gc_thresh1.
             */
            netIpv4NeighDefaultGcThresh1?: number;
            /**
             * Sysctl setting net.ipv4.neigh.default.gc_thresh2.
             */
            netIpv4NeighDefaultGcThresh2?: number;
            /**
             * Sysctl setting net.ipv4.neigh.default.gc_thresh3.
             */
            netIpv4NeighDefaultGcThresh3?: number;
            /**
             * Sysctl setting net.ipv4.tcp_fin_timeout.
             */
            netIpv4TcpFinTimeout?: number;
            /**
             * Sysctl setting net.ipv4.tcp_keepalive_probes.
             */
            netIpv4TcpKeepaliveProbes?: number;
            /**
             * Sysctl setting net.ipv4.tcp_keepalive_time.
             */
            netIpv4TcpKeepaliveTime?: number;
            /**
             * Sysctl setting net.ipv4.tcp_max_syn_backlog.
             */
            netIpv4TcpMaxSynBacklog?: number;
            /**
             * Sysctl setting net.ipv4.tcp_max_tw_buckets.
             */
            netIpv4TcpMaxTwBuckets?: number;
            /**
             * Sysctl setting net.ipv4.tcp_tw_reuse.
             */
            netIpv4TcpTwReuse?: boolean;
            /**
             * Sysctl setting net.ipv4.tcp_keepalive_intvl.
             */
            netIpv4TcpkeepaliveIntvl?: number;
            /**
             * Sysctl setting net.netfilter.nf_conntrack_buckets.
             */
            netNetfilterNfConntrackBuckets?: number;
            /**
             * Sysctl setting net.netfilter.nf_conntrack_max.
             */
            netNetfilterNfConntrackMax?: number;
            /**
             * Sysctl setting vm.max_map_count.
             */
            vmMaxMapCount?: number;
            /**
             * Sysctl setting vm.swappiness.
             */
            vmSwappiness?: number;
            /**
             * Sysctl setting vm.vfs_cache_pressure.
             */
            vmVfsCachePressure?: number;
        }

    }

    export namespace v20220702preview {
        /**
         * The credential result response.
         */
        export interface FleetCredentialResultResponse {
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
         * The FleetHubProfile configures the fleet hub.
         */
        export interface FleetHubProfileResponse {
            /**
             * DNS prefix used to create the FQDN for the Fleet hub.
             */
            dnsPrefix?: string;
            /**
             * The FQDN of the Fleet hub.
             */
            fqdn: string;
            /**
             * The Kubernetes version of the Fleet hub.
             */
            kubernetesVersion: string;
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

    }

    export namespace v20230315preview {
        /**
         * The resource management error additional info.
         */
        export interface ErrorAdditionalInfoResponse {
            /**
             * The additional info.
             */
            info: any;
            /**
             * The additional info type.
             */
            type: string;
        }

        /**
         * The error detail.
         */
        export interface ErrorDetailResponse {
            /**
             * The error additional info.
             */
            additionalInfo: v20230315preview.ErrorAdditionalInfoResponse[];
            /**
             * The error code.
             */
            code: string;
            /**
             * The error details.
             */
            details: v20230315preview.ErrorDetailResponse[];
            /**
             * The error message.
             */
            message: string;
            /**
             * The error target.
             */
            target: string;
        }

        /**
         * One credential result item.
         */
        export interface FleetCredentialResultResponse {
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
         * The FleetHubProfile configures the fleet hub.
         */
        export interface FleetHubProfileResponse {
            /**
             * DNS prefix used to create the FQDN for the Fleet hub.
             */
            dnsPrefix?: string;
            /**
             * The FQDN of the Fleet hub.
             */
            fqdn: string;
            /**
             * The Kubernetes version of the Fleet hub.
             */
            kubernetesVersion: string;
        }

        /**
         * The update to be applied to the ManagedClusters.
         */
        export interface ManagedClusterUpdateResponse {
            /**
             * The upgrade to apply to the ManagedClusters.
             */
            upgrade: v20230315preview.ManagedClusterUpgradeSpecResponse;
        }

        /**
         * The upgrade to apply to a ManagedCluster.
         */
        export interface ManagedClusterUpgradeSpecResponse {
            /**
             * The Kubernetes version to upgrade the member clusters to.
             */
            kubernetesVersion?: string;
            /**
             * The upgrade type.
             * Full requires the KubernetesVersion property to be set.
             * NodeImageOnly requires the KubernetesVersion property not to be set.
             */
            type: string;
        }

        /**
         * The status of a member update operation.
         */
        export interface MemberUpdateStatusResponse {
            /**
             * The Azure resource id of the target Kubernetes cluster.
             */
            clusterResourceId: string;
            /**
             * The name of the FleetMember.
             */
            name: string;
            /**
             * The operation resource id of the latest attempt to perform the operation.
             */
            operationId: string;
            /**
             * The status of the MemberUpdate operation.
             */
            status: v20230315preview.UpdateStatusResponse;
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
         * A group to be updated.
         */
        export interface UpdateGroupResponse {
            /**
             * The name of the Fleet member group to update. 
             * It should match the name of an existing FleetMember group.
             * A group can only appear once across all UpdateStages in the UpdateRun.
             */
            name: string;
        }

        /**
         * The status of a UpdateGroup.
         */
        export interface UpdateGroupStatusResponse {
            /**
             * The list of member this UpdateGroup updates.
             */
            members: v20230315preview.MemberUpdateStatusResponse[];
            /**
             * The name of the UpdateGroup.
             */
            name: string;
            /**
             * The status of the UpdateGroup.
             */
            status: v20230315preview.UpdateStatusResponse;
        }

        /**
         * The status of a UpdateRun.
         */
        export interface UpdateRunStatusResponse {
            /**
             * The stages composing an update run. Stages are run sequentially withing an UpdateRun.
             */
            stages: v20230315preview.UpdateStageStatusResponse[];
            /**
             * The status of the UpdateRun.
             */
            status: v20230315preview.UpdateStatusResponse;
        }

        /**
         * The UpdateRunStrategy configures the sequence of Stages and Groups in which the clusters will be updated.
         */
        export interface UpdateRunStrategyResponse {
            /**
             * The list of stages that compose this update run.
             */
            stages: v20230315preview.UpdateStageResponse[];
        }

        /**
         * Contains the groups to be updated by an UpdateRun.
         * Update order:
         * - Sequential between stages: Stages run sequentially. The previous stage must complete before the next one starts.
         * - Parallel within a stage: Groups within a stage run in parallel.
         * - Sequential within a group: Clusters within a group are updated sequentially.
         */
        export interface UpdateStageResponse {
            /**
             * The time in seconds to wait at the end of this stage before starting the next one. Defaults to 0 seconds if unspecified.
             */
            afterStageWaitInSeconds?: number;
            /**
             * A list of group names that compose the stage.
             * The groups will be updated in parallel. Each group name can only appear once in the UpdateRun.
             */
            groups?: v20230315preview.UpdateGroupResponse[];
            /**
             * The name of the stage. Must be unique within the UpdateRun.
             */
            name: string;
        }

        /**
         * The status of a UpdateStage.
         */
        export interface UpdateStageStatusResponse {
            /**
             * The status of the wait period configured on the UpdateStage.
             */
            afterStageWaitStatus: v20230315preview.WaitStatusResponse;
            /**
             * The list of groups to be updated as part of this UpdateStage.
             */
            groups: v20230315preview.UpdateGroupStatusResponse[];
            /**
             * The name of the UpdateStage.
             */
            name: string;
            /**
             * The status of the UpdateStage.
             */
            status: v20230315preview.UpdateStatusResponse;
        }

        /**
         * The status for an operation or group of operations.
         */
        export interface UpdateStatusResponse {
            /**
             * The time the operation or group was completed.
             */
            completedTime: string;
            /**
             * The error details when a failure is encountered.
             */
            error: v20230315preview.ErrorDetailResponse;
            /**
             * The time the operation or group was started.
             */
            startTime: string;
            /**
             * The State of the operation or group.
             */
            state: string;
        }

        /**
         * The status of the wait duration.
         */
        export interface WaitStatusResponse {
            /**
             * The status of the wait duration.
             */
            status: v20230315preview.UpdateStatusResponse;
            /**
             * The wait duration configured in seconds.
             */
            waitDurationInSeconds: number;
        }

    }

    export namespace v20230401 {
        /**
         * Settings for upgrading an agentpool
         */
        export interface AgentPoolUpgradeSettingsResponse {
            /**
             * This can either be set to an integer (e.g. '5') or a percentage (e.g. '50%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified, the default is 1. For more information, including best practices, see: https://docs.microsoft.com/azure/aks/upgrade-cluster#customize-node-surge-upgrade
             */
            maxSurge?: string;
        }

        /**
         * Azure Key Vault key management service settings for the security profile.
         */
        export interface AzureKeyVaultKmsResponse {
            /**
             * Whether to enable Azure Key Vault key management service. The default is false.
             */
            enabled?: boolean;
            /**
             * Identifier of Azure Key Vault key. See [key identifier format](https://docs.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates#vault-name-and-object-name) for more details. When Azure Key Vault key management service is enabled, this field is required and must be a valid key identifier. When Azure Key Vault key management service is disabled, leave the field empty.
             */
            keyId?: string;
            /**
             * Network access of key vault. The possible values are `Public` and `Private`. `Public` means the key vault allows public access from all networks. `Private` means the key vault disables public access and enables private link. The default value is `Public`.
             */
            keyVaultNetworkAccess?: string;
            /**
             * Resource ID of key vault. When keyVaultNetworkAccess is `Private`, this field is required and must be a valid resource ID. When keyVaultNetworkAccess is `Public`, leave the field empty.
             */
            keyVaultResourceId?: string;
        }
        /**
         * azureKeyVaultKmsResponseProvideDefaults sets the appropriate defaults for AzureKeyVaultKmsResponse
         */
        export function azureKeyVaultKmsResponseProvideDefaults(val: AzureKeyVaultKmsResponse): AzureKeyVaultKmsResponse {
            return {
                ...val,
                keyVaultNetworkAccess: (val.keyVaultNetworkAccess) ?? "Public",
            };
        }

        /**
         * Profile for Linux VMs in the container service cluster.
         */
        export interface ContainerServiceLinuxProfileResponse {
            /**
             * The administrator username to use for Linux VMs.
             */
            adminUsername: string;
            /**
             * The SSH configuration for Linux-based VMs running on Azure.
             */
            ssh: v20230401.ContainerServiceSshConfigurationResponse;
        }

        /**
         * Profile of network configuration.
         */
        export interface ContainerServiceNetworkProfileResponse {
            /**
             * An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
             */
            dnsServiceIP?: string;
            /**
             * IP families are used to determine single-stack or dual-stack clusters. For single-stack, the expected value is IPv4. For dual-stack, the expected values are IPv4 and IPv6.
             */
            ipFamilies?: string[];
            /**
             * Profile of the cluster load balancer.
             */
            loadBalancerProfile?: v20230401.ManagedClusterLoadBalancerProfileResponse;
            /**
             * The default is 'standard'. See [Azure Load Balancer SKUs](https://docs.microsoft.com/azure/load-balancer/skus) for more information about the differences between load balancer SKUs.
             */
            loadBalancerSku?: string;
            /**
             * Profile of the cluster NAT gateway.
             */
            natGatewayProfile?: v20230401.ManagedClusterNATGatewayProfileResponse;
            /**
             * Network dataplane used in the Kubernetes cluster.
             */
            networkDataplane?: string;
            /**
             * This cannot be specified if networkPlugin is anything other than 'azure'.
             */
            networkMode?: string;
            /**
             * Network plugin used for building the Kubernetes network.
             */
            networkPlugin?: string;
            /**
             * The mode the network plugin should use.
             */
            networkPluginMode?: string;
            /**
             * Network policy used for building the Kubernetes network.
             */
            networkPolicy?: string;
            /**
             * This can only be set at cluster creation time and cannot be changed later. For more information see [egress outbound type](https://docs.microsoft.com/azure/aks/egress-outboundtype).
             */
            outboundType?: string;
            /**
             * A CIDR notation IP range from which to assign pod IPs when kubenet is used.
             */
            podCidr?: string;
            /**
             * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
             */
            podCidrs?: string[];
            /**
             * A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
             */
            serviceCidr?: string;
            /**
             * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking. They must not overlap with any Subnet IP ranges.
             */
            serviceCidrs?: string[];
        }
        /**
         * containerServiceNetworkProfileResponseProvideDefaults sets the appropriate defaults for ContainerServiceNetworkProfileResponse
         */
        export function containerServiceNetworkProfileResponseProvideDefaults(val: ContainerServiceNetworkProfileResponse): ContainerServiceNetworkProfileResponse {
            return {
                ...val,
                dnsServiceIP: (val.dnsServiceIP) ?? "10.0.0.10",
                loadBalancerProfile: (val.loadBalancerProfile ? v20230401.managedClusterLoadBalancerProfileResponseProvideDefaults(val.loadBalancerProfile) : undefined),
                natGatewayProfile: (val.natGatewayProfile ? v20230401.managedClusterNATGatewayProfileResponseProvideDefaults(val.natGatewayProfile) : undefined),
                networkPlugin: (val.networkPlugin) ?? "kubenet",
                outboundType: (val.outboundType) ?? "loadBalancer",
                podCidr: (val.podCidr) ?? "10.244.0.0/16",
                serviceCidr: (val.serviceCidr) ?? "10.0.0.0/16",
            };
        }

        /**
         * SSH configuration for Linux-based VMs running on Azure.
         */
        export interface ContainerServiceSshConfigurationResponse {
            /**
             * The list of SSH public keys used to authenticate with Linux-based VMs. A maximum of 1 key may be specified.
             */
            publicKeys: v20230401.ContainerServiceSshPublicKeyResponse[];
        }

        /**
         * Contains information about SSH certificate public key data.
         */
        export interface ContainerServiceSshPublicKeyResponse {
            /**
             * Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.
             */
            keyData: string;
        }

        /**
         * Data used when creating a target resource from a source resource.
         */
        export interface CreationDataResponse {
            /**
             * This is the ARM ID of the source object to be used to create the target object.
             */
            sourceResourceId?: string;
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
         * The complex type of the extended location.
         */
        export interface ExtendedLocationResponse {
            /**
             * The name of the extended location.
             */
            name?: string;
            /**
             * The type of the extended location.
             */
            type?: string;
        }

        /**
         * See [AKS custom node configuration](https://docs.microsoft.com/azure/aks/custom-node-configuration) for more details.
         */
        export interface KubeletConfigResponse {
            /**
             * Allowed list of unsafe sysctls or unsafe sysctl patterns (ending in `*`).
             */
            allowedUnsafeSysctls?: string[];
            /**
             * The maximum number of container log files that can be present for a container. The number must be ≥ 2.
             */
            containerLogMaxFiles?: number;
            /**
             * The maximum size (e.g. 10Mi) of container log file before it is rotated.
             */
            containerLogMaxSizeMB?: number;
            /**
             * The default is true.
             */
            cpuCfsQuota?: boolean;
            /**
             * The default is '100ms.' Valid values are a sequence of decimal numbers with an optional fraction and a unit suffix. For example: '300ms', '2h45m'. Supported units are 'ns', 'us', 'ms', 's', 'm', and 'h'.
             */
            cpuCfsQuotaPeriod?: string;
            /**
             * The default is 'none'. See [Kubernetes CPU management policies](https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/#cpu-management-policies) for more information. Allowed values are 'none' and 'static'.
             */
            cpuManagerPolicy?: string;
            /**
             * If set to true it will make the Kubelet fail to start if swap is enabled on the node.
             */
            failSwapOn?: boolean;
            /**
             * To disable image garbage collection, set to 100. The default is 85%
             */
            imageGcHighThreshold?: number;
            /**
             * This cannot be set higher than imageGcHighThreshold. The default is 80%
             */
            imageGcLowThreshold?: number;
            /**
             * The maximum number of processes per pod.
             */
            podMaxPids?: number;
            /**
             * For more information see [Kubernetes Topology Manager](https://kubernetes.io/docs/tasks/administer-cluster/topology-manager). The default is 'none'. Allowed values are 'none', 'best-effort', 'restricted', and 'single-numa-node'.
             */
            topologyManagerPolicy?: string;
        }

        /**
         * See [AKS custom node configuration](https://docs.microsoft.com/azure/aks/custom-node-configuration) for more details.
         */
        export interface LinuxOSConfigResponse {
            /**
             * The size in MB of a swap file that will be created on each node.
             */
            swapFileSizeMB?: number;
            /**
             * Sysctl settings for Linux agent nodes.
             */
            sysctls?: v20230401.SysctlConfigResponse;
            /**
             * Valid values are 'always', 'defer', 'defer+madvise', 'madvise' and 'never'. The default is 'madvise'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
             */
            transparentHugePageDefrag?: string;
            /**
             * Valid values are 'always', 'madvise', and 'never'. The default is 'always'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
             */
            transparentHugePageEnabled?: string;
        }

        /**
         * For more details see [managed AAD on AKS](https://docs.microsoft.com/azure/aks/managed-aad).
         */
        export interface ManagedClusterAADProfileResponse {
            /**
             * The list of AAD group object IDs that will have admin role of the cluster.
             */
            adminGroupObjectIDs?: string[];
            /**
             * (DEPRECATED) The client AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
             */
            clientAppID?: string;
            /**
             * Whether to enable Azure RBAC for Kubernetes authorization.
             */
            enableAzureRBAC?: boolean;
            /**
             * Whether to enable managed AAD.
             */
            managed?: boolean;
            /**
             * (DEPRECATED) The server AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
             */
            serverAppID?: string;
            /**
             * (DEPRECATED) The server AAD application secret. Learn more at https://aka.ms/aks/aad-legacy.
             */
            serverAppSecret?: string;
            /**
             * The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription.
             */
            tenantID?: string;
        }

        /**
         * Access profile for managed cluster API server.
         */
        export interface ManagedClusterAPIServerAccessProfileResponse {
            /**
             * IP ranges are specified in CIDR format, e.g. 137.117.106.88/29. This feature is not compatible with clusters that use Public IP Per Node, or clusters that are using a Basic Load Balancer. For more information see [API server authorized IP ranges](https://docs.microsoft.com/azure/aks/api-server-authorized-ip-ranges).
             */
            authorizedIPRanges?: string[];
            /**
             * Whether to disable run command for the cluster or not.
             */
            disableRunCommand?: boolean;
            /**
             * For more details, see [Creating a private AKS cluster](https://docs.microsoft.com/azure/aks/private-clusters).
             */
            enablePrivateCluster?: boolean;
            /**
             * Whether to create additional public FQDN for private cluster or not.
             */
            enablePrivateClusterPublicFQDN?: boolean;
            /**
             * The default is System. For more details see [configure private DNS zone](https://docs.microsoft.com/azure/aks/private-clusters#configure-private-dns-zone). Allowed values are 'system' and 'none'.
             */
            privateDNSZone?: string;
        }

        /**
         * A Kubernetes add-on profile for a managed cluster.
         */
        export interface ManagedClusterAddonProfileResponse {
            /**
             * Key-value pairs for configuring an add-on.
             */
            config?: {[key: string]: string};
            /**
             * Whether the add-on is enabled or not.
             */
            enabled: boolean;
            /**
             * Information of user assigned identity used by this add-on.
             */
            identity: v20230401.ManagedClusterAddonProfileResponseIdentity;
        }

        /**
         * Information of user assigned identity used by this add-on.
         */
        export interface ManagedClusterAddonProfileResponseIdentity {
            /**
             * The client ID of the user assigned identity.
             */
            clientId?: string;
            /**
             * The object ID of the user assigned identity.
             */
            objectId?: string;
            /**
             * The resource ID of the user assigned identity.
             */
            resourceId?: string;
        }

        /**
         * Profile for the container service agent pool.
         */
        export interface ManagedClusterAgentPoolProfileResponse {
            /**
             * The list of Availability zones to use for nodes. This can only be specified if the AgentPoolType property is 'VirtualMachineScaleSets'.
             */
            availabilityZones?: string[];
            /**
             * Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 1000 (inclusive) for user pools and in the range of 1 to 1000 (inclusive) for system pools. The default value is 1.
             */
            count?: number;
            /**
             * CreationData to be used to specify the source Snapshot ID if the node pool will be created/upgraded using a snapshot.
             */
            creationData?: v20230401.CreationDataResponse;
            /**
             * If orchestratorVersion is a fully specified version <major.minor.patch>, this field will be exactly equal to it. If orchestratorVersion is <major.minor>, this field will contain the full <major.minor.patch> version being used.
             */
            currentOrchestratorVersion: string;
            /**
             * Whether to enable auto-scaler
             */
            enableAutoScaling?: boolean;
            /**
             * This is only supported on certain VM sizes and in certain Azure regions. For more information, see: https://docs.microsoft.com/azure/aks/enable-host-encryption
             */
            enableEncryptionAtHost?: boolean;
            /**
             * See [Add a FIPS-enabled node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#add-a-fips-enabled-node-pool-preview) for more details.
             */
            enableFIPS?: boolean;
            /**
             * Some scenarios may require nodes in a node pool to receive their own dedicated public IP addresses. A common scenario is for gaming workloads, where a console needs to make a direct connection to a cloud virtual machine to minimize hops. For more information see [assigning a public IP per node](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#assign-a-public-ip-per-node-for-your-node-pools). The default is false.
             */
            enableNodePublicIP?: boolean;
            /**
             * Whether to enable UltraSSD
             */
            enableUltraSSD?: boolean;
            /**
             * GPUInstanceProfile to be used to specify GPU MIG instance profile for supported GPU VM SKU.
             */
            gpuInstanceProfile?: string;
            /**
             * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}. For more information see [Azure dedicated hosts](https://docs.microsoft.com/azure/virtual-machines/dedicated-hosts).
             */
            hostGroupID?: string;
            /**
             * The Kubelet configuration on the agent pool nodes.
             */
            kubeletConfig?: v20230401.KubeletConfigResponse;
            /**
             * Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage.
             */
            kubeletDiskType?: string;
            /**
             * The OS configuration of Linux agent nodes.
             */
            linuxOSConfig?: v20230401.LinuxOSConfigResponse;
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
             * A cluster must have at least one 'System' Agent Pool at all times. For additional information on agent pool restrictions and best practices, see: https://docs.microsoft.com/azure/aks/use-system-pools
             */
            mode?: string;
            /**
             * Windows agent pool names must be 6 characters or less.
             */
            name: string;
            /**
             * The version of node image
             */
            nodeImageVersion: string;
            /**
             * The node labels to be persisted across all nodes in agent pool.
             */
            nodeLabels?: {[key: string]: string};
            /**
             * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIPPrefixName}
             */
            nodePublicIPPrefixID?: string;
            /**
             * The taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
             */
            nodeTaints?: string[];
            /**
             * Both patch version <major.minor.patch> (e.g. 1.20.13) and <major.minor> (e.g. 1.20) are supported. When <major.minor> is specified, the latest supported GA patch version is chosen automatically. Updating the cluster with the same <major.minor> once it has been created (e.g. 1.14.x -> 1.14) will not trigger an upgrade, even if a newer patch version is available. As a best practice, you should upgrade all node pools in an AKS cluster to the same Kubernetes version. The node pool version must have the same major version as the control plane. The node pool minor version must be within two minor versions of the control plane version. The node pool version cannot be greater than the control plane version. For more information see [upgrading a node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#upgrade-a-node-pool).
             */
            orchestratorVersion?: string;
            /**
             * OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
             */
            osDiskSizeGB?: number;
            /**
             * The default is 'Ephemeral' if the VM supports it and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation. For more information see [Ephemeral OS](https://docs.microsoft.com/azure/aks/cluster-configuration#ephemeral-os).
             */
            osDiskType?: string;
            /**
             * Specifies the OS SKU used by the agent pool. The default is Ubuntu if OSType is Linux. The default is Windows2019 when Kubernetes <= 1.24 or Windows2022 when Kubernetes >= 1.25 if OSType is Windows.
             */
            osSKU?: string;
            /**
             * The operating system type. The default is Linux.
             */
            osType?: string;
            /**
             * If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
             */
            podSubnetID?: string;
            /**
             * When an Agent Pool is first created it is initially Running. The Agent Pool can be stopped by setting this field to Stopped. A stopped Agent Pool stops all of its VMs and does not accrue billing charges. An Agent Pool can only be stopped if it is Running and provisioning state is Succeeded
             */
            powerState?: v20230401.PowerStateResponse;
            /**
             * The current deployment or provisioning state.
             */
            provisioningState: string;
            /**
             * The ID for Proximity Placement Group.
             */
            proximityPlacementGroupID?: string;
            /**
             * This also effects the cluster autoscaler behavior. If not specified, it defaults to Delete.
             */
            scaleDownMode?: string;
            /**
             * This cannot be specified unless the scaleSetPriority is 'Spot'. If not specified, the default is 'Delete'.
             */
            scaleSetEvictionPolicy?: string;
            /**
             * The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'.
             */
            scaleSetPriority?: string;
            /**
             * Possible values are any decimal value greater than zero or -1 which indicates the willingness to pay any on-demand price. For more details on spot pricing, see [spot VMs pricing](https://docs.microsoft.com/azure/virtual-machines/spot-vms#pricing)
             */
            spotMaxPrice?: number;
            /**
             * The tags to be persisted on the agent pool virtual machine scale set.
             */
            tags?: {[key: string]: string};
            /**
             * The type of Agent Pool.
             */
            type?: string;
            /**
             * Settings for upgrading the agentpool
             */
            upgradeSettings?: v20230401.AgentPoolUpgradeSettingsResponse;
            /**
             * VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. For more details on restricted VM sizes, see: https://docs.microsoft.com/azure/aks/quotas-skus-regions
             */
            vmSize?: string;
            /**
             * If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
             */
            vnetSubnetID?: string;
            /**
             * Determines the type of workload a node can run.
             */
            workloadRuntime?: string;
        }

        /**
         * Auto upgrade profile for a managed cluster.
         */
        export interface ManagedClusterAutoUpgradeProfileResponse {
            /**
             * For more information see [setting the AKS cluster auto-upgrade channel](https://docs.microsoft.com/azure/aks/upgrade-cluster#set-auto-upgrade-channel).
             */
            upgradeChannel?: string;
        }

        /**
         * Kube State Metrics profile for the Azure Managed Prometheus addon. These optional settings are for the kube-state-metrics pod that is deployed with the addon. See aka.ms/AzureManagedPrometheus-optional-parameters for details.
         */
        export interface ManagedClusterAzureMonitorProfileKubeStateMetricsResponse {
            /**
             * Comma-separated list of Kubernetes annotation keys that will be used in the resource's labels metric (Example: 'namespaces=[kubernetes.io/team,...],pods=[kubernetes.io/team],...'). By default the metric contains only resource name and namespace labels.
             */
            metricAnnotationsAllowList?: string;
            /**
             * Comma-separated list of additional Kubernetes label keys that will be used in the resource's labels metric (Example: 'namespaces=[k8s-label-1,k8s-label-n,...],pods=[app],...'). By default the metric contains only resource name and namespace labels.
             */
            metricLabelsAllowlist?: string;
        }

        /**
         * Metrics profile for the Azure Monitor managed service for Prometheus addon. Collect out-of-the-box Kubernetes infrastructure metrics to send to an Azure Monitor Workspace and configure additional scraping for custom targets. See aka.ms/AzureManagedPrometheus for an overview.
         */
        export interface ManagedClusterAzureMonitorProfileMetricsResponse {
            /**
             * Whether to enable or disable the Azure Managed Prometheus addon for Prometheus monitoring. See aka.ms/AzureManagedPrometheus-aks-enable for details on enabling and disabling.
             */
            enabled: boolean;
            /**
             * Kube State Metrics profile for the Azure Managed Prometheus addon. These optional settings are for the kube-state-metrics pod that is deployed with the addon. See aka.ms/AzureManagedPrometheus-optional-parameters for details.
             */
            kubeStateMetrics?: v20230401.ManagedClusterAzureMonitorProfileKubeStateMetricsResponse;
        }

        /**
         * Azure Monitor addon profiles for monitoring the managed cluster.
         */
        export interface ManagedClusterAzureMonitorProfileResponse {
            /**
             * Metrics profile for the Azure Monitor managed service for Prometheus addon. Collect out-of-the-box Kubernetes infrastructure metrics to send to an Azure Monitor Workspace and configure additional scraping for custom targets. See aka.ms/AzureManagedPrometheus for an overview.
             */
            metrics?: v20230401.ManagedClusterAzureMonitorProfileMetricsResponse;
        }

        /**
         * Cluster HTTP proxy configuration.
         */
        export interface ManagedClusterHTTPProxyConfigResponse {
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
        }

        /**
         * Identity for the managed cluster.
         */
        export interface ManagedClusterIdentityResponse {
            /**
             * The principal id of the system assigned identity which is used by master components.
             */
            principalId: string;
            /**
             * The tenant id of the system assigned identity which is used by master components.
             */
            tenantId: string;
            /**
             * For more information see [use managed identities in AKS](https://docs.microsoft.com/azure/aks/use-managed-identity).
             */
            type?: string;
            /**
             * The keys must be ARM resource IDs in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentities?: {[key: string]: v20230401.ManagedClusterIdentityResponseUserAssignedIdentities};
        }

        export interface ManagedClusterIdentityResponseUserAssignedIdentities {
            /**
             * The client id of user assigned identity.
             */
            clientId: string;
            /**
             * The principal id of user assigned identity.
             */
            principalId: string;
        }

        /**
         * Profile of the managed cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileResponse {
            /**
             * The desired number of allocated SNAT ports per VM. Allowed values are in the range of 0 to 64000 (inclusive). The default value is 0 which results in Azure dynamically allocating ports.
             */
            allocatedOutboundPorts?: number;
            /**
             * The effective outbound IP resources of the cluster load balancer.
             */
            effectiveOutboundIPs?: v20230401.ResourceReferenceResponse[];
            /**
             * Enable multiple standard load balancers per AKS cluster or not.
             */
            enableMultipleStandardLoadBalancers?: boolean;
            /**
             * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 30 minutes.
             */
            idleTimeoutInMinutes?: number;
            /**
             * Desired managed outbound IPs for the cluster load balancer.
             */
            managedOutboundIPs?: v20230401.ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs;
            /**
             * Desired outbound IP Prefix resources for the cluster load balancer.
             */
            outboundIPPrefixes?: v20230401.ManagedClusterLoadBalancerProfileResponseOutboundIPPrefixes;
            /**
             * Desired outbound IP resources for the cluster load balancer.
             */
            outboundIPs?: v20230401.ManagedClusterLoadBalancerProfileResponseOutboundIPs;
        }
        /**
         * managedClusterLoadBalancerProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileResponse
         */
        export function managedClusterLoadBalancerProfileResponseProvideDefaults(val: ManagedClusterLoadBalancerProfileResponse): ManagedClusterLoadBalancerProfileResponse {
            return {
                ...val,
                allocatedOutboundPorts: (val.allocatedOutboundPorts) ?? 0,
                idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 30,
                managedOutboundIPs: (val.managedOutboundIPs ? v20230401.managedClusterLoadBalancerProfileResponseManagedOutboundIPsProvideDefaults(val.managedOutboundIPs) : undefined),
            };
        }

        /**
         * Desired managed outbound IPs for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs {
            /**
             * The desired number of IPv4 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1. 
             */
            count?: number;
            /**
             * The desired number of IPv6 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 0 for single-stack and 1 for dual-stack. 
             */
            countIPv6?: number;
        }
        /**
         * managedClusterLoadBalancerProfileResponseManagedOutboundIPsProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs
         */
        export function managedClusterLoadBalancerProfileResponseManagedOutboundIPsProvideDefaults(val: ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs): ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs {
            return {
                ...val,
                count: (val.count) ?? 1,
                countIPv6: (val.countIPv6) ?? 0,
            };
        }

        /**
         * Desired outbound IP Prefix resources for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileResponseOutboundIPPrefixes {
            /**
             * A list of public IP prefix resources.
             */
            publicIPPrefixes?: v20230401.ResourceReferenceResponse[];
        }

        /**
         * Desired outbound IP resources for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileResponseOutboundIPs {
            /**
             * A list of public IP resources.
             */
            publicIPs?: v20230401.ResourceReferenceResponse[];
        }

        /**
         * Profile of the managed outbound IP resources of the managed cluster.
         */
        export interface ManagedClusterManagedOutboundIPProfileResponse {
            /**
             * The desired number of outbound IPs created/managed by Azure. Allowed values must be in the range of 1 to 16 (inclusive). The default value is 1. 
             */
            count?: number;
        }
        /**
         * managedClusterManagedOutboundIPProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterManagedOutboundIPProfileResponse
         */
        export function managedClusterManagedOutboundIPProfileResponseProvideDefaults(val: ManagedClusterManagedOutboundIPProfileResponse): ManagedClusterManagedOutboundIPProfileResponse {
            return {
                ...val,
                count: (val.count) ?? 1,
            };
        }

        /**
         * Profile of the managed cluster NAT gateway.
         */
        export interface ManagedClusterNATGatewayProfileResponse {
            /**
             * The effective outbound IP resources of the cluster NAT gateway.
             */
            effectiveOutboundIPs?: v20230401.ResourceReferenceResponse[];
            /**
             * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 4 minutes.
             */
            idleTimeoutInMinutes?: number;
            /**
             * Profile of the managed outbound IP resources of the cluster NAT gateway.
             */
            managedOutboundIPProfile?: v20230401.ManagedClusterManagedOutboundIPProfileResponse;
        }
        /**
         * managedClusterNATGatewayProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterNATGatewayProfileResponse
         */
        export function managedClusterNATGatewayProfileResponseProvideDefaults(val: ManagedClusterNATGatewayProfileResponse): ManagedClusterNATGatewayProfileResponse {
            return {
                ...val,
                idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 4,
                managedOutboundIPProfile: (val.managedOutboundIPProfile ? v20230401.managedClusterManagedOutboundIPProfileResponseProvideDefaults(val.managedOutboundIPProfile) : undefined),
            };
        }

        /**
         * The OIDC issuer profile of the Managed Cluster.
         */
        export interface ManagedClusterOIDCIssuerProfileResponse {
            /**
             * Whether the OIDC issuer is enabled.
             */
            enabled?: boolean;
            /**
             * The OIDC issuer url of the Managed Cluster.
             */
            issuerURL: string;
        }

        /**
         * See [disable AAD Pod Identity for a specific Pod/Application](https://azure.github.io/aad-pod-identity/docs/configure/application_exception/) for more details.
         */
        export interface ManagedClusterPodIdentityExceptionResponse {
            /**
             * The name of the pod identity exception.
             */
            name: string;
            /**
             * The namespace of the pod identity exception.
             */
            namespace: string;
            /**
             * The pod labels to match.
             */
            podLabels: {[key: string]: string};
        }

        /**
         * See [use AAD pod identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity) for more details on pod identity integration.
         */
        export interface ManagedClusterPodIdentityProfileResponse {
            /**
             * Running in Kubenet is disabled by default due to the security related nature of AAD Pod Identity and the risks of IP spoofing. See [using Kubenet network plugin with AAD Pod Identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity#using-kubenet-network-plugin-with-azure-active-directory-pod-managed-identities) for more information.
             */
            allowNetworkPluginKubenet?: boolean;
            /**
             * Whether the pod identity addon is enabled.
             */
            enabled?: boolean;
            /**
             * The pod identities to use in the cluster.
             */
            userAssignedIdentities?: v20230401.ManagedClusterPodIdentityResponse[];
            /**
             * The pod identity exceptions to allow.
             */
            userAssignedIdentityExceptions?: v20230401.ManagedClusterPodIdentityExceptionResponse[];
        }

        /**
         * An error response from the pod identity provisioning.
         */
        export interface ManagedClusterPodIdentityProvisioningErrorBodyResponse {
            /**
             * An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
             */
            code?: string;
            /**
             * A list of additional details about the error.
             */
            details?: v20230401.ManagedClusterPodIdentityProvisioningErrorBodyResponse[];
            /**
             * A message describing the error, intended to be suitable for display in a user interface.
             */
            message?: string;
            /**
             * The target of the particular error. For example, the name of the property in error.
             */
            target?: string;
        }

        /**
         * An error response from the pod identity provisioning.
         */
        export interface ManagedClusterPodIdentityProvisioningErrorResponse {
            /**
             * Details about the error.
             */
            error?: v20230401.ManagedClusterPodIdentityProvisioningErrorBodyResponse;
        }

        /**
         * Details about the pod identity assigned to the Managed Cluster.
         */
        export interface ManagedClusterPodIdentityResponse {
            /**
             * The binding selector to use for the AzureIdentityBinding resource.
             */
            bindingSelector?: string;
            /**
             * The user assigned identity details.
             */
            identity: v20230401.UserAssignedIdentityResponse;
            /**
             * The name of the pod identity.
             */
            name: string;
            /**
             * The namespace of the pod identity.
             */
            namespace: string;
            provisioningInfo: v20230401.ManagedClusterPodIdentityResponseProvisioningInfo;
            /**
             * The current provisioning state of the pod identity.
             */
            provisioningState: string;
        }

        export interface ManagedClusterPodIdentityResponseProvisioningInfo {
            /**
             * Pod identity assignment error (if any).
             */
            error?: v20230401.ManagedClusterPodIdentityProvisioningErrorResponse;
        }

        /**
         * Parameters to be applied to the cluster-autoscaler when enabled
         */
        export interface ManagedClusterPropertiesResponseAutoScalerProfile {
            /**
             * Valid values are 'true' and 'false'
             */
            balanceSimilarNodeGroups?: string;
            /**
             * If not specified, the default is 'random'. See [expanders](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#what-are-expanders) for more information.
             */
            expander?: string;
            /**
             * The default is 10.
             */
            maxEmptyBulkDelete?: string;
            /**
             * The default is 600.
             */
            maxGracefulTerminationSec?: string;
            /**
             * The default is '15m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            maxNodeProvisionTime?: string;
            /**
             * The default is 45. The maximum is 100 and the minimum is 0.
             */
            maxTotalUnreadyPercentage?: string;
            /**
             * For scenarios like burst/batch scale where you don't want CA to act before the kubernetes scheduler could schedule all the pods, you can tell CA to ignore unscheduled pods before they're a certain age. The default is '0s'. Values must be an integer followed by a unit ('s' for seconds, 'm' for minutes, 'h' for hours, etc).
             */
            newPodScaleUpDelay?: string;
            /**
             * This must be an integer. The default is 3.
             */
            okTotalUnreadyCount?: string;
            /**
             * The default is '10m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownDelayAfterAdd?: string;
            /**
             * The default is the scan-interval. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownDelayAfterDelete?: string;
            /**
             * The default is '3m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownDelayAfterFailure?: string;
            /**
             * The default is '10m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownUnneededTime?: string;
            /**
             * The default is '20m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownUnreadyTime?: string;
            /**
             * The default is '0.5'.
             */
            scaleDownUtilizationThreshold?: string;
            /**
             * The default is '10'. Values must be an integer number of seconds.
             */
            scanInterval?: string;
            /**
             * The default is true.
             */
            skipNodesWithLocalStorage?: string;
            /**
             * The default is true.
             */
            skipNodesWithSystemPods?: string;
        }

        /**
         * The SKU of a Managed Cluster.
         */
        export interface ManagedClusterSKUResponse {
            /**
             * The name of a managed cluster SKU.
             */
            name?: string;
            /**
             * If not specified, the default is 'Free'. See [AKS Pricing Tier](https://learn.microsoft.com/azure/aks/free-standard-pricing-tiers) for more details.
             */
            tier?: string;
        }

        /**
         * Microsoft Defender settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileDefenderResponse {
            /**
             * Resource ID of the Log Analytics workspace to be associated with Microsoft Defender. When Microsoft Defender is enabled, this field is required and must be a valid workspace resource ID. When Microsoft Defender is disabled, leave the field empty.
             */
            logAnalyticsWorkspaceResourceId?: string;
            /**
             * Microsoft Defender threat detection for Cloud settings for the security profile.
             */
            securityMonitoring?: v20230401.ManagedClusterSecurityProfileDefenderSecurityMonitoringResponse;
        }

        /**
         * Microsoft Defender settings for the security profile threat detection.
         */
        export interface ManagedClusterSecurityProfileDefenderSecurityMonitoringResponse {
            /**
             * Whether to enable Defender threat detection
             */
            enabled?: boolean;
        }

        /**
         * Image Cleaner removes unused images from nodes, freeing up disk space and helping to reduce attack surface area. Here are settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileImageCleanerResponse {
            /**
             * Whether to enable Image Cleaner on AKS cluster.
             */
            enabled?: boolean;
            /**
             * Image Cleaner scanning interval in hours.
             */
            intervalHours?: number;
        }

        /**
         * Security profile for the container service cluster.
         */
        export interface ManagedClusterSecurityProfileResponse {
            /**
             * Azure Key Vault [key management service](https://kubernetes.io/docs/tasks/administer-cluster/kms-provider/) settings for the security profile.
             */
            azureKeyVaultKms?: v20230401.AzureKeyVaultKmsResponse;
            /**
             * Microsoft Defender settings for the security profile.
             */
            defender?: v20230401.ManagedClusterSecurityProfileDefenderResponse;
            /**
             * Image Cleaner settings for the security profile.
             */
            imageCleaner?: v20230401.ManagedClusterSecurityProfileImageCleanerResponse;
            /**
             * Workload identity settings for the security profile. Workload identity enables Kubernetes applications to access Azure cloud resources securely with Azure AD. See https://aka.ms/aks/wi for more details.
             */
            workloadIdentity?: v20230401.ManagedClusterSecurityProfileWorkloadIdentityResponse;
        }
        /**
         * managedClusterSecurityProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterSecurityProfileResponse
         */
        export function managedClusterSecurityProfileResponseProvideDefaults(val: ManagedClusterSecurityProfileResponse): ManagedClusterSecurityProfileResponse {
            return {
                ...val,
                azureKeyVaultKms: (val.azureKeyVaultKms ? v20230401.azureKeyVaultKmsResponseProvideDefaults(val.azureKeyVaultKms) : undefined),
            };
        }

        /**
         * Workload identity settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileWorkloadIdentityResponse {
            /**
             * Whether to enable workload identity.
             */
            enabled?: boolean;
        }

        /**
         * Information about a service principal identity for the cluster to use for manipulating Azure APIs.
         */
        export interface ManagedClusterServicePrincipalProfileResponse {
            /**
             * The ID for the service principal.
             */
            clientId: string;
            /**
             * The secret password associated with the service principal in plain text.
             */
            secret?: string;
        }

        /**
         * AzureBlob CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileBlobCSIDriverResponse {
            /**
             * Whether to enable AzureBlob CSI Driver. The default value is false.
             */
            enabled?: boolean;
        }

        /**
         * AzureDisk CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileDiskCSIDriverResponse {
            /**
             * Whether to enable AzureDisk CSI Driver. The default value is true.
             */
            enabled?: boolean;
        }

        /**
         * AzureFile CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileFileCSIDriverResponse {
            /**
             * Whether to enable AzureFile CSI Driver. The default value is true.
             */
            enabled?: boolean;
        }

        /**
         * Storage profile for the container service cluster.
         */
        export interface ManagedClusterStorageProfileResponse {
            /**
             * AzureBlob CSI Driver settings for the storage profile.
             */
            blobCSIDriver?: v20230401.ManagedClusterStorageProfileBlobCSIDriverResponse;
            /**
             * AzureDisk CSI Driver settings for the storage profile.
             */
            diskCSIDriver?: v20230401.ManagedClusterStorageProfileDiskCSIDriverResponse;
            /**
             * AzureFile CSI Driver settings for the storage profile.
             */
            fileCSIDriver?: v20230401.ManagedClusterStorageProfileFileCSIDriverResponse;
            /**
             * Snapshot Controller settings for the storage profile.
             */
            snapshotController?: v20230401.ManagedClusterStorageProfileSnapshotControllerResponse;
        }

        /**
         * Snapshot Controller settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileSnapshotControllerResponse {
            /**
             * Whether to enable Snapshot Controller. The default value is true.
             */
            enabled?: boolean;
        }

        /**
         * Profile for Windows VMs in the managed cluster.
         */
        export interface ManagedClusterWindowsProfileResponse {
            /**
             * Specifies the password of the administrator account. <br><br> **Minimum-length:** 8 characters <br><br> **Max-length:** 123 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!"
             */
            adminPassword?: string;
            /**
             * Specifies the name of the administrator account. <br><br> **Restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length:** 1 character <br><br> **Max-length:** 20 characters
             */
            adminUsername: string;
            /**
             * For more details on CSI proxy, see the [CSI proxy GitHub repo](https://github.com/kubernetes-csi/csi-proxy).
             */
            enableCSIProxy?: boolean;
            /**
             * The Windows gMSA Profile in the Managed Cluster.
             */
            gmsaProfile?: v20230401.WindowsGmsaProfileResponse;
            /**
             * The license type to use for Windows VMs. See [Azure Hybrid User Benefits](https://azure.microsoft.com/pricing/hybrid-benefit/faq/) for more details.
             */
            licenseType?: string;
        }

        /**
         * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
         */
        export interface ManagedClusterWorkloadAutoScalerProfileKedaResponse {
            /**
             * Whether to enable KEDA.
             */
            enabled: boolean;
        }

        /**
         * Workload Auto-scaler profile for the managed cluster.
         */
        export interface ManagedClusterWorkloadAutoScalerProfileResponse {
            /**
             * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
             */
            keda?: v20230401.ManagedClusterWorkloadAutoScalerProfileKedaResponse;
        }

        /**
         * Describes the Power State of the cluster
         */
        export interface PowerStateResponse {
            /**
             * Tells whether the cluster is Running or Stopped
             */
            code?: string;
        }

        /**
         * Private endpoint which a connection belongs to.
         */
        export interface PrivateEndpointResponse {
            /**
             * The resource ID of the private endpoint
             */
            id?: string;
        }

        /**
         * A private link resource
         */
        export interface PrivateLinkResourceResponse {
            /**
             * The group ID of the resource.
             */
            groupId?: string;
            /**
             * The ID of the private link resource.
             */
            id?: string;
            /**
             * The name of the private link resource.
             */
            name?: string;
            /**
             * The private link service ID of the resource, this field is exposed only to NRP internally.
             */
            privateLinkServiceID: string;
            /**
             * The RequiredMembers of the resource
             */
            requiredMembers?: string[];
            /**
             * The resource type.
             */
            type?: string;
        }

        /**
         * The state of a private link service connection.
         */
        export interface PrivateLinkServiceConnectionStateResponse {
            /**
             * The private link service connection description.
             */
            description?: string;
            /**
             * The private link service connection status.
             */
            status?: string;
        }

        /**
         * A reference to an Azure resource.
         */
        export interface ResourceReferenceResponse {
            /**
             * The fully qualified Azure resource id.
             */
            id?: string;
        }

        /**
         * Sysctl settings for Linux agent nodes.
         */
        export interface SysctlConfigResponse {
            /**
             * Sysctl setting fs.aio-max-nr.
             */
            fsAioMaxNr?: number;
            /**
             * Sysctl setting fs.file-max.
             */
            fsFileMax?: number;
            /**
             * Sysctl setting fs.inotify.max_user_watches.
             */
            fsInotifyMaxUserWatches?: number;
            /**
             * Sysctl setting fs.nr_open.
             */
            fsNrOpen?: number;
            /**
             * Sysctl setting kernel.threads-max.
             */
            kernelThreadsMax?: number;
            /**
             * Sysctl setting net.core.netdev_max_backlog.
             */
            netCoreNetdevMaxBacklog?: number;
            /**
             * Sysctl setting net.core.optmem_max.
             */
            netCoreOptmemMax?: number;
            /**
             * Sysctl setting net.core.rmem_default.
             */
            netCoreRmemDefault?: number;
            /**
             * Sysctl setting net.core.rmem_max.
             */
            netCoreRmemMax?: number;
            /**
             * Sysctl setting net.core.somaxconn.
             */
            netCoreSomaxconn?: number;
            /**
             * Sysctl setting net.core.wmem_default.
             */
            netCoreWmemDefault?: number;
            /**
             * Sysctl setting net.core.wmem_max.
             */
            netCoreWmemMax?: number;
            /**
             * Sysctl setting net.ipv4.ip_local_port_range.
             */
            netIpv4IpLocalPortRange?: string;
            /**
             * Sysctl setting net.ipv4.neigh.default.gc_thresh1.
             */
            netIpv4NeighDefaultGcThresh1?: number;
            /**
             * Sysctl setting net.ipv4.neigh.default.gc_thresh2.
             */
            netIpv4NeighDefaultGcThresh2?: number;
            /**
             * Sysctl setting net.ipv4.neigh.default.gc_thresh3.
             */
            netIpv4NeighDefaultGcThresh3?: number;
            /**
             * Sysctl setting net.ipv4.tcp_fin_timeout.
             */
            netIpv4TcpFinTimeout?: number;
            /**
             * Sysctl setting net.ipv4.tcp_keepalive_probes.
             */
            netIpv4TcpKeepaliveProbes?: number;
            /**
             * Sysctl setting net.ipv4.tcp_keepalive_time.
             */
            netIpv4TcpKeepaliveTime?: number;
            /**
             * Sysctl setting net.ipv4.tcp_max_syn_backlog.
             */
            netIpv4TcpMaxSynBacklog?: number;
            /**
             * Sysctl setting net.ipv4.tcp_max_tw_buckets.
             */
            netIpv4TcpMaxTwBuckets?: number;
            /**
             * Sysctl setting net.ipv4.tcp_tw_reuse.
             */
            netIpv4TcpTwReuse?: boolean;
            /**
             * Sysctl setting net.ipv4.tcp_keepalive_intvl.
             */
            netIpv4TcpkeepaliveIntvl?: number;
            /**
             * Sysctl setting net.netfilter.nf_conntrack_buckets.
             */
            netNetfilterNfConntrackBuckets?: number;
            /**
             * Sysctl setting net.netfilter.nf_conntrack_max.
             */
            netNetfilterNfConntrackMax?: number;
            /**
             * Sysctl setting vm.max_map_count.
             */
            vmMaxMapCount?: number;
            /**
             * Sysctl setting vm.swappiness.
             */
            vmSwappiness?: number;
            /**
             * Sysctl setting vm.vfs_cache_pressure.
             */
            vmVfsCachePressure?: number;
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
         * Time in a week.
         */
        export interface TimeInWeekResponse {
            /**
             * The day of the week.
             */
            day?: string;
            /**
             * Each integer hour represents a time range beginning at 0m after the hour ending at the next hour (non-inclusive). 0 corresponds to 00:00 UTC, 23 corresponds to 23:00 UTC. Specifying [0, 1] means the 00:00 - 02:00 UTC time range.
             */
            hourSlots?: number[];
        }

        /**
         * For example, between 2021-05-25T13:00:00Z and 2021-05-25T14:00:00Z.
         */
        export interface TimeSpanResponse {
            /**
             * The end of a time span
             */
            end?: string;
            /**
             * The start of a time span
             */
            start?: string;
        }

        /**
         * Details about a user assigned identity.
         */
        export interface UserAssignedIdentityResponse {
            /**
             * The client ID of the user assigned identity.
             */
            clientId?: string;
            /**
             * The object ID of the user assigned identity.
             */
            objectId?: string;
            /**
             * The resource ID of the user assigned identity.
             */
            resourceId?: string;
        }

        /**
         * Windows gMSA Profile in the managed cluster.
         */
        export interface WindowsGmsaProfileResponse {
            /**
             * Specifies the DNS server for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
             */
            dnsServer?: string;
            /**
             * Specifies whether to enable Windows gMSA in the managed cluster.
             */
            enabled?: boolean;
            /**
             * Specifies the root domain name for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
             */
            rootDomainName?: string;
        }

    }

    export namespace v20230502preview {
        /**
         * For schedules like: 'recur every month on the 15th' or 'recur every 3 months on the 20th'.
         */
        export interface AbsoluteMonthlyScheduleResponse {
            /**
             * The date of the month.
             */
            dayOfMonth: number;
            /**
             * Specifies the number of months between each set of occurrences.
             */
            intervalMonths: number;
        }

        /**
         * Network settings of an agent pool.
         */
        export interface AgentPoolNetworkProfileResponse {
            /**
             * The port ranges that are allowed to access. The specified ranges are allowed to overlap.
             */
            allowedHostPorts?: v20230502preview.PortRangeResponse[];
            /**
             * The IDs of the application security groups which agent pool will associate when created.
             */
            applicationSecurityGroups?: string[];
            /**
             * IPTags of instance-level public IPs.
             */
            nodePublicIPTags?: v20230502preview.IPTagResponse[];
        }

        /**
         * Settings for upgrading an agentpool
         */
        export interface AgentPoolUpgradeSettingsResponse {
            /**
             * This can either be set to an integer (e.g. '5') or a percentage (e.g. '50%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified, the default is 1. For more information, including best practices, see: https://docs.microsoft.com/azure/aks/upgrade-cluster#customize-node-surge-upgrade
             */
            maxSurge?: string;
        }

        /**
         * The Windows agent pool's specific profile.
         */
        export interface AgentPoolWindowsProfileResponse {
            /**
             * The default value is false. Outbound NAT can only be disabled if the cluster outboundType is NAT Gateway and the Windows agent pool does not have node public IP enabled.
             */
            disableOutboundNat?: boolean;
        }

        /**
         * Azure Key Vault key management service settings for the security profile.
         */
        export interface AzureKeyVaultKmsResponse {
            /**
             * Whether to enable Azure Key Vault key management service. The default is false.
             */
            enabled?: boolean;
            /**
             * Identifier of Azure Key Vault key. See [key identifier format](https://docs.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates#vault-name-and-object-name) for more details. When Azure Key Vault key management service is enabled, this field is required and must be a valid key identifier. When Azure Key Vault key management service is disabled, leave the field empty.
             */
            keyId?: string;
            /**
             * Network access of key vault. The possible values are `Public` and `Private`. `Public` means the key vault allows public access from all networks. `Private` means the key vault disables public access and enables private link. The default value is `Public`.
             */
            keyVaultNetworkAccess?: string;
            /**
             * Resource ID of key vault. When keyVaultNetworkAccess is `Private`, this field is required and must be a valid resource ID. When keyVaultNetworkAccess is `Public`, leave the field empty.
             */
            keyVaultResourceId?: string;
        }
        /**
         * azureKeyVaultKmsResponseProvideDefaults sets the appropriate defaults for AzureKeyVaultKmsResponse
         */
        export function azureKeyVaultKmsResponseProvideDefaults(val: AzureKeyVaultKmsResponse): AzureKeyVaultKmsResponse {
            return {
                ...val,
                keyVaultNetworkAccess: (val.keyVaultNetworkAccess) ?? "Public",
            };
        }

        /**
         * Settings for upgrading a cluster.
         */
        export interface ClusterUpgradeSettingsResponse {
            /**
             * Settings for overrides.
             */
            overrideSettings?: v20230502preview.UpgradeOverrideSettingsResponse;
        }

        /**
         * Profile for Linux VMs in the container service cluster.
         */
        export interface ContainerServiceLinuxProfileResponse {
            /**
             * The administrator username to use for Linux VMs.
             */
            adminUsername: string;
            /**
             * The SSH configuration for Linux-based VMs running on Azure.
             */
            ssh: v20230502preview.ContainerServiceSshConfigurationResponse;
        }

        /**
         * Profile of network configuration.
         */
        export interface ContainerServiceNetworkProfileResponse {
            /**
             * An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
             */
            dnsServiceIP?: string;
            /**
             * IP families are used to determine single-stack or dual-stack clusters. For single-stack, the expected value is IPv4. For dual-stack, the expected values are IPv4 and IPv6.
             */
            ipFamilies?: string[];
            /**
             * Holds configuration customizations for kube-proxy. Any values not defined will use the kube-proxy defaulting behavior. See https://v<version>.docs.kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/ where <version> is represented by a <major version>-<minor version> string. Kubernetes version 1.23 would be '1-23'.
             */
            kubeProxyConfig?: v20230502preview.ContainerServiceNetworkProfileResponseKubeProxyConfig;
            /**
             * Profile of the cluster load balancer.
             */
            loadBalancerProfile?: v20230502preview.ManagedClusterLoadBalancerProfileResponse;
            /**
             * The default is 'standard'. See [Azure Load Balancer SKUs](https://docs.microsoft.com/azure/load-balancer/skus) for more information about the differences between load balancer SKUs.
             */
            loadBalancerSku?: string;
            /**
             * This addon can be used to configure network monitoring and generate network monitoring data in Prometheus format
             */
            monitoring?: v20230502preview.NetworkMonitoringResponse;
            /**
             * Profile of the cluster NAT gateway.
             */
            natGatewayProfile?: v20230502preview.ManagedClusterNATGatewayProfileResponse;
            /**
             * Network dataplane used in the Kubernetes cluster.
             */
            networkDataplane?: string;
            /**
             * This cannot be specified if networkPlugin is anything other than 'azure'.
             */
            networkMode?: string;
            /**
             * Network plugin used for building the Kubernetes network.
             */
            networkPlugin?: string;
            /**
             * Network plugin mode used for building the Kubernetes network.
             */
            networkPluginMode?: string;
            /**
             * Network policy used for building the Kubernetes network.
             */
            networkPolicy?: string;
            /**
             * This can only be set at cluster creation time and cannot be changed later. For more information see [egress outbound type](https://docs.microsoft.com/azure/aks/egress-outboundtype).
             */
            outboundType?: string;
            /**
             * A CIDR notation IP range from which to assign pod IPs when kubenet is used.
             */
            podCidr?: string;
            /**
             * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
             */
            podCidrs?: string[];
            /**
             * A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
             */
            serviceCidr?: string;
            /**
             * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking. They must not overlap with any Subnet IP ranges.
             */
            serviceCidrs?: string[];
        }
        /**
         * containerServiceNetworkProfileResponseProvideDefaults sets the appropriate defaults for ContainerServiceNetworkProfileResponse
         */
        export function containerServiceNetworkProfileResponseProvideDefaults(val: ContainerServiceNetworkProfileResponse): ContainerServiceNetworkProfileResponse {
            return {
                ...val,
                dnsServiceIP: (val.dnsServiceIP) ?? "10.0.0.10",
                loadBalancerProfile: (val.loadBalancerProfile ? v20230502preview.managedClusterLoadBalancerProfileResponseProvideDefaults(val.loadBalancerProfile) : undefined),
                natGatewayProfile: (val.natGatewayProfile ? v20230502preview.managedClusterNATGatewayProfileResponseProvideDefaults(val.natGatewayProfile) : undefined),
                outboundType: (val.outboundType) ?? "loadBalancer",
                podCidr: (val.podCidr) ?? "10.244.0.0/16",
                serviceCidr: (val.serviceCidr) ?? "10.0.0.0/16",
            };
        }

        /**
         * Holds configuration customizations for IPVS. May only be specified if 'mode' is set to 'IPVS'.
         */
        export interface ContainerServiceNetworkProfileResponseIpvsConfig {
            /**
             * IPVS scheduler, for more information please see http://www.linuxvirtualserver.org/docs/scheduling.html.
             */
            scheduler?: string;
            /**
             * The timeout value used for IPVS TCP sessions after receiving a FIN in seconds. Must be a positive integer value.
             */
            tcpFinTimeoutSeconds?: number;
            /**
             * The timeout value used for idle IPVS TCP sessions in seconds. Must be a positive integer value.
             */
            tcpTimeoutSeconds?: number;
            /**
             * The timeout value used for IPVS UDP packets in seconds. Must be a positive integer value.
             */
            udpTimeoutSeconds?: number;
        }

        /**
         * Holds configuration customizations for kube-proxy. Any values not defined will use the kube-proxy defaulting behavior. See https://v<version>.docs.kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/ where <version> is represented by a <major version>-<minor version> string. Kubernetes version 1.23 would be '1-23'.
         */
        export interface ContainerServiceNetworkProfileResponseKubeProxyConfig {
            /**
             * Whether to enable on kube-proxy on the cluster (if no 'kubeProxyConfig' exists, kube-proxy is enabled in AKS by default without these customizations).
             */
            enabled?: boolean;
            /**
             * Holds configuration customizations for IPVS. May only be specified if 'mode' is set to 'IPVS'.
             */
            ipvsConfig?: v20230502preview.ContainerServiceNetworkProfileResponseIpvsConfig;
            /**
             * Specify which proxy mode to use ('IPTABLES' or 'IPVS')
             */
            mode?: string;
        }

        /**
         * SSH configuration for Linux-based VMs running on Azure.
         */
        export interface ContainerServiceSshConfigurationResponse {
            /**
             * The list of SSH public keys used to authenticate with Linux-based VMs. A maximum of 1 key may be specified.
             */
            publicKeys: v20230502preview.ContainerServiceSshPublicKeyResponse[];
        }

        /**
         * Contains information about SSH certificate public key data.
         */
        export interface ContainerServiceSshPublicKeyResponse {
            /**
             * Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.
             */
            keyData: string;
        }

        /**
         * Data used when creating a target resource from a source resource.
         */
        export interface CreationDataResponse {
            /**
             * This is the ARM ID of the source object to be used to create the target object.
             */
            sourceResourceId?: string;
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
         * For schedules like: 'recur every day' or 'recur every 3 days'.
         */
        export interface DailyScheduleResponse {
            /**
             * Specifies the number of days between each set of occurrences.
             */
            intervalDays: number;
        }

        /**
         * For example, between '2022-12-23' and '2023-01-05'.
         */
        export interface DateSpanResponse {
            /**
             * The end date of the date span.
             */
            end: string;
            /**
             * The start date of the date span.
             */
            start: string;
        }

        /**
         * The complex type of the extended location.
         */
        export interface ExtendedLocationResponse {
            /**
             * The name of the extended location.
             */
            name?: string;
            /**
             * The type of the extended location.
             */
            type?: string;
        }

        /**
         * The Guardrails profile.
         */
        export interface GuardrailsProfileResponse {
            /**
             * List of namespaces excluded from guardrails checks
             */
            excludedNamespaces?: string[];
            /**
             * The guardrails level to be used. By default, Guardrails is enabled for all namespaces except those that AKS excludes via systemExcludedNamespaces
             */
            level: string;
            /**
             * List of namespaces specified by AKS to be excluded from Guardrails
             */
            systemExcludedNamespaces: string[];
            /**
             * The version of constraints to use
             */
            version: string;
        }

        /**
         * Contains the IPTag associated with the object.
         */
        export interface IPTagResponse {
            /**
             * The IP tag type. Example: RoutingPreference.
             */
            ipTagType?: string;
            /**
             * The value of the IP tag associated with the public IP. Example: Internet.
             */
            tag?: string;
        }

        /**
         * Istio components configuration.
         */
        export interface IstioComponentsResponse {
            /**
             * Istio ingress gateways.
             */
            ingressGateways?: v20230502preview.IstioIngressGatewayResponse[];
        }

        /**
         * Istio ingress gateway configuration. For now, we support up to one external ingress gateway named `aks-istio-ingressgateway-external` and one internal ingress gateway named `aks-istio-ingressgateway-internal`.
         */
        export interface IstioIngressGatewayResponse {
            /**
             * Whether to enable the ingress gateway.
             */
            enabled: boolean;
            /**
             * Mode of an ingress gateway.
             */
            mode: string;
        }

        /**
         * Istio service mesh configuration.
         */
        export interface IstioServiceMeshResponse {
            /**
             * Istio components configuration.
             */
            components?: v20230502preview.IstioComponentsResponse;
        }

        /**
         * See [AKS custom node configuration](https://docs.microsoft.com/azure/aks/custom-node-configuration) for more details.
         */
        export interface KubeletConfigResponse {
            /**
             * Allowed list of unsafe sysctls or unsafe sysctl patterns (ending in `*`).
             */
            allowedUnsafeSysctls?: string[];
            /**
             * The maximum number of container log files that can be present for a container. The number must be ≥ 2.
             */
            containerLogMaxFiles?: number;
            /**
             * The maximum size (e.g. 10Mi) of container log file before it is rotated.
             */
            containerLogMaxSizeMB?: number;
            /**
             * The default is true.
             */
            cpuCfsQuota?: boolean;
            /**
             * The default is '100ms.' Valid values are a sequence of decimal numbers with an optional fraction and a unit suffix. For example: '300ms', '2h45m'. Supported units are 'ns', 'us', 'ms', 's', 'm', and 'h'.
             */
            cpuCfsQuotaPeriod?: string;
            /**
             * The default is 'none'. See [Kubernetes CPU management policies](https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/#cpu-management-policies) for more information. Allowed values are 'none' and 'static'.
             */
            cpuManagerPolicy?: string;
            /**
             * If set to true it will make the Kubelet fail to start if swap is enabled on the node.
             */
            failSwapOn?: boolean;
            /**
             * To disable image garbage collection, set to 100. The default is 85%
             */
            imageGcHighThreshold?: number;
            /**
             * This cannot be set higher than imageGcHighThreshold. The default is 80%
             */
            imageGcLowThreshold?: number;
            /**
             * The maximum number of processes per pod.
             */
            podMaxPids?: number;
            /**
             * For more information see [Kubernetes Topology Manager](https://kubernetes.io/docs/tasks/administer-cluster/topology-manager). The default is 'none'. Allowed values are 'none', 'best-effort', 'restricted', and 'single-numa-node'.
             */
            topologyManagerPolicy?: string;
        }

        /**
         * See [AKS custom node configuration](https://docs.microsoft.com/azure/aks/custom-node-configuration) for more details.
         */
        export interface LinuxOSConfigResponse {
            /**
             * The size in MB of a swap file that will be created on each node.
             */
            swapFileSizeMB?: number;
            /**
             * Sysctl settings for Linux agent nodes.
             */
            sysctls?: v20230502preview.SysctlConfigResponse;
            /**
             * Valid values are 'always', 'defer', 'defer+madvise', 'madvise' and 'never'. The default is 'madvise'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
             */
            transparentHugePageDefrag?: string;
            /**
             * Valid values are 'always', 'madvise', and 'never'. The default is 'always'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
             */
            transparentHugePageEnabled?: string;
        }

        /**
         * Maintenance window used to configure scheduled auto-upgrade for a Managed Cluster.
         */
        export interface MaintenanceWindowResponse {
            /**
             * Length of maintenance window range from 4 to 24 hours.
             */
            durationHours: number;
            /**
             * Date ranges on which upgrade is not allowed. 'utcOffset' applies to this field. For example, with 'utcOffset: +02:00' and 'dateSpan' being '2022-12-23' to '2023-01-03', maintenance will be blocked from '2022-12-22 22:00' to '2023-01-03 22:00' in UTC time.
             */
            notAllowedDates?: v20230502preview.DateSpanResponse[];
            /**
             * Recurrence schedule for the maintenance window.
             */
            schedule: v20230502preview.ScheduleResponse;
            /**
             * The date the maintenance window activates. If the current date is before this date, the maintenance window is inactive and will not be used for upgrades. If not specified, the maintenance window will be active right away.
             */
            startDate?: string;
            /**
             * The start time of the maintenance window. Accepted values are from '00:00' to '23:59'. 'utcOffset' applies to this field. For example: '02:00' with 'utcOffset: +02:00' means UTC time '00:00'.
             */
            startTime: string;
            /**
             * The UTC offset in format +/-HH:mm. For example, '+05:30' for IST and '-07:00' for PST. If not specified, the default is '+00:00'.
             */
            utcOffset?: string;
        }
        /**
         * maintenanceWindowResponseProvideDefaults sets the appropriate defaults for MaintenanceWindowResponse
         */
        export function maintenanceWindowResponseProvideDefaults(val: MaintenanceWindowResponse): MaintenanceWindowResponse {
            return {
                ...val,
                durationHours: (val.durationHours) ?? 24,
            };
        }

        /**
         * For more details see [managed AAD on AKS](https://docs.microsoft.com/azure/aks/managed-aad).
         */
        export interface ManagedClusterAADProfileResponse {
            /**
             * The list of AAD group object IDs that will have admin role of the cluster.
             */
            adminGroupObjectIDs?: string[];
            /**
             * (DEPRECATED) The client AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
             */
            clientAppID?: string;
            /**
             * Whether to enable Azure RBAC for Kubernetes authorization.
             */
            enableAzureRBAC?: boolean;
            /**
             * Whether to enable managed AAD.
             */
            managed?: boolean;
            /**
             * (DEPRECATED) The server AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
             */
            serverAppID?: string;
            /**
             * (DEPRECATED) The server AAD application secret. Learn more at https://aka.ms/aks/aad-legacy.
             */
            serverAppSecret?: string;
            /**
             * The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription.
             */
            tenantID?: string;
        }

        /**
         * Access profile for managed cluster API server.
         */
        export interface ManagedClusterAPIServerAccessProfileResponse {
            /**
             * IP ranges are specified in CIDR format, e.g. 137.117.106.88/29. This feature is not compatible with clusters that use Public IP Per Node, or clusters that are using a Basic Load Balancer. For more information see [API server authorized IP ranges](https://docs.microsoft.com/azure/aks/api-server-authorized-ip-ranges).
             */
            authorizedIPRanges?: string[];
            /**
             * Whether to disable run command for the cluster or not.
             */
            disableRunCommand?: boolean;
            /**
             * For more details, see [Creating a private AKS cluster](https://docs.microsoft.com/azure/aks/private-clusters).
             */
            enablePrivateCluster?: boolean;
            /**
             * Whether to create additional public FQDN for private cluster or not.
             */
            enablePrivateClusterPublicFQDN?: boolean;
            /**
             * Whether to enable apiserver vnet integration for the cluster or not.
             */
            enableVnetIntegration?: boolean;
            /**
             * The default is System. For more details see [configure private DNS zone](https://docs.microsoft.com/azure/aks/private-clusters#configure-private-dns-zone). Allowed values are 'system' and 'none'.
             */
            privateDNSZone?: string;
            /**
             * It is required when: 1. creating a new cluster with BYO Vnet; 2. updating an existing cluster to enable apiserver vnet integration.
             */
            subnetId?: string;
        }

        /**
         * A Kubernetes add-on profile for a managed cluster.
         */
        export interface ManagedClusterAddonProfileResponse {
            /**
             * Key-value pairs for configuring an add-on.
             */
            config?: {[key: string]: string};
            /**
             * Whether the add-on is enabled or not.
             */
            enabled: boolean;
            /**
             * Information of user assigned identity used by this add-on.
             */
            identity: v20230502preview.ManagedClusterAddonProfileResponseIdentity;
        }

        /**
         * Information of user assigned identity used by this add-on.
         */
        export interface ManagedClusterAddonProfileResponseIdentity {
            /**
             * The client ID of the user assigned identity.
             */
            clientId?: string;
            /**
             * The object ID of the user assigned identity.
             */
            objectId?: string;
            /**
             * The resource ID of the user assigned identity.
             */
            resourceId?: string;
        }

        /**
         * Profile for the container service agent pool.
         */
        export interface ManagedClusterAgentPoolProfileResponse {
            /**
             * The list of Availability zones to use for nodes. This can only be specified if the AgentPoolType property is 'VirtualMachineScaleSets'.
             */
            availabilityZones?: string[];
            /**
             * AKS will associate the specified agent pool with the Capacity Reservation Group.
             */
            capacityReservationGroupID?: string;
            /**
             * Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 1000 (inclusive) for user pools and in the range of 1 to 1000 (inclusive) for system pools. The default value is 1.
             */
            count?: number;
            /**
             * CreationData to be used to specify the source Snapshot ID if the node pool will be created/upgraded using a snapshot.
             */
            creationData?: v20230502preview.CreationDataResponse;
            /**
             * If orchestratorVersion was a fully specified version <major.minor.patch>, this field will be exactly equal to it. If orchestratorVersion was <major.minor>, this field will contain the full <major.minor.patch> version being used.
             */
            currentOrchestratorVersion: string;
            /**
             * Whether to enable auto-scaler
             */
            enableAutoScaling?: boolean;
            /**
             * When set to true, AKS adds a label to the node indicating that the feature is enabled and deploys a daemonset along with host services to sync custom certificate authorities from user-provided list of base64 encoded certificates into node trust stores. Defaults to false.
             */
            enableCustomCATrust?: boolean;
            /**
             * This is only supported on certain VM sizes and in certain Azure regions. For more information, see: https://docs.microsoft.com/azure/aks/enable-host-encryption
             */
            enableEncryptionAtHost?: boolean;
            /**
             * See [Add a FIPS-enabled node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#add-a-fips-enabled-node-pool-preview) for more details.
             */
            enableFIPS?: boolean;
            /**
             * Some scenarios may require nodes in a node pool to receive their own dedicated public IP addresses. A common scenario is for gaming workloads, where a console needs to make a direct connection to a cloud virtual machine to minimize hops. For more information see [assigning a public IP per node](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#assign-a-public-ip-per-node-for-your-node-pools). The default is false.
             */
            enableNodePublicIP?: boolean;
            /**
             * Whether to enable UltraSSD
             */
            enableUltraSSD?: boolean;
            /**
             * GPUInstanceProfile to be used to specify GPU MIG instance profile for supported GPU VM SKU.
             */
            gpuInstanceProfile?: string;
            /**
             * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}. For more information see [Azure dedicated hosts](https://docs.microsoft.com/azure/virtual-machines/dedicated-hosts).
             */
            hostGroupID?: string;
            /**
             * The Kubelet configuration on the agent pool nodes.
             */
            kubeletConfig?: v20230502preview.KubeletConfigResponse;
            /**
             * Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage.
             */
            kubeletDiskType?: string;
            /**
             * The OS configuration of Linux agent nodes.
             */
            linuxOSConfig?: v20230502preview.LinuxOSConfigResponse;
            /**
             * The maximum number of nodes for auto-scaling
             */
            maxCount?: number;
            /**
             * The maximum number of pods that can run on a node.
             */
            maxPods?: number;
            /**
             * A base64-encoded string which will be written to /etc/motd after decoding. This allows customization of the message of the day for Linux nodes. It must not be specified for Windows nodes. It must be a static string (i.e., will be printed raw and not be executed as a script).
             */
            messageOfTheDay?: string;
            /**
             * The minimum number of nodes for auto-scaling
             */
            minCount?: number;
            /**
             * A cluster must have at least one 'System' Agent Pool at all times. For additional information on agent pool restrictions and best practices, see: https://docs.microsoft.com/azure/aks/use-system-pools
             */
            mode?: string;
            /**
             * Windows agent pool names must be 6 characters or less.
             */
            name: string;
            /**
             * Network-related settings of an agent pool.
             */
            networkProfile?: v20230502preview.AgentPoolNetworkProfileResponse;
            /**
             * The version of node image
             */
            nodeImageVersion: string;
            /**
             * The node labels to be persisted across all nodes in agent pool.
             */
            nodeLabels?: {[key: string]: string};
            /**
             * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIPPrefixName}
             */
            nodePublicIPPrefixID?: string;
            /**
             * The taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
             */
            nodeTaints?: string[];
            /**
             * Both patch version <major.minor.patch> and <major.minor> are supported. When <major.minor> is specified, the latest supported patch version is chosen automatically. Updating the agent pool with the same <major.minor> once it has been created will not trigger an upgrade, even if a newer patch version is available. As a best practice, you should upgrade all node pools in an AKS cluster to the same Kubernetes version. The node pool version must have the same major version as the control plane. The node pool minor version must be within two minor versions of the control plane version. The node pool version cannot be greater than the control plane version. For more information see [upgrading a node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#upgrade-a-node-pool).
             */
            orchestratorVersion?: string;
            /**
             * OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
             */
            osDiskSizeGB?: number;
            /**
             * The default is 'Ephemeral' if the VM supports it and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation. For more information see [Ephemeral OS](https://docs.microsoft.com/azure/aks/cluster-configuration#ephemeral-os).
             */
            osDiskType?: string;
            /**
             * Specifies the OS SKU used by the agent pool. If not specified, the default is Ubuntu if OSType=Linux or Windows2019 if OSType=Windows. And the default Windows OSSKU will be changed to Windows2022 after Windows2019 is deprecated.
             */
            osSKU?: string;
            /**
             * The operating system type. The default is Linux.
             */
            osType?: string;
            /**
             * If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
             */
            podSubnetID?: string;
            /**
             * When an Agent Pool is first created it is initially Running. The Agent Pool can be stopped by setting this field to Stopped. A stopped Agent Pool stops all of its VMs and does not accrue billing charges. An Agent Pool can only be stopped if it is Running and provisioning state is Succeeded
             */
            powerState?: v20230502preview.PowerStateResponse;
            /**
             * The current deployment or provisioning state.
             */
            provisioningState: string;
            /**
             * The ID for Proximity Placement Group.
             */
            proximityPlacementGroupID?: string;
            /**
             * This also effects the cluster autoscaler behavior. If not specified, it defaults to Delete.
             */
            scaleDownMode?: string;
            /**
             * This cannot be specified unless the scaleSetPriority is 'Spot'. If not specified, the default is 'Delete'.
             */
            scaleSetEvictionPolicy?: string;
            /**
             * The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'.
             */
            scaleSetPriority?: string;
            /**
             * Possible values are any decimal value greater than zero or -1 which indicates the willingness to pay any on-demand price. For more details on spot pricing, see [spot VMs pricing](https://docs.microsoft.com/azure/virtual-machines/spot-vms#pricing)
             */
            spotMaxPrice?: number;
            /**
             * The tags to be persisted on the agent pool virtual machine scale set.
             */
            tags?: {[key: string]: string};
            /**
             * The type of Agent Pool.
             */
            type?: string;
            /**
             * Settings for upgrading the agentpool
             */
            upgradeSettings?: v20230502preview.AgentPoolUpgradeSettingsResponse;
            /**
             * VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. For more details on restricted VM sizes, see: https://docs.microsoft.com/azure/aks/quotas-skus-regions
             */
            vmSize?: string;
            /**
             * If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
             */
            vnetSubnetID?: string;
            /**
             * The Windows agent pool's specific profile.
             */
            windowsProfile?: v20230502preview.AgentPoolWindowsProfileResponse;
            /**
             * Determines the type of workload a node can run.
             */
            workloadRuntime?: string;
        }

        /**
         * Auto upgrade profile for a managed cluster.
         */
        export interface ManagedClusterAutoUpgradeProfileResponse {
            /**
             * The default is Unmanaged, but may change to either NodeImage or SecurityPatch at GA.
             */
            nodeOSUpgradeChannel?: string;
            /**
             * For more information see [setting the AKS cluster auto-upgrade channel](https://docs.microsoft.com/azure/aks/upgrade-cluster#set-auto-upgrade-channel).
             */
            upgradeChannel?: string;
        }

        /**
         * Kube State Metrics for prometheus addon profile for the container service cluster
         */
        export interface ManagedClusterAzureMonitorProfileKubeStateMetricsResponse {
            /**
             * Comma-separated list of additional Kubernetes label keys that will be used in the resource's labels metric.
             */
            metricAnnotationsAllowList?: string;
            /**
             * Comma-separated list of Kubernetes annotations keys that will be used in the resource's labels metric. 
             */
            metricLabelsAllowlist?: string;
        }

        /**
         * Metrics profile for the prometheus service addon
         */
        export interface ManagedClusterAzureMonitorProfileMetricsResponse {
            /**
             * Whether to enable the Prometheus collector
             */
            enabled: boolean;
            /**
             * Kube State Metrics for prometheus addon profile for the container service cluster
             */
            kubeStateMetrics?: v20230502preview.ManagedClusterAzureMonitorProfileKubeStateMetricsResponse;
        }

        /**
         * Prometheus addon profile for the container service cluster
         */
        export interface ManagedClusterAzureMonitorProfileResponse {
            /**
             * Metrics profile for the prometheus service addon
             */
            metrics?: v20230502preview.ManagedClusterAzureMonitorProfileMetricsResponse;
        }

        /**
         * Cluster HTTP proxy configuration.
         */
        export interface ManagedClusterHTTPProxyConfigResponse {
            /**
             * A read-only list of all endpoints for which traffic should not be sent to the proxy. This list is a superset of noProxy and values injected by AKS.
             */
            effectiveNoProxy: string[];
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
        }

        /**
         * Identity for the managed cluster.
         */
        export interface ManagedClusterIdentityResponse {
            /**
             * The principal id of the system assigned identity which is used by master components.
             */
            principalId: string;
            /**
             * The tenant id of the system assigned identity which is used by master components.
             */
            tenantId: string;
            /**
             * For more information see [use managed identities in AKS](https://docs.microsoft.com/azure/aks/use-managed-identity).
             */
            type?: string;
            /**
             * The keys must be ARM resource IDs in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentities?: {[key: string]: v20230502preview.ManagedClusterIdentityResponseUserAssignedIdentities};
        }

        export interface ManagedClusterIdentityResponseUserAssignedIdentities {
            /**
             * The client id of user assigned identity.
             */
            clientId: string;
            /**
             * The principal id of user assigned identity.
             */
            principalId: string;
        }

        /**
         * Ingress profile for the container service cluster.
         */
        export interface ManagedClusterIngressProfileResponse {
            /**
             * Web App Routing settings for the ingress profile.
             */
            webAppRouting?: v20230502preview.ManagedClusterIngressProfileWebAppRoutingResponse;
        }

        /**
         * Web App Routing settings for the ingress profile.
         */
        export interface ManagedClusterIngressProfileWebAppRoutingResponse {
            /**
             * Resource ID of the DNS Zone to be associated with the web app. Used only when Web App Routing is enabled.
             */
            dnsZoneResourceId?: string;
            /**
             * Whether to enable Web App Routing.
             */
            enabled?: boolean;
            /**
             * Managed identity of the Web Application Routing add-on. This is the identity that should be granted permissions, for example, to manage the associated Azure DNS resource and get certificates from Azure Key Vault. See [this overview of the add-on](https://learn.microsoft.com/en-us/azure/aks/web-app-routing?tabs=with-osm) for more instructions.
             */
            identity: v20230502preview.UserAssignedIdentityResponse;
        }

        /**
         * Profile of the managed cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileResponse {
            /**
             * The desired number of allocated SNAT ports per VM. Allowed values are in the range of 0 to 64000 (inclusive). The default value is 0 which results in Azure dynamically allocating ports.
             */
            allocatedOutboundPorts?: number;
            /**
             * The type of the managed inbound Load Balancer BackendPool.
             */
            backendPoolType?: string;
            /**
             * The effective outbound IP resources of the cluster load balancer.
             */
            effectiveOutboundIPs?: v20230502preview.ResourceReferenceResponse[];
            /**
             * Enable multiple standard load balancers per AKS cluster or not.
             */
            enableMultipleStandardLoadBalancers?: boolean;
            /**
             * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 30 minutes.
             */
            idleTimeoutInMinutes?: number;
            /**
             * Desired managed outbound IPs for the cluster load balancer.
             */
            managedOutboundIPs?: v20230502preview.ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs;
            /**
             * Desired outbound IP Prefix resources for the cluster load balancer.
             */
            outboundIPPrefixes?: v20230502preview.ManagedClusterLoadBalancerProfileResponseOutboundIPPrefixes;
            /**
             * Desired outbound IP resources for the cluster load balancer.
             */
            outboundIPs?: v20230502preview.ManagedClusterLoadBalancerProfileResponseOutboundIPs;
        }
        /**
         * managedClusterLoadBalancerProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileResponse
         */
        export function managedClusterLoadBalancerProfileResponseProvideDefaults(val: ManagedClusterLoadBalancerProfileResponse): ManagedClusterLoadBalancerProfileResponse {
            return {
                ...val,
                allocatedOutboundPorts: (val.allocatedOutboundPorts) ?? 0,
                backendPoolType: (val.backendPoolType) ?? "NodeIPConfiguration",
                idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 30,
                managedOutboundIPs: (val.managedOutboundIPs ? v20230502preview.managedClusterLoadBalancerProfileResponseManagedOutboundIPsProvideDefaults(val.managedOutboundIPs) : undefined),
            };
        }

        /**
         * Desired managed outbound IPs for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs {
            /**
             * The desired number of IPv4 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1. 
             */
            count?: number;
            /**
             * The desired number of IPv6 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 0 for single-stack and 1 for dual-stack. 
             */
            countIPv6?: number;
        }
        /**
         * managedClusterLoadBalancerProfileResponseManagedOutboundIPsProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs
         */
        export function managedClusterLoadBalancerProfileResponseManagedOutboundIPsProvideDefaults(val: ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs): ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs {
            return {
                ...val,
                count: (val.count) ?? 1,
                countIPv6: (val.countIPv6) ?? 0,
            };
        }

        /**
         * Desired outbound IP Prefix resources for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileResponseOutboundIPPrefixes {
            /**
             * A list of public IP prefix resources.
             */
            publicIPPrefixes?: v20230502preview.ResourceReferenceResponse[];
        }

        /**
         * Desired outbound IP resources for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileResponseOutboundIPs {
            /**
             * A list of public IP resources.
             */
            publicIPs?: v20230502preview.ResourceReferenceResponse[];
        }

        /**
         * Profile of the managed outbound IP resources of the managed cluster.
         */
        export interface ManagedClusterManagedOutboundIPProfileResponse {
            /**
             * The desired number of outbound IPs created/managed by Azure. Allowed values must be in the range of 1 to 16 (inclusive). The default value is 1. 
             */
            count?: number;
        }
        /**
         * managedClusterManagedOutboundIPProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterManagedOutboundIPProfileResponse
         */
        export function managedClusterManagedOutboundIPProfileResponseProvideDefaults(val: ManagedClusterManagedOutboundIPProfileResponse): ManagedClusterManagedOutboundIPProfileResponse {
            return {
                ...val,
                count: (val.count) ?? 1,
            };
        }

        /**
         * Profile of the managed cluster NAT gateway.
         */
        export interface ManagedClusterNATGatewayProfileResponse {
            /**
             * The effective outbound IP resources of the cluster NAT gateway.
             */
            effectiveOutboundIPs?: v20230502preview.ResourceReferenceResponse[];
            /**
             * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 4 minutes.
             */
            idleTimeoutInMinutes?: number;
            /**
             * Profile of the managed outbound IP resources of the cluster NAT gateway.
             */
            managedOutboundIPProfile?: v20230502preview.ManagedClusterManagedOutboundIPProfileResponse;
        }
        /**
         * managedClusterNATGatewayProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterNATGatewayProfileResponse
         */
        export function managedClusterNATGatewayProfileResponseProvideDefaults(val: ManagedClusterNATGatewayProfileResponse): ManagedClusterNATGatewayProfileResponse {
            return {
                ...val,
                idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 4,
                managedOutboundIPProfile: (val.managedOutboundIPProfile ? v20230502preview.managedClusterManagedOutboundIPProfileResponseProvideDefaults(val.managedOutboundIPProfile) : undefined),
            };
        }

        /**
         * Node resource group lockdown profile for a managed cluster.
         */
        export interface ManagedClusterNodeResourceGroupProfileResponse {
            /**
             * The restriction level applied to the cluster's node resource group
             */
            restrictionLevel?: string;
        }

        /**
         * The OIDC issuer profile of the Managed Cluster.
         */
        export interface ManagedClusterOIDCIssuerProfileResponse {
            /**
             * Whether the OIDC issuer is enabled.
             */
            enabled?: boolean;
            /**
             * The OIDC issuer url of the Managed Cluster.
             */
            issuerURL: string;
        }

        /**
         * See [disable AAD Pod Identity for a specific Pod/Application](https://azure.github.io/aad-pod-identity/docs/configure/application_exception/) for more details.
         */
        export interface ManagedClusterPodIdentityExceptionResponse {
            /**
             * The name of the pod identity exception.
             */
            name: string;
            /**
             * The namespace of the pod identity exception.
             */
            namespace: string;
            /**
             * The pod labels to match.
             */
            podLabels: {[key: string]: string};
        }

        /**
         * See [use AAD pod identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity) for more details on pod identity integration.
         */
        export interface ManagedClusterPodIdentityProfileResponse {
            /**
             * Running in Kubenet is disabled by default due to the security related nature of AAD Pod Identity and the risks of IP spoofing. See [using Kubenet network plugin with AAD Pod Identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity#using-kubenet-network-plugin-with-azure-active-directory-pod-managed-identities) for more information.
             */
            allowNetworkPluginKubenet?: boolean;
            /**
             * Whether the pod identity addon is enabled.
             */
            enabled?: boolean;
            /**
             * The pod identities to use in the cluster.
             */
            userAssignedIdentities?: v20230502preview.ManagedClusterPodIdentityResponse[];
            /**
             * The pod identity exceptions to allow.
             */
            userAssignedIdentityExceptions?: v20230502preview.ManagedClusterPodIdentityExceptionResponse[];
        }

        /**
         * An error response from the pod identity provisioning.
         */
        export interface ManagedClusterPodIdentityProvisioningErrorBodyResponse {
            /**
             * An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
             */
            code?: string;
            /**
             * A list of additional details about the error.
             */
            details?: v20230502preview.ManagedClusterPodIdentityProvisioningErrorBodyResponse[];
            /**
             * A message describing the error, intended to be suitable for display in a user interface.
             */
            message?: string;
            /**
             * The target of the particular error. For example, the name of the property in error.
             */
            target?: string;
        }

        /**
         * An error response from the pod identity provisioning.
         */
        export interface ManagedClusterPodIdentityProvisioningErrorResponse {
            /**
             * Details about the error.
             */
            error?: v20230502preview.ManagedClusterPodIdentityProvisioningErrorBodyResponse;
        }

        /**
         * Details about the pod identity assigned to the Managed Cluster.
         */
        export interface ManagedClusterPodIdentityResponse {
            /**
             * The binding selector to use for the AzureIdentityBinding resource.
             */
            bindingSelector?: string;
            /**
             * The user assigned identity details.
             */
            identity: v20230502preview.UserAssignedIdentityResponse;
            /**
             * The name of the pod identity.
             */
            name: string;
            /**
             * The namespace of the pod identity.
             */
            namespace: string;
            provisioningInfo: v20230502preview.ManagedClusterPodIdentityResponseProvisioningInfo;
            /**
             * The current provisioning state of the pod identity.
             */
            provisioningState: string;
        }

        export interface ManagedClusterPodIdentityResponseProvisioningInfo {
            /**
             * Pod identity assignment error (if any).
             */
            error?: v20230502preview.ManagedClusterPodIdentityProvisioningErrorResponse;
        }

        /**
         * managed cluster properties for snapshot, these properties are read only.
         */
        export interface ManagedClusterPropertiesForSnapshotResponse {
            /**
             * Whether the cluster has enabled Kubernetes Role-Based Access Control or not.
             */
            enableRbac?: boolean;
            /**
             * The current kubernetes version.
             */
            kubernetesVersion?: string;
            /**
             * The current network profile.
             */
            networkProfile: v20230502preview.NetworkProfileForSnapshotResponse;
            /**
             * The current managed cluster sku.
             */
            sku?: v20230502preview.ManagedClusterSKUResponse;
        }

        /**
         * Parameters to be applied to the cluster-autoscaler when enabled
         */
        export interface ManagedClusterPropertiesResponseAutoScalerProfile {
            /**
             * Valid values are 'true' and 'false'
             */
            balanceSimilarNodeGroups?: string;
            /**
             * If not specified, the default is 'random'. See [expanders](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#what-are-expanders) for more information.
             */
            expander?: string;
            /**
             * The default is 10.
             */
            maxEmptyBulkDelete?: string;
            /**
             * The default is 600.
             */
            maxGracefulTerminationSec?: string;
            /**
             * The default is '15m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            maxNodeProvisionTime?: string;
            /**
             * The default is 45. The maximum is 100 and the minimum is 0.
             */
            maxTotalUnreadyPercentage?: string;
            /**
             * For scenarios like burst/batch scale where you don't want CA to act before the kubernetes scheduler could schedule all the pods, you can tell CA to ignore unscheduled pods before they're a certain age. The default is '0s'. Values must be an integer followed by a unit ('s' for seconds, 'm' for minutes, 'h' for hours, etc).
             */
            newPodScaleUpDelay?: string;
            /**
             * This must be an integer. The default is 3.
             */
            okTotalUnreadyCount?: string;
            /**
             * The default is '10m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownDelayAfterAdd?: string;
            /**
             * The default is the scan-interval. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownDelayAfterDelete?: string;
            /**
             * The default is '3m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownDelayAfterFailure?: string;
            /**
             * The default is '10m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownUnneededTime?: string;
            /**
             * The default is '20m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownUnreadyTime?: string;
            /**
             * The default is '0.5'.
             */
            scaleDownUtilizationThreshold?: string;
            /**
             * The default is '10'. Values must be an integer number of seconds.
             */
            scanInterval?: string;
            /**
             * The default is true.
             */
            skipNodesWithLocalStorage?: string;
            /**
             * The default is true.
             */
            skipNodesWithSystemPods?: string;
        }

        /**
         * The SKU of a Managed Cluster.
         */
        export interface ManagedClusterSKUResponse {
            /**
             * The name of a managed cluster SKU.
             */
            name?: string;
            /**
             * If not specified, the default is 'Free'. See [AKS Pricing Tier](https://learn.microsoft.com/azure/aks/free-standard-pricing-tiers) for more details.
             */
            tier?: string;
        }

        /**
         * Microsoft Defender settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileDefenderResponse {
            /**
             * Resource ID of the Log Analytics workspace to be associated with Microsoft Defender. When Microsoft Defender is enabled, this field is required and must be a valid workspace resource ID. When Microsoft Defender is disabled, leave the field empty.
             */
            logAnalyticsWorkspaceResourceId?: string;
            /**
             * Microsoft Defender threat detection for Cloud settings for the security profile.
             */
            securityMonitoring?: v20230502preview.ManagedClusterSecurityProfileDefenderSecurityMonitoringResponse;
        }

        /**
         * Microsoft Defender settings for the security profile threat detection.
         */
        export interface ManagedClusterSecurityProfileDefenderSecurityMonitoringResponse {
            /**
             * Whether to enable Defender threat detection
             */
            enabled?: boolean;
        }

        /**
         * Image Cleaner removes unused images from nodes, freeing up disk space and helping to reduce attack surface area. Here are settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileImageCleanerResponse {
            /**
             * Whether to enable Image Cleaner on AKS cluster.
             */
            enabled?: boolean;
            /**
             * Image Cleaner scanning interval in hours.
             */
            intervalHours?: number;
        }

        /**
         * Node Restriction settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileNodeRestrictionResponse {
            /**
             * Whether to enable Node Restriction
             */
            enabled?: boolean;
        }

        /**
         * Security profile for the container service cluster.
         */
        export interface ManagedClusterSecurityProfileResponse {
            /**
             * Azure Key Vault [key management service](https://kubernetes.io/docs/tasks/administer-cluster/kms-provider/) settings for the security profile.
             */
            azureKeyVaultKms?: v20230502preview.AzureKeyVaultKmsResponse;
            /**
             * A list of up to 10 base64 encoded CAs that will be added to the trust store on nodes with the Custom CA Trust feature enabled. For more information see [Custom CA Trust Certificates](https://learn.microsoft.com/en-us/azure/aks/custom-certificate-authority)
             */
            customCATrustCertificates?: string[];
            /**
             * Microsoft Defender settings for the security profile.
             */
            defender?: v20230502preview.ManagedClusterSecurityProfileDefenderResponse;
            /**
             * Image Cleaner settings for the security profile.
             */
            imageCleaner?: v20230502preview.ManagedClusterSecurityProfileImageCleanerResponse;
            /**
             * [Node Restriction](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#noderestriction) settings for the security profile.
             */
            nodeRestriction?: v20230502preview.ManagedClusterSecurityProfileNodeRestrictionResponse;
            /**
             * Workload identity settings for the security profile. Workload identity enables Kubernetes applications to access Azure cloud resources securely with Azure AD. See https://aka.ms/aks/wi for more details.
             */
            workloadIdentity?: v20230502preview.ManagedClusterSecurityProfileWorkloadIdentityResponse;
        }
        /**
         * managedClusterSecurityProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterSecurityProfileResponse
         */
        export function managedClusterSecurityProfileResponseProvideDefaults(val: ManagedClusterSecurityProfileResponse): ManagedClusterSecurityProfileResponse {
            return {
                ...val,
                azureKeyVaultKms: (val.azureKeyVaultKms ? v20230502preview.azureKeyVaultKmsResponseProvideDefaults(val.azureKeyVaultKms) : undefined),
            };
        }

        /**
         * Workload identity settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileWorkloadIdentityResponse {
            /**
             * Whether to enable workload identity.
             */
            enabled?: boolean;
        }

        /**
         * Information about a service principal identity for the cluster to use for manipulating Azure APIs.
         */
        export interface ManagedClusterServicePrincipalProfileResponse {
            /**
             * The ID for the service principal.
             */
            clientId: string;
            /**
             * The secret password associated with the service principal in plain text.
             */
            secret?: string;
        }

        /**
         * AzureBlob CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileBlobCSIDriverResponse {
            /**
             * Whether to enable AzureBlob CSI Driver. The default value is false.
             */
            enabled?: boolean;
        }

        /**
         * AzureDisk CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileDiskCSIDriverResponse {
            /**
             * Whether to enable AzureDisk CSI Driver. The default value is true.
             */
            enabled?: boolean;
            /**
             * The version of AzureDisk CSI Driver. The default value is v1.
             */
            version?: string;
        }

        /**
         * AzureFile CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileFileCSIDriverResponse {
            /**
             * Whether to enable AzureFile CSI Driver. The default value is true.
             */
            enabled?: boolean;
        }

        /**
         * Storage profile for the container service cluster.
         */
        export interface ManagedClusterStorageProfileResponse {
            /**
             * AzureBlob CSI Driver settings for the storage profile.
             */
            blobCSIDriver?: v20230502preview.ManagedClusterStorageProfileBlobCSIDriverResponse;
            /**
             * AzureDisk CSI Driver settings for the storage profile.
             */
            diskCSIDriver?: v20230502preview.ManagedClusterStorageProfileDiskCSIDriverResponse;
            /**
             * AzureFile CSI Driver settings for the storage profile.
             */
            fileCSIDriver?: v20230502preview.ManagedClusterStorageProfileFileCSIDriverResponse;
            /**
             * Snapshot Controller settings for the storage profile.
             */
            snapshotController?: v20230502preview.ManagedClusterStorageProfileSnapshotControllerResponse;
        }

        /**
         * Snapshot Controller settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileSnapshotControllerResponse {
            /**
             * Whether to enable Snapshot Controller. The default value is true.
             */
            enabled?: boolean;
        }

        /**
         * Profile for Windows VMs in the managed cluster.
         */
        export interface ManagedClusterWindowsProfileResponse {
            /**
             * Specifies the password of the administrator account. <br><br> **Minimum-length:** 8 characters <br><br> **Max-length:** 123 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!"
             */
            adminPassword?: string;
            /**
             * Specifies the name of the administrator account. <br><br> **Restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length:** 1 character <br><br> **Max-length:** 20 characters
             */
            adminUsername: string;
            /**
             * For more details on CSI proxy, see the [CSI proxy GitHub repo](https://github.com/kubernetes-csi/csi-proxy).
             */
            enableCSIProxy?: boolean;
            /**
             * The Windows gMSA Profile in the Managed Cluster.
             */
            gmsaProfile?: v20230502preview.WindowsGmsaProfileResponse;
            /**
             * The license type to use for Windows VMs. See [Azure Hybrid User Benefits](https://azure.microsoft.com/pricing/hybrid-benefit/faq/) for more details.
             */
            licenseType?: string;
        }

        /**
         * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
         */
        export interface ManagedClusterWorkloadAutoScalerProfileKedaResponse {
            /**
             * Whether to enable KEDA.
             */
            enabled: boolean;
        }

        /**
         * Workload Auto-scaler profile for the managed cluster.
         */
        export interface ManagedClusterWorkloadAutoScalerProfileResponse {
            /**
             * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
             */
            keda?: v20230502preview.ManagedClusterWorkloadAutoScalerProfileKedaResponse;
            verticalPodAutoscaler?: v20230502preview.ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse;
        }
        /**
         * managedClusterWorkloadAutoScalerProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterWorkloadAutoScalerProfileResponse
         */
        export function managedClusterWorkloadAutoScalerProfileResponseProvideDefaults(val: ManagedClusterWorkloadAutoScalerProfileResponse): ManagedClusterWorkloadAutoScalerProfileResponse {
            return {
                ...val,
                verticalPodAutoscaler: (val.verticalPodAutoscaler ? v20230502preview.managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponseProvideDefaults(val.verticalPodAutoscaler) : undefined),
            };
        }

        export interface ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse {
            /**
             * Controls which resource value autoscaler will change. Default value is RequestsAndLimits.
             */
            controlledValues: string;
            /**
             * Whether to enable VPA. Default value is false.
             */
            enabled: boolean;
            /**
             * Each update mode level is a superset of the lower levels. Off<Initial<Recreate<=Auto. For example: if UpdateMode is Initial, it means VPA sets the recommended resources in the VerticalPodAutoscaler Custom Resource (from UpdateMode Off) and also assigns resources on pod creation (from Initial). The default value is Off.
             */
            updateMode: string;
        }
        /**
         * managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponseProvideDefaults sets the appropriate defaults for ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse
         */
        export function managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponseProvideDefaults(val: ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse): ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse {
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
        export interface NetworkMonitoringResponse {
            /**
             * Enable or disable the network monitoring plugin on the cluster
             */
            enabled?: boolean;
        }

        /**
         * network profile for managed cluster snapshot, these properties are read only.
         */
        export interface NetworkProfileForSnapshotResponse {
            /**
             * loadBalancerSku for managed cluster snapshot.
             */
            loadBalancerSku?: string;
            /**
             * networkMode for managed cluster snapshot.
             */
            networkMode?: string;
            /**
             * networkPlugin for managed cluster snapshot.
             */
            networkPlugin?: string;
            /**
             * NetworkPluginMode for managed cluster snapshot.
             */
            networkPluginMode?: string;
            /**
             * networkPolicy for managed cluster snapshot.
             */
            networkPolicy?: string;
        }

        /**
         * The port range.
         */
        export interface PortRangeResponse {
            /**
             * The maximum port that is included in the range. It should be ranged from 1 to 65535, and be greater than or equal to portStart.
             */
            portEnd?: number;
            /**
             * The minimum port that is included in the range. It should be ranged from 1 to 65535, and be less than or equal to portEnd.
             */
            portStart?: number;
            /**
             * The network protocol of the port.
             */
            protocol?: string;
        }

        /**
         * Describes the Power State of the cluster
         */
        export interface PowerStateResponse {
            /**
             * Tells whether the cluster is Running or Stopped
             */
            code?: string;
        }

        /**
         * Private endpoint which a connection belongs to.
         */
        export interface PrivateEndpointResponse {
            /**
             * The resource ID of the private endpoint
             */
            id?: string;
        }

        /**
         * A private link resource
         */
        export interface PrivateLinkResourceResponse {
            /**
             * The group ID of the resource.
             */
            groupId?: string;
            /**
             * The ID of the private link resource.
             */
            id?: string;
            /**
             * The name of the private link resource.
             */
            name?: string;
            /**
             * The private link service ID of the resource, this field is exposed only to NRP internally.
             */
            privateLinkServiceID: string;
            /**
             * The RequiredMembers of the resource
             */
            requiredMembers?: string[];
            /**
             * The resource type.
             */
            type?: string;
        }

        /**
         * The state of a private link service connection.
         */
        export interface PrivateLinkServiceConnectionStateResponse {
            /**
             * The private link service connection description.
             */
            description?: string;
            /**
             * The private link service connection status.
             */
            status?: string;
        }

        /**
         * For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'.
         */
        export interface RelativeMonthlyScheduleResponse {
            /**
             * Specifies on which day of the week the maintenance occurs.
             */
            dayOfWeek: string;
            /**
             * Specifies the number of months between each set of occurrences.
             */
            intervalMonths: number;
            /**
             * Specifies on which instance of the allowed days specified in daysOfWeek the maintenance occurs.
             */
            weekIndex: string;
        }

        /**
         * A reference to an Azure resource.
         */
        export interface ResourceReferenceResponse {
            /**
             * The fully qualified Azure resource id.
             */
            id?: string;
        }

        /**
         * One and only one of the schedule types should be specified. Choose either 'daily', 'weekly', 'absoluteMonthly' or 'relativeMonthly' for your maintenance schedule.
         */
        export interface ScheduleResponse {
            /**
             * For schedules like: 'recur every month on the 15th' or 'recur every 3 months on the 20th'.
             */
            absoluteMonthly?: v20230502preview.AbsoluteMonthlyScheduleResponse;
            /**
             * For schedules like: 'recur every day' or 'recur every 3 days'.
             */
            daily?: v20230502preview.DailyScheduleResponse;
            /**
             * For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'.
             */
            relativeMonthly?: v20230502preview.RelativeMonthlyScheduleResponse;
            /**
             * For schedules like: 'recur every Monday' or 'recur every 3 weeks on Wednesday'.
             */
            weekly?: v20230502preview.WeeklyScheduleResponse;
        }

        /**
         * Service mesh profile for a managed cluster.
         */
        export interface ServiceMeshProfileResponse {
            /**
             * Istio service mesh configuration.
             */
            istio?: v20230502preview.IstioServiceMeshResponse;
            /**
             * Mode of the service mesh.
             */
            mode: string;
        }

        /**
         * Sysctl settings for Linux agent nodes.
         */
        export interface SysctlConfigResponse {
            /**
             * Sysctl setting fs.aio-max-nr.
             */
            fsAioMaxNr?: number;
            /**
             * Sysctl setting fs.file-max.
             */
            fsFileMax?: number;
            /**
             * Sysctl setting fs.inotify.max_user_watches.
             */
            fsInotifyMaxUserWatches?: number;
            /**
             * Sysctl setting fs.nr_open.
             */
            fsNrOpen?: number;
            /**
             * Sysctl setting kernel.threads-max.
             */
            kernelThreadsMax?: number;
            /**
             * Sysctl setting net.core.netdev_max_backlog.
             */
            netCoreNetdevMaxBacklog?: number;
            /**
             * Sysctl setting net.core.optmem_max.
             */
            netCoreOptmemMax?: number;
            /**
             * Sysctl setting net.core.rmem_default.
             */
            netCoreRmemDefault?: number;
            /**
             * Sysctl setting net.core.rmem_max.
             */
            netCoreRmemMax?: number;
            /**
             * Sysctl setting net.core.somaxconn.
             */
            netCoreSomaxconn?: number;
            /**
             * Sysctl setting net.core.wmem_default.
             */
            netCoreWmemDefault?: number;
            /**
             * Sysctl setting net.core.wmem_max.
             */
            netCoreWmemMax?: number;
            /**
             * Sysctl setting net.ipv4.ip_local_port_range.
             */
            netIpv4IpLocalPortRange?: string;
            /**
             * Sysctl setting net.ipv4.neigh.default.gc_thresh1.
             */
            netIpv4NeighDefaultGcThresh1?: number;
            /**
             * Sysctl setting net.ipv4.neigh.default.gc_thresh2.
             */
            netIpv4NeighDefaultGcThresh2?: number;
            /**
             * Sysctl setting net.ipv4.neigh.default.gc_thresh3.
             */
            netIpv4NeighDefaultGcThresh3?: number;
            /**
             * Sysctl setting net.ipv4.tcp_fin_timeout.
             */
            netIpv4TcpFinTimeout?: number;
            /**
             * Sysctl setting net.ipv4.tcp_keepalive_probes.
             */
            netIpv4TcpKeepaliveProbes?: number;
            /**
             * Sysctl setting net.ipv4.tcp_keepalive_time.
             */
            netIpv4TcpKeepaliveTime?: number;
            /**
             * Sysctl setting net.ipv4.tcp_max_syn_backlog.
             */
            netIpv4TcpMaxSynBacklog?: number;
            /**
             * Sysctl setting net.ipv4.tcp_max_tw_buckets.
             */
            netIpv4TcpMaxTwBuckets?: number;
            /**
             * Sysctl setting net.ipv4.tcp_tw_reuse.
             */
            netIpv4TcpTwReuse?: boolean;
            /**
             * Sysctl setting net.ipv4.tcp_keepalive_intvl.
             */
            netIpv4TcpkeepaliveIntvl?: number;
            /**
             * Sysctl setting net.netfilter.nf_conntrack_buckets.
             */
            netNetfilterNfConntrackBuckets?: number;
            /**
             * Sysctl setting net.netfilter.nf_conntrack_max.
             */
            netNetfilterNfConntrackMax?: number;
            /**
             * Sysctl setting vm.max_map_count.
             */
            vmMaxMapCount?: number;
            /**
             * Sysctl setting vm.swappiness.
             */
            vmSwappiness?: number;
            /**
             * Sysctl setting vm.vfs_cache_pressure.
             */
            vmVfsCachePressure?: number;
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
         * Time in a week.
         */
        export interface TimeInWeekResponse {
            /**
             * The day of the week.
             */
            day?: string;
            /**
             * Each integer hour represents a time range beginning at 0m after the hour ending at the next hour (non-inclusive). 0 corresponds to 00:00 UTC, 23 corresponds to 23:00 UTC. Specifying [0, 1] means the 00:00 - 02:00 UTC time range.
             */
            hourSlots?: number[];
        }

        /**
         * For example, between 2021-05-25T13:00:00Z and 2021-05-25T14:00:00Z.
         */
        export interface TimeSpanResponse {
            /**
             * The end of a time span
             */
            end?: string;
            /**
             * The start of a time span
             */
            start?: string;
        }

        /**
         * Settings for overrides when upgrading a cluster.
         */
        export interface UpgradeOverrideSettingsResponse {
            /**
             * List of upgrade overrides when upgrading a cluster's control plane.
             */
            controlPlaneOverrides?: string[];
            /**
             * Until when the overrides are effective. Note that this only matches the start time of an upgrade, and the effectiveness won't change once an upgrade starts even if the `until` expires as upgrade proceeds. This field is not set by default. It must be set for the overrides to take effect.
             */
            until?: string;
        }

        /**
         * Details about a user assigned identity.
         */
        export interface UserAssignedIdentityResponse {
            /**
             * The client ID of the user assigned identity.
             */
            clientId?: string;
            /**
             * The object ID of the user assigned identity.
             */
            objectId?: string;
            /**
             * The resource ID of the user assigned identity.
             */
            resourceId?: string;
        }

        /**
         * For schedules like: 'recur every Monday' or 'recur every 3 weeks on Wednesday'.
         */
        export interface WeeklyScheduleResponse {
            /**
             * Specifies on which day of the week the maintenance occurs.
             */
            dayOfWeek: string;
            /**
             * Specifies the number of weeks between each set of occurrences.
             */
            intervalWeeks: number;
        }

        /**
         * Windows gMSA Profile in the managed cluster.
         */
        export interface WindowsGmsaProfileResponse {
            /**
             * Specifies the DNS server for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
             */
            dnsServer?: string;
            /**
             * Specifies whether to enable Windows gMSA in the managed cluster.
             */
            enabled?: boolean;
            /**
             * Specifies the root domain name for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
             */
            rootDomainName?: string;
        }

    }

    export namespace v20230601 {
        /**
         * For schedules like: 'recur every month on the 15th' or 'recur every 3 months on the 20th'.
         */
        export interface AbsoluteMonthlyScheduleResponse {
            /**
             * The date of the month.
             */
            dayOfMonth: number;
            /**
             * Specifies the number of months between each set of occurrences.
             */
            intervalMonths: number;
        }

        /**
         * Settings for upgrading an agentpool
         */
        export interface AgentPoolUpgradeSettingsResponse {
            /**
             * The amount of time (in minutes) to wait on eviction of pods and graceful termination per node. This eviction wait time honors waiting on pod disruption budgets. If this time is exceeded, the upgrade fails. If not specified, the default is 30 minutes.
             */
            drainTimeoutInMinutes?: number;
            /**
             * This can either be set to an integer (e.g. '5') or a percentage (e.g. '50%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified, the default is 1. For more information, including best practices, see: https://docs.microsoft.com/azure/aks/upgrade-cluster#customize-node-surge-upgrade
             */
            maxSurge?: string;
        }

        /**
         * Azure Key Vault key management service settings for the security profile.
         */
        export interface AzureKeyVaultKmsResponse {
            /**
             * Whether to enable Azure Key Vault key management service. The default is false.
             */
            enabled?: boolean;
            /**
             * Identifier of Azure Key Vault key. See [key identifier format](https://docs.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates#vault-name-and-object-name) for more details. When Azure Key Vault key management service is enabled, this field is required and must be a valid key identifier. When Azure Key Vault key management service is disabled, leave the field empty.
             */
            keyId?: string;
            /**
             * Network access of key vault. The possible values are `Public` and `Private`. `Public` means the key vault allows public access from all networks. `Private` means the key vault disables public access and enables private link. The default value is `Public`.
             */
            keyVaultNetworkAccess?: string;
            /**
             * Resource ID of key vault. When keyVaultNetworkAccess is `Private`, this field is required and must be a valid resource ID. When keyVaultNetworkAccess is `Public`, leave the field empty.
             */
            keyVaultResourceId?: string;
        }
        /**
         * azureKeyVaultKmsResponseProvideDefaults sets the appropriate defaults for AzureKeyVaultKmsResponse
         */
        export function azureKeyVaultKmsResponseProvideDefaults(val: AzureKeyVaultKmsResponse): AzureKeyVaultKmsResponse {
            return {
                ...val,
                keyVaultNetworkAccess: (val.keyVaultNetworkAccess) ?? "Public",
            };
        }

        /**
         * Profile for Linux VMs in the container service cluster.
         */
        export interface ContainerServiceLinuxProfileResponse {
            /**
             * The administrator username to use for Linux VMs.
             */
            adminUsername: string;
            /**
             * The SSH configuration for Linux-based VMs running on Azure.
             */
            ssh: v20230601.ContainerServiceSshConfigurationResponse;
        }

        /**
         * Profile of network configuration.
         */
        export interface ContainerServiceNetworkProfileResponse {
            /**
             * An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
             */
            dnsServiceIP?: string;
            /**
             * IP families are used to determine single-stack or dual-stack clusters. For single-stack, the expected value is IPv4. For dual-stack, the expected values are IPv4 and IPv6.
             */
            ipFamilies?: string[];
            /**
             * Profile of the cluster load balancer.
             */
            loadBalancerProfile?: v20230601.ManagedClusterLoadBalancerProfileResponse;
            /**
             * The default is 'standard'. See [Azure Load Balancer SKUs](https://docs.microsoft.com/azure/load-balancer/skus) for more information about the differences between load balancer SKUs.
             */
            loadBalancerSku?: string;
            /**
             * Profile of the cluster NAT gateway.
             */
            natGatewayProfile?: v20230601.ManagedClusterNATGatewayProfileResponse;
            /**
             * Network dataplane used in the Kubernetes cluster.
             */
            networkDataplane?: string;
            /**
             * This cannot be specified if networkPlugin is anything other than 'azure'.
             */
            networkMode?: string;
            /**
             * Network plugin used for building the Kubernetes network.
             */
            networkPlugin?: string;
            /**
             * The mode the network plugin should use.
             */
            networkPluginMode?: string;
            /**
             * Network policy used for building the Kubernetes network.
             */
            networkPolicy?: string;
            /**
             * This can only be set at cluster creation time and cannot be changed later. For more information see [egress outbound type](https://docs.microsoft.com/azure/aks/egress-outboundtype).
             */
            outboundType?: string;
            /**
             * A CIDR notation IP range from which to assign pod IPs when kubenet is used.
             */
            podCidr?: string;
            /**
             * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
             */
            podCidrs?: string[];
            /**
             * A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
             */
            serviceCidr?: string;
            /**
             * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking. They must not overlap with any Subnet IP ranges.
             */
            serviceCidrs?: string[];
        }
        /**
         * containerServiceNetworkProfileResponseProvideDefaults sets the appropriate defaults for ContainerServiceNetworkProfileResponse
         */
        export function containerServiceNetworkProfileResponseProvideDefaults(val: ContainerServiceNetworkProfileResponse): ContainerServiceNetworkProfileResponse {
            return {
                ...val,
                dnsServiceIP: (val.dnsServiceIP) ?? "10.0.0.10",
                loadBalancerProfile: (val.loadBalancerProfile ? v20230601.managedClusterLoadBalancerProfileResponseProvideDefaults(val.loadBalancerProfile) : undefined),
                natGatewayProfile: (val.natGatewayProfile ? v20230601.managedClusterNATGatewayProfileResponseProvideDefaults(val.natGatewayProfile) : undefined),
                networkPlugin: (val.networkPlugin) ?? "kubenet",
                outboundType: (val.outboundType) ?? "loadBalancer",
                podCidr: (val.podCidr) ?? "10.244.0.0/16",
                serviceCidr: (val.serviceCidr) ?? "10.0.0.0/16",
            };
        }

        /**
         * SSH configuration for Linux-based VMs running on Azure.
         */
        export interface ContainerServiceSshConfigurationResponse {
            /**
             * The list of SSH public keys used to authenticate with Linux-based VMs. A maximum of 1 key may be specified.
             */
            publicKeys: v20230601.ContainerServiceSshPublicKeyResponse[];
        }

        /**
         * Contains information about SSH certificate public key data.
         */
        export interface ContainerServiceSshPublicKeyResponse {
            /**
             * Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.
             */
            keyData: string;
        }

        /**
         * Data used when creating a target resource from a source resource.
         */
        export interface CreationDataResponse {
            /**
             * This is the ARM ID of the source object to be used to create the target object.
             */
            sourceResourceId?: string;
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
         * For schedules like: 'recur every day' or 'recur every 3 days'.
         */
        export interface DailyScheduleResponse {
            /**
             * Specifies the number of days between each set of occurrences.
             */
            intervalDays: number;
        }

        /**
         * For example, between '2022-12-23' and '2023-01-05'.
         */
        export interface DateSpanResponse {
            /**
             * The end date of the date span.
             */
            end: string;
            /**
             * The start date of the date span.
             */
            start: string;
        }

        /**
         * Delegated resource properties - internal use only.
         */
        export interface DelegatedResourceResponse {
            /**
             * The source resource location - internal use only.
             */
            location?: string;
            /**
             * The delegation id of the referral delegation (optional) - internal use only.
             */
            referralResource?: string;
            /**
             * The ARM resource id of the delegated resource - internal use only.
             */
            resourceId?: string;
            /**
             * The tenant id of the delegated resource - internal use only.
             */
            tenantId?: string;
        }

        /**
         * The complex type of the extended location.
         */
        export interface ExtendedLocationResponse {
            /**
             * The name of the extended location.
             */
            name?: string;
            /**
             * The type of the extended location.
             */
            type?: string;
        }

        /**
         * See [AKS custom node configuration](https://docs.microsoft.com/azure/aks/custom-node-configuration) for more details.
         */
        export interface KubeletConfigResponse {
            /**
             * Allowed list of unsafe sysctls or unsafe sysctl patterns (ending in `*`).
             */
            allowedUnsafeSysctls?: string[];
            /**
             * The maximum number of container log files that can be present for a container. The number must be ≥ 2.
             */
            containerLogMaxFiles?: number;
            /**
             * The maximum size (e.g. 10Mi) of container log file before it is rotated.
             */
            containerLogMaxSizeMB?: number;
            /**
             * The default is true.
             */
            cpuCfsQuota?: boolean;
            /**
             * The default is '100ms.' Valid values are a sequence of decimal numbers with an optional fraction and a unit suffix. For example: '300ms', '2h45m'. Supported units are 'ns', 'us', 'ms', 's', 'm', and 'h'.
             */
            cpuCfsQuotaPeriod?: string;
            /**
             * The default is 'none'. See [Kubernetes CPU management policies](https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/#cpu-management-policies) for more information. Allowed values are 'none' and 'static'.
             */
            cpuManagerPolicy?: string;
            /**
             * If set to true it will make the Kubelet fail to start if swap is enabled on the node.
             */
            failSwapOn?: boolean;
            /**
             * To disable image garbage collection, set to 100. The default is 85%
             */
            imageGcHighThreshold?: number;
            /**
             * This cannot be set higher than imageGcHighThreshold. The default is 80%
             */
            imageGcLowThreshold?: number;
            /**
             * The maximum number of processes per pod.
             */
            podMaxPids?: number;
            /**
             * For more information see [Kubernetes Topology Manager](https://kubernetes.io/docs/tasks/administer-cluster/topology-manager). The default is 'none'. Allowed values are 'none', 'best-effort', 'restricted', and 'single-numa-node'.
             */
            topologyManagerPolicy?: string;
        }

        /**
         * See [AKS custom node configuration](https://docs.microsoft.com/azure/aks/custom-node-configuration) for more details.
         */
        export interface LinuxOSConfigResponse {
            /**
             * The size in MB of a swap file that will be created on each node.
             */
            swapFileSizeMB?: number;
            /**
             * Sysctl settings for Linux agent nodes.
             */
            sysctls?: v20230601.SysctlConfigResponse;
            /**
             * Valid values are 'always', 'defer', 'defer+madvise', 'madvise' and 'never'. The default is 'madvise'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
             */
            transparentHugePageDefrag?: string;
            /**
             * Valid values are 'always', 'madvise', and 'never'. The default is 'always'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
             */
            transparentHugePageEnabled?: string;
        }

        /**
         * Maintenance window used to configure scheduled auto-upgrade for a Managed Cluster.
         */
        export interface MaintenanceWindowResponse {
            /**
             * Length of maintenance window range from 4 to 24 hours.
             */
            durationHours: number;
            /**
             * Date ranges on which upgrade is not allowed. 'utcOffset' applies to this field. For example, with 'utcOffset: +02:00' and 'dateSpan' being '2022-12-23' to '2023-01-03', maintenance will be blocked from '2022-12-22 22:00' to '2023-01-03 22:00' in UTC time.
             */
            notAllowedDates?: v20230601.DateSpanResponse[];
            /**
             * Recurrence schedule for the maintenance window.
             */
            schedule: v20230601.ScheduleResponse;
            /**
             * The date the maintenance window activates. If the current date is before this date, the maintenance window is inactive and will not be used for upgrades. If not specified, the maintenance window will be active right away.
             */
            startDate?: string;
            /**
             * The start time of the maintenance window. Accepted values are from '00:00' to '23:59'. 'utcOffset' applies to this field. For example: '02:00' with 'utcOffset: +02:00' means UTC time '00:00'.
             */
            startTime: string;
            /**
             * The UTC offset in format +/-HH:mm. For example, '+05:30' for IST and '-07:00' for PST. If not specified, the default is '+00:00'.
             */
            utcOffset?: string;
        }
        /**
         * maintenanceWindowResponseProvideDefaults sets the appropriate defaults for MaintenanceWindowResponse
         */
        export function maintenanceWindowResponseProvideDefaults(val: MaintenanceWindowResponse): MaintenanceWindowResponse {
            return {
                ...val,
                durationHours: (val.durationHours) ?? 24,
            };
        }

        /**
         * For more details see [managed AAD on AKS](https://docs.microsoft.com/azure/aks/managed-aad).
         */
        export interface ManagedClusterAADProfileResponse {
            /**
             * The list of AAD group object IDs that will have admin role of the cluster.
             */
            adminGroupObjectIDs?: string[];
            /**
             * (DEPRECATED) The client AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
             */
            clientAppID?: string;
            /**
             * Whether to enable Azure RBAC for Kubernetes authorization.
             */
            enableAzureRBAC?: boolean;
            /**
             * Whether to enable managed AAD.
             */
            managed?: boolean;
            /**
             * (DEPRECATED) The server AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
             */
            serverAppID?: string;
            /**
             * (DEPRECATED) The server AAD application secret. Learn more at https://aka.ms/aks/aad-legacy.
             */
            serverAppSecret?: string;
            /**
             * The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription.
             */
            tenantID?: string;
        }

        /**
         * Access profile for managed cluster API server.
         */
        export interface ManagedClusterAPIServerAccessProfileResponse {
            /**
             * IP ranges are specified in CIDR format, e.g. 137.117.106.88/29. This feature is not compatible with clusters that use Public IP Per Node, or clusters that are using a Basic Load Balancer. For more information see [API server authorized IP ranges](https://docs.microsoft.com/azure/aks/api-server-authorized-ip-ranges).
             */
            authorizedIPRanges?: string[];
            /**
             * Whether to disable run command for the cluster or not.
             */
            disableRunCommand?: boolean;
            /**
             * For more details, see [Creating a private AKS cluster](https://docs.microsoft.com/azure/aks/private-clusters).
             */
            enablePrivateCluster?: boolean;
            /**
             * Whether to create additional public FQDN for private cluster or not.
             */
            enablePrivateClusterPublicFQDN?: boolean;
            /**
             * The default is System. For more details see [configure private DNS zone](https://docs.microsoft.com/azure/aks/private-clusters#configure-private-dns-zone). Allowed values are 'system' and 'none'.
             */
            privateDNSZone?: string;
        }

        /**
         * A Kubernetes add-on profile for a managed cluster.
         */
        export interface ManagedClusterAddonProfileResponse {
            /**
             * Key-value pairs for configuring an add-on.
             */
            config?: {[key: string]: string};
            /**
             * Whether the add-on is enabled or not.
             */
            enabled: boolean;
            /**
             * Information of user assigned identity used by this add-on.
             */
            identity: v20230601.ManagedClusterAddonProfileResponseIdentity;
        }

        /**
         * Information of user assigned identity used by this add-on.
         */
        export interface ManagedClusterAddonProfileResponseIdentity {
            /**
             * The client ID of the user assigned identity.
             */
            clientId?: string;
            /**
             * The object ID of the user assigned identity.
             */
            objectId?: string;
            /**
             * The resource ID of the user assigned identity.
             */
            resourceId?: string;
        }

        /**
         * Profile for the container service agent pool.
         */
        export interface ManagedClusterAgentPoolProfileResponse {
            /**
             * The list of Availability zones to use for nodes. This can only be specified if the AgentPoolType property is 'VirtualMachineScaleSets'.
             */
            availabilityZones?: string[];
            /**
             * Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 1000 (inclusive) for user pools and in the range of 1 to 1000 (inclusive) for system pools. The default value is 1.
             */
            count?: number;
            /**
             * CreationData to be used to specify the source Snapshot ID if the node pool will be created/upgraded using a snapshot.
             */
            creationData?: v20230601.CreationDataResponse;
            /**
             * If orchestratorVersion is a fully specified version <major.minor.patch>, this field will be exactly equal to it. If orchestratorVersion is <major.minor>, this field will contain the full <major.minor.patch> version being used.
             */
            currentOrchestratorVersion: string;
            /**
             * Whether to enable auto-scaler
             */
            enableAutoScaling?: boolean;
            /**
             * This is only supported on certain VM sizes and in certain Azure regions. For more information, see: https://docs.microsoft.com/azure/aks/enable-host-encryption
             */
            enableEncryptionAtHost?: boolean;
            /**
             * See [Add a FIPS-enabled node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#add-a-fips-enabled-node-pool-preview) for more details.
             */
            enableFIPS?: boolean;
            /**
             * Some scenarios may require nodes in a node pool to receive their own dedicated public IP addresses. A common scenario is for gaming workloads, where a console needs to make a direct connection to a cloud virtual machine to minimize hops. For more information see [assigning a public IP per node](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#assign-a-public-ip-per-node-for-your-node-pools). The default is false.
             */
            enableNodePublicIP?: boolean;
            /**
             * Whether to enable UltraSSD
             */
            enableUltraSSD?: boolean;
            /**
             * GPUInstanceProfile to be used to specify GPU MIG instance profile for supported GPU VM SKU.
             */
            gpuInstanceProfile?: string;
            /**
             * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}. For more information see [Azure dedicated hosts](https://docs.microsoft.com/azure/virtual-machines/dedicated-hosts).
             */
            hostGroupID?: string;
            /**
             * The Kubelet configuration on the agent pool nodes.
             */
            kubeletConfig?: v20230601.KubeletConfigResponse;
            /**
             * Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage.
             */
            kubeletDiskType?: string;
            /**
             * The OS configuration of Linux agent nodes.
             */
            linuxOSConfig?: v20230601.LinuxOSConfigResponse;
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
             * A cluster must have at least one 'System' Agent Pool at all times. For additional information on agent pool restrictions and best practices, see: https://docs.microsoft.com/azure/aks/use-system-pools
             */
            mode?: string;
            /**
             * Windows agent pool names must be 6 characters or less.
             */
            name: string;
            /**
             * The version of node image
             */
            nodeImageVersion: string;
            /**
             * The node labels to be persisted across all nodes in agent pool.
             */
            nodeLabels?: {[key: string]: string};
            /**
             * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIPPrefixName}
             */
            nodePublicIPPrefixID?: string;
            /**
             * The taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
             */
            nodeTaints?: string[];
            /**
             * Both patch version <major.minor.patch> (e.g. 1.20.13) and <major.minor> (e.g. 1.20) are supported. When <major.minor> is specified, the latest supported GA patch version is chosen automatically. Updating the cluster with the same <major.minor> once it has been created (e.g. 1.14.x -> 1.14) will not trigger an upgrade, even if a newer patch version is available. As a best practice, you should upgrade all node pools in an AKS cluster to the same Kubernetes version. The node pool version must have the same major version as the control plane. The node pool minor version must be within two minor versions of the control plane version. The node pool version cannot be greater than the control plane version. For more information see [upgrading a node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#upgrade-a-node-pool).
             */
            orchestratorVersion?: string;
            /**
             * OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
             */
            osDiskSizeGB?: number;
            /**
             * The default is 'Ephemeral' if the VM supports it and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation. For more information see [Ephemeral OS](https://docs.microsoft.com/azure/aks/cluster-configuration#ephemeral-os).
             */
            osDiskType?: string;
            /**
             * Specifies the OS SKU used by the agent pool. The default is Ubuntu if OSType is Linux. The default is Windows2019 when Kubernetes <= 1.24 or Windows2022 when Kubernetes >= 1.25 if OSType is Windows.
             */
            osSKU?: string;
            /**
             * The operating system type. The default is Linux.
             */
            osType?: string;
            /**
             * If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
             */
            podSubnetID?: string;
            /**
             * When an Agent Pool is first created it is initially Running. The Agent Pool can be stopped by setting this field to Stopped. A stopped Agent Pool stops all of its VMs and does not accrue billing charges. An Agent Pool can only be stopped if it is Running and provisioning state is Succeeded
             */
            powerState?: v20230601.PowerStateResponse;
            /**
             * The current deployment or provisioning state.
             */
            provisioningState: string;
            /**
             * The ID for Proximity Placement Group.
             */
            proximityPlacementGroupID?: string;
            /**
             * This also effects the cluster autoscaler behavior. If not specified, it defaults to Delete.
             */
            scaleDownMode?: string;
            /**
             * This cannot be specified unless the scaleSetPriority is 'Spot'. If not specified, the default is 'Delete'.
             */
            scaleSetEvictionPolicy?: string;
            /**
             * The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'.
             */
            scaleSetPriority?: string;
            /**
             * Possible values are any decimal value greater than zero or -1 which indicates the willingness to pay any on-demand price. For more details on spot pricing, see [spot VMs pricing](https://docs.microsoft.com/azure/virtual-machines/spot-vms#pricing)
             */
            spotMaxPrice?: number;
            /**
             * The tags to be persisted on the agent pool virtual machine scale set.
             */
            tags?: {[key: string]: string};
            /**
             * The type of Agent Pool.
             */
            type?: string;
            /**
             * Settings for upgrading the agentpool
             */
            upgradeSettings?: v20230601.AgentPoolUpgradeSettingsResponse;
            /**
             * VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. For more details on restricted VM sizes, see: https://docs.microsoft.com/azure/aks/quotas-skus-regions
             */
            vmSize?: string;
            /**
             * If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
             */
            vnetSubnetID?: string;
            /**
             * Determines the type of workload a node can run.
             */
            workloadRuntime?: string;
        }

        /**
         * Auto upgrade profile for a managed cluster.
         */
        export interface ManagedClusterAutoUpgradeProfileResponse {
            /**
             * Manner in which the OS on your nodes is updated. The default is NodeImage.
             */
            nodeOSUpgradeChannel?: string;
            /**
             * For more information see [setting the AKS cluster auto-upgrade channel](https://docs.microsoft.com/azure/aks/upgrade-cluster#set-auto-upgrade-channel).
             */
            upgradeChannel?: string;
        }

        /**
         * Kube State Metrics profile for the Azure Managed Prometheus addon. These optional settings are for the kube-state-metrics pod that is deployed with the addon. See aka.ms/AzureManagedPrometheus-optional-parameters for details.
         */
        export interface ManagedClusterAzureMonitorProfileKubeStateMetricsResponse {
            /**
             * Comma-separated list of Kubernetes annotation keys that will be used in the resource's labels metric (Example: 'namespaces=[kubernetes.io/team,...],pods=[kubernetes.io/team],...'). By default the metric contains only resource name and namespace labels.
             */
            metricAnnotationsAllowList?: string;
            /**
             * Comma-separated list of additional Kubernetes label keys that will be used in the resource's labels metric (Example: 'namespaces=[k8s-label-1,k8s-label-n,...],pods=[app],...'). By default the metric contains only resource name and namespace labels.
             */
            metricLabelsAllowlist?: string;
        }

        /**
         * Metrics profile for the Azure Monitor managed service for Prometheus addon. Collect out-of-the-box Kubernetes infrastructure metrics to send to an Azure Monitor Workspace and configure additional scraping for custom targets. See aka.ms/AzureManagedPrometheus for an overview.
         */
        export interface ManagedClusterAzureMonitorProfileMetricsResponse {
            /**
             * Whether to enable or disable the Azure Managed Prometheus addon for Prometheus monitoring. See aka.ms/AzureManagedPrometheus-aks-enable for details on enabling and disabling.
             */
            enabled: boolean;
            /**
             * Kube State Metrics profile for the Azure Managed Prometheus addon. These optional settings are for the kube-state-metrics pod that is deployed with the addon. See aka.ms/AzureManagedPrometheus-optional-parameters for details.
             */
            kubeStateMetrics?: v20230601.ManagedClusterAzureMonitorProfileKubeStateMetricsResponse;
        }

        /**
         * Azure Monitor addon profiles for monitoring the managed cluster.
         */
        export interface ManagedClusterAzureMonitorProfileResponse {
            /**
             * Metrics profile for the Azure Monitor managed service for Prometheus addon. Collect out-of-the-box Kubernetes infrastructure metrics to send to an Azure Monitor Workspace and configure additional scraping for custom targets. See aka.ms/AzureManagedPrometheus for an overview.
             */
            metrics?: v20230601.ManagedClusterAzureMonitorProfileMetricsResponse;
        }

        /**
         * Cluster HTTP proxy configuration.
         */
        export interface ManagedClusterHTTPProxyConfigResponse {
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
        }

        /**
         * Identity for the managed cluster.
         */
        export interface ManagedClusterIdentityResponse {
            /**
             * The delegated identity resources assigned to this managed cluster. This can only be set by another Azure Resource Provider, and managed cluster only accept one delegated identity resource. Internal use only.
             */
            delegatedResources?: {[key: string]: v20230601.DelegatedResourceResponse};
            /**
             * The principal id of the system assigned identity which is used by master components.
             */
            principalId: string;
            /**
             * The tenant id of the system assigned identity which is used by master components.
             */
            tenantId: string;
            /**
             * For more information see [use managed identities in AKS](https://docs.microsoft.com/azure/aks/use-managed-identity).
             */
            type?: string;
            /**
             * The keys must be ARM resource IDs in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentities?: {[key: string]: v20230601.ManagedClusterIdentityResponseUserAssignedIdentities};
        }

        export interface ManagedClusterIdentityResponseUserAssignedIdentities {
            /**
             * The client id of user assigned identity.
             */
            clientId: string;
            /**
             * The principal id of user assigned identity.
             */
            principalId: string;
        }

        /**
         * Profile of the managed cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileResponse {
            /**
             * The desired number of allocated SNAT ports per VM. Allowed values are in the range of 0 to 64000 (inclusive). The default value is 0 which results in Azure dynamically allocating ports.
             */
            allocatedOutboundPorts?: number;
            /**
             * The effective outbound IP resources of the cluster load balancer.
             */
            effectiveOutboundIPs?: v20230601.ResourceReferenceResponse[];
            /**
             * Enable multiple standard load balancers per AKS cluster or not.
             */
            enableMultipleStandardLoadBalancers?: boolean;
            /**
             * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 30 minutes.
             */
            idleTimeoutInMinutes?: number;
            /**
             * Desired managed outbound IPs for the cluster load balancer.
             */
            managedOutboundIPs?: v20230601.ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs;
            /**
             * Desired outbound IP Prefix resources for the cluster load balancer.
             */
            outboundIPPrefixes?: v20230601.ManagedClusterLoadBalancerProfileResponseOutboundIPPrefixes;
            /**
             * Desired outbound IP resources for the cluster load balancer.
             */
            outboundIPs?: v20230601.ManagedClusterLoadBalancerProfileResponseOutboundIPs;
        }
        /**
         * managedClusterLoadBalancerProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileResponse
         */
        export function managedClusterLoadBalancerProfileResponseProvideDefaults(val: ManagedClusterLoadBalancerProfileResponse): ManagedClusterLoadBalancerProfileResponse {
            return {
                ...val,
                allocatedOutboundPorts: (val.allocatedOutboundPorts) ?? 0,
                idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 30,
                managedOutboundIPs: (val.managedOutboundIPs ? v20230601.managedClusterLoadBalancerProfileResponseManagedOutboundIPsProvideDefaults(val.managedOutboundIPs) : undefined),
            };
        }

        /**
         * Desired managed outbound IPs for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs {
            /**
             * The desired number of IPv4 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1. 
             */
            count?: number;
            /**
             * The desired number of IPv6 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 0 for single-stack and 1 for dual-stack. 
             */
            countIPv6?: number;
        }
        /**
         * managedClusterLoadBalancerProfileResponseManagedOutboundIPsProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs
         */
        export function managedClusterLoadBalancerProfileResponseManagedOutboundIPsProvideDefaults(val: ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs): ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs {
            return {
                ...val,
                count: (val.count) ?? 1,
                countIPv6: (val.countIPv6) ?? 0,
            };
        }

        /**
         * Desired outbound IP Prefix resources for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileResponseOutboundIPPrefixes {
            /**
             * A list of public IP prefix resources.
             */
            publicIPPrefixes?: v20230601.ResourceReferenceResponse[];
        }

        /**
         * Desired outbound IP resources for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileResponseOutboundIPs {
            /**
             * A list of public IP resources.
             */
            publicIPs?: v20230601.ResourceReferenceResponse[];
        }

        /**
         * Profile of the managed outbound IP resources of the managed cluster.
         */
        export interface ManagedClusterManagedOutboundIPProfileResponse {
            /**
             * The desired number of outbound IPs created/managed by Azure. Allowed values must be in the range of 1 to 16 (inclusive). The default value is 1. 
             */
            count?: number;
        }
        /**
         * managedClusterManagedOutboundIPProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterManagedOutboundIPProfileResponse
         */
        export function managedClusterManagedOutboundIPProfileResponseProvideDefaults(val: ManagedClusterManagedOutboundIPProfileResponse): ManagedClusterManagedOutboundIPProfileResponse {
            return {
                ...val,
                count: (val.count) ?? 1,
            };
        }

        /**
         * Profile of the managed cluster NAT gateway.
         */
        export interface ManagedClusterNATGatewayProfileResponse {
            /**
             * The effective outbound IP resources of the cluster NAT gateway.
             */
            effectiveOutboundIPs?: v20230601.ResourceReferenceResponse[];
            /**
             * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 4 minutes.
             */
            idleTimeoutInMinutes?: number;
            /**
             * Profile of the managed outbound IP resources of the cluster NAT gateway.
             */
            managedOutboundIPProfile?: v20230601.ManagedClusterManagedOutboundIPProfileResponse;
        }
        /**
         * managedClusterNATGatewayProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterNATGatewayProfileResponse
         */
        export function managedClusterNATGatewayProfileResponseProvideDefaults(val: ManagedClusterNATGatewayProfileResponse): ManagedClusterNATGatewayProfileResponse {
            return {
                ...val,
                idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 4,
                managedOutboundIPProfile: (val.managedOutboundIPProfile ? v20230601.managedClusterManagedOutboundIPProfileResponseProvideDefaults(val.managedOutboundIPProfile) : undefined),
            };
        }

        /**
         * The OIDC issuer profile of the Managed Cluster.
         */
        export interface ManagedClusterOIDCIssuerProfileResponse {
            /**
             * Whether the OIDC issuer is enabled.
             */
            enabled?: boolean;
            /**
             * The OIDC issuer url of the Managed Cluster.
             */
            issuerURL: string;
        }

        /**
         * See [disable AAD Pod Identity for a specific Pod/Application](https://azure.github.io/aad-pod-identity/docs/configure/application_exception/) for more details.
         */
        export interface ManagedClusterPodIdentityExceptionResponse {
            /**
             * The name of the pod identity exception.
             */
            name: string;
            /**
             * The namespace of the pod identity exception.
             */
            namespace: string;
            /**
             * The pod labels to match.
             */
            podLabels: {[key: string]: string};
        }

        /**
         * See [use AAD pod identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity) for more details on pod identity integration.
         */
        export interface ManagedClusterPodIdentityProfileResponse {
            /**
             * Running in Kubenet is disabled by default due to the security related nature of AAD Pod Identity and the risks of IP spoofing. See [using Kubenet network plugin with AAD Pod Identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity#using-kubenet-network-plugin-with-azure-active-directory-pod-managed-identities) for more information.
             */
            allowNetworkPluginKubenet?: boolean;
            /**
             * Whether the pod identity addon is enabled.
             */
            enabled?: boolean;
            /**
             * The pod identities to use in the cluster.
             */
            userAssignedIdentities?: v20230601.ManagedClusterPodIdentityResponse[];
            /**
             * The pod identity exceptions to allow.
             */
            userAssignedIdentityExceptions?: v20230601.ManagedClusterPodIdentityExceptionResponse[];
        }

        /**
         * An error response from the pod identity provisioning.
         */
        export interface ManagedClusterPodIdentityProvisioningErrorBodyResponse {
            /**
             * An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
             */
            code?: string;
            /**
             * A list of additional details about the error.
             */
            details?: v20230601.ManagedClusterPodIdentityProvisioningErrorBodyResponse[];
            /**
             * A message describing the error, intended to be suitable for display in a user interface.
             */
            message?: string;
            /**
             * The target of the particular error. For example, the name of the property in error.
             */
            target?: string;
        }

        /**
         * An error response from the pod identity provisioning.
         */
        export interface ManagedClusterPodIdentityProvisioningErrorResponse {
            /**
             * Details about the error.
             */
            error?: v20230601.ManagedClusterPodIdentityProvisioningErrorBodyResponse;
        }

        /**
         * Details about the pod identity assigned to the Managed Cluster.
         */
        export interface ManagedClusterPodIdentityResponse {
            /**
             * The binding selector to use for the AzureIdentityBinding resource.
             */
            bindingSelector?: string;
            /**
             * The user assigned identity details.
             */
            identity: v20230601.UserAssignedIdentityResponse;
            /**
             * The name of the pod identity.
             */
            name: string;
            /**
             * The namespace of the pod identity.
             */
            namespace: string;
            provisioningInfo: v20230601.ManagedClusterPodIdentityResponseProvisioningInfo;
            /**
             * The current provisioning state of the pod identity.
             */
            provisioningState: string;
        }

        export interface ManagedClusterPodIdentityResponseProvisioningInfo {
            /**
             * Pod identity assignment error (if any).
             */
            error?: v20230601.ManagedClusterPodIdentityProvisioningErrorResponse;
        }

        /**
         * Parameters to be applied to the cluster-autoscaler when enabled
         */
        export interface ManagedClusterPropertiesResponseAutoScalerProfile {
            /**
             * Valid values are 'true' and 'false'
             */
            balanceSimilarNodeGroups?: string;
            /**
             * If not specified, the default is 'random'. See [expanders](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#what-are-expanders) for more information.
             */
            expander?: string;
            /**
             * The default is 10.
             */
            maxEmptyBulkDelete?: string;
            /**
             * The default is 600.
             */
            maxGracefulTerminationSec?: string;
            /**
             * The default is '15m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            maxNodeProvisionTime?: string;
            /**
             * The default is 45. The maximum is 100 and the minimum is 0.
             */
            maxTotalUnreadyPercentage?: string;
            /**
             * For scenarios like burst/batch scale where you don't want CA to act before the kubernetes scheduler could schedule all the pods, you can tell CA to ignore unscheduled pods before they're a certain age. The default is '0s'. Values must be an integer followed by a unit ('s' for seconds, 'm' for minutes, 'h' for hours, etc).
             */
            newPodScaleUpDelay?: string;
            /**
             * This must be an integer. The default is 3.
             */
            okTotalUnreadyCount?: string;
            /**
             * The default is '10m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownDelayAfterAdd?: string;
            /**
             * The default is the scan-interval. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownDelayAfterDelete?: string;
            /**
             * The default is '3m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownDelayAfterFailure?: string;
            /**
             * The default is '10m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownUnneededTime?: string;
            /**
             * The default is '20m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownUnreadyTime?: string;
            /**
             * The default is '0.5'.
             */
            scaleDownUtilizationThreshold?: string;
            /**
             * The default is '10'. Values must be an integer number of seconds.
             */
            scanInterval?: string;
            /**
             * The default is true.
             */
            skipNodesWithLocalStorage?: string;
            /**
             * The default is true.
             */
            skipNodesWithSystemPods?: string;
        }

        /**
         * The SKU of a Managed Cluster.
         */
        export interface ManagedClusterSKUResponse {
            /**
             * The name of a managed cluster SKU.
             */
            name?: string;
            /**
             * If not specified, the default is 'Free'. See [AKS Pricing Tier](https://learn.microsoft.com/azure/aks/free-standard-pricing-tiers) for more details.
             */
            tier?: string;
        }

        /**
         * Microsoft Defender settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileDefenderResponse {
            /**
             * Resource ID of the Log Analytics workspace to be associated with Microsoft Defender. When Microsoft Defender is enabled, this field is required and must be a valid workspace resource ID. When Microsoft Defender is disabled, leave the field empty.
             */
            logAnalyticsWorkspaceResourceId?: string;
            /**
             * Microsoft Defender threat detection for Cloud settings for the security profile.
             */
            securityMonitoring?: v20230601.ManagedClusterSecurityProfileDefenderSecurityMonitoringResponse;
        }

        /**
         * Microsoft Defender settings for the security profile threat detection.
         */
        export interface ManagedClusterSecurityProfileDefenderSecurityMonitoringResponse {
            /**
             * Whether to enable Defender threat detection
             */
            enabled?: boolean;
        }

        /**
         * Image Cleaner removes unused images from nodes, freeing up disk space and helping to reduce attack surface area. Here are settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileImageCleanerResponse {
            /**
             * Whether to enable Image Cleaner on AKS cluster.
             */
            enabled?: boolean;
            /**
             * Image Cleaner scanning interval in hours.
             */
            intervalHours?: number;
        }

        /**
         * Security profile for the container service cluster.
         */
        export interface ManagedClusterSecurityProfileResponse {
            /**
             * Azure Key Vault [key management service](https://kubernetes.io/docs/tasks/administer-cluster/kms-provider/) settings for the security profile.
             */
            azureKeyVaultKms?: v20230601.AzureKeyVaultKmsResponse;
            /**
             * Microsoft Defender settings for the security profile.
             */
            defender?: v20230601.ManagedClusterSecurityProfileDefenderResponse;
            /**
             * Image Cleaner settings for the security profile.
             */
            imageCleaner?: v20230601.ManagedClusterSecurityProfileImageCleanerResponse;
            /**
             * Workload identity settings for the security profile. Workload identity enables Kubernetes applications to access Azure cloud resources securely with Azure AD. See https://aka.ms/aks/wi for more details.
             */
            workloadIdentity?: v20230601.ManagedClusterSecurityProfileWorkloadIdentityResponse;
        }
        /**
         * managedClusterSecurityProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterSecurityProfileResponse
         */
        export function managedClusterSecurityProfileResponseProvideDefaults(val: ManagedClusterSecurityProfileResponse): ManagedClusterSecurityProfileResponse {
            return {
                ...val,
                azureKeyVaultKms: (val.azureKeyVaultKms ? v20230601.azureKeyVaultKmsResponseProvideDefaults(val.azureKeyVaultKms) : undefined),
            };
        }

        /**
         * Workload identity settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileWorkloadIdentityResponse {
            /**
             * Whether to enable workload identity.
             */
            enabled?: boolean;
        }

        /**
         * Information about a service principal identity for the cluster to use for manipulating Azure APIs.
         */
        export interface ManagedClusterServicePrincipalProfileResponse {
            /**
             * The ID for the service principal.
             */
            clientId: string;
            /**
             * The secret password associated with the service principal in plain text.
             */
            secret?: string;
        }

        /**
         * AzureBlob CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileBlobCSIDriverResponse {
            /**
             * Whether to enable AzureBlob CSI Driver. The default value is false.
             */
            enabled?: boolean;
        }

        /**
         * AzureDisk CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileDiskCSIDriverResponse {
            /**
             * Whether to enable AzureDisk CSI Driver. The default value is true.
             */
            enabled?: boolean;
        }

        /**
         * AzureFile CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileFileCSIDriverResponse {
            /**
             * Whether to enable AzureFile CSI Driver. The default value is true.
             */
            enabled?: boolean;
        }

        /**
         * Storage profile for the container service cluster.
         */
        export interface ManagedClusterStorageProfileResponse {
            /**
             * AzureBlob CSI Driver settings for the storage profile.
             */
            blobCSIDriver?: v20230601.ManagedClusterStorageProfileBlobCSIDriverResponse;
            /**
             * AzureDisk CSI Driver settings for the storage profile.
             */
            diskCSIDriver?: v20230601.ManagedClusterStorageProfileDiskCSIDriverResponse;
            /**
             * AzureFile CSI Driver settings for the storage profile.
             */
            fileCSIDriver?: v20230601.ManagedClusterStorageProfileFileCSIDriverResponse;
            /**
             * Snapshot Controller settings for the storage profile.
             */
            snapshotController?: v20230601.ManagedClusterStorageProfileSnapshotControllerResponse;
        }

        /**
         * Snapshot Controller settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileSnapshotControllerResponse {
            /**
             * Whether to enable Snapshot Controller. The default value is true.
             */
            enabled?: boolean;
        }

        /**
         * Profile for Windows VMs in the managed cluster.
         */
        export interface ManagedClusterWindowsProfileResponse {
            /**
             * Specifies the password of the administrator account. <br><br> **Minimum-length:** 8 characters <br><br> **Max-length:** 123 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!"
             */
            adminPassword?: string;
            /**
             * Specifies the name of the administrator account. <br><br> **Restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length:** 1 character <br><br> **Max-length:** 20 characters
             */
            adminUsername: string;
            /**
             * For more details on CSI proxy, see the [CSI proxy GitHub repo](https://github.com/kubernetes-csi/csi-proxy).
             */
            enableCSIProxy?: boolean;
            /**
             * The Windows gMSA Profile in the Managed Cluster.
             */
            gmsaProfile?: v20230601.WindowsGmsaProfileResponse;
            /**
             * The license type to use for Windows VMs. See [Azure Hybrid User Benefits](https://azure.microsoft.com/pricing/hybrid-benefit/faq/) for more details.
             */
            licenseType?: string;
        }

        /**
         * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
         */
        export interface ManagedClusterWorkloadAutoScalerProfileKedaResponse {
            /**
             * Whether to enable KEDA.
             */
            enabled: boolean;
        }

        /**
         * Workload Auto-scaler profile for the managed cluster.
         */
        export interface ManagedClusterWorkloadAutoScalerProfileResponse {
            /**
             * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
             */
            keda?: v20230601.ManagedClusterWorkloadAutoScalerProfileKedaResponse;
            /**
             * VPA (Vertical Pod Autoscaler) settings for the workload auto-scaler profile.
             */
            verticalPodAutoscaler?: v20230601.ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse;
        }
        /**
         * managedClusterWorkloadAutoScalerProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterWorkloadAutoScalerProfileResponse
         */
        export function managedClusterWorkloadAutoScalerProfileResponseProvideDefaults(val: ManagedClusterWorkloadAutoScalerProfileResponse): ManagedClusterWorkloadAutoScalerProfileResponse {
            return {
                ...val,
                verticalPodAutoscaler: (val.verticalPodAutoscaler ? v20230601.managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponseProvideDefaults(val.verticalPodAutoscaler) : undefined),
            };
        }

        /**
         * VPA (Vertical Pod Autoscaler) settings for the workload auto-scaler profile.
         */
        export interface ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse {
            /**
             * Whether to enable VPA. Default value is false.
             */
            enabled: boolean;
        }
        /**
         * managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponseProvideDefaults sets the appropriate defaults for ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse
         */
        export function managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponseProvideDefaults(val: ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse): ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse {
            return {
                ...val,
                enabled: (val.enabled) ?? false,
            };
        }

        /**
         * Describes the Power State of the cluster
         */
        export interface PowerStateResponse {
            /**
             * Tells whether the cluster is Running or Stopped
             */
            code?: string;
        }

        /**
         * Private endpoint which a connection belongs to.
         */
        export interface PrivateEndpointResponse {
            /**
             * The resource ID of the private endpoint
             */
            id?: string;
        }

        /**
         * A private link resource
         */
        export interface PrivateLinkResourceResponse {
            /**
             * The group ID of the resource.
             */
            groupId?: string;
            /**
             * The ID of the private link resource.
             */
            id?: string;
            /**
             * The name of the private link resource.
             */
            name?: string;
            /**
             * The private link service ID of the resource, this field is exposed only to NRP internally.
             */
            privateLinkServiceID: string;
            /**
             * The RequiredMembers of the resource
             */
            requiredMembers?: string[];
            /**
             * The resource type.
             */
            type?: string;
        }

        /**
         * The state of a private link service connection.
         */
        export interface PrivateLinkServiceConnectionStateResponse {
            /**
             * The private link service connection description.
             */
            description?: string;
            /**
             * The private link service connection status.
             */
            status?: string;
        }

        /**
         * For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'.
         */
        export interface RelativeMonthlyScheduleResponse {
            /**
             * Specifies on which day of the week the maintenance occurs.
             */
            dayOfWeek: string;
            /**
             * Specifies the number of months between each set of occurrences.
             */
            intervalMonths: number;
            /**
             * Specifies on which week of the month the dayOfWeek applies.
             */
            weekIndex: string;
        }

        /**
         * A reference to an Azure resource.
         */
        export interface ResourceReferenceResponse {
            /**
             * The fully qualified Azure resource id.
             */
            id?: string;
        }

        /**
         * One and only one of the schedule types should be specified. Choose either 'daily', 'weekly', 'absoluteMonthly' or 'relativeMonthly' for your maintenance schedule.
         */
        export interface ScheduleResponse {
            /**
             * For schedules like: 'recur every month on the 15th' or 'recur every 3 months on the 20th'.
             */
            absoluteMonthly?: v20230601.AbsoluteMonthlyScheduleResponse;
            /**
             * For schedules like: 'recur every day' or 'recur every 3 days'.
             */
            daily?: v20230601.DailyScheduleResponse;
            /**
             * For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'.
             */
            relativeMonthly?: v20230601.RelativeMonthlyScheduleResponse;
            /**
             * For schedules like: 'recur every Monday' or 'recur every 3 weeks on Wednesday'.
             */
            weekly?: v20230601.WeeklyScheduleResponse;
        }

        /**
         * Sysctl settings for Linux agent nodes.
         */
        export interface SysctlConfigResponse {
            /**
             * Sysctl setting fs.aio-max-nr.
             */
            fsAioMaxNr?: number;
            /**
             * Sysctl setting fs.file-max.
             */
            fsFileMax?: number;
            /**
             * Sysctl setting fs.inotify.max_user_watches.
             */
            fsInotifyMaxUserWatches?: number;
            /**
             * Sysctl setting fs.nr_open.
             */
            fsNrOpen?: number;
            /**
             * Sysctl setting kernel.threads-max.
             */
            kernelThreadsMax?: number;
            /**
             * Sysctl setting net.core.netdev_max_backlog.
             */
            netCoreNetdevMaxBacklog?: number;
            /**
             * Sysctl setting net.core.optmem_max.
             */
            netCoreOptmemMax?: number;
            /**
             * Sysctl setting net.core.rmem_default.
             */
            netCoreRmemDefault?: number;
            /**
             * Sysctl setting net.core.rmem_max.
             */
            netCoreRmemMax?: number;
            /**
             * Sysctl setting net.core.somaxconn.
             */
            netCoreSomaxconn?: number;
            /**
             * Sysctl setting net.core.wmem_default.
             */
            netCoreWmemDefault?: number;
            /**
             * Sysctl setting net.core.wmem_max.
             */
            netCoreWmemMax?: number;
            /**
             * Sysctl setting net.ipv4.ip_local_port_range.
             */
            netIpv4IpLocalPortRange?: string;
            /**
             * Sysctl setting net.ipv4.neigh.default.gc_thresh1.
             */
            netIpv4NeighDefaultGcThresh1?: number;
            /**
             * Sysctl setting net.ipv4.neigh.default.gc_thresh2.
             */
            netIpv4NeighDefaultGcThresh2?: number;
            /**
             * Sysctl setting net.ipv4.neigh.default.gc_thresh3.
             */
            netIpv4NeighDefaultGcThresh3?: number;
            /**
             * Sysctl setting net.ipv4.tcp_fin_timeout.
             */
            netIpv4TcpFinTimeout?: number;
            /**
             * Sysctl setting net.ipv4.tcp_keepalive_probes.
             */
            netIpv4TcpKeepaliveProbes?: number;
            /**
             * Sysctl setting net.ipv4.tcp_keepalive_time.
             */
            netIpv4TcpKeepaliveTime?: number;
            /**
             * Sysctl setting net.ipv4.tcp_max_syn_backlog.
             */
            netIpv4TcpMaxSynBacklog?: number;
            /**
             * Sysctl setting net.ipv4.tcp_max_tw_buckets.
             */
            netIpv4TcpMaxTwBuckets?: number;
            /**
             * Sysctl setting net.ipv4.tcp_tw_reuse.
             */
            netIpv4TcpTwReuse?: boolean;
            /**
             * Sysctl setting net.ipv4.tcp_keepalive_intvl.
             */
            netIpv4TcpkeepaliveIntvl?: number;
            /**
             * Sysctl setting net.netfilter.nf_conntrack_buckets.
             */
            netNetfilterNfConntrackBuckets?: number;
            /**
             * Sysctl setting net.netfilter.nf_conntrack_max.
             */
            netNetfilterNfConntrackMax?: number;
            /**
             * Sysctl setting vm.max_map_count.
             */
            vmMaxMapCount?: number;
            /**
             * Sysctl setting vm.swappiness.
             */
            vmSwappiness?: number;
            /**
             * Sysctl setting vm.vfs_cache_pressure.
             */
            vmVfsCachePressure?: number;
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
         * Time in a week.
         */
        export interface TimeInWeekResponse {
            /**
             * The day of the week.
             */
            day?: string;
            /**
             * Each integer hour represents a time range beginning at 0m after the hour ending at the next hour (non-inclusive). 0 corresponds to 00:00 UTC, 23 corresponds to 23:00 UTC. Specifying [0, 1] means the 00:00 - 02:00 UTC time range.
             */
            hourSlots?: number[];
        }

        /**
         * For example, between 2021-05-25T13:00:00Z and 2021-05-25T14:00:00Z.
         */
        export interface TimeSpanResponse {
            /**
             * The end of a time span
             */
            end?: string;
            /**
             * The start of a time span
             */
            start?: string;
        }

        /**
         * Details about a user assigned identity.
         */
        export interface UserAssignedIdentityResponse {
            /**
             * The client ID of the user assigned identity.
             */
            clientId?: string;
            /**
             * The object ID of the user assigned identity.
             */
            objectId?: string;
            /**
             * The resource ID of the user assigned identity.
             */
            resourceId?: string;
        }

        /**
         * For schedules like: 'recur every Monday' or 'recur every 3 weeks on Wednesday'.
         */
        export interface WeeklyScheduleResponse {
            /**
             * Specifies on which day of the week the maintenance occurs.
             */
            dayOfWeek: string;
            /**
             * Specifies the number of weeks between each set of occurrences.
             */
            intervalWeeks: number;
        }

        /**
         * Windows gMSA Profile in the managed cluster.
         */
        export interface WindowsGmsaProfileResponse {
            /**
             * Specifies the DNS server for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
             */
            dnsServer?: string;
            /**
             * Specifies whether to enable Windows gMSA in the managed cluster.
             */
            enabled?: boolean;
            /**
             * Specifies the root domain name for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
             */
            rootDomainName?: string;
        }

    }

    export namespace v20230602preview {
        /**
         * For schedules like: 'recur every month on the 15th' or 'recur every 3 months on the 20th'.
         */
        export interface AbsoluteMonthlyScheduleResponse {
            /**
             * The date of the month.
             */
            dayOfMonth: number;
            /**
             * Specifies the number of months between each set of occurrences.
             */
            intervalMonths: number;
        }

        /**
         * Network settings of an agent pool.
         */
        export interface AgentPoolNetworkProfileResponse {
            /**
             * The port ranges that are allowed to access. The specified ranges are allowed to overlap.
             */
            allowedHostPorts?: v20230602preview.PortRangeResponse[];
            /**
             * The IDs of the application security groups which agent pool will associate when created.
             */
            applicationSecurityGroups?: string[];
            /**
             * IPTags of instance-level public IPs.
             */
            nodePublicIPTags?: v20230602preview.IPTagResponse[];
        }

        /**
         * The security settings of an agent pool.
         */
        export interface AgentPoolSecurityProfileResponse {
            /**
             * SSH access method of an agent pool.
             */
            sshAccess?: string;
        }

        /**
         * Settings for upgrading an agentpool
         */
        export interface AgentPoolUpgradeSettingsResponse {
            /**
             * The amount of time (in minutes) to wait on eviction of pods and graceful termination per node. This eviction wait time honors waiting on pod disruption budgets. If this time is exceeded, the upgrade fails. If not specified, the default is 30 minutes.
             */
            drainTimeoutInMinutes?: number;
            /**
             * This can either be set to an integer (e.g. '5') or a percentage (e.g. '50%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified, the default is 1. For more information, including best practices, see: https://docs.microsoft.com/azure/aks/upgrade-cluster#customize-node-surge-upgrade
             */
            maxSurge?: string;
        }

        /**
         * The Windows agent pool's specific profile.
         */
        export interface AgentPoolWindowsProfileResponse {
            /**
             * The default value is false. Outbound NAT can only be disabled if the cluster outboundType is NAT Gateway and the Windows agent pool does not have node public IP enabled.
             */
            disableOutboundNat?: boolean;
        }

        /**
         * Azure Key Vault key management service settings for the security profile.
         */
        export interface AzureKeyVaultKmsResponse {
            /**
             * Whether to enable Azure Key Vault key management service. The default is false.
             */
            enabled?: boolean;
            /**
             * Identifier of Azure Key Vault key. See [key identifier format](https://docs.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates#vault-name-and-object-name) for more details. When Azure Key Vault key management service is enabled, this field is required and must be a valid key identifier. When Azure Key Vault key management service is disabled, leave the field empty.
             */
            keyId?: string;
            /**
             * Network access of key vault. The possible values are `Public` and `Private`. `Public` means the key vault allows public access from all networks. `Private` means the key vault disables public access and enables private link. The default value is `Public`.
             */
            keyVaultNetworkAccess?: string;
            /**
             * Resource ID of key vault. When keyVaultNetworkAccess is `Private`, this field is required and must be a valid resource ID. When keyVaultNetworkAccess is `Public`, leave the field empty.
             */
            keyVaultResourceId?: string;
        }
        /**
         * azureKeyVaultKmsResponseProvideDefaults sets the appropriate defaults for AzureKeyVaultKmsResponse
         */
        export function azureKeyVaultKmsResponseProvideDefaults(val: AzureKeyVaultKmsResponse): AzureKeyVaultKmsResponse {
            return {
                ...val,
                keyVaultNetworkAccess: (val.keyVaultNetworkAccess) ?? "Public",
            };
        }

        /**
         * Settings for upgrading a cluster.
         */
        export interface ClusterUpgradeSettingsResponse {
            /**
             * Settings for overrides.
             */
            overrideSettings?: v20230602preview.UpgradeOverrideSettingsResponse;
        }

        /**
         * Profile for Linux VMs in the container service cluster.
         */
        export interface ContainerServiceLinuxProfileResponse {
            /**
             * The administrator username to use for Linux VMs.
             */
            adminUsername: string;
            /**
             * The SSH configuration for Linux-based VMs running on Azure.
             */
            ssh: v20230602preview.ContainerServiceSshConfigurationResponse;
        }

        /**
         * Profile of network configuration.
         */
        export interface ContainerServiceNetworkProfileResponse {
            /**
             * An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
             */
            dnsServiceIP?: string;
            /**
             * IP families are used to determine single-stack or dual-stack clusters. For single-stack, the expected value is IPv4. For dual-stack, the expected values are IPv4 and IPv6.
             */
            ipFamilies?: string[];
            /**
             * Holds configuration customizations for kube-proxy. Any values not defined will use the kube-proxy defaulting behavior. See https://v<version>.docs.kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/ where <version> is represented by a <major version>-<minor version> string. Kubernetes version 1.23 would be '1-23'.
             */
            kubeProxyConfig?: v20230602preview.ContainerServiceNetworkProfileResponseKubeProxyConfig;
            /**
             * Profile of the cluster load balancer.
             */
            loadBalancerProfile?: v20230602preview.ManagedClusterLoadBalancerProfileResponse;
            /**
             * The default is 'standard'. See [Azure Load Balancer SKUs](https://docs.microsoft.com/azure/load-balancer/skus) for more information about the differences between load balancer SKUs.
             */
            loadBalancerSku?: string;
            /**
             * This addon can be used to configure network monitoring and generate network monitoring data in Prometheus format
             */
            monitoring?: v20230602preview.NetworkMonitoringResponse;
            /**
             * Profile of the cluster NAT gateway.
             */
            natGatewayProfile?: v20230602preview.ManagedClusterNATGatewayProfileResponse;
            /**
             * Network dataplane used in the Kubernetes cluster.
             */
            networkDataplane?: string;
            /**
             * This cannot be specified if networkPlugin is anything other than 'azure'.
             */
            networkMode?: string;
            /**
             * Network plugin used for building the Kubernetes network.
             */
            networkPlugin?: string;
            /**
             * Network plugin mode used for building the Kubernetes network.
             */
            networkPluginMode?: string;
            /**
             * Network policy used for building the Kubernetes network.
             */
            networkPolicy?: string;
            /**
             * This can only be set at cluster creation time and cannot be changed later. For more information see [egress outbound type](https://docs.microsoft.com/azure/aks/egress-outboundtype).
             */
            outboundType?: string;
            /**
             * A CIDR notation IP range from which to assign pod IPs when kubenet is used.
             */
            podCidr?: string;
            /**
             * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
             */
            podCidrs?: string[];
            /**
             * A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
             */
            serviceCidr?: string;
            /**
             * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking. They must not overlap with any Subnet IP ranges.
             */
            serviceCidrs?: string[];
        }
        /**
         * containerServiceNetworkProfileResponseProvideDefaults sets the appropriate defaults for ContainerServiceNetworkProfileResponse
         */
        export function containerServiceNetworkProfileResponseProvideDefaults(val: ContainerServiceNetworkProfileResponse): ContainerServiceNetworkProfileResponse {
            return {
                ...val,
                dnsServiceIP: (val.dnsServiceIP) ?? "10.0.0.10",
                loadBalancerProfile: (val.loadBalancerProfile ? v20230602preview.managedClusterLoadBalancerProfileResponseProvideDefaults(val.loadBalancerProfile) : undefined),
                natGatewayProfile: (val.natGatewayProfile ? v20230602preview.managedClusterNATGatewayProfileResponseProvideDefaults(val.natGatewayProfile) : undefined),
                outboundType: (val.outboundType) ?? "loadBalancer",
                podCidr: (val.podCidr) ?? "10.244.0.0/16",
                serviceCidr: (val.serviceCidr) ?? "10.0.0.0/16",
            };
        }

        /**
         * Holds configuration customizations for IPVS. May only be specified if 'mode' is set to 'IPVS'.
         */
        export interface ContainerServiceNetworkProfileResponseIpvsConfig {
            /**
             * IPVS scheduler, for more information please see http://www.linuxvirtualserver.org/docs/scheduling.html.
             */
            scheduler?: string;
            /**
             * The timeout value used for IPVS TCP sessions after receiving a FIN in seconds. Must be a positive integer value.
             */
            tcpFinTimeoutSeconds?: number;
            /**
             * The timeout value used for idle IPVS TCP sessions in seconds. Must be a positive integer value.
             */
            tcpTimeoutSeconds?: number;
            /**
             * The timeout value used for IPVS UDP packets in seconds. Must be a positive integer value.
             */
            udpTimeoutSeconds?: number;
        }

        /**
         * Holds configuration customizations for kube-proxy. Any values not defined will use the kube-proxy defaulting behavior. See https://v<version>.docs.kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/ where <version> is represented by a <major version>-<minor version> string. Kubernetes version 1.23 would be '1-23'.
         */
        export interface ContainerServiceNetworkProfileResponseKubeProxyConfig {
            /**
             * Whether to enable on kube-proxy on the cluster (if no 'kubeProxyConfig' exists, kube-proxy is enabled in AKS by default without these customizations).
             */
            enabled?: boolean;
            /**
             * Holds configuration customizations for IPVS. May only be specified if 'mode' is set to 'IPVS'.
             */
            ipvsConfig?: v20230602preview.ContainerServiceNetworkProfileResponseIpvsConfig;
            /**
             * Specify which proxy mode to use ('IPTABLES' or 'IPVS')
             */
            mode?: string;
        }

        /**
         * SSH configuration for Linux-based VMs running on Azure.
         */
        export interface ContainerServiceSshConfigurationResponse {
            /**
             * The list of SSH public keys used to authenticate with Linux-based VMs. A maximum of 1 key may be specified.
             */
            publicKeys: v20230602preview.ContainerServiceSshPublicKeyResponse[];
        }

        /**
         * Contains information about SSH certificate public key data.
         */
        export interface ContainerServiceSshPublicKeyResponse {
            /**
             * Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.
             */
            keyData: string;
        }

        /**
         * Data used when creating a target resource from a source resource.
         */
        export interface CreationDataResponse {
            /**
             * This is the ARM ID of the source object to be used to create the target object.
             */
            sourceResourceId?: string;
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
         * For schedules like: 'recur every day' or 'recur every 3 days'.
         */
        export interface DailyScheduleResponse {
            /**
             * Specifies the number of days between each set of occurrences.
             */
            intervalDays: number;
        }

        /**
         * For example, between '2022-12-23' and '2023-01-05'.
         */
        export interface DateSpanResponse {
            /**
             * The end date of the date span.
             */
            end: string;
            /**
             * The start date of the date span.
             */
            start: string;
        }

        /**
         * Delegated resource properties - internal use only.
         */
        export interface DelegatedResourceResponse {
            /**
             * The source resource location - internal use only.
             */
            location?: string;
            /**
             * The delegation id of the referral delegation (optional) - internal use only.
             */
            referralResource?: string;
            /**
             * The ARM resource id of the delegated resource - internal use only.
             */
            resourceId?: string;
            /**
             * The tenant id of the delegated resource - internal use only.
             */
            tenantId?: string;
        }

        /**
         * The complex type of the extended location.
         */
        export interface ExtendedLocationResponse {
            /**
             * The name of the extended location.
             */
            name?: string;
            /**
             * The type of the extended location.
             */
            type?: string;
        }

        /**
         * The Guardrails profile.
         */
        export interface GuardrailsProfileResponse {
            /**
             * List of namespaces excluded from guardrails checks
             */
            excludedNamespaces?: string[];
            /**
             * The guardrails level to be used. By default, Guardrails is enabled for all namespaces except those that AKS excludes via systemExcludedNamespaces
             */
            level: string;
            /**
             * List of namespaces specified by AKS to be excluded from Guardrails
             */
            systemExcludedNamespaces: string[];
            /**
             * The version of constraints to use
             */
            version: string;
        }

        /**
         * Contains the IPTag associated with the object.
         */
        export interface IPTagResponse {
            /**
             * The IP tag type. Example: RoutingPreference.
             */
            ipTagType?: string;
            /**
             * The value of the IP tag associated with the public IP. Example: Internet.
             */
            tag?: string;
        }

        /**
         * Istio Service Mesh Certificate Authority (CA) configuration. For now, we only support plugin certificates as described here https://aka.ms/asm-plugin-ca
         */
        export interface IstioCertificateAuthorityResponse {
            /**
             * Plugin certificates information for Service Mesh.
             */
            plugin?: v20230602preview.IstioPluginCertificateAuthorityResponse;
        }

        /**
         * Istio components configuration.
         */
        export interface IstioComponentsResponse {
            /**
             * Istio egress gateways.
             */
            egressGateways?: v20230602preview.IstioEgressGatewayResponse[];
            /**
             * Istio ingress gateways.
             */
            ingressGateways?: v20230602preview.IstioIngressGatewayResponse[];
        }

        /**
         * Istio egress gateway configuration.
         */
        export interface IstioEgressGatewayResponse {
            /**
             * Whether to enable the egress gateway.
             */
            enabled: boolean;
            /**
             * NodeSelector for scheduling the egress gateway.
             */
            nodeSelector?: {[key: string]: string};
        }

        /**
         * Istio ingress gateway configuration. For now, we support up to one external ingress gateway named `aks-istio-ingressgateway-external` and one internal ingress gateway named `aks-istio-ingressgateway-internal`.
         */
        export interface IstioIngressGatewayResponse {
            /**
             * Whether to enable the ingress gateway.
             */
            enabled: boolean;
            /**
             * Mode of an ingress gateway.
             */
            mode: string;
        }

        /**
         * Plugin certificates information for Service Mesh.
         */
        export interface IstioPluginCertificateAuthorityResponse {
            /**
             * Certificate chain object name in Azure Key Vault.
             */
            certChainObjectName?: string;
            /**
             * Intermediate certificate object name in Azure Key Vault.
             */
            certObjectName?: string;
            /**
             * Intermediate certificate private key object name in Azure Key Vault.
             */
            keyObjectName?: string;
            /**
             * The resource ID of the Key Vault.
             */
            keyVaultId?: string;
            /**
             * Root certificate object name in Azure Key Vault.
             */
            rootCertObjectName?: string;
        }

        /**
         * Istio service mesh configuration.
         */
        export interface IstioServiceMeshResponse {
            /**
             * Istio Service Mesh Certificate Authority (CA) configuration. For now, we only support plugin certificates as described here https://aka.ms/asm-plugin-ca
             */
            certificateAuthority?: v20230602preview.IstioCertificateAuthorityResponse;
            /**
             * Istio components configuration.
             */
            components?: v20230602preview.IstioComponentsResponse;
            /**
             * The list of revisions of the Istio control plane. When an upgrade is not in progress, this holds one value. When canary upgrade is in progress, this can only hold two consecutive values. For more information, see: https://learn.microsoft.com/en-us/azure/aks/istio-upgrade
             */
            revisions?: string[];
        }

        /**
         * See [AKS custom node configuration](https://docs.microsoft.com/azure/aks/custom-node-configuration) for more details.
         */
        export interface KubeletConfigResponse {
            /**
             * Allowed list of unsafe sysctls or unsafe sysctl patterns (ending in `*`).
             */
            allowedUnsafeSysctls?: string[];
            /**
             * The maximum number of container log files that can be present for a container. The number must be ≥ 2.
             */
            containerLogMaxFiles?: number;
            /**
             * The maximum size (e.g. 10Mi) of container log file before it is rotated.
             */
            containerLogMaxSizeMB?: number;
            /**
             * The default is true.
             */
            cpuCfsQuota?: boolean;
            /**
             * The default is '100ms.' Valid values are a sequence of decimal numbers with an optional fraction and a unit suffix. For example: '300ms', '2h45m'. Supported units are 'ns', 'us', 'ms', 's', 'm', and 'h'.
             */
            cpuCfsQuotaPeriod?: string;
            /**
             * The default is 'none'. See [Kubernetes CPU management policies](https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/#cpu-management-policies) for more information. Allowed values are 'none' and 'static'.
             */
            cpuManagerPolicy?: string;
            /**
             * If set to true it will make the Kubelet fail to start if swap is enabled on the node.
             */
            failSwapOn?: boolean;
            /**
             * To disable image garbage collection, set to 100. The default is 85%
             */
            imageGcHighThreshold?: number;
            /**
             * This cannot be set higher than imageGcHighThreshold. The default is 80%
             */
            imageGcLowThreshold?: number;
            /**
             * The maximum number of processes per pod.
             */
            podMaxPids?: number;
            /**
             * For more information see [Kubernetes Topology Manager](https://kubernetes.io/docs/tasks/administer-cluster/topology-manager). The default is 'none'. Allowed values are 'none', 'best-effort', 'restricted', and 'single-numa-node'.
             */
            topologyManagerPolicy?: string;
        }

        /**
         * See [AKS custom node configuration](https://docs.microsoft.com/azure/aks/custom-node-configuration) for more details.
         */
        export interface LinuxOSConfigResponse {
            /**
             * The size in MB of a swap file that will be created on each node.
             */
            swapFileSizeMB?: number;
            /**
             * Sysctl settings for Linux agent nodes.
             */
            sysctls?: v20230602preview.SysctlConfigResponse;
            /**
             * Valid values are 'always', 'defer', 'defer+madvise', 'madvise' and 'never'. The default is 'madvise'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
             */
            transparentHugePageDefrag?: string;
            /**
             * Valid values are 'always', 'madvise', and 'never'. The default is 'always'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
             */
            transparentHugePageEnabled?: string;
        }

        /**
         * Maintenance window used to configure scheduled auto-upgrade for a Managed Cluster.
         */
        export interface MaintenanceWindowResponse {
            /**
             * Length of maintenance window range from 4 to 24 hours.
             */
            durationHours: number;
            /**
             * Date ranges on which upgrade is not allowed. 'utcOffset' applies to this field. For example, with 'utcOffset: +02:00' and 'dateSpan' being '2022-12-23' to '2023-01-03', maintenance will be blocked from '2022-12-22 22:00' to '2023-01-03 22:00' in UTC time.
             */
            notAllowedDates?: v20230602preview.DateSpanResponse[];
            /**
             * Recurrence schedule for the maintenance window.
             */
            schedule: v20230602preview.ScheduleResponse;
            /**
             * The date the maintenance window activates. If the current date is before this date, the maintenance window is inactive and will not be used for upgrades. If not specified, the maintenance window will be active right away.
             */
            startDate?: string;
            /**
             * The start time of the maintenance window. Accepted values are from '00:00' to '23:59'. 'utcOffset' applies to this field. For example: '02:00' with 'utcOffset: +02:00' means UTC time '00:00'.
             */
            startTime: string;
            /**
             * The UTC offset in format +/-HH:mm. For example, '+05:30' for IST and '-07:00' for PST. If not specified, the default is '+00:00'.
             */
            utcOffset?: string;
        }
        /**
         * maintenanceWindowResponseProvideDefaults sets the appropriate defaults for MaintenanceWindowResponse
         */
        export function maintenanceWindowResponseProvideDefaults(val: MaintenanceWindowResponse): MaintenanceWindowResponse {
            return {
                ...val,
                durationHours: (val.durationHours) ?? 24,
            };
        }

        /**
         * For more details see [managed AAD on AKS](https://docs.microsoft.com/azure/aks/managed-aad).
         */
        export interface ManagedClusterAADProfileResponse {
            /**
             * The list of AAD group object IDs that will have admin role of the cluster.
             */
            adminGroupObjectIDs?: string[];
            /**
             * (DEPRECATED) The client AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
             */
            clientAppID?: string;
            /**
             * Whether to enable Azure RBAC for Kubernetes authorization.
             */
            enableAzureRBAC?: boolean;
            /**
             * Whether to enable managed AAD.
             */
            managed?: boolean;
            /**
             * (DEPRECATED) The server AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
             */
            serverAppID?: string;
            /**
             * (DEPRECATED) The server AAD application secret. Learn more at https://aka.ms/aks/aad-legacy.
             */
            serverAppSecret?: string;
            /**
             * The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription.
             */
            tenantID?: string;
        }

        /**
         * Access profile for managed cluster API server.
         */
        export interface ManagedClusterAPIServerAccessProfileResponse {
            /**
             * IP ranges are specified in CIDR format, e.g. 137.117.106.88/29. This feature is not compatible with clusters that use Public IP Per Node, or clusters that are using a Basic Load Balancer. For more information see [API server authorized IP ranges](https://docs.microsoft.com/azure/aks/api-server-authorized-ip-ranges).
             */
            authorizedIPRanges?: string[];
            /**
             * Whether to disable run command for the cluster or not.
             */
            disableRunCommand?: boolean;
            /**
             * For more details, see [Creating a private AKS cluster](https://docs.microsoft.com/azure/aks/private-clusters).
             */
            enablePrivateCluster?: boolean;
            /**
             * Whether to create additional public FQDN for private cluster or not.
             */
            enablePrivateClusterPublicFQDN?: boolean;
            /**
             * Whether to enable apiserver vnet integration for the cluster or not.
             */
            enableVnetIntegration?: boolean;
            /**
             * The default is System. For more details see [configure private DNS zone](https://docs.microsoft.com/azure/aks/private-clusters#configure-private-dns-zone). Allowed values are 'system' and 'none'.
             */
            privateDNSZone?: string;
            /**
             * It is required when: 1. creating a new cluster with BYO Vnet; 2. updating an existing cluster to enable apiserver vnet integration.
             */
            subnetId?: string;
        }

        /**
         * A Kubernetes add-on profile for a managed cluster.
         */
        export interface ManagedClusterAddonProfileResponse {
            /**
             * Key-value pairs for configuring an add-on.
             */
            config?: {[key: string]: string};
            /**
             * Whether the add-on is enabled or not.
             */
            enabled: boolean;
            /**
             * Information of user assigned identity used by this add-on.
             */
            identity: v20230602preview.ManagedClusterAddonProfileResponseIdentity;
        }

        /**
         * Information of user assigned identity used by this add-on.
         */
        export interface ManagedClusterAddonProfileResponseIdentity {
            /**
             * The client ID of the user assigned identity.
             */
            clientId?: string;
            /**
             * The object ID of the user assigned identity.
             */
            objectId?: string;
            /**
             * The resource ID of the user assigned identity.
             */
            resourceId?: string;
        }

        /**
         * Profile for the container service agent pool.
         */
        export interface ManagedClusterAgentPoolProfileResponse {
            /**
             * The list of Availability zones to use for nodes. This can only be specified if the AgentPoolType property is 'VirtualMachineScaleSets'.
             */
            availabilityZones?: string[];
            /**
             * AKS will associate the specified agent pool with the Capacity Reservation Group.
             */
            capacityReservationGroupID?: string;
            /**
             * Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 1000 (inclusive) for user pools and in the range of 1 to 1000 (inclusive) for system pools. The default value is 1.
             */
            count?: number;
            /**
             * CreationData to be used to specify the source Snapshot ID if the node pool will be created/upgraded using a snapshot.
             */
            creationData?: v20230602preview.CreationDataResponse;
            /**
             * If orchestratorVersion was a fully specified version <major.minor.patch>, this field will be exactly equal to it. If orchestratorVersion was <major.minor>, this field will contain the full <major.minor.patch> version being used.
             */
            currentOrchestratorVersion: string;
            /**
             * Whether to enable auto-scaler
             */
            enableAutoScaling?: boolean;
            /**
             * When set to true, AKS adds a label to the node indicating that the feature is enabled and deploys a daemonset along with host services to sync custom certificate authorities from user-provided list of base64 encoded certificates into node trust stores. Defaults to false.
             */
            enableCustomCATrust?: boolean;
            /**
             * This is only supported on certain VM sizes and in certain Azure regions. For more information, see: https://docs.microsoft.com/azure/aks/enable-host-encryption
             */
            enableEncryptionAtHost?: boolean;
            /**
             * See [Add a FIPS-enabled node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#add-a-fips-enabled-node-pool-preview) for more details.
             */
            enableFIPS?: boolean;
            /**
             * Some scenarios may require nodes in a node pool to receive their own dedicated public IP addresses. A common scenario is for gaming workloads, where a console needs to make a direct connection to a cloud virtual machine to minimize hops. For more information see [assigning a public IP per node](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#assign-a-public-ip-per-node-for-your-node-pools). The default is false.
             */
            enableNodePublicIP?: boolean;
            /**
             * Whether to enable UltraSSD
             */
            enableUltraSSD?: boolean;
            /**
             * GPUInstanceProfile to be used to specify GPU MIG instance profile for supported GPU VM SKU.
             */
            gpuInstanceProfile?: string;
            /**
             * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}. For more information see [Azure dedicated hosts](https://docs.microsoft.com/azure/virtual-machines/dedicated-hosts).
             */
            hostGroupID?: string;
            /**
             * The Kubelet configuration on the agent pool nodes.
             */
            kubeletConfig?: v20230602preview.KubeletConfigResponse;
            /**
             * Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage.
             */
            kubeletDiskType?: string;
            /**
             * The OS configuration of Linux agent nodes.
             */
            linuxOSConfig?: v20230602preview.LinuxOSConfigResponse;
            /**
             * The maximum number of nodes for auto-scaling
             */
            maxCount?: number;
            /**
             * The maximum number of pods that can run on a node.
             */
            maxPods?: number;
            /**
             * A base64-encoded string which will be written to /etc/motd after decoding. This allows customization of the message of the day for Linux nodes. It must not be specified for Windows nodes. It must be a static string (i.e., will be printed raw and not be executed as a script).
             */
            messageOfTheDay?: string;
            /**
             * The minimum number of nodes for auto-scaling
             */
            minCount?: number;
            /**
             * A cluster must have at least one 'System' Agent Pool at all times. For additional information on agent pool restrictions and best practices, see: https://docs.microsoft.com/azure/aks/use-system-pools
             */
            mode?: string;
            /**
             * Windows agent pool names must be 6 characters or less.
             */
            name: string;
            /**
             * Network-related settings of an agent pool.
             */
            networkProfile?: v20230602preview.AgentPoolNetworkProfileResponse;
            /**
             * The version of node image
             */
            nodeImageVersion: string;
            /**
             * The node labels to be persisted across all nodes in agent pool.
             */
            nodeLabels?: {[key: string]: string};
            /**
             * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIPPrefixName}
             */
            nodePublicIPPrefixID?: string;
            /**
             * The taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
             */
            nodeTaints?: string[];
            /**
             * Both patch version <major.minor.patch> and <major.minor> are supported. When <major.minor> is specified, the latest supported patch version is chosen automatically. Updating the agent pool with the same <major.minor> once it has been created will not trigger an upgrade, even if a newer patch version is available. As a best practice, you should upgrade all node pools in an AKS cluster to the same Kubernetes version. The node pool version must have the same major version as the control plane. The node pool minor version must be within two minor versions of the control plane version. The node pool version cannot be greater than the control plane version. For more information see [upgrading a node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#upgrade-a-node-pool).
             */
            orchestratorVersion?: string;
            /**
             * OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
             */
            osDiskSizeGB?: number;
            /**
             * The default is 'Ephemeral' if the VM supports it and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation. For more information see [Ephemeral OS](https://docs.microsoft.com/azure/aks/cluster-configuration#ephemeral-os).
             */
            osDiskType?: string;
            /**
             * Specifies the OS SKU used by the agent pool. If not specified, the default is Ubuntu if OSType=Linux or Windows2019 if OSType=Windows. And the default Windows OSSKU will be changed to Windows2022 after Windows2019 is deprecated.
             */
            osSKU?: string;
            /**
             * The operating system type. The default is Linux.
             */
            osType?: string;
            /**
             * If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
             */
            podSubnetID?: string;
            /**
             * When an Agent Pool is first created it is initially Running. The Agent Pool can be stopped by setting this field to Stopped. A stopped Agent Pool stops all of its VMs and does not accrue billing charges. An Agent Pool can only be stopped if it is Running and provisioning state is Succeeded
             */
            powerState?: v20230602preview.PowerStateResponse;
            /**
             * The current deployment or provisioning state.
             */
            provisioningState: string;
            /**
             * The ID for Proximity Placement Group.
             */
            proximityPlacementGroupID?: string;
            /**
             * This also effects the cluster autoscaler behavior. If not specified, it defaults to Delete.
             */
            scaleDownMode?: string;
            /**
             * This cannot be specified unless the scaleSetPriority is 'Spot'. If not specified, the default is 'Delete'.
             */
            scaleSetEvictionPolicy?: string;
            /**
             * The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'.
             */
            scaleSetPriority?: string;
            /**
             * The security settings of an agent pool.
             */
            securityProfile?: v20230602preview.AgentPoolSecurityProfileResponse;
            /**
             * Possible values are any decimal value greater than zero or -1 which indicates the willingness to pay any on-demand price. For more details on spot pricing, see [spot VMs pricing](https://docs.microsoft.com/azure/virtual-machines/spot-vms#pricing)
             */
            spotMaxPrice?: number;
            /**
             * The tags to be persisted on the agent pool virtual machine scale set.
             */
            tags?: {[key: string]: string};
            /**
             * The type of Agent Pool.
             */
            type?: string;
            /**
             * Settings for upgrading the agentpool
             */
            upgradeSettings?: v20230602preview.AgentPoolUpgradeSettingsResponse;
            /**
             * VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. For more details on restricted VM sizes, see: https://docs.microsoft.com/azure/aks/quotas-skus-regions
             */
            vmSize?: string;
            /**
             * If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
             */
            vnetSubnetID?: string;
            /**
             * The Windows agent pool's specific profile.
             */
            windowsProfile?: v20230602preview.AgentPoolWindowsProfileResponse;
            /**
             * Determines the type of workload a node can run.
             */
            workloadRuntime?: string;
        }

        /**
         * Auto upgrade profile for a managed cluster.
         */
        export interface ManagedClusterAutoUpgradeProfileResponse {
            /**
             * The default is Unmanaged, but may change to either NodeImage or SecurityPatch at GA.
             */
            nodeOSUpgradeChannel?: string;
            /**
             * For more information see [setting the AKS cluster auto-upgrade channel](https://docs.microsoft.com/azure/aks/upgrade-cluster#set-auto-upgrade-channel).
             */
            upgradeChannel?: string;
        }

        /**
         * Kube State Metrics for prometheus addon profile for the container service cluster
         */
        export interface ManagedClusterAzureMonitorProfileKubeStateMetricsResponse {
            /**
             * Comma-separated list of additional Kubernetes label keys that will be used in the resource's labels metric.
             */
            metricAnnotationsAllowList?: string;
            /**
             * Comma-separated list of Kubernetes annotations keys that will be used in the resource's labels metric. 
             */
            metricLabelsAllowlist?: string;
        }

        /**
         * Metrics profile for the prometheus service addon
         */
        export interface ManagedClusterAzureMonitorProfileMetricsResponse {
            /**
             * Whether to enable the Prometheus collector
             */
            enabled: boolean;
            /**
             * Kube State Metrics for prometheus addon profile for the container service cluster
             */
            kubeStateMetrics?: v20230602preview.ManagedClusterAzureMonitorProfileKubeStateMetricsResponse;
        }

        /**
         * Prometheus addon profile for the container service cluster
         */
        export interface ManagedClusterAzureMonitorProfileResponse {
            /**
             * Metrics profile for the prometheus service addon
             */
            metrics?: v20230602preview.ManagedClusterAzureMonitorProfileMetricsResponse;
        }

        /**
         * Cluster HTTP proxy configuration.
         */
        export interface ManagedClusterHTTPProxyConfigResponse {
            /**
             * A read-only list of all endpoints for which traffic should not be sent to the proxy. This list is a superset of noProxy and values injected by AKS.
             */
            effectiveNoProxy: string[];
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
        }

        /**
         * Identity for the managed cluster.
         */
        export interface ManagedClusterIdentityResponse {
            /**
             * The delegated identity resources assigned to this managed cluster. This can only be set by another Azure Resource Provider, and managed cluster only accept one delegated identity resource. Internal use only.
             */
            delegatedResources?: {[key: string]: v20230602preview.DelegatedResourceResponse};
            /**
             * The principal id of the system assigned identity which is used by master components.
             */
            principalId: string;
            /**
             * The tenant id of the system assigned identity which is used by master components.
             */
            tenantId: string;
            /**
             * For more information see [use managed identities in AKS](https://docs.microsoft.com/azure/aks/use-managed-identity).
             */
            type?: string;
            /**
             * The keys must be ARM resource IDs in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentities?: {[key: string]: v20230602preview.ManagedClusterIdentityResponseUserAssignedIdentities};
        }

        export interface ManagedClusterIdentityResponseUserAssignedIdentities {
            /**
             * The client id of user assigned identity.
             */
            clientId: string;
            /**
             * The principal id of user assigned identity.
             */
            principalId: string;
        }

        /**
         * Ingress profile for the container service cluster.
         */
        export interface ManagedClusterIngressProfileResponse {
            /**
             * Web App Routing settings for the ingress profile.
             */
            webAppRouting?: v20230602preview.ManagedClusterIngressProfileWebAppRoutingResponse;
        }

        /**
         * Web App Routing settings for the ingress profile.
         */
        export interface ManagedClusterIngressProfileWebAppRoutingResponse {
            /**
             * Resource ID of the DNS Zone to be associated with the web app. Used only when Web App Routing is enabled.
             */
            dnsZoneResourceId?: string;
            /**
             * Whether to enable Web App Routing.
             */
            enabled?: boolean;
            /**
             * Managed identity of the Web Application Routing add-on. This is the identity that should be granted permissions, for example, to manage the associated Azure DNS resource and get certificates from Azure Key Vault. See [this overview of the add-on](https://learn.microsoft.com/en-us/azure/aks/web-app-routing?tabs=with-osm) for more instructions.
             */
            identity: v20230602preview.UserAssignedIdentityResponse;
        }

        /**
         * Profile of the managed cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileResponse {
            /**
             * The desired number of allocated SNAT ports per VM. Allowed values are in the range of 0 to 64000 (inclusive). The default value is 0 which results in Azure dynamically allocating ports.
             */
            allocatedOutboundPorts?: number;
            /**
             * The type of the managed inbound Load Balancer BackendPool.
             */
            backendPoolType?: string;
            /**
             * The effective outbound IP resources of the cluster load balancer.
             */
            effectiveOutboundIPs?: v20230602preview.ResourceReferenceResponse[];
            /**
             * Enable multiple standard load balancers per AKS cluster or not.
             */
            enableMultipleStandardLoadBalancers?: boolean;
            /**
             * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 30 minutes.
             */
            idleTimeoutInMinutes?: number;
            /**
             * Desired managed outbound IPs for the cluster load balancer.
             */
            managedOutboundIPs?: v20230602preview.ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs;
            /**
             * Desired outbound IP Prefix resources for the cluster load balancer.
             */
            outboundIPPrefixes?: v20230602preview.ManagedClusterLoadBalancerProfileResponseOutboundIPPrefixes;
            /**
             * Desired outbound IP resources for the cluster load balancer.
             */
            outboundIPs?: v20230602preview.ManagedClusterLoadBalancerProfileResponseOutboundIPs;
        }
        /**
         * managedClusterLoadBalancerProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileResponse
         */
        export function managedClusterLoadBalancerProfileResponseProvideDefaults(val: ManagedClusterLoadBalancerProfileResponse): ManagedClusterLoadBalancerProfileResponse {
            return {
                ...val,
                allocatedOutboundPorts: (val.allocatedOutboundPorts) ?? 0,
                backendPoolType: (val.backendPoolType) ?? "NodeIPConfiguration",
                idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 30,
                managedOutboundIPs: (val.managedOutboundIPs ? v20230602preview.managedClusterLoadBalancerProfileResponseManagedOutboundIPsProvideDefaults(val.managedOutboundIPs) : undefined),
            };
        }

        /**
         * Desired managed outbound IPs for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs {
            /**
             * The desired number of IPv4 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1. 
             */
            count?: number;
            /**
             * The desired number of IPv6 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 0 for single-stack and 1 for dual-stack. 
             */
            countIPv6?: number;
        }
        /**
         * managedClusterLoadBalancerProfileResponseManagedOutboundIPsProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs
         */
        export function managedClusterLoadBalancerProfileResponseManagedOutboundIPsProvideDefaults(val: ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs): ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs {
            return {
                ...val,
                count: (val.count) ?? 1,
                countIPv6: (val.countIPv6) ?? 0,
            };
        }

        /**
         * Desired outbound IP Prefix resources for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileResponseOutboundIPPrefixes {
            /**
             * A list of public IP prefix resources.
             */
            publicIPPrefixes?: v20230602preview.ResourceReferenceResponse[];
        }

        /**
         * Desired outbound IP resources for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileResponseOutboundIPs {
            /**
             * A list of public IP resources.
             */
            publicIPs?: v20230602preview.ResourceReferenceResponse[];
        }

        /**
         * Profile of the managed outbound IP resources of the managed cluster.
         */
        export interface ManagedClusterManagedOutboundIPProfileResponse {
            /**
             * The desired number of outbound IPs created/managed by Azure. Allowed values must be in the range of 1 to 16 (inclusive). The default value is 1. 
             */
            count?: number;
        }
        /**
         * managedClusterManagedOutboundIPProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterManagedOutboundIPProfileResponse
         */
        export function managedClusterManagedOutboundIPProfileResponseProvideDefaults(val: ManagedClusterManagedOutboundIPProfileResponse): ManagedClusterManagedOutboundIPProfileResponse {
            return {
                ...val,
                count: (val.count) ?? 1,
            };
        }

        /**
         * Profile of the managed cluster NAT gateway.
         */
        export interface ManagedClusterNATGatewayProfileResponse {
            /**
             * The effective outbound IP resources of the cluster NAT gateway.
             */
            effectiveOutboundIPs?: v20230602preview.ResourceReferenceResponse[];
            /**
             * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 4 minutes.
             */
            idleTimeoutInMinutes?: number;
            /**
             * Profile of the managed outbound IP resources of the cluster NAT gateway.
             */
            managedOutboundIPProfile?: v20230602preview.ManagedClusterManagedOutboundIPProfileResponse;
        }
        /**
         * managedClusterNATGatewayProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterNATGatewayProfileResponse
         */
        export function managedClusterNATGatewayProfileResponseProvideDefaults(val: ManagedClusterNATGatewayProfileResponse): ManagedClusterNATGatewayProfileResponse {
            return {
                ...val,
                idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 4,
                managedOutboundIPProfile: (val.managedOutboundIPProfile ? v20230602preview.managedClusterManagedOutboundIPProfileResponseProvideDefaults(val.managedOutboundIPProfile) : undefined),
            };
        }

        /**
         * Node resource group lockdown profile for a managed cluster.
         */
        export interface ManagedClusterNodeResourceGroupProfileResponse {
            /**
             * The restriction level applied to the cluster's node resource group
             */
            restrictionLevel?: string;
        }

        /**
         * The OIDC issuer profile of the Managed Cluster.
         */
        export interface ManagedClusterOIDCIssuerProfileResponse {
            /**
             * Whether the OIDC issuer is enabled.
             */
            enabled?: boolean;
            /**
             * The OIDC issuer url of the Managed Cluster.
             */
            issuerURL: string;
        }

        /**
         * See [disable AAD Pod Identity for a specific Pod/Application](https://azure.github.io/aad-pod-identity/docs/configure/application_exception/) for more details.
         */
        export interface ManagedClusterPodIdentityExceptionResponse {
            /**
             * The name of the pod identity exception.
             */
            name: string;
            /**
             * The namespace of the pod identity exception.
             */
            namespace: string;
            /**
             * The pod labels to match.
             */
            podLabels: {[key: string]: string};
        }

        /**
         * See [use AAD pod identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity) for more details on pod identity integration.
         */
        export interface ManagedClusterPodIdentityProfileResponse {
            /**
             * Running in Kubenet is disabled by default due to the security related nature of AAD Pod Identity and the risks of IP spoofing. See [using Kubenet network plugin with AAD Pod Identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity#using-kubenet-network-plugin-with-azure-active-directory-pod-managed-identities) for more information.
             */
            allowNetworkPluginKubenet?: boolean;
            /**
             * Whether the pod identity addon is enabled.
             */
            enabled?: boolean;
            /**
             * The pod identities to use in the cluster.
             */
            userAssignedIdentities?: v20230602preview.ManagedClusterPodIdentityResponse[];
            /**
             * The pod identity exceptions to allow.
             */
            userAssignedIdentityExceptions?: v20230602preview.ManagedClusterPodIdentityExceptionResponse[];
        }

        /**
         * An error response from the pod identity provisioning.
         */
        export interface ManagedClusterPodIdentityProvisioningErrorBodyResponse {
            /**
             * An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
             */
            code?: string;
            /**
             * A list of additional details about the error.
             */
            details?: v20230602preview.ManagedClusterPodIdentityProvisioningErrorBodyResponse[];
            /**
             * A message describing the error, intended to be suitable for display in a user interface.
             */
            message?: string;
            /**
             * The target of the particular error. For example, the name of the property in error.
             */
            target?: string;
        }

        /**
         * An error response from the pod identity provisioning.
         */
        export interface ManagedClusterPodIdentityProvisioningErrorResponse {
            /**
             * Details about the error.
             */
            error?: v20230602preview.ManagedClusterPodIdentityProvisioningErrorBodyResponse;
        }

        /**
         * Details about the pod identity assigned to the Managed Cluster.
         */
        export interface ManagedClusterPodIdentityResponse {
            /**
             * The binding selector to use for the AzureIdentityBinding resource.
             */
            bindingSelector?: string;
            /**
             * The user assigned identity details.
             */
            identity: v20230602preview.UserAssignedIdentityResponse;
            /**
             * The name of the pod identity.
             */
            name: string;
            /**
             * The namespace of the pod identity.
             */
            namespace: string;
            provisioningInfo: v20230602preview.ManagedClusterPodIdentityResponseProvisioningInfo;
            /**
             * The current provisioning state of the pod identity.
             */
            provisioningState: string;
        }

        export interface ManagedClusterPodIdentityResponseProvisioningInfo {
            /**
             * Pod identity assignment error (if any).
             */
            error?: v20230602preview.ManagedClusterPodIdentityProvisioningErrorResponse;
        }

        /**
         * managed cluster properties for snapshot, these properties are read only.
         */
        export interface ManagedClusterPropertiesForSnapshotResponse {
            /**
             * Whether the cluster has enabled Kubernetes Role-Based Access Control or not.
             */
            enableRbac?: boolean;
            /**
             * The current kubernetes version.
             */
            kubernetesVersion?: string;
            /**
             * The current network profile.
             */
            networkProfile: v20230602preview.NetworkProfileForSnapshotResponse;
            /**
             * The current managed cluster sku.
             */
            sku?: v20230602preview.ManagedClusterSKUResponse;
        }

        /**
         * Parameters to be applied to the cluster-autoscaler when enabled
         */
        export interface ManagedClusterPropertiesResponseAutoScalerProfile {
            /**
             * Valid values are 'true' and 'false'
             */
            balanceSimilarNodeGroups?: string;
            /**
             * If not specified, the default is 'random'. See [expanders](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#what-are-expanders) for more information.
             */
            expander?: string;
            /**
             * The default is 10.
             */
            maxEmptyBulkDelete?: string;
            /**
             * The default is 600.
             */
            maxGracefulTerminationSec?: string;
            /**
             * The default is '15m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            maxNodeProvisionTime?: string;
            /**
             * The default is 45. The maximum is 100 and the minimum is 0.
             */
            maxTotalUnreadyPercentage?: string;
            /**
             * For scenarios like burst/batch scale where you don't want CA to act before the kubernetes scheduler could schedule all the pods, you can tell CA to ignore unscheduled pods before they're a certain age. The default is '0s'. Values must be an integer followed by a unit ('s' for seconds, 'm' for minutes, 'h' for hours, etc).
             */
            newPodScaleUpDelay?: string;
            /**
             * This must be an integer. The default is 3.
             */
            okTotalUnreadyCount?: string;
            /**
             * The default is '10m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownDelayAfterAdd?: string;
            /**
             * The default is the scan-interval. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownDelayAfterDelete?: string;
            /**
             * The default is '3m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownDelayAfterFailure?: string;
            /**
             * The default is '10m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownUnneededTime?: string;
            /**
             * The default is '20m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownUnreadyTime?: string;
            /**
             * The default is '0.5'.
             */
            scaleDownUtilizationThreshold?: string;
            /**
             * The default is '10'. Values must be an integer number of seconds.
             */
            scanInterval?: string;
            /**
             * The default is true.
             */
            skipNodesWithLocalStorage?: string;
            /**
             * The default is true.
             */
            skipNodesWithSystemPods?: string;
        }

        /**
         * The SKU of a Managed Cluster.
         */
        export interface ManagedClusterSKUResponse {
            /**
             * The name of a managed cluster SKU.
             */
            name?: string;
            /**
             * If not specified, the default is 'Free'. See [AKS Pricing Tier](https://learn.microsoft.com/azure/aks/free-standard-pricing-tiers) for more details.
             */
            tier?: string;
        }

        /**
         * Microsoft Defender settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileDefenderResponse {
            /**
             * Resource ID of the Log Analytics workspace to be associated with Microsoft Defender. When Microsoft Defender is enabled, this field is required and must be a valid workspace resource ID. When Microsoft Defender is disabled, leave the field empty.
             */
            logAnalyticsWorkspaceResourceId?: string;
            /**
             * Microsoft Defender threat detection for Cloud settings for the security profile.
             */
            securityMonitoring?: v20230602preview.ManagedClusterSecurityProfileDefenderSecurityMonitoringResponse;
        }

        /**
         * Microsoft Defender settings for the security profile threat detection.
         */
        export interface ManagedClusterSecurityProfileDefenderSecurityMonitoringResponse {
            /**
             * Whether to enable Defender threat detection
             */
            enabled?: boolean;
        }

        /**
         * Image Cleaner removes unused images from nodes, freeing up disk space and helping to reduce attack surface area. Here are settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileImageCleanerResponse {
            /**
             * Whether to enable Image Cleaner on AKS cluster.
             */
            enabled?: boolean;
            /**
             * Image Cleaner scanning interval in hours.
             */
            intervalHours?: number;
        }

        /**
         * Image integrity related settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileImageIntegrityResponse {
            /**
             * Whether to enable image integrity. The default value is false.
             */
            enabled?: boolean;
        }

        /**
         * Node Restriction settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileNodeRestrictionResponse {
            /**
             * Whether to enable Node Restriction
             */
            enabled?: boolean;
        }

        /**
         * Security profile for the container service cluster.
         */
        export interface ManagedClusterSecurityProfileResponse {
            /**
             * Azure Key Vault [key management service](https://kubernetes.io/docs/tasks/administer-cluster/kms-provider/) settings for the security profile.
             */
            azureKeyVaultKms?: v20230602preview.AzureKeyVaultKmsResponse;
            /**
             * A list of up to 10 base64 encoded CAs that will be added to the trust store on nodes with the Custom CA Trust feature enabled. For more information see [Custom CA Trust Certificates](https://learn.microsoft.com/en-us/azure/aks/custom-certificate-authority)
             */
            customCATrustCertificates?: string[];
            /**
             * Microsoft Defender settings for the security profile.
             */
            defender?: v20230602preview.ManagedClusterSecurityProfileDefenderResponse;
            /**
             * Image Cleaner settings for the security profile.
             */
            imageCleaner?: v20230602preview.ManagedClusterSecurityProfileImageCleanerResponse;
            /**
             * Image integrity is a feature that works with Azure Policy to verify image integrity by signature. This will not have any effect unless Azure Policy is applied to enforce image signatures. See https://aka.ms/aks/image-integrity for how to use this feature via policy.
             */
            imageIntegrity?: v20230602preview.ManagedClusterSecurityProfileImageIntegrityResponse;
            /**
             * [Node Restriction](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#noderestriction) settings for the security profile.
             */
            nodeRestriction?: v20230602preview.ManagedClusterSecurityProfileNodeRestrictionResponse;
            /**
             * Workload identity settings for the security profile. Workload identity enables Kubernetes applications to access Azure cloud resources securely with Azure AD. See https://aka.ms/aks/wi for more details.
             */
            workloadIdentity?: v20230602preview.ManagedClusterSecurityProfileWorkloadIdentityResponse;
        }
        /**
         * managedClusterSecurityProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterSecurityProfileResponse
         */
        export function managedClusterSecurityProfileResponseProvideDefaults(val: ManagedClusterSecurityProfileResponse): ManagedClusterSecurityProfileResponse {
            return {
                ...val,
                azureKeyVaultKms: (val.azureKeyVaultKms ? v20230602preview.azureKeyVaultKmsResponseProvideDefaults(val.azureKeyVaultKms) : undefined),
            };
        }

        /**
         * Workload identity settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileWorkloadIdentityResponse {
            /**
             * Whether to enable workload identity.
             */
            enabled?: boolean;
        }

        /**
         * Information about a service principal identity for the cluster to use for manipulating Azure APIs.
         */
        export interface ManagedClusterServicePrincipalProfileResponse {
            /**
             * The ID for the service principal.
             */
            clientId: string;
            /**
             * The secret password associated with the service principal in plain text.
             */
            secret?: string;
        }

        /**
         * AzureBlob CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileBlobCSIDriverResponse {
            /**
             * Whether to enable AzureBlob CSI Driver. The default value is false.
             */
            enabled?: boolean;
        }

        /**
         * AzureDisk CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileDiskCSIDriverResponse {
            /**
             * Whether to enable AzureDisk CSI Driver. The default value is true.
             */
            enabled?: boolean;
            /**
             * The version of AzureDisk CSI Driver. The default value is v1.
             */
            version?: string;
        }

        /**
         * AzureFile CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileFileCSIDriverResponse {
            /**
             * Whether to enable AzureFile CSI Driver. The default value is true.
             */
            enabled?: boolean;
        }

        /**
         * Storage profile for the container service cluster.
         */
        export interface ManagedClusterStorageProfileResponse {
            /**
             * AzureBlob CSI Driver settings for the storage profile.
             */
            blobCSIDriver?: v20230602preview.ManagedClusterStorageProfileBlobCSIDriverResponse;
            /**
             * AzureDisk CSI Driver settings for the storage profile.
             */
            diskCSIDriver?: v20230602preview.ManagedClusterStorageProfileDiskCSIDriverResponse;
            /**
             * AzureFile CSI Driver settings for the storage profile.
             */
            fileCSIDriver?: v20230602preview.ManagedClusterStorageProfileFileCSIDriverResponse;
            /**
             * Snapshot Controller settings for the storage profile.
             */
            snapshotController?: v20230602preview.ManagedClusterStorageProfileSnapshotControllerResponse;
        }

        /**
         * Snapshot Controller settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileSnapshotControllerResponse {
            /**
             * Whether to enable Snapshot Controller. The default value is true.
             */
            enabled?: boolean;
        }

        /**
         * Profile for Windows VMs in the managed cluster.
         */
        export interface ManagedClusterWindowsProfileResponse {
            /**
             * Specifies the password of the administrator account. <br><br> **Minimum-length:** 8 characters <br><br> **Max-length:** 123 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!"
             */
            adminPassword?: string;
            /**
             * Specifies the name of the administrator account. <br><br> **Restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length:** 1 character <br><br> **Max-length:** 20 characters
             */
            adminUsername: string;
            /**
             * For more details on CSI proxy, see the [CSI proxy GitHub repo](https://github.com/kubernetes-csi/csi-proxy).
             */
            enableCSIProxy?: boolean;
            /**
             * The Windows gMSA Profile in the Managed Cluster.
             */
            gmsaProfile?: v20230602preview.WindowsGmsaProfileResponse;
            /**
             * The license type to use for Windows VMs. See [Azure Hybrid User Benefits](https://azure.microsoft.com/pricing/hybrid-benefit/faq/) for more details.
             */
            licenseType?: string;
        }

        /**
         * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
         */
        export interface ManagedClusterWorkloadAutoScalerProfileKedaResponse {
            /**
             * Whether to enable KEDA.
             */
            enabled: boolean;
        }

        /**
         * Workload Auto-scaler profile for the managed cluster.
         */
        export interface ManagedClusterWorkloadAutoScalerProfileResponse {
            /**
             * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
             */
            keda?: v20230602preview.ManagedClusterWorkloadAutoScalerProfileKedaResponse;
            verticalPodAutoscaler?: v20230602preview.ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse;
        }
        /**
         * managedClusterWorkloadAutoScalerProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterWorkloadAutoScalerProfileResponse
         */
        export function managedClusterWorkloadAutoScalerProfileResponseProvideDefaults(val: ManagedClusterWorkloadAutoScalerProfileResponse): ManagedClusterWorkloadAutoScalerProfileResponse {
            return {
                ...val,
                verticalPodAutoscaler: (val.verticalPodAutoscaler ? v20230602preview.managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponseProvideDefaults(val.verticalPodAutoscaler) : undefined),
            };
        }

        export interface ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse {
            /**
             * Controls which resource value autoscaler will change. Default value is RequestsAndLimits.
             */
            controlledValues: string;
            /**
             * Whether to enable VPA. Default value is false.
             */
            enabled: boolean;
            /**
             * Each update mode level is a superset of the lower levels. Off<Initial<Recreate<=Auto. For example: if UpdateMode is Initial, it means VPA sets the recommended resources in the VerticalPodAutoscaler Custom Resource (from UpdateMode Off) and also assigns resources on pod creation (from Initial). The default value is Off.
             */
            updateMode: string;
        }
        /**
         * managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponseProvideDefaults sets the appropriate defaults for ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse
         */
        export function managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponseProvideDefaults(val: ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse): ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse {
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
        export interface NetworkMonitoringResponse {
            /**
             * Enable or disable the network monitoring plugin on the cluster
             */
            enabled?: boolean;
        }

        /**
         * network profile for managed cluster snapshot, these properties are read only.
         */
        export interface NetworkProfileForSnapshotResponse {
            /**
             * loadBalancerSku for managed cluster snapshot.
             */
            loadBalancerSku?: string;
            /**
             * networkMode for managed cluster snapshot.
             */
            networkMode?: string;
            /**
             * networkPlugin for managed cluster snapshot.
             */
            networkPlugin?: string;
            /**
             * NetworkPluginMode for managed cluster snapshot.
             */
            networkPluginMode?: string;
            /**
             * networkPolicy for managed cluster snapshot.
             */
            networkPolicy?: string;
        }

        /**
         * The port range.
         */
        export interface PortRangeResponse {
            /**
             * The maximum port that is included in the range. It should be ranged from 1 to 65535, and be greater than or equal to portStart.
             */
            portEnd?: number;
            /**
             * The minimum port that is included in the range. It should be ranged from 1 to 65535, and be less than or equal to portEnd.
             */
            portStart?: number;
            /**
             * The network protocol of the port.
             */
            protocol?: string;
        }

        /**
         * Describes the Power State of the cluster
         */
        export interface PowerStateResponse {
            /**
             * Tells whether the cluster is Running or Stopped
             */
            code?: string;
        }

        /**
         * Private endpoint which a connection belongs to.
         */
        export interface PrivateEndpointResponse {
            /**
             * The resource ID of the private endpoint
             */
            id?: string;
        }

        /**
         * A private link resource
         */
        export interface PrivateLinkResourceResponse {
            /**
             * The group ID of the resource.
             */
            groupId?: string;
            /**
             * The ID of the private link resource.
             */
            id?: string;
            /**
             * The name of the private link resource.
             */
            name?: string;
            /**
             * The private link service ID of the resource, this field is exposed only to NRP internally.
             */
            privateLinkServiceID: string;
            /**
             * The RequiredMembers of the resource
             */
            requiredMembers?: string[];
            /**
             * The resource type.
             */
            type?: string;
        }

        /**
         * The state of a private link service connection.
         */
        export interface PrivateLinkServiceConnectionStateResponse {
            /**
             * The private link service connection description.
             */
            description?: string;
            /**
             * The private link service connection status.
             */
            status?: string;
        }

        /**
         * For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'.
         */
        export interface RelativeMonthlyScheduleResponse {
            /**
             * Specifies on which day of the week the maintenance occurs.
             */
            dayOfWeek: string;
            /**
             * Specifies the number of months between each set of occurrences.
             */
            intervalMonths: number;
            /**
             * Specifies on which instance of the allowed days specified in daysOfWeek the maintenance occurs.
             */
            weekIndex: string;
        }

        /**
         * A reference to an Azure resource.
         */
        export interface ResourceReferenceResponse {
            /**
             * The fully qualified Azure resource id.
             */
            id?: string;
        }

        /**
         * One and only one of the schedule types should be specified. Choose either 'daily', 'weekly', 'absoluteMonthly' or 'relativeMonthly' for your maintenance schedule.
         */
        export interface ScheduleResponse {
            /**
             * For schedules like: 'recur every month on the 15th' or 'recur every 3 months on the 20th'.
             */
            absoluteMonthly?: v20230602preview.AbsoluteMonthlyScheduleResponse;
            /**
             * For schedules like: 'recur every day' or 'recur every 3 days'.
             */
            daily?: v20230602preview.DailyScheduleResponse;
            /**
             * For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'.
             */
            relativeMonthly?: v20230602preview.RelativeMonthlyScheduleResponse;
            /**
             * For schedules like: 'recur every Monday' or 'recur every 3 weeks on Wednesday'.
             */
            weekly?: v20230602preview.WeeklyScheduleResponse;
        }

        /**
         * Service mesh profile for a managed cluster.
         */
        export interface ServiceMeshProfileResponse {
            /**
             * Istio service mesh configuration.
             */
            istio?: v20230602preview.IstioServiceMeshResponse;
            /**
             * Mode of the service mesh.
             */
            mode: string;
        }

        /**
         * Sysctl settings for Linux agent nodes.
         */
        export interface SysctlConfigResponse {
            /**
             * Sysctl setting fs.aio-max-nr.
             */
            fsAioMaxNr?: number;
            /**
             * Sysctl setting fs.file-max.
             */
            fsFileMax?: number;
            /**
             * Sysctl setting fs.inotify.max_user_watches.
             */
            fsInotifyMaxUserWatches?: number;
            /**
             * Sysctl setting fs.nr_open.
             */
            fsNrOpen?: number;
            /**
             * Sysctl setting kernel.threads-max.
             */
            kernelThreadsMax?: number;
            /**
             * Sysctl setting net.core.netdev_max_backlog.
             */
            netCoreNetdevMaxBacklog?: number;
            /**
             * Sysctl setting net.core.optmem_max.
             */
            netCoreOptmemMax?: number;
            /**
             * Sysctl setting net.core.rmem_default.
             */
            netCoreRmemDefault?: number;
            /**
             * Sysctl setting net.core.rmem_max.
             */
            netCoreRmemMax?: number;
            /**
             * Sysctl setting net.core.somaxconn.
             */
            netCoreSomaxconn?: number;
            /**
             * Sysctl setting net.core.wmem_default.
             */
            netCoreWmemDefault?: number;
            /**
             * Sysctl setting net.core.wmem_max.
             */
            netCoreWmemMax?: number;
            /**
             * Sysctl setting net.ipv4.ip_local_port_range.
             */
            netIpv4IpLocalPortRange?: string;
            /**
             * Sysctl setting net.ipv4.neigh.default.gc_thresh1.
             */
            netIpv4NeighDefaultGcThresh1?: number;
            /**
             * Sysctl setting net.ipv4.neigh.default.gc_thresh2.
             */
            netIpv4NeighDefaultGcThresh2?: number;
            /**
             * Sysctl setting net.ipv4.neigh.default.gc_thresh3.
             */
            netIpv4NeighDefaultGcThresh3?: number;
            /**
             * Sysctl setting net.ipv4.tcp_fin_timeout.
             */
            netIpv4TcpFinTimeout?: number;
            /**
             * Sysctl setting net.ipv4.tcp_keepalive_probes.
             */
            netIpv4TcpKeepaliveProbes?: number;
            /**
             * Sysctl setting net.ipv4.tcp_keepalive_time.
             */
            netIpv4TcpKeepaliveTime?: number;
            /**
             * Sysctl setting net.ipv4.tcp_max_syn_backlog.
             */
            netIpv4TcpMaxSynBacklog?: number;
            /**
             * Sysctl setting net.ipv4.tcp_max_tw_buckets.
             */
            netIpv4TcpMaxTwBuckets?: number;
            /**
             * Sysctl setting net.ipv4.tcp_tw_reuse.
             */
            netIpv4TcpTwReuse?: boolean;
            /**
             * Sysctl setting net.ipv4.tcp_keepalive_intvl.
             */
            netIpv4TcpkeepaliveIntvl?: number;
            /**
             * Sysctl setting net.netfilter.nf_conntrack_buckets.
             */
            netNetfilterNfConntrackBuckets?: number;
            /**
             * Sysctl setting net.netfilter.nf_conntrack_max.
             */
            netNetfilterNfConntrackMax?: number;
            /**
             * Sysctl setting vm.max_map_count.
             */
            vmMaxMapCount?: number;
            /**
             * Sysctl setting vm.swappiness.
             */
            vmSwappiness?: number;
            /**
             * Sysctl setting vm.vfs_cache_pressure.
             */
            vmVfsCachePressure?: number;
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
         * Time in a week.
         */
        export interface TimeInWeekResponse {
            /**
             * The day of the week.
             */
            day?: string;
            /**
             * Each integer hour represents a time range beginning at 0m after the hour ending at the next hour (non-inclusive). 0 corresponds to 00:00 UTC, 23 corresponds to 23:00 UTC. Specifying [0, 1] means the 00:00 - 02:00 UTC time range.
             */
            hourSlots?: number[];
        }

        /**
         * For example, between 2021-05-25T13:00:00Z and 2021-05-25T14:00:00Z.
         */
        export interface TimeSpanResponse {
            /**
             * The end of a time span
             */
            end?: string;
            /**
             * The start of a time span
             */
            start?: string;
        }

        /**
         * Settings for overrides when upgrading a cluster.
         */
        export interface UpgradeOverrideSettingsResponse {
            /**
             * List of upgrade overrides when upgrading a cluster's control plane.
             */
            controlPlaneOverrides?: string[];
            /**
             * Until when the overrides are effective. Note that this only matches the start time of an upgrade, and the effectiveness won't change once an upgrade starts even if the `until` expires as upgrade proceeds. This field is not set by default. It must be set for the overrides to take effect.
             */
            until?: string;
        }

        /**
         * Details about a user assigned identity.
         */
        export interface UserAssignedIdentityResponse {
            /**
             * The client ID of the user assigned identity.
             */
            clientId?: string;
            /**
             * The object ID of the user assigned identity.
             */
            objectId?: string;
            /**
             * The resource ID of the user assigned identity.
             */
            resourceId?: string;
        }

        /**
         * For schedules like: 'recur every Monday' or 'recur every 3 weeks on Wednesday'.
         */
        export interface WeeklyScheduleResponse {
            /**
             * Specifies on which day of the week the maintenance occurs.
             */
            dayOfWeek: string;
            /**
             * Specifies the number of weeks between each set of occurrences.
             */
            intervalWeeks: number;
        }

        /**
         * Windows gMSA Profile in the managed cluster.
         */
        export interface WindowsGmsaProfileResponse {
            /**
             * Specifies the DNS server for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
             */
            dnsServer?: string;
            /**
             * Specifies whether to enable Windows gMSA in the managed cluster.
             */
            enabled?: boolean;
            /**
             * Specifies the root domain name for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
             */
            rootDomainName?: string;
        }

    }

    export namespace v20230615preview {
        /**
         * Access profile for the Fleet hub API server.
         */
        export interface APIServerAccessProfileResponse {
            /**
             * Whether to create the Fleet hub as a private cluster or not.
             */
            enablePrivateCluster?: boolean;
            /**
             * Whether to enable apiserver vnet integration for the Fleet hub or not.
             */
            enableVnetIntegration?: boolean;
            /**
             * The subnet to be used when apiserver vnet integration is enabled. It is required when creating a new Fleet with BYO vnet.
             */
            subnetId?: string;
        }

        /**
         * Agent profile for the Fleet hub.
         */
        export interface AgentProfileResponse {
            /**
             * The ID of the subnet which the Fleet hub node will join on startup. If this is not specified, a vnet and subnet will be generated and used.
             */
            subnetId?: string;
        }

        /**
         * The resource management error additional info.
         */
        export interface ErrorAdditionalInfoResponse {
            /**
             * The additional info.
             */
            info: any;
            /**
             * The additional info type.
             */
            type: string;
        }

        /**
         * The error detail.
         */
        export interface ErrorDetailResponse {
            /**
             * The error additional info.
             */
            additionalInfo: v20230615preview.ErrorAdditionalInfoResponse[];
            /**
             * The error code.
             */
            code: string;
            /**
             * The error details.
             */
            details: v20230615preview.ErrorDetailResponse[];
            /**
             * The error message.
             */
            message: string;
            /**
             * The error target.
             */
            target: string;
        }

        /**
         * One credential result item.
         */
        export interface FleetCredentialResultResponse {
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
         * The FleetHubProfile configures the fleet hub.
         */
        export interface FleetHubProfileResponse {
            /**
             * The agent profile for the Fleet hub.
             */
            agentProfile?: v20230615preview.AgentProfileResponse;
            /**
             * The access profile for the Fleet hub API server.
             */
            apiServerAccessProfile?: v20230615preview.APIServerAccessProfileResponse;
            /**
             * DNS prefix used to create the FQDN for the Fleet hub.
             */
            dnsPrefix?: string;
            /**
             * The FQDN of the Fleet hub.
             */
            fqdn: string;
            /**
             * The Kubernetes version of the Fleet hub.
             */
            kubernetesVersion: string;
        }

        /**
         * The update to be applied to the ManagedClusters.
         */
        export interface ManagedClusterUpdateResponse {
            /**
             * The node image upgrade to be applied to the target nodes in update run.
             */
            nodeImageSelection?: v20230615preview.NodeImageSelectionResponse;
            /**
             * The upgrade to apply to the ManagedClusters.
             */
            upgrade: v20230615preview.ManagedClusterUpgradeSpecResponse;
        }

        /**
         * The upgrade to apply to a ManagedCluster.
         */
        export interface ManagedClusterUpgradeSpecResponse {
            /**
             * The Kubernetes version to upgrade the member clusters to.
             */
            kubernetesVersion?: string;
            /**
             * The upgrade type.
             * Full requires the KubernetesVersion property to be set.
             * NodeImageOnly requires the KubernetesVersion property not to be set.
             */
            type: string;
        }

        /**
         * Managed service identity (system assigned and/or user assigned identities)
         */
        export interface ManagedServiceIdentityResponse {
            /**
             * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
             */
            principalId: string;
            /**
             * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
             */
            tenantId: string;
            /**
             * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
             */
            type: string;
            /**
             * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
             */
            userAssignedIdentities?: {[key: string]: v20230615preview.UserAssignedIdentityResponse};
        }

        /**
         * The status of a member update operation.
         */
        export interface MemberUpdateStatusResponse {
            /**
             * The Azure resource id of the target Kubernetes cluster.
             */
            clusterResourceId: string;
            /**
             * The status message after processing the member update operation.
             */
            message: string;
            /**
             * The name of the FleetMember.
             */
            name: string;
            /**
             * The operation resource id of the latest attempt to perform the operation.
             */
            operationId: string;
            /**
             * The status of the MemberUpdate operation.
             */
            status: v20230615preview.UpdateStatusResponse;
        }

        /**
         * The node image upgrade to be applied to the target nodes in update run.
         */
        export interface NodeImageSelectionResponse {
            /**
             * The node image upgrade type.
             */
            type: string;
        }

        /**
         * The node image upgrade specs for the update run.
         */
        export interface NodeImageSelectionStatusResponse {
            /**
             * The image versions to upgrade the nodes to.
             */
            selectedNodeImageVersions: v20230615preview.NodeImageVersionResponse[];
        }

        /**
         * The node upgrade image version.
         */
        export interface NodeImageVersionResponse {
            /**
             * The image version to upgrade the nodes to (e.g., 'AKSUbuntu-1804gen2containerd-2022.12.13').
             */
            version: string;
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
         * A group to be updated.
         */
        export interface UpdateGroupResponse {
            /**
             * The name of the Fleet member group to update. 
             * It should match the name of an existing FleetMember group.
             * A group can only appear once across all UpdateStages in the UpdateRun.
             */
            name: string;
        }

        /**
         * The status of a UpdateGroup.
         */
        export interface UpdateGroupStatusResponse {
            /**
             * The list of member this UpdateGroup updates.
             */
            members: v20230615preview.MemberUpdateStatusResponse[];
            /**
             * The name of the UpdateGroup.
             */
            name: string;
            /**
             * The status of the UpdateGroup.
             */
            status: v20230615preview.UpdateStatusResponse;
        }

        /**
         * The status of a UpdateRun.
         */
        export interface UpdateRunStatusResponse {
            /**
             * The node image upgrade specs for the update run. It is only set in update run when `NodeImageSelection.type` is `Consistent`.
             */
            nodeImageSelection: v20230615preview.NodeImageSelectionStatusResponse;
            /**
             * The stages composing an update run. Stages are run sequentially withing an UpdateRun.
             */
            stages: v20230615preview.UpdateStageStatusResponse[];
            /**
             * The status of the UpdateRun.
             */
            status: v20230615preview.UpdateStatusResponse;
        }

        /**
         * The UpdateRunStrategy configures the sequence of Stages and Groups in which the clusters will be updated.
         */
        export interface UpdateRunStrategyResponse {
            /**
             * The list of stages that compose this update run.
             */
            stages: v20230615preview.UpdateStageResponse[];
        }

        /**
         * Contains the groups to be updated by an UpdateRun.
         * Update order:
         * - Sequential between stages: Stages run sequentially. The previous stage must complete before the next one starts.
         * - Parallel within a stage: Groups within a stage run in parallel.
         * - Sequential within a group: Clusters within a group are updated sequentially.
         */
        export interface UpdateStageResponse {
            /**
             * The time in seconds to wait at the end of this stage before starting the next one. Defaults to 0 seconds if unspecified.
             */
            afterStageWaitInSeconds?: number;
            /**
             * A list of group names that compose the stage.
             * The groups will be updated in parallel. Each group name can only appear once in the UpdateRun.
             */
            groups?: v20230615preview.UpdateGroupResponse[];
            /**
             * The name of the stage. Must be unique within the UpdateRun.
             */
            name: string;
        }

        /**
         * The status of a UpdateStage.
         */
        export interface UpdateStageStatusResponse {
            /**
             * The status of the wait period configured on the UpdateStage.
             */
            afterStageWaitStatus: v20230615preview.WaitStatusResponse;
            /**
             * The list of groups to be updated as part of this UpdateStage.
             */
            groups: v20230615preview.UpdateGroupStatusResponse[];
            /**
             * The name of the UpdateStage.
             */
            name: string;
            /**
             * The status of the UpdateStage.
             */
            status: v20230615preview.UpdateStatusResponse;
        }

        /**
         * The status for an operation or group of operations.
         */
        export interface UpdateStatusResponse {
            /**
             * The time the operation or group was completed.
             */
            completedTime: string;
            /**
             * The error details when a failure is encountered.
             */
            error: v20230615preview.ErrorDetailResponse;
            /**
             * The time the operation or group was started.
             */
            startTime: string;
            /**
             * The State of the operation or group.
             */
            state: string;
        }

        /**
         * User assigned identity properties
         */
        export interface UserAssignedIdentityResponse {
            /**
             * The client ID of the assigned identity.
             */
            clientId: string;
            /**
             * The principal ID of the assigned identity.
             */
            principalId: string;
        }

        /**
         * The status of the wait duration.
         */
        export interface WaitStatusResponse {
            /**
             * The status of the wait duration.
             */
            status: v20230615preview.UpdateStatusResponse;
            /**
             * The wait duration configured in seconds.
             */
            waitDurationInSeconds: number;
        }

    }

    export namespace v20230701 {
        /**
         * For schedules like: 'recur every month on the 15th' or 'recur every 3 months on the 20th'.
         */
        export interface AbsoluteMonthlyScheduleResponse {
            /**
             * The date of the month.
             */
            dayOfMonth: number;
            /**
             * Specifies the number of months between each set of occurrences.
             */
            intervalMonths: number;
        }

        /**
         * Settings for upgrading an agentpool
         */
        export interface AgentPoolUpgradeSettingsResponse {
            /**
             * The amount of time (in minutes) to wait on eviction of pods and graceful termination per node. This eviction wait time honors waiting on pod disruption budgets. If this time is exceeded, the upgrade fails. If not specified, the default is 30 minutes.
             */
            drainTimeoutInMinutes?: number;
            /**
             * This can either be set to an integer (e.g. '5') or a percentage (e.g. '50%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified, the default is 1. For more information, including best practices, see: https://docs.microsoft.com/azure/aks/upgrade-cluster#customize-node-surge-upgrade
             */
            maxSurge?: string;
        }

        /**
         * Azure Key Vault key management service settings for the security profile.
         */
        export interface AzureKeyVaultKmsResponse {
            /**
             * Whether to enable Azure Key Vault key management service. The default is false.
             */
            enabled?: boolean;
            /**
             * Identifier of Azure Key Vault key. See [key identifier format](https://docs.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates#vault-name-and-object-name) for more details. When Azure Key Vault key management service is enabled, this field is required and must be a valid key identifier. When Azure Key Vault key management service is disabled, leave the field empty.
             */
            keyId?: string;
            /**
             * Network access of key vault. The possible values are `Public` and `Private`. `Public` means the key vault allows public access from all networks. `Private` means the key vault disables public access and enables private link. The default value is `Public`.
             */
            keyVaultNetworkAccess?: string;
            /**
             * Resource ID of key vault. When keyVaultNetworkAccess is `Private`, this field is required and must be a valid resource ID. When keyVaultNetworkAccess is `Public`, leave the field empty.
             */
            keyVaultResourceId?: string;
        }
        /**
         * azureKeyVaultKmsResponseProvideDefaults sets the appropriate defaults for AzureKeyVaultKmsResponse
         */
        export function azureKeyVaultKmsResponseProvideDefaults(val: AzureKeyVaultKmsResponse): AzureKeyVaultKmsResponse {
            return {
                ...val,
                keyVaultNetworkAccess: (val.keyVaultNetworkAccess) ?? "Public",
            };
        }

        /**
         * Settings for upgrading a cluster.
         */
        export interface ClusterUpgradeSettingsResponse {
            /**
             * Settings for overrides.
             */
            overrideSettings?: v20230701.UpgradeOverrideSettingsResponse;
        }

        /**
         * Profile for Linux VMs in the container service cluster.
         */
        export interface ContainerServiceLinuxProfileResponse {
            /**
             * The administrator username to use for Linux VMs.
             */
            adminUsername: string;
            /**
             * The SSH configuration for Linux-based VMs running on Azure.
             */
            ssh: v20230701.ContainerServiceSshConfigurationResponse;
        }

        /**
         * Profile of network configuration.
         */
        export interface ContainerServiceNetworkProfileResponse {
            /**
             * An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
             */
            dnsServiceIP?: string;
            /**
             * IP families are used to determine single-stack or dual-stack clusters. For single-stack, the expected value is IPv4. For dual-stack, the expected values are IPv4 and IPv6.
             */
            ipFamilies?: string[];
            /**
             * Profile of the cluster load balancer.
             */
            loadBalancerProfile?: v20230701.ManagedClusterLoadBalancerProfileResponse;
            /**
             * The default is 'standard'. See [Azure Load Balancer SKUs](https://docs.microsoft.com/azure/load-balancer/skus) for more information about the differences between load balancer SKUs.
             */
            loadBalancerSku?: string;
            /**
             * Profile of the cluster NAT gateway.
             */
            natGatewayProfile?: v20230701.ManagedClusterNATGatewayProfileResponse;
            /**
             * Network dataplane used in the Kubernetes cluster.
             */
            networkDataplane?: string;
            /**
             * This cannot be specified if networkPlugin is anything other than 'azure'.
             */
            networkMode?: string;
            /**
             * Network plugin used for building the Kubernetes network.
             */
            networkPlugin?: string;
            /**
             * The mode the network plugin should use.
             */
            networkPluginMode?: string;
            /**
             * Network policy used for building the Kubernetes network.
             */
            networkPolicy?: string;
            /**
             * This can only be set at cluster creation time and cannot be changed later. For more information see [egress outbound type](https://docs.microsoft.com/azure/aks/egress-outboundtype).
             */
            outboundType?: string;
            /**
             * A CIDR notation IP range from which to assign pod IPs when kubenet is used.
             */
            podCidr?: string;
            /**
             * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
             */
            podCidrs?: string[];
            /**
             * A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
             */
            serviceCidr?: string;
            /**
             * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking. They must not overlap with any Subnet IP ranges.
             */
            serviceCidrs?: string[];
        }
        /**
         * containerServiceNetworkProfileResponseProvideDefaults sets the appropriate defaults for ContainerServiceNetworkProfileResponse
         */
        export function containerServiceNetworkProfileResponseProvideDefaults(val: ContainerServiceNetworkProfileResponse): ContainerServiceNetworkProfileResponse {
            return {
                ...val,
                dnsServiceIP: (val.dnsServiceIP) ?? "10.0.0.10",
                loadBalancerProfile: (val.loadBalancerProfile ? v20230701.managedClusterLoadBalancerProfileResponseProvideDefaults(val.loadBalancerProfile) : undefined),
                natGatewayProfile: (val.natGatewayProfile ? v20230701.managedClusterNATGatewayProfileResponseProvideDefaults(val.natGatewayProfile) : undefined),
                networkPlugin: (val.networkPlugin) ?? "kubenet",
                outboundType: (val.outboundType) ?? "loadBalancer",
                podCidr: (val.podCidr) ?? "10.244.0.0/16",
                serviceCidr: (val.serviceCidr) ?? "10.0.0.0/16",
            };
        }

        /**
         * SSH configuration for Linux-based VMs running on Azure.
         */
        export interface ContainerServiceSshConfigurationResponse {
            /**
             * The list of SSH public keys used to authenticate with Linux-based VMs. A maximum of 1 key may be specified.
             */
            publicKeys: v20230701.ContainerServiceSshPublicKeyResponse[];
        }

        /**
         * Contains information about SSH certificate public key data.
         */
        export interface ContainerServiceSshPublicKeyResponse {
            /**
             * Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.
             */
            keyData: string;
        }

        /**
         * Data used when creating a target resource from a source resource.
         */
        export interface CreationDataResponse {
            /**
             * This is the ARM ID of the source object to be used to create the target object.
             */
            sourceResourceId?: string;
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
         * For schedules like: 'recur every day' or 'recur every 3 days'.
         */
        export interface DailyScheduleResponse {
            /**
             * Specifies the number of days between each set of occurrences.
             */
            intervalDays: number;
        }

        /**
         * For example, between '2022-12-23' and '2023-01-05'.
         */
        export interface DateSpanResponse {
            /**
             * The end date of the date span.
             */
            end: string;
            /**
             * The start date of the date span.
             */
            start: string;
        }

        /**
         * Delegated resource properties - internal use only.
         */
        export interface DelegatedResourceResponse {
            /**
             * The source resource location - internal use only.
             */
            location?: string;
            /**
             * The delegation id of the referral delegation (optional) - internal use only.
             */
            referralResource?: string;
            /**
             * The ARM resource id of the delegated resource - internal use only.
             */
            resourceId?: string;
            /**
             * The tenant id of the delegated resource - internal use only.
             */
            tenantId?: string;
        }

        /**
         * The complex type of the extended location.
         */
        export interface ExtendedLocationResponse {
            /**
             * The name of the extended location.
             */
            name?: string;
            /**
             * The type of the extended location.
             */
            type?: string;
        }

        /**
         * See [AKS custom node configuration](https://docs.microsoft.com/azure/aks/custom-node-configuration) for more details.
         */
        export interface KubeletConfigResponse {
            /**
             * Allowed list of unsafe sysctls or unsafe sysctl patterns (ending in `*`).
             */
            allowedUnsafeSysctls?: string[];
            /**
             * The maximum number of container log files that can be present for a container. The number must be ≥ 2.
             */
            containerLogMaxFiles?: number;
            /**
             * The maximum size (e.g. 10Mi) of container log file before it is rotated.
             */
            containerLogMaxSizeMB?: number;
            /**
             * The default is true.
             */
            cpuCfsQuota?: boolean;
            /**
             * The default is '100ms.' Valid values are a sequence of decimal numbers with an optional fraction and a unit suffix. For example: '300ms', '2h45m'. Supported units are 'ns', 'us', 'ms', 's', 'm', and 'h'.
             */
            cpuCfsQuotaPeriod?: string;
            /**
             * The default is 'none'. See [Kubernetes CPU management policies](https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/#cpu-management-policies) for more information. Allowed values are 'none' and 'static'.
             */
            cpuManagerPolicy?: string;
            /**
             * If set to true it will make the Kubelet fail to start if swap is enabled on the node.
             */
            failSwapOn?: boolean;
            /**
             * To disable image garbage collection, set to 100. The default is 85%
             */
            imageGcHighThreshold?: number;
            /**
             * This cannot be set higher than imageGcHighThreshold. The default is 80%
             */
            imageGcLowThreshold?: number;
            /**
             * The maximum number of processes per pod.
             */
            podMaxPids?: number;
            /**
             * For more information see [Kubernetes Topology Manager](https://kubernetes.io/docs/tasks/administer-cluster/topology-manager). The default is 'none'. Allowed values are 'none', 'best-effort', 'restricted', and 'single-numa-node'.
             */
            topologyManagerPolicy?: string;
        }

        /**
         * See [AKS custom node configuration](https://docs.microsoft.com/azure/aks/custom-node-configuration) for more details.
         */
        export interface LinuxOSConfigResponse {
            /**
             * The size in MB of a swap file that will be created on each node.
             */
            swapFileSizeMB?: number;
            /**
             * Sysctl settings for Linux agent nodes.
             */
            sysctls?: v20230701.SysctlConfigResponse;
            /**
             * Valid values are 'always', 'defer', 'defer+madvise', 'madvise' and 'never'. The default is 'madvise'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
             */
            transparentHugePageDefrag?: string;
            /**
             * Valid values are 'always', 'madvise', and 'never'. The default is 'always'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
             */
            transparentHugePageEnabled?: string;
        }

        /**
         * Maintenance window used to configure scheduled auto-upgrade for a Managed Cluster.
         */
        export interface MaintenanceWindowResponse {
            /**
             * Length of maintenance window range from 4 to 24 hours.
             */
            durationHours: number;
            /**
             * Date ranges on which upgrade is not allowed. 'utcOffset' applies to this field. For example, with 'utcOffset: +02:00' and 'dateSpan' being '2022-12-23' to '2023-01-03', maintenance will be blocked from '2022-12-22 22:00' to '2023-01-03 22:00' in UTC time.
             */
            notAllowedDates?: v20230701.DateSpanResponse[];
            /**
             * Recurrence schedule for the maintenance window.
             */
            schedule: v20230701.ScheduleResponse;
            /**
             * The date the maintenance window activates. If the current date is before this date, the maintenance window is inactive and will not be used for upgrades. If not specified, the maintenance window will be active right away.
             */
            startDate?: string;
            /**
             * The start time of the maintenance window. Accepted values are from '00:00' to '23:59'. 'utcOffset' applies to this field. For example: '02:00' with 'utcOffset: +02:00' means UTC time '00:00'.
             */
            startTime: string;
            /**
             * The UTC offset in format +/-HH:mm. For example, '+05:30' for IST and '-07:00' for PST. If not specified, the default is '+00:00'.
             */
            utcOffset?: string;
        }
        /**
         * maintenanceWindowResponseProvideDefaults sets the appropriate defaults for MaintenanceWindowResponse
         */
        export function maintenanceWindowResponseProvideDefaults(val: MaintenanceWindowResponse): MaintenanceWindowResponse {
            return {
                ...val,
                durationHours: (val.durationHours) ?? 24,
            };
        }

        /**
         * For more details see [managed AAD on AKS](https://docs.microsoft.com/azure/aks/managed-aad).
         */
        export interface ManagedClusterAADProfileResponse {
            /**
             * The list of AAD group object IDs that will have admin role of the cluster.
             */
            adminGroupObjectIDs?: string[];
            /**
             * (DEPRECATED) The client AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
             */
            clientAppID?: string;
            /**
             * Whether to enable Azure RBAC for Kubernetes authorization.
             */
            enableAzureRBAC?: boolean;
            /**
             * Whether to enable managed AAD.
             */
            managed?: boolean;
            /**
             * (DEPRECATED) The server AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
             */
            serverAppID?: string;
            /**
             * (DEPRECATED) The server AAD application secret. Learn more at https://aka.ms/aks/aad-legacy.
             */
            serverAppSecret?: string;
            /**
             * The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription.
             */
            tenantID?: string;
        }

        /**
         * Access profile for managed cluster API server.
         */
        export interface ManagedClusterAPIServerAccessProfileResponse {
            /**
             * IP ranges are specified in CIDR format, e.g. 137.117.106.88/29. This feature is not compatible with clusters that use Public IP Per Node, or clusters that are using a Basic Load Balancer. For more information see [API server authorized IP ranges](https://docs.microsoft.com/azure/aks/api-server-authorized-ip-ranges).
             */
            authorizedIPRanges?: string[];
            /**
             * Whether to disable run command for the cluster or not.
             */
            disableRunCommand?: boolean;
            /**
             * For more details, see [Creating a private AKS cluster](https://docs.microsoft.com/azure/aks/private-clusters).
             */
            enablePrivateCluster?: boolean;
            /**
             * Whether to create additional public FQDN for private cluster or not.
             */
            enablePrivateClusterPublicFQDN?: boolean;
            /**
             * The default is System. For more details see [configure private DNS zone](https://docs.microsoft.com/azure/aks/private-clusters#configure-private-dns-zone). Allowed values are 'system' and 'none'.
             */
            privateDNSZone?: string;
        }

        /**
         * A Kubernetes add-on profile for a managed cluster.
         */
        export interface ManagedClusterAddonProfileResponse {
            /**
             * Key-value pairs for configuring an add-on.
             */
            config?: {[key: string]: string};
            /**
             * Whether the add-on is enabled or not.
             */
            enabled: boolean;
            /**
             * Information of user assigned identity used by this add-on.
             */
            identity: v20230701.ManagedClusterAddonProfileResponseIdentity;
        }

        /**
         * Information of user assigned identity used by this add-on.
         */
        export interface ManagedClusterAddonProfileResponseIdentity {
            /**
             * The client ID of the user assigned identity.
             */
            clientId?: string;
            /**
             * The object ID of the user assigned identity.
             */
            objectId?: string;
            /**
             * The resource ID of the user assigned identity.
             */
            resourceId?: string;
        }

        /**
         * Profile for the container service agent pool.
         */
        export interface ManagedClusterAgentPoolProfileResponse {
            /**
             * The list of Availability zones to use for nodes. This can only be specified if the AgentPoolType property is 'VirtualMachineScaleSets'.
             */
            availabilityZones?: string[];
            /**
             * Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 1000 (inclusive) for user pools and in the range of 1 to 1000 (inclusive) for system pools. The default value is 1.
             */
            count?: number;
            /**
             * CreationData to be used to specify the source Snapshot ID if the node pool will be created/upgraded using a snapshot.
             */
            creationData?: v20230701.CreationDataResponse;
            /**
             * If orchestratorVersion is a fully specified version <major.minor.patch>, this field will be exactly equal to it. If orchestratorVersion is <major.minor>, this field will contain the full <major.minor.patch> version being used.
             */
            currentOrchestratorVersion: string;
            /**
             * Whether to enable auto-scaler
             */
            enableAutoScaling?: boolean;
            /**
             * This is only supported on certain VM sizes and in certain Azure regions. For more information, see: https://docs.microsoft.com/azure/aks/enable-host-encryption
             */
            enableEncryptionAtHost?: boolean;
            /**
             * See [Add a FIPS-enabled node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#add-a-fips-enabled-node-pool-preview) for more details.
             */
            enableFIPS?: boolean;
            /**
             * Some scenarios may require nodes in a node pool to receive their own dedicated public IP addresses. A common scenario is for gaming workloads, where a console needs to make a direct connection to a cloud virtual machine to minimize hops. For more information see [assigning a public IP per node](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#assign-a-public-ip-per-node-for-your-node-pools). The default is false.
             */
            enableNodePublicIP?: boolean;
            /**
             * Whether to enable UltraSSD
             */
            enableUltraSSD?: boolean;
            /**
             * GPUInstanceProfile to be used to specify GPU MIG instance profile for supported GPU VM SKU.
             */
            gpuInstanceProfile?: string;
            /**
             * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}. For more information see [Azure dedicated hosts](https://docs.microsoft.com/azure/virtual-machines/dedicated-hosts).
             */
            hostGroupID?: string;
            /**
             * The Kubelet configuration on the agent pool nodes.
             */
            kubeletConfig?: v20230701.KubeletConfigResponse;
            /**
             * Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage.
             */
            kubeletDiskType?: string;
            /**
             * The OS configuration of Linux agent nodes.
             */
            linuxOSConfig?: v20230701.LinuxOSConfigResponse;
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
             * A cluster must have at least one 'System' Agent Pool at all times. For additional information on agent pool restrictions and best practices, see: https://docs.microsoft.com/azure/aks/use-system-pools
             */
            mode?: string;
            /**
             * Windows agent pool names must be 6 characters or less.
             */
            name: string;
            /**
             * The version of node image
             */
            nodeImageVersion: string;
            /**
             * The node labels to be persisted across all nodes in agent pool.
             */
            nodeLabels?: {[key: string]: string};
            /**
             * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIPPrefixName}
             */
            nodePublicIPPrefixID?: string;
            /**
             * The taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
             */
            nodeTaints?: string[];
            /**
             * Both patch version <major.minor.patch> (e.g. 1.20.13) and <major.minor> (e.g. 1.20) are supported. When <major.minor> is specified, the latest supported GA patch version is chosen automatically. Updating the cluster with the same <major.minor> once it has been created (e.g. 1.14.x -> 1.14) will not trigger an upgrade, even if a newer patch version is available. As a best practice, you should upgrade all node pools in an AKS cluster to the same Kubernetes version. The node pool version must have the same major version as the control plane. The node pool minor version must be within two minor versions of the control plane version. The node pool version cannot be greater than the control plane version. For more information see [upgrading a node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#upgrade-a-node-pool).
             */
            orchestratorVersion?: string;
            /**
             * OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
             */
            osDiskSizeGB?: number;
            /**
             * The default is 'Ephemeral' if the VM supports it and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation. For more information see [Ephemeral OS](https://docs.microsoft.com/azure/aks/cluster-configuration#ephemeral-os).
             */
            osDiskType?: string;
            /**
             * Specifies the OS SKU used by the agent pool. The default is Ubuntu if OSType is Linux. The default is Windows2019 when Kubernetes <= 1.24 or Windows2022 when Kubernetes >= 1.25 if OSType is Windows.
             */
            osSKU?: string;
            /**
             * The operating system type. The default is Linux.
             */
            osType?: string;
            /**
             * If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
             */
            podSubnetID?: string;
            /**
             * When an Agent Pool is first created it is initially Running. The Agent Pool can be stopped by setting this field to Stopped. A stopped Agent Pool stops all of its VMs and does not accrue billing charges. An Agent Pool can only be stopped if it is Running and provisioning state is Succeeded
             */
            powerState?: v20230701.PowerStateResponse;
            /**
             * The current deployment or provisioning state.
             */
            provisioningState: string;
            /**
             * The ID for Proximity Placement Group.
             */
            proximityPlacementGroupID?: string;
            /**
             * This also effects the cluster autoscaler behavior. If not specified, it defaults to Delete.
             */
            scaleDownMode?: string;
            /**
             * This cannot be specified unless the scaleSetPriority is 'Spot'. If not specified, the default is 'Delete'.
             */
            scaleSetEvictionPolicy?: string;
            /**
             * The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'.
             */
            scaleSetPriority?: string;
            /**
             * Possible values are any decimal value greater than zero or -1 which indicates the willingness to pay any on-demand price. For more details on spot pricing, see [spot VMs pricing](https://docs.microsoft.com/azure/virtual-machines/spot-vms#pricing)
             */
            spotMaxPrice?: number;
            /**
             * The tags to be persisted on the agent pool virtual machine scale set.
             */
            tags?: {[key: string]: string};
            /**
             * The type of Agent Pool.
             */
            type?: string;
            /**
             * Settings for upgrading the agentpool
             */
            upgradeSettings?: v20230701.AgentPoolUpgradeSettingsResponse;
            /**
             * VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. For more details on restricted VM sizes, see: https://docs.microsoft.com/azure/aks/quotas-skus-regions
             */
            vmSize?: string;
            /**
             * If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
             */
            vnetSubnetID?: string;
            /**
             * Determines the type of workload a node can run.
             */
            workloadRuntime?: string;
        }

        /**
         * Auto upgrade profile for a managed cluster.
         */
        export interface ManagedClusterAutoUpgradeProfileResponse {
            /**
             * Manner in which the OS on your nodes is updated. The default is NodeImage.
             */
            nodeOSUpgradeChannel?: string;
            /**
             * For more information see [setting the AKS cluster auto-upgrade channel](https://docs.microsoft.com/azure/aks/upgrade-cluster#set-auto-upgrade-channel).
             */
            upgradeChannel?: string;
        }

        /**
         * Kube State Metrics profile for the Azure Managed Prometheus addon. These optional settings are for the kube-state-metrics pod that is deployed with the addon. See aka.ms/AzureManagedPrometheus-optional-parameters for details.
         */
        export interface ManagedClusterAzureMonitorProfileKubeStateMetricsResponse {
            /**
             * Comma-separated list of Kubernetes annotation keys that will be used in the resource's labels metric (Example: 'namespaces=[kubernetes.io/team,...],pods=[kubernetes.io/team],...'). By default the metric contains only resource name and namespace labels.
             */
            metricAnnotationsAllowList?: string;
            /**
             * Comma-separated list of additional Kubernetes label keys that will be used in the resource's labels metric (Example: 'namespaces=[k8s-label-1,k8s-label-n,...],pods=[app],...'). By default the metric contains only resource name and namespace labels.
             */
            metricLabelsAllowlist?: string;
        }

        /**
         * Metrics profile for the Azure Monitor managed service for Prometheus addon. Collect out-of-the-box Kubernetes infrastructure metrics to send to an Azure Monitor Workspace and configure additional scraping for custom targets. See aka.ms/AzureManagedPrometheus for an overview.
         */
        export interface ManagedClusterAzureMonitorProfileMetricsResponse {
            /**
             * Whether to enable or disable the Azure Managed Prometheus addon for Prometheus monitoring. See aka.ms/AzureManagedPrometheus-aks-enable for details on enabling and disabling.
             */
            enabled: boolean;
            /**
             * Kube State Metrics profile for the Azure Managed Prometheus addon. These optional settings are for the kube-state-metrics pod that is deployed with the addon. See aka.ms/AzureManagedPrometheus-optional-parameters for details.
             */
            kubeStateMetrics?: v20230701.ManagedClusterAzureMonitorProfileKubeStateMetricsResponse;
        }

        /**
         * Azure Monitor addon profiles for monitoring the managed cluster.
         */
        export interface ManagedClusterAzureMonitorProfileResponse {
            /**
             * Metrics profile for the Azure Monitor managed service for Prometheus addon. Collect out-of-the-box Kubernetes infrastructure metrics to send to an Azure Monitor Workspace and configure additional scraping for custom targets. See aka.ms/AzureManagedPrometheus for an overview.
             */
            metrics?: v20230701.ManagedClusterAzureMonitorProfileMetricsResponse;
        }

        /**
         * Cluster HTTP proxy configuration.
         */
        export interface ManagedClusterHTTPProxyConfigResponse {
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
        }

        /**
         * Identity for the managed cluster.
         */
        export interface ManagedClusterIdentityResponse {
            /**
             * The delegated identity resources assigned to this managed cluster. This can only be set by another Azure Resource Provider, and managed cluster only accept one delegated identity resource. Internal use only.
             */
            delegatedResources?: {[key: string]: v20230701.DelegatedResourceResponse};
            /**
             * The principal id of the system assigned identity which is used by master components.
             */
            principalId: string;
            /**
             * The tenant id of the system assigned identity which is used by master components.
             */
            tenantId: string;
            /**
             * For more information see [use managed identities in AKS](https://docs.microsoft.com/azure/aks/use-managed-identity).
             */
            type?: string;
            /**
             * The keys must be ARM resource IDs in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentities?: {[key: string]: v20230701.ManagedClusterIdentityResponseUserAssignedIdentities};
        }

        export interface ManagedClusterIdentityResponseUserAssignedIdentities {
            /**
             * The client id of user assigned identity.
             */
            clientId: string;
            /**
             * The principal id of user assigned identity.
             */
            principalId: string;
        }

        /**
         * Profile of the managed cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileResponse {
            /**
             * The desired number of allocated SNAT ports per VM. Allowed values are in the range of 0 to 64000 (inclusive). The default value is 0 which results in Azure dynamically allocating ports.
             */
            allocatedOutboundPorts?: number;
            /**
             * The effective outbound IP resources of the cluster load balancer.
             */
            effectiveOutboundIPs?: v20230701.ResourceReferenceResponse[];
            /**
             * Enable multiple standard load balancers per AKS cluster or not.
             */
            enableMultipleStandardLoadBalancers?: boolean;
            /**
             * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 30 minutes.
             */
            idleTimeoutInMinutes?: number;
            /**
             * Desired managed outbound IPs for the cluster load balancer.
             */
            managedOutboundIPs?: v20230701.ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs;
            /**
             * Desired outbound IP Prefix resources for the cluster load balancer.
             */
            outboundIPPrefixes?: v20230701.ManagedClusterLoadBalancerProfileResponseOutboundIPPrefixes;
            /**
             * Desired outbound IP resources for the cluster load balancer.
             */
            outboundIPs?: v20230701.ManagedClusterLoadBalancerProfileResponseOutboundIPs;
        }
        /**
         * managedClusterLoadBalancerProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileResponse
         */
        export function managedClusterLoadBalancerProfileResponseProvideDefaults(val: ManagedClusterLoadBalancerProfileResponse): ManagedClusterLoadBalancerProfileResponse {
            return {
                ...val,
                allocatedOutboundPorts: (val.allocatedOutboundPorts) ?? 0,
                idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 30,
                managedOutboundIPs: (val.managedOutboundIPs ? v20230701.managedClusterLoadBalancerProfileResponseManagedOutboundIPsProvideDefaults(val.managedOutboundIPs) : undefined),
            };
        }

        /**
         * Desired managed outbound IPs for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs {
            /**
             * The desired number of IPv4 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1. 
             */
            count?: number;
            /**
             * The desired number of IPv6 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 0 for single-stack and 1 for dual-stack. 
             */
            countIPv6?: number;
        }
        /**
         * managedClusterLoadBalancerProfileResponseManagedOutboundIPsProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs
         */
        export function managedClusterLoadBalancerProfileResponseManagedOutboundIPsProvideDefaults(val: ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs): ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs {
            return {
                ...val,
                count: (val.count) ?? 1,
                countIPv6: (val.countIPv6) ?? 0,
            };
        }

        /**
         * Desired outbound IP Prefix resources for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileResponseOutboundIPPrefixes {
            /**
             * A list of public IP prefix resources.
             */
            publicIPPrefixes?: v20230701.ResourceReferenceResponse[];
        }

        /**
         * Desired outbound IP resources for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileResponseOutboundIPs {
            /**
             * A list of public IP resources.
             */
            publicIPs?: v20230701.ResourceReferenceResponse[];
        }

        /**
         * Profile of the managed outbound IP resources of the managed cluster.
         */
        export interface ManagedClusterManagedOutboundIPProfileResponse {
            /**
             * The desired number of outbound IPs created/managed by Azure. Allowed values must be in the range of 1 to 16 (inclusive). The default value is 1. 
             */
            count?: number;
        }
        /**
         * managedClusterManagedOutboundIPProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterManagedOutboundIPProfileResponse
         */
        export function managedClusterManagedOutboundIPProfileResponseProvideDefaults(val: ManagedClusterManagedOutboundIPProfileResponse): ManagedClusterManagedOutboundIPProfileResponse {
            return {
                ...val,
                count: (val.count) ?? 1,
            };
        }

        /**
         * Profile of the managed cluster NAT gateway.
         */
        export interface ManagedClusterNATGatewayProfileResponse {
            /**
             * The effective outbound IP resources of the cluster NAT gateway.
             */
            effectiveOutboundIPs?: v20230701.ResourceReferenceResponse[];
            /**
             * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 4 minutes.
             */
            idleTimeoutInMinutes?: number;
            /**
             * Profile of the managed outbound IP resources of the cluster NAT gateway.
             */
            managedOutboundIPProfile?: v20230701.ManagedClusterManagedOutboundIPProfileResponse;
        }
        /**
         * managedClusterNATGatewayProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterNATGatewayProfileResponse
         */
        export function managedClusterNATGatewayProfileResponseProvideDefaults(val: ManagedClusterNATGatewayProfileResponse): ManagedClusterNATGatewayProfileResponse {
            return {
                ...val,
                idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 4,
                managedOutboundIPProfile: (val.managedOutboundIPProfile ? v20230701.managedClusterManagedOutboundIPProfileResponseProvideDefaults(val.managedOutboundIPProfile) : undefined),
            };
        }

        /**
         * The OIDC issuer profile of the Managed Cluster.
         */
        export interface ManagedClusterOIDCIssuerProfileResponse {
            /**
             * Whether the OIDC issuer is enabled.
             */
            enabled?: boolean;
            /**
             * The OIDC issuer url of the Managed Cluster.
             */
            issuerURL: string;
        }

        /**
         * See [disable AAD Pod Identity for a specific Pod/Application](https://azure.github.io/aad-pod-identity/docs/configure/application_exception/) for more details.
         */
        export interface ManagedClusterPodIdentityExceptionResponse {
            /**
             * The name of the pod identity exception.
             */
            name: string;
            /**
             * The namespace of the pod identity exception.
             */
            namespace: string;
            /**
             * The pod labels to match.
             */
            podLabels: {[key: string]: string};
        }

        /**
         * See [use AAD pod identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity) for more details on pod identity integration.
         */
        export interface ManagedClusterPodIdentityProfileResponse {
            /**
             * Running in Kubenet is disabled by default due to the security related nature of AAD Pod Identity and the risks of IP spoofing. See [using Kubenet network plugin with AAD Pod Identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity#using-kubenet-network-plugin-with-azure-active-directory-pod-managed-identities) for more information.
             */
            allowNetworkPluginKubenet?: boolean;
            /**
             * Whether the pod identity addon is enabled.
             */
            enabled?: boolean;
            /**
             * The pod identities to use in the cluster.
             */
            userAssignedIdentities?: v20230701.ManagedClusterPodIdentityResponse[];
            /**
             * The pod identity exceptions to allow.
             */
            userAssignedIdentityExceptions?: v20230701.ManagedClusterPodIdentityExceptionResponse[];
        }

        /**
         * An error response from the pod identity provisioning.
         */
        export interface ManagedClusterPodIdentityProvisioningErrorBodyResponse {
            /**
             * An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
             */
            code?: string;
            /**
             * A list of additional details about the error.
             */
            details?: v20230701.ManagedClusterPodIdentityProvisioningErrorBodyResponse[];
            /**
             * A message describing the error, intended to be suitable for display in a user interface.
             */
            message?: string;
            /**
             * The target of the particular error. For example, the name of the property in error.
             */
            target?: string;
        }

        /**
         * An error response from the pod identity provisioning.
         */
        export interface ManagedClusterPodIdentityProvisioningErrorResponse {
            /**
             * Details about the error.
             */
            error?: v20230701.ManagedClusterPodIdentityProvisioningErrorBodyResponse;
        }

        /**
         * Details about the pod identity assigned to the Managed Cluster.
         */
        export interface ManagedClusterPodIdentityResponse {
            /**
             * The binding selector to use for the AzureIdentityBinding resource.
             */
            bindingSelector?: string;
            /**
             * The user assigned identity details.
             */
            identity: v20230701.UserAssignedIdentityResponse;
            /**
             * The name of the pod identity.
             */
            name: string;
            /**
             * The namespace of the pod identity.
             */
            namespace: string;
            provisioningInfo: v20230701.ManagedClusterPodIdentityResponseProvisioningInfo;
            /**
             * The current provisioning state of the pod identity.
             */
            provisioningState: string;
        }

        export interface ManagedClusterPodIdentityResponseProvisioningInfo {
            /**
             * Pod identity assignment error (if any).
             */
            error?: v20230701.ManagedClusterPodIdentityProvisioningErrorResponse;
        }

        /**
         * Parameters to be applied to the cluster-autoscaler when enabled
         */
        export interface ManagedClusterPropertiesResponseAutoScalerProfile {
            /**
             * Valid values are 'true' and 'false'
             */
            balanceSimilarNodeGroups?: string;
            /**
             * If not specified, the default is 'random'. See [expanders](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#what-are-expanders) for more information.
             */
            expander?: string;
            /**
             * The default is 10.
             */
            maxEmptyBulkDelete?: string;
            /**
             * The default is 600.
             */
            maxGracefulTerminationSec?: string;
            /**
             * The default is '15m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            maxNodeProvisionTime?: string;
            /**
             * The default is 45. The maximum is 100 and the minimum is 0.
             */
            maxTotalUnreadyPercentage?: string;
            /**
             * For scenarios like burst/batch scale where you don't want CA to act before the kubernetes scheduler could schedule all the pods, you can tell CA to ignore unscheduled pods before they're a certain age. The default is '0s'. Values must be an integer followed by a unit ('s' for seconds, 'm' for minutes, 'h' for hours, etc).
             */
            newPodScaleUpDelay?: string;
            /**
             * This must be an integer. The default is 3.
             */
            okTotalUnreadyCount?: string;
            /**
             * The default is '10m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownDelayAfterAdd?: string;
            /**
             * The default is the scan-interval. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownDelayAfterDelete?: string;
            /**
             * The default is '3m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownDelayAfterFailure?: string;
            /**
             * The default is '10m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownUnneededTime?: string;
            /**
             * The default is '20m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownUnreadyTime?: string;
            /**
             * The default is '0.5'.
             */
            scaleDownUtilizationThreshold?: string;
            /**
             * The default is '10'. Values must be an integer number of seconds.
             */
            scanInterval?: string;
            /**
             * The default is true.
             */
            skipNodesWithLocalStorage?: string;
            /**
             * The default is true.
             */
            skipNodesWithSystemPods?: string;
        }

        /**
         * The SKU of a Managed Cluster.
         */
        export interface ManagedClusterSKUResponse {
            /**
             * The name of a managed cluster SKU.
             */
            name?: string;
            /**
             * If not specified, the default is 'Free'. See [AKS Pricing Tier](https://learn.microsoft.com/azure/aks/free-standard-pricing-tiers) for more details.
             */
            tier?: string;
        }

        /**
         * Microsoft Defender settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileDefenderResponse {
            /**
             * Resource ID of the Log Analytics workspace to be associated with Microsoft Defender. When Microsoft Defender is enabled, this field is required and must be a valid workspace resource ID. When Microsoft Defender is disabled, leave the field empty.
             */
            logAnalyticsWorkspaceResourceId?: string;
            /**
             * Microsoft Defender threat detection for Cloud settings for the security profile.
             */
            securityMonitoring?: v20230701.ManagedClusterSecurityProfileDefenderSecurityMonitoringResponse;
        }

        /**
         * Microsoft Defender settings for the security profile threat detection.
         */
        export interface ManagedClusterSecurityProfileDefenderSecurityMonitoringResponse {
            /**
             * Whether to enable Defender threat detection
             */
            enabled?: boolean;
        }

        /**
         * Image Cleaner removes unused images from nodes, freeing up disk space and helping to reduce attack surface area. Here are settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileImageCleanerResponse {
            /**
             * Whether to enable Image Cleaner on AKS cluster.
             */
            enabled?: boolean;
            /**
             * Image Cleaner scanning interval in hours.
             */
            intervalHours?: number;
        }

        /**
         * Security profile for the container service cluster.
         */
        export interface ManagedClusterSecurityProfileResponse {
            /**
             * Azure Key Vault [key management service](https://kubernetes.io/docs/tasks/administer-cluster/kms-provider/) settings for the security profile.
             */
            azureKeyVaultKms?: v20230701.AzureKeyVaultKmsResponse;
            /**
             * Microsoft Defender settings for the security profile.
             */
            defender?: v20230701.ManagedClusterSecurityProfileDefenderResponse;
            /**
             * Image Cleaner settings for the security profile.
             */
            imageCleaner?: v20230701.ManagedClusterSecurityProfileImageCleanerResponse;
            /**
             * Workload identity settings for the security profile. Workload identity enables Kubernetes applications to access Azure cloud resources securely with Azure AD. See https://aka.ms/aks/wi for more details.
             */
            workloadIdentity?: v20230701.ManagedClusterSecurityProfileWorkloadIdentityResponse;
        }
        /**
         * managedClusterSecurityProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterSecurityProfileResponse
         */
        export function managedClusterSecurityProfileResponseProvideDefaults(val: ManagedClusterSecurityProfileResponse): ManagedClusterSecurityProfileResponse {
            return {
                ...val,
                azureKeyVaultKms: (val.azureKeyVaultKms ? v20230701.azureKeyVaultKmsResponseProvideDefaults(val.azureKeyVaultKms) : undefined),
            };
        }

        /**
         * Workload identity settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileWorkloadIdentityResponse {
            /**
             * Whether to enable workload identity.
             */
            enabled?: boolean;
        }

        /**
         * Information about a service principal identity for the cluster to use for manipulating Azure APIs.
         */
        export interface ManagedClusterServicePrincipalProfileResponse {
            /**
             * The ID for the service principal.
             */
            clientId: string;
            /**
             * The secret password associated with the service principal in plain text.
             */
            secret?: string;
        }

        /**
         * AzureBlob CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileBlobCSIDriverResponse {
            /**
             * Whether to enable AzureBlob CSI Driver. The default value is false.
             */
            enabled?: boolean;
        }

        /**
         * AzureDisk CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileDiskCSIDriverResponse {
            /**
             * Whether to enable AzureDisk CSI Driver. The default value is true.
             */
            enabled?: boolean;
        }

        /**
         * AzureFile CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileFileCSIDriverResponse {
            /**
             * Whether to enable AzureFile CSI Driver. The default value is true.
             */
            enabled?: boolean;
        }

        /**
         * Storage profile for the container service cluster.
         */
        export interface ManagedClusterStorageProfileResponse {
            /**
             * AzureBlob CSI Driver settings for the storage profile.
             */
            blobCSIDriver?: v20230701.ManagedClusterStorageProfileBlobCSIDriverResponse;
            /**
             * AzureDisk CSI Driver settings for the storage profile.
             */
            diskCSIDriver?: v20230701.ManagedClusterStorageProfileDiskCSIDriverResponse;
            /**
             * AzureFile CSI Driver settings for the storage profile.
             */
            fileCSIDriver?: v20230701.ManagedClusterStorageProfileFileCSIDriverResponse;
            /**
             * Snapshot Controller settings for the storage profile.
             */
            snapshotController?: v20230701.ManagedClusterStorageProfileSnapshotControllerResponse;
        }

        /**
         * Snapshot Controller settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileSnapshotControllerResponse {
            /**
             * Whether to enable Snapshot Controller. The default value is true.
             */
            enabled?: boolean;
        }

        /**
         * Profile for Windows VMs in the managed cluster.
         */
        export interface ManagedClusterWindowsProfileResponse {
            /**
             * Specifies the password of the administrator account. <br><br> **Minimum-length:** 8 characters <br><br> **Max-length:** 123 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!"
             */
            adminPassword?: string;
            /**
             * Specifies the name of the administrator account. <br><br> **Restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length:** 1 character <br><br> **Max-length:** 20 characters
             */
            adminUsername: string;
            /**
             * For more details on CSI proxy, see the [CSI proxy GitHub repo](https://github.com/kubernetes-csi/csi-proxy).
             */
            enableCSIProxy?: boolean;
            /**
             * The Windows gMSA Profile in the Managed Cluster.
             */
            gmsaProfile?: v20230701.WindowsGmsaProfileResponse;
            /**
             * The license type to use for Windows VMs. See [Azure Hybrid User Benefits](https://azure.microsoft.com/pricing/hybrid-benefit/faq/) for more details.
             */
            licenseType?: string;
        }

        /**
         * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
         */
        export interface ManagedClusterWorkloadAutoScalerProfileKedaResponse {
            /**
             * Whether to enable KEDA.
             */
            enabled: boolean;
        }

        /**
         * Workload Auto-scaler profile for the managed cluster.
         */
        export interface ManagedClusterWorkloadAutoScalerProfileResponse {
            /**
             * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
             */
            keda?: v20230701.ManagedClusterWorkloadAutoScalerProfileKedaResponse;
            /**
             * VPA (Vertical Pod Autoscaler) settings for the workload auto-scaler profile.
             */
            verticalPodAutoscaler?: v20230701.ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse;
        }
        /**
         * managedClusterWorkloadAutoScalerProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterWorkloadAutoScalerProfileResponse
         */
        export function managedClusterWorkloadAutoScalerProfileResponseProvideDefaults(val: ManagedClusterWorkloadAutoScalerProfileResponse): ManagedClusterWorkloadAutoScalerProfileResponse {
            return {
                ...val,
                verticalPodAutoscaler: (val.verticalPodAutoscaler ? v20230701.managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponseProvideDefaults(val.verticalPodAutoscaler) : undefined),
            };
        }

        /**
         * VPA (Vertical Pod Autoscaler) settings for the workload auto-scaler profile.
         */
        export interface ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse {
            /**
             * Whether to enable VPA. Default value is false.
             */
            enabled: boolean;
        }
        /**
         * managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponseProvideDefaults sets the appropriate defaults for ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse
         */
        export function managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponseProvideDefaults(val: ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse): ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse {
            return {
                ...val,
                enabled: (val.enabled) ?? false,
            };
        }

        /**
         * Describes the Power State of the cluster
         */
        export interface PowerStateResponse {
            /**
             * Tells whether the cluster is Running or Stopped
             */
            code?: string;
        }

        /**
         * Private endpoint which a connection belongs to.
         */
        export interface PrivateEndpointResponse {
            /**
             * The resource ID of the private endpoint
             */
            id?: string;
        }

        /**
         * A private link resource
         */
        export interface PrivateLinkResourceResponse {
            /**
             * The group ID of the resource.
             */
            groupId?: string;
            /**
             * The ID of the private link resource.
             */
            id?: string;
            /**
             * The name of the private link resource.
             */
            name?: string;
            /**
             * The private link service ID of the resource, this field is exposed only to NRP internally.
             */
            privateLinkServiceID: string;
            /**
             * The RequiredMembers of the resource
             */
            requiredMembers?: string[];
            /**
             * The resource type.
             */
            type?: string;
        }

        /**
         * The state of a private link service connection.
         */
        export interface PrivateLinkServiceConnectionStateResponse {
            /**
             * The private link service connection description.
             */
            description?: string;
            /**
             * The private link service connection status.
             */
            status?: string;
        }

        /**
         * For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'.
         */
        export interface RelativeMonthlyScheduleResponse {
            /**
             * Specifies on which day of the week the maintenance occurs.
             */
            dayOfWeek: string;
            /**
             * Specifies the number of months between each set of occurrences.
             */
            intervalMonths: number;
            /**
             * Specifies on which week of the month the dayOfWeek applies.
             */
            weekIndex: string;
        }

        /**
         * A reference to an Azure resource.
         */
        export interface ResourceReferenceResponse {
            /**
             * The fully qualified Azure resource id.
             */
            id?: string;
        }

        /**
         * One and only one of the schedule types should be specified. Choose either 'daily', 'weekly', 'absoluteMonthly' or 'relativeMonthly' for your maintenance schedule.
         */
        export interface ScheduleResponse {
            /**
             * For schedules like: 'recur every month on the 15th' or 'recur every 3 months on the 20th'.
             */
            absoluteMonthly?: v20230701.AbsoluteMonthlyScheduleResponse;
            /**
             * For schedules like: 'recur every day' or 'recur every 3 days'.
             */
            daily?: v20230701.DailyScheduleResponse;
            /**
             * For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'.
             */
            relativeMonthly?: v20230701.RelativeMonthlyScheduleResponse;
            /**
             * For schedules like: 'recur every Monday' or 'recur every 3 weeks on Wednesday'.
             */
            weekly?: v20230701.WeeklyScheduleResponse;
        }

        /**
         * Sysctl settings for Linux agent nodes.
         */
        export interface SysctlConfigResponse {
            /**
             * Sysctl setting fs.aio-max-nr.
             */
            fsAioMaxNr?: number;
            /**
             * Sysctl setting fs.file-max.
             */
            fsFileMax?: number;
            /**
             * Sysctl setting fs.inotify.max_user_watches.
             */
            fsInotifyMaxUserWatches?: number;
            /**
             * Sysctl setting fs.nr_open.
             */
            fsNrOpen?: number;
            /**
             * Sysctl setting kernel.threads-max.
             */
            kernelThreadsMax?: number;
            /**
             * Sysctl setting net.core.netdev_max_backlog.
             */
            netCoreNetdevMaxBacklog?: number;
            /**
             * Sysctl setting net.core.optmem_max.
             */
            netCoreOptmemMax?: number;
            /**
             * Sysctl setting net.core.rmem_default.
             */
            netCoreRmemDefault?: number;
            /**
             * Sysctl setting net.core.rmem_max.
             */
            netCoreRmemMax?: number;
            /**
             * Sysctl setting net.core.somaxconn.
             */
            netCoreSomaxconn?: number;
            /**
             * Sysctl setting net.core.wmem_default.
             */
            netCoreWmemDefault?: number;
            /**
             * Sysctl setting net.core.wmem_max.
             */
            netCoreWmemMax?: number;
            /**
             * Sysctl setting net.ipv4.ip_local_port_range.
             */
            netIpv4IpLocalPortRange?: string;
            /**
             * Sysctl setting net.ipv4.neigh.default.gc_thresh1.
             */
            netIpv4NeighDefaultGcThresh1?: number;
            /**
             * Sysctl setting net.ipv4.neigh.default.gc_thresh2.
             */
            netIpv4NeighDefaultGcThresh2?: number;
            /**
             * Sysctl setting net.ipv4.neigh.default.gc_thresh3.
             */
            netIpv4NeighDefaultGcThresh3?: number;
            /**
             * Sysctl setting net.ipv4.tcp_fin_timeout.
             */
            netIpv4TcpFinTimeout?: number;
            /**
             * Sysctl setting net.ipv4.tcp_keepalive_probes.
             */
            netIpv4TcpKeepaliveProbes?: number;
            /**
             * Sysctl setting net.ipv4.tcp_keepalive_time.
             */
            netIpv4TcpKeepaliveTime?: number;
            /**
             * Sysctl setting net.ipv4.tcp_max_syn_backlog.
             */
            netIpv4TcpMaxSynBacklog?: number;
            /**
             * Sysctl setting net.ipv4.tcp_max_tw_buckets.
             */
            netIpv4TcpMaxTwBuckets?: number;
            /**
             * Sysctl setting net.ipv4.tcp_tw_reuse.
             */
            netIpv4TcpTwReuse?: boolean;
            /**
             * Sysctl setting net.ipv4.tcp_keepalive_intvl.
             */
            netIpv4TcpkeepaliveIntvl?: number;
            /**
             * Sysctl setting net.netfilter.nf_conntrack_buckets.
             */
            netNetfilterNfConntrackBuckets?: number;
            /**
             * Sysctl setting net.netfilter.nf_conntrack_max.
             */
            netNetfilterNfConntrackMax?: number;
            /**
             * Sysctl setting vm.max_map_count.
             */
            vmMaxMapCount?: number;
            /**
             * Sysctl setting vm.swappiness.
             */
            vmSwappiness?: number;
            /**
             * Sysctl setting vm.vfs_cache_pressure.
             */
            vmVfsCachePressure?: number;
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
         * Time in a week.
         */
        export interface TimeInWeekResponse {
            /**
             * The day of the week.
             */
            day?: string;
            /**
             * Each integer hour represents a time range beginning at 0m after the hour ending at the next hour (non-inclusive). 0 corresponds to 00:00 UTC, 23 corresponds to 23:00 UTC. Specifying [0, 1] means the 00:00 - 02:00 UTC time range.
             */
            hourSlots?: number[];
        }

        /**
         * For example, between 2021-05-25T13:00:00Z and 2021-05-25T14:00:00Z.
         */
        export interface TimeSpanResponse {
            /**
             * The end of a time span
             */
            end?: string;
            /**
             * The start of a time span
             */
            start?: string;
        }

        /**
         * Settings for overrides when upgrading a cluster.
         */
        export interface UpgradeOverrideSettingsResponse {
            /**
             * Whether to force upgrade the cluster. Note that this option instructs upgrade operation to bypass upgrade protections such as checking for deprecated API usage. Enable this option only with caution.
             */
            forceUpgrade?: boolean;
            /**
             * Until when the overrides are effective. Note that this only matches the start time of an upgrade, and the effectiveness won't change once an upgrade starts even if the `until` expires as upgrade proceeds. This field is not set by default. It must be set for the overrides to take effect.
             */
            until?: string;
        }

        /**
         * Details about a user assigned identity.
         */
        export interface UserAssignedIdentityResponse {
            /**
             * The client ID of the user assigned identity.
             */
            clientId?: string;
            /**
             * The object ID of the user assigned identity.
             */
            objectId?: string;
            /**
             * The resource ID of the user assigned identity.
             */
            resourceId?: string;
        }

        /**
         * For schedules like: 'recur every Monday' or 'recur every 3 weeks on Wednesday'.
         */
        export interface WeeklyScheduleResponse {
            /**
             * Specifies on which day of the week the maintenance occurs.
             */
            dayOfWeek: string;
            /**
             * Specifies the number of weeks between each set of occurrences.
             */
            intervalWeeks: number;
        }

        /**
         * Windows gMSA Profile in the managed cluster.
         */
        export interface WindowsGmsaProfileResponse {
            /**
             * Specifies the DNS server for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
             */
            dnsServer?: string;
            /**
             * Specifies whether to enable Windows gMSA in the managed cluster.
             */
            enabled?: boolean;
            /**
             * Specifies the root domain name for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
             */
            rootDomainName?: string;
        }

    }

    export namespace v20230702preview {
        /**
         * For schedules like: 'recur every month on the 15th' or 'recur every 3 months on the 20th'.
         */
        export interface AbsoluteMonthlyScheduleResponse {
            /**
             * The date of the month.
             */
            dayOfMonth: number;
            /**
             * Specifies the number of months between each set of occurrences.
             */
            intervalMonths: number;
        }

        /**
         * Network settings of an agent pool.
         */
        export interface AgentPoolNetworkProfileResponse {
            /**
             * The port ranges that are allowed to access. The specified ranges are allowed to overlap.
             */
            allowedHostPorts?: v20230702preview.PortRangeResponse[];
            /**
             * The IDs of the application security groups which agent pool will associate when created.
             */
            applicationSecurityGroups?: string[];
            /**
             * IPTags of instance-level public IPs.
             */
            nodePublicIPTags?: v20230702preview.IPTagResponse[];
        }

        /**
         * The security settings of an agent pool.
         */
        export interface AgentPoolSecurityProfileResponse {
            /**
             * SSH access method of an agent pool.
             */
            sshAccess?: string;
        }

        /**
         * Settings for upgrading an agentpool
         */
        export interface AgentPoolUpgradeSettingsResponse {
            /**
             * The amount of time (in minutes) to wait on eviction of pods and graceful termination per node. This eviction wait time honors waiting on pod disruption budgets. If this time is exceeded, the upgrade fails. If not specified, the default is 30 minutes.
             */
            drainTimeoutInMinutes?: number;
            /**
             * This can either be set to an integer (e.g. '5') or a percentage (e.g. '50%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified, the default is 1. For more information, including best practices, see: https://docs.microsoft.com/azure/aks/upgrade-cluster#customize-node-surge-upgrade
             */
            maxSurge?: string;
        }

        /**
         * The Windows agent pool's specific profile.
         */
        export interface AgentPoolWindowsProfileResponse {
            /**
             * The default value is false. Outbound NAT can only be disabled if the cluster outboundType is NAT Gateway and the Windows agent pool does not have node public IP enabled.
             */
            disableOutboundNat?: boolean;
        }

        /**
         * Azure Key Vault key management service settings for the security profile.
         */
        export interface AzureKeyVaultKmsResponse {
            /**
             * Whether to enable Azure Key Vault key management service. The default is false.
             */
            enabled?: boolean;
            /**
             * Identifier of Azure Key Vault key. See [key identifier format](https://docs.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates#vault-name-and-object-name) for more details. When Azure Key Vault key management service is enabled, this field is required and must be a valid key identifier. When Azure Key Vault key management service is disabled, leave the field empty.
             */
            keyId?: string;
            /**
             * Network access of key vault. The possible values are `Public` and `Private`. `Public` means the key vault allows public access from all networks. `Private` means the key vault disables public access and enables private link. The default value is `Public`.
             */
            keyVaultNetworkAccess?: string;
            /**
             * Resource ID of key vault. When keyVaultNetworkAccess is `Private`, this field is required and must be a valid resource ID. When keyVaultNetworkAccess is `Public`, leave the field empty.
             */
            keyVaultResourceId?: string;
        }
        /**
         * azureKeyVaultKmsResponseProvideDefaults sets the appropriate defaults for AzureKeyVaultKmsResponse
         */
        export function azureKeyVaultKmsResponseProvideDefaults(val: AzureKeyVaultKmsResponse): AzureKeyVaultKmsResponse {
            return {
                ...val,
                keyVaultNetworkAccess: (val.keyVaultNetworkAccess) ?? "Public",
            };
        }

        /**
         * Settings for upgrading a cluster.
         */
        export interface ClusterUpgradeSettingsResponse {
            /**
             * Settings for overrides.
             */
            overrideSettings?: v20230702preview.UpgradeOverrideSettingsResponse;
        }

        /**
         * Profile for Linux VMs in the container service cluster.
         */
        export interface ContainerServiceLinuxProfileResponse {
            /**
             * The administrator username to use for Linux VMs.
             */
            adminUsername: string;
            /**
             * The SSH configuration for Linux-based VMs running on Azure.
             */
            ssh: v20230702preview.ContainerServiceSshConfigurationResponse;
        }

        /**
         * Profile of network configuration.
         */
        export interface ContainerServiceNetworkProfileResponse {
            /**
             * An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
             */
            dnsServiceIP?: string;
            /**
             * IP families are used to determine single-stack or dual-stack clusters. For single-stack, the expected value is IPv4. For dual-stack, the expected values are IPv4 and IPv6.
             */
            ipFamilies?: string[];
            /**
             * Holds configuration customizations for kube-proxy. Any values not defined will use the kube-proxy defaulting behavior. See https://v<version>.docs.kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/ where <version> is represented by a <major version>-<minor version> string. Kubernetes version 1.23 would be '1-23'.
             */
            kubeProxyConfig?: v20230702preview.ContainerServiceNetworkProfileResponseKubeProxyConfig;
            /**
             * Profile of the cluster load balancer.
             */
            loadBalancerProfile?: v20230702preview.ManagedClusterLoadBalancerProfileResponse;
            /**
             * The default is 'standard'. See [Azure Load Balancer SKUs](https://docs.microsoft.com/azure/load-balancer/skus) for more information about the differences between load balancer SKUs.
             */
            loadBalancerSku?: string;
            /**
             * This addon can be used to configure network monitoring and generate network monitoring data in Prometheus format
             */
            monitoring?: v20230702preview.NetworkMonitoringResponse;
            /**
             * Profile of the cluster NAT gateway.
             */
            natGatewayProfile?: v20230702preview.ManagedClusterNATGatewayProfileResponse;
            /**
             * Network dataplane used in the Kubernetes cluster.
             */
            networkDataplane?: string;
            /**
             * This cannot be specified if networkPlugin is anything other than 'azure'.
             */
            networkMode?: string;
            /**
             * Network plugin used for building the Kubernetes network.
             */
            networkPlugin?: string;
            /**
             * Network plugin mode used for building the Kubernetes network.
             */
            networkPluginMode?: string;
            /**
             * Network policy used for building the Kubernetes network.
             */
            networkPolicy?: string;
            /**
             * This can only be set at cluster creation time and cannot be changed later. For more information see [egress outbound type](https://docs.microsoft.com/azure/aks/egress-outboundtype).
             */
            outboundType?: string;
            /**
             * A CIDR notation IP range from which to assign pod IPs when kubenet is used.
             */
            podCidr?: string;
            /**
             * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
             */
            podCidrs?: string[];
            /**
             * A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
             */
            serviceCidr?: string;
            /**
             * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking. They must not overlap with any Subnet IP ranges.
             */
            serviceCidrs?: string[];
        }
        /**
         * containerServiceNetworkProfileResponseProvideDefaults sets the appropriate defaults for ContainerServiceNetworkProfileResponse
         */
        export function containerServiceNetworkProfileResponseProvideDefaults(val: ContainerServiceNetworkProfileResponse): ContainerServiceNetworkProfileResponse {
            return {
                ...val,
                dnsServiceIP: (val.dnsServiceIP) ?? "10.0.0.10",
                loadBalancerProfile: (val.loadBalancerProfile ? v20230702preview.managedClusterLoadBalancerProfileResponseProvideDefaults(val.loadBalancerProfile) : undefined),
                natGatewayProfile: (val.natGatewayProfile ? v20230702preview.managedClusterNATGatewayProfileResponseProvideDefaults(val.natGatewayProfile) : undefined),
                outboundType: (val.outboundType) ?? "loadBalancer",
                podCidr: (val.podCidr) ?? "10.244.0.0/16",
                serviceCidr: (val.serviceCidr) ?? "10.0.0.0/16",
            };
        }

        /**
         * Holds configuration customizations for IPVS. May only be specified if 'mode' is set to 'IPVS'.
         */
        export interface ContainerServiceNetworkProfileResponseIpvsConfig {
            /**
             * IPVS scheduler, for more information please see http://www.linuxvirtualserver.org/docs/scheduling.html.
             */
            scheduler?: string;
            /**
             * The timeout value used for IPVS TCP sessions after receiving a FIN in seconds. Must be a positive integer value.
             */
            tcpFinTimeoutSeconds?: number;
            /**
             * The timeout value used for idle IPVS TCP sessions in seconds. Must be a positive integer value.
             */
            tcpTimeoutSeconds?: number;
            /**
             * The timeout value used for IPVS UDP packets in seconds. Must be a positive integer value.
             */
            udpTimeoutSeconds?: number;
        }

        /**
         * Holds configuration customizations for kube-proxy. Any values not defined will use the kube-proxy defaulting behavior. See https://v<version>.docs.kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/ where <version> is represented by a <major version>-<minor version> string. Kubernetes version 1.23 would be '1-23'.
         */
        export interface ContainerServiceNetworkProfileResponseKubeProxyConfig {
            /**
             * Whether to enable on kube-proxy on the cluster (if no 'kubeProxyConfig' exists, kube-proxy is enabled in AKS by default without these customizations).
             */
            enabled?: boolean;
            /**
             * Holds configuration customizations for IPVS. May only be specified if 'mode' is set to 'IPVS'.
             */
            ipvsConfig?: v20230702preview.ContainerServiceNetworkProfileResponseIpvsConfig;
            /**
             * Specify which proxy mode to use ('IPTABLES' or 'IPVS')
             */
            mode?: string;
        }

        /**
         * SSH configuration for Linux-based VMs running on Azure.
         */
        export interface ContainerServiceSshConfigurationResponse {
            /**
             * The list of SSH public keys used to authenticate with Linux-based VMs. A maximum of 1 key may be specified.
             */
            publicKeys: v20230702preview.ContainerServiceSshPublicKeyResponse[];
        }

        /**
         * Contains information about SSH certificate public key data.
         */
        export interface ContainerServiceSshPublicKeyResponse {
            /**
             * Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.
             */
            keyData: string;
        }

        /**
         * Data used when creating a target resource from a source resource.
         */
        export interface CreationDataResponse {
            /**
             * This is the ARM ID of the source object to be used to create the target object.
             */
            sourceResourceId?: string;
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
         * For schedules like: 'recur every day' or 'recur every 3 days'.
         */
        export interface DailyScheduleResponse {
            /**
             * Specifies the number of days between each set of occurrences.
             */
            intervalDays: number;
        }

        /**
         * For example, between '2022-12-23' and '2023-01-05'.
         */
        export interface DateSpanResponse {
            /**
             * The end date of the date span.
             */
            end: string;
            /**
             * The start date of the date span.
             */
            start: string;
        }

        /**
         * Delegated resource properties - internal use only.
         */
        export interface DelegatedResourceResponse {
            /**
             * The source resource location - internal use only.
             */
            location?: string;
            /**
             * The delegation id of the referral delegation (optional) - internal use only.
             */
            referralResource?: string;
            /**
             * The ARM resource id of the delegated resource - internal use only.
             */
            resourceId?: string;
            /**
             * The tenant id of the delegated resource - internal use only.
             */
            tenantId?: string;
        }

        /**
         * The complex type of the extended location.
         */
        export interface ExtendedLocationResponse {
            /**
             * The name of the extended location.
             */
            name?: string;
            /**
             * The type of the extended location.
             */
            type?: string;
        }

        /**
         * The Guardrails profile.
         */
        export interface GuardrailsProfileResponse {
            /**
             * List of namespaces excluded from guardrails checks
             */
            excludedNamespaces?: string[];
            /**
             * The guardrails level to be used. By default, Guardrails is enabled for all namespaces except those that AKS excludes via systemExcludedNamespaces
             */
            level: string;
            /**
             * List of namespaces specified by AKS to be excluded from Guardrails
             */
            systemExcludedNamespaces: string[];
            /**
             * The version of constraints to use
             */
            version?: string;
        }

        /**
         * Contains the IPTag associated with the object.
         */
        export interface IPTagResponse {
            /**
             * The IP tag type. Example: RoutingPreference.
             */
            ipTagType?: string;
            /**
             * The value of the IP tag associated with the public IP. Example: Internet.
             */
            tag?: string;
        }

        /**
         * Istio Service Mesh Certificate Authority (CA) configuration. For now, we only support plugin certificates as described here https://aka.ms/asm-plugin-ca
         */
        export interface IstioCertificateAuthorityResponse {
            /**
             * Plugin certificates information for Service Mesh.
             */
            plugin?: v20230702preview.IstioPluginCertificateAuthorityResponse;
        }

        /**
         * Istio components configuration.
         */
        export interface IstioComponentsResponse {
            /**
             * Istio egress gateways.
             */
            egressGateways?: v20230702preview.IstioEgressGatewayResponse[];
            /**
             * Istio ingress gateways.
             */
            ingressGateways?: v20230702preview.IstioIngressGatewayResponse[];
        }

        /**
         * Istio egress gateway configuration.
         */
        export interface IstioEgressGatewayResponse {
            /**
             * Whether to enable the egress gateway.
             */
            enabled: boolean;
            /**
             * NodeSelector for scheduling the egress gateway.
             */
            nodeSelector?: {[key: string]: string};
        }

        /**
         * Istio ingress gateway configuration. For now, we support up to one external ingress gateway named `aks-istio-ingressgateway-external` and one internal ingress gateway named `aks-istio-ingressgateway-internal`.
         */
        export interface IstioIngressGatewayResponse {
            /**
             * Whether to enable the ingress gateway.
             */
            enabled: boolean;
            /**
             * Mode of an ingress gateway.
             */
            mode: string;
        }

        /**
         * Plugin certificates information for Service Mesh.
         */
        export interface IstioPluginCertificateAuthorityResponse {
            /**
             * Certificate chain object name in Azure Key Vault.
             */
            certChainObjectName?: string;
            /**
             * Intermediate certificate object name in Azure Key Vault.
             */
            certObjectName?: string;
            /**
             * Intermediate certificate private key object name in Azure Key Vault.
             */
            keyObjectName?: string;
            /**
             * The resource ID of the Key Vault.
             */
            keyVaultId?: string;
            /**
             * Root certificate object name in Azure Key Vault.
             */
            rootCertObjectName?: string;
        }

        /**
         * Istio service mesh configuration.
         */
        export interface IstioServiceMeshResponse {
            /**
             * Istio Service Mesh Certificate Authority (CA) configuration. For now, we only support plugin certificates as described here https://aka.ms/asm-plugin-ca
             */
            certificateAuthority?: v20230702preview.IstioCertificateAuthorityResponse;
            /**
             * Istio components configuration.
             */
            components?: v20230702preview.IstioComponentsResponse;
            /**
             * The list of revisions of the Istio control plane. When an upgrade is not in progress, this holds one value. When canary upgrade is in progress, this can only hold two consecutive values. For more information, see: https://learn.microsoft.com/en-us/azure/aks/istio-upgrade
             */
            revisions?: string[];
        }

        /**
         * See [AKS custom node configuration](https://docs.microsoft.com/azure/aks/custom-node-configuration) for more details.
         */
        export interface KubeletConfigResponse {
            /**
             * Allowed list of unsafe sysctls or unsafe sysctl patterns (ending in `*`).
             */
            allowedUnsafeSysctls?: string[];
            /**
             * The maximum number of container log files that can be present for a container. The number must be ≥ 2.
             */
            containerLogMaxFiles?: number;
            /**
             * The maximum size (e.g. 10Mi) of container log file before it is rotated.
             */
            containerLogMaxSizeMB?: number;
            /**
             * The default is true.
             */
            cpuCfsQuota?: boolean;
            /**
             * The default is '100ms.' Valid values are a sequence of decimal numbers with an optional fraction and a unit suffix. For example: '300ms', '2h45m'. Supported units are 'ns', 'us', 'ms', 's', 'm', and 'h'.
             */
            cpuCfsQuotaPeriod?: string;
            /**
             * The default is 'none'. See [Kubernetes CPU management policies](https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/#cpu-management-policies) for more information. Allowed values are 'none' and 'static'.
             */
            cpuManagerPolicy?: string;
            /**
             * If set to true it will make the Kubelet fail to start if swap is enabled on the node.
             */
            failSwapOn?: boolean;
            /**
             * To disable image garbage collection, set to 100. The default is 85%
             */
            imageGcHighThreshold?: number;
            /**
             * This cannot be set higher than imageGcHighThreshold. The default is 80%
             */
            imageGcLowThreshold?: number;
            /**
             * The maximum number of processes per pod.
             */
            podMaxPids?: number;
            /**
             * For more information see [Kubernetes Topology Manager](https://kubernetes.io/docs/tasks/administer-cluster/topology-manager). The default is 'none'. Allowed values are 'none', 'best-effort', 'restricted', and 'single-numa-node'.
             */
            topologyManagerPolicy?: string;
        }

        /**
         * See [AKS custom node configuration](https://docs.microsoft.com/azure/aks/custom-node-configuration) for more details.
         */
        export interface LinuxOSConfigResponse {
            /**
             * The size in MB of a swap file that will be created on each node.
             */
            swapFileSizeMB?: number;
            /**
             * Sysctl settings for Linux agent nodes.
             */
            sysctls?: v20230702preview.SysctlConfigResponse;
            /**
             * Valid values are 'always', 'defer', 'defer+madvise', 'madvise' and 'never'. The default is 'madvise'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
             */
            transparentHugePageDefrag?: string;
            /**
             * Valid values are 'always', 'madvise', and 'never'. The default is 'always'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
             */
            transparentHugePageEnabled?: string;
        }

        /**
         * Maintenance window used to configure scheduled auto-upgrade for a Managed Cluster.
         */
        export interface MaintenanceWindowResponse {
            /**
             * Length of maintenance window range from 4 to 24 hours.
             */
            durationHours: number;
            /**
             * Date ranges on which upgrade is not allowed. 'utcOffset' applies to this field. For example, with 'utcOffset: +02:00' and 'dateSpan' being '2022-12-23' to '2023-01-03', maintenance will be blocked from '2022-12-22 22:00' to '2023-01-03 22:00' in UTC time.
             */
            notAllowedDates?: v20230702preview.DateSpanResponse[];
            /**
             * Recurrence schedule for the maintenance window.
             */
            schedule: v20230702preview.ScheduleResponse;
            /**
             * The date the maintenance window activates. If the current date is before this date, the maintenance window is inactive and will not be used for upgrades. If not specified, the maintenance window will be active right away.
             */
            startDate?: string;
            /**
             * The start time of the maintenance window. Accepted values are from '00:00' to '23:59'. 'utcOffset' applies to this field. For example: '02:00' with 'utcOffset: +02:00' means UTC time '00:00'.
             */
            startTime: string;
            /**
             * The UTC offset in format +/-HH:mm. For example, '+05:30' for IST and '-07:00' for PST. If not specified, the default is '+00:00'.
             */
            utcOffset?: string;
        }
        /**
         * maintenanceWindowResponseProvideDefaults sets the appropriate defaults for MaintenanceWindowResponse
         */
        export function maintenanceWindowResponseProvideDefaults(val: MaintenanceWindowResponse): MaintenanceWindowResponse {
            return {
                ...val,
                durationHours: (val.durationHours) ?? 24,
            };
        }

        /**
         * For more details see [managed AAD on AKS](https://docs.microsoft.com/azure/aks/managed-aad).
         */
        export interface ManagedClusterAADProfileResponse {
            /**
             * The list of AAD group object IDs that will have admin role of the cluster.
             */
            adminGroupObjectIDs?: string[];
            /**
             * (DEPRECATED) The client AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
             */
            clientAppID?: string;
            /**
             * Whether to enable Azure RBAC for Kubernetes authorization.
             */
            enableAzureRBAC?: boolean;
            /**
             * Whether to enable managed AAD.
             */
            managed?: boolean;
            /**
             * (DEPRECATED) The server AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
             */
            serverAppID?: string;
            /**
             * (DEPRECATED) The server AAD application secret. Learn more at https://aka.ms/aks/aad-legacy.
             */
            serverAppSecret?: string;
            /**
             * The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription.
             */
            tenantID?: string;
        }

        /**
         * Access profile for managed cluster API server.
         */
        export interface ManagedClusterAPIServerAccessProfileResponse {
            /**
             * IP ranges are specified in CIDR format, e.g. 137.117.106.88/29. This feature is not compatible with clusters that use Public IP Per Node, or clusters that are using a Basic Load Balancer. For more information see [API server authorized IP ranges](https://docs.microsoft.com/azure/aks/api-server-authorized-ip-ranges).
             */
            authorizedIPRanges?: string[];
            /**
             * Whether to disable run command for the cluster or not.
             */
            disableRunCommand?: boolean;
            /**
             * For more details, see [Creating a private AKS cluster](https://docs.microsoft.com/azure/aks/private-clusters).
             */
            enablePrivateCluster?: boolean;
            /**
             * Whether to create additional public FQDN for private cluster or not.
             */
            enablePrivateClusterPublicFQDN?: boolean;
            /**
             * Whether to enable apiserver vnet integration for the cluster or not.
             */
            enableVnetIntegration?: boolean;
            /**
             * The default is System. For more details see [configure private DNS zone](https://docs.microsoft.com/azure/aks/private-clusters#configure-private-dns-zone). Allowed values are 'system' and 'none'.
             */
            privateDNSZone?: string;
            /**
             * It is required when: 1. creating a new cluster with BYO Vnet; 2. updating an existing cluster to enable apiserver vnet integration.
             */
            subnetId?: string;
        }

        /**
         * A Kubernetes add-on profile for a managed cluster.
         */
        export interface ManagedClusterAddonProfileResponse {
            /**
             * Key-value pairs for configuring an add-on.
             */
            config?: {[key: string]: string};
            /**
             * Whether the add-on is enabled or not.
             */
            enabled: boolean;
            /**
             * Information of user assigned identity used by this add-on.
             */
            identity: v20230702preview.ManagedClusterAddonProfileResponseIdentity;
        }

        /**
         * Information of user assigned identity used by this add-on.
         */
        export interface ManagedClusterAddonProfileResponseIdentity {
            /**
             * The client ID of the user assigned identity.
             */
            clientId?: string;
            /**
             * The object ID of the user assigned identity.
             */
            objectId?: string;
            /**
             * The resource ID of the user assigned identity.
             */
            resourceId?: string;
        }

        /**
         * Profile for the container service agent pool.
         */
        export interface ManagedClusterAgentPoolProfileResponse {
            /**
             * The list of Availability zones to use for nodes. This can only be specified if the AgentPoolType property is 'VirtualMachineScaleSets'.
             */
            availabilityZones?: string[];
            /**
             * AKS will associate the specified agent pool with the Capacity Reservation Group.
             */
            capacityReservationGroupID?: string;
            /**
             * Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 1000 (inclusive) for user pools and in the range of 1 to 1000 (inclusive) for system pools. The default value is 1.
             */
            count?: number;
            /**
             * CreationData to be used to specify the source Snapshot ID if the node pool will be created/upgraded using a snapshot.
             */
            creationData?: v20230702preview.CreationDataResponse;
            /**
             * If orchestratorVersion was a fully specified version <major.minor.patch>, this field will be exactly equal to it. If orchestratorVersion was <major.minor>, this field will contain the full <major.minor.patch> version being used.
             */
            currentOrchestratorVersion: string;
            /**
             * Whether to enable auto-scaler
             */
            enableAutoScaling?: boolean;
            /**
             * When set to true, AKS adds a label to the node indicating that the feature is enabled and deploys a daemonset along with host services to sync custom certificate authorities from user-provided list of base64 encoded certificates into node trust stores. Defaults to false.
             */
            enableCustomCATrust?: boolean;
            /**
             * This is only supported on certain VM sizes and in certain Azure regions. For more information, see: https://docs.microsoft.com/azure/aks/enable-host-encryption
             */
            enableEncryptionAtHost?: boolean;
            /**
             * See [Add a FIPS-enabled node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#add-a-fips-enabled-node-pool-preview) for more details.
             */
            enableFIPS?: boolean;
            /**
             * Some scenarios may require nodes in a node pool to receive their own dedicated public IP addresses. A common scenario is for gaming workloads, where a console needs to make a direct connection to a cloud virtual machine to minimize hops. For more information see [assigning a public IP per node](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#assign-a-public-ip-per-node-for-your-node-pools). The default is false.
             */
            enableNodePublicIP?: boolean;
            /**
             * Whether to enable UltraSSD
             */
            enableUltraSSD?: boolean;
            /**
             * GPUInstanceProfile to be used to specify GPU MIG instance profile for supported GPU VM SKU.
             */
            gpuInstanceProfile?: string;
            /**
             * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}. For more information see [Azure dedicated hosts](https://docs.microsoft.com/azure/virtual-machines/dedicated-hosts).
             */
            hostGroupID?: string;
            /**
             * The Kubelet configuration on the agent pool nodes.
             */
            kubeletConfig?: v20230702preview.KubeletConfigResponse;
            /**
             * Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage.
             */
            kubeletDiskType?: string;
            /**
             * The OS configuration of Linux agent nodes.
             */
            linuxOSConfig?: v20230702preview.LinuxOSConfigResponse;
            /**
             * The maximum number of nodes for auto-scaling
             */
            maxCount?: number;
            /**
             * The maximum number of pods that can run on a node.
             */
            maxPods?: number;
            /**
             * A base64-encoded string which will be written to /etc/motd after decoding. This allows customization of the message of the day for Linux nodes. It must not be specified for Windows nodes. It must be a static string (i.e., will be printed raw and not be executed as a script).
             */
            messageOfTheDay?: string;
            /**
             * The minimum number of nodes for auto-scaling
             */
            minCount?: number;
            /**
             * A cluster must have at least one 'System' Agent Pool at all times. For additional information on agent pool restrictions and best practices, see: https://docs.microsoft.com/azure/aks/use-system-pools
             */
            mode?: string;
            /**
             * Windows agent pool names must be 6 characters or less.
             */
            name: string;
            /**
             * Network-related settings of an agent pool.
             */
            networkProfile?: v20230702preview.AgentPoolNetworkProfileResponse;
            /**
             * The version of node image
             */
            nodeImageVersion: string;
            /**
             * The node labels to be persisted across all nodes in agent pool.
             */
            nodeLabels?: {[key: string]: string};
            /**
             * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIPPrefixName}
             */
            nodePublicIPPrefixID?: string;
            /**
             * The taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
             */
            nodeTaints?: string[];
            /**
             * Both patch version <major.minor.patch> and <major.minor> are supported. When <major.minor> is specified, the latest supported patch version is chosen automatically. Updating the agent pool with the same <major.minor> once it has been created will not trigger an upgrade, even if a newer patch version is available. As a best practice, you should upgrade all node pools in an AKS cluster to the same Kubernetes version. The node pool version must have the same major version as the control plane. The node pool minor version must be within two minor versions of the control plane version. The node pool version cannot be greater than the control plane version. For more information see [upgrading a node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#upgrade-a-node-pool).
             */
            orchestratorVersion?: string;
            /**
             * OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
             */
            osDiskSizeGB?: number;
            /**
             * The default is 'Ephemeral' if the VM supports it and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation. For more information see [Ephemeral OS](https://docs.microsoft.com/azure/aks/cluster-configuration#ephemeral-os).
             */
            osDiskType?: string;
            /**
             * Specifies the OS SKU used by the agent pool. If not specified, the default is Ubuntu if OSType=Linux or Windows2019 if OSType=Windows. And the default Windows OSSKU will be changed to Windows2022 after Windows2019 is deprecated.
             */
            osSKU?: string;
            /**
             * The operating system type. The default is Linux.
             */
            osType?: string;
            /**
             * If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
             */
            podSubnetID?: string;
            /**
             * When an Agent Pool is first created it is initially Running. The Agent Pool can be stopped by setting this field to Stopped. A stopped Agent Pool stops all of its VMs and does not accrue billing charges. An Agent Pool can only be stopped if it is Running and provisioning state is Succeeded
             */
            powerState?: v20230702preview.PowerStateResponse;
            /**
             * The current deployment or provisioning state.
             */
            provisioningState: string;
            /**
             * The ID for Proximity Placement Group.
             */
            proximityPlacementGroupID?: string;
            /**
             * This also effects the cluster autoscaler behavior. If not specified, it defaults to Delete.
             */
            scaleDownMode?: string;
            /**
             * This cannot be specified unless the scaleSetPriority is 'Spot'. If not specified, the default is 'Delete'.
             */
            scaleSetEvictionPolicy?: string;
            /**
             * The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'.
             */
            scaleSetPriority?: string;
            /**
             * The security settings of an agent pool.
             */
            securityProfile?: v20230702preview.AgentPoolSecurityProfileResponse;
            /**
             * Possible values are any decimal value greater than zero or -1 which indicates the willingness to pay any on-demand price. For more details on spot pricing, see [spot VMs pricing](https://docs.microsoft.com/azure/virtual-machines/spot-vms#pricing)
             */
            spotMaxPrice?: number;
            /**
             * The tags to be persisted on the agent pool virtual machine scale set.
             */
            tags?: {[key: string]: string};
            /**
             * The type of Agent Pool.
             */
            type?: string;
            /**
             * Settings for upgrading the agentpool
             */
            upgradeSettings?: v20230702preview.AgentPoolUpgradeSettingsResponse;
            /**
             * VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. For more details on restricted VM sizes, see: https://docs.microsoft.com/azure/aks/quotas-skus-regions
             */
            vmSize?: string;
            /**
             * If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
             */
            vnetSubnetID?: string;
            /**
             * The Windows agent pool's specific profile.
             */
            windowsProfile?: v20230702preview.AgentPoolWindowsProfileResponse;
            /**
             * Determines the type of workload a node can run.
             */
            workloadRuntime?: string;
        }

        /**
         * Auto upgrade profile for a managed cluster.
         */
        export interface ManagedClusterAutoUpgradeProfileResponse {
            /**
             * The default is Unmanaged, but may change to either NodeImage or SecurityPatch at GA.
             */
            nodeOSUpgradeChannel?: string;
            /**
             * For more information see [setting the AKS cluster auto-upgrade channel](https://docs.microsoft.com/azure/aks/upgrade-cluster#set-auto-upgrade-channel).
             */
            upgradeChannel?: string;
        }

        /**
         * Application Monitoring Open Telemetry Metrics Profile for Kubernetes Application Container Metrics. Collects OpenTelemetry metrics through auto-instrumentation of the application using Azure Monitor OpenTelemetry based SDKs. See aka.ms/AzureMonitorApplicationMonitoring for an overview.
         */
        export interface ManagedClusterAzureMonitorProfileAppMonitoringOpenTelemetryMetricsResponse {
            /**
             * Indicates if Application Monitoring Open Telemetry Metrics is enabled or not.
             */
            enabled?: boolean;
        }

        /**
         * Application Monitoring Profile for Kubernetes Application Container. Collects application logs, metrics and traces through auto-instrumentation of the application using Azure Monitor OpenTelemetry based SDKs. See aka.ms/AzureMonitorApplicationMonitoring for an overview.
         */
        export interface ManagedClusterAzureMonitorProfileAppMonitoringResponse {
            /**
             * Indicates if Application Monitoring enabled or not.
             */
            enabled?: boolean;
        }

        /**
         * Azure Monitor Container Insights Profile for Kubernetes Events, Inventory and Container stdout & stderr logs etc. See aka.ms/AzureMonitorContainerInsights for an overview.
         */
        export interface ManagedClusterAzureMonitorProfileContainerInsightsResponse {
            /**
             * Indicates if Azure Monitor Container Insights Logs Addon is enabled or not.
             */
            enabled?: boolean;
            /**
             * Fully Qualified ARM Resource Id of Azure Log Analytics Workspace for storing Azure Monitor Container Insights Logs.
             */
            logAnalyticsWorkspaceResourceId?: string;
            /**
             * Windows Host Logs Profile for Kubernetes Windows Nodes Log Collection. Collects ETW, Event Logs and Text logs etc. See aka.ms/AzureMonitorContainerInsights for an overview.
             */
            windowsHostLogs?: v20230702preview.ManagedClusterAzureMonitorProfileWindowsHostLogsResponse;
        }

        /**
         * Kube State Metrics for prometheus addon profile for the container service cluster
         */
        export interface ManagedClusterAzureMonitorProfileKubeStateMetricsResponse {
            /**
             * Comma-separated list of additional Kubernetes label keys that will be used in the resource's labels metric.
             */
            metricAnnotationsAllowList?: string;
            /**
             * Comma-separated list of Kubernetes annotations keys that will be used in the resource's labels metric. 
             */
            metricLabelsAllowlist?: string;
        }

        /**
         * Logs profile for the Azure Monitor Infrastructure and Application Logs. Collect out-of-the-box Kubernetes infrastructure & application logs to send to Azure Monitor. See aka.ms/AzureMonitorContainerInsights for an overview.
         */
        export interface ManagedClusterAzureMonitorProfileLogsResponse {
            /**
             * Application Monitoring Profile for Kubernetes Application Container. Collects application logs, metrics and traces through auto-instrumentation of the application using Azure Monitor OpenTelemetry based SDKs. See aka.ms/AzureMonitorApplicationMonitoring for an overview.
             */
            appMonitoring?: v20230702preview.ManagedClusterAzureMonitorProfileAppMonitoringResponse;
            /**
             * Azure Monitor Container Insights Profile for Kubernetes Events, Inventory and Container stdout & stderr logs etc. See aka.ms/AzureMonitorContainerInsights for an overview.
             */
            containerInsights?: v20230702preview.ManagedClusterAzureMonitorProfileContainerInsightsResponse;
        }

        /**
         * Metrics profile for the prometheus service addon
         */
        export interface ManagedClusterAzureMonitorProfileMetricsResponse {
            /**
             * Application Monitoring Open Telemetry Metrics Profile for Kubernetes Application Container Metrics. Collects OpenTelemetry metrics through auto-instrumentation of the application using Azure Monitor OpenTelemetry based SDKs. See aka.ms/AzureMonitorApplicationMonitoring for an overview.
             */
            appMonitoringOpenTelemetryMetrics?: v20230702preview.ManagedClusterAzureMonitorProfileAppMonitoringOpenTelemetryMetricsResponse;
            /**
             * Whether to enable the Prometheus collector
             */
            enabled: boolean;
            /**
             * Kube State Metrics for prometheus addon profile for the container service cluster
             */
            kubeStateMetrics?: v20230702preview.ManagedClusterAzureMonitorProfileKubeStateMetricsResponse;
        }

        /**
         * Prometheus addon profile for the container service cluster
         */
        export interface ManagedClusterAzureMonitorProfileResponse {
            /**
             * Logs profile for the Azure Monitor Infrastructure and Application Logs. Collect out-of-the-box Kubernetes infrastructure & application logs to send to Azure Monitor. See aka.ms/AzureMonitorContainerInsights for an overview.
             */
            logs?: v20230702preview.ManagedClusterAzureMonitorProfileLogsResponse;
            /**
             * Metrics profile for the prometheus service addon
             */
            metrics?: v20230702preview.ManagedClusterAzureMonitorProfileMetricsResponse;
        }

        /**
         * Windows Host Logs Profile for Kubernetes Windows Nodes Log Collection. Collects ETW, Event Logs and Text logs etc. See aka.ms/AzureMonitorContainerInsights for an overview.
         */
        export interface ManagedClusterAzureMonitorProfileWindowsHostLogsResponse {
            /**
             * Indicates if Windows Host Log Collection is enabled or not for Azure Monitor Container Insights Logs Addon.
             */
            enabled?: boolean;
        }

        /**
         * The cost analysis configuration for the cluster
         */
        export interface ManagedClusterCostAnalysisResponse {
            /**
             * The Managed Cluster sku.tier must be set to 'Standard' to enable this feature. Enabling this will add Kubernetes Namespace and Deployment details to the Cost Analysis views in the Azure portal. If not specified, the default is false. For more information see aka.ms/aks/docs/cost-analysis.
             */
            enabled?: boolean;
        }

        /**
         * Cluster HTTP proxy configuration.
         */
        export interface ManagedClusterHTTPProxyConfigResponse {
            /**
             * A read-only list of all endpoints for which traffic should not be sent to the proxy. This list is a superset of noProxy and values injected by AKS.
             */
            effectiveNoProxy: string[];
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
        }

        /**
         * Identity for the managed cluster.
         */
        export interface ManagedClusterIdentityResponse {
            /**
             * The delegated identity resources assigned to this managed cluster. This can only be set by another Azure Resource Provider, and managed cluster only accept one delegated identity resource. Internal use only.
             */
            delegatedResources?: {[key: string]: v20230702preview.DelegatedResourceResponse};
            /**
             * The principal id of the system assigned identity which is used by master components.
             */
            principalId: string;
            /**
             * The tenant id of the system assigned identity which is used by master components.
             */
            tenantId: string;
            /**
             * For more information see [use managed identities in AKS](https://docs.microsoft.com/azure/aks/use-managed-identity).
             */
            type?: string;
            /**
             * The keys must be ARM resource IDs in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentities?: {[key: string]: v20230702preview.ManagedClusterIdentityResponseUserAssignedIdentities};
        }

        export interface ManagedClusterIdentityResponseUserAssignedIdentities {
            /**
             * The client id of user assigned identity.
             */
            clientId: string;
            /**
             * The principal id of user assigned identity.
             */
            principalId: string;
        }

        /**
         * Ingress profile for the container service cluster.
         */
        export interface ManagedClusterIngressProfileResponse {
            /**
             * Web App Routing settings for the ingress profile.
             */
            webAppRouting?: v20230702preview.ManagedClusterIngressProfileWebAppRoutingResponse;
        }

        /**
         * Web App Routing settings for the ingress profile.
         */
        export interface ManagedClusterIngressProfileWebAppRoutingResponse {
            /**
             * Resource IDs of the public DNS zones to be associated with the Web App Routing add-on. Used only when Web App Routing is enabled. All public DNS zones must be in the same resource group.
             */
            dnsZoneResourceIds?: string[];
            /**
             * Whether to enable Web App Routing.
             */
            enabled?: boolean;
            /**
             * Managed identity of the Web Application Routing add-on. This is the identity that should be granted permissions, for example, to manage the associated Azure DNS resource and get certificates from Azure Key Vault. See [this overview of the add-on](https://learn.microsoft.com/en-us/azure/aks/web-app-routing?tabs=with-osm) for more instructions.
             */
            identity: v20230702preview.UserAssignedIdentityResponse;
        }

        /**
         * Profile of the managed cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileResponse {
            /**
             * The desired number of allocated SNAT ports per VM. Allowed values are in the range of 0 to 64000 (inclusive). The default value is 0 which results in Azure dynamically allocating ports.
             */
            allocatedOutboundPorts?: number;
            /**
             * The type of the managed inbound Load Balancer BackendPool.
             */
            backendPoolType?: string;
            /**
             * The effective outbound IP resources of the cluster load balancer.
             */
            effectiveOutboundIPs?: v20230702preview.ResourceReferenceResponse[];
            /**
             * Enable multiple standard load balancers per AKS cluster or not.
             */
            enableMultipleStandardLoadBalancers?: boolean;
            /**
             * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 30 minutes.
             */
            idleTimeoutInMinutes?: number;
            /**
             * Desired managed outbound IPs for the cluster load balancer.
             */
            managedOutboundIPs?: v20230702preview.ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs;
            /**
             * Desired outbound IP Prefix resources for the cluster load balancer.
             */
            outboundIPPrefixes?: v20230702preview.ManagedClusterLoadBalancerProfileResponseOutboundIPPrefixes;
            /**
             * Desired outbound IP resources for the cluster load balancer.
             */
            outboundIPs?: v20230702preview.ManagedClusterLoadBalancerProfileResponseOutboundIPs;
        }
        /**
         * managedClusterLoadBalancerProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileResponse
         */
        export function managedClusterLoadBalancerProfileResponseProvideDefaults(val: ManagedClusterLoadBalancerProfileResponse): ManagedClusterLoadBalancerProfileResponse {
            return {
                ...val,
                allocatedOutboundPorts: (val.allocatedOutboundPorts) ?? 0,
                backendPoolType: (val.backendPoolType) ?? "NodeIPConfiguration",
                idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 30,
                managedOutboundIPs: (val.managedOutboundIPs ? v20230702preview.managedClusterLoadBalancerProfileResponseManagedOutboundIPsProvideDefaults(val.managedOutboundIPs) : undefined),
            };
        }

        /**
         * Desired managed outbound IPs for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs {
            /**
             * The desired number of IPv4 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1. 
             */
            count?: number;
            /**
             * The desired number of IPv6 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 0 for single-stack and 1 for dual-stack. 
             */
            countIPv6?: number;
        }
        /**
         * managedClusterLoadBalancerProfileResponseManagedOutboundIPsProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs
         */
        export function managedClusterLoadBalancerProfileResponseManagedOutboundIPsProvideDefaults(val: ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs): ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs {
            return {
                ...val,
                count: (val.count) ?? 1,
                countIPv6: (val.countIPv6) ?? 0,
            };
        }

        /**
         * Desired outbound IP Prefix resources for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileResponseOutboundIPPrefixes {
            /**
             * A list of public IP prefix resources.
             */
            publicIPPrefixes?: v20230702preview.ResourceReferenceResponse[];
        }

        /**
         * Desired outbound IP resources for the cluster load balancer.
         */
        export interface ManagedClusterLoadBalancerProfileResponseOutboundIPs {
            /**
             * A list of public IP resources.
             */
            publicIPs?: v20230702preview.ResourceReferenceResponse[];
        }

        /**
         * Profile of the managed outbound IP resources of the managed cluster.
         */
        export interface ManagedClusterManagedOutboundIPProfileResponse {
            /**
             * The desired number of outbound IPs created/managed by Azure. Allowed values must be in the range of 1 to 16 (inclusive). The default value is 1. 
             */
            count?: number;
        }
        /**
         * managedClusterManagedOutboundIPProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterManagedOutboundIPProfileResponse
         */
        export function managedClusterManagedOutboundIPProfileResponseProvideDefaults(val: ManagedClusterManagedOutboundIPProfileResponse): ManagedClusterManagedOutboundIPProfileResponse {
            return {
                ...val,
                count: (val.count) ?? 1,
            };
        }

        /**
         * The metrics profile for the ManagedCluster.
         */
        export interface ManagedClusterMetricsProfileResponse {
            /**
             * The cost analysis configuration for the cluster
             */
            costAnalysis?: v20230702preview.ManagedClusterCostAnalysisResponse;
        }

        /**
         * Profile of the managed cluster NAT gateway.
         */
        export interface ManagedClusterNATGatewayProfileResponse {
            /**
             * The effective outbound IP resources of the cluster NAT gateway.
             */
            effectiveOutboundIPs?: v20230702preview.ResourceReferenceResponse[];
            /**
             * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 4 minutes.
             */
            idleTimeoutInMinutes?: number;
            /**
             * Profile of the managed outbound IP resources of the cluster NAT gateway.
             */
            managedOutboundIPProfile?: v20230702preview.ManagedClusterManagedOutboundIPProfileResponse;
        }
        /**
         * managedClusterNATGatewayProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterNATGatewayProfileResponse
         */
        export function managedClusterNATGatewayProfileResponseProvideDefaults(val: ManagedClusterNATGatewayProfileResponse): ManagedClusterNATGatewayProfileResponse {
            return {
                ...val,
                idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 4,
                managedOutboundIPProfile: (val.managedOutboundIPProfile ? v20230702preview.managedClusterManagedOutboundIPProfileResponseProvideDefaults(val.managedOutboundIPProfile) : undefined),
            };
        }

        /**
         * Node resource group lockdown profile for a managed cluster.
         */
        export interface ManagedClusterNodeResourceGroupProfileResponse {
            /**
             * The restriction level applied to the cluster's node resource group
             */
            restrictionLevel?: string;
        }

        /**
         * The OIDC issuer profile of the Managed Cluster.
         */
        export interface ManagedClusterOIDCIssuerProfileResponse {
            /**
             * Whether the OIDC issuer is enabled.
             */
            enabled?: boolean;
            /**
             * The OIDC issuer url of the Managed Cluster.
             */
            issuerURL: string;
        }

        /**
         * See [disable AAD Pod Identity for a specific Pod/Application](https://azure.github.io/aad-pod-identity/docs/configure/application_exception/) for more details.
         */
        export interface ManagedClusterPodIdentityExceptionResponse {
            /**
             * The name of the pod identity exception.
             */
            name: string;
            /**
             * The namespace of the pod identity exception.
             */
            namespace: string;
            /**
             * The pod labels to match.
             */
            podLabels: {[key: string]: string};
        }

        /**
         * See [use AAD pod identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity) for more details on pod identity integration.
         */
        export interface ManagedClusterPodIdentityProfileResponse {
            /**
             * Running in Kubenet is disabled by default due to the security related nature of AAD Pod Identity and the risks of IP spoofing. See [using Kubenet network plugin with AAD Pod Identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity#using-kubenet-network-plugin-with-azure-active-directory-pod-managed-identities) for more information.
             */
            allowNetworkPluginKubenet?: boolean;
            /**
             * Whether the pod identity addon is enabled.
             */
            enabled?: boolean;
            /**
             * The pod identities to use in the cluster.
             */
            userAssignedIdentities?: v20230702preview.ManagedClusterPodIdentityResponse[];
            /**
             * The pod identity exceptions to allow.
             */
            userAssignedIdentityExceptions?: v20230702preview.ManagedClusterPodIdentityExceptionResponse[];
        }

        /**
         * An error response from the pod identity provisioning.
         */
        export interface ManagedClusterPodIdentityProvisioningErrorBodyResponse {
            /**
             * An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
             */
            code?: string;
            /**
             * A list of additional details about the error.
             */
            details?: v20230702preview.ManagedClusterPodIdentityProvisioningErrorBodyResponse[];
            /**
             * A message describing the error, intended to be suitable for display in a user interface.
             */
            message?: string;
            /**
             * The target of the particular error. For example, the name of the property in error.
             */
            target?: string;
        }

        /**
         * An error response from the pod identity provisioning.
         */
        export interface ManagedClusterPodIdentityProvisioningErrorResponse {
            /**
             * Details about the error.
             */
            error?: v20230702preview.ManagedClusterPodIdentityProvisioningErrorBodyResponse;
        }

        /**
         * Details about the pod identity assigned to the Managed Cluster.
         */
        export interface ManagedClusterPodIdentityResponse {
            /**
             * The binding selector to use for the AzureIdentityBinding resource.
             */
            bindingSelector?: string;
            /**
             * The user assigned identity details.
             */
            identity: v20230702preview.UserAssignedIdentityResponse;
            /**
             * The name of the pod identity.
             */
            name: string;
            /**
             * The namespace of the pod identity.
             */
            namespace: string;
            provisioningInfo: v20230702preview.ManagedClusterPodIdentityResponseProvisioningInfo;
            /**
             * The current provisioning state of the pod identity.
             */
            provisioningState: string;
        }

        export interface ManagedClusterPodIdentityResponseProvisioningInfo {
            /**
             * Pod identity assignment error (if any).
             */
            error?: v20230702preview.ManagedClusterPodIdentityProvisioningErrorResponse;
        }

        /**
         * managed cluster properties for snapshot, these properties are read only.
         */
        export interface ManagedClusterPropertiesForSnapshotResponse {
            /**
             * Whether the cluster has enabled Kubernetes Role-Based Access Control or not.
             */
            enableRbac?: boolean;
            /**
             * The current kubernetes version.
             */
            kubernetesVersion?: string;
            /**
             * The current network profile.
             */
            networkProfile: v20230702preview.NetworkProfileForSnapshotResponse;
            /**
             * The current managed cluster sku.
             */
            sku?: v20230702preview.ManagedClusterSKUResponse;
        }

        /**
         * Parameters to be applied to the cluster-autoscaler when enabled
         */
        export interface ManagedClusterPropertiesResponseAutoScalerProfile {
            /**
             * Valid values are 'true' and 'false'
             */
            balanceSimilarNodeGroups?: string;
            /**
             * If not specified, the default is 'random'. See [expanders](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#what-are-expanders) for more information.
             */
            expander?: string;
            /**
             * The default is 10.
             */
            maxEmptyBulkDelete?: string;
            /**
             * The default is 600.
             */
            maxGracefulTerminationSec?: string;
            /**
             * The default is '15m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            maxNodeProvisionTime?: string;
            /**
             * The default is 45. The maximum is 100 and the minimum is 0.
             */
            maxTotalUnreadyPercentage?: string;
            /**
             * For scenarios like burst/batch scale where you don't want CA to act before the kubernetes scheduler could schedule all the pods, you can tell CA to ignore unscheduled pods before they're a certain age. The default is '0s'. Values must be an integer followed by a unit ('s' for seconds, 'm' for minutes, 'h' for hours, etc).
             */
            newPodScaleUpDelay?: string;
            /**
             * This must be an integer. The default is 3.
             */
            okTotalUnreadyCount?: string;
            /**
             * The default is '10m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownDelayAfterAdd?: string;
            /**
             * The default is the scan-interval. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownDelayAfterDelete?: string;
            /**
             * The default is '3m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownDelayAfterFailure?: string;
            /**
             * The default is '10m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownUnneededTime?: string;
            /**
             * The default is '20m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
             */
            scaleDownUnreadyTime?: string;
            /**
             * The default is '0.5'.
             */
            scaleDownUtilizationThreshold?: string;
            /**
             * The default is '10'. Values must be an integer number of seconds.
             */
            scanInterval?: string;
            /**
             * The default is true.
             */
            skipNodesWithLocalStorage?: string;
            /**
             * The default is true.
             */
            skipNodesWithSystemPods?: string;
        }

        /**
         * The SKU of a Managed Cluster.
         */
        export interface ManagedClusterSKUResponse {
            /**
             * The name of a managed cluster SKU.
             */
            name?: string;
            /**
             * If not specified, the default is 'Free'. See [AKS Pricing Tier](https://learn.microsoft.com/azure/aks/free-standard-pricing-tiers) for more details.
             */
            tier?: string;
        }

        /**
         * Microsoft Defender settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileDefenderResponse {
            /**
             * Resource ID of the Log Analytics workspace to be associated with Microsoft Defender. When Microsoft Defender is enabled, this field is required and must be a valid workspace resource ID. When Microsoft Defender is disabled, leave the field empty.
             */
            logAnalyticsWorkspaceResourceId?: string;
            /**
             * Microsoft Defender threat detection for Cloud settings for the security profile.
             */
            securityMonitoring?: v20230702preview.ManagedClusterSecurityProfileDefenderSecurityMonitoringResponse;
        }

        /**
         * Microsoft Defender settings for the security profile threat detection.
         */
        export interface ManagedClusterSecurityProfileDefenderSecurityMonitoringResponse {
            /**
             * Whether to enable Defender threat detection
             */
            enabled?: boolean;
        }

        /**
         * Image Cleaner removes unused images from nodes, freeing up disk space and helping to reduce attack surface area. Here are settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileImageCleanerResponse {
            /**
             * Whether to enable Image Cleaner on AKS cluster.
             */
            enabled?: boolean;
            /**
             * Image Cleaner scanning interval in hours.
             */
            intervalHours?: number;
        }

        /**
         * Image integrity related settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileImageIntegrityResponse {
            /**
             * Whether to enable image integrity. The default value is false.
             */
            enabled?: boolean;
        }

        /**
         * Node Restriction settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileNodeRestrictionResponse {
            /**
             * Whether to enable Node Restriction
             */
            enabled?: boolean;
        }

        /**
         * Security profile for the container service cluster.
         */
        export interface ManagedClusterSecurityProfileResponse {
            /**
             * Azure Key Vault [key management service](https://kubernetes.io/docs/tasks/administer-cluster/kms-provider/) settings for the security profile.
             */
            azureKeyVaultKms?: v20230702preview.AzureKeyVaultKmsResponse;
            /**
             * A list of up to 10 base64 encoded CAs that will be added to the trust store on nodes with the Custom CA Trust feature enabled. For more information see [Custom CA Trust Certificates](https://learn.microsoft.com/en-us/azure/aks/custom-certificate-authority)
             */
            customCATrustCertificates?: string[];
            /**
             * Microsoft Defender settings for the security profile.
             */
            defender?: v20230702preview.ManagedClusterSecurityProfileDefenderResponse;
            /**
             * Image Cleaner settings for the security profile.
             */
            imageCleaner?: v20230702preview.ManagedClusterSecurityProfileImageCleanerResponse;
            /**
             * Image integrity is a feature that works with Azure Policy to verify image integrity by signature. This will not have any effect unless Azure Policy is applied to enforce image signatures. See https://aka.ms/aks/image-integrity for how to use this feature via policy.
             */
            imageIntegrity?: v20230702preview.ManagedClusterSecurityProfileImageIntegrityResponse;
            /**
             * [Node Restriction](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#noderestriction) settings for the security profile.
             */
            nodeRestriction?: v20230702preview.ManagedClusterSecurityProfileNodeRestrictionResponse;
            /**
             * Workload identity settings for the security profile. Workload identity enables Kubernetes applications to access Azure cloud resources securely with Azure AD. See https://aka.ms/aks/wi for more details.
             */
            workloadIdentity?: v20230702preview.ManagedClusterSecurityProfileWorkloadIdentityResponse;
        }
        /**
         * managedClusterSecurityProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterSecurityProfileResponse
         */
        export function managedClusterSecurityProfileResponseProvideDefaults(val: ManagedClusterSecurityProfileResponse): ManagedClusterSecurityProfileResponse {
            return {
                ...val,
                azureKeyVaultKms: (val.azureKeyVaultKms ? v20230702preview.azureKeyVaultKmsResponseProvideDefaults(val.azureKeyVaultKms) : undefined),
            };
        }

        /**
         * Workload identity settings for the security profile.
         */
        export interface ManagedClusterSecurityProfileWorkloadIdentityResponse {
            /**
             * Whether to enable workload identity.
             */
            enabled?: boolean;
        }

        /**
         * Information about a service principal identity for the cluster to use for manipulating Azure APIs.
         */
        export interface ManagedClusterServicePrincipalProfileResponse {
            /**
             * The ID for the service principal.
             */
            clientId: string;
            /**
             * The secret password associated with the service principal in plain text.
             */
            secret?: string;
        }

        /**
         * AzureBlob CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileBlobCSIDriverResponse {
            /**
             * Whether to enable AzureBlob CSI Driver. The default value is false.
             */
            enabled?: boolean;
        }

        /**
         * AzureDisk CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileDiskCSIDriverResponse {
            /**
             * Whether to enable AzureDisk CSI Driver. The default value is true.
             */
            enabled?: boolean;
            /**
             * The version of AzureDisk CSI Driver. The default value is v1.
             */
            version?: string;
        }

        /**
         * AzureFile CSI Driver settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileFileCSIDriverResponse {
            /**
             * Whether to enable AzureFile CSI Driver. The default value is true.
             */
            enabled?: boolean;
        }

        /**
         * Storage profile for the container service cluster.
         */
        export interface ManagedClusterStorageProfileResponse {
            /**
             * AzureBlob CSI Driver settings for the storage profile.
             */
            blobCSIDriver?: v20230702preview.ManagedClusterStorageProfileBlobCSIDriverResponse;
            /**
             * AzureDisk CSI Driver settings for the storage profile.
             */
            diskCSIDriver?: v20230702preview.ManagedClusterStorageProfileDiskCSIDriverResponse;
            /**
             * AzureFile CSI Driver settings for the storage profile.
             */
            fileCSIDriver?: v20230702preview.ManagedClusterStorageProfileFileCSIDriverResponse;
            /**
             * Snapshot Controller settings for the storage profile.
             */
            snapshotController?: v20230702preview.ManagedClusterStorageProfileSnapshotControllerResponse;
        }

        /**
         * Snapshot Controller settings for the storage profile.
         */
        export interface ManagedClusterStorageProfileSnapshotControllerResponse {
            /**
             * Whether to enable Snapshot Controller. The default value is true.
             */
            enabled?: boolean;
        }

        /**
         * Profile for Windows VMs in the managed cluster.
         */
        export interface ManagedClusterWindowsProfileResponse {
            /**
             * Specifies the password of the administrator account. <br><br> **Minimum-length:** 8 characters <br><br> **Max-length:** 123 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!"
             */
            adminPassword?: string;
            /**
             * Specifies the name of the administrator account. <br><br> **Restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length:** 1 character <br><br> **Max-length:** 20 characters
             */
            adminUsername: string;
            /**
             * For more details on CSI proxy, see the [CSI proxy GitHub repo](https://github.com/kubernetes-csi/csi-proxy).
             */
            enableCSIProxy?: boolean;
            /**
             * The Windows gMSA Profile in the Managed Cluster.
             */
            gmsaProfile?: v20230702preview.WindowsGmsaProfileResponse;
            /**
             * The license type to use for Windows VMs. See [Azure Hybrid User Benefits](https://azure.microsoft.com/pricing/hybrid-benefit/faq/) for more details.
             */
            licenseType?: string;
        }

        /**
         * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
         */
        export interface ManagedClusterWorkloadAutoScalerProfileKedaResponse {
            /**
             * Whether to enable KEDA.
             */
            enabled: boolean;
        }

        /**
         * Workload Auto-scaler profile for the managed cluster.
         */
        export interface ManagedClusterWorkloadAutoScalerProfileResponse {
            /**
             * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
             */
            keda?: v20230702preview.ManagedClusterWorkloadAutoScalerProfileKedaResponse;
            verticalPodAutoscaler?: v20230702preview.ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse;
        }
        /**
         * managedClusterWorkloadAutoScalerProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterWorkloadAutoScalerProfileResponse
         */
        export function managedClusterWorkloadAutoScalerProfileResponseProvideDefaults(val: ManagedClusterWorkloadAutoScalerProfileResponse): ManagedClusterWorkloadAutoScalerProfileResponse {
            return {
                ...val,
                verticalPodAutoscaler: (val.verticalPodAutoscaler ? v20230702preview.managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponseProvideDefaults(val.verticalPodAutoscaler) : undefined),
            };
        }

        export interface ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse {
            /**
             * Whether to enable VPA. Default value is false.
             */
            enabled: boolean;
        }
        /**
         * managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponseProvideDefaults sets the appropriate defaults for ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse
         */
        export function managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponseProvideDefaults(val: ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse): ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse {
            return {
                ...val,
                enabled: (val.enabled) ?? false,
            };
        }

        /**
         * This addon can be used to configure network monitoring and generate network monitoring data in Prometheus format
         */
        export interface NetworkMonitoringResponse {
            /**
             * Enable or disable the network monitoring plugin on the cluster
             */
            enabled?: boolean;
        }

        /**
         * network profile for managed cluster snapshot, these properties are read only.
         */
        export interface NetworkProfileForSnapshotResponse {
            /**
             * loadBalancerSku for managed cluster snapshot.
             */
            loadBalancerSku?: string;
            /**
             * networkMode for managed cluster snapshot.
             */
            networkMode?: string;
            /**
             * networkPlugin for managed cluster snapshot.
             */
            networkPlugin?: string;
            /**
             * NetworkPluginMode for managed cluster snapshot.
             */
            networkPluginMode?: string;
            /**
             * networkPolicy for managed cluster snapshot.
             */
            networkPolicy?: string;
        }

        /**
         * The port range.
         */
        export interface PortRangeResponse {
            /**
             * The maximum port that is included in the range. It should be ranged from 1 to 65535, and be greater than or equal to portStart.
             */
            portEnd?: number;
            /**
             * The minimum port that is included in the range. It should be ranged from 1 to 65535, and be less than or equal to portEnd.
             */
            portStart?: number;
            /**
             * The network protocol of the port.
             */
            protocol?: string;
        }

        /**
         * Describes the Power State of the cluster
         */
        export interface PowerStateResponse {
            /**
             * Tells whether the cluster is Running or Stopped
             */
            code?: string;
        }

        /**
         * Private endpoint which a connection belongs to.
         */
        export interface PrivateEndpointResponse {
            /**
             * The resource ID of the private endpoint
             */
            id?: string;
        }

        /**
         * A private link resource
         */
        export interface PrivateLinkResourceResponse {
            /**
             * The group ID of the resource.
             */
            groupId?: string;
            /**
             * The ID of the private link resource.
             */
            id?: string;
            /**
             * The name of the private link resource.
             */
            name?: string;
            /**
             * The private link service ID of the resource, this field is exposed only to NRP internally.
             */
            privateLinkServiceID: string;
            /**
             * The RequiredMembers of the resource
             */
            requiredMembers?: string[];
            /**
             * The resource type.
             */
            type?: string;
        }

        /**
         * The state of a private link service connection.
         */
        export interface PrivateLinkServiceConnectionStateResponse {
            /**
             * The private link service connection description.
             */
            description?: string;
            /**
             * The private link service connection status.
             */
            status?: string;
        }

        /**
         * For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'.
         */
        export interface RelativeMonthlyScheduleResponse {
            /**
             * Specifies on which day of the week the maintenance occurs.
             */
            dayOfWeek: string;
            /**
             * Specifies the number of months between each set of occurrences.
             */
            intervalMonths: number;
            /**
             * Specifies on which instance of the allowed days specified in daysOfWeek the maintenance occurs.
             */
            weekIndex: string;
        }

        /**
         * A reference to an Azure resource.
         */
        export interface ResourceReferenceResponse {
            /**
             * The fully qualified Azure resource id.
             */
            id?: string;
        }

        /**
         * One and only one of the schedule types should be specified. Choose either 'daily', 'weekly', 'absoluteMonthly' or 'relativeMonthly' for your maintenance schedule.
         */
        export interface ScheduleResponse {
            /**
             * For schedules like: 'recur every month on the 15th' or 'recur every 3 months on the 20th'.
             */
            absoluteMonthly?: v20230702preview.AbsoluteMonthlyScheduleResponse;
            /**
             * For schedules like: 'recur every day' or 'recur every 3 days'.
             */
            daily?: v20230702preview.DailyScheduleResponse;
            /**
             * For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'.
             */
            relativeMonthly?: v20230702preview.RelativeMonthlyScheduleResponse;
            /**
             * For schedules like: 'recur every Monday' or 'recur every 3 weeks on Wednesday'.
             */
            weekly?: v20230702preview.WeeklyScheduleResponse;
        }

        /**
         * Service mesh profile for a managed cluster.
         */
        export interface ServiceMeshProfileResponse {
            /**
             * Istio service mesh configuration.
             */
            istio?: v20230702preview.IstioServiceMeshResponse;
            /**
             * Mode of the service mesh.
             */
            mode: string;
        }

        /**
         * Sysctl settings for Linux agent nodes.
         */
        export interface SysctlConfigResponse {
            /**
             * Sysctl setting fs.aio-max-nr.
             */
            fsAioMaxNr?: number;
            /**
             * Sysctl setting fs.file-max.
             */
            fsFileMax?: number;
            /**
             * Sysctl setting fs.inotify.max_user_watches.
             */
            fsInotifyMaxUserWatches?: number;
            /**
             * Sysctl setting fs.nr_open.
             */
            fsNrOpen?: number;
            /**
             * Sysctl setting kernel.threads-max.
             */
            kernelThreadsMax?: number;
            /**
             * Sysctl setting net.core.netdev_max_backlog.
             */
            netCoreNetdevMaxBacklog?: number;
            /**
             * Sysctl setting net.core.optmem_max.
             */
            netCoreOptmemMax?: number;
            /**
             * Sysctl setting net.core.rmem_default.
             */
            netCoreRmemDefault?: number;
            /**
             * Sysctl setting net.core.rmem_max.
             */
            netCoreRmemMax?: number;
            /**
             * Sysctl setting net.core.somaxconn.
             */
            netCoreSomaxconn?: number;
            /**
             * Sysctl setting net.core.wmem_default.
             */
            netCoreWmemDefault?: number;
            /**
             * Sysctl setting net.core.wmem_max.
             */
            netCoreWmemMax?: number;
            /**
             * Sysctl setting net.ipv4.ip_local_port_range.
             */
            netIpv4IpLocalPortRange?: string;
            /**
             * Sysctl setting net.ipv4.neigh.default.gc_thresh1.
             */
            netIpv4NeighDefaultGcThresh1?: number;
            /**
             * Sysctl setting net.ipv4.neigh.default.gc_thresh2.
             */
            netIpv4NeighDefaultGcThresh2?: number;
            /**
             * Sysctl setting net.ipv4.neigh.default.gc_thresh3.
             */
            netIpv4NeighDefaultGcThresh3?: number;
            /**
             * Sysctl setting net.ipv4.tcp_fin_timeout.
             */
            netIpv4TcpFinTimeout?: number;
            /**
             * Sysctl setting net.ipv4.tcp_keepalive_probes.
             */
            netIpv4TcpKeepaliveProbes?: number;
            /**
             * Sysctl setting net.ipv4.tcp_keepalive_time.
             */
            netIpv4TcpKeepaliveTime?: number;
            /**
             * Sysctl setting net.ipv4.tcp_max_syn_backlog.
             */
            netIpv4TcpMaxSynBacklog?: number;
            /**
             * Sysctl setting net.ipv4.tcp_max_tw_buckets.
             */
            netIpv4TcpMaxTwBuckets?: number;
            /**
             * Sysctl setting net.ipv4.tcp_tw_reuse.
             */
            netIpv4TcpTwReuse?: boolean;
            /**
             * Sysctl setting net.ipv4.tcp_keepalive_intvl.
             */
            netIpv4TcpkeepaliveIntvl?: number;
            /**
             * Sysctl setting net.netfilter.nf_conntrack_buckets.
             */
            netNetfilterNfConntrackBuckets?: number;
            /**
             * Sysctl setting net.netfilter.nf_conntrack_max.
             */
            netNetfilterNfConntrackMax?: number;
            /**
             * Sysctl setting vm.max_map_count.
             */
            vmMaxMapCount?: number;
            /**
             * Sysctl setting vm.swappiness.
             */
            vmSwappiness?: number;
            /**
             * Sysctl setting vm.vfs_cache_pressure.
             */
            vmVfsCachePressure?: number;
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
         * Time in a week.
         */
        export interface TimeInWeekResponse {
            /**
             * The day of the week.
             */
            day?: string;
            /**
             * Each integer hour represents a time range beginning at 0m after the hour ending at the next hour (non-inclusive). 0 corresponds to 00:00 UTC, 23 corresponds to 23:00 UTC. Specifying [0, 1] means the 00:00 - 02:00 UTC time range.
             */
            hourSlots?: number[];
        }

        /**
         * For example, between 2021-05-25T13:00:00Z and 2021-05-25T14:00:00Z.
         */
        export interface TimeSpanResponse {
            /**
             * The end of a time span
             */
            end?: string;
            /**
             * The start of a time span
             */
            start?: string;
        }

        /**
         * Settings for overrides when upgrading a cluster.
         */
        export interface UpgradeOverrideSettingsResponse {
            /**
             * Whether to force upgrade the cluster. Note that this option instructs upgrade operation to bypass upgrade protections such as checking for deprecated API usage. Enable this option only with caution.
             */
            forceUpgrade?: boolean;
            /**
             * Until when the overrides are effective. Note that this only matches the start time of an upgrade, and the effectiveness won't change once an upgrade starts even if the `until` expires as upgrade proceeds. This field is not set by default. It must be set for the overrides to take effect.
             */
            until?: string;
        }

        /**
         * Details about a user assigned identity.
         */
        export interface UserAssignedIdentityResponse {
            /**
             * The client ID of the user assigned identity.
             */
            clientId?: string;
            /**
             * The object ID of the user assigned identity.
             */
            objectId?: string;
            /**
             * The resource ID of the user assigned identity.
             */
            resourceId?: string;
        }

        /**
         * For schedules like: 'recur every Monday' or 'recur every 3 weeks on Wednesday'.
         */
        export interface WeeklyScheduleResponse {
            /**
             * Specifies on which day of the week the maintenance occurs.
             */
            dayOfWeek: string;
            /**
             * Specifies the number of weeks between each set of occurrences.
             */
            intervalWeeks: number;
        }

        /**
         * Windows gMSA Profile in the managed cluster.
         */
        export interface WindowsGmsaProfileResponse {
            /**
             * Specifies the DNS server for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
             */
            dnsServer?: string;
            /**
             * Specifies whether to enable Windows gMSA in the managed cluster.
             */
            enabled?: boolean;
            /**
             * Specifies the root domain name for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
             */
            rootDomainName?: string;
        }

    }
}
