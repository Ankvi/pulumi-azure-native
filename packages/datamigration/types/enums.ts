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
    MongoToCosmosDbMongo: "MongoToCosmosDbMongo",
} as const;

export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

export const ServerLevelPermissionsGroup = {
    Default: "Default",
    MigrationFromSqlServerToAzureDB: "MigrationFromSqlServerToAzureDB",
    MigrationFromSqlServerToAzureMI: "MigrationFromSqlServerToAzureMI",
    MigrationFromMySQLToAzureDBForMySQL: "MigrationFromMySQLToAzureDBForMySQL",
    MigrationFromSqlServerToAzureVM: "MigrationFromSqlServerToAzureVM",
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
 * The SSIS store type of source, only SSIS catalog is supported now in DMS (classic)
 */
export type SsisStoreType = (typeof SsisStoreType)[keyof typeof SsisStoreType];

export const TaskType = {
    Connect_MongoDb: "Connect.MongoDb",
    ConnectToSource_SqlServer: "ConnectToSource.SqlServer",
    ConnectToSource_SqlServer_Sync: "ConnectToSource.SqlServer.Sync",
    ConnectToSource_PostgreSql_Sync: "ConnectToSource.PostgreSql.Sync",
    ConnectToSource_MySql: "ConnectToSource.MySql",
    ConnectToSource_Oracle_Sync: "ConnectToSource.Oracle.Sync",
    ConnectToTarget_SqlDb: "ConnectToTarget.SqlDb",
    ConnectToTarget_SqlDb_Sync: "ConnectToTarget.SqlDb.Sync",
    ConnectToTarget_AzureDbForPostgreSql_Sync: "ConnectToTarget.AzureDbForPostgreSql.Sync",
    ConnectToTarget_Oracle_AzureDbForPostgreSql_Sync: "ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync",
    ConnectToTarget_AzureSqlDbMI: "ConnectToTarget.AzureSqlDbMI",
    ConnectToTarget_AzureSqlDbMI_Sync_LRS: "ConnectToTarget.AzureSqlDbMI.Sync.LRS",
    ConnectToTarget_AzureDbForMySql: "ConnectToTarget.AzureDbForMySql",
    GetUserTables_Sql: "GetUserTables.Sql",
    GetUserTables_AzureSqlDb_Sync: "GetUserTables.AzureSqlDb.Sync",
    GetUserTablesOracle: "GetUserTablesOracle",
    GetUserTablesPostgreSql: "GetUserTablesPostgreSql",
    GetUserTablesMySql: "GetUserTablesMySql",
    Migrate_MongoDb: "Migrate.MongoDb",
    Migrate_SqlServer_AzureSqlDbMI: "Migrate.SqlServer.AzureSqlDbMI",
    Migrate_SqlServer_AzureSqlDbMI_Sync_LRS: "Migrate.SqlServer.AzureSqlDbMI.Sync.LRS",
    Migrate_SqlServer_SqlDb: "Migrate.SqlServer.SqlDb",
    Migrate_SqlServer_AzureSqlDb_Sync: "Migrate.SqlServer.AzureSqlDb.Sync",
    Migrate_MySql_AzureDbForMySql_Sync: "Migrate.MySql.AzureDbForMySql.Sync",
    Migrate_MySql_AzureDbForMySql: "Migrate.MySql.AzureDbForMySql",
    Migrate_PostgreSql_AzureDbForPostgreSql_SyncV2: "Migrate.PostgreSql.AzureDbForPostgreSql.SyncV2",
    Migrate_Oracle_AzureDbForPostgreSql_Sync: "Migrate.Oracle.AzureDbForPostgreSql.Sync",
    ValidateMigrationInput_SqlServer_SqlDb_Sync: "ValidateMigrationInput.SqlServer.SqlDb.Sync",
    ValidateMigrationInput_SqlServer_AzureSqlDbMI: "ValidateMigrationInput.SqlServer.AzureSqlDbMI",
    ValidateMigrationInput_SqlServer_AzureSqlDbMI_Sync_LRS: "ValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRS",
    Validate_MongoDb: "Validate.MongoDb",
    Validate_Oracle_AzureDbPostgreSql_Sync: "Validate.Oracle.AzureDbPostgreSql.Sync",
    GetTDECertificates_Sql: "GetTDECertificates.Sql",
    Migrate_Ssis: "Migrate.Ssis",
    Service_Check_OCI: "Service.Check.OCI",
    Service_Upload_OCI: "Service.Upload.OCI",
    Service_Install_OCI: "Service.Install.OCI",
    MigrateSchemaSqlServerSqlDb: "MigrateSchemaSqlServerSqlDb",
} as const;

/**
 * Task type.
 */
export type TaskType = (typeof TaskType)[keyof typeof TaskType];
