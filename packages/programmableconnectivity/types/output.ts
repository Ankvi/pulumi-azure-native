import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Details about the Application that would use the Operator's Network APIs.
 */
export interface ApplicationPropertiesResponse {
    /**
     * Description of the application.
     */
    applicationDescription?: string;
    /**
     * The category that describes the application.
     */
    applicationType?: string;
    /**
     * Legal name of the organization owning the application.
     */
    legalName?: string;
    /**
     * Name of the application.
     */
    name?: string;
    /**
     * A description of the organization owning the application.
     */
    organizationDescription?: string;
    /**
     * Email address of the Privacy contact or Data Protection officer of the organization.
     */
    privacyContactEmailAddress?: string;
    /**
     * Unique Tax Number for the user's organization in the country/region the APC Gateway is being purchased.
     */
    taxNumber?: string;
}

/**
 * Details about the SaaS offer purchased from the marketplace.
 */
export interface SaasPropertiesResponse {
    /**
     * Resource ID of the SaaS offer purchased from the marketplace.
     */
    saasResourceId?: string;
    /**
     * Subscription ID of the SaaS offer purchased from the marketplace.
     */
    saasSubscriptionId?: string;
}

/**
 * Description of the current status of the OperatorApiConnection resource.
 */
export interface StatusResponse {
    /**
     * Explanation of the current state of the OperatorApiConnection resource.
     */
    reason?: string;
    /**
     * Current state of the OperatorApiConnection resource.
     */
    state?: string;
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
