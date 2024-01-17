import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Creator resource properties
 */
export interface CreatorPropertiesResponse {
    /**
     * The state of the resource provisioning, terminal states: Succeeded, Failed, Canceled
     */
    provisioningState: string;
    /**
     * The storage units to be allocated. Integer values from 1 to 100, inclusive.
     */
    storageUnits: number;
}

/**
 * Additional Map account properties
 */
export interface MapsAccountPropertiesResponse {
    /**
     * Allows toggle functionality on Azure Policy to disable Azure Maps local authentication support. This will disable Shared Keys authentication from any usage.
     */
    disableLocalAuth?: boolean;
    /**
     * the state of the provisioning.
     */
    provisioningState: string;
    /**
     * A unique identifier for the maps account
     */
    uniqueId: string;
}
/**
 * mapsAccountPropertiesResponseProvideDefaults sets the appropriate defaults for MapsAccountPropertiesResponse
 */
export function mapsAccountPropertiesResponseProvideDefaults(val: MapsAccountPropertiesResponse): MapsAccountPropertiesResponse {
    return {
        ...val,
        disableLocalAuth: (val.disableLocalAuth) ?? false,
    };
}

/**
 * Private Atlas resource properties
 */
export interface PrivateAtlasPropertiesResponse {
    /**
     * The state of the resource provisioning, terminal states: Succeeded, Failed, Canceled
     */
    provisioningState?: string;
}

/**
 * The private endpoint resource.
 */
export interface PrivateEndpointResponse {
    /**
     * The ARM identifier for private endpoint.
     */
    id: string;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateResponse {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: string;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: string;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: string;
}

/**
 * The SKU of the Maps Account.
 */
export interface SkuResponse {
    /**
     * The name of the SKU, in standard format (such as S0).
     */
    name: string;
    /**
     * Gets the sku tier. This is based on the SKU name.
     */
    tier: string;
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






