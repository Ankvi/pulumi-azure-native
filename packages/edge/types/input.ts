import * as pulumi from "@pulumi/pulumi";
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
}
