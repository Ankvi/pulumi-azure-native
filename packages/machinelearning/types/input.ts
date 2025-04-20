import * as pulumi from "@pulumi/pulumi";
/**
 * Sku of the resource
 */
export interface SkuArgs {
    /**
     * Name of the sku
     */
    name?: pulumi.Input<string>;
    /**
     * Tier of the sku like Basic or Enterprise
     */
    tier?: pulumi.Input<string>;
}
