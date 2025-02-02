import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The administration properties of the Fabric capacity resource
 */
export interface CapacityAdministrationResponse {
    /**
     * An array of administrator user identities.
     */
    members: string[];
}

/**
 * Represents the SKU name and Azure pricing tier for Microsoft Fabric capacity resource.
 */
export interface RpSkuResponse {
    /**
     * The name of the SKU level.
     */
    name: string;
    /**
     * The name of the Azure pricing tier to which the SKU applies.
     */
    tier: string;
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

