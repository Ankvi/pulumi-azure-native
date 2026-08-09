import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Address information for domain registration.
 */
export interface AddressArgs {
    /**
     * First line of an Address.
     */
    address1: pulumi.Input<string>;
    /**
     * The second line of the Address. Optional.
     */
    address2?: pulumi.Input<string | undefined>;
    /**
     * The city for the address.
     */
    city: pulumi.Input<string>;
    /**
     * The country for the address.
     */
    country: pulumi.Input<string>;
    /**
     * The postal code for the address.
     */
    postalCode: pulumi.Input<string>;
    /**
     * The state or province for the address.
     */
    state: pulumi.Input<string>;
}

/**
 * Contact information for domain registration. If 'Domain Privacy' option is not selected then the contact information is made publicly available through the Whois
 * directories as per ICANN requirements.
 */
export interface ContactArgs {
    /**
     * Mailing address.
     */
    addressMailing?: pulumi.Input<AddressArgs | undefined>;
    /**
     * Email address.
     */
    email: pulumi.Input<string>;
    /**
     * Fax number.
     */
    fax?: pulumi.Input<string | undefined>;
    /**
     * Job title.
     */
    jobTitle?: pulumi.Input<string | undefined>;
    /**
     * First name.
     */
    nameFirst: pulumi.Input<string>;
    /**
     * Last name.
     */
    nameLast: pulumi.Input<string>;
    /**
     * Middle name.
     */
    nameMiddle?: pulumi.Input<string | undefined>;
    /**
     * Organization contact belongs to.
     */
    organization?: pulumi.Input<string | undefined>;
    /**
     * Phone number.
     */
    phone: pulumi.Input<string>;
}

/**
 * Domain purchase consent object, representing acceptance of applicable legal agreements.
 */
export interface DomainPurchaseConsentArgs {
    /**
     * Timestamp when the agreements were accepted.
     */
    agreedAt?: pulumi.Input<string | undefined>;
    /**
     * Client IP address.
     */
    agreedBy?: pulumi.Input<string | undefined>;
    /**
     * List of applicable legal agreement keys. This list can be retrieved using ListLegalAgreements API under <code>TopLevelDomain</code> resource.
     */
    agreementKeys?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}
