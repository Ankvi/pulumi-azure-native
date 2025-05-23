import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * An identity that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID.
 */
export interface AccessPolicyEntryArgs {
    /**
     *  Application ID of the client making request on behalf of a principal
     */
    applicationId?: pulumi.Input<string>;
    /**
     * The object ID of a user, service principal or security group in the Azure Active Directory tenant for the vault. The object ID must be unique for the list of access policies.
     */
    objectId: pulumi.Input<string>;
    /**
     * Permissions the identity has for keys, secrets and certificates.
     */
    permissions: pulumi.Input<PermissionsArgs>;
    /**
     * The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
     */
    tenantId: pulumi.Input<string>;
}

export interface ActionArgs {
    /**
     * The type of action.
     */
    type?: pulumi.Input<enums.KeyRotationPolicyActionType>;
}

/**
 * A rule governing the accessibility of a vault from a specific ip address or ip range.
 */
export interface IPRuleArgs {
    /**
     * An IPv4 address range in CIDR notation, such as '124.56.78.91' (simple IP address) or '124.56.78.0/24' (all addresses that start with 124.56.78).
     */
    value: pulumi.Input<string>;
}

/**
 * The object attributes managed by the Azure Key Vault service.
 */
export interface KeyAttributesArgs {
    /**
     * Determines whether or not the object is enabled.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Expiry date in seconds since 1970-01-01T00:00:00Z.
     */
    expires?: pulumi.Input<number>;
    /**
     * Indicates if the private key can be exported.
     */
    exportable?: pulumi.Input<boolean>;
    /**
     * Not before date in seconds since 1970-01-01T00:00:00Z.
     */
    notBefore?: pulumi.Input<number>;
}
/**
 * keyAttributesArgsProvideDefaults sets the appropriate defaults for KeyAttributesArgs
 */
export function keyAttributesArgsProvideDefaults(val: KeyAttributesArgs): KeyAttributesArgs {
    return {
        ...val,
        exportable: (val.exportable) ?? false,
    };
}

/**
 * The properties of the key.
 */
export interface KeyPropertiesArgs {
    /**
     * The attributes of the key.
     */
    attributes?: pulumi.Input<KeyAttributesArgs>;
    /**
     * The elliptic curve name. For valid values, see JsonWebKeyCurveName. Default for EC and EC-HSM keys is P-256
     */
    curveName?: pulumi.Input<string | enums.JsonWebKeyCurveName>;
    keyOps?: pulumi.Input<pulumi.Input<string | enums.JsonWebKeyOperation>[]>;
    /**
     * The key size in bits. For example: 2048, 3072, or 4096 for RSA. Default for RSA and RSA-HSM keys is 2048. Exception made for bring your own key (BYOK), key exchange keys default to 4096.
     */
    keySize?: pulumi.Input<number>;
    /**
     * The type of the key. For valid values, see JsonWebKeyType.
     */
    kty?: pulumi.Input<string | enums.JsonWebKeyType>;
    /**
     * Key release policy in response. It will be used for both output and input. Omitted if empty
     */
    releasePolicy?: pulumi.Input<KeyReleasePolicyArgs>;
    /**
     * Key rotation policy in response. It will be used for both output and input. Omitted if empty
     */
    rotationPolicy?: pulumi.Input<RotationPolicyArgs>;
}
/**
 * keyPropertiesArgsProvideDefaults sets the appropriate defaults for KeyPropertiesArgs
 */
export function keyPropertiesArgsProvideDefaults(val: KeyPropertiesArgs): KeyPropertiesArgs {
    return {
        ...val,
        attributes: (val.attributes ? pulumi.output(val.attributes).apply(keyAttributesArgsProvideDefaults) : undefined),
        releasePolicy: (val.releasePolicy ? pulumi.output(val.releasePolicy).apply(keyReleasePolicyArgsProvideDefaults) : undefined),
    };
}

export interface KeyReleasePolicyArgs {
    /**
     * Content type and version of key release policy
     */
    contentType?: pulumi.Input<string>;
    /**
     * Blob encoding the policy rules under which the key can be released.
     */
    data?: pulumi.Input<string>;
}
/**
 * keyReleasePolicyArgsProvideDefaults sets the appropriate defaults for KeyReleasePolicyArgs
 */
export function keyReleasePolicyArgsProvideDefaults(val: KeyReleasePolicyArgs): KeyReleasePolicyArgs {
    return {
        ...val,
        contentType: (val.contentType) ?? "application/json; charset=utf-8",
    };
}

export interface KeyRotationPolicyAttributesArgs {
    /**
     * The expiration time for the new key version. It should be in ISO8601 format. Eg: 'P90D', 'P1Y'.
     */
    expiryTime?: pulumi.Input<string>;
}

export interface LifetimeActionArgs {
    /**
     * The action of key rotation policy lifetimeAction.
     */
    action?: pulumi.Input<ActionArgs>;
    /**
     * The trigger of key rotation policy lifetimeAction.
     */
    trigger?: pulumi.Input<TriggerArgs>;
}

/**
 * A region that this managed HSM Pool has been extended to.
 */
export interface MHSMGeoReplicatedRegionArgs {
    /**
     * A boolean value that indicates whether the region is the primary region or a secondary region.
     */
    isPrimary?: pulumi.Input<boolean>;
    /**
     * Name of the geo replicated region.
     */
    name?: pulumi.Input<string>;
}

/**
 * A rule governing the accessibility of a managed HSM pool from a specific IP address or IP range.
 */
export interface MHSMIPRuleArgs {
    /**
     * An IPv4 address range in CIDR notation, such as '124.56.78.91' (simple IP address) or '124.56.78.0/24' (all addresses that start with 124.56.78).
     */
    value: pulumi.Input<string>;
}

/**
 * A set of rules governing the network accessibility of a managed hsm pool.
 */
export interface MHSMNetworkRuleSetArgs {
    /**
     * Tells what traffic can bypass network rules. This can be 'AzureServices' or 'None'.  If not specified the default is 'AzureServices'.
     */
    bypass?: pulumi.Input<string | enums.NetworkRuleBypassOptions>;
    /**
     * The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated.
     */
    defaultAction?: pulumi.Input<string | enums.NetworkRuleAction>;
    /**
     * The list of IP address rules.
     */
    ipRules?: pulumi.Input<pulumi.Input<MHSMIPRuleArgs>[]>;
    /**
     * The list of virtual network rules.
     */
    virtualNetworkRules?: pulumi.Input<pulumi.Input<MHSMVirtualNetworkRuleArgs>[]>;
}

/**
 * An object that represents the approval state of the private link connection.
 */
export interface MHSMPrivateLinkServiceConnectionStateArgs {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: pulumi.Input<string | enums.ActionsRequired>;
    /**
     * The reason for approval or rejection.
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether the connection has been approved, rejected or removed by the key vault owner.
     */
    status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
}

/**
 * A rule governing the accessibility of a managed hsm pool from a specific virtual network.
 */
export interface MHSMVirtualNetworkRuleArgs {
    /**
     * Full resource id of a vnet subnet, such as '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'.
     */
    id: pulumi.Input<string>;
}

/**
 * Properties of the managed HSM Pool
 */
export interface ManagedHsmPropertiesArgs {
    /**
     * The create mode to indicate whether the resource is being created or is being recovered from a deleted resource.
     */
    createMode?: pulumi.Input<enums.CreateMode>;
    /**
     * Property specifying whether protection against purge is enabled for this managed HSM pool. Setting this property to true activates protection against purge for this managed HSM pool and its content - only the Managed HSM service may initiate a hard, irrecoverable deletion. Enabling this functionality is irreversible.
     */
    enablePurgeProtection?: pulumi.Input<boolean>;
    /**
     * Property to specify whether the 'soft delete' functionality is enabled for this managed HSM pool. Soft delete is enabled by default for all managed HSMs and is immutable.
     */
    enableSoftDelete?: pulumi.Input<boolean>;
    /**
     * Array of initial administrators object ids for this managed hsm pool.
     */
    initialAdminObjectIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Rules governing the accessibility of the key vault from specific network locations.
     */
    networkAcls?: pulumi.Input<MHSMNetworkRuleSetArgs>;
    /**
     * Control permission to the managed HSM from public networks.
     */
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccess>;
    /**
     * List of all regions associated with the managed hsm pool.
     */
    regions?: pulumi.Input<pulumi.Input<MHSMGeoReplicatedRegionArgs>[]>;
    /**
     * Soft deleted data retention days. When you delete an HSM or a key, it will remain recoverable for the configured retention period or for a default period of 90 days. It accepts values between 7 and 90.
     */
    softDeleteRetentionInDays?: pulumi.Input<number>;
    /**
     * The Azure Active Directory tenant ID that should be used for authenticating requests to the managed HSM pool.
     */
    tenantId?: pulumi.Input<string>;
}
/**
 * managedHsmPropertiesArgsProvideDefaults sets the appropriate defaults for ManagedHsmPropertiesArgs
 */
export function managedHsmPropertiesArgsProvideDefaults(val: ManagedHsmPropertiesArgs): ManagedHsmPropertiesArgs {
    return {
        ...val,
        enablePurgeProtection: (val.enablePurgeProtection) ?? true,
        enableSoftDelete: (val.enableSoftDelete) ?? true,
        publicNetworkAccess: (val.publicNetworkAccess) ?? "Enabled",
        softDeleteRetentionInDays: (val.softDeleteRetentionInDays) ?? 90,
    };
}

/**
 * SKU details
 */
export interface ManagedHsmSkuArgs {
    /**
     * SKU Family of the managed HSM Pool
     */
    family: pulumi.Input<string | enums.ManagedHsmSkuFamily>;
    /**
     * SKU of the managed HSM Pool
     */
    name: pulumi.Input<enums.ManagedHsmSkuName>;
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
 * A set of rules governing the network accessibility of a vault.
 */
export interface NetworkRuleSetArgs {
    /**
     * Tells what traffic can bypass network rules. This can be 'AzureServices' or 'None'.  If not specified the default is 'AzureServices'.
     */
    bypass?: pulumi.Input<string | enums.NetworkRuleBypassOptions>;
    /**
     * The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated.
     */
    defaultAction?: pulumi.Input<string | enums.NetworkRuleAction>;
    /**
     * The list of IP address rules.
     */
    ipRules?: pulumi.Input<pulumi.Input<IPRuleArgs>[]>;
    /**
     * The list of virtual network rules.
     */
    virtualNetworkRules?: pulumi.Input<pulumi.Input<VirtualNetworkRuleArgs>[]>;
}

/**
 * Permissions the identity has for keys, secrets, certificates and storage.
 */
export interface PermissionsArgs {
    /**
     * Permissions to certificates
     */
    certificates?: pulumi.Input<pulumi.Input<string | enums.CertificatePermissions>[]>;
    /**
     * Permissions to keys
     */
    keys?: pulumi.Input<pulumi.Input<string | enums.KeyPermissions>[]>;
    /**
     * Permissions to secrets
     */
    secrets?: pulumi.Input<pulumi.Input<string | enums.SecretPermissions>[]>;
    /**
     * Permissions to storage accounts
     */
    storage?: pulumi.Input<pulumi.Input<string | enums.StoragePermissions>[]>;
}

/**
 * An object that represents the approval state of the private link connection.
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: pulumi.Input<string | enums.ActionsRequired>;
    /**
     * The reason for approval or rejection.
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether the connection has been approved, rejected or removed by the key vault owner.
     */
    status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
}

export interface RotationPolicyArgs {
    /**
     * The attributes of key rotation policy.
     */
    attributes?: pulumi.Input<KeyRotationPolicyAttributesArgs>;
    /**
     * The lifetimeActions for key rotation action.
     */
    lifetimeActions?: pulumi.Input<pulumi.Input<LifetimeActionArgs>[]>;
}

/**
 * The secret management attributes.
 */
export interface SecretAttributesArgs {
    /**
     * Determines whether the object is enabled.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Expiry date in seconds since 1970-01-01T00:00:00Z.
     */
    expires?: pulumi.Input<number>;
    /**
     * Not before date in seconds since 1970-01-01T00:00:00Z.
     */
    notBefore?: pulumi.Input<number>;
}

/**
 * Properties of the secret
 */
export interface SecretPropertiesArgs {
    /**
     * The attributes of the secret.
     */
    attributes?: pulumi.Input<SecretAttributesArgs>;
    /**
     * The content type of the secret.
     */
    contentType?: pulumi.Input<string>;
    /**
     * The value of the secret. NOTE: 'value' will never be returned from the service, as APIs using this model are is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets.
     */
    value?: pulumi.Input<string>;
}

/**
 * SKU details
 */
export interface SkuArgs {
    /**
     * SKU family name
     */
    family: pulumi.Input<string | enums.SkuFamily>;
    /**
     * SKU name to specify whether the key vault is a standard vault or a premium vault.
     */
    name: pulumi.Input<enums.SkuName>;
}

export interface TriggerArgs {
    /**
     * The time duration after key creation to rotate the key. It only applies to rotate. It will be in ISO 8601 duration format. Eg: 'P90D', 'P1Y'.
     */
    timeAfterCreate?: pulumi.Input<string>;
    /**
     * The time duration before key expiring to rotate or notify. It will be in ISO 8601 duration format. Eg: 'P90D', 'P1Y'.
     */
    timeBeforeExpiry?: pulumi.Input<string>;
}

/**
 * Properties of the vault
 */
export interface VaultPropertiesArgs {
    /**
     * An array of 0 to 1024 identities that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID. When `createMode` is set to `recover`, access policies are not required. Otherwise, access policies are required.
     * These are also available as standalone resources. Do not mix inline and standalone resource as they will conflict with each other, leading to resources deletion.
     */
    accessPolicies?: pulumi.Input<pulumi.Input<AccessPolicyEntryArgs>[]>;
    /**
     * The vault's create mode to indicate whether the vault need to be recovered or not.
     */
    createMode?: pulumi.Input<enums.CreateMode>;
    /**
     * Property specifying whether protection against purge is enabled for this vault. Setting this property to true activates protection against purge for this vault and its content - only the Key Vault service may initiate a hard, irrecoverable deletion. The setting is effective only if soft delete is also enabled. Enabling this functionality is irreversible - that is, the property does not accept false as its value.
     */
    enablePurgeProtection?: pulumi.Input<boolean>;
    /**
     * Property that controls how data actions are authorized. When true, the key vault will use Role Based Access Control (RBAC) for authorization of data actions, and the access policies specified in vault properties will be  ignored. When false, the key vault will use the access policies specified in vault properties, and any policy stored on Azure Resource Manager will be ignored. If null or not specified, the vault is created with the default value of false. Note that management actions are always authorized with RBAC.
     */
    enableRbacAuthorization?: pulumi.Input<boolean>;
    /**
     * Property to specify whether the 'soft delete' functionality is enabled for this key vault. If it's not set to any value(true or false) when creating new key vault, it will be set to true by default. Once set to true, it cannot be reverted to false.
     */
    enableSoftDelete?: pulumi.Input<boolean>;
    /**
     * Property to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault.
     */
    enabledForDeployment?: pulumi.Input<boolean>;
    /**
     * Property to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys.
     */
    enabledForDiskEncryption?: pulumi.Input<boolean>;
    /**
     * Property to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault.
     */
    enabledForTemplateDeployment?: pulumi.Input<boolean>;
    /**
     * Rules governing the accessibility of the key vault from specific network locations.
     */
    networkAcls?: pulumi.Input<NetworkRuleSetArgs>;
    /**
     * Property to specify whether the vault will accept traffic from public internet. If set to 'disabled' all traffic except private endpoint traffic and that that originates from trusted services will be blocked. This will override the set firewall rules, meaning that even if the firewall rules are present we will not honor the rules.
     */
    publicNetworkAccess?: pulumi.Input<string>;
    /**
     * SKU details
     */
    sku: pulumi.Input<SkuArgs>;
    /**
     * softDelete data retention days. It accepts >=7 and <=90.
     */
    softDeleteRetentionInDays?: pulumi.Input<number>;
    /**
     * The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
     */
    tenantId: pulumi.Input<string>;
}
/**
 * vaultPropertiesArgsProvideDefaults sets the appropriate defaults for VaultPropertiesArgs
 */
export function vaultPropertiesArgsProvideDefaults(val: VaultPropertiesArgs): VaultPropertiesArgs {
    return {
        ...val,
        enableRbacAuthorization: (val.enableRbacAuthorization) ?? false,
        enableSoftDelete: (val.enableSoftDelete) ?? true,
        enabledForDeployment: (val.enabledForDeployment) ?? false,
        enabledForDiskEncryption: (val.enabledForDiskEncryption) ?? false,
        enabledForTemplateDeployment: (val.enabledForTemplateDeployment) ?? false,
        publicNetworkAccess: (val.publicNetworkAccess) ?? "enabled",
        softDeleteRetentionInDays: (val.softDeleteRetentionInDays) ?? 90,
    };
}

/**
 * A rule governing the accessibility of a vault from a specific virtual network.
 */
export interface VirtualNetworkRuleArgs {
    /**
     * Full resource id of a vnet subnet, such as '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'.
     */
    id: pulumi.Input<string>;
    /**
     * Property to specify whether NRP will ignore the check if parent subnet has serviceEndpoints configured.
     */
    ignoreMissingVnetServiceEndpoint?: pulumi.Input<boolean>;
}
