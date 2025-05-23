import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The API entity reference.
 */
export interface ApiEntityReferenceResponse {
    /**
     * The Azure resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...
     */
    resourceId?: string;
}

/**
 * Cloud Hsm Cluster SKU information
 */
export interface CloudHsmClusterSkuResponse {
    /**
     * Sku capacity
     */
    capacity?: number;
    /**
     * Sku family of the Cloud HSM Cluster
     */
    family: string;
    /**
     * Sku name of the Cloud HSM Cluster
     */
    name: string;
}

/**
 * The Cloud HSM Properties
 */
export interface CloudHsmPropertiesResponse {
    /**
     * FQDN of the Cloud HSM
     */
    fqdn?: string;
    /**
     * The Cloud HSM State. Values are: Deploying, ConfiguringSlb, Starting, Starting, Failed, Failed, Deleting, DeletingSlbEntry, InitialProvisioning, Updating
     */
    state?: string;
    /**
     * The Cloud HSM State message
     */
    stateMessage?: string;
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
 * The network interface definition.
 */
export interface NetworkInterfaceResponse {
    /**
     * Private Ip address of the interface
     */
    privateIpAddress?: string;
    /**
     * The Azure resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...
     */
    resourceId: string;
}

/**
 * The network profile definition.
 */
export interface NetworkProfileResponse {
    /**
     * Specifies the list of resource Ids for the network interfaces associated with the dedicated HSM.
     */
    networkInterfaces?: NetworkInterfaceResponse[];
    /**
     * Specifies the identifier of the subnet.
     */
    subnet?: ApiEntityReferenceResponse;
}

/**
 * The private endpoint connection resource.
 */
export interface PrivateEndpointConnectionResponse {
    /**
     * Modified whenever there is a change in the state of private endpoint connection.
     */
    etag?: string;
    /**
     * The group ids for the private endpoint resource.
     */
    groupIds: string[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * The private endpoint resource.
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
 * The private endpoint resource.
 */
export interface PrivateEndpointResponse {
    /**
     * The ARM identifier for private endpoint.
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
 * SKU of the dedicated HSM
 */
export interface SkuResponse {
    /**
     * SKU of the dedicated HSM
     */
    name?: string;
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
