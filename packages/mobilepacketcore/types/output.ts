import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * AKS Cluster specific data.
 */
export interface ClusterServiceAksClusterDataResponse {
    /**
     * Custom Location resource ID
     */
    customLocationId: string;
    /**
     * Cluster Type Definitions
     * Expected value is 'Aks'.
     */
    type: "Aks";
}

/**
 * Nexus AKS Cluster specific data.
 */
export interface ClusterServiceNexusAksClusterDataResponse {
    /**
     * Custom Location resource ID
     */
    customLocationId: string;
    /**
     * Cluster Type Definitions
     * Expected value is 'NexusAks'.
     */
    type: "NexusAks";
}

/**
 * Operational Status of the resource
 */
export interface OperationalStatusResponse {
    /**
     * Health check results
     */
    healthCheck: string;
    /**
     * Status of the deployed workload
     */
    workload: string;
}

/**
 * Containerized Network Function (CNF) Qualified Deployment Parameters
 */
export interface QualifiedComponentDeploymentParametersResponse {
    /**
     * Deployment Parameters
     */
    parameters?: string;
    /**
     * Deployment secrets
     */
    secrets?: string;
    /**
     * Federation Type
     */
    type: string;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}

