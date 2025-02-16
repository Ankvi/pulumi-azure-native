import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Properties specific to Instance
 */
export interface InstancePropertiesResponse {
    /**
     * Marketplace details of the resource.
     */
    marketplace: LiftrBaseMarketplaceDetailsResponse;
    /**
     * partner properties
     */
    partnerProperties?: PartnerPropertiesResponse;
    /**
     * Provisioning state of the resource.
     */
    provisioningState: string;
    /**
     * Single sign-on properties
     */
    singleSignOnProperties?: LiftrBaseSingleSignOnPropertiesV2Response;
    /**
     * Details of the user.
     */
    user: LiftrBaseUserDetailsResponse;
}

/**
 * Marketplace details for an organization
 */
export interface LiftrBaseMarketplaceDetailsResponse {
    /**
     * Offer details for the marketplace that is selected by the user
     */
    offerDetails: LiftrBaseOfferDetailsResponse;
    /**
     * Azure subscription id for the the marketplace offer is purchased from
     */
    subscriptionId?: string;
    /**
     * Marketplace subscription status
     */
    subscriptionStatus: string;
}

/**
 * Offer details for the marketplace that is selected by the user
 */
export interface LiftrBaseOfferDetailsResponse {
    /**
     * Offer Id for the marketplace offer
     */
    offerId: string;
    /**
     * Plan Id for the marketplace offer
     */
    planId: string;
    /**
     * Plan Name for the marketplace offer
     */
    planName?: string;
    /**
     * Publisher Id for the marketplace offer
     */
    publisherId: string;
    /**
     * Plan Display Name for the marketplace offer
     */
    termId?: string;
    /**
     * Plan Display Name for the marketplace offer
     */
    termUnit?: string;
}

/**
 * Properties specific to Single Sign On Resource
 */
export interface LiftrBaseSingleSignOnPropertiesV2Response {
    /**
     * List of AAD domains fetched from Microsoft Graph for user.
     */
    aadDomains?: string[];
    /**
     * AAD enterprise application Id used to setup SSO
     */
    enterpriseAppId?: string;
    /**
     * State of the Single Sign On for the resource
     */
    state?: string;
    /**
     * Type of Single Sign-On mechanism being used
     */
    type: string;
    /**
     * URL for SSO to be used by the partner to redirect the user to their system
     */
    url?: string;
}

/**
 * User details for an organization
 */
export interface LiftrBaseUserDetailsResponse {
    /**
     * Email address of the user
     */
    emailAddress?: string;
    /**
     * First name of the user
     */
    firstName?: string;
    /**
     * Last name of the user
     */
    lastName?: string;
    /**
     * User's phone number
     */
    phoneNumber?: string;
    /**
     * User's principal name
     */
    upn?: string;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityResponse {
    /**
     * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    principalId: string;
    /**
     * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    tenantId: string;
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: string;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
}

/**
 * Partner's specific Properties
 */
export interface PartnerPropertiesResponse {
    /**
     * The region of the instance
     */
    region: string;
    /**
     * The subdomain of the instance
     */
    subdomain: string;
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
 * User assigned identity properties
 */
export interface UserAssignedIdentityResponse {
    /**
     * The client ID of the assigned identity.
     */
    clientId: string;
    /**
     * The principal ID of the assigned identity.
     */
    principalId: string;
}
