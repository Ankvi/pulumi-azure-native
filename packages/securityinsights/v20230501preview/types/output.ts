import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Represents Activity timeline item.
     */
    export interface ActivityTimelineItemResponse {
        /**
         * The grouping bucket end time.
         */
        bucketEndTimeUTC: string;
        /**
         * The grouping bucket start time.
         */
        bucketStartTimeUTC: string;
        /**
         * The activity timeline content.
         */
        content: string;
        /**
         * The time of the first activity in the grouping bucket.
         */
        firstActivityTimeUTC: string;
        /**
         * The entity query kind
         * Expected value is 'Activity'.
         */
        kind: "Activity";
        /**
         * The time of the last activity in the grouping bucket.
         */
        lastActivityTimeUTC: string;
        /**
         * The activity query id.
         */
        queryId: string;
        /**
         * The activity timeline title.
         */
        title: string;
    }

    /**
     * Represents anomaly timeline item.
     */
    export interface AnomalyTimelineItemResponse {
        /**
         * The anomaly azure resource id.
         */
        azureResourceId: string;
        /**
         * The anomaly description.
         */
        description?: string;
        /**
         * The anomaly name.
         */
        displayName: string;
        /**
         * The anomaly end time.
         */
        endTimeUtc: string;
        /**
         * The intent of the anomaly.
         */
        intent?: string;
        /**
         * The entity query kind
         * Expected value is 'Anomaly'.
         */
        kind: "Anomaly";
        /**
         * The anomaly product name.
         */
        productName?: string;
        /**
         * The reasons that cause the anomaly.
         */
        reasons?: string[];
        /**
         * The anomaly start time.
         */
        startTimeUtc: string;
        /**
         * The techniques of the anomaly.
         */
        techniques?: string[];
        /**
         * The anomaly generated time.
         */
        timeGenerated: string;
        /**
         * The name of the anomaly vendor.
         */
        vendor?: string;
    }

    /**
     * Resources created in Azure DevOps repository.
     */
    export interface AzureDevOpsResourceInfoResponse {
        /**
         * Id of the pipeline created for the source-control.
         */
        pipelineId?: string;
        /**
         * Id of the service-connection created for the source-control.
         */
        serviceConnectionId?: string;
    }

    /**
     * Represents bookmark timeline item.
     */
    export interface BookmarkTimelineItemResponse {
        /**
         * The bookmark azure resource id.
         */
        azureResourceId: string;
        /**
         * Describes a user that created the bookmark
         */
        createdBy?: UserInfoResponse;
        /**
         * The bookmark display name.
         */
        displayName?: string;
        /**
         * The bookmark end time.
         */
        endTimeUtc?: string;
        /**
         * The bookmark event time.
         */
        eventTime?: string;
        /**
         * The entity query kind
         * Expected value is 'Bookmark'.
         */
        kind: "Bookmark";
        /**
         * List of labels relevant to this bookmark
         */
        labels?: string[];
        /**
         * The notes of the bookmark
         */
        notes?: string;
        /**
         * The bookmark start time.
         */
        startTimeUtc?: string;
    }

    /**
     * The mapping of content type to a repo path.
     */
    export interface ContentPathMapResponse {
        /**
         * Content type.
         */
        contentType?: string;
        /**
         * The path to the content.
         */
        path?: string;
    }

    /**
     * Information regarding a deployment.
     */
    export interface DeploymentInfoResponse {
        /**
         * Deployment information.
         */
        deployment?: DeploymentResponse;
        /**
         * Status while fetching the last deployment.
         */
        deploymentFetchStatus?: string;
        /**
         * Additional details about the deployment that can be shown to the user.
         */
        message?: string;
    }

    /**
     * Description about a deployment.
     */
    export interface DeploymentResponse {
        /**
         * Deployment identifier.
         */
        deploymentId?: string;
        /**
         * Url to access repository action logs.
         */
        deploymentLogsUrl?: string;
        /**
         * The outcome of the deployment.
         */
        deploymentResult?: string;
        /**
         * Current status of the deployment.
         */
        deploymentState?: string;
        /**
         * The time when the deployment finished.
         */
        deploymentTime?: string;
    }

    /**
     * Entity insight Item.
     */
    export interface EntityInsightItemResponse {
        /**
         * Query results for table insights query.
         */
        chartQueryResults?: InsightsTableResultResponse[];
        /**
         * The query id of the insight
         */
        queryId?: string;
        /**
         * The Time interval that the query actually executed on.
         */
        queryTimeInterval?: EntityInsightItemResponseQueryTimeInterval;
        /**
         * Query results for table insights query.
         */
        tableQueryResults?: InsightsTableResultResponse;
    }

    /**
     * The Time interval that the query actually executed on.
     */
    export interface EntityInsightItemResponseQueryTimeInterval {
        /**
         * Insight query end time
         */
        endTime?: string;
        /**
         * Insight query start time
         */
        startTime?: string;
    }

    /**
     * GetInsights Query Errors.
     */
    export interface GetInsightsErrorKindResponse {
        /**
         * the error message
         */
        errorMessage: string;
        /**
         * the query kind
         */
        kind: string;
        /**
         * the query id
         */
        queryId?: string;
    }

    /**
     * Get Insights result metadata.
     */
    export interface GetInsightsResultsMetadataResponse {
        /**
         * information about the failed queries
         */
        errors?: GetInsightsErrorKindResponse[];
        /**
         * the total items found for the insights request
         */
        totalCount: number;
    }

    /**
     * Resources created in GitHub repository.
     */
    export interface GitHubResourceInfoResponse {
        /**
         * GitHub application installation id.
         */
        appInstallationId?: string;
    }

    /**
     * Query results for table insights query.
     */
    export interface InsightsTableResultResponse {
        /**
         * Columns Metadata of the table
         */
        columns?: InsightsTableResultResponseColumns[];
        /**
         * Rows data of the table
         */
        rows?: string[][];
    }

    export interface InsightsTableResultResponseColumns {
        /**
         * the name of the colum
         */
        name?: string;
        /**
         * the type of the colum
         */
        type?: string;
    }

    /**
     * Represents a repository.
     */
    export interface RepoResponse {
        /**
         * Array of branches.
         */
        branches?: string[];
        /**
         * The name of the repository.
         */
        fullName?: string;
        /**
         * The url to access the repository.
         */
        url?: string;
    }

    /**
     * Resources created in user's repository for the source-control.
     */
    export interface RepositoryResourceInfoResponse {
        /**
         * Resources created in Azure DevOps for this source-control.
         */
        azureDevOpsResourceInfo?: AzureDevOpsResourceInfoResponse;
        /**
         * Resources created in GitHub for this source-control.
         */
        gitHubResourceInfo?: GitHubResourceInfoResponse;
        /**
         * The webhook object created for the source-control.
         */
        webhook?: WebhookResponse;
    }

    /**
     * metadata of a repository.
     */
    export interface RepositoryResponse {
        /**
         * Branch name of repository.
         */
        branch?: string;
        /**
         * Url to access repository action logs.
         */
        deploymentLogsUrl?: string;
        /**
         * Display url of repository.
         */
        displayUrl?: string;
        /**
         * Dictionary of source control content type and path mapping.
         */
        pathMapping?: ContentPathMapResponse[];
        /**
         * Url of repository.
         */
        url?: string;
    }

    /**
     * Represents security alert timeline item.
     */
    export interface SecurityAlertTimelineItemResponse {
        /**
         * The name of the alert type.
         */
        alertType: string;
        /**
         * The alert azure resource id.
         */
        azureResourceId: string;
        /**
         * The alert description.
         */
        description?: string;
        /**
         * The alert name.
         */
        displayName: string;
        /**
         * The alert end time.
         */
        endTimeUtc: string;
        /**
         * The intent of the alert.
         */
        intent: string;
        /**
         * The entity query kind
         * Expected value is 'SecurityAlert'.
         */
        kind: "SecurityAlert";
        /**
         * The alert product name.
         */
        productName?: string;
        /**
         * The alert severity.
         */
        severity: string;
        /**
         * The alert start time.
         */
        startTimeUtc: string;
        /**
         * The techniques of the alert.
         */
        techniques?: string[];
        /**
         * The alert generated time.
         */
        timeGenerated: string;
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

    /**
     * timeline aggregation information per kind
     */
    export interface TimelineAggregationResponse {
        /**
         * the total items found for a kind
         */
        count: number;
        /**
         * the query kind
         */
        kind: string;
    }

    /**
     * Timeline Query Errors.
     */
    export interface TimelineErrorResponse {
        /**
         * the error message
         */
        errorMessage: string;
        /**
         * the query kind
         */
        kind: string;
        /**
         * the query id
         */
        queryId?: string;
    }

    /**
     * Expansion result metadata.
     */
    export interface TimelineResultsMetadataResponse {
        /**
         * timeline aggregation per kind
         */
        aggregations: TimelineAggregationResponse[];
        /**
         * information about the failure queries
         */
        errors?: TimelineErrorResponse[];
        /**
         * the total items found for the timeline request
         */
        totalCount: number;
    }

    /**
     * User information that made some action
     */
    export interface UserInfoResponse {
        /**
         * The email of the user.
         */
        email: string;
        /**
         * The name of the user.
         */
        name: string;
        /**
         * The object id of the user.
         */
        objectId?: string;
    }

    /**
     * Detail about the webhook object.
     */
    export interface WebhookResponse {
        /**
         * A flag to instruct the backend service to rotate webhook secret.
         */
        rotateWebhookSecret?: boolean;
        /**
         * Unique identifier for the webhook.
         */
        webhookId?: string;
        /**
         * Time when the webhook secret was updated.
         */
        webhookSecretUpdateTime?: string;
        /**
         * URL that gets invoked by the webhook.
         */
        webhookUrl?: string;
    }
