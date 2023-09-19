export const ActionsRequired = {
    None: "None",
} as const;

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

export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const JsonWebKeyCurveName = {
    P_256: "P-256",
    P_384: "P-384",
    P_521: "P-521",
    P_256K: "P-256K",
} as const;

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

export type JsonWebKeyOperation = (typeof JsonWebKeyOperation)[keyof typeof JsonWebKeyOperation];

export const JsonWebKeyType = {
    EC: "EC",
    EC_HSM: "EC-HSM",
    RSA: "RSA",
    RSA_HSM: "RSA-HSM",
} as const;

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
    /**
     * Rotate the key based on the key policy. Key Vault only. Managed HSM uses camelCase 'rotate' instead.
     */
    Rotate: "Rotate",
    /**
     * Trigger Event Grid events. Defaults to 30 days before expiry. Key Vault only.
     */
    Notify: "Notify",
} as const;

export type KeyRotationPolicyActionType = (typeof KeyRotationPolicyActionType)[keyof typeof KeyRotationPolicyActionType];

export const ManagedHsmSkuFamily = {
    B: "B",
} as const;

export type ManagedHsmSkuFamily = (typeof ManagedHsmSkuFamily)[keyof typeof ManagedHsmSkuFamily];

export const ManagedHsmSkuName = {
    Standard_B1: "Standard_B1",
    Custom_B32: "Custom_B32",
    Custom_B6: "Custom_B6",
} as const;

export type ManagedHsmSkuName = (typeof ManagedHsmSkuName)[keyof typeof ManagedHsmSkuName];

export const NetworkRuleAction = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

export type NetworkRuleAction = (typeof NetworkRuleAction)[keyof typeof NetworkRuleAction];

export const NetworkRuleBypassOptions = {
    AzureServices: "AzureServices",
    None: "None",
} as const;

export type NetworkRuleBypassOptions = (typeof NetworkRuleBypassOptions)[keyof typeof NetworkRuleBypassOptions];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

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

export type SkuFamily = (typeof SkuFamily)[keyof typeof SkuFamily];

export const SkuName = {
    Standard: "standard",
    Premium: "premium",
} as const;

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

export const VaultProvisioningState = {
    Succeeded: "Succeeded",
    RegisteringDns: "RegisteringDns",
} as const;

export type VaultProvisioningState = (typeof VaultProvisioningState)[keyof typeof VaultProvisioningState];
