import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Additional attribute or filter to allow subscriptions meeting the requirements to be part of the GroupQuota.
 */
export interface AdditionalAttributesResponse {
    environment?: any;
    /**
     * The grouping Id for the group quota. It can be Billing Id or ServiceTreeId if applicable. 
     */
    groupId: GroupingIdResponse;
}

export interface GroupQuotaSubscriptionIdResponseProperties {
    /**
     * Status of this subscriptionId being associated with the GroupQuotasEntity.
     */
    provisioningState: string;
    /**
     * An Azure subscriptionId.
     */
    subscriptionId: string;
}

/**
 * Properties and filters for ShareQuota. The request parameter is optional, if there are no filters specified.
 */
export interface GroupQuotasEntityBaseResponse {
    /**
     * Additional attributes to filter/restrict the subscriptions, which can be added to the subscriptionIds.
     */
    additionalAttributes?: AdditionalAttributesResponse;
    /**
     * Display name of the GroupQuota entity.
     */
    displayName?: string;
    /**
     * Provisioning state of the operation.
     */
    provisioningState: string;
}

/**
 * The grouping Id for the group quota. It can be Billing Id or ServiceTreeId if applicable. 
 */
export interface GroupingIdResponse {
    /**
     * GroupingId type. It is a required property. More types of groupIds can be supported in future.
     */
    groupingIdType?: string;
    /**
     * GroupId value based on the groupingType selected - Billing Id or ServiceTreeId.
     */
    value?: string;
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


