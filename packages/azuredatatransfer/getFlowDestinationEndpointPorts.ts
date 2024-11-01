import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the destination endpoint ports for the specified flow and stream ID.
 * Azure REST API version: 2024-09-27.
 */
export function getFlowDestinationEndpointPorts(args: GetFlowDestinationEndpointPortsArgs, opts?: pulumi.InvokeOptions): Promise<GetFlowDestinationEndpointPortsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azuredatatransfer:getFlowDestinationEndpointPorts", {
        "connectionName": args.connectionName,
        "flowName": args.flowName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFlowDestinationEndpointPortsArgs {
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
 * List of destination endpoint ports for the flow stream
 */
export interface GetFlowDestinationEndpointPortsResult {
    /**
     * The destination endpoint port for the flow stream
     */
    readonly ports?: number[];
}
/**
 * Get the destination endpoint ports for the specified flow and stream ID.
 * Azure REST API version: 2024-09-27.
 */
export function getFlowDestinationEndpointPortsOutput(args: GetFlowDestinationEndpointPortsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFlowDestinationEndpointPortsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azuredatatransfer:getFlowDestinationEndpointPorts", {
        "connectionName": args.connectionName,
        "flowName": args.flowName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFlowDestinationEndpointPortsOutputArgs {
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