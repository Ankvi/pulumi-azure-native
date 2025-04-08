import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * An associated tenant.
 */
export interface AssociatedTenantPropertiesResponse {
    /**
     * The state determines whether users from the associated tenant can be assigned roles for commerce activities like viewing and downloading invoices, managing payments, and making purchases.
     */
    billingManagementState?: string;
    /**
     * The name of the associated tenant.
     */
    displayName?: string;
    /**
     * The unique identifier for the billing request that is created when enabling provisioning for an associated tenant.
     */
    provisioningBillingRequestId: string;
    /**
     * The state determines whether subscriptions and licenses can be provisioned in the associated tenant. It can be set to 'Pending' to initiate a billing request.
     */
    provisioningManagementState?: string;
    /**
     * The provisioning state of the resource during a long-running operation.
     */
    provisioningState: string;
    /**
     * The ID that uniquely identifies a tenant.
     */
    tenantId?: string;
}

/**
 * Details of the Azure plan.
 */
export interface AzurePlanResponse {
    /**
     * The ID that uniquely identifies a product.
     */
    productId?: string;
    /**
     * The sku description.
     */
    skuDescription?: string;
    /**
     * The ID that uniquely identifies a sku.
     */
    skuId?: string;
}

/**
 * A billing profile.
 */
export interface BillingProfilePropertiesResponse {
    /**
     * Billing address.
     */
    billTo?: BillingProfilePropertiesResponseBillTo;
    /**
     * Identifies the billing relationship represented by the billing profile. The billing relationship may be between Microsoft, the customer, and/or a third-party.
     */
    billingRelationshipType: string;
    /**
     * The currency in which the charges for the billing profile are billed.
     */
    currency: string;
    /**
     * The current payment term of the billing profile.
     */
    currentPaymentTerm?: BillingProfilePropertiesResponseCurrentPaymentTerm;
    /**
     * The name of the billing profile.
     */
    displayName?: string;
    /**
     * Information about the enabled azure plans.
     */
    enabledAzurePlans?: AzurePlanResponse[];
    /**
     * Indicates whether user has read access to the billing profile.
     */
    hasReadAccess: boolean;
    /**
     * Identifies the billing profile that is linked to another billing profile in indirect purchase motion.
     */
    indirectRelationshipInfo?: BillingProfilePropertiesResponseIndirectRelationshipInfo;
    /**
     * The day of the month when the invoice for the billing profile is generated.
     */
    invoiceDay: number;
    /**
     * Flag controlling whether the invoices for the billing profile are sent through email.
     */
    invoiceEmailOptIn?: boolean;
    /**
     * The list of email addresses to receive invoices by email for the billing profile.
     */
    invoiceRecipients?: string[];
    /**
     * The other payment terms of the billing profile.
     */
    otherPaymentTerms: PaymentTermResponse[];
    /**
     * The default purchase order number that will appear on the invoices generated for the billing profile.
     */
    poNumber?: string;
    /**
     * The provisioning state of the resource during a long-running operation.
     */
    provisioningState: string;
    /**
     * The default address where the products are shipped, or the services are being used. If a ship to is not specified for a product or a subscription, then this address will be used.
     */
    shipTo?: BillingProfilePropertiesResponseShipTo;
    /**
     * The address of the individual or organization that is responsible for the billing account.
     */
    soldTo?: BillingProfilePropertiesResponseSoldTo;
    /**
     * The billing profile spending limit.
     */
    spendingLimit: string;
    /**
     * The details of billing profile spending limit.
     */
    spendingLimitDetails: SpendingLimitDetailsResponse[];
    /**
     * The status of the billing profile.
     */
    status: string;
    /**
     * Reason for the specified billing profile status.
     */
    statusReasonCode: string;
    /**
     * The system generated unique identifier for a billing profile.
     */
    systemId: string;
    /**
     * Dictionary of metadata associated with the resource. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
     */
    tags?: {[key: string]: string};
    /**
     * Identifies the cloud environments that are associated with a billing profile. This is a system managed optional field and gets updated as the billing profile gets associated with accounts in various clouds.
     */
    targetClouds: string[];
}

/**
 * Billing address.
 */
export interface BillingProfilePropertiesResponseBillTo {
    /**
     * Address line 1.
     */
    addressLine1: string;
    /**
     * Address line 2.
     */
    addressLine2?: string;
    /**
     * Address line 3.
     */
    addressLine3?: string;
    /**
     * Address city.
     */
    city?: string;
    /**
     * Company name. Optional for MCA Individual (Pay-as-you-go).
     */
    companyName?: string;
    /**
     * Country code uses ISO 3166-1 Alpha-2 format.
     */
    country: string;
    /**
     * Address district.
     */
    district?: string;
    /**
     * Email address.
     */
    email?: string;
    /**
     * First name. Optional for MCA Enterprise.
     */
    firstName?: string;
    /**
     * Indicates if the address is incomplete.
     */
    isValidAddress?: boolean;
    /**
     * Last name. Optional for MCA Enterprise.
     */
    lastName?: string;
    /**
     * Middle name.
     */
    middleName?: string;
    /**
     * Phone number.
     */
    phoneNumber?: string;
    /**
     * Postal code.
     */
    postalCode?: string;
    /**
     * Address region.
     */
    region?: string;
}

/**
 * The current payment term of the billing profile.
 */
export interface BillingProfilePropertiesResponseCurrentPaymentTerm {
    /**
     * The date on when the defined 'Payment Term' will end and is always in UTC.
     */
    endDate?: string;
    /**
     * Indicates payment term is the standard payment term.
     */
    isDefault: boolean;
    /**
     * The date on when the defined 'Payment Term' will be effective from and is always in UTC.
     */
    startDate?: string;
    /**
     * Represents duration in netXX format. Always in days.
     */
    term?: string;
}

/**
 * Identifies the billing profile that is linked to another billing profile in indirect purchase motion.
 */
export interface BillingProfilePropertiesResponseIndirectRelationshipInfo {
    /**
     * The billing account name of the partner or the customer for an indirect motion.
     */
    billingAccountName?: string;
    /**
     * The billing profile name of the partner or the customer for an indirect motion.
     */
    billingProfileName?: string;
    /**
     * The display name of the partner or customer for an indirect motion.
     */
    displayName?: string;
}

/**
 * The default address where the products are shipped, or the services are being used. If a ship to is not specified for a product or a subscription, then this address will be used.
 */
export interface BillingProfilePropertiesResponseShipTo {
    /**
     * Address line 1.
     */
    addressLine1: string;
    /**
     * Address line 2.
     */
    addressLine2?: string;
    /**
     * Address line 3.
     */
    addressLine3?: string;
    /**
     * Address city.
     */
    city?: string;
    /**
     * Company name. Optional for MCA Individual (Pay-as-you-go).
     */
    companyName?: string;
    /**
     * Country code uses ISO 3166-1 Alpha-2 format.
     */
    country: string;
    /**
     * Address district.
     */
    district?: string;
    /**
     * Email address.
     */
    email?: string;
    /**
     * First name. Optional for MCA Enterprise.
     */
    firstName?: string;
    /**
     * Indicates if the address is incomplete.
     */
    isValidAddress?: boolean;
    /**
     * Last name. Optional for MCA Enterprise.
     */
    lastName?: string;
    /**
     * Middle name.
     */
    middleName?: string;
    /**
     * Phone number.
     */
    phoneNumber?: string;
    /**
     * Postal code.
     */
    postalCode?: string;
    /**
     * Address region.
     */
    region?: string;
}

/**
 * The address of the individual or organization that is responsible for the billing account.
 */
export interface BillingProfilePropertiesResponseSoldTo {
    /**
     * Address line 1.
     */
    addressLine1: string;
    /**
     * Address line 2.
     */
    addressLine2?: string;
    /**
     * Address line 3.
     */
    addressLine3?: string;
    /**
     * Address city.
     */
    city?: string;
    /**
     * Company name. Optional for MCA Individual (Pay-as-you-go).
     */
    companyName?: string;
    /**
     * Country code uses ISO 3166-1 Alpha-2 format.
     */
    country: string;
    /**
     * Address district.
     */
    district?: string;
    /**
     * Email address.
     */
    email?: string;
    /**
     * First name. Optional for MCA Enterprise.
     */
    firstName?: string;
    /**
     * Indicates if the address is incomplete.
     */
    isValidAddress?: boolean;
    /**
     * Last name. Optional for MCA Enterprise.
     */
    lastName?: string;
    /**
     * Middle name.
     */
    middleName?: string;
    /**
     * Phone number.
     */
    phoneNumber?: string;
    /**
     * Postal code.
     */
    postalCode?: string;
    /**
     * Address region.
     */
    region?: string;
}

/**
 * The properties of the billing role assignment.
 */
export interface BillingRoleAssignmentPropertiesResponse {
    /**
     * The name of the billing account.
     */
    billingAccountDisplayName: string;
    /**
     * The fully qualified ID that uniquely identifies a billing account.
     */
    billingAccountId: string;
    /**
     * The name of the billing profile.
     */
    billingProfileDisplayName: string;
    /**
     * The fully qualified ID that uniquely identifies a billing profile.
     */
    billingProfileId: string;
    /**
     * The ID of the billing request that was created for the role assignment. This is only applicable to cross tenant role assignments or role assignments created through the billing request.
     */
    billingRequestId: string;
    /**
     * The object ID of the user who created the role assignment.
     */
    createdByPrincipalId: string;
    /**
     * The principal PUID of the user who created the role assignment.
     */
    createdByPrincipalPuid: string;
    /**
     * The tenant Id of the user who created the role assignment.
     */
    createdByPrincipalTenantId: string;
    /**
     * The email address of the user who created the role assignment. This is supported only for billing accounts with agreement type Enterprise Agreement.
     */
    createdByUserEmailAddress: string;
    /**
     * The date the role assignment was created.
     */
    createdOn: string;
    /**
     * The name of the customer.
     */
    customerDisplayName: string;
    /**
     * The fully qualified ID that uniquely identifies a customer.
     */
    customerId: string;
    /**
     * The name of the invoice section.
     */
    invoiceSectionDisplayName: string;
    /**
     * The fully qualified ID that uniquely identifies an invoice section.
     */
    invoiceSectionId: string;
    /**
     * The principal PUID of the user who modified the role assignment.
     */
    modifiedByPrincipalId: string;
    /**
     * The principal PUID of the user who modified the role assignment.
     */
    modifiedByPrincipalPuid: string;
    /**
     * The tenant Id of the user who modified the role assignment.
     */
    modifiedByPrincipalTenantId: string;
    /**
     * The email address of the user who modified the role assignment. This is supported only for billing accounts with agreement type Enterprise Agreement.
     */
    modifiedByUserEmailAddress: string;
    /**
     * The date the role assignment was modified.
     */
    modifiedOn: string;
    /**
     * The display name of the principal to whom the role was assigned.
     */
    principalDisplayName: string;
    /**
     * The object id of the user to whom the role was assigned.
     */
    principalId?: string;
    /**
     * The principal PUID of the user to whom the role was assigned.
     */
    principalPuid?: string;
    /**
     * The principal tenant id of the user to whom the role was assigned.
     */
    principalTenantId?: string;
    /**
     * The friendly name of the tenant of the user to whom the role was assigned. This will be 'Primary Tenant' for the primary tenant of the billing account.
     */
    principalTenantName: string;
    /**
     * The type of a role Assignment.
     */
    principalType: string;
    /**
     * The provisioning state of the resource during a long-running operation.
     */
    provisioningState: string;
    /**
     * The ID of the role definition.
     */
    roleDefinitionId: string;
    /**
     * The scope at which the role was assigned.
     */
    scope?: string;
    /**
     * The authentication type of the user, whether Organization or MSA, of the user to whom the role was assigned. This is supported only for billing accounts with agreement type Enterprise Agreement.
     */
    userAuthenticationType?: string;
    /**
     * The email address of the user to whom the role was assigned. This is supported only for billing accounts with agreement type Enterprise Agreement.
     */
    userEmailAddress?: string;
}

/**
 * An invoice section.
 */
export interface InvoiceSectionPropertiesResponse {
    /**
     * The name of the invoice section.
     */
    displayName?: string;
    /**
     * The provisioning state of the resource during a long-running operation.
     */
    provisioningState: string;
    /**
     * Reason for the specified invoice section status.
     */
    reasonCode?: string;
    /**
     * Identifies the status of an invoice section.
     */
    state?: string;
    /**
     * The system generated unique identifier for an invoice section.
     */
    systemId: string;
    /**
     * Dictionary of metadata associated with the resource. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
     */
    tags?: {[key: string]: string};
    /**
     * Identifies the cloud environments that are associated with an invoice section. This is a system managed optional field and gets updated as the invoice section gets associated with accounts in various clouds.
     */
    targetCloud?: string;
}

/**
 * Invoice section properties with create subscription permission.
 */
export interface InvoiceSectionWithCreateSubPermissionResponse {
    /**
     * The name of the billing profile.
     */
    billingProfileDisplayName: string;
    /**
     * The fully qualified ID that uniquely identifies a billing profile.
     */
    billingProfileId: string;
    /**
     * The billing profile spending limit.
     */
    billingProfileSpendingLimit: string;
    /**
     * The status of the billing profile.
     */
    billingProfileStatus: string;
    /**
     * Reason for the specified billing profile status.
     */
    billingProfileStatusReasonCode: string;
    /**
     * The system generated unique identifier for a billing profile.
     */
    billingProfileSystemId: string;
    /**
     * Enabled azure plans for the associated billing profile.
     */
    enabledAzurePlans: AzurePlanResponse[];
    /**
     * The name of the invoice section.
     */
    invoiceSectionDisplayName: string;
    /**
     * The fully qualified ID that uniquely identifies an invoice section.
     */
    invoiceSectionId: string;
    /**
     * The system generated unique identifier for an invoice section.
     */
    invoiceSectionSystemId: string;
}

/**
 * The properties of payment term.
 */
export interface PaymentTermResponse {
    /**
     * The date on when the defined 'Payment Term' will end and is always in UTC.
     */
    endDate?: string;
    /**
     * Indicates payment term is the standard payment term.
     */
    isDefault: boolean;
    /**
     * The date on when the defined 'Payment Term' will be effective from and is always in UTC.
     */
    startDate?: string;
    /**
     * Represents duration in netXX format. Always in days.
     */
    term?: string;
}

/**
 * The billing profile spending limit.
 */
export interface SpendingLimitDetailsResponse {
    /**
     * The initial amount for the billing profile.
     */
    amount?: number;
    /**
     * The currency in which the charges for the billing profile are billed.
     */
    currency?: string;
    /**
     * The date when this spending limit is no longer in effect.
     */
    endDate?: string;
    /**
     * The date when this spending limit goes into effect.
     */
    startDate?: string;
    /**
     * The status of current spending limit.
     */
    status?: string;
    /**
     * The type of spending limit.
     */
    type?: string;
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
