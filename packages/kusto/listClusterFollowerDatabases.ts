import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a list of databases that are owned by this cluster and were followed by another cluster.
 * Azure REST API version: 2022-12-29.
 *
 * Other available API versions: 2022-07-07, 2023-05-02, 2023-08-15.
 */
export function listClusterFollowerDatabases(args: ListClusterFollowerDatabasesArgs, opts?: pulumi.InvokeOptions): Promise<ListClusterFollowerDatabasesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kusto:listClusterFollowerDatabases", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListClusterFollowerDatabasesArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: string;
    /**
     * The name of the resource group containing the Kusto cluster.
     */
    resourceGroupName: string;
}

/**
 * The list Kusto database principals operation response.
 */
export interface ListClusterFollowerDatabasesResult {
    /**
     * The list of follower database result.
     */
    readonly value?: types.outputs.FollowerDatabaseDefinitionResponse[];
}
/**
 * Returns a list of databases that are owned by this cluster and were followed by another cluster.
 * Azure REST API version: 2022-12-29.
 *
 * Other available API versions: 2022-07-07, 2023-05-02, 2023-08-15.
 */
export function listClusterFollowerDatabasesOutput(args: ListClusterFollowerDatabasesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListClusterFollowerDatabasesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:kusto:listClusterFollowerDatabases", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListClusterFollowerDatabasesOutputArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group containing the Kusto cluster.
     */
    resourceGroupName: pulumi.Input<string>;
}