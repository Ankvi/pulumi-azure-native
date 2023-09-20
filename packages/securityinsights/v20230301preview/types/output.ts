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
     * Incident additional data property bag.
     */
    export interface IncidentAdditionalDataResponse {
        /**
         * List of product names of alerts in the incident
         */
        alertProductNames: string[];
        /**
         * The number of alerts in the incident
         */
        alertsCount: number;
        /**
         * The number of bookmarks in the incident
         */
        bookmarksCount: number;
        /**
         * The number of comments in the incident
         */
        commentsCount: number;
        /**
         * The provider incident url to the incident in Microsoft 365 Defender portal
         */
        providerIncidentUrl: string;
        /**
         * The tactics associated with incident
         */
        tactics: string[];
        /**
         * The techniques associated with incident's tactics
         */
        techniques: string[];
    }

    /**
     * Represents an incident label
     */
    export interface IncidentLabelResponse {
        /**
         * The name of the label
         */
        labelName: string;
        /**
         * The type of the label
         */
        labelType: string;
    }

    /**
     * Information on the user an incident is assigned to
     */
    export interface IncidentOwnerInfoResponse {
        /**
         * The name of the user the incident is assigned to.
         */
        assignedTo?: string;
        /**
         * The email of the user the incident is assigned to.
         */
        email?: string;
        /**
         * The object id of the user the incident is assigned to.
         */
        objectId?: string;
        /**
         * The type of the owner the incident is assigned to.
         */
        ownerType?: string;
        /**
         * The user principal name of the user the incident is assigned to.
         */
        userPrincipalName?: string;
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
     * Describes team information
     */
    export interface TeamInformationResponse {
        /**
         * The description of the team
         */
        description: string;
        /**
         * The name of the team
         */
        name: string;
        /**
         * The primary channel URL of the team
         */
        primaryChannelUrl: string;
        /**
         * The time the team was created
         */
        teamCreationTimeUtc: string;
        /**
         * Team ID
         */
        teamId: string;
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