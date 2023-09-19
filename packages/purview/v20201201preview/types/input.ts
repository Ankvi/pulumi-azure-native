import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The Managed Identity of the resource
     */
    export interface IdentityArgs {
        /**
         * Identity Type
         */
        type?: pulumi.Input<string | enums.Type>;
    }
