import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The api properties for special APIs.
     */
    export interface CognitiveServicesAccountApiPropertiesArgs {
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
     * Properties of Cognitive Services account.
     */
    export interface CognitiveServicesAccountPropertiesArgs {
        /**
         * The api properties for special APIs.
         */
        apiProperties?: pulumi.Input<CognitiveServicesAccountApiPropertiesArgs>;
        /**
         * Optional subdomain name used for token-based authentication.
         */
        customSubDomainName?: pulumi.Input<string>;
        /**
         * The encryption properties for this resource.
         */
        encryption?: pulumi.Input<EncryptionArgs>;
        /**
         * A collection of rules governing the accessibility from specific network locations.
         */
        networkAcls?: pulumi.Input<NetworkRuleSetArgs>;
        /**
         * The private endpoint connection associated with the Cognitive Services account.
         */
        privateEndpointConnections?: pulumi.Input<pulumi.Input<PrivateEndpointConnectionArgs>[]>;
        /**
         * Whether or not public endpoint access is allowed for this account. Value is optional but if passed in, must be 'Enabled' or 'Disabled'
         */
        publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccess>;
        /**
         * The storage accounts for this resource.
         */
        userOwnedStorage?: pulumi.Input<pulumi.Input<UserOwnedStorageArgs>[]>;
    }
    /**
     * cognitiveServicesAccountPropertiesArgsProvideDefaults sets the appropriate defaults for CognitiveServicesAccountPropertiesArgs
     */
    export function cognitiveServicesAccountPropertiesArgsProvideDefaults(val: CognitiveServicesAccountPropertiesArgs): CognitiveServicesAccountPropertiesArgs {
        return {
            ...val,
            encryption: (val.encryption ? pulumi.output(val.encryption).apply(encryptionArgsProvideDefaults) : undefined),
        };
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
     * Managed service identity.
     */
    export interface IdentityArgs {
        /**
         * Type of managed service identity.
         */
        type?: pulumi.Input<enums.IdentityType>;
        /**
         * The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}
         */
        userAssignedIdentities?: pulumi.Input<{[key: string]: pulumi.Input<UserAssignedIdentityArgs>}>;
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
     * The Private Endpoint Connection resource.
     */
    export interface PrivateEndpointConnectionArgs {
        /**
         * The location of the private endpoint connection
         */
        location?: pulumi.Input<string>;
        /**
         * Resource properties.
         */
        properties?: pulumi.Input<PrivateEndpointConnectionPropertiesArgs>;
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
     * The SKU of the cognitive services account.
     */
    export interface SkuArgs {
        /**
         * Gets or sets the sku name. Required for account creation, optional for update.
         */
        name: pulumi.Input<string>;
    }

    /**
     * User-assigned managed identity.
     */
    export interface UserAssignedIdentityArgs {
        /**
         * Client App Id associated with this identity.
         */
        clientId?: pulumi.Input<string>;
        /**
         * Azure Active Directory principal ID associated with this Identity.
         */
        principalId?: pulumi.Input<string>;
    }

    /**
     * The user owned storage for Cognitive Services account.
     */
    export interface UserOwnedStorageArgs {
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
