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

export const GPUInstanceProfile = {
    MIG1g: "MIG1g",
    MIG2g: "MIG2g",
    MIG3g: "MIG3g",
    MIG4g: "MIG4g",
    MIG7g: "MIG7g",
} as const;

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

export type KubeletDiskType = (typeof KubeletDiskType)[keyof typeof KubeletDiskType];

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
    Ubuntu: "Ubuntu",
    CBLMariner: "CBLMariner",
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

export type WorkloadRuntime = (typeof WorkloadRuntime)[keyof typeof WorkloadRuntime];