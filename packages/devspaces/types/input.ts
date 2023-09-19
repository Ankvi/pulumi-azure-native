import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Model representing SKU for Azure Dev Spaces Controller.
 */
export interface SkuArgs {
    /**
     * The name of the SKU for Azure Dev Spaces Controller.
     */
    name: pulumi.Input<string | enums.SkuName>;
    /**
     * The tier of the SKU for Azure Dev Spaces Controller.
     */
    tier?: pulumi.Input<string | enums.SkuTier>;
}
