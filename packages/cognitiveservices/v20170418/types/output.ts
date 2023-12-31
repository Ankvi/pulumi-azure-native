import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The api properties for special APIs.
     */
    export interface CognitiveServicesAccountApiPropertiesResponse {
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
     * Properties of Cognitive Services account.
     */
    export interface CognitiveServicesAccountPropertiesResponse {
        /**
         * The api properties for special APIs.
         */
        apiProperties?: CognitiveServicesAccountApiPropertiesResponse;
        /**
         * Gets the capabilities of the cognitive services account. Each item indicates the capability of a specific feature. The values are read-only and for reference only.
         */
        capabilities: SkuCapabilityResponse[];
        /**
         * Optional subdomain name used for token-based authentication.
         */
        customSubDomainName?: string;
        /**
         * Gets the date of cognitive services account creation.
         */
        dateCreated: string;
        /**
         * The encryption properties for this resource.
         */
        encryption?: EncryptionResponse;
        /**
         * Endpoint of the created account.
         */
        endpoint: string;
        /**
         * The internal identifier.
         */
        internalId: string;
        /**
         * If the resource is migrated from an existing key.
         */
        isMigrated: boolean;
        /**
         * A collection of rules governing the accessibility from specific network locations.
         */
        networkAcls?: NetworkRuleSetResponse;
        /**
         * The private endpoint connection associated with the Cognitive Services account.
         */
        privateEndpointConnections?: PrivateEndpointConnectionResponse[];
        /**
         * Gets the status of the cognitive services account at the time the operation was called.
         */
        provisioningState: string;
        /**
         * Whether or not public endpoint access is allowed for this account. Value is optional but if passed in, must be 'Enabled' or 'Disabled'
         */
        publicNetworkAccess?: string;
        /**
         * Sku change info of account.
         */
        skuChangeInfo: CognitiveServicesAccountSkuChangeInfoResponse;
        /**
         * The storage accounts for this resource.
         */
        userOwnedStorage?: UserOwnedStorageResponse[];
    }
    /**
     * cognitiveServicesAccountPropertiesResponseProvideDefaults sets the appropriate defaults for CognitiveServicesAccountPropertiesResponse
     */
    export function cognitiveServicesAccountPropertiesResponseProvideDefaults(val: CognitiveServicesAccountPropertiesResponse): CognitiveServicesAccountPropertiesResponse {
        return {
            ...val,
            encryption: (val.encryption ? encryptionResponseProvideDefaults(val.encryption) : undefined),
        };
    }

    /**
     * Sku change info of account.
     */
    export interface CognitiveServicesAccountSkuChangeInfoResponse {
        /**
         * Gets the count of downgrades.
         */
        countOfDowngrades: number;
        /**
         * Gets the count of upgrades after downgrades.
         */
        countOfUpgradesAfterDowngrades: number;
        /**
         * Gets the last change date.
         */
        lastChangeDate: string;
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
     * Managed service identity.
     */
    export interface IdentityResponse {
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
    }

    /**
     * The Private Endpoint Connection resource.
     */
    export interface PrivateEndpointConnectionResponse {
        /**
         * Entity Tag
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
     * The SKU of the cognitive services account.
     */
    export interface SkuResponse {
        /**
         * Gets or sets the sku name. Required for account creation, optional for update.
         */
        name: string;
        /**
         * Gets the sku tier. This is based on the SKU name.
         */
        tier: string;
    }

    /**
     * User-assigned managed identity.
     */
    export interface UserAssignedIdentityResponse {
        /**
         * Client App Id associated with this identity.
         */
        clientId?: string;
        /**
         * Azure Active Directory principal ID associated with this Identity.
         */
        principalId?: string;
    }

    /**
     * The user owned storage for Cognitive Services account.
     */
    export interface UserOwnedStorageResponse {
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
