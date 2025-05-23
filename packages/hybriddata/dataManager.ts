import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The DataManager resource.
 *
 * Uses Azure REST API version 2019-06-01. In version 2.x of the Azure Native provider, it used API version 2019-06-01.
 */
export class DataManager extends pulumi.CustomResource {
    /**
     * Get an existing DataManager resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DataManager {
        return new DataManager(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:hybriddata:DataManager';

    /**
     * Returns true if the given object is an instance of DataManager.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataManager {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataManager.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Etag of the Resource.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East
     * US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo
     * region is specified on update the request will succeed.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The Resource Name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The sku type.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource
     * (across resource groups).
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DataManager resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataManagerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["dataManagerName"] = args ? args.dataManagerName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hybriddata/v20160601:DataManager" }, { type: "azure-native:hybriddata/v20190601:DataManager" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DataManager.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DataManager resource.
 */
export interface DataManagerArgs {
    /**
     * The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
     */
    dataManagerName?: pulumi.Input<string>;
    /**
     * The location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East
     * US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo
     * region is specified on update the request will succeed.
     */
    location?: pulumi.Input<string>;
    /**
     * The Resource Group Name
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The sku type.
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource
     * (across resource groups).
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}