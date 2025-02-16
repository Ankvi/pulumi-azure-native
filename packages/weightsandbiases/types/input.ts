import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Properties specific to Instance
 */
export interface InstancePropertiesArgs {
    /**
     * Marketplace details of the resource.
     */
    marketplace: pulumi.Input<LiftrBaseMarketplaceDetailsArgs>;
    /**
     * partner properties
     */
    partnerProperties?: pulumi.Input<PartnerPropertiesArgs>;
    /**
     * Single sign-on properties
     */
    singleSignOnProperties?: pulumi.Input<LiftrBaseSingleSignOnPropertiesV2Args>;
    /**
     * Details of the user.
     */
    user: pulumi.Input<LiftrBaseUserDetailsArgs>;
}

/**
 * Marketplace details for an organization
 */
export interface LiftrBaseMarketplaceDetailsArgs {
    /**
     * Offer details for the marketplace that is selected by the user
     */
    offerDetails: pulumi.Input<LiftrBaseOfferDetailsArgs>;
    /**
     * Azure subscription id for the the marketplace offer is purchased from
     */
    subscriptionId?: pulumi.Input<string>;
}

/**
 * Offer details for the marketplace that is selected by the user
 */
export interface LiftrBaseOfferDetailsArgs {
    /**
     * Offer Id for the marketplace offer
     */
    offerId: pulumi.Input<string>;
    /**
     * Plan Id for the marketplace offer
     */
    planId: pulumi.Input<string>;
    /**
     * Plan Name for the marketplace offer
     */
    planName?: pulumi.Input<string>;
    /**
     * Publisher Id for the marketplace offer
     */
    publisherId: pulumi.Input<string>;
    /**
     * Plan Display Name for the marketplace offer
     */
    termId?: pulumi.Input<string>;
    /**
     * Plan Display Name for the marketplace offer
     */
    termUnit?: pulumi.Input<string>;
}

/**
 * Properties specific to Single Sign On Resource
 */
export interface LiftrBaseSingleSignOnPropertiesV2Args {
    /**
     * List of AAD domains fetched from Microsoft Graph for user.
     */
    aadDomains?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * AAD enterprise application Id used to setup SSO
     */
    enterpriseAppId?: pulumi.Input<string>;
    /**
     * State of the Single Sign On for the resource
     */
    state?: pulumi.Input<string | enums.SingleSignOnStates>;
    /**
     * Type of Single Sign-On mechanism being used
     */
    type: pulumi.Input<string | enums.SingleSignOnType>;
    /**
     * URL for SSO to be used by the partner to redirect the user to their system
     */
    url?: pulumi.Input<string>;
}

/**
 * User details for an organization
 */
export interface LiftrBaseUserDetailsArgs {
    /**
     * Email address of the user
     */
    emailAddress?: pulumi.Input<string>;
    /**
     * First name of the user
     */
    firstName?: pulumi.Input<string>;
    /**
     * Last name of the user
     */
    lastName?: pulumi.Input<string>;
    /**
     * User's phone number
     */
    phoneNumber?: pulumi.Input<string>;
    /**
     * User's principal name
     */
    upn?: pulumi.Input<string>;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Partner's specific Properties
 */
export interface PartnerPropertiesArgs {
    /**
     * The region of the instance
     */
    region: pulumi.Input<string | enums.Region>;
    /**
     * The subdomain of the instance
     */
    subdomain: pulumi.Input<string>;
}
