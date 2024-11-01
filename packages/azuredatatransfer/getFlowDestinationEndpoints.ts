import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the destination endpoints for the specified flow and stream ID.
 * Azure REST API version: 2024-09-27.
 */
export function getFlowDestinationEndpoints(args: GetFlowDestinationEndpointsArgs, opts?: pulumi.InvokeOptions): Promise<GetFlowDestinationEndpointsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azuredatatransfer:getFlowDestinationEndpoints", {
        "connectionName": args.connectionName,
        "flowName": args.flowName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFlowDestinationEndpointsArgs {
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
 * List of destination endpoints for the flow stream
 */
export interface GetFlowDestinationEndpointsResult {
    /**
     * The destination endpoints for the flow stream
     */
    readonly endpoints?: string[];
}
/**
 * Get the destination endpoints for the specified flow and stream ID.
 * Azure REST API version: 2024-09-27.
 */
export function getFlowDestinationEndpointsOutput(args: GetFlowDestinationEndpointsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFlowDestinationEndpointsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azuredatatransfer:getFlowDestinationEndpoints", {
        "connectionName": args.connectionName,
        "flowName": args.flowName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFlowDestinationEndpointsOutputArgs {
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