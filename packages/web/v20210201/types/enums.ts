export const ClientCredentialMethod = {
    ClientSecretPost: "ClientSecretPost",
} as const;

export type ClientCredentialMethod = (typeof ClientCredentialMethod)[keyof typeof ClientCredentialMethod];

export const CookieExpirationConvention = {
    FixedTime: "FixedTime",
    IdentityProviderDerived: "IdentityProviderDerived",
} as const;

export type CookieExpirationConvention = (typeof CookieExpirationConvention)[keyof typeof CookieExpirationConvention];

export const ForwardProxyConvention = {
    NoProxy: "NoProxy",
    Standard: "Standard",
    Custom: "Custom",
} as const;

export type ForwardProxyConvention = (typeof ForwardProxyConvention)[keyof typeof ForwardProxyConvention];

export const ManagedServiceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const StagingEnvironmentPolicy = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type StagingEnvironmentPolicy = (typeof StagingEnvironmentPolicy)[keyof typeof StagingEnvironmentPolicy];

export const UnauthenticatedClientActionV2 = {
    RedirectToLoginPage: "RedirectToLoginPage",
    AllowAnonymous: "AllowAnonymous",
    Return401: "Return401",
    Return403: "Return403",
} as const;

export type UnauthenticatedClientActionV2 = (typeof UnauthenticatedClientActionV2)[keyof typeof UnauthenticatedClientActionV2];
