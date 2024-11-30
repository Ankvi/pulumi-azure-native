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

/**
 * Describes the configuration of a system inside the agent.
 */
export interface AgentSystemResponse {
    systemDisplayName?: string;
    systemResourceName?: string;
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
    alerts?: DataConnectorDataTypeCommonResponse;
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
    conditions?: (PropertyArrayChangedConditionPropertiesResponse | PropertyChangedConditionPropertiesResponse | PropertyConditionPropertiesResponse)[];
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
 * The available data types for Amazon Web Services CloudTrail data connector.
 */
export interface AwsCloudTrailDataConnectorDataTypesResponse {
    /**
     * Logs data type.
     */
    logs?: AwsCloudTrailDataConnectorDataTypesResponseLogs;
}

/**
 * Logs data type.
 */
export interface AwsCloudTrailDataConnectorDataTypesResponseLogs {
    /**
     * Describe whether this data type connection is enabled or not.
     */
    state?: string;
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
 * Common field for data type in data connectors.
 */
export interface DataConnectorDataTypeCommonResponse {
    /**
     * Describe whether this data type connection is enabled or not.
     */
    state?: string;
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
 * An individual contact associated with this domain
 */
export interface EnrichmentDomainWhoisContactResponse {
    /**
     * The city for this contact
     */
    city?: string;
    /**
     * The country for this contact
     */
    country?: string;
    /**
     * The email address for this contact
     */
    email?: string;
    /**
     * The fax number for this contact
     */
    fax?: string;
    /**
     * The name of this contact
     */
    name?: string;
    /**
     * The organization for this contact
     */
    org?: string;
    /**
     * The phone number for this contact
     */
    phone?: string;
    /**
     * The postal code for this contact
     */
    postal?: string;
    /**
     * The state for this contact
     */
    state?: string;
    /**
     * A list describing the street address for this contact
     */
    street?: string[];
}

/**
 * The set of contacts associated with this domain
 */
export interface EnrichmentDomainWhoisContactsResponse {
    /**
     * The admin contact for this whois record
     */
    admin?: EnrichmentDomainWhoisContactResponse;
    /**
     * The billing contact for this whois record
     */
    billing?: EnrichmentDomainWhoisContactResponse;
    /**
     * The registrant contact for this whois record
     */
    registrant?: EnrichmentDomainWhoisContactResponse;
    /**
     * The technical contact for this whois record
     */
    tech?: EnrichmentDomainWhoisContactResponse;
}

/**
 * The whois record for a given domain
 */
export interface EnrichmentDomainWhoisDetailsResponse {
    /**
     * The set of contacts associated with this domain
     */
    contacts?: EnrichmentDomainWhoisContactsResponse;
    /**
     * A list of name servers associated with this domain
     */
    nameServers?: string[];
    /**
     * The registrar associated with this domain
     */
    registrar?: EnrichmentDomainWhoisRegistrarDetailsResponse;
    /**
     * The set of status flags for this whois record
     */
    statuses?: string[];
}

/**
 * The registrar associated with this domain
 */
export interface EnrichmentDomainWhoisRegistrarDetailsResponse {
    /**
     * This registrar's abuse contact email
     */
    abuseContactEmail?: string;
    /**
     * This registrar's abuse contact phone number
     */
    abuseContactPhone?: string;
    /**
     * This registrar's Internet Assigned Numbers Authority id
     */
    ianaId?: string;
    /**
     * The name of this registrar
     */
    name?: string;
    /**
     * This registrar's URL
     */
    url?: string;
    /**
     * The hostname of this registrar's whois server
     */
    whoisServer?: string;
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

/**
 * Represents lock user action.
 */
export interface LockUserActionResponse {
    /**
     * The reason of the failure of the action. Empty if the action is successful.
     */
    failureReason?: string;
    /**
     * The kind of the action
     * Expected value is 'LockUser'.
     */
    kind: "LockUser";
    /**
     * The user to lock
     */
    user?: string;
}

/**
 * Describes a log.
 */
export interface LogResponse {
    /**
     * The bulk size for the log.
     */
    bulkSize?: number;
    /**
     * The filters for the log.
     */
    filters?: string[];
    /**
     * Types of ingestion.
     */
    ingestionType?: string;
    /**
     * The schedule interval in seconds.
     */
    scheduleInterval?: number;
    /**
     * Types of log status.
     */
    status?: string;
    /**
     * Types of logs and tables.
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
    alerts?: DataConnectorDataTypeCommonResponse;
    /**
     * Discovery log data type connection.
     */
    discoveryLogs?: DataConnectorDataTypeCommonResponse;
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
 * The available data types for office data connector.
 */
export interface OfficeDataConnectorDataTypesResponse {
    /**
     * Exchange data type connection.
     */
    exchange?: OfficeDataConnectorDataTypesResponseExchange;
    /**
     * SharePoint data type connection.
     */
    sharePoint?: OfficeDataConnectorDataTypesResponseSharePoint;
    /**
     * Teams data type connection.
     */
    teams?: OfficeDataConnectorDataTypesResponseTeams;
}

/**
 * Exchange data type connection.
 */
export interface OfficeDataConnectorDataTypesResponseExchange {
    /**
     * Describe whether this data type connection is enabled or not.
     */
    state?: string;
}

/**
 * SharePoint data type connection.
 */
export interface OfficeDataConnectorDataTypesResponseSharePoint {
    /**
     * Describe whether this data type connection is enabled or not.
     */
    state?: string;
}

/**
 * Teams data type connection.
 */
export interface OfficeDataConnectorDataTypesResponseTeams {
    /**
     * Describe whether this data type connection is enabled or not.
     */
    state?: string;
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
 * Describes the Rfc connector.
 */
export interface RfcConnectorResponse {
    /**
     * FQDN, hostname, or IP address of the ABAP server.
     */
    abapServerHost?: string;
    /**
     * The authentication type to SAP.
     */
    authenticationType?: string;
    /**
     * Client number of the ABAP server.
     * Example - 001
     */
    client: string;
    /**
     * The SAP code page used for character encoding.
     * Example - 1100
     */
    codePage?: string;
    /**
     * Logon group of the message server.
     */
    group?: string;
    /**
     * FQDN, hostname, or IP address of the Message server.
     */
    messageServerHost?: string;
    /**
     * Port number, or service name (from /etc/services) of the message server.
     */
    messageServerService?: string;
    /**
     * SNC QOP.
     * Options are 1, 2, 3, 8, 9.
     */
    sncQop?: string;
    /**
     * System ID of the ABAP server.
     * Example - A4H
     */
    systemId: string;
    /**
     * System number of the ABAP server.
     */
    systemNumber: string;
    /**
     * Represents the types of SAP systems.
     * Expected value is 'Rfc'.
     */
    type: "Rfc";
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
 * Describes the configuration of a SAP Docker agent.
 */
export interface SapAgentConfigurationResponse {
    /**
     * The name of the docker agent.
     * only letters with numbers, underscores and hyphens are allowed
     * example: "my-agent"
     */
    agentContainerName?: string;
    /**
     * The key mode of the agent.
     * ManagedIdentity|ApplicationIdentity are the options
     */
    keyVaultAuthenticationMode?: string;
    /**
     * The key vault resource id to access the key vault.
     * example: "/subscriptions/d0cfe6b2-9ac0-4464-9919-dccaee2e48c0/resourceGroups/myRg/providers/Microsoft.KeyVault/vaults/myVault"
     */
    keyVaultResourceId?: string;
    /**
     * The SDK path (a file not a folder) on the agent machine.
     * example: "/path/to/nwrfc750P_8-70002755.zip"
     */
    sdkPath?: string;
    /**
     * The secret source of the agent.
     * AzureKeyVault is the option
     */
    secretSource?: string;
    /**
     * The SNC path (a folder not a file) on the agent machine.
     * example: "/path/to/snc"
     */
    sncPath?: string;
    /**
     * Type of the agent
     * Expected value is 'SAP'.
     */
    type: "SAP";
}

/**
 * Describes the SapControl connector configuration.
 */
export interface SapControlConnectorResponse {
    /**
     * Represents the types of HTTPS configuration to connect to the SapControl service.
     */
    httpsConfiguration?: string;
    /**
     * The instance number. Only 2 digits are allowed.
     */
    instance: string;
    /**
     * The port of the SOAP connection to SAP Control.
     */
    port?: string;
    /**
     * The server name.
     * FQDN or IP address.
     */
    server: string;
    /**
     * The timezone.
     * example: "GMT+0" or "GMT-8"
     * default: "GMT+0"
     */
    timezone?: string;
    /**
     * Represents the types of SAP systems.
     * Expected value is 'SapControl'.
     */
    type: "SapControl";
}
/**
 * sapControlConnectorResponseProvideDefaults sets the appropriate defaults for SapControlConnectorResponse
 */
export function sapControlConnectorResponseProvideDefaults(val: SapControlConnectorResponse): SapControlConnectorResponse {
    return {
        ...val,
        timezone: (val.timezone) ?? "GMT+0",
    };
}

/**
 * Describes the SAP configuration.
 */
export interface SapSystemsConfigurationResponse {
    /**
     * azure resource id
     * example: "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Compute/virtualMachines/myVM"
     */
    azureResourceId?: string;
    /**
     * Base Model for SAP System Connector.
     */
    connector: RfcConnectorResponse | SapControlConnectorResponse;
    /**
     * The logs configuration.
     */
    logs?: LogResponse[];
    /**
     * Represents the types of configuration for a system.
     * Expected value is 'SAP'.
     */
    type: "SAP";
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
    indicators?: TIDataConnectorDataTypesResponseIndicators;
}

/**
 * Data type for indicators connection.
 */
export interface TIDataConnectorDataTypesResponseIndicators {
    /**
     * Describe whether this data type connection is enabled or not.
     */
    state?: string;
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
 * Represents an unlock user action.
 */
export interface UnlockUserActionResponse {
    /**
     * The reason of the failure of the action. Empty if the action is successful.
     */
    failureReason?: string;
    /**
     * The kind of the action
     * Expected value is 'UnlockUser'.
     */
    kind: "UnlockUser";
    /**
     * The user to unlock
     */
    user?: string;
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






























