import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * All Customer-managed key encryption properties for the resource.
 */
export interface CustomerManagedKeyEncryptionArgs {
    /**
     * All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
     */
    keyEncryptionKeyIdentity?: pulumi.Input<CustomerManagedKeyEncryptionKeyEncryptionKeyIdentityArgs>;
    /**
     * key encryption key Url, versioned or non-versioned. Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78 or https://contosovault.vault.azure.net/keys/contosokek.
     */
    keyEncryptionKeyUrl?: pulumi.Input<string>;
}

/**
 * All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
 */
export interface CustomerManagedKeyEncryptionKeyEncryptionKeyIdentityArgs {
    /**
     * delegated identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/<resource group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId. Mutually exclusive with identityType systemAssignedIdentity and userAssignedIdentity - internal use only.
     */
    delegatedIdentityClientId?: pulumi.Input<string>;
    /**
     * Values can be systemAssignedIdentity or userAssignedIdentity
     */
    identityType?: pulumi.Input<string | enums.IdentityType>;
    /**
     * user assigned identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/<resource group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId. Mutually exclusive with identityType systemAssignedIdentity and delegatedResourceIdentity.
     */
    userAssignedIdentityResourceId?: pulumi.Input<string>;
}

/**
 * Project catalog settings for project catalogs under a project associated to this dev center.
 */
export interface DevCenterProjectCatalogSettingsArgs {
    /**
     * Whether project catalogs associated with projects in this dev center can be configured to sync catalog items.
     */
    catalogItemSyncEnableStatus?: pulumi.Input<string | enums.CatalogItemSyncEnableStatus>;
}

export interface EncryptionArgs {
    /**
     * All Customer-managed key encryption properties for the resource.
     */
    customerManagedKeyEncryption?: pulumi.Input<CustomerManagedKeyEncryptionArgs>;
}

/**
 * Properties for a Git repository catalog.
 */
export interface GitCatalogArgs {
    /**
     * Git branch.
     */
    branch?: pulumi.Input<string>;
    /**
     * The folder where the catalog items can be found inside the repository.
     */
    path?: pulumi.Input<string>;
    /**
     * A reference to the Key Vault secret containing a security token to authenticate to a Git repository.
     */
    secretIdentifier?: pulumi.Input<string>;
    /**
     * Git URI.
     */
    uri?: pulumi.Input<string>;
}

/**
 * Image reference information
 */
export interface ImageReferenceArgs {
    /**
     * Image ID, or Image version ID. When Image ID is provided, its latest version will be used.
     */
    id?: pulumi.Input<string>;
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
 * Settings to be used when associating a project with a catalog.
 */
export interface ProjectCatalogSettingsArgs {
    /**
     * Indicates catalog item types that can be synced.
     */
    catalogItemSyncTypes?: pulumi.Input<pulumi.Input<string | enums.CatalogItemType>[]>;
}

/**
 * The role definition assigned to the environment creator on backing resources.
 */
export interface ProjectEnvironmentTypeUpdatePropertiesCreatorRoleAssignmentArgs {
    /**
     * A map of roles to assign to the environment creator.
     */
    roles?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * A resource policy.
 */
export interface ResourcePolicyArgs {
    /**
     * Optional. When specified, this expression is used to filter the resources.
     */
    filter?: pulumi.Input<string>;
    /**
     * Resources that are included and shared as a part of a project policy.
     */
    resources?: pulumi.Input<string>;
}

/**
 * The resource model definition representing SKU
 */
export interface SkuArgs {
    /**
     * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
     */
    capacity?: pulumi.Input<number>;
    /**
     * If the service has different generations of hardware, for the same SKU, then that can be captured here.
     */
    family?: pulumi.Input<string>;
    /**
     * The name of the SKU. E.g. P3. It is typically a letter+number code
     */
    name: pulumi.Input<string>;
    /**
     * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
     */
    size?: pulumi.Input<string>;
    /**
     * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
     */
    tier?: pulumi.Input<enums.SkuTier>;
}

/**
 * Stop on disconnect configuration settings for Dev Boxes created in this pool.
 */
export interface StopOnDisconnectConfigurationArgs {
    /**
     * The specified time in minutes to wait before stopping a Dev Box once disconnect is detected.
     */
    gracePeriodMinutes?: pulumi.Input<number>;
    /**
     * Whether the feature to stop the Dev Box on disconnect once the grace period has lapsed is enabled.
     */
    status?: pulumi.Input<string | enums.StopOnDisconnectEnableStatus>;
}

/**
 * Mapping of user object ID to role assignments.
 */
export interface UserRoleAssignmentArgs {
    /**
     * A map of roles to assign to the parent user.
     */
    roles?: pulumi.Input<pulumi.Input<string>[]>;
}
