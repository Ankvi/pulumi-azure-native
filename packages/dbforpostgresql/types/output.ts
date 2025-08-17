import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Authentication configuration properties of a flexible server.
 */
export interface AuthConfigResponse {
    /**
     * Indicates if the server supports Microsoft Entra authentication.
     */
    activeDirectoryAuth?: string;
    /**
     * Indicates if the server supports password based authentication.
     */
    passwordAuth?: string;
    /**
     * Identifier of the tenant of the delegated resource.
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
 * Backup properties of a flexible server.
 */
export interface BackupResponse {
    /**
     * Backup retention days for the flexible server.
     */
    backupRetentionDays?: number;
    /**
     * Earliest restore point time (ISO8601 format) for a flexible server.
     */
    earliestRestoreDate: string;
    /**
     * Indicates if the server is configured to create geographically redundant backups.
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
 * Data encryption properties of a flexible server.
 */
export interface DataEncryptionResponse {
    /**
     * Status of key used by a flexible server configured with data encryption based on customer managed key, to encrypt the geographically redundant storage associated to the server when it is configured to support geographically redundant backups.
     */
    geoBackupEncryptionKeyStatus?: string;
    /**
     * Identifier of the user assigned managed identity used to access the key in Azure Key Vault for data encryption of the geographically redundant storage associated to a flexible server that is configured to support geographically redundant backups.
     */
    geoBackupKeyURI?: string;
    /**
     * Identifier of the user assigned managed identity used to access the key in Azure Key Vault for data encryption of the geographically redundant storage associated to a flexible server that is configured to support geographically redundant backups.
     */
    geoBackupUserAssignedIdentityId?: string;
    /**
     * Status of key used by a flexible server configured with data encryption based on customer managed key, to encrypt the primary storage associated to the server.
     */
    primaryEncryptionKeyStatus?: string;
    /**
     * URI of the key in Azure Key Vault used for data encryption of the primary storage associated to a flexible server.
     */
    primaryKeyURI?: string;
    /**
     * Identifier of the user assigned managed identity used to access the key in Azure Key Vault for data encryption of the primary storage associated to a flexible server.
     */
    primaryUserAssignedIdentityId?: string;
    /**
     * Data encryption type used by a flexible server.
     */
    type?: string;
}

/**
 * Validation status summary for a database.
 */
export interface DbLevelValidationStatusResponse {
    /**
     * Name of database.
     */
    databaseName?: string;
    /**
     * End time of a database level validation.
     */
    endedOn?: string;
    /**
     * Start time of a database level validation.
     */
    startedOn?: string;
    /**
     * Summary of database level validations.
     */
    summary?: ValidationSummaryItemResponse[];
}

/**
 * Migration status of a database.
 */
export interface DbMigrationStatusResponse {
    /**
     * Change Data Capture applied changes counter.
     */
    appliedChanges?: number;
    /**
     * Change Data Capture delete counter.
     */
    cdcDeleteCounter?: number;
    /**
     * Change Data Capture insert counter.
     */
    cdcInsertCounter?: number;
    /**
     * Change Data Capture update counter.
     */
    cdcUpdateCounter?: number;
    /**
     * Name of database.
     */
    databaseName?: string;
    /**
     * End time of a migration state.
     */
    endedOn?: string;
    /**
     * Number of tables loaded during the migration of a database.
     */
    fullLoadCompletedTables?: number;
    /**
     * Number of tables encountering errors during the migration of a database.
     */
    fullLoadErroredTables?: number;
    /**
     * Number of tables loading during the migration of a database.
     */
    fullLoadLoadingTables?: number;
    /**
     * Number of tables queued for the migration of a database.
     */
    fullLoadQueuedTables?: number;
    /**
     * Change Data Capture incoming changes counter.
     */
    incomingChanges?: number;
    /**
     * Lag in seconds between source and target during online phase.
     */
    latency?: number;
    /**
     * Error message, if any, for the migration state.
     */
    message?: string;
    /**
     * Migration operation of a database.
     */
    migrationOperation?: string;
    /**
     * Migration state of a database.
     */
    migrationState?: string;
    /**
     * Start time of a migration state.
     */
    startedOn?: string;
}

/**
 * Database server metadata.
 */
export interface DbServerMetadataResponse {
    /**
     * Location of database server.
     */
    location: string;
    /**
     * Compute tier and size of the database server. This object is empty for an Azure Database for PostgreSQL single server.
     */
    sku?: ServerSkuResponse;
    /**
     * Storage size (in MB) for database server.
     */
    storageMb?: number;
    /**
     * Major version of PostgreSQL database engine.
     */
    version?: string;
}

/**
 * High availability properties of a flexible server.
 */
export interface HighAvailabilityResponse {
    /**
     * High availability mode for a flexible server.
     */
    mode?: string;
    /**
     * Availability zone associated to the standby server created when high availability is set to SameZone or ZoneRedundant.
     */
    standbyAvailabilityZone?: string;
    /**
     * Possible states of the standby server created when high availability is set to SameZone or ZoneRedundant.
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
 * Maintenance window properties of a flexible server.
 */
export interface MaintenanceWindowResponse {
    /**
     * Indicates whether custom window is enabled or disabled.
     */
    customWindow?: string;
    /**
     * Day of the week to be used for maintenance window.
     */
    dayOfWeek?: number;
    /**
     * Start hour to be used for maintenance window.
     */
    startHour?: number;
    /**
     * Start minute to be used for maintenance window.
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
 * State of migration.
 */
export interface MigrationStatusResponse {
    /**
     * Current migration sub state details.
     */
    currentSubStateDetails: MigrationSubStateDetailsResponse;
    /**
     * Error message, if any, for the migration state.
     */
    error: string;
    /**
     * State of migration.
     */
    state: string;
}

/**
 * Details of migration substate.
 */
export interface MigrationSubStateDetailsResponse {
    /**
     * Substate of migration.
     */
    currentSubState: string;
    dbDetails?: {[key: string]: DbMigrationStatusResponse};
    /**
     * Details for the validation for migration.
     */
    validationDetails?: ValidationDetailsResponse;
}

/**
 * Network properties of a flexible server.
 */
export interface NetworkResponse {
    /**
     * Resource identifier of the delegated subnet. Required during creation of a new server, in case you want the server to be integrated into your own virtual network. For an update operation, you only have to provide this property if you want to change the value assigned for the private DNS zone.
     */
    delegatedSubnetResourceId?: string;
    /**
     * Identifier of the private DNS zone. Required during creation of a new server, in case you want the server to be integrated into your own virtual network. For an update operation, you only have to provide this property if you want to change the value assigned for the private DNS zone.
     */
    privateDnsZoneArmResourceId?: string;
    /**
     * Indicates if public network access is enabled or not.
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
 * Replica properties of a flexible server.
 */
export interface ReplicaResponse {
    /**
     * Maximum number of read replicas allowed for a flexible server.
     */
    capacity: number;
    /**
     * Indicates the replication state of a read replica. This property is returned only when the target flexible server is a read replica. Possible  values are Active, Broken, Catchup, Provisioning, Reconfiguring, and Updating
     */
    replicationState: string;
    /**
     * Role of the server in a replication set.
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
 * Compute information of a flexible server.
 */
export interface ServerSkuResponse {
    /**
     * Compute tier and size of the database server. This object is empty for an Azure Database for PostgreSQL single server.
     */
    name?: string;
    /**
     * Tier of the compute assigned to a flexible server.
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
 * Compute information of a flexible server.
 */
export interface SkuResponse {
    /**
     * Name by which is known a given compute size assigned to a flexible server.
     */
    name: string;
    /**
     * Tier of the compute assigned to a flexible server.
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
 * Storage properties of a flexible server.
 */
export interface StorageResponse {
    /**
     * Flag to enable or disable the automatic growth of storage size of a flexible server when available space is nearing zero and conditions allow for automatically growing storage size.
     */
    autoGrow?: string;
    /**
     * Maximum IOPS supported for storage. Required when type of storage is PremiumV2_LRS.
     */
    iops?: number;
    /**
     * Size of storage assigned to a flexible server.
     */
    storageSizeGB?: number;
    /**
     * Maximum throughput supported for storage. Required when type of storage is PremiumV2_LRS.
     */
    throughput?: number;
    /**
     * Storage tier of a flexible server.
     */
    tier?: string;
    /**
     * Type of storage assigned to a flexible server. Allowed values are Premium_LRS or PremiumV2_LRS. If not specified, it defaults to Premium_LRS.
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
     * Identifier of the tenant of a flexible server.
     */
    tenantId?: string;
    /**
     * Types of identities associated with a flexible server.
     */
    type?: string;
    /**
     * Map of user assigned managed identities.
     */
    userAssignedIdentities?: {[key: string]: UserIdentityResponse};
}

/**
 * User assigned managed identity associated with a flexible server.
 */
export interface UserIdentityResponse {
    /**
     * Identifier of the client of the service principal associated to the user assigned managed identity.
     */
    clientId?: string;
    /**
     * Identifier of the object of the service principal associated to the user assigned managed identity.
     */
    principalId?: string;
}

/**
 * Details for the validation for migration.
 */
export interface ValidationDetailsResponse {
    /**
     * Details of server level validations.
     */
    dbLevelValidationDetails?: DbLevelValidationStatusResponse[];
    /**
     * Details of server level validations.
     */
    serverLevelValidationDetails?: ValidationSummaryItemResponse[];
    /**
     * Validation status for migration.
     */
    status?: string;
    /**
     * End time (UTC) for validation.
     */
    validationEndTimeInUtc?: string;
    /**
     * Start time (UTC) for validation.
     */
    validationStartTimeInUtc?: string;
}

/**
 * Validation message object.
 */
export interface ValidationMessageResponse {
    /**
     * Validation message string.
     */
    message?: string;
    /**
     * Severity of validation message.
     */
    state?: string;
}

/**
 * Validation summary object.
 */
export interface ValidationSummaryItemResponse {
    /**
     * Validation messages.
     */
    messages?: ValidationMessageResponse[];
    /**
     * Validation status for migration.
     */
    state?: string;
    /**
     * Validation type.
     */
    type?: string;
}
