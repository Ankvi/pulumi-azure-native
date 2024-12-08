import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Channel info.
 * Azure REST API version: 2022-06-15. Prior API version in Azure Native 1.x: 2021-10-15-preview.
 *
 * Other available API versions: 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview.
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
    public static readonly __pulumiType = 'azure-native:eventgrid:Channel';

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
     * The type of the event channel which represents the direction flow of events.
     */
    public readonly channelType!: pulumi.Output<string | undefined>;
    /**
     * Expiration time of the channel. If this timer expires while the corresponding partner topic is never activated,
     * the channel and corresponding partner topic are deleted.
     */
    public readonly expirationTimeIfNotActivatedUtc!: pulumi.Output<string | undefined>;
    /**
     * Context or helpful message that can be used during the approval process by the subscriber.
     */
    public readonly messageForActivation!: pulumi.Output<string | undefined>;
    /**
     * Name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * This property should be populated when channelType is PartnerTopic and represents information about the partner topic resource corresponding to the channel.
     */
    public readonly partnerTopicInfo!: pulumi.Output<types.outputs.PartnerTopicInfoResponse | undefined>;
    /**
     * Provisioning state of the channel.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * The readiness state of the corresponding partner topic.
     */
    public readonly readinessState!: pulumi.Output<string | undefined>;
    /**
     * The system metadata relating to Channel resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Type of the resource.
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
            if ((!args || args.partnerNamespaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'partnerNamespaceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["channelName"] = args ? args.channelName : undefined;
            resourceInputs["channelType"] = args ? args.channelType : undefined;
            resourceInputs["expirationTimeIfNotActivatedUtc"] = args ? args.expirationTimeIfNotActivatedUtc : undefined;
            resourceInputs["messageForActivation"] = args ? args.messageForActivation : undefined;
            resourceInputs["partnerNamespaceName"] = args ? args.partnerNamespaceName : undefined;
            resourceInputs["partnerTopicInfo"] = args ? args.partnerTopicInfo : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["readinessState"] = args ? args.readinessState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["channelType"] = undefined /*out*/;
            resourceInputs["expirationTimeIfNotActivatedUtc"] = undefined /*out*/;
            resourceInputs["messageForActivation"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["partnerTopicInfo"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["readinessState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:eventgrid/v20211015preview:Channel" }, { type: "azure-native:eventgrid/v20220615:Channel" }, { type: "azure-native:eventgrid/v20230601preview:Channel" }, { type: "azure-native:eventgrid/v20231215preview:Channel" }, { type: "azure-native:eventgrid/v20240601preview:Channel" }, { type: "azure-native:eventgrid/v20241215preview:Channel" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Channel.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Channel resource.
 */
export interface ChannelArgs {
    /**
     * Name of the channel.
     */
    channelName?: pulumi.Input<string>;
    /**
     * The type of the event channel which represents the direction flow of events.
     */
    channelType?: pulumi.Input<string | types.enums.ChannelType>;
    /**
     * Expiration time of the channel. If this timer expires while the corresponding partner topic is never activated,
     * the channel and corresponding partner topic are deleted.
     */
    expirationTimeIfNotActivatedUtc?: pulumi.Input<string>;
    /**
     * Context or helpful message that can be used during the approval process by the subscriber.
     */
    messageForActivation?: pulumi.Input<string>;
    /**
     * Name of the partner namespace.
     */
    partnerNamespaceName: pulumi.Input<string>;
    /**
     * This property should be populated when channelType is PartnerTopic and represents information about the partner topic resource corresponding to the channel.
     */
    partnerTopicInfo?: pulumi.Input<types.inputs.PartnerTopicInfoArgs>;
    /**
     * Provisioning state of the channel.
     */
    provisioningState?: pulumi.Input<string | types.enums.ChannelProvisioningState>;
    /**
     * The readiness state of the corresponding partner topic.
     */
    readinessState?: pulumi.Input<string | types.enums.ReadinessState>;
    /**
     * The name of the resource group within the partners subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}