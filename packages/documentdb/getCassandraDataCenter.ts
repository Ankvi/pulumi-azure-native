import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the properties of a managed Cassandra data center.
 * Azure REST API version: 2023-04-15.
 */
export function getCassandraDataCenter(args: GetCassandraDataCenterArgs, opts?: pulumi.InvokeOptions): Promise<GetCassandraDataCenterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:documentdb:getCassandraDataCenter", {
        "clusterName": args.clusterName,
        "dataCenterName": args.dataCenterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCassandraDataCenterArgs {
    /**
     * Managed Cassandra cluster name.
     */
    clusterName: string;
    /**
     * Data center name in a managed Cassandra cluster.
     */
    dataCenterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A managed Cassandra data center.
 */
export interface GetCassandraDataCenterResult {
    /**
     * The unique resource identifier of the database account.
     */
    readonly id: string;
    /**
     * The name of the database account.
     */
    readonly name: string;
    /**
     * Properties of a managed Cassandra data center.
     */
    readonly properties: types.outputs.DataCenterResourceResponseProperties;
    /**
     * The type of Azure resource.
     */
    readonly type: string;
}
/**
 * Get the properties of a managed Cassandra data center.
 * Azure REST API version: 2023-04-15.
 */
export function getCassandraDataCenterOutput(args: GetCassandraDataCenterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCassandraDataCenterResult> {
    return pulumi.output(args).apply((a: any) => getCassandraDataCenter(a, opts))
}

export interface GetCassandraDataCenterOutputArgs {
    /**
     * Managed Cassandra cluster name.
     */
    clusterName: pulumi.Input<string>;
    /**
     * Data center name in a managed Cassandra cluster.
     */
    dataCenterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
