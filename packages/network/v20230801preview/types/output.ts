import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface PerimeterBasedAccessRuleResponse {
        /**
         * NSP id in the ARM id format.
         */
        id: string;
        /**
         * Location of the NSP supplied.
         */
        location: string;
        /**
         * Resource guid of the NSP supplied.
         */
        perimeterGuid: string;
    }

    /**
     * Reference to another subresource.
     */
    export interface SubResourceResponse {
        /**
         * Resource ID.
         */
        id?: string;
    }

    export interface SubscriptionIdResponse {
        /**
         * Subscription id in the ARM id format.
         */
        id?: string;
    }
