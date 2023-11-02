import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure Health Bot resource definition
 * Azure REST API version: 2023-05-01. Prior API version in Azure Native 1.x: 2020-12-08.
 *
 * Other available API versions: 2020-12-08-preview.
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
    public static readonly __pulumiType = 'azure-native:healthbot:Bot';

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
     * The identity of the Azure Health Bot.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The set of properties specific to Azure Health Bot resource.
     */
    public readonly properties!: pulumi.Output<types.outputs.HealthBotPropertiesResponse>;
    /**
     * SKU of the Azure Health Bot.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

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
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["botName"] = args ? args.botName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:healthbot/v20201020:Bot" }, { type: "azure-native:healthbot/v20201020preview:Bot" }, { type: "azure-native:healthbot/v20201208:Bot" }, { type: "azure-native:healthbot/v20201208preview:Bot" }, { type: "azure-native:healthbot/v20210610:Bot" }, { type: "azure-native:healthbot/v20210824:Bot" }, { type: "azure-native:healthbot/v20220808:Bot" }, { type: "azure-native:healthbot/v20230501:Bot" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Bot.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Bot resource.
 */
export interface BotArgs {
    /**
     * The name of the Bot resource.
     */
    botName?: pulumi.Input<string>;
    /**
     * The identity of the Azure Health Bot.
     */
    identity?: pulumi.Input<types.inputs.IdentityArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The set of properties specific to Azure Health Bot resource.
     */
    properties?: pulumi.Input<types.inputs.HealthBotPropertiesArgs>;
    /**
     * The name of the Bot resource group in the user subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * SKU of the Azure Health Bot.
     */
    sku: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
