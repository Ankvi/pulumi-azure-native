import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * An ARM Resource SKU.
     */
    export interface SkuResponse {
        /**
         * Capacity of the particular SKU.
         */
        capacity?: number;
        /**
         * If the service has different generations of hardware, for the same SKU, then that can be captured here.
         */
        family?: string;
        /**
         * The name of the SKU, typically, a letter + Number code, e.g. P3.
         */
        name: string;
        /**
         * Size of the particular SKU
         */
        size?: string;
        /**
         * The tier or edition of the particular SKU, e.g. Basic, Premium.
         */
        tier?: string;
    }
