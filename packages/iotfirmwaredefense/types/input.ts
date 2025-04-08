import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Error and status message
 */
export interface StatusMessageArgs {
    /**
     * The error code
     */
    errorCode?: pulumi.Input<number>;
    /**
     * The error or status message
     */
    message?: pulumi.Input<string>;
}
