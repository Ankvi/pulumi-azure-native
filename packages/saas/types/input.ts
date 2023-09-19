import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * properties for creation saas
 */
export interface SaasCreationPropertiesArgs {
    /**
     * Whether the SaaS subscription will auto renew upon term end.
     */
    autoRenew?: pulumi.Input<boolean>;
    /**
     * The offer id.
     */
    offerId?: pulumi.Input<string>;
    /**
     * The metadata about the SaaS subscription such as the AzureSubscriptionId and ResourceUri.
     */
    paymentChannelMetadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The Payment channel for the SaasSubscription.
     */
    paymentChannelType?: pulumi.Input<string | enums.PaymentChannelType>;
    /**
     * The publisher id.
     */
    publisherId?: pulumi.Input<string>;
    /**
     * The environment in the publisher side for this resource.
     */
    publisherTestEnvironment?: pulumi.Input<string>;
    /**
     * The seat count.
     */
    quantity?: pulumi.Input<number>;
    /**
     * The SaaS resource name.
     */
    saasResourceName?: pulumi.Input<string>;
    /**
     * The saas session id used for dev service migration request.
     */
    saasSessionId?: pulumi.Input<string>;
    /**
     * The saas subscription id used for tenant to subscription level migration request.
     */
    saasSubscriptionId?: pulumi.Input<string>;
    /**
     * The plan id.
     */
    skuId?: pulumi.Input<string>;
    /**
     * The current Term id.
     */
    termId?: pulumi.Input<string>;
}
