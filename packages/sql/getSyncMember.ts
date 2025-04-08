import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a sync member.
 *
 * Uses Azure REST API version 2021-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export function getSyncMember(args: GetSyncMemberArgs, opts?: pulumi.InvokeOptions): Promise<GetSyncMemberResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getSyncMember", {
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
        "syncGroupName": args.syncGroupName,
        "syncMemberName": args.syncMemberName,
    }, opts);
}

export interface GetSyncMemberArgs {
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
     * The name of the sync group on which the sync member is hosted.
     */
    syncGroupName: string;
    /**
     * The name of the sync member.
     */
    syncMemberName: string;
}

/**
 * An Azure SQL Database sync member.
 */
export interface GetSyncMemberResult {
    /**
     * Database name of the member database in the sync member.
     */
    readonly databaseName?: string;
    /**
     * Database type of the sync member.
     */
    readonly databaseType?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Private endpoint name of the sync member if use private link connection is enabled, for sync members in Azure.
     */
    readonly privateEndpointName: string;
    /**
     * Server name of the member database in the sync member
     */
    readonly serverName?: string;
    /**
     * SQL Server database id of the sync member.
     */
    readonly sqlServerDatabaseId?: string;
    /**
     * ARM resource id of the sync agent in the sync member.
     */
    readonly syncAgentId?: string;
    /**
     * Sync direction of the sync member.
     */
    readonly syncDirection?: string;
    /**
     * ARM resource id of the sync member logical database, for sync members in Azure.
     */
    readonly syncMemberAzureDatabaseResourceId?: string;
    /**
     * Sync state of the sync member.
     */
    readonly syncState: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Whether to use private link connection.
     */
    readonly usePrivateLinkConnection?: boolean;
    /**
     * User name of the member database in the sync member.
     */
    readonly userName?: string;
}
/**
 * Gets a sync member.
 *
 * Uses Azure REST API version 2021-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export function getSyncMemberOutput(args: GetSyncMemberOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSyncMemberResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sql:getSyncMember", {
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
        "syncGroupName": args.syncGroupName,
        "syncMemberName": args.syncMemberName,
    }, opts);
}

export interface GetSyncMemberOutputArgs {
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
     * The name of the sync group on which the sync member is hosted.
     */
    syncGroupName: pulumi.Input<string>;
    /**
     * The name of the sync member.
     */
    syncMemberName: pulumi.Input<string>;
}