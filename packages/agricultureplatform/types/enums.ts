export const AuthCredentialsKind = {
    /**
     * OAuth Client Credential type
     */
    OAuthClientCredentials: "OAuthClientCredentials",
    /**
     * API Key Auth Credential type
     */
    ApiKeyAuthCredentials: "ApiKeyAuthCredentials",
} as const;

/**
 * Type of credential.
 */
export type AuthCredentialsKind = (typeof AuthCredentialsKind)[keyof typeof AuthCredentialsKind];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const SkuTier = {
    Free: "Free",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

/**
 * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
 */
export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];
