export const Access = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

export type Access = (typeof Access)[keyof typeof Access];

export const AuthorizationUseStatus = {
    Available: "Available",
    InUse: "InUse",
} as const;

export type AuthorizationUseStatus = (typeof AuthorizationUseStatus)[keyof typeof AuthorizationUseStatus];

export const ExpressRouteCircuitPeeringAdvertisedPublicPrefixState = {
    NotConfigured: "NotConfigured",
    Configuring: "Configuring",
    Configured: "Configured",
    ValidationNeeded: "ValidationNeeded",
} as const;

export type ExpressRouteCircuitPeeringAdvertisedPublicPrefixState = (typeof ExpressRouteCircuitPeeringAdvertisedPublicPrefixState)[keyof typeof ExpressRouteCircuitPeeringAdvertisedPublicPrefixState];

export const ExpressRouteCircuitPeeringState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type ExpressRouteCircuitPeeringState = (typeof ExpressRouteCircuitPeeringState)[keyof typeof ExpressRouteCircuitPeeringState];

export const ExpressRouteCircuitSkuFamily = {
    UnlimitedData: "UnlimitedData",
    MeteredData: "MeteredData",
} as const;

export type ExpressRouteCircuitSkuFamily = (typeof ExpressRouteCircuitSkuFamily)[keyof typeof ExpressRouteCircuitSkuFamily];

export const ExpressRouteCircuitSkuTier = {
    Standard: "Standard",
    Premium: "Premium",
    Basic: "Basic",
    Local: "Local",
} as const;

export type ExpressRouteCircuitSkuTier = (typeof ExpressRouteCircuitSkuTier)[keyof typeof ExpressRouteCircuitSkuTier];

export const ExpressRoutePeeringState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type ExpressRoutePeeringState = (typeof ExpressRoutePeeringState)[keyof typeof ExpressRoutePeeringState];

export const ExpressRoutePeeringType = {
    AzurePublicPeering: "AzurePublicPeering",
    AzurePrivatePeering: "AzurePrivatePeering",
    MicrosoftPeering: "MicrosoftPeering",
} as const;

export type ExpressRoutePeeringType = (typeof ExpressRoutePeeringType)[keyof typeof ExpressRoutePeeringType];

export const RouteFilterRuleType = {
    Community: "Community",
} as const;

export type RouteFilterRuleType = (typeof RouteFilterRuleType)[keyof typeof RouteFilterRuleType];

export const ServiceProviderProvisioningState = {
    NotProvisioned: "NotProvisioned",
    Provisioning: "Provisioning",
    Provisioned: "Provisioned",
    Deprovisioning: "Deprovisioning",
} as const;

export type ServiceProviderProvisioningState = (typeof ServiceProviderProvisioningState)[keyof typeof ServiceProviderProvisioningState];
