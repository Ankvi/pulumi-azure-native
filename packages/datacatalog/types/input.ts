import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace datacatalog {
    /**
     * User principals.
     */
    export interface PrincipalsArgs {
        /**
         * Object Id for the user
         */
        objectId?: pulumi.Input<string>;
        /**
         * UPN of the user.
         */
        upn?: pulumi.Input<string>;
    }

    export namespace v20160330 {
        /**
         * User principals.
         */
        export interface PrincipalsArgs {
            /**
             * Object Id for the user
             */
            objectId?: pulumi.Input<string>;
            /**
             * UPN of the user.
             */
            upn?: pulumi.Input<string>;
        }

    }
}
