import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
         * Email addresses to send the budget notification to when the threshold is exceeded.
         */
        contactEmails: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Action groups to send the budget notification to when the threshold is exceeded.
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
         * The comparison operator.
         */
        operator: pulumi.Input<string | enums.NotificationOperatorType>;
        /**
         * Threshold value associated with a notification. Notification is sent when the cost exceeded the threshold. It is always percent and has to be between 0 and 1000.
         */
        threshold: pulumi.Input<number>;
    }

    /**
     * The comparison expression to be used in the report.
     */
    export interface ReportConfigComparisonExpressionArgs {
        /**
         * The name of the column to use in comparison.
         */
        name: pulumi.Input<string>;
        /**
         * The operator to use for comparison.
         */
        operator: pulumi.Input<string | enums.OperatorType>;
        /**
         * Array of values to use for comparison
         */
        values: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The filter expression to be used in the report.
     */
    export interface ReportConfigFilterArgs {
        /**
         * The logical "AND" expression. Must have at least 2 items.
         */
        and?: pulumi.Input<pulumi.Input<ReportConfigFilterArgs>[]>;
        /**
         * Has comparison expression for a dimension
         */
        dimension?: pulumi.Input<ReportConfigComparisonExpressionArgs>;
        /**
         * The logical "NOT" expression.
         */
        not?: pulumi.Input<ReportConfigFilterArgs>;
        /**
         * The logical "OR" expression. Must have at least 2 items.
         */
        or?: pulumi.Input<pulumi.Input<ReportConfigFilterArgs>[]>;
        /**
         * Has comparison expression for a tag
         */
        tag?: pulumi.Input<ReportConfigComparisonExpressionArgs>;
    }
