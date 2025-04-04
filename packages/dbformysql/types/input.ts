import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Storage Profile properties of a server
 */
export interface BackupArgs {
    /**
     * Backup retention days for the server.
     */
    backupRetentionDays?: pulumi.Input<number>;
    /**
     * Whether or not geo redundant backup is enabled.
     */
    geoRedundantBackup?: pulumi.Input<string | enums.EnableStatusEnum>;
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
    geoBackupKeyURI?: pulumi.Input<string>;
    /**
     * Geo backup user identity resource id as identity can't cross region, need identity in same region as geo backup
     */
    geoBackupUserAssignedIdentityId?: pulumi.Input<string>;
    /**
     * Primary key uri
     */
    primaryKeyURI?: pulumi.Input<string>;
    /**
     * Primary user identity resource id
     */
    primaryUserAssignedIdentityId?: pulumi.Input<string>;
    /**
     * The key type, AzureKeyVault for enable cmk, SystemManaged for disable cmk.
     */
    type?: pulumi.Input<enums.DataEncryptionType>;
}

/**
 * Network related properties of a server
 */
export interface HighAvailabilityArgs {
    /**
     * High availability mode for a server.
     */
    mode?: pulumi.Input<string | enums.HighAvailabilityMode>;
    /**
     * Availability zone of the standby server.
     */
    standbyAvailabilityZone?: pulumi.Input<string>;
}

/**
 * Properties to configure Identity for Bring your Own Keys
 */
export interface IdentityArgs {
    /**
     * Type of managed service identity.
     */
    type?: pulumi.Input<enums.ManagedServiceIdentityType>;
    /**
     * Metadata of user assigned identity.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Maintenance window of a server.
 */
export interface MaintenanceWindowArgs {
    /**
     * indicates whether custom window is enabled or disabled
     */
    customWindow?: pulumi.Input<string>;
    /**
     * day of week for maintenance window
     */
    dayOfWeek?: pulumi.Input<number>;
    /**
     * start hour for maintenance window
     */
    startHour?: pulumi.Input<number>;
    /**
     * start minute for maintenance window
     */
    startMinute?: pulumi.Input<number>;
}

/**
 * Network related properties of a server
 */
export interface NetworkArgs {
    /**
     * Delegated subnet resource id used to setup vnet for a server.
     */
    delegatedSubnetResourceId?: pulumi.Input<string>;
    /**
     * Private DNS zone resource id.
     */
    privateDnsZoneResourceId?: pulumi.Input<string>;
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
 * Billing information related properties of a server.
 */
export interface SkuArgs {
    /**
     * The name of the sku, e.g. Standard_D32s_v3.
     */
    name: pulumi.Input<string>;
    /**
     * The tier of the particular SKU, e.g. GeneralPurpose.
     */
    tier: pulumi.Input<string | enums.SkuTier>;
}

/**
 * Storage Profile properties of a server
 */
export interface StorageArgs {
    /**
     * Enable Storage Auto Grow or not.
     */
    autoGrow?: pulumi.Input<string | enums.EnableStatusEnum>;
    /**
     * Enable IO Auto Scaling or not.
     */
    autoIoScaling?: pulumi.Input<string | enums.EnableStatusEnum>;
    /**
     * Storage IOPS for a server.
     */
    iops?: pulumi.Input<number>;
    /**
     * Enable Log On Disk or not.
     */
    logOnDisk?: pulumi.Input<string | enums.EnableStatusEnum>;
    /**
     * Max storage size allowed for a server.
     */
    storageSizeGB?: pulumi.Input<number>;
}
/**
 * storageArgsProvideDefaults sets the appropriate defaults for StorageArgs
 */
export function storageArgsProvideDefaults(val: StorageArgs): StorageArgs {
    return {
        ...val,
        autoGrow: (val.autoGrow) ?? "Disabled",
        autoIoScaling: (val.autoIoScaling) ?? "Disabled",
        logOnDisk: (val.logOnDisk) ?? "Disabled",
    };
}













