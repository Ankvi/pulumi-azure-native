import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The identity of the EnterprisePolicy.
 */
export interface EnterprisePolicyIdentityArgs {
    /**
     * The type of identity used for the EnterprisePolicy. Currently, the only supported type is 'SystemAssigned', which implicitly creates an identity.
     */
    type?: pulumi.Input<enums.ResourceIdentityType | undefined>;
}

/**
 * Url and version of the KeyVault Secret
 */
export interface KeyPropertiesArgs {
    /**
     * The identifier of the key vault key used to encrypt data.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * The version of the identity which will be used to access key vault.
     */
    version?: pulumi.Input<string | undefined>;
}

/**
 * Settings concerning key vault encryption for a configuration store.
 */
export interface KeyVaultPropertiesArgs {
    /**
     * Uri of KeyVault
     */
    id?: pulumi.Input<string | undefined>;
    /**
     * Identity of the secret that includes name and version.
     */
    key?: pulumi.Input<KeyPropertiesArgs | undefined>;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: pulumi.Input<string | undefined>;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus | undefined>;
}

/**
 * The encryption settings for a configuration store.
 */
export interface PropertiesEncryptionArgs {
    /**
     * Key vault properties.
     */
    keyVault?: pulumi.Input<KeyVaultPropertiesArgs | undefined>;
    /**
     * The state of onboarding, which only appears in the response.
     */
    state?: pulumi.Input<string | enums.State | undefined>;
}

/**
 * Settings concerning lockbox.
 */
export interface PropertiesLockboxArgs {
    /**
     * lockbox configuration
     */
    state?: pulumi.Input<string | enums.State | undefined>;
}

/**
 * Settings concerning network injection.
 */
export interface PropertiesNetworkInjectionArgs {
    /**
     * Network injection configuration
     */
    virtualNetworks?: pulumi.Input<pulumi.Input<VirtualNetworkPropertiesArgs>[] | undefined>;
}

/**
 * Properties of a subnet.
 */
export interface SubnetPropertiesArgs {
    /**
     * Subnet name.
     */
    name?: pulumi.Input<string | undefined>;
}

/**
 * Settings concerning the virtual network.
 */
export interface VirtualNetworkPropertiesArgs {
    /**
     * Uri of the virtual network.
     */
    id?: pulumi.Input<string | undefined>;
    /**
     * Properties of a subnet.
     */
    subnet?: pulumi.Input<SubnetPropertiesArgs | undefined>;
}
