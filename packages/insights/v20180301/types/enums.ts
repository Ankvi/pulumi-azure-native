export const AggregationTypeEnum = {
    Average: "Average",
    Count: "Count",
    Minimum: "Minimum",
    Maximum: "Maximum",
    Total: "Total",
} as const;

/**
 * the criteria time aggregation types.
 */
export type AggregationTypeEnum = (typeof AggregationTypeEnum)[keyof typeof AggregationTypeEnum];

export const CriterionType = {
    StaticThresholdCriterion: "StaticThresholdCriterion",
    DynamicThresholdCriterion: "DynamicThresholdCriterion",
} as const;

/**
 * Specifies the type of threshold criteria
 */
export type CriterionType = (typeof CriterionType)[keyof typeof CriterionType];

export const DynamicThresholdOperator = {
    GreaterThan: "GreaterThan",
    LessThan: "LessThan",
    GreaterOrLessThan: "GreaterOrLessThan",
} as const;

/**
 * The operator used to compare the metric value against the threshold.
 */
export type DynamicThresholdOperator = (typeof DynamicThresholdOperator)[keyof typeof DynamicThresholdOperator];

export const DynamicThresholdSensitivity = {
    Low: "Low",
    Medium: "Medium",
    High: "High",
} as const;

/**
 * The extent of deviation required to trigger an alert. This will affect how tight the threshold is to the metric series pattern.
 */
export type DynamicThresholdSensitivity = (typeof DynamicThresholdSensitivity)[keyof typeof DynamicThresholdSensitivity];

export const Odatatype = {
    Microsoft_Azure_Monitor_SingleResourceMultipleMetricCriteria: "Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria",
    Microsoft_Azure_Monitor_MultipleResourceMultipleMetricCriteria: "Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria",
    Microsoft_Azure_Monitor_WebtestLocationAvailabilityCriteria: "Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria",
} as const;

/**
 * specifies the type of the alert criteria.
 */
export type Odatatype = (typeof Odatatype)[keyof typeof Odatatype];

export const Operator = {
    Equals: "Equals",
    GreaterThan: "GreaterThan",
    GreaterThanOrEqual: "GreaterThanOrEqual",
    LessThan: "LessThan",
    LessThanOrEqual: "LessThanOrEqual",
} as const;

/**
 * the criteria operator.
 */
export type Operator = (typeof Operator)[keyof typeof Operator];
