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

export type HostingMode = (typeof HostingMode)[keyof typeof HostingMode];

export const IdentityType = {
    /**
     * Indicates that any identity associated with the search service needs to be removed.
     */
    None: "None",
    /**
     * Indicates that system-assigned identity for the search service will be enabled.
     */
    SystemAssigned: "SystemAssigned",
    /**
     * Indicates that one or more user assigned identities will be assigned to the search service.
     */
    UserAssigned: "UserAssigned",
    /**
     * Indicates that system-assigned identity for the search service will be enabled along with the assignment of one or more user assigned identities.
     */
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
} as const;

export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const PublicNetworkAccess = {
    /**
     * The search service is accessible from traffic originating from the public internet.
     */
    Enabled: "enabled",
    /**
     * The search service is not accessible from traffic originating from the public internet. Access is only permitted over approved private endpoint connections.
     */
    Disabled: "disabled",
} as const;

export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const SearchBypass = {
    /**
     * Indicates that no origin can bypass the rules defined in the 'ipRules' section. This is the default.
     */
    None: "None",
    /**
     * Indicates that requests originating from the Azure portal can bypass the rules defined in the 'ipRules' section.
     */
    AzurePortal: "AzurePortal",
} as const;

export type SearchBypass = (typeof SearchBypass)[keyof typeof SearchBypass];

export const SearchDisabledDataExfiltrationOption = {
    /**
     * Indicates that all data exfiltration scenarios are disabled.
     */
    All: "All",
} as const;

export type SearchDisabledDataExfiltrationOption = (typeof SearchDisabledDataExfiltrationOption)[keyof typeof SearchDisabledDataExfiltrationOption];

export const SearchEncryptionWithCmk = {
    /**
     * No enforcement will be made and the search service can have non customer encrypted resources.
     */
    Disabled: "Disabled",
    /**
     * Search service will be marked as non-compliant if there are one or more non customer encrypted resources.
     */
    Enabled: "Enabled",
    /**
     * Enforcement policy is not explicitly specified, with the behavior being the same as if it were set to 'Disabled'.
     */
    Unspecified: "Unspecified",
} as const;

export type SearchEncryptionWithCmk = (typeof SearchEncryptionWithCmk)[keyof typeof SearchEncryptionWithCmk];

export const SearchSemanticSearch = {
    /**
     * Indicates that semantic search is disabled for the search service. This is the default.
     */
    Disabled: "disabled",
    /**
     * Enables semantic search on a search service and indicates that it is to be used within the limits of the free tier. This would cap the volume of semantic search requests and is offered at no extra charge.
     */
    Free: "free",
    /**
     * Enables semantic search on a search service as a billable feature, with higher throughput and volume of semantic search queries.
     */
    Standard: "standard",
} as const;

export type SearchSemanticSearch = (typeof SearchSemanticSearch)[keyof typeof SearchSemanticSearch];

export const SkuName = {
    /**
     * Free tier, with no SLA guarantees and a subset of features offered to paid tiers.
     */
    Free: "free",
    /**
     * Paid tier dedicated service with up to 3 replicas.
     */
    Basic: "basic",
    /**
     * Paid tier dedicated service with up to 12 partitions and 12 replicas.
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
     * Paid tier dedicated service that supports 1TB per partition, up to 12 partitions.
     */
    StorageOptimizedL1: "storage_optimized_l1",
    /**
     * Paid tier dedicated service that supports 2TB per partition, up to 12 partitions.
     */
    StorageOptimizedL2: "storage_optimized_l2",
} as const;

export type SkuName = (typeof SkuName)[keyof typeof SkuName];
