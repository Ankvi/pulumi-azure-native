import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Properties pertaining to the BlobNfsTarget.
     */
    export interface BlobNfsTargetResponse {
        /**
         * Resource ID of the storage container.
         */
        target?: string;
        /**
         * Identifies the StorageCache usage model to be used for this storage target.
         */
        usageModel?: string;
    }

    /**
     * Active Directory settings used to join a cache to a domain.
     */
    export interface CacheActiveDirectorySettingsResponse {
        /**
         * The NetBIOS name to assign to the HPC Cache when it joins the Active Directory domain as a server. Length must 1-15 characters from the class [-0-9a-zA-Z].
         */
        cacheNetBiosName: string;
        /**
         * Active Directory admin credentials used to join the HPC Cache to a domain.
         */
        credentials?: CacheActiveDirectorySettingsResponseCredentials;
        /**
         * True if the HPC Cache is joined to the Active Directory domain.
         */
        domainJoined: string;
        /**
         * The fully qualified domain name of the Active Directory domain controller.
         */
        domainName: string;
        /**
         * The Active Directory domain's NetBIOS name.
         */
        domainNetBiosName: string;
        /**
         * Primary DNS IP address used to resolve the Active Directory domain controller's fully qualified domain name.
         */
        primaryDnsIpAddress: string;
        /**
         * Secondary DNS IP address used to resolve the Active Directory domain controller's fully qualified domain name.
         */
        secondaryDnsIpAddress?: string;
    }

    /**
     * Active Directory admin credentials used to join the HPC Cache to a domain.
     */
    export interface CacheActiveDirectorySettingsResponseCredentials {
        /**
         * Plain text password of the Active Directory domain administrator. This value is stored encrypted and not returned on response.
         */
        password: string;
        /**
         * Username of the Active Directory domain administrator. This value is stored encrypted and not returned on response.
         */
        username: string;
    }

    /**
     * Cache Directory Services settings.
     */
    export interface CacheDirectorySettingsResponse {
        /**
         * Specifies settings for joining the HPC Cache to an Active Directory domain.
         */
        activeDirectory?: CacheActiveDirectorySettingsResponse;
        /**
         * Specifies settings for Extended Groups. Extended Groups allows users to be members of more than 16 groups.
         */
        usernameDownload?: CacheUsernameDownloadSettingsResponse;
    }
    /**
     * cacheDirectorySettingsResponseProvideDefaults sets the appropriate defaults for CacheDirectorySettingsResponse
     */
    export function cacheDirectorySettingsResponseProvideDefaults(val: CacheDirectorySettingsResponse): CacheDirectorySettingsResponse {
        return {
            ...val,
            usernameDownload: (val.usernameDownload ? cacheUsernameDownloadSettingsResponseProvideDefaults(val.usernameDownload) : undefined),
        };
    }

    /**
     * Cache encryption settings.
     */
    export interface CacheEncryptionSettingsResponse {
        /**
         * Specifies the location of the key encryption key in Key Vault.
         */
        keyEncryptionKey?: KeyVaultKeyReferenceResponse;
    }

    /**
     * An indication of Cache health. Gives more information about health than just that related to provisioning.
     */
    export interface CacheHealthResponse {
        /**
         * Outstanding conditions that need to be investigated and resolved.
         */
        conditions: ConditionResponse[];
        /**
         * List of Cache health states.
         */
        state?: string;
        /**
         * Describes explanation of state.
         */
        statusDescription?: string;
    }

    /**
     * Cache identity properties.
     */
    export interface CacheIdentityResponse {
        /**
         * The principal id of the cache.
         */
        principalId: string;
        /**
         * The tenant id associated with the cache.
         */
        tenantId: string;
        /**
         * The type of identity used for the cache
         */
        type?: string;
    }

    /**
     * Cache network settings.
     */
    export interface CacheNetworkSettingsResponse {
        /**
         * DNS search domain
         */
        dnsSearchDomain?: string;
        /**
         * DNS servers for the cache to use.  It will be set from the network configuration if no value is provided.
         */
        dnsServers?: string[];
        /**
         * The IPv4 maximum transmission unit configured for the subnet.
         */
        mtu?: number;
        /**
         * NTP server IP Address or FQDN for the cache to use. The default is time.windows.com.
         */
        ntpServer?: string;
        /**
         * Array of additional IP addresses used by this Cache.
         */
        utilityAddresses: string[];
    }
    /**
     * cacheNetworkSettingsResponseProvideDefaults sets the appropriate defaults for CacheNetworkSettingsResponse
     */
    export function cacheNetworkSettingsResponseProvideDefaults(val: CacheNetworkSettingsResponse): CacheNetworkSettingsResponse {
        return {
            ...val,
            mtu: (val.mtu) ?? 1500,
            ntpServer: (val.ntpServer) ?? "time.windows.com",
        };
    }

    /**
     * SKU for the Cache.
     */
    export interface CacheResponseSku {
        /**
         * SKU name for this Cache.
         */
        name?: string;
    }

    /**
     * Cache security settings.
     */
    export interface CacheSecuritySettingsResponse {
        /**
         * NFS access policies defined for this cache.
         */
        accessPolicies?: NfsAccessPolicyResponse[];
    }

    /**
     * Properties describing the software upgrade state of the Cache.
     */
    export interface CacheUpgradeStatusResponse {
        /**
         * Version string of the firmware currently installed on this Cache.
         */
        currentFirmwareVersion: string;
        /**
         * Time at which the pending firmware update will automatically be installed on the Cache.
         */
        firmwareUpdateDeadline: string;
        /**
         * True if there is a firmware update ready to install on this Cache. The firmware will automatically be installed after firmwareUpdateDeadline if not triggered earlier via the upgrade operation.
         */
        firmwareUpdateStatus: string;
        /**
         * Time of the last successful firmware update.
         */
        lastFirmwareUpdate: string;
        /**
         * When firmwareUpdateAvailable is true, this field holds the version string for the update.
         */
        pendingFirmwareVersion: string;
    }

    /**
     * Settings for Extended Groups username and group download.
     */
    export interface CacheUsernameDownloadSettingsResponse {
        /**
         * Determines if the certificate should be automatically downloaded. This applies to 'caCertificateURI' only if 'requireValidCertificate' is true.
         */
        autoDownloadCertificate?: boolean;
        /**
         * The URI of the CA certificate to validate the LDAP secure connection. This field must be populated when 'requireValidCertificate' is set to true.
         */
        caCertificateURI?: string;
        /**
         * When present, these are the credentials for the secure LDAP connection.
         */
        credentials?: CacheUsernameDownloadSettingsResponseCredentials;
        /**
         * Whether or not the LDAP connection should be encrypted.
         */
        encryptLdapConnection?: boolean;
        /**
         * Whether or not Extended Groups is enabled.
         */
        extendedGroups?: boolean;
        /**
         * The URI of the file containing group information (in /etc/group file format). This field must be populated when 'usernameSource' is set to 'File'.
         */
        groupFileURI?: string;
        /**
         * The base distinguished name for the LDAP domain.
         */
        ldapBaseDN?: string;
        /**
         * The fully qualified domain name or IP address of the LDAP server to use.
         */
        ldapServer?: string;
        /**
         * Determines if the certificates must be validated by a certificate authority. When true, caCertificateURI must be provided.
         */
        requireValidCertificate?: boolean;
        /**
         * The URI of the file containing user information (in /etc/passwd file format). This field must be populated when 'usernameSource' is set to 'File'.
         */
        userFileURI?: string;
        /**
         * Indicates whether or not the HPC Cache has performed the username download successfully.
         */
        usernameDownloaded: string;
        /**
         * This setting determines how the cache gets username and group names for clients.
         */
        usernameSource?: string;
    }
    /**
     * cacheUsernameDownloadSettingsResponseProvideDefaults sets the appropriate defaults for CacheUsernameDownloadSettingsResponse
     */
    export function cacheUsernameDownloadSettingsResponseProvideDefaults(val: CacheUsernameDownloadSettingsResponse): CacheUsernameDownloadSettingsResponse {
        return {
            ...val,
            usernameSource: (val.usernameSource) ?? "None",
        };
    }

    /**
     * When present, these are the credentials for the secure LDAP connection.
     */
    export interface CacheUsernameDownloadSettingsResponseCredentials {
        /**
         * The Bind Distinguished Name identity to be used in the secure LDAP connection. This value is stored encrypted and not returned on response.
         */
        bindDn?: string;
        /**
         * The Bind password to be used in the secure LDAP connection. This value is stored encrypted and not returned on response.
         */
        bindPassword?: string;
    }

    /**
     * Properties pertaining to the ClfsTarget
     */
    export interface ClfsTargetResponse {
        /**
         * Resource ID of storage container.
         */
        target?: string;
    }

    /**
     * Outstanding conditions that will need to be resolved.
     */
    export interface ConditionResponse {
        /**
         * The issue requiring attention.
         */
        message: string;
        /**
         * The time when the condition was raised.
         */
        timestamp: string;
    }

    /**
     * Describes a reference to Key Vault Key.
     */
    export interface KeyVaultKeyReferenceResponse {
        /**
         * The URL referencing a key encryption key in Key Vault.
         */
        keyUrl: string;
        /**
         * Describes a resource Id to source Key Vault.
         */
        sourceVault: KeyVaultKeyReferenceResponseSourceVault;
    }

    /**
     * Describes a resource Id to source Key Vault.
     */
    export interface KeyVaultKeyReferenceResponseSourceVault {
        /**
         * Resource Id.
         */
        id?: string;
    }

    /**
     * A namespace junction.
     */
    export interface NamespaceJunctionResponse {
        /**
         * Namespace path on a Cache for a Storage Target.
         */
        namespacePath?: string;
        /**
         * Name of the access policy applied to this junction.
         */
        nfsAccessPolicy?: string;
        /**
         * NFS export where targetPath exists.
         */
        nfsExport?: string;
        /**
         * Path in Storage Target to which namespacePath points.
         */
        targetPath?: string;
    }
    /**
     * namespaceJunctionResponseProvideDefaults sets the appropriate defaults for NamespaceJunctionResponse
     */
    export function namespaceJunctionResponseProvideDefaults(val: NamespaceJunctionResponse): NamespaceJunctionResponse {
        return {
            ...val,
            nfsAccessPolicy: (val.nfsAccessPolicy) ?? "default",
        };
    }

    /**
     * Properties pertaining to the Nfs3Target
     */
    export interface Nfs3TargetResponse {
        /**
         * IP address or host name of an NFSv3 host (e.g., 10.0.44.44).
         */
        target?: string;
        /**
         * Identifies the StorageCache usage model to be used for this storage target.
         */
        usageModel?: string;
    }

    /**
     * A set of rules describing access policies applied to NFSv3 clients of the cache.
     */
    export interface NfsAccessPolicyResponse {
        /**
         * The set of rules describing client accesses allowed under this policy.
         */
        accessRules: NfsAccessRuleResponse[];
        /**
         * Name identifying this policy. Access Policy names are not case sensitive.
         */
        name: string;
    }

    /**
     * Rule to place restrictions on portions of the cache namespace being presented to clients.
     */
    export interface NfsAccessRuleResponse {
        /**
         * Access allowed by this rule.
         */
        access: string;
        /**
         * GID value that replaces 0 when rootSquash is true. This will use the value of anonymousUID if not provided.
         */
        anonymousGID?: string;
        /**
         * UID value that replaces 0 when rootSquash is true. 65534 will be used if not provided.
         */
        anonymousUID?: string;
        /**
         * Filter applied to the scope for this rule. The filter's format depends on its scope. 'default' scope matches all clients and has no filter value. 'network' scope takes a filter in CIDR format (for example, 10.99.1.0/24). 'host' takes an IP address or fully qualified domain name as filter. If a client does not match any filter rule and there is no default rule, access is denied.
         */
        filter?: string;
        /**
         * Map root accesses to anonymousUID and anonymousGID.
         */
        rootSquash?: boolean;
        /**
         * Scope for this rule. The scope and filter determine which clients match the rule.
         */
        scope: string;
        /**
         * For the default policy, allow access to subdirectories under the root export. If this is set to no, clients can only mount the path '/'. If set to yes, clients can mount a deeper path, like '/a/b'.
         */
        submountAccess?: boolean;
        /**
         * Allow SUID semantics.
         */
        suid?: boolean;
    }

    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    export interface SystemDataResponse {
        /**
         * The timestamp of resource creation (UTC).
         */
        createdAt?: string;
        /**
         * The identity that created the resource.
         */
        createdBy?: string;
        /**
         * The type of identity that created the resource.
         */
        createdByType?: string;
        /**
         * The timestamp of resource last modification (UTC)
         */
        lastModifiedAt?: string;
        /**
         * The identity that last modified the resource.
         */
        lastModifiedBy?: string;
        /**
         * The type of identity that last modified the resource.
         */
        lastModifiedByType?: string;
    }

    /**
     * Properties pertaining to the UnknownTarget
     */
    export interface UnknownTargetResponse {
        /**
         * Dictionary of string->string pairs containing information about the Storage Target.
         */
        attributes?: {[key: string]: string};
    }
