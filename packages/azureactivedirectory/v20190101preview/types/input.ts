import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * SKU properties of the Azure AD B2C tenant. Learn more about Azure AD B2C billing at [aka.ms/b2cBilling](https://aka.ms/b2cBilling).
     */
    export interface B2CResourceSKUArgs {
        /**
         * The name of the SKU for the tenant.
         */
        name?: pulumi.Input<enums.B2CResourceSKUName>;
        /**
         * The tier of the tenant.
         */
        tier?: pulumi.Input<enums.B2CResourceSKUTier>;
    }

    export interface CreateTenantRequestBodyPropertiesArgs {
        /**
         * Country code of Azure tenant (e.g. 'US'). Refer to [aka.ms/B2CDataResidency](https://aka.ms/B2CDataResidency) to see valid country codes and corresponding data residency locations. If you do not see a country code in an valid data residency location, choose one from the list.
         */
        countryCode?: pulumi.Input<string>;
        /**
         * The display name of the B2C tenant.
         */
        displayName?: pulumi.Input<string>;
    }