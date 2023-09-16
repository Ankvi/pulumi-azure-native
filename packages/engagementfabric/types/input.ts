import * as pulumi from "@pulumi/pulumi";
export namespace engagementfabric {
    /**
     * The EngagementFabric SKU
     */
    export interface SKUArgs {
        /**
         * The name of the SKU
         */
        name: pulumi.Input<string>;
        /**
         * The price tier of the SKU
         */
        tier?: pulumi.Input<string>;
    }

    export namespace v20180901preview {
        /**
         * The EngagementFabric SKU
         */
        export interface SKUArgs {
            /**
             * The name of the SKU
             */
            name: pulumi.Input<string>;
            /**
             * The price tier of the SKU
             */
            tier?: pulumi.Input<string>;
        }

    }
}
