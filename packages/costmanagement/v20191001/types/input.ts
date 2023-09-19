import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The destination information for the delivery of the export.
     */
    export interface ExportDeliveryDestinationArgs {
        /**
         * The name of the container where exports will be uploaded.
         */
        container: pulumi.Input<string>;
        /**
         * The resource id of the storage account where exports will be delivered.
         */
        resourceId: pulumi.Input<string>;
        /**
         * The name of the directory where exports will be uploaded.
         */
        rootFolderPath?: pulumi.Input<string>;
    }

    /**
     * The delivery information associated with a export.
     */
    export interface ExportDeliveryInfoArgs {
        /**
         * Has destination for the export being delivered.
         */
        destination: pulumi.Input<ExportDeliveryDestinationArgs>;
    }

    /**
     * The start and end date for recurrence schedule.
     */
    export interface ExportRecurrencePeriodArgs {
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
     * The schedule associated with a export.
     */
    export interface ExportScheduleArgs {
        /**
         * The schedule recurrence.
         */
        recurrence: pulumi.Input<string | enums.RecurrenceType>;
        /**
         * Has start and end date of the recurrence. The start date must be in future. If present, the end date must be greater than start date.
         */
        recurrencePeriod?: pulumi.Input<ExportRecurrencePeriodArgs>;
        /**
         * The status of the schedule. Whether active or not. If inactive, the export's scheduled execution is paused.
         */
        status?: pulumi.Input<string | enums.StatusType>;
    }

    /**
     * The aggregation expression to be used in the query.
     */
    export interface QueryAggregationArgs {
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
     * The comparison expression to be used in the query.
     */
    export interface QueryComparisonExpressionArgs {
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
     * The definition of data present in the query.
     */
    export interface QueryDatasetArgs {
        /**
         * Dictionary of aggregation expression to use in the query. The key of each item in the dictionary is the alias for the aggregated column. Query can have up to 2 aggregation clauses.
         */
        aggregation?: pulumi.Input<{[key: string]: pulumi.Input<QueryAggregationArgs>}>;
        /**
         * Has configuration information for the data in the export. The configuration will be ignored if aggregation and grouping are provided.
         */
        configuration?: pulumi.Input<QueryDatasetConfigurationArgs>;
        /**
         * The filter expression to use in the query. Please reference our Query API REST documentation for how to properly format the filter.
         */
        filter?: pulumi.Input<QueryFilterArgs>;
        /**
         * The granularity of rows in the query.
         */
        granularity?: pulumi.Input<string | enums.GranularityType>;
        /**
         * Array of group by expression to use in the query. Query can have up to 2 group by clauses.
         */
        grouping?: pulumi.Input<pulumi.Input<QueryGroupingArgs>[]>;
        /**
         * Array of sorting by columns in query.
         */
        sorting?: pulumi.Input<pulumi.Input<QuerySortingConfigurationArgs>[]>;
    }

    /**
     * The configuration of dataset in the query.
     */
    export interface QueryDatasetConfigurationArgs {
        /**
         * Array of column names to be included in the query. Any valid query column name is allowed. If not provided, then query includes all columns.
         */
        columns?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The definition of a query.
     */
    export interface QueryDefinitionArgs {
        /**
         * Has definition for data in this query.
         */
        dataset?: pulumi.Input<QueryDatasetArgs>;
        /**
         * Has time period for pulling data for the query.
         */
        timePeriod?: pulumi.Input<QueryTimePeriodArgs>;
        /**
         * The time frame for pulling data for the query. If custom, then a specific time period must be provided.
         */
        timeframe: pulumi.Input<string | enums.TimeframeType>;
        /**
         * The type of the query.
         */
        type: pulumi.Input<string | enums.ExportType>;
    }

    /**
     * The filter expression to be used in the export.
     */
    export interface QueryFilterArgs {
        /**
         * The logical "AND" expression. Must have at least 2 items.
         */
        and?: pulumi.Input<pulumi.Input<QueryFilterArgs>[]>;
        /**
         * Has comparison expression for a dimension
         */
        dimension?: pulumi.Input<QueryComparisonExpressionArgs>;
        /**
         * The logical "NOT" expression.
         */
        not?: pulumi.Input<QueryFilterArgs>;
        /**
         * The logical "OR" expression. Must have at least 2 items.
         */
        or?: pulumi.Input<pulumi.Input<QueryFilterArgs>[]>;
        /**
         * Has comparison expression for a tag
         */
        tag?: pulumi.Input<QueryComparisonExpressionArgs>;
    }

    /**
     * The group by expression to be used in the query.
     */
    export interface QueryGroupingArgs {
        /**
         * The name of the column to group.
         */
        name: pulumi.Input<string>;
        /**
         * Has type of the column to group.
         */
        type: pulumi.Input<string | enums.QueryColumnType>;
    }

    /**
     * The configuration for sorting in the query.
     */
    export interface QuerySortingConfigurationArgs {
        /**
         * The name of the column to use in sorting.
         */
        name?: pulumi.Input<string>;
        /**
         * The sorting direction
         */
        querySortingDirection?: pulumi.Input<string | enums.SortDirection>;
    }

    /**
     * The start and end date for pulling data for the query.
     */
    export interface QueryTimePeriodArgs {
        /**
         * The start date to pull data from.
         */
        from: pulumi.Input<string>;
        /**
         * The end date to pull data to.
         */
        to: pulumi.Input<string>;
    }
