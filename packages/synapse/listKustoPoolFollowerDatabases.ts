import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a list of databases that are owned by this Kusto Pool and were followed by another Kusto Pool.
 *
 * Uses Azure REST API version 2021-06-01-preview.
 */
export function listKustoPoolFollowerDatabases(args: ListKustoPoolFollowerDatabasesArgs, opts?: pulumi.InvokeOptions): Promise<ListKustoPoolFollowerDatabasesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:synapse:listKustoPoolFollowerDatabases", {
        "kustoPoolName": args.kustoPoolName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListKustoPoolFollowerDatabasesArgs {
    /**
     * The name of the Kusto pool.
     */
    kustoPoolName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * The list Kusto database principals operation response.
 */
export interface ListKustoPoolFollowerDatabasesResult {
    /**
     * The list of follower database result.
     */
    readonly value?: types.outputs.FollowerDatabaseDefinitionResponse[];
}
/**
 * Returns a list of databases that are owned by this Kusto Pool and were followed by another Kusto Pool.
 *
 * Uses Azure REST API version 2021-06-01-preview.
 */
export function listKustoPoolFollowerDatabasesOutput(args: ListKustoPoolFollowerDatabasesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListKustoPoolFollowerDatabasesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:synapse:listKustoPoolFollowerDatabases", {
        "kustoPoolName": args.kustoPoolName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListKustoPoolFollowerDatabasesOutputArgs {
    /**
     * The name of the Kusto pool.
     */
    kustoPoolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}