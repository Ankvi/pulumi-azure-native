import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Azure Active Directory Application
 */
export interface AzureActiveDirectoryAppArgs {
    /**
     * Key used to authenticate to the Azure Active Directory Application
     */
    appKey?: pulumi.Input<string>;
    /**
     * Application ID of the Azure Active Directory Application
     */
    applicationId?: pulumi.Input<string>;
    /**
     * Ignore checking azure permissions on the AAD app
     */
    ignoreAzurePermissions?: pulumi.Input<boolean>;
    /**
     * Tenant id of the customer
     */
    tenantId?: pulumi.Input<string>;
}

/**
 * Blob container storage information.
 */
export interface BlobShareArgs {
    /**
     * SAS URI of Azure Storage Account Container.
     */
    sasUri?: pulumi.Input<string>;
}

/**
 * Properties for the task that validates the connection to and provides information about a MongoDB server
 */
export interface ConnectToMongoDbTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Describes a connection to a MongoDB data source
     */
    input?: pulumi.Input<MongoDbConnectionInfoArgs>;
    /**
     * Task type.
     * Expected value is 'Connect.MongoDb'.
     */
    taskType: pulumi.Input<"Connect.MongoDb">;
}
/**
 * connectToMongoDbTaskPropertiesArgsProvideDefaults sets the appropriate defaults for ConnectToMongoDbTaskPropertiesArgs
 */
export function connectToMongoDbTaskPropertiesArgsProvideDefaults(val: ConnectToMongoDbTaskPropertiesArgs): ConnectToMongoDbTaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(mongoDbConnectionInfoArgsProvideDefaults) : undefined),
    };
}

/**
 * Input for the task that validates MySQL database connection
 */
export interface ConnectToSourceMySqlTaskInputArgs {
    /**
     * Permission group for validations
     */
    checkPermissionsGroup?: pulumi.Input<string | enums.ServerLevelPermissionsGroup>;
    /**
     * Flag for whether or not the migration is offline
     */
    isOfflineMigration?: pulumi.Input<boolean>;
    /**
     * Information for connecting to MySQL source
     */
    sourceConnectionInfo: pulumi.Input<MySqlConnectionInfoArgs>;
    /**
     * Target Platform for the migration
     */
    targetPlatform?: pulumi.Input<string | enums.MySqlTargetPlatformType>;
}
/**
 * connectToSourceMySqlTaskInputArgsProvideDefaults sets the appropriate defaults for ConnectToSourceMySqlTaskInputArgs
 */
export function connectToSourceMySqlTaskInputArgsProvideDefaults(val: ConnectToSourceMySqlTaskInputArgs): ConnectToSourceMySqlTaskInputArgs {
    return {
        ...val,
        isOfflineMigration: (val.isOfflineMigration) ?? false,
        sourceConnectionInfo: pulumi.output(val.sourceConnectionInfo).apply(mySqlConnectionInfoArgsProvideDefaults),
    };
}

/**
 * Properties for the task that validates MySQL database connection
 */
export interface ConnectToSourceMySqlTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Task input
     */
    input?: pulumi.Input<ConnectToSourceMySqlTaskInputArgs>;
    /**
     * Task type.
     * Expected value is 'ConnectToSource.MySql'.
     */
    taskType: pulumi.Input<"ConnectToSource.MySql">;
}
/**
 * connectToSourceMySqlTaskPropertiesArgsProvideDefaults sets the appropriate defaults for ConnectToSourceMySqlTaskPropertiesArgs
 */
export function connectToSourceMySqlTaskPropertiesArgsProvideDefaults(val: ConnectToSourceMySqlTaskPropertiesArgs): ConnectToSourceMySqlTaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(connectToSourceMySqlTaskInputArgsProvideDefaults) : undefined),
    };
}

/**
 * Input for the task that validates Oracle database connection
 */
export interface ConnectToSourceOracleSyncTaskInputArgs {
    /**
     * Information for connecting to Oracle source
     */
    sourceConnectionInfo: pulumi.Input<OracleConnectionInfoArgs>;
}

/**
 * Properties for the task that validates Oracle database connection
 */
export interface ConnectToSourceOracleSyncTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Task input
     */
    input?: pulumi.Input<ConnectToSourceOracleSyncTaskInputArgs>;
    /**
     * Task type.
     * Expected value is 'ConnectToSource.Oracle.Sync'.
     */
    taskType: pulumi.Input<"ConnectToSource.Oracle.Sync">;
}

/**
 * Input for the task that validates connection to PostgreSQL and source server requirements
 */
export interface ConnectToSourcePostgreSqlSyncTaskInputArgs {
    /**
     * Connection information for source PostgreSQL server
     */
    sourceConnectionInfo: pulumi.Input<PostgreSqlConnectionInfoArgs>;
}
/**
 * connectToSourcePostgreSqlSyncTaskInputArgsProvideDefaults sets the appropriate defaults for ConnectToSourcePostgreSqlSyncTaskInputArgs
 */
export function connectToSourcePostgreSqlSyncTaskInputArgsProvideDefaults(val: ConnectToSourcePostgreSqlSyncTaskInputArgs): ConnectToSourcePostgreSqlSyncTaskInputArgs {
    return {
        ...val,
        sourceConnectionInfo: pulumi.output(val.sourceConnectionInfo).apply(postgreSqlConnectionInfoArgsProvideDefaults),
    };
}

/**
 * Properties for the task that validates connection to PostgreSQL server and source server requirements for online migration
 */
export interface ConnectToSourcePostgreSqlSyncTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Task input
     */
    input?: pulumi.Input<ConnectToSourcePostgreSqlSyncTaskInputArgs>;
    /**
     * Task type.
     * Expected value is 'ConnectToSource.PostgreSql.Sync'.
     */
    taskType: pulumi.Input<"ConnectToSource.PostgreSql.Sync">;
}
/**
 * connectToSourcePostgreSqlSyncTaskPropertiesArgsProvideDefaults sets the appropriate defaults for ConnectToSourcePostgreSqlSyncTaskPropertiesArgs
 */
export function connectToSourcePostgreSqlSyncTaskPropertiesArgsProvideDefaults(val: ConnectToSourcePostgreSqlSyncTaskPropertiesArgs): ConnectToSourcePostgreSqlSyncTaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(connectToSourcePostgreSqlSyncTaskInputArgsProvideDefaults) : undefined),
    };
}

/**
 * Properties for the task that validates connection to SQL Server and source server requirements for online migration
 */
export interface ConnectToSourceSqlServerSyncTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Task input
     */
    input?: pulumi.Input<ConnectToSourceSqlServerTaskInputArgs>;
    /**
     * Task type.
     * Expected value is 'ConnectToSource.SqlServer.Sync'.
     */
    taskType: pulumi.Input<"ConnectToSource.SqlServer.Sync">;
}
/**
 * connectToSourceSqlServerSyncTaskPropertiesArgsProvideDefaults sets the appropriate defaults for ConnectToSourceSqlServerSyncTaskPropertiesArgs
 */
export function connectToSourceSqlServerSyncTaskPropertiesArgsProvideDefaults(val: ConnectToSourceSqlServerSyncTaskPropertiesArgs): ConnectToSourceSqlServerSyncTaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(connectToSourceSqlServerTaskInputArgsProvideDefaults) : undefined),
    };
}

/**
 * Input for the task that validates connection to SQL Server and also validates source server requirements
 */
export interface ConnectToSourceSqlServerTaskInputArgs {
    /**
     * Permission group for validations
     */
    checkPermissionsGroup?: pulumi.Input<string | enums.ServerLevelPermissionsGroup>;
    /**
     * Flag for whether to collect agent jobs from source server.
     */
    collectAgentJobs?: pulumi.Input<boolean>;
    /**
     * Flag for whether to collect databases from source server.
     */
    collectDatabases?: pulumi.Input<boolean>;
    /**
     * Flag for whether to collect logins from source server.
     */
    collectLogins?: pulumi.Input<boolean>;
    /**
     * Flag for whether to collect TDE Certificate names from source server.
     */
    collectTdeCertificateInfo?: pulumi.Input<boolean>;
    /**
     * encrypted key for secure fields
     */
    encryptedKeyForSecureFields?: pulumi.Input<string>;
    /**
     * Connection information for Source SQL Server
     */
    sourceConnectionInfo: pulumi.Input<SqlConnectionInfoArgs>;
    /**
     * Flag for whether to validate SSIS catalog is reachable on the source server.
     */
    validateSsisCatalogOnly?: pulumi.Input<boolean>;
}
/**
 * connectToSourceSqlServerTaskInputArgsProvideDefaults sets the appropriate defaults for ConnectToSourceSqlServerTaskInputArgs
 */
export function connectToSourceSqlServerTaskInputArgsProvideDefaults(val: ConnectToSourceSqlServerTaskInputArgs): ConnectToSourceSqlServerTaskInputArgs {
    return {
        ...val,
        collectAgentJobs: (val.collectAgentJobs) ?? false,
        collectDatabases: (val.collectDatabases) ?? true,
        collectLogins: (val.collectLogins) ?? false,
        collectTdeCertificateInfo: (val.collectTdeCertificateInfo) ?? false,
        sourceConnectionInfo: pulumi.output(val.sourceConnectionInfo).apply(sqlConnectionInfoArgsProvideDefaults),
        validateSsisCatalogOnly: (val.validateSsisCatalogOnly) ?? false,
    };
}

/**
 * Properties for the task that validates connection to SQL Server and also validates source server requirements
 */
export interface ConnectToSourceSqlServerTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Task input
     */
    input?: pulumi.Input<ConnectToSourceSqlServerTaskInputArgs>;
    /**
     * Task id 
     */
    taskId?: pulumi.Input<string>;
    /**
     * Task type.
     * Expected value is 'ConnectToSource.SqlServer'.
     */
    taskType: pulumi.Input<"ConnectToSource.SqlServer">;
}
/**
 * connectToSourceSqlServerTaskPropertiesArgsProvideDefaults sets the appropriate defaults for ConnectToSourceSqlServerTaskPropertiesArgs
 */
export function connectToSourceSqlServerTaskPropertiesArgsProvideDefaults(val: ConnectToSourceSqlServerTaskPropertiesArgs): ConnectToSourceSqlServerTaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(connectToSourceSqlServerTaskInputArgsProvideDefaults) : undefined),
    };
}

/**
 * Input for the task that validates connection to Azure Database for MySQL and target server requirements
 */
export interface ConnectToTargetAzureDbForMySqlTaskInputArgs {
    /**
     * Flag for whether or not the migration is offline
     */
    isOfflineMigration?: pulumi.Input<boolean>;
    /**
     * Connection information for source MySQL server
     */
    sourceConnectionInfo: pulumi.Input<MySqlConnectionInfoArgs>;
    /**
     * Connection information for target Azure Database for MySQL server
     */
    targetConnectionInfo: pulumi.Input<MySqlConnectionInfoArgs>;
}
/**
 * connectToTargetAzureDbForMySqlTaskInputArgsProvideDefaults sets the appropriate defaults for ConnectToTargetAzureDbForMySqlTaskInputArgs
 */
export function connectToTargetAzureDbForMySqlTaskInputArgsProvideDefaults(val: ConnectToTargetAzureDbForMySqlTaskInputArgs): ConnectToTargetAzureDbForMySqlTaskInputArgs {
    return {
        ...val,
        isOfflineMigration: (val.isOfflineMigration) ?? false,
        sourceConnectionInfo: pulumi.output(val.sourceConnectionInfo).apply(mySqlConnectionInfoArgsProvideDefaults),
        targetConnectionInfo: pulumi.output(val.targetConnectionInfo).apply(mySqlConnectionInfoArgsProvideDefaults),
    };
}

/**
 * Properties for the task that validates connection to Azure Database for MySQL and target server requirements
 */
export interface ConnectToTargetAzureDbForMySqlTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Task input
     */
    input?: pulumi.Input<ConnectToTargetAzureDbForMySqlTaskInputArgs>;
    /**
     * Task type.
     * Expected value is 'ConnectToTarget.AzureDbForMySql'.
     */
    taskType: pulumi.Input<"ConnectToTarget.AzureDbForMySql">;
}
/**
 * connectToTargetAzureDbForMySqlTaskPropertiesArgsProvideDefaults sets the appropriate defaults for ConnectToTargetAzureDbForMySqlTaskPropertiesArgs
 */
export function connectToTargetAzureDbForMySqlTaskPropertiesArgsProvideDefaults(val: ConnectToTargetAzureDbForMySqlTaskPropertiesArgs): ConnectToTargetAzureDbForMySqlTaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(connectToTargetAzureDbForMySqlTaskInputArgsProvideDefaults) : undefined),
    };
}

/**
 * Input for the task that validates connection to Azure Database for PostgreSQL and target server requirements
 */
export interface ConnectToTargetAzureDbForPostgreSqlSyncTaskInputArgs {
    /**
     * Connection information for source PostgreSQL server
     */
    sourceConnectionInfo: pulumi.Input<PostgreSqlConnectionInfoArgs>;
    /**
     * Connection information for target Azure Database for PostgreSQL server
     */
    targetConnectionInfo: pulumi.Input<PostgreSqlConnectionInfoArgs>;
}
/**
 * connectToTargetAzureDbForPostgreSqlSyncTaskInputArgsProvideDefaults sets the appropriate defaults for ConnectToTargetAzureDbForPostgreSqlSyncTaskInputArgs
 */
export function connectToTargetAzureDbForPostgreSqlSyncTaskInputArgsProvideDefaults(val: ConnectToTargetAzureDbForPostgreSqlSyncTaskInputArgs): ConnectToTargetAzureDbForPostgreSqlSyncTaskInputArgs {
    return {
        ...val,
        sourceConnectionInfo: pulumi.output(val.sourceConnectionInfo).apply(postgreSqlConnectionInfoArgsProvideDefaults),
        targetConnectionInfo: pulumi.output(val.targetConnectionInfo).apply(postgreSqlConnectionInfoArgsProvideDefaults),
    };
}

/**
 * Properties for the task that validates connection to Azure Database For PostgreSQL server and target server requirements for online migration
 */
export interface ConnectToTargetAzureDbForPostgreSqlSyncTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Task input
     */
    input?: pulumi.Input<ConnectToTargetAzureDbForPostgreSqlSyncTaskInputArgs>;
    /**
     * Task type.
     * Expected value is 'ConnectToTarget.AzureDbForPostgreSql.Sync'.
     */
    taskType: pulumi.Input<"ConnectToTarget.AzureDbForPostgreSql.Sync">;
}
/**
 * connectToTargetAzureDbForPostgreSqlSyncTaskPropertiesArgsProvideDefaults sets the appropriate defaults for ConnectToTargetAzureDbForPostgreSqlSyncTaskPropertiesArgs
 */
export function connectToTargetAzureDbForPostgreSqlSyncTaskPropertiesArgsProvideDefaults(val: ConnectToTargetAzureDbForPostgreSqlSyncTaskPropertiesArgs): ConnectToTargetAzureDbForPostgreSqlSyncTaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(connectToTargetAzureDbForPostgreSqlSyncTaskInputArgsProvideDefaults) : undefined),
    };
}

/**
 * Input for the task that validates connection to Azure Database for PostgreSQL and target server requirements for Oracle source.
 */
export interface ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInputArgs {
    /**
     * Connection information for target Azure Database for PostgreSQL server
     */
    targetConnectionInfo: pulumi.Input<PostgreSqlConnectionInfoArgs>;
}
/**
 * connectToTargetOracleAzureDbForPostgreSqlSyncTaskInputArgsProvideDefaults sets the appropriate defaults for ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInputArgs
 */
export function connectToTargetOracleAzureDbForPostgreSqlSyncTaskInputArgsProvideDefaults(val: ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInputArgs): ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInputArgs {
    return {
        ...val,
        targetConnectionInfo: pulumi.output(val.targetConnectionInfo).apply(postgreSqlConnectionInfoArgsProvideDefaults),
    };
}

/**
 * Properties for the task that validates connection to Azure Database For PostgreSQL server and target server requirements for online migration for Oracle source.
 */
export interface ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Task input
     */
    input?: pulumi.Input<ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInputArgs>;
    /**
     * Task type.
     * Expected value is 'ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync'.
     */
    taskType: pulumi.Input<"ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync">;
}
/**
 * connectToTargetOracleAzureDbForPostgreSqlSyncTaskPropertiesArgsProvideDefaults sets the appropriate defaults for ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskPropertiesArgs
 */
export function connectToTargetOracleAzureDbForPostgreSqlSyncTaskPropertiesArgsProvideDefaults(val: ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskPropertiesArgs): ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(connectToTargetOracleAzureDbForPostgreSqlSyncTaskInputArgsProvideDefaults) : undefined),
    };
}

/**
 * Input for the task that validates connection to SQL DB and target server requirements
 */
export interface ConnectToTargetSqlDbTaskInputArgs {
    /**
     * Boolean flag indicating whether to query object counts for each database on the target server
     */
    queryObjectCounts?: pulumi.Input<boolean>;
    /**
     * Connection information for target SQL DB
     */
    targetConnectionInfo: pulumi.Input<SqlConnectionInfoArgs>;
}
/**
 * connectToTargetSqlDbTaskInputArgsProvideDefaults sets the appropriate defaults for ConnectToTargetSqlDbTaskInputArgs
 */
export function connectToTargetSqlDbTaskInputArgsProvideDefaults(val: ConnectToTargetSqlDbTaskInputArgs): ConnectToTargetSqlDbTaskInputArgs {
    return {
        ...val,
        targetConnectionInfo: pulumi.output(val.targetConnectionInfo).apply(sqlConnectionInfoArgsProvideDefaults),
    };
}

/**
 * Properties for the task that validates connection to SQL DB and target server requirements
 */
export interface ConnectToTargetSqlDbTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * DateTime in UTC when the task was created
     */
    createdOn?: pulumi.Input<string>;
    /**
     * Task input
     */
    input?: pulumi.Input<ConnectToTargetSqlDbTaskInputArgs>;
    /**
     * Task type.
     * Expected value is 'ConnectToTarget.SqlDb'.
     */
    taskType: pulumi.Input<"ConnectToTarget.SqlDb">;
}
/**
 * connectToTargetSqlDbTaskPropertiesArgsProvideDefaults sets the appropriate defaults for ConnectToTargetSqlDbTaskPropertiesArgs
 */
export function connectToTargetSqlDbTaskPropertiesArgsProvideDefaults(val: ConnectToTargetSqlDbTaskPropertiesArgs): ConnectToTargetSqlDbTaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(connectToTargetSqlDbTaskInputArgsProvideDefaults) : undefined),
    };
}

/**
 * Input for the task that validates connection to Azure SQL Database Managed Instance online scenario.
 */
export interface ConnectToTargetSqlMISyncTaskInputArgs {
    /**
     * Azure Active Directory Application the DMS (classic) instance will use to connect to the target instance of Azure SQL Database Managed Instance and the Azure Storage Account
     */
    azureApp: pulumi.Input<AzureActiveDirectoryAppArgs>;
    /**
     * Connection information for Azure SQL Database Managed Instance
     */
    targetConnectionInfo: pulumi.Input<MiSqlConnectionInfoArgs>;
}

/**
 * Properties for the task that validates connection to Azure SQL Database Managed Instance
 */
export interface ConnectToTargetSqlMISyncTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Task input
     */
    input?: pulumi.Input<ConnectToTargetSqlMISyncTaskInputArgs>;
    /**
     * Task type.
     * Expected value is 'ConnectToTarget.AzureSqlDbMI.Sync.LRS'.
     */
    taskType: pulumi.Input<"ConnectToTarget.AzureSqlDbMI.Sync.LRS">;
}

/**
 * Input for the task that validates connection to Azure SQL Database Managed Instance.
 */
export interface ConnectToTargetSqlMITaskInputArgs {
    /**
     * Flag for whether to collect agent jobs from target SQL MI server.
     */
    collectAgentJobs?: pulumi.Input<boolean>;
    /**
     * Flag for whether to collect logins from target SQL MI server.
     */
    collectLogins?: pulumi.Input<boolean>;
    /**
     * Connection information for target SQL Server
     */
    targetConnectionInfo: pulumi.Input<SqlConnectionInfoArgs>;
    /**
     * Flag for whether to validate SSIS catalog is reachable on the target SQL MI server.
     */
    validateSsisCatalogOnly?: pulumi.Input<boolean>;
}
/**
 * connectToTargetSqlMITaskInputArgsProvideDefaults sets the appropriate defaults for ConnectToTargetSqlMITaskInputArgs
 */
export function connectToTargetSqlMITaskInputArgsProvideDefaults(val: ConnectToTargetSqlMITaskInputArgs): ConnectToTargetSqlMITaskInputArgs {
    return {
        ...val,
        collectAgentJobs: (val.collectAgentJobs) ?? true,
        collectLogins: (val.collectLogins) ?? true,
        targetConnectionInfo: pulumi.output(val.targetConnectionInfo).apply(sqlConnectionInfoArgsProvideDefaults),
        validateSsisCatalogOnly: (val.validateSsisCatalogOnly) ?? false,
    };
}

/**
 * Properties for the task that validates connection to Azure SQL Database Managed Instance
 */
export interface ConnectToTargetSqlMITaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Task input
     */
    input?: pulumi.Input<ConnectToTargetSqlMITaskInputArgs>;
    /**
     * Task type.
     * Expected value is 'ConnectToTarget.AzureSqlDbMI'.
     */
    taskType: pulumi.Input<"ConnectToTarget.AzureSqlDbMI">;
}
/**
 * connectToTargetSqlMITaskPropertiesArgsProvideDefaults sets the appropriate defaults for ConnectToTargetSqlMITaskPropertiesArgs
 */
export function connectToTargetSqlMITaskPropertiesArgsProvideDefaults(val: ConnectToTargetSqlMITaskPropertiesArgs): ConnectToTargetSqlMITaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(connectToTargetSqlMITaskInputArgsProvideDefaults) : undefined),
    };
}

/**
 * Input for the task that validates connection to Azure SQL DB and target server requirements
 */
export interface ConnectToTargetSqlSqlDbSyncTaskInputArgs {
    /**
     * Connection information for source SQL Server
     */
    sourceConnectionInfo: pulumi.Input<SqlConnectionInfoArgs>;
    /**
     * Connection information for target SQL DB
     */
    targetConnectionInfo: pulumi.Input<SqlConnectionInfoArgs>;
}
/**
 * connectToTargetSqlSqlDbSyncTaskInputArgsProvideDefaults sets the appropriate defaults for ConnectToTargetSqlSqlDbSyncTaskInputArgs
 */
export function connectToTargetSqlSqlDbSyncTaskInputArgsProvideDefaults(val: ConnectToTargetSqlSqlDbSyncTaskInputArgs): ConnectToTargetSqlSqlDbSyncTaskInputArgs {
    return {
        ...val,
        sourceConnectionInfo: pulumi.output(val.sourceConnectionInfo).apply(sqlConnectionInfoArgsProvideDefaults),
        targetConnectionInfo: pulumi.output(val.targetConnectionInfo).apply(sqlConnectionInfoArgsProvideDefaults),
    };
}

/**
 * Properties for the task that validates connection to SQL DB and target server requirements for online migration
 */
export interface ConnectToTargetSqlSqlDbSyncTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Task input
     */
    input?: pulumi.Input<ConnectToTargetSqlSqlDbSyncTaskInputArgs>;
    /**
     * Task type.
     * Expected value is 'ConnectToTarget.SqlDb.Sync'.
     */
    taskType: pulumi.Input<"ConnectToTarget.SqlDb.Sync">;
}
/**
 * connectToTargetSqlSqlDbSyncTaskPropertiesArgsProvideDefaults sets the appropriate defaults for ConnectToTargetSqlSqlDbSyncTaskPropertiesArgs
 */
export function connectToTargetSqlSqlDbSyncTaskPropertiesArgsProvideDefaults(val: ConnectToTargetSqlSqlDbSyncTaskPropertiesArgs): ConnectToTargetSqlSqlDbSyncTaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(connectToTargetSqlSqlDbSyncTaskInputArgsProvideDefaults) : undefined),
    };
}

/**
 * Project Database Details
 */
export interface DatabaseInfoArgs {
    /**
     * Name of the database
     */
    sourceDatabaseName: pulumi.Input<string>;
}

/**
 * Database Migration Resource properties for SQL database.
 */
export interface DatabaseMigrationPropertiesSqlDbArgs {
    /**
     *
     * Expected value is 'SqlDb'.
     */
    kind: pulumi.Input<"SqlDb">;
    /**
     * ID for current migration operation.
     */
    migrationOperationId?: pulumi.Input<string>;
    /**
     * Resource Id of the Migration Service.
     */
    migrationService?: pulumi.Input<string>;
    /**
     * Error message for migration provisioning failure, if any.
     */
    provisioningError?: pulumi.Input<string>;
    /**
     * Resource Id of the target resource.
     */
    scope?: pulumi.Input<string>;
    /**
     * Name of the source database.
     */
    sourceDatabaseName?: pulumi.Input<string>;
    /**
     * Source SQL Server connection details.
     */
    sourceSqlConnection?: pulumi.Input<SqlConnectionInformationArgs>;
    /**
     * List of tables to copy.
     */
    tableList?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Database collation to be used for the target database.
     */
    targetDatabaseCollation?: pulumi.Input<string>;
    /**
     * Target SQL DB connection details.
     */
    targetSqlConnection?: pulumi.Input<SqlConnectionInformationArgs>;
}

/**
 * File share information with Path, Username, and Password.
 */
export interface FileShareArgs {
    /**
     * Password credential used to connect to the share location.
     */
    password?: pulumi.Input<string>;
    /**
     * The folder path for this share.
     */
    path: pulumi.Input<string>;
    /**
     * User name credential to connect to the share location
     */
    userName?: pulumi.Input<string>;
}

/**
 * Input for the task that gets TDE certificates in Base64 encoded format.
 */
export interface GetTdeCertificatesSqlTaskInputArgs {
    /**
     * Backup file share information for file share to be used for temporarily storing files.
     */
    backupFileShare: pulumi.Input<FileShareArgs>;
    /**
     * Connection information for SQL Server
     */
    connectionInfo: pulumi.Input<SqlConnectionInfoArgs>;
    /**
     * List containing certificate names and corresponding password to use for encrypting the exported certificate.
     */
    selectedCertificates: pulumi.Input<pulumi.Input<SelectedCertificateInputArgs>[]>;
}
/**
 * getTdeCertificatesSqlTaskInputArgsProvideDefaults sets the appropriate defaults for GetTdeCertificatesSqlTaskInputArgs
 */
export function getTdeCertificatesSqlTaskInputArgsProvideDefaults(val: GetTdeCertificatesSqlTaskInputArgs): GetTdeCertificatesSqlTaskInputArgs {
    return {
        ...val,
        connectionInfo: pulumi.output(val.connectionInfo).apply(sqlConnectionInfoArgsProvideDefaults),
    };
}

/**
 * Properties for the task that gets TDE certificates in Base64 encoded format.
 */
export interface GetTdeCertificatesSqlTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Task input
     */
    input?: pulumi.Input<GetTdeCertificatesSqlTaskInputArgs>;
    /**
     * Task type.
     * Expected value is 'GetTDECertificates.Sql'.
     */
    taskType: pulumi.Input<"GetTDECertificates.Sql">;
}
/**
 * getTdeCertificatesSqlTaskPropertiesArgsProvideDefaults sets the appropriate defaults for GetTdeCertificatesSqlTaskPropertiesArgs
 */
export function getTdeCertificatesSqlTaskPropertiesArgsProvideDefaults(val: GetTdeCertificatesSqlTaskPropertiesArgs): GetTdeCertificatesSqlTaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(getTdeCertificatesSqlTaskInputArgsProvideDefaults) : undefined),
    };
}

/**
 * Input for the task that collects user tables for the given list of databases
 */
export interface GetUserTablesMySqlTaskInputArgs {
    /**
     * Connection information for SQL Server
     */
    connectionInfo: pulumi.Input<MySqlConnectionInfoArgs>;
    /**
     * List of database names to collect tables for
     */
    selectedDatabases: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * getUserTablesMySqlTaskInputArgsProvideDefaults sets the appropriate defaults for GetUserTablesMySqlTaskInputArgs
 */
export function getUserTablesMySqlTaskInputArgsProvideDefaults(val: GetUserTablesMySqlTaskInputArgs): GetUserTablesMySqlTaskInputArgs {
    return {
        ...val,
        connectionInfo: pulumi.output(val.connectionInfo).apply(mySqlConnectionInfoArgsProvideDefaults),
    };
}

/**
 * Properties for the task that collects user tables for the given list of databases
 */
export interface GetUserTablesMySqlTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Task input
     */
    input?: pulumi.Input<GetUserTablesMySqlTaskInputArgs>;
    /**
     * Task type.
     * Expected value is 'GetUserTablesMySql'.
     */
    taskType: pulumi.Input<"GetUserTablesMySql">;
}
/**
 * getUserTablesMySqlTaskPropertiesArgsProvideDefaults sets the appropriate defaults for GetUserTablesMySqlTaskPropertiesArgs
 */
export function getUserTablesMySqlTaskPropertiesArgsProvideDefaults(val: GetUserTablesMySqlTaskPropertiesArgs): GetUserTablesMySqlTaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(getUserTablesMySqlTaskInputArgsProvideDefaults) : undefined),
    };
}

/**
 * Input for the task that gets the list of tables contained within a provided list of Oracle schemas.
 */
export interface GetUserTablesOracleTaskInputArgs {
    /**
     * Information for connecting to Oracle source
     */
    connectionInfo: pulumi.Input<OracleConnectionInfoArgs>;
    /**
     * List of Oracle schemas for which to collect tables
     */
    selectedSchemas: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Properties for the task that collects user tables for the given list of Oracle schemas
 */
export interface GetUserTablesOracleTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Task input
     */
    input?: pulumi.Input<GetUserTablesOracleTaskInputArgs>;
    /**
     * Task type.
     * Expected value is 'GetUserTablesOracle'.
     */
    taskType: pulumi.Input<"GetUserTablesOracle">;
}

/**
 * Input for the task that gets the list of tables for a provided list of PostgreSQL databases.
 */
export interface GetUserTablesPostgreSqlTaskInputArgs {
    /**
     * Information for connecting to PostgreSQL source
     */
    connectionInfo: pulumi.Input<PostgreSqlConnectionInfoArgs>;
    /**
     * List of PostgreSQL databases for which to collect tables
     */
    selectedDatabases: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * getUserTablesPostgreSqlTaskInputArgsProvideDefaults sets the appropriate defaults for GetUserTablesPostgreSqlTaskInputArgs
 */
export function getUserTablesPostgreSqlTaskInputArgsProvideDefaults(val: GetUserTablesPostgreSqlTaskInputArgs): GetUserTablesPostgreSqlTaskInputArgs {
    return {
        ...val,
        connectionInfo: pulumi.output(val.connectionInfo).apply(postgreSqlConnectionInfoArgsProvideDefaults),
    };
}

/**
 * Properties for the task that collects user tables for the given list of databases
 */
export interface GetUserTablesPostgreSqlTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Task input
     */
    input?: pulumi.Input<GetUserTablesPostgreSqlTaskInputArgs>;
    /**
     * Task type.
     * Expected value is 'GetUserTablesPostgreSql'.
     */
    taskType: pulumi.Input<"GetUserTablesPostgreSql">;
}
/**
 * getUserTablesPostgreSqlTaskPropertiesArgsProvideDefaults sets the appropriate defaults for GetUserTablesPostgreSqlTaskPropertiesArgs
 */
export function getUserTablesPostgreSqlTaskPropertiesArgsProvideDefaults(val: GetUserTablesPostgreSqlTaskPropertiesArgs): GetUserTablesPostgreSqlTaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(getUserTablesPostgreSqlTaskInputArgsProvideDefaults) : undefined),
    };
}

/**
 * Input for the task that collects user tables for the given list of databases
 */
export interface GetUserTablesSqlSyncTaskInputArgs {
    /**
     * List of source database names to collect tables for
     */
    selectedSourceDatabases: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of target database names to collect tables for
     */
    selectedTargetDatabases: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Connection information for SQL Server
     */
    sourceConnectionInfo: pulumi.Input<SqlConnectionInfoArgs>;
    /**
     * Connection information for SQL DB
     */
    targetConnectionInfo: pulumi.Input<SqlConnectionInfoArgs>;
}
/**
 * getUserTablesSqlSyncTaskInputArgsProvideDefaults sets the appropriate defaults for GetUserTablesSqlSyncTaskInputArgs
 */
export function getUserTablesSqlSyncTaskInputArgsProvideDefaults(val: GetUserTablesSqlSyncTaskInputArgs): GetUserTablesSqlSyncTaskInputArgs {
    return {
        ...val,
        sourceConnectionInfo: pulumi.output(val.sourceConnectionInfo).apply(sqlConnectionInfoArgsProvideDefaults),
        targetConnectionInfo: pulumi.output(val.targetConnectionInfo).apply(sqlConnectionInfoArgsProvideDefaults),
    };
}

/**
 * Properties for the task that collects user tables for the given list of databases
 */
export interface GetUserTablesSqlSyncTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Task input
     */
    input?: pulumi.Input<GetUserTablesSqlSyncTaskInputArgs>;
    /**
     * Task type.
     * Expected value is 'GetUserTables.AzureSqlDb.Sync'.
     */
    taskType: pulumi.Input<"GetUserTables.AzureSqlDb.Sync">;
}
/**
 * getUserTablesSqlSyncTaskPropertiesArgsProvideDefaults sets the appropriate defaults for GetUserTablesSqlSyncTaskPropertiesArgs
 */
export function getUserTablesSqlSyncTaskPropertiesArgsProvideDefaults(val: GetUserTablesSqlSyncTaskPropertiesArgs): GetUserTablesSqlSyncTaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(getUserTablesSqlSyncTaskInputArgsProvideDefaults) : undefined),
    };
}

/**
 * Input for the task that collects user tables for the given list of databases
 */
export interface GetUserTablesSqlTaskInputArgs {
    /**
     * Connection information for SQL Server
     */
    connectionInfo: pulumi.Input<SqlConnectionInfoArgs>;
    /**
     * encrypted key for secure fields
     */
    encryptedKeyForSecureFields?: pulumi.Input<string>;
    /**
     * List of database names to collect tables for
     */
    selectedDatabases: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * getUserTablesSqlTaskInputArgsProvideDefaults sets the appropriate defaults for GetUserTablesSqlTaskInputArgs
 */
export function getUserTablesSqlTaskInputArgsProvideDefaults(val: GetUserTablesSqlTaskInputArgs): GetUserTablesSqlTaskInputArgs {
    return {
        ...val,
        connectionInfo: pulumi.output(val.connectionInfo).apply(sqlConnectionInfoArgsProvideDefaults),
    };
}

/**
 * Properties for the task that collects user tables for the given list of databases
 */
export interface GetUserTablesSqlTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Task input
     */
    input?: pulumi.Input<GetUserTablesSqlTaskInputArgs>;
    /**
     * Task id 
     */
    taskId?: pulumi.Input<string>;
    /**
     * Task type.
     * Expected value is 'GetUserTables.Sql'.
     */
    taskType: pulumi.Input<"GetUserTables.Sql">;
}
/**
 * getUserTablesSqlTaskPropertiesArgsProvideDefaults sets the appropriate defaults for GetUserTablesSqlTaskPropertiesArgs
 */
export function getUserTablesSqlTaskPropertiesArgsProvideDefaults(val: GetUserTablesSqlTaskPropertiesArgs): GetUserTablesSqlTaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(getUserTablesSqlTaskInputArgsProvideDefaults) : undefined),
    };
}

/**
 * Properties required to create a connection to Azure SQL database Managed instance
 */
export interface MiSqlConnectionInfoArgs {
    /**
     * Resource id for Azure SQL database Managed instance
     */
    managedInstanceResourceId: pulumi.Input<string>;
    /**
     * Password credential.
     */
    password?: pulumi.Input<string>;
    /**
     * Type of connection info
     * Expected value is 'MiSqlConnectionInfo'.
     */
    type: pulumi.Input<"MiSqlConnectionInfo">;
    /**
     * User name
     */
    userName?: pulumi.Input<string>;
}

/**
 * Properties for the task that migrates data between MongoDB data sources
 */
export interface MigrateMongoDbTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Describes how a MongoDB data migration should be performed
     */
    input?: pulumi.Input<MongoDbMigrationSettingsArgs>;
    /**
     * Task type.
     * Expected value is 'Migrate.MongoDb'.
     */
    taskType: pulumi.Input<"Migrate.MongoDb">;
}
/**
 * migrateMongoDbTaskPropertiesArgsProvideDefaults sets the appropriate defaults for MigrateMongoDbTaskPropertiesArgs
 */
export function migrateMongoDbTaskPropertiesArgsProvideDefaults(val: MigrateMongoDbTaskPropertiesArgs): MigrateMongoDbTaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(mongoDbMigrationSettingsArgsProvideDefaults) : undefined),
    };
}

/**
 * Database specific information for offline MySQL to Azure Database for MySQL migration task inputs
 */
export interface MigrateMySqlAzureDbForMySqlOfflineDatabaseInputArgs {
    /**
     * Name of the database
     */
    name?: pulumi.Input<string>;
    /**
     * Mapping of source to target tables
     */
    tableMap?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of target database. Note: Target database will be truncated before starting migration.
     */
    targetDatabaseName?: pulumi.Input<string>;
}

/**
 * Input for the task that migrates MySQL databases to Azure Database for MySQL for offline migrations
 */
export interface MigrateMySqlAzureDbForMySqlOfflineTaskInputArgs {
    /**
     * encrypted key for secure fields
     */
    encryptedKeyForSecureFields?: pulumi.Input<string>;
    /**
     * Setting to set the source server read only
     */
    makeSourceServerReadOnly?: pulumi.Input<boolean>;
    /**
     * Optional parameters for fine tuning the data transfer rate during migration
     */
    optionalAgentSettings?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Databases to migrate
     */
    selectedDatabases: pulumi.Input<pulumi.Input<MigrateMySqlAzureDbForMySqlOfflineDatabaseInputArgs>[]>;
    /**
     * Connection information for source MySQL
     */
    sourceConnectionInfo: pulumi.Input<MySqlConnectionInfoArgs>;
    /**
     * Parameter to specify when the migration started
     */
    startedOn?: pulumi.Input<string>;
    /**
     * Connection information for target Azure Database for MySQL
     */
    targetConnectionInfo: pulumi.Input<MySqlConnectionInfoArgs>;
}
/**
 * migrateMySqlAzureDbForMySqlOfflineTaskInputArgsProvideDefaults sets the appropriate defaults for MigrateMySqlAzureDbForMySqlOfflineTaskInputArgs
 */
export function migrateMySqlAzureDbForMySqlOfflineTaskInputArgsProvideDefaults(val: MigrateMySqlAzureDbForMySqlOfflineTaskInputArgs): MigrateMySqlAzureDbForMySqlOfflineTaskInputArgs {
    return {
        ...val,
        makeSourceServerReadOnly: (val.makeSourceServerReadOnly) ?? false,
        sourceConnectionInfo: pulumi.output(val.sourceConnectionInfo).apply(mySqlConnectionInfoArgsProvideDefaults),
        targetConnectionInfo: pulumi.output(val.targetConnectionInfo).apply(mySqlConnectionInfoArgsProvideDefaults),
    };
}

/**
 * Properties for the task that migrates MySQL databases to Azure Database for MySQL for offline migrations
 */
export interface MigrateMySqlAzureDbForMySqlOfflineTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Task input
     */
    input?: pulumi.Input<MigrateMySqlAzureDbForMySqlOfflineTaskInputArgs>;
    /**
     * whether the task can be cloned or not
     */
    isCloneable?: pulumi.Input<boolean>;
    /**
     * Task id 
     */
    taskId?: pulumi.Input<string>;
    /**
     * Task type.
     * Expected value is 'Migrate.MySql.AzureDbForMySql'.
     */
    taskType: pulumi.Input<"Migrate.MySql.AzureDbForMySql">;
}
/**
 * migrateMySqlAzureDbForMySqlOfflineTaskPropertiesArgsProvideDefaults sets the appropriate defaults for MigrateMySqlAzureDbForMySqlOfflineTaskPropertiesArgs
 */
export function migrateMySqlAzureDbForMySqlOfflineTaskPropertiesArgsProvideDefaults(val: MigrateMySqlAzureDbForMySqlOfflineTaskPropertiesArgs): MigrateMySqlAzureDbForMySqlOfflineTaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(migrateMySqlAzureDbForMySqlOfflineTaskInputArgsProvideDefaults) : undefined),
    };
}

/**
 * Database specific information for MySQL to Azure Database for MySQL migration task inputs
 */
export interface MigrateMySqlAzureDbForMySqlSyncDatabaseInputArgs {
    /**
     * Migration settings which tune the migration behavior
     */
    migrationSetting?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the database
     */
    name?: pulumi.Input<string>;
    /**
     * Source settings to tune source endpoint migration behavior
     */
    sourceSetting?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Mapping of source to target tables
     */
    tableMap?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of target database. Note: Target database will be truncated before starting migration.
     */
    targetDatabaseName?: pulumi.Input<string>;
    /**
     * Target settings to tune target endpoint migration behavior
     */
    targetSetting?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * Input for the task that migrates MySQL databases to Azure Database for MySQL for online migrations
 */
export interface MigrateMySqlAzureDbForMySqlSyncTaskInputArgs {
    /**
     * Databases to migrate
     */
    selectedDatabases: pulumi.Input<pulumi.Input<MigrateMySqlAzureDbForMySqlSyncDatabaseInputArgs>[]>;
    /**
     * Connection information for source MySQL
     */
    sourceConnectionInfo: pulumi.Input<MySqlConnectionInfoArgs>;
    /**
     * Connection information for target Azure Database for MySQL
     */
    targetConnectionInfo: pulumi.Input<MySqlConnectionInfoArgs>;
}
/**
 * migrateMySqlAzureDbForMySqlSyncTaskInputArgsProvideDefaults sets the appropriate defaults for MigrateMySqlAzureDbForMySqlSyncTaskInputArgs
 */
export function migrateMySqlAzureDbForMySqlSyncTaskInputArgsProvideDefaults(val: MigrateMySqlAzureDbForMySqlSyncTaskInputArgs): MigrateMySqlAzureDbForMySqlSyncTaskInputArgs {
    return {
        ...val,
        sourceConnectionInfo: pulumi.output(val.sourceConnectionInfo).apply(mySqlConnectionInfoArgsProvideDefaults),
        targetConnectionInfo: pulumi.output(val.targetConnectionInfo).apply(mySqlConnectionInfoArgsProvideDefaults),
    };
}

/**
 * Properties for the task that migrates MySQL databases to Azure Database for MySQL for online migrations
 */
export interface MigrateMySqlAzureDbForMySqlSyncTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Task input
     */
    input?: pulumi.Input<MigrateMySqlAzureDbForMySqlSyncTaskInputArgs>;
    /**
     * Task type.
     * Expected value is 'Migrate.MySql.AzureDbForMySql.Sync'.
     */
    taskType: pulumi.Input<"Migrate.MySql.AzureDbForMySql.Sync">;
}
/**
 * migrateMySqlAzureDbForMySqlSyncTaskPropertiesArgsProvideDefaults sets the appropriate defaults for MigrateMySqlAzureDbForMySqlSyncTaskPropertiesArgs
 */
export function migrateMySqlAzureDbForMySqlSyncTaskPropertiesArgsProvideDefaults(val: MigrateMySqlAzureDbForMySqlSyncTaskPropertiesArgs): MigrateMySqlAzureDbForMySqlSyncTaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(migrateMySqlAzureDbForMySqlSyncTaskInputArgsProvideDefaults) : undefined),
    };
}

/**
 * Properties for the task that migrates Oracle to Azure Database for PostgreSQL for online migrations
 */
export interface MigrateOracleAzureDbForPostgreSqlSyncTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Task input
     */
    input?: pulumi.Input<MigrateOracleAzureDbPostgreSqlSyncTaskInputArgs>;
    /**
     * Task type.
     * Expected value is 'Migrate.Oracle.AzureDbForPostgreSql.Sync'.
     */
    taskType: pulumi.Input<"Migrate.Oracle.AzureDbForPostgreSql.Sync">;
}
/**
 * migrateOracleAzureDbForPostgreSqlSyncTaskPropertiesArgsProvideDefaults sets the appropriate defaults for MigrateOracleAzureDbForPostgreSqlSyncTaskPropertiesArgs
 */
export function migrateOracleAzureDbForPostgreSqlSyncTaskPropertiesArgsProvideDefaults(val: MigrateOracleAzureDbForPostgreSqlSyncTaskPropertiesArgs): MigrateOracleAzureDbForPostgreSqlSyncTaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(migrateOracleAzureDbPostgreSqlSyncTaskInputArgsProvideDefaults) : undefined),
    };
}

/**
 * Database specific information for Oracle to Azure Database for PostgreSQL migration task inputs
 */
export interface MigrateOracleAzureDbPostgreSqlSyncDatabaseInputArgs {
    /**
     * How to handle object name casing: either Preserve or ToLower
     */
    caseManipulation?: pulumi.Input<string>;
    /**
     * Migration settings which tune the migration behavior
     */
    migrationSetting?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the migration pipeline
     */
    name?: pulumi.Input<string>;
    /**
     * Name of the source schema
     */
    schemaName?: pulumi.Input<string>;
    /**
     * Source settings to tune source endpoint migration behavior
     */
    sourceSetting?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Mapping of source to target tables
     */
    tableMap?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of target database. Note: Target database will be truncated before starting migration.
     */
    targetDatabaseName?: pulumi.Input<string>;
    /**
     * Target settings to tune target endpoint migration behavior
     */
    targetSetting?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * Input for the task that migrates Oracle databases to Azure Database for PostgreSQL for online migrations
 */
export interface MigrateOracleAzureDbPostgreSqlSyncTaskInputArgs {
    /**
     * Databases to migrate
     */
    selectedDatabases: pulumi.Input<pulumi.Input<MigrateOracleAzureDbPostgreSqlSyncDatabaseInputArgs>[]>;
    /**
     * Connection information for source Oracle
     */
    sourceConnectionInfo: pulumi.Input<OracleConnectionInfoArgs>;
    /**
     * Connection information for target Azure Database for PostgreSQL
     */
    targetConnectionInfo: pulumi.Input<PostgreSqlConnectionInfoArgs>;
}
/**
 * migrateOracleAzureDbPostgreSqlSyncTaskInputArgsProvideDefaults sets the appropriate defaults for MigrateOracleAzureDbPostgreSqlSyncTaskInputArgs
 */
export function migrateOracleAzureDbPostgreSqlSyncTaskInputArgsProvideDefaults(val: MigrateOracleAzureDbPostgreSqlSyncTaskInputArgs): MigrateOracleAzureDbPostgreSqlSyncTaskInputArgs {
    return {
        ...val,
        targetConnectionInfo: pulumi.output(val.targetConnectionInfo).apply(postgreSqlConnectionInfoArgsProvideDefaults),
    };
}

/**
 * Database specific information for PostgreSQL to Azure Database for PostgreSQL migration task inputs
 */
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputArgs {
    /**
     * Migration settings which tune the migration behavior
     */
    migrationSetting?: any;
    /**
     * Name of the database
     */
    name?: pulumi.Input<string>;
    /**
     * Tables selected for migration
     */
    selectedTables?: pulumi.Input<pulumi.Input<MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseTableInputArgs>[]>;
    /**
     * Source settings to tune source endpoint migration behavior
     */
    sourceSetting?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of target database. Note: Target database will be truncated before starting migration.
     */
    targetDatabaseName?: pulumi.Input<string>;
    /**
     * Target settings to tune target endpoint migration behavior
     */
    targetSetting?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * Selected tables for the migration
 */
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseTableInputArgs {
    /**
     * Name of the table to migrate
     */
    name?: pulumi.Input<string>;
}

/**
 * Input for the task that migrates PostgreSQL databases to Azure Database for PostgreSQL for online migrations
 */
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInputArgs {
    /**
     * encrypted key for secure fields
     */
    encryptedKeyForSecureFields?: pulumi.Input<string>;
    /**
     * Databases to migrate
     */
    selectedDatabases: pulumi.Input<pulumi.Input<MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputArgs>[]>;
    /**
     * Connection information for source PostgreSQL
     */
    sourceConnectionInfo: pulumi.Input<PostgreSqlConnectionInfoArgs>;
    /**
     * Connection information for target Azure Database for PostgreSQL
     */
    targetConnectionInfo: pulumi.Input<PostgreSqlConnectionInfoArgs>;
}
/**
 * migratePostgreSqlAzureDbForPostgreSqlSyncTaskInputArgsProvideDefaults sets the appropriate defaults for MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInputArgs
 */
export function migratePostgreSqlAzureDbForPostgreSqlSyncTaskInputArgsProvideDefaults(val: MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInputArgs): MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInputArgs {
    return {
        ...val,
        sourceConnectionInfo: pulumi.output(val.sourceConnectionInfo).apply(postgreSqlConnectionInfoArgsProvideDefaults),
        targetConnectionInfo: pulumi.output(val.targetConnectionInfo).apply(postgreSqlConnectionInfoArgsProvideDefaults),
    };
}

/**
 * Properties for the task that migrates PostgreSQL databases to Azure Database for PostgreSQL for online migrations
 */
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * DateTime in UTC when the task was created
     */
    createdOn?: pulumi.Input<string>;
    /**
     * Task input
     */
    input?: pulumi.Input<MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInputArgs>;
    /**
     * whether the task can be cloned or not
     */
    isCloneable?: pulumi.Input<boolean>;
    /**
     * task id
     */
    taskId?: pulumi.Input<string>;
    /**
     * Task type.
     * Expected value is 'Migrate.PostgreSql.AzureDbForPostgreSql.SyncV2'.
     */
    taskType: pulumi.Input<"Migrate.PostgreSql.AzureDbForPostgreSql.SyncV2">;
}
/**
 * migratePostgreSqlAzureDbForPostgreSqlSyncTaskPropertiesArgsProvideDefaults sets the appropriate defaults for MigratePostgreSqlAzureDbForPostgreSqlSyncTaskPropertiesArgs
 */
export function migratePostgreSqlAzureDbForPostgreSqlSyncTaskPropertiesArgsProvideDefaults(val: MigratePostgreSqlAzureDbForPostgreSqlSyncTaskPropertiesArgs): MigratePostgreSqlAzureDbForPostgreSqlSyncTaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(migratePostgreSqlAzureDbForPostgreSqlSyncTaskInputArgsProvideDefaults) : undefined),
    };
}

/**
 * Database specific information for SQL to Azure SQL DB migration task inputs
 */
export interface MigrateSqlServerSqlDbDatabaseInputArgs {
    /**
     * id of the database
     */
    id?: pulumi.Input<string>;
    /**
     * Whether to set database read only before migration
     */
    makeSourceDbReadOnly?: pulumi.Input<boolean>;
    /**
     * Name of the database
     */
    name?: pulumi.Input<string>;
    /**
     * Settings selected for DB schema migration.
     */
    schemaSetting?: any;
    /**
     * Mapping of source to target tables
     */
    tableMap?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of target database. Note: Target database will be truncated before starting migration.
     */
    targetDatabaseName?: pulumi.Input<string>;
}

/**
 * Database specific information for SQL to Azure SQL DB sync migration task inputs
 */
export interface MigrateSqlServerSqlDbSyncDatabaseInputArgs {
    /**
     * Unique identifier for database
     */
    id?: pulumi.Input<string>;
    /**
     * Migration settings which tune the migration behavior
     */
    migrationSetting?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of database
     */
    name?: pulumi.Input<string>;
    /**
     * Schema name to be migrated
     */
    schemaName?: pulumi.Input<string>;
    /**
     * Source settings to tune source endpoint migration behavior
     */
    sourceSetting?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Mapping of source to target tables
     */
    tableMap?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Target database name
     */
    targetDatabaseName?: pulumi.Input<string>;
    /**
     * Target settings to tune target endpoint migration behavior
     */
    targetSetting?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * Input for the task that migrates on-prem SQL Server databases to Azure SQL Database for online migrations
 */
export interface MigrateSqlServerSqlDbSyncTaskInputArgs {
    /**
     * Databases to migrate
     */
    selectedDatabases: pulumi.Input<pulumi.Input<MigrateSqlServerSqlDbSyncDatabaseInputArgs>[]>;
    /**
     * Information for connecting to source
     */
    sourceConnectionInfo: pulumi.Input<SqlConnectionInfoArgs>;
    /**
     * Information for connecting to target
     */
    targetConnectionInfo: pulumi.Input<SqlConnectionInfoArgs>;
    /**
     * Validation options
     */
    validationOptions?: pulumi.Input<MigrationValidationOptionsArgs>;
}
/**
 * migrateSqlServerSqlDbSyncTaskInputArgsProvideDefaults sets the appropriate defaults for MigrateSqlServerSqlDbSyncTaskInputArgs
 */
export function migrateSqlServerSqlDbSyncTaskInputArgsProvideDefaults(val: MigrateSqlServerSqlDbSyncTaskInputArgs): MigrateSqlServerSqlDbSyncTaskInputArgs {
    return {
        ...val,
        sourceConnectionInfo: pulumi.output(val.sourceConnectionInfo).apply(sqlConnectionInfoArgsProvideDefaults),
        targetConnectionInfo: pulumi.output(val.targetConnectionInfo).apply(sqlConnectionInfoArgsProvideDefaults),
    };
}

/**
 * Properties for the task that migrates on-prem SQL Server databases to Azure SQL Database for online migrations
 */
export interface MigrateSqlServerSqlDbSyncTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Task input
     */
    input?: pulumi.Input<MigrateSqlServerSqlDbSyncTaskInputArgs>;
    /**
     * Task type.
     * Expected value is 'Migrate.SqlServer.AzureSqlDb.Sync'.
     */
    taskType: pulumi.Input<"Migrate.SqlServer.AzureSqlDb.Sync">;
}
/**
 * migrateSqlServerSqlDbSyncTaskPropertiesArgsProvideDefaults sets the appropriate defaults for MigrateSqlServerSqlDbSyncTaskPropertiesArgs
 */
export function migrateSqlServerSqlDbSyncTaskPropertiesArgsProvideDefaults(val: MigrateSqlServerSqlDbSyncTaskPropertiesArgs): MigrateSqlServerSqlDbSyncTaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(migrateSqlServerSqlDbSyncTaskInputArgsProvideDefaults) : undefined),
    };
}

/**
 * Input for the task that migrates on-prem SQL Server databases to Azure SQL Database
 */
export interface MigrateSqlServerSqlDbTaskInputArgs {
    /**
     * encrypted key for secure fields
     */
    encryptedKeyForSecureFields?: pulumi.Input<string>;
    /**
     * Databases to migrate
     */
    selectedDatabases: pulumi.Input<pulumi.Input<MigrateSqlServerSqlDbDatabaseInputArgs>[]>;
    /**
     * Information for connecting to source
     */
    sourceConnectionInfo: pulumi.Input<SqlConnectionInfoArgs>;
    /**
     * Date and time relative to UTC when the migration was started on
     */
    startedOn?: pulumi.Input<string>;
    /**
     * Information for connecting to target
     */
    targetConnectionInfo: pulumi.Input<SqlConnectionInfoArgs>;
    /**
     * Options for enabling various post migration validations. Available options, 
     *  1.) Data Integrity Check: Performs a checksum based comparison on source and target tables after the migration to ensure the correctness of the data. 
     *  2.) Schema Validation: Performs a thorough schema comparison between the source and target tables and provides a list of differences between the source and target database, 3.) Query Analysis: Executes a set of queries picked up automatically either from the Query Plan Cache or Query Store and execute them and compares the execution time between the source and target database.
     */
    validationOptions?: pulumi.Input<MigrationValidationOptionsArgs>;
}
/**
 * migrateSqlServerSqlDbTaskInputArgsProvideDefaults sets the appropriate defaults for MigrateSqlServerSqlDbTaskInputArgs
 */
export function migrateSqlServerSqlDbTaskInputArgsProvideDefaults(val: MigrateSqlServerSqlDbTaskInputArgs): MigrateSqlServerSqlDbTaskInputArgs {
    return {
        ...val,
        sourceConnectionInfo: pulumi.output(val.sourceConnectionInfo).apply(sqlConnectionInfoArgsProvideDefaults),
        targetConnectionInfo: pulumi.output(val.targetConnectionInfo).apply(sqlConnectionInfoArgsProvideDefaults),
    };
}

/**
 * Properties for the task that migrates on-prem SQL Server databases to Azure SQL Database
 */
export interface MigrateSqlServerSqlDbTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * DateTime in UTC when the task was created
     */
    createdOn?: pulumi.Input<string>;
    /**
     * Task input
     */
    input?: pulumi.Input<MigrateSqlServerSqlDbTaskInputArgs>;
    /**
     * whether the task can be cloned or not
     */
    isCloneable?: pulumi.Input<boolean>;
    /**
     * task id
     */
    taskId?: pulumi.Input<string>;
    /**
     * Task type.
     * Expected value is 'Migrate.SqlServer.SqlDb'.
     */
    taskType: pulumi.Input<"Migrate.SqlServer.SqlDb">;
}
/**
 * migrateSqlServerSqlDbTaskPropertiesArgsProvideDefaults sets the appropriate defaults for MigrateSqlServerSqlDbTaskPropertiesArgs
 */
export function migrateSqlServerSqlDbTaskPropertiesArgsProvideDefaults(val: MigrateSqlServerSqlDbTaskPropertiesArgs): MigrateSqlServerSqlDbTaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(migrateSqlServerSqlDbTaskInputArgsProvideDefaults) : undefined),
    };
}

/**
 * Database specific information for SQL to Azure SQL DB Managed Instance migration task inputs
 */
export interface MigrateSqlServerSqlMIDatabaseInputArgs {
    /**
     * The list of backup files to be used in case of existing backups.
     */
    backupFilePaths?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Backup file share information for backing up this database.
     */
    backupFileShare?: pulumi.Input<FileShareArgs>;
    /**
     * id of the database
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the database
     */
    name: pulumi.Input<string>;
    /**
     * Name of the database at destination
     */
    restoreDatabaseName: pulumi.Input<string>;
}

/**
 * Input for task that migrates SQL Server databases to Azure SQL Database Managed Instance online scenario.
 */
export interface MigrateSqlServerSqlMISyncTaskInputArgs {
    /**
     * Azure Active Directory Application the DMS (classic) instance will use to connect to the target instance of Azure SQL Database Managed Instance and the Azure Storage Account
     */
    azureApp: pulumi.Input<AzureActiveDirectoryAppArgs>;
    /**
     * Backup file share information for all selected databases.
     */
    backupFileShare?: pulumi.Input<FileShareArgs>;
    /**
     * Number of database migrations to start in parallel
     */
    numberOfParallelDatabaseMigrations?: pulumi.Input<number>;
    /**
     * Databases to migrate
     */
    selectedDatabases: pulumi.Input<pulumi.Input<MigrateSqlServerSqlMIDatabaseInputArgs>[]>;
    /**
     * Connection information for source SQL Server
     */
    sourceConnectionInfo: pulumi.Input<SqlConnectionInfoArgs>;
    /**
     * Fully qualified resourceId of storage
     */
    storageResourceId: pulumi.Input<string>;
    /**
     * Connection information for Azure SQL Database Managed Instance
     */
    targetConnectionInfo: pulumi.Input<MiSqlConnectionInfoArgs>;
}
/**
 * migrateSqlServerSqlMISyncTaskInputArgsProvideDefaults sets the appropriate defaults for MigrateSqlServerSqlMISyncTaskInputArgs
 */
export function migrateSqlServerSqlMISyncTaskInputArgsProvideDefaults(val: MigrateSqlServerSqlMISyncTaskInputArgs): MigrateSqlServerSqlMISyncTaskInputArgs {
    return {
        ...val,
        sourceConnectionInfo: pulumi.output(val.sourceConnectionInfo).apply(sqlConnectionInfoArgsProvideDefaults),
    };
}

/**
 * Properties for task that migrates SQL Server databases to Azure SQL Database Managed Instance sync scenario
 */
export interface MigrateSqlServerSqlMISyncTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * DateTime in UTC when the task was created
     */
    createdOn?: pulumi.Input<string>;
    /**
     * Task input
     */
    input?: pulumi.Input<MigrateSqlServerSqlMISyncTaskInputArgs>;
    /**
     * Task type.
     * Expected value is 'Migrate.SqlServer.AzureSqlDbMI.Sync.LRS'.
     */
    taskType: pulumi.Input<"Migrate.SqlServer.AzureSqlDbMI.Sync.LRS">;
}
/**
 * migrateSqlServerSqlMISyncTaskPropertiesArgsProvideDefaults sets the appropriate defaults for MigrateSqlServerSqlMISyncTaskPropertiesArgs
 */
export function migrateSqlServerSqlMISyncTaskPropertiesArgsProvideDefaults(val: MigrateSqlServerSqlMISyncTaskPropertiesArgs): MigrateSqlServerSqlMISyncTaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(migrateSqlServerSqlMISyncTaskInputArgsProvideDefaults) : undefined),
    };
}

/**
 * Input for task that migrates SQL Server databases to Azure SQL Database Managed Instance.
 */
export interface MigrateSqlServerSqlMITaskInputArgs {
    /**
     * Azure Active Directory domain name in the format of 'contoso.com' for federated Azure AD or 'contoso.onmicrosoft.com' for managed domain, required if and only if Windows logins are selected
     */
    aadDomainName?: pulumi.Input<string>;
    /**
     * SAS URI of Azure Storage Account Container to be used for storing backup files.
     */
    backupBlobShare: pulumi.Input<BlobShareArgs>;
    /**
     * Backup file share information for all selected databases.
     */
    backupFileShare?: pulumi.Input<FileShareArgs>;
    /**
     * Backup Mode to specify whether to use existing backup or create new backup. If using existing backups, backup file paths are required to be provided in selectedDatabases.
     */
    backupMode?: pulumi.Input<string | enums.BackupMode>;
    /**
     * encrypted key for secure fields
     */
    encryptedKeyForSecureFields?: pulumi.Input<string>;
    /**
     * Agent Jobs to migrate.
     */
    selectedAgentJobs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Databases to migrate
     */
    selectedDatabases: pulumi.Input<pulumi.Input<MigrateSqlServerSqlMIDatabaseInputArgs>[]>;
    /**
     * Logins to migrate.
     */
    selectedLogins?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Information for connecting to source
     */
    sourceConnectionInfo: pulumi.Input<SqlConnectionInfoArgs>;
    /**
     * Date and time relative to UTC when the migration was started on
     */
    startedOn?: pulumi.Input<string>;
    /**
     * Information for connecting to target
     */
    targetConnectionInfo: pulumi.Input<SqlConnectionInfoArgs>;
}
/**
 * migrateSqlServerSqlMITaskInputArgsProvideDefaults sets the appropriate defaults for MigrateSqlServerSqlMITaskInputArgs
 */
export function migrateSqlServerSqlMITaskInputArgsProvideDefaults(val: MigrateSqlServerSqlMITaskInputArgs): MigrateSqlServerSqlMITaskInputArgs {
    return {
        ...val,
        sourceConnectionInfo: pulumi.output(val.sourceConnectionInfo).apply(sqlConnectionInfoArgsProvideDefaults),
        targetConnectionInfo: pulumi.output(val.targetConnectionInfo).apply(sqlConnectionInfoArgsProvideDefaults),
    };
}

/**
 * Properties for task that migrates SQL Server databases to Azure SQL Database Managed Instance
 */
export interface MigrateSqlServerSqlMITaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * DateTime in UTC when the task was created
     */
    createdOn?: pulumi.Input<string>;
    /**
     * Task input
     */
    input?: pulumi.Input<MigrateSqlServerSqlMITaskInputArgs>;
    /**
     * whether the task can be cloned or not
     */
    isCloneable?: pulumi.Input<boolean>;
    /**
     * parent task id
     */
    parentTaskId?: pulumi.Input<string>;
    /**
     * task id
     */
    taskId?: pulumi.Input<string>;
    /**
     * Task type.
     * Expected value is 'Migrate.SqlServer.AzureSqlDbMI'.
     */
    taskType: pulumi.Input<"Migrate.SqlServer.AzureSqlDbMI">;
}
/**
 * migrateSqlServerSqlMITaskPropertiesArgsProvideDefaults sets the appropriate defaults for MigrateSqlServerSqlMITaskPropertiesArgs
 */
export function migrateSqlServerSqlMITaskPropertiesArgsProvideDefaults(val: MigrateSqlServerSqlMITaskPropertiesArgs): MigrateSqlServerSqlMITaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(migrateSqlServerSqlMITaskInputArgsProvideDefaults) : undefined),
    };
}

/**
 * Input for task that migrates SSIS packages from SQL Server to Azure SQL Database Managed Instance.
 */
export interface MigrateSsisTaskInputArgs {
    /**
     * Information for connecting to source
     */
    sourceConnectionInfo: pulumi.Input<SqlConnectionInfoArgs>;
    /**
     * SSIS package migration information.
     */
    ssisMigrationInfo: pulumi.Input<SsisMigrationInfoArgs>;
    /**
     * Information for connecting to target
     */
    targetConnectionInfo: pulumi.Input<SqlConnectionInfoArgs>;
}
/**
 * migrateSsisTaskInputArgsProvideDefaults sets the appropriate defaults for MigrateSsisTaskInputArgs
 */
export function migrateSsisTaskInputArgsProvideDefaults(val: MigrateSsisTaskInputArgs): MigrateSsisTaskInputArgs {
    return {
        ...val,
        sourceConnectionInfo: pulumi.output(val.sourceConnectionInfo).apply(sqlConnectionInfoArgsProvideDefaults),
        targetConnectionInfo: pulumi.output(val.targetConnectionInfo).apply(sqlConnectionInfoArgsProvideDefaults),
    };
}

/**
 * Properties for task that migrates SSIS packages from SQL Server databases to Azure SQL Database Managed Instance.
 */
export interface MigrateSsisTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Task input
     */
    input?: pulumi.Input<MigrateSsisTaskInputArgs>;
    /**
     * Task type.
     * Expected value is 'Migrate.Ssis'.
     */
    taskType: pulumi.Input<"Migrate.Ssis">;
}
/**
 * migrateSsisTaskPropertiesArgsProvideDefaults sets the appropriate defaults for MigrateSsisTaskPropertiesArgs
 */
export function migrateSsisTaskPropertiesArgsProvideDefaults(val: MigrateSsisTaskPropertiesArgs): MigrateSsisTaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(migrateSsisTaskInputArgsProvideDefaults) : undefined),
    };
}

/**
 * Types of validations to run after the migration
 */
export interface MigrationValidationOptionsArgs {
    /**
     * Allows to perform a checksum based data integrity validation between source and target for the selected database / tables .
     */
    enableDataIntegrityValidation?: pulumi.Input<boolean>;
    /**
     * Allows to perform a quick and intelligent query analysis by retrieving queries from the source database and executes them in the target. The result will have execution statistics for executions in source and target databases for the extracted queries.
     */
    enableQueryAnalysisValidation?: pulumi.Input<boolean>;
    /**
     * Allows to compare the schema information between source and target.
     */
    enableSchemaValidation?: pulumi.Input<boolean>;
}

/**
 * Mongo Connection
 */
export interface MongoConnectionInformationArgs {
    /**
     * ConnectionString to connect to Mongo.
     */
    connectionString?: pulumi.Input<string>;
    /**
     * Host of mongo connection.
     */
    host?: pulumi.Input<string>;
    /**
     * Password to connect to Mongo.
     */
    password?: pulumi.Input<string>;
    /**
     * Port of mongo connection.
     */
    port?: pulumi.Input<number>;
    /**
     * Whether to UseSsl or UseTls to connect to Mongo. Default is true.
     */
    useSsl?: pulumi.Input<boolean>;
    /**
     * User name to connect to Mongo.
     */
    userName?: pulumi.Input<string>;
}

/**
 * Describes how an individual MongoDB collection should be migrated
 */
export interface MongoDbCollectionSettingsArgs {
    /**
     * Whether the migrator is allowed to drop the target collection in the course of performing a migration. The default is true.
     */
    canDelete?: pulumi.Input<boolean>;
    /**
     * Describes a MongoDB shard key
     */
    shardKey?: pulumi.Input<MongoDbShardKeySettingArgs>;
    /**
     * The RUs that should be configured on a CosmosDB target, or null to use the default. This has no effect on non-CosmosDB targets.
     */
    targetRUs?: pulumi.Input<number>;
}

/**
 * Describes a connection to a MongoDB data source
 */
export interface MongoDbConnectionInfoArgs {
    /**
     * Additional connection settings
     */
    additionalSettings?: pulumi.Input<string>;
    /**
     * Authentication type to use for connection
     */
    authentication?: pulumi.Input<string | enums.AuthenticationType>;
    /**
     * A MongoDB connection string or blob container URL. The user name and password can be specified here or in the userName and password properties
     */
    connectionString: pulumi.Input<string>;
    /**
     * Data source 
     */
    dataSource?: pulumi.Input<string>;
    /**
     * Whether to encrypt the connection
     */
    encryptConnection?: pulumi.Input<boolean>;
    enforceSSL?: pulumi.Input<boolean>;
    /**
     * Password credential.
     */
    password?: pulumi.Input<string>;
    /**
     * port for server
     */
    port?: pulumi.Input<number>;
    /**
     * server brand version
     */
    serverBrandVersion?: pulumi.Input<string>;
    /**
     * name of the server
     */
    serverName?: pulumi.Input<string>;
    /**
     * server version
     */
    serverVersion?: pulumi.Input<string>;
    /**
     * Whether to trust the server certificate
     */
    trustServerCertificate?: pulumi.Input<boolean>;
    /**
     * Type of connection info
     * Expected value is 'MongoDbConnectionInfo'.
     */
    type: pulumi.Input<"MongoDbConnectionInfo">;
    /**
     * User name
     */
    userName?: pulumi.Input<string>;
}
/**
 * mongoDbConnectionInfoArgsProvideDefaults sets the appropriate defaults for MongoDbConnectionInfoArgs
 */
export function mongoDbConnectionInfoArgsProvideDefaults(val: MongoDbConnectionInfoArgs): MongoDbConnectionInfoArgs {
    return {
        ...val,
        trustServerCertificate: (val.trustServerCertificate) ?? false,
    };
}

/**
 * Describes how an individual MongoDB database should be migrated
 */
export interface MongoDbDatabaseSettingsArgs {
    /**
     * The collections on the source database to migrate to the target. The keys are the unqualified names of the collections.
     */
    collections: pulumi.Input<{[key: string]: pulumi.Input<MongoDbCollectionSettingsArgs>}>;
    /**
     * The RUs that should be configured on a CosmosDB target, or null to use the default, or 0 if throughput should not be provisioned for the database. This has no effect on non-CosmosDB targets.
     */
    targetRUs?: pulumi.Input<number>;
}

/**
 * Describes how a MongoDB data migration should be performed
 */
export interface MongoDbMigrationSettingsArgs {
    /**
     * The RU limit on a CosmosDB target that collections will be temporarily increased to (if lower) during the initial copy of a migration, from 10,000 to 1,000,000, or 0 to use the default boost (which is generally the maximum), or null to not boost the RUs. This setting has no effect on non-CosmosDB targets.
     */
    boostRUs?: pulumi.Input<number>;
    /**
     * The databases on the source cluster to migrate to the target. The keys are the names of the databases.
     */
    databases: pulumi.Input<{[key: string]: pulumi.Input<MongoDbDatabaseSettingsArgs>}>;
    /**
     * Describes how changes will be replicated from the source to the target. The default is OneTime.
     */
    replication?: pulumi.Input<string | enums.MongoDbReplication>;
    /**
     * Settings used to connect to the source cluster
     */
    source: pulumi.Input<MongoDbConnectionInfoArgs>;
    /**
     * Settings used to connect to the target cluster
     */
    target: pulumi.Input<MongoDbConnectionInfoArgs>;
    /**
     * Settings used to limit the resource usage of the migration
     */
    throttling?: pulumi.Input<MongoDbThrottlingSettingsArgs>;
}
/**
 * mongoDbMigrationSettingsArgsProvideDefaults sets the appropriate defaults for MongoDbMigrationSettingsArgs
 */
export function mongoDbMigrationSettingsArgsProvideDefaults(val: MongoDbMigrationSettingsArgs): MongoDbMigrationSettingsArgs {
    return {
        ...val,
        source: pulumi.output(val.source).apply(mongoDbConnectionInfoArgsProvideDefaults),
        target: pulumi.output(val.target).apply(mongoDbConnectionInfoArgsProvideDefaults),
    };
}

/**
 * Describes a field reference within a MongoDB shard key
 */
export interface MongoDbShardKeyFieldArgs {
    /**
     * The name of the field
     */
    name: pulumi.Input<string>;
    /**
     * The field ordering
     */
    order: pulumi.Input<string | enums.MongoDbShardKeyOrder>;
}

/**
 * Describes a MongoDB shard key
 */
export interface MongoDbShardKeySettingArgs {
    /**
     * The fields within the shard key
     */
    fields: pulumi.Input<pulumi.Input<MongoDbShardKeyFieldArgs>[]>;
    /**
     * Whether the shard key is unique
     */
    isUnique?: pulumi.Input<boolean>;
}

/**
 * Specifies resource limits for the migration
 */
export interface MongoDbThrottlingSettingsArgs {
    /**
     * The maximum number of work items (e.g. collection copies) that will be processed in parallel
     */
    maxParallelism?: pulumi.Input<number>;
    /**
     * The percentage of CPU time that the migrator will try to avoid using, from 0 to 100
     */
    minFreeCpu?: pulumi.Input<number>;
    /**
     * The number of megabytes of RAM that the migrator will try to avoid using
     */
    minFreeMemoryMb?: pulumi.Input<number>;
}

/**
 * Mongo source and target database and collection details.
 */
export interface MongoMigrationCollectionArgs {
    /**
     * Source collection name.
     */
    sourceCollection?: pulumi.Input<string>;
    /**
     * Source database name.
     */
    sourceDatabase?: pulumi.Input<string>;
    /**
     * Target collection name.
     */
    targetCollection?: pulumi.Input<string>;
    /**
     * Target database name.
     */
    targetDatabase?: pulumi.Input<string>;
}

/**
 * Information for connecting to MySQL server
 */
export interface MySqlConnectionInfoArgs {
    /**
     * Additional connection settings
     */
    additionalSettings?: pulumi.Input<string>;
    /**
     * Authentication type to use for connection
     */
    authentication?: pulumi.Input<string | enums.AuthenticationType>;
    /**
     * Data source 
     */
    dataSource?: pulumi.Input<string>;
    /**
     * Whether to encrypt the connection
     */
    encryptConnection?: pulumi.Input<boolean>;
    /**
     * Password credential.
     */
    password?: pulumi.Input<string>;
    /**
     * Port for Server
     */
    port: pulumi.Input<number>;
    /**
     * Name of the server
     */
    serverName: pulumi.Input<string>;
    /**
     * Type of connection info
     * Expected value is 'MySqlConnectionInfo'.
     */
    type: pulumi.Input<"MySqlConnectionInfo">;
    /**
     * User name
     */
    userName?: pulumi.Input<string>;
}
/**
 * mySqlConnectionInfoArgsProvideDefaults sets the appropriate defaults for MySqlConnectionInfoArgs
 */
export function mySqlConnectionInfoArgsProvideDefaults(val: MySqlConnectionInfoArgs): MySqlConnectionInfoArgs {
    return {
        ...val,
        encryptConnection: (val.encryptConnection) ?? true,
    };
}

/**
 * Information for connecting to Oracle server
 */
export interface OracleConnectionInfoArgs {
    /**
     * Authentication type to use for connection
     */
    authentication?: pulumi.Input<string | enums.AuthenticationType>;
    /**
     * EZConnect or TNSName connection string.
     */
    dataSource: pulumi.Input<string>;
    /**
     * Password credential.
     */
    password?: pulumi.Input<string>;
    /**
     * port for server
     */
    port?: pulumi.Input<number>;
    /**
     * name of the server
     */
    serverName?: pulumi.Input<string>;
    /**
     * server version
     */
    serverVersion?: pulumi.Input<string>;
    /**
     * Type of connection info
     * Expected value is 'OracleConnectionInfo'.
     */
    type: pulumi.Input<"OracleConnectionInfo">;
    /**
     * User name
     */
    userName?: pulumi.Input<string>;
}

/**
 * Information for connecting to PostgreSQL server
 */
export interface PostgreSqlConnectionInfoArgs {
    /**
     * Additional connection settings
     */
    additionalSettings?: pulumi.Input<string>;
    /**
     * Authentication type to use for connection
     */
    authentication?: pulumi.Input<string | enums.AuthenticationType>;
    /**
     * Data source 
     */
    dataSource?: pulumi.Input<string>;
    /**
     * Name of the database
     */
    databaseName?: pulumi.Input<string>;
    /**
     * Whether to encrypt the connection
     */
    encryptConnection?: pulumi.Input<boolean>;
    /**
     * Password credential.
     */
    password?: pulumi.Input<string>;
    /**
     * Port for Server
     */
    port: pulumi.Input<number>;
    /**
     * server brand version
     */
    serverBrandVersion?: pulumi.Input<string>;
    /**
     * Name of the server
     */
    serverName: pulumi.Input<string>;
    /**
     * server version
     */
    serverVersion?: pulumi.Input<string>;
    /**
     * Whether to trust the server certificate
     */
    trustServerCertificate?: pulumi.Input<boolean>;
    /**
     * Type of connection info
     * Expected value is 'PostgreSqlConnectionInfo'.
     */
    type: pulumi.Input<"PostgreSqlConnectionInfo">;
    /**
     * User name
     */
    userName?: pulumi.Input<string>;
}
/**
 * postgreSqlConnectionInfoArgsProvideDefaults sets the appropriate defaults for PostgreSqlConnectionInfoArgs
 */
export function postgreSqlConnectionInfoArgsProvideDefaults(val: PostgreSqlConnectionInfoArgs): PostgreSqlConnectionInfoArgs {
    return {
        ...val,
        encryptConnection: (val.encryptConnection) ?? true,
        trustServerCertificate: (val.trustServerCertificate) ?? false,
    };
}

/**
 * Base class for file properties.
 */
export interface ProjectFilePropertiesArgs {
    /**
     * Optional File extension. If submitted it should not have a leading period and must match the extension from filePath.
     */
    extension?: pulumi.Input<string>;
    /**
     * Relative path of this file resource. This property can be set when creating or updating the file resource.
     */
    filePath?: pulumi.Input<string>;
    /**
     * File content type. This property can be modified to reflect the file content type.
     */
    mediaType?: pulumi.Input<string>;
}

/**
 * Info for certificate to be exported for TDE enabled databases.
 */
export interface SelectedCertificateInputArgs {
    /**
     * Name of certificate to be exported.
     */
    certificateName: pulumi.Input<string>;
    /**
     * Password to use for encrypting the exported certificate.
     */
    password: pulumi.Input<string>;
}

/**
 * An Azure SKU instance
 */
export interface ServiceSkuArgs {
    /**
     * The capacity of the SKU, if it supports scaling
     */
    capacity?: pulumi.Input<number>;
    /**
     * The SKU family, used when the service has multiple performance classes within a tier, such as 'A', 'D', etc. for virtual machines
     */
    family?: pulumi.Input<string>;
    /**
     * The unique name of the SKU, such as 'P3'
     */
    name?: pulumi.Input<string>;
    /**
     * The size of the SKU, used when the name alone does not denote a service size or when a SKU has multiple performance classes within a family, e.g. 'A1' for virtual machines
     */
    size?: pulumi.Input<string>;
    /**
     * The tier of the SKU, such as 'Basic', 'General Purpose', or 'Business Critical'
     */
    tier?: pulumi.Input<string>;
}

/**
 * Information for connecting to SQL database server
 */
export interface SqlConnectionInfoArgs {
    /**
     * Additional connection settings
     */
    additionalSettings?: pulumi.Input<string>;
    /**
     * Authentication type to use for connection
     */
    authentication?: pulumi.Input<string | enums.AuthenticationType>;
    /**
     * Data source in the format Protocol:MachineName\SQLServerInstanceName,PortNumber
     */
    dataSource: pulumi.Input<string>;
    /**
     * Whether to encrypt the connection
     */
    encryptConnection?: pulumi.Input<boolean>;
    /**
     * Password credential.
     */
    password?: pulumi.Input<string>;
    /**
     * Server platform type for connection
     */
    platform?: pulumi.Input<string | enums.SqlSourcePlatform>;
    /**
     * Port for Server
     */
    port?: pulumi.Input<number>;
    /**
     * Represents the ID of an HTTP resource represented by an Azure resource provider.
     */
    resourceId?: pulumi.Input<string>;
    /**
     * server brand version
     */
    serverBrandVersion?: pulumi.Input<string>;
    /**
     * name of the server
     */
    serverName?: pulumi.Input<string>;
    /**
     * server version
     */
    serverVersion?: pulumi.Input<string>;
    /**
     * Whether to trust the server certificate
     */
    trustServerCertificate?: pulumi.Input<boolean>;
    /**
     * Type of connection info
     * Expected value is 'SqlConnectionInfo'.
     */
    type: pulumi.Input<"SqlConnectionInfo">;
    /**
     * User name
     */
    userName?: pulumi.Input<string>;
}
/**
 * sqlConnectionInfoArgsProvideDefaults sets the appropriate defaults for SqlConnectionInfoArgs
 */
export function sqlConnectionInfoArgsProvideDefaults(val: SqlConnectionInfoArgs): SqlConnectionInfoArgs {
    return {
        ...val,
        encryptConnection: (val.encryptConnection) ?? true,
        trustServerCertificate: (val.trustServerCertificate) ?? false,
    };
}

/**
 * Source SQL Connection
 */
export interface SqlConnectionInformationArgs {
    /**
     * Authentication type.
     */
    authentication?: pulumi.Input<string>;
    /**
     * Data source.
     */
    dataSource?: pulumi.Input<string>;
    /**
     * Whether to encrypt connection or not.
     */
    encryptConnection?: pulumi.Input<boolean>;
    /**
     * Password to connect to source SQL.
     */
    password?: pulumi.Input<string>;
    /**
     * Whether to trust server certificate or not.
     */
    trustServerCertificate?: pulumi.Input<boolean>;
    /**
     * User name to connect to source SQL.
     */
    userName?: pulumi.Input<string>;
}

/**
 * SSIS migration info with SSIS store type, overwrite policy.
 */
export interface SsisMigrationInfoArgs {
    /**
     * The overwrite option for the SSIS environment migration
     */
    environmentOverwriteOption?: pulumi.Input<string | enums.SsisMigrationOverwriteOption>;
    /**
     * The overwrite option for the SSIS project migration
     */
    projectOverwriteOption?: pulumi.Input<string | enums.SsisMigrationOverwriteOption>;
    /**
     * The SSIS store type of source, only SSIS catalog is supported now in DMS (classic)
     */
    ssisStoreType?: pulumi.Input<string | enums.SsisStoreType>;
}

/**
 * Properties for task that validates migration input for SQL to Azure SQL DB sync migrations
 */
export interface ValidateMigrationInputSqlServerSqlDbSyncTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Task input
     */
    input?: pulumi.Input<ValidateSyncMigrationInputSqlServerTaskInputArgs>;
    /**
     * Task type.
     * Expected value is 'ValidateMigrationInput.SqlServer.SqlDb.Sync'.
     */
    taskType: pulumi.Input<"ValidateMigrationInput.SqlServer.SqlDb.Sync">;
}
/**
 * validateMigrationInputSqlServerSqlDbSyncTaskPropertiesArgsProvideDefaults sets the appropriate defaults for ValidateMigrationInputSqlServerSqlDbSyncTaskPropertiesArgs
 */
export function validateMigrationInputSqlServerSqlDbSyncTaskPropertiesArgsProvideDefaults(val: ValidateMigrationInputSqlServerSqlDbSyncTaskPropertiesArgs): ValidateMigrationInputSqlServerSqlDbSyncTaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(validateSyncMigrationInputSqlServerTaskInputArgsProvideDefaults) : undefined),
    };
}

/**
 * Input for task that migrates SQL Server databases to Azure SQL Database Managed Instance online scenario.
 */
export interface ValidateMigrationInputSqlServerSqlMISyncTaskInputArgs {
    /**
     * Azure Active Directory Application the DMS (classic) instance will use to connect to the target instance of Azure SQL Database Managed Instance and the Azure Storage Account
     */
    azureApp: pulumi.Input<AzureActiveDirectoryAppArgs>;
    /**
     * Backup file share information for all selected databases.
     */
    backupFileShare?: pulumi.Input<FileShareArgs>;
    /**
     * Databases to migrate
     */
    selectedDatabases: pulumi.Input<pulumi.Input<MigrateSqlServerSqlMIDatabaseInputArgs>[]>;
    /**
     * Connection information for source SQL Server
     */
    sourceConnectionInfo: pulumi.Input<SqlConnectionInfoArgs>;
    /**
     * Fully qualified resourceId of storage
     */
    storageResourceId: pulumi.Input<string>;
    /**
     * Connection information for Azure SQL Database Managed Instance
     */
    targetConnectionInfo: pulumi.Input<MiSqlConnectionInfoArgs>;
}
/**
 * validateMigrationInputSqlServerSqlMISyncTaskInputArgsProvideDefaults sets the appropriate defaults for ValidateMigrationInputSqlServerSqlMISyncTaskInputArgs
 */
export function validateMigrationInputSqlServerSqlMISyncTaskInputArgsProvideDefaults(val: ValidateMigrationInputSqlServerSqlMISyncTaskInputArgs): ValidateMigrationInputSqlServerSqlMISyncTaskInputArgs {
    return {
        ...val,
        sourceConnectionInfo: pulumi.output(val.sourceConnectionInfo).apply(sqlConnectionInfoArgsProvideDefaults),
    };
}

/**
 * Properties for task that validates migration input for SQL to Azure SQL Database Managed Instance sync scenario
 */
export interface ValidateMigrationInputSqlServerSqlMISyncTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Task input
     */
    input?: pulumi.Input<ValidateMigrationInputSqlServerSqlMISyncTaskInputArgs>;
    /**
     * Task type.
     * Expected value is 'ValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRS'.
     */
    taskType: pulumi.Input<"ValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRS">;
}
/**
 * validateMigrationInputSqlServerSqlMISyncTaskPropertiesArgsProvideDefaults sets the appropriate defaults for ValidateMigrationInputSqlServerSqlMISyncTaskPropertiesArgs
 */
export function validateMigrationInputSqlServerSqlMISyncTaskPropertiesArgsProvideDefaults(val: ValidateMigrationInputSqlServerSqlMISyncTaskPropertiesArgs): ValidateMigrationInputSqlServerSqlMISyncTaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(validateMigrationInputSqlServerSqlMISyncTaskInputArgsProvideDefaults) : undefined),
    };
}

/**
 * Input for task that validates migration input for SQL to Azure SQL Managed Instance
 */
export interface ValidateMigrationInputSqlServerSqlMITaskInputArgs {
    /**
     * SAS URI of Azure Storage Account Container to be used for storing backup files.
     */
    backupBlobShare: pulumi.Input<BlobShareArgs>;
    /**
     * Backup file share information for all selected databases.
     */
    backupFileShare?: pulumi.Input<FileShareArgs>;
    /**
     * Backup Mode to specify whether to use existing backup or create new backup.
     */
    backupMode?: pulumi.Input<string | enums.BackupMode>;
    /**
     * Databases to migrate
     */
    selectedDatabases: pulumi.Input<pulumi.Input<MigrateSqlServerSqlMIDatabaseInputArgs>[]>;
    /**
     * Logins to migrate
     */
    selectedLogins?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Information for connecting to source
     */
    sourceConnectionInfo: pulumi.Input<SqlConnectionInfoArgs>;
    /**
     * Information for connecting to target
     */
    targetConnectionInfo: pulumi.Input<SqlConnectionInfoArgs>;
}
/**
 * validateMigrationInputSqlServerSqlMITaskInputArgsProvideDefaults sets the appropriate defaults for ValidateMigrationInputSqlServerSqlMITaskInputArgs
 */
export function validateMigrationInputSqlServerSqlMITaskInputArgsProvideDefaults(val: ValidateMigrationInputSqlServerSqlMITaskInputArgs): ValidateMigrationInputSqlServerSqlMITaskInputArgs {
    return {
        ...val,
        sourceConnectionInfo: pulumi.output(val.sourceConnectionInfo).apply(sqlConnectionInfoArgsProvideDefaults),
        targetConnectionInfo: pulumi.output(val.targetConnectionInfo).apply(sqlConnectionInfoArgsProvideDefaults),
    };
}

/**
 * Properties for task that validates migration input for SQL to Azure SQL Database Managed Instance
 */
export interface ValidateMigrationInputSqlServerSqlMITaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Task input
     */
    input?: pulumi.Input<ValidateMigrationInputSqlServerSqlMITaskInputArgs>;
    /**
     * Task type.
     * Expected value is 'ValidateMigrationInput.SqlServer.AzureSqlDbMI'.
     */
    taskType: pulumi.Input<"ValidateMigrationInput.SqlServer.AzureSqlDbMI">;
}
/**
 * validateMigrationInputSqlServerSqlMITaskPropertiesArgsProvideDefaults sets the appropriate defaults for ValidateMigrationInputSqlServerSqlMITaskPropertiesArgs
 */
export function validateMigrationInputSqlServerSqlMITaskPropertiesArgsProvideDefaults(val: ValidateMigrationInputSqlServerSqlMITaskPropertiesArgs): ValidateMigrationInputSqlServerSqlMITaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(validateMigrationInputSqlServerSqlMITaskInputArgsProvideDefaults) : undefined),
    };
}

/**
 * Properties for the task that validates a migration between MongoDB data sources
 */
export interface ValidateMongoDbTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Describes how a MongoDB data migration should be performed
     */
    input?: pulumi.Input<MongoDbMigrationSettingsArgs>;
    /**
     * Task type.
     * Expected value is 'Validate.MongoDb'.
     */
    taskType: pulumi.Input<"Validate.MongoDb">;
}
/**
 * validateMongoDbTaskPropertiesArgsProvideDefaults sets the appropriate defaults for ValidateMongoDbTaskPropertiesArgs
 */
export function validateMongoDbTaskPropertiesArgsProvideDefaults(val: ValidateMongoDbTaskPropertiesArgs): ValidateMongoDbTaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(mongoDbMigrationSettingsArgsProvideDefaults) : undefined),
    };
}

/**
 * Properties for the task that validates a migration for Oracle to Azure Database for PostgreSQL for online migrations
 */
export interface ValidateOracleAzureDbForPostgreSqlSyncTaskPropertiesArgs {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Input for the task that migrates Oracle databases to Azure Database for PostgreSQL for online migrations
     */
    input?: pulumi.Input<MigrateOracleAzureDbPostgreSqlSyncTaskInputArgs>;
    /**
     * Task type.
     * Expected value is 'Validate.Oracle.AzureDbPostgreSql.Sync'.
     */
    taskType: pulumi.Input<"Validate.Oracle.AzureDbPostgreSql.Sync">;
}
/**
 * validateOracleAzureDbForPostgreSqlSyncTaskPropertiesArgsProvideDefaults sets the appropriate defaults for ValidateOracleAzureDbForPostgreSqlSyncTaskPropertiesArgs
 */
export function validateOracleAzureDbForPostgreSqlSyncTaskPropertiesArgsProvideDefaults(val: ValidateOracleAzureDbForPostgreSqlSyncTaskPropertiesArgs): ValidateOracleAzureDbForPostgreSqlSyncTaskPropertiesArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(migrateOracleAzureDbPostgreSqlSyncTaskInputArgsProvideDefaults) : undefined),
    };
}

/**
 * Input for task that validates migration input for SQL sync migrations
 */
export interface ValidateSyncMigrationInputSqlServerTaskInputArgs {
    /**
     * Databases to migrate
     */
    selectedDatabases: pulumi.Input<pulumi.Input<MigrateSqlServerSqlDbSyncDatabaseInputArgs>[]>;
    /**
     * Information for connecting to source SQL server
     */
    sourceConnectionInfo: pulumi.Input<SqlConnectionInfoArgs>;
    /**
     * Information for connecting to target
     */
    targetConnectionInfo: pulumi.Input<SqlConnectionInfoArgs>;
}
/**
 * validateSyncMigrationInputSqlServerTaskInputArgsProvideDefaults sets the appropriate defaults for ValidateSyncMigrationInputSqlServerTaskInputArgs
 */
export function validateSyncMigrationInputSqlServerTaskInputArgsProvideDefaults(val: ValidateSyncMigrationInputSqlServerTaskInputArgs): ValidateSyncMigrationInputSqlServerTaskInputArgs {
    return {
        ...val,
        sourceConnectionInfo: pulumi.output(val.sourceConnectionInfo).apply(sqlConnectionInfoArgsProvideDefaults),
        targetConnectionInfo: pulumi.output(val.targetConnectionInfo).apply(sqlConnectionInfoArgsProvideDefaults),
    };
}
