import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * The EngagementFabric channel
 *
 * Uses Azure REST API version 2018-09-01-preview. In version 1.x of the Azure Native provider, it used API version 2018-09-01-preview.
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
    public static readonly __pulumiType = 'azure-native:engagementfabric:Channel';

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
     * The functions to be enabled for the channel
     */
    public readonly channelFunctions!: pulumi.Output<string[] | undefined>;
    /**
     * The channel type
     */
    public readonly channelType!: pulumi.Output<string>;
    /**
     * The channel credentials
     */
    public readonly credentials!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The fully qualified type of the resource
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

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
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.channelType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'channelType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["channelFunctions"] = args ? args.channelFunctions : undefined;
            resourceInputs["channelName"] = args ? args.channelName : undefined;
            resourceInputs["channelType"] = args ? args.channelType : undefined;
            resourceInputs["credentials"] = args ? args.credentials : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["channelFunctions"] = undefined /*out*/;
            resourceInputs["channelType"] = undefined /*out*/;
            resourceInputs["credentials"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:engagementfabric/v20180901preview:Channel" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Channel.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Channel resource.
 */
export interface ChannelArgs {
    /**
     * Account Name
     */
    accountName: pulumi.Input<string>;
    /**
     * The functions to be enabled for the channel
     */
    channelFunctions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Channel Name
     */
    channelName?: pulumi.Input<string>;
    /**
     * The channel type
     */
    channelType: pulumi.Input<string>;
    /**
     * The channel credentials
     */
    credentials?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Resource Group Name
     */
    resourceGroupName: pulumi.Input<string>;
}