import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Event Subscription.
 *
 * Uses Azure REST API version 2025-02-15. In version 2.x of the Azure Native provider, it used API version 2022-06-15.
 *
 * Other available API versions: 2022-06-15, 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview, 2025-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native eventgrid [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class DomainTopicEventSubscription extends pulumi.CustomResource {
    /**
     * Get an existing DomainTopicEventSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DomainTopicEventSubscription {
        return new DomainTopicEventSubscription(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:eventgrid:DomainTopicEventSubscription';

    /**
     * Returns true if the given object is an instance of DomainTopicEventSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DomainTopicEventSubscription {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DomainTopicEventSubscription.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    declare public /*out*/ readonly azureApiVersion: pulumi.Output<string>;
    /**
     * The dead letter destination of the event subscription. Any event that cannot be delivered to its' destination is sent to the dead letter destination.
     * Uses Azure Event Grid's identity to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    declare public readonly deadLetterDestination: pulumi.Output<types.outputs.StorageBlobDeadLetterDestinationResponse | undefined>;
    /**
     * The dead letter destination of the event subscription. Any event that cannot be delivered to its' destination is sent to the dead letter destination.
     * Uses the managed identity setup on the parent resource (namely, topic or domain) to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    declare public readonly deadLetterWithResourceIdentity: pulumi.Output<types.outputs.DeadLetterWithResourceIdentityResponse | undefined>;
    /**
     * Information about the destination where events have to be delivered for the event subscription.
     * Uses the managed identity setup on the parent resource (namely, topic or domain) to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    declare public readonly deliveryWithResourceIdentity: pulumi.Output<types.outputs.DeliveryWithResourceIdentityResponse | undefined>;
    /**
     * Information about the destination where events have to be delivered for the event subscription.
     * Uses Azure Event Grid's identity to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    declare public readonly destination: pulumi.Output<types.outputs.AzureFunctionEventSubscriptionDestinationResponse | types.outputs.EventHubEventSubscriptionDestinationResponse | types.outputs.HybridConnectionEventSubscriptionDestinationResponse | types.outputs.MonitorAlertEventSubscriptionDestinationResponse | types.outputs.NamespaceTopicEventSubscriptionDestinationResponse | types.outputs.ServiceBusQueueEventSubscriptionDestinationResponse | types.outputs.ServiceBusTopicEventSubscriptionDestinationResponse | types.outputs.StorageQueueEventSubscriptionDestinationResponse | types.outputs.WebHookEventSubscriptionDestinationResponse | undefined>;
    /**
     * The event delivery schema for the event subscription.
     */
    declare public readonly eventDeliverySchema: pulumi.Output<string | undefined>;
    /**
     * Expiration time of the event subscription.
     */
    declare public readonly expirationTimeUtc: pulumi.Output<string | undefined>;
    /**
     * Information about the filter for the event subscription.
     */
    declare public readonly filter: pulumi.Output<types.outputs.EventSubscriptionFilterResponse | undefined>;
    /**
     * List of user defined labels.
     */
    declare public readonly labels: pulumi.Output<string[] | undefined>;
    /**
     * Name of the resource.
     */
    declare public /*out*/ readonly name: pulumi.Output<string>;
    /**
     * Provisioning state of the event subscription.
     */
    declare public /*out*/ readonly provisioningState: pulumi.Output<string>;
    /**
     * The retry policy for events. This can be used to configure maximum number of delivery attempts and time to live for events.
     */
    declare public readonly retryPolicy: pulumi.Output<types.outputs.RetryPolicyResponse | undefined>;
    /**
     * The system metadata relating to the Event Grid resource.
     */
    declare public /*out*/ readonly systemData: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Name of the topic of the event subscription.
     */
    declare public /*out*/ readonly topic: pulumi.Output<string>;
    /**
     * Type of the resource.
     */
    declare public /*out*/ readonly type: pulumi.Output<string>;

    /**
     * Create a DomainTopicEventSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DomainTopicEventSubscriptionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if (args?.domainName === undefined && !opts.urn) {
                throw new Error("Missing required property 'domainName'");
            }
            if (args?.resourceGroupName === undefined && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (args?.topicName === undefined && !opts.urn) {
                throw new Error("Missing required property 'topicName'");
            }
            resourceInputs["deadLetterDestination"] = args?.deadLetterDestination;
            resourceInputs["deadLetterWithResourceIdentity"] = args?.deadLetterWithResourceIdentity;
            resourceInputs["deliveryWithResourceIdentity"] = args?.deliveryWithResourceIdentity;
            resourceInputs["destination"] = args?.destination;
            resourceInputs["domainName"] = args?.domainName;
            resourceInputs["eventDeliverySchema"] = (args?.eventDeliverySchema) ?? "EventGridSchema";
            resourceInputs["eventSubscriptionName"] = args?.eventSubscriptionName;
            resourceInputs["expirationTimeUtc"] = args?.expirationTimeUtc;
            resourceInputs["filter"] = args ? (args.filter ? pulumi.output(args.filter).apply(types.inputs.eventSubscriptionFilterArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["labels"] = args?.labels;
            resourceInputs["resourceGroupName"] = args?.resourceGroupName;
            resourceInputs["retryPolicy"] = args ? (args.retryPolicy ? pulumi.output(args.retryPolicy).apply(types.inputs.retryPolicyArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["topicName"] = args?.topicName;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["topic"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
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
        const aliasOpts = { aliases: [{ type: "azure-native:eventgrid/v20211015preview:DomainTopicEventSubscription" }, { type: "azure-native:eventgrid/v20220615:DomainTopicEventSubscription" }, { type: "azure-native:eventgrid/v20230601preview:DomainTopicEventSubscription" }, { type: "azure-native:eventgrid/v20231215preview:DomainTopicEventSubscription" }, { type: "azure-native:eventgrid/v20240601preview:DomainTopicEventSubscription" }, { type: "azure-native:eventgrid/v20241215preview:DomainTopicEventSubscription" }, { type: "azure-native:eventgrid/v20250215:DomainTopicEventSubscription" }, { type: "azure-native:eventgrid/v20250401preview:DomainTopicEventSubscription" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DomainTopicEventSubscription.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DomainTopicEventSubscription resource.
 */
export interface DomainTopicEventSubscriptionArgs {
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
    destination?: pulumi.Input<types.inputs.AzureFunctionEventSubscriptionDestinationArgs | types.inputs.EventHubEventSubscriptionDestinationArgs | types.inputs.HybridConnectionEventSubscriptionDestinationArgs | types.inputs.MonitorAlertEventSubscriptionDestinationArgs | types.inputs.NamespaceTopicEventSubscriptionDestinationArgs | types.inputs.ServiceBusQueueEventSubscriptionDestinationArgs | types.inputs.ServiceBusTopicEventSubscriptionDestinationArgs | types.inputs.StorageQueueEventSubscriptionDestinationArgs | types.inputs.WebHookEventSubscriptionDestinationArgs>;
    /**
     * Name of the top level domain.
     */
    domainName: pulumi.Input<string>;
    /**
     * The event delivery schema for the event subscription.
     */
    eventDeliverySchema?: pulumi.Input<string | types.enums.EventDeliverySchema>;
    /**
     * Name of the event subscription to be created. Event subscription names must be between 3 and 64 characters in length and use alphanumeric letters only.
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
     * Name of the domain topic.
     */
    topicName: pulumi.Input<string>;
}