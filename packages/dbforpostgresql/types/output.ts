import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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












