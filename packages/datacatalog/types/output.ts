import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace datacatalog {
    /**
     * User principals.
     */
    export interface PrincipalsResponse {
        /**
         * Object Id for the user
         */
        objectId?: string;
        /**
         * UPN of the user.
         */
        upn?: string;
    }

    export namespace v20160330 {
        /**
         * User principals.
         */
        export interface PrincipalsResponse {
            /**
             * Object Id for the user
             */
            objectId?: string;
            /**
             * UPN of the user.
             */
            upn?: string;
        }

    }
}
