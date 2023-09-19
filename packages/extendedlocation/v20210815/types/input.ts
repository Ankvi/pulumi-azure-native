import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * This is optional input that contains the authentication that should be used to generate the namespace.
     */
    export interface CustomLocationPropertiesAuthenticationArgs {
        /**
         * The type of the Custom Locations authentication
         */
        type?: pulumi.Input<string>;
        /**
         * The kubeconfig value.
         */
        value?: pulumi.Input<string>;
    }

    /**
     * Identity for the resource.
     */
    export interface IdentityArgs {
        /**
         * The identity type.
         */
        type?: pulumi.Input<string | enums.ResourceIdentityType>;
    }
