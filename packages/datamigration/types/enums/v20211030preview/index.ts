// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const AuthenticationType = {
    None: "None",
    WindowsAuthentication: "WindowsAuthentication",
    SqlAuthentication: "SqlAuthentication",
    ActiveDirectoryIntegrated: "ActiveDirectoryIntegrated",
    ActiveDirectoryPassword: "ActiveDirectoryPassword",
} as const;

export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

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

export const SqlSourcePlatform = {
    SqlOnPrem: "SqlOnPrem",
} as const;

export type SqlSourcePlatform = (typeof SqlSourcePlatform)[keyof typeof SqlSourcePlatform];
