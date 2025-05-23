import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure Data Catalog.
 *
 * Uses Azure REST API version 2016-03-30. In version 2.x of the Azure Native provider, it used API version 2016-03-30.
 */
export class ADCCatalog extends pulumi.CustomResource {
    /**
     * Get an existing ADCCatalog resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ADCCatalog {
        return new ADCCatalog(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datacatalog:ADCCatalog';

    /**
     * Returns true if the given object is an instance of ADCCatalog.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ADCCatalog {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ADCCatalog.__pulumiType;
    }

    /**
     * Azure data catalog admin list.
     */
    public readonly admins!: pulumi.Output<types.outputs.PrincipalsResponse[] | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Automatic unit adjustment enabled or not.
     */
    public readonly enableAutomaticUnitAdjustment!: pulumi.Output<boolean | undefined>;
    /**
     * Resource etag
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure data catalog SKU.
     */
    public readonly sku!: pulumi.Output<string | undefined>;
    /**
     * Azure data catalog provision status.
     */
    public readonly successfullyProvisioned!: pulumi.Output<boolean | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Azure data catalog units.
     */
    public readonly units!: pulumi.Output<number | undefined>;
    /**
     * Azure data catalog user list.
     */
    public readonly users!: pulumi.Output<types.outputs.PrincipalsResponse[] | undefined>;

    /**
     * Create a ADCCatalog resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ADCCatalogArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["admins"] = args ? args.admins : undefined;
            resourceInputs["catalogName"] = args ? args.catalogName : undefined;
            resourceInputs["enableAutomaticUnitAdjustment"] = args ? args.enableAutomaticUnitAdjustment : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["successfullyProvisioned"] = args ? args.successfullyProvisioned : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["units"] = args ? args.units : undefined;
            resourceInputs["users"] = args ? args.users : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["admins"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["enableAutomaticUnitAdjustment"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["successfullyProvisioned"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["units"] = undefined /*out*/;
            resourceInputs["users"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datacatalog/v20160330:ADCCatalog" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ADCCatalog.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ADCCatalog resource.
 */
export interface ADCCatalogArgs {
    /**
     * Azure data catalog admin list.
     */
    admins?: pulumi.Input<pulumi.Input<types.inputs.PrincipalsArgs>[]>;
    /**
     * The name of the data catalog in the specified subscription and resource group.
     */
    catalogName?: pulumi.Input<string>;
    /**
     * Automatic unit adjustment enabled or not.
     */
    enableAutomaticUnitAdjustment?: pulumi.Input<boolean>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Azure data catalog SKU.
     */
    sku?: pulumi.Input<string | types.enums.SkuType>;
    /**
     * Azure data catalog provision status.
     */
    successfullyProvisioned?: pulumi.Input<boolean>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Azure data catalog units.
     */
    units?: pulumi.Input<number>;
    /**
     * Azure data catalog user list.
     */
    users?: pulumi.Input<pulumi.Input<types.inputs.PrincipalsArgs>[]>;
}