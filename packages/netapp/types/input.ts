import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Encryption settings
 */
export interface AccountEncryptionArgs {
    /**
     * Identity used to authenticate to KeyVault. Applicable if keySource is 'Microsoft.KeyVault'.
     */
    identity?: pulumi.Input<EncryptionIdentityArgs>;
    /**
     * The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.NetApp, Microsoft.KeyVault
     */
    keySource?: pulumi.Input<string | enums.KeySource>;
    /**
     * Properties provided by KeVault. Applicable if keySource is 'Microsoft.KeyVault'.
     */
    keyVaultProperties?: pulumi.Input<KeyVaultPropertiesArgs>;
}
/**
 * accountEncryptionArgsProvideDefaults sets the appropriate defaults for AccountEncryptionArgs
 */
export function accountEncryptionArgsProvideDefaults(val: AccountEncryptionArgs): AccountEncryptionArgs {
    return {
        ...val,
        keySource: (val.keySource) ?? "Microsoft.NetApp",
    };
}

/**
 * Active Directory
 */
export interface ActiveDirectoryArgs {
    /**
     * Id of the Active Directory
     */
    activeDirectoryId?: pulumi.Input<string>;
    /**
     * Name of the active directory machine. This optional parameter is used only while creating kerberos volume
     */
    adName?: pulumi.Input<string>;
    /**
     * Users to be added to the Built-in Administrators active directory group. A list of unique usernames without domain specifier
     */
    administrators?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * If enabled, AES encryption will be enabled for SMB communication.
     */
    aesEncryption?: pulumi.Input<boolean>;
    /**
     *  If enabled, NFS client local users can also (in addition to LDAP users) access the NFS volumes.
     */
    allowLocalNfsUsersWithLdap?: pulumi.Input<boolean>;
    /**
     * Users to be added to the Built-in Backup Operator active directory group. A list of unique usernames without domain specifier
     */
    backupOperators?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Comma separated list of DNS server IP addresses (IPv4 only) for the Active Directory domain
     */
    dns?: pulumi.Input<string>;
    /**
     * Name of the Active Directory domain
     */
    domain?: pulumi.Input<string>;
    /**
     * If enabled, Traffic between the SMB server to Domain Controller (DC) will be encrypted.
     */
    encryptDCConnections?: pulumi.Input<boolean>;
    /**
     * kdc server IP address for the active directory machine. This optional parameter is used only while creating kerberos volume.
     */
    kdcIP?: pulumi.Input<string>;
    /**
     * Specifies whether or not the LDAP traffic needs to be secured via TLS.
     */
    ldapOverTLS?: pulumi.Input<boolean>;
    /**
     * LDAP Search scope options
     */
    ldapSearchScope?: pulumi.Input<LdapSearchScopeOptArgs>;
    /**
     * Specifies whether or not the LDAP traffic needs to be signed.
     */
    ldapSigning?: pulumi.Input<boolean>;
    /**
     * The Organizational Unit (OU) within the Windows Active Directory
     */
    organizationalUnit?: pulumi.Input<string>;
    /**
     * Plain text password of Active Directory domain administrator, value is masked in the response
     */
    password?: pulumi.Input<string>;
    /**
     * Comma separated list of IPv4 addresses of preferred servers for LDAP client. At most two comma separated IPv4 addresses can be passed.
     */
    preferredServersForLdapClient?: pulumi.Input<string>;
    /**
     * Domain Users in the Active directory to be given SeSecurityPrivilege privilege (Needed for SMB Continuously available shares for SQL). A list of unique usernames without domain specifier
     */
    securityOperators?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * When LDAP over SSL/TLS is enabled, the LDAP client is required to have base64 encoded Active Directory Certificate Service's self-signed root CA certificate, this optional parameter is used only for dual protocol with LDAP user-mapping volumes.
     */
    serverRootCACertificate?: pulumi.Input<string>;
    /**
     * The Active Directory site the service will limit Domain Controller discovery to
     */
    site?: pulumi.Input<string>;
    /**
     * NetBIOS name of the SMB server. This name will be registered as a computer account in the AD and used to mount volumes
     */
    smbServerName?: pulumi.Input<string>;
    /**
     * A domain user account with permission to create machine accounts
     */
    username?: pulumi.Input<string>;
}
/**
 * activeDirectoryArgsProvideDefaults sets the appropriate defaults for ActiveDirectoryArgs
 */
export function activeDirectoryArgsProvideDefaults(val: ActiveDirectoryArgs): ActiveDirectoryArgs {
    return {
        ...val,
        organizationalUnit: (val.organizationalUnit) ?? "CN=Computers",
    };
}

/**
 * Active Directory Configuration properties
 */
export interface ActiveDirectoryConfigPropertiesArgs {
    /**
     * Users to be added to the Built-in Administrators active directory group. A list of unique usernames without domain specifier
     */
    administrators?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Users to be added to the Built-in Backup Operator active directory group. A list of unique usernames without domain specifier
     */
    backupOperators?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An array of DNS server IP addresses(IPv4 only) for the Active Directory
     */
    dns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the Active Directory domain
     */
    domain: pulumi.Input<string>;
    /**
     * The Organizational Unit (OU) within the Windows Active Directory
     */
    organizationalUnit?: pulumi.Input<string>;
    /**
     * Access password from Azure KeyVault Secrets to connect Active Directory
     */
    secretPassword: pulumi.Input<SecretPasswordArgs>;
    /**
     * Domain Users in the Active directory to be given SecurityPrivilege privilege (Needed for SMB Continuously available shares for SQL). A list of unique usernames without domain specifier
     */
    securityOperators?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Active Directory site the service will limit Domain Controller discovery to
     */
    site?: pulumi.Input<string>;
    /**
     * NetBIOS name of the SMB server. This name will be registered as a computer account in the AD and used to mount volumes
     */
    smbServerName?: pulumi.Input<string>;
    /**
     * A domain user account with permission to create machine accounts
     */
    userName?: pulumi.Input<string>;
}

/**
 * Properties of the server managing the lifecycle of volume buckets
 */
export interface BucketServerPropertiesArgs {
    /**
     * A base64-encoded PEM file, which includes both the bucket server's certificate and private key. It is used to authenticate the user and allows access to volume data in a read-only manner.
     */
    certificateObject?: pulumi.Input<string>;
    /**
     * The host part of the bucket URL, resolving to the bucket IP address and allowed by the server certificate.
     */
    fqdn?: pulumi.Input<string>;
}

/**
 * Cache resource properties
 */
export interface CachePropertiesArgs {
    /**
     * The Azure Resource URI for a delegated cache subnet that will be used to allocate data IPs.
     */
    cacheSubnetResourceId: pulumi.Input<string>;
    /**
     * Flag indicating whether a CIFS change notification is enabled for the cache.
     */
    cifsChangeNotifications?: pulumi.Input<string | enums.CifsChangeNotifyState>;
    /**
     * Source of key used to encrypt data in the cache. Applicable if NetApp account has encryption.keySource = 'Microsoft.KeyVault'. Possible values (case-insensitive) are: 'Microsoft.NetApp, Microsoft.KeyVault'
     */
    encryptionKeySource: pulumi.Input<string | enums.EncryptionKeySource>;
    /**
     * Set of export policy rules
     */
    exportPolicy?: pulumi.Input<CachePropertiesExportPolicyArgs>;
    /**
     * The file path of the Cache.
     */
    filepath: pulumi.Input<string>;
    /**
     * Flag indicating whether the global file lock is enabled for the cache.
     */
    globalFileLocking?: pulumi.Input<string | enums.GlobalFileLockingState>;
    /**
     * Describe if a cache is Kerberos enabled.
     */
    kerberos?: pulumi.Input<string | enums.KerberosState>;
    /**
     * The resource ID of private endpoint for KeyVault. It must reside in the same VNET as the volume. Only applicable if encryptionKeySource = 'Microsoft.KeyVault'.
     */
    keyVaultPrivateEndpointResourceId?: pulumi.Input<string>;
    /**
     * Specifies whether LDAP is enabled or not for flexcache volume.
     */
    ldap?: pulumi.Input<string | enums.LdapState>;
    /**
     * Specifies the type of LDAP server for flexcache volume.
     */
    ldapServerType?: pulumi.Input<string | enums.LdapServerType>;
    /**
     * Origin cluster information
     */
    originClusterInformation: pulumi.Input<OriginClusterInformationArgs>;
    /**
     * The Azure Resource URI for a delegated subnet that will be used for ANF Intercluster Interface IP addresses.
     */
    peeringSubnetResourceId: pulumi.Input<string>;
    /**
     * Set of supported protocol types, which include NFSv3, NFSv4 and SMB protocol
     */
    protocolTypes?: pulumi.Input<pulumi.Input<string | enums.ProtocolTypes>[]>;
    /**
     * Maximum storage quota allowed for a file system in bytes. Valid values are in the range 50GiB to 1PiB. Values expressed in bytes as multiples of 1GiB.
     */
    size: pulumi.Input<number>;
    /**
     * SMB information for the cache
     */
    smbSettings?: pulumi.Input<SmbSettingsArgs>;
    /**
     * Maximum throughput in MiB/s that can be achieved by this cache volume and this will be accepted as input only for manual qosType cache
     */
    throughputMibps?: pulumi.Input<number>;
    /**
     * Flag indicating whether writeback is enabled for the cache.
     */
    writeBack?: pulumi.Input<string | enums.EnableWriteBackState>;
}

/**
 * Set of export policy rules
 */
export interface CachePropertiesExportPolicyArgs {
    /**
     * Export policy rule
     */
    rules?: pulumi.Input<pulumi.Input<ExportPolicyRuleArgs>[]>;
}

/**
 * The effective CIFS username when accessing the volume data.
 */
export interface CifsUserArgs {
    /**
     * The CIFS user's username
     */
    username?: pulumi.Input<string>;
}

/**
 * Daily Schedule properties
 */
export interface DailyScheduleArgs {
    /**
     * Indicates which hour in UTC timezone a snapshot should be taken
     */
    hour?: pulumi.Input<number>;
    /**
     * Indicates which minute snapshot should be taken
     */
    minute?: pulumi.Input<number>;
    /**
     * Daily snapshot count to keep
     */
    snapshotsToKeep?: pulumi.Input<number>;
    /**
     * Resource size in bytes, current storage usage for the volume in bytes
     */
    usedBytes?: pulumi.Input<number>;
}

/**
 * NetApp elastic account properties
 */
export interface ElasticAccountPropertiesArgs {
    /**
     * Encryption settings
     */
    encryption?: pulumi.Input<ElasticEncryptionArgs>;
}

/**
 * Elastic Backup Policy properties
 */
export interface ElasticBackupPolicyPropertiesArgs {
    /**
     * Daily backups count to keep
     */
    dailyBackupsToKeep?: pulumi.Input<number>;
    /**
     * Monthly backups count to keep
     */
    monthlyBackupsToKeep?: pulumi.Input<number>;
    /**
     * The property to identify whether Backup Policy is enabled or not
     */
    policyState?: pulumi.Input<string | enums.ElasticBackupPolicyState>;
    /**
     * Weekly backups count to keep
     */
    weeklyBackupsToKeep?: pulumi.Input<number>;
}

/**
 * Elastic Backup properties
 */
export interface ElasticBackupPropertiesArgs {
    /**
     * ResourceId used to identify the elastic snapshot resource. This is required when an existing snapshot needs to be used for creating a manual backup
     */
    elasticSnapshotResourceId?: pulumi.Input<string>;
    /**
     * ResourceId used to identify the Elastic Volume
     */
    elasticVolumeResourceId: pulumi.Input<string>;
    /**
     * Label for backup
     */
    label?: pulumi.Input<string>;
    /**
     * Manual backup using an already existing snapshot. This will always be CreateNewSnapshot for scheduled backups and UseExistingSnapshot/CreateNewSnapshot for manual backups
     */
    snapshotUsage?: pulumi.Input<string | enums.SnapshotUsage>;
}
/**
 * elasticBackupPropertiesArgsProvideDefaults sets the appropriate defaults for ElasticBackupPropertiesArgs
 */
export function elasticBackupPropertiesArgsProvideDefaults(val: ElasticBackupPropertiesArgs): ElasticBackupPropertiesArgs {
    return {
        ...val,
        snapshotUsage: (val.snapshotUsage) ?? "CreateNewSnapshot",
    };
}

/**
 * Elastic capacity pool properties
 */
export interface ElasticCapacityPoolPropertiesArgs {
    /**
     * The Azure Resource URI for an Active Directory configuration. This is used by all the SMB volumes within the pool
     */
    activeDirectoryConfigResourceId?: pulumi.Input<string>;
    /**
     * Encryption settings
     */
    encryption?: pulumi.Input<ElasticEncryptionConfigurationArgs>;
    /**
     * The service level of the elastic capacity pool
     */
    serviceLevel: pulumi.Input<string | enums.ElasticServiceLevel>;
    /**
     * Provisioned size of the pool (in bytes). For zoneRedundant service level pool, value must be in the range 1TiB to 16TiB or 1TiB to 128TiB for supported region. Values expressed in bytes as multiples of 1TiB till 16TiB and in multiples of 8TiB from 24TiB to 128TiB. Pool size can't be shrunk once it is created.
     */
    size: pulumi.Input<number>;
    /**
     * The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/elasticVolumes, this is used by all the volumes within the pool
     */
    subnetResourceId: pulumi.Input<string>;
}

/**
 * Encryption settings
 */
export interface ElasticEncryptionArgs {
    /**
     * Identity used to authenticate to KeyVault. Applicable if keySource is 'Microsoft.KeyVault'.
     */
    identity?: pulumi.Input<ElasticEncryptionIdentityArgs>;
    /**
     * The encryption keySource (provider). Possible values (case-insensitive): Microsoft.NetApp, Microsoft.KeyVault
     */
    keySource?: pulumi.Input<string | enums.KeySource>;
    /**
     * Properties provided by KeyVault. Applicable if keySource is 'Microsoft.KeyVault'.
     */
    keyVaultProperties?: pulumi.Input<ElasticKeyVaultPropertiesArgs>;
}

/**
 * CMK Encryption Configuration
 */
export interface ElasticEncryptionConfigurationArgs {
    /**
     * Pool Encryption Key Source.
     */
    elasticPoolEncryptionKeySource: pulumi.Input<string | enums.ElasticPoolEncryptionKeySource>;
    /**
     * The resource ID of private endpoint for KeyVault. It must reside in the same VNET as the volume. Only applicable if encryptionKeySource = 'Microsoft.KeyVault'.
     */
    keyVaultPrivateEndpointResourceId: pulumi.Input<string>;
}

/**
 * Identity used to authenticate with key vault.
 */
export interface ElasticEncryptionIdentityArgs {
    /**
     * The ARM resource identifier of the user assigned identity used to authenticate with key vault. Applicable if identity.type has 'UserAssigned'. It should match key of identity.userAssignedIdentities.
     */
    userAssignedIdentity?: pulumi.Input<string>;
}

/**
 * Set of export policy rules
 */
export interface ElasticExportPolicyArgs {
    /**
     * Export policy rule
     */
    rules?: pulumi.Input<pulumi.Input<ElasticExportPolicyRuleArgs>[]>;
}

/**
 * Elastic Volume Export Policy Rule
 */
export interface ElasticExportPolicyRuleArgs {
    /**
     * Client ingress specification for the export policy as list of IPv4 CIDRs, IPv4 host addresses and host names.
     */
    allowedClients?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Allows clients to access the volume with the NFSv3 protocol. Enable only for NFSv3 type volumes
     */
    nfsv3?: pulumi.Input<string | enums.ElasticNfsv3Access>;
    /**
     * Allows clients to access the volume with at least NFSv4.1 protocol.
     */
    nfsv4?: pulumi.Input<string | enums.ElasticNfsv4Access>;
    /**
     * Indicates whether root access to the volume is granted to clients affected by this rule
     */
    rootAccess?: pulumi.Input<string | enums.ElasticRootAccess>;
    /**
     * Controls the priority of the export policy rule. When connecting to the volume the rule with the lowest index that applies to the connecting client is used
     */
    ruleIndex?: pulumi.Input<number>;
    /**
     * Specifies the Unix file access level for the volume. It encompasses both read-only and read-write permissions. Additionally, NoAccess can be set to block all access to the volume
     */
    unixAccessRule?: pulumi.Input<string | enums.ElasticUnixAccessRule>;
}
/**
 * elasticExportPolicyRuleArgsProvideDefaults sets the appropriate defaults for ElasticExportPolicyRuleArgs
 */
export function elasticExportPolicyRuleArgsProvideDefaults(val: ElasticExportPolicyRuleArgs): ElasticExportPolicyRuleArgs {
    return {
        ...val,
        nfsv3: (val.nfsv3) ?? "Disabled",
        nfsv4: (val.nfsv4) ?? "Disabled",
        rootAccess: (val.rootAccess) ?? "Disabled",
        unixAccessRule: (val.unixAccessRule) ?? "NoAccess",
    };
}

/**
 * Properties of key vault.
 */
export interface ElasticKeyVaultPropertiesArgs {
    /**
     * The name of KeyVault key.
     */
    keyName?: pulumi.Input<string>;
    /**
     * The resource ID of KeyVault.
     */
    keyVaultResourceId?: pulumi.Input<string>;
    /**
     * The Uri of KeyVault.
     */
    keyVaultUri?: pulumi.Input<string>;
}

/**
 * SMB Properties
 */
export interface ElasticSmbPropertiesArgs {
    /**
     * Used to enable or disable encryption for in-flight SMB data volume. This flag can be modified during Elastic volume update operation as well. Only applicable for SMB protocol Elastic volumes.
     */
    smbEncryption?: pulumi.Input<string | enums.ElasticSmbEncryption>;
}
/**
 * elasticSmbPropertiesArgsProvideDefaults sets the appropriate defaults for ElasticSmbPropertiesArgs
 */
export function elasticSmbPropertiesArgsProvideDefaults(val: ElasticSmbPropertiesArgs): ElasticSmbPropertiesArgs {
    return {
        ...val,
        smbEncryption: (val.smbEncryption) ?? "Disabled",
    };
}

/**
 * Daily Schedule properties used to create NetApp snapshot policy
 */
export interface ElasticSnapshotPolicyDailyScheduleArgs {
    /**
     * Indicates which hour in UTC timezone a snapshot should be taken
     */
    hour?: pulumi.Input<number>;
    /**
     * Indicates which minute snapshot should be taken
     */
    minute?: pulumi.Input<number>;
    /**
     * Daily snapshot count to keep
     */
    snapshotsToKeep?: pulumi.Input<number>;
}

/**
 * Hourly Schedule properties used to create NetApp snapshot policy
 */
export interface ElasticSnapshotPolicyHourlyScheduleArgs {
    /**
     * Indicates which minute snapshot should be taken
     */
    minute?: pulumi.Input<number>;
    /**
     * Hourly snapshot count to keep
     */
    snapshotsToKeep?: pulumi.Input<number>;
}

/**
 * Monthly Schedule properties used to create NetApp snapshot policy
 */
export interface ElasticSnapshotPolicyMonthlyScheduleArgs {
    /**
     * Indicates which days of the month snapshot (1-31) should be taken, accepts a list of integers
     */
    daysOfMonth?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Indicates which hour in UTC timezone a snapshot should be taken
     */
    hour?: pulumi.Input<number>;
    /**
     * Indicates which minute snapshot should be taken
     */
    minute?: pulumi.Input<number>;
    /**
     * Monthly snapshot count to keep
     */
    snapshotsToKeep?: pulumi.Input<number>;
}

/**
 * Elastic Snapshot policy properties
 */
export interface ElasticSnapshotPolicyPropertiesArgs {
    /**
     * Schedule for daily snapshots
     */
    dailySchedule?: pulumi.Input<ElasticSnapshotPolicyDailyScheduleArgs>;
    /**
     * Schedule for hourly snapshots
     */
    hourlySchedule?: pulumi.Input<ElasticSnapshotPolicyHourlyScheduleArgs>;
    /**
     * Schedule for monthly snapshots
     */
    monthlySchedule?: pulumi.Input<ElasticSnapshotPolicyMonthlyScheduleArgs>;
    /**
     * Configures if the snapshot policy is enabled on the volumes connected to the policy.
     */
    policyStatus?: pulumi.Input<string | enums.PolicyStatus>;
    /**
     * Schedule for weekly snapshots
     */
    weeklySchedule?: pulumi.Input<ElasticSnapshotPolicyWeeklyScheduleArgs>;
}

/**
 * Weekly Schedule properties used to create NetApp snapshot policy
 */
export interface ElasticSnapshotPolicyWeeklyScheduleArgs {
    /**
     * Indicates which weekday(s) snapshot(s) should be taken, accepts a list of week day names in english
     */
    days?: pulumi.Input<pulumi.Input<string | enums.DayOfWeek>[]>;
    /**
     * Indicates which hour in UTC timezone a snapshot should be taken
     */
    hour?: pulumi.Input<number>;
    /**
     * Indicates which minute snapshot should be taken
     */
    minute?: pulumi.Input<number>;
    /**
     * Weekly snapshot count to keep
     */
    snapshotsToKeep?: pulumi.Input<number>;
}

/**
 * Elastic Volume Backup Properties
 */
export interface ElasticVolumeBackupPropertiesArgs {
    /**
     * ResourceId used to identify Elastic Backup Policy
     */
    elasticBackupPolicyResourceId?: pulumi.Input<string>;
    /**
     * ResourceId used to identify Elastic Backup Vault
     */
    elasticBackupVaultResourceId?: pulumi.Input<string>;
    /**
     * The property to decide policy is enforced or not on the volume
     */
    policyEnforcement?: pulumi.Input<string | enums.ElasticVolumePolicyEnforcement>;
}

/**
 * Data protection configuration option for the volume, including snapshot policies and backup.
 */
export interface ElasticVolumeDataProtectionPropertiesArgs {
    /**
     * Used to configure backups on an elastic volume.
     */
    backup?: pulumi.Input<ElasticVolumeBackupPropertiesArgs>;
    /**
     * Used to apply a snapshot policy to a volume.
     */
    snapshot?: pulumi.Input<ElasticVolumeSnapshotPropertiesArgs>;
}

/**
 * Elastic Volume properties
 */
export interface ElasticVolumePropertiesArgs {
    /**
     * Resource identifier used to identify the Elastic Backup.
     */
    backupResourceId?: pulumi.Input<string>;
    /**
     * Data protection configuration option for the volume, including snapshot policies and backup.
     */
    dataProtection?: pulumi.Input<ElasticVolumeDataProtectionPropertiesArgs>;
    /**
     * Set of export policy rules
     */
    exportPolicy?: pulumi.Input<ElasticExportPolicyArgs>;
    /**
     * A unique file path for the volume. Used when creating mount targets. This needs to be unique within the elastic capacity pool.
     */
    filePath: pulumi.Input<string>;
    /**
     * Set of support protocol types for the elastic volume
     */
    protocolTypes: pulumi.Input<pulumi.Input<string | enums.ElasticProtocolType>[]>;
    /**
     * Maximum size allowed for a volume in bytes. Valid values are in the range 1GiB to 16TiB. Values expressed in bytes as multiples of 1 GiB.
     */
    size: pulumi.Input<number>;
    /**
     * SMB Properties
     */
    smbProperties?: pulumi.Input<ElasticSmbPropertiesArgs>;
    /**
     * Controls the visibility of the volume's read-only snapshot directory, which provides access to each of the volume's snapshots.
     */
    snapshotDirectoryVisibility?: pulumi.Input<string | enums.SnapshotDirectoryVisibility>;
    /**
     * Resource identifier used to identify the Elastic Snapshot.
     */
    snapshotResourceId?: pulumi.Input<string>;
}
/**
 * elasticVolumePropertiesArgsProvideDefaults sets the appropriate defaults for ElasticVolumePropertiesArgs
 */
export function elasticVolumePropertiesArgsProvideDefaults(val: ElasticVolumePropertiesArgs): ElasticVolumePropertiesArgs {
    return {
        ...val,
        smbProperties: (val.smbProperties ? pulumi.output(val.smbProperties).apply(elasticSmbPropertiesArgsProvideDefaults) : undefined),
    };
}

/**
 * Elastic Volume Snapshot Properties
 */
export interface ElasticVolumeSnapshotPropertiesArgs {
    /**
     * Snapshot Policy ResourceId
     */
    snapshotPolicyResourceId?: pulumi.Input<string>;
}

/**
 * Identity used to authenticate with key vault.
 */
export interface EncryptionIdentityArgs {
    /**
     * The ARM resource identifier of the user assigned identity used to authenticate with key vault. Applicable if identity.type has 'UserAssigned'. It should match key of identity.userAssignedIdentities.
     */
    userAssignedIdentity?: pulumi.Input<string>;
}

/**
 * Volume Export Policy Rule
 */
export interface ExportPolicyRuleArgs {
    /**
     * Client ingress specification as comma separated string with IPv4 CIDRs, IPv4 host addresses and host names
     */
    allowedClients?: pulumi.Input<string>;
    /**
     * This parameter specifies who is authorized to change the ownership of a file. restricted - Only root user can change the ownership of the file. unrestricted - Non-root users can change ownership of files that they own.
     */
    chownMode?: pulumi.Input<string | enums.ChownMode>;
    /**
     * Allows CIFS protocol
     */
    cifs?: pulumi.Input<boolean>;
    /**
     * Has root access to volume
     */
    hasRootAccess?: pulumi.Input<boolean>;
    /**
     * Kerberos5i Read only access. To be use with swagger version 2020-05-01 or later
     */
    kerberos5IReadOnly?: pulumi.Input<boolean>;
    /**
     * Kerberos5i Read and write access. To be use with swagger version 2020-05-01 or later
     */
    kerberos5IReadWrite?: pulumi.Input<boolean>;
    /**
     * Kerberos5p Read only access. To be use with swagger version 2020-05-01 or later
     */
    kerberos5PReadOnly?: pulumi.Input<boolean>;
    /**
     * Kerberos5p Read and write access. To be use with swagger version 2020-05-01 or later
     */
    kerberos5PReadWrite?: pulumi.Input<boolean>;
    /**
     * Kerberos5 Read only access. To be use with swagger version 2020-05-01 or later
     */
    kerberos5ReadOnly?: pulumi.Input<boolean>;
    /**
     * Kerberos5 Read and write access. To be use with swagger version 2020-05-01 or later
     */
    kerberos5ReadWrite?: pulumi.Input<boolean>;
    /**
     * Kerberos5i Read only access. To be use with swagger version 2020-05-01 or later
     */
    kerberos5iReadOnly?: pulumi.Input<boolean>;
    /**
     * Kerberos5i Read and write access. To be use with swagger version 2020-05-01 or later
     */
    kerberos5iReadWrite?: pulumi.Input<boolean>;
    /**
     * Kerberos5p Read only access. To be use with swagger version 2020-05-01 or later
     */
    kerberos5pReadOnly?: pulumi.Input<boolean>;
    /**
     * Kerberos5p Read and write access. To be use with swagger version 2020-05-01 or later
     */
    kerberos5pReadWrite?: pulumi.Input<boolean>;
    /**
     * Allows NFSv3 protocol. Enable only for NFSv3 type volumes
     */
    nfsv3?: pulumi.Input<boolean>;
    /**
     * Allows NFSv4.1 protocol. Enable only for NFSv4.1 type volumes
     */
    nfsv41?: pulumi.Input<boolean>;
    /**
     * Order index
     */
    ruleIndex?: pulumi.Input<number>;
    /**
     * Read only access
     */
    unixReadOnly?: pulumi.Input<boolean>;
    /**
     * Read and write access
     */
    unixReadWrite?: pulumi.Input<boolean>;
}
/**
 * exportPolicyRuleArgsProvideDefaults sets the appropriate defaults for ExportPolicyRuleArgs
 */
export function exportPolicyRuleArgsProvideDefaults(val: ExportPolicyRuleArgs): ExportPolicyRuleArgs {
    return {
        ...val,
        chownMode: (val.chownMode) ?? "Restricted",
        hasRootAccess: (val.hasRootAccess) ?? true,
        kerberos5IReadOnly: (val.kerberos5IReadOnly) ?? false,
        kerberos5IReadWrite: (val.kerberos5IReadWrite) ?? false,
        kerberos5PReadOnly: (val.kerberos5PReadOnly) ?? false,
        kerberos5PReadWrite: (val.kerberos5PReadWrite) ?? false,
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
export interface FileSystemUserArgs {
    /**
     * The effective CIFS username when accessing the volume data.
     */
    cifsUser?: pulumi.Input<CifsUserArgs>;
    /**
     * The effective NFS User ID and Group ID when accessing the volume data.
     */
    nfsUser?: pulumi.Input<NfsUserArgs>;
}

/**
 * Hourly Schedule properties
 */
export interface HourlyScheduleArgs {
    /**
     * Indicates which minute snapshot should be taken
     */
    minute?: pulumi.Input<number>;
    /**
     * Hourly snapshot count to keep
     */
    snapshotsToKeep?: pulumi.Input<number>;
    /**
     * Resource size in bytes, current storage usage for the volume in bytes
     */
    usedBytes?: pulumi.Input<number>;
}

/**
 * Properties of key vault.
 */
export interface KeyVaultPropertiesArgs {
    /**
     * The name of KeyVault key.
     */
    keyName: pulumi.Input<string>;
    /**
     * The resource ID of KeyVault.
     */
    keyVaultResourceId?: pulumi.Input<string>;
    /**
     * The Uri of KeyVault.
     */
    keyVaultUri: pulumi.Input<string>;
}

/**
 * LDAP search scope 
 */
export interface LdapSearchScopeOptArgs {
    /**
     * This specifies the group DN, which overrides the base DN for group lookups.
     */
    groupDN?: pulumi.Input<string>;
    /**
     * This specifies the custom LDAP search filter to be used when looking up group membership from LDAP server.
     */
    groupMembershipFilter?: pulumi.Input<string>;
    /**
     * This specifies the user DN, which overrides the base DN for user lookups.
     */
    userDN?: pulumi.Input<string>;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Monthly Schedule properties
 */
export interface MonthlyScheduleArgs {
    /**
     * Indicates which days of the month snapshot should be taken. A comma delimited string.
     */
    daysOfMonth?: pulumi.Input<string>;
    /**
     * Indicates which hour in UTC timezone a snapshot should be taken
     */
    hour?: pulumi.Input<number>;
    /**
     * Indicates which minute snapshot should be taken
     */
    minute?: pulumi.Input<number>;
    /**
     * Monthly snapshot count to keep
     */
    snapshotsToKeep?: pulumi.Input<number>;
    /**
     * Resource size in bytes, current storage usage for the volume in bytes
     */
    usedBytes?: pulumi.Input<number>;
}

/**
 * The effective NFS User ID and Group ID when accessing the volume data.
 */
export interface NfsUserArgs {
    /**
     * The NFS user's GID
     */
    groupId?: pulumi.Input<number>;
    /**
     * The NFS user's UID
     */
    userId?: pulumi.Input<number>;
}

/**
 * Stores the origin cluster information associated to a cache.
 */
export interface OriginClusterInformationArgs {
    /**
     * ONTAP Intercluster LIF IP addresses. One IP address per cluster node is required
     */
    peerAddresses: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * ONTAP cluster name of external cluster hosting the origin volume
     */
    peerClusterName: pulumi.Input<string>;
    /**
     * External origin volume name associated to this cache
     */
    peerVolumeName: pulumi.Input<string>;
    /**
     * External Vserver (SVM) name  name of the SVM hosting the origin volume
     */
    peerVserverName: pulumi.Input<string>;
}

/**
 * Application specific parameters for the placement of volumes in the volume group
 */
export interface PlacementKeyValuePairsArgs {
    /**
     * Key for an application specific parameter for the placement of volumes in the volume group
     */
    key: pulumi.Input<string>;
    /**
     * Value for an application specific parameter for the placement of volumes in the volume group
     */
    value: pulumi.Input<string>;
}

/**
 * The full path to a volume that is to be migrated into ANF. Required for Migration volumes
 */
export interface RemotePathArgs {
    /**
     * The Path to a ONTAP Host
     */
    externalHostName: pulumi.Input<string>;
    /**
     * The name of a server on the ONTAP Host
     */
    serverName: pulumi.Input<string>;
    /**
     * The name of a volume on the server
     */
    volumeName: pulumi.Input<string>;
}

/**
 * Replication properties
 */
export interface ReplicationObjectArgs {
    /**
     * Indicates whether the local volume is the source or destination for the Volume Replication
     */
    endpointType?: pulumi.Input<string | enums.EndpointType>;
    /**
     * The full path to a volume that is to be migrated into ANF. Required for Migration volumes
     */
    remotePath?: pulumi.Input<RemotePathArgs>;
    /**
     * The remote region for the other end of the Volume Replication.
     */
    remoteVolumeRegion?: pulumi.Input<string>;
    /**
     * The resource ID of the remote volume. Required for cross region and cross zone replication
     */
    remoteVolumeResourceId?: pulumi.Input<string>;
    /**
     * Schedule
     */
    replicationSchedule?: pulumi.Input<string | enums.ReplicationSchedule>;
}

/**
 * Access password from Azure KeyVault Secrets to connect Active Directory
 */
export interface SecretPasswordArgs {
    /**
     * Identity used to authenticate to KeyVault. Applicable if keySource is 'Microsoft.KeyVault'.
     */
    identity?: pulumi.Input<SecretPasswordIdentityArgs>;
    /**
     * Properties provided by KeyVault.
     */
    keyVaultProperties?: pulumi.Input<SecretPasswordKeyVaultPropertiesArgs>;
}

/**
 * Identity used to authenticate with key vault.
 */
export interface SecretPasswordIdentityArgs {
    /**
     * The Azure resource identifier of the user assigned identity used to authenticate with key vault. Applicable if identity.type has 'UserAssigned'. It should match key of identity.userAssignedIdentities.
     */
    userAssignedIdentity?: pulumi.Input<string>;
}

/**
 * Properties of key vault to get the secrets for password.
 */
export interface SecretPasswordKeyVaultPropertiesArgs {
    /**
     * The Uri of KeyVault.
     */
    keyVaultUri: pulumi.Input<string>;
    /**
     * The name of KeyVault password secret.
     */
    secretName: pulumi.Input<string>;
}

/**
 * SMB settings for the cache
 */
export interface SmbSettingsArgs {
    /**
     * Enables access-based enumeration share property for SMB Shares. Only applicable for SMB/DualProtocol volume
     */
    smbAccessBasedEnumeration?: pulumi.Input<string | enums.SmbAccessBasedEnumeration>;
    /**
     * Enables encryption for in-flight smb3 data. Only applicable for SMB/DualProtocol cache.
     */
    smbEncryption?: pulumi.Input<string | enums.SmbEncryptionState>;
    /**
     * Enables non-browsable property for SMB Shares. Only applicable for SMB/DualProtocol volume
     */
    smbNonBrowsable?: pulumi.Input<string | enums.SmbNonBrowsable>;
}

/**
 * Volume Backup Properties
 */
export interface VolumeBackupPropertiesArgs {
    /**
     * Backup Policy Resource ID
     */
    backupPolicyId?: pulumi.Input<string>;
    /**
     * Backup Vault Resource ID
     */
    backupVaultId?: pulumi.Input<string>;
    /**
     * Policy Enforced
     */
    policyEnforced?: pulumi.Input<boolean>;
}

/**
 * Volume group properties
 */
export interface VolumeGroupMetaDataArgs {
    /**
     * Application specific identifier
     */
    applicationIdentifier?: pulumi.Input<string>;
    /**
     * Application Type
     */
    applicationType?: pulumi.Input<string | enums.ApplicationType>;
    /**
     * Application specific placement rules for the volume group
     */
    globalPlacementRules?: pulumi.Input<pulumi.Input<PlacementKeyValuePairsArgs>[]>;
    /**
     * Group Description
     */
    groupDescription?: pulumi.Input<string>;
}

/**
 * Volume resource
 */
export interface VolumeGroupVolumePropertiesArgs {
    /**
     * Specifies whether the volume is enabled for Azure VMware Solution (AVS) datastore purpose
     */
    avsDataStore?: pulumi.Input<string | enums.AvsDataStore>;
    /**
     * Resource identifier used to identify the Backup.
     */
    backupId?: pulumi.Input<string>;
    /**
     * Pool Resource Id used in case of creating a volume through volume group
     */
    capacityPoolResourceId?: pulumi.Input<string>;
    /**
     * Specifies whether Cool Access(tiering) is enabled for the volume.
     */
    coolAccess?: pulumi.Input<boolean>;
    /**
     * coolAccessRetrievalPolicy determines the data retrieval behavior from the cool tier to standard storage based on the read pattern for cool access enabled volumes. The possible values for this field are: 
     *  Default - Data will be pulled from cool tier to standard storage on random reads. This policy is the default.
     *  OnRead - All client-driven data read is pulled from cool tier to standard storage on both sequential and random reads.
     *  Never - No client-driven data is pulled from cool tier to standard storage.
     */
    coolAccessRetrievalPolicy?: pulumi.Input<string | enums.CoolAccessRetrievalPolicy>;
    /**
     * coolAccessTieringPolicy determines which cold data blocks are moved to cool tier. The possible values for this field are: Auto - Moves cold user data blocks in both the Snapshot copies and the active file system to the cool tier tier. This policy is the default. SnapshotOnly - Moves user data blocks of the Volume Snapshot copies that are not associated with the active file system to the cool tier.
     */
    coolAccessTieringPolicy?: pulumi.Input<string | enums.CoolAccessTieringPolicy>;
    /**
     * Specifies the number of days after which data that is not accessed by clients will be tiered.
     */
    coolnessPeriod?: pulumi.Input<number>;
    /**
     * A unique file path for the volume. Used when creating mount targets
     */
    creationToken: pulumi.Input<string>;
    /**
     * DataProtection type volumes include an object containing details of the replication
     */
    dataProtection?: pulumi.Input<VolumePropertiesDataProtectionArgs>;
    /**
     * Default group quota for volume in KiBs. If isDefaultQuotaEnabled is set, the minimum value of 4 KiBs applies.
     */
    defaultGroupQuotaInKiBs?: pulumi.Input<number>;
    /**
     * Default user quota for volume in KiBs. If isDefaultQuotaEnabled is set, the minimum value of 4 KiBs applies .
     */
    defaultUserQuotaInKiBs?: pulumi.Input<number>;
    /**
     * If enabled (true) the snapshot the volume was created from will be automatically deleted after the volume create operation has finished.  Defaults to false
     */
    deleteBaseSnapshot?: pulumi.Input<boolean>;
    /**
     * Flag indicating whether subvolume operations are enabled on the volume
     */
    enableSubvolumes?: pulumi.Input<string | enums.EnableSubvolumes>;
    /**
     * Source of key used to encrypt data in volume. Applicable if NetApp account has encryption.keySource = 'Microsoft.KeyVault'. Possible values (case-insensitive) are: 'Microsoft.NetApp, Microsoft.KeyVault'
     */
    encryptionKeySource?: pulumi.Input<string | enums.EncryptionKeySource>;
    /**
     * Set of export policy rules
     */
    exportPolicy?: pulumi.Input<VolumePropertiesExportPolicyArgs>;
    /**
     * Specifies if default quota is enabled for the volume.
     */
    isDefaultQuotaEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies whether volume is a Large Volume or Regular Volume.
     */
    isLargeVolume?: pulumi.Input<boolean>;
    /**
     * Restoring
     */
    isRestoring?: pulumi.Input<boolean>;
    /**
     * Describe if a volume is KerberosEnabled. To be use with swagger version 2020-05-01 or later
     */
    kerberosEnabled?: pulumi.Input<boolean>;
    /**
     * The resource ID of private endpoint for KeyVault. It must reside in the same VNET as the volume. Only applicable if encryptionKeySource = 'Microsoft.KeyVault'.
     */
    keyVaultPrivateEndpointResourceId?: pulumi.Input<string>;
    /**
     * Specifies whether LDAP is enabled or not for a given NFS volume.
     */
    ldapEnabled?: pulumi.Input<boolean>;
    /**
     * Resource name
     */
    name?: pulumi.Input<string>;
    /**
     * The original value of the network features type available to the volume at the time it was created.
     */
    networkFeatures?: pulumi.Input<string | enums.NetworkFeatures>;
    /**
     * Application specific placement rules for the particular volume
     */
    placementRules?: pulumi.Input<pulumi.Input<PlacementKeyValuePairsArgs>[]>;
    /**
     * Set of protocol types, default NFSv3, CIFS for SMB protocol
     */
    protocolTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Proximity placement group associated with the volume
     */
    proximityPlacementGroup?: pulumi.Input<string>;
    /**
     * The security style of volume, default unix, defaults to ntfs for dual protocol or CIFS protocol
     */
    securityStyle?: pulumi.Input<string | enums.SecurityStyle>;
    /**
     * The service level of the file system
     */
    serviceLevel?: pulumi.Input<string | enums.ServiceLevel>;
    /**
     * Enables access-based enumeration share property for SMB Shares. Only applicable for SMB/DualProtocol volume
     */
    smbAccessBasedEnumeration?: pulumi.Input<string | enums.SmbAccessBasedEnumeration>;
    /**
     * Enables continuously available share property for smb volume. Only applicable for SMB volume
     */
    smbContinuouslyAvailable?: pulumi.Input<boolean>;
    /**
     * Enables encryption for in-flight smb3 data. Only applicable for SMB/DualProtocol volume. To be used with swagger version 2020-08-01 or later
     */
    smbEncryption?: pulumi.Input<boolean>;
    /**
     * Enables non-browsable property for SMB Shares. Only applicable for SMB/DualProtocol volume
     */
    smbNonBrowsable?: pulumi.Input<string | enums.SmbNonBrowsable>;
    /**
     * If enabled (true) the volume will contain a read-only snapshot directory which provides access to each of the volume's snapshots (defaults to true).
     */
    snapshotDirectoryVisible?: pulumi.Input<boolean>;
    /**
     * Resource identifier used to identify the Snapshot.
     */
    snapshotId?: pulumi.Input<string>;
    /**
     * The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes
     */
    subnetId: pulumi.Input<string>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    throughputMibps?: pulumi.Input<number>;
    /**
     * UNIX permissions for NFS volume accepted in octal 4 digit format. First digit selects the set user ID(4), set group ID (2) and sticky (1) attributes. Second digit selects permission for the owner of the file: read (4), write (2) and execute (1). Third selects permissions for other users in the same group. the fourth for other users not in the group. 0755 - gives read/write/execute permissions to owner and read/execute to group and other users.
     */
    unixPermissions?: pulumi.Input<string>;
    /**
     * Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. For regular volumes, valid values are in the range 50GiB to 100TiB. For large volumes, valid values are in the range 100TiB to 500TiB, and on an exceptional basis, from to 2400GiB to 2400TiB. Values expressed in bytes as multiples of 1 GiB.
     */
    usageThreshold: pulumi.Input<number>;
    /**
     * Volume spec name is the application specific designation or identifier for the particular volume in a volume group for e.g. data, log
     */
    volumeSpecName?: pulumi.Input<string>;
    /**
     * What type of volume is this. For destination volumes in Cross Region Replication, set type to DataProtection
     */
    volumeType?: pulumi.Input<string>;
    /**
     * Availability Zone
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * volumeGroupVolumePropertiesArgsProvideDefaults sets the appropriate defaults for VolumeGroupVolumePropertiesArgs
 */
export function volumeGroupVolumePropertiesArgsProvideDefaults(val: VolumeGroupVolumePropertiesArgs): VolumeGroupVolumePropertiesArgs {
    return {
        ...val,
        avsDataStore: (val.avsDataStore) ?? "Disabled",
        coolAccess: (val.coolAccess) ?? false,
        defaultGroupQuotaInKiBs: (val.defaultGroupQuotaInKiBs) ?? 0,
        defaultUserQuotaInKiBs: (val.defaultUserQuotaInKiBs) ?? 0,
        enableSubvolumes: (val.enableSubvolumes) ?? "Disabled",
        encryptionKeySource: (val.encryptionKeySource) ?? "Microsoft.NetApp",
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
export interface VolumePropertiesDataProtectionArgs {
    /**
     * Backup Properties
     */
    backup?: pulumi.Input<VolumeBackupPropertiesArgs>;
    /**
     * Replication properties
     */
    replication?: pulumi.Input<ReplicationObjectArgs>;
    /**
     * Snapshot properties.
     */
    snapshot?: pulumi.Input<VolumeSnapshotPropertiesArgs>;
    /**
     * VolumeRelocation properties
     */
    volumeRelocation?: pulumi.Input<VolumeRelocationPropertiesArgs>;
}

/**
 * Set of export policy rules
 */
export interface VolumePropertiesExportPolicyArgs {
    /**
     * Export policy rule
     */
    rules?: pulumi.Input<pulumi.Input<ExportPolicyRuleArgs>[]>;
}

/**
 * Volume relocation properties
 */
export interface VolumeRelocationPropertiesArgs {
    /**
     * Has relocation been requested for this volume
     */
    relocationRequested?: pulumi.Input<boolean>;
}

/**
 * Volume Snapshot Properties
 */
export interface VolumeSnapshotPropertiesArgs {
    /**
     * Snapshot Policy ResourceId
     */
    snapshotPolicyId?: pulumi.Input<string>;
}

/**
 * Weekly Schedule properties, make a snapshot every week at a specific day or days
 */
export interface WeeklyScheduleArgs {
    /**
     * Indicates which weekdays snapshot should be taken, accepts a comma separated list of week day names in english
     */
    day?: pulumi.Input<string>;
    /**
     * Indicates which hour in UTC timezone a snapshot should be taken
     */
    hour?: pulumi.Input<number>;
    /**
     * Indicates which minute snapshot should be taken
     */
    minute?: pulumi.Input<number>;
    /**
     * Weekly snapshot count to keep
     */
    snapshotsToKeep?: pulumi.Input<number>;
    /**
     * Resource size in bytes, current storage usage for the volume in bytes
     */
    usedBytes?: pulumi.Input<number>;
}
