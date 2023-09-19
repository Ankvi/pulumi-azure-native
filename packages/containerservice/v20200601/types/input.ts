import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Settings for upgrading an agentpool
     */
    export interface AgentPoolUpgradeSettingsArgs {
        /**
         * Count or percentage of additional nodes to be added during upgrade. If empty uses AKS default
         */
        maxSurge?: pulumi.Input<string>;
    }
