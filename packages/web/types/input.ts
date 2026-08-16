import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The configuration settings of the Allowed Audiences validation flow.
 */
export interface AllowedAudiencesValidationArgs {
    /**
     * The configuration settings of the allowed list of audiences from which to validate the JWT token.
     */
    allowedAudiences?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * The configuration settings of the Azure Active Directory allowed principals.
 */
export interface AllowedPrincipalsArgs {
    /**
     * The list of the allowed groups.
     */
    groups?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The list of the allowed identities.
     */
    identities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

export interface ApiConnectionDefinitionPropertiesArgs {
    api?: pulumi.Input<ApiReferenceArgs | undefined>;
    /**
     * Timestamp of last connection change
     */
    changedTime?: pulumi.Input<string | undefined>;
    /**
     * Timestamp of the connection creation
     */
    createdTime?: pulumi.Input<string | undefined>;
    /**
     * Dictionary of custom parameter values
     */
    customParameterValues?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Display name
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * Dictionary of nonsecret parameter values
     */
    nonSecretParameterValues?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Dictionary of parameter values
     */
    parameterValues?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Status of the connection
     */
    statuses?: pulumi.Input<pulumi.Input<ConnectionStatusDefinitionArgs>[] | undefined>;
    /**
     * Links to test the API connection
     */
    testLinks?: pulumi.Input<pulumi.Input<ApiConnectionTestLinkArgs>[] | undefined>;
}

/**
 * API connection properties
 */
export interface ApiConnectionTestLinkArgs {
    /**
     * HTTP Method
     */
    method?: pulumi.Input<string | undefined>;
    /**
     * Test link request URI
     */
    requestUri?: pulumi.Input<string | undefined>;
}

/**
 * Information about the formal API definition for the app.
 */
export interface ApiDefinitionInfoArgs {
    /**
     * The URL of the API definition.
     */
    url?: pulumi.Input<string | undefined>;
}

/**
 * Azure API management (APIM) configuration linked to the app.
 */
export interface ApiManagementConfigArgs {
    /**
     * APIM-Api Identifier.
     */
    id?: pulumi.Input<string | undefined>;
}

/**
 * OAuth settings for the connection provider
 */
export interface ApiOAuthSettingsArgs {
    /**
     * Resource provider client id
     */
    clientId?: pulumi.Input<string | undefined>;
    /**
     * Client Secret needed for OAuth
     */
    clientSecret?: pulumi.Input<string | undefined>;
    /**
     * OAuth parameters key is the name of parameter
     */
    customParameters?: pulumi.Input<{[key: string]: pulumi.Input<ApiOAuthSettingsParameterArgs>} | undefined>;
    /**
     * Identity provider
     */
    identityProvider?: pulumi.Input<string | undefined>;
    /**
     * Read only properties for this oauth setting.
     */
    properties?: any | undefined;
    /**
     * Url
     */
    redirectUrl?: pulumi.Input<string | undefined>;
    /**
     * OAuth scopes
     */
    scopes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * OAuth settings for the API
 */
export interface ApiOAuthSettingsParameterArgs {
    /**
     * Options available to this parameter
     */
    options?: any | undefined;
    /**
     * UI definitions per culture as caller can specify the culture
     */
    uiDefinition?: any | undefined;
    /**
     * Value of the setting
     */
    value?: pulumi.Input<string | undefined>;
}

export interface ApiReferenceArgs {
    /**
     * Brand color
     */
    brandColor?: pulumi.Input<string | undefined>;
    /**
     * The custom API description
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * The display name
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * The icon URI
     */
    iconUri?: pulumi.Input<string | undefined>;
    /**
     * Resource reference id
     */
    id?: pulumi.Input<string | undefined>;
    /**
     * The name of the API
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * The JSON representation of the swagger
     */
    swagger?: any | undefined;
    /**
     * Resource reference type
     */
    type?: pulumi.Input<string | undefined>;
}

/**
 * The API backend service
 */
export interface ApiResourceBackendServiceArgs {
    /**
     * The service URL
     */
    serviceUrl?: pulumi.Input<string | undefined>;
}

/**
 * API Definitions
 */
export interface ApiResourceDefinitionsArgs {
    /**
     * The modified swagger URL
     */
    modifiedSwaggerUrl?: pulumi.Input<string | undefined>;
    /**
     * The original swagger URL
     */
    originalSwaggerUrl?: pulumi.Input<string | undefined>;
}

export interface AppLogsConfigurationArgs {
    destination?: pulumi.Input<string | undefined>;
    logAnalyticsConfiguration?: pulumi.Input<LogAnalyticsConfigurationArgs | undefined>;
}

/**
 * The configuration settings of the app registration for providers that have app ids and app secrets
 */
export interface AppRegistrationArgs {
    /**
     * The App ID of the app used for login.
     */
    appId?: pulumi.Input<string | undefined>;
    /**
     * The app setting name that contains the app secret.
     */
    appSecretSettingName?: pulumi.Input<string | undefined>;
}

/**
 * The configuration settings of the Apple provider.
 */
export interface AppleArgs {
    /**
     * <code>false</code> if the Apple provider should not be enabled despite the set registration; otherwise, <code>true</code>.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * The configuration settings of the login flow.
     */
    login?: pulumi.Input<LoginScopesArgs | undefined>;
    /**
     * The configuration settings of the Apple registration.
     */
    registration?: pulumi.Input<AppleRegistrationArgs | undefined>;
}

/**
 * The configuration settings of the registration for the Apple provider
 */
export interface AppleRegistrationArgs {
    /**
     * The Client ID of the app used for login.
     */
    clientId?: pulumi.Input<string | undefined>;
    /**
     * The app setting name that contains the client secret.
     */
    clientSecretSettingName?: pulumi.Input<string | undefined>;
}

/**
 * Application logs configuration.
 */
export interface ApplicationLogsConfigArgs {
    /**
     * Application logs to blob storage configuration.
     */
    azureBlobStorage?: pulumi.Input<AzureBlobStorageApplicationLogsConfigArgs | undefined>;
    /**
     * Application logs to azure table storage configuration.
     */
    azureTableStorage?: pulumi.Input<AzureTableStorageApplicationLogsConfigArgs | undefined>;
    /**
     * Application logs to file system configuration.
     */
    fileSystem?: pulumi.Input<FileSystemApplicationLogsConfigArgs | undefined>;
}
/**
 * applicationLogsConfigArgsProvideDefaults sets the appropriate defaults for ApplicationLogsConfigArgs
 */
export function applicationLogsConfigArgsProvideDefaults(val: ApplicationLogsConfigArgs): ApplicationLogsConfigArgs {
    return {
        ...val,
        fileSystem: pulumi.output(val.fileSystem).apply(v => v === undefined ? undefined : fileSystemApplicationLogsConfigArgsProvideDefaults(v)),
    };
}

export interface ArcConfigurationArgs {
    artifactStorageAccessMode?: pulumi.Input<string | undefined>;
    artifactStorageClassName?: pulumi.Input<string | undefined>;
    artifactStorageMountPath?: pulumi.Input<string | undefined>;
    artifactStorageNodeName?: pulumi.Input<string | undefined>;
    artifactsStorageType?: pulumi.Input<enums.StorageType | undefined>;
    frontEndServiceConfiguration?: pulumi.Input<FrontEndConfigurationArgs | undefined>;
    kubeConfig?: pulumi.Input<string | undefined>;
}

/**
 * Full view of networking configuration for an ASE.
 */
export interface AseV3NetworkingConfigurationArgs {
    /**
     * Property to enable and disable new private endpoint connection creation on ASE
     */
    allowNewPrivateEndpointConnections?: pulumi.Input<boolean | undefined>;
    /**
     * Property to enable and disable FTP on ASEV3
     */
    ftpEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * Customer provided Inbound IP Address. Only able to be set on Ase create.
     */
    inboundIpAddressOverride?: pulumi.Input<string | undefined>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string | undefined>;
    /**
     * Property to enable and disable Remote Debug on ASEV3
     */
    remoteDebugEnabled?: pulumi.Input<boolean | undefined>;
}

/**
 * The configuration settings of the platform of App Service Authentication/Authorization.
 */
export interface AuthPlatformArgs {
    /**
     * The path of the config file containing auth settings if they come from a file.
     * If the path is relative, base will the site's root directory.
     */
    configFilePath?: pulumi.Input<string | undefined>;
    /**
     * <code>true</code> if the Authentication / Authorization feature is enabled for the current app; otherwise, <code>false</code>.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * The RuntimeVersion of the Authentication / Authorization feature in use for the current app.
     * The setting in this value can control the behavior of certain features in the Authentication / Authorization module.
     */
    runtimeVersion?: pulumi.Input<string | undefined>;
}

/**
 * Actions which to take by the auto-heal module when a rule is triggered.
 */
export interface AutoHealActionsArgs {
    /**
     * Predefined action to be taken.
     */
    actionType?: pulumi.Input<enums.AutoHealActionType | undefined>;
    /**
     * Custom action to be taken.
     */
    customAction?: pulumi.Input<AutoHealCustomActionArgs | undefined>;
    /**
     * Minimum time the process must execute
     * before taking the action
     */
    minProcessExecutionTime?: pulumi.Input<string | undefined>;
}

/**
 * Custom action to be executed
 * when an auto heal rule is triggered.
 */
export interface AutoHealCustomActionArgs {
    /**
     * Executable to be run.
     */
    exe?: pulumi.Input<string | undefined>;
    /**
     * Parameters for the executable.
     */
    parameters?: pulumi.Input<string | undefined>;
}

/**
 * Rules that can be defined for auto-heal.
 */
export interface AutoHealRulesArgs {
    /**
     * Actions to be executed when a rule is triggered.
     */
    actions?: pulumi.Input<AutoHealActionsArgs | undefined>;
    /**
     * Conditions that describe when to execute the auto-heal actions.
     */
    triggers?: pulumi.Input<AutoHealTriggersArgs | undefined>;
}

/**
 * Triggers for auto-heal.
 */
export interface AutoHealTriggersArgs {
    /**
     * A rule based on private bytes.
     */
    privateBytesInKB?: pulumi.Input<number | undefined>;
    /**
     * A rule based on total requests.
     */
    requests?: pulumi.Input<RequestsBasedTriggerArgs | undefined>;
    /**
     * A rule based on request execution time.
     */
    slowRequests?: pulumi.Input<SlowRequestsBasedTriggerArgs | undefined>;
    /**
     * A rule based on multiple Slow Requests Rule with path
     */
    slowRequestsWithPath?: pulumi.Input<pulumi.Input<SlowRequestsBasedTriggerArgs>[] | undefined>;
    /**
     * A rule based on status codes.
     */
    statusCodes?: pulumi.Input<pulumi.Input<StatusCodesBasedTriggerArgs>[] | undefined>;
    /**
     * A rule based on status codes ranges.
     */
    statusCodesRange?: pulumi.Input<pulumi.Input<StatusCodesRangeBasedTriggerArgs>[] | undefined>;
}

/**
 * The configuration settings of the Azure Active directory provider.
 */
export interface AzureActiveDirectoryArgs {
    /**
     * <code>false</code> if the Azure Active Directory provider should not be enabled despite the set registration; otherwise, <code>true</code>.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * Gets a value indicating whether the Azure AD configuration was auto-provisioned using 1st party tooling.
     * This is an internal flag primarily intended to support the Azure Management Portal. Users should not
     * read or write to this property.
     */
    isAutoProvisioned?: pulumi.Input<boolean | undefined>;
    /**
     * The configuration settings of the Azure Active Directory login flow.
     */
    login?: pulumi.Input<AzureActiveDirectoryLoginArgs | undefined>;
    /**
     * The configuration settings of the Azure Active Directory app registration.
     */
    registration?: pulumi.Input<AzureActiveDirectoryRegistrationArgs | undefined>;
    /**
     * The configuration settings of the Azure Active Directory token validation flow.
     */
    validation?: pulumi.Input<AzureActiveDirectoryValidationArgs | undefined>;
}

/**
 * The configuration settings of the Azure Active Directory login flow.
 */
export interface AzureActiveDirectoryLoginArgs {
    /**
     * <code>true</code> if the www-authenticate provider should be omitted from the request; otherwise, <code>false</code>.
     */
    disableWWWAuthenticate?: pulumi.Input<boolean | undefined>;
    /**
     * Login parameters to send to the OpenID Connect authorization endpoint when
     * a user logs in. Each parameter must be in the form "key=value".
     */
    loginParameters?: pulumi.Input<pulumi.Input<string>[] | undefined>;
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
    clientId?: pulumi.Input<string | undefined>;
    /**
     * An alternative to the client secret thumbprint, that is the issuer of a certificate used for signing purposes. This property acts as
     * a replacement for the Client Secret Certificate Thumbprint. It is also optional.
     */
    clientSecretCertificateIssuer?: pulumi.Input<string | undefined>;
    /**
     * An alternative to the client secret thumbprint, that is the subject alternative name of a certificate used for signing purposes. This property acts as
     * a replacement for the Client Secret Certificate Thumbprint. It is also optional.
     */
    clientSecretCertificateSubjectAlternativeName?: pulumi.Input<string | undefined>;
    /**
     * An alternative to the client secret, that is the thumbprint of a certificate used for signing purposes. This property acts as
     * a replacement for the Client Secret. It is also optional.
     */
    clientSecretCertificateThumbprint?: pulumi.Input<string | undefined>;
    /**
     * The app setting name that contains the client secret of the relying party application.
     */
    clientSecretSettingName?: pulumi.Input<string | undefined>;
    /**
     * The OpenID Connect Issuer URI that represents the entity which issues access tokens for this application.
     * When using Azure Active Directory, this value is the URI of the directory tenant, e.g. `https://login.microsoftonline.com/v2.0/{tenant-guid}/`.
     * This URI is a case-sensitive identifier for the token issuer.
     * More information on OpenID Connect Discovery: http://openid.net/specs/openid-connect-discovery-1_0.html
     */
    openIdIssuer?: pulumi.Input<string | undefined>;
}

/**
 * The configuration settings of the Azure Active Directory token validation flow.
 */
export interface AzureActiveDirectoryValidationArgs {
    /**
     * The list of audiences that can make successful authentication/authorization requests.
     */
    allowedAudiences?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The configuration settings of the default authorization policy.
     */
    defaultAuthorizationPolicy?: pulumi.Input<DefaultAuthorizationPolicyArgs | undefined>;
    /**
     * The configuration settings of the checks that should be made while validating the JWT Claims.
     */
    jwtClaimChecks?: pulumi.Input<JwtClaimChecksArgs | undefined>;
}

/**
 * Application logs azure blob storage configuration.
 */
export interface AzureBlobStorageApplicationLogsConfigArgs {
    /**
     * Log level.
     */
    level?: pulumi.Input<enums.LogLevel | undefined>;
    /**
     * Retention in days.
     * Remove blobs older than X days.
     * 0 or lower means no retention.
     */
    retentionInDays?: pulumi.Input<number | undefined>;
    /**
     * SAS url to a azure blob container with read/write/list/delete permissions.
     */
    sasUrl?: pulumi.Input<string | undefined>;
}

/**
 * Http logs to azure blob storage configuration.
 */
export interface AzureBlobStorageHttpLogsConfigArgs {
    /**
     * True if configuration is enabled, false if it is disabled and null if configuration is not set.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * Retention in days.
     * Remove blobs older than X days.
     * 0 or lower means no retention.
     */
    retentionInDays?: pulumi.Input<number | undefined>;
    /**
     * SAS url to a azure blob container with read/write/list/delete permissions.
     */
    sasUrl?: pulumi.Input<string | undefined>;
}

/**
 * The configuration settings of the Azure Static Web Apps provider.
 */
export interface AzureStaticWebAppsArgs {
    /**
     * <code>false</code> if the Azure Static Web Apps provider should not be enabled despite the set registration; otherwise, <code>true</code>.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * The configuration settings of the Azure Static Web Apps registration.
     */
    registration?: pulumi.Input<AzureStaticWebAppsRegistrationArgs | undefined>;
}

/**
 * The configuration settings of the registration for the Azure Static Web Apps provider
 */
export interface AzureStaticWebAppsRegistrationArgs {
    /**
     * The Client ID of the app used for login.
     */
    clientId?: pulumi.Input<string | undefined>;
}

/**
 * Azure Files or Blob Storage access information value for dictionary storage.
 */
export interface AzureStorageInfoValueArgs {
    /**
     * Access key for the storage account.
     */
    accessKey?: pulumi.Input<string | undefined>;
    /**
     * Name of the storage account.
     */
    accountName?: pulumi.Input<string | undefined>;
    /**
     * Path to mount the storage within the site's runtime environment.
     */
    mountPath?: pulumi.Input<string | undefined>;
    /**
     * Mounting protocol to use for the storage account.
     */
    protocol?: pulumi.Input<string | enums.AzureStorageProtocol | undefined>;
    /**
     * Name of the file share (container name, for Blob storage).
     */
    shareName?: pulumi.Input<string | undefined>;
    /**
     * Type of storage.
     */
    type?: pulumi.Input<enums.AzureStorageType | undefined>;
}

/**
 * Application logs to Azure table storage configuration.
 */
export interface AzureTableStorageApplicationLogsConfigArgs {
    /**
     * Log level.
     */
    level?: pulumi.Input<enums.LogLevel | undefined>;
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
    startTime?: pulumi.Input<string | undefined>;
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
    sasUrlSettingName?: pulumi.Input<string | undefined>;
}

/**
 * Describes the capabilities/features allowed for a specific SKU.
 */
export interface CapabilityArgs {
    /**
     * Name of the SKU capability.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Reason of the SKU capability.
     */
    reason?: pulumi.Input<string | undefined>;
    /**
     * Value of the SKU capability.
     */
    value?: pulumi.Input<string | undefined>;
}

/**
 * The configuration settings of the app registration for providers that have client ids and client secrets
 */
export interface ClientRegistrationArgs {
    /**
     * The Client ID of the app used for login.
     */
    clientId?: pulumi.Input<string | undefined>;
    /**
     * The app setting name that contains the client secret.
     */
    clientSecretSettingName?: pulumi.Input<string | undefined>;
}

/**
 * Information needed for cloning operation.
 */
export interface CloningInfoArgs {
    /**
     * Application setting overrides for cloned app. If specified, these settings override the settings cloned
     * from source app. Otherwise, application settings from source app are retained.
     */
    appSettingsOverrides?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * <code>true</code> to clone custom hostnames from source app; otherwise, <code>false</code>.
     */
    cloneCustomHostNames?: pulumi.Input<boolean | undefined>;
    /**
     * <code>true</code> to clone source control from source app; otherwise, <code>false</code>.
     */
    cloneSourceControl?: pulumi.Input<boolean | undefined>;
    /**
     * <code>true</code> to configure load balancing for source and destination app.
     */
    configureLoadBalancing?: pulumi.Input<boolean | undefined>;
    /**
     * Correlation ID of cloning operation. This ID ties multiple cloning operations
     * together to use the same snapshot.
     */
    correlationId?: pulumi.Input<string | undefined>;
    /**
     * App Service Environment.
     */
    hostingEnvironment?: pulumi.Input<string | undefined>;
    /**
     * <code>true</code> to overwrite destination app; otherwise, <code>false</code>.
     */
    overwrite?: pulumi.Input<boolean | undefined>;
    /**
     * ARM resource ID of the source app. App resource ID is of the form
     * /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName} for production slots and
     * /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slotName} for other slots.
     */
    sourceWebAppId: pulumi.Input<string>;
    /**
     * Location of source app ex: West US or North Europe
     */
    sourceWebAppLocation?: pulumi.Input<string | undefined>;
    /**
     * ARM resource ID of the Traffic Manager profile to use, if it exists. Traffic Manager resource ID is of the form
     * /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{profileName}.
     */
    trafficManagerProfileId?: pulumi.Input<string | undefined>;
    /**
     * Name of Traffic Manager profile to create. This is only needed if Traffic Manager profile does not already exist.
     */
    trafficManagerProfileName?: pulumi.Input<string | undefined>;
}

/**
 * Database connection string information.
 */
export interface ConnStringInfoArgs {
    /**
     * Connection string value.
     */
    connectionString?: pulumi.Input<string | undefined>;
    /**
     * Name of connection string.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Type of database.
     */
    type?: pulumi.Input<enums.ConnectionStringType | undefined>;
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
    code?: pulumi.Input<string | undefined>;
    /**
     * Resource ETag
     */
    etag?: pulumi.Input<string | undefined>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string | undefined>;
    /**
     * Description of the status
     */
    message?: pulumi.Input<string | undefined>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}

export interface ConnectionGatewayDefinitionPropertiesArgs {
    /**
     * The URI of the backend
     */
    backendUri?: pulumi.Input<string | undefined>;
    /**
     * The gateway installation reference
     */
    connectionGatewayInstallation?: pulumi.Input<ConnectionGatewayReferenceArgs | undefined>;
    /**
     * The gateway admin
     */
    contactInformation?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The gateway description
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * The gateway display name
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * The machine name of the gateway
     */
    machineName?: pulumi.Input<string | undefined>;
    /**
     * The gateway status
     */
    status?: any | undefined;
}

/**
 * The gateway installation reference
 */
export interface ConnectionGatewayReferenceArgs {
    /**
     * Resource reference id
     */
    id?: pulumi.Input<string | undefined>;
    /**
     * Resource reference location
     */
    location?: pulumi.Input<string | undefined>;
    /**
     * Resource reference name
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Resource reference type
     */
    type?: pulumi.Input<string | undefined>;
}

/**
 * Connection provider parameters
 */
export interface ConnectionParameterArgs {
    /**
     * OAuth settings for the connection provider
     */
    oAuthSettings?: pulumi.Input<ApiOAuthSettingsArgs | undefined>;
    /**
     * Type of the parameter
     */
    type?: pulumi.Input<enums.ConnectionParameterType | undefined>;
}

/**
 * Connection status
 */
export interface ConnectionStatusDefinitionArgs {
    /**
     * Connection error
     */
    error?: pulumi.Input<ConnectionErrorArgs | undefined>;
    /**
     * The gateway status
     */
    status?: pulumi.Input<string | undefined>;
    /**
     * Target of the error
     */
    target?: pulumi.Input<string | undefined>;
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
    objectId?: pulumi.Input<string | undefined>;
    /**
     * Name of the parameter in the connection provider's OAuth settings
     */
    parameterName?: pulumi.Input<string | undefined>;
    /**
     * Name of the parameter in the connection provider's OAuth settings
     */
    redirectUrl?: pulumi.Input<string | undefined>;
    /**
     * The tenant id
     */
    tenantId?: pulumi.Input<string | undefined>;
}

export interface ContainerAppsConfigurationArgs {
    /**
     * Resource ID of a subnet for control plane infrastructure components. This subnet must be in the same VNET as the subnet defined in appSubnetResourceId. Must not overlap with the IP range defined in platformReservedCidr, if defined.
     */
    appSubnetResourceId?: pulumi.Input<string | undefined>;
    /**
     * Resource ID of a subnet for control plane infrastructure components. This subnet must be in the same VNET as the subnet defined in appSubnetResourceId. Must not overlap with the IP range defined in platformReservedCidr, if defined.
     */
    controlPlaneSubnetResourceId?: pulumi.Input<string | undefined>;
    /**
     * Azure Monitor instrumentation key used by Dapr to export Service to Service communication telemetry
     */
    daprAIInstrumentationKey?: pulumi.Input<string | undefined>;
    /**
     * CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the IP range defined in platformReservedCidr, if defined.
     */
    dockerBridgeCidr?: pulumi.Input<string | undefined>;
    /**
     * IP range in CIDR notation that can be reserved for environment infrastructure IP addresses. It must not overlap with any other Subnet IP ranges.
     */
    platformReservedCidr?: pulumi.Input<string | undefined>;
    /**
     * An IP address from the IP range defined by platformReservedCidr that will be reserved for the internal DNS server
     */
    platformReservedDnsIP?: pulumi.Input<string | undefined>;
}

/**
 * The configuration settings of the session cookie's expiration.
 */
export interface CookieExpirationArgs {
    /**
     * The convention used when determining the session cookie's expiration.
     */
    convention?: pulumi.Input<enums.CookieExpirationConvention | undefined>;
    /**
     * The time after the request is made when the session cookie should expire.
     */
    timeToExpiration?: pulumi.Input<string | undefined>;
}

/**
 * Cross-Origin Resource Sharing (CORS) settings for the app.
 */
export interface CorsSettingsArgs {
    /**
     * Gets or sets the list of origins that should be allowed to make cross-origin
     * calls (for example: http://example.com:12345). Use "*" to allow all.
     */
    allowedOrigins?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Gets or sets whether CORS requests with credentials are allowed. See
     * https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Requests_with_credentials
     * for more details.
     */
    supportCredentials?: pulumi.Input<boolean | undefined>;
}

/**
 * Custom API properties
 */
export interface CustomApiPropertiesDefinitionArgs {
    /**
     * API Definitions
     */
    apiDefinitions?: pulumi.Input<ApiResourceDefinitionsArgs | undefined>;
    /**
     * The API type
     */
    apiType?: pulumi.Input<string | enums.ApiType | undefined>;
    /**
     * The API backend service
     */
    backendService?: pulumi.Input<ApiResourceBackendServiceArgs | undefined>;
    /**
     * Brand color
     */
    brandColor?: pulumi.Input<string | undefined>;
    /**
     * The custom API capabilities
     */
    capabilities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Connection parameters
     */
    connectionParameters?: pulumi.Input<{[key: string]: pulumi.Input<ConnectionParameterArgs>} | undefined>;
    /**
     * The custom API description
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * The display name
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * The icon URI
     */
    iconUri?: pulumi.Input<string | undefined>;
    /**
     * Runtime URLs
     */
    runtimeUrls?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The JSON representation of the swagger
     */
    swagger?: any | undefined;
    /**
     * The WSDL definition
     */
    wsdlDefinition?: pulumi.Input<WsdlDefinitionArgs | undefined>;
}

/**
 * Full view of the custom domain suffix configuration for ASEv3.
 */
export interface CustomDnsSuffixConfigurationArgs {
    /**
     * The URL referencing the Azure Key Vault certificate secret that should be used as the default SSL/TLS certificate for sites with the custom domain suffix.
     */
    certificateUrl?: pulumi.Input<string | undefined>;
    /**
     * The default custom domain suffix to use for all sites deployed on the ASE.
     */
    dnsSuffix?: pulumi.Input<string | undefined>;
    /**
     * The user-assigned identity to use for resolving the key vault certificate reference. If not specified, the system-assigned ASE identity will be used if available.
     */
    keyVaultReferenceIdentity?: pulumi.Input<string | undefined>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string | undefined>;
}

/**
 * The configuration settings of the custom Open ID Connect provider.
 */
export interface CustomOpenIdConnectProviderArgs {
    /**
     * <code>false</code> if the custom Open ID provider provider should not be enabled; otherwise, <code>true</code>.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * The configuration settings of the login flow of the custom Open ID Connect provider.
     */
    login?: pulumi.Input<OpenIdConnectLoginArgs | undefined>;
    /**
     * The configuration settings of the app registration for the custom Open ID Connect provider.
     */
    registration?: pulumi.Input<OpenIdConnectRegistrationArgs | undefined>;
}

/**
 * The configuration settings of the custom Open ID Connect provider.
 */
export interface CustomOpenIdConnectProviderV1Args {
    /**
     * <code>false</code> if the custom Open ID provider provider should not be enabled; otherwise, <code>true</code>.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * The configuration settings of the login flow of the custom Open ID Connect provider.
     */
    login?: pulumi.Input<OpenIdConnectLoginArgs | undefined>;
    /**
     * The configuration settings of the app registration for the custom Open ID Connect provider.
     */
    registration?: pulumi.Input<OpenIdConnectRegistrationV1Args | undefined>;
}

/**
 * App Dapr configuration.
 */
export interface DaprConfigArgs {
    /**
     * Dapr application identifier
     */
    appId?: pulumi.Input<string | undefined>;
    /**
     * Tells Dapr which port your application is listening on
     */
    appPort?: pulumi.Input<number | undefined>;
    /**
     * Enables API logging for the Dapr sidecar
     */
    enableApiLogging?: pulumi.Input<boolean | undefined>;
    /**
     * Boolean indicating if the Dapr side car is enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * Increasing max size of request body http servers parameter in MB to handle uploading of big files. Default is 4 MB.
     */
    httpMaxRequestSize?: pulumi.Input<number | undefined>;
    /**
     * Dapr max size of http header read buffer in KB to handle when sending multi-KB headers. Default is 65KB.
     */
    httpReadBufferSize?: pulumi.Input<number | undefined>;
    /**
     * Sets the log level for the Dapr sidecar. Allowed values are debug, info, warn, error. Default is info.
     */
    logLevel?: pulumi.Input<string | enums.DaprLogLevel | undefined>;
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
    connectionString?: pulumi.Input<string | undefined>;
    /**
     * Contains a connection string name that is linked to the SiteConfig.ConnectionStrings.
     * This is used during restore with overwrite connection strings options.
     */
    connectionStringName?: pulumi.Input<string | undefined>;
    /**
     * Database type (e.g. SqlAzure / MySql).
     */
    databaseType: pulumi.Input<string | enums.DatabaseType>;
    name?: pulumi.Input<string | undefined>;
}

/**
 * The configuration settings of the Azure Active Directory default authorization policy.
 */
export interface DefaultAuthorizationPolicyArgs {
    /**
     * The configuration settings of the Azure Active Directory allowed applications.
     */
    allowedApplications?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The configuration settings of the Azure Active Directory allowed principals.
     */
    allowedPrincipals?: pulumi.Input<AllowedPrincipalsArgs | undefined>;
}

export interface DefaultIdentityArgs {
    /**
     * Type of managed service identity.
     */
    identityType?: pulumi.Input<enums.ManagedServiceIdentityType | undefined>;
    userAssignedIdentityResourceId?: pulumi.Input<string | undefined>;
}

/**
 * Enabled configuration.
 */
export interface EnabledConfigArgs {
    /**
     * True if configuration is enabled, false if it is disabled and null if configuration is not set.
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

export interface EnvironmentVariableArgs {
    /**
     * Environment variable name
     */
    name: pulumi.Input<string>;
    /**
     * The value of this environment variable must be the name of an AppSetting. The actual value of the environment variable in container will be retrieved from the specified AppSetting at runtime. If the AppSetting is not found, the value will be set to an empty string in the container at runtime.
     */
    value: pulumi.Input<string>;
}

/**
 * Routing rules in production experiments.
 */
export interface ExperimentsArgs {
    /**
     * List of ramp-up rules.
     */
    rampUpRules?: pulumi.Input<pulumi.Input<RampUpRuleArgs>[] | undefined>;
}

/**
 * Extended Location.
 */
export interface ExtendedLocationArgs {
    /**
     * Name of extended location.
     */
    name?: pulumi.Input<string | undefined>;
}

/**
 * The configuration settings of the Facebook provider.
 */
export interface FacebookArgs {
    /**
     * <code>false</code> if the Facebook provider should not be enabled despite the set registration; otherwise, <code>true</code>.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * The version of the Facebook api to be used while logging in.
     */
    graphApiVersion?: pulumi.Input<string | undefined>;
    /**
     * The configuration settings of the login flow.
     */
    login?: pulumi.Input<LoginScopesArgs | undefined>;
    /**
     * The configuration settings of the app registration for the Facebook provider.
     */
    registration?: pulumi.Input<AppRegistrationArgs | undefined>;
}

/**
 * Application logs to file system configuration.
 */
export interface FileSystemApplicationLogsConfigArgs {
    /**
     * Log level.
     */
    level?: pulumi.Input<enums.LogLevel | undefined>;
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
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * Retention in days.
     * Remove files older than X days.
     * 0 or lower means no retention.
     */
    retentionInDays?: pulumi.Input<number | undefined>;
    /**
     * Maximum size in megabytes that http log files can use.
     * When reached old log files will be removed to make space for new ones.
     * Value can range between 25 and 100.
     */
    retentionInMb?: pulumi.Input<number | undefined>;
}

/**
 * The configuration settings of the storage of the tokens if a file system is used.
 */
export interface FileSystemTokenStoreArgs {
    /**
     * The directory in which the tokens will be stored.
     */
    directory?: pulumi.Input<string | undefined>;
}

/**
 * The configuration settings of a forward proxy used to make the requests.
 */
export interface ForwardProxyArgs {
    /**
     * The convention used to determine the url of the request made.
     */
    convention?: pulumi.Input<enums.ForwardProxyConvention | undefined>;
    /**
     * The name of the header containing the host of the request.
     */
    customHostHeaderName?: pulumi.Input<string | undefined>;
    /**
     * The name of the header containing the scheme of the request.
     */
    customProtoHeaderName?: pulumi.Input<string | undefined>;
}

export interface FrontEndConfigurationArgs {
    kind?: pulumi.Input<enums.FrontEndServiceType | undefined>;
}

/**
 * Function app configuration.
 */
export interface FunctionAppConfigArgs {
    /**
     * Function app deployment configuration.
     */
    deployment?: pulumi.Input<FunctionsDeploymentArgs | undefined>;
    /**
     * Function app runtime settings.
     */
    runtime?: pulumi.Input<FunctionsRuntimeArgs | undefined>;
    /**
     * Function app scale and concurrency settings.
     */
    scaleAndConcurrency?: pulumi.Input<FunctionsScaleAndConcurrencyArgs | undefined>;
    /**
     * Function app site update strategy configuration.
     */
    siteUpdateStrategy?: pulumi.Input<FunctionsSiteUpdateStrategyArgs | undefined>;
}

/**
 * Sets the number of 'Always Ready' instances for a function group or a specific function.
 */
export interface FunctionsAlwaysReadyConfigArgs {
    /**
     * Sets the number of 'Always Ready' instances for a given function group or a specific function. For additional information see https://aka.ms/flexconsumption/alwaysready.
     */
    instanceCount?: pulumi.Input<number | undefined>;
    /**
     * Either a function group or a function name is required. For additional information see https://aka.ms/flexconsumption/alwaysready.
     */
    name?: pulumi.Input<string | undefined>;
}

/**
 * Configuration section for the function app deployment.
 */
export interface FunctionsDeploymentArgs {
    /**
     * Storage for deployed package used by the function app.
     */
    storage?: pulumi.Input<FunctionsDeploymentStorageArgs | undefined>;
}

/**
 * Storage for deployed package used by the function app.
 */
export interface FunctionsDeploymentStorageArgs {
    /**
     * Authentication method to access the storage account for deployment.
     */
    authentication?: pulumi.Input<FunctionsDeploymentStorageAuthenticationArgs | undefined>;
    /**
     * Property to select Azure Storage type. Available options: blobContainer.
     */
    type?: pulumi.Input<string | enums.FunctionsDeploymentStorageType | undefined>;
    /**
     * Property to set the URL for the selected Azure Storage type. Example: For blobContainer, the value could be https://<storageAccountName>.blob.core.windows.net/<containerName>.
     */
    value?: pulumi.Input<string | undefined>;
}

/**
 * Authentication method to access the storage account for deployment.
 */
export interface FunctionsDeploymentStorageAuthenticationArgs {
    /**
     * Use this property for StorageAccountConnectionString. Set the name of the app setting that has the storage account connection string. Do not set a value for this property when using other authentication type.
     */
    storageAccountConnectionStringName?: pulumi.Input<string | undefined>;
    /**
     * Property to select authentication type to access the selected storage account. Available options: SystemAssignedIdentity, UserAssignedIdentity, StorageAccountConnectionString.
     */
    type?: pulumi.Input<string | enums.AuthenticationType | undefined>;
    /**
     * Use this property for UserAssignedIdentity. Set the resource ID of the identity. Do not set a value for this property when using other authentication type.
     */
    userAssignedIdentityResourceId?: pulumi.Input<string | undefined>;
}

/**
 * Function app runtime name and version.
 */
export interface FunctionsRuntimeArgs {
    /**
     * Function app runtime name. Available options: dotnet-isolated, node, java, powershell, python, custom
     */
    name?: pulumi.Input<string | enums.RuntimeName | undefined>;
    /**
     * Function app runtime version. Example: 8 (for dotnet-isolated)
     */
    version?: pulumi.Input<string | undefined>;
}

/**
 * Scale and concurrency settings for the function app.
 */
export interface FunctionsScaleAndConcurrencyArgs {
    /**
     * 'Always Ready' configuration for the function app.
     */
    alwaysReady?: pulumi.Input<pulumi.Input<FunctionsAlwaysReadyConfigArgs>[] | undefined>;
    /**
     * Set the amount of memory allocated to each instance of the function app in MB. CPU and network bandwidth are allocated proportionally.
     */
    instanceMemoryMB?: pulumi.Input<number | undefined>;
    /**
     * The maximum number of on demand instances per function group.
     */
    maximumInstanceCount?: pulumi.Input<number | undefined>;
    /**
     * Scale and concurrency settings for the function app triggers.
     */
    triggers?: pulumi.Input<FunctionsScaleAndConcurrencyTriggersArgs | undefined>;
}

/**
 * Scale and concurrency settings for the function app triggers.
 */
export interface FunctionsScaleAndConcurrencyTriggersArgs {
    /**
     * Scale and concurrency settings for the HTTP trigger.
     */
    http?: pulumi.Input<FunctionsScaleAndConcurrencyTriggersHttpArgs | undefined>;
}

/**
 * Scale and concurrency settings for the HTTP trigger.
 */
export interface FunctionsScaleAndConcurrencyTriggersHttpArgs {
    /**
     * The maximum number of concurrent HTTP trigger invocations per instance.
     */
    perInstanceConcurrency?: pulumi.Input<number | undefined>;
}

/**
 * Function app site update strategy configuration for deployments and site config updates.
 */
export interface FunctionsSiteUpdateStrategyArgs {
    /**
     * Function app site update strategy type. Available options: Recreate, RollingUpdate
     */
    type?: pulumi.Input<string | enums.SiteUpdateStrategyType | undefined>;
}

/**
 * The configuration settings of the GitHub provider.
 */
export interface GitHubArgs {
    /**
     * <code>false</code> if the GitHub provider should not be enabled despite the set registration; otherwise, <code>true</code>.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * The configuration settings of the login flow.
     */
    login?: pulumi.Input<LoginScopesArgs | undefined>;
    /**
     * The configuration settings of the app registration for the GitHub provider.
     */
    registration?: pulumi.Input<ClientRegistrationArgs | undefined>;
}

/**
 * The GitHub action code configuration.
 */
export interface GitHubActionCodeConfigurationArgs {
    /**
     * Runtime stack is used to determine the workflow file content for code base apps.
     */
    runtimeStack?: pulumi.Input<string | undefined>;
    /**
     * Runtime version is used to determine what build version to set in the workflow file.
     */
    runtimeVersion?: pulumi.Input<string | undefined>;
}

/**
 * The GitHub action configuration.
 */
export interface GitHubActionConfigurationArgs {
    /**
     * GitHub Action code configuration.
     */
    codeConfiguration?: pulumi.Input<GitHubActionCodeConfigurationArgs | undefined>;
    /**
     * GitHub Action container configuration.
     */
    containerConfiguration?: pulumi.Input<GitHubActionContainerConfigurationArgs | undefined>;
    /**
     * Workflow option to determine whether the workflow file should be generated and written to the repository.
     */
    generateWorkflowFile?: pulumi.Input<boolean | undefined>;
    /**
     * This will help determine the workflow configuration to select.
     */
    isLinux?: pulumi.Input<boolean | undefined>;
}

/**
 * The GitHub action container configuration.
 */
export interface GitHubActionContainerConfigurationArgs {
    /**
     * The image name for the build.
     */
    imageName?: pulumi.Input<string | undefined>;
    /**
     * The password used to upload the image to the container registry.
     */
    password?: pulumi.Input<string | undefined>;
    /**
     * The server URL for the container registry where the build will be hosted.
     */
    serverUrl?: pulumi.Input<string | undefined>;
    /**
     * The username used to upload the image to the container registry.
     */
    username?: pulumi.Input<string | undefined>;
}

/**
 * The configuration settings that determines the validation flow of users using App Service Authentication/Authorization.
 */
export interface GlobalValidationArgs {
    /**
     * The paths for which unauthenticated flow would not be redirected to the login page.
     */
    excludedPaths?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The default authentication provider to use when multiple providers are configured.
     * This setting is only needed if multiple providers are configured and the unauthenticated client
     * action is set to "RedirectToLoginPage".
     */
    redirectToProvider?: pulumi.Input<string | undefined>;
    /**
     * <code>true</code> if the authentication flow is required any request is made; otherwise, <code>false</code>.
     */
    requireAuthentication?: pulumi.Input<boolean | undefined>;
    /**
     * The action to take when an unauthenticated client attempts to access the app.
     */
    unauthenticatedClientAction?: pulumi.Input<enums.UnauthenticatedClientActionV2 | undefined>;
}

/**
 * The configuration settings of the Google provider.
 */
export interface GoogleArgs {
    /**
     * <code>false</code> if the Google provider should not be enabled despite the set registration; otherwise, <code>true</code>.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * The configuration settings of the login flow.
     */
    login?: pulumi.Input<LoginScopesArgs | undefined>;
    /**
     * The configuration settings of the app registration for the Google provider.
     */
    registration?: pulumi.Input<ClientRegistrationArgs | undefined>;
    /**
     * The configuration settings of the Azure Active Directory token validation flow.
     */
    validation?: pulumi.Input<AllowedAudiencesValidationArgs | undefined>;
}

/**
 * The IIS handler mappings used to define which handler processes HTTP requests with certain extension.
 * For example, it is used to configure php-cgi.exe process to handle all HTTP requests with *.php extension.
 */
export interface HandlerMappingArgs {
    /**
     * Command-line arguments to be passed to the script processor.
     */
    arguments?: pulumi.Input<string | undefined>;
    /**
     * Requests with this extension will be handled using the specified FastCGI application.
     */
    extension?: pulumi.Input<string | undefined>;
    /**
     * The absolute path to the FastCGI application.
     */
    scriptProcessor?: pulumi.Input<string | undefined>;
}

/**
 * SSL-enabled hostname.
 */
export interface HostNameSslStateArgs {
    /**
     * Indicates whether the hostname is a standard or repository hostname.
     */
    hostType?: pulumi.Input<enums.HostType | undefined>;
    /**
     * Hostname.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * SSL type.
     */
    sslState?: pulumi.Input<enums.SslState | undefined>;
    /**
     * SSL certificate thumbprint.
     */
    thumbprint?: pulumi.Input<string | undefined>;
    /**
     * Set to <code>true</code> to update existing hostname.
     */
    toUpdate?: pulumi.Input<boolean | undefined>;
    /**
     * Virtual IP address assigned to the hostname if IP based SSL is enabled.
     */
    virtualIP?: pulumi.Input<string | undefined>;
}

/**
 * Specification for an App Service Environment to use for this resource.
 */
export interface HostingEnvironmentProfileArgs {
    /**
     * Resource ID of the App Service Environment.
     */
    id?: pulumi.Input<string | undefined>;
}

/**
 * Http logs configuration.
 */
export interface HttpLogsConfigArgs {
    /**
     * Http logs to azure blob storage configuration.
     */
    azureBlobStorage?: pulumi.Input<AzureBlobStorageHttpLogsConfigArgs | undefined>;
    /**
     * Http logs to file system configuration.
     */
    fileSystem?: pulumi.Input<FileSystemHttpLogsConfigArgs | undefined>;
}

/**
 * The configuration settings of the HTTP requests for authentication and authorization requests made against App Service Authentication/Authorization.
 */
export interface HttpSettingsArgs {
    /**
     * The configuration settings of a forward proxy used to make the requests.
     */
    forwardProxy?: pulumi.Input<ForwardProxyArgs | undefined>;
    /**
     * <code>false</code> if the authentication/authorization responses not having the HTTPS scheme are permissible; otherwise, <code>true</code>.
     */
    requireHttps?: pulumi.Input<boolean | undefined>;
    /**
     * The configuration settings of the paths HTTP requests.
     */
    routes?: pulumi.Input<HttpSettingsRoutesArgs | undefined>;
}

/**
 * The configuration settings of the paths HTTP requests.
 */
export interface HttpSettingsRoutesArgs {
    /**
     * The prefix that should precede all the authentication/authorization paths.
     */
    apiPrefix?: pulumi.Input<string | undefined>;
}

/**
 * The configuration settings of each of the identity providers used to configure App Service Authentication/Authorization.
 */
export interface IdentityProvidersArgs {
    /**
     * The configuration settings of the Apple provider.
     */
    apple?: pulumi.Input<AppleArgs | undefined>;
    /**
     * The configuration settings of the Azure Active directory provider.
     */
    azureActiveDirectory?: pulumi.Input<AzureActiveDirectoryArgs | undefined>;
    /**
     * The configuration settings of the Azure Static Web Apps provider.
     */
    azureStaticWebApps?: pulumi.Input<AzureStaticWebAppsArgs | undefined>;
    /**
     * The map of the name of the alias of each custom Open ID Connect provider to the
     * configuration settings of the custom Open ID Connect provider.
     */
    customOpenIdConnectProviders?: pulumi.Input<{[key: string]: pulumi.Input<CustomOpenIdConnectProviderArgs>} | undefined>;
    /**
     * The configuration settings of the Facebook provider.
     */
    facebook?: pulumi.Input<FacebookArgs | undefined>;
    /**
     * The configuration settings of the GitHub provider.
     */
    gitHub?: pulumi.Input<GitHubArgs | undefined>;
    /**
     * The configuration settings of the Google provider.
     */
    google?: pulumi.Input<GoogleArgs | undefined>;
    /**
     * The configuration settings of the legacy Microsoft Account provider.
     */
    legacyMicrosoftAccount?: pulumi.Input<LegacyMicrosoftAccountArgs | undefined>;
    /**
     * The configuration settings of the Twitter provider.
     */
    twitter?: pulumi.Input<TwitterArgs | undefined>;
}

/**
 * The configuration settings of each of the identity providers used to configure App Service Authentication/Authorization.
 */
export interface IdentityProvidersV1Args {
    /**
     * The configuration settings of the Apple provider.
     */
    apple?: pulumi.Input<AppleArgs | undefined>;
    /**
     * The configuration settings of the Azure Active directory provider.
     */
    azureActiveDirectory?: pulumi.Input<AzureActiveDirectoryArgs | undefined>;
    /**
     * The configuration settings of the Azure Static Web Apps provider.
     */
    azureStaticWebApps?: pulumi.Input<AzureStaticWebAppsArgs | undefined>;
    /**
     * The map of the name of the alias of each custom Open ID Connect provider to the
     * configuration settings of the custom Open ID Connect provider.
     */
    customOpenIdConnectProviders?: pulumi.Input<{[key: string]: pulumi.Input<CustomOpenIdConnectProviderV1Args>} | undefined>;
    /**
     * The configuration settings of the Facebook provider.
     */
    facebook?: pulumi.Input<FacebookArgs | undefined>;
    /**
     * The configuration settings of the GitHub provider.
     */
    gitHub?: pulumi.Input<GitHubArgs | undefined>;
    /**
     * The configuration settings of the Google provider.
     */
    google?: pulumi.Input<GoogleArgs | undefined>;
    /**
     * The configuration settings of the legacy Microsoft Account provider.
     */
    legacyMicrosoftAccount?: pulumi.Input<LegacyMicrosoftAccountArgs | undefined>;
    /**
     * The configuration settings of the Twitter provider.
     */
    twitter?: pulumi.Input<TwitterArgs | undefined>;
}

/**
 * Server farm install script configuration.
 */
export interface InstallScriptArgs {
    /**
     * Name of the install script.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Source of the install script.
     */
    source?: pulumi.Input<InstallScriptSourceArgs | undefined>;
}

/**
 * Object to hold install script reference.
 */
export interface InstallScriptSourceArgs {
    /**
     * Install script source URI where the install script file will be fetched from.
     */
    sourceUri?: pulumi.Input<string | undefined>;
    /**
     * Type of the install script.
     */
    type?: pulumi.Input<string | enums.InstallScriptType | undefined>;
}

/**
 * IP security restriction on an app.
 */
export interface IpSecurityRestrictionArgs {
    /**
     * Allow or Deny access for this IP range.
     */
    action?: pulumi.Input<string | undefined>;
    /**
     * IP restriction rule description.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * IP restriction rule headers.
     * X-Forwarded-Host (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Host#Examples).
     * The matching logic is ..
     * - If the property is null or empty (default), all hosts(or lack of) are allowed.
     * - A value is compared using ordinal-ignore-case (excluding port number).
     * - Subdomain wildcards are permitted but don't match the root domain. For example, *.contoso.com matches the subdomain foo.contoso.com
     *   but not the root domain contoso.com or multi-level foo.bar.contoso.com
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
    headers?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<string>[]>} | undefined>;
    /**
     * IP address the security restriction is valid for.
     * It can be in form of pure ipv4 address (required SubnetMask property) or
     * CIDR notation such as ipv4/mask (leading bit match). For CIDR,
     * SubnetMask property must not be specified.
     */
    ipAddress?: pulumi.Input<string | undefined>;
    /**
     * IP restriction rule name.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Priority of IP restriction rule.
     */
    priority?: pulumi.Input<number | undefined>;
    /**
     * Subnet mask for the range of IP addresses the restriction is valid for.
     */
    subnetMask?: pulumi.Input<string | undefined>;
    /**
     * (internal) Subnet traffic tag
     */
    subnetTrafficTag?: pulumi.Input<number | undefined>;
    /**
     * Defines what this IP filter will be used for. This is to support IP filtering on proxies.
     */
    tag?: pulumi.Input<string | enums.IpFilterTag | undefined>;
    /**
     * Virtual network resource id
     */
    vnetSubnetResourceId?: pulumi.Input<string | undefined>;
    /**
     * (internal) Vnet traffic tag
     */
    vnetTrafficTag?: pulumi.Input<number | undefined>;
}

/**
 * The configuration settings of the checks that should be made while validating the JWT Claims.
 */
export interface JwtClaimChecksArgs {
    /**
     * The list of the allowed client applications.
     */
    allowedClientApplications?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The list of the allowed groups.
     */
    allowedGroups?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Object to hold key vault reference and the resolution status
 */
export interface KeyVaultReferenceWithStatusArgs {
    /**
     * Reference status of the key vault secret.
     */
    referenceStatus?: pulumi.Input<string | undefined>;
    /**
     * Key vault secret URI.
     */
    secretUri?: pulumi.Input<string | undefined>;
}

/**
 * Specification for a Kubernetes Environment to use for this resource.
 */
export interface KubeEnvironmentProfileArgs {
    /**
     * Resource ID of the Kubernetes Environment.
     */
    id?: pulumi.Input<string | undefined>;
}

/**
 * The configuration settings of the legacy Microsoft Account provider.
 */
export interface LegacyMicrosoftAccountArgs {
    /**
     * <code>false</code> if the legacy Microsoft Account provider should not be enabled despite the set registration; otherwise, <code>true</code>.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * The configuration settings of the login flow.
     */
    login?: pulumi.Input<LoginScopesArgs | undefined>;
    /**
     * The configuration settings of the app registration for the legacy Microsoft Account provider.
     */
    registration?: pulumi.Input<ClientRegistrationArgs | undefined>;
    /**
     * The configuration settings of the legacy Microsoft Account provider token validation flow.
     */
    validation?: pulumi.Input<AllowedAudiencesValidationArgs | undefined>;
}

export interface LogAnalyticsConfigurationArgs {
    customerId?: pulumi.Input<string | undefined>;
    sharedKey?: pulumi.Input<string | undefined>;
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
    allowedExternalRedirectUrls?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The configuration settings of the session cookie's expiration.
     */
    cookieExpiration?: pulumi.Input<CookieExpirationArgs | undefined>;
    /**
     * The configuration settings of the nonce used in the login flow.
     */
    nonce?: pulumi.Input<NonceArgs | undefined>;
    /**
     * <code>true</code> if the fragments from the request are preserved after the login request is made; otherwise, <code>false</code>.
     */
    preserveUrlFragmentsForLogins?: pulumi.Input<boolean | undefined>;
    /**
     * The routes that specify the endpoints used for login and logout requests.
     */
    routes?: pulumi.Input<LoginRoutesArgs | undefined>;
    /**
     * The configuration settings of the token store.
     */
    tokenStore?: pulumi.Input<TokenStoreArgs | undefined>;
}

/**
 * The routes that specify the endpoints used for login and logout requests.
 */
export interface LoginRoutesArgs {
    /**
     * The endpoint at which a logout request should be made.
     */
    logoutEndpoint?: pulumi.Input<string | undefined>;
}

/**
 * The configuration settings of the login flow, including the scopes that should be requested.
 */
export interface LoginScopesArgs {
    /**
     * A list of the scopes that should be requested while authenticating.
     */
    scopes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Managed service identity.
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Type of managed service identity.
     */
    type?: pulumi.Input<enums.ManagedServiceIdentityType | undefined>;
    /**
     * The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Name value pair.
 */
export interface NameValuePairArgs {
    /**
     * Pair name.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Pair value.
     */
    value?: pulumi.Input<string | undefined>;
}

/**
 * The configuration settings of the nonce used in the login flow.
 */
export interface NonceArgs {
    /**
     * The time after the request is made when the nonce should expire.
     */
    nonceExpirationInterval?: pulumi.Input<string | undefined>;
    /**
     * <code>false</code> if the nonce should not be validated while completing the login flow; otherwise, <code>true</code>.
     */
    validateNonce?: pulumi.Input<boolean | undefined>;
}

/**
 * The authentication client credentials of the custom Open ID Connect provider.
 */
export interface OpenIdConnectClientCredentialArgs {
    /**
     * The app setting that contains the client secret for the custom Open ID Connect provider.
     */
    clientSecretSettingName?: pulumi.Input<string | undefined>;
    /**
     * The method that should be used to authenticate the user.
     */
    method?: pulumi.Input<enums.ClientCredentialMethod | undefined>;
}

/**
 * The authentication client credentials of the custom Open ID Connect provider.
 */
export interface OpenIdConnectClientCredentialV1Args {
    /**
     * The app setting that contains the client secret for the custom Open ID Connect provider.
     */
    clientSecretSettingName?: pulumi.Input<string | undefined>;
    /**
     * The method that should be used to authenticate the user.
     */
    method?: pulumi.Input<enums.Method | undefined>;
}

/**
 * The configuration settings of the endpoints used for the custom Open ID Connect provider.
 */
export interface OpenIdConnectConfigArgs {
    /**
     * The endpoint to be used to make an authorization request.
     */
    authorizationEndpoint?: pulumi.Input<string | undefined>;
    /**
     * The endpoint that provides the keys necessary to validate the token.
     */
    certificationUri?: pulumi.Input<string | undefined>;
    /**
     * The endpoint that issues the token.
     */
    issuer?: pulumi.Input<string | undefined>;
    /**
     * The endpoint to be used to request a token.
     */
    tokenEndpoint?: pulumi.Input<string | undefined>;
    /**
     * The endpoint that contains all the configuration endpoints for the provider.
     */
    wellKnownOpenIdConfiguration?: pulumi.Input<string | undefined>;
}

/**
 * The configuration settings of the login flow of the custom Open ID Connect provider.
 */
export interface OpenIdConnectLoginArgs {
    /**
     * The name of the claim that contains the users name.
     */
    nameClaimType?: pulumi.Input<string | undefined>;
    /**
     * A list of the scopes that should be requested while authenticating.
     */
    scopes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * The configuration settings of the app registration for the custom Open ID Connect provider.
 */
export interface OpenIdConnectRegistrationArgs {
    /**
     * The authentication credentials of the custom Open ID Connect provider.
     */
    clientCredential?: pulumi.Input<OpenIdConnectClientCredentialArgs | undefined>;
    /**
     * The client id of the custom Open ID Connect provider.
     */
    clientId?: pulumi.Input<string | undefined>;
    /**
     * The configuration settings of the endpoints used for the custom Open ID Connect provider.
     */
    openIdConnectConfiguration?: pulumi.Input<OpenIdConnectConfigArgs | undefined>;
}

/**
 * The configuration settings of the app registration for the custom Open ID Connect provider.
 */
export interface OpenIdConnectRegistrationV1Args {
    /**
     * The authentication credentials of the custom Open ID Connect provider.
     */
    clientCredential?: pulumi.Input<OpenIdConnectClientCredentialV1Args | undefined>;
    /**
     * The client id of the custom Open ID Connect provider.
     */
    clientId?: pulumi.Input<string | undefined>;
    /**
     * The configuration settings of the endpoints used for the custom Open ID Connect provider.
     */
    openIdConnectConfiguration?: pulumi.Input<OpenIdConnectConfigArgs | undefined>;
}

/**
 * Outbound traffic options over virtual network.
 */
export interface OutboundVnetRoutingArgs {
    /**
     * Enables all other routing options defined in OutboundVnetRouting if this setting is set to true.
     */
    allTraffic?: pulumi.Input<boolean | undefined>;
    /**
     * This causes all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied. Previously called VnetRouteAllEnabled.
     */
    applicationTraffic?: pulumi.Input<boolean | undefined>;
    /**
     * Enables Backup and Restore operations over virtual network. Previously called VnetBackupRestoreEnabled
     */
    backupRestoreTraffic?: pulumi.Input<boolean | undefined>;
    /**
     * Enables accessing content over virtual network. Previously called VnetContentShareEnabled
     */
    contentShareTraffic?: pulumi.Input<boolean | undefined>;
    /**
     * Enables pulling image over Virtual Network. Previously called VnetImagePullEnabled.
     */
    imagePullTraffic?: pulumi.Input<boolean | undefined>;
}

/**
 * The state of a private link connection
 */
export interface PrivateLinkConnectionStateArgs {
    /**
     * ActionsRequired for a private link connection
     */
    actionsRequired?: pulumi.Input<string | undefined>;
    /**
     * Description of a private link connection
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Status of a private link connection
     */
    status?: pulumi.Input<string | undefined>;
}

/**
 * Push settings for the App.
 */
export interface PushSettingsArgs {
    /**
     * Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint.
     */
    dynamicTagsJson?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets a flag indicating whether the Push endpoint is enabled.
     */
    isPushEnabled: pulumi.Input<boolean>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets a JSON string containing a list of tags that are whitelisted for use by the push registration endpoint.
     */
    tagWhitelistJson?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.
     * Tags can consist of alphanumeric characters and the following:
     * '_', '@', '#', '.', ':', '-'.
     * Validation should be performed at the PushRequestHandler.
     */
    tagsRequiringAuth?: pulumi.Input<string | undefined>;
}

/**
 * Routing rules for ramp up testing. This rule allows to redirect static traffic % to a slot or to gradually change routing % based on performance.
 */
export interface RampUpRuleArgs {
    /**
     * Hostname of a slot to which the traffic will be redirected if decided to. E.g. myapp-stage.azurewebsites.net.
     */
    actionHostName?: pulumi.Input<string | undefined>;
    /**
     * Custom decision algorithm can be provided in TiPCallback site extension which URL can be specified.
     */
    changeDecisionCallbackUrl?: pulumi.Input<string | undefined>;
    /**
     * Specifies interval in minutes to reevaluate ReroutePercentage.
     */
    changeIntervalInMinutes?: pulumi.Input<number | undefined>;
    /**
     * In auto ramp up scenario this is the step to add/remove from <code>ReroutePercentage</code> until it reaches \n<code>MinReroutePercentage</code> or
     * <code>MaxReroutePercentage</code>. Site metrics are checked every N minutes specified in <code>ChangeIntervalInMinutes</code>.\nCustom decision algorithm
     * can be provided in TiPCallback site extension which URL can be specified in <code>ChangeDecisionCallbackUrl</code>.
     */
    changeStep?: pulumi.Input<number | undefined>;
    /**
     * Specifies upper boundary below which ReroutePercentage will stay.
     */
    maxReroutePercentage?: pulumi.Input<number | undefined>;
    /**
     * Specifies lower boundary above which ReroutePercentage will stay.
     */
    minReroutePercentage?: pulumi.Input<number | undefined>;
    /**
     * Name of the routing rule. The recommended name would be to point to the slot which will receive the traffic in the experiment.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Percentage of the traffic which will be redirected to <code>ActionHostName</code>.
     */
    reroutePercentage?: pulumi.Input<number | undefined>;
}

/**
 * Server farm registry adapter configuration.
 */
export interface RegistryAdapterArgs {
    /**
     * Key vault reference to the value that will be placed in the registry location
     */
    keyVaultSecretReference?: pulumi.Input<KeyVaultReferenceWithStatusArgs | undefined>;
    /**
     * Registry key for the adapter.
     */
    registryKey?: pulumi.Input<string | undefined>;
    /**
     * Type of the registry adapter.
     */
    type?: pulumi.Input<string | enums.RegistryAdapterType | undefined>;
}

/**
 * Trigger based on total requests.
 */
export interface RequestsBasedTriggerArgs {
    /**
     * Request Count.
     */
    count?: pulumi.Input<number | undefined>;
    /**
     * Time interval.
     */
    timeInterval?: pulumi.Input<string | undefined>;
}

/**
 * Function app resource requirements.
 */
export interface ResourceConfigArgs {
    /**
     * Required CPU in cores, e.g. 0.5
     */
    cpu?: pulumi.Input<number | undefined>;
    /**
     * Required memory, e.g. "1Gi"
     */
    memory?: pulumi.Input<string | undefined>;
}

/**
 * Network settings for an app service plan.
 */
export interface ServerFarmNetworkSettingsArgs {
    /**
     * Azure Resource Manager ID of the Virtual network and subnet to be joined by Regional VNET Integration. This must be of the form /subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}
     */
    virtualNetworkSubnetId?: pulumi.Input<string | undefined>;
}

/**
 * Configuration of an App Service app.
 */
export interface SiteConfigArgs {
    /**
     * Flag to use Managed Identity Creds for ACR pull
     */
    acrUseManagedIdentityCreds?: pulumi.Input<boolean | undefined>;
    /**
     * If using user managed identity, the user managed identity ClientId
     */
    acrUserManagedIdentityID?: pulumi.Input<string | undefined>;
    /**
     * <code>true</code> if Always On is enabled; otherwise, <code>false</code>.
     */
    alwaysOn?: pulumi.Input<boolean | undefined>;
    /**
     * Information about the formal API definition for the app.
     */
    apiDefinition?: pulumi.Input<ApiDefinitionInfoArgs | undefined>;
    /**
     * Azure API management settings linked to the app.
     */
    apiManagementConfig?: pulumi.Input<ApiManagementConfigArgs | undefined>;
    /**
     * App command line to launch.
     */
    appCommandLine?: pulumi.Input<string | undefined>;
    /**
     * Application settings. This property is not returned in response to normal create and read requests since it may contain sensitive information.
     */
    appSettings?: pulumi.Input<pulumi.Input<NameValuePairArgs>[] | undefined>;
    /**
     * <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>.
     */
    autoHealEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * Auto Heal rules.
     */
    autoHealRules?: pulumi.Input<AutoHealRulesArgs | undefined>;
    /**
     * Auto-swap slot name.
     */
    autoSwapSlotName?: pulumi.Input<string | undefined>;
    /**
     * List of Azure Storage Accounts.
     */
    azureStorageAccounts?: pulumi.Input<{[key: string]: pulumi.Input<AzureStorageInfoValueArgs>} | undefined>;
    /**
     * Connection strings. This property is not returned in response to normal create and read requests since it may contain sensitive information.
     */
    connectionStrings?: pulumi.Input<pulumi.Input<ConnStringInfoArgs>[] | undefined>;
    /**
     * Cross-Origin Resource Sharing (CORS) settings.
     */
    cors?: pulumi.Input<CorsSettingsArgs | undefined>;
    /**
     * Default documents.
     */
    defaultDocuments?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>.
     */
    detailedErrorLoggingEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * Document root.
     */
    documentRoot?: pulumi.Input<string | undefined>;
    /**
     * Maximum number of workers that a site can scale out to.
     * This setting only applies to apps in plans where ElasticScaleEnabled is <code>true</code>
     */
    elasticWebAppScaleLimit?: pulumi.Input<number | undefined>;
    /**
     * This is work around for polymorphic types.
     */
    experiments?: pulumi.Input<ExperimentsArgs | undefined>;
    /**
     * State of FTP / FTPS service
     */
    ftpsState?: pulumi.Input<string | enums.FtpsState | undefined>;
    /**
     * Maximum number of workers that a site can scale out to.
     * This setting only applies to the Consumption and Elastic Premium Plans
     */
    functionAppScaleLimit?: pulumi.Input<number | undefined>;
    /**
     * Gets or sets a value indicating whether functions runtime scale monitoring is enabled. When enabled,
     * the ScaleController will not monitor event sources directly, but will instead call to the
     * runtime to get scale status.
     */
    functionsRuntimeScaleMonitoringEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * Handler mappings.
     */
    handlerMappings?: pulumi.Input<pulumi.Input<HandlerMappingArgs>[] | undefined>;
    /**
     * Health check path
     */
    healthCheckPath?: pulumi.Input<string | undefined>;
    /**
     * Http20Enabled: configures a web site to allow clients to connect over http2.0
     */
    http20Enabled?: pulumi.Input<boolean | undefined>;
    /**
     * Http20ProxyFlag: Configures a website to allow http2.0 to pass be proxied all the way to the app. 0 = disabled, 1 = pass through all http2 traffic, 2 = pass through gRPC only.
     */
    http20ProxyFlag?: pulumi.Input<number | undefined>;
    /**
     * <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>.
     */
    httpLoggingEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * IP security restrictions for main.
     */
    ipSecurityRestrictions?: pulumi.Input<pulumi.Input<IpSecurityRestrictionArgs>[] | undefined>;
    /**
     * Default action for main access restriction if no rules are matched.
     */
    ipSecurityRestrictionsDefaultAction?: pulumi.Input<string | enums.DefaultAction | undefined>;
    /**
     * Java container.
     */
    javaContainer?: pulumi.Input<string | undefined>;
    /**
     * Java container version.
     */
    javaContainerVersion?: pulumi.Input<string | undefined>;
    /**
     * Java version.
     */
    javaVersion?: pulumi.Input<string | undefined>;
    /**
     * Identity to use for Key Vault Reference authentication.
     */
    keyVaultReferenceIdentity?: pulumi.Input<string | undefined>;
    /**
     * Site limits.
     */
    limits?: pulumi.Input<SiteLimitsArgs | undefined>;
    /**
     * Linux App Framework and version
     */
    linuxFxVersion?: pulumi.Input<string | undefined>;
    /**
     * Site load balancing.
     */
    loadBalancing?: pulumi.Input<enums.SiteLoadBalancing | undefined>;
    /**
     * <code>true</code> to enable local MySQL; otherwise, <code>false</code>.
     */
    localMySqlEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * HTTP logs directory size limit.
     */
    logsDirectorySizeLimit?: pulumi.Input<number | undefined>;
    /**
     * Managed pipeline mode.
     */
    managedPipelineMode?: pulumi.Input<enums.ManagedPipelineMode | undefined>;
    /**
     * Managed Service Identity Id
     */
    managedServiceIdentityId?: pulumi.Input<number | undefined>;
    /**
     * Application metadata. This property cannot be retrieved, since it may contain secrets.
     */
    metadata?: pulumi.Input<pulumi.Input<NameValuePairArgs>[] | undefined>;
    /**
     * The minimum strength TLS cipher suite allowed for an application
     */
    minTlsCipherSuite?: pulumi.Input<string | enums.TlsCipherSuites | undefined>;
    /**
     * MinTlsVersion: configures the minimum version of TLS required for SSL requests
     */
    minTlsVersion?: pulumi.Input<string | enums.SupportedTlsVersions | undefined>;
    /**
     * Number of minimum instance count for a site
     * This setting only applies to the Elastic Plans
     */
    minimumElasticInstanceCount?: pulumi.Input<number | undefined>;
    /**
     * .NET Framework version.
     */
    netFrameworkVersion?: pulumi.Input<string | undefined>;
    /**
     * Version of Node.js.
     */
    nodeVersion?: pulumi.Input<string | undefined>;
    /**
     * Number of workers.
     */
    numberOfWorkers?: pulumi.Input<number | undefined>;
    /**
     * Version of PHP.
     */
    phpVersion?: pulumi.Input<string | undefined>;
    /**
     * Version of PowerShell.
     */
    powerShellVersion?: pulumi.Input<string | undefined>;
    /**
     * Number of preWarmed instances.
     * This setting only applies to the Consumption and Elastic Plans
     */
    preWarmedInstanceCount?: pulumi.Input<number | undefined>;
    /**
     * Property to allow or block all public traffic.
     */
    publicNetworkAccess?: pulumi.Input<string | undefined>;
    /**
     * Publishing user name.
     */
    publishingUsername?: pulumi.Input<string | undefined>;
    /**
     * Push endpoint settings.
     */
    push?: pulumi.Input<PushSettingsArgs | undefined>;
    /**
     * Version of Python.
     */
    pythonVersion?: pulumi.Input<string | undefined>;
    /**
     * <code>true</code> if remote debugging is enabled; otherwise, <code>false</code>.
     */
    remoteDebuggingEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * Remote debugging version.
     */
    remoteDebuggingVersion?: pulumi.Input<string | undefined>;
    /**
     * <code>true</code> if request tracing is enabled; otherwise, <code>false</code>.
     */
    requestTracingEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * Request tracing expiration time.
     */
    requestTracingExpirationTime?: pulumi.Input<string | undefined>;
    /**
     * IP security restrictions for scm.
     */
    scmIpSecurityRestrictions?: pulumi.Input<pulumi.Input<IpSecurityRestrictionArgs>[] | undefined>;
    /**
     * Default action for scm access restriction if no rules are matched.
     */
    scmIpSecurityRestrictionsDefaultAction?: pulumi.Input<string | enums.DefaultAction | undefined>;
    /**
     * IP security restrictions for scm to use main.
     */
    scmIpSecurityRestrictionsUseMain?: pulumi.Input<boolean | undefined>;
    /**
     * ScmMinTlsVersion: configures the minimum version of TLS required for SSL requests for SCM site
     */
    scmMinTlsVersion?: pulumi.Input<string | enums.SupportedTlsVersions | undefined>;
    /**
     * SCM type.
     */
    scmType?: pulumi.Input<string | enums.ScmType | undefined>;
    /**
     * Tracing options.
     */
    tracingOptions?: pulumi.Input<string | undefined>;
    /**
     * <code>true</code> to use 32-bit worker process; otherwise, <code>false</code>.
     */
    use32BitWorkerProcess?: pulumi.Input<boolean | undefined>;
    /**
     * Virtual applications.
     */
    virtualApplications?: pulumi.Input<pulumi.Input<VirtualApplicationArgs>[] | undefined>;
    /**
     * Virtual Network name.
     */
    vnetName?: pulumi.Input<string | undefined>;
    /**
     * The number of private ports assigned to this app. These will be assigned dynamically on runtime.
     */
    vnetPrivatePortsCount?: pulumi.Input<number | undefined>;
    /**
     * Virtual Network Route All enabled. This causes all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied.
     */
    vnetRouteAllEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * <code>true</code> if WebSocket is enabled; otherwise, <code>false</code>.
     */
    webSocketsEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * Sets the time zone a site uses for generating timestamps. Compatible with Linux and Windows App Service. Setting the WEBSITE_TIME_ZONE app setting takes precedence over this config. For Linux, expects tz database values https://www.iana.org/time-zones (for a quick reference see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For Windows, expects one of the time zones listed under HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones
     */
    websiteTimeZone?: pulumi.Input<string | undefined>;
    /**
     * Xenon App Framework and version
     */
    windowsFxVersion?: pulumi.Input<string | undefined>;
    /**
     * Explicit Managed Service Identity Id
     */
    xManagedServiceIdentityId?: pulumi.Input<number | undefined>;
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

export interface SiteDnsConfigArgs {
    /**
     * Alternate DNS server to be used by apps. This property replicates the WEBSITE_DNS_ALT_SERVER app setting.
     */
    dnsAltServer?: pulumi.Input<string | undefined>;
    /**
     * Custom time for DNS to be cached in seconds. Allowed range: 0-60. Default is 30 seconds. 0 means caching disabled.
     */
    dnsMaxCacheTimeout?: pulumi.Input<number | undefined>;
    /**
     * Total number of retries for dns lookup. Allowed range: 1-5. Default is 3.
     */
    dnsRetryAttemptCount?: pulumi.Input<number | undefined>;
    /**
     * Timeout for a single dns lookup in seconds. Allowed range: 1-30. Default is 3.
     */
    dnsRetryAttemptTimeout?: pulumi.Input<number | undefined>;
    /**
     * List of custom DNS servers to be used by an app for lookups. Maximum 5 dns servers can be set.
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Metric limits set on an app.
 */
export interface SiteLimitsArgs {
    /**
     * Maximum allowed disk size usage in MB.
     */
    maxDiskSizeInMb?: pulumi.Input<number | undefined>;
    /**
     * Maximum allowed memory usage in MB.
     */
    maxMemoryInMb?: pulumi.Input<number | undefined>;
    /**
     * Maximum allowed CPU usage percentage.
     */
    maxPercentageCpu?: pulumi.Input<number | undefined>;
}

/**
 * Description of the App Service plan scale options.
 */
export interface SkuCapacityArgs {
    /**
     * Default number of workers for this App Service plan SKU.
     */
    default?: pulumi.Input<number | undefined>;
    /**
     * Maximum number of Elastic workers for this App Service plan SKU.
     */
    elasticMaximum?: pulumi.Input<number | undefined>;
    /**
     * Maximum number of workers for this App Service plan SKU.
     */
    maximum?: pulumi.Input<number | undefined>;
    /**
     * Minimum number of workers for this App Service plan SKU.
     */
    minimum?: pulumi.Input<number | undefined>;
    /**
     * Available scale configurations for an App Service plan.
     */
    scaleType?: pulumi.Input<string | undefined>;
}

/**
 * Description of a SKU for a scalable resource.
 */
export interface SkuDescriptionArgs {
    /**
     * Capabilities of the SKU, e.g., is traffic manager enabled?
     */
    capabilities?: pulumi.Input<pulumi.Input<CapabilityArgs>[] | undefined>;
    /**
     * Current number of instances assigned to the resource.
     */
    capacity?: pulumi.Input<number | undefined>;
    /**
     * Family code of the resource SKU.
     */
    family?: pulumi.Input<string | undefined>;
    /**
     * Locations of the SKU.
     */
    locations?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Name of the resource SKU.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Size specifier of the resource SKU.
     */
    size?: pulumi.Input<string | undefined>;
    /**
     * Min, max, and default scale values of the SKU.
     */
    skuCapacity?: pulumi.Input<SkuCapacityArgs | undefined>;
    /**
     * Service tier of the resource SKU.
     */
    tier?: pulumi.Input<string | undefined>;
}

/**
 * Trigger based on request execution time.
 */
export interface SlowRequestsBasedTriggerArgs {
    /**
     * Request Count.
     */
    count?: pulumi.Input<number | undefined>;
    /**
     * Request Path.
     */
    path?: pulumi.Input<string | undefined>;
    /**
     * Time interval.
     */
    timeInterval?: pulumi.Input<string | undefined>;
    /**
     * Time taken.
     */
    timeTaken?: pulumi.Input<string | undefined>;
}

/**
 * Build properties for the static site.
 */
export interface StaticSiteBuildPropertiesArgs {
    /**
     * A custom command to run during deployment of the Azure Functions API application.
     */
    apiBuildCommand?: pulumi.Input<string | undefined>;
    /**
     * The path to the api code within the repository.
     */
    apiLocation?: pulumi.Input<string | undefined>;
    /**
     * Deprecated: The path of the app artifacts after building (deprecated in favor of OutputLocation)
     */
    appArtifactLocation?: pulumi.Input<string | undefined>;
    /**
     * A custom command to run during deployment of the static content application.
     */
    appBuildCommand?: pulumi.Input<string | undefined>;
    /**
     * The path to the app code within the repository.
     */
    appLocation?: pulumi.Input<string | undefined>;
    /**
     * Github Action secret name override.
     */
    githubActionSecretNameOverride?: pulumi.Input<string | undefined>;
    /**
     * The output path of the app after building.
     */
    outputLocation?: pulumi.Input<string | undefined>;
    /**
     * Skip Github Action workflow generation.
     */
    skipGithubActionWorkflowGeneration?: pulumi.Input<boolean | undefined>;
}

/**
 * Template Options for the static site.
 */
export interface StaticSiteTemplateOptionsArgs {
    /**
     * Description of the newly generated repository.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Whether or not the newly generated repository is a private repository. Defaults to false (i.e. public).
     */
    isPrivate?: pulumi.Input<boolean | undefined>;
    /**
     * Owner of the newly generated repository.
     */
    owner?: pulumi.Input<string | undefined>;
    /**
     * Name of the newly generated repository.
     */
    repositoryName?: pulumi.Input<string | undefined>;
    /**
     * URL of the template repository. The newly generated repository will be based on this one.
     */
    templateRepositoryUrl?: pulumi.Input<string | undefined>;
}

/**
 * Trigger based on status code.
 */
export interface StatusCodesBasedTriggerArgs {
    /**
     * Request Count.
     */
    count?: pulumi.Input<number | undefined>;
    /**
     * Request Path
     */
    path?: pulumi.Input<string | undefined>;
    /**
     * HTTP status code.
     */
    status?: pulumi.Input<number | undefined>;
    /**
     * Request Sub Status.
     */
    subStatus?: pulumi.Input<number | undefined>;
    /**
     * Time interval.
     */
    timeInterval?: pulumi.Input<string | undefined>;
    /**
     * Win32 error code.
     */
    win32Status?: pulumi.Input<number | undefined>;
}

/**
 * Trigger based on range of status codes.
 */
export interface StatusCodesRangeBasedTriggerArgs {
    /**
     * Request Count.
     */
    count?: pulumi.Input<number | undefined>;
    path?: pulumi.Input<string | undefined>;
    /**
     * HTTP status code.
     */
    statusCodes?: pulumi.Input<string | undefined>;
    /**
     * Time interval.
     */
    timeInterval?: pulumi.Input<string | undefined>;
}

/**
 * Server farm storage mount configuration.
 */
export interface StorageMountArgs {
    /**
     * KV reference to the credentials to connect to the share.
     */
    credentialsKeyVaultReference?: pulumi.Input<KeyVaultReferenceWithStatusArgs | undefined>;
    /**
     * Path on worker where storage will be mounted.
     */
    destinationPath?: pulumi.Input<string | undefined>;
    /**
     * Name of the storage mount.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Source of the fileshare/storage.
     */
    source?: pulumi.Input<string | undefined>;
    /**
     * Type of the storage mount.
     */
    type?: pulumi.Input<string | enums.StorageMountType | undefined>;
}

/**
 * The configuration settings of the token store.
 */
export interface TokenStoreArgs {
    /**
     * The configuration settings of the storage of the tokens if blob storage is used.
     */
    azureBlobStorage?: pulumi.Input<BlobStorageTokenStoreArgs | undefined>;
    /**
     * <code>true</code> to durably store platform-specific security tokens that are obtained during login flows; otherwise, <code>false</code>.
     * The default is <code>false</code>.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * The configuration settings of the storage of the tokens if a file system is used.
     */
    fileSystem?: pulumi.Input<FileSystemTokenStoreArgs | undefined>;
    /**
     * The number of hours after session token expiration that a session token can be used to
     * call the token refresh API. The default is 72 hours.
     */
    tokenRefreshExtensionHours?: pulumi.Input<number | undefined>;
}

/**
 * The configuration settings of the Twitter provider.
 */
export interface TwitterArgs {
    /**
     * <code>false</code> if the Twitter provider should not be enabled despite the set registration; otherwise, <code>true</code>.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * The configuration settings of the app registration for the Twitter provider.
     */
    registration?: pulumi.Input<TwitterRegistrationArgs | undefined>;
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
    consumerKey?: pulumi.Input<string | undefined>;
    /**
     * The app setting name that contains the OAuth 1.0a consumer secret of the Twitter
     * application used for sign-in.
     */
    consumerSecretSettingName?: pulumi.Input<string | undefined>;
}

/**
 * Virtual application in an app.
 */
export interface VirtualApplicationArgs {
    /**
     * Physical path.
     */
    physicalPath?: pulumi.Input<string | undefined>;
    /**
     * <code>true</code> if preloading is enabled; otherwise, <code>false</code>.
     */
    preloadEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * Virtual directories for virtual application.
     */
    virtualDirectories?: pulumi.Input<pulumi.Input<VirtualDirectoryArgs>[] | undefined>;
    /**
     * Virtual path.
     */
    virtualPath?: pulumi.Input<string | undefined>;
}

/**
 * Directory for virtual application.
 */
export interface VirtualDirectoryArgs {
    /**
     * Physical path.
     */
    physicalPath?: pulumi.Input<string | undefined>;
    /**
     * Path to virtual application.
     */
    virtualPath?: pulumi.Input<string | undefined>;
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
    subnet?: pulumi.Input<string | undefined>;
}

export interface VolumeMountArgs {
    /**
     * Target path on the container where volume is mounted on
     */
    containerMountPath: pulumi.Input<string>;
    /**
     * Config Data to be mounted on the volume
     */
    data?: pulumi.Input<string | undefined>;
    /**
     * Boolean to specify if the mount is read only on the container
     */
    readOnly?: pulumi.Input<boolean | undefined>;
    /**
     * Sub path in the volume where volume is mounted from.
     */
    volumeSubPath: pulumi.Input<string>;
}

/**
 * The WSDL definition
 */
export interface WsdlDefinitionArgs {
    /**
     * The WSDL content
     */
    content?: pulumi.Input<string | undefined>;
    /**
     * The WSDL import method
     */
    importMethod?: pulumi.Input<string | enums.WsdlImportMethod | undefined>;
    /**
     * The service with name and endpoint names
     */
    service?: pulumi.Input<WsdlServiceArgs | undefined>;
    /**
     * The WSDL URL
     */
    url?: pulumi.Input<string | undefined>;
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
    endpointQualifiedNames?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The service's qualified name
     */
    qualifiedName: pulumi.Input<string>;
}
