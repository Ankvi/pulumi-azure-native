export const Category = {
    AuditLogs: "AuditLogs",
    SignInLogs: "SignInLogs",
} as const;

/**
 * Name of a Diagnostic Log category for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation.
 */
export type Category = (typeof Category)[keyof typeof Category];
