import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * An associated tenant.
 */
export interface AssociatedTenantPropertiesArgs {
    /**
     * The state determines whether users from the associated tenant can be assigned roles for commerce activities like viewing and downloading invoices, managing payments, and making purchases.
     */
    billingManagementState?: pulumi.Input<string | enums.BillingManagementTenantState | undefined>;
    /**
     * The name of the associated tenant.
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * The state determines whether subscriptions and licenses can be provisioned in the associated tenant. It can be set to 'Pending' to initiate a billing request.
     */
    provisioningManagementState?: pulumi.Input<string | enums.ProvisioningTenantState | undefined>;
    /**
     * The ID that uniquely identifies a tenant.
     */
    tenantId?: pulumi.Input<string | undefined>;
}

/**
 * Details of the Azure plan.
 */
export interface AzurePlanArgs {
    /**
     * The ID that uniquely identifies a product.
     */
    productId?: pulumi.Input<string | undefined>;
    /**
     * The sku description.
     */
    skuDescription?: pulumi.Input<string | undefined>;
    /**
     * The ID that uniquely identifies a sku.
     */
    skuId?: pulumi.Input<string | undefined>;
}

/**
 * A billing profile.
 */
export interface BillingProfilePropertiesArgs {
    /**
     * Billing address.
     */
    billTo?: pulumi.Input<BillingProfilePropertiesBillToArgs | undefined>;
    /**
     * The current payment term of the billing profile.
     */
    currentPaymentTerm?: pulumi.Input<BillingProfilePropertiesCurrentPaymentTermArgs | undefined>;
    /**
     * The name of the billing profile.
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * Information about the enabled azure plans.
     */
    enabledAzurePlans?: pulumi.Input<pulumi.Input<AzurePlanArgs>[] | undefined>;
    /**
     * Identifies the billing profile that is linked to another billing profile in indirect purchase motion.
     */
    indirectRelationshipInfo?: pulumi.Input<BillingProfilePropertiesIndirectRelationshipInfoArgs | undefined>;
    /**
     * Flag controlling whether the invoices for the billing profile are sent through email.
     */
    invoiceEmailOptIn?: pulumi.Input<boolean | undefined>;
    /**
     * The list of email addresses to receive invoices by email for the billing profile.
     */
    invoiceRecipients?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The default purchase order number that will appear on the invoices generated for the billing profile.
     */
    poNumber?: pulumi.Input<string | undefined>;
    /**
     * The default address where the products are shipped, or the services are being used. If a ship to is not specified for a product or a subscription, then this address will be used.
     */
    shipTo?: pulumi.Input<BillingProfilePropertiesShipToArgs | undefined>;
    /**
     * The address of the individual or organization that is responsible for the billing account.
     */
    soldTo?: pulumi.Input<BillingProfilePropertiesSoldToArgs | undefined>;
    /**
     * Dictionary of metadata associated with the resource. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
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
    addressLine2?: pulumi.Input<string | undefined>;
    /**
     * Address line 3.
     */
    addressLine3?: pulumi.Input<string | undefined>;
    /**
     * Address city.
     */
    city?: pulumi.Input<string | undefined>;
    /**
     * Company name. Optional for MCA Individual (Pay-as-you-go).
     */
    companyName?: pulumi.Input<string | undefined>;
    /**
     * Country code uses ISO 3166-1 Alpha-2 format.
     */
    country: pulumi.Input<string>;
    /**
     * Address district.
     */
    district?: pulumi.Input<string | undefined>;
    /**
     * Email address.
     */
    email?: pulumi.Input<string | undefined>;
    /**
     * First name. Optional for MCA Enterprise.
     */
    firstName?: pulumi.Input<string | undefined>;
    /**
     * Indicates if the address is incomplete.
     */
    isValidAddress?: pulumi.Input<boolean | undefined>;
    /**
     * Last name. Optional for MCA Enterprise.
     */
    lastName?: pulumi.Input<string | undefined>;
    /**
     * Middle name.
     */
    middleName?: pulumi.Input<string | undefined>;
    /**
     * Phone number.
     */
    phoneNumber?: pulumi.Input<string | undefined>;
    /**
     * Postal code.
     */
    postalCode?: pulumi.Input<string | undefined>;
    /**
     * Address region.
     */
    region?: pulumi.Input<string | undefined>;
}

/**
 * The current payment term of the billing profile.
 */
export interface BillingProfilePropertiesCurrentPaymentTermArgs {
    /**
     * The date on when the defined 'Payment Term' will end and is always in UTC.
     */
    endDate?: pulumi.Input<string | undefined>;
    /**
     * The date on when the defined 'Payment Term' will be effective from and is always in UTC.
     */
    startDate?: pulumi.Input<string | undefined>;
    /**
     * Represents duration in netXX format. Always in days.
     */
    term?: pulumi.Input<string | undefined>;
}

/**
 * Identifies the billing profile that is linked to another billing profile in indirect purchase motion.
 */
export interface BillingProfilePropertiesIndirectRelationshipInfoArgs {
    /**
     * The billing account name of the partner or the customer for an indirect motion.
     */
    billingAccountName?: pulumi.Input<string | undefined>;
    /**
     * The billing profile name of the partner or the customer for an indirect motion.
     */
    billingProfileName?: pulumi.Input<string | undefined>;
    /**
     * The display name of the partner or customer for an indirect motion.
     */
    displayName?: pulumi.Input<string | undefined>;
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
    addressLine2?: pulumi.Input<string | undefined>;
    /**
     * Address line 3.
     */
    addressLine3?: pulumi.Input<string | undefined>;
    /**
     * Address city.
     */
    city?: pulumi.Input<string | undefined>;
    /**
     * Company name. Optional for MCA Individual (Pay-as-you-go).
     */
    companyName?: pulumi.Input<string | undefined>;
    /**
     * Country code uses ISO 3166-1 Alpha-2 format.
     */
    country: pulumi.Input<string>;
    /**
     * Address district.
     */
    district?: pulumi.Input<string | undefined>;
    /**
     * Email address.
     */
    email?: pulumi.Input<string | undefined>;
    /**
     * First name. Optional for MCA Enterprise.
     */
    firstName?: pulumi.Input<string | undefined>;
    /**
     * Indicates if the address is incomplete.
     */
    isValidAddress?: pulumi.Input<boolean | undefined>;
    /**
     * Last name. Optional for MCA Enterprise.
     */
    lastName?: pulumi.Input<string | undefined>;
    /**
     * Middle name.
     */
    middleName?: pulumi.Input<string | undefined>;
    /**
     * Phone number.
     */
    phoneNumber?: pulumi.Input<string | undefined>;
    /**
     * Postal code.
     */
    postalCode?: pulumi.Input<string | undefined>;
    /**
     * Address region.
     */
    region?: pulumi.Input<string | undefined>;
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
    addressLine2?: pulumi.Input<string | undefined>;
    /**
     * Address line 3.
     */
    addressLine3?: pulumi.Input<string | undefined>;
    /**
     * Address city.
     */
    city?: pulumi.Input<string | undefined>;
    /**
     * Company name. Optional for MCA Individual (Pay-as-you-go).
     */
    companyName?: pulumi.Input<string | undefined>;
    /**
     * Country code uses ISO 3166-1 Alpha-2 format.
     */
    country: pulumi.Input<string>;
    /**
     * Address district.
     */
    district?: pulumi.Input<string | undefined>;
    /**
     * Email address.
     */
    email?: pulumi.Input<string | undefined>;
    /**
     * First name. Optional for MCA Enterprise.
     */
    firstName?: pulumi.Input<string | undefined>;
    /**
     * Indicates if the address is incomplete.
     */
    isValidAddress?: pulumi.Input<boolean | undefined>;
    /**
     * Last name. Optional for MCA Enterprise.
     */
    lastName?: pulumi.Input<string | undefined>;
    /**
     * Middle name.
     */
    middleName?: pulumi.Input<string | undefined>;
    /**
     * Phone number.
     */
    phoneNumber?: pulumi.Input<string | undefined>;
    /**
     * Postal code.
     */
    postalCode?: pulumi.Input<string | undefined>;
    /**
     * Address region.
     */
    region?: pulumi.Input<string | undefined>;
}

/**
 * The properties of the billing role assignment.
 */
export interface BillingRoleAssignmentPropertiesArgs {
    /**
     * The object id of the user to whom the role was assigned.
     */
    principalId?: pulumi.Input<string | undefined>;
    /**
     * The principal PUID of the user to whom the role was assigned.
     */
    principalPuid?: pulumi.Input<string | undefined>;
    /**
     * The principal tenant id of the user to whom the role was assigned.
     */
    principalTenantId?: pulumi.Input<string | undefined>;
    /**
     * The ID of the role definition.
     */
    roleDefinitionId: pulumi.Input<string>;
    /**
     * The scope at which the role was assigned.
     */
    scope?: pulumi.Input<string | undefined>;
    /**
     * The authentication type of the user, whether Organization or MSA, of the user to whom the role was assigned. This is supported only for billing accounts with agreement type Enterprise Agreement.
     */
    userAuthenticationType?: pulumi.Input<string | undefined>;
    /**
     * The email address of the user to whom the role was assigned. This is supported only for billing accounts with agreement type Enterprise Agreement.
     */
    userEmailAddress?: pulumi.Input<string | undefined>;
}

/**
 * An invoice section.
 */
export interface InvoiceSectionPropertiesArgs {
    /**
     * The name of the invoice section.
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * Reason for the specified invoice section status.
     */
    reasonCode?: pulumi.Input<string | enums.InvoiceSectionStateReasonCode | undefined>;
    /**
     * Identifies the status of an invoice section.
     */
    state?: pulumi.Input<string | enums.InvoiceSectionState | undefined>;
    /**
     * Dictionary of metadata associated with the resource. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Identifies the cloud environments that are associated with an invoice section. This is a system managed optional field and gets updated as the invoice section gets associated with accounts in various clouds.
     */
    targetCloud?: pulumi.Input<string | undefined>;
}
