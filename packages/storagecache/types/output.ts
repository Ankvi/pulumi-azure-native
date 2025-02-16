import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Information about the AML file system archive
 */
export interface AmlFilesystemArchiveResponse {
    /**
     * Lustre file system path to archive relative to the file system root.  Specify '/' to archive all modified data.
     */
    filesystemPath: string;
    /**
     * The status of the archive
     */
    status: AmlFilesystemArchiveResponseStatus;
}

/**
 * The status of the archive
 */
export interface AmlFilesystemArchiveResponseStatus {
    /**
     * Server-defined error code for the archive operation
     */
    errorCode: string;
    /**
     * Server-defined error message for the archive operation
     */
    errorMessage: string;
    /**
     * The time of the last completed archive operation
     */
    lastCompletionTime: string;
    /**
     * The time the latest archive operation started
     */
    lastStartedTime: string;
    /**
     * The completion percentage of the archive operation
     */
    percentComplete: number;
    /**
     * The state of the archive operation
     */
    state: string;
}

/**
 * AML file system client information
 */
export interface AmlFilesystemClientInfoResponse {
    /**
     * Container Storage Interface information for the AML file system.
     */
    containerStorageInterface: AmlFilesystemContainerStorageInterfaceResponse;
    /**
     * The version of Lustre running in the AML file system
     */
    lustreVersion: string;
    /**
     * The IPv4 address used by clients to mount the AML file system's Lustre Management Service (MGS).
     */
    mgsAddress: string;
    /**
     * Recommended command to mount the AML file system
     */
    mountCommand: string;
}

/**
 * AML file system container storage interface information
 */
export interface AmlFilesystemContainerStorageInterfaceResponse {
    /**
     * Recommended AKS Persistent Volume for the CSI driver, in Base64 encoded YAML
     */
    persistentVolume: string;
    /**
     * Recommended AKS Persistent Volume Claim for the CSI driver, in Base64 encoded YAML
     */
    persistentVolumeClaim: string;
    /**
     * Recommended AKS Storage Class for the CSI driver, in Base64 encoded YAML
     */
    storageClass: string;
}

/**
 * AML file system encryption settings.
 */
export interface AmlFilesystemEncryptionSettingsResponse {
    /**
     * Specifies the location of the encryption key in Key Vault.
     */
    keyEncryptionKey?: KeyVaultKeyReferenceResponse;
}

/**
 * An indication of AML file system health. Gives more information about health than just that related to provisioning.
 */
export interface AmlFilesystemHealthResponse {
    /**
     * List of AML file system health states.
     */
    state?: string;
    /**
     * Server-defined error code for the AML file system health
     */
    statusCode?: string;
    /**
     * Describes the health state.
     */
    statusDescription?: string;
}

/**
 * AML file system HSM settings.
 */
export interface AmlFilesystemHsmSettingsResponse {
    /**
     * Resource ID of storage container used for hydrating the namespace and archiving from the namespace. The resource provider must have permission to create SAS tokens on the storage account.
     */
    container: string;
    /**
     * Only blobs in the non-logging container that start with this path/prefix get hydrated into the cluster namespace.
     */
    importPrefix?: string;
    /**
     * Resource ID of storage container used for logging events and errors.  Must be a separate container in the same storage account as the hydration and archive container. The resource provider must have permission to create SAS tokens on the storage account.
     */
    loggingContainer: string;
}
/**
 * amlFilesystemHsmSettingsResponseProvideDefaults sets the appropriate defaults for AmlFilesystemHsmSettingsResponse
 */
export function amlFilesystemHsmSettingsResponseProvideDefaults(val: AmlFilesystemHsmSettingsResponse): AmlFilesystemHsmSettingsResponse {
    return {
        ...val,
        importPrefix: (val.importPrefix) ?? "/",
    };
}

/**
 * Managed Identity properties.
 */
export interface AmlFilesystemIdentityResponse {
    /**
     * The principal ID for the user-assigned identity of the resource.
     */
    principalId: string;
    /**
     * The tenant ID associated with the resource.
     */
    tenantId: string;
    /**
     * The type of identity used for the resource.
     */
    type?: string;
    /**
     * A dictionary where each key is a user assigned identity resource ID, and each key's value is an empty dictionary.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentitiesResponseUserAssignedIdentities};
}

/**
 * Hydration and archive settings and status
 */
export interface AmlFilesystemResponseHsm {
    /**
     * Archive status
     */
    archiveStatus: AmlFilesystemArchiveResponse[];
    /**
     * Specifies HSM settings of the AML file system.
     */
    settings?: AmlFilesystemHsmSettingsResponse;
}
/**
 * amlFilesystemResponseHsmProvideDefaults sets the appropriate defaults for AmlFilesystemResponseHsm
 */
export function amlFilesystemResponseHsmProvideDefaults(val: AmlFilesystemResponseHsm): AmlFilesystemResponseHsm {
    return {
        ...val,
        settings: (val.settings ? amlFilesystemHsmSettingsResponseProvideDefaults(val.settings) : undefined),
    };
}

/**
 * Start time of a 30-minute weekly maintenance window.
 */
export interface AmlFilesystemResponseMaintenanceWindow {
    /**
     * Day of the week on which the maintenance window will occur.
     */
    dayOfWeek?: string;
    /**
     * The time of day (in UTC) to start the maintenance window.
     */
    timeOfDayUTC?: string;
}

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
    /**
     * Amount of time (in seconds) the cache waits before it checks the back-end storage for file updates.
     */
    verificationTimer?: number;
    /**
     * Amount of time (in seconds) the cache waits after the last file change before it copies the changed file to back-end storage.
     */
    writeBackTimer?: number;
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
    password?: string;
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
     * Specifies the location of the key encryption key in key vault.
     */
    keyEncryptionKey?: KeyVaultKeyReferenceResponse;
    /**
     * Specifies whether the service will automatically rotate to the newest version of the key in the key vault.
     */
    rotationToLatestKeyVersionEnabled?: boolean;
}

/**
 * An indication of cache health. Gives more information about health than just that related to provisioning.
 */
export interface CacheHealthResponse {
    /**
     * Outstanding conditions that need to be investigated and resolved.
     */
    conditions: ConditionResponse[];
    /**
     * List of cache health states. Down is when the cluster is not responding.  Degraded is when its functioning but has some alerts. Transitioning when it is creating or deleting. Unknown will be returned in old api versions when a new value is added in future versions. WaitingForKey is when the create is waiting for the system assigned identity to be given access to the encryption key in the encryption settings.
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
     * The principal ID for the system-assigned identity of the cache.
     */
    principalId: string;
    /**
     * The tenant ID associated with the cache.
     */
    tenantId: string;
    /**
     * The type of identity used for the cache
     */
    type?: string;
    /**
     * A dictionary where each key is a user assigned identity resource ID, and each key's value is an empty dictionary.
     */
    userAssignedIdentities?: {[key: string]: CacheIdentityResponseUserAssignedIdentities};
}

export interface CacheIdentityResponseUserAssignedIdentities {
    /**
     * The client ID of the user-assigned identity.
     */
    clientId: string;
    /**
     * The principal ID of the user-assigned identity.
     */
    principalId: string;
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
     * Array of additional IP addresses used by this cache.
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
 * SKU for the cache.
 */
export interface CacheResponseSku {
    /**
     * SKU name for this cache.
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
 * Cache Upgrade Settings.
 */
export interface CacheUpgradeSettingsResponse {
    /**
     * When upgradeScheduleEnabled is true, this field holds the user-chosen upgrade time. At the user-chosen time, the firmware update will automatically be installed on the cache.
     */
    scheduledTime?: string;
    /**
     * True if the user chooses to select an installation time between now and firmwareUpdateDeadline. Else the firmware will automatically be installed after firmwareUpdateDeadline if not triggered earlier via the upgrade operation.
     */
    upgradeScheduleEnabled?: boolean;
}

/**
 * Properties describing the software upgrade state of the cache.
 */
export interface CacheUpgradeStatusResponse {
    /**
     * Version string of the firmware currently installed on this cache.
     */
    currentFirmwareVersion: string;
    /**
     * Time at which the pending firmware update will automatically be installed on the cache.
     */
    firmwareUpdateDeadline: string;
    /**
     * True if there is a firmware update ready to install on this cache. The firmware will automatically be installed after firmwareUpdateDeadline if not triggered earlier via the upgrade operation.
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
        autoDownloadCertificate: (val.autoDownloadCertificate) ?? false,
        encryptLdapConnection: (val.encryptLdapConnection) ?? false,
        requireValidCertificate: (val.requireValidCertificate) ?? false,
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
 * Describes a reference to key vault key.
 */
export interface KeyVaultKeyReferenceResponse {
    /**
     * The URL referencing a key encryption key in key vault.
     */
    keyUrl: string;
    /**
     * Describes a resource Id to source key vault.
     */
    sourceVault: KeyVaultKeyReferenceResponseSourceVault;
}

/**
 * Describes a resource Id to source key vault.
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
     * Namespace path on a cache for a Storage Target.
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
    /**
     * Amount of time (in seconds) the cache waits before it checks the back-end storage for file updates.
     */
    verificationTimer?: number;
    /**
     * Amount of time (in seconds) the cache waits after the last file change before it copies the changed file to back-end storage.
     */
    writeBackTimer?: number;
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
 * A priming job instance.
 */
export interface PrimingJobResponse {
    /**
     * The job details or error information if any.
     */
    primingJobDetails: string;
    /**
     * The unique identifier of the priming job.
     */
    primingJobId: string;
    /**
     * The priming job name.
     */
    primingJobName: string;
    /**
     * The current progress of the priming job, as a percentage.
     */
    primingJobPercentComplete: number;
    /**
     * The state of the priming operation.
     */
    primingJobState: string;
    /**
     * The status code of the priming job.
     */
    primingJobStatus: string;
}

/**
 * SKU for the resource.
 */
export interface SkuNameResponse {
    /**
     * SKU name for this resource.
     */
    name?: string;
}

/**
 * Storage Target space allocation properties.
 */
export interface StorageTargetSpaceAllocationResponse {
    /**
     * The percentage of cache space allocated for this storage target
     */
    allocationPercentage?: number;
    /**
     * Name of the storage target.
     */
    name?: string;
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

export interface UserAssignedIdentitiesResponseUserAssignedIdentities {
    /**
     * The client ID of the user-assigned identity.
     */
    clientId: string;
    /**
     * The principal ID of the user-assigned identity.
     */
    principalId: string;
}





