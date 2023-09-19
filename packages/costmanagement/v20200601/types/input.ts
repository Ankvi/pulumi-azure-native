import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Each KPI must contain a 'type' and 'enabled' key.
     */
    export interface KpiPropertiesArgs {
        /**
         * show the KPI in the UI?
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * ID of resource related to metric (budget).
         */
        id?: pulumi.Input<string>;
        /**
         * KPI type (Forecast, Budget).
         */
        type?: pulumi.Input<string | enums.KpiTypeType>;
    }

    /**
     * Each pivot must contain a 'type' and 'name'.
     */
    export interface PivotPropertiesArgs {
        /**
         * Data field to show in view.
         */
        name?: pulumi.Input<string>;
        /**
         * Data type to show in view.
         */
        type?: pulumi.Input<string | enums.PivotTypeType>;
    }

    /**
     * The aggregation expression to be used in the report.
     */
    export interface ReportConfigAggregationArgs {
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
     * The definition of data present in the report.
     */
    export interface ReportConfigDatasetArgs {
        /**
         * Dictionary of aggregation expression to use in the report. The key of each item in the dictionary is the alias for the aggregated column. Report can have up to 2 aggregation clauses.
         */
        aggregation?: pulumi.Input<{[key: string]: pulumi.Input<ReportConfigAggregationArgs>}>;
        /**
         * Has configuration information for the data in the report. The configuration will be ignored if aggregation and grouping are provided.
         */
        configuration?: pulumi.Input<ReportConfigDatasetConfigurationArgs>;
        /**
         * Has filter expression to use in the report.
         */
        filter?: pulumi.Input<ReportConfigFilterArgs>;
        /**
         * The granularity of rows in the report.
         */
        granularity?: pulumi.Input<string | enums.ReportGranularityType>;
        /**
         * Array of group by expression to use in the report. Report can have up to 2 group by clauses.
         */
        grouping?: pulumi.Input<pulumi.Input<ReportConfigGroupingArgs>[]>;
        /**
         * Array of order by expression to use in the report.
         */
        sorting?: pulumi.Input<pulumi.Input<ReportConfigSortingArgs>[]>;
    }

    /**
     * The configuration of dataset in the report.
     */
    export interface ReportConfigDatasetConfigurationArgs {
        /**
         * Array of column names to be included in the report. Any valid report column name is allowed. If not provided, then report includes all columns.
         */
        columns?: pulumi.Input<pulumi.Input<string>[]>;
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

    /**
     * The group by expression to be used in the report.
     */
    export interface ReportConfigGroupingArgs {
        /**
         * The name of the column to group. This version supports subscription lowest possible grain.
         */
        name: pulumi.Input<string>;
        /**
         * Has type of the column to group.
         */
        type: pulumi.Input<string | enums.ReportConfigColumnType>;
    }

    /**
     * The order by expression to be used in the report.
     */
    export interface ReportConfigSortingArgs {
        /**
         * Direction of sort.
         */
        direction?: pulumi.Input<string>;
        /**
         * The name of the column to sort.
         */
        name: pulumi.Input<string>;
    }

    /**
     * The start and end date for pulling data for the report.
     */
    export interface ReportConfigTimePeriodArgs {
        /**
         * The start date to pull data from.
         */
        from: pulumi.Input<string>;
        /**
         * The end date to pull data to.
         */
        to: pulumi.Input<string>;
    }
