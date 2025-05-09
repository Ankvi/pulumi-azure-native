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
 * Validation status summary for an individual database
 */
export interface DbLevelValidationStatusResponse {
    /**
     * Name of the database
     */
    databaseName?: string;
    /**
     * End date-time of a database level validation
     */
    endedOn?: string;
    /**
     * Start date-time of a database level validation
     */
    startedOn?: string;
    /**
     * Summary of database level validations
     */
    summary?: ValidationSummaryItemResponse[];
}

/**
 * Migration status of an individual database
 */
export interface DbMigrationStatusResponse {
    /**
     * CDC applied changes counter
     */
    appliedChanges?: number;
    /**
     * CDC delete counter
     */
    cdcDeleteCounter?: number;
    /**
     * CDC insert counter
     */
    cdcInsertCounter?: number;
    /**
     * CDC update counter
     */
    cdcUpdateCounter?: number;
    /**
     * Name of the database
     */
    databaseName?: string;
    /**
     * End date-time of a migration state
     */
    endedOn?: string;
    /**
     * Number of tables loaded during the migration of a DB
     */
    fullLoadCompletedTables?: number;
    /**
     * Number of tables errored out during the migration of a DB
     */
    fullLoadErroredTables?: number;
    /**
     * Number of tables loading during the migration of a DB
     */
    fullLoadLoadingTables?: number;
    /**
     * Number of tables queued for the migration of a DB
     */
    fullLoadQueuedTables?: number;
    /**
     * CDC incoming changes counter
     */
    incomingChanges?: number;
    /**
     * Lag in seconds between source and target during online phase
     */
    latency?: number;
    /**
     * Error message, if any, for the migration state
     */
    message?: string;
    /**
     * Migration operation of an individual database
     */
    migrationOperation?: string;
    /**
     * Migration db state of an individual database
     */
    migrationState?: string;
    /**
     * Start date-time of a migration state
     */
    startedOn?: string;
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
     * SKU for the database server. This object is empty for PG single server
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
 * Describes the identity of the cluster.
 */
export interface IdentityPropertiesResponse {
    type?: string;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
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
    dbDetails?: {[key: string]: DbMigrationStatusResponse};
    /**
     * Details for the validation for migration
     */
    validationDetails?: ValidationDetailsResponse;
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
 * Replica properties of a server
 */
export interface ReplicaResponse {
    /**
     * Replicas allowed for a server.
     */
    capacity: number;
    /**
     * Gets the replication state of a replica server. This property is returned only for replicas api call. Supported values are Active, Catchup, Provisioning, Updating, Broken, Reconfiguring
     */
    replicationState: string;
    /**
     * Used to indicate role of the server in replication set.
     */
    role?: string;
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
 * Authentication configuration of a cluster.
 */
export interface ServerGroupClusterAuthConfigResponse {
    activeDirectoryAuth?: string;
    passwordAuth?: string;
}

/**
 * The data encryption properties of a cluster.
 */
export interface ServerGroupClusterDataEncryptionResponse {
    /**
     * URI for the key in keyvault for data encryption of the primary server.
     */
    primaryKeyUri?: string;
    /**
     * Resource Id for the User assigned identity to be used for data encryption of the primary server.
     */
    primaryUserAssignedIdentityId?: string;
    type?: string;
}

/**
 * Schedule settings for regular cluster updates.
 */
export interface ServerGroupClusterMaintenanceWindowResponse {
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
     * Resource ID of the Private Endpoint Connection.
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
 * Sku information related properties of a server.
 */
export interface ServerSkuResponse {
    /**
     * The name of the sku, typically, tier + family + cores, e.g. Standard_D4s_v3.
     */
    name?: string;
    /**
     * The tier of the particular SKU, e.g. Burstable.
     */
    tier?: string;
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
 * Billing information related properties of a server.
 */
export interface SingleServerSkuResponse {
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
 * Storage properties of a server
 */
export interface StorageResponse {
    /**
     * Flag to enable / disable Storage Auto grow for flexible server.
     */
    autoGrow?: string;
    /**
     * Storage tier IOPS quantity. This property is required to be set for storage Type PremiumV2_LRS
     */
    iops?: number;
    /**
     * Max storage allowed for a server.
     */
    storageSizeGB?: number;
    /**
     * Storage throughput for the server. This is required to be set for storage Type PremiumV2_LRS
     */
    throughput?: number;
    /**
     * Name of storage tier for IOPS.
     */
    tier?: string;
    /**
     * Storage type for the server. Allowed values are Premium_LRS and PremiumV2_LRS, and default is Premium_LRS if not specified
     */
    type?: string;
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
 * User assigned identity properties
 */
export interface UserAssignedIdentityResponse {
    /**
     * The client ID of the assigned identity.
     */
    clientId: string;
    /**
     * The principal ID of the assigned identity.
     */
    principalId: string;
    /**
     * Tenant id of the server.
     */
    tenantId?: string;
    /**
     * the types of identities associated with this resource
     */
    type?: string;
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

/**
 * Details for the validation for migration
 */
export interface ValidationDetailsResponse {
    /**
     * Details of server level validations
     */
    dbLevelValidationDetails?: DbLevelValidationStatusResponse[];
    /**
     * Details of server level validations
     */
    serverLevelValidationDetails?: ValidationSummaryItemResponse[];
    /**
     * Validation status for migration
     */
    status?: string;
    /**
     * Validation End date-time in UTC
     */
    validationEndTimeInUtc?: string;
    /**
     * Validation Start date-time in UTC
     */
    validationStartTimeInUtc?: string;
}

/**
 * Validation message object
 */
export interface ValidationMessageResponse {
    /**
     * Validation message string
     */
    message?: string;
    /**
     * Severity of validation message
     */
    state?: string;
}

/**
 * Validation summary object
 */
export interface ValidationSummaryItemResponse {
    /**
     * Validation messages
     */
    messages?: ValidationMessageResponse[];
    /**
     * Validation status for migration
     */
    state?: string;
    /**
     * Validation type
     */
    type?: string;
}
