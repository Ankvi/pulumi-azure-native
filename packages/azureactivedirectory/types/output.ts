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

/**
 * SKU properties of the Azure AD for customers tenant. Learn more about Azure AD for customers billing at [https://aka.ms/ciambilling](https://aka.ms/ciambilling).
 */
export interface CIAMResourceSKUResponse {
    /**
     * The name of the SKU for the tenant.
     */
    name: string;
    /**
     * The tier of the tenant.
     */
    tier: string;
}

/**
 * These properties are used to create the Azure AD for customers tenant. These properties are not part of the Azure resource.
 */
export interface CreateCIAMTenantPropertiesResponse {
    /**
     * Country code of Azure tenant (e.g. 'US'). Refer to [https://aka.ms/ciam-data-location](https://aka.ms/ciam-data-location) to see valid country codes and corresponding data residency locations. If you do not see a country code in an valid data residency location, choose one from the list.
     */
    countryCode: string;
    /**
     * The display name of the Azure AD for customers tenant.
     */
    displayName: string;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}
