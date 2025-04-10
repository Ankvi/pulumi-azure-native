import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a sync group.
 *
 * Uses Azure REST API version 2021-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export function getSyncGroup(args: GetSyncGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetSyncGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getSyncGroup", {
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
        "syncGroupName": args.syncGroupName,
    }, opts);
}

export interface GetSyncGroupArgs {
    /**
     * The name of the database on which the sync group is hosted.
     */
    databaseName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the server.
     */
    serverName: string;
    /**
     * The name of the sync group.
     */
    syncGroupName: string;
}

/**
 * An Azure SQL Database sync group.
 */
export interface GetSyncGroupResult {
    /**
     * Conflict logging retention period.
     */
    readonly conflictLoggingRetentionInDays?: number;
    /**
     * Conflict resolution policy of the sync group.
     */
    readonly conflictResolutionPolicy?: string;
    /**
     * If conflict logging is enabled.
     */
    readonly enableConflictLogging?: boolean;
    /**
     * User name for the sync group hub database credential.
     */
    readonly hubDatabaseUserName?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Sync interval of the sync group.
     */
    readonly interval?: number;
    /**
     * Last sync time of the sync group.
     */
    readonly lastSyncTime: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Private endpoint name of the sync group if use private link connection is enabled.
     */
    readonly privateEndpointName: string;
    /**
     * Sync schema of the sync group.
     */
    readonly schema?: types.outputs.SyncGroupSchemaResponse;
    /**
     * The name and capacity of the SKU.
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * ARM resource id of the sync database in the sync group.
     */
    readonly syncDatabaseId?: string;
    /**
     * Sync state of the sync group.
     */
    readonly syncState: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * If use private link connection is enabled.
     */
    readonly usePrivateLinkConnection?: boolean;
}
/**
 * Gets a sync group.
 *
 * Uses Azure REST API version 2021-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export function getSyncGroupOutput(args: GetSyncGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSyncGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sql:getSyncGroup", {
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
        "syncGroupName": args.syncGroupName,
    }, opts);
}

export interface GetSyncGroupOutputArgs {
    /**
     * The name of the database on which the sync group is hosted.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * The name of the sync group.
     */
    syncGroupName: pulumi.Input<string>;
}