import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Account resource properties.
 */
export interface AccountResourcePropertiesArgs {
    /**
     * Account configuration. This can only be set at RecommendationsService Account creation.
     */
    configuration?: pulumi.Input<string | enums.AccountConfiguration>;
    /**
     * The list of CORS details.
     */
    cors?: pulumi.Input<pulumi.Input<CorsRuleArgs>[]>;
    /**
     * The list of service endpoints authentication details.
     */
    endpointAuthentications?: pulumi.Input<pulumi.Input<EndpointAuthenticationArgs>[]>;
    /**
     * Connection string to write Accounts reports to.
     */
    reportsConnectionString?: pulumi.Input<string>;
}

/**
 * CORS details.
 */
export interface CorsRuleArgs {
    /**
     * The request headers that the origin domain may specify on the CORS request.
     */
    allowedHeaders?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The methods (HTTP request verbs) that the origin domain may use for a CORS request.
     */
    allowedMethods?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The origin domains that are permitted to make a request against the service via CORS.
     */
    allowedOrigins: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The response headers to expose to CORS clients.
     */
    exposedHeaders?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The number of seconds that the client/browser should cache a preflight response.
     */
    maxAgeInSeconds?: pulumi.Input<number>;
}

/**
 * Service endpoints authentication details.
 */
export interface EndpointAuthenticationArgs {
    /**
     * AAD tenant ID.
     */
    aadTenantID?: pulumi.Input<string>;
    /**
     * AAD principal ID.
     */
    principalID?: pulumi.Input<string>;
    /**
     * AAD principal type.
     */
    principalType?: pulumi.Input<string | enums.PrincipalType>;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The configuration to raw CDM data to be used as Modeling resource input.
 */
export interface ModelingInputDataArgs {
    /**
     * Connection string to raw input data.
     */
    connectionString?: pulumi.Input<string>;
}

/**
 * Modeling resource properties.
 */
export interface ModelingResourcePropertiesArgs {
    /**
     * Modeling features controls the set of supported scenarios\models being computed. This can only be set at Modeling creation.
     */
    features?: pulumi.Input<string | enums.ModelingFeatures>;
    /**
     * Modeling frequency controls the modeling compute frequency.
     */
    frequency?: pulumi.Input<string | enums.ModelingFrequency>;
    /**
     * The configuration to raw CDM data to be used as Modeling resource input.
     */
    inputData?: pulumi.Input<ModelingInputDataArgs>;
    /**
     * Modeling size controls the maximum supported input data size.
     */
    size?: pulumi.Input<string | enums.ModelingSize>;
}

/**
 * ServiceEndpoint resource properties.
 */
export interface ServiceEndpointResourcePropertiesArgs {
    /**
     * ServiceEndpoint pre-allocated capacity controls the maximum requests-per-second allowed for that endpoint. Only applicable when Account configuration is Capacity.
     */
    preAllocatedCapacity?: pulumi.Input<number>;
}
