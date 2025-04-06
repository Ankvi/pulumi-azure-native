import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Database Migration Resource for SQL Database.
 *
 * Uses Azure REST API version 2023-07-15-preview. In version 2.x of the Azure Native provider, it used API version 2022-03-30-preview.
 *
 * Other available API versions: 2022-03-30-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native datamigration [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class DatabaseMigrationsSqlDb extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseMigrationsSqlDb resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DatabaseMigrationsSqlDb {
        return new DatabaseMigrationsSqlDb(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datamigration:DatabaseMigrationsSqlDb';

    /**
     * Returns true if the given object is an instance of DatabaseMigrationsSqlDb.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatabaseMigrationsSqlDb {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabaseMigrationsSqlDb.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Database Migration Resource properties for SQL database.
     */
    public readonly properties!: pulumi.Output<types.outputs.DatabaseMigrationPropertiesSqlDbResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DatabaseMigrationsSqlDb resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseMigrationsSqlDbArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sqlDbInstanceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sqlDbInstanceName'");
            }
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sqlDbInstanceName"] = args ? args.sqlDbInstanceName : undefined;
            resourceInputs["targetDbName"] = args ? args.targetDbName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datamigration/v20220330preview:DatabaseMigrationsSqlDb" }, { type: "azure-native:datamigration/v20230715preview:DatabaseMigrationsSqlDb" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DatabaseMigrationsSqlDb.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DatabaseMigrationsSqlDb resource.
 */
export interface DatabaseMigrationsSqlDbArgs {
    /**
     * Database Migration Resource properties for SQL database.
     */
    properties?: pulumi.Input<types.inputs.DatabaseMigrationPropertiesSqlDbArgs>;
    /**
     * Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    sqlDbInstanceName: pulumi.Input<string>;
    /**
     * The name of the target database.
     */
    targetDbName?: pulumi.Input<string>;
}