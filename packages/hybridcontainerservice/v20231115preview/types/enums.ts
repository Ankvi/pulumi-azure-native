export const AzureHybridBenefit = {
    True: "True",
    False: "False",
    NotApplicable: "NotApplicable",
} as const;

/**
 * Indicates whether Azure Hybrid Benefit is opted in
 */
export type AzureHybridBenefit = (typeof AzureHybridBenefit)[keyof typeof AzureHybridBenefit];

export const ExtendedLocationTypes = {
    CustomLocation: "CustomLocation",
} as const;

/**
 * The extended location type.
 */
export type ExtendedLocationTypes = (typeof ExtendedLocationTypes)[keyof typeof ExtendedLocationTypes];

export const NetworkPolicy = {
    Calico: "calico",
    Flannel: "flannel",
} as const;

/**
 * NetworkPolicy - Network policy used for building Kubernetes network. Possible values include: 'calico', 'flannel'. Default is 'calico'
 */
export type NetworkPolicy = (typeof NetworkPolicy)[keyof typeof NetworkPolicy];

export const OSSKU = {
    /**
     * Use Mariner as the OS for node images.
     */
    CBLMariner: "CBLMariner",
    /**
     * Use Windows2019 as the OS for node images.
     */
    Windows2019: "Windows2019",
    /**
     * Use Windows2022 as the OS for node images.
     */
    Windows2022: "Windows2022",
} as const;

/**
 * Specifies the OS SKU used by the agent pool. The default is CBLMariner if OSType is Linux. The default is Windows2019 when OSType is Windows.
 */
export type OSSKU = (typeof OSSKU)[keyof typeof OSSKU];

export const OsType = {
    Linux: "Linux",
    Windows: "Windows",
} as const;

/**
 * OsType - OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux. Possible values include: 'Linux', 'Windows'
 */
export type OsType = (typeof OsType)[keyof typeof OsType];
