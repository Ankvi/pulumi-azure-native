import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description of subscription resource.
 * Azure REST API version: 2022-01-01-preview. Prior API version in Azure Native 1.x: 2017-04-01.
 *
 * Other available API versions: 2015-08-01, 2022-10-01-preview.
 */
export class Subscription extends pulumi.CustomResource {
    /**
     * Get an existing Subscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Subscription {
        return new Subscription(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:servicebus:Subscription';

    /**
     * Returns true if the given object is an instance of Subscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Subscription {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Subscription.__pulumiType;
    }

    /**
     * Last time there was a receive request to this subscription.
     */
    public /*out*/ readonly accessedAt!: pulumi.Output<string>;
    /**
     * ISO 8061 timeSpan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.
     */
    public readonly autoDeleteOnIdle!: pulumi.Output<string | undefined>;
    /**
     * Properties specific to client affine subscriptions.
     */
    public readonly clientAffineProperties!: pulumi.Output<types.outputs.SBClientAffinePropertiesResponse | undefined>;
    /**
     * Message count details
     */
    public /*out*/ readonly countDetails!: pulumi.Output<types.outputs.MessageCountDetailsResponse>;
    /**
     * Exact time the message was created.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * Value that indicates whether a subscription has dead letter support on filter evaluation exceptions.
     */
    public readonly deadLetteringOnFilterEvaluationExceptions!: pulumi.Output<boolean | undefined>;
    /**
     * Value that indicates whether a subscription has dead letter support when a message expires.
     */
    public readonly deadLetteringOnMessageExpiration!: pulumi.Output<boolean | undefined>;
    /**
     * ISO 8061 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
     */
    public readonly defaultMessageTimeToLive!: pulumi.Output<string | undefined>;
    /**
     * ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
     */
    public readonly duplicateDetectionHistoryTimeWindow!: pulumi.Output<string | undefined>;
    /**
     * Value that indicates whether server-side batched operations are enabled.
     */
    public readonly enableBatchedOperations!: pulumi.Output<boolean | undefined>;
    /**
     * Queue/Topic name to forward the Dead Letter message
     */
    public readonly forwardDeadLetteredMessagesTo!: pulumi.Output<string | undefined>;
    /**
     * Queue/Topic name to forward the messages
     */
    public readonly forwardTo!: pulumi.Output<string | undefined>;
    /**
     * Value that indicates whether the subscription has an affinity to the client id.
     */
    public readonly isClientAffine!: pulumi.Output<boolean | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * ISO 8061 lock duration timespan for the subscription. The default value is 1 minute.
     */
    public readonly lockDuration!: pulumi.Output<string | undefined>;
    /**
     * Number of maximum deliveries.
     */
    public readonly maxDeliveryCount!: pulumi.Output<number | undefined>;
    /**
     * Number of messages.
     */
    public /*out*/ readonly messageCount!: pulumi.Output<number>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Value indicating if a subscription supports the concept of sessions.
     */
    public readonly requiresSession!: pulumi.Output<boolean | undefined>;
    /**
     * Enumerates the possible values for the status of a messaging entity.
     */
    public readonly status!: pulumi.Output<string | undefined>;
    /**
     * The system meta data relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.EventHub/Namespaces" or "Microsoft.EventHub/Namespaces/EventHubs"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The exact time the message was updated.
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;

    /**
     * Create a Subscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SubscriptionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.namespaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.topicName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'topicName'");
            }
            resourceInputs["autoDeleteOnIdle"] = args ? args.autoDeleteOnIdle : undefined;
            resourceInputs["clientAffineProperties"] = args ? args.clientAffineProperties : undefined;
            resourceInputs["deadLetteringOnFilterEvaluationExceptions"] = args ? args.deadLetteringOnFilterEvaluationExceptions : undefined;
            resourceInputs["deadLetteringOnMessageExpiration"] = args ? args.deadLetteringOnMessageExpiration : undefined;
            resourceInputs["defaultMessageTimeToLive"] = args ? args.defaultMessageTimeToLive : undefined;
            resourceInputs["duplicateDetectionHistoryTimeWindow"] = args ? args.duplicateDetectionHistoryTimeWindow : undefined;
            resourceInputs["enableBatchedOperations"] = args ? args.enableBatchedOperations : undefined;
            resourceInputs["forwardDeadLetteredMessagesTo"] = args ? args.forwardDeadLetteredMessagesTo : undefined;
            resourceInputs["forwardTo"] = args ? args.forwardTo : undefined;
            resourceInputs["isClientAffine"] = args ? args.isClientAffine : undefined;
            resourceInputs["lockDuration"] = args ? args.lockDuration : undefined;
            resourceInputs["maxDeliveryCount"] = args ? args.maxDeliveryCount : undefined;
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["requiresSession"] = args ? args.requiresSession : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["subscriptionName"] = args ? args.subscriptionName : undefined;
            resourceInputs["topicName"] = args ? args.topicName : undefined;
            resourceInputs["accessedAt"] = undefined /*out*/;
            resourceInputs["countDetails"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["messageCount"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
        } else {
            resourceInputs["accessedAt"] = undefined /*out*/;
            resourceInputs["autoDeleteOnIdle"] = undefined /*out*/;
            resourceInputs["clientAffineProperties"] = undefined /*out*/;
            resourceInputs["countDetails"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["deadLetteringOnFilterEvaluationExceptions"] = undefined /*out*/;
            resourceInputs["deadLetteringOnMessageExpiration"] = undefined /*out*/;
            resourceInputs["defaultMessageTimeToLive"] = undefined /*out*/;
            resourceInputs["duplicateDetectionHistoryTimeWindow"] = undefined /*out*/;
            resourceInputs["enableBatchedOperations"] = undefined /*out*/;
            resourceInputs["forwardDeadLetteredMessagesTo"] = undefined /*out*/;
            resourceInputs["forwardTo"] = undefined /*out*/;
            resourceInputs["isClientAffine"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["lockDuration"] = undefined /*out*/;
            resourceInputs["maxDeliveryCount"] = undefined /*out*/;
            resourceInputs["messageCount"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["requiresSession"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicebus/v20140901:Subscription" }, { type: "azure-native:servicebus/v20150801:Subscription" }, { type: "azure-native:servicebus/v20170401:Subscription" }, { type: "azure-native:servicebus/v20180101preview:Subscription" }, { type: "azure-native:servicebus/v20210101preview:Subscription" }, { type: "azure-native:servicebus/v20210601preview:Subscription" }, { type: "azure-native:servicebus/v20211101:Subscription" }, { type: "azure-native:servicebus/v20220101preview:Subscription" }, { type: "azure-native:servicebus/v20221001preview:Subscription" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Subscription.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Subscription resource.
 */
export interface SubscriptionArgs {
    /**
     * ISO 8061 timeSpan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.
     */
    autoDeleteOnIdle?: pulumi.Input<string>;
    /**
     * Properties specific to client affine subscriptions.
     */
    clientAffineProperties?: pulumi.Input<types.inputs.SBClientAffinePropertiesArgs>;
    /**
     * Value that indicates whether a subscription has dead letter support on filter evaluation exceptions.
     */
    deadLetteringOnFilterEvaluationExceptions?: pulumi.Input<boolean>;
    /**
     * Value that indicates whether a subscription has dead letter support when a message expires.
     */
    deadLetteringOnMessageExpiration?: pulumi.Input<boolean>;
    /**
     * ISO 8061 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
     */
    defaultMessageTimeToLive?: pulumi.Input<string>;
    /**
     * ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
     */
    duplicateDetectionHistoryTimeWindow?: pulumi.Input<string>;
    /**
     * Value that indicates whether server-side batched operations are enabled.
     */
    enableBatchedOperations?: pulumi.Input<boolean>;
    /**
     * Queue/Topic name to forward the Dead Letter message
     */
    forwardDeadLetteredMessagesTo?: pulumi.Input<string>;
    /**
     * Queue/Topic name to forward the messages
     */
    forwardTo?: pulumi.Input<string>;
    /**
     * Value that indicates whether the subscription has an affinity to the client id.
     */
    isClientAffine?: pulumi.Input<boolean>;
    /**
     * ISO 8061 lock duration timespan for the subscription. The default value is 1 minute.
     */
    lockDuration?: pulumi.Input<string>;
    /**
     * Number of maximum deliveries.
     */
    maxDeliveryCount?: pulumi.Input<number>;
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Value indicating if a subscription supports the concept of sessions.
     */
    requiresSession?: pulumi.Input<boolean>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Enumerates the possible values for the status of a messaging entity.
     */
    status?: pulumi.Input<types.enums.EntityStatus>;
    /**
     * The subscription name.
     */
    subscriptionName?: pulumi.Input<string>;
    /**
     * The topic name.
     */
    topicName: pulumi.Input<string>;
}