import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Security domain properties information for Cloud HSM cluster
     */
    export interface CloudHsmClusterSecurityDomainPropertiesArgs {
        /**
         * status of security domain activation
         */
        activationStatus?: pulumi.Input<string>;
        /**
         * FIPS state information for security domain
         */
        fipsState?: pulumi.Input<number>;
    }

    /**
     * Cloud Hsm Cluster SKU information
     */
    export interface CloudHsmClusterSkuArgs {
        /**
         * Sku capacity
         */
        capacity?: pulumi.Input<number>;
        /**
         * Sku family of the Cloud HSM Cluster
         */
        family: pulumi.Input<string | enums.CloudHsmClusterSkuFamily>;
        /**
         * Sku name of the Cloud HSM Cluster
         */
        name: pulumi.Input<enums.CloudHsmClusterSkuName>;
    }

    /**
     * The Cloud HSM Properties
     */
    export interface CloudHsmPropertiesArgs {
        /**
         * FQDN of the Cloud HSM
         */
        fqdn?: pulumi.Input<string>;
        /**
         * The Cloud HSM State
         */
        state?: pulumi.Input<string>;
        /**
         * The Cloud HSM State message
         */
        stateMessage?: pulumi.Input<string>;
    }

    /**
     * The private endpoint connection resource.
     */
    export interface PrivateEndpointConnectionArgs {
        /**
         * Modified whenever there is a change in the state of private endpoint connection.
         */
        etag?: pulumi.Input<string>;
        /**
         * A collection of information about the state of the connection between service consumer and provider.
         */
        privateLinkServiceConnectionState: pulumi.Input<PrivateLinkServiceConnectionStateArgs>;
    }

    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    export interface PrivateLinkServiceConnectionStateArgs {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: pulumi.Input<string>;
        /**
         * The reason for approval/rejection of the connection.
         */
        description?: pulumi.Input<string>;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
    }
