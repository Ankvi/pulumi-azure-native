import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the agent pool in the Hybrid AKS provisioned cluster
 *
 * Uses Azure REST API version 2022-09-01-preview.
 */
export function getAgentPool(args: GetAgentPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetAgentPoolResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcontainerservice:getAgentPool", {
        "agentPoolName": args.agentPoolName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetAgentPoolArgs {
    /**
     * Parameter for the name of the agent pool in the provisioned cluster
     */
    agentPoolName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Parameter for the name of the provisioned cluster
     */
    resourceName: string;
}

/**
 * The agentPool resource definition
 */
export interface GetAgentPoolResult {
    /**
     * AvailabilityZones - The list of Availability zones to use for nodes. Datacenter racks modelled as zones
     */
    readonly availabilityZones?: string[];
    /**
     * The underlying cloud infra provider properties.
     */
    readonly cloudProviderProfile?: types.outputs.CloudProviderProfileResponse;
    /**
     * Count - Number of agents to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
     */
    readonly count?: number;
    readonly extendedLocation?: types.outputs.AgentPoolResponseExtendedLocation;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * The resource location
     */
    readonly location?: string;
    /**
     * The maximum number of nodes for auto-scaling
     */
    readonly maxCount?: number;
    /**
     * The maximum number of pods that can run on a node.
     */
    readonly maxPods?: number;
    /**
     * The minimum number of nodes for auto-scaling
     */
    readonly minCount?: number;
    /**
     * Mode - AgentPoolMode represents mode of an agent pool. Possible values include: 'System', 'LB', 'User'. Default is 'User'
     */
    readonly mode?: string;
    /**
     * Resource Name
     */
    readonly name: string;
    /**
     * The version of node image
     */
    readonly nodeImageVersion?: string;
    /**
     * NodeLabels - Agent pool node labels to be persisted across all nodes in agent pool.
     */
    readonly nodeLabels?: {[key: string]: string};
    /**
     * NodeTaints - Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
     */
    readonly nodeTaints?: string[];
    /**
     * OsType - OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux. Possible values include: 'Linux', 'Windows'
     */
    readonly osType?: string;
    readonly provisioningState: string;
    /**
     * HybridAKSNodePoolStatus defines the observed state of HybridAKSNodePool
     */
    readonly status?: types.outputs.AgentPoolProvisioningStatusResponseStatus;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource Type
     */
    readonly type: string;
    /**
     * VmSize - The size of the agent pool VMs.
     */
    readonly vmSize?: string;
}
/**
 * Gets the agent pool in the Hybrid AKS provisioned cluster
 *
 * Uses Azure REST API version 2022-09-01-preview.
 */
export function getAgentPoolOutput(args: GetAgentPoolOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAgentPoolResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybridcontainerservice:getAgentPool", {
        "agentPoolName": args.agentPoolName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetAgentPoolOutputArgs {
    /**
     * Parameter for the name of the agent pool in the provisioned cluster
     */
    agentPoolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Parameter for the name of the provisioned cluster
     */
    resourceName: pulumi.Input<string>;
}