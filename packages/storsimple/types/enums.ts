export const BackupType = {
    LocalSnapshot: "LocalSnapshot",
    CloudSnapshot: "CloudSnapshot",
} as const;

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

export type EncryptionAlgorithm = (typeof EncryptionAlgorithm)[keyof typeof EncryptionAlgorithm];

export const Kind = {
    Series8000: "Series8000",
} as const;

export type Kind = (typeof Kind)[keyof typeof Kind];

export const ManagerSkuType = {
    Standard: "Standard",
} as const;

export type ManagerSkuType = (typeof ManagerSkuType)[keyof typeof ManagerSkuType];

export const ManagerType = {
    GardaV1: "GardaV1",
    HelsinkiV1: "HelsinkiV1",
} as const;

export type ManagerType = (typeof ManagerType)[keyof typeof ManagerType];

export const MonitoringStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type MonitoringStatus = (typeof MonitoringStatus)[keyof typeof MonitoringStatus];

export const RecurrenceType = {
    Minutes: "Minutes",
    Hourly: "Hourly",
    Daily: "Daily",
    Weekly: "Weekly",
} as const;

export type RecurrenceType = (typeof RecurrenceType)[keyof typeof RecurrenceType];

export const ScheduleStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type ScheduleStatus = (typeof ScheduleStatus)[keyof typeof ScheduleStatus];

export const SslStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type SslStatus = (typeof SslStatus)[keyof typeof SslStatus];

export const VolumeStatus = {
    Online: "Online",
    Offline: "Offline",
} as const;

export type VolumeStatus = (typeof VolumeStatus)[keyof typeof VolumeStatus];

export const VolumeType = {
    Tiered: "Tiered",
    Archival: "Archival",
    LocallyPinned: "LocallyPinned",
} as const;

export type VolumeType = (typeof VolumeType)[keyof typeof VolumeType];
