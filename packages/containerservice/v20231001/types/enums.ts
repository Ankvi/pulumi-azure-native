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

export const BackendPoolType = {
    /**
     * The type of the managed inbound Load Balancer BackendPool. https://cloud-provider-azure.sigs.k8s.io/topics/loadbalancer/#configure-load-balancer-backend.
     */
    NodeIPConfiguration: "NodeIPConfiguration",
    /**
     * The type of the managed inbound Load Balancer BackendPool. https://cloud-provider-azure.sigs.k8s.io/topics/loadbalancer/#configure-load-balancer-backend.
     */
    NodeIP: "NodeIP",
} as const;

/**
 * The type of the managed inbound Load Balancer BackendPool.
 */
export type BackendPoolType = (typeof BackendPoolType)[keyof typeof BackendPoolType];

export const Code = {
    /**
     * The cluster is running.
     */
    Running: "Running",
    /**
     * The cluster is stopped.
     */
    Stopped: "Stopped",
} as const;

/**
 * Tells whether the cluster is Running or Stopped
 */
export type Code = (typeof Code)[keyof typeof Code];

export const ConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

/**
 * The private link service connection status.
 */
export type ConnectionStatus = (typeof ConnectionStatus)[keyof typeof ConnectionStatus];

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

export const IpFamily = {
    IPv4: "IPv4",
    IPv6: "IPv6",
} as const;

/**
 * The IP version to use for cluster networking and IP assignment.
 */
export type IpFamily = (typeof IpFamily)[keyof typeof IpFamily];

export const IstioIngressGatewayMode = {
    /**
     * The ingress gateway is assigned a public IP address and is publicly accessible.
     */
    External: "External",
    /**
     * The ingress gateway is assigned an internal IP address and cannot is accessed publicly.
     */
    Internal: "Internal",
} as const;

/**
 * Mode of an ingress gateway.
 */
export type IstioIngressGatewayMode = (typeof IstioIngressGatewayMode)[keyof typeof IstioIngressGatewayMode];

export const KeyVaultNetworkAccessTypes = {
    Public: "Public",
    Private: "Private",
} as const;

/**
 * Network access of key vault. The possible values are `Public` and `Private`. `Public` means the key vault allows public access from all networks. `Private` means the key vault disables public access and enables private link. The default value is `Public`.
 */
export type KeyVaultNetworkAccessTypes = (typeof KeyVaultNetworkAccessTypes)[keyof typeof KeyVaultNetworkAccessTypes];

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

export const KubernetesSupportPlan = {
    /**
     * Support for the version is the same as for the open source Kubernetes offering. Official Kubernetes open source community support versions for 1 year after release.
     */
    KubernetesOfficial: "KubernetesOfficial",
    /**
     * Support for the version extended past the KubernetesOfficial support of 1 year. AKS continues to patch CVEs for another 1 year, for a total of 2 years of support.
     */
    AKSLongTermSupport: "AKSLongTermSupport",
} as const;

/**
 * The support plan for the Managed Cluster. If unspecified, the default is 'KubernetesOfficial'.
 */
export type KubernetesSupportPlan = (typeof KubernetesSupportPlan)[keyof typeof KubernetesSupportPlan];

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
    /**
     * Base option for the AKS control plane.
     */
    Base: "Base",
} as const;

/**
 * The name of a managed cluster SKU.
 */
export type ManagedClusterSKUName = (typeof ManagedClusterSKUName)[keyof typeof ManagedClusterSKUName];

export const ManagedClusterSKUTier = {
    /**
     * Cluster has premium capabilities in addition to all of the capabilities included in 'Standard'. Premium enables selection of LongTermSupport (aka.ms/aks/lts) for certain Kubernetes versions.
     */
    Premium: "Premium",
    /**
     * Recommended for mission-critical and production workloads. Includes Kubernetes control plane autoscaling, workload-intensive testing, and up to 5,000 nodes per cluster. Guarantees 99.95% availability of the Kubernetes API server endpoint for clusters that use Availability Zones and 99.9% of availability for clusters that don't use Availability Zones.
     */
    Standard: "Standard",
    /**
     * The cluster management is free, but charged for VM, storage, and networking usage. Best for experimenting, learning, simple testing, or workloads with fewer than 10 nodes. Not recommended for production use cases.
     */
    Free: "Free",
} as const;

/**
 * If not specified, the default is 'Free'. See [AKS Pricing Tier](https://learn.microsoft.com/azure/aks/free-standard-pricing-tiers) for more details.
 */
export type ManagedClusterSKUTier = (typeof ManagedClusterSKUTier)[keyof typeof ManagedClusterSKUTier];

export const NetworkDataplane = {
    /**
     * Use Azure network dataplane.
     */
    Azure: "azure",
    /**
     * Use Cilium network dataplane. See [Azure CNI Powered by Cilium](https://learn.microsoft.com/azure/aks/azure-cni-powered-by-cilium) for more information.
     */
    Cilium: "cilium",
} as const;

/**
 * Network dataplane used in the Kubernetes cluster.
 */
export type NetworkDataplane = (typeof NetworkDataplane)[keyof typeof NetworkDataplane];

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
    /**
     * No CNI plugin is pre-installed. See [BYO CNI](https://docs.microsoft.com/en-us/azure/aks/use-byo-cni) for more information.
     */
    None: "none",
} as const;

/**
 * Network plugin used for building the Kubernetes network.
 */
export type NetworkPlugin = (typeof NetworkPlugin)[keyof typeof NetworkPlugin];

export const NetworkPluginMode = {
    /**
     * Used with networkPlugin=azure, pods are given IPs from the PodCIDR address space but use Azure Routing Domains rather than Kubenet's method of route tables. For more information visit https://aka.ms/aks/azure-cni-overlay.
     */
    Overlay: "overlay",
} as const;

/**
 * The mode the network plugin should use.
 */
export type NetworkPluginMode = (typeof NetworkPluginMode)[keyof typeof NetworkPluginMode];

export const NetworkPolicy = {
    /**
     * Use Calico network policies. See [differences between Azure and Calico policies](https://docs.microsoft.com/azure/aks/use-network-policies#differences-between-azure-and-calico-policies-and-their-capabilities) for more information.
     */
    Calico: "calico",
    /**
     * Use Azure network policies. See [differences between Azure and Calico policies](https://docs.microsoft.com/azure/aks/use-network-policies#differences-between-azure-and-calico-policies-and-their-capabilities) for more information.
     */
    Azure: "azure",
    /**
     * Use Cilium to enforce network policies. This requires networkDataplane to be 'cilium'.
     */
    Cilium: "cilium",
} as const;

/**
 * Network policy used for building the Kubernetes network.
 */
export type NetworkPolicy = (typeof NetworkPolicy)[keyof typeof NetworkPolicy];

export const NodeOSUpgradeChannel = {
    /**
     * No attempt to update your machines OS will be made either by OS or by rolling VHDs. This means you are responsible for your security updates
     */
    None: "None",
    /**
     * OS updates will be applied automatically through the OS built-in patching infrastructure. Newly scaled in machines will be unpatched initially and will be patched at some point by the OS's infrastructure. Behavior of this option depends on the OS in question. Ubuntu and Mariner apply security patches through unattended upgrade roughly once a day around 06:00 UTC. Windows does not apply security patches automatically and so for them this option is equivalent to None till further notice
     */
    Unmanaged: "Unmanaged",
    /**
     * AKS will update the nodes with a newly patched VHD containing security fixes and bugfixes on a weekly cadence. With the VHD update machines will be rolling reimaged to that VHD following maintenance windows and surge settings. No extra VHD cost is incurred when choosing this option as AKS hosts the images.
     */
    NodeImage: "NodeImage",
} as const;

/**
 * Manner in which the OS on your nodes is updated. The default is NodeImage.
 */
export type NodeOSUpgradeChannel = (typeof NodeOSUpgradeChannel)[keyof typeof NodeOSUpgradeChannel];

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
    /**
     * Use Ubuntu as the OS for node images.
     */
    Ubuntu: "Ubuntu",
    /**
     * Use AzureLinux as the OS for node images. Azure Linux is a container-optimized Linux distro built by Microsoft, visit https://aka.ms/azurelinux for more information.
     */
    AzureLinux: "AzureLinux",
    /**
     * Deprecated OSSKU. Microsoft recommends that new deployments choose 'AzureLinux' instead.
     */
    CBLMariner: "CBLMariner",
    /**
     * Use Windows2019 as the OS for node images. Unsupported for system node pools. Windows2019 only supports Windows2019 containers; it cannot run Windows2022 containers and vice versa.
     */
    Windows2019: "Windows2019",
    /**
     * Use Windows2022 as the OS for node images. Unsupported for system node pools. Windows2022 only supports Windows2022 containers; it cannot run Windows2019 containers and vice versa.
     */
    Windows2022: "Windows2022",
} as const;

/**
 * Specifies the OS SKU used by the agent pool. The default is Ubuntu if OSType is Linux. The default is Windows2019 when Kubernetes <= 1.24 or Windows2022 when Kubernetes >= 1.25 if OSType is Windows.
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
    /**
     * The AKS-managed NAT gateway is used for egress.
     */
    ManagedNATGateway: "managedNATGateway",
    /**
     * The user-assigned NAT gateway associated to the cluster subnet is used for egress. This is an advanced scenario and requires proper network configuration.
     */
    UserAssignedNATGateway: "userAssignedNATGateway",
} as const;

/**
 * This can only be set at cluster creation time and cannot be changed later. For more information see [egress outbound type](https://docs.microsoft.com/azure/aks/egress-outboundtype).
 */
export type OutboundType = (typeof OutboundType)[keyof typeof OutboundType];

export const Protocol = {
    /**
     * TCP protocol.
     */
    TCP: "TCP",
    /**
     * UDP protocol.
     */
    UDP: "UDP",
} as const;

/**
 * The network protocol of the port.
 */
export type Protocol = (typeof Protocol)[keyof typeof Protocol];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Allow or deny public network access for AKS
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

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

export const ScaleDownMode = {
    /**
     * Create new instances during scale up and remove instances during scale down.
     */
    Delete: "Delete",
    /**
     * Attempt to start deallocated instances (if they exist) during scale up and deallocate instances during scale down.
     */
    Deallocate: "Deallocate",
} as const;

/**
 * This also effects the cluster autoscaler behavior. If not specified, it defaults to Delete.
 */
export type ScaleDownMode = (typeof ScaleDownMode)[keyof typeof ScaleDownMode];

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

export const ServiceMeshMode = {
    /**
     * Istio deployed as an AKS addon.
     */
    Istio: "Istio",
    /**
     * Mesh is disabled.
     */
    Disabled: "Disabled",
} as const;

/**
 * Mode of the service mesh.
 */
export type ServiceMeshMode = (typeof ServiceMeshMode)[keyof typeof ServiceMeshMode];

export const SnapshotType = {
    /**
     * The snapshot is a snapshot of a node pool.
     */
    NodePool: "NodePool",
} as const;

/**
 * The type of a snapshot. The default is NodePool.
 */
export type SnapshotType = (typeof SnapshotType)[keyof typeof SnapshotType];

export const Type = {
    /**
     * First week of the month.
     */
    First: "First",
    /**
     * Second week of the month.
     */
    Second: "Second",
    /**
     * Third week of the month.
     */
    Third: "Third",
    /**
     * Fourth week of the month.
     */
    Fourth: "Fourth",
    /**
     * Last week of the month.
     */
    Last: "Last",
} as const;

/**
 * Specifies on which week of the month the dayOfWeek applies.
 */
export type Type = (typeof Type)[keyof typeof Type];

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
     * Automatically upgrade the node image to the latest version available. Consider using nodeOSUpgradeChannel instead as that allows you to configure node OS patching separate from Kubernetes version patching
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

export const WeekDay = {
    Sunday: "Sunday",
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
} as const;

/**
 * The day of the week.
 */
export type WeekDay = (typeof WeekDay)[keyof typeof WeekDay];

export const WorkloadRuntime = {
    /**
     * Nodes will use Kubelet to run standard OCI container workloads.
     */
    OCIContainer: "OCIContainer",
    /**
     * Nodes will use Krustlet to run WASM workloads using the WASI provider (Preview).
     */
    WasmWasi: "WasmWasi",
} as const;

/**
 * Determines the type of workload a node can run.
 */
export type WorkloadRuntime = (typeof WorkloadRuntime)[keyof typeof WorkloadRuntime];
