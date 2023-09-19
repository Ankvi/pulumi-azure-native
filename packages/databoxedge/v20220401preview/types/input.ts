import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The shipping address of the customer.
     */
    export interface AddressArgs {
        /**
         * The address line1.
         */
        addressLine1?: pulumi.Input<string>;
        /**
         * The address line2.
         */
        addressLine2?: pulumi.Input<string>;
        /**
         * The address line3.
         */
        addressLine3?: pulumi.Input<string>;
        /**
         * The city name.
         */
        city?: pulumi.Input<string>;
        /**
         * The country name.
         */
        country: pulumi.Input<string>;
        /**
         * The postal code.
         */
        postalCode?: pulumi.Input<string>;
        /**
         * The state name.
         */
        state?: pulumi.Input<string>;
    }

    /**
     * Contains all the contact details of the customer.
     */
    export interface ContactDetailsArgs {
        /**
         * The name of the company.
         */
        companyName: pulumi.Input<string>;
        /**
         * The contact person name.
         */
        contactPerson: pulumi.Input<string>;
        /**
         * The email list.
         */
        emailList: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The phone number.
         */
        phone: pulumi.Input<string>;
    }

    /**
     * Wraps data-residency related information for edge-resource and this should be used with ARM layer.
     */
    export interface DataResidencyArgs {
        /**
         * DataResidencyType enum
         */
        type?: pulumi.Input<string | enums.DataResidencyType>;
    }

    /**
     * The SKU type.
     */
    export interface SkuArgs {
        /**
         * SKU name.
         */
        name?: pulumi.Input<string | enums.SkuName>;
        /**
         * The SKU tier. This is based on the SKU name.
         */
        tier?: pulumi.Input<string | enums.SkuTier>;
    }
