import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Agent Pool.
 */
export function getAgentPool(args: GetAgentPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetAgentPoolResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerservice/v20220402preview:getAgentPool", {
        "agentPoolName": args.agentPoolName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetAgentPoolArgs {
    /**
     * The name of the agent pool.
     */
    agentPoolName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the managed cluster resource.
     */
    resourceName: string;
}

/**
 * Agent Pool.
 */
export interface GetAgentPoolResult {
    /**
     * The list of Availability zones to use for nodes. This can only be specified if the AgentPoolType property is 'VirtualMachineScaleSets'.
     */
    readonly availabilityZones?: string[];
    /**
     * AKS will associate the specified agent pool with the Capacity Reservation Group.
     */
    readonly capacityReservationGroupID?: string;
    /**
     * Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 1000 (inclusive) for user pools and in the range of 1 to 1000 (inclusive) for system pools. The default value is 1.
     */
    readonly count?: number;
    /**
     * CreationData to be used to specify the source Snapshot ID if the node pool will be created/upgraded using a snapshot.
     */
    readonly creationData?: types.outputs.containerservice.v20220402preview.CreationDataResponse;
    /**
     * If orchestratorVersion was a fully specified version <major.minor.patch>, this field will be exactly equal to it. If orchestratorVersion was <major.minor>, this field will contain the full <major.minor.patch> version being used.
     */
    readonly currentOrchestratorVersion?: string;
    /**
     * Whether to enable auto-scaler
     */
    readonly enableAutoScaling?: boolean;
    /**
     * When set to true, AKS deploys a daemonset and host services to sync custom certificate authorities from a user-provided config map into node trust stores. Defaults to false.
     */
    readonly enableCustomCATrust?: boolean;
    /**
     * This is only supported on certain VM sizes and in certain Azure regions. For more information, see: https://docs.microsoft.com/azure/aks/enable-host-encryption
     */
    readonly enableEncryptionAtHost?: boolean;
    /**
     * See [Add a FIPS-enabled node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#add-a-fips-enabled-node-pool-preview) for more details.
     */
    readonly enableFIPS?: boolean;
    /**
     * Some scenarios may require nodes in a node pool to receive their own dedicated public IP addresses. A common scenario is for gaming workloads, where a console needs to make a direct connection to a cloud virtual machine to minimize hops. For more information see [assigning a public IP per node](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#assign-a-public-ip-per-node-for-your-node-pools). The default is false.
     */
    readonly enableNodePublicIP?: boolean;
    /**
     * Whether to enable UltraSSD
     */
    readonly enableUltraSSD?: boolean;
    /**
     * GPUInstanceProfile to be used to specify GPU MIG instance profile for supported GPU VM SKU.
     */
    readonly gpuInstanceProfile?: string;
    /**
     * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}. For more information see [Azure dedicated hosts](https://docs.microsoft.com/azure/virtual-machines/dedicated-hosts).
     */
    readonly hostGroupID?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * The Kubelet configuration on the agent pool nodes.
     */
    readonly kubeletConfig?: types.outputs.containerservice.v20220402preview.KubeletConfigResponse;
    /**
     * Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage.
     */
    readonly kubeletDiskType?: string;
    /**
     * The OS configuration of Linux agent nodes.
     */
    readonly linuxOSConfig?: types.outputs.containerservice.v20220402preview.LinuxOSConfigResponse;
    /**
     * The maximum number of nodes for auto-scaling
     */
    readonly maxCount?: number;
    /**
     * The maximum number of pods that can run on a node.
     */
    readonly maxPods?: number;
    /**
     * A base64-encoded string which will be written to /etc/motd after decoding. This allows customization of the message of the day for Linux nodes. It must not be specified for Windows nodes. It must be a static string (i.e., will be printed raw and not be executed as a script).
     */
    readonly messageOfTheDay?: string;
    /**
     * The minimum number of nodes for auto-scaling
     */
    readonly minCount?: number;
    /**
     * A cluster must have at least one 'System' Agent Pool at all times. For additional information on agent pool restrictions and best practices, see: https://docs.microsoft.com/azure/aks/use-system-pools
     */
    readonly mode?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name: string;
    /**
     * The version of node image
     */
    readonly nodeImageVersion: string;
    /**
     * The node labels to be persisted across all nodes in agent pool.
     */
    readonly nodeLabels?: {[key: string]: string};
    /**
     * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIPPrefixName}
     */
    readonly nodePublicIPPrefixID?: string;
    /**
     * The taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
     */
    readonly nodeTaints?: string[];
    /**
     * Both patch version <major.minor.patch> and <major.minor> are supported. When <major.minor> is specified, the latest supported patch version is chosen automatically. Updating the agent pool with the same <major.minor> once it has been created will not trigger an upgrade, even if a newer patch version is available. As a best practice, you should upgrade all node pools in an AKS cluster to the same Kubernetes version. The node pool version must have the same major version as the control plane. The node pool minor version must be within two minor versions of the control plane version. The node pool version cannot be greater than the control plane version. For more information see [upgrading a node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#upgrade-a-node-pool).
     */
    readonly orchestratorVersion?: string;
    /**
     * OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
     */
    readonly osDiskSizeGB?: number;
    /**
     * The default is 'Ephemeral' if the VM supports it and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation. For more information see [Ephemeral OS](https://docs.microsoft.com/azure/aks/cluster-configuration#ephemeral-os).
     */
    readonly osDiskType?: string;
    /**
     * Specifies the OS SKU used by the agent pool. If not specified, the default is Ubuntu if OSType=Linux or Windows2019 if OSType=Windows. And the default Windows OSSKU will be changed to Windows2022 after Windows2019 is deprecated.
     */
    readonly osSKU?: string;
    /**
     * The operating system type. The default is Linux.
     */
    readonly osType?: string;
    /**
     * If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
     */
    readonly podSubnetID?: string;
    /**
     * When an Agent Pool is first created it is initially Running. The Agent Pool can be stopped by setting this field to Stopped. A stopped Agent Pool stops all of its VMs and does not accrue billing charges. An Agent Pool can only be stopped if it is Running and provisioning state is Succeeded
     */
    readonly powerState?: types.outputs.containerservice.v20220402preview.PowerStateResponse;
    /**
     * The current deployment or provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The ID for Proximity Placement Group.
     */
    readonly proximityPlacementGroupID?: string;
    /**
     * This also effects the cluster autoscaler behavior. If not specified, it defaults to Delete.
     */
    readonly scaleDownMode?: string;
    /**
     * This cannot be specified unless the scaleSetPriority is 'Spot'. If not specified, the default is 'Delete'.
     */
    readonly scaleSetEvictionPolicy?: string;
    /**
     * The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'.
     */
    readonly scaleSetPriority?: string;
    /**
     * Possible values are any decimal value greater than zero or -1 which indicates the willingness to pay any on-demand price. For more details on spot pricing, see [spot VMs pricing](https://docs.microsoft.com/azure/virtual-machines/spot-vms#pricing)
     */
    readonly spotMaxPrice?: number;
    /**
     * The tags to be persisted on the agent pool virtual machine scale set.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * Settings for upgrading the agentpool
     */
    readonly upgradeSettings?: types.outputs.containerservice.v20220402preview.AgentPoolUpgradeSettingsResponse;
    /**
     * VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. For more details on restricted VM sizes, see: https://docs.microsoft.com/azure/aks/quotas-skus-regions
     */
    readonly vmSize?: string;
    /**
     * If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
     */
    readonly vnetSubnetID?: string;
    /**
     * Determines the type of workload a node can run.
     */
    readonly workloadRuntime?: string;
}
/**
 * Agent Pool.
 */
export function getAgentPoolOutput(args: GetAgentPoolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAgentPoolResult> {
    return pulumi.output(args).apply((a: any) => getAgentPool(a, opts))
}

export interface GetAgentPoolOutputArgs {
    /**
     * The name of the agent pool.
     */
    agentPoolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the managed cluster resource.
     */
    resourceName: pulumi.Input<string>;
}
