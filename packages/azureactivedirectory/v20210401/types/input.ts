import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * SKU properties of the Azure AD B2C tenant. Learn more about Azure AD B2C billing at [aka.ms/b2cBilling](https://aka.ms/b2cBilling).
     */
    export interface B2CResourceSKUArgs {
        /**
         * The name of the SKU for the tenant.
         */
        name?: pulumi.Input<string | enums.B2CResourceSKUName>;
        /**
         * The tier of the tenant.
         */
        tier?: pulumi.Input<string | enums.B2CResourceSKUTier>;
    }
