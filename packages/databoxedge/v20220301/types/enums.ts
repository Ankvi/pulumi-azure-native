export const AccountType = {
    GeneralPurposeStorage: "GeneralPurposeStorage",
    BlobStorage: "BlobStorage",
} as const;

/**
 * Type of storage accessed on the storage account.
 */
export type AccountType = (typeof AccountType)[keyof typeof AccountType];

export const AddonType = {
    IotEdge: "IotEdge",
    ArcForKubernetes: "ArcForKubernetes",
} as const;

/**
 * Addon type.
 */
export type AddonType = (typeof AddonType)[keyof typeof AddonType];

export const AzureContainerDataFormat = {
    BlockBlob: "BlockBlob",
    PageBlob: "PageBlob",
    AzureFile: "AzureFile",
} as const;

/**
 * Storage format used for the file represented by the share.
 */
export type AzureContainerDataFormat = (typeof AzureContainerDataFormat)[keyof typeof AzureContainerDataFormat];

export const ClientPermissionType = {
    NoAccess: "NoAccess",
    ReadOnly: "ReadOnly",
    ReadWrite: "ReadWrite",
} as const;

/**
 * Type of access to be allowed for the client.
 */
export type ClientPermissionType = (typeof ClientPermissionType)[keyof typeof ClientPermissionType];

export const DataPolicy = {
    Cloud: "Cloud",
    Local: "Local",
} as const;

/**
 * Data policy of the storage Account.
 */
export type DataPolicy = (typeof DataPolicy)[keyof typeof DataPolicy];

export const DataResidencyType = {
    GeoZoneReplication: "GeoZoneReplication",
    ZoneReplication: "ZoneReplication",
} as const;

/**
 * DataResidencyType enum
 */
export type DataResidencyType = (typeof DataResidencyType)[keyof typeof DataResidencyType];

export const DayOfWeek = {
    Sunday: "Sunday",
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
} as const;

export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

export const EncryptionAlgorithm = {
    None: "None",
    AES256: "AES256",
    RSAES_PKCS1_v_1_5: "RSAES_PKCS1_v_1_5",
} as const;

/**
 * The algorithm used to encrypt "Value".
 */
export type EncryptionAlgorithm = (typeof EncryptionAlgorithm)[keyof typeof EncryptionAlgorithm];

export const MonitoringStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Current monitoring status of the share.
 */
export type MonitoringStatus = (typeof MonitoringStatus)[keyof typeof MonitoringStatus];

export const MsiIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

/**
 * Identity type
 */
export type MsiIdentityType = (typeof MsiIdentityType)[keyof typeof MsiIdentityType];

export const SSLStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Signifies whether SSL needs to be enabled or not.
 */
export type SSLStatus = (typeof SSLStatus)[keyof typeof SSLStatus];

export const ShareAccessProtocol = {
    SMB: "SMB",
    NFS: "NFS",
} as const;

/**
 * Access protocol to be used by the share.
 */
export type ShareAccessProtocol = (typeof ShareAccessProtocol)[keyof typeof ShareAccessProtocol];

export const ShareAccessType = {
    Change: "Change",
    Read: "Read",
    Custom: "Custom",
} as const;

/**
 * Type of access to be allowed for the user.
 */
export type ShareAccessType = (typeof ShareAccessType)[keyof typeof ShareAccessType];

export const ShareStatus = {
    Offline: "Offline",
    Unknown: "Unknown",
    OK: "OK",
    Updating: "Updating",
    NeedsAttention: "NeedsAttention",
} as const;

/**
 * Current status of the share.
 */
export type ShareStatus = (typeof ShareStatus)[keyof typeof ShareStatus];

export const ShipmentType = {
    NotApplicable: "NotApplicable",
    ShippedToCustomer: "ShippedToCustomer",
    SelfPickup: "SelfPickup",
} as const;

/**
 * ShipmentType of the order
 */
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

export const StorageAccountStatus = {
    OK: "OK",
    Offline: "Offline",
    Unknown: "Unknown",
    Updating: "Updating",
    NeedsAttention: "NeedsAttention",
} as const;

/**
 * Current status of the storage account
 */
export type StorageAccountStatus = (typeof StorageAccountStatus)[keyof typeof StorageAccountStatus];

export const UserType = {
    Share: "Share",
    LocalManagement: "LocalManagement",
    ARM: "ARM",
} as const;

/**
 * Type of the user.
 */
export type UserType = (typeof UserType)[keyof typeof UserType];
