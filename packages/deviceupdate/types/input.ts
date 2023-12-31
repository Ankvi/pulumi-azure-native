import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Customer-initiated diagnostic log collection storage properties
 */
export interface DiagnosticStoragePropertiesArgs {
    /**
     * Authentication Type
     */
    authenticationType: pulumi.Input<string | enums.AuthenticationType>;
    /**
     * ConnectionString of the diagnostic storage account
     */
    connectionString?: pulumi.Input<string>;
    /**
     * ResourceId of the diagnostic storage account
     */
    resourceId: pulumi.Input<string>;
}

/**
 * The CMK encryption settings on the Device Update account.
 */
export interface EncryptionArgs {
    /**
     * The URI of the key vault
     */
    keyVaultKeyUri?: pulumi.Input<string>;
    /**
     * The full resourceId of the user assigned identity to be used for key vault access. Identity has to be also assigned to the Account
     */
    userAssignedIdentity?: pulumi.Input<string>;
}

/**
 * Group connectivity details.
 */
export interface GroupConnectivityInformationArgs {
    /**
     * List of customer visible FQDNs.
     */
    customerVisibleFqdns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * PrivateLinkService ARM region.
     */
    privateLinkServiceArmRegion?: pulumi.Input<string>;
    /**
     * Redirect map ID.
     */
    redirectMapId?: pulumi.Input<string>;
}

/**
 * Device Update account integration with IoT Hub settings.
 */
export interface IotHubSettingsArgs {
    /**
     * IoTHub resource ID
     */
    resourceId: pulumi.Input<string>;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The Private Endpoint Connection resource.
 */
export interface PrivateEndpointConnectionArgs {
    /**
     * Array of group IDs.
     */
    groupIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    privateLinkServiceConnectionState: pulumi.Input<PrivateLinkServiceConnectionStateArgs>;
}

/**
 * Private link service connection details.
 */
export interface PrivateLinkServiceConnectionArgs {
    /**
     * List of group IDs.
     */
    groupIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Private link service connection name.
     */
    name?: pulumi.Input<string>;
    /**
     * Request message.
     */
    requestMessage?: pulumi.Input<string>;
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
 * Private link service proxy details.
 */
export interface PrivateLinkServiceProxyArgs {
    /**
     * Group connectivity information.
     */
    groupConnectivityInformation?: pulumi.Input<pulumi.Input<GroupConnectivityInformationArgs>[]>;
    /**
     * NRP resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Remote private link service connection state
     */
    remotePrivateLinkServiceConnectionState?: pulumi.Input<PrivateLinkServiceConnectionStateArgs>;
}

/**
 * Remote private endpoint details.
 */
export interface RemotePrivateEndpointArgs {
    /**
     * Remote endpoint resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Original resource ID needed by Microsoft.Network.
     */
    immutableResourceId?: pulumi.Input<string>;
    /**
     * Original subscription ID needed by Microsoft.Network.
     */
    immutableSubscriptionId?: pulumi.Input<string>;
    /**
     * ARM location of the remote private endpoint.
     */
    location?: pulumi.Input<string>;
    /**
     * List of private link service connections that need manual approval.
     */
    manualPrivateLinkServiceConnections?: pulumi.Input<pulumi.Input<PrivateLinkServiceConnectionArgs>[]>;
    /**
     * List of automatically approved private link service connections.
     */
    privateLinkServiceConnections?: pulumi.Input<pulumi.Input<PrivateLinkServiceConnectionArgs>[]>;
    /**
     * List of private link service proxies.
     */
    privateLinkServiceProxies?: pulumi.Input<pulumi.Input<PrivateLinkServiceProxyArgs>[]>;
    /**
     * Virtual network traffic tag.
     */
    vnetTrafficTag?: pulumi.Input<string>;
}
