export const AdministratorType = {
    ActiveDirectory: "ActiveDirectory",
} as const;

/**
 * The type of administrator.
 */
export type AdministratorType = (typeof AdministratorType)[keyof typeof AdministratorType];

export const AutoExecuteStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
    Default: "Default",
} as const;

/**
 * Gets the auto-execute status (whether to let the system execute the recommendations) of this advisor. Possible values are 'Enabled' and 'Disabled'
 */
export type AutoExecuteStatus = (typeof AutoExecuteStatus)[keyof typeof AutoExecuteStatus];

export const CreateMode = {
    Copy: "Copy",
    Default: "Default",
    NonReadableSecondary: "NonReadableSecondary",
    OnlineSecondary: "OnlineSecondary",
    PointInTimeRestore: "PointInTimeRestore",
    Recovery: "Recovery",
    Restore: "Restore",
    RestoreLongTermRetentionBackup: "RestoreLongTermRetentionBackup",
} as const;

/**
 * Specifies the mode of database creation.
 *
 * Default: regular database creation.
 *
 * Copy: creates a database as a copy of an existing database. sourceDatabaseId must be specified as the resource ID of the source database.
 *
 * OnlineSecondary/NonReadableSecondary: creates a database as a (readable or nonreadable) secondary replica of an existing database. sourceDatabaseId must be specified as the resource ID of the existing primary database.
 *
 * PointInTimeRestore: Creates a database by restoring a point in time backup of an existing database. sourceDatabaseId must be specified as the resource ID of the existing database, and restorePointInTime must be specified.
 *
 * Recovery: Creates a database by restoring a geo-replicated backup. sourceDatabaseId must be specified as the recoverable database resource ID to restore.
 *
 * Restore: Creates a database by restoring a backup of a deleted database. sourceDatabaseId must be specified. If sourceDatabaseId is the database's original resource ID, then sourceDatabaseDeletionDate must be specified. Otherwise sourceDatabaseId must be the restorable dropped database resource ID and sourceDatabaseDeletionDate is ignored. restorePointInTime may also be specified to restore from an earlier point in time.
 *
 * RestoreLongTermRetentionBackup: Creates a database by restoring from a long term retention vault. recoveryServicesRecoveryPointResourceId must be specified as the recovery point resource ID.
 *
 * Copy, NonReadableSecondary, OnlineSecondary and RestoreLongTermRetentionBackup are not supported for DataWarehouse edition.
 */
export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const DatabaseEdition = {
    Web: "Web",
    Business: "Business",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
    PremiumRS: "PremiumRS",
    Free: "Free",
    Stretch: "Stretch",
    DataWarehouse: "DataWarehouse",
    System: "System",
    System2: "System2",
    GeneralPurpose: "GeneralPurpose",
    BusinessCritical: "BusinessCritical",
    Hyperscale: "Hyperscale",
} as const;

/**
 * The edition of the database. The DatabaseEditions enumeration contains all the valid editions. If createMode is NonReadableSecondary or OnlineSecondary, this value is ignored.
 * 
 * The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or one of the following commands:
 * 
 * ```azurecli
 * az sql db list-editions -l <location> -o table
 * ````
 * 
 * ```powershell
 * Get-AzSqlServerServiceObjective -Location <location>
 * ````
 */
export type DatabaseEdition = (typeof DatabaseEdition)[keyof typeof DatabaseEdition];

export const ElasticPoolEdition = {
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
    GeneralPurpose: "GeneralPurpose",
    BusinessCritical: "BusinessCritical",
} as const;

/**
 * The edition of the elastic pool.
 */
export type ElasticPoolEdition = (typeof ElasticPoolEdition)[keyof typeof ElasticPoolEdition];

export const ReadScale = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Conditional. If the database is a geo-secondary, readScale indicates whether read-only connections are allowed to this database or not. Not supported for DataWarehouse edition.
 */
export type ReadScale = (typeof ReadScale)[keyof typeof ReadScale];

export const SampleName = {
    AdventureWorksLT: "AdventureWorksLT",
} as const;

/**
 * Indicates the name of the sample schema to apply when creating this database. If createMode is not Default, this value is ignored. Not supported for DataWarehouse edition.
 */
export type SampleName = (typeof SampleName)[keyof typeof SampleName];

export const SecurityAlertPolicyEmailAccountAdmins = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Specifies that the alert is sent to the account administrators.
 */
export type SecurityAlertPolicyEmailAccountAdmins = (typeof SecurityAlertPolicyEmailAccountAdmins)[keyof typeof SecurityAlertPolicyEmailAccountAdmins];

export const SecurityAlertPolicyState = {
    New: "New",
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Specifies the state of the policy. If state is Enabled, storageEndpoint and storageAccountAccessKey are required.
 */
export type SecurityAlertPolicyState = (typeof SecurityAlertPolicyState)[keyof typeof SecurityAlertPolicyState];

export const SecurityAlertPolicyUseServerDefault = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Specifies whether to use the default server policy.
 */
export type SecurityAlertPolicyUseServerDefault = (typeof SecurityAlertPolicyUseServerDefault)[keyof typeof SecurityAlertPolicyUseServerDefault];

export const ServerVersion = {
    ServerVersion_2_0: "2.0",
    ServerVersion_12_0: "12.0",
} as const;

/**
 * The version of the server.
 */
export type ServerVersion = (typeof ServerVersion)[keyof typeof ServerVersion];

export const ServiceObjectiveName = {
    System: "System",
    System0: "System0",
    System1: "System1",
    System2: "System2",
    System3: "System3",
    System4: "System4",
    System2L: "System2L",
    System3L: "System3L",
    System4L: "System4L",
    Free: "Free",
    Basic: "Basic",
    S0: "S0",
    S1: "S1",
    S2: "S2",
    S3: "S3",
    S4: "S4",
    S6: "S6",
    S7: "S7",
    S9: "S9",
    S12: "S12",
    P1: "P1",
    P2: "P2",
    P3: "P3",
    P4: "P4",
    P6: "P6",
    P11: "P11",
    P15: "P15",
    PRS1: "PRS1",
    PRS2: "PRS2",
    PRS4: "PRS4",
    PRS6: "PRS6",
    DW100: "DW100",
    DW200: "DW200",
    DW300: "DW300",
    DW400: "DW400",
    DW500: "DW500",
    DW600: "DW600",
    DW1000: "DW1000",
    DW1200: "DW1200",
    DW1000c: "DW1000c",
    DW1500: "DW1500",
    DW1500c: "DW1500c",
    DW2000: "DW2000",
    DW2000c: "DW2000c",
    DW3000: "DW3000",
    DW2500c: "DW2500c",
    DW3000c: "DW3000c",
    DW6000: "DW6000",
    DW5000c: "DW5000c",
    DW6000c: "DW6000c",
    DW7500c: "DW7500c",
    DW10000c: "DW10000c",
    DW15000c: "DW15000c",
    DW30000c: "DW30000c",
    DS100: "DS100",
    DS200: "DS200",
    DS300: "DS300",
    DS400: "DS400",
    DS500: "DS500",
    DS600: "DS600",
    DS1000: "DS1000",
    DS1200: "DS1200",
    DS1500: "DS1500",
    DS2000: "DS2000",
    ElasticPool: "ElasticPool",
} as const;

/**
 * The name of the configured service level objective of the database. This is the service level objective that is in the process of being applied to the database. Once successfully updated, it will match the value of serviceLevelObjective property. 
 * 
 * The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or one of the following commands:
 * 
 * ```azurecli
 * az sql db list-editions -l <location> -o table
 * ````
 * 
 * ```powershell
 * Get-AzSqlServerServiceObjective -Location <location>
 * ````
 */
export type ServiceObjectiveName = (typeof ServiceObjectiveName)[keyof typeof ServiceObjectiveName];

export const TransparentDataEncryptionStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The status of the database transparent data encryption.
 */
export type TransparentDataEncryptionStatus = (typeof TransparentDataEncryptionStatus)[keyof typeof TransparentDataEncryptionStatus];
