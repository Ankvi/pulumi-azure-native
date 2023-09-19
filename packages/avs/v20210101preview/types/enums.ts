export const AddonType = {
    SRM: "SRM",
    VR: "VR",
} as const;

export type AddonType = (typeof AddonType)[keyof typeof AddonType];

export const DhcpTypeEnum = {
    SERVER_RELAY: "SERVER, RELAY",
} as const;

export type DhcpTypeEnum = (typeof DhcpTypeEnum)[keyof typeof DhcpTypeEnum];
