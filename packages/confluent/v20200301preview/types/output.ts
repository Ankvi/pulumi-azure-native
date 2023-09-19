import * as pulumi from "@pulumi/pulumi";
    /**
     * Confluent offer detail
     */
    export interface OrganizationResourcePropertiesResponseOfferDetail {
        /**
         * Offer Id
         */
        id?: string;
        /**
         * Offer Plan Id
         */
        planId?: string;
        /**
         * Offer Plan Name
         */
        planName?: string;
        /**
         * Publisher Id
         */
        publisherId?: string;
        /**
         * SaaS Offer Status
         */
        status: string;
        /**
         * Offer Plan Term unit
         */
        termUnit?: string;
    }

    /**
     * Subscriber detail
     */
    export interface OrganizationResourcePropertiesResponseUserDetail {
        /**
         * Email address
         */
        emailAddress?: string;
        /**
         * First name
         */
        firstName?: string;
        /**
         * Last name
         */
        lastName?: string;
    }
