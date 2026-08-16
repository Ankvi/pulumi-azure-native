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
    category?: pulumi.Input<string | enums.ConnectionCategory | undefined>;
    /**
     * Provides the error message if the connection fails
     */
    error?: pulumi.Input<string | undefined>;
    expiryTime?: pulumi.Input<string | undefined>;
    isSharedToAll?: pulumi.Input<boolean | undefined>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Specifies how private endpoints are used with this connection: 'Required', 'NotRequired', or 'NotApplicable'.
     */
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement | undefined>;
    /**
     * Specifies the status of private endpoints for this connection: 'Inactive', 'Active', or 'NotApplicable'.
     */
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus | undefined>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The connection URL to be used.
     */
    target?: pulumi.Input<string | undefined>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean | undefined>;
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
    category?: pulumi.Input<string | enums.ConnectionCategory | undefined>;
    credentials?: pulumi.Input<ConnectionAccessKeyArgs | undefined>;
    /**
     * Provides the error message if the connection fails
     */
    error?: pulumi.Input<string | undefined>;
    expiryTime?: pulumi.Input<string | undefined>;
    isSharedToAll?: pulumi.Input<boolean | undefined>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Specifies how private endpoints are used with this connection: 'Required', 'NotRequired', or 'NotApplicable'.
     */
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement | undefined>;
    /**
     * Specifies the status of private endpoints for this connection: 'Inactive', 'Active', or 'NotApplicable'.
     */
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus | undefined>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The connection URL to be used.
     */
    target?: pulumi.Input<string | undefined>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean | undefined>;
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
    category?: pulumi.Input<string | enums.ConnectionCategory | undefined>;
    /**
     * Account key object for connection credential.
     */
    credentials?: pulumi.Input<ConnectionAccountKeyArgs | undefined>;
    /**
     * Provides the error message if the connection fails
     */
    error?: pulumi.Input<string | undefined>;
    expiryTime?: pulumi.Input<string | undefined>;
    isSharedToAll?: pulumi.Input<boolean | undefined>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Specifies how private endpoints are used with this connection: 'Required', 'NotRequired', or 'NotApplicable'.
     */
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement | undefined>;
    /**
     * Specifies the status of private endpoints for this connection: 'Inactive', 'Active', or 'NotApplicable'.
     */
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus | undefined>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The connection URL to be used.
     */
    target?: pulumi.Input<string | undefined>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean | undefined>;
}

/**
 * Properties of Cognitive Services account.
 */
export interface AccountPropertiesArgs {
    /**
     * Specifies whether this resource support project management as child resources, used as containers for access management, data isolation and cost in AI Foundry.
     */
    allowProjectManagement?: pulumi.Input<boolean | undefined>;
    allowedFqdnList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The user owned AML account properties.
     */
    amlWorkspace?: pulumi.Input<UserOwnedAmlWorkspaceArgs | undefined>;
    /**
     * The api properties for special APIs.
     */
    apiProperties?: pulumi.Input<ApiPropertiesArgs | undefined>;
    /**
     * Specifies the projects, by project name, that are associated with this resource.
     */
    associatedProjects?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Optional subdomain name used for token-based authentication.
     */
    customSubDomainName?: pulumi.Input<string | undefined>;
    /**
     * Specifies the project, by project name, that is targeted when data plane endpoints are called without a project parameter.
     */
    defaultProject?: pulumi.Input<string | undefined>;
    disableLocalAuth?: pulumi.Input<boolean | undefined>;
    /**
     * The flag to enable dynamic throttling.
     */
    dynamicThrottlingEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * The encryption properties for this resource.
     */
    encryption?: pulumi.Input<EncryptionArgs | undefined>;
    /**
     * The multiregion settings of Cognitive Services account.
     */
    locations?: pulumi.Input<MultiRegionSettingsArgs | undefined>;
    /**
     * Resource migration token.
     */
    migrationToken?: pulumi.Input<string | undefined>;
    /**
     * A collection of rules governing the accessibility from specific network locations.
     */
    networkAcls?: pulumi.Input<NetworkRuleSetArgs | undefined>;
    networkInjections?: pulumi.Input<pulumi.Input<NetworkInjectionArgs>[] | undefined>;
    /**
     * Whether or not public endpoint access is allowed for this account.
     */
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccess | undefined>;
    /**
     * Cognitive Services Rai Monitor Config.
     */
    raiMonitorConfig?: pulumi.Input<RaiMonitorConfigArgs | undefined>;
    restore?: pulumi.Input<boolean | undefined>;
    restrictOutboundNetworkAccess?: pulumi.Input<boolean | undefined>;
    /**
     * The storage accounts for this resource.
     */
    userOwnedStorage?: pulumi.Input<pulumi.Input<UserOwnedStorageArgs>[] | undefined>;
}
/**
 * accountPropertiesArgsProvideDefaults sets the appropriate defaults for AccountPropertiesArgs
 */
export function accountPropertiesArgsProvideDefaults(val: AccountPropertiesArgs): AccountPropertiesArgs {
    return {
        ...val,
        encryption: pulumi.output(val.encryption).apply(v => v === undefined ? undefined : encryptionArgsProvideDefaults(v)),
    };
}

/**
 * Type modeling the protocol and version used by an agent/exposed by a deployment.
 */
export interface AgentProtocolVersionArgs {
    /**
     * The protocol used by the agent/exposed by a deployment.
     */
    protocol?: pulumi.Input<string | enums.AgentProtocol | undefined>;
    /**
     * The version of the protocol.
     */
    version?: pulumi.Input<string | undefined>;
}

/**
 * Type modeling a reference to a version of an agent definition.
 */
export interface AgentReferencePropertiesArgs {
    /**
     * Gets the agent's unique identifier within the organization (subscription).
     */
    agentId?: pulumi.Input<string | undefined>;
    /**
     * Gets the agent's name (unique within the project/app).
     */
    agentName?: pulumi.Input<string | undefined>;
}

/**
 * Resource type representing an agentic application as a management construct.
 */
export interface AgenticApplicationPropertiesArgs {
    /**
     * The EntraId Agentic Blueprint of the application.
     */
    agentIdentityBlueprint?: pulumi.Input<AssignedIdentityArgs | undefined>;
    /**
     * The list of agent definitions comprising this application, returned as references to the objects under the parent project; use this to obtain a flat list of all agent-version pairs represented by this application.
     */
    agents?: pulumi.Input<pulumi.Input<AgentReferencePropertiesArgs>[] | undefined>;
    /**
     * Gets or sets the authorization policy associated with this agentic application instance.
     */
    authorizationPolicy?: pulumi.Input<ChannelsBuiltInAuthorizationPolicyArgs | OrganizationSharedBuiltInAuthorizationPolicyArgs | RoleBasedBuiltInAuthorizationPolicyArgs | undefined>;
    /**
     * The application's dedicated invocation endpoint.
     */
    baseUrl?: pulumi.Input<string | undefined>;
    /**
     * The (default) agent instance identity of the application.
     */
    defaultInstanceIdentity?: pulumi.Input<AssignedIdentityArgs | undefined>;
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * The display name of the application.
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Gets or sets the traffic routing policy for the application's deployments.
     */
    trafficRoutingPolicy?: pulumi.Input<ApplicationTrafficRoutingPolicyArgs | undefined>;
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
    category?: pulumi.Input<string | enums.ConnectionCategory | undefined>;
    /**
     * Api key object for connection credential.
     */
    credentials?: pulumi.Input<ConnectionApiKeyArgs | undefined>;
    /**
     * Provides the error message if the connection fails
     */
    error?: pulumi.Input<string | undefined>;
    expiryTime?: pulumi.Input<string | undefined>;
    isSharedToAll?: pulumi.Input<boolean | undefined>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Specifies how private endpoints are used with this connection: 'Required', 'NotRequired', or 'NotApplicable'.
     */
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement | undefined>;
    /**
     * Specifies the status of private endpoints for this connection: 'Inactive', 'Active', or 'NotApplicable'.
     */
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus | undefined>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The connection URL to be used.
     */
    target?: pulumi.Input<string | undefined>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean | undefined>;
}

/**
 * The api properties for special APIs.
 */
export interface ApiPropertiesArgs {
    /**
     * (Metrics Advisor Only) The Azure AD Client Id (Application Id).
     */
    aadClientId?: pulumi.Input<string | undefined>;
    /**
     * (Metrics Advisor Only) The Azure AD Tenant Id.
     */
    aadTenantId?: pulumi.Input<string | undefined>;
    /**
     * (Personalization Only) The flag to enable statistics of Bing Search.
     */
    eventHubConnectionString?: pulumi.Input<string | undefined>;
    /**
     * (QnAMaker Only) The Azure Search endpoint id of QnAMaker.
     */
    qnaAzureSearchEndpointId?: pulumi.Input<string | undefined>;
    /**
     * (QnAMaker Only) The Azure Search endpoint key of QnAMaker.
     */
    qnaAzureSearchEndpointKey?: pulumi.Input<string | undefined>;
    /**
     * (QnAMaker Only) The runtime endpoint of QnAMaker.
     */
    qnaRuntimeEndpoint?: pulumi.Input<string | undefined>;
    /**
     * (Bing Search Only) The flag to enable statistics of Bing Search.
     */
    statisticsEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * (Personalization Only) The storage account connection string.
     */
    storageAccountConnectionString?: pulumi.Input<string | undefined>;
    /**
     * (Metrics Advisor Only) The super user of Metrics Advisor.
     */
    superUser?: pulumi.Input<string | undefined>;
    /**
     * (Metrics Advisor Only) The website name of Metrics Advisor.
     */
    websiteName?: pulumi.Input<string | undefined>;
}

/**
 * Type representing an application traffic policy as a property of an agentic application.
 */
export interface ApplicationTrafficRoutingPolicyArgs {
    /**
     * Methodology used to route traffic to the application's deployments.
     */
    protocol?: pulumi.Input<string | enums.TrafficRoutingProtocol | undefined>;
    /**
     * Gets or sets the collection of traffic routing rules.
     */
    rules?: pulumi.Input<pulumi.Input<TrafficRoutingRuleArgs>[] | undefined>;
}

/**
 * Type representing an identity assignment
 */
export interface AssignedIdentityArgs {
    /**
     * The client ID of the identity.
     */
    clientId: pulumi.Input<string>;
    /**
     * Specifies the kind of Entra identity described by this object.
     */
    kind: pulumi.Input<string | enums.IdentityKind>;
    /**
     * The principal ID of the identity.
     */
    principalId: pulumi.Input<string>;
    /**
     * The subject of this identity assignment.
     */
    subject?: pulumi.Input<string | undefined>;
    /**
     * The tenant ID of the identity.
     */
    tenantId: pulumi.Input<string>;
    /**
     * Enumeration of identity types, from the perspective of management.
     */
    type: pulumi.Input<string | enums.IdentityManagementType>;
}

export interface CapabilityHostArgs {
    /**
     * List of AI services connections.
     */
    aiServicesConnections?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Kind of this capability host.
     */
    capabilityHostKind?: pulumi.Input<string | enums.CapabilityHostKind | undefined>;
    /**
     * Customer subnet info to help set up this capability host.
     */
    customerSubnet?: pulumi.Input<string | undefined>;
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * List of connection names from those available in the account or project to be used as a storage resource.
     */
    storageConnections?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * List of connection names from those available in the account or project to be used for Thread storage.
     */
    threadStorageConnections?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * List of connection names from those available in the account or project to be used for vector database (e.g. CosmosDB).
     */
    vectorStoreConnections?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Represents a built-in authorization policy specific to Azure Bot Service/Channels authentication.
 */
export interface ChannelsBuiltInAuthorizationPolicyArgs {
    /**
     * Authorization scheme type.
     * Expected value is 'Channels'.
     */
    type: pulumi.Input<"Channels">;
}

/**
 * Cognitive Services account commitment period.
 */
export interface CommitmentPeriodArgs {
    /**
     * Commitment period commitment count.
     */
    count?: pulumi.Input<number | undefined>;
    /**
     * Commitment period commitment tier.
     */
    tier?: pulumi.Input<string | undefined>;
}

/**
 * Properties of Cognitive Services account commitment plan.
 */
export interface CommitmentPlanPropertiesArgs {
    /**
     * AutoRenew commitment plan.
     */
    autoRenew?: pulumi.Input<boolean | undefined>;
    /**
     * Commitment plan guid.
     */
    commitmentPlanGuid?: pulumi.Input<string | undefined>;
    /**
     * Cognitive Services account commitment period.
     */
    current?: pulumi.Input<CommitmentPeriodArgs | undefined>;
    /**
     * Account hosting model.
     */
    hostingModel?: pulumi.Input<string | enums.HostingModel | undefined>;
    /**
     * Cognitive Services account commitment period.
     */
    next?: pulumi.Input<CommitmentPeriodArgs | undefined>;
    /**
     * Commitment plan type.
     */
    planType?: pulumi.Input<string | undefined>;
}

export interface ConnectionAccessKeyArgs {
    accessKeyId?: pulumi.Input<string | undefined>;
    secretAccessKey?: pulumi.Input<string | undefined>;
}

/**
 * Account key object for connection credential.
 */
export interface ConnectionAccountKeyArgs {
    key?: pulumi.Input<string | undefined>;
}

/**
 * Api key object for connection credential.
 */
export interface ConnectionApiKeyArgs {
    key?: pulumi.Input<string | undefined>;
}

export interface ConnectionManagedIdentityArgs {
    clientId?: pulumi.Input<string | undefined>;
    resourceId?: pulumi.Input<string | undefined>;
}

/**
 * ClientId and ClientSecret are required. Other properties are optional
 * depending on each OAuth2 provider's implementation.
 */
export interface ConnectionOAuth2Args {
    /**
     * Required by Concur connection category
     */
    authUrl?: pulumi.Input<string | undefined>;
    /**
     * Client id in the format of UUID
     */
    clientId?: pulumi.Input<string | undefined>;
    clientSecret?: pulumi.Input<string | undefined>;
    /**
     * Required by GoogleAdWords connection category
     */
    developerToken?: pulumi.Input<string | undefined>;
    password?: pulumi.Input<string | undefined>;
    /**
     * Required by GoogleBigQuery, GoogleAdWords, Hubspot, QuickBooks, Square, Xero, Zoho
     * where user needs to get RefreshToken offline
     */
    refreshToken?: pulumi.Input<string | undefined>;
    /**
     * Required by QuickBooks and Xero connection categories
     */
    tenantId?: pulumi.Input<string | undefined>;
    /**
     * Concur, ServiceNow auth server AccessToken grant type is 'Password'
     * which requires UsernamePassword
     */
    username?: pulumi.Input<string | undefined>;
}

export interface ConnectionPersonalAccessTokenArgs {
    pat?: pulumi.Input<string | undefined>;
}

export interface ConnectionServicePrincipalArgs {
    clientId?: pulumi.Input<string | undefined>;
    clientSecret?: pulumi.Input<string | undefined>;
    tenantId?: pulumi.Input<string | undefined>;
}

export interface ConnectionSharedAccessSignatureArgs {
    sas?: pulumi.Input<string | undefined>;
}

export interface ConnectionUsernamePasswordArgs {
    password?: pulumi.Input<string | undefined>;
    /**
     * Optional, required by connections like SalesForce for extra security in addition to UsernamePassword
     */
    securityToken?: pulumi.Input<string | undefined>;
    username?: pulumi.Input<string | undefined>;
}

/**
 * Gets or sets the source to which filter applies.
 */
export interface CustomBlocklistConfigArgs {
    /**
     * If blocking would occur.
     */
    blocking?: pulumi.Input<boolean | undefined>;
    /**
     * Name of ContentFilter.
     */
    blocklistName?: pulumi.Input<string | undefined>;
    /**
     * Content source to apply the Content Filters.
     */
    source?: pulumi.Input<string | enums.RaiPolicyContentSource | undefined>;
}

/**
 * Custom Keys credential object
 */
export interface CustomKeysArgs {
    keys?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
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
    category?: pulumi.Input<string | enums.ConnectionCategory | undefined>;
    /**
     * Custom Keys credential object
     */
    credentials?: pulumi.Input<CustomKeysArgs | undefined>;
    /**
     * Provides the error message if the connection fails
     */
    error?: pulumi.Input<string | undefined>;
    expiryTime?: pulumi.Input<string | undefined>;
    isSharedToAll?: pulumi.Input<boolean | undefined>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Specifies how private endpoints are used with this connection: 'Required', 'NotRequired', or 'NotApplicable'.
     */
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement | undefined>;
    /**
     * Specifies the status of private endpoints for this connection: 'Inactive', 'Active', or 'NotApplicable'.
     */
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus | undefined>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The connection URL to be used.
     */
    target?: pulumi.Input<string | undefined>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean | undefined>;
}

/**
 * Internal use only.
 */
export interface DeploymentCapacitySettingsArgs {
    /**
     * The designated capacity.
     */
    designatedCapacity?: pulumi.Input<number | undefined>;
    /**
     * The priority of this capacity setting.
     */
    priority?: pulumi.Input<number | undefined>;
}

/**
 * Properties of Cognitive Services account deployment model.
 */
export interface DeploymentModelArgs {
    /**
     * Deployment model format.
     */
    format?: pulumi.Input<string | undefined>;
    /**
     * Deployment model name.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Deployment model publisher.
     */
    publisher?: pulumi.Input<string | undefined>;
    /**
     * Optional. Deployment model source ARM resource ID.
     */
    source?: pulumi.Input<string | undefined>;
    /**
     * Optional. Source of the model, another Microsoft.CognitiveServices accounts ARM resource ID.
     */
    sourceAccount?: pulumi.Input<string | undefined>;
    /**
     * Optional. Deployment model version. If version is not specified, a default version will be assigned. The default version is different for different models and might change when there is new version available for a model. Default version for a model could be found from list models API.
     */
    version?: pulumi.Input<string | undefined>;
}

/**
 * Properties of Cognitive Services account deployment.
 */
export interface DeploymentPropertiesArgs {
    /**
     * Internal use only.
     */
    capacitySettings?: pulumi.Input<DeploymentCapacitySettingsArgs | undefined>;
    /**
     * The current capacity.
     */
    currentCapacity?: pulumi.Input<number | undefined>;
    /**
     * Properties of Cognitive Services account deployment model.
     */
    model?: pulumi.Input<DeploymentModelArgs | undefined>;
    /**
     * The name of parent deployment.
     */
    parentDeploymentName?: pulumi.Input<string | undefined>;
    /**
     * The name of RAI policy.
     */
    raiPolicyName?: pulumi.Input<string | undefined>;
    /**
     * Properties of Cognitive Services account deployment model. (Deprecated, please use Deployment.sku instead.)
     */
    scaleSettings?: pulumi.Input<DeploymentScaleSettingsArgs | undefined>;
    /**
     * Specifies the deployment name that should serve requests when the request would have otherwise been throttled due to reaching current deployment throughput limit.
     */
    spilloverDeploymentName?: pulumi.Input<string | undefined>;
    /**
     * Deployment model version upgrade option.
     */
    versionUpgradeOption?: pulumi.Input<string | enums.DeploymentModelVersionUpgradeOption | undefined>;
}

/**
 * Properties of Cognitive Services account deployment model. (Deprecated, please use Deployment.sku instead.)
 */
export interface DeploymentScaleSettingsArgs {
    /**
     * Deployment capacity.
     */
    capacity?: pulumi.Input<number | undefined>;
    /**
     * Deployment scale type.
     */
    scaleType?: pulumi.Input<string | enums.DeploymentScaleType | undefined>;
}

/**
 * Properties to configure Encryption
 */
export interface EncryptionArgs {
    /**
     * Enumerates the possible value of keySource for Encryption
     */
    keySource?: pulumi.Input<string | enums.KeySource | undefined>;
    /**
     * Properties of KeyVault
     */
    keyVaultProperties?: pulumi.Input<KeyVaultPropertiesArgs | undefined>;
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
    keySource?: pulumi.Input<string | enums.KeySource | undefined>;
    /**
     * Properties of KeyVault
     */
    keyVaultProperties?: pulumi.Input<KeyVaultPropertiesArgs | undefined>;
    /**
     * The encryptionScope state.
     */
    state?: pulumi.Input<string | enums.EncryptionScopeState | undefined>;
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
 * FQDN Outbound Rule for the managed network of a cognitive services account.
 */
export interface FqdnOutboundRuleArgs {
    /**
     * Category of a managed network Outbound Rule of a cognitive services account.
     */
    category?: pulumi.Input<string | enums.RuleCategory | undefined>;
    destination?: pulumi.Input<string | undefined>;
    /**
     * Type of a managed network Outbound Rule of a cognitive services account.
     */
    status?: pulumi.Input<string | enums.RuleStatus | undefined>;
    /**
     * Type of a managed network Outbound Rule of a cognitive services account.
     * Expected value is 'FQDN'.
     */
    type: pulumi.Input<"FQDN">;
}

/**
 * Represents a hosted agent deployment where the underlying infrastructure is owned by the platform.
 */
export interface HostedAgentDeploymentArgs {
    /**
     * Returns a flat list of agent:version deployed in this deployment.
     */
    agents?: pulumi.Input<pulumi.Input<VersionedAgentReferenceArgs>[] | undefined>;
    /**
     * Gets or sets the unique identifier of the deployment.
     */
    deploymentId?: pulumi.Input<string | undefined>;
    /**
     * Specifies the type of deployment for an agent, indicating how the underlying compute and network infrastructure is managed.
     * Expected value is 'Hosted'.
     */
    deploymentType: pulumi.Input<"Hosted">;
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the display name of the deployment.
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the maximum number of replicas for this hosted deployment.
     */
    maxReplicas?: pulumi.Input<number | undefined>;
    /**
     * Gets or sets the minimum number of replicas for this hosted deployment.
     */
    minReplicas?: pulumi.Input<number | undefined>;
    /**
     * Gets or sets the supported protocol types and versions exposed by this deployment.
     */
    protocols?: pulumi.Input<pulumi.Input<AgentProtocolVersionArgs>[] | undefined>;
    /**
     * Gets or sets the current operational state of the deployment (and, intrinsically, of the comprising agents).
     */
    state?: pulumi.Input<string | enums.AgentDeploymentState | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}

/**
 * Identity for the resource.
 */
export interface IdentityArgs {
    /**
     * The identity type.
     */
    type?: pulumi.Input<enums.ResourceIdentityType | undefined>;
    /**
     * The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
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
    identityClientId?: pulumi.Input<string | undefined>;
    /**
     * Name of the Key from KeyVault
     */
    keyName?: pulumi.Input<string | undefined>;
    /**
     * Uri of KeyVault
     */
    keyVaultUri?: pulumi.Input<string | undefined>;
    /**
     * Version of the Key from KeyVault
     */
    keyVersion?: pulumi.Input<string | undefined>;
}

/**
 * Represents a managed agent deployment where the underlying infrastructure is managed by the platform in the deployer's subscription.
 */
export interface ManagedAgentDeploymentArgs {
    /**
     * Returns a flat list of agent:version deployed in this deployment.
     */
    agents?: pulumi.Input<pulumi.Input<VersionedAgentReferenceArgs>[] | undefined>;
    /**
     * Gets or sets the unique identifier of the deployment.
     */
    deploymentId?: pulumi.Input<string | undefined>;
    /**
     * Specifies the type of deployment for an agent, indicating how the underlying compute and network infrastructure is managed.
     * Expected value is 'Managed'.
     */
    deploymentType: pulumi.Input<"Managed">;
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the display name of the deployment.
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the supported protocol types and versions exposed by this deployment.
     */
    protocols?: pulumi.Input<pulumi.Input<AgentProtocolVersionArgs>[] | undefined>;
    /**
     * Gets or sets the current operational state of the deployment (and, intrinsically, of the comprising agents).
     */
    state?: pulumi.Input<string | enums.AgentDeploymentState | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
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
    category?: pulumi.Input<string | enums.ConnectionCategory | undefined>;
    credentials?: pulumi.Input<ConnectionManagedIdentityArgs | undefined>;
    /**
     * Provides the error message if the connection fails
     */
    error?: pulumi.Input<string | undefined>;
    expiryTime?: pulumi.Input<string | undefined>;
    isSharedToAll?: pulumi.Input<boolean | undefined>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Specifies how private endpoints are used with this connection: 'Required', 'NotRequired', or 'NotApplicable'.
     */
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement | undefined>;
    /**
     * Specifies the status of private endpoints for this connection: 'Inactive', 'Active', or 'NotApplicable'.
     */
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus | undefined>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The connection URL to be used.
     */
    target?: pulumi.Input<string | undefined>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean | undefined>;
}

/**
 * Status of the Provisioning for the managed network of a cognitive services account.
 */
export interface ManagedNetworkProvisionStatusArgs {
    /**
     * Status for the managed network of a cognitive services account.
     */
    status?: pulumi.Input<string | enums.ManagedNetworkStatus | undefined>;
}

export interface ManagedNetworkSettingsExArgs {
    /**
     * Firewall Sku used for FQDN Rules
     */
    firewallSku?: pulumi.Input<string | enums.FirewallSku | undefined>;
    /**
     * Isolation mode for the managed network of a cognitive services account.
     */
    isolationMode?: pulumi.Input<string | enums.IsolationMode | undefined>;
    /**
     * The Kind of the managed network. Users can switch from V1 to V2 for granular access controls, but cannot switch back to V1 once V2 is enabled.
     */
    managedNetworkKind?: pulumi.Input<string | enums.ManagedNetworkKind | undefined>;
    /**
     * Dictionary of <OutboundRule>
     */
    outboundRules?: pulumi.Input<{[key: string]: pulumi.Input<FqdnOutboundRuleArgs | PrivateEndpointOutboundRuleArgs | ServiceTagOutboundRuleArgs>} | undefined>;
    /**
     * Status of the Provisioning for the managed network of a cognitive services account.
     */
    status?: pulumi.Input<ManagedNetworkProvisionStatusArgs | undefined>;
}

/**
 * The properties of the managed network settings of a cognitive services account.
 */
export interface ManagedNetworkSettingsPropertiesArgs {
    /**
     * Managed Network settings for a cognitive services account.
     */
    managedNetwork?: pulumi.Input<ManagedNetworkSettingsExArgs | undefined>;
}

/**
 * The multiregion settings Cognitive Services account.
 */
export interface MultiRegionSettingsArgs {
    regions?: pulumi.Input<pulumi.Input<RegionSettingArgs>[] | undefined>;
    /**
     * Multiregion routing methods.
     */
    routingMethod?: pulumi.Input<string | enums.RoutingMethods | undefined>;
}

/**
 * Specifies in AI Foundry where virtual network injection occurs to secure scenarios like Agents entirely within the user's private network, eliminating public internet exposure while maintaining control over network configurations and resources.
 */
export interface NetworkInjectionArgs {
    /**
     * Specifies what features in AI Foundry network injection applies to. Currently only supports 'agent' for agent scenarios. 'none' means no network injection.
     */
    scenario?: pulumi.Input<string | enums.ScenarioType | undefined>;
    /**
     * Specify the subnet for which your Agent Client is injected into.
     */
    subnetArmId?: pulumi.Input<string | undefined>;
    /**
     * Boolean to enable Microsoft Managed Network for subnet delegation
     */
    useMicrosoftManagedNetwork?: pulumi.Input<boolean | undefined>;
}

/**
 * A set of rules governing the network accessibility.
 */
export interface NetworkRuleSetArgs {
    /**
     * Setting for trusted services.
     */
    bypass?: pulumi.Input<string | enums.ByPassSelection | undefined>;
    /**
     * The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated.
     */
    defaultAction?: pulumi.Input<string | enums.NetworkRuleAction | undefined>;
    /**
     * The list of IP address rules.
     */
    ipRules?: pulumi.Input<pulumi.Input<IpRuleArgs>[] | undefined>;
    /**
     * The list of virtual network rules.
     */
    virtualNetworkRules?: pulumi.Input<pulumi.Input<VirtualNetworkRuleArgs>[] | undefined>;
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
    category?: pulumi.Input<string | enums.ConnectionCategory | undefined>;
    /**
     * Provides the error message if the connection fails
     */
    error?: pulumi.Input<string | undefined>;
    expiryTime?: pulumi.Input<string | undefined>;
    isSharedToAll?: pulumi.Input<boolean | undefined>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Specifies how private endpoints are used with this connection: 'Required', 'NotRequired', or 'NotApplicable'.
     */
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement | undefined>;
    /**
     * Specifies the status of private endpoints for this connection: 'Inactive', 'Active', or 'NotApplicable'.
     */
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus | undefined>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The connection URL to be used.
     */
    target?: pulumi.Input<string | undefined>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean | undefined>;
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
    category?: pulumi.Input<string | enums.ConnectionCategory | undefined>;
    /**
     * ClientId and ClientSecret are required. Other properties are optional
     * depending on each OAuth2 provider's implementation.
     */
    credentials?: pulumi.Input<ConnectionOAuth2Args | undefined>;
    /**
     * Provides the error message if the connection fails
     */
    error?: pulumi.Input<string | undefined>;
    expiryTime?: pulumi.Input<string | undefined>;
    isSharedToAll?: pulumi.Input<boolean | undefined>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Specifies how private endpoints are used with this connection: 'Required', 'NotRequired', or 'NotApplicable'.
     */
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement | undefined>;
    /**
     * Specifies the status of private endpoints for this connection: 'Inactive', 'Active', or 'NotApplicable'.
     */
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus | undefined>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The connection URL to be used.
     */
    target?: pulumi.Input<string | undefined>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean | undefined>;
}

/**
 * Built-in authorization policy scoped to organization/tenant.
 */
export interface OrganizationSharedBuiltInAuthorizationPolicyArgs {
    /**
     * Authorization scheme type.
     * Expected value is 'OrganizationScope'.
     */
    type: pulumi.Input<"OrganizationScope">;
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
    category?: pulumi.Input<string | enums.ConnectionCategory | undefined>;
    credentials?: pulumi.Input<ConnectionPersonalAccessTokenArgs | undefined>;
    /**
     * Provides the error message if the connection fails
     */
    error?: pulumi.Input<string | undefined>;
    expiryTime?: pulumi.Input<string | undefined>;
    isSharedToAll?: pulumi.Input<boolean | undefined>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Specifies how private endpoints are used with this connection: 'Required', 'NotRequired', or 'NotApplicable'.
     */
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement | undefined>;
    /**
     * Specifies the status of private endpoints for this connection: 'Inactive', 'Active', or 'NotApplicable'.
     */
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus | undefined>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The connection URL to be used.
     */
    target?: pulumi.Input<string | undefined>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean | undefined>;
}

/**
 * Properties of the PrivateEndpointConnectProperties.
 */
export interface PrivateEndpointConnectionPropertiesArgs {
    /**
     * The private link resource group ids.
     */
    groupIds?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    privateLinkServiceConnectionState: pulumi.Input<PrivateLinkServiceConnectionStateArgs>;
}

/**
 * Private Endpoint outbound rule for the managed network of a cognitive services account.
 */
export interface PrivateEndpointOutboundRuleArgs {
    /**
     * Category of a managed network Outbound Rule of a cognitive services account.
     */
    category?: pulumi.Input<string | enums.RuleCategory | undefined>;
    /**
     * Private Endpoint destination.
     */
    destination?: pulumi.Input<PrivateEndpointOutboundRuleDestinationArgs | undefined>;
    /**
     * List of FQDNs associated with the private endpoint outbound rule.
     */
    fqdns?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Type of a managed network Outbound Rule of a cognitive services account.
     */
    status?: pulumi.Input<string | enums.RuleStatus | undefined>;
    /**
     * Type of a managed network Outbound Rule of a cognitive services account.
     * Expected value is 'PrivateEndpoint'.
     */
    type: pulumi.Input<"PrivateEndpoint">;
}

/**
 * Private Endpoint destination for an outbound rule.
 */
export interface PrivateEndpointOutboundRuleDestinationArgs {
    /**
     * The Azure resource ID of the target private endpoint service.
     */
    serviceResourceId?: pulumi.Input<string | undefined>;
    /**
     * The subresource of the target service to connect to.
     */
    subresourceTarget?: pulumi.Input<string | undefined>;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: pulumi.Input<string | undefined>;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus | undefined>;
}

export interface ProjectCapabilityHostArgs {
    /**
     * List of AI services connections.
     */
    aiServicesConnections?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * List of connection names from those available in the account or project to be used as a storage resource.
     */
    storageConnections?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * List of connection names from those available in the account or project to be used for Thread storage.
     */
    threadStorageConnections?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * List of connection names from those available in the account or project to be used for vector database (e.g. CosmosDB).
     */
    vectorStoreConnections?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Properties of Cognitive Services Project'.
 */
export interface ProjectPropertiesArgs {
    /**
     * The description of the Cognitive Services Project.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * The display name of the Cognitive Services Project.
     */
    displayName?: pulumi.Input<string | undefined>;
}

/**
 * RAI Custom Blocklist Item properties.
 */
export interface RaiBlocklistItemPropertiesArgs {
    /**
     * If the pattern is a regex pattern.
     */
    isRegex?: pulumi.Input<boolean | undefined>;
    /**
     * Pattern to match against.
     */
    pattern?: pulumi.Input<string | undefined>;
}

/**
 * RAI Custom Blocklist properties.
 */
export interface RaiBlocklistPropertiesArgs {
    /**
     * Description of the block list.
     */
    description?: pulumi.Input<string | undefined>;
}

/**
 * RAI External SafetyProvider schema properties.
 */
export interface RaiExternalSafetyProviderSchemaPropertiesArgs {
    /**
     * The Key Vault URI that contains the api key for safety provider urls.
     */
    keyVaultUri?: pulumi.Input<string | undefined>;
    /**
     * The managed identity to access the Key Vault.
     */
    managedIdentity?: pulumi.Input<string | undefined>;
    /**
     * Safety provider mode sync/async.
     */
    mode?: pulumi.Input<string | undefined>;
    /**
     * The unique identifier of the safety provider.
     */
    providerId?: pulumi.Input<string | undefined>;
    /**
     * Name of the safety provider.
     */
    providerName?: pulumi.Input<string | undefined>;
    /**
     * The name of the secret in Key Vault that contains the api key to access the webhook.
     */
    secretName?: pulumi.Input<string | undefined>;
    /**
     * Webhook URL for the safety provider.
     */
    url?: pulumi.Input<string | undefined>;
}

/**
 * Cognitive Services Rai Monitor Config.
 */
export interface RaiMonitorConfigArgs {
    /**
     * The storage resource Id.
     */
    adxStorageResourceId?: pulumi.Input<string | undefined>;
    /**
     * The identity client Id to access the storage.
     */
    identityClientId?: pulumi.Input<string | undefined>;
}

/**
 * Azure OpenAI Content Filter.
 */
export interface RaiPolicyContentFilterArgs {
    /**
     * The action types to apply to the content filters
     */
    action?: pulumi.Input<string | enums.RaiActionType | undefined>;
    /**
     * If blocking would occur.
     */
    blocking?: pulumi.Input<boolean | undefined>;
    /**
     * If the ContentFilter is enabled.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * Name of ContentFilter.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Level at which content is filtered.
     */
    severityThreshold?: pulumi.Input<string | enums.ContentLevel | undefined>;
    /**
     * Content source to apply the Content Filters.
     */
    source?: pulumi.Input<string | enums.RaiPolicyContentSource | undefined>;
}

/**
 * Azure OpenAI Content Filters properties.
 */
export interface RaiPolicyPropertiesArgs {
    /**
     * Name of Rai policy.
     */
    basePolicyName?: pulumi.Input<string | undefined>;
    /**
     * The list of Content Filters.
     */
    contentFilters?: pulumi.Input<pulumi.Input<RaiPolicyContentFilterArgs>[] | undefined>;
    /**
     * The list of custom Blocklist.
     */
    customBlocklists?: pulumi.Input<pulumi.Input<CustomBlocklistConfigArgs>[] | undefined>;
    /**
     * Rai policy mode. The enum value mapping is as below: Default = 0, Deferred=1, Blocking=2, Asynchronous_filter =3. Please use 'Asynchronous_filter' after 2025-06-01. It is the same as 'Deferred' in previous version.
     */
    mode?: pulumi.Input<string | enums.RaiPolicyMode | undefined>;
    /**
     * The list of Safety Providers.
     */
    safetyProviders?: pulumi.Input<pulumi.Input<SafetyProviderConfigArgs>[] | undefined>;
}

/**
 * RAI Tool Label properties.
 */
export interface RaiToolLabelPropertiesArgs {
    /**
     * Account-level tool label definition.
     */
    accountScope?: pulumi.Input<RaiToolLabelPropertiesAccountScopeArgs | undefined>;
    /**
     * List of project-level tool label definitions.
     */
    projectScopes?: pulumi.Input<pulumi.Input<RaiToolLabelPropertiesProjectScopesItemArgs>[] | undefined>;
    /**
     * The unique tool connection name, e.g., 'Web_Search'.
     */
    toolConnectionName: pulumi.Input<string>;
}

/**
 * Account-level tool label definition.
 */
export interface RaiToolLabelPropertiesAccountScopeArgs {
    /**
     * Dictionary of label key-value pairs for the account scope.
     */
    labelValues?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}

export interface RaiToolLabelPropertiesProjectScopesItemArgs {
    /**
     * Dictionary of label key-value pairs for the project scope.
     */
    labelValues: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Project name to which this scope applies.
     */
    project: pulumi.Input<string>;
}

/**
 * RAI Custom Topic properties.
 */
export interface RaiTopicPropertiesArgs {
    /**
     * Creation time of the custom topic.
     */
    createdAt?: pulumi.Input<string | undefined>;
    /**
     * Description of the custom topic.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Failed reason if the status is Failed.
     */
    failedReason?: pulumi.Input<string | undefined>;
    /**
     * Last modified time of the custom topic.
     */
    lastModifiedAt?: pulumi.Input<string | undefined>;
    /**
     * Sample blob url for the custom topic.
     */
    sampleBlobUrl?: pulumi.Input<string | undefined>;
    /**
     * Status of the custom topic.
     */
    status?: pulumi.Input<string | undefined>;
    /**
     * The unique identifier of the custom topic.
     */
    topicId?: pulumi.Input<string | undefined>;
    /**
     * The name of the custom topic.
     */
    topicName?: pulumi.Input<string | undefined>;
}

/**
 * The call rate limit Cognitive Services account.
 */
export interface RegionSettingArgs {
    /**
     * Maps the region to the regional custom subdomain.
     */
    customsubdomain?: pulumi.Input<string | undefined>;
    /**
     * Name of the region.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * A value for priority or weighted routing methods.
     */
    value?: pulumi.Input<number | undefined>;
}

/**
 * Built-in role-based authorization policy.
 */
export interface RoleBasedBuiltInAuthorizationPolicyArgs {
    /**
     * Authorization scheme type.
     * Expected value is 'Default'.
     */
    type: pulumi.Input<"Default">;
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
    category?: pulumi.Input<string | enums.ConnectionCategory | undefined>;
    credentials?: pulumi.Input<ConnectionSharedAccessSignatureArgs | undefined>;
    /**
     * Provides the error message if the connection fails
     */
    error?: pulumi.Input<string | undefined>;
    expiryTime?: pulumi.Input<string | undefined>;
    isSharedToAll?: pulumi.Input<boolean | undefined>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Specifies how private endpoints are used with this connection: 'Required', 'NotRequired', or 'NotApplicable'.
     */
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement | undefined>;
    /**
     * Specifies the status of private endpoints for this connection: 'Inactive', 'Active', or 'NotApplicable'.
     */
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus | undefined>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The connection URL to be used.
     */
    target?: pulumi.Input<string | undefined>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean | undefined>;
}

/**
 * Gets or sets the source to which safety providers applies.
 */
export interface SafetyProviderConfigArgs {
    /**
     * If blocking would occur.
     */
    blocking?: pulumi.Input<boolean | undefined>;
    /**
     * Name of RAI Safety Provider.
     */
    safetyProviderName?: pulumi.Input<string | undefined>;
    /**
     * Content source to apply the Content Filters.
     */
    source?: pulumi.Input<string | enums.RaiPolicyContentSource | undefined>;
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
    category?: pulumi.Input<string | enums.ConnectionCategory | undefined>;
    credentials?: pulumi.Input<ConnectionServicePrincipalArgs | undefined>;
    /**
     * Provides the error message if the connection fails
     */
    error?: pulumi.Input<string | undefined>;
    expiryTime?: pulumi.Input<string | undefined>;
    isSharedToAll?: pulumi.Input<boolean | undefined>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Specifies how private endpoints are used with this connection: 'Required', 'NotRequired', or 'NotApplicable'.
     */
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement | undefined>;
    /**
     * Specifies the status of private endpoints for this connection: 'Inactive', 'Active', or 'NotApplicable'.
     */
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus | undefined>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The connection URL to be used.
     */
    target?: pulumi.Input<string | undefined>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean | undefined>;
}

/**
 * Service Tag outbound rule for the managed network of a cognitive services account.
 */
export interface ServiceTagOutboundRuleArgs {
    /**
     * Category of a managed network Outbound Rule of a cognitive services account.
     */
    category?: pulumi.Input<string | enums.RuleCategory | undefined>;
    /**
     * Service Tag destination.
     */
    destination?: pulumi.Input<ServiceTagOutboundRuleDestinationArgs | undefined>;
    /**
     * Type of a managed network Outbound Rule of a cognitive services account.
     */
    status?: pulumi.Input<string | enums.RuleStatus | undefined>;
    /**
     * Type of a managed network Outbound Rule of a cognitive services account.
     * Expected value is 'ServiceTag'.
     */
    type: pulumi.Input<"ServiceTag">;
}

/**
 * Service Tag destination for an outbound rule.
 */
export interface ServiceTagOutboundRuleDestinationArgs {
    /**
     * The action for the service tag outbound rule.
     */
    action?: pulumi.Input<string | enums.RuleAction | undefined>;
    /**
     * Optional address prefixes. If provided, the serviceTag property will be ignored.
     */
    addressPrefixes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Destination port ranges.
     */
    portRanges?: pulumi.Input<string | undefined>;
    /**
     * Network protocol used by the service tag rule.
     */
    protocol?: pulumi.Input<string | undefined>;
    /**
     * Name of the Azure service tag to target.
     */
    serviceTag?: pulumi.Input<string | undefined>;
}

/**
 * The resource model definition representing SKU
 */
export interface SkuArgs {
    /**
     * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
     */
    capacity?: pulumi.Input<number | undefined>;
    /**
     * If the service has different generations of hardware, for the same SKU, then that can be captured here.
     */
    family?: pulumi.Input<string | undefined>;
    /**
     * The name of the SKU. Ex - P3. It is typically a letter+number code
     */
    name: pulumi.Input<string>;
    /**
     * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
     */
    size?: pulumi.Input<string | undefined>;
    /**
     * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
     */
    tier?: pulumi.Input<string | enums.SkuTier | undefined>;
}

/**
 * Represents a rule for routing traffic to a specific deployment.
 */
export interface TrafficRoutingRuleArgs {
    /**
     * The unique identifier of the deployment to which traffic is routed by this rule.
     */
    deploymentId?: pulumi.Input<string | undefined>;
    /**
     * A user-provided description for this traffic routing rule.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * The identifier of this traffic routing rule.
     */
    ruleId?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the percentage of traffic allocated to this instance.
     */
    trafficPercentage?: pulumi.Input<number | undefined>;
}

/**
 * The user owned AML account for Cognitive Services account.
 */
export interface UserOwnedAmlWorkspaceArgs {
    /**
     * Identity Client id of a AML account resource.
     */
    identityClientId?: pulumi.Input<string | undefined>;
    /**
     * Full resource id of a AML account resource.
     */
    resourceId?: pulumi.Input<string | undefined>;
}

/**
 * The user owned storage for Cognitive Services account.
 */
export interface UserOwnedStorageArgs {
    identityClientId?: pulumi.Input<string | undefined>;
    /**
     * Full resource id of a Microsoft.Storage resource.
     */
    resourceId?: pulumi.Input<string | undefined>;
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
    category?: pulumi.Input<string | enums.ConnectionCategory | undefined>;
    credentials?: pulumi.Input<ConnectionUsernamePasswordArgs | undefined>;
    /**
     * Provides the error message if the connection fails
     */
    error?: pulumi.Input<string | undefined>;
    expiryTime?: pulumi.Input<string | undefined>;
    isSharedToAll?: pulumi.Input<boolean | undefined>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Specifies how private endpoints are used with this connection: 'Required', 'NotRequired', or 'NotApplicable'.
     */
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement | undefined>;
    /**
     * Specifies the status of private endpoints for this connection: 'Inactive', 'Active', or 'NotApplicable'.
     */
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus | undefined>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The connection URL to be used.
     */
    target?: pulumi.Input<string | undefined>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean | undefined>;
}

/**
 * Type modeling a reference to a version of an agent definition.
 */
export interface VersionedAgentReferenceArgs {
    /**
     * Gets the agent's unique identifier within the organization (subscription).
     */
    agentId?: pulumi.Input<string | undefined>;
    /**
     * Gets the agent's name (unique within the project/app).
     */
    agentName?: pulumi.Input<string | undefined>;
    /**
     * Gets the agent's version (unique for each agent lineage).
     */
    agentVersion?: pulumi.Input<string | undefined>;
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
    ignoreMissingVnetServiceEndpoint?: pulumi.Input<boolean | undefined>;
    /**
     * Gets the state of virtual network rule.
     */
    state?: pulumi.Input<string | undefined>;
}
