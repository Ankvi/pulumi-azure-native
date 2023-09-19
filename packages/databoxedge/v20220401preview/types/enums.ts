export const DataResidencyType = {
    GeoZoneReplication: "GeoZoneReplication",
    ZoneReplication: "ZoneReplication",
} as const;

export type DataResidencyType = (typeof DataResidencyType)[keyof typeof DataResidencyType];

export const ShipmentType = {
    NotApplicable: "NotApplicable",
    ShippedToCustomer: "ShippedToCustomer",
    SelfPickup: "SelfPickup",
} as const;

export type ShipmentType = (typeof ShipmentType)[keyof typeof ShipmentType];

export const SkuName = {
    Gateway: "Gateway",
    Edge: "Edge",
    TEA_1Node: "TEA_1Node",
    TEA_1Node_UPS: "TEA_1Node_UPS",
    TEA_1Node_Heater: "TEA_1Node_Heater",
    TEA_1Node_UPS_Heater: "TEA_1Node_UPS_Heater",
    TEA_4Node_Heater: "TEA_4Node_Heater",
    TEA_4Node_UPS_Heater: "TEA_4Node_UPS_Heater",
    TMA: "TMA",
    TDC: "TDC",
    TCA_Small: "TCA_Small",
    GPU: "GPU",
    TCA_Large: "TCA_Large",
    EdgeP_Base: "EdgeP_Base",
    EdgeP_High: "EdgeP_High",
    EdgePR_Base: "EdgePR_Base",
    EdgePR_Base_UPS: "EdgePR_Base_UPS",
    EP2_64_1VPU_W: "EP2_64_1VPU_W",
    EP2_128_1T4_Mx1_W: "EP2_128_1T4_Mx1_W",
    EP2_256_2T4_W: "EP2_256_2T4_W",
    EdgeMR_Mini: "EdgeMR_Mini",
    RCA_Small: "RCA_Small",
    RCA_Large: "RCA_Large",
    RDC: "RDC",
    Management: "Management",
    EP2_64_Mx1_W: "EP2_64_Mx1_W",
    EP2_128_GPU1_Mx1_W: "EP2_128_GPU1_Mx1_W",
    EP2_256_GPU2_Mx1: "EP2_256_GPU2_Mx1",
    EdgeMR_TCP: "EdgeMR_TCP",
} as const;

export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const SkuTier = {
    Standard: "Standard",
} as const;

export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];
