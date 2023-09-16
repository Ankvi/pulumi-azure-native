import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace deviceupdate {
    /**
     * Private endpoint connection proxy object properties.
     */
    export interface ConnectionDetailsResponse {
        /**
         * Group ID.
         */
        groupId: string;
        /**
         * Connection details ID.
         */
        id: string;
        /**
         * Link ID.
         */
        linkIdentifier: string;
        /**
         * Member name.
         */
        memberName: string;
        /**
         * Private IP address.
         */
        privateIpAddress: string;
    }

    /**
     * Customer-initiated diagnostic log collection storage properties
     */
    export interface DiagnosticStoragePropertiesResponse {
        /**
         * Authentication Type
         */
        authenticationType: string;
        /**
         * ConnectionString of the diagnostic storage account
         */
        connectionString?: string;
        /**
         * ResourceId of the diagnostic storage account
         */
        resourceId: string;
    }

    /**
     * The CMK encryption settings on the Device Update account.
     */
    export interface EncryptionResponse {
        /**
         * The URI of the key vault
         */
        keyVaultKeyUri?: string;
        /**
         * The full resourceId of the user assigned identity to be used for key vault access. Identity has to be also assigned to the Account
         */
        userAssignedIdentity?: string;
    }

    /**
     * Group connectivity details.
     */
    export interface GroupConnectivityInformationResponse {
        /**
         * List of customer visible FQDNs.
         */
        customerVisibleFqdns?: string[];
        /**
         * Group ID.
         */
        groupId: string;
        /**
         * Internal FQDN.
         */
        internalFqdn: string;
        /**
         * Member name.
         */
        memberName: string;
        /**
         * PrivateLinkService ARM region.
         */
        privateLinkServiceArmRegion?: string;
        /**
         * Redirect map ID.
         */
        redirectMapId?: string;
    }

    /**
     * Device Update account integration with IoT Hub settings.
     */
    export interface IotHubSettingsResponse {
        /**
         * IoTHub resource ID
         */
        resourceId: string;
    }

    export interface LocationResponse {
        name?: string;
        /**
         * Whether the location is primary or failover
         */
        role?: string;
    }
    /**
     * locationResponseProvideDefaults sets the appropriate defaults for LocationResponse
     */
    export function locationResponseProvideDefaults(val: LocationResponse): LocationResponse {
        return {
            ...val,
            role: (val.role) ?? "Primary",
        };
    }

    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    export interface ManagedServiceIdentityResponse {
        /**
         * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        principalId: string;
        /**
         * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        tenantId: string;
        /**
         * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
         */
        type: string;
        /**
         * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
    }

    /**
     * The Private Endpoint Connection resource.
     */
    export interface PrivateEndpointConnectionResponse {
        /**
         * Array of group IDs.
         */
        groupIds?: string[];
        /**
         * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
         */
        id: string;
        /**
         * The name of the resource
         */
        name: string;
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
     * The Private Endpoint resource.
     */
    export interface PrivateEndpointResponse {
        /**
         * The ARM identifier for Private Endpoint
         */
        id: string;
    }

    /**
     * Private link service connection details.
     */
    export interface PrivateLinkServiceConnectionResponse {
        /**
         * List of group IDs.
         */
        groupIds?: string[];
        /**
         * Private link service connection name.
         */
        name?: string;
        /**
         * Request message.
         */
        requestMessage?: string;
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
     * Private link service proxy details.
     */
    export interface PrivateLinkServiceProxyResponse {
        /**
         * Group connectivity information.
         */
        groupConnectivityInformation?: GroupConnectivityInformationResponse[];
        /**
         * NRP resource ID.
         */
        id?: string;
        /**
         * Remote private endpoint connection details.
         */
        remotePrivateEndpointConnection?: PrivateLinkServiceProxyResponseRemotePrivateEndpointConnection;
        /**
         * Remote private link service connection state
         */
        remotePrivateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateResponse;
    }

    /**
     * Remote private endpoint connection details.
     */
    export interface PrivateLinkServiceProxyResponseRemotePrivateEndpointConnection {
        /**
         * Remote private endpoint connection ID.
         */
        id: string;
    }

    /**
     * Remote private endpoint details.
     */
    export interface RemotePrivateEndpointResponse {
        /**
         * List of connection details.
         */
        connectionDetails?: ConnectionDetailsResponse[];
        /**
         * Remote endpoint resource ID.
         */
        id?: string;
        /**
         * Original resource ID needed by Microsoft.Network.
         */
        immutableResourceId?: string;
        /**
         * Original subscription ID needed by Microsoft.Network.
         */
        immutableSubscriptionId?: string;
        /**
         * ARM location of the remote private endpoint.
         */
        location?: string;
        /**
         * List of private link service connections that need manual approval.
         */
        manualPrivateLinkServiceConnections?: PrivateLinkServiceConnectionResponse[];
        /**
         * List of automatically approved private link service connections.
         */
        privateLinkServiceConnections?: PrivateLinkServiceConnectionResponse[];
        /**
         * List of private link service proxies.
         */
        privateLinkServiceProxies?: PrivateLinkServiceProxyResponse[];
        /**
         * Virtual network traffic tag.
         */
        vnetTrafficTag?: string;
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

    /**
     * User assigned identity properties
     */
    export interface UserAssignedIdentityResponse {
        /**
         * The client ID of the assigned identity.
         */
        clientId: string;
        /**
         * The principal ID of the assigned identity.
         */
        principalId: string;
    }

    export namespace v20230701 {
        /**
         * Private endpoint connection proxy object properties.
         */
        export interface ConnectionDetailsResponse {
            /**
             * Group ID.
             */
            groupId: string;
            /**
             * Connection details ID.
             */
            id: string;
            /**
             * Link ID.
             */
            linkIdentifier: string;
            /**
             * Member name.
             */
            memberName: string;
            /**
             * Private IP address.
             */
            privateIpAddress: string;
        }

        /**
         * Customer-initiated diagnostic log collection storage properties
         */
        export interface DiagnosticStoragePropertiesResponse {
            /**
             * Authentication Type
             */
            authenticationType: string;
            /**
             * ConnectionString of the diagnostic storage account
             */
            connectionString?: string;
            /**
             * ResourceId of the diagnostic storage account
             */
            resourceId: string;
        }

        /**
         * The CMK encryption settings on the Device Update account.
         */
        export interface EncryptionResponse {
            /**
             * The URI of the key vault
             */
            keyVaultKeyUri?: string;
            /**
             * The full resourceId of the user assigned identity to be used for key vault access. Identity has to be also assigned to the Account
             */
            userAssignedIdentity?: string;
        }

        /**
         * Group connectivity details.
         */
        export interface GroupConnectivityInformationResponse {
            /**
             * List of customer visible FQDNs.
             */
            customerVisibleFqdns?: string[];
            /**
             * Group ID.
             */
            groupId: string;
            /**
             * Internal FQDN.
             */
            internalFqdn: string;
            /**
             * Member name.
             */
            memberName: string;
            /**
             * PrivateLinkService ARM region.
             */
            privateLinkServiceArmRegion?: string;
            /**
             * Redirect map ID.
             */
            redirectMapId?: string;
        }

        /**
         * Device Update account integration with IoT Hub settings.
         */
        export interface IotHubSettingsResponse {
            /**
             * IoTHub resource ID
             */
            resourceId: string;
        }

        export interface LocationResponse {
            name?: string;
            /**
             * Whether the location is primary or failover
             */
            role?: string;
        }
        /**
         * locationResponseProvideDefaults sets the appropriate defaults for LocationResponse
         */
        export function locationResponseProvideDefaults(val: LocationResponse): LocationResponse {
            return {
                ...val,
                role: (val.role) ?? "Primary",
            };
        }

        /**
         * Managed service identity (system assigned and/or user assigned identities)
         */
        export interface ManagedServiceIdentityResponse {
            /**
             * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
             */
            principalId: string;
            /**
             * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
             */
            tenantId: string;
            /**
             * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
             */
            type: string;
            /**
             * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
             */
            userAssignedIdentities?: {[key: string]: v20230701.UserAssignedIdentityResponse};
        }

        /**
         * The Private Endpoint Connection resource.
         */
        export interface PrivateEndpointConnectionResponse {
            /**
             * Array of group IDs.
             */
            groupIds?: string[];
            /**
             * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
             */
            id: string;
            /**
             * The name of the resource
             */
            name: string;
            /**
             * The resource of private end point.
             */
            privateEndpoint?: v20230701.PrivateEndpointResponse;
            /**
             * A collection of information about the state of the connection between service consumer and provider.
             */
            privateLinkServiceConnectionState: v20230701.PrivateLinkServiceConnectionStateResponse;
            /**
             * The provisioning state of the private endpoint connection resource.
             */
            provisioningState: string;
            /**
             * Azure Resource Manager metadata containing createdBy and modifiedBy information.
             */
            systemData: v20230701.SystemDataResponse;
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
         * Private link service connection details.
         */
        export interface PrivateLinkServiceConnectionResponse {
            /**
             * List of group IDs.
             */
            groupIds?: string[];
            /**
             * Private link service connection name.
             */
            name?: string;
            /**
             * Request message.
             */
            requestMessage?: string;
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
         * Private link service proxy details.
         */
        export interface PrivateLinkServiceProxyResponse {
            /**
             * Group connectivity information.
             */
            groupConnectivityInformation?: v20230701.GroupConnectivityInformationResponse[];
            /**
             * NRP resource ID.
             */
            id?: string;
            /**
             * Remote private endpoint connection details.
             */
            remotePrivateEndpointConnection?: v20230701.PrivateLinkServiceProxyResponseRemotePrivateEndpointConnection;
            /**
             * Remote private link service connection state
             */
            remotePrivateLinkServiceConnectionState?: v20230701.PrivateLinkServiceConnectionStateResponse;
        }

        /**
         * Remote private endpoint connection details.
         */
        export interface PrivateLinkServiceProxyResponseRemotePrivateEndpointConnection {
            /**
             * Remote private endpoint connection ID.
             */
            id: string;
        }

        /**
         * Remote private endpoint details.
         */
        export interface RemotePrivateEndpointResponse {
            /**
             * List of connection details.
             */
            connectionDetails?: v20230701.ConnectionDetailsResponse[];
            /**
             * Remote endpoint resource ID.
             */
            id?: string;
            /**
             * Original resource ID needed by Microsoft.Network.
             */
            immutableResourceId?: string;
            /**
             * Original subscription ID needed by Microsoft.Network.
             */
            immutableSubscriptionId?: string;
            /**
             * ARM location of the remote private endpoint.
             */
            location?: string;
            /**
             * List of private link service connections that need manual approval.
             */
            manualPrivateLinkServiceConnections?: v20230701.PrivateLinkServiceConnectionResponse[];
            /**
             * List of automatically approved private link service connections.
             */
            privateLinkServiceConnections?: v20230701.PrivateLinkServiceConnectionResponse[];
            /**
             * List of private link service proxies.
             */
            privateLinkServiceProxies?: v20230701.PrivateLinkServiceProxyResponse[];
            /**
             * Virtual network traffic tag.
             */
            vnetTrafficTag?: string;
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

        /**
         * User assigned identity properties
         */
        export interface UserAssignedIdentityResponse {
            /**
             * The client ID of the assigned identity.
             */
            clientId: string;
            /**
             * The principal ID of the assigned identity.
             */
            principalId: string;
        }

    }
}
