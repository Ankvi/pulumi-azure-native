import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Additional attribute or filter to allow subscriptions meeting the requirements to be part of the GroupQuota.
 */
export interface AdditionalAttributesArgs {
    environment?: any;
    /**
     * The grouping Id for the group quota. It can be Billing Id or ServiceTreeId if applicable. 
     */
    groupId: pulumi.Input<GroupingIdArgs>;
}

/**
 * Properties and filters for ShareQuota. The request parameter is optional, if there are no filters specified.
 */
export interface GroupQuotasEntityBaseArgs {
    /**
     * Additional attributes to filter/restrict the subscriptions, which can be added to the subscriptionIds.
     */
    additionalAttributes?: pulumi.Input<AdditionalAttributesArgs>;
    /**
     * Display name of the GroupQuota entity.
     */
    displayName?: pulumi.Input<string>;
}

/**
 * The grouping Id for the group quota. It can be Billing Id or ServiceTreeId if applicable. 
 */
export interface GroupingIdArgs {
    /**
     * GroupingId type. It is a required property. More types of groupIds can be supported in future.
     */
    groupingIdType?: pulumi.Input<string | enums.GroupingIdType>;
    /**
     * GroupId value based on the groupingType selected - Billing Id or ServiceTreeId.
     */
    value?: pulumi.Input<string>;
}

