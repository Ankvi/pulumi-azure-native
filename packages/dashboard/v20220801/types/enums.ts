export const ApiKey = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type ApiKey = (typeof ApiKey)[keyof typeof ApiKey];

export const AutoGeneratedDomainNameLabelScope = {
    TenantReuse: "TenantReuse",
} as const;

export type AutoGeneratedDomainNameLabelScope = (typeof AutoGeneratedDomainNameLabelScope)[keyof typeof AutoGeneratedDomainNameLabelScope];

export const DeterministicOutboundIP = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type DeterministicOutboundIP = (typeof DeterministicOutboundIP)[keyof typeof DeterministicOutboundIP];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const ZoneRedundancy = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type ZoneRedundancy = (typeof ZoneRedundancy)[keyof typeof ZoneRedundancy];
