export const ChannelBinding = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type ChannelBinding = (typeof ChannelBinding)[keyof typeof ChannelBinding];

export const ExternalAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type ExternalAccess = (typeof ExternalAccess)[keyof typeof ExternalAccess];

export const FilteredSync = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type FilteredSync = (typeof FilteredSync)[keyof typeof FilteredSync];

export const KerberosArmoring = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type KerberosArmoring = (typeof KerberosArmoring)[keyof typeof KerberosArmoring];

export const KerberosRc4Encryption = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type KerberosRc4Encryption = (typeof KerberosRc4Encryption)[keyof typeof KerberosRc4Encryption];

export const LdapSigning = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type LdapSigning = (typeof LdapSigning)[keyof typeof LdapSigning];

export const Ldaps = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type Ldaps = (typeof Ldaps)[keyof typeof Ldaps];

export const NotifyDcAdmins = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type NotifyDcAdmins = (typeof NotifyDcAdmins)[keyof typeof NotifyDcAdmins];

export const NotifyGlobalAdmins = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type NotifyGlobalAdmins = (typeof NotifyGlobalAdmins)[keyof typeof NotifyGlobalAdmins];

export const NtlmV1 = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type NtlmV1 = (typeof NtlmV1)[keyof typeof NtlmV1];

export const Status = {
    None: "None",
    Running: "Running",
    OK: "OK",
    Failure: "Failure",
    Warning: "Warning",
    Skipped: "Skipped",
} as const;

export type Status = (typeof Status)[keyof typeof Status];

export const SyncKerberosPasswords = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type SyncKerberosPasswords = (typeof SyncKerberosPasswords)[keyof typeof SyncKerberosPasswords];

export const SyncNtlmPasswords = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type SyncNtlmPasswords = (typeof SyncNtlmPasswords)[keyof typeof SyncNtlmPasswords];

export const SyncOnPremPasswords = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type SyncOnPremPasswords = (typeof SyncOnPremPasswords)[keyof typeof SyncOnPremPasswords];

export const SyncScope = {
    All: "All",
    CloudOnly: "CloudOnly",
} as const;

export type SyncScope = (typeof SyncScope)[keyof typeof SyncScope];

export const TlsV1 = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type TlsV1 = (typeof TlsV1)[keyof typeof TlsV1];
