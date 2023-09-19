import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The contact detail class.
     */
    export interface ContactDetailResponse {
        /**
         * The e-mail address of the contact.
         */
        email?: string;
        /**
         * The phone number of the contact.
         */
        phone?: string;
        /**
         * The role of the contact.
         */
        role?: string;
    }
