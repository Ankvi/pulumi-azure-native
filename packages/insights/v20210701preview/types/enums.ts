export const AccessMode = {
    Open: "Open",
    PrivateOnly: "PrivateOnly",
} as const;

export type AccessMode = (typeof AccessMode)[keyof typeof AccessMode];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];
