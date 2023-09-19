import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The comparison expression to be used in the budgets.
     */
    export interface BudgetComparisonExpressionArgs {
        /**
         * The name of the column to use in comparison.
         */
        name: pulumi.Input<string>;
        /**
         * The operator to use for comparison.
         */
        operator: pulumi.Input<string | enums.BudgetOperatorType>;
        /**
         * Array of values to use for comparison
         */
        values: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * May be used to filter budgets by user-specified dimensions and/or tags.
     *
     *  Supported for CategoryType(s): Cost, ReservationUtilization.
     */
    export interface BudgetFilterArgs {
        /**
         * The logical "AND" expression. Must have at least 2 items.
         *
         *  Supported for CategoryType(s): Cost.
         */
        and?: pulumi.Input<pulumi.Input<BudgetFilterPropertiesArgs>[]>;
        /**
         * Has comparison expression for a dimension.
         *
         *  Supported for CategoryType(s): Cost, ReservationUtilization.
         *
         * Supported dimension names for **CategoryType: ReservationUtilization** 
         * - ReservationId
         * - ReservedResourceType
         */
        dimensions?: pulumi.Input<BudgetComparisonExpressionArgs>;
        /**
         * Has comparison expression for a tag.
         *
         *  Supported for CategoryType(s): Cost.
         */
        tags?: pulumi.Input<BudgetComparisonExpressionArgs>;
    }

    /**
     * The Dimensions or Tags to filter a budget by.
     *
     *  Supported for CategoryType(s): Cost, ReservationUtilization.
     */
    export interface BudgetFilterPropertiesArgs {
        /**
         * Has comparison expression for a dimension.
         *
         *  Supported for CategoryType(s): Cost, ReservationUtilization.
         *
         * Supported dimension names for **CategoryType: ReservationUtilization** 
         * - ReservationId
         * - ReservedResourceType
         */
        dimensions?: pulumi.Input<BudgetComparisonExpressionArgs>;
        /**
         * Has comparison expression for a tag.
         *
         *  Supported for CategoryType(s): Cost.
         */
        tags?: pulumi.Input<BudgetComparisonExpressionArgs>;
    }

    /**
     * The time period that defines the active period of the budget. The budget will evaluate data on or after the startDate and will expire on the endDate.
     *
     *  Supported for CategoryType(s): Cost, ReservationUtilization.
     *
     *  Required for CategoryType(s): Cost, ReservationUtilization.
     */
    export interface BudgetTimePeriodArgs {
        /**
         * The end date for the budget.
         *
         * - Constraints for **CategoryType: Cost** - No constraints. If not provided, we default this to 10 years from the start date.
         *
         * - Constraints for **CategoryType: ReservationUtilization** - End date cannot be more than 3 years after the start date.
         */
        endDate?: pulumi.Input<string>;
        /**
         * The start date for the budget.
         *
         * - Constraints for **CategoryType: Cost** - Must be first of the month and should be less than the end date. Budget start date must be on or after June 1, 2017. Future start date should not be more than twelve months. Past start date should  be selected within the timegrain period.
         *
         * - Constraints for **CategoryType: ReservationUtilization** - Must be on or after the current date and less than the end date.
         */
        startDate: pulumi.Input<string>;
    }

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
     * The notification associated with a budget.
     *
     *  Supported for CategoryType(s): Cost, ReservationUtilization.
     */
    export interface NotificationArgs {
        /**
         * Email addresses to send the notification to when the threshold is breached. Must have at least one contact email or contact group specified at the Subscription or Resource Group scopes. All other scopes must have at least one contact email specified.
         *
         *  Supported for CategoryType(s): Cost, ReservationUtilization.
         */
        contactEmails: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Subscription or Resource Group scopes only. Action groups to send the notification to when the threshold is exceeded. Must be provided as a fully qualified Azure resource id.
         *
         *  Supported for CategoryType(s): Cost.
         */
        contactGroups?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Subscription or Resource Group scopes only. Contact roles to send the notification to when the threshold is breached.
         *
         *  Supported for CategoryType(s): Cost.
         */
        contactRoles?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The notification is enabled or not.
         *
         *  Supported for CategoryType(s): Cost, ReservationUtilization.
         */
        enabled: pulumi.Input<boolean>;
        /**
         * Frequency of a notification. Represents how long the notification will be silent after triggering an alert for a threshold breach. If not specified, the frequency will be set by default based on the timeGrain (Weekly when timeGrain: Last7Days, Monthly when timeGrain: Last30Days).
         *
         *  Supported for CategoryType(s): ReservationUtilization.
         */
        frequency?: pulumi.Input<string | enums.Frequency>;
        /**
         * Language in which the recipient will receive the notification, 
         *
         *  Supported for CategoryType(s): Cost, ReservationUtilization.
         */
        locale?: pulumi.Input<string | enums.CultureCode>;
        /**
         * The comparison operator.
         *
         *  Supported for CategoryType(s): Cost, ReservationUtilization.
         *
         *  Supported operators for **CategoryType: Cost**
         * - GreaterThan
         * - GreaterThanOrEqualTo
         *
         *  Supported operators for **CategoryType: ReservationUtilization**
         * - LessThan
         */
        operator: pulumi.Input<string | enums.BudgetNotificationOperatorType>;
        /**
         * Threshold value associated with a notification. It is always percent with a maximum of 2 decimal places.
         *
         *  Supported for CategoryType(s): Cost, ReservationUtilization.
         *
         *  **CategoryType: Cost** - Must be between 0 and 1000. Notification is sent when the cost exceeded the threshold.
         *
         *  **CategoryType: ReservationUtilization** - Must be between 0 and 100. Notification is sent when a reservation has a utilization percentage below the threshold.
         */
        threshold: pulumi.Input<number>;
        /**
         * The type of threshold.
         *
         *  Supported for CategoryType(s): Cost.
         */
        thresholdType?: pulumi.Input<string | enums.ThresholdType>;
    }
    /**
     * notificationArgsProvideDefaults sets the appropriate defaults for NotificationArgs
     */
    export function notificationArgsProvideDefaults(val: NotificationArgs): NotificationArgs {
        return {
            ...val,
            thresholdType: (val.thresholdType) ?? "Actual",
        };
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

    /**
     * Managed service identity (either system assigned, or none)
     */
    export interface SystemAssignedServiceIdentityArgs {
        /**
         * Type of managed service identity (either system assigned, or none).
         */
        type: pulumi.Input<string | enums.SystemAssignedServiceIdentityType>;
    }
