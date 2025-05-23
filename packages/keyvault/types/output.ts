import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * An identity that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID.
 */
export interface AccessPolicyEntry {
    /**
     *  Application ID of the client making request on behalf of a principal
     */
    applicationId?: string;
    /**
     * The object ID of a user, service principal or security group in the Azure Active Directory tenant for the vault. The object ID must be unique for the list of access policies.
     */
    objectId: string;
    /**
     * Permissions the identity has for keys, secrets and certificates.
     */
    permissions: Permissions;
    /**
     * The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
     */
    tenantId: string;
}

/**
 * An identity that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID.
 */
export interface AccessPolicyEntryResponse {
    /**
     *  Application ID of the client making request on behalf of a principal
     */
    applicationId?: string;
    /**
     * The object ID of a user, service principal or security group in the Azure Active Directory tenant for the vault. The object ID must be unique for the list of access policies.
     */
    objectId: string;
    /**
     * Permissions the identity has for keys, secrets and certificates.
     */
    permissions: PermissionsResponse;
    /**
     * The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
     */
    tenantId: string;
}

export interface ActionResponse {
    /**
     * The type of action.
     */
    type?: string;
}

/**
 * A rule governing the accessibility of a vault from a specific ip address or ip range.
 */
export interface IPRuleResponse {
    /**
     * An IPv4 address range in CIDR notation, such as '124.56.78.91' (simple IP address) or '124.56.78.0/24' (all addresses that start with 124.56.78).
     */
    value: string;
}

/**
 * The object attributes managed by the Azure Key Vault service.
 */
export interface KeyAttributesResponse {
    /**
     * Creation time in seconds since 1970-01-01T00:00:00Z.
     */
    created: number;
    /**
     * Determines whether or not the object is enabled.
     */
    enabled?: boolean;
    /**
     * Expiry date in seconds since 1970-01-01T00:00:00Z.
     */
    expires?: number;
    /**
     * Indicates if the private key can be exported.
     */
    exportable?: boolean;
    /**
     * Not before date in seconds since 1970-01-01T00:00:00Z.
     */
    notBefore?: number;
    /**
     * The deletion recovery level currently in effect for the object. If it contains 'Purgeable', then the object can be permanently deleted by a privileged user; otherwise, only the system can purge the object at the end of the retention interval.
     */
    recoveryLevel: string;
    /**
     * Last updated time in seconds since 1970-01-01T00:00:00Z.
     */
    updated: number;
}
/**
 * keyAttributesResponseProvideDefaults sets the appropriate defaults for KeyAttributesResponse
 */
export function keyAttributesResponseProvideDefaults(val: KeyAttributesResponse): KeyAttributesResponse {
    return {
        ...val,
        exportable: (val.exportable) ?? false,
    };
}

export interface KeyReleasePolicyResponse {
    /**
     * Content type and version of key release policy
     */
    contentType?: string;
    /**
     * Blob encoding the policy rules under which the key can be released.
     */
    data?: string;
}
/**
 * keyReleasePolicyResponseProvideDefaults sets the appropriate defaults for KeyReleasePolicyResponse
 */
export function keyReleasePolicyResponseProvideDefaults(val: KeyReleasePolicyResponse): KeyReleasePolicyResponse {
    return {
        ...val,
        contentType: (val.contentType) ?? "application/json; charset=utf-8",
    };
}

export interface KeyRotationPolicyAttributesResponse {
    /**
     * Creation time in seconds since 1970-01-01T00:00:00Z.
     */
    created: number;
    /**
     * The expiration time for the new key version. It should be in ISO8601 format. Eg: 'P90D', 'P1Y'.
     */
    expiryTime?: string;
    /**
     * Last updated time in seconds since 1970-01-01T00:00:00Z.
     */
    updated: number;
}

export interface LifetimeActionResponse {
    /**
     * The action of key rotation policy lifetimeAction.
     */
    action?: ActionResponse;
    /**
     * The trigger of key rotation policy lifetimeAction.
     */
    trigger?: TriggerResponse;
}

/**
 * A region that this managed HSM Pool has been extended to.
 */
export interface MHSMGeoReplicatedRegionResponse {
    /**
     * A boolean value that indicates whether the region is the primary region or a secondary region.
     */
    isPrimary?: boolean;
    /**
     * Name of the geo replicated region.
     */
    name?: string;
    /**
     * Provisioning state of the geo replicated region.
     */
    provisioningState: string;
}

/**
 * A rule governing the accessibility of a managed HSM pool from a specific IP address or IP range.
 */
export interface MHSMIPRuleResponse {
    /**
     * An IPv4 address range in CIDR notation, such as '124.56.78.91' (simple IP address) or '124.56.78.0/24' (all addresses that start with 124.56.78).
     */
    value: string;
}

/**
 * A set of rules governing the network accessibility of a managed hsm pool.
 */
export interface MHSMNetworkRuleSetResponse {
    /**
     * Tells what traffic can bypass network rules. This can be 'AzureServices' or 'None'.  If not specified the default is 'AzureServices'.
     */
    bypass?: string;
    /**
     * The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated.
     */
    defaultAction?: string;
    /**
     * The list of IP address rules.
     */
    ipRules?: MHSMIPRuleResponse[];
    /**
     * The list of virtual network rules.
     */
    virtualNetworkRules?: MHSMVirtualNetworkRuleResponse[];
}

/**
 * Private endpoint connection item.
 */
export interface MHSMPrivateEndpointConnectionItemResponse {
    /**
     * Modified whenever there is a change in the state of private endpoint connection.
     */
    etag?: string;
    /**
     * Id of private endpoint connection.
     */
    id?: string;
    /**
     * Properties of the private endpoint object.
     */
    privateEndpoint?: MHSMPrivateEndpointResponse;
    /**
     * Approval state of the private link connection.
     */
    privateLinkServiceConnectionState?: MHSMPrivateLinkServiceConnectionStateResponse;
    /**
     * Provisioning state of the private endpoint connection.
     */
    provisioningState: string;
}

/**
 * Private endpoint object properties.
 */
export interface MHSMPrivateEndpointResponse {
    /**
     * Full identifier of the private endpoint resource.
     */
    id: string;
}

/**
 * An object that represents the approval state of the private link connection.
 */
export interface MHSMPrivateLinkServiceConnectionStateResponse {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: string;
    /**
     * The reason for approval or rejection.
     */
    description?: string;
    /**
     * Indicates whether the connection has been approved, rejected or removed by the key vault owner.
     */
    status?: string;
}

/**
 * A rule governing the accessibility of a managed hsm pool from a specific virtual network.
 */
export interface MHSMVirtualNetworkRuleResponse {
    /**
     * Full resource id of a vnet subnet, such as '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'.
     */
    id: string;
}

/**
 * The security domain properties of the managed hsm.
 */
export interface ManagedHSMSecurityDomainPropertiesResponse {
    /**
     * Activation Status
     */
    activationStatus: string;
    /**
     * Activation Status Message.
     */
    activationStatusMessage: string;
}

/**
 * Properties of the managed HSM Pool
 */
export interface ManagedHsmPropertiesResponse {
    /**
     * Property specifying whether protection against purge is enabled for this managed HSM pool. Setting this property to true activates protection against purge for this managed HSM pool and its content - only the Managed HSM service may initiate a hard, irrecoverable deletion. Enabling this functionality is irreversible.
     */
    enablePurgeProtection?: boolean;
    /**
     * Property to specify whether the 'soft delete' functionality is enabled for this managed HSM pool. Soft delete is enabled by default for all managed HSMs and is immutable.
     */
    enableSoftDelete?: boolean;
    /**
     * The URI of the managed hsm pool for performing operations on keys.
     */
    hsmUri: string;
    /**
     * Array of initial administrators object ids for this managed hsm pool.
     */
    initialAdminObjectIds?: string[];
    /**
     * Rules governing the accessibility of the key vault from specific network locations.
     */
    networkAcls?: MHSMNetworkRuleSetResponse;
    /**
     * List of private endpoint connections associated with the managed hsm pool.
     */
    privateEndpointConnections: MHSMPrivateEndpointConnectionItemResponse[];
    /**
     * Provisioning state.
     */
    provisioningState: string;
    /**
     * Control permission to the managed HSM from public networks.
     */
    publicNetworkAccess?: string;
    /**
     * List of all regions associated with the managed hsm pool.
     */
    regions?: MHSMGeoReplicatedRegionResponse[];
    /**
     * The scheduled purge date in UTC.
     */
    scheduledPurgeDate: string;
    /**
     * Managed HSM security domain properties.
     */
    securityDomainProperties: ManagedHSMSecurityDomainPropertiesResponse;
    /**
     * Soft deleted data retention days. When you delete an HSM or a key, it will remain recoverable for the configured retention period or for a default period of 90 days. It accepts values between 7 and 90.
     */
    softDeleteRetentionInDays?: number;
    /**
     * Resource Status Message.
     */
    statusMessage: string;
    /**
     * The Azure Active Directory tenant ID that should be used for authenticating requests to the managed HSM pool.
     */
    tenantId?: string;
}
/**
 * managedHsmPropertiesResponseProvideDefaults sets the appropriate defaults for ManagedHsmPropertiesResponse
 */
export function managedHsmPropertiesResponseProvideDefaults(val: ManagedHsmPropertiesResponse): ManagedHsmPropertiesResponse {
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
export interface ManagedHsmSkuResponse {
    /**
     * SKU Family of the managed HSM Pool
     */
    family: string;
    /**
     * SKU of the managed HSM Pool
     */
    name: string;
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
 * A set of rules governing the network accessibility of a vault.
 */
export interface NetworkRuleSetResponse {
    /**
     * Tells what traffic can bypass network rules. This can be 'AzureServices' or 'None'.  If not specified the default is 'AzureServices'.
     */
    bypass?: string;
    /**
     * The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated.
     */
    defaultAction?: string;
    /**
     * The list of IP address rules.
     */
    ipRules?: IPRuleResponse[];
    /**
     * The list of virtual network rules.
     */
    virtualNetworkRules?: VirtualNetworkRuleResponse[];
}

/**
 * Permissions the identity has for keys, secrets, certificates and storage.
 */
export interface Permissions {
    /**
     * Permissions to certificates
     */
    certificates?: (string | enums.CertificatePermissions)[];
    /**
     * Permissions to keys
     */
    keys?: (string | enums.KeyPermissions)[];
    /**
     * Permissions to secrets
     */
    secrets?: (string | enums.SecretPermissions)[];
    /**
     * Permissions to storage accounts
     */
    storage?: (string | enums.StoragePermissions)[];
}

/**
 * Permissions the identity has for keys, secrets, certificates and storage.
 */
export interface PermissionsResponse {
    /**
     * Permissions to certificates
     */
    certificates?: string[];
    /**
     * Permissions to keys
     */
    keys?: string[];
    /**
     * Permissions to secrets
     */
    secrets?: string[];
    /**
     * Permissions to storage accounts
     */
    storage?: string[];
}

/**
 * Private endpoint connection item.
 */
export interface PrivateEndpointConnectionItemResponse {
    /**
     * Modified whenever there is a change in the state of private endpoint connection.
     */
    etag?: string;
    /**
     * Id of private endpoint connection.
     */
    id?: string;
    /**
     * Properties of the private endpoint object.
     */
    privateEndpoint?: PrivateEndpointResponse;
    /**
     * Approval state of the private link connection.
     */
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateResponse;
    /**
     * Provisioning state of the private endpoint connection.
     */
    provisioningState: string;
}

/**
 * Private endpoint object properties.
 */
export interface PrivateEndpointResponse {
    /**
     * Full identifier of the private endpoint resource.
     */
    id: string;
}

/**
 * An object that represents the approval state of the private link connection.
 */
export interface PrivateLinkServiceConnectionStateResponse {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: string;
    /**
     * The reason for approval or rejection.
     */
    description?: string;
    /**
     * Indicates whether the connection has been approved, rejected or removed by the key vault owner.
     */
    status?: string;
}

export interface RotationPolicyResponse {
    /**
     * The attributes of key rotation policy.
     */
    attributes?: KeyRotationPolicyAttributesResponse;
    /**
     * The lifetimeActions for key rotation action.
     */
    lifetimeActions?: LifetimeActionResponse[];
}

/**
 * The secret management attributes.
 */
export interface SecretAttributesResponse {
    /**
     * Creation time in seconds since 1970-01-01T00:00:00Z.
     */
    created: number;
    /**
     * Determines whether the object is enabled.
     */
    enabled?: boolean;
    /**
     * Expiry date in seconds since 1970-01-01T00:00:00Z.
     */
    expires?: number;
    /**
     * Not before date in seconds since 1970-01-01T00:00:00Z.
     */
    notBefore?: number;
    /**
     * Last updated time in seconds since 1970-01-01T00:00:00Z.
     */
    updated: number;
}

/**
 * Properties of the secret
 */
export interface SecretPropertiesResponse {
    /**
     * The attributes of the secret.
     */
    attributes?: SecretAttributesResponse;
    /**
     * The content type of the secret.
     */
    contentType?: string;
    /**
     * The URI to retrieve the current version of the secret.
     */
    secretUri: string;
    /**
     * The URI to retrieve the specific version of the secret.
     */
    secretUriWithVersion: string;
    /**
     * The value of the secret. NOTE: 'value' will never be returned from the service, as APIs using this model are is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets.
     */
    value?: string;
}

/**
 * SKU details
 */
export interface SkuResponse {
    /**
     * SKU family name
     */
    family: string;
    /**
     * SKU name to specify whether the key vault is a standard vault or a premium vault.
     */
    name: string;
}

/**
 * Metadata pertaining to creation and last modification of the key vault resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of the key vault resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the key vault resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the key vault resource.
     */
    createdByType?: string;
    /**
     * The timestamp of the key vault resource last modification (UTC).
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the key vault resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the key vault resource.
     */
    lastModifiedByType?: string;
}

export interface TriggerResponse {
    /**
     * The time duration after key creation to rotate the key. It only applies to rotate. It will be in ISO 8601 duration format. Eg: 'P90D', 'P1Y'.
     */
    timeAfterCreate?: string;
    /**
     * The time duration before key expiring to rotate or notify. It will be in ISO 8601 duration format. Eg: 'P90D', 'P1Y'.
     */
    timeBeforeExpiry?: string;
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

/**
 * Properties of the vault
 */
export interface VaultPropertiesResponse {
    /**
     * An array of 0 to 1024 identities that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID. When `createMode` is set to `recover`, access policies are not required. Otherwise, access policies are required.
     * These are also available as standalone resources. Do not mix inline and standalone resource as they will conflict with each other, leading to resources deletion.
     */
    accessPolicies?: AccessPolicyEntryResponse[];
    /**
     * Property specifying whether protection against purge is enabled for this vault. Setting this property to true activates protection against purge for this vault and its content - only the Key Vault service may initiate a hard, irrecoverable deletion. The setting is effective only if soft delete is also enabled. Enabling this functionality is irreversible - that is, the property does not accept false as its value.
     */
    enablePurgeProtection?: boolean;
    /**
     * Property that controls how data actions are authorized. When true, the key vault will use Role Based Access Control (RBAC) for authorization of data actions, and the access policies specified in vault properties will be  ignored. When false, the key vault will use the access policies specified in vault properties, and any policy stored on Azure Resource Manager will be ignored. If null or not specified, the vault is created with the default value of false. Note that management actions are always authorized with RBAC.
     */
    enableRbacAuthorization?: boolean;
    /**
     * Property to specify whether the 'soft delete' functionality is enabled for this key vault. If it's not set to any value(true or false) when creating new key vault, it will be set to true by default. Once set to true, it cannot be reverted to false.
     */
    enableSoftDelete?: boolean;
    /**
     * Property to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault.
     */
    enabledForDeployment?: boolean;
    /**
     * Property to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys.
     */
    enabledForDiskEncryption?: boolean;
    /**
     * Property to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault.
     */
    enabledForTemplateDeployment?: boolean;
    /**
     * The resource id of HSM Pool.
     */
    hsmPoolResourceId: string;
    /**
     * Rules governing the accessibility of the key vault from specific network locations.
     */
    networkAcls?: NetworkRuleSetResponse;
    /**
     * List of private endpoint connections associated with the key vault.
     */
    privateEndpointConnections: PrivateEndpointConnectionItemResponse[];
    /**
     * Provisioning state of the vault.
     */
    provisioningState: string;
    /**
     * Property to specify whether the vault will accept traffic from public internet. If set to 'disabled' all traffic except private endpoint traffic and that that originates from trusted services will be blocked. This will override the set firewall rules, meaning that even if the firewall rules are present we will not honor the rules.
     */
    publicNetworkAccess?: string;
    /**
     * SKU details
     */
    sku: SkuResponse;
    /**
     * softDelete data retention days. It accepts >=7 and <=90.
     */
    softDeleteRetentionInDays?: number;
    /**
     * The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
     */
    tenantId: string;
    /**
     * The URI of the vault for performing operations on keys and secrets.
     */
    vaultUri: string;
}
/**
 * vaultPropertiesResponseProvideDefaults sets the appropriate defaults for VaultPropertiesResponse
 */
export function vaultPropertiesResponseProvideDefaults(val: VaultPropertiesResponse): VaultPropertiesResponse {
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
export interface VirtualNetworkRuleResponse {
    /**
     * Full resource id of a vnet subnet, such as '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'.
     */
    id: string;
    /**
     * Property to specify whether NRP will ignore the check if parent subnet has serviceEndpoints configured.
     */
    ignoreMissingVnetServiceEndpoint?: boolean;
}
