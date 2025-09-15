import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * AcsChat channel definition
 */
export interface AcsChatChannelResponse {
    /**
     * The channel name
     * Expected value is 'AcsChatChannel'.
     */
    channelName: "AcsChatChannel";
    /**
     * Entity Tag of the resource
     */
    etag?: string;
    /**
     * Specifies the location of the resource.
     */
    location?: string;
    /**
     * Provisioning state of the resource
     */
    provisioningState: string;
}
/**
 * acsChatChannelResponseProvideDefaults sets the appropriate defaults for AcsChatChannelResponse
 */
export function acsChatChannelResponseProvideDefaults(val: AcsChatChannelResponse): AcsChatChannelResponse {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * The parameters to provide for the Alexa channel.
 */
export interface AlexaChannelPropertiesResponse {
    /**
     * The Alexa skill Id
     */
    alexaSkillId: string;
    /**
     * Whether this channel is enabled for the bot
     */
    isEnabled: boolean;
    /**
     * Full Uri used to configured the skill in Alexa
     */
    serviceEndpointUri: string;
    /**
     * Url fragment used in part of the Uri configured in Alexa
     */
    urlFragment: string;
}

/**
 * Alexa channel definition
 */
export interface AlexaChannelResponse {
    /**
     * The channel name
     * Expected value is 'AlexaChannel'.
     */
    channelName: "AlexaChannel";
    /**
     * Entity Tag of the resource
     */
    etag?: string;
    /**
     * Specifies the location of the resource.
     */
    location?: string;
    /**
     * The set of properties specific to Alexa channel resource
     */
    properties?: AlexaChannelPropertiesResponse;
    /**
     * Provisioning state of the resource
     */
    provisioningState: string;
}
/**
 * alexaChannelResponseProvideDefaults sets the appropriate defaults for AlexaChannelResponse
 */
export function alexaChannelResponseProvideDefaults(val: AlexaChannelResponse): AlexaChannelResponse {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * The parameters to provide for the Bot.
 */
export interface BotPropertiesResponse {
    /**
     * Contains resource all settings defined as key/value pairs.
     */
    allSettings?: {[key: string]: string};
    /**
     * The hint (e.g. keyVault secret resourceId) on how to fetch the app secret
     */
    appPasswordHint?: string;
    /**
     * The CMK encryption status
     */
    cmekEncryptionStatus: string;
    /**
     * The CMK Url
     */
    cmekKeyVaultUrl?: string;
    /**
     * Collection of channels for which the bot is configured
     */
    configuredChannels: string[];
    /**
     * The description of the bot
     */
    description?: string;
    /**
     * The Application Insights key
     */
    developerAppInsightKey?: string;
    /**
     * The Application Insights Api Key
     */
    developerAppInsightsApiKey?: string;
    /**
     * The Application Insights App Id
     */
    developerAppInsightsApplicationId?: string;
    /**
     * Opt-out of local authentication and ensure only MSI and AAD can be used exclusively for authentication.
     */
    disableLocalAuth?: boolean;
    /**
     * The Name of the bot
     */
    displayName: string;
    /**
     * Collection of channels for which the bot is enabled
     */
    enabledChannels: string[];
    /**
     * The bot's endpoint
     */
    endpoint: string;
    /**
     * The bot's endpoint version
     */
    endpointVersion: string;
    /**
     * The Icon Url of the bot
     */
    iconUrl?: string;
    /**
     * Whether Cmek is enabled
     */
    isCmekEnabled?: boolean;
    /**
     * Whether the bot is developerAppInsightsApiKey set
     */
    isDeveloperAppInsightsApiKeySet: boolean;
    /**
     * Whether the bot is streaming supported
     */
    isStreamingSupported?: boolean;
    /**
     * Collection of LUIS App Ids
     */
    luisAppIds?: string[];
    /**
     * The LUIS Key
     */
    luisKey?: string;
    /**
     * The bot's manifest url
     */
    manifestUrl?: string;
    /**
     * Token used to migrate non Azure bot to azure subscription
     */
    migrationToken: string;
    /**
     * Microsoft App Id for the bot
     */
    msaAppId: string;
    /**
     * Microsoft App Managed Identity Resource Id for the bot
     */
    msaAppMSIResourceId?: string;
    /**
     * Microsoft App Tenant Id for the bot
     */
    msaAppTenantId?: string;
    /**
     * Microsoft App Type for the bot
     */
    msaAppType?: string;
    /**
     * List of Network Security Perimeter configurations for the bot
     */
    networkSecurityPerimeterConfigurations: NetworkSecurityPerimeterConfigurationResponse[];
    /**
     * The hint to browser (e.g. protocol handler) on how to open the bot for authoring
     */
    openWithHint?: string;
    /**
     * Contains resource parameters defined as key/value pairs.
     */
    parameters?: {[key: string]: string};
    /**
     * List of Private Endpoint Connections configured for the bot
     */
    privateEndpointConnections: PrivateEndpointConnectionResponse[];
    /**
     * Provisioning state of the resource
     */
    provisioningState: string;
    /**
     * Whether the bot is in an isolated network
     */
    publicNetworkAccess?: string;
    /**
     * Publishing credentials of the resource
     */
    publishingCredentials?: string;
    /**
     * The channel schema transformation version for the bot
     */
    schemaTransformationVersion?: string;
    /**
     * The storage resourceId for the bot
     */
    storageResourceId?: string;
    /**
     * The Tenant Id for the bot
     */
    tenantId?: string;
}
/**
 * botPropertiesResponseProvideDefaults sets the appropriate defaults for BotPropertiesResponse
 */
export function botPropertiesResponseProvideDefaults(val: BotPropertiesResponse): BotPropertiesResponse {
    return {
        ...val,
        iconUrl: (val.iconUrl) ?? "",
        isCmekEnabled: (val.isCmekEnabled) ?? false,
        isStreamingSupported: (val.isStreamingSupported) ?? false,
        publicNetworkAccess: (val.publicNetworkAccess) ?? "Enabled",
    };
}

/**
 * Channel settings definition
 */
export interface ChannelSettingsResponse {
    /**
     * The bot icon url
     */
    botIconUrl?: string;
    /**
     * The bot id
     */
    botId?: string;
    /**
     * The channel display name
     */
    channelDisplayName?: string;
    /**
     * The channel id
     */
    channelId?: string;
    /**
     * Opt-out of local authentication and ensure only MSI and AAD can be used exclusively for authentication.
     */
    disableLocalAuth?: boolean;
    /**
     * The extensionKey1
     */
    extensionKey1?: string;
    /**
     * The extensionKey2
     */
    extensionKey2?: string;
    /**
     * Whether this channel is enabled for the bot
     */
    isEnabled?: boolean;
    /**
     * Whether customer needs to agree to new terms.
     */
    requireTermsAgreement?: boolean;
    /**
     * The list of sites
     */
    sites?: SiteResponse[];
}
/**
 * channelSettingsResponseProvideDefaults sets the appropriate defaults for ChannelSettingsResponse
 */
export function channelSettingsResponseProvideDefaults(val: ChannelSettingsResponse): ChannelSettingsResponse {
    return {
        ...val,
        extensionKey1: (val.extensionKey1) ?? "",
        extensionKey2: (val.extensionKey2) ?? "",
    };
}

/**
 * Extra Parameter in a Connection Setting Properties to indicate service provider specific properties
 */
export interface ConnectionSettingParameterResponse {
    /**
     * Key for the Connection Setting Parameter.
     */
    key?: string;
    /**
     * Value associated with the Connection Setting Parameter.
     */
    value?: string;
}

/**
 * Properties for a Connection Setting Item
 */
export interface ConnectionSettingPropertiesResponse {
    /**
     * Client Id associated with the Connection Setting.
     */
    clientId?: string;
    /**
     * Client Secret associated with the Connection Setting
     */
    clientSecret?: string;
    /**
     * Id of the Connection Setting.
     */
    id?: string;
    /**
     * Name of the Connection Setting.
     */
    name?: string;
    /**
     * Service Provider Parameters associated with the Connection Setting
     */
    parameters?: ConnectionSettingParameterResponse[];
    /**
     * Provisioning state of the resource
     */
    provisioningState?: string;
    /**
     * Scopes associated with the Connection Setting
     */
    scopes?: string;
    /**
     * Service Provider Display Name associated with the Connection Setting
     */
    serviceProviderDisplayName?: string;
    /**
     * Service Provider Id associated with the Connection Setting
     */
    serviceProviderId?: string;
    /**
     * Setting Id set by the service for the Connection Setting.
     */
    settingId: string;
}
/**
 * connectionSettingPropertiesResponseProvideDefaults sets the appropriate defaults for ConnectionSettingPropertiesResponse
 */
export function connectionSettingPropertiesResponseProvideDefaults(val: ConnectionSettingPropertiesResponse): ConnectionSettingPropertiesResponse {
    return {
        ...val,
        scopes: (val.scopes) ?? "",
    };
}

/**
 * The parameters to provide for the Direct Line channel.
 */
export interface DirectLineChannelPropertiesResponse {
    /**
     * Direct Line embed code of the resource
     */
    directLineEmbedCode?: string;
    /**
     * The extensionKey1
     */
    extensionKey1?: string;
    /**
     * The extensionKey2
     */
    extensionKey2?: string;
    /**
     * The list of Direct Line sites
     */
    sites?: DirectLineSiteResponse[];
}
/**
 * directLineChannelPropertiesResponseProvideDefaults sets the appropriate defaults for DirectLineChannelPropertiesResponse
 */
export function directLineChannelPropertiesResponseProvideDefaults(val: DirectLineChannelPropertiesResponse): DirectLineChannelPropertiesResponse {
    return {
        ...val,
        extensionKey1: (val.extensionKey1) ?? "",
        extensionKey2: (val.extensionKey2) ?? "",
    };
}

/**
 * Direct Line channel definition
 */
export interface DirectLineChannelResponse {
    /**
     * The channel name
     * Expected value is 'DirectLineChannel'.
     */
    channelName: "DirectLineChannel";
    /**
     * Entity Tag of the resource
     */
    etag?: string;
    /**
     * Specifies the location of the resource.
     */
    location?: string;
    /**
     * The set of properties specific to Direct Line channel resource
     */
    properties?: DirectLineChannelPropertiesResponse;
    /**
     * Provisioning state of the resource
     */
    provisioningState: string;
}
/**
 * directLineChannelResponseProvideDefaults sets the appropriate defaults for DirectLineChannelResponse
 */
export function directLineChannelResponseProvideDefaults(val: DirectLineChannelResponse): DirectLineChannelResponse {
    return {
        ...val,
        location: (val.location) ?? "global",
        properties: (val.properties ? directLineChannelPropertiesResponseProvideDefaults(val.properties) : undefined),
    };
}

/**
 * A site for the Direct Line channel
 */
export interface DirectLineSiteResponse {
    /**
     * DirectLine application id
     */
    appId?: string;
    /**
     * Entity Tag
     */
    eTag?: string;
    /**
     * Whether this site is enabled for block user upload.
     */
    isBlockUserUploadEnabled?: boolean;
    /**
     * Whether this site is disabled detailed logging for
     */
    isDetailedLoggingEnabled?: boolean;
    /**
     * Whether this site is enabled for DirectLine channel
     */
    isEnabled: boolean;
    /**
     * Whether this site is EndpointParameters enabled for channel
     */
    isEndpointParametersEnabled?: boolean;
    /**
     * Whether this no-storage site is disabled detailed logging for
     */
    isNoStorageEnabled?: boolean;
    /**
     * Whether this site is enabled for authentication with Bot Framework.
     */
    isSecureSiteEnabled?: boolean;
    /**
     * Whether this site is token enabled for channel
     */
    isTokenEnabled: boolean;
    /**
     * Whether this site is enabled for Bot Framework V1 protocol.
     */
    isV1Enabled?: boolean;
    /**
     * Whether this site is enabled for Bot Framework V3 protocol.
     */
    isV3Enabled?: boolean;
    /**
     * Whether this site is enabled for Webchat Speech
     */
    isWebChatSpeechEnabled?: boolean;
    /**
     * Whether this site is enabled for preview versions of Webchat
     */
    isWebchatPreviewEnabled?: boolean;
    /**
     * Primary key. Value only returned through POST to the action Channel List API, otherwise empty.
     */
    key: string;
    /**
     * Secondary key. Value only returned through POST to the action Channel List API, otherwise empty.
     */
    key2: string;
    /**
     * Site Id
     */
    siteId: string;
    /**
     * Site name
     */
    siteName: string;
    /**
     * Tenant Id
     */
    tenantId?: string;
    /**
     * List of Trusted Origin URLs for this site. This field is applicable only if isSecureSiteEnabled is True.
     */
    trustedOrigins?: string[];
}
/**
 * directLineSiteResponseProvideDefaults sets the appropriate defaults for DirectLineSiteResponse
 */
export function directLineSiteResponseProvideDefaults(val: DirectLineSiteResponse): DirectLineSiteResponse {
    return {
        ...val,
        isWebChatSpeechEnabled: (val.isWebChatSpeechEnabled) ?? false,
        isWebchatPreviewEnabled: (val.isWebchatPreviewEnabled) ?? false,
    };
}

/**
 * The parameters to provide for the DirectLine Speech channel.
 */
export interface DirectLineSpeechChannelPropertiesResponse {
    /**
     * The cognitive service region with this channel registration.
     */
    cognitiveServiceRegion?: string;
    /**
     * The cognitive service id with this channel registration.
     */
    cognitiveServiceResourceId?: string;
    /**
     * The cognitive service subscription key to use with this channel registration.
     */
    cognitiveServiceSubscriptionKey?: string;
    /**
     * Custom voice deployment id (optional).
     */
    customSpeechModelId?: string;
    /**
     * Custom speech model id (optional).
     */
    customVoiceDeploymentId?: string;
    /**
     * Make this a default bot for chosen cognitive service account.
     */
    isDefaultBotForCogSvcAccount?: boolean;
    /**
     * Whether this channel is enabled or not.
     */
    isEnabled?: boolean;
}

/**
 * DirectLine Speech channel definition
 */
export interface DirectLineSpeechChannelResponse {
    /**
     * The channel name
     * Expected value is 'DirectLineSpeechChannel'.
     */
    channelName: "DirectLineSpeechChannel";
    /**
     * Entity Tag of the resource
     */
    etag?: string;
    /**
     * Specifies the location of the resource.
     */
    location?: string;
    /**
     * The set of properties specific to DirectLine Speech channel resource
     */
    properties?: DirectLineSpeechChannelPropertiesResponse;
    /**
     * Provisioning state of the resource
     */
    provisioningState: string;
}
/**
 * directLineSpeechChannelResponseProvideDefaults sets the appropriate defaults for DirectLineSpeechChannelResponse
 */
export function directLineSpeechChannelResponseProvideDefaults(val: DirectLineSpeechChannelResponse): DirectLineSpeechChannelResponse {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * The parameters to provide for the Email channel.
 */
export interface EmailChannelPropertiesResponse {
    /**
     * Email channel auth method. 0 Password (Default); 1 Graph.
     */
    authMethod?: number;
    /**
     * The email address
     */
    emailAddress: string;
    /**
     * Whether this channel is enabled for the bot
     */
    isEnabled: boolean;
    /**
     * The magic code for setting up the modern authentication.
     */
    magicCode?: string;
    /**
     * The password for the email address. Value only returned through POST to the action Channel List API, otherwise empty.
     */
    password?: string;
}

/**
 * Email channel definition
 */
export interface EmailChannelResponse {
    /**
     * The channel name
     * Expected value is 'EmailChannel'.
     */
    channelName: "EmailChannel";
    /**
     * Entity Tag of the resource
     */
    etag?: string;
    /**
     * Specifies the location of the resource.
     */
    location?: string;
    /**
     * The set of properties specific to email channel resource
     */
    properties?: EmailChannelPropertiesResponse;
    /**
     * Provisioning state of the resource
     */
    provisioningState: string;
}
/**
 * emailChannelResponseProvideDefaults sets the appropriate defaults for EmailChannelResponse
 */
export function emailChannelResponseProvideDefaults(val: EmailChannelResponse): EmailChannelResponse {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * The parameters to provide for the Facebook channel.
 */
export interface FacebookChannelPropertiesResponse {
    /**
     * Facebook application id
     */
    appId: string;
    /**
     * Facebook application secret. Value only returned through POST to the action Channel List API, otherwise empty.
     */
    appSecret?: string;
    /**
     * Callback Url
     */
    callbackUrl: string;
    /**
     * Whether this channel is enabled for the bot
     */
    isEnabled: boolean;
    /**
     * The list of Facebook pages
     */
    pages?: FacebookPageResponse[];
    /**
     * Verify token. Value only returned through POST to the action Channel List API, otherwise empty.
     */
    verifyToken: string;
}

/**
 * Facebook channel definition
 */
export interface FacebookChannelResponse {
    /**
     * The channel name
     * Expected value is 'FacebookChannel'.
     */
    channelName: "FacebookChannel";
    /**
     * Entity Tag of the resource
     */
    etag?: string;
    /**
     * Specifies the location of the resource.
     */
    location?: string;
    /**
     * The set of properties specific to bot facebook channel
     */
    properties?: FacebookChannelPropertiesResponse;
    /**
     * Provisioning state of the resource
     */
    provisioningState: string;
}
/**
 * facebookChannelResponseProvideDefaults sets the appropriate defaults for FacebookChannelResponse
 */
export function facebookChannelResponseProvideDefaults(val: FacebookChannelResponse): FacebookChannelResponse {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * A Facebook page for Facebook channel registration
 */
export interface FacebookPageResponse {
    /**
     * Facebook application access token. Value only returned through POST to the action Channel List API, otherwise empty.
     */
    accessToken?: string;
    /**
     * Page id
     */
    id: string;
}

/**
 * The parameters to provide for the Kik channel.
 */
export interface KikChannelPropertiesResponse {
    /**
     * Kik API key. Value only returned through POST to the action Channel List API, otherwise empty.
     */
    apiKey?: string;
    /**
     * Whether this channel is enabled for the bot
     */
    isEnabled: boolean;
    /**
     * Whether this channel is validated for the bot
     */
    isValidated?: boolean;
    /**
     * The Kik user name
     */
    userName: string;
}

/**
 * Kik channel definition
 */
export interface KikChannelResponse {
    /**
     * The channel name
     * Expected value is 'KikChannel'.
     */
    channelName: "KikChannel";
    /**
     * Entity Tag of the resource
     */
    etag?: string;
    /**
     * Specifies the location of the resource.
     */
    location?: string;
    /**
     * The set of properties specific to Kik channel resource
     */
    properties?: KikChannelPropertiesResponse;
    /**
     * Provisioning state of the resource
     */
    provisioningState: string;
}
/**
 * kikChannelResponseProvideDefaults sets the appropriate defaults for KikChannelResponse
 */
export function kikChannelResponseProvideDefaults(val: KikChannelResponse): KikChannelResponse {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * The parameters to provide for the Line channel.
 */
export interface LineChannelPropertiesResponse {
    /**
     * Callback Url to enter in line registration.
     */
    callbackUrl: string;
    /**
     * Whether this channel is validated for the bot
     */
    isValidated: boolean;
    /**
     * The list of line channel registrations
     */
    lineRegistrations: LineRegistrationResponse[];
}

/**
 * Line channel definition
 */
export interface LineChannelResponse {
    /**
     * The channel name
     * Expected value is 'LineChannel'.
     */
    channelName: "LineChannel";
    /**
     * Entity Tag of the resource
     */
    etag?: string;
    /**
     * Specifies the location of the resource.
     */
    location?: string;
    /**
     * The set of properties specific to line channel resource
     */
    properties?: LineChannelPropertiesResponse;
    /**
     * Provisioning state of the resource
     */
    provisioningState: string;
}
/**
 * lineChannelResponseProvideDefaults sets the appropriate defaults for LineChannelResponse
 */
export function lineChannelResponseProvideDefaults(val: LineChannelResponse): LineChannelResponse {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * The properties corresponding to a line channel registration
 */
export interface LineRegistrationResponse {
    /**
     * Access token for the line channel registration
     */
    channelAccessToken?: string;
    /**
     * Secret for the line channel registration
     */
    channelSecret?: string;
    /**
     * Id generated for the line channel registration
     */
    generatedId: string;
}

/**
 * M365 Extensions definition
 */
export interface M365ExtensionsResponse {
    /**
     * The channel name
     * Expected value is 'M365Extensions'.
     */
    channelName: "M365Extensions";
    /**
     * Entity Tag of the resource
     */
    etag?: string;
    /**
     * Specifies the location of the resource.
     */
    location?: string;
    /**
     * Provisioning state of the resource
     */
    provisioningState: string;
}
/**
 * m365extensionsResponseProvideDefaults sets the appropriate defaults for M365ExtensionsResponse
 */
export function m365extensionsResponseProvideDefaults(val: M365ExtensionsResponse): M365ExtensionsResponse {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * The parameters to provide for the Microsoft Teams channel.
 */
export interface MsTeamsChannelPropertiesResponse {
    /**
     * Whether this channel accepted terms
     */
    acceptedTerms?: boolean;
    /**
     * Webhook for Microsoft Teams channel calls
     */
    callingWebhook?: string;
    /**
     * Deployment environment for Microsoft Teams channel calls
     */
    deploymentEnvironment?: string;
    /**
     * Enable calling for Microsoft Teams channel
     */
    enableCalling?: boolean;
    /**
     * Webhook for Microsoft Teams channel calls
     */
    incomingCallRoute?: string;
    /**
     * Whether this channel is enabled for the bot
     */
    isEnabled: boolean;
}
/**
 * msTeamsChannelPropertiesResponseProvideDefaults sets the appropriate defaults for MsTeamsChannelPropertiesResponse
 */
export function msTeamsChannelPropertiesResponseProvideDefaults(val: MsTeamsChannelPropertiesResponse): MsTeamsChannelPropertiesResponse {
    return {
        ...val,
        deploymentEnvironment: (val.deploymentEnvironment) ?? "CommercialDeployment",
        enableCalling: (val.enableCalling) ?? false,
    };
}

/**
 * Microsoft Teams channel definition
 */
export interface MsTeamsChannelResponse {
    /**
     * The channel name
     * Expected value is 'MsTeamsChannel'.
     */
    channelName: "MsTeamsChannel";
    /**
     * Entity Tag of the resource
     */
    etag?: string;
    /**
     * Specifies the location of the resource.
     */
    location?: string;
    /**
     * The set of properties specific to Microsoft Teams channel resource
     */
    properties?: MsTeamsChannelPropertiesResponse;
    /**
     * Provisioning state of the resource
     */
    provisioningState: string;
}
/**
 * msTeamsChannelResponseProvideDefaults sets the appropriate defaults for MsTeamsChannelResponse
 */
export function msTeamsChannelResponseProvideDefaults(val: MsTeamsChannelResponse): MsTeamsChannelResponse {
    return {
        ...val,
        location: (val.location) ?? "global",
        properties: (val.properties ? msTeamsChannelPropertiesResponseProvideDefaults(val.properties) : undefined),
    };
}

/**
 * Properties of Network Security Perimeter configuration
 */
export interface NetworkSecurityPerimeterConfigurationPropertiesResponse {
    /**
     * Information about Network Security Perimeter
     */
    networkSecurityPerimeter: NetworkSecurityPerimeterResponse;
    /**
     * Information about profile
     */
    profile: ProfileResponse;
    /**
     * List of Provisioning Issues if any
     */
    provisioningIssues?: ProvisioningIssueResponse[];
    provisioningState?: string;
    /**
     * Information about resource association
     */
    resourceAssociation: ResourceAssociationResponse;
}
/**
 * networkSecurityPerimeterConfigurationPropertiesResponseProvideDefaults sets the appropriate defaults for NetworkSecurityPerimeterConfigurationPropertiesResponse
 */
export function networkSecurityPerimeterConfigurationPropertiesResponseProvideDefaults(val: NetworkSecurityPerimeterConfigurationPropertiesResponse): NetworkSecurityPerimeterConfigurationPropertiesResponse {
    return {
        ...val,
        provisioningState: (val.provisioningState) ?? "Succeeded",
    };
}

/**
 * Network Security Perimeter configuration
 */
export interface NetworkSecurityPerimeterConfigurationResponse {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * Properties of the Network Security Perimeter configuration
     */
    properties?: NetworkSecurityPerimeterConfigurationPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    systemData: SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}
/**
 * networkSecurityPerimeterConfigurationResponseProvideDefaults sets the appropriate defaults for NetworkSecurityPerimeterConfigurationResponse
 */
export function networkSecurityPerimeterConfigurationResponseProvideDefaults(val: NetworkSecurityPerimeterConfigurationResponse): NetworkSecurityPerimeterConfigurationResponse {
    return {
        ...val,
        properties: (val.properties ? networkSecurityPerimeterConfigurationPropertiesResponseProvideDefaults(val.properties) : undefined),
    };
}

/**
 * Information about Network Security Perimeter
 */
export interface NetworkSecurityPerimeterResponse {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    id: string;
    /**
     * Location of the Network Security Perimeter
     */
    location?: string;
    /**
     * Guid of the Network Security Perimeter
     */
    perimeterGuid?: string;
}

/**
 * Properties of Access Rule
 */
export interface NspAccessRulePropertiesResponse {
    /**
     * Address prefixes in the CIDR format for inbound rules
     */
    addressPrefixes?: string[];
    /**
     * Direction of Access Rule
     */
    direction?: string;
    /**
     * Email addresses for outbound rules
     */
    emailAddresses: string[];
    /**
     * FQDN for outbound rules
     */
    fullyQualifiedDomainNames: string[];
    /**
     * NetworkSecurityPerimeters for inbound rules
     */
    networkSecurityPerimeters: NetworkSecurityPerimeterResponse[];
    /**
     * Phone numbers for outbound rules
     */
    phoneNumbers: string[];
    /**
     * Subscriptions for inbound rules
     */
    subscriptions?: NspAccessRulePropertiesSubscriptionsItemResponse[];
}

/**
 * Subscription for inbound rule
 */
export interface NspAccessRulePropertiesSubscriptionsItemResponse {
    /**
     * Fully qualified identifier of subscription
     */
    id?: string;
}

/**
 * Information of Access Rule in a profile
 */
export interface NspAccessRuleResponse {
    /**
     * Name of the access rule
     */
    name?: string;
    /**
     * Properties of Access Rule
     */
    properties: NspAccessRulePropertiesResponse;
}

/**
 * Omnichannel channel definition
 */
export interface OmnichannelResponse {
    /**
     * The channel name
     * Expected value is 'Omnichannel'.
     */
    channelName: "Omnichannel";
    /**
     * Entity Tag of the resource
     */
    etag?: string;
    /**
     * Specifies the location of the resource.
     */
    location?: string;
    /**
     * Provisioning state of the resource
     */
    provisioningState: string;
}
/**
 * omnichannelResponseProvideDefaults sets the appropriate defaults for OmnichannelResponse
 */
export function omnichannelResponseProvideDefaults(val: OmnichannelResponse): OmnichannelResponse {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * Outlook channel definition
 */
export interface OutlookChannelResponse {
    /**
     * The channel name
     * Expected value is 'OutlookChannel'.
     */
    channelName: "OutlookChannel";
    /**
     * Entity Tag of the resource
     */
    etag?: string;
    /**
     * Specifies the location of the resource.
     */
    location?: string;
    /**
     * Provisioning state of the resource
     */
    provisioningState: string;
}
/**
 * outlookChannelResponseProvideDefaults sets the appropriate defaults for OutlookChannelResponse
 */
export function outlookChannelResponseProvideDefaults(val: OutlookChannelResponse): OutlookChannelResponse {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * The Private Endpoint Connection resource.
 */
export interface PrivateEndpointConnectionResponse {
    /**
     * Group ids
     */
    groupIds?: string[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * The resource of private end point.
     */
    privateEndpoint?: PrivateEndpointResponse;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateResponse;
    /**
     * The provisioning state of the private endpoint connection resource.
     */
    provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    systemData: SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}

/**
 * The Private Endpoint resource.
 */
export interface PrivateEndpointResponse {
    /**
     * The ARM identifier for Private Endpoint
     */
    id: string;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateResponse {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: string;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: string;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: string;
}

/**
 * Information about profile
 */
export interface ProfileResponse {
    /**
     * List of Access Rules
     */
    accessRules?: NspAccessRuleResponse[];
    /**
     * Current access rules version
     */
    accessRulesVersion?: number;
    /**
     * Current diagnostic settings version
     */
    diagnosticSettingsVersion?: number;
    /**
     * List of log categories
     */
    enabledLogCategories: string[];
    /**
     * Name of the profile
     */
    name?: string;
}

/**
 * Properties of Provisioning Issue
 */
export interface ProvisioningIssuePropertiesResponse {
    /**
     * Description of the issue
     */
    description?: string;
    /**
     * Type of Issue
     */
    issueType?: string;
    /**
     * Provisioning state of Network Security Perimeter configuration propagation
     */
    severity?: string;
    /**
     * Access rules that can be added to the same profile to remediate the issue.
     */
    suggestedAccessRules?: NspAccessRuleResponse[];
    /**
     * ARM IDs of resources that can be associated to the same perimeter to remediate the issue.
     */
    suggestedResourceIds: string[];
}

/**
 * Describes Provisioning issue for given Network Security Perimeter configuration
 */
export interface ProvisioningIssueResponse {
    /**
     * Name of the issue
     */
    name?: string;
    /**
     * Properties of Provisioning Issue
     */
    properties: ProvisioningIssuePropertiesResponse;
}

/**
 * Information about resource association
 */
export interface ResourceAssociationResponse {
    /**
     * Access Mode of the resource association
     */
    accessMode?: string;
    /**
     * Name of the resource association
     */
    name?: string;
}

/**
 * SearchAssistant definition
 */
export interface SearchAssistantResponse {
    /**
     * The channel name
     * Expected value is 'SearchAssistant'.
     */
    channelName: "SearchAssistant";
    /**
     * Entity Tag of the resource
     */
    etag?: string;
    /**
     * Specifies the location of the resource.
     */
    location?: string;
    /**
     * Provisioning state of the resource
     */
    provisioningState: string;
}
/**
 * searchAssistantResponseProvideDefaults sets the appropriate defaults for SearchAssistantResponse
 */
export function searchAssistantResponseProvideDefaults(val: SearchAssistantResponse): SearchAssistantResponse {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * the constraints of the bot meta data.
 */
export interface ServiceProviderParameterMetadataConstraintsResponse {
    /**
     * Whether required the constraints of the bot meta data.
     */
    required?: boolean;
}

/**
 * Meta data for the Service Provider
 */
export interface ServiceProviderParameterMetadataResponse {
    /**
     * the constraints of the bot meta data.
     */
    constraints?: ServiceProviderParameterMetadataConstraintsResponse;
}

/**
 * Extra Parameters specific to each Service Provider
 */
export interface ServiceProviderParameterResponse {
    /**
     * Default Name for the Service Provider
     */
    default: string;
    /**
     * Description of the Service Provider
     */
    description: string;
    /**
     * Display Name of the Service Provider
     */
    displayName: string;
    /**
     * Help Url for the  Service Provider
     */
    helpUrl: string;
    /**
     * Meta data for the Service Provider
     */
    metadata: ServiceProviderParameterMetadataResponse;
    /**
     * Name of the Service Provider
     */
    name: string;
    /**
     * Type of the Service Provider
     */
    type: string;
}

/**
 * The Object used to describe a Service Provider supported by Bot Service
 */
export interface ServiceProviderPropertiesResponse {
    /**
     * URL of Dev Portal
     */
    devPortalUrl: string;
    /**
     * Display Name of the Service Provider
     */
    displayName: string;
    /**
     * The URL of icon
     */
    iconUrl?: string;
    /**
     * Id for Service Provider
     */
    id: string;
    /**
     * The list of parameters for the Service Provider
     */
    parameters?: ServiceProviderParameterResponse[];
    /**
     * Name of the Service Provider
     */
    serviceProviderName: string;
}
/**
 * serviceProviderPropertiesResponseProvideDefaults sets the appropriate defaults for ServiceProviderPropertiesResponse
 */
export function serviceProviderPropertiesResponseProvideDefaults(val: ServiceProviderPropertiesResponse): ServiceProviderPropertiesResponse {
    return {
        ...val,
        iconUrl: (val.iconUrl) ?? "",
    };
}

/**
 * Service Provider Definition
 */
export interface ServiceProviderResponse {
    /**
     * The Properties of a Service Provider Object
     */
    properties?: ServiceProviderPropertiesResponse;
}
/**
 * serviceProviderResponseProvideDefaults sets the appropriate defaults for ServiceProviderResponse
 */
export function serviceProviderResponseProvideDefaults(val: ServiceProviderResponse): ServiceProviderResponse {
    return {
        ...val,
        properties: (val.properties ? serviceProviderPropertiesResponseProvideDefaults(val.properties) : undefined),
    };
}

/**
 * A site for the channel
 */
export interface SiteResponse {
    /**
     * DirectLine application id
     */
    appId?: string;
    /**
     * Entity Tag
     */
    eTag?: string;
    /**
     * Whether this site is enabled for block user upload.
     */
    isBlockUserUploadEnabled?: boolean;
    /**
     * Whether this site is disabled detailed logging for
     */
    isDetailedLoggingEnabled?: boolean;
    /**
     * Whether this site is enabled for DirectLine channel
     */
    isEnabled: boolean;
    /**
     * Whether this site is EndpointParameters enabled for channel
     */
    isEndpointParametersEnabled?: boolean;
    /**
     * Whether this no-storage site is disabled detailed logging for
     */
    isNoStorageEnabled?: boolean;
    /**
     * Whether this site is enabled for authentication with Bot Framework.
     */
    isSecureSiteEnabled?: boolean;
    /**
     * Whether this site is token enabled for channel
     */
    isTokenEnabled: boolean;
    /**
     * Whether this site is enabled for Bot Framework V1 protocol.
     */
    isV1Enabled?: boolean;
    /**
     * Whether this site is enabled for Bot Framework V3 protocol.
     */
    isV3Enabled?: boolean;
    /**
     * Whether this site is enabled for Webchat Speech
     */
    isWebChatSpeechEnabled?: boolean;
    /**
     * Whether this site is enabled for preview versions of Webchat
     */
    isWebchatPreviewEnabled?: boolean;
    /**
     * Primary key. Value only returned through POST to the action Channel List API, otherwise empty.
     */
    key: string;
    /**
     * Secondary key. Value only returned through POST to the action Channel List API, otherwise empty.
     */
    key2: string;
    /**
     * Site Id
     */
    siteId: string;
    /**
     * Site name
     */
    siteName: string;
    /**
     * Tenant Id
     */
    tenantId?: string;
    /**
     * List of Trusted Origin URLs for this site. This field is applicable only if isSecureSiteEnabled is True.
     */
    trustedOrigins?: string[];
}
/**
 * siteResponseProvideDefaults sets the appropriate defaults for SiteResponse
 */
export function siteResponseProvideDefaults(val: SiteResponse): SiteResponse {
    return {
        ...val,
        isWebChatSpeechEnabled: (val.isWebChatSpeechEnabled) ?? false,
        isWebchatPreviewEnabled: (val.isWebchatPreviewEnabled) ?? false,
    };
}

/**
 * The SKU of the cognitive services account.
 */
export interface SkuResponse {
    /**
     * The sku name
     */
    name: string;
    /**
     * Gets the sku tier. This is based on the SKU name.
     */
    tier: string;
}

/**
 * The parameters to provide for the Microsoft Teams channel.
 */
export interface SkypeChannelPropertiesResponse {
    /**
     * Calling web hook for Skype channel
     */
    callingWebHook?: string;
    /**
     * Enable calling for Skype channel
     */
    enableCalling?: boolean;
    /**
     * Enable groups for Skype channel
     */
    enableGroups?: boolean;
    /**
     * Enable media cards for Skype channel
     */
    enableMediaCards?: boolean;
    /**
     * Enable messaging for Skype channel
     */
    enableMessaging?: boolean;
    /**
     * Enable screen sharing for Skype channel
     */
    enableScreenSharing?: boolean;
    /**
     * Enable video for Skype channel
     */
    enableVideo?: boolean;
    /**
     * Group mode for Skype channel
     */
    groupsMode?: string;
    /**
     * Incoming call route for Skype channel
     */
    incomingCallRoute?: string;
    /**
     * Whether this channel is enabled for the bot
     */
    isEnabled: boolean;
}
/**
 * skypeChannelPropertiesResponseProvideDefaults sets the appropriate defaults for SkypeChannelPropertiesResponse
 */
export function skypeChannelPropertiesResponseProvideDefaults(val: SkypeChannelPropertiesResponse): SkypeChannelPropertiesResponse {
    return {
        ...val,
        enableCalling: (val.enableCalling) ?? false,
    };
}

/**
 * Skype channel definition
 */
export interface SkypeChannelResponse {
    /**
     * The channel name
     * Expected value is 'SkypeChannel'.
     */
    channelName: "SkypeChannel";
    /**
     * Entity Tag of the resource
     */
    etag?: string;
    /**
     * Specifies the location of the resource.
     */
    location?: string;
    /**
     * The set of properties specific to Skype channel resource
     */
    properties?: SkypeChannelPropertiesResponse;
    /**
     * Provisioning state of the resource
     */
    provisioningState: string;
}
/**
 * skypeChannelResponseProvideDefaults sets the appropriate defaults for SkypeChannelResponse
 */
export function skypeChannelResponseProvideDefaults(val: SkypeChannelResponse): SkypeChannelResponse {
    return {
        ...val,
        location: (val.location) ?? "global",
        properties: (val.properties ? skypeChannelPropertiesResponseProvideDefaults(val.properties) : undefined),
    };
}

/**
 * The parameters to provide for the Slack channel.
 */
export interface SlackChannelPropertiesResponse {
    /**
     * The Slack client id
     */
    clientId?: string;
    /**
     * The Slack client secret. Value only returned through POST to the action Channel List API, otherwise empty.
     */
    clientSecret?: string;
    /**
     * Whether this channel is enabled for the bot
     */
    isEnabled: boolean;
    /**
     * Whether this channel is validated for the bot
     */
    isValidated: boolean;
    /**
     * The Slack landing page Url
     */
    landingPageUrl?: string;
    /**
     * The Sms auth token
     */
    lastSubmissionId: string;
    /**
     * The Slack redirect action
     */
    redirectAction: string;
    /**
     * Whether to register the settings before OAuth validation is performed. Recommended to True.
     */
    registerBeforeOAuthFlow?: boolean;
    /**
     * The Slack permission scopes.
     */
    scopes?: string;
    /**
     * The Slack signing secret.
     */
    signingSecret?: string;
    /**
     * The Slack verification token. Value only returned through POST to the action Channel List API, otherwise empty.
     */
    verificationToken?: string;
}

/**
 * Slack channel definition
 */
export interface SlackChannelResponse {
    /**
     * The channel name
     * Expected value is 'SlackChannel'.
     */
    channelName: "SlackChannel";
    /**
     * Entity Tag of the resource
     */
    etag?: string;
    /**
     * Specifies the location of the resource.
     */
    location?: string;
    /**
     * The set of properties specific to Slack channel resource
     */
    properties?: SlackChannelPropertiesResponse;
    /**
     * Provisioning state of the resource
     */
    provisioningState: string;
}
/**
 * slackChannelResponseProvideDefaults sets the appropriate defaults for SlackChannelResponse
 */
export function slackChannelResponseProvideDefaults(val: SlackChannelResponse): SlackChannelResponse {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * The parameters to provide for the Sms channel.
 */
export interface SmsChannelPropertiesResponse {
    /**
     * The Sms account SID. Value only returned through POST to the action Channel List API, otherwise empty.
     */
    accountSID: string;
    /**
     * The Sms auth token. Value only returned through POST to the action Channel List API, otherwise empty.
     */
    authToken?: string;
    /**
     * Whether this channel is enabled for the bot
     */
    isEnabled: boolean;
    /**
     * Whether this channel is validated for the bot
     */
    isValidated?: boolean;
    /**
     * The Sms phone
     */
    phone: string;
}

/**
 * Sms channel definition
 */
export interface SmsChannelResponse {
    /**
     * The channel name
     * Expected value is 'SmsChannel'.
     */
    channelName: "SmsChannel";
    /**
     * Entity Tag of the resource
     */
    etag?: string;
    /**
     * Specifies the location of the resource.
     */
    location?: string;
    /**
     * The set of properties specific to Sms channel resource
     */
    properties?: SmsChannelPropertiesResponse;
    /**
     * Provisioning state of the resource
     */
    provisioningState: string;
}
/**
 * smsChannelResponseProvideDefaults sets the appropriate defaults for SmsChannelResponse
 */
export function smsChannelResponseProvideDefaults(val: SmsChannelResponse): SmsChannelResponse {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
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

/**
 * The parameters to provide for the Telegram channel.
 */
export interface TelegramChannelPropertiesResponse {
    /**
     * The Telegram access token. Value only returned through POST to the action Channel List API, otherwise empty.
     */
    accessToken?: string;
    /**
     * Whether this channel is enabled for the bot
     */
    isEnabled: boolean;
    /**
     * Whether this channel is validated for the bot
     */
    isValidated?: boolean;
}

/**
 * Telegram channel definition
 */
export interface TelegramChannelResponse {
    /**
     * The channel name
     * Expected value is 'TelegramChannel'.
     */
    channelName: "TelegramChannel";
    /**
     * Entity Tag of the resource
     */
    etag?: string;
    /**
     * Specifies the location of the resource.
     */
    location?: string;
    /**
     * The set of properties specific to Telegram channel resource
     */
    properties?: TelegramChannelPropertiesResponse;
    /**
     * Provisioning state of the resource
     */
    provisioningState: string;
}
/**
 * telegramChannelResponseProvideDefaults sets the appropriate defaults for TelegramChannelResponse
 */
export function telegramChannelResponseProvideDefaults(val: TelegramChannelResponse): TelegramChannelResponse {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * The parameters to provide for the Direct Line channel.
 */
export interface TelephonyChannelPropertiesResponse {
    /**
     * The list of Telephony api configuration
     */
    apiConfigurations?: TelephonyChannelResourceApiConfigurationResponse[];
    /**
     * The extensionKey2
     */
    cognitiveServiceRegion?: string;
    /**
     * The extensionKey1
     */
    cognitiveServiceSubscriptionKey?: string;
    /**
     * The default locale of the channel
     */
    defaultLocale?: string;
    /**
     * Whether the channel is enabled
     */
    isEnabled?: boolean;
    /**
     * The list of Telephony phone numbers
     */
    phoneNumbers?: TelephonyPhoneNumbersResponse[];
    /**
     * The premium SKU applied to the channel
     */
    premiumSKU?: string;
}

/**
 * A resource Api configuration for the Telephony channel
 */
export interface TelephonyChannelResourceApiConfigurationResponse {
    /**
     * The cognitive service region.
     */
    cognitiveServiceRegion?: string;
    /**
     * The cognitive service resourceId.
     */
    cognitiveServiceResourceId?: string;
    /**
     * The cognitive service subscription key.
     */
    cognitiveServiceSubscriptionKey?: string;
    /**
     * The default locale.
     */
    defaultLocale?: string;
    /**
     * The id of config.
     */
    id?: string;
    /**
     * The provider name.
     */
    providerName?: string;
}

/**
 * Telephony channel definition
 */
export interface TelephonyChannelResponse {
    /**
     * The channel name
     * Expected value is 'TelephonyChannel'.
     */
    channelName: "TelephonyChannel";
    /**
     * Entity Tag of the resource
     */
    etag?: string;
    /**
     * Specifies the location of the resource.
     */
    location?: string;
    /**
     * The set of properties specific to Telephony channel resource
     */
    properties?: TelephonyChannelPropertiesResponse;
    /**
     * Provisioning state of the resource
     */
    provisioningState: string;
}
/**
 * telephonyChannelResponseProvideDefaults sets the appropriate defaults for TelephonyChannelResponse
 */
export function telephonyChannelResponseProvideDefaults(val: TelephonyChannelResponse): TelephonyChannelResponse {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * A telephone number for the Telephony channel
 */
export interface TelephonyPhoneNumbersResponse {
    /**
     * The endpoint of ACS.
     */
    acsEndpoint?: string;
    /**
     * The resource id of ACS.
     */
    acsResourceId?: string;
    /**
     * The secret of ACS.
     */
    acsSecret?: string;
    /**
     * The service region of cognitive service.
     */
    cognitiveServiceRegion?: string;
    /**
     * The resource id of cognitive service.
     */
    cognitiveServiceResourceId?: string;
    /**
     * The subscription key of cognitive service.
     */
    cognitiveServiceSubscriptionKey?: string;
    /**
     * The default locale of the phone number.
     */
    defaultLocale?: string;
    /**
     * The element id.
     */
    id?: string;
    /**
     * Optional Property that will determine the offering type of the phone.
     */
    offerType?: string;
    /**
     * The phone number.
     */
    phoneNumber?: string;
}

/**
 * The parameters to provide for the Web Chat channel.
 */
export interface WebChatChannelPropertiesResponse {
    /**
     * The list of Web Chat sites
     */
    sites?: WebChatSiteResponse[];
    /**
     * Web chat control embed code
     */
    webChatEmbedCode: string;
}

/**
 * Web Chat channel definition
 */
export interface WebChatChannelResponse {
    /**
     * The channel name
     * Expected value is 'WebChatChannel'.
     */
    channelName: "WebChatChannel";
    /**
     * Entity Tag of the resource
     */
    etag?: string;
    /**
     * Specifies the location of the resource.
     */
    location?: string;
    /**
     * The set of properties specific to Web Chat channel resource
     */
    properties?: WebChatChannelPropertiesResponse;
    /**
     * Provisioning state of the resource
     */
    provisioningState: string;
}
/**
 * webChatChannelResponseProvideDefaults sets the appropriate defaults for WebChatChannelResponse
 */
export function webChatChannelResponseProvideDefaults(val: WebChatChannelResponse): WebChatChannelResponse {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * A site for the Webchat channel
 */
export interface WebChatSiteResponse {
    /**
     * DirectLine application id
     */
    appId?: string;
    /**
     * Entity Tag
     */
    eTag?: string;
    /**
     * Whether this site is enabled for block user upload.
     */
    isBlockUserUploadEnabled?: boolean;
    /**
     * Whether this site is disabled detailed logging for
     */
    isDetailedLoggingEnabled?: boolean;
    /**
     * Whether this site is enabled for DirectLine channel
     */
    isEnabled: boolean;
    /**
     * Whether this site is EndpointParameters enabled for channel
     */
    isEndpointParametersEnabled?: boolean;
    /**
     * Whether this no-storage site is disabled detailed logging for
     */
    isNoStorageEnabled?: boolean;
    /**
     * Whether this site is enabled for authentication with Bot Framework.
     */
    isSecureSiteEnabled?: boolean;
    /**
     * Whether this site is token enabled for channel
     */
    isTokenEnabled: boolean;
    /**
     * Whether this site is enabled for Bot Framework V1 protocol.
     */
    isV1Enabled?: boolean;
    /**
     * Whether this site is enabled for Bot Framework V3 protocol.
     */
    isV3Enabled?: boolean;
    /**
     * Whether this site is enabled for Webchat Speech
     */
    isWebChatSpeechEnabled?: boolean;
    /**
     * Whether this site is enabled for preview versions of Webchat
     */
    isWebchatPreviewEnabled?: boolean;
    /**
     * Primary key. Value only returned through POST to the action Channel List API, otherwise empty.
     */
    key: string;
    /**
     * Secondary key. Value only returned through POST to the action Channel List API, otherwise empty.
     */
    key2: string;
    /**
     * Site Id
     */
    siteId: string;
    /**
     * Site name
     */
    siteName: string;
    /**
     * Tenant Id
     */
    tenantId?: string;
    /**
     * List of Trusted Origin URLs for this site. This field is applicable only if isSecureSiteEnabled is True.
     */
    trustedOrigins?: string[];
}
/**
 * webChatSiteResponseProvideDefaults sets the appropriate defaults for WebChatSiteResponse
 */
export function webChatSiteResponseProvideDefaults(val: WebChatSiteResponse): WebChatSiteResponse {
    return {
        ...val,
        isWebChatSpeechEnabled: (val.isWebChatSpeechEnabled) ?? false,
        isWebchatPreviewEnabled: (val.isWebchatPreviewEnabled) ?? false,
    };
}
