export const Access = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

/**
 * The access type of the rule. Valid values are: 'Allow', 'Deny'
 */
export type Access = (typeof Access)[keyof typeof Access];

export const AuthorizationUseStatus = {
    Available: "Available",
    InUse: "InUse",
} as const;

/**
 * AuthorizationUseStatus. Possible values are: 'Available' and 'InUse'.
 */
export type AuthorizationUseStatus = (typeof AuthorizationUseStatus)[keyof typeof AuthorizationUseStatus];

export const ExpressRouteCircuitPeeringAdvertisedPublicPrefixState = {
    NotConfigured: "NotConfigured",
    Configuring: "Configuring",
    Configured: "Configured",
    ValidationNeeded: "ValidationNeeded",
} as const;

/**
 * AdvertisedPublicPrefixState of the Peering resource. Possible values are 'NotConfigured', 'Configuring', 'Configured', and 'ValidationNeeded'.
 */
export type ExpressRouteCircuitPeeringAdvertisedPublicPrefixState = (typeof ExpressRouteCircuitPeeringAdvertisedPublicPrefixState)[keyof typeof ExpressRouteCircuitPeeringAdvertisedPublicPrefixState];

export const ExpressRouteCircuitPeeringState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * The state of peering. Possible values are: 'Disabled' and 'Enabled'
 */
export type ExpressRouteCircuitPeeringState = (typeof ExpressRouteCircuitPeeringState)[keyof typeof ExpressRouteCircuitPeeringState];

export const ExpressRouteCircuitSkuFamily = {
    UnlimitedData: "UnlimitedData",
    MeteredData: "MeteredData",
} as const;

/**
 * The family of the SKU. Possible values are: 'UnlimitedData' and 'MeteredData'.
 */
export type ExpressRouteCircuitSkuFamily = (typeof ExpressRouteCircuitSkuFamily)[keyof typeof ExpressRouteCircuitSkuFamily];

export const ExpressRouteCircuitSkuTier = {
    Standard: "Standard",
    Premium: "Premium",
    Basic: "Basic",
    Local: "Local",
} as const;

/**
 * The tier of the SKU. Possible values are 'Standard', 'Premium' or 'Local'.
 */
export type ExpressRouteCircuitSkuTier = (typeof ExpressRouteCircuitSkuTier)[keyof typeof ExpressRouteCircuitSkuTier];

export const ExpressRoutePeeringState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * The peering state.
 */
export type ExpressRoutePeeringState = (typeof ExpressRoutePeeringState)[keyof typeof ExpressRoutePeeringState];

export const ExpressRoutePeeringType = {
    AzurePublicPeering: "AzurePublicPeering",
    AzurePrivatePeering: "AzurePrivatePeering",
    MicrosoftPeering: "MicrosoftPeering",
} as const;

/**
 * The peering type.
 */
export type ExpressRoutePeeringType = (typeof ExpressRoutePeeringType)[keyof typeof ExpressRoutePeeringType];

export const RouteFilterRuleType = {
    Community: "Community",
} as const;

/**
 * The rule type of the rule. Valid value is: 'Community'
 */
export type RouteFilterRuleType = (typeof RouteFilterRuleType)[keyof typeof RouteFilterRuleType];

export const ServiceProviderProvisioningState = {
    NotProvisioned: "NotProvisioned",
    Provisioning: "Provisioning",
    Provisioned: "Provisioned",
    Deprovisioning: "Deprovisioning",
} as const;

/**
 * The ServiceProviderProvisioningState state of the resource. Possible values are 'NotProvisioned', 'Provisioning', 'Provisioned', and 'Deprovisioning'.
 */
export type ServiceProviderProvisioningState = (typeof ServiceProviderProvisioningState)[keyof typeof ServiceProviderProvisioningState];
