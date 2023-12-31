import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The Private Endpoint Connection resource.
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
     * The resource of private end point.
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
     * Required property for system data
     */
    systemData: SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}

/**
 * The Private Endpoint resource.
 */
export interface PrivateEndpointResponse {
    /**
     * The ARM identifier for Private Endpoint
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
 * An access policy entry.
 */
export interface ServiceAccessPolicyEntryResponse {
    /**
     * An Azure AD object ID (User or Apps) that is allowed access to the FHIR service.
     */
    objectId: string;
}

/**
 * Authentication configuration information
 */
export interface ServiceAuthenticationConfigurationInfoResponse {
    /**
     * The audience url for the service
     */
    audience?: string;
    /**
     * The authority url for the service
     */
    authority?: string;
    /**
     * If the SMART on FHIR proxy is enabled
     */
    smartProxyEnabled?: boolean;
}

/**
 * The settings for the CORS configuration of the service instance.
 */
export interface ServiceCorsConfigurationInfoResponse {
    /**
     * If credentials are allowed via CORS.
     */
    allowCredentials?: boolean;
    /**
     * The headers to be allowed via CORS.
     */
    headers?: string[];
    /**
     * The max age to be allowed via CORS.
     */
    maxAge?: number;
    /**
     * The methods to be allowed via CORS.
     */
    methods?: string[];
    /**
     * The origins to be allowed via CORS.
     */
    origins?: string[];
}

/**
 * The settings for the Cosmos DB database backing the service.
 */
export interface ServiceCosmosDbConfigurationInfoResponse {
    /**
     * The URI of the customer-managed key for the backing database.
     */
    keyVaultKeyUri?: string;
    /**
     * The provisioned throughput for the backing database.
     */
    offerThroughput?: number;
}

/**
 * Export operation configuration information
 */
export interface ServiceExportConfigurationInfoResponse {
    /**
     * The name of the default export storage account.
     */
    storageAccountName?: string;
}

/**
 * The properties of a service instance.
 */
export interface ServicesPropertiesResponse {
    /**
     * The access policies of the service instance.
     */
    accessPolicies?: ServiceAccessPolicyEntryResponse[];
    /**
     * The authentication configuration for the service instance.
     */
    authenticationConfiguration?: ServiceAuthenticationConfigurationInfoResponse;
    /**
     * The settings for the CORS configuration of the service instance.
     */
    corsConfiguration?: ServiceCorsConfigurationInfoResponse;
    /**
     * The settings for the Cosmos DB database backing the service.
     */
    cosmosDbConfiguration?: ServiceCosmosDbConfigurationInfoResponse;
    /**
     * The settings for the export operation of the service instance.
     */
    exportConfiguration?: ServiceExportConfigurationInfoResponse;
    /**
     * The list of private endpoint connections that are set up for this resource.
     */
    privateEndpointConnections?: PrivateEndpointConnectionResponse[];
    /**
     * The provisioning state.
     */
    provisioningState: string;
    /**
     * Control permission for data plane traffic coming from public networks while private endpoint is enabled.
     */
    publicNetworkAccess?: string;
}

/**
 * Setting indicating whether the service has a managed identity associated with it.
 */
export interface ServicesResourceResponseIdentity {
    /**
     * The principal ID of the resource identity.
     */
    principalId: string;
    /**
     * The tenant ID of the resource.
     */
    tenantId: string;
    /**
     * Type of identity being specified, currently SystemAssigned and None are allowed.
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
