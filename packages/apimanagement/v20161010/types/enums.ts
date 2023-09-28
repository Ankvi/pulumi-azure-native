export const HostnameType = {
    Proxy: "Proxy",
    Portal: "Portal",
    Management: "Management",
    Scm: "Scm",
} as const;

/**
 * Hostname type.
 */
export type HostnameType = (typeof HostnameType)[keyof typeof HostnameType];

export const KeyTypeContract = {
    Primary: "primary",
    Secondary: "secondary",
} as const;

/**
 * The Key to be used to generate token for user.
 */
export type KeyTypeContract = (typeof KeyTypeContract)[keyof typeof KeyTypeContract];

export const SkuType = {
    Developer: "Developer",
    Standard: "Standard",
    Premium: "Premium",
} as const;

/**
 * Name of the Sku.
 */
export type SkuType = (typeof SkuType)[keyof typeof SkuType];

export const VirtualNetworkType = {
    None: "None",
    External: "External",
    Internal: "Internal",
} as const;

/**
 * The type of VPN in which API Management service needs to be configured in. None (Default Value) means the API Management service is not part of any Virtual Network, External means the API Management deployment is set up inside a Virtual Network having an Internet Facing Endpoint, and Internal means that API Management deployment is setup inside a Virtual Network having an Intranet Facing Endpoint only.
 */
export type VirtualNetworkType = (typeof VirtualNetworkType)[keyof typeof VirtualNetworkType];
