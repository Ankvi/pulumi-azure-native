export const AccessKeyPermissions = {
    Read: "Read",
    Write: "Write",
    Listen: "Listen",
    Send: "Send",
    Manage: "Manage",
} as const;

export type AccessKeyPermissions = (typeof AccessKeyPermissions)[keyof typeof AccessKeyPermissions];

export const ActionType = {
    Enable: "enable",
    OptOut: "optOut",
} as const;

/**
 * Optional. Indicates public network solution. If enable, enable public network access of target service with best try. Default is enable. If optOut, opt out public network access configuration.
 */
export type ActionType = (typeof ActionType)[keyof typeof ActionType];

export const AllowType = {
    True: "true",
    False: "false",
} as const;

/**
 * Allow caller client IP to access the target service if true. the property is used when connecting local application to target service.
 */
export type AllowType = (typeof AllowType)[keyof typeof AllowType];

export const AuthMode = {
    /**
     * Default authentication configuration according to the authentication type.
     */
    OptInAllAuth: "optInAllAuth",
    /**
     * Skip all authentication configuration such as enabling managed identity and granting RBAC roles
     */
    OptOutAllAuth: "optOutAllAuth",
} as const;

/**
 * Optional. Indicates how to configure authentication. If optInAllAuth, service linker configures authentication such as enabling identity on source resource and granting RBAC roles. If optOutAllAuth, opt out authentication setup. Default is optInAllAuth.
 */
export type AuthMode = (typeof AuthMode)[keyof typeof AuthMode];

export const AuthType = {
    SystemAssignedIdentity: "systemAssignedIdentity",
    UserAssignedIdentity: "userAssignedIdentity",
    ServicePrincipalSecret: "servicePrincipalSecret",
    ServicePrincipalCertificate: "servicePrincipalCertificate",
    Secret: "secret",
    AccessKey: "accessKey",
    UserAccount: "userAccount",
    EasyAuthMicrosoftEntraID: "easyAuthMicrosoftEntraID",
} as const;

/**
 * The authentication type.
 */
export type AuthType = (typeof AuthType)[keyof typeof AuthType];

export const AzureResourceType = {
    KeyVault: "KeyVault",
} as const;

/**
 * The azure resource type.
 */
export type AzureResourceType = (typeof AzureResourceType)[keyof typeof AzureResourceType];

export const ClientType = {
    None: "none",
    Dotnet: "dotnet",
    Java: "java",
    Python: "python",
    Go: "go",
    Php: "php",
    Ruby: "ruby",
    Django: "django",
    Nodejs: "nodejs",
    SpringBoot: "springBoot",
    Kafka_springBoot: "kafka-springBoot",
    Jms_springBoot: "jms-springBoot",
    Dapr: "dapr",
} as const;

/**
 * The application client type
 */
export type ClientType = (typeof ClientType)[keyof typeof ClientType];

export const DaprMetadataRequired = {
    True: "true",
    False: "false",
} as const;

/**
 * The value indicating whether the metadata is required or not
 */
export type DaprMetadataRequired = (typeof DaprMetadataRequired)[keyof typeof DaprMetadataRequired];

export const DeleteOrUpdateBehavior = {
    Default: "Default",
    ForcedCleanup: "ForcedCleanup",
} as const;

/**
 * Indicates whether to clean up previous operation when Linker is updating or deleting
 */
export type DeleteOrUpdateBehavior = (typeof DeleteOrUpdateBehavior)[keyof typeof DeleteOrUpdateBehavior];

export const DryrunActionName = {
    CreateOrUpdate: "createOrUpdate",
} as const;

/**
 * The name of action for you dryrun job.
 */
export type DryrunActionName = (typeof DryrunActionName)[keyof typeof DryrunActionName];

export const SecretType = {
    RawValue: "rawValue",
    KeyVaultSecretUri: "keyVaultSecretUri",
    KeyVaultSecretReference: "keyVaultSecretReference",
} as const;

/**
 * The secret type.
 */
export type SecretType = (typeof SecretType)[keyof typeof SecretType];

export const TargetServiceType = {
    AzureResource: "AzureResource",
    ConfluentBootstrapServer: "ConfluentBootstrapServer",
    ConfluentSchemaRegistry: "ConfluentSchemaRegistry",
    SelfHostedServer: "SelfHostedServer",
} as const;

/**
 * The target service type.
 */
export type TargetServiceType = (typeof TargetServiceType)[keyof typeof TargetServiceType];

export const VNetSolutionType = {
    ServiceEndpoint: "serviceEndpoint",
    PrivateLink: "privateLink",
} as const;

/**
 * Type of VNet solution.
 */
export type VNetSolutionType = (typeof VNetSolutionType)[keyof typeof VNetSolutionType];
