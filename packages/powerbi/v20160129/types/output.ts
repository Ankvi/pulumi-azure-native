import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface AzureSkuResponse {
        /**
         * SKU name
         */
        name: string;
        /**
         * SKU tier
         */
        tier: string;
    }
