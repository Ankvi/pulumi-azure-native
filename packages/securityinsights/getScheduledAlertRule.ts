import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the alert rule.
 *
 * Uses Azure REST API version 2024-09-01.
 */
export function getScheduledAlertRule(args: GetScheduledAlertRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetScheduledAlertRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights:getScheduledAlertRule", {
        "resourceGroupName": args.resourceGroupName,
        "ruleId": args.ruleId,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetScheduledAlertRuleArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Alert rule ID
     */
    ruleId: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Represents scheduled alert rule.
 */
export interface GetScheduledAlertRuleResult {
    /**
     * The alert details override settings
     */
    readonly alertDetailsOverride?: types.outputs.AlertDetailsOverrideResponse;
    /**
     * The Name of the alert rule template used to create this rule.
     */
    readonly alertRuleTemplateName?: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Dictionary of string key-value pairs of columns to be attached to the alert
     */
    readonly customDetails?: {[key: string]: string};
    /**
     * The description of the alert rule.
     */
    readonly description?: string;
    /**
     * The display name for alerts created by this alert rule.
     */
    readonly displayName: string;
    /**
     * Determines whether this alert rule is enabled or disabled.
     */
    readonly enabled: boolean;
    /**
     * Array of the entity mappings of the alert rule
     */
    readonly entityMappings?: types.outputs.EntityMappingResponse[];
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * The event grouping settings.
     */
    readonly eventGroupingSettings?: types.outputs.EventGroupingSettingsResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The settings of the incidents that created from alerts triggered by this analytics rule
     */
    readonly incidentConfiguration?: types.outputs.IncidentConfigurationResponse;
    /**
     * The kind of the alert rule
     * Expected value is 'Scheduled'.
     */
    readonly kind: "Scheduled";
    /**
     * The last time that this alert rule has been modified.
     */
    readonly lastModifiedUtc: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The query that creates alerts for this rule.
     */
    readonly query: string;
    /**
     * The frequency (in ISO 8601 duration format) for this alert rule to run.
     */
    readonly queryFrequency: string;
    /**
     * The period (in ISO 8601 duration format) that this alert rule looks at.
     */
    readonly queryPeriod: string;
    /**
     * The severity for alerts created by this alert rule.
     */
    readonly severity: string;
    /**
     * The suppression (in ISO 8601 duration format) to wait since last time this alert rule been triggered.
     */
    readonly suppressionDuration: string;
    /**
     * Determines whether the suppression for this alert rule is enabled or disabled.
     */
    readonly suppressionEnabled: boolean;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The tactics of the alert rule
     */
    readonly tactics?: string[];
    /**
     * The techniques of the alert rule
     */
    readonly techniques?: string[];
    /**
     * The version of the alert rule template used to create this rule - in format <a.b.c>, where all are numbers, for example 0 <1.0.2>
     */
    readonly templateVersion?: string;
    /**
     * The operation against the threshold that triggers alert rule.
     */
    readonly triggerOperator: string;
    /**
     * The threshold triggers this alert rule.
     */
    readonly triggerThreshold: number;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the alert rule.
 *
 * Uses Azure REST API version 2024-09-01.
 */
export function getScheduledAlertRuleOutput(args: GetScheduledAlertRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetScheduledAlertRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:securityinsights:getScheduledAlertRule", {
        "resourceGroupName": args.resourceGroupName,
        "ruleId": args.ruleId,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetScheduledAlertRuleOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Alert rule ID
     */
    ruleId: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}