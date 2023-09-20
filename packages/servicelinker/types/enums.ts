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

export type ActionType = (typeof ActionType)[keyof typeof ActionType];

export const AllowType = {
    True: "true",
    False: "false",
} as const;

export type AllowType = (typeof AllowType)[keyof typeof AllowType];

export const AuthType = {
    SystemAssignedIdentity: "systemAssignedIdentity",
    UserAssignedIdentity: "userAssignedIdentity",
    ServicePrincipalSecret: "servicePrincipalSecret",
    ServicePrincipalCertificate: "servicePrincipalCertificate",
    Secret: "secret",
    AccessKey: "accessKey",
    UserAccount: "userAccount",
} as const;

export type AuthType = (typeof AuthType)[keyof typeof AuthType];

export const AzureResourceType = {
    KeyVault: "KeyVault",
} as const;

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
    Dapr: "dapr",
} as const;

export type ClientType = (typeof ClientType)[keyof typeof ClientType];

export const DeleteOrUpdateBehavior = {
    Default: "Default",
    ForcedCleanup: "ForcedCleanup",
} as const;

export type DeleteOrUpdateBehavior = (typeof DeleteOrUpdateBehavior)[keyof typeof DeleteOrUpdateBehavior];

export const DryrunActionName = {
    CreateOrUpdate: "createOrUpdate",
} as const;

export type DryrunActionName = (typeof DryrunActionName)[keyof typeof DryrunActionName];

export const SecretType = {
    RawValue: "rawValue",
    KeyVaultSecretUri: "keyVaultSecretUri",
    KeyVaultSecretReference: "keyVaultSecretReference",
} as const;

export type SecretType = (typeof SecretType)[keyof typeof SecretType];

export const TargetServiceType = {
    AzureResource: "AzureResource",
    ConfluentBootstrapServer: "ConfluentBootstrapServer",
    ConfluentSchemaRegistry: "ConfluentSchemaRegistry",
    SelfHostedServer: "SelfHostedServer",
} as const;

export type TargetServiceType = (typeof TargetServiceType)[keyof typeof TargetServiceType];

export const VNetSolutionType = {
    ServiceEndpoint: "serviceEndpoint",
    PrivateLink: "privateLink",
} as const;

export type VNetSolutionType = (typeof VNetSolutionType)[keyof typeof VNetSolutionType];