import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
        password: pulumi.Input<string>;
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
         * Specifies the location of the key encryption key in Key Vault.
         */
        keyEncryptionKey?: pulumi.Input<KeyVaultKeyReferenceArgs>;
    }

    /**
     * Cache identity properties.
     */
    export interface CacheIdentityArgs {
        /**
         * The type of identity used for the cache
         */
        type?: pulumi.Input<enums.CacheIdentityType>;
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
     * SKU for the Cache.
     */
    export interface CacheSkuArgs {
        /**
         * SKU name for this Cache.
         */
        name?: pulumi.Input<string>;
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
     * Describes a reference to Key Vault Key.
     */
    export interface KeyVaultKeyReferenceArgs {
        /**
         * The URL referencing a key encryption key in Key Vault.
         */
        keyUrl: pulumi.Input<string>;
        /**
         * Describes a resource Id to source Key Vault.
         */
        sourceVault: pulumi.Input<KeyVaultKeyReferenceSourceVaultArgs>;
    }

    /**
     * Describes a resource Id to source Key Vault.
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
         * Namespace path on a Cache for a Storage Target.
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
     * Properties pertaining to the UnknownTarget
     */
    export interface UnknownTargetArgs {
        /**
         * Dictionary of string->string pairs containing information about the Storage Target.
         */
        attributes?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
