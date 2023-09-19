import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * An ARM Resource SKU.
     */
    export interface SkuArgs {
        /**
         * Capacity of the particular SKU.
         */
        capacity?: pulumi.Input<number>;
        /**
         * If the service has different generations of hardware, for the same SKU, then that can be captured here.
         */
        family?: pulumi.Input<string>;
        /**
         * The name of the SKU, typically, a letter + Number code, e.g. P3.
         */
        name: pulumi.Input<string>;
        /**
         * Size of the particular SKU
         */
        size?: pulumi.Input<string>;
        /**
         * The tier or edition of the particular SKU, e.g. Basic, Premium.
         */
        tier?: pulumi.Input<string>;
    }
