import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The comparison expression to be used in the budgets.
 */
export interface BudgetComparisonExpressionArgs {
    /**
     * The name of the column to use in comparison.
     */
    name: pulumi.Input<string>;
    /**
     * The operator to use for comparison.
     */
    operator: pulumi.Input<string | enums.BudgetOperatorType>;
    /**
     * Array of values to use for comparison
     */
    values: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * May be used to filter budgets by resource group, resource, or meter.
 */
export interface BudgetFilterArgs {
    /**
     * The logical "AND" expression. Must have at least 2 items.
     */
    and?: pulumi.Input<pulumi.Input<BudgetFilterPropertiesArgs>[]>;
    /**
     * Has comparison expression for a dimension
     */
    dimensions?: pulumi.Input<BudgetComparisonExpressionArgs>;
    /**
     * Has comparison expression for a tag
     */
    tags?: pulumi.Input<BudgetComparisonExpressionArgs>;
}

/**
 * The Dimensions or Tags to filter a budget by.
 */
export interface BudgetFilterPropertiesArgs {
    /**
     * Has comparison expression for a dimension
     */
    dimensions?: pulumi.Input<BudgetComparisonExpressionArgs>;
    /**
     * Has comparison expression for a tag
     */
    tags?: pulumi.Input<BudgetComparisonExpressionArgs>;
}

/**
 * The start and end date for a budget.
 */
export interface BudgetTimePeriodArgs {
    /**
     * The end date for the budget. If not provided, we default this to 10 years from the start date.
     */
    endDate?: pulumi.Input<string>;
    /**
     * The start date for the budget.
     */
    startDate: pulumi.Input<string>;
}

/**
 * The notification associated with a budget.
 */
export interface NotificationArgs {
    /**
     * Email addresses to send the budget notification to when the threshold is exceeded. Must have at least one contact email or contact group specified at the Subscription or Resource Group scopes. All other scopes must have at least one contact email specified.
     */
    contactEmails: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Action groups to send the budget notification to when the threshold is exceeded. Must be provided as a fully qualified Azure resource id. Only supported at Subscription or Resource Group scopes.
     */
    contactGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Contact roles to send the budget notification to when the threshold is exceeded.
     */
    contactRoles?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The notification is enabled or not.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * Language in which the recipient will receive the notification
     */
    locale?: pulumi.Input<string | enums.CultureCode>;
    /**
     * The comparison operator.
     */
    operator: pulumi.Input<string | enums.OperatorType>;
    /**
     * Threshold value associated with a notification. Notification is sent when the cost exceeded the threshold. It is always percent and has to be between 0 and 1000.
     */
    threshold: pulumi.Input<number>;
    /**
     * The type of threshold
     */
    thresholdType?: pulumi.Input<string | enums.ThresholdType>;
}
/**
 * notificationArgsProvideDefaults sets the appropriate defaults for NotificationArgs
 */
export function notificationArgsProvideDefaults(val: NotificationArgs): NotificationArgs {
    return {
        ...val,
        thresholdType: (val.thresholdType) ?? "Actual",
    };
}

