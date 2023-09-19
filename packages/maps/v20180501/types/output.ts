import * as pulumi from "@pulumi/pulumi";
    /**
     * Additional Map account properties
     */
    export interface MapsAccountPropertiesResponse {
        /**
         * A unique identifier for the maps account
         */
        xMsClientId?: string;
    }

    /**
     * The SKU of the Maps Account.
     */
    export interface SkuResponse {
        /**
         * The name of the SKU, in standard format (such as S0).
         */
        name: string;
        /**
         * Gets the sku tier. This is based on the SKU name.
         */
        tier: string;
    }
