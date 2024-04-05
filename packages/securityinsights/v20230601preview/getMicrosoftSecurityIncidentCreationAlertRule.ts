import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the alert rule.
 */
export function getMicrosoftSecurityIncidentCreationAlertRule(args: GetMicrosoftSecurityIncidentCreationAlertRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetMicrosoftSecurityIncidentCreationAlertRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20230601preview:getMicrosoftSecurityIncidentCreationAlertRule", {
        "resourceGroupName": args.resourceGroupName,
        "ruleId": args.ruleId,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetMicrosoftSecurityIncidentCreationAlertRuleArgs {
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
 * Represents MicrosoftSecurityIncidentCreation rule.
 */
export interface GetMicrosoftSecurityIncidentCreationAlertRuleResult {
    /**
     * The Name of the alert rule template used to create this rule.
     */
    readonly alertRuleTemplateName?: string;
    /**
     * The description of the alert rule.
     */
    readonly description?: string;
    /**
     * The display name for alerts created by this alert rule.
     */
    readonly displayName: string;
    /**
     * the alerts' displayNames on which the cases will not be generated
     */
    readonly displayNamesExcludeFilter?: string[];
    /**
     * the alerts' displayNames on which the cases will be generated
     */
    readonly displayNamesFilter?: string[];
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
     * Expected value is 'MicrosoftSecurityIncidentCreation'.
     */
    readonly kind: "MicrosoftSecurityIncidentCreation";
    /**
     * The last time that this alert has been modified.
     */
    readonly lastModifiedUtc: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The alerts' productName on which the cases will be generated
     */
    readonly productFilter: string;
    /**
     * the alerts' severities on which the cases will be generated
     */
    readonly severitiesFilter?: string[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the alert rule.
 */
export function getMicrosoftSecurityIncidentCreationAlertRuleOutput(args: GetMicrosoftSecurityIncidentCreationAlertRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMicrosoftSecurityIncidentCreationAlertRuleResult> {
    return pulumi.output(args).apply((a: any) => getMicrosoftSecurityIncidentCreationAlertRule(a, opts))
}

export interface GetMicrosoftSecurityIncidentCreationAlertRuleOutputArgs {
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