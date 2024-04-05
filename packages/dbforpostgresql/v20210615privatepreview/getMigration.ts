import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets details of a migration.
 */
export function getMigration(args: GetMigrationArgs, opts?: pulumi.InvokeOptions): Promise<GetMigrationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbforpostgresql/v20210615privatepreview:getMigration", {
        "migrationName": args.migrationName,
        "targetDBServerName": args.targetDBServerName,
        "targetDBServerResourceGroupName": args.targetDBServerResourceGroupName,
        "targetDBServerSubscriptionId": args.targetDBServerSubscriptionId,
    }, opts);
}

export interface GetMigrationArgs {
    /**
     * The name of the migration.
     */
    migrationName: string;
    /**
     * The name of the target database server.
     */
    targetDBServerName: string;
    /**
     * The resource group name of the target database server.
     */
    targetDBServerResourceGroupName: string;
    /**
     * The subscription ID of the target database server.
     */
    targetDBServerSubscriptionId: string;
}

/**
 * Represents a migration resource.
 */
export interface GetMigrationResult {
    /**
     * Migration status.
     */
    readonly currentStatus: types.outputs.MigrationStatusResponse;
    readonly dBsToMigrate?: string[];
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
    readonly migrationName: string;
    /**
     * Migration resource group.
     */
    readonly migrationResourceGroup?: types.outputs.MigrationResourceGroupResponse;
    readonly migrationWindowStartTimeInUtc?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    readonly overwriteDBsInTarget?: boolean;
    /**
     * Migration secret parameters.
     */
    readonly secretParameters?: types.outputs.MigrationSecretParametersResponse;
    readonly setupLogicalReplicationOnSourceDBIfNeeded?: boolean;
    /**
     * Database server metadata.
     */
    readonly sourceDBServerMetadata: types.outputs.DBServerMetadataResponse;
    readonly sourceDBServerResourceId?: string;
    readonly startDataMigration?: boolean;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Database server metadata.
     */
    readonly targetDBServerMetadata: types.outputs.DBServerMetadataResponse;
    readonly targetDBServerResourceId: string;
    readonly triggerCutover?: boolean;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    readonly userAssignedIdentityResourceId?: string;
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
     * The name of the target database server.
     */
    targetDBServerName: pulumi.Input<string>;
    /**
     * The resource group name of the target database server.
     */
    targetDBServerResourceGroupName: pulumi.Input<string>;
    /**
     * The subscription ID of the target database server.
     */
    targetDBServerSubscriptionId: pulumi.Input<string>;
}