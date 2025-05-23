import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * A SQL server.
 *
 * Uses Azure REST API version 2019-07-24-preview. In version 2.x of the Azure Native provider, it used API version 2019-07-24-preview.
 */
export class SqlServer extends pulumi.CustomResource {
    /**
     * Get an existing SqlServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SqlServer {
        return new SqlServer(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azuredata:SqlServer';

    /**
     * Returns true if the given object is an instance of SqlServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SqlServer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SqlServer.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Cores of the Sql Server.
     */
    public readonly cores!: pulumi.Output<number | undefined>;
    /**
     * Sql Server Edition.
     */
    public readonly edition!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Sql Server Json Property Bag.
     */
    public readonly propertyBag!: pulumi.Output<string | undefined>;
    /**
     * ID for Parent Sql Server Registration.
     */
    public readonly registrationID!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Version of the Sql Server.
     */
    public readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a SqlServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlServerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sqlServerRegistrationName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sqlServerRegistrationName'");
            }
            resourceInputs["cores"] = args ? args.cores : undefined;
            resourceInputs["edition"] = args ? args.edition : undefined;
            resourceInputs["propertyBag"] = args ? args.propertyBag : undefined;
            resourceInputs["registrationID"] = args ? args.registrationID : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sqlServerName"] = args ? args.sqlServerName : undefined;
            resourceInputs["sqlServerRegistrationName"] = args ? args.sqlServerRegistrationName : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["cores"] = undefined /*out*/;
            resourceInputs["edition"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["propertyBag"] = undefined /*out*/;
            resourceInputs["registrationID"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azuredata/v20170301preview:SqlServer" }, { type: "azure-native:azuredata/v20190724preview:SqlServer" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SqlServer.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SqlServer resource.
 */
export interface SqlServerArgs {
    /**
     * Cores of the Sql Server.
     */
    cores?: pulumi.Input<number>;
    /**
     * Sql Server Edition.
     */
    edition?: pulumi.Input<string>;
    /**
     * Sql Server Json Property Bag.
     */
    propertyBag?: pulumi.Input<string>;
    /**
     * ID for Parent Sql Server Registration.
     */
    registrationID?: pulumi.Input<string>;
    /**
     * Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the SQL Server.
     */
    sqlServerName?: pulumi.Input<string>;
    /**
     * Name of the SQL Server registration.
     */
    sqlServerRegistrationName: pulumi.Input<string>;
    /**
     * Version of the Sql Server.
     */
    version?: pulumi.Input<string>;
}