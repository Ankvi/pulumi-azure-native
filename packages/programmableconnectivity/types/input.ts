import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Details about the Application that would use the Operator's Network APIs.
 */
export interface ApplicationPropertiesArgs {
    /**
     * Description of the application.
     */
    applicationDescription?: pulumi.Input<string | undefined>;
    /**
     * The category that describes the application.
     */
    applicationType?: pulumi.Input<string | undefined>;
    /**
     * Legal name of the organization owning the application.
     */
    legalName?: pulumi.Input<string | undefined>;
    /**
     * Name of the application.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * A description of the organization owning the application.
     */
    organizationDescription?: pulumi.Input<string | undefined>;
    /**
     * Email address of the Privacy contact or Data Protection officer of the organization.
     */
    privacyContactEmailAddress?: pulumi.Input<string | undefined>;
    /**
     * Unique Tax Number for the user's organization in the country/region the APC Gateway is being purchased.
     */
    taxNumber?: pulumi.Input<string | undefined>;
}

/**
 * Details about the SaaS offer purchased from the marketplace.
 */
export interface SaasPropertiesArgs {
    /**
     * Resource ID of the SaaS offer purchased from the marketplace.
     */
    saasResourceId?: pulumi.Input<string | undefined>;
    /**
     * Subscription ID of the SaaS offer purchased from the marketplace.
     */
    saasSubscriptionId?: pulumi.Input<string | undefined>;
}
