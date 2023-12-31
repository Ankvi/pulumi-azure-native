import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * A streaming job.
     */
    export interface ClusterJobResponse {
        /**
         * Resource ID of the streaming job.
         */
        id: string;
        /**
         * The current execution state of the streaming job.
         */
        jobState: string;
        /**
         * The number of streaming units that are used by the streaming job.
         */
        streamingUnits: number;
    }

    /**
     * The properties associated with a Stream Analytics cluster.
     */
    export interface ClusterPropertiesResponse {
        /**
         * Represents the number of streaming units currently being used on the cluster.
         */
        capacityAllocated: number;
        /**
         * Represents the sum of the SUs of all streaming jobs associated with the cluster. If all of the jobs were running, this would be the capacity allocated.
         */
        capacityAssigned: number;
        /**
         * Unique identifier for the cluster.
         */
        clusterId: string;
        /**
         * The date this cluster was created.
         */
        createdDate: string;
        /**
         * The status of the cluster provisioning. The three terminal states are: Succeeded, Failed and Canceled
         */
        provisioningState: string;
    }

    /**
     * The SKU of the cluster. This determines the size/capacity of the cluster. Required on PUT (CreateOrUpdate) requests.
     */
    export interface ClusterSkuResponse {
        /**
         * Denotes the number of streaming units the cluster can support. Valid values for this property are multiples of 36 with a minimum value of 36 and maximum value of 216. Required on PUT (CreateOrUpdate) requests.
         */
        capacity?: number;
        /**
         * Specifies the SKU name of the cluster. Required on PUT (CreateOrUpdate) requests.
         */
        name?: string;
    }

    /**
     * The properties associated with a private endpoint.
     */
    export interface PrivateEndpointPropertiesResponse {
        /**
         * The date when this private endpoint was created.
         */
        createdDate: string;
        /**
         * A list of connections to the remote resource. Immutable after it is set.
         */
        manualPrivateLinkServiceConnections?: PrivateLinkServiceConnectionResponse[];
    }

    /**
     * A collection of read-only information about the state of the connection to the private remote resource.
     */
    export interface PrivateLinkConnectionStateResponse {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired: string;
        /**
         * The reason for approval/rejection of the connection.
         */
        description: string;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the remote resource/service.
         */
        status: string;
    }

    /**
     * A grouping of information about the connection to the remote resource.
     */
    export interface PrivateLinkServiceConnectionResponse {
        /**
         * The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to. Required on PUT (CreateOrUpdate) requests.
         */
        groupIds?: string[];
        /**
         * A collection of read-only information about the state of the connection to the private remote resource.
         */
        privateLinkServiceConnectionState?: PrivateLinkConnectionStateResponse;
        /**
         * The resource id of the private link service. Required on PUT (CreateOrUpdate) requests.
         */
        privateLinkServiceId?: string;
        /**
         * A message passed to the owner of the remote resource with this connection request. Restricted to 140 chars.
         */
        requestMessage: string;
    }
