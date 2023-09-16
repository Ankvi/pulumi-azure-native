import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace web {
    /**
     * The configuration settings of the Allowed Audiences validation flow.
     */
    export interface AllowedAudiencesValidationArgs {
        /**
         * The configuration settings of the allowed list of audiences from which to validate the JWT token.
         */
        allowedAudiences?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The configuration settings of the Azure Active Directory allowed principals.
     */
    export interface AllowedPrincipalsArgs {
        /**
         * The list of the allowed groups.
         */
        groups?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The list of the allowed identities.
         */
        identities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    export interface ApiConnectionDefinitionPropertiesArgs {
        api?: pulumi.Input<ApiReferenceArgs>;
        /**
         * Timestamp of last connection change
         */
        changedTime?: pulumi.Input<string>;
        /**
         * Timestamp of the connection creation
         */
        createdTime?: pulumi.Input<string>;
        /**
         * Dictionary of custom parameter values
         */
        customParameterValues?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Display name
         */
        displayName?: pulumi.Input<string>;
        /**
         * Dictionary of nonsecret parameter values
         */
        nonSecretParameterValues?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Dictionary of parameter values
         */
        parameterValues?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Status of the connection
         */
        statuses?: pulumi.Input<pulumi.Input<ConnectionStatusDefinitionArgs>[]>;
        /**
         * Links to test the API connection
         */
        testLinks?: pulumi.Input<pulumi.Input<ApiConnectionTestLinkArgs>[]>;
    }

    /**
     * API connection properties
     */
    export interface ApiConnectionTestLinkArgs {
        /**
         * HTTP Method
         */
        method?: pulumi.Input<string>;
        /**
         * Test link request URI
         */
        requestUri?: pulumi.Input<string>;
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

    /**
     * OAuth settings for the connection provider
     */
    export interface ApiOAuthSettingsArgs {
        /**
         * Resource provider client id
         */
        clientId?: pulumi.Input<string>;
        /**
         * Client Secret needed for OAuth
         */
        clientSecret?: pulumi.Input<string>;
        /**
         * OAuth parameters key is the name of parameter
         */
        customParameters?: pulumi.Input<{[key: string]: pulumi.Input<ApiOAuthSettingsParameterArgs>}>;
        /**
         * Identity provider
         */
        identityProvider?: pulumi.Input<string>;
        /**
         * Read only properties for this oauth setting.
         */
        properties?: any;
        /**
         * Url
         */
        redirectUrl?: pulumi.Input<string>;
        /**
         * OAuth scopes
         */
        scopes?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * OAuth settings for the API
     */
    export interface ApiOAuthSettingsParameterArgs {
        /**
         * Options available to this parameter
         */
        options?: any;
        /**
         * UI definitions per culture as caller can specify the culture
         */
        uiDefinition?: any;
        /**
         * Value of the setting
         */
        value?: pulumi.Input<string>;
    }

    export interface ApiReferenceArgs {
        /**
         * Brand color
         */
        brandColor?: pulumi.Input<string>;
        /**
         * The custom API description
         */
        description?: pulumi.Input<string>;
        /**
         * The display name
         */
        displayName?: pulumi.Input<string>;
        /**
         * The icon URI
         */
        iconUri?: pulumi.Input<string>;
        /**
         * Resource reference id
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the API
         */
        name?: pulumi.Input<string>;
        /**
         * The JSON representation of the swagger
         */
        swagger?: any;
        /**
         * Resource reference type
         */
        type?: pulumi.Input<string>;
    }

    /**
     * The API backend service
     */
    export interface ApiResourceBackendServiceArgs {
        /**
         * The service URL
         */
        serviceUrl?: pulumi.Input<string>;
    }

    /**
     * API Definitions
     */
    export interface ApiResourceDefinitionsArgs {
        /**
         * The modified swagger URL
         */
        modifiedSwaggerUrl?: pulumi.Input<string>;
        /**
         * The original swagger URL
         */
        originalSwaggerUrl?: pulumi.Input<string>;
    }

    export interface AppLogsConfigurationArgs {
        destination?: pulumi.Input<string>;
        logAnalyticsConfiguration?: pulumi.Input<LogAnalyticsConfigurationArgs>;
    }

    /**
     * The configuration settings of the app registration for providers that have app ids and app secrets
     */
    export interface AppRegistrationArgs {
        /**
         * The App ID of the app used for login.
         */
        appId?: pulumi.Input<string>;
        /**
         * The app setting name that contains the app secret.
         */
        appSecretSettingName?: pulumi.Input<string>;
    }

    /**
     * The configuration settings of the Apple provider.
     */
    export interface AppleArgs {
        /**
         * <code>false</code> if the Apple provider should not be enabled despite the set registration; otherwise, <code>true</code>.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * The configuration settings of the login flow.
         */
        login?: pulumi.Input<LoginScopesArgs>;
        /**
         * The configuration settings of the Apple registration.
         */
        registration?: pulumi.Input<AppleRegistrationArgs>;
    }

    /**
     * The configuration settings of the registration for the Apple provider
     */
    export interface AppleRegistrationArgs {
        /**
         * The Client ID of the app used for login.
         */
        clientId?: pulumi.Input<string>;
        /**
         * The app setting name that contains the client secret.
         */
        clientSecretSettingName?: pulumi.Input<string>;
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
     * The configuration settings of the platform of App Service Authentication/Authorization.
     */
    export interface AuthPlatformArgs {
        /**
         * The path of the config file containing auth settings if they come from a file.
         * If the path is relative, base will the site's root directory.
         */
        configFilePath?: pulumi.Input<string>;
        /**
         * <code>true</code> if the Authentication / Authorization feature is enabled for the current app; otherwise, <code>false</code>.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * The RuntimeVersion of the Authentication / Authorization feature in use for the current app.
         * The setting in this value can control the behavior of certain features in the Authentication / Authorization module.
         */
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
     * The configuration settings of the Azure Active directory provider.
     */
    export interface AzureActiveDirectoryArgs {
        /**
         * <code>false</code> if the Azure Active Directory provider should not be enabled despite the set registration; otherwise, <code>true</code>.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * Gets a value indicating whether the Azure AD configuration was auto-provisioned using 1st party tooling.
         * This is an internal flag primarily intended to support the Azure Management Portal. Users should not
         * read or write to this property.
         */
        isAutoProvisioned?: pulumi.Input<boolean>;
        /**
         * The configuration settings of the Azure Active Directory login flow.
         */
        login?: pulumi.Input<AzureActiveDirectoryLoginArgs>;
        /**
         * The configuration settings of the Azure Active Directory app registration.
         */
        registration?: pulumi.Input<AzureActiveDirectoryRegistrationArgs>;
        /**
         * The configuration settings of the Azure Active Directory token validation flow.
         */
        validation?: pulumi.Input<AzureActiveDirectoryValidationArgs>;
    }

    /**
     * The configuration settings of the Azure Active Directory login flow.
     */
    export interface AzureActiveDirectoryLoginArgs {
        /**
         * <code>true</code> if the www-authenticate provider should be omitted from the request; otherwise, <code>false</code>.
         */
        disableWWWAuthenticate?: pulumi.Input<boolean>;
        /**
         * Login parameters to send to the OpenID Connect authorization endpoint when
         * a user logs in. Each parameter must be in the form "key=value".
         */
        loginParameters?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The configuration settings of the Azure Active Directory app registration.
     */
    export interface AzureActiveDirectoryRegistrationArgs {
        /**
         * The Client ID of this relying party application, known as the client_id.
         * This setting is required for enabling OpenID Connection authentication with Azure Active Directory or 
         * other 3rd party OpenID Connect providers.
         * More information on OpenID Connect: http://openid.net/specs/openid-connect-core-1_0.html
         */
        clientId?: pulumi.Input<string>;
        /**
         * An alternative to the client secret thumbprint, that is the issuer of a certificate used for signing purposes. This property acts as
         * a replacement for the Client Secret Certificate Thumbprint. It is also optional.
         */
        clientSecretCertificateIssuer?: pulumi.Input<string>;
        /**
         * An alternative to the client secret thumbprint, that is the subject alternative name of a certificate used for signing purposes. This property acts as
         * a replacement for the Client Secret Certificate Thumbprint. It is also optional.
         */
        clientSecretCertificateSubjectAlternativeName?: pulumi.Input<string>;
        /**
         * An alternative to the client secret, that is the thumbprint of a certificate used for signing purposes. This property acts as
         * a replacement for the Client Secret. It is also optional.
         */
        clientSecretCertificateThumbprint?: pulumi.Input<string>;
        /**
         * The app setting name that contains the client secret of the relying party application.
         */
        clientSecretSettingName?: pulumi.Input<string>;
        /**
         * The OpenID Connect Issuer URI that represents the entity which issues access tokens for this application.
         * When using Azure Active Directory, this value is the URI of the directory tenant, e.g. https://login.microsoftonline.com/v2.0/{tenant-guid}/.
         * This URI is a case-sensitive identifier for the token issuer.
         * More information on OpenID Connect Discovery: http://openid.net/specs/openid-connect-discovery-1_0.html
         */
        openIdIssuer?: pulumi.Input<string>;
    }

    /**
     * The configuration settings of the Azure Active Directory token validation flow.
     */
    export interface AzureActiveDirectoryValidationArgs {
        /**
         * The list of audiences that can make successful authentication/authorization requests.
         */
        allowedAudiences?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The configuration settings of the default authorization policy.
         */
        defaultAuthorizationPolicy?: pulumi.Input<DefaultAuthorizationPolicyArgs>;
        /**
         * The configuration settings of the checks that should be made while validating the JWT Claims.
         */
        jwtClaimChecks?: pulumi.Input<JwtClaimChecksArgs>;
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
     * The configuration settings of the Azure Static Web Apps provider.
     */
    export interface AzureStaticWebAppsArgs {
        /**
         * <code>false</code> if the Azure Static Web Apps provider should not be enabled despite the set registration; otherwise, <code>true</code>.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * The configuration settings of the Azure Static Web Apps registration.
         */
        registration?: pulumi.Input<AzureStaticWebAppsRegistrationArgs>;
    }

    /**
     * The configuration settings of the registration for the Azure Static Web Apps provider
     */
    export interface AzureStaticWebAppsRegistrationArgs {
        /**
         * The Client ID of the app used for login.
         */
        clientId?: pulumi.Input<string>;
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
     * The configuration settings of the storage of the tokens if blob storage is used.
     */
    export interface BlobStorageTokenStoreArgs {
        /**
         * The name of the app setting containing the SAS URL of the blob storage containing the tokens.
         */
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

    /**
     * The configuration settings of the app registration for providers that have client ids and client secrets
     */
    export interface ClientRegistrationArgs {
        /**
         * The Client ID of the app used for login.
         */
        clientId?: pulumi.Input<string>;
        /**
         * The app setting name that contains the client secret.
         */
        clientSecretSettingName?: pulumi.Input<string>;
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

    /**
     * Connection error
     */
    export interface ConnectionErrorArgs {
        /**
         * Code of the status
         */
        code?: pulumi.Input<string>;
        /**
         * Resource ETag
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource location
         */
        location?: pulumi.Input<string>;
        /**
         * Description of the status
         */
        message?: pulumi.Input<string>;
        /**
         * Resource tags
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    export interface ConnectionGatewayDefinitionPropertiesArgs {
        /**
         * The URI of the backend
         */
        backendUri?: pulumi.Input<string>;
        /**
         * The gateway installation reference
         */
        connectionGatewayInstallation?: pulumi.Input<ConnectionGatewayReferenceArgs>;
        /**
         * The gateway admin
         */
        contactInformation?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The gateway description
         */
        description?: pulumi.Input<string>;
        /**
         * The gateway display name
         */
        displayName?: pulumi.Input<string>;
        /**
         * The machine name of the gateway
         */
        machineName?: pulumi.Input<string>;
        /**
         * The gateway status
         */
        status?: any;
    }

    /**
     * The gateway installation reference
     */
    export interface ConnectionGatewayReferenceArgs {
        /**
         * Resource reference id
         */
        id?: pulumi.Input<string>;
        /**
         * Resource reference location
         */
        location?: pulumi.Input<string>;
        /**
         * Resource reference name
         */
        name?: pulumi.Input<string>;
        /**
         * Resource reference type
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Connection provider parameters
     */
    export interface ConnectionParameterArgs {
        /**
         * OAuth settings for the connection provider
         */
        oAuthSettings?: pulumi.Input<ApiOAuthSettingsArgs>;
        /**
         * Type of the parameter
         */
        type?: pulumi.Input<enums.ConnectionParameterType>;
    }

    /**
     * Connection status
     */
    export interface ConnectionStatusDefinitionArgs {
        /**
         * Connection error
         */
        error?: pulumi.Input<ConnectionErrorArgs>;
        /**
         * The gateway status
         */
        status?: pulumi.Input<string>;
        /**
         * Target of the error
         */
        target?: pulumi.Input<string>;
    }

    /**
     * Consent link definition
     */
    export interface ConsentLinkParameterDefinition {
        /**
         * AAD OID (user or group) if the principal type is ActiveDirectory. MSA PUID if the principal type is MicrosoftAccount
         */
        objectId?: string;
        /**
         * Name of the parameter in the connection provider's OAuth settings
         */
        parameterName?: string;
        /**
         * Name of the parameter in the connection provider's OAuth settings
         */
        redirectUrl?: string;
        /**
         * The tenant id
         */
        tenantId?: string;
    }

    /**
     * Consent link definition
     */
    export interface ConsentLinkParameterDefinitionArgs {
        /**
         * AAD OID (user or group) if the principal type is ActiveDirectory. MSA PUID if the principal type is MicrosoftAccount
         */
        objectId?: pulumi.Input<string>;
        /**
         * Name of the parameter in the connection provider's OAuth settings
         */
        parameterName?: pulumi.Input<string>;
        /**
         * Name of the parameter in the connection provider's OAuth settings
         */
        redirectUrl?: pulumi.Input<string>;
        /**
         * The tenant id
         */
        tenantId?: pulumi.Input<string>;
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
     * The configuration settings of the session cookie's expiration.
     */
    export interface CookieExpirationArgs {
        /**
         * The convention used when determining the session cookie's expiration.
         */
        convention?: pulumi.Input<enums.CookieExpirationConvention>;
        /**
         * The time after the request is made when the session cookie should expire.
         */
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

    /**
     * Custom API properties
     */
    export interface CustomApiPropertiesDefinitionArgs {
        /**
         * API Definitions
         */
        apiDefinitions?: pulumi.Input<ApiResourceDefinitionsArgs>;
        /**
         * The API type
         */
        apiType?: pulumi.Input<string | enums.ApiType>;
        /**
         * The API backend service
         */
        backendService?: pulumi.Input<ApiResourceBackendServiceArgs>;
        /**
         * Brand color
         */
        brandColor?: pulumi.Input<string>;
        /**
         * The custom API capabilities
         */
        capabilities?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Connection parameters
         */
        connectionParameters?: pulumi.Input<{[key: string]: pulumi.Input<ConnectionParameterArgs>}>;
        /**
         * The custom API description
         */
        description?: pulumi.Input<string>;
        /**
         * The display name
         */
        displayName?: pulumi.Input<string>;
        /**
         * The icon URI
         */
        iconUri?: pulumi.Input<string>;
        /**
         * Runtime URLs
         */
        runtimeUrls?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The JSON representation of the swagger
         */
        swagger?: any;
        /**
         * The WSDL definition
         */
        wsdlDefinition?: pulumi.Input<WsdlDefinitionArgs>;
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
     * The configuration settings of the custom Open ID Connect provider.
     */
    export interface CustomOpenIdConnectProviderArgs {
        /**
         * <code>false</code> if the custom Open ID provider provider should not be enabled; otherwise, <code>true</code>.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * The configuration settings of the login flow of the custom Open ID Connect provider.
         */
        login?: pulumi.Input<OpenIdConnectLoginArgs>;
        /**
         * The configuration settings of the app registration for the custom Open ID Connect provider.
         */
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
     * The configuration settings of the Azure Active Directory default authorization policy.
     */
    export interface DefaultAuthorizationPolicyArgs {
        /**
         * The configuration settings of the Azure Active Directory allowed applications.
         */
        allowedApplications?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The configuration settings of the Azure Active Directory allowed principals.
         */
        allowedPrincipals?: pulumi.Input<AllowedPrincipalsArgs>;
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
     * The configuration settings of the Facebook provider.
     */
    export interface FacebookArgs {
        /**
         * <code>false</code> if the Facebook provider should not be enabled despite the set registration; otherwise, <code>true</code>.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * The version of the Facebook api to be used while logging in.
         */
        graphApiVersion?: pulumi.Input<string>;
        /**
         * The configuration settings of the login flow.
         */
        login?: pulumi.Input<LoginScopesArgs>;
        /**
         * The configuration settings of the app registration for the Facebook provider.
         */
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

    /**
     * The configuration settings of the storage of the tokens if a file system is used.
     */
    export interface FileSystemTokenStoreArgs {
        /**
         * The directory in which the tokens will be stored.
         */
        directory?: pulumi.Input<string>;
    }

    /**
     * The configuration settings of a forward proxy used to make the requests.
     */
    export interface ForwardProxyArgs {
        /**
         * The convention used to determine the url of the request made.
         */
        convention?: pulumi.Input<enums.ForwardProxyConvention>;
        /**
         * The name of the header containing the host of the request.
         */
        customHostHeaderName?: pulumi.Input<string>;
        /**
         * The name of the header containing the scheme of the request.
         */
        customProtoHeaderName?: pulumi.Input<string>;
    }

    export interface FrontEndConfigurationArgs {
        kind?: pulumi.Input<enums.FrontEndServiceType>;
    }

    /**
     * The configuration settings of the GitHub provider.
     */
    export interface GitHubArgs {
        /**
         * <code>false</code> if the GitHub provider should not be enabled despite the set registration; otherwise, <code>true</code>.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * The configuration settings of the login flow.
         */
        login?: pulumi.Input<LoginScopesArgs>;
        /**
         * The configuration settings of the app registration for the GitHub provider.
         */
        registration?: pulumi.Input<ClientRegistrationArgs>;
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
     * The configuration settings that determines the validation flow of users using App Service Authentication/Authorization.
     */
    export interface GlobalValidationArgs {
        /**
         * The paths for which unauthenticated flow would not be redirected to the login page.
         */
        excludedPaths?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The default authentication provider to use when multiple providers are configured.
         * This setting is only needed if multiple providers are configured and the unauthenticated client
         * action is set to "RedirectToLoginPage".
         */
        redirectToProvider?: pulumi.Input<string>;
        /**
         * <code>true</code> if the authentication flow is required any request is made; otherwise, <code>false</code>.
         */
        requireAuthentication?: pulumi.Input<boolean>;
        /**
         * The action to take when an unauthenticated client attempts to access the app.
         */
        unauthenticatedClientAction?: pulumi.Input<enums.UnauthenticatedClientActionV2>;
    }

    /**
     * The configuration settings of the Google provider.
     */
    export interface GoogleArgs {
        /**
         * <code>false</code> if the Google provider should not be enabled despite the set registration; otherwise, <code>true</code>.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * The configuration settings of the login flow.
         */
        login?: pulumi.Input<LoginScopesArgs>;
        /**
         * The configuration settings of the app registration for the Google provider.
         */
        registration?: pulumi.Input<ClientRegistrationArgs>;
        /**
         * The configuration settings of the Azure Active Directory token validation flow.
         */
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

    /**
     * The configuration settings of the HTTP requests for authentication and authorization requests made against App Service Authentication/Authorization.
     */
    export interface HttpSettingsArgs {
        /**
         * The configuration settings of a forward proxy used to make the requests.
         */
        forwardProxy?: pulumi.Input<ForwardProxyArgs>;
        /**
         * <code>false</code> if the authentication/authorization responses not having the HTTPS scheme are permissible; otherwise, <code>true</code>.
         */
        requireHttps?: pulumi.Input<boolean>;
        /**
         * The configuration settings of the paths HTTP requests.
         */
        routes?: pulumi.Input<HttpSettingsRoutesArgs>;
    }

    /**
     * The configuration settings of the paths HTTP requests.
     */
    export interface HttpSettingsRoutesArgs {
        /**
         * The prefix that should precede all the authentication/authorization paths.
         */
        apiPrefix?: pulumi.Input<string>;
    }

    /**
     * The configuration settings of each of the identity providers used to configure App Service Authentication/Authorization.
     */
    export interface IdentityProvidersArgs {
        /**
         * The configuration settings of the Apple provider.
         */
        apple?: pulumi.Input<AppleArgs>;
        /**
         * The configuration settings of the Azure Active directory provider.
         */
        azureActiveDirectory?: pulumi.Input<AzureActiveDirectoryArgs>;
        /**
         * The configuration settings of the Azure Static Web Apps provider.
         */
        azureStaticWebApps?: pulumi.Input<AzureStaticWebAppsArgs>;
        /**
         * The map of the name of the alias of each custom Open ID Connect provider to the
         * configuration settings of the custom Open ID Connect provider.
         */
        customOpenIdConnectProviders?: pulumi.Input<{[key: string]: pulumi.Input<CustomOpenIdConnectProviderArgs>}>;
        /**
         * The configuration settings of the Facebook provider.
         */
        facebook?: pulumi.Input<FacebookArgs>;
        /**
         * The configuration settings of the GitHub provider.
         */
        gitHub?: pulumi.Input<GitHubArgs>;
        /**
         * The configuration settings of the Google provider.
         */
        google?: pulumi.Input<GoogleArgs>;
        /**
         * The configuration settings of the legacy Microsoft Account provider.
         */
        legacyMicrosoftAccount?: pulumi.Input<LegacyMicrosoftAccountArgs>;
        /**
         * The configuration settings of the Twitter provider.
         */
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

    /**
     * The configuration settings of the checks that should be made while validating the JWT Claims.
     */
    export interface JwtClaimChecksArgs {
        /**
         * The list of the allowed client applications.
         */
        allowedClientApplications?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The list of the allowed groups.
         */
        allowedGroups?: pulumi.Input<pulumi.Input<string>[]>;
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

    /**
     * The configuration settings of the legacy Microsoft Account provider.
     */
    export interface LegacyMicrosoftAccountArgs {
        /**
         * <code>false</code> if the legacy Microsoft Account provider should not be enabled despite the set registration; otherwise, <code>true</code>.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * The configuration settings of the login flow.
         */
        login?: pulumi.Input<LoginScopesArgs>;
        /**
         * The configuration settings of the app registration for the legacy Microsoft Account provider.
         */
        registration?: pulumi.Input<ClientRegistrationArgs>;
        /**
         * The configuration settings of the legacy Microsoft Account provider token validation flow.
         */
        validation?: pulumi.Input<AllowedAudiencesValidationArgs>;
    }

    export interface LogAnalyticsConfigurationArgs {
        customerId?: pulumi.Input<string>;
        sharedKey?: pulumi.Input<string>;
    }

    /**
     * The configuration settings of the login flow of users using App Service Authentication/Authorization.
     */
    export interface LoginArgs {
        /**
         * External URLs that can be redirected to as part of logging in or logging out of the app. Note that the query string part of the URL is ignored.
         * This is an advanced setting typically only needed by Windows Store application backends.
         * Note that URLs within the current domain are always implicitly allowed.
         */
        allowedExternalRedirectUrls?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The configuration settings of the session cookie's expiration.
         */
        cookieExpiration?: pulumi.Input<CookieExpirationArgs>;
        /**
         * The configuration settings of the nonce used in the login flow.
         */
        nonce?: pulumi.Input<NonceArgs>;
        /**
         * <code>true</code> if the fragments from the request are preserved after the login request is made; otherwise, <code>false</code>.
         */
        preserveUrlFragmentsForLogins?: pulumi.Input<boolean>;
        /**
         * The routes that specify the endpoints used for login and logout requests.
         */
        routes?: pulumi.Input<LoginRoutesArgs>;
        /**
         * The configuration settings of the token store.
         */
        tokenStore?: pulumi.Input<TokenStoreArgs>;
    }

    /**
     * The routes that specify the endpoints used for login and logout requests.
     */
    export interface LoginRoutesArgs {
        /**
         * The endpoint at which a logout request should be made.
         */
        logoutEndpoint?: pulumi.Input<string>;
    }

    /**
     * The configuration settings of the login flow, including the scopes that should be requested.
     */
    export interface LoginScopesArgs {
        /**
         * A list of the scopes that should be requested while authenticating.
         */
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
     * The configuration settings of the nonce used in the login flow.
     */
    export interface NonceArgs {
        /**
         * The time after the request is made when the nonce should expire.
         */
        nonceExpirationInterval?: pulumi.Input<string>;
        /**
         * <code>false</code> if the nonce should not be validated while completing the login flow; otherwise, <code>true</code>.
         */
        validateNonce?: pulumi.Input<boolean>;
    }

    /**
     * The authentication client credentials of the custom Open ID Connect provider.
     */
    export interface OpenIdConnectClientCredentialArgs {
        /**
         * The app setting that contains the client secret for the custom Open ID Connect provider.
         */
        clientSecretSettingName?: pulumi.Input<string>;
        /**
         * The method that should be used to authenticate the user.
         */
        method?: pulumi.Input<enums.ClientCredentialMethod>;
    }

    /**
     * The configuration settings of the endpoints used for the custom Open ID Connect provider.
     */
    export interface OpenIdConnectConfigArgs {
        /**
         * The endpoint to be used to make an authorization request.
         */
        authorizationEndpoint?: pulumi.Input<string>;
        /**
         * The endpoint that provides the keys necessary to validate the token.
         */
        certificationUri?: pulumi.Input<string>;
        /**
         * The endpoint that issues the token.
         */
        issuer?: pulumi.Input<string>;
        /**
         * The endpoint to be used to request a token.
         */
        tokenEndpoint?: pulumi.Input<string>;
        /**
         * The endpoint that contains all the configuration endpoints for the provider.
         */
        wellKnownOpenIdConfiguration?: pulumi.Input<string>;
    }

    /**
     * The configuration settings of the login flow of the custom Open ID Connect provider.
     */
    export interface OpenIdConnectLoginArgs {
        /**
         * The name of the claim that contains the users name.
         */
        nameClaimType?: pulumi.Input<string>;
        /**
         * A list of the scopes that should be requested while authenticating.
         */
        scopes?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The configuration settings of the app registration for the custom Open ID Connect provider.
     */
    export interface OpenIdConnectRegistrationArgs {
        /**
         * The authentication credentials of the custom Open ID Connect provider.
         */
        clientCredential?: pulumi.Input<OpenIdConnectClientCredentialArgs>;
        /**
         * The client id of the custom Open ID Connect provider.
         */
        clientId?: pulumi.Input<string>;
        /**
         * The configuration settings of the endpoints used for the custom Open ID Connect provider.
         */
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
     * The configuration settings of the token store.
     */
    export interface TokenStoreArgs {
        /**
         * The configuration settings of the storage of the tokens if blob storage is used.
         */
        azureBlobStorage?: pulumi.Input<BlobStorageTokenStoreArgs>;
        /**
         * <code>true</code> to durably store platform-specific security tokens that are obtained during login flows; otherwise, <code>false</code>.
         *  The default is <code>false</code>.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * The configuration settings of the storage of the tokens if a file system is used.
         */
        fileSystem?: pulumi.Input<FileSystemTokenStoreArgs>;
        /**
         * The number of hours after session token expiration that a session token can be used to
         * call the token refresh API. The default is 72 hours.
         */
        tokenRefreshExtensionHours?: pulumi.Input<number>;
    }

    /**
     * The configuration settings of the Twitter provider.
     */
    export interface TwitterArgs {
        /**
         * <code>false</code> if the Twitter provider should not be enabled despite the set registration; otherwise, <code>true</code>.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * The configuration settings of the app registration for the Twitter provider.
         */
        registration?: pulumi.Input<TwitterRegistrationArgs>;
    }

    /**
     * The configuration settings of the app registration for the Twitter provider.
     */
    export interface TwitterRegistrationArgs {
        /**
         * The OAuth 1.0a consumer key of the Twitter application used for sign-in.
         * This setting is required for enabling Twitter Sign-In.
         * Twitter Sign-In documentation: https://dev.twitter.com/web/sign-in
         */
        consumerKey?: pulumi.Input<string>;
        /**
         * The app setting name that contains the OAuth 1.0a consumer secret of the Twitter
         * application used for sign-in.
         */
        consumerSecretSettingName?: pulumi.Input<string>;
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

    /**
     * The WSDL definition
     */
    export interface WsdlDefinitionArgs {
        /**
         * The WSDL content
         */
        content?: pulumi.Input<string>;
        /**
         * The WSDL import method
         */
        importMethod?: pulumi.Input<string | enums.WsdlImportMethod>;
        /**
         * The service with name and endpoint names
         */
        service?: pulumi.Input<WsdlServiceArgs>;
        /**
         * The WSDL URL
         */
        url?: pulumi.Input<string>;
    }

    /**
     * The service with name and endpoint names
     */
    export interface WsdlService {
        /**
         * List of the endpoints' qualified names
         */
        endpointQualifiedNames?: string[];
        /**
         * The service's qualified name
         */
        qualifiedName: string;
    }

    /**
     * The service with name and endpoint names
     */
    export interface WsdlServiceArgs {
        /**
         * List of the endpoints' qualified names
         */
        endpointQualifiedNames?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The service's qualified name
         */
        qualifiedName: pulumi.Input<string>;
    }

    export namespace v20150801preview {
        /**
         * API Management
         */
        export interface ApiEntityArgs {
            /**
             * API definition Url - url where the swagger can be downloaded from
             */
            apiDefinitionUrl?: pulumi.Input<string>;
            /**
             * Backend service definition
             */
            backendService?: pulumi.Input<v20150801preview.BackendServiceDefinitionArgs>;
            /**
             * Capabilities
             */
            capabilities?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Timestamp of last connection change.
             */
            changedTime?: pulumi.Input<string>;
            /**
             * Connection parameters
             */
            connectionParameters?: pulumi.Input<{[key: string]: pulumi.Input<v20150801preview.ConnectionParameterArgs>}>;
            /**
             * Timestamp of the connection creation
             */
            createdTime?: pulumi.Input<string>;
            /**
             * the URL path of this API when exposed via APIM
             */
            generalInformation?: pulumi.Input<v20150801preview.GeneralApiInformationArgs>;
            /**
             * Resource Id
             */
            id?: pulumi.Input<string>;
            /**
             * Kind of resource
             */
            kind?: pulumi.Input<string>;
            /**
             * Resource Location
             */
            location: pulumi.Input<string>;
            /**
             * Free form object for the data caller wants to store
             */
            metadata?: any;
            /**
             * Resource Name
             */
            name?: pulumi.Input<string>;
            /**
             * the URL path of this API when exposed via APIM
             */
            path?: pulumi.Input<string>;
            /**
             * API policies
             */
            policies?: pulumi.Input<v20150801preview.ApiPoliciesArgs>;
            /**
             * Protocols supported by the front end - http/https
             */
            protocols?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Read only property returning the runtime endpoints where the API can be called
             */
            runtimeUrls?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Resource tags
             */
            tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Resource type
             */
            type?: pulumi.Input<string>;
        }

        /**
         * OAuth settings for the connection provider
         */
        export interface ApiOAuthSettingsArgs {
            /**
             * Resource provider client id
             */
            clientId?: pulumi.Input<string>;
            /**
             * Client Secret needed for OAuth
             */
            clientSecret?: pulumi.Input<string>;
            /**
             * OAuth parameters key is the name of parameter
             */
            customParameters?: pulumi.Input<{[key: string]: pulumi.Input<v20150801preview.ApiOAuthSettingsParameterArgs>}>;
            /**
             * Identity provider
             */
            identityProvider?: pulumi.Input<string>;
            /**
             * Read only properties for this oauth setting.
             */
            properties?: any;
            /**
             * Url
             */
            redirectUrl?: pulumi.Input<string>;
            /**
             * OAuth scopes
             */
            scopes?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * OAuth Settings Parameter
         */
        export interface ApiOAuthSettingsParameterArgs {
            /**
             * Read only: Options available to this parameter
             */
            options?: any;
            /**
             * UI definitions per culture as caller can specify the culture
             */
            uiDefinition?: any;
            /**
             * Value
             */
            value?: pulumi.Input<string>;
        }

        /**
         * API policies
         */
        export interface ApiPoliciesArgs {
            /**
             * Content of xml policy
             */
            content?: pulumi.Input<string>;
            /**
             * Resource Id
             */
            id?: pulumi.Input<string>;
            /**
             * Kind of resource
             */
            kind?: pulumi.Input<string>;
            /**
             * Resource Location
             */
            location: pulumi.Input<string>;
            /**
             * Resource Name
             */
            name?: pulumi.Input<string>;
            /**
             * Resource tags
             */
            tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Resource type
             */
            type?: pulumi.Input<string>;
        }

        /**
         * The plan object in an ARM, represents a marketplace plan
         */
        export interface ArmPlanArgs {
            /**
             * The name
             */
            name?: pulumi.Input<string>;
            /**
             * The product
             */
            product?: pulumi.Input<string>;
            /**
             * The promotion code
             */
            promotionCode?: pulumi.Input<string>;
            /**
             * The publisher
             */
            publisher?: pulumi.Input<string>;
            /**
             * Version of product
             */
            version?: pulumi.Input<string>;
        }

        /**
         * API definitions with backend urls
         */
        export interface BackendServiceDefinitionArgs {
            /**
             * Service Urls per Hosting environment
             */
            hostingEnvironmentServiceUrls?: pulumi.Input<pulumi.Input<v20150801preview.HostingEnvironmentServiceDescriptionsArgs>[]>;
            /**
             * Resource Id
             */
            id?: pulumi.Input<string>;
            /**
             * Kind of resource
             */
            kind?: pulumi.Input<string>;
            /**
             * Resource Location
             */
            location: pulumi.Input<string>;
            /**
             * Resource Name
             */
            name?: pulumi.Input<string>;
            /**
             * Url from which the swagger payload will be fetched
             */
            serviceUrl?: pulumi.Input<string>;
            /**
             * Resource tags
             */
            tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Resource type
             */
            type?: pulumi.Input<string>;
        }

        /**
         * Connection error
         */
        export interface ConnectionErrorArgs {
            /**
             * code of the status
             */
            code?: pulumi.Input<string>;
            /**
             * Resource Id
             */
            id?: pulumi.Input<string>;
            /**
             * Kind of resource
             */
            kind?: pulumi.Input<string>;
            /**
             * Resource Location
             */
            location: pulumi.Input<string>;
            /**
             * Description of the status
             */
            message?: pulumi.Input<string>;
            /**
             * Resource Name
             */
            name?: pulumi.Input<string>;
            /**
             * Resource tags
             */
            tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Resource type
             */
            type?: pulumi.Input<string>;
        }

        /**
         * connection provider parameters
         */
        export interface ConnectionParameterArgs {
            /**
             * Default parameter value
             */
            defaultValue?: any;
            /**
             * Settings defining OAuth flow for the back end provider
             */
            oAuthSettings?: pulumi.Input<v20150801preview.ApiOAuthSettingsArgs>;
            /**
             * Type of the parameter
             */
            type?: pulumi.Input<enums.v20150801preview.ConnectionParameterType>;
            /**
             * UI definitions
             */
            uiDefinition?: any;
        }

        /**
         * Connection status
         */
        export interface ConnectionStatusArgs {
            /**
             * Error details
             */
            error?: pulumi.Input<v20150801preview.ConnectionErrorArgs>;
            /**
             * Resource Id
             */
            id?: pulumi.Input<string>;
            /**
             * Kind of resource
             */
            kind?: pulumi.Input<string>;
            /**
             * Resource Location
             */
            location: pulumi.Input<string>;
            /**
             * Resource Name
             */
            name?: pulumi.Input<string>;
            /**
             * Status
             */
            status?: pulumi.Input<string>;
            /**
             * Resource tags
             */
            tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Target of the error
             */
            target?: pulumi.Input<string>;
            /**
             * Resource type
             */
            type?: pulumi.Input<string>;
        }

        export interface ConsentLinkInputParameter {
            /**
             * AAD OID (user or group) if the principal type is ActiveDirectory.
             *             MSA PUID if the principal type is MicrosoftAccount.
             */
            objectId?: string;
            /**
             * Name of the parameter in the connection provider's oauthSettings
             */
            parameterName?: string;
            /**
             * Principal type
             */
            principalType?: enums.v20150801preview.PrincipalType;
            /**
             * Name of the parameter in the connection provider's oauthSettings
             */
            redirectUrl?: string;
            /**
             * Tenant Id
             */
            tenantId?: string;
        }

        export interface ConsentLinkInputParameterArgs {
            /**
             * AAD OID (user or group) if the principal type is ActiveDirectory.
             *             MSA PUID if the principal type is MicrosoftAccount.
             */
            objectId?: pulumi.Input<string>;
            /**
             * Name of the parameter in the connection provider's oauthSettings
             */
            parameterName?: pulumi.Input<string>;
            /**
             * Principal type
             */
            principalType?: pulumi.Input<enums.v20150801preview.PrincipalType>;
            /**
             * Name of the parameter in the connection provider's oauthSettings
             */
            redirectUrl?: pulumi.Input<string>;
            /**
             * Tenant Id
             */
            tenantId?: pulumi.Input<string>;
        }

        /**
         * Custom logging setting value
         */
        export interface CustomLoginSettingValueArgs {
            /**
             * Resource Id
             */
            id?: pulumi.Input<string>;
            /**
             * Kind of resource
             */
            kind?: pulumi.Input<string>;
            /**
             * Resource Location
             */
            location: pulumi.Input<string>;
            /**
             * Resource Name
             */
            name?: pulumi.Input<string>;
            /**
             * Option selected for this custom login setting value
             */
            option?: pulumi.Input<string>;
            /**
             * Resource tags
             */
            tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Resource type
             */
            type?: pulumi.Input<string>;
        }

        /**
         * expanded parent object for expansion
         */
        export interface ExpandedParentApiEntityArgs {
            /**
             * Id of connection provider
             */
            entity?: pulumi.Input<v20150801preview.ResponseMessageEnvelopeApiEntityArgs>;
            /**
             * Resource Id
             */
            id?: pulumi.Input<string>;
            /**
             * Kind of resource
             */
            kind?: pulumi.Input<string>;
            /**
             * Resource Location
             */
            location: pulumi.Input<string>;
            /**
             * Resource Name
             */
            name?: pulumi.Input<string>;
            /**
             * Resource tags
             */
            tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Resource type
             */
            type?: pulumi.Input<string>;
        }

        /**
         * General API information
         */
        export interface GeneralApiInformationArgs {
            /**
             * DefaultConnectionNameTemplate
             */
            connectionDisplayName?: pulumi.Input<string>;
            /**
             * ConnectionPortalUrl
             */
            connectionPortalUrl?: any;
            /**
             * Description
             */
            description?: pulumi.Input<string>;
            /**
             * Display Name
             */
            displayName?: pulumi.Input<string>;
            /**
             * Icon Url
             */
            iconUrl?: pulumi.Input<string>;
            /**
             * Resource Id
             */
            id?: pulumi.Input<string>;
            /**
             * Kind of resource
             */
            kind?: pulumi.Input<string>;
            /**
             * Resource Location
             */
            location: pulumi.Input<string>;
            /**
             * Resource Name
             */
            name?: pulumi.Input<string>;
            /**
             * Resource tags
             */
            tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * a public accessible url of the Terms Of Use Url of this API
             */
            termsOfUseUrl?: pulumi.Input<string>;
            /**
             * Resource type
             */
            type?: pulumi.Input<string>;
        }

        /**
         * Back end service per ASE
         */
        export interface HostingEnvironmentServiceDescriptionsArgs {
            /**
             * Host Id
             */
            hostId?: pulumi.Input<string>;
            /**
             * Hosting environment Id
             */
            hostingEnvironmentId?: pulumi.Input<string>;
            /**
             * service url to use
             */
            serviceUrl?: pulumi.Input<string>;
            /**
             * When the backend url is in same ASE, for performance reason this flag can be set to true
             *             If WebApp.DisableHostNames is also set it improves the security by making the back end accessible only 
             *             via API calls
             *             Note: calls will fail if this option is used but back end is not on the same ASE
             */
            useInternalRouting?: pulumi.Input<boolean>;
        }

        /**
         * Custom logging setting values
         */
        export interface ParameterCustomLoginSettingValuesArgs {
            /**
             * Custom parameters.
             */
            customParameters?: pulumi.Input<{[key: string]: pulumi.Input<v20150801preview.CustomLoginSettingValueArgs>}>;
            /**
             * Resource Id
             */
            id?: pulumi.Input<string>;
            /**
             * Kind of resource
             */
            kind?: pulumi.Input<string>;
            /**
             * Resource Location
             */
            location: pulumi.Input<string>;
            /**
             * Resource Name
             */
            name?: pulumi.Input<string>;
            /**
             * Resource tags
             */
            tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Resource type
             */
            type?: pulumi.Input<string>;
        }

        /**
         * Message envelope that contains the common Azure resource manager properties and the resource provider specific content
         */
        export interface ResponseMessageEnvelopeApiEntityArgs {
            /**
             * Resource Id. Typically id is populated only for responses to GET requests. Caller is responsible for passing in this
             *             value for GET requests only.
             *             For example: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupId}/providers/Microsoft.Web/sites/{sitename}
             */
            id?: pulumi.Input<string>;
            /**
             * Geo region resource belongs to e.g. SouthCentralUS, SouthEastAsia
             */
            location?: pulumi.Input<string>;
            /**
             * Name of resource
             */
            name?: pulumi.Input<string>;
            /**
             * Azure resource manager plan
             */
            plan?: pulumi.Input<v20150801preview.ArmPlanArgs>;
            /**
             * Resource specific properties
             */
            properties?: pulumi.Input<v20150801preview.ApiEntityArgs>;
            /**
             * Sku description of the resource
             */
            sku?: pulumi.Input<v20150801preview.SkuDescriptionArgs>;
            /**
             * Tags associated with resource
             */
            tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Type of resource e.g Microsoft.Web/sites
             */
            type?: pulumi.Input<string>;
        }

        /**
         * Describes a sku for a scalable resource
         */
        export interface SkuDescriptionArgs {
            /**
             * Current number of instances assigned to the resource
             */
            capacity?: pulumi.Input<number>;
            /**
             * Family code of the resource sku
             */
            family?: pulumi.Input<string>;
            /**
             * Name of the resource sku
             */
            name?: pulumi.Input<string>;
            /**
             * Size specifier of the resource sku
             */
            size?: pulumi.Input<string>;
            /**
             * Service Tier of the resource sku
             */
            tier?: pulumi.Input<string>;
        }

    }

    export namespace v20160301 {
    }

    export namespace v20160601 {
        export interface ApiConnectionDefinitionPropertiesArgs {
            api?: pulumi.Input<v20160601.ApiReferenceArgs>;
            /**
             * Timestamp of last connection change
             */
            changedTime?: pulumi.Input<string>;
            /**
             * Timestamp of the connection creation
             */
            createdTime?: pulumi.Input<string>;
            /**
             * Dictionary of custom parameter values
             */
            customParameterValues?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Display name
             */
            displayName?: pulumi.Input<string>;
            /**
             * Dictionary of nonsecret parameter values
             */
            nonSecretParameterValues?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Dictionary of parameter values
             */
            parameterValues?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Status of the connection
             */
            statuses?: pulumi.Input<pulumi.Input<v20160601.ConnectionStatusDefinitionArgs>[]>;
            /**
             * Links to test the API connection
             */
            testLinks?: pulumi.Input<pulumi.Input<v20160601.ApiConnectionTestLinkArgs>[]>;
        }

        /**
         * API connection properties
         */
        export interface ApiConnectionTestLinkArgs {
            /**
             * HTTP Method
             */
            method?: pulumi.Input<string>;
            /**
             * Test link request URI
             */
            requestUri?: pulumi.Input<string>;
        }

        /**
         * OAuth settings for the connection provider
         */
        export interface ApiOAuthSettingsArgs {
            /**
             * Resource provider client id
             */
            clientId?: pulumi.Input<string>;
            /**
             * Client Secret needed for OAuth
             */
            clientSecret?: pulumi.Input<string>;
            /**
             * OAuth parameters key is the name of parameter
             */
            customParameters?: pulumi.Input<{[key: string]: pulumi.Input<v20160601.ApiOAuthSettingsParameterArgs>}>;
            /**
             * Identity provider
             */
            identityProvider?: pulumi.Input<string>;
            /**
             * Read only properties for this oauth setting.
             */
            properties?: any;
            /**
             * Url
             */
            redirectUrl?: pulumi.Input<string>;
            /**
             * OAuth scopes
             */
            scopes?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * OAuth settings for the API
         */
        export interface ApiOAuthSettingsParameterArgs {
            /**
             * Options available to this parameter
             */
            options?: any;
            /**
             * UI definitions per culture as caller can specify the culture
             */
            uiDefinition?: any;
            /**
             * Value of the setting
             */
            value?: pulumi.Input<string>;
        }

        export interface ApiReferenceArgs {
            /**
             * Brand color
             */
            brandColor?: pulumi.Input<string>;
            /**
             * The custom API description
             */
            description?: pulumi.Input<string>;
            /**
             * The display name
             */
            displayName?: pulumi.Input<string>;
            /**
             * The icon URI
             */
            iconUri?: pulumi.Input<string>;
            /**
             * Resource reference id
             */
            id?: pulumi.Input<string>;
            /**
             * The name of the API
             */
            name?: pulumi.Input<string>;
            /**
             * The JSON representation of the swagger
             */
            swagger?: any;
            /**
             * Resource reference type
             */
            type?: pulumi.Input<string>;
        }

        /**
         * The API backend service
         */
        export interface ApiResourceBackendServiceArgs {
            /**
             * The service URL
             */
            serviceUrl?: pulumi.Input<string>;
        }

        /**
         * API Definitions
         */
        export interface ApiResourceDefinitionsArgs {
            /**
             * The modified swagger URL
             */
            modifiedSwaggerUrl?: pulumi.Input<string>;
            /**
             * The original swagger URL
             */
            originalSwaggerUrl?: pulumi.Input<string>;
        }

        /**
         * Connection error
         */
        export interface ConnectionErrorArgs {
            /**
             * Code of the status
             */
            code?: pulumi.Input<string>;
            /**
             * Resource ETag
             */
            etag?: pulumi.Input<string>;
            /**
             * Resource location
             */
            location?: pulumi.Input<string>;
            /**
             * Description of the status
             */
            message?: pulumi.Input<string>;
            /**
             * Resource tags
             */
            tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        }

        export interface ConnectionGatewayDefinitionPropertiesArgs {
            /**
             * The URI of the backend
             */
            backendUri?: pulumi.Input<string>;
            /**
             * The gateway installation reference
             */
            connectionGatewayInstallation?: pulumi.Input<v20160601.ConnectionGatewayReferenceArgs>;
            /**
             * The gateway admin
             */
            contactInformation?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The gateway description
             */
            description?: pulumi.Input<string>;
            /**
             * The gateway display name
             */
            displayName?: pulumi.Input<string>;
            /**
             * The machine name of the gateway
             */
            machineName?: pulumi.Input<string>;
            /**
             * The gateway status
             */
            status?: any;
        }

        /**
         * The gateway installation reference
         */
        export interface ConnectionGatewayReferenceArgs {
            /**
             * Resource reference id
             */
            id?: pulumi.Input<string>;
            /**
             * Resource reference location
             */
            location?: pulumi.Input<string>;
            /**
             * Resource reference name
             */
            name?: pulumi.Input<string>;
            /**
             * Resource reference type
             */
            type?: pulumi.Input<string>;
        }

        /**
         * Connection provider parameters
         */
        export interface ConnectionParameterArgs {
            /**
             * OAuth settings for the connection provider
             */
            oAuthSettings?: pulumi.Input<v20160601.ApiOAuthSettingsArgs>;
            /**
             * Type of the parameter
             */
            type?: pulumi.Input<enums.v20160601.ConnectionParameterType>;
        }

        /**
         * Connection status
         */
        export interface ConnectionStatusDefinitionArgs {
            /**
             * Connection error
             */
            error?: pulumi.Input<v20160601.ConnectionErrorArgs>;
            /**
             * The gateway status
             */
            status?: pulumi.Input<string>;
            /**
             * Target of the error
             */
            target?: pulumi.Input<string>;
        }

        /**
         * Consent link definition
         */
        export interface ConsentLinkParameterDefinition {
            /**
             * AAD OID (user or group) if the principal type is ActiveDirectory. MSA PUID if the principal type is MicrosoftAccount
             */
            objectId?: string;
            /**
             * Name of the parameter in the connection provider's OAuth settings
             */
            parameterName?: string;
            /**
             * Name of the parameter in the connection provider's OAuth settings
             */
            redirectUrl?: string;
            /**
             * The tenant id
             */
            tenantId?: string;
        }

        /**
         * Consent link definition
         */
        export interface ConsentLinkParameterDefinitionArgs {
            /**
             * AAD OID (user or group) if the principal type is ActiveDirectory. MSA PUID if the principal type is MicrosoftAccount
             */
            objectId?: pulumi.Input<string>;
            /**
             * Name of the parameter in the connection provider's OAuth settings
             */
            parameterName?: pulumi.Input<string>;
            /**
             * Name of the parameter in the connection provider's OAuth settings
             */
            redirectUrl?: pulumi.Input<string>;
            /**
             * The tenant id
             */
            tenantId?: pulumi.Input<string>;
        }

        /**
         * Custom API properties
         */
        export interface CustomApiPropertiesDefinitionArgs {
            /**
             * API Definitions
             */
            apiDefinitions?: pulumi.Input<v20160601.ApiResourceDefinitionsArgs>;
            /**
             * The API type
             */
            apiType?: pulumi.Input<string | enums.v20160601.ApiType>;
            /**
             * The API backend service
             */
            backendService?: pulumi.Input<v20160601.ApiResourceBackendServiceArgs>;
            /**
             * Brand color
             */
            brandColor?: pulumi.Input<string>;
            /**
             * The custom API capabilities
             */
            capabilities?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Connection parameters
             */
            connectionParameters?: pulumi.Input<{[key: string]: pulumi.Input<v20160601.ConnectionParameterArgs>}>;
            /**
             * The custom API description
             */
            description?: pulumi.Input<string>;
            /**
             * The display name
             */
            displayName?: pulumi.Input<string>;
            /**
             * The icon URI
             */
            iconUri?: pulumi.Input<string>;
            /**
             * Runtime URLs
             */
            runtimeUrls?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The JSON representation of the swagger
             */
            swagger?: any;
            /**
             * The WSDL definition
             */
            wsdlDefinition?: pulumi.Input<v20160601.WsdlDefinitionArgs>;
        }

        /**
         * The WSDL definition
         */
        export interface WsdlDefinitionArgs {
            /**
             * The WSDL content
             */
            content?: pulumi.Input<string>;
            /**
             * The WSDL import method
             */
            importMethod?: pulumi.Input<string | enums.v20160601.WsdlImportMethod>;
            /**
             * The service with name and endpoint names
             */
            service?: pulumi.Input<v20160601.WsdlServiceArgs>;
            /**
             * The WSDL URL
             */
            url?: pulumi.Input<string>;
        }

        /**
         * The service with name and endpoint names
         */
        export interface WsdlService {
            /**
             * List of the endpoints' qualified names
             */
            endpointQualifiedNames?: string[];
            /**
             * The service's qualified name
             */
            qualifiedName: string;
        }

        /**
         * The service with name and endpoint names
         */
        export interface WsdlServiceArgs {
            /**
             * List of the endpoints' qualified names
             */
            endpointQualifiedNames?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The service's qualified name
             */
            qualifiedName: pulumi.Input<string>;
        }

    }

    export namespace v20160801 {
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
            actionType?: pulumi.Input<enums.v20160801.AutoHealActionType>;
            /**
             * Custom action to be taken.
             */
            customAction?: pulumi.Input<v20160801.AutoHealCustomActionArgs>;
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
            actions?: pulumi.Input<v20160801.AutoHealActionsArgs>;
            /**
             * Conditions that describe when to execute the auto-heal actions.
             */
            triggers?: pulumi.Input<v20160801.AutoHealTriggersArgs>;
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
            requests?: pulumi.Input<v20160801.RequestsBasedTriggerArgs>;
            /**
             * A rule based on request execution time.
             */
            slowRequests?: pulumi.Input<v20160801.SlowRequestsBasedTriggerArgs>;
            /**
             * A rule based on status codes.
             */
            statusCodes?: pulumi.Input<pulumi.Input<v20160801.StatusCodesBasedTriggerArgs>[]>;
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
            frequencyUnit: enums.v20160801.FrequencyUnit;
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
            frequencyUnit: pulumi.Input<enums.v20160801.FrequencyUnit>;
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
            type?: pulumi.Input<enums.v20160801.ConnectionStringType>;
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
            databaseType: string | enums.v20160801.DatabaseType;
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
            databaseType: pulumi.Input<string | enums.v20160801.DatabaseType>;
            name?: pulumi.Input<string>;
        }

        /**
         * Routing rules in production experiments.
         */
        export interface ExperimentsArgs {
            /**
             * List of ramp-up rules.
             */
            rampUpRules?: pulumi.Input<pulumi.Input<v20160801.RampUpRuleArgs>[]>;
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
            hostType?: pulumi.Input<enums.v20160801.HostType>;
            /**
             * Hostname.
             */
            name?: pulumi.Input<string>;
            /**
             * SSL type.
             */
            sslState?: pulumi.Input<enums.v20160801.SslState>;
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
            type?: pulumi.Input<string | enums.v20160801.ManagedServiceIdentityType>;
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
            apiDefinition?: pulumi.Input<v20160801.ApiDefinitionInfoArgs>;
            /**
             * App command line to launch.
             */
            appCommandLine?: pulumi.Input<string>;
            /**
             * Application settings.
             */
            appSettings?: pulumi.Input<pulumi.Input<v20160801.NameValuePairArgs>[]>;
            /**
             * <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>.
             */
            autoHealEnabled?: pulumi.Input<boolean>;
            /**
             * Auto Heal rules.
             */
            autoHealRules?: pulumi.Input<v20160801.AutoHealRulesArgs>;
            /**
             * Auto-swap slot name.
             */
            autoSwapSlotName?: pulumi.Input<string>;
            /**
             * Connection strings.
             */
            connectionStrings?: pulumi.Input<pulumi.Input<v20160801.ConnStringInfoArgs>[]>;
            /**
             * Cross-Origin Resource Sharing (CORS) settings.
             */
            cors?: pulumi.Input<v20160801.CorsSettingsArgs>;
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
            experiments?: pulumi.Input<v20160801.ExperimentsArgs>;
            /**
             * Handler mappings.
             */
            handlerMappings?: pulumi.Input<pulumi.Input<v20160801.HandlerMappingArgs>[]>;
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
            ipSecurityRestrictions?: pulumi.Input<pulumi.Input<v20160801.IpSecurityRestrictionArgs>[]>;
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
            limits?: pulumi.Input<v20160801.SiteLimitsArgs>;
            /**
             * Linux App Framework and version
             */
            linuxFxVersion?: pulumi.Input<string>;
            /**
             * Site load balancing.
             */
            loadBalancing?: pulumi.Input<enums.v20160801.SiteLoadBalancing>;
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
            managedPipelineMode?: pulumi.Input<enums.v20160801.ManagedPipelineMode>;
            /**
             * MinTlsVersion: configures the minimum version of TLS required for SSL requests
             */
            minTlsVersion?: pulumi.Input<string | enums.v20160801.SupportedTlsVersions>;
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
            push?: pulumi.Input<v20160801.PushSettingsArgs>;
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
            scmType?: pulumi.Input<string | enums.v20160801.ScmType>;
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
            virtualApplications?: pulumi.Input<pulumi.Input<v20160801.VirtualApplicationArgs>[]>;
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
            recoveryTarget?: pulumi.Input<v20160801.SnapshotRecoveryTargetArgs>;
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
            virtualDirectories?: pulumi.Input<pulumi.Input<v20160801.VirtualDirectoryArgs>[]>;
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

    }

    export namespace v20160901 {
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
         * Specification for an App Service Environment to use for this resource.
         */
        export interface HostingEnvironmentProfileArgs {
            /**
             * Resource ID of the App Service Environment.
             */
            id?: pulumi.Input<string>;
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
            capabilities?: pulumi.Input<pulumi.Input<v20160901.CapabilityArgs>[]>;
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
            skuCapacity?: pulumi.Input<v20160901.SkuCapacityArgs>;
            /**
             * Service tier of the resource SKU.
             */
            tier?: pulumi.Input<string>;
        }

    }

    export namespace v20180201 {
    }

    export namespace v20181101 {
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
            actionType?: pulumi.Input<enums.v20181101.AutoHealActionType>;
            /**
             * Custom action to be taken.
             */
            customAction?: pulumi.Input<v20181101.AutoHealCustomActionArgs>;
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
            actions?: pulumi.Input<v20181101.AutoHealActionsArgs>;
            /**
             * Conditions that describe when to execute the auto-heal actions.
             */
            triggers?: pulumi.Input<v20181101.AutoHealTriggersArgs>;
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
            requests?: pulumi.Input<v20181101.RequestsBasedTriggerArgs>;
            /**
             * A rule based on request execution time.
             */
            slowRequests?: pulumi.Input<v20181101.SlowRequestsBasedTriggerArgs>;
            /**
             * A rule based on status codes.
             */
            statusCodes?: pulumi.Input<pulumi.Input<v20181101.StatusCodesBasedTriggerArgs>[]>;
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
            type?: pulumi.Input<enums.v20181101.AzureStorageType>;
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
            frequencyUnit: enums.v20181101.FrequencyUnit;
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
            frequencyUnit: pulumi.Input<enums.v20181101.FrequencyUnit>;
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
            type?: pulumi.Input<enums.v20181101.ConnectionStringType>;
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
            databaseType: string | enums.v20181101.DatabaseType;
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
            databaseType: pulumi.Input<string | enums.v20181101.DatabaseType>;
            name?: pulumi.Input<string>;
        }

        /**
         * Routing rules in production experiments.
         */
        export interface ExperimentsArgs {
            /**
             * List of ramp-up rules.
             */
            rampUpRules?: pulumi.Input<pulumi.Input<v20181101.RampUpRuleArgs>[]>;
        }

        /**
         * A global distribution definition.
         */
        export interface GeoDistributionArgs {
            /**
             * Location.
             */
            location?: pulumi.Input<string>;
            /**
             * NumberOfWorkers.
             */
            numberOfWorkers?: pulumi.Input<number>;
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
            hostType?: pulumi.Input<enums.v20181101.HostType>;
            /**
             * Hostname.
             */
            name?: pulumi.Input<string>;
            /**
             * SSL type.
             */
            sslState?: pulumi.Input<enums.v20181101.SslState>;
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
             * Allow or Deny access for this IP range.
             */
            action?: pulumi.Input<string>;
            /**
             * IP restriction rule description.
             */
            description?: pulumi.Input<string>;
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
            tag?: pulumi.Input<enums.v20181101.IpFilterTag>;
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
         * Managed service identity.
         */
        export interface ManagedServiceIdentityArgs {
            /**
             * Type of managed service identity.
             */
            type?: pulumi.Input<string | enums.v20181101.ManagedServiceIdentityType>;
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
            apiDefinition?: pulumi.Input<v20181101.ApiDefinitionInfoArgs>;
            /**
             * App command line to launch.
             */
            appCommandLine?: pulumi.Input<string>;
            /**
             * Application settings.
             */
            appSettings?: pulumi.Input<pulumi.Input<v20181101.NameValuePairArgs>[]>;
            /**
             * <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>.
             */
            autoHealEnabled?: pulumi.Input<boolean>;
            /**
             * Auto Heal rules.
             */
            autoHealRules?: pulumi.Input<v20181101.AutoHealRulesArgs>;
            /**
             * Auto-swap slot name.
             */
            autoSwapSlotName?: pulumi.Input<string>;
            /**
             * User-provided Azure storage accounts.
             */
            azureStorageAccounts?: pulumi.Input<{[key: string]: pulumi.Input<v20181101.AzureStorageInfoValueArgs>}>;
            /**
             * Connection strings.
             */
            connectionStrings?: pulumi.Input<pulumi.Input<v20181101.ConnStringInfoArgs>[]>;
            /**
             * Cross-Origin Resource Sharing (CORS) settings.
             */
            cors?: pulumi.Input<v20181101.CorsSettingsArgs>;
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
            experiments?: pulumi.Input<v20181101.ExperimentsArgs>;
            /**
             * State of FTP / FTPS service
             */
            ftpsState?: pulumi.Input<string | enums.v20181101.FtpsState>;
            /**
             * Handler mappings.
             */
            handlerMappings?: pulumi.Input<pulumi.Input<v20181101.HandlerMappingArgs>[]>;
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
            ipSecurityRestrictions?: pulumi.Input<pulumi.Input<v20181101.IpSecurityRestrictionArgs>[]>;
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
            limits?: pulumi.Input<v20181101.SiteLimitsArgs>;
            /**
             * Linux App Framework and version
             */
            linuxFxVersion?: pulumi.Input<string>;
            /**
             * Site load balancing.
             */
            loadBalancing?: pulumi.Input<enums.v20181101.SiteLoadBalancing>;
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
            managedPipelineMode?: pulumi.Input<enums.v20181101.ManagedPipelineMode>;
            /**
             * Managed Service Identity Id
             */
            managedServiceIdentityId?: pulumi.Input<number>;
            /**
             * MinTlsVersion: configures the minimum version of TLS required for SSL requests
             */
            minTlsVersion?: pulumi.Input<string | enums.v20181101.SupportedTlsVersions>;
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
            push?: pulumi.Input<v20181101.PushSettingsArgs>;
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
             * Number of reserved instances.
             * This setting only applies to the Consumption Plan
             */
            reservedInstanceCount?: pulumi.Input<number>;
            /**
             * IP security restrictions for scm.
             */
            scmIpSecurityRestrictions?: pulumi.Input<pulumi.Input<v20181101.IpSecurityRestrictionArgs>[]>;
            /**
             * IP security restrictions for scm to use main.
             */
            scmIpSecurityRestrictionsUseMain?: pulumi.Input<boolean>;
            /**
             * SCM type.
             */
            scmType?: pulumi.Input<string | enums.v20181101.ScmType>;
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
            virtualApplications?: pulumi.Input<pulumi.Input<v20181101.VirtualApplicationArgs>[]>;
            /**
             * Virtual Network name.
             */
            vnetName?: pulumi.Input<string>;
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
            virtualDirectories?: pulumi.Input<pulumi.Input<v20181101.VirtualDirectoryArgs>[]>;
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

    }

    export namespace v20190801 {
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
            action?: pulumi.Input<enums.v20190801.AccessControlEntryAction>;
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
            computeMode?: pulumi.Input<enums.v20190801.ComputeModeOptions>;
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

    }

    export namespace v20200601 {
    }

    export namespace v20200901 {
    }

    export namespace v20201001 {
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
            azureBlobStorage?: pulumi.Input<v20201001.AzureBlobStorageApplicationLogsConfigArgs>;
            /**
             * Application logs to azure table storage configuration.
             */
            azureTableStorage?: pulumi.Input<v20201001.AzureTableStorageApplicationLogsConfigArgs>;
            /**
             * Application logs to file system configuration.
             */
            fileSystem?: pulumi.Input<v20201001.FileSystemApplicationLogsConfigArgs>;
        }
        /**
         * applicationLogsConfigArgsProvideDefaults sets the appropriate defaults for ApplicationLogsConfigArgs
         */
        export function applicationLogsConfigArgsProvideDefaults(val: ApplicationLogsConfigArgs): ApplicationLogsConfigArgs {
            return {
                ...val,
                fileSystem: (val.fileSystem ? pulumi.output(val.fileSystem).apply(v20201001.fileSystemApplicationLogsConfigArgsProvideDefaults) : undefined),
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
            actionType?: pulumi.Input<enums.v20201001.AutoHealActionType>;
            /**
             * Custom action to be taken.
             */
            customAction?: pulumi.Input<v20201001.AutoHealCustomActionArgs>;
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
            actions?: pulumi.Input<v20201001.AutoHealActionsArgs>;
            /**
             * Conditions that describe when to execute the auto-heal actions.
             */
            triggers?: pulumi.Input<v20201001.AutoHealTriggersArgs>;
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
            requests?: pulumi.Input<v20201001.RequestsBasedTriggerArgs>;
            /**
             * A rule based on request execution time.
             */
            slowRequests?: pulumi.Input<v20201001.SlowRequestsBasedTriggerArgs>;
            /**
             * A rule based on status codes.
             */
            statusCodes?: pulumi.Input<pulumi.Input<v20201001.StatusCodesBasedTriggerArgs>[]>;
        }

        export interface AzureActiveDirectoryArgs {
            enabled?: pulumi.Input<boolean>;
            isAutoProvisioned?: pulumi.Input<boolean>;
            /**
             * Kind of resource.
             */
            kind?: pulumi.Input<string>;
            login?: pulumi.Input<v20201001.AzureActiveDirectoryLoginArgs>;
            registration?: pulumi.Input<v20201001.AzureActiveDirectoryRegistrationArgs>;
            validation?: pulumi.Input<v20201001.AzureActiveDirectoryValidationArgs>;
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
            jwtClaimChecks?: pulumi.Input<v20201001.JwtClaimChecksArgs>;
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
            level?: pulumi.Input<enums.v20201001.LogLevel>;
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
            type?: pulumi.Input<enums.v20201001.AzureStorageType>;
        }

        /**
         * Application logs to Azure table storage configuration.
         */
        export interface AzureTableStorageApplicationLogsConfigArgs {
            /**
             * Log level.
             */
            level?: pulumi.Input<enums.v20201001.LogLevel>;
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
            frequencyUnit: enums.v20201001.FrequencyUnit;
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
            frequencyUnit: pulumi.Input<enums.v20201001.FrequencyUnit>;
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
            type?: pulumi.Input<enums.v20201001.ConnectionStringType>;
        }

        /**
         * Database connection string value to type pair.
         */
        export interface ConnStringValueTypePairArgs {
            /**
             * Type of database.
             */
            type: pulumi.Input<enums.v20201001.ConnectionStringType>;
            /**
             * Value of pair.
             */
            value: pulumi.Input<string>;
        }

        export interface CookieExpirationArgs {
            convention?: pulumi.Input<enums.v20201001.CookieExpirationConvention>;
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
            login?: pulumi.Input<v20201001.OpenIdConnectLoginArgs>;
            registration?: pulumi.Input<v20201001.OpenIdConnectRegistrationArgs>;
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
            databaseType: string | enums.v20201001.DatabaseType;
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
            databaseType: pulumi.Input<string | enums.v20201001.DatabaseType>;
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
            rampUpRules?: pulumi.Input<pulumi.Input<v20201001.RampUpRuleArgs>[]>;
        }

        export interface FacebookArgs {
            enabled?: pulumi.Input<boolean>;
            graphApiVersion?: pulumi.Input<string>;
            /**
             * Kind of resource.
             */
            kind?: pulumi.Input<string>;
            login?: pulumi.Input<v20201001.LoginScopesArgs>;
            registration?: pulumi.Input<v20201001.AppRegistrationArgs>;
        }

        /**
         * Application logs to file system configuration.
         */
        export interface FileSystemApplicationLogsConfigArgs {
            /**
             * Log level.
             */
            level?: pulumi.Input<enums.v20201001.LogLevel>;
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
            convention?: pulumi.Input<enums.v20201001.ForwardProxyConvention>;
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
            login?: pulumi.Input<v20201001.LoginScopesArgs>;
            registration?: pulumi.Input<v20201001.ClientRegistrationArgs>;
        }

        export interface GlobalValidationArgs {
            excludedPaths?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Kind of resource.
             */
            kind?: pulumi.Input<string>;
            redirectToProvider?: pulumi.Input<string>;
            requireAuthentication?: pulumi.Input<boolean>;
            unauthenticatedClientAction?: pulumi.Input<enums.v20201001.UnauthenticatedClientActionV2>;
        }

        export interface GoogleArgs {
            enabled?: pulumi.Input<boolean>;
            /**
             * Kind of resource.
             */
            kind?: pulumi.Input<string>;
            login?: pulumi.Input<v20201001.LoginScopesArgs>;
            registration?: pulumi.Input<v20201001.ClientRegistrationArgs>;
            validation?: pulumi.Input<v20201001.AllowedAudiencesValidationArgs>;
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
            hostType?: pulumi.Input<enums.v20201001.HostType>;
            /**
             * Hostname.
             */
            name?: pulumi.Input<string>;
            /**
             * SSL type.
             */
            sslState?: pulumi.Input<enums.v20201001.SslState>;
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
            azureBlobStorage?: pulumi.Input<v20201001.AzureBlobStorageHttpLogsConfigArgs>;
            /**
             * Http logs to file system configuration.
             */
            fileSystem?: pulumi.Input<v20201001.FileSystemHttpLogsConfigArgs>;
        }

        export interface HttpSettingsArgs {
            forwardProxy?: pulumi.Input<v20201001.ForwardProxyArgs>;
            /**
             * Kind of resource.
             */
            kind?: pulumi.Input<string>;
            requireHttps?: pulumi.Input<boolean>;
            routes?: pulumi.Input<v20201001.HttpSettingsRoutesArgs>;
        }

        export interface HttpSettingsRoutesArgs {
            apiPrefix?: pulumi.Input<string>;
            /**
             * Kind of resource.
             */
            kind?: pulumi.Input<string>;
        }

        export interface IdentityProvidersArgs {
            azureActiveDirectory?: pulumi.Input<v20201001.AzureActiveDirectoryArgs>;
            customOpenIdConnectProviders?: pulumi.Input<{[key: string]: pulumi.Input<v20201001.CustomOpenIdConnectProviderArgs>}>;
            facebook?: pulumi.Input<v20201001.FacebookArgs>;
            gitHub?: pulumi.Input<v20201001.GitHubArgs>;
            google?: pulumi.Input<v20201001.GoogleArgs>;
            /**
             * Kind of resource.
             */
            kind?: pulumi.Input<string>;
            twitter?: pulumi.Input<v20201001.TwitterArgs>;
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
            tag?: pulumi.Input<string | enums.v20201001.IpFilterTag>;
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
            cookieExpiration?: pulumi.Input<v20201001.CookieExpirationArgs>;
            /**
             * Kind of resource.
             */
            kind?: pulumi.Input<string>;
            nonce?: pulumi.Input<v20201001.NonceArgs>;
            preserveUrlFragmentsForLogins?: pulumi.Input<boolean>;
            routes?: pulumi.Input<v20201001.LoginRoutesArgs>;
            tokenStore?: pulumi.Input<v20201001.TokenStoreArgs>;
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
            type?: pulumi.Input<enums.v20201001.ManagedServiceIdentityType>;
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
            action?: pulumi.Input<enums.v20201001.AccessControlEntryAction>;
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
            method?: pulumi.Input<enums.v20201001.ClientCredentialMethod>;
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
            clientCredential?: pulumi.Input<v20201001.OpenIdConnectClientCredentialArgs>;
            clientId?: pulumi.Input<string>;
            /**
             * Kind of resource.
             */
            kind?: pulumi.Input<string>;
            openIdConnectConfiguration?: pulumi.Input<v20201001.OpenIdConnectConfigArgs>;
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
            apiDefinition?: pulumi.Input<v20201001.ApiDefinitionInfoArgs>;
            /**
             * Azure API management settings linked to the app.
             */
            apiManagementConfig?: pulumi.Input<v20201001.ApiManagementConfigArgs>;
            /**
             * App command line to launch.
             */
            appCommandLine?: pulumi.Input<string>;
            /**
             * Application settings.
             */
            appSettings?: pulumi.Input<pulumi.Input<v20201001.NameValuePairArgs>[]>;
            /**
             * <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>.
             */
            autoHealEnabled?: pulumi.Input<boolean>;
            /**
             * Auto Heal rules.
             */
            autoHealRules?: pulumi.Input<v20201001.AutoHealRulesArgs>;
            /**
             * Auto-swap slot name.
             */
            autoSwapSlotName?: pulumi.Input<string>;
            /**
             * Connection strings.
             */
            connectionStrings?: pulumi.Input<pulumi.Input<v20201001.ConnStringInfoArgs>[]>;
            /**
             * Cross-Origin Resource Sharing (CORS) settings.
             */
            cors?: pulumi.Input<v20201001.CorsSettingsArgs>;
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
            experiments?: pulumi.Input<v20201001.ExperimentsArgs>;
            /**
             * State of FTP / FTPS service
             */
            ftpsState?: pulumi.Input<string | enums.v20201001.FtpsState>;
            /**
             * Handler mappings.
             */
            handlerMappings?: pulumi.Input<pulumi.Input<v20201001.HandlerMappingArgs>[]>;
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
            ipSecurityRestrictions?: pulumi.Input<pulumi.Input<v20201001.IpSecurityRestrictionArgs>[]>;
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
            limits?: pulumi.Input<v20201001.SiteLimitsArgs>;
            /**
             * Linux App Framework and version
             */
            linuxFxVersion?: pulumi.Input<string>;
            /**
             * Site load balancing.
             */
            loadBalancing?: pulumi.Input<enums.v20201001.SiteLoadBalancing>;
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
            managedPipelineMode?: pulumi.Input<enums.v20201001.ManagedPipelineMode>;
            /**
             * Managed Service Identity Id
             */
            managedServiceIdentityId?: pulumi.Input<number>;
            /**
             * MinTlsVersion: configures the minimum version of TLS required for SSL requests
             */
            minTlsVersion?: pulumi.Input<string | enums.v20201001.SupportedTlsVersions>;
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
            push?: pulumi.Input<v20201001.PushSettingsArgs>;
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
            scmIpSecurityRestrictions?: pulumi.Input<pulumi.Input<v20201001.IpSecurityRestrictionArgs>[]>;
            /**
             * IP security restrictions for scm to use main.
             */
            scmIpSecurityRestrictionsUseMain?: pulumi.Input<boolean>;
            /**
             * ScmMinTlsVersion: configures the minimum version of TLS required for SSL requests for SCM site
             */
            scmMinTlsVersion?: pulumi.Input<string | enums.v20201001.SupportedTlsVersions>;
            /**
             * SCM type.
             */
            scmType?: pulumi.Input<string | enums.v20201001.ScmType>;
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
            virtualApplications?: pulumi.Input<pulumi.Input<v20201001.VirtualApplicationArgs>[]>;
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
            capabilities?: pulumi.Input<pulumi.Input<v20201001.CapabilityArgs>[]>;
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
            skuCapacity?: pulumi.Input<v20201001.SkuCapacityArgs>;
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
            azureBlobStorage?: pulumi.Input<v20201001.BlobStorageTokenStoreArgs>;
            enabled?: pulumi.Input<boolean>;
            fileSystem?: pulumi.Input<v20201001.FileSystemTokenStoreArgs>;
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
            registration?: pulumi.Input<v20201001.TwitterRegistrationArgs>;
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
            virtualDirectories?: pulumi.Input<pulumi.Input<v20201001.VirtualDirectoryArgs>[]>;
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
            computeMode?: pulumi.Input<enums.v20201001.ComputeModeOptions>;
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

    }

    export namespace v20201201 {
    }

    export namespace v20210101 {
    }

    export namespace v20210115 {
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

    }

    export namespace v20210201 {
        /**
         * The configuration settings of the Allowed Audiences validation flow.
         */
        export interface AllowedAudiencesValidationArgs {
            /**
             * The configuration settings of the allowed list of audiences from which to validate the JWT token.
             */
            allowedAudiences?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * The configuration settings of the Azure Active Directory allowed principals.
         */
        export interface AllowedPrincipalsArgs {
            /**
             * The list of the allowed groups.
             */
            groups?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The list of the allowed identities.
             */
            identities?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * The configuration settings of the app registration for providers that have app ids and app secrets
         */
        export interface AppRegistrationArgs {
            /**
             * The App ID of the app used for login.
             */
            appId?: pulumi.Input<string>;
            /**
             * The app setting name that contains the app secret.
             */
            appSecretSettingName?: pulumi.Input<string>;
        }

        /**
         * The configuration settings of the Apple provider.
         */
        export interface AppleArgs {
            /**
             * <code>false</code> if the Apple provider should not be enabled despite the set registration; otherwise, <code>true</code>.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * The configuration settings of the login flow.
             */
            login?: pulumi.Input<v20210201.LoginScopesArgs>;
            /**
             * The configuration settings of the Apple registration.
             */
            registration?: pulumi.Input<v20210201.AppleRegistrationArgs>;
        }

        /**
         * The configuration settings of the registration for the Apple provider
         */
        export interface AppleRegistrationArgs {
            /**
             * The Client ID of the app used for login.
             */
            clientId?: pulumi.Input<string>;
            /**
             * The app setting name that contains the client secret.
             */
            clientSecretSettingName?: pulumi.Input<string>;
        }

        /**
         * The configuration settings of the platform of App Service Authentication/Authorization.
         */
        export interface AuthPlatformArgs {
            /**
             * The path of the config file containing auth settings if they come from a file.
             * If the path is relative, base will the site's root directory.
             */
            configFilePath?: pulumi.Input<string>;
            /**
             * <code>true</code> if the Authentication / Authorization feature is enabled for the current app; otherwise, <code>false</code>.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * The RuntimeVersion of the Authentication / Authorization feature in use for the current app.
             * The setting in this value can control the behavior of certain features in the Authentication / Authorization module.
             */
            runtimeVersion?: pulumi.Input<string>;
        }

        /**
         * The configuration settings of the Azure Active directory provider.
         */
        export interface AzureActiveDirectoryArgs {
            /**
             * <code>false</code> if the Azure Active Directory provider should not be enabled despite the set registration; otherwise, <code>true</code>.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Gets a value indicating whether the Azure AD configuration was auto-provisioned using 1st party tooling.
             * This is an internal flag primarily intended to support the Azure Management Portal. Users should not
             * read or write to this property.
             */
            isAutoProvisioned?: pulumi.Input<boolean>;
            /**
             * The configuration settings of the Azure Active Directory login flow.
             */
            login?: pulumi.Input<v20210201.AzureActiveDirectoryLoginArgs>;
            /**
             * The configuration settings of the Azure Active Directory app registration.
             */
            registration?: pulumi.Input<v20210201.AzureActiveDirectoryRegistrationArgs>;
            /**
             * The configuration settings of the Azure Active Directory token validation flow.
             */
            validation?: pulumi.Input<v20210201.AzureActiveDirectoryValidationArgs>;
        }

        /**
         * The configuration settings of the Azure Active Directory login flow.
         */
        export interface AzureActiveDirectoryLoginArgs {
            /**
             * <code>true</code> if the www-authenticate provider should be omitted from the request; otherwise, <code>false</code>.
             */
            disableWWWAuthenticate?: pulumi.Input<boolean>;
            /**
             * Login parameters to send to the OpenID Connect authorization endpoint when
             * a user logs in. Each parameter must be in the form "key=value".
             */
            loginParameters?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * The configuration settings of the Azure Active Directory app registration.
         */
        export interface AzureActiveDirectoryRegistrationArgs {
            /**
             * The Client ID of this relying party application, known as the client_id.
             * This setting is required for enabling OpenID Connection authentication with Azure Active Directory or 
             * other 3rd party OpenID Connect providers.
             * More information on OpenID Connect: http://openid.net/specs/openid-connect-core-1_0.html
             */
            clientId?: pulumi.Input<string>;
            /**
             * An alternative to the client secret thumbprint, that is the issuer of a certificate used for signing purposes. This property acts as
             * a replacement for the Client Secret Certificate Thumbprint. It is also optional.
             */
            clientSecretCertificateIssuer?: pulumi.Input<string>;
            /**
             * An alternative to the client secret thumbprint, that is the subject alternative name of a certificate used for signing purposes. This property acts as
             * a replacement for the Client Secret Certificate Thumbprint. It is also optional.
             */
            clientSecretCertificateSubjectAlternativeName?: pulumi.Input<string>;
            /**
             * An alternative to the client secret, that is the thumbprint of a certificate used for signing purposes. This property acts as
             * a replacement for the Client Secret. It is also optional.
             */
            clientSecretCertificateThumbprint?: pulumi.Input<string>;
            /**
             * The app setting name that contains the client secret of the relying party application.
             */
            clientSecretSettingName?: pulumi.Input<string>;
            /**
             * The OpenID Connect Issuer URI that represents the entity which issues access tokens for this application.
             * When using Azure Active Directory, this value is the URI of the directory tenant, e.g. https://login.microsoftonline.com/v2.0/{tenant-guid}/.
             * This URI is a case-sensitive identifier for the token issuer.
             * More information on OpenID Connect Discovery: http://openid.net/specs/openid-connect-discovery-1_0.html
             */
            openIdIssuer?: pulumi.Input<string>;
        }

        /**
         * The configuration settings of the Azure Active Directory token validation flow.
         */
        export interface AzureActiveDirectoryValidationArgs {
            /**
             * The list of audiences that can make successful authentication/authorization requests.
             */
            allowedAudiences?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The configuration settings of the default authorization policy.
             */
            defaultAuthorizationPolicy?: pulumi.Input<v20210201.DefaultAuthorizationPolicyArgs>;
            /**
             * The configuration settings of the checks that should be made while validating the JWT Claims.
             */
            jwtClaimChecks?: pulumi.Input<v20210201.JwtClaimChecksArgs>;
        }

        /**
         * The configuration settings of the Azure Static Web Apps provider.
         */
        export interface AzureStaticWebAppsArgs {
            /**
             * <code>false</code> if the Azure Static Web Apps provider should not be enabled despite the set registration; otherwise, <code>true</code>.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * The configuration settings of the Azure Static Web Apps registration.
             */
            registration?: pulumi.Input<v20210201.AzureStaticWebAppsRegistrationArgs>;
        }

        /**
         * The configuration settings of the registration for the Azure Static Web Apps provider
         */
        export interface AzureStaticWebAppsRegistrationArgs {
            /**
             * The Client ID of the app used for login.
             */
            clientId?: pulumi.Input<string>;
        }

        /**
         * The configuration settings of the storage of the tokens if blob storage is used.
         */
        export interface BlobStorageTokenStoreArgs {
            /**
             * The name of the app setting containing the SAS URL of the blob storage containing the tokens.
             */
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

        /**
         * The configuration settings of the app registration for providers that have client ids and client secrets
         */
        export interface ClientRegistrationArgs {
            /**
             * The Client ID of the app used for login.
             */
            clientId?: pulumi.Input<string>;
            /**
             * The app setting name that contains the client secret.
             */
            clientSecretSettingName?: pulumi.Input<string>;
        }

        /**
         * The configuration settings of the session cookie's expiration.
         */
        export interface CookieExpirationArgs {
            /**
             * The convention used when determining the session cookie's expiration.
             */
            convention?: pulumi.Input<enums.v20210201.CookieExpirationConvention>;
            /**
             * The time after the request is made when the session cookie should expire.
             */
            timeToExpiration?: pulumi.Input<string>;
        }

        /**
         * The configuration settings of the custom Open ID Connect provider.
         */
        export interface CustomOpenIdConnectProviderArgs {
            /**
             * <code>false</code> if the custom Open ID provider provider should not be enabled; otherwise, <code>true</code>.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * The configuration settings of the login flow of the custom Open ID Connect provider.
             */
            login?: pulumi.Input<v20210201.OpenIdConnectLoginArgs>;
            /**
             * The configuration settings of the app registration for the custom Open ID Connect provider.
             */
            registration?: pulumi.Input<v20210201.OpenIdConnectRegistrationArgs>;
        }

        /**
         * The configuration settings of the Azure Active Directory default authorization policy.
         */
        export interface DefaultAuthorizationPolicyArgs {
            /**
             * The configuration settings of the Azure Active Directory allowed applications.
             */
            allowedApplications?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The configuration settings of the Azure Active Directory allowed principals.
             */
            allowedPrincipals?: pulumi.Input<v20210201.AllowedPrincipalsArgs>;
        }

        /**
         * The configuration settings of the Facebook provider.
         */
        export interface FacebookArgs {
            /**
             * <code>false</code> if the Facebook provider should not be enabled despite the set registration; otherwise, <code>true</code>.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * The version of the Facebook api to be used while logging in.
             */
            graphApiVersion?: pulumi.Input<string>;
            /**
             * The configuration settings of the login flow.
             */
            login?: pulumi.Input<v20210201.LoginScopesArgs>;
            /**
             * The configuration settings of the app registration for the Facebook provider.
             */
            registration?: pulumi.Input<v20210201.AppRegistrationArgs>;
        }

        /**
         * The configuration settings of the storage of the tokens if a file system is used.
         */
        export interface FileSystemTokenStoreArgs {
            /**
             * The directory in which the tokens will be stored.
             */
            directory?: pulumi.Input<string>;
        }

        /**
         * The configuration settings of a forward proxy used to make the requests.
         */
        export interface ForwardProxyArgs {
            /**
             * The convention used to determine the url of the request made.
             */
            convention?: pulumi.Input<enums.v20210201.ForwardProxyConvention>;
            /**
             * The name of the header containing the host of the request.
             */
            customHostHeaderName?: pulumi.Input<string>;
            /**
             * The name of the header containing the scheme of the request.
             */
            customProtoHeaderName?: pulumi.Input<string>;
        }

        /**
         * The configuration settings of the GitHub provider.
         */
        export interface GitHubArgs {
            /**
             * <code>false</code> if the GitHub provider should not be enabled despite the set registration; otherwise, <code>true</code>.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * The configuration settings of the login flow.
             */
            login?: pulumi.Input<v20210201.LoginScopesArgs>;
            /**
             * The configuration settings of the app registration for the GitHub provider.
             */
            registration?: pulumi.Input<v20210201.ClientRegistrationArgs>;
        }

        /**
         * The configuration settings that determines the validation flow of users using App Service Authentication/Authorization.
         */
        export interface GlobalValidationArgs {
            /**
             * The paths for which unauthenticated flow would not be redirected to the login page.
             */
            excludedPaths?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The default authentication provider to use when multiple providers are configured.
             * This setting is only needed if multiple providers are configured and the unauthenticated client
             * action is set to "RedirectToLoginPage".
             */
            redirectToProvider?: pulumi.Input<string>;
            /**
             * <code>true</code> if the authentication flow is required any request is made; otherwise, <code>false</code>.
             */
            requireAuthentication?: pulumi.Input<boolean>;
            /**
             * The action to take when an unauthenticated client attempts to access the app.
             */
            unauthenticatedClientAction?: pulumi.Input<enums.v20210201.UnauthenticatedClientActionV2>;
        }

        /**
         * The configuration settings of the Google provider.
         */
        export interface GoogleArgs {
            /**
             * <code>false</code> if the Google provider should not be enabled despite the set registration; otherwise, <code>true</code>.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * The configuration settings of the login flow.
             */
            login?: pulumi.Input<v20210201.LoginScopesArgs>;
            /**
             * The configuration settings of the app registration for the Google provider.
             */
            registration?: pulumi.Input<v20210201.ClientRegistrationArgs>;
            /**
             * The configuration settings of the Azure Active Directory token validation flow.
             */
            validation?: pulumi.Input<v20210201.AllowedAudiencesValidationArgs>;
        }

        /**
         * The configuration settings of the HTTP requests for authentication and authorization requests made against App Service Authentication/Authorization.
         */
        export interface HttpSettingsArgs {
            /**
             * The configuration settings of a forward proxy used to make the requests.
             */
            forwardProxy?: pulumi.Input<v20210201.ForwardProxyArgs>;
            /**
             * <code>false</code> if the authentication/authorization responses not having the HTTPS scheme are permissible; otherwise, <code>true</code>.
             */
            requireHttps?: pulumi.Input<boolean>;
            /**
             * The configuration settings of the paths HTTP requests.
             */
            routes?: pulumi.Input<v20210201.HttpSettingsRoutesArgs>;
        }

        /**
         * The configuration settings of the paths HTTP requests.
         */
        export interface HttpSettingsRoutesArgs {
            /**
             * The prefix that should precede all the authentication/authorization paths.
             */
            apiPrefix?: pulumi.Input<string>;
        }

        /**
         * The configuration settings of each of the identity providers used to configure App Service Authentication/Authorization.
         */
        export interface IdentityProvidersArgs {
            /**
             * The configuration settings of the Apple provider.
             */
            apple?: pulumi.Input<v20210201.AppleArgs>;
            /**
             * The configuration settings of the Azure Active directory provider.
             */
            azureActiveDirectory?: pulumi.Input<v20210201.AzureActiveDirectoryArgs>;
            /**
             * The configuration settings of the Azure Static Web Apps provider.
             */
            azureStaticWebApps?: pulumi.Input<v20210201.AzureStaticWebAppsArgs>;
            /**
             * The map of the name of the alias of each custom Open ID Connect provider to the
             * configuration settings of the custom Open ID Connect provider.
             */
            customOpenIdConnectProviders?: pulumi.Input<{[key: string]: pulumi.Input<v20210201.CustomOpenIdConnectProviderArgs>}>;
            /**
             * The configuration settings of the Facebook provider.
             */
            facebook?: pulumi.Input<v20210201.FacebookArgs>;
            /**
             * The configuration settings of the GitHub provider.
             */
            gitHub?: pulumi.Input<v20210201.GitHubArgs>;
            /**
             * The configuration settings of the Google provider.
             */
            google?: pulumi.Input<v20210201.GoogleArgs>;
            /**
             * The configuration settings of the legacy Microsoft Account provider.
             */
            legacyMicrosoftAccount?: pulumi.Input<v20210201.LegacyMicrosoftAccountArgs>;
            /**
             * The configuration settings of the Twitter provider.
             */
            twitter?: pulumi.Input<v20210201.TwitterArgs>;
        }

        /**
         * The configuration settings of the checks that should be made while validating the JWT Claims.
         */
        export interface JwtClaimChecksArgs {
            /**
             * The list of the allowed client applications.
             */
            allowedClientApplications?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The list of the allowed groups.
             */
            allowedGroups?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * The configuration settings of the legacy Microsoft Account provider.
         */
        export interface LegacyMicrosoftAccountArgs {
            /**
             * <code>false</code> if the legacy Microsoft Account provider should not be enabled despite the set registration; otherwise, <code>true</code>.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * The configuration settings of the login flow.
             */
            login?: pulumi.Input<v20210201.LoginScopesArgs>;
            /**
             * The configuration settings of the app registration for the legacy Microsoft Account provider.
             */
            registration?: pulumi.Input<v20210201.ClientRegistrationArgs>;
            /**
             * The configuration settings of the legacy Microsoft Account provider token validation flow.
             */
            validation?: pulumi.Input<v20210201.AllowedAudiencesValidationArgs>;
        }

        /**
         * The configuration settings of the login flow of users using App Service Authentication/Authorization.
         */
        export interface LoginArgs {
            /**
             * External URLs that can be redirected to as part of logging in or logging out of the app. Note that the query string part of the URL is ignored.
             * This is an advanced setting typically only needed by Windows Store application backends.
             * Note that URLs within the current domain are always implicitly allowed.
             */
            allowedExternalRedirectUrls?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The configuration settings of the session cookie's expiration.
             */
            cookieExpiration?: pulumi.Input<v20210201.CookieExpirationArgs>;
            /**
             * The configuration settings of the nonce used in the login flow.
             */
            nonce?: pulumi.Input<v20210201.NonceArgs>;
            /**
             * <code>true</code> if the fragments from the request are preserved after the login request is made; otherwise, <code>false</code>.
             */
            preserveUrlFragmentsForLogins?: pulumi.Input<boolean>;
            /**
             * The routes that specify the endpoints used for login and logout requests.
             */
            routes?: pulumi.Input<v20210201.LoginRoutesArgs>;
            /**
             * The configuration settings of the token store.
             */
            tokenStore?: pulumi.Input<v20210201.TokenStoreArgs>;
        }

        /**
         * The routes that specify the endpoints used for login and logout requests.
         */
        export interface LoginRoutesArgs {
            /**
             * The endpoint at which a logout request should be made.
             */
            logoutEndpoint?: pulumi.Input<string>;
        }

        /**
         * The configuration settings of the login flow, including the scopes that should be requested.
         */
        export interface LoginScopesArgs {
            /**
             * A list of the scopes that should be requested while authenticating.
             */
            scopes?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Managed service identity.
         */
        export interface ManagedServiceIdentityArgs {
            /**
             * Type of managed service identity.
             */
            type?: pulumi.Input<enums.v20210201.ManagedServiceIdentityType>;
            /**
             * The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}
             */
            userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * The configuration settings of the nonce used in the login flow.
         */
        export interface NonceArgs {
            /**
             * The time after the request is made when the nonce should expire.
             */
            nonceExpirationInterval?: pulumi.Input<string>;
            /**
             * <code>false</code> if the nonce should not be validated while completing the login flow; otherwise, <code>true</code>.
             */
            validateNonce?: pulumi.Input<boolean>;
        }

        /**
         * The authentication client credentials of the custom Open ID Connect provider.
         */
        export interface OpenIdConnectClientCredentialArgs {
            /**
             * The app setting that contains the client secret for the custom Open ID Connect provider.
             */
            clientSecretSettingName?: pulumi.Input<string>;
            /**
             * The method that should be used to authenticate the user.
             */
            method?: pulumi.Input<enums.v20210201.ClientCredentialMethod>;
        }

        /**
         * The configuration settings of the endpoints used for the custom Open ID Connect provider.
         */
        export interface OpenIdConnectConfigArgs {
            /**
             * The endpoint to be used to make an authorization request.
             */
            authorizationEndpoint?: pulumi.Input<string>;
            /**
             * The endpoint that provides the keys necessary to validate the token.
             */
            certificationUri?: pulumi.Input<string>;
            /**
             * The endpoint that issues the token.
             */
            issuer?: pulumi.Input<string>;
            /**
             * The endpoint to be used to request a token.
             */
            tokenEndpoint?: pulumi.Input<string>;
            /**
             * The endpoint that contains all the configuration endpoints for the provider.
             */
            wellKnownOpenIdConfiguration?: pulumi.Input<string>;
        }

        /**
         * The configuration settings of the login flow of the custom Open ID Connect provider.
         */
        export interface OpenIdConnectLoginArgs {
            /**
             * The name of the claim that contains the users name.
             */
            nameClaimType?: pulumi.Input<string>;
            /**
             * A list of the scopes that should be requested while authenticating.
             */
            scopes?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * The configuration settings of the app registration for the custom Open ID Connect provider.
         */
        export interface OpenIdConnectRegistrationArgs {
            /**
             * The authentication credentials of the custom Open ID Connect provider.
             */
            clientCredential?: pulumi.Input<v20210201.OpenIdConnectClientCredentialArgs>;
            /**
             * The client id of the custom Open ID Connect provider.
             */
            clientId?: pulumi.Input<string>;
            /**
             * The configuration settings of the endpoints used for the custom Open ID Connect provider.
             */
            openIdConnectConfiguration?: pulumi.Input<v20210201.OpenIdConnectConfigArgs>;
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
            capabilities?: pulumi.Input<pulumi.Input<v20210201.CapabilityArgs>[]>;
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
            skuCapacity?: pulumi.Input<v20210201.SkuCapacityArgs>;
            /**
             * Service tier of the resource SKU.
             */
            tier?: pulumi.Input<string>;
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
         * The configuration settings of the token store.
         */
        export interface TokenStoreArgs {
            /**
             * The configuration settings of the storage of the tokens if blob storage is used.
             */
            azureBlobStorage?: pulumi.Input<v20210201.BlobStorageTokenStoreArgs>;
            /**
             * <code>true</code> to durably store platform-specific security tokens that are obtained during login flows; otherwise, <code>false</code>.
             *  The default is <code>false</code>.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * The configuration settings of the storage of the tokens if a file system is used.
             */
            fileSystem?: pulumi.Input<v20210201.FileSystemTokenStoreArgs>;
            /**
             * The number of hours after session token expiration that a session token can be used to
             * call the token refresh API. The default is 72 hours.
             */
            tokenRefreshExtensionHours?: pulumi.Input<number>;
        }

        /**
         * The configuration settings of the Twitter provider.
         */
        export interface TwitterArgs {
            /**
             * <code>false</code> if the Twitter provider should not be enabled despite the set registration; otherwise, <code>true</code>.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * The configuration settings of the app registration for the Twitter provider.
             */
            registration?: pulumi.Input<v20210201.TwitterRegistrationArgs>;
        }

        /**
         * The configuration settings of the app registration for the Twitter provider.
         */
        export interface TwitterRegistrationArgs {
            /**
             * The OAuth 1.0a consumer key of the Twitter application used for sign-in.
             * This setting is required for enabling Twitter Sign-In.
             * Twitter Sign-In documentation: https://dev.twitter.com/web/sign-in
             */
            consumerKey?: pulumi.Input<string>;
            /**
             * The app setting name that contains the OAuth 1.0a consumer secret of the Twitter
             * application used for sign-in.
             */
            consumerSecretSettingName?: pulumi.Input<string>;
        }

    }

    export namespace v20210301 {
    }

    export namespace v20220301 {
    }

    export namespace v20220901 {
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
            logAnalyticsConfiguration?: pulumi.Input<v20220901.LogAnalyticsConfigurationArgs>;
        }

        /**
         * Application logs configuration.
         */
        export interface ApplicationLogsConfigArgs {
            /**
             * Application logs to blob storage configuration.
             */
            azureBlobStorage?: pulumi.Input<v20220901.AzureBlobStorageApplicationLogsConfigArgs>;
            /**
             * Application logs to azure table storage configuration.
             */
            azureTableStorage?: pulumi.Input<v20220901.AzureTableStorageApplicationLogsConfigArgs>;
            /**
             * Application logs to file system configuration.
             */
            fileSystem?: pulumi.Input<v20220901.FileSystemApplicationLogsConfigArgs>;
        }
        /**
         * applicationLogsConfigArgsProvideDefaults sets the appropriate defaults for ApplicationLogsConfigArgs
         */
        export function applicationLogsConfigArgsProvideDefaults(val: ApplicationLogsConfigArgs): ApplicationLogsConfigArgs {
            return {
                ...val,
                fileSystem: (val.fileSystem ? pulumi.output(val.fileSystem).apply(v20220901.fileSystemApplicationLogsConfigArgsProvideDefaults) : undefined),
            };
        }

        export interface ArcConfigurationArgs {
            artifactStorageAccessMode?: pulumi.Input<string>;
            artifactStorageClassName?: pulumi.Input<string>;
            artifactStorageMountPath?: pulumi.Input<string>;
            artifactStorageNodeName?: pulumi.Input<string>;
            artifactsStorageType?: pulumi.Input<enums.v20220901.StorageType>;
            frontEndServiceConfiguration?: pulumi.Input<v20220901.FrontEndConfigurationArgs>;
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
            actionType?: pulumi.Input<enums.v20220901.AutoHealActionType>;
            /**
             * Custom action to be taken.
             */
            customAction?: pulumi.Input<v20220901.AutoHealCustomActionArgs>;
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
            actions?: pulumi.Input<v20220901.AutoHealActionsArgs>;
            /**
             * Conditions that describe when to execute the auto-heal actions.
             */
            triggers?: pulumi.Input<v20220901.AutoHealTriggersArgs>;
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
            requests?: pulumi.Input<v20220901.RequestsBasedTriggerArgs>;
            /**
             * A rule based on request execution time.
             */
            slowRequests?: pulumi.Input<v20220901.SlowRequestsBasedTriggerArgs>;
            /**
             * A rule based on multiple Slow Requests Rule with path
             */
            slowRequestsWithPath?: pulumi.Input<pulumi.Input<v20220901.SlowRequestsBasedTriggerArgs>[]>;
            /**
             * A rule based on status codes.
             */
            statusCodes?: pulumi.Input<pulumi.Input<v20220901.StatusCodesBasedTriggerArgs>[]>;
            /**
             * A rule based on status codes ranges.
             */
            statusCodesRange?: pulumi.Input<pulumi.Input<v20220901.StatusCodesRangeBasedTriggerArgs>[]>;
        }

        /**
         * Application logs azure blob storage configuration.
         */
        export interface AzureBlobStorageApplicationLogsConfigArgs {
            /**
             * Log level.
             */
            level?: pulumi.Input<enums.v20220901.LogLevel>;
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
            type?: pulumi.Input<enums.v20220901.AzureStorageType>;
        }

        /**
         * Application logs to Azure table storage configuration.
         */
        export interface AzureTableStorageApplicationLogsConfigArgs {
            /**
             * Log level.
             */
            level?: pulumi.Input<enums.v20220901.LogLevel>;
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
            frequencyUnit: enums.v20220901.FrequencyUnit;
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
            frequencyUnit: pulumi.Input<enums.v20220901.FrequencyUnit>;
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
            type?: pulumi.Input<enums.v20220901.ConnectionStringType>;
        }

        /**
         * Database connection string value to type pair.
         */
        export interface ConnStringValueTypePairArgs {
            /**
             * Type of database.
             */
            type: pulumi.Input<enums.v20220901.ConnectionStringType>;
            /**
             * Value of pair.
             */
            value: pulumi.Input<string>;
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
            databaseType: string | enums.v20220901.DatabaseType;
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
            databaseType: pulumi.Input<string | enums.v20220901.DatabaseType>;
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
            rampUpRules?: pulumi.Input<pulumi.Input<v20220901.RampUpRuleArgs>[]>;
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
            level?: pulumi.Input<enums.v20220901.LogLevel>;
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
            kind?: pulumi.Input<enums.v20220901.FrontEndServiceType>;
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
            codeConfiguration?: pulumi.Input<v20220901.GitHubActionCodeConfigurationArgs>;
            /**
             * GitHub Action container configuration.
             */
            containerConfiguration?: pulumi.Input<v20220901.GitHubActionContainerConfigurationArgs>;
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
            hostType?: pulumi.Input<enums.v20220901.HostType>;
            /**
             * Hostname.
             */
            name?: pulumi.Input<string>;
            /**
             * SSL type.
             */
            sslState?: pulumi.Input<enums.v20220901.SslState>;
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
            azureBlobStorage?: pulumi.Input<v20220901.AzureBlobStorageHttpLogsConfigArgs>;
            /**
             * Http logs to file system configuration.
             */
            fileSystem?: pulumi.Input<v20220901.FileSystemHttpLogsConfigArgs>;
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
            tag?: pulumi.Input<string | enums.v20220901.IpFilterTag>;
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
            type?: pulumi.Input<enums.v20220901.ManagedServiceIdentityType>;
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
            apiDefinition?: pulumi.Input<v20220901.ApiDefinitionInfoArgs>;
            /**
             * Azure API management settings linked to the app.
             */
            apiManagementConfig?: pulumi.Input<v20220901.ApiManagementConfigArgs>;
            /**
             * App command line to launch.
             */
            appCommandLine?: pulumi.Input<string>;
            /**
             * Application settings.
             */
            appSettings?: pulumi.Input<pulumi.Input<v20220901.NameValuePairArgs>[]>;
            /**
             * <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>.
             */
            autoHealEnabled?: pulumi.Input<boolean>;
            /**
             * Auto Heal rules.
             */
            autoHealRules?: pulumi.Input<v20220901.AutoHealRulesArgs>;
            /**
             * Auto-swap slot name.
             */
            autoSwapSlotName?: pulumi.Input<string>;
            /**
             * List of Azure Storage Accounts.
             */
            azureStorageAccounts?: pulumi.Input<{[key: string]: pulumi.Input<v20220901.AzureStorageInfoValueArgs>}>;
            /**
             * Connection strings.
             */
            connectionStrings?: pulumi.Input<pulumi.Input<v20220901.ConnStringInfoArgs>[]>;
            /**
             * Cross-Origin Resource Sharing (CORS) settings.
             */
            cors?: pulumi.Input<v20220901.CorsSettingsArgs>;
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
            experiments?: pulumi.Input<v20220901.ExperimentsArgs>;
            /**
             * State of FTP / FTPS service
             */
            ftpsState?: pulumi.Input<string | enums.v20220901.FtpsState>;
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
            handlerMappings?: pulumi.Input<pulumi.Input<v20220901.HandlerMappingArgs>[]>;
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
            ipSecurityRestrictions?: pulumi.Input<pulumi.Input<v20220901.IpSecurityRestrictionArgs>[]>;
            /**
             * Default action for main access restriction if no rules are matched.
             */
            ipSecurityRestrictionsDefaultAction?: pulumi.Input<string | enums.v20220901.DefaultAction>;
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
            limits?: pulumi.Input<v20220901.SiteLimitsArgs>;
            /**
             * Linux App Framework and version
             */
            linuxFxVersion?: pulumi.Input<string>;
            /**
             * Site load balancing.
             */
            loadBalancing?: pulumi.Input<enums.v20220901.SiteLoadBalancing>;
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
            managedPipelineMode?: pulumi.Input<enums.v20220901.ManagedPipelineMode>;
            /**
             * Managed Service Identity Id
             */
            managedServiceIdentityId?: pulumi.Input<number>;
            /**
             * Application metadata. This property cannot be retrieved, since it may contain secrets.
             */
            metadata?: pulumi.Input<pulumi.Input<v20220901.NameValuePairArgs>[]>;
            /**
             * MinTlsVersion: configures the minimum version of TLS required for SSL requests
             */
            minTlsVersion?: pulumi.Input<string | enums.v20220901.SupportedTlsVersions>;
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
            push?: pulumi.Input<v20220901.PushSettingsArgs>;
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
            scmIpSecurityRestrictions?: pulumi.Input<pulumi.Input<v20220901.IpSecurityRestrictionArgs>[]>;
            /**
             * Default action for scm access restriction if no rules are matched.
             */
            scmIpSecurityRestrictionsDefaultAction?: pulumi.Input<string | enums.v20220901.DefaultAction>;
            /**
             * IP security restrictions for scm to use main.
             */
            scmIpSecurityRestrictionsUseMain?: pulumi.Input<boolean>;
            /**
             * ScmMinTlsVersion: configures the minimum version of TLS required for SSL requests for SCM site
             */
            scmMinTlsVersion?: pulumi.Input<string | enums.v20220901.SupportedTlsVersions>;
            /**
             * SCM type.
             */
            scmType?: pulumi.Input<string | enums.v20220901.ScmType>;
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
            virtualApplications?: pulumi.Input<pulumi.Input<v20220901.VirtualApplicationArgs>[]>;
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
            capabilities?: pulumi.Input<pulumi.Input<v20220901.CapabilityArgs>[]>;
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
            skuCapacity?: pulumi.Input<v20220901.SkuCapacityArgs>;
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
            virtualDirectories?: pulumi.Input<pulumi.Input<v20220901.VirtualDirectoryArgs>[]>;
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

    }
}
