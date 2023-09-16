import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace azureactivedirectory {
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

    export namespace v20190101preview {
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

    }

    export namespace v20210401 {
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

    }

    export namespace v20230118preview {
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

    }
}
