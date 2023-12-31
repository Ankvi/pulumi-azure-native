import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * A rule condition based on a certain number of locations failing.
     */
    export interface LocationThresholdRuleConditionResponse {
        /**
         * the resource from which the rule collects its data. For this type dataSource will always be of type RuleMetricDataSource.
         */
        dataSource?: RuleManagementEventDataSourceResponse | RuleMetricDataSourceResponse;
        /**
         * the number of locations that must fail to activate the alert.
         */
        failedLocationCount: number;
        /**
         * specifies the type of condition. This can be one of three types: ManagementEventRuleCondition (occurrences of management events), LocationThresholdRuleCondition (based on the number of failures of a web test), and ThresholdRuleCondition (based on the threshold of a metric).
         * Expected value is 'Microsoft.Azure.Management.Insights.Models.LocationThresholdRuleCondition'.
         */
        odataType: "Microsoft.Azure.Management.Insights.Models.LocationThresholdRuleCondition";
        /**
         * the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day.
         */
        windowSize?: string;
    }

    /**
     * How the data that is collected should be combined over time.
     */
    export interface ManagementEventAggregationConditionResponse {
        /**
         * the condition operator.
         */
        operator?: string;
        /**
         * The threshold value that activates the alert.
         */
        threshold?: number;
        /**
         * the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day.
         */
        windowSize?: string;
    }

    /**
     * A management event rule condition.
     */
    export interface ManagementEventRuleConditionResponse {
        /**
         * How the data that is collected should be combined over time and when the alert is activated. Note that for management event alerts aggregation is optional – if it is not provided then any event will cause the alert to activate.
         */
        aggregation?: ManagementEventAggregationConditionResponse;
        /**
         * the resource from which the rule collects its data. For this type dataSource will always be of type RuleMetricDataSource.
         */
        dataSource?: RuleManagementEventDataSourceResponse | RuleMetricDataSourceResponse;
        /**
         * specifies the type of condition. This can be one of three types: ManagementEventRuleCondition (occurrences of management events), LocationThresholdRuleCondition (based on the number of failures of a web test), and ThresholdRuleCondition (based on the threshold of a metric).
         * Expected value is 'Microsoft.Azure.Management.Insights.Models.ManagementEventRuleCondition'.
         */
        odataType: "Microsoft.Azure.Management.Insights.Models.ManagementEventRuleCondition";
    }

    /**
     * Specifies the retention policy for the log.
     */
    export interface RetentionPolicyResponse {
        /**
         * the number of days for the retention in days. A value of 0 will retain the events indefinitely.
         */
        days: number;
        /**
         * a value indicating whether the retention policy is enabled.
         */
        enabled: boolean;
    }

    /**
     * Specifies the action to send email when the rule condition is evaluated. The discriminator is always RuleEmailAction in this case.
     */
    export interface RuleEmailActionResponse {
        /**
         * the list of administrator's custom email addresses to notify of the activation of the alert.
         */
        customEmails?: string[];
        /**
         * specifies the type of the action. There are two types of actions: RuleEmailAction and RuleWebhookAction.
         * Expected value is 'Microsoft.Azure.Management.Insights.Models.RuleEmailAction'.
         */
        odataType: "Microsoft.Azure.Management.Insights.Models.RuleEmailAction";
        /**
         * Whether the administrators (service and co-administrators) of the service should be notified when the alert is activated.
         */
        sendToServiceOwners?: boolean;
    }

    /**
     * The claims for a rule management event data source.
     */
    export interface RuleManagementEventClaimsDataSourceResponse {
        /**
         * the email address.
         */
        emailAddress?: string;
    }

    /**
     * A rule management event data source. The discriminator fields is always RuleManagementEventDataSource in this case.
     */
    export interface RuleManagementEventDataSourceResponse {
        /**
         * the claims.
         */
        claims?: RuleManagementEventClaimsDataSourceResponse;
        /**
         * the event name.
         */
        eventName?: string;
        /**
         * the event source.
         */
        eventSource?: string;
        /**
         * the legacy resource identifier of the resource the rule monitors. **NOTE**: this property cannot be updated for an existing rule.
         */
        legacyResourceId?: string;
        /**
         * the level.
         */
        level?: string;
        /**
         * the namespace of the metric.
         */
        metricNamespace?: string;
        /**
         * specifies the type of data source. There are two types of rule data sources: RuleMetricDataSource and RuleManagementEventDataSource
         * Expected value is 'Microsoft.Azure.Management.Insights.Models.RuleManagementEventDataSource'.
         */
        odataType: "Microsoft.Azure.Management.Insights.Models.RuleManagementEventDataSource";
        /**
         * The name of the operation that should be checked for. If no name is provided, any operation will match.
         */
        operationName?: string;
        /**
         * the resource group name.
         */
        resourceGroupName?: string;
        /**
         * the location of the resource.
         */
        resourceLocation?: string;
        /**
         * the resource provider name.
         */
        resourceProviderName?: string;
        /**
         * the resource identifier of the resource the rule monitors. **NOTE**: this property cannot be updated for an existing rule.
         */
        resourceUri?: string;
        /**
         * The status of the operation that should be checked for. If no status is provided, any status will match.
         */
        status?: string;
        /**
         * the substatus.
         */
        subStatus?: string;
    }

    /**
     * A rule metric data source. The discriminator value is always RuleMetricDataSource in this case.
     */
    export interface RuleMetricDataSourceResponse {
        /**
         * the legacy resource identifier of the resource the rule monitors. **NOTE**: this property cannot be updated for an existing rule.
         */
        legacyResourceId?: string;
        /**
         * the name of the metric that defines what the rule monitors.
         */
        metricName?: string;
        /**
         * the namespace of the metric.
         */
        metricNamespace?: string;
        /**
         * specifies the type of data source. There are two types of rule data sources: RuleMetricDataSource and RuleManagementEventDataSource
         * Expected value is 'Microsoft.Azure.Management.Insights.Models.RuleMetricDataSource'.
         */
        odataType: "Microsoft.Azure.Management.Insights.Models.RuleMetricDataSource";
        /**
         * the location of the resource.
         */
        resourceLocation?: string;
        /**
         * the resource identifier of the resource the rule monitors. **NOTE**: this property cannot be updated for an existing rule.
         */
        resourceUri?: string;
    }

    /**
     * Specifies the action to post to service when the rule condition is evaluated. The discriminator is always RuleWebhookAction in this case.
     */
    export interface RuleWebhookActionResponse {
        /**
         * specifies the type of the action. There are two types of actions: RuleEmailAction and RuleWebhookAction.
         * Expected value is 'Microsoft.Azure.Management.Insights.Models.RuleWebhookAction'.
         */
        odataType: "Microsoft.Azure.Management.Insights.Models.RuleWebhookAction";
        /**
         * the dictionary of custom properties to include with the post operation. These data are appended to the webhook payload.
         */
        properties?: {[key: string]: string};
        /**
         * the service uri to Post the notification when the alert activates or resolves.
         */
        serviceUri?: string;
    }

    /**
     * A rule condition based on a metric crossing a threshold.
     */
    export interface ThresholdRuleConditionResponse {
        /**
         * the resource from which the rule collects its data. For this type dataSource will always be of type RuleMetricDataSource.
         */
        dataSource?: RuleManagementEventDataSourceResponse | RuleMetricDataSourceResponse;
        /**
         * specifies the type of condition. This can be one of three types: ManagementEventRuleCondition (occurrences of management events), LocationThresholdRuleCondition (based on the number of failures of a web test), and ThresholdRuleCondition (based on the threshold of a metric).
         * Expected value is 'Microsoft.Azure.Management.Insights.Models.ThresholdRuleCondition'.
         */
        odataType: "Microsoft.Azure.Management.Insights.Models.ThresholdRuleCondition";
        /**
         * the operator used to compare the data and the threshold.
         */
        operator: string;
        /**
         * the threshold value that activates the alert.
         */
        threshold: number;
        /**
         * the time aggregation operator. How the data that are collected should be combined over time. The default value is the PrimaryAggregationType of the Metric.
         */
        timeAggregation?: string;
        /**
         * the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day.
         */
        windowSize?: string;
    }
