import * as pulumi from "@pulumi/pulumi";
    /**
     * The SKU of the Maps Account.
     */
    export interface SkuArgs {
        /**
         * The name of the SKU, in standard format (such as S0).
         */
        name: pulumi.Input<string>;
    }
