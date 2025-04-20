import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Encryption settings
 */
export interface AccountEncryptionResponse {
    /**
     * Identity used to authenticate to KeyVault. Applicable if keySource is 'Microsoft.KeyVault'.
     */
    identity?: EncryptionIdentityResponse;
    /**
     * The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.NetApp, Microsoft.KeyVault
     */
    keySource?: string;
    /**
     * Properties provided by KeVault. Applicable if keySource is 'Microsoft.KeyVault'.
     */
    keyVaultProperties?: KeyVaultPropertiesResponse;
}
/**
 * accountEncryptionResponseProvideDefaults sets the appropriate defaults for AccountEncryptionResponse
 */
export function accountEncryptionResponseProvideDefaults(val: AccountEncryptionResponse): AccountEncryptionResponse {
    return {
        ...val,
        keySource: (val.keySource) ?? "Microsoft.NetApp",
    };
}

/**
 * Active Directory
 */
export interface ActiveDirectoryResponse {
    /**
     * Id of the Active Directory
     */
    activeDirectoryId?: string;
    /**
     * Name of the active directory machine. This optional parameter is used only while creating kerberos volume
     */
    adName?: string;
    /**
     * Users to be added to the Built-in Administrators active directory group. A list of unique usernames without domain specifier
     */
    administrators?: string[];
    /**
     * If enabled, AES encryption will be enabled for SMB communication.
     */
    aesEncryption?: boolean;
    /**
     *  If enabled, NFS client local users can also (in addition to LDAP users) access the NFS volumes.
     */
    allowLocalNfsUsersWithLdap?: boolean;
    /**
     * Users to be added to the Built-in Backup Operator active directory group. A list of unique usernames without domain specifier
     */
    backupOperators?: string[];
    /**
     * Comma separated list of DNS server IP addresses (IPv4 only) for the Active Directory domain
     */
    dns?: string;
    /**
     * Name of the Active Directory domain
     */
    domain?: string;
    /**
     * If enabled, Traffic between the SMB server to Domain Controller (DC) will be encrypted.
     */
    encryptDCConnections?: boolean;
    /**
     * kdc server IP address for the active directory machine. This optional parameter is used only while creating kerberos volume.
     */
    kdcIP?: string;
    /**
     * Specifies whether or not the LDAP traffic needs to be secured via TLS.
     */
    ldapOverTLS?: boolean;
    /**
     * LDAP Search scope options
     */
    ldapSearchScope?: LdapSearchScopeOptResponse;
    /**
     * Specifies whether or not the LDAP traffic needs to be signed.
     */
    ldapSigning?: boolean;
    /**
     * The Organizational Unit (OU) within the Windows Active Directory
     */
    organizationalUnit?: string;
    /**
     * Plain text password of Active Directory domain administrator, value is masked in the response
     */
    password?: string;
    /**
     * Comma separated list of IPv4 addresses of preferred servers for LDAP client. At most two comma separated IPv4 addresses can be passed.
     */
    preferredServersForLdapClient?: string;
    /**
     * Domain Users in the Active directory to be given SeSecurityPrivilege privilege (Needed for SMB Continuously available shares for SQL). A list of unique usernames without domain specifier
     */
    securityOperators?: string[];
    /**
     * When LDAP over SSL/TLS is enabled, the LDAP client is required to have base64 encoded Active Directory Certificate Service's self-signed root CA certificate, this optional parameter is used only for dual protocol with LDAP user-mapping volumes.
     */
    serverRootCACertificate?: string;
    /**
     * The Active Directory site the service will limit Domain Controller discovery to
     */
    site?: string;
    /**
     * NetBIOS name of the SMB server. This name will be registered as a computer account in the AD and used to mount volumes
     */
    smbServerName?: string;
    /**
     * Status of the Active Directory
     */
    status: string;
    /**
     * Any details in regards to the Status of the Active Directory
     */
    statusDetails: string;
    /**
     * A domain user account with permission to create machine accounts
     */
    username?: string;
}
/**
 * activeDirectoryResponseProvideDefaults sets the appropriate defaults for ActiveDirectoryResponse
 */
export function activeDirectoryResponseProvideDefaults(val: ActiveDirectoryResponse): ActiveDirectoryResponse {
    return {
        ...val,
        organizationalUnit: (val.organizationalUnit) ?? "CN=Computers",
    };
}

/**
 * Properties of the server managing the lifecycle of volume buckets
 */
export interface BucketServerPropertiesResponse {
    /**
     * Certificate Common Name taken from the certificate installed on the bucket server
     */
    certificateCommonName: string;
    /**
     * The bucket server's certificate expiry date.
     */
    certificateExpiryDate: string;
    /**
     * The host part of the bucket URL, resolving to the bucket IP address and allowed by the server certificate.
     */
    fqdn?: string;
    /**
     * The bucket server's IPv4 address
     */
    ipAddress: string;
}

/**
 * The effective CIFS username when accessing the volume data.
 */
export interface CifsUserResponse {
    /**
     * The CIFS user's username
     */
    username?: string;
}

/**
 * Daily Schedule properties
 */
export interface DailyScheduleResponse {
    /**
     * Indicates which hour in UTC timezone a snapshot should be taken
     */
    hour?: number;
    /**
     * Indicates which minute snapshot should be taken
     */
    minute?: number;
    /**
     * Daily snapshot count to keep
     */
    snapshotsToKeep?: number;
    /**
     * Resource size in bytes, current storage usage for the volume in bytes
     */
    usedBytes?: number;
}

/**
 * Identity used to authenticate with key vault.
 */
export interface EncryptionIdentityResponse {
    /**
     * The principal ID (object ID) of the identity used to authenticate with key vault. Read-only.
     */
    principalId: string;
    /**
     * The ARM resource identifier of the user assigned identity used to authenticate with key vault. Applicable if identity.type has 'UserAssigned'. It should match key of identity.userAssignedIdentities.
     */
    userAssignedIdentity?: string;
}

/**
 * Volume Export Policy Rule
 */
export interface ExportPolicyRuleResponse {
    /**
     * Client ingress specification as comma separated string with IPv4 CIDRs, IPv4 host addresses and host names
     */
    allowedClients?: string;
    /**
     * This parameter specifies who is authorized to change the ownership of a file. restricted - Only root user can change the ownership of the file. unrestricted - Non-root users can change ownership of files that they own.
     */
    chownMode?: string;
    /**
     * Allows CIFS protocol
     */
    cifs?: boolean;
    /**
     * Has root access to volume
     */
    hasRootAccess?: boolean;
    /**
     * Kerberos5 Read only access. To be use with swagger version 2020-05-01 or later
     */
    kerberos5ReadOnly?: boolean;
    /**
     * Kerberos5 Read and write access. To be use with swagger version 2020-05-01 or later
     */
    kerberos5ReadWrite?: boolean;
    /**
     * Kerberos5i Read only access. To be use with swagger version 2020-05-01 or later
     */
    kerberos5iReadOnly?: boolean;
    /**
     * Kerberos5i Read and write access. To be use with swagger version 2020-05-01 or later
     */
    kerberos5iReadWrite?: boolean;
    /**
     * Kerberos5p Read only access. To be use with swagger version 2020-05-01 or later
     */
    kerberos5pReadOnly?: boolean;
    /**
     * Kerberos5p Read and write access. To be use with swagger version 2020-05-01 or later
     */
    kerberos5pReadWrite?: boolean;
    /**
     * Allows NFSv3 protocol. Enable only for NFSv3 type volumes
     */
    nfsv3?: boolean;
    /**
     * Allows NFSv4.1 protocol. Enable only for NFSv4.1 type volumes
     */
    nfsv41?: boolean;
    /**
     * Order index
     */
    ruleIndex?: number;
    /**
     * Read only access
     */
    unixReadOnly?: boolean;
    /**
     * Read and write access
     */
    unixReadWrite?: boolean;
}
/**
 * exportPolicyRuleResponseProvideDefaults sets the appropriate defaults for ExportPolicyRuleResponse
 */
export function exportPolicyRuleResponseProvideDefaults(val: ExportPolicyRuleResponse): ExportPolicyRuleResponse {
    return {
        ...val,
        chownMode: (val.chownMode) ?? "Restricted",
        hasRootAccess: (val.hasRootAccess) ?? true,
        kerberos5ReadOnly: (val.kerberos5ReadOnly) ?? false,
        kerberos5ReadWrite: (val.kerberos5ReadWrite) ?? false,
        kerberos5iReadOnly: (val.kerberos5iReadOnly) ?? false,
        kerberos5iReadWrite: (val.kerberos5iReadWrite) ?? false,
        kerberos5pReadOnly: (val.kerberos5pReadOnly) ?? false,
        kerberos5pReadWrite: (val.kerberos5pReadWrite) ?? false,
    };
}

/**
 * File System user having access to volume data. For Unix, this is the user's uid and gid. For Windows, this is the user's username. Note that the Unix and Windows user details are mutually exclusive, meaning one or other must be supplied, but not both.
 */
export interface FileSystemUserResponse {
    /**
     * The effective CIFS username when accessing the volume data.
     */
    cifsUser?: CifsUserResponse;
    /**
     * The effective NFS User ID and Group ID when accessing the volume data.
     */
    nfsUser?: NfsUserResponse;
}

/**
 * Hourly Schedule properties
 */
export interface HourlyScheduleResponse {
    /**
     * Indicates which minute snapshot should be taken
     */
    minute?: number;
    /**
     * Hourly snapshot count to keep
     */
    snapshotsToKeep?: number;
    /**
     * Resource size in bytes, current storage usage for the volume in bytes
     */
    usedBytes?: number;
}

/**
 * Pairs of virtual network ID and private endpoint ID. Every virtual network that has volumes encrypted with customer-managed keys needs its own key vault private endpoint.
 */
export interface KeyVaultPrivateEndpointResponse {
    /**
     * Identifier of the private endpoint to reach the Azure Key Vault
     */
    privateEndpointId?: string;
    /**
     * Identifier for the virtual network id
     */
    virtualNetworkId?: string;
}

/**
 * Properties of key vault.
 */
export interface KeyVaultPropertiesResponse {
    /**
     * The name of KeyVault key.
     */
    keyName: string;
    /**
     * UUID v4 used to identify the Azure Key Vault configuration
     */
    keyVaultId: string;
    /**
     * The resource ID of KeyVault.
     */
    keyVaultResourceId?: string;
    /**
     * The Uri of KeyVault.
     */
    keyVaultUri: string;
    /**
     * Status of the KeyVault connection.
     */
    status: string;
}

/**
 * LDAP search scope 
 */
export interface LdapSearchScopeOptResponse {
    /**
     * This specifies the group DN, which overrides the base DN for group lookups.
     */
    groupDN?: string;
    /**
     * This specifies the custom LDAP search filter to be used when looking up group membership from LDAP server.
     */
    groupMembershipFilter?: string;
    /**
     * This specifies the user DN, which overrides the base DN for user lookups.
     */
    userDN?: string;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityResponse {
    /**
     * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    principalId: string;
    /**
     * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    tenantId: string;
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: string;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
}

/**
 * Monthly Schedule properties
 */
export interface MonthlyScheduleResponse {
    /**
     * Indicates which days of the month snapshot should be taken. A comma delimited string.
     */
    daysOfMonth?: string;
    /**
     * Indicates which hour in UTC timezone a snapshot should be taken
     */
    hour?: number;
    /**
     * Indicates which minute snapshot should be taken
     */
    minute?: number;
    /**
     * Monthly snapshot count to keep
     */
    snapshotsToKeep?: number;
    /**
     * Resource size in bytes, current storage usage for the volume in bytes
     */
    usedBytes?: number;
}

/**
 * Mount target properties
 */
export interface MountTargetPropertiesResponse {
    /**
     * UUID v4 used to identify the MountTarget
     */
    fileSystemId: string;
    /**
     * The mount target's IPv4 address
     */
    ipAddress: string;
    /**
     * UUID v4 used to identify the MountTarget
     */
    mountTargetId: string;
    /**
     * The SMB server's Fully Qualified Domain Name, FQDN
     */
    smbServerFqdn?: string;
}

/**
 * The effective NFS User ID and Group ID when accessing the volume data.
 */
export interface NfsUserResponse {
    /**
     * The NFS user's GID
     */
    groupId?: number;
    /**
     * The NFS user's UID
     */
    userId?: number;
}

/**
 * Application specific parameters for the placement of volumes in the volume group
 */
export interface PlacementKeyValuePairsResponse {
    /**
     * Key for an application specific parameter for the placement of volumes in the volume group
     */
    key: string;
    /**
     * Value for an application specific parameter for the placement of volumes in the volume group
     */
    value: string;
}

/**
 * Quota report record properties
 */
export interface QuotaReportResponse {
    /**
     * Flag to indicate whether the quota is derived from default quota.
     */
    isDerivedQuota?: boolean;
    /**
     * Percentage of used size compared to total size.
     */
    percentageUsed?: number;
    /**
     * Specifies the total size limit in kibibytes for the user/group quota.
     */
    quotaLimitTotalInKiBs?: number;
    /**
     * Specifies the current usage in kibibytes for the user/group quota.
     */
    quotaLimitUsedInKiBs?: number;
    /**
     * UserID/GroupID/SID based on the quota target type. UserID and groupID can be found by running ‘id’ or ‘getent’ command for the user or group and SID can be found by running <wmic useraccount where name='user-name' get sid>
     */
    quotaTarget?: string;
    /**
     * Type of quota
     */
    quotaType?: string;
}

/**
 * The full path to a volume that is to be migrated into ANF. Required for Migration volumes
 */
export interface RemotePathResponse {
    /**
     * The Path to a ONTAP Host
     */
    externalHostName: string;
    /**
     * The name of a server on the ONTAP Host
     */
    serverName: string;
    /**
     * The name of a volume on the server
     */
    volumeName: string;
}

/**
 * Replication properties
 */
export interface ReplicationObjectResponse {
    /**
     * Indicates whether the local volume is the source or destination for the Volume Replication
     */
    endpointType?: string;
    /**
     * The full path to a volume that is to be migrated into ANF. Required for Migration volumes
     */
    remotePath?: RemotePathResponse;
    /**
     * The remote region for the other end of the Volume Replication.
     */
    remoteVolumeRegion?: string;
    /**
     * The resource ID of the remote volume. Required for cross region and cross zone replication
     */
    remoteVolumeResourceId?: string;
    /**
     * Id
     */
    replicationId: string;
    /**
     * Schedule
     */
    replicationSchedule?: string;
}

/**
 * Replication properties
 */
export interface ReplicationResponse {
    /**
     * Indicates whether the local volume is the source or destination for the Volume Replication
     */
    endpointType?: string;
    /**
     * The remote region for the other end of the Volume Replication.
     */
    remoteVolumeRegion?: string;
    /**
     * The resource ID of the remote volume.
     */
    remoteVolumeResourceId: string;
    /**
     * UUID v4 used to identify the replication.
     */
    replicationId: string;
    /**
     * Schedule
     */
    replicationSchedule?: string;
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
 * User assigned identity properties
 */
export interface UserAssignedIdentityResponse {
    /**
     * The client ID of the assigned identity.
     */
    clientId: string;
    /**
     * The principal ID of the assigned identity.
     */
    principalId: string;
}

/**
 * Volume Backup Properties
 */
export interface VolumeBackupPropertiesResponse {
    /**
     * Backup Policy Resource ID
     */
    backupPolicyId?: string;
    /**
     * Backup Vault Resource ID
     */
    backupVaultId?: string;
    /**
     * Policy Enforced
     */
    policyEnforced?: boolean;
}

/**
 * Volume details using the backup policy
 */
export interface VolumeBackupsResponse {
    /**
     * Total count of backups for volume
     */
    backupsCount?: number;
    /**
     * Policy enabled
     */
    policyEnabled?: boolean;
    /**
     * Volume name
     */
    volumeName?: string;
    /**
     * ResourceId used to identify the Volume
     */
    volumeResourceId?: string;
}

/**
 * Volume group properties
 */
export interface VolumeGroupMetaDataResponse {
    /**
     * Application specific identifier
     */
    applicationIdentifier?: string;
    /**
     * Application Type
     */
    applicationType?: string;
    /**
     * Application specific placement rules for the volume group
     */
    globalPlacementRules?: PlacementKeyValuePairsResponse[];
    /**
     * Group Description
     */
    groupDescription?: string;
    /**
     * Number of volumes in volume group
     */
    volumesCount: number;
}

/**
 * Volume resource
 */
export interface VolumeGroupVolumePropertiesResponse {
    /**
     * Actual throughput in MiB/s for auto qosType volumes calculated based on size and serviceLevel
     */
    actualThroughputMibps: number;
    /**
     * Specifies whether the volume is enabled for Azure VMware Solution (AVS) datastore purpose
     */
    avsDataStore?: string;
    /**
     * Resource identifier used to identify the Backup.
     */
    backupId?: string;
    /**
     * Unique Baremetal Tenant Identifier.
     */
    baremetalTenantId: string;
    /**
     * Pool Resource Id used in case of creating a volume through volume group
     */
    capacityPoolResourceId?: string;
    /**
     * When a volume is being restored from another volume's snapshot, will show the percentage completion of this cloning process. When this value is empty/null there is no cloning process currently happening on this volume. This value will update every 5 minutes during cloning.
     */
    cloneProgress: number;
    /**
     * Specifies whether Cool Access(tiering) is enabled for the volume.
     */
    coolAccess?: boolean;
    /**
     * coolAccessRetrievalPolicy determines the data retrieval behavior from the cool tier to standard storage based on the read pattern for cool access enabled volumes. The possible values for this field are: 
     *  Default - Data will be pulled from cool tier to standard storage on random reads. This policy is the default.
     *  OnRead - All client-driven data read is pulled from cool tier to standard storage on both sequential and random reads.
     *  Never - No client-driven data is pulled from cool tier to standard storage.
     */
    coolAccessRetrievalPolicy?: string;
    /**
     * coolAccessTieringPolicy determines which cold data blocks are moved to cool tier. The possible values for this field are: Auto - Moves cold user data blocks in both the Snapshot copies and the active file system to the cool tier tier. This policy is the default. SnapshotOnly - Moves user data blocks of the Volume Snapshot copies that are not associated with the active file system to the cool tier.
     */
    coolAccessTieringPolicy?: string;
    /**
     * Specifies the number of days after which data that is not accessed by clients will be tiered.
     */
    coolnessPeriod?: number;
    /**
     * A unique file path for the volume. Used when creating mount targets
     */
    creationToken: string;
    /**
     * DataProtection type volumes include an object containing details of the replication
     */
    dataProtection?: VolumePropertiesResponseDataProtection;
    /**
     * Data store resource unique identifier
     */
    dataStoreResourceId: string[];
    /**
     * Default group quota for volume in KiBs. If isDefaultQuotaEnabled is set, the minimum value of 4 KiBs applies.
     */
    defaultGroupQuotaInKiBs?: number;
    /**
     * Default user quota for volume in KiBs. If isDefaultQuotaEnabled is set, the minimum value of 4 KiBs applies .
     */
    defaultUserQuotaInKiBs?: number;
    /**
     * If enabled (true) the snapshot the volume was created from will be automatically deleted after the volume create operation has finished.  Defaults to false
     */
    deleteBaseSnapshot?: boolean;
    /**
     * The effective value of the network features type available to the volume, or current effective state of update.
     */
    effectiveNetworkFeatures: string;
    /**
     * Flag indicating whether subvolume operations are enabled on the volume
     */
    enableSubvolumes?: string;
    /**
     * Specifies if the volume is encrypted or not. Only available on volumes created or updated after 2022-01-01.
     */
    encrypted: boolean;
    /**
     * Source of key used to encrypt data in volume. Applicable if NetApp account has encryption.keySource = 'Microsoft.KeyVault'. Possible values (case-insensitive) are: 'Microsoft.NetApp, Microsoft.KeyVault'
     */
    encryptionKeySource?: string;
    /**
     * Set of export policy rules
     */
    exportPolicy?: VolumePropertiesResponseExportPolicy;
    /**
     * Flag indicating whether file access logs are enabled for the volume, based on active diagnostic settings present on the volume.
     */
    fileAccessLogs: string;
    /**
     * Unique FileSystem Identifier.
     */
    fileSystemId: string;
    /**
     * Resource Id
     */
    id: string;
    /**
     * Specifies if default quota is enabled for the volume.
     */
    isDefaultQuotaEnabled?: boolean;
    /**
     * Specifies whether volume is a Large Volume or Regular Volume.
     */
    isLargeVolume?: boolean;
    /**
     * Restoring
     */
    isRestoring?: boolean;
    /**
     * Describe if a volume is KerberosEnabled. To be use with swagger version 2020-05-01 or later
     */
    kerberosEnabled?: boolean;
    /**
     * The resource ID of private endpoint for KeyVault. It must reside in the same VNET as the volume. Only applicable if encryptionKeySource = 'Microsoft.KeyVault'.
     */
    keyVaultPrivateEndpointResourceId?: string;
    /**
     * Specifies whether LDAP is enabled or not for a given NFS volume.
     */
    ldapEnabled?: boolean;
    /**
     * Maximum number of files allowed. Needs a service request in order to be changed. Only allowed to be changed if volume quota is more than 4TiB.
     */
    maximumNumberOfFiles: number;
    /**
     * List of mount targets
     */
    mountTargets: MountTargetPropertiesResponse[];
    /**
     * Resource name
     */
    name?: string;
    /**
     * The original value of the network features type available to the volume at the time it was created.
     */
    networkFeatures?: string;
    /**
     * Network Sibling Set ID for the the group of volumes sharing networking resources.
     */
    networkSiblingSetId: string;
    /**
     * Id of the snapshot or backup that the volume is restored from.
     */
    originatingResourceId: string;
    /**
     * Application specific placement rules for the particular volume
     */
    placementRules?: PlacementKeyValuePairsResponse[];
    /**
     * Set of protocol types, default NFSv3, CIFS for SMB protocol
     */
    protocolTypes?: string[];
    /**
     * The availability zone where the volume is provisioned. This refers to the logical availability zone where the volume resides.
     */
    provisionedAvailabilityZone: string;
    /**
     * Azure lifecycle management
     */
    provisioningState: string;
    /**
     * Proximity placement group associated with the volume
     */
    proximityPlacementGroup?: string;
    /**
     * The security style of volume, default unix, defaults to ntfs for dual protocol or CIFS protocol
     */
    securityStyle?: string;
    /**
     * The service level of the file system
     */
    serviceLevel?: string;
    /**
     * Enables access-based enumeration share property for SMB Shares. Only applicable for SMB/DualProtocol volume
     */
    smbAccessBasedEnumeration?: string;
    /**
     * Enables continuously available share property for smb volume. Only applicable for SMB volume
     */
    smbContinuouslyAvailable?: boolean;
    /**
     * Enables encryption for in-flight smb3 data. Only applicable for SMB/DualProtocol volume. To be used with swagger version 2020-08-01 or later
     */
    smbEncryption?: boolean;
    /**
     * Enables non-browsable property for SMB Shares. Only applicable for SMB/DualProtocol volume
     */
    smbNonBrowsable?: string;
    /**
     * If enabled (true) the volume will contain a read-only snapshot directory which provides access to each of the volume's snapshots (defaults to true).
     */
    snapshotDirectoryVisible?: boolean;
    /**
     * Resource identifier used to identify the Snapshot.
     */
    snapshotId?: string;
    /**
     * Provides storage to network proximity information for the volume.
     */
    storageToNetworkProximity: string;
    /**
     * The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes
     */
    subnetId: string;
    /**
     * T2 network information
     */
    t2Network: string;
    /**
     * Resource tags
     */
    tags?: {[key: string]: string};
    throughputMibps?: number;
    /**
     * Resource type
     */
    type: string;
    /**
     * UNIX permissions for NFS volume accepted in octal 4 digit format. First digit selects the set user ID(4), set group ID (2) and sticky (1) attributes. Second digit selects permission for the owner of the file: read (4), write (2) and execute (1). Third selects permissions for other users in the same group. the fourth for other users not in the group. 0755 - gives read/write/execute permissions to owner and read/execute to group and other users.
     */
    unixPermissions?: string;
    /**
     * Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. For regular volumes, valid values are in the range 50GiB to 100TiB. For large volumes, valid values are in the range 100TiB to 500TiB, and on an exceptional basis, from to 2400GiB to 2400TiB. Values expressed in bytes as multiples of 1 GiB.
     */
    usageThreshold: number;
    /**
     * Volume Group Name
     */
    volumeGroupName: string;
    /**
     * Volume spec name is the application specific designation or identifier for the particular volume in a volume group for e.g. data, log
     */
    volumeSpecName?: string;
    /**
     * What type of volume is this. For destination volumes in Cross Region Replication, set type to DataProtection
     */
    volumeType?: string;
    /**
     * Availability Zone
     */
    zones?: string[];
}
/**
 * volumeGroupVolumePropertiesResponseProvideDefaults sets the appropriate defaults for VolumeGroupVolumePropertiesResponse
 */
export function volumeGroupVolumePropertiesResponseProvideDefaults(val: VolumeGroupVolumePropertiesResponse): VolumeGroupVolumePropertiesResponse {
    return {
        ...val,
        avsDataStore: (val.avsDataStore) ?? "Disabled",
        coolAccess: (val.coolAccess) ?? false,
        defaultGroupQuotaInKiBs: (val.defaultGroupQuotaInKiBs) ?? 0,
        defaultUserQuotaInKiBs: (val.defaultUserQuotaInKiBs) ?? 0,
        enableSubvolumes: (val.enableSubvolumes) ?? "Disabled",
        encryptionKeySource: (val.encryptionKeySource) ?? "Microsoft.NetApp",
        fileAccessLogs: (val.fileAccessLogs) ?? "Disabled",
        isDefaultQuotaEnabled: (val.isDefaultQuotaEnabled) ?? false,
        isLargeVolume: (val.isLargeVolume) ?? false,
        kerberosEnabled: (val.kerberosEnabled) ?? false,
        ldapEnabled: (val.ldapEnabled) ?? false,
        securityStyle: (val.securityStyle) ?? "unix",
        smbContinuouslyAvailable: (val.smbContinuouslyAvailable) ?? false,
        smbEncryption: (val.smbEncryption) ?? false,
        snapshotDirectoryVisible: (val.snapshotDirectoryVisible) ?? true,
        usageThreshold: (val.usageThreshold) ?? 107374182400,
    };
}

/**
 * DataProtection type volumes include an object containing details of the replication
 */
export interface VolumePropertiesResponseDataProtection {
    /**
     * Backup Properties
     */
    backup?: VolumeBackupPropertiesResponse;
    /**
     * Replication properties
     */
    replication?: ReplicationObjectResponse;
    /**
     * Snapshot properties.
     */
    snapshot?: VolumeSnapshotPropertiesResponse;
    /**
     * VolumeRelocation properties
     */
    volumeRelocation?: VolumeRelocationPropertiesResponse;
}

/**
 * Set of export policy rules
 */
export interface VolumePropertiesResponseExportPolicy {
    /**
     * Export policy rule
     */
    rules?: ExportPolicyRuleResponse[];
}

/**
 * Volume relocation properties
 */
export interface VolumeRelocationPropertiesResponse {
    /**
     * Has relocation finished and is ready to be cleaned up
     */
    readyToBeFinalized: boolean;
    /**
     * Has relocation been requested for this volume
     */
    relocationRequested?: boolean;
}

/**
 * Volume Snapshot Properties
 */
export interface VolumeSnapshotPropertiesResponse {
    /**
     * Snapshot Policy ResourceId
     */
    snapshotPolicyId?: string;
}

/**
 * Weekly Schedule properties, make a snapshot every week at a specific day or days
 */
export interface WeeklyScheduleResponse {
    /**
     * Indicates which weekdays snapshot should be taken, accepts a comma separated list of week day names in english
     */
    day?: string;
    /**
     * Indicates which hour in UTC timezone a snapshot should be taken
     */
    hour?: number;
    /**
     * Indicates which minute snapshot should be taken
     */
    minute?: number;
    /**
     * Weekly snapshot count to keep
     */
    snapshotsToKeep?: number;
    /**
     * Resource size in bytes, current storage usage for the volume in bytes
     */
    usedBytes?: number;
}
