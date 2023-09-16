import * as pulumi from "@pulumi/pulumi";
export namespace graphservices {
    /**
     * Property bag from billing account
     */
    export interface AccountResourcePropertiesArgs {
        /**
         * Customer owned application ID
         */
        appId: pulumi.Input<string>;
    }

    export namespace v20230413 {
        /**
         * Property bag from billing account
         */
        export interface AccountResourcePropertiesArgs {
            /**
             * Customer owned application ID
             */
            appId: pulumi.Input<string>;
        }

    }
}
