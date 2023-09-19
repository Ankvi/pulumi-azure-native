import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Azure active directory application.
     */
    export interface AADAppArgs {
        aadSecret: pulumi.Input<string>;
        clientId: pulumi.Input<string>;
        tenantId: pulumi.Input<string>;
    }

    /**
     * Server admin credentials.
     */
    export interface AdminCredentialsArgs {
        sourceServerPassword: pulumi.Input<string>;
        targetServerPassword: pulumi.Input<string>;
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
     * Identity for the resource.
     */
    export interface IdentityArgs {
        /**
         * The identity type.
         */
        type?: pulumi.Input<enums.ResourceIdentityType>;
    }

    /**
     * Maintenance window properties of a server.
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
     * Migration resource group.
     */
    export interface MigrationResourceGroupArgs {
        resourceId?: pulumi.Input<string>;
        subnetResourceId?: pulumi.Input<string>;
    }

    /**
     * Migration secret parameters.
     */
    export interface MigrationSecretParametersArgs {
        /**
         * Azure active directory application.
         */
        aadApp: pulumi.Input<AADAppArgs>;
        /**
         * Server admin credentials.
         */
        adminCredentials: pulumi.Input<AdminCredentialsArgs>;
    }

    /**
     * Network properties of a server
     */
    export interface NetworkArgs {
        /**
         * delegated subnet arm resource id.
         */
        delegatedSubnetResourceId?: pulumi.Input<string>;
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
     * Storage properties of a server
     */
    export interface StorageArgs {
        /**
         * Max storage allowed for a server.
         */
        storageSizeGB?: pulumi.Input<number>;
    }
