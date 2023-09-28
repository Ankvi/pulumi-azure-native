export const ClientCredentialMethod = {
    ClientSecretPost: "ClientSecretPost",
} as const;

/**
 * The method that should be used to authenticate the user.
 */
export type ClientCredentialMethod = (typeof ClientCredentialMethod)[keyof typeof ClientCredentialMethod];

export const CookieExpirationConvention = {
    FixedTime: "FixedTime",
    IdentityProviderDerived: "IdentityProviderDerived",
} as const;

/**
 * The convention used when determining the session cookie's expiration.
 */
export type CookieExpirationConvention = (typeof CookieExpirationConvention)[keyof typeof CookieExpirationConvention];

export const ForwardProxyConvention = {
    NoProxy: "NoProxy",
    Standard: "Standard",
    Custom: "Custom",
} as const;

/**
 * The convention used to determine the url of the request made.
 */
export type ForwardProxyConvention = (typeof ForwardProxyConvention)[keyof typeof ForwardProxyConvention];

export const ManagedServiceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

/**
 * Type of managed service identity.
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const StagingEnvironmentPolicy = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * State indicating whether staging environments are allowed or not allowed for a static web app.
 */
export type StagingEnvironmentPolicy = (typeof StagingEnvironmentPolicy)[keyof typeof StagingEnvironmentPolicy];

export const UnauthenticatedClientActionV2 = {
    RedirectToLoginPage: "RedirectToLoginPage",
    AllowAnonymous: "AllowAnonymous",
    Return401: "Return401",
    Return403: "Return403",
} as const;

/**
 * The action to take when an unauthenticated client attempts to access the app.
 */
export type UnauthenticatedClientActionV2 = (typeof UnauthenticatedClientActionV2)[keyof typeof UnauthenticatedClientActionV2];
