export const ApplicationType = {
    SAP_HANA: "SAP-HANA",
} as const;

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

export type AvsDataStore = (typeof AvsDataStore)[keyof typeof AvsDataStore];

export const ChownMode = {
    Restricted: "Restricted",
    Unrestricted: "Unrestricted",
} as const;

export type ChownMode = (typeof ChownMode)[keyof typeof ChownMode];

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

export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

export const EndpointType = {
    Src: "src",
    Dst: "dst",
} as const;

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

export type KeySource = (typeof KeySource)[keyof typeof KeySource];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const NetworkFeatures = {
    /**
     * Basic network feature.
     */
    Basic: "Basic",
    /**
     * Standard network feature.
     */
    Standard: "Standard",
} as const;

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

export type QosType = (typeof QosType)[keyof typeof QosType];

export const ReplicationSchedule = {
    ReplicationSchedule_10minutely: "_10minutely",
    Hourly: "hourly",
    Daily: "daily",
} as const;

export type ReplicationSchedule = (typeof ReplicationSchedule)[keyof typeof ReplicationSchedule];

export const SecurityStyle = {
    Ntfs: "ntfs",
    Unix: "unix",
} as const;

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

export type Type = (typeof Type)[keyof typeof Type];