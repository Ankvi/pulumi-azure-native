import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Actions to invoke when the alert fires.
     */
    export interface ActionResponse {
        /**
         * Action Group resource Id to invoke when the alert fires.
         */
        actionGroupId?: string;
        /**
         * The properties of a webhook object.
         */
        webHookProperties?: {[key: string]: string};
    }

    /**
     * A condition of the scheduled query rule.
     */
    export interface ConditionResponse {
        /**
         * List of Dimensions conditions
         */
        dimensions?: DimensionResponse[];
        /**
         * The minimum number of violations required within the selected lookback time window required to raise an alert.
         */
        failingPeriods?: ConditionResponseFailingPeriods;
        /**
         * The column containing the metric measure number.
         */
        metricMeasureColumn?: string;
        /**
         * The criteria operator.
         */
        operator: string;
        /**
         * Log query alert
         */
        query?: string;
        /**
         * The column containing the resource id. The content of the column must be a uri formatted as resource id
         */
        resourceIdColumn?: string;
        /**
         * the criteria threshold value that activates the alert.
         */
        threshold: number;
        /**
         * Aggregation type
         */
        timeAggregation: string;
    }
    /**
     * conditionResponseProvideDefaults sets the appropriate defaults for ConditionResponse
     */
    export function conditionResponseProvideDefaults(val: ConditionResponse): ConditionResponse {
        return {
            ...val,
            failingPeriods: (val.failingPeriods ? conditionResponseFailingPeriodsProvideDefaults(val.failingPeriods) : undefined),
        };
    }

    /**
     * The minimum number of violations required within the selected lookback time window required to raise an alert.
     */
    export interface ConditionResponseFailingPeriods {
        /**
         * The number of violations to trigger an alert. Should be smaller or equal to numberOfEvaluationPeriods. Default value is 1
         */
        minFailingPeriodsToAlert?: number;
        /**
         * The number of aggregated lookback points. The lookback time window is calculated based on the aggregation granularity (windowSize) and the selected number of aggregated points. Default value is 1
         */
        numberOfEvaluationPeriods?: number;
    }
    /**
     * conditionResponseFailingPeriodsProvideDefaults sets the appropriate defaults for ConditionResponseFailingPeriods
     */
    export function conditionResponseFailingPeriodsProvideDefaults(val: ConditionResponseFailingPeriods): ConditionResponseFailingPeriods {
        return {
            ...val,
            minFailingPeriodsToAlert: (val.minFailingPeriodsToAlert) ?? 1,
            numberOfEvaluationPeriods: (val.numberOfEvaluationPeriods) ?? 1,
        };
    }

    /**
     * Dimension splitting and filtering definition
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
     * The rule criteria that defines the conditions of the scheduled query rule.
     */
    export interface ScheduledQueryRuleCriteriaResponse {
        /**
         * A list of conditions to evaluate against the specified scopes
         */
        allOf?: ConditionResponse[];
    }
