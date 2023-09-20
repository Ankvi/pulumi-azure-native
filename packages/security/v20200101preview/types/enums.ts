export const AuthenticationType = {
    /**
     * AWS cloud account connector user credentials authentication
     */
    AwsCreds: "awsCreds",
    /**
     * AWS account connector assume role authentication
     */
    AwsAssumeRole: "awsAssumeRole",
    /**
     * GCP account connector service to service authentication
     */
    GcpCredentials: "gcpCredentials",
} as const;

export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

export const AutoProvision = {
    /**
     * Install missing Azure Arc agents on machines automatically
     */
    On: "On",
    /**
     * Do not install Azure Arc agent on the machines automatically
     */
    Off: "Off",
} as const;

export type AutoProvision = (typeof AutoProvision)[keyof typeof AutoProvision];

export const MinimalSeverity = {
    /**
     * Get notifications on new alerts with High severity
     */
    High: "High",
    /**
     * Get notifications on new alerts with medium or high severity
     */
    Medium: "Medium",
    /**
     * Don't get notifications on new alerts with low, medium or high severity
     */
    Low: "Low",
} as const;

export type MinimalSeverity = (typeof MinimalSeverity)[keyof typeof MinimalSeverity];

export const Roles = {
    /**
     * If enabled, send notification on new alerts to the account admins
     */
    AccountAdmin: "AccountAdmin",
    /**
     * If enabled, send notification on new alerts to the service admins
     */
    ServiceAdmin: "ServiceAdmin",
    /**
     * If enabled, send notification on new alerts to the subscription owners
     */
    Owner: "Owner",
    /**
     * If enabled, send notification on new alerts to the subscription contributors
     */
    Contributor: "Contributor",
} as const;

export type Roles = (typeof Roles)[keyof typeof Roles];

export const State = {
    /**
     * Send notification on new alerts to the subscription's admins
     */
    On: "On",
    /**
     * Don't send notification on new alerts to the subscription's admins
     */
    Off: "Off",
} as const;

export type State = (typeof State)[keyof typeof State];