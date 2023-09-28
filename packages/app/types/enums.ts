export const AccessMode = {
    ReadOnly: "ReadOnly",
    ReadWrite: "ReadWrite",
} as const;

/**
 * Access mode for storage
 */
export type AccessMode = (typeof AccessMode)[keyof typeof AccessMode];

export const Action = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

/**
 * Allow or Deny rules to determine for incoming IP. Note: Rules can only consist of ALL Allow or ALL Deny
 */
export type Action = (typeof Action)[keyof typeof Action];

export const ActiveRevisionsMode = {
    Multiple: "Multiple",
    Single: "Single",
} as const;

/**
 * ActiveRevisionsMode controls how active revisions are handled for the Container app:
 * <list><item>Multiple: multiple revisions can be active.</item><item>Single: Only one revision can be active at a time. Revision weights can not be used in this mode. If no value if provided, this is the default.</item></list>
 */
export type ActiveRevisionsMode = (typeof ActiveRevisionsMode)[keyof typeof ActiveRevisionsMode];

export const AppProtocol = {
    Http: "http",
    Grpc: "grpc",
} as const;

/**
 * Tells Dapr which protocol your application is using. Valid options are http and grpc. Default is http
 */
export type AppProtocol = (typeof AppProtocol)[keyof typeof AppProtocol];

export const BindingType = {
    Disabled: "Disabled",
    SniEnabled: "SniEnabled",
} as const;

/**
 * Custom Domain binding type.
 */
export type BindingType = (typeof BindingType)[keyof typeof BindingType];

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

export const ExtendedLocationTypes = {
    CustomLocation: "CustomLocation",
} as const;

/**
 * The type of the extended location.
 */
export type ExtendedLocationTypes = (typeof ExtendedLocationTypes)[keyof typeof ExtendedLocationTypes];

export const ForwardProxyConvention = {
    NoProxy: "NoProxy",
    Standard: "Standard",
    Custom: "Custom",
} as const;

/**
 * The convention used to determine the url of the request made.
 */
export type ForwardProxyConvention = (typeof ForwardProxyConvention)[keyof typeof ForwardProxyConvention];

export const IngressClientCertificateMode = {
    Ignore: "ignore",
    Accept: "accept",
    Require: "require",
} as const;

/**
 * Client certificate mode for mTLS authentication. Ignore indicates server drops client certificate on forwarding. Accept indicates server forwards client certificate but does not require a client certificate. Require indicates server requires a client certificate.
 */
export type IngressClientCertificateMode = (typeof IngressClientCertificateMode)[keyof typeof IngressClientCertificateMode];

export const IngressTransportMethod = {
    Auto: "auto",
    Http: "http",
    Http2: "http2",
    Tcp: "tcp",
} as const;

/**
 * Ingress transport protocol
 */
export type IngressTransportMethod = (typeof IngressTransportMethod)[keyof typeof IngressTransportMethod];

export const LogLevel = {
    Info: "info",
    Debug: "debug",
    Warn: "warn",
    Error: "error",
} as const;

/**
 * Sets the log level for the Dapr sidecar. Allowed values are debug, info, warn, error. Default is info.
 */
export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

export const ManagedCertificateDomainControlValidation = {
    CNAME: "CNAME",
    HTTP: "HTTP",
    TXT: "TXT",
} as const;

/**
 * Selected type of domain control validation for managed certificates.
 */
export type ManagedCertificateDomainControlValidation = (typeof ManagedCertificateDomainControlValidation)[keyof typeof ManagedCertificateDomainControlValidation];

export const ManagedEnvironmentOutBoundType = {
    LoadBalancer: "LoadBalancer",
    UserDefinedRouting: "UserDefinedRouting",
} as const;

/**
 * Outbound type for the cluster
 */
export type ManagedEnvironmentOutBoundType = (typeof ManagedEnvironmentOutBoundType)[keyof typeof ManagedEnvironmentOutBoundType];

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

export const Scheme = {
    HTTP: "HTTP",
    HTTPS: "HTTPS",
} as const;

/**
 * Scheme to use for connecting to the host. Defaults to HTTP.
 */
export type Scheme = (typeof Scheme)[keyof typeof Scheme];

export const SkuName = {
    /**
     * Consumption SKU of Managed Environment.
     */
    Consumption: "Consumption",
    /**
     * Premium SKU of Managed Environment.
     */
    Premium: "Premium",
} as const;

/**
 * Name of the Sku.
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const StorageType = {
    AzureFile: "AzureFile",
    EmptyDir: "EmptyDir",
    Secret: "Secret",
} as const;

/**
 * Storage type for the volume. If not provided, use EmptyDir.
 */
export type StorageType = (typeof StorageType)[keyof typeof StorageType];

export const TriggerType = {
    Schedule: "Schedule",
    Event: "Event",
    Manual: "Manual",
} as const;

/**
 * Trigger type of the job
 */
export type TriggerType = (typeof TriggerType)[keyof typeof TriggerType];

export const Type = {
    Liveness: "Liveness",
    Readiness: "Readiness",
    Startup: "Startup",
} as const;

/**
 * The type of probe.
 */
export type Type = (typeof Type)[keyof typeof Type];

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
