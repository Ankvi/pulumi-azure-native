import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Details of any error encountered on last collection attempt
     */
    export interface ConnectorCollectionErrorInfoResponse {
        /**
         * Short error message
         */
        errorCode: string;
        /**
         * Detailed error message
         */
        errorMessage: string;
        /**
         * Time the error started occurring (Last time error occurred in lastRun)
         */
        errorStartTime: string;
    }

    /**
     * Collection and ingestion information
     */
    export interface ConnectorCollectionInfoResponse {
        /**
         * Error information of last collection
         */
        error?: ConnectorCollectionErrorInfoResponse;
        /**
         * Last time the data acquisition process completed (even if no new data was found)
         */
        lastRun: string;
        /**
         * Last time the external data was updated into Azure
         */
        lastUpdated: string;
        /**
         * Source timestamp of external data currently available in Azure (eg AWS last processed CUR file timestamp)
         */
        sourceLastUpdated: string;
    }

    /**
     * The aggregation expression to be used in the report.
     */
    export interface ReportAggregationResponse {
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
    export interface ReportComparisonExpressionResponse {
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
    export interface ReportDatasetConfigurationResponse {
        /**
         * Array of column names to be included in the report. Any valid report column name is allowed. If not provided, then report includes all columns.
         */
        columns?: string[];
    }

    /**
     * The definition of data present in the report.
     */
    export interface ReportDatasetResponse {
        /**
         * Dictionary of aggregation expression to use in the report. The key of each item in the dictionary is the alias for the aggregated column. Report can have up to 2 aggregation clauses.
         */
        aggregation?: {[key: string]: ReportAggregationResponse};
        /**
         * Has configuration information for the data in the report. The configuration will be ignored if aggregation and grouping are provided.
         */
        configuration?: ReportDatasetConfigurationResponse;
        /**
         * Has filter expression to use in the report.
         */
        filter?: ReportFilterResponse;
        /**
         * The granularity of rows in the report.
         */
        granularity?: string;
        /**
         * Array of group by expression to use in the report. Report can have up to 2 group by clauses.
         */
        grouping?: ReportGroupingResponse[];
    }

    /**
     * The definition of a report.
     */
    export interface ReportDefinitionResponse {
        /**
         * Has definition for data in this report.
         */
        dataset?: ReportDatasetResponse;
        /**
         * Has time period for pulling data for the report.
         */
        timePeriod?: ReportTimePeriodResponse;
        /**
         * The time frame for pulling data for the report. If custom, then a specific time period must be provided.
         */
        timeframe: string;
        /**
         * The type of the report.
         */
        type: string;
    }

    /**
     * The destination information for the delivery of the report.
     */
    export interface ReportDeliveryDestinationResponse {
        /**
         * The name of the container where reports will be uploaded.
         */
        container: string;
        /**
         * The resource id of the storage account where reports will be delivered.
         */
        resourceId: string;
        /**
         * The name of the directory where reports will be uploaded.
         */
        rootFolderPath?: string;
    }

    /**
     * The delivery information associated with a report.
     */
    export interface ReportDeliveryInfoResponse {
        /**
         * Has destination for the report being delivered.
         */
        destination: ReportDeliveryDestinationResponse;
    }

    /**
     * The filter expression to be used in the report.
     */
    export interface ReportFilterResponse {
        /**
         * The logical "AND" expression. Must have at least 2 items.
         */
        and?: ReportFilterResponse[];
        /**
         * Has comparison expression for a dimension
         */
        dimension?: ReportComparisonExpressionResponse;
        /**
         * The logical "NOT" expression.
         */
        not?: ReportFilterResponse;
        /**
         * The logical "OR" expression. Must have at least 2 items.
         */
        or?: ReportFilterResponse[];
        /**
         * Has comparison expression for a tag
         */
        tag?: ReportComparisonExpressionResponse;
    }

    /**
     * The group by expression to be used in the report.
     */
    export interface ReportGroupingResponse {
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
     * The start and end date for recurrence schedule.
     */
    export interface ReportRecurrencePeriodResponse {
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
     * The schedule associated with a report.
     */
    export interface ReportScheduleResponse {
        /**
         * The schedule recurrence.
         */
        recurrence: string;
        /**
         * Has start and end date of the recurrence. The start date must be in future. If present, the end date must be greater than start date.
         */
        recurrencePeriod?: ReportRecurrencePeriodResponse;
        /**
         * The status of the schedule. Whether active or not. If inactive, the report's scheduled execution is paused.
         */
        status?: string;
    }

    /**
     * The start and end date for pulling data for the report.
     */
    export interface ReportTimePeriodResponse {
        /**
         * The start date to pull data from.
         */
        from: string;
        /**
         * The end date to pull data to.
         */
        to: string;
    }
