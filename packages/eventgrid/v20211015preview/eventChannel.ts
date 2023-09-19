import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Event Channel.
 */
export class EventChannel extends pulumi.CustomResource {
    /**
     * Get an existing EventChannel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): EventChannel {
        return new EventChannel(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:eventgrid/v20211015preview:EventChannel';

    /**
     * Returns true if the given object is an instance of EventChannel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EventChannel {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EventChannel.__pulumiType;
    }

    /**
     * Represents the destination of an event channel.
     */
    public readonly destination!: pulumi.Output<types.outputs.EventChannelDestinationResponse | undefined>;
    /**
     * Expiration time of the event channel. If this timer expires while the corresponding partner topic is never activated,
     * the event channel and corresponding partner topic are deleted.
     */
    public readonly expirationTimeIfNotActivatedUtc!: pulumi.Output<string | undefined>;
    /**
     * Information about the filter for the event channel.
     */
    public readonly filter!: pulumi.Output<types.outputs.EventChannelFilterResponse | undefined>;
    /**
     * Name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Friendly description about the topic. This can be set by the publisher/partner to show custom description for the customer partner topic.
     * This will be helpful to remove any ambiguity of the origin of creation of the partner topic for the customer.
     */
    public readonly partnerTopicFriendlyDescription!: pulumi.Output<string | undefined>;
    /**
     * The readiness state of the corresponding partner topic.
     */
    public /*out*/ readonly partnerTopicReadinessState!: pulumi.Output<string>;
    /**
     * Provisioning state of the event channel.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Source of the event channel. This represents a unique resource in the partner's resource model.
     */
    public readonly source!: pulumi.Output<types.outputs.EventChannelSourceResponse | undefined>;
    /**
     * The system metadata relating to Event Channel resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a EventChannel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EventChannelArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.partnerNamespaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'partnerNamespaceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["destination"] = args ? args.destination : undefined;
            resourceInputs["eventChannelName"] = args ? args.eventChannelName : undefined;
            resourceInputs["expirationTimeIfNotActivatedUtc"] = args ? args.expirationTimeIfNotActivatedUtc : undefined;
            resourceInputs["filter"] = args ? (args.filter ? pulumi.output(args.filter).apply(types.inputs.eventChannelFilterArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["partnerNamespaceName"] = args ? args.partnerNamespaceName : undefined;
            resourceInputs["partnerTopicFriendlyDescription"] = args ? args.partnerTopicFriendlyDescription : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["partnerTopicReadinessState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["destination"] = undefined /*out*/;
            resourceInputs["expirationTimeIfNotActivatedUtc"] = undefined /*out*/;
            resourceInputs["filter"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["partnerTopicFriendlyDescription"] = undefined /*out*/;
            resourceInputs["partnerTopicReadinessState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["source"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:eventgrid/v20200401preview:EventChannel" }, { type: "azure-native:eventgrid/v20201015preview:EventChannel" }, { type: "azure-native:eventgrid/v20210601preview:EventChannel" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(EventChannel.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a EventChannel resource.
 */
export interface EventChannelArgs {
    /**
     * Represents the destination of an event channel.
     */
    destination?: pulumi.Input<types.inputs.EventChannelDestinationArgs>;
    /**
     * Name of the event channel.
     */
    eventChannelName?: pulumi.Input<string>;
    /**
     * Expiration time of the event channel. If this timer expires while the corresponding partner topic is never activated,
     * the event channel and corresponding partner topic are deleted.
     */
    expirationTimeIfNotActivatedUtc?: pulumi.Input<string>;
    /**
     * Information about the filter for the event channel.
     */
    filter?: pulumi.Input<types.inputs.EventChannelFilterArgs>;
    /**
     * Name of the partner namespace.
     */
    partnerNamespaceName: pulumi.Input<string>;
    /**
     * Friendly description about the topic. This can be set by the publisher/partner to show custom description for the customer partner topic.
     * This will be helpful to remove any ambiguity of the origin of creation of the partner topic for the customer.
     */
    partnerTopicFriendlyDescription?: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Source of the event channel. This represents a unique resource in the partner's resource model.
     */
    source?: pulumi.Input<types.inputs.EventChannelSourceArgs>;
}
