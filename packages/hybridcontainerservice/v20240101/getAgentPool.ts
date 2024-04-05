import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified agent pool in the provisioned cluster
 */
export function getAgentPool(args: GetAgentPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetAgentPoolResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcontainerservice/v20240101:getAgentPool", {
        "agentPoolName": args.agentPoolName,
        "connectedClusterResourceUri": args.connectedClusterResourceUri,
    }, opts);
}

export interface GetAgentPoolArgs {
    /**
     * Parameter for the name of the agent pool in the provisioned cluster.
     */
    agentPoolName: string;
    /**
     * The fully qualified Azure Resource Manager identifier of the connected cluster resource.
     */
    connectedClusterResourceUri: string;
}

/**
 * The agentPool resource definition
 */
export interface GetAgentPoolResult {
    /**
     * Number of nodes in the agent pool. The default value is 1.
     */
    readonly count?: number;
    /**
     * Whether to enable auto-scaler. Default value is false
     */
    readonly enableAutoScaling?: boolean;
    /**
     * Extended location pointing to the underlying infrastructure
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Version of Kubernetes in use by the agent pool. This is inherited from the kubernetesVersion of the provisioned cluster.
     */
    readonly kubernetesVersion: string;
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
     * The name of the resource
     */
    readonly name: string;
    /**
     * The node labels to be persisted across all nodes in agent pool.
     */
    readonly nodeLabels?: {[key: string]: string};
    /**
     * Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
     */
    readonly nodeTaints?: string[];
    /**
     * Specifies the OS SKU used by the agent pool. The default is CBLMariner if OSType is Linux. The default is Windows2019 when OSType is Windows.
     */
    readonly osSKU?: string;
    /**
     * OSType to be used to specify OS type for the VMs. Choose from Linux and Windows. Default to Linux. Possible values include: 'Linux', 'Windows'
     */
    readonly osType?: string;
    /**
     * The status of the latest long running operation for the agent pool.
     */
    readonly provisioningState: string;
    /**
     * The observed status of the agent pool.
     */
    readonly status?: types.outputs.AgentPoolProvisioningStatusResponseStatus;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The VM sku size of the agent pool node VMs.
     */
    readonly vmSize?: string;
}
/**
 * Gets the specified agent pool in the provisioned cluster
 */
export function getAgentPoolOutput(args: GetAgentPoolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAgentPoolResult> {
    return pulumi.output(args).apply((a: any) => getAgentPool(a, opts))
}

export interface GetAgentPoolOutputArgs {
    /**
     * Parameter for the name of the agent pool in the provisioned cluster.
     */
    agentPoolName: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource Manager identifier of the connected cluster resource.
     */
    connectedClusterResourceUri: pulumi.Input<string>;
}