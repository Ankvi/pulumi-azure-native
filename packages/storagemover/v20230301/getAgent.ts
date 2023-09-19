import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an Agent resource.
 */
export function getAgent(args: GetAgentArgs, opts?: pulumi.InvokeOptions): Promise<GetAgentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storagemover/v20230301:getAgent", {
        "agentName": args.agentName,
        "resourceGroupName": args.resourceGroupName,
        "storageMoverName": args.storageMoverName,
    }, opts);
}

export interface GetAgentArgs {
    /**
     * The name of the Agent resource.
     */
    agentName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the Storage Mover resource.
     */
    storageMoverName: string;
}

/**
 * The Agent resource.
 */
export interface GetAgentResult {
    /**
     * The Agent status.
     */
    readonly agentStatus: string;
    /**
     * The Agent version.
     */
    readonly agentVersion: string;
    /**
     * The fully qualified resource ID of the Hybrid Compute resource for the Agent.
     */
    readonly arcResourceId: string;
    /**
     * The VM UUID of the Hybrid Compute resource for the Agent.
     */
    readonly arcVmUuid: string;
    /**
     * A description for the Agent.
     */
    readonly description?: string;
    readonly errorDetails: types.outputs.AgentPropertiesResponseErrorDetails;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The last updated time of the Agent status.
     */
    readonly lastStatusUpdate: string;
    /**
     * Local IP address reported by the Agent.
     */
    readonly localIPAddress: string;
    /**
     * Available memory reported by the Agent, in MB.
     */
    readonly memoryInMB: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Available compute cores reported by the Agent.
     */
    readonly numberOfCores: number;
    /**
     * The provisioning state of this resource.
     */
    readonly provisioningState: string;
    /**
     * Resource system metadata.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Uptime of the Agent in seconds.
     */
    readonly uptimeInSeconds: number;
}
/**
 * Gets an Agent resource.
 */
export function getAgentOutput(args: GetAgentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAgentResult> {
    return pulumi.output(args).apply((a: any) => getAgent(a, opts))
}

export interface GetAgentOutputArgs {
    /**
     * The name of the Agent resource.
     */
    agentName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Storage Mover resource.
     */
    storageMoverName: pulumi.Input<string>;
}
