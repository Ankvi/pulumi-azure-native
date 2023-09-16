import * as pulumi from "@pulumi/pulumi";
export namespace confluent {
    /**
     * Confluent Offer detail
     */
    export interface OfferDetailResponse {
        /**
         * Offer Id
         */
        id: string;
        /**
         * Offer Plan Id
         */
        planId: string;
        /**
         * Offer Plan Name
         */
        planName: string;
        /**
         * Publisher Id
         */
        publisherId: string;
        /**
         * SaaS Offer Status
         */
        status: string;
        /**
         * Offer Plan Term unit
         */
        termUnit: string;
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

    /**
     * Subscriber detail
     */
    export interface UserDetailResponse {
        /**
         * Email address
         */
        emailAddress: string;
        /**
         * First name
         */
        firstName?: string;
        /**
         * Last name
         */
        lastName?: string;
    }

    export namespace v20200301preview {
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

    }

    export namespace v20211201 {
        /**
         * Confluent Offer detail
         */
        export interface OfferDetailResponse {
            /**
             * Offer Id
             */
            id: string;
            /**
             * Offer Plan Id
             */
            planId: string;
            /**
             * Offer Plan Name
             */
            planName: string;
            /**
             * Publisher Id
             */
            publisherId: string;
            /**
             * SaaS Offer Status
             */
            status: string;
            /**
             * Offer Plan Term unit
             */
            termUnit: string;
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

        /**
         * Subscriber detail
         */
        export interface UserDetailResponse {
            /**
             * Email address
             */
            emailAddress: string;
            /**
             * First name
             */
            firstName?: string;
            /**
             * Last name
             */
            lastName?: string;
        }

    }
}
