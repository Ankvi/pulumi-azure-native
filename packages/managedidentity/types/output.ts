import * as pulumi from "@pulumi/pulumi";
/**
 * Describes an Azure resource that is attached to an identity.
 */
export interface AzureResourceResponse {
    /**
     * The ID of this resource.
     */
    id: string;
    /**
     * The name of this resource.
     */
    name: string;
    /**
     * The name of the resource group this resource belongs to.
     */
    resourceGroup: string;
    /**
     * The name of the subscription this resource belongs to.
     */
    subscriptionDisplayName: string;
    /**
     * The ID of the subscription this resource belongs to.
     */
    subscriptionId: string;
    /**
     * The type of this resource.
     */
    type: string;
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




