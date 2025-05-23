import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a specific governance rule for the requested scope by ruleId
 *
 * Uses Azure REST API version 2022-01-01-preview.
 */
export function getGovernanceRule(args: GetGovernanceRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetGovernanceRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:getGovernanceRule", {
        "ruleId": args.ruleId,
        "scope": args.scope,
    }, opts);
}

export interface GetGovernanceRuleArgs {
    /**
     * The governance rule key - unique key for the standard governance rule (GUID)
     */
    ruleId: string;
    /**
     * The scope of the Governance rules. Valid scopes are: management group (format: 'providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: 'subscriptions/{subscriptionId}'), or security connector (format: 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName})'
     */
    scope: string;
}

/**
 * Governance rule over a given scope
 */
export interface GetGovernanceRuleResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Description of the governance rule
     */
    readonly description?: string;
    /**
     * Display name of the governance rule
     */
    readonly displayName: string;
    /**
     * Excluded scopes, filter out the descendants of the scope (on management scopes)
     */
    readonly excludedScopes?: string[];
    /**
     * The email notifications settings for the governance rule, states whether to disable notifications for mangers and owners
     */
    readonly governanceEmailNotification?: types.outputs.GovernanceRuleEmailNotificationResponse;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Defines whether the rule is management scope rule (master connector as a single scope or management scope)
     */
    readonly includeMemberScopes?: boolean;
    /**
     * Defines whether the rule is active/inactive
     */
    readonly isDisabled?: boolean;
    /**
     * Defines whether there is a grace period on the governance rule
     */
    readonly isGracePeriod?: boolean;
    /**
     * The governance rule metadata
     */
    readonly metadata?: types.outputs.GovernanceRuleMetadataResponse;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The owner source for the governance rule - e.g. Manually by user@contoso.com - see example
     */
    readonly ownerSource: types.outputs.GovernanceRuleOwnerSourceResponse;
    /**
     * Governance rule remediation timeframe - this is the time that will affect on the grace-period duration e.g. 7.00:00:00 - means 7 days
     */
    readonly remediationTimeframe?: string;
    /**
     * The governance rule priority, priority to the lower number. Rules with the same priority on the same scope will not be allowed
     */
    readonly rulePriority: number;
    /**
     * The rule type of the governance rule, defines the source of the rule e.g. Integrated
     */
    readonly ruleType: string;
    /**
     * The governance rule source, what the rule affects, e.g. Assessments
     */
    readonly sourceResourceType: string;
    /**
     * The tenantId (GUID)
     */
    readonly tenantId: string;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Get a specific governance rule for the requested scope by ruleId
 *
 * Uses Azure REST API version 2022-01-01-preview.
 */
export function getGovernanceRuleOutput(args: GetGovernanceRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGovernanceRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:security:getGovernanceRule", {
        "ruleId": args.ruleId,
        "scope": args.scope,
    }, opts);
}

export interface GetGovernanceRuleOutputArgs {
    /**
     * The governance rule key - unique key for the standard governance rule (GUID)
     */
    ruleId: pulumi.Input<string>;
    /**
     * The scope of the Governance rules. Valid scopes are: management group (format: 'providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: 'subscriptions/{subscriptionId}'), or security connector (format: 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName})'
     */
    scope: pulumi.Input<string>;
}