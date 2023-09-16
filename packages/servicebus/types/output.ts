import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace servicebus {
    /**
     * Represents the filter actions which are allowed for the transformation of a message that have been matched by a filter expression.
     */
    export interface ActionResponse {
        /**
         * This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20.
         */
        compatibilityLevel?: number;
        /**
         * Value that indicates whether the rule action requires preprocessing.
         */
        requiresPreprocessing?: boolean;
        /**
         * SQL expression. e.g. MyProperty='ABC'
         */
        sqlExpression?: string;
    }
    /**
     * actionResponseProvideDefaults sets the appropriate defaults for ActionResponse
     */
    export function actionResponseProvideDefaults(val: ActionResponse): ActionResponse {
        return {
            ...val,
            requiresPreprocessing: (val.requiresPreprocessing) ?? true,
        };
    }

    /**
     * ConnectionState information.
     */
    export interface ConnectionStateResponse {
        /**
         * Description of the connection state.
         */
        description?: string;
        /**
         * Status of the connection.
         */
        status?: string;
    }

    /**
     * Represents the correlation filter expression.
     */
    export interface CorrelationFilterResponse {
        /**
         * Content type of the message.
         */
        contentType?: string;
        /**
         * Identifier of the correlation.
         */
        correlationId?: string;
        /**
         * Application specific label.
         */
        label?: string;
        /**
         * Identifier of the message.
         */
        messageId?: string;
        /**
         * dictionary object for custom filters
         */
        properties?: {[key: string]: string};
        /**
         * Address of the queue to reply to.
         */
        replyTo?: string;
        /**
         * Session identifier to reply to.
         */
        replyToSessionId?: string;
        /**
         * Value that indicates whether the rule action requires preprocessing.
         */
        requiresPreprocessing?: boolean;
        /**
         * Session identifier.
         */
        sessionId?: string;
        /**
         * Address to send to.
         */
        to?: string;
    }
    /**
     * correlationFilterResponseProvideDefaults sets the appropriate defaults for CorrelationFilterResponse
     */
    export function correlationFilterResponseProvideDefaults(val: CorrelationFilterResponse): CorrelationFilterResponse {
        return {
            ...val,
            requiresPreprocessing: (val.requiresPreprocessing) ?? true,
        };
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
        keyVaultProperties?: KeyVaultPropertiesResponse[];
        /**
         * Enable Infrastructure Encryption (Double Encryption)
         */
        requireInfrastructureEncryption?: boolean;
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
     * Properties to configure User Assigned Identities for Bring your Own Keys
     */
    export interface IdentityResponse {
        /**
         * ObjectId from the KeyVault
         */
        principalId: string;
        /**
         * TenantId from the KeyVault
         */
        tenantId: string;
        /**
         * Type of managed service identity.
         */
        type?: string;
        /**
         * Properties for User Assigned Identities
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
    }

    /**
     * Properties to configure keyVault Properties
     */
    export interface KeyVaultPropertiesResponse {
        identity?: UserAssignedIdentityPropertiesResponse;
        /**
         * Name of the Key from KeyVault
         */
        keyName?: string;
        /**
         * Uri of KeyVault
         */
        keyVaultUri?: string;
        /**
         * Version of KeyVault
         */
        keyVersion?: string;
    }

    /**
     * Message Count Details.
     */
    export interface MessageCountDetailsResponse {
        /**
         * Number of active messages in the queue, topic, or subscription.
         */
        activeMessageCount: number;
        /**
         * Number of messages that are dead lettered.
         */
        deadLetterMessageCount: number;
        /**
         * Number of scheduled messages.
         */
        scheduledMessageCount: number;
        /**
         * Number of messages transferred into dead letters.
         */
        transferDeadLetterMessageCount: number;
        /**
         * Number of messages transferred to another queue, topic, or subscription.
         */
        transferMessageCount: number;
    }

    /**
     * Description of NetWorkRuleSet - IpRules resource.
     */
    export interface NWRuleSetIpRulesResponse {
        /**
         * The IP Filter Action
         */
        action?: string;
        /**
         * IP Mask
         */
        ipMask?: string;
    }
    /**
     * nwruleSetIpRulesResponseProvideDefaults sets the appropriate defaults for NWRuleSetIpRulesResponse
     */
    export function nwruleSetIpRulesResponseProvideDefaults(val: NWRuleSetIpRulesResponse): NWRuleSetIpRulesResponse {
        return {
            ...val,
            action: (val.action) ?? "Allow",
        };
    }

    /**
     * Description of VirtualNetworkRules - NetworkRules resource.
     */
    export interface NWRuleSetVirtualNetworkRulesResponse {
        /**
         * Value that indicates whether to ignore missing VNet Service Endpoint
         */
        ignoreMissingVnetServiceEndpoint?: boolean;
        /**
         * Subnet properties
         */
        subnet?: SubnetResponse;
    }

    /**
     * Properties of the PrivateEndpointConnection.
     */
    export interface PrivateEndpointConnectionResponse {
        /**
         * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
         */
        id: string;
        /**
         * The geo-location where the resource lives
         */
        location: string;
        /**
         * The name of the resource
         */
        name: string;
        /**
         * The Private Endpoint resource for this Connection.
         */
        privateEndpoint?: PrivateEndpointResponse;
        /**
         * Details about the state of the connection.
         */
        privateLinkServiceConnectionState?: ConnectionStateResponse;
        /**
         * Provisioning state of the Private Endpoint Connection.
         */
        provisioningState?: string;
        /**
         * The system meta data relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * The type of the resource. E.g. "Microsoft.EventHub/Namespaces" or "Microsoft.EventHub/Namespaces/EventHubs"
         */
        type: string;
    }

    /**
     * PrivateEndpoint information.
     */
    export interface PrivateEndpointResponse {
        /**
         * The ARM identifier for Private Endpoint.
         */
        id?: string;
    }

    /**
     * Properties specific to client affine subscriptions.
     */
    export interface SBClientAffinePropertiesResponse {
        /**
         * Indicates the Client ID of the application that created the client-affine subscription.
         */
        clientId?: string;
        /**
         * For client-affine subscriptions, this value indicates whether the subscription is durable or not.
         */
        isDurable?: boolean;
        /**
         * For client-affine subscriptions, this value indicates whether the subscription is shared or not.
         */
        isShared?: boolean;
    }

    /**
     * SKU of the namespace.
     */
    export interface SBSkuResponse {
        /**
         * The specified messaging units for the tier. For Premium tier, capacity are 1,2 and 4.
         */
        capacity?: number;
        /**
         * Name of this SKU.
         */
        name: string;
        /**
         * The billing tier of this particular SKU.
         */
        tier?: string;
    }

    /**
     * Represents a filter which is a composition of an expression and an action that is executed in the pub/sub pipeline.
     */
    export interface SqlFilterResponse {
        /**
         * This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20.
         */
        compatibilityLevel?: number;
        /**
         * Value that indicates whether the rule action requires preprocessing.
         */
        requiresPreprocessing?: boolean;
        /**
         * The SQL expression. e.g. MyProperty='ABC'
         */
        sqlExpression?: string;
    }
    /**
     * sqlFilterResponseProvideDefaults sets the appropriate defaults for SqlFilterResponse
     */
    export function sqlFilterResponseProvideDefaults(val: SqlFilterResponse): SqlFilterResponse {
        return {
            ...val,
            requiresPreprocessing: (val.requiresPreprocessing) ?? true,
        };
    }

    /**
     * Properties supplied for Subnet
     */
    export interface SubnetResponse {
        /**
         * Resource ID of Virtual Network Subnet
         */
        id: string;
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
         * The type of identity that last modified the resource.
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

    export interface UserAssignedIdentityPropertiesResponse {
        /**
         * ARM ID of user Identity selected for encryption
         */
        userAssignedIdentity?: string;
    }

    /**
     * Recognized Dictionary value.
     */
    export interface UserAssignedIdentityResponse {
        /**
         * Client Id of user assigned identity
         */
        clientId: string;
        /**
         * Principal Id of user assigned identity
         */
        principalId: string;
    }

    export namespace v20220101preview {
        /**
         * Represents the filter actions which are allowed for the transformation of a message that have been matched by a filter expression.
         */
        export interface ActionResponse {
            /**
             * This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20.
             */
            compatibilityLevel?: number;
            /**
             * Value that indicates whether the rule action requires preprocessing.
             */
            requiresPreprocessing?: boolean;
            /**
             * SQL expression. e.g. MyProperty='ABC'
             */
            sqlExpression?: string;
        }
        /**
         * actionResponseProvideDefaults sets the appropriate defaults for ActionResponse
         */
        export function actionResponseProvideDefaults(val: ActionResponse): ActionResponse {
            return {
                ...val,
                requiresPreprocessing: (val.requiresPreprocessing) ?? true,
            };
        }

        /**
         * ConnectionState information.
         */
        export interface ConnectionStateResponse {
            /**
             * Description of the connection state.
             */
            description?: string;
            /**
             * Status of the connection.
             */
            status?: string;
        }

        /**
         * Represents the correlation filter expression.
         */
        export interface CorrelationFilterResponse {
            /**
             * Content type of the message.
             */
            contentType?: string;
            /**
             * Identifier of the correlation.
             */
            correlationId?: string;
            /**
             * Application specific label.
             */
            label?: string;
            /**
             * Identifier of the message.
             */
            messageId?: string;
            /**
             * dictionary object for custom filters
             */
            properties?: {[key: string]: string};
            /**
             * Address of the queue to reply to.
             */
            replyTo?: string;
            /**
             * Session identifier to reply to.
             */
            replyToSessionId?: string;
            /**
             * Value that indicates whether the rule action requires preprocessing.
             */
            requiresPreprocessing?: boolean;
            /**
             * Session identifier.
             */
            sessionId?: string;
            /**
             * Address to send to.
             */
            to?: string;
        }
        /**
         * correlationFilterResponseProvideDefaults sets the appropriate defaults for CorrelationFilterResponse
         */
        export function correlationFilterResponseProvideDefaults(val: CorrelationFilterResponse): CorrelationFilterResponse {
            return {
                ...val,
                requiresPreprocessing: (val.requiresPreprocessing) ?? true,
            };
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
            keyVaultProperties?: v20220101preview.KeyVaultPropertiesResponse[];
            /**
             * Enable Infrastructure Encryption (Double Encryption)
             */
            requireInfrastructureEncryption?: boolean;
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
         * Properties to configure User Assigned Identities for Bring your Own Keys
         */
        export interface IdentityResponse {
            /**
             * ObjectId from the KeyVault
             */
            principalId: string;
            /**
             * TenantId from the KeyVault
             */
            tenantId: string;
            /**
             * Type of managed service identity.
             */
            type?: string;
            /**
             * Properties for User Assigned Identities
             */
            userAssignedIdentities?: {[key: string]: v20220101preview.UserAssignedIdentityResponse};
        }

        /**
         * Properties to configure keyVault Properties
         */
        export interface KeyVaultPropertiesResponse {
            identity?: v20220101preview.UserAssignedIdentityPropertiesResponse;
            /**
             * Name of the Key from KeyVault
             */
            keyName?: string;
            /**
             * Uri of KeyVault
             */
            keyVaultUri?: string;
            /**
             * Version of KeyVault
             */
            keyVersion?: string;
        }

        /**
         * Message Count Details.
         */
        export interface MessageCountDetailsResponse {
            /**
             * Number of active messages in the queue, topic, or subscription.
             */
            activeMessageCount: number;
            /**
             * Number of messages that are dead lettered.
             */
            deadLetterMessageCount: number;
            /**
             * Number of scheduled messages.
             */
            scheduledMessageCount: number;
            /**
             * Number of messages transferred into dead letters.
             */
            transferDeadLetterMessageCount: number;
            /**
             * Number of messages transferred to another queue, topic, or subscription.
             */
            transferMessageCount: number;
        }

        /**
         * Description of NetWorkRuleSet - IpRules resource.
         */
        export interface NWRuleSetIpRulesResponse {
            /**
             * The IP Filter Action
             */
            action?: string;
            /**
             * IP Mask
             */
            ipMask?: string;
        }
        /**
         * nwruleSetIpRulesResponseProvideDefaults sets the appropriate defaults for NWRuleSetIpRulesResponse
         */
        export function nwruleSetIpRulesResponseProvideDefaults(val: NWRuleSetIpRulesResponse): NWRuleSetIpRulesResponse {
            return {
                ...val,
                action: (val.action) ?? "Allow",
            };
        }

        /**
         * Description of VirtualNetworkRules - NetworkRules resource.
         */
        export interface NWRuleSetVirtualNetworkRulesResponse {
            /**
             * Value that indicates whether to ignore missing VNet Service Endpoint
             */
            ignoreMissingVnetServiceEndpoint?: boolean;
            /**
             * Subnet properties
             */
            subnet?: v20220101preview.SubnetResponse;
        }

        /**
         * Properties of the PrivateEndpointConnection.
         */
        export interface PrivateEndpointConnectionResponse {
            /**
             * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
             */
            id: string;
            /**
             * The geo-location where the resource lives
             */
            location: string;
            /**
             * The name of the resource
             */
            name: string;
            /**
             * The Private Endpoint resource for this Connection.
             */
            privateEndpoint?: v20220101preview.PrivateEndpointResponse;
            /**
             * Details about the state of the connection.
             */
            privateLinkServiceConnectionState?: v20220101preview.ConnectionStateResponse;
            /**
             * Provisioning state of the Private Endpoint Connection.
             */
            provisioningState?: string;
            /**
             * The system meta data relating to this resource.
             */
            systemData: v20220101preview.SystemDataResponse;
            /**
             * The type of the resource. E.g. "Microsoft.EventHub/Namespaces" or "Microsoft.EventHub/Namespaces/EventHubs"
             */
            type: string;
        }

        /**
         * PrivateEndpoint information.
         */
        export interface PrivateEndpointResponse {
            /**
             * The ARM identifier for Private Endpoint.
             */
            id?: string;
        }

        /**
         * Properties specific to client affine subscriptions.
         */
        export interface SBClientAffinePropertiesResponse {
            /**
             * Indicates the Client ID of the application that created the client-affine subscription.
             */
            clientId?: string;
            /**
             * For client-affine subscriptions, this value indicates whether the subscription is durable or not.
             */
            isDurable?: boolean;
            /**
             * For client-affine subscriptions, this value indicates whether the subscription is shared or not.
             */
            isShared?: boolean;
        }

        /**
         * SKU of the namespace.
         */
        export interface SBSkuResponse {
            /**
             * The specified messaging units for the tier. For Premium tier, capacity are 1,2 and 4.
             */
            capacity?: number;
            /**
             * Name of this SKU.
             */
            name: string;
            /**
             * The billing tier of this particular SKU.
             */
            tier?: string;
        }

        /**
         * Represents a filter which is a composition of an expression and an action that is executed in the pub/sub pipeline.
         */
        export interface SqlFilterResponse {
            /**
             * This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20.
             */
            compatibilityLevel?: number;
            /**
             * Value that indicates whether the rule action requires preprocessing.
             */
            requiresPreprocessing?: boolean;
            /**
             * The SQL expression. e.g. MyProperty='ABC'
             */
            sqlExpression?: string;
        }
        /**
         * sqlFilterResponseProvideDefaults sets the appropriate defaults for SqlFilterResponse
         */
        export function sqlFilterResponseProvideDefaults(val: SqlFilterResponse): SqlFilterResponse {
            return {
                ...val,
                requiresPreprocessing: (val.requiresPreprocessing) ?? true,
            };
        }

        /**
         * Properties supplied for Subnet
         */
        export interface SubnetResponse {
            /**
             * Resource ID of Virtual Network Subnet
             */
            id: string;
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
             * The type of identity that last modified the resource.
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

        export interface UserAssignedIdentityPropertiesResponse {
            /**
             * ARM ID of user Identity selected for encryption
             */
            userAssignedIdentity?: string;
        }

        /**
         * Recognized Dictionary value.
         */
        export interface UserAssignedIdentityResponse {
            /**
             * Client Id of user assigned identity
             */
            clientId: string;
            /**
             * Principal Id of user assigned identity
             */
            principalId: string;
        }

    }

    export namespace v20221001preview {
        /**
         * Represents the filter actions which are allowed for the transformation of a message that have been matched by a filter expression.
         */
        export interface ActionResponse {
            /**
             * This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20.
             */
            compatibilityLevel?: number;
            /**
             * Value that indicates whether the rule action requires preprocessing.
             */
            requiresPreprocessing?: boolean;
            /**
             * SQL expression. e.g. MyProperty='ABC'
             */
            sqlExpression?: string;
        }
        /**
         * actionResponseProvideDefaults sets the appropriate defaults for ActionResponse
         */
        export function actionResponseProvideDefaults(val: ActionResponse): ActionResponse {
            return {
                ...val,
                requiresPreprocessing: (val.requiresPreprocessing) ?? true,
            };
        }

        /**
         * ConnectionState information.
         */
        export interface ConnectionStateResponse {
            /**
             * Description of the connection state.
             */
            description?: string;
            /**
             * Status of the connection.
             */
            status?: string;
        }

        /**
         * Represents the correlation filter expression.
         */
        export interface CorrelationFilterResponse {
            /**
             * Content type of the message.
             */
            contentType?: string;
            /**
             * Identifier of the correlation.
             */
            correlationId?: string;
            /**
             * Application specific label.
             */
            label?: string;
            /**
             * Identifier of the message.
             */
            messageId?: string;
            /**
             * dictionary object for custom filters
             */
            properties?: {[key: string]: string};
            /**
             * Address of the queue to reply to.
             */
            replyTo?: string;
            /**
             * Session identifier to reply to.
             */
            replyToSessionId?: string;
            /**
             * Value that indicates whether the rule action requires preprocessing.
             */
            requiresPreprocessing?: boolean;
            /**
             * Session identifier.
             */
            sessionId?: string;
            /**
             * Address to send to.
             */
            to?: string;
        }
        /**
         * correlationFilterResponseProvideDefaults sets the appropriate defaults for CorrelationFilterResponse
         */
        export function correlationFilterResponseProvideDefaults(val: CorrelationFilterResponse): CorrelationFilterResponse {
            return {
                ...val,
                requiresPreprocessing: (val.requiresPreprocessing) ?? true,
            };
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
            keyVaultProperties?: v20221001preview.KeyVaultPropertiesResponse[];
            /**
             * Enable Infrastructure Encryption (Double Encryption)
             */
            requireInfrastructureEncryption?: boolean;
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
         * Properties to configure User Assigned Identities for Bring your Own Keys
         */
        export interface IdentityResponse {
            /**
             * ObjectId from the KeyVault
             */
            principalId: string;
            /**
             * TenantId from the KeyVault
             */
            tenantId: string;
            /**
             * Type of managed service identity.
             */
            type?: string;
            /**
             * Properties for User Assigned Identities
             */
            userAssignedIdentities?: {[key: string]: v20221001preview.UserAssignedIdentityResponse};
        }

        /**
         * Properties to configure keyVault Properties
         */
        export interface KeyVaultPropertiesResponse {
            identity?: v20221001preview.UserAssignedIdentityPropertiesResponse;
            /**
             * Name of the Key from KeyVault
             */
            keyName?: string;
            /**
             * Uri of KeyVault
             */
            keyVaultUri?: string;
            /**
             * Version of KeyVault
             */
            keyVersion?: string;
        }

        /**
         * Message Count Details.
         */
        export interface MessageCountDetailsResponse {
            /**
             * Number of active messages in the queue, topic, or subscription.
             */
            activeMessageCount: number;
            /**
             * Number of messages that are dead lettered.
             */
            deadLetterMessageCount: number;
            /**
             * Number of scheduled messages.
             */
            scheduledMessageCount: number;
            /**
             * Number of messages transferred into dead letters.
             */
            transferDeadLetterMessageCount: number;
            /**
             * Number of messages transferred to another queue, topic, or subscription.
             */
            transferMessageCount: number;
        }

        /**
         * Description of NetWorkRuleSet - IpRules resource.
         */
        export interface NWRuleSetIpRulesResponse {
            /**
             * The IP Filter Action
             */
            action?: string;
            /**
             * IP Mask
             */
            ipMask?: string;
        }
        /**
         * nwruleSetIpRulesResponseProvideDefaults sets the appropriate defaults for NWRuleSetIpRulesResponse
         */
        export function nwruleSetIpRulesResponseProvideDefaults(val: NWRuleSetIpRulesResponse): NWRuleSetIpRulesResponse {
            return {
                ...val,
                action: (val.action) ?? "Allow",
            };
        }

        /**
         * Description of VirtualNetworkRules - NetworkRules resource.
         */
        export interface NWRuleSetVirtualNetworkRulesResponse {
            /**
             * Value that indicates whether to ignore missing VNet Service Endpoint
             */
            ignoreMissingVnetServiceEndpoint?: boolean;
            /**
             * Subnet properties
             */
            subnet?: v20221001preview.SubnetResponse;
        }

        /**
         * Properties of the PrivateEndpointConnection.
         */
        export interface PrivateEndpointConnectionResponse {
            /**
             * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
             */
            id: string;
            /**
             * The geo-location where the resource lives
             */
            location: string;
            /**
             * The name of the resource
             */
            name: string;
            /**
             * The Private Endpoint resource for this Connection.
             */
            privateEndpoint?: v20221001preview.PrivateEndpointResponse;
            /**
             * Details about the state of the connection.
             */
            privateLinkServiceConnectionState?: v20221001preview.ConnectionStateResponse;
            /**
             * Provisioning state of the Private Endpoint Connection.
             */
            provisioningState?: string;
            /**
             * The system meta data relating to this resource.
             */
            systemData: v20221001preview.SystemDataResponse;
            /**
             * The type of the resource. E.g. "Microsoft.EventHub/Namespaces" or "Microsoft.EventHub/Namespaces/EventHubs"
             */
            type: string;
        }

        /**
         * PrivateEndpoint information.
         */
        export interface PrivateEndpointResponse {
            /**
             * The ARM identifier for Private Endpoint.
             */
            id?: string;
        }

        /**
         * Properties specific to client affine subscriptions.
         */
        export interface SBClientAffinePropertiesResponse {
            /**
             * Indicates the Client ID of the application that created the client-affine subscription.
             */
            clientId?: string;
            /**
             * For client-affine subscriptions, this value indicates whether the subscription is durable or not.
             */
            isDurable?: boolean;
            /**
             * For client-affine subscriptions, this value indicates whether the subscription is shared or not.
             */
            isShared?: boolean;
        }

        /**
         * SKU of the namespace.
         */
        export interface SBSkuResponse {
            /**
             * Messaging units for your service bus premium namespace. Valid capacities are {1, 2, 4, 8, 16} multiples of your properties.premiumMessagingPartitions setting. For example, If properties.premiumMessagingPartitions is 1 then possible capacity values are 1, 2, 4, 8, and 16. If properties.premiumMessagingPartitions is 4 then possible capacity values are 4, 8, 16, 32 and 64
             */
            capacity?: number;
            /**
             * Name of this SKU.
             */
            name: string;
            /**
             * The billing tier of this particular SKU.
             */
            tier?: string;
        }

        /**
         * Represents a filter which is a composition of an expression and an action that is executed in the pub/sub pipeline.
         */
        export interface SqlFilterResponse {
            /**
             * This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20.
             */
            compatibilityLevel?: number;
            /**
             * Value that indicates whether the rule action requires preprocessing.
             */
            requiresPreprocessing?: boolean;
            /**
             * The SQL expression. e.g. MyProperty='ABC'
             */
            sqlExpression?: string;
        }
        /**
         * sqlFilterResponseProvideDefaults sets the appropriate defaults for SqlFilterResponse
         */
        export function sqlFilterResponseProvideDefaults(val: SqlFilterResponse): SqlFilterResponse {
            return {
                ...val,
                requiresPreprocessing: (val.requiresPreprocessing) ?? true,
            };
        }

        /**
         * Properties supplied for Subnet
         */
        export interface SubnetResponse {
            /**
             * Resource ID of Virtual Network Subnet
             */
            id: string;
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
             * The type of identity that last modified the resource.
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

        export interface UserAssignedIdentityPropertiesResponse {
            /**
             * ARM ID of user Identity selected for encryption
             */
            userAssignedIdentity?: string;
        }

        /**
         * Recognized Dictionary value.
         */
        export interface UserAssignedIdentityResponse {
            /**
             * Client Id of user assigned identity
             */
            clientId: string;
            /**
             * Principal Id of user assigned identity
             */
            principalId: string;
        }

    }
}
