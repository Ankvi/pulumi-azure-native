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
 * Describes a policy that determines how resources within the search service are to be encrypted with customer=managed keys.
 */
export interface EncryptionWithCmkResponse {
    /**
     * Describes whether the search service is compliant or not with respect to having non-customer-encrypted resources. If a service has more than one non-customer-encrypted resource and 'Enforcement' is 'enabled' then the service will be marked as 'nonCompliant'.
     */
    encryptionComplianceStatus: string;
    /**
     * Describes how a search service should enforce having one or more non-customer-encrypted resources.
     */
    enforcement?: string;
}

/**
 * Identity for the resource.
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
     * The identity type.
     */
    type: string;
}

/**
 * The IP restriction rule of the search service.
 */
export interface IpRuleResponse {
    /**
     * Value corresponding to a single IPv4 address (for example, 123.1.2.3) or an IP range in CIDR format (for example, 123.1.2.3/24) to be allowed.
     */
    value?: string;
}

/**
 * Network-specific rules that determine how the search service can be reached.
 */
export interface NetworkRuleSetResponse {
    /**
     * A list of IP restriction rules used for an IP firewall. Any IPs that do not match the rules are blocked by the firewall. These rules are only applied when the 'publicNetworkAccess' of the search service is 'enabled'.
     */
    ipRules?: IpRuleResponse[];
}

/**
 * Describes the properties of an existing Private Endpoint connection to the search service.
 */
export interface PrivateEndpointConnectionPropertiesResponse {
    /**
     * The group id from the provider of resource the private link service connection is for.
     */
    groupId?: string;
    /**
     * The private endpoint resource from Microsoft.Network provider.
     */
    privateEndpoint?: PrivateEndpointConnectionPropertiesResponsePrivateEndpoint;
    /**
     * Describes the current state of an existing Private Link Service connection to the Azure Private Endpoint.
     */
    privateLinkServiceConnectionState?: PrivateEndpointConnectionPropertiesResponsePrivateLinkServiceConnectionState;
    /**
     * The provisioning state of the private link service connection. Valid values are Updating, Deleting, Failed, Succeeded, or Incomplete
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
     * The resource id of the private endpoint resource from Microsoft.Network provider.
     */
    id?: string;
}

/**
 * Describes the current state of an existing Private Link Service connection to the Azure Private Endpoint.
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
 * Describes an existing private endpoint connection to the search service.
 */
export interface PrivateEndpointConnectionResponse {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * Describes the properties of an existing private endpoint connection to the search service.
     */
    properties?: PrivateEndpointConnectionPropertiesResponse;
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
 * Describes an API key for a given search service that has permissions for query operations only.
 */
export interface QueryKeyResponse {
    /**
     * The value of the query API key.
     */
    key: string;
    /**
     * The name of the query API key; may be empty.
     */
    name: string;
}

/**
 * Describes the properties of an existing Shared Private Link Resource managed by the search service.
 */
export interface SharedPrivateLinkResourcePropertiesResponse {
    /**
     * The group id from the provider of resource the shared private link resource is for.
     */
    groupId?: string;
    /**
     * The resource id of the resource the shared private link resource is for.
     */
    privateLinkResourceId?: string;
    /**
     * The provisioning state of the shared private link resource. Valid values are Updating, Deleting, Failed, Succeeded or Incomplete.
     */
    provisioningState?: string;
    /**
     * The request message for requesting approval of the shared private link resource.
     */
    requestMessage?: string;
    /**
     * Optional. Can be used to specify the Azure Resource Manager location of the resource to which a shared private link is to be created. This is only required for those resources whose DNS configuration are regional (such as Azure Kubernetes Service).
     */
    resourceRegion?: string;
    /**
     * Status of the shared private link resource. Valid values are Pending, Approved, Rejected or Disconnected.
     */
    status?: string;
}

/**
 * Describes a Shared Private Link Resource managed by the search service.
 */
export interface SharedPrivateLinkResourceResponse {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * Describes the properties of a Shared Private Link Resource managed by the search service.
     */
    properties?: SharedPrivateLinkResourcePropertiesResponse;
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
