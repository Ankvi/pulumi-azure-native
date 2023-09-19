import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Put subscription creation result properties.
     */
    export interface PutAliasResponsePropertiesResponse {
        /**
         * The provisioning state of the resource.
         */
        provisioningState?: string;
        /**
         * Newly created subscription Id.
         */
        subscriptionId: string;
    }
