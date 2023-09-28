export const BackupType = {
    LocalSnapshot: "LocalSnapshot",
    CloudSnapshot: "CloudSnapshot",
} as const;

/**
 * The type of backup which needs to be taken.
 */
export type BackupType = (typeof BackupType)[keyof typeof BackupType];

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

export const Kind = {
    Series8000: "Series8000",
} as const;

/**
 * The Kind of the object. Currently only Series8000 is supported
 */
export type Kind = (typeof Kind)[keyof typeof Kind];

export const ManagerSkuType = {
    Standard: "Standard",
} as const;

/**
 * Refers to the sku name which should be "Standard"
 */
export type ManagerSkuType = (typeof ManagerSkuType)[keyof typeof ManagerSkuType];

export const ManagerType = {
    GardaV1: "GardaV1",
    HelsinkiV1: "HelsinkiV1",
} as const;

/**
 * The type of StorSimple Manager.
 */
export type ManagerType = (typeof ManagerType)[keyof typeof ManagerType];

export const MonitoringStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The monitoring status of the volume.
 */
export type MonitoringStatus = (typeof MonitoringStatus)[keyof typeof MonitoringStatus];

export const RecurrenceType = {
    Minutes: "Minutes",
    Hourly: "Hourly",
    Daily: "Daily",
    Weekly: "Weekly",
} as const;

/**
 * The recurrence type.
 */
export type RecurrenceType = (typeof RecurrenceType)[keyof typeof RecurrenceType];

export const ScheduleStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The schedule status.
 */
export type ScheduleStatus = (typeof ScheduleStatus)[keyof typeof ScheduleStatus];

export const SslStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Signifies whether SSL needs to be enabled or not.
 */
export type SslStatus = (typeof SslStatus)[keyof typeof SslStatus];

export const VolumeStatus = {
    Online: "Online",
    Offline: "Offline",
} as const;

/**
 * The volume status.
 */
export type VolumeStatus = (typeof VolumeStatus)[keyof typeof VolumeStatus];

export const VolumeType = {
    Tiered: "Tiered",
    Archival: "Archival",
    LocallyPinned: "LocallyPinned",
} as const;

/**
 * The type of the volume.
 */
export type VolumeType = (typeof VolumeType)[keyof typeof VolumeType];
