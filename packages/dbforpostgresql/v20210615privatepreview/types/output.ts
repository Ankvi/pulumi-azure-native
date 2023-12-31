import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Azure active directory application.
     */
    export interface AADAppResponse {
        clientId: string;
        tenantId: string;
    }

    /**
     * Backup properties of a server
     */
    export interface BackupResponse {
        /**
         * Backup retention days for the server.
         */
        backupRetentionDays?: number;
        /**
         * The earliest restore point time (ISO8601 format) for server.
         */
        earliestRestoreDate: string;
        /**
         * A value indicating whether Geo-Redundant backup is enabled on the server.
         */
        geoRedundantBackup?: string;
    }

    /**
     * Database server metadata.
     */
    export interface DBServerMetadataResponse {
        location?: string;
        /**
         * Sku information related properties of a server.
         */
        sku?: ServerSkuResponse;
        storageMB?: number;
        version?: string;
    }

    /**
     * High availability properties of a server
     */
    export interface HighAvailabilityResponse {
        /**
         * The HA mode for the server.
         */
        mode?: string;
        /**
         * availability zone information of the standby.
         */
        standbyAvailabilityZone?: string;
        /**
         * A state of a HA server that is visible to user.
         */
        state: string;
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
     * Maintenance window properties of a server.
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
     * Migration resource group.
     */
    export interface MigrationResourceGroupResponse {
        resourceId?: string;
        subnetResourceId?: string;
    }

    /**
     * Migration secret parameters.
     */
    export interface MigrationSecretParametersResponse {
        /**
         * Azure active directory application.
         */
        aadApp: AADAppResponse;
    }

    /**
     * Migration status.
     */
    export interface MigrationStatusResponse {
        /**
         * Migration sub state details.
         */
        currentSubStateDetails: MigrationSubStateDetailsResponse;
        error: string;
        /**
         * Migration state.
         */
        state: string;
    }

    /**
     * Migration sub state details.
     */
    export interface MigrationSubStateDetailsResponse {
        /**
         * Migration sub state.
         */
        currentSubState: string;
    }

    /**
     * Network properties of a server
     */
    export interface NetworkResponse {
        /**
         * delegated subnet arm resource id.
         */
        delegatedSubnetResourceId?: string;
        /**
         * private dns zone arm resource id.
         */
        privateDnsZoneArmResourceId?: string;
        /**
         * public network access is enabled or not
         */
        publicNetworkAccess: string;
    }

    /**
     * Sku information related properties of a server.
     */
    export interface ServerSkuResponse {
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
     * Storage properties of a server
     */
    export interface StorageResponse {
        /**
         * Max storage allowed for a server.
         */
        storageSizeGB?: number;
    }

    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    export interface SystemDataResponse {
        /**
         * The timestamp of resource creation (UTC).
         */
        createdAt?: string;
        /**
         * The identity that created the resource.
         */
        createdBy?: string;
        /**
         * The type of identity that created the resource.
         */
        createdByType?: string;
        /**
         * The timestamp of resource last modification (UTC)
         */
        lastModifiedAt?: string;
        /**
         * The identity that last modified the resource.
         */
        lastModifiedBy?: string;
        /**
         * The type of identity that last modified the resource.
         */
        lastModifiedByType?: string;
    }
