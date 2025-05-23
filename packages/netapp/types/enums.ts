export const ApplicationType = {
    SAP_HANA: "SAP-HANA",
    ORACLE: "ORACLE",
} as const;

/**
 * Application Type
 */
export type ApplicationType = (typeof ApplicationType)[keyof typeof ApplicationType];

export const AvsDataStore = {
    /**
     * avsDataStore is enabled
     */
    Enabled: "Enabled",
    /**
     * avsDataStore is disabled
     */
    Disabled: "Disabled",
} as const;

/**
 * Specifies whether the volume is enabled for Azure VMware Solution (AVS) datastore purpose
 */
export type AvsDataStore = (typeof AvsDataStore)[keyof typeof AvsDataStore];

export const ChownMode = {
    Restricted: "Restricted",
    Unrestricted: "Unrestricted",
} as const;

/**
 * This parameter specifies who is authorized to change the ownership of a file. restricted - Only root user can change the ownership of the file. unrestricted - Non-root users can change ownership of files that they own.
 */
export type ChownMode = (typeof ChownMode)[keyof typeof ChownMode];

export const CoolAccessRetrievalPolicy = {
    Default: "Default",
    OnRead: "OnRead",
    Never: "Never",
} as const;

/**
 * coolAccessRetrievalPolicy determines the data retrieval behavior from the cool tier to standard storage based on the read pattern for cool access enabled volumes. The possible values for this field are: 
 *  Default - Data will be pulled from cool tier to standard storage on random reads. This policy is the default.
 *  OnRead - All client-driven data read is pulled from cool tier to standard storage on both sequential and random reads.
 *  Never - No client-driven data is pulled from cool tier to standard storage.
 */
export type CoolAccessRetrievalPolicy = (typeof CoolAccessRetrievalPolicy)[keyof typeof CoolAccessRetrievalPolicy];

export const CoolAccessTieringPolicy = {
    Auto: "Auto",
    SnapshotOnly: "SnapshotOnly",
} as const;

/**
 * coolAccessTieringPolicy determines which cold data blocks are moved to cool tier. The possible values for this field are: Auto - Moves cold user data blocks in both the Snapshot copies and the active file system to the cool tier tier. This policy is the default. SnapshotOnly - Moves user data blocks of the Volume Snapshot copies that are not associated with the active file system to the cool tier.
 */
export type CoolAccessTieringPolicy = (typeof CoolAccessTieringPolicy)[keyof typeof CoolAccessTieringPolicy];

export const EnableSubvolumes = {
    /**
     * subvolumes are enabled
     */
    Enabled: "Enabled",
    /**
     * subvolumes are not enabled
     */
    Disabled: "Disabled",
} as const;

/**
 * Flag indicating whether subvolume operations are enabled on the volume
 */
export type EnableSubvolumes = (typeof EnableSubvolumes)[keyof typeof EnableSubvolumes];

export const EncryptionKeySource = {
    /**
     * Microsoft-managed key encryption
     */
    Microsoft_NetApp: "Microsoft.NetApp",
    /**
     * Customer-managed key encryption
     */
    Microsoft_KeyVault: "Microsoft.KeyVault",
} as const;

/**
 * Source of key used to encrypt data in volume. Applicable if NetApp account has encryption.keySource = 'Microsoft.KeyVault'. Possible values (case-insensitive) are: 'Microsoft.NetApp, Microsoft.KeyVault'
 */
export type EncryptionKeySource = (typeof EncryptionKeySource)[keyof typeof EncryptionKeySource];

export const EncryptionType = {
    /**
     * EncryptionType Single, volumes will use single encryption at rest
     */
    Single: "Single",
    /**
     * EncryptionType Double, volumes will use double encryption at rest
     */
    Double: "Double",
} as const;

/**
 * Encryption type of the capacity pool, set encryption type for data at rest for this pool and all volumes in it. This value can only be set when creating new pool.
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

export const EndpointType = {
    Src: "src",
    Dst: "dst",
} as const;

/**
 * Indicates whether the local volume is the source or destination for the Volume Replication
 */
export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

export const KeySource = {
    /**
     * Microsoft-managed key encryption
     */
    Microsoft_NetApp: "Microsoft.NetApp",
    /**
     * Customer-managed key encryption
     */
    Microsoft_KeyVault: "Microsoft.KeyVault",
} as const;

/**
 * The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.NetApp, Microsoft.KeyVault
 */
export type KeySource = (typeof KeySource)[keyof typeof KeySource];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const NetworkFeatures = {
    /**
     * Basic network features.
     */
    Basic: "Basic",
    /**
     * Standard network features.
     */
    Standard: "Standard",
    /**
     * Updating from Basic to Standard network features.
     */
    Basic_Standard: "Basic_Standard",
    /**
     * Updating from Standard to Basic network features.
     */
    Standard_Basic: "Standard_Basic",
} as const;

/**
 * The original value of the network features type available to the volume at the time it was created.
 */
export type NetworkFeatures = (typeof NetworkFeatures)[keyof typeof NetworkFeatures];

export const QosType = {
    /**
     * qos type Auto
     */
    Auto: "Auto",
    /**
     * qos type Manual
     */
    Manual: "Manual",
} as const;

/**
 * The qos type of the pool
 */
export type QosType = (typeof QosType)[keyof typeof QosType];

export const ReplicationSchedule = {
    ReplicationSchedule_10minutely: "_10minutely",
    Hourly: "hourly",
    Daily: "daily",
} as const;

/**
 * Schedule
 */
export type ReplicationSchedule = (typeof ReplicationSchedule)[keyof typeof ReplicationSchedule];

export const SecurityStyle = {
    Ntfs: "ntfs",
    Unix: "unix",
} as const;

/**
 * The security style of volume, default unix, defaults to ntfs for dual protocol or CIFS protocol
 */
export type SecurityStyle = (typeof SecurityStyle)[keyof typeof SecurityStyle];

export const ServiceLevel = {
    /**
     * Standard service level
     */
    Standard: "Standard",
    /**
     * Premium service level
     */
    Premium: "Premium",
    /**
     * Ultra service level
     */
    Ultra: "Ultra",
    /**
     * Zone redundant storage service level
     */
    StandardZRS: "StandardZRS",
} as const;

/**
 * The service level of the file system
 */
export type ServiceLevel = (typeof ServiceLevel)[keyof typeof ServiceLevel];

export const SmbAccessBasedEnumeration = {
    /**
     * smbAccessBasedEnumeration share setting is disabled
     */
    Disabled: "Disabled",
    /**
     * smbAccessBasedEnumeration share setting is enabled
     */
    Enabled: "Enabled",
} as const;

/**
 * Enables access-based enumeration share property for SMB Shares. Only applicable for SMB/DualProtocol volume
 */
export type SmbAccessBasedEnumeration = (typeof SmbAccessBasedEnumeration)[keyof typeof SmbAccessBasedEnumeration];

export const SmbNonBrowsable = {
    /**
     * smbNonBrowsable share setting is disabled
     */
    Disabled: "Disabled",
    /**
     * smbNonBrowsable share setting is enabled
     */
    Enabled: "Enabled",
} as const;

/**
 * Enables non-browsable property for SMB Shares. Only applicable for SMB/DualProtocol volume
 */
export type SmbNonBrowsable = (typeof SmbNonBrowsable)[keyof typeof SmbNonBrowsable];

export const Type = {
    /**
     * Default user quota
     */
    DefaultUserQuota: "DefaultUserQuota",
    /**
     * Default group quota
     */
    DefaultGroupQuota: "DefaultGroupQuota",
    /**
     * Individual user quota
     */
    IndividualUserQuota: "IndividualUserQuota",
    /**
     * Individual group quota
     */
    IndividualGroupQuota: "IndividualGroupQuota",
} as const;

/**
 * Type of quota
 */
export type Type = (typeof Type)[keyof typeof Type];
