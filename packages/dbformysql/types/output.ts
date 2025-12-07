import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Storage Profile properties of a server
 */
export interface BackupResponse {
    /**
     * Backup interval hours for the server.
     */
    backupIntervalHours?: number;
    /**
     * Backup retention days for the server.
     */
    backupRetentionDays?: number;
    /**
     * Earliest restore point creation time (ISO8601 format)
     */
    earliestRestoreDate: string;
    /**
     * Whether or not geo redundant backup is enabled.
     */
    geoRedundantBackup?: string;
}
/**
 * backupResponseProvideDefaults sets the appropriate defaults for BackupResponse
 */
export function backupResponseProvideDefaults(val: BackupResponse): BackupResponse {
    return {
        ...val,
        geoRedundantBackup: (val.geoRedundantBackup) ?? "Disabled",
    };
}

/**
 * The date encryption for cmk.
 */
export interface DataEncryptionResponse {
    /**
     * Geo backup key uri as key vault can't cross region, need cmk in same region as geo backup
     */
    geoBackupKeyURI?: string;
    /**
     * Geo backup user identity resource id as identity can't cross region, need identity in same region as geo backup
     */
    geoBackupUserAssignedIdentityId?: string;
    /**
     * Primary key uri
     */
    primaryKeyURI?: string;
    /**
     * Primary user identity resource id
     */
    primaryUserAssignedIdentityId?: string;
    /**
     * The key type, AzureKeyVault for enable cmk, SystemManaged for disable cmk.
     */
    type?: string;
}

/**
 * High availability properties of a server
 */
export interface HighAvailabilityResponse {
    /**
     * High availability mode for a server.
     */
    mode?: string;
    /**
     * Availability zone of the standby server.
     */
    standbyAvailabilityZone?: string;
    /**
     * The state of server high availability.
     */
    state: string;
}

/**
 * Import source related properties.
 */
export interface ImportSourcePropertiesResponse {
    /**
     * Relative path of data directory in storage.
     */
    dataDirPath?: string;
    /**
     * Storage type of import source.
     */
    storageType?: string;
    /**
     * Uri of the import source storage.
     */
    storageUrl?: string;
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
 * Properties to configure Identity for Bring your Own Keys
 */
export interface MySQLServerIdentityResponse {
    /**
     * ObjectId from the KeyVault
     */
    principalId: string;
    /**
     * TenantId from the KeyVault
     */
    tenantId: string;
    /**
     * Type of managed service identity.
     */
    type?: string;
    /**
     * Metadata of user assigned identity.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
}

/**
 * Billing information related properties of a server.
 */
export interface MySQLServerSkuResponse {
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
 * Network related properties of a server
 */
export interface NetworkResponse {
    /**
     * Delegated subnet resource id used to setup vnet for a server.
     */
    delegatedSubnetResourceId?: string;
    /**
     * Private DNS zone resource id.
     */
    privateDnsZoneResourceId?: string;
    /**
     * Whether or not public network access is allowed for this server. Value is 'Disabled' when server has VNet integration.
     */
    publicNetworkAccess?: string;
}

/**
 * The private endpoint connection resource.
 */
export interface PrivateEndpointConnectionResponse {
    /**
     * The group ids for the private endpoint resource.
     */
    groupIds: string[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * The private endpoint resource.
     */
    privateEndpoint?: PrivateEndpointResponse;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateResponse;
    /**
     * The provisioning state of the private endpoint connection resource.
     */
    provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    systemData: SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}

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
    privateEndpoint?: PrivateEndpointPropertyResponse;
    /**
     * Connection state of the private endpoint connection.
     */
    privateLinkServiceConnectionState?: ServerPrivateLinkServiceConnectionStatePropertyResponse;
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
     * Resource Id of the private endpoint connection.
     */
    id: string;
    /**
     * Private endpoint connection properties
     */
    properties: ServerPrivateEndpointConnectionPropertiesResponse;
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

/**
 * Storage Profile properties of a server
 */
export interface StorageResponse {
    /**
     * Enable Storage Auto Grow or not.
     */
    autoGrow?: string;
    /**
     * Enable IO Auto Scaling or not.
     */
    autoIoScaling?: string;
    /**
     * Storage IOPS for a server.
     */
    iops?: number;
    /**
     * Enable Log On Disk or not.
     */
    logOnDisk?: string;
    /**
     * The redundant type of the server storage. The parameter is used for server creation.
     */
    storageRedundancy?: string;
    /**
     * Max storage size allowed for a server.
     */
    storageSizeGB?: number;
    /**
     * The sku name of the server storage.
     */
    storageSku: string;
}
/**
 * storageResponseProvideDefaults sets the appropriate defaults for StorageResponse
 */
export function storageResponseProvideDefaults(val: StorageResponse): StorageResponse {
    return {
        ...val,
        autoGrow: (val.autoGrow) ?? "Disabled",
        autoIoScaling: (val.autoIoScaling) ?? "Enabled",
        logOnDisk: (val.logOnDisk) ?? "Disabled",
        storageRedundancy: (val.storageRedundancy) ?? "LocalRedundancy",
    };
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
 * Metadata of user assigned identity.
 */
export interface UserAssignedIdentityResponse {
    /**
     * Client Id of user assigned identity
     */
    clientId: string;
    /**
     * Principal Id of user assigned identity
     */
    principalId: string;
}
