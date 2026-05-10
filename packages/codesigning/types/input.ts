import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * SKU of the artifact signing account.
 */
export interface AccountSkuArgs {
    /**
     * Name of the SKU.
     */
    name: pulumi.Input<string | enums.SkuName>;
}
