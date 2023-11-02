export const AadAuthFailureMode = {
    /**
     * Indicates that requests that failed authentication should be presented with an HTTP status code of 403 (Forbidden).
     */
    Http403: "http403",
    /**
     * Indicates that requests that failed authentication should be presented with an HTTP status code of 401 (Unauthorized) and present a Bearer Challenge.
     */
    Http401WithBearerChallenge: "http401WithBearerChallenge",
} as const;

/**
 * Describes what response the data plane API of a search service would send for requests that failed authentication.
 */
export type AadAuthFailureMode = (typeof AadAuthFailureMode)[keyof typeof AadAuthFailureMode];

export const HostingMode = {
    /**
     * The limit on number of indexes is determined by the default limits for the SKU.
     */
    Default: "default",
    /**
     * Only application for standard3 SKU, where the search service can have up to 1000 indexes.
     */
    HighDensity: "highDensity",
} as const;

/**
 * Applicable only for the standard3 SKU. You can set this property to enable up to 3 high density partitions that allow up to 1000 indexes, which is much higher than the maximum indexes allowed for any other SKU. For the standard3 SKU, the value is either 'default' or 'highDensity'. For all other SKUs, this value must be 'default'.
 */
export type HostingMode = (typeof HostingMode)[keyof typeof HostingMode];

export const IdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * The identity type.
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const PrivateLinkServiceConnectionProvisioningState = {
    /**
     * The private link service connection is in the process of being created along with other resources for it to be fully functional.
     */
    Updating: "Updating",
    /**
     * The private link service connection is in the process of being deleted.
     */
    Deleting: "Deleting",
    /**
     * The private link service connection has failed to be provisioned or deleted.
     */
    Failed: "Failed",
    /**
     * The private link service connection has finished provisioning and is ready for approval.
     */
    Succeeded: "Succeeded",
    /**
     * Provisioning request for the private link service connection resource has been accepted but the process of creation has not commenced yet.
     */
    Incomplete: "Incomplete",
    /**
     * Provisioning request for the private link service connection resource has been canceled
     */
    Canceled: "Canceled",
} as const;

/**
 * The provisioning state of the private link service connection. Valid values are Updating, Deleting, Failed, Succeeded, or Incomplete
 */
export type PrivateLinkServiceConnectionProvisioningState = (typeof PrivateLinkServiceConnectionProvisioningState)[keyof typeof PrivateLinkServiceConnectionProvisioningState];

export const PrivateLinkServiceConnectionStatus = {
    /**
     * The private endpoint connection has been created and is pending approval.
     */
    Pending: "Pending",
    /**
     * The private endpoint connection is approved and is ready for use.
     */
    Approved: "Approved",
    /**
     * The private endpoint connection has been rejected and cannot be used.
     */
    Rejected: "Rejected",
    /**
     * The private endpoint connection has been removed from the service.
     */
    Disconnected: "Disconnected",
} as const;

/**
 * Status of the the private link service connection. Valid values are Pending, Approved, Rejected, or Disconnected.
 */
export type PrivateLinkServiceConnectionStatus = (typeof PrivateLinkServiceConnectionStatus)[keyof typeof PrivateLinkServiceConnectionStatus];

export const PublicNetworkAccess = {
    Enabled: "enabled",
    Disabled: "disabled",
} as const;

/**
 * This value can be set to 'enabled' to avoid breaking changes on existing customer resources and templates. If set to 'disabled', traffic over public interface is not allowed, and private endpoint connections would be the exclusive access method.
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const SearchEncryptionWithCmk = {
    /**
     * No enforcement will be made and the search service can have non-customer-encrypted resources.
     */
    Disabled: "Disabled",
    /**
     * Search service will be marked as non-compliant if there are one or more non-customer-encrypted resources.
     */
    Enabled: "Enabled",
    /**
     * Enforcement policy is not explicitly specified, with the behavior being the same as if it were set to 'Disabled'.
     */
    Unspecified: "Unspecified",
} as const;

/**
 * Describes how a search service should enforce having one or more non-customer-encrypted resources.
 */
export type SearchEncryptionWithCmk = (typeof SearchEncryptionWithCmk)[keyof typeof SearchEncryptionWithCmk];

export const SearchSemanticSearch = {
    /**
     * Indicates that semantic ranking is disabled for the search service.
     */
    Disabled: "disabled",
    /**
     * Enables semantic ranking on a search service and indicates that it is to be used within the limits of the free tier. This would cap the volume of semantic ranking requests and is offered at no extra charge. This is the default for newly provisioned search services.
     */
    Free: "free",
    /**
     * Enables semantic ranking on a search service as a billable feature, with higher throughput and volume of semantic ranking requests.
     */
    Standard: "standard",
} as const;

/**
 * Sets options that control the availability of semantic search. This configuration is only possible for certain search SKUs in certain locations.
 */
export type SearchSemanticSearch = (typeof SearchSemanticSearch)[keyof typeof SearchSemanticSearch];

export const SharedPrivateLinkResourceProvisioningState = {
    Updating: "Updating",
    Deleting: "Deleting",
    Failed: "Failed",
    Succeeded: "Succeeded",
    Incomplete: "Incomplete",
} as const;

/**
 * The provisioning state of the shared private link resource. Valid values are Updating, Deleting, Failed, Succeeded or Incomplete.
 */
export type SharedPrivateLinkResourceProvisioningState = (typeof SharedPrivateLinkResourceProvisioningState)[keyof typeof SharedPrivateLinkResourceProvisioningState];

export const SharedPrivateLinkResourceStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

/**
 * Status of the shared private link resource. Valid values are Pending, Approved, Rejected or Disconnected.
 */
export type SharedPrivateLinkResourceStatus = (typeof SharedPrivateLinkResourceStatus)[keyof typeof SharedPrivateLinkResourceStatus];

export const SkuName = {
    /**
     * Free tier, with no SLA guarantees and a subset of the features offered on billable tiers.
     */
    Free: "free",
    /**
     * Billable tier for a dedicated service having up to 3 replicas.
     */
    Basic: "basic",
    /**
     * Billable tier for a dedicated service having up to 12 partitions and 12 replicas.
     */
    Standard: "standard",
    /**
     * Similar to 'standard', but with more capacity per search unit.
     */
    Standard2: "standard2",
    /**
     *  The largest Standard offering with up to 12 partitions and 12 replicas (or up to 3 partitions with more indexes if you also set the hostingMode property to 'highDensity').
     */
    Standard3: "standard3",
    /**
     * Billable tier for a dedicated service that supports 1TB per partition, up to 12 partitions.
     */
    StorageOptimizedL1: "storage_optimized_l1",
    /**
     * Billable tier for a dedicated service that supports 2TB per partition, up to 12 partitions.
     */
    StorageOptimizedL2: "storage_optimized_l2",
} as const;

/**
 * The SKU of the search service. Valid values include: 'free': Shared service. 'basic': Dedicated service with up to 3 replicas. 'standard': Dedicated service with up to 12 partitions and 12 replicas. 'standard2': Similar to standard, but with more capacity per search unit. 'standard3': The largest Standard offering with up to 12 partitions and 12 replicas (or up to 3 partitions with more indexes if you also set the hostingMode property to 'highDensity'). 'storage_optimized_l1': Supports 1TB per partition, up to 12 partitions. 'storage_optimized_l2': Supports 2TB per partition, up to 12 partitions.'
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];
