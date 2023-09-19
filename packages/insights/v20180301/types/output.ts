import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Criterion for dynamic threshold.
     */
    export interface DynamicMetricCriteriaResponse {
        /**
         * The extent of deviation required to trigger an alert. This will affect how tight the threshold is to the metric series pattern.
         */
        alertSensitivity: string;
        /**
         * Specifies the type of threshold criteria
         * Expected value is 'DynamicThresholdCriterion'.
         */
        criterionType: "DynamicThresholdCriterion";
        /**
         * List of dimension conditions.
         */
        dimensions?: MetricDimensionResponse[];
        /**
         * The minimum number of violations required within the selected lookback time window required to raise an alert.
         */
        failingPeriods: DynamicThresholdFailingPeriodsResponse;
        /**
         * Use this option to set the date from which to start learning the metric historical data and calculate the dynamic thresholds (in ISO8601 format)
         */
        ignoreDataBefore?: string;
        /**
         * Name of the metric.
         */
        metricName: string;
        /**
         * Namespace of the metric.
         */
        metricNamespace?: string;
        /**
         * Name of the criteria.
         */
        name: string;
        /**
         * The operator used to compare the metric value against the threshold.
         */
        operator: string;
        /**
         * Allows creating an alert rule on a custom metric that isn't yet emitted, by causing the metric validation to be skipped.
         */
        skipMetricValidation?: boolean;
        /**
         * the criteria time aggregation types.
         */
        timeAggregation: string;
    }

    /**
     * The minimum number of violations required within the selected lookback time window required to raise an alert.
     */
    export interface DynamicThresholdFailingPeriodsResponse {
        /**
         * The number of violations to trigger an alert. Should be smaller or equal to numberOfEvaluationPeriods.
         */
        minFailingPeriodsToAlert: number;
        /**
         * The number of aggregated lookback points. The lookback time window is calculated based on the aggregation granularity (windowSize) and the selected number of aggregated points.
         */
        numberOfEvaluationPeriods: number;
    }

    /**
     * An alert action.
     */
    export interface MetricAlertActionResponse {
        /**
         * the id of the action group to use.
         */
        actionGroupId?: string;
        /**
         * This field allows specifying custom properties, which would be appended to the alert payload sent as input to the webhook.
         */
        webHookProperties?: {[key: string]: string};
    }

    /**
     * Specifies the metric alert criteria for multiple resource that has multiple metric criteria.
     */
    export interface MetricAlertMultipleResourceMultipleMetricCriteriaResponse {
        /**
         * the list of multiple metric criteria for this 'all of' operation. 
         */
        allOf?: (DynamicMetricCriteriaResponse | MetricCriteriaResponse)[];
        /**
         * specifies the type of the alert criteria.
         * Expected value is 'Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria'.
         */
        odataType: "Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria";
    }

    /**
     * Specifies the metric alert criteria for a single resource that has multiple metric criteria.
     */
    export interface MetricAlertSingleResourceMultipleMetricCriteriaResponse {
        /**
         * The list of metric criteria for this 'all of' operation. 
         */
        allOf?: MetricCriteriaResponse[];
        /**
         * specifies the type of the alert criteria.
         * Expected value is 'Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria'.
         */
        odataType: "Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria";
    }

    /**
     * Criterion to filter metrics.
     */
    export interface MetricCriteriaResponse {
        /**
         * Specifies the type of threshold criteria
         * Expected value is 'StaticThresholdCriterion'.
         */
        criterionType: "StaticThresholdCriterion";
        /**
         * List of dimension conditions.
         */
        dimensions?: MetricDimensionResponse[];
        /**
         * Name of the metric.
         */
        metricName: string;
        /**
         * Namespace of the metric.
         */
        metricNamespace?: string;
        /**
         * Name of the criteria.
         */
        name: string;
        /**
         * the criteria operator.
         */
        operator: string;
        /**
         * Allows creating an alert rule on a custom metric that isn't yet emitted, by causing the metric validation to be skipped.
         */
        skipMetricValidation?: boolean;
        /**
         * the criteria threshold value that activates the alert.
         */
        threshold: number;
        /**
         * the criteria time aggregation types.
         */
        timeAggregation: string;
    }

    /**
     * Specifies a metric dimension.
     */
    export interface MetricDimensionResponse {
        /**
         * Name of the dimension.
         */
        name: string;
        /**
         * the dimension operator. Only 'Include' and 'Exclude' are supported
         */
        operator: string;
        /**
         * list of dimension values.
         */
        values: string[];
    }

    /**
     * Specifies the metric alert rule criteria for a web test resource.
     */
    export interface WebtestLocationAvailabilityCriteriaResponse {
        /**
         * The Application Insights resource Id.
         */
        componentId: string;
        /**
         * The number of failed locations.
         */
        failedLocationCount: number;
        /**
         * specifies the type of the alert criteria.
         * Expected value is 'Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria'.
         */
        odataType: "Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria";
        /**
         * The Application Insights web test Id.
         */
        webTestId: string;
    }
