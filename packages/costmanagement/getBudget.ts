import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the budget for the scope by budget name.
 *
 * Uses Azure REST API version 2024-08-01.
 *
 * Other available API versions: 2019-04-01-preview, 2023-04-01-preview, 2023-08-01, 2023-09-01, 2023-11-01, 2024-10-01-preview, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native costmanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getBudget(args: GetBudgetArgs, opts?: pulumi.InvokeOptions): Promise<GetBudgetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:costmanagement:getBudget", {
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
     * The scope associated with budget operations.
     *
     *  Supported scopes for **CategoryType: Cost**
     *
     *  Azure RBAC Scopes:
     * - '/subscriptions/{subscriptionId}/' for subscription scope
     * - '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope
     * - '/providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope
     *
     *  EA (Enterprise Agreement) Scopes:
     *
     * - '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope
     * - '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope
     * - '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope
     *
     *  MCA (Modern Customer Agreement) Scopes:
     * - '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope
     * - '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope
     * - '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope
     * - '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}' for customer scope (CSP only)
     *
     *  Supported scopes for **CategoryType: ReservationUtilization**
     *
     *  EA (Enterprise Agreement) Scopes:
     * - '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account Scope
     *
     * MCA (Modern Customer Agreement) Scopes:
     * - '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope (non-CSP only)
     * - '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}' for customer scope (CSP only)
     */
    scope: string;
}

/**
 * A budget resource.
 */
export interface GetBudgetResult {
    /**
     * The total amount of cost to track with the budget.
     *
     *  Supported for CategoryType(s): Cost.
     *
     *  Required for CategoryType(s): Cost.
     */
    readonly amount?: number;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The category of the budget.
     * - 'Cost' defines a Budget.
     * - 'ReservationUtilization' defines a Reservation Utilization Alert Rule.
     */
    readonly category: string;
    /**
     * The current amount of cost which is being tracked for a budget.
     *
     *  Supported for CategoryType(s): Cost.
     */
    readonly currentSpend: types.outputs.CurrentSpendResponse;
    /**
     * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
     */
    readonly eTag?: string;
    /**
     * May be used to filter budgets by user-specified dimensions and/or tags.
     *
     *  Supported for CategoryType(s): Cost, ReservationUtilization.
     */
    readonly filter?: types.outputs.BudgetFilterResponse;
    /**
     * The forecasted cost which is being tracked for a budget.
     *
     *  Supported for CategoryType(s): Cost.
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
     * Dictionary of notifications associated with the budget.
     *
     *  Supported for CategoryType(s): Cost, ReservationUtilization.
     *
     * - Constraints for **CategoryType: Cost** - Budget can have up to 5 notifications with thresholdType: Actual and 5 notifications with thresholdType: Forecasted.
     * - Constraints for **CategoryType: ReservationUtilization** - Only one notification allowed. thresholdType is not applicable.
     */
    readonly notifications?: {[key: string]: types.outputs.NotificationResponse};
    /**
     * The time covered by a budget. Tracking of the amount will be reset based on the time grain.
     *
     * Supported for CategoryType(s): Cost, ReservationUtilization.
     *
     *  Supported timeGrainTypes for **CategoryType: Cost**
     *
     * - Monthly
     * - Quarterly
     * - Annually
     * - BillingMonth*
     * - BillingQuarter*
     * - BillingAnnual*
     *
     *   *only supported for Web Direct customers.
     *
     *  Supported timeGrainTypes for **CategoryType: ReservationUtilization**
     * - Last7Days
     * - Last30Days
     *
     *  Required for CategoryType(s): Cost, ReservationUtilization.
     */
    readonly timeGrain: string;
    /**
     * The time period that defines the active period of the budget. The budget will evaluate data on or after the startDate and will expire on the endDate.
     *
     *  Supported for CategoryType(s): Cost, ReservationUtilization.
     *
     *  Required for CategoryType(s): Cost, ReservationUtilization.
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
 * Other available API versions: 2019-04-01-preview, 2023-04-01-preview, 2023-08-01, 2023-09-01, 2023-11-01, 2024-10-01-preview, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native costmanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getBudgetOutput(args: GetBudgetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBudgetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:costmanagement:getBudget", {
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
     * The scope associated with budget operations.
     *
     *  Supported scopes for **CategoryType: Cost**
     *
     *  Azure RBAC Scopes:
     * - '/subscriptions/{subscriptionId}/' for subscription scope
     * - '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope
     * - '/providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope
     *
     *  EA (Enterprise Agreement) Scopes:
     *
     * - '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope
     * - '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope
     * - '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope
     *
     *  MCA (Modern Customer Agreement) Scopes:
     * - '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope
     * - '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope
     * - '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope
     * - '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}' for customer scope (CSP only)
     *
     *  Supported scopes for **CategoryType: ReservationUtilization**
     *
     *  EA (Enterprise Agreement) Scopes:
     * - '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account Scope
     *
     * MCA (Modern Customer Agreement) Scopes:
     * - '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope (non-CSP only)
     * - '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}' for customer scope (CSP only)
     */
    scope: pulumi.Input<string>;
}