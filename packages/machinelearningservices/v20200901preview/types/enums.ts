export const EncryptionStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Indicates whether or not the encryption is enabled for the workspace.
 */
export type EncryptionStatus = (typeof EncryptionStatus)[keyof typeof EncryptionStatus];

export const ImageAnnotationType = {
    Classification: "Classification",
    BoundingBox: "BoundingBox",
    InstanceSegmentation: "InstanceSegmentation",
} as const;

/**
 * Annotation type of image labeling tasks.
 */
export type ImageAnnotationType = (typeof ImageAnnotationType)[keyof typeof ImageAnnotationType];

export const LinkedServiceLinkType = {
    Synapse: "Synapse",
} as const;

/**
 * Type of the link target.
 */
export type LinkedServiceLinkType = (typeof LinkedServiceLinkType)[keyof typeof LinkedServiceLinkType];

export const MediaType = {
    Image: "Image",
    Text: "Text",
} as const;

/**
 * Media type of data asset.
 */
export type MediaType = (typeof MediaType)[keyof typeof MediaType];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
    Timeout: "Timeout",
} as const;

/**
 * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
 */
export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
    UserAssigned: "UserAssigned",
    None: "None",
} as const;

/**
 * The identity type.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];
