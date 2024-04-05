import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A SqlManagedInstance.
 */
export class SqlManagedInstance extends pulumi.CustomResource {
    /**
     * Get an existing SqlManagedInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SqlManagedInstance {
        return new SqlManagedInstance(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azurearcdata/v20230115preview:SqlManagedInstance';

    /**
     * Returns true if the given object is an instance of SqlManagedInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SqlManagedInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SqlManagedInstance.__pulumiType;
    }

    /**
     * The extendedLocation of the resource.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * null
     */
    public readonly properties!: pulumi.Output<types.outputs.SqlManagedInstancePropertiesResponse>;
    /**
     * Resource sku.
     */
    public readonly sku!: pulumi.Output<types.outputs.SqlManagedInstanceSkuResponse | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SqlManagedInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlManagedInstanceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? (args.properties ? pulumi.output(args.properties).apply(types.inputs.sqlManagedInstancePropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? (args.sku ? pulumi.output(args.sku).apply(types.inputs.sqlManagedInstanceSkuArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["sqlManagedInstanceName"] = args ? args.sqlManagedInstanceName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azurearcdata:SqlManagedInstance" }, { type: "azure-native:azurearcdata/v20210601preview:SqlManagedInstance" }, { type: "azure-native:azurearcdata/v20210701preview:SqlManagedInstance" }, { type: "azure-native:azurearcdata/v20210801:SqlManagedInstance" }, { type: "azure-native:azurearcdata/v20211101:SqlManagedInstance" }, { type: "azure-native:azurearcdata/v20220301preview:SqlManagedInstance" }, { type: "azure-native:azurearcdata/v20220615preview:SqlManagedInstance" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SqlManagedInstance.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SqlManagedInstance resource.
 */
export interface SqlManagedInstanceArgs {
    /**
     * The extendedLocation of the resource.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * null
     */
    properties: pulumi.Input<types.inputs.SqlManagedInstancePropertiesArgs>;
    /**
     * The name of the Azure resource group
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource sku.
     */
    sku?: pulumi.Input<types.inputs.SqlManagedInstanceSkuArgs>;
    /**
     * Name of SQL Managed Instance
     */
    sqlManagedInstanceName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}