export const Action = {
    Allow: "Allow",
} as const;

export type Action = (typeof Action)[keyof typeof Action];

export const ActionsRequired = {
    None: "None",
    Recreate: "Recreate",
} as const;

export type ActionsRequired = (typeof ActionsRequired)[keyof typeof ActionsRequired];

export const Architecture = {
    Amd64: "amd64",
    X86: "x86",
    Architecture_386: "386",
    Arm: "arm",
    Arm64: "arm64",
} as const;

export type Architecture = (typeof Architecture)[keyof typeof Architecture];

export const AuditLogStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type AuditLogStatus = (typeof AuditLogStatus)[keyof typeof AuditLogStatus];

export const BaseImageTriggerType = {
    All: "All",
    Runtime: "Runtime",
} as const;

export type BaseImageTriggerType = (typeof BaseImageTriggerType)[keyof typeof BaseImageTriggerType];

export const ConnectedRegistryMode = {
    ReadWrite: "ReadWrite",
    ReadOnly: "ReadOnly",
    Registry: "Registry",
    Mirror: "Mirror",
} as const;

export type ConnectedRegistryMode = (typeof ConnectedRegistryMode)[keyof typeof ConnectedRegistryMode];

export const ConnectionStatus = {
    Approved: "Approved",
    Pending: "Pending",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

export type ConnectionStatus = (typeof ConnectionStatus)[keyof typeof ConnectionStatus];

export const CredentialName = {
    Credential1: "Credential1",
} as const;

export type CredentialName = (typeof CredentialName)[keyof typeof CredentialName];

export const DefaultAction = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

export type DefaultAction = (typeof DefaultAction)[keyof typeof DefaultAction];

export const EncryptionStatus = {
    Enabled: "enabled",
    Disabled: "disabled",
} as const;

export type EncryptionStatus = (typeof EncryptionStatus)[keyof typeof EncryptionStatus];

export const ExportPolicyStatus = {
    Enabled: "enabled",
    Disabled: "disabled",
} as const;

export type ExportPolicyStatus = (typeof ExportPolicyStatus)[keyof typeof ExportPolicyStatus];

export const LogLevel = {
    Debug: "Debug",
    Information: "Information",
    Warning: "Warning",
    Error: "Error",
    None: "None",
} as const;

export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

export const NetworkRuleBypassOptions = {
    AzureServices: "AzureServices",
    None: "None",
} as const;

export type NetworkRuleBypassOptions = (typeof NetworkRuleBypassOptions)[keyof typeof NetworkRuleBypassOptions];

export const OS = {
    Windows: "Windows",
    Linux: "Linux",
} as const;

export type OS = (typeof OS)[keyof typeof OS];

export const PackageSourceType = {
    Remote: "remote",
} as const;

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

export type PipelineRunSourceType = (typeof PipelineRunSourceType)[keyof typeof PipelineRunSourceType];

export const PipelineRunTargetType = {
    AzureStorageBlob: "AzureStorageBlob",
} as const;

export type PipelineRunTargetType = (typeof PipelineRunTargetType)[keyof typeof PipelineRunTargetType];

export const PipelineSourceType = {
    AzureStorageBlobContainer: "AzureStorageBlobContainer",
} as const;

export type PipelineSourceType = (typeof PipelineSourceType)[keyof typeof PipelineSourceType];

export const PolicyStatus = {
    Enabled: "enabled",
    Disabled: "disabled",
} as const;

export type PolicyStatus = (typeof PolicyStatus)[keyof typeof PolicyStatus];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const SecretObjectType = {
    Opaque: "Opaque",
    Vaultsecret: "Vaultsecret",
} as const;

export type SecretObjectType = (typeof SecretObjectType)[keyof typeof SecretObjectType];

export const SkuName = {
    Classic: "Classic",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const SourceControlType = {
    Github: "Github",
    VisualStudioTeamService: "VisualStudioTeamService",
} as const;

export type SourceControlType = (typeof SourceControlType)[keyof typeof SourceControlType];

export const SourceRegistryLoginMode = {
    None: "None",
    Default: "Default",
} as const;

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

export type StepType = (typeof StepType)[keyof typeof StepType];

export const TaskStatus = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

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

export type TokenPasswordName = (typeof TokenPasswordName)[keyof typeof TokenPasswordName];

export const TokenStatus = {
    Enabled: "enabled",
    Disabled: "disabled",
} as const;

export type TokenStatus = (typeof TokenStatus)[keyof typeof TokenStatus];

export const TokenType = {
    PAT: "PAT",
    OAuth: "OAuth",
} as const;

export type TokenType = (typeof TokenType)[keyof typeof TokenType];

export const TriggerStatus = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type TriggerStatus = (typeof TriggerStatus)[keyof typeof TriggerStatus];

export const TrustPolicyType = {
    Notary: "Notary",
} as const;

export type TrustPolicyType = (typeof TrustPolicyType)[keyof typeof TrustPolicyType];

export const UpdateTriggerPayloadType = {
    Default: "Default",
    Token: "Token",
} as const;

export type UpdateTriggerPayloadType = (typeof UpdateTriggerPayloadType)[keyof typeof UpdateTriggerPayloadType];

export const Variant = {
    V6: "v6",
    V7: "v7",
    V8: "v8",
} as const;

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

export type WebhookStatus = (typeof WebhookStatus)[keyof typeof WebhookStatus];

export const ZoneRedundancy = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type ZoneRedundancy = (typeof ZoneRedundancy)[keyof typeof ZoneRedundancy];
