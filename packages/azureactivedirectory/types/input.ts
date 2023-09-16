import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace azureactivedirectory {
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

    export namespace v20190101preview {
        /**
         * SKU properties of the Azure AD B2C tenant. Learn more about Azure AD B2C billing at [aka.ms/b2cBilling](https://aka.ms/b2cBilling).
         */
        export interface B2CResourceSKUArgs {
            /**
             * The name of the SKU for the tenant.
             */
            name?: pulumi.Input<enums.v20190101preview.B2CResourceSKUName>;
            /**
             * The tier of the tenant.
             */
            tier?: pulumi.Input<enums.v20190101preview.B2CResourceSKUTier>;
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
    }

    export namespace v20210401 {
        /**
         * SKU properties of the Azure AD B2C tenant. Learn more about Azure AD B2C billing at [aka.ms/b2cBilling](https://aka.ms/b2cBilling).
         */
        export interface B2CResourceSKUArgs {
            /**
             * The name of the SKU for the tenant.
             */
            name?: pulumi.Input<string | enums.v20210401.B2CResourceSKUName>;
            /**
             * The tier of the tenant.
             */
            tier?: pulumi.Input<string | enums.v20210401.B2CResourceSKUTier>;
        }

    }

    export namespace v20230118preview {
        /**
         * SKU properties of the Azure AD B2C tenant. Learn more about Azure AD B2C billing at [aka.ms/b2cBilling](https://aka.ms/b2cBilling).
         */
        export interface B2CResourceSKUArgs {
            /**
             * The name of the SKU for the tenant.
             */
            name?: pulumi.Input<string | enums.v20230118preview.B2CResourceSKUName>;
            /**
             * The tier of the tenant.
             */
            tier?: pulumi.Input<string | enums.v20230118preview.B2CResourceSKUTier>;
        }

    }
}
