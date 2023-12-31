import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface AllowedAudiencesValidationResponse {
        allowedAudiences?: string[];
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
    }

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
     * Azure API management (APIM) configuration linked to the app.
     */
    export interface ApiManagementConfigResponse {
        /**
         * APIM-Api Identifier.
         */
        id?: string;
    }

    export interface AppRegistrationResponse {
        appId?: string;
        appSecretSettingName?: string;
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
    }

    /**
     * Application logs configuration.
     */
    export interface ApplicationLogsConfigResponse {
        /**
         * Application logs to blob storage configuration.
         */
        azureBlobStorage?: AzureBlobStorageApplicationLogsConfigResponse;
        /**
         * Application logs to azure table storage configuration.
         */
        azureTableStorage?: AzureTableStorageApplicationLogsConfigResponse;
        /**
         * Application logs to file system configuration.
         */
        fileSystem?: FileSystemApplicationLogsConfigResponse;
    }
    /**
     * applicationLogsConfigResponseProvideDefaults sets the appropriate defaults for ApplicationLogsConfigResponse
     */
    export function applicationLogsConfigResponseProvideDefaults(val: ApplicationLogsConfigResponse): ApplicationLogsConfigResponse {
        return {
            ...val,
            fileSystem: (val.fileSystem ? fileSystemApplicationLogsConfigResponseProvideDefaults(val.fileSystem) : undefined),
        };
    }

    /**
     * A wrapper for an ARM resource id
     */
    export interface ArmIdWrapperResponse {
        id: string;
    }

    export interface AuthPlatformResponse {
        configFilePath?: string;
        enabled?: boolean;
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        runtimeVersion?: string;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
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

    export interface AzureActiveDirectoryLoginResponse {
        disableWWWAuthenticate?: boolean;
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        loginParameters?: string[];
        /**
         * Resource Name.
         */
        name: string;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
    }

    export interface AzureActiveDirectoryRegistrationResponse {
        clientId?: string;
        clientSecretCertificateThumbprint?: string;
        clientSecretSettingName?: string;
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        openIdIssuer?: string;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
    }

    export interface AzureActiveDirectoryResponse {
        enabled?: boolean;
        /**
         * Resource Id.
         */
        id: string;
        isAutoProvisioned?: boolean;
        /**
         * Kind of resource.
         */
        kind?: string;
        login?: AzureActiveDirectoryLoginResponse;
        /**
         * Resource Name.
         */
        name: string;
        registration?: AzureActiveDirectoryRegistrationResponse;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
        validation?: AzureActiveDirectoryValidationResponse;
    }

    export interface AzureActiveDirectoryValidationResponse {
        allowedAudiences?: string[];
        /**
         * Resource Id.
         */
        id: string;
        jwtClaimChecks?: JwtClaimChecksResponse;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
    }

    /**
     * Application logs azure blob storage configuration.
     */
    export interface AzureBlobStorageApplicationLogsConfigResponse {
        /**
         * Log level.
         */
        level?: string;
        /**
         * Retention in days.
         * Remove blobs older than X days.
         * 0 or lower means no retention.
         */
        retentionInDays?: number;
        /**
         * SAS url to a azure blob container with read/write/list/delete permissions.
         */
        sasUrl?: string;
    }

    /**
     * Http logs to azure blob storage configuration.
     */
    export interface AzureBlobStorageHttpLogsConfigResponse {
        /**
         * True if configuration is enabled, false if it is disabled and null if configuration is not set.
         */
        enabled?: boolean;
        /**
         * Retention in days.
         * Remove blobs older than X days.
         * 0 or lower means no retention.
         */
        retentionInDays?: number;
        /**
         * SAS url to a azure blob container with read/write/list/delete permissions.
         */
        sasUrl?: string;
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
     * Application logs to Azure table storage configuration.
     */
    export interface AzureTableStorageApplicationLogsConfigResponse {
        /**
         * Log level.
         */
        level?: string;
        /**
         * SAS URL to an Azure table with add/query/delete permissions.
         */
        sasUrl: string;
    }

    /**
     * Backup description.
     */
    export interface BackupItemResponse {
        /**
         * Id of the backup.
         */
        backupId: number;
        /**
         * Name of the blob which contains data for this backup.
         */
        blobName: string;
        /**
         * Unique correlation identifier. Please use this along with the timestamp while communicating with Azure support.
         */
        correlationId: string;
        /**
         * Timestamp of the backup creation.
         */
        created: string;
        /**
         * List of databases included in the backup.
         */
        databases: DatabaseBackupSettingResponse[];
        /**
         * Timestamp when this backup finished.
         */
        finishedTimeStamp: string;
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Timestamp of a last restore operation which used this backup.
         */
        lastRestoreTimeStamp: string;
        /**
         * Details regarding this backup. Might contain an error message.
         */
        log: string;
        /**
         * Resource Name.
         */
        name: string;
        /**
         * True if this backup has been created due to a schedule being triggered.
         */
        scheduled: boolean;
        /**
         * Size of the backup in bytes.
         */
        sizeInBytes: number;
        /**
         * Backup status.
         */
        status: string;
        /**
         * SAS URL for the storage account container which contains this backup.
         */
        storageAccountUrl: string;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
        /**
         * Size of the original web app which has been backed up.
         */
        websiteSizeInBytes: number;
    }

    /**
     * Description of a backup schedule. Describes how often should be the backup performed and what should be the retention policy.
     */
    export interface BackupScheduleResponse {
        /**
         * How often the backup should be executed (e.g. for weekly backup, this should be set to 7 and FrequencyUnit should be set to Day)
         */
        frequencyInterval: number;
        /**
         * The unit of time for how often the backup should be executed (e.g. for weekly backup, this should be set to Day and FrequencyInterval should be set to 7)
         */
        frequencyUnit: string;
        /**
         * True if the retention policy should always keep at least one backup in the storage account, regardless how old it is; false otherwise.
         */
        keepAtLeastOneBackup: boolean;
        /**
         * Last time when this schedule was triggered.
         */
        lastExecutionTime: string;
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
     * backupScheduleResponseProvideDefaults sets the appropriate defaults for BackupScheduleResponse
     */
    export function backupScheduleResponseProvideDefaults(val: BackupScheduleResponse): BackupScheduleResponse {
        return {
            ...val,
            frequencyInterval: (val.frequencyInterval) ?? 7,
            frequencyUnit: (val.frequencyUnit) ?? "Day",
            keepAtLeastOneBackup: (val.keepAtLeastOneBackup) ?? true,
            retentionPeriodInDays: (val.retentionPeriodInDays) ?? 30,
        };
    }

    export interface BlobStorageTokenStoreResponse {
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        sasUrlSettingName?: string;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
    }

    /**
     * Describes the capabilities/features allowed for a specific SKU.
     */
    export interface CapabilityResponse {
        /**
         * Name of the SKU capability.
         */
        name?: string;
        /**
         * Reason of the SKU capability.
         */
        reason?: string;
        /**
         * Value of the SKU capability.
         */
        value?: string;
    }

    export interface ClientRegistrationResponse {
        clientId?: string;
        clientSecretSettingName?: string;
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
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
     * Database connection string value to type pair.
     */
    export interface ConnStringValueTypePairResponse {
        /**
         * Type of database.
         */
        type: string;
        /**
         * Value of pair.
         */
        value: string;
    }

    export interface CookieExpirationResponse {
        convention?: string;
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        timeToExpiration?: string;
        /**
         * Resource type.
         */
        type: string;
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

    export interface CustomOpenIdConnectProviderResponse {
        enabled?: boolean;
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        login?: OpenIdConnectLoginResponse;
        /**
         * Resource Name.
         */
        name: string;
        registration?: OpenIdConnectRegistrationResponse;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
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
     * Enabled configuration.
     */
    export interface EnabledConfigResponse {
        /**
         * True if configuration is enabled, false if it is disabled and null if configuration is not set.
         */
        enabled?: boolean;
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

    export interface FacebookResponse {
        enabled?: boolean;
        graphApiVersion?: string;
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        login?: LoginScopesResponse;
        /**
         * Resource Name.
         */
        name: string;
        registration?: AppRegistrationResponse;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
    }

    /**
     * Application logs to file system configuration.
     */
    export interface FileSystemApplicationLogsConfigResponse {
        /**
         * Log level.
         */
        level?: string;
    }
    /**
     * fileSystemApplicationLogsConfigResponseProvideDefaults sets the appropriate defaults for FileSystemApplicationLogsConfigResponse
     */
    export function fileSystemApplicationLogsConfigResponseProvideDefaults(val: FileSystemApplicationLogsConfigResponse): FileSystemApplicationLogsConfigResponse {
        return {
            ...val,
            level: (val.level) ?? "Off",
        };
    }

    /**
     * Http logs to file system configuration.
     */
    export interface FileSystemHttpLogsConfigResponse {
        /**
         * True if configuration is enabled, false if it is disabled and null if configuration is not set.
         */
        enabled?: boolean;
        /**
         * Retention in days.
         * Remove files older than X days.
         * 0 or lower means no retention.
         */
        retentionInDays?: number;
        /**
         * Maximum size in megabytes that http log files can use.
         * When reached old log files will be removed to make space for new ones.
         * Value can range between 25 and 100.
         */
        retentionInMb?: number;
    }

    export interface FileSystemTokenStoreResponse {
        directory?: string;
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
    }

    export interface ForwardProxyResponse {
        convention?: string;
        customHostHeaderName?: string;
        customProtoHeaderName?: string;
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
    }

    export interface GitHubResponse {
        enabled?: boolean;
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        login?: LoginScopesResponse;
        /**
         * Resource Name.
         */
        name: string;
        registration?: ClientRegistrationResponse;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
    }

    export interface GlobalValidationResponse {
        excludedPaths?: string[];
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        redirectToProvider?: string;
        requireAuthentication?: boolean;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
        unauthenticatedClientAction?: string;
    }

    export interface GoogleResponse {
        enabled?: boolean;
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        login?: LoginScopesResponse;
        /**
         * Resource Name.
         */
        name: string;
        registration?: ClientRegistrationResponse;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
        validation?: AllowedAudiencesValidationResponse;
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
     * Http logs configuration.
     */
    export interface HttpLogsConfigResponse {
        /**
         * Http logs to azure blob storage configuration.
         */
        azureBlobStorage?: AzureBlobStorageHttpLogsConfigResponse;
        /**
         * Http logs to file system configuration.
         */
        fileSystem?: FileSystemHttpLogsConfigResponse;
    }

    export interface HttpSettingsResponse {
        forwardProxy?: ForwardProxyResponse;
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        requireHttps?: boolean;
        routes?: HttpSettingsRoutesResponse;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
    }

    export interface HttpSettingsRoutesResponse {
        apiPrefix?: string;
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
    }

    /**
     * A domain specific resource identifier.
     */
    export interface IdentifierResponse {
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
        /**
         * String representation of the identity.
         */
        value?: string;
    }

    export interface IdentityProvidersResponse {
        azureActiveDirectory?: AzureActiveDirectoryResponse;
        customOpenIdConnectProviders?: {[key: string]: CustomOpenIdConnectProviderResponse};
        facebook?: FacebookResponse;
        gitHub?: GitHubResponse;
        google?: GoogleResponse;
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        twitter?: TwitterResponse;
        /**
         * Resource type.
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
        headers?: {[key: string]: string[]};
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

    export interface JwtClaimChecksResponse {
        allowedClientApplications?: string[];
        allowedGroups?: string[];
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
    }

    export interface LoginResponse {
        allowedExternalRedirectUrls?: string[];
        cookieExpiration?: CookieExpirationResponse;
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        nonce?: NonceResponse;
        preserveUrlFragmentsForLogins?: boolean;
        routes?: LoginRoutesResponse;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        tokenStore?: TokenStoreResponse;
        /**
         * Resource type.
         */
        type: string;
    }

    export interface LoginRoutesResponse {
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        logoutEndpoint?: string;
        /**
         * Resource Name.
         */
        name: string;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
    }

    export interface LoginScopesResponse {
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        scopes?: string[];
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
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
     * Network access control entry.
     */
    export interface NetworkAccessControlEntryResponse {
        /**
         * Action object.
         */
        action?: string;
        /**
         * Description of network access control entry.
         */
        description?: string;
        /**
         * Order of precedence.
         */
        order?: number;
        /**
         * Remote subnet.
         */
        remoteSubnet?: string;
    }

    export interface NonceResponse {
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        nonceExpirationInterval?: string;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
        validateNonce?: boolean;
    }

    export interface OpenIdConnectClientCredentialResponse {
        clientSecretSettingName?: string;
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        method?: string;
        /**
         * Resource Name.
         */
        name: string;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
    }

    export interface OpenIdConnectConfigResponse {
        authorizationEndpoint?: string;
        certificationUri?: string;
        /**
         * Resource Id.
         */
        id: string;
        issuer?: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        tokenEndpoint?: string;
        /**
         * Resource type.
         */
        type: string;
        wellKnownOpenIdConfiguration?: string;
    }

    export interface OpenIdConnectLoginResponse {
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        nameClaimType?: string;
        scopes?: string[];
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
    }

    export interface OpenIdConnectRegistrationResponse {
        clientCredential?: OpenIdConnectClientCredentialResponse;
        clientId?: string;
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        openIdConnectConfiguration?: OpenIdConnectConfigResponse;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
    }

    /**
     * The state of a private link connection
     */
    export interface PrivateLinkConnectionStateResponse {
        /**
         * ActionsRequired for a private link connection
         */
        actionsRequired?: string;
        /**
         * Description of a private link connection
         */
        description?: string;
        /**
         * Status of a private link connection
         */
        status?: string;
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
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
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
         * In auto ramp up scenario this is the step to add/remove from <code>ReroutePercentage</code> until it reaches \n<code>MinReroutePercentage</code> or 
         * <code>MaxReroutePercentage</code>. Site metrics are checked every N minutes specified in <code>ChangeIntervalInMinutes</code>.\nCustom decision algorithm 
         * can be provided in TiPCallback site extension which URL can be specified in <code>ChangeDecisionCallbackUrl</code>.
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
         * Flag to use Managed Identity Creds for ACR pull
         */
        acrUseManagedIdentityCreds?: boolean;
        /**
         * If using user managed identity, the user managed identity ClientId
         */
        acrUserManagedIdentityID?: string;
        /**
         * <code>true</code> if Always On is enabled; otherwise, <code>false</code>.
         */
        alwaysOn?: boolean;
        /**
         * Information about the formal API definition for the app.
         */
        apiDefinition?: ApiDefinitionInfoResponse;
        /**
         * Azure API management settings linked to the app.
         */
        apiManagementConfig?: ApiManagementConfigResponse;
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
         * Health check path
         */
        healthCheckPath?: string;
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
         * Version of PowerShell.
         */
        powerShellVersion?: string;
        /**
         * Number of preWarmed instances.
         * This setting only applies to the Consumption and Elastic Plans
         */
        preWarmedInstanceCount?: number;
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
         * IP security restrictions for scm.
         */
        scmIpSecurityRestrictions?: IpSecurityRestrictionResponse[];
        /**
         * IP security restrictions for scm to use main.
         */
        scmIpSecurityRestrictionsUseMain?: boolean;
        /**
         * ScmMinTlsVersion: configures the minimum version of TLS required for SSL requests for SCM site
         */
        scmMinTlsVersion?: string;
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
         * The number of private ports assigned to this app. These will be assigned dynamically on runtime.
         */
        vnetPrivatePortsCount?: number;
        /**
         * Virtual Network Route All enabled. This causes all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied.
         */
        vnetRouteAllEnabled?: boolean;
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
     * Description of the App Service plan scale options.
     */
    export interface SkuCapacityResponse {
        /**
         * Default number of workers for this App Service plan SKU.
         */
        default?: number;
        /**
         * Maximum number of workers for this App Service plan SKU.
         */
        maximum?: number;
        /**
         * Minimum number of workers for this App Service plan SKU.
         */
        minimum?: number;
        /**
         * Available scale configurations for an App Service plan.
         */
        scaleType?: string;
    }

    /**
     * Description of a SKU for a scalable resource.
     */
    export interface SkuDescriptionResponse {
        /**
         * Capabilities of the SKU, e.g., is traffic manager enabled?
         */
        capabilities?: CapabilityResponse[];
        /**
         * Current number of instances assigned to the resource.
         */
        capacity?: number;
        /**
         * Family code of the resource SKU.
         */
        family?: string;
        /**
         * Locations of the SKU.
         */
        locations?: string[];
        /**
         * Name of the resource SKU.
         */
        name?: string;
        /**
         * Size specifier of the resource SKU.
         */
        size?: string;
        /**
         * Min, max, and default scale values of the SKU.
         */
        skuCapacity?: SkuCapacityResponse;
        /**
         * Service tier of the resource SKU.
         */
        tier?: string;
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
     * Stamp capacity information.
     */
    export interface StampCapacityResponse {
        /**
         * Available capacity (# of machines, bytes of storage etc...).
         */
        availableCapacity?: number;
        /**
         * Shared/dedicated workers.
         */
        computeMode?: string;
        /**
         * If <code>true</code>, it includes basic apps.
         * Basic apps are not used for capacity allocation.
         */
        excludeFromCapacityAllocation?: boolean;
        /**
         * <code>true</code> if capacity is applicable for all apps; otherwise, <code>false</code>.
         */
        isApplicableForAllComputeModes?: boolean;
        /**
         * Is this a linux stamp capacity
         */
        isLinux?: boolean;
        /**
         * Name of the stamp.
         */
        name?: string;
        /**
         * Shared or Dedicated.
         */
        siteMode?: string;
        /**
         * Total capacity (# of machines, bytes of storage etc...).
         */
        totalCapacity?: number;
        /**
         * Name of the unit.
         */
        unit?: string;
        /**
         * Size of the machines.
         */
        workerSize?: string;
        /**
         * Size ID of machines: 
         * 0 - Small
         * 1 - Medium
         * 2 - Large
         */
        workerSizeId?: number;
    }

    /**
     * Build properties for the static site.
     */
    export interface StaticSiteBuildPropertiesResponse {
        /**
         * The path to the api code within the repository.
         */
        apiLocation?: string;
        /**
         * The path of the app artifacts after building.
         */
        appArtifactLocation?: string;
        /**
         * The path to the app code within the repository.
         */
        appLocation?: string;
    }

    /**
     * Static Site User ARM resource.
     */
    export interface StaticSiteUserARMResourceResponse {
        /**
         * The display name for the static site user.
         */
        displayName: string;
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        /**
         * The identity provider for the static site user.
         */
        provider: string;
        /**
         * The roles for the static site user, in free-form string format
         */
        roles?: string;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
        /**
         * The user id for the static site user.
         */
        userId: string;
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

    export interface TokenStoreResponse {
        azureBlobStorage?: BlobStorageTokenStoreResponse;
        enabled?: boolean;
        fileSystem?: FileSystemTokenStoreResponse;
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        tokenRefreshExtensionHours?: number;
        /**
         * Resource type.
         */
        type: string;
    }

    export interface TwitterRegistrationResponse {
        consumerKey?: string;
        consumerSecretSettingName?: string;
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
    }

    export interface TwitterResponse {
        enabled?: boolean;
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        registration?: TwitterRegistrationResponse;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
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

    /**
     * Virtual IP mapping.
     */
    export interface VirtualIPMappingResponse {
        /**
         * Is virtual IP mapping in use.
         */
        inUse?: boolean;
        /**
         * Internal HTTP port.
         */
        internalHttpPort?: number;
        /**
         * Internal HTTPS port.
         */
        internalHttpsPort?: number;
        /**
         * name of the service that virtual IP is assigned to
         */
        serviceName?: string;
        /**
         * Virtual IP address.
         */
        virtualIP?: string;
    }

    /**
     * Specification for using a Virtual Network.
     */
    export interface VirtualNetworkProfileResponse {
        /**
         * Resource id of the Virtual Network.
         */
        id?: string;
        /**
         * Name of the Virtual Network (read-only).
         */
        name: string;
        /**
         * Subnet within the Virtual Network.
         */
        subnet?: string;
        /**
         * Resource type of the Virtual Network (read-only).
         */
        type: string;
    }

    /**
     * Virtual Network route contract used to pass routing information for a Virtual Network.
     */
    export interface VnetRouteResponse {
        /**
         * The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
         */
        endAddress?: string;
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        /**
         * The type of route this is:
         * DEFAULT - By default, every app has routes to the local address ranges specified by RFC1918
         * INHERITED - Routes inherited from the real Virtual Network routes
         * STATIC - Static route set on the app only
         *
         * These values will be used for syncing an app's routes with those from a Virtual Network.
         */
        routeType?: string;
        /**
         * The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
         */
        startAddress?: string;
        /**
         * The system metadata relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource type.
         */
        type: string;
    }

    /**
     * Worker pool of an App Service Environment.
     */
    export interface WorkerPoolResponse {
        /**
         * Shared or dedicated app hosting.
         */
        computeMode?: string;
        /**
         * Names of all instances in the worker pool (read only).
         */
        instanceNames: string[];
        /**
         * Number of instances in the worker pool.
         */
        workerCount?: number;
        /**
         * VM size of the worker pool instances.
         */
        workerSize?: string;
        /**
         * Worker size ID for referencing this worker pool.
         */
        workerSizeId?: number;
    }
