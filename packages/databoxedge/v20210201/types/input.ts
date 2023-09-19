import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Wraps data-residency related information for edge-resource and this should be used with ARM layer.
     */
    export interface DataResidencyArgs {
        /**
         * DataResidencyType enum
         */
        type?: pulumi.Input<string | enums.DataResidencyType>;
    }

    /**
     * Msi identity details of the resource
     */
    export interface ResourceIdentityArgs {
        /**
         * Identity type
         */
        type?: pulumi.Input<string | enums.MsiIdentityType>;
    }

    /**
     * The SKU type.
     */
    export interface SkuArgs {
        /**
         * SKU name.
         */
        name?: pulumi.Input<string | enums.SkuName>;
        /**
         * The SKU tier. This is based on the SKU name.
         */
        tier?: pulumi.Input<string | enums.SkuTier>;
    }
