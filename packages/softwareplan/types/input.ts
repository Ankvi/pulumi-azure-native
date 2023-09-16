import * as pulumi from "@pulumi/pulumi";
export namespace softwareplan {
    /**
     * The SKU to be applied for this resource
     */
    export interface SkuArgs {
        /**
         * Name of the SKU to be applied
         */
        name?: pulumi.Input<string>;
    }

    export namespace v20191201 {
        /**
         * The SKU to be applied for this resource
         */
        export interface SkuArgs {
            /**
             * Name of the SKU to be applied
             */
            name?: pulumi.Input<string>;
        }

    }
}
