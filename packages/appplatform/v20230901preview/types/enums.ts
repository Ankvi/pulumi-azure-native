export const ApmType = {
    ApplicationInsights: "ApplicationInsights",
    AppDynamics: "AppDynamics",
    Dynatrace: "Dynatrace",
    NewRelic: "NewRelic",
    ElasticAPM: "ElasticAPM",
} as const;

export type ApmType = (typeof ApmType)[keyof typeof ApmType];

export const BackendProtocol = {
    GRPC: "GRPC",
    Default: "Default",
} as const;

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

export type ConfigServerEnabledState = (typeof ConfigServerEnabledState)[keyof typeof ConfigServerEnabledState];

export const ConfigurationServiceGeneration = {
    Gen1: "Gen1",
    Gen2: "Gen2",
} as const;

export type ConfigurationServiceGeneration = (typeof ConfigurationServiceGeneration)[keyof typeof ConfigurationServiceGeneration];

export const CustomizedAcceleratorType = {
    Accelerator: "Accelerator",
    Fragment: "Fragment",
} as const;

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

export type DevToolPortalFeatureState = (typeof DevToolPortalFeatureState)[keyof typeof DevToolPortalFeatureState];

export const Frequency = {
    Weekly: "Weekly",
} as const;

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

export type GatewayCertificateVerification = (typeof GatewayCertificateVerification)[keyof typeof GatewayCertificateVerification];

export const GatewayRouteConfigProtocol = {
    HTTP: "HTTP",
    HTTPS: "HTTPS",
} as const;

export type GatewayRouteConfigProtocol = (typeof GatewayRouteConfigProtocol)[keyof typeof GatewayRouteConfigProtocol];

export const GitImplementation = {
    Go_git: "go-git",
    Libgit2: "libgit2",
} as const;

export type GitImplementation = (typeof GitImplementation)[keyof typeof GitImplementation];

export const HTTPSchemeType = {
    HTTP: "HTTP",
    HTTPS: "HTTPS",
} as const;

export type HTTPSchemeType = (typeof HTTPSchemeType)[keyof typeof HTTPSchemeType];

export const KeyVaultCertificateAutoSync = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type KeyVaultCertificateAutoSync = (typeof KeyVaultCertificateAutoSync)[keyof typeof KeyVaultCertificateAutoSync];

export const ManagedIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

export type ManagedIdentityType = (typeof ManagedIdentityType)[keyof typeof ManagedIdentityType];

export const ProbeActionType = {
    HTTPGetAction: "HTTPGetAction",
    TCPSocketAction: "TCPSocketAction",
    ExecAction: "ExecAction",
} as const;

export type ProbeActionType = (typeof ProbeActionType)[keyof typeof ProbeActionType];

export const SessionAffinity = {
    Cookie: "Cookie",
    None: "None",
} as const;

export type SessionAffinity = (typeof SessionAffinity)[keyof typeof SessionAffinity];

export const StorageType = {
    StorageAccount: "StorageAccount",
} as const;

export type StorageType = (typeof StorageType)[keyof typeof StorageType];

export const Type = {
    AzureFileVolume: "AzureFileVolume",
} as const;

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

export type WeekDay = (typeof WeekDay)[keyof typeof WeekDay];