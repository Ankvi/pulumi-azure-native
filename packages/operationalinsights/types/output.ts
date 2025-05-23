import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The list of Log Analytics workspaces associated with the cluster.
 */
export interface AssociatedWorkspaceResponse {
    /**
     * The time of workspace association.
     */
    associateDate: string;
    /**
     * Associated workspace arm resource id, in the form of: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}.
     */
    resourceId: string;
    /**
     * Associated workspace immutable id.
     */
    workspaceId: string;
    /**
     * Associated workspace resource name.
     */
    workspaceName: string;
}

/**
 * The Capacity Reservation properties.
 */
export interface CapacityReservationPropertiesResponse {
    /**
     * The last time Sku was updated.
     */
    lastSkuUpdate: string;
    /**
     * Minimum CapacityReservation value in Gigabytes.
     */
    minCapacity: number;
}

/**
 * The cluster sku definition.
 */
export interface ClusterSkuResponse {
    /**
     * The capacity reservation level in Gigabytes for this cluster.
     */
    capacity?: number;
    /**
     * The SKU (tier) of a cluster.
     */
    name?: string;
}

/**
 * Table column.
 */
export interface ColumnResponse {
    /**
     * Column data type logical hint.
     */
    dataTypeHint?: string;
    /**
     * Column description.
     */
    description?: string;
    /**
     * Column display name.
     */
    displayName?: string;
    /**
     * Is displayed by default.
     */
    isDefaultDisplay: boolean;
    /**
     * Is column hidden.
     */
    isHidden: boolean;
    /**
     * Column name.
     */
    name?: string;
    /**
     * Column data type.
     */
    type?: string;
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
     * Type of managed service identity.
     */
    type: string;
    /**
     * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: {[key: string]: UserIdentityPropertiesResponse};
}

/**
 * The key vault properties.
 */
export interface KeyVaultPropertiesResponse {
    /**
     * The name of the key associated with the Log Analytics cluster.
     */
    keyName?: string;
    /**
     * Selected key minimum required size.
     */
    keyRsaSize?: number;
    /**
     * The Key Vault uri which holds they key associated with the Log Analytics cluster.
     */
    keyVaultUri?: string;
    /**
     * The version of the key associated with the Log Analytics cluster.
     */
    keyVersion?: string;
}

/**
 * The related metadata items for the function.
 */
export interface LogAnalyticsQueryPackQueryPropertiesResponseRelated {
    /**
     * The related categories for the function.
     */
    categories?: string[];
    /**
     * The related resource types for the function.
     */
    resourceTypes?: string[];
    /**
     * The related Log Analytics solutions for the function.
     */
    solutions?: string[];
}

/**
 * A machine reference with a hint of the machine's name and operating system.
 */
export interface MachineReferenceWithHintsResponse {
    /**
     * Last known display name.
     */
    displayNameHint: string;
    /**
     * Resource URI.
     */
    id: string;
    /**
     * Specifies the sub-class of the reference.
     * Expected value is 'ref:machinewithhints'.
     */
    kind: "ref:machinewithhints";
    /**
     * Resource name.
     */
    name: string;
    /**
     * Last known operating system family.
     */
    osFamilyHint: string;
    /**
     * Resource type qualifier.
     */
    type: string;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityResponse {
    /**
     * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    principalId: string;
    /**
     * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    tenantId: string;
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: string;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
}

/**
 * The private link scope resource reference.
 */
export interface PrivateLinkScopedResourceResponse {
    /**
     * The full resource Id of the private link scope resource.
     */
    resourceId?: string;
    /**
     * The private link scope unique Identifier.
     */
    scopeId?: string;
}

/**
 * Restore parameters.
 */
export interface RestoredLogsResponse {
    /**
     * Search results table async operation id.
     */
    azureAsyncOperationId: string;
    /**
     * The timestamp to end the restore by (UTC).
     */
    endRestoreTime?: string;
    /**
     * The table to restore data from.
     */
    sourceTable?: string;
    /**
     * The timestamp to start the restore from (UTC).
     */
    startRestoreTime?: string;
}

/**
 * Search job execution statistics.
 */
export interface ResultStatisticsResponse {
    /**
     * The number of rows that were returned by the search job.
     */
    ingestedRecords: number;
    /**
     * Search job completion percentage.
     */
    progress: number;
    /**
     * Search job: Amount of scanned data.
     */
    scannedGb: number;
}

/**
 * Table's schema.
 */
export interface SchemaResponse {
    /**
     * Table category.
     */
    categories: string[];
    /**
     * A list of table custom columns.
     */
    columns?: ColumnResponse[];
    /**
     * Table description.
     */
    description?: string;
    /**
     * Table display name.
     */
    displayName?: string;
    /**
     * Table labels.
     */
    labels: string[];
    /**
     * Table name.
     */
    name?: string;
    /**
     * List of solutions the table is affiliated with
     */
    solutions: string[];
    /**
     * Table's creator.
     */
    source: string;
    /**
     * A list of table standard columns.
     */
    standardColumns: ColumnResponse[];
    /**
     * The subtype describes what APIs can be used to interact with the table, and what features are available against it.
     */
    tableSubType: string;
    /**
     * Table's creator.
     */
    tableType: string;
}

/**
 * Parameters of the search job that initiated this table.
 */
export interface SearchResultsResponse {
    /**
     * Search results table async operation id.
     */
    azureAsyncOperationId: string;
    /**
     * Search job Description.
     */
    description?: string;
    /**
     * The timestamp to end the search by (UTC)
     */
    endSearchTime?: string;
    /**
     * Limit the search job to return up to specified number of rows.
     */
    limit?: number;
    /**
     * Search job query.
     */
    query?: string;
    /**
     * The table used in the search job.
     */
    sourceTable: string;
    /**
     * The timestamp to start the search from (UTC)
     */
    startSearchTime?: string;
}

/**
 * Describes a storage account connection.
 */
export interface StorageAccountResponse {
    /**
     * The Azure Resource Manager ID of the storage account resource.
     */
    id: string;
    /**
     * The storage account key.
     */
    key: string;
}

/**
 * The status of the storage insight.
 */
export interface StorageInsightStatusResponse {
    /**
     * Description of the state of the storage insight.
     */
    description?: string;
    /**
     * The state of the storage insight connection to the workspace
     */
    state: string;
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
 * A tag of a saved search.
 */
export interface TagResponse {
    /**
     * The tag name.
     */
    name: string;
    /**
     * The tag value.
     */
    value: string;
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
}

/**
 * User assigned identity properties.
 */
export interface UserIdentityPropertiesResponse {
    /**
     * The client id of user assigned identity.
     */
    clientId: string;
    /**
     * The principal id of user assigned identity.
     */
    principalId: string;
}

/**
 * The daily volume cap for ingestion.
 */
export interface WorkspaceCappingResponse {
    /**
     * The workspace daily quota for ingestion.
     */
    dailyQuotaGb?: number;
    /**
     * The status of data ingestion for this workspace.
     */
    dataIngestionStatus: string;
    /**
     * The time when the quota will be rest.
     */
    quotaNextResetTime: string;
}

/**
 * Workspace features.
 */
export interface WorkspaceFeaturesResponse {
    /**
     * Dedicated LA cluster resourceId that is linked to the workspaces.
     */
    clusterResourceId?: string;
    /**
     * Disable Non-AAD based Auth.
     */
    disableLocalAuth?: boolean;
    /**
     * Flag that indicate if data should be exported.
     */
    enableDataExport?: boolean;
    /**
     * Flag that indicate which permission to use - resource or workspace or both.
     */
    enableLogAccessUsingOnlyResourcePermissions?: boolean;
    /**
     * Flag that describes if we want to remove the data after 30 days.
     */
    immediatePurgeDataOn30Days?: boolean;
    /**
     * An indication if the specify workspace is limited to sentinel's unified billing model only.
     */
    unifiedSentinelBillingOnly: boolean;
}

/**
 * The SKU (tier) of a workspace.
 */
export interface WorkspaceSkuResponse {
    /**
     * The capacity reservation level in GB for this workspace, when CapacityReservation sku is selected.
     */
    capacityReservationLevel?: number;
    /**
     * The last time when the sku was updated.
     */
    lastSkuUpdate: string;
    /**
     * The name of the SKU.
     */
    name: string;
}
