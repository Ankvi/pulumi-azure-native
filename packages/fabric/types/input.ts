import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The administration properties of the Fabric capacity resource
 */
export interface CapacityAdministrationArgs {
    /**
     * An array of administrator user identities.
     */
    members: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Represents the SKU name and Azure pricing tier for Microsoft Fabric capacity resource.
 */
export interface RpSkuArgs {
    /**
     * The name of the SKU level.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Azure pricing tier to which the SKU applies.
     */
    tier: pulumi.Input<string | enums.RpSkuTier>;
}

