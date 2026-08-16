import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export interface PrivateEndpointPropertyArgs {
    /**
     * Resource id of the private endpoint.
     */
    id?: pulumi.Input<string | undefined>;
}

export interface PrivateLinkServiceConnectionStatePropertyArgs {
    /**
     * The private link service connection description.
     */
    description: pulumi.Input<string>;
    /**
     * The private link service connection status.
     */
    status: pulumi.Input<string>;
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
    version?: pulumi.Input<string | enums.ServerVersion | undefined>;
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
    version?: pulumi.Input<string | enums.ServerVersion | undefined>;
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
    version?: pulumi.Input<string | enums.ServerVersion | undefined>;
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
    version?: pulumi.Input<string | enums.ServerVersion | undefined>;
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
    tier?: pulumi.Input<string | enums.SkuTier | undefined>;
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
