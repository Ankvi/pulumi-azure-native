import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get SQL pool properties
 * Azure REST API version: 2021-06-01.
 *
 * Other available API versions: 2021-05-01, 2021-06-01-preview.
 */
export function getSqlPool(args: GetSqlPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlPoolResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:synapse:getSqlPool", {
        "resourceGroupName": args.resourceGroupName,
        "sqlPoolName": args.sqlPoolName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetSqlPoolArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * SQL pool name
     */
    sqlPoolName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * A SQL Analytics pool
 */
export interface GetSqlPoolResult {
    /**
     * Collation mode
     */
    readonly collation?: string;
    /**
     * Date the SQL pool was created
     */
    readonly creationDate: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Maximum size in bytes
     */
    readonly maxSizeBytes?: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Resource state
     */
    readonly provisioningState?: string;
    /**
     * Backup database to restore from
     */
    readonly recoverableDatabaseId?: string;
    /**
     * Snapshot time to restore
     */
    readonly restorePointInTime?: string;
    /**
     * SQL pool SKU
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * Specifies the time that the sql pool was deleted
     */
    readonly sourceDatabaseDeletionDate?: string;
    /**
     * Resource status
     */
    readonly status: string;
    /**
     * The storage account type used to store backups for this sql pool.
     */
    readonly storageAccountType?: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get SQL pool properties
 * Azure REST API version: 2021-06-01.
 *
 * Other available API versions: 2021-05-01, 2021-06-01-preview.
 */
export function getSqlPoolOutput(args: GetSqlPoolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSqlPoolResult> {
    return pulumi.output(args).apply((a: any) => getSqlPool(a, opts))
}

export interface GetSqlPoolOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * SQL pool name
     */
    sqlPoolName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}