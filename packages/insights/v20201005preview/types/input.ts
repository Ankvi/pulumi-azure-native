import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * A header to add to the WebTest.
     */
    export interface HeaderFieldArgs {
        /**
         * The name of the header.
         */
        headerFieldName?: pulumi.Input<string>;
        /**
         * The value of the header.
         */
        headerFieldValue?: pulumi.Input<string>;
    }

    /**
     * Geo-physical location to run a WebTest from. You must specify one or more locations for the test to run from.
     */
    export interface WebTestGeolocationArgs {
        /**
         * Location ID for the WebTest to run from.
         */
        location?: pulumi.Input<string>;
    }

    /**
     * An XML configuration specification for a WebTest.
     */
    export interface WebTestPropertiesConfigurationArgs {
        /**
         * The XML specification of a WebTest to run against an application.
         */
        webTest?: pulumi.Input<string>;
    }

    /**
     * The collection of content validation properties
     */
    export interface WebTestPropertiesContentValidationArgs {
        /**
         * Content to look for in the return of the WebTest.  Must not be null or empty.
         */
        contentMatch?: pulumi.Input<string>;
        /**
         * When set, this value makes the ContentMatch validation case insensitive.
         */
        ignoreCase?: pulumi.Input<boolean>;
        /**
         * When true, validation will pass if there is a match for the ContentMatch string.  If false, validation will fail if there is a match
         */
        passIfTextFound?: pulumi.Input<boolean>;
    }

    /**
     * The collection of request properties
     */
    export interface WebTestPropertiesRequestArgs {
        /**
         * Follow redirects for this web test.
         */
        followRedirects?: pulumi.Input<boolean>;
        /**
         * List of headers and their values to add to the WebTest call.
         */
        headers?: pulumi.Input<pulumi.Input<HeaderFieldArgs>[]>;
        /**
         * Http verb to use for this web test.
         */
        httpVerb?: pulumi.Input<string>;
        /**
         * Parse Dependent request for this WebTest.
         */
        parseDependentRequests?: pulumi.Input<boolean>;
        /**
         * Base64 encoded string body to send with this web test.
         */
        requestBody?: pulumi.Input<string>;
        /**
         * Url location to test.
         */
        requestUrl?: pulumi.Input<string>;
    }

    /**
     * The collection of validation rule properties
     */
    export interface WebTestPropertiesValidationRulesArgs {
        /**
         * The collection of content validation properties
         */
        contentValidation?: pulumi.Input<WebTestPropertiesContentValidationArgs>;
        /**
         * Validate that the WebTest returns the http status code provided.
         */
        expectedHttpStatusCode?: pulumi.Input<number>;
        /**
         * When set, validation will ignore the status code.
         */
        ignoreHttpsStatusCode?: pulumi.Input<boolean>;
        /**
         * A number of days to check still remain before the the existing SSL cert expires.  Value must be positive and the SSLCheck must be set to true.
         */
        sSLCertRemainingLifetimeCheck?: pulumi.Input<number>;
        /**
         * Checks to see if the SSL cert is still valid.
         */
        sSLCheck?: pulumi.Input<boolean>;
    }