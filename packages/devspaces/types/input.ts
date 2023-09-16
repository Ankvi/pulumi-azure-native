import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace devspaces {
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

    export namespace v20190401 {
        /**
         * Model representing SKU for Azure Dev Spaces Controller.
         */
        export interface SkuArgs {
            /**
             * The name of the SKU for Azure Dev Spaces Controller.
             */
            name: pulumi.Input<string | enums.v20190401.SkuName>;
            /**
             * The tier of the SKU for Azure Dev Spaces Controller.
             */
            tier?: pulumi.Input<string | enums.v20190401.SkuTier>;
        }

    }
}
