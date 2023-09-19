import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * ApiKeyAuthCredentials class for ApiKey based Auth.
 */
export interface ApiKeyAuthCredentialsResponse {
    /**
     * Properties of the key vault.
     */
    apiKey: KeyVaultPropertiesResponse;
    /**
     * Enum for different types of AuthCredentials supported.
     * Expected value is 'ApiKeyAuthCredentials'.
     */
    kind: "ApiKeyAuthCredentials";
}

/**
 * Api properties.
 */
export interface ApiPropertiesResponse {
    /**
     * Interval in minutes for which the weather data for the api needs to be refreshed.
     */
    apiFreshnessTimeInMinutes?: number;
}

/**
 * DataConnector Properties.
 */
export interface DataConnectorPropertiesResponse {
    /**
     * AuthCredentials abstract base class for Auth Purpose.
     */
    credentials: ApiKeyAuthCredentialsResponse | OAuthClientCredentialsResponse;
}

/**
 * The resource management error additional info.
 */
export interface ErrorAdditionalInfoResponse {
    /**
     * The additional info.
     */
    info: any;
    /**
     * The additional info type.
     */
    type: string;
}

/**
 * The error detail.
 */
export interface ErrorDetailResponse {
    /**
     * The error additional info.
     */
    additionalInfo: ErrorAdditionalInfoResponse[];
    /**
     * The error code.
     */
    code: string;
    /**
     * The error details.
     */
    details: ErrorDetailResponse[];
    /**
     * The error message.
     */
    message: string;
    /**
     * The error target.
     */
    target: string;
}

/**
 * Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.).
 */
export interface ErrorResponseResponse {
    /**
     * The error object.
     */
    error?: ErrorDetailResponse;
}

/**
 * Identity for the resource.
 */
export interface IdentityResponse {
    /**
     * The principal ID of resource identity. The value must be an UUID.
     */
    principalId: string;
    /**
     * The tenant ID of resource. The value must be an UUID.
     */
    tenantId: string;
    /**
     * The identity type.
     */
    type?: string;
}

/**
 * Properties of the key vault.
 */
export interface KeyVaultPropertiesResponse {
    /**
     * Name of Key Vault key.
     */
    keyName: string;
    /**
     * Uri of the key vault.
     */
    keyVaultUri: string;
    /**
     * Version of Key Vault key.
     */
    keyVersion: string;
}

/**
 * OAuthClientCredentials for clientId clientSecret auth.
 */
export interface OAuthClientCredentialsResponse {
    /**
     * ClientId associated with the provider.
     */
    clientId: string;
    /**
     * Properties of the key vault.
     */
    clientSecret: KeyVaultPropertiesResponse;
    /**
     * Enum for different types of AuthCredentials supported.
     * Expected value is 'OAuthClientCredentials'.
     */
    kind: "OAuthClientCredentials";
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
 * Sensor integration request model.
 */
export interface SensorIntegrationResponse {
    /**
     * Sensor integration enable state.
     */
    enabled?: string;
    /**
     * Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.).
     */
    provisioningInfo?: ErrorResponseResponse;
    /**
     * Sensor integration instance provisioning state.
     */
    provisioningState: string;
}

/**
 * Solution resource properties.
 */
export interface SolutionPropertiesResponse {
    /**
     * SaaS application Marketplace Publisher Id.
     */
    marketplacePublisherId: string;
    /**
     * SaaS application Offer Id.
     */
    offerId: string;
    /**
     * Partner Id of the Solution.
     */
    partnerId: string;
    /**
     * SaaS application Plan Id.
     */
    planId: string;
    /**
     * Role Assignment Id.
     */
    roleAssignmentId?: string;
    /**
     * SaaS subscriptionId of the installed SaaS application.
     */
    saasSubscriptionId: string;
    /**
     * SaaS subscription name of the installed SaaS application.
     */
    saasSubscriptionName: string;
    /**
     * SaaS application Term Id.
     */
    termId: string;
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


