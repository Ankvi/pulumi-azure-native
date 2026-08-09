import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Account resource properties.
 */
export interface AccountResourcePropertiesArgs {
    /**
     * Account configuration. This can only be set at RecommendationsService Account creation.
     */
    configuration?: pulumi.Input<string | enums.AccountConfiguration | undefined>;
    /**
     * The list of CORS details.
     */
    cors?: pulumi.Input<pulumi.Input<CorsRuleArgs>[] | undefined>;
    /**
     * The list of service endpoints authentication details.
     */
    endpointAuthentications?: pulumi.Input<pulumi.Input<EndpointAuthenticationArgs>[] | undefined>;
    /**
     * Connection string to write Accounts reports to.
     */
    reportsConnectionString?: pulumi.Input<string | undefined>;
}

/**
 * CORS details.
 */
export interface CorsRuleArgs {
    /**
     * The request headers that the origin domain may specify on the CORS request.
     */
    allowedHeaders?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The methods (HTTP request verbs) that the origin domain may use for a CORS request.
     */
    allowedMethods?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The origin domains that are permitted to make a request against the service via CORS.
     */
    allowedOrigins: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The response headers to expose to CORS clients.
     */
    exposedHeaders?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The number of seconds that the client/browser should cache a preflight response.
     */
    maxAgeInSeconds?: pulumi.Input<number | undefined>;
}

/**
 * Service endpoints authentication details.
 */
export interface EndpointAuthenticationArgs {
    /**
     * AAD tenant ID.
     */
    aadTenantID?: pulumi.Input<string | undefined>;
    /**
     * AAD principal ID.
     */
    principalID?: pulumi.Input<string | undefined>;
    /**
     * AAD principal type.
     */
    principalType?: pulumi.Input<string | enums.PrincipalType | undefined>;
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
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * The configuration to raw CDM data to be used as Modeling resource input.
 */
export interface ModelingInputDataArgs {
    /**
     * Connection string to raw input data.
     */
    connectionString?: pulumi.Input<string | undefined>;
}

/**
 * Modeling resource properties.
 */
export interface ModelingResourcePropertiesArgs {
    /**
     * Modeling features controls the set of supported scenarios\models being computed. This can only be set at Modeling creation.
     */
    features?: pulumi.Input<string | enums.ModelingFeatures | undefined>;
    /**
     * Modeling frequency controls the modeling compute frequency.
     */
    frequency?: pulumi.Input<string | enums.ModelingFrequency | undefined>;
    /**
     * The configuration to raw CDM data to be used as Modeling resource input.
     */
    inputData?: pulumi.Input<ModelingInputDataArgs | undefined>;
    /**
     * Modeling size controls the maximum supported input data size.
     */
    size?: pulumi.Input<string | enums.ModelingSize | undefined>;
}

/**
 * ServiceEndpoint resource properties.
 */
export interface ServiceEndpointResourcePropertiesArgs {
    /**
     * ServiceEndpoint pre-allocated capacity controls the maximum requests-per-second allowed for that endpoint. Only applicable when Account configuration is Capacity.
     */
    preAllocatedCapacity?: pulumi.Input<number | undefined>;
}
