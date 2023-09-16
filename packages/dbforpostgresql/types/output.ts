import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace dbforpostgresql {
    /**
     * Authentication configuration properties of a server
     */
    export interface AuthConfigResponse {
        /**
         * If Enabled, Azure Active Directory authentication is enabled.
         */
        activeDirectoryAuth?: string;
        /**
         * If Enabled, Password authentication is enabled.
         */
        passwordAuth?: string;
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
            passwordAuth: (val.passwordAuth) ?? "Enabled",
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
         * Data encryption type to depict if it is System Managed vs Azure Key vault.
         */
        type?: string;
    }

    /**
     * Database server metadata.
     */
    export interface DbServerMetadataResponse {
        /**
         * Location of database server
         */
        location: string;
        /**
         * SKU for the database server
         */
        sku?: ServerSkuResponse;
        /**
         * Storage size in MB for database server
         */
        storageMb?: number;
        /**
         * Version for database engine
         */
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
     * Migration status.
     */
    export interface MigrationStatusResponse {
        /**
         * Current Migration sub state details.
         */
        currentSubStateDetails: MigrationSubStateDetailsResponse;
        /**
         * Error message, if any, for the migration state
         */
        error: string;
        /**
         * State of migration
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
     * Network properties of a server.
     */
    export interface NetworkResponse {
        /**
         * Delegated subnet arm resource id. This is required to be passed during create, in case we want the server to be VNET injected, i.e. Private access server. During update, pass this only if we want to update the value for Private DNS zone.
         */
        delegatedSubnetResourceId?: string;
        /**
         * Private dns zone arm resource id. This is required to be passed during create, in case we want the server to be VNET injected, i.e. Private access server. During update, pass this only if we want to update the value for Private DNS zone.
         */
        privateDnsZoneArmResourceId?: string;
        /**
         * public network access is enabled or not
         */
        publicNetworkAccess: string;
    }

    /**
     * Property to represent resource id of the private endpoint.
     */
    export interface PrivateEndpointPropertyResponse {
        /**
         * Resource id of the private endpoint.
         */
        id?: string;
    }

    /**
     * The private endpoint resource.
     */
    export interface PrivateEndpointResponse {
        /**
         * The ARM identifier for private endpoint.
         */
        id: string;
    }

    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    export interface PrivateLinkServiceConnectionStateResponse {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: string;
        /**
         * The reason for approval/rejection of the connection.
         */
        description?: string;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: string;
    }

    /**
     * The name object for a server.
     */
    export interface ServerNameItemResponse {
        /**
         * The fully qualified domain name of a server.
         */
        fullyQualifiedDomainName: string;
        /**
         * The name of a server.
         */
        name?: string;
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
     * A private endpoint connection.
     */
    export interface SimplePrivateEndpointConnectionResponse {
        /**
         * Group ids of the private endpoint connection.
         */
        groupIds?: string[];
        /**
         * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
         */
        id: string;
        /**
         * The name of the resource
         */
        name: string;
        /**
         * Private endpoint which the connection belongs to.
         */
        privateEndpoint?: PrivateEndpointPropertyResponse;
        /**
         * A collection of information about the state of the connection between service consumer and provider.
         */
        privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateResponse;
        /**
         * Azure Resource Manager metadata containing createdBy and modifiedBy information.
         */
        systemData: SystemDataResponse;
        /**
         * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
         */
        type: string;
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
         * Tenant id of the server.
         */
        tenantId: string;
        /**
         * the types of identities associated with this resource; currently restricted to 'None and UserAssigned'
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

    export namespace v20171201 {
        export interface PrivateEndpointPropertyResponse {
            /**
             * Resource id of the private endpoint.
             */
            id?: string;
        }

        /**
         * Azure Active Directory identity configuration for a resource.
         */
        export interface ResourceIdentityResponse {
            /**
             * The Azure Active Directory principal id.
             */
            principalId: string;
            /**
             * The Azure Active Directory tenant id.
             */
            tenantId: string;
            /**
             * The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.
             */
            type?: string;
        }

        /**
         * Properties of a private endpoint connection.
         */
        export interface ServerPrivateEndpointConnectionPropertiesResponse {
            /**
             * Private endpoint which the connection belongs to.
             */
            privateEndpoint?: v20171201.PrivateEndpointPropertyResponse;
            /**
             * Connection state of the private endpoint connection.
             */
            privateLinkServiceConnectionState?: v20171201.ServerPrivateLinkServiceConnectionStatePropertyResponse;
            /**
             * State of the private endpoint connection.
             */
            provisioningState: string;
        }

        /**
         * A private endpoint connection under a server
         */
        export interface ServerPrivateEndpointConnectionResponse {
            /**
             * Resource ID of the Private Endpoint Connection.
             */
            id: string;
            /**
             * Private endpoint connection properties
             */
            properties: v20171201.ServerPrivateEndpointConnectionPropertiesResponse;
        }

        export interface ServerPrivateLinkServiceConnectionStatePropertyResponse {
            /**
             * The actions required for private link service connection.
             */
            actionsRequired: string;
            /**
             * The private link service connection description.
             */
            description: string;
            /**
             * The private link service connection status.
             */
            status: string;
        }

        /**
         * Billing information related properties of a server.
         */
        export interface SkuResponse {
            /**
             * The scale up/out capacity, representing server's compute units.
             */
            capacity?: number;
            /**
             * The family of hardware.
             */
            family?: string;
            /**
             * The name of the sku, typically, tier + family + cores, e.g. B_Gen4_1, GP_Gen5_8.
             */
            name: string;
            /**
             * The size code, to be interpreted by resource as appropriate.
             */
            size?: string;
            /**
             * The tier of the particular SKU, e.g. Basic.
             */
            tier?: string;
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
             * Enable Geo-redundant or not for server backup.
             */
            geoRedundantBackup?: string;
            /**
             * Enable Storage Auto Grow.
             */
            storageAutogrow?: string;
            /**
             * Max storage allowed for a server.
             */
            storageMB?: number;
        }

    }

    export namespace v20171201preview {
        /**
         * Properties of a private endpoint connection.
         */
        export interface PrivateEndpointConnectionPropertiesResponse {
            /**
             * Private endpoint which the connection belongs to.
             */
            privateEndpoint?: v20171201preview.PrivateEndpointPropertyResponse;
            /**
             * Connection state of the private endpoint connection.
             */
            privateLinkServiceConnectionState?: v20171201preview.PrivateLinkServiceConnectionStatePropertyResponse;
            /**
             * State of the private endpoint connection.
             */
            provisioningState: string;
        }

        export interface PrivateEndpointPropertyResponse {
            /**
             * Resource id of the private endpoint.
             */
            id?: string;
        }

        export interface PrivateLinkServiceConnectionStatePropertyResponse {
            /**
             * The actions required for private link service connection.
             */
            actionsRequired: string;
            /**
             * The private link service connection description.
             */
            description: string;
            /**
             * The private link service connection status.
             */
            status: string;
        }

        /**
         * Azure Active Directory identity configuration for a resource.
         */
        export interface ResourceIdentityResponse {
            /**
             * The Azure Active Directory principal id.
             */
            principalId: string;
            /**
             * The Azure Active Directory tenant id.
             */
            tenantId: string;
            /**
             * The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.
             */
            type?: string;
        }

        /**
         * A private endpoint connection under a server
         */
        export interface ServerPrivateEndpointConnectionResponse {
            /**
             * Resource Id of the private endpoint connection.
             */
            id: string;
            /**
             * Private endpoint connection properties
             */
            properties: v20171201preview.PrivateEndpointConnectionPropertiesResponse;
        }

        /**
         * Billing information related properties of a server.
         */
        export interface SkuResponse {
            /**
             * The scale up/out capacity, representing server's compute units.
             */
            capacity?: number;
            /**
             * The family of hardware.
             */
            family?: string;
            /**
             * The name of the sku, typically, tier + family + cores, e.g. B_Gen4_1, GP_Gen5_8.
             */
            name: string;
            /**
             * The size code, to be interpreted by resource as appropriate.
             */
            size?: string;
            /**
             * The tier of the particular SKU, e.g. Basic.
             */
            tier?: string;
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
             * Enable Geo-redundant or not for server backup.
             */
            geoRedundantBackup?: string;
            /**
             * Enable Storage Auto Grow.
             */
            storageAutogrow?: string;
            /**
             * Max storage allowed for a server.
             */
            storageMB?: number;
        }

    }

    export namespace v20180601privatepreview {
        export interface PrivateEndpointPropertyResponse {
            /**
             * Resource id of the private endpoint.
             */
            id?: string;
        }

        export interface PrivateLinkServiceConnectionStatePropertyResponse {
            /**
             * The actions required for private link service connection.
             */
            actionsRequired: string;
            /**
             * The private link service connection description.
             */
            description: string;
            /**
             * The private link service connection status.
             */
            status: string;
        }

    }

    export namespace v20200214preview {
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

    }

    export namespace v20201005privatepreview {
        /**
         * Maintenance window of a server group.
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
         * The delegated subnet arguments for a server group.
         */
        export interface ServerGroupPropertiesResponseDelegatedSubnetArguments {
            /**
             * delegated subnet arm resource id.
             */
            subnetArmResourceId?: string;
        }

        /**
         * The private dns zone arguments for a server group.
         */
        export interface ServerGroupPropertiesResponsePrivateDnsZoneArguments {
            /**
             * private dns zone arm resource id.
             */
            privateDnsZoneArmResourceId?: string;
        }

        /**
         * The name object for a server.
         */
        export interface ServerNameItemResponse {
            /**
             * The fully qualified domain name of a server.
             */
            fullyQualifiedDomainName: string;
            /**
             * The name of a server.
             */
            name?: string;
        }

        /**
         * Represents a server role group.
         */
        export interface ServerRoleGroupResponse {
            /**
             * If high availability is enabled or not for the server.
             */
            enableHa?: boolean;
            /**
             * If public IP is requested or not for a server.
             */
            enablePublicIp: boolean;
            /**
             * The name of the server role group.
             */
            name?: string;
            /**
             * The role of servers in the server role group.
             */
            role?: string;
            /**
             * The number of servers in the server role group.
             */
            serverCount?: number;
            /**
             * The edition of a server (default: GeneralPurpose).
             */
            serverEdition?: string;
            /**
             * The list of server names in the server role group.
             */
            serverNames: v20201005privatepreview.ServerNameItemResponse[];
            /**
             * The storage of a server in MB (max: 2097152 = 2TiB).
             */
            storageQuotaInMb?: number;
            /**
             * The vCores count of a server (max: 64).
             */
            vCores?: number;
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

    }

    export namespace v20210410privatepreview {
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
             * Geo Backup redundancy option
             */
            geoRedundantBackup?: string;
            /**
             * Max storage allowed for a server.
             */
            storageMB?: number;
        }

    }

    export namespace v20210615privatepreview {
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
            sku?: v20210615privatepreview.ServerSkuResponse;
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
            aadApp: v20210615privatepreview.AADAppResponse;
        }

        /**
         * Migration status.
         */
        export interface MigrationStatusResponse {
            /**
             * Migration sub state details.
             */
            currentSubStateDetails: v20210615privatepreview.MigrationSubStateDetailsResponse;
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

    }

    export namespace v20220308preview {
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
            userAssignedIdentities?: {[key: string]: v20220308preview.UserIdentityResponse};
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

    }

    export namespace v20220308privatepreview {
    }

    export namespace v20220501preview {
        /**
         * Database server metadata.
         */
        export interface DBServerMetadataResponse {
            location?: string;
            /**
             * Sku information related properties of a server.
             */
            sku?: v20220501preview.ServerSkuResponse;
            storageMB?: number;
            version?: string;
        }

        /**
         * Migration status.
         */
        export interface MigrationStatusResponse {
            /**
             * Migration sub state details.
             */
            currentSubStateDetails: v20220501preview.MigrationSubStateDetailsResponse;
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

    }

    export namespace v20221108 {
        /**
         * Schedule settings for regular cluster updates.
         */
        export interface MaintenanceWindowResponse {
            /**
             * Indicates whether custom maintenance window is enabled or not.
             */
            customWindow?: string;
            /**
             * Preferred day of the week for maintenance window.
             */
            dayOfWeek?: number;
            /**
             * Start hour within preferred day of the week for maintenance window.
             */
            startHour?: number;
            /**
             * Start minute within the start hour for maintenance window.
             */
            startMinute?: number;
        }

        /**
         * Property to represent resource id of the private endpoint.
         */
        export interface PrivateEndpointPropertyResponse {
            /**
             * Resource id of the private endpoint.
             */
            id?: string;
        }

        /**
         * The private endpoint resource.
         */
        export interface PrivateEndpointResponse {
            /**
             * The ARM identifier for private endpoint.
             */
            id: string;
        }

        /**
         * A collection of information about the state of the connection between service consumer and provider.
         */
        export interface PrivateLinkServiceConnectionStateResponse {
            /**
             * A message indicating if changes on the service provider require any updates on the consumer.
             */
            actionsRequired?: string;
            /**
             * The reason for approval/rejection of the connection.
             */
            description?: string;
            /**
             * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
             */
            status?: string;
        }

        /**
         * The name object for a server.
         */
        export interface ServerNameItemResponse {
            /**
             * The fully qualified domain name of a server.
             */
            fullyQualifiedDomainName: string;
            /**
             * The name of a server.
             */
            name?: string;
        }

        /**
         * A private endpoint connection.
         */
        export interface SimplePrivateEndpointConnectionResponse {
            /**
             * Group ids of the private endpoint connection.
             */
            groupIds?: string[];
            /**
             * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
             */
            id: string;
            /**
             * The name of the resource
             */
            name: string;
            /**
             * Private endpoint which the connection belongs to.
             */
            privateEndpoint?: v20221108.PrivateEndpointPropertyResponse;
            /**
             * A collection of information about the state of the connection between service consumer and provider.
             */
            privateLinkServiceConnectionState?: v20221108.PrivateLinkServiceConnectionStateResponse;
            /**
             * Azure Resource Manager metadata containing createdBy and modifiedBy information.
             */
            systemData: v20221108.SystemDataResponse;
            /**
             * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
             */
            type: string;
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

    }

    export namespace v20221201 {
        /**
         * Authentication configuration properties of a server
         */
        export interface AuthConfigResponse {
            /**
             * If Enabled, Azure Active Directory authentication is enabled.
             */
            activeDirectoryAuth?: string;
            /**
             * If Enabled, Password authentication is enabled.
             */
            passwordAuth?: string;
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
                passwordAuth: (val.passwordAuth) ?? "Enabled",
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
             * Data encryption type to depict if it is System Managed vs Azure Key vault.
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
         * Network properties of a server.
         */
        export interface NetworkResponse {
            /**
             * Delegated subnet arm resource id. This is required to be passed during create, in case we want the server to be VNET injected, i.e. Private access server. During update, pass this only if we want to update the value for Private DNS zone.
             */
            delegatedSubnetResourceId?: string;
            /**
             * Private dns zone arm resource id. This is required to be passed during create, in case we want the server to be VNET injected, i.e. Private access server. During update, pass this only if we want to update the value for Private DNS zone.
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
             * Tenant id of the server.
             */
            tenantId: string;
            /**
             * the types of identities associated with this resource; currently restricted to 'None and UserAssigned'
             */
            type: string;
            /**
             * represents user assigned identities map.
             */
            userAssignedIdentities?: {[key: string]: v20221201.UserIdentityResponse};
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

    }

    export namespace v20230301preview {
        /**
         * Authentication configuration properties of a server
         */
        export interface AuthConfigResponse {
            /**
             * If Enabled, Azure Active Directory authentication is enabled.
             */
            activeDirectoryAuth?: string;
            /**
             * If Enabled, Password authentication is enabled.
             */
            passwordAuth?: string;
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
                passwordAuth: (val.passwordAuth) ?? "Enabled",
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
             * Geo-backup encryption key status for Data encryption enabled server.
             */
            geoBackupEncryptionKeyStatus?: string;
            /**
             * URI for the key in keyvault for data encryption for geo-backup of server.
             */
            geoBackupKeyURI?: string;
            /**
             * Resource Id for the User assigned identity to be used for data encryption for geo-backup of server.
             */
            geoBackupUserAssignedIdentityId?: string;
            /**
             * Primary encryption key status for Data encryption enabled server.
             */
            primaryEncryptionKeyStatus?: string;
            /**
             * URI for the key in keyvault for data encryption of the primary server.
             */
            primaryKeyURI?: string;
            /**
             * Resource Id for the User assigned identity to be used for data encryption of the primary server.
             */
            primaryUserAssignedIdentityId?: string;
            /**
             * Data encryption type to depict if it is System Managed vs Azure Key vault.
             */
            type?: string;
        }

        /**
         * Database server metadata.
         */
        export interface DbServerMetadataResponse {
            /**
             * Location of database server
             */
            location: string;
            /**
             * SKU for the database server
             */
            sku?: v20230301preview.ServerSkuResponse;
            /**
             * Storage size in MB for database server
             */
            storageMb?: number;
            /**
             * Version for database engine
             */
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
         * Migration status.
         */
        export interface MigrationStatusResponse {
            /**
             * Current Migration sub state details.
             */
            currentSubStateDetails: v20230301preview.MigrationSubStateDetailsResponse;
            /**
             * Error message, if any, for the migration state
             */
            error: string;
            /**
             * State of migration
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
         * Network properties of a server.
         */
        export interface NetworkResponse {
            /**
             * Delegated subnet arm resource id. This is required to be passed during create, in case we want the server to be VNET injected, i.e. Private access server. During update, pass this only if we want to update the value for Private DNS zone.
             */
            delegatedSubnetResourceId?: string;
            /**
             * Private dns zone arm resource id. This is required to be passed during create, in case we want the server to be VNET injected, i.e. Private access server. During update, pass this only if we want to update the value for Private DNS zone.
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
             * Flag to enable / disable Storage Auto grow for flexible server.
             */
            autoGrow?: string;
            /**
             * Storage tier IOPS quantity.
             */
            iops: number;
            /**
             * Max storage allowed for a server.
             */
            storageSizeGB?: number;
            /**
             * Name of storage tier for IOPS.
             */
            tier?: string;
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
             * Tenant id of the server.
             */
            tenantId: string;
            /**
             * the types of identities associated with this resource; currently restricted to 'None and UserAssigned'
             */
            type: string;
            /**
             * represents user assigned identities map.
             */
            userAssignedIdentities?: {[key: string]: v20230301preview.UserIdentityResponse};
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

    }
}
