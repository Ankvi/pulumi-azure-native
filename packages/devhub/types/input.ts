import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Information on the azure container registry
 */
export interface ACRArgs {
    /**
     * ACR registry
     */
    acrRegistryName?: pulumi.Input<string | undefined>;
    /**
     * ACR repository
     */
    acrRepositoryName?: pulumi.Input<string | undefined>;
    /**
     * ACR resource group
     */
    acrResourceGroup?: pulumi.Input<string | undefined>;
    /**
     * ACR subscription id
     */
    acrSubscriptionId?: pulumi.Input<string | undefined>;
}

export interface DeploymentPropertiesArgs {
    /**
     * Helm chart directory path in repository.
     */
    helmChartPath?: pulumi.Input<string | undefined>;
    /**
     * Helm Values.yaml file location in repository.
     */
    helmValues?: pulumi.Input<string | undefined>;
    kubeManifestLocations?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Determines the type of manifests within the repository.
     */
    manifestType?: pulumi.Input<string | enums.ManifestType | undefined>;
    /**
     * Manifest override values.
     */
    overrides?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}

/**
 * GitHub Workflow Profile
 */
export interface GitHubWorkflowProfileArgs {
    /**
     * Information on the azure container registry
     */
    acr?: pulumi.Input<ACRArgs | undefined>;
    /**
     * The Azure Kubernetes Cluster Resource the application will be deployed to.
     */
    aksResourceId?: pulumi.Input<string | undefined>;
    /**
     * Repository Branch Name
     */
    branchName?: pulumi.Input<string | undefined>;
    deploymentProperties?: pulumi.Input<DeploymentPropertiesArgs | undefined>;
    /**
     * Path to Dockerfile Build Context within the repository.
     */
    dockerBuildContext?: pulumi.Input<string | undefined>;
    /**
     * Path to the Dockerfile within the repository.
     */
    dockerfile?: pulumi.Input<string | undefined>;
    lastWorkflowRun?: pulumi.Input<WorkflowRunArgs | undefined>;
    /**
     * Kubernetes namespace the application is deployed to.
     */
    namespace?: pulumi.Input<string | undefined>;
    /**
     * The fields needed for OIDC with GitHub.
     */
    oidcCredentials?: pulumi.Input<GitHubWorkflowProfileOidcCredentialsArgs | undefined>;
    /**
     * Repository Name
     */
    repositoryName?: pulumi.Input<string | undefined>;
    /**
     * Repository Owner
     */
    repositoryOwner?: pulumi.Input<string | undefined>;
}

/**
 * The fields needed for OIDC with GitHub.
 */
export interface GitHubWorkflowProfileOidcCredentialsArgs {
    /**
     * Azure Application Client ID
     */
    azureClientId?: pulumi.Input<string | undefined>;
    /**
     * Azure Directory (tenant) ID
     */
    azureTenantId?: pulumi.Input<string | undefined>;
}

export interface IacTemplateDetailsArgs {
    /**
     * Count of the product
     */
    count?: pulumi.Input<number | undefined>;
    /**
     * Naming convention of this product
     */
    namingConvention?: pulumi.Input<string | undefined>;
    /**
     * The name of the products.
     */
    productName?: pulumi.Input<string | undefined>;
}

/**
 * Properties of a IacTemplate.
 */
export interface IacTemplatePropertiesArgs {
    /**
     * the sample instance name of the template
     */
    instanceName?: pulumi.Input<string | undefined>;
    /**
     * the source stage of the template
     */
    instanceStage?: pulumi.Input<string | undefined>;
    /**
     * Determines the authorization status of requests.
     */
    quickStartTemplateType?: pulumi.Input<string | enums.QuickStartTemplateType | undefined>;
    /**
     * the source store of the template
     */
    sourceResourceId?: pulumi.Input<string | undefined>;
    templateDetails?: pulumi.Input<pulumi.Input<IacTemplateDetailsArgs>[] | undefined>;
    /**
     * Template Name
     */
    templateName?: pulumi.Input<string | undefined>;
}

/**
 * Properties of a Stage.
 */
export interface StagePropertiesArgs {
    dependencies?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    gitEnvironment?: pulumi.Input<string | undefined>;
    /**
     * Stage Name
     */
    stageName?: pulumi.Input<string | undefined>;
}

export interface WorkflowRunArgs {
    /**
     * Describes the status of the workflow run
     */
    workflowRunStatus?: pulumi.Input<string | enums.WorkflowRunStatus | undefined>;
}
