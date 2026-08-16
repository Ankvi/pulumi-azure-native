import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Model for API authentication with AWS.
 */
export interface AWSAuthModelArgs {
    /**
     * AWS STS assume role external ID. This is used to prevent the confused deputy problem: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html'
     */
    externalId?: pulumi.Input<string | undefined>;
    /**
     * AWS STS assume role ARN
     */
    roleArn: pulumi.Input<string>;
    /**
     * Type of paging
     * Expected value is 'AWS'.
     */
    type: pulumi.Input<"AWS">;
}

/**
 * The Activity query definitions
 */
export interface ActivityEntityQueriesPropertiesQueryDefinitionsArgs {
    /**
     * The Activity query to run on a given entity
     */
    query?: pulumi.Input<string | undefined>;
}

/**
 * Describes an automation rule action to add a task to an incident.
 */
export interface AddIncidentTaskActionPropertiesArgs {
    /**
     * The description of the task.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * The title of the task.
     */
    title: pulumi.Input<string>;
}

/**
 * Settings for how to dynamically override alert static details
 */
export interface AlertDetailsOverrideArgs {
    /**
     * the format containing columns name(s) to override the alert description
     */
    alertDescriptionFormat?: pulumi.Input<string | undefined>;
    /**
     * the format containing columns name(s) to override the alert name
     */
    alertDisplayNameFormat?: pulumi.Input<string | undefined>;
    /**
     * List of additional dynamic properties to override
     */
    alertDynamicProperties?: pulumi.Input<pulumi.Input<AlertPropertyMappingArgs>[] | undefined>;
    /**
     * the column name to take the alert severity from
     */
    alertSeverityColumnName?: pulumi.Input<string | undefined>;
    /**
     * the column name to take the alert tactics from
     */
    alertTacticsColumnName?: pulumi.Input<string | undefined>;
}

/**
 * A single alert property mapping to override
 */
export interface AlertPropertyMappingArgs {
    /**
     * The V3 alert property
     */
    alertProperty?: pulumi.Input<string | enums.AlertProperty | undefined>;
    /**
     * the column name to use to override this property
     */
    value?: pulumi.Input<string | undefined>;
}

/**
 * Alerts data type for data connectors.
 */
export interface AlertsDataTypeOfDataConnectorArgs {
    /**
     * Alerts data type connection.
     */
    alerts: pulumi.Input<DataConnectorDataTypeCommonArgs>;
}

/**
 * Model for authentication with the API Key. Will result in additional header on the request (default behavior) to the remote server: 'ApiKeyName: ApiKeyIdentifier ApiKey'. If 'IsApiKeyInPostPayload' is true it will send it in the body of the request and not the header.
 */
export interface ApiKeyAuthModelArgs {
    /**
     * API Key for the user secret key credential
     */
    apiKey: pulumi.Input<string>;
    /**
     * API Key Identifier
     */
    apiKeyIdentifier?: pulumi.Input<string | undefined>;
    /**
     * API Key name
     */
    apiKeyName: pulumi.Input<string>;
    /**
     * Flag to indicate if API key is set in HTTP POST payload
     */
    isApiKeyInPostPayload?: pulumi.Input<boolean | undefined>;
    /**
     * Type of paging
     * Expected value is 'APIKey'.
     */
    type: pulumi.Input<"APIKey">;
}

/**
 * An entity describing a content item.
 */
export interface AssignmentItemArgs {
    /**
     * The resource id of the content item
     */
    resourceId?: pulumi.Input<string | undefined>;
}

/**
 * Describes an automation rule action to add a task to an incident
 */
export interface AutomationRuleAddIncidentTaskActionArgs {
    /**
     * Describes an automation rule action to add a task to an incident.
     */
    actionConfiguration?: pulumi.Input<AddIncidentTaskActionPropertiesArgs | undefined>;
    /**
     * The type of the automation rule action.
     * Expected value is 'AddIncidentTask'.
     */
    actionType: pulumi.Input<"AddIncidentTask">;
    order: pulumi.Input<number>;
}

/**
 * Describes an automation rule condition with boolean operators.
 */
export interface AutomationRuleBooleanConditionArgs {
    innerConditions?: pulumi.Input<pulumi.Input<BooleanConditionPropertiesArgs | PropertyArrayChangedConditionPropertiesArgs | PropertyArrayConditionPropertiesArgs | PropertyChangedConditionPropertiesArgs | PropertyConditionPropertiesArgs>[] | undefined>;
    /**
     * Describes a boolean condition operator.
     */
    operator?: pulumi.Input<string | enums.AutomationRuleBooleanConditionSupportedOperator | undefined>;
}

/**
 * Describes an automation rule action to modify an object's properties
 */
export interface AutomationRuleModifyPropertiesActionArgs {
    actionConfiguration?: pulumi.Input<IncidentPropertiesActionArgs | undefined>;
    /**
     * The type of the automation rule action.
     * Expected value is 'ModifyProperties'.
     */
    actionType: pulumi.Input<"ModifyProperties">;
    order: pulumi.Input<number>;
}

export interface AutomationRulePropertyArrayChangedValuesConditionArgs {
    arrayType?: pulumi.Input<string | enums.AutomationRulePropertyArrayChangedConditionSupportedArrayType | undefined>;
    changeType?: pulumi.Input<string | enums.AutomationRulePropertyArrayChangedConditionSupportedChangeType | undefined>;
}

/**
 * Describes an automation rule condition on array properties.
 */
export interface AutomationRulePropertyArrayValuesConditionArgs {
    /**
     * Describes an array condition evaluation type.
     */
    arrayConditionType?: pulumi.Input<string | enums.AutomationRulePropertyArrayConditionSupportedArrayConditionType | undefined>;
    /**
     * Describes an array condition evaluated array type.
     */
    arrayType?: pulumi.Input<string | enums.AutomationRulePropertyArrayConditionSupportedArrayType | undefined>;
    itemConditions?: pulumi.Input<pulumi.Input<BooleanConditionPropertiesArgs | PropertyArrayChangedConditionPropertiesArgs | PropertyArrayConditionPropertiesArgs | PropertyChangedConditionPropertiesArgs | PropertyConditionPropertiesArgs>[] | undefined>;
}

export interface AutomationRulePropertyValuesChangedConditionArgs {
    changeType?: pulumi.Input<string | enums.AutomationRulePropertyChangedConditionSupportedChangedType | undefined>;
    operator?: pulumi.Input<string | enums.AutomationRulePropertyConditionSupportedOperator | undefined>;
    propertyName?: pulumi.Input<string | enums.AutomationRulePropertyChangedConditionSupportedPropertyType | undefined>;
    propertyValues?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

export interface AutomationRulePropertyValuesConditionArgs {
    operator?: pulumi.Input<string | enums.AutomationRulePropertyConditionSupportedOperator | undefined>;
    /**
     * The property to evaluate in an automation rule property condition.
     */
    propertyName?: pulumi.Input<string | enums.AutomationRulePropertyConditionSupportedProperty | undefined>;
    propertyValues?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Describes an automation rule action to run a playbook
 */
export interface AutomationRuleRunPlaybookActionArgs {
    actionConfiguration?: pulumi.Input<PlaybookActionPropertiesArgs | undefined>;
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
    conditions?: pulumi.Input<pulumi.Input<BooleanConditionPropertiesArgs | PropertyArrayChangedConditionPropertiesArgs | PropertyArrayConditionPropertiesArgs | PropertyChangedConditionPropertiesArgs | PropertyConditionPropertiesArgs>[] | undefined>;
    /**
     * Determines when the automation rule should automatically expire and be disabled.
     */
    expirationTimeUtc?: pulumi.Input<string | undefined>;
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
    logs: pulumi.Input<AwsCloudTrailDataConnectorDataTypesLogsArgs>;
}

/**
 * Logs data type.
 */
export interface AwsCloudTrailDataConnectorDataTypesLogsArgs {
    /**
     * Describe whether this data type connection is enabled or not.
     */
    state: pulumi.Input<string | enums.DataTypeState>;
}

/**
 * Model for API authentication with basic flow - user name + password.
 */
export interface BasicAuthModelArgs {
    /**
     * The password
     */
    password: pulumi.Input<string>;
    /**
     * Type of paging
     * Expected value is 'Basic'.
     */
    type: pulumi.Input<"Basic">;
    /**
     * The user name.
     */
    userName: pulumi.Input<string>;
}

/**
 * Describes an automation rule condition that applies a boolean operator (e.g AND, OR) to conditions
 */
export interface BooleanConditionPropertiesArgs {
    /**
     * Describes an automation rule condition with boolean operators.
     */
    conditionProperties?: pulumi.Input<AutomationRuleBooleanConditionArgs | undefined>;
    /**
     * Expected value is 'Boolean'.
     */
    conditionType: pulumi.Input<"Boolean">;
}

/**
 * A custom response configuration for a rule.
 */
export interface CcpResponseConfigArgs {
    /**
     * The compression algorithm. For Example: 'gzip', 'multi-gzip', 'deflate'.
     */
    compressionAlgo?: pulumi.Input<string | undefined>;
    /**
     * The value indicating whether the response isn't an array of events / logs.  By setting this flag to true it means the remote server will response with an object which each property has as a value an array of events / logs.
     */
    convertChildPropertiesToArray?: pulumi.Input<boolean | undefined>;
    /**
     * The csv delimiter, in case the response format is CSV.
     */
    csvDelimiter?: pulumi.Input<string | undefined>;
    /**
     * The character used to escape characters in CSV.
     */
    csvEscape?: pulumi.Input<string | undefined>;
    /**
     * The json paths, '$' char is the json root.
     */
    eventsJsonPaths: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The response format. possible values are json,csv,xml
     */
    format?: pulumi.Input<string | undefined>;
    /**
     * The value indicating whether the response has CSV boundary in case the response in CSV format.
     */
    hasCsvBoundary?: pulumi.Input<boolean | undefined>;
    /**
     * The value indicating whether the response has headers in case the response in CSV format.
     */
    hasCsvHeader?: pulumi.Input<boolean | undefined>;
    /**
     * The value indicating whether the remote server support Gzip and we should expect Gzip response.
     */
    isGzipCompressed?: pulumi.Input<boolean | undefined>;
    /**
     * The value where the status message/code should appear in the response.
     */
    successStatusJsonPath?: pulumi.Input<string | undefined>;
    /**
     * The status value.
     */
    successStatusValue?: pulumi.Input<string | undefined>;
}
/**
 * ccpResponseConfigArgsProvideDefaults sets the appropriate defaults for CcpResponseConfigArgs
 */
export function ccpResponseConfigArgsProvideDefaults(val: CcpResponseConfigArgs): CcpResponseConfigArgs {
    return {
        ...val,
        compressionAlgo: (val.compressionAlgo) ?? "gzip",
        csvEscape: (val.csvEscape) ?? "\"",
        format: (val.format) ?? "json",
    };
}

/**
 * Information on the client (user or application) that made some action
 */
export interface ClientInfoArgs {
    /**
     * The email of the client.
     */
    email?: pulumi.Input<string | undefined>;
    /**
     * The name of the client.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * The object id of the client.
     */
    objectId?: pulumi.Input<string | undefined>;
    /**
     * The user principal name of the client.
     */
    userPrincipalName?: pulumi.Input<string | undefined>;
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
    value?: pulumi.Input<pulumi.Input<string>[] | undefined>;
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
    isPreview?: pulumi.Input<boolean | undefined>;
    /**
     * The exposure status of the connector to the customers. Available values are 0-4 (0=None, 1=Available, 2=FeatureFlag, 3=Internal).
     */
    status?: pulumi.Input<number | undefined>;
}

/**
 * The required Permissions for the connector.
 */
export interface ConnectorDefinitionsPermissionsArgs {
    /**
     * Gets or sets the customs permissions required for the user to create connections.
     */
    customs?: pulumi.Input<pulumi.Input<CustomPermissionDetailsArgs>[] | undefined>;
    /**
     * Gets or sets the required licenses for the user to create connections.
     */
    licenses?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Gets or sets the resource provider permissions required for the user to create connections.
     */
    resourceProvider?: pulumi.Input<pulumi.Input<ConnectorDefinitionsResourceProviderArgs>[] | undefined>;
    /**
     * Gets or sets the required tenant permissions for the connector.
     */
    tenant?: pulumi.Input<pulumi.Input<string>[] | undefined>;
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
    availability?: pulumi.Input<ConnectorDefinitionsAvailabilityArgs | undefined>;
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
     * Gets or sets custom connector id. optional field.
     */
    id?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the instruction steps to enable the connector.
     */
    instructionSteps: pulumi.Input<pulumi.Input<InstructionStepArgs>[]>;
    /**
     * Gets or sets a value indicating whether to use 'OR'(SOME) or 'AND' between ConnectivityCriteria items.
     */
    isConnectivityCriteriasMatchSome?: pulumi.Input<boolean | undefined>;
    /**
     * Gets or sets the connector logo to be used when displaying the connector within Azure Sentinel's connector's gallery.
     * The logo value should be in SVG format.
     */
    logo?: pulumi.Input<string | undefined>;
    /**
     * The required Permissions for the connector.
     */
    permissions: pulumi.Input<ConnectorDefinitionsPermissionsArgs>;
    /**
     * Gets or sets the connector publisher name.
     */
    publisher: pulumi.Input<string>;
    /**
     * Gets or sets the connector blade title.
     */
    title: pulumi.Input<string>;
}

/**
 * The configuration of the destination of the data.
 */
export interface DCRConfigurationArgs {
    /**
     * Represents the data collection ingestion endpoint in log analytics.
     */
    dataCollectionEndpoint: pulumi.Input<string>;
    /**
     * The data collection rule immutable id, the rule defines the transformation and data destination.
     */
    dataCollectionRuleImmutableId: pulumi.Input<string>;
    /**
     * The stream we are sending the data to.
     */
    streamName: pulumi.Input<string>;
}

/**
 * Common field for data type in data connectors.
 */
export interface DataConnectorDataTypeCommonArgs {
    /**
     * Describe whether this data type connection is enabled or not.
     */
    state: pulumi.Input<string | enums.DataTypeState>;
}

/**
 * Single entity mapping for the alert rule
 */
export interface EntityMappingArgs {
    /**
     * The V3 type of the mapped entity
     */
    entityType?: pulumi.Input<string | enums.EntityMappingType | undefined>;
    /**
     * array of field mappings for the given entity mapping
     */
    fieldMappings?: pulumi.Input<pulumi.Input<FieldMappingArgs>[] | undefined>;
}

/**
 * Event grouping settings property bag.
 */
export interface EventGroupingSettingsArgs {
    /**
     * The event grouping aggregation kinds
     */
    aggregationKind?: pulumi.Input<string | enums.EventGroupingAggregationKind | undefined>;
}

/**
 * A single field mapping of the mapped entity
 */
export interface FieldMappingArgs {
    /**
     * the column name to be mapped to the identifier
     */
    columnName?: pulumi.Input<string | undefined>;
    /**
     * the V3 identifier of the entity
     */
    identifier?: pulumi.Input<string | undefined>;
}

/**
 * Represents a file.
 */
export interface FileMetadataArgs {
    /**
     * The format of the file
     */
    fileFormat?: pulumi.Input<string | enums.FileFormat | undefined>;
    /**
     * The name of the file.
     */
    fileName?: pulumi.Input<string | undefined>;
    /**
     * The size of the file.
     */
    fileSize?: pulumi.Input<number | undefined>;
}

/**
 * Model for API authentication for all GCP kind connectors.
 */
export interface GCPAuthModelArgs {
    /**
     * GCP Project Number
     */
    projectNumber: pulumi.Input<string>;
    /**
     * GCP Service Account Email
     */
    serviceAccountEmail: pulumi.Input<string>;
    /**
     * Type of paging
     * Expected value is 'GCP'.
     */
    type: pulumi.Input<"GCP">;
    /**
     * GCP Workload Identity Provider ID
     */
    workloadIdentityProviderId: pulumi.Input<string>;
}

/**
 * Model for API authentication for working with service bus or storage account.
 */
export interface GenericBlobSbsAuthModelArgs {
    /**
     * Credentials for service bus namespace, keyvault uri for access key
     */
    credentialsConfig?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Credentials for storage account, keyvault uri for access key
     */
    storageAccountCredentialsConfig?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Type of paging
     * Expected value is 'ServiceBus'.
     */
    type: pulumi.Input<"ServiceBus">;
}

/**
 * Model for API authentication for GitHub. For this authentication first we need to approve the Router app (Microsoft Security DevOps) to access the GitHub account, Then we only need the InstallationId to get the access token from https://api.github.com/app/installations/{installId}/access_tokens.
 */
export interface GitHubAuthModelArgs {
    /**
     * The GitHubApp auth installation id.
     */
    installationId?: pulumi.Input<string | undefined>;
    /**
     * Type of paging
     * Expected value is 'GitHub'.
     */
    type: pulumi.Input<"GitHub">;
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
    groupByAlertDetails?: pulumi.Input<pulumi.Input<string | enums.AlertDetail>[] | undefined>;
    /**
     * A list of custom details keys to group by (when matchingMethod is Selected). Only keys defined in the current alert rule may be used.
     */
    groupByCustomDetails?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * A list of entity types to group by (when matchingMethod is Selected). Only entities defined in the current alert rule may be used.
     */
    groupByEntities?: pulumi.Input<pulumi.Input<string | enums.EntityMappingType>[] | undefined>;
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
    assignedTo?: pulumi.Input<string | undefined>;
    /**
     * The email of the user the hunt is assigned to.
     */
    email?: pulumi.Input<string | undefined>;
    /**
     * The object id of the user the hunt is assigned to.
     */
    objectId?: pulumi.Input<string | undefined>;
    /**
     * The type of the owner the hunt is assigned to.
     */
    ownerType?: pulumi.Input<string | enums.OwnerType | undefined>;
    /**
     * The user principal name of the user the hunt is assigned to.
     */
    userPrincipalName?: pulumi.Input<string | undefined>;
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
    groupingConfiguration?: pulumi.Input<GroupingConfigurationArgs | undefined>;
}

/**
 * Describes related incident information for the bookmark
 */
export interface IncidentInfoArgs {
    /**
     * Incident Id
     */
    incidentId?: pulumi.Input<string | undefined>;
    /**
     * Relation Name
     */
    relationName?: pulumi.Input<string | undefined>;
    /**
     * The severity of the incident
     */
    severity?: pulumi.Input<string | enums.IncidentSeverity | undefined>;
    /**
     * The title of the incident
     */
    title?: pulumi.Input<string | undefined>;
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
    assignedTo?: pulumi.Input<string | undefined>;
    /**
     * The email of the user the incident is assigned to.
     */
    email?: pulumi.Input<string | undefined>;
    /**
     * The object id of the user the incident is assigned to.
     */
    objectId?: pulumi.Input<string | undefined>;
    /**
     * The type of the owner the incident is assigned to.
     */
    ownerType?: pulumi.Input<string | enums.OwnerType | undefined>;
    /**
     * The user principal name of the user the incident is assigned to.
     */
    userPrincipalName?: pulumi.Input<string | undefined>;
}

export interface IncidentPropertiesActionArgs {
    /**
     * The reason the incident was closed
     */
    classification?: pulumi.Input<string | enums.IncidentClassification | undefined>;
    /**
     * Describes the reason the incident was closed.
     */
    classificationComment?: pulumi.Input<string | undefined>;
    /**
     * The classification reason the incident was closed with
     */
    classificationReason?: pulumi.Input<string | enums.IncidentClassificationReason | undefined>;
    /**
     * List of labels to add to the incident.
     */
    labels?: pulumi.Input<pulumi.Input<IncidentLabelArgs>[] | undefined>;
    /**
     * Information on the user an incident is assigned to
     */
    owner?: pulumi.Input<IncidentOwnerInfoArgs | undefined>;
    /**
     * The severity of the incident
     */
    severity?: pulumi.Input<string | enums.IncidentSeverity | undefined>;
    /**
     * The status of the incident
     */
    status?: pulumi.Input<string | enums.IncidentStatus | undefined>;
}

/**
 * Instruction steps to enable the connector.
 */
export interface InstructionStepArgs {
    /**
     * Gets or sets the instruction step description.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the inner instruction steps details.
     * For Example: instruction step 1 might contain inner instruction steps: [instruction step 1.1, instruction step 1.2].
     */
    innerSteps?: pulumi.Input<pulumi.Input<InstructionStepArgs>[] | undefined>;
    /**
     * Gets or sets the instruction step details.
     */
    instructions?: pulumi.Input<pulumi.Input<InstructionStepDetailsArgs>[] | undefined>;
    /**
     * Gets or sets the instruction step title.
     */
    title?: pulumi.Input<string | undefined>;
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
 * Model for API authentication with JWT. Simple exchange between user name + password to access token.
 */
export interface JwtAuthModelArgs {
    /**
     * The custom headers we want to add once we send request to token endpoint.
     */
    headers?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Flag indicating whether we want to send the user name and password to token endpoint in the headers.
     */
    isCredentialsInHeaders?: pulumi.Input<boolean | undefined>;
    /**
     * Flag indicating whether the body request is JSON (header Content-Type = application/json), meaning its a Form URL encoded request (header Content-Type = application/x-www-form-urlencoded).
     */
    isJsonRequest?: pulumi.Input<boolean | undefined>;
    /**
     * The password
     */
    password: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The custom query parameter we want to add once we send request to token endpoint.
     */
    queryParameters?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Request timeout in seconds.
     */
    requestTimeoutInSeconds?: pulumi.Input<number | undefined>;
    /**
     * Token endpoint to request JWT
     */
    tokenEndpoint: pulumi.Input<string>;
    /**
     * Type of paging
     * Expected value is 'JwtToken'.
     */
    type: pulumi.Input<"JwtToken">;
    /**
     * The user name. If user name and password sent in header request we only need to populate the `value` property with the user name (Same as basic auth). If user name and password sent in body request we need to specify the `Key` and `Value`.
     */
    userName: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
/**
 * jwtAuthModelArgsProvideDefaults sets the appropriate defaults for JwtAuthModelArgs
 */
export function jwtAuthModelArgsProvideDefaults(val: JwtAuthModelArgs): JwtAuthModelArgs {
    return {
        ...val,
        isJsonRequest: (val.isJsonRequest) ?? false,
        requestTimeoutInSeconds: (val.requestTimeoutInSeconds) ?? 100,
    };
}

/**
 * The available data types for MCAS (Microsoft Cloud App Security) data connector.
 */
export interface MCASDataConnectorDataTypesArgs {
    /**
     * Alerts data type connection.
     */
    alerts: pulumi.Input<DataConnectorDataTypeCommonArgs>;
    /**
     * Discovery log data type connection.
     */
    discoveryLogs?: pulumi.Input<DataConnectorDataTypeCommonArgs | undefined>;
}

/**
 * The available data types for Microsoft Threat Intelligence data connector.
 */
export interface MSTIDataConnectorDataTypesArgs {
    /**
     * Data type for Microsoft Threat Intelligence data connector.
     */
    microsoftEmergingThreatFeed: pulumi.Input<MSTIDataConnectorDataTypesMicrosoftEmergingThreatFeedArgs>;
}

/**
 * Data type for Microsoft Threat Intelligence data connector.
 */
export interface MSTIDataConnectorDataTypesMicrosoftEmergingThreatFeedArgs {
    /**
     * The lookback period for the feed to be imported. The date-time to begin importing the feed from, for example: 2024-01-01T00:00:00.000Z.
     */
    lookbackPeriod: pulumi.Input<string>;
    /**
     * Describe whether this data type connection is enabled or not.
     */
    state: pulumi.Input<string | enums.DataTypeState>;
}

/**
 * Publisher or creator of the content item.
 */
export interface MetadataAuthorArgs {
    /**
     * Email of author contact
     */
    email?: pulumi.Input<string | undefined>;
    /**
     * Link for author/vendor page
     */
    link?: pulumi.Input<string | undefined>;
    /**
     * Name of the author. Company or person.
     */
    name?: pulumi.Input<string | undefined>;
}

/**
 * ies for the solution content item
 */
export interface MetadataCategoriesArgs {
    /**
     * domain for the solution content item
     */
    domains?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Industry verticals for the solution content item
     */
    verticals?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Dependencies for the content item, what other content items it requires to work.  Can describe more complex dependencies using a recursive/nested structure. For a single dependency an id/kind/version can be supplied or operator/criteria for complex dependencies.
 */
export interface MetadataDependenciesArgs {
    /**
     * Id of the content item we depend on
     */
    contentId?: pulumi.Input<string | undefined>;
    /**
     * This is the list of dependencies we must fulfill, according to the AND/OR operator
     */
    criteria?: pulumi.Input<pulumi.Input<MetadataDependenciesArgs>[] | undefined>;
    /**
     * Type of the content item we depend on
     */
    kind?: pulumi.Input<string | enums.Kind | undefined>;
    /**
     * Name of the content item
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Operator used for list of dependencies in criteria array.
     */
    operator?: pulumi.Input<string | enums.Operator | undefined>;
    /**
     * Version of the the content item we depend on.  Can be blank, * or missing to indicate any version fulfills the dependency.  If version does not match our defined numeric format then an exact match is required.
     */
    version?: pulumi.Input<string | undefined>;
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
    name?: pulumi.Input<string | undefined>;
    /**
     * ID of the content source.  The solution ID, workspace ID, etc
     */
    sourceId?: pulumi.Input<string | undefined>;
}

/**
 * Support information for the content item.
 */
export interface MetadataSupportArgs {
    /**
     * Email of support contact
     */
    email?: pulumi.Input<string | undefined>;
    /**
     * Link for support help, like to support page to open a ticket etc.
     */
    link?: pulumi.Input<string | undefined>;
    /**
     * Name of the support contact. Company or person.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Type of support for content item
     */
    tier: pulumi.Input<string | enums.SupportTier>;
}

/**
 * Model for API authentication with no authentication method - public API.
 */
export interface NoneAuthModelArgs {
    /**
     * Type of paging
     * Expected value is 'None'.
     */
    type: pulumi.Input<"None">;
}

/**
 * Model for API authentication with OAuth2.
 */
export interface OAuthModelArgs {
    /**
     * Access token prepend. Default is 'Bearer'.
     */
    accessTokenPrepend?: pulumi.Input<string | undefined>;
    /**
     * The user's authorization code.
     */
    authorizationCode?: pulumi.Input<string | undefined>;
    /**
     * The authorization endpoint.
     */
    authorizationEndpoint?: pulumi.Input<string | undefined>;
    /**
     * The authorization endpoint headers.
     */
    authorizationEndpointHeaders?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * The authorization endpoint query parameters.
     */
    authorizationEndpointQueryParameters?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * The Application (client) ID that the OAuth provider assigned to your app.
     */
    clientId: pulumi.Input<string>;
    /**
     * The Application (client) secret that the OAuth provider assigned to your app.
     */
    clientSecret: pulumi.Input<string>;
    /**
     * The grant type, usually will be 'authorization code'.
     */
    grantType: pulumi.Input<string>;
    /**
     * Indicating whether we want to send the clientId and clientSecret to token endpoint in the headers.
     */
    isCredentialsInHeaders?: pulumi.Input<boolean | undefined>;
    /**
     * A value indicating whether it's a JWT flow.
     */
    isJwtBearerFlow?: pulumi.Input<boolean | undefined>;
    /**
     * The Application redirect url that the user config in the OAuth provider.
     */
    redirectUri?: pulumi.Input<string | undefined>;
    /**
     * The Application (client) Scope that the OAuth provider assigned to your app.
     */
    scope?: pulumi.Input<string | undefined>;
    /**
     * The token endpoint. Defines the OAuth2 refresh token.
     */
    tokenEndpoint: pulumi.Input<string>;
    /**
     * The token endpoint headers.
     */
    tokenEndpointHeaders?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * The token endpoint query parameters.
     */
    tokenEndpointQueryParameters?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Type of paging
     * Expected value is 'OAuth2'.
     */
    type: pulumi.Input<"OAuth2">;
}
/**
 * oauthModelArgsProvideDefaults sets the appropriate defaults for OAuthModelArgs
 */
export function oauthModelArgsProvideDefaults(val: OAuthModelArgs): OAuthModelArgs {
    return {
        ...val,
        isCredentialsInHeaders: (val.isCredentialsInHeaders) ?? false,
    };
}

/**
 * The available data types for office data connector.
 */
export interface OfficeDataConnectorDataTypesArgs {
    /**
     * Exchange data type connection.
     */
    exchange: pulumi.Input<OfficeDataConnectorDataTypesExchangeArgs>;
    /**
     * SharePoint data type connection.
     */
    sharePoint: pulumi.Input<OfficeDataConnectorDataTypesSharePointArgs>;
    /**
     * Teams data type connection.
     */
    teams: pulumi.Input<OfficeDataConnectorDataTypesTeamsArgs>;
}

/**
 * Exchange data type connection.
 */
export interface OfficeDataConnectorDataTypesExchangeArgs {
    /**
     * Describe whether this data type connection is enabled or not.
     */
    state: pulumi.Input<string | enums.DataTypeState>;
}

/**
 * SharePoint data type connection.
 */
export interface OfficeDataConnectorDataTypesSharePointArgs {
    /**
     * Describe whether this data type connection is enabled or not.
     */
    state: pulumi.Input<string | enums.DataTypeState>;
}

/**
 * Teams data type connection.
 */
export interface OfficeDataConnectorDataTypesTeamsArgs {
    /**
     * Describe whether this data type connection is enabled or not.
     */
    state: pulumi.Input<string | enums.DataTypeState>;
}

/**
 * Model for API authentication for Oracle.
 */
export interface OracleAuthModelArgs {
    /**
     * Content of the PRM file
     */
    pemFile: pulumi.Input<string>;
    /**
     * Public Fingerprint
     */
    publicFingerprint: pulumi.Input<string>;
    /**
     * Oracle tenant ID
     */
    tenantId: pulumi.Input<string>;
    /**
     * Type of paging
     * Expected value is 'Oracle'.
     */
    type: pulumi.Input<"Oracle">;
    /**
     * Oracle user ID
     */
    userId: pulumi.Input<string>;
}

export interface PlaybookActionPropertiesArgs {
    /**
     * The resource id of the playbook resource.
     */
    logicAppResourceId: pulumi.Input<string>;
    /**
     * The tenant id of the playbook resource.
     */
    tenantId?: pulumi.Input<string | undefined>;
}

/**
 * The available data types for Microsoft Defender for Threat Intelligence Premium data connector.
 */
export interface PremiumMdtiDataConnectorDataTypesArgs {
    /**
     * Data type for Microsoft Defender for Threat Intelligence Premium data connector.
     */
    connector: pulumi.Input<PremiumMdtiDataConnectorDataTypesConnectorArgs>;
}

/**
 * Data type for Microsoft Defender for Threat Intelligence Premium data connector.
 */
export interface PremiumMdtiDataConnectorDataTypesConnectorArgs {
    /**
     * Describe whether this data type connection is enabled or not.
     */
    state: pulumi.Input<string | enums.DataTypeState>;
}

/**
 * Describes an automation rule condition that evaluates an array property's value change
 */
export interface PropertyArrayChangedConditionPropertiesArgs {
    conditionProperties?: pulumi.Input<AutomationRulePropertyArrayChangedValuesConditionArgs | undefined>;
    /**
     * Expected value is 'PropertyArrayChanged'.
     */
    conditionType: pulumi.Input<"PropertyArrayChanged">;
}

/**
 * Describes an automation rule condition that evaluates an array property's value
 */
export interface PropertyArrayConditionPropertiesArgs {
    /**
     * Describes an automation rule condition on array properties.
     */
    conditionProperties?: pulumi.Input<AutomationRulePropertyArrayValuesConditionArgs | undefined>;
    /**
     * Expected value is 'PropertyArray'.
     */
    conditionType: pulumi.Input<"PropertyArray">;
}

/**
 * Describes an automation rule condition that evaluates a property's value change
 */
export interface PropertyChangedConditionPropertiesArgs {
    conditionProperties?: pulumi.Input<AutomationRulePropertyValuesChangedConditionArgs | undefined>;
    /**
     * Expected value is 'PropertyChanged'.
     */
    conditionType: pulumi.Input<"PropertyChanged">;
}

/**
 * Describes an automation rule condition that evaluates a property's value
 */
export interface PropertyConditionPropertiesArgs {
    conditionProperties?: pulumi.Input<AutomationRulePropertyValuesConditionArgs | undefined>;
    /**
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
    branch: pulumi.Input<string>;
    /**
     * Display url of repository.
     */
    displayUrl?: pulumi.Input<string | undefined>;
    /**
     * Url of repository.
     */
    url: pulumi.Input<string>;
}

/**
 * Credentials to access repository.
 */
export interface RepositoryAccessArgs {
    /**
     * OAuth ClientId. Required when `kind` is `OAuth`
     */
    clientId?: pulumi.Input<string | undefined>;
    /**
     * OAuth Code. Required when `kind` is `OAuth`
     */
    code?: pulumi.Input<string | undefined>;
    /**
     * Application installation ID. Required when `kind` is `App`. Supported by `GitHub` only.
     */
    installationId?: pulumi.Input<string | undefined>;
    /**
     * The kind of repository access credentials
     */
    kind: pulumi.Input<string | enums.RepositoryAccessKind>;
    /**
     * OAuth State. Required when `kind` is `OAuth`
     */
    state?: pulumi.Input<string | undefined>;
    /**
     * Personal Access Token. Required when `kind` is `PAT`
     */
    token?: pulumi.Input<string | undefined>;
}

/**
 * Resources created in user's repository for the source-control.
 */
export interface RepositoryResourceInfoArgs {
    /**
     * The webhook object created for the source-control.
     */
    webhook?: pulumi.Input<WebhookArgs | undefined>;
}

/**
 * Required permissions for the connector resource provider that define in ResourceProviders.
 * For more information about the permissions see <see href="https://docs.microsoft.com/en-us/azure/role-based-access-control/role-definitions#actions-format">here</see>.
 */
export interface ResourceProviderRequiredPermissionsArgs {
    /**
     * Gets or sets a value indicating whether the permission is custom actions (POST).
     */
    action?: pulumi.Input<boolean | undefined>;
    /**
     * Gets or sets a value indicating whether the permission is delete action (DELETE).
     */
    delete?: pulumi.Input<boolean | undefined>;
    /**
     * Gets or sets a value indicating whether the permission is read action (GET).
     */
    read?: pulumi.Input<boolean | undefined>;
    /**
     * Gets or sets a value indicating whether the permission is write action (PUT or PATCH).
     */
    write?: pulumi.Input<boolean | undefined>;
}

/**
 * The request configuration.
 */
export interface RestApiPollerRequestConfigArgs {
    /**
     * The API endpoint.
     */
    apiEndpoint: pulumi.Input<string>;
    /**
     * The query parameter name which the remote server expect to end query. This property goes hand to hand with `startTimeAttributeName`
     */
    endTimeAttributeName?: pulumi.Input<string | undefined>;
    /**
     * The header for the request for the remote server.
     */
    headers?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * The HTTP method, default value GET.
     */
    httpMethod?: pulumi.Input<string | enums.HttpMethodVerb | undefined>;
    /**
     * Flag to indicate if HTTP POST payload is in JSON format (vs form-urlencoded).
     */
    isPostPayloadJson?: pulumi.Input<boolean | undefined>;
    /**
     * The HTTP query parameters to RESTful API.
     */
    queryParameters?: any | undefined;
    /**
     * the query parameters template. Defines the query parameters template to use when passing query parameters in advanced scenarios.
     */
    queryParametersTemplate?: pulumi.Input<string | undefined>;
    /**
     * The query time format. A remote server can have a query to pull data from range 'start' to 'end'. This property indicate what is the expected time format the remote server know to parse.
     */
    queryTimeFormat?: pulumi.Input<string | undefined>;
    /**
     * The query parameter name which we need to send the server for query logs in time interval. Should be defined with `queryTimeIntervalPrepend` and `queryTimeIntervalDelimiter`
     */
    queryTimeIntervalAttributeName?: pulumi.Input<string | undefined>;
    /**
     * The delimiter string between 2 QueryTimeFormat in the query parameter `queryTimeIntervalAttributeName`.
     */
    queryTimeIntervalDelimiter?: pulumi.Input<string | undefined>;
    /**
     * The string prepend to the value of the query parameter in `queryTimeIntervalAttributeName`.
     */
    queryTimeIntervalPrepend?: pulumi.Input<string | undefined>;
    /**
     * The query window in minutes for the request.
     */
    queryWindowInMin?: pulumi.Input<number | undefined>;
    /**
     * The Rate limit queries per second for the request..
     */
    rateLimitQPS?: pulumi.Input<number | undefined>;
    /**
     * The retry count.
     */
    retryCount?: pulumi.Input<number | undefined>;
    /**
     * The query parameter name which the remote server expect to start query. This property goes hand to hand with `endTimeAttributeName`.
     */
    startTimeAttributeName?: pulumi.Input<string | undefined>;
    /**
     * The timeout in seconds.
     */
    timeoutInSeconds?: pulumi.Input<number | undefined>;
}

/**
 * The request paging configuration.
 */
export interface RestApiPollerRequestPagingConfigArgs {
    /**
     * Page size
     */
    pageSize?: pulumi.Input<number | undefined>;
    /**
     * Page size parameter name
     */
    pageSizeParameterName?: pulumi.Input<string | undefined>;
    /**
     * Type of paging
     */
    pagingType: pulumi.Input<string | enums.RestApiPollerRequestPagingKind>;
}

/**
 * security ml analytics settings data sources
 */
export interface SecurityMLAnalyticsSettingsDataSourceArgs {
    /**
     * The connector id that provides the following data types
     */
    connectorId?: pulumi.Input<string | undefined>;
    /**
     * The data types used by the security ml analytics settings
     */
    dataTypes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Service principal metadata.
 */
export interface ServicePrincipalArgs {
    /**
     * Expiration time of service principal credentials.
     */
    credentialsExpireOn?: pulumi.Input<string | undefined>;
}

/**
 * Model for API authentication with session cookie.
 */
export interface SessionAuthModelArgs {
    /**
     * HTTP request headers to session service endpoint.
     */
    headers?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Indicating whether API key is set in HTTP POST payload.
     */
    isPostPayloadJson?: pulumi.Input<boolean | undefined>;
    /**
     * The password attribute name.
     */
    password: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Query parameters to session service endpoint.
     */
    queryParameters?: any | undefined;
    /**
     * Session id attribute name from HTTP response header.
     */
    sessionIdName?: pulumi.Input<string | undefined>;
    /**
     * HTTP request URL to session service endpoint.
     */
    sessionLoginRequestUri?: pulumi.Input<string | undefined>;
    /**
     * Session timeout in minutes.
     */
    sessionTimeoutInMinutes?: pulumi.Input<number | undefined>;
    /**
     * Type of paging
     * Expected value is 'Session'.
     */
    type: pulumi.Input<"Session">;
    /**
     * The user name attribute key value.
     */
    userName: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The available data types for TI (Threat Intelligence) data connector.
 */
export interface TIDataConnectorDataTypesArgs {
    /**
     * Data type for indicators connection.
     */
    indicators: pulumi.Input<TIDataConnectorDataTypesIndicatorsArgs>;
}

/**
 * Data type for indicators connection.
 */
export interface TIDataConnectorDataTypesIndicatorsArgs {
    /**
     * Describe whether this data type connection is enabled or not.
     */
    state: pulumi.Input<string | enums.DataTypeState>;
}

/**
 * Describes external reference
 */
export interface ThreatIntelligenceExternalReferenceArgs {
    /**
     * External reference description
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * External reference ID
     */
    externalId?: pulumi.Input<string | undefined>;
    /**
     * External reference hashes
     */
    hashes?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * External reference source name
     */
    sourceName?: pulumi.Input<string | undefined>;
    /**
     * External reference URL
     */
    url?: pulumi.Input<string | undefined>;
}

/**
 * Describes threat granular marking model entity
 */
export interface ThreatIntelligenceGranularMarkingModelArgs {
    /**
     * Language granular marking model
     */
    language?: pulumi.Input<string | undefined>;
    /**
     * marking reference granular marking model
     */
    markingRef?: pulumi.Input<number | undefined>;
    /**
     * granular marking model selectors
     */
    selectors?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Describes threat kill chain phase entity
 */
export interface ThreatIntelligenceKillChainPhaseArgs {
    /**
     * Kill chainName name
     */
    killChainName?: pulumi.Input<string | undefined>;
    /**
     * Phase name
     */
    phaseName?: pulumi.Input<string | undefined>;
}

/**
 * Describes parsed pattern entity
 */
export interface ThreatIntelligenceParsedPatternArgs {
    /**
     * Pattern type key
     */
    patternTypeKey?: pulumi.Input<string | undefined>;
    /**
     * Pattern type keys
     */
    patternTypeValues?: pulumi.Input<pulumi.Input<ThreatIntelligenceParsedPatternTypeValueArgs>[] | undefined>;
}

/**
 * Describes threat kill chain phase entity
 */
export interface ThreatIntelligenceParsedPatternTypeValueArgs {
    /**
     * Value of parsed pattern
     */
    value?: pulumi.Input<string | undefined>;
    /**
     * Type of the value
     */
    valueType?: pulumi.Input<string | undefined>;
}

/**
 * User information that made some action
 */
export interface UserInfoArgs {
    /**
     * The object id of the user.
     */
    objectId?: pulumi.Input<string | undefined>;
}

/**
 * User information that made some action
 */
export interface WatchlistUserInfoArgs {
    /**
     * The object id of the user.
     */
    objectId?: pulumi.Input<string | undefined>;
}

/**
 * Detail about the webhook object.
 */
export interface WebhookArgs {
    /**
     * A flag to instruct the backend service to rotate webhook secret.
     */
    rotateWebhookSecret?: pulumi.Input<boolean | undefined>;
}
