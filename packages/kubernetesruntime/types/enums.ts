export const AccessMode = {
    /**
     * Read Write Once (RWO) access mode
     */
    ReadWriteOnce: "ReadWriteOnce",
    /**
     * Read Write Many (RWX) access mode
     */
    ReadWriteMany: "ReadWriteMany",
} as const;

/**
 * Storage Class Access Mode
 */
export type AccessMode = (typeof AccessMode)[keyof typeof AccessMode];

export const AdvertiseMode = {
    /**
     * ARP advertise mode
     */
    ARP: "ARP",
    /**
     * BGP advertise mode
     */
    BGP: "BGP",
    /**
     * both ARP and BGP advertise mode
     */
    Both: "Both",
} as const;

/**
 * Advertise Mode
 */
export type AdvertiseMode = (typeof AdvertiseMode)[keyof typeof AdvertiseMode];

export const DataResilienceTier = {
    /**
     * Not data resilient
     */
    NotDataResilient: "NotDataResilient",
    /**
     * Data resilient
     */
    DataResilient: "DataResilient",
} as const;

/**
 * Allow single data node failure
 */
export type DataResilienceTier = (typeof DataResilienceTier)[keyof typeof DataResilienceTier];

export const FailoverTier = {
    /**
     * Not available Failover Tier
     */
    NotAvailable: "NotAvailable",
    /**
     * Slow Failover Tier
     */
    Slow: "Slow",
    /**
     * Fast Failover Tier
     */
    Fast: "Fast",
    /**
     * Super Failover Tier
     */
    Super: "Super",
} as const;

/**
 * Failover speed: NA, Slow, Fast
 */
export type FailoverTier = (typeof FailoverTier)[keyof typeof FailoverTier];

export const NfsDirectoryActionOnVolumeDeletion = {
    /**
     * When the volume is deleted, delete the directory
     */
    Delete: "Delete",
    /**
     * When the volume is deleted, retain the directory
     */
    Retain: "Retain",
} as const;

/**
 * The action to take when a NFS volume is deleted. Default is Delete
 */
export type NfsDirectoryActionOnVolumeDeletion = (typeof NfsDirectoryActionOnVolumeDeletion)[keyof typeof NfsDirectoryActionOnVolumeDeletion];

export const PerformanceTier = {
    /**
     * Undefined Performance Tier
     */
    Undefined: "Undefined",
    /**
     * Basic Performance Tier
     */
    Basic: "Basic",
    /**
     * Standard Performance Tier
     */
    Standard: "Standard",
    /**
     * Premium Performance Tier
     */
    Premium: "Premium",
    /**
     * Ultra Performance Tier
     */
    Ultra: "Ultra",
} as const;

/**
 * Performance tier
 */
export type PerformanceTier = (typeof PerformanceTier)[keyof typeof PerformanceTier];

export const SCType = {
    /**
     * Native storage class
     */
    Native: "Native",
    /**
     * RWX storage class
     */
    RWX: "RWX",
    /**
     * Blob storage class
     */
    Blob: "Blob",
    /**
     * NFS storage class
     */
    NFS: "NFS",
    /**
     * SMB storage class
     */
    SMB: "SMB",
} as const;

/**
 * Type of the storage class.
 */
export type SCType = (typeof SCType)[keyof typeof SCType];

export const VolumeBindingMode = {
    /**
     * Immediate binding mode
     */
    Immediate: "Immediate",
    /**
     * Wait for first consumer binding mode
     */
    WaitForFirstConsumer: "WaitForFirstConsumer",
} as const;

/**
 * Binding mode of volumes: Immediate, WaitForFirstConsumer
 */
export type VolumeBindingMode = (typeof VolumeBindingMode)[keyof typeof VolumeBindingMode];

export const VolumeExpansion = {
    /**
     * Allow volume expansion
     */
    Allow: "Allow",
    /**
     * Disallow volume expansion
     */
    Disallow: "Disallow",
} as const;

/**
 * Volume can be expanded or not
 */
export type VolumeExpansion = (typeof VolumeExpansion)[keyof typeof VolumeExpansion];
