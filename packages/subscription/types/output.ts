import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Put subscription creation result properties.
 */
export interface SubscriptionAliasResponsePropertiesResponse {
    /**
     * The accept ownership state of the resource.
     */
    acceptOwnershipState: string;
    /**
     * Url to accept ownership of the subscription.
     */
    acceptOwnershipUrl: string;
    /**
     * Billing scope of the subscription.
     * For CustomerLed and FieldLed - /billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}
     * For PartnerLed - /billingAccounts/{billingAccountName}/customers/{customerName}
     * For Legacy EA - /billingAccounts/{billingAccountName}/enrollmentAccounts/{enrollmentAccountName}
     */
    billingScope?: string;
    /**
     * Created Time
     */
    createdTime?: string;
    /**
     * The display name of the subscription.
     */
    displayName?: string;
    /**
     * The Management Group Id.
     */
    managementGroupId?: string;
    /**
     * The provisioning state of the resource.
     */
    provisioningState: string;
    /**
     * Reseller Id
     */
    resellerId?: string;
    /**
     * Newly created subscription Id.
     */
    subscriptionId: string;
    /**
     * Owner Id of the subscription
     */
    subscriptionOwnerId?: string;
    /**
     * Tags for the subscription
     */
    tags?: {[key: string]: string};
    /**
     * The workload type of the subscription. It can be either Production or DevTest.
     */
    workload?: string;
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
 * Properties of subscription Response for Changed Target Directory.
 */
export interface TargetDirectoryResultPropertiesResponse {
    /**
     * Destination Owner Id where Subscription will be accepted.
     */
    destinationOwnerId: string;
    /**
     * Destination Tenant Id where Subscription will be accepted.
     */
    destinationTenantId: string;
    /**
     * Subscription Initiate Request Expiry time
     */
    expiresOn: string;
    /**
     * Subscription Status.
     */
    status: string;
}
