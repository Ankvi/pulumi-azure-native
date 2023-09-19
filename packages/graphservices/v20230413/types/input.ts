import * as pulumi from "@pulumi/pulumi";
    /**
     * Property bag from billing account
     */
    export interface AccountResourcePropertiesArgs {
        /**
         * Customer owned application ID
         */
        appId: pulumi.Input<string>;
    }
