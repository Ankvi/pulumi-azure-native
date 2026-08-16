import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * controller details
 */
export interface ControllerDetailsArgs {
    /**
     * controller arm resource id
     */
    id?: pulumi.Input<string | undefined>;
}

export interface OrchestratorIdentityArgs {
    /**
     * The type of identity used for orchestrator cluster. Type 'SystemAssigned' will use an implicitly created identity orchestrator clusters
     */
    type?: pulumi.Input<enums.ResourceIdentityType | undefined>;
}

/**
 * Properties of orchestrator
 */
export interface SubnetDetailsArgs {
    /**
     * subnet arm resource id
     */
    id?: pulumi.Input<string | undefined>;
}
