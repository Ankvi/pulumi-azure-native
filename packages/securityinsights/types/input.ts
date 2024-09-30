import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The Activity query definitions
 */
export interface ActivityEntityQueriesPropertiesQueryDefinitionsArgs {
    /**
     * The Activity query to run on a given entity
     */
    query?: pulumi.Input<string>;
}

/**
 * Settings for how to dynamically override alert static details
 */
export interface AlertDetailsOverrideArgs {
    /**
     * the format containing columns name(s) to override the alert description
     */
    alertDescriptionFormat?: pulumi.Input<string>;
    /**
     * the format containing columns name(s) to override the alert name
     */
    alertDisplayNameFormat?: pulumi.Input<string>;
    /**
     * List of additional dynamic properties to override
     */
    alertDynamicProperties?: pulumi.Input<pulumi.Input<AlertPropertyMappingArgs>[]>;
    /**
     * the column name to take the alert severity from
     */
    alertSeverityColumnName?: pulumi.Input<string>;
    /**
     * the column name to take the alert tactics from
     */
    alertTacticsColumnName?: pulumi.Input<string>;
}

/**
 * A single alert property mapping to override
 */
export interface AlertPropertyMappingArgs {
    /**
     * The V3 alert property
     */
    alertProperty?: pulumi.Input<string | enums.AlertProperty>;
    /**
     * the column name to use to override this property
     */
    value?: pulumi.Input<string>;
}

/**
 * Alerts data type for data connectors.
 */
export interface AlertsDataTypeOfDataConnectorArgs {
    /**
     * Alerts data type connection.
     */
    alerts?: pulumi.Input<DataConnectorDataTypeCommonArgs>;
}

/**
 * An entity describing a content item.
 */
export interface AssignmentItemArgs {
    /**
     * The resource id of the content item
     */
    resourceId?: pulumi.Input<string>;
}

/**
 * Describes an automation rule action to modify an object's properties
 */
export interface AutomationRuleModifyPropertiesActionArgs {
    actionConfiguration?: pulumi.Input<IncidentPropertiesActionArgs>;
    /**
     * The type of the automation rule action.
     * Expected value is 'ModifyProperties'.
     */
    actionType: pulumi.Input<"ModifyProperties">;
    order: pulumi.Input<number>;
}

export interface AutomationRulePropertyArrayChangedValuesConditionArgs {
    arrayType?: pulumi.Input<string | enums.AutomationRulePropertyArrayChangedConditionSupportedArrayType>;
    changeType?: pulumi.Input<string | enums.AutomationRulePropertyArrayChangedConditionSupportedChangeType>;
}

export interface AutomationRulePropertyValuesChangedConditionArgs {
    changeType?: pulumi.Input<string | enums.AutomationRulePropertyChangedConditionSupportedChangedType>;
    operator?: pulumi.Input<string | enums.AutomationRulePropertyConditionSupportedOperator>;
    propertyName?: pulumi.Input<string | enums.AutomationRulePropertyChangedConditionSupportedPropertyType>;
    propertyValues?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface AutomationRulePropertyValuesConditionArgs {
    operator?: pulumi.Input<string | enums.AutomationRulePropertyConditionSupportedOperator>;
    /**
     * The property to evaluate in an automation rule property condition.
     */
    propertyName?: pulumi.Input<string | enums.AutomationRulePropertyConditionSupportedProperty>;
    propertyValues?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Describes an automation rule action to run a playbook
 */
export interface AutomationRuleRunPlaybookActionArgs {
    actionConfiguration?: pulumi.Input<PlaybookActionPropertiesArgs>;
    /**
     * The type of the automation rule action.
     * Expected value is 'RunPlaybook'.
     */
    actionType: pulumi.Input<"RunPlaybook">;
    order: pulumi.Input<number>;
}

/**
 * Describes automation rule triggering logic.
 */
export interface AutomationRuleTriggeringLogicArgs {
    /**
     * The conditions to evaluate to determine if the automation rule should be triggered on a given object.
     */
    conditions?: pulumi.Input<pulumi.Input<PropertyArrayChangedConditionPropertiesArgs | PropertyChangedConditionPropertiesArgs | PropertyConditionPropertiesArgs>[]>;
    /**
     * Determines when the automation rule should automatically expire and be disabled.
     */
    expirationTimeUtc?: pulumi.Input<string>;
    /**
     * Determines whether the automation rule is enabled or disabled.
     */
    isEnabled: pulumi.Input<boolean>;
    triggersOn: pulumi.Input<string | enums.TriggersOn>;
    triggersWhen: pulumi.Input<string | enums.TriggersWhen>;
}

/**
 * The available data types for Amazon Web Services CloudTrail data connector.
 */
export interface AwsCloudTrailDataConnectorDataTypesArgs {
    /**
     * Logs data type.
     */
    logs?: pulumi.Input<AwsCloudTrailDataConnectorDataTypesLogsArgs>;
}

/**
 * Logs data type.
 */
export interface AwsCloudTrailDataConnectorDataTypesLogsArgs {
    /**
     * Describe whether this data type connection is enabled or not.
     */
    state?: pulumi.Input<string | enums.DataTypeState>;
}

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
 * Information on the client (user or application) that made some action
 */
export interface ClientInfoArgs {
    /**
     * The email of the client.
     */
    email?: pulumi.Input<string>;
    /**
     * The name of the client.
     */
    name?: pulumi.Input<string>;
    /**
     * The object id of the client.
     */
    objectId?: pulumi.Input<string>;
    /**
     * The user principal name of the client.
     */
    userPrincipalName?: pulumi.Input<string>;
}

/**
 * The criteria by which we determine whether the connector is connected or not.
 * For Example, use a KQL query to check if  the expected data type is flowing).
 */
export interface ConnectivityCriterionArgs {
    /**
     * Gets or sets the type of connectivity.
     */
    type: pulumi.Input<string>;
    /**
     * Gets or sets the queries for checking connectivity.
     */
    value?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The data type which is created by the connector,
 * including a query indicated when was the last time that data type was received in the workspace.
 */
export interface ConnectorDataTypeArgs {
    /**
     * Gets or sets the query to indicate when relevant data was last received in the workspace.
     */
    lastDataReceivedQuery: pulumi.Input<string>;
    /**
     * Gets or sets the name of the data type to show in the graph.
     */
    name: pulumi.Input<string>;
}

/**
 * The exposure status of the connector to the customers.
 */
export interface ConnectorDefinitionsAvailabilityArgs {
    /**
     * Gets or sets a value indicating whether the connector is preview.
     */
    isPreview?: pulumi.Input<boolean>;
    /**
     * The exposure status of the connector to the customers. Available values are 0-4 (0=None, 1=Available, 2=FeatureFlag, 3=Internal).
     */
    status?: pulumi.Input<number>;
}

/**
 * The required Permissions for the connector.
 */
export interface ConnectorDefinitionsPermissionsArgs {
    /**
     * Gets or sets the customs permissions required for the user to create connections.
     */
    customs?: pulumi.Input<pulumi.Input<CustomPermissionDetailsArgs>[]>;
    /**
     * Gets or sets the required licenses for the user to create connections.
     */
    licenses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Gets or sets the resource provider permissions required for the user to create connections.
     */
    resourceProvider?: pulumi.Input<pulumi.Input<ConnectorDefinitionsResourceProviderArgs>[]>;
    /**
     * Gets or sets the required tenant permissions for the connector.
     */
    tenant?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The resource provider details include the required permissions for the user to create connections.
 * The user should have the required permissions(Read\Write, ..) in the specified scope ProviderPermissionsScope against the specified resource provider.
 */
export interface ConnectorDefinitionsResourceProviderArgs {
    /**
     * Gets or sets the permissions description text.
     */
    permissionsDisplayText: pulumi.Input<string>;
    /**
     * Gets or sets the provider name.
     */
    provider: pulumi.Input<string>;
    /**
     * Gets or sets the permissions provider display name.
     */
    providerDisplayName: pulumi.Input<string>;
    /**
     * Required permissions for the connector resource provider that define in ResourceProviders.
     * For more information about the permissions see <see href="https://docs.microsoft.com/en-us/azure/role-based-access-control/role-definitions#actions-format">here</see>.
     */
    requiredPermissions: pulumi.Input<ResourceProviderRequiredPermissionsArgs>;
    /**
     * The scope on which the user should have permissions, in order to be able to create connections.
     */
    scope: pulumi.Input<string | enums.ProviderPermissionsScope>;
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
 * The Custom permissions required for the connector.
 */
export interface CustomPermissionDetailsArgs {
    /**
     * Gets or sets the custom permissions description.
     */
    description: pulumi.Input<string>;
    /**
     * Gets or sets the custom permissions name.
     */
    name: pulumi.Input<string>;
}

/**
 * The UiConfig for 'Customizable' connector definition kind.
 */
export interface CustomizableConnectionsConfigArgs {
    /**
     * Gets or sets the template name. The template includes ARM templates that can be created by the connector, usually it will be the dataConnectors ARM templates.
     */
    templateSpecName: pulumi.Input<string>;
    /**
     * Gets or sets the template version.
     */
    templateSpecVersion: pulumi.Input<string>;
}

/**
 * The UiConfig for 'Customizable' connector definition kind.
 */
export interface CustomizableConnectorUiConfigArgs {
    /**
     * The exposure status of the connector to the customers.
     */
    availability?: pulumi.Input<ConnectorDefinitionsAvailabilityArgs>;
    /**
     * Gets or sets the way the connector checks whether the connector is connected.
     */
    connectivityCriteria: pulumi.Input<pulumi.Input<ConnectivityCriterionArgs>[]>;
    /**
     * Gets or sets the data types to check for last data received.
     */
    dataTypes: pulumi.Input<pulumi.Input<ConnectorDataTypeArgs>[]>;
    /**
     * Gets or sets the connector description in markdown format.
     */
    descriptionMarkdown: pulumi.Input<string>;
    /**
     * Gets or sets the graph queries to show the current data volume over time.
     */
    graphQueries: pulumi.Input<pulumi.Input<GraphQueryArgs>[]>;
    /**
     * Gets or sets the name of the table the connector will insert the data to.
     * This name can be used in other queries by specifying {{graphQueriesTableName}} placeholder
     *  in Query and LastDataReceivedQuery values.
     */
    graphQueriesTableName?: pulumi.Input<string>;
    /**
     * Gets or sets custom connector id. optional field.
     */
    id?: pulumi.Input<string>;
    /**
     * Gets or sets the instruction steps to enable the connector.
     */
    instructionSteps: pulumi.Input<pulumi.Input<InstructionStepArgs>[]>;
    /**
     * Gets or sets a value indicating whether to use 'OR'(SOME) or 'AND' between ConnectivityCriteria items.
     */
    isConnectivityCriteriasMatchSome?: pulumi.Input<boolean>;
    /**
     * Gets or sets the connector logo to be used when displaying the connector within Azure Sentinel's connector's gallery.
     * The logo value should be in SVG format.
     */
    logo?: pulumi.Input<string>;
    /**
     * The required Permissions for the connector.
     */
    permissions: pulumi.Input<ConnectorDefinitionsPermissionsArgs>;
    /**
     * Gets or sets the connector publisher name.
     */
    publisher: pulumi.Input<string>;
    /**
     * Gets or sets the sample queries for the connector.
     */
    sampleQueries: pulumi.Input<pulumi.Input<SampleQueryArgs>[]>;
    /**
     * Gets or sets the connector blade title.
     */
    title: pulumi.Input<string>;
}

/**
 * Common field for data type in data connectors.
 */
export interface DataConnectorDataTypeCommonArgs {
    /**
     * Describe whether this data type connection is enabled or not.
     */
    state?: pulumi.Input<string | enums.DataTypeState>;
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
 * Single entity mapping for the alert rule
 */
export interface EntityMappingArgs {
    /**
     * The V3 type of the mapped entity
     */
    entityType?: pulumi.Input<string | enums.EntityMappingType>;
    /**
     * array of field mappings for the given entity mapping
     */
    fieldMappings?: pulumi.Input<pulumi.Input<FieldMappingArgs>[]>;
}

/**
 * Event grouping settings property bag.
 */
export interface EventGroupingSettingsArgs {
    /**
     * The event grouping aggregation kinds
     */
    aggregationKind?: pulumi.Input<string | enums.EventGroupingAggregationKind>;
}

/**
 * A single field mapping of the mapped entity
 */
export interface FieldMappingArgs {
    /**
     * the column name to be mapped to the identifier
     */
    columnName?: pulumi.Input<string>;
    /**
     * the V3 identifier of the entity
     */
    identifier?: pulumi.Input<string>;
}

/**
 * Represents a file.
 */
export interface FileMetadataArgs {
    /**
     * The format of the file
     */
    fileFormat?: pulumi.Input<string | enums.FileFormat>;
    /**
     * The name of the file.
     */
    fileName?: pulumi.Input<string>;
    /**
     * The size of the file.
     */
    fileSize?: pulumi.Input<number>;
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
 * The graph query to show the volume of data arriving into the workspace over time.
 */
export interface GraphQueryArgs {
    /**
     * Gets or sets the base query for the graph.
     * The base query is wrapped by Sentinel UI infra with a KQL query, that measures the volume over time.
     */
    baseQuery: pulumi.Input<string>;
    /**
     * Gets or sets the legend for the graph.
     */
    legend: pulumi.Input<string>;
    /**
     * Gets or sets the metric name that the query is checking. For example: 'Total data receive'.
     */
    metricName: pulumi.Input<string>;
}

/**
 * Grouping configuration property bag.
 */
export interface GroupingConfigurationArgs {
    /**
     * Grouping enabled
     */
    enabled: pulumi.Input<boolean>;
    /**
     * A list of alert details to group by (when matchingMethod is Selected)
     */
    groupByAlertDetails?: pulumi.Input<pulumi.Input<string | enums.AlertDetail>[]>;
    /**
     * A list of custom details keys to group by (when matchingMethod is Selected). Only keys defined in the current alert rule may be used.
     */
    groupByCustomDetails?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of entity types to group by (when matchingMethod is Selected). Only entities defined in the current alert rule may be used.
     */
    groupByEntities?: pulumi.Input<pulumi.Input<string | enums.EntityMappingType>[]>;
    /**
     * Limit the group to alerts created within the lookback duration (in ISO 8601 duration format)
     */
    lookbackDuration: pulumi.Input<string>;
    /**
     * Grouping matching method. When method is Selected at least one of groupByEntities, groupByAlertDetails, groupByCustomDetails must be provided and not empty.
     */
    matchingMethod: pulumi.Input<string | enums.MatchingMethod>;
    /**
     * Re-open closed matching incidents
     */
    reopenClosedIncident: pulumi.Input<boolean>;
}

/**
 * Describes a user that the hunt is assigned to
 */
export interface HuntOwnerArgs {
    /**
     * The name of the user the hunt is assigned to.
     */
    assignedTo?: pulumi.Input<string>;
    /**
     * The email of the user the hunt is assigned to.
     */
    email?: pulumi.Input<string>;
    /**
     * The object id of the user the hunt is assigned to.
     */
    objectId?: pulumi.Input<string>;
    /**
     * The type of the owner the hunt is assigned to.
     */
    ownerType?: pulumi.Input<string | enums.OwnerType>;
    /**
     * The user principal name of the user the hunt is assigned to.
     */
    userPrincipalName?: pulumi.Input<string>;
}

/**
 * Incident Configuration property bag.
 */
export interface IncidentConfigurationArgs {
    /**
     * Create incidents from alerts triggered by this analytics rule
     */
    createIncident: pulumi.Input<boolean>;
    /**
     * Set how the alerts that are triggered by this analytics rule, are grouped into incidents
     */
    groupingConfiguration?: pulumi.Input<GroupingConfigurationArgs>;
}

/**
 * Describes related incident information for the bookmark
 */
export interface IncidentInfoArgs {
    /**
     * Incident Id
     */
    incidentId?: pulumi.Input<string>;
    /**
     * Relation Name
     */
    relationName?: pulumi.Input<string>;
    /**
     * The severity of the incident
     */
    severity?: pulumi.Input<string | enums.IncidentSeverity>;
    /**
     * The title of the incident
     */
    title?: pulumi.Input<string>;
}

/**
 * Represents an incident label
 */
export interface IncidentLabelArgs {
    /**
     * The name of the label
     */
    labelName: pulumi.Input<string>;
}

/**
 * Information on the user an incident is assigned to
 */
export interface IncidentOwnerInfoArgs {
    /**
     * The name of the user the incident is assigned to.
     */
    assignedTo?: pulumi.Input<string>;
    /**
     * The email of the user the incident is assigned to.
     */
    email?: pulumi.Input<string>;
    /**
     * The object id of the user the incident is assigned to.
     */
    objectId?: pulumi.Input<string>;
    /**
     * The type of the owner the incident is assigned to.
     */
    ownerType?: pulumi.Input<string | enums.OwnerType>;
    /**
     * The user principal name of the user the incident is assigned to.
     */
    userPrincipalName?: pulumi.Input<string>;
}

export interface IncidentPropertiesActionArgs {
    /**
     * The reason the incident was closed
     */
    classification?: pulumi.Input<string | enums.IncidentClassification>;
    /**
     * Describes the reason the incident was closed.
     */
    classificationComment?: pulumi.Input<string>;
    /**
     * The classification reason the incident was closed with
     */
    classificationReason?: pulumi.Input<string | enums.IncidentClassificationReason>;
    /**
     * List of labels to add to the incident.
     */
    labels?: pulumi.Input<pulumi.Input<IncidentLabelArgs>[]>;
    /**
     * Information on the user an incident is assigned to
     */
    owner?: pulumi.Input<IncidentOwnerInfoArgs>;
    /**
     * The severity of the incident
     */
    severity?: pulumi.Input<string | enums.IncidentSeverity>;
    /**
     * The status of the incident
     */
    status?: pulumi.Input<string | enums.IncidentStatus>;
}

/**
 * Instruction steps to enable the connector.
 */
export interface InstructionStepArgs {
    /**
     * Gets or sets the instruction step description.
     */
    description?: pulumi.Input<string>;
    /**
     * Gets or sets the inner instruction steps details.
     * Foe Example: instruction step 1 might contain inner instruction steps: [instruction step 1.1, instruction step 1.2].
     */
    innerSteps?: pulumi.Input<pulumi.Input<InstructionStepArgs>[]>;
    /**
     * Gets or sets the instruction step details.
     */
    instructions?: pulumi.Input<pulumi.Input<InstructionStepDetailsArgs>[]>;
    /**
     * Gets or sets the instruction step title.
     */
    title?: pulumi.Input<string>;
}

/**
 * Instruction step details, to be displayed in the Instructions steps section in the connector's page in Sentinel Portal.
 */
export interface InstructionStepDetailsArgs {
    /**
     * Gets or sets the instruction type parameters settings.
     */
    parameters: any;
    /**
     * Gets or sets the instruction type name.
     */
    type: pulumi.Input<string>;
}

/**
 * Describes a log.
 */
export interface LogArgs {
    /**
     * The bulk size for the log.
     */
    bulkSize?: pulumi.Input<number>;
    /**
     * The filters for the log.
     */
    filters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Types of ingestion.
     */
    ingestionType?: pulumi.Input<string | enums.IngestionType>;
    /**
     * The schedule interval in seconds.
     */
    scheduleInterval?: pulumi.Input<number>;
    /**
     * Types of log status.
     */
    status?: pulumi.Input<string | enums.LogStatusType>;
    /**
     * Types of logs and tables.
     */
    type: pulumi.Input<string | enums.LogType>;
}

/**
 * The available data types for MCAS (Microsoft Cloud App Security) data connector.
 */
export interface MCASDataConnectorDataTypesArgs {
    /**
     * Alerts data type connection.
     */
    alerts?: pulumi.Input<DataConnectorDataTypeCommonArgs>;
    /**
     * Discovery log data type connection.
     */
    discoveryLogs?: pulumi.Input<DataConnectorDataTypeCommonArgs>;
}

/**
 * Publisher or creator of the content item.
 */
export interface MetadataAuthorArgs {
    /**
     * Email of author contact
     */
    email?: pulumi.Input<string>;
    /**
     * Link for author/vendor page
     */
    link?: pulumi.Input<string>;
    /**
     * Name of the author. Company or person.
     */
    name?: pulumi.Input<string>;
}

/**
 * ies for the solution content item
 */
export interface MetadataCategoriesArgs {
    /**
     * domain for the solution content item
     */
    domains?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Industry verticals for the solution content item
     */
    verticals?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Dependencies for the content item, what other content items it requires to work.  Can describe more complex dependencies using a recursive/nested structure. For a single dependency an id/kind/version can be supplied or operator/criteria for complex dependencies.
 */
export interface MetadataDependenciesArgs {
    /**
     * Id of the content item we depend on
     */
    contentId?: pulumi.Input<string>;
    /**
     * This is the list of dependencies we must fulfill, according to the AND/OR operator
     */
    criteria?: pulumi.Input<pulumi.Input<MetadataDependenciesArgs>[]>;
    /**
     * Type of the content item we depend on
     */
    kind?: pulumi.Input<string | enums.Kind>;
    /**
     * Name of the content item
     */
    name?: pulumi.Input<string>;
    /**
     * Operator used for list of dependencies in criteria array.
     */
    operator?: pulumi.Input<string | enums.Operator>;
    /**
     * Version of the the content item we depend on.  Can be blank, * or missing to indicate any version fulfills the dependency.  If version does not match our defined numeric format then an exact match is required.
     */
    version?: pulumi.Input<string>;
}

/**
 * The original source of the content item, where it comes from.
 */
export interface MetadataSourceArgs {
    /**
     * Source type of the content
     */
    kind: pulumi.Input<string | enums.SourceKind>;
    /**
     * Name of the content source.  The repo name, solution name, LA workspace name etc.
     */
    name?: pulumi.Input<string>;
    /**
     * ID of the content source.  The solution ID, workspace ID, etc
     */
    sourceId?: pulumi.Input<string>;
}

/**
 * Support information for the content item.
 */
export interface MetadataSupportArgs {
    /**
     * Email of support contact
     */
    email?: pulumi.Input<string>;
    /**
     * Link for support help, like to support page to open a ticket etc.
     */
    link?: pulumi.Input<string>;
    /**
     * Name of the support contact. Company or person.
     */
    name?: pulumi.Input<string>;
    /**
     * Type of support for content item
     */
    tier: pulumi.Input<string | enums.SupportTier>;
}

/**
 * The available data types for office data connector.
 */
export interface OfficeDataConnectorDataTypesArgs {
    /**
     * Exchange data type connection.
     */
    exchange?: pulumi.Input<OfficeDataConnectorDataTypesExchangeArgs>;
    /**
     * SharePoint data type connection.
     */
    sharePoint?: pulumi.Input<OfficeDataConnectorDataTypesSharePointArgs>;
    /**
     * Teams data type connection.
     */
    teams?: pulumi.Input<OfficeDataConnectorDataTypesTeamsArgs>;
}

/**
 * Exchange data type connection.
 */
export interface OfficeDataConnectorDataTypesExchangeArgs {
    /**
     * Describe whether this data type connection is enabled or not.
     */
    state?: pulumi.Input<string | enums.DataTypeState>;
}

/**
 * SharePoint data type connection.
 */
export interface OfficeDataConnectorDataTypesSharePointArgs {
    /**
     * Describe whether this data type connection is enabled or not.
     */
    state?: pulumi.Input<string | enums.DataTypeState>;
}

/**
 * Teams data type connection.
 */
export interface OfficeDataConnectorDataTypesTeamsArgs {
    /**
     * Describe whether this data type connection is enabled or not.
     */
    state?: pulumi.Input<string | enums.DataTypeState>;
}

export interface PlaybookActionPropertiesArgs {
    /**
     * The resource id of the playbook resource.
     */
    logicAppResourceId: pulumi.Input<string>;
    /**
     * The tenant id of the playbook resource.
     */
    tenantId?: pulumi.Input<string>;
}

/**
 * Describes an automation rule condition that evaluates an array property's value change
 */
export interface PropertyArrayChangedConditionPropertiesArgs {
    conditionProperties?: pulumi.Input<AutomationRulePropertyArrayChangedValuesConditionArgs>;
    /**
     *
     * Expected value is 'PropertyArrayChanged'.
     */
    conditionType: pulumi.Input<"PropertyArrayChanged">;
}

/**
 * Describes an automation rule condition that evaluates a property's value change
 */
export interface PropertyChangedConditionPropertiesArgs {
    conditionProperties?: pulumi.Input<AutomationRulePropertyValuesChangedConditionArgs>;
    /**
     *
     * Expected value is 'PropertyChanged'.
     */
    conditionType: pulumi.Input<"PropertyChanged">;
}

/**
 * Describes an automation rule condition that evaluates a property's value
 */
export interface PropertyConditionPropertiesArgs {
    conditionProperties?: pulumi.Input<AutomationRulePropertyValuesConditionArgs>;
    /**
     *
     * Expected value is 'Property'.
     */
    conditionType: pulumi.Input<"Property">;
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
 * Required permissions for the connector resource provider that define in ResourceProviders.
 * For more information about the permissions see <see href="https://docs.microsoft.com/en-us/azure/role-based-access-control/role-definitions#actions-format">here</see>.
 */
export interface ResourceProviderRequiredPermissionsArgs {
    /**
     * Gets or sets a value indicating whether the permission is custom actions (POST).
     */
    action?: pulumi.Input<boolean>;
    /**
     * Gets or sets a value indicating whether the permission is delete action (DELETE).
     */
    delete?: pulumi.Input<boolean>;
    /**
     * Gets or sets a value indicating whether the permission is read action (GET).
     */
    read?: pulumi.Input<boolean>;
    /**
     * Gets or sets a value indicating whether the permission is write action (PUT or PATCH).
     */
    write?: pulumi.Input<boolean>;
}

/**
 * Describes the Rfc connector.
 */
export interface RfcConnectorArgs {
    /**
     * FQDN, hostname, or IP address of the ABAP server.
     */
    abapServerHost?: pulumi.Input<string>;
    /**
     * The authentication type to SAP.
     */
    authenticationType?: pulumi.Input<string | enums.SapAuthenticationType>;
    /**
     * Client number of the ABAP server.
     * Example - 001
     */
    client: pulumi.Input<string>;
    /**
     * The SAP code page used for character encoding.
     * Example - 1100
     */
    codePage?: pulumi.Input<string>;
    /**
     * Logon group of the message server.
     */
    group?: pulumi.Input<string>;
    /**
     * FQDN, hostname, or IP address of the Message server.
     */
    messageServerHost?: pulumi.Input<string>;
    /**
     * Port number, or service name (from /etc/services) of the message server.
     */
    messageServerService?: pulumi.Input<string>;
    /**
     * SNC QOP.
     * Options are 1, 2, 3, 8, 9.
     */
    sncQop?: pulumi.Input<string>;
    /**
     * System ID of the ABAP server.
     * Example - A4H
     */
    systemId: pulumi.Input<string>;
    /**
     * System number of the ABAP server.
     */
    systemNumber: pulumi.Input<string>;
    /**
     * Represents the types of SAP systems.
     * Expected value is 'Rfc'.
     */
    type: pulumi.Input<"Rfc">;
}

/**
 * The sample queries for the connector.
 */
export interface SampleQueryArgs {
    /**
     * Gets or sets the  sample query description.
     */
    description: pulumi.Input<string>;
    /**
     * Gets or sets the KQL sample query.
     */
    query: pulumi.Input<string>;
}

/**
 * Describes the configuration of a SAP Docker agent.
 */
export interface SapAgentConfigurationArgs {
    /**
     * The name of the docker agent.
     * only letters with numbers, underscores and hyphens are allowed
     * example: "my-agent"
     */
    agentContainerName?: pulumi.Input<string>;
    /**
     * The key mode of the agent.
     * ManagedIdentity|ApplicationIdentity are the options
     */
    keyVaultAuthenticationMode?: pulumi.Input<string | enums.KeyVaultAuthenticationMode>;
    /**
     * The key vault resource id to access the key vault.
     * example: "/subscriptions/d0cfe6b2-9ac0-4464-9919-dccaee2e48c0/resourceGroups/myRg/providers/Microsoft.KeyVault/vaults/myVault"
     */
    keyVaultResourceId?: pulumi.Input<string>;
    /**
     * The SDK path (a file not a folder) on the agent machine.
     * example: "/path/to/nwrfc750P_8-70002755.zip"
     */
    sdkPath?: pulumi.Input<string>;
    /**
     * The secret source of the agent.
     * AzureKeyVault is the option
     */
    secretSource?: pulumi.Input<string | enums.SecretSource>;
    /**
     * The SNC path (a folder not a file) on the agent machine.
     * example: "/path/to/snc"
     */
    sncPath?: pulumi.Input<string>;
    /**
     * Type of the agent
     * Expected value is 'SAP'.
     */
    type: pulumi.Input<"SAP">;
}

/**
 * Describes the SapControl connector configuration.
 */
export interface SapControlConnectorArgs {
    /**
     * Represents the types of HTTPS configuration to connect to the SapControl service.
     */
    httpsConfiguration?: pulumi.Input<string | enums.HttpsConfigurationType>;
    /**
     * The instance number. Only 2 digits are allowed.
     */
    instance: pulumi.Input<string>;
    /**
     * The port of the SOAP connection to SAP Control.
     */
    port?: pulumi.Input<string>;
    /**
     * The server name.
     * FQDN or IP address.
     */
    server: pulumi.Input<string>;
    /**
     * The timezone.
     * example: "GMT+0" or "GMT-8"
     * default: "GMT+0"
     */
    timezone?: pulumi.Input<string>;
    /**
     * Represents the types of SAP systems.
     * Expected value is 'SapControl'.
     */
    type: pulumi.Input<"SapControl">;
}
/**
 * sapControlConnectorArgsProvideDefaults sets the appropriate defaults for SapControlConnectorArgs
 */
export function sapControlConnectorArgsProvideDefaults(val: SapControlConnectorArgs): SapControlConnectorArgs {
    return {
        ...val,
        timezone: (val.timezone) ?? "GMT+0",
    };
}

/**
 * Describes the SAP configuration.
 */
export interface SapSystemsConfigurationArgs {
    /**
     * azure resource id
     * example: "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Compute/virtualMachines/myVM"
     */
    azureResourceId?: pulumi.Input<string>;
    /**
     * Base Model for SAP System Connector.
     */
    connector: pulumi.Input<RfcConnectorArgs | SapControlConnectorArgs>;
    /**
     * The logs configuration.
     */
    logs?: pulumi.Input<pulumi.Input<LogArgs>[]>;
    /**
     * Represents the types of configuration for a system.
     * Expected value is 'SAP'.
     */
    type: pulumi.Input<"SAP">;
}

/**
 * security ml analytics settings data sources
 */
export interface SecurityMLAnalyticsSettingsDataSourceArgs {
    /**
     * The connector id that provides the following data types
     */
    connectorId?: pulumi.Input<string>;
    /**
     * The data types used by the security ml analytics settings
     */
    dataTypes?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The available data types for TI (Threat Intelligence) data connector.
 */
export interface TIDataConnectorDataTypesArgs {
    /**
     * Data type for indicators connection.
     */
    indicators?: pulumi.Input<TIDataConnectorDataTypesIndicatorsArgs>;
}

/**
 * Data type for indicators connection.
 */
export interface TIDataConnectorDataTypesIndicatorsArgs {
    /**
     * Describe whether this data type connection is enabled or not.
     */
    state?: pulumi.Input<string | enums.DataTypeState>;
}

/**
 * Describes external reference
 */
export interface ThreatIntelligenceExternalReferenceArgs {
    /**
     * External reference description
     */
    description?: pulumi.Input<string>;
    /**
     * External reference ID
     */
    externalId?: pulumi.Input<string>;
    /**
     * External reference hashes
     */
    hashes?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * External reference source name
     */
    sourceName?: pulumi.Input<string>;
    /**
     * External reference URL
     */
    url?: pulumi.Input<string>;
}

/**
 * Describes threat granular marking model entity
 */
export interface ThreatIntelligenceGranularMarkingModelArgs {
    /**
     * Language granular marking model
     */
    language?: pulumi.Input<string>;
    /**
     * marking reference granular marking model
     */
    markingRef?: pulumi.Input<number>;
    /**
     * granular marking model selectors
     */
    selectors?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Describes threat kill chain phase entity
 */
export interface ThreatIntelligenceKillChainPhaseArgs {
    /**
     * Kill chainName name
     */
    killChainName?: pulumi.Input<string>;
    /**
     * Phase name
     */
    phaseName?: pulumi.Input<string>;
}

/**
 * Describes parsed pattern entity
 */
export interface ThreatIntelligenceParsedPatternArgs {
    /**
     * Pattern type key
     */
    patternTypeKey?: pulumi.Input<string>;
    /**
     * Pattern type keys
     */
    patternTypeValues?: pulumi.Input<pulumi.Input<ThreatIntelligenceParsedPatternTypeValueArgs>[]>;
}

/**
 * Describes threat kill chain phase entity
 */
export interface ThreatIntelligenceParsedPatternTypeValueArgs {
    /**
     * Value of parsed pattern
     */
    value?: pulumi.Input<string>;
    /**
     * Type of the value
     */
    valueType?: pulumi.Input<string>;
}

/**
 * User information that made some action
 */
export interface UserInfoArgs {
    /**
     * The object id of the user.
     */
    objectId?: pulumi.Input<string>;
}

/**
 * User information that made some action
 */
export interface WatchlistUserInfoArgs {
    /**
     * The object id of the user.
     */
    objectId?: pulumi.Input<string>;
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





























