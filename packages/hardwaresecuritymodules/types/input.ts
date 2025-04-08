import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The API entity reference.
 */
export interface ApiEntityReferenceArgs {
    /**
     * The Azure resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...
     */
    resourceId?: pulumi.Input<string>;
}

/**
 * Cloud Hsm Cluster SKU information
 */
export interface CloudHsmClusterSkuArgs {
    /**
     * Sku capacity
     */
    capacity?: pulumi.Input<number>;
    /**
     * Sku family of the Cloud HSM Cluster
     */
    family: pulumi.Input<string | enums.CloudHsmClusterSkuFamily>;
    /**
     * Sku name of the Cloud HSM Cluster
     */
    name: pulumi.Input<enums.CloudHsmClusterSkuName>;
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
 * The network interface definition.
 */
export interface NetworkInterfaceArgs {
    /**
     * Private Ip address of the interface
     */
    privateIpAddress?: pulumi.Input<string>;
}

/**
 * The network profile definition.
 */
export interface NetworkProfileArgs {
    /**
     * Specifies the list of resource Ids for the network interfaces associated with the dedicated HSM.
     */
    networkInterfaces?: pulumi.Input<pulumi.Input<NetworkInterfaceArgs>[]>;
    /**
     * Specifies the identifier of the subnet.
     */
    subnet?: pulumi.Input<ApiEntityReferenceArgs>;
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
 * SKU of the dedicated HSM
 */
export interface SkuArgs {
    /**
     * SKU of the dedicated HSM
     */
    name?: pulumi.Input<string | enums.SkuName>;
}
