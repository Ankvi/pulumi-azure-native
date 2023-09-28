export const FeatureStatus = {
    On: "on",
    Off: "off",
} as const;

/**
 * Offline data transfer
 */
export type FeatureStatus = (typeof FeatureStatus)[keyof typeof FeatureStatus];

export const IncomingTrafficPolicy = {
    AllowAllTraffic: "AllowAllTraffic",
    AllowVirtualNetworksOnly: "AllowVirtualNetworksOnly",
} as const;

/**
 * Incoming Traffic Policy
 */
export type IncomingTrafficPolicy = (typeof IncomingTrafficPolicy)[keyof typeof IncomingTrafficPolicy];

export const InitialDownloadPolicy = {
    NamespaceOnly: "NamespaceOnly",
    NamespaceThenModifiedFiles: "NamespaceThenModifiedFiles",
    AvoidTieredFiles: "AvoidTieredFiles",
} as const;

/**
 * Policy for how namespace and files are recalled during FastDr.
 */
export type InitialDownloadPolicy = (typeof InitialDownloadPolicy)[keyof typeof InitialDownloadPolicy];

export const InitialUploadPolicy = {
    ServerAuthoritative: "ServerAuthoritative",
    Merge: "Merge",
} as const;

/**
 * Policy for how the initial upload sync session is performed.
 */
export type InitialUploadPolicy = (typeof InitialUploadPolicy)[keyof typeof InitialUploadPolicy];

export const LocalCacheMode = {
    DownloadNewAndModifiedFiles: "DownloadNewAndModifiedFiles",
    UpdateLocallyCachedFiles: "UpdateLocallyCachedFiles",
} as const;

/**
 * Policy for enabling follow-the-sun business models: link local cache to cloud behavior to pre-populate before local access.
 */
export type LocalCacheMode = (typeof LocalCacheMode)[keyof typeof LocalCacheMode];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

/**
 * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
 */
export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];
