// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// Export sub-modules:
import * as v20220501preview from "./v20220501preview";
import * as v20220901preview from "./v20220901preview";

export {
    v20220501preview,
    v20220901preview,
};

export const AutoUpgradeOptions = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type AutoUpgradeOptions = (typeof AutoUpgradeOptions)[keyof typeof AutoUpgradeOptions];

export const LicenseType = {
    Windows_Server: "Windows_Server",
    None: "None",
} as const;

export type LicenseType = (typeof LicenseType)[keyof typeof LicenseType];

export const LoadBalancerSku = {
    Unstacked_haproxy: "unstacked-haproxy",
    Stacked_kube_vip: "stacked-kube-vip",
    Stacked_metallb: "stacked-metallb",
    Unmanaged: "unmanaged",
} as const;

export type LoadBalancerSku = (typeof LoadBalancerSku)[keyof typeof LoadBalancerSku];

export const Mode = {
    System: "System",
    LB: "LB",
    User: "User",
} as const;

export type Mode = (typeof Mode)[keyof typeof Mode];

export const NetworkPolicy = {
    Calico: "calico",
    Flannel: "flannel",
} as const;

export type NetworkPolicy = (typeof NetworkPolicy)[keyof typeof NetworkPolicy];

export const OsType = {
    Linux: "Linux",
    Windows: "Windows",
} as const;

export type OsType = (typeof OsType)[keyof typeof OsType];

export const ResourceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];
