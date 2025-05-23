import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * AcsChat channel definition
 */
export interface AcsChatChannelArgs {
    /**
     * The channel name
     * Expected value is 'AcsChatChannel'.
     */
    channelName: pulumi.Input<"AcsChatChannel">;
    /**
     * Entity Tag of the resource
     */
    etag?: pulumi.Input<string>;
    /**
     * Specifies the location of the resource.
     */
    location?: pulumi.Input<string>;
}
/**
 * acsChatChannelArgsProvideDefaults sets the appropriate defaults for AcsChatChannelArgs
 */
export function acsChatChannelArgsProvideDefaults(val: AcsChatChannelArgs): AcsChatChannelArgs {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * Alexa channel definition
 */
export interface AlexaChannelArgs {
    /**
     * The channel name
     * Expected value is 'AlexaChannel'.
     */
    channelName: pulumi.Input<"AlexaChannel">;
    /**
     * Entity Tag of the resource
     */
    etag?: pulumi.Input<string>;
    /**
     * Specifies the location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The set of properties specific to Alexa channel resource
     */
    properties?: pulumi.Input<AlexaChannelPropertiesArgs>;
}
/**
 * alexaChannelArgsProvideDefaults sets the appropriate defaults for AlexaChannelArgs
 */
export function alexaChannelArgsProvideDefaults(val: AlexaChannelArgs): AlexaChannelArgs {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * The parameters to provide for the Alexa channel.
 */
export interface AlexaChannelPropertiesArgs {
    /**
     * The Alexa skill Id
     */
    alexaSkillId: pulumi.Input<string>;
    /**
     * Whether this channel is enabled for the bot
     */
    isEnabled: pulumi.Input<boolean>;
}

/**
 * The parameters to provide for the Bot.
 */
export interface BotPropertiesArgs {
    /**
     * Contains resource all settings defined as key/value pairs.
     */
    allSettings?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The hint (e.g. keyVault secret resourceId) on how to fetch the app secret
     */
    appPasswordHint?: pulumi.Input<string>;
    /**
     * The CMK Url
     */
    cmekKeyVaultUrl?: pulumi.Input<string>;
    /**
     * The description of the bot
     */
    description?: pulumi.Input<string>;
    /**
     * The Application Insights key
     */
    developerAppInsightKey?: pulumi.Input<string>;
    /**
     * The Application Insights Api Key
     */
    developerAppInsightsApiKey?: pulumi.Input<string>;
    /**
     * The Application Insights App Id
     */
    developerAppInsightsApplicationId?: pulumi.Input<string>;
    /**
     * Opt-out of local authentication and ensure only MSI and AAD can be used exclusively for authentication.
     */
    disableLocalAuth?: pulumi.Input<boolean>;
    /**
     * The Name of the bot
     */
    displayName: pulumi.Input<string>;
    /**
     * The bot's endpoint
     */
    endpoint: pulumi.Input<string>;
    /**
     * The Icon Url of the bot
     */
    iconUrl?: pulumi.Input<string>;
    /**
     * Whether Cmek is enabled
     */
    isCmekEnabled?: pulumi.Input<boolean>;
    /**
     * Whether the bot is streaming supported
     */
    isStreamingSupported?: pulumi.Input<boolean>;
    /**
     * Collection of LUIS App Ids
     */
    luisAppIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The LUIS Key
     */
    luisKey?: pulumi.Input<string>;
    /**
     * The bot's manifest url
     */
    manifestUrl?: pulumi.Input<string>;
    /**
     * Microsoft App Id for the bot
     */
    msaAppId: pulumi.Input<string>;
    /**
     * Microsoft App Managed Identity Resource Id for the bot
     */
    msaAppMSIResourceId?: pulumi.Input<string>;
    /**
     * Microsoft App Tenant Id for the bot
     */
    msaAppTenantId?: pulumi.Input<string>;
    /**
     * Microsoft App Type for the bot
     */
    msaAppType?: pulumi.Input<string | enums.MsaAppType>;
    /**
     * The hint to browser (e.g. protocol handler) on how to open the bot for authoring
     */
    openWithHint?: pulumi.Input<string>;
    /**
     * Contains resource parameters defined as key/value pairs.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Whether the bot is in an isolated network
     */
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccess>;
    /**
     * Publishing credentials of the resource
     */
    publishingCredentials?: pulumi.Input<string>;
    /**
     * The channel schema transformation version for the bot
     */
    schemaTransformationVersion?: pulumi.Input<string>;
    /**
     * The storage resourceId for the bot
     */
    storageResourceId?: pulumi.Input<string>;
    /**
     * The Tenant Id for the bot
     */
    tenantId?: pulumi.Input<string>;
}
/**
 * botPropertiesArgsProvideDefaults sets the appropriate defaults for BotPropertiesArgs
 */
export function botPropertiesArgsProvideDefaults(val: BotPropertiesArgs): BotPropertiesArgs {
    return {
        ...val,
        iconUrl: (val.iconUrl) ?? "",
        isCmekEnabled: (val.isCmekEnabled) ?? false,
        isStreamingSupported: (val.isStreamingSupported) ?? false,
        publicNetworkAccess: (val.publicNetworkAccess) ?? "Enabled",
    };
}

/**
 * Extra Parameter in a Connection Setting Properties to indicate service provider specific properties
 */
export interface ConnectionSettingParameterArgs {
    /**
     * Key for the Connection Setting Parameter.
     */
    key?: pulumi.Input<string>;
    /**
     * Value associated with the Connection Setting Parameter.
     */
    value?: pulumi.Input<string>;
}

/**
 * Properties for a Connection Setting Item
 */
export interface ConnectionSettingPropertiesArgs {
    /**
     * Client Id associated with the Connection Setting.
     */
    clientId?: pulumi.Input<string>;
    /**
     * Client Secret associated with the Connection Setting
     */
    clientSecret?: pulumi.Input<string>;
    /**
     * Id of the Connection Setting.
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the Connection Setting.
     */
    name?: pulumi.Input<string>;
    /**
     * Service Provider Parameters associated with the Connection Setting
     */
    parameters?: pulumi.Input<pulumi.Input<ConnectionSettingParameterArgs>[]>;
    /**
     * Provisioning state of the resource
     */
    provisioningState?: pulumi.Input<string>;
    /**
     * Scopes associated with the Connection Setting
     */
    scopes?: pulumi.Input<string>;
    /**
     * Service Provider Display Name associated with the Connection Setting
     */
    serviceProviderDisplayName?: pulumi.Input<string>;
    /**
     * Service Provider Id associated with the Connection Setting
     */
    serviceProviderId?: pulumi.Input<string>;
}
/**
 * connectionSettingPropertiesArgsProvideDefaults sets the appropriate defaults for ConnectionSettingPropertiesArgs
 */
export function connectionSettingPropertiesArgsProvideDefaults(val: ConnectionSettingPropertiesArgs): ConnectionSettingPropertiesArgs {
    return {
        ...val,
        scopes: (val.scopes) ?? "",
    };
}

/**
 * Direct Line channel definition
 */
export interface DirectLineChannelArgs {
    /**
     * The channel name
     * Expected value is 'DirectLineChannel'.
     */
    channelName: pulumi.Input<"DirectLineChannel">;
    /**
     * Entity Tag of the resource
     */
    etag?: pulumi.Input<string>;
    /**
     * Specifies the location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The set of properties specific to Direct Line channel resource
     */
    properties?: pulumi.Input<DirectLineChannelPropertiesArgs>;
}
/**
 * directLineChannelArgsProvideDefaults sets the appropriate defaults for DirectLineChannelArgs
 */
export function directLineChannelArgsProvideDefaults(val: DirectLineChannelArgs): DirectLineChannelArgs {
    return {
        ...val,
        location: (val.location) ?? "global",
        properties: (val.properties ? pulumi.output(val.properties).apply(directLineChannelPropertiesArgsProvideDefaults) : undefined),
    };
}

/**
 * The parameters to provide for the Direct Line channel.
 */
export interface DirectLineChannelPropertiesArgs {
    /**
     * Direct Line embed code of the resource
     */
    directLineEmbedCode?: pulumi.Input<string>;
    /**
     * The extensionKey1
     */
    extensionKey1?: pulumi.Input<string>;
    /**
     * The extensionKey2
     */
    extensionKey2?: pulumi.Input<string>;
    /**
     * The list of Direct Line sites
     */
    sites?: pulumi.Input<pulumi.Input<DirectLineSiteArgs>[]>;
}
/**
 * directLineChannelPropertiesArgsProvideDefaults sets the appropriate defaults for DirectLineChannelPropertiesArgs
 */
export function directLineChannelPropertiesArgsProvideDefaults(val: DirectLineChannelPropertiesArgs): DirectLineChannelPropertiesArgs {
    return {
        ...val,
        extensionKey1: (val.extensionKey1) ?? "",
        extensionKey2: (val.extensionKey2) ?? "",
    };
}

/**
 * A site for the Direct Line channel
 */
export interface DirectLineSiteArgs {
    /**
     * DirectLine application id
     */
    appId?: pulumi.Input<string>;
    /**
     * Entity Tag
     */
    eTag?: pulumi.Input<string>;
    /**
     * Whether this site is enabled for block user upload.
     */
    isBlockUserUploadEnabled?: pulumi.Input<boolean>;
    /**
     * Whether this site is disabled detailed logging for
     */
    isDetailedLoggingEnabled?: pulumi.Input<boolean>;
    /**
     * Whether this site is enabled for DirectLine channel
     */
    isEnabled: pulumi.Input<boolean>;
    /**
     * Whether this site is EndpointParameters enabled for channel
     */
    isEndpointParametersEnabled?: pulumi.Input<boolean>;
    /**
     * Whether this no-storage site is disabled detailed logging for
     */
    isNoStorageEnabled?: pulumi.Input<boolean>;
    /**
     * Whether this site is enabled for authentication with Bot Framework.
     */
    isSecureSiteEnabled?: pulumi.Input<boolean>;
    /**
     * Whether this site is enabled for Bot Framework V1 protocol.
     */
    isV1Enabled: pulumi.Input<boolean>;
    /**
     * Whether this site is enabled for Bot Framework V3 protocol.
     */
    isV3Enabled: pulumi.Input<boolean>;
    /**
     * Whether this site is enabled for Webchat Speech
     */
    isWebChatSpeechEnabled?: pulumi.Input<boolean>;
    /**
     * Whether this site is enabled for preview versions of Webchat
     */
    isWebchatPreviewEnabled?: pulumi.Input<boolean>;
    /**
     * Site name
     */
    siteName: pulumi.Input<string>;
    /**
     * Tenant Id
     */
    tenantId?: pulumi.Input<string>;
    /**
     * List of Trusted Origin URLs for this site. This field is applicable only if isSecureSiteEnabled is True.
     */
    trustedOrigins?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * directLineSiteArgsProvideDefaults sets the appropriate defaults for DirectLineSiteArgs
 */
export function directLineSiteArgsProvideDefaults(val: DirectLineSiteArgs): DirectLineSiteArgs {
    return {
        ...val,
        isWebChatSpeechEnabled: (val.isWebChatSpeechEnabled) ?? false,
        isWebchatPreviewEnabled: (val.isWebchatPreviewEnabled) ?? false,
    };
}

/**
 * DirectLine Speech channel definition
 */
export interface DirectLineSpeechChannelArgs {
    /**
     * The channel name
     * Expected value is 'DirectLineSpeechChannel'.
     */
    channelName: pulumi.Input<"DirectLineSpeechChannel">;
    /**
     * Entity Tag of the resource
     */
    etag?: pulumi.Input<string>;
    /**
     * Specifies the location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The set of properties specific to DirectLine Speech channel resource
     */
    properties?: pulumi.Input<DirectLineSpeechChannelPropertiesArgs>;
}
/**
 * directLineSpeechChannelArgsProvideDefaults sets the appropriate defaults for DirectLineSpeechChannelArgs
 */
export function directLineSpeechChannelArgsProvideDefaults(val: DirectLineSpeechChannelArgs): DirectLineSpeechChannelArgs {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * The parameters to provide for the DirectLine Speech channel.
 */
export interface DirectLineSpeechChannelPropertiesArgs {
    /**
     * The cognitive service region with this channel registration.
     */
    cognitiveServiceRegion?: pulumi.Input<string>;
    /**
     * The cognitive service id with this channel registration.
     */
    cognitiveServiceResourceId?: pulumi.Input<string>;
    /**
     * The cognitive service subscription key to use with this channel registration.
     */
    cognitiveServiceSubscriptionKey?: pulumi.Input<string>;
    /**
     * Custom voice deployment id (optional).
     */
    customSpeechModelId?: pulumi.Input<string>;
    /**
     * Custom speech model id (optional).
     */
    customVoiceDeploymentId?: pulumi.Input<string>;
    /**
     * Make this a default bot for chosen cognitive service account.
     */
    isDefaultBotForCogSvcAccount?: pulumi.Input<boolean>;
    /**
     * Whether this channel is enabled or not.
     */
    isEnabled?: pulumi.Input<boolean>;
}

/**
 * Email channel definition
 */
export interface EmailChannelArgs {
    /**
     * The channel name
     * Expected value is 'EmailChannel'.
     */
    channelName: pulumi.Input<"EmailChannel">;
    /**
     * Entity Tag of the resource
     */
    etag?: pulumi.Input<string>;
    /**
     * Specifies the location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The set of properties specific to email channel resource
     */
    properties?: pulumi.Input<EmailChannelPropertiesArgs>;
}
/**
 * emailChannelArgsProvideDefaults sets the appropriate defaults for EmailChannelArgs
 */
export function emailChannelArgsProvideDefaults(val: EmailChannelArgs): EmailChannelArgs {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * The parameters to provide for the Email channel.
 */
export interface EmailChannelPropertiesArgs {
    /**
     * Email channel auth method. 0 Password (Default); 1 Graph.
     */
    authMethod?: pulumi.Input<number>;
    /**
     * The email address
     */
    emailAddress: pulumi.Input<string>;
    /**
     * Whether this channel is enabled for the bot
     */
    isEnabled: pulumi.Input<boolean>;
    /**
     * The magic code for setting up the modern authentication.
     */
    magicCode?: pulumi.Input<string>;
    /**
     * The password for the email address. Value only returned through POST to the action Channel List API, otherwise empty.
     */
    password?: pulumi.Input<string>;
}

/**
 * Facebook channel definition
 */
export interface FacebookChannelArgs {
    /**
     * The channel name
     * Expected value is 'FacebookChannel'.
     */
    channelName: pulumi.Input<"FacebookChannel">;
    /**
     * Entity Tag of the resource
     */
    etag?: pulumi.Input<string>;
    /**
     * Specifies the location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The set of properties specific to bot facebook channel
     */
    properties?: pulumi.Input<FacebookChannelPropertiesArgs>;
}
/**
 * facebookChannelArgsProvideDefaults sets the appropriate defaults for FacebookChannelArgs
 */
export function facebookChannelArgsProvideDefaults(val: FacebookChannelArgs): FacebookChannelArgs {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * The parameters to provide for the Facebook channel.
 */
export interface FacebookChannelPropertiesArgs {
    /**
     * Facebook application id
     */
    appId: pulumi.Input<string>;
    /**
     * Facebook application secret. Value only returned through POST to the action Channel List API, otherwise empty.
     */
    appSecret?: pulumi.Input<string>;
    /**
     * Whether this channel is enabled for the bot
     */
    isEnabled: pulumi.Input<boolean>;
    /**
     * The list of Facebook pages
     */
    pages?: pulumi.Input<pulumi.Input<FacebookPageArgs>[]>;
}

/**
 * A Facebook page for Facebook channel registration
 */
export interface FacebookPageArgs {
    /**
     * Facebook application access token. Value only returned through POST to the action Channel List API, otherwise empty.
     */
    accessToken?: pulumi.Input<string>;
    /**
     * Page id
     */
    id: pulumi.Input<string>;
}

/**
 * Kik channel definition
 */
export interface KikChannelArgs {
    /**
     * The channel name
     * Expected value is 'KikChannel'.
     */
    channelName: pulumi.Input<"KikChannel">;
    /**
     * Entity Tag of the resource
     */
    etag?: pulumi.Input<string>;
    /**
     * Specifies the location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The set of properties specific to Kik channel resource
     */
    properties?: pulumi.Input<KikChannelPropertiesArgs>;
}
/**
 * kikChannelArgsProvideDefaults sets the appropriate defaults for KikChannelArgs
 */
export function kikChannelArgsProvideDefaults(val: KikChannelArgs): KikChannelArgs {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * The parameters to provide for the Kik channel.
 */
export interface KikChannelPropertiesArgs {
    /**
     * Kik API key. Value only returned through POST to the action Channel List API, otherwise empty.
     */
    apiKey?: pulumi.Input<string>;
    /**
     * Whether this channel is enabled for the bot
     */
    isEnabled: pulumi.Input<boolean>;
    /**
     * Whether this channel is validated for the bot
     */
    isValidated?: pulumi.Input<boolean>;
    /**
     * The Kik user name
     */
    userName: pulumi.Input<string>;
}

/**
 * Line channel definition
 */
export interface LineChannelArgs {
    /**
     * The channel name
     * Expected value is 'LineChannel'.
     */
    channelName: pulumi.Input<"LineChannel">;
    /**
     * Entity Tag of the resource
     */
    etag?: pulumi.Input<string>;
    /**
     * Specifies the location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The set of properties specific to line channel resource
     */
    properties?: pulumi.Input<LineChannelPropertiesArgs>;
}
/**
 * lineChannelArgsProvideDefaults sets the appropriate defaults for LineChannelArgs
 */
export function lineChannelArgsProvideDefaults(val: LineChannelArgs): LineChannelArgs {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * The parameters to provide for the Line channel.
 */
export interface LineChannelPropertiesArgs {
    /**
     * The list of line channel registrations
     */
    lineRegistrations: pulumi.Input<pulumi.Input<LineRegistrationArgs>[]>;
}

/**
 * The properties corresponding to a line channel registration
 */
export interface LineRegistrationArgs {
    /**
     * Access token for the line channel registration
     */
    channelAccessToken?: pulumi.Input<string>;
    /**
     * Secret for the line channel registration
     */
    channelSecret?: pulumi.Input<string>;
}

/**
 * M365 Extensions definition
 */
export interface M365ExtensionsArgs {
    /**
     * The channel name
     * Expected value is 'M365Extensions'.
     */
    channelName: pulumi.Input<"M365Extensions">;
    /**
     * Entity Tag of the resource
     */
    etag?: pulumi.Input<string>;
    /**
     * Specifies the location of the resource.
     */
    location?: pulumi.Input<string>;
}
/**
 * m365extensionsArgsProvideDefaults sets the appropriate defaults for M365ExtensionsArgs
 */
export function m365extensionsArgsProvideDefaults(val: M365ExtensionsArgs): M365ExtensionsArgs {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * Microsoft Teams channel definition
 */
export interface MsTeamsChannelArgs {
    /**
     * The channel name
     * Expected value is 'MsTeamsChannel'.
     */
    channelName: pulumi.Input<"MsTeamsChannel">;
    /**
     * Entity Tag of the resource
     */
    etag?: pulumi.Input<string>;
    /**
     * Specifies the location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The set of properties specific to Microsoft Teams channel resource
     */
    properties?: pulumi.Input<MsTeamsChannelPropertiesArgs>;
}
/**
 * msTeamsChannelArgsProvideDefaults sets the appropriate defaults for MsTeamsChannelArgs
 */
export function msTeamsChannelArgsProvideDefaults(val: MsTeamsChannelArgs): MsTeamsChannelArgs {
    return {
        ...val,
        location: (val.location) ?? "global",
        properties: (val.properties ? pulumi.output(val.properties).apply(msTeamsChannelPropertiesArgsProvideDefaults) : undefined),
    };
}

/**
 * The parameters to provide for the Microsoft Teams channel.
 */
export interface MsTeamsChannelPropertiesArgs {
    /**
     * Whether this channel accepted terms
     */
    acceptedTerms?: pulumi.Input<boolean>;
    /**
     * Webhook for Microsoft Teams channel calls
     */
    callingWebhook?: pulumi.Input<string>;
    /**
     * Deployment environment for Microsoft Teams channel calls
     */
    deploymentEnvironment?: pulumi.Input<string>;
    /**
     * Enable calling for Microsoft Teams channel
     */
    enableCalling?: pulumi.Input<boolean>;
    /**
     * Webhook for Microsoft Teams channel calls
     */
    incomingCallRoute?: pulumi.Input<string>;
    /**
     * Whether this channel is enabled for the bot
     */
    isEnabled: pulumi.Input<boolean>;
}
/**
 * msTeamsChannelPropertiesArgsProvideDefaults sets the appropriate defaults for MsTeamsChannelPropertiesArgs
 */
export function msTeamsChannelPropertiesArgsProvideDefaults(val: MsTeamsChannelPropertiesArgs): MsTeamsChannelPropertiesArgs {
    return {
        ...val,
        deploymentEnvironment: (val.deploymentEnvironment) ?? "CommercialDeployment",
        enableCalling: (val.enableCalling) ?? false,
    };
}

/**
 * Omnichannel channel definition
 */
export interface OmnichannelArgs {
    /**
     * The channel name
     * Expected value is 'Omnichannel'.
     */
    channelName: pulumi.Input<"Omnichannel">;
    /**
     * Entity Tag of the resource
     */
    etag?: pulumi.Input<string>;
    /**
     * Specifies the location of the resource.
     */
    location?: pulumi.Input<string>;
}
/**
 * omnichannelArgsProvideDefaults sets the appropriate defaults for OmnichannelArgs
 */
export function omnichannelArgsProvideDefaults(val: OmnichannelArgs): OmnichannelArgs {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * Outlook channel definition
 */
export interface OutlookChannelArgs {
    /**
     * The channel name
     * Expected value is 'OutlookChannel'.
     */
    channelName: pulumi.Input<"OutlookChannel">;
    /**
     * Entity Tag of the resource
     */
    etag?: pulumi.Input<string>;
    /**
     * Specifies the location of the resource.
     */
    location?: pulumi.Input<string>;
}
/**
 * outlookChannelArgsProvideDefaults sets the appropriate defaults for OutlookChannelArgs
 */
export function outlookChannelArgsProvideDefaults(val: OutlookChannelArgs): OutlookChannelArgs {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: pulumi.Input<string>;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
}

/**
 * SearchAssistant definition
 */
export interface SearchAssistantArgs {
    /**
     * The channel name
     * Expected value is 'SearchAssistant'.
     */
    channelName: pulumi.Input<"SearchAssistant">;
    /**
     * Entity Tag of the resource
     */
    etag?: pulumi.Input<string>;
    /**
     * Specifies the location of the resource.
     */
    location?: pulumi.Input<string>;
}
/**
 * searchAssistantArgsProvideDefaults sets the appropriate defaults for SearchAssistantArgs
 */
export function searchAssistantArgsProvideDefaults(val: SearchAssistantArgs): SearchAssistantArgs {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * The SKU of the cognitive services account.
 */
export interface SkuArgs {
    /**
     * The sku name
     */
    name: pulumi.Input<string | enums.SkuName>;
}

/**
 * Skype channel definition
 */
export interface SkypeChannelArgs {
    /**
     * The channel name
     * Expected value is 'SkypeChannel'.
     */
    channelName: pulumi.Input<"SkypeChannel">;
    /**
     * Entity Tag of the resource
     */
    etag?: pulumi.Input<string>;
    /**
     * Specifies the location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The set of properties specific to Skype channel resource
     */
    properties?: pulumi.Input<SkypeChannelPropertiesArgs>;
}
/**
 * skypeChannelArgsProvideDefaults sets the appropriate defaults for SkypeChannelArgs
 */
export function skypeChannelArgsProvideDefaults(val: SkypeChannelArgs): SkypeChannelArgs {
    return {
        ...val,
        location: (val.location) ?? "global",
        properties: (val.properties ? pulumi.output(val.properties).apply(skypeChannelPropertiesArgsProvideDefaults) : undefined),
    };
}

/**
 * The parameters to provide for the Microsoft Teams channel.
 */
export interface SkypeChannelPropertiesArgs {
    /**
     * Calling web hook for Skype channel
     */
    callingWebHook?: pulumi.Input<string>;
    /**
     * Enable calling for Skype channel
     */
    enableCalling?: pulumi.Input<boolean>;
    /**
     * Enable groups for Skype channel
     */
    enableGroups?: pulumi.Input<boolean>;
    /**
     * Enable media cards for Skype channel
     */
    enableMediaCards?: pulumi.Input<boolean>;
    /**
     * Enable messaging for Skype channel
     */
    enableMessaging?: pulumi.Input<boolean>;
    /**
     * Enable screen sharing for Skype channel
     */
    enableScreenSharing?: pulumi.Input<boolean>;
    /**
     * Enable video for Skype channel
     */
    enableVideo?: pulumi.Input<boolean>;
    /**
     * Group mode for Skype channel
     */
    groupsMode?: pulumi.Input<string>;
    /**
     * Incoming call route for Skype channel
     */
    incomingCallRoute?: pulumi.Input<string>;
    /**
     * Whether this channel is enabled for the bot
     */
    isEnabled: pulumi.Input<boolean>;
}
/**
 * skypeChannelPropertiesArgsProvideDefaults sets the appropriate defaults for SkypeChannelPropertiesArgs
 */
export function skypeChannelPropertiesArgsProvideDefaults(val: SkypeChannelPropertiesArgs): SkypeChannelPropertiesArgs {
    return {
        ...val,
        enableCalling: (val.enableCalling) ?? false,
    };
}

/**
 * Slack channel definition
 */
export interface SlackChannelArgs {
    /**
     * The channel name
     * Expected value is 'SlackChannel'.
     */
    channelName: pulumi.Input<"SlackChannel">;
    /**
     * Entity Tag of the resource
     */
    etag?: pulumi.Input<string>;
    /**
     * Specifies the location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The set of properties specific to Slack channel resource
     */
    properties?: pulumi.Input<SlackChannelPropertiesArgs>;
}
/**
 * slackChannelArgsProvideDefaults sets the appropriate defaults for SlackChannelArgs
 */
export function slackChannelArgsProvideDefaults(val: SlackChannelArgs): SlackChannelArgs {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * The parameters to provide for the Slack channel.
 */
export interface SlackChannelPropertiesArgs {
    /**
     * The Slack client id
     */
    clientId?: pulumi.Input<string>;
    /**
     * The Slack client secret. Value only returned through POST to the action Channel List API, otherwise empty.
     */
    clientSecret?: pulumi.Input<string>;
    /**
     * Whether this channel is enabled for the bot
     */
    isEnabled: pulumi.Input<boolean>;
    /**
     * The Slack landing page Url
     */
    landingPageUrl?: pulumi.Input<string>;
    /**
     * Whether to register the settings before OAuth validation is performed. Recommended to True.
     */
    registerBeforeOAuthFlow?: pulumi.Input<boolean>;
    /**
     * The Slack permission scopes.
     */
    scopes?: pulumi.Input<string>;
    /**
     * The Slack signing secret.
     */
    signingSecret?: pulumi.Input<string>;
    /**
     * The Slack verification token. Value only returned through POST to the action Channel List API, otherwise empty.
     */
    verificationToken?: pulumi.Input<string>;
}

/**
 * Sms channel definition
 */
export interface SmsChannelArgs {
    /**
     * The channel name
     * Expected value is 'SmsChannel'.
     */
    channelName: pulumi.Input<"SmsChannel">;
    /**
     * Entity Tag of the resource
     */
    etag?: pulumi.Input<string>;
    /**
     * Specifies the location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The set of properties specific to Sms channel resource
     */
    properties?: pulumi.Input<SmsChannelPropertiesArgs>;
}
/**
 * smsChannelArgsProvideDefaults sets the appropriate defaults for SmsChannelArgs
 */
export function smsChannelArgsProvideDefaults(val: SmsChannelArgs): SmsChannelArgs {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * The parameters to provide for the Sms channel.
 */
export interface SmsChannelPropertiesArgs {
    /**
     * The Sms account SID. Value only returned through POST to the action Channel List API, otherwise empty.
     */
    accountSID: pulumi.Input<string>;
    /**
     * The Sms auth token. Value only returned through POST to the action Channel List API, otherwise empty.
     */
    authToken?: pulumi.Input<string>;
    /**
     * Whether this channel is enabled for the bot
     */
    isEnabled: pulumi.Input<boolean>;
    /**
     * Whether this channel is validated for the bot
     */
    isValidated?: pulumi.Input<boolean>;
    /**
     * The Sms phone
     */
    phone: pulumi.Input<string>;
}

/**
 * Telegram channel definition
 */
export interface TelegramChannelArgs {
    /**
     * The channel name
     * Expected value is 'TelegramChannel'.
     */
    channelName: pulumi.Input<"TelegramChannel">;
    /**
     * Entity Tag of the resource
     */
    etag?: pulumi.Input<string>;
    /**
     * Specifies the location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The set of properties specific to Telegram channel resource
     */
    properties?: pulumi.Input<TelegramChannelPropertiesArgs>;
}
/**
 * telegramChannelArgsProvideDefaults sets the appropriate defaults for TelegramChannelArgs
 */
export function telegramChannelArgsProvideDefaults(val: TelegramChannelArgs): TelegramChannelArgs {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * The parameters to provide for the Telegram channel.
 */
export interface TelegramChannelPropertiesArgs {
    /**
     * The Telegram access token. Value only returned through POST to the action Channel List API, otherwise empty.
     */
    accessToken?: pulumi.Input<string>;
    /**
     * Whether this channel is enabled for the bot
     */
    isEnabled: pulumi.Input<boolean>;
    /**
     * Whether this channel is validated for the bot
     */
    isValidated?: pulumi.Input<boolean>;
}

/**
 * Telephony channel definition
 */
export interface TelephonyChannelArgs {
    /**
     * The channel name
     * Expected value is 'TelephonyChannel'.
     */
    channelName: pulumi.Input<"TelephonyChannel">;
    /**
     * Entity Tag of the resource
     */
    etag?: pulumi.Input<string>;
    /**
     * Specifies the location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The set of properties specific to Telephony channel resource
     */
    properties?: pulumi.Input<TelephonyChannelPropertiesArgs>;
}
/**
 * telephonyChannelArgsProvideDefaults sets the appropriate defaults for TelephonyChannelArgs
 */
export function telephonyChannelArgsProvideDefaults(val: TelephonyChannelArgs): TelephonyChannelArgs {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * The parameters to provide for the Direct Line channel.
 */
export interface TelephonyChannelPropertiesArgs {
    /**
     * The list of Telephony api configuration
     */
    apiConfigurations?: pulumi.Input<pulumi.Input<TelephonyChannelResourceApiConfigurationArgs>[]>;
    /**
     * The extensionKey2
     */
    cognitiveServiceRegion?: pulumi.Input<string>;
    /**
     * The extensionKey1
     */
    cognitiveServiceSubscriptionKey?: pulumi.Input<string>;
    /**
     * The default locale of the channel
     */
    defaultLocale?: pulumi.Input<string>;
    /**
     * Whether the channel is enabled
     */
    isEnabled?: pulumi.Input<boolean>;
    /**
     * The list of Telephony phone numbers
     */
    phoneNumbers?: pulumi.Input<pulumi.Input<TelephonyPhoneNumbersArgs>[]>;
    /**
     * The premium SKU applied to the channel
     */
    premiumSKU?: pulumi.Input<string>;
}

/**
 * A resource Api configuration for the Telephony channel
 */
export interface TelephonyChannelResourceApiConfigurationArgs {
    /**
     * The cognitive service region.
     */
    cognitiveServiceRegion?: pulumi.Input<string>;
    /**
     * The cognitive service resourceId.
     */
    cognitiveServiceResourceId?: pulumi.Input<string>;
    /**
     * The cognitive service subscription key.
     */
    cognitiveServiceSubscriptionKey?: pulumi.Input<string>;
    /**
     * The default locale.
     */
    defaultLocale?: pulumi.Input<string>;
    /**
     * The id of config.
     */
    id?: pulumi.Input<string>;
    /**
     * The provider name.
     */
    providerName?: pulumi.Input<string>;
}

/**
 * A telephone number for the Telephony channel
 */
export interface TelephonyPhoneNumbersArgs {
    /**
     * The endpoint of ACS.
     */
    acsEndpoint?: pulumi.Input<string>;
    /**
     * The resource id of ACS.
     */
    acsResourceId?: pulumi.Input<string>;
    /**
     * The secret of ACS.
     */
    acsSecret?: pulumi.Input<string>;
    /**
     * The service region of cognitive service.
     */
    cognitiveServiceRegion?: pulumi.Input<string>;
    /**
     * The resource id of cognitive service.
     */
    cognitiveServiceResourceId?: pulumi.Input<string>;
    /**
     * The subscription key of cognitive service.
     */
    cognitiveServiceSubscriptionKey?: pulumi.Input<string>;
    /**
     * The default locale of the phone number.
     */
    defaultLocale?: pulumi.Input<string>;
    /**
     * The element id.
     */
    id?: pulumi.Input<string>;
    /**
     * Optional Property that will determine the offering type of the phone.
     */
    offerType?: pulumi.Input<string>;
    /**
     * The phone number.
     */
    phoneNumber?: pulumi.Input<string>;
}

/**
 * Web Chat channel definition
 */
export interface WebChatChannelArgs {
    /**
     * The channel name
     * Expected value is 'WebChatChannel'.
     */
    channelName: pulumi.Input<"WebChatChannel">;
    /**
     * Entity Tag of the resource
     */
    etag?: pulumi.Input<string>;
    /**
     * Specifies the location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The set of properties specific to Web Chat channel resource
     */
    properties?: pulumi.Input<WebChatChannelPropertiesArgs>;
}
/**
 * webChatChannelArgsProvideDefaults sets the appropriate defaults for WebChatChannelArgs
 */
export function webChatChannelArgsProvideDefaults(val: WebChatChannelArgs): WebChatChannelArgs {
    return {
        ...val,
        location: (val.location) ?? "global",
    };
}

/**
 * The parameters to provide for the Web Chat channel.
 */
export interface WebChatChannelPropertiesArgs {
    /**
     * The list of Web Chat sites
     */
    sites?: pulumi.Input<pulumi.Input<WebChatSiteArgs>[]>;
}

/**
 * A site for the Webchat channel
 */
export interface WebChatSiteArgs {
    /**
     * DirectLine application id
     */
    appId?: pulumi.Input<string>;
    /**
     * Entity Tag
     */
    eTag?: pulumi.Input<string>;
    /**
     * Whether this site is enabled for block user upload.
     */
    isBlockUserUploadEnabled?: pulumi.Input<boolean>;
    /**
     * Whether this site is disabled detailed logging for
     */
    isDetailedLoggingEnabled?: pulumi.Input<boolean>;
    /**
     * Whether this site is enabled for DirectLine channel
     */
    isEnabled: pulumi.Input<boolean>;
    /**
     * Whether this site is EndpointParameters enabled for channel
     */
    isEndpointParametersEnabled?: pulumi.Input<boolean>;
    /**
     * Whether this no-storage site is disabled detailed logging for
     */
    isNoStorageEnabled?: pulumi.Input<boolean>;
    /**
     * Whether this site is enabled for authentication with Bot Framework.
     */
    isSecureSiteEnabled?: pulumi.Input<boolean>;
    /**
     * Whether this site is enabled for Bot Framework V1 protocol.
     */
    isV1Enabled?: pulumi.Input<boolean>;
    /**
     * Whether this site is enabled for Bot Framework V3 protocol.
     */
    isV3Enabled?: pulumi.Input<boolean>;
    /**
     * Whether this site is enabled for Webchat Speech
     */
    isWebChatSpeechEnabled?: pulumi.Input<boolean>;
    /**
     * Whether this site is enabled for preview versions of Webchat
     */
    isWebchatPreviewEnabled: pulumi.Input<boolean>;
    /**
     * Site name
     */
    siteName: pulumi.Input<string>;
    /**
     * Tenant Id
     */
    tenantId?: pulumi.Input<string>;
    /**
     * List of Trusted Origin URLs for this site. This field is applicable only if isSecureSiteEnabled is True.
     */
    trustedOrigins?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * webChatSiteArgsProvideDefaults sets the appropriate defaults for WebChatSiteArgs
 */
export function webChatSiteArgsProvideDefaults(val: WebChatSiteArgs): WebChatSiteArgs {
    return {
        ...val,
        isWebChatSpeechEnabled: (val.isWebChatSpeechEnabled) ?? false,
        isWebchatPreviewEnabled: (val.isWebchatPreviewEnabled) ?? false,
    };
}
