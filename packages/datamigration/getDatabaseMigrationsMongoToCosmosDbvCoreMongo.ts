import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get Database Migration resource.
 *
 * Uses Azure REST API version 2023-07-15-preview.
 */
export function getDatabaseMigrationsMongoToCosmosDbvCoreMongo(args: GetDatabaseMigrationsMongoToCosmosDbvCoreMongoArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseMigrationsMongoToCosmosDbvCoreMongoResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datamigration:getDatabaseMigrationsMongoToCosmosDbvCoreMongo", {
        "migrationName": args.migrationName,
        "resourceGroupName": args.resourceGroupName,
        "targetResourceName": args.targetResourceName,
    }, opts);
}

export interface GetDatabaseMigrationsMongoToCosmosDbvCoreMongoArgs {
    /**
     * Name of the migration.
     */
    migrationName: string;
    /**
     * Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the target resource/account.
     */
    targetResourceName: string;
}

/**
 * Database Migration Resource for Mongo to CosmosDb.
 */
export interface GetDatabaseMigrationsMongoToCosmosDbvCoreMongoResult {
    /**
     * List of Mongo Collections to be migrated.
     */
    readonly collectionList?: types.outputs.MongoMigrationCollectionResponse[];
    /**
     * Database migration end time.
     */
    readonly endedOn: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     *
     * Expected value is 'MongoToCosmosDbMongo'.
     */
    readonly kind: "MongoToCosmosDbMongo";
    /**
     * Error details in case of migration failure.
     */
    readonly migrationFailureError: types.outputs.ErrorInfoResponse;
    /**
     * ID for current migration operation.
     */
    readonly migrationOperationId?: string;
    /**
     * Resource Id of the Migration Service.
     */
    readonly migrationService?: string;
    /**
     * Migration status.
     */
    readonly migrationStatus: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Error message for migration provisioning failure, if any.
     */
    readonly provisioningError?: string;
    /**
     * Provisioning State of migration. ProvisioningState as Succeeded implies that validations have been performed and migration has started.
     */
    readonly provisioningState: string;
    /**
     * Resource Id of the target resource.
     */
    readonly scope?: string;
    /**
     * Source Mongo connection details.
     */
    readonly sourceMongoConnection?: types.outputs.MongoConnectionInformationResponse;
    /**
     * Database migration start time.
     */
    readonly startedOn: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Target Cosmos DB Mongo connection details.
     */
    readonly targetMongoConnection?: types.outputs.MongoConnectionInformationResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get Database Migration resource.
 *
 * Uses Azure REST API version 2023-07-15-preview.
 */
export function getDatabaseMigrationsMongoToCosmosDbvCoreMongoOutput(args: GetDatabaseMigrationsMongoToCosmosDbvCoreMongoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDatabaseMigrationsMongoToCosmosDbvCoreMongoResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datamigration:getDatabaseMigrationsMongoToCosmosDbvCoreMongo", {
        "migrationName": args.migrationName,
        "resourceGroupName": args.resourceGroupName,
        "targetResourceName": args.targetResourceName,
    }, opts);
}

export interface GetDatabaseMigrationsMongoToCosmosDbvCoreMongoOutputArgs {
    /**
     * Name of the migration.
     */
    migrationName: pulumi.Input<string>;
    /**
     * Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the target resource/account.
     */
    targetResourceName: pulumi.Input<string>;
}