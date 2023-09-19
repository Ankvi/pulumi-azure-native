import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Criterion for dynamic threshold.
     */
    export interface DynamicMetricCriteriaArgs {
        /**
         * The extent of deviation required to trigger an alert. This will affect how tight the threshold is to the metric series pattern.
         */
        alertSensitivity: pulumi.Input<string | enums.DynamicThresholdSensitivity>;
        /**
         * Specifies the type of threshold criteria
         * Expected value is 'DynamicThresholdCriterion'.
         */
        criterionType: pulumi.Input<"DynamicThresholdCriterion">;
        /**
         * List of dimension conditions.
         */
        dimensions?: pulumi.Input<pulumi.Input<MetricDimensionArgs>[]>;
        /**
         * The minimum number of violations required within the selected lookback time window required to raise an alert.
         */
        failingPeriods: pulumi.Input<DynamicThresholdFailingPeriodsArgs>;
        /**
         * Use this option to set the date from which to start learning the metric historical data and calculate the dynamic thresholds (in ISO8601 format)
         */
        ignoreDataBefore?: pulumi.Input<string>;
        /**
         * Name of the metric.
         */
        metricName: pulumi.Input<string>;
        /**
         * Namespace of the metric.
         */
        metricNamespace?: pulumi.Input<string>;
        /**
         * Name of the criteria.
         */
        name: pulumi.Input<string>;
        /**
         * The operator used to compare the metric value against the threshold.
         */
        operator: pulumi.Input<string | enums.DynamicThresholdOperator>;
        /**
         * Allows creating an alert rule on a custom metric that isn't yet emitted, by causing the metric validation to be skipped.
         */
        skipMetricValidation?: pulumi.Input<boolean>;
        /**
         * the criteria time aggregation types.
         */
        timeAggregation: pulumi.Input<string | enums.AggregationTypeEnum>;
    }

    /**
     * The minimum number of violations required within the selected lookback time window required to raise an alert.
     */
    export interface DynamicThresholdFailingPeriodsArgs {
        /**
         * The number of violations to trigger an alert. Should be smaller or equal to numberOfEvaluationPeriods.
         */
        minFailingPeriodsToAlert: pulumi.Input<number>;
        /**
         * The number of aggregated lookback points. The lookback time window is calculated based on the aggregation granularity (windowSize) and the selected number of aggregated points.
         */
        numberOfEvaluationPeriods: pulumi.Input<number>;
    }

    /**
     * An alert action.
     */
    export interface MetricAlertActionArgs {
        /**
         * the id of the action group to use.
         */
        actionGroupId?: pulumi.Input<string>;
        /**
         * This field allows specifying custom properties, which would be appended to the alert payload sent as input to the webhook.
         */
        webHookProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * Specifies the metric alert criteria for multiple resource that has multiple metric criteria.
     */
    export interface MetricAlertMultipleResourceMultipleMetricCriteriaArgs {
        /**
         * the list of multiple metric criteria for this 'all of' operation. 
         */
        allOf?: pulumi.Input<pulumi.Input<DynamicMetricCriteriaArgs | MetricCriteriaArgs>[]>;
        /**
         * specifies the type of the alert criteria.
         * Expected value is 'Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria'.
         */
        odataType: pulumi.Input<"Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria">;
    }

    /**
     * Specifies the metric alert criteria for a single resource that has multiple metric criteria.
     */
    export interface MetricAlertSingleResourceMultipleMetricCriteriaArgs {
        /**
         * The list of metric criteria for this 'all of' operation. 
         */
        allOf?: pulumi.Input<pulumi.Input<MetricCriteriaArgs>[]>;
        /**
         * specifies the type of the alert criteria.
         * Expected value is 'Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria'.
         */
        odataType: pulumi.Input<"Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria">;
    }

    /**
     * Criterion to filter metrics.
     */
    export interface MetricCriteriaArgs {
        /**
         * Specifies the type of threshold criteria
         * Expected value is 'StaticThresholdCriterion'.
         */
        criterionType: pulumi.Input<"StaticThresholdCriterion">;
        /**
         * List of dimension conditions.
         */
        dimensions?: pulumi.Input<pulumi.Input<MetricDimensionArgs>[]>;
        /**
         * Name of the metric.
         */
        metricName: pulumi.Input<string>;
        /**
         * Namespace of the metric.
         */
        metricNamespace?: pulumi.Input<string>;
        /**
         * Name of the criteria.
         */
        name: pulumi.Input<string>;
        /**
         * the criteria operator.
         */
        operator: pulumi.Input<string | enums.Operator>;
        /**
         * Allows creating an alert rule on a custom metric that isn't yet emitted, by causing the metric validation to be skipped.
         */
        skipMetricValidation?: pulumi.Input<boolean>;
        /**
         * the criteria threshold value that activates the alert.
         */
        threshold: pulumi.Input<number>;
        /**
         * the criteria time aggregation types.
         */
        timeAggregation: pulumi.Input<string | enums.AggregationTypeEnum>;
    }

    /**
     * Specifies a metric dimension.
     */
    export interface MetricDimensionArgs {
        /**
         * Name of the dimension.
         */
        name: pulumi.Input<string>;
        /**
         * the dimension operator. Only 'Include' and 'Exclude' are supported
         */
        operator: pulumi.Input<string>;
        /**
         * list of dimension values.
         */
        values: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Specifies the metric alert rule criteria for a web test resource.
     */
    export interface WebtestLocationAvailabilityCriteriaArgs {
        /**
         * The Application Insights resource Id.
         */
        componentId: pulumi.Input<string>;
        /**
         * The number of failed locations.
         */
        failedLocationCount: pulumi.Input<number>;
        /**
         * specifies the type of the alert criteria.
         * Expected value is 'Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria'.
         */
        odataType: pulumi.Input<"Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria">;
        /**
         * The Application Insights web test Id.
         */
        webTestId: pulumi.Input<string>;
    }
