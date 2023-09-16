import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Returns a database.
 */
export function getReadWriteDatabase(args: GetReadWriteDatabaseArgs, opts?: pulumi.InvokeOptions): Promise<GetReadWriteDatabaseResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kusto/v20221229:getReadWriteDatabase", {
        "clusterName": args.clusterName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetReadWriteDatabaseArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: string;
    /**
     * The name of the database in the Kusto cluster.
     */
    databaseName: string;
    /**
     * The name of the resource group containing the Kusto cluster.
     */
    resourceGroupName: string;
}

/**
 * Class representing a read write database.
 */
export interface GetReadWriteDatabaseResult {
    /**
     * The time the data should be kept in cache for fast queries in TimeSpan.
     */
    readonly hotCachePeriod?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Indicates whether the database is followed.
     */
    readonly isFollowed: boolean;
    /**
     * Kind of the database
     * Expected value is 'ReadWrite'.
     */
    readonly kind: "ReadWrite";
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioned state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The time the data should be kept before it stops being accessible to queries in TimeSpan.
     */
    readonly softDeletePeriod?: string;
    /**
     * The statistics of the database.
     */
    readonly statistics: types.outputs.kusto.v20221229.DatabaseStatisticsResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Returns a database.
 */
export function getReadWriteDatabaseOutput(args: GetReadWriteDatabaseOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetReadWriteDatabaseResult> {
    return pulumi.output(args).apply((a: any) => getReadWriteDatabase(a, opts))
}

export interface GetReadWriteDatabaseOutputArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the database in the Kusto cluster.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the resource group containing the Kusto cluster.
     */
    resourceGroupName: pulumi.Input<string>;
}
