export const ConnectorBillingModel = {
    Trial: "trial",
    AutoUpgrade: "autoUpgrade",
    Premium: "premium",
    Expired: "expired",
} as const;

export type ConnectorBillingModel = (typeof ConnectorBillingModel)[keyof typeof ConnectorBillingModel];
