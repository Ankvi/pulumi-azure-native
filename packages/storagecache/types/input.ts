import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * AML file system encryption settings.
 */
export interface AmlFilesystemEncryptionSettingsArgs {
    /**
     * Specifies the location of the encryption key in Key Vault.
     */
    keyEncryptionKey?: pulumi.Input<KeyVaultKeyReferenceArgs>;
}

/**
 * Hydration and archive settings and status
 */
export interface AmlFilesystemHsmArgs {
    /**
     * Specifies HSM settings of the AML file system.
     */
    settings?: pulumi.Input<AmlFilesystemHsmSettingsArgs>;
}
/**
 * amlFilesystemHsmArgsProvideDefaults sets the appropriate defaults for AmlFilesystemHsmArgs
 */
export function amlFilesystemHsmArgsProvideDefaults(val: AmlFilesystemHsmArgs): AmlFilesystemHsmArgs {
    return {
        ...val,
        settings: (val.settings ? pulumi.output(val.settings).apply(amlFilesystemHsmSettingsArgsProvideDefaults) : undefined),
    };
}

/**
 * AML file system HSM settings.
 */
export interface AmlFilesystemHsmSettingsArgs {
    /**
     * Resource ID of storage container used for hydrating the namespace and archiving from the namespace. The resource provider must have permission to create SAS tokens on the storage account.
     */
    container: pulumi.Input<string>;
    /**
     * Only blobs in the non-logging container that start with this path/prefix get hydrated into the cluster namespace.
     */
    importPrefix?: pulumi.Input<string>;
    /**
     * Resource ID of storage container used for logging events and errors.  Must be a separate container in the same storage account as the hydration and archive container. The resource provider must have permission to create SAS tokens on the storage account.
     */
    loggingContainer: pulumi.Input<string>;
}
/**
 * amlFilesystemHsmSettingsArgsProvideDefaults sets the appropriate defaults for AmlFilesystemHsmSettingsArgs
 */
export function amlFilesystemHsmSettingsArgsProvideDefaults(val: AmlFilesystemHsmSettingsArgs): AmlFilesystemHsmSettingsArgs {
    return {
        ...val,
        importPrefix: (val.importPrefix) ?? "/",
    };
}

/**
 * Managed Identity properties.
 */
export interface AmlFilesystemIdentityArgs {
    /**
     * The type of identity used for the resource.
     */
    type?: pulumi.Input<enums.AmlFilesystemIdentityType>;
    /**
     * A dictionary where each key is a user assigned identity resource ID, and each key's value is an empty dictionary.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Start time of a 30-minute weekly maintenance window.
 */
export interface AmlFilesystemMaintenanceWindowArgs {
    /**
     * Day of the week on which the maintenance window will occur.
     */
    dayOfWeek?: pulumi.Input<enums.MaintenanceDayOfWeekType>;
    /**
     * The time of day (in UTC) to start the maintenance window.
     */
    timeOfDayUTC?: pulumi.Input<string>;
}

/**
 * Properties pertaining to the BlobNfsTarget.
 */
export interface BlobNfsTargetArgs {
    /**
     * Resource ID of the storage container.
     */
    target?: pulumi.Input<string>;
    /**
     * Identifies the StorageCache usage model to be used for this storage target.
     */
    usageModel?: pulumi.Input<string>;
    /**
     * Amount of time (in seconds) the cache waits before it checks the back-end storage for file updates.
     */
    verificationTimer?: pulumi.Input<number>;
    /**
     * Amount of time (in seconds) the cache waits after the last file change before it copies the changed file to back-end storage.
     */
    writeBackTimer?: pulumi.Input<number>;
}

/**
 * Active Directory settings used to join a cache to a domain.
 */
export interface CacheActiveDirectorySettingsArgs {
    /**
     * The NetBIOS name to assign to the HPC Cache when it joins the Active Directory domain as a server. Length must 1-15 characters from the class [-0-9a-zA-Z].
     */
    cacheNetBiosName: pulumi.Input<string>;
    /**
     * Active Directory admin credentials used to join the HPC Cache to a domain.
     */
    credentials?: pulumi.Input<CacheActiveDirectorySettingsCredentialsArgs>;
    /**
     * The fully qualified domain name of the Active Directory domain controller.
     */
    domainName: pulumi.Input<string>;
    /**
     * The Active Directory domain's NetBIOS name.
     */
    domainNetBiosName: pulumi.Input<string>;
    /**
     * Primary DNS IP address used to resolve the Active Directory domain controller's fully qualified domain name.
     */
    primaryDnsIpAddress: pulumi.Input<string>;
    /**
     * Secondary DNS IP address used to resolve the Active Directory domain controller's fully qualified domain name.
     */
    secondaryDnsIpAddress?: pulumi.Input<string>;
}

/**
 * Active Directory admin credentials used to join the HPC Cache to a domain.
 */
export interface CacheActiveDirectorySettingsCredentialsArgs {
    /**
     * Plain text password of the Active Directory domain administrator. This value is stored encrypted and not returned on response.
     */
    password?: pulumi.Input<string>;
    /**
     * Username of the Active Directory domain administrator. This value is stored encrypted and not returned on response.
     */
    username: pulumi.Input<string>;
}

/**
 * Cache Directory Services settings.
 */
export interface CacheDirectorySettingsArgs {
    /**
     * Specifies settings for joining the HPC Cache to an Active Directory domain.
     */
    activeDirectory?: pulumi.Input<CacheActiveDirectorySettingsArgs>;
    /**
     * Specifies settings for Extended Groups. Extended Groups allows users to be members of more than 16 groups.
     */
    usernameDownload?: pulumi.Input<CacheUsernameDownloadSettingsArgs>;
}
/**
 * cacheDirectorySettingsArgsProvideDefaults sets the appropriate defaults for CacheDirectorySettingsArgs
 */
export function cacheDirectorySettingsArgsProvideDefaults(val: CacheDirectorySettingsArgs): CacheDirectorySettingsArgs {
    return {
        ...val,
        usernameDownload: (val.usernameDownload ? pulumi.output(val.usernameDownload).apply(cacheUsernameDownloadSettingsArgsProvideDefaults) : undefined),
    };
}

/**
 * Cache encryption settings.
 */
export interface CacheEncryptionSettingsArgs {
    /**
     * Specifies the location of the key encryption key in key vault.
     */
    keyEncryptionKey?: pulumi.Input<KeyVaultKeyReferenceArgs>;
    /**
     * Specifies whether the service will automatically rotate to the newest version of the key in the key vault.
     */
    rotationToLatestKeyVersionEnabled?: pulumi.Input<boolean>;
}

/**
 * Cache identity properties.
 */
export interface CacheIdentityArgs {
    /**
     * The type of identity used for the cache
     */
    type?: pulumi.Input<enums.CacheIdentityType>;
    /**
     * A dictionary where each key is a user assigned identity resource ID, and each key's value is an empty dictionary.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Cache network settings.
 */
export interface CacheNetworkSettingsArgs {
    /**
     * DNS search domain
     */
    dnsSearchDomain?: pulumi.Input<string>;
    /**
     * DNS servers for the cache to use.  It will be set from the network configuration if no value is provided.
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The IPv4 maximum transmission unit configured for the subnet.
     */
    mtu?: pulumi.Input<number>;
    /**
     * NTP server IP Address or FQDN for the cache to use. The default is time.windows.com.
     */
    ntpServer?: pulumi.Input<string>;
}
/**
 * cacheNetworkSettingsArgsProvideDefaults sets the appropriate defaults for CacheNetworkSettingsArgs
 */
export function cacheNetworkSettingsArgsProvideDefaults(val: CacheNetworkSettingsArgs): CacheNetworkSettingsArgs {
    return {
        ...val,
        mtu: (val.mtu) ?? 1500,
        ntpServer: (val.ntpServer) ?? "time.windows.com",
    };
}

/**
 * Cache security settings.
 */
export interface CacheSecuritySettingsArgs {
    /**
     * NFS access policies defined for this cache.
     */
    accessPolicies?: pulumi.Input<pulumi.Input<NfsAccessPolicyArgs>[]>;
}

/**
 * SKU for the cache.
 */
export interface CacheSkuArgs {
    /**
     * SKU name for this cache.
     */
    name?: pulumi.Input<string>;
}

/**
 * Cache Upgrade Settings.
 */
export interface CacheUpgradeSettingsArgs {
    /**
     * When upgradeScheduleEnabled is true, this field holds the user-chosen upgrade time. At the user-chosen time, the firmware update will automatically be installed on the cache.
     */
    scheduledTime?: pulumi.Input<string>;
    /**
     * True if the user chooses to select an installation time between now and firmwareUpdateDeadline. Else the firmware will automatically be installed after firmwareUpdateDeadline if not triggered earlier via the upgrade operation.
     */
    upgradeScheduleEnabled?: pulumi.Input<boolean>;
}

/**
 * Settings for Extended Groups username and group download.
 */
export interface CacheUsernameDownloadSettingsArgs {
    /**
     * Determines if the certificate should be automatically downloaded. This applies to 'caCertificateURI' only if 'requireValidCertificate' is true.
     */
    autoDownloadCertificate?: pulumi.Input<boolean>;
    /**
     * The URI of the CA certificate to validate the LDAP secure connection. This field must be populated when 'requireValidCertificate' is set to true.
     */
    caCertificateURI?: pulumi.Input<string>;
    /**
     * When present, these are the credentials for the secure LDAP connection.
     */
    credentials?: pulumi.Input<CacheUsernameDownloadSettingsCredentialsArgs>;
    /**
     * Whether or not the LDAP connection should be encrypted.
     */
    encryptLdapConnection?: pulumi.Input<boolean>;
    /**
     * Whether or not Extended Groups is enabled.
     */
    extendedGroups?: pulumi.Input<boolean>;
    /**
     * The URI of the file containing group information (in /etc/group file format). This field must be populated when 'usernameSource' is set to 'File'.
     */
    groupFileURI?: pulumi.Input<string>;
    /**
     * The base distinguished name for the LDAP domain.
     */
    ldapBaseDN?: pulumi.Input<string>;
    /**
     * The fully qualified domain name or IP address of the LDAP server to use.
     */
    ldapServer?: pulumi.Input<string>;
    /**
     * Determines if the certificates must be validated by a certificate authority. When true, caCertificateURI must be provided.
     */
    requireValidCertificate?: pulumi.Input<boolean>;
    /**
     * The URI of the file containing user information (in /etc/passwd file format). This field must be populated when 'usernameSource' is set to 'File'.
     */
    userFileURI?: pulumi.Input<string>;
    /**
     * This setting determines how the cache gets username and group names for clients.
     */
    usernameSource?: pulumi.Input<string | enums.UsernameSource>;
}
/**
 * cacheUsernameDownloadSettingsArgsProvideDefaults sets the appropriate defaults for CacheUsernameDownloadSettingsArgs
 */
export function cacheUsernameDownloadSettingsArgsProvideDefaults(val: CacheUsernameDownloadSettingsArgs): CacheUsernameDownloadSettingsArgs {
    return {
        ...val,
        autoDownloadCertificate: (val.autoDownloadCertificate) ?? false,
        encryptLdapConnection: (val.encryptLdapConnection) ?? false,
        requireValidCertificate: (val.requireValidCertificate) ?? false,
        usernameSource: (val.usernameSource) ?? "None",
    };
}

/**
 * When present, these are the credentials for the secure LDAP connection.
 */
export interface CacheUsernameDownloadSettingsCredentialsArgs {
    /**
     * The Bind Distinguished Name identity to be used in the secure LDAP connection. This value is stored encrypted and not returned on response.
     */
    bindDn?: pulumi.Input<string>;
    /**
     * The Bind password to be used in the secure LDAP connection. This value is stored encrypted and not returned on response.
     */
    bindPassword?: pulumi.Input<string>;
}

/**
 * Properties pertaining to the ClfsTarget
 */
export interface ClfsTargetArgs {
    /**
     * Resource ID of storage container.
     */
    target?: pulumi.Input<string>;
}

/**
 * Describes a reference to key vault key.
 */
export interface KeyVaultKeyReferenceArgs {
    /**
     * The URL referencing a key encryption key in key vault.
     */
    keyUrl: pulumi.Input<string>;
    /**
     * Describes a resource Id to source key vault.
     */
    sourceVault: pulumi.Input<KeyVaultKeyReferenceSourceVaultArgs>;
}

/**
 * Describes a resource Id to source key vault.
 */
export interface KeyVaultKeyReferenceSourceVaultArgs {
    /**
     * Resource Id.
     */
    id?: pulumi.Input<string>;
}

/**
 * A namespace junction.
 */
export interface NamespaceJunctionArgs {
    /**
     * Namespace path on a cache for a Storage Target.
     */
    namespacePath?: pulumi.Input<string>;
    /**
     * Name of the access policy applied to this junction.
     */
    nfsAccessPolicy?: pulumi.Input<string>;
    /**
     * NFS export where targetPath exists.
     */
    nfsExport?: pulumi.Input<string>;
    /**
     * Path in Storage Target to which namespacePath points.
     */
    targetPath?: pulumi.Input<string>;
}
/**
 * namespaceJunctionArgsProvideDefaults sets the appropriate defaults for NamespaceJunctionArgs
 */
export function namespaceJunctionArgsProvideDefaults(val: NamespaceJunctionArgs): NamespaceJunctionArgs {
    return {
        ...val,
        nfsAccessPolicy: (val.nfsAccessPolicy) ?? "default",
    };
}

/**
 * Properties pertaining to the Nfs3Target
 */
export interface Nfs3TargetArgs {
    /**
     * IP address or host name of an NFSv3 host (e.g., 10.0.44.44).
     */
    target?: pulumi.Input<string>;
    /**
     * Identifies the StorageCache usage model to be used for this storage target.
     */
    usageModel?: pulumi.Input<string>;
    /**
     * Amount of time (in seconds) the cache waits before it checks the back-end storage for file updates.
     */
    verificationTimer?: pulumi.Input<number>;
    /**
     * Amount of time (in seconds) the cache waits after the last file change before it copies the changed file to back-end storage.
     */
    writeBackTimer?: pulumi.Input<number>;
}

/**
 * A set of rules describing access policies applied to NFSv3 clients of the cache.
 */
export interface NfsAccessPolicyArgs {
    /**
     * The set of rules describing client accesses allowed under this policy.
     */
    accessRules: pulumi.Input<pulumi.Input<NfsAccessRuleArgs>[]>;
    /**
     * Name identifying this policy. Access Policy names are not case sensitive.
     */
    name: pulumi.Input<string>;
}

/**
 * Rule to place restrictions on portions of the cache namespace being presented to clients.
 */
export interface NfsAccessRuleArgs {
    /**
     * Access allowed by this rule.
     */
    access: pulumi.Input<string | enums.NfsAccessRuleAccess>;
    /**
     * GID value that replaces 0 when rootSquash is true. This will use the value of anonymousUID if not provided.
     */
    anonymousGID?: pulumi.Input<string>;
    /**
     * UID value that replaces 0 when rootSquash is true. 65534 will be used if not provided.
     */
    anonymousUID?: pulumi.Input<string>;
    /**
     * Filter applied to the scope for this rule. The filter's format depends on its scope. 'default' scope matches all clients and has no filter value. 'network' scope takes a filter in CIDR format (for example, 10.99.1.0/24). 'host' takes an IP address or fully qualified domain name as filter. If a client does not match any filter rule and there is no default rule, access is denied.
     */
    filter?: pulumi.Input<string>;
    /**
     * Map root accesses to anonymousUID and anonymousGID.
     */
    rootSquash?: pulumi.Input<boolean>;
    /**
     * Scope for this rule. The scope and filter determine which clients match the rule.
     */
    scope: pulumi.Input<string | enums.NfsAccessRuleScope>;
    /**
     * For the default policy, allow access to subdirectories under the root export. If this is set to no, clients can only mount the path '/'. If set to yes, clients can mount a deeper path, like '/a/b'.
     */
    submountAccess?: pulumi.Input<boolean>;
    /**
     * Allow SUID semantics.
     */
    suid?: pulumi.Input<boolean>;
}

/**
 * SKU for the resource.
 */
export interface SkuName {
    /**
     * SKU name for this resource.
     */
    name?: string;
}

/**
 * SKU for the resource.
 */
export interface SkuNameArgs {
    /**
     * SKU name for this resource.
     */
    name?: pulumi.Input<string>;
}

/**
 * Properties pertaining to the UnknownTarget
 */
export interface UnknownTargetArgs {
    /**
     * Dictionary of string->string pairs containing information about the Storage Target.
     */
    attributes?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}





