import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a list of databases that are owned by this cluster and were followed by another cluster.
 *
 * Uses Azure REST API version 2024-04-13.
 *
 * Other available API versions: 2019-09-07, 2019-11-09, 2020-02-15, 2020-06-14, 2020-09-18, 2021-01-01, 2021-08-27, 2022-02-01, 2022-07-07, 2022-11-11, 2022-12-29, 2023-05-02, 2023-08-15. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native kusto [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The name of the resource group. The name is case insensitive.
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
 *
 * Uses Azure REST API version 2024-04-13.
 *
 * Other available API versions: 2019-09-07, 2019-11-09, 2020-02-15, 2020-06-14, 2020-09-18, 2021-01-01, 2021-08-27, 2022-02-01, 2022-07-07, 2022-11-11, 2022-12-29, 2023-05-02, 2023-08-15. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native kusto [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listClusterFollowerDatabasesOutput(args: ListClusterFollowerDatabasesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListClusterFollowerDatabasesResult> {
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
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}