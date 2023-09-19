import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Each KPI must contain a 'type' and 'enabled' key.
     */
    export interface KpiPropertiesResponse {
        /**
         * show the KPI in the UI?
         */
        enabled?: boolean;
        /**
         * ID of resource related to metric (budget).
         */
        id?: string;
        /**
         * KPI type (Forecast, Budget).
         */
        type?: string;
    }

    /**
     * Each pivot must contain a 'type' and 'name'.
     */
    export interface PivotPropertiesResponse {
        /**
         * Data field to show in view.
         */
        name?: string;
        /**
         * Data type to show in view.
         */
        type?: string;
    }

    /**
     * The aggregation expression to be used in the report.
     */
    export interface ReportConfigAggregationResponse {
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
     * The configuration of dataset in the report.
     */
    export interface ReportConfigDatasetConfigurationResponse {
        /**
         * Array of column names to be included in the report. Any valid report column name is allowed. If not provided, then report includes all columns.
         */
        columns?: string[];
    }

    /**
     * The definition of data present in the report.
     */
    export interface ReportConfigDatasetResponse {
        /**
         * Dictionary of aggregation expression to use in the report. The key of each item in the dictionary is the alias for the aggregated column. Report can have up to 2 aggregation clauses.
         */
        aggregation?: {[key: string]: ReportConfigAggregationResponse};
        /**
         * Has configuration information for the data in the report. The configuration will be ignored if aggregation and grouping are provided.
         */
        configuration?: ReportConfigDatasetConfigurationResponse;
        /**
         * Has filter expression to use in the report.
         */
        filter?: ReportConfigFilterResponse;
        /**
         * The granularity of rows in the report.
         */
        granularity?: string;
        /**
         * Array of group by expression to use in the report. Report can have up to 2 group by clauses.
         */
        grouping?: ReportConfigGroupingResponse[];
        /**
         * Array of order by expression to use in the report.
         */
        sorting?: ReportConfigSortingResponse[];
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

    /**
     * The group by expression to be used in the report.
     */
    export interface ReportConfigGroupingResponse {
        /**
         * The name of the column to group. This version supports subscription lowest possible grain.
         */
        name: string;
        /**
         * Has type of the column to group.
         */
        type: string;
    }

    /**
     * The order by expression to be used in the report.
     */
    export interface ReportConfigSortingResponse {
        /**
         * Direction of sort.
         */
        direction?: string;
        /**
         * The name of the column to sort.
         */
        name: string;
    }

    /**
     * The start and end date for pulling data for the report.
     */
    export interface ReportConfigTimePeriodResponse {
        /**
         * The start date to pull data from.
         */
        from: string;
        /**
         * The end date to pull data to.
         */
        to: string;
    }
