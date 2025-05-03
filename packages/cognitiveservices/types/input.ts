import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * This connection type covers the AAD auth for any applicable Azure service
 */
export interface AADAuthTypeConnectionPropertiesArgs {
    /**
     * Authentication type of the connection target
     * Expected value is 'AAD'.
     */
    authType: pulumi.Input<"AAD">;
    /**
     * Category of the connection
     */
    category?: pulumi.Input<string | enums.ConnectionCategory>;
    error?: pulumi.Input<string>;
    expiryTime?: pulumi.Input<string>;
    isSharedToAll?: pulumi.Input<boolean>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement>;
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[]>;
    target?: pulumi.Input<string>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean>;
}

export interface AccessKeyAuthTypeConnectionPropertiesArgs {
    /**
     * Authentication type of the connection target
     * Expected value is 'AccessKey'.
     */
    authType: pulumi.Input<"AccessKey">;
    /**
     * Category of the connection
     */
    category?: pulumi.Input<string | enums.ConnectionCategory>;
    credentials?: pulumi.Input<ConnectionAccessKeyArgs>;
    error?: pulumi.Input<string>;
    expiryTime?: pulumi.Input<string>;
    isSharedToAll?: pulumi.Input<boolean>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement>;
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[]>;
    target?: pulumi.Input<string>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean>;
}

/**
 * This connection type covers the account key connection for Azure storage
 */
export interface AccountKeyAuthTypeConnectionPropertiesArgs {
    /**
     * Authentication type of the connection target
     * Expected value is 'AccountKey'.
     */
    authType: pulumi.Input<"AccountKey">;
    /**
     * Category of the connection
     */
    category?: pulumi.Input<string | enums.ConnectionCategory>;
    /**
     * Account key object for connection credential.
     */
    credentials?: pulumi.Input<ConnectionAccountKeyArgs>;
    error?: pulumi.Input<string>;
    expiryTime?: pulumi.Input<string>;
    isSharedToAll?: pulumi.Input<boolean>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement>;
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[]>;
    target?: pulumi.Input<string>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean>;
}

/**
 * Properties of Cognitive Services account.
 */
export interface AccountPropertiesArgs {
    allowedFqdnList?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The user owned AML workspace properties.
     */
    amlWorkspace?: pulumi.Input<UserOwnedAmlWorkspaceArgs>;
    /**
     * The api properties for special APIs.
     */
    apiProperties?: pulumi.Input<ApiPropertiesArgs>;
    /**
     * Optional subdomain name used for token-based authentication.
     */
    customSubDomainName?: pulumi.Input<string>;
    disableLocalAuth?: pulumi.Input<boolean>;
    /**
     * The flag to enable dynamic throttling.
     */
    dynamicThrottlingEnabled?: pulumi.Input<boolean>;
    /**
     * The encryption properties for this resource.
     */
    encryption?: pulumi.Input<EncryptionArgs>;
    /**
     * The multiregion settings of Cognitive Services account.
     */
    locations?: pulumi.Input<MultiRegionSettingsArgs>;
    /**
     * Resource migration token.
     */
    migrationToken?: pulumi.Input<string>;
    /**
     * A collection of rules governing the accessibility from specific network locations.
     */
    networkAcls?: pulumi.Input<NetworkRuleSetArgs>;
    /**
     * Whether or not public endpoint access is allowed for this account.
     */
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccess>;
    /**
     * Cognitive Services Rai Monitor Config.
     */
    raiMonitorConfig?: pulumi.Input<RaiMonitorConfigArgs>;
    restore?: pulumi.Input<boolean>;
    restrictOutboundNetworkAccess?: pulumi.Input<boolean>;
    /**
     * The storage accounts for this resource.
     */
    userOwnedStorage?: pulumi.Input<pulumi.Input<UserOwnedStorageArgs>[]>;
}
/**
 * accountPropertiesArgsProvideDefaults sets the appropriate defaults for AccountPropertiesArgs
 */
export function accountPropertiesArgsProvideDefaults(val: AccountPropertiesArgs): AccountPropertiesArgs {
    return {
        ...val,
        encryption: (val.encryption ? pulumi.output(val.encryption).apply(encryptionArgsProvideDefaults) : undefined),
    };
}

/**
 * This connection type covers the generic ApiKey auth connection categories, for examples:
 * AzureOpenAI:
 *     Category:= AzureOpenAI
 *     AuthType:= ApiKey (as type discriminator)
 *     Credentials:= {ApiKey} as .ApiKey
 *     Target:= {ApiBase}
 *             
 * CognitiveService:
 *     Category:= CognitiveService
 *     AuthType:= ApiKey (as type discriminator)
 *     Credentials:= {SubscriptionKey} as ApiKey
 *     Target:= ServiceRegion={serviceRegion}
 *             
 * CognitiveSearch:
 *     Category:= CognitiveSearch
 *     AuthType:= ApiKey (as type discriminator)
 *     Credentials:= {Key} as ApiKey
 *     Target:= {Endpoint}
 *             
 * Use Metadata property bag for ApiType, ApiVersion, Kind and other metadata fields
 */
export interface ApiKeyAuthConnectionPropertiesArgs {
    /**
     * Authentication type of the connection target
     * Expected value is 'ApiKey'.
     */
    authType: pulumi.Input<"ApiKey">;
    /**
     * Category of the connection
     */
    category?: pulumi.Input<string | enums.ConnectionCategory>;
    /**
     * Api key object for connection credential.
     */
    credentials?: pulumi.Input<ConnectionApiKeyArgs>;
    error?: pulumi.Input<string>;
    expiryTime?: pulumi.Input<string>;
    isSharedToAll?: pulumi.Input<boolean>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement>;
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[]>;
    target?: pulumi.Input<string>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean>;
}

/**
 * The api properties for special APIs.
 */
export interface ApiPropertiesArgs {
    /**
     * (Metrics Advisor Only) The Azure AD Client Id (Application Id).
     */
    aadClientId?: pulumi.Input<string>;
    /**
     * (Metrics Advisor Only) The Azure AD Tenant Id.
     */
    aadTenantId?: pulumi.Input<string>;
    /**
     * (Personalization Only) The flag to enable statistics of Bing Search.
     */
    eventHubConnectionString?: pulumi.Input<string>;
    /**
     * (QnAMaker Only) The Azure Search endpoint id of QnAMaker.
     */
    qnaAzureSearchEndpointId?: pulumi.Input<string>;
    /**
     * (QnAMaker Only) The Azure Search endpoint key of QnAMaker.
     */
    qnaAzureSearchEndpointKey?: pulumi.Input<string>;
    /**
     * (QnAMaker Only) The runtime endpoint of QnAMaker.
     */
    qnaRuntimeEndpoint?: pulumi.Input<string>;
    /**
     * (Bing Search Only) The flag to enable statistics of Bing Search.
     */
    statisticsEnabled?: pulumi.Input<boolean>;
    /**
     * (Personalization Only) The storage account connection string.
     */
    storageAccountConnectionString?: pulumi.Input<string>;
    /**
     * (Metrics Advisor Only) The super user of Metrics Advisor.
     */
    superUser?: pulumi.Input<string>;
    /**
     * (Metrics Advisor Only) The website name of Metrics Advisor.
     */
    websiteName?: pulumi.Input<string>;
}

export interface CapabilityHostArgs {
    /**
     * List of AI services connections.
     */
    aiServicesConnections?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Kind of this capability host.
     */
    capabilityHostKind?: pulumi.Input<string | enums.CapabilityHostKind>;
    /**
     * Customer subnet info to help set up this capability host.
     */
    customerSubnet?: pulumi.Input<string>;
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string>;
    /**
     * List of Storage connections.
     */
    storageConnections?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * List of Thread storage connections.
     */
    threadStorageConnections?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of VectorStore connections.
     */
    vectorStoreConnections?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * capabilityHostArgsProvideDefaults sets the appropriate defaults for CapabilityHostArgs
 */
export function capabilityHostArgsProvideDefaults(val: CapabilityHostArgs): CapabilityHostArgs {
    return {
        ...val,
        capabilityHostKind: (val.capabilityHostKind) ?? "Agents",
    };
}

/**
 * Cognitive Services account commitment period.
 */
export interface CommitmentPeriodArgs {
    /**
     * Commitment period commitment count.
     */
    count?: pulumi.Input<number>;
    /**
     * Commitment period commitment tier.
     */
    tier?: pulumi.Input<string>;
}

/**
 * Properties of Cognitive Services account commitment plan.
 */
export interface CommitmentPlanPropertiesArgs {
    /**
     * AutoRenew commitment plan.
     */
    autoRenew?: pulumi.Input<boolean>;
    /**
     * Commitment plan guid.
     */
    commitmentPlanGuid?: pulumi.Input<string>;
    /**
     * Cognitive Services account commitment period.
     */
    current?: pulumi.Input<CommitmentPeriodArgs>;
    /**
     * Account hosting model.
     */
    hostingModel?: pulumi.Input<string | enums.HostingModel>;
    /**
     * Cognitive Services account commitment period.
     */
    next?: pulumi.Input<CommitmentPeriodArgs>;
    /**
     * Commitment plan type.
     */
    planType?: pulumi.Input<string>;
}

export interface ConnectionAccessKeyArgs {
    accessKeyId?: pulumi.Input<string>;
    secretAccessKey?: pulumi.Input<string>;
}

/**
 * Account key object for connection credential.
 */
export interface ConnectionAccountKeyArgs {
    key?: pulumi.Input<string>;
}

/**
 * Api key object for connection credential.
 */
export interface ConnectionApiKeyArgs {
    key?: pulumi.Input<string>;
}

export interface ConnectionManagedIdentityArgs {
    clientId?: pulumi.Input<string>;
    resourceId?: pulumi.Input<string>;
}

/**
 * ClientId and ClientSecret are required. Other properties are optional
 * depending on each OAuth2 provider's implementation.
 */
export interface ConnectionOAuth2Args {
    /**
     * Required by Concur connection category
     */
    authUrl?: pulumi.Input<string>;
    /**
     * Client id in the format of UUID
     */
    clientId?: pulumi.Input<string>;
    clientSecret?: pulumi.Input<string>;
    /**
     * Required by GoogleAdWords connection category
     */
    developerToken?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    /**
     * Required by GoogleBigQuery, GoogleAdWords, Hubspot, QuickBooks, Square, Xero, Zoho
     * where user needs to get RefreshToken offline
     */
    refreshToken?: pulumi.Input<string>;
    /**
     * Required by QuickBooks and Xero connection categories
     */
    tenantId?: pulumi.Input<string>;
    /**
     * Concur, ServiceNow auth server AccessToken grant type is 'Password'
     * which requires UsernamePassword
     */
    username?: pulumi.Input<string>;
}

export interface ConnectionPersonalAccessTokenArgs {
    pat?: pulumi.Input<string>;
}

export interface ConnectionServicePrincipalArgs {
    clientId?: pulumi.Input<string>;
    clientSecret?: pulumi.Input<string>;
    tenantId?: pulumi.Input<string>;
}

export interface ConnectionSharedAccessSignatureArgs {
    sas?: pulumi.Input<string>;
}

export interface ConnectionUsernamePasswordArgs {
    password?: pulumi.Input<string>;
    /**
     * Optional, required by connections like SalesForce for extra security in addition to UsernamePassword
     */
    securityToken?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
}

/**
 * Gets or sets the source to which filter applies.
 */
export interface CustomBlocklistConfigArgs {
    /**
     * If blocking would occur.
     */
    blocking?: pulumi.Input<boolean>;
    /**
     * Name of ContentFilter.
     */
    blocklistName?: pulumi.Input<string>;
    /**
     * Content source to apply the Content Filters.
     */
    source?: pulumi.Input<string | enums.RaiPolicyContentSource>;
}

/**
 * Custom Keys credential object
 */
export interface CustomKeysArgs {
    keys?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * Category:= CustomKeys
 * AuthType:= CustomKeys (as type discriminator)
 * Credentials:= {CustomKeys} as CustomKeys
 * Target:= {any value}
 * Use Metadata property bag for ApiVersion and other metadata fields
 */
export interface CustomKeysConnectionPropertiesArgs {
    /**
     * Authentication type of the connection target
     * Expected value is 'CustomKeys'.
     */
    authType: pulumi.Input<"CustomKeys">;
    /**
     * Category of the connection
     */
    category?: pulumi.Input<string | enums.ConnectionCategory>;
    /**
     * Custom Keys credential object
     */
    credentials?: pulumi.Input<CustomKeysArgs>;
    error?: pulumi.Input<string>;
    expiryTime?: pulumi.Input<string>;
    isSharedToAll?: pulumi.Input<boolean>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement>;
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[]>;
    target?: pulumi.Input<string>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean>;
}

/**
 * Internal use only.
 */
export interface DeploymentCapacitySettingsArgs {
    /**
     * The designated capacity.
     */
    designatedCapacity?: pulumi.Input<number>;
    /**
     * The priority of this capacity setting.
     */
    priority?: pulumi.Input<number>;
}

/**
 * Properties of Cognitive Services account deployment model.
 */
export interface DeploymentModelArgs {
    /**
     * Deployment model format.
     */
    format?: pulumi.Input<string>;
    /**
     * Deployment model name.
     */
    name?: pulumi.Input<string>;
    /**
     * Deployment model publisher.
     */
    publisher?: pulumi.Input<string>;
    /**
     * Optional. Deployment model source ARM resource ID.
     */
    source?: pulumi.Input<string>;
    /**
     * Optional. Source of the model, another Microsoft.CognitiveServices accounts ARM resource ID.
     */
    sourceAccount?: pulumi.Input<string>;
    /**
     * Optional. Deployment model version. If version is not specified, a default version will be assigned. The default version is different for different models and might change when there is new version available for a model. Default version for a model could be found from list models API.
     */
    version?: pulumi.Input<string>;
}

/**
 * Properties of Cognitive Services account deployment.
 */
export interface DeploymentPropertiesArgs {
    /**
     * Internal use only.
     */
    capacitySettings?: pulumi.Input<DeploymentCapacitySettingsArgs>;
    /**
     * The current capacity.
     */
    currentCapacity?: pulumi.Input<number>;
    /**
     * Properties of Cognitive Services account deployment model.
     */
    model?: pulumi.Input<DeploymentModelArgs>;
    /**
     * The name of parent deployment.
     */
    parentDeploymentName?: pulumi.Input<string>;
    /**
     * The name of RAI policy.
     */
    raiPolicyName?: pulumi.Input<string>;
    /**
     * Properties of Cognitive Services account deployment model. (Deprecated, please use Deployment.sku instead.)
     */
    scaleSettings?: pulumi.Input<DeploymentScaleSettingsArgs>;
    /**
     * Deployment model version upgrade option.
     */
    versionUpgradeOption?: pulumi.Input<string | enums.DeploymentModelVersionUpgradeOption>;
}

/**
 * Properties of Cognitive Services account deployment model. (Deprecated, please use Deployment.sku instead.)
 */
export interface DeploymentScaleSettingsArgs {
    /**
     * Deployment capacity.
     */
    capacity?: pulumi.Input<number>;
    /**
     * Deployment scale type.
     */
    scaleType?: pulumi.Input<string | enums.DeploymentScaleType>;
}

/**
 * Properties to configure Encryption
 */
export interface EncryptionArgs {
    /**
     * Enumerates the possible value of keySource for Encryption
     */
    keySource?: pulumi.Input<string | enums.KeySource>;
    /**
     * Properties of KeyVault
     */
    keyVaultProperties?: pulumi.Input<KeyVaultPropertiesArgs>;
}
/**
 * encryptionArgsProvideDefaults sets the appropriate defaults for EncryptionArgs
 */
export function encryptionArgsProvideDefaults(val: EncryptionArgs): EncryptionArgs {
    return {
        ...val,
        keySource: (val.keySource) ?? "Microsoft.KeyVault",
    };
}

/**
 * Properties to EncryptionScope
 */
export interface EncryptionScopePropertiesArgs {
    /**
     * Enumerates the possible value of keySource for Encryption
     */
    keySource?: pulumi.Input<string | enums.KeySource>;
    /**
     * Properties of KeyVault
     */
    keyVaultProperties?: pulumi.Input<KeyVaultPropertiesArgs>;
    /**
     * The encryptionScope state.
     */
    state?: pulumi.Input<string | enums.EncryptionScopeState>;
}
/**
 * encryptionScopePropertiesArgsProvideDefaults sets the appropriate defaults for EncryptionScopePropertiesArgs
 */
export function encryptionScopePropertiesArgsProvideDefaults(val: EncryptionScopePropertiesArgs): EncryptionScopePropertiesArgs {
    return {
        ...val,
        keySource: (val.keySource) ?? "Microsoft.KeyVault",
    };
}

/**
 * Identity for the resource.
 */
export interface IdentityArgs {
    /**
     * The identity type.
     */
    type?: pulumi.Input<enums.ResourceIdentityType>;
    /**
     * The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * A rule governing the accessibility from a specific ip address or ip range.
 */
export interface IpRuleArgs {
    /**
     * An IPv4 address range in CIDR notation, such as '124.56.78.91' (simple IP address) or '124.56.78.0/24' (all addresses that start with 124.56.78).
     */
    value: pulumi.Input<string>;
}

/**
 * Properties to configure keyVault Properties
 */
export interface KeyVaultPropertiesArgs {
    identityClientId?: pulumi.Input<string>;
    /**
     * Name of the Key from KeyVault
     */
    keyName?: pulumi.Input<string>;
    /**
     * Uri of KeyVault
     */
    keyVaultUri?: pulumi.Input<string>;
    /**
     * Version of the Key from KeyVault
     */
    keyVersion?: pulumi.Input<string>;
}

export interface ManagedIdentityAuthTypeConnectionPropertiesArgs {
    /**
     * Authentication type of the connection target
     * Expected value is 'ManagedIdentity'.
     */
    authType: pulumi.Input<"ManagedIdentity">;
    /**
     * Category of the connection
     */
    category?: pulumi.Input<string | enums.ConnectionCategory>;
    credentials?: pulumi.Input<ConnectionManagedIdentityArgs>;
    error?: pulumi.Input<string>;
    expiryTime?: pulumi.Input<string>;
    isSharedToAll?: pulumi.Input<boolean>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement>;
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[]>;
    target?: pulumi.Input<string>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean>;
}

/**
 * The multiregion settings Cognitive Services account.
 */
export interface MultiRegionSettingsArgs {
    regions?: pulumi.Input<pulumi.Input<RegionSettingArgs>[]>;
    /**
     * Multiregion routing methods.
     */
    routingMethod?: pulumi.Input<string | enums.RoutingMethods>;
}

/**
 * A set of rules governing the network accessibility.
 */
export interface NetworkRuleSetArgs {
    /**
     * Setting for trusted services.
     */
    bypass?: pulumi.Input<string | enums.ByPassSelection>;
    /**
     * The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated.
     */
    defaultAction?: pulumi.Input<string | enums.NetworkRuleAction>;
    /**
     * The list of IP address rules.
     */
    ipRules?: pulumi.Input<pulumi.Input<IpRuleArgs>[]>;
    /**
     * The list of virtual network rules.
     */
    virtualNetworkRules?: pulumi.Input<pulumi.Input<VirtualNetworkRuleArgs>[]>;
}

export interface NoneAuthTypeConnectionPropertiesArgs {
    /**
     * Authentication type of the connection target
     * Expected value is 'None'.
     */
    authType: pulumi.Input<"None">;
    /**
     * Category of the connection
     */
    category?: pulumi.Input<string | enums.ConnectionCategory>;
    error?: pulumi.Input<string>;
    expiryTime?: pulumi.Input<string>;
    isSharedToAll?: pulumi.Input<boolean>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement>;
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[]>;
    target?: pulumi.Input<string>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean>;
}

export interface OAuth2AuthTypeConnectionPropertiesArgs {
    /**
     * Authentication type of the connection target
     * Expected value is 'OAuth2'.
     */
    authType: pulumi.Input<"OAuth2">;
    /**
     * Category of the connection
     */
    category?: pulumi.Input<string | enums.ConnectionCategory>;
    /**
     * ClientId and ClientSecret are required. Other properties are optional
     * depending on each OAuth2 provider's implementation.
     */
    credentials?: pulumi.Input<ConnectionOAuth2Args>;
    error?: pulumi.Input<string>;
    expiryTime?: pulumi.Input<string>;
    isSharedToAll?: pulumi.Input<boolean>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement>;
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[]>;
    target?: pulumi.Input<string>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean>;
}

export interface PATAuthTypeConnectionPropertiesArgs {
    /**
     * Authentication type of the connection target
     * Expected value is 'PAT'.
     */
    authType: pulumi.Input<"PAT">;
    /**
     * Category of the connection
     */
    category?: pulumi.Input<string | enums.ConnectionCategory>;
    credentials?: pulumi.Input<ConnectionPersonalAccessTokenArgs>;
    error?: pulumi.Input<string>;
    expiryTime?: pulumi.Input<string>;
    isSharedToAll?: pulumi.Input<boolean>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement>;
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[]>;
    target?: pulumi.Input<string>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean>;
}

/**
 * Properties of the PrivateEndpointConnectProperties.
 */
export interface PrivateEndpointConnectionPropertiesArgs {
    /**
     * The private link resource group ids.
     */
    groupIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    privateLinkServiceConnectionState: pulumi.Input<PrivateLinkServiceConnectionStateArgs>;
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
 * Properties of Cognitive Services Project'.
 */
export interface ProjectPropertiesArgs {
    /**
     * The description of the Cognitive Services Project.
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of the Cognitive Services Project.
     */
    displayName?: pulumi.Input<string>;
}

/**
 * RAI Custom Blocklist Item properties.
 */
export interface RaiBlocklistItemPropertiesArgs {
    /**
     * If the pattern is a regex pattern.
     */
    isRegex?: pulumi.Input<boolean>;
    /**
     * Pattern to match against.
     */
    pattern?: pulumi.Input<string>;
}

/**
 * RAI Custom Blocklist properties.
 */
export interface RaiBlocklistPropertiesArgs {
    /**
     * Description of the block list.
     */
    description?: pulumi.Input<string>;
}

/**
 * Cognitive Services Rai Monitor Config.
 */
export interface RaiMonitorConfigArgs {
    /**
     * The storage resource Id.
     */
    adxStorageResourceId?: pulumi.Input<string>;
    /**
     * The identity client Id to access the storage.
     */
    identityClientId?: pulumi.Input<string>;
}

/**
 * Azure OpenAI Content Filter.
 */
export interface RaiPolicyContentFilterArgs {
    /**
     * If blocking would occur.
     */
    blocking?: pulumi.Input<boolean>;
    /**
     * If the ContentFilter is enabled.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Name of ContentFilter.
     */
    name?: pulumi.Input<string>;
    /**
     * Level at which content is filtered.
     */
    severityThreshold?: pulumi.Input<string | enums.ContentLevel>;
    /**
     * Content source to apply the Content Filters.
     */
    source?: pulumi.Input<string | enums.RaiPolicyContentSource>;
}

/**
 * Azure OpenAI Content Filters properties.
 */
export interface RaiPolicyPropertiesArgs {
    /**
     * Name of Rai policy.
     */
    basePolicyName?: pulumi.Input<string>;
    /**
     * The list of Content Filters.
     */
    contentFilters?: pulumi.Input<pulumi.Input<RaiPolicyContentFilterArgs>[]>;
    /**
     * The list of custom Blocklist.
     */
    customBlocklists?: pulumi.Input<pulumi.Input<CustomBlocklistConfigArgs>[]>;
    /**
     * Rai policy mode. The enum value mapping is as below: Default = 0, Deferred=1, Blocking=2, Asynchronous_filter =3. Please use 'Asynchronous_filter' after 2024-10-01. It is the same as 'Deferred' in previous version.
     */
    mode?: pulumi.Input<string | enums.RaiPolicyMode>;
}

/**
 * The call rate limit Cognitive Services account.
 */
export interface RegionSettingArgs {
    /**
     * Maps the region to the regional custom subdomain.
     */
    customsubdomain?: pulumi.Input<string>;
    /**
     * Name of the region.
     */
    name?: pulumi.Input<string>;
    /**
     * A value for priority or weighted routing methods.
     */
    value?: pulumi.Input<number>;
}

export interface SASAuthTypeConnectionPropertiesArgs {
    /**
     * Authentication type of the connection target
     * Expected value is 'SAS'.
     */
    authType: pulumi.Input<"SAS">;
    /**
     * Category of the connection
     */
    category?: pulumi.Input<string | enums.ConnectionCategory>;
    credentials?: pulumi.Input<ConnectionSharedAccessSignatureArgs>;
    error?: pulumi.Input<string>;
    expiryTime?: pulumi.Input<string>;
    isSharedToAll?: pulumi.Input<boolean>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement>;
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[]>;
    target?: pulumi.Input<string>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean>;
}

export interface ServicePrincipalAuthTypeConnectionPropertiesArgs {
    /**
     * Authentication type of the connection target
     * Expected value is 'ServicePrincipal'.
     */
    authType: pulumi.Input<"ServicePrincipal">;
    /**
     * Category of the connection
     */
    category?: pulumi.Input<string | enums.ConnectionCategory>;
    credentials?: pulumi.Input<ConnectionServicePrincipalArgs>;
    error?: pulumi.Input<string>;
    expiryTime?: pulumi.Input<string>;
    isSharedToAll?: pulumi.Input<boolean>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement>;
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[]>;
    target?: pulumi.Input<string>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean>;
}

/**
 * The resource model definition representing SKU
 */
export interface SkuArgs {
    /**
     * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
     */
    capacity?: pulumi.Input<number>;
    /**
     * If the service has different generations of hardware, for the same SKU, then that can be captured here.
     */
    family?: pulumi.Input<string>;
    /**
     * The name of the SKU. Ex - P3. It is typically a letter+number code
     */
    name: pulumi.Input<string>;
    /**
     * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
     */
    size?: pulumi.Input<string>;
    /**
     * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
     */
    tier?: pulumi.Input<string | enums.SkuTier>;
}

/**
 * The user owned AML workspace for Cognitive Services account.
 */
export interface UserOwnedAmlWorkspaceArgs {
    /**
     * Identity Client id of a AML workspace resource.
     */
    identityClientId?: pulumi.Input<string>;
    /**
     * Full resource id of a AML workspace resource.
     */
    resourceId?: pulumi.Input<string>;
}

/**
 * The user owned storage for Cognitive Services account.
 */
export interface UserOwnedStorageArgs {
    identityClientId?: pulumi.Input<string>;
    /**
     * Full resource id of a Microsoft.Storage resource.
     */
    resourceId?: pulumi.Input<string>;
}

export interface UsernamePasswordAuthTypeConnectionPropertiesArgs {
    /**
     * Authentication type of the connection target
     * Expected value is 'UsernamePassword'.
     */
    authType: pulumi.Input<"UsernamePassword">;
    /**
     * Category of the connection
     */
    category?: pulumi.Input<string | enums.ConnectionCategory>;
    credentials?: pulumi.Input<ConnectionUsernamePasswordArgs>;
    error?: pulumi.Input<string>;
    expiryTime?: pulumi.Input<string>;
    isSharedToAll?: pulumi.Input<boolean>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement>;
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[]>;
    target?: pulumi.Input<string>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean>;
}

/**
 * A rule governing the accessibility from a specific virtual network.
 */
export interface VirtualNetworkRuleArgs {
    /**
     * Full resource id of a vnet subnet, such as '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'.
     */
    id: pulumi.Input<string>;
    /**
     * Ignore missing vnet service endpoint or not.
     */
    ignoreMissingVnetServiceEndpoint?: pulumi.Input<boolean>;
    /**
     * Gets the state of virtual network rule.
     */
    state?: pulumi.Input<string>;
}
