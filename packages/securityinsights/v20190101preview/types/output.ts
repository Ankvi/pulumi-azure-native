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
     * Describes an automation rule action to modify an object's properties
     */
    export interface AutomationRuleModifyPropertiesActionResponse {
        /**
         * The configuration of the modify properties automation rule action
         */
        actionConfiguration: AutomationRuleModifyPropertiesActionResponseActionConfiguration;
        /**
         * The type of the automation rule action
         * Expected value is 'ModifyProperties'.
         */
        actionType: "ModifyProperties";
        /**
         * The order of execution of the automation rule action
         */
        order: number;
    }

    /**
     * The configuration of the modify properties automation rule action
     */
    export interface AutomationRuleModifyPropertiesActionResponseActionConfiguration {
        /**
         * The reason the incident was closed
         */
        classification?: string;
        /**
         * Describes the reason the incident was closed
         */
        classificationComment?: string;
        /**
         * The classification reason to close the incident with
         */
        classificationReason?: string;
        /**
         * List of labels to add to the incident
         */
        labels?: IncidentLabelResponse[];
        /**
         * Describes a user that the incident is assigned to
         */
        owner?: IncidentOwnerInfoResponse;
        /**
         * The severity of the incident
         */
        severity?: string;
        /**
         * The status of the incident
         */
        status?: string;
    }

    /**
     * Describes an automation rule condition that evaluates a property's value
     */
    export interface AutomationRulePropertyValuesConditionResponse {
        /**
         * The configuration of the automation rule condition
         */
        conditionProperties: AutomationRulePropertyValuesConditionResponseConditionProperties;
        /**
         * The type of the automation rule condition
         * Expected value is 'Property'.
         */
        conditionType: "Property";
    }

    /**
     * The configuration of the automation rule condition
     */
    export interface AutomationRulePropertyValuesConditionResponseConditionProperties {
        /**
         * The operator to use for evaluation the condition
         */
        operator?: string;
        /**
         * The property to evaluate
         */
        propertyName?: string;
        /**
         * The values to use for evaluating the condition
         */
        propertyValues?: string[];
    }

    /**
     * Describes an automation rule action to run a playbook
     */
    export interface AutomationRuleRunPlaybookActionResponse {
        /**
         * The configuration of the run playbook automation rule action
         */
        actionConfiguration: AutomationRuleRunPlaybookActionResponseActionConfiguration;
        /**
         * The type of the automation rule action
         * Expected value is 'RunPlaybook'.
         */
        actionType: "RunPlaybook";
        /**
         * The order of execution of the automation rule action
         */
        order: number;
    }

    /**
     * The configuration of the run playbook automation rule action
     */
    export interface AutomationRuleRunPlaybookActionResponseActionConfiguration {
        /**
         * The resource id of the playbook resource
         */
        logicAppResourceId?: string;
        /**
         * The tenant id of the playbook resource
         */
        tenantId?: string;
    }

    /**
     * Describes automation rule triggering logic
     */
    export interface AutomationRuleTriggeringLogicResponse {
        /**
         * The conditions to evaluate to determine if the automation rule should be triggered on a given object
         */
        conditions?: AutomationRulePropertyValuesConditionResponse[];
        /**
         * Determines when the automation rule should automatically expire and be disabled.
         */
        expirationTimeUtc?: string;
        /**
         * Determines whether the automation rule is enabled or disabled.
         */
        isEnabled: boolean;
        /**
         * The type of object the automation rule triggers on
         */
        triggersOn: string;
        /**
         * The type of event the automation rule triggers on
         */
        triggersWhen: string;
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
     * Information on the client (user or application) that made some action
     */
    export interface ClientInfoResponse {
        /**
         * The email of the client.
         */
        email?: string;
        /**
         * The name of the client.
         */
        name?: string;
        /**
         * The object id of the client.
         */
        objectId?: string;
        /**
         * The user principal name of the client.
         */
        userPrincipalName?: string;
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
     * Describes related incident information for the bookmark
     */
    export interface IncidentInfoResponse {
        /**
         * Incident Id
         */
        incidentId?: string;
        /**
         * Relation Name
         */
        relationName?: string;
        /**
         * The severity of the incident
         */
        severity?: string;
        /**
         * The title of the incident
         */
        title?: string;
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
