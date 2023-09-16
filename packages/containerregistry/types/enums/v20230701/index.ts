// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const Action = {
    Allow: "Allow",
} as const;

export type Action = (typeof Action)[keyof typeof Action];

export const ActionsRequired = {
    None: "None",
    Recreate: "Recreate",
} as const;

export type ActionsRequired = (typeof ActionsRequired)[keyof typeof ActionsRequired];

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

export const NetworkRuleBypassOptions = {
    AzureServices: "AzureServices",
    None: "None",
} as const;

export type NetworkRuleBypassOptions = (typeof NetworkRuleBypassOptions)[keyof typeof NetworkRuleBypassOptions];

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

export const SkuName = {
    Classic: "Classic",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

export type SkuName = (typeof SkuName)[keyof typeof SkuName];

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

export const TrustPolicyType = {
    Notary: "Notary",
} as const;

export type TrustPolicyType = (typeof TrustPolicyType)[keyof typeof TrustPolicyType];

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
