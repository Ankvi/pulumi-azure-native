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
 * Authentication configuration properties of a server.
 */
export interface AuthConfigArgs {
    /**
     * Indicates if the server supports Microsoft Entra authentication.
     */
    activeDirectoryAuth?: pulumi.Input<string | enums.MicrosoftEntraAuth | undefined>;
    /**
     * Indicates if the server supports password based authentication.
     */
    passwordAuth?: pulumi.Input<string | enums.PasswordBasedAuth | undefined>;
    /**
     * Identifier of the tenant of the delegated resource.
     */
    tenantId?: pulumi.Input<string | undefined>;
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
 * Backup properties of a server.
 */
export interface BackupArgs {
    /**
     * Backup retention days for the server.
     */
    backupRetentionDays?: pulumi.Input<number | undefined>;
    /**
     * Indicates if the server is configured to create geographically redundant backups.
     */
    geoRedundantBackup?: pulumi.Input<string | enums.GeographicallyRedundantBackup | undefined>;
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
 * Cluster properties of a server.
 */
export interface ClusterArgs {
    /**
     * Number of nodes assigned to the elastic cluster.
     */
    clusterSize?: pulumi.Input<number | undefined>;
    /**
     * Default database name for the elastic cluster.
     */
    defaultDatabaseName?: pulumi.Input<string | undefined>;
}
/**
 * clusterArgsProvideDefaults sets the appropriate defaults for ClusterArgs
 */
export function clusterArgsProvideDefaults(val: ClusterArgs): ClusterArgs {
    return {
        ...val,
        clusterSize: (val.clusterSize) ?? 0,
    };
}

/**
 * Data encryption properties of a server.
 */
export interface DataEncryptionArgs {
    /**
     * Identifier of the user assigned managed identity used to access the key in Azure Key Vault for data encryption of the geographically redundant storage associated to a server that is configured to support geographically redundant backups.
     */
    geoBackupKeyURI?: pulumi.Input<string | undefined>;
    /**
     * Identifier of the user assigned managed identity used to access the key in Azure Key Vault for data encryption of the geographically redundant storage associated to a server that is configured to support geographically redundant backups.
     */
    geoBackupUserAssignedIdentityId?: pulumi.Input<string | undefined>;
    /**
     * URI of the key in Azure Key Vault used for data encryption of the primary storage associated to a server.
     */
    primaryKeyURI?: pulumi.Input<string | undefined>;
    /**
     * Identifier of the user assigned managed identity used to access the key in Azure Key Vault for data encryption of the primary storage associated to a server.
     */
    primaryUserAssignedIdentityId?: pulumi.Input<string | undefined>;
    /**
     * Data encryption type used by a server.
     */
    type?: pulumi.Input<string | enums.DataEncryptionType | undefined>;
}

/**
 * High availability properties of a server.
 */
export interface HighAvailabilityArgs {
    /**
     * High availability mode for a server.
     */
    mode?: pulumi.Input<string | enums.PostgreSqlFlexibleServerHighAvailabilityMode | undefined>;
    /**
     * Availability zone associated to the standby server created when high availability is set to SameZone or ZoneRedundant.
     */
    standbyAvailabilityZone?: pulumi.Input<string | undefined>;
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
    type?: pulumi.Input<string | enums.IdentityType | undefined>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Maintenance window properties of a server.
 */
export interface MaintenanceWindowArgs {
    /**
     * Indicates whether custom window is enabled or disabled.
     */
    customWindow?: pulumi.Input<string | undefined>;
    /**
     * Day of the week to be used for maintenance window.
     */
    dayOfWeek?: pulumi.Input<number | undefined>;
    /**
     * Start hour to be used for maintenance window.
     */
    startHour?: pulumi.Input<number | undefined>;
    /**
     * Start minute to be used for maintenance window.
     */
    startMinute?: pulumi.Input<number | undefined>;
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
    sourceServerUsername?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the name of the user for the target server. This user doesn't need to be an administrator.
     */
    targetServerUsername?: pulumi.Input<string | undefined>;
}

/**
 * Network properties of a server.
 */
export interface NetworkArgs {
    /**
     * Resource identifier of the delegated subnet. Required during creation of a new server, in case you want the server to be integrated into your own virtual network. For an update operation, you only have to provide this property if you want to change the value assigned for the private DNS zone.
     */
    delegatedSubnetResourceId?: pulumi.Input<string | undefined>;
    /**
     * Identifier of the private DNS zone. Required during creation of a new server, in case you want the server to be integrated into your own virtual network. For an update operation, you only have to provide this property if you want to change the value assigned for the private DNS zone.
     */
    privateDnsZoneArmResourceId?: pulumi.Input<string | undefined>;
    /**
     * Indicates if public network access is enabled or not. This is only supported for servers that are not integrated into a virtual network which is owned and provided by customer when server is deployed.
     */
    publicNetworkAccess?: pulumi.Input<string | enums.ServerPublicNetworkAccessState | undefined>;
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
 * Replica properties of a server.
 */
export interface ReplicaArgs {
    /**
     * Type of operation to apply on the read replica. This property is write only. Standalone means that the read replica will be promoted to a standalone server, and will become a completely independent entity from the replication set. Switchover means that the read replica will roles with the primary server.
     */
    promoteMode?: pulumi.Input<string | enums.ReadReplicaPromoteMode | undefined>;
    /**
     * Data synchronization option to use when processing the operation specified in the promoteMode property. This property is write only.
     */
    promoteOption?: pulumi.Input<string | enums.ReadReplicaPromoteOption | undefined>;
    /**
     * Role of the server in a replication set.
     */
    role?: pulumi.Input<string | enums.ReplicationRole | undefined>;
}

/**
 * Azure Active Directory identity configuration for a resource.
 */
export interface ResourceIdentityArgs {
    /**
     * The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.
     */
    type?: pulumi.Input<string | enums.SingleServerIdentityProperties | undefined>;
}

/**
 * Authentication configuration of a cluster.
 */
export interface ServerGroupClusterAuthConfigArgs {
    activeDirectoryAuth?: pulumi.Input<string | enums.ActiveDirectoryAuth | undefined>;
    passwordAuth?: pulumi.Input<string | enums.PasswordAuth | undefined>;
}

/**
 * The data encryption properties of a cluster.
 */
export interface ServerGroupClusterDataEncryptionArgs {
    /**
     * URI for the key in keyvault for data encryption of the primary server.
     */
    primaryKeyUri?: pulumi.Input<string | undefined>;
    /**
     * Resource Id for the User assigned identity to be used for data encryption of the primary server.
     */
    primaryUserAssignedIdentityId?: pulumi.Input<string | undefined>;
    type?: pulumi.Input<string | enums.DataEncryptionType | undefined>;
}

/**
 * Schedule settings for regular cluster updates.
 */
export interface ServerGroupClusterMaintenanceWindowArgs {
    /**
     * Indicates whether custom maintenance window is enabled or not.
     */
    customWindow?: pulumi.Input<string | undefined>;
    /**
     * Preferred day of the week for maintenance window.
     */
    dayOfWeek?: pulumi.Input<number | undefined>;
    /**
     * Start hour within preferred day of the week for maintenance window.
     */
    startHour?: pulumi.Input<number | undefined>;
    /**
     * Start minute within the start hour for maintenance window.
     */
    startMinute?: pulumi.Input<number | undefined>;
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
export interface SingleServerSkuArgs {
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
 * Compute information of a server.
 */
export interface SkuArgs {
    /**
     * Name by which is known a given compute size assigned to a server.
     */
    name: pulumi.Input<string>;
    /**
     * Tier of the compute assigned to a server.
     */
    tier: pulumi.Input<string | enums.SkuTier>;
}

/**
 * Storage properties of a server.
 */
export interface StorageArgs {
    /**
     * Flag to enable or disable the automatic growth of storage size of a server when available space is nearing zero and conditions allow for automatically growing storage size.
     */
    autoGrow?: pulumi.Input<string | enums.StorageAutoGrow | undefined>;
    /**
     * Maximum IOPS supported for storage. Required when type of storage is PremiumV2_LRS or UltraSSD_LRS.
     */
    iops?: pulumi.Input<number | undefined>;
    /**
     * Size of storage assigned to a server.
     */
    storageSizeGB?: pulumi.Input<number | undefined>;
    /**
     * Maximum throughput supported for storage. Required when type of storage is PremiumV2_LRS or UltraSSD_LRS.
     */
    throughput?: pulumi.Input<number | undefined>;
    /**
     * Storage tier of a server.
     */
    tier?: pulumi.Input<string | enums.AzureManagedDiskPerformanceTier | undefined>;
    /**
     * Type of storage assigned to a server. Allowed values are Premium_LRS, PremiumV2_LRS, or UltraSSD_LRS. If not specified, it defaults to Premium_LRS.
     */
    type?: pulumi.Input<string | enums.StorageType | undefined>;
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

/**
 * Identities associated with a server.
 */
export interface UserAssignedIdentityArgs {
    /**
     * Identifier of the object of the service principal associated to the user assigned managed identity.
     */
    principalId?: pulumi.Input<string | undefined>;
    /**
     * Types of identities associated with a server.
     */
    type: pulumi.Input<string | enums.IdentityType>;
    /**
     * Map of user assigned managed identities.
     */
    userAssignedIdentities?: pulumi.Input<{[key: string]: pulumi.Input<UserIdentityArgs>} | undefined>;
}

/**
 * User assigned managed identity associated with a server.
 */
export interface UserIdentityArgs {
    /**
     * Identifier of the client of the service principal associated to the user assigned managed identity.
     */
    clientId?: pulumi.Input<string | undefined>;
    /**
     * Identifier of the object of the service principal associated to the user assigned managed identity.
     */
    principalId?: pulumi.Input<string | undefined>;
}
