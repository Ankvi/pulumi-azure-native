import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Definition of custom data column.
     */
    export interface ColumnDefinitionArgs {
        /**
         * The name of the column.
         */
        name?: pulumi.Input<string>;
        /**
         * The type of the column data.
         */
        type?: pulumi.Input<string | enums.KnownColumnDefinitionType>;
    }

    /**
     * Network access control rules for the endpoints.
     */
    export interface DataCollectionEndpointNetworkAclsArgs {
        /**
         * The configuration to set whether network access from public internet to the endpoints are allowed.
         */
        publicNetworkAccess?: pulumi.Input<string | enums.KnownPublicNetworkAccessOptions>;
    }

    /**
     * Managed service identity of the resource.
     */
    export interface DataCollectionEndpointResourceIdentityArgs {
        /**
         * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
         */
        type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
        /**
         * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The specification of data sources. 
     * This property is optional and can be omitted if the rule is meant to be used via direct calls to the provisioned endpoint.
     */
    export interface DataCollectionRuleDataSourcesArgs {
        /**
         * Specifications of pull based data sources
         */
        dataImports?: pulumi.Input<DataSourcesSpecDataImportsArgs>;
        /**
         * The list of Azure VM extension data source configurations.
         */
        extensions?: pulumi.Input<pulumi.Input<ExtensionDataSourceArgs>[]>;
        /**
         * The list of IIS logs source configurations.
         */
        iisLogs?: pulumi.Input<pulumi.Input<IisLogsDataSourceArgs>[]>;
        /**
         * The list of Log files source configurations.
         */
        logFiles?: pulumi.Input<pulumi.Input<LogFilesDataSourceArgs>[]>;
        /**
         * The list of performance counter data source configurations.
         */
        performanceCounters?: pulumi.Input<pulumi.Input<PerfCounterDataSourceArgs>[]>;
        /**
         * The list of platform telemetry configurations
         */
        platformTelemetry?: pulumi.Input<pulumi.Input<PlatformTelemetryDataSourceArgs>[]>;
        /**
         * The list of Prometheus forwarder data source configurations.
         */
        prometheusForwarder?: pulumi.Input<pulumi.Input<PrometheusForwarderDataSourceArgs>[]>;
        /**
         * The list of Syslog data source configurations.
         */
        syslog?: pulumi.Input<pulumi.Input<SyslogDataSourceArgs>[]>;
        /**
         * The list of Windows Event Log data source configurations.
         */
        windowsEventLogs?: pulumi.Input<pulumi.Input<WindowsEventLogDataSourceArgs>[]>;
        /**
         * The list of Windows Firewall logs source configurations.
         */
        windowsFirewallLogs?: pulumi.Input<pulumi.Input<WindowsFirewallLogsDataSourceArgs>[]>;
    }

    /**
     * The specification of destinations.
     */
    export interface DataCollectionRuleDestinationsArgs {
        /**
         * Azure Monitor Metrics destination.
         */
        azureMonitorMetrics?: pulumi.Input<DestinationsSpecAzureMonitorMetricsArgs>;
        /**
         * List of Event Hubs destinations.
         */
        eventHubs?: pulumi.Input<pulumi.Input<EventHubDestinationArgs>[]>;
        /**
         * List of Event Hubs Direct destinations.
         */
        eventHubsDirect?: pulumi.Input<pulumi.Input<EventHubDirectDestinationArgs>[]>;
        /**
         * List of Log Analytics destinations.
         */
        logAnalytics?: pulumi.Input<pulumi.Input<LogAnalyticsDestinationArgs>[]>;
        /**
         * List of monitoring account destinations.
         */
        monitoringAccounts?: pulumi.Input<pulumi.Input<MonitoringAccountDestinationArgs>[]>;
        /**
         * List of storage accounts destinations.
         */
        storageAccounts?: pulumi.Input<pulumi.Input<StorageBlobDestinationArgs>[]>;
        /**
         * List of Storage Blob Direct destinations. To be used only for sending data directly to store from the agent.
         */
        storageBlobsDirect?: pulumi.Input<pulumi.Input<StorageBlobDestinationArgs>[]>;
        /**
         * List of Storage Table Direct destinations.
         */
        storageTablesDirect?: pulumi.Input<pulumi.Input<StorageTableDestinationArgs>[]>;
    }

    /**
     * Managed service identity of the resource.
     */
    export interface DataCollectionRuleResourceIdentityArgs {
        /**
         * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
         */
        type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
        /**
         * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Definition of which streams are sent to which destinations.
     */
    export interface DataFlowArgs {
        /**
         * The builtIn transform to transform stream data
         */
        builtInTransform?: pulumi.Input<string>;
        /**
         * List of destinations for this data flow.
         */
        destinations?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The output stream of the transform. Only required if the transform changes data to a different stream.
         */
        outputStream?: pulumi.Input<string>;
        /**
         * List of streams for this data flow.
         */
        streams?: pulumi.Input<pulumi.Input<string | enums.KnownDataFlowStreams>[]>;
        /**
         * The KQL query to transform stream data.
         */
        transformKql?: pulumi.Input<string>;
    }

    /**
     * Definition of Event Hub configuration.
     */
    export interface DataImportSourcesEventHubArgs {
        /**
         * Event Hub consumer group name
         */
        consumerGroup?: pulumi.Input<string>;
        /**
         * A friendly name for the data source. 
         * This name should be unique across all data sources (regardless of type) within the data collection rule.
         */
        name?: pulumi.Input<string>;
        /**
         * The stream to collect from EventHub
         */
        stream?: pulumi.Input<string>;
    }

    /**
     * Specifications of pull based data sources
     */
    export interface DataSourcesSpecDataImportsArgs {
        /**
         * Definition of Event Hub configuration.
         */
        eventHub?: pulumi.Input<DataImportSourcesEventHubArgs>;
    }

    /**
     * Azure Monitor Metrics destination.
     */
    export interface DestinationsSpecAzureMonitorMetricsArgs {
        /**
         * A friendly name for the destination. 
         * This name should be unique across all destinations (regardless of type) within the data collection rule.
         */
        name?: pulumi.Input<string>;
    }

    export interface EventHubDestinationArgs {
        /**
         * The resource ID of the event hub.
         */
        eventHubResourceId?: pulumi.Input<string>;
        /**
         * A friendly name for the destination. 
         * This name should be unique across all destinations (regardless of type) within the data collection rule.
         */
        name?: pulumi.Input<string>;
    }

    export interface EventHubDirectDestinationArgs {
        /**
         * The resource ID of the event hub.
         */
        eventHubResourceId?: pulumi.Input<string>;
        /**
         * A friendly name for the destination. 
         * This name should be unique across all destinations (regardless of type) within the data collection rule.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Definition of which data will be collected from a separate VM extension that integrates with the Azure Monitor Agent.
     * Collected from either Windows and Linux machines, depending on which extension is defined.
     */
    export interface ExtensionDataSourceArgs {
        /**
         * The name of the VM extension.
         */
        extensionName: pulumi.Input<string>;
        /**
         * The extension settings. The format is specific for particular extension.
         */
        extensionSettings?: any;
        /**
         * The list of data sources this extension needs data from.
         */
        inputDataSources?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * A friendly name for the data source. 
         * This name should be unique across all data sources (regardless of type) within the data collection rule.
         */
        name?: pulumi.Input<string>;
        /**
         * List of streams that this data source will be sent to.
         * A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to.
         */
        streams?: pulumi.Input<pulumi.Input<string | enums.KnownExtensionDataSourceStreams>[]>;
    }

    /**
     * Enables IIS logs to be collected by this data collection rule.
     */
    export interface IisLogsDataSourceArgs {
        /**
         * Absolute paths file location
         */
        logDirectories?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * A friendly name for the data source. 
         * This name should be unique across all data sources (regardless of type) within the data collection rule.
         */
        name?: pulumi.Input<string>;
        /**
         * IIS streams
         */
        streams: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Log Analytics destination.
     */
    export interface LogAnalyticsDestinationArgs {
        /**
         * A friendly name for the destination. 
         * This name should be unique across all destinations (regardless of type) within the data collection rule.
         */
        name?: pulumi.Input<string>;
        /**
         * The resource ID of the Log Analytics workspace.
         */
        workspaceResourceId?: pulumi.Input<string>;
    }

    /**
     * Text settings
     */
    export interface LogFileSettingsTextArgs {
        /**
         * One of the supported timestamp formats
         */
        recordStartTimestampFormat: pulumi.Input<string | enums.KnownLogFileTextSettingsRecordStartTimestampFormat>;
    }

    /**
     * Definition of which custom log files will be collected by this data collection rule
     */
    export interface LogFilesDataSourceArgs {
        /**
         * File Patterns where the log files are located
         */
        filePatterns: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The data format of the log files
         */
        format: pulumi.Input<string | enums.KnownLogFilesDataSourceFormat>;
        /**
         * A friendly name for the data source. 
         * This name should be unique across all data sources (regardless of type) within the data collection rule.
         */
        name?: pulumi.Input<string>;
        /**
         * The log files specific settings.
         */
        settings?: pulumi.Input<LogFilesDataSourceSettingsArgs>;
        /**
         * List of streams that this data source will be sent to.
         * A stream indicates what schema will be used for this data source
         */
        streams: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The log files specific settings.
     */
    export interface LogFilesDataSourceSettingsArgs {
        /**
         * Text settings
         */
        text?: pulumi.Input<LogFileSettingsTextArgs>;
    }

    /**
     * Monitoring account destination.
     */
    export interface MonitoringAccountDestinationArgs {
        /**
         * The resource ID of the monitoring account.
         */
        accountResourceId?: pulumi.Input<string>;
        /**
         * A friendly name for the destination. 
         * This name should be unique across all destinations (regardless of type) within the data collection rule.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Definition of which performance counters will be collected and how they will be collected by this data collection rule.
     * Collected from both Windows and Linux machines where the counter is present.
     */
    export interface PerfCounterDataSourceArgs {
        /**
         * A list of specifier names of the performance counters you want to collect.
         * Use a wildcard (*) to collect a counter for all instances.
         * To get a list of performance counters on Windows, run the command 'typeperf'.
         */
        counterSpecifiers?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * A friendly name for the data source. 
         * This name should be unique across all data sources (regardless of type) within the data collection rule.
         */
        name?: pulumi.Input<string>;
        /**
         * The number of seconds between consecutive counter measurements (samples).
         */
        samplingFrequencyInSeconds?: pulumi.Input<number>;
        /**
         * List of streams that this data source will be sent to.
         * A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to.
         */
        streams?: pulumi.Input<pulumi.Input<string | enums.KnownPerfCounterDataSourceStreams>[]>;
    }

    /**
     * Definition of platform telemetry data source configuration
     */
    export interface PlatformTelemetryDataSourceArgs {
        /**
         * A friendly name for the data source. 
         * This name should be unique across all data sources (regardless of type) within the data collection rule.
         */
        name?: pulumi.Input<string>;
        /**
         * List of platform telemetry streams to collect
         */
        streams: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Definition of Prometheus metrics forwarding configuration.
     */
    export interface PrometheusForwarderDataSourceArgs {
        /**
         * The list of label inclusion filters in the form of label "name-value" pairs.
         * Currently only one label is supported: 'microsoft_metrics_include_label'.
         * Label values are matched case-insensitively.
         */
        labelIncludeFilter?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * A friendly name for the data source. 
         * This name should be unique across all data sources (regardless of type) within the data collection rule.
         */
        name?: pulumi.Input<string>;
        /**
         * List of streams that this data source will be sent to.
         */
        streams?: pulumi.Input<pulumi.Input<string | enums.KnownPrometheusForwarderDataSourceStreams>[]>;
    }

    export interface StorageBlobDestinationArgs {
        /**
         * The container name of the Storage Blob.
         */
        containerName?: pulumi.Input<string>;
        /**
         * A friendly name for the destination. 
         * This name should be unique across all destinations (regardless of type) within the data collection rule.
         */
        name?: pulumi.Input<string>;
        /**
         * The resource ID of the storage account.
         */
        storageAccountResourceId?: pulumi.Input<string>;
    }

    export interface StorageTableDestinationArgs {
        /**
         * A friendly name for the destination. 
         * This name should be unique across all destinations (regardless of type) within the data collection rule.
         */
        name?: pulumi.Input<string>;
        /**
         * The resource ID of the storage account.
         */
        storageAccountResourceId?: pulumi.Input<string>;
        /**
         * The name of the Storage Table.
         */
        tableName?: pulumi.Input<string>;
    }

    /**
     * Declaration of a custom stream.
     */
    export interface StreamDeclarationArgs {
        /**
         * List of columns used by data in this stream.
         */
        columns?: pulumi.Input<pulumi.Input<ColumnDefinitionArgs>[]>;
    }

    /**
     * Definition of which syslog data will be collected and how it will be collected.
     * Only collected from Linux machines.
     */
    export interface SyslogDataSourceArgs {
        /**
         * The list of facility names.
         */
        facilityNames?: pulumi.Input<pulumi.Input<string | enums.KnownSyslogDataSourceFacilityNames>[]>;
        /**
         * The log levels to collect.
         */
        logLevels?: pulumi.Input<pulumi.Input<string | enums.KnownSyslogDataSourceLogLevels>[]>;
        /**
         * A friendly name for the data source. 
         * This name should be unique across all data sources (regardless of type) within the data collection rule.
         */
        name?: pulumi.Input<string>;
        /**
         * List of streams that this data source will be sent to.
         * A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to.
         */
        streams?: pulumi.Input<pulumi.Input<string | enums.KnownSyslogDataSourceStreams>[]>;
    }

    /**
     * Definition of which Windows Event Log events will be collected and how they will be collected.
     * Only collected from Windows machines.
     */
    export interface WindowsEventLogDataSourceArgs {
        /**
         * A friendly name for the data source. 
         * This name should be unique across all data sources (regardless of type) within the data collection rule.
         */
        name?: pulumi.Input<string>;
        /**
         * List of streams that this data source will be sent to.
         * A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to.
         */
        streams?: pulumi.Input<pulumi.Input<string | enums.KnownWindowsEventLogDataSourceStreams>[]>;
        /**
         * A list of Windows Event Log queries in XPATH format.
         */
        xPathQueries?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Enables Firewall logs to be collected by this data collection rule.
     */
    export interface WindowsFirewallLogsDataSourceArgs {
        /**
         * A friendly name for the data source. 
         * This name should be unique across all data sources (regardless of type) within the data collection rule.
         */
        name?: pulumi.Input<string>;
        /**
         * Firewall logs streams
         */
        streams: pulumi.Input<pulumi.Input<string>[]>;
    }
