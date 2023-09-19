import * as pulumi from "@pulumi/pulumi";
    /**
     * Describes the properties of a user-defined content key in the Streaming Locator
     */
    export interface StreamingLocatorUserDefinedContentKeyResponse {
        /**
         * ID of Content Key
         */
        id: string;
        /**
         * The Content Key description
         */
        label?: string;
        /**
         * The Content Key secret
         */
        value?: string;
    }
