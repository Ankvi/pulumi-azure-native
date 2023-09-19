export const Category = {
    AuditLogs: "AuditLogs",
    SignInLogs: "SignInLogs",
} as const;

export type Category = (typeof Category)[keyof typeof Category];

export const PrivateEndpointServiceConnectionStatus = {
    Approved: "Approved",
    Pending: "Pending",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];
