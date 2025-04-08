import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Server admin credentials.
 */
export interface AdminCredentialsArgs {
    /**
     * Password for source server.
     */
    sourceServerPassword: pulumi.Input<string>;
    /**
     * Password for target server.
     */
    targetServerPassword: pulumi.Input<string>;
}

/**
 * Authentication configuration of a cluster.
 */
export interface AuthConfigArgs {
    activeDirectoryAuth?: pulumi.Input<string | enums.ActiveDirectoryAuth | enums.ActiveDirectoryAuthEnum>;
    passwordAuth?: pulumi.Input<string | enums.PasswordAuth | enums.PasswordAuthEnum>;
    /**
     * Tenant id of the server.
     */
    tenantId?: pulumi.Input<string>;
}
/**
 * authConfigArgsProvideDefaults sets the appropriate defaults for AuthConfigArgs
 */
export function authConfigArgsProvideDefaults(val: AuthConfigArgs): AuthConfigArgs {
    return {
        ...val,
        tenantId: (val.tenantId) ?? "",
    };
}

/**
 * Backup properties of a server
 */
export interface BackupArgs {
    /**
     * Backup retention days for the server.
     */
    backupRetentionDays?: pulumi.Input<number>;
    /**
     * A value indicating whether Geo-Redundant backup is enabled on the server.
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
 * The data encryption properties of a cluster.
 */
export interface DataEncryptionArgs {
    /**
     * Geo-backup encryption key status for Data encryption enabled server.
     */
    geoBackupEncryptionKeyStatus?: pulumi.Input<string | enums.KeyStatusEnum>;
    /**
     * URI for the key in keyvault for data encryption for geo-backup of server.
     */
    geoBackupKeyURI?: pulumi.Input<string>;
    /**
     * Resource Id for the User assigned identity to be used for data encryption for geo-backup of server.
     */
    geoBackupUserAssignedIdentityId?: pulumi.Input<string>;
    /**
     * Primary encryption key status for Data encryption enabled server.
     */
    primaryEncryptionKeyStatus?: pulumi.Input<string | enums.KeyStatusEnum>;
    /**
     * URI for the key in keyvault for data encryption of the primary server.
     */
    primaryKeyURI?: pulumi.Input<string>;
    /**
     * URI for the key in keyvault for data encryption of the primary server.
     */
    primaryKeyUri?: pulumi.Input<string>;
    /**
     * Resource Id for the User assigned identity to be used for data encryption of the primary server.
     */
    primaryUserAssignedIdentityId?: pulumi.Input<string>;
    type?: pulumi.Input<string | enums.DataEncryptionType | enums.ArmServerKeyType>;
}

/**
 * High availability properties of a server
 */
export interface HighAvailabilityArgs {
    /**
     * The HA mode for the server.
     */
    mode?: pulumi.Input<string | enums.HighAvailabilityMode>;
    /**
     * availability zone information of the standby.
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
 * Schedule settings for regular cluster updates.
 */
export interface MaintenanceWindowArgs {
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
 * Migration secret parameters.
 */
export interface MigrationSecretParametersArgs {
    /**
     * Admin credentials for source and target servers
     */
    adminCredentials: pulumi.Input<AdminCredentialsArgs>;
    /**
     * Gets or sets the username for the source server. This user need not be an admin.
     */
    sourceServerUsername?: pulumi.Input<string>;
    /**
     * Gets or sets the username for the target server. This user need not be an admin.
     */
    targetServerUsername?: pulumi.Input<string>;
}

/**
 * Network properties of a server.
 */
export interface NetworkArgs {
    /**
     * Delegated subnet arm resource id. This is required to be passed during create, in case we want the server to be VNET injected, i.e. Private access server. During update, pass this only if we want to update the value for Private DNS zone.
     */
    delegatedSubnetResourceId?: pulumi.Input<string>;
    /**
     * Private dns zone arm resource id. This is required to be passed during create, in case we want the server to be VNET injected, i.e. Private access server. During update, pass this only if we want to update the value for Private DNS zone.
     */
    privateDnsZoneArmResourceId?: pulumi.Input<string>;
    /**
     * public network access is enabled or not
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
 * Replica properties of a server
 */
export interface ReplicaArgs {
    /**
     * Sets the promote mode for a replica server. This is a write only property.
     */
    promoteMode?: pulumi.Input<string | enums.ReadReplicaPromoteMode>;
    /**
     * Sets the promote options for a replica server. This is a write only property.
     */
    promoteOption?: pulumi.Input<string | enums.ReplicationPromoteOption>;
    /**
     * Used to indicate role of the server in replication set.
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
 * Sku information related properties of a server.
 */
export interface SkuArgs {
    /**
     * The name of the sku, typically, tier + family + cores, e.g. Standard_D4s_v3.
     */
    name: pulumi.Input<string>;
    /**
     * The tier of the particular SKU, e.g. Burstable.
     */
    tier: pulumi.Input<string | enums.SkuTier>;
}

/**
 * Storage properties of a server
 */
export interface StorageArgs {
    /**
     * Flag to enable / disable Storage Auto grow for flexible server.
     */
    autoGrow?: pulumi.Input<string | enums.StorageAutoGrow>;
    /**
     * Storage tier IOPS quantity. This property is required to be set for storage Type PremiumV2_LRS
     */
    iops?: pulumi.Input<number>;
    /**
     * Max storage allowed for a server.
     */
    storageSizeGB?: pulumi.Input<number>;
    /**
     * Storage throughput for the server. This is required to be set for storage Type PremiumV2_LRS
     */
    throughput?: pulumi.Input<number>;
    /**
     * Name of storage tier for IOPS.
     */
    tier?: pulumi.Input<string | enums.AzureManagedDiskPerformanceTiers>;
    /**
     * Storage type for the server. Allowed values are Premium_LRS and PremiumV2_LRS, and default is Premium_LRS if not specified
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
 * Information describing the identities associated with this application.
 */
export interface UserAssignedIdentityArgs {
    /**
     * the identity principal Id of the server.
     */
    principalId?: pulumi.Input<string>;
    /**
     * the types of identities associated with this resource
     */
    type: pulumi.Input<string | enums.IdentityType>;
    /**
     * represents user assigned identities map.
     */
    userAssignedIdentities?: pulumi.Input<{[key: string]: pulumi.Input<UserIdentityArgs>}>;
}

/**
 * Describes a single user-assigned identity associated with the application.
 */
export interface UserIdentityArgs {
    /**
     * the client identifier of the Service Principal which this identity represents.
     */
    clientId?: pulumi.Input<string>;
    /**
     * the object identifier of the Service Principal which this identity represents.
     */
    principalId?: pulumi.Input<string>;
}
