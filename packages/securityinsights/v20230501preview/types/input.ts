import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Resources created in Azure DevOps repository.
     */
    export interface AzureDevOpsResourceInfoArgs {
        /**
         * Id of the pipeline created for the source-control.
         */
        pipelineId?: pulumi.Input<string>;
        /**
         * Id of the service-connection created for the source-control.
         */
        serviceConnectionId?: pulumi.Input<string>;
    }

    /**
     * The mapping of content type to a repo path.
     */
    export interface ContentPathMapArgs {
        /**
         * Content type.
         */
        contentType?: pulumi.Input<string | enums.ContentType>;
        /**
         * The path to the content.
         */
        path?: pulumi.Input<string>;
    }

    /**
     * Description about a deployment.
     */
    export interface DeploymentArgs {
        /**
         * Deployment identifier.
         */
        deploymentId?: pulumi.Input<string>;
        /**
         * Url to access repository action logs.
         */
        deploymentLogsUrl?: pulumi.Input<string>;
        /**
         * The outcome of the deployment.
         */
        deploymentResult?: pulumi.Input<string | enums.DeploymentResult>;
        /**
         * Current status of the deployment.
         */
        deploymentState?: pulumi.Input<string | enums.DeploymentState>;
        /**
         * The time when the deployment finished.
         */
        deploymentTime?: pulumi.Input<string>;
    }

    /**
     * Information regarding a deployment.
     */
    export interface DeploymentInfoArgs {
        /**
         * Deployment information.
         */
        deployment?: pulumi.Input<DeploymentArgs>;
        /**
         * Status while fetching the last deployment.
         */
        deploymentFetchStatus?: pulumi.Input<string | enums.DeploymentFetchStatus>;
        /**
         * Additional details about the deployment that can be shown to the user.
         */
        message?: pulumi.Input<string>;
    }

    /**
     * Resources created in GitHub repository.
     */
    export interface GitHubResourceInfoArgs {
        /**
         * GitHub application installation id.
         */
        appInstallationId?: pulumi.Input<string>;
    }

    /**
     * metadata of a repository.
     */
    export interface RepositoryArgs {
        /**
         * Branch name of repository.
         */
        branch?: pulumi.Input<string>;
        /**
         * Url to access repository action logs.
         */
        deploymentLogsUrl?: pulumi.Input<string>;
        /**
         * Display url of repository.
         */
        displayUrl?: pulumi.Input<string>;
        /**
         * Dictionary of source control content type and path mapping.
         */
        pathMapping?: pulumi.Input<pulumi.Input<ContentPathMapArgs>[]>;
        /**
         * Url of repository.
         */
        url?: pulumi.Input<string>;
    }

    /**
     * Resources created in user's repository for the source-control.
     */
    export interface RepositoryResourceInfoArgs {
        /**
         * Resources created in Azure DevOps for this source-control.
         */
        azureDevOpsResourceInfo?: pulumi.Input<AzureDevOpsResourceInfoArgs>;
        /**
         * Resources created in GitHub for this source-control.
         */
        gitHubResourceInfo?: pulumi.Input<GitHubResourceInfoArgs>;
        /**
         * The webhook object created for the source-control.
         */
        webhook?: pulumi.Input<WebhookArgs>;
    }

    /**
     * Detail about the webhook object.
     */
    export interface WebhookArgs {
        /**
         * A flag to instruct the backend service to rotate webhook secret.
         */
        rotateWebhookSecret?: pulumi.Input<boolean>;
        /**
         * Unique identifier for the webhook.
         */
        webhookId?: pulumi.Input<string>;
        /**
         * Time when the webhook secret was updated.
         */
        webhookSecretUpdateTime?: pulumi.Input<string>;
        /**
         * URL that gets invoked by the webhook.
         */
        webhookUrl?: pulumi.Input<string>;
    }
