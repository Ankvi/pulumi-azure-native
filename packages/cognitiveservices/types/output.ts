import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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

/**
 * Properties of Cognitive Services account.
 */
export interface AccountPropertiesResponse {
    /**
     * The abuse penalty.
     */
    abusePenalty: AbusePenaltyResponse;
    allowedFqdnList?: string[];
    /**
     * The api properties for special APIs.
     */
    apiProperties?: ApiPropertiesResponse;
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
     * Optional. Deployment model source ARM resource ID.
     */
    source?: string;
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
     * Properties of Cognitive Services account deployment model.
     */
    model?: DeploymentModelResponse;
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
     * Properties of Cognitive Services account deployment model.
     */
    scaleSettings?: DeploymentScaleSettingsResponse;
    /**
     * Deployment model version upgrade option.
     */
    versionUpgradeOption?: string;
}

/**
 * Properties of Cognitive Services account deployment model.
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
 * A set of rules governing the network accessibility.
 */
export interface NetworkRuleSetResponse {
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

export interface QuotaLimitResponse {
    count?: number;
    renewalPeriod?: number;
    rules?: ThrottlingRuleResponse[];
}

/**
 * Azure OpenAI blocklist config.
 */
export interface RaiBlocklistConfigResponse {
    /**
     * If blocking would occur.
     */
    blocking?: boolean;
    /**
     * Name of ContentFilter.
     */
    blocklistName?: string;
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
 * Azure OpenAI Content Filter.
 */
export interface RaiPolicyContentFilterResponse {
    /**
     * Level at which content is filtered.
     */
    allowedContentLevel?: string;
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
     * Content source to apply the Content Filters.
     */
    source?: string;
}

/**
 * Azure OpenAI Content Filters properties.
 */
export interface RaiPolicyPropertiesResponse {
    /**
     * Name of the base Content Filters.
     */
    basePolicyName?: string;
    /**
     * The list of blocklists for completion.
     */
    completionBlocklists?: RaiBlocklistConfigResponse[];
    /**
     * The list of Content Filters.
     */
    contentFilters?: RaiPolicyContentFilterResponse[];
    /**
     * Content Filters mode.
     */
    mode?: string;
    /**
     * Content Filters policy type.
     */
    policyType: string;
    /**
     * The list of blocklists for prompt.
     */
    promptBlocklists?: RaiBlocklistConfigResponse[];
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
 * The user owned storage for Cognitive Services account.
 */
export interface UserOwnedStorageResponse {
    identityClientId?: string;
    /**
     * Full resource id of a Microsoft.Storage resource.
     */
    resourceId?: string;
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






