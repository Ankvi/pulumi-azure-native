import * as pulumi from "@pulumi/pulumi";
/**
 * Site address properties
 */
export interface SiteAddressPropertiesResponse {
    /**
     * City of the address
     */
    city?: string;
    /**
     * Country of the address
     */
    country?: string;
    /**
     * Postal or ZIP code of the address
     */
    postalCode?: string;
    /**
     * State or province of the address
     */
    stateOrProvince?: string;
    /**
     * First line of the street address
     */
    streetAddress1?: string;
    /**
     * Second line of the street address
     */
    streetAddress2?: string;
}

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
     * Key-value pairs for labeling the site resource.
     */
    labels?: {[key: string]: string};
    /**
     * Provisioning state of last operation
     */
    provisioningState: string;
    /**
     * Physical address of the site
     */
    siteAddress?: SiteAddressPropertiesResponse;
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
