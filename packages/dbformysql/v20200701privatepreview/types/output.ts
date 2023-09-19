import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Delegated subnet arguments of a server
     */
    export interface DelegatedSubnetArgumentsResponse {
        /**
         * delegated subnet arm resource id.
         */
        subnetArmResourceId?: string;
    }

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

    /**
     * Billing information related properties of a server.
     */
    export interface SkuResponse {
        /**
         * The name of the sku, e.g. Standard_D32s_v3.
         */
        name: string;
        /**
         * The tier of the particular SKU, e.g. GeneralPurpose.
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
         * The sku name of the file storage.
         */
        fileStorageSkuName: string;
        /**
         * Enable Storage Auto Grow.
         */
        storageAutogrow?: string;
        /**
         * Storage IOPS for a server.
         */
        storageIops?: number;
        /**
         * Max storage allowed for a server.
         */
        storageMB?: number;
    }
