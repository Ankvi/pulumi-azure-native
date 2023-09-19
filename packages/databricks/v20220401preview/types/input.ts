import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Identity for the resource.
     */
    export interface IdentityDataArgs {
        /**
         * The identity type.
         */
        type: pulumi.Input<string | enums.IdentityType>;
    }
