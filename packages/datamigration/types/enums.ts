export const AuthenticationType = {
    None: "None",
    WindowsAuthentication: "WindowsAuthentication",
    SqlAuthentication: "SqlAuthentication",
    ActiveDirectoryIntegrated: "ActiveDirectoryIntegrated",
    ActiveDirectoryPassword: "ActiveDirectoryPassword",
} as const;

/**
 * Authentication type to use for connection
 */
export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

export const BackupMode = {
    CreateBackup: "CreateBackup",
    ExistingBackup: "ExistingBackup",
} as const;

/**
 * Backup Mode to specify whether to use existing backup or create new backup.
 */
export type BackupMode = (typeof BackupMode)[keyof typeof BackupMode];

export const MongoDbReplication = {
    Disabled: "Disabled",
    OneTime: "OneTime",
    Continuous: "Continuous",
} as const;

/**
 * Describes how changes will be replicated from the source to the target. The default is OneTime.
 */
export type MongoDbReplication = (typeof MongoDbReplication)[keyof typeof MongoDbReplication];

export const MongoDbShardKeyOrder = {
    Forward: "Forward",
    Reverse: "Reverse",
    Hashed: "Hashed",
} as const;

/**
 * The field ordering
 */
export type MongoDbShardKeyOrder = (typeof MongoDbShardKeyOrder)[keyof typeof MongoDbShardKeyOrder];

export const MySqlTargetPlatformType = {
    SqlServer: "SqlServer",
    AzureDbForMySQL: "AzureDbForMySQL",
} as const;

/**
 * Target Platform for the migration
 */
export type MySqlTargetPlatformType = (typeof MySqlTargetPlatformType)[keyof typeof MySqlTargetPlatformType];

export const ProjectSourcePlatform = {
    SQL: "SQL",
    MySQL: "MySQL",
    PostgreSql: "PostgreSql",
    MongoDb: "MongoDb",
    Unknown: "Unknown",
} as const;

/**
 * Source platform for the project
 */
export type ProjectSourcePlatform = (typeof ProjectSourcePlatform)[keyof typeof ProjectSourcePlatform];

export const ProjectTargetPlatform = {
    SQLDB: "SQLDB",
    SQLMI: "SQLMI",
    AzureDbForMySql: "AzureDbForMySql",
    AzureDbForPostgreSql: "AzureDbForPostgreSql",
    MongoDb: "MongoDb",
    Unknown: "Unknown",
} as const;

/**
 * Target platform for the project
 */
export type ProjectTargetPlatform = (typeof ProjectTargetPlatform)[keyof typeof ProjectTargetPlatform];

export const ResourceType = {
    SqlMi: "SqlMi",
    SqlVm: "SqlVm",
    SqlDb: "SqlDb",
} as const;

export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

export const ServerLevelPermissionsGroup = {
    Default: "Default",
    MigrationFromSqlServerToAzureDB: "MigrationFromSqlServerToAzureDB",
    MigrationFromSqlServerToAzureMI: "MigrationFromSqlServerToAzureMI",
    MigrationFromMySQLToAzureDBForMySQL: "MigrationFromMySQLToAzureDBForMySQL",
} as const;

/**
 * Permission group for validations
 */
export type ServerLevelPermissionsGroup = (typeof ServerLevelPermissionsGroup)[keyof typeof ServerLevelPermissionsGroup];

export const SqlSourcePlatform = {
    SqlOnPrem: "SqlOnPrem",
} as const;

/**
 * Server platform type for connection
 */
export type SqlSourcePlatform = (typeof SqlSourcePlatform)[keyof typeof SqlSourcePlatform];

export const SsisMigrationOverwriteOption = {
    Ignore: "Ignore",
    Overwrite: "Overwrite",
} as const;

/**
 * The overwrite option for the SSIS project migration
 */
export type SsisMigrationOverwriteOption = (typeof SsisMigrationOverwriteOption)[keyof typeof SsisMigrationOverwriteOption];

export const SsisStoreType = {
    SsisCatalog: "SsisCatalog",
} as const;

/**
 * The SSIS store type of source, only SSIS catalog is supported now in DMS
 */
export type SsisStoreType = (typeof SsisStoreType)[keyof typeof SsisStoreType];
