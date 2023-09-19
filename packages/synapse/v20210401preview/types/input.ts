import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Azure SKU definition.
     */
    export interface AzureSkuArgs {
        /**
         * The number of instances of the cluster.
         */
        capacity?: pulumi.Input<number>;
        /**
         * SKU name.
         */
        name: pulumi.Input<string | enums.AzureSkuName>;
        /**
         * SKU tier.
         */
        tier: pulumi.Input<string | enums.AzureSkuTier>;
    }
