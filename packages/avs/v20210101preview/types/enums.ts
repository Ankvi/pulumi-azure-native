export const AddonType = {
    SRM: "SRM",
    VR: "VR",
} as const;

/**
 * The type of private cloud addon
 */
export type AddonType = (typeof AddonType)[keyof typeof AddonType];

export const DhcpTypeEnum = {
    SERVER_RELAY: "SERVER, RELAY",
} as const;

/**
 * Type of DHCP: SERVER or RELAY.
 */
export type DhcpTypeEnum = (typeof DhcpTypeEnum)[keyof typeof DhcpTypeEnum];
