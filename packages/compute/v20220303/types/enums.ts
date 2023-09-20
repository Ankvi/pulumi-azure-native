export const Architecture = {
    X64: "x64",
    Arm64: "Arm64",
} as const;

export type Architecture = (typeof Architecture)[keyof typeof Architecture];

export const ConfidentialVMEncryptionType = {
    EncryptedVMGuestStateOnlyWithPmk: "EncryptedVMGuestStateOnlyWithPmk",
    EncryptedWithPmk: "EncryptedWithPmk",
    EncryptedWithCmk: "EncryptedWithCmk",
} as const;

export type ConfidentialVMEncryptionType = (typeof ConfidentialVMEncryptionType)[keyof typeof ConfidentialVMEncryptionType];

export const EdgeZoneStorageAccountType = {
    Standard_LRS: "Standard_LRS",
    Standard_ZRS: "Standard_ZRS",
    StandardSSD_LRS: "StandardSSD_LRS",
    Premium_LRS: "Premium_LRS",
} as const;

export type EdgeZoneStorageAccountType = (typeof EdgeZoneStorageAccountType)[keyof typeof EdgeZoneStorageAccountType];

export const GalleryApplicationCustomActionParameterType = {
    String: "String",
    ConfigurationDataBlob: "ConfigurationDataBlob",
    LogOutputBlob: "LogOutputBlob",
} as const;

export type GalleryApplicationCustomActionParameterType = (typeof GalleryApplicationCustomActionParameterType)[keyof typeof GalleryApplicationCustomActionParameterType];

export const GalleryExtendedLocationType = {
    EdgeZone: "EdgeZone",
    Unknown: "Unknown",
} as const;

export type GalleryExtendedLocationType = (typeof GalleryExtendedLocationType)[keyof typeof GalleryExtendedLocationType];

export const GallerySharingPermissionTypes = {
    Private: "Private",
    Groups: "Groups",
    Community: "Community",
} as const;

export type GallerySharingPermissionTypes = (typeof GallerySharingPermissionTypes)[keyof typeof GallerySharingPermissionTypes];

export const HostCaching = {
    None: "None",
    ReadOnly: "ReadOnly",
    ReadWrite: "ReadWrite",
} as const;

export type HostCaching = (typeof HostCaching)[keyof typeof HostCaching];

export const HyperVGeneration = {
    V1: "V1",
    V2: "V2",
} as const;

export type HyperVGeneration = (typeof HyperVGeneration)[keyof typeof HyperVGeneration];

export const OperatingSystemStateTypes = {
    Generalized: "Generalized",
    Specialized: "Specialized",
} as const;

export type OperatingSystemStateTypes = (typeof OperatingSystemStateTypes)[keyof typeof OperatingSystemStateTypes];

export const OperatingSystemTypes = {
    Windows: "Windows",
    Linux: "Linux",
} as const;

export type OperatingSystemTypes = (typeof OperatingSystemTypes)[keyof typeof OperatingSystemTypes];

export const ReplicationMode = {
    Full: "Full",
    Shallow: "Shallow",
} as const;

export type ReplicationMode = (typeof ReplicationMode)[keyof typeof ReplicationMode];

export const StorageAccountType = {
    Standard_LRS: "Standard_LRS",
    Standard_ZRS: "Standard_ZRS",
    Premium_LRS: "Premium_LRS",
} as const;

export type StorageAccountType = (typeof StorageAccountType)[keyof typeof StorageAccountType];