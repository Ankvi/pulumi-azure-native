import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Definition of custom data column.
     */
    export interface ColumnDefinitionResponse {
        /**
         * The name of the column.
         */
        name?: string;
        /**
         * The type of the column data.
         */
        type?: string;
    }

    /**
     * Managed service identity of the resource.
     */
    export interface DataCollectionEndpointResourceResponseIdentity {
        /**
         * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        principalId: string;
        /**
         * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        tenantId: string;
        /**
         * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
         */
        type: string;
        /**
         * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
    }

    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    export interface DataCollectionEndpointResourceResponseSystemData {
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
     * The endpoint used by clients to access their configuration.
     */
    export interface DataCollectionEndpointResponseConfigurationAccess {
        /**
         * The endpoint. This property is READ-ONLY.
         */
        endpoint: string;
    }

    /**
     * Failover configuration on this endpoint. This property is READ-ONLY.
     */
    export interface DataCollectionEndpointResponseFailoverConfiguration {
        /**
         * Active location where data flow will occur.
         */
        activeLocation?: string;
        /**
         * Locations that are configured for failover.
         */
        locations?: LocationSpecResponse[];
    }

    /**
     * The endpoint used by clients to ingest logs.
     */
    export interface DataCollectionEndpointResponseLogsIngestion {
        /**
         * The endpoint. This property is READ-ONLY.
         */
        endpoint: string;
    }

    /**
     * Metadata for the resource. This property is READ-ONLY.
     */
    export interface DataCollectionEndpointResponseMetadata {
        /**
         * Azure offering managing this resource on-behalf-of customer.
         */
        provisionedBy: string;
        /**
         * Resource Id of azure offering managing this resource on-behalf-of customer.
         */
        provisionedByResourceId: string;
    }

    /**
     * The endpoint used by clients to ingest metrics.
     */
    export interface DataCollectionEndpointResponseMetricsIngestion {
        /**
         * The endpoint. This property is READ-ONLY.
         */
        endpoint: string;
    }

    /**
     * Network access control rules for the endpoints.
     */
    export interface DataCollectionEndpointResponseNetworkAcls {
        /**
         * The configuration to set whether network access from public internet to the endpoints are allowed.
         */
        publicNetworkAccess?: string;
    }

    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    export interface DataCollectionRuleAssociationProxyOnlyResourceResponseSystemData {
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
     * Metadata about the resource
     */
    export interface DataCollectionRuleAssociationResponseMetadata {
        /**
         * Azure offering managing this resource on-behalf-of customer.
         */
        provisionedBy: string;
        /**
         * Resource Id of azure offering managing this resource on-behalf-of customer.
         */
        provisionedByResourceId: string;
    }

    /**
     * Managed service identity of the resource.
     */
    export interface DataCollectionRuleResourceResponseIdentity {
        /**
         * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        principalId: string;
        /**
         * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        tenantId: string;
        /**
         * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
         */
        type: string;
        /**
         * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
    }

    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    export interface DataCollectionRuleResourceResponseSystemData {
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
     * The specification of data sources. 
     * This property is optional and can be omitted if the rule is meant to be used via direct calls to the provisioned endpoint.
     */
    export interface DataCollectionRuleResponseDataSources {
        /**
         * Specifications of pull based data sources
         */
        dataImports?: DataSourcesSpecResponseDataImports;
        /**
         * The list of Azure VM extension data source configurations.
         */
        extensions?: ExtensionDataSourceResponse[];
        /**
         * The list of IIS logs source configurations.
         */
        iisLogs?: IisLogsDataSourceResponse[];
        /**
         * The list of Log files source configurations.
         */
        logFiles?: LogFilesDataSourceResponse[];
        /**
         * The list of performance counter data source configurations.
         */
        performanceCounters?: PerfCounterDataSourceResponse[];
        /**
         * The list of platform telemetry configurations
         */
        platformTelemetry?: PlatformTelemetryDataSourceResponse[];
        /**
         * The list of Prometheus forwarder data source configurations.
         */
        prometheusForwarder?: PrometheusForwarderDataSourceResponse[];
        /**
         * The list of Syslog data source configurations.
         */
        syslog?: SyslogDataSourceResponse[];
        /**
         * The list of Windows Event Log data source configurations.
         */
        windowsEventLogs?: WindowsEventLogDataSourceResponse[];
        /**
         * The list of Windows Firewall logs source configurations.
         */
        windowsFirewallLogs?: WindowsFirewallLogsDataSourceResponse[];
    }

    /**
     * The specification of destinations.
     */
    export interface DataCollectionRuleResponseDestinations {
        /**
         * Azure Monitor Metrics destination.
         */
        azureMonitorMetrics?: DestinationsSpecResponseAzureMonitorMetrics;
        /**
         * List of Event Hubs destinations.
         */
        eventHubs?: EventHubDestinationResponse[];
        /**
         * List of Event Hubs Direct destinations.
         */
        eventHubsDirect?: EventHubDirectDestinationResponse[];
        /**
         * List of Log Analytics destinations.
         */
        logAnalytics?: LogAnalyticsDestinationResponse[];
        /**
         * List of monitoring account destinations.
         */
        monitoringAccounts?: MonitoringAccountDestinationResponse[];
        /**
         * List of storage accounts destinations.
         */
        storageAccounts?: StorageBlobDestinationResponse[];
        /**
         * List of Storage Blob Direct destinations. To be used only for sending data directly to store from the agent.
         */
        storageBlobsDirect?: StorageBlobDestinationResponse[];
        /**
         * List of Storage Table Direct destinations.
         */
        storageTablesDirect?: StorageTableDestinationResponse[];
    }

    /**
     * Metadata about the resource
     */
    export interface DataCollectionRuleResponseMetadata {
        /**
         * Azure offering managing this resource on-behalf-of customer.
         */
        provisionedBy: string;
        /**
         * Resource Id of azure offering managing this resource on-behalf-of customer.
         */
        provisionedByResourceId: string;
    }

    /**
     * Definition of which streams are sent to which destinations.
     */
    export interface DataFlowResponse {
        /**
         * The builtIn transform to transform stream data
         */
        builtInTransform?: string;
        /**
         * List of destinations for this data flow.
         */
        destinations?: string[];
        /**
         * The output stream of the transform. Only required if the transform changes data to a different stream.
         */
        outputStream?: string;
        /**
         * List of streams for this data flow.
         */
        streams?: string[];
        /**
         * The KQL query to transform stream data.
         */
        transformKql?: string;
    }

    /**
     * Definition of Event Hub configuration.
     */
    export interface DataImportSourcesResponseEventHub {
        /**
         * Event Hub consumer group name
         */
        consumerGroup?: string;
        /**
         * A friendly name for the data source. 
         * This name should be unique across all data sources (regardless of type) within the data collection rule.
         */
        name?: string;
        /**
         * The stream to collect from EventHub
         */
        stream?: string;
    }

    /**
     * Specifications of pull based data sources
     */
    export interface DataSourcesSpecResponseDataImports {
        /**
         * Definition of Event Hub configuration.
         */
        eventHub?: DataImportSourcesResponseEventHub;
    }

    /**
     * Azure Monitor Metrics destination.
     */
    export interface DestinationsSpecResponseAzureMonitorMetrics {
        /**
         * A friendly name for the destination. 
         * This name should be unique across all destinations (regardless of type) within the data collection rule.
         */
        name?: string;
    }

    export interface EventHubDestinationResponse {
        /**
         * The resource ID of the event hub.
         */
        eventHubResourceId?: string;
        /**
         * A friendly name for the destination. 
         * This name should be unique across all destinations (regardless of type) within the data collection rule.
         */
        name?: string;
    }

    export interface EventHubDirectDestinationResponse {
        /**
         * The resource ID of the event hub.
         */
        eventHubResourceId?: string;
        /**
         * A friendly name for the destination. 
         * This name should be unique across all destinations (regardless of type) within the data collection rule.
         */
        name?: string;
    }

    /**
     * Definition of which data will be collected from a separate VM extension that integrates with the Azure Monitor Agent.
     * Collected from either Windows and Linux machines, depending on which extension is defined.
     */
    export interface ExtensionDataSourceResponse {
        /**
         * The name of the VM extension.
         */
        extensionName: string;
        /**
         * The extension settings. The format is specific for particular extension.
         */
        extensionSettings?: any;
        /**
         * The list of data sources this extension needs data from.
         */
        inputDataSources?: string[];
        /**
         * A friendly name for the data source. 
         * This name should be unique across all data sources (regardless of type) within the data collection rule.
         */
        name?: string;
        /**
         * List of streams that this data source will be sent to.
         * A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to.
         */
        streams?: string[];
    }

    /**
     * Enables IIS logs to be collected by this data collection rule.
     */
    export interface IisLogsDataSourceResponse {
        /**
         * Absolute paths file location
         */
        logDirectories?: string[];
        /**
         * A friendly name for the data source. 
         * This name should be unique across all data sources (regardless of type) within the data collection rule.
         */
        name?: string;
        /**
         * IIS streams
         */
        streams: string[];
    }

    export interface LocationSpecResponse {
        /**
         * Name of location.
         */
        location?: string;
        /**
         * The resource provisioning state in this location.
         */
        provisioningStatus?: string;
    }

    /**
     * Log Analytics destination.
     */
    export interface LogAnalyticsDestinationResponse {
        /**
         * A friendly name for the destination. 
         * This name should be unique across all destinations (regardless of type) within the data collection rule.
         */
        name?: string;
        /**
         * The Customer ID of the Log Analytics workspace.
         */
        workspaceId: string;
        /**
         * The resource ID of the Log Analytics workspace.
         */
        workspaceResourceId?: string;
    }

    /**
     * Text settings
     */
    export interface LogFileSettingsResponseText {
        /**
         * One of the supported timestamp formats
         */
        recordStartTimestampFormat: string;
    }

    /**
     * Definition of which custom log files will be collected by this data collection rule
     */
    export interface LogFilesDataSourceResponse {
        /**
         * File Patterns where the log files are located
         */
        filePatterns: string[];
        /**
         * The data format of the log files
         */
        format: string;
        /**
         * A friendly name for the data source. 
         * This name should be unique across all data sources (regardless of type) within the data collection rule.
         */
        name?: string;
        /**
         * The log files specific settings.
         */
        settings?: LogFilesDataSourceResponseSettings;
        /**
         * List of streams that this data source will be sent to.
         * A stream indicates what schema will be used for this data source
         */
        streams: string[];
    }

    /**
     * The log files specific settings.
     */
    export interface LogFilesDataSourceResponseSettings {
        /**
         * Text settings
         */
        text?: LogFileSettingsResponseText;
    }

    /**
     * Monitoring account destination.
     */
    export interface MonitoringAccountDestinationResponse {
        /**
         * The immutable ID  of the account.
         */
        accountId: string;
        /**
         * The resource ID of the monitoring account.
         */
        accountResourceId?: string;
        /**
         * A friendly name for the destination. 
         * This name should be unique across all destinations (regardless of type) within the data collection rule.
         */
        name?: string;
    }

    /**
     * Definition of which performance counters will be collected and how they will be collected by this data collection rule.
     * Collected from both Windows and Linux machines where the counter is present.
     */
    export interface PerfCounterDataSourceResponse {
        /**
         * A list of specifier names of the performance counters you want to collect.
         * Use a wildcard (*) to collect a counter for all instances.
         * To get a list of performance counters on Windows, run the command 'typeperf'.
         */
        counterSpecifiers?: string[];
        /**
         * A friendly name for the data source. 
         * This name should be unique across all data sources (regardless of type) within the data collection rule.
         */
        name?: string;
        /**
         * The number of seconds between consecutive counter measurements (samples).
         */
        samplingFrequencyInSeconds?: number;
        /**
         * List of streams that this data source will be sent to.
         * A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to.
         */
        streams?: string[];
    }

    /**
     * Definition of platform telemetry data source configuration
     */
    export interface PlatformTelemetryDataSourceResponse {
        /**
         * A friendly name for the data source. 
         * This name should be unique across all data sources (regardless of type) within the data collection rule.
         */
        name?: string;
        /**
         * List of platform telemetry streams to collect
         */
        streams: string[];
    }

    export interface PrivateLinkScopedResourceResponse {
        /**
         * The resourceId of the Azure Monitor Private Link Scope Scoped Resource through which this DCE is associated with a Azure Monitor Private Link Scope.
         */
        resourceId?: string;
        /**
         * The immutableId of the Azure Monitor Private Link Scope Resource to which the association is.
         */
        scopeId?: string;
    }

    /**
     * Definition of Prometheus metrics forwarding configuration.
     */
    export interface PrometheusForwarderDataSourceResponse {
        /**
         * The list of label inclusion filters in the form of label "name-value" pairs.
         * Currently only one label is supported: 'microsoft_metrics_include_label'.
         * Label values are matched case-insensitively.
         */
        labelIncludeFilter?: {[key: string]: string};
        /**
         * A friendly name for the data source. 
         * This name should be unique across all data sources (regardless of type) within the data collection rule.
         */
        name?: string;
        /**
         * List of streams that this data source will be sent to.
         */
        streams?: string[];
    }

    export interface StorageBlobDestinationResponse {
        /**
         * The container name of the Storage Blob.
         */
        containerName?: string;
        /**
         * A friendly name for the destination. 
         * This name should be unique across all destinations (regardless of type) within the data collection rule.
         */
        name?: string;
        /**
         * The resource ID of the storage account.
         */
        storageAccountResourceId?: string;
    }

    export interface StorageTableDestinationResponse {
        /**
         * A friendly name for the destination. 
         * This name should be unique across all destinations (regardless of type) within the data collection rule.
         */
        name?: string;
        /**
         * The resource ID of the storage account.
         */
        storageAccountResourceId?: string;
        /**
         * The name of the Storage Table.
         */
        tableName?: string;
    }

    /**
     * Declaration of a custom stream.
     */
    export interface StreamDeclarationResponse {
        /**
         * List of columns used by data in this stream.
         */
        columns?: ColumnDefinitionResponse[];
    }

    /**
     * Definition of which syslog data will be collected and how it will be collected.
     * Only collected from Linux machines.
     */
    export interface SyslogDataSourceResponse {
        /**
         * The list of facility names.
         */
        facilityNames?: string[];
        /**
         * The log levels to collect.
         */
        logLevels?: string[];
        /**
         * A friendly name for the data source. 
         * This name should be unique across all data sources (regardless of type) within the data collection rule.
         */
        name?: string;
        /**
         * List of streams that this data source will be sent to.
         * A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to.
         */
        streams?: string[];
    }

    /**
     * User assigned identity properties
     */
    export interface UserAssignedIdentityResponse {
        /**
         * The client ID of the assigned identity.
         */
        clientId: string;
        /**
         * The principal ID of the assigned identity.
         */
        principalId: string;
    }

    /**
     * Definition of which Windows Event Log events will be collected and how they will be collected.
     * Only collected from Windows machines.
     */
    export interface WindowsEventLogDataSourceResponse {
        /**
         * A friendly name for the data source. 
         * This name should be unique across all data sources (regardless of type) within the data collection rule.
         */
        name?: string;
        /**
         * List of streams that this data source will be sent to.
         * A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to.
         */
        streams?: string[];
        /**
         * A list of Windows Event Log queries in XPATH format.
         */
        xPathQueries?: string[];
    }

    /**
     * Enables Firewall logs to be collected by this data collection rule.
     */
    export interface WindowsFirewallLogsDataSourceResponse {
        /**
         * A friendly name for the data source. 
         * This name should be unique across all data sources (regardless of type) within the data collection rule.
         */
        name?: string;
        /**
         * Firewall logs streams
         */
        streams: string[];
    }
