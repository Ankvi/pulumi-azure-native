import * as pulumi from "@pulumi/pulumi";
/**
 * Site properties
 */
export interface SitePropertiesResponse {
    /**
     * AddressResource ArmId of Site resource
     */
    addressResourceId?: string;
    /**
     * Description of Site resource
     */
    description?: string;
    /**
     * displayName of Site resource
     */
    displayName?: string;
    /**
     * Provisioning state of last operation
     */
    provisioningState: string;
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
