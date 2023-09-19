import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The API entity reference.
     */
    export interface ApiEntityReferenceResponse {
        /**
         * The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...
         */
        id?: string;
    }

    /**
     * The network interface definition.
     */
    export interface NetworkInterfaceResponse {
        /**
         * The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...
         */
        id: string;
        /**
         * Private Ip address of the interface
         */
        privateIpAddress?: string;
    }

    /**
     * The network profile definition.
     */
    export interface NetworkProfileResponse {
        /**
         * Specifies the list of resource Ids for the network interfaces associated with the dedicated HSM.
         */
        networkInterfaces?: NetworkInterfaceResponse[];
        /**
         * Specifies the identifier of the subnet.
         */
        subnet?: ApiEntityReferenceResponse;
    }

    /**
     * SKU of the dedicated HSM
     */
    export interface SkuResponse {
        /**
         * SKU of the dedicated HSM
         */
        name?: string;
    }

    /**
     * Metadata pertaining to creation and last modification of dedicated hsm resource.
     */
    export interface SystemDataResponse {
        /**
         * The timestamp of dedicated hsm resource creation (UTC).
         */
        createdAt?: string;
        /**
         * The identity that created dedicated hsm resource.
         */
        createdBy?: string;
        /**
         * The type of identity that created dedicated hsm resource.
         */
        createdByType?: string;
        /**
         * The timestamp of dedicated hsm resource last modification (UTC).
         */
        lastModifiedAt?: string;
        /**
         * The identity that last modified dedicated hsm resource.
         */
        lastModifiedBy?: string;
        /**
         * The type of identity that last modified dedicated hsm resource.
         */
        lastModifiedByType?: string;
    }
