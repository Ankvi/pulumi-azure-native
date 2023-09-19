import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Represents the SKU name and Azure pricing tier for auto scale v-core resource.
 */
export interface AutoScaleVCoreSkuArgs {
    /**
     * The capacity of an auto scale v-core resource.
     */
    capacity?: pulumi.Input<number>;
    /**
     * Name of the SKU level.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Azure pricing tier to which the SKU applies.
     */
    tier?: pulumi.Input<string | enums.VCoreSkuTier>;
}

/**
 * Represents the SKU name and Azure pricing tier for PowerBI Dedicated capacity resource.
 */
export interface CapacitySkuArgs {
    /**
     * The capacity of the SKU.
     */
    capacity?: pulumi.Input<number>;
    /**
     * Name of the SKU level.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Azure pricing tier to which the SKU applies.
     */
    tier?: pulumi.Input<string | enums.CapacitySkuTier>;
}

/**
 * An array of administrator user identities
 */
export interface DedicatedCapacityAdministratorsArgs {
    /**
     * An array of administrator user identities.
     */
    members?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataArgs {
    /**
     * The timestamp of resource creation (UTC)
     */
    createdAt?: pulumi.Input<string>;
    /**
     * An identifier for the identity that created the resource
     */
    createdBy?: pulumi.Input<string>;
    /**
     * The type of identity that created the resource
     */
    createdByType?: pulumi.Input<string | enums.IdentityType>;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: pulumi.Input<string>;
    /**
     * An identifier for the identity that last modified the resource
     */
    lastModifiedBy?: pulumi.Input<string>;
    /**
     * The type of identity that last modified the resource
     */
    lastModifiedByType?: pulumi.Input<string | enums.IdentityType>;
}
