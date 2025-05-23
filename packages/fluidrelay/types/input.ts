import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * All Customer-managed key encryption properties for the resource.
 */
export interface CustomerManagedKeyEncryptionPropertiesArgs {
    /**
     * All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
     */
    keyEncryptionKeyIdentity?: pulumi.Input<CustomerManagedKeyEncryptionPropertiesKeyEncryptionKeyIdentityArgs>;
    /**
     * key encryption key Url, with or without a version. Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78 or https://contosovault.vault.azure.net/keys/contosokek. Key auto rotation is enabled by providing a key uri without version. Otherwise, customer is responsible for rotating the key. The keyEncryptionKeyIdentity(either SystemAssigned or UserAssigned) should have permission to access this key url.
     */
    keyEncryptionKeyUrl?: pulumi.Input<string>;
}

/**
 * All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
 */
export interface CustomerManagedKeyEncryptionPropertiesKeyEncryptionKeyIdentityArgs {
    /**
     * Values can be SystemAssigned or UserAssigned
     */
    identityType?: pulumi.Input<enums.CmkIdentityType>;
    /**
     * user assigned identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/<resource group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId. Mutually exclusive with identityType systemAssignedIdentity.
     */
    userAssignedIdentityResourceId?: pulumi.Input<string>;
}

/**
 * All encryption configuration for a resource.
 */
export interface EncryptionPropertiesArgs {
    /**
     * All Customer-managed key encryption properties for the resource.
     */
    customerManagedKeyEncryption?: pulumi.Input<CustomerManagedKeyEncryptionPropertiesArgs>;
}

/**
 * Identity for the resource.
 */
export interface IdentityArgs {
    /**
     * The identity type.
     */
    type?: pulumi.Input<enums.ResourceIdentityType>;
    /**
     * The list of user identities associated with the resource.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}
