import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Customer Managed Identity
     */
    export interface MyWorkbookManagedIdentityArgs {
        /**
         * The identity type.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Customer Managed Identity
     */
    export interface WorkbookManagedIdentityArgs {
        /**
         * The identity type.
         */
        type?: pulumi.Input<string>;
    }
