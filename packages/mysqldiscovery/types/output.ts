import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Defines the error.
 */
export interface ErrorResponse {
    /**
     * The error code.
     */
    code?: string;
    /**
     * The error ID.
     */
    id?: string;
    /**
     * The detailed error message.
     */
    message?: string;
    /**
     * The error possible cause.
     */
    possibleCause?: string;
    /**
     * Gets description of the checkpoint.
     */
    recommendedAction?: string;
    /**
     * The account ID used to login.
     */
    runAsAccountId?: string;
    /**
     * Gets description of the severity.
     */
    severity?: string;
    /**
     * The summarized error message.
     */
    summaryMessage?: string;
    /**
     * Time when this error was last updated.
     */
    updatedTimeStamp?: string;
}

/**
 * The extended location for off-azure resources.
 */
export interface ExtendedLocationResponse {
    /**
     * The extended location name.
     */
    name?: string;
    /**
     * The extended location type.
     */
    type?: string;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}
