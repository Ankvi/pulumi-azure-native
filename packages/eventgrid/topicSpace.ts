import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Topic space resource.
 * Azure REST API version: 2023-06-01-preview.
 */
export class TopicSpace extends pulumi.CustomResource {
    /**
     * Get an existing TopicSpace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TopicSpace {
        return new TopicSpace(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:eventgrid:TopicSpace';

    /**
     * Returns true if the given object is an instance of TopicSpace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TopicSpace {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TopicSpace.__pulumiType;
    }

    /**
     * Description for the Topic Space resource.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the TopicSpace resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The system metadata relating to the TopicSpace resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.eventgrid.SystemDataResponse>;
    /**
     * The topic filters in the topic space.
     * Example: "topicTemplates": [ 
     *               "devices/foo/bar",
     *               "devices/topic1/+",
     *               "devices/${principal.name}/${principal.attributes.keyName}" ].
     */
    public readonly topicTemplates!: pulumi.Output<string[] | undefined>;
    /**
     * Type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a TopicSpace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TopicSpaceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.namespaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["topicSpaceName"] = args ? args.topicSpaceName : undefined;
            resourceInputs["topicTemplates"] = args ? args.topicTemplates : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["topicTemplates"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:eventgrid/v20230601preview:TopicSpace" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(TopicSpace.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a TopicSpace resource.
 */
export interface TopicSpaceArgs {
    /**
     * Description for the Topic Space resource.
     */
    description?: pulumi.Input<string>;
    /**
     * Name of the namespace.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The topic space name.
     */
    topicSpaceName?: pulumi.Input<string>;
    /**
     * The topic filters in the topic space.
     * Example: "topicTemplates": [ 
     *               "devices/foo/bar",
     *               "devices/topic1/+",
     *               "devices/${principal.name}/${principal.attributes.keyName}" ].
     */
    topicTemplates?: pulumi.Input<pulumi.Input<string>[]>;
}
