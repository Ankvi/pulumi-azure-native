import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Database Migration Resource for Mongo to CosmosDb.
 *
 * Uses Azure REST API version 2023-07-15-preview.
 */
export class DatabaseMigrationsMongoToCosmosDbvCoreMongo extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseMigrationsMongoToCosmosDbvCoreMongo resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DatabaseMigrationsMongoToCosmosDbvCoreMongo {
        return new DatabaseMigrationsMongoToCosmosDbvCoreMongo(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datamigration:DatabaseMigrationsMongoToCosmosDbvCoreMongo';

    /**
     * Returns true if the given object is an instance of DatabaseMigrationsMongoToCosmosDbvCoreMongo.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatabaseMigrationsMongoToCosmosDbvCoreMongo {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabaseMigrationsMongoToCosmosDbvCoreMongo.__pulumiType;
    }

    /**
     * List of Mongo Collections to be migrated.
     */
    public readonly collectionList!: pulumi.Output<types.outputs.MongoMigrationCollectionResponse[] | undefined>;
    /**
     * Database migration end time.
     */
    public /*out*/ readonly endedOn!: pulumi.Output<string>;
    /**
     *
     * Expected value is 'MongoToCosmosDbMongo'.
     */
    public readonly kind!: pulumi.Output<"MongoToCosmosDbMongo">;
    /**
     * Error details in case of migration failure.
     */
    public /*out*/ readonly migrationFailureError!: pulumi.Output<types.outputs.ErrorInfoResponse>;
    /**
     * ID for current migration operation.
     */
    public readonly migrationOperationId!: pulumi.Output<string | undefined>;
    /**
     * Resource Id of the Migration Service.
     */
    public readonly migrationService!: pulumi.Output<string | undefined>;
    /**
     * Migration status.
     */
    public /*out*/ readonly migrationStatus!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Error message for migration provisioning failure, if any.
     */
    public readonly provisioningError!: pulumi.Output<string | undefined>;
    /**
     * Provisioning State of migration. ProvisioningState as Succeeded implies that validations have been performed and migration has started.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource Id of the target resource.
     */
    public readonly scope!: pulumi.Output<string | undefined>;
    /**
     * Source Mongo connection details.
     */
    public readonly sourceMongoConnection!: pulumi.Output<types.outputs.MongoConnectionInformationResponse | undefined>;
    /**
     * Database migration start time.
     */
    public /*out*/ readonly startedOn!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Target Cosmos DB Mongo connection details.
     */
    public readonly targetMongoConnection!: pulumi.Output<types.outputs.MongoConnectionInformationResponse | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DatabaseMigrationsMongoToCosmosDbvCoreMongo resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseMigrationsMongoToCosmosDbvCoreMongoArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.targetResourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetResourceName'");
            }
            resourceInputs["collectionList"] = args ? args.collectionList : undefined;
            resourceInputs["kind"] = "MongoToCosmosDbMongo";
            resourceInputs["migrationName"] = args ? args.migrationName : undefined;
            resourceInputs["migrationOperationId"] = args ? args.migrationOperationId : undefined;
            resourceInputs["migrationService"] = args ? args.migrationService : undefined;
            resourceInputs["provisioningError"] = args ? args.provisioningError : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["sourceMongoConnection"] = args ? args.sourceMongoConnection : undefined;
            resourceInputs["targetMongoConnection"] = args ? args.targetMongoConnection : undefined;
            resourceInputs["targetResourceName"] = args ? args.targetResourceName : undefined;
            resourceInputs["endedOn"] = undefined /*out*/;
            resourceInputs["migrationFailureError"] = undefined /*out*/;
            resourceInputs["migrationStatus"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["startedOn"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["collectionList"] = undefined /*out*/;
            resourceInputs["endedOn"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["migrationFailureError"] = undefined /*out*/;
            resourceInputs["migrationOperationId"] = undefined /*out*/;
            resourceInputs["migrationService"] = undefined /*out*/;
            resourceInputs["migrationStatus"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningError"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["scope"] = undefined /*out*/;
            resourceInputs["sourceMongoConnection"] = undefined /*out*/;
            resourceInputs["startedOn"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["targetMongoConnection"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datamigration/v20230715preview:DatabaseMigrationsMongoToCosmosDbvCoreMongo" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DatabaseMigrationsMongoToCosmosDbvCoreMongo.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DatabaseMigrationsMongoToCosmosDbvCoreMongo resource.
 */
export interface DatabaseMigrationsMongoToCosmosDbvCoreMongoArgs {
    /**
     * List of Mongo Collections to be migrated.
     */
    collectionList?: pulumi.Input<pulumi.Input<types.inputs.MongoMigrationCollectionArgs>[]>;
    /**
     *
     * Expected value is 'MongoToCosmosDbMongo'.
     */
    kind: pulumi.Input<"MongoToCosmosDbMongo">;
    /**
     * Name of the migration.
     */
    migrationName?: pulumi.Input<string>;
    /**
     * ID for current migration operation.
     */
    migrationOperationId?: pulumi.Input<string>;
    /**
     * Resource Id of the Migration Service.
     */
    migrationService?: pulumi.Input<string>;
    /**
     * Error message for migration provisioning failure, if any.
     */
    provisioningError?: pulumi.Input<string>;
    /**
     * Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource Id of the target resource.
     */
    scope?: pulumi.Input<string>;
    /**
     * Source Mongo connection details.
     */
    sourceMongoConnection?: pulumi.Input<types.inputs.MongoConnectionInformationArgs>;
    /**
     * Target Cosmos DB Mongo connection details.
     */
    targetMongoConnection?: pulumi.Input<types.inputs.MongoConnectionInformationArgs>;
    /**
     * The name of the target resource/account.
     */
    targetResourceName: pulumi.Input<string>;
}