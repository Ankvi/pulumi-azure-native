import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the budget for the scope by budget name.
 *
 * Uses Azure REST API version 2024-08-01.
 *
 * Other available API versions: 2023-05-01, 2023-11-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native consumption [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getBudget(args: GetBudgetArgs, opts?: pulumi.InvokeOptions): Promise<GetBudgetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:consumption:getBudget", {
        "budgetName": args.budgetName,
        "scope": args.scope,
    }, opts);
}

export interface GetBudgetArgs {
    /**
     * Budget Name.
     */
    budgetName: string;
    /**
     * The scope associated with budget operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope.
     */
    scope: string;
}

/**
 * A budget resource.
 */
export interface GetBudgetResult {
    /**
     * The total amount of cost to track with the budget
     */
    readonly amount: number;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The category of the budget, whether the budget tracks cost or usage.
     */
    readonly category: string;
    /**
     * The current amount of cost which is being tracked for a budget.
     */
    readonly currentSpend: types.outputs.CurrentSpendResponse;
    /**
     * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
     */
    readonly eTag?: string;
    /**
     * May be used to filter budgets by user-specified dimensions and/or tags.
     */
    readonly filter?: types.outputs.BudgetFilterResponse;
    /**
     * The forecasted cost which is being tracked for a budget.
     */
    readonly forecastSpend: types.outputs.ForecastSpendResponse;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Dictionary of notifications associated with the budget. Budget can have up to five notifications.
     */
    readonly notifications?: {[key: string]: types.outputs.NotificationResponse};
    /**
     * The time covered by a budget. Tracking of the amount will be reset based on the time grain. BillingMonth, BillingQuarter, and BillingAnnual are only supported by WD customers
     */
    readonly timeGrain: string;
    /**
     * Has start and end date of the budget. The start date must be first of the month and should be less than the end date. Budget start date must be on or after June 1, 2017. Future start date should not be more than twelve months. Past start date should  be selected within the timegrain period. There are no restrictions on the end date.
     */
    readonly timePeriod: types.outputs.BudgetTimePeriodResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets the budget for the scope by budget name.
 *
 * Uses Azure REST API version 2024-08-01.
 *
 * Other available API versions: 2023-05-01, 2023-11-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native consumption [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getBudgetOutput(args: GetBudgetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBudgetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:consumption:getBudget", {
        "budgetName": args.budgetName,
        "scope": args.scope,
    }, opts);
}

export interface GetBudgetOutputArgs {
    /**
     * Budget Name.
     */
    budgetName: pulumi.Input<string>;
    /**
     * The scope associated with budget operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope.
     */
    scope: pulumi.Input<string>;
}