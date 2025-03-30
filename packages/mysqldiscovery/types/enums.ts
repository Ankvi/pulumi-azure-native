export const Edition = {
    Community: "Community",
    Enterprise: "Enterprise",
} as const;

/**
 * mysql server edition.
 */
export type Edition = (typeof Edition)[keyof typeof Edition];

export const ProvisioningState = {
    Unknown: "Unknown",
    Succeeded: "Succeeded",
    Failed: "Failed",
    Canceled: "Canceled",
    Creating: "Creating",
    Deleting: "Deleting",
    Updating: "Updating",
} as const;

/**
 * Gets or sets the provisioning state.
 */
export type ProvisioningState = (typeof ProvisioningState)[keyof typeof ProvisioningState];

export const SupportStatus = {
    OutOfSupport: "OutOfSupport",
    Extended: "Extended",
    Mainstream: "Mainstream",
} as const;

/**
 * mysql version support status.
 */
export type SupportStatus = (typeof SupportStatus)[keyof typeof SupportStatus];
