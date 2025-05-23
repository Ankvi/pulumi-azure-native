import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Bot channel resource definition
 *
 * Uses Azure REST API version 2023-09-15-preview. In version 2.x of the Azure Native provider, it used API version 2022-09-15.
 *
 * Other available API versions: 2022-09-15. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native botservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Channel extends pulumi.CustomResource {
    /**
     * Get an existing Channel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Channel {
        return new Channel(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:botservice:Channel';

    /**
     * Returns true if the given object is an instance of Channel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Channel {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Channel.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
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
     * The set of properties specific to bot channel resource
     */
    public readonly properties!: pulumi.Output<types.outputs.AcsChatChannelResponse | types.outputs.AlexaChannelResponse | types.outputs.DirectLineChannelResponse | types.outputs.DirectLineSpeechChannelResponse | types.outputs.EmailChannelResponse | types.outputs.FacebookChannelResponse | types.outputs.KikChannelResponse | types.outputs.LineChannelResponse | types.outputs.M365ExtensionsResponse | types.outputs.MsTeamsChannelResponse | types.outputs.OmnichannelResponse | types.outputs.OutlookChannelResponse | types.outputs.SearchAssistantResponse | types.outputs.SkypeChannelResponse | types.outputs.SlackChannelResponse | types.outputs.SmsChannelResponse | types.outputs.TelegramChannelResponse | types.outputs.TelephonyChannelResponse | types.outputs.WebChatChannelResponse>;
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
     * Create a Channel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ChannelArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            resourceInputs["channelName"] = args ? args.channelName : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
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
        const aliasOpts = { aliases: [{ type: "azure-native:botservice/v20171201:Channel" }, { type: "azure-native:botservice/v20180712:Channel" }, { type: "azure-native:botservice/v20200602:Channel" }, { type: "azure-native:botservice/v20210301:Channel" }, { type: "azure-native:botservice/v20210501preview:Channel" }, { type: "azure-native:botservice/v20220615preview:Channel" }, { type: "azure-native:botservice/v20220915:Channel" }, { type: "azure-native:botservice/v20230915preview:Channel" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Channel.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Channel resource.
 */
export interface ChannelArgs {
    /**
     * The name of the Channel resource.
     */
    channelName?: pulumi.Input<string>;
    /**
     * Required. Gets or sets the Kind of the resource.
     */
    kind?: pulumi.Input<string | types.enums.Kind>;
    /**
     * Specifies the location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The set of properties specific to bot channel resource
     */
    properties?: pulumi.Input<types.inputs.AcsChatChannelArgs | types.inputs.AlexaChannelArgs | types.inputs.DirectLineChannelArgs | types.inputs.DirectLineSpeechChannelArgs | types.inputs.EmailChannelArgs | types.inputs.FacebookChannelArgs | types.inputs.KikChannelArgs | types.inputs.LineChannelArgs | types.inputs.M365ExtensionsArgs | types.inputs.MsTeamsChannelArgs | types.inputs.OmnichannelArgs | types.inputs.OutlookChannelArgs | types.inputs.SearchAssistantArgs | types.inputs.SkypeChannelArgs | types.inputs.SlackChannelArgs | types.inputs.SmsChannelArgs | types.inputs.TelegramChannelArgs | types.inputs.TelephonyChannelArgs | types.inputs.WebChatChannelArgs>;
    /**
     * The name of the Bot resource group in the user subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Bot resource.
     */
    resourceName: pulumi.Input<string>;
    /**
     * Gets or sets the SKU of the resource.
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}