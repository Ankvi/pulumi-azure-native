import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Information on the azure container registry
 */
export interface ACRResponse {
    /**
     * ACR registry
     */
    acrRegistryName?: string;
    /**
     * ACR repository
     */
    acrRepositoryName?: string;
    /**
     * ACR resource group
     */
    acrResourceGroup?: string;
    /**
     * ACR subscription id
     */
    acrSubscriptionId?: string;
}

export interface DeploymentPropertiesResponse {
    /**
     * Helm chart directory path in repository.
     */
    helmChartPath?: string;
    /**
     * Helm Values.yaml file location in repository.
     */
    helmValues?: string;
    kubeManifestLocations?: string[];
    /**
     * Determines the type of manifests within the repository.
     */
    manifestType?: string;
    /**
     * Manifest override values.
     */
    overrides?: {[key: string]: string};
}

/**
 * The fields needed for OIDC with GitHub.
 */
export interface GitHubWorkflowProfileResponseOidcCredentials {
    /**
     * Azure Application Client ID
     */
    azureClientId?: string;
    /**
     * Azure Directory (tenant) ID
     */
    azureTenantId?: string;
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

export interface WorkflowRunResponse {
    /**
     * The timestamp of the last workflow run.
     */
    lastRunAt: string;
    /**
     * Describes if the workflow run succeeded.
     */
    succeeded: boolean;
    /**
     * Describes the status of the workflow run
     */
    workflowRunStatus?: string;
    /**
     * URL to the run of the workflow.
     */
    workflowRunURL: string;
}
