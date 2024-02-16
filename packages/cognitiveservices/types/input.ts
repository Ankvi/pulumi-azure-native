import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Properties of Cognitive Services account.
 */
export interface AccountPropertiesArgs {
    allowedFqdnList?: pulumi.Input<pulumi.Input<string>[]>;
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
     * Optional. Deployment model source ARM resource ID.
     */
    source?: pulumi.Input<string>;
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
     * Properties of Cognitive Services account deployment model.
     */
    model?: pulumi.Input<DeploymentModelArgs>;
    /**
     * The name of RAI policy.
     */
    raiPolicyName?: pulumi.Input<string>;
    /**
     * Properties of Cognitive Services account deployment model.
     */
    scaleSettings?: pulumi.Input<DeploymentScaleSettingsArgs>;
    /**
     * Deployment model version upgrade option.
     */
    versionUpgradeOption?: pulumi.Input<string | enums.DeploymentModelVersionUpgradeOption>;
}

/**
 * Properties of Cognitive Services account deployment model.
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
 * Azure OpenAI blocklist config.
 */
export interface RaiBlocklistConfigArgs {
    /**
     * If blocking would occur.
     */
    blocking?: pulumi.Input<boolean>;
    /**
     * Name of ContentFilter.
     */
    blocklistName?: pulumi.Input<string>;
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
 * Azure OpenAI Content Filter.
 */
export interface RaiPolicyContentFilterArgs {
    /**
     * Level at which content is filtered.
     */
    allowedContentLevel?: pulumi.Input<string | enums.AllowedContentLevel>;
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
     * Content source to apply the Content Filters.
     */
    source?: pulumi.Input<string | enums.RaiPolicyContentSource>;
}

/**
 * Azure OpenAI Content Filters properties.
 */
export interface RaiPolicyPropertiesArgs {
    /**
     * Name of the base Content Filters.
     */
    basePolicyName?: pulumi.Input<string>;
    /**
     * The list of blocklists for completion.
     */
    completionBlocklists?: pulumi.Input<pulumi.Input<RaiBlocklistConfigArgs>[]>;
    /**
     * The list of Content Filters.
     */
    contentFilters?: pulumi.Input<pulumi.Input<RaiPolicyContentFilterArgs>[]>;
    /**
     * Content Filters mode.
     */
    mode?: pulumi.Input<string | enums.RaiPolicyMode>;
    /**
     * The list of blocklists for prompt.
     */
    promptBlocklists?: pulumi.Input<pulumi.Input<RaiBlocklistConfigArgs>[]>;
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
 * The user owned storage for Cognitive Services account.
 */
export interface UserOwnedStorageArgs {
    identityClientId?: pulumi.Input<string>;
    /**
     * Full resource id of a Microsoft.Storage resource.
     */
    resourceId?: pulumi.Input<string>;
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


