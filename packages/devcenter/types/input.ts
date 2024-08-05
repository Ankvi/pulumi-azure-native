import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
 * The role definition assigned to the environment creator on backing resources.
 */
export interface ProjectEnvironmentTypeUpdatePropertiesCreatorRoleAssignmentArgs {
    /**
     * A map of roles to assign to the environment creator.
     */
    roles?: pulumi.Input<pulumi.Input<string>[]>;
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







