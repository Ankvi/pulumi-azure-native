import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace managednetwork {
    /**
     * Properties of a Managed Network Peering Policy
     */
    export interface ManagedNetworkPeeringPolicyPropertiesArgs {
        /**
         * Gets or sets the hub virtual network ID
         */
        hub?: pulumi.Input<ResourceIdArgs>;
        /**
         * Gets or sets the mesh group IDs
         */
        mesh?: pulumi.Input<pulumi.Input<ResourceIdArgs>[]>;
        /**
         * Gets or sets the spokes group IDs
         */
        spokes?: pulumi.Input<pulumi.Input<ResourceIdArgs>[]>;
        /**
         * Gets or sets the connectivity type of a network structure policy
         */
        type: pulumi.Input<string | enums.Type>;
    }

    /**
     * Generic pointer to a resource
     */
    export interface ResourceIdArgs {
        /**
         * Resource Id
         */
        id?: pulumi.Input<string>;
    }

    /**
     * Scope of a Managed Network
     */
    export interface ScopeArgs {
        /**
         * The collection of management groups covered by the Managed Network
         */
        managementGroups?: pulumi.Input<pulumi.Input<ResourceIdArgs>[]>;
        /**
         * The collection of  subnets covered by the Managed Network
         */
        subnets?: pulumi.Input<pulumi.Input<ResourceIdArgs>[]>;
        /**
         * The collection of subscriptions covered by the Managed Network
         */
        subscriptions?: pulumi.Input<pulumi.Input<ResourceIdArgs>[]>;
        /**
         * The collection of virtual nets covered by the Managed Network
         */
        virtualNetworks?: pulumi.Input<pulumi.Input<ResourceIdArgs>[]>;
    }

    export namespace v20190601preview {
        /**
         * Properties of a Managed Network Peering Policy
         */
        export interface ManagedNetworkPeeringPolicyPropertiesArgs {
            /**
             * Gets or sets the hub virtual network ID
             */
            hub?: pulumi.Input<v20190601preview.ResourceIdArgs>;
            /**
             * Gets or sets the mesh group IDs
             */
            mesh?: pulumi.Input<pulumi.Input<v20190601preview.ResourceIdArgs>[]>;
            /**
             * Gets or sets the spokes group IDs
             */
            spokes?: pulumi.Input<pulumi.Input<v20190601preview.ResourceIdArgs>[]>;
            /**
             * Gets or sets the connectivity type of a network structure policy
             */
            type: pulumi.Input<string | enums.v20190601preview.Type>;
        }

        /**
         * Generic pointer to a resource
         */
        export interface ResourceIdArgs {
            /**
             * Resource Id
             */
            id?: pulumi.Input<string>;
        }

        /**
         * Scope of a Managed Network
         */
        export interface ScopeArgs {
            /**
             * The collection of management groups covered by the Managed Network
             */
            managementGroups?: pulumi.Input<pulumi.Input<v20190601preview.ResourceIdArgs>[]>;
            /**
             * The collection of  subnets covered by the Managed Network
             */
            subnets?: pulumi.Input<pulumi.Input<v20190601preview.ResourceIdArgs>[]>;
            /**
             * The collection of subscriptions covered by the Managed Network
             */
            subscriptions?: pulumi.Input<pulumi.Input<v20190601preview.ResourceIdArgs>[]>;
            /**
             * The collection of virtual nets covered by the Managed Network
             */
            virtualNetworks?: pulumi.Input<pulumi.Input<v20190601preview.ResourceIdArgs>[]>;
        }

    }
}
