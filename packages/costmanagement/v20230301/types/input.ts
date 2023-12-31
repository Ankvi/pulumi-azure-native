import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The definition for data in the export.
     */
    export interface ExportDatasetArgs {
        /**
         * The export dataset configuration.
         */
        configuration?: pulumi.Input<ExportDatasetConfigurationArgs>;
        /**
         * The granularity of rows in the export. Currently only 'Daily' is supported.
         */
        granularity?: pulumi.Input<string | enums.GranularityType>;
    }

    /**
     * The export dataset configuration. Allows columns to be selected for the export. If not provided then the export will include all available columns.
     */
    export interface ExportDatasetConfigurationArgs {
        /**
         * Array of column names to be included in the export. If not provided then the export will include all available columns. The available columns can vary by customer channel (see examples).
         */
        columns?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The definition of an export.
     */
    export interface ExportDefinitionArgs {
        /**
         * The definition for data in the export.
         */
        dataSet?: pulumi.Input<ExportDatasetArgs>;
        /**
         * Has time period for pulling data for the export.
         */
        timePeriod?: pulumi.Input<ExportTimePeriodArgs>;
        /**
         * The time frame for pulling data for the export. If custom, then a specific time period must be provided.
         */
        timeframe: pulumi.Input<string | enums.TimeframeType>;
        /**
         * The type of the export. Note that 'Usage' is equivalent to 'ActualCost' and is applicable to exports that do not yet provide data for charges or amortization for service reservations.
         */
        type: pulumi.Input<string | enums.ExportType>;
    }

    /**
     * This represents the blob storage account location where exports of costs will be delivered. There are two ways to configure the destination. The approach recommended for most customers is to specify the resourceId of the storage account. This requires a one-time registration of the account's subscription with the Microsoft.CostManagementExports resource provider in order to give Cost Management services access to the storage. When creating an export in the Azure portal this registration is performed automatically but API users may need to register the subscription explicitly (for more information see https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-supported-services ). Another way to configure the destination is available ONLY to Partners with a Microsoft Partner Agreement plan who are global admins of their billing account. These Partners, instead of specifying the resourceId of a storage account, can specify the storage account name along with a SAS token for the account. This allows exports of costs to a storage account in any tenant. The SAS token should be created for the blob service with Service/Container/Object resource types and with Read/Write/Delete/List/Add/Create permissions (for more information see https://docs.microsoft.com/en-us/azure/cost-management-billing/costs/export-cost-data-storage-account-sas-key ).
     */
    export interface ExportDeliveryDestinationArgs {
        /**
         * The name of the container where exports will be uploaded. If the container does not exist it will be created.
         */
        container: pulumi.Input<string>;
        /**
         * The resource id of the storage account where exports will be delivered. This is not required if a sasToken and storageAccount are specified.
         */
        resourceId?: pulumi.Input<string>;
        /**
         * The name of the directory where exports will be uploaded.
         */
        rootFolderPath?: pulumi.Input<string>;
        /**
         * A SAS token for the storage account. For a restricted set of Azure customers this together with storageAccount can be specified instead of resourceId. Note: the value returned by the API for this property will always be obfuscated. Returning this same obfuscated value will not result in the SAS token being updated. To update this value a new SAS token must be specified.
         */
        sasToken?: pulumi.Input<string>;
        /**
         * The storage account where exports will be uploaded. For a restricted set of Azure customers this together with sasToken can be specified instead of resourceId.
         */
        storageAccount?: pulumi.Input<string>;
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
     * The schedule associated with the export.
     */
    export interface ExportScheduleArgs {
        /**
         * The schedule recurrence.
         */
        recurrence?: pulumi.Input<string | enums.RecurrenceType>;
        /**
         * Has start and end date of the recurrence. The start date must be in future. If present, the end date must be greater than start date.
         */
        recurrencePeriod?: pulumi.Input<ExportRecurrencePeriodArgs>;
        /**
         * The status of the export's schedule. If 'Inactive', the export's schedule is paused.
         */
        status?: pulumi.Input<string | enums.StatusType>;
    }

    /**
     * The date range for data in the export. This should only be specified with timeFrame set to 'Custom'. The maximum date range is 3 months.
     */
    export interface ExportTimePeriodArgs {
        /**
         * The start date for export data.
         */
        from: pulumi.Input<string>;
        /**
         * The end date for export data.
         */
        to: pulumi.Input<string>;
    }

    /**
     * Destination of the view data. This is optional. Currently only CSV format is supported.
     */
    export interface FileDestinationArgs {
        /**
         * Destination of the view data. Currently only CSV format is supported.
         */
        fileFormats?: pulumi.Input<pulumi.Input<string | enums.FileFormat>[]>;
    }

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
     * The properties of the scheduled action notification.
     */
    export interface NotificationPropertiesArgs {
        /**
         * Locale of the email.
         */
        language?: pulumi.Input<string>;
        /**
         * Optional message to be added in the email. Length is limited to 250 characters.
         */
        message?: pulumi.Input<string>;
        /**
         * Regional format used for formatting date/time and currency values in the email.
         */
        regionalFormat?: pulumi.Input<string>;
        /**
         * Subject of the email. Length is limited to 70 characters.
         */
        subject: pulumi.Input<string>;
        /**
         * Array of email addresses.
         */
        to: pulumi.Input<pulumi.Input<string>[]>;
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
        dimensions?: pulumi.Input<ReportConfigComparisonExpressionArgs>;
        /**
         * The logical "OR" expression. Must have at least 2 items.
         */
        or?: pulumi.Input<pulumi.Input<ReportConfigFilterArgs>[]>;
        /**
         * Has comparison expression for a tag
         */
        tags?: pulumi.Input<ReportConfigComparisonExpressionArgs>;
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
        type: pulumi.Input<string | enums.QueryColumnType>;
    }

    /**
     * The order by expression to be used in the report.
     */
    export interface ReportConfigSortingArgs {
        /**
         * Direction of sort.
         */
        direction?: pulumi.Input<string | enums.ReportConfigSortingType>;
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

    /**
     * The properties of the schedule.
     */
    export interface SchedulePropertiesArgs {
        /**
         * UTC day on which cost analysis data will be emailed. Must be between 1 and 31. This property is applicable when frequency is Monthly and overrides weeksOfMonth or daysOfWeek.
         */
        dayOfMonth?: pulumi.Input<number>;
        /**
         * Day names in english on which cost analysis data will be emailed. This property is applicable when frequency is Weekly or Monthly.
         */
        daysOfWeek?: pulumi.Input<pulumi.Input<string | enums.DaysOfWeek>[]>;
        /**
         * The end date and time of the scheduled action (UTC).
         */
        endDate: pulumi.Input<string>;
        /**
         * Frequency of the schedule.
         */
        frequency: pulumi.Input<string | enums.ScheduleFrequency>;
        /**
         * UTC time at which cost analysis data will be emailed.
         */
        hourOfDay?: pulumi.Input<number>;
        /**
         * The start date and time of the scheduled action (UTC).
         */
        startDate: pulumi.Input<string>;
        /**
         * Weeks in which cost analysis data will be emailed. This property is applicable when frequency is Monthly and used in combination with daysOfWeek.
         */
        weeksOfMonth?: pulumi.Input<pulumi.Input<string | enums.WeeksOfMonth>[]>;
    }
