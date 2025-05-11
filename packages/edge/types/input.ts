import * as pulumi from "@pulumi/pulumi";
/**
 * Site address properties
 */
export interface SiteAddressPropertiesArgs {
    /**
     * City of the address
     */
    city?: pulumi.Input<string>;
    /**
     * Country of the address
     */
    country?: pulumi.Input<string>;
    /**
     * Postal or ZIP code of the address
     */
    postalCode?: pulumi.Input<string>;
    /**
     * State or province of the address
     */
    stateOrProvince?: pulumi.Input<string>;
    /**
     * First line of the street address
     */
    streetAddress1?: pulumi.Input<string>;
    /**
     * Second line of the street address
     */
    streetAddress2?: pulumi.Input<string>;
}

/**
 * Site properties
 */
export interface SitePropertiesArgs {
    /**
     * AddressResource ArmId of Site resource
     */
    addressResourceId?: pulumi.Input<string>;
    /**
     * Description of Site resource
     */
    description?: pulumi.Input<string>;
    /**
     * displayName of Site resource
     */
    displayName?: pulumi.Input<string>;
    /**
     * Key-value pairs for labeling the site resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Physical address of the site
     */
    siteAddress?: pulumi.Input<SiteAddressPropertiesArgs>;
}
