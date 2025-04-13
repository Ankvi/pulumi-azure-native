import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export interface PlanArgs {
    /**
     * Plan accessibility
     */
    accessibility?: pulumi.Input<string | enums.Accessibility>;
}
