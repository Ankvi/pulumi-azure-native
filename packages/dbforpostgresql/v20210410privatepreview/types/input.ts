import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Identity for the resource.
     */
    export interface IdentityArgs {
        /**
         * The identity type.
         */
        type?: pulumi.Input<enums.ResourceIdentityType>;
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

    export interface ServerPropertiesDelegatedSubnetArgumentsArgs {
        /**
         * delegated subnet arm resource id.
         */
        subnetArmResourceId?: pulumi.Input<string>;
    }

    export interface ServerPropertiesPrivateDnsZoneArgumentsArgs {
        /**
         * private dns zone arm resource id.
         */
        privateDnsZoneArmResourceId?: pulumi.Input<string>;
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
     * Storage Profile properties of a server
     */
    export interface StorageProfileArgs {
        /**
         * Backup retention days for the server.
         */
        backupRetentionDays?: pulumi.Input<number>;
        /**
         * Geo Backup redundancy option
         */
        geoRedundantBackup?: pulumi.Input<string | enums.GeoRedundantBackupOption>;
        /**
         * Max storage allowed for a server.
         */
        storageMB?: pulumi.Input<number>;
    }
