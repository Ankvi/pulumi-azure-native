import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The configuration settings of the Allowed Audiences validation flow.
 */
export interface AllowedAudiencesValidationResponse {
    /**
     * The configuration settings of the allowed list of audiences from which to validate the JWT token.
     */
    allowedAudiences?: string[];
}

/**
 * The configuration settings of the Azure Active Directory allowed principals.
 */
export interface AllowedPrincipalsResponse {
    /**
     * The list of the allowed groups.
     */
    groups?: string[];
    /**
     * The list of the allowed identities.
     */
    identities?: string[];
}

export interface ApiConnectionDefinitionResponseProperties {
    api?: ApiReferenceResponse;
    /**
     * Timestamp of last connection change
     */
    changedTime?: string;
    /**
     * Timestamp of the connection creation
     */
    createdTime?: string;
    /**
     * Dictionary of custom parameter values
     */
    customParameterValues?: {[key: string]: string};
    /**
     * Display name
     */
    displayName?: string;
    /**
     * Dictionary of nonsecret parameter values
     */
    nonSecretParameterValues?: {[key: string]: string};
    /**
     * Dictionary of parameter values
     */
    parameterValues?: {[key: string]: string};
    /**
     * Status of the connection
     */
    statuses?: ConnectionStatusDefinitionResponse[];
    /**
     * Links to test the API connection
     */
    testLinks?: ApiConnectionTestLinkResponse[];
}

/**
 * API connection properties
 */
export interface ApiConnectionTestLinkResponse {
    /**
     * HTTP Method
     */
    method?: string;
    /**
     * Test link request URI
     */
    requestUri?: string;
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

/**
 * OAuth settings for the API
 */
export interface ApiOAuthSettingsParameterResponse {
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
    value?: string;
}

/**
 * OAuth settings for the connection provider
 */
export interface ApiOAuthSettingsResponse {
    /**
     * Resource provider client id
     */
    clientId?: string;
    /**
     * Client Secret needed for OAuth
     */
    clientSecret?: string;
    /**
     * OAuth parameters key is the name of parameter
     */
    customParameters?: {[key: string]: ApiOAuthSettingsParameterResponse};
    /**
     * Identity provider
     */
    identityProvider?: string;
    /**
     * Read only properties for this oauth setting.
     */
    properties?: any;
    /**
     * Url
     */
    redirectUrl?: string;
    /**
     * OAuth scopes
     */
    scopes?: string[];
}

export interface ApiReferenceResponse {
    /**
     * Brand color
     */
    brandColor?: string;
    /**
     * The custom API description
     */
    description?: string;
    /**
     * The display name
     */
    displayName?: string;
    /**
     * The icon URI
     */
    iconUri?: string;
    /**
     * Resource reference id
     */
    id?: string;
    /**
     * The name of the API
     */
    name?: string;
    /**
     * The JSON representation of the swagger
     */
    swagger?: any;
    /**
     * Resource reference type
     */
    type?: string;
}

/**
 * The API backend service
 */
export interface ApiResourceBackendServiceResponse {
    /**
     * The service URL
     */
    serviceUrl?: string;
}

/**
 * API Definitions
 */
export interface ApiResourceDefinitionsResponse {
    /**
     * The modified swagger URL
     */
    modifiedSwaggerUrl?: string;
    /**
     * The original swagger URL
     */
    originalSwaggerUrl?: string;
}

export interface AppLogsConfigurationResponse {
    destination?: string;
    logAnalyticsConfiguration?: LogAnalyticsConfigurationResponse;
}

/**
 * The configuration settings of the app registration for providers that have app ids and app secrets
 */
export interface AppRegistrationResponse {
    /**
     * The App ID of the app used for login.
     */
    appId?: string;
    /**
     * The app setting name that contains the app secret.
     */
    appSecretSettingName?: string;
}

/**
 * The configuration settings of the registration for the Apple provider
 */
export interface AppleRegistrationResponse {
    /**
     * The Client ID of the app used for login.
     */
    clientId?: string;
    /**
     * The app setting name that contains the client secret.
     */
    clientSecretSettingName?: string;
}

/**
 * The configuration settings of the Apple provider.
 */
export interface AppleResponse {
    /**
     * <code>false</code> if the Apple provider should not be enabled despite the set registration; otherwise, <code>true</code>.
     */
    enabled?: boolean;
    /**
     * The configuration settings of the login flow.
     */
    login?: LoginScopesResponse;
    /**
     * The configuration settings of the Apple registration.
     */
    registration?: AppleRegistrationResponse;
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

export interface ArcConfigurationResponse {
    artifactStorageAccessMode?: string;
    artifactStorageClassName?: string;
    artifactStorageMountPath?: string;
    artifactStorageNodeName?: string;
    artifactsStorageType?: string;
    frontEndServiceConfiguration?: FrontEndConfigurationResponse;
}

/**
 * A wrapper for an ARM resource id
 */
export interface ArmIdWrapperResponse {
    id: string;
}

/**
 * The plan object in Azure Resource Manager, represents a marketplace plan.
 */
export interface ArmPlanResponse {
    /**
     * The name.
     */
    name?: string;
    /**
     * The product.
     */
    product?: string;
    /**
     * The promotion code.
     */
    promotionCode?: string;
    /**
     * The publisher.
     */
    publisher?: string;
    /**
     * Version of product.
     */
    version?: string;
}

/**
 * Full view of networking configuration for an ASE.
 */
export interface AseV3NetworkingConfigurationResponse {
    /**
     * Property to enable and disable new private endpoint connection creation on ASE
     */
    allowNewPrivateEndpointConnections?: boolean;
    externalInboundIpAddresses: string[];
    /**
     * Property to enable and disable FTP on ASEV3
     */
    ftpEnabled?: boolean;
    /**
     * Resource Id.
     */
    id: string;
    /**
     * Customer provided Inbound IP Address. Only able to be set on Ase create.
     */
    inboundIpAddressOverride?: string;
    internalInboundIpAddresses: string[];
    /**
     * Kind of resource.
     */
    kind?: string;
    linuxOutboundIpAddresses: string[];
    /**
     * Resource Name.
     */
    name: string;
    /**
     * Property to enable and disable Remote Debug on ASEV3
     */
    remoteDebugEnabled?: boolean;
    /**
     * Resource type.
     */
    type: string;
    windowsOutboundIpAddresses: string[];
}

/**
 * The configuration settings of the platform of App Service Authentication/Authorization.
 */
export interface AuthPlatformResponse {
    /**
     * The path of the config file containing auth settings if they come from a file.
     * If the path is relative, base will the site's root directory.
     */
    configFilePath?: string;
    /**
     * <code>true</code> if the Authentication / Authorization feature is enabled for the current app; otherwise, <code>false</code>.
     */
    enabled?: boolean;
    /**
     * The RuntimeVersion of the Authentication / Authorization feature in use for the current app.
     * The setting in this value can control the behavior of certain features in the Authentication / Authorization module.
     */
    runtimeVersion?: string;
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
     * A rule based on multiple Slow Requests Rule with path
     */
    slowRequestsWithPath?: SlowRequestsBasedTriggerResponse[];
    /**
     * A rule based on status codes.
     */
    statusCodes?: StatusCodesBasedTriggerResponse[];
    /**
     * A rule based on status codes ranges.
     */
    statusCodesRange?: StatusCodesRangeBasedTriggerResponse[];
}

/**
 * The configuration settings of the Azure Active Directory login flow.
 */
export interface AzureActiveDirectoryLoginResponse {
    /**
     * <code>true</code> if the www-authenticate provider should be omitted from the request; otherwise, <code>false</code>.
     */
    disableWWWAuthenticate?: boolean;
    /**
     * Login parameters to send to the OpenID Connect authorization endpoint when
     * a user logs in. Each parameter must be in the form "key=value".
     */
    loginParameters?: string[];
}

/**
 * The configuration settings of the Azure Active Directory app registration.
 */
export interface AzureActiveDirectoryRegistrationResponse {
    /**
     * The Client ID of this relying party application, known as the client_id.
     * This setting is required for enabling OpenID Connection authentication with Azure Active Directory or 
     * other 3rd party OpenID Connect providers.
     * More information on OpenID Connect: http://openid.net/specs/openid-connect-core-1_0.html
     */
    clientId?: string;
    /**
     * An alternative to the client secret thumbprint, that is the issuer of a certificate used for signing purposes. This property acts as
     * a replacement for the Client Secret Certificate Thumbprint. It is also optional.
     */
    clientSecretCertificateIssuer?: string;
    /**
     * An alternative to the client secret thumbprint, that is the subject alternative name of a certificate used for signing purposes. This property acts as
     * a replacement for the Client Secret Certificate Thumbprint. It is also optional.
     */
    clientSecretCertificateSubjectAlternativeName?: string;
    /**
     * An alternative to the client secret, that is the thumbprint of a certificate used for signing purposes. This property acts as
     * a replacement for the Client Secret. It is also optional.
     */
    clientSecretCertificateThumbprint?: string;
    /**
     * The app setting name that contains the client secret of the relying party application.
     */
    clientSecretSettingName?: string;
    /**
     * The OpenID Connect Issuer URI that represents the entity which issues access tokens for this application.
     * When using Azure Active Directory, this value is the URI of the directory tenant, e.g. `https://login.microsoftonline.com/v2.0/{tenant-guid}/`.
     * This URI is a case-sensitive identifier for the token issuer.
     * More information on OpenID Connect Discovery: http://openid.net/specs/openid-connect-discovery-1_0.html
     */
    openIdIssuer?: string;
}

/**
 * The configuration settings of the Azure Active directory provider.
 */
export interface AzureActiveDirectoryResponse {
    /**
     * <code>false</code> if the Azure Active Directory provider should not be enabled despite the set registration; otherwise, <code>true</code>.
     */
    enabled?: boolean;
    /**
     * Gets a value indicating whether the Azure AD configuration was auto-provisioned using 1st party tooling.
     * This is an internal flag primarily intended to support the Azure Management Portal. Users should not
     * read or write to this property.
     */
    isAutoProvisioned?: boolean;
    /**
     * The configuration settings of the Azure Active Directory login flow.
     */
    login?: AzureActiveDirectoryLoginResponse;
    /**
     * The configuration settings of the Azure Active Directory app registration.
     */
    registration?: AzureActiveDirectoryRegistrationResponse;
    /**
     * The configuration settings of the Azure Active Directory token validation flow.
     */
    validation?: AzureActiveDirectoryValidationResponse;
}

/**
 * The configuration settings of the Azure Active Directory token validation flow.
 */
export interface AzureActiveDirectoryValidationResponse {
    /**
     * The list of audiences that can make successful authentication/authorization requests.
     */
    allowedAudiences?: string[];
    /**
     * The configuration settings of the default authorization policy.
     */
    defaultAuthorizationPolicy?: DefaultAuthorizationPolicyResponse;
    /**
     * The configuration settings of the checks that should be made while validating the JWT Claims.
     */
    jwtClaimChecks?: JwtClaimChecksResponse;
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
 * The azure resource error info.
 */
export interface AzureResourceErrorInfoResponse {
    /**
     * The error code.
     */
    code: string;
    /**
     * The error details.
     */
    details?: AzureResourceErrorInfoResponse[];
    /**
     * The error message.
     */
    message: string;
}

/**
 * The configuration settings of the registration for the Azure Static Web Apps provider
 */
export interface AzureStaticWebAppsRegistrationResponse {
    /**
     * The Client ID of the app used for login.
     */
    clientId?: string;
}

/**
 * The configuration settings of the Azure Static Web Apps provider.
 */
export interface AzureStaticWebAppsResponse {
    /**
     * <code>false</code> if the Azure Static Web Apps provider should not be enabled despite the set registration; otherwise, <code>true</code>.
     */
    enabled?: boolean;
    /**
     * The configuration settings of the Azure Static Web Apps registration.
     */
    registration?: AzureStaticWebAppsRegistrationResponse;
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

/**
 * The configuration settings of the storage of the tokens if blob storage is used.
 */
export interface BlobStorageTokenStoreResponse {
    /**
     * The name of the app setting containing the SAS URL of the blob storage containing the tokens.
     */
    sasUrlSettingName?: string;
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

/**
 * The configuration settings of the app registration for providers that have client ids and client secrets
 */
export interface ClientRegistrationResponse {
    /**
     * The Client ID of the app used for login.
     */
    clientId?: string;
    /**
     * The app setting name that contains the client secret.
     */
    clientSecretSettingName?: string;
}

/**
 * Non versioned Container App configuration properties that define the mutable settings of a Container app
 */
export interface ConfigurationResponse {
    /**
     * ActiveRevisionsMode controls how active revisions are handled for the Container app:
     * <list><item>Multiple: multiple revisions can be active. If no value if provided, this is the default</item><item>Single: Only one revision can be active at a time. Revision weights can not be used in this mode</item></list>
     */
    activeRevisionsMode?: string;
    /**
     * Ingress configurations.
     */
    ingress?: IngressResponse;
    /**
     * Collection of private container registry credentials for containers used by the Container app
     */
    registries?: RegistryCredentialsResponse[];
    /**
     * Collection of secrets used by a Container app
     */
    secrets?: SecretResponse[];
}
/**
 * configurationResponseProvideDefaults sets the appropriate defaults for ConfigurationResponse
 */
export function configurationResponseProvideDefaults(val: ConfigurationResponse): ConfigurationResponse {
    return {
        ...val,
        ingress: (val.ingress ? ingressResponseProvideDefaults(val.ingress) : undefined),
    };
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

/**
 * Connection error
 */
export interface ConnectionErrorResponse {
    /**
     * Code of the status
     */
    code?: string;
    /**
     * Resource ETag
     */
    etag?: string;
    /**
     * Resource id
     */
    id: string;
    /**
     * Resource location
     */
    location?: string;
    /**
     * Description of the status
     */
    message?: string;
    /**
     * Resource name
     */
    name: string;
    /**
     * Resource tags
     */
    tags?: {[key: string]: string};
    /**
     * Resource type
     */
    type: string;
}

export interface ConnectionGatewayDefinitionResponseProperties {
    /**
     * The URI of the backend
     */
    backendUri?: string;
    /**
     * The gateway installation reference
     */
    connectionGatewayInstallation?: ConnectionGatewayReferenceResponse;
    /**
     * The gateway admin
     */
    contactInformation?: string[];
    /**
     * The gateway description
     */
    description?: string;
    /**
     * The gateway display name
     */
    displayName?: string;
    /**
     * The machine name of the gateway
     */
    machineName?: string;
    /**
     * The gateway status
     */
    status?: any;
}

/**
 * The gateway installation reference
 */
export interface ConnectionGatewayReferenceResponse {
    /**
     * Resource reference id
     */
    id?: string;
    /**
     * Resource reference location
     */
    location?: string;
    /**
     * Resource reference name
     */
    name?: string;
    /**
     * Resource reference type
     */
    type?: string;
}

/**
 * Connection provider parameters
 */
export interface ConnectionParameterResponse {
    /**
     * OAuth settings for the connection provider
     */
    oAuthSettings?: ApiOAuthSettingsResponse;
    /**
     * Type of the parameter
     */
    type?: string;
}

/**
 * Connection status
 */
export interface ConnectionStatusDefinitionResponse {
    /**
     * Connection error
     */
    error?: ConnectionErrorResponse;
    /**
     * The gateway status
     */
    status?: string;
    /**
     * Target of the error
     */
    target?: string;
}

/**
 * A consent link
 */
export interface ConsentLinkDefinitionResponse {
    /**
     * Display name of the parameter in the connection provider's OAuth settings
     */
    displayName?: string;
    /**
     * URI for first party login
     */
    firstPartyLoginUri?: string;
    /**
     * URI for the consent link
     */
    link?: string;
    /**
     * Status of the link
     */
    status?: string;
}

/**
 * Container App Secret.
 */
export interface ContainerAppSecretResponse {
    /**
     * Secret Name.
     */
    name: string;
    /**
     * Secret Value.
     */
    value: string;
}

export interface ContainerAppsConfigurationResponse {
    /**
     * Resource ID of a subnet for control plane infrastructure components. This subnet must be in the same VNET as the subnet defined in appSubnetResourceId. Must not overlap with the IP range defined in platformReservedCidr, if defined.
     */
    appSubnetResourceId?: string;
    /**
     * Resource ID of a subnet for control plane infrastructure components. This subnet must be in the same VNET as the subnet defined in appSubnetResourceId. Must not overlap with the IP range defined in platformReservedCidr, if defined.
     */
    controlPlaneSubnetResourceId?: string;
    /**
     * Azure Monitor instrumentation key used by Dapr to export Service to Service communication telemetry
     */
    daprAIInstrumentationKey?: string;
    /**
     * CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the IP range defined in platformReservedCidr, if defined.
     */
    dockerBridgeCidr?: string;
    /**
     * IP range in CIDR notation that can be reserved for environment infrastructure IP addresses. It must not overlap with any other Subnet IP ranges.
     */
    platformReservedCidr?: string;
    /**
     * An IP address from the IP range defined by platformReservedCidr that will be reserved for the internal DNS server
     */
    platformReservedDnsIP?: string;
}

/**
 * Container App container resource requirements.
 */
export interface ContainerResourcesResponse {
    /**
     * Required CPU in cores, e.g. 0.5
     */
    cpu?: number;
    /**
     * Required memory, e.g. "250Mb"
     */
    memory?: string;
}

/**
 * Container App container definition.
 */
export interface ContainerResponse {
    /**
     * Container start command arguments.
     */
    args?: string[];
    /**
     * Container start command.
     */
    command?: string[];
    /**
     * Container environment variables.
     */
    env?: EnvironmentVarResponse[];
    /**
     * Container image tag.
     */
    image?: string;
    /**
     * Custom container name.
     */
    name?: string;
    /**
     * Container resource requirements.
     */
    resources?: ContainerResourcesResponse;
}

/**
 * The configuration settings of the session cookie's expiration.
 */
export interface CookieExpirationResponse {
    /**
     * The convention used when determining the session cookie's expiration.
     */
    convention?: string;
    /**
     * The time after the request is made when the session cookie should expire.
     */
    timeToExpiration?: string;
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
 * Custom API properties
 */
export interface CustomApiPropertiesDefinitionResponse {
    /**
     * API Definitions
     */
    apiDefinitions?: ApiResourceDefinitionsResponse;
    /**
     * The API type
     */
    apiType?: string;
    /**
     * The API backend service
     */
    backendService?: ApiResourceBackendServiceResponse;
    /**
     * Brand color
     */
    brandColor?: string;
    /**
     * The custom API capabilities
     */
    capabilities?: string[];
    /**
     * Connection parameters
     */
    connectionParameters?: {[key: string]: ConnectionParameterResponse};
    /**
     * The custom API description
     */
    description?: string;
    /**
     * The display name
     */
    displayName?: string;
    /**
     * The icon URI
     */
    iconUri?: string;
    /**
     * Runtime URLs
     */
    runtimeUrls?: string[];
    /**
     * The JSON representation of the swagger
     */
    swagger?: any;
    /**
     * The WSDL definition
     */
    wsdlDefinition?: WsdlDefinitionResponse;
}

/**
 * Full view of the custom domain suffix configuration for ASEv3.
 */
export interface CustomDnsSuffixConfigurationResponse {
    /**
     * The URL referencing the Azure Key Vault certificate secret that should be used as the default SSL/TLS certificate for sites with the custom domain suffix.
     */
    certificateUrl?: string;
    /**
     * The default custom domain suffix to use for all sites deployed on the ASE.
     */
    dnsSuffix?: string;
    /**
     * Resource Id.
     */
    id: string;
    /**
     * The user-assigned identity to use for resolving the key vault certificate reference. If not specified, the system-assigned ASE identity will be used if available.
     */
    keyVaultReferenceIdentity?: string;
    /**
     * Kind of resource.
     */
    kind?: string;
    /**
     * Resource Name.
     */
    name: string;
    provisioningDetails: string;
    provisioningState: string;
    /**
     * Resource type.
     */
    type: string;
}

/**
 * The configuration settings of the custom Open ID Connect provider.
 */
export interface CustomOpenIdConnectProviderResponse {
    /**
     * <code>false</code> if the custom Open ID provider provider should not be enabled; otherwise, <code>true</code>.
     */
    enabled?: boolean;
    /**
     * The configuration settings of the login flow of the custom Open ID Connect provider.
     */
    login?: OpenIdConnectLoginResponse;
    /**
     * The configuration settings of the app registration for the custom Open ID Connect provider.
     */
    registration?: OpenIdConnectRegistrationResponse;
}

/**
 * Container App container Custom scaling rule.
 */
export interface CustomScaleRuleResponse {
    /**
     * Authentication secrets for the custom scale rule.
     */
    auth?: ScaleRuleAuthResponse[];
    /**
     * Metadata properties to describe custom scale rule.
     */
    metadata?: {[key: string]: string};
    /**
     * Type of the custom scale rule
     * eg: azure-servicebus, redis etc.
     */
    type?: string;
}

/**
 * Dapr component configuration
 */
export interface DaprComponentResponse {
    /**
     * Component metadata
     */
    metadata?: DaprMetadataResponse[];
    /**
     * Component name
     */
    name?: string;
    /**
     * Component type
     */
    type?: string;
    /**
     * Component version
     */
    version?: string;
}

/**
 * Container App Dapr component metadata.
 */
export interface DaprMetadataResponse {
    /**
     * Metadata property name.
     */
    name?: string;
    /**
     * Name of the Container App secret from which to pull the metadata property value.
     */
    secretRef?: string;
    /**
     * Metadata property value.
     */
    value?: string;
}

/**
 * Container App Dapr configuration.
 */
export interface DaprResponse {
    /**
     * Dapr application identifier
     */
    appId?: string;
    /**
     * Port on which the Dapr side car
     */
    appPort?: number;
    /**
     * Collection of Dapr components
     */
    components?: DaprComponentResponse[];
    /**
     * Boolean indicating if the Dapr side car is enabled
     */
    enabled?: boolean;
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
 * Static Site Database Connection overview.
 */
export interface DatabaseConnectionOverviewResponse {
    /**
     * A list of configuration files associated with this database connection.
     */
    configurationFiles: StaticSiteDatabaseConnectionConfigurationFileOverviewResponse[];
    /**
     * If present, the identity is used in conjunction with connection string to connect to the database. Use of the system-assigned managed identity is indicated with the string 'SystemAssigned', while use of a user-assigned managed identity is indicated with the resource id of the managed identity resource.
     */
    connectionIdentity: string;
    /**
     * If present, the name of this database connection resource.
     */
    name: string;
    /**
     * The region of the database resource.
     */
    region: string;
    /**
     * The resource id of the database.
     */
    resourceId: string;
}

/**
 * The configuration settings of the Azure Active Directory default authorization policy.
 */
export interface DefaultAuthorizationPolicyResponse {
    /**
     * The configuration settings of the Azure Active Directory allowed applications.
     */
    allowedApplications?: string[];
    /**
     * The configuration settings of the Azure Active Directory allowed principals.
     */
    allowedPrincipals?: AllowedPrincipalsResponse;
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
 * Container App container environment variable.
 */
export interface EnvironmentVarResponse {
    /**
     * Environment variable name.
     */
    name?: string;
    /**
     * Name of the Container App secret from which to pull the environment variable value.
     */
    secretRef?: string;
    /**
     * Non-secret environment variable value.
     */
    value?: string;
}

export interface EnvironmentVariableResponse {
    /**
     * Environment variable name
     */
    name: string;
    /**
     * Environment variable value
     */
    value: string;
}

/**
 * Body of the error response returned from the API.
 */
export interface ErrorEntityResponse {
    /**
     * Basic error code.
     */
    code?: string;
    /**
     * Error Details.
     */
    details?: ErrorEntityResponse[];
    /**
     * Type of error.
     */
    extendedCode?: string;
    /**
     * Inner errors.
     */
    innerErrors?: ErrorEntityResponse[];
    /**
     * Any details of the error.
     */
    message?: string;
    /**
     * Message template.
     */
    messageTemplate?: string;
    /**
     * Parameters for the template.
     */
    parameters?: string[];
    /**
     * The error target.
     */
    target?: string;
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
 * The expression.
 */
export interface ExpressionResponse {
    /**
     * The azure resource error info.
     */
    error?: AzureResourceErrorInfoResponse;
    /**
     * The sub expressions.
     */
    subexpressions?: ExpressionResponse[];
    /**
     * The text.
     */
    text?: string;
    value?: any;
}

/**
 * The expression root.
 */
export interface ExpressionRootResponse {
    /**
     * The azure resource error info.
     */
    error?: AzureResourceErrorInfoResponse;
    /**
     * The path.
     */
    path?: string;
    /**
     * The sub expressions.
     */
    subexpressions?: ExpressionResponse[];
    /**
     * The text.
     */
    text?: string;
    value?: any;
}

/**
 * Extended Location.
 */
export interface ExtendedLocationResponse {
    /**
     * Name of extended location.
     */
    name?: string;
    /**
     * Type of extended location.
     */
    type: string;
}

/**
 * The configuration settings of the Facebook provider.
 */
export interface FacebookResponse {
    /**
     * <code>false</code> if the Facebook provider should not be enabled despite the set registration; otherwise, <code>true</code>.
     */
    enabled?: boolean;
    /**
     * The version of the Facebook api to be used while logging in.
     */
    graphApiVersion?: string;
    /**
     * The configuration settings of the login flow.
     */
    login?: LoginScopesResponse;
    /**
     * The configuration settings of the app registration for the Facebook provider.
     */
    registration?: AppRegistrationResponse;
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

/**
 * The configuration settings of the storage of the tokens if a file system is used.
 */
export interface FileSystemTokenStoreResponse {
    /**
     * The directory in which the tokens will be stored.
     */
    directory?: string;
}

/**
 * The configuration settings of a forward proxy used to make the requests.
 */
export interface ForwardProxyResponse {
    /**
     * The convention used to determine the url of the request made.
     */
    convention?: string;
    /**
     * The name of the header containing the host of the request.
     */
    customHostHeaderName?: string;
    /**
     * The name of the header containing the scheme of the request.
     */
    customProtoHeaderName?: string;
}

export interface FrontEndConfigurationResponse {
    kind?: string;
}

/**
 * The GitHub action code configuration.
 */
export interface GitHubActionCodeConfigurationResponse {
    /**
     * Runtime stack is used to determine the workflow file content for code base apps.
     */
    runtimeStack?: string;
    /**
     * Runtime version is used to determine what build version to set in the workflow file.
     */
    runtimeVersion?: string;
}

/**
 * The GitHub action configuration.
 */
export interface GitHubActionConfigurationResponse {
    /**
     * GitHub Action code configuration.
     */
    codeConfiguration?: GitHubActionCodeConfigurationResponse;
    /**
     * GitHub Action container configuration.
     */
    containerConfiguration?: GitHubActionContainerConfigurationResponse;
    /**
     * Workflow option to determine whether the workflow file should be generated and written to the repository.
     */
    generateWorkflowFile?: boolean;
    /**
     * This will help determine the workflow configuration to select.
     */
    isLinux?: boolean;
}

/**
 * The GitHub action container configuration.
 */
export interface GitHubActionContainerConfigurationResponse {
    /**
     * The image name for the build.
     */
    imageName?: string;
    /**
     * The password used to upload the image to the container registry.
     */
    password?: string;
    /**
     * The server URL for the container registry where the build will be hosted.
     */
    serverUrl?: string;
    /**
     * The username used to upload the image to the container registry.
     */
    username?: string;
}

/**
 * The configuration settings of the GitHub provider.
 */
export interface GitHubResponse {
    /**
     * <code>false</code> if the GitHub provider should not be enabled despite the set registration; otherwise, <code>true</code>.
     */
    enabled?: boolean;
    /**
     * The configuration settings of the login flow.
     */
    login?: LoginScopesResponse;
    /**
     * The configuration settings of the app registration for the GitHub provider.
     */
    registration?: ClientRegistrationResponse;
}

/**
 * The configuration settings that determines the validation flow of users using App Service Authentication/Authorization.
 */
export interface GlobalValidationResponse {
    /**
     * The paths for which unauthenticated flow would not be redirected to the login page.
     */
    excludedPaths?: string[];
    /**
     * The default authentication provider to use when multiple providers are configured.
     * This setting is only needed if multiple providers are configured and the unauthenticated client
     * action is set to "RedirectToLoginPage".
     */
    redirectToProvider?: string;
    /**
     * <code>true</code> if the authentication flow is required any request is made; otherwise, <code>false</code>.
     */
    requireAuthentication?: boolean;
    /**
     * The action to take when an unauthenticated client attempts to access the app.
     */
    unauthenticatedClientAction?: string;
}

/**
 * The configuration settings of the Google provider.
 */
export interface GoogleResponse {
    /**
     * <code>false</code> if the Google provider should not be enabled despite the set registration; otherwise, <code>true</code>.
     */
    enabled?: boolean;
    /**
     * The configuration settings of the login flow.
     */
    login?: LoginScopesResponse;
    /**
     * The configuration settings of the app registration for the Google provider.
     */
    registration?: ClientRegistrationResponse;
    /**
     * The configuration settings of the Azure Active Directory token validation flow.
     */
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

/**
 * Container App container Custom scaling rule.
 */
export interface HttpScaleRuleResponse {
    /**
     * Authentication secrets for the custom scale rule.
     */
    auth?: ScaleRuleAuthResponse[];
    /**
     * Metadata properties to describe http scale rule.
     */
    metadata?: {[key: string]: string};
}

/**
 * The configuration settings of the HTTP requests for authentication and authorization requests made against App Service Authentication/Authorization.
 */
export interface HttpSettingsResponse {
    /**
     * The configuration settings of a forward proxy used to make the requests.
     */
    forwardProxy?: ForwardProxyResponse;
    /**
     * <code>false</code> if the authentication/authorization responses not having the HTTPS scheme are permissible; otherwise, <code>true</code>.
     */
    requireHttps?: boolean;
    /**
     * The configuration settings of the paths HTTP requests.
     */
    routes?: HttpSettingsRoutesResponse;
}

/**
 * The configuration settings of the paths HTTP requests.
 */
export interface HttpSettingsRoutesResponse {
    /**
     * The prefix that should precede all the authentication/authorization paths.
     */
    apiPrefix?: string;
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
     * Resource type.
     */
    type: string;
    /**
     * String representation of the identity.
     */
    value?: string;
}

/**
 * The configuration settings of each of the identity providers used to configure App Service Authentication/Authorization.
 */
export interface IdentityProvidersResponse {
    /**
     * The configuration settings of the Apple provider.
     */
    apple?: AppleResponse;
    /**
     * The configuration settings of the Azure Active directory provider.
     */
    azureActiveDirectory?: AzureActiveDirectoryResponse;
    /**
     * The configuration settings of the Azure Static Web Apps provider.
     */
    azureStaticWebApps?: AzureStaticWebAppsResponse;
    /**
     * The map of the name of the alias of each custom Open ID Connect provider to the
     * configuration settings of the custom Open ID Connect provider.
     */
    customOpenIdConnectProviders?: {[key: string]: CustomOpenIdConnectProviderResponse};
    /**
     * The configuration settings of the Facebook provider.
     */
    facebook?: FacebookResponse;
    /**
     * The configuration settings of the GitHub provider.
     */
    gitHub?: GitHubResponse;
    /**
     * The configuration settings of the Google provider.
     */
    google?: GoogleResponse;
    /**
     * The configuration settings of the legacy Microsoft Account provider.
     */
    legacyMicrosoftAccount?: LegacyMicrosoftAccountResponse;
    /**
     * The configuration settings of the Twitter provider.
     */
    twitter?: TwitterResponse;
}

/**
 * Container App Ingress configuration.
 */
export interface IngressResponse {
    /**
     * Bool indicating if HTTP connections to is allowed. If set to false HTTP connections are automatically redirected to HTTPS connections
     */
    allowInsecure?: boolean;
    /**
     * Bool indicating if app exposes an external http endpoint
     */
    external?: boolean;
    /**
     * Hostname.
     */
    fqdn: string;
    /**
     * Target Port in containers for traffic from ingress
     */
    targetPort?: number;
    traffic?: TrafficWeightResponse[];
    /**
     * Ingress transport protocol
     */
    transport?: string;
}
/**
 * ingressResponseProvideDefaults sets the appropriate defaults for IngressResponse
 */
export function ingressResponseProvideDefaults(val: IngressResponse): IngressResponse {
    return {
        ...val,
        external: (val.external) ?? false,
    };
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

/**
 * The configuration settings of the checks that should be made while validating the JWT Claims.
 */
export interface JwtClaimChecksResponse {
    /**
     * The list of the allowed client applications.
     */
    allowedClientApplications?: string[];
    /**
     * The list of the allowed groups.
     */
    allowedGroups?: string[];
}

/**
 * Specification for a Kubernetes Environment to use for this resource.
 */
export interface KubeEnvironmentProfileResponse {
    /**
     * Resource ID of the Kubernetes Environment.
     */
    id?: string;
    /**
     * Name of the Kubernetes Environment.
     */
    name: string;
    /**
     * Resource type of the Kubernetes Environment.
     */
    type: string;
}

/**
 * The configuration settings of the legacy Microsoft Account provider.
 */
export interface LegacyMicrosoftAccountResponse {
    /**
     * <code>false</code> if the legacy Microsoft Account provider should not be enabled despite the set registration; otherwise, <code>true</code>.
     */
    enabled?: boolean;
    /**
     * The configuration settings of the login flow.
     */
    login?: LoginScopesResponse;
    /**
     * The configuration settings of the app registration for the legacy Microsoft Account provider.
     */
    registration?: ClientRegistrationResponse;
    /**
     * The configuration settings of the legacy Microsoft Account provider token validation flow.
     */
    validation?: AllowedAudiencesValidationResponse;
}

export interface LogAnalyticsConfigurationResponse {
    customerId?: string;
}

/**
 * The configuration settings of the login flow of users using App Service Authentication/Authorization.
 */
export interface LoginResponse {
    /**
     * External URLs that can be redirected to as part of logging in or logging out of the app. Note that the query string part of the URL is ignored.
     * This is an advanced setting typically only needed by Windows Store application backends.
     * Note that URLs within the current domain are always implicitly allowed.
     */
    allowedExternalRedirectUrls?: string[];
    /**
     * The configuration settings of the session cookie's expiration.
     */
    cookieExpiration?: CookieExpirationResponse;
    /**
     * The configuration settings of the nonce used in the login flow.
     */
    nonce?: NonceResponse;
    /**
     * <code>true</code> if the fragments from the request are preserved after the login request is made; otherwise, <code>false</code>.
     */
    preserveUrlFragmentsForLogins?: boolean;
    /**
     * The routes that specify the endpoints used for login and logout requests.
     */
    routes?: LoginRoutesResponse;
    /**
     * The configuration settings of the token store.
     */
    tokenStore?: TokenStoreResponse;
}

/**
 * The routes that specify the endpoints used for login and logout requests.
 */
export interface LoginRoutesResponse {
    /**
     * The endpoint at which a logout request should be made.
     */
    logoutEndpoint?: string;
}

/**
 * The configuration settings of the login flow, including the scopes that should be requested.
 */
export interface LoginScopesResponse {
    /**
     * A list of the scopes that should be requested while authenticating.
     */
    scopes?: string[];
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
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
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
 * The configuration settings of the nonce used in the login flow.
 */
export interface NonceResponse {
    /**
     * The time after the request is made when the nonce should expire.
     */
    nonceExpirationInterval?: string;
    /**
     * <code>false</code> if the nonce should not be validated while completing the login flow; otherwise, <code>true</code>.
     */
    validateNonce?: boolean;
}

/**
 * The authentication client credentials of the custom Open ID Connect provider.
 */
export interface OpenIdConnectClientCredentialResponse {
    /**
     * The app setting that contains the client secret for the custom Open ID Connect provider.
     */
    clientSecretSettingName?: string;
    /**
     * The method that should be used to authenticate the user.
     */
    method?: string;
}

/**
 * The configuration settings of the endpoints used for the custom Open ID Connect provider.
 */
export interface OpenIdConnectConfigResponse {
    /**
     * The endpoint to be used to make an authorization request.
     */
    authorizationEndpoint?: string;
    /**
     * The endpoint that provides the keys necessary to validate the token.
     */
    certificationUri?: string;
    /**
     * The endpoint that issues the token.
     */
    issuer?: string;
    /**
     * The endpoint to be used to request a token.
     */
    tokenEndpoint?: string;
    /**
     * The endpoint that contains all the configuration endpoints for the provider.
     */
    wellKnownOpenIdConfiguration?: string;
}

/**
 * The configuration settings of the login flow of the custom Open ID Connect provider.
 */
export interface OpenIdConnectLoginResponse {
    /**
     * The name of the claim that contains the users name.
     */
    nameClaimType?: string;
    /**
     * A list of the scopes that should be requested while authenticating.
     */
    scopes?: string[];
}

/**
 * The configuration settings of the app registration for the custom Open ID Connect provider.
 */
export interface OpenIdConnectRegistrationResponse {
    /**
     * The authentication credentials of the custom Open ID Connect provider.
     */
    clientCredential?: OpenIdConnectClientCredentialResponse;
    /**
     * The client id of the custom Open ID Connect provider.
     */
    clientId?: string;
    /**
     * The configuration settings of the endpoints used for the custom Open ID Connect provider.
     */
    openIdConnectConfiguration?: OpenIdConnectConfigResponse;
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
     * Gets or sets a JSON string containing a list of tags that are whitelisted for use by the push registration endpoint.
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
 * Container App container Azure Queue based scaling rule.
 */
export interface QueueScaleRuleResponse {
    /**
     * Authentication secrets for the queue scale rule.
     */
    auth?: ScaleRuleAuthResponse[];
    /**
     * Queue length.
     */
    queueLength?: number;
    /**
     * Queue name.
     */
    queueName?: string;
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
     * Custom decision algorithm can be provided in TiPCallback site extension which URL can be specified.
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
 * Container App Private Registry
 */
export interface RegistryCredentialsResponse {
    /**
     * The name of the Secret that contains the registry login password
     */
    passwordSecretRef?: string;
    /**
     * Container Registry Server
     */
    server?: string;
    /**
     * Container Registry Username
     */
    username?: string;
}

/**
 * A remote private endpoint connection
 */
export interface RemotePrivateEndpointConnectionResponse {
    /**
     * Resource Id.
     */
    id: string;
    /**
     * Private IPAddresses mapped to the remote private endpoint
     */
    ipAddresses?: string[];
    /**
     * Kind of resource.
     */
    kind?: string;
    /**
     * Resource Name.
     */
    name: string;
    /**
     * PrivateEndpoint of a remote private endpoint connection
     */
    privateEndpoint?: ArmIdWrapperResponse;
    /**
     * The state of a private link connection
     */
    privateLinkServiceConnectionState?: PrivateLinkConnectionStateResponse;
    provisioningState: string;
    /**
     * Resource type.
     */
    type: string;
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
 * Message envelope that contains the common Azure resource manager properties and the resource provider specific content.
 */
export interface ResponseMessageEnvelopeRemotePrivateEndpointConnectionResponse {
    /**
     * Azure-AsyncOperation Error info.
     */
    error?: ErrorEntityResponse;
    /**
     * Resource Id. Typically ID is populated only for responses to GET requests. Caller is responsible for passing in this
     * value for GET requests only.
     * For example: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupId}/providers/Microsoft.Web/sites/{sitename}
     */
    id?: string;
    /**
     * MSI resource
     */
    identity?: ManagedServiceIdentityResponse;
    /**
     * Geographical region resource belongs to e.g. SouthCentralUS, SouthEastAsia.
     */
    location?: string;
    /**
     * Name of resource.
     */
    name?: string;
    /**
     * Azure resource manager plan.
     */
    plan?: ArmPlanResponse;
    /**
     * Resource specific properties.
     */
    properties?: RemotePrivateEndpointConnectionResponse;
    /**
     * SKU description of the resource.
     */
    sku?: SkuDescriptionResponse;
    /**
     * Azure-AsyncOperation Status info.
     */
    status?: string;
    /**
     * Tags associated with resource.
     */
    tags?: {[key: string]: string};
    /**
     * Type of resource e.g "Microsoft.Web/sites".
     */
    type?: string;
    /**
     * Logical Availability Zones the service is hosted in
     */
    zones?: string[];
}

/**
 * Container App scaling configurations.
 */
export interface ScaleResponse {
    /**
     * Optional. Maximum number of container replicas. Defaults to 10 if not set.
     */
    maxReplicas?: number;
    /**
     * Optional. Minimum number of container replicas.
     */
    minReplicas?: number;
    /**
     * Scaling rules.
     */
    rules?: ScaleRuleResponse[];
}

/**
 * Auth Secrets for Container App Scale Rule
 */
export interface ScaleRuleAuthResponse {
    /**
     * Name of the Container App secret from which to pull the auth params.
     */
    secretRef?: string;
    /**
     * Trigger Parameter that uses the secret
     */
    triggerParameter?: string;
}

/**
 * Container App container scaling rule.
 */
export interface ScaleRuleResponse {
    /**
     * Azure Queue based scaling.
     */
    azureQueue?: QueueScaleRuleResponse;
    /**
     * Custom scale rule.
     */
    custom?: CustomScaleRuleResponse;
    /**
     * HTTP requests based scaling.
     */
    http?: HttpScaleRuleResponse;
    /**
     * Scale Rule Name
     */
    name?: string;
}

/**
 * Container App Secret.
 */
export interface SecretResponse {
    /**
     * Secret Name.
     */
    name?: string;
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
     * List of Azure Storage Accounts.
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
     * Maximum number of workers that a site can scale out to.
     * This setting only applies to apps in plans where ElasticScaleEnabled is <code>true</code>
     */
    elasticWebAppScaleLimit?: number;
    /**
     * This is work around for polymorphic types.
     */
    experiments?: ExperimentsResponse;
    /**
     * State of FTP / FTPS service
     */
    ftpsState?: string;
    /**
     * Maximum number of workers that a site can scale out to.
     * This setting only applies to the Consumption and Elastic Premium Plans
     */
    functionAppScaleLimit?: number;
    /**
     * Gets or sets a value indicating whether functions runtime scale monitoring is enabled. When enabled,
     * the ScaleController will not monitor event sources directly, but will instead call to the
     * runtime to get scale status.
     */
    functionsRuntimeScaleMonitoringEnabled?: boolean;
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
     * Default action for main access restriction if no rules are matched.
     */
    ipSecurityRestrictionsDefaultAction?: string;
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
     * Identity to use for Key Vault Reference authentication.
     */
    keyVaultReferenceIdentity?: string;
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
     * Number of minimum instance count for a site
     * This setting only applies to the Elastic Plans
     */
    minimumElasticInstanceCount?: number;
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
     * Property to allow or block all public traffic.
     */
    publicNetworkAccess?: string;
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
     * Default action for scm access restriction if no rules are matched.
     */
    scmIpSecurityRestrictionsDefaultAction?: string;
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
     * Sets the time zone a site uses for generating timestamps. Compatible with Linux and Windows App Service. Setting the WEBSITE_TIME_ZONE app setting takes precedence over this config. For Linux, expects tz database values https://www.iana.org/time-zones (for a quick reference see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For Windows, expects one of the time zones listed under HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones
     */
    websiteTimeZone?: string;
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
     * Maximum number of Elastic workers for this App Service plan SKU.
     */
    elasticMaximum?: number;
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
     * Request Path.
     */
    path?: string;
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
 * Build properties for the static site.
 */
export interface StaticSiteBuildPropertiesResponse {
    /**
     * A custom command to run during deployment of the Azure Functions API application.
     */
    apiBuildCommand?: string;
    /**
     * The path to the api code within the repository.
     */
    apiLocation?: string;
    /**
     * Deprecated: The path of the app artifacts after building (deprecated in favor of OutputLocation)
     */
    appArtifactLocation?: string;
    /**
     * A custom command to run during deployment of the static content application.
     */
    appBuildCommand?: string;
    /**
     * The path to the app code within the repository.
     */
    appLocation?: string;
    /**
     * Github Action secret name override.
     */
    githubActionSecretNameOverride?: string;
    /**
     * The output path of the app after building.
     */
    outputLocation?: string;
    /**
     * Skip Github Action workflow generation.
     */
    skipGithubActionWorkflowGeneration?: boolean;
}

/**
 * A database connection configuration file
 */
export interface StaticSiteDatabaseConnectionConfigurationFileOverviewResponse {
    /**
     * The Base64 encoding of the file contents.
     */
    contents: string;
    /**
     * The name of the configuration file.
     */
    fileName: string;
    /**
     * The type of configuration file.
     */
    type: string;
}

/**
 * Static Site Linked Backend ARM resource.
 */
export interface StaticSiteLinkedBackendResponse {
    /**
     * The resource id of the backend linked to the static site
     */
    backendResourceId?: string;
    /**
     * The date and time on which the backend was linked to the static site.
     */
    createdOn: string;
    /**
     * The provisioning state of the linking process.
     */
    provisioningState: string;
    /**
     * The region of the backend linked to the static site
     */
    region?: string;
}

/**
 * Template Options for the static site.
 */
export interface StaticSiteTemplateOptionsResponse {
    /**
     * Description of the newly generated repository.
     */
    description?: string;
    /**
     * Whether or not the newly generated repository is a private repository. Defaults to false (i.e. public).
     */
    isPrivate?: boolean;
    /**
     * Owner of the newly generated repository.
     */
    owner?: string;
    /**
     * Name of the newly generated repository.
     */
    repositoryName?: string;
    /**
     * URL of the template repository. The newly generated repository will be based on this one.
     */
    templateRepositoryUrl?: string;
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
     * Resource type.
     */
    type: string;
    /**
     * The user id for the static site user.
     */
    userId: string;
}

/**
 * A static site user provided function.
 */
export interface StaticSiteUserProvidedFunctionAppResponse {
    /**
     * The date and time on which the function app was registered with the static site.
     */
    createdOn: string;
    /**
     * The region of the function app registered with the static site
     */
    functionAppRegion?: string;
    /**
     * The resource id of the function app registered with the static site
     */
    functionAppResourceId?: string;
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
     * Resource type.
     */
    type: string;
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
     * Request Path
     */
    path?: string;
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
 * Trigger based on range of status codes.
 */
export interface StatusCodesRangeBasedTriggerResponse {
    /**
     * Request Count.
     */
    count?: number;
    path?: string;
    /**
     * HTTP status code.
     */
    statusCodes?: string;
    /**
     * Time interval.
     */
    timeInterval?: string;
}

/**
 * Container App versioned application definition.
 * Defines the desired state of an immutable revision.
 * Any changes to this section Will result in a new revision being created
 */
export interface TemplateResponse {
    /**
     * List of container definitions for the Container App.
     */
    containers?: ContainerResponse[];
    /**
     * Dapr configuration for the Container App.
     */
    dapr?: DaprResponse;
    /**
     * User friendly suffix that is appended to the revision name
     */
    revisionSuffix?: string;
    /**
     * Scaling properties for the Container App.
     */
    scale?: ScaleResponse;
}

/**
 * The configuration settings of the token store.
 */
export interface TokenStoreResponse {
    /**
     * The configuration settings of the storage of the tokens if blob storage is used.
     */
    azureBlobStorage?: BlobStorageTokenStoreResponse;
    /**
     * <code>true</code> to durably store platform-specific security tokens that are obtained during login flows; otherwise, <code>false</code>.
     *  The default is <code>false</code>.
     */
    enabled?: boolean;
    /**
     * The configuration settings of the storage of the tokens if a file system is used.
     */
    fileSystem?: FileSystemTokenStoreResponse;
    /**
     * The number of hours after session token expiration that a session token can be used to
     * call the token refresh API. The default is 72 hours.
     */
    tokenRefreshExtensionHours?: number;
}

/**
 * Traffic weight assigned to a revision
 */
export interface TrafficWeightResponse {
    /**
     * Indicates that the traffic weight belongs to a latest stable revision
     */
    latestRevision?: boolean;
    /**
     * Name of a revision
     */
    revisionName?: string;
    /**
     * Traffic weight assigned to a revision
     */
    weight?: number;
}
/**
 * trafficWeightResponseProvideDefaults sets the appropriate defaults for TrafficWeightResponse
 */
export function trafficWeightResponseProvideDefaults(val: TrafficWeightResponse): TrafficWeightResponse {
    return {
        ...val,
        latestRevision: (val.latestRevision) ?? false,
    };
}

/**
 * The configuration settings of the app registration for the Twitter provider.
 */
export interface TwitterRegistrationResponse {
    /**
     * The OAuth 1.0a consumer key of the Twitter application used for sign-in.
     * This setting is required for enabling Twitter Sign-In.
     * Twitter Sign-In documentation: https://dev.twitter.com/web/sign-in
     */
    consumerKey?: string;
    /**
     * The app setting name that contains the OAuth 1.0a consumer secret of the Twitter
     * application used for sign-in.
     */
    consumerSecretSettingName?: string;
}

/**
 * The configuration settings of the Twitter provider.
 */
export interface TwitterResponse {
    /**
     * <code>false</code> if the Twitter provider should not be enabled despite the set registration; otherwise, <code>true</code>.
     */
    enabled?: boolean;
    /**
     * The configuration settings of the app registration for the Twitter provider.
     */
    registration?: TwitterRegistrationResponse;
}

/**
 * User Assigned identity.
 */
export interface UserAssignedIdentityResponse {
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
 * Specification for using a Virtual Network.
 */
export interface VirtualNetworkProfileResponse {
    /**
     * Resource id of the Virtual Network.
     */
    id: string;
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
     * Resource type.
     */
    type: string;
}

export interface VolumeMountResponse {
    /**
     * Target path on the container where volume is mounted on
     */
    containerMountPath: string;
    /**
     * Config Data to be mounted on the volume
     */
    data?: string;
    /**
     * Boolean to specify if the mount is read only on the container
     */
    readOnly?: boolean;
    /**
     * Sub path in the volume where volume is mounted from.
     */
    volumeSubPath: string;
}

/**
 * Additional workflow properties.
 */
export interface WorkflowEnvelopeResponseProperties {
    /**
     * Gets or sets the files.
     */
    files?: {[key: string]: any};
    /**
     * Gets or sets the state of the workflow.
     */
    flowState?: string;
    /**
     * Gets or sets workflow health.
     */
    health?: WorkflowHealthResponse;
}

/**
 * Represents the workflow health.
 */
export interface WorkflowHealthResponse {
    /**
     * Gets or sets the workflow error.
     */
    error?: ErrorEntityResponse;
    /**
     * Gets or sets the workflow health state.
     */
    state: string;
}

/**
 * Gets the workflow trigger callback URL query parameters.
 */
export interface WorkflowTriggerListCallbackUrlQueriesResponse {
    /**
     * The api version.
     */
    apiVersion?: string;
    /**
     * The SAS timestamp.
     */
    se?: string;
    /**
     * The SAS signature.
     */
    sig?: string;
    /**
     * The SAS permissions.
     */
    sp?: string;
    /**
     * The SAS version.
     */
    sv?: string;
}

/**
 * The WSDL definition
 */
export interface WsdlDefinitionResponse {
    /**
     * The WSDL content
     */
    content?: string;
    /**
     * The WSDL import method
     */
    importMethod?: string;
    /**
     * The service with name and endpoint names
     */
    service?: WsdlServiceResponse;
    /**
     * The WSDL URL
     */
    url?: string;
}

/**
 * The service with name and endpoint names
 */
export interface WsdlServiceResponse {
    /**
     * List of the endpoints' qualified names
     */
    endpointQualifiedNames?: string[];
    /**
     * The service's qualified name
     */
    qualifiedName: string;
}




















