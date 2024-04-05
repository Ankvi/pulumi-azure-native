import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The scheduled query rule resource.
 */
export class ScheduledQueryRule extends pulumi.CustomResource {
    /**
     * Get an existing ScheduledQueryRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ScheduledQueryRule {
        return new ScheduledQueryRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:insights/v20200501preview:ScheduledQueryRule';

    /**
     * Returns true if the given object is an instance of ScheduledQueryRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ScheduledQueryRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ScheduledQueryRule.__pulumiType;
    }

    public readonly actions!: pulumi.Output<types.outputs.ActionResponse[] | undefined>;
    /**
     * The api-version used when creating this alert rule
     */
    public /*out*/ readonly createdWithApiVersion!: pulumi.Output<string>;
    /**
     * The rule criteria that defines the conditions of the scheduled query rule.
     */
    public readonly criteria!: pulumi.Output<types.outputs.ScheduledQueryRuleCriteriaResponse>;
    /**
     * The description of the scheduled query rule.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The display name of the alert rule
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * The flag which indicates whether this scheduled query rule is enabled. Value should be true or false
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields. 
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * How often the scheduled query rule is evaluated represented in ISO 8601 duration format.
     */
    public readonly evaluationFrequency!: pulumi.Output<string>;
    /**
     * True if alert rule is legacy Log Analytic rule
     */
    public /*out*/ readonly isLegacyLogAnalyticsRule!: pulumi.Output<boolean>;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    public /*out*/ readonly kind!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Mute actions for the chosen period of time (in ISO 8601 duration format) after the alert is fired.
     */
    public readonly muteActionsDuration!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * If specified then overrides the query time range (default is WindowSize*NumberOfEvaluationPeriods)
     */
    public readonly overrideQueryTimeRange!: pulumi.Output<string | undefined>;
    /**
     * The list of resource id's that this scheduled query rule is scoped to.
     */
    public readonly scopes!: pulumi.Output<string[]>;
    /**
     * Severity of the alert. Should be an integer between [0-4]. Value of 0 is severest
     */
    public readonly severity!: pulumi.Output<number>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * List of resource type of the target resource(s) on which the alert is created/updated. For example if the scope is a resource group and targetResourceTypes is Microsoft.Compute/virtualMachines, then a different alert will be fired for each virtual machine in the resource group which meet the alert criteria
     */
    public readonly targetResourceTypes!: pulumi.Output<string[] | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The period of time (in ISO 8601 duration format) on which the Alert query will be executed (bin size).
     */
    public readonly windowSize!: pulumi.Output<string>;

    /**
     * Create a ScheduledQueryRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScheduledQueryRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.criteria === undefined) && !opts.urn) {
                throw new Error("Missing required property 'criteria'");
            }
            if ((!args || args.enabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabled'");
            }
            if ((!args || args.evaluationFrequency === undefined) && !opts.urn) {
                throw new Error("Missing required property 'evaluationFrequency'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.scopes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scopes'");
            }
            if ((!args || args.severity === undefined) && !opts.urn) {
                throw new Error("Missing required property 'severity'");
            }
            if ((!args || args.windowSize === undefined) && !opts.urn) {
                throw new Error("Missing required property 'windowSize'");
            }
            resourceInputs["actions"] = args ? args.actions : undefined;
            resourceInputs["criteria"] = args ? args.criteria : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["evaluationFrequency"] = args ? args.evaluationFrequency : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["muteActionsDuration"] = args ? args.muteActionsDuration : undefined;
            resourceInputs["overrideQueryTimeRange"] = args ? args.overrideQueryTimeRange : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["ruleName"] = args ? args.ruleName : undefined;
            resourceInputs["scopes"] = args ? args.scopes : undefined;
            resourceInputs["severity"] = args ? args.severity : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["targetResourceTypes"] = args ? args.targetResourceTypes : undefined;
            resourceInputs["windowSize"] = args ? args.windowSize : undefined;
            resourceInputs["createdWithApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["isLegacyLogAnalyticsRule"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["actions"] = undefined /*out*/;
            resourceInputs["createdWithApiVersion"] = undefined /*out*/;
            resourceInputs["criteria"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["enabled"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["evaluationFrequency"] = undefined /*out*/;
            resourceInputs["isLegacyLogAnalyticsRule"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["muteActionsDuration"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["overrideQueryTimeRange"] = undefined /*out*/;
            resourceInputs["scopes"] = undefined /*out*/;
            resourceInputs["severity"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["targetResourceTypes"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["windowSize"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:insights:ScheduledQueryRule" }, { type: "azure-native:insights/v20180416:ScheduledQueryRule" }, { type: "azure-native:insights/v20210201preview:ScheduledQueryRule" }, { type: "azure-native:insights/v20210801:ScheduledQueryRule" }, { type: "azure-native:insights/v20220615:ScheduledQueryRule" }, { type: "azure-native:insights/v20220801preview:ScheduledQueryRule" }, { type: "azure-native:insights/v20230315preview:ScheduledQueryRule" }, { type: "azure-native:insights/v20231201:ScheduledQueryRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ScheduledQueryRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ScheduledQueryRule resource.
 */
export interface ScheduledQueryRuleArgs {
    actions?: pulumi.Input<pulumi.Input<types.inputs.ActionArgs>[]>;
    /**
     * The rule criteria that defines the conditions of the scheduled query rule.
     */
    criteria: pulumi.Input<types.inputs.ScheduledQueryRuleCriteriaArgs>;
    /**
     * The description of the scheduled query rule.
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of the alert rule
     */
    displayName?: pulumi.Input<string>;
    /**
     * The flag which indicates whether this scheduled query rule is enabled. Value should be true or false
     */
    enabled: pulumi.Input<boolean>;
    /**
     * How often the scheduled query rule is evaluated represented in ISO 8601 duration format.
     */
    evaluationFrequency: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Mute actions for the chosen period of time (in ISO 8601 duration format) after the alert is fired.
     */
    muteActionsDuration?: pulumi.Input<string>;
    /**
     * If specified then overrides the query time range (default is WindowSize*NumberOfEvaluationPeriods)
     */
    overrideQueryTimeRange?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the rule.
     */
    ruleName?: pulumi.Input<string>;
    /**
     * The list of resource id's that this scheduled query rule is scoped to.
     */
    scopes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Severity of the alert. Should be an integer between [0-4]. Value of 0 is severest
     */
    severity: pulumi.Input<number>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * List of resource type of the target resource(s) on which the alert is created/updated. For example if the scope is a resource group and targetResourceTypes is Microsoft.Compute/virtualMachines, then a different alert will be fired for each virtual machine in the resource group which meet the alert criteria
     */
    targetResourceTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The period of time (in ISO 8601 duration format) on which the Alert query will be executed (bin size).
     */
    windowSize: pulumi.Input<string>;
}