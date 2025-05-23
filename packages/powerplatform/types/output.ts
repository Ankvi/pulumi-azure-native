import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The identity of the EnterprisePolicy.
 */
export interface EnterprisePolicyIdentityResponse {
    /**
     * The principal id of EnterprisePolicy identity.
     */
    systemAssignedIdentityPrincipalId: string;
    /**
     * The tenant id associated with the EnterprisePolicy.
     */
    tenantId: string;
    /**
     * The type of identity used for the EnterprisePolicy. Currently, the only supported type is 'SystemAssigned', which implicitly creates an identity.
     */
    type?: string;
}

/**
 * Url and version of the KeyVault Secret
 */
export interface KeyPropertiesResponse {
    /**
     * The identifier of the key vault key used to encrypt data.
     */
    name?: string;
    /**
     * The version of the identity which will be used to access key vault.
     */
    version?: string;
}

/**
 * Settings concerning key vault encryption for a configuration store.
 */
export interface KeyVaultPropertiesResponse {
    /**
     * Uri of KeyVault
     */
    id?: string;
    /**
     * Identity of the secret that includes name and version.
     */
    key?: KeyPropertiesResponse;
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
 * The encryption settings for a configuration store.
 */
export interface PropertiesResponseEncryption {
    /**
     * Key vault properties.
     */
    keyVault?: KeyVaultPropertiesResponse;
    /**
     * The state of onboarding, which only appears in the response.
     */
    state?: string;
}

/**
 * Settings concerning lockbox.
 */
export interface PropertiesResponseLockbox {
    /**
     * lockbox configuration
     */
    state?: string;
}

/**
 * Settings concerning network injection.
 */
export interface PropertiesResponseNetworkInjection {
    /**
     * Network injection configuration
     */
    virtualNetworks?: VirtualNetworkPropertiesResponse[];
}

/**
 * Properties of a subnet.
 */
export interface SubnetPropertiesResponse {
    /**
     * Subnet name.
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
 * Settings concerning the virtual network.
 */
export interface VirtualNetworkPropertiesResponse {
    /**
     * Uri of the virtual network.
     */
    id?: string;
    /**
     * Properties of a subnet.
     */
    subnet?: SubnetPropertiesResponse;
}
