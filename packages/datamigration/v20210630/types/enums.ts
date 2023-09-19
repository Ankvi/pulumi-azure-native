export const AuthenticationType = {
    None: "None",
    WindowsAuthentication: "WindowsAuthentication",
    SqlAuthentication: "SqlAuthentication",
    ActiveDirectoryIntegrated: "ActiveDirectoryIntegrated",
    ActiveDirectoryPassword: "ActiveDirectoryPassword",
} as const;

export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

export const BackupMode = {
    CreateBackup: "CreateBackup",
    ExistingBackup: "ExistingBackup",
} as const;

export type BackupMode = (typeof BackupMode)[keyof typeof BackupMode];

export const MongoDbReplication = {
    Disabled: "Disabled",
    OneTime: "OneTime",
    Continuous: "Continuous",
} as const;

export type MongoDbReplication = (typeof MongoDbReplication)[keyof typeof MongoDbReplication];

export const MongoDbShardKeyOrder = {
    Forward: "Forward",
    Reverse: "Reverse",
    Hashed: "Hashed",
} as const;

export type MongoDbShardKeyOrder = (typeof MongoDbShardKeyOrder)[keyof typeof MongoDbShardKeyOrder];

export const MySqlTargetPlatformType = {
    SqlServer: "SqlServer",
    AzureDbForMySQL: "AzureDbForMySQL",
} as const;

export type MySqlTargetPlatformType = (typeof MySqlTargetPlatformType)[keyof typeof MySqlTargetPlatformType];

export const ProjectSourcePlatform = {
    SQL: "SQL",
    MySQL: "MySQL",
    PostgreSql: "PostgreSql",
    MongoDb: "MongoDb",
    Unknown: "Unknown",
} as const;

export type ProjectSourcePlatform = (typeof ProjectSourcePlatform)[keyof typeof ProjectSourcePlatform];

export const ProjectTargetPlatform = {
    SQLDB: "SQLDB",
    SQLMI: "SQLMI",
    AzureDbForMySql: "AzureDbForMySql",
    AzureDbForPostgreSql: "AzureDbForPostgreSql",
    MongoDb: "MongoDb",
    Unknown: "Unknown",
} as const;

export type ProjectTargetPlatform = (typeof ProjectTargetPlatform)[keyof typeof ProjectTargetPlatform];

export const ServerLevelPermissionsGroup = {
    Default: "Default",
    MigrationFromSqlServerToAzureDB: "MigrationFromSqlServerToAzureDB",
    MigrationFromSqlServerToAzureMI: "MigrationFromSqlServerToAzureMI",
    MigrationFromMySQLToAzureDBForMySQL: "MigrationFromMySQLToAzureDBForMySQL",
} as const;

export type ServerLevelPermissionsGroup = (typeof ServerLevelPermissionsGroup)[keyof typeof ServerLevelPermissionsGroup];

export const SqlSourcePlatform = {
    SqlOnPrem: "SqlOnPrem",
} as const;

export type SqlSourcePlatform = (typeof SqlSourcePlatform)[keyof typeof SqlSourcePlatform];

export const SsisMigrationOverwriteOption = {
    Ignore: "Ignore",
    Overwrite: "Overwrite",
} as const;

export type SsisMigrationOverwriteOption = (typeof SsisMigrationOverwriteOption)[keyof typeof SsisMigrationOverwriteOption];

export const SsisStoreType = {
    SsisCatalog: "SsisCatalog",
} as const;

export type SsisStoreType = (typeof SsisStoreType)[keyof typeof SsisStoreType];
