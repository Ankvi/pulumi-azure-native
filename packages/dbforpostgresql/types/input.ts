import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace dbforpostgresql {
    /**
     * Server admin credentials.
     */
    export interface AdminCredentialsArgs {
        /**
         * Password for source server.
         */
        sourceServerPassword: pulumi.Input<string>;
        /**
         * Password for target server.
         */
        targetServerPassword: pulumi.Input<string>;
    }

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
     * Migration secret parameters.
     */
    export interface MigrationSecretParametersArgs {
        /**
         * Admin credentials for source and target servers
         */
        adminCredentials: pulumi.Input<AdminCredentialsArgs>;
        /**
         * Gets or sets the username for the source server. This user need not be an admin.
         */
        sourceServerUsername?: pulumi.Input<string>;
        /**
         * Gets or sets the username for the target server. This user need not be an admin.
         */
        targetServerUsername?: pulumi.Input<string>;
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
     * A collection of information about the state of the connection between service consumer and provider.
     */
    export interface PrivateLinkServiceConnectionStateArgs {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: pulumi.Input<string>;
        /**
         * The reason for approval/rejection of the connection.
         */
        description?: pulumi.Input<string>;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
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

    export namespace v20171201 {
        /**
         * Azure Active Directory identity configuration for a resource.
         */
        export interface ResourceIdentityArgs {
            /**
             * The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.
             */
            type?: pulumi.Input<string | enums.v20171201.IdentityType>;
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
             * Status showing whether the server enabled infrastructure encryption.
             */
            infrastructureEncryption?: pulumi.Input<string | enums.v20171201.InfrastructureEncryption>;
            /**
             * Enforce a minimal Tls version for the server.
             */
            minimalTlsVersion?: pulumi.Input<string | enums.v20171201.MinimalTlsVersionEnum>;
            /**
             * Whether or not public network access is allowed for this server. Value is optional but if passed in, must be 'Enabled' or 'Disabled'
             */
            publicNetworkAccess?: pulumi.Input<string | enums.v20171201.PublicNetworkAccessEnum>;
            /**
             * Enable ssl enforcement or not when connect to server.
             */
            sslEnforcement?: pulumi.Input<enums.v20171201.SslEnforcementEnum>;
            /**
             * Storage profile of a server.
             */
            storageProfile?: pulumi.Input<v20171201.StorageProfileArgs>;
            /**
             * Server version.
             */
            version?: pulumi.Input<string | enums.v20171201.ServerVersion>;
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
             * Status showing whether the server enabled infrastructure encryption.
             */
            infrastructureEncryption?: pulumi.Input<string | enums.v20171201.InfrastructureEncryption>;
            /**
             * Enforce a minimal Tls version for the server.
             */
            minimalTlsVersion?: pulumi.Input<string | enums.v20171201.MinimalTlsVersionEnum>;
            /**
             * Whether or not public network access is allowed for this server. Value is optional but if passed in, must be 'Enabled' or 'Disabled'
             */
            publicNetworkAccess?: pulumi.Input<string | enums.v20171201.PublicNetworkAccessEnum>;
            /**
             * The source server id to restore from.
             */
            sourceServerId: pulumi.Input<string>;
            /**
             * Enable ssl enforcement or not when connect to server.
             */
            sslEnforcement?: pulumi.Input<enums.v20171201.SslEnforcementEnum>;
            /**
             * Storage profile of a server.
             */
            storageProfile?: pulumi.Input<v20171201.StorageProfileArgs>;
            /**
             * Server version.
             */
            version?: pulumi.Input<string | enums.v20171201.ServerVersion>;
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
             * Status showing whether the server enabled infrastructure encryption.
             */
            infrastructureEncryption?: pulumi.Input<string | enums.v20171201.InfrastructureEncryption>;
            /**
             * Enforce a minimal Tls version for the server.
             */
            minimalTlsVersion?: pulumi.Input<string | enums.v20171201.MinimalTlsVersionEnum>;
            /**
             * Whether or not public network access is allowed for this server. Value is optional but if passed in, must be 'Enabled' or 'Disabled'
             */
            publicNetworkAccess?: pulumi.Input<string | enums.v20171201.PublicNetworkAccessEnum>;
            /**
             * The master server id to create replica from.
             */
            sourceServerId: pulumi.Input<string>;
            /**
             * Enable ssl enforcement or not when connect to server.
             */
            sslEnforcement?: pulumi.Input<enums.v20171201.SslEnforcementEnum>;
            /**
             * Storage profile of a server.
             */
            storageProfile?: pulumi.Input<v20171201.StorageProfileArgs>;
            /**
             * Server version.
             */
            version?: pulumi.Input<string | enums.v20171201.ServerVersion>;
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
             * Status showing whether the server enabled infrastructure encryption.
             */
            infrastructureEncryption?: pulumi.Input<string | enums.v20171201.InfrastructureEncryption>;
            /**
             * Enforce a minimal Tls version for the server.
             */
            minimalTlsVersion?: pulumi.Input<string | enums.v20171201.MinimalTlsVersionEnum>;
            /**
             * Whether or not public network access is allowed for this server. Value is optional but if passed in, must be 'Enabled' or 'Disabled'
             */
            publicNetworkAccess?: pulumi.Input<string | enums.v20171201.PublicNetworkAccessEnum>;
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
            sslEnforcement?: pulumi.Input<enums.v20171201.SslEnforcementEnum>;
            /**
             * Storage profile of a server.
             */
            storageProfile?: pulumi.Input<v20171201.StorageProfileArgs>;
            /**
             * Server version.
             */
            version?: pulumi.Input<string | enums.v20171201.ServerVersion>;
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
            tier?: pulumi.Input<string | enums.v20171201.SkuTier>;
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
            geoRedundantBackup?: pulumi.Input<string | enums.v20171201.GeoRedundantBackup>;
            /**
             * Enable Storage Auto Grow.
             */
            storageAutogrow?: pulumi.Input<string | enums.v20171201.StorageAutogrow>;
            /**
             * Max storage allowed for a server.
             */
            storageMB?: pulumi.Input<number>;
        }

    }

    export namespace v20171201preview {
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
            minimalTlsVersion?: pulumi.Input<string | enums.v20171201preview.MinimalTlsVersionEnum>;
            /**
             * Enable ssl enforcement or not when connect to server.
             */
            sslEnforcement?: pulumi.Input<enums.v20171201preview.SslEnforcementEnum>;
            /**
             * Storage profile of a server.
             */
            storageProfile?: pulumi.Input<v20171201preview.StorageProfileArgs>;
            /**
             * Server version.
             */
            version?: pulumi.Input<string | enums.v20171201preview.ServerVersion>;
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
            minimalTlsVersion?: pulumi.Input<string | enums.v20171201preview.MinimalTlsVersionEnum>;
            /**
             * The source server id to restore from.
             */
            sourceServerId: pulumi.Input<string>;
            /**
             * Enable ssl enforcement or not when connect to server.
             */
            sslEnforcement?: pulumi.Input<enums.v20171201preview.SslEnforcementEnum>;
            /**
             * Storage profile of a server.
             */
            storageProfile?: pulumi.Input<v20171201preview.StorageProfileArgs>;
            /**
             * Server version.
             */
            version?: pulumi.Input<string | enums.v20171201preview.ServerVersion>;
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
            minimalTlsVersion?: pulumi.Input<string | enums.v20171201preview.MinimalTlsVersionEnum>;
            /**
             * The master server id to create replica from.
             */
            sourceServerId: pulumi.Input<string>;
            /**
             * Enable ssl enforcement or not when connect to server.
             */
            sslEnforcement?: pulumi.Input<enums.v20171201preview.SslEnforcementEnum>;
            /**
             * Storage profile of a server.
             */
            storageProfile?: pulumi.Input<v20171201preview.StorageProfileArgs>;
            /**
             * Server version.
             */
            version?: pulumi.Input<string | enums.v20171201preview.ServerVersion>;
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
            minimalTlsVersion?: pulumi.Input<string | enums.v20171201preview.MinimalTlsVersionEnum>;
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
            sslEnforcement?: pulumi.Input<enums.v20171201preview.SslEnforcementEnum>;
            /**
             * Storage profile of a server.
             */
            storageProfile?: pulumi.Input<v20171201preview.StorageProfileArgs>;
            /**
             * Server version.
             */
            version?: pulumi.Input<string | enums.v20171201preview.ServerVersion>;
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
            tier?: pulumi.Input<string | enums.v20171201preview.SkuTier>;
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
            geoRedundantBackup?: pulumi.Input<string | enums.v20171201preview.GeoRedundantBackup>;
            /**
             * Enable Storage Auto Grow.
             */
            storageAutogrow?: pulumi.Input<string | enums.v20171201preview.StorageAutogrow>;
            /**
             * Max storage allowed for a server.
             */
            storageMB?: pulumi.Input<number>;
        }

    }

    export namespace v20180601privatepreview {
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

    }

    export namespace v20200214preview {
        /**
         * Identity for the resource.
         */
        export interface IdentityArgs {
            /**
             * The identity type.
             */
            type?: pulumi.Input<enums.v20200214preview.ResourceIdentityType>;
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
            tier: pulumi.Input<string | enums.v20200214preview.SkuTier>;
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
             * A value indicating whether Geo-Redundant backup is enabled on the server.
             */
            geoRedundantBackup?: pulumi.Input<string | enums.v20200214preview.GeoRedundantBackupEnum>;
            /**
             * Max storage allowed for a server.
             */
            storageMB?: pulumi.Input<number>;
        }

    }

    export namespace v20201005privatepreview {
        /**
         * Maintenance window of a server group.
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
         * The delegated subnet arguments for a server group.
         */
        export interface ServerGroupPropertiesDelegatedSubnetArgumentsArgs {
            /**
             * delegated subnet arm resource id.
             */
            subnetArmResourceId?: pulumi.Input<string>;
        }

        /**
         * The private dns zone arguments for a server group.
         */
        export interface ServerGroupPropertiesPrivateDnsZoneArgumentsArgs {
            /**
             * private dns zone arm resource id.
             */
            privateDnsZoneArmResourceId?: pulumi.Input<string>;
        }

        /**
         * Represents a server role group.
         */
        export interface ServerRoleGroupArgs {
            /**
             * If high availability is enabled or not for the server.
             */
            enableHa?: pulumi.Input<boolean>;
            /**
             * The name of the server role group.
             */
            name?: pulumi.Input<string>;
            /**
             * The role of servers in the server role group.
             */
            role?: pulumi.Input<string | enums.v20201005privatepreview.ServerRole>;
            /**
             * The number of servers in the server role group.
             */
            serverCount?: pulumi.Input<number>;
            /**
             * The edition of a server (default: GeneralPurpose).
             */
            serverEdition?: pulumi.Input<string | enums.v20201005privatepreview.ServerEdition>;
            /**
             * The storage of a server in MB (max: 2097152 = 2TiB).
             */
            storageQuotaInMb?: pulumi.Input<number>;
            /**
             * The vCores count of a server (max: 64).
             */
            vCores?: pulumi.Input<number>;
        }

    }

    export namespace v20210410privatepreview {
        /**
         * Identity for the resource.
         */
        export interface IdentityArgs {
            /**
             * The identity type.
             */
            type?: pulumi.Input<enums.v20210410privatepreview.ResourceIdentityType>;
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
            tier: pulumi.Input<string | enums.v20210410privatepreview.SkuTier>;
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
            geoRedundantBackup?: pulumi.Input<string | enums.v20210410privatepreview.GeoRedundantBackupOption>;
            /**
             * Max storage allowed for a server.
             */
            storageMB?: pulumi.Input<number>;
        }

    }

    export namespace v20210615privatepreview {
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
            geoRedundantBackup?: pulumi.Input<string | enums.v20210615privatepreview.GeoRedundantBackupEnum>;
        }

        /**
         * High availability properties of a server
         */
        export interface HighAvailabilityArgs {
            /**
             * The HA mode for the server.
             */
            mode?: pulumi.Input<string | enums.v20210615privatepreview.HighAvailabilityMode>;
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
            type?: pulumi.Input<enums.v20210615privatepreview.ResourceIdentityType>;
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
            aadApp: pulumi.Input<v20210615privatepreview.AADAppArgs>;
            /**
             * Server admin credentials.
             */
            adminCredentials: pulumi.Input<v20210615privatepreview.AdminCredentialsArgs>;
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
            tier: pulumi.Input<string | enums.v20210615privatepreview.SkuTier>;
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

    }

    export namespace v20220308preview {
        /**
         * Authentication configuration properties of a server
         */
        export interface AuthConfigArgs {
            /**
             * If true, Azure Active Directory authentication is enabled.
             */
            activeDirectoryAuthEnabled?: pulumi.Input<boolean>;
            /**
             * If true, Password authentication is enabled.
             */
            passwordAuthEnabled?: pulumi.Input<boolean>;
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
                passwordAuthEnabled: (val.passwordAuthEnabled) ?? true,
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
            geoRedundantBackup?: pulumi.Input<string | enums.v20220308preview.GeoRedundantBackupEnum>;
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
             * Data encryption type to depict if it is System assigned vs Azure Key vault.
             */
            type?: pulumi.Input<string | enums.v20220308preview.ArmServerKeyType>;
        }

        /**
         * High availability properties of a server
         */
        export interface HighAvailabilityArgs {
            /**
             * The HA mode for the server.
             */
            mode?: pulumi.Input<string | enums.v20220308preview.HighAvailabilityMode>;
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
         * networkArgsProvideDefaults sets the appropriate defaults for NetworkArgs
         */
        export function networkArgsProvideDefaults(val: NetworkArgs): NetworkArgs {
            return {
                ...val,
                delegatedSubnetResourceId: (val.delegatedSubnetResourceId) ?? "",
                privateDnsZoneArmResourceId: (val.privateDnsZoneArmResourceId) ?? "",
            };
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
            tier: pulumi.Input<string | enums.v20220308preview.SkuTier>;
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
             * the types of identities associated with this resource; currently restricted to 'SystemAssigned and UserAssigned'
             */
            type: pulumi.Input<string | enums.v20220308preview.IdentityType>;
            /**
             * represents user assigned identities map.
             */
            userAssignedIdentities?: pulumi.Input<{[key: string]: pulumi.Input<v20220308preview.UserIdentityArgs>}>;
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

    }

    export namespace v20220308privatepreview {
        /**
         * Sku information related properties of a server.
         */
        export interface Sku {
            /**
             * The name of the sku, typically, tier + family + cores, e.g. Standard_D4s_v3.
             */
            name: string;
            /**
             * The tier of the particular SKU, e.g. Burstable.
             */
            tier: string | enums.v20220308privatepreview.SkuTier;
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
            tier: pulumi.Input<string | enums.v20220308privatepreview.SkuTier>;
        }

        /**
         * Storage properties of a server
         */
        export interface Storage {
            /**
             * Max storage allowed for a server.
             */
            storageSizeGB?: number;
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
    }

    export namespace v20220501preview {
        /**
         * Server admin credentials.
         */
        export interface AdminCredentialsArgs {
            sourceServerPassword: pulumi.Input<string>;
            targetServerPassword: pulumi.Input<string>;
        }

        /**
         * Migration secret parameters.
         */
        export interface MigrationSecretParametersArgs {
            /**
             * Server admin credentials.
             */
            adminCredentials: pulumi.Input<v20220501preview.AdminCredentialsArgs>;
        }

    }

    export namespace v20221108 {
        /**
         * Schedule settings for regular cluster updates.
         */
        export interface MaintenanceWindowArgs {
            /**
             * Indicates whether custom maintenance window is enabled or not.
             */
            customWindow?: pulumi.Input<string>;
            /**
             * Preferred day of the week for maintenance window.
             */
            dayOfWeek?: pulumi.Input<number>;
            /**
             * Start hour within preferred day of the week for maintenance window.
             */
            startHour?: pulumi.Input<number>;
            /**
             * Start minute within the start hour for maintenance window.
             */
            startMinute?: pulumi.Input<number>;
        }

        /**
         * A collection of information about the state of the connection between service consumer and provider.
         */
        export interface PrivateLinkServiceConnectionStateArgs {
            /**
             * A message indicating if changes on the service provider require any updates on the consumer.
             */
            actionsRequired?: pulumi.Input<string>;
            /**
             * The reason for approval/rejection of the connection.
             */
            description?: pulumi.Input<string>;
            /**
             * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
             */
            status?: pulumi.Input<string | enums.v20221108.PrivateEndpointServiceConnectionStatus>;
        }

    }

    export namespace v20221201 {
        /**
         * Authentication configuration properties of a server
         */
        export interface AuthConfigArgs {
            /**
             * If Enabled, Azure Active Directory authentication is enabled.
             */
            activeDirectoryAuth?: pulumi.Input<string | enums.v20221201.ActiveDirectoryAuthEnum>;
            /**
             * If Enabled, Password authentication is enabled.
             */
            passwordAuth?: pulumi.Input<string | enums.v20221201.PasswordAuthEnum>;
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
            geoRedundantBackup?: pulumi.Input<string | enums.v20221201.GeoRedundantBackupEnum>;
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
            type?: pulumi.Input<string | enums.v20221201.ArmServerKeyType>;
        }

        /**
         * High availability properties of a server
         */
        export interface HighAvailabilityArgs {
            /**
             * The HA mode for the server.
             */
            mode?: pulumi.Input<string | enums.v20221201.HighAvailabilityMode>;
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
            tier: pulumi.Input<string | enums.v20221201.SkuTier>;
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
            type: pulumi.Input<string | enums.v20221201.IdentityType>;
            /**
             * represents user assigned identities map.
             */
            userAssignedIdentities?: pulumi.Input<{[key: string]: pulumi.Input<v20221201.UserIdentityArgs>}>;
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

    }

    export namespace v20230301preview {
        /**
         * Server admin credentials.
         */
        export interface AdminCredentialsArgs {
            /**
             * Password for source server.
             */
            sourceServerPassword: pulumi.Input<string>;
            /**
             * Password for target server.
             */
            targetServerPassword: pulumi.Input<string>;
        }

        /**
         * Authentication configuration properties of a server
         */
        export interface AuthConfigArgs {
            /**
             * If Enabled, Azure Active Directory authentication is enabled.
             */
            activeDirectoryAuth?: pulumi.Input<string | enums.v20230301preview.ActiveDirectoryAuthEnum>;
            /**
             * If Enabled, Password authentication is enabled.
             */
            passwordAuth?: pulumi.Input<string | enums.v20230301preview.PasswordAuthEnum>;
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
            geoRedundantBackup?: pulumi.Input<string | enums.v20230301preview.GeoRedundantBackupEnum>;
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
             * Geo-backup encryption key status for Data encryption enabled server.
             */
            geoBackupEncryptionKeyStatus?: pulumi.Input<string | enums.v20230301preview.KeyStatusEnum>;
            /**
             * URI for the key in keyvault for data encryption for geo-backup of server.
             */
            geoBackupKeyURI?: pulumi.Input<string>;
            /**
             * Resource Id for the User assigned identity to be used for data encryption for geo-backup of server.
             */
            geoBackupUserAssignedIdentityId?: pulumi.Input<string>;
            /**
             * Primary encryption key status for Data encryption enabled server.
             */
            primaryEncryptionKeyStatus?: pulumi.Input<string | enums.v20230301preview.KeyStatusEnum>;
            /**
             * URI for the key in keyvault for data encryption of the primary server.
             */
            primaryKeyURI?: pulumi.Input<string>;
            /**
             * Resource Id for the User assigned identity to be used for data encryption of the primary server.
             */
            primaryUserAssignedIdentityId?: pulumi.Input<string>;
            /**
             * Data encryption type to depict if it is System Managed vs Azure Key vault.
             */
            type?: pulumi.Input<string | enums.v20230301preview.ArmServerKeyType>;
        }

        /**
         * High availability properties of a server
         */
        export interface HighAvailabilityArgs {
            /**
             * The HA mode for the server.
             */
            mode?: pulumi.Input<string | enums.v20230301preview.HighAvailabilityMode>;
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
         * Migration secret parameters.
         */
        export interface MigrationSecretParametersArgs {
            /**
             * Admin credentials for source and target servers
             */
            adminCredentials: pulumi.Input<v20230301preview.AdminCredentialsArgs>;
            /**
             * Gets or sets the username for the source server. This user need not be an admin.
             */
            sourceServerUsername?: pulumi.Input<string>;
            /**
             * Gets or sets the username for the target server. This user need not be an admin.
             */
            targetServerUsername?: pulumi.Input<string>;
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
            tier: pulumi.Input<string | enums.v20230301preview.SkuTier>;
        }

        /**
         * Storage properties of a server
         */
        export interface StorageArgs {
            /**
             * Flag to enable / disable Storage Auto grow for flexible server.
             */
            autoGrow?: pulumi.Input<string | enums.v20230301preview.StorageAutoGrow>;
            /**
             * Max storage allowed for a server.
             */
            storageSizeGB?: pulumi.Input<number>;
            /**
             * Name of storage tier for IOPS.
             */
            tier?: pulumi.Input<string | enums.v20230301preview.AzureManagedDiskPerformanceTiers>;
        }

        /**
         * Information describing the identities associated with this application.
         */
        export interface UserAssignedIdentityArgs {
            /**
             * the types of identities associated with this resource; currently restricted to 'None and UserAssigned'
             */
            type: pulumi.Input<string | enums.v20230301preview.IdentityType>;
            /**
             * represents user assigned identities map.
             */
            userAssignedIdentities?: pulumi.Input<{[key: string]: pulumi.Input<v20230301preview.UserIdentityArgs>}>;
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

    }
}
