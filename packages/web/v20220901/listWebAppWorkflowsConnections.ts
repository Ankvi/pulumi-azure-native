import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Workflow properties definition.
 */
export function listWebAppWorkflowsConnections(args: ListWebAppWorkflowsConnectionsArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppWorkflowsConnectionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20220901:listWebAppWorkflowsConnections", {
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
 */
export function listWebAppWorkflowsConnectionsOutput(args: ListWebAppWorkflowsConnectionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWebAppWorkflowsConnectionsResult> {
    return pulumi.output(args).apply((a: any) => listWebAppWorkflowsConnections(a, opts))
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