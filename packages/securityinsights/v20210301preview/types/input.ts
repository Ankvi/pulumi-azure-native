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
         * the column name to take the alert severity from
         */
        alertSeverityColumnName?: pulumi.Input<string>;
        /**
         * the column name to take the alert tactics from
         */
        alertTacticsColumnName?: pulumi.Input<string>;
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
         * The user principal name of the user the incident is assigned to.
         */
        userPrincipalName?: pulumi.Input<string>;
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
        bingSafetyPhishingURL: pulumi.Input<MSTIDataConnectorDataTypesBingSafetyPhishingURLArgs>;
        /**
         * Data type for Microsoft Threat Intelligence Platforms data connector.
         */
        microsoftEmergingThreatFeed: pulumi.Input<MSTIDataConnectorDataTypesMicrosoftEmergingThreatFeedArgs>;
    }

    /**
     * Data type for Microsoft Threat Intelligence Platforms data connector.
     */
    export interface MSTIDataConnectorDataTypesBingSafetyPhishingURLArgs {
        /**
         * lookback period
         */
        lookbackPeriod: pulumi.Input<string>;
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state: pulumi.Input<string | enums.DataTypeState>;
    }

    /**
     * Data type for Microsoft Threat Intelligence Platforms data connector.
     */
    export interface MSTIDataConnectorDataTypesMicrosoftEmergingThreatFeedArgs {
        /**
         * lookback period
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
         * Data type for Microsoft Threat Protection Platforms data connector.
         */
        incidents: pulumi.Input<MTPDataConnectorDataTypesIncidentsArgs>;
    }

    /**
     * Data type for Microsoft Threat Protection Platforms data connector.
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
    export interface WatchlistUserInfoArgs {
        /**
         * The object id of the user.
         */
        objectId?: pulumi.Input<string>;
    }
