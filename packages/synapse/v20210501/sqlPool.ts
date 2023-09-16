import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * A SQL Analytics pool
 */
export class SqlPool extends pulumi.CustomResource {
    /**
     * Get an existing SqlPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SqlPool {
        return new SqlPool(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:synapse/v20210501:SqlPool';

    /**
     * Returns true if the given object is an instance of SqlPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SqlPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SqlPool.__pulumiType;
    }

    /**
     * Collation mode
     */
    public readonly collation!: pulumi.Output<string | undefined>;
    /**
     * Specifies the mode of sql pool creation.
     *
     * Default: regular sql pool creation.
     *
     * PointInTimeRestore: Creates a sql pool by restoring a point in time backup of an existing sql pool. sourceDatabaseId must be specified as the resource ID of the existing sql pool, and restorePointInTime must be specified.
     *
     * Recovery: Creates a sql pool by a geo-replicated backup. sourceDatabaseId  must be specified as the recoverableDatabaseId to restore.
     *
     * Restore: Creates a sql pool by restoring a backup of a deleted sql  pool. SourceDatabaseId should be the sql pool's original resource ID. SourceDatabaseId and sourceDatabaseDeletionDate must be specified.
     */
    public readonly createMode!: pulumi.Output<string | undefined>;
    /**
     * Date the SQL pool was created
     */
    public readonly creationDate!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Maximum size in bytes
     */
    public readonly maxSizeBytes!: pulumi.Output<number | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource state
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Backup database to restore from
     */
    public readonly recoverableDatabaseId!: pulumi.Output<string | undefined>;
    /**
     * Snapshot time to restore
     */
    public readonly restorePointInTime!: pulumi.Output<string | undefined>;
    /**
     * SQL pool SKU
     */
    public readonly sku!: pulumi.Output<types.outputs.synapse.v20210501.SkuResponse | undefined>;
    /**
     * Source database to create from
     */
    public readonly sourceDatabaseId!: pulumi.Output<string | undefined>;
    /**
     * Resource status
     */
    public readonly status!: pulumi.Output<string | undefined>;
    /**
     * The storage account type used to store backups for this sql pool.
     */
    public readonly storageAccountType!: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SqlPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlPoolArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["collation"] = args ? args.collation : undefined;
            resourceInputs["createMode"] = args ? args.createMode : undefined;
            resourceInputs["creationDate"] = args ? args.creationDate : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["maxSizeBytes"] = args ? args.maxSizeBytes : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["recoverableDatabaseId"] = args ? args.recoverableDatabaseId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["restorePointInTime"] = args ? args.restorePointInTime : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["sourceDatabaseId"] = args ? args.sourceDatabaseId : undefined;
            resourceInputs["sqlPoolName"] = args ? args.sqlPoolName : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["storageAccountType"] = args ? args.storageAccountType : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["collation"] = undefined /*out*/;
            resourceInputs["createMode"] = undefined /*out*/;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["maxSizeBytes"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["recoverableDatabaseId"] = undefined /*out*/;
            resourceInputs["restorePointInTime"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["sourceDatabaseId"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["storageAccountType"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:synapse:SqlPool" }, { type: "azure-native:synapse/v20190601preview:SqlPool" }, { type: "azure-native:synapse/v20200401preview:SqlPool" }, { type: "azure-native:synapse/v20201201:SqlPool" }, { type: "azure-native:synapse/v20210301:SqlPool" }, { type: "azure-native:synapse/v20210401preview:SqlPool" }, { type: "azure-native:synapse/v20210601:SqlPool" }, { type: "azure-native:synapse/v20210601preview:SqlPool" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SqlPool.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SqlPool resource.
 */
export interface SqlPoolArgs {
    /**
     * Collation mode
     */
    collation?: pulumi.Input<string>;
    /**
     * Specifies the mode of sql pool creation.
     *
     * Default: regular sql pool creation.
     *
     * PointInTimeRestore: Creates a sql pool by restoring a point in time backup of an existing sql pool. sourceDatabaseId must be specified as the resource ID of the existing sql pool, and restorePointInTime must be specified.
     *
     * Recovery: Creates a sql pool by a geo-replicated backup. sourceDatabaseId  must be specified as the recoverableDatabaseId to restore.
     *
     * Restore: Creates a sql pool by restoring a backup of a deleted sql  pool. SourceDatabaseId should be the sql pool's original resource ID. SourceDatabaseId and sourceDatabaseDeletionDate must be specified.
     */
    createMode?: pulumi.Input<string | types.enums.v20210501.CreateMode>;
    /**
     * Date the SQL pool was created
     */
    creationDate?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Maximum size in bytes
     */
    maxSizeBytes?: pulumi.Input<number>;
    /**
     * Resource state
     */
    provisioningState?: pulumi.Input<string>;
    /**
     * Backup database to restore from
     */
    recoverableDatabaseId?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Snapshot time to restore
     */
    restorePointInTime?: pulumi.Input<string>;
    /**
     * SQL pool SKU
     */
    sku?: pulumi.Input<types.inputs.synapse.v20210501.SkuArgs>;
    /**
     * Source database to create from
     */
    sourceDatabaseId?: pulumi.Input<string>;
    /**
     * SQL pool name
     */
    sqlPoolName?: pulumi.Input<string>;
    /**
     * Resource status
     */
    status?: pulumi.Input<string>;
    /**
     * The storage account type used to store backups for this sql pool.
     */
    storageAccountType?: pulumi.Input<string | types.enums.v20210501.StorageAccountType>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the workspace
     */
    workspaceName: pulumi.Input<string>;
}
