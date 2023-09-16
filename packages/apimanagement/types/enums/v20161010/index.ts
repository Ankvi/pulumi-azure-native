// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const HostnameType = {
    Proxy: "Proxy",
    Portal: "Portal",
    Management: "Management",
    Scm: "Scm",
} as const;

export type HostnameType = (typeof HostnameType)[keyof typeof HostnameType];

export const KeyTypeContract = {
    Primary: "primary",
    Secondary: "secondary",
} as const;

export type KeyTypeContract = (typeof KeyTypeContract)[keyof typeof KeyTypeContract];

export const SkuType = {
    Developer: "Developer",
    Standard: "Standard",
    Premium: "Premium",
} as const;

export type SkuType = (typeof SkuType)[keyof typeof SkuType];

export const VirtualNetworkType = {
    None: "None",
    External: "External",
    Internal: "Internal",
} as const;

export type VirtualNetworkType = (typeof VirtualNetworkType)[keyof typeof VirtualNetworkType];
