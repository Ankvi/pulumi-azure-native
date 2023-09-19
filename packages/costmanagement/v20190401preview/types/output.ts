import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
     * The notification associated with a budget.
     */
    export interface NotificationResponse {
        /**
         * Email addresses to send the budget notification to when the threshold is exceeded.
         */
        contactEmails: string[];
        /**
         * Action groups to send the budget notification to when the threshold is exceeded.
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
         * The comparison operator.
         */
        operator: string;
        /**
         * Threshold value associated with a notification. Notification is sent when the cost exceeded the threshold. It is always percent and has to be between 0 and 1000.
         */
        threshold: number;
    }

    /**
     * The comparison expression to be used in the report.
     */
    export interface ReportConfigComparisonExpressionResponse {
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
     * The filter expression to be used in the report.
     */
    export interface ReportConfigFilterResponse {
        /**
         * The logical "AND" expression. Must have at least 2 items.
         */
        and?: ReportConfigFilterResponse[];
        /**
         * Has comparison expression for a dimension
         */
        dimension?: ReportConfigComparisonExpressionResponse;
        /**
         * The logical "NOT" expression.
         */
        not?: ReportConfigFilterResponse;
        /**
         * The logical "OR" expression. Must have at least 2 items.
         */
        or?: ReportConfigFilterResponse[];
        /**
         * Has comparison expression for a tag
         */
        tag?: ReportConfigComparisonExpressionResponse;
    }
