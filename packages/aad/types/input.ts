import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Configuration Diagnostics
 */
export interface ConfigDiagnosticsArgs {
    /**
     * Last domain configuration diagnostics DateTime
     */
    lastExecuted?: pulumi.Input<string | undefined>;
    /**
     * List of Configuration Diagnostics validator results.
     */
    validatorResults?: pulumi.Input<pulumi.Input<ConfigDiagnosticsValidatorResultArgs>[] | undefined>;
}

/**
 * Config Diagnostics validator result data
 */
export interface ConfigDiagnosticsValidatorResultArgs {
    /**
     * List of resource config validation issues.
     */
    issues?: pulumi.Input<pulumi.Input<ConfigDiagnosticsValidatorResultIssueArgs>[] | undefined>;
    /**
     * Replica set location and subnet name
     */
    replicaSetSubnetDisplayName?: pulumi.Input<string | undefined>;
    /**
     * Status for individual validator after running diagnostics.
     */
    status?: pulumi.Input<string | enums.Status | undefined>;
    /**
     * Validator identifier
     */
    validatorId?: pulumi.Input<string | undefined>;
}
/**
 * configDiagnosticsValidatorResultArgsProvideDefaults sets the appropriate defaults for ConfigDiagnosticsValidatorResultArgs
 */
export function configDiagnosticsValidatorResultArgsProvideDefaults(val: ConfigDiagnosticsValidatorResultArgs): ConfigDiagnosticsValidatorResultArgs {
    return {
        ...val,
        status: (val.status) ?? "None",
    };
}

/**
 * Specific issue for a particular config diagnostics validator
 */
export interface ConfigDiagnosticsValidatorResultIssueArgs {
    /**
     * List of domain resource property name or values used to compose a rich description.
     */
    descriptionParams?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Validation issue identifier.
     */
    id?: pulumi.Input<string | undefined>;
}

/**
 * Domain Security Settings
 */
export interface DomainSecuritySettingsArgs {
    /**
     * A flag to determine whether or not ChannelBinding is enabled or disabled.
     */
    channelBinding?: pulumi.Input<string | enums.ChannelBinding | undefined>;
    /**
     * A flag to determine whether or not KerberosArmoring is enabled or disabled.
     */
    kerberosArmoring?: pulumi.Input<string | enums.KerberosArmoring | undefined>;
    /**
     * A flag to determine whether or not KerberosRc4Encryption is enabled or disabled.
     */
    kerberosRc4Encryption?: pulumi.Input<string | enums.KerberosRc4Encryption | undefined>;
    /**
     * A flag to determine whether or not LdapSigning is enabled or disabled.
     */
    ldapSigning?: pulumi.Input<string | enums.LdapSigning | undefined>;
    /**
     * A flag to determine whether or not NtlmV1 is enabled or disabled.
     */
    ntlmV1?: pulumi.Input<string | enums.NtlmV1 | undefined>;
    /**
     * A flag to determine whether or not SyncKerberosPasswords is enabled or disabled.
     */
    syncKerberosPasswords?: pulumi.Input<string | enums.SyncKerberosPasswords | undefined>;
    /**
     * A flag to determine whether or not SyncNtlmPasswords is enabled or disabled.
     */
    syncNtlmPasswords?: pulumi.Input<string | enums.SyncNtlmPasswords | undefined>;
    /**
     * A flag to determine whether or not SyncOnPremPasswords is enabled or disabled.
     */
    syncOnPremPasswords?: pulumi.Input<string | enums.SyncOnPremPasswords | undefined>;
    /**
     * A flag to determine whether or not TlsV1 is enabled or disabled.
     */
    tlsV1?: pulumi.Input<string | enums.TlsV1 | undefined>;
}
/**
 * domainSecuritySettingsArgsProvideDefaults sets the appropriate defaults for DomainSecuritySettingsArgs
 */
export function domainSecuritySettingsArgsProvideDefaults(val: DomainSecuritySettingsArgs): DomainSecuritySettingsArgs {
    return {
        ...val,
        channelBinding: (val.channelBinding) ?? "Disabled",
        kerberosArmoring: (val.kerberosArmoring) ?? "Disabled",
        kerberosRc4Encryption: (val.kerberosRc4Encryption) ?? "Enabled",
        ldapSigning: (val.ldapSigning) ?? "Disabled",
        ntlmV1: (val.ntlmV1) ?? "Enabled",
        syncKerberosPasswords: (val.syncKerberosPasswords) ?? "Enabled",
        syncNtlmPasswords: (val.syncNtlmPasswords) ?? "Enabled",
        syncOnPremPasswords: (val.syncOnPremPasswords) ?? "Enabled",
        tlsV1: (val.tlsV1) ?? "Enabled",
    };
}

/**
 * Forest Trust Setting
 */
export interface ForestTrustArgs {
    /**
     * Friendly Name
     */
    friendlyName?: pulumi.Input<string | undefined>;
    /**
     * Remote Dns ips
     */
    remoteDnsIps?: pulumi.Input<string | undefined>;
    /**
     * Trust Direction
     */
    trustDirection?: pulumi.Input<string | undefined>;
    /**
     * Trust Password
     */
    trustPassword?: pulumi.Input<string | undefined>;
    /**
     * Trusted Domain FQDN
     */
    trustedDomainFqdn?: pulumi.Input<string | undefined>;
}

/**
 * Secure LDAP Settings
 */
export interface LdapsSettingsArgs {
    /**
     * A flag to determine whether or not Secure LDAP access over the internet is enabled or disabled.
     */
    externalAccess?: pulumi.Input<string | enums.ExternalAccess | undefined>;
    /**
     * A flag to determine whether or not Secure LDAP is enabled or disabled.
     */
    ldaps?: pulumi.Input<string | enums.Ldaps | undefined>;
    /**
     * The certificate required to configure Secure LDAP. The parameter passed here should be a base64encoded representation of the certificate pfx file.
     */
    pfxCertificate?: pulumi.Input<string | undefined>;
    /**
     * The password to decrypt the provided Secure LDAP certificate pfx file.
     */
    pfxCertificatePassword?: pulumi.Input<string | undefined>;
}
/**
 * ldapsSettingsArgsProvideDefaults sets the appropriate defaults for LdapsSettingsArgs
 */
export function ldapsSettingsArgsProvideDefaults(val: LdapsSettingsArgs): LdapsSettingsArgs {
    return {
        ...val,
        externalAccess: (val.externalAccess) ?? "Disabled",
        ldaps: (val.ldaps) ?? "Disabled",
    };
}

/**
 * Settings for notification
 */
export interface NotificationSettingsArgs {
    /**
     * The list of additional recipients
     */
    additionalRecipients?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Should domain controller admins be notified
     */
    notifyDcAdmins?: pulumi.Input<string | enums.NotifyDcAdmins | undefined>;
    /**
     * Should global admins be notified
     */
    notifyGlobalAdmins?: pulumi.Input<string | enums.NotifyGlobalAdmins | undefined>;
}

/**
 * Replica Set Definition
 */
export interface ReplicaSetArgs {
    /**
     * Virtual network location
     */
    location?: pulumi.Input<string | undefined>;
    /**
     * The name of the virtual network that Domain Services will be deployed on. The id of the subnet that Domain Services will be deployed on. /virtualNetwork/vnetName/subnets/subnetName.
     */
    subnetId?: pulumi.Input<string | undefined>;
}

/**
 * Settings for Resource Forest
 */
export interface ResourceForestSettingsArgs {
    /**
     * Resource Forest
     */
    resourceForest?: pulumi.Input<string | undefined>;
    /**
     * List of settings for Resource Forest
     */
    settings?: pulumi.Input<pulumi.Input<ForestTrustArgs>[] | undefined>;
}
