export const FeatureStatus = {
    On: "on",
    Off: "off",
} as const;

export type FeatureStatus = (typeof FeatureStatus)[keyof typeof FeatureStatus];

export const IncomingTrafficPolicy = {
    AllowAllTraffic: "AllowAllTraffic",
    AllowVirtualNetworksOnly: "AllowVirtualNetworksOnly",
} as const;

export type IncomingTrafficPolicy = (typeof IncomingTrafficPolicy)[keyof typeof IncomingTrafficPolicy];

export const InitialDownloadPolicy = {
    NamespaceOnly: "NamespaceOnly",
    NamespaceThenModifiedFiles: "NamespaceThenModifiedFiles",
    AvoidTieredFiles: "AvoidTieredFiles",
} as const;

export type InitialDownloadPolicy = (typeof InitialDownloadPolicy)[keyof typeof InitialDownloadPolicy];

export const InitialUploadPolicy = {
    ServerAuthoritative: "ServerAuthoritative",
    Merge: "Merge",
} as const;

export type InitialUploadPolicy = (typeof InitialUploadPolicy)[keyof typeof InitialUploadPolicy];

export const LocalCacheMode = {
    DownloadNewAndModifiedFiles: "DownloadNewAndModifiedFiles",
    UpdateLocallyCachedFiles: "UpdateLocallyCachedFiles",
} as const;

export type LocalCacheMode = (typeof LocalCacheMode)[keyof typeof LocalCacheMode];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];