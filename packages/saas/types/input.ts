import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * properties for creation saas
 */
export interface SaasCreationPropertiesArgs {
    /**
     * Whether the SaaS subscription will auto renew upon term end.
     */
    autoRenew?: pulumi.Input<boolean | undefined>;
    /**
     * The offer id.
     */
    offerId?: pulumi.Input<string | undefined>;
    /**
     * The metadata about the SaaS subscription such as the AzureSubscriptionId and ResourceUri.
     */
    paymentChannelMetadata?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * The Payment channel for the SaasSubscription.
     */
    paymentChannelType?: pulumi.Input<string | enums.PaymentChannelType | undefined>;
    /**
     * The publisher id.
     */
    publisherId?: pulumi.Input<string | undefined>;
    /**
     * The environment in the publisher side for this resource.
     */
    publisherTestEnvironment?: pulumi.Input<string | undefined>;
    /**
     * The seat count.
     */
    quantity?: pulumi.Input<number | undefined>;
    /**
     * The SaaS resource name.
     */
    saasResourceName?: pulumi.Input<string | undefined>;
    /**
     * The saas session id used for dev service migration request.
     */
    saasSessionId?: pulumi.Input<string | undefined>;
    /**
     * The saas subscription id used for tenant to subscription level migration request.
     */
    saasSubscriptionId?: pulumi.Input<string | undefined>;
    /**
     * The plan id.
     */
    skuId?: pulumi.Input<string | undefined>;
    /**
     * The current Term id.
     */
    termId?: pulumi.Input<string | undefined>;
}
