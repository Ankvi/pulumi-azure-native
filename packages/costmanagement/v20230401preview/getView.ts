import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the view by view name.
 */
export function getView(args: GetViewArgs, opts?: pulumi.InvokeOptions): Promise<GetViewResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:costmanagement/v20230401preview:getView", {
        "viewName": args.viewName,
    }, opts);
}

export interface GetViewArgs {
    /**
     * View name
     */
    viewName: string;
}

/**
 * States and configurations of Cost Analysis.
 */
export interface GetViewResult {
    /**
     * Show costs accumulated over time.
     */
    readonly accumulated?: string;
    /**
     * Chart type of the main view in Cost Analysis. Required.
     */
    readonly chart?: string;
    /**
     * Date the user created this view.
     */
    readonly createdOn: string;
    /**
     * Currency of the current view.
     */
    readonly currency: string;
    /**
     * Has definition for data in this report config.
     */
    readonly dataSet?: types.outputs.ReportConfigDatasetResponse;
    /**
     * Date range of the current view.
     */
    readonly dateRange?: string;
    /**
     * User input name of the view. Required.
     */
    readonly displayName?: string;
    /**
     * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
     */
    readonly eTag?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * If true, report includes monetary commitment.
     */
    readonly includeMonetaryCommitment?: boolean;
    /**
     * List of KPIs to show in Cost Analysis UI.
     */
    readonly kpis?: types.outputs.KpiPropertiesResponse[];
    /**
     * Metric to use when displaying costs.
     */
    readonly metric?: string;
    /**
     * Date when the user last modified this view.
     */
    readonly modifiedOn?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Configuration of 3 sub-views in the Cost Analysis UI.
     */
    readonly pivots?: types.outputs.PivotPropertiesResponse[];
    /**
     * Cost Management scope to save the view on. This includes 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, 'providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, '/providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for ExternalBillingAccount scope, and '/providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for ExternalSubscription scope.
     */
    readonly scope?: string;
    /**
     * Has time period for pulling data for the report.
     */
    readonly timePeriod?: types.outputs.ReportConfigTimePeriodResponse;
    /**
     * The time frame for pulling data for the report. If custom, then a specific time period must be provided.
     */
    readonly timeframe: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the view by view name.
 */
export function getViewOutput(args: GetViewOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetViewResult> {
    return pulumi.output(args).apply((a: any) => getView(a, opts))
}

export interface GetViewOutputArgs {
    /**
     * View name
     */
    viewName: pulumi.Input<string>;
}
