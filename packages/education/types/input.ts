import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The amount.
 */
export interface AmountArgs {
    /**
     * The type of currency being used for the value.
     */
    currency?: pulumi.Input<string>;
    /**
     * Amount value.
     */
    value?: pulumi.Input<number>;
}
