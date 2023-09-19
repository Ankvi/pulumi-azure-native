import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Access profile for the Fleet hub API server.
     */
    export interface APIServerAccessProfileArgs {
        /**
         * Whether to create the Fleet hub as a private cluster or not.
         */
        enablePrivateCluster?: pulumi.Input<boolean>;
        /**
         * Whether to enable apiserver vnet integration for the Fleet hub or not.
         */
        enableVnetIntegration?: pulumi.Input<boolean>;
        /**
         * The subnet to be used when apiserver vnet integration is enabled. It is required when creating a new Fleet with BYO vnet.
         */
        subnetId?: pulumi.Input<string>;
    }

    /**
     * Agent profile for the Fleet hub.
     */
    export interface AgentProfileArgs {
        /**
         * The ID of the subnet which the Fleet hub node will join on startup. If this is not specified, a vnet and subnet will be generated and used.
         */
        subnetId?: pulumi.Input<string>;
    }

    /**
     * The FleetHubProfile configures the fleet hub.
     */
    export interface FleetHubProfileArgs {
        /**
         * The agent profile for the Fleet hub.
         */
        agentProfile?: pulumi.Input<AgentProfileArgs>;
        /**
         * The access profile for the Fleet hub API server.
         */
        apiServerAccessProfile?: pulumi.Input<APIServerAccessProfileArgs>;
        /**
         * DNS prefix used to create the FQDN for the Fleet hub.
         */
        dnsPrefix?: pulumi.Input<string>;
    }

    /**
     * The update to be applied to the ManagedClusters.
     */
    export interface ManagedClusterUpdateArgs {
        /**
         * The node image upgrade to be applied to the target nodes in update run.
         */
        nodeImageSelection?: pulumi.Input<NodeImageSelectionArgs>;
        /**
         * The upgrade to apply to the ManagedClusters.
         */
        upgrade: pulumi.Input<ManagedClusterUpgradeSpecArgs>;
    }

    /**
     * The upgrade to apply to a ManagedCluster.
     */
    export interface ManagedClusterUpgradeSpecArgs {
        /**
         * The Kubernetes version to upgrade the member clusters to.
         */
        kubernetesVersion?: pulumi.Input<string>;
        /**
         * The upgrade type.
         * Full requires the KubernetesVersion property to be set.
         * NodeImageOnly requires the KubernetesVersion property not to be set.
         */
        type: pulumi.Input<string | enums.ManagedClusterUpgradeType>;
    }

    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    export interface ManagedServiceIdentityArgs {
        /**
         * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
         */
        type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
        /**
         * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The node image upgrade to be applied to the target nodes in update run.
     */
    export interface NodeImageSelectionArgs {
        /**
         * The node image upgrade type.
         */
        type: pulumi.Input<string | enums.NodeImageSelectionType>;
    }

    /**
     * A group to be updated.
     */
    export interface UpdateGroupArgs {
        /**
         * The name of the Fleet member group to update. 
         * It should match the name of an existing FleetMember group.
         * A group can only appear once across all UpdateStages in the UpdateRun.
         */
        name: pulumi.Input<string>;
    }

    /**
     * The UpdateRunStrategy configures the sequence of Stages and Groups in which the clusters will be updated.
     */
    export interface UpdateRunStrategyArgs {
        /**
         * The list of stages that compose this update run.
         */
        stages: pulumi.Input<pulumi.Input<UpdateStageArgs>[]>;
    }

    /**
     * Contains the groups to be updated by an UpdateRun.
     * Update order:
     * - Sequential between stages: Stages run sequentially. The previous stage must complete before the next one starts.
     * - Parallel within a stage: Groups within a stage run in parallel.
     * - Sequential within a group: Clusters within a group are updated sequentially.
     */
    export interface UpdateStageArgs {
        /**
         * The time in seconds to wait at the end of this stage before starting the next one. Defaults to 0 seconds if unspecified.
         */
        afterStageWaitInSeconds?: pulumi.Input<number>;
        /**
         * A list of group names that compose the stage.
         * The groups will be updated in parallel. Each group name can only appear once in the UpdateRun.
         */
        groups?: pulumi.Input<pulumi.Input<UpdateGroupArgs>[]>;
        /**
         * The name of the stage. Must be unique within the UpdateRun.
         */
        name: pulumi.Input<string>;
    }
