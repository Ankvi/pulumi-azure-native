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

/**
 * SKU properties of the Azure AD for customers tenant. Learn more about Azure AD for customers billing at [https://aka.ms/ciambilling](https://aka.ms/ciambilling).
 */
export interface CIAMResourceSKUArgs {
    /**
     * The name of the SKU for the tenant.
     */
    name: pulumi.Input<string | enums.CIAMResourceSKUName>;
    /**
     * The tier of the tenant.
     */
    tier: pulumi.Input<string | enums.CIAMResourceSKUTier>;
}

/**
 * These properties are used to create the Azure AD for customers tenant. These properties are not part of the Azure resource.
 */
export interface CreateCIAMTenantPropertiesArgs {
    /**
     * Country code of Azure tenant (e.g. 'US'). Refer to [https://aka.ms/ciam-data-location](https://aka.ms/ciam-data-location) to see valid country codes and corresponding data residency locations. If you do not see a country code in an valid data residency location, choose one from the list.
     */
    countryCode: pulumi.Input<string>;
    /**
     * The display name of the Azure AD for customers tenant.
     */
    displayName: pulumi.Input<string>;
}



