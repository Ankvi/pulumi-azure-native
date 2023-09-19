import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Put subscription properties.
     */
    export interface PutAliasRequestPropertiesArgs {
        /**
         * Determines whether subscription is fieldLed, partnerLed or LegacyEA
         */
        billingScope?: pulumi.Input<string>;
        /**
         * The friendly name of the subscription.
         */
        displayName?: pulumi.Input<string>;
        /**
         * Reseller ID, basically MPN Id
         */
        resellerId?: pulumi.Input<string>;
        /**
         * This parameter can be used to create alias for existing subscription Id
         */
        subscriptionId?: pulumi.Input<string>;
        /**
         * The workload type of the subscription. It can be either Production or DevTest.
         */
        workload?: pulumi.Input<string | enums.Workload>;
    }
