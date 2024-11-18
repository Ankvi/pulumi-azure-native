import * as pulumi from "@pulumi/pulumi";
/**
 * Details of the Scheduler
 */
export interface SchedulerPropertiesResponse {
    /**
     * URL of the durable task scheduler
     */
    endpoint: string;
    /**
     * IP allow list for durable task scheduler. Values can be IPv4, IPv6 or CIDR
     */
    ipAllowlist: string[];
    /**
     * The status of the last operation
     */
    provisioningState: string;
    /**
     * SKU of the durable task scheduler
     */
    sku: SchedulerSkuResponse;
}

/**
 * The SKU (Stock Keeping Unit) assigned to this durable task scheduler
 */
export interface SchedulerSkuResponse {
    /**
     * The SKU capacity. This allows scale out/in for the resource and impacts zone redundancy
     */
    capacity?: number;
    /**
     * The name of the SKU
     */
    name: string;
    /**
     * Indicates whether the current SKU configuration is zone redundant
     */
    redundancyState: string;
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
 * The properties of Task Hub
 */
export interface TaskHubPropertiesResponse {
    /**
     * URL of the durable task scheduler dashboard
     */
    dashboardUrl: string;
    /**
     * The status of the last operation
     */
    provisioningState: string;
}
