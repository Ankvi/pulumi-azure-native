import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Returns a database.
 */
export function getReadOnlyFollowingDatabase(args: GetReadOnlyFollowingDatabaseArgs, opts?: pulumi.InvokeOptions): Promise<GetReadOnlyFollowingDatabaseResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kusto/v20190907:getReadOnlyFollowingDatabase", {
        "clusterName": args.clusterName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetReadOnlyFollowingDatabaseArgs {
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
 * Class representing a read only following database.
 */
export interface GetReadOnlyFollowingDatabaseResult {
    /**
     * The name of the attached database configuration cluster
     */
    readonly attachedDatabaseConfigurationName: string;
    /**
     * The time the data should be kept in cache for fast queries in TimeSpan.
     */
    readonly hotCachePeriod?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Kind of the database
     * Expected value is 'ReadOnlyFollowing'.
     */
    readonly kind?: "ReadOnlyFollowing";
    /**
     * The name of the leader cluster
     */
    readonly leaderClusterResourceId: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The principals modification kind of the database
     */
    readonly principalsModificationKind: string;
    /**
     * The provisioned state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The time the data should be kept before it stops being accessible to queries in TimeSpan.
     */
    readonly softDeletePeriod: string;
    /**
     * The statistics of the database.
     */
    readonly statistics: types.outputs.kusto.v20190907.DatabaseStatisticsResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Returns a database.
 */
export function getReadOnlyFollowingDatabaseOutput(args: GetReadOnlyFollowingDatabaseOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetReadOnlyFollowingDatabaseResult> {
    return pulumi.output(args).apply((a: any) => getReadOnlyFollowingDatabase(a, opts))
}

export interface GetReadOnlyFollowingDatabaseOutputArgs {
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
