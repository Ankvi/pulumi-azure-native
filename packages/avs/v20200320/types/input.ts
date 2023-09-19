import * as pulumi from "@pulumi/pulumi";
    /**
     * The resource model definition representing SKU
     */
    export interface SkuArgs {
        /**
         * The name of the SKU.
         */
        name: pulumi.Input<string>;
    }
