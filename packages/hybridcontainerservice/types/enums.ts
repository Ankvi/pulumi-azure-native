export const AutoUpgradeOptions = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Indicates whether the Arc agents on the provisioned clusters be upgraded automatically to the latest version. Defaults to Enabled.
 */
export type AutoUpgradeOptions = (typeof AutoUpgradeOptions)[keyof typeof AutoUpgradeOptions];

export const LicenseType = {
    Windows_Server: "Windows_Server",
    None: "None",
} as const;

/**
 * LicenseType - The licenseType to use for Windows VMs. Windows_Server is used to enable Azure Hybrid User Benefits for Windows VMs. Possible values include: 'None', 'Windows_Server'
 */
export type LicenseType = (typeof LicenseType)[keyof typeof LicenseType];

export const LoadBalancerSku = {
    Unstacked_haproxy: "unstacked-haproxy",
    Stacked_kube_vip: "stacked-kube-vip",
    Stacked_metallb: "stacked-metallb",
    Unmanaged: "unmanaged",
} as const;

/**
 * LoadBalancerSku - The load balancer sku for the provisioned cluster. Possible values: 'unstacked-haproxy', 'stacked-kube-vip', 'stacked-metallb', 'unmanaged'. The default is 'unmanaged'.
 */
export type LoadBalancerSku = (typeof LoadBalancerSku)[keyof typeof LoadBalancerSku];

export const Mode = {
    System: "System",
    LB: "LB",
    User: "User",
} as const;

/**
 * Mode - AgentPoolMode represents mode of an agent pool. Possible values include: 'System', 'LB', 'User'. Default is 'User'
 */
export type Mode = (typeof Mode)[keyof typeof Mode];

export const NetworkPolicy = {
    Calico: "calico",
    Flannel: "flannel",
} as const;

/**
 * NetworkPolicy - Network policy used for building Kubernetes network. Possible values include: 'calico', 'flannel'. Default is 'calico'
 */
export type NetworkPolicy = (typeof NetworkPolicy)[keyof typeof NetworkPolicy];

export const OsType = {
    Linux: "Linux",
    Windows: "Windows",
} as const;

/**
 * OsType - OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux. Possible values include: 'Linux', 'Windows'
 */
export type OsType = (typeof OsType)[keyof typeof OsType];

export const ResourceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * The type of identity used for the provisioned cluster. The type SystemAssigned, includes a system created identity. The type None means no identity is assigned to the provisioned cluster.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];
