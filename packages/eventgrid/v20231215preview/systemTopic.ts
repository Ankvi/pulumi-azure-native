import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * EventGrid System Topic.
 */
export class SystemTopic extends pulumi.CustomResource {
    /**
     * Get an existing SystemTopic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SystemTopic {
        return new SystemTopic(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:eventgrid/v20231215preview:SystemTopic';

    /**
     * Returns true if the given object is an instance of SystemTopic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemTopic {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemTopic.__pulumiType;
    }

    /**
     * Identity information for the resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityInfoResponse | undefined>;
    /**
     * Location of the resource.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Metric resource id for the system topic.
     */
    public /*out*/ readonly metricResourceId!: pulumi.Output<string>;
    /**
     * Name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the system topic.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Source for the system topic.
     */
    public readonly source!: pulumi.Output<string | undefined>;
    /**
     * The system metadata relating to System Topic resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * TopicType for the system topic.
     */
    public readonly topicType!: pulumi.Output<string | undefined>;
    /**
     * Type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SystemTopic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SystemTopicArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["systemTopicName"] = args ? args.systemTopicName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["topicType"] = args ? args.topicType : undefined;
            resourceInputs["metricResourceId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["metricResourceId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["source"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["topicType"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:eventgrid:SystemTopic" }, { type: "azure-native:eventgrid/v20200401preview:SystemTopic" }, { type: "azure-native:eventgrid/v20201015preview:SystemTopic" }, { type: "azure-native:eventgrid/v20210601preview:SystemTopic" }, { type: "azure-native:eventgrid/v20211015preview:SystemTopic" }, { type: "azure-native:eventgrid/v20211201:SystemTopic" }, { type: "azure-native:eventgrid/v20220615:SystemTopic" }, { type: "azure-native:eventgrid/v20230601preview:SystemTopic" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SystemTopic.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SystemTopic resource.
 */
export interface SystemTopicArgs {
    /**
     * Identity information for the resource.
     */
    identity?: pulumi.Input<types.inputs.IdentityInfoArgs>;
    /**
     * Location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Source for the system topic.
     */
    source?: pulumi.Input<string>;
    /**
     * Name of the system topic.
     */
    systemTopicName?: pulumi.Input<string>;
    /**
     * Tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * TopicType for the system topic.
     */
    topicType?: pulumi.Input<string>;
}