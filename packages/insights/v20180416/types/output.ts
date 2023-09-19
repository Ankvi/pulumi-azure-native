import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Specify action need to be taken when rule type is Alert
     */
    export interface AlertingActionResponse {
        /**
         * Azure action group reference.
         */
        aznsAction?: AzNsActionGroupResponse;
        /**
         * Specifies the action. Supported values - AlertingAction, LogToMetricAction
         * Expected value is 'Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.Microsoft.AppInsights.Nexus.DataContracts.Resources.ScheduledQueryRules.AlertingAction'.
         */
        odataType: "Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.Microsoft.AppInsights.Nexus.DataContracts.Resources.ScheduledQueryRules.AlertingAction";
        /**
         * Severity of the alert
         */
        severity: string;
        /**
         * time (in minutes) for which Alerts should be throttled or suppressed.
         */
        throttlingInMin?: number;
        /**
         * The trigger condition that results in the alert rule being.
         */
        trigger: TriggerConditionResponse;
    }

    /**
     * Azure action group
     */
    export interface AzNsActionGroupResponse {
        /**
         * Azure Action Group reference.
         */
        actionGroup?: string[];
        /**
         * Custom payload to be sent for all webhook URI in Azure action group
         */
        customWebhookPayload?: string;
        /**
         * Custom subject override for all email ids in Azure action group
         */
        emailSubject?: string;
    }

    /**
     * Specifies the criteria for converting log to metric.
     */
    export interface CriteriaResponse {
        /**
         * List of Dimensions for creating metric
         */
        dimensions?: DimensionResponse[];
        /**
         * Name of the metric
         */
        metricName: string;
    }

    /**
     * Specifies the criteria for converting log to metric.
     */
    export interface DimensionResponse {
        /**
         * Name of the dimension
         */
        name: string;
        /**
         * Operator for dimension values
         */
        operator: string;
        /**
         * List of dimension values
         */
        values: string[];
    }

    /**
     * A log metrics trigger descriptor.
     */
    export interface LogMetricTriggerResponse {
        /**
         * Evaluation of metric on a particular column
         */
        metricColumn?: string;
        /**
         * Metric Trigger Type - 'Consecutive' or 'Total'
         */
        metricTriggerType?: string;
        /**
         * The threshold of the metric trigger.
         */
        threshold?: number;
        /**
         * Evaluation operation for Metric -'GreaterThan' or 'LessThan' or 'Equal'.
         */
        thresholdOperator?: string;
    }

    /**
     * Specify action need to be taken when rule type is converting log to metric
     */
    export interface LogToMetricActionResponse {
        /**
         * Criteria of Metric
         */
        criteria: CriteriaResponse[];
        /**
         * Specifies the action. Supported values - AlertingAction, LogToMetricAction
         * Expected value is 'Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.Microsoft.AppInsights.Nexus.DataContracts.Resources.ScheduledQueryRules.LogToMetricAction'.
         */
        odataType: "Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.Microsoft.AppInsights.Nexus.DataContracts.Resources.ScheduledQueryRules.LogToMetricAction";
    }

    /**
     * Defines how often to run the search and the time interval.
     */
    export interface ScheduleResponse {
        /**
         * frequency (in minutes) at which rule condition should be evaluated.
         */
        frequencyInMinutes: number;
        /**
         * Time window for which data needs to be fetched for query (should be greater than or equal to frequencyInMinutes).
         */
        timeWindowInMinutes: number;
    }

    /**
     * Specifies the log search query.
     */
    export interface SourceResponse {
        /**
         * List of  Resource referred into query
         */
        authorizedResources?: string[];
        /**
         * The resource uri over which log search query is to be run.
         */
        dataSourceId: string;
        /**
         * Log search query. Required for action type - AlertingAction
         */
        query?: string;
        /**
         * Set value to 'ResultCount' .
         */
        queryType?: string;
    }

    /**
     * The condition that results in the Log Search rule.
     */
    export interface TriggerConditionResponse {
        /**
         * Trigger condition for metric query rule
         */
        metricTrigger?: LogMetricTriggerResponse;
        /**
         * Result or count threshold based on which rule should be triggered.
         */
        threshold: number;
        /**
         * Evaluation operation for rule - 'GreaterThan' or 'LessThan.
         */
        thresholdOperator: string;
    }
