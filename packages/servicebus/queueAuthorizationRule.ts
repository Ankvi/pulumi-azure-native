import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description of a namespace authorization rule.
 *
 * Uses Azure REST API version 2022-01-01-preview. In version 1.x of the Azure Native provider, it used API version 2017-04-01.
 *
 * Other available API versions: 2022-10-01-preview, 2023-01-01-preview, 2024-01-01.
 */
export class QueueAuthorizationRule extends pulumi.CustomResource {
    /**
     * Get an existing QueueAuthorizationRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): QueueAuthorizationRule {
        return new QueueAuthorizationRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:servicebus:QueueAuthorizationRule';

    /**
     * Returns true if the given object is an instance of QueueAuthorizationRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is QueueAuthorizationRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === QueueAuthorizationRule.__pulumiType;
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
     * Create a QueueAuthorizationRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: QueueAuthorizationRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.namespaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.queueName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'queueName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.rights === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rights'");
            }
            resourceInputs["authorizationRuleName"] = args ? args.authorizationRuleName : undefined;
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["queueName"] = args ? args.queueName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["rights"] = args ? args.rights : undefined;
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
        const aliasOpts = { aliases: [{ type: "azure-native:servicebus/v20140901:QueueAuthorizationRule" }, { type: "azure-native:servicebus/v20150801:QueueAuthorizationRule" }, { type: "azure-native:servicebus/v20170401:QueueAuthorizationRule" }, { type: "azure-native:servicebus/v20180101preview:QueueAuthorizationRule" }, { type: "azure-native:servicebus/v20210101preview:QueueAuthorizationRule" }, { type: "azure-native:servicebus/v20210601preview:QueueAuthorizationRule" }, { type: "azure-native:servicebus/v20211101:QueueAuthorizationRule" }, { type: "azure-native:servicebus/v20220101preview:QueueAuthorizationRule" }, { type: "azure-native:servicebus/v20221001preview:QueueAuthorizationRule" }, { type: "azure-native:servicebus/v20230101preview:QueueAuthorizationRule" }, { type: "azure-native:servicebus/v20240101:QueueAuthorizationRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(QueueAuthorizationRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a QueueAuthorizationRule resource.
 */
export interface QueueAuthorizationRuleArgs {
    /**
     * The authorization rule name.
     */
    authorizationRuleName?: pulumi.Input<string>;
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The queue name.
     */
    queueName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The rights associated with the rule.
     */
    rights: pulumi.Input<pulumi.Input<string | types.enums.AccessRights>[]>;
}