import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Key and identity details for Customer Managed Key encryption of load test resource.
 */
export interface EncryptionPropertiesArgs {
    /**
     * All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
     */
    identity?: pulumi.Input<EncryptionPropertiesIdentityArgs>;
    /**
     * key encryption key Url, versioned. Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78 or https://contosovault.vault.azure.net/keys/contosokek.
     */
    keyUrl?: pulumi.Input<string>;
}

/**
 * All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
 */
export interface EncryptionPropertiesIdentityArgs {
    /**
     * User assigned identity to use for accessing key encryption key Url. Ex: /subscriptions/a0a0a0a0-bbbb-cccd-dddd-e1e1e1e1e1e1/resourceGroups/<resource group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId.
     */
    resourceId?: pulumi.Input<string>;
    /**
     * Managed identity type to use for accessing encryption key Url.
     */
    type?: pulumi.Input<string | enums.Type>;
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
