import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Workflow properties definition.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function listWebAppWorkflowsConnections(args: ListWebAppWorkflowsConnectionsArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppWorkflowsConnectionsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:listWebAppWorkflowsConnections", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListWebAppWorkflowsConnectionsArgs {
    /**
     * Site name.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * Workflow properties definition.
 */
export interface ListWebAppWorkflowsConnectionsResult {
    /**
     * The resource id.
     */
    readonly id: string;
    /**
     * The resource kind.
     */
    readonly kind?: string;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * Gets the resource name.
     */
    readonly name: string;
    /**
     * Additional workflow properties.
     */
    readonly properties: types.outputs.WorkflowEnvelopeResponseProperties;
    /**
     * Gets the resource type.
     */
    readonly type: string;
}
/**
 * Workflow properties definition.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function listWebAppWorkflowsConnectionsOutput(args: ListWebAppWorkflowsConnectionsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListWebAppWorkflowsConnectionsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:listWebAppWorkflowsConnections", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListWebAppWorkflowsConnectionsOutputArgs {
    /**
     * Site name.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}