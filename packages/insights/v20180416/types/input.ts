import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Specify action need to be taken when rule type is Alert
     */
    export interface AlertingActionArgs {
        /**
         * Azure action group reference.
         */
        aznsAction?: pulumi.Input<AzNsActionGroupArgs>;
        /**
         * Specifies the action. Supported values - AlertingAction, LogToMetricAction
         * Expected value is 'Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.Microsoft.AppInsights.Nexus.DataContracts.Resources.ScheduledQueryRules.AlertingAction'.
         */
        odataType: pulumi.Input<"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.Microsoft.AppInsights.Nexus.DataContracts.Resources.ScheduledQueryRules.AlertingAction">;
        /**
         * Severity of the alert
         */
        severity: pulumi.Input<string | enums.AlertSeverity>;
        /**
         * time (in minutes) for which Alerts should be throttled or suppressed.
         */
        throttlingInMin?: pulumi.Input<number>;
        /**
         * The trigger condition that results in the alert rule being.
         */
        trigger: pulumi.Input<TriggerConditionArgs>;
    }

    /**
     * Azure action group
     */
    export interface AzNsActionGroupArgs {
        /**
         * Azure Action Group reference.
         */
        actionGroup?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Custom payload to be sent for all webhook URI in Azure action group
         */
        customWebhookPayload?: pulumi.Input<string>;
        /**
         * Custom subject override for all email ids in Azure action group
         */
        emailSubject?: pulumi.Input<string>;
    }

    /**
     * Specifies the criteria for converting log to metric.
     */
    export interface CriteriaArgs {
        /**
         * List of Dimensions for creating metric
         */
        dimensions?: pulumi.Input<pulumi.Input<DimensionArgs>[]>;
        /**
         * Name of the metric
         */
        metricName: pulumi.Input<string>;
    }

    /**
     * Specifies the criteria for converting log to metric.
     */
    export interface DimensionArgs {
        /**
         * Name of the dimension
         */
        name: pulumi.Input<string>;
        /**
         * Operator for dimension values
         */
        operator: pulumi.Input<string | enums.Operator>;
        /**
         * List of dimension values
         */
        values: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * A log metrics trigger descriptor.
     */
    export interface LogMetricTriggerArgs {
        /**
         * Evaluation of metric on a particular column
         */
        metricColumn?: pulumi.Input<string>;
        /**
         * Metric Trigger Type - 'Consecutive' or 'Total'
         */
        metricTriggerType?: pulumi.Input<string | enums.MetricTriggerType>;
        /**
         * The threshold of the metric trigger.
         */
        threshold?: pulumi.Input<number>;
        /**
         * Evaluation operation for Metric -'GreaterThan' or 'LessThan' or 'Equal'.
         */
        thresholdOperator?: pulumi.Input<string | enums.ConditionalOperator>;
    }

    /**
     * Specify action need to be taken when rule type is converting log to metric
     */
    export interface LogToMetricActionArgs {
        /**
         * Criteria of Metric
         */
        criteria: pulumi.Input<pulumi.Input<CriteriaArgs>[]>;
        /**
         * Specifies the action. Supported values - AlertingAction, LogToMetricAction
         * Expected value is 'Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.Microsoft.AppInsights.Nexus.DataContracts.Resources.ScheduledQueryRules.LogToMetricAction'.
         */
        odataType: pulumi.Input<"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.Microsoft.AppInsights.Nexus.DataContracts.Resources.ScheduledQueryRules.LogToMetricAction">;
    }

    /**
     * Defines how often to run the search and the time interval.
     */
    export interface ScheduleArgs {
        /**
         * frequency (in minutes) at which rule condition should be evaluated.
         */
        frequencyInMinutes: pulumi.Input<number>;
        /**
         * Time window for which data needs to be fetched for query (should be greater than or equal to frequencyInMinutes).
         */
        timeWindowInMinutes: pulumi.Input<number>;
    }

    /**
     * Specifies the log search query.
     */
    export interface SourceArgs {
        /**
         * List of  Resource referred into query
         */
        authorizedResources?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The resource uri over which log search query is to be run.
         */
        dataSourceId: pulumi.Input<string>;
        /**
         * Log search query. Required for action type - AlertingAction
         */
        query?: pulumi.Input<string>;
        /**
         * Set value to 'ResultCount' .
         */
        queryType?: pulumi.Input<string | enums.QueryType>;
    }

    /**
     * The condition that results in the Log Search rule.
     */
    export interface TriggerConditionArgs {
        /**
         * Trigger condition for metric query rule
         */
        metricTrigger?: pulumi.Input<LogMetricTriggerArgs>;
        /**
         * Result or count threshold based on which rule should be triggered.
         */
        threshold: pulumi.Input<number>;
        /**
         * Evaluation operation for rule - 'GreaterThan' or 'LessThan.
         */
        thresholdOperator: pulumi.Input<string | enums.ConditionalOperator>;
    }
