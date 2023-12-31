import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Authentication configuration properties of a server
     */
    export interface AuthConfigResponse {
        /**
         * If true, Azure Active Directory authentication is enabled.
         */
        activeDirectoryAuthEnabled?: boolean;
        /**
         * If true, Password authentication is enabled.
         */
        passwordAuthEnabled?: boolean;
        /**
         * Tenant id of the server.
         */
        tenantId?: string;
    }
    /**
     * authConfigResponseProvideDefaults sets the appropriate defaults for AuthConfigResponse
     */
    export function authConfigResponseProvideDefaults(val: AuthConfigResponse): AuthConfigResponse {
        return {
            ...val,
            passwordAuthEnabled: (val.passwordAuthEnabled) ?? true,
            tenantId: (val.tenantId) ?? "",
        };
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
     * backupResponseProvideDefaults sets the appropriate defaults for BackupResponse
     */
    export function backupResponseProvideDefaults(val: BackupResponse): BackupResponse {
        return {
            ...val,
            backupRetentionDays: (val.backupRetentionDays) ?? 7,
            geoRedundantBackup: (val.geoRedundantBackup) ?? "Disabled",
        };
    }

    /**
     * Data encryption properties of a server
     */
    export interface DataEncryptionResponse {
        /**
         * URI for the key for data encryption for primary server.
         */
        primaryKeyURI?: string;
        /**
         * Resource Id for the User assigned identity to be used for data encryption for primary server.
         */
        primaryUserAssignedIdentityId?: string;
        /**
         * Data encryption type to depict if it is System assigned vs Azure Key vault.
         */
        type?: string;
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
     * highAvailabilityResponseProvideDefaults sets the appropriate defaults for HighAvailabilityResponse
     */
    export function highAvailabilityResponseProvideDefaults(val: HighAvailabilityResponse): HighAvailabilityResponse {
        return {
            ...val,
            mode: (val.mode) ?? "Disabled",
            standbyAvailabilityZone: (val.standbyAvailabilityZone) ?? "",
        };
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
     * maintenanceWindowResponseProvideDefaults sets the appropriate defaults for MaintenanceWindowResponse
     */
    export function maintenanceWindowResponseProvideDefaults(val: MaintenanceWindowResponse): MaintenanceWindowResponse {
        return {
            ...val,
            customWindow: (val.customWindow) ?? "Disabled",
            dayOfWeek: (val.dayOfWeek) ?? 0,
            startHour: (val.startHour) ?? 0,
            startMinute: (val.startMinute) ?? 0,
        };
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
     * networkResponseProvideDefaults sets the appropriate defaults for NetworkResponse
     */
    export function networkResponseProvideDefaults(val: NetworkResponse): NetworkResponse {
        return {
            ...val,
            delegatedSubnetResourceId: (val.delegatedSubnetResourceId) ?? "",
            privateDnsZoneArmResourceId: (val.privateDnsZoneArmResourceId) ?? "",
        };
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

    /**
     * Information describing the identities associated with this application.
     */
    export interface UserAssignedIdentityResponse {
        /**
         * the types of identities associated with this resource; currently restricted to 'SystemAssigned and UserAssigned'
         */
        type: string;
        /**
         * represents user assigned identities map.
         */
        userAssignedIdentities?: {[key: string]: UserIdentityResponse};
    }

    /**
     * Describes a single user-assigned identity associated with the application.
     */
    export interface UserIdentityResponse {
        /**
         * the client identifier of the Service Principal which this identity represents.
         */
        clientId?: string;
        /**
         * the object identifier of the Service Principal which this identity represents.
         */
        principalId?: string;
    }
