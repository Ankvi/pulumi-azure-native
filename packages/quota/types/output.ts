import * as pulumi from "@pulumi/pulumi";
export interface GroupQuotaSubscriptionIdResponseProperties {
    /**
     * Status of this subscriptionId being associated with the GroupQuotasEntity.
     */
    provisioningState: string;
    /**
     * An Azure subscriptionId.
     */
    subscriptionId?: string;
}

export interface GroupQuotasEntityResponseProperties {
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
