import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Event Grid Partner Topic.
 */
export class PartnerTopic extends pulumi.CustomResource {
    /**
     * Get an existing PartnerTopic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PartnerTopic {
        return new PartnerTopic(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:eventgrid/v20230601preview:PartnerTopic';

    /**
     * Returns true if the given object is an instance of PartnerTopic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PartnerTopic {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PartnerTopic.__pulumiType;
    }

    /**
     * Activation state of the partner topic.
     */
    public readonly activationState!: pulumi.Output<string | undefined>;
    /**
     * Event Type information from the corresponding event channel.
     */
    public readonly eventTypeInfo!: pulumi.Output<types.outputs.EventTypeInfoResponse | undefined>;
    /**
     * Expiration time of the partner topic. If this timer expires while the partner topic is still never activated,
     * the partner topic and corresponding event channel are deleted.
     */
    public readonly expirationTimeIfNotActivatedUtc!: pulumi.Output<string | undefined>;
    /**
     * Identity information for the Partner Topic resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityInfoResponse | undefined>;
    /**
     * Location of the resource.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Context or helpful message that can be used during the approval process by the subscriber.
     */
    public readonly messageForActivation!: pulumi.Output<string | undefined>;
    /**
     * Name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The immutableId of the corresponding partner registration.
     */
    public readonly partnerRegistrationImmutableId!: pulumi.Output<string | undefined>;
    /**
     * Friendly description about the topic. This can be set by the publisher/partner to show custom description for the customer partner topic.
     * This will be helpful to remove any ambiguity of the origin of creation of the partner topic for the customer.
     */
    public readonly partnerTopicFriendlyDescription!: pulumi.Output<string | undefined>;
    /**
     * Provisioning state of the partner topic.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Source associated with this partner topic. This represents a unique partner resource.
     */
    public readonly source!: pulumi.Output<string | undefined>;
    /**
     * The system metadata relating to Partner Topic resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PartnerTopic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PartnerTopicArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["activationState"] = args ? args.activationState : undefined;
            resourceInputs["eventTypeInfo"] = args ? args.eventTypeInfo : undefined;
            resourceInputs["expirationTimeIfNotActivatedUtc"] = args ? args.expirationTimeIfNotActivatedUtc : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["messageForActivation"] = args ? args.messageForActivation : undefined;
            resourceInputs["partnerRegistrationImmutableId"] = args ? args.partnerRegistrationImmutableId : undefined;
            resourceInputs["partnerTopicFriendlyDescription"] = args ? args.partnerTopicFriendlyDescription : undefined;
            resourceInputs["partnerTopicName"] = args ? args.partnerTopicName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["activationState"] = undefined /*out*/;
            resourceInputs["eventTypeInfo"] = undefined /*out*/;
            resourceInputs["expirationTimeIfNotActivatedUtc"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["messageForActivation"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["partnerRegistrationImmutableId"] = undefined /*out*/;
            resourceInputs["partnerTopicFriendlyDescription"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["source"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:eventgrid:PartnerTopic" }, { type: "azure-native:eventgrid/v20211015preview:PartnerTopic" }, { type: "azure-native:eventgrid/v20220615:PartnerTopic" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PartnerTopic.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PartnerTopic resource.
 */
export interface PartnerTopicArgs {
    /**
     * Activation state of the partner topic.
     */
    activationState?: pulumi.Input<string | types.enums.PartnerTopicActivationState>;
    /**
     * Event Type information from the corresponding event channel.
     */
    eventTypeInfo?: pulumi.Input<types.inputs.EventTypeInfoArgs>;
    /**
     * Expiration time of the partner topic. If this timer expires while the partner topic is still never activated,
     * the partner topic and corresponding event channel are deleted.
     */
    expirationTimeIfNotActivatedUtc?: pulumi.Input<string>;
    /**
     * Identity information for the Partner Topic resource.
     */
    identity?: pulumi.Input<types.inputs.IdentityInfoArgs>;
    /**
     * Location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * Context or helpful message that can be used during the approval process by the subscriber.
     */
    messageForActivation?: pulumi.Input<string>;
    /**
     * The immutableId of the corresponding partner registration.
     */
    partnerRegistrationImmutableId?: pulumi.Input<string>;
    /**
     * Friendly description about the topic. This can be set by the publisher/partner to show custom description for the customer partner topic.
     * This will be helpful to remove any ambiguity of the origin of creation of the partner topic for the customer.
     */
    partnerTopicFriendlyDescription?: pulumi.Input<string>;
    /**
     * Name of the partner topic.
     */
    partnerTopicName?: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Source associated with this partner topic. This represents a unique partner resource.
     */
    source?: pulumi.Input<string>;
    /**
     * Tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
