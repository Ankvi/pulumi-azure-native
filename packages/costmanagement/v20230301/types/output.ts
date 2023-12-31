import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The common properties of the export.
     */
    export interface CommonExportPropertiesResponse {
        /**
         * Has the definition for the export.
         */
        definition: ExportDefinitionResponse;
        /**
         * Has delivery information for the export.
         */
        deliveryInfo: ExportDeliveryInfoResponse;
        /**
         * The format of the export being delivered. Currently only 'Csv' is supported.
         */
        format?: string;
        /**
         * If the export has an active schedule, provides an estimate of the next run time.
         */
        nextRunTimeEstimate: string;
        /**
         * If set to true, exported data will be partitioned by size and placed in a blob directory together with a manifest file. Note: this option is currently available only for Microsoft Customer Agreement commerce scopes.
         */
        partitionData?: boolean;
        /**
         * If requested, has the most recent run history for the export.
         */
        runHistory?: ExportExecutionListResultResponse;
    }

    /**
     * The details of the error.
     */
    export interface ErrorDetailsResponse {
        /**
         * Error code.
         */
        code: string;
        /**
         * Error message indicating why the operation failed.
         */
        message: string;
    }

    /**
     * The export dataset configuration. Allows columns to be selected for the export. If not provided then the export will include all available columns.
     */
    export interface ExportDatasetConfigurationResponse {
        /**
         * Array of column names to be included in the export. If not provided then the export will include all available columns. The available columns can vary by customer channel (see examples).
         */
        columns?: string[];
    }

    /**
     * The definition for data in the export.
     */
    export interface ExportDatasetResponse {
        /**
         * The export dataset configuration.
         */
        configuration?: ExportDatasetConfigurationResponse;
        /**
         * The granularity of rows in the export. Currently only 'Daily' is supported.
         */
        granularity?: string;
    }

    /**
     * The definition of an export.
     */
    export interface ExportDefinitionResponse {
        /**
         * The definition for data in the export.
         */
        dataSet?: ExportDatasetResponse;
        /**
         * Has time period for pulling data for the export.
         */
        timePeriod?: ExportTimePeriodResponse;
        /**
         * The time frame for pulling data for the export. If custom, then a specific time period must be provided.
         */
        timeframe: string;
        /**
         * The type of the export. Note that 'Usage' is equivalent to 'ActualCost' and is applicable to exports that do not yet provide data for charges or amortization for service reservations.
         */
        type: string;
    }

    /**
     * This represents the blob storage account location where exports of costs will be delivered. There are two ways to configure the destination. The approach recommended for most customers is to specify the resourceId of the storage account. This requires a one-time registration of the account's subscription with the Microsoft.CostManagementExports resource provider in order to give Cost Management services access to the storage. When creating an export in the Azure portal this registration is performed automatically but API users may need to register the subscription explicitly (for more information see https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-supported-services ). Another way to configure the destination is available ONLY to Partners with a Microsoft Partner Agreement plan who are global admins of their billing account. These Partners, instead of specifying the resourceId of a storage account, can specify the storage account name along with a SAS token for the account. This allows exports of costs to a storage account in any tenant. The SAS token should be created for the blob service with Service/Container/Object resource types and with Read/Write/Delete/List/Add/Create permissions (for more information see https://docs.microsoft.com/en-us/azure/cost-management-billing/costs/export-cost-data-storage-account-sas-key ).
     */
    export interface ExportDeliveryDestinationResponse {
        /**
         * The name of the container where exports will be uploaded. If the container does not exist it will be created.
         */
        container: string;
        /**
         * The resource id of the storage account where exports will be delivered. This is not required if a sasToken and storageAccount are specified.
         */
        resourceId?: string;
        /**
         * The name of the directory where exports will be uploaded.
         */
        rootFolderPath?: string;
        /**
         * A SAS token for the storage account. For a restricted set of Azure customers this together with storageAccount can be specified instead of resourceId. Note: the value returned by the API for this property will always be obfuscated. Returning this same obfuscated value will not result in the SAS token being updated. To update this value a new SAS token must be specified.
         */
        sasToken?: string;
        /**
         * The storage account where exports will be uploaded. For a restricted set of Azure customers this together with sasToken can be specified instead of resourceId.
         */
        storageAccount?: string;
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
     * Result of listing the run history of an export.
     */
    export interface ExportExecutionListResultResponse {
        /**
         * A list of export runs.
         */
        value: ExportRunResponse[];
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
     * An export run.
     */
    export interface ExportRunResponse {
        /**
         * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
         */
        eTag?: string;
        /**
         * The details of any error.
         */
        error?: ErrorDetailsResponse;
        /**
         * The type of the export run.
         */
        executionType?: string;
        /**
         * The name of the exported file.
         */
        fileName?: string;
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * The time when the export run finished.
         */
        processingEndTime?: string;
        /**
         * The time when export was picked up to be run.
         */
        processingStartTime?: string;
        /**
         * The export settings that were in effect for this run.
         */
        runSettings?: CommonExportPropertiesResponse;
        /**
         * The last known status of the export run.
         */
        status?: string;
        /**
         * The identifier for the entity that triggered the export. For on-demand runs it is the user email. For scheduled runs it is 'System'.
         */
        submittedBy?: string;
        /**
         * The time when export was queued to be run.
         */
        submittedTime?: string;
        /**
         * Resource type.
         */
        type: string;
    }

    /**
     * The schedule associated with the export.
     */
    export interface ExportScheduleResponse {
        /**
         * The schedule recurrence.
         */
        recurrence?: string;
        /**
         * Has start and end date of the recurrence. The start date must be in future. If present, the end date must be greater than start date.
         */
        recurrencePeriod?: ExportRecurrencePeriodResponse;
        /**
         * The status of the export's schedule. If 'Inactive', the export's schedule is paused.
         */
        status?: string;
    }

    /**
     * The date range for data in the export. This should only be specified with timeFrame set to 'Custom'. The maximum date range is 3 months.
     */
    export interface ExportTimePeriodResponse {
        /**
         * The start date for export data.
         */
        from: string;
        /**
         * The end date for export data.
         */
        to: string;
    }

    /**
     * Destination of the view data. This is optional. Currently only CSV format is supported.
     */
    export interface FileDestinationResponse {
        /**
         * Destination of the view data. Currently only CSV format is supported.
         */
        fileFormats?: string[];
    }

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
     * The properties of the scheduled action notification.
     */
    export interface NotificationPropertiesResponse {
        /**
         * Locale of the email.
         */
        language?: string;
        /**
         * Optional message to be added in the email. Length is limited to 250 characters.
         */
        message?: string;
        /**
         * Regional format used for formatting date/time and currency values in the email.
         */
        regionalFormat?: string;
        /**
         * Subject of the email. Length is limited to 70 characters.
         */
        subject: string;
        /**
         * Array of email addresses.
         */
        to: string[];
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
        dimensions?: ReportConfigComparisonExpressionResponse;
        /**
         * The logical "OR" expression. Must have at least 2 items.
         */
        or?: ReportConfigFilterResponse[];
        /**
         * Has comparison expression for a tag
         */
        tags?: ReportConfigComparisonExpressionResponse;
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

    /**
     * The properties of the schedule.
     */
    export interface SchedulePropertiesResponse {
        /**
         * UTC day on which cost analysis data will be emailed. Must be between 1 and 31. This property is applicable when frequency is Monthly and overrides weeksOfMonth or daysOfWeek.
         */
        dayOfMonth?: number;
        /**
         * Day names in english on which cost analysis data will be emailed. This property is applicable when frequency is Weekly or Monthly.
         */
        daysOfWeek?: string[];
        /**
         * The end date and time of the scheduled action (UTC).
         */
        endDate: string;
        /**
         * Frequency of the schedule.
         */
        frequency: string;
        /**
         * UTC time at which cost analysis data will be emailed.
         */
        hourOfDay?: number;
        /**
         * The start date and time of the scheduled action (UTC).
         */
        startDate: string;
        /**
         * Weeks in which cost analysis data will be emailed. This property is applicable when frequency is Monthly and used in combination with daysOfWeek.
         */
        weeksOfMonth?: string[];
    }

    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    export interface SystemDataResponse {
        /**
         * The timestamp of resource creation (UTC).
         */
        createdAt?: string;
        /**
         * The identity that created the resource.
         */
        createdBy?: string;
        /**
         * The type of identity that created the resource.
         */
        createdByType?: string;
        /**
         * The timestamp of resource last modification (UTC)
         */
        lastModifiedAt?: string;
        /**
         * The identity that last modified the resource.
         */
        lastModifiedBy?: string;
        /**
         * The type of identity that last modified the resource.
         */
        lastModifiedByType?: string;
    }
