import * as pulumi from "@pulumi/pulumi";
/**
 * The SKU to be applied for this resource
 */
export interface SkuArgs {
    /**
     * Name of the SKU to be applied
     */
    name?: pulumi.Input<string>;
}
