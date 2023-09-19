import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The API entity reference.
     */
    export interface ApiEntityReferenceArgs {
        /**
         * The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...
         */
        id?: pulumi.Input<string>;
    }
