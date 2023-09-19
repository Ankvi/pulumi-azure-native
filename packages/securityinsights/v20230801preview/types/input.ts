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

    export interface AddIncidentTaskActionPropertiesArgs {
        /**
         * The description of the task.
         */
        description?: pulumi.Input<string>;
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
        alerts: pulumi.Input<DataConnectorDataTypeCommonArgs>;
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
     * Describes an automation rule action to add a task to an incident
     */
    export interface AutomationRuleAddIncidentTaskActionArgs {
        actionConfiguration?: pulumi.Input<AddIncidentTaskActionPropertiesArgs>;
        /**
         * The type of the automation rule action.
         * Expected value is 'AddIncidentTask'.
         */
        actionType: pulumi.Input<"AddIncidentTask">;
        order: pulumi.Input<number>;
    }

    export interface AutomationRuleBooleanConditionArgs {
        innerConditions?: pulumi.Input<pulumi.Input<BooleanConditionPropertiesArgs | PropertyArrayChangedConditionPropertiesArgs | PropertyArrayConditionPropertiesArgs | PropertyChangedConditionPropertiesArgs | PropertyConditionPropertiesArgs>[]>;
        operator?: pulumi.Input<string | enums.AutomationRuleBooleanConditionSupportedOperator>;
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

    export interface AutomationRulePropertyArrayValuesConditionArgs {
        arrayConditionType?: pulumi.Input<string | enums.AutomationRulePropertyArrayConditionSupportedArrayConditionType>;
        arrayType?: pulumi.Input<string | enums.AutomationRulePropertyArrayConditionSupportedArrayType>;
        itemConditions?: pulumi.Input<pulumi.Input<BooleanConditionPropertiesArgs | PropertyArrayChangedConditionPropertiesArgs | PropertyArrayConditionPropertiesArgs | PropertyChangedConditionPropertiesArgs | PropertyConditionPropertiesArgs>[]>;
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
        conditions?: pulumi.Input<pulumi.Input<BooleanConditionPropertiesArgs | PropertyArrayChangedConditionPropertiesArgs | PropertyArrayConditionPropertiesArgs | PropertyChangedConditionPropertiesArgs | PropertyConditionPropertiesArgs>[]>;
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
     * Connector Availability Status
     */
    export interface AvailabilityArgs {
        /**
         * Set connector as preview
         */
        isPreview?: pulumi.Input<boolean>;
        /**
         * The connector Availability Status
         */
        status?: pulumi.Input<number>;
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
     * The available data types for Amazon Web Services S3 data connector.
     */
    export interface AwsS3DataConnectorDataTypesArgs {
        /**
         * Logs data type.
         */
        logs: pulumi.Input<AwsS3DataConnectorDataTypesLogsArgs>;
    }

    /**
     * Logs data type.
     */
    export interface AwsS3DataConnectorDataTypesLogsArgs {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state: pulumi.Input<string | enums.DataTypeState>;
    }

    /**
     * Describes the entity mappings of a single entity
     */
    export interface BookmarkEntityMappingsArgs {
        /**
         * The entity type
         */
        entityType?: pulumi.Input<string>;
        /**
         * Array of fields mapping for that entity type
         */
        fieldMappings?: pulumi.Input<pulumi.Input<EntityFieldMappingArgs>[]>;
    }

    /**
     * Describes an automation rule condition that applies a boolean operator (e.g AND, OR) to conditions
     */
    export interface BooleanConditionPropertiesArgs {
        conditionProperties?: pulumi.Input<AutomationRuleBooleanConditionArgs>;
        /**
         *
         * Expected value is 'Boolean'.
         */
        conditionType: pulumi.Input<"Boolean">;
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
     * Describe the authentication properties needed to successfully authenticate with the server
     */
    export interface CodelessConnectorPollingAuthPropertiesArgs {
        /**
         * A prefix send in the header before the actual token
         */
        apiKeyIdentifier?: pulumi.Input<string>;
        /**
         * The header name which the token is sent with
         */
        apiKeyName?: pulumi.Input<string>;
        /**
         * The authentication type
         */
        authType: pulumi.Input<string>;
        /**
         * The endpoint used to authorize the user, used in Oauth 2.0 flow
         */
        authorizationEndpoint?: pulumi.Input<string>;
        /**
         * The query parameters used in authorization request, used in Oauth 2.0 flow
         */
        authorizationEndpointQueryParameters?: any;
        /**
         * Describes the flow name, for example 'AuthCode' for Oauth 2.0
         */
        flowName?: pulumi.Input<string>;
        /**
         * Marks if the key should sent in header
         */
        isApiKeyInPostPayload?: pulumi.Input<string>;
        /**
         * Marks if we should send the client secret in header or payload, used in Oauth 2.0 flow
         */
        isClientSecretInHeader?: pulumi.Input<boolean>;
        /**
         * The redirect endpoint where we will get the authorization code, used in Oauth 2.0 flow
         */
        redirectionEndpoint?: pulumi.Input<string>;
        /**
         * The OAuth token scope
         */
        scope?: pulumi.Input<string>;
        /**
         * The endpoint used to issue a token, used in Oauth 2.0 flow
         */
        tokenEndpoint?: pulumi.Input<string>;
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
    export interface CodelessConnectorPollingConfigPropertiesArgs {
        /**
         * Describe the authentication type of the poller
         */
        auth: pulumi.Input<CodelessConnectorPollingAuthPropertiesArgs>;
        /**
         * The poller active status
         */
        isActive?: pulumi.Input<boolean>;
        /**
         * Describe the poll request paging config of the poller
         */
        paging?: pulumi.Input<CodelessConnectorPollingPagingPropertiesArgs>;
        /**
         * Describe the poll request config parameters of the poller
         */
        request: pulumi.Input<CodelessConnectorPollingRequestPropertiesArgs>;
        /**
         * Describe the response config parameters of the poller
         */
        response?: pulumi.Input<CodelessConnectorPollingResponsePropertiesArgs>;
    }

    /**
     * Describe the properties needed to make a pagination call
     */
    export interface CodelessConnectorPollingPagingPropertiesArgs {
        /**
         * Defines the name of a next page attribute
         */
        nextPageParaName?: pulumi.Input<string>;
        /**
         * Defines the path to a next page token JSON
         */
        nextPageTokenJsonPath?: pulumi.Input<string>;
        /**
         * Defines the path to a page count attribute
         */
        pageCountAttributePath?: pulumi.Input<string>;
        /**
         * Defines the paging size
         */
        pageSize?: pulumi.Input<number>;
        /**
         * Defines the name of the page size parameter
         */
        pageSizeParaName?: pulumi.Input<string>;
        /**
         * Defines the path to a paging time stamp attribute
         */
        pageTimeStampAttributePath?: pulumi.Input<string>;
        /**
         * Defines the path to a page total count attribute
         */
        pageTotalCountAttributePath?: pulumi.Input<string>;
        /**
         * Describes the type. could be 'None', 'PageToken', 'PageCount', 'TimeStamp'
         */
        pagingType: pulumi.Input<string>;
        /**
         * Determines whether to search for the latest time stamp in the events list
         */
        searchTheLatestTimeStampFromEventsList?: pulumi.Input<string>;
    }

    /**
     * Describe the request properties needed to successfully pull from the server
     */
    export interface CodelessConnectorPollingRequestPropertiesArgs {
        /**
         * Describe the endpoint we should pull the data from
         */
        apiEndpoint: pulumi.Input<string>;
        /**
         * This will be used the query events from the end of the time window
         */
        endTimeAttributeName?: pulumi.Input<string>;
        /**
         * Describe the headers sent in the poll request
         */
        headers?: any;
        /**
         * The http method type we will use in the poll request, GET or POST
         */
        httpMethod: pulumi.Input<string>;
        /**
         * Describe the query parameters sent in the poll request
         */
        queryParameters?: any;
        /**
         * For advanced scenarios for example user name/password embedded in nested JSON payload
         */
        queryParametersTemplate?: pulumi.Input<string>;
        /**
         * The time format will be used the query events in a specific window
         */
        queryTimeFormat: pulumi.Input<string>;
        /**
         * The window interval we will use the pull the data
         */
        queryWindowInMin: pulumi.Input<number>;
        /**
         * Defines the rate limit QPS
         */
        rateLimitQps?: pulumi.Input<number>;
        /**
         * Describe the amount of time we should try and poll the data in case of failure
         */
        retryCount?: pulumi.Input<number>;
        /**
         * This will be used the query events from a start of the time window
         */
        startTimeAttributeName?: pulumi.Input<string>;
        /**
         * The number of seconds we will consider as a request timeout
         */
        timeoutInSeconds?: pulumi.Input<number>;
    }

    /**
     * Describes the response from the external server
     */
    export interface CodelessConnectorPollingResponsePropertiesArgs {
        /**
         * Describes the path we should extract the data in the response
         */
        eventsJsonPaths: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Describes if the data in the response is Gzip
         */
        isGzipCompressed?: pulumi.Input<boolean>;
        /**
         * Describes the path we should extract the status code in the response
         */
        successStatusJsonPath?: pulumi.Input<string>;
        /**
         * Describes the path we should extract the status value in the response
         */
        successStatusValue?: pulumi.Input<string>;
    }

    /**
     * Config to describe the instructions blade
     */
    export interface CodelessUiConnectorConfigPropertiesArgs {
        /**
         * Connector Availability Status
         */
        availability: pulumi.Input<AvailabilityArgs>;
        /**
         * Define the way the connector check connectivity
         */
        connectivityCriteria: pulumi.Input<pulumi.Input<CodelessUiConnectorConfigPropertiesConnectivityCriteriaArgs>[]>;
        /**
         * An optional custom image to be used when displaying the connector within Azure Sentinel's connector's gallery
         */
        customImage?: pulumi.Input<string>;
        /**
         * Data types to check for last data received
         */
        dataTypes: pulumi.Input<pulumi.Input<CodelessUiConnectorConfigPropertiesDataTypesArgs>[]>;
        /**
         * Connector description
         */
        descriptionMarkdown: pulumi.Input<string>;
        /**
         * The graph query to show the current data status
         */
        graphQueries: pulumi.Input<pulumi.Input<CodelessUiConnectorConfigPropertiesGraphQueriesArgs>[]>;
        /**
         * Name of the table the connector will insert the data to
         */
        graphQueriesTableName: pulumi.Input<string>;
        /**
         * Instruction steps to enable the connector
         */
        instructionSteps: pulumi.Input<pulumi.Input<CodelessUiConnectorConfigPropertiesInstructionStepsArgs>[]>;
        /**
         * Permissions required for the connector
         */
        permissions: pulumi.Input<PermissionsArgs>;
        /**
         * Connector publisher name
         */
        publisher: pulumi.Input<string>;
        /**
         * The sample queries for the connector
         */
        sampleQueries: pulumi.Input<pulumi.Input<CodelessUiConnectorConfigPropertiesSampleQueriesArgs>[]>;
        /**
         * Connector blade title
         */
        title: pulumi.Input<string>;
    }

    export interface CodelessUiConnectorConfigPropertiesConnectivityCriteriaArgs {
        /**
         * type of connectivity
         */
        type?: pulumi.Input<string | enums.ConnectivityType>;
        /**
         * Queries for checking connectivity
         */
        value?: pulumi.Input<pulumi.Input<string>[]>;
    }

    export interface CodelessUiConnectorConfigPropertiesDataTypesArgs {
        /**
         * Query for indicate last data received
         */
        lastDataReceivedQuery?: pulumi.Input<string>;
        /**
         * Name of the data type to show in the graph. can be use with {{graphQueriesTableName}} placeholder
         */
        name?: pulumi.Input<string>;
    }

    export interface CodelessUiConnectorConfigPropertiesGraphQueriesArgs {
        /**
         * The base query for the graph
         */
        baseQuery?: pulumi.Input<string>;
        /**
         * The legend for the graph
         */
        legend?: pulumi.Input<string>;
        /**
         * the metric that the query is checking
         */
        metricName?: pulumi.Input<string>;
    }

    export interface CodelessUiConnectorConfigPropertiesInstructionStepsArgs {
        /**
         * Instruction step description
         */
        description?: pulumi.Input<string>;
        /**
         * Instruction step details
         */
        instructions?: pulumi.Input<pulumi.Input<InstructionStepsInstructionsArgs>[]>;
        /**
         * Instruction step title
         */
        title?: pulumi.Input<string>;
    }

    export interface CodelessUiConnectorConfigPropertiesSampleQueriesArgs {
        /**
         * The sample query description
         */
        description?: pulumi.Input<string>;
        /**
         * the sample query
         */
        query?: pulumi.Input<string>;
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
     * The available data types for Dynamics365 data connector.
     */
    export interface Dynamics365DataConnectorDataTypesArgs {
        /**
         * Common Data Service data type connection.
         */
        dynamics365CdsActivities: pulumi.Input<Dynamics365DataConnectorDataTypesDynamics365CdsActivitiesArgs>;
    }

    /**
     * Common Data Service data type connection.
     */
    export interface Dynamics365DataConnectorDataTypesDynamics365CdsActivitiesArgs {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state: pulumi.Input<string | enums.DataTypeState>;
    }

    /**
     * Map identifiers of a single entity
     */
    export interface EntityFieldMappingArgs {
        /**
         * Alert V3 identifier
         */
        identifier?: pulumi.Input<string>;
        /**
         * The value of the identifier
         */
        value?: pulumi.Input<string>;
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
     * Represents a Fusion scenario exclusion patterns in Fusion detection.
     */
    export interface FusionScenarioExclusionPatternArgs {
        /**
         * DateTime when scenario exclusion pattern is added in UTC.
         */
        dateAddedInUTC: pulumi.Input<string>;
        /**
         * Scenario exclusion pattern.
         */
        exclusionPattern: pulumi.Input<string>;
    }

    /**
     * Represents a supported source signal configuration in Fusion detection.
     */
    export interface FusionSourceSettingsArgs {
        /**
         * Determines whether this source signal is enabled or disabled in Fusion detection.
         */
        enabled: pulumi.Input<boolean>;
        /**
         * Name of the Fusion source signal. Refer to Fusion alert rule template for supported values.
         */
        sourceName: pulumi.Input<string>;
        /**
         * Configuration for all source subtypes under this source signal consumed in fusion detection.
         */
        sourceSubTypes?: pulumi.Input<pulumi.Input<FusionSourceSubTypeSettingArgs>[]>;
    }

    /**
     * Represents a supported source subtype configuration under a source signal in Fusion detection.
     */
    export interface FusionSourceSubTypeSettingArgs {
        /**
         * Determines whether this source subtype under source signal is enabled or disabled in Fusion detection.
         */
        enabled: pulumi.Input<boolean>;
        /**
         * Severity configuration for a source subtype consumed in fusion detection.
         */
        severityFilters: pulumi.Input<FusionSubTypeSeverityFilterArgs>;
        /**
         * The Name of the source subtype under a given source signal in Fusion detection. Refer to Fusion alert rule template for supported values.
         */
        sourceSubTypeName: pulumi.Input<string>;
    }

    /**
     * Represents severity configuration for a source subtype consumed in Fusion detection.
     */
    export interface FusionSubTypeSeverityFilterArgs {
        /**
         * Individual Severity configuration settings for a given source subtype consumed in Fusion detection.
         */
        filters?: pulumi.Input<pulumi.Input<FusionSubTypeSeverityFiltersItemArgs>[]>;
    }

    /**
     * Represents a Severity filter setting for a given source subtype consumed in Fusion detection.
     */
    export interface FusionSubTypeSeverityFiltersItemArgs {
        /**
         * Determines whether this severity is enabled or disabled for this source subtype consumed in Fusion detection.
         */
        enabled: pulumi.Input<boolean>;
        /**
         * The Severity for a given source subtype consumed in Fusion detection.
         */
        severity: pulumi.Input<string | enums.AlertSeverity>;
    }

    /**
     * Google Cloud Platform auth section properties.
     */
    export interface GCPAuthPropertiesArgs {
        /**
         * The GCP project number.
         */
        projectNumber: pulumi.Input<string>;
        /**
         * The service account that is used to access the GCP project.
         */
        serviceAccountEmail: pulumi.Input<string>;
        /**
         * The workload identity provider id that is used to gain access to the GCP project.
         */
        workloadIdentityProviderId: pulumi.Input<string>;
    }

    /**
     * Google Cloud Platform request section properties.
     */
    export interface GCPRequestPropertiesArgs {
        /**
         * The GCP project id.
         */
        projectId: pulumi.Input<string>;
        /**
         * The GCP pub/sub subscription names.
         */
        subscriptionNames: pulumi.Input<pulumi.Input<string>[]>;
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

    export interface InstructionStepsInstructionsArgs {
        /**
         * The parameters for the setting
         */
        parameters?: any;
        /**
         * The kind of the setting
         */
        type: pulumi.Input<string | enums.SettingType>;
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
        discoveryLogs?: pulumi.Input<DataConnectorDataTypeCommonArgs>;
    }

    /**
     * The available data types for Microsoft Threat Intelligence Platforms data connector.
     */
    export interface MSTIDataConnectorDataTypesArgs {
        /**
         * Data type for Microsoft Threat Intelligence Platforms data connector.
         */
        microsoftEmergingThreatFeed: pulumi.Input<MSTIDataConnectorDataTypesMicrosoftEmergingThreatFeedArgs>;
    }

    /**
     * Data type for Microsoft Threat Intelligence Platforms data connector.
     */
    export interface MSTIDataConnectorDataTypesMicrosoftEmergingThreatFeedArgs {
        /**
         * The lookback period for the feed to be imported.
         */
        lookbackPeriod: pulumi.Input<string>;
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state: pulumi.Input<string | enums.DataTypeState>;
    }

    /**
     * The available data types for Microsoft Threat Protection Platforms data connector.
     */
    export interface MTPDataConnectorDataTypesArgs {
        /**
         * Alerts data type for Microsoft Threat Protection Platforms data connector.
         */
        alerts?: pulumi.Input<MTPDataConnectorDataTypesAlertsArgs>;
        /**
         * Incidents data type for Microsoft Threat Protection Platforms data connector.
         */
        incidents: pulumi.Input<MTPDataConnectorDataTypesIncidentsArgs>;
    }

    /**
     * Alerts data type for Microsoft Threat Protection Platforms data connector.
     */
    export interface MTPDataConnectorDataTypesAlertsArgs {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state: pulumi.Input<string | enums.DataTypeState>;
    }

    /**
     * Incidents data type for Microsoft Threat Protection Platforms data connector.
     */
    export interface MTPDataConnectorDataTypesIncidentsArgs {
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
     * The available data types for Microsoft Purview Information Protection data connector.
     */
    export interface MicrosoftPurviewInformationProtectionConnectorDataTypesArgs {
        /**
         * Logs data type.
         */
        logs: pulumi.Input<MicrosoftPurviewInformationProtectionConnectorDataTypesLogsArgs>;
    }

    /**
     * Logs data type.
     */
    export interface MicrosoftPurviewInformationProtectionConnectorDataTypesLogsArgs {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state: pulumi.Input<string | enums.DataTypeState>;
    }

    /**
     * Represents the connector's Filtered providers
     */
    export interface MtpFilteredProvidersArgs {
        /**
         * Alerts filtered providers. When filters are not applied, all alerts will stream through the MTP pipeline, still in private preview for all products EXCEPT MDA and MDI, which are in GA state.
         */
        alerts: pulumi.Input<pulumi.Input<string | enums.MtpProvider>[]>;
    }

    /**
     * The available data types for Office Microsoft Project data connector.
     */
    export interface Office365ProjectConnectorDataTypesArgs {
        /**
         * Logs data type.
         */
        logs: pulumi.Input<Office365ProjectConnectorDataTypesLogsArgs>;
    }

    /**
     * Logs data type.
     */
    export interface Office365ProjectConnectorDataTypesLogsArgs {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state: pulumi.Input<string | enums.DataTypeState>;
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
     * The available data types for Office Microsoft PowerBI data connector.
     */
    export interface OfficePowerBIConnectorDataTypesArgs {
        /**
         * Logs data type.
         */
        logs: pulumi.Input<OfficePowerBIConnectorDataTypesLogsArgs>;
    }

    /**
     * Logs data type.
     */
    export interface OfficePowerBIConnectorDataTypesLogsArgs {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state: pulumi.Input<string | enums.DataTypeState>;
    }

    /**
     * Permissions required for the connector
     */
    export interface PermissionsArgs {
        /**
         * Customs permissions required for the connector
         */
        customs?: pulumi.Input<pulumi.Input<PermissionsCustomsArgs>[]>;
        /**
         * Resource provider permissions required for the connector
         */
        resourceProvider?: pulumi.Input<pulumi.Input<PermissionsResourceProviderArgs>[]>;
    }

    export interface PermissionsCustomsArgs {
        /**
         * Customs permissions description
         */
        description?: pulumi.Input<string>;
        /**
         * Customs permissions name
         */
        name?: pulumi.Input<string>;
    }

    export interface PermissionsResourceProviderArgs {
        /**
         * Permission description text
         */
        permissionsDisplayText?: pulumi.Input<string>;
        /**
         * Provider name
         */
        provider?: pulumi.Input<string | enums.ProviderName>;
        /**
         * Permission provider display name
         */
        providerDisplayName?: pulumi.Input<string>;
        /**
         * Required permissions for the connector
         */
        requiredPermissions?: pulumi.Input<RequiredPermissionsArgs>;
        /**
         * Permission provider scope
         */
        scope?: pulumi.Input<string | enums.PermissionProviderScope>;
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
     * Describes an automation rule condition that evaluates an array property's value
     */
    export interface PropertyArrayConditionPropertiesArgs {
        conditionProperties?: pulumi.Input<AutomationRulePropertyArrayValuesConditionArgs>;
        /**
         *
         * Expected value is 'PropertyArray'.
         */
        conditionType: pulumi.Input<"PropertyArray">;
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
     * Required permissions for the connector
     */
    export interface RequiredPermissionsArgs {
        /**
         * action permission
         */
        action?: pulumi.Input<boolean>;
        /**
         * delete permission
         */
        delete?: pulumi.Input<boolean>;
        /**
         * read permission
         */
        read?: pulumi.Input<boolean>;
        /**
         * write permission
         */
        write?: pulumi.Input<boolean>;
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
     * A single sentinel entity mapping
     */
    export interface SentinelEntityMappingArgs {
        /**
         * the column name to be mapped to the SentinelEntities
         */
        columnName?: pulumi.Input<string>;
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
     * The available data types for Threat Intelligence TAXII data connector.
     */
    export interface TiTaxiiDataConnectorDataTypesArgs {
        /**
         * Data type for TAXII connector.
         */
        taxiiClient: pulumi.Input<TiTaxiiDataConnectorDataTypesTaxiiClientArgs>;
    }

    /**
     * Data type for TAXII connector.
     */
    export interface TiTaxiiDataConnectorDataTypesTaxiiClientArgs {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state: pulumi.Input<string | enums.DataTypeState>;
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
