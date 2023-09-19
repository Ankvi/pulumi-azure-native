import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Managed service identity (either system assigned, or none)
     */
    export interface SystemAssignedServiceIdentityArgs {
        /**
         * Type of managed service identity (either system assigned, or none).
         */
        type: pulumi.Input<string | enums.SystemAssignedServiceIdentityType>;
    }
