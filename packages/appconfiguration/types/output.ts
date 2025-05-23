import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * An API key used for authenticating with a configuration store endpoint.
 */
export interface ApiKeyResponse {
    /**
     * A connection string that can be used by supporting clients for authentication.
     */
    connectionString: string;
    /**
     * The key ID.
     */
    id: string;
    /**
     * The last time any of the key's properties were modified.
     */
    lastModified: string;
    /**
     * A name for the key describing its usage.
     */
    name: string;
    /**
     * Whether this key can only be used for read operations.
     */
    readOnly: boolean;
    /**
     * The value of the key that is used for authentication purposes.
     */
    value: string;
}

/**
 * The data plane proxy settings for a configuration store.
 */
export interface DataPlaneProxyPropertiesResponse {
    /**
     * The data plane proxy authentication mode. This property manages the authentication mode of request to the data plane resources.
     */
    authenticationMode?: string;
    /**
     * The data plane proxy private link delegation. This property manages if a request from delegated Azure Resource Manager (ARM) private link is allowed when the data plane resource requires private link.
     */
    privateLinkDelegation?: string;
}

/**
 * The encryption settings for a configuration store.
 */
export interface EncryptionPropertiesResponse {
    /**
     * Key vault properties.
     */
    keyVaultProperties?: KeyVaultPropertiesResponse;
}

/**
 * Settings concerning key vault encryption for a configuration store.
 */
export interface KeyVaultPropertiesResponse {
    /**
     * The client id of the identity which will be used to access key vault.
     */
    identityClientId?: string;
    /**
     * The URI of the key vault key used to encrypt data.
     */
    keyIdentifier?: string;
}

/**
 * A reference to a related private endpoint connection.
 */
export interface PrivateEndpointConnectionReferenceResponse {
    /**
     * The resource ID.
     */
    id: string;
    /**
     * The name of the resource.
     */
    name: string;
    /**
     * The resource of private endpoint.
     */
    privateEndpoint?: PrivateEndpointResponse;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateResponse;
    /**
     * The provisioning status of the private endpoint connection.
     */
    provisioningState: string;
    /**
     * The type of the resource.
     */
    type: string;
}

/**
 * Private endpoint which a connection belongs to.
 */
export interface PrivateEndpointResponse {
    /**
     * The resource Id for private endpoint
     */
    id?: string;
}

/**
 * The state of a private link service connection.
 */
export interface PrivateLinkServiceConnectionStateResponse {
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
 * An identity that can be associated with a resource.
 */
export interface ResourceIdentityResponse {
    /**
     * The principal id of the identity. This property will only be provided for a system-assigned identity.
     */
    principalId: string;
    /**
     * The tenant id associated with the resource's identity. This property will only be provided for a system-assigned identity.
     */
    tenantId: string;
    /**
     * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities.
     */
    type?: string;
    /**
     * The list of user-assigned identities associated with the resource. The user-assigned identity dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: {[key: string]: UserIdentityResponse};
}

/**
 * Describes a configuration store SKU.
 */
export interface SkuResponse {
    /**
     * The SKU name of the configuration store.
     */
    name: string;
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
 * A resource identity that is managed by the user of the service.
 */
export interface UserIdentityResponse {
    /**
     * The client ID of the user-assigned identity.
     */
    clientId: string;
    /**
     * The principal ID of the user-assigned identity.
     */
    principalId: string;
}
