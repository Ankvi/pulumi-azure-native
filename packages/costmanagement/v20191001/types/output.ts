import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The destination information for the delivery of the export.
     */
    export interface ExportDeliveryDestinationResponse {
        /**
         * The name of the container where exports will be uploaded.
         */
        container: string;
        /**
         * The resource id of the storage account where exports will be delivered.
         */
        resourceId: string;
        /**
         * The name of the directory where exports will be uploaded.
         */
        rootFolderPath?: string;
    }

    /**
     * The delivery information associated with a export.
     */
    export interface ExportDeliveryInfoResponse {
        /**
         * Has destination for the export being delivered.
         */
        destination: ExportDeliveryDestinationResponse;
    }

    /**
     * The start and end date for recurrence schedule.
     */
    export interface ExportRecurrencePeriodResponse {
        /**
         * The start date of recurrence.
         */
        from: string;
        /**
         * The end date of recurrence.
         */
        to?: string;
    }

    /**
     * The schedule associated with a export.
     */
    export interface ExportScheduleResponse {
        /**
         * The schedule recurrence.
         */
        recurrence: string;
        /**
         * Has start and end date of the recurrence. The start date must be in future. If present, the end date must be greater than start date.
         */
        recurrencePeriod?: ExportRecurrencePeriodResponse;
        /**
         * The status of the schedule. Whether active or not. If inactive, the export's scheduled execution is paused.
         */
        status?: string;
    }

    /**
     * The aggregation expression to be used in the query.
     */
    export interface QueryAggregationResponse {
        /**
         * The name of the aggregation function to use.
         */
        function: string;
        /**
         * The name of the column to aggregate.
         */
        name: string;
    }

    /**
     * The comparison expression to be used in the query.
     */
    export interface QueryComparisonExpressionResponse {
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
     * The configuration of dataset in the query.
     */
    export interface QueryDatasetConfigurationResponse {
        /**
         * Array of column names to be included in the query. Any valid query column name is allowed. If not provided, then query includes all columns.
         */
        columns?: string[];
    }

    /**
     * The definition of data present in the query.
     */
    export interface QueryDatasetResponse {
        /**
         * Dictionary of aggregation expression to use in the query. The key of each item in the dictionary is the alias for the aggregated column. Query can have up to 2 aggregation clauses.
         */
        aggregation?: {[key: string]: QueryAggregationResponse};
        /**
         * Has configuration information for the data in the export. The configuration will be ignored if aggregation and grouping are provided.
         */
        configuration?: QueryDatasetConfigurationResponse;
        /**
         * The filter expression to use in the query. Please reference our Query API REST documentation for how to properly format the filter.
         */
        filter?: QueryFilterResponse;
        /**
         * The granularity of rows in the query.
         */
        granularity?: string;
        /**
         * Array of group by expression to use in the query. Query can have up to 2 group by clauses.
         */
        grouping?: QueryGroupingResponse[];
        /**
         * Array of sorting by columns in query.
         */
        sorting?: QuerySortingConfigurationResponse[];
    }

    /**
     * The definition of a query.
     */
    export interface QueryDefinitionResponse {
        /**
         * Has definition for data in this query.
         */
        dataset?: QueryDatasetResponse;
        /**
         * Has time period for pulling data for the query.
         */
        timePeriod?: QueryTimePeriodResponse;
        /**
         * The time frame for pulling data for the query. If custom, then a specific time period must be provided.
         */
        timeframe: string;
        /**
         * The type of the query.
         */
        type: string;
    }

    /**
     * The filter expression to be used in the export.
     */
    export interface QueryFilterResponse {
        /**
         * The logical "AND" expression. Must have at least 2 items.
         */
        and?: QueryFilterResponse[];
        /**
         * Has comparison expression for a dimension
         */
        dimension?: QueryComparisonExpressionResponse;
        /**
         * The logical "NOT" expression.
         */
        not?: QueryFilterResponse;
        /**
         * The logical "OR" expression. Must have at least 2 items.
         */
        or?: QueryFilterResponse[];
        /**
         * Has comparison expression for a tag
         */
        tag?: QueryComparisonExpressionResponse;
    }

    /**
     * The group by expression to be used in the query.
     */
    export interface QueryGroupingResponse {
        /**
         * The name of the column to group.
         */
        name: string;
        /**
         * Has type of the column to group.
         */
        type: string;
    }

    /**
     * The configuration for sorting in the query.
     */
    export interface QuerySortingConfigurationResponse {
        /**
         * The name of the column to use in sorting.
         */
        name?: string;
        /**
         * The sorting direction
         */
        querySortingDirection?: string;
    }

    /**
     * The start and end date for pulling data for the query.
     */
    export interface QueryTimePeriodResponse {
        /**
         * The start date to pull data from.
         */
        from: string;
        /**
         * The end date to pull data to.
         */
        to: string;
    }
