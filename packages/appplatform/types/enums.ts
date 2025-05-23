export const ApiPortalApiTryOutEnabledState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Indicates whether the API try-out feature is enabled or disabled. When enabled, users can try out the API by sending requests and viewing responses in API portal. When disabled, users cannot try out the API.
 */
export type ApiPortalApiTryOutEnabledState = (typeof ApiPortalApiTryOutEnabledState)[keyof typeof ApiPortalApiTryOutEnabledState];

export const ApmType = {
    ApplicationInsights: "ApplicationInsights",
    AppDynamics: "AppDynamics",
    Dynatrace: "Dynatrace",
    NewRelic: "NewRelic",
    ElasticAPM: "ElasticAPM",
} as const;

/**
 * Type of application performance monitoring
 */
export type ApmType = (typeof ApmType)[keyof typeof ApmType];

export const BackendProtocol = {
    GRPC: "GRPC",
    Default: "Default",
} as const;

/**
 * How ingress should communicate with this app backend service.
 */
export type BackendProtocol = (typeof BackendProtocol)[keyof typeof BackendProtocol];

export const BindingType = {
    ApplicationInsights: "ApplicationInsights",
    ApacheSkyWalking: "ApacheSkyWalking",
    AppDynamics: "AppDynamics",
    Dynatrace: "Dynatrace",
    NewRelic: "NewRelic",
    ElasticAPM: "ElasticAPM",
    CACertificates: "CACertificates",
} as const;

/**
 * Buildpack Binding Type
 */
export type BindingType = (typeof BindingType)[keyof typeof BindingType];

export const ConfigServerEnabledState = {
    /**
     * Enable the config server.
     */
    Enabled: "Enabled",
    /**
     * Disable the config server.
     */
    Disabled: "Disabled",
} as const;

/**
 * Enabled state of the config server. This is only used in Consumption tier.
 */
export type ConfigServerEnabledState = (typeof ConfigServerEnabledState)[keyof typeof ConfigServerEnabledState];

export const ConfigurationServiceGeneration = {
    Gen1: "Gen1",
    Gen2: "Gen2",
} as const;

/**
 * The generation of the Application Configuration Service.
 */
export type ConfigurationServiceGeneration = (typeof ConfigurationServiceGeneration)[keyof typeof ConfigurationServiceGeneration];

export const CustomizedAcceleratorType = {
    Accelerator: "Accelerator",
    Fragment: "Fragment",
} as const;

/**
 * Type of the customized accelerator.
 */
export type CustomizedAcceleratorType = (typeof CustomizedAcceleratorType)[keyof typeof CustomizedAcceleratorType];

export const DevToolPortalFeatureState = {
    /**
     * Enable the plugin in Dev Tool Portal.
     */
    Enabled: "Enabled",
    /**
     * Disable the plugin in Dev Tool Portal.
     */
    Disabled: "Disabled",
} as const;

/**
 * State of the plugin
 */
export type DevToolPortalFeatureState = (typeof DevToolPortalFeatureState)[keyof typeof DevToolPortalFeatureState];

export const Frequency = {
    Weekly: "Weekly",
} as const;

/**
 * The frequency to run the maintenance job
 */
export type Frequency = (typeof Frequency)[keyof typeof Frequency];

export const GatewayCertificateVerification = {
    /**
     * Enable certificate verification in Spring Cloud Gateway.
     */
    Enabled: "Enabled",
    /**
     * Disable certificate verification in Spring Cloud Gateway.
     */
    Disabled: "Disabled",
} as const;

/**
 * Whether to enable certificate verification or not
 */
export type GatewayCertificateVerification = (typeof GatewayCertificateVerification)[keyof typeof GatewayCertificateVerification];

export const GatewayRouteConfigProtocol = {
    HTTP: "HTTP",
    HTTPS: "HTTPS",
} as const;

/**
 * Protocol of routed Azure Spring Apps applications.
 */
export type GatewayRouteConfigProtocol = (typeof GatewayRouteConfigProtocol)[keyof typeof GatewayRouteConfigProtocol];

export const GitImplementation = {
    Go_git: "go-git",
    Libgit2: "libgit2",
} as const;

/**
 * Git libraries used to support various repository providers
 */
export type GitImplementation = (typeof GitImplementation)[keyof typeof GitImplementation];

export const HTTPSchemeType = {
    HTTP: "HTTP",
    HTTPS: "HTTPS",
} as const;

/**
 * Scheme to use for connecting to the host. Defaults to HTTP.
 *
 * Possible enum values:
 *  - `"HTTP"` means that the scheme used will be http://
 *  - `"HTTPS"` means that the scheme used will be https://
 */
export type HTTPSchemeType = (typeof HTTPSchemeType)[keyof typeof HTTPSchemeType];

export const KeyVaultCertificateAutoSync = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * Indicates whether to automatically synchronize certificate from key vault or not.
 */
export type KeyVaultCertificateAutoSync = (typeof KeyVaultCertificateAutoSync)[keyof typeof KeyVaultCertificateAutoSync];

export const ManagedIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * Type of the managed identity
 */
export type ManagedIdentityType = (typeof ManagedIdentityType)[keyof typeof ManagedIdentityType];

export const ProbeActionType = {
    HTTPGetAction: "HTTPGetAction",
    TCPSocketAction: "TCPSocketAction",
    ExecAction: "ExecAction",
} as const;

/**
 * The type of the action to take to perform the health check.
 */
export type ProbeActionType = (typeof ProbeActionType)[keyof typeof ProbeActionType];

export const SessionAffinity = {
    Cookie: "Cookie",
    None: "None",
} as const;

/**
 * Type of the affinity, set this to Cookie to enable session affinity.
 */
export type SessionAffinity = (typeof SessionAffinity)[keyof typeof SessionAffinity];

export const StorageType = {
    StorageAccount: "StorageAccount",
} as const;

/**
 * The type of the storage.
 */
export type StorageType = (typeof StorageType)[keyof typeof StorageType];

export const TestEndpointAuthState = {
    /**
     * Enable test endpoint auth.
     */
    Enabled: "Enabled",
    /**
     * Disable test endpoint auth
     */
    Disabled: "Disabled",
} as const;

/**
 * State of test endpoint auth.
 */
export type TestEndpointAuthState = (typeof TestEndpointAuthState)[keyof typeof TestEndpointAuthState];

export const TriggerType = {
    Manual: "Manual",
} as const;

/**
 * Type of job trigger
 */
export type TriggerType = (typeof TriggerType)[keyof typeof TriggerType];

export const Type = {
    AzureFileVolume: "AzureFileVolume",
} as const;

/**
 * The type of the underlying resource to mount as a persistent disk.
 */
export type Type = (typeof Type)[keyof typeof Type];

export const WeekDay = {
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
    Sunday: "Sunday",
} as const;

/**
 * The day to run the maintenance job
 */
export type WeekDay = (typeof WeekDay)[keyof typeof WeekDay];
