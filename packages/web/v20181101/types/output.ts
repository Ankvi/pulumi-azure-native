import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Information about the formal API definition for the app.
     */
    export interface ApiDefinitionInfoResponse {
        /**
         * The URL of the API definition.
         */
        url?: string;
    }

    /**
     * Actions which to take by the auto-heal module when a rule is triggered.
     */
    export interface AutoHealActionsResponse {
        /**
         * Predefined action to be taken.
         */
        actionType?: string;
        /**
         * Custom action to be taken.
         */
        customAction?: AutoHealCustomActionResponse;
        /**
         * Minimum time the process must execute
         * before taking the action
         */
        minProcessExecutionTime?: string;
    }

    /**
     * Custom action to be executed
     * when an auto heal rule is triggered.
     */
    export interface AutoHealCustomActionResponse {
        /**
         * Executable to be run.
         */
        exe?: string;
        /**
         * Parameters for the executable.
         */
        parameters?: string;
    }

    /**
     * Rules that can be defined for auto-heal.
     */
    export interface AutoHealRulesResponse {
        /**
         * Actions to be executed when a rule is triggered.
         */
        actions?: AutoHealActionsResponse;
        /**
         * Conditions that describe when to execute the auto-heal actions.
         */
        triggers?: AutoHealTriggersResponse;
    }

    /**
     * Triggers for auto-heal.
     */
    export interface AutoHealTriggersResponse {
        /**
         * A rule based on private bytes.
         */
        privateBytesInKB?: number;
        /**
         * A rule based on total requests.
         */
        requests?: RequestsBasedTriggerResponse;
        /**
         * A rule based on request execution time.
         */
        slowRequests?: SlowRequestsBasedTriggerResponse;
        /**
         * A rule based on status codes.
         */
        statusCodes?: StatusCodesBasedTriggerResponse[];
    }

    /**
     * Azure Files or Blob Storage access information value for dictionary storage.
     */
    export interface AzureStorageInfoValueResponse {
        /**
         * Access key for the storage account.
         */
        accessKey?: string;
        /**
         * Name of the storage account.
         */
        accountName?: string;
        /**
         * Path to mount the storage within the site's runtime environment.
         */
        mountPath?: string;
        /**
         * Name of the file share (container name, for Blob storage).
         */
        shareName?: string;
        /**
         * State of the storage account.
         */
        state: string;
        /**
         * Type of storage.
         */
        type?: string;
    }

    /**
     * Database connection string information.
     */
    export interface ConnStringInfoResponse {
        /**
         * Connection string value.
         */
        connectionString?: string;
        /**
         * Name of connection string.
         */
        name?: string;
        /**
         * Type of database.
         */
        type?: string;
    }

    /**
     * Cross-Origin Resource Sharing (CORS) settings for the app.
     */
    export interface CorsSettingsResponse {
        /**
         * Gets or sets the list of origins that should be allowed to make cross-origin
         * calls (for example: http://example.com:12345). Use "*" to allow all.
         */
        allowedOrigins?: string[];
        /**
         * Gets or sets whether CORS requests with credentials are allowed. See 
         * https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Requests_with_credentials
         * for more details.
         */
        supportCredentials?: boolean;
    }

    /**
     * Database backup settings.
     */
    export interface DatabaseBackupSettingResponse {
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
        databaseType: string;
        name?: string;
    }

    /**
     * Routing rules in production experiments.
     */
    export interface ExperimentsResponse {
        /**
         * List of ramp-up rules.
         */
        rampUpRules?: RampUpRuleResponse[];
    }

    /**
     * A global distribution definition.
     */
    export interface GeoDistributionResponse {
        /**
         * Location.
         */
        location?: string;
        /**
         * NumberOfWorkers.
         */
        numberOfWorkers?: number;
    }

    /**
     * The IIS handler mappings used to define which handler processes HTTP requests with certain extension. 
     * For example, it is used to configure php-cgi.exe process to handle all HTTP requests with *.php extension.
     */
    export interface HandlerMappingResponse {
        /**
         * Command-line arguments to be passed to the script processor.
         */
        arguments?: string;
        /**
         * Requests with this extension will be handled using the specified FastCGI application.
         */
        extension?: string;
        /**
         * The absolute path to the FastCGI application.
         */
        scriptProcessor?: string;
    }

    /**
     * SSL-enabled hostname.
     */
    export interface HostNameSslStateResponse {
        /**
         * Indicates whether the hostname is a standard or repository hostname.
         */
        hostType?: string;
        /**
         * Hostname.
         */
        name?: string;
        /**
         * SSL type.
         */
        sslState?: string;
        /**
         * SSL certificate thumbprint.
         */
        thumbprint?: string;
        /**
         * Set to <code>true</code> to update existing hostname.
         */
        toUpdate?: boolean;
        /**
         * Virtual IP address assigned to the hostname if IP based SSL is enabled.
         */
        virtualIP?: string;
    }

    /**
     * Specification for an App Service Environment to use for this resource.
     */
    export interface HostingEnvironmentProfileResponse {
        /**
         * Resource ID of the App Service Environment.
         */
        id?: string;
        /**
         * Name of the App Service Environment.
         */
        name: string;
        /**
         * Resource type of the App Service Environment.
         */
        type: string;
    }

    /**
     * IP security restriction on an app.
     */
    export interface IpSecurityRestrictionResponse {
        /**
         * Allow or Deny access for this IP range.
         */
        action?: string;
        /**
         * IP restriction rule description.
         */
        description?: string;
        /**
         * IP address the security restriction is valid for.
         * It can be in form of pure ipv4 address (required SubnetMask property) or
         * CIDR notation such as ipv4/mask (leading bit match). For CIDR,
         * SubnetMask property must not be specified.
         */
        ipAddress?: string;
        /**
         * IP restriction rule name.
         */
        name?: string;
        /**
         * Priority of IP restriction rule.
         */
        priority?: number;
        /**
         * Subnet mask for the range of IP addresses the restriction is valid for.
         */
        subnetMask?: string;
        /**
         * (internal) Subnet traffic tag
         */
        subnetTrafficTag?: number;
        /**
         * Defines what this IP filter will be used for. This is to support IP filtering on proxies.
         */
        tag?: string;
        /**
         * Virtual network resource id
         */
        vnetSubnetResourceId?: string;
        /**
         * (internal) Vnet traffic tag
         */
        vnetTrafficTag?: number;
    }

    /**
     * Managed service identity.
     */
    export interface ManagedServiceIdentityResponse {
        /**
         * Principal Id of managed service identity.
         */
        principalId: string;
        /**
         * Tenant of managed service identity.
         */
        tenantId: string;
        /**
         * Type of managed service identity.
         */
        type?: string;
        /**
         * The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}
         */
        userAssignedIdentities?: {[key: string]: ManagedServiceIdentityResponseUserAssignedIdentities};
    }

    export interface ManagedServiceIdentityResponseUserAssignedIdentities {
        /**
         * Client Id of user assigned identity
         */
        clientId: string;
        /**
         * Principal Id of user assigned identity
         */
        principalId: string;
    }

    /**
     * Name value pair.
     */
    export interface NameValuePairResponse {
        /**
         * Pair name.
         */
        name?: string;
        /**
         * Pair value.
         */
        value?: string;
    }

    /**
     * Push settings for the App.
     */
    export interface PushSettingsResponse {
        /**
         * Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint.
         */
        dynamicTagsJson?: string;
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Gets or sets a flag indicating whether the Push endpoint is enabled.
         */
        isPushEnabled: boolean;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        /**
         * Gets or sets a JSON string containing a list of tags that are in the allowed list for use by the push registration endpoint.
         */
        tagWhitelistJson?: string;
        /**
         * Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.
         * Tags can consist of alphanumeric characters and the following:
         * '_', '@', '#', '.', ':', '-'. 
         * Validation should be performed at the PushRequestHandler.
         */
        tagsRequiringAuth?: string;
        /**
         * Resource type.
         */
        type: string;
    }

    /**
     * Routing rules for ramp up testing. This rule allows to redirect static traffic % to a slot or to gradually change routing % based on performance.
     */
    export interface RampUpRuleResponse {
        /**
         * Hostname of a slot to which the traffic will be redirected if decided to. E.g. myapp-stage.azurewebsites.net.
         */
        actionHostName?: string;
        /**
         * Custom decision algorithm can be provided in TiPCallback site extension which URL can be specified. See TiPCallback site extension for the scaffold and contracts.
         * https://www.siteextensions.net/packages/TiPCallback/
         */
        changeDecisionCallbackUrl?: string;
        /**
         * Specifies interval in minutes to reevaluate ReroutePercentage.
         */
        changeIntervalInMinutes?: number;
        /**
         * In auto ramp up scenario this is the step to add/remove from <code>ReroutePercentage</code> until it reaches 
         * <code>MinReroutePercentage</code> or <code>MaxReroutePercentage</code>. Site metrics are checked every N minutes specified in <code>ChangeIntervalInMinutes</code>.
         * Custom decision algorithm can be provided in TiPCallback site extension which URL can be specified in <code>ChangeDecisionCallbackUrl</code>.
         */
        changeStep?: number;
        /**
         * Specifies upper boundary below which ReroutePercentage will stay.
         */
        maxReroutePercentage?: number;
        /**
         * Specifies lower boundary above which ReroutePercentage will stay.
         */
        minReroutePercentage?: number;
        /**
         * Name of the routing rule. The recommended name would be to point to the slot which will receive the traffic in the experiment.
         */
        name?: string;
        /**
         * Percentage of the traffic which will be redirected to <code>ActionHostName</code>.
         */
        reroutePercentage?: number;
    }

    /**
     * Trigger based on total requests.
     */
    export interface RequestsBasedTriggerResponse {
        /**
         * Request Count.
         */
        count?: number;
        /**
         * Time interval.
         */
        timeInterval?: string;
    }

    /**
     * Configuration of an App Service app.
     */
    export interface SiteConfigResponse {
        /**
         * <code>true</code> if Always On is enabled; otherwise, <code>false</code>.
         */
        alwaysOn?: boolean;
        /**
         * Information about the formal API definition for the app.
         */
        apiDefinition?: ApiDefinitionInfoResponse;
        /**
         * App command line to launch.
         */
        appCommandLine?: string;
        /**
         * Application settings.
         */
        appSettings?: NameValuePairResponse[];
        /**
         * <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>.
         */
        autoHealEnabled?: boolean;
        /**
         * Auto Heal rules.
         */
        autoHealRules?: AutoHealRulesResponse;
        /**
         * Auto-swap slot name.
         */
        autoSwapSlotName?: string;
        /**
         * User-provided Azure storage accounts.
         */
        azureStorageAccounts?: {[key: string]: AzureStorageInfoValueResponse};
        /**
         * Connection strings.
         */
        connectionStrings?: ConnStringInfoResponse[];
        /**
         * Cross-Origin Resource Sharing (CORS) settings.
         */
        cors?: CorsSettingsResponse;
        /**
         * Default documents.
         */
        defaultDocuments?: string[];
        /**
         * <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>.
         */
        detailedErrorLoggingEnabled?: boolean;
        /**
         * Document root.
         */
        documentRoot?: string;
        /**
         * This is work around for polymorphic types.
         */
        experiments?: ExperimentsResponse;
        /**
         * State of FTP / FTPS service
         */
        ftpsState?: string;
        /**
         * Handler mappings.
         */
        handlerMappings?: HandlerMappingResponse[];
        /**
         * Http20Enabled: configures a web site to allow clients to connect over http2.0
         */
        http20Enabled?: boolean;
        /**
         * <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>.
         */
        httpLoggingEnabled?: boolean;
        /**
         * IP security restrictions for main.
         */
        ipSecurityRestrictions?: IpSecurityRestrictionResponse[];
        /**
         * Java container.
         */
        javaContainer?: string;
        /**
         * Java container version.
         */
        javaContainerVersion?: string;
        /**
         * Java version.
         */
        javaVersion?: string;
        /**
         * Site limits.
         */
        limits?: SiteLimitsResponse;
        /**
         * Linux App Framework and version
         */
        linuxFxVersion?: string;
        /**
         * Site load balancing.
         */
        loadBalancing?: string;
        /**
         * <code>true</code> to enable local MySQL; otherwise, <code>false</code>.
         */
        localMySqlEnabled?: boolean;
        /**
         * HTTP logs directory size limit.
         */
        logsDirectorySizeLimit?: number;
        /**
         * Site MachineKey.
         */
        machineKey: SiteMachineKeyResponse;
        /**
         * Managed pipeline mode.
         */
        managedPipelineMode?: string;
        /**
         * Managed Service Identity Id
         */
        managedServiceIdentityId?: number;
        /**
         * MinTlsVersion: configures the minimum version of TLS required for SSL requests
         */
        minTlsVersion?: string;
        /**
         * .NET Framework version.
         */
        netFrameworkVersion?: string;
        /**
         * Version of Node.js.
         */
        nodeVersion?: string;
        /**
         * Number of workers.
         */
        numberOfWorkers?: number;
        /**
         * Version of PHP.
         */
        phpVersion?: string;
        /**
         * Publishing user name.
         */
        publishingUsername?: string;
        /**
         * Push endpoint settings.
         */
        push?: PushSettingsResponse;
        /**
         * Version of Python.
         */
        pythonVersion?: string;
        /**
         * <code>true</code> if remote debugging is enabled; otherwise, <code>false</code>.
         */
        remoteDebuggingEnabled?: boolean;
        /**
         * Remote debugging version.
         */
        remoteDebuggingVersion?: string;
        /**
         * <code>true</code> if request tracing is enabled; otherwise, <code>false</code>.
         */
        requestTracingEnabled?: boolean;
        /**
         * Request tracing expiration time.
         */
        requestTracingExpirationTime?: string;
        /**
         * Number of reserved instances.
         * This setting only applies to the Consumption Plan
         */
        reservedInstanceCount?: number;
        /**
         * IP security restrictions for scm.
         */
        scmIpSecurityRestrictions?: IpSecurityRestrictionResponse[];
        /**
         * IP security restrictions for scm to use main.
         */
        scmIpSecurityRestrictionsUseMain?: boolean;
        /**
         * SCM type.
         */
        scmType?: string;
        /**
         * Tracing options.
         */
        tracingOptions?: string;
        /**
         * <code>true</code> to use 32-bit worker process; otherwise, <code>false</code>.
         */
        use32BitWorkerProcess?: boolean;
        /**
         * Virtual applications.
         */
        virtualApplications?: VirtualApplicationResponse[];
        /**
         * Virtual Network name.
         */
        vnetName?: string;
        /**
         * <code>true</code> if WebSocket is enabled; otherwise, <code>false</code>.
         */
        webSocketsEnabled?: boolean;
        /**
         * Xenon App Framework and version
         */
        windowsFxVersion?: string;
        /**
         * Explicit Managed Service Identity Id
         */
        xManagedServiceIdentityId?: number;
    }
    /**
     * siteConfigResponseProvideDefaults sets the appropriate defaults for SiteConfigResponse
     */
    export function siteConfigResponseProvideDefaults(val: SiteConfigResponse): SiteConfigResponse {
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
    export interface SiteLimitsResponse {
        /**
         * Maximum allowed disk size usage in MB.
         */
        maxDiskSizeInMb?: number;
        /**
         * Maximum allowed memory usage in MB.
         */
        maxMemoryInMb?: number;
        /**
         * Maximum allowed CPU usage percentage.
         */
        maxPercentageCpu?: number;
    }

    /**
     * MachineKey of an app.
     */
    export interface SiteMachineKeyResponse {
        /**
         * Algorithm used for decryption.
         */
        decryption?: string;
        /**
         * Decryption key.
         */
        decryptionKey?: string;
        /**
         * MachineKey validation.
         */
        validation?: string;
        /**
         * Validation key.
         */
        validationKey?: string;
    }

    /**
     * The status of the last successful slot swap operation.
     */
    export interface SlotSwapStatusResponse {
        /**
         * The destination slot of the last swap operation.
         */
        destinationSlotName: string;
        /**
         * The source slot of the last swap operation.
         */
        sourceSlotName: string;
        /**
         * The time the last successful slot swap completed.
         */
        timestampUtc: string;
    }

    /**
     * Trigger based on request execution time.
     */
    export interface SlowRequestsBasedTriggerResponse {
        /**
         * Request Count.
         */
        count?: number;
        /**
         * Time interval.
         */
        timeInterval?: string;
        /**
         * Time taken.
         */
        timeTaken?: string;
    }

    /**
     * Trigger based on status code.
     */
    export interface StatusCodesBasedTriggerResponse {
        /**
         * Request Count.
         */
        count?: number;
        /**
         * HTTP status code.
         */
        status?: number;
        /**
         * Request Sub Status.
         */
        subStatus?: number;
        /**
         * Time interval.
         */
        timeInterval?: string;
        /**
         * Win32 error code.
         */
        win32Status?: number;
    }

    /**
     * Virtual application in an app.
     */
    export interface VirtualApplicationResponse {
        /**
         * Physical path.
         */
        physicalPath?: string;
        /**
         * <code>true</code> if preloading is enabled; otherwise, <code>false</code>.
         */
        preloadEnabled?: boolean;
        /**
         * Virtual directories for virtual application.
         */
        virtualDirectories?: VirtualDirectoryResponse[];
        /**
         * Virtual path.
         */
        virtualPath?: string;
    }

    /**
     * Directory for virtual application.
     */
    export interface VirtualDirectoryResponse {
        /**
         * Physical path.
         */
        physicalPath?: string;
        /**
         * Path to virtual application.
         */
        virtualPath?: string;
    }
