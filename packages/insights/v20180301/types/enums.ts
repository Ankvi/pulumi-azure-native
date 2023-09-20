export const AggregationTypeEnum = {
    Average: "Average",
    Count: "Count",
    Minimum: "Minimum",
    Maximum: "Maximum",
    Total: "Total",
} as const;

export type AggregationTypeEnum = (typeof AggregationTypeEnum)[keyof typeof AggregationTypeEnum];

export const CriterionType = {
    StaticThresholdCriterion: "StaticThresholdCriterion",
    DynamicThresholdCriterion: "DynamicThresholdCriterion",
} as const;

export type CriterionType = (typeof CriterionType)[keyof typeof CriterionType];

export const DynamicThresholdOperator = {
    GreaterThan: "GreaterThan",
    LessThan: "LessThan",
    GreaterOrLessThan: "GreaterOrLessThan",
} as const;

export type DynamicThresholdOperator = (typeof DynamicThresholdOperator)[keyof typeof DynamicThresholdOperator];

export const DynamicThresholdSensitivity = {
    Low: "Low",
    Medium: "Medium",
    High: "High",
} as const;

export type DynamicThresholdSensitivity = (typeof DynamicThresholdSensitivity)[keyof typeof DynamicThresholdSensitivity];

export const Odatatype = {
    Microsoft_Azure_Monitor_SingleResourceMultipleMetricCriteria: "Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria",
    Microsoft_Azure_Monitor_MultipleResourceMultipleMetricCriteria: "Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria",
    Microsoft_Azure_Monitor_WebtestLocationAvailabilityCriteria: "Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria",
} as const;

export type Odatatype = (typeof Odatatype)[keyof typeof Odatatype];

export const Operator = {
    Equals: "Equals",
    GreaterThan: "GreaterThan",
    GreaterThanOrEqual: "GreaterThanOrEqual",
    LessThan: "LessThan",
    LessThanOrEqual: "LessThanOrEqual",
} as const;

export type Operator = (typeof Operator)[keyof typeof Operator];