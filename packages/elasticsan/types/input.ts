import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Encryption identity for the volume group.
 */
export interface EncryptionIdentityArgs {
    /**
     * Resource identifier of the UserAssigned identity to be associated with server-side encryption on the volume group.
     */
    encryptionUserAssignedIdentity?: pulumi.Input<string>;
}

/**
 * The encryption settings on the volume group.
 */
export interface EncryptionPropertiesArgs {
    /**
     * The identity to be used with service-side encryption at rest.
     */
    encryptionIdentity?: pulumi.Input<EncryptionIdentityArgs>;
    /**
     * Properties provided by key vault.
     */
    keyVaultProperties?: pulumi.Input<KeyVaultPropertiesArgs>;
}

/**
 * Identity for the resource.
 */
export interface IdentityArgs {
    /**
     * The identity type.
     */
    type: pulumi.Input<string | enums.IdentityType>;
    /**
     * Gets or sets a list of key value pairs that describe the set of User Assigned identities that will be used with this volume group. The key is the ARM resource identifier of the identity.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Properties of key vault.
 */
export interface KeyVaultPropertiesArgs {
    /**
     * The name of KeyVault key.
     */
    keyName?: pulumi.Input<string>;
    /**
     * The Uri of KeyVault.
     */
    keyVaultUri?: pulumi.Input<string>;
    /**
     * The version of KeyVault key.
     */
    keyVersion?: pulumi.Input<string>;
}

/**
 * Parent resource information.
 */
export interface ManagedByInfoArgs {
    /**
     * Resource ID of the resource managing the volume, this is a restricted field and can only be set for internal use.
     */
    resourceId?: pulumi.Input<string>;
}

/**
 * A set of rules governing the network accessibility.
 */
export interface NetworkRuleSetArgs {
    /**
     * The list of virtual network rules.
     */
    virtualNetworkRules?: pulumi.Input<pulumi.Input<VirtualNetworkRuleArgs>[]>;
}

/**
 * Response for Private Link Service Connection state
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
 * The SKU name. Required for account creation; optional for update.
 */
export interface SkuArgs {
    /**
     * The sku name.
     */
    name: pulumi.Input<string | enums.SkuName>;
    /**
     * The sku tier.
     */
    tier?: pulumi.Input<string | enums.SkuTier>;
}

/**
 * Data used when creating a volume snapshot.
 */
export interface SnapshotCreationDataArgs {
    /**
     * Fully qualified resource ID of the volume. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes/{volumeName}"
     */
    sourceId: pulumi.Input<string>;
}

/**
 * Data source used when creating the volume.
 */
export interface SourceCreationDataArgs {
    /**
     * This enumerates the possible sources of a volume creation.
     */
    createSource?: pulumi.Input<string | enums.VolumeCreateOption>;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    sourceId?: pulumi.Input<string>;
}

/**
 * Virtual Network rule.
 */
export interface VirtualNetworkRuleArgs {
    /**
     * The action of virtual network rule.
     */
    action?: pulumi.Input<string | enums.Action>;
    /**
     * Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.
     */
    virtualNetworkResourceId: pulumi.Input<string>;
}
/**
 * virtualNetworkRuleArgsProvideDefaults sets the appropriate defaults for VirtualNetworkRuleArgs
 */
export function virtualNetworkRuleArgsProvideDefaults(val: VirtualNetworkRuleArgs): VirtualNetworkRuleArgs {
    return {
        ...val,
        action: (val.action) ?? "Allow",
    };
}
