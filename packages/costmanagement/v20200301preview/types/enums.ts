export const CostAllocationPolicyType = {
    FixedProportion: "FixedProportion",
} as const;

/**
 * Method of cost allocation for the rule
 */
export type CostAllocationPolicyType = (typeof CostAllocationPolicyType)[keyof typeof CostAllocationPolicyType];

export const CostAllocationResourceType = {
    /**
     * Indicates an Azure dimension such as a subscription id or resource group name is being used for allocation.
     */
    Dimension: "Dimension",
    /**
     * Allocates cost based on Azure Tag key value pairs.
     */
    Tag: "Tag",
} as const;

/**
 * Type of resources contained in this cost allocation rule
 */
export type CostAllocationResourceType = (typeof CostAllocationResourceType)[keyof typeof CostAllocationResourceType];

export const RuleStatus = {
    /**
     * Rule is saved but not used to allocate costs.
     */
    NotActive: "NotActive",
    /**
     * Rule is saved and impacting cost allocation.
     */
    Active: "Active",
    /**
     * Rule is saved and cost allocation is being updated. Readonly value that cannot be submitted in a put request.
     */
    Processing: "Processing",
} as const;

/**
 * Status of the rule
 */
export type RuleStatus = (typeof RuleStatus)[keyof typeof RuleStatus];
