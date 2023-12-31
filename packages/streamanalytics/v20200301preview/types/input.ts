import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The SKU of the cluster. This determines the size/capacity of the cluster. Required on PUT (CreateOrUpdate) requests.
     */
    export interface ClusterSkuArgs {
        /**
         * Denotes the number of streaming units the cluster can support. Valid values for this property are multiples of 36 with a minimum value of 36 and maximum value of 216. Required on PUT (CreateOrUpdate) requests.
         */
        capacity?: pulumi.Input<number>;
        /**
         * Specifies the SKU name of the cluster. Required on PUT (CreateOrUpdate) requests.
         */
        name?: pulumi.Input<string | enums.ClusterSkuName>;
    }

    /**
     * The properties associated with a private endpoint.
     */
    export interface PrivateEndpointPropertiesArgs {
        /**
         * A list of connections to the remote resource. Immutable after it is set.
         */
        manualPrivateLinkServiceConnections?: pulumi.Input<pulumi.Input<PrivateLinkServiceConnectionArgs>[]>;
    }

    /**
     * A grouping of information about the connection to the remote resource.
     */
    export interface PrivateLinkServiceConnectionArgs {
        /**
         * The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to. Required on PUT (CreateOrUpdate) requests.
         */
        groupIds?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The resource id of the private link service. Required on PUT (CreateOrUpdate) requests.
         */
        privateLinkServiceId?: pulumi.Input<string>;
    }
