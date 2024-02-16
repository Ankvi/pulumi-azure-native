import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * AKS Cluster specific data.
 */
export interface ClusterServiceAksClusterDataArgs {
    /**
     * Custom Location resource ID
     */
    customLocationId: pulumi.Input<string>;
    /**
     * Cluster Type Definitions
     * Expected value is 'Aks'.
     */
    type: pulumi.Input<"Aks">;
}

/**
 * Nexus AKS Cluster specific data.
 */
export interface ClusterServiceNexusAksClusterDataArgs {
    /**
     * Custom Location resource ID
     */
    customLocationId: pulumi.Input<string>;
    /**
     * Cluster Type Definitions
     * Expected value is 'NexusAks'.
     */
    type: pulumi.Input<"NexusAks">;
}

/**
 * Containerized Network Function (CNF) Qualified Deployment Parameters
 */
export interface QualifiedComponentDeploymentParametersArgs {
    /**
     * Deployment Parameters
     */
    parameters?: pulumi.Input<string>;
    /**
     * Deployment secrets
     */
    secrets?: pulumi.Input<string>;
    /**
     * Federation Type
     */
    type: pulumi.Input<string>;
}

