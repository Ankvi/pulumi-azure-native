import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Bot resource definition
 *
 * Uses Azure REST API version 2022-09-15. In version 1.x of the Azure Native provider, it used API version 2021-03-01.
 *
 * Other available API versions: 2023-09-15-preview.
 */
export class Bot extends pulumi.CustomResource {
    /**
     * Get an existing Bot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Bot {
        return new Bot(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:botservice:Bot';

    /**
     * Returns true if the given object is an instance of Bot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Bot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Bot.__pulumiType;
    }

    /**
     * Entity Tag.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Required. Gets or sets the Kind of the resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Specifies the location of the resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The set of properties specific to bot resource
     */
    public readonly properties!: pulumi.Output<types.outputs.BotPropertiesResponse>;
    /**
     * Gets or sets the SKU of the resource.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Specifies the type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Entity zones
     */
    public /*out*/ readonly zones!: pulumi.Output<string[]>;

    /**
     * Create a Bot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BotArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? (args.properties ? pulumi.output(args.properties).apply(types.inputs.botPropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:botservice/v20171201:Bot" }, { type: "azure-native:botservice/v20180712:Bot" }, { type: "azure-native:botservice/v20200602:Bot" }, { type: "azure-native:botservice/v20210301:Bot" }, { type: "azure-native:botservice/v20210501preview:Bot" }, { type: "azure-native:botservice/v20220615preview:Bot" }, { type: "azure-native:botservice/v20220915:Bot" }, { type: "azure-native:botservice/v20230915preview:Bot" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Bot.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Bot resource.
 */
export interface BotArgs {
    /**
     * Required. Gets or sets the Kind of the resource.
     */
    kind?: pulumi.Input<string | types.enums.Kind>;
    /**
     * Specifies the location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The set of properties specific to bot resource
     */
    properties?: pulumi.Input<types.inputs.BotPropertiesArgs>;
    /**
     * The name of the Bot resource group in the user subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Bot resource.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * Gets or sets the SKU of the resource.
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}