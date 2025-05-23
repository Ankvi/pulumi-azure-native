import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the view by view name.
 *
 * Uses Azure REST API version 2024-08-01.
 *
 * Other available API versions: 2019-04-01-preview, 2019-11-01, 2020-06-01, 2021-10-01, 2022-08-01-preview, 2022-10-01, 2022-10-01-preview, 2022-10-05-preview, 2023-03-01, 2023-04-01-preview, 2023-07-01-preview, 2023-08-01, 2023-09-01, 2023-11-01, 2024-10-01-preview, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native costmanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getView(args: GetViewArgs, opts?: pulumi.InvokeOptions): Promise<GetViewResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:costmanagement:getView", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
     * Resource Id.
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
     * Resource name.
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
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets the view by view name.
 *
 * Uses Azure REST API version 2024-08-01.
 *
 * Other available API versions: 2019-04-01-preview, 2019-11-01, 2020-06-01, 2021-10-01, 2022-08-01-preview, 2022-10-01, 2022-10-01-preview, 2022-10-05-preview, 2023-03-01, 2023-04-01-preview, 2023-07-01-preview, 2023-08-01, 2023-09-01, 2023-11-01, 2024-10-01-preview, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native costmanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getViewOutput(args: GetViewOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetViewResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:costmanagement:getView", {
        "viewName": args.viewName,
    }, opts);
}

export interface GetViewOutputArgs {
    /**
     * View name
     */
    viewName: pulumi.Input<string>;
}