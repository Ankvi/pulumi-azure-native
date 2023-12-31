import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the alert rule.
 */
export function getFusionAlertRule(args: GetFusionAlertRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetFusionAlertRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20210301preview:getFusionAlertRule", {
        "operationalInsightsResourceProvider": args.operationalInsightsResourceProvider,
        "resourceGroupName": args.resourceGroupName,
        "ruleId": args.ruleId,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetFusionAlertRuleArgs {
    /**
     * The namespace of workspaces resource provider- Microsoft.OperationalInsights.
     */
    operationalInsightsResourceProvider: string;
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
     * Azure resource Id
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
     * Azure resource name
     */
    readonly name: string;
    /**
     * The severity for alerts created by this alert rule.
     */
    readonly severity: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The tactics of the alert rule
     */
    readonly tactics: string[];
    /**
     * Azure resource type
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
     * The namespace of workspaces resource provider- Microsoft.OperationalInsights.
     */
    operationalInsightsResourceProvider: pulumi.Input<string>;
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
