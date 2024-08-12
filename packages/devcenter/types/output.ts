import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * A name/value pair to describe a capability.
 */
export interface CapabilityResponse {
    /**
     * Name of the capability.
     */
    name: string;
    /**
     * Value of the capability.
     */
    value: string;
}

/**
 * An individual conflict error.
 */
export interface CatalogConflictErrorResponse {
    /**
     * Name of the conflicting catalog item.
     */
    name: string;
    /**
     * The path of the file that has a conflicting name.
     */
    path: string;
}

/**
 * Catalog error details
 */
export interface CatalogErrorDetailsResponse {
    /**
     * An identifier for the error.
     */
    code?: string;
    /**
     * A message describing the error.
     */
    message?: string;
}

/**
 * An individual synchronization error.
 */
export interface CatalogSyncErrorResponse {
    /**
     * Errors associated with the file.
     */
    errorDetails: CatalogErrorDetailsResponse[];
    /**
     * The path of the file the error is associated with.
     */
    path: string;
}

/**
 * Project catalog settings for project catalogs under a project associated to this dev center.
 */
export interface DevCenterProjectCatalogSettingsResponse {
    /**
     * Whether project catalogs associated with projects in this dev center can be configured to sync catalog items.
     */
    catalogItemSyncEnableStatus?: string;
}

/**
 * The resource model definition representing SKU for DevCenter resources
 */
export interface DevCenterSkuResponse {
    /**
     * Collection of name/value pairs to describe the SKU capabilities.
     */
    capabilities: CapabilityResponse[];
    /**
     * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
     */
    capacity?: number;
    /**
     * If the service has different generations of hardware, for the same SKU, then that can be captured here.
     */
    family?: string;
    /**
     * SKU supported locations.
     */
    locations: string[];
    /**
     * The name of the SKU. E.g. P3. It is typically a letter+number code
     */
    name: string;
    /**
     * The name of the resource type
     */
    resourceType: string;
    /**
     * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
     */
    size?: string;
    /**
     * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
     */
    tier?: string;
}

/**
 * A role that can be assigned to a user.
 */
export interface EnvironmentRoleResponse {
    /**
     * This is a description of the Role Assignment.
     */
    description: string;
    /**
     * The common name of the Role Assignment. This is a descriptive name such as 'AcrPush'.
     */
    roleName: string;
}

/**
 * Properties for a Git repository catalog.
 */
export interface GitCatalogResponse {
    /**
     * Git branch.
     */
    branch?: string;
    /**
     * The folder where the catalog items can be found inside the repository.
     */
    path?: string;
    /**
     * A reference to the Key Vault secret containing a security token to authenticate to a Git repository.
     */
    secretIdentifier?: string;
    /**
     * Git URI.
     */
    uri?: string;
}

/**
 * Pool health status detail.
 */
export interface HealthStatusDetailResponse {
    /**
     * An identifier for the issue.
     */
    code: string;
    /**
     * A message describing the issue, intended to be suitable for display in a user interface
     */
    message: string;
}

/**
 * Image creation error details
 */
export interface ImageCreationErrorDetailsResponse {
    /**
     * An identifier for the error.
     */
    code?: string;
    /**
     * A message describing the error.
     */
    message?: string;
}

/**
 * A task group executed during the image definition build.
 */
export interface ImageDefinitionBuildTaskGroupResponse {
    /**
     * End time of the task group.
     */
    endTime: string;
    /**
     * The name of the task group.
     */
    name: string;
    /**
     * Start time of the task group.
     */
    startTime: string;
    /**
     * The status of the task group.
     */
    status: string;
    /**
     * The list of tasks executed during the task group.
     */
    tasks: ImageDefinitionBuildTaskResponse[];
}

/**
 * A task executed during the image definition build.
 */
export interface ImageDefinitionBuildTaskResponse {
    /**
     * Display name to help differentiate multiple instances of the same task.
     */
    displayName?: string;
    /**
     * End time of the task.
     */
    endTime: string;
    /**
     * ID of the task instance.
     */
    id: string;
    /**
     * The URI for retrieving logs for the task execution.
     */
    logUri: string;
    /**
     * The name of the task.
     */
    name?: string;
    /**
     * Parameters for the task.
     */
    parameters?: ImageDefinitionBuildTaskResponseParameters[];
    /**
     * Start time of the task.
     */
    startTime: string;
    /**
     * The status of the task.
     */
    status: string;
}

export interface ImageDefinitionBuildTaskResponseParameters {
    key: string;
    value: string;
}

/**
 * Image reference information
 */
export interface ImageReferenceResponse {
    /**
     * The actual version of the image after use. When id references a gallery image latest version, this will indicate the actual version in use.
     */
    exactVersion: string;
    /**
     * Image ID, or Image version ID. When Image ID is provided, its latest version will be used.
     */
    id?: string;
}

/**
 * Image validation error details
 */
export interface ImageValidationErrorDetailsResponse {
    /**
     * An identifier for the error.
     */
    code?: string;
    /**
     * A message describing the error.
     */
    message?: string;
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
 * The role definition assigned to the environment creator on backing resources.
 */
export interface ProjectEnvironmentTypeUpdatePropertiesResponseCreatorRoleAssignment {
    /**
     * A map of roles to assign to the environment creator.
     */
    roles?: {[key: string]: EnvironmentRoleResponse};
}

/**
 * Network settings for the project.
 */
export interface ProjectNetworkSettingsResponse {
    /**
     * Indicates whether pools in this Dev Center can use Microsoft Hosted Networks. Defaults to Enabled if not set.
     */
    microsoftHostedNetworkEnableStatus: string;
}

/**
 * A resource policy.
 */
export interface ResourcePolicyResponse {
    /**
     * Optional. When specified, this expression is used to filter the resources.
     */
    filter?: string;
    /**
     * Resources that are included and shared as a part of a curation profile.
     */
    resources?: string;
}

/**
 * The resource model definition representing SKU
 */
export interface SkuResponse {
    /**
     * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
     */
    capacity?: number;
    /**
     * If the service has different generations of hardware, for the same SKU, then that can be captured here.
     */
    family?: string;
    /**
     * The name of the SKU. E.g. P3. It is typically a letter+number code
     */
    name: string;
    /**
     * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
     */
    size?: string;
    /**
     * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
     */
    tier?: string;
}

/**
 * Stop on disconnect configuration settings for Dev Boxes created in this pool.
 */
export interface StopOnDisconnectConfigurationResponse {
    /**
     * The specified time in minutes to wait before stopping a Dev Box once disconnect is detected.
     */
    gracePeriodMinutes?: number;
    /**
     * Whether the feature to stop the Dev Box on disconnect once the grace period has lapsed is enabled.
     */
    status?: string;
}

/**
 * Stats of the synchronization.
 */
export interface SyncStatsResponse {
    /**
     * Count of catalog items added during synchronization.
     */
    added: number;
    /**
     * Count of catalog items removed during synchronization.
     */
    removed: number;
    /**
     * Indicates catalog item types that were synced.
     */
    syncedCatalogItemTypes?: string[];
    /**
     * Count of synchronization errors that occured during synchronization.
     */
    synchronizationErrors: number;
    /**
     * Count of catalog items that were unchanged during synchronization.
     */
    unchanged: number;
    /**
     * Count of catalog items updated during synchronization.
     */
    updated: number;
    /**
     * Count of catalog items that had validation errors during synchronization.
     */
    validationErrors: number;
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
}

/**
 * Mapping of user object ID to role assignments.
 */
export interface UserRoleAssignmentResponse {
    /**
     * A map of roles to assign to the parent user.
     */
    roles?: {[key: string]: EnvironmentRoleResponse};
}








