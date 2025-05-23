import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The comparison expression to be used in the budgets.
 */
export interface BudgetComparisonExpressionResponse {
    /**
     * The name of the column to use in comparison.
     */
    name: string;
    /**
     * The operator to use for comparison.
     */
    operator: string;
    /**
     * Array of values to use for comparison
     */
    values: string[];
}

/**
 * The Dimensions or Tags to filter a budget by.
 */
export interface BudgetFilterPropertiesResponse {
    /**
     * Has comparison expression for a dimension
     */
    dimensions?: BudgetComparisonExpressionResponse;
    /**
     * Has comparison expression for a tag
     */
    tags?: BudgetComparisonExpressionResponse;
}

/**
 * May be used to filter budgets by resource group, resource, or meter.
 */
export interface BudgetFilterResponse {
    /**
     * The logical "AND" expression. Must have at least 2 items.
     */
    and?: BudgetFilterPropertiesResponse[];
    /**
     * Has comparison expression for a dimension
     */
    dimensions?: BudgetComparisonExpressionResponse;
    /**
     * Has comparison expression for a tag
     */
    tags?: BudgetComparisonExpressionResponse;
}

/**
 * The start and end date for a budget.
 */
export interface BudgetTimePeriodResponse {
    /**
     * The end date for the budget. If not provided, we default this to 10 years from the start date.
     */
    endDate?: string;
    /**
     * The start date for the budget.
     */
    startDate: string;
}

/**
 * The current amount of cost which is being tracked for a budget.
 */
export interface CurrentSpendResponse {
    /**
     * The total amount of cost which is being tracked by the budget.
     */
    amount: number;
    /**
     * The unit of measure for the budget amount.
     */
    unit: string;
}

/**
 * The forecasted cost which is being tracked for a budget.
 */
export interface ForecastSpendResponse {
    /**
     * The forecasted cost for the total time period which is being tracked by the budget. This value is only provided if the budget contains a forecast alert type.
     */
    amount: number;
    /**
     * The unit of measure for the budget amount.
     */
    unit: string;
}

/**
 * The notification associated with a budget.
 */
export interface NotificationResponse {
    /**
     * Email addresses to send the budget notification to when the threshold is exceeded. Must have at least one contact email or contact group specified at the Subscription or Resource Group scopes. All other scopes must have at least one contact email specified.
     */
    contactEmails: string[];
    /**
     * Action groups to send the budget notification to when the threshold is exceeded. Must be provided as a fully qualified Azure resource id. Only supported at Subscription or Resource Group scopes.
     */
    contactGroups?: string[];
    /**
     * Contact roles to send the budget notification to when the threshold is exceeded.
     */
    contactRoles?: string[];
    /**
     * The notification is enabled or not.
     */
    enabled: boolean;
    /**
     * Language in which the recipient will receive the notification
     */
    locale?: string;
    /**
     * The comparison operator.
     */
    operator: string;
    /**
     * Threshold value associated with a notification. Notification is sent when the cost exceeded the threshold. It is always percent and has to be between 0 and 1000.
     */
    threshold: number;
    /**
     * The type of threshold
     */
    thresholdType?: string;
}
/**
 * notificationResponseProvideDefaults sets the appropriate defaults for NotificationResponse
 */
export function notificationResponseProvideDefaults(val: NotificationResponse): NotificationResponse {
    return {
        ...val,
        thresholdType: (val.thresholdType) ?? "Actual",
    };
}
