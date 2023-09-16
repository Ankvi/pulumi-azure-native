import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the alert rule.
 */
export function getFusionAlertRule(args: GetFusionAlertRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetFusionAlertRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20230701preview:getFusionAlertRule", {
        "resourceGroupName": args.resourceGroupName,
        "ruleId": args.ruleId,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetFusionAlertRuleArgs {
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
 * Represents Fusion alert rule.
 */
export interface GetFusionAlertRuleResult {
    /**
     * The Name of the alert rule template used to create this rule.
     */
    readonly alertRuleTemplateName: string;
    /**
     * The description of the alert rule.
     */
    readonly description: string;
    /**
     * The display name for alerts created by this alert rule.
     */
    readonly displayName: string;
    /**
     * Determines whether this alert rule is enabled or disabled.
     */
    readonly enabled: boolean;
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The kind of the alert rule
     * Expected value is 'Fusion'.
     */
    readonly kind: "Fusion";
    /**
     * The last time that this alert has been modified.
     */
    readonly lastModifiedUtc: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Configuration to exclude scenarios in fusion detection.
     */
    readonly scenarioExclusionPatterns?: types.outputs.securityinsights.v20230701preview.FusionScenarioExclusionPatternResponse[];
    /**
     * The severity for alerts created by this alert rule.
     */
    readonly severity: string;
    /**
     * Configuration for all supported source signals in fusion detection.
     */
    readonly sourceSettings?: types.outputs.securityinsights.v20230701preview.FusionSourceSettingsResponse[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.securityinsights.v20230701preview.SystemDataResponse;
    /**
     * The tactics of the alert rule
     */
    readonly tactics: string[];
    /**
     * The techniques of the alert rule
     */
    readonly techniques: string[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the alert rule.
 */
export function getFusionAlertRuleOutput(args: GetFusionAlertRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFusionAlertRuleResult> {
    return pulumi.output(args).apply((a: any) => getFusionAlertRule(a, opts))
}

export interface GetFusionAlertRuleOutputArgs {
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
