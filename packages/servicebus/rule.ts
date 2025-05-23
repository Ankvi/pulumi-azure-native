import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description of Rule Resource.
 *
 * Uses Azure REST API version 2024-01-01. In version 2.x of the Azure Native provider, it used API version 2022-01-01-preview.
 *
 * Other available API versions: 2018-01-01-preview, 2021-01-01-preview, 2021-06-01-preview, 2021-11-01, 2022-01-01-preview, 2022-10-01-preview, 2023-01-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicebus [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Rule extends pulumi.CustomResource {
    /**
     * Get an existing Rule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Rule {
        return new Rule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:servicebus:Rule';

    /**
     * Returns true if the given object is an instance of Rule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Rule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Rule.__pulumiType;
    }

    /**
     * Represents the filter actions which are allowed for the transformation of a message that have been matched by a filter expression.
     */
    public readonly action!: pulumi.Output<types.outputs.ActionResponse | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Properties of correlationFilter
     */
    public readonly correlationFilter!: pulumi.Output<types.outputs.CorrelationFilterResponse | undefined>;
    /**
     * Filter type that is evaluated against a BrokeredMessage.
     */
    public readonly filterType!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties of sqlFilter
     */
    public readonly sqlFilter!: pulumi.Output<types.outputs.SqlFilterResponse | undefined>;
    /**
     * The system meta data relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.EventHub/Namespaces" or "Microsoft.EventHub/Namespaces/EventHubs"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Rule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.namespaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.subscriptionName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subscriptionName'");
            }
            if ((!args || args.topicName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'topicName'");
            }
            resourceInputs["action"] = args ? (args.action ? pulumi.output(args.action).apply(types.inputs.actionArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["correlationFilter"] = args ? (args.correlationFilter ? pulumi.output(args.correlationFilter).apply(types.inputs.correlationFilterArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["filterType"] = args ? args.filterType : undefined;
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["ruleName"] = args ? args.ruleName : undefined;
            resourceInputs["sqlFilter"] = args ? (args.sqlFilter ? pulumi.output(args.sqlFilter).apply(types.inputs.sqlFilterArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["subscriptionName"] = args ? args.subscriptionName : undefined;
            resourceInputs["topicName"] = args ? args.topicName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["action"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["correlationFilter"] = undefined /*out*/;
            resourceInputs["filterType"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sqlFilter"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicebus/v20170401:Rule" }, { type: "azure-native:servicebus/v20180101preview:Rule" }, { type: "azure-native:servicebus/v20210101preview:Rule" }, { type: "azure-native:servicebus/v20210601preview:Rule" }, { type: "azure-native:servicebus/v20211101:Rule" }, { type: "azure-native:servicebus/v20220101preview:Rule" }, { type: "azure-native:servicebus/v20221001preview:Rule" }, { type: "azure-native:servicebus/v20230101preview:Rule" }, { type: "azure-native:servicebus/v20240101:Rule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Rule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Rule resource.
 */
export interface RuleArgs {
    /**
     * Represents the filter actions which are allowed for the transformation of a message that have been matched by a filter expression.
     */
    action?: pulumi.Input<types.inputs.ActionArgs>;
    /**
     * Properties of correlationFilter
     */
    correlationFilter?: pulumi.Input<types.inputs.CorrelationFilterArgs>;
    /**
     * Filter type that is evaluated against a BrokeredMessage.
     */
    filterType?: pulumi.Input<types.enums.FilterType>;
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The rule name.
     */
    ruleName?: pulumi.Input<string>;
    /**
     * Properties of sqlFilter
     */
    sqlFilter?: pulumi.Input<types.inputs.SqlFilterArgs>;
    /**
     * The subscription name.
     */
    subscriptionName: pulumi.Input<string>;
    /**
     * The topic name.
     */
    topicName: pulumi.Input<string>;
}