import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Credentials of administrator users for source and target servers.
 */
export interface AdminCredentialsArgs {
    /**
     * Password for the user of the source server.
     */
    sourceServerPassword: pulumi.Input<string>;
    /**
     * Password for the user of the target server.
     */
    targetServerPassword: pulumi.Input<string>;
}

/**
 * Authentication configuration properties of a flexible server.
 */
export interface AuthConfigArgs {
    /**
     * Indicates if the server supports Microsoft Entra authentication.
     */
    activeDirectoryAuth?: pulumi.Input<string | enums.ActiveDirectoryAuthEnum>;
    /**
     * Indicates if the server supports password based authentication.
     */
    passwordAuth?: pulumi.Input<string | enums.PasswordAuthEnum>;
    /**
     * Identifier of the tenant of the delegated resource.
     */
    tenantId?: pulumi.Input<string>;
}
/**
 * authConfigArgsProvideDefaults sets the appropriate defaults for AuthConfigArgs
 */
export function authConfigArgsProvideDefaults(val: AuthConfigArgs): AuthConfigArgs {
    return {
        ...val,
        passwordAuth: (val.passwordAuth) ?? "Enabled",
        tenantId: (val.tenantId) ?? "",
    };
}

/**
 * Backup properties of a flexible server.
 */
export interface BackupArgs {
    /**
     * Backup retention days for the flexible server.
     */
    backupRetentionDays?: pulumi.Input<number>;
    /**
     * Indicates if the server is configured to create geographically redundant backups.
     */
    geoRedundantBackup?: pulumi.Input<string | enums.GeoRedundantBackupEnum>;
}
/**
 * backupArgsProvideDefaults sets the appropriate defaults for BackupArgs
 */
export function backupArgsProvideDefaults(val: BackupArgs): BackupArgs {
    return {
        ...val,
        backupRetentionDays: (val.backupRetentionDays) ?? 7,
        geoRedundantBackup: (val.geoRedundantBackup) ?? "Disabled",
    };
}

/**
 * Data encryption properties of a flexible server.
 */
export interface DataEncryptionArgs {
    /**
     * Status of key used by a flexible server configured with data encryption based on customer managed key, to encrypt the geographically redundant storage associated to the server when it is configured to support geographically redundant backups.
     */
    geoBackupEncryptionKeyStatus?: pulumi.Input<string | enums.KeyStatusEnum>;
    /**
     * Identifier of the user assigned managed identity used to access the key in Azure Key Vault for data encryption of the geographically redundant storage associated to a flexible server that is configured to support geographically redundant backups.
     */
    geoBackupKeyURI?: pulumi.Input<string>;
    /**
     * Identifier of the user assigned managed identity used to access the key in Azure Key Vault for data encryption of the geographically redundant storage associated to a flexible server that is configured to support geographically redundant backups.
     */
    geoBackupUserAssignedIdentityId?: pulumi.Input<string>;
    /**
     * Status of key used by a flexible server configured with data encryption based on customer managed key, to encrypt the primary storage associated to the server.
     */
    primaryEncryptionKeyStatus?: pulumi.Input<string | enums.KeyStatusEnum>;
    /**
     * URI of the key in Azure Key Vault used for data encryption of the primary storage associated to a flexible server.
     */
    primaryKeyURI?: pulumi.Input<string>;
    /**
     * Identifier of the user assigned managed identity used to access the key in Azure Key Vault for data encryption of the primary storage associated to a flexible server.
     */
    primaryUserAssignedIdentityId?: pulumi.Input<string>;
    /**
     * Data encryption type used by a flexible server.
     */
    type?: pulumi.Input<string | enums.ArmServerKeyType>;
}

/**
 * High availability properties of a flexible server.
 */
export interface HighAvailabilityArgs {
    /**
     * High availability mode for a flexible server.
     */
    mode?: pulumi.Input<string | enums.HighAvailabilityMode>;
    /**
     * Availability zone associated to the standby server created when high availability is set to SameZone or ZoneRedundant.
     */
    standbyAvailabilityZone?: pulumi.Input<string>;
}
/**
 * highAvailabilityArgsProvideDefaults sets the appropriate defaults for HighAvailabilityArgs
 */
export function highAvailabilityArgsProvideDefaults(val: HighAvailabilityArgs): HighAvailabilityArgs {
    return {
        ...val,
        mode: (val.mode) ?? "Disabled",
        standbyAvailabilityZone: (val.standbyAvailabilityZone) ?? "",
    };
}

/**
 * Describes the identity of the cluster.
 */
export interface IdentityPropertiesArgs {
    type?: pulumi.Input<string | enums.IdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Maintenance window properties of a flexible server.
 */
export interface MaintenanceWindowArgs {
    /**
     * Indicates whether custom window is enabled or disabled.
     */
    customWindow?: pulumi.Input<string>;
    /**
     * Day of the week to be used for maintenance window.
     */
    dayOfWeek?: pulumi.Input<number>;
    /**
     * Start hour to be used for maintenance window.
     */
    startHour?: pulumi.Input<number>;
    /**
     * Start minute to be used for maintenance window.
     */
    startMinute?: pulumi.Input<number>;
}
/**
 * maintenanceWindowArgsProvideDefaults sets the appropriate defaults for MaintenanceWindowArgs
 */
export function maintenanceWindowArgsProvideDefaults(val: MaintenanceWindowArgs): MaintenanceWindowArgs {
    return {
        ...val,
        customWindow: (val.customWindow) ?? "Disabled",
        dayOfWeek: (val.dayOfWeek) ?? 0,
        startHour: (val.startHour) ?? 0,
        startMinute: (val.startMinute) ?? 0,
    };
}

/**
 * Migration secret parameters.
 */
export interface MigrationSecretParametersArgs {
    /**
     * Credentials of administrator users for source and target servers.
     */
    adminCredentials: pulumi.Input<AdminCredentialsArgs>;
    /**
     * Gets or sets the name of the user for the source server. This user doesn't need to be an administrator.
     */
    sourceServerUsername?: pulumi.Input<string>;
    /**
     * Gets or sets the name of the user for the target server. This user doesn't need to be an administrator.
     */
    targetServerUsername?: pulumi.Input<string>;
}

/**
 * Network properties of a flexible server.
 */
export interface NetworkArgs {
    /**
     * Resource identifier of the delegated subnet. Required during creation of a new server, in case you want the server to be integrated into your own virtual network. For an update operation, you only have to provide this property if you want to change the value assigned for the private DNS zone.
     */
    delegatedSubnetResourceId?: pulumi.Input<string>;
    /**
     * Identifier of the private DNS zone. Required during creation of a new server, in case you want the server to be integrated into your own virtual network. For an update operation, you only have to provide this property if you want to change the value assigned for the private DNS zone.
     */
    privateDnsZoneArmResourceId?: pulumi.Input<string>;
    /**
     * Indicates if public network access is enabled or not.
     */
    publicNetworkAccess?: pulumi.Input<string | enums.ServerPublicNetworkAccessState>;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: pulumi.Input<string>;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
}

/**
 * Replica properties of a flexible server.
 */
export interface ReplicaArgs {
    /**
     * Type of operation to apply on the read replica. This property is write only. Standalone means that the read replica will be promoted to a standalone server, and will become a completely independent entity from the replication set. Switchover means that the read replica will roles with the primary server.
     */
    promoteMode?: pulumi.Input<string | enums.ReadReplicaPromoteMode>;
    /**
     * Data synchronization option to use when processing the operation specified in the promoteMode property This property is write only. Planned means that the operation will wait for data in the read replica to be fully synchronized with its source server before it initiates the operation. Forced means that the operation will not wait for data in the read replica to be synchronized with its source server before it initiates the operation.
     */
    promoteOption?: pulumi.Input<string | enums.ReplicationPromoteOption>;
    /**
     * Role of the server in a replication set.
     */
    role?: pulumi.Input<string | enums.ReplicationRole>;
}

/**
 * Azure Active Directory identity configuration for a resource.
 */
export interface ResourceIdentityArgs {
    /**
     * The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.
     */
    type?: pulumi.Input<string | enums.SingleServerIdentityProperties>;
}

/**
 * Authentication configuration of a cluster.
 */
export interface ServerGroupClusterAuthConfigArgs {
    activeDirectoryAuth?: pulumi.Input<string | enums.ActiveDirectoryAuth>;
    passwordAuth?: pulumi.Input<string | enums.PasswordAuth>;
}

/**
 * The data encryption properties of a cluster.
 */
export interface ServerGroupClusterDataEncryptionArgs {
    /**
     * URI for the key in keyvault for data encryption of the primary server.
     */
    primaryKeyUri?: pulumi.Input<string>;
    /**
     * Resource Id for the User assigned identity to be used for data encryption of the primary server.
     */
    primaryUserAssignedIdentityId?: pulumi.Input<string>;
    type?: pulumi.Input<string | enums.DataEncryptionType>;
}

/**
 * Schedule settings for regular cluster updates.
 */
export interface ServerGroupClusterMaintenanceWindowArgs {
    /**
     * Indicates whether custom maintenance window is enabled or not.
     */
    customWindow?: pulumi.Input<string>;
    /**
     * Preferred day of the week for maintenance window.
     */
    dayOfWeek?: pulumi.Input<number>;
    /**
     * Start hour within preferred day of the week for maintenance window.
     */
    startHour?: pulumi.Input<number>;
    /**
     * Start minute within the start hour for maintenance window.
     */
    startMinute?: pulumi.Input<number>;
}

/**
 * The properties used to create a new server.
 */
export interface ServerPropertiesForDefaultCreateArgs {
    /**
     * The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation).
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
    infrastructureEncryption?: pulumi.Input<string | enums.InfrastructureEncryption>;
    /**
     * Enforce a minimal Tls version for the server.
     */
    minimalTlsVersion?: pulumi.Input<string | enums.MinimalTlsVersionEnum>;
    /**
     * Whether or not public network access is allowed for this server. Value is optional but if passed in, must be 'Enabled' or 'Disabled'
     */
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccessEnum>;
    /**
     * Enable ssl enforcement or not when connect to server.
     */
    sslEnforcement?: pulumi.Input<enums.SslEnforcementEnum>;
    /**
     * Storage profile of a server.
     */
    storageProfile?: pulumi.Input<StorageProfileArgs>;
    /**
     * Server version.
     */
    version?: pulumi.Input<string | enums.SingleServerVersion>;
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
    infrastructureEncryption?: pulumi.Input<string | enums.InfrastructureEncryption>;
    /**
     * Enforce a minimal Tls version for the server.
     */
    minimalTlsVersion?: pulumi.Input<string | enums.MinimalTlsVersionEnum>;
    /**
     * Whether or not public network access is allowed for this server. Value is optional but if passed in, must be 'Enabled' or 'Disabled'
     */
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccessEnum>;
    /**
     * The source server id to restore from.
     */
    sourceServerId: pulumi.Input<string>;
    /**
     * Enable ssl enforcement or not when connect to server.
     */
    sslEnforcement?: pulumi.Input<enums.SslEnforcementEnum>;
    /**
     * Storage profile of a server.
     */
    storageProfile?: pulumi.Input<StorageProfileArgs>;
    /**
     * Server version.
     */
    version?: pulumi.Input<string | enums.SingleServerVersion>;
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
    infrastructureEncryption?: pulumi.Input<string | enums.InfrastructureEncryption>;
    /**
     * Enforce a minimal Tls version for the server.
     */
    minimalTlsVersion?: pulumi.Input<string | enums.MinimalTlsVersionEnum>;
    /**
     * Whether or not public network access is allowed for this server. Value is optional but if passed in, must be 'Enabled' or 'Disabled'
     */
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccessEnum>;
    /**
     * The master server id to create replica from.
     */
    sourceServerId: pulumi.Input<string>;
    /**
     * Enable ssl enforcement or not when connect to server.
     */
    sslEnforcement?: pulumi.Input<enums.SslEnforcementEnum>;
    /**
     * Storage profile of a server.
     */
    storageProfile?: pulumi.Input<StorageProfileArgs>;
    /**
     * Server version.
     */
    version?: pulumi.Input<string | enums.SingleServerVersion>;
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
    infrastructureEncryption?: pulumi.Input<string | enums.InfrastructureEncryption>;
    /**
     * Enforce a minimal Tls version for the server.
     */
    minimalTlsVersion?: pulumi.Input<string | enums.MinimalTlsVersionEnum>;
    /**
     * Whether or not public network access is allowed for this server. Value is optional but if passed in, must be 'Enabled' or 'Disabled'
     */
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccessEnum>;
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
    sslEnforcement?: pulumi.Input<enums.SslEnforcementEnum>;
    /**
     * Storage profile of a server.
     */
    storageProfile?: pulumi.Input<StorageProfileArgs>;
    /**
     * Server version.
     */
    version?: pulumi.Input<string | enums.SingleServerVersion>;
}

/**
 * Billing information related properties of a server.
 */
export interface SingleServerSkuArgs {
    /**
     * The scale up/out capacity, representing server's compute units.
     */
    capacity?: pulumi.Input<number>;
    /**
     * The family of hardware.
     */
    family?: pulumi.Input<string>;
    /**
     * The name of the sku, typically, tier + family + cores, e.g. B_Gen4_1, GP_Gen5_8.
     */
    name: pulumi.Input<string>;
    /**
     * The size code, to be interpreted by resource as appropriate.
     */
    size?: pulumi.Input<string>;
    /**
     * The tier of the particular SKU, e.g. Basic.
     */
    tier?: pulumi.Input<string | enums.SingleServerSkuTier>;
}

/**
 * Compute information of a flexible server.
 */
export interface SkuArgs {
    /**
     * Name by which is known a given compute size assigned to a flexible server.
     */
    name: pulumi.Input<string>;
    /**
     * Tier of the compute assigned to a flexible server.
     */
    tier: pulumi.Input<string | enums.SkuTier>;
}

/**
 * Storage properties of a flexible server.
 */
export interface StorageArgs {
    /**
     * Flag to enable or disable the automatic growth of storage size of a flexible server when available space is nearing zero and conditions allow for automatically growing storage size.
     */
    autoGrow?: pulumi.Input<string | enums.StorageAutoGrow>;
    /**
     * Maximum IOPS supported for storage. Required when type of storage is PremiumV2_LRS.
     */
    iops?: pulumi.Input<number>;
    /**
     * Size of storage assigned to a flexible server.
     */
    storageSizeGB?: pulumi.Input<number>;
    /**
     * Maximum throughput supported for storage. Required when type of storage is PremiumV2_LRS.
     */
    throughput?: pulumi.Input<number>;
    /**
     * Storage tier of a flexible server.
     */
    tier?: pulumi.Input<string | enums.AzureManagedDiskPerformanceTiers>;
    /**
     * Type of storage assigned to a flexible server. Allowed values are Premium_LRS or PremiumV2_LRS. If not specified, it defaults to Premium_LRS.
     */
    type?: pulumi.Input<string | enums.StorageType>;
}

/**
 * Storage Profile properties of a server
 */
export interface StorageProfileArgs {
    /**
     * Backup retention days for the server.
     */
    backupRetentionDays?: pulumi.Input<number>;
    /**
     * Enable Geo-redundant or not for server backup.
     */
    geoRedundantBackup?: pulumi.Input<string | enums.GeoRedundantBackup>;
    /**
     * Enable Storage Auto Grow.
     */
    storageAutogrow?: pulumi.Input<string | enums.StorageAutogrow>;
    /**
     * Max storage allowed for a server.
     */
    storageMB?: pulumi.Input<number>;
}

/**
 * Identities associated with a flexible server.
 */
export interface UserAssignedIdentityArgs {
    /**
     * Identifier of the object of the service principal associated to the user assigned managed identity.
     */
    principalId?: pulumi.Input<string>;
    /**
     * Types of identities associated with a flexible server.
     */
    type: pulumi.Input<string | enums.IdentityType>;
    /**
     * Map of user assigned managed identities.
     */
    userAssignedIdentities?: pulumi.Input<{[key: string]: pulumi.Input<UserIdentityArgs>}>;
}

/**
 * User assigned managed identity associated with a flexible server.
 */
export interface UserIdentityArgs {
    /**
     * Identifier of the client of the service principal associated to the user assigned managed identity.
     */
    clientId?: pulumi.Input<string>;
    /**
     * Identifier of the object of the service principal associated to the user assigned managed identity.
     */
    principalId?: pulumi.Input<string>;
}
