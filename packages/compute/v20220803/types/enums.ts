export const Architecture = {
    X64: "x64",
    Arm64: "Arm64",
} as const;

/**
 * The architecture of the image. Applicable to OS disks only.
 */
export type Architecture = (typeof Architecture)[keyof typeof Architecture];

export const ConfidentialVMEncryptionType = {
    EncryptedVMGuestStateOnlyWithPmk: "EncryptedVMGuestStateOnlyWithPmk",
    EncryptedWithPmk: "EncryptedWithPmk",
    EncryptedWithCmk: "EncryptedWithCmk",
    NonPersistedTPM: "NonPersistedTPM",
} as const;

/**
 * confidential VM encryption types
 */
export type ConfidentialVMEncryptionType = (typeof ConfidentialVMEncryptionType)[keyof typeof ConfidentialVMEncryptionType];

export const EdgeZoneStorageAccountType = {
    Standard_LRS: "Standard_LRS",
    Standard_ZRS: "Standard_ZRS",
    StandardSSD_LRS: "StandardSSD_LRS",
    Premium_LRS: "Premium_LRS",
} as const;

/**
 * Specifies the storage account type to be used to store the image. This property is not updatable.
 */
export type EdgeZoneStorageAccountType = (typeof EdgeZoneStorageAccountType)[keyof typeof EdgeZoneStorageAccountType];

export const GalleryApplicationCustomActionParameterType = {
    String: "String",
    ConfigurationDataBlob: "ConfigurationDataBlob",
    LogOutputBlob: "LogOutputBlob",
} as const;

/**
 * Specifies the type of the custom action parameter. Possible values are: String, ConfigurationDataBlob or LogOutputBlob
 */
export type GalleryApplicationCustomActionParameterType = (typeof GalleryApplicationCustomActionParameterType)[keyof typeof GalleryApplicationCustomActionParameterType];

export const GalleryExtendedLocationType = {
    EdgeZone: "EdgeZone",
    Unknown: "Unknown",
} as const;

/**
 * It is type of the extended location.
 */
export type GalleryExtendedLocationType = (typeof GalleryExtendedLocationType)[keyof typeof GalleryExtendedLocationType];

export const GallerySharingPermissionTypes = {
    Private: "Private",
    Groups: "Groups",
    Community: "Community",
} as const;

/**
 * This property allows you to specify the permission of sharing gallery. Possible values are: **Private,** **Groups,** **Community.**
 */
export type GallerySharingPermissionTypes = (typeof GallerySharingPermissionTypes)[keyof typeof GallerySharingPermissionTypes];

export const HostCaching = {
    None: "None",
    ReadOnly: "ReadOnly",
    ReadWrite: "ReadWrite",
} as const;

/**
 * The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite'
 */
export type HostCaching = (typeof HostCaching)[keyof typeof HostCaching];

export const HyperVGeneration = {
    V1: "V1",
    V2: "V2",
} as const;

/**
 * The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
 */
export type HyperVGeneration = (typeof HyperVGeneration)[keyof typeof HyperVGeneration];

export const OperatingSystemStateTypes = {
    Generalized: "Generalized",
    Specialized: "Specialized",
} as const;

/**
 * This property allows the user to specify whether the virtual machines created under this image are 'Generalized' or 'Specialized'.
 */
export type OperatingSystemStateTypes = (typeof OperatingSystemStateTypes)[keyof typeof OperatingSystemStateTypes];

export const OperatingSystemTypes = {
    Windows: "Windows",
    Linux: "Linux",
} as const;

/**
 * This property allows you to specify the type of the OS that is included in the disk when creating a VM from a managed image. Possible values are: **Windows,** **Linux.**
 */
export type OperatingSystemTypes = (typeof OperatingSystemTypes)[keyof typeof OperatingSystemTypes];

export const ReplicationMode = {
    Full: "Full",
    Shallow: "Shallow",
} as const;

/**
 * Optional parameter which specifies the mode to be used for replication. This property is not updatable.
 */
export type ReplicationMode = (typeof ReplicationMode)[keyof typeof ReplicationMode];

export const StorageAccountType = {
    Standard_LRS: "Standard_LRS",
    Standard_ZRS: "Standard_ZRS",
    Premium_LRS: "Premium_LRS",
} as const;

/**
 * Specifies the storage account type to be used to store the image. This property is not updatable.
 */
export type StorageAccountType = (typeof StorageAccountType)[keyof typeof StorageAccountType];

export const UefiKeyType = {
    Sha256: "sha256",
    X509: "x509",
} as const;

/**
 * The type of key signature.
 */
export type UefiKeyType = (typeof UefiKeyType)[keyof typeof UefiKeyType];

export const UefiSignatureTemplateName = {
    NoSignatureTemplate: "NoSignatureTemplate",
    MicrosoftUefiCertificateAuthorityTemplate: "MicrosoftUefiCertificateAuthorityTemplate",
    MicrosoftWindowsTemplate: "MicrosoftWindowsTemplate",
} as const;

/**
 * The name of the signature template that contains default UEFI keys.
 */
export type UefiSignatureTemplateName = (typeof UefiSignatureTemplateName)[keyof typeof UefiSignatureTemplateName];
