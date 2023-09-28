export const AgentPoolMode = {
    /**
     * System agent pools are primarily for hosting critical system pods such as CoreDNS and metrics-server. System agent pools osType must be Linux. System agent pools VM SKU must have at least 2vCPUs and 4GB of memory.
     */
    System: "System",
    /**
     * User agent pools are primarily for hosting your application pods.
     */
    User: "User",
} as const;

/**
 * A cluster must have at least one 'System' Agent Pool at all times. For additional information on agent pool restrictions and best practices, see: https://docs.microsoft.com/azure/aks/use-system-pools
 */
export type AgentPoolMode = (typeof AgentPoolMode)[keyof typeof AgentPoolMode];

export const AgentPoolType = {
    /**
     * Create an Agent Pool backed by a Virtual Machine Scale Set.
     */
    VirtualMachineScaleSets: "VirtualMachineScaleSets",
    /**
     * Use of this is strongly discouraged.
     */
    AvailabilitySet: "AvailabilitySet",
} as const;

/**
 * The type of Agent Pool.
 */
export type AgentPoolType = (typeof AgentPoolType)[keyof typeof AgentPoolType];

export const Expander = {
    /**
     * Selects the node group that will have the least idle CPU (if tied, unused memory) after scale-up. This is useful when you have different classes of nodes, for example, high CPU or high memory nodes, and only want to expand those when there are pending pods that need a lot of those resources.
     */
    Least_waste: "least-waste",
    /**
     * Selects the node group that would be able to schedule the most pods when scaling up. This is useful when you are using nodeSelector to make sure certain pods land on certain nodes. Note that this won't cause the autoscaler to select bigger nodes vs. smaller, as it can add multiple smaller nodes at once.
     */
    Most_pods: "most-pods",
    /**
     * Selects the node group that has the highest priority assigned by the user. It's configuration is described in more details [here](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/expander/priority/readme.md).
     */
    Priority: "priority",
    /**
     * Used when you don't have a particular need for the node groups to scale differently.
     */
    Random: "random",
} as const;

/**
 * If not specified, the default is 'random'. See [expanders](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#what-are-expanders) for more information.
 */
export type Expander = (typeof Expander)[keyof typeof Expander];

export const ExtendedLocationTypes = {
    EdgeZone: "EdgeZone",
} as const;

/**
 * The type of the extended location.
 */
export type ExtendedLocationTypes = (typeof ExtendedLocationTypes)[keyof typeof ExtendedLocationTypes];

export const GPUInstanceProfile = {
    MIG1g: "MIG1g",
    MIG2g: "MIG2g",
    MIG3g: "MIG3g",
    MIG4g: "MIG4g",
    MIG7g: "MIG7g",
} as const;

/**
 * GPUInstanceProfile to be used to specify GPU MIG instance profile for supported GPU VM SKU.
 */
export type GPUInstanceProfile = (typeof GPUInstanceProfile)[keyof typeof GPUInstanceProfile];

export const KubeletDiskType = {
    /**
     * Kubelet will use the OS disk for its data.
     */
    OS: "OS",
    /**
     * Kubelet will use the temporary disk for its data.
     */
    Temporary: "Temporary",
} as const;

/**
 * Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage.
 */
export type KubeletDiskType = (typeof KubeletDiskType)[keyof typeof KubeletDiskType];

export const LicenseType = {
    /**
     * No additional licensing is applied.
     */
    None: "None",
    /**
     * Enables Azure Hybrid User Benefits for Windows VMs.
     */
    Windows_Server: "Windows_Server",
} as const;

/**
 * The license type to use for Windows VMs. See [Azure Hybrid User Benefits](https://azure.microsoft.com/pricing/hybrid-benefit/faq/) for more details.
 */
export type LicenseType = (typeof LicenseType)[keyof typeof LicenseType];

export const LoadBalancerSku = {
    /**
     * Use a a standard Load Balancer. This is the recommended Load Balancer SKU. For more information about on working with the load balancer in the managed cluster, see the [standard Load Balancer](https://docs.microsoft.com/azure/aks/load-balancer-standard) article.
     */
    Standard: "standard",
    /**
     * Use a basic Load Balancer with limited functionality.
     */
    Basic: "basic",
} as const;

/**
 * The default is 'standard'. See [Azure Load Balancer SKUs](https://docs.microsoft.com/azure/load-balancer/skus) for more information about the differences between load balancer SKUs.
 */
export type LoadBalancerSku = (typeof LoadBalancerSku)[keyof typeof LoadBalancerSku];

export const ManagedClusterSKUName = {
    Basic: "Basic",
} as const;

/**
 * The name of a managed cluster SKU.
 */
export type ManagedClusterSKUName = (typeof ManagedClusterSKUName)[keyof typeof ManagedClusterSKUName];

export const ManagedClusterSKUTier = {
    /**
     * Guarantees 99.95% availability of the Kubernetes API server endpoint for clusters that use Availability Zones and 99.9% of availability for clusters that don't use Availability Zones.
     */
    Paid: "Paid",
    /**
     * No guaranteed SLA, no additional charges. Free tier clusters have an SLO of 99.5%.
     */
    Free: "Free",
} as const;

/**
 * If not specified, the default is 'Free'. See [uptime SLA](https://docs.microsoft.com/azure/aks/uptime-sla) for more details.
 */
export type ManagedClusterSKUTier = (typeof ManagedClusterSKUTier)[keyof typeof ManagedClusterSKUTier];

export const NetworkMode = {
    /**
     * No bridge is created. Intra-VM Pod to Pod communication is through IP routes created by Azure CNI. See [Transparent Mode](https://docs.microsoft.com/azure/aks/faq#transparent-mode) for more information.
     */
    Transparent: "transparent",
    /**
     * This is no longer supported
     */
    Bridge: "bridge",
} as const;

/**
 * This cannot be specified if networkPlugin is anything other than 'azure'.
 */
export type NetworkMode = (typeof NetworkMode)[keyof typeof NetworkMode];

export const NetworkPlugin = {
    /**
     * Use the Azure CNI network plugin. See [Azure CNI (advanced) networking](https://docs.microsoft.com/azure/aks/concepts-network#azure-cni-advanced-networking) for more information.
     */
    Azure: "azure",
    /**
     * Use the Kubenet network plugin. See [Kubenet (basic) networking](https://docs.microsoft.com/azure/aks/concepts-network#kubenet-basic-networking) for more information.
     */
    Kubenet: "kubenet",
} as const;

/**
 * Network plugin used for building the Kubernetes network.
 */
export type NetworkPlugin = (typeof NetworkPlugin)[keyof typeof NetworkPlugin];

export const NetworkPolicy = {
    /**
     * Use Calico network policies. See [differences between Azure and Calico policies](https://docs.microsoft.com/azure/aks/use-network-policies#differences-between-azure-and-calico-policies-and-their-capabilities) for more information.
     */
    Calico: "calico",
    /**
     * Use Azure network policies. See [differences between Azure and Calico policies](https://docs.microsoft.com/azure/aks/use-network-policies#differences-between-azure-and-calico-policies-and-their-capabilities) for more information.
     */
    Azure: "azure",
} as const;

/**
 * Network policy used for building the Kubernetes network.
 */
export type NetworkPolicy = (typeof NetworkPolicy)[keyof typeof NetworkPolicy];

export const OSDiskType = {
    /**
     * Azure replicates the operating system disk for a virtual machine to Azure storage to avoid data loss should the VM need to be relocated to another host. Since containers aren't designed to have local state persisted, this behavior offers limited value while providing some drawbacks, including slower node provisioning and higher read/write latency.
     */
    Managed: "Managed",
    /**
     * Ephemeral OS disks are stored only on the host machine, just like a temporary disk. This provides lower read/write latency, along with faster node scaling and cluster upgrades.
     */
    Ephemeral: "Ephemeral",
} as const;

/**
 * The default is 'Ephemeral' if the VM supports it and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation. For more information see [Ephemeral OS](https://docs.microsoft.com/azure/aks/cluster-configuration#ephemeral-os).
 */
export type OSDiskType = (typeof OSDiskType)[keyof typeof OSDiskType];

export const OSSKU = {
    Ubuntu: "Ubuntu",
    CBLMariner: "CBLMariner",
} as const;

/**
 * Specifies an OS SKU. This value must not be specified if OSType is Windows.
 */
export type OSSKU = (typeof OSSKU)[keyof typeof OSSKU];

export const OSType = {
    /**
     * Use Linux.
     */
    Linux: "Linux",
    /**
     * Use Windows.
     */
    Windows: "Windows",
} as const;

/**
 * The operating system type. The default is Linux.
 */
export type OSType = (typeof OSType)[keyof typeof OSType];

export const OutboundType = {
    /**
     * The load balancer is used for egress through an AKS assigned public IP. This supports Kubernetes services of type 'loadBalancer'. For more information see [outbound type loadbalancer](https://docs.microsoft.com/azure/aks/egress-outboundtype#outbound-type-of-loadbalancer).
     */
    LoadBalancer: "loadBalancer",
    /**
     * Egress paths must be defined by the user. This is an advanced scenario and requires proper network configuration. For more information see [outbound type userDefinedRouting](https://docs.microsoft.com/azure/aks/egress-outboundtype#outbound-type-of-userdefinedrouting).
     */
    UserDefinedRouting: "userDefinedRouting",
} as const;

/**
 * This can only be set at cluster creation time and cannot be changed later. For more information see [egress outbound type](https://docs.microsoft.com/azure/aks/egress-outboundtype).
 */
export type OutboundType = (typeof OutboundType)[keyof typeof OutboundType];

export const ResourceIdentityType = {
    /**
     * Use an implicitly created system assigned managed identity to manage cluster resources. Master components in the control plane such as kube-controller-manager will use the system assigned managed identity to manipulate Azure resources.
     */
    SystemAssigned: "SystemAssigned",
    /**
     * Use a user-specified identity to manage cluster resources. Master components in the control plane such as kube-controller-manager will use the specified user assigned managed identity to manipulate Azure resources.
     */
    UserAssigned: "UserAssigned",
    /**
     * Do not use a managed identity for the Managed Cluster, service principal will be used instead.
     */
    None: "None",
} as const;

/**
 * For more information see [use managed identities in AKS](https://docs.microsoft.com/azure/aks/use-managed-identity).
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const ScaleSetEvictionPolicy = {
    /**
     * Nodes in the underlying Scale Set of the node pool are deleted when they're evicted.
     */
    Delete: "Delete",
    /**
     * Nodes in the underlying Scale Set of the node pool are set to the stopped-deallocated state upon eviction. Nodes in the stopped-deallocated state count against your compute quota and can cause issues with cluster scaling or upgrading.
     */
    Deallocate: "Deallocate",
} as const;

/**
 * This cannot be specified unless the scaleSetPriority is 'Spot'. If not specified, the default is 'Delete'.
 */
export type ScaleSetEvictionPolicy = (typeof ScaleSetEvictionPolicy)[keyof typeof ScaleSetEvictionPolicy];

export const ScaleSetPriority = {
    /**
     * Spot priority VMs will be used. There is no SLA for spot nodes. See [spot on AKS](https://docs.microsoft.com/azure/aks/spot-node-pool) for more information.
     */
    Spot: "Spot",
    /**
     * Regular VMs will be used.
     */
    Regular: "Regular",
} as const;

/**
 * The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'.
 */
export type ScaleSetPriority = (typeof ScaleSetPriority)[keyof typeof ScaleSetPriority];

export const UpgradeChannel = {
    /**
     * Automatically upgrade the cluster to the latest supported patch release on the latest supported minor version. In cases where the cluster is at a version of Kubernetes that is at an N-2 minor version where N is the latest supported minor version, the cluster first upgrades to the latest supported patch version on N-1 minor version. For example, if a cluster is running version 1.17.7 and versions 1.17.9, 1.18.4, 1.18.6, and 1.19.1 are available, your cluster first is upgraded to 1.18.6, then is upgraded to 1.19.1.
     */
    Rapid: "rapid",
    /**
     * Automatically upgrade the cluster to the latest supported patch release on minor version N-1, where N is the latest supported minor version. For example, if a cluster is running version 1.17.7 and versions 1.17.9, 1.18.4, 1.18.6, and 1.19.1 are available, your cluster is upgraded to 1.18.6.
     */
    Stable: "stable",
    /**
     * Automatically upgrade the cluster to the latest supported patch version when it becomes available while keeping the minor version the same. For example, if a cluster is running version 1.17.7 and versions 1.17.9, 1.18.4, 1.18.6, and 1.19.1 are available, your cluster is upgraded to 1.17.9.
     */
    Patch: "patch",
    /**
     * Automatically upgrade the node image to the latest version available. Microsoft provides patches and new images for image nodes frequently (usually weekly), but your running nodes won't get the new images unless you do a node image upgrade. Turning on the node-image channel will automatically update your node images whenever a new version is available.
     */
    Node_image: "node-image",
    /**
     * Disables auto-upgrades and keeps the cluster at its current version of Kubernetes.
     */
    None: "none",
} as const;

/**
 * For more information see [setting the AKS cluster auto-upgrade channel](https://docs.microsoft.com/azure/aks/upgrade-cluster#set-auto-upgrade-channel).
 */
export type UpgradeChannel = (typeof UpgradeChannel)[keyof typeof UpgradeChannel];
