export const Role = {
    Noc: "Noc",
    Policy: "Policy",
    Technical: "Technical",
    Service: "Service",
    Escalation: "Escalation",
    Other: "Other",
} as const;

/**
 * The role of the contact.
 */
export type Role = (typeof Role)[keyof typeof Role];

export const ValidationState = {
    None: "None",
    Pending: "Pending",
    Approved: "Approved",
    Failed: "Failed",
} as const;

/**
 * The validation state of the ASN associated with the peer.
 */
export type ValidationState = (typeof ValidationState)[keyof typeof ValidationState];
