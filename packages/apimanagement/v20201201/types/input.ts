import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Criteria to limit import of WSDL to a subset of the document.
     */
    export interface ApiCreateOrUpdatePropertiesWsdlSelectorArgs {
        /**
         * Name of endpoint(port) to import from WSDL
         */
        wsdlEndpointName?: pulumi.Input<string>;
        /**
         * Name of service to import from WSDL
         */
        wsdlServiceName?: pulumi.Input<string>;
    }

    /**
     * An API Version Set contains the common configuration for a set of API Versions relating 
     */
    export interface ApiVersionSetContractDetailsArgs {
        /**
         * Description of API Version Set.
         */
        description?: pulumi.Input<string>;
        /**
         * Identifier for existing API Version Set. Omit this value to create a new Version Set.
         */
        id?: pulumi.Input<string>;
        /**
         * The display Name of the API Version Set.
         */
        name?: pulumi.Input<string>;
        /**
         * Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
         */
        versionHeaderName?: pulumi.Input<string>;
        /**
         * Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
         */
        versionQueryName?: pulumi.Input<string>;
        /**
         * An value that determines where the API Version identifier will be located in a HTTP request.
         */
        versioningScheme?: pulumi.Input<string>;
    }

    /**
     * API Authentication Settings.
     */
    export interface AuthenticationSettingsContractArgs {
        /**
         * OAuth2 Authentication settings
         */
        oAuth2?: pulumi.Input<OAuth2AuthenticationSettingsContractArgs>;
        /**
         * OpenID Connect Authentication Settings
         */
        openid?: pulumi.Input<OpenIdAuthenticationSettingsContractArgs>;
    }

    /**
     * API OAuth2 Authentication settings details.
     */
    export interface OAuth2AuthenticationSettingsContractArgs {
        /**
         * OAuth authorization server identifier.
         */
        authorizationServerId?: pulumi.Input<string>;
        /**
         * operations scope.
         */
        scope?: pulumi.Input<string>;
    }

    /**
     * API OAuth2 Authentication settings details.
     */
    export interface OpenIdAuthenticationSettingsContractArgs {
        /**
         * How to send token to the server.
         */
        bearerTokenSendingMethods?: pulumi.Input<pulumi.Input<string | enums.BearerTokenSendingMethods>[]>;
        /**
         * OAuth authorization server identifier.
         */
        openidProviderId?: pulumi.Input<string>;
    }

    /**
     * Subscription key parameter names details.
     */
    export interface SubscriptionKeyParameterNamesContractArgs {
        /**
         * Subscription key header name.
         */
        header?: pulumi.Input<string>;
        /**
         * Subscription key query string parameter name.
         */
        query?: pulumi.Input<string>;
    }
