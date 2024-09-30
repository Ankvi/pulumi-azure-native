import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Information on the azure container registry
 */
export interface ACRArgs {
    /**
     * ACR registry
     */
    acrRegistryName?: pulumi.Input<string>;
    /**
     * ACR repository
     */
    acrRepositoryName?: pulumi.Input<string>;
    /**
     * ACR resource group
     */
    acrResourceGroup?: pulumi.Input<string>;
    /**
     * ACR subscription id
     */
    acrSubscriptionId?: pulumi.Input<string>;
}

export interface DeploymentPropertiesArgs {
    /**
     * Helm chart directory path in repository.
     */
    helmChartPath?: pulumi.Input<string>;
    /**
     * Helm Values.yaml file location in repository.
     */
    helmValues?: pulumi.Input<string>;
    kubeManifestLocations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Determines the type of manifests within the repository.
     */
    manifestType?: pulumi.Input<string | enums.ManifestType>;
    /**
     * Manifest override values.
     */
    overrides?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The fields needed for OIDC with GitHub.
 */
export interface GitHubWorkflowProfileOidcCredentialsArgs {
    /**
     * Azure Application Client ID
     */
    azureClientId?: pulumi.Input<string>;
    /**
     * Azure Directory (tenant) ID
     */
    azureTenantId?: pulumi.Input<string>;
}

export interface IacTemplateDetailsArgs {
    /**
     * Count of the product
     */
    count?: pulumi.Input<number>;
    /**
     * Naming convention of this product
     */
    namingConvention?: pulumi.Input<string>;
    /**
     * The name of the products.
     */
    productName?: pulumi.Input<string>;
}

/**
 * Properties of a IacTemplate.
 */
export interface IacTemplatePropertiesArgs {
    /**
     * the sample instance name of the template
     */
    instanceName?: pulumi.Input<string>;
    /**
     * the source stage of the template
     */
    instanceStage?: pulumi.Input<string>;
    /**
     * Determines the authorization status of requests.
     */
    quickStartTemplateType?: pulumi.Input<string | enums.QuickStartTemplateType>;
    /**
     * the source store of the template
     */
    sourceResourceId?: pulumi.Input<string>;
    templateDetails?: pulumi.Input<pulumi.Input<IacTemplateDetailsArgs>[]>;
    /**
     * Template Name
     */
    templateName?: pulumi.Input<string>;
}

/**
 * Properties of a Stage.
 */
export interface StagePropertiesArgs {
    dependencies?: pulumi.Input<pulumi.Input<string>[]>;
    gitEnvironment?: pulumi.Input<string>;
    /**
     * Stage Name
     */
    stageName?: pulumi.Input<string>;
}

export interface WorkflowRunArgs {
    /**
     * Describes the status of the workflow run
     */
    workflowRunStatus?: pulumi.Input<string | enums.WorkflowRunStatus>;
}



