import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Defines the error.
 */
export interface ErrorArgs {
    /**
     * The error code.
     */
    code?: pulumi.Input<string | undefined>;
    /**
     * The error ID.
     */
    id?: pulumi.Input<string | undefined>;
    /**
     * The detailed error message.
     */
    message?: pulumi.Input<string | undefined>;
    /**
     * The error possible cause.
     */
    possibleCause?: pulumi.Input<string | undefined>;
    /**
     * Gets description of the checkpoint.
     */
    recommendedAction?: pulumi.Input<string | undefined>;
    /**
     * The account ID used to login.
     */
    runAsAccountId?: pulumi.Input<string | undefined>;
    /**
     * Gets description of the severity.
     */
    severity?: pulumi.Input<string | undefined>;
    /**
     * The summarized error message.
     */
    summaryMessage?: pulumi.Input<string | undefined>;
    /**
     * Time when this error was last updated.
     */
    updatedTimeStamp?: pulumi.Input<string | undefined>;
}

/**
 * The extended location for off-azure resources.
 */
export interface ExtendedLocationArgs {
    /**
     * The extended location name.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * The extended location type.
     */
    type?: pulumi.Input<string | undefined>;
}
