import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
        overrideSettings?: UpgradeOverrideSettingsResponse;
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
     * Istio Service Mesh Certificate Authority (CA) configuration. For now, we only support plugin certificates as described here https://aka.ms/asm-plugin-ca
     */
    export interface IstioCertificateAuthorityResponse {
        /**
         * Plugin certificates information for Service Mesh.
         */
        plugin?: IstioPluginCertificateAuthorityResponse;
    }

    /**
     * Istio components configuration.
     */
    export interface IstioComponentsResponse {
        /**
         * Istio egress gateways.
         */
        egressGateways?: IstioEgressGatewayResponse[];
        /**
         * Istio ingress gateways.
         */
        ingressGateways?: IstioIngressGatewayResponse[];
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
        certificateAuthority?: IstioCertificateAuthorityResponse;
        /**
         * Istio components configuration.
         */
        components?: IstioComponentsResponse;
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
        notAllowedDates?: DateSpanResponse[];
        /**
         * Recurrence schedule for the maintenance window.
         */
        schedule: ScheduleResponse;
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
         * The delegated identity resources assigned to this managed cluster. This can only be set by another Azure Resource Provider, and managed cluster only accept one delegated identity resource. Internal use only.
         */
        delegatedResources?: {[key: string]: DelegatedResourceResponse};
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
        /**
         * VPA (Vertical Pod Autoscaler) settings for the workload auto-scaler profile.
         */
        verticalPodAutoscaler?: ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse;
    }
    /**
     * managedClusterWorkloadAutoScalerProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterWorkloadAutoScalerProfileResponse
     */
    export function managedClusterWorkloadAutoScalerProfileResponseProvideDefaults(val: ManagedClusterWorkloadAutoScalerProfileResponse): ManagedClusterWorkloadAutoScalerProfileResponse {
        return {
            ...val,
            verticalPodAutoscaler: (val.verticalPodAutoscaler ? managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponseProvideDefaults(val.verticalPodAutoscaler) : undefined),
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
        absoluteMonthly?: AbsoluteMonthlyScheduleResponse;
        /**
         * For schedules like: 'recur every day' or 'recur every 3 days'.
         */
        daily?: DailyScheduleResponse;
        /**
         * For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'.
         */
        relativeMonthly?: RelativeMonthlyScheduleResponse;
        /**
         * For schedules like: 'recur every Monday' or 'recur every 3 weeks on Wednesday'.
         */
        weekly?: WeeklyScheduleResponse;
    }

    /**
     * Service mesh profile for a managed cluster.
     */
    export interface ServiceMeshProfileResponse {
        /**
         * Istio service mesh configuration.
         */
        istio?: IstioServiceMeshResponse;
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