import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The contact detail class.
     */
    export interface ContactDetailArgs {
        /**
         * The e-mail address of the contact.
         */
        email?: pulumi.Input<string>;
        /**
         * The phone number of the contact.
         */
        phone?: pulumi.Input<string>;
        /**
         * The role of the contact.
         */
        role?: pulumi.Input<string | enums.Role>;
    }
