import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The Activity query definitions
     */
    export interface ActivityEntityQueriesPropertiesResponseQueryDefinitions {
        /**
         * The Activity query to run on a given entity
         */
        query?: string;
    }

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

    export interface AddIncidentTaskActionPropertiesResponse {
        /**
         * The description of the task.
         */
        description?: string;
        /**
         * The title of the task.
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
         * List of additional dynamic properties to override
         */
        alertDynamicProperties?: AlertPropertyMappingResponse[];
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
     * A single alert property mapping to override
     */
    export interface AlertPropertyMappingResponse {
        /**
         * The V3 alert property
         */
        alertProperty?: string;
        /**
         * the column name to use to override this property
         */
        value?: string;
    }

    /**
     * Alerts data type for data connectors.
     */
    export interface AlertsDataTypeOfDataConnectorResponse {
        /**
         * Alerts data type connection.
         */
        alerts: DataConnectorDataTypeCommonResponse;
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
     * An entity describing a content item.
     */
    export interface AssignmentItemResponse {
        /**
         * The resource id of the content item
         */
        resourceId?: string;
    }

    /**
     * Describes an automation rule action to add a task to an incident
     */
    export interface AutomationRuleAddIncidentTaskActionResponse {
        actionConfiguration?: AddIncidentTaskActionPropertiesResponse;
        /**
         * The type of the automation rule action.
         * Expected value is 'AddIncidentTask'.
         */
        actionType: "AddIncidentTask";
        order: number;
    }

    export interface AutomationRuleBooleanConditionResponse {
        innerConditions?: (BooleanConditionPropertiesResponse | PropertyArrayChangedConditionPropertiesResponse | PropertyArrayConditionPropertiesResponse | PropertyChangedConditionPropertiesResponse | PropertyConditionPropertiesResponse)[];
        operator?: string;
    }

    /**
     * Describes an automation rule action to modify an object's properties
     */
    export interface AutomationRuleModifyPropertiesActionResponse {
        actionConfiguration?: IncidentPropertiesActionResponse;
        /**
         * The type of the automation rule action.
         * Expected value is 'ModifyProperties'.
         */
        actionType: "ModifyProperties";
        order: number;
    }

    export interface AutomationRulePropertyArrayChangedValuesConditionResponse {
        arrayType?: string;
        changeType?: string;
    }

    export interface AutomationRulePropertyArrayValuesConditionResponse {
        arrayConditionType?: string;
        arrayType?: string;
        itemConditions?: (BooleanConditionPropertiesResponse | PropertyArrayChangedConditionPropertiesResponse | PropertyArrayConditionPropertiesResponse | PropertyChangedConditionPropertiesResponse | PropertyConditionPropertiesResponse)[];
    }

    export interface AutomationRulePropertyValuesChangedConditionResponse {
        changeType?: string;
        operator?: string;
        propertyName?: string;
        propertyValues?: string[];
    }

    export interface AutomationRulePropertyValuesConditionResponse {
        operator?: string;
        /**
         * The property to evaluate in an automation rule property condition.
         */
        propertyName?: string;
        propertyValues?: string[];
    }

    /**
     * Describes an automation rule action to run a playbook
     */
    export interface AutomationRuleRunPlaybookActionResponse {
        actionConfiguration?: PlaybookActionPropertiesResponse;
        /**
         * The type of the automation rule action.
         * Expected value is 'RunPlaybook'.
         */
        actionType: "RunPlaybook";
        order: number;
    }

    /**
     * Describes automation rule triggering logic.
     */
    export interface AutomationRuleTriggeringLogicResponse {
        /**
         * The conditions to evaluate to determine if the automation rule should be triggered on a given object.
         */
        conditions?: (BooleanConditionPropertiesResponse | PropertyArrayChangedConditionPropertiesResponse | PropertyArrayConditionPropertiesResponse | PropertyChangedConditionPropertiesResponse | PropertyConditionPropertiesResponse)[];
        /**
         * Determines when the automation rule should automatically expire and be disabled.
         */
        expirationTimeUtc?: string;
        /**
         * Determines whether the automation rule is enabled or disabled.
         */
        isEnabled: boolean;
        triggersOn: string;
        triggersWhen: string;
    }

    /**
     * Connector Availability Status
     */
    export interface AvailabilityResponse {
        /**
         * Set connector as preview
         */
        isPreview?: boolean;
        /**
         * The connector Availability Status
         */
        status?: number;
    }

    /**
     * The available data types for Amazon Web Services CloudTrail data connector.
     */
    export interface AwsCloudTrailDataConnectorDataTypesResponse {
        /**
         * Logs data type.
         */
        logs: AwsCloudTrailDataConnectorDataTypesResponseLogs;
    }

    /**
     * Logs data type.
     */
    export interface AwsCloudTrailDataConnectorDataTypesResponseLogs {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state: string;
    }

    /**
     * The available data types for Amazon Web Services S3 data connector.
     */
    export interface AwsS3DataConnectorDataTypesResponse {
        /**
         * Logs data type.
         */
        logs: AwsS3DataConnectorDataTypesResponseLogs;
    }

    /**
     * Logs data type.
     */
    export interface AwsS3DataConnectorDataTypesResponseLogs {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state: string;
    }

    /**
     * Describes the entity mappings of a single entity
     */
    export interface BookmarkEntityMappingsResponse {
        /**
         * The entity type
         */
        entityType?: string;
        /**
         * Array of fields mapping for that entity type
         */
        fieldMappings?: EntityFieldMappingResponse[];
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
     * Describes an automation rule condition that applies a boolean operator (e.g AND, OR) to conditions
     */
    export interface BooleanConditionPropertiesResponse {
        conditionProperties?: AutomationRuleBooleanConditionResponse;
        /**
         *
         * Expected value is 'Boolean'.
         */
        conditionType: "Boolean";
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
     * Describe the authentication properties needed to successfully authenticate with the server
     */
    export interface CodelessConnectorPollingAuthPropertiesResponse {
        /**
         * A prefix send in the header before the actual token
         */
        apiKeyIdentifier?: string;
        /**
         * The header name which the token is sent with
         */
        apiKeyName?: string;
        /**
         * The authentication type
         */
        authType: string;
        /**
         * The endpoint used to authorize the user, used in Oauth 2.0 flow
         */
        authorizationEndpoint?: string;
        /**
         * The query parameters used in authorization request, used in Oauth 2.0 flow
         */
        authorizationEndpointQueryParameters?: any;
        /**
         * Describes the flow name, for example 'AuthCode' for Oauth 2.0
         */
        flowName?: string;
        /**
         * Marks if the key should sent in header
         */
        isApiKeyInPostPayload?: string;
        /**
         * Marks if we should send the client secret in header or payload, used in Oauth 2.0 flow
         */
        isClientSecretInHeader?: boolean;
        /**
         * The redirect endpoint where we will get the authorization code, used in Oauth 2.0 flow
         */
        redirectionEndpoint?: string;
        /**
         * The OAuth token scope
         */
        scope?: string;
        /**
         * The endpoint used to issue a token, used in Oauth 2.0 flow
         */
        tokenEndpoint?: string;
        /**
         * The query headers used in token request, used in Oauth 2.0 flow
         */
        tokenEndpointHeaders?: any;
        /**
         * The query parameters used in token request, used in Oauth 2.0 flow
         */
        tokenEndpointQueryParameters?: any;
    }

    /**
     * Config to describe the polling config for API poller connector
     */
    export interface CodelessConnectorPollingConfigPropertiesResponse {
        /**
         * Describe the authentication type of the poller
         */
        auth: CodelessConnectorPollingAuthPropertiesResponse;
        /**
         * The poller active status
         */
        isActive?: boolean;
        /**
         * Describe the poll request paging config of the poller
         */
        paging?: CodelessConnectorPollingPagingPropertiesResponse;
        /**
         * Describe the poll request config parameters of the poller
         */
        request: CodelessConnectorPollingRequestPropertiesResponse;
        /**
         * Describe the response config parameters of the poller
         */
        response?: CodelessConnectorPollingResponsePropertiesResponse;
    }

    /**
     * Describe the properties needed to make a pagination call
     */
    export interface CodelessConnectorPollingPagingPropertiesResponse {
        /**
         * Defines the name of a next page attribute
         */
        nextPageParaName?: string;
        /**
         * Defines the path to a next page token JSON
         */
        nextPageTokenJsonPath?: string;
        /**
         * Defines the path to a page count attribute
         */
        pageCountAttributePath?: string;
        /**
         * Defines the paging size
         */
        pageSize?: number;
        /**
         * Defines the name of the page size parameter
         */
        pageSizeParaName?: string;
        /**
         * Defines the path to a paging time stamp attribute
         */
        pageTimeStampAttributePath?: string;
        /**
         * Defines the path to a page total count attribute
         */
        pageTotalCountAttributePath?: string;
        /**
         * Describes the type. could be 'None', 'PageToken', 'PageCount', 'TimeStamp'
         */
        pagingType: string;
        /**
         * Determines whether to search for the latest time stamp in the events list
         */
        searchTheLatestTimeStampFromEventsList?: string;
    }

    /**
     * Describe the request properties needed to successfully pull from the server
     */
    export interface CodelessConnectorPollingRequestPropertiesResponse {
        /**
         * Describe the endpoint we should pull the data from
         */
        apiEndpoint: string;
        /**
         * This will be used the query events from the end of the time window
         */
        endTimeAttributeName?: string;
        /**
         * Describe the headers sent in the poll request
         */
        headers?: any;
        /**
         * The http method type we will use in the poll request, GET or POST
         */
        httpMethod: string;
        /**
         * Describe the query parameters sent in the poll request
         */
        queryParameters?: any;
        /**
         * For advanced scenarios for example user name/password embedded in nested JSON payload
         */
        queryParametersTemplate?: string;
        /**
         * The time format will be used the query events in a specific window
         */
        queryTimeFormat: string;
        /**
         * The window interval we will use the pull the data
         */
        queryWindowInMin: number;
        /**
         * Defines the rate limit QPS
         */
        rateLimitQps?: number;
        /**
         * Describe the amount of time we should try and poll the data in case of failure
         */
        retryCount?: number;
        /**
         * This will be used the query events from a start of the time window
         */
        startTimeAttributeName?: string;
        /**
         * The number of seconds we will consider as a request timeout
         */
        timeoutInSeconds?: number;
    }

    /**
     * Describes the response from the external server
     */
    export interface CodelessConnectorPollingResponsePropertiesResponse {
        /**
         * Describes the path we should extract the data in the response
         */
        eventsJsonPaths: string[];
        /**
         * Describes if the data in the response is Gzip
         */
        isGzipCompressed?: boolean;
        /**
         * Describes the path we should extract the status code in the response
         */
        successStatusJsonPath?: string;
        /**
         * Describes the path we should extract the status value in the response
         */
        successStatusValue?: string;
    }

    /**
     * Config to describe the instructions blade
     */
    export interface CodelessUiConnectorConfigPropertiesResponse {
        /**
         * Connector Availability Status
         */
        availability: AvailabilityResponse;
        /**
         * Define the way the connector check connectivity
         */
        connectivityCriteria: CodelessUiConnectorConfigPropertiesResponseConnectivityCriteria[];
        /**
         * An optional custom image to be used when displaying the connector within Azure Sentinel's connector's gallery
         */
        customImage?: string;
        /**
         * Data types to check for last data received
         */
        dataTypes: CodelessUiConnectorConfigPropertiesResponseDataTypes[];
        /**
         * Connector description
         */
        descriptionMarkdown: string;
        /**
         * The graph query to show the current data status
         */
        graphQueries: CodelessUiConnectorConfigPropertiesResponseGraphQueries[];
        /**
         * Name of the table the connector will insert the data to
         */
        graphQueriesTableName: string;
        /**
         * Instruction steps to enable the connector
         */
        instructionSteps: CodelessUiConnectorConfigPropertiesResponseInstructionSteps[];
        /**
         * Permissions required for the connector
         */
        permissions: PermissionsResponse;
        /**
         * Connector publisher name
         */
        publisher: string;
        /**
         * The sample queries for the connector
         */
        sampleQueries: CodelessUiConnectorConfigPropertiesResponseSampleQueries[];
        /**
         * Connector blade title
         */
        title: string;
    }

    export interface CodelessUiConnectorConfigPropertiesResponseConnectivityCriteria {
        /**
         * type of connectivity
         */
        type?: string;
        /**
         * Queries for checking connectivity
         */
        value?: string[];
    }

    export interface CodelessUiConnectorConfigPropertiesResponseDataTypes {
        /**
         * Query for indicate last data received
         */
        lastDataReceivedQuery?: string;
        /**
         * Name of the data type to show in the graph. can be use with {{graphQueriesTableName}} placeholder
         */
        name?: string;
    }

    export interface CodelessUiConnectorConfigPropertiesResponseGraphQueries {
        /**
         * The base query for the graph
         */
        baseQuery?: string;
        /**
         * The legend for the graph
         */
        legend?: string;
        /**
         * the metric that the query is checking
         */
        metricName?: string;
    }

    export interface CodelessUiConnectorConfigPropertiesResponseInstructionSteps {
        /**
         * Instruction step description
         */
        description?: string;
        /**
         * Instruction step details
         */
        instructions?: InstructionStepsResponseInstructions[];
        /**
         * Instruction step title
         */
        title?: string;
    }

    export interface CodelessUiConnectorConfigPropertiesResponseSampleQueries {
        /**
         * The sample query description
         */
        description?: string;
        /**
         * the sample query
         */
        query?: string;
    }

    /**
     * The criteria by which we determine whether the connector is connected or not.
     * For Example, use a KQL query to check if  the expected data type is flowing).
     */
    export interface ConnectivityCriterionResponse {
        /**
         * Gets or sets the type of connectivity.
         */
        type: string;
        /**
         * Gets or sets the queries for checking connectivity.
         */
        value?: string[];
    }

    /**
     * The data type which is created by the connector,
     * including a query indicated when was the last time that data type was received in the workspace.
     */
    export interface ConnectorDataTypeResponse {
        /**
         * Gets or sets the query to indicate when relevant data was last received in the workspace.
         */
        lastDataReceivedQuery: string;
        /**
         * Gets or sets the name of the data type to show in the graph.
         */
        name: string;
    }

    /**
     * The exposure status of the connector to the customers.
     */
    export interface ConnectorDefinitionsAvailabilityResponse {
        /**
         * Gets or sets a value indicating whether the connector is preview.
         */
        isPreview?: boolean;
        /**
         * The exposure status of the connector to the customers. Available values are 0-4 (0=None, 1=Available, 2=FeatureFlag, 3=Internal).
         */
        status?: number;
    }

    /**
     * The required Permissions for the connector.
     */
    export interface ConnectorDefinitionsPermissionsResponse {
        /**
         * Gets or sets the customs permissions required for the user to create connections.
         */
        customs?: CustomPermissionDetailsResponse[];
        /**
         * Gets or sets the required licenses for the user to create connections.
         */
        licenses?: string[];
        /**
         * Gets or sets the resource provider permissions required for the user to create connections.
         */
        resourceProvider?: ConnectorDefinitionsResourceProviderResponse[];
        /**
         * Gets or sets the required tenant permissions for the connector.
         */
        tenant?: string[];
    }

    /**
     * The resource provider details include the required permissions for the user to create connections.
     * The user should have the required permissions(Read\Write, ..) in the specified scope ProviderPermissionsScope against the specified resource provider.
     */
    export interface ConnectorDefinitionsResourceProviderResponse {
        /**
         * Gets or sets the permissions description text.
         */
        permissionsDisplayText: string;
        /**
         * Gets or sets the provider name.
         */
        provider: string;
        /**
         * Gets or sets the permissions provider display name.
         */
        providerDisplayName: string;
        /**
         * Required permissions for the connector resource provider that define in ResourceProviders.
         * For more information about the permissions see <see href="https://docs.microsoft.com/en-us/azure/role-based-access-control/role-definitions#actions-format">here</see>.
         */
        requiredPermissions: ResourceProviderRequiredPermissionsResponse;
        /**
         * The scope on which the user should have permissions, in order to be able to create connections.
         */
        scope: string;
    }

    /**
     * The Custom permissions required for the connector.
     */
    export interface CustomPermissionDetailsResponse {
        /**
         * Gets or sets the custom permissions description.
         */
        description: string;
        /**
         * Gets or sets the custom permissions name.
         */
        name: string;
    }

    /**
     * The UiConfig for 'Customizable' connector definition kind.
     */
    export interface CustomizableConnectionsConfigResponse {
        /**
         * Gets or sets the template name. The template includes ARM templates that can be created by the connector, usually it will be the dataConnectors ARM templates.
         */
        templateSpecName: string;
        /**
         * Gets or sets the template version.
         */
        templateSpecVersion: string;
    }

    /**
     * The UiConfig for 'Customizable' connector definition kind.
     */
    export interface CustomizableConnectorUiConfigResponse {
        /**
         * The exposure status of the connector to the customers.
         */
        availability?: ConnectorDefinitionsAvailabilityResponse;
        /**
         * Gets or sets the way the connector checks whether the connector is connected.
         */
        connectivityCriteria: ConnectivityCriterionResponse[];
        /**
         * Gets or sets the data types to check for last data received.
         */
        dataTypes: ConnectorDataTypeResponse[];
        /**
         * Gets or sets the connector description in markdown format.
         */
        descriptionMarkdown: string;
        /**
         * Gets or sets the graph queries to show the current data volume over time.
         */
        graphQueries: GraphQueryResponse[];
        /**
         * Gets or sets the name of the table the connector will insert the data to.
         * This name can be used in other queries by specifying {{graphQueriesTableName}} placeholder
         *  in Query and LastDataReceivedQuery values.
         */
        graphQueriesTableName?: string;
        /**
         * Gets or sets custom connector id. optional field.
         */
        id?: string;
        /**
         * Gets or sets the instruction steps to enable the connector.
         */
        instructionSteps: InstructionStepResponse[];
        /**
         * Gets or sets a value indicating whether to use 'OR'(SOME) or 'AND' between ConnectivityCriteria items.
         */
        isConnectivityCriteriasMatchSome?: boolean;
        /**
         * Gets or sets the connector logo to be used when displaying the connector within Azure Sentinel's connector's gallery.
         * The logo value should be in SVG format.
         */
        logo?: string;
        /**
         * The required Permissions for the connector.
         */
        permissions: ConnectorDefinitionsPermissionsResponse;
        /**
         * Gets or sets the connector publisher name.
         */
        publisher: string;
        /**
         * Gets or sets the sample queries for the connector.
         */
        sampleQueries: SampleQueryResponse[];
        /**
         * Gets or sets the connector blade title.
         */
        title: string;
    }

    /**
     * The configuration of the destination of the data.
     */
    export interface DCRConfigurationResponse {
        /**
         * Represents the data collection ingestion endpoint in log analytics.
         */
        dataCollectionEndpoint: string;
        /**
         * The data collection rule immutable id, the rule defines the transformation and data destination.
         */
        dataCollectionRuleImmutableId: string;
        /**
         * The stream we are sending the data to.
         */
        streamName: string;
    }

    /**
     * Common field for data type in data connectors.
     */
    export interface DataConnectorDataTypeCommonResponse {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state: string;
    }

    /**
     * The available data types for Dynamics365 data connector.
     */
    export interface Dynamics365DataConnectorDataTypesResponse {
        /**
         * Common Data Service data type connection.
         */
        dynamics365CdsActivities: Dynamics365DataConnectorDataTypesResponseDynamics365CdsActivities;
    }

    /**
     * Common Data Service data type connection.
     */
    export interface Dynamics365DataConnectorDataTypesResponseDynamics365CdsActivities {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state: string;
    }

    /**
     * Map identifiers of a single entity
     */
    export interface EntityFieldMappingResponse {
        /**
         * Alert V3 identifier
         */
        identifier?: string;
        /**
         * The value of the identifier
         */
        value?: string;
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
     * Event grouping settings property bag.
     */
    export interface EventGroupingSettingsResponse {
        /**
         * The event grouping aggregation kinds
         */
        aggregationKind?: string;
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
     * Represents a file.
     */
    export interface FileMetadataResponse {
        /**
         * Indicates whether the file was deleted from the storage account.
         */
        deleteStatus: string;
        /**
         * A URI with a valid SAS token to allow uploading / downloading the file.
         */
        fileContentUri: string;
        /**
         * The format of the file
         */
        fileFormat?: string;
        /**
         * The name of the file.
         */
        fileName?: string;
        /**
         * The size of the file.
         */
        fileSize?: number;
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
     * Google Cloud Platform auth section properties.
     */
    export interface GCPAuthPropertiesResponse {
        /**
         * The GCP project number.
         */
        projectNumber: string;
        /**
         * The service account that is used to access the GCP project.
         */
        serviceAccountEmail: string;
        /**
         * The workload identity provider id that is used to gain access to the GCP project.
         */
        workloadIdentityProviderId: string;
    }

    /**
     * Google Cloud Platform request section properties.
     */
    export interface GCPRequestPropertiesResponse {
        /**
         * The GCP project id.
         */
        projectId: string;
        /**
         * The GCP pub/sub subscription names.
         */
        subscriptionNames: string[];
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
     * The graph query to show the volume of data arriving into the workspace over time.
     */
    export interface GraphQueryResponse {
        /**
         * Gets or sets the base query for the graph.
         * The base query is wrapped by Sentinel UI infra with a KQL query, that measures the volume over time.
         */
        baseQuery: string;
        /**
         * Gets or sets the legend for the graph.
         */
        legend: string;
        /**
         * Gets or sets the metric name that the query is checking. For example: 'Total data receive'.
         */
        metricName: string;
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
     * Describes a user that the hunt is assigned to
     */
    export interface HuntOwnerResponse {
        /**
         * The name of the user the hunt is assigned to.
         */
        assignedTo?: string;
        /**
         * The email of the user the hunt is assigned to.
         */
        email?: string;
        /**
         * The object id of the user the hunt is assigned to.
         */
        objectId?: string;
        /**
         * The type of the owner the hunt is assigned to.
         */
        ownerType?: string;
        /**
         * The user principal name of the user the hunt is assigned to.
         */
        userPrincipalName?: string;
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
         * The type of the owner the incident is assigned to.
         */
        ownerType?: string;
        /**
         * The user principal name of the user the incident is assigned to.
         */
        userPrincipalName?: string;
    }

    export interface IncidentPropertiesActionResponse {
        /**
         * The reason the incident was closed
         */
        classification?: string;
        /**
         * Describes the reason the incident was closed.
         */
        classificationComment?: string;
        /**
         * The classification reason the incident was closed with
         */
        classificationReason?: string;
        /**
         * List of labels to add to the incident.
         */
        labels?: IncidentLabelResponse[];
        /**
         * Information on the user an incident is assigned to
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
     * Instruction step details, to be displayed in the Instructions steps section in the connector's page in Sentinel Portal.
     */
    export interface InstructionStepDetailsResponse {
        /**
         * Gets or sets the instruction type parameters settings.
         */
        parameters: any;
        /**
         * Gets or sets the instruction type name.
         */
        type: string;
    }

    /**
     * Instruction steps to enable the connector.
     */
    export interface InstructionStepResponse {
        /**
         * Gets or sets the instruction step description.
         */
        description?: string;
        /**
         * Gets or sets the inner instruction steps details.
         * Foe Example: instruction step 1 might contain inner instruction steps: [instruction step 1.1, instruction step 1.2].
         */
        innerSteps?: InstructionStepResponse[];
        /**
         * Gets or sets the instruction step details.
         */
        instructions?: InstructionStepDetailsResponse[];
        /**
         * Gets or sets the instruction step title.
         */
        title?: string;
    }

    export interface InstructionStepsResponseInstructions {
        /**
         * The parameters for the setting
         */
        parameters?: any;
        /**
         * The kind of the setting
         */
        type: string;
    }

    /**
     * The available data types for MCAS (Microsoft Cloud App Security) data connector.
     */
    export interface MCASDataConnectorDataTypesResponse {
        /**
         * Alerts data type connection.
         */
        alerts: DataConnectorDataTypeCommonResponse;
        /**
         * Discovery log data type connection.
         */
        discoveryLogs?: DataConnectorDataTypeCommonResponse;
    }

    /**
     * The available data types for Microsoft Threat Intelligence Platforms data connector.
     */
    export interface MSTIDataConnectorDataTypesResponse {
        /**
         * Data type for Microsoft Threat Intelligence Platforms data connector.
         */
        microsoftEmergingThreatFeed: MSTIDataConnectorDataTypesResponseMicrosoftEmergingThreatFeed;
    }

    /**
     * Data type for Microsoft Threat Intelligence Platforms data connector.
     */
    export interface MSTIDataConnectorDataTypesResponseMicrosoftEmergingThreatFeed {
        /**
         * The lookback period for the feed to be imported.
         */
        lookbackPeriod: string;
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state: string;
    }

    /**
     * The available data types for Microsoft Threat Protection Platforms data connector.
     */
    export interface MTPDataConnectorDataTypesResponse {
        /**
         * Alerts data type for Microsoft Threat Protection Platforms data connector.
         */
        alerts?: MTPDataConnectorDataTypesResponseAlerts;
        /**
         * Incidents data type for Microsoft Threat Protection Platforms data connector.
         */
        incidents: MTPDataConnectorDataTypesResponseIncidents;
    }

    /**
     * Alerts data type for Microsoft Threat Protection Platforms data connector.
     */
    export interface MTPDataConnectorDataTypesResponseAlerts {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state: string;
    }

    /**
     * Incidents data type for Microsoft Threat Protection Platforms data connector.
     */
    export interface MTPDataConnectorDataTypesResponseIncidents {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state: string;
    }

    /**
     * Publisher or creator of the content item.
     */
    export interface MetadataAuthorResponse {
        /**
         * Email of author contact
         */
        email?: string;
        /**
         * Link for author/vendor page
         */
        link?: string;
        /**
         * Name of the author. Company or person.
         */
        name?: string;
    }

    /**
     * ies for the solution content item
     */
    export interface MetadataCategoriesResponse {
        /**
         * domain for the solution content item
         */
        domains?: string[];
        /**
         * Industry verticals for the solution content item
         */
        verticals?: string[];
    }

    /**
     * Dependencies for the content item, what other content items it requires to work.  Can describe more complex dependencies using a recursive/nested structure. For a single dependency an id/kind/version can be supplied or operator/criteria for complex dependencies.
     */
    export interface MetadataDependenciesResponse {
        /**
         * Id of the content item we depend on
         */
        contentId?: string;
        /**
         * This is the list of dependencies we must fulfill, according to the AND/OR operator
         */
        criteria?: MetadataDependenciesResponse[];
        /**
         * Type of the content item we depend on
         */
        kind?: string;
        /**
         * Name of the content item
         */
        name?: string;
        /**
         * Operator used for list of dependencies in criteria array.
         */
        operator?: string;
        /**
         * Version of the the content item we depend on.  Can be blank, * or missing to indicate any version fulfills the dependency.  If version does not match our defined numeric format then an exact match is required.
         */
        version?: string;
    }

    /**
     * The original source of the content item, where it comes from.
     */
    export interface MetadataSourceResponse {
        /**
         * Source type of the content
         */
        kind: string;
        /**
         * Name of the content source.  The repo name, solution name, LA workspace name etc.
         */
        name?: string;
        /**
         * ID of the content source.  The solution ID, workspace ID, etc
         */
        sourceId?: string;
    }

    /**
     * Support information for the content item.
     */
    export interface MetadataSupportResponse {
        /**
         * Email of support contact
         */
        email?: string;
        /**
         * Link for support help, like to support page to open a ticket etc.
         */
        link?: string;
        /**
         * Name of the support contact. Company or person.
         */
        name?: string;
        /**
         * Type of support for content item
         */
        tier: string;
    }

    /**
     * The available data types for Microsoft Purview Information Protection data connector.
     */
    export interface MicrosoftPurviewInformationProtectionConnectorDataTypesResponse {
        /**
         * Logs data type.
         */
        logs: MicrosoftPurviewInformationProtectionConnectorDataTypesResponseLogs;
    }

    /**
     * Logs data type.
     */
    export interface MicrosoftPurviewInformationProtectionConnectorDataTypesResponseLogs {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state: string;
    }

    /**
     * Represents the connector's Filtered providers
     */
    export interface MtpFilteredProvidersResponse {
        /**
         * Alerts filtered providers. When filters are not applied, all alerts will stream through the MTP pipeline, still in private preview for all products EXCEPT MDA and MDI, which are in GA state.
         */
        alerts: string[];
    }

    /**
     * The available data types for Office Microsoft Project data connector.
     */
    export interface Office365ProjectConnectorDataTypesResponse {
        /**
         * Logs data type.
         */
        logs: Office365ProjectConnectorDataTypesResponseLogs;
    }

    /**
     * Logs data type.
     */
    export interface Office365ProjectConnectorDataTypesResponseLogs {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state: string;
    }

    /**
     * The available data types for office data connector.
     */
    export interface OfficeDataConnectorDataTypesResponse {
        /**
         * Exchange data type connection.
         */
        exchange: OfficeDataConnectorDataTypesResponseExchange;
        /**
         * SharePoint data type connection.
         */
        sharePoint: OfficeDataConnectorDataTypesResponseSharePoint;
        /**
         * Teams data type connection.
         */
        teams: OfficeDataConnectorDataTypesResponseTeams;
    }

    /**
     * Exchange data type connection.
     */
    export interface OfficeDataConnectorDataTypesResponseExchange {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state: string;
    }

    /**
     * SharePoint data type connection.
     */
    export interface OfficeDataConnectorDataTypesResponseSharePoint {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state: string;
    }

    /**
     * Teams data type connection.
     */
    export interface OfficeDataConnectorDataTypesResponseTeams {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state: string;
    }

    /**
     * The available data types for Office Microsoft PowerBI data connector.
     */
    export interface OfficePowerBIConnectorDataTypesResponse {
        /**
         * Logs data type.
         */
        logs: OfficePowerBIConnectorDataTypesResponseLogs;
    }

    /**
     * Logs data type.
     */
    export interface OfficePowerBIConnectorDataTypesResponseLogs {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state: string;
    }

    /**
     * Permissions required for the connector
     */
    export interface PermissionsResponse {
        /**
         * Customs permissions required for the connector
         */
        customs?: PermissionsResponseCustoms[];
        /**
         * Resource provider permissions required for the connector
         */
        resourceProvider?: PermissionsResponseResourceProvider[];
    }

    export interface PermissionsResponseCustoms {
        /**
         * Customs permissions description
         */
        description?: string;
        /**
         * Customs permissions name
         */
        name?: string;
    }

    export interface PermissionsResponseResourceProvider {
        /**
         * Permission description text
         */
        permissionsDisplayText?: string;
        /**
         * Provider name
         */
        provider?: string;
        /**
         * Permission provider display name
         */
        providerDisplayName?: string;
        /**
         * Required permissions for the connector
         */
        requiredPermissions?: RequiredPermissionsResponse;
        /**
         * Permission provider scope
         */
        scope?: string;
    }

    export interface PlaybookActionPropertiesResponse {
        /**
         * The resource id of the playbook resource.
         */
        logicAppResourceId: string;
        /**
         * The tenant id of the playbook resource.
         */
        tenantId?: string;
    }

    /**
     * Describes an automation rule condition that evaluates an array property's value change
     */
    export interface PropertyArrayChangedConditionPropertiesResponse {
        conditionProperties?: AutomationRulePropertyArrayChangedValuesConditionResponse;
        /**
         *
         * Expected value is 'PropertyArrayChanged'.
         */
        conditionType: "PropertyArrayChanged";
    }

    /**
     * Describes an automation rule condition that evaluates an array property's value
     */
    export interface PropertyArrayConditionPropertiesResponse {
        conditionProperties?: AutomationRulePropertyArrayValuesConditionResponse;
        /**
         *
         * Expected value is 'PropertyArray'.
         */
        conditionType: "PropertyArray";
    }

    /**
     * Describes an automation rule condition that evaluates a property's value change
     */
    export interface PropertyChangedConditionPropertiesResponse {
        conditionProperties?: AutomationRulePropertyValuesChangedConditionResponse;
        /**
         *
         * Expected value is 'PropertyChanged'.
         */
        conditionType: "PropertyChanged";
    }

    /**
     * Describes an automation rule condition that evaluates a property's value
     */
    export interface PropertyConditionPropertiesResponse {
        conditionProperties?: AutomationRulePropertyValuesConditionResponse;
        /**
         *
         * Expected value is 'Property'.
         */
        conditionType: "Property";
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
         * The installation id of the repository.
         */
        installationId?: number;
        /**
         * The url to access the repository.
         */
        url?: string;
    }

    /**
     * Required permissions for the connector
     */
    export interface RequiredPermissionsResponse {
        /**
         * action permission
         */
        action?: boolean;
        /**
         * delete permission
         */
        delete?: boolean;
        /**
         * read permission
         */
        read?: boolean;
        /**
         * write permission
         */
        write?: boolean;
    }

    /**
     * Required permissions for the connector resource provider that define in ResourceProviders.
     * For more information about the permissions see <see href="https://docs.microsoft.com/en-us/azure/role-based-access-control/role-definitions#actions-format">here</see>.
     */
    export interface ResourceProviderRequiredPermissionsResponse {
        /**
         * Gets or sets a value indicating whether the permission is custom actions (POST).
         */
        action?: boolean;
        /**
         * Gets or sets a value indicating whether the permission is delete action (DELETE).
         */
        delete?: boolean;
        /**
         * Gets or sets a value indicating whether the permission is read action (GET).
         */
        read?: boolean;
        /**
         * Gets or sets a value indicating whether the permission is write action (PUT or PATCH).
         */
        write?: boolean;
    }

    /**
     * The sample queries for the connector.
     */
    export interface SampleQueryResponse {
        /**
         * Gets or sets the  sample query description.
         */
        description: string;
        /**
         * Gets or sets the KQL sample query.
         */
        query: string;
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
     * security ml analytics settings data sources
     */
    export interface SecurityMLAnalyticsSettingsDataSourceResponse {
        /**
         * The connector id that provides the following data types
         */
        connectorId?: string;
        /**
         * The data types used by the security ml analytics settings
         */
        dataTypes?: string[];
    }

    /**
     * A single sentinel entity mapping
     */
    export interface SentinelEntityMappingResponse {
        /**
         * the column name to be mapped to the SentinelEntities
         */
        columnName?: string;
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
     * The available data types for TI (Threat Intelligence) data connector.
     */
    export interface TIDataConnectorDataTypesResponse {
        /**
         * Data type for indicators connection.
         */
        indicators: TIDataConnectorDataTypesResponseIndicators;
    }

    /**
     * Data type for indicators connection.
     */
    export interface TIDataConnectorDataTypesResponseIndicators {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state: string;
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
     * Template property bag.
     */
    export interface TemplatePropertiesResponse {
        /**
         * The creator of the content item.
         */
        author?: MetadataAuthorResponse;
        /**
         * Categories for the item
         */
        categories?: MetadataCategoriesResponse;
        /**
         * Static ID for the content.  Used to identify dependencies and content from solutions or community.  Hard-coded/static for out of the box content and solutions. Dynamic for user-created.  This is the resource name
         */
        contentId: string;
        /**
         * The kind of content the template is for.
         */
        contentKind: string;
        /**
         * Unique ID for the content. It should be generated based on the contentId of the package, contentId of the template, contentKind of the template and the contentVersion of the template
         */
        contentProductId: string;
        /**
         * Schema version of the content. Can be used to distinguish between different flow based on the schema version
         */
        contentSchemaVersion?: string;
        /**
         * The custom version of the content. A optional free text
         */
        customVersion?: string;
        /**
         * Dependant templates. Expandable.
         */
        dependantTemplates: TemplatePropertiesResponse[];
        /**
         * Dependencies for the content item, what other content items it requires to work.  Can describe more complex dependencies using a recursive/nested structure. For a single dependency an id/kind/version can be supplied or operator/criteria for complex formats.
         */
        dependencies?: MetadataDependenciesResponse;
        /**
         * The display name of the template
         */
        displayName: string;
        /**
         * first publish date content item
         */
        firstPublishDate?: string;
        /**
         * the icon identifier. this id can later be fetched from the content metadata
         */
        icon?: string;
        /**
         * Flag indicates if this template is deprecated
         */
        isDeprecated: string;
        /**
         * last publish date for the content item
         */
        lastPublishDate?: string;
        /**
         * The JSON of the ARM template to deploy active content. Expandable.
         */
        mainTemplate?: any;
        /**
         * the package Id contains this template
         */
        packageId: string;
        /**
         * the packageKind of the package contains this template
         */
        packageKind?: string;
        /**
         * the name of the package contains this template
         */
        packageName?: string;
        /**
         * Version of the package.  Default and recommended format is numeric (e.g. 1, 1.0, 1.0.0, 1.0.0.0), following ARM metadata best practices.  Can also be any string, but then we cannot guarantee any version checks
         */
        packageVersion: string;
        /**
         * preview image file names. These will be taken from the solution artifacts
         */
        previewImages?: string[];
        /**
         * preview image file names. These will be taken from the solution artifacts. used for dark theme support
         */
        previewImagesDark?: string[];
        /**
         * Providers for the content item
         */
        providers?: string[];
        /**
         * Source of the content.  This is where/how it was created.
         */
        source: MetadataSourceResponse;
        /**
         * Support information for the template - type, name, contact information
         */
        support?: MetadataSupportResponse;
        /**
         * the tactics the resource covers
         */
        threatAnalysisTactics?: string[];
        /**
         * the techniques the resource covers, these have to be aligned with the tactics being used
         */
        threatAnalysisTechniques?: string[];
        /**
         * Version of the content.  Default and recommended format is numeric (e.g. 1, 1.0, 1.0.0, 1.0.0.0), following ARM metadata best practices.  Can also be any string, but then we cannot guarantee any version checks
         */
        version: string;
    }

    /**
     * The available data types for Threat Intelligence TAXII data connector.
     */
    export interface TiTaxiiDataConnectorDataTypesResponse {
        /**
         * Data type for TAXII connector.
         */
        taxiiClient: TiTaxiiDataConnectorDataTypesResponseTaxiiClient;
    }

    /**
     * Data type for TAXII connector.
     */
    export interface TiTaxiiDataConnectorDataTypesResponseTaxiiClient {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state: string;
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
     * Describes an error encountered in the file during validation.
     */
    export interface ValidationErrorResponse {
        /**
         * A list of descriptions of the error.
         */
        errorMessages: string[];
        /**
         * The number of the record that has the error.
         */
        recordIndex?: number;
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
