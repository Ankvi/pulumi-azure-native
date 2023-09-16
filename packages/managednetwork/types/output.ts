import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace managednetwork {
    /**
     * The collection of Connectivity related groups and policies within the Managed Network
     */
    export interface ConnectivityCollectionResponse {
        /**
         * The collection of connectivity related Managed Network Groups within the Managed Network
         */
        groups: ManagedNetworkGroupResponse[];
        /**
         * The collection of Managed Network Peering Policies within the Managed Network
         */
        peerings: ManagedNetworkPeeringPolicyResponse[];
    }

    /**
     * The Managed Network Group resource
     */
    export interface ManagedNetworkGroupResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
         */
        id: string;
        /**
         * Responsibility role under which this Managed Network Group will be created
         */
        kind?: string;
        /**
         * The geo-location where the resource lives
         */
        location?: string;
        /**
         * The collection of management groups covered by the Managed Network
         */
        managementGroups?: ResourceIdResponse[];
        /**
         * The name of the resource
         */
        name: string;
        /**
         * Provisioning state of the ManagedNetwork resource.
         */
        provisioningState: string;
        /**
         * The collection of  subnets covered by the Managed Network
         */
        subnets?: ResourceIdResponse[];
        /**
         * The collection of subscriptions covered by the Managed Network
         */
        subscriptions?: ResourceIdResponse[];
        /**
         * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
         */
        type: string;
        /**
         * The collection of virtual nets covered by the Managed Network
         */
        virtualNetworks?: ResourceIdResponse[];
    }

    /**
     * Properties of a Managed Network Peering Policy
     */
    export interface ManagedNetworkPeeringPolicyPropertiesResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Gets or sets the hub virtual network ID
         */
        hub?: ResourceIdResponse;
        /**
         * Gets or sets the mesh group IDs
         */
        mesh?: ResourceIdResponse[];
        /**
         * Provisioning state of the ManagedNetwork resource.
         */
        provisioningState: string;
        /**
         * Gets or sets the spokes group IDs
         */
        spokes?: ResourceIdResponse[];
        /**
         * Gets or sets the connectivity type of a network structure policy
         */
        type: string;
    }

    /**
     * The Managed Network Peering Policy resource
     */
    export interface ManagedNetworkPeeringPolicyResponse {
        /**
         * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
         */
        id: string;
        /**
         * The geo-location where the resource lives
         */
        location?: string;
        /**
         * The name of the resource
         */
        name: string;
        /**
         * Gets or sets the properties of a Managed Network Policy
         */
        properties?: ManagedNetworkPeeringPolicyPropertiesResponse;
        /**
         * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
         */
        type: string;
    }

    /**
     * Generic pointer to a resource
     */
    export interface ResourceIdResponse {
        /**
         * Resource Id
         */
        id?: string;
    }

    /**
     * Scope of a Managed Network
     */
    export interface ScopeResponse {
        /**
         * The collection of management groups covered by the Managed Network
         */
        managementGroups?: ResourceIdResponse[];
        /**
         * The collection of  subnets covered by the Managed Network
         */
        subnets?: ResourceIdResponse[];
        /**
         * The collection of subscriptions covered by the Managed Network
         */
        subscriptions?: ResourceIdResponse[];
        /**
         * The collection of virtual nets covered by the Managed Network
         */
        virtualNetworks?: ResourceIdResponse[];
    }

    export namespace v20190601preview {
        /**
         * The collection of Connectivity related groups and policies within the Managed Network
         */
        export interface ConnectivityCollectionResponse {
            /**
             * The collection of connectivity related Managed Network Groups within the Managed Network
             */
            groups: v20190601preview.ManagedNetworkGroupResponse[];
            /**
             * The collection of Managed Network Peering Policies within the Managed Network
             */
            peerings: v20190601preview.ManagedNetworkPeeringPolicyResponse[];
        }

        /**
         * The Managed Network Group resource
         */
        export interface ManagedNetworkGroupResponse {
            /**
             * A unique read-only string that changes whenever the resource is updated.
             */
            etag: string;
            /**
             * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
             */
            id: string;
            /**
             * Responsibility role under which this Managed Network Group will be created
             */
            kind?: string;
            /**
             * The geo-location where the resource lives
             */
            location?: string;
            /**
             * The collection of management groups covered by the Managed Network
             */
            managementGroups?: v20190601preview.ResourceIdResponse[];
            /**
             * The name of the resource
             */
            name: string;
            /**
             * Provisioning state of the ManagedNetwork resource.
             */
            provisioningState: string;
            /**
             * The collection of  subnets covered by the Managed Network
             */
            subnets?: v20190601preview.ResourceIdResponse[];
            /**
             * The collection of subscriptions covered by the Managed Network
             */
            subscriptions?: v20190601preview.ResourceIdResponse[];
            /**
             * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
             */
            type: string;
            /**
             * The collection of virtual nets covered by the Managed Network
             */
            virtualNetworks?: v20190601preview.ResourceIdResponse[];
        }

        /**
         * Properties of a Managed Network Peering Policy
         */
        export interface ManagedNetworkPeeringPolicyPropertiesResponse {
            /**
             * A unique read-only string that changes whenever the resource is updated.
             */
            etag: string;
            /**
             * Gets or sets the hub virtual network ID
             */
            hub?: v20190601preview.ResourceIdResponse;
            /**
             * Gets or sets the mesh group IDs
             */
            mesh?: v20190601preview.ResourceIdResponse[];
            /**
             * Provisioning state of the ManagedNetwork resource.
             */
            provisioningState: string;
            /**
             * Gets or sets the spokes group IDs
             */
            spokes?: v20190601preview.ResourceIdResponse[];
            /**
             * Gets or sets the connectivity type of a network structure policy
             */
            type: string;
        }

        /**
         * The Managed Network Peering Policy resource
         */
        export interface ManagedNetworkPeeringPolicyResponse {
            /**
             * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
             */
            id: string;
            /**
             * The geo-location where the resource lives
             */
            location?: string;
            /**
             * The name of the resource
             */
            name: string;
            /**
             * Gets or sets the properties of a Managed Network Policy
             */
            properties?: v20190601preview.ManagedNetworkPeeringPolicyPropertiesResponse;
            /**
             * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
             */
            type: string;
        }

        /**
         * Generic pointer to a resource
         */
        export interface ResourceIdResponse {
            /**
             * Resource Id
             */
            id?: string;
        }

        /**
         * Scope of a Managed Network
         */
        export interface ScopeResponse {
            /**
             * The collection of management groups covered by the Managed Network
             */
            managementGroups?: v20190601preview.ResourceIdResponse[];
            /**
             * The collection of  subnets covered by the Managed Network
             */
            subnets?: v20190601preview.ResourceIdResponse[];
            /**
             * The collection of subscriptions covered by the Managed Network
             */
            subscriptions?: v20190601preview.ResourceIdResponse[];
            /**
             * The collection of virtual nets covered by the Managed Network
             */
            virtualNetworks?: v20190601preview.ResourceIdResponse[];
        }

    }
}
