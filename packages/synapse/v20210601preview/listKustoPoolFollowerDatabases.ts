import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Returns a list of databases that are owned by this Kusto Pool and were followed by another Kusto Pool.
 */
export function listKustoPoolFollowerDatabases(args: ListKustoPoolFollowerDatabasesArgs, opts?: pulumi.InvokeOptions): Promise<ListKustoPoolFollowerDatabasesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:synapse/v20210601preview:listKustoPoolFollowerDatabases", {
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
    readonly value?: types.outputs.synapse.v20210601preview.FollowerDatabaseDefinitionResponse[];
}
/**
 * Returns a list of databases that are owned by this Kusto Pool and were followed by another Kusto Pool.
 */
export function listKustoPoolFollowerDatabasesOutput(args: ListKustoPoolFollowerDatabasesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListKustoPoolFollowerDatabasesResult> {
    return pulumi.output(args).apply((a: any) => listKustoPoolFollowerDatabases(a, opts))
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
