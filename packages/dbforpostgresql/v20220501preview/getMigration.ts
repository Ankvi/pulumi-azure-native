import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets details of a migration.
 */
export function getMigration(args: GetMigrationArgs, opts?: pulumi.InvokeOptions): Promise<GetMigrationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbforpostgresql/v20220501preview:getMigration", {
        "migrationName": args.migrationName,
        "resourceGroupName": args.resourceGroupName,
        "subscriptionId": args.subscriptionId,
        "targetDBServerName": args.targetDBServerName,
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
    targetDBServerName: string;
}

/**
 * Represents a migration resource.
 */
export interface GetMigrationResult {
    /**
     * To trigger cancel for entire migration we need to send this flag as true
     */
    readonly cancel?: boolean;
    /**
     * Migration status.
     */
    readonly currentStatus: types.outputs.MigrationStatusResponse;
    /**
     * When you want to trigger cancel for specific databases send triggerCutover flag as true and database names in this array
     */
    readonly dBsToCancelMigrationOn?: string[];
    readonly dBsToMigrate?: string[];
    /**
     * When you want to trigger cutover for specific databases send triggerCutover flag as true and database names in this array
     */
    readonly dBsToTiggerCutoverOn?: string[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Migration details level.
     */
    readonly migrationDetailsLevel: string;
    readonly migrationId: string;
    /**
     * There are two types of migration modes Online and Offline
     */
    readonly migrationMode?: string;
    readonly migrationWindowStartTimeInUtc?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    readonly overwriteDBsInTarget?: boolean;
    readonly setupLogicalReplicationOnSourceDBIfNeeded?: boolean;
    readonly sourceDBServerFullyQualifiedDomainName?: string;
    /**
     * Database server metadata.
     */
    readonly sourceDBServerMetadata: types.outputs.DBServerMetadataResponse;
    readonly sourceDBServerResourceId?: string;
    readonly startDataMigration?: boolean;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    readonly targetDBServerFullyQualifiedDomainName?: string;
    /**
     * Database server metadata.
     */
    readonly targetDBServerMetadata: types.outputs.DBServerMetadataResponse;
    readonly targetDBServerResourceId: string;
    /**
     * To trigger cutover for entire migration we need to send this flag as true
     */
    readonly triggerCutover?: boolean;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets details of a migration.
 */
export function getMigrationOutput(args: GetMigrationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMigrationResult> {
    return pulumi.output(args).apply((a: any) => getMigration(a, opts))
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
    targetDBServerName: pulumi.Input<string>;
}
