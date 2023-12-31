import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The aggregation expression to be used in the report.
     */
    export interface ReportAggregationArgs {
        /**
         * The name of the aggregation function to use.
         */
        function: pulumi.Input<string | enums.FunctionType>;
        /**
         * The name of the column to aggregate.
         */
        name: pulumi.Input<string>;
    }

    /**
     * The comparison expression to be used in the report.
     */
    export interface ReportComparisonExpressionArgs {
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
     * The definition of data present in the report.
     */
    export interface ReportDatasetArgs {
        /**
         * Dictionary of aggregation expression to use in the report. The key of each item in the dictionary is the alias for the aggregated column. Report can have up to 2 aggregation clauses.
         */
        aggregation?: pulumi.Input<{[key: string]: pulumi.Input<ReportAggregationArgs>}>;
        /**
         * Has configuration information for the data in the report. The configuration will be ignored if aggregation and grouping are provided.
         */
        configuration?: pulumi.Input<ReportDatasetConfigurationArgs>;
        /**
         * Has filter expression to use in the report.
         */
        filter?: pulumi.Input<ReportFilterArgs>;
        /**
         * The granularity of rows in the report.
         */
        granularity?: pulumi.Input<string | enums.GranularityType>;
        /**
         * Array of group by expression to use in the report. Report can have up to 2 group by clauses.
         */
        grouping?: pulumi.Input<pulumi.Input<ReportGroupingArgs>[]>;
    }

    /**
     * The configuration of dataset in the report.
     */
    export interface ReportDatasetConfigurationArgs {
        /**
         * Array of column names to be included in the report. Any valid report column name is allowed. If not provided, then report includes all columns.
         */
        columns?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The definition of a report.
     */
    export interface ReportDefinitionArgs {
        /**
         * Has definition for data in this report.
         */
        dataset?: pulumi.Input<ReportDatasetArgs>;
        /**
         * Has time period for pulling data for the report.
         */
        timePeriod?: pulumi.Input<ReportTimePeriodArgs>;
        /**
         * The time frame for pulling data for the report. If custom, then a specific time period must be provided.
         */
        timeframe: pulumi.Input<string | enums.TimeframeType>;
        /**
         * The type of the report.
         */
        type: pulumi.Input<string | enums.ReportType>;
    }

    /**
     * The destination information for the delivery of the report.
     */
    export interface ReportDeliveryDestinationArgs {
        /**
         * The name of the container where reports will be uploaded.
         */
        container: pulumi.Input<string>;
        /**
         * The resource id of the storage account where reports will be delivered.
         */
        resourceId: pulumi.Input<string>;
        /**
         * The name of the directory where reports will be uploaded.
         */
        rootFolderPath?: pulumi.Input<string>;
    }

    /**
     * The delivery information associated with a report.
     */
    export interface ReportDeliveryInfoArgs {
        /**
         * Has destination for the report being delivered.
         */
        destination: pulumi.Input<ReportDeliveryDestinationArgs>;
    }

    /**
     * The filter expression to be used in the report.
     */
    export interface ReportFilterArgs {
        /**
         * The logical "AND" expression. Must have at least 2 items.
         */
        and?: pulumi.Input<pulumi.Input<ReportFilterArgs>[]>;
        /**
         * Has comparison expression for a dimension
         */
        dimension?: pulumi.Input<ReportComparisonExpressionArgs>;
        /**
         * The logical "NOT" expression.
         */
        not?: pulumi.Input<ReportFilterArgs>;
        /**
         * The logical "OR" expression. Must have at least 2 items.
         */
        or?: pulumi.Input<pulumi.Input<ReportFilterArgs>[]>;
        /**
         * Has comparison expression for a tag
         */
        tag?: pulumi.Input<ReportComparisonExpressionArgs>;
    }

    /**
     * The group by expression to be used in the report.
     */
    export interface ReportGroupingArgs {
        /**
         * The name of the column to group.
         */
        name: pulumi.Input<string>;
        /**
         * Has type of the column to group.
         */
        type: pulumi.Input<string | enums.ReportColumnType>;
    }

    /**
     * The start and end date for recurrence schedule.
     */
    export interface ReportRecurrencePeriodArgs {
        /**
         * The start date of recurrence.
         */
        from: pulumi.Input<string>;
        /**
         * The end date of recurrence.
         */
        to?: pulumi.Input<string>;
    }

    /**
     * The schedule associated with a report.
     */
    export interface ReportScheduleArgs {
        /**
         * The schedule recurrence.
         */
        recurrence: pulumi.Input<string | enums.RecurrenceType>;
        /**
         * Has start and end date of the recurrence. The start date must be in future. If present, the end date must be greater than start date.
         */
        recurrencePeriod?: pulumi.Input<ReportRecurrencePeriodArgs>;
        /**
         * The status of the schedule. Whether active or not. If inactive, the report's scheduled execution is paused.
         */
        status?: pulumi.Input<string | enums.StatusType>;
    }

    /**
     * The start and end date for pulling data for the report.
     */
    export interface ReportTimePeriodArgs {
        /**
         * The start date to pull data from.
         */
        from: pulumi.Input<string>;
        /**
         * The end date to pull data to.
         */
        to: pulumi.Input<string>;
    }
