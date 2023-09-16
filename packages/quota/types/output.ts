import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace quota {
    /**
     * Additional attribute to allow subscriptions to be part of the GroupQuota.
     */
    export interface AdditionalAttributesResponse {
        environment?: any;
        /**
         * The grouping Id for the group quota. It can be management Group Id or ServiceTreeId if applicable. 
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
         * Additional attributes to allow subscription, which can be added to the subscriptionIds.
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
     * The grouping Id for the group quota. It can be management Group Id or ServiceTreeId if applicable. 
     */
    export interface GroupingIdResponse {
        /**
         * GroupingId type. It is a required property. More types of groupIds can be supported in future. MGID is already in the URI, so it's not needed.'
         */
        groupingIdType?: string;
        /**
         * GroupId value based on the groupingType selected - management Group Id or ServiceTreeId.
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

    export namespace v20230601preview {
        /**
         * Additional attribute to allow subscriptions to be part of the GroupQuota.
         */
        export interface AdditionalAttributesResponse {
            environment?: any;
            /**
             * The grouping Id for the group quota. It can be management Group Id or ServiceTreeId if applicable. 
             */
            groupId: v20230601preview.GroupingIdResponse;
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
             * Additional attributes to allow subscription, which can be added to the subscriptionIds.
             */
            additionalAttributes?: v20230601preview.AdditionalAttributesResponse;
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
         * The grouping Id for the group quota. It can be management Group Id or ServiceTreeId if applicable. 
         */
        export interface GroupingIdResponse {
            /**
             * GroupingId type. It is a required property. More types of groupIds can be supported in future. MGID is already in the URI, so it's not needed.'
             */
            groupingIdType?: string;
            /**
             * GroupId value based on the groupingType selected - management Group Id or ServiceTreeId.
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

    }
}
