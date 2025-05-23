import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Workflow properties definition.
 *
 * Uses Azure REST API version 2024-10-02-preview.
 *
 * Other available API versions: 2024-02-02-preview, 2024-08-02-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native app [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listLogicAppWorkflowsConnections(args: ListLogicAppWorkflowsConnectionsArgs, opts?: pulumi.InvokeOptions): Promise<ListLogicAppWorkflowsConnectionsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app:listLogicAppWorkflowsConnections", {
        "containerAppName": args.containerAppName,
        "logicAppName": args.logicAppName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListLogicAppWorkflowsConnectionsArgs {
    /**
     * Name of the Container App.
     */
    containerAppName: string;
    /**
     * Name of the Logic App, the extension resource.
     */
    logicAppName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Workflow properties definition.
 */
export interface ListLogicAppWorkflowsConnectionsResult {
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
 * Uses Azure REST API version 2024-10-02-preview.
 *
 * Other available API versions: 2024-02-02-preview, 2024-08-02-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native app [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listLogicAppWorkflowsConnectionsOutput(args: ListLogicAppWorkflowsConnectionsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListLogicAppWorkflowsConnectionsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:app:listLogicAppWorkflowsConnections", {
        "containerAppName": args.containerAppName,
        "logicAppName": args.logicAppName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListLogicAppWorkflowsConnectionsOutputArgs {
    /**
     * Name of the Container App.
     */
    containerAppName: pulumi.Input<string>;
    /**
     * Name of the Logic App, the extension resource.
     */
    logicAppName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}