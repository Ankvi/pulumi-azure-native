import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * This connection type covers the AAD auth for any applicable Azure service
 */
export interface AADAuthTypeConnectionPropertiesResponse {
    /**
     * Authentication type of the connection target
     * Expected value is 'AAD'.
     */
    authType: "AAD";
    /**
     * Category of the connection
     */
    category?: string;
    createdByWorkspaceArmId: string;
    /**
     * Provides the error message if the connection fails
     */
    error?: string;
    expiryTime?: string;
    /**
     * Group based on connection category
     */
    group: string;
    isSharedToAll?: boolean;
    /**
     * Store user metadata for this connection
     */
    metadata?: {[key: string]: string};
    /**
     * Specifies how private endpoints are used with this connection: 'Required', 'NotRequired', or 'NotApplicable'.
     */
    peRequirement?: string;
    /**
     * Specifies the status of private endpoints for this connection: 'Inactive', 'Active', or 'NotApplicable'.
     */
    peStatus?: string;
    sharedUserList?: string[];
    /**
     * The connection URL to be used.
     */
    target?: string;
    useWorkspaceManagedIdentity?: boolean;
}

/**
 * The abuse penalty.
 */
export interface AbusePenaltyResponse {
    /**
     * The action of AbusePenalty.
     */
    action?: string;
    /**
     * The datetime of expiration of the AbusePenalty.
     */
    expiration?: string;
    /**
     * The percentage of rate limit.
     */
    rateLimitPercentage?: number;
}

export interface AccessKeyAuthTypeConnectionPropertiesResponse {
    /**
     * Authentication type of the connection target
     * Expected value is 'AccessKey'.
     */
    authType: "AccessKey";
    /**
     * Category of the connection
     */
    category?: string;
    createdByWorkspaceArmId: string;
    credentials?: ConnectionAccessKeyResponse;
    /**
     * Provides the error message if the connection fails
     */
    error?: string;
    expiryTime?: string;
    /**
     * Group based on connection category
     */
    group: string;
    isSharedToAll?: boolean;
    /**
     * Store user metadata for this connection
     */
    metadata?: {[key: string]: string};
    /**
     * Specifies how private endpoints are used with this connection: 'Required', 'NotRequired', or 'NotApplicable'.
     */
    peRequirement?: string;
    /**
     * Specifies the status of private endpoints for this connection: 'Inactive', 'Active', or 'NotApplicable'.
     */
    peStatus?: string;
    sharedUserList?: string[];
    /**
     * The connection URL to be used.
     */
    target?: string;
    useWorkspaceManagedIdentity?: boolean;
}

/**
 * This connection type covers the account key connection for Azure storage
 */
export interface AccountKeyAuthTypeConnectionPropertiesResponse {
    /**
     * Authentication type of the connection target
     * Expected value is 'AccountKey'.
     */
    authType: "AccountKey";
    /**
     * Category of the connection
     */
    category?: string;
    createdByWorkspaceArmId: string;
    /**
     * Account key object for connection credential.
     */
    credentials?: ConnectionAccountKeyResponse;
    /**
     * Provides the error message if the connection fails
     */
    error?: string;
    expiryTime?: string;
    /**
     * Group based on connection category
     */
    group: string;
    isSharedToAll?: boolean;
    /**
     * Store user metadata for this connection
     */
    metadata?: {[key: string]: string};
    /**
     * Specifies how private endpoints are used with this connection: 'Required', 'NotRequired', or 'NotApplicable'.
     */
    peRequirement?: string;
    /**
     * Specifies the status of private endpoints for this connection: 'Inactive', 'Active', or 'NotApplicable'.
     */
    peStatus?: string;
    sharedUserList?: string[];
    /**
     * The connection URL to be used.
     */
    target?: string;
    useWorkspaceManagedIdentity?: boolean;
}

/**
 * Properties of Cognitive Services account.
 */
export interface AccountPropertiesResponse {
    /**
     * The abuse penalty.
     */
    abusePenalty: AbusePenaltyResponse;
    /**
     * Specifies whether this resource support project management as child resources, used as containers for access management, data isolation and cost in AI Foundry.
     */
    allowProjectManagement?: boolean;
    allowedFqdnList?: string[];
    /**
     * The user owned AML account properties.
     */
    amlWorkspace?: UserOwnedAmlWorkspaceResponse;
    /**
     * The api properties for special APIs.
     */
    apiProperties?: ApiPropertiesResponse;
    /**
     * Specifies the projects, by project name, that are associated with this resource.
     */
    associatedProjects?: string[];
    /**
     * The call rate limit Cognitive Services account.
     */
    callRateLimit: CallRateLimitResponse;
    /**
     * Gets the capabilities of the cognitive services account. Each item indicates the capability of a specific feature. The values are read-only and for reference only.
     */
    capabilities: SkuCapabilityResponse[];
    /**
     * The commitment plan associations of Cognitive Services account.
     */
    commitmentPlanAssociations: CommitmentPlanAssociationResponse[];
    /**
     * Optional subdomain name used for token-based authentication.
     */
    customSubDomainName?: string;
    /**
     * Gets the date of cognitive services account creation.
     */
    dateCreated: string;
    /**
     * Specifies the project, by project name, that is targeted when data plane endpoints are called without a project parameter.
     */
    defaultProject?: string;
    /**
     * The deletion date, only available for deleted account.
     */
    deletionDate: string;
    disableLocalAuth?: boolean;
    /**
     * The flag to enable dynamic throttling.
     */
    dynamicThrottlingEnabled?: boolean;
    /**
     * The encryption properties for this resource.
     */
    encryption?: EncryptionResponse;
    /**
     * Endpoint of the created account.
     */
    endpoint: string;
    endpoints: {[key: string]: string};
    /**
     * The internal identifier (deprecated, do not use this property).
     */
    internalId: string;
    /**
     * If the resource is migrated from an existing key.
     */
    isMigrated: boolean;
    /**
     * The multiregion settings of Cognitive Services account.
     */
    locations?: MultiRegionSettingsResponse;
    /**
     * Resource migration token.
     */
    migrationToken?: string;
    /**
     * A collection of rules governing the accessibility from specific network locations.
     */
    networkAcls?: NetworkRuleSetResponse;
    networkInjections?: NetworkInjectionResponse[];
    /**
     * The private endpoint connection associated with the Cognitive Services account.
     */
    privateEndpointConnections: PrivateEndpointConnectionResponse[];
    /**
     * Gets the status of the cognitive services account at the time the operation was called.
     */
    provisioningState: string;
    /**
     * Whether or not public endpoint access is allowed for this account.
     */
    publicNetworkAccess?: string;
    quotaLimit: QuotaLimitResponse;
    /**
     * Cognitive Services Rai Monitor Config.
     */
    raiMonitorConfig?: RaiMonitorConfigResponse;
    restrictOutboundNetworkAccess?: boolean;
    /**
     * The scheduled purge date, only available for deleted account.
     */
    scheduledPurgeDate: string;
    /**
     * Sku change info of account.
     */
    skuChangeInfo: SkuChangeInfoResponse;
    /**
     * The storage accounts for this resource.
     */
    userOwnedStorage?: UserOwnedStorageResponse[];
}
/**
 * accountPropertiesResponseProvideDefaults sets the appropriate defaults for AccountPropertiesResponse
 */
export function accountPropertiesResponseProvideDefaults(val: AccountPropertiesResponse): AccountPropertiesResponse {
    return {
        ...val,
        encryption: (val.encryption ? encryptionResponseProvideDefaults(val.encryption) : undefined),
    };
}

/**
 * Type modeling the protocol and version used by an agent/exposed by a deployment.
 */
export interface AgentProtocolVersionResponse {
    /**
     * The protocol used by the agent/exposed by a deployment.
     */
    protocol?: string;
    /**
     * The version of the protocol.
     */
    version?: string;
}

/**
 * Type modeling a reference to a version of an agent definition.
 */
export interface AgentReferencePropertiesResponse {
    /**
     * Gets the agent's unique identifier within the organization (subscription).
     */
    agentId?: string;
    /**
     * Gets the agent's name (unique within the project/app).
     */
    agentName?: string;
}

/**
 * Agent Reference resource
 */
export interface AgentReferenceResponse {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * [Required] Additional attributes of the entity.
     */
    properties: AgentReferencePropertiesResponse;
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
 * Resource type representing an agentic application as a management construct.
 */
export interface AgenticApplicationPropertiesResponse {
    /**
     * The EntraId Agentic Blueprint of the application.
     */
    agentIdentityBlueprint?: AssignedIdentityResponse;
    /**
     * The list of agent definitions comprising this application, returned as references to the objects under the parent project; use this to obtain a flat list of all agent-version pairs represented by this application.
     */
    agents?: AgentReferencePropertiesResponse[];
    /**
     * Gets or sets the authorization policy associated with this agentic application instance.
     */
    authorizationPolicy?: ChannelsBuiltInAuthorizationPolicyResponse | OrganizationSharedBuiltInAuthorizationPolicyResponse | RoleBasedBuiltInAuthorizationPolicyResponse;
    /**
     * The application's dedicated invocation endpoint.
     */
    baseUrl?: string;
    /**
     * The (default) agent instance identity of the application.
     */
    defaultInstanceIdentity?: AssignedIdentityResponse;
    /**
     * The asset description text.
     */
    description?: string;
    /**
     * The display name of the application.
     */
    displayName?: string;
    /**
     * Enabledstate of the application.
     */
    isEnabled: boolean;
    /**
     * Provisioning state of the application.
     */
    provisioningState: string;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: {[key: string]: string};
    /**
     * Gets or sets the traffic routing policy for the application's deployments.
     */
    trafficRoutingPolicy?: ApplicationTrafficRoutingPolicyResponse;
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
export interface ApiKeyAuthConnectionPropertiesResponse {
    /**
     * Authentication type of the connection target
     * Expected value is 'ApiKey'.
     */
    authType: "ApiKey";
    /**
     * Category of the connection
     */
    category?: string;
    createdByWorkspaceArmId: string;
    /**
     * Api key object for connection credential.
     */
    credentials?: ConnectionApiKeyResponse;
    /**
     * Provides the error message if the connection fails
     */
    error?: string;
    expiryTime?: string;
    /**
     * Group based on connection category
     */
    group: string;
    isSharedToAll?: boolean;
    /**
     * Store user metadata for this connection
     */
    metadata?: {[key: string]: string};
    /**
     * Specifies how private endpoints are used with this connection: 'Required', 'NotRequired', or 'NotApplicable'.
     */
    peRequirement?: string;
    /**
     * Specifies the status of private endpoints for this connection: 'Inactive', 'Active', or 'NotApplicable'.
     */
    peStatus?: string;
    sharedUserList?: string[];
    /**
     * The connection URL to be used.
     */
    target?: string;
    useWorkspaceManagedIdentity?: boolean;
}

/**
 * The api properties for special APIs.
 */
export interface ApiPropertiesResponse {
    /**
     * (Metrics Advisor Only) The Azure AD Client Id (Application Id).
     */
    aadClientId?: string;
    /**
     * (Metrics Advisor Only) The Azure AD Tenant Id.
     */
    aadTenantId?: string;
    /**
     * (Personalization Only) The flag to enable statistics of Bing Search.
     */
    eventHubConnectionString?: string;
    /**
     * (QnAMaker Only) The Azure Search endpoint id of QnAMaker.
     */
    qnaAzureSearchEndpointId?: string;
    /**
     * (QnAMaker Only) The Azure Search endpoint key of QnAMaker.
     */
    qnaAzureSearchEndpointKey?: string;
    /**
     * (QnAMaker Only) The runtime endpoint of QnAMaker.
     */
    qnaRuntimeEndpoint?: string;
    /**
     * (Bing Search Only) The flag to enable statistics of Bing Search.
     */
    statisticsEnabled?: boolean;
    /**
     * (Personalization Only) The storage account connection string.
     */
    storageAccountConnectionString?: string;
    /**
     * (Metrics Advisor Only) The super user of Metrics Advisor.
     */
    superUser?: string;
    /**
     * (Metrics Advisor Only) The website name of Metrics Advisor.
     */
    websiteName?: string;
}

/**
 * Type representing an application traffic policy as a property of an agentic application.
 */
export interface ApplicationTrafficRoutingPolicyResponse {
    /**
     * Methodology used to route traffic to the application's deployments.
     */
    protocol?: string;
    /**
     * Gets or sets the collection of traffic routing rules.
     */
    rules?: TrafficRoutingRuleResponse[];
}

/**
 * Type representing an identity assignment
 */
export interface AssignedIdentityResponse {
    /**
     * The client ID of the identity.
     */
    clientId: string;
    /**
     * Specifies the kind of Entra identity described by this object.
     */
    kind: string;
    /**
     * The principal ID of the identity.
     */
    principalId: string;
    /**
     * Represents the provisioning state of an identity resource.
     */
    provisioningState: string;
    /**
     * The subject of this identity assignment.
     */
    subject?: string;
    /**
     * The tenant ID of the identity.
     */
    tenantId: string;
    /**
     * Enumeration of identity types, from the perspective of management.
     */
    type: string;
}

/**
 * The call rate limit Cognitive Services account.
 */
export interface CallRateLimitResponse {
    /**
     * The count value of Call Rate Limit.
     */
    count?: number;
    /**
     * The renewal period in seconds of Call Rate Limit.
     */
    renewalPeriod?: number;
    rules?: ThrottlingRuleResponse[];
}

export interface CapabilityHostResponse {
    /**
     * List of AI services connections.
     */
    aiServicesConnections?: string[];
    /**
     * Kind of this capability host.
     */
    capabilityHostKind?: string;
    /**
     * Customer subnet info to help set up this capability host.
     */
    customerSubnet?: string;
    /**
     * The asset description text.
     */
    description?: string;
    /**
     * Provisioning state for the CapabilityHost.
     */
    provisioningState: string;
    /**
     * List of connection names from those available in the account or project to be used as a storage resource.
     */
    storageConnections?: string[];
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: {[key: string]: string};
    /**
     * List of connection names from those available in the account or project to be used for Thread storage.
     */
    threadStorageConnections?: string[];
    /**
     * List of connection names from those available in the account or project to be used for vector database (e.g. CosmosDB).
     */
    vectorStoreConnections?: string[];
}

/**
 * Represents a built-in authorization policy specific to Azure Bot Service/Channels authentication.
 */
export interface ChannelsBuiltInAuthorizationPolicyResponse {
    /**
     * Authorization scheme type.
     * Expected value is 'Channels'.
     */
    type: "Channels";
}

/**
 * Cognitive Services account commitment period.
 */
export interface CommitmentPeriodResponse {
    /**
     * Commitment period commitment count.
     */
    count?: number;
    /**
     * Commitment period end date.
     */
    endDate: string;
    /**
     * Cognitive Services account commitment quota.
     */
    quota: CommitmentQuotaResponse;
    /**
     * Commitment period start date.
     */
    startDate: string;
    /**
     * Commitment period commitment tier.
     */
    tier?: string;
}

/**
 * The commitment plan association.
 */
export interface CommitmentPlanAssociationResponse {
    /**
     * The Azure resource id of the commitment plan.
     */
    commitmentPlanId?: string;
    /**
     * The location of of the commitment plan.
     */
    commitmentPlanLocation?: string;
}

/**
 * Properties of Cognitive Services account commitment plan.
 */
export interface CommitmentPlanPropertiesResponse {
    /**
     * AutoRenew commitment plan.
     */
    autoRenew?: boolean;
    /**
     * Commitment plan guid.
     */
    commitmentPlanGuid?: string;
    /**
     * Cognitive Services account commitment period.
     */
    current?: CommitmentPeriodResponse;
    /**
     * Account hosting model.
     */
    hostingModel?: string;
    /**
     * Cognitive Services account commitment period.
     */
    last: CommitmentPeriodResponse;
    /**
     * Cognitive Services account commitment period.
     */
    next?: CommitmentPeriodResponse;
    /**
     * Commitment plan type.
     */
    planType?: string;
    /**
     * The list of ProvisioningIssue.
     */
    provisioningIssues: string[];
    /**
     * Gets the status of the resource at the time the operation was called.
     */
    provisioningState: string;
}

/**
 * Cognitive Services account commitment quota.
 */
export interface CommitmentQuotaResponse {
    /**
     * Commitment quota quantity.
     */
    quantity?: number;
    /**
     * Commitment quota unit.
     */
    unit?: string;
}

export interface ConnectionAccessKeyResponse {
    accessKeyId?: string;
    secretAccessKey?: string;
}

/**
 * Account key object for connection credential.
 */
export interface ConnectionAccountKeyResponse {
    key?: string;
}

/**
 * Api key object for connection credential.
 */
export interface ConnectionApiKeyResponse {
    key?: string;
}

export interface ConnectionManagedIdentityResponse {
    clientId?: string;
    resourceId?: string;
}

/**
 * ClientId and ClientSecret are required. Other properties are optional
 * depending on each OAuth2 provider's implementation.
 */
export interface ConnectionOAuth2Response {
    /**
     * Required by Concur connection category
     */
    authUrl?: string;
    /**
     * Client id in the format of UUID
     */
    clientId?: string;
    clientSecret?: string;
    /**
     * Required by GoogleAdWords connection category
     */
    developerToken?: string;
    password?: string;
    /**
     * Required by GoogleBigQuery, GoogleAdWords, Hubspot, QuickBooks, Square, Xero, Zoho
     * where user needs to get RefreshToken offline
     */
    refreshToken?: string;
    /**
     * Required by QuickBooks and Xero connection categories
     */
    tenantId?: string;
    /**
     * Concur, ServiceNow auth server AccessToken grant type is 'Password'
     * which requires UsernamePassword
     */
    username?: string;
}

export interface ConnectionPersonalAccessTokenResponse {
    pat?: string;
}

export interface ConnectionServicePrincipalResponse {
    clientId?: string;
    clientSecret?: string;
    tenantId?: string;
}

export interface ConnectionSharedAccessSignatureResponse {
    sas?: string;
}

export interface ConnectionUsernamePasswordResponse {
    password?: string;
    /**
     * Optional, required by connections like SalesForce for extra security in addition to UsernamePassword
     */
    securityToken?: string;
    username?: string;
}

/**
 * Gets or sets the source to which filter applies.
 */
export interface CustomBlocklistConfigResponse {
    /**
     * If blocking would occur.
     */
    blocking?: boolean;
    /**
     * Name of ContentFilter.
     */
    blocklistName?: string;
    /**
     * Content source to apply the Content Filters.
     */
    source?: string;
}

/**
 * Category:= CustomKeys
 * AuthType:= CustomKeys (as type discriminator)
 * Credentials:= {CustomKeys} as CustomKeys
 * Target:= {any value}
 * Use Metadata property bag for ApiVersion and other metadata fields
 */
export interface CustomKeysConnectionPropertiesResponse {
    /**
     * Authentication type of the connection target
     * Expected value is 'CustomKeys'.
     */
    authType: "CustomKeys";
    /**
     * Category of the connection
     */
    category?: string;
    createdByWorkspaceArmId: string;
    /**
     * Custom Keys credential object
     */
    credentials?: CustomKeysResponse;
    /**
     * Provides the error message if the connection fails
     */
    error?: string;
    expiryTime?: string;
    /**
     * Group based on connection category
     */
    group: string;
    isSharedToAll?: boolean;
    /**
     * Store user metadata for this connection
     */
    metadata?: {[key: string]: string};
    /**
     * Specifies how private endpoints are used with this connection: 'Required', 'NotRequired', or 'NotApplicable'.
     */
    peRequirement?: string;
    /**
     * Specifies the status of private endpoints for this connection: 'Inactive', 'Active', or 'NotApplicable'.
     */
    peStatus?: string;
    sharedUserList?: string[];
    /**
     * The connection URL to be used.
     */
    target?: string;
    useWorkspaceManagedIdentity?: boolean;
}

/**
 * Custom Keys credential object
 */
export interface CustomKeysResponse {
    keys?: {[key: string]: string};
}

/**
 * Internal use only.
 */
export interface DeploymentCapacitySettingsResponse {
    /**
     * The designated capacity.
     */
    designatedCapacity?: number;
    /**
     * The priority of this capacity setting.
     */
    priority?: number;
}

/**
 * Properties of Cognitive Services account deployment model.
 */
export interface DeploymentModelResponse {
    /**
     * The call rate limit Cognitive Services account.
     */
    callRateLimit: CallRateLimitResponse;
    /**
     * Deployment model format.
     */
    format?: string;
    /**
     * Deployment model name.
     */
    name?: string;
    /**
     * Deployment model publisher.
     */
    publisher?: string;
    /**
     * Optional. Deployment model source ARM resource ID.
     */
    source?: string;
    /**
     * Optional. Source of the model, another Microsoft.CognitiveServices accounts ARM resource ID.
     */
    sourceAccount?: string;
    /**
     * Optional. Deployment model version. If version is not specified, a default version will be assigned. The default version is different for different models and might change when there is new version available for a model. Default version for a model could be found from list models API.
     */
    version?: string;
}

/**
 * Properties of Cognitive Services account deployment.
 */
export interface DeploymentPropertiesResponse {
    /**
     * The call rate limit Cognitive Services account.
     */
    callRateLimit: CallRateLimitResponse;
    /**
     * The capabilities.
     */
    capabilities: {[key: string]: string};
    /**
     * Internal use only.
     */
    capacitySettings?: DeploymentCapacitySettingsResponse;
    /**
     * The current capacity.
     */
    currentCapacity?: number;
    /**
     * If the dynamic throttling is enabled.
     */
    dynamicThrottlingEnabled: boolean;
    /**
     * Properties of Cognitive Services account deployment model.
     */
    model?: DeploymentModelResponse;
    /**
     * The name of parent deployment.
     */
    parentDeploymentName?: string;
    /**
     * Gets the status of the resource at the time the operation was called.
     */
    provisioningState: string;
    /**
     * The name of RAI policy.
     */
    raiPolicyName?: string;
    rateLimits: ThrottlingRuleResponse[];
    /**
     * Properties of Cognitive Services account deployment model. (Deprecated, please use Deployment.sku instead.)
     */
    scaleSettings?: DeploymentScaleSettingsResponse;
    /**
     * Specifies the deployment name that should serve requests when the request would have otherwise been throttled due to reaching current deployment throughput limit.
     */
    spilloverDeploymentName?: string;
    /**
     * Deployment model version upgrade option.
     */
    versionUpgradeOption?: string;
}

/**
 * Properties of Cognitive Services account deployment model. (Deprecated, please use Deployment.sku instead.)
 */
export interface DeploymentScaleSettingsResponse {
    /**
     * Deployment active capacity. This value might be different from `capacity` if customer recently updated `capacity`.
     */
    activeCapacity: number;
    /**
     * Deployment capacity.
     */
    capacity?: number;
    /**
     * Deployment scale type.
     */
    scaleType?: string;
}

/**
 * Properties to configure Encryption
 */
export interface EncryptionResponse {
    /**
     * Enumerates the possible value of keySource for Encryption
     */
    keySource?: string;
    /**
     * Properties of KeyVault
     */
    keyVaultProperties?: KeyVaultPropertiesResponse;
}
/**
 * encryptionResponseProvideDefaults sets the appropriate defaults for EncryptionResponse
 */
export function encryptionResponseProvideDefaults(val: EncryptionResponse): EncryptionResponse {
    return {
        ...val,
        keySource: (val.keySource) ?? "Microsoft.KeyVault",
    };
}

/**
 * Properties to EncryptionScope
 */
export interface EncryptionScopePropertiesResponse {
    /**
     * Enumerates the possible value of keySource for Encryption
     */
    keySource?: string;
    /**
     * Properties of KeyVault
     */
    keyVaultProperties?: KeyVaultPropertiesResponse;
    /**
     * Gets the status of the resource at the time the operation was called.
     */
    provisioningState: string;
    /**
     * The encryptionScope state.
     */
    state?: string;
}
/**
 * encryptionScopePropertiesResponseProvideDefaults sets the appropriate defaults for EncryptionScopePropertiesResponse
 */
export function encryptionScopePropertiesResponseProvideDefaults(val: EncryptionScopePropertiesResponse): EncryptionScopePropertiesResponse {
    return {
        ...val,
        keySource: (val.keySource) ?? "Microsoft.KeyVault",
    };
}

/**
 * FQDN Outbound Rule for the managed network of a cognitive services account.
 */
export interface FqdnOutboundRuleResponse {
    /**
     * Category of a managed network Outbound Rule of a cognitive services account.
     */
    category?: string;
    destination?: string;
    /**
     * Error information about an outbound rule of a cognitive services account if RuleStatus is failed.
     */
    errorInformation: string;
    parentRuleNames: string[];
    /**
     * Type of a managed network Outbound Rule of a cognitive services account.
     */
    status?: string;
    /**
     * Type of a managed network Outbound Rule of a cognitive services account.
     * Expected value is 'FQDN'.
     */
    type: "FQDN";
}

/**
 * Represents a hosted agent deployment where the underlying infrastructure is owned by the platform.
 */
export interface HostedAgentDeploymentResponse {
    /**
     * Returns a flat list of agent:version deployed in this deployment.
     */
    agents?: VersionedAgentReferenceResponse[];
    /**
     * Gets or sets the unique identifier of the deployment.
     */
    deploymentId?: string;
    /**
     * Specifies the type of deployment for an agent, indicating how the underlying compute and network infrastructure is managed.
     * Expected value is 'Hosted'.
     */
    deploymentType: "Hosted";
    /**
     * The asset description text.
     */
    description?: string;
    /**
     * Gets or sets the display name of the deployment.
     */
    displayName?: string;
    /**
     * Gets or sets the maximum number of replicas for this hosted deployment.
     */
    maxReplicas?: number;
    /**
     * Gets or sets the minimum number of replicas for this hosted deployment.
     */
    minReplicas?: number;
    /**
     * Gets or sets the supported protocol types and versions exposed by this deployment.
     */
    protocols?: AgentProtocolVersionResponse[];
    /**
     * Gets or sets the provisioning state of the agent deployment.
     */
    provisioningState: string;
    /**
     * Gets or sets the current operational state of the deployment (and, intrinsically, of the comprising agents).
     */
    state?: string;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: {[key: string]: string};
}

/**
 * Identity for the resource.
 */
export interface IdentityResponse {
    /**
     * The principal ID of resource identity.
     */
    principalId: string;
    /**
     * The tenant ID of resource.
     */
    tenantId: string;
    /**
     * The identity type.
     */
    type?: string;
    /**
     * The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
}

/**
 * A rule governing the accessibility from a specific ip address or ip range.
 */
export interface IpRuleResponse {
    /**
     * An IPv4 address range in CIDR notation, such as '124.56.78.91' (simple IP address) or '124.56.78.0/24' (all addresses that start with 124.56.78).
     */
    value: string;
}

/**
 * Properties to configure keyVault Properties
 */
export interface KeyVaultPropertiesResponse {
    identityClientId?: string;
    /**
     * Name of the Key from KeyVault
     */
    keyName?: string;
    /**
     * Uri of KeyVault
     */
    keyVaultUri?: string;
    /**
     * Version of the Key from KeyVault
     */
    keyVersion?: string;
}

/**
 * Represents a managed agent deployment where the underlying infrastructure is managed by the platform in the deployer's subscription.
 */
export interface ManagedAgentDeploymentResponse {
    /**
     * Returns a flat list of agent:version deployed in this deployment.
     */
    agents?: VersionedAgentReferenceResponse[];
    /**
     * Gets or sets the unique identifier of the deployment.
     */
    deploymentId?: string;
    /**
     * Specifies the type of deployment for an agent, indicating how the underlying compute and network infrastructure is managed.
     * Expected value is 'Managed'.
     */
    deploymentType: "Managed";
    /**
     * The asset description text.
     */
    description?: string;
    /**
     * Gets or sets the display name of the deployment.
     */
    displayName?: string;
    /**
     * Gets or sets the supported protocol types and versions exposed by this deployment.
     */
    protocols?: AgentProtocolVersionResponse[];
    /**
     * Gets or sets the provisioning state of the agent deployment.
     */
    provisioningState: string;
    /**
     * Gets or sets the current operational state of the deployment (and, intrinsically, of the comprising agents).
     */
    state?: string;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: {[key: string]: string};
}

export interface ManagedIdentityAuthTypeConnectionPropertiesResponse {
    /**
     * Authentication type of the connection target
     * Expected value is 'ManagedIdentity'.
     */
    authType: "ManagedIdentity";
    /**
     * Category of the connection
     */
    category?: string;
    createdByWorkspaceArmId: string;
    credentials?: ConnectionManagedIdentityResponse;
    /**
     * Provides the error message if the connection fails
     */
    error?: string;
    expiryTime?: string;
    /**
     * Group based on connection category
     */
    group: string;
    isSharedToAll?: boolean;
    /**
     * Store user metadata for this connection
     */
    metadata?: {[key: string]: string};
    /**
     * Specifies how private endpoints are used with this connection: 'Required', 'NotRequired', or 'NotApplicable'.
     */
    peRequirement?: string;
    /**
     * Specifies the status of private endpoints for this connection: 'Inactive', 'Active', or 'NotApplicable'.
     */
    peStatus?: string;
    sharedUserList?: string[];
    /**
     * The connection URL to be used.
     */
    target?: string;
    useWorkspaceManagedIdentity?: boolean;
}

/**
 * Status of the Provisioning for the managed network of a cognitive services account.
 */
export interface ManagedNetworkProvisionStatusResponse {
    /**
     * Status for the managed network of a cognitive services account.
     */
    status?: string;
}

export interface ManagedNetworkSettingsExResponse {
    changeableIsolationModes: string[];
    /**
     * Public IP address assigned to the Azure Firewall.
     */
    firewallPublicIpAddress: string;
    /**
     * Firewall Sku used for FQDN Rules
     */
    firewallSku?: string;
    /**
     * Isolation mode for the managed network of a cognitive services account.
     */
    isolationMode?: string;
    /**
     * The Kind of the managed network. Users can switch from V1 to V2 for granular access controls, but cannot switch back to V1 once V2 is enabled.
     */
    managedNetworkKind?: string;
    networkId: string;
    /**
     * Dictionary of <OutboundRule>
     */
    outboundRules?: {[key: string]: FqdnOutboundRuleResponse | PrivateEndpointOutboundRuleResponse | ServiceTagOutboundRuleResponse};
    /**
     * The provisioning state of the managed network settings.
     */
    provisioningState: string;
    /**
     * Status of the Provisioning for the managed network of a cognitive services account.
     */
    status?: ManagedNetworkProvisionStatusResponse;
}

/**
 * The properties of the managed network settings of a cognitive services account.
 */
export interface ManagedNetworkSettingsPropertiesResponse {
    /**
     * Managed Network settings for a cognitive services account.
     */
    managedNetwork?: ManagedNetworkSettingsExResponse;
    /**
     * The current deployment state of the managed network resource. The provisioningState is to indicate states for resource provisioning.
     */
    provisioningState: string;
}

/**
 * The multiregion settings Cognitive Services account.
 */
export interface MultiRegionSettingsResponse {
    regions?: RegionSettingResponse[];
    /**
     * Multiregion routing methods.
     */
    routingMethod?: string;
}

/**
 * Specifies in AI Foundry where virtual network injection occurs to secure scenarios like Agents entirely within the user's private network, eliminating public internet exposure while maintaining control over network configurations and resources.
 */
export interface NetworkInjectionResponse {
    /**
     * Specifies what features in AI Foundry network injection applies to. Currently only supports 'agent' for agent scenarios. 'none' means no network injection.
     */
    scenario?: string;
    /**
     * Specify the subnet for which your Agent Client is injected into.
     */
    subnetArmId?: string;
    /**
     * Boolean to enable Microsoft Managed Network for subnet delegation
     */
    useMicrosoftManagedNetwork?: boolean;
}

/**
 * A set of rules governing the network accessibility.
 */
export interface NetworkRuleSetResponse {
    /**
     * Setting for trusted services.
     */
    bypass?: string;
    /**
     * The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated.
     */
    defaultAction?: string;
    /**
     * The list of IP address rules.
     */
    ipRules?: IpRuleResponse[];
    /**
     * The list of virtual network rules.
     */
    virtualNetworkRules?: VirtualNetworkRuleResponse[];
}

export interface NoneAuthTypeConnectionPropertiesResponse {
    /**
     * Authentication type of the connection target
     * Expected value is 'None'.
     */
    authType: "None";
    /**
     * Category of the connection
     */
    category?: string;
    createdByWorkspaceArmId: string;
    /**
     * Provides the error message if the connection fails
     */
    error?: string;
    expiryTime?: string;
    /**
     * Group based on connection category
     */
    group: string;
    isSharedToAll?: boolean;
    /**
     * Store user metadata for this connection
     */
    metadata?: {[key: string]: string};
    /**
     * Specifies how private endpoints are used with this connection: 'Required', 'NotRequired', or 'NotApplicable'.
     */
    peRequirement?: string;
    /**
     * Specifies the status of private endpoints for this connection: 'Inactive', 'Active', or 'NotApplicable'.
     */
    peStatus?: string;
    sharedUserList?: string[];
    /**
     * The connection URL to be used.
     */
    target?: string;
    useWorkspaceManagedIdentity?: boolean;
}

export interface OAuth2AuthTypeConnectionPropertiesResponse {
    /**
     * Authentication type of the connection target
     * Expected value is 'OAuth2'.
     */
    authType: "OAuth2";
    /**
     * Category of the connection
     */
    category?: string;
    createdByWorkspaceArmId: string;
    /**
     * ClientId and ClientSecret are required. Other properties are optional
     * depending on each OAuth2 provider's implementation.
     */
    credentials?: ConnectionOAuth2Response;
    /**
     * Provides the error message if the connection fails
     */
    error?: string;
    expiryTime?: string;
    /**
     * Group based on connection category
     */
    group: string;
    isSharedToAll?: boolean;
    /**
     * Store user metadata for this connection
     */
    metadata?: {[key: string]: string};
    /**
     * Specifies how private endpoints are used with this connection: 'Required', 'NotRequired', or 'NotApplicable'.
     */
    peRequirement?: string;
    /**
     * Specifies the status of private endpoints for this connection: 'Inactive', 'Active', or 'NotApplicable'.
     */
    peStatus?: string;
    sharedUserList?: string[];
    /**
     * The connection URL to be used.
     */
    target?: string;
    useWorkspaceManagedIdentity?: boolean;
}

/**
 * Built-in authorization policy scoped to organization/tenant.
 */
export interface OrganizationSharedBuiltInAuthorizationPolicyResponse {
    /**
     * Authorization scheme type.
     * Expected value is 'OrganizationScope'.
     */
    type: "OrganizationScope";
}

export interface PATAuthTypeConnectionPropertiesResponse {
    /**
     * Authentication type of the connection target
     * Expected value is 'PAT'.
     */
    authType: "PAT";
    /**
     * Category of the connection
     */
    category?: string;
    createdByWorkspaceArmId: string;
    credentials?: ConnectionPersonalAccessTokenResponse;
    /**
     * Provides the error message if the connection fails
     */
    error?: string;
    expiryTime?: string;
    /**
     * Group based on connection category
     */
    group: string;
    isSharedToAll?: boolean;
    /**
     * Store user metadata for this connection
     */
    metadata?: {[key: string]: string};
    /**
     * Specifies how private endpoints are used with this connection: 'Required', 'NotRequired', or 'NotApplicable'.
     */
    peRequirement?: string;
    /**
     * Specifies the status of private endpoints for this connection: 'Inactive', 'Active', or 'NotApplicable'.
     */
    peStatus?: string;
    sharedUserList?: string[];
    /**
     * The connection URL to be used.
     */
    target?: string;
    useWorkspaceManagedIdentity?: boolean;
}

/**
 * Properties of the PrivateEndpointConnectProperties.
 */
export interface PrivateEndpointConnectionPropertiesResponse {
    /**
     * The private link resource group ids.
     */
    groupIds?: string[];
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
}

/**
 * The Private Endpoint Connection resource.
 */
export interface PrivateEndpointConnectionResponse {
    /**
     * Resource Etag.
     */
    etag: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    id: string;
    /**
     * The location of the private endpoint connection
     */
    location?: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * Resource properties.
     */
    properties?: PrivateEndpointConnectionPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    systemData: SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}

/**
 * Private Endpoint destination for an outbound rule.
 */
export interface PrivateEndpointOutboundRuleDestinationResponse {
    /**
     * The Azure resource ID of the target private endpoint service.
     */
    serviceResourceId?: string;
    /**
     * The subresource of the target service to connect to.
     */
    subresourceTarget?: string;
}

/**
 * Private Endpoint outbound rule for the managed network of a cognitive services account.
 */
export interface PrivateEndpointOutboundRuleResponse {
    /**
     * Category of a managed network Outbound Rule of a cognitive services account.
     */
    category?: string;
    /**
     * Private Endpoint destination.
     */
    destination?: PrivateEndpointOutboundRuleDestinationResponse;
    /**
     * Error information about an outbound rule of a cognitive services account if RuleStatus is failed.
     */
    errorInformation: string;
    /**
     * List of FQDNs associated with the private endpoint outbound rule.
     */
    fqdns?: string[];
    parentRuleNames: string[];
    /**
     * Type of a managed network Outbound Rule of a cognitive services account.
     */
    status?: string;
    /**
     * Type of a managed network Outbound Rule of a cognitive services account.
     * Expected value is 'PrivateEndpoint'.
     */
    type: "PrivateEndpoint";
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

export interface ProjectCapabilityHostResponse {
    /**
     * List of AI services connections.
     */
    aiServicesConnections?: string[];
    /**
     * Provisioning state for the CapabilityHost.
     */
    provisioningState: string;
    /**
     * List of connection names from those available in the account or project to be used as a storage resource.
     */
    storageConnections?: string[];
    /**
     * List of connection names from those available in the account or project to be used for Thread storage.
     */
    threadStorageConnections?: string[];
    /**
     * List of connection names from those available in the account or project to be used for vector database (e.g. CosmosDB).
     */
    vectorStoreConnections?: string[];
}

/**
 * Properties of Cognitive Services Project'.
 */
export interface ProjectPropertiesResponse {
    /**
     * The description of the Cognitive Services Project.
     */
    description?: string;
    /**
     * The display name of the Cognitive Services Project.
     */
    displayName?: string;
    /**
     * The list of endpoint for this Cognitive Services Project.
     */
    endpoints: {[key: string]: string};
    /**
     * Indicates whether the project is the default project for the account.
     */
    isDefault: boolean;
    /**
     * Gets the status of the cognitive services project at the time the operation was called.
     */
    provisioningState: string;
}

export interface QuotaLimitResponse {
    count?: number;
    renewalPeriod?: number;
    rules?: ThrottlingRuleResponse[];
}

/**
 * RAI Custom Blocklist Item properties.
 */
export interface RaiBlocklistItemPropertiesResponse {
    /**
     * If the pattern is a regex pattern.
     */
    isRegex?: boolean;
    /**
     * Pattern to match against.
     */
    pattern?: string;
}

/**
 * RAI Custom Blocklist properties.
 */
export interface RaiBlocklistPropertiesResponse {
    /**
     * Description of the block list.
     */
    description?: string;
}

/**
 * RAI External SafetyProvider schema properties.
 */
export interface RaiExternalSafetyProviderSchemaPropertiesResponse {
    /**
     * Creation time of the safety provider.
     */
    createdAt: string;
    /**
     * The Key Vault URI that contains the api key for safety provider urls.
     */
    keyVaultUri?: string;
    /**
     * Last modified time of the safety provider.
     */
    lastModifiedAt: string;
    /**
     * The managed identity to access the Key Vault.
     */
    managedIdentity?: string;
    /**
     * Safety provider mode sync/async.
     */
    mode?: string;
    /**
     * The unique identifier of the safety provider.
     */
    providerId?: string;
    /**
     * Name of the safety provider.
     */
    providerName?: string;
    /**
     * The name of the secret in Key Vault that contains the api key to access the webhook.
     */
    secretName?: string;
    /**
     * Webhook URL for the safety provider.
     */
    url?: string;
}

/**
 * Cognitive Services Rai Monitor Config.
 */
export interface RaiMonitorConfigResponse {
    /**
     * The storage resource Id.
     */
    adxStorageResourceId?: string;
    /**
     * The identity client Id to access the storage.
     */
    identityClientId?: string;
}

/**
 * Azure OpenAI Content Filter.
 */
export interface RaiPolicyContentFilterResponse {
    /**
     * If blocking would occur.
     */
    blocking?: boolean;
    /**
     * If the ContentFilter is enabled.
     */
    enabled?: boolean;
    /**
     * Name of ContentFilter.
     */
    name?: string;
    /**
     * Level at which content is filtered.
     */
    severityThreshold?: string;
    /**
     * Content source to apply the Content Filters.
     */
    source?: string;
}

/**
 * Azure OpenAI Content Filter.
 */
export interface RaiPolicyContentFilterSubscriptionRaiPolicyResponse {
    /**
     * The action types to apply to the content filters
     */
    action?: string;
    /**
     * If blocking would occur.
     */
    blocking?: boolean;
    /**
     * If the ContentFilter is enabled.
     */
    enabled?: boolean;
    /**
     * Name of ContentFilter.
     */
    name?: string;
    /**
     * Level at which content is filtered.
     */
    severityThreshold?: string;
    /**
     * Content source to apply the Content Filters.
     */
    source?: string;
}

/**
 * Azure OpenAI Content Filters properties.
 */
export interface RaiPolicyPropertiesResponse {
    /**
     * Name of Rai policy.
     */
    basePolicyName?: string;
    /**
     * The list of Content Filters.
     */
    contentFilters?: RaiPolicyContentFilterResponse[];
    /**
     * The list of custom Blocklist.
     */
    customBlocklists?: CustomBlocklistConfigResponse[];
    /**
     * Rai policy mode. The enum value mapping is as below: Default = 0, Deferred=1, Blocking=2, Asynchronous_filter =3. Please use 'Asynchronous_filter' after 2025-06-01. It is the same as 'Deferred' in previous version.
     */
    mode?: string;
    /**
     * Content Filters policy type.
     */
    type: string;
}

/**
 * Azure OpenAI Content Filters properties.
 */
export interface RaiPolicyPropertiesSubscriptionRaiPolicyResponse {
    /**
     * Name of Rai policy.
     */
    basePolicyName?: string;
    /**
     * The list of Content Filters.
     */
    contentFilters?: RaiPolicyContentFilterSubscriptionRaiPolicyResponse[];
    /**
     * The list of custom Blocklist.
     */
    customBlocklists?: CustomBlocklistConfigResponse[];
    /**
     * Rai policy mode. The enum value mapping is as below: Default = 0, Deferred=1, Blocking=2, Asynchronous_filter =3. Please use 'Asynchronous_filter' after 2025-06-01. It is the same as 'Deferred' in previous version.
     */
    mode?: string;
    /**
     * The list of Safety Providers.
     */
    safetyProviders?: SafetyProviderConfigResponse[];
    /**
     * Content Filters policy type.
     */
    type: string;
}

/**
 * Account-level tool label definition.
 */
export interface RaiToolLabelPropertiesAccountScopeResponse {
    /**
     * Dictionary of label key-value pairs for the account scope.
     */
    labelValues?: {[key: string]: string};
}

export interface RaiToolLabelPropertiesProjectScopesItemResponse {
    /**
     * Dictionary of label key-value pairs for the project scope.
     */
    labelValues: {[key: string]: string};
    /**
     * Project name to which this scope applies.
     */
    project: string;
}

/**
 * RAI Tool Label properties.
 */
export interface RaiToolLabelPropertiesResponse {
    /**
     * Account-level tool label definition.
     */
    accountScope?: RaiToolLabelPropertiesAccountScopeResponse;
    /**
     * List of project-level tool label definitions.
     */
    projectScopes?: RaiToolLabelPropertiesProjectScopesItemResponse[];
    /**
     * The unique tool connection name, e.g., 'Web_Search'.
     */
    toolConnectionName: string;
}

/**
 * RAI Custom Topic properties.
 */
export interface RaiTopicPropertiesResponse {
    /**
     * Creation time of the custom topic.
     */
    createdAt?: string;
    /**
     * Description of the custom topic.
     */
    description?: string;
    /**
     * Failed reason if the status is Failed.
     */
    failedReason?: string;
    /**
     * Last modified time of the custom topic.
     */
    lastModifiedAt?: string;
    /**
     * Sample blob url for the custom topic.
     */
    sampleBlobUrl?: string;
    /**
     * Status of the custom topic.
     */
    status?: string;
    /**
     * The unique identifier of the custom topic.
     */
    topicId?: string;
    /**
     * The name of the custom topic.
     */
    topicName?: string;
}

/**
 * The call rate limit Cognitive Services account.
 */
export interface RegionSettingResponse {
    /**
     * Maps the region to the regional custom subdomain.
     */
    customsubdomain?: string;
    /**
     * Name of the region.
     */
    name?: string;
    /**
     * A value for priority or weighted routing methods.
     */
    value?: number;
}

export interface RequestMatchPatternResponse {
    method?: string;
    path?: string;
}

/**
 * Built-in role-based authorization policy.
 */
export interface RoleBasedBuiltInAuthorizationPolicyResponse {
    /**
     * Authorization scheme type.
     * Expected value is 'Default'.
     */
    type: "Default";
}

export interface SASAuthTypeConnectionPropertiesResponse {
    /**
     * Authentication type of the connection target
     * Expected value is 'SAS'.
     */
    authType: "SAS";
    /**
     * Category of the connection
     */
    category?: string;
    createdByWorkspaceArmId: string;
    credentials?: ConnectionSharedAccessSignatureResponse;
    /**
     * Provides the error message if the connection fails
     */
    error?: string;
    expiryTime?: string;
    /**
     * Group based on connection category
     */
    group: string;
    isSharedToAll?: boolean;
    /**
     * Store user metadata for this connection
     */
    metadata?: {[key: string]: string};
    /**
     * Specifies how private endpoints are used with this connection: 'Required', 'NotRequired', or 'NotApplicable'.
     */
    peRequirement?: string;
    /**
     * Specifies the status of private endpoints for this connection: 'Inactive', 'Active', or 'NotApplicable'.
     */
    peStatus?: string;
    sharedUserList?: string[];
    /**
     * The connection URL to be used.
     */
    target?: string;
    useWorkspaceManagedIdentity?: boolean;
}

/**
 * Gets or sets the source to which safety providers applies.
 */
export interface SafetyProviderConfigResponse {
    /**
     * If blocking would occur.
     */
    blocking?: boolean;
    /**
     * Name of RAI Safety Provider.
     */
    safetyProviderName?: string;
    /**
     * Content source to apply the Content Filters.
     */
    source?: string;
}

export interface ServicePrincipalAuthTypeConnectionPropertiesResponse {
    /**
     * Authentication type of the connection target
     * Expected value is 'ServicePrincipal'.
     */
    authType: "ServicePrincipal";
    /**
     * Category of the connection
     */
    category?: string;
    createdByWorkspaceArmId: string;
    credentials?: ConnectionServicePrincipalResponse;
    /**
     * Provides the error message if the connection fails
     */
    error?: string;
    expiryTime?: string;
    /**
     * Group based on connection category
     */
    group: string;
    isSharedToAll?: boolean;
    /**
     * Store user metadata for this connection
     */
    metadata?: {[key: string]: string};
    /**
     * Specifies how private endpoints are used with this connection: 'Required', 'NotRequired', or 'NotApplicable'.
     */
    peRequirement?: string;
    /**
     * Specifies the status of private endpoints for this connection: 'Inactive', 'Active', or 'NotApplicable'.
     */
    peStatus?: string;
    sharedUserList?: string[];
    /**
     * The connection URL to be used.
     */
    target?: string;
    useWorkspaceManagedIdentity?: boolean;
}

/**
 * Service Tag destination for an outbound rule.
 */
export interface ServiceTagOutboundRuleDestinationResponse {
    /**
     * The action for the service tag outbound rule.
     */
    action?: string;
    /**
     * Optional address prefixes. If provided, the serviceTag property will be ignored.
     */
    addressPrefixes?: string[];
    /**
     * Destination port ranges.
     */
    portRanges?: string;
    /**
     * Network protocol used by the service tag rule.
     */
    protocol?: string;
    /**
     * Name of the Azure service tag to target.
     */
    serviceTag?: string;
}

/**
 * Service Tag outbound rule for the managed network of a cognitive services account.
 */
export interface ServiceTagOutboundRuleResponse {
    /**
     * Category of a managed network Outbound Rule of a cognitive services account.
     */
    category?: string;
    /**
     * Service Tag destination.
     */
    destination?: ServiceTagOutboundRuleDestinationResponse;
    /**
     * Error information about an outbound rule of a cognitive services account if RuleStatus is failed.
     */
    errorInformation: string;
    parentRuleNames: string[];
    /**
     * Type of a managed network Outbound Rule of a cognitive services account.
     */
    status?: string;
    /**
     * Type of a managed network Outbound Rule of a cognitive services account.
     * Expected value is 'ServiceTag'.
     */
    type: "ServiceTag";
}

/**
 * SkuCapability indicates the capability of a certain feature.
 */
export interface SkuCapabilityResponse {
    /**
     * The name of the SkuCapability.
     */
    name?: string;
    /**
     * The value of the SkuCapability.
     */
    value?: string;
}

/**
 * Sku change info of account.
 */
export interface SkuChangeInfoResponse {
    /**
     * Gets the count of downgrades.
     */
    countOfDowngrades?: number;
    /**
     * Gets the count of upgrades after downgrades.
     */
    countOfUpgradesAfterDowngrades?: number;
    /**
     * Gets the last change date.
     */
    lastChangeDate?: string;
}

/**
 * The resource model definition representing SKU
 */
export interface SkuResponse {
    /**
     * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
     */
    capacity?: number;
    /**
     * If the service has different generations of hardware, for the same SKU, then that can be captured here.
     */
    family?: string;
    /**
     * The name of the SKU. Ex - P3. It is typically a letter+number code
     */
    name: string;
    /**
     * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
     */
    size?: string;
    /**
     * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
     */
    tier?: string;
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

export interface ThrottlingRuleResponse {
    count?: number;
    dynamicThrottlingEnabled?: boolean;
    key?: string;
    matchPatterns?: RequestMatchPatternResponse[];
    minCount?: number;
    renewalPeriod?: number;
}

/**
 * Represents a rule for routing traffic to a specific deployment.
 */
export interface TrafficRoutingRuleResponse {
    /**
     * The unique identifier of the deployment to which traffic is routed by this rule.
     */
    deploymentId?: string;
    /**
     * A user-provided description for this traffic routing rule.
     */
    description?: string;
    /**
     * The identifier of this traffic routing rule.
     */
    ruleId?: string;
    /**
     * Gets or sets the percentage of traffic allocated to this instance.
     */
    trafficPercentage?: number;
}

/**
 * User-assigned managed identity.
 */
export interface UserAssignedIdentityResponse {
    /**
     * Client App Id associated with this identity.
     */
    clientId: string;
    /**
     * Azure Active Directory principal ID associated with this Identity.
     */
    principalId: string;
}

/**
 * The user owned AML account for Cognitive Services account.
 */
export interface UserOwnedAmlWorkspaceResponse {
    /**
     * Identity Client id of a AML account resource.
     */
    identityClientId?: string;
    /**
     * Full resource id of a AML account resource.
     */
    resourceId?: string;
}

/**
 * The user owned storage for Cognitive Services account.
 */
export interface UserOwnedStorageResponse {
    identityClientId?: string;
    /**
     * Full resource id of a Microsoft.Storage resource.
     */
    resourceId?: string;
}

export interface UsernamePasswordAuthTypeConnectionPropertiesResponse {
    /**
     * Authentication type of the connection target
     * Expected value is 'UsernamePassword'.
     */
    authType: "UsernamePassword";
    /**
     * Category of the connection
     */
    category?: string;
    createdByWorkspaceArmId: string;
    credentials?: ConnectionUsernamePasswordResponse;
    /**
     * Provides the error message if the connection fails
     */
    error?: string;
    expiryTime?: string;
    /**
     * Group based on connection category
     */
    group: string;
    isSharedToAll?: boolean;
    /**
     * Store user metadata for this connection
     */
    metadata?: {[key: string]: string};
    /**
     * Specifies how private endpoints are used with this connection: 'Required', 'NotRequired', or 'NotApplicable'.
     */
    peRequirement?: string;
    /**
     * Specifies the status of private endpoints for this connection: 'Inactive', 'Active', or 'NotApplicable'.
     */
    peStatus?: string;
    sharedUserList?: string[];
    /**
     * The connection URL to be used.
     */
    target?: string;
    useWorkspaceManagedIdentity?: boolean;
}

/**
 * Type modeling a reference to a version of an agent definition.
 */
export interface VersionedAgentReferenceResponse {
    /**
     * Gets the agent's unique identifier within the organization (subscription).
     */
    agentId?: string;
    /**
     * Gets the agent's name (unique within the project/app).
     */
    agentName?: string;
    /**
     * Gets the agent's version (unique for each agent lineage).
     */
    agentVersion?: string;
}

/**
 * A rule governing the accessibility from a specific virtual network.
 */
export interface VirtualNetworkRuleResponse {
    /**
     * Full resource id of a vnet subnet, such as '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'.
     */
    id: string;
    /**
     * Ignore missing vnet service endpoint or not.
     */
    ignoreMissingVnetServiceEndpoint?: boolean;
    /**
     * Gets the state of virtual network rule.
     */
    state?: string;
}
