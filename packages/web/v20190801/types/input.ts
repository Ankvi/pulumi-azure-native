import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Name value pair.
     */
    export interface NameValuePairArgs {
        /**
         * Pair name.
         */
        name?: pulumi.Input<string>;
        /**
         * Pair value.
         */
        value?: pulumi.Input<string>;
    }

    /**
     * Network access control entry.
     */
    export interface NetworkAccessControlEntryArgs {
        /**
         * Action object.
         */
        action?: pulumi.Input<enums.AccessControlEntryAction>;
        /**
         * Description of network access control entry.
         */
        description?: pulumi.Input<string>;
        /**
         * Order of precedence.
         */
        order?: pulumi.Input<number>;
        /**
         * Remote subnet.
         */
        remoteSubnet?: pulumi.Input<string>;
    }

    /**
     * Specification for using a Virtual Network.
     */
    export interface VirtualNetworkProfileArgs {
        /**
         * Resource id of the Virtual Network.
         */
        id?: pulumi.Input<string>;
        /**
         * Subnet within the Virtual Network.
         */
        subnet?: pulumi.Input<string>;
    }

    /**
     * Worker pool of an App Service Environment.
     */
    export interface WorkerPoolArgs {
        /**
         * Shared or dedicated app hosting.
         */
        computeMode?: pulumi.Input<enums.ComputeModeOptions>;
        /**
         * Number of instances in the worker pool.
         */
        workerCount?: pulumi.Input<number>;
        /**
         * VM size of the worker pool instances.
         */
        workerSize?: pulumi.Input<string>;
        /**
         * Worker size ID for referencing this worker pool.
         */
        workerSizeId?: pulumi.Input<number>;
    }
