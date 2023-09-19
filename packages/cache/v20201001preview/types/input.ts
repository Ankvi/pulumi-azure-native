import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * SKU parameters supplied to the create RedisEnterprise operation.
     */
    export interface EnterpriseSkuArgs {
        /**
         * The size of the RedisEnterprise cluster. Defaults to 2 or 3 depending on SKU. Valid values are (2, 4, 6, ...) for Enterprise SKUs and (3, 9, 15, ...) for Flash SKUs.
         */
        capacity?: pulumi.Input<number>;
        /**
         * The type of RedisEnterprise cluster to deploy. Possible values: (Enterprise_E10, EnterpriseFlash_F300 etc.)
         */
        name: pulumi.Input<string | enums.SkuName>;
    }
