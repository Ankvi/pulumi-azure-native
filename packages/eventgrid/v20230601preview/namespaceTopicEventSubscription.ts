import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Event Subscription.
 */
export class NamespaceTopicEventSubscription extends pulumi.CustomResource {
    /**
     * Get an existing NamespaceTopicEventSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NamespaceTopicEventSubscription {
        return new NamespaceTopicEventSubscription(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:eventgrid/v20230601preview:NamespaceTopicEventSubscription';

    /**
     * Returns true if the given object is an instance of NamespaceTopicEventSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NamespaceTopicEventSubscription {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NamespaceTopicEventSubscription.__pulumiType;
    }

    /**
     * Information about the delivery configuration of the event subscription.
     */
    public readonly deliveryConfiguration!: pulumi.Output<types.outputs.DeliveryConfigurationResponse | undefined>;
    /**
     * The event delivery schema for the event subscription.
     */
    public readonly eventDeliverySchema!: pulumi.Output<string | undefined>;
    /**
     * Information about the filter for the event subscription.
     */
    public readonly filtersConfiguration!: pulumi.Output<types.outputs.FiltersConfigurationResponse | undefined>;
    /**
     * Name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the event subscription.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The system metadata relating to Event Subscription resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a NamespaceTopicEventSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NamespaceTopicEventSubscriptionArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["deliveryConfiguration"] = args ? args.deliveryConfiguration : undefined;
            resourceInputs["eventDeliverySchema"] = args ? args.eventDeliverySchema : undefined;
            resourceInputs["eventSubscriptionName"] = args ? args.eventSubscriptionName : undefined;
            resourceInputs["filtersConfiguration"] = args ? args.filtersConfiguration : undefined;
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["topicName"] = args ? args.topicName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["deliveryConfiguration"] = undefined /*out*/;
            resourceInputs["eventDeliverySchema"] = undefined /*out*/;
            resourceInputs["filtersConfiguration"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:eventgrid:NamespaceTopicEventSubscription" }, { type: "azure-native:eventgrid/v20231215preview:NamespaceTopicEventSubscription" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NamespaceTopicEventSubscription.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NamespaceTopicEventSubscription resource.
 */
export interface NamespaceTopicEventSubscriptionArgs {
    /**
     * Information about the delivery configuration of the event subscription.
     */
    deliveryConfiguration?: pulumi.Input<types.inputs.DeliveryConfigurationArgs>;
    /**
     * The event delivery schema for the event subscription.
     */
    eventDeliverySchema?: pulumi.Input<string | types.enums.DeliverySchema>;
    /**
     * Name of the event subscription to be created. Event subscription names must be between 3 and 100 characters in length and use alphanumeric letters only.
     */
    eventSubscriptionName?: pulumi.Input<string>;
    /**
     * Information about the filter for the event subscription.
     */
    filtersConfiguration?: pulumi.Input<types.inputs.FiltersConfigurationArgs>;
    /**
     * Name of the namespace.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the namespace topic.
     */
    topicName: pulumi.Input<string>;
}
