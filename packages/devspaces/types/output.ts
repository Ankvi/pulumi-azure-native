import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export interface ControllerConnectionDetailsResponse {
    /**
     * Base class for types that supply values used to connect to container orchestrators
     */
    orchestratorSpecificConnectionDetails?: KubernetesConnectionDetailsResponse;
}

/**
 * Contains information used to connect to a Kubernetes cluster
 */
export interface KubernetesConnectionDetailsResponse {
    /**
     * Gets the Instance type.
     * Expected value is 'Kubernetes'.
     */
    instanceType: "Kubernetes";
    /**
     * Gets the kubeconfig for the cluster.
     */
    kubeConfig?: string;
}

/**
 * Model representing SKU for Azure Dev Spaces Controller.
 */
export interface SkuResponse {
    /**
     * The name of the SKU for Azure Dev Spaces Controller.
     */
    name: string;
    /**
     * The tier of the SKU for Azure Dev Spaces Controller.
     */
    tier?: string;
}
