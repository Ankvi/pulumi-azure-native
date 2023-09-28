export const Action = {
    Allow: "Allow",
} as const;

/**
 * The action of IP ACL rule.
 */
export type Action = (typeof Action)[keyof typeof Action];

export const ActionsRequired = {
    None: "None",
    Recreate: "Recreate",
} as const;

/**
 * A message indicating if changes on the service provider require any updates on the consumer.
 */
export type ActionsRequired = (typeof ActionsRequired)[keyof typeof ActionsRequired];

export const Architecture = {
    Amd64: "amd64",
    X86: "x86",
    Architecture_386: "386",
    Arm: "arm",
    Arm64: "arm64",
} as const;

/**
 * The OS architecture.
 */
export type Architecture = (typeof Architecture)[keyof typeof Architecture];

export const AuditLogStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Indicates whether audit logs are enabled on the connected registry.
 */
export type AuditLogStatus = (typeof AuditLogStatus)[keyof typeof AuditLogStatus];

export const BaseImageTriggerType = {
    All: "All",
    Runtime: "Runtime",
} as const;

/**
 * The type of the auto trigger for base image dependency updates.
 */
export type BaseImageTriggerType = (typeof BaseImageTriggerType)[keyof typeof BaseImageTriggerType];

export const ConnectedRegistryMode = {
    ReadWrite: "ReadWrite",
    ReadOnly: "ReadOnly",
    Registry: "Registry",
    Mirror: "Mirror",
} as const;

/**
 * The mode of the connected registry resource that indicates the permissions of the registry.
 */
export type ConnectedRegistryMode = (typeof ConnectedRegistryMode)[keyof typeof ConnectedRegistryMode];

export const ConnectionStatus = {
    Approved: "Approved",
    Pending: "Pending",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

/**
 * The private link service connection status.
 */
export type ConnectionStatus = (typeof ConnectionStatus)[keyof typeof ConnectionStatus];

export const CredentialName = {
    Credential1: "Credential1",
} as const;

/**
 * The name of the credential.
 */
export type CredentialName = (typeof CredentialName)[keyof typeof CredentialName];

export const DefaultAction = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

/**
 * The default action of allow or deny when no other rules match.
 */
export type DefaultAction = (typeof DefaultAction)[keyof typeof DefaultAction];

export const EncryptionStatus = {
    Enabled: "enabled",
    Disabled: "disabled",
} as const;

/**
 * Indicates whether or not the encryption is enabled for container registry.
 */
export type EncryptionStatus = (typeof EncryptionStatus)[keyof typeof EncryptionStatus];

export const ExportPolicyStatus = {
    Enabled: "enabled",
    Disabled: "disabled",
} as const;

/**
 * The value that indicates whether the policy is enabled or not.
 */
export type ExportPolicyStatus = (typeof ExportPolicyStatus)[keyof typeof ExportPolicyStatus];

export const LogLevel = {
    Debug: "Debug",
    Information: "Information",
    Warning: "Warning",
    Error: "Error",
    None: "None",
} as const;

/**
 * The verbosity of logs persisted on the connected registry.
 */
export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

export const NetworkRuleBypassOptions = {
    AzureServices: "AzureServices",
    None: "None",
} as const;

/**
 * Whether to allow trusted Azure services to access a network restricted registry.
 */
export type NetworkRuleBypassOptions = (typeof NetworkRuleBypassOptions)[keyof typeof NetworkRuleBypassOptions];

export const OS = {
    Windows: "Windows",
    Linux: "Linux",
} as const;

/**
 * The operating system type required for the run.
 */
export type OS = (typeof OS)[keyof typeof OS];

export const PackageSourceType = {
    Remote: "remote",
} as const;

/**
 * The type of package source for a archive.
 */
export type PackageSourceType = (typeof PackageSourceType)[keyof typeof PackageSourceType];

export const PipelineOptions = {
    OverwriteTags: "OverwriteTags",
    OverwriteBlobs: "OverwriteBlobs",
    DeleteSourceBlobOnSuccess: "DeleteSourceBlobOnSuccess",
    ContinueOnErrors: "ContinueOnErrors",
} as const;

export type PipelineOptions = (typeof PipelineOptions)[keyof typeof PipelineOptions];

export const PipelineRunSourceType = {
    AzureStorageBlob: "AzureStorageBlob",
} as const;

/**
 * The type of the source.
 */
export type PipelineRunSourceType = (typeof PipelineRunSourceType)[keyof typeof PipelineRunSourceType];

export const PipelineRunTargetType = {
    AzureStorageBlob: "AzureStorageBlob",
} as const;

/**
 * The type of the target.
 */
export type PipelineRunTargetType = (typeof PipelineRunTargetType)[keyof typeof PipelineRunTargetType];

export const PipelineSourceType = {
    AzureStorageBlobContainer: "AzureStorageBlobContainer",
} as const;

/**
 * The type of source for the import pipeline.
 */
export type PipelineSourceType = (typeof PipelineSourceType)[keyof typeof PipelineSourceType];

export const PolicyStatus = {
    Enabled: "enabled",
    Disabled: "disabled",
} as const;

/**
 * The value that indicates whether the policy is enabled or not.
 */
export type PolicyStatus = (typeof PolicyStatus)[keyof typeof PolicyStatus];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether or not public network access is allowed for the container registry.
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

/**
 * The identity type.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const SecretObjectType = {
    Opaque: "Opaque",
    Vaultsecret: "Vaultsecret",
} as const;

/**
 * The type of the secret object which determines how the value of the secret object has to be
 * interpreted.
 */
export type SecretObjectType = (typeof SecretObjectType)[keyof typeof SecretObjectType];

export const SkuName = {
    Classic: "Classic",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

/**
 * The SKU name of the container registry. Required for registry creation.
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const SourceControlType = {
    Github: "Github",
    VisualStudioTeamService: "VisualStudioTeamService",
} as const;

/**
 * The type of source control service.
 */
export type SourceControlType = (typeof SourceControlType)[keyof typeof SourceControlType];

export const SourceRegistryLoginMode = {
    None: "None",
    Default: "Default",
} as const;

/**
 * The authentication mode which determines the source registry login scope. The credentials for the source registry
 * will be generated using the given scope. These credentials will be used to login to
 * the source registry during the run.
 */
export type SourceRegistryLoginMode = (typeof SourceRegistryLoginMode)[keyof typeof SourceRegistryLoginMode];

export const SourceTriggerEvent = {
    Commit: "commit",
    Pullrequest: "pullrequest",
} as const;

export type SourceTriggerEvent = (typeof SourceTriggerEvent)[keyof typeof SourceTriggerEvent];

export const StepType = {
    Docker: "Docker",
    FileTask: "FileTask",
    EncodedTask: "EncodedTask",
} as const;

/**
 * The type of the step.
 */
export type StepType = (typeof StepType)[keyof typeof StepType];

export const TaskStatus = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * The current status of task.
 */
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];

export const TokenCertificateName = {
    Certificate1: "certificate1",
    Certificate2: "certificate2",
} as const;

export type TokenCertificateName = (typeof TokenCertificateName)[keyof typeof TokenCertificateName];

export const TokenPasswordName = {
    Password1: "password1",
    Password2: "password2",
} as const;

/**
 * The password name "password1" or "password2"
 */
export type TokenPasswordName = (typeof TokenPasswordName)[keyof typeof TokenPasswordName];

export const TokenStatus = {
    Enabled: "enabled",
    Disabled: "disabled",
} as const;

/**
 * The status of the token example enabled or disabled.
 */
export type TokenStatus = (typeof TokenStatus)[keyof typeof TokenStatus];

export const TokenType = {
    PAT: "PAT",
    OAuth: "OAuth",
} as const;

/**
 * The type of Auth token.
 */
export type TokenType = (typeof TokenType)[keyof typeof TokenType];

export const TriggerStatus = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * The current status of trigger.
 */
export type TriggerStatus = (typeof TriggerStatus)[keyof typeof TriggerStatus];

export const TrustPolicyType = {
    Notary: "Notary",
} as const;

/**
 * The type of trust policy.
 */
export type TrustPolicyType = (typeof TrustPolicyType)[keyof typeof TrustPolicyType];

export const UpdateTriggerPayloadType = {
    Default: "Default",
    Token: "Token",
} as const;

/**
 * Type of Payload body for Base image update triggers.
 */
export type UpdateTriggerPayloadType = (typeof UpdateTriggerPayloadType)[keyof typeof UpdateTriggerPayloadType];

export const Variant = {
    V6: "v6",
    V7: "v7",
    V8: "v8",
} as const;

/**
 * Variant of the CPU.
 */
export type Variant = (typeof Variant)[keyof typeof Variant];

export const WebhookAction = {
    Push: "push",
    Delete: "delete",
    Quarantine: "quarantine",
    Chart_push: "chart_push",
    Chart_delete: "chart_delete",
} as const;

export type WebhookAction = (typeof WebhookAction)[keyof typeof WebhookAction];

export const WebhookStatus = {
    Enabled: "enabled",
    Disabled: "disabled",
} as const;

/**
 * The status of the webhook at the time the operation was called.
 */
export type WebhookStatus = (typeof WebhookStatus)[keyof typeof WebhookStatus];

export const ZoneRedundancy = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether or not zone redundancy is enabled for this container registry replication
 */
export type ZoneRedundancy = (typeof ZoneRedundancy)[keyof typeof ZoneRedundancy];
