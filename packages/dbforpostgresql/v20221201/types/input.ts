import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Authentication configuration properties of a server
     */
    export interface AuthConfigArgs {
        /**
         * If Enabled, Azure Active Directory authentication is enabled.
         */
        activeDirectoryAuth?: pulumi.Input<string | enums.ActiveDirectoryAuthEnum>;
        /**
         * If Enabled, Password authentication is enabled.
         */
        passwordAuth?: pulumi.Input<string | enums.PasswordAuthEnum>;
        /**
         * Tenant id of the server.
         */
        tenantId?: pulumi.Input<string>;
    }
    /**
     * authConfigArgsProvideDefaults sets the appropriate defaults for AuthConfigArgs
     */
    export function authConfigArgsProvideDefaults(val: AuthConfigArgs): AuthConfigArgs {
        return {
            ...val,
            passwordAuth: (val.passwordAuth) ?? "Enabled",
            tenantId: (val.tenantId) ?? "",
        };
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
     * backupArgsProvideDefaults sets the appropriate defaults for BackupArgs
     */
    export function backupArgsProvideDefaults(val: BackupArgs): BackupArgs {
        return {
            ...val,
            backupRetentionDays: (val.backupRetentionDays) ?? 7,
            geoRedundantBackup: (val.geoRedundantBackup) ?? "Disabled",
        };
    }

    /**
     * Data encryption properties of a server
     */
    export interface DataEncryptionArgs {
        /**
         * URI for the key for data encryption for primary server.
         */
        primaryKeyURI?: pulumi.Input<string>;
        /**
         * Resource Id for the User assigned identity to be used for data encryption for primary server.
         */
        primaryUserAssignedIdentityId?: pulumi.Input<string>;
        /**
         * Data encryption type to depict if it is System Managed vs Azure Key vault.
         */
        type?: pulumi.Input<string | enums.ArmServerKeyType>;
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
     * highAvailabilityArgsProvideDefaults sets the appropriate defaults for HighAvailabilityArgs
     */
    export function highAvailabilityArgsProvideDefaults(val: HighAvailabilityArgs): HighAvailabilityArgs {
        return {
            ...val,
            mode: (val.mode) ?? "Disabled",
            standbyAvailabilityZone: (val.standbyAvailabilityZone) ?? "",
        };
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
     * maintenanceWindowArgsProvideDefaults sets the appropriate defaults for MaintenanceWindowArgs
     */
    export function maintenanceWindowArgsProvideDefaults(val: MaintenanceWindowArgs): MaintenanceWindowArgs {
        return {
            ...val,
            customWindow: (val.customWindow) ?? "Disabled",
            dayOfWeek: (val.dayOfWeek) ?? 0,
            startHour: (val.startHour) ?? 0,
            startMinute: (val.startMinute) ?? 0,
        };
    }

    /**
     * Network properties of a server.
     */
    export interface NetworkArgs {
        /**
         * Delegated subnet arm resource id. This is required to be passed during create, in case we want the server to be VNET injected, i.e. Private access server. During update, pass this only if we want to update the value for Private DNS zone.
         */
        delegatedSubnetResourceId?: pulumi.Input<string>;
        /**
         * Private dns zone arm resource id. This is required to be passed during create, in case we want the server to be VNET injected, i.e. Private access server. During update, pass this only if we want to update the value for Private DNS zone.
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

    /**
     * Information describing the identities associated with this application.
     */
    export interface UserAssignedIdentityArgs {
        /**
         * the types of identities associated with this resource; currently restricted to 'None and UserAssigned'
         */
        type: pulumi.Input<string | enums.IdentityType>;
        /**
         * represents user assigned identities map.
         */
        userAssignedIdentities?: pulumi.Input<{[key: string]: pulumi.Input<UserIdentityArgs>}>;
    }

    /**
     * Describes a single user-assigned identity associated with the application.
     */
    export interface UserIdentityArgs {
        /**
         * the client identifier of the Service Principal which this identity represents.
         */
        clientId?: pulumi.Input<string>;
        /**
         * the object identifier of the Service Principal which this identity represents.
         */
        principalId?: pulumi.Input<string>;
    }
