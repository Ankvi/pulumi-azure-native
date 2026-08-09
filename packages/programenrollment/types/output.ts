import * as pulumi from "@pulumi/pulumi";
/**
 * A group of edu domains scoped to an Entra tenant.
 */
export interface DomainGroupResponse {
    /**
     * The edu domain names in this group.
     */
    domainNames: string[];
    /**
     * Failure detail when state is Failed or ActionRequired. Omitted otherwise.
     */
    failureReason: ErrorDetailResponse;
    /**
     * The assessment state of this domain group.
     */
    state: string;
    /**
     * The Entra tenant ID that owns these domains. Defaults to the caller's tenant if omitted.
     */
    tenantId?: string;
}

/**
 * Details of the Program EduEnrollment.
 */
export interface EduEnrollmentPropertiesResponse {
    /**
     * The domain groups associated with this enrollment.
     */
    domains: DomainGroupResponse[];
    /**
     * Failure detail when provisioningState is Failed. Omitted otherwise.
     */
    failureReason: ErrorDetailResponse;
    /**
     * The status of the last operation.
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
