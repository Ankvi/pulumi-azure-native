import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Sku information related properties of a server.
     */
    export interface Sku {
        /**
         * The name of the sku, typically, tier + family + cores, e.g. Standard_D4s_v3.
         */
        name: string;
        /**
         * The tier of the particular SKU, e.g. Burstable.
         */
        tier: string | enums.SkuTier;
    }

    /**
     * Sku information related properties of a server.
     */
    export interface SkuArgs {
        /**
         * The name of the sku, typically, tier + family + cores, e.g. Standard_D4s_v3.
         */
        name: pulumi.Input<string>;
        /**
         * The tier of the particular SKU, e.g. Burstable.
         */
        tier: pulumi.Input<string | enums.SkuTier>;
    }

    /**
     * Storage properties of a server
     */
    export interface Storage {
        /**
         * Max storage allowed for a server.
         */
        storageSizeGB?: number;
    }

    /**
     * Storage properties of a server
     */
    export interface StorageArgs {
        /**
         * Max storage allowed for a server.
         */
        storageSizeGB?: pulumi.Input<number>;
    }