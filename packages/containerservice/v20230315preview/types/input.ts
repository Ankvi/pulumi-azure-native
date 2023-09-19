import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The FleetHubProfile configures the fleet hub.
     */
    export interface FleetHubProfileArgs {
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
