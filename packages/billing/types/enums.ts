export const BillingManagementTenantState = {
    Other: "Other",
    NotAllowed: "NotAllowed",
    Active: "Active",
    Revoked: "Revoked",
} as const;

/**
 * The state determines whether users from the associated tenant can be assigned roles for commerce activities like viewing and downloading invoices, managing payments, and making purchases.
 */
export type BillingManagementTenantState = (typeof BillingManagementTenantState)[keyof typeof BillingManagementTenantState];

export const InvoiceSectionState = {
    Other: "Other",
    Active: "Active",
    Deleted: "Deleted",
    Disabled: "Disabled",
    UnderReview: "UnderReview",
    Warned: "Warned",
    Restricted: "Restricted",
} as const;

/**
 * Identifies the status of an invoice section.
 */
export type InvoiceSectionState = (typeof InvoiceSectionState)[keyof typeof InvoiceSectionState];

export const InvoiceSectionStateReasonCode = {
    Other: "Other",
    PastDue: "PastDue",
    UnusualActivity: "UnusualActivity",
    SpendingLimitReached: "SpendingLimitReached",
    SpendingLimitExpired: "SpendingLimitExpired",
} as const;

/**
 * Reason for the specified invoice section status.
 */
export type InvoiceSectionStateReasonCode = (typeof InvoiceSectionStateReasonCode)[keyof typeof InvoiceSectionStateReasonCode];

export const ProvisioningTenantState = {
    Other: "Other",
    NotRequested: "NotRequested",
    Active: "Active",
    Pending: "Pending",
    BillingRequestExpired: "BillingRequestExpired",
    BillingRequestDeclined: "BillingRequestDeclined",
    Revoked: "Revoked",
} as const;

/**
 * The state determines whether subscriptions and licenses can be provisioned in the associated tenant. It can be set to 'Pending' to initiate a billing request.
 */
export type ProvisioningTenantState = (typeof ProvisioningTenantState)[keyof typeof ProvisioningTenantState];