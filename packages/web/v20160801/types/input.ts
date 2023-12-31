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
         * A rule based on status codes.
         */
        statusCodes?: pulumi.Input<pulumi.Input<StatusCodesBasedTriggerArgs>[]>;
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
         * <code>true</code> if quotas should be ignored; otherwise, <code>false</code>.
         */
        ignoreQuotas?: pulumi.Input<boolean>;
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
     * Cross-Origin Resource Sharing (CORS) settings for the app.
     */
    export interface CorsSettingsArgs {
        /**
         * Gets or sets the list of origins that should be allowed to make cross-origin
         * calls (for example: http://example.com:12345). Use "*" to allow all.
         */
        allowedOrigins?: pulumi.Input<pulumi.Input<string>[]>;
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
     * Routing rules in production experiments.
     */
    export interface ExperimentsArgs {
        /**
         * List of ramp-up rules.
         */
        rampUpRules?: pulumi.Input<pulumi.Input<RampUpRuleArgs>[]>;
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
     * IP security restriction on an app.
     */
    export interface IpSecurityRestrictionArgs {
        /**
         * IP address the security restriction is valid for.
         */
        ipAddress: pulumi.Input<string>;
        /**
         * Subnet mask for the range of IP addresses the restriction is valid for.
         */
        subnetMask?: pulumi.Input<string>;
    }

    /**
     * Managed service identity.
     */
    export interface ManagedServiceIdentityArgs {
        /**
         * Type of managed service identity.
         */
        type?: pulumi.Input<string | enums.ManagedServiceIdentityType>;
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
         * Gets or sets a JSON string containing a list of tags that are in the allowed list for use by the push registration endpoint.
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
         * In auto ramp up scenario this is the step to add/remove from <code>ReroutePercentage</code> until it reaches 
         * <code>MinReroutePercentage</code> or <code>MaxReroutePercentage</code>. Site metrics are checked every N minutes specified in <code>ChangeIntervalInMinutes</code>.
         * Custom decision algorithm can be provided in TiPCallback site extension which URL can be specified in <code>ChangeDecisionCallbackUrl</code>.
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
     * Configuration of an App Service app.
     */
    export interface SiteConfigArgs {
        /**
         * <code>true</code> if Always On is enabled; otherwise, <code>false</code>.
         */
        alwaysOn?: pulumi.Input<boolean>;
        /**
         * Information about the formal API definition for the app.
         */
        apiDefinition?: pulumi.Input<ApiDefinitionInfoArgs>;
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
         * This is work around for polymorphic types.
         */
        experiments?: pulumi.Input<ExperimentsArgs>;
        /**
         * Handler mappings.
         */
        handlerMappings?: pulumi.Input<pulumi.Input<HandlerMappingArgs>[]>;
        /**
         * Http20Enabled: configures a web site to allow clients to connect over http2.0
         */
        http20Enabled?: pulumi.Input<boolean>;
        /**
         * <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>.
         */
        httpLoggingEnabled?: pulumi.Input<boolean>;
        /**
         * IP security restrictions.
         */
        ipSecurityRestrictions?: pulumi.Input<pulumi.Input<IpSecurityRestrictionArgs>[]>;
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
         * MinTlsVersion: configures the minimum version of TLS required for SSL requests
         */
        minTlsVersion?: pulumi.Input<string | enums.SupportedTlsVersions>;
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
         * <code>true</code> if WebSocket is enabled; otherwise, <code>false</code>.
         */
        webSocketsEnabled?: pulumi.Input<boolean>;
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
     * Trigger based on request execution time.
     */
    export interface SlowRequestsBasedTriggerArgs {
        /**
         * Request Count.
         */
        count?: pulumi.Input<number>;
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
     * Details about app recovery operation.
     */
    export interface SnapshotRecoveryRequestArgs {
        /**
         * If true, custom hostname conflicts will be ignored when recovering to a target web app.
         * This setting is only necessary when RecoverConfiguration is enabled.
         */
        ignoreConflictingHostNames?: pulumi.Input<boolean>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
        /**
         * If <code>true</code> the recovery operation can overwrite source app; otherwise, <code>false</code>.
         */
        overwrite: pulumi.Input<boolean>;
        /**
         * If true, site configuration, in addition to content, will be reverted.
         */
        recoverConfiguration?: pulumi.Input<boolean>;
        /**
         * Specifies the web app that snapshot contents will be written to.
         */
        recoveryTarget?: pulumi.Input<SnapshotRecoveryTargetArgs>;
        /**
         * Point in time in which the app recovery should be attempted, formatted as a DateTime string.
         */
        snapshotTime?: pulumi.Input<string>;
    }

    /**
     * Specifies the web app that snapshot contents will be written to.
     */
    export interface SnapshotRecoveryTargetArgs {
        /**
         * ARM resource ID of the target app. 
         * /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName} for production slots and 
         * /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slotName} for other slots.
         */
        id?: pulumi.Input<string>;
        /**
         * Geographical location of the target web app, e.g. SouthEastAsia, SouthCentralUS
         */
        location?: pulumi.Input<string>;
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
