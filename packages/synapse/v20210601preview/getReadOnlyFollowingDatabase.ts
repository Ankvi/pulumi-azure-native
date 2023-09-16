import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Returns a database.
 */
export function getReadOnlyFollowingDatabase(args: GetReadOnlyFollowingDatabaseArgs, opts?: pulumi.InvokeOptions): Promise<GetReadOnlyFollowingDatabaseResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:synapse/v20210601preview:getReadOnlyFollowingDatabase", {
        "databaseName": args.databaseName,
        "kustoPoolName": args.kustoPoolName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetReadOnlyFollowingDatabaseArgs {
    /**
     * The name of the database in the Kusto pool.
     */
    databaseName: string;
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
    readonly kind: "ReadOnlyFollowing";
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
    readonly statistics: types.outputs.synapse.v20210601preview.DatabaseStatisticsResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.synapse.v20210601preview.SystemDataResponse;
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
     * The name of the database in the Kusto pool.
     */
    databaseName: pulumi.Input<string>;
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
