import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Actions to invoke when the alert fires.
     */
    export interface ActionArgs {
        /**
         * Action Group resource Id to invoke when the alert fires.
         */
        actionGroupId?: pulumi.Input<string>;
        /**
         * The properties of a webhook object.
         */
        webHookProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * A condition of the scheduled query rule.
     */
    export interface ConditionArgs {
        /**
         * List of Dimensions conditions
         */
        dimensions?: pulumi.Input<pulumi.Input<DimensionArgs>[]>;
        /**
         * The minimum number of violations required within the selected lookback time window required to raise an alert.
         */
        failingPeriods?: pulumi.Input<ConditionFailingPeriodsArgs>;
        /**
         * The column containing the metric measure number.
         */
        metricMeasureColumn?: pulumi.Input<string>;
        /**
         * The criteria operator.
         */
        operator: pulumi.Input<string | enums.ConditionOperator>;
        /**
         * Log query alert
         */
        query?: pulumi.Input<string>;
        /**
         * The column containing the resource id. The content of the column must be a uri formatted as resource id
         */
        resourceIdColumn?: pulumi.Input<string>;
        /**
         * the criteria threshold value that activates the alert.
         */
        threshold: pulumi.Input<number>;
        /**
         * Aggregation type
         */
        timeAggregation: pulumi.Input<string | enums.TimeAggregation>;
    }
    /**
     * conditionArgsProvideDefaults sets the appropriate defaults for ConditionArgs
     */
    export function conditionArgsProvideDefaults(val: ConditionArgs): ConditionArgs {
        return {
            ...val,
            failingPeriods: (val.failingPeriods ? pulumi.output(val.failingPeriods).apply(conditionFailingPeriodsArgsProvideDefaults) : undefined),
        };
    }

    /**
     * The minimum number of violations required within the selected lookback time window required to raise an alert.
     */
    export interface ConditionFailingPeriodsArgs {
        /**
         * The number of violations to trigger an alert. Should be smaller or equal to numberOfEvaluationPeriods. Default value is 1
         */
        minFailingPeriodsToAlert?: pulumi.Input<number>;
        /**
         * The number of aggregated lookback points. The lookback time window is calculated based on the aggregation granularity (windowSize) and the selected number of aggregated points. Default value is 1
         */
        numberOfEvaluationPeriods?: pulumi.Input<number>;
    }
    /**
     * conditionFailingPeriodsArgsProvideDefaults sets the appropriate defaults for ConditionFailingPeriodsArgs
     */
    export function conditionFailingPeriodsArgsProvideDefaults(val: ConditionFailingPeriodsArgs): ConditionFailingPeriodsArgs {
        return {
            ...val,
            minFailingPeriodsToAlert: (val.minFailingPeriodsToAlert) ?? 1,
            numberOfEvaluationPeriods: (val.numberOfEvaluationPeriods) ?? 1,
        };
    }

    /**
     * Dimension splitting and filtering definition
     */
    export interface DimensionArgs {
        /**
         * Name of the dimension
         */
        name: pulumi.Input<string>;
        /**
         * Operator for dimension values
         */
        operator: pulumi.Input<string | enums.DimensionOperator>;
        /**
         * List of dimension values
         */
        values: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The rule criteria that defines the conditions of the scheduled query rule.
     */
    export interface ScheduledQueryRuleCriteriaArgs {
        /**
         * A list of conditions to evaluate against the specified scopes
         */
        allOf?: pulumi.Input<pulumi.Input<ConditionArgs>[]>;
    }
