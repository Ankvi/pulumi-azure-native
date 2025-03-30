export const ProcessNameFilterOperator = {
    /**
     * Operator to include items in the result
     */
    Contains: "contains",
    /**
     * Operator to exclude items in the result
     */
    NotContains: "notContains",
} as const;

/**
 * Operator for process name filter
 */
export type ProcessNameFilterOperator = (typeof ProcessNameFilterOperator)[keyof typeof ProcessNameFilterOperator];

export const SourceType = {
    /**
     * OffAzure source type
     */
    OffAzure: "OffAzure",
} as const;

/**
 * Source type of Discovery Source resource.
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];
