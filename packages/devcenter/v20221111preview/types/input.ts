import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Image reference information
     */
    export interface ImageReferenceArgs {
        /**
         * Image ID, or Image version ID. When Image ID is provided, its latest version will be used.
         */
        id?: pulumi.Input<string>;
        /**
         * The image offer.
         */
        offer?: pulumi.Input<string>;
        /**
         * The image publisher.
         */
        publisher?: pulumi.Input<string>;
        /**
         * The image sku.
         */
        sku?: pulumi.Input<string>;
    }

    /**
     * The resource model definition representing SKU
     */
    export interface SkuArgs {
        /**
         * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
         */
        capacity?: pulumi.Input<number>;
        /**
         * If the service has different generations of hardware, for the same SKU, then that can be captured here.
         */
        family?: pulumi.Input<string>;
        /**
         * The name of the SKU. Ex - P3. It is typically a letter+number code
         */
        name: pulumi.Input<string>;
        /**
         * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
         */
        size?: pulumi.Input<string>;
        /**
         * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
         */
        tier?: pulumi.Input<enums.SkuTier>;
    }
