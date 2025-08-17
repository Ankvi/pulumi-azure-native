import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Storage Discovery Scope. This had added validations
 */
export interface StorageDiscoveryScopeArgs {
    /**
     * Display name of the collection
     */
    displayName: pulumi.Input<string>;
    /**
     * Resource types for the collection
     */
    resourceTypes: pulumi.Input<pulumi.Input<string | enums.StorageDiscoveryResourceType>[]>;
    /**
     * The storage account tags keys to filter
     */
    tagKeysOnly?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * Storage Discovery Workspace Properties
 */
export interface StorageDiscoveryWorkspacePropertiesArgs {
    /**
     * The description of the storage discovery workspace
     */
    description?: pulumi.Input<string>;
    /**
     * The scopes of the storage discovery workspace.
     */
    scopes: pulumi.Input<pulumi.Input<StorageDiscoveryScopeArgs>[]>;
    /**
     * The storage discovery sku
     */
    sku?: pulumi.Input<string | enums.StorageDiscoverySku>;
    /**
     * The view level storage discovery data estate
     */
    workspaceRoots: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * storageDiscoveryWorkspacePropertiesArgsProvideDefaults sets the appropriate defaults for StorageDiscoveryWorkspacePropertiesArgs
 */
export function storageDiscoveryWorkspacePropertiesArgsProvideDefaults(val: StorageDiscoveryWorkspacePropertiesArgs): StorageDiscoveryWorkspacePropertiesArgs {
    return {
        ...val,
        sku: (val.sku) ?? "Standard",
    };
}
