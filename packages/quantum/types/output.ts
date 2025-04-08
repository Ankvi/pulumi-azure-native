import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Azure quantum workspace Api key details.
 */
export interface ApiKeyResponse {
    /**
     * The creation time of the api key.
     */
    createdAt?: string;
    /**
     * The Api key.
     */
    key: string;
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
 * Information about a Provider. A Provider is an entity that offers Targets to run Azure Quantum Jobs.
 */
export interface ProviderResponse {
    /**
     * The provider's marketplace application display name.
     */
    applicationName?: string;
    /**
     * A Uri identifying the specific instance of this provider.
     */
    instanceUri?: string;
    /**
     * Unique id of this provider.
     */
    providerId?: string;
    /**
     * The sku associated with pricing information for this provider.
     */
    providerSku?: string;
    /**
     * Provisioning status field
     */
    provisioningState?: string;
    /**
     * Id to track resource usage for the provider.
     */
    resourceUsageId?: string;
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
 * Properties of a Workspace
 */
export interface WorkspaceResourcePropertiesResponse {
    /**
     * Indicator of enablement of the Quantum workspace Api keys.
     */
    apiKeyEnabled?: boolean;
    /**
     * The URI of the workspace endpoint.
     */
    endpointUri: string;
    /**
     * List of Providers selected for this Workspace
     */
    providers?: ProviderResponse[];
    /**
     * Provisioning status field
     */
    provisioningState: string;
    /**
     * ARM Resource Id of the storage account associated with this workspace.
     */
    storageAccount?: string;
    /**
     * Whether the current workspace is ready to accept Jobs.
     */
    usable: string;
}
