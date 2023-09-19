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

    export interface WorkflowRunArgs {
        /**
         * Describes the status of the workflow run
         */
        workflowRunStatus?: pulumi.Input<string | enums.WorkflowRunStatus>;
    }
