import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a database.
 */
export function getReadWriteDatabase(args: GetReadWriteDatabaseArgs, opts?: pulumi.InvokeOptions): Promise<GetReadWriteDatabaseResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:synapse/v20210601preview:getReadWriteDatabase", {
        "databaseName": args.databaseName,
        "kustoPoolName": args.kustoPoolName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetReadWriteDatabaseArgs {
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
    readonly statistics: types.outputs.DatabaseStatisticsResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
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
