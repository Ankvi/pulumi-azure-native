import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The properties of an Assessment resource
 */
export interface AssessmentPropertiesResponse {
    /**
     * The name of the assessment template whose rules will be evaluated (e.g. 'Edu'). Immutable after creation.
     */
    assessmentType: string;
    /**
     * Error information when evaluationState is failed
     */
    error: ErrorDetailResponse;
    /**
     * The aggregated evaluation state of all active rules within this assessment
     */
    evaluationState: string;
    /**
     * The next scheduled re-evaluation of this assessment. Only present when one or more rules in this assessment have a configured recurrence.
     */
    nextEvaluation: string;
    /**
     * The provisioning state of the resource
     */
    provisioningState: string;
}

/**
 * The resource management error additional info.
 */
export interface ErrorAdditionalInfoResponse {
    /**
     * The additional info.
     */
    info: any;
    /**
     * The additional info type.
     */
    type: string;
}

/**
 * The error detail.
 */
export interface ErrorDetailResponse {
    /**
     * The error additional info.
     */
    additionalInfo: ErrorAdditionalInfoResponse[];
    /**
     * The error code.
     */
    code: string;
    /**
     * The error details.
     */
    details: ErrorDetailResponse[];
    /**
     * The error message.
     */
    message: string;
    /**
     * The error target.
     */
    target: string;
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
