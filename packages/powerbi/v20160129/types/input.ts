import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface AzureSkuArgs {
        /**
         * SKU name
         */
        name: pulumi.Input<string | enums.AzureSkuName>;
        /**
         * SKU tier
         */
        tier: pulumi.Input<string | enums.AzureSkuTier>;
    }
