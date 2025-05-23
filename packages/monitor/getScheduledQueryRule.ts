import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve an scheduled query rule definition.
 *
 * Uses Azure REST API version 2024-01-01-preview.
 *
 * Other available API versions: 2023-12-01, 2025-01-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native monitor [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getScheduledQueryRule(args: GetScheduledQueryRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetScheduledQueryRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:monitor:getScheduledQueryRule", {
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
    /**
     * Actions to invoke when the alert fires.
     */
    readonly actions?: types.outputs.ActionsResponse;
    /**
     * The flag that indicates whether the alert should be automatically resolved or not. The default is true. Relevant only for rules of the kind LogAlert.
     */
    readonly autoMitigate?: boolean;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The flag which indicates whether this scheduled query rule should be stored in the customer's storage. The default is false. Relevant only for rules of the kind LogAlert.
     */
    readonly checkWorkspaceAlertsStorageConfigured?: boolean;
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
     * How often the scheduled query rule is evaluated represented in ISO 8601 duration format. Relevant and required only for rules of the kind LogAlert.
     */
    readonly evaluationFrequency?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The identity of the resource.
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * True if alert rule is legacy Log Analytic rule
     */
    readonly isLegacyLogAnalyticsRule: boolean;
    /**
     * The flag which indicates whether this scheduled query rule has been configured to be stored in the customer's storage. The default is false.
     */
    readonly isWorkspaceAlertsStorageConfigured: boolean;
    /**
     * Indicates the type of scheduled query rule. The default is LogAlert.
     */
    readonly kind?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Mute actions for the chosen period of time (in ISO 8601 duration format) after the alert is fired. Relevant only for rules of the kind LogAlert.
     */
    readonly muteActionsDuration?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * If specified then overrides the query time range (default is WindowSize*NumberOfEvaluationPeriods). Relevant only for rules of the kind LogAlert.
     */
    readonly overrideQueryTimeRange?: string;
    /**
     * Defines the configuration for resolving fired alerts. Relevant only for rules of the kind LogAlert.
     */
    readonly resolveConfiguration?: types.outputs.RuleResolveConfigurationResponse;
    /**
     * The list of resource id's that this scheduled query rule is scoped to.
     */
    readonly scopes: string[];
    /**
     * Severity of the alert. Should be an integer between [0-4]. Value of 0 is severest. Relevant and required only for rules of the kind LogAlert.
     */
    readonly severity?: number;
    /**
     * The flag which indicates whether the provided query should be validated or not. The default is false. Relevant only for rules of the kind LogAlert.
     */
    readonly skipQueryValidation?: boolean;
    /**
     * SystemData of ScheduledQueryRule.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * List of resource type of the target resource(s) on which the alert is created/updated. For example if the scope is a resource group and targetResourceTypes is Microsoft.Compute/virtualMachines, then a different alert will be fired for each virtual machine in the resource group which meet the alert criteria. Relevant only for rules of the kind LogAlert
     */
    readonly targetResourceTypes?: string[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The period of time (in ISO 8601 duration format) on which the Alert query will be executed (bin size). Relevant and required only for rules of the kind LogAlert.
     */
    readonly windowSize?: string;
}
/**
 * Retrieve an scheduled query rule definition.
 *
 * Uses Azure REST API version 2024-01-01-preview.
 *
 * Other available API versions: 2023-12-01, 2025-01-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native monitor [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getScheduledQueryRuleOutput(args: GetScheduledQueryRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetScheduledQueryRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:monitor:getScheduledQueryRule", {
        "resourceGroupName": args.resourceGroupName,
        "ruleName": args.ruleName,
    }, opts);
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