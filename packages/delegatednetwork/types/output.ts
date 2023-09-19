import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * controller details
 */
export interface ControllerDetailsResponse {
    /**
     * controller arm resource id
     */
    id?: string;
}

export interface OrchestratorIdentityResponse {
    /**
     * The principal id of the system assigned identity which is used by orchestrator.
     */
    principalId: string;
    /**
     * The tenant id of the system assigned identity which is used by orchestrator.
     */
    tenantId: string;
    /**
     * The type of identity used for orchestrator cluster. Type 'SystemAssigned' will use an implicitly created identity orchestrator clusters
     */
    type?: string;
}

/**
 * Properties of orchestrator
 */
export interface SubnetDetailsResponse {
    /**
     * subnet arm resource id
     */
    id?: string;
}


