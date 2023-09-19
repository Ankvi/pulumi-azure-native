import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a list of database principals of the given Kusto cluster and database.
 */
export function listDatabasePrincipals(args: ListDatabasePrincipalsArgs, opts?: pulumi.InvokeOptions): Promise<ListDatabasePrincipalsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kusto/v20230502:listDatabasePrincipals", {
        "clusterName": args.clusterName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListDatabasePrincipalsArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: string;
    /**
     * The name of the database in the Kusto cluster.
     */
    databaseName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The list Kusto database principals operation response.
 */
export interface ListDatabasePrincipalsResult {
    /**
     * The list of Kusto database principals.
     */
    readonly value?: types.outputs.DatabasePrincipalResponse[];
}
/**
 * Returns a list of database principals of the given Kusto cluster and database.
 */
export function listDatabasePrincipalsOutput(args: ListDatabasePrincipalsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListDatabasePrincipalsResult> {
    return pulumi.output(args).apply((a: any) => listDatabasePrincipals(a, opts))
}

export interface ListDatabasePrincipalsOutputArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the database in the Kusto cluster.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
