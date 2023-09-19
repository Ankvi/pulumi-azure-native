import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * SKU properties of the Azure AD B2C tenant. Learn more about Azure AD B2C billing at [aka.ms/b2cBilling](https://aka.ms/b2cBilling).
     */
    export interface B2CResourceSKUResponse {
        /**
         * The name of the SKU for the tenant.
         */
        name?: string;
        /**
         * The tier of the tenant.
         */
        tier?: string;
    }

    /**
     * The billing configuration for the tenant.
     */
    export interface B2CTenantResourcePropertiesResponseBillingConfig {
        /**
         * The type of billing. Will be MAU for all new customers. If 'Auths', it can be updated to 'MAU'. Cannot be changed if value is 'MAU'. Learn more about Azure AD B2C billing at [aka.ms/b2cBilling](https://aka.ms/b2cbilling).
         */
        billingType?: string;
        /**
         * The data from which the billing type took effect
         */
        effectiveStartDateUtc: string;
    }
