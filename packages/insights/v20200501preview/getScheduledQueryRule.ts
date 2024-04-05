import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve an scheduled query rule definition.
 */
export function getScheduledQueryRule(args: GetScheduledQueryRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetScheduledQueryRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:insights/v20200501preview:getScheduledQueryRule", {
        "resourceGroupName": args.resourceGroupName,
        "ruleName": args.ruleName,
    }, opts);
}

export interface GetScheduledQueryRuleArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the rule.
     */
    ruleName: string;
}

/**
 * The scheduled query rule resource.
 */
export interface GetScheduledQueryRuleResult {
    readonly actions?: types.outputs.ActionResponse[];
    /**
     * The api-version used when creating this alert rule
     */
    readonly createdWithApiVersion: string;
    /**
     * The rule criteria that defines the conditions of the scheduled query rule.
     */
    readonly criteria: types.outputs.ScheduledQueryRuleCriteriaResponse;
    /**
     * The description of the scheduled query rule.
     */
    readonly description?: string;
    /**
     * The display name of the alert rule
     */
    readonly displayName?: string;
    /**
     * The flag which indicates whether this scheduled query rule is enabled. Value should be true or false
     */
    readonly enabled: boolean;
    /**
     * The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields. 
     */
    readonly etag: string;
    /**
     * How often the scheduled query rule is evaluated represented in ISO 8601 duration format.
     */
    readonly evaluationFrequency: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * True if alert rule is legacy Log Analytic rule
     */
    readonly isLegacyLogAnalyticsRule: boolean;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    readonly kind: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Mute actions for the chosen period of time (in ISO 8601 duration format) after the alert is fired.
     */
    readonly muteActionsDuration?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * If specified then overrides the query time range (default is WindowSize*NumberOfEvaluationPeriods)
     */
    readonly overrideQueryTimeRange?: string;
    /**
     * The list of resource id's that this scheduled query rule is scoped to.
     */
    readonly scopes: string[];
    /**
     * Severity of the alert. Should be an integer between [0-4]. Value of 0 is severest
     */
    readonly severity: number;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * List of resource type of the target resource(s) on which the alert is created/updated. For example if the scope is a resource group and targetResourceTypes is Microsoft.Compute/virtualMachines, then a different alert will be fired for each virtual machine in the resource group which meet the alert criteria
     */
    readonly targetResourceTypes?: string[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The period of time (in ISO 8601 duration format) on which the Alert query will be executed (bin size).
     */
    readonly windowSize: string;
}
/**
 * Retrieve an scheduled query rule definition.
 */
export function getScheduledQueryRuleOutput(args: GetScheduledQueryRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetScheduledQueryRuleResult> {
    return pulumi.output(args).apply((a: any) => getScheduledQueryRule(a, opts))
}

export interface GetScheduledQueryRuleOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the rule.
     */
    ruleName: pulumi.Input<string>;
}