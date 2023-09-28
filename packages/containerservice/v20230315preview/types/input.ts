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
         * Name of the group.
         * It must match a group name of an existing fleet member. 
         */
        name: pulumi.Input<string>;
    }

    /**
     * Defines the update sequence of the clusters via stages and groups.
     *
     * Stages within a run are executed sequentially one after another.
     * Groups within a stage are executed in parallel.
     * Member clusters within a group are updated sequentially one after another.
     *
     * A valid strategy contains no duplicate groups within or across stages.
     */
    export interface UpdateRunStrategyArgs {
        /**
         * The list of stages that compose this update run. Min size: 1.
         */
        stages: pulumi.Input<pulumi.Input<UpdateStageArgs>[]>;
    }

    /**
     * Defines a stage which contains the groups to update and the steps to take (e.g., wait for a time period) before starting the next stage.
     */
    export interface UpdateStageArgs {
        /**
         * The time in seconds to wait at the end of this stage before starting the next one. Defaults to 0 seconds if unspecified.
         */
        afterStageWaitInSeconds?: pulumi.Input<number>;
        /**
         * Defines the groups to be executed in parallel in this stage. Duplicate groups are not allowed. Min size: 1.
         */
        groups?: pulumi.Input<pulumi.Input<UpdateGroupArgs>[]>;
        /**
         * The name of the stage. Must be unique within the UpdateRun.
         */
        name: pulumi.Input<string>;
    }
