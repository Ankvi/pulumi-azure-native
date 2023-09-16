import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace customproviders {
    /**
     * The route definition for an action implemented by the custom resource provider.
     */
    export interface CustomRPActionRouteDefinitionArgs {
        /**
         * The route definition endpoint URI that the custom resource provider will proxy requests to. This can be in the form of a flat URI (e.g. 'https://testendpoint/') or can specify to route via a path (e.g. 'https://testendpoint/{requestPath}')
         */
        endpoint: pulumi.Input<string>;
        /**
         * The name of the route definition. This becomes the name for the ARM extension (e.g. '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomProviders/resourceProviders/{resourceProviderName}/{name}')
         */
        name: pulumi.Input<string>;
        /**
         * The routing types that are supported for action requests.
         */
        routingType?: pulumi.Input<string | enums.ActionRouting>;
    }

    /**
     * The route definition for a resource implemented by the custom resource provider.
     */
    export interface CustomRPResourceTypeRouteDefinitionArgs {
        /**
         * The route definition endpoint URI that the custom resource provider will proxy requests to. This can be in the form of a flat URI (e.g. 'https://testendpoint/') or can specify to route via a path (e.g. 'https://testendpoint/{requestPath}')
         */
        endpoint: pulumi.Input<string>;
        /**
         * The name of the route definition. This becomes the name for the ARM extension (e.g. '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomProviders/resourceProviders/{resourceProviderName}/{name}')
         */
        name: pulumi.Input<string>;
        /**
         * The routing types that are supported for resource requests.
         */
        routingType?: pulumi.Input<string | enums.ResourceTypeRouting>;
    }

    /**
     * A validation to apply on custom resource provider requests.
     */
    export interface CustomRPValidationsArgs {
        /**
         * A link to the validation specification. The specification must be hosted on raw.githubusercontent.com.
         */
        specification: pulumi.Input<string>;
        /**
         * The type of validation to run against a matching request.
         */
        validationType?: pulumi.Input<string | enums.ValidationType>;
    }

    export namespace v20180901preview {
        /**
         * The route definition for an action implemented by the custom resource provider.
         */
        export interface CustomRPActionRouteDefinitionArgs {
            /**
             * The route definition endpoint URI that the custom resource provider will proxy requests to. This can be in the form of a flat URI (e.g. 'https://testendpoint/') or can specify to route via a path (e.g. 'https://testendpoint/{requestPath}')
             */
            endpoint: pulumi.Input<string>;
            /**
             * The name of the route definition. This becomes the name for the ARM extension (e.g. '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomProviders/resourceProviders/{resourceProviderName}/{name}')
             */
            name: pulumi.Input<string>;
            /**
             * The routing types that are supported for action requests.
             */
            routingType?: pulumi.Input<string | enums.v20180901preview.ActionRouting>;
        }

        /**
         * The route definition for a resource implemented by the custom resource provider.
         */
        export interface CustomRPResourceTypeRouteDefinitionArgs {
            /**
             * The route definition endpoint URI that the custom resource provider will proxy requests to. This can be in the form of a flat URI (e.g. 'https://testendpoint/') or can specify to route via a path (e.g. 'https://testendpoint/{requestPath}')
             */
            endpoint: pulumi.Input<string>;
            /**
             * The name of the route definition. This becomes the name for the ARM extension (e.g. '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomProviders/resourceProviders/{resourceProviderName}/{name}')
             */
            name: pulumi.Input<string>;
            /**
             * The routing types that are supported for resource requests.
             */
            routingType?: pulumi.Input<string | enums.v20180901preview.ResourceTypeRouting>;
        }

        /**
         * A validation to apply on custom resource provider requests.
         */
        export interface CustomRPValidationsArgs {
            /**
             * A link to the validation specification. The specification must be hosted on raw.githubusercontent.com.
             */
            specification: pulumi.Input<string>;
            /**
             * The type of validation to run against a matching request.
             */
            validationType?: pulumi.Input<string | enums.v20180901preview.ValidationType>;
        }

    }
}
