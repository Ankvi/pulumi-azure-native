import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace hybridcloud {
    /**
     * Resource reference properties.
     */
    export interface ResourceReferenceArgs {
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
    }

    export namespace v20230101preview {
        /**
         * Resource reference properties.
         */
        export interface ResourceReferenceArgs {
            /**
             * Resource ID.
             */
            id?: pulumi.Input<string>;
        }

    }
}
