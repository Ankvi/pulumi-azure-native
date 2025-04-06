import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists all pending flows for a connection.
 *
 * Uses Azure REST API version 2024-09-27.
 *
 * Other available API versions: 2023-10-11-preview, 2024-01-25, 2024-05-07, 2024-09-11, 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azuredatatransfer [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listListPendingFlow(args: ListListPendingFlowArgs, opts?: pulumi.InvokeOptions): Promise<ListListPendingFlowResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azuredatatransfer:listListPendingFlow", {
        "connectionName": args.connectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListListPendingFlowArgs {
    /**
     * The name for the connection that is to be requested.
     */
    connectionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The connections list result.
 */
export interface ListListPendingFlowResult {
    /**
     * Link to next results
     */
    readonly nextLink?: string;
    /**
     * flows array.
     */
    readonly value?: types.outputs.PendingFlowResponse[];
}
/**
 * Lists all pending flows for a connection.
 *
 * Uses Azure REST API version 2024-09-27.
 *
 * Other available API versions: 2023-10-11-preview, 2024-01-25, 2024-05-07, 2024-09-11, 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azuredatatransfer [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listListPendingFlowOutput(args: ListListPendingFlowOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListListPendingFlowResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azuredatatransfer:listListPendingFlow", {
        "connectionName": args.connectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListListPendingFlowOutputArgs {
    /**
     * The name for the connection that is to be requested.
     */
    connectionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}