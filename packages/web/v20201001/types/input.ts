import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface AllowedAudiencesValidationArgs {
        allowedAudiences?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
    }

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

    export interface AppRegistrationArgs {
        appId?: pulumi.Input<string>;
        appSecretSettingName?: pulumi.Input<string>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
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

    export interface AuthPlatformArgs {
        configFilePath?: pulumi.Input<string>;
        enabled?: pulumi.Input<boolean>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
        runtimeVersion?: pulumi.Input<string>;
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

    export interface AzureActiveDirectoryArgs {
        enabled?: pulumi.Input<boolean>;
        isAutoProvisioned?: pulumi.Input<boolean>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
        login?: pulumi.Input<AzureActiveDirectoryLoginArgs>;
        registration?: pulumi.Input<AzureActiveDirectoryRegistrationArgs>;
        validation?: pulumi.Input<AzureActiveDirectoryValidationArgs>;
    }

    export interface AzureActiveDirectoryLoginArgs {
        disableWWWAuthenticate?: pulumi.Input<boolean>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
        loginParameters?: pulumi.Input<pulumi.Input<string>[]>;
    }

    export interface AzureActiveDirectoryRegistrationArgs {
        clientId?: pulumi.Input<string>;
        clientSecretCertificateThumbprint?: pulumi.Input<string>;
        clientSecretSettingName?: pulumi.Input<string>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
        openIdIssuer?: pulumi.Input<string>;
    }

    export interface AzureActiveDirectoryValidationArgs {
        allowedAudiences?: pulumi.Input<pulumi.Input<string>[]>;
        jwtClaimChecks?: pulumi.Input<JwtClaimChecksArgs>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
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

    export interface BlobStorageTokenStoreArgs {
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
        sasUrlSettingName?: pulumi.Input<string>;
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

    export interface ClientRegistrationArgs {
        clientId?: pulumi.Input<string>;
        clientSecretSettingName?: pulumi.Input<string>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
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

    export interface CookieExpirationArgs {
        convention?: pulumi.Input<enums.CookieExpirationConvention>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
        timeToExpiration?: pulumi.Input<string>;
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

    export interface CustomOpenIdConnectProviderArgs {
        enabled?: pulumi.Input<boolean>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
        login?: pulumi.Input<OpenIdConnectLoginArgs>;
        registration?: pulumi.Input<OpenIdConnectRegistrationArgs>;
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
     * Routing rules in production experiments.
     */
    export interface ExperimentsArgs {
        /**
         * List of ramp-up rules.
         */
        rampUpRules?: pulumi.Input<pulumi.Input<RampUpRuleArgs>[]>;
    }

    export interface FacebookArgs {
        enabled?: pulumi.Input<boolean>;
        graphApiVersion?: pulumi.Input<string>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
        login?: pulumi.Input<LoginScopesArgs>;
        registration?: pulumi.Input<AppRegistrationArgs>;
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

    export interface FileSystemTokenStoreArgs {
        directory?: pulumi.Input<string>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
    }

    export interface ForwardProxyArgs {
        convention?: pulumi.Input<enums.ForwardProxyConvention>;
        customHostHeaderName?: pulumi.Input<string>;
        customProtoHeaderName?: pulumi.Input<string>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
    }

    export interface GitHubArgs {
        enabled?: pulumi.Input<boolean>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
        login?: pulumi.Input<LoginScopesArgs>;
        registration?: pulumi.Input<ClientRegistrationArgs>;
    }

    export interface GlobalValidationArgs {
        excludedPaths?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
        redirectToProvider?: pulumi.Input<string>;
        requireAuthentication?: pulumi.Input<boolean>;
        unauthenticatedClientAction?: pulumi.Input<enums.UnauthenticatedClientActionV2>;
    }

    export interface GoogleArgs {
        enabled?: pulumi.Input<boolean>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
        login?: pulumi.Input<LoginScopesArgs>;
        registration?: pulumi.Input<ClientRegistrationArgs>;
        validation?: pulumi.Input<AllowedAudiencesValidationArgs>;
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

    export interface HttpSettingsArgs {
        forwardProxy?: pulumi.Input<ForwardProxyArgs>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
        requireHttps?: pulumi.Input<boolean>;
        routes?: pulumi.Input<HttpSettingsRoutesArgs>;
    }

    export interface HttpSettingsRoutesArgs {
        apiPrefix?: pulumi.Input<string>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
    }

    export interface IdentityProvidersArgs {
        azureActiveDirectory?: pulumi.Input<AzureActiveDirectoryArgs>;
        customOpenIdConnectProviders?: pulumi.Input<{[key: string]: pulumi.Input<CustomOpenIdConnectProviderArgs>}>;
        facebook?: pulumi.Input<FacebookArgs>;
        gitHub?: pulumi.Input<GitHubArgs>;
        google?: pulumi.Input<GoogleArgs>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
        twitter?: pulumi.Input<TwitterArgs>;
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

    export interface JwtClaimChecksArgs {
        allowedClientApplications?: pulumi.Input<pulumi.Input<string>[]>;
        allowedGroups?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
    }

    export interface LoginArgs {
        allowedExternalRedirectUrls?: pulumi.Input<pulumi.Input<string>[]>;
        cookieExpiration?: pulumi.Input<CookieExpirationArgs>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
        nonce?: pulumi.Input<NonceArgs>;
        preserveUrlFragmentsForLogins?: pulumi.Input<boolean>;
        routes?: pulumi.Input<LoginRoutesArgs>;
        tokenStore?: pulumi.Input<TokenStoreArgs>;
    }

    export interface LoginRoutesArgs {
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
        logoutEndpoint?: pulumi.Input<string>;
    }

    export interface LoginScopesArgs {
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
        scopes?: pulumi.Input<pulumi.Input<string>[]>;
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
     * Network access control entry.
     */
    export interface NetworkAccessControlEntryArgs {
        /**
         * Action object.
         */
        action?: pulumi.Input<enums.AccessControlEntryAction>;
        /**
         * Description of network access control entry.
         */
        description?: pulumi.Input<string>;
        /**
         * Order of precedence.
         */
        order?: pulumi.Input<number>;
        /**
         * Remote subnet.
         */
        remoteSubnet?: pulumi.Input<string>;
    }

    export interface NonceArgs {
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
        nonceExpirationInterval?: pulumi.Input<string>;
        validateNonce?: pulumi.Input<boolean>;
    }

    export interface OpenIdConnectClientCredentialArgs {
        clientSecretSettingName?: pulumi.Input<string>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
        method?: pulumi.Input<enums.ClientCredentialMethod>;
    }

    export interface OpenIdConnectConfigArgs {
        authorizationEndpoint?: pulumi.Input<string>;
        certificationUri?: pulumi.Input<string>;
        issuer?: pulumi.Input<string>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
        tokenEndpoint?: pulumi.Input<string>;
        wellKnownOpenIdConfiguration?: pulumi.Input<string>;
    }

    export interface OpenIdConnectLoginArgs {
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
        nameClaimType?: pulumi.Input<string>;
        scopes?: pulumi.Input<pulumi.Input<string>[]>;
    }

    export interface OpenIdConnectRegistrationArgs {
        clientCredential?: pulumi.Input<OpenIdConnectClientCredentialArgs>;
        clientId?: pulumi.Input<string>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
        openIdConnectConfiguration?: pulumi.Input<OpenIdConnectConfigArgs>;
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
         * State of FTP / FTPS service
         */
        ftpsState?: pulumi.Input<string | enums.FtpsState>;
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
         * Managed Service Identity Id
         */
        managedServiceIdentityId?: pulumi.Input<number>;
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
         * Version of PowerShell.
         */
        powerShellVersion?: pulumi.Input<string>;
        /**
         * Number of preWarmed instances.
         * This setting only applies to the Consumption and Elastic Plans
         */
        preWarmedInstanceCount?: pulumi.Input<number>;
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
         * The path to the api code within the repository.
         */
        apiLocation?: pulumi.Input<string>;
        /**
         * The path of the app artifacts after building.
         */
        appArtifactLocation?: pulumi.Input<string>;
        /**
         * The path to the app code within the repository.
         */
        appLocation?: pulumi.Input<string>;
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

    export interface TokenStoreArgs {
        azureBlobStorage?: pulumi.Input<BlobStorageTokenStoreArgs>;
        enabled?: pulumi.Input<boolean>;
        fileSystem?: pulumi.Input<FileSystemTokenStoreArgs>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
        tokenRefreshExtensionHours?: pulumi.Input<number>;
    }

    export interface TwitterArgs {
        enabled?: pulumi.Input<boolean>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
        registration?: pulumi.Input<TwitterRegistrationArgs>;
    }

    export interface TwitterRegistrationArgs {
        consumerKey?: pulumi.Input<string>;
        consumerSecretSettingName?: pulumi.Input<string>;
        /**
         * Kind of resource.
         */
        kind?: pulumi.Input<string>;
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
        id?: pulumi.Input<string>;
        /**
         * Subnet within the Virtual Network.
         */
        subnet?: pulumi.Input<string>;
    }

    /**
     * Worker pool of an App Service Environment.
     */
    export interface WorkerPoolArgs {
        /**
         * Shared or dedicated app hosting.
         */
        computeMode?: pulumi.Input<enums.ComputeModeOptions>;
        /**
         * Number of instances in the worker pool.
         */
        workerCount?: pulumi.Input<number>;
        /**
         * VM size of the worker pool instances.
         */
        workerSize?: pulumi.Input<string>;
        /**
         * Worker size ID for referencing this worker pool.
         */
        workerSizeId?: pulumi.Input<number>;
    }
