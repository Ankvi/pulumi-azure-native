import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Information about the SKU of the IoT Central application.
     */
    export interface AppSkuInfoArgs {
        /**
         * The name of the SKU.
         */
        name: pulumi.Input<string | enums.AppSku>;
    }

    /**
     * Managed service identity (either system assigned, or none)
     */
    export interface SystemAssignedServiceIdentityArgs {
        /**
         * Type of managed service identity (either system assigned, or none).
         */
        type: pulumi.Input<string | enums.SystemAssignedServiceIdentityType>;
    }
