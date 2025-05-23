import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Azure Active Directory Application
 */
export interface AzureActiveDirectoryAppResponse {
    /**
     * Key used to authenticate to the Azure Active Directory Application
     */
    appKey?: string;
    /**
     * Application ID of the Azure Active Directory Application
     */
    applicationId?: string;
    /**
     * Ignore checking azure permissions on the AAD app
     */
    ignoreAzurePermissions?: boolean;
    /**
     * Tenant id of the customer
     */
    tenantId?: string;
}

/**
 * Information of the backup file
 */
export interface BackupFileInfoResponse {
    /**
     * Sequence number of the backup file in the backup set
     */
    familySequenceNumber?: number;
    /**
     * Location of the backup file in shared folder
     */
    fileLocation?: string;
    /**
     * Status of the backup file during migration
     */
    status?: string;
}

/**
 * Information of backup set
 */
export interface BackupSetInfoResponse {
    /**
     * Date and time that the backup operation finished
     */
    backupFinishedDate?: string;
    /**
     * Id for the set of backup files
     */
    backupSetId?: string;
    /**
     * Date and time that the backup operation began
     */
    backupStartDate?: string;
    /**
     * Enum of the different backup types
     */
    backupType?: string;
    /**
     * Name of the database to which the backup set belongs
     */
    databaseName?: string;
    /**
     * First log sequence number of the backup file
     */
    firstLsn?: string;
    /**
     * Whether the backup set is restored or not
     */
    isBackupRestored?: boolean;
    /**
     * Last log sequence number of the backup file
     */
    lastLsn?: string;
    /**
     * Last modified time of the backup file in share location
     */
    lastModifiedTime?: string;
    /**
     * List of files in the backup set
     */
    listOfBackupFiles?: BackupFileInfoResponse[];
}

/**
 * Blob container storage information.
 */
export interface BlobShareResponse {
    /**
     * SAS URI of Azure Storage Account Container.
     */
    sasUri?: string;
}

/**
 * Properties for the task that validates the connection to and provides information about a MongoDB server
 */
export interface ConnectToMongoDbTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Describes a connection to a MongoDB data source
     */
    input?: MongoDbConnectionInfoResponse;
    /**
     * An array containing a single MongoDbClusterInfo object
     */
    output: MongoDbClusterInfoResponse[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task type.
     * Expected value is 'Connect.MongoDb'.
     */
    taskType: "Connect.MongoDb";
}
/**
 * connectToMongoDbTaskPropertiesResponseProvideDefaults sets the appropriate defaults for ConnectToMongoDbTaskPropertiesResponse
 */
export function connectToMongoDbTaskPropertiesResponseProvideDefaults(val: ConnectToMongoDbTaskPropertiesResponse): ConnectToMongoDbTaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? mongoDbConnectionInfoResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Input for the task that validates MySQL database connection
 */
export interface ConnectToSourceMySqlTaskInputResponse {
    /**
     * Permission group for validations
     */
    checkPermissionsGroup?: string;
    /**
     * Flag for whether or not the migration is offline
     */
    isOfflineMigration?: boolean;
    /**
     * Information for connecting to MySQL source
     */
    sourceConnectionInfo: MySqlConnectionInfoResponse;
    /**
     * Target Platform for the migration
     */
    targetPlatform?: string;
}
/**
 * connectToSourceMySqlTaskInputResponseProvideDefaults sets the appropriate defaults for ConnectToSourceMySqlTaskInputResponse
 */
export function connectToSourceMySqlTaskInputResponseProvideDefaults(val: ConnectToSourceMySqlTaskInputResponse): ConnectToSourceMySqlTaskInputResponse {
    return {
        ...val,
        isOfflineMigration: (val.isOfflineMigration) ?? false,
        sourceConnectionInfo: mySqlConnectionInfoResponseProvideDefaults(val.sourceConnectionInfo),
    };
}

/**
 * Properties for the task that validates MySQL database connection
 */
export interface ConnectToSourceMySqlTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Task input
     */
    input?: ConnectToSourceMySqlTaskInputResponse;
    /**
     * Task output. This is ignored if submitted.
     */
    output: ConnectToSourceNonSqlTaskOutputResponse[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task type.
     * Expected value is 'ConnectToSource.MySql'.
     */
    taskType: "ConnectToSource.MySql";
}
/**
 * connectToSourceMySqlTaskPropertiesResponseProvideDefaults sets the appropriate defaults for ConnectToSourceMySqlTaskPropertiesResponse
 */
export function connectToSourceMySqlTaskPropertiesResponseProvideDefaults(val: ConnectToSourceMySqlTaskPropertiesResponse): ConnectToSourceMySqlTaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? connectToSourceMySqlTaskInputResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Output for connect to MySQL type source
 */
export interface ConnectToSourceNonSqlTaskOutputResponse {
    /**
     * List of databases on the server
     */
    databases: string[];
    /**
     * Result identifier
     */
    id: string;
    /**
     * Server properties
     */
    serverProperties: ServerPropertiesResponse;
    /**
     * Server brand version
     */
    sourceServerBrandVersion: string;
    /**
     * Validation errors associated with the task
     */
    validationErrors: ReportableExceptionResponse[];
}

/**
 * Input for the task that validates Oracle database connection
 */
export interface ConnectToSourceOracleSyncTaskInputResponse {
    /**
     * Information for connecting to Oracle source
     */
    sourceConnectionInfo: OracleConnectionInfoResponse;
}

/**
 * Output for the task that validates Oracle database connection
 */
export interface ConnectToSourceOracleSyncTaskOutputResponse {
    /**
     * List of schemas on source server
     */
    databases: string[];
    /**
     * Source server brand version
     */
    sourceServerBrandVersion: string;
    /**
     * Version of the source server
     */
    sourceServerVersion: string;
    /**
     * Validation errors associated with the task
     */
    validationErrors: ReportableExceptionResponse[];
}

/**
 * Properties for the task that validates Oracle database connection
 */
export interface ConnectToSourceOracleSyncTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Task input
     */
    input?: ConnectToSourceOracleSyncTaskInputResponse;
    /**
     * Task output. This is ignored if submitted.
     */
    output: ConnectToSourceOracleSyncTaskOutputResponse[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task type.
     * Expected value is 'ConnectToSource.Oracle.Sync'.
     */
    taskType: "ConnectToSource.Oracle.Sync";
}

/**
 * Input for the task that validates connection to PostgreSQL and source server requirements
 */
export interface ConnectToSourcePostgreSqlSyncTaskInputResponse {
    /**
     * Connection information for source PostgreSQL server
     */
    sourceConnectionInfo: PostgreSqlConnectionInfoResponse;
}
/**
 * connectToSourcePostgreSqlSyncTaskInputResponseProvideDefaults sets the appropriate defaults for ConnectToSourcePostgreSqlSyncTaskInputResponse
 */
export function connectToSourcePostgreSqlSyncTaskInputResponseProvideDefaults(val: ConnectToSourcePostgreSqlSyncTaskInputResponse): ConnectToSourcePostgreSqlSyncTaskInputResponse {
    return {
        ...val,
        sourceConnectionInfo: postgreSqlConnectionInfoResponseProvideDefaults(val.sourceConnectionInfo),
    };
}

/**
 * Output for the task that validates connection to PostgreSQL and source server requirements
 */
export interface ConnectToSourcePostgreSqlSyncTaskOutputResponse {
    /**
     * List of databases on source server
     */
    databases: string[];
    /**
     * Result identifier
     */
    id: string;
    /**
     * Source server brand version
     */
    sourceServerBrandVersion: string;
    /**
     * Version of the source server
     */
    sourceServerVersion: string;
    /**
     * Validation errors associated with the task
     */
    validationErrors: ReportableExceptionResponse[];
}

/**
 * Properties for the task that validates connection to PostgreSQL server and source server requirements for online migration
 */
export interface ConnectToSourcePostgreSqlSyncTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Task input
     */
    input?: ConnectToSourcePostgreSqlSyncTaskInputResponse;
    /**
     * Task output. This is ignored if submitted.
     */
    output: ConnectToSourcePostgreSqlSyncTaskOutputResponse[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task type.
     * Expected value is 'ConnectToSource.PostgreSql.Sync'.
     */
    taskType: "ConnectToSource.PostgreSql.Sync";
}
/**
 * connectToSourcePostgreSqlSyncTaskPropertiesResponseProvideDefaults sets the appropriate defaults for ConnectToSourcePostgreSqlSyncTaskPropertiesResponse
 */
export function connectToSourcePostgreSqlSyncTaskPropertiesResponseProvideDefaults(val: ConnectToSourcePostgreSqlSyncTaskPropertiesResponse): ConnectToSourcePostgreSqlSyncTaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? connectToSourcePostgreSqlSyncTaskInputResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Properties for the task that validates connection to SQL Server and source server requirements for online migration
 */
export interface ConnectToSourceSqlServerSyncTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Task input
     */
    input?: ConnectToSourceSqlServerTaskInputResponse;
    /**
     * Task output. This is ignored if submitted.
     */
    output: (ConnectToSourceSqlServerTaskOutputAgentJobLevelResponse | ConnectToSourceSqlServerTaskOutputDatabaseLevelResponse | ConnectToSourceSqlServerTaskOutputLoginLevelResponse | ConnectToSourceSqlServerTaskOutputTaskLevelResponse)[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task type.
     * Expected value is 'ConnectToSource.SqlServer.Sync'.
     */
    taskType: "ConnectToSource.SqlServer.Sync";
}
/**
 * connectToSourceSqlServerSyncTaskPropertiesResponseProvideDefaults sets the appropriate defaults for ConnectToSourceSqlServerSyncTaskPropertiesResponse
 */
export function connectToSourceSqlServerSyncTaskPropertiesResponseProvideDefaults(val: ConnectToSourceSqlServerSyncTaskPropertiesResponse): ConnectToSourceSqlServerSyncTaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? connectToSourceSqlServerTaskInputResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Input for the task that validates connection to SQL Server and also validates source server requirements
 */
export interface ConnectToSourceSqlServerTaskInputResponse {
    /**
     * Permission group for validations
     */
    checkPermissionsGroup?: string;
    /**
     * Flag for whether to collect agent jobs from source server.
     */
    collectAgentJobs?: boolean;
    /**
     * Flag for whether to collect databases from source server.
     */
    collectDatabases?: boolean;
    /**
     * Flag for whether to collect logins from source server.
     */
    collectLogins?: boolean;
    /**
     * Flag for whether to collect TDE Certificate names from source server.
     */
    collectTdeCertificateInfo?: boolean;
    /**
     * encrypted key for secure fields
     */
    encryptedKeyForSecureFields?: string;
    /**
     * Connection information for Source SQL Server
     */
    sourceConnectionInfo: SqlConnectionInfoResponse;
    /**
     * Flag for whether to validate SSIS catalog is reachable on the source server.
     */
    validateSsisCatalogOnly?: boolean;
}
/**
 * connectToSourceSqlServerTaskInputResponseProvideDefaults sets the appropriate defaults for ConnectToSourceSqlServerTaskInputResponse
 */
export function connectToSourceSqlServerTaskInputResponseProvideDefaults(val: ConnectToSourceSqlServerTaskInputResponse): ConnectToSourceSqlServerTaskInputResponse {
    return {
        ...val,
        collectAgentJobs: (val.collectAgentJobs) ?? false,
        collectDatabases: (val.collectDatabases) ?? true,
        collectLogins: (val.collectLogins) ?? false,
        collectTdeCertificateInfo: (val.collectTdeCertificateInfo) ?? false,
        sourceConnectionInfo: sqlConnectionInfoResponseProvideDefaults(val.sourceConnectionInfo),
        validateSsisCatalogOnly: (val.validateSsisCatalogOnly) ?? false,
    };
}

/**
 * Agent Job level output for the task that validates connection to SQL Server and also validates source server requirements
 */
export interface ConnectToSourceSqlServerTaskOutputAgentJobLevelResponse {
    /**
     * Result identifier
     */
    id: string;
    /**
     * The state of the original Agent Job.
     */
    isEnabled: boolean;
    /**
     * The type of Agent Job.
     */
    jobCategory: string;
    /**
     * The owner of the Agent Job
     */
    jobOwner: string;
    /**
     * UTC Date and time when the Agent Job was last executed.
     */
    lastExecutedOn: string;
    /**
     * Information about eligibility of agent job for migration.
     */
    migrationEligibility: MigrationEligibilityInfoResponse;
    /**
     * Agent Job name
     */
    name: string;
    /**
     * Type of result - database level or task level
     * Expected value is 'AgentJobLevelOutput'.
     */
    resultType: "AgentJobLevelOutput";
    /**
     * Validation errors
     */
    validationErrors: ReportableExceptionResponse[];
}

/**
 * Database level output for the task that validates connection to SQL Server and also validates source server requirements
 */
export interface ConnectToSourceSqlServerTaskOutputDatabaseLevelResponse {
    /**
     * SQL Server compatibility level of database
     */
    compatibilityLevel: string;
    /**
     * The list of database files
     */
    databaseFiles: DatabaseFileInfoResponse[];
    /**
     * State of the database
     */
    databaseState: string;
    /**
     * Result identifier
     */
    id: string;
    /**
     * Database name
     */
    name: string;
    /**
     * Type of result - database level or task level
     * Expected value is 'DatabaseLevelOutput'.
     */
    resultType: "DatabaseLevelOutput";
    /**
     * Size of the file in megabytes
     */
    sizeMB: number;
}

/**
 * Login level output for the task that validates connection to SQL Server and also validates source server requirements
 */
export interface ConnectToSourceSqlServerTaskOutputLoginLevelResponse {
    /**
     * The default database for the login.
     */
    defaultDatabase: string;
    /**
     * Result identifier
     */
    id: string;
    /**
     * The state of the login.
     */
    isEnabled: boolean;
    /**
     * The type of login.
     */
    loginType: string;
    /**
     * Information about eligibility of login for migration.
     */
    migrationEligibility: MigrationEligibilityInfoResponse;
    /**
     * Login name.
     */
    name: string;
    /**
     * Type of result - database level or task level
     * Expected value is 'LoginLevelOutput'.
     */
    resultType: "LoginLevelOutput";
}

/**
 * Task level output for the task that validates connection to SQL Server and also validates source server requirements
 */
export interface ConnectToSourceSqlServerTaskOutputTaskLevelResponse {
    /**
     * Source agent jobs as a map from agent job name to id.
     */
    agentJobs: {[key: string]: string};
    /**
     * Mapping from database name to TDE certificate name, if applicable
     */
    databaseTdeCertificateMapping: {[key: string]: string};
    /**
     * Source databases as a map from database name to database id
     */
    databases: {[key: string]: string};
    /**
     * Result identifier
     */
    id: string;
    /**
     * Source logins as a map from login name to login id.
     */
    logins: {[key: string]: string};
    /**
     * Type of result - database level or task level
     * Expected value is 'TaskLevelOutput'.
     */
    resultType: "TaskLevelOutput";
    /**
     * Source server brand version
     */
    sourceServerBrandVersion: string;
    /**
     * Source server version
     */
    sourceServerVersion: string;
    /**
     * Validation errors
     */
    validationErrors: ReportableExceptionResponse[];
}

/**
 * Properties for the task that validates connection to SQL Server and also validates source server requirements
 */
export interface ConnectToSourceSqlServerTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Task input
     */
    input?: ConnectToSourceSqlServerTaskInputResponse;
    /**
     * Task output. This is ignored if submitted.
     */
    output: (ConnectToSourceSqlServerTaskOutputAgentJobLevelResponse | ConnectToSourceSqlServerTaskOutputDatabaseLevelResponse | ConnectToSourceSqlServerTaskOutputLoginLevelResponse | ConnectToSourceSqlServerTaskOutputTaskLevelResponse)[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task id 
     */
    taskId?: string;
    /**
     * Task type.
     * Expected value is 'ConnectToSource.SqlServer'.
     */
    taskType: "ConnectToSource.SqlServer";
}
/**
 * connectToSourceSqlServerTaskPropertiesResponseProvideDefaults sets the appropriate defaults for ConnectToSourceSqlServerTaskPropertiesResponse
 */
export function connectToSourceSqlServerTaskPropertiesResponseProvideDefaults(val: ConnectToSourceSqlServerTaskPropertiesResponse): ConnectToSourceSqlServerTaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? connectToSourceSqlServerTaskInputResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Input for the task that validates connection to Azure Database for MySQL and target server requirements
 */
export interface ConnectToTargetAzureDbForMySqlTaskInputResponse {
    /**
     * Flag for whether or not the migration is offline
     */
    isOfflineMigration?: boolean;
    /**
     * Connection information for source MySQL server
     */
    sourceConnectionInfo: MySqlConnectionInfoResponse;
    /**
     * Connection information for target Azure Database for MySQL server
     */
    targetConnectionInfo: MySqlConnectionInfoResponse;
}
/**
 * connectToTargetAzureDbForMySqlTaskInputResponseProvideDefaults sets the appropriate defaults for ConnectToTargetAzureDbForMySqlTaskInputResponse
 */
export function connectToTargetAzureDbForMySqlTaskInputResponseProvideDefaults(val: ConnectToTargetAzureDbForMySqlTaskInputResponse): ConnectToTargetAzureDbForMySqlTaskInputResponse {
    return {
        ...val,
        isOfflineMigration: (val.isOfflineMigration) ?? false,
        sourceConnectionInfo: mySqlConnectionInfoResponseProvideDefaults(val.sourceConnectionInfo),
        targetConnectionInfo: mySqlConnectionInfoResponseProvideDefaults(val.targetConnectionInfo),
    };
}

/**
 * Output for the task that validates connection to Azure Database for MySQL and target server requirements
 */
export interface ConnectToTargetAzureDbForMySqlTaskOutputResponse {
    /**
     * List of databases on target server
     */
    databases: string[];
    /**
     * Result identifier
     */
    id: string;
    /**
     * Version of the target server
     */
    serverVersion: string;
    /**
     * Target server brand version
     */
    targetServerBrandVersion: string;
    /**
     * Validation errors associated with the task
     */
    validationErrors: ReportableExceptionResponse[];
}

/**
 * Properties for the task that validates connection to Azure Database for MySQL and target server requirements
 */
export interface ConnectToTargetAzureDbForMySqlTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Task input
     */
    input?: ConnectToTargetAzureDbForMySqlTaskInputResponse;
    /**
     * Task output. This is ignored if submitted.
     */
    output: ConnectToTargetAzureDbForMySqlTaskOutputResponse[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task type.
     * Expected value is 'ConnectToTarget.AzureDbForMySql'.
     */
    taskType: "ConnectToTarget.AzureDbForMySql";
}
/**
 * connectToTargetAzureDbForMySqlTaskPropertiesResponseProvideDefaults sets the appropriate defaults for ConnectToTargetAzureDbForMySqlTaskPropertiesResponse
 */
export function connectToTargetAzureDbForMySqlTaskPropertiesResponseProvideDefaults(val: ConnectToTargetAzureDbForMySqlTaskPropertiesResponse): ConnectToTargetAzureDbForMySqlTaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? connectToTargetAzureDbForMySqlTaskInputResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Input for the task that validates connection to Azure Database for PostgreSQL and target server requirements
 */
export interface ConnectToTargetAzureDbForPostgreSqlSyncTaskInputResponse {
    /**
     * Connection information for source PostgreSQL server
     */
    sourceConnectionInfo: PostgreSqlConnectionInfoResponse;
    /**
     * Connection information for target Azure Database for PostgreSQL server
     */
    targetConnectionInfo: PostgreSqlConnectionInfoResponse;
}
/**
 * connectToTargetAzureDbForPostgreSqlSyncTaskInputResponseProvideDefaults sets the appropriate defaults for ConnectToTargetAzureDbForPostgreSqlSyncTaskInputResponse
 */
export function connectToTargetAzureDbForPostgreSqlSyncTaskInputResponseProvideDefaults(val: ConnectToTargetAzureDbForPostgreSqlSyncTaskInputResponse): ConnectToTargetAzureDbForPostgreSqlSyncTaskInputResponse {
    return {
        ...val,
        sourceConnectionInfo: postgreSqlConnectionInfoResponseProvideDefaults(val.sourceConnectionInfo),
        targetConnectionInfo: postgreSqlConnectionInfoResponseProvideDefaults(val.targetConnectionInfo),
    };
}

/**
 * Output for the task that validates connection to Azure Database for PostgreSQL and target server requirements
 */
export interface ConnectToTargetAzureDbForPostgreSqlSyncTaskOutputResponse {
    /**
     * List of databases on target server
     */
    databases: string[];
    /**
     * Result identifier
     */
    id: string;
    /**
     * Target server brand version
     */
    targetServerBrandVersion: string;
    /**
     * Version of the target server
     */
    targetServerVersion: string;
    /**
     * Validation errors associated with the task
     */
    validationErrors: ReportableExceptionResponse[];
}

/**
 * Properties for the task that validates connection to Azure Database For PostgreSQL server and target server requirements for online migration
 */
export interface ConnectToTargetAzureDbForPostgreSqlSyncTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Task input
     */
    input?: ConnectToTargetAzureDbForPostgreSqlSyncTaskInputResponse;
    /**
     * Task output. This is ignored if submitted.
     */
    output: ConnectToTargetAzureDbForPostgreSqlSyncTaskOutputResponse[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task type.
     * Expected value is 'ConnectToTarget.AzureDbForPostgreSql.Sync'.
     */
    taskType: "ConnectToTarget.AzureDbForPostgreSql.Sync";
}
/**
 * connectToTargetAzureDbForPostgreSqlSyncTaskPropertiesResponseProvideDefaults sets the appropriate defaults for ConnectToTargetAzureDbForPostgreSqlSyncTaskPropertiesResponse
 */
export function connectToTargetAzureDbForPostgreSqlSyncTaskPropertiesResponseProvideDefaults(val: ConnectToTargetAzureDbForPostgreSqlSyncTaskPropertiesResponse): ConnectToTargetAzureDbForPostgreSqlSyncTaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? connectToTargetAzureDbForPostgreSqlSyncTaskInputResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Input for the task that validates connection to Azure Database for PostgreSQL and target server requirements for Oracle source.
 */
export interface ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInputResponse {
    /**
     * Connection information for target Azure Database for PostgreSQL server
     */
    targetConnectionInfo: PostgreSqlConnectionInfoResponse;
}
/**
 * connectToTargetOracleAzureDbForPostgreSqlSyncTaskInputResponseProvideDefaults sets the appropriate defaults for ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInputResponse
 */
export function connectToTargetOracleAzureDbForPostgreSqlSyncTaskInputResponseProvideDefaults(val: ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInputResponse): ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInputResponse {
    return {
        ...val,
        targetConnectionInfo: postgreSqlConnectionInfoResponseProvideDefaults(val.targetConnectionInfo),
    };
}

/**
 * Output for the task that validates connection to Azure Database for PostgreSQL and target server requirements for Oracle source.
 */
export interface ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskOutputResponse {
    /**
     * Mapping of schemas per database
     */
    databaseSchemaMap?: ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskOutputResponseDatabaseSchemaMap[];
    /**
     * List of databases on target server
     */
    databases: string[];
    /**
     * Target server brand version
     */
    targetServerBrandVersion: string;
    /**
     * Version of the target server
     */
    targetServerVersion: string;
    /**
     * Validation errors associated with the task
     */
    validationErrors: ReportableExceptionResponse[];
}

export interface ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskOutputResponseDatabaseSchemaMap {
    database?: string;
    schemas?: string[];
}

/**
 * Properties for the task that validates connection to Azure Database For PostgreSQL server and target server requirements for online migration for Oracle source.
 */
export interface ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Task input
     */
    input?: ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInputResponse;
    /**
     * Task output. This is ignored if submitted.
     */
    output: ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskOutputResponse[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task type.
     * Expected value is 'ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync'.
     */
    taskType: "ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync";
}
/**
 * connectToTargetOracleAzureDbForPostgreSqlSyncTaskPropertiesResponseProvideDefaults sets the appropriate defaults for ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse
 */
export function connectToTargetOracleAzureDbForPostgreSqlSyncTaskPropertiesResponseProvideDefaults(val: ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse): ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? connectToTargetOracleAzureDbForPostgreSqlSyncTaskInputResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Input for the task that validates connection to SQL DB and target server requirements
 */
export interface ConnectToTargetSqlDbTaskInputResponse {
    /**
     * Boolean flag indicating whether to query object counts for each database on the target server
     */
    queryObjectCounts?: boolean;
    /**
     * Connection information for target SQL DB
     */
    targetConnectionInfo: SqlConnectionInfoResponse;
}
/**
 * connectToTargetSqlDbTaskInputResponseProvideDefaults sets the appropriate defaults for ConnectToTargetSqlDbTaskInputResponse
 */
export function connectToTargetSqlDbTaskInputResponseProvideDefaults(val: ConnectToTargetSqlDbTaskInputResponse): ConnectToTargetSqlDbTaskInputResponse {
    return {
        ...val,
        targetConnectionInfo: sqlConnectionInfoResponseProvideDefaults(val.targetConnectionInfo),
    };
}

/**
 * Output for the task that validates connection to SQL DB and target server requirements
 */
export interface ConnectToTargetSqlDbTaskOutputResponse {
    /**
     * Source databases as a map from database name to database id
     */
    databases: {[key: string]: string};
    /**
     * Result identifier
     */
    id: string;
    /**
     * Target server brand version
     */
    targetServerBrandVersion: string;
    /**
     * Version of the target server
     */
    targetServerVersion: string;
}

/**
 * Properties for the task that validates connection to SQL DB and target server requirements
 */
export interface ConnectToTargetSqlDbTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * DateTime in UTC when the task was created
     */
    createdOn?: string;
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Task input
     */
    input?: ConnectToTargetSqlDbTaskInputResponse;
    /**
     * Task output. This is ignored if submitted.
     */
    output: ConnectToTargetSqlDbTaskOutputResponse[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task type.
     * Expected value is 'ConnectToTarget.SqlDb'.
     */
    taskType: "ConnectToTarget.SqlDb";
}
/**
 * connectToTargetSqlDbTaskPropertiesResponseProvideDefaults sets the appropriate defaults for ConnectToTargetSqlDbTaskPropertiesResponse
 */
export function connectToTargetSqlDbTaskPropertiesResponseProvideDefaults(val: ConnectToTargetSqlDbTaskPropertiesResponse): ConnectToTargetSqlDbTaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? connectToTargetSqlDbTaskInputResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Input for the task that validates connection to Azure SQL Database Managed Instance online scenario.
 */
export interface ConnectToTargetSqlMISyncTaskInputResponse {
    /**
     * Azure Active Directory Application the DMS (classic) instance will use to connect to the target instance of Azure SQL Database Managed Instance and the Azure Storage Account
     */
    azureApp: AzureActiveDirectoryAppResponse;
    /**
     * Connection information for Azure SQL Database Managed Instance
     */
    targetConnectionInfo: MiSqlConnectionInfoResponse;
}

/**
 * Output for the task that validates connection to Azure SQL Database Managed Instance.
 */
export interface ConnectToTargetSqlMISyncTaskOutputResponse {
    /**
     * Target server brand version
     */
    targetServerBrandVersion: string;
    /**
     * Target server version
     */
    targetServerVersion: string;
    /**
     * Validation errors
     */
    validationErrors: ReportableExceptionResponse[];
}

/**
 * Properties for the task that validates connection to Azure SQL Database Managed Instance
 */
export interface ConnectToTargetSqlMISyncTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Task input
     */
    input?: ConnectToTargetSqlMISyncTaskInputResponse;
    /**
     * Task output. This is ignored if submitted.
     */
    output: ConnectToTargetSqlMISyncTaskOutputResponse[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task type.
     * Expected value is 'ConnectToTarget.AzureSqlDbMI.Sync.LRS'.
     */
    taskType: "ConnectToTarget.AzureSqlDbMI.Sync.LRS";
}

/**
 * Input for the task that validates connection to Azure SQL Database Managed Instance.
 */
export interface ConnectToTargetSqlMITaskInputResponse {
    /**
     * Flag for whether to collect agent jobs from target SQL MI server.
     */
    collectAgentJobs?: boolean;
    /**
     * Flag for whether to collect logins from target SQL MI server.
     */
    collectLogins?: boolean;
    /**
     * Connection information for target SQL Server
     */
    targetConnectionInfo: SqlConnectionInfoResponse;
    /**
     * Flag for whether to validate SSIS catalog is reachable on the target SQL MI server.
     */
    validateSsisCatalogOnly?: boolean;
}
/**
 * connectToTargetSqlMITaskInputResponseProvideDefaults sets the appropriate defaults for ConnectToTargetSqlMITaskInputResponse
 */
export function connectToTargetSqlMITaskInputResponseProvideDefaults(val: ConnectToTargetSqlMITaskInputResponse): ConnectToTargetSqlMITaskInputResponse {
    return {
        ...val,
        collectAgentJobs: (val.collectAgentJobs) ?? true,
        collectLogins: (val.collectLogins) ?? true,
        targetConnectionInfo: sqlConnectionInfoResponseProvideDefaults(val.targetConnectionInfo),
        validateSsisCatalogOnly: (val.validateSsisCatalogOnly) ?? false,
    };
}

/**
 * Output for the task that validates connection to Azure SQL Database Managed Instance.
 */
export interface ConnectToTargetSqlMITaskOutputResponse {
    /**
     * List of agent jobs on the target server.
     */
    agentJobs: string[];
    /**
     * Result identifier
     */
    id: string;
    /**
     * List of logins on the target server.
     */
    logins: string[];
    /**
     * Target server brand version
     */
    targetServerBrandVersion: string;
    /**
     * Target server version
     */
    targetServerVersion: string;
    /**
     * Validation errors
     */
    validationErrors: ReportableExceptionResponse[];
}

/**
 * Properties for the task that validates connection to Azure SQL Database Managed Instance
 */
export interface ConnectToTargetSqlMITaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Task input
     */
    input?: ConnectToTargetSqlMITaskInputResponse;
    /**
     * Task output. This is ignored if submitted.
     */
    output: ConnectToTargetSqlMITaskOutputResponse[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task type.
     * Expected value is 'ConnectToTarget.AzureSqlDbMI'.
     */
    taskType: "ConnectToTarget.AzureSqlDbMI";
}
/**
 * connectToTargetSqlMITaskPropertiesResponseProvideDefaults sets the appropriate defaults for ConnectToTargetSqlMITaskPropertiesResponse
 */
export function connectToTargetSqlMITaskPropertiesResponseProvideDefaults(val: ConnectToTargetSqlMITaskPropertiesResponse): ConnectToTargetSqlMITaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? connectToTargetSqlMITaskInputResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Input for the task that validates connection to Azure SQL DB and target server requirements
 */
export interface ConnectToTargetSqlSqlDbSyncTaskInputResponse {
    /**
     * Connection information for source SQL Server
     */
    sourceConnectionInfo: SqlConnectionInfoResponse;
    /**
     * Connection information for target SQL DB
     */
    targetConnectionInfo: SqlConnectionInfoResponse;
}
/**
 * connectToTargetSqlSqlDbSyncTaskInputResponseProvideDefaults sets the appropriate defaults for ConnectToTargetSqlSqlDbSyncTaskInputResponse
 */
export function connectToTargetSqlSqlDbSyncTaskInputResponseProvideDefaults(val: ConnectToTargetSqlSqlDbSyncTaskInputResponse): ConnectToTargetSqlSqlDbSyncTaskInputResponse {
    return {
        ...val,
        sourceConnectionInfo: sqlConnectionInfoResponseProvideDefaults(val.sourceConnectionInfo),
        targetConnectionInfo: sqlConnectionInfoResponseProvideDefaults(val.targetConnectionInfo),
    };
}

/**
 * Properties for the task that validates connection to SQL DB and target server requirements for online migration
 */
export interface ConnectToTargetSqlSqlDbSyncTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Task input
     */
    input?: ConnectToTargetSqlSqlDbSyncTaskInputResponse;
    /**
     * Task output. This is ignored if submitted.
     */
    output: ConnectToTargetSqlDbTaskOutputResponse[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task type.
     * Expected value is 'ConnectToTarget.SqlDb.Sync'.
     */
    taskType: "ConnectToTarget.SqlDb.Sync";
}
/**
 * connectToTargetSqlSqlDbSyncTaskPropertiesResponseProvideDefaults sets the appropriate defaults for ConnectToTargetSqlSqlDbSyncTaskPropertiesResponse
 */
export function connectToTargetSqlSqlDbSyncTaskPropertiesResponseProvideDefaults(val: ConnectToTargetSqlSqlDbSyncTaskPropertiesResponse): ConnectToTargetSqlSqlDbSyncTaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? connectToTargetSqlSqlDbSyncTaskInputResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Details on progress of ADF copy activity
 */
export interface CopyProgressDetailsResponse {
    /**
     * Copy Duration in seconds
     */
    copyDuration: number;
    /**
     * Copy Start
     */
    copyStart: string;
    /**
     * Copy throughput in KBps
     */
    copyThroughput: number;
    /**
     * Bytes read
     */
    dataRead: number;
    /**
     * Bytes written
     */
    dataWritten: number;
    /**
     * Type of parallel copy (Dynamic range, Physical partition, none).
     */
    parallelCopyType: string;
    /**
     * Rows Copied
     */
    rowsCopied: number;
    /**
     * Rows read
     */
    rowsRead: number;
    /**
     * Status of the Copy activity (InProgress, Succeeded, Failed, Canceled).
     */
    status: string;
    /**
     * Table Name
     */
    tableName: string;
    /**
     * The degree of parallelization.
     */
    usedParallelCopies: number;
}

/**
 * Results for checksum based Data Integrity validation results
 */
export interface DataIntegrityValidationResultResponse {
    /**
     * List of failed table names of source and target pair
     */
    failedObjects?: {[key: string]: string};
    /**
     * List of errors that happened while performing data integrity validation
     */
    validationErrors?: ValidationErrorResponse;
}

/**
 * Basic summary of a data item migration
 */
export interface DataItemMigrationSummaryResultResponse {
    /**
     * Migration end time
     */
    endedOn: string;
    /**
     * Wildcard string prefix to use for querying all errors of the item
     */
    errorPrefix: string;
    /**
     * Number of successfully completed items
     */
    itemsCompletedCount: number;
    /**
     * Number of items
     */
    itemsCount: number;
    /**
     * Name of the item
     */
    name: string;
    /**
     * Wildcard string prefix to use for querying all sub-tem results of the item
     */
    resultPrefix: string;
    /**
     * Migration start time
     */
    startedOn: string;
    /**
     * Current state of migration
     */
    state: string;
    /**
     * Status message
     */
    statusMessage: string;
}

/**
 * Information about backup files when existing backup mode is used.
 */
export interface DatabaseBackupInfoResponse {
    /**
     * The list of backup files for the current database.
     */
    backupFiles: string[];
    /**
     * Date and time when the backup operation finished.
     */
    backupFinishDate: string;
    /**
     * Backup Type.
     */
    backupType: string;
    /**
     * Database name.
     */
    databaseName: string;
    /**
     * Number of files in the backup set.
     */
    familyCount: number;
    /**
     * Whether the backup set is compressed
     */
    isCompressed: boolean;
    /**
     * Database was damaged when backed up, but the backup operation was requested to continue despite errors.
     */
    isDamaged: boolean;
    /**
     * Position of current database backup in the file.
     */
    position: number;
}

/**
 * Database file specific information
 */
export interface DatabaseFileInfoResponse {
    /**
     * Name of the database
     */
    databaseName?: string;
    /**
     * Database file type
     */
    fileType?: string;
    /**
     * Unique identifier for database file
     */
    id?: string;
    /**
     * Logical name of the file
     */
    logicalName?: string;
    /**
     * Operating-system full path of the file
     */
    physicalFullName?: string;
    /**
     * Suggested full path of the file for restoring
     */
    restoreFullName?: string;
    /**
     * Size of the file in megabytes
     */
    sizeMB?: number;
}

/**
 * Project Database Details
 */
export interface DatabaseInfoResponse {
    /**
     * Name of the database
     */
    sourceDatabaseName: string;
}

/**
 * Database Migration Resource properties for SQL database.
 */
export interface DatabaseMigrationPropertiesSqlDbResponse {
    /**
     * Database migration end time.
     */
    endedOn: string;
    /**
     *
     * Expected value is 'SqlDb'.
     */
    kind: "SqlDb";
    /**
     * Error details in case of migration failure.
     */
    migrationFailureError: ErrorInfoResponse;
    /**
     * ID for current migration operation.
     */
    migrationOperationId?: string;
    /**
     * Resource Id of the Migration Service.
     */
    migrationService?: string;
    /**
     * Migration status.
     */
    migrationStatus: string;
    /**
     * Detailed migration status. Not included by default.
     */
    migrationStatusDetails: SqlDbMigrationStatusDetailsResponse;
    /**
     * Offline configuration.
     */
    offlineConfiguration: SqlDbOfflineConfigurationResponse;
    /**
     * Error message for migration provisioning failure, if any.
     */
    provisioningError?: string;
    /**
     * Provisioning State of migration. ProvisioningState as Succeeded implies that validations have been performed and migration has started.
     */
    provisioningState: string;
    /**
     * Resource Id of the target resource.
     */
    scope?: string;
    /**
     * Name of the source database.
     */
    sourceDatabaseName?: string;
    /**
     * Name of the source sql server.
     */
    sourceServerName: string;
    /**
     * Source SQL Server connection details.
     */
    sourceSqlConnection?: SqlConnectionInformationResponse;
    /**
     * Database migration start time.
     */
    startedOn: string;
    /**
     * List of tables to copy.
     */
    tableList?: string[];
    /**
     * Database collation to be used for the target database.
     */
    targetDatabaseCollation?: string;
    /**
     * Target SQL DB connection details.
     */
    targetSqlConnection?: SqlConnectionInformationResponse;
}

/**
 * Summary of database results in the migration
 */
export interface DatabaseSummaryResultResponse {
    /**
     * Migration end time
     */
    endedOn: string;
    /**
     * Wildcard string prefix to use for querying all errors of the item
     */
    errorPrefix: string;
    /**
     * Number of successfully completed items
     */
    itemsCompletedCount: number;
    /**
     * Number of items
     */
    itemsCount: number;
    /**
     * Name of the item
     */
    name: string;
    /**
     * Wildcard string prefix to use for querying all sub-tem results of the item
     */
    resultPrefix: string;
    /**
     * Size of the database in megabytes
     */
    sizeMB: number;
    /**
     * Migration start time
     */
    startedOn: string;
    /**
     * Current state of migration
     */
    state: string;
    /**
     * Status message
     */
    statusMessage: string;
}

/**
 * Table properties
 */
export interface DatabaseTableResponse {
    /**
     * Indicates whether table is empty or not
     */
    hasRows: boolean;
    /**
     * Schema-qualified name of the table
     */
    name: string;
}

/**
 * Error details
 */
export interface ErrorInfoResponse {
    /**
     * Error code.
     */
    code: string;
    /**
     * Error message.
     */
    message: string;
}

/**
 * Description about the errors happen while performing migration validation
 */
export interface ExecutionStatisticsResponse {
    /**
     * CPU Time in millisecond(s) for the query execution
     */
    cpuTimeMs?: number;
    /**
     * Time taken in millisecond(s) for executing the query
     */
    elapsedTimeMs?: number;
    /**
     * No. of query executions
     */
    executionCount?: number;
    /**
     * Indicates whether the query resulted in an error
     */
    hasErrors?: boolean;
    /**
     * List of sql Errors
     */
    sqlErrors?: string[];
    /**
     * Dictionary of sql query execution wait types and the respective statistics
     */
    waitStats?: {[key: string]: WaitStatisticsResponse};
}

/**
 * File share information with Path, Username, and Password.
 */
export interface FileShareResponse {
    /**
     * Password credential used to connect to the share location.
     */
    password?: string;
    /**
     * The folder path for this share.
     */
    path: string;
    /**
     * User name credential to connect to the share location
     */
    userName?: string;
}

/**
 * Input for the task that gets TDE certificates in Base64 encoded format.
 */
export interface GetTdeCertificatesSqlTaskInputResponse {
    /**
     * Backup file share information for file share to be used for temporarily storing files.
     */
    backupFileShare: FileShareResponse;
    /**
     * Connection information for SQL Server
     */
    connectionInfo: SqlConnectionInfoResponse;
    /**
     * List containing certificate names and corresponding password to use for encrypting the exported certificate.
     */
    selectedCertificates: SelectedCertificateInputResponse[];
}
/**
 * getTdeCertificatesSqlTaskInputResponseProvideDefaults sets the appropriate defaults for GetTdeCertificatesSqlTaskInputResponse
 */
export function getTdeCertificatesSqlTaskInputResponseProvideDefaults(val: GetTdeCertificatesSqlTaskInputResponse): GetTdeCertificatesSqlTaskInputResponse {
    return {
        ...val,
        connectionInfo: sqlConnectionInfoResponseProvideDefaults(val.connectionInfo),
    };
}

/**
 * Output of the task that gets TDE certificates in Base64 encoded format.
 */
export interface GetTdeCertificatesSqlTaskOutputResponse {
    /**
     * Mapping from certificate name to base 64 encoded format.
     */
    base64EncodedCertificates: {[key: string]: string[]};
    /**
     * Validation errors
     */
    validationErrors: ReportableExceptionResponse[];
}

/**
 * Properties for the task that gets TDE certificates in Base64 encoded format.
 */
export interface GetTdeCertificatesSqlTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Task input
     */
    input?: GetTdeCertificatesSqlTaskInputResponse;
    /**
     * Task output. This is ignored if submitted.
     */
    output: GetTdeCertificatesSqlTaskOutputResponse[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task type.
     * Expected value is 'GetTDECertificates.Sql'.
     */
    taskType: "GetTDECertificates.Sql";
}
/**
 * getTdeCertificatesSqlTaskPropertiesResponseProvideDefaults sets the appropriate defaults for GetTdeCertificatesSqlTaskPropertiesResponse
 */
export function getTdeCertificatesSqlTaskPropertiesResponseProvideDefaults(val: GetTdeCertificatesSqlTaskPropertiesResponse): GetTdeCertificatesSqlTaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? getTdeCertificatesSqlTaskInputResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Input for the task that collects user tables for the given list of databases
 */
export interface GetUserTablesMySqlTaskInputResponse {
    /**
     * Connection information for SQL Server
     */
    connectionInfo: MySqlConnectionInfoResponse;
    /**
     * List of database names to collect tables for
     */
    selectedDatabases: string[];
}
/**
 * getUserTablesMySqlTaskInputResponseProvideDefaults sets the appropriate defaults for GetUserTablesMySqlTaskInputResponse
 */
export function getUserTablesMySqlTaskInputResponseProvideDefaults(val: GetUserTablesMySqlTaskInputResponse): GetUserTablesMySqlTaskInputResponse {
    return {
        ...val,
        connectionInfo: mySqlConnectionInfoResponseProvideDefaults(val.connectionInfo),
    };
}

/**
 * Output of the task that collects user tables for the given list of databases
 */
export interface GetUserTablesMySqlTaskOutputResponse {
    /**
     * Mapping from database name to list of tables
     */
    databasesToTables: {[key: string]: DatabaseTableResponse[]};
    /**
     * Result identifier
     */
    id: string;
    /**
     * Validation errors
     */
    validationErrors: ReportableExceptionResponse[];
}

/**
 * Properties for the task that collects user tables for the given list of databases
 */
export interface GetUserTablesMySqlTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Task input
     */
    input?: GetUserTablesMySqlTaskInputResponse;
    /**
     * Task output. This is ignored if submitted.
     */
    output: GetUserTablesMySqlTaskOutputResponse[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task type.
     * Expected value is 'GetUserTablesMySql'.
     */
    taskType: "GetUserTablesMySql";
}
/**
 * getUserTablesMySqlTaskPropertiesResponseProvideDefaults sets the appropriate defaults for GetUserTablesMySqlTaskPropertiesResponse
 */
export function getUserTablesMySqlTaskPropertiesResponseProvideDefaults(val: GetUserTablesMySqlTaskPropertiesResponse): GetUserTablesMySqlTaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? getUserTablesMySqlTaskInputResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Input for the task that gets the list of tables contained within a provided list of Oracle schemas.
 */
export interface GetUserTablesOracleTaskInputResponse {
    /**
     * Information for connecting to Oracle source
     */
    connectionInfo: OracleConnectionInfoResponse;
    /**
     * List of Oracle schemas for which to collect tables
     */
    selectedSchemas: string[];
}

/**
 * Output for the task that gets the list of tables contained within a provided list of Oracle schemas.
 */
export interface GetUserTablesOracleTaskOutputResponse {
    /**
     * The schema this result is for
     */
    schemaName: string;
    /**
     * List of valid tables found for this schema
     */
    tables: DatabaseTableResponse[];
    /**
     * Validation errors associated with the task
     */
    validationErrors: ReportableExceptionResponse[];
}

/**
 * Properties for the task that collects user tables for the given list of Oracle schemas
 */
export interface GetUserTablesOracleTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Task input
     */
    input?: GetUserTablesOracleTaskInputResponse;
    /**
     * Task output. This is ignored if submitted.
     */
    output: GetUserTablesOracleTaskOutputResponse[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task type.
     * Expected value is 'GetUserTablesOracle'.
     */
    taskType: "GetUserTablesOracle";
}

/**
 * Input for the task that gets the list of tables for a provided list of PostgreSQL databases.
 */
export interface GetUserTablesPostgreSqlTaskInputResponse {
    /**
     * Information for connecting to PostgreSQL source
     */
    connectionInfo: PostgreSqlConnectionInfoResponse;
    /**
     * List of PostgreSQL databases for which to collect tables
     */
    selectedDatabases: string[];
}
/**
 * getUserTablesPostgreSqlTaskInputResponseProvideDefaults sets the appropriate defaults for GetUserTablesPostgreSqlTaskInputResponse
 */
export function getUserTablesPostgreSqlTaskInputResponseProvideDefaults(val: GetUserTablesPostgreSqlTaskInputResponse): GetUserTablesPostgreSqlTaskInputResponse {
    return {
        ...val,
        connectionInfo: postgreSqlConnectionInfoResponseProvideDefaults(val.connectionInfo),
    };
}

/**
 * Output for the task that gets the list of tables for a provided list of PostgreSQL databases.
 */
export interface GetUserTablesPostgreSqlTaskOutputResponse {
    /**
     * The database this result is for
     */
    databaseName: string;
    /**
     * List of valid tables found for this database
     */
    tables: DatabaseTableResponse[];
    /**
     * Validation errors associated with the task
     */
    validationErrors: ReportableExceptionResponse[];
}

/**
 * Properties for the task that collects user tables for the given list of databases
 */
export interface GetUserTablesPostgreSqlTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Task input
     */
    input?: GetUserTablesPostgreSqlTaskInputResponse;
    /**
     * Task output. This is ignored if submitted.
     */
    output: GetUserTablesPostgreSqlTaskOutputResponse[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task type.
     * Expected value is 'GetUserTablesPostgreSql'.
     */
    taskType: "GetUserTablesPostgreSql";
}
/**
 * getUserTablesPostgreSqlTaskPropertiesResponseProvideDefaults sets the appropriate defaults for GetUserTablesPostgreSqlTaskPropertiesResponse
 */
export function getUserTablesPostgreSqlTaskPropertiesResponseProvideDefaults(val: GetUserTablesPostgreSqlTaskPropertiesResponse): GetUserTablesPostgreSqlTaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? getUserTablesPostgreSqlTaskInputResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Input for the task that collects user tables for the given list of databases
 */
export interface GetUserTablesSqlSyncTaskInputResponse {
    /**
     * List of source database names to collect tables for
     */
    selectedSourceDatabases: string[];
    /**
     * List of target database names to collect tables for
     */
    selectedTargetDatabases: string[];
    /**
     * Connection information for SQL Server
     */
    sourceConnectionInfo: SqlConnectionInfoResponse;
    /**
     * Connection information for SQL DB
     */
    targetConnectionInfo: SqlConnectionInfoResponse;
}
/**
 * getUserTablesSqlSyncTaskInputResponseProvideDefaults sets the appropriate defaults for GetUserTablesSqlSyncTaskInputResponse
 */
export function getUserTablesSqlSyncTaskInputResponseProvideDefaults(val: GetUserTablesSqlSyncTaskInputResponse): GetUserTablesSqlSyncTaskInputResponse {
    return {
        ...val,
        sourceConnectionInfo: sqlConnectionInfoResponseProvideDefaults(val.sourceConnectionInfo),
        targetConnectionInfo: sqlConnectionInfoResponseProvideDefaults(val.targetConnectionInfo),
    };
}

/**
 * Output of the task that collects user tables for the given list of databases
 */
export interface GetUserTablesSqlSyncTaskOutputResponse {
    /**
     * Mapping from database name to list of source tables
     */
    databasesToSourceTables: {[key: string]: DatabaseTableResponse[]};
    /**
     * Mapping from database name to list of target tables
     */
    databasesToTargetTables: {[key: string]: DatabaseTableResponse[]};
    /**
     * Mapping from database name to list of validation errors
     */
    tableValidationErrors: {[key: string]: string[]};
    /**
     * Validation errors
     */
    validationErrors: ReportableExceptionResponse[];
}

/**
 * Properties for the task that collects user tables for the given list of databases
 */
export interface GetUserTablesSqlSyncTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Task input
     */
    input?: GetUserTablesSqlSyncTaskInputResponse;
    /**
     * Task output. This is ignored if submitted.
     */
    output: GetUserTablesSqlSyncTaskOutputResponse[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task type.
     * Expected value is 'GetUserTables.AzureSqlDb.Sync'.
     */
    taskType: "GetUserTables.AzureSqlDb.Sync";
}
/**
 * getUserTablesSqlSyncTaskPropertiesResponseProvideDefaults sets the appropriate defaults for GetUserTablesSqlSyncTaskPropertiesResponse
 */
export function getUserTablesSqlSyncTaskPropertiesResponseProvideDefaults(val: GetUserTablesSqlSyncTaskPropertiesResponse): GetUserTablesSqlSyncTaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? getUserTablesSqlSyncTaskInputResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Input for the task that collects user tables for the given list of databases
 */
export interface GetUserTablesSqlTaskInputResponse {
    /**
     * Connection information for SQL Server
     */
    connectionInfo: SqlConnectionInfoResponse;
    /**
     * encrypted key for secure fields
     */
    encryptedKeyForSecureFields?: string;
    /**
     * List of database names to collect tables for
     */
    selectedDatabases: string[];
}
/**
 * getUserTablesSqlTaskInputResponseProvideDefaults sets the appropriate defaults for GetUserTablesSqlTaskInputResponse
 */
export function getUserTablesSqlTaskInputResponseProvideDefaults(val: GetUserTablesSqlTaskInputResponse): GetUserTablesSqlTaskInputResponse {
    return {
        ...val,
        connectionInfo: sqlConnectionInfoResponseProvideDefaults(val.connectionInfo),
    };
}

/**
 * Output of the task that collects user tables for the given list of databases
 */
export interface GetUserTablesSqlTaskOutputResponse {
    /**
     * Mapping from database name to list of tables
     */
    databasesToTables: {[key: string]: DatabaseTableResponse[]};
    /**
     * Result identifier
     */
    id: string;
    /**
     * Validation errors
     */
    validationErrors: ReportableExceptionResponse[];
}

/**
 * Properties for the task that collects user tables for the given list of databases
 */
export interface GetUserTablesSqlTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Task input
     */
    input?: GetUserTablesSqlTaskInputResponse;
    /**
     * Task output. This is ignored if submitted.
     */
    output: GetUserTablesSqlTaskOutputResponse[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task id 
     */
    taskId?: string;
    /**
     * Task type.
     * Expected value is 'GetUserTables.Sql'.
     */
    taskType: "GetUserTables.Sql";
}
/**
 * getUserTablesSqlTaskPropertiesResponseProvideDefaults sets the appropriate defaults for GetUserTablesSqlTaskPropertiesResponse
 */
export function getUserTablesSqlTaskPropertiesResponseProvideDefaults(val: GetUserTablesSqlTaskPropertiesResponse): GetUserTablesSqlTaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? getUserTablesSqlTaskInputResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Properties required to create a connection to Azure SQL database Managed instance
 */
export interface MiSqlConnectionInfoResponse {
    /**
     * Resource id for Azure SQL database Managed instance
     */
    managedInstanceResourceId: string;
    /**
     * Password credential.
     */
    password?: string;
    /**
     * Type of connection info
     * Expected value is 'MiSqlConnectionInfo'.
     */
    type: "MiSqlConnectionInfo";
    /**
     * User name
     */
    userName?: string;
}

/**
 * Input for command that completes online migration for an Azure SQL Database Managed Instance.
 */
export interface MigrateMISyncCompleteCommandInputResponse {
    /**
     * Name of managed instance database
     */
    sourceDatabaseName: string;
}

/**
 * Output for command that completes online migration for an Azure SQL Database Managed Instance.
 */
export interface MigrateMISyncCompleteCommandOutputResponse {
    /**
     * List of errors that happened during the command execution
     */
    errors?: ReportableExceptionResponse[];
}

/**
 * Properties for the command that completes online migration for an Azure SQL Database Managed Instance.
 */
export interface MigrateMISyncCompleteCommandPropertiesResponse {
    /**
     * Command type.
     * Expected value is 'Migrate.SqlServer.AzureDbSqlMi.Complete'.
     */
    commandType: "Migrate.SqlServer.AzureDbSqlMi.Complete";
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Command input
     */
    input?: MigrateMISyncCompleteCommandInputResponse;
    /**
     * Command output. This is ignored if submitted.
     */
    output: MigrateMISyncCompleteCommandOutputResponse;
    /**
     * The state of the command. This is ignored if submitted.
     */
    state: string;
}

/**
 * Properties for the task that migrates data between MongoDB data sources
 */
export interface MigrateMongoDbTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Describes how a MongoDB data migration should be performed
     */
    input?: MongoDbMigrationSettingsResponse;
    output: (MongoDbCollectionProgressResponse | MongoDbDatabaseProgressResponse | MongoDbMigrationProgressResponse)[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task type.
     * Expected value is 'Migrate.MongoDb'.
     */
    taskType: "Migrate.MongoDb";
}
/**
 * migrateMongoDbTaskPropertiesResponseProvideDefaults sets the appropriate defaults for MigrateMongoDbTaskPropertiesResponse
 */
export function migrateMongoDbTaskPropertiesResponseProvideDefaults(val: MigrateMongoDbTaskPropertiesResponse): MigrateMongoDbTaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? mongoDbMigrationSettingsResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Database specific information for offline MySQL to Azure Database for MySQL migration task inputs
 */
export interface MigrateMySqlAzureDbForMySqlOfflineDatabaseInputResponse {
    /**
     * Name of the database
     */
    name?: string;
    /**
     * Mapping of source to target tables
     */
    tableMap?: {[key: string]: string};
    /**
     * Name of target database. Note: Target database will be truncated before starting migration.
     */
    targetDatabaseName?: string;
}

/**
 * Input for the task that migrates MySQL databases to Azure Database for MySQL for offline migrations
 */
export interface MigrateMySqlAzureDbForMySqlOfflineTaskInputResponse {
    /**
     * encrypted key for secure fields
     */
    encryptedKeyForSecureFields?: string;
    /**
     * Setting to set the source server read only
     */
    makeSourceServerReadOnly?: boolean;
    /**
     * Optional parameters for fine tuning the data transfer rate during migration
     */
    optionalAgentSettings?: {[key: string]: string};
    /**
     * Databases to migrate
     */
    selectedDatabases: MigrateMySqlAzureDbForMySqlOfflineDatabaseInputResponse[];
    /**
     * Connection information for source MySQL
     */
    sourceConnectionInfo: MySqlConnectionInfoResponse;
    /**
     * Parameter to specify when the migration started
     */
    startedOn?: string;
    /**
     * Connection information for target Azure Database for MySQL
     */
    targetConnectionInfo: MySqlConnectionInfoResponse;
}
/**
 * migrateMySqlAzureDbForMySqlOfflineTaskInputResponseProvideDefaults sets the appropriate defaults for MigrateMySqlAzureDbForMySqlOfflineTaskInputResponse
 */
export function migrateMySqlAzureDbForMySqlOfflineTaskInputResponseProvideDefaults(val: MigrateMySqlAzureDbForMySqlOfflineTaskInputResponse): MigrateMySqlAzureDbForMySqlOfflineTaskInputResponse {
    return {
        ...val,
        makeSourceServerReadOnly: (val.makeSourceServerReadOnly) ?? false,
        sourceConnectionInfo: mySqlConnectionInfoResponseProvideDefaults(val.sourceConnectionInfo),
        targetConnectionInfo: mySqlConnectionInfoResponseProvideDefaults(val.targetConnectionInfo),
    };
}

export interface MigrateMySqlAzureDbForMySqlOfflineTaskOutputDatabaseLevelResponse {
    /**
     * Name of the database
     */
    databaseName: string;
    /**
     * Migration end time
     */
    endedOn: string;
    /**
     * Number of database/object errors.
     */
    errorCount: number;
    /**
     * Wildcard string prefix to use for querying all errors of the item
     */
    errorPrefix: string;
    /**
     * Migration exceptions and warnings.
     */
    exceptionsAndWarnings: ReportableExceptionResponse[];
    /**
     * Result identifier
     */
    id: string;
    /**
     * Last time the storage was updated
     */
    lastStorageUpdate: string;
    /**
     * Migration progress message
     */
    message: string;
    /**
     * Number of objects
     */
    numberOfObjects: number;
    /**
     * Number of successfully completed objects
     */
    numberOfObjectsCompleted: number;
    /**
     * Summary of object results in the migration
     */
    objectSummary: {[key: string]: DataItemMigrationSummaryResultResponse};
    /**
     * Wildcard string prefix to use for querying all sub-tem results of the item
     */
    resultPrefix: string;
    /**
     * Result type
     * Expected value is 'DatabaseLevelOutput'.
     */
    resultType: "DatabaseLevelOutput";
    /**
     * Migration stage that this database is in
     */
    stage: string;
    /**
     * Migration start time
     */
    startedOn: string;
    /**
     * Current state of migration
     */
    state: string;
    /**
     * Status message
     */
    statusMessage: string;
}

export interface MigrateMySqlAzureDbForMySqlOfflineTaskOutputErrorResponse {
    /**
     * Migration error
     */
    error: ReportableExceptionResponse;
    /**
     * Result identifier
     */
    id: string;
    /**
     * Result type
     * Expected value is 'ErrorOutput'.
     */
    resultType: "ErrorOutput";
}

export interface MigrateMySqlAzureDbForMySqlOfflineTaskOutputMigrationLevelResponse {
    /**
     * Summary of database results in the migration
     */
    databaseSummary: {[key: string]: DatabaseSummaryResultResponse};
    /**
     * Selected databases as a map from database name to database id
     */
    databases?: {[key: string]: string};
    /**
     * Duration of task execution in seconds.
     */
    durationInSeconds: number;
    /**
     * Migration end time
     */
    endedOn: string;
    /**
     * Migration exceptions and warnings.
     */
    exceptionsAndWarnings: ReportableExceptionResponse[];
    /**
     * Result identifier
     */
    id: string;
    /**
     * Last time the storage was updated
     */
    lastStorageUpdate: string;
    /**
     * Migration progress message
     */
    message: string;
    /**
     * Migration Report Result, provides unique url for downloading your migration report.
     */
    migrationReportResult?: MigrationReportResultResponse;
    /**
     * Result type
     * Expected value is 'MigrationLevelOutput'.
     */
    resultType: "MigrationLevelOutput";
    /**
     * Source server brand version
     */
    sourceServerBrandVersion: string;
    /**
     * Source server version
     */
    sourceServerVersion: string;
    /**
     * Migration start time
     */
    startedOn: string;
    /**
     * Current status of migration
     */
    status: string;
    /**
     * Migration status message
     */
    statusMessage: string;
    /**
     * Target server brand version
     */
    targetServerBrandVersion: string;
    /**
     * Target server version
     */
    targetServerVersion: string;
}

export interface MigrateMySqlAzureDbForMySqlOfflineTaskOutputTableLevelResponse {
    /**
     * Migration end time
     */
    endedOn: string;
    /**
     * Wildcard string prefix to use for querying all errors of the item
     */
    errorPrefix: string;
    /**
     * Result identifier
     */
    id: string;
    /**
     * Number of successfully completed items
     */
    itemsCompletedCount: number;
    /**
     * Number of items
     */
    itemsCount: number;
    /**
     * Last time the storage was updated
     */
    lastStorageUpdate: string;
    /**
     * Name of the item
     */
    objectName: string;
    /**
     * Wildcard string prefix to use for querying all sub-tem results of the item
     */
    resultPrefix: string;
    /**
     * Result type
     * Expected value is 'TableLevelOutput'.
     */
    resultType: "TableLevelOutput";
    /**
     * Migration start time
     */
    startedOn: string;
    /**
     * Current state of migration
     */
    state: string;
    /**
     * Status message
     */
    statusMessage: string;
}

/**
 * Properties for the task that migrates MySQL databases to Azure Database for MySQL for offline migrations
 */
export interface MigrateMySqlAzureDbForMySqlOfflineTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Task input
     */
    input?: MigrateMySqlAzureDbForMySqlOfflineTaskInputResponse;
    /**
     * whether the task can be cloned or not
     */
    isCloneable?: boolean;
    /**
     * Task output. This is ignored if submitted.
     */
    output: (MigrateMySqlAzureDbForMySqlOfflineTaskOutputDatabaseLevelResponse | MigrateMySqlAzureDbForMySqlOfflineTaskOutputErrorResponse | MigrateMySqlAzureDbForMySqlOfflineTaskOutputMigrationLevelResponse | MigrateMySqlAzureDbForMySqlOfflineTaskOutputTableLevelResponse)[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task id 
     */
    taskId?: string;
    /**
     * Task type.
     * Expected value is 'Migrate.MySql.AzureDbForMySql'.
     */
    taskType: "Migrate.MySql.AzureDbForMySql";
}
/**
 * migrateMySqlAzureDbForMySqlOfflineTaskPropertiesResponseProvideDefaults sets the appropriate defaults for MigrateMySqlAzureDbForMySqlOfflineTaskPropertiesResponse
 */
export function migrateMySqlAzureDbForMySqlOfflineTaskPropertiesResponseProvideDefaults(val: MigrateMySqlAzureDbForMySqlOfflineTaskPropertiesResponse): MigrateMySqlAzureDbForMySqlOfflineTaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? migrateMySqlAzureDbForMySqlOfflineTaskInputResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Database specific information for MySQL to Azure Database for MySQL migration task inputs
 */
export interface MigrateMySqlAzureDbForMySqlSyncDatabaseInputResponse {
    /**
     * Migration settings which tune the migration behavior
     */
    migrationSetting?: {[key: string]: string};
    /**
     * Name of the database
     */
    name?: string;
    /**
     * Source settings to tune source endpoint migration behavior
     */
    sourceSetting?: {[key: string]: string};
    /**
     * Mapping of source to target tables
     */
    tableMap?: {[key: string]: string};
    /**
     * Name of target database. Note: Target database will be truncated before starting migration.
     */
    targetDatabaseName?: string;
    /**
     * Target settings to tune target endpoint migration behavior
     */
    targetSetting?: {[key: string]: string};
}

/**
 * Input for the task that migrates MySQL databases to Azure Database for MySQL for online migrations
 */
export interface MigrateMySqlAzureDbForMySqlSyncTaskInputResponse {
    /**
     * Databases to migrate
     */
    selectedDatabases: MigrateMySqlAzureDbForMySqlSyncDatabaseInputResponse[];
    /**
     * Connection information for source MySQL
     */
    sourceConnectionInfo: MySqlConnectionInfoResponse;
    /**
     * Connection information for target Azure Database for MySQL
     */
    targetConnectionInfo: MySqlConnectionInfoResponse;
}
/**
 * migrateMySqlAzureDbForMySqlSyncTaskInputResponseProvideDefaults sets the appropriate defaults for MigrateMySqlAzureDbForMySqlSyncTaskInputResponse
 */
export function migrateMySqlAzureDbForMySqlSyncTaskInputResponseProvideDefaults(val: MigrateMySqlAzureDbForMySqlSyncTaskInputResponse): MigrateMySqlAzureDbForMySqlSyncTaskInputResponse {
    return {
        ...val,
        sourceConnectionInfo: mySqlConnectionInfoResponseProvideDefaults(val.sourceConnectionInfo),
        targetConnectionInfo: mySqlConnectionInfoResponseProvideDefaults(val.targetConnectionInfo),
    };
}

export interface MigrateMySqlAzureDbForMySqlSyncTaskOutputDatabaseErrorResponse {
    /**
     * Error message
     */
    errorMessage?: string;
    /**
     * List of error events.
     */
    events?: SyncMigrationDatabaseErrorEventResponse[];
    /**
     * Result identifier
     */
    id: string;
    /**
     * Result type
     * Expected value is 'DatabaseLevelErrorOutput'.
     */
    resultType: "DatabaseLevelErrorOutput";
}

export interface MigrateMySqlAzureDbForMySqlSyncTaskOutputDatabaseLevelResponse {
    /**
     * Number of applied changes
     */
    appliedChanges: number;
    /**
     * Number of cdc deletes
     */
    cdcDeleteCounter: number;
    /**
     * Number of cdc inserts
     */
    cdcInsertCounter: number;
    /**
     * Number of cdc updates
     */
    cdcUpdateCounter: number;
    /**
     * Name of the database
     */
    databaseName: string;
    /**
     * Migration end time
     */
    endedOn: string;
    /**
     * Number of tables completed in full load
     */
    fullLoadCompletedTables: number;
    /**
     * Number of tables errored in full load
     */
    fullLoadErroredTables: number;
    /**
     * Number of tables loading in full load
     */
    fullLoadLoadingTables: number;
    /**
     * Number of tables queued in full load
     */
    fullLoadQueuedTables: number;
    /**
     * Result identifier
     */
    id: string;
    /**
     * Number of incoming changes
     */
    incomingChanges: number;
    /**
     * Indicates if initial load (full load) has been completed
     */
    initializationCompleted: boolean;
    /**
     * CDC apply latency
     */
    latency: number;
    /**
     * Migration state that this database is in
     */
    migrationState: string;
    /**
     * Result type
     * Expected value is 'DatabaseLevelOutput'.
     */
    resultType: "DatabaseLevelOutput";
    /**
     * Migration start time
     */
    startedOn: string;
}

export interface MigrateMySqlAzureDbForMySqlSyncTaskOutputErrorResponse {
    /**
     * Migration error
     */
    error: ReportableExceptionResponse;
    /**
     * Result identifier
     */
    id: string;
    /**
     * Result type
     * Expected value is 'ErrorOutput'.
     */
    resultType: "ErrorOutput";
}

export interface MigrateMySqlAzureDbForMySqlSyncTaskOutputMigrationLevelResponse {
    /**
     * Migration end time
     */
    endedOn: string;
    /**
     * Result identifier
     */
    id: string;
    /**
     * Result type
     * Expected value is 'MigrationLevelOutput'.
     */
    resultType: "MigrationLevelOutput";
    /**
     * Source server name
     */
    sourceServer: string;
    /**
     * Source server version
     */
    sourceServerVersion: string;
    /**
     * Migration start time
     */
    startedOn: string;
    /**
     * Target server name
     */
    targetServer: string;
    /**
     * Target server version
     */
    targetServerVersion: string;
}

export interface MigrateMySqlAzureDbForMySqlSyncTaskOutputTableLevelResponse {
    /**
     * Number of applied deletes
     */
    cdcDeleteCounter: string;
    /**
     * Number of applied inserts
     */
    cdcInsertCounter: string;
    /**
     * Number of applied updates
     */
    cdcUpdateCounter: string;
    /**
     * Number of data errors occurred
     */
    dataErrorsCounter: number;
    /**
     * Name of the database
     */
    databaseName: string;
    /**
     * Full load end time
     */
    fullLoadEndedOn: string;
    /**
     * Estimate to finish full load
     */
    fullLoadEstFinishTime: string;
    /**
     * Full load start time
     */
    fullLoadStartedOn: string;
    /**
     * Number of rows applied in full load
     */
    fullLoadTotalRows: number;
    /**
     * Result identifier
     */
    id: string;
    /**
     * Last modified time on target
     */
    lastModifiedTime: string;
    /**
     * Result type
     * Expected value is 'TableLevelOutput'.
     */
    resultType: "TableLevelOutput";
    /**
     * Current state of the table migration
     */
    state: string;
    /**
     * Name of the table
     */
    tableName: string;
    /**
     * Total number of applied changes
     */
    totalChangesApplied: number;
}

/**
 * Properties for the task that migrates MySQL databases to Azure Database for MySQL for online migrations
 */
export interface MigrateMySqlAzureDbForMySqlSyncTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Task input
     */
    input?: MigrateMySqlAzureDbForMySqlSyncTaskInputResponse;
    /**
     * Task output. This is ignored if submitted.
     */
    output: (MigrateMySqlAzureDbForMySqlSyncTaskOutputDatabaseErrorResponse | MigrateMySqlAzureDbForMySqlSyncTaskOutputDatabaseLevelResponse | MigrateMySqlAzureDbForMySqlSyncTaskOutputErrorResponse | MigrateMySqlAzureDbForMySqlSyncTaskOutputMigrationLevelResponse | MigrateMySqlAzureDbForMySqlSyncTaskOutputTableLevelResponse)[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task type.
     * Expected value is 'Migrate.MySql.AzureDbForMySql.Sync'.
     */
    taskType: "Migrate.MySql.AzureDbForMySql.Sync";
}
/**
 * migrateMySqlAzureDbForMySqlSyncTaskPropertiesResponseProvideDefaults sets the appropriate defaults for MigrateMySqlAzureDbForMySqlSyncTaskPropertiesResponse
 */
export function migrateMySqlAzureDbForMySqlSyncTaskPropertiesResponseProvideDefaults(val: MigrateMySqlAzureDbForMySqlSyncTaskPropertiesResponse): MigrateMySqlAzureDbForMySqlSyncTaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? migrateMySqlAzureDbForMySqlSyncTaskInputResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Properties for the task that migrates Oracle to Azure Database for PostgreSQL for online migrations
 */
export interface MigrateOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Task input
     */
    input?: MigrateOracleAzureDbPostgreSqlSyncTaskInputResponse;
    /**
     * Task output. This is ignored if submitted.
     */
    output: (MigrateOracleAzureDbPostgreSqlSyncTaskOutputDatabaseErrorResponse | MigrateOracleAzureDbPostgreSqlSyncTaskOutputDatabaseLevelResponse | MigrateOracleAzureDbPostgreSqlSyncTaskOutputErrorResponse | MigrateOracleAzureDbPostgreSqlSyncTaskOutputMigrationLevelResponse | MigrateOracleAzureDbPostgreSqlSyncTaskOutputTableLevelResponse)[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task type.
     * Expected value is 'Migrate.Oracle.AzureDbForPostgreSql.Sync'.
     */
    taskType: "Migrate.Oracle.AzureDbForPostgreSql.Sync";
}
/**
 * migrateOracleAzureDbForPostgreSqlSyncTaskPropertiesResponseProvideDefaults sets the appropriate defaults for MigrateOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse
 */
export function migrateOracleAzureDbForPostgreSqlSyncTaskPropertiesResponseProvideDefaults(val: MigrateOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse): MigrateOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? migrateOracleAzureDbPostgreSqlSyncTaskInputResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Database specific information for Oracle to Azure Database for PostgreSQL migration task inputs
 */
export interface MigrateOracleAzureDbPostgreSqlSyncDatabaseInputResponse {
    /**
     * How to handle object name casing: either Preserve or ToLower
     */
    caseManipulation?: string;
    /**
     * Migration settings which tune the migration behavior
     */
    migrationSetting?: {[key: string]: string};
    /**
     * Name of the migration pipeline
     */
    name?: string;
    /**
     * Name of the source schema
     */
    schemaName?: string;
    /**
     * Source settings to tune source endpoint migration behavior
     */
    sourceSetting?: {[key: string]: string};
    /**
     * Mapping of source to target tables
     */
    tableMap?: {[key: string]: string};
    /**
     * Name of target database. Note: Target database will be truncated before starting migration.
     */
    targetDatabaseName?: string;
    /**
     * Target settings to tune target endpoint migration behavior
     */
    targetSetting?: {[key: string]: string};
}

/**
 * Input for the task that migrates Oracle databases to Azure Database for PostgreSQL for online migrations
 */
export interface MigrateOracleAzureDbPostgreSqlSyncTaskInputResponse {
    /**
     * Databases to migrate
     */
    selectedDatabases: MigrateOracleAzureDbPostgreSqlSyncDatabaseInputResponse[];
    /**
     * Connection information for source Oracle
     */
    sourceConnectionInfo: OracleConnectionInfoResponse;
    /**
     * Connection information for target Azure Database for PostgreSQL
     */
    targetConnectionInfo: PostgreSqlConnectionInfoResponse;
}
/**
 * migrateOracleAzureDbPostgreSqlSyncTaskInputResponseProvideDefaults sets the appropriate defaults for MigrateOracleAzureDbPostgreSqlSyncTaskInputResponse
 */
export function migrateOracleAzureDbPostgreSqlSyncTaskInputResponseProvideDefaults(val: MigrateOracleAzureDbPostgreSqlSyncTaskInputResponse): MigrateOracleAzureDbPostgreSqlSyncTaskInputResponse {
    return {
        ...val,
        targetConnectionInfo: postgreSqlConnectionInfoResponseProvideDefaults(val.targetConnectionInfo),
    };
}

export interface MigrateOracleAzureDbPostgreSqlSyncTaskOutputDatabaseErrorResponse {
    /**
     * Error message
     */
    errorMessage?: string;
    /**
     * List of error events.
     */
    events?: SyncMigrationDatabaseErrorEventResponse[];
    /**
     * Result identifier
     */
    id: string;
    /**
     * Result type
     * Expected value is 'DatabaseLevelErrorOutput'.
     */
    resultType: "DatabaseLevelErrorOutput";
}

export interface MigrateOracleAzureDbPostgreSqlSyncTaskOutputDatabaseLevelResponse {
    /**
     * Number of applied changes
     */
    appliedChanges: number;
    /**
     * Number of cdc deletes
     */
    cdcDeleteCounter: number;
    /**
     * Number of cdc inserts
     */
    cdcInsertCounter: number;
    /**
     * Number of cdc updates
     */
    cdcUpdateCounter: number;
    /**
     * Name of the database
     */
    databaseName: string;
    /**
     * Migration end time
     */
    endedOn: string;
    /**
     * Number of tables completed in full load
     */
    fullLoadCompletedTables: number;
    /**
     * Number of tables errored in full load
     */
    fullLoadErroredTables: number;
    /**
     * Number of tables loading in full load
     */
    fullLoadLoadingTables: number;
    /**
     * Number of tables queued in full load
     */
    fullLoadQueuedTables: number;
    /**
     * Result identifier
     */
    id: string;
    /**
     * Number of incoming changes
     */
    incomingChanges: number;
    /**
     * Indicates if initial load (full load) has been completed
     */
    initializationCompleted: boolean;
    /**
     * CDC apply latency
     */
    latency: number;
    /**
     * Migration state that this database is in
     */
    migrationState: string;
    /**
     * Result type
     * Expected value is 'DatabaseLevelOutput'.
     */
    resultType: "DatabaseLevelOutput";
    /**
     * Migration start time
     */
    startedOn: string;
}

export interface MigrateOracleAzureDbPostgreSqlSyncTaskOutputErrorResponse {
    /**
     * Migration error
     */
    error: ReportableExceptionResponse;
    /**
     * Result identifier
     */
    id: string;
    /**
     * Result type
     * Expected value is 'ErrorOutput'.
     */
    resultType: "ErrorOutput";
}

export interface MigrateOracleAzureDbPostgreSqlSyncTaskOutputMigrationLevelResponse {
    /**
     * Migration end time
     */
    endedOn: string;
    /**
     * Result identifier
     */
    id: string;
    /**
     * Result type
     * Expected value is 'MigrationLevelOutput'.
     */
    resultType: "MigrationLevelOutput";
    /**
     * Source server name
     */
    sourceServer: string;
    /**
     * Source server version
     */
    sourceServerVersion: string;
    /**
     * Migration start time
     */
    startedOn: string;
    /**
     * Target server name
     */
    targetServer: string;
    /**
     * Target server version
     */
    targetServerVersion: string;
}

export interface MigrateOracleAzureDbPostgreSqlSyncTaskOutputTableLevelResponse {
    /**
     * Number of applied deletes
     */
    cdcDeleteCounter: number;
    /**
     * Number of applied inserts
     */
    cdcInsertCounter: number;
    /**
     * Number of applied updates
     */
    cdcUpdateCounter: number;
    /**
     * Number of data errors occurred
     */
    dataErrorsCounter: number;
    /**
     * Name of the database
     */
    databaseName: string;
    /**
     * Full load end time
     */
    fullLoadEndedOn: string;
    /**
     * Estimate to finish full load
     */
    fullLoadEstFinishTime: string;
    /**
     * Full load start time
     */
    fullLoadStartedOn: string;
    /**
     * Number of rows applied in full load
     */
    fullLoadTotalRows: number;
    /**
     * Result identifier
     */
    id: string;
    /**
     * Last modified time on target
     */
    lastModifiedTime: string;
    /**
     * Result type
     * Expected value is 'TableLevelOutput'.
     */
    resultType: "TableLevelOutput";
    /**
     * Current state of the table migration
     */
    state: string;
    /**
     * Name of the table
     */
    tableName: string;
    /**
     * Total number of applied changes
     */
    totalChangesApplied: number;
}

/**
 * Database specific information for PostgreSQL to Azure Database for PostgreSQL migration task inputs
 */
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputResponse {
    /**
     * Result identifier
     */
    id: string;
    /**
     * Migration settings which tune the migration behavior
     */
    migrationSetting?: any;
    /**
     * Name of the database
     */
    name?: string;
    /**
     * Tables selected for migration
     */
    selectedTables?: MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseTableInputResponse[];
    /**
     * Source settings to tune source endpoint migration behavior
     */
    sourceSetting?: {[key: string]: string};
    /**
     * Name of target database. Note: Target database will be truncated before starting migration.
     */
    targetDatabaseName?: string;
    /**
     * Target settings to tune target endpoint migration behavior
     */
    targetSetting?: {[key: string]: string};
}

/**
 * Selected tables for the migration
 */
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseTableInputResponse {
    /**
     * Name of the table to migrate
     */
    name?: string;
}

/**
 * Input for the task that migrates PostgreSQL databases to Azure Database for PostgreSQL for online migrations
 */
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInputResponse {
    /**
     * encrypted key for secure fields
     */
    encryptedKeyForSecureFields?: string;
    /**
     * Databases to migrate
     */
    selectedDatabases: MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputResponse[];
    /**
     * Connection information for source PostgreSQL
     */
    sourceConnectionInfo: PostgreSqlConnectionInfoResponse;
    /**
     * Migration start time
     */
    startedOn: string;
    /**
     * Connection information for target Azure Database for PostgreSQL
     */
    targetConnectionInfo: PostgreSqlConnectionInfoResponse;
}
/**
 * migratePostgreSqlAzureDbForPostgreSqlSyncTaskInputResponseProvideDefaults sets the appropriate defaults for MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInputResponse
 */
export function migratePostgreSqlAzureDbForPostgreSqlSyncTaskInputResponseProvideDefaults(val: MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInputResponse): MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInputResponse {
    return {
        ...val,
        sourceConnectionInfo: postgreSqlConnectionInfoResponseProvideDefaults(val.sourceConnectionInfo),
        targetConnectionInfo: postgreSqlConnectionInfoResponseProvideDefaults(val.targetConnectionInfo),
    };
}

export interface MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputDatabaseErrorResponse {
    /**
     * Error message
     */
    errorMessage?: string;
    /**
     * List of error events.
     */
    events?: SyncMigrationDatabaseErrorEventResponse[];
    /**
     * Result identifier
     */
    id: string;
    /**
     * Result type
     * Expected value is 'DatabaseLevelErrorOutput'.
     */
    resultType: "DatabaseLevelErrorOutput";
}

export interface MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputDatabaseLevelResponse {
    /**
     * Number of applied changes
     */
    appliedChanges: number;
    /**
     * Number of cdc deletes
     */
    cdcDeleteCounter: number;
    /**
     * Number of cdc inserts
     */
    cdcInsertCounter: number;
    /**
     * Number of cdc updates
     */
    cdcUpdateCounter: number;
    /**
     * Name of the database
     */
    databaseName: string;
    /**
     * Migration end time
     */
    endedOn: string;
    /**
     * Number of tables completed in full load
     */
    fullLoadCompletedTables: number;
    /**
     * Number of tables errored in full load
     */
    fullLoadErroredTables: number;
    /**
     * Number of tables loading in full load
     */
    fullLoadLoadingTables: number;
    /**
     * Number of tables queued in full load
     */
    fullLoadQueuedTables: number;
    /**
     * Result identifier
     */
    id: string;
    /**
     * Number of incoming changes
     */
    incomingChanges: number;
    /**
     * Indicates if initial load (full load) has been completed
     */
    initializationCompleted: boolean;
    /**
     * CDC apply latency
     */
    latency: number;
    /**
     * Migration state that this database is in
     */
    migrationState: string;
    /**
     * Result type
     * Expected value is 'DatabaseLevelOutput'.
     */
    resultType: "DatabaseLevelOutput";
    /**
     * Migration start time
     */
    startedOn: string;
}

export interface MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputErrorResponse {
    /**
     * Migration error
     */
    error: ReportableExceptionResponse;
    /**
     * List of error events
     */
    events?: SyncMigrationDatabaseErrorEventResponse[];
    /**
     * Result identifier
     */
    id: string;
    /**
     * Result type
     * Expected value is 'ErrorOutput'.
     */
    resultType: "ErrorOutput";
}

export interface MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputMigrationLevelResponse {
    /**
     * Number of databases to include
     */
    databaseCount?: number;
    /**
     * Migration end time
     */
    endedOn: string;
    /**
     * Result identifier
     */
    id: string;
    /**
     * Result type
     * Expected value is 'MigrationLevelOutput'.
     */
    resultType: "MigrationLevelOutput";
    /**
     * Source server name
     */
    sourceServer: string;
    /**
     * Source server type.
     */
    sourceServerType: string;
    /**
     * Source server version
     */
    sourceServerVersion: string;
    /**
     * Migration start time
     */
    startedOn: string;
    /**
     * Migration status
     */
    state: string;
    /**
     * Target server name
     */
    targetServer: string;
    /**
     * Target server type.
     */
    targetServerType: string;
    /**
     * Target server version
     */
    targetServerVersion: string;
}

export interface MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputTableLevelResponse {
    /**
     * Number of applied deletes
     */
    cdcDeleteCounter: number;
    /**
     * Number of applied inserts
     */
    cdcInsertCounter: number;
    /**
     * Number of applied updates
     */
    cdcUpdateCounter: number;
    /**
     * Number of data errors occurred
     */
    dataErrorsCounter: number;
    /**
     * Name of the database
     */
    databaseName: string;
    /**
     * Full load end time
     */
    fullLoadEndedOn: string;
    /**
     * Estimate to finish full load
     */
    fullLoadEstFinishTime: string;
    /**
     * Full load start time
     */
    fullLoadStartedOn: string;
    /**
     * Number of rows applied in full load
     */
    fullLoadTotalRows: number;
    /**
     * Result identifier
     */
    id: string;
    /**
     * Last modified time on target
     */
    lastModifiedTime: string;
    /**
     * Result type
     * Expected value is 'TableLevelOutput'.
     */
    resultType: "TableLevelOutput";
    /**
     * Current state of the table migration
     */
    state: string;
    /**
     * Name of the table
     */
    tableName: string;
    /**
     * Total number of applied changes
     */
    totalChangesApplied: number;
}

/**
 * Properties for the task that migrates PostgreSQL databases to Azure Database for PostgreSQL for online migrations
 */
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * DateTime in UTC when the task was created
     */
    createdOn?: string;
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Task input
     */
    input?: MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInputResponse;
    /**
     * whether the task can be cloned or not
     */
    isCloneable?: boolean;
    /**
     * Task output. This is ignored if submitted.
     */
    output: (MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputDatabaseErrorResponse | MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputDatabaseLevelResponse | MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputErrorResponse | MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputMigrationLevelResponse | MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputTableLevelResponse)[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * task id
     */
    taskId?: string;
    /**
     * Task type.
     * Expected value is 'Migrate.PostgreSql.AzureDbForPostgreSql.SyncV2'.
     */
    taskType: "Migrate.PostgreSql.AzureDbForPostgreSql.SyncV2";
}
/**
 * migratePostgreSqlAzureDbForPostgreSqlSyncTaskPropertiesResponseProvideDefaults sets the appropriate defaults for MigratePostgreSqlAzureDbForPostgreSqlSyncTaskPropertiesResponse
 */
export function migratePostgreSqlAzureDbForPostgreSqlSyncTaskPropertiesResponseProvideDefaults(val: MigratePostgreSqlAzureDbForPostgreSqlSyncTaskPropertiesResponse): MigratePostgreSqlAzureDbForPostgreSqlSyncTaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? migratePostgreSqlAzureDbForPostgreSqlSyncTaskInputResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Database specific information for SQL to Azure SQL DB migration task inputs
 */
export interface MigrateSqlServerSqlDbDatabaseInputResponse {
    /**
     * id of the database
     */
    id?: string;
    /**
     * Whether to set database read only before migration
     */
    makeSourceDbReadOnly?: boolean;
    /**
     * Name of the database
     */
    name?: string;
    /**
     * Settings selected for DB schema migration.
     */
    schemaSetting?: any;
    /**
     * Mapping of source to target tables
     */
    tableMap?: {[key: string]: string};
    /**
     * Name of target database. Note: Target database will be truncated before starting migration.
     */
    targetDatabaseName?: string;
}

/**
 * Database specific information for SQL to Azure SQL DB sync migration task inputs
 */
export interface MigrateSqlServerSqlDbSyncDatabaseInputResponse {
    /**
     * Unique identifier for database
     */
    id?: string;
    /**
     * Migration settings which tune the migration behavior
     */
    migrationSetting?: {[key: string]: string};
    /**
     * Name of database
     */
    name?: string;
    /**
     * Schema name to be migrated
     */
    schemaName?: string;
    /**
     * Source settings to tune source endpoint migration behavior
     */
    sourceSetting?: {[key: string]: string};
    /**
     * Mapping of source to target tables
     */
    tableMap?: {[key: string]: string};
    /**
     * Target database name
     */
    targetDatabaseName?: string;
    /**
     * Target settings to tune target endpoint migration behavior
     */
    targetSetting?: {[key: string]: string};
}

/**
 * Input for the task that migrates on-prem SQL Server databases to Azure SQL Database for online migrations
 */
export interface MigrateSqlServerSqlDbSyncTaskInputResponse {
    /**
     * Databases to migrate
     */
    selectedDatabases: MigrateSqlServerSqlDbSyncDatabaseInputResponse[];
    /**
     * Information for connecting to source
     */
    sourceConnectionInfo: SqlConnectionInfoResponse;
    /**
     * Information for connecting to target
     */
    targetConnectionInfo: SqlConnectionInfoResponse;
    /**
     * Validation options
     */
    validationOptions?: MigrationValidationOptionsResponse;
}
/**
 * migrateSqlServerSqlDbSyncTaskInputResponseProvideDefaults sets the appropriate defaults for MigrateSqlServerSqlDbSyncTaskInputResponse
 */
export function migrateSqlServerSqlDbSyncTaskInputResponseProvideDefaults(val: MigrateSqlServerSqlDbSyncTaskInputResponse): MigrateSqlServerSqlDbSyncTaskInputResponse {
    return {
        ...val,
        sourceConnectionInfo: sqlConnectionInfoResponseProvideDefaults(val.sourceConnectionInfo),
        targetConnectionInfo: sqlConnectionInfoResponseProvideDefaults(val.targetConnectionInfo),
    };
}

export interface MigrateSqlServerSqlDbSyncTaskOutputDatabaseErrorResponse {
    /**
     * Error message
     */
    errorMessage?: string;
    /**
     * List of error events.
     */
    events?: SyncMigrationDatabaseErrorEventResponse[];
    /**
     * Result identifier
     */
    id: string;
    /**
     * Result type
     * Expected value is 'DatabaseLevelErrorOutput'.
     */
    resultType: "DatabaseLevelErrorOutput";
}

export interface MigrateSqlServerSqlDbSyncTaskOutputDatabaseLevelResponse {
    /**
     * Number of applied changes
     */
    appliedChanges: number;
    /**
     * Number of cdc deletes
     */
    cdcDeleteCounter: number;
    /**
     * Number of cdc inserts
     */
    cdcInsertCounter: number;
    /**
     * Number of cdc updates
     */
    cdcUpdateCounter: number;
    /**
     * Name of the database
     */
    databaseName: string;
    /**
     * Migration end time
     */
    endedOn: string;
    /**
     * Number of tables completed in full load
     */
    fullLoadCompletedTables: number;
    /**
     * Number of tables errored in full load
     */
    fullLoadErroredTables: number;
    /**
     * Number of tables loading in full load
     */
    fullLoadLoadingTables: number;
    /**
     * Number of tables queued in full load
     */
    fullLoadQueuedTables: number;
    /**
     * Result identifier
     */
    id: string;
    /**
     * Number of incoming changes
     */
    incomingChanges: number;
    /**
     * Indicates if initial load (full load) has been completed
     */
    initializationCompleted: boolean;
    /**
     * CDC apply latency
     */
    latency: number;
    /**
     * Migration state that this database is in
     */
    migrationState: string;
    /**
     * Result type
     * Expected value is 'DatabaseLevelOutput'.
     */
    resultType: "DatabaseLevelOutput";
    /**
     * Migration start time
     */
    startedOn: string;
}

export interface MigrateSqlServerSqlDbSyncTaskOutputErrorResponse {
    /**
     * Migration error
     */
    error: ReportableExceptionResponse;
    /**
     * Result identifier
     */
    id: string;
    /**
     * Result type
     * Expected value is 'ErrorOutput'.
     */
    resultType: "ErrorOutput";
}

export interface MigrateSqlServerSqlDbSyncTaskOutputMigrationLevelResponse {
    /**
     * Count of databases
     */
    databaseCount: number;
    /**
     * Migration end time
     */
    endedOn: string;
    /**
     * Result identifier
     */
    id: string;
    /**
     * Result type
     * Expected value is 'MigrationLevelOutput'.
     */
    resultType: "MigrationLevelOutput";
    /**
     * Source server name
     */
    sourceServer: string;
    /**
     * Source server version
     */
    sourceServerVersion: string;
    /**
     * Migration start time
     */
    startedOn: string;
    /**
     * Target server name
     */
    targetServer: string;
    /**
     * Target server version
     */
    targetServerVersion: string;
}

export interface MigrateSqlServerSqlDbSyncTaskOutputTableLevelResponse {
    /**
     * Number of applied deletes
     */
    cdcDeleteCounter: number;
    /**
     * Number of applied inserts
     */
    cdcInsertCounter: number;
    /**
     * Number of applied updates
     */
    cdcUpdateCounter: number;
    /**
     * Number of data errors occurred
     */
    dataErrorsCounter: number;
    /**
     * Name of the database
     */
    databaseName: string;
    /**
     * Full load end time
     */
    fullLoadEndedOn: string;
    /**
     * Estimate to finish full load
     */
    fullLoadEstFinishTime: string;
    /**
     * Full load start time
     */
    fullLoadStartedOn: string;
    /**
     * Number of rows applied in full load
     */
    fullLoadTotalRows: number;
    /**
     * Result identifier
     */
    id: string;
    /**
     * Last modified time on target
     */
    lastModifiedTime: string;
    /**
     * Result type
     * Expected value is 'TableLevelOutput'.
     */
    resultType: "TableLevelOutput";
    /**
     * Current state of the table migration
     */
    state: string;
    /**
     * Name of the table
     */
    tableName: string;
    /**
     * Total number of applied changes
     */
    totalChangesApplied: number;
}

/**
 * Properties for the task that migrates on-prem SQL Server databases to Azure SQL Database for online migrations
 */
export interface MigrateSqlServerSqlDbSyncTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Task input
     */
    input?: MigrateSqlServerSqlDbSyncTaskInputResponse;
    /**
     * Task output. This is ignored if submitted.
     */
    output: (MigrateSqlServerSqlDbSyncTaskOutputDatabaseErrorResponse | MigrateSqlServerSqlDbSyncTaskOutputDatabaseLevelResponse | MigrateSqlServerSqlDbSyncTaskOutputErrorResponse | MigrateSqlServerSqlDbSyncTaskOutputMigrationLevelResponse | MigrateSqlServerSqlDbSyncTaskOutputTableLevelResponse)[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task type.
     * Expected value is 'Migrate.SqlServer.AzureSqlDb.Sync'.
     */
    taskType: "Migrate.SqlServer.AzureSqlDb.Sync";
}
/**
 * migrateSqlServerSqlDbSyncTaskPropertiesResponseProvideDefaults sets the appropriate defaults for MigrateSqlServerSqlDbSyncTaskPropertiesResponse
 */
export function migrateSqlServerSqlDbSyncTaskPropertiesResponseProvideDefaults(val: MigrateSqlServerSqlDbSyncTaskPropertiesResponse): MigrateSqlServerSqlDbSyncTaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? migrateSqlServerSqlDbSyncTaskInputResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Input for the task that migrates on-prem SQL Server databases to Azure SQL Database
 */
export interface MigrateSqlServerSqlDbTaskInputResponse {
    /**
     * encrypted key for secure fields
     */
    encryptedKeyForSecureFields?: string;
    /**
     * Databases to migrate
     */
    selectedDatabases: MigrateSqlServerSqlDbDatabaseInputResponse[];
    /**
     * Information for connecting to source
     */
    sourceConnectionInfo: SqlConnectionInfoResponse;
    /**
     * Date and time relative to UTC when the migration was started on
     */
    startedOn?: string;
    /**
     * Information for connecting to target
     */
    targetConnectionInfo: SqlConnectionInfoResponse;
    /**
     * Options for enabling various post migration validations. Available options, 
     *  1.) Data Integrity Check: Performs a checksum based comparison on source and target tables after the migration to ensure the correctness of the data. 
     *  2.) Schema Validation: Performs a thorough schema comparison between the source and target tables and provides a list of differences between the source and target database, 3.) Query Analysis: Executes a set of queries picked up automatically either from the Query Plan Cache or Query Store and execute them and compares the execution time between the source and target database.
     */
    validationOptions?: MigrationValidationOptionsResponse;
}
/**
 * migrateSqlServerSqlDbTaskInputResponseProvideDefaults sets the appropriate defaults for MigrateSqlServerSqlDbTaskInputResponse
 */
export function migrateSqlServerSqlDbTaskInputResponseProvideDefaults(val: MigrateSqlServerSqlDbTaskInputResponse): MigrateSqlServerSqlDbTaskInputResponse {
    return {
        ...val,
        sourceConnectionInfo: sqlConnectionInfoResponseProvideDefaults(val.sourceConnectionInfo),
        targetConnectionInfo: sqlConnectionInfoResponseProvideDefaults(val.targetConnectionInfo),
    };
}

export interface MigrateSqlServerSqlDbTaskOutputDatabaseLevelResponse {
    /**
     * Name of the item
     */
    databaseName: string;
    /**
     * Migration end time
     */
    endedOn: string;
    /**
     * Number of database/object errors.
     */
    errorCount: number;
    /**
     * Wildcard string prefix to use for querying all errors of the item
     */
    errorPrefix: string;
    /**
     * Migration exceptions and warnings.
     */
    exceptionsAndWarnings: ReportableExceptionResponse[];
    /**
     * Result identifier
     */
    id: string;
    /**
     * Migration progress message
     */
    message: string;
    /**
     * Number of objects
     */
    numberOfObjects: number;
    /**
     * Number of successfully completed objects
     */
    numberOfObjectsCompleted: number;
    /**
     * Summary of object results in the migration
     */
    objectSummary: {[key: string]: DataItemMigrationSummaryResultResponse};
    /**
     * Wildcard string prefix to use for querying all sub-tem results of the item
     */
    resultPrefix: string;
    /**
     * Result type
     * Expected value is 'DatabaseLevelOutput'.
     */
    resultType: "DatabaseLevelOutput";
    /**
     * Migration stage that this database is in
     */
    stage: string;
    /**
     * Migration start time
     */
    startedOn: string;
    /**
     * Current state of migration
     */
    state: string;
    /**
     * Status message
     */
    statusMessage: string;
}

export interface MigrateSqlServerSqlDbTaskOutputDatabaseLevelValidationResultResponse {
    /**
     * Provides data integrity validation result between the source and target tables that are migrated.
     */
    dataIntegrityValidationResult: DataIntegrityValidationResultResponse;
    /**
     * Validation end time
     */
    endedOn: string;
    /**
     * Result identifier
     */
    id: string;
    /**
     * Migration Identifier
     */
    migrationId: string;
    /**
     * Results of some of the query execution result between source and target database
     */
    queryAnalysisValidationResult: QueryAnalysisValidationResultResponse;
    /**
     * Result type
     * Expected value is 'MigrationDatabaseLevelValidationOutput'.
     */
    resultType: "MigrationDatabaseLevelValidationOutput";
    /**
     * Provides schema comparison result between source and target database
     */
    schemaValidationResult: SchemaComparisonValidationResultResponse;
    /**
     * Name of the source database
     */
    sourceDatabaseName: string;
    /**
     * Validation start time
     */
    startedOn: string;
    /**
     * Current status of validation at the database level
     */
    status: string;
    /**
     * Name of the target database
     */
    targetDatabaseName: string;
}

export interface MigrateSqlServerSqlDbTaskOutputErrorResponse {
    /**
     * Migration error
     */
    error: ReportableExceptionResponse;
    /**
     * Result identifier
     */
    id: string;
    /**
     * Result type
     * Expected value is 'ErrorOutput'.
     */
    resultType: "ErrorOutput";
}

export interface MigrateSqlServerSqlDbTaskOutputMigrationLevelResponse {
    /**
     * Summary of database results in the migration
     */
    databaseSummary: {[key: string]: DatabaseSummaryResultResponse};
    /**
     * Selected databases as a map from database name to database id
     */
    databases: {[key: string]: string};
    /**
     * Duration of task execution in seconds.
     */
    durationInSeconds: number;
    /**
     * Migration end time
     */
    endedOn: string;
    /**
     * Migration exceptions and warnings.
     */
    exceptionsAndWarnings: ReportableExceptionResponse[];
    /**
     * Result identifier
     */
    id: string;
    /**
     * Migration progress message
     */
    message: string;
    /**
     * Migration Report Result, provides unique url for downloading your migration report.
     */
    migrationReportResult?: MigrationReportResultResponse;
    /**
     * Migration Validation Results
     */
    migrationValidationResult?: MigrationValidationResultResponse;
    /**
     * Result type
     * Expected value is 'MigrationLevelOutput'.
     */
    resultType: "MigrationLevelOutput";
    /**
     * Source server brand version
     */
    sourceServerBrandVersion: string;
    /**
     * Source server version
     */
    sourceServerVersion: string;
    /**
     * Migration start time
     */
    startedOn: string;
    /**
     * Current status of migration
     */
    status: string;
    /**
     * Migration status message
     */
    statusMessage: string;
    /**
     * Target server brand version
     */
    targetServerBrandVersion: string;
    /**
     * Target server version
     */
    targetServerVersion: string;
}

export interface MigrateSqlServerSqlDbTaskOutputTableLevelResponse {
    /**
     * Migration end time
     */
    endedOn: string;
    /**
     * Wildcard string prefix to use for querying all errors of the item
     */
    errorPrefix: string;
    /**
     * Result identifier
     */
    id: string;
    /**
     * Number of successfully completed items
     */
    itemsCompletedCount: number;
    /**
     * Number of items
     */
    itemsCount: number;
    /**
     * Name of the item
     */
    objectName: string;
    /**
     * Wildcard string prefix to use for querying all sub-tem results of the item
     */
    resultPrefix: string;
    /**
     * Result type
     * Expected value is 'TableLevelOutput'.
     */
    resultType: "TableLevelOutput";
    /**
     * Migration start time
     */
    startedOn: string;
    /**
     * Current state of migration
     */
    state: string;
    /**
     * Status message
     */
    statusMessage: string;
}

export interface MigrateSqlServerSqlDbTaskOutputValidationResultResponse {
    /**
     * Migration validation result identifier
     */
    id: string;
    /**
     * Migration Identifier
     */
    migrationId: string;
    /**
     * Result type
     * Expected value is 'MigrationValidationOutput'.
     */
    resultType: "MigrationValidationOutput";
    /**
     * Current status of validation at the migration level. Status from the database validation result status will be aggregated here.
     */
    status: string;
    /**
     * Validation summary results for each database
     */
    summaryResults?: {[key: string]: MigrationValidationDatabaseSummaryResultResponse};
}

/**
 * Properties for the task that migrates on-prem SQL Server databases to Azure SQL Database
 */
export interface MigrateSqlServerSqlDbTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * DateTime in UTC when the task was created
     */
    createdOn?: string;
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Task input
     */
    input?: MigrateSqlServerSqlDbTaskInputResponse;
    /**
     * whether the task can be cloned or not
     */
    isCloneable?: boolean;
    /**
     * Task output. This is ignored if submitted.
     */
    output: (MigrateSqlServerSqlDbTaskOutputDatabaseLevelResponse | MigrateSqlServerSqlDbTaskOutputDatabaseLevelValidationResultResponse | MigrateSqlServerSqlDbTaskOutputErrorResponse | MigrateSqlServerSqlDbTaskOutputMigrationLevelResponse | MigrateSqlServerSqlDbTaskOutputTableLevelResponse | MigrateSqlServerSqlDbTaskOutputValidationResultResponse)[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * task id
     */
    taskId?: string;
    /**
     * Task type.
     * Expected value is 'Migrate.SqlServer.SqlDb'.
     */
    taskType: "Migrate.SqlServer.SqlDb";
}
/**
 * migrateSqlServerSqlDbTaskPropertiesResponseProvideDefaults sets the appropriate defaults for MigrateSqlServerSqlDbTaskPropertiesResponse
 */
export function migrateSqlServerSqlDbTaskPropertiesResponseProvideDefaults(val: MigrateSqlServerSqlDbTaskPropertiesResponse): MigrateSqlServerSqlDbTaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? migrateSqlServerSqlDbTaskInputResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Database specific information for SQL to Azure SQL DB Managed Instance migration task inputs
 */
export interface MigrateSqlServerSqlMIDatabaseInputResponse {
    /**
     * The list of backup files to be used in case of existing backups.
     */
    backupFilePaths?: string[];
    /**
     * Backup file share information for backing up this database.
     */
    backupFileShare?: FileShareResponse;
    /**
     * id of the database
     */
    id?: string;
    /**
     * Name of the database
     */
    name: string;
    /**
     * Name of the database at destination
     */
    restoreDatabaseName: string;
}

/**
 * Input for task that migrates SQL Server databases to Azure SQL Database Managed Instance online scenario.
 */
export interface MigrateSqlServerSqlMISyncTaskInputResponse {
    /**
     * Azure Active Directory Application the DMS (classic) instance will use to connect to the target instance of Azure SQL Database Managed Instance and the Azure Storage Account
     */
    azureApp: AzureActiveDirectoryAppResponse;
    /**
     * Backup file share information for all selected databases.
     */
    backupFileShare?: FileShareResponse;
    /**
     * Number of database migrations to start in parallel
     */
    numberOfParallelDatabaseMigrations?: number;
    /**
     * Databases to migrate
     */
    selectedDatabases: MigrateSqlServerSqlMIDatabaseInputResponse[];
    /**
     * Connection information for source SQL Server
     */
    sourceConnectionInfo: SqlConnectionInfoResponse;
    /**
     * Fully qualified resourceId of storage
     */
    storageResourceId: string;
    /**
     * Connection information for Azure SQL Database Managed Instance
     */
    targetConnectionInfo: MiSqlConnectionInfoResponse;
}
/**
 * migrateSqlServerSqlMISyncTaskInputResponseProvideDefaults sets the appropriate defaults for MigrateSqlServerSqlMISyncTaskInputResponse
 */
export function migrateSqlServerSqlMISyncTaskInputResponseProvideDefaults(val: MigrateSqlServerSqlMISyncTaskInputResponse): MigrateSqlServerSqlMISyncTaskInputResponse {
    return {
        ...val,
        sourceConnectionInfo: sqlConnectionInfoResponseProvideDefaults(val.sourceConnectionInfo),
    };
}

export interface MigrateSqlServerSqlMISyncTaskOutputDatabaseLevelResponse {
    /**
     * Backup sets that are currently active (Either being uploaded or getting restored)
     */
    activeBackupSets: BackupSetInfoResponse[];
    /**
     * Name of container created in the Azure Storage account where backups are copied to
     */
    containerName: string;
    /**
     * Database migration end time
     */
    endedOn: string;
    /**
     * prefix string to use for querying errors for this database
     */
    errorPrefix: string;
    /**
     * Migration exceptions and warnings
     */
    exceptionsAndWarnings: ReportableExceptionResponse[];
    /**
     * Details of full backup set
     */
    fullBackupSetInfo: BackupSetInfoResponse;
    /**
     * Result identifier
     */
    id: string;
    /**
     * Whether full backup has been applied to the target database or not
     */
    isFullBackupRestored: boolean;
    /**
     * Last applied backup set information
     */
    lastRestoredBackupSetInfo: BackupSetInfoResponse;
    /**
     * Current state of database
     */
    migrationState: string;
    /**
     * Result type
     * Expected value is 'DatabaseLevelOutput'.
     */
    resultType: "DatabaseLevelOutput";
    /**
     * Name of the database
     */
    sourceDatabaseName: string;
    /**
     * Database migration start time
     */
    startedOn: string;
}

export interface MigrateSqlServerSqlMISyncTaskOutputErrorResponse {
    /**
     * Migration error
     */
    error: ReportableExceptionResponse;
    /**
     * Result identifier
     */
    id: string;
    /**
     * Result type
     * Expected value is 'ErrorOutput'.
     */
    resultType: "ErrorOutput";
}

export interface MigrateSqlServerSqlMISyncTaskOutputMigrationLevelResponse {
    /**
     * Count of databases
     */
    databaseCount: number;
    /**
     * Number of database level errors
     */
    databaseErrorCount: number;
    /**
     * Migration end time
     */
    endedOn: string;
    /**
     * Result identifier
     */
    id: string;
    /**
     * Result type
     * Expected value is 'MigrationLevelOutput'.
     */
    resultType: "MigrationLevelOutput";
    /**
     * Source server brand version
     */
    sourceServerBrandVersion: string;
    /**
     * Source server name
     */
    sourceServerName: string;
    /**
     * Source server version
     */
    sourceServerVersion: string;
    /**
     * Migration start time
     */
    startedOn: string;
    /**
     * Current state of migration
     */
    state: string;
    /**
     * Target server brand version
     */
    targetServerBrandVersion: string;
    /**
     * Target server name
     */
    targetServerName: string;
    /**
     * Target server version
     */
    targetServerVersion: string;
}

/**
 * Properties for task that migrates SQL Server databases to Azure SQL Database Managed Instance sync scenario
 */
export interface MigrateSqlServerSqlMISyncTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * DateTime in UTC when the task was created
     */
    createdOn?: string;
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Task input
     */
    input?: MigrateSqlServerSqlMISyncTaskInputResponse;
    /**
     * Task output. This is ignored if submitted.
     */
    output: (MigrateSqlServerSqlMISyncTaskOutputDatabaseLevelResponse | MigrateSqlServerSqlMISyncTaskOutputErrorResponse | MigrateSqlServerSqlMISyncTaskOutputMigrationLevelResponse)[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task type.
     * Expected value is 'Migrate.SqlServer.AzureSqlDbMI.Sync.LRS'.
     */
    taskType: "Migrate.SqlServer.AzureSqlDbMI.Sync.LRS";
}
/**
 * migrateSqlServerSqlMISyncTaskPropertiesResponseProvideDefaults sets the appropriate defaults for MigrateSqlServerSqlMISyncTaskPropertiesResponse
 */
export function migrateSqlServerSqlMISyncTaskPropertiesResponseProvideDefaults(val: MigrateSqlServerSqlMISyncTaskPropertiesResponse): MigrateSqlServerSqlMISyncTaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? migrateSqlServerSqlMISyncTaskInputResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Input for task that migrates SQL Server databases to Azure SQL Database Managed Instance.
 */
export interface MigrateSqlServerSqlMITaskInputResponse {
    /**
     * Azure Active Directory domain name in the format of 'contoso.com' for federated Azure AD or 'contoso.onmicrosoft.com' for managed domain, required if and only if Windows logins are selected
     */
    aadDomainName?: string;
    /**
     * SAS URI of Azure Storage Account Container to be used for storing backup files.
     */
    backupBlobShare: BlobShareResponse;
    /**
     * Backup file share information for all selected databases.
     */
    backupFileShare?: FileShareResponse;
    /**
     * Backup Mode to specify whether to use existing backup or create new backup. If using existing backups, backup file paths are required to be provided in selectedDatabases.
     */
    backupMode?: string;
    /**
     * encrypted key for secure fields
     */
    encryptedKeyForSecureFields?: string;
    /**
     * Agent Jobs to migrate.
     */
    selectedAgentJobs?: string[];
    /**
     * Databases to migrate
     */
    selectedDatabases: MigrateSqlServerSqlMIDatabaseInputResponse[];
    /**
     * Logins to migrate.
     */
    selectedLogins?: string[];
    /**
     * Information for connecting to source
     */
    sourceConnectionInfo: SqlConnectionInfoResponse;
    /**
     * Date and time relative to UTC when the migration was started on
     */
    startedOn?: string;
    /**
     * Information for connecting to target
     */
    targetConnectionInfo: SqlConnectionInfoResponse;
}
/**
 * migrateSqlServerSqlMITaskInputResponseProvideDefaults sets the appropriate defaults for MigrateSqlServerSqlMITaskInputResponse
 */
export function migrateSqlServerSqlMITaskInputResponseProvideDefaults(val: MigrateSqlServerSqlMITaskInputResponse): MigrateSqlServerSqlMITaskInputResponse {
    return {
        ...val,
        sourceConnectionInfo: sqlConnectionInfoResponseProvideDefaults(val.sourceConnectionInfo),
        targetConnectionInfo: sqlConnectionInfoResponseProvideDefaults(val.targetConnectionInfo),
    };
}

export interface MigrateSqlServerSqlMITaskOutputAgentJobLevelResponse {
    /**
     * Migration end time
     */
    endedOn: string;
    /**
     * Migration errors and warnings per job
     */
    exceptionsAndWarnings: ReportableExceptionResponse[];
    /**
     * Result identifier
     */
    id: string;
    /**
     * The state of the original Agent Job.
     */
    isEnabled: boolean;
    /**
     * Migration progress message
     */
    message: string;
    /**
     * Agent Job name.
     */
    name: string;
    /**
     * Result type
     * Expected value is 'AgentJobLevelOutput'.
     */
    resultType: "AgentJobLevelOutput";
    /**
     * Migration start time
     */
    startedOn: string;
    /**
     * Current state of migration
     */
    state: string;
}

export interface MigrateSqlServerSqlMITaskOutputDatabaseLevelResponse {
    /**
     * Name of the database
     */
    databaseName: string;
    /**
     * Migration end time
     */
    endedOn: string;
    /**
     * Migration exceptions and warnings
     */
    exceptionsAndWarnings: ReportableExceptionResponse[];
    /**
     * Result identifier
     */
    id: string;
    /**
     * Migration progress message
     */
    message: string;
    /**
     * Result type
     * Expected value is 'DatabaseLevelOutput'.
     */
    resultType: "DatabaseLevelOutput";
    /**
     * Size of the database in megabytes
     */
    sizeMB: number;
    /**
     * Current stage of migration
     */
    stage: string;
    /**
     * Migration start time
     */
    startedOn: string;
    /**
     * Current state of migration
     */
    state: string;
}

export interface MigrateSqlServerSqlMITaskOutputErrorResponse {
    /**
     * Migration error
     */
    error: ReportableExceptionResponse;
    /**
     * Result identifier
     */
    id: string;
    /**
     * Result type
     * Expected value is 'ErrorOutput'.
     */
    resultType: "ErrorOutput";
}

export interface MigrateSqlServerSqlMITaskOutputLoginLevelResponse {
    /**
     * Login migration end time
     */
    endedOn: string;
    /**
     * Login migration errors and warnings per login
     */
    exceptionsAndWarnings: ReportableExceptionResponse[];
    /**
     * Result identifier
     */
    id: string;
    /**
     * Login name.
     */
    loginName: string;
    /**
     * Login migration progress message
     */
    message: string;
    /**
     * Result type
     * Expected value is 'LoginLevelOutput'.
     */
    resultType: "LoginLevelOutput";
    /**
     * Current stage of login
     */
    stage: string;
    /**
     * Login migration start time
     */
    startedOn: string;
    /**
     * Current state of login
     */
    state: string;
}

export interface MigrateSqlServerSqlMITaskOutputMigrationLevelResponse {
    /**
     * Selected agent jobs as a map from name to id
     */
    agentJobs: {[key: string]: string};
    /**
     * Selected databases as a map from database name to database id
     */
    databases: {[key: string]: string};
    /**
     * Migration end time
     */
    endedOn: string;
    /**
     * Migration exceptions and warnings.
     */
    exceptionsAndWarnings: ReportableExceptionResponse[];
    /**
     * Result identifier
     */
    id: string;
    /**
     * Selected logins as a map from name to id
     */
    logins: {[key: string]: string};
    /**
     * Migration progress message
     */
    message: string;
    /**
     * List of orphaned users.
     */
    orphanedUsersInfo: OrphanedUserInfoResponse[];
    /**
     * Result type
     * Expected value is 'MigrationLevelOutput'.
     */
    resultType: "MigrationLevelOutput";
    /**
     * Map of server role migration results.
     */
    serverRoleResults: {[key: string]: StartMigrationScenarioServerRoleResultResponse};
    /**
     * Source server brand version
     */
    sourceServerBrandVersion: string;
    /**
     * Source server version
     */
    sourceServerVersion: string;
    /**
     * Migration start time
     */
    startedOn: string;
    /**
     * Current state of migration
     */
    state: string;
    /**
     * Current status of migration
     */
    status: string;
    /**
     * Target server brand version
     */
    targetServerBrandVersion: string;
    /**
     * Target server version
     */
    targetServerVersion: string;
}

/**
 * Properties for task that migrates SQL Server databases to Azure SQL Database Managed Instance
 */
export interface MigrateSqlServerSqlMITaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * DateTime in UTC when the task was created
     */
    createdOn?: string;
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Task input
     */
    input?: MigrateSqlServerSqlMITaskInputResponse;
    /**
     * whether the task can be cloned or not
     */
    isCloneable?: boolean;
    /**
     * Task output. This is ignored if submitted.
     */
    output: (MigrateSqlServerSqlMITaskOutputAgentJobLevelResponse | MigrateSqlServerSqlMITaskOutputDatabaseLevelResponse | MigrateSqlServerSqlMITaskOutputErrorResponse | MigrateSqlServerSqlMITaskOutputLoginLevelResponse | MigrateSqlServerSqlMITaskOutputMigrationLevelResponse)[];
    /**
     * parent task id
     */
    parentTaskId?: string;
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * task id
     */
    taskId?: string;
    /**
     * Task type.
     * Expected value is 'Migrate.SqlServer.AzureSqlDbMI'.
     */
    taskType: "Migrate.SqlServer.AzureSqlDbMI";
}
/**
 * migrateSqlServerSqlMITaskPropertiesResponseProvideDefaults sets the appropriate defaults for MigrateSqlServerSqlMITaskPropertiesResponse
 */
export function migrateSqlServerSqlMITaskPropertiesResponseProvideDefaults(val: MigrateSqlServerSqlMITaskPropertiesResponse): MigrateSqlServerSqlMITaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? migrateSqlServerSqlMITaskInputResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Input for task that migrates SSIS packages from SQL Server to Azure SQL Database Managed Instance.
 */
export interface MigrateSsisTaskInputResponse {
    /**
     * Information for connecting to source
     */
    sourceConnectionInfo: SqlConnectionInfoResponse;
    /**
     * SSIS package migration information.
     */
    ssisMigrationInfo: SsisMigrationInfoResponse;
    /**
     * Information for connecting to target
     */
    targetConnectionInfo: SqlConnectionInfoResponse;
}
/**
 * migrateSsisTaskInputResponseProvideDefaults sets the appropriate defaults for MigrateSsisTaskInputResponse
 */
export function migrateSsisTaskInputResponseProvideDefaults(val: MigrateSsisTaskInputResponse): MigrateSsisTaskInputResponse {
    return {
        ...val,
        sourceConnectionInfo: sqlConnectionInfoResponseProvideDefaults(val.sourceConnectionInfo),
        targetConnectionInfo: sqlConnectionInfoResponseProvideDefaults(val.targetConnectionInfo),
    };
}

export interface MigrateSsisTaskOutputMigrationLevelResponse {
    /**
     * Migration end time
     */
    endedOn: string;
    /**
     * Migration exceptions and warnings.
     */
    exceptionsAndWarnings: ReportableExceptionResponse[];
    /**
     * Result identifier
     */
    id: string;
    /**
     * Migration progress message
     */
    message: string;
    /**
     * Result type
     * Expected value is 'MigrationLevelOutput'.
     */
    resultType: "MigrationLevelOutput";
    /**
     * Source server brand version
     */
    sourceServerBrandVersion: string;
    /**
     * Source server version
     */
    sourceServerVersion: string;
    /**
     * Stage of SSIS migration.
     */
    stage: string;
    /**
     * Migration start time
     */
    startedOn: string;
    /**
     * Current status of migration
     */
    status: string;
    /**
     * Target server brand version
     */
    targetServerBrandVersion: string;
    /**
     * Target server version
     */
    targetServerVersion: string;
}

export interface MigrateSsisTaskOutputProjectLevelResponse {
    /**
     * Migration end time
     */
    endedOn: string;
    /**
     * Migration exceptions and warnings
     */
    exceptionsAndWarnings: ReportableExceptionResponse[];
    /**
     * Name of the folder
     */
    folderName: string;
    /**
     * Result identifier
     */
    id: string;
    /**
     * Migration progress message
     */
    message: string;
    /**
     * Name of the project
     */
    projectName: string;
    /**
     * Result type
     * Expected value is 'SsisProjectLevelOutput'.
     */
    resultType: "SsisProjectLevelOutput";
    /**
     * Stage of SSIS migration.
     */
    stage: string;
    /**
     * Migration start time
     */
    startedOn: string;
    /**
     * Current state of migration
     */
    state: string;
}

/**
 * Properties for task that migrates SSIS packages from SQL Server databases to Azure SQL Database Managed Instance.
 */
export interface MigrateSsisTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Task input
     */
    input?: MigrateSsisTaskInputResponse;
    /**
     * Task output. This is ignored if submitted.
     */
    output: (MigrateSsisTaskOutputMigrationLevelResponse | MigrateSsisTaskOutputProjectLevelResponse)[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task type.
     * Expected value is 'Migrate.Ssis'.
     */
    taskType: "Migrate.Ssis";
}
/**
 * migrateSsisTaskPropertiesResponseProvideDefaults sets the appropriate defaults for MigrateSsisTaskPropertiesResponse
 */
export function migrateSsisTaskPropertiesResponseProvideDefaults(val: MigrateSsisTaskPropertiesResponse): MigrateSsisTaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? migrateSsisTaskInputResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Input for command that completes sync migration for a database.
 */
export interface MigrateSyncCompleteCommandInputResponse {
    /**
     * Time stamp to complete
     */
    commitTimeStamp?: string;
    /**
     * Name of database
     */
    databaseName: string;
}

/**
 * Output for command that completes sync migration for a database.
 */
export interface MigrateSyncCompleteCommandOutputResponse {
    /**
     * List of errors that happened during the command execution
     */
    errors: ReportableExceptionResponse[];
    /**
     * Result identifier
     */
    id: string;
}

/**
 * Properties for the command that completes sync migration for a database.
 */
export interface MigrateSyncCompleteCommandPropertiesResponse {
    /**
     * Command id
     */
    commandId?: string;
    /**
     * Command type.
     * Expected value is 'Migrate.Sync.Complete.Database'.
     */
    commandType: "Migrate.Sync.Complete.Database";
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Command input
     */
    input?: MigrateSyncCompleteCommandInputResponse;
    /**
     * Command output. This is ignored if submitted.
     */
    output: MigrateSyncCompleteCommandOutputResponse;
    /**
     * The state of the command. This is ignored if submitted.
     */
    state: string;
}

/**
 * Information about migration eligibility of a server object
 */
export interface MigrationEligibilityInfoResponse {
    /**
     * Whether object is eligible for migration or not.
     */
    isEligibleForMigration: boolean;
    /**
     * Information about eligibility failure for the server object.
     */
    validationMessages: string[];
}

/**
 * Migration validation report result, contains the url for downloading the generated report.
 */
export interface MigrationReportResultResponse {
    /**
     * Migration validation result identifier
     */
    id?: string;
    /**
     * The url of the report.
     */
    reportUrl?: string;
}

/**
 * Migration Validation Database level summary result
 */
export interface MigrationValidationDatabaseSummaryResultResponse {
    /**
     * Validation end time
     */
    endedOn: string;
    /**
     * Result identifier
     */
    id: string;
    /**
     * Migration Identifier
     */
    migrationId: string;
    /**
     * Name of the source database
     */
    sourceDatabaseName: string;
    /**
     * Validation start time
     */
    startedOn: string;
    /**
     * Current status of validation at the database level
     */
    status: string;
    /**
     * Name of the target database
     */
    targetDatabaseName: string;
}

/**
 * Types of validations to run after the migration
 */
export interface MigrationValidationOptionsResponse {
    /**
     * Allows to perform a checksum based data integrity validation between source and target for the selected database / tables .
     */
    enableDataIntegrityValidation?: boolean;
    /**
     * Allows to perform a quick and intelligent query analysis by retrieving queries from the source database and executes them in the target. The result will have execution statistics for executions in source and target databases for the extracted queries.
     */
    enableQueryAnalysisValidation?: boolean;
    /**
     * Allows to compare the schema information between source and target.
     */
    enableSchemaValidation?: boolean;
}

/**
 * Migration Validation Result
 */
export interface MigrationValidationResultResponse {
    /**
     * Migration validation result identifier
     */
    id: string;
    /**
     * Migration Identifier
     */
    migrationId: string;
    /**
     * Current status of validation at the migration level. Status from the database validation result status will be aggregated here.
     */
    status: string;
    /**
     * Validation summary results for each database
     */
    summaryResults?: {[key: string]: MigrationValidationDatabaseSummaryResultResponse};
}

/**
 * Mongo Connection
 */
export interface MongoConnectionInformationResponse {
    /**
     * Host of mongo connection.
     */
    host?: string;
    /**
     * Port of mongo connection.
     */
    port?: number;
}

/**
 * Describes a MongoDB data source
 */
export interface MongoDbClusterInfoResponse {
    /**
     * A list of non-system databases in the cluster
     */
    databases: MongoDbDatabaseInfoResponse[];
    /**
     * Whether the cluster supports sharded collections
     */
    supportsSharding: boolean;
    /**
     * The type of data source
     */
    type: string;
    /**
     * The version of the data source in the form x.y.z (e.g. 3.6.7). Not used if Type is BlobContainer.
     */
    version: string;
}

/**
 * Describes a supported collection within a MongoDB database
 */
export interface MongoDbCollectionInfoResponse {
    /**
     * The average document size, or -1 if the average size is unknown
     */
    averageDocumentSize: number;
    /**
     * The estimated total data size, in bytes, or -1 if the size is unknown.
     */
    dataSize: number;
    /**
     * The name of the database containing the collection
     */
    databaseName: string;
    /**
     * The estimated total number of documents, or -1 if the document count is unknown
     */
    documentCount: number;
    /**
     * Whether the collection is a capped collection (i.e. whether it has a fixed size and acts like a circular buffer)
     */
    isCapped: boolean;
    /**
     * Whether the collection is system collection
     */
    isSystemCollection: boolean;
    /**
     * Whether the collection is a view of another collection
     */
    isView: boolean;
    /**
     * The unqualified name of the database or collection
     */
    name: string;
    /**
     * The qualified name of the database or collection. For a collection, this is the database-qualified name.
     */
    qualifiedName: string;
    /**
     * The shard key on the collection, or null if the collection is not sharded
     */
    shardKey?: MongoDbShardKeyInfoResponse;
    /**
     * Whether the database has sharding enabled. Note that the migration task will enable sharding on the target if necessary.
     */
    supportsSharding: boolean;
    /**
     * The name of the collection that this is a view of, if IsView is true
     */
    viewOf?: string;
}

/**
 * Describes the progress of a collection
 */
export interface MongoDbCollectionProgressResponse {
    /**
     * The number of document bytes copied during the Copying stage
     */
    bytesCopied: number;
    /**
     * The number of documents copied during the Copying stage
     */
    documentsCopied: number;
    /**
     * The elapsed time in the format [ddd.]hh:mm:ss[.fffffff] (i.e. TimeSpan format)
     */
    elapsedTime: string;
    /**
     * The errors and warnings that have occurred for the current object. The keys are the error codes.
     */
    errors: {[key: string]: MongoDbErrorResponse};
    /**
     * The number of oplog events awaiting replay
     */
    eventsPending: number;
    /**
     * The number of oplog events replayed so far
     */
    eventsReplayed: number;
    /**
     * The timestamp of the last oplog event received, or null if no oplog event has been received yet
     */
    lastEventTime?: string;
    /**
     * The timestamp of the last oplog event replayed, or null if no oplog event has been replayed yet
     */
    lastReplayTime?: string;
    /**
     * The name of the progress object. For a collection, this is the unqualified collection name. For a database, this is the database name. For the overall migration, this is null.
     */
    name?: string;
    /**
     * The qualified name of the progress object. For a collection, this is the database-qualified name. For a database, this is the database name. For the overall migration, this is null.
     */
    qualifiedName?: string;
    /**
     * The type of progress object
     * Expected value is 'Collection'.
     */
    resultType: "Collection";
    state: string;
    /**
     * The total number of document bytes on the source at the beginning of the Copying stage, or -1 if the total size was unknown
     */
    totalBytes: number;
    /**
     * The total number of documents on the source at the beginning of the Copying stage, or -1 if the total count was unknown
     */
    totalDocuments: number;
}

/**
 * Describes how an individual MongoDB collection should be migrated
 */
export interface MongoDbCollectionSettingsResponse {
    /**
     * Whether the migrator is allowed to drop the target collection in the course of performing a migration. The default is true.
     */
    canDelete?: boolean;
    /**
     * Describes a MongoDB shard key
     */
    shardKey?: MongoDbShardKeySettingResponse;
    /**
     * The RUs that should be configured on a CosmosDB target, or null to use the default. This has no effect on non-CosmosDB targets.
     */
    targetRUs?: number;
}

/**
 * Describes a connection to a MongoDB data source
 */
export interface MongoDbConnectionInfoResponse {
    /**
     * Additional connection settings
     */
    additionalSettings?: string;
    /**
     * Authentication type to use for connection
     */
    authentication?: string;
    /**
     * A MongoDB connection string or blob container URL. The user name and password can be specified here or in the userName and password properties
     */
    connectionString: string;
    /**
     * Data source 
     */
    dataSource?: string;
    /**
     * Whether to encrypt the connection
     */
    encryptConnection?: boolean;
    enforceSSL?: boolean;
    /**
     * Password credential.
     */
    password?: string;
    /**
     * port for server
     */
    port?: number;
    /**
     * server brand version
     */
    serverBrandVersion?: string;
    /**
     * name of the server
     */
    serverName?: string;
    /**
     * server version
     */
    serverVersion?: string;
    /**
     * Whether to trust the server certificate
     */
    trustServerCertificate?: boolean;
    /**
     * Type of connection info
     * Expected value is 'MongoDbConnectionInfo'.
     */
    type: "MongoDbConnectionInfo";
    /**
     * User name
     */
    userName?: string;
}
/**
 * mongoDbConnectionInfoResponseProvideDefaults sets the appropriate defaults for MongoDbConnectionInfoResponse
 */
export function mongoDbConnectionInfoResponseProvideDefaults(val: MongoDbConnectionInfoResponse): MongoDbConnectionInfoResponse {
    return {
        ...val,
        trustServerCertificate: (val.trustServerCertificate) ?? false,
    };
}

/**
 * Describes a database within a MongoDB data source
 */
export interface MongoDbDatabaseInfoResponse {
    /**
     * The average document size, or -1 if the average size is unknown
     */
    averageDocumentSize: number;
    /**
     * A list of supported collections in a MongoDB database
     */
    collections: MongoDbCollectionInfoResponse[];
    /**
     * The estimated total data size, in bytes, or -1 if the size is unknown.
     */
    dataSize: number;
    /**
     * The estimated total number of documents, or -1 if the document count is unknown
     */
    documentCount: number;
    /**
     * The unqualified name of the database or collection
     */
    name: string;
    /**
     * The qualified name of the database or collection. For a collection, this is the database-qualified name.
     */
    qualifiedName: string;
    /**
     * Whether the database has sharding enabled. Note that the migration task will enable sharding on the target if necessary.
     */
    supportsSharding: boolean;
}

/**
 * Describes the progress of a database
 */
export interface MongoDbDatabaseProgressResponse {
    /**
     * The number of document bytes copied during the Copying stage
     */
    bytesCopied: number;
    /**
     * The progress of the collections in the database. The keys are the unqualified names of the collections
     */
    collections?: {[key: string]: MongoDbCollectionProgressResponse};
    /**
     * The number of documents copied during the Copying stage
     */
    documentsCopied: number;
    /**
     * The elapsed time in the format [ddd.]hh:mm:ss[.fffffff] (i.e. TimeSpan format)
     */
    elapsedTime: string;
    /**
     * The errors and warnings that have occurred for the current object. The keys are the error codes.
     */
    errors: {[key: string]: MongoDbErrorResponse};
    /**
     * The number of oplog events awaiting replay
     */
    eventsPending: number;
    /**
     * The number of oplog events replayed so far
     */
    eventsReplayed: number;
    /**
     * The timestamp of the last oplog event received, or null if no oplog event has been received yet
     */
    lastEventTime?: string;
    /**
     * The timestamp of the last oplog event replayed, or null if no oplog event has been replayed yet
     */
    lastReplayTime?: string;
    /**
     * The name of the progress object. For a collection, this is the unqualified collection name. For a database, this is the database name. For the overall migration, this is null.
     */
    name?: string;
    /**
     * The qualified name of the progress object. For a collection, this is the database-qualified name. For a database, this is the database name. For the overall migration, this is null.
     */
    qualifiedName?: string;
    /**
     * The type of progress object
     * Expected value is 'Database'.
     */
    resultType: "Database";
    state: string;
    /**
     * The total number of document bytes on the source at the beginning of the Copying stage, or -1 if the total size was unknown
     */
    totalBytes: number;
    /**
     * The total number of documents on the source at the beginning of the Copying stage, or -1 if the total count was unknown
     */
    totalDocuments: number;
}

/**
 * Describes how an individual MongoDB database should be migrated
 */
export interface MongoDbDatabaseSettingsResponse {
    /**
     * The collections on the source database to migrate to the target. The keys are the unqualified names of the collections.
     */
    collections: {[key: string]: MongoDbCollectionSettingsResponse};
    /**
     * The RUs that should be configured on a CosmosDB target, or null to use the default, or 0 if throughput should not be provisioned for the database. This has no effect on non-CosmosDB targets.
     */
    targetRUs?: number;
}

/**
 * Describes an error or warning that occurred during a MongoDB migration
 */
export interface MongoDbErrorResponse {
    /**
     * The non-localized, machine-readable code that describes the error or warning
     */
    code?: string;
    /**
     * The number of times the error or warning has occurred
     */
    count?: number;
    /**
     * The localized, human-readable message that describes the error or warning
     */
    message?: string;
    /**
     * The type of error or warning
     */
    type?: string;
}

/**
 * Describes the progress of the overall migration
 */
export interface MongoDbMigrationProgressResponse {
    /**
     * The number of document bytes copied during the Copying stage
     */
    bytesCopied: number;
    /**
     * The progress of the databases in the migration. The keys are the names of the databases
     */
    databases?: {[key: string]: MongoDbDatabaseProgressResponse};
    /**
     * The number of documents copied during the Copying stage
     */
    documentsCopied: number;
    /**
     * The elapsed time in the format [ddd.]hh:mm:ss[.fffffff] (i.e. TimeSpan format)
     */
    elapsedTime: string;
    /**
     * The errors and warnings that have occurred for the current object. The keys are the error codes.
     */
    errors: {[key: string]: MongoDbErrorResponse};
    /**
     * The number of oplog events awaiting replay
     */
    eventsPending: number;
    /**
     * The number of oplog events replayed so far
     */
    eventsReplayed: number;
    /**
     * The timestamp of the last oplog event received, or null if no oplog event has been received yet
     */
    lastEventTime?: string;
    /**
     * The timestamp of the last oplog event replayed, or null if no oplog event has been replayed yet
     */
    lastReplayTime?: string;
    /**
     * The name of the progress object. For a collection, this is the unqualified collection name. For a database, this is the database name. For the overall migration, this is null.
     */
    name?: string;
    /**
     * The qualified name of the progress object. For a collection, this is the database-qualified name. For a database, this is the database name. For the overall migration, this is null.
     */
    qualifiedName?: string;
    /**
     * The type of progress object
     * Expected value is 'Migration'.
     */
    resultType: "Migration";
    state: string;
    /**
     * The total number of document bytes on the source at the beginning of the Copying stage, or -1 if the total size was unknown
     */
    totalBytes: number;
    /**
     * The total number of documents on the source at the beginning of the Copying stage, or -1 if the total count was unknown
     */
    totalDocuments: number;
}

/**
 * Describes how a MongoDB data migration should be performed
 */
export interface MongoDbMigrationSettingsResponse {
    /**
     * The RU limit on a CosmosDB target that collections will be temporarily increased to (if lower) during the initial copy of a migration, from 10,000 to 1,000,000, or 0 to use the default boost (which is generally the maximum), or null to not boost the RUs. This setting has no effect on non-CosmosDB targets.
     */
    boostRUs?: number;
    /**
     * The databases on the source cluster to migrate to the target. The keys are the names of the databases.
     */
    databases: {[key: string]: MongoDbDatabaseSettingsResponse};
    /**
     * Describes how changes will be replicated from the source to the target. The default is OneTime.
     */
    replication?: string;
    /**
     * Settings used to connect to the source cluster
     */
    source: MongoDbConnectionInfoResponse;
    /**
     * Settings used to connect to the target cluster
     */
    target: MongoDbConnectionInfoResponse;
    /**
     * Settings used to limit the resource usage of the migration
     */
    throttling?: MongoDbThrottlingSettingsResponse;
}
/**
 * mongoDbMigrationSettingsResponseProvideDefaults sets the appropriate defaults for MongoDbMigrationSettingsResponse
 */
export function mongoDbMigrationSettingsResponseProvideDefaults(val: MongoDbMigrationSettingsResponse): MongoDbMigrationSettingsResponse {
    return {
        ...val,
        source: mongoDbConnectionInfoResponseProvideDefaults(val.source),
        target: mongoDbConnectionInfoResponseProvideDefaults(val.target),
    };
}

/**
 * Describes a field reference within a MongoDB shard key
 */
export interface MongoDbShardKeyFieldResponse {
    /**
     * The name of the field
     */
    name: string;
    /**
     * The field ordering
     */
    order: string;
}

/**
 * Describes a MongoDB shard key
 */
export interface MongoDbShardKeyInfoResponse {
    /**
     * The fields within the shard key
     */
    fields: MongoDbShardKeyFieldResponse[];
    /**
     * Whether the shard key is unique
     */
    isUnique: boolean;
}

/**
 * Describes a MongoDB shard key
 */
export interface MongoDbShardKeySettingResponse {
    /**
     * The fields within the shard key
     */
    fields: MongoDbShardKeyFieldResponse[];
    /**
     * Whether the shard key is unique
     */
    isUnique?: boolean;
}

/**
 * Specifies resource limits for the migration
 */
export interface MongoDbThrottlingSettingsResponse {
    /**
     * The maximum number of work items (e.g. collection copies) that will be processed in parallel
     */
    maxParallelism?: number;
    /**
     * The percentage of CPU time that the migrator will try to avoid using, from 0 to 100
     */
    minFreeCpu?: number;
    /**
     * The number of megabytes of RAM that the migrator will try to avoid using
     */
    minFreeMemoryMb?: number;
}

/**
 * Mongo source and target database and collection details.
 */
export interface MongoMigrationCollectionResponse {
    /**
     * Detailed migration status. Not included by default.
     */
    migrationProgressDetails: MongoMigrationProgressDetailsResponse;
    /**
     * Source collection name.
     */
    sourceCollection?: string;
    /**
     * Source database name.
     */
    sourceDatabase?: string;
    /**
     * Target collection name.
     */
    targetCollection?: string;
    /**
     * Target database name.
     */
    targetDatabase?: string;
}

/**
 * Detailed status of collection migration.
 */
export interface MongoMigrationProgressDetailsResponse {
    /**
     * Migration duration
     */
    durationInSeconds: number;
    /**
     * Migration Error
     */
    migrationError: string;
    /**
     * Migration Status
     */
    migrationStatus: string;
    /**
     * Processed Document Count
     */
    processedDocumentCount: number;
    /**
     * Source Document Count
     */
    sourceDocumentCount: number;
}

/**
 * Information for connecting to MySQL server
 */
export interface MySqlConnectionInfoResponse {
    /**
     * Additional connection settings
     */
    additionalSettings?: string;
    /**
     * Authentication type to use for connection
     */
    authentication?: string;
    /**
     * Data source 
     */
    dataSource?: string;
    /**
     * Whether to encrypt the connection
     */
    encryptConnection?: boolean;
    /**
     * Password credential.
     */
    password?: string;
    /**
     * Port for Server
     */
    port: number;
    /**
     * Name of the server
     */
    serverName: string;
    /**
     * Type of connection info
     * Expected value is 'MySqlConnectionInfo'.
     */
    type: "MySqlConnectionInfo";
    /**
     * User name
     */
    userName?: string;
}
/**
 * mySqlConnectionInfoResponseProvideDefaults sets the appropriate defaults for MySqlConnectionInfoResponse
 */
export function mySqlConnectionInfoResponseProvideDefaults(val: MySqlConnectionInfoResponse): MySqlConnectionInfoResponse {
    return {
        ...val,
        encryptConnection: (val.encryptConnection) ?? true,
    };
}

export interface NodeMonitoringDataResponse {
    /**
     *  Unmatched properties from the message are deserialized in this collection.
     */
    additionalProperties: {[key: string]: any};
    /**
     * Available memory (MB) on the integration runtime node.
     */
    availableMemoryInMB: number;
    /**
     * Maximum concurrent jobs on the integration runtime node.
     */
    concurrentJobsLimit: number;
    /**
     * The number of jobs currently running on the integration runtime node.
     */
    concurrentJobsRunning: number;
    /**
     * CPU percentage on the integration runtime node.
     */
    cpuUtilization: number;
    /**
     * The maximum concurrent jobs in this integration runtime.
     */
    maxConcurrentJobs: number;
    /**
     * Name of the integration runtime node.
     */
    nodeName: string;
    /**
     * Received bytes on the integration runtime node.
     */
    receivedBytes: number;
    /**
     * Sent bytes on the integration runtime node.
     */
    sentBytes: number;
}

/**
 * Error information in OData format.
 */
export interface ODataErrorResponse {
    /**
     * The machine-readable description of the error, such as 'InvalidRequest' or 'InternalServerError'
     */
    code?: string;
    /**
     * Inner errors that caused this error
     */
    details?: ODataErrorResponse[];
    /**
     * The human-readable description of the error
     */
    message?: string;
}

/**
 * Information for connecting to Oracle server
 */
export interface OracleConnectionInfoResponse {
    /**
     * Authentication type to use for connection
     */
    authentication?: string;
    /**
     * EZConnect or TNSName connection string.
     */
    dataSource: string;
    /**
     * Password credential.
     */
    password?: string;
    /**
     * port for server
     */
    port?: number;
    /**
     * name of the server
     */
    serverName?: string;
    /**
     * server version
     */
    serverVersion?: string;
    /**
     * Type of connection info
     * Expected value is 'OracleConnectionInfo'.
     */
    type: "OracleConnectionInfo";
    /**
     * User name
     */
    userName?: string;
}

/**
 * Information of orphaned users on the SQL server database.
 */
export interface OrphanedUserInfoResponse {
    /**
     * Parent database of the user
     */
    databaseName?: string;
    /**
     * Name of the orphaned user
     */
    name?: string;
}

/**
 * Information for connecting to PostgreSQL server
 */
export interface PostgreSqlConnectionInfoResponse {
    /**
     * Additional connection settings
     */
    additionalSettings?: string;
    /**
     * Authentication type to use for connection
     */
    authentication?: string;
    /**
     * Data source 
     */
    dataSource?: string;
    /**
     * Name of the database
     */
    databaseName?: string;
    /**
     * Whether to encrypt the connection
     */
    encryptConnection?: boolean;
    /**
     * Password credential.
     */
    password?: string;
    /**
     * Port for Server
     */
    port: number;
    /**
     * server brand version
     */
    serverBrandVersion?: string;
    /**
     * Name of the server
     */
    serverName: string;
    /**
     * server version
     */
    serverVersion?: string;
    /**
     * Whether to trust the server certificate
     */
    trustServerCertificate?: boolean;
    /**
     * Type of connection info
     * Expected value is 'PostgreSqlConnectionInfo'.
     */
    type: "PostgreSqlConnectionInfo";
    /**
     * User name
     */
    userName?: string;
}
/**
 * postgreSqlConnectionInfoResponseProvideDefaults sets the appropriate defaults for PostgreSqlConnectionInfoResponse
 */
export function postgreSqlConnectionInfoResponseProvideDefaults(val: PostgreSqlConnectionInfoResponse): PostgreSqlConnectionInfoResponse {
    return {
        ...val,
        encryptConnection: (val.encryptConnection) ?? true,
        trustServerCertificate: (val.trustServerCertificate) ?? false,
    };
}

/**
 * Base class for file properties.
 */
export interface ProjectFilePropertiesResponse {
    /**
     * Optional File extension. If submitted it should not have a leading period and must match the extension from filePath.
     */
    extension?: string;
    /**
     * Relative path of this file resource. This property can be set when creating or updating the file resource.
     */
    filePath?: string;
    /**
     * Modification DateTime.
     */
    lastModified: string;
    /**
     * File content type. This property can be modified to reflect the file content type.
     */
    mediaType?: string;
    /**
     * File size.
     */
    size: number;
}

/**
 * Results for query analysis comparison between the source and target
 */
export interface QueryAnalysisValidationResultResponse {
    /**
     * List of queries executed and it's execution results in source and target
     */
    queryResults?: QueryExecutionResultResponse;
    /**
     * Errors that are part of the execution
     */
    validationErrors?: ValidationErrorResponse;
}

/**
 * Describes query analysis results for execution in source and target
 */
export interface QueryExecutionResultResponse {
    /**
     * Query text retrieved from the source server
     */
    queryText?: string;
    /**
     * Query analysis result from the source
     */
    sourceResult?: ExecutionStatisticsResponse;
    /**
     * Total no. of statements in the batch
     */
    statementsInBatch?: number;
    /**
     * Query analysis result from the target
     */
    targetResult?: ExecutionStatisticsResponse;
}

/**
 * Exception object for all custom exceptions
 */
export interface ReportableExceptionResponse {
    /**
     * Actionable steps for this exception
     */
    actionableMessage?: string;
    /**
     * The path to the file where exception occurred
     */
    filePath?: string;
    /**
     * Coded numerical value that is assigned to a specific exception
     */
    hResult?: number;
    /**
     * The line number where exception occurred
     */
    lineNumber?: string;
    /**
     * Error message
     */
    message?: string;
    /**
     * Stack trace
     */
    stackTrace?: string;
}

/**
 * Results for schema comparison between the source and target
 */
export interface SchemaComparisonValidationResultResponse {
    /**
     * List of schema differences between the source and target databases
     */
    schemaDifferences?: SchemaComparisonValidationResultTypeResponse;
    /**
     * Count of source database objects
     */
    sourceDatabaseObjectCount?: {[key: string]: number};
    /**
     * Count of target database objects
     */
    targetDatabaseObjectCount?: {[key: string]: number};
    /**
     * List of errors that happened while performing schema compare validation
     */
    validationErrors?: ValidationErrorResponse;
}

/**
 * Description about the errors happen while performing migration validation
 */
export interface SchemaComparisonValidationResultTypeResponse {
    /**
     * Name of the object that has the difference
     */
    objectName?: string;
    /**
     * Type of the object that has the difference. e.g (Table/View/StoredProcedure)
     */
    objectType?: string;
    /**
     * Update action type with respect to target
     */
    updateAction?: string;
}

/**
 * Info for certificate to be exported for TDE enabled databases.
 */
export interface SelectedCertificateInputResponse {
    /**
     * Name of certificate to be exported.
     */
    certificateName: string;
    /**
     * Password to use for encrypting the exported certificate.
     */
    password: string;
}

/**
 * Server properties for MySQL type source
 */
export interface ServerPropertiesResponse {
    /**
     * Number of databases in the server
     */
    serverDatabaseCount: number;
    /**
     * Edition of the database server
     */
    serverEdition: string;
    /**
     * Name of the server
     */
    serverName: string;
    /**
     * Version of the operating system
     */
    serverOperatingSystemVersion: string;
    /**
     * Name of the server platform
     */
    serverPlatform: string;
    /**
     * Version of the database server
     */
    serverVersion: string;
}

/**
 * An Azure SKU instance
 */
export interface ServiceSkuResponse {
    /**
     * The capacity of the SKU, if it supports scaling
     */
    capacity?: number;
    /**
     * The SKU family, used when the service has multiple performance classes within a tier, such as 'A', 'D', etc. for virtual machines
     */
    family?: string;
    /**
     * The unique name of the SKU, such as 'P3'
     */
    name?: string;
    /**
     * The size of the SKU, used when the name alone does not denote a service size or when a SKU has multiple performance classes within a family, e.g. 'A1' for virtual machines
     */
    size?: string;
    /**
     * The tier of the SKU, such as 'Basic', 'General Purpose', or 'Business Critical'
     */
    tier?: string;
}

/**
 * Information for connecting to SQL database server
 */
export interface SqlConnectionInfoResponse {
    /**
     * Additional connection settings
     */
    additionalSettings?: string;
    /**
     * Authentication type to use for connection
     */
    authentication?: string;
    /**
     * Data source in the format Protocol:MachineName\SQLServerInstanceName,PortNumber
     */
    dataSource: string;
    /**
     * Whether to encrypt the connection
     */
    encryptConnection?: boolean;
    /**
     * Password credential.
     */
    password?: string;
    /**
     * Server platform type for connection
     */
    platform?: string;
    /**
     * Port for Server
     */
    port?: number;
    /**
     * Represents the ID of an HTTP resource represented by an Azure resource provider.
     */
    resourceId?: string;
    /**
     * server brand version
     */
    serverBrandVersion?: string;
    /**
     * name of the server
     */
    serverName?: string;
    /**
     * server version
     */
    serverVersion?: string;
    /**
     * Whether to trust the server certificate
     */
    trustServerCertificate?: boolean;
    /**
     * Type of connection info
     * Expected value is 'SqlConnectionInfo'.
     */
    type: "SqlConnectionInfo";
    /**
     * User name
     */
    userName?: string;
}
/**
 * sqlConnectionInfoResponseProvideDefaults sets the appropriate defaults for SqlConnectionInfoResponse
 */
export function sqlConnectionInfoResponseProvideDefaults(val: SqlConnectionInfoResponse): SqlConnectionInfoResponse {
    return {
        ...val,
        encryptConnection: (val.encryptConnection) ?? true,
        trustServerCertificate: (val.trustServerCertificate) ?? false,
    };
}

/**
 * Source SQL Connection
 */
export interface SqlConnectionInformationResponse {
    /**
     * Authentication type.
     */
    authentication?: string;
    /**
     * Data source.
     */
    dataSource?: string;
    /**
     * Whether to encrypt connection or not.
     */
    encryptConnection?: boolean;
    /**
     * Password to connect to source SQL.
     */
    password?: string;
    /**
     * Whether to trust server certificate or not.
     */
    trustServerCertificate?: boolean;
    /**
     * User name to connect to source SQL.
     */
    userName?: string;
}

/**
 * Detailed status of current Sql Db migration.
 */
export interface SqlDbMigrationStatusDetailsResponse {
    /**
     * Details on progress of ADF copy activities.
     */
    listOfCopyProgressDetails: CopyProgressDetailsResponse[];
    /**
     * Current State of Migration.
     */
    migrationState: string;
    /**
     * Sql Data Copy errors, if any.
     */
    sqlDataCopyErrors: string[];
}

/**
 * Offline configuration
 */
export interface SqlDbOfflineConfigurationResponse {
    /**
     * Offline migration
     */
    offline: boolean;
}

/**
 * SSIS migration info with SSIS store type, overwrite policy.
 */
export interface SsisMigrationInfoResponse {
    /**
     * The overwrite option for the SSIS environment migration
     */
    environmentOverwriteOption?: string;
    /**
     * The overwrite option for the SSIS project migration
     */
    projectOverwriteOption?: string;
    /**
     * The SSIS store type of source, only SSIS catalog is supported now in DMS (classic)
     */
    ssisStoreType?: string;
}

/**
 * Server role migration result
 */
export interface StartMigrationScenarioServerRoleResultResponse {
    /**
     * Migration exceptions and warnings.
     */
    exceptionsAndWarnings: ReportableExceptionResponse[];
    /**
     * Name of server role.
     */
    name: string;
    /**
     * Current state of migration
     */
    state: string;
}

/**
 * Database migration errors for online migration
 */
export interface SyncMigrationDatabaseErrorEventResponse {
    /**
     * Event text.
     */
    eventText: string;
    /**
     * Event type.
     */
    eventTypeString: string;
    /**
     * String value of timestamp.
     */
    timestampString: string;
}

export interface SystemDataResponse {
    createdAt?: string;
    createdBy?: string;
    createdByType?: string;
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: string;
}

/**
 * Properties for task that validates migration input for SQL to Azure SQL DB sync migrations
 */
export interface ValidateMigrationInputSqlServerSqlDbSyncTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Task input
     */
    input?: ValidateSyncMigrationInputSqlServerTaskInputResponse;
    /**
     * Task output. This is ignored if submitted.
     */
    output: ValidateSyncMigrationInputSqlServerTaskOutputResponse[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task type.
     * Expected value is 'ValidateMigrationInput.SqlServer.SqlDb.Sync'.
     */
    taskType: "ValidateMigrationInput.SqlServer.SqlDb.Sync";
}
/**
 * validateMigrationInputSqlServerSqlDbSyncTaskPropertiesResponseProvideDefaults sets the appropriate defaults for ValidateMigrationInputSqlServerSqlDbSyncTaskPropertiesResponse
 */
export function validateMigrationInputSqlServerSqlDbSyncTaskPropertiesResponseProvideDefaults(val: ValidateMigrationInputSqlServerSqlDbSyncTaskPropertiesResponse): ValidateMigrationInputSqlServerSqlDbSyncTaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? validateSyncMigrationInputSqlServerTaskInputResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Input for task that migrates SQL Server databases to Azure SQL Database Managed Instance online scenario.
 */
export interface ValidateMigrationInputSqlServerSqlMISyncTaskInputResponse {
    /**
     * Azure Active Directory Application the DMS (classic) instance will use to connect to the target instance of Azure SQL Database Managed Instance and the Azure Storage Account
     */
    azureApp: AzureActiveDirectoryAppResponse;
    /**
     * Backup file share information for all selected databases.
     */
    backupFileShare?: FileShareResponse;
    /**
     * Databases to migrate
     */
    selectedDatabases: MigrateSqlServerSqlMIDatabaseInputResponse[];
    /**
     * Connection information for source SQL Server
     */
    sourceConnectionInfo: SqlConnectionInfoResponse;
    /**
     * Fully qualified resourceId of storage
     */
    storageResourceId: string;
    /**
     * Connection information for Azure SQL Database Managed Instance
     */
    targetConnectionInfo: MiSqlConnectionInfoResponse;
}
/**
 * validateMigrationInputSqlServerSqlMISyncTaskInputResponseProvideDefaults sets the appropriate defaults for ValidateMigrationInputSqlServerSqlMISyncTaskInputResponse
 */
export function validateMigrationInputSqlServerSqlMISyncTaskInputResponseProvideDefaults(val: ValidateMigrationInputSqlServerSqlMISyncTaskInputResponse): ValidateMigrationInputSqlServerSqlMISyncTaskInputResponse {
    return {
        ...val,
        sourceConnectionInfo: sqlConnectionInfoResponseProvideDefaults(val.sourceConnectionInfo),
    };
}

/**
 * Output for task that validates migration input for Azure SQL Database Managed Instance online migration
 */
export interface ValidateMigrationInputSqlServerSqlMISyncTaskOutputResponse {
    /**
     * Database identifier
     */
    id: string;
    /**
     * Name of database
     */
    name: string;
    /**
     * Errors associated with a selected database object
     */
    validationErrors: ReportableExceptionResponse[];
}

/**
 * Properties for task that validates migration input for SQL to Azure SQL Database Managed Instance sync scenario
 */
export interface ValidateMigrationInputSqlServerSqlMISyncTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Task input
     */
    input?: ValidateMigrationInputSqlServerSqlMISyncTaskInputResponse;
    /**
     * Task output. This is ignored if submitted.
     */
    output: ValidateMigrationInputSqlServerSqlMISyncTaskOutputResponse[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task type.
     * Expected value is 'ValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRS'.
     */
    taskType: "ValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRS";
}
/**
 * validateMigrationInputSqlServerSqlMISyncTaskPropertiesResponseProvideDefaults sets the appropriate defaults for ValidateMigrationInputSqlServerSqlMISyncTaskPropertiesResponse
 */
export function validateMigrationInputSqlServerSqlMISyncTaskPropertiesResponseProvideDefaults(val: ValidateMigrationInputSqlServerSqlMISyncTaskPropertiesResponse): ValidateMigrationInputSqlServerSqlMISyncTaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? validateMigrationInputSqlServerSqlMISyncTaskInputResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Input for task that validates migration input for SQL to Azure SQL Managed Instance
 */
export interface ValidateMigrationInputSqlServerSqlMITaskInputResponse {
    /**
     * SAS URI of Azure Storage Account Container to be used for storing backup files.
     */
    backupBlobShare: BlobShareResponse;
    /**
     * Backup file share information for all selected databases.
     */
    backupFileShare?: FileShareResponse;
    /**
     * Backup Mode to specify whether to use existing backup or create new backup.
     */
    backupMode?: string;
    /**
     * Databases to migrate
     */
    selectedDatabases: MigrateSqlServerSqlMIDatabaseInputResponse[];
    /**
     * Logins to migrate
     */
    selectedLogins?: string[];
    /**
     * Information for connecting to source
     */
    sourceConnectionInfo: SqlConnectionInfoResponse;
    /**
     * Information for connecting to target
     */
    targetConnectionInfo: SqlConnectionInfoResponse;
}
/**
 * validateMigrationInputSqlServerSqlMITaskInputResponseProvideDefaults sets the appropriate defaults for ValidateMigrationInputSqlServerSqlMITaskInputResponse
 */
export function validateMigrationInputSqlServerSqlMITaskInputResponseProvideDefaults(val: ValidateMigrationInputSqlServerSqlMITaskInputResponse): ValidateMigrationInputSqlServerSqlMITaskInputResponse {
    return {
        ...val,
        sourceConnectionInfo: sqlConnectionInfoResponseProvideDefaults(val.sourceConnectionInfo),
        targetConnectionInfo: sqlConnectionInfoResponseProvideDefaults(val.targetConnectionInfo),
    };
}

/**
 * Output for task that validates migration input for SQL to Azure SQL Managed Instance migrations
 */
export interface ValidateMigrationInputSqlServerSqlMITaskOutputResponse {
    /**
     * Errors associated with the BackupFolder path
     */
    backupFolderErrors: ReportableExceptionResponse[];
    /**
     * Errors associated with backup share user name and password credentials
     */
    backupShareCredentialsErrors: ReportableExceptionResponse[];
    /**
     * Errors associated with the storage account provided.
     */
    backupStorageAccountErrors: ReportableExceptionResponse[];
    /**
     * Information about backup files when existing backup mode is used.
     */
    databaseBackupInfo?: DatabaseBackupInfoResponse;
    /**
     * Errors associated with existing backup files.
     */
    existingBackupErrors: ReportableExceptionResponse[];
    /**
     * Result identifier
     */
    id: string;
    /**
     * Name of database
     */
    name: string;
    /**
     * Errors associated with the RestoreDatabaseName
     */
    restoreDatabaseNameErrors: ReportableExceptionResponse[];
}

/**
 * Properties for task that validates migration input for SQL to Azure SQL Database Managed Instance
 */
export interface ValidateMigrationInputSqlServerSqlMITaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Task input
     */
    input?: ValidateMigrationInputSqlServerSqlMITaskInputResponse;
    /**
     * Task output. This is ignored if submitted.
     */
    output: ValidateMigrationInputSqlServerSqlMITaskOutputResponse[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task type.
     * Expected value is 'ValidateMigrationInput.SqlServer.AzureSqlDbMI'.
     */
    taskType: "ValidateMigrationInput.SqlServer.AzureSqlDbMI";
}
/**
 * validateMigrationInputSqlServerSqlMITaskPropertiesResponseProvideDefaults sets the appropriate defaults for ValidateMigrationInputSqlServerSqlMITaskPropertiesResponse
 */
export function validateMigrationInputSqlServerSqlMITaskPropertiesResponseProvideDefaults(val: ValidateMigrationInputSqlServerSqlMITaskPropertiesResponse): ValidateMigrationInputSqlServerSqlMITaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? validateMigrationInputSqlServerSqlMITaskInputResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Properties for the task that validates a migration between MongoDB data sources
 */
export interface ValidateMongoDbTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Describes how a MongoDB data migration should be performed
     */
    input?: MongoDbMigrationSettingsResponse;
    /**
     * An array containing a single MongoDbMigrationProgress object
     */
    output: MongoDbMigrationProgressResponse[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task type.
     * Expected value is 'Validate.MongoDb'.
     */
    taskType: "Validate.MongoDb";
}
/**
 * validateMongoDbTaskPropertiesResponseProvideDefaults sets the appropriate defaults for ValidateMongoDbTaskPropertiesResponse
 */
export function validateMongoDbTaskPropertiesResponseProvideDefaults(val: ValidateMongoDbTaskPropertiesResponse): ValidateMongoDbTaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? mongoDbMigrationSettingsResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Properties for the task that validates a migration for Oracle to Azure Database for PostgreSQL for online migrations
 */
export interface ValidateOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse {
    /**
     * Key value pairs of client data to attach meta data information to task
     */
    clientData?: {[key: string]: string};
    /**
     * Array of command properties.
     */
    commands: (MigrateMISyncCompleteCommandPropertiesResponse | MigrateSyncCompleteCommandPropertiesResponse)[];
    /**
     * Array of errors. This is ignored if submitted.
     */
    errors: ODataErrorResponse[];
    /**
     * Input for the task that migrates Oracle databases to Azure Database for PostgreSQL for online migrations
     */
    input?: MigrateOracleAzureDbPostgreSqlSyncTaskInputResponse;
    /**
     * An array containing a single validation error response object
     */
    output: ValidateOracleAzureDbPostgreSqlSyncTaskOutputResponse[];
    /**
     * The state of the task. This is ignored if submitted.
     */
    state: string;
    /**
     * Task type.
     * Expected value is 'Validate.Oracle.AzureDbPostgreSql.Sync'.
     */
    taskType: "Validate.Oracle.AzureDbPostgreSql.Sync";
}
/**
 * validateOracleAzureDbForPostgreSqlSyncTaskPropertiesResponseProvideDefaults sets the appropriate defaults for ValidateOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse
 */
export function validateOracleAzureDbForPostgreSqlSyncTaskPropertiesResponseProvideDefaults(val: ValidateOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse): ValidateOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse {
    return {
        ...val,
        input: (val.input ? migrateOracleAzureDbPostgreSqlSyncTaskInputResponseProvideDefaults(val.input) : undefined),
    };
}

/**
 * Output for task that validates migration input for Oracle to Azure Database for PostgreSQL for online migrations
 */
export interface ValidateOracleAzureDbPostgreSqlSyncTaskOutputResponse {
    /**
     * Errors associated with a selected database object
     */
    validationErrors: ReportableExceptionResponse[];
}

/**
 * Input for task that validates migration input for SQL sync migrations
 */
export interface ValidateSyncMigrationInputSqlServerTaskInputResponse {
    /**
     * Databases to migrate
     */
    selectedDatabases: MigrateSqlServerSqlDbSyncDatabaseInputResponse[];
    /**
     * Information for connecting to source SQL server
     */
    sourceConnectionInfo: SqlConnectionInfoResponse;
    /**
     * Information for connecting to target
     */
    targetConnectionInfo: SqlConnectionInfoResponse;
}
/**
 * validateSyncMigrationInputSqlServerTaskInputResponseProvideDefaults sets the appropriate defaults for ValidateSyncMigrationInputSqlServerTaskInputResponse
 */
export function validateSyncMigrationInputSqlServerTaskInputResponseProvideDefaults(val: ValidateSyncMigrationInputSqlServerTaskInputResponse): ValidateSyncMigrationInputSqlServerTaskInputResponse {
    return {
        ...val,
        sourceConnectionInfo: sqlConnectionInfoResponseProvideDefaults(val.sourceConnectionInfo),
        targetConnectionInfo: sqlConnectionInfoResponseProvideDefaults(val.targetConnectionInfo),
    };
}

/**
 * Output for task that validates migration input for SQL sync migrations
 */
export interface ValidateSyncMigrationInputSqlServerTaskOutputResponse {
    /**
     * Database identifier
     */
    id: string;
    /**
     * Name of database
     */
    name: string;
    /**
     * Errors associated with a selected database object
     */
    validationErrors: ReportableExceptionResponse[];
}

/**
 * Description about the errors happen while performing migration validation
 */
export interface ValidationErrorResponse {
    /**
     * Severity of the error
     */
    severity?: string;
    /**
     * Error Text
     */
    text?: string;
}

/**
 * Wait statistics gathered during query batch execution
 */
export interface WaitStatisticsResponse {
    /**
     * Total no. of waits
     */
    waitCount?: number;
    /**
     * Total wait time in millisecond(s) 
     */
    waitTimeMs?: number;
    /**
     * Type of the Wait
     */
    waitType?: string;
}
/**
 * waitStatisticsResponseProvideDefaults sets the appropriate defaults for WaitStatisticsResponse
 */
export function waitStatisticsResponseProvideDefaults(val: WaitStatisticsResponse): WaitStatisticsResponse {
    return {
        ...val,
        waitTimeMs: (val.waitTimeMs) ?? 0,
    };
}
