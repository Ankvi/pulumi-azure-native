import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a list of databases that are owned by this cluster and were followed by another cluster.
 */
export function listClusterFollowerDatabases(args: ListClusterFollowerDatabasesArgs, opts?: pulumi.InvokeOptions): Promise<ListClusterFollowerDatabasesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kusto/v20220707:listClusterFollowerDatabases", {
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
 */
export function listClusterFollowerDatabasesOutput(args: ListClusterFollowerDatabasesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListClusterFollowerDatabasesResult> {
    return pulumi.output(args).apply((a: any) => listClusterFollowerDatabases(a, opts))
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