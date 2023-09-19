import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The comparison expression to be used in the budgets.
 */
export interface BudgetComparisonExpressionResponse {
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
 * The Dimensions or Tags to filter a budget by.
 *
 *  Supported for CategoryType(s): Cost, ReservationUtilization.
 */
export interface BudgetFilterPropertiesResponse {
    /**
     * Has comparison expression for a dimension.
     *
     *  Supported for CategoryType(s): Cost, ReservationUtilization.
     *
     * Supported dimension names for **CategoryType: ReservationUtilization** 
     * - ReservationId
     * - ReservedResourceType
     */
    dimensions?: BudgetComparisonExpressionResponse;
    /**
     * Has comparison expression for a tag.
     *
     *  Supported for CategoryType(s): Cost.
     */
    tags?: BudgetComparisonExpressionResponse;
}

/**
 * May be used to filter budgets by user-specified dimensions and/or tags.
 *
 *  Supported for CategoryType(s): Cost, ReservationUtilization.
 */
export interface BudgetFilterResponse {
    /**
     * The logical "AND" expression. Must have at least 2 items.
     *
     *  Supported for CategoryType(s): Cost.
     */
    and?: BudgetFilterPropertiesResponse[];
    /**
     * Has comparison expression for a dimension.
     *
     *  Supported for CategoryType(s): Cost, ReservationUtilization.
     *
     * Supported dimension names for **CategoryType: ReservationUtilization** 
     * - ReservationId
     * - ReservedResourceType
     */
    dimensions?: BudgetComparisonExpressionResponse;
    /**
     * Has comparison expression for a tag.
     *
     *  Supported for CategoryType(s): Cost.
     */
    tags?: BudgetComparisonExpressionResponse;
}

/**
 * The time period that defines the active period of the budget. The budget will evaluate data on or after the startDate and will expire on the endDate.
 *
 *  Supported for CategoryType(s): Cost, ReservationUtilization.
 *
 *  Required for CategoryType(s): Cost, ReservationUtilization.
 */
export interface BudgetTimePeriodResponse {
    /**
     * The end date for the budget.
     *
     * - Constraints for **CategoryType: Cost** - No constraints. If not provided, we default this to 10 years from the start date.
     *
     * - Constraints for **CategoryType: ReservationUtilization** - End date cannot be more than 3 years after the start date.
     */
    endDate?: string;
    /**
     * The start date for the budget.
     *
     * - Constraints for **CategoryType: Cost** - Must be first of the month and should be less than the end date. Budget start date must be on or after June 1, 2017. Future start date should not be more than twelve months. Past start date should  be selected within the timegrain period.
     *
     * - Constraints for **CategoryType: ReservationUtilization** - Must be on or after the current date and less than the end date.
     */
    startDate: string;
}

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
 * Details of any error encountered on last collection attempt
 */
export interface ConnectorCollectionErrorInfoResponse {
    /**
     * Short error message
     */
    errorCode: string;
    /**
     * External Provider error message
     */
    errorInnerMessage?: string;
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
     * Last time the data acquisition process initiated connecting to the external provider
     */
    lastChecked?: string;
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
 * Target resources and allocation
 */
export interface CostAllocationProportionResponse {
    /**
     * Target resource for cost allocation
     */
    name: string;
    /**
     * Percentage of source cost to allocate to this resource. This value can be specified to two decimal places and the total percentage of all resources in this rule must sum to 100.00.
     */
    percentage: number;
}

/**
 * Resource details of the cost allocation rule
 */
export interface CostAllocationRuleDetailsResponse {
    /**
     * Source resources for cost allocation. At this time, this list can contain no more than one element.
     */
    sourceResources?: SourceCostAllocationResourceResponse[];
    /**
     * Target resources for cost allocation. At this time, this list can contain no more than one element.
     */
    targetResources?: TargetCostAllocationResourceResponse[];
}

/**
 * The properties of a cost allocation rule
 */
export interface CostAllocationRulePropertiesResponse {
    /**
     * Time at which the rule was created. Rules that change cost for the same resource are applied in order of creation.
     */
    createdDate: string;
    /**
     * Description of a cost allocation rule.
     */
    description?: string;
    /**
     * Resource information for the cost allocation rule
     */
    details: CostAllocationRuleDetailsResponse;
    /**
     * Status of the rule
     */
    status: string;
    /**
     * Time at which the rule was last updated.
     */
    updatedDate: string;
}

/**
 * The current amount of cost which is being tracked for a budget.
 *
 *  Supported for CategoryType(s): Cost.
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
 * The customer billing metadata
 */
export interface CustomerMetadataResponse {
    /**
     * Customer billing account id
     */
    billingAccountId: string;
    /**
     * Customer billing profile id
     */
    billingProfileId: string;
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
 * The forecasted cost which is being tracked for a budget.
 *
 *  Supported for CategoryType(s): Cost.
 */
export interface ForecastSpendResponse {
    /**
     * The forecasted cost for the total time period which is being tracked by the budget. This value is only provided if the budget contains a forecast alert type.
     */
    amount: number;
    /**
     * The unit of measure for the budget amount.
     */
    unit: string;
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
 * The notification associated with a budget.
 *
 *  Supported for CategoryType(s): Cost, ReservationUtilization.
 */
export interface NotificationResponse {
    /**
     * Email addresses to send the notification to when the threshold is breached. Must have at least one contact email or contact group specified at the Subscription or Resource Group scopes. All other scopes must have at least one contact email specified.
     *
     *  Supported for CategoryType(s): Cost, ReservationUtilization.
     */
    contactEmails: string[];
    /**
     * Subscription or Resource Group scopes only. Action groups to send the notification to when the threshold is exceeded. Must be provided as a fully qualified Azure resource id.
     *
     *  Supported for CategoryType(s): Cost.
     */
    contactGroups?: string[];
    /**
     * Subscription or Resource Group scopes only. Contact roles to send the notification to when the threshold is breached.
     *
     *  Supported for CategoryType(s): Cost.
     */
    contactRoles?: string[];
    /**
     * The notification is enabled or not.
     *
     *  Supported for CategoryType(s): Cost, ReservationUtilization.
     */
    enabled: boolean;
    /**
     * Frequency of a notification. Represents how long the notification will be silent after triggering an alert for a threshold breach. If not specified, the frequency will be set by default based on the timeGrain (Weekly when timeGrain: Last7Days, Monthly when timeGrain: Last30Days).
     *
     *  Supported for CategoryType(s): ReservationUtilization.
     */
    frequency?: string;
    /**
     * Language in which the recipient will receive the notification, 
     *
     *  Supported for CategoryType(s): Cost, ReservationUtilization.
     */
    locale?: string;
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
    operator: string;
    /**
     * Threshold value associated with a notification. It is always percent with a maximum of 2 decimal places.
     *
     *  Supported for CategoryType(s): Cost, ReservationUtilization.
     *
     *  **CategoryType: Cost** - Must be between 0 and 1000. Notification is sent when the cost exceeded the threshold.
     *
     *  **CategoryType: ReservationUtilization** - Must be between 0 and 100. Notification is sent when a reservation has a utilization percentage below the threshold.
     */
    threshold: number;
    /**
     * The type of threshold.
     *
     *  Supported for CategoryType(s): Cost.
     */
    thresholdType?: string;
}
/**
 * notificationResponseProvideDefaults sets the appropriate defaults for NotificationResponse
 */
export function notificationResponseProvideDefaults(val: NotificationResponse): NotificationResponse {
    return {
        ...val,
        thresholdType: (val.thresholdType) ?? "Actual",
    };
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

export interface SettingsPropertiesResponseCache {
    /**
     * Indicates the account type. Allowed values include: EA, PAYG, Modern, Internal, Unknown.
     */
    channel: string;
    /**
     * Resource ID used by Resource Manager to uniquely identify the scope.
     */
    id: string;
    /**
     * Display name for the scope.
     */
    name: string;
    /**
     * Resource ID of the parent scope. For instance, subscription's resource ID for a resource group or a management group resource ID for a subscription.
     */
    parent?: string;
    /**
     * Indicates the status of the scope. Status only applies to subscriptions and billing accounts.
     */
    status?: string;
    /**
     * Indicates the type of modern account. Allowed values include: Individual, Enterprise, Partner, Indirect, NotApplicable
     */
    subchannel: string;
}

/**
 * Source resources for cost allocation
 */
export interface SourceCostAllocationResourceResponse {
    /**
     * If resource type is dimension, this must be either ResourceGroupName or SubscriptionId. If resource type is tag, this must be a valid Azure tag
     */
    name: string;
    /**
     * Type of resources contained in this cost allocation rule
     */
    resourceType: string;
    /**
     * Source Resources for cost allocation. This list cannot contain more than 25 values.
     */
    values: string[];
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

/**
 * The properties of the tag inheritance setting.
 */
export interface TagInheritancePropertiesResponse {
    /**
     * When resource has the same tag as subscription or resource group and this property is set to true - the subscription or resource group tag will be applied. If subscription and resource group tags are also the same, subscription tag will be applied.
     */
    preferContainerTags: boolean;
}

/**
 * Target resources for cost allocation.
 */
export interface TargetCostAllocationResourceResponse {
    /**
     * If resource type is dimension, this must be either ResourceGroupName or SubscriptionId. If resource type is tag, this must be a valid Azure tag
     */
    name: string;
    /**
     * Method of cost allocation for the rule
     */
    policyType: string;
    /**
     * Type of resources contained in this cost allocation rule
     */
    resourceType: string;
    /**
     * Target resources for cost allocation. This list cannot contain more than 25 values.
     */
    values: CostAllocationProportionResponse[];
}











