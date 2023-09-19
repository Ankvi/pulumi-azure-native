import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * An API Version Set contains the common configuration for a set of API Versions relating 
     */
    export interface ApiVersionSetContractDetailsResponse {
        /**
         * Description of API Version Set.
         */
        description?: string;
        /**
         * Identifier for existing API Version Set. Omit this value to create a new Version Set.
         */
        id?: string;
        /**
         * Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
         */
        versionHeaderName?: string;
        /**
         * Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
         */
        versionQueryName?: string;
        /**
         * An value that determines where the API Version identifier will be located in a HTTP request.
         */
        versioningScheme?: string;
    }

    /**
     * API Authentication Settings.
     */
    export interface AuthenticationSettingsContractResponse {
        /**
         * OAuth2 Authentication settings
         */
        oAuth2?: OAuth2AuthenticationSettingsContractResponse;
        /**
         * OpenID Connect Authentication Settings
         */
        openid?: OpenIdAuthenticationSettingsContractResponse;
        /**
         * Specifies whether subscription key is required during call to this API, true - API is included into closed products only, false - API is included into open products alone, null - there is a mix of products.
         */
        subscriptionKeyRequired?: boolean;
    }

    /**
     * API OAuth2 Authentication settings details.
     */
    export interface OAuth2AuthenticationSettingsContractResponse {
        /**
         * OAuth authorization server identifier.
         */
        authorizationServerId?: string;
        /**
         * operations scope.
         */
        scope?: string;
    }

    /**
     * API OAuth2 Authentication settings details.
     */
    export interface OpenIdAuthenticationSettingsContractResponse {
        /**
         * How to send token to the server.
         */
        bearerTokenSendingMethods?: string[];
        /**
         * OAuth authorization server identifier.
         */
        openidProviderId?: string;
    }

    /**
     * Subscription key parameter names details.
     */
    export interface SubscriptionKeyParameterNamesContractResponse {
        /**
         * Subscription key header name.
         */
        header?: string;
        /**
         * Subscription key query string parameter name.
         */
        query?: string;
    }
