export const Architecture = {
    X64: "x64",
    Arm64: "Arm64",
} as const;

export type Architecture = (typeof Architecture)[keyof typeof Architecture];

export const CopyCompletionErrorReason = {
    /**
     * Indicates that the source snapshot was deleted while the background copy of the resource created via CopyStart operation was in progress.
     */
    CopySourceNotFound: "CopySourceNotFound",
} as const;

export type CopyCompletionErrorReason = (typeof CopyCompletionErrorReason)[keyof typeof CopyCompletionErrorReason];

export const DataAccessAuthMode = {
    /**
     * When export/upload URL is used, the system checks if the user has an identity in Azure Active Directory and has necessary permissions to export/upload the data. Please refer to aka.ms/DisksAzureADAuth.
     */
    AzureActiveDirectory: "AzureActiveDirectory",
    /**
     * No additional authentication would be performed when accessing export/upload URL.
     */
    None: "None",
} as const;

export type DataAccessAuthMode = (typeof DataAccessAuthMode)[keyof typeof DataAccessAuthMode];

export const DiskCreateOption = {
    /**
     * Create an empty data disk of a size given by diskSizeGB.
     */
    Empty: "Empty",
    /**
     * Disk will be attached to a VM.
     */
    Attach: "Attach",
    /**
     * Create a new disk from a platform image specified by the given imageReference or galleryImageReference.
     */
    FromImage: "FromImage",
    /**
     * Create a disk by importing from a blob specified by a sourceUri in a storage account specified by storageAccountId.
     */
    Import: "Import",
    /**
     * Create a new disk or snapshot by copying from a disk or snapshot specified by the given sourceResourceId.
     */
    Copy: "Copy",
    /**
     * Create a new disk by copying from a backup recovery point.
     */
    Restore: "Restore",
    /**
     * Create a new disk by obtaining a write token and using it to directly upload the contents of the disk.
     */
    Upload: "Upload",
    /**
     * Create a new disk by using a deep copy process, where the resource creation is considered complete only after all data has been copied from the source.
     */
    CopyStart: "CopyStart",
    /**
     * Similar to Import create option. Create a new Trusted Launch VM or Confidential VM supported disk by importing additional blob for VM guest state specified by securityDataUri in storage account specified by storageAccountId
     */
    ImportSecure: "ImportSecure",
    /**
     * Similar to Upload create option. Create a new Trusted Launch VM or Confidential VM supported disk and upload using write token in both disk and VM guest state
     */
    UploadPreparedSecure: "UploadPreparedSecure",
    /**
     * Create a new disk by exporting from elastic san volume snapshot
     */
    CopyFromSanSnapshot: "CopyFromSanSnapshot",
} as const;

export type DiskCreateOption = (typeof DiskCreateOption)[keyof typeof DiskCreateOption];

export const DiskEncryptionSetIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

export type DiskEncryptionSetIdentityType = (typeof DiskEncryptionSetIdentityType)[keyof typeof DiskEncryptionSetIdentityType];

export const DiskEncryptionSetType = {
    /**
     * Resource using diskEncryptionSet would be encrypted at rest with Customer managed key that can be changed and revoked by a customer.
     */
    EncryptionAtRestWithCustomerKey: "EncryptionAtRestWithCustomerKey",
    /**
     * Resource using diskEncryptionSet would be encrypted at rest with two layers of encryption. One of the keys is Customer managed and the other key is Platform managed.
     */
    EncryptionAtRestWithPlatformAndCustomerKeys: "EncryptionAtRestWithPlatformAndCustomerKeys",
    /**
     * Confidential VM supported disk and VM guest state would be encrypted with customer managed key.
     */
    ConfidentialVmEncryptedWithCustomerKey: "ConfidentialVmEncryptedWithCustomerKey",
} as const;

export type DiskEncryptionSetType = (typeof DiskEncryptionSetType)[keyof typeof DiskEncryptionSetType];

export const DiskSecurityTypes = {
    /**
     * Trusted Launch provides security features such as secure boot and virtual Trusted Platform Module (vTPM)
     */
    TrustedLaunch: "TrustedLaunch",
    /**
     * Indicates Confidential VM disk with only VM guest state encrypted
     */
    ConfidentialVM_VMGuestStateOnlyEncryptedWithPlatformKey: "ConfidentialVM_VMGuestStateOnlyEncryptedWithPlatformKey",
    /**
     * Indicates Confidential VM disk with both OS disk and VM guest state encrypted with a platform managed key
     */
    ConfidentialVM_DiskEncryptedWithPlatformKey: "ConfidentialVM_DiskEncryptedWithPlatformKey",
    /**
     * Indicates Confidential VM disk with both OS disk and VM guest state encrypted with a customer managed key
     */
    ConfidentialVM_DiskEncryptedWithCustomerKey: "ConfidentialVM_DiskEncryptedWithCustomerKey",
} as const;

export type DiskSecurityTypes = (typeof DiskSecurityTypes)[keyof typeof DiskSecurityTypes];

export const DiskStorageAccountTypes = {
    /**
     * Standard HDD locally redundant storage. Best for backup, non-critical, and infrequent access.
     */
    Standard_LRS: "Standard_LRS",
    /**
     * Premium SSD locally redundant storage. Best for production and performance sensitive workloads.
     */
    Premium_LRS: "Premium_LRS",
    /**
     * Standard SSD locally redundant storage. Best for web servers, lightly used enterprise applications and dev/test.
     */
    StandardSSD_LRS: "StandardSSD_LRS",
    /**
     * Ultra SSD locally redundant storage. Best for IO-intensive workloads such as SAP HANA, top tier databases (for example, SQL, Oracle), and other transaction-heavy workloads.
     */
    UltraSSD_LRS: "UltraSSD_LRS",
    /**
     * Premium SSD zone redundant storage. Best for the production workloads that need storage resiliency against zone failures.
     */
    Premium_ZRS: "Premium_ZRS",
    /**
     * Standard SSD zone redundant storage. Best for web servers, lightly used enterprise applications and dev/test that need storage resiliency against zone failures.
     */
    StandardSSD_ZRS: "StandardSSD_ZRS",
    /**
     * Premium SSD v2 locally redundant storage. Best for production and performance-sensitive workloads that consistently require low latency and high IOPS and throughput.
     */
    PremiumV2_LRS: "PremiumV2_LRS",
} as const;

export type DiskStorageAccountTypes = (typeof DiskStorageAccountTypes)[keyof typeof DiskStorageAccountTypes];

export const EncryptionType = {
    /**
     * Disk is encrypted at rest with Platform managed key. It is the default encryption type. This is not a valid encryption type for disk encryption sets.
     */
    EncryptionAtRestWithPlatformKey: "EncryptionAtRestWithPlatformKey",
    /**
     * Disk is encrypted at rest with Customer managed key that can be changed and revoked by a customer.
     */
    EncryptionAtRestWithCustomerKey: "EncryptionAtRestWithCustomerKey",
    /**
     * Disk is encrypted at rest with 2 layers of encryption. One of the keys is Customer managed and the other key is Platform managed.
     */
    EncryptionAtRestWithPlatformAndCustomerKeys: "EncryptionAtRestWithPlatformAndCustomerKeys",
} as const;

export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

export const ExtendedLocationTypes = {
    EdgeZone: "EdgeZone",
} as const;

export type ExtendedLocationTypes = (typeof ExtendedLocationTypes)[keyof typeof ExtendedLocationTypes];

export const HyperVGeneration = {
    V1: "V1",
    V2: "V2",
} as const;

export type HyperVGeneration = (typeof HyperVGeneration)[keyof typeof HyperVGeneration];

export const NetworkAccessPolicy = {
    /**
     * The disk can be exported or uploaded to from any network.
     */
    AllowAll: "AllowAll",
    /**
     * The disk can be exported or uploaded to using a DiskAccess resource's private endpoints.
     */
    AllowPrivate: "AllowPrivate",
    /**
     * The disk cannot be exported.
     */
    DenyAll: "DenyAll",
} as const;

export type NetworkAccessPolicy = (typeof NetworkAccessPolicy)[keyof typeof NetworkAccessPolicy];

export const OperatingSystemTypes = {
    Windows: "Windows",
    Linux: "Linux",
} as const;

export type OperatingSystemTypes = (typeof OperatingSystemTypes)[keyof typeof OperatingSystemTypes];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const PublicNetworkAccess = {
    /**
     * You can generate a SAS URI to access the underlying data of the disk publicly on the internet when NetworkAccessPolicy is set to AllowAll. You can access the data via the SAS URI only from your trusted Azure VNET when NetworkAccessPolicy is set to AllowPrivate.
     */
    Enabled: "Enabled",
    /**
     * You cannot access the underlying data of the disk publicly on the internet even when NetworkAccessPolicy is set to AllowAll. You can access the data via the SAS URI only from your trusted Azure VNET when NetworkAccessPolicy is set to AllowPrivate.
     */
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const SnapshotStorageAccountTypes = {
    /**
     * Standard HDD locally redundant storage
     */
    Standard_LRS: "Standard_LRS",
    /**
     * Premium SSD locally redundant storage
     */
    Premium_LRS: "Premium_LRS",
    /**
     * Standard zone redundant storage
     */
    Standard_ZRS: "Standard_ZRS",
} as const;

export type SnapshotStorageAccountTypes = (typeof SnapshotStorageAccountTypes)[keyof typeof SnapshotStorageAccountTypes];