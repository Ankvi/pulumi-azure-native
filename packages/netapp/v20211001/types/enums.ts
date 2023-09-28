export const ApplicationType = {
    SAP_HANA: "SAP-HANA",
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

export const EndpointType = {
    Src: "src",
    Dst: "dst",
} as const;

/**
 * Indicates whether the local volume is the source or destination for the Volume Replication
 */
export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

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

/**
 * Basic network, or Standard features available to the volume.
 */
export type NetworkFeatures = (typeof NetworkFeatures)[keyof typeof NetworkFeatures];

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
