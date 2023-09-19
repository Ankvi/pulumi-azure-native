import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface PlanResponse {
        /**
         * Plan accessibility
         */
        accessibility?: string;
        /**
         * Alternative stack type
         */
        altStackReference: string;
        /**
         * Friendly name for the plan for display in the marketplace
         */
        planDisplayName: string;
        /**
         * Text identifier for this plan
         */
        planId: string;
        /**
         * Identifier for this plan
         */
        skuId: string;
        /**
         * Stack type (classic or arm)
         */
        stackType: string;
    }
