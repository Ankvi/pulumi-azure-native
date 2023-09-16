import * as pulumi from "@pulumi/pulumi";
export namespace confluent {
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
         * Publisher Id
         */
        publisherId: pulumi.Input<string>;
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
    }

    export namespace v20200301preview {
        /**
         * Confluent offer detail
         */
        export interface OrganizationResourcePropertiesOfferDetailArgs {
            /**
             * Offer Id
             */
            id?: pulumi.Input<string>;
            /**
             * Offer Plan Id
             */
            planId?: pulumi.Input<string>;
            /**
             * Offer Plan Name
             */
            planName?: pulumi.Input<string>;
            /**
             * Publisher Id
             */
            publisherId?: pulumi.Input<string>;
            /**
             * Offer Plan Term unit
             */
            termUnit?: pulumi.Input<string>;
        }

        /**
         * Subscriber detail
         */
        export interface OrganizationResourcePropertiesUserDetailArgs {
            /**
             * Email address
             */
            emailAddress?: pulumi.Input<string>;
            /**
             * First name
             */
            firstName?: pulumi.Input<string>;
            /**
             * Last name
             */
            lastName?: pulumi.Input<string>;
        }
    }

    export namespace v20211201 {
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
             * Publisher Id
             */
            publisherId: pulumi.Input<string>;
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
        }

    }
}
