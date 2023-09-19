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

export type AgentPoolMode = (typeof AgentPoolMode)[keyof typeof AgentPoolMode];

export const AgentPoolSSHAccess = {
    /**
     * Can SSH onto the node as a local user using private key.
     */
    LocalUser: "LocalUser",
    /**
     * SSH service will be turned off on the node.
     */
    Disabled: "Disabled",
} as const;

export type AgentPoolSSHAccess = (typeof AgentPoolSSHAccess)[keyof typeof AgentPoolSSHAccess];

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

export type Code = (typeof Code)[keyof typeof Code];

export const ConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

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

export type Expander = (typeof Expander)[keyof typeof Expander];

export const ExtendedLocationTypes = {
    EdgeZone: "EdgeZone",
} as const;

export type ExtendedLocationTypes = (typeof ExtendedLocationTypes)[keyof typeof ExtendedLocationTypes];

export const GPUInstanceProfile = {
    MIG1g: "MIG1g",
    MIG2g: "MIG2g",
    MIG3g: "MIG3g",
    MIG4g: "MIG4g",
    MIG7g: "MIG7g",
} as const;

export type GPUInstanceProfile = (typeof GPUInstanceProfile)[keyof typeof GPUInstanceProfile];

export const IpFamily = {
    /**
     * IPv4 family
     */
    IPv4: "IPv4",
    /**
     * IPv6 family
     */
    IPv6: "IPv6",
} as const;

export type IpFamily = (typeof IpFamily)[keyof typeof IpFamily];

export const IpvsScheduler = {
    /**
     * Round Robin
     */
    RoundRobin: "RoundRobin",
    /**
     * Least Connection
     */
    LeastConnection: "LeastConnection",
} as const;

export type IpvsScheduler = (typeof IpvsScheduler)[keyof typeof IpvsScheduler];

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

export type IstioIngressGatewayMode = (typeof IstioIngressGatewayMode)[keyof typeof IstioIngressGatewayMode];

export const KeyVaultNetworkAccessTypes = {
    Public: "Public",
    Private: "Private",
} as const;

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

export type KubernetesSupportPlan = (typeof KubernetesSupportPlan)[keyof typeof KubernetesSupportPlan];

export const Level = {
    Off: "Off",
    Warning: "Warning",
    Enforcement: "Enforcement",
} as const;

export type Level = (typeof Level)[keyof typeof Level];

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

export type LoadBalancerSku = (typeof LoadBalancerSku)[keyof typeof LoadBalancerSku];

export const ManagedClusterSKUName = {
    /**
     * Base option for the AKS control plane.
     */
    Base: "Base",
} as const;

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

export type ManagedClusterSKUTier = (typeof ManagedClusterSKUTier)[keyof typeof ManagedClusterSKUTier];

export const Mode = {
    /**
     * IPTables proxy mode
     */
    IPTABLES: "IPTABLES",
    /**
     * IPVS proxy mode. Must be using Kubernetes version >= 1.22.
     */
    IPVS: "IPVS",
} as const;

export type Mode = (typeof Mode)[keyof typeof Mode];

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
     * Do not use a network plugin. A custom CNI will need to be installed after cluster creation for networking functionality.
     */
    None: "none",
} as const;

export type NetworkPlugin = (typeof NetworkPlugin)[keyof typeof NetworkPlugin];

export const NetworkPluginMode = {
    /**
     * Pods are given IPs from the PodCIDR address space but use Azure Routing Domains rather than Kubenet reference plugins host-local and bridge.
     */
    Overlay: "overlay",
} as const;

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

export type NetworkPolicy = (typeof NetworkPolicy)[keyof typeof NetworkPolicy];

export const NodeOSUpgradeChannel = {
    /**
     * No attempt to update your machines OS will be made either by OS or by rolling VHDs. This means you are responsible for your security updates
     */
    None: "None",
    /**
     * OS updates will be applied automatically through the OS built-in patching infrastructure. Newly scaled in machines will be unpatched initially, and will be patched at some later time by the OS's infrastructure. Behavior of this option depends on the OS in question. Ubuntu and Mariner apply security patches through unattended upgrade roughly once a day around 06:00 UTC. Windows does not apply security patches automatically and so for them this option is equivalent to None till further notice
     */
    Unmanaged: "Unmanaged",
    /**
     * AKS will update the nodes VHD with patches from the image maintainer labelled "security only" on a regular basis. Where possible, patches will also be applied without reimaging to existing nodes. Some patches, such as kernel patches, cannot be applied to existing nodes without disruption. For such patches, the VHD will be updated, and machines will be rolling reimaged to that VHD following maintenance windows and surge settings. This option incurs the extra cost of hosting the VHDs in your node resource group.
     */
    SecurityPatch: "SecurityPatch",
    /**
     * AKS will update the nodes with a newly patched VHD containing security fixes and bugfixes on a weekly cadence. With the VHD update machines will be rolling reimaged to that VHD following maintenance windows and surge settings. No extra VHD cost is incurred when choosing this option as AKS hosts the images.
     */
    NodeImage: "NodeImage",
} as const;

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

export type OSDiskType = (typeof OSDiskType)[keyof typeof OSDiskType];

export const OSSKU = {
    /**
     * Use Ubuntu as the OS for node images.
     */
    Ubuntu: "Ubuntu",
    /**
     * Deprecated OSSKU. Microsoft recommends that new deployments choose 'AzureLinux' instead.
     */
    Mariner: "Mariner",
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

export type Protocol = (typeof Protocol)[keyof typeof Protocol];

export const PublicNetworkAccess = {
    /**
     * Inbound/Outbound to the managedCluster is allowed.
     */
    Enabled: "Enabled",
    /**
     * Inbound traffic to managedCluster is disabled, traffic from managedCluster is allowed.
     */
    Disabled: "Disabled",
    /**
     * Inbound/Outbound traffic is managed by Microsoft.Network/NetworkSecurityPerimeters.
     */
    SecuredByPerimeter: "SecuredByPerimeter",
} as const;

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

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const RestrictionLevel = {
    /**
     * All RBAC permissions are allowed on the managed node resource group
     */
    Unrestricted: "Unrestricted",
    /**
     * Only *&#47;read RBAC permissions allowed on the managed node resource group
     */
    ReadOnly: "ReadOnly",
} as const;

export type RestrictionLevel = (typeof RestrictionLevel)[keyof typeof RestrictionLevel];

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

export type ServiceMeshMode = (typeof ServiceMeshMode)[keyof typeof ServiceMeshMode];

export const SnapshotType = {
    /**
     * The snapshot is a snapshot of a node pool.
     */
    NodePool: "NodePool",
    /**
     * The snapshot is a snapshot of a managed cluster.
     */
    ManagedCluster: "ManagedCluster",
} as const;

export type SnapshotType = (typeof SnapshotType)[keyof typeof SnapshotType];

export const Type = {
    /**
     * First.
     */
    First: "First",
    /**
     * Second.
     */
    Second: "Second",
    /**
     * Third.
     */
    Third: "Third",
    /**
     * Fourth.
     */
    Fourth: "Fourth",
    /**
     * Last.
     */
    Last: "Last",
} as const;

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
    /**
     * Nodes can use (Kata + Cloud Hypervisor + Hyper-V) to enable Nested VM-based pods (Preview). Due to the use Hyper-V, AKS node OS itself is a nested VM (the root OS) of Hyper-V. Thus it can only be used with VM series that support Nested Virtualization such as Dv3 series.
     */
    KataMshvVmIsolation: "KataMshvVmIsolation",
} as const;

export type WorkloadRuntime = (typeof WorkloadRuntime)[keyof typeof WorkloadRuntime];
