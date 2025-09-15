import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Storage Discovery Scope. This had added validations
 */
export interface StorageDiscoveryScopeResponse {
    /**
     * Display name of the collection
     */
    displayName: string;
    /**
     * Resource types for the collection
     */
    resourceTypes: string[];
    /**
     * The storage account tags keys to filter
     */
    tagKeysOnly?: string[];
    /**
     * Resource tags.
     */
    tags?: {[key: string]: string};
}

/**
 * Storage Discovery Workspace Properties
 */
export interface StorageDiscoveryWorkspacePropertiesResponse {
    /**
     * The description of the storage discovery workspace
     */
    description?: string;
    /**
     * The status of the last operation.
     */
    provisioningState: string;
    /**
     * The scopes of the storage discovery workspace.
     */
    scopes: StorageDiscoveryScopeResponse[];
    /**
     * The storage discovery sku
     */
    sku?: string;
    /**
     * The view level storage discovery data estate
     */
    workspaceRoots: string[];
}
/**
 * storageDiscoveryWorkspacePropertiesResponseProvideDefaults sets the appropriate defaults for StorageDiscoveryWorkspacePropertiesResponse
 */
export function storageDiscoveryWorkspacePropertiesResponseProvideDefaults(val: StorageDiscoveryWorkspacePropertiesResponse): StorageDiscoveryWorkspacePropertiesResponse {
    return {
        ...val,
        sku: (val.sku) ?? "Standard",
    };
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}
