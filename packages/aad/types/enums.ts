export const ChannelBinding = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * A flag to determine whether or not ChannelBinding is enabled or disabled.
 */
export type ChannelBinding = (typeof ChannelBinding)[keyof typeof ChannelBinding];

export const ExternalAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * A flag to determine whether or not Secure LDAP access over the internet is enabled or disabled.
 */
export type ExternalAccess = (typeof ExternalAccess)[keyof typeof ExternalAccess];

export const FilteredSync = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Enabled or Disabled flag to turn on Group-based filtered sync
 */
export type FilteredSync = (typeof FilteredSync)[keyof typeof FilteredSync];

export const KerberosArmoring = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * A flag to determine whether or not KerberosArmoring is enabled or disabled.
 */
export type KerberosArmoring = (typeof KerberosArmoring)[keyof typeof KerberosArmoring];

export const KerberosRc4Encryption = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * A flag to determine whether or not KerberosRc4Encryption is enabled or disabled.
 */
export type KerberosRc4Encryption = (typeof KerberosRc4Encryption)[keyof typeof KerberosRc4Encryption];

export const LdapSigning = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * A flag to determine whether or not LdapSigning is enabled or disabled.
 */
export type LdapSigning = (typeof LdapSigning)[keyof typeof LdapSigning];

export const Ldaps = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * A flag to determine whether or not Secure LDAP is enabled or disabled.
 */
export type Ldaps = (typeof Ldaps)[keyof typeof Ldaps];

export const NotifyDcAdmins = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Should domain controller admins be notified
 */
export type NotifyDcAdmins = (typeof NotifyDcAdmins)[keyof typeof NotifyDcAdmins];

export const NotifyGlobalAdmins = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Should global admins be notified
 */
export type NotifyGlobalAdmins = (typeof NotifyGlobalAdmins)[keyof typeof NotifyGlobalAdmins];

export const NtlmV1 = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * A flag to determine whether or not NtlmV1 is enabled or disabled.
 */
export type NtlmV1 = (typeof NtlmV1)[keyof typeof NtlmV1];

export const Status = {
    None: "None",
    Running: "Running",
    OK: "OK",
    Failure: "Failure",
    Warning: "Warning",
    Skipped: "Skipped",
} as const;

/**
 * Status for individual validator after running diagnostics.
 */
export type Status = (typeof Status)[keyof typeof Status];

export const SyncKerberosPasswords = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * A flag to determine whether or not SyncKerberosPasswords is enabled or disabled.
 */
export type SyncKerberosPasswords = (typeof SyncKerberosPasswords)[keyof typeof SyncKerberosPasswords];

export const SyncNtlmPasswords = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * A flag to determine whether or not SyncNtlmPasswords is enabled or disabled.
 */
export type SyncNtlmPasswords = (typeof SyncNtlmPasswords)[keyof typeof SyncNtlmPasswords];

export const SyncOnPremPasswords = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * A flag to determine whether or not SyncOnPremPasswords is enabled or disabled.
 */
export type SyncOnPremPasswords = (typeof SyncOnPremPasswords)[keyof typeof SyncOnPremPasswords];

export const SyncScope = {
    All: "All",
    CloudOnly: "CloudOnly",
} as const;

/**
 * All or CloudOnly, All users in AAD are synced to AAD DS domain or only users actively syncing in the cloud
 */
export type SyncScope = (typeof SyncScope)[keyof typeof SyncScope];

export const TlsV1 = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * A flag to determine whether or not TlsV1 is enabled or disabled.
 */
export type TlsV1 = (typeof TlsV1)[keyof typeof TlsV1];
