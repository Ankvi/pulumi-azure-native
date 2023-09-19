import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Schedule settings for regular cluster updates.
     */
    export interface MaintenanceWindowResponse {
        /**
         * Indicates whether custom maintenance window is enabled or not.
         */
        customWindow?: string;
        /**
         * Preferred day of the week for maintenance window.
         */
        dayOfWeek?: number;
        /**
         * Start hour within preferred day of the week for maintenance window.
         */
        startHour?: number;
        /**
         * Start minute within the start hour for maintenance window.
         */
        startMinute?: number;
    }

    /**
     * Property to represent resource id of the private endpoint.
     */
    export interface PrivateEndpointPropertyResponse {
        /**
         * Resource id of the private endpoint.
         */
        id?: string;
    }

    /**
     * The private endpoint resource.
     */
    export interface PrivateEndpointResponse {
        /**
         * The ARM identifier for private endpoint.
         */
        id: string;
    }

    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    export interface PrivateLinkServiceConnectionStateResponse {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: string;
        /**
         * The reason for approval/rejection of the connection.
         */
        description?: string;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: string;
    }

    /**
     * The name object for a server.
     */
    export interface ServerNameItemResponse {
        /**
         * The fully qualified domain name of a server.
         */
        fullyQualifiedDomainName: string;
        /**
         * The name of a server.
         */
        name?: string;
    }

    /**
     * A private endpoint connection.
     */
    export interface SimplePrivateEndpointConnectionResponse {
        /**
         * Group ids of the private endpoint connection.
         */
        groupIds?: string[];
        /**
         * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
         */
        id: string;
        /**
         * The name of the resource
         */
        name: string;
        /**
         * Private endpoint which the connection belongs to.
         */
        privateEndpoint?: PrivateEndpointPropertyResponse;
        /**
         * A collection of information about the state of the connection between service consumer and provider.
         */
        privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateResponse;
        /**
         * Azure Resource Manager metadata containing createdBy and modifiedBy information.
         */
        systemData: SystemDataResponse;
        /**
         * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
         */
        type: string;
    }

    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    export interface SystemDataResponse {
        /**
         * The timestamp of resource creation (UTC).
         */
        createdAt?: string;
        /**
         * The identity that created the resource.
         */
        createdBy?: string;
        /**
         * The type of identity that created the resource.
         */
        createdByType?: string;
        /**
         * The timestamp of resource last modification (UTC)
         */
        lastModifiedAt?: string;
        /**
         * The identity that last modified the resource.
         */
        lastModifiedBy?: string;
        /**
         * The type of identity that last modified the resource.
         */
        lastModifiedByType?: string;
    }
