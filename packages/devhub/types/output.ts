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
 * GitHub Workflow Profile
 */
export interface GitHubWorkflowProfileResponse {
    /**
     * Information on the azure container registry
     */
    acr?: ACRResponse;
    /**
     * The Azure Kubernetes Cluster Resource the application will be deployed to.
     */
    aksResourceId?: string;
    /**
     * Determines the authorization status of requests.
     */
    authStatus: string;
    /**
     * Repository Branch Name
     */
    branchName?: string;
    deploymentProperties?: DeploymentPropertiesResponse;
    /**
     * Path to Dockerfile Build Context within the repository.
     */
    dockerBuildContext?: string;
    /**
     * Path to the Dockerfile within the repository.
     */
    dockerfile?: string;
    lastWorkflowRun?: WorkflowRunResponse;
    /**
     * Kubernetes namespace the application is deployed to.
     */
    namespace?: string;
    /**
     * The fields needed for OIDC with GitHub.
     */
    oidcCredentials?: GitHubWorkflowProfileResponseOidcCredentials;
    /**
     * The status of the Pull Request submitted against the users repository.
     */
    prStatus: string;
    /**
     * The URL to the Pull Request submitted against the users repository.
     */
    prURL: string;
    /**
     * The number associated with the submitted pull request.
     */
    pullNumber: number;
    /**
     * Repository Name
     */
    repositoryName?: string;
    /**
     * Repository Owner
     */
    repositoryOwner?: string;
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

export interface IacTemplateDetailsResponse {
    /**
     * Count of the product
     */
    count?: number;
    /**
     * Naming convention of this product
     */
    namingConvention?: string;
    /**
     * The name of the products.
     */
    productName?: string;
}

/**
 * Properties of a IacTemplate.
 */
export interface IacTemplatePropertiesResponse {
    /**
     * the sample instance name of the template
     */
    instanceName?: string;
    /**
     * the source stage of the template
     */
    instanceStage?: string;
    /**
     * Determines the authorization status of requests.
     */
    quickStartTemplateType?: string;
    /**
     * the source store of the template
     */
    sourceResourceId?: string;
    templateDetails?: IacTemplateDetailsResponse[];
    /**
     * Template Name
     */
    templateName?: string;
}

/**
 * Properties of a Stage.
 */
export interface StagePropertiesResponse {
    dependencies?: string[];
    gitEnvironment?: string;
    /**
     * Stage Name
     */
    stageName?: string;
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
