import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * A managed database resource.
 */
export class ManagedDatabase extends pulumi.CustomResource {
    /**
     * Get an existing ManagedDatabase resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagedDatabase {
        return new ManagedDatabase(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20211101:ManagedDatabase';

    /**
     * Returns true if the given object is an instance of ManagedDatabase.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagedDatabase {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagedDatabase.__pulumiType;
    }

    /**
     * Collation of the metadata catalog.
     */
    public readonly catalogCollation!: pulumi.Output<string | undefined>;
    /**
     * Collation of the managed database.
     */
    public readonly collation!: pulumi.Output<string | undefined>;
    /**
     * Creation date of the database.
     */
    public /*out*/ readonly creationDate!: pulumi.Output<string>;
    /**
     * Geo paired region.
     */
    public /*out*/ readonly defaultSecondaryLocation!: pulumi.Output<string>;
    /**
     * Earliest restore point in time for point in time restore.
     */
    public /*out*/ readonly earliestRestorePoint!: pulumi.Output<string>;
    /**
     * Instance Failover Group resource identifier that this managed database belongs to.
     */
    public /*out*/ readonly failoverGroupId!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Status of the database.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ManagedDatabase resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedDatabaseArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.managedInstanceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managedInstanceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["autoCompleteRestore"] = args ? args.autoCompleteRestore : undefined;
            resourceInputs["catalogCollation"] = args ? args.catalogCollation : undefined;
            resourceInputs["collation"] = args ? args.collation : undefined;
            resourceInputs["createMode"] = args ? args.createMode : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["lastBackupName"] = args ? args.lastBackupName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["longTermRetentionBackupResourceId"] = args ? args.longTermRetentionBackupResourceId : undefined;
            resourceInputs["managedInstanceName"] = args ? args.managedInstanceName : undefined;
            resourceInputs["recoverableDatabaseId"] = args ? args.recoverableDatabaseId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["restorableDroppedDatabaseId"] = args ? args.restorableDroppedDatabaseId : undefined;
            resourceInputs["restorePointInTime"] = args ? args.restorePointInTime : undefined;
            resourceInputs["sourceDatabaseId"] = args ? args.sourceDatabaseId : undefined;
            resourceInputs["storageContainerSasToken"] = args ? args.storageContainerSasToken : undefined;
            resourceInputs["storageContainerUri"] = args ? args.storageContainerUri : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["defaultSecondaryLocation"] = undefined /*out*/;
            resourceInputs["earliestRestorePoint"] = undefined /*out*/;
            resourceInputs["failoverGroupId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["catalogCollation"] = undefined /*out*/;
            resourceInputs["collation"] = undefined /*out*/;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["defaultSecondaryLocation"] = undefined /*out*/;
            resourceInputs["earliestRestorePoint"] = undefined /*out*/;
            resourceInputs["failoverGroupId"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:ManagedDatabase" }, { type: "azure-native:sql/v20170301preview:ManagedDatabase" }, { type: "azure-native:sql/v20180601preview:ManagedDatabase" }, { type: "azure-native:sql/v20190601preview:ManagedDatabase" }, { type: "azure-native:sql/v20200202preview:ManagedDatabase" }, { type: "azure-native:sql/v20200801preview:ManagedDatabase" }, { type: "azure-native:sql/v20201101preview:ManagedDatabase" }, { type: "azure-native:sql/v20210201preview:ManagedDatabase" }, { type: "azure-native:sql/v20210501preview:ManagedDatabase" }, { type: "azure-native:sql/v20210801preview:ManagedDatabase" }, { type: "azure-native:sql/v20211101preview:ManagedDatabase" }, { type: "azure-native:sql/v20220201preview:ManagedDatabase" }, { type: "azure-native:sql/v20220501preview:ManagedDatabase" }, { type: "azure-native:sql/v20220801preview:ManagedDatabase" }, { type: "azure-native:sql/v20221101preview:ManagedDatabase" }, { type: "azure-native:sql/v20230201preview:ManagedDatabase" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ManagedDatabase.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ManagedDatabase resource.
 */
export interface ManagedDatabaseArgs {
    /**
     * Whether to auto complete restore of this managed database.
     */
    autoCompleteRestore?: pulumi.Input<boolean>;
    /**
     * Collation of the metadata catalog.
     */
    catalogCollation?: pulumi.Input<string | types.enums.v20211101.CatalogCollationType>;
    /**
     * Collation of the managed database.
     */
    collation?: pulumi.Input<string>;
    /**
     * Managed database create mode. PointInTimeRestore: Create a database by restoring a point in time backup of an existing database. SourceDatabaseName, SourceManagedInstanceName and PointInTime must be specified. RestoreExternalBackup: Create a database by restoring from external backup files. Collation, StorageContainerUri and StorageContainerSasToken must be specified. Recovery: Creates a database by restoring a geo-replicated backup. RecoverableDatabaseId must be specified as the recoverable database resource ID to restore. RestoreLongTermRetentionBackup: Create a database by restoring from a long term retention backup (longTermRetentionBackupResourceId required).
     */
    createMode?: pulumi.Input<string | types.enums.v20211101.ManagedDatabaseCreateMode>;
    /**
     * The name of the database.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * Last backup file name for restore of this managed database.
     */
    lastBackupName?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Long Term Retention backup to be used for restore of this managed database.
     */
    longTermRetentionBackupResourceId?: pulumi.Input<string>;
    /**
     * The name of the managed instance.
     */
    managedInstanceName: pulumi.Input<string>;
    /**
     * The resource identifier of the recoverable database associated with create operation of this database.
     */
    recoverableDatabaseId?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The restorable dropped database resource id to restore when creating this database.
     */
    restorableDroppedDatabaseId?: pulumi.Input<string>;
    /**
     * Conditional. If createMode is PointInTimeRestore, this value is required. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
     */
    restorePointInTime?: pulumi.Input<string>;
    /**
     * The resource identifier of the source database associated with create operation of this database.
     */
    sourceDatabaseId?: pulumi.Input<string>;
    /**
     * Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the storage container sas token.
     */
    storageContainerSasToken?: pulumi.Input<string>;
    /**
     * Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the uri of the storage container where backups for this restore are stored.
     */
    storageContainerUri?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
