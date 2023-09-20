export const AccountType = {
    GeneralPurposeStorage: "GeneralPurposeStorage",
    BlobStorage: "BlobStorage",
} as const;

export type AccountType = (typeof AccountType)[keyof typeof AccountType];

export const AddonType = {
    IotEdge: "IotEdge",
    ArcForKubernetes: "ArcForKubernetes",
} as const;

export type AddonType = (typeof AddonType)[keyof typeof AddonType];

export const AzureContainerDataFormat = {
    BlockBlob: "BlockBlob",
    PageBlob: "PageBlob",
    AzureFile: "AzureFile",
} as const;

export type AzureContainerDataFormat = (typeof AzureContainerDataFormat)[keyof typeof AzureContainerDataFormat];

export const ClientPermissionType = {
    NoAccess: "NoAccess",
    ReadOnly: "ReadOnly",
    ReadWrite: "ReadWrite",
} as const;

export type ClientPermissionType = (typeof ClientPermissionType)[keyof typeof ClientPermissionType];

export const DataPolicy = {
    Cloud: "Cloud",
    Local: "Local",
} as const;

export type DataPolicy = (typeof DataPolicy)[keyof typeof DataPolicy];

export const DataResidencyType = {
    GeoZoneReplication: "GeoZoneReplication",
    ZoneReplication: "ZoneReplication",
} as const;

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

export type EncryptionAlgorithm = (typeof EncryptionAlgorithm)[keyof typeof EncryptionAlgorithm];

export const MonitoringStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type MonitoringStatus = (typeof MonitoringStatus)[keyof typeof MonitoringStatus];

export const MsiIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

export type MsiIdentityType = (typeof MsiIdentityType)[keyof typeof MsiIdentityType];

export const PlatformType = {
    Windows: "Windows",
    Linux: "Linux",
} as const;

export type PlatformType = (typeof PlatformType)[keyof typeof PlatformType];

export const RoleStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type RoleStatus = (typeof RoleStatus)[keyof typeof RoleStatus];

export const RoleTypes = {
    IOT: "IOT",
    ASA: "ASA",
    Functions: "Functions",
    Cognitive: "Cognitive",
    MEC: "MEC",
    CloudEdgeManagement: "CloudEdgeManagement",
    Kubernetes: "Kubernetes",
} as const;

export type RoleTypes = (typeof RoleTypes)[keyof typeof RoleTypes];

export const SSLStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type SSLStatus = (typeof SSLStatus)[keyof typeof SSLStatus];

export const ShareAccessProtocol = {
    SMB: "SMB",
    NFS: "NFS",
} as const;

export type ShareAccessProtocol = (typeof ShareAccessProtocol)[keyof typeof ShareAccessProtocol];

export const ShareAccessType = {
    Change: "Change",
    Read: "Read",
    Custom: "Custom",
} as const;

export type ShareAccessType = (typeof ShareAccessType)[keyof typeof ShareAccessType];

export const ShareStatus = {
    Offline: "Offline",
    Unknown: "Unknown",
    OK: "OK",
    Updating: "Updating",
    NeedsAttention: "NeedsAttention",
} as const;

export type ShareStatus = (typeof ShareStatus)[keyof typeof ShareStatus];

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

export const StorageAccountStatus = {
    OK: "OK",
    Offline: "Offline",
    Unknown: "Unknown",
    Updating: "Updating",
    NeedsAttention: "NeedsAttention",
} as const;

export type StorageAccountStatus = (typeof StorageAccountStatus)[keyof typeof StorageAccountStatus];

export const TriggerEventType = {
    FileEvent: "FileEvent",
    PeriodicTimerEvent: "PeriodicTimerEvent",
} as const;

export type TriggerEventType = (typeof TriggerEventType)[keyof typeof TriggerEventType];

export const UserType = {
    Share: "Share",
    LocalManagement: "LocalManagement",
    ARM: "ARM",
} as const;

export type UserType = (typeof UserType)[keyof typeof UserType];