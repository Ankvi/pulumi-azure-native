import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Static Site Database Connection resource.
 */
export class StaticSiteBuildDatabaseConnection extends pulumi.CustomResource {
    /**
     * Get an existing StaticSiteBuildDatabaseConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StaticSiteBuildDatabaseConnection {
        return new StaticSiteBuildDatabaseConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web/v20220901:StaticSiteBuildDatabaseConnection';

    /**
     * Returns true if the given object is an instance of StaticSiteBuildDatabaseConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StaticSiteBuildDatabaseConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StaticSiteBuildDatabaseConnection.__pulumiType;
    }

    /**
     * A list of configuration files associated with this database connection.
     */
    public /*out*/ readonly configurationFiles!: pulumi.Output<types.outputs.StaticSiteDatabaseConnectionConfigurationFileOverviewResponse[]>;
    /**
     * If present, the identity is used in conjunction with connection string to connect to the database. Use of the system-assigned managed identity is indicated with the string 'SystemAssigned', while use of a user-assigned managed identity is indicated with the resource id of the managed identity resource.
     */
    public readonly connectionIdentity!: pulumi.Output<string | undefined>;
    /**
     * The connection string to use to connect to the database.
     */
    public readonly connectionString!: pulumi.Output<string | undefined>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The region of the database resource.
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * The resource id of the database.
     */
    public readonly resourceId!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a StaticSiteBuildDatabaseConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StaticSiteBuildDatabaseConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.environmentName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentName'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.region === undefined) && !opts.urn) {
                throw new Error("Missing required property 'region'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceId'");
            }
            resourceInputs["connectionIdentity"] = args ? args.connectionIdentity : undefined;
            resourceInputs["connectionString"] = args ? args.connectionString : undefined;
            resourceInputs["databaseConnectionName"] = args ? args.databaseConnectionName : undefined;
            resourceInputs["environmentName"] = args ? args.environmentName : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceId"] = args ? args.resourceId : undefined;
            resourceInputs["configurationFiles"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["configurationFiles"] = undefined /*out*/;
            resourceInputs["connectionIdentity"] = undefined /*out*/;
            resourceInputs["connectionString"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["region"] = undefined /*out*/;
            resourceInputs["resourceId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web:StaticSiteBuildDatabaseConnection" }, { type: "azure-native:web/v20230101:StaticSiteBuildDatabaseConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(StaticSiteBuildDatabaseConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a StaticSiteBuildDatabaseConnection resource.
 */
export interface StaticSiteBuildDatabaseConnectionArgs {
    /**
     * If present, the identity is used in conjunction with connection string to connect to the database. Use of the system-assigned managed identity is indicated with the string 'SystemAssigned', while use of a user-assigned managed identity is indicated with the resource id of the managed identity resource.
     */
    connectionIdentity?: pulumi.Input<string>;
    /**
     * The connection string to use to connect to the database.
     */
    connectionString?: pulumi.Input<string>;
    /**
     * Name of the database connection.
     */
    databaseConnectionName?: pulumi.Input<string>;
    /**
     * The stage site identifier.
     */
    environmentName: pulumi.Input<string>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Name of the static site
     */
    name: pulumi.Input<string>;
    /**
     * The region of the database resource.
     */
    region: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource id of the database.
     */
    resourceId: pulumi.Input<string>;
}
