import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Account resource properties.
 */
export interface AccountResourceResponseProperties {
    /**
     * Account configuration. This can only be set at RecommendationsService Account creation.
     */
    configuration?: string;
    /**
     * The list of CORS details.
     */
    cors?: CorsRuleResponse[];
    /**
     * The list of service endpoints authentication details.
     */
    endpointAuthentications?: EndpointAuthenticationResponse[];
    /**
     * The resource provisioning state.
     */
    provisioningState: string;
    /**
     * Connection string to write Accounts reports to.
     */
    reportsConnectionString?: string;
}

/**
 * CORS details.
 */
export interface CorsRuleResponse {
    /**
     * The request headers that the origin domain may specify on the CORS request.
     */
    allowedHeaders?: string[];
    /**
     * The methods (HTTP request verbs) that the origin domain may use for a CORS request.
     */
    allowedMethods?: string[];
    /**
     * The origin domains that are permitted to make a request against the service via CORS.
     */
    allowedOrigins: string[];
    /**
     * The response headers to expose to CORS clients.
     */
    exposedHeaders?: string[];
    /**
     * The number of seconds that the client/browser should cache a preflight response.
     */
    maxAgeInSeconds?: number;
}

/**
 * Service endpoints authentication details.
 */
export interface EndpointAuthenticationResponse {
    /**
     * AAD tenant ID.
     */
    aadTenantID?: string;
    /**
     * AAD principal ID.
     */
    principalID?: string;
    /**
     * AAD principal type.
     */
    principalType?: string;
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
 * The configuration to raw CDM data to be used as Modeling resource input.
 */
export interface ModelingInputDataResponse {
    /**
     * Connection string to raw input data.
     */
    connectionString?: string;
}

/**
 * Modeling resource properties.
 */
export interface ModelingResourceResponseProperties {
    /**
     * Modeling features controls the set of supported scenarios\models being computed. This can only be set at Modeling creation.
     */
    features?: string;
    /**
     * Modeling frequency controls the modeling compute frequency.
     */
    frequency?: string;
    /**
     * The configuration to raw CDM data to be used as Modeling resource input.
     */
    inputData?: ModelingInputDataResponse;
    /**
     * The resource provisioning state.
     */
    provisioningState: string;
    /**
     * Modeling size controls the maximum supported input data size.
     */
    size?: string;
}

/**
 * ServiceEndpoint resource properties.
 */
export interface ServiceEndpointResourceResponseProperties {
    /**
     * The paired location that will be used by this ServiceEndpoint.
     */
    pairedLocation: string;
    /**
     * ServiceEndpoint pre-allocated capacity controls the maximum requests-per-second allowed for that endpoint. Only applicable when Account configuration is Capacity.
     */
    preAllocatedCapacity?: number;
    /**
     * The resource provisioning state.
     */
    provisioningState: string;
    /**
     * The URL where the ServiceEndpoint API is accessible at.
     */
    url: string;
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
