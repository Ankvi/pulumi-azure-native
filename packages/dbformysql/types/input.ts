import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Storage Profile properties of a server
 */
export interface BackupArgs {
    /**
     * Backup interval hours for the server.
     */
    backupIntervalHours?: pulumi.Input<number | undefined>;
    /**
     * Backup retention days for the server.
     */
    backupRetentionDays?: pulumi.Input<number | undefined>;
    /**
     * Whether or not geo redundant backup is enabled.
     */
    geoRedundantBackup?: pulumi.Input<string | enums.EnableStatusEnum | undefined>;
}
/**
 * backupArgsProvideDefaults sets the appropriate defaults for BackupArgs
 */
export function backupArgsProvideDefaults(val: BackupArgs): BackupArgs {
    return {
        ...val,
        geoRedundantBackup: (val.geoRedundantBackup) ?? "Disabled",
    };
}

/**
 * The date encryption for cmk.
 */
export interface DataEncryptionArgs {
    /**
     * Geo backup key uri as key vault can't cross region, need cmk in same region as geo backup
     */
    geoBackupKeyURI?: pulumi.Input<string | undefined>;
    /**
     * Geo backup user identity resource id as identity can't cross region, need identity in same region as geo backup
     */
    geoBackupUserAssignedIdentityId?: pulumi.Input<string | undefined>;
    /**
     * Primary key uri
     */
    primaryKeyURI?: pulumi.Input<string | undefined>;
    /**
     * Primary user identity resource id
     */
    primaryUserAssignedIdentityId?: pulumi.Input<string | undefined>;
    /**
     * The key type, AzureKeyVault for enable cmk, SystemManaged for disable cmk.
     */
    type?: pulumi.Input<enums.DataEncryptionType | undefined>;
}

/**
 * High availability properties of a server
 */
export interface HighAvailabilityArgs {
    /**
     * High availability mode for a server.
     */
    mode?: pulumi.Input<string | enums.HighAvailabilityMode | undefined>;
    /**
     * Availability zone of the standby server.
     */
    standbyAvailabilityZone?: pulumi.Input<string | undefined>;
}

/**
 * Import source related properties.
 */
export interface ImportSourcePropertiesArgs {
    /**
     * Relative path of data directory in storage.
     */
    dataDirPath?: pulumi.Input<string | undefined>;
    /**
     * Sas token for accessing source storage. Read and list permissions are required for sas token.
     */
    sasToken?: pulumi.Input<string | undefined>;
    /**
     * Storage type of import source.
     */
    storageType?: pulumi.Input<string | enums.ImportSourceStorageType | undefined>;
    /**
     * Uri of the import source storage.
     */
    storageUrl?: pulumi.Input<string | undefined>;
}

/**
 * Maintenance window of a server.
 */
export interface MaintenanceWindowArgs {
    /**
     * indicates whether custom window is enabled or disabled
     */
    customWindow?: pulumi.Input<string | undefined>;
    /**
     * day of week for maintenance window
     */
    dayOfWeek?: pulumi.Input<number | undefined>;
    /**
     * start hour for maintenance window
     */
    startHour?: pulumi.Input<number | undefined>;
    /**
     * start minute for maintenance window
     */
    startMinute?: pulumi.Input<number | undefined>;
}

/**
 * Properties to configure Identity for Bring your Own Keys
 */
export interface MySQLServerIdentityArgs {
    /**
     * Type of managed service identity.
     */
    type?: pulumi.Input<string | enums.ManagedServiceIdentityType | undefined>;
    /**
     * Metadata of user assigned identity.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Billing information related properties of a server.
 */
export interface MySQLServerSkuArgs {
    /**
     * The name of the sku, e.g. Standard_D32s_v3.
     */
    name: pulumi.Input<string>;
    /**
     * The tier of the particular SKU, e.g. GeneralPurpose.
     */
    tier: pulumi.Input<string | enums.ServerSkuTier>;
}

/**
 * Network related properties of a server
 */
export interface NetworkArgs {
    /**
     * Delegated subnet resource id used to setup vnet for a server.
     */
    delegatedSubnetResourceId?: pulumi.Input<string | undefined>;
    /**
     * Private DNS zone resource id.
     */
    privateDnsZoneResourceId?: pulumi.Input<string | undefined>;
    /**
     * Whether or not public network access is allowed for this server. Value is 'Disabled' when server has VNet integration.
     */
    publicNetworkAccess?: pulumi.Input<string | enums.EnableStatusEnum | undefined>;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: pulumi.Input<string | undefined>;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus | undefined>;
}

/**
 * Azure Active Directory identity configuration for a resource.
 */
export interface ResourceIdentityArgs {
    /**
     * The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.
     */
    type?: pulumi.Input<string | enums.IdentityType | undefined>;
}

/**
 * The properties used to create a new server.
 */
export interface ServerPropertiesForDefaultCreateArgs {
    /**
     * The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation). The login name is required when updating password.
     */
    administratorLogin: pulumi.Input<string>;
    /**
     * The password of the administrator login.
     */
    administratorLoginPassword: pulumi.Input<string>;
    /**
     * The mode to create a new server.
     * Expected value is 'Default'.
     */
    createMode: pulumi.Input<"Default">;
    /**
     * Status showing whether the server enabled infrastructure encryption.
     */
    infrastructureEncryption?: pulumi.Input<string | enums.InfrastructureEncryption | undefined>;
    /**
     * Enforce a minimal Tls version for the server.
     */
    minimalTlsVersion?: pulumi.Input<string | enums.MinimalTlsVersionEnum | undefined>;
    /**
     * Whether or not public network access is allowed for this server. Value is optional but if passed in, must be 'Enabled' or 'Disabled'
     */
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccessEnum | undefined>;
    /**
     * Enable ssl enforcement or not when connect to server.
     */
    sslEnforcement?: pulumi.Input<enums.SslEnforcementEnum | undefined>;
    /**
     * Storage profile of a server.
     */
    storageProfile?: pulumi.Input<StorageProfileArgs | undefined>;
    /**
     * Server version.
     */
    version?: pulumi.Input<string | enums.SingleServerVersion | undefined>;
}

/**
 * The properties used to create a new server by restoring to a different region from a geo replicated backup.
 */
export interface ServerPropertiesForGeoRestoreArgs {
    /**
     * The mode to create a new server.
     * Expected value is 'GeoRestore'.
     */
    createMode: pulumi.Input<"GeoRestore">;
    /**
     * Status showing whether the server enabled infrastructure encryption.
     */
    infrastructureEncryption?: pulumi.Input<string | enums.InfrastructureEncryption | undefined>;
    /**
     * Enforce a minimal Tls version for the server.
     */
    minimalTlsVersion?: pulumi.Input<string | enums.MinimalTlsVersionEnum | undefined>;
    /**
     * Whether or not public network access is allowed for this server. Value is optional but if passed in, must be 'Enabled' or 'Disabled'
     */
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccessEnum | undefined>;
    /**
     * The source server id to restore from.
     */
    sourceServerId: pulumi.Input<string>;
    /**
     * Enable ssl enforcement or not when connect to server.
     */
    sslEnforcement?: pulumi.Input<enums.SslEnforcementEnum | undefined>;
    /**
     * Storage profile of a server.
     */
    storageProfile?: pulumi.Input<StorageProfileArgs | undefined>;
    /**
     * Server version.
     */
    version?: pulumi.Input<string | enums.SingleServerVersion | undefined>;
}

/**
 * The properties to create a new replica.
 */
export interface ServerPropertiesForReplicaArgs {
    /**
     * The mode to create a new server.
     * Expected value is 'Replica'.
     */
    createMode: pulumi.Input<"Replica">;
    /**
     * Status showing whether the server enabled infrastructure encryption.
     */
    infrastructureEncryption?: pulumi.Input<string | enums.InfrastructureEncryption | undefined>;
    /**
     * Enforce a minimal Tls version for the server.
     */
    minimalTlsVersion?: pulumi.Input<string | enums.MinimalTlsVersionEnum | undefined>;
    /**
     * Whether or not public network access is allowed for this server. Value is optional but if passed in, must be 'Enabled' or 'Disabled'
     */
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccessEnum | undefined>;
    /**
     * The master server id to create replica from.
     */
    sourceServerId: pulumi.Input<string>;
    /**
     * Enable ssl enforcement or not when connect to server.
     */
    sslEnforcement?: pulumi.Input<enums.SslEnforcementEnum | undefined>;
    /**
     * Storage profile of a server.
     */
    storageProfile?: pulumi.Input<StorageProfileArgs | undefined>;
    /**
     * Server version.
     */
    version?: pulumi.Input<string | enums.SingleServerVersion | undefined>;
}

/**
 * The properties used to create a new server by restoring from a backup.
 */
export interface ServerPropertiesForRestoreArgs {
    /**
     * The mode to create a new server.
     * Expected value is 'PointInTimeRestore'.
     */
    createMode: pulumi.Input<"PointInTimeRestore">;
    /**
     * Status showing whether the server enabled infrastructure encryption.
     */
    infrastructureEncryption?: pulumi.Input<string | enums.InfrastructureEncryption | undefined>;
    /**
     * Enforce a minimal Tls version for the server.
     */
    minimalTlsVersion?: pulumi.Input<string | enums.MinimalTlsVersionEnum | undefined>;
    /**
     * Whether or not public network access is allowed for this server. Value is optional but if passed in, must be 'Enabled' or 'Disabled'
     */
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccessEnum | undefined>;
    /**
     * Restore point creation time (ISO8601 format), specifying the time to restore from.
     */
    restorePointInTime: pulumi.Input<string>;
    /**
     * The source server id to restore from.
     */
    sourceServerId: pulumi.Input<string>;
    /**
     * Enable ssl enforcement or not when connect to server.
     */
    sslEnforcement?: pulumi.Input<enums.SslEnforcementEnum | undefined>;
    /**
     * Storage profile of a server.
     */
    storageProfile?: pulumi.Input<StorageProfileArgs | undefined>;
    /**
     * Server version.
     */
    version?: pulumi.Input<string | enums.SingleServerVersion | undefined>;
}

/**
 * Billing information related properties of a server.
 */
export interface SkuArgs {
    /**
     * The scale up/out capacity, representing server's compute units.
     */
    capacity?: pulumi.Input<number | undefined>;
    /**
     * The family of hardware.
     */
    family?: pulumi.Input<string | undefined>;
    /**
     * The name of the sku, typically, tier + family + cores, e.g. B_Gen4_1, GP_Gen5_8.
     */
    name: pulumi.Input<string>;
    /**
     * The size code, to be interpreted by resource as appropriate.
     */
    size?: pulumi.Input<string | undefined>;
    /**
     * The tier of the particular SKU, e.g. Basic.
     */
    tier?: pulumi.Input<string | enums.SingleServerSkuTier | undefined>;
}

/**
 * Storage Profile properties of a server
 */
export interface StorageArgs {
    /**
     * Enable Storage Auto Grow or not.
     */
    autoGrow?: pulumi.Input<string | enums.EnableStatusEnum | undefined>;
    /**
     * Enable IO Auto Scaling or not.
     */
    autoIoScaling?: pulumi.Input<string | enums.EnableStatusEnum | undefined>;
    /**
     * Storage IOPS for a server.
     */
    iops?: pulumi.Input<number | undefined>;
    /**
     * Enable Log On Disk or not.
     */
    logOnDisk?: pulumi.Input<string | enums.EnableStatusEnum | undefined>;
    /**
     * The redundant type of the server storage. The parameter is used for server creation.
     */
    storageRedundancy?: pulumi.Input<string | enums.StorageRedundancyEnum | undefined>;
    /**
     * Max storage size allowed for a server.
     */
    storageSizeGB?: pulumi.Input<number | undefined>;
}
/**
 * storageArgsProvideDefaults sets the appropriate defaults for StorageArgs
 */
export function storageArgsProvideDefaults(val: StorageArgs): StorageArgs {
    return {
        ...val,
        autoGrow: (val.autoGrow) ?? "Disabled",
        autoIoScaling: (val.autoIoScaling) ?? "Enabled",
        logOnDisk: (val.logOnDisk) ?? "Disabled",
        storageRedundancy: (val.storageRedundancy) ?? "LocalRedundancy",
    };
}

/**
 * Storage Profile properties of a server
 */
export interface StorageProfileArgs {
    /**
     * Backup retention days for the server.
     */
    backupRetentionDays?: pulumi.Input<number | undefined>;
    /**
     * Enable Geo-redundant or not for server backup.
     */
    geoRedundantBackup?: pulumi.Input<string | enums.GeoRedundantBackup | undefined>;
    /**
     * Enable Storage Auto Grow.
     */
    storageAutogrow?: pulumi.Input<string | enums.StorageAutogrow | undefined>;
    /**
     * Max storage allowed for a server.
     */
    storageMB?: pulumi.Input<number | undefined>;
}
