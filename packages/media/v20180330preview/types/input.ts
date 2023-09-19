import * as pulumi from "@pulumi/pulumi";
    /**
     * Describes the properties of a user-defined content key in the Streaming Locator
     */
    export interface StreamingLocatorUserDefinedContentKeyArgs {
        /**
         * ID of Content Key
         */
        id: pulumi.Input<string>;
        /**
         * The Content Key description
         */
        label?: pulumi.Input<string>;
        /**
         * The Content Key secret
         */
        value?: pulumi.Input<string>;
    }
