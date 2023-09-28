export const DataBoxEdgeDeviceStatus = {
    ReadyToSetup: "ReadyToSetup",
    Online: "Online",
    Offline: "Offline",
    NeedsAttention: "NeedsAttention",
    Disconnected: "Disconnected",
    PartiallyDisconnected: "PartiallyDisconnected",
    Maintenance: "Maintenance",
} as const;

/**
 * The status of the Data Box Edge/Gateway device.
 */
export type DataBoxEdgeDeviceStatus = (typeof DataBoxEdgeDeviceStatus)[keyof typeof DataBoxEdgeDeviceStatus];

export const EncryptionAlgorithm = {
    None: "None",
    AES256: "AES256",
    RSAES_PKCS1_v_1_5: "RSAES_PKCS1_v_1_5",
} as const;

/**
 * The algorithm used to encrypt "Value".
 */
export type EncryptionAlgorithm = (typeof EncryptionAlgorithm)[keyof typeof EncryptionAlgorithm];

export const MsiIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

/**
 * Identity type
 */
export type MsiIdentityType = (typeof MsiIdentityType)[keyof typeof MsiIdentityType];

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
} as const;

/**
 * SKU name.
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const SkuTier = {
    Standard: "Standard",
} as const;

/**
 * The SKU tier. This is based on the SKU name.
 */
export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];

export const UserType = {
    Share: "Share",
    LocalManagement: "LocalManagement",
    ARM: "ARM",
} as const;

/**
 * Type of the user.
 */
export type UserType = (typeof UserType)[keyof typeof UserType];
