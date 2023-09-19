import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Plan data for an extension resource.
 */
export interface ExtensionResourcePlanArgs {
    /**
     * Name of the plan.
     */
    name?: pulumi.Input<string>;
    /**
     * Product name.
     */
    product?: pulumi.Input<string>;
    /**
     * Optional: the promotion code associated with the plan.
     */
    promotionCode?: pulumi.Input<string>;
    /**
     * Name of the extension publisher.
     */
    publisher?: pulumi.Input<string>;
    /**
     * A string that uniquely identifies the plan version.
     */
    version?: pulumi.Input<string>;
}
