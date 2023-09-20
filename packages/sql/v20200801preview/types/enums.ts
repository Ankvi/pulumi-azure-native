export const CatalogCollationType = {
    DATABASE_DEFAULT: "DATABASE_DEFAULT",
    SQL_Latin1_General_CP1_CI_AS: "SQL_Latin1_General_CP1_CI_AS",
} as const;

export type CatalogCollationType = (typeof CatalogCollationType)[keyof typeof CatalogCollationType];

export const CreateMode = {
    Default: "Default",
    Copy: "Copy",
    Secondary: "Secondary",
    PointInTimeRestore: "PointInTimeRestore",
    Restore: "Restore",
    Recovery: "Recovery",
    RestoreExternalBackup: "RestoreExternalBackup",
    RestoreExternalBackupSecondary: "RestoreExternalBackupSecondary",
    RestoreLongTermRetentionBackup: "RestoreLongTermRetentionBackup",
    OnlineSecondary: "OnlineSecondary",
} as const;

export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const DatabaseLicenseType = {
    LicenseIncluded: "LicenseIncluded",
    BasePrice: "BasePrice",
} as const;

export type DatabaseLicenseType = (typeof DatabaseLicenseType)[keyof typeof DatabaseLicenseType];

export const DatabaseReadScale = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type DatabaseReadScale = (typeof DatabaseReadScale)[keyof typeof DatabaseReadScale];

export const SampleName = {
    AdventureWorksLT: "AdventureWorksLT",
    WideWorldImportersStd: "WideWorldImportersStd",
    WideWorldImportersFull: "WideWorldImportersFull",
} as const;

export type SampleName = (typeof SampleName)[keyof typeof SampleName];

export const SecondaryType = {
    Geo: "Geo",
    Named: "Named",
} as const;

export type SecondaryType = (typeof SecondaryType)[keyof typeof SecondaryType];

export const StorageAccountType = {
    GRS: "GRS",
    LRS: "LRS",
    ZRS: "ZRS",
} as const;

export type StorageAccountType = (typeof StorageAccountType)[keyof typeof StorageAccountType];