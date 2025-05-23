import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Governance rule over a given scope
 *
 * Uses Azure REST API version 2022-01-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-01-01-preview.
 */
export class GovernanceRule extends pulumi.CustomResource {
    /**
     * Get an existing GovernanceRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GovernanceRule {
        return new GovernanceRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:security:GovernanceRule';

    /**
     * Returns true if the given object is an instance of GovernanceRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GovernanceRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GovernanceRule.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Description of the governance rule
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Display name of the governance rule
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Excluded scopes, filter out the descendants of the scope (on management scopes)
     */
    public readonly excludedScopes!: pulumi.Output<string[] | undefined>;
    /**
     * The email notifications settings for the governance rule, states whether to disable notifications for mangers and owners
     */
    public readonly governanceEmailNotification!: pulumi.Output<types.outputs.GovernanceRuleEmailNotificationResponse | undefined>;
    /**
     * Defines whether the rule is management scope rule (master connector as a single scope or management scope)
     */
    public readonly includeMemberScopes!: pulumi.Output<boolean | undefined>;
    /**
     * Defines whether the rule is active/inactive
     */
    public readonly isDisabled!: pulumi.Output<boolean | undefined>;
    /**
     * Defines whether there is a grace period on the governance rule
     */
    public readonly isGracePeriod!: pulumi.Output<boolean | undefined>;
    /**
     * The governance rule metadata
     */
    public /*out*/ readonly metadata!: pulumi.Output<types.outputs.GovernanceRuleMetadataResponse | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The owner source for the governance rule - e.g. Manually by user@contoso.com - see example
     */
    public readonly ownerSource!: pulumi.Output<types.outputs.GovernanceRuleOwnerSourceResponse>;
    /**
     * Governance rule remediation timeframe - this is the time that will affect on the grace-period duration e.g. 7.00:00:00 - means 7 days
     */
    public readonly remediationTimeframe!: pulumi.Output<string | undefined>;
    /**
     * The governance rule priority, priority to the lower number. Rules with the same priority on the same scope will not be allowed
     */
    public readonly rulePriority!: pulumi.Output<number>;
    /**
     * The rule type of the governance rule, defines the source of the rule e.g. Integrated
     */
    public readonly ruleType!: pulumi.Output<string>;
    /**
     * The governance rule source, what the rule affects, e.g. Assessments
     */
    public readonly sourceResourceType!: pulumi.Output<string>;
    /**
     * The tenantId (GUID)
     */
    public /*out*/ readonly tenantId!: pulumi.Output<string>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a GovernanceRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GovernanceRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.ownerSource === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ownerSource'");
            }
            if ((!args || args.rulePriority === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rulePriority'");
            }
            if ((!args || args.ruleType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ruleType'");
            }
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            if ((!args || args.sourceResourceType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceResourceType'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["excludedScopes"] = args ? args.excludedScopes : undefined;
            resourceInputs["governanceEmailNotification"] = args ? args.governanceEmailNotification : undefined;
            resourceInputs["includeMemberScopes"] = args ? args.includeMemberScopes : undefined;
            resourceInputs["isDisabled"] = args ? args.isDisabled : undefined;
            resourceInputs["isGracePeriod"] = args ? args.isGracePeriod : undefined;
            resourceInputs["ownerSource"] = args ? args.ownerSource : undefined;
            resourceInputs["remediationTimeframe"] = args ? args.remediationTimeframe : undefined;
            resourceInputs["ruleId"] = args ? args.ruleId : undefined;
            resourceInputs["rulePriority"] = args ? args.rulePriority : undefined;
            resourceInputs["ruleType"] = args ? args.ruleType : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["sourceResourceType"] = args ? args.sourceResourceType : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["excludedScopes"] = undefined /*out*/;
            resourceInputs["governanceEmailNotification"] = undefined /*out*/;
            resourceInputs["includeMemberScopes"] = undefined /*out*/;
            resourceInputs["isDisabled"] = undefined /*out*/;
            resourceInputs["isGracePeriod"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["ownerSource"] = undefined /*out*/;
            resourceInputs["remediationTimeframe"] = undefined /*out*/;
            resourceInputs["rulePriority"] = undefined /*out*/;
            resourceInputs["ruleType"] = undefined /*out*/;
            resourceInputs["sourceResourceType"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security/v20220101preview:GovernanceRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(GovernanceRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a GovernanceRule resource.
 */
export interface GovernanceRuleArgs {
    /**
     * Description of the governance rule
     */
    description?: pulumi.Input<string>;
    /**
     * Display name of the governance rule
     */
    displayName: pulumi.Input<string>;
    /**
     * Excluded scopes, filter out the descendants of the scope (on management scopes)
     */
    excludedScopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The email notifications settings for the governance rule, states whether to disable notifications for mangers and owners
     */
    governanceEmailNotification?: pulumi.Input<types.inputs.GovernanceRuleEmailNotificationArgs>;
    /**
     * Defines whether the rule is management scope rule (master connector as a single scope or management scope)
     */
    includeMemberScopes?: pulumi.Input<boolean>;
    /**
     * Defines whether the rule is active/inactive
     */
    isDisabled?: pulumi.Input<boolean>;
    /**
     * Defines whether there is a grace period on the governance rule
     */
    isGracePeriod?: pulumi.Input<boolean>;
    /**
     * The owner source for the governance rule - e.g. Manually by user@contoso.com - see example
     */
    ownerSource: pulumi.Input<types.inputs.GovernanceRuleOwnerSourceArgs>;
    /**
     * Governance rule remediation timeframe - this is the time that will affect on the grace-period duration e.g. 7.00:00:00 - means 7 days
     */
    remediationTimeframe?: pulumi.Input<string>;
    /**
     * The governance rule key - unique key for the standard governance rule (GUID)
     */
    ruleId?: pulumi.Input<string>;
    /**
     * The governance rule priority, priority to the lower number. Rules with the same priority on the same scope will not be allowed
     */
    rulePriority: pulumi.Input<number>;
    /**
     * The rule type of the governance rule, defines the source of the rule e.g. Integrated
     */
    ruleType: pulumi.Input<string | types.enums.GovernanceRuleType>;
    /**
     * The scope of the Governance rules. Valid scopes are: management group (format: 'providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: 'subscriptions/{subscriptionId}'), or security connector (format: 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName})'
     */
    scope: pulumi.Input<string>;
    /**
     * The governance rule source, what the rule affects, e.g. Assessments
     */
    sourceResourceType: pulumi.Input<string | types.enums.GovernanceRuleSourceResourceType>;
}