import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace dbformysql {
    /**
     * Storage Profile properties of a server
     */
    export interface BackupArgs {
        /**
         * Backup retention days for the server.
         */
        backupRetentionDays?: pulumi.Input<number>;
        /**
         * Whether or not geo redundant backup is enabled.
         */
        geoRedundantBackup?: pulumi.Input<string | enums.EnableStatusEnum>;
    }
    /**
     * backupArgsProvideDefaults sets the appropriate defaults for BackupArgs
     */
    export function backupArgsProvideDefaults(val: BackupArgs): BackupArgs {
        return {
            ...val,
            geoRedundantBackup: (val.geoRedundantBackup) ?? "Disabled",
        };
    }

    /**
     * The date encryption for cmk.
     */
    export interface DataEncryptionArgs {
        /**
         * Geo backup key uri as key vault can't cross region, need cmk in same region as geo backup
         */
        geoBackupKeyURI?: pulumi.Input<string>;
        /**
         * Geo backup user identity resource id as identity can't cross region, need identity in same region as geo backup
         */
        geoBackupUserAssignedIdentityId?: pulumi.Input<string>;
        /**
         * Primary key uri
         */
        primaryKeyURI?: pulumi.Input<string>;
        /**
         * Primary user identity resource id
         */
        primaryUserAssignedIdentityId?: pulumi.Input<string>;
        /**
         * The key type, AzureKeyVault for enable cmk, SystemManaged for disable cmk.
         */
        type?: pulumi.Input<enums.DataEncryptionType>;
    }

    /**
     * Network related properties of a server
     */
    export interface HighAvailabilityArgs {
        /**
         * High availability mode for a server.
         */
        mode?: pulumi.Input<string | enums.HighAvailabilityMode>;
        /**
         * Availability zone of the standby server.
         */
        standbyAvailabilityZone?: pulumi.Input<string>;
    }

    /**
     * Properties to configure Identity for Bring your Own Keys
     */
    export interface IdentityArgs {
        /**
         * Type of managed service identity.
         */
        type?: pulumi.Input<enums.ManagedServiceIdentityType>;
        /**
         * Metadata of user assigned identity.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
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
     * Network related properties of a server
     */
    export interface NetworkArgs {
        /**
         * Delegated subnet resource id used to setup vnet for a server.
         */
        delegatedSubnetResourceId?: pulumi.Input<string>;
        /**
         * Private DNS zone resource id.
         */
        privateDnsZoneResourceId?: pulumi.Input<string>;
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
    export interface StorageArgs {
        /**
         * Enable Storage Auto Grow or not.
         */
        autoGrow?: pulumi.Input<string | enums.EnableStatusEnum>;
        /**
         * Enable IO Auto Scaling or not.
         */
        autoIoScaling?: pulumi.Input<string | enums.EnableStatusEnum>;
        /**
         * Storage IOPS for a server.
         */
        iops?: pulumi.Input<number>;
        /**
         * Enable Log On Disk or not.
         */
        logOnDisk?: pulumi.Input<string | enums.EnableStatusEnum>;
        /**
         * Max storage size allowed for a server.
         */
        storageSizeGB?: pulumi.Input<number>;
    }
    /**
     * storageArgsProvideDefaults sets the appropriate defaults for StorageArgs
     */
    export function storageArgsProvideDefaults(val: StorageArgs): StorageArgs {
        return {
            ...val,
            autoGrow: (val.autoGrow) ?? "Disabled",
            autoIoScaling: (val.autoIoScaling) ?? "Disabled",
            logOnDisk: (val.logOnDisk) ?? "Disabled",
        };
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
             * The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation). The login name is required when updating password.
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
            sslEnforcement?: pulumi.Input<enums.v20180601privatepreview.SslEnforcementEnum>;
            /**
             * Storage profile of a server.
             */
            storageProfile?: pulumi.Input<v20180601privatepreview.StorageProfileArgs>;
            /**
             * Server version.
             */
            version?: pulumi.Input<string | enums.v20180601privatepreview.ServerVersion>;
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
            sslEnforcement?: pulumi.Input<enums.v20180601privatepreview.SslEnforcementEnum>;
            /**
             * Storage profile of a server.
             */
            storageProfile?: pulumi.Input<v20180601privatepreview.StorageProfileArgs>;
            /**
             * Server version.
             */
            version?: pulumi.Input<string | enums.v20180601privatepreview.ServerVersion>;
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
            sslEnforcement?: pulumi.Input<enums.v20180601privatepreview.SslEnforcementEnum>;
            /**
             * Storage profile of a server.
             */
            storageProfile?: pulumi.Input<v20180601privatepreview.StorageProfileArgs>;
            /**
             * Server version.
             */
            version?: pulumi.Input<string | enums.v20180601privatepreview.ServerVersion>;
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
            sslEnforcement?: pulumi.Input<enums.v20180601privatepreview.SslEnforcementEnum>;
            /**
             * Storage profile of a server.
             */
            storageProfile?: pulumi.Input<v20180601privatepreview.StorageProfileArgs>;
            /**
             * Server version.
             */
            version?: pulumi.Input<string | enums.v20180601privatepreview.ServerVersion>;
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
            tier?: pulumi.Input<string | enums.v20180601privatepreview.SkuTier>;
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
            geoRedundantBackup?: pulumi.Input<string | enums.v20180601privatepreview.GeoRedundantBackup>;
            /**
             * Enable Storage Auto Grow.
             */
            storageAutogrow?: pulumi.Input<string | enums.v20180601privatepreview.StorageAutogrow>;
            /**
             * Max storage allowed for a server.
             */
            storageMB?: pulumi.Input<number>;
        }

    }

    export namespace v20200701preview {
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
            type?: pulumi.Input<enums.v20200701preview.ResourceIdentityType>;
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
         * Private DNS zone arguments of a server
         */
        export interface PrivateDnsZoneArgumentsArgs {
            /**
             * private dns zone arm resource id.
             */
            privateDnsZoneArmResourceId?: pulumi.Input<string>;
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
            tier: pulumi.Input<string | enums.v20200701preview.SkuTier>;
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
            storageAutogrow?: pulumi.Input<string | enums.v20200701preview.StorageAutogrow>;
            /**
             * Storage IOPS for a server.
             */
            storageIops?: pulumi.Input<number>;
            /**
             * Max storage allowed for a server.
             */
            storageMB?: pulumi.Input<number>;
        }

    }

    export namespace v20200701privatepreview {
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
            type?: pulumi.Input<enums.v20200701privatepreview.ResourceIdentityType>;
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
            tier: pulumi.Input<string | enums.v20200701privatepreview.SkuTier>;
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
            storageAutogrow?: pulumi.Input<string | enums.v20200701privatepreview.StorageAutogrow>;
            /**
             * Storage IOPS for a server.
             */
            storageIops?: pulumi.Input<number>;
            /**
             * Max storage allowed for a server.
             */
            storageMB?: pulumi.Input<number>;
        }

    }

    export namespace v20220101 {
        /**
         * Storage Profile properties of a server
         */
        export interface BackupArgs {
            /**
             * Backup retention days for the server.
             */
            backupRetentionDays?: pulumi.Input<number>;
            /**
             * Whether or not geo redundant backup is enabled.
             */
            geoRedundantBackup?: pulumi.Input<string | enums.v20220101.EnableStatusEnum>;
        }
        /**
         * backupArgsProvideDefaults sets the appropriate defaults for BackupArgs
         */
        export function backupArgsProvideDefaults(val: BackupArgs): BackupArgs {
            return {
                ...val,
                geoRedundantBackup: (val.geoRedundantBackup) ?? "Disabled",
            };
        }

        /**
         * The date encryption for cmk.
         */
        export interface DataEncryptionArgs {
            /**
             * Geo backup key uri as key vault can't cross region, need cmk in same region as geo backup
             */
            geoBackupKeyURI?: pulumi.Input<string>;
            /**
             * Geo backup user identity resource id as identity can't cross region, need identity in same region as geo backup
             */
            geoBackupUserAssignedIdentityId?: pulumi.Input<string>;
            /**
             * Primary key uri
             */
            primaryKeyURI?: pulumi.Input<string>;
            /**
             * Primary user identity resource id
             */
            primaryUserAssignedIdentityId?: pulumi.Input<string>;
            /**
             * The key type, AzureKeyVault for enable cmk, SystemManaged for disable cmk.
             */
            type?: pulumi.Input<enums.v20220101.DataEncryptionType>;
        }

        /**
         * Network related properties of a server
         */
        export interface HighAvailabilityArgs {
            /**
             * High availability mode for a server.
             */
            mode?: pulumi.Input<string | enums.v20220101.HighAvailabilityMode>;
            /**
             * Availability zone of the standby server.
             */
            standbyAvailabilityZone?: pulumi.Input<string>;
        }

        /**
         * Properties to configure Identity for Bring your Own Keys
         */
        export interface IdentityArgs {
            /**
             * Type of managed service identity.
             */
            type?: pulumi.Input<enums.v20220101.ManagedServiceIdentityType>;
            /**
             * Metadata of user assigned identity.
             */
            userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
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
         * Network related properties of a server
         */
        export interface NetworkArgs {
            /**
             * Delegated subnet resource id used to setup vnet for a server.
             */
            delegatedSubnetResourceId?: pulumi.Input<string>;
            /**
             * Private DNS zone resource id.
             */
            privateDnsZoneResourceId?: pulumi.Input<string>;
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
            tier: pulumi.Input<string | enums.v20220101.SkuTier>;
        }

        /**
         * Storage Profile properties of a server
         */
        export interface StorageArgs {
            /**
             * Enable Storage Auto Grow or not.
             */
            autoGrow?: pulumi.Input<string | enums.v20220101.EnableStatusEnum>;
            /**
             * Enable IO Auto Scaling or not.
             */
            autoIoScaling?: pulumi.Input<string | enums.v20220101.EnableStatusEnum>;
            /**
             * Storage IOPS for a server.
             */
            iops?: pulumi.Input<number>;
            /**
             * Enable Log On Disk or not.
             */
            logOnDisk?: pulumi.Input<string | enums.v20220101.EnableStatusEnum>;
            /**
             * Max storage size allowed for a server.
             */
            storageSizeGB?: pulumi.Input<number>;
        }
        /**
         * storageArgsProvideDefaults sets the appropriate defaults for StorageArgs
         */
        export function storageArgsProvideDefaults(val: StorageArgs): StorageArgs {
            return {
                ...val,
                autoGrow: (val.autoGrow) ?? "Disabled",
                autoIoScaling: (val.autoIoScaling) ?? "Disabled",
                logOnDisk: (val.logOnDisk) ?? "Disabled",
            };
        }

    }

    export namespace v20220930preview {
        /**
         * Storage Profile properties of a server
         */
        export interface BackupArgs {
            /**
             * Backup retention days for the server.
             */
            backupRetentionDays?: pulumi.Input<number>;
            /**
             * Whether or not geo redundant backup is enabled.
             */
            geoRedundantBackup?: pulumi.Input<string | enums.v20220930preview.EnableStatusEnum>;
        }
        /**
         * backupArgsProvideDefaults sets the appropriate defaults for BackupArgs
         */
        export function backupArgsProvideDefaults(val: BackupArgs): BackupArgs {
            return {
                ...val,
                geoRedundantBackup: (val.geoRedundantBackup) ?? "Disabled",
            };
        }

        /**
         * The date encryption for cmk.
         */
        export interface DataEncryptionArgs {
            /**
             * Geo backup key uri as key vault can't cross region, need cmk in same region as geo backup
             */
            geoBackupKeyURI?: pulumi.Input<string>;
            /**
             * Geo backup user identity resource id as identity can't cross region, need identity in same region as geo backup
             */
            geoBackupUserAssignedIdentityId?: pulumi.Input<string>;
            /**
             * Primary key uri
             */
            primaryKeyURI?: pulumi.Input<string>;
            /**
             * Primary user identity resource id
             */
            primaryUserAssignedIdentityId?: pulumi.Input<string>;
            /**
             * The key type, AzureKeyVault for enable cmk, SystemManaged for disable cmk.
             */
            type?: pulumi.Input<enums.v20220930preview.DataEncryptionType>;
        }

        /**
         * Network related properties of a server
         */
        export interface HighAvailabilityArgs {
            /**
             * High availability mode for a server.
             */
            mode?: pulumi.Input<string | enums.v20220930preview.HighAvailabilityMode>;
            /**
             * Availability zone of the standby server.
             */
            standbyAvailabilityZone?: pulumi.Input<string>;
        }

        /**
         * Properties to configure Identity for Bring your Own Keys
         */
        export interface IdentityArgs {
            /**
             * Type of managed service identity.
             */
            type?: pulumi.Input<string | enums.v20220930preview.ManagedServiceIdentityType>;
            /**
             * Metadata of user assigned identity.
             */
            userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
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
         * Network related properties of a server
         */
        export interface NetworkArgs {
            /**
             * Delegated subnet resource id used to setup vnet for a server.
             */
            delegatedSubnetResourceId?: pulumi.Input<string>;
            /**
             * Private DNS zone resource id.
             */
            privateDnsZoneResourceId?: pulumi.Input<string>;
            /**
             * Whether or not public network access is allowed for this server. Value is 'Disabled' when server has VNet integration.
             */
            publicNetworkAccess?: pulumi.Input<string | enums.v20220930preview.EnableStatusEnum>;
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
            status?: pulumi.Input<string | enums.v20220930preview.PrivateEndpointServiceConnectionStatus>;
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
            tier: pulumi.Input<string | enums.v20220930preview.SkuTier>;
        }

        /**
         * Storage Profile properties of a server
         */
        export interface StorageArgs {
            /**
             * Enable Storage Auto Grow or not.
             */
            autoGrow?: pulumi.Input<string | enums.v20220930preview.EnableStatusEnum>;
            /**
             * Enable IO Auto Scaling or not.
             */
            autoIoScaling?: pulumi.Input<string | enums.v20220930preview.EnableStatusEnum>;
            /**
             * Storage IOPS for a server.
             */
            iops?: pulumi.Input<number>;
            /**
             * Enable Log On Disk or not.
             */
            logOnDisk?: pulumi.Input<string | enums.v20220930preview.EnableStatusEnum>;
            /**
             * Max storage size allowed for a server.
             */
            storageSizeGB?: pulumi.Input<number>;
        }
        /**
         * storageArgsProvideDefaults sets the appropriate defaults for StorageArgs
         */
        export function storageArgsProvideDefaults(val: StorageArgs): StorageArgs {
            return {
                ...val,
                autoGrow: (val.autoGrow) ?? "Disabled",
                autoIoScaling: (val.autoIoScaling) ?? "Disabled",
                logOnDisk: (val.logOnDisk) ?? "Disabled",
            };
        }

    }

    export namespace v20230630 {
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
            status?: pulumi.Input<string | enums.v20230630.PrivateEndpointServiceConnectionStatus>;
        }

    }
}
