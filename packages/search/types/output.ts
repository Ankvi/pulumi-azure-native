import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Indicates that either the API key or an access token from a Microsoft Entra ID tenant can be used for authentication.
 */
export interface DataPlaneAadOrApiKeyAuthOptionResponse {
    /**
     * Describes what response the data plane API of a search service would send for requests that failed authentication.
     */
    aadAuthFailureMode?: string;
}

/**
 * Defines the options for how the search service authenticates a data plane request. This cannot be set if 'disableLocalAuth' is set to true.
 */
export interface DataPlaneAuthOptionsResponse {
    /**
     * Indicates that either the API key or an access token from a Microsoft Entra ID tenant can be used for authentication.
     */
    aadOrApiKey?: DataPlaneAadOrApiKeyAuthOptionResponse;
    /**
     * Indicates that only the API key can be used for authentication.
     */
    apiKeyOnly?: any;
}

/**
 * Describes a policy that determines how resources within the search service are to be encrypted with customer managed keys.
 */
export interface EncryptionWithCmkResponse {
    /**
     * Returns the status of search service compliance with respect to non-CMK-encrypted objects. If a service has more than one unencrypted object, and enforcement is enabled, the service is marked as noncompliant.
     */
    encryptionComplianceStatus: string;
    /**
     * Describes how a search service should enforce compliance if it finds objects that aren't encrypted with the customer-managed key.
     */
    enforcement?: string;
}

/**
 * Details about the search service identity. A null value indicates that the search service has no identity assigned.
 */
export interface IdentityResponse {
    /**
     * The principal ID of the system-assigned identity of the search service.
     */
    principalId: string;
    /**
     * The tenant ID of the system-assigned identity of the search service.
     */
    tenantId: string;
    /**
     * The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an identity created by the system and a set of user assigned identities. The type 'None' will remove all identities from the service.
     */
    type: string;
    /**
     * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource IDs in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
}

/**
 * The IP restriction rule of the Azure AI Search service.
 */
export interface IpRuleResponse {
    /**
     * Value corresponding to a single IPv4 address (eg., 123.1.2.3) or an IP range in CIDR format (eg., 123.1.2.3/24) to be allowed.
     */
    value?: string;
}

/**
 * Network specific rules that determine how the Azure AI Search service may be reached.
 */
export interface NetworkRuleSetResponse {
    /**
     * Possible origins of inbound traffic that can bypass the rules defined in the 'ipRules' section.
     */
    bypass?: string;
    /**
     * A list of IP restriction rules that defines the inbound network(s) with allowing access to the search service endpoint. At the meantime, all other public IP networks are blocked by the firewall. These restriction rules are applied only when the 'publicNetworkAccess' of the search service is 'enabled'; otherwise, traffic over public interface is not allowed even with any public IP rules, and private endpoint connections would be the exclusive access method.
     */
    ipRules?: IpRuleResponse[];
}

/**
 * Describes the properties of an existing private endpoint connection to the search service.
 */
export interface PrivateEndpointConnectionPropertiesResponse {
    /**
     * The group ID of the Azure resource for which the private link service is for.
     */
    groupId?: string;
    /**
     * The private endpoint resource from Microsoft.Network provider.
     */
    privateEndpoint?: PrivateEndpointConnectionPropertiesResponsePrivateEndpoint;
    /**
     * Describes the current state of an existing Azure Private Link service connection to the private endpoint.
     */
    privateLinkServiceConnectionState?: PrivateEndpointConnectionPropertiesResponsePrivateLinkServiceConnectionState;
    /**
     * The provisioning state of the private link service connection. Valid values are Updating, Deleting, Failed, Succeeded, Incomplete, or Canceled.
     */
    provisioningState?: string;
}
/**
 * privateEndpointConnectionPropertiesResponseProvideDefaults sets the appropriate defaults for PrivateEndpointConnectionPropertiesResponse
 */
export function privateEndpointConnectionPropertiesResponseProvideDefaults(val: PrivateEndpointConnectionPropertiesResponse): PrivateEndpointConnectionPropertiesResponse {
    return {
        ...val,
        privateLinkServiceConnectionState: (val.privateLinkServiceConnectionState ? privateEndpointConnectionPropertiesResponsePrivateLinkServiceConnectionStateProvideDefaults(val.privateLinkServiceConnectionState) : undefined),
    };
}

/**
 * The private endpoint resource from Microsoft.Network provider.
 */
export interface PrivateEndpointConnectionPropertiesResponsePrivateEndpoint {
    /**
     * The resource ID of the private endpoint resource from Microsoft.Network provider.
     */
    id?: string;
}

/**
 * Describes the current state of an existing Azure Private Link service connection to the private endpoint.
 */
export interface PrivateEndpointConnectionPropertiesResponsePrivateLinkServiceConnectionState {
    /**
     * A description of any extra actions that may be required.
     */
    actionsRequired?: string;
    /**
     * The description for the private link service connection state.
     */
    description?: string;
    /**
     * Status of the the private link service connection. Valid values are Pending, Approved, Rejected, or Disconnected.
     */
    status?: string;
}
/**
 * privateEndpointConnectionPropertiesResponsePrivateLinkServiceConnectionStateProvideDefaults sets the appropriate defaults for PrivateEndpointConnectionPropertiesResponsePrivateLinkServiceConnectionState
 */
export function privateEndpointConnectionPropertiesResponsePrivateLinkServiceConnectionStateProvideDefaults(val: PrivateEndpointConnectionPropertiesResponsePrivateLinkServiceConnectionState): PrivateEndpointConnectionPropertiesResponsePrivateLinkServiceConnectionState {
    return {
        ...val,
        actionsRequired: (val.actionsRequired) ?? "None",
    };
}

/**
 * Describes an existing private endpoint connection to the Azure AI Search service.
 */
export interface PrivateEndpointConnectionResponse {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * Describes the properties of an existing private endpoint connection to the Azure AI Search service.
     */
    properties?: PrivateEndpointConnectionPropertiesResponse;
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
 * privateEndpointConnectionResponseProvideDefaults sets the appropriate defaults for PrivateEndpointConnectionResponse
 */
export function privateEndpointConnectionResponseProvideDefaults(val: PrivateEndpointConnectionResponse): PrivateEndpointConnectionResponse {
    return {
        ...val,
        properties: (val.properties ? privateEndpointConnectionPropertiesResponseProvideDefaults(val.properties) : undefined),
    };
}

/**
 * Describes an API key for a given Azure AI Search service that conveys read-only permissions on the docs collection of an index.
 */
export interface QueryKeyResponse {
    /**
     * The value of the query API key.
     */
    key: string;
    /**
     * The name of the query API key. Query names are optional, but assigning a name can help you remember how it's used.
     */
    name: string;
}

/**
 * Describes the properties of an existing shared private link resource managed by the Azure AI Search service.
 */
export interface SharedPrivateLinkResourcePropertiesResponse {
    /**
     * The group ID from the provider of resource the shared private link resource is for.
     */
    groupId?: string;
    /**
     * The resource ID of the resource the shared private link resource is for.
     */
    privateLinkResourceId?: string;
    /**
     * The provisioning state of the shared private link resource. Valid values are Updating, Deleting, Failed, Succeeded or Incomplete.
     */
    provisioningState?: string;
    /**
     * The message for requesting approval of the shared private link resource.
     */
    requestMessage?: string;
    /**
     * Optional. Can be used to specify the Azure Resource Manager location of the resource for which a shared private link is being created. This is only required for those resources whose DNS configuration are regional (such as Azure Kubernetes Service).
     */
    resourceRegion?: string;
    /**
     * Status of the shared private link resource. Valid values are Pending, Approved, Rejected or Disconnected.
     */
    status?: string;
}

/**
 * Describes a shared private link resource managed by the Azure AI Search service.
 */
export interface SharedPrivateLinkResourceResponse {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * Describes the properties of a shared private link resource managed by the Azure AI Search service.
     */
    properties?: SharedPrivateLinkResourcePropertiesResponse;
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
 * Defines the SKU of a search service, which determines billing rate and capacity limits.
 */
export interface SkuResponse {
    /**
     * The SKU of the search service. Valid values include: 'free': Shared service. 'basic': Dedicated service with up to 3 replicas. 'standard': Dedicated service with up to 12 partitions and 12 replicas. 'standard2': Similar to standard, but with more capacity per search unit. 'standard3': The largest Standard offering with up to 12 partitions and 12 replicas (or up to 3 partitions with more indexes if you also set the hostingMode property to 'highDensity'). 'storage_optimized_l1': Supports 1TB per partition, up to 12 partitions. 'storage_optimized_l2': Supports 2TB per partition, up to 12 partitions.'
     */
    name?: string;
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
