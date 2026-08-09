import * as pulumi from "@pulumi/pulumi";
/**
 * properties for creation professionalService
 */
export interface ProfessionalServiceCreationPropertiesArgs {
    /**
     * Whether the ProfessionalService subscription will auto renew upon term end.
     */
    autoRenew?: pulumi.Input<boolean | undefined>;
    /**
     * The billing period eg P1M,P1Y for monthly,yearly respectively
     */
    billingPeriod?: pulumi.Input<string | undefined>;
    /**
     * The offer id.
     */
    offerId?: pulumi.Input<string | undefined>;
    /**
     * The publisher id.
     */
    publisherId?: pulumi.Input<string | undefined>;
    /**
     * The quote id which the ProfessionalService will be purchase with.
     */
    quoteId?: pulumi.Input<string | undefined>;
    /**
     * The plan id.
     */
    skuId?: pulumi.Input<string | undefined>;
    /**
     * The store front which initiates the purchase.
     */
    storeFront?: pulumi.Input<string | undefined>;
    /**
     * The unit term eg P1M,P1Y,P2Y,P3Y meaning month,1year,2year,3year respectively
     */
    termUnit?: pulumi.Input<string | undefined>;
}
