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
     * Settings for how to dynamically override alert static details
     */
    export interface AlertDetailsOverrideResponse {
        /**
         * the format containing columns name(s) to override the alert description
         */
        alertDescriptionFormat?: string;
        /**
         * the format containing columns name(s) to override the alert name
         */
        alertDisplayNameFormat?: string;
        /**
         * the column name to take the alert severity from
         */
        alertSeverityColumnName?: string;
        /**
         * the column name to take the alert tactics from
         */
        alertTacticsColumnName?: string;
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
     * Single entity mapping for the alert rule
     */
    export interface EntityMappingResponse {
        /**
         * The V3 type of the mapped entity
         */
        entityType?: string;
        /**
         * array of field mappings for the given entity mapping
         */
        fieldMappings?: FieldMappingResponse[];
    }

    /**
     * A single field mapping of the mapped entity
     */
    export interface FieldMappingResponse {
        /**
         * the column name to be mapped to the identifier
         */
        columnName?: string;
        /**
         * the V3 identifier of the entity
         */
        identifier?: string;
    }

    /**
     * Represents a Fusion scenario exclusion patterns in Fusion detection.
     */
    export interface FusionScenarioExclusionPatternResponse {
        /**
         * DateTime when scenario exclusion pattern is added in UTC.
         */
        dateAddedInUTC: string;
        /**
         * Scenario exclusion pattern.
         */
        exclusionPattern: string;
    }

    /**
     * Represents a supported source signal configuration in Fusion detection.
     */
    export interface FusionSourceSettingsResponse {
        /**
         * Determines whether this source signal is enabled or disabled in Fusion detection.
         */
        enabled: boolean;
        /**
         * Name of the Fusion source signal. Refer to Fusion alert rule template for supported values.
         */
        sourceName: string;
        /**
         * Configuration for all source subtypes under this source signal consumed in fusion detection.
         */
        sourceSubTypes?: FusionSourceSubTypeSettingResponse[];
    }

    /**
     * Represents a supported source subtype configuration under a source signal in Fusion detection.
     */
    export interface FusionSourceSubTypeSettingResponse {
        /**
         * Determines whether this source subtype under source signal is enabled or disabled in Fusion detection.
         */
        enabled: boolean;
        /**
         * Severity configuration for a source subtype consumed in fusion detection.
         */
        severityFilters: FusionSubTypeSeverityFilterResponse;
        /**
         * The display name of source subtype under a source signal consumed in Fusion detection.
         */
        sourceSubTypeDisplayName: string;
        /**
         * The Name of the source subtype under a given source signal in Fusion detection. Refer to Fusion alert rule template for supported values.
         */
        sourceSubTypeName: string;
    }

    /**
     * Represents severity configuration for a source subtype consumed in Fusion detection.
     */
    export interface FusionSubTypeSeverityFilterResponse {
        /**
         * Individual Severity configuration settings for a given source subtype consumed in Fusion detection.
         */
        filters?: FusionSubTypeSeverityFiltersItemResponse[];
        /**
         * Determines whether this source subtype supports severity configuration or not.
         */
        isSupported: boolean;
    }

    /**
     * Represents a Severity filter setting for a given source subtype consumed in Fusion detection.
     */
    export interface FusionSubTypeSeverityFiltersItemResponse {
        /**
         * Determines whether this severity is enabled or disabled for this source subtype consumed in Fusion detection.
         */
        enabled: boolean;
        /**
         * The Severity for a given source subtype consumed in Fusion detection.
         */
        severity: string;
    }

    /**
     * GetInsights Query Errors.
     */
    export interface GetInsightsErrorResponse {
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
        errors?: GetInsightsErrorResponse[];
        /**
         * the total items found for the insights request
         */
        totalCount: number;
    }

    /**
     * Grouping configuration property bag.
     */
    export interface GroupingConfigurationResponse {
        /**
         * Grouping enabled
         */
        enabled: boolean;
        /**
         * A list of alert details to group by (when matchingMethod is Selected)
         */
        groupByAlertDetails?: string[];
        /**
         * A list of custom details keys to group by (when matchingMethod is Selected). Only keys defined in the current alert rule may be used.
         */
        groupByCustomDetails?: string[];
        /**
         * A list of entity types to group by (when matchingMethod is Selected). Only entities defined in the current alert rule may be used.
         */
        groupByEntities?: string[];
        /**
         * Limit the group to alerts created within the lookback duration (in ISO 8601 duration format)
         */
        lookbackDuration: string;
        /**
         * Grouping matching method. When method is Selected at least one of groupByEntities, groupByAlertDetails, groupByCustomDetails must be provided and not empty.
         */
        matchingMethod: string;
        /**
         * Re-open closed matching incidents
         */
        reopenClosedIncident: boolean;
    }

    /**
     * Incident Configuration property bag.
     */
    export interface IncidentConfigurationResponse {
        /**
         * Create incidents from alerts triggered by this analytics rule
         */
        createIncident: boolean;
        /**
         * Set how the alerts that are triggered by this analytics rule, are grouped into incidents
         */
        groupingConfiguration?: GroupingConfigurationResponse;
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
     * User information that made some action
     */
    export interface WatchlistUserInfoResponse {
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
