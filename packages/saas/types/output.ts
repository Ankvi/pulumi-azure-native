import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace saas {
    /**
     * The current Term object.
     */
    export interface SaasPropertiesResponseTerm {
        /**
         * The end date of the current term
         */
        endDate?: string;
        /**
         * The start date of the current term
         */
        startDate?: string;
        /**
         * The unit indicating Monthly / Yearly
         */
        termUnit?: string;
    }

    /**
     * saas properties
     */
    export interface SaasResourceResponseProperties {
        /**
         * Whether the SaaS subscription will auto renew upon term end.
         */
        autoRenew?: boolean;
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
         * The metadata about the SaaS subscription such as the AzureSubscriptionId and ResourceUri.
         */
        paymentChannelMetadata?: {[key: string]: string};
        /**
         * The Payment channel for the SaasSubscription.
         */
        paymentChannelType?: string;
        /**
         * The publisher id.
         */
        publisherId?: string;
        /**
         * The environment in the publisher side for this resource.
         */
        publisherTestEnvironment?: string;
        /**
         * The seat count.
         */
        quantity?: number;
        /**
         * The SaaS resource name.
         */
        saasResourceName?: string;
        /**
         * The saas session id used for dev service migration request.
         */
        saasSessionId?: string;
        /**
         * The saas subscription id used for tenant to subscription level migration request.
         */
        saasSubscriptionId?: string;
        /**
         * The plan id.
         */
        skuId?: string;
        /**
         * The SaaS Subscription Status.
         */
        status?: string;
        /**
         * The current Term object.
         */
        term?: SaasPropertiesResponseTerm;
        /**
         * The current Term id.
         */
        termId?: string;
    }

    export namespace v20180301beta {
        /**
         * The current Term object.
         */
        export interface SaasPropertiesResponseTerm {
            /**
             * The end date of the current term
             */
            endDate?: string;
            /**
             * The start date of the current term
             */
            startDate?: string;
            /**
             * The unit indicating Monthly / Yearly
             */
            termUnit?: string;
        }

        /**
         * saas properties
         */
        export interface SaasResourceResponseProperties {
            /**
             * Whether the SaaS subscription will auto renew upon term end.
             */
            autoRenew?: boolean;
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
             * The metadata about the SaaS subscription such as the AzureSubscriptionId and ResourceUri.
             */
            paymentChannelMetadata?: {[key: string]: string};
            /**
             * The Payment channel for the SaasSubscription.
             */
            paymentChannelType?: string;
            /**
             * The publisher id.
             */
            publisherId?: string;
            /**
             * The environment in the publisher side for this resource.
             */
            publisherTestEnvironment?: string;
            /**
             * The seat count.
             */
            quantity?: number;
            /**
             * The SaaS resource name.
             */
            saasResourceName?: string;
            /**
             * The saas session id used for dev service migration request.
             */
            saasSessionId?: string;
            /**
             * The saas subscription id used for tenant to subscription level migration request.
             */
            saasSubscriptionId?: string;
            /**
             * The plan id.
             */
            skuId?: string;
            /**
             * The SaaS Subscription Status.
             */
            status?: string;
            /**
             * The current Term object.
             */
            term?: v20180301beta.SaasPropertiesResponseTerm;
            /**
             * The current Term id.
             */
            termId?: string;
        }

    }
}
