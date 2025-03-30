import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Defines the error.
 */
export interface ErrorArgs {
    /**
     * The error code.
     */
    code?: pulumi.Input<string>;
    /**
     * The error ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The detailed error message.
     */
    message?: pulumi.Input<string>;
    /**
     * The error possible cause.
     */
    possibleCause?: pulumi.Input<string>;
    /**
     * Gets description of the checkpoint.
     */
    recommendedAction?: pulumi.Input<string>;
    /**
     * The account ID used to login.
     */
    runAsAccountId?: pulumi.Input<string>;
    /**
     * Gets description of the severity.
     */
    severity?: pulumi.Input<string>;
    /**
     * The summarized error message.
     */
    summaryMessage?: pulumi.Input<string>;
    /**
     * Time when this error was last updated.
     */
    updatedTimeStamp?: pulumi.Input<string>;
}

/**
 * The extended location for off-azure resources.
 */
export interface ExtendedLocationArgs {
    /**
     * The extended location name.
     */
    name?: pulumi.Input<string>;
    /**
     * The extended location type.
     */
    type?: pulumi.Input<string>;
}
