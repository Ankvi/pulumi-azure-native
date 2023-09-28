export const ConnectorBillingModel = {
    Trial: "trial",
    AutoUpgrade: "autoUpgrade",
    Premium: "premium",
    Expired: "expired",
} as const;

/**
 * Connector billing model
 */
export type ConnectorBillingModel = (typeof ConnectorBillingModel)[keyof typeof ConnectorBillingModel];
