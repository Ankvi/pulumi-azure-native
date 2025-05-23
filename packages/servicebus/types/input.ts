import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Represents the filter actions which are allowed for the transformation of a message that have been matched by a filter expression.
 */
export interface ActionArgs {
    /**
     * This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20.
     */
    compatibilityLevel?: pulumi.Input<number>;
    /**
     * Value that indicates whether the rule action requires preprocessing.
     */
    requiresPreprocessing?: pulumi.Input<boolean>;
    /**
     * SQL expression. e.g. MyProperty='ABC'
     */
    sqlExpression?: pulumi.Input<string>;
}
/**
 * actionArgsProvideDefaults sets the appropriate defaults for ActionArgs
 */
export function actionArgsProvideDefaults(val: ActionArgs): ActionArgs {
    return {
        ...val,
        requiresPreprocessing: (val.requiresPreprocessing) ?? true,
    };
}

/**
 * ConnectionState information.
 */
export interface ConnectionStateArgs {
    /**
     * Description of the connection state.
     */
    description?: pulumi.Input<string>;
    /**
     * Status of the connection.
     */
    status?: pulumi.Input<string | enums.PrivateLinkConnectionStatus>;
}

/**
 * Represents the correlation filter expression.
 */
export interface CorrelationFilterArgs {
    /**
     * Content type of the message.
     */
    contentType?: pulumi.Input<string>;
    /**
     * Identifier of the correlation.
     */
    correlationId?: pulumi.Input<string>;
    /**
     * Application specific label.
     */
    label?: pulumi.Input<string>;
    /**
     * Identifier of the message.
     */
    messageId?: pulumi.Input<string>;
    /**
     * dictionary object for custom filters
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Address of the queue to reply to.
     */
    replyTo?: pulumi.Input<string>;
    /**
     * Session identifier to reply to.
     */
    replyToSessionId?: pulumi.Input<string>;
    /**
     * Value that indicates whether the rule action requires preprocessing.
     */
    requiresPreprocessing?: pulumi.Input<boolean>;
    /**
     * Session identifier.
     */
    sessionId?: pulumi.Input<string>;
    /**
     * Address to send to.
     */
    to?: pulumi.Input<string>;
}
/**
 * correlationFilterArgsProvideDefaults sets the appropriate defaults for CorrelationFilterArgs
 */
export function correlationFilterArgsProvideDefaults(val: CorrelationFilterArgs): CorrelationFilterArgs {
    return {
        ...val,
        requiresPreprocessing: (val.requiresPreprocessing) ?? true,
    };
}

/**
 * Properties to configure Encryption
 */
export interface EncryptionArgs {
    /**
     * Enumerates the possible value of keySource for Encryption
     */
    keySource?: pulumi.Input<enums.KeySource>;
    /**
     * Properties of KeyVault
     */
    keyVaultProperties?: pulumi.Input<pulumi.Input<KeyVaultPropertiesArgs>[]>;
    /**
     * Enable Infrastructure Encryption (Double Encryption)
     */
    requireInfrastructureEncryption?: pulumi.Input<boolean>;
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
 * Properties to configure User Assigned Identities for Bring your Own Keys
 */
export interface IdentityArgs {
    /**
     * Type of managed service identity.
     */
    type?: pulumi.Input<enums.ManagedServiceIdentityType>;
    /**
     * Properties for User Assigned Identities
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Properties to configure keyVault Properties
 */
export interface KeyVaultPropertiesArgs {
    identity?: pulumi.Input<UserAssignedIdentityPropertiesArgs>;
    /**
     * Name of the Key from KeyVault
     */
    keyName?: pulumi.Input<string>;
    /**
     * Uri of KeyVault
     */
    keyVaultUri?: pulumi.Input<string>;
    /**
     * Version of KeyVault
     */
    keyVersion?: pulumi.Input<string>;
}

/**
 * Description of NetWorkRuleSet - IpRules resource.
 */
export interface NWRuleSetIpRulesArgs {
    /**
     * The IP Filter Action
     */
    action?: pulumi.Input<string | enums.NetworkRuleIPAction>;
    /**
     * IP Mask
     */
    ipMask?: pulumi.Input<string>;
}
/**
 * nwruleSetIpRulesArgsProvideDefaults sets the appropriate defaults for NWRuleSetIpRulesArgs
 */
export function nwruleSetIpRulesArgsProvideDefaults(val: NWRuleSetIpRulesArgs): NWRuleSetIpRulesArgs {
    return {
        ...val,
        action: (val.action) ?? "Allow",
    };
}

/**
 * Description of VirtualNetworkRules - NetworkRules resource.
 */
export interface NWRuleSetVirtualNetworkRulesArgs {
    /**
     * Value that indicates whether to ignore missing VNet Service Endpoint
     */
    ignoreMissingVnetServiceEndpoint?: pulumi.Input<boolean>;
    /**
     * Subnet properties
     */
    subnet?: pulumi.Input<SubnetArgs>;
}

/**
 * PrivateEndpoint information.
 */
export interface PrivateEndpointArgs {
    /**
     * The ARM identifier for Private Endpoint.
     */
    id?: pulumi.Input<string>;
}

/**
 * Properties of the PrivateEndpointConnection.
 */
export interface PrivateEndpointConnectionArgs {
    /**
     * The Private Endpoint resource for this Connection.
     */
    privateEndpoint?: pulumi.Input<PrivateEndpointArgs>;
    /**
     * Details about the state of the connection.
     */
    privateLinkServiceConnectionState?: pulumi.Input<ConnectionStateArgs>;
    /**
     * Provisioning state of the Private Endpoint Connection.
     */
    provisioningState?: pulumi.Input<string | enums.EndPointProvisioningState>;
}

/**
 * Properties specific to client affine subscriptions.
 */
export interface SBClientAffinePropertiesArgs {
    /**
     * Indicates the Client ID of the application that created the client-affine subscription.
     */
    clientId?: pulumi.Input<string>;
    /**
     * For client-affine subscriptions, this value indicates whether the subscription is durable or not.
     */
    isDurable?: pulumi.Input<boolean>;
    /**
     * For client-affine subscriptions, this value indicates whether the subscription is shared or not.
     */
    isShared?: pulumi.Input<boolean>;
}

/**
 * SKU of the namespace.
 */
export interface SBSkuArgs {
    /**
     * Messaging units for your service bus premium namespace. Valid capacities are {1, 2, 4, 8, 16} multiples of your properties.premiumMessagingPartitions setting. For example, If properties.premiumMessagingPartitions is 1 then possible capacity values are 1, 2, 4, 8, and 16. If properties.premiumMessagingPartitions is 4 then possible capacity values are 4, 8, 16, 32 and 64
     */
    capacity?: pulumi.Input<number>;
    /**
     * Name of this SKU.
     */
    name: pulumi.Input<enums.SkuName>;
    /**
     * The billing tier of this particular SKU.
     */
    tier?: pulumi.Input<enums.SkuTier>;
}

/**
 * Represents a filter which is a composition of an expression and an action that is executed in the pub/sub pipeline.
 */
export interface SqlFilterArgs {
    /**
     * This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20.
     */
    compatibilityLevel?: pulumi.Input<number>;
    /**
     * Value that indicates whether the rule action requires preprocessing.
     */
    requiresPreprocessing?: pulumi.Input<boolean>;
    /**
     * The SQL expression. e.g. MyProperty='ABC'
     */
    sqlExpression?: pulumi.Input<string>;
}
/**
 * sqlFilterArgsProvideDefaults sets the appropriate defaults for SqlFilterArgs
 */
export function sqlFilterArgsProvideDefaults(val: SqlFilterArgs): SqlFilterArgs {
    return {
        ...val,
        requiresPreprocessing: (val.requiresPreprocessing) ?? true,
    };
}

/**
 * Properties supplied for Subnet
 */
export interface SubnetArgs {
    /**
     * Resource ID of Virtual Network Subnet
     */
    id: pulumi.Input<string>;
}

export interface UserAssignedIdentityPropertiesArgs {
    /**
     * ARM ID of user Identity selected for encryption
     */
    userAssignedIdentity?: pulumi.Input<string>;
}
