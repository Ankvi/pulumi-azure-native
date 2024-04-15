export const GroupingIdType = {
    ServiceTreeId: "ServiceTreeId",
    BillingId: "BillingId",
} as const;

/**
 * GroupingId type. It is a required property. More types of groupIds can be supported in future.
 */
export type GroupingIdType = (typeof GroupingIdType)[keyof typeof GroupingIdType];
