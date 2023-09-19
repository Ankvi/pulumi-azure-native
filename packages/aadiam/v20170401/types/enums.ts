export const Category = {
    AuditLogs: "AuditLogs",
    SignInLogs: "SignInLogs",
} as const;

export type Category = (typeof Category)[keyof typeof Category];
