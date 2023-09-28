export const AuthCredentialsKind = {
    OAuthClientCredentials: "OAuthClientCredentials",
    ApiKeyAuthCredentials: "ApiKeyAuthCredentials",
} as const;

/**
 * Enum for different types of AuthCredentials supported.
 */
export type AuthCredentialsKind = (typeof AuthCredentialsKind)[keyof typeof AuthCredentialsKind];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

/**
 * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
 */
export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Property to allow or block public traffic for an Azure Data Manager For Agriculture resource.
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * The identity type.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];
