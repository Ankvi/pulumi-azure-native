import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets details of a migration.
 *
 * Uses Azure REST API version 2023-03-01-preview.
 *
 * Other available API versions: 2021-06-15-privatepreview, 2022-05-01-preview, 2023-06-01-preview, 2023-12-01-preview, 2024-03-01-preview, 2024-08-01, 2024-11-01-preview.
 */
export function getMigration(args: GetMigrationArgs, opts?: pulumi.InvokeOptions): Promise<GetMigrationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbforpostgresql:getMigration", {
        "migrationName": args.migrationName,
        "resourceGroupName": args.resourceGroupName,
        "subscriptionId": args.subscriptionId,
        "targetDbServerName": args.targetDbServerName,
    }, opts);
}

export interface GetMigrationArgs {
    /**
     * The name of the migration.
     */
    migrationName: string;
    /**
     * The resource group name of the target database server.
     */
    resourceGroupName: string;
    /**
     * The subscription ID of the target database server.
     */
    subscriptionId?: string;
    /**
     * The name of the target database server.
     */
    targetDbServerName: string;
}

/**
 * Represents a migration resource.
 */
export interface GetMigrationResult {
    /**
     * To trigger cancel for entire migration we need to send this flag as True
     */
    readonly cancel?: string;
    /**
     * Current status of migration
     */
    readonly currentStatus: types.outputs.MigrationStatusResponse;
    /**
     * When you want to trigger cancel for specific databases send cancel flag as True and database names in this array
     */
    readonly dbsToCancelMigrationOn?: string[];
    /**
     * Number of databases to migrate
     */
    readonly dbsToMigrate?: string[];
    /**
     * When you want to trigger cutover for specific databases send triggerCutover flag as True and database names in this array
     */
    readonly dbsToTriggerCutoverOn?: string[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * ID for migration, a GUID.
     */
    readonly migrationId: string;
    /**
     * There are two types of migration modes Online and Offline
     */
    readonly migrationMode?: string;
    /**
     * End time in UTC for migration window
     */
    readonly migrationWindowEndTimeInUtc?: string;
    /**
     * Start time in UTC for migration window
     */
    readonly migrationWindowStartTimeInUtc?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Indicates whether the databases on the target server can be overwritten, if already present. If set to False, the migration workflow will wait for a confirmation, if it detects that the database already exists.
     */
    readonly overwriteDbsInTarget?: string;
    /**
     * Indicates whether to setup LogicalReplicationOnSourceDb, if needed
     */
    readonly setupLogicalReplicationOnSourceDbIfNeeded?: string;
    /**
     * Source server fully qualified domain name or ip. It is a optional value, if customer provide it, dms will always use it for connection
     */
    readonly sourceDbServerFullyQualifiedDomainName?: string;
    /**
     * Metadata of the source database server
     */
    readonly sourceDbServerMetadata: types.outputs.DbServerMetadataResponse;
    /**
     * ResourceId of the source database server
     */
    readonly sourceDbServerResourceId?: string;
    /**
     * Indicates whether the data migration should start right away
     */
    readonly startDataMigration?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Target server fully qualified domain name or ip. It is a optional value, if customer provide it, dms will always use it for connection
     */
    readonly targetDbServerFullyQualifiedDomainName?: string;
    /**
     * Metadata of the target database server
     */
    readonly targetDbServerMetadata: types.outputs.DbServerMetadataResponse;
    /**
     * ResourceId of the source database server
     */
    readonly targetDbServerResourceId: string;
    /**
     * To trigger cutover for entire migration we need to send this flag as True
     */
    readonly triggerCutover?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets details of a migration.
 *
 * Uses Azure REST API version 2023-03-01-preview.
 *
 * Other available API versions: 2021-06-15-privatepreview, 2022-05-01-preview, 2023-06-01-preview, 2023-12-01-preview, 2024-03-01-preview, 2024-08-01, 2024-11-01-preview.
 */
export function getMigrationOutput(args: GetMigrationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMigrationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dbforpostgresql:getMigration", {
        "migrationName": args.migrationName,
        "resourceGroupName": args.resourceGroupName,
        "subscriptionId": args.subscriptionId,
        "targetDbServerName": args.targetDbServerName,
    }, opts);
}

export interface GetMigrationOutputArgs {
    /**
     * The name of the migration.
     */
    migrationName: pulumi.Input<string>;
    /**
     * The resource group name of the target database server.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The subscription ID of the target database server.
     */
    subscriptionId?: pulumi.Input<string>;
    /**
     * The name of the target database server.
     */
    targetDbServerName: pulumi.Input<string>;
}