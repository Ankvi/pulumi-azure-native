import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The identity of the EnterprisePolicy.
 */
export interface EnterprisePolicyIdentityArgs {
    /**
     * The type of identity used for the EnterprisePolicy. Currently, the only supported type is 'SystemAssigned', which implicitly creates an identity.
     */
    type?: pulumi.Input<enums.ResourceIdentityType>;
}

/**
 * Url and version of the KeyVault Secret
 */
export interface KeyPropertiesArgs {
    /**
     * The identifier of the key vault key used to encrypt data.
     */
    name?: pulumi.Input<string>;
    /**
     * The version of the identity which will be used to access key vault.
     */
    version?: pulumi.Input<string>;
}

/**
 * Settings concerning key vault encryption for a configuration store.
 */
export interface KeyVaultPropertiesArgs {
    /**
     * Uri of KeyVault
     */
    id?: pulumi.Input<string>;
    /**
     * Identity of the secret that includes name and version.
     */
    key?: pulumi.Input<KeyPropertiesArgs>;
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
 * The encryption settings for a configuration store.
 */
export interface PropertiesEncryptionArgs {
    /**
     * Key vault properties.
     */
    keyVault?: pulumi.Input<KeyVaultPropertiesArgs>;
    /**
     * The state of onboarding, which only appears in the response.
     */
    state?: pulumi.Input<string | enums.State>;
}

/**
 * Settings concerning lockbox.
 */
export interface PropertiesLockboxArgs {
    /**
     * lockbox configuration
     */
    state?: pulumi.Input<string | enums.State>;
}

/**
 * Settings concerning network injection.
 */
export interface PropertiesNetworkInjectionArgs {
    /**
     * Network injection configuration
     */
    virtualNetworks?: pulumi.Input<VirtualNetworkPropertiesListArgs>;
}

/**
 * Properties of a subnet.
 */
export interface SubnetPropertiesArgs {
    /**
     * Subnet name.
     */
    name?: pulumi.Input<string>;
}

/**
 * Settings concerning the virtual network.
 */
export interface VirtualNetworkPropertiesArgs {
    /**
     * Uri of the virtual network.
     */
    id?: pulumi.Input<string>;
    /**
     * Properties of a subnet.
     */
    subnet?: pulumi.Input<SubnetPropertiesArgs>;
}

/**
 * A list of private link resources
 */
export interface VirtualNetworkPropertiesListArgs {
    /**
     * Next page link if any.
     */
    nextLink?: pulumi.Input<string>;
    /**
     * Array of virtual networks.
     */
    value?: pulumi.Input<pulumi.Input<VirtualNetworkPropertiesArgs>[]>;
}
