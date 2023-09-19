import * as pulumi from "@pulumi/pulumi";
    /**
     * Sku of the resource
     */
    export interface SkuResponse {
        /**
         * Name of the sku
         */
        name?: string;
        /**
         * Tier of the sku like Basic or Enterprise
         */
        tier?: string;
    }
