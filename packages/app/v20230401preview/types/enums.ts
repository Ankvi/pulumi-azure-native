export const AccessMode = {
    ReadOnly: "ReadOnly",
    ReadWrite: "ReadWrite",
} as const;

export type AccessMode = (typeof AccessMode)[keyof typeof AccessMode];

export const Action = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

export type Action = (typeof Action)[keyof typeof Action];

export const ActiveRevisionsMode = {
    Multiple: "Multiple",
    Single: "Single",
} as const;

export type ActiveRevisionsMode = (typeof ActiveRevisionsMode)[keyof typeof ActiveRevisionsMode];

export const Affinity = {
    Sticky: "sticky",
    None: "none",
} as const;

export type Affinity = (typeof Affinity)[keyof typeof Affinity];

export const AppProtocol = {
    Http: "http",
    Grpc: "grpc",
} as const;

export type AppProtocol = (typeof AppProtocol)[keyof typeof AppProtocol];

export const BindingType = {
    Disabled: "Disabled",
    SniEnabled: "SniEnabled",
} as const;

export type BindingType = (typeof BindingType)[keyof typeof BindingType];

export const ClientCredentialMethod = {
    ClientSecretPost: "ClientSecretPost",
} as const;

export type ClientCredentialMethod = (typeof ClientCredentialMethod)[keyof typeof ClientCredentialMethod];

export const CookieExpirationConvention = {
    FixedTime: "FixedTime",
    IdentityProviderDerived: "IdentityProviderDerived",
} as const;

export type CookieExpirationConvention = (typeof CookieExpirationConvention)[keyof typeof CookieExpirationConvention];

export const ExtendedLocationTypes = {
    CustomLocation: "CustomLocation",
} as const;

export type ExtendedLocationTypes = (typeof ExtendedLocationTypes)[keyof typeof ExtendedLocationTypes];

export const ForwardProxyConvention = {
    NoProxy: "NoProxy",
    Standard: "Standard",
    Custom: "Custom",
} as const;

export type ForwardProxyConvention = (typeof ForwardProxyConvention)[keyof typeof ForwardProxyConvention];

export const IngressClientCertificateMode = {
    Ignore: "ignore",
    Accept: "accept",
    Require: "require",
} as const;

export type IngressClientCertificateMode = (typeof IngressClientCertificateMode)[keyof typeof IngressClientCertificateMode];

export const IngressTransportMethod = {
    Auto: "auto",
    Http: "http",
    Http2: "http2",
    Tcp: "tcp",
} as const;

export type IngressTransportMethod = (typeof IngressTransportMethod)[keyof typeof IngressTransportMethod];

export const LogLevel = {
    Info: "info",
    Debug: "debug",
    Warn: "warn",
    Error: "error",
} as const;

export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

export const ManagedCertificateDomainControlValidation = {
    CNAME: "CNAME",
    HTTP: "HTTP",
    TXT: "TXT",
} as const;

export type ManagedCertificateDomainControlValidation = (typeof ManagedCertificateDomainControlValidation)[keyof typeof ManagedCertificateDomainControlValidation];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const Scheme = {
    HTTP: "HTTP",
    HTTPS: "HTTPS",
} as const;

export type Scheme = (typeof Scheme)[keyof typeof Scheme];

export const StorageType = {
    AzureFile: "AzureFile",
    EmptyDir: "EmptyDir",
    Secret: "Secret",
} as const;

export type StorageType = (typeof StorageType)[keyof typeof StorageType];

export const TriggerType = {
    Schedule: "Schedule",
    Event: "Event",
    Manual: "Manual",
} as const;

export type TriggerType = (typeof TriggerType)[keyof typeof TriggerType];

export const Type = {
    Liveness: "Liveness",
    Readiness: "Readiness",
    Startup: "Startup",
} as const;

export type Type = (typeof Type)[keyof typeof Type];

export const UnauthenticatedClientActionV2 = {
    RedirectToLoginPage: "RedirectToLoginPage",
    AllowAnonymous: "AllowAnonymous",
    Return401: "Return401",
    Return403: "Return403",
} as const;

export type UnauthenticatedClientActionV2 = (typeof UnauthenticatedClientActionV2)[keyof typeof UnauthenticatedClientActionV2];
