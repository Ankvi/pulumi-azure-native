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
     * Alerts data type for data connectors.
     */
    export interface AlertsDataTypeOfDataConnectorResponse {
        /**
         * Alerts data type connection.
         */
        alerts: DataConnectorDataTypeCommonResponse;
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
        ownerType: string;
        /**
         * The user principal name of the user the incident is assigned to.
         */
        userPrincipalName?: string;
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
        bingSafetyPhishingURL: MSTIDataConnectorDataTypesResponseBingSafetyPhishingURL;
        /**
         * Data type for Microsoft Threat Intelligence Platforms data connector.
         */
        microsoftEmergingThreatFeed: MSTIDataConnectorDataTypesResponseMicrosoftEmergingThreatFeed;
    }

    /**
     * Data type for Microsoft Threat Intelligence Platforms data connector.
     */
    export interface MSTIDataConnectorDataTypesResponseBingSafetyPhishingURL {
        /**
         * lookback period
         */
        lookbackPeriod: string;
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state: string;
    }

    /**
     * Data type for Microsoft Threat Intelligence Platforms data connector.
     */
    export interface MSTIDataConnectorDataTypesResponseMicrosoftEmergingThreatFeed {
        /**
         * lookback period
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
         * Data type for Microsoft Threat Protection Platforms data connector.
         */
        incidents: MTPDataConnectorDataTypesResponseIncidents;
    }

    /**
     * Data type for Microsoft Threat Protection Platforms data connector.
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
