import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Association Subnet.
 */
export interface AssociationSubnetResponse {
    /**
     * Association ID.
     */
    id: string;
}

/**
 * Resource ID definition used by parent to reference child resources.
 */
export interface ResourceIdResponse {
    /**
     * Resource ID of child resource.
     */
    id: string;
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

/**
 * Web Application Firewall Policy
 */
export interface WafPolicyResponse {
    /**
     * Resource ID of the WAF
     */
    id: string;
}




