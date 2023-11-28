import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Event Subscription.
 */
export class SystemTopicEventSubscription extends pulumi.CustomResource {
    /**
     * Get an existing SystemTopicEventSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SystemTopicEventSubscription {
        return new SystemTopicEventSubscription(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:eventgrid/v20231215preview:SystemTopicEventSubscription';

    /**
     * Returns true if the given object is an instance of SystemTopicEventSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemTopicEventSubscription {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemTopicEventSubscription.__pulumiType;
    }

    /**
     * The dead letter destination of the event subscription. Any event that cannot be delivered to its' destination is sent to the dead letter destination.
     * Uses Azure Event Grid's identity to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    public readonly deadLetterDestination!: pulumi.Output<types.outputs.StorageBlobDeadLetterDestinationResponse | undefined>;
    /**
     * The dead letter destination of the event subscription. Any event that cannot be delivered to its' destination is sent to the dead letter destination.
     * Uses the managed identity setup on the parent resource (namely, topic or domain) to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    public readonly deadLetterWithResourceIdentity!: pulumi.Output<types.outputs.DeadLetterWithResourceIdentityResponse | undefined>;
    /**
     * Information about the destination where events have to be delivered for the event subscription.
     * Uses the managed identity setup on the parent resource (namely, topic or domain) to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    public readonly deliveryWithResourceIdentity!: pulumi.Output<types.outputs.DeliveryWithResourceIdentityResponse | undefined>;
    /**
     * Information about the destination where events have to be delivered for the event subscription.
     * Uses Azure Event Grid's identity to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    public readonly destination!: pulumi.Output<types.outputs.AzureFunctionEventSubscriptionDestinationResponse | types.outputs.EventHubEventSubscriptionDestinationResponse | types.outputs.HybridConnectionEventSubscriptionDestinationResponse | types.outputs.MonitorAlertEventSubscriptionDestinationResponse | types.outputs.NamespaceTopicEventSubscriptionDestinationResponse | types.outputs.PartnerEventSubscriptionDestinationResponse | types.outputs.ServiceBusQueueEventSubscriptionDestinationResponse | types.outputs.ServiceBusTopicEventSubscriptionDestinationResponse | types.outputs.StorageQueueEventSubscriptionDestinationResponse | types.outputs.WebHookEventSubscriptionDestinationResponse | undefined>;
    /**
     * The event delivery schema for the event subscription.
     */
    public readonly eventDeliverySchema!: pulumi.Output<string | undefined>;
    /**
     * Expiration time of the event subscription.
     */
    public readonly expirationTimeUtc!: pulumi.Output<string | undefined>;
    /**
     * Information about the filter for the event subscription.
     */
    public readonly filter!: pulumi.Output<types.outputs.EventSubscriptionFilterResponse | undefined>;
    /**
     * List of user defined labels.
     */
    public readonly labels!: pulumi.Output<string[] | undefined>;
    /**
     * Name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the event subscription.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The retry policy for events. This can be used to configure maximum number of delivery attempts and time to live for events.
     */
    public readonly retryPolicy!: pulumi.Output<types.outputs.RetryPolicyResponse | undefined>;
    /**
     * The system metadata relating to Event Subscription resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Name of the topic of the event subscription.
     */
    public /*out*/ readonly topic!: pulumi.Output<string>;
    /**
     * Type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SystemTopicEventSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SystemTopicEventSubscriptionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.systemTopicName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'systemTopicName'");
            }
            resourceInputs["deadLetterDestination"] = args ? args.deadLetterDestination : undefined;
            resourceInputs["deadLetterWithResourceIdentity"] = args ? args.deadLetterWithResourceIdentity : undefined;
            resourceInputs["deliveryWithResourceIdentity"] = args ? args.deliveryWithResourceIdentity : undefined;
            resourceInputs["destination"] = args ? args.destination : undefined;
            resourceInputs["eventDeliverySchema"] = (args ? args.eventDeliverySchema : undefined) ?? "EventGridSchema";
            resourceInputs["eventSubscriptionName"] = args ? args.eventSubscriptionName : undefined;
            resourceInputs["expirationTimeUtc"] = args ? args.expirationTimeUtc : undefined;
            resourceInputs["filter"] = args ? (args.filter ? pulumi.output(args.filter).apply(types.inputs.eventSubscriptionFilterArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["retryPolicy"] = args ? (args.retryPolicy ? pulumi.output(args.retryPolicy).apply(types.inputs.retryPolicyArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["systemTopicName"] = args ? args.systemTopicName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["topic"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["deadLetterDestination"] = undefined /*out*/;
            resourceInputs["deadLetterWithResourceIdentity"] = undefined /*out*/;
            resourceInputs["deliveryWithResourceIdentity"] = undefined /*out*/;
            resourceInputs["destination"] = undefined /*out*/;
            resourceInputs["eventDeliverySchema"] = undefined /*out*/;
            resourceInputs["expirationTimeUtc"] = undefined /*out*/;
            resourceInputs["filter"] = undefined /*out*/;
            resourceInputs["labels"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["retryPolicy"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["topic"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:eventgrid:SystemTopicEventSubscription" }, { type: "azure-native:eventgrid/v20200401preview:SystemTopicEventSubscription" }, { type: "azure-native:eventgrid/v20201015preview:SystemTopicEventSubscription" }, { type: "azure-native:eventgrid/v20210601preview:SystemTopicEventSubscription" }, { type: "azure-native:eventgrid/v20211015preview:SystemTopicEventSubscription" }, { type: "azure-native:eventgrid/v20211201:SystemTopicEventSubscription" }, { type: "azure-native:eventgrid/v20220615:SystemTopicEventSubscription" }, { type: "azure-native:eventgrid/v20230601preview:SystemTopicEventSubscription" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SystemTopicEventSubscription.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SystemTopicEventSubscription resource.
 */
export interface SystemTopicEventSubscriptionArgs {
    /**
     * The dead letter destination of the event subscription. Any event that cannot be delivered to its' destination is sent to the dead letter destination.
     * Uses Azure Event Grid's identity to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    deadLetterDestination?: pulumi.Input<types.inputs.StorageBlobDeadLetterDestinationArgs>;
    /**
     * The dead letter destination of the event subscription. Any event that cannot be delivered to its' destination is sent to the dead letter destination.
     * Uses the managed identity setup on the parent resource (namely, topic or domain) to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    deadLetterWithResourceIdentity?: pulumi.Input<types.inputs.DeadLetterWithResourceIdentityArgs>;
    /**
     * Information about the destination where events have to be delivered for the event subscription.
     * Uses the managed identity setup on the parent resource (namely, topic or domain) to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    deliveryWithResourceIdentity?: pulumi.Input<types.inputs.DeliveryWithResourceIdentityArgs>;
    /**
     * Information about the destination where events have to be delivered for the event subscription.
     * Uses Azure Event Grid's identity to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    destination?: pulumi.Input<types.inputs.AzureFunctionEventSubscriptionDestinationArgs | types.inputs.EventHubEventSubscriptionDestinationArgs | types.inputs.HybridConnectionEventSubscriptionDestinationArgs | types.inputs.MonitorAlertEventSubscriptionDestinationArgs | types.inputs.NamespaceTopicEventSubscriptionDestinationArgs | types.inputs.PartnerEventSubscriptionDestinationArgs | types.inputs.ServiceBusQueueEventSubscriptionDestinationArgs | types.inputs.ServiceBusTopicEventSubscriptionDestinationArgs | types.inputs.StorageQueueEventSubscriptionDestinationArgs | types.inputs.WebHookEventSubscriptionDestinationArgs>;
    /**
     * The event delivery schema for the event subscription.
     */
    eventDeliverySchema?: pulumi.Input<string | types.enums.EventDeliverySchema>;
    /**
     * Name of the event subscription to be created. Event subscription names must be between 3 and 100 characters in length and use alphanumeric letters only.
     */
    eventSubscriptionName?: pulumi.Input<string>;
    /**
     * Expiration time of the event subscription.
     */
    expirationTimeUtc?: pulumi.Input<string>;
    /**
     * Information about the filter for the event subscription.
     */
    filter?: pulumi.Input<types.inputs.EventSubscriptionFilterArgs>;
    /**
     * List of user defined labels.
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The retry policy for events. This can be used to configure maximum number of delivery attempts and time to live for events.
     */
    retryPolicy?: pulumi.Input<types.inputs.RetryPolicyArgs>;
    /**
     * Name of the system topic.
     */
    systemTopicName: pulumi.Input<string>;
}
