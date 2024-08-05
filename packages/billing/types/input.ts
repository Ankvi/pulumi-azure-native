import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * An associated tenant.
 */
export interface AssociatedTenantPropertiesArgs {
    /**
     * The state determines whether users from the associated tenant can be assigned roles for commerce activities like viewing and downloading invoices, managing payments, and making purchases.
     */
    billingManagementState?: pulumi.Input<string | enums.BillingManagementTenantState>;
    /**
     * The name of the associated tenant.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The state determines whether subscriptions and licenses can be provisioned in the associated tenant. It can be set to 'Pending' to initiate a billing request.
     */
    provisioningManagementState?: pulumi.Input<string | enums.ProvisioningTenantState>;
    /**
     * The ID that uniquely identifies a tenant.
     */
    tenantId?: pulumi.Input<string>;
}

/**
 * Details of the Azure plan.
 */
export interface AzurePlanArgs {
    /**
     * The ID that uniquely identifies a product.
     */
    productId?: pulumi.Input<string>;
    /**
     * The sku description.
     */
    skuDescription?: pulumi.Input<string>;
    /**
     * The ID that uniquely identifies a sku.
     */
    skuId?: pulumi.Input<string>;
}

/**
 * A billing profile.
 */
export interface BillingProfilePropertiesArgs {
    /**
     * Billing address.
     */
    billTo?: pulumi.Input<BillingProfilePropertiesBillToArgs>;
    /**
     * The current payment term of the billing profile.
     */
    currentPaymentTerm?: pulumi.Input<BillingProfilePropertiesCurrentPaymentTermArgs>;
    /**
     * The name of the billing profile.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Information about the enabled azure plans.
     */
    enabledAzurePlans?: pulumi.Input<pulumi.Input<AzurePlanArgs>[]>;
    /**
     * Identifies the billing profile that is linked to another billing profile in indirect purchase motion.
     */
    indirectRelationshipInfo?: pulumi.Input<BillingProfilePropertiesIndirectRelationshipInfoArgs>;
    /**
     * Flag controlling whether the invoices for the billing profile are sent through email.
     */
    invoiceEmailOptIn?: pulumi.Input<boolean>;
    /**
     * The list of email addresses to receive invoices by email for the billing profile.
     */
    invoiceRecipients?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The default purchase order number that will appear on the invoices generated for the billing profile.
     */
    poNumber?: pulumi.Input<string>;
    /**
     * The default address where the products are shipped, or the services are being used. If a ship to is not specified for a product or a subscription, then this address will be used.
     */
    shipTo?: pulumi.Input<BillingProfilePropertiesShipToArgs>;
    /**
     * The address of the individual or organization that is responsible for the billing account.
     */
    soldTo?: pulumi.Input<BillingProfilePropertiesSoldToArgs>;
    /**
     * Dictionary of metadata associated with the resource. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * Billing address.
 */
export interface BillingProfilePropertiesBillToArgs {
    /**
     * Address line 1.
     */
    addressLine1: pulumi.Input<string>;
    /**
     * Address line 2.
     */
    addressLine2?: pulumi.Input<string>;
    /**
     * Address line 3.
     */
    addressLine3?: pulumi.Input<string>;
    /**
     * Address city.
     */
    city?: pulumi.Input<string>;
    /**
     * Company name. Optional for MCA Individual (Pay-as-you-go).
     */
    companyName?: pulumi.Input<string>;
    /**
     * Country code uses ISO 3166-1 Alpha-2 format.
     */
    country: pulumi.Input<string>;
    /**
     * Address district.
     */
    district?: pulumi.Input<string>;
    /**
     * Email address.
     */
    email?: pulumi.Input<string>;
    /**
     * First name. Optional for MCA Enterprise.
     */
    firstName?: pulumi.Input<string>;
    /**
     * Indicates if the address is incomplete.
     */
    isValidAddress?: pulumi.Input<boolean>;
    /**
     * Last name. Optional for MCA Enterprise.
     */
    lastName?: pulumi.Input<string>;
    /**
     * Middle name.
     */
    middleName?: pulumi.Input<string>;
    /**
     * Phone number.
     */
    phoneNumber?: pulumi.Input<string>;
    /**
     * Postal code.
     */
    postalCode?: pulumi.Input<string>;
    /**
     * Address region.
     */
    region?: pulumi.Input<string>;
}

/**
 * The current payment term of the billing profile.
 */
export interface BillingProfilePropertiesCurrentPaymentTermArgs {
    /**
     * The date on when the defined 'Payment Term' will end and is always in UTC.
     */
    endDate?: pulumi.Input<string>;
    /**
     * The date on when the defined 'Payment Term' will be effective from and is always in UTC.
     */
    startDate?: pulumi.Input<string>;
    /**
     * Represents duration in netXX format. Always in days.
     */
    term?: pulumi.Input<string>;
}

/**
 * Identifies the billing profile that is linked to another billing profile in indirect purchase motion.
 */
export interface BillingProfilePropertiesIndirectRelationshipInfoArgs {
    /**
     * The billing account name of the partner or the customer for an indirect motion.
     */
    billingAccountName?: pulumi.Input<string>;
    /**
     * The billing profile name of the partner or the customer for an indirect motion.
     */
    billingProfileName?: pulumi.Input<string>;
    /**
     * The display name of the partner or customer for an indirect motion.
     */
    displayName?: pulumi.Input<string>;
}

/**
 * The default address where the products are shipped, or the services are being used. If a ship to is not specified for a product or a subscription, then this address will be used.
 */
export interface BillingProfilePropertiesShipToArgs {
    /**
     * Address line 1.
     */
    addressLine1: pulumi.Input<string>;
    /**
     * Address line 2.
     */
    addressLine2?: pulumi.Input<string>;
    /**
     * Address line 3.
     */
    addressLine3?: pulumi.Input<string>;
    /**
     * Address city.
     */
    city?: pulumi.Input<string>;
    /**
     * Company name. Optional for MCA Individual (Pay-as-you-go).
     */
    companyName?: pulumi.Input<string>;
    /**
     * Country code uses ISO 3166-1 Alpha-2 format.
     */
    country: pulumi.Input<string>;
    /**
     * Address district.
     */
    district?: pulumi.Input<string>;
    /**
     * Email address.
     */
    email?: pulumi.Input<string>;
    /**
     * First name. Optional for MCA Enterprise.
     */
    firstName?: pulumi.Input<string>;
    /**
     * Indicates if the address is incomplete.
     */
    isValidAddress?: pulumi.Input<boolean>;
    /**
     * Last name. Optional for MCA Enterprise.
     */
    lastName?: pulumi.Input<string>;
    /**
     * Middle name.
     */
    middleName?: pulumi.Input<string>;
    /**
     * Phone number.
     */
    phoneNumber?: pulumi.Input<string>;
    /**
     * Postal code.
     */
    postalCode?: pulumi.Input<string>;
    /**
     * Address region.
     */
    region?: pulumi.Input<string>;
}

/**
 * The address of the individual or organization that is responsible for the billing account.
 */
export interface BillingProfilePropertiesSoldToArgs {
    /**
     * Address line 1.
     */
    addressLine1: pulumi.Input<string>;
    /**
     * Address line 2.
     */
    addressLine2?: pulumi.Input<string>;
    /**
     * Address line 3.
     */
    addressLine3?: pulumi.Input<string>;
    /**
     * Address city.
     */
    city?: pulumi.Input<string>;
    /**
     * Company name. Optional for MCA Individual (Pay-as-you-go).
     */
    companyName?: pulumi.Input<string>;
    /**
     * Country code uses ISO 3166-1 Alpha-2 format.
     */
    country: pulumi.Input<string>;
    /**
     * Address district.
     */
    district?: pulumi.Input<string>;
    /**
     * Email address.
     */
    email?: pulumi.Input<string>;
    /**
     * First name. Optional for MCA Enterprise.
     */
    firstName?: pulumi.Input<string>;
    /**
     * Indicates if the address is incomplete.
     */
    isValidAddress?: pulumi.Input<boolean>;
    /**
     * Last name. Optional for MCA Enterprise.
     */
    lastName?: pulumi.Input<string>;
    /**
     * Middle name.
     */
    middleName?: pulumi.Input<string>;
    /**
     * Phone number.
     */
    phoneNumber?: pulumi.Input<string>;
    /**
     * Postal code.
     */
    postalCode?: pulumi.Input<string>;
    /**
     * Address region.
     */
    region?: pulumi.Input<string>;
}

/**
 * An invoice section.
 */
export interface InvoiceSectionPropertiesArgs {
    /**
     * The name of the invoice section.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Reason for the specified invoice section status.
     */
    reasonCode?: pulumi.Input<string | enums.InvoiceSectionStateReasonCode>;
    /**
     * Identifies the status of an invoice section.
     */
    state?: pulumi.Input<string | enums.InvoiceSectionState>;
    /**
     * Dictionary of metadata associated with the resource. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Identifies the cloud environments that are associated with an invoice section. This is a system managed optional field and gets updated as the invoice section gets associated with accounts in various clouds.
     */
    targetCloud?: pulumi.Input<string | enums.TargetCloud>;
}


