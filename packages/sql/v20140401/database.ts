import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a database.
 */
export class Database extends pulumi.CustomResource {
    /**
     * Get an existing Database resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Database {
        return new Database(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20140401:Database';

    /**
     * Returns true if the given object is an instance of Database.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Database {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Database.__pulumiType;
    }

    /**
     * The collation of the database. If createMode is not Default, this value is ignored.
     */
    public readonly collation!: pulumi.Output<string | undefined>;
    /**
     * The containment state of the database.
     */
    public /*out*/ readonly containmentState!: pulumi.Output<number>;
    /**
     * The creation date of the database (ISO8601 format).
     */
    public /*out*/ readonly creationDate!: pulumi.Output<string>;
    /**
     * The current service level objective ID of the database. This is the ID of the service level objective that is currently active.
     */
    public /*out*/ readonly currentServiceObjectiveId!: pulumi.Output<string>;
    /**
     * The ID of the database.
     */
    public /*out*/ readonly databaseId!: pulumi.Output<string>;
    /**
     * The default secondary region for this database.
     */
    public /*out*/ readonly defaultSecondaryLocation!: pulumi.Output<string>;
    /**
     * This records the earliest start date and time that restore is available for this database (ISO8601 format).
     */
    public /*out*/ readonly earliestRestoreDate!: pulumi.Output<string>;
    /**
     * The edition of the database. The DatabaseEditions enumeration contains all the valid editions. If createMode is NonReadableSecondary or OnlineSecondary, this value is ignored.
     * 
     * The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or one of the following commands:
     * 
     * ```azurecli
     * az sql db list-editions -l <location> -o table
     * ````
     * 
     * ```powershell
     * Get-AzSqlServerServiceObjective -Location <location>
     * ````
     */
    public readonly edition!: pulumi.Output<string | undefined>;
    /**
     * The name of the elastic pool the database is in. If elasticPoolName and requestedServiceObjectiveName are both updated, the value of requestedServiceObjectiveName is ignored. Not supported for DataWarehouse edition.
     */
    public readonly elasticPoolName!: pulumi.Output<string | undefined>;
    /**
     * The resource identifier of the failover group containing this database.
     */
    public /*out*/ readonly failoverGroupId!: pulumi.Output<string>;
    /**
     * Kind of database.  This is metadata used for the Azure portal experience.
     */
    public /*out*/ readonly kind!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The max size of the database expressed in bytes. If createMode is not Default, this value is ignored. To see possible values, query the capabilities API (/subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationID}/capabilities) referred to by operationId: "Capabilities_ListByLocation."
     */
    public readonly maxSizeBytes!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Conditional. If the database is a geo-secondary, readScale indicates whether read-only connections are allowed to this database or not. Not supported for DataWarehouse edition.
     */
    public readonly readScale!: pulumi.Output<string | undefined>;
    /**
     * The recommended indices for this database.
     */
    public /*out*/ readonly recommendedIndex!: pulumi.Output<types.outputs.RecommendedIndexResponse[]>;
    /**
     * The configured service level objective ID of the database. This is the service level objective that is in the process of being applied to the database. Once successfully updated, it will match the value of currentServiceObjectiveId property. If requestedServiceObjectiveId and requestedServiceObjectiveName are both updated, the value of requestedServiceObjectiveId overrides the value of requestedServiceObjectiveName.
     * 
     * The list of SKUs may vary by region and support offer. To determine the service objective ids that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API.
     */
    public readonly requestedServiceObjectiveId!: pulumi.Output<string | undefined>;
    /**
     * The name of the configured service level objective of the database. This is the service level objective that is in the process of being applied to the database. Once successfully updated, it will match the value of serviceLevelObjective property. 
     * 
     * The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or one of the following commands:
     * 
     * ```azurecli
     * az sql db list-editions -l <location> -o table
     * ````
     * 
     * ```powershell
     * Get-AzSqlServerServiceObjective -Location <location>
     * ````
     */
    public readonly requestedServiceObjectiveName!: pulumi.Output<string | undefined>;
    /**
     * The current service level objective of the database.
     */
    public /*out*/ readonly serviceLevelObjective!: pulumi.Output<string>;
    /**
     * The list of service tier advisors for this database. Expanded property
     */
    public /*out*/ readonly serviceTierAdvisors!: pulumi.Output<types.outputs.ServiceTierAdvisorResponse[]>;
    /**
     * The status of the database.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The transparent data encryption info for this database.
     */
    public /*out*/ readonly transparentDataEncryption!: pulumi.Output<types.outputs.TransparentDataEncryptionResponse[]>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Whether or not this database is zone redundant, which means the replicas of this database will be spread across multiple availability zones.
     */
    public readonly zoneRedundant!: pulumi.Output<boolean | undefined>;

    /**
     * Create a Database resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            resourceInputs["collation"] = args ? args.collation : undefined;
            resourceInputs["createMode"] = args ? args.createMode : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["edition"] = args ? args.edition : undefined;
            resourceInputs["elasticPoolName"] = args ? args.elasticPoolName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["maxSizeBytes"] = args ? args.maxSizeBytes : undefined;
            resourceInputs["readScale"] = args ? args.readScale : undefined;
            resourceInputs["recoveryServicesRecoveryPointResourceId"] = args ? args.recoveryServicesRecoveryPointResourceId : undefined;
            resourceInputs["requestedServiceObjectiveId"] = args ? args.requestedServiceObjectiveId : undefined;
            resourceInputs["requestedServiceObjectiveName"] = args ? args.requestedServiceObjectiveName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["restorePointInTime"] = args ? args.restorePointInTime : undefined;
            resourceInputs["sampleName"] = args ? args.sampleName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["sourceDatabaseDeletionDate"] = args ? args.sourceDatabaseDeletionDate : undefined;
            resourceInputs["sourceDatabaseId"] = args ? args.sourceDatabaseId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["zoneRedundant"] = args ? args.zoneRedundant : undefined;
            resourceInputs["containmentState"] = undefined /*out*/;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["currentServiceObjectiveId"] = undefined /*out*/;
            resourceInputs["databaseId"] = undefined /*out*/;
            resourceInputs["defaultSecondaryLocation"] = undefined /*out*/;
            resourceInputs["earliestRestoreDate"] = undefined /*out*/;
            resourceInputs["failoverGroupId"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["recommendedIndex"] = undefined /*out*/;
            resourceInputs["serviceLevelObjective"] = undefined /*out*/;
            resourceInputs["serviceTierAdvisors"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["transparentDataEncryption"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["collation"] = undefined /*out*/;
            resourceInputs["containmentState"] = undefined /*out*/;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["currentServiceObjectiveId"] = undefined /*out*/;
            resourceInputs["databaseId"] = undefined /*out*/;
            resourceInputs["defaultSecondaryLocation"] = undefined /*out*/;
            resourceInputs["earliestRestoreDate"] = undefined /*out*/;
            resourceInputs["edition"] = undefined /*out*/;
            resourceInputs["elasticPoolName"] = undefined /*out*/;
            resourceInputs["failoverGroupId"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["maxSizeBytes"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["readScale"] = undefined /*out*/;
            resourceInputs["recommendedIndex"] = undefined /*out*/;
            resourceInputs["requestedServiceObjectiveId"] = undefined /*out*/;
            resourceInputs["requestedServiceObjectiveName"] = undefined /*out*/;
            resourceInputs["serviceLevelObjective"] = undefined /*out*/;
            resourceInputs["serviceTierAdvisors"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["transparentDataEncryption"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["zoneRedundant"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:Database" }, { type: "azure-native:sql/v20170301preview:Database" }, { type: "azure-native:sql/v20171001preview:Database" }, { type: "azure-native:sql/v20190601preview:Database" }, { type: "azure-native:sql/v20200202preview:Database" }, { type: "azure-native:sql/v20200801preview:Database" }, { type: "azure-native:sql/v20201101preview:Database" }, { type: "azure-native:sql/v20210201preview:Database" }, { type: "azure-native:sql/v20210501preview:Database" }, { type: "azure-native:sql/v20210801preview:Database" }, { type: "azure-native:sql/v20211101:Database" }, { type: "azure-native:sql/v20211101preview:Database" }, { type: "azure-native:sql/v20220201preview:Database" }, { type: "azure-native:sql/v20220501preview:Database" }, { type: "azure-native:sql/v20220801preview:Database" }, { type: "azure-native:sql/v20221101preview:Database" }, { type: "azure-native:sql/v20230201preview:Database" }, { type: "azure-native:sql/v20230501preview:Database" }, { type: "azure-native:sql/v20230801preview:Database" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Database.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Database resource.
 */
export interface DatabaseArgs {
    /**
     * The collation of the database. If createMode is not Default, this value is ignored.
     */
    collation?: pulumi.Input<string>;
    /**
     * Specifies the mode of database creation.
     *
     * Default: regular database creation.
     *
     * Copy: creates a database as a copy of an existing database. sourceDatabaseId must be specified as the resource ID of the source database.
     *
     * OnlineSecondary/NonReadableSecondary: creates a database as a (readable or nonreadable) secondary replica of an existing database. sourceDatabaseId must be specified as the resource ID of the existing primary database.
     *
     * PointInTimeRestore: Creates a database by restoring a point in time backup of an existing database. sourceDatabaseId must be specified as the resource ID of the existing database, and restorePointInTime must be specified.
     *
     * Recovery: Creates a database by restoring a geo-replicated backup. sourceDatabaseId must be specified as the recoverable database resource ID to restore.
     *
     * Restore: Creates a database by restoring a backup of a deleted database. sourceDatabaseId must be specified. If sourceDatabaseId is the database's original resource ID, then sourceDatabaseDeletionDate must be specified. Otherwise sourceDatabaseId must be the restorable dropped database resource ID and sourceDatabaseDeletionDate is ignored. restorePointInTime may also be specified to restore from an earlier point in time.
     *
     * RestoreLongTermRetentionBackup: Creates a database by restoring from a long term retention vault. recoveryServicesRecoveryPointResourceId must be specified as the recovery point resource ID.
     *
     * Copy, NonReadableSecondary, OnlineSecondary and RestoreLongTermRetentionBackup are not supported for DataWarehouse edition.
     */
    createMode?: pulumi.Input<string | types.enums.CreateMode>;
    /**
     * The name of the database to be operated on (updated or created).
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The edition of the database. The DatabaseEditions enumeration contains all the valid editions. If createMode is NonReadableSecondary or OnlineSecondary, this value is ignored.
     * 
     * The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or one of the following commands:
     * 
     * ```azurecli
     * az sql db list-editions -l <location> -o table
     * ````
     * 
     * ```powershell
     * Get-AzSqlServerServiceObjective -Location <location>
     * ````
     */
    edition?: pulumi.Input<string | types.enums.DatabaseEdition>;
    /**
     * The name of the elastic pool the database is in. If elasticPoolName and requestedServiceObjectiveName are both updated, the value of requestedServiceObjectiveName is ignored. Not supported for DataWarehouse edition.
     */
    elasticPoolName?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The max size of the database expressed in bytes. If createMode is not Default, this value is ignored. To see possible values, query the capabilities API (/subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationID}/capabilities) referred to by operationId: "Capabilities_ListByLocation."
     */
    maxSizeBytes?: pulumi.Input<string>;
    /**
     * Conditional. If the database is a geo-secondary, readScale indicates whether read-only connections are allowed to this database or not. Not supported for DataWarehouse edition.
     */
    readScale?: pulumi.Input<string | types.enums.ReadScale>;
    /**
     * Conditional. If createMode is RestoreLongTermRetentionBackup, then this value is required. Specifies the resource ID of the recovery point to restore from.
     */
    recoveryServicesRecoveryPointResourceId?: pulumi.Input<string>;
    /**
     * The configured service level objective ID of the database. This is the service level objective that is in the process of being applied to the database. Once successfully updated, it will match the value of currentServiceObjectiveId property. If requestedServiceObjectiveId and requestedServiceObjectiveName are both updated, the value of requestedServiceObjectiveId overrides the value of requestedServiceObjectiveName.
     * 
     * The list of SKUs may vary by region and support offer. To determine the service objective ids that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API.
     */
    requestedServiceObjectiveId?: pulumi.Input<string>;
    /**
     * The name of the configured service level objective of the database. This is the service level objective that is in the process of being applied to the database. Once successfully updated, it will match the value of serviceLevelObjective property. 
     * 
     * The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or one of the following commands:
     * 
     * ```azurecli
     * az sql db list-editions -l <location> -o table
     * ````
     * 
     * ```powershell
     * Get-AzSqlServerServiceObjective -Location <location>
     * ````
     */
    requestedServiceObjectiveName?: pulumi.Input<string | types.enums.ServiceObjectiveName>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Conditional. If createMode is PointInTimeRestore, this value is required. If createMode is Restore, this value is optional. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database. Must be greater than or equal to the source database's earliestRestoreDate value.
     */
    restorePointInTime?: pulumi.Input<string>;
    /**
     * Indicates the name of the sample schema to apply when creating this database. If createMode is not Default, this value is ignored. Not supported for DataWarehouse edition.
     */
    sampleName?: pulumi.Input<string | types.enums.SampleName>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * Conditional. If createMode is Restore and sourceDatabaseId is the deleted database's original resource id when it existed (as opposed to its current restorable dropped database id), then this value is required. Specifies the time that the database was deleted.
     */
    sourceDatabaseDeletionDate?: pulumi.Input<string>;
    /**
     * Conditional. If createMode is Copy, NonReadableSecondary, OnlineSecondary, PointInTimeRestore, Recovery, or Restore, then this value is required. Specifies the resource ID of the source database. If createMode is NonReadableSecondary or OnlineSecondary, the name of the source database must be the same as the new database being created.
     */
    sourceDatabaseId?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Whether or not this database is zone redundant, which means the replicas of this database will be spread across multiple availability zones.
     */
    zoneRedundant?: pulumi.Input<boolean>;
}