import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description of a namespace authorization rule.
 * Azure REST API version: 2022-01-01-preview. Prior API version in Azure Native 1.x: 2017-04-01.
 *
 * Other available API versions: 2014-09-01, 2015-08-01, 2022-10-01-preview.
 */
export class TopicAuthorizationRule extends pulumi.CustomResource {
    /**
     * Get an existing TopicAuthorizationRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TopicAuthorizationRule {
        return new TopicAuthorizationRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:servicebus:TopicAuthorizationRule';

    /**
     * Returns true if the given object is an instance of TopicAuthorizationRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TopicAuthorizationRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TopicAuthorizationRule.__pulumiType;
    }

    /**
     * The geo-location where the resource lives
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The rights associated with the rule.
     */
    public readonly rights!: pulumi.Output<string[]>;
    /**
     * The system meta data relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.EventHub/Namespaces" or "Microsoft.EventHub/Namespaces/EventHubs"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a TopicAuthorizationRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TopicAuthorizationRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.namespaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.rights === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rights'");
            }
            if ((!args || args.topicName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'topicName'");
            }
            resourceInputs["authorizationRuleName"] = args ? args.authorizationRuleName : undefined;
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["rights"] = args ? args.rights : undefined;
            resourceInputs["topicName"] = args ? args.topicName : undefined;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["rights"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicebus/v20140901:TopicAuthorizationRule" }, { type: "azure-native:servicebus/v20150801:TopicAuthorizationRule" }, { type: "azure-native:servicebus/v20170401:TopicAuthorizationRule" }, { type: "azure-native:servicebus/v20180101preview:TopicAuthorizationRule" }, { type: "azure-native:servicebus/v20210101preview:TopicAuthorizationRule" }, { type: "azure-native:servicebus/v20210601preview:TopicAuthorizationRule" }, { type: "azure-native:servicebus/v20211101:TopicAuthorizationRule" }, { type: "azure-native:servicebus/v20220101preview:TopicAuthorizationRule" }, { type: "azure-native:servicebus/v20221001preview:TopicAuthorizationRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(TopicAuthorizationRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a TopicAuthorizationRule resource.
 */
export interface TopicAuthorizationRuleArgs {
    /**
     * The authorization rule name.
     */
    authorizationRuleName?: pulumi.Input<string>;
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The rights associated with the rule.
     */
    rights: pulumi.Input<pulumi.Input<string | types.enums.AccessRights>[]>;
    /**
     * The topic name.
     */
    topicName: pulumi.Input<string>;
}
