import * as pulumi from "@pulumi/pulumi";
    /**
     * properties for creation professionalService
     */
    export interface ProfessionalServiceCreationPropertiesArgs {
        /**
         * Whether the ProfessionalService subscription will auto renew upon term end.
         */
        autoRenew?: pulumi.Input<boolean>;
        /**
         * The billing period eg P1M,P1Y for monthly,yearly respectively
         */
        billingPeriod?: pulumi.Input<string>;
        /**
         * The offer id.
         */
        offerId?: pulumi.Input<string>;
        /**
         * The publisher id.
         */
        publisherId?: pulumi.Input<string>;
        /**
         * The quote id which the ProfessionalService will be purchase with.
         */
        quoteId?: pulumi.Input<string>;
        /**
         * The plan id.
         */
        skuId?: pulumi.Input<string>;
        /**
         * The store front which initiates the purchase.
         */
        storeFront?: pulumi.Input<string>;
        /**
         * The unit term eg P1M,P1Y,P2Y,P3Y meaning month,1year,2year,3year respectively
         */
        termUnit?: pulumi.Input<string>;
    }
