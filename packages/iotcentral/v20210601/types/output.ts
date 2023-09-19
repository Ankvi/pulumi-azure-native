import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Information about the SKU of the IoT Central application.
     */
    export interface AppSkuInfoResponse {
        /**
         * The name of the SKU.
         */
        name: string;
    }

    /**
     * Managed service identity (either system assigned, or none)
     */
    export interface SystemAssignedServiceIdentityResponse {
        /**
         * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        principalId: string;
        /**
         * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        tenantId: string;
        /**
         * Type of managed service identity (either system assigned, or none).
         */
        type: string;
    }
