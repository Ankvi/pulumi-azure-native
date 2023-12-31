import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Identity for the resource.
     */
    export interface IdentityResponse {
        /**
         * The principal ID of resource identity.
         */
        principalId: string;
        /**
         * The tenant ID of resource.
         */
        tenantId: string;
        /**
         * The identity type.
         */
        type?: string;
    }

    /**
     * Maintenance window of a server.
     */
    export interface MaintenanceWindowResponse {
        /**
         * indicates whether custom window is enabled or disabled
         */
        customWindow?: string;
        /**
         * day of week for maintenance window
         */
        dayOfWeek?: number;
        /**
         * start hour for maintenance window
         */
        startHour?: number;
        /**
         * start minute for maintenance window
         */
        startMinute?: number;
    }

    export interface ServerPropertiesResponseDelegatedSubnetArguments {
        /**
         * delegated subnet arm resource id.
         */
        subnetArmResourceId?: string;
    }

    export interface ServerPropertiesResponsePrivateDnsZoneArguments {
        /**
         * private dns zone arm resource id.
         */
        privateDnsZoneArmResourceId?: string;
    }

    /**
     * Sku information related properties of a server.
     */
    export interface SkuResponse {
        /**
         * The name of the sku, typically, tier + family + cores, e.g. Standard_D4s_v3.
         */
        name: string;
        /**
         * The tier of the particular SKU, e.g. Burstable.
         */
        tier: string;
    }

    /**
     * Storage Profile properties of a server
     */
    export interface StorageProfileResponse {
        /**
         * Backup retention days for the server.
         */
        backupRetentionDays?: number;
        /**
         * A value indicating whether Geo-Redundant backup is enabled on the server.
         */
        geoRedundantBackup?: string;
        /**
         * Max storage allowed for a server.
         */
        storageMB?: number;
    }
