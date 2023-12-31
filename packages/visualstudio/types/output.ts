import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Plan data for an extension resource.
 */
export interface ExtensionResourcePlanResponse {
    /**
     * Name of the plan.
     */
    name?: string;
    /**
     * Product name.
     */
    product?: string;
    /**
     * Optional: the promotion code associated with the plan.
     */
    promotionCode?: string;
    /**
     * Name of the extension publisher.
     */
    publisher?: string;
    /**
     * A string that uniquely identifies the plan version.
     */
    version?: string;
}
