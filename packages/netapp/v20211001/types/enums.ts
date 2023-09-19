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

export const EndpointType = {
    Src: "src",
    Dst: "dst",
} as const;

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

export type NetworkFeatures = (typeof NetworkFeatures)[keyof typeof NetworkFeatures];

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
