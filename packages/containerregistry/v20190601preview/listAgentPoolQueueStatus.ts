import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the count of queued runs for a given agent pool.
 */
export function listAgentPoolQueueStatus(args: ListAgentPoolQueueStatusArgs, opts?: pulumi.InvokeOptions): Promise<ListAgentPoolQueueStatusResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry/v20190601preview:listAgentPoolQueueStatus", {
        "agentPoolName": args.agentPoolName,
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListAgentPoolQueueStatusArgs {
    /**
     * The name of the agent pool.
     */
    agentPoolName: string;
    /**
     * The name of the container registry.
     */
    registryName: string;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: string;
}

/**
 * The QueueStatus of Agent Pool
 */
export interface ListAgentPoolQueueStatusResult {
    /**
     * The number of pending runs in the queue
     */
    readonly count?: number;
}
/**
 * Gets the count of queued runs for a given agent pool.
 */
export function listAgentPoolQueueStatusOutput(args: ListAgentPoolQueueStatusOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListAgentPoolQueueStatusResult> {
    return pulumi.output(args).apply((a: any) => listAgentPoolQueueStatus(a, opts))
}

export interface ListAgentPoolQueueStatusOutputArgs {
    /**
     * The name of the agent pool.
     */
    agentPoolName: pulumi.Input<string>;
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}