export const ActionsRequired = {
    None: "None",
} as const;

/**
 * A message indicating if changes on the service provider require any updates on the consumer.
 */
export type ActionsRequired = (typeof ActionsRequired)[keyof typeof ActionsRequired];

export const CertificatePermissions = {
    All: "all",
    Get: "get",
    List: "list",
    Delete: "delete",
    Create: "create",
    Import: "import",
    Update: "update",
    Managecontacts: "managecontacts",
    Getissuers: "getissuers",
    Listissuers: "listissuers",
    Setissuers: "setissuers",
    Deleteissuers: "deleteissuers",
    Manageissuers: "manageissuers",
    Recover: "recover",
    Purge: "purge",
    Backup: "backup",
    Restore: "restore",
} as const;

export type CertificatePermissions = (typeof CertificatePermissions)[keyof typeof CertificatePermissions];

export const CreateMode = {
    Recover: "recover",
    Default: "default",
} as const;

/**
 * The vault's create mode to indicate whether the vault need to be recovered or not.
 */
export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const JsonWebKeyCurveName = {
    P_256: "P-256",
    P_384: "P-384",
    P_521: "P-521",
    P_256K: "P-256K",
} as const;

/**
 * The elliptic curve name. For valid values, see JsonWebKeyCurveName. Default for EC and EC-HSM keys is P-256
 */
export type JsonWebKeyCurveName = (typeof JsonWebKeyCurveName)[keyof typeof JsonWebKeyCurveName];

export const JsonWebKeyOperation = {
    Encrypt: "encrypt",
    Decrypt: "decrypt",
    Sign: "sign",
    Verify: "verify",
    WrapKey: "wrapKey",
    UnwrapKey: "unwrapKey",
    Import: "import",
    Release: "release",
} as const;

/**
 * The permitted JSON web key operations of the key. For more information, see JsonWebKeyOperation.
 */
export type JsonWebKeyOperation = (typeof JsonWebKeyOperation)[keyof typeof JsonWebKeyOperation];

export const JsonWebKeyType = {
    EC: "EC",
    EC_HSM: "EC-HSM",
    RSA: "RSA",
    RSA_HSM: "RSA-HSM",
} as const;

/**
 * The type of the key. For valid values, see JsonWebKeyType.
 */
export type JsonWebKeyType = (typeof JsonWebKeyType)[keyof typeof JsonWebKeyType];

export const KeyPermissions = {
    All: "all",
    Encrypt: "encrypt",
    Decrypt: "decrypt",
    WrapKey: "wrapKey",
    UnwrapKey: "unwrapKey",
    Sign: "sign",
    Verify: "verify",
    Get: "get",
    List: "list",
    Create: "create",
    Update: "update",
    Import: "import",
    Delete: "delete",
    Backup: "backup",
    Restore: "restore",
    Recover: "recover",
    Purge: "purge",
    Release: "release",
    Rotate: "rotate",
    Getrotationpolicy: "getrotationpolicy",
    Setrotationpolicy: "setrotationpolicy",
} as const;

export type KeyPermissions = (typeof KeyPermissions)[keyof typeof KeyPermissions];

export const KeyRotationPolicyActionType = {
    Rotate: "rotate",
    Notify: "notify",
} as const;

/**
 * The type of action.
 */
export type KeyRotationPolicyActionType = (typeof KeyRotationPolicyActionType)[keyof typeof KeyRotationPolicyActionType];

export const ManagedHsmSkuFamily = {
    B: "B",
    C: "C",
} as const;

/**
 * SKU Family of the managed HSM Pool
 */
export type ManagedHsmSkuFamily = (typeof ManagedHsmSkuFamily)[keyof typeof ManagedHsmSkuFamily];

export const ManagedHsmSkuName = {
    Standard_B1: "Standard_B1",
    Custom_B32: "Custom_B32",
    Custom_B6: "Custom_B6",
    Custom_C42: "Custom_C42",
    Custom_C10: "Custom_C10",
} as const;

/**
 * SKU of the managed HSM Pool
 */
export type ManagedHsmSkuName = (typeof ManagedHsmSkuName)[keyof typeof ManagedHsmSkuName];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const NetworkRuleAction = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

/**
 * The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated.
 */
export type NetworkRuleAction = (typeof NetworkRuleAction)[keyof typeof NetworkRuleAction];

export const NetworkRuleBypassOptions = {
    AzureServices: "AzureServices",
    None: "None",
} as const;

/**
 * Tells what traffic can bypass network rules. This can be 'AzureServices' or 'None'.  If not specified the default is 'AzureServices'.
 */
export type NetworkRuleBypassOptions = (typeof NetworkRuleBypassOptions)[keyof typeof NetworkRuleBypassOptions];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

/**
 * Indicates whether the connection has been approved, rejected or removed by the key vault owner.
 */
export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Control permission to the managed HSM from public networks.
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const SecretPermissions = {
    All: "all",
    Get: "get",
    List: "list",
    Set: "set",
    Delete: "delete",
    Backup: "backup",
    Restore: "restore",
    Recover: "recover",
    Purge: "purge",
} as const;

export type SecretPermissions = (typeof SecretPermissions)[keyof typeof SecretPermissions];

export const SkuFamily = {
    A: "A",
} as const;

/**
 * SKU family name
 */
export type SkuFamily = (typeof SkuFamily)[keyof typeof SkuFamily];

export const SkuName = {
    Standard: "standard",
    Premium: "premium",
} as const;

/**
 * SKU name to specify whether the key vault is a standard vault or a premium vault.
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const StoragePermissions = {
    All: "all",
    Get: "get",
    List: "list",
    Delete: "delete",
    Set: "set",
    Update: "update",
    Regeneratekey: "regeneratekey",
    Recover: "recover",
    Purge: "purge",
    Backup: "backup",
    Restore: "restore",
    Setsas: "setsas",
    Listsas: "listsas",
    Getsas: "getsas",
    Deletesas: "deletesas",
} as const;

export type StoragePermissions = (typeof StoragePermissions)[keyof typeof StoragePermissions];
