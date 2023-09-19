import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Delegated subnet arguments of a server
     */
    export interface DelegatedSubnetArgumentsArgs {
        /**
         * delegated subnet arm resource id.
         */
        subnetArmResourceId?: pulumi.Input<string>;
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
    export interface StorageProfileArgs {
        /**
         * Backup retention days for the server.
         */
        backupRetentionDays?: pulumi.Input<number>;
        /**
         * Enable Storage Auto Grow.
         */
        storageAutogrow?: pulumi.Input<string | enums.StorageAutogrow>;
        /**
         * Storage IOPS for a server.
         */
        storageIops?: pulumi.Input<number>;
        /**
         * Max storage allowed for a server.
         */
        storageMB?: pulumi.Input<number>;
    }
