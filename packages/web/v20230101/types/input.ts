import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Information about the formal API definition for the app.
     */
    export interface ApiDefinitionInfoArgs {
        /**
         * The URL of the API definition.
         */
        url?: pulumi.Input<string>;
    }

    /**
     * Azure API management (APIM) configuration linked to the app.
     */
    export interface ApiManagementConfigArgs {
        /**
         * APIM-Api Identifier.
         */
        id?: pulumi.Input<string>;
    }

    export interface AppLogsConfigurationArgs {
        destination?: pulumi.Input<string>;
        logAnalyticsConfiguration?: pulumi.Input<LogAnalyticsConfigurationArgs>;
    }

    /**
     * Application logs configuration.
     */
    export interface ApplicationLogsConfigArgs {
        /**
         * Application logs to blob storage configuration.
         */
        azureBlobStorage?: pulumi.Input<AzureBlobStorageApplicationLogsConfigArgs>;
        /**
         * Application logs to azure table storage configuration.
         */
        azureTableStorage?: pulumi.Input<AzureTableStorageApplicationLogsConfigArgs>;
        /**
         * Application logs to file system configuration.
         */
        fileSystem?: pulumi.Input<FileSystemApplicationLogsConfigArgs>;
    }
    /**
     * applicationLogsConfigArgsProvideDefaults sets the appropriate defaults for ApplicationLogsConfigArgs
     */
    export function applicationLogsConfigArgsProvideDefaults(val: ApplicationLogsConfigArgs): ApplicationLogsConfigArgs {
        return {
            ...val,
            fileSystem: (val.fileSystem ? pulumi.output(val.fileSystem).apply(fileSystemApplicationLogsConfigArgsProvideDefaults) : undefined),
        };
    }

    export interface ArcConfigurationArgs {
        artifactStorageAccessMode?: pulumi.Input<string>;
        artifactStorageClassName?: pulumi.Input<string>;
        artifactStorageMountPath?: pulumi.Input<string>;
        artifactStorageNodeName?: pulumi.Input<string>;
        artifactsStorageType?: pulumi.Input<enums.StorageType>;
        frontEndServiceConfiguration?: pulumi.Input<FrontEndConfigurationArgs>;
        kubeConfig?: pulumi.Input<string>;
    }

    /**
     * Full view of networking configuration for an ASE.
     */
    export interface AseV3NetworkingConfigurationArgs {
        /**
         * Property to enable and disable new private endpoint connection creation on ASE
         */
        allowNewPrivateEndpointConnections?: pulumi.Input<boolean>;
        /**
         * Property to enable and disable FTP on ASEV3
         */
        ftpEnabled?: pulumi.Input<boolean>;
        /**
         * Customer provided Inbound IP Address. Only able to be set on Ase create.
         */
        inboundIpAddressOverride?: pulumi.Input<string>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
        /**
         * Property to enable and disable Remote Debug on ASEV3
         */
        remoteDebugEnabled?: pulumi.Input<boolean>;
    }

    /**
     * Actions which to take by the auto-heal module when a rule is triggered.
     */
    export interface AutoHealActionsArgs {
        /**
         * Predefined action to be taken.
         */
        actionType?: pulumi.Input<enums.AutoHealActionType>;
        /**
         * Custom action to be taken.
         */
        customAction?: pulumi.Input<AutoHealCustomActionArgs>;
        /**
         * Minimum time the process must execute
         * before taking the action
         */
        minProcessExecutionTime?: pulumi.Input<string>;
    }

    /**
     * Custom action to be executed
     * when an auto heal rule is triggered.
     */
    export interface AutoHealCustomActionArgs {
        /**
         * Executable to be run.
         */
        exe?: pulumi.Input<string>;
        /**
         * Parameters for the executable.
         */
        parameters?: pulumi.Input<string>;
    }

    /**
     * Rules that can be defined for auto-heal.
     */
    export interface AutoHealRulesArgs {
        /**
         * Actions to be executed when a rule is triggered.
         */
        actions?: pulumi.Input<AutoHealActionsArgs>;
        /**
         * Conditions that describe when to execute the auto-heal actions.
         */
        triggers?: pulumi.Input<AutoHealTriggersArgs>;
    }

    /**
     * Triggers for auto-heal.
     */
    export interface AutoHealTriggersArgs {
        /**
         * A rule based on private bytes.
         */
        privateBytesInKB?: pulumi.Input<number>;
        /**
         * A rule based on total requests.
         */
        requests?: pulumi.Input<RequestsBasedTriggerArgs>;
        /**
         * A rule based on request execution time.
         */
        slowRequests?: pulumi.Input<SlowRequestsBasedTriggerArgs>;
        /**
         * A rule based on multiple Slow Requests Rule with path
         */
        slowRequestsWithPath?: pulumi.Input<pulumi.Input<SlowRequestsBasedTriggerArgs>[]>;
        /**
         * A rule based on status codes.
         */
        statusCodes?: pulumi.Input<pulumi.Input<StatusCodesBasedTriggerArgs>[]>;
        /**
         * A rule based on status codes ranges.
         */
        statusCodesRange?: pulumi.Input<pulumi.Input<StatusCodesRangeBasedTriggerArgs>[]>;
    }

    /**
     * Application logs azure blob storage configuration.
     */
    export interface AzureBlobStorageApplicationLogsConfigArgs {
        /**
         * Log level.
         */
        level?: pulumi.Input<enums.LogLevel>;
        /**
         * Retention in days.
         * Remove blobs older than X days.
         * 0 or lower means no retention.
         */
        retentionInDays?: pulumi.Input<number>;
        /**
         * SAS url to a azure blob container with read/write/list/delete permissions.
         */
        sasUrl?: pulumi.Input<string>;
    }

    /**
     * Http logs to azure blob storage configuration.
     */
    export interface AzureBlobStorageHttpLogsConfigArgs {
        /**
         * True if configuration is enabled, false if it is disabled and null if configuration is not set.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * Retention in days.
         * Remove blobs older than X days.
         * 0 or lower means no retention.
         */
        retentionInDays?: pulumi.Input<number>;
        /**
         * SAS url to a azure blob container with read/write/list/delete permissions.
         */
        sasUrl?: pulumi.Input<string>;
    }

    /**
     * Azure Files or Blob Storage access information value for dictionary storage.
     */
    export interface AzureStorageInfoValueArgs {
        /**
         * Access key for the storage account.
         */
        accessKey?: pulumi.Input<string>;
        /**
         * Name of the storage account.
         */
        accountName?: pulumi.Input<string>;
        /**
         * Path to mount the storage within the site's runtime environment.
         */
        mountPath?: pulumi.Input<string>;
        /**
         * Name of the file share (container name, for Blob storage).
         */
        shareName?: pulumi.Input<string>;
        /**
         * Type of storage.
         */
        type?: pulumi.Input<enums.AzureStorageType>;
    }

    /**
     * Application logs to Azure table storage configuration.
     */
    export interface AzureTableStorageApplicationLogsConfigArgs {
        /**
         * Log level.
         */
        level?: pulumi.Input<enums.LogLevel>;
        /**
         * SAS URL to an Azure table with add/query/delete permissions.
         */
        sasUrl: pulumi.Input<string>;
    }

    /**
     * Description of a backup schedule. Describes how often should be the backup performed and what should be the retention policy.
     */
    export interface BackupSchedule {
        /**
         * How often the backup should be executed (e.g. for weekly backup, this should be set to 7 and FrequencyUnit should be set to Day)
         */
        frequencyInterval: number;
        /**
         * The unit of time for how often the backup should be executed (e.g. for weekly backup, this should be set to Day and FrequencyInterval should be set to 7)
         */
        frequencyUnit: enums.FrequencyUnit;
        /**
         * True if the retention policy should always keep at least one backup in the storage account, regardless how old it is; false otherwise.
         */
        keepAtLeastOneBackup: boolean;
        /**
         * After how many days backups should be deleted.
         */
        retentionPeriodInDays: number;
        /**
         * When the schedule should start working.
         */
        startTime?: string;
    }
    /**
     * backupScheduleProvideDefaults sets the appropriate defaults for BackupSchedule
     */
    export function backupScheduleProvideDefaults(val: BackupSchedule): BackupSchedule {
        return {
            ...val,
            frequencyInterval: (val.frequencyInterval) ?? 7,
            frequencyUnit: (val.frequencyUnit) ?? "Day",
            keepAtLeastOneBackup: (val.keepAtLeastOneBackup) ?? true,
            retentionPeriodInDays: (val.retentionPeriodInDays) ?? 30,
        };
    }

    /**
     * Description of a backup schedule. Describes how often should be the backup performed and what should be the retention policy.
     */
    export interface BackupScheduleArgs {
        /**
         * How often the backup should be executed (e.g. for weekly backup, this should be set to 7 and FrequencyUnit should be set to Day)
         */
        frequencyInterval: pulumi.Input<number>;
        /**
         * The unit of time for how often the backup should be executed (e.g. for weekly backup, this should be set to Day and FrequencyInterval should be set to 7)
         */
        frequencyUnit: pulumi.Input<enums.FrequencyUnit>;
        /**
         * True if the retention policy should always keep at least one backup in the storage account, regardless how old it is; false otherwise.
         */
        keepAtLeastOneBackup: pulumi.Input<boolean>;
        /**
         * After how many days backups should be deleted.
         */
        retentionPeriodInDays: pulumi.Input<number>;
        /**
         * When the schedule should start working.
         */
        startTime?: pulumi.Input<string>;
    }
    /**
     * backupScheduleArgsProvideDefaults sets the appropriate defaults for BackupScheduleArgs
     */
    export function backupScheduleArgsProvideDefaults(val: BackupScheduleArgs): BackupScheduleArgs {
        return {
            ...val,
            frequencyInterval: (val.frequencyInterval) ?? 7,
            frequencyUnit: (val.frequencyUnit) ?? "Day",
            keepAtLeastOneBackup: (val.keepAtLeastOneBackup) ?? true,
            retentionPeriodInDays: (val.retentionPeriodInDays) ?? 30,
        };
    }

    /**
     * Describes the capabilities/features allowed for a specific SKU.
     */
    export interface CapabilityArgs {
        /**
         * Name of the SKU capability.
         */
        name?: pulumi.Input<string>;
        /**
         * Reason of the SKU capability.
         */
        reason?: pulumi.Input<string>;
        /**
         * Value of the SKU capability.
         */
        value?: pulumi.Input<string>;
    }

    /**
     * Information needed for cloning operation.
     */
    export interface CloningInfoArgs {
        /**
         * Application setting overrides for cloned app. If specified, these settings override the settings cloned 
         * from source app. Otherwise, application settings from source app are retained.
         */
        appSettingsOverrides?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * <code>true</code> to clone custom hostnames from source app; otherwise, <code>false</code>.
         */
        cloneCustomHostNames?: pulumi.Input<boolean>;
        /**
         * <code>true</code> to clone source control from source app; otherwise, <code>false</code>.
         */
        cloneSourceControl?: pulumi.Input<boolean>;
        /**
         * <code>true</code> to configure load balancing for source and destination app.
         */
        configureLoadBalancing?: pulumi.Input<boolean>;
        /**
         * Correlation ID of cloning operation. This ID ties multiple cloning operations
         * together to use the same snapshot.
         */
        correlationId?: pulumi.Input<string>;
        /**
         * App Service Environment.
         */
        hostingEnvironment?: pulumi.Input<string>;
        /**
         * <code>true</code> to overwrite destination app; otherwise, <code>false</code>.
         */
        overwrite?: pulumi.Input<boolean>;
        /**
         * ARM resource ID of the source app. App resource ID is of the form 
         * /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName} for production slots and 
         * /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slotName} for other slots.
         */
        sourceWebAppId: pulumi.Input<string>;
        /**
         * Location of source app ex: West US or North Europe
         */
        sourceWebAppLocation?: pulumi.Input<string>;
        /**
         * ARM resource ID of the Traffic Manager profile to use, if it exists. Traffic Manager resource ID is of the form 
         * /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{profileName}.
         */
        trafficManagerProfileId?: pulumi.Input<string>;
        /**
         * Name of Traffic Manager profile to create. This is only needed if Traffic Manager profile does not already exist.
         */
        trafficManagerProfileName?: pulumi.Input<string>;
    }

    /**
     * Non versioned Container App configuration properties that define the mutable settings of a Container app
     */
    export interface ConfigurationArgs {
        /**
         * ActiveRevisionsMode controls how active revisions are handled for the Container app:
         * <list><item>Multiple: multiple revisions can be active. If no value if provided, this is the default</item><item>Single: Only one revision can be active at a time. Revision weights can not be used in this mode</item></list>
         */
        activeRevisionsMode?: pulumi.Input<string | enums.ActiveRevisionsMode>;
        /**
         * Ingress configurations.
         */
        ingress?: pulumi.Input<IngressArgs>;
        /**
         * Collection of private container registry credentials for containers used by the Container app
         */
        registries?: pulumi.Input<pulumi.Input<RegistryCredentialsArgs>[]>;
        /**
         * Collection of secrets used by a Container app
         */
        secrets?: pulumi.Input<pulumi.Input<SecretArgs>[]>;
    }
    /**
     * configurationArgsProvideDefaults sets the appropriate defaults for ConfigurationArgs
     */
    export function configurationArgsProvideDefaults(val: ConfigurationArgs): ConfigurationArgs {
        return {
            ...val,
            ingress: (val.ingress ? pulumi.output(val.ingress).apply(ingressArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Database connection string information.
     */
    export interface ConnStringInfoArgs {
        /**
         * Connection string value.
         */
        connectionString?: pulumi.Input<string>;
        /**
         * Name of connection string.
         */
        name?: pulumi.Input<string>;
        /**
         * Type of database.
         */
        type?: pulumi.Input<enums.ConnectionStringType>;
    }

    /**
     * Database connection string value to type pair.
     */
    export interface ConnStringValueTypePairArgs {
        /**
         * Type of database.
         */
        type: pulumi.Input<enums.ConnectionStringType>;
        /**
         * Value of pair.
         */
        value: pulumi.Input<string>;
    }

    /**
     * Container App container definition.
     */
    export interface ContainerArgs {
        /**
         * Container start command arguments.
         */
        args?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Container start command.
         */
        command?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Container environment variables.
         */
        env?: pulumi.Input<pulumi.Input<EnvironmentVarArgs>[]>;
        /**
         * Container image tag.
         */
        image?: pulumi.Input<string>;
        /**
         * Custom container name.
         */
        name?: pulumi.Input<string>;
        /**
         * Container resource requirements.
         */
        resources?: pulumi.Input<ContainerResourcesArgs>;
    }

    export interface ContainerAppsConfigurationArgs {
        /**
         * Resource ID of a subnet for control plane infrastructure components. This subnet must be in the same VNET as the subnet defined in appSubnetResourceId. Must not overlap with the IP range defined in platformReservedCidr, if defined.
         */
        appSubnetResourceId?: pulumi.Input<string>;
        /**
         * Resource ID of a subnet for control plane infrastructure components. This subnet must be in the same VNET as the subnet defined in appSubnetResourceId. Must not overlap with the IP range defined in platformReservedCidr, if defined.
         */
        controlPlaneSubnetResourceId?: pulumi.Input<string>;
        /**
         * Azure Monitor instrumentation key used by Dapr to export Service to Service communication telemetry
         */
        daprAIInstrumentationKey?: pulumi.Input<string>;
        /**
         * CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the IP range defined in platformReservedCidr, if defined.
         */
        dockerBridgeCidr?: pulumi.Input<string>;
        /**
         * IP range in CIDR notation that can be reserved for environment infrastructure IP addresses. It must not overlap with any other Subnet IP ranges.
         */
        platformReservedCidr?: pulumi.Input<string>;
        /**
         * An IP address from the IP range defined by platformReservedCidr that will be reserved for the internal DNS server
         */
        platformReservedDnsIP?: pulumi.Input<string>;
    }

    /**
     * Container App container resource requirements.
     */
    export interface ContainerResourcesArgs {
        /**
         * Required CPU in cores, e.g. 0.5
         */
        cpu?: pulumi.Input<number>;
        /**
         * Required memory, e.g. "250Mb"
         */
        memory?: pulumi.Input<string>;
    }

    /**
     * Cross-Origin Resource Sharing (CORS) settings for the app.
     */
    export interface CorsSettingsArgs {
        /**
         * Gets or sets the list of origins that should be allowed to make cross-origin
         * calls (for example: http://example.com:12345). Use "*" to allow all.
         */
        allowedOrigins?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Gets or sets whether CORS requests with credentials are allowed. See 
         * https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Requests_with_credentials
         * for more details.
         */
        supportCredentials?: pulumi.Input<boolean>;
    }

    /**
     * Full view of the custom domain suffix configuration for ASEv3.
     */
    export interface CustomDnsSuffixConfigurationArgs {
        /**
         * The URL referencing the Azure Key Vault certificate secret that should be used as the default SSL/TLS certificate for sites with the custom domain suffix.
         */
        certificateUrl?: pulumi.Input<string>;
        /**
         * The default custom domain suffix to use for all sites deployed on the ASE.
         */
        dnsSuffix?: pulumi.Input<string>;
        /**
         * The user-assigned identity to use for resolving the key vault certificate reference. If not specified, the system-assigned ASE identity will be used if available.
         */
        keyVaultReferenceIdentity?: pulumi.Input<string>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
    }

    /**
     * Container App container Custom scaling rule.
     */
    export interface CustomScaleRuleArgs {
        /**
         * Authentication secrets for the custom scale rule.
         */
        auth?: pulumi.Input<pulumi.Input<ScaleRuleAuthArgs>[]>;
        /**
         * Metadata properties to describe custom scale rule.
         */
        metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Type of the custom scale rule
         * eg: azure-servicebus, redis etc.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Container App Dapr configuration.
     */
    export interface DaprArgs {
        /**
         * Dapr application identifier
         */
        appId?: pulumi.Input<string>;
        /**
         * Port on which the Dapr side car
         */
        appPort?: pulumi.Input<number>;
        /**
         * Collection of Dapr components
         */
        components?: pulumi.Input<pulumi.Input<DaprComponentArgs>[]>;
        /**
         * Boolean indicating if the Dapr side car is enabled
         */
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * Dapr component configuration
     */
    export interface DaprComponentArgs {
        /**
         * Component metadata
         */
        metadata?: pulumi.Input<pulumi.Input<DaprMetadataArgs>[]>;
        /**
         * Component name
         */
        name?: pulumi.Input<string>;
        /**
         * Component type
         */
        type?: pulumi.Input<string>;
        /**
         * Component version
         */
        version?: pulumi.Input<string>;
    }

    /**
     * App Dapr configuration.
     */
    export interface DaprConfigArgs {
        /**
         * Dapr application identifier
         */
        appId?: pulumi.Input<string>;
        /**
         * Tells Dapr which port your application is listening on
         */
        appPort?: pulumi.Input<number>;
        /**
         * Enables API logging for the Dapr sidecar
         */
        enableApiLogging?: pulumi.Input<boolean>;
        /**
         * Boolean indicating if the Dapr side car is enabled
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * Increasing max size of request body http servers parameter in MB to handle uploading of big files. Default is 4 MB.
         */
        httpMaxRequestSize?: pulumi.Input<number>;
        /**
         * Dapr max size of http header read buffer in KB to handle when sending multi-KB headers. Default is 65KB.
         */
        httpReadBufferSize?: pulumi.Input<number>;
        /**
         * Sets the log level for the Dapr sidecar. Allowed values are debug, info, warn, error. Default is info.
         */
        logLevel?: pulumi.Input<string | enums.DaprLogLevel>;
    }
    /**
     * daprConfigArgsProvideDefaults sets the appropriate defaults for DaprConfigArgs
     */
    export function daprConfigArgsProvideDefaults(val: DaprConfigArgs): DaprConfigArgs {
        return {
            ...val,
            enabled: (val.enabled) ?? false,
        };
    }

    /**
     * Container App Dapr component metadata.
     */
    export interface DaprMetadataArgs {
        /**
         * Metadata property name.
         */
        name?: pulumi.Input<string>;
        /**
         * Name of the Container App secret from which to pull the metadata property value.
         */
        secretRef?: pulumi.Input<string>;
        /**
         * Metadata property value.
         */
        value?: pulumi.Input<string>;
    }

    /**
     * Database backup settings.
     */
    export interface DatabaseBackupSetting {
        /**
         * Contains a connection string to a database which is being backed up or restored. If the restore should happen to a new database, the database name inside is the new one.
         */
        connectionString?: string;
        /**
         * Contains a connection string name that is linked to the SiteConfig.ConnectionStrings.
         * This is used during restore with overwrite connection strings options.
         */
        connectionStringName?: string;
        /**
         * Database type (e.g. SqlAzure / MySql).
         */
        databaseType: string | enums.DatabaseType;
        name?: string;
    }

    /**
     * Database backup settings.
     */
    export interface DatabaseBackupSettingArgs {
        /**
         * Contains a connection string to a database which is being backed up or restored. If the restore should happen to a new database, the database name inside is the new one.
         */
        connectionString?: pulumi.Input<string>;
        /**
         * Contains a connection string name that is linked to the SiteConfig.ConnectionStrings.
         * This is used during restore with overwrite connection strings options.
         */
        connectionStringName?: pulumi.Input<string>;
        /**
         * Database type (e.g. SqlAzure / MySql).
         */
        databaseType: pulumi.Input<string | enums.DatabaseType>;
        name?: pulumi.Input<string>;
    }

    /**
     * Enabled configuration.
     */
    export interface EnabledConfigArgs {
        /**
         * True if configuration is enabled, false if it is disabled and null if configuration is not set.
         */
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * Container App container environment variable.
     */
    export interface EnvironmentVarArgs {
        /**
         * Environment variable name.
         */
        name?: pulumi.Input<string>;
        /**
         * Name of the Container App secret from which to pull the environment variable value.
         */
        secretRef?: pulumi.Input<string>;
        /**
         * Non-secret environment variable value.
         */
        value?: pulumi.Input<string>;
    }

    /**
     * Routing rules in production experiments.
     */
    export interface ExperimentsArgs {
        /**
         * List of ramp-up rules.
         */
        rampUpRules?: pulumi.Input<pulumi.Input<RampUpRuleArgs>[]>;
    }

    /**
     * Extended Location.
     */
    export interface ExtendedLocationArgs {
        /**
         * Name of extended location.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Application logs to file system configuration.
     */
    export interface FileSystemApplicationLogsConfigArgs {
        /**
         * Log level.
         */
        level?: pulumi.Input<enums.LogLevel>;
    }
    /**
     * fileSystemApplicationLogsConfigArgsProvideDefaults sets the appropriate defaults for FileSystemApplicationLogsConfigArgs
     */
    export function fileSystemApplicationLogsConfigArgsProvideDefaults(val: FileSystemApplicationLogsConfigArgs): FileSystemApplicationLogsConfigArgs {
        return {
            ...val,
            level: (val.level) ?? "Off",
        };
    }

    /**
     * Http logs to file system configuration.
     */
    export interface FileSystemHttpLogsConfigArgs {
        /**
         * True if configuration is enabled, false if it is disabled and null if configuration is not set.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * Retention in days.
         * Remove files older than X days.
         * 0 or lower means no retention.
         */
        retentionInDays?: pulumi.Input<number>;
        /**
         * Maximum size in megabytes that http log files can use.
         * When reached old log files will be removed to make space for new ones.
         * Value can range between 25 and 100.
         */
        retentionInMb?: pulumi.Input<number>;
    }

    export interface FrontEndConfigurationArgs {
        kind?: pulumi.Input<enums.FrontEndServiceType>;
    }

    /**
     * The GitHub action code configuration.
     */
    export interface GitHubActionCodeConfigurationArgs {
        /**
         * Runtime stack is used to determine the workflow file content for code base apps.
         */
        runtimeStack?: pulumi.Input<string>;
        /**
         * Runtime version is used to determine what build version to set in the workflow file.
         */
        runtimeVersion?: pulumi.Input<string>;
    }

    /**
     * The GitHub action configuration.
     */
    export interface GitHubActionConfigurationArgs {
        /**
         * GitHub Action code configuration.
         */
        codeConfiguration?: pulumi.Input<GitHubActionCodeConfigurationArgs>;
        /**
         * GitHub Action container configuration.
         */
        containerConfiguration?: pulumi.Input<GitHubActionContainerConfigurationArgs>;
        /**
         * Workflow option to determine whether the workflow file should be generated and written to the repository.
         */
        generateWorkflowFile?: pulumi.Input<boolean>;
        /**
         * This will help determine the workflow configuration to select.
         */
        isLinux?: pulumi.Input<boolean>;
    }

    /**
     * The GitHub action container configuration.
     */
    export interface GitHubActionContainerConfigurationArgs {
        /**
         * The image name for the build.
         */
        imageName?: pulumi.Input<string>;
        /**
         * The password used to upload the image to the container registry.
         */
        password?: pulumi.Input<string>;
        /**
         * The server URL for the container registry where the build will be hosted.
         */
        serverUrl?: pulumi.Input<string>;
        /**
         * The username used to upload the image to the container registry.
         */
        username?: pulumi.Input<string>;
    }

    /**
     * The IIS handler mappings used to define which handler processes HTTP requests with certain extension. 
     * For example, it is used to configure php-cgi.exe process to handle all HTTP requests with *.php extension.
     */
    export interface HandlerMappingArgs {
        /**
         * Command-line arguments to be passed to the script processor.
         */
        arguments?: pulumi.Input<string>;
        /**
         * Requests with this extension will be handled using the specified FastCGI application.
         */
        extension?: pulumi.Input<string>;
        /**
         * The absolute path to the FastCGI application.
         */
        scriptProcessor?: pulumi.Input<string>;
    }

    /**
     * SSL-enabled hostname.
     */
    export interface HostNameSslStateArgs {
        /**
         * Indicates whether the hostname is a standard or repository hostname.
         */
        hostType?: pulumi.Input<enums.HostType>;
        /**
         * Hostname.
         */
        name?: pulumi.Input<string>;
        /**
         * SSL type.
         */
        sslState?: pulumi.Input<enums.SslState>;
        /**
         * SSL certificate thumbprint.
         */
        thumbprint?: pulumi.Input<string>;
        /**
         * Set to <code>true</code> to update existing hostname.
         */
        toUpdate?: pulumi.Input<boolean>;
        /**
         * Virtual IP address assigned to the hostname if IP based SSL is enabled.
         */
        virtualIP?: pulumi.Input<string>;
    }

    /**
     * Specification for an App Service Environment to use for this resource.
     */
    export interface HostingEnvironmentProfileArgs {
        /**
         * Resource ID of the App Service Environment.
         */
        id?: pulumi.Input<string>;
    }

    /**
     * Http logs configuration.
     */
    export interface HttpLogsConfigArgs {
        /**
         * Http logs to azure blob storage configuration.
         */
        azureBlobStorage?: pulumi.Input<AzureBlobStorageHttpLogsConfigArgs>;
        /**
         * Http logs to file system configuration.
         */
        fileSystem?: pulumi.Input<FileSystemHttpLogsConfigArgs>;
    }

    /**
     * Container App container Custom scaling rule.
     */
    export interface HttpScaleRuleArgs {
        /**
         * Authentication secrets for the custom scale rule.
         */
        auth?: pulumi.Input<pulumi.Input<ScaleRuleAuthArgs>[]>;
        /**
         * Metadata properties to describe http scale rule.
         */
        metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * Container App Ingress configuration.
     */
    export interface IngressArgs {
        /**
         * Bool indicating if HTTP connections to is allowed. If set to false HTTP connections are automatically redirected to HTTPS connections
         */
        allowInsecure?: pulumi.Input<boolean>;
        /**
         * Bool indicating if app exposes an external http endpoint
         */
        external?: pulumi.Input<boolean>;
        /**
         * Target Port in containers for traffic from ingress
         */
        targetPort?: pulumi.Input<number>;
        traffic?: pulumi.Input<pulumi.Input<TrafficWeightArgs>[]>;
        /**
         * Ingress transport protocol
         */
        transport?: pulumi.Input<string | enums.IngressTransportMethod>;
    }
    /**
     * ingressArgsProvideDefaults sets the appropriate defaults for IngressArgs
     */
    export function ingressArgsProvideDefaults(val: IngressArgs): IngressArgs {
        return {
            ...val,
            external: (val.external) ?? false,
        };
    }

    /**
     * IP security restriction on an app.
     */
    export interface IpSecurityRestrictionArgs {
        /**
         * Allow or Deny access for this IP range.
         */
        action?: pulumi.Input<string>;
        /**
         * IP restriction rule description.
         */
        description?: pulumi.Input<string>;
        /**
         * IP restriction rule headers.
         * X-Forwarded-Host (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Host#Examples). 
         * The matching logic is ..
         * - If the property is null or empty (default), all hosts(or lack of) are allowed.
         * - A value is compared using ordinal-ignore-case (excluding port number).
         * - Subdomain wildcards are permitted but don't match the root domain. For example, *.contoso.com matches the subdomain foo.contoso.com
         *  but not the root domain contoso.com or multi-level foo.bar.contoso.com
         * - Unicode host names are allowed but are converted to Punycode for matching.
         *
         * X-Forwarded-For (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For#Examples).
         * The matching logic is ..
         * - If the property is null or empty (default), any forwarded-for chains (or lack of) are allowed.
         * - If any address (excluding port number) in the chain (comma separated) matches the CIDR defined by the property.
         *
         * X-Azure-FDID and X-FD-HealthProbe.
         * The matching logic is exact match.
         */
        headers?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<string>[]>}>;
        /**
         * IP address the security restriction is valid for.
         * It can be in form of pure ipv4 address (required SubnetMask property) or
         * CIDR notation such as ipv4/mask (leading bit match). For CIDR,
         * SubnetMask property must not be specified.
         */
        ipAddress?: pulumi.Input<string>;
        /**
         * IP restriction rule name.
         */
        name?: pulumi.Input<string>;
        /**
         * Priority of IP restriction rule.
         */
        priority?: pulumi.Input<number>;
        /**
         * Subnet mask for the range of IP addresses the restriction is valid for.
         */
        subnetMask?: pulumi.Input<string>;
        /**
         * (internal) Subnet traffic tag
         */
        subnetTrafficTag?: pulumi.Input<number>;
        /**
         * Defines what this IP filter will be used for. This is to support IP filtering on proxies.
         */
        tag?: pulumi.Input<string | enums.IpFilterTag>;
        /**
         * Virtual network resource id
         */
        vnetSubnetResourceId?: pulumi.Input<string>;
        /**
         * (internal) Vnet traffic tag
         */
        vnetTrafficTag?: pulumi.Input<number>;
    }

    /**
     * Specification for a Kubernetes Environment to use for this resource.
     */
    export interface KubeEnvironmentProfileArgs {
        /**
         * Resource ID of the Kubernetes Environment.
         */
        id?: pulumi.Input<string>;
    }

    export interface LogAnalyticsConfigurationArgs {
        customerId?: pulumi.Input<string>;
        sharedKey?: pulumi.Input<string>;
    }

    /**
     * Managed service identity.
     */
    export interface ManagedServiceIdentityArgs {
        /**
         * Type of managed service identity.
         */
        type?: pulumi.Input<enums.ManagedServiceIdentityType>;
        /**
         * The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Name value pair.
     */
    export interface NameValuePairArgs {
        /**
         * Pair name.
         */
        name?: pulumi.Input<string>;
        /**
         * Pair value.
         */
        value?: pulumi.Input<string>;
    }

    /**
     * The state of a private link connection
     */
    export interface PrivateLinkConnectionStateArgs {
        /**
         * ActionsRequired for a private link connection
         */
        actionsRequired?: pulumi.Input<string>;
        /**
         * Description of a private link connection
         */
        description?: pulumi.Input<string>;
        /**
         * Status of a private link connection
         */
        status?: pulumi.Input<string>;
    }

    /**
     * Push settings for the App.
     */
    export interface PushSettingsArgs {
        /**
         * Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint.
         */
        dynamicTagsJson?: pulumi.Input<string>;
        /**
         * Gets or sets a flag indicating whether the Push endpoint is enabled.
         */
        isPushEnabled: pulumi.Input<boolean>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
        /**
         * Gets or sets a JSON string containing a list of tags that are whitelisted for use by the push registration endpoint.
         */
        tagWhitelistJson?: pulumi.Input<string>;
        /**
         * Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.
         * Tags can consist of alphanumeric characters and the following:
         * '_', '@', '#', '.', ':', '-'. 
         * Validation should be performed at the PushRequestHandler.
         */
        tagsRequiringAuth?: pulumi.Input<string>;
    }

    /**
     * Container App container Azure Queue based scaling rule.
     */
    export interface QueueScaleRuleArgs {
        /**
         * Authentication secrets for the queue scale rule.
         */
        auth?: pulumi.Input<pulumi.Input<ScaleRuleAuthArgs>[]>;
        /**
         * Queue length.
         */
        queueLength?: pulumi.Input<number>;
        /**
         * Queue name.
         */
        queueName?: pulumi.Input<string>;
    }

    /**
     * Routing rules for ramp up testing. This rule allows to redirect static traffic % to a slot or to gradually change routing % based on performance.
     */
    export interface RampUpRuleArgs {
        /**
         * Hostname of a slot to which the traffic will be redirected if decided to. E.g. myapp-stage.azurewebsites.net.
         */
        actionHostName?: pulumi.Input<string>;
        /**
         * Custom decision algorithm can be provided in TiPCallback site extension which URL can be specified. See TiPCallback site extension for the scaffold and contracts.
         * https://www.siteextensions.net/packages/TiPCallback/
         */
        changeDecisionCallbackUrl?: pulumi.Input<string>;
        /**
         * Specifies interval in minutes to reevaluate ReroutePercentage.
         */
        changeIntervalInMinutes?: pulumi.Input<number>;
        /**
         * In auto ramp up scenario this is the step to add/remove from <code>ReroutePercentage</code> until it reaches \n<code>MinReroutePercentage</code> or 
         * <code>MaxReroutePercentage</code>. Site metrics are checked every N minutes specified in <code>ChangeIntervalInMinutes</code>.\nCustom decision algorithm 
         * can be provided in TiPCallback site extension which URL can be specified in <code>ChangeDecisionCallbackUrl</code>.
         */
        changeStep?: pulumi.Input<number>;
        /**
         * Specifies upper boundary below which ReroutePercentage will stay.
         */
        maxReroutePercentage?: pulumi.Input<number>;
        /**
         * Specifies lower boundary above which ReroutePercentage will stay.
         */
        minReroutePercentage?: pulumi.Input<number>;
        /**
         * Name of the routing rule. The recommended name would be to point to the slot which will receive the traffic in the experiment.
         */
        name?: pulumi.Input<string>;
        /**
         * Percentage of the traffic which will be redirected to <code>ActionHostName</code>.
         */
        reroutePercentage?: pulumi.Input<number>;
    }

    /**
     * Container App Private Registry
     */
    export interface RegistryCredentialsArgs {
        /**
         * The name of the Secret that contains the registry login password
         */
        passwordSecretRef?: pulumi.Input<string>;
        /**
         * Container Registry Server
         */
        server?: pulumi.Input<string>;
        /**
         * Container Registry Username
         */
        username?: pulumi.Input<string>;
    }

    /**
     * Trigger based on total requests.
     */
    export interface RequestsBasedTriggerArgs {
        /**
         * Request Count.
         */
        count?: pulumi.Input<number>;
        /**
         * Time interval.
         */
        timeInterval?: pulumi.Input<string>;
    }

    /**
     * Function app resource requirements.
     */
    export interface ResourceConfigArgs {
        /**
         * Required CPU in cores, e.g. 0.5
         */
        cpu?: pulumi.Input<number>;
        /**
         * Required memory, e.g. "1Gi"
         */
        memory?: pulumi.Input<string>;
    }

    /**
     * Container App scaling configurations.
     */
    export interface ScaleArgs {
        /**
         * Optional. Maximum number of container replicas. Defaults to 10 if not set.
         */
        maxReplicas?: pulumi.Input<number>;
        /**
         * Optional. Minimum number of container replicas.
         */
        minReplicas?: pulumi.Input<number>;
        /**
         * Scaling rules.
         */
        rules?: pulumi.Input<pulumi.Input<ScaleRuleArgs>[]>;
    }

    /**
     * Container App container scaling rule.
     */
    export interface ScaleRuleArgs {
        /**
         * Azure Queue based scaling.
         */
        azureQueue?: pulumi.Input<QueueScaleRuleArgs>;
        /**
         * Custom scale rule.
         */
        custom?: pulumi.Input<CustomScaleRuleArgs>;
        /**
         * HTTP requests based scaling.
         */
        http?: pulumi.Input<HttpScaleRuleArgs>;
        /**
         * Scale Rule Name
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Auth Secrets for Container App Scale Rule
     */
    export interface ScaleRuleAuthArgs {
        /**
         * Name of the Container App secret from which to pull the auth params.
         */
        secretRef?: pulumi.Input<string>;
        /**
         * Trigger Parameter that uses the secret
         */
        triggerParameter?: pulumi.Input<string>;
    }

    /**
     * Container App Secret.
     */
    export interface SecretArgs {
        /**
         * Secret Name.
         */
        name?: pulumi.Input<string>;
        /**
         * Secret Value.
         */
        value?: pulumi.Input<string>;
    }

    /**
     * Configuration of an App Service app.
     */
    export interface SiteConfigArgs {
        /**
         * Flag to use Managed Identity Creds for ACR pull
         */
        acrUseManagedIdentityCreds?: pulumi.Input<boolean>;
        /**
         * If using user managed identity, the user managed identity ClientId
         */
        acrUserManagedIdentityID?: pulumi.Input<string>;
        /**
         * <code>true</code> if Always On is enabled; otherwise, <code>false</code>.
         */
        alwaysOn?: pulumi.Input<boolean>;
        /**
         * Information about the formal API definition for the app.
         */
        apiDefinition?: pulumi.Input<ApiDefinitionInfoArgs>;
        /**
         * Azure API management settings linked to the app.
         */
        apiManagementConfig?: pulumi.Input<ApiManagementConfigArgs>;
        /**
         * App command line to launch.
         */
        appCommandLine?: pulumi.Input<string>;
        /**
         * Application settings.
         */
        appSettings?: pulumi.Input<pulumi.Input<NameValuePairArgs>[]>;
        /**
         * <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>.
         */
        autoHealEnabled?: pulumi.Input<boolean>;
        /**
         * Auto Heal rules.
         */
        autoHealRules?: pulumi.Input<AutoHealRulesArgs>;
        /**
         * Auto-swap slot name.
         */
        autoSwapSlotName?: pulumi.Input<string>;
        /**
         * List of Azure Storage Accounts.
         */
        azureStorageAccounts?: pulumi.Input<{[key: string]: pulumi.Input<AzureStorageInfoValueArgs>}>;
        /**
         * Connection strings.
         */
        connectionStrings?: pulumi.Input<pulumi.Input<ConnStringInfoArgs>[]>;
        /**
         * Cross-Origin Resource Sharing (CORS) settings.
         */
        cors?: pulumi.Input<CorsSettingsArgs>;
        /**
         * Default documents.
         */
        defaultDocuments?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>.
         */
        detailedErrorLoggingEnabled?: pulumi.Input<boolean>;
        /**
         * Document root.
         */
        documentRoot?: pulumi.Input<string>;
        /**
         * Maximum number of workers that a site can scale out to.
         * This setting only applies to apps in plans where ElasticScaleEnabled is <code>true</code>
         */
        elasticWebAppScaleLimit?: pulumi.Input<number>;
        /**
         * This is work around for polymorphic types.
         */
        experiments?: pulumi.Input<ExperimentsArgs>;
        /**
         * State of FTP / FTPS service
         */
        ftpsState?: pulumi.Input<string | enums.FtpsState>;
        /**
         * Maximum number of workers that a site can scale out to.
         * This setting only applies to the Consumption and Elastic Premium Plans
         */
        functionAppScaleLimit?: pulumi.Input<number>;
        /**
         * Gets or sets a value indicating whether functions runtime scale monitoring is enabled. When enabled,
         * the ScaleController will not monitor event sources directly, but will instead call to the
         * runtime to get scale status.
         */
        functionsRuntimeScaleMonitoringEnabled?: pulumi.Input<boolean>;
        /**
         * Handler mappings.
         */
        handlerMappings?: pulumi.Input<pulumi.Input<HandlerMappingArgs>[]>;
        /**
         * Health check path
         */
        healthCheckPath?: pulumi.Input<string>;
        /**
         * Http20Enabled: configures a web site to allow clients to connect over http2.0
         */
        http20Enabled?: pulumi.Input<boolean>;
        /**
         * <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>.
         */
        httpLoggingEnabled?: pulumi.Input<boolean>;
        /**
         * IP security restrictions for main.
         */
        ipSecurityRestrictions?: pulumi.Input<pulumi.Input<IpSecurityRestrictionArgs>[]>;
        /**
         * Default action for main access restriction if no rules are matched.
         */
        ipSecurityRestrictionsDefaultAction?: pulumi.Input<string | enums.DefaultAction>;
        /**
         * Java container.
         */
        javaContainer?: pulumi.Input<string>;
        /**
         * Java container version.
         */
        javaContainerVersion?: pulumi.Input<string>;
        /**
         * Java version.
         */
        javaVersion?: pulumi.Input<string>;
        /**
         * Identity to use for Key Vault Reference authentication.
         */
        keyVaultReferenceIdentity?: pulumi.Input<string>;
        /**
         * Site limits.
         */
        limits?: pulumi.Input<SiteLimitsArgs>;
        /**
         * Linux App Framework and version
         */
        linuxFxVersion?: pulumi.Input<string>;
        /**
         * Site load balancing.
         */
        loadBalancing?: pulumi.Input<enums.SiteLoadBalancing>;
        /**
         * <code>true</code> to enable local MySQL; otherwise, <code>false</code>.
         */
        localMySqlEnabled?: pulumi.Input<boolean>;
        /**
         * HTTP logs directory size limit.
         */
        logsDirectorySizeLimit?: pulumi.Input<number>;
        /**
         * Managed pipeline mode.
         */
        managedPipelineMode?: pulumi.Input<enums.ManagedPipelineMode>;
        /**
         * Managed Service Identity Id
         */
        managedServiceIdentityId?: pulumi.Input<number>;
        /**
         * Application metadata. This property cannot be retrieved, since it may contain secrets.
         */
        metadata?: pulumi.Input<pulumi.Input<NameValuePairArgs>[]>;
        /**
         * The minimum strength TLS cipher suite allowed for an application
         */
        minTlsCipherSuite?: pulumi.Input<string | enums.TlsCipherSuites>;
        /**
         * MinTlsVersion: configures the minimum version of TLS required for SSL requests
         */
        minTlsVersion?: pulumi.Input<string | enums.SupportedTlsVersions>;
        /**
         * Number of minimum instance count for a site
         * This setting only applies to the Elastic Plans
         */
        minimumElasticInstanceCount?: pulumi.Input<number>;
        /**
         * .NET Framework version.
         */
        netFrameworkVersion?: pulumi.Input<string>;
        /**
         * Version of Node.js.
         */
        nodeVersion?: pulumi.Input<string>;
        /**
         * Number of workers.
         */
        numberOfWorkers?: pulumi.Input<number>;
        /**
         * Version of PHP.
         */
        phpVersion?: pulumi.Input<string>;
        /**
         * Version of PowerShell.
         */
        powerShellVersion?: pulumi.Input<string>;
        /**
         * Number of preWarmed instances.
         * This setting only applies to the Consumption and Elastic Plans
         */
        preWarmedInstanceCount?: pulumi.Input<number>;
        /**
         * Property to allow or block all public traffic.
         */
        publicNetworkAccess?: pulumi.Input<string>;
        /**
         * Publishing user name.
         */
        publishingUsername?: pulumi.Input<string>;
        /**
         * Push endpoint settings.
         */
        push?: pulumi.Input<PushSettingsArgs>;
        /**
         * Version of Python.
         */
        pythonVersion?: pulumi.Input<string>;
        /**
         * <code>true</code> if remote debugging is enabled; otherwise, <code>false</code>.
         */
        remoteDebuggingEnabled?: pulumi.Input<boolean>;
        /**
         * Remote debugging version.
         */
        remoteDebuggingVersion?: pulumi.Input<string>;
        /**
         * <code>true</code> if request tracing is enabled; otherwise, <code>false</code>.
         */
        requestTracingEnabled?: pulumi.Input<boolean>;
        /**
         * Request tracing expiration time.
         */
        requestTracingExpirationTime?: pulumi.Input<string>;
        /**
         * IP security restrictions for scm.
         */
        scmIpSecurityRestrictions?: pulumi.Input<pulumi.Input<IpSecurityRestrictionArgs>[]>;
        /**
         * Default action for scm access restriction if no rules are matched.
         */
        scmIpSecurityRestrictionsDefaultAction?: pulumi.Input<string | enums.DefaultAction>;
        /**
         * IP security restrictions for scm to use main.
         */
        scmIpSecurityRestrictionsUseMain?: pulumi.Input<boolean>;
        /**
         * ScmMinTlsVersion: configures the minimum version of TLS required for SSL requests for SCM site
         */
        scmMinTlsVersion?: pulumi.Input<string | enums.SupportedTlsVersions>;
        /**
         * SCM type.
         */
        scmType?: pulumi.Input<string | enums.ScmType>;
        /**
         * Tracing options.
         */
        tracingOptions?: pulumi.Input<string>;
        /**
         * <code>true</code> to use 32-bit worker process; otherwise, <code>false</code>.
         */
        use32BitWorkerProcess?: pulumi.Input<boolean>;
        /**
         * Virtual applications.
         */
        virtualApplications?: pulumi.Input<pulumi.Input<VirtualApplicationArgs>[]>;
        /**
         * Virtual Network name.
         */
        vnetName?: pulumi.Input<string>;
        /**
         * The number of private ports assigned to this app. These will be assigned dynamically on runtime.
         */
        vnetPrivatePortsCount?: pulumi.Input<number>;
        /**
         * Virtual Network Route All enabled. This causes all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied.
         */
        vnetRouteAllEnabled?: pulumi.Input<boolean>;
        /**
         * <code>true</code> if WebSocket is enabled; otherwise, <code>false</code>.
         */
        webSocketsEnabled?: pulumi.Input<boolean>;
        /**
         * Sets the time zone a site uses for generating timestamps. Compatible with Linux and Windows App Service. Setting the WEBSITE_TIME_ZONE app setting takes precedence over this config. For Linux, expects tz database values https://www.iana.org/time-zones (for a quick reference see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For Windows, expects one of the time zones listed under HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones
         */
        websiteTimeZone?: pulumi.Input<string>;
        /**
         * Xenon App Framework and version
         */
        windowsFxVersion?: pulumi.Input<string>;
        /**
         * Explicit Managed Service Identity Id
         */
        xManagedServiceIdentityId?: pulumi.Input<number>;
    }
    /**
     * siteConfigArgsProvideDefaults sets the appropriate defaults for SiteConfigArgs
     */
    export function siteConfigArgsProvideDefaults(val: SiteConfigArgs): SiteConfigArgs {
        return {
            ...val,
            http20Enabled: (val.http20Enabled) ?? true,
            localMySqlEnabled: (val.localMySqlEnabled) ?? false,
            netFrameworkVersion: (val.netFrameworkVersion) ?? "v4.6",
        };
    }

    /**
     * Metric limits set on an app.
     */
    export interface SiteLimitsArgs {
        /**
         * Maximum allowed disk size usage in MB.
         */
        maxDiskSizeInMb?: pulumi.Input<number>;
        /**
         * Maximum allowed memory usage in MB.
         */
        maxMemoryInMb?: pulumi.Input<number>;
        /**
         * Maximum allowed CPU usage percentage.
         */
        maxPercentageCpu?: pulumi.Input<number>;
    }

    /**
     * Description of the App Service plan scale options.
     */
    export interface SkuCapacityArgs {
        /**
         * Default number of workers for this App Service plan SKU.
         */
        default?: pulumi.Input<number>;
        /**
         * Maximum number of Elastic workers for this App Service plan SKU.
         */
        elasticMaximum?: pulumi.Input<number>;
        /**
         * Maximum number of workers for this App Service plan SKU.
         */
        maximum?: pulumi.Input<number>;
        /**
         * Minimum number of workers for this App Service plan SKU.
         */
        minimum?: pulumi.Input<number>;
        /**
         * Available scale configurations for an App Service plan.
         */
        scaleType?: pulumi.Input<string>;
    }

    /**
     * Description of a SKU for a scalable resource.
     */
    export interface SkuDescriptionArgs {
        /**
         * Capabilities of the SKU, e.g., is traffic manager enabled?
         */
        capabilities?: pulumi.Input<pulumi.Input<CapabilityArgs>[]>;
        /**
         * Current number of instances assigned to the resource.
         */
        capacity?: pulumi.Input<number>;
        /**
         * Family code of the resource SKU.
         */
        family?: pulumi.Input<string>;
        /**
         * Locations of the SKU.
         */
        locations?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Name of the resource SKU.
         */
        name?: pulumi.Input<string>;
        /**
         * Size specifier of the resource SKU.
         */
        size?: pulumi.Input<string>;
        /**
         * Min, max, and default scale values of the SKU.
         */
        skuCapacity?: pulumi.Input<SkuCapacityArgs>;
        /**
         * Service tier of the resource SKU.
         */
        tier?: pulumi.Input<string>;
    }

    /**
     * Trigger based on request execution time.
     */
    export interface SlowRequestsBasedTriggerArgs {
        /**
         * Request Count.
         */
        count?: pulumi.Input<number>;
        /**
         * Request Path.
         */
        path?: pulumi.Input<string>;
        /**
         * Time interval.
         */
        timeInterval?: pulumi.Input<string>;
        /**
         * Time taken.
         */
        timeTaken?: pulumi.Input<string>;
    }

    /**
     * Build properties for the static site.
     */
    export interface StaticSiteBuildPropertiesArgs {
        /**
         * A custom command to run during deployment of the Azure Functions API application.
         */
        apiBuildCommand?: pulumi.Input<string>;
        /**
         * The path to the api code within the repository.
         */
        apiLocation?: pulumi.Input<string>;
        /**
         * Deprecated: The path of the app artifacts after building (deprecated in favor of OutputLocation)
         */
        appArtifactLocation?: pulumi.Input<string>;
        /**
         * A custom command to run during deployment of the static content application.
         */
        appBuildCommand?: pulumi.Input<string>;
        /**
         * The path to the app code within the repository.
         */
        appLocation?: pulumi.Input<string>;
        /**
         * Github Action secret name override.
         */
        githubActionSecretNameOverride?: pulumi.Input<string>;
        /**
         * The output path of the app after building.
         */
        outputLocation?: pulumi.Input<string>;
        /**
         * Skip Github Action workflow generation.
         */
        skipGithubActionWorkflowGeneration?: pulumi.Input<boolean>;
    }

    /**
     * Template Options for the static site.
     */
    export interface StaticSiteTemplateOptionsArgs {
        /**
         * Description of the newly generated repository.
         */
        description?: pulumi.Input<string>;
        /**
         * Whether or not the newly generated repository is a private repository. Defaults to false (i.e. public).
         */
        isPrivate?: pulumi.Input<boolean>;
        /**
         * Owner of the newly generated repository.
         */
        owner?: pulumi.Input<string>;
        /**
         * Name of the newly generated repository.
         */
        repositoryName?: pulumi.Input<string>;
        /**
         * URL of the template repository. The newly generated repository will be based on this one.
         */
        templateRepositoryUrl?: pulumi.Input<string>;
    }

    /**
     * Trigger based on status code.
     */
    export interface StatusCodesBasedTriggerArgs {
        /**
         * Request Count.
         */
        count?: pulumi.Input<number>;
        /**
         * Request Path
         */
        path?: pulumi.Input<string>;
        /**
         * HTTP status code.
         */
        status?: pulumi.Input<number>;
        /**
         * Request Sub Status.
         */
        subStatus?: pulumi.Input<number>;
        /**
         * Time interval.
         */
        timeInterval?: pulumi.Input<string>;
        /**
         * Win32 error code.
         */
        win32Status?: pulumi.Input<number>;
    }

    /**
     * Trigger based on range of status codes.
     */
    export interface StatusCodesRangeBasedTriggerArgs {
        /**
         * Request Count.
         */
        count?: pulumi.Input<number>;
        path?: pulumi.Input<string>;
        /**
         * HTTP status code.
         */
        statusCodes?: pulumi.Input<string>;
        /**
         * Time interval.
         */
        timeInterval?: pulumi.Input<string>;
    }

    /**
     * Container App versioned application definition.
     * Defines the desired state of an immutable revision.
     * Any changes to this section Will result in a new revision being created
     */
    export interface TemplateArgs {
        /**
         * List of container definitions for the Container App.
         */
        containers?: pulumi.Input<pulumi.Input<ContainerArgs>[]>;
        /**
         * Dapr configuration for the Container App.
         */
        dapr?: pulumi.Input<DaprArgs>;
        /**
         * User friendly suffix that is appended to the revision name
         */
        revisionSuffix?: pulumi.Input<string>;
        /**
         * Scaling properties for the Container App.
         */
        scale?: pulumi.Input<ScaleArgs>;
    }

    /**
     * Traffic weight assigned to a revision
     */
    export interface TrafficWeightArgs {
        /**
         * Indicates that the traffic weight belongs to a latest stable revision
         */
        latestRevision?: pulumi.Input<boolean>;
        /**
         * Name of a revision
         */
        revisionName?: pulumi.Input<string>;
        /**
         * Traffic weight assigned to a revision
         */
        weight?: pulumi.Input<number>;
    }
    /**
     * trafficWeightArgsProvideDefaults sets the appropriate defaults for TrafficWeightArgs
     */
    export function trafficWeightArgsProvideDefaults(val: TrafficWeightArgs): TrafficWeightArgs {
        return {
            ...val,
            latestRevision: (val.latestRevision) ?? false,
        };
    }

    /**
     * Virtual application in an app.
     */
    export interface VirtualApplicationArgs {
        /**
         * Physical path.
         */
        physicalPath?: pulumi.Input<string>;
        /**
         * <code>true</code> if preloading is enabled; otherwise, <code>false</code>.
         */
        preloadEnabled?: pulumi.Input<boolean>;
        /**
         * Virtual directories for virtual application.
         */
        virtualDirectories?: pulumi.Input<pulumi.Input<VirtualDirectoryArgs>[]>;
        /**
         * Virtual path.
         */
        virtualPath?: pulumi.Input<string>;
    }

    /**
     * Directory for virtual application.
     */
    export interface VirtualDirectoryArgs {
        /**
         * Physical path.
         */
        physicalPath?: pulumi.Input<string>;
        /**
         * Path to virtual application.
         */
        virtualPath?: pulumi.Input<string>;
    }

    /**
     * Specification for using a Virtual Network.
     */
    export interface VirtualNetworkProfileArgs {
        /**
         * Resource id of the Virtual Network.
         */
        id: pulumi.Input<string>;
        /**
         * Subnet within the Virtual Network.
         */
        subnet?: pulumi.Input<string>;
    }
