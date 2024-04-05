import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists all pending connections for a connection.
 * Azure REST API version: 2023-10-11-preview.
 *
 * Other available API versions: 2024-01-25.
 */
export function listListPendingConnection(args: ListListPendingConnectionArgs, opts?: pulumi.InvokeOptions): Promise<ListListPendingConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azuredatatransfer:listListPendingConnection", {
        "connectionName": args.connectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListListPendingConnectionArgs {
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
export interface ListListPendingConnectionResult {
    /**
     * Link to next results
     */
    readonly nextLink?: string;
    /**
     * Connections array.
     */
    readonly value?: types.outputs.PendingConnectionResponse[];
}
/**
 * Lists all pending connections for a connection.
 * Azure REST API version: 2023-10-11-preview.
 *
 * Other available API versions: 2024-01-25.
 */
export function listListPendingConnectionOutput(args: ListListPendingConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListListPendingConnectionResult> {
    return pulumi.output(args).apply((a: any) => listListPendingConnection(a, opts))
}

export interface ListListPendingConnectionOutputArgs {
    /**
     * The name for the connection that is to be requested.
     */
    connectionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}