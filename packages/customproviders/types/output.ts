import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The route definition for an action implemented by the custom resource provider.
 */
export interface CustomRPActionRouteDefinitionResponse {
    /**
     * The route definition endpoint URI that the custom resource provider will proxy requests to. This can be in the form of a flat URI (e.g. 'https://testendpoint/') or can specify to route via a path (e.g. 'https://testendpoint/{requestPath}')
     */
    endpoint: string;
    /**
     * The name of the route definition. This becomes the name for the ARM extension (e.g. '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomProviders/resourceProviders/{resourceProviderName}/{name}')
     */
    name: string;
    /**
     * The routing types that are supported for action requests.
     */
    routingType?: string;
}

/**
 * The route definition for a resource implemented by the custom resource provider.
 */
export interface CustomRPResourceTypeRouteDefinitionResponse {
    /**
     * The route definition endpoint URI that the custom resource provider will proxy requests to. This can be in the form of a flat URI (e.g. 'https://testendpoint/') or can specify to route via a path (e.g. 'https://testendpoint/{requestPath}')
     */
    endpoint: string;
    /**
     * The name of the route definition. This becomes the name for the ARM extension (e.g. '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomProviders/resourceProviders/{resourceProviderName}/{name}')
     */
    name: string;
    /**
     * The routing types that are supported for resource requests.
     */
    routingType?: string;
}

/**
 * A validation to apply on custom resource provider requests.
 */
export interface CustomRPValidationsResponse {
    /**
     * A link to the validation specification. The specification must be hosted on raw.githubusercontent.com.
     */
    specification: string;
    /**
     * The type of validation to run against a matching request.
     */
    validationType?: string;
}
