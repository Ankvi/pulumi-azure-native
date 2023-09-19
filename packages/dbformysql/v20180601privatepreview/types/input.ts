import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface PrivateEndpointPropertyArgs {
        /**
         * Resource id of the private endpoint.
         */
        id?: pulumi.Input<string>;
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
        version?: pulumi.Input<string | enums.ServerVersion>;
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
        version?: pulumi.Input<string | enums.ServerVersion>;
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
        version?: pulumi.Input<string | enums.ServerVersion>;
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
        version?: pulumi.Input<string | enums.ServerVersion>;
    }

    /**
     * Billing information related properties of a server.
     */
    export interface SkuArgs {
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
        tier?: pulumi.Input<string | enums.SkuTier>;
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
