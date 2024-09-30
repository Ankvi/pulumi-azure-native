import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets flow resource.
 * Azure REST API version: 2023-10-11-preview.
 *
 * Other available API versions: 2024-01-25, 2024-05-07, 2024-09-11.
 */
export function getFlow(args: GetFlowArgs, opts?: pulumi.InvokeOptions): Promise<GetFlowResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azuredatatransfer:getFlow", {
        "connectionName": args.connectionName,
        "flowName": args.flowName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFlowArgs {
    /**
     * The name for the connection that is to be requested.
     */
    connectionName: string;
    /**
     * The name for the flow that is to be onboarded.
     */
    flowName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The flow resource definition.
 */
export interface GetFlowResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The managed identity of the flow resource, if configured.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Plan for the resource.
     */
    readonly plan?: types.outputs.PlanResponse;
    /**
     * Properties of flow
     */
    readonly properties: types.outputs.FlowPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets flow resource.
 * Azure REST API version: 2023-10-11-preview.
 *
 * Other available API versions: 2024-01-25, 2024-05-07, 2024-09-11.
 */
export function getFlowOutput(args: GetFlowOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFlowResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azuredatatransfer:getFlow", {
        "connectionName": args.connectionName,
        "flowName": args.flowName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFlowOutputArgs {
    /**
     * The name for the connection that is to be requested.
     */
    connectionName: pulumi.Input<string>;
    /**
     * The name for the flow that is to be onboarded.
     */
    flowName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}