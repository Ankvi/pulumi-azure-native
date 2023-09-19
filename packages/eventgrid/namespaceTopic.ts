import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Namespace topic details.
 * Azure REST API version: 2023-06-01-preview.
 */
export class NamespaceTopic extends pulumi.CustomResource {
    /**
     * Get an existing NamespaceTopic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NamespaceTopic {
        return new NamespaceTopic(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:eventgrid:NamespaceTopic';

    /**
     * Returns true if the given object is an instance of NamespaceTopic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NamespaceTopic {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NamespaceTopic.__pulumiType;
    }

    /**
     * Event retention for the namespace topic expressed in days. The property default value is 1 day.
     * Min event retention duration value is 1 day and max event retention duration value is 1 day.
     */
    public readonly eventRetentionInDays!: pulumi.Output<number | undefined>;
    /**
     * This determines the format that is expected for incoming events published to the topic.
     */
    public readonly inputSchema!: pulumi.Output<string | undefined>;
    /**
     * Name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the namespace topic.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Publisher type of the namespace topic.
     */
    public readonly publisherType!: pulumi.Output<string | undefined>;
    /**
     * The system metadata relating to namespace topic resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a NamespaceTopic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NamespaceTopicArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.namespaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["eventRetentionInDays"] = args ? args.eventRetentionInDays : undefined;
            resourceInputs["inputSchema"] = (args ? args.inputSchema : undefined) ?? "CloudEventSchemaV1_0";
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["publisherType"] = args ? args.publisherType : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["topicName"] = args ? args.topicName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["eventRetentionInDays"] = undefined /*out*/;
            resourceInputs["inputSchema"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publisherType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:eventgrid/v20230601preview:NamespaceTopic" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NamespaceTopic.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NamespaceTopic resource.
 */
export interface NamespaceTopicArgs {
    /**
     * Event retention for the namespace topic expressed in days. The property default value is 1 day.
     * Min event retention duration value is 1 day and max event retention duration value is 1 day.
     */
    eventRetentionInDays?: pulumi.Input<number>;
    /**
     * This determines the format that is expected for incoming events published to the topic.
     */
    inputSchema?: pulumi.Input<string | types.enums.EventInputSchema>;
    /**
     * Name of the namespace.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Publisher type of the namespace topic.
     */
    publisherType?: pulumi.Input<string | types.enums.PublisherType>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the namespace topic.
     */
    topicName?: pulumi.Input<string>;
}
