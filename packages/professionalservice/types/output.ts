import * as pulumi from "@pulumi/pulumi";
export namespace professionalservice {
    /**
     * The current Term object.
     */
    export interface ProfessionalServicePropertiesResponseTerm {
        /**
         * The end date of the current term
         */
        endDate?: string;
        /**
         * The start date of the current term
         */
        startDate?: string;
        /**
         * The unit term eg P1M,P1Y,P2Y,P3Y meaning month,1year,2year,3year respectively
         */
        termUnit?: string;
    }

    /**
     * professionalService properties
     */
    export interface ProfessionalServiceResourceResponseProperties {
        /**
         * Whether the ProfessionalService subscription will auto renew upon term end.
         */
        autoRenew?: boolean;
        /**
         * The billing period eg P1M,P1Y for monthly,yearly respectively
         */
        billingPeriod?: string;
        /**
         * The created date of this resource.
         */
        created: string;
        /**
         * Whether the current term is a Free Trial term
         */
        isFreeTrial?: boolean;
        /**
         * The last modifier date if this resource.
         */
        lastModified?: string;
        /**
         * The offer id.
         */
        offerId?: string;
        /**
         * The metadata about the ProfessionalService subscription such as the AzureSubscriptionId and ResourceUri.
         */
        paymentChannelMetadata?: {[key: string]: string};
        /**
         * The Payment channel for the ProfessionalServiceSubscription.
         */
        paymentChannelType?: string;
        /**
         * The publisher id.
         */
        publisherId?: string;
        /**
         * The quote id which the ProfessionalService will be purchase with.
         */
        quoteId?: string;
        /**
         * The plan id.
         */
        skuId?: string;
        /**
         * The ProfessionalService Subscription Status.
         */
        status?: string;
        /**
         * The store front which initiates the purchase.
         */
        storeFront?: string;
        /**
         * The current Term object.
         */
        term?: ProfessionalServicePropertiesResponseTerm;
        /**
         * The unit term eg P1M,P1Y,P2Y,P3Y meaning month,1year,2year,3year respectively
         */
        termUnit?: string;
    }

    export namespace v20230701preview {
        /**
         * The current Term object.
         */
        export interface ProfessionalServicePropertiesResponseTerm {
            /**
             * The end date of the current term
             */
            endDate?: string;
            /**
             * The start date of the current term
             */
            startDate?: string;
            /**
             * The unit term eg P1M,P1Y,P2Y,P3Y meaning month,1year,2year,3year respectively
             */
            termUnit?: string;
        }

        /**
         * professionalService properties
         */
        export interface ProfessionalServiceResourceResponseProperties {
            /**
             * Whether the ProfessionalService subscription will auto renew upon term end.
             */
            autoRenew?: boolean;
            /**
             * The billing period eg P1M,P1Y for monthly,yearly respectively
             */
            billingPeriod?: string;
            /**
             * The created date of this resource.
             */
            created: string;
            /**
             * Whether the current term is a Free Trial term
             */
            isFreeTrial?: boolean;
            /**
             * The last modifier date if this resource.
             */
            lastModified?: string;
            /**
             * The offer id.
             */
            offerId?: string;
            /**
             * The metadata about the ProfessionalService subscription such as the AzureSubscriptionId and ResourceUri.
             */
            paymentChannelMetadata?: {[key: string]: string};
            /**
             * The Payment channel for the ProfessionalServiceSubscription.
             */
            paymentChannelType?: string;
            /**
             * The publisher id.
             */
            publisherId?: string;
            /**
             * The quote id which the ProfessionalService will be purchase with.
             */
            quoteId?: string;
            /**
             * The plan id.
             */
            skuId?: string;
            /**
             * The ProfessionalService Subscription Status.
             */
            status?: string;
            /**
             * The store front which initiates the purchase.
             */
            storeFront?: string;
            /**
             * The current Term object.
             */
            term?: v20230701preview.ProfessionalServicePropertiesResponseTerm;
            /**
             * The unit term eg P1M,P1Y,P2Y,P3Y meaning month,1year,2year,3year respectively
             */
            termUnit?: string;
        }

    }
}
