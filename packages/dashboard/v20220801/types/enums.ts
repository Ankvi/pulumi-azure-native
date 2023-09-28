export const ApiKey = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * The api key setting of the Grafana instance.
 */
export type ApiKey = (typeof ApiKey)[keyof typeof ApiKey];

export const AutoGeneratedDomainNameLabelScope = {
    TenantReuse: "TenantReuse",
} as const;

/**
 * Scope for dns deterministic name hash calculation.
 */
export type AutoGeneratedDomainNameLabelScope = (typeof AutoGeneratedDomainNameLabelScope)[keyof typeof AutoGeneratedDomainNameLabelScope];

export const DeterministicOutboundIP = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * Whether a Grafana instance uses deterministic outbound IPs.
 */
export type DeterministicOutboundIP = (typeof DeterministicOutboundIP)[keyof typeof DeterministicOutboundIP];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

/**
 * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
 */
export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Indicate the state for enable or disable traffic over the public interface.
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const ZoneRedundancy = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * The zone redundancy setting of the Grafana instance.
 */
export type ZoneRedundancy = (typeof ZoneRedundancy)[keyof typeof ZoneRedundancy];
