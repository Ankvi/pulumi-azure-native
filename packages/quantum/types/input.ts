import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
 * Information about a Provider. A Provider is an entity that offers Targets to run Azure Quantum Jobs.
 */
export interface ProviderArgs {
    /**
     * The provider's marketplace application display name.
     */
    applicationName?: pulumi.Input<string>;
    /**
     * A Uri identifying the specific instance of this provider.
     */
    instanceUri?: pulumi.Input<string>;
    /**
     * Unique id of this provider.
     */
    providerId?: pulumi.Input<string>;
    /**
     * The sku associated with pricing information for this provider.
     */
    providerSku?: pulumi.Input<string>;
    /**
     * Provisioning status field
     */
    provisioningState?: pulumi.Input<string | enums.ProviderStatus>;
    /**
     * Id to track resource usage for the provider.
     */
    resourceUsageId?: pulumi.Input<string>;
}

/**
 * Properties of a Workspace
 */
export interface WorkspaceResourcePropertiesArgs {
    /**
     * Indicator of enablement of the Quantum workspace Api keys.
     */
    apiKeyEnabled?: pulumi.Input<boolean>;
    /**
     * List of Providers selected for this Workspace
     */
    providers?: pulumi.Input<pulumi.Input<ProviderArgs>[]>;
    /**
     * ARM Resource Id of the storage account associated with this workspace.
     */
    storageAccount?: pulumi.Input<string>;
}
