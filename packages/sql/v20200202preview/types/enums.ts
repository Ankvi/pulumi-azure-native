export const CatalogCollationType = {
    DATABASE_DEFAULT: "DATABASE_DEFAULT",
    SQL_Latin1_General_CP1_CI_AS: "SQL_Latin1_General_CP1_CI_AS",
} as const;

/**
 * Collation of the metadata catalog.
 */
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

/**
 * Specifies the mode of database creation.
 * 
 * Default: regular database creation.
 * 
 * Copy: creates a database as a copy of an existing database. sourceDatabaseId must be specified as the resource ID of the source database.
 * 
 * Secondary: creates a database as a secondary replica of an existing database. sourceDatabaseId must be specified as the resource ID of the existing primary database.
 * 
 * PointInTimeRestore: Creates a database by restoring a point in time backup of an existing database. sourceDatabaseId must be specified as the resource ID of the existing database, and restorePointInTime must be specified.
 * 
 * Recovery: Creates a database by restoring a geo-replicated backup. sourceDatabaseId must be specified as the recoverable database resource ID to restore.
 * 
 * Restore: Creates a database by restoring a backup of a deleted database. sourceDatabaseId must be specified. If sourceDatabaseId is the database's original resource ID, then sourceDatabaseDeletionDate must be specified. Otherwise sourceDatabaseId must be the restorable dropped database resource ID and sourceDatabaseDeletionDate is ignored. restorePointInTime may also be specified to restore from an earlier point in time.
 * 
 * RestoreLongTermRetentionBackup: Creates a database by restoring from a long term retention vault. recoveryServicesRecoveryPointResourceId must be specified as the recovery point resource ID.
 * 
 * Copy, Secondary, and RestoreLongTermRetentionBackup are not supported for DataWarehouse edition.
 */
export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const DatabaseLicenseType = {
    LicenseIncluded: "LicenseIncluded",
    BasePrice: "BasePrice",
} as const;

/**
 * The license type to apply for this database. `LicenseIncluded` if you need a license, or `BasePrice` if you have a license and are eligible for the Azure Hybrid Benefit.
 */
export type DatabaseLicenseType = (typeof DatabaseLicenseType)[keyof typeof DatabaseLicenseType];

export const DatabaseReadScale = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The state of read-only routing. If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica in the same region.
 */
export type DatabaseReadScale = (typeof DatabaseReadScale)[keyof typeof DatabaseReadScale];

export const SampleName = {
    AdventureWorksLT: "AdventureWorksLT",
    WideWorldImportersStd: "WideWorldImportersStd",
    WideWorldImportersFull: "WideWorldImportersFull",
} as const;

/**
 * The name of the sample schema to apply when creating this database.
 */
export type SampleName = (typeof SampleName)[keyof typeof SampleName];

export const StorageAccountType = {
    GRS: "GRS",
    LRS: "LRS",
    ZRS: "ZRS",
} as const;

/**
 * The storage account type used to store backups for this database.
 */
export type StorageAccountType = (typeof StorageAccountType)[keyof typeof StorageAccountType];
