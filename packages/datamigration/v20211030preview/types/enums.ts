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

export const SqlSourcePlatform = {
    SqlOnPrem: "SqlOnPrem",
} as const;

/**
 * Server platform type for connection
 */
export type SqlSourcePlatform = (typeof SqlSourcePlatform)[keyof typeof SqlSourcePlatform];
