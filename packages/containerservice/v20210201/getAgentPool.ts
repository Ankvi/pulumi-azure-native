import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the agent pool by managed cluster and resource group.
 */
export function getAgentPool(args: GetAgentPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetAgentPoolResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerservice/v20210201:getAgentPool", {
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
     * The name of the resource group.
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
     * Availability zones for nodes. Must use VirtualMachineScaleSets AgentPoolType.
     */
    readonly availabilityZones?: string[];
    /**
     * Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 100 (inclusive) for user pools and in the range of 1 to 100 (inclusive) for system pools. The default value is 1.
     */
    readonly count?: number;
    /**
     * Whether to enable auto-scaler
     */
    readonly enableAutoScaling?: boolean;
    /**
     * Whether to enable EncryptionAtHost
     */
    readonly enableEncryptionAtHost?: boolean;
    /**
     * Enable public IP for nodes
     */
    readonly enableNodePublicIP?: boolean;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * KubeletConfig specifies the configuration of kubelet on agent nodes.
     */
    readonly kubeletConfig?: types.outputs.KubeletConfigResponse;
    /**
     * KubeletDiskType determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage. Currently allows one value, OS, resulting in Kubelet using the OS disk for data.
     */
    readonly kubeletDiskType?: string;
    /**
     * LinuxOSConfig specifies the OS configuration of linux agent nodes.
     */
    readonly linuxOSConfig?: types.outputs.LinuxOSConfigResponse;
    /**
     * Maximum number of nodes for auto-scaling
     */
    readonly maxCount?: number;
    /**
     * Maximum number of pods that can run on a node.
     */
    readonly maxPods?: number;
    /**
     * Minimum number of nodes for auto-scaling
     */
    readonly minCount?: number;
    /**
     * AgentPoolMode represents mode of an agent pool
     */
    readonly mode?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name: string;
    /**
     * Version of node image
     */
    readonly nodeImageVersion: string;
    /**
     * Agent pool node labels to be persisted across all nodes in agent pool.
     */
    readonly nodeLabels?: {[key: string]: string};
    /**
     * Public IP Prefix ID. VM nodes use IPs assigned from this Public IP Prefix.
     */
    readonly nodePublicIPPrefixID?: string;
    /**
     * Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
     */
    readonly nodeTaints?: string[];
    /**
     * Version of orchestrator specified when creating the managed cluster.
     */
    readonly orchestratorVersion?: string;
    /**
     * OS Disk Size in GB to be used to specify the disk size for every machine in this master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
     */
    readonly osDiskSizeGB?: number;
    /**
     * OS disk type to be used for machines in a given agent pool. Allowed values are 'Ephemeral' and 'Managed'. If unspecified, defaults to 'Ephemeral' when the VM supports ephemeral OS and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation.
     */
    readonly osDiskType?: string;
    /**
     * OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
     */
    readonly osType?: string;
    /**
     * Pod SubnetID specifies the VNet's subnet identifier for pods.
     */
    readonly podSubnetID?: string;
    /**
     * Describes whether the Agent Pool is Running or Stopped
     */
    readonly powerState: types.outputs.PowerStateResponse;
    /**
     * The current deployment or provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * The ID for Proximity Placement Group.
     */
    readonly proximityPlacementGroupID?: string;
    /**
     * ScaleSetEvictionPolicy to be used to specify eviction policy for Spot virtual machine scale set. Default to Delete.
     */
    readonly scaleSetEvictionPolicy?: string;
    /**
     * ScaleSetPriority to be used to specify virtual machine scale set priority. Default to regular.
     */
    readonly scaleSetPriority?: string;
    /**
     * SpotMaxPrice to be used to specify the maximum price you are willing to pay in US Dollars. Possible values are any decimal value greater than zero or -1 which indicates default price to be up-to on-demand.
     */
    readonly spotMaxPrice?: number;
    /**
     * Agent pool tags to be persisted on the agent pool virtual machine scale set.
     */
    readonly tags?: {[key: string]: string};
    /**
     * AgentPoolType represents types of an agent pool
     */
    readonly type: string;
    /**
     * Settings for upgrading the agentpool
     */
    readonly upgradeSettings?: types.outputs.AgentPoolUpgradeSettingsResponse;
    /**
     * Size of agent VMs.
     */
    readonly vmSize?: string;
    /**
     * VNet SubnetID specifies the VNet's subnet identifier for nodes and maybe pods
     */
    readonly vnetSubnetID?: string;
}
/**
 * Gets the details of the agent pool by managed cluster and resource group.
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
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the managed cluster resource.
     */
    resourceName: pulumi.Input<string>;
}