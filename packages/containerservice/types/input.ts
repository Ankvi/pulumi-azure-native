import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
 * Advanced Networking profile for enabling observability and security feature suite on a cluster. For more information see aka.ms/aksadvancednetworking.
 */
export interface AdvancedNetworkingArgs {
    /**
     * Indicates the enablement of Advanced Networking functionalities of observability and security on AKS clusters. When this is set to true, all observability and security features will be set to enabled unless explicitly disabled. If not specified, the default is false.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Observability profile to enable advanced network metrics and flow logs with historical contexts.
     */
    observability?: pulumi.Input<AdvancedNetworkingObservabilityArgs>;
    /**
     * Security profile to enable security features on cilium based cluster.
     */
    security?: pulumi.Input<AdvancedNetworkingSecurityArgs>;
}

/**
 * Observability profile to enable advanced network metrics and flow logs with historical contexts.
 */
export interface AdvancedNetworkingObservabilityArgs {
    /**
     * Indicates the enablement of Advanced Networking observability functionalities on clusters.
     */
    enabled?: pulumi.Input<boolean>;
}

/**
 * Security profile to enable security features on cilium based cluster.
 */
export interface AdvancedNetworkingSecurityArgs {
    /**
     * This feature allows user to configure network policy based on DNS (FQDN) names. It can be enabled only on cilium based clusters. If not specified, the default is false.
     */
    enabled?: pulumi.Input<boolean>;
}

/**
 * Network settings of an agent pool.
 */
export interface AgentPoolNetworkProfileArgs {
    /**
     * The port ranges that are allowed to access. The specified ranges are allowed to overlap.
     */
    allowedHostPorts?: pulumi.Input<pulumi.Input<PortRangeArgs>[]>;
    /**
     * The IDs of the application security groups which agent pool will associate when created.
     */
    applicationSecurityGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * IPTags of instance-level public IPs.
     */
    nodePublicIPTags?: pulumi.Input<pulumi.Input<IPTagArgs>[]>;
}

/**
 * The security settings of an agent pool.
 */
export interface AgentPoolSecurityProfileArgs {
    /**
     * Secure Boot is a feature of Trusted Launch which ensures that only signed operating systems and drivers can boot. For more details, see aka.ms/aks/trustedlaunch.  If not specified, the default is false.
     */
    enableSecureBoot?: pulumi.Input<boolean>;
    /**
     * vTPM is a Trusted Launch feature for configuring a dedicated secure vault for keys and measurements held locally on the node. For more details, see aka.ms/aks/trustedlaunch. If not specified, the default is false.
     */
    enableVTPM?: pulumi.Input<boolean>;
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
     * This can either be set to an integer (e.g. '5') or a percentage (e.g. '50%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified, the default is 10%. For more information, including best practices, see: https://docs.microsoft.com/azure/aks/upgrade-cluster#customize-node-surge-upgrade
     */
    maxSurge?: pulumi.Input<string>;
    /**
     * The amount of time (in minutes) to wait after draining a node and before reimaging it and moving on to next node. If not specified, the default is 0 minutes.
     */
    nodeSoakDurationInMinutes?: pulumi.Input<number>;
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
 * Agent profile for the Fleet hub.
 */
export interface AgentProfileArgs {
    /**
     * The ID of the subnet which the Fleet hub node will join on startup. If this is not specified, a vnet and subnet will be generated and used.
     */
    subnetId?: pulumi.Input<string>;
    /**
     * The virtual machine size of the Fleet hub.
     */
    vmSize?: pulumi.Input<string>;
}

/**
 * The node image upgrade to be applied to the target clusters in auto upgrade.
 */
export interface AutoUpgradeNodeImageSelectionArgs {
    /**
     * The node image upgrade type.
     */
    type: pulumi.Input<string | enums.AutoUpgradeNodeImageSelectionType>;
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
 * Settings for upgrading a cluster.
 */
export interface ClusterUpgradeSettingsArgs {
    /**
     * Settings for overrides.
     */
    overrideSettings?: pulumi.Input<UpgradeOverrideSettingsArgs>;
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
     * Advanced Networking profile for enabling observability and security feature suite on a cluster. For more information see aka.ms/aksadvancednetworking.
     */
    advancedNetworking?: pulumi.Input<AdvancedNetworkingArgs>;
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
    type?: pulumi.Input<string | enums.ExtendedLocationTypes>;
}

/**
 * The FleetHubProfile configures the fleet hub.
 */
export interface FleetHubProfileArgs {
    /**
     * The agent profile for the Fleet hub.
     */
    agentProfile?: pulumi.Input<AgentProfileArgs>;
    /**
     * The access profile for the Fleet hub API server.
     */
    apiServerAccessProfile?: pulumi.Input<APIServerAccessProfileArgs>;
    /**
     * DNS prefix used to create the FQDN for the Fleet hub.
     */
    dnsPrefix?: pulumi.Input<string>;
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
    plugin?: pulumi.Input<IstioPluginCertificateAuthorityArgs>;
}

/**
 * Istio components configuration.
 */
export interface IstioComponentsArgs {
    /**
     * Istio egress gateways.
     */
    egressGateways?: pulumi.Input<pulumi.Input<IstioEgressGatewayArgs>[]>;
    /**
     * Istio ingress gateways.
     */
    ingressGateways?: pulumi.Input<pulumi.Input<IstioIngressGatewayArgs>[]>;
}

/**
 * Istio egress gateway configuration.
 */
export interface IstioEgressGatewayArgs {
    /**
     * Whether to enable the egress gateway.
     */
    enabled: pulumi.Input<boolean>;
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
    mode: pulumi.Input<string | enums.IstioIngressGatewayMode>;
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
    certificateAuthority?: pulumi.Input<IstioCertificateAuthorityArgs>;
    /**
     * Istio components configuration.
     */
    components?: pulumi.Input<IstioComponentsArgs>;
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
 * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
 */
export interface LabelSelectorArgs {
    /**
     * matchExpressions is a list of label selector requirements. The requirements are ANDed.
     */
    matchExpressions?: pulumi.Input<pulumi.Input<LabelSelectorRequirementArgs>[]>;
    /**
     * matchLabels is an array of {key=value} pairs. A single {key=value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is `key`, the operator is `In`, and the values array contains only `value`. The requirements are ANDed.
     */
    matchLabels?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 */
export interface LabelSelectorRequirementArgs {
    /**
     * key is the label key that the selector applies to.
     */
    key?: pulumi.Input<string>;
    /**
     * operator represents a key's relationship to a set of values. Valid operators are In and NotIn
     */
    operator?: pulumi.Input<string | enums.Operator>;
    /**
     * values is an array of string values, the values array must be non-empty.
     */
    values?: pulumi.Input<pulumi.Input<string>[]>;
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
    notAllowedDates?: pulumi.Input<pulumi.Input<DateSpanArgs>[]>;
    /**
     * Recurrence schedule for the maintenance window.
     */
    schedule: pulumi.Input<ScheduleArgs>;
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
    mode?: pulumi.Input<string | enums.AgentPoolMode>;
    /**
     * Windows agent pool names must be 6 characters or less.
     */
    name: pulumi.Input<string>;
    /**
     * Network-related settings of an agent pool.
     */
    networkProfile?: pulumi.Input<AgentPoolNetworkProfileArgs>;
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
     * The security settings of an agent pool.
     */
    securityProfile?: pulumi.Input<AgentPoolSecurityProfileArgs>;
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
     * VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. If this field is not specified, AKS will attempt to find an appropriate VM SKU for your pool, based on quota and capacity. For more details on restricted VM sizes, see: https://docs.microsoft.com/azure/aks/quotas-skus-regions
     */
    vmSize?: pulumi.Input<string>;
    /**
     * If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
     */
    vnetSubnetID?: pulumi.Input<string>;
    /**
     * The Windows agent pool's specific profile.
     */
    windowsProfile?: pulumi.Input<AgentPoolWindowsProfileArgs>;
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
     * Manner in which the OS on your nodes is updated. The default is NodeImage.
     */
    nodeOSUpgradeChannel?: pulumi.Input<string | enums.NodeOSUpgradeChannel>;
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
 * The cost analysis configuration for the cluster
 */
export interface ManagedClusterCostAnalysisArgs {
    /**
     * The Managed Cluster sku.tier must be set to 'Standard' or 'Premium' to enable this feature. Enabling this will add Kubernetes Namespace and Deployment details to the Cost Analysis views in the Azure portal. If not specified, the default is false. For more information see aka.ms/aks/docs/cost-analysis.
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
    delegatedResources?: pulumi.Input<{[key: string]: pulumi.Input<DelegatedResourceArgs>}>;
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
 * Ingress profile for the container service cluster.
 */
export interface ManagedClusterIngressProfileArgs {
    /**
     * App Routing settings for the ingress profile. You can find an overview and onboarding guide for this feature at https://learn.microsoft.com/en-us/azure/aks/app-routing?tabs=default%2Cdeploy-app-default.
     */
    webAppRouting?: pulumi.Input<ManagedClusterIngressProfileWebAppRoutingArgs>;
}

/**
 * Application Routing add-on settings for the ingress profile.
 */
export interface ManagedClusterIngressProfileWebAppRoutingArgs {
    /**
     * Resource IDs of the DNS zones to be associated with the Application Routing add-on. Used only when Application Routing add-on is enabled. Public and private DNS zones can be in different resource groups, but all public DNS zones must be in the same resource group and all private DNS zones must be in the same resource group.
     */
    dnsZoneResourceIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether to enable the Application Routing add-on.
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
    backendPoolType?: pulumi.Input<string | enums.BackendPoolType>;
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
        backendPoolType: (val.backendPoolType) ?? "NodeIPConfiguration",
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
 * The metrics profile for the ManagedCluster.
 */
export interface ManagedClusterMetricsProfileArgs {
    /**
     * The cost analysis configuration for the cluster
     */
    costAnalysis?: pulumi.Input<ManagedClusterCostAnalysisArgs>;
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
 * Node resource group lockdown profile for a managed cluster.
 */
export interface ManagedClusterNodeResourceGroupProfileArgs {
    /**
     * The restriction level applied to the cluster's node resource group. If not specified, the default is 'Unrestricted'
     */
    restrictionLevel?: pulumi.Input<string | enums.RestrictionLevel>;
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
     * If set to true, all daemonset pods on empty nodes will be evicted before deletion of the node. If the daemonset pod cannot be evicted another node will be chosen for scaling. If set to false, the node will be deleted without ensuring that daemonset pods are deleted or evicted.
     */
    daemonsetEvictionForEmptyNodes?: pulumi.Input<boolean>;
    /**
     * If set to true, all daemonset pods on occupied nodes will be evicted before deletion of the node. If the daemonset pod cannot be evicted another node will be chosen for scaling. If set to false, the node will be deleted without ensuring that daemonset pods are deleted or evicted.
     */
    daemonsetEvictionForOccupiedNodes?: pulumi.Input<boolean>;
    /**
     * If not specified, the default is 'random'. See [expanders](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#what-are-expanders) for more information.
     */
    expander?: pulumi.Input<string | enums.Expander>;
    /**
     * If set to true, the resources used by daemonset will be taken into account when making scaling down decisions.
     */
    ignoreDaemonsetsUtilization?: pulumi.Input<boolean>;
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
     * The node image upgrade to be applied to the target nodes in update run.
     */
    nodeImageSelection?: pulumi.Input<NodeImageSelectionArgs>;
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
     * ManagedClusterUpgradeType is the type of upgrade to be applied.
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
    /**
     * VPA (Vertical Pod Autoscaler) settings for the workload auto-scaler profile.
     */
    verticalPodAutoscaler?: pulumi.Input<ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs>;
}
/**
 * managedClusterWorkloadAutoScalerProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterWorkloadAutoScalerProfileArgs
 */
export function managedClusterWorkloadAutoScalerProfileArgsProvideDefaults(val: ManagedClusterWorkloadAutoScalerProfileArgs): ManagedClusterWorkloadAutoScalerProfileArgs {
    return {
        ...val,
        verticalPodAutoscaler: (val.verticalPodAutoscaler ? pulumi.output(val.verticalPodAutoscaler).apply(managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgsProvideDefaults) : undefined),
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
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Properties of a namespace managed by ARM
 */
export interface NamespacePropertiesArgs {
    /**
     * Action if Kubernetes namespace with same name already exists.
     */
    adoptionPolicy?: pulumi.Input<string | enums.AdoptionPolicy>;
    /**
     * The annotations of managed namespace.
     */
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The default network policy enforced upon the namespace. Customers can have other Kubernetes network policy objects under the namespace. All the network policies will be enforced.
     */
    defaultNetworkPolicy?: pulumi.Input<NetworkPoliciesArgs>;
    /**
     * The default resource quota enforced upon the namespace. Customers can have other Kubernetes resource quota objects under the namespace. All the resource quotas will be enforced.
     */
    defaultResourceQuota?: pulumi.Input<ResourceQuotaArgs>;
    /**
     * Delete options of a namespace.
     */
    deletePolicy?: pulumi.Input<string | enums.DeletePolicy>;
    /**
     * The labels of managed namespace.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
/**
 * namespacePropertiesArgsProvideDefaults sets the appropriate defaults for NamespacePropertiesArgs
 */
export function namespacePropertiesArgsProvideDefaults(val: NamespacePropertiesArgs): NamespacePropertiesArgs {
    return {
        ...val,
        defaultNetworkPolicy: (val.defaultNetworkPolicy ? pulumi.output(val.defaultNetworkPolicy).apply(networkPoliciesArgsProvideDefaults) : undefined),
    };
}

/**
 * Default network policy of the namespace, specifying ingress and egress rules.
 */
export interface NetworkPoliciesArgs {
    /**
     * Egress policy for the network.
     */
    egress?: pulumi.Input<string | enums.PolicyRule>;
    /**
     * Ingress policy for the network.
     */
    ingress?: pulumi.Input<string | enums.PolicyRule>;
}
/**
 * networkPoliciesArgsProvideDefaults sets the appropriate defaults for NetworkPoliciesArgs
 */
export function networkPoliciesArgsProvideDefaults(val: NetworkPoliciesArgs): NetworkPoliciesArgs {
    return {
        ...val,
        egress: (val.egress) ?? "AllowAll",
        ingress: (val.ingress) ?? "AllowSameNamespace",
    };
}

/**
 * The node image upgrade to be applied to the target nodes in update run.
 */
export interface NodeImageSelectionArgs {
    /**
     * The node image upgrade type.
     */
    type: pulumi.Input<string | enums.NodeImageSelectionType>;
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
    protocol?: pulumi.Input<string | enums.Protocol>;
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
 * For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'.
 */
export interface RelativeMonthlyScheduleArgs {
    /**
     * Specifies on which day of the week the maintenance occurs.
     */
    dayOfWeek: pulumi.Input<string | enums.WeekDay>;
    /**
     * Specifies the number of months between each set of occurrences.
     */
    intervalMonths: pulumi.Input<number>;
    /**
     * Specifies on which week of the month the dayOfWeek applies.
     */
    weekIndex: pulumi.Input<string | enums.Type>;
}

/**
 * Resource quota for the namespace.
 */
export interface ResourceQuotaArgs {
    /**
     * CPU limit of the namespace in one-thousandth CPU form. See [CPU resource units](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-cpu) for more details.
     */
    cpuLimit?: pulumi.Input<string>;
    /**
     * CPU request of the namespace in one-thousandth CPU form. See [CPU resource units](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-cpu) for more details.
     */
    cpuRequest?: pulumi.Input<string>;
    /**
     * Memory limit of the namespace in the power-of-two equivalents form: Ei, Pi, Ti, Gi, Mi, Ki. See [Memory resource units](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-memory) for more details.
     */
    memoryLimit?: pulumi.Input<string>;
    /**
     * Memory request of the namespace in the power-of-two equivalents form: Ei, Pi, Ti, Gi, Mi, Ki. See [Memory resource units](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-memory) for more details.
     */
    memoryRequest?: pulumi.Input<string>;
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
    absoluteMonthly?: pulumi.Input<AbsoluteMonthlyScheduleArgs>;
    /**
     * For schedules like: 'recur every day' or 'recur every 3 days'.
     */
    daily?: pulumi.Input<DailyScheduleArgs>;
    /**
     * For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'.
     */
    relativeMonthly?: pulumi.Input<RelativeMonthlyScheduleArgs>;
    /**
     * For schedules like: 'recur every Monday' or 'recur every 3 weeks on Wednesday'.
     */
    weekly?: pulumi.Input<WeeklyScheduleArgs>;
}

/**
 * Service mesh profile for a managed cluster.
 */
export interface ServiceMeshProfileArgs {
    /**
     * Istio service mesh configuration.
     */
    istio?: pulumi.Input<IstioServiceMeshArgs>;
    /**
     * Mode of the service mesh.
     */
    mode: pulumi.Input<string | enums.ServiceMeshMode>;
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
     * Name of the group.
     * It must match a group name of an existing fleet member. 
     */
    name: pulumi.Input<string>;
}

/**
 * Defines the update sequence of the clusters via stages and groups.
 *
 * Stages within a run are executed sequentially one after another.
 * Groups within a stage are executed in parallel.
 * Member clusters within a group are updated sequentially one after another.
 *
 * A valid strategy contains no duplicate groups within or across stages.
 */
export interface UpdateRunStrategyArgs {
    /**
     * The list of stages that compose this update run. Min size: 1.
     */
    stages: pulumi.Input<pulumi.Input<UpdateStageArgs>[]>;
}

/**
 * Defines a stage which contains the groups to update and the steps to take (e.g., wait for a time period) before starting the next stage.
 */
export interface UpdateStageArgs {
    /**
     * The time in seconds to wait at the end of this stage before starting the next one. Defaults to 0 seconds if unspecified.
     */
    afterStageWaitInSeconds?: pulumi.Input<number>;
    /**
     * Defines the groups to be executed in parallel in this stage. Duplicate groups are not allowed. Min size: 1.
     */
    groups?: pulumi.Input<pulumi.Input<UpdateGroupArgs>[]>;
    /**
     * The name of the stage. Must be unique within the UpdateRun.
     */
    name: pulumi.Input<string>;
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
    dayOfWeek: pulumi.Input<string | enums.WeekDay>;
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
