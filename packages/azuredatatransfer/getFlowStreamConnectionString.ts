import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the connection string for the specified flow.
 *
 * Uses Azure REST API version 2024-09-27.
 *
 * Other available API versions: 2025-03-01-preview.
 */
export function getFlowStreamConnectionString(args: GetFlowStreamConnectionStringArgs, opts?: pulumi.InvokeOptions): Promise<GetFlowStreamConnectionStringResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azuredatatransfer:getFlowStreamConnectionString", {
        "connectionName": args.connectionName,
        "flowName": args.flowName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFlowStreamConnectionStringArgs {
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
 * The connection string for the specified streaming flow
 */
export interface GetFlowStreamConnectionStringResult {
    /**
     * The connection string for the specified streaming flow
     */
    readonly connectionString?: string;
}
/**
 * Get the connection string for the specified flow.
 *
 * Uses Azure REST API version 2024-09-27.
 *
 * Other available API versions: 2025-03-01-preview.
 */
export function getFlowStreamConnectionStringOutput(args: GetFlowStreamConnectionStringOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFlowStreamConnectionStringResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azuredatatransfer:getFlowStreamConnectionString", {
        "connectionName": args.connectionName,
        "flowName": args.flowName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFlowStreamConnectionStringOutputArgs {
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