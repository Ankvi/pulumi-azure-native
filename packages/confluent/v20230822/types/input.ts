import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Link an existing Confluent organization
     */
    export interface LinkOrganizationArgs {
        /**
         * User auth token
         */
        token: pulumi.Input<string>;
    }

    /**
     * Confluent Offer detail
     */
    export interface OfferDetailArgs {
        /**
         * Offer Id
         */
        id: pulumi.Input<string>;
        /**
         * Offer Plan Id
         */
        planId: pulumi.Input<string>;
        /**
         * Offer Plan Name
         */
        planName: pulumi.Input<string>;
        /**
         * Private Offer Id
         */
        privateOfferId?: pulumi.Input<string>;
        /**
         * Array of Private Offer Ids
         */
        privateOfferIds?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Publisher Id
         */
        publisherId: pulumi.Input<string>;
        /**
         * SaaS Offer Status
         */
        status?: pulumi.Input<string | enums.SaaSOfferStatus>;
        /**
         * Offer Plan Term Id
         */
        termId?: pulumi.Input<string>;
        /**
         * Offer Plan Term unit
         */
        termUnit: pulumi.Input<string>;
    }

    /**
     * Subscriber detail
     */
    export interface UserDetailArgs {
        /**
         * AAD email address
         */
        aadEmail?: pulumi.Input<string>;
        /**
         * Email address
         */
        emailAddress: pulumi.Input<string>;
        /**
         * First name
         */
        firstName?: pulumi.Input<string>;
        /**
         * Last name
         */
        lastName?: pulumi.Input<string>;
        /**
         * User principal name
         */
        userPrincipalName?: pulumi.Input<string>;
    }
