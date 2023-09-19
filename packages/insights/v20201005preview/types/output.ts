import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * A header to add to the WebTest.
     */
    export interface HeaderFieldResponse {
        /**
         * The name of the header.
         */
        headerFieldName?: string;
        /**
         * The value of the header.
         */
        headerFieldValue?: string;
    }

    /**
     * Geo-physical location to run a WebTest from. You must specify one or more locations for the test to run from.
     */
    export interface WebTestGeolocationResponse {
        /**
         * Location ID for the WebTest to run from.
         */
        location?: string;
    }

    /**
     * An XML configuration specification for a WebTest.
     */
    export interface WebTestPropertiesResponseConfiguration {
        /**
         * The XML specification of a WebTest to run against an application.
         */
        webTest?: string;
    }

    /**
     * The collection of content validation properties
     */
    export interface WebTestPropertiesResponseContentValidation {
        /**
         * Content to look for in the return of the WebTest.  Must not be null or empty.
         */
        contentMatch?: string;
        /**
         * When set, this value makes the ContentMatch validation case insensitive.
         */
        ignoreCase?: boolean;
        /**
         * When true, validation will pass if there is a match for the ContentMatch string.  If false, validation will fail if there is a match
         */
        passIfTextFound?: boolean;
    }

    /**
     * The collection of request properties
     */
    export interface WebTestPropertiesResponseRequest {
        /**
         * Follow redirects for this web test.
         */
        followRedirects?: boolean;
        /**
         * List of headers and their values to add to the WebTest call.
         */
        headers?: HeaderFieldResponse[];
        /**
         * Http verb to use for this web test.
         */
        httpVerb?: string;
        /**
         * Parse Dependent request for this WebTest.
         */
        parseDependentRequests?: boolean;
        /**
         * Base64 encoded string body to send with this web test.
         */
        requestBody?: string;
        /**
         * Url location to test.
         */
        requestUrl?: string;
    }

    /**
     * The collection of validation rule properties
     */
    export interface WebTestPropertiesResponseValidationRules {
        /**
         * The collection of content validation properties
         */
        contentValidation?: WebTestPropertiesResponseContentValidation;
        /**
         * Validate that the WebTest returns the http status code provided.
         */
        expectedHttpStatusCode?: number;
        /**
         * When set, validation will ignore the status code.
         */
        ignoreHttpsStatusCode?: boolean;
        /**
         * A number of days to check still remain before the the existing SSL cert expires.  Value must be positive and the SSLCheck must be set to true.
         */
        sSLCertRemainingLifetimeCheck?: number;
        /**
         * Checks to see if the SSL cert is still valid.
         */
        sSLCheck?: boolean;
    }
