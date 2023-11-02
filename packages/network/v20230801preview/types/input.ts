import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Reference to another subresource.
     */
    export interface SubResourceArgs {
        /**
         * Sub-resource ID. Both absolute resource ID and a relative resource ID are accepted.
         * An absolute ID starts with /subscriptions/ and contains the entire ID of the parent resource and the ID of the sub-resource in the end.
         * A relative ID replaces the ID of the parent resource with a token '$self', followed by the sub-resource ID itself.
         * Example of a relative ID: $self/frontEndConfigurations/my-frontend.
         */
        id?: pulumi.Input<string>;
    }

    export interface SubscriptionIdArgs {
        /**
         * Subscription id in the ARM id format.
         */
        id?: pulumi.Input<string>;
    }
