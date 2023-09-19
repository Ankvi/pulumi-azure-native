export const GroupingIdType = {
    ServiceTreeId: "ServiceTreeId",
    BillingId: "BillingId",
} as const;

export type GroupingIdType = (typeof GroupingIdType)[keyof typeof GroupingIdType];
