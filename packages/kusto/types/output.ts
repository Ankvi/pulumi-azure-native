import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Represents an accepted audience trusted by the cluster.
 */
export interface AcceptedAudiencesResponse {
    /**
     * GUID or valid URL representing an accepted audience.
     */
    value?: string;
}

/**
 * Azure SKU definition.
 */
export interface AzureSkuResponse {
    /**
     * The number of instances of the cluster.
     */
    capacity?: number;
    /**
     * SKU name.
     */
    name: string;
    /**
     * SKU tier.
     */
    tier: string;
}

/**
 * Configuration for external callout policies, including URI patterns, access types, and service types.
 */
export interface CalloutPolicyResponse {
    /**
     * Unique identifier for the callout configuration.
     */
    calloutId: string;
    /**
     * Type of the callout service, specifying the kind of external resource or service being accessed.
     */
    calloutType?: string;
    /**
     * Regular expression or FQDN pattern for the callout URI.
     */
    calloutUriRegex?: string;
    /**
     * Indicates whether outbound access is permitted for the specified URI pattern.
     */
    outboundAccess?: string;
}

/**
 * A class representing database principal entity.
 */
export interface DatabasePrincipalResponse {
    /**
     * Application id - relevant only for application principal type.
     */
    appId?: string;
    /**
     * Database principal email if exists.
     */
    email?: string;
    /**
     * Database principal fully qualified name.
     */
    fqn?: string;
    /**
     * Database principal name.
     */
    name: string;
    /**
     * Database principal role.
     */
    role: string;
    /**
     * The tenant name of the principal
     */
    tenantName: string;
    /**
     * Database principal type.
     */
    type: string;
}

/**
 * A class that contains database statistics information.
 */
export interface DatabaseStatisticsResponse {
    /**
     * The database size - the total size of compressed data and index in bytes.
     */
    size?: number;
}

/**
 * A class representing follower database request.
 */
export interface FollowerDatabaseDefinitionResponse {
    /**
     * Resource name of the attached database configuration in the follower cluster.
     */
    attachedDatabaseConfigurationName: string;
    /**
     * Resource id of the cluster that follows a database owned by this cluster.
     */
    clusterResourceId: string;
    /**
     * The database name owned by this cluster that was followed. * in case following all databases.
     */
    databaseName: string;
    /**
     * The origin of the following setup.
     */
    databaseShareOrigin: string;
    /**
     * Table level sharing specifications
     */
    tableLevelSharingProperties: TableLevelSharingPropertiesResponse;
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
     * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove all identities.
     */
    type: string;
    /**
     * The list of user identities associated with the Kusto cluster. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: {[key: string]: IdentityResponseUserAssignedIdentities};
}

export interface IdentityResponseUserAssignedIdentities {
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
 * Properties of the key vault.
 */
export interface KeyVaultPropertiesResponse {
    /**
     * The name of the key vault key.
     */
    keyName?: string;
    /**
     * The Uri of the key vault.
     */
    keyVaultUri?: string;
    /**
     * The version of the key vault key.
     */
    keyVersion?: string;
    /**
     * The user assigned identity (ARM resource id) that has access to the key.
     */
    userIdentity?: string;
}

/**
 * The language extension object.
 */
export interface LanguageExtensionResponse {
    /**
     * The language extension custom image name.
     */
    languageExtensionCustomImageName?: string;
    /**
     * The language extension image name.
     */
    languageExtensionImageName?: string;
    /**
     * The language extension name.
     */
    languageExtensionName?: string;
}

/**
 * The list of language extension objects.
 */
export interface LanguageExtensionsListResponse {
    /**
     * The list of language extensions.
     */
    value?: LanguageExtensionResponse[];
}

/**
 * Represents a properties of a cluster that is part of a migration.
 */
export interface MigrationClusterPropertiesResponse {
    /**
     * The public data ingestion URL of the cluster.
     */
    dataIngestionUri: string;
    /**
     * The resource ID of the cluster.
     */
    id: string;
    /**
     * The role of the cluster in the migration process.
     */
    role: string;
    /**
     * The public URL of the cluster.
     */
    uri: string;
}

/**
 * A class that contains the optimized auto scale definition.
 */
export interface OptimizedAutoscaleResponse {
    /**
     * A boolean value that indicate if the optimized autoscale feature is enabled or not.
     */
    isEnabled: boolean;
    /**
     * Maximum allowed instances count.
     */
    maximum: number;
    /**
     * Minimum allowed instances count.
     */
    minimum: number;
    /**
     * The version of the template defined, for instance 1.
     */
    version: number;
}

/**
 * A private endpoint connection
 */
export interface PrivateEndpointConnectionResponse {
    /**
     * Group id of the private endpoint.
     */
    groupId: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * Private endpoint which the connection belongs to.
     */
    privateEndpoint: PrivateEndpointPropertyResponse;
    /**
     * Connection State of the Private Endpoint Connection.
     */
    privateLinkServiceConnectionState: PrivateLinkServiceConnectionStatePropertyResponse;
    /**
     * Provisioning state of the private endpoint.
     */
    provisioningState: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    systemData: SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}

/**
 * Private endpoint which the connection belongs to.
 */
export interface PrivateEndpointPropertyResponse {
    /**
     * Resource id of the private endpoint.
     */
    id: string;
}

/**
 * Connection State of the Private Endpoint Connection.
 */
export interface PrivateLinkServiceConnectionStatePropertyResponse {
    /**
     * Any action that is required beyond basic workflow (approve/ reject/ disconnect)
     */
    actionsRequired: string;
    /**
     * The private link service connection description.
     */
    description?: string;
    /**
     * The private link service connection status.
     */
    status?: string;
}

/**
 * The database suspension details. If the database is suspended, this object contains information related to the database's suspension state.
 */
export interface SuspensionDetailsResponse {
    /**
     * The starting date and time of the suspension state.
     */
    suspensionStartDate?: string;
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
 * Tables that will be included and excluded in the follower database
 */
export interface TableLevelSharingPropertiesResponse {
    /**
     * List of external tables to exclude from the follower database
     */
    externalTablesToExclude?: string[];
    /**
     * List of external tables to include in the follower database
     */
    externalTablesToInclude?: string[];
    /**
     * List of functions to exclude from the follower database
     */
    functionsToExclude?: string[];
    /**
     * List of functions to include in the follower database
     */
    functionsToInclude?: string[];
    /**
     * List of materialized views to exclude from the follower database
     */
    materializedViewsToExclude?: string[];
    /**
     * List of materialized views to include in the follower database
     */
    materializedViewsToInclude?: string[];
    /**
     * List of tables to exclude from the follower database
     */
    tablesToExclude?: string[];
    /**
     * List of tables to include in the follower database
     */
    tablesToInclude?: string[];
}

/**
 * Represents a tenant ID that is trusted by the cluster.
 */
export interface TrustedExternalTenantResponse {
    /**
     * GUID representing an external tenant.
     */
    value?: string;
}

/**
 * A class that contains virtual network definition.
 */
export interface VirtualNetworkConfigurationResponse {
    /**
     * Data management's service public IP address resource id.
     */
    dataManagementPublicIpId: string;
    /**
     * Engine service's public IP address resource id.
     */
    enginePublicIpId: string;
    /**
     * When enabled, the cluster is deployed into the configured subnet, when disabled it will be removed from the subnet.
     */
    state?: string;
    /**
     * The subnet resource id.
     */
    subnetId: string;
}
/**
 * virtualNetworkConfigurationResponseProvideDefaults sets the appropriate defaults for VirtualNetworkConfigurationResponse
 */
export function virtualNetworkConfigurationResponseProvideDefaults(val: VirtualNetworkConfigurationResponse): VirtualNetworkConfigurationResponse {
    return {
        ...val,
        state: (val.state) ?? "Enabled",
    };
}
