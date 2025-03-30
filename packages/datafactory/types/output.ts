import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Activity dependency information.
 */
export interface ActivityDependencyResponse {
    /**
     * Activity name.
     */
    activity: string;
    /**
     * Match-Condition for the dependency.
     */
    dependencyConditions: string[];
}

/**
 * Execution policy for an activity.
 */
export interface ActivityPolicyResponse {
    /**
     * Maximum ordinary retry attempts. Default is 0. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    retry?: any;
    /**
     * Interval between each retry attempt (in seconds). The default is 30 sec.
     */
    retryIntervalInSeconds?: number;
    /**
     * When set to true, Input from activity is considered as secure and will not be logged to monitoring.
     */
    secureInput?: boolean;
    /**
     * When set to true, Output from activity is considered as secure and will not be logged to monitoring.
     */
    secureOutput?: boolean;
    /**
     * Specifies the timeout for the activity to run. The default timeout is 7 days. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    timeout?: any;
}

/**
 * Amazon Marketplace Web Service linked service.
 */
export interface AmazonMWSLinkedServiceResponse {
    /**
     * The access key id used to access data.
     */
    accessKeyId: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The endpoint of the Amazon MWS server, (i.e. mws.amazonservices.com)
     */
    endpoint: any;
    /**
     * The Amazon Marketplace ID you want to retrieve data from. To retrieve data from multiple Marketplace IDs, separate them with a comma (,). (i.e. A2EUQ1WTGCTBG2)
     */
    marketplaceID: any;
    /**
     * The Amazon MWS authentication token.
     */
    mwsAuthToken?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The secret key used to access data.
     */
    secretKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The Amazon seller ID.
     */
    sellerID: any;
    /**
     * Type of linked service.
     * Expected value is 'AmazonMWS'.
     */
    type: "AmazonMWS";
    /**
     * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
     */
    useEncryptedEndpoints?: any;
    /**
     * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
     */
    useHostVerification?: any;
    /**
     * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
     */
    usePeerVerification?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Amazon Marketplace Web Service dataset.
 */
export interface AmazonMWSObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'AmazonMWSObject'.
     */
    type: "AmazonMWSObject";
}

/**
 * A copy activity Amazon Marketplace Web Service source.
 */
export interface AmazonMWSSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'AmazonMWSSource'.
     */
    type: "AmazonMWSSource";
}

/**
 * AmazonRdsForOracle database.
 */
export interface AmazonRdsForOracleLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Type of linked service.
     * Expected value is 'AmazonRdsForOracle'.
     */
    type: "AmazonRdsForOracle";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The settings that will be leveraged for AmazonRdsForOracle source partitioning.
 */
export interface AmazonRdsForOraclePartitionSettingsResponse {
    /**
     * The name of the column in integer type that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
     */
    partitionColumnName?: any;
    /**
     * The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
     */
    partitionLowerBound?: any;
    /**
     * Names of the physical partitions of AmazonRdsForOracle table. 
     */
    partitionNames?: any[];
    /**
     * The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
     */
    partitionUpperBound?: any;
}

/**
 * A copy activity AmazonRdsForOracle source.
 */
export interface AmazonRdsForOracleSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * AmazonRdsForOracle reader query. Type: string (or Expression with resultType string).
     */
    oracleReaderQuery?: any;
    /**
     * The partition mechanism that will be used for AmazonRdsForOracle read in parallel. Type: string (or Expression with resultType string).
     */
    partitionOption?: any;
    /**
     * The settings that will be leveraged for AmazonRdsForOracle source partitioning.
     */
    partitionSettings?: AmazonRdsForOraclePartitionSettingsResponse;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'AmazonRdsForOracleSource'.
     */
    type: "AmazonRdsForOracleSource";
}

/**
 * The AmazonRdsForOracle database dataset.
 */
export interface AmazonRdsForOracleTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name of the AmazonRdsForOracle database. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * Type of dataset.
     * Expected value is 'AmazonRdsForOracleTable'.
     */
    type: "AmazonRdsForOracleTable";
}

/**
 * Amazon RDS for SQL Server linked service.
 */
export interface AmazonRdsForSqlServerLinkedServiceResponse {
    /**
     * Sql always encrypted properties.
     */
    alwaysEncryptedSettings?: SqlAlwaysEncryptedPropertiesResponse;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The application workload type when connecting to a server, used by recommended version. Possible values are ReadOnly and ReadWrite. Type: string (or Expression with resultType string).
     */
    applicationIntent?: any;
    /**
     * The type used for authentication. Type: string.
     */
    authenticationType?: string;
    /**
     * The default wait time (in seconds) before terminating the attempt to execute a command and generating an error, used by recommended version. Type: integer (or Expression with resultType integer).
     */
    commandTimeout?: any;
    /**
     * The number of re-connections attempted after identifying that there was an idle connection failure, used by recommended version. This must be an integer between 0 and 255. Type: integer (or Expression with resultType integer).
     */
    connectRetryCount?: any;
    /**
     * The amount of time (in seconds) between each re-connection attempt after identifying that there was an idle connection failure, used by recommended version. This must be an integer between 1 and 60. Type: integer (or Expression with resultType integer).
     */
    connectRetryInterval?: any;
    /**
     * The length of time (in seconds) to wait for a connection to the server before terminating the attempt and generating an error, used by recommended version. Type: integer (or Expression with resultType integer).
     */
    connectTimeout?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * The name of the database, used by recommended version. Type: string (or Expression with resultType string).
     */
    database?: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * Indicate whether TLS encryption is required for all data sent between the client and server, used by recommended version. Possible values are true/yes/mandatory, false/no/optional and strict. Type: string (or Expression with resultType string).
     */
    encrypt?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The name or address of the partner server to connect to if the primary server is down, used by recommended version. Type: string (or Expression with resultType string).
     */
    failoverPartner?: any;
    /**
     * The host name to use when validating the server certificate for the connection. When not specified, the server name from the Data Source is used for certificate validation, used by recommended version. Type: string (or Expression with resultType string).
     */
    hostNameInCertificate?: any;
    /**
     * Indicate whether User ID and Password are specified in the connection (when false) or whether the current Windows account credentials are used for authentication (when true), used by recommended version. Type: Boolean (or Expression with resultType boolean).
     */
    integratedSecurity?: any;
    /**
     * The minimum time, in seconds, for the connection to live in the connection pool before being destroyed, used by recommended version. Type: integer (or Expression with resultType integer).
     */
    loadBalanceTimeout?: any;
    /**
     * The maximum number of connections allowed in the connection pool for this specific connection string, used by recommended version. Type: integer (or Expression with resultType integer).
     */
    maxPoolSize?: any;
    /**
     * The minimum number of connections allowed in the connection pool for this specific connection string, used by recommended version. Type: integer (or Expression with resultType integer).
     */
    minPoolSize?: any;
    /**
     * If your application is connecting to an AlwaysOn availability group (AG) on different subnets, setting MultiSubnetFailover=true provides faster detection of and connection to the (currently) active server, used by recommended version. Type: Boolean (or Expression with resultType boolean).
     */
    multiSubnetFailover?: any;
    /**
     * When true, an application can maintain multiple active result sets (MARS). When false, an application must process or cancel all result sets from one batch before it can execute any other batch on that connection, used by recommended version. Type: Boolean (or Expression with resultType boolean).
     */
    multipleActiveResultSets?: any;
    /**
     * The size in bytes of the network packets used to communicate with an instance of server, used by recommended version. Type: integer (or Expression with resultType integer).
     */
    packetSize?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The on-premises Windows authentication password.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Indicate whether the connection will be pooled or explicitly opened every time that the connection is requested, used by recommended version. Type: Boolean (or Expression with resultType boolean).
     */
    pooling?: any;
    /**
     * The name or network address of the instance of SQL Server to which to connect, used by recommended version. Type: string (or Expression with resultType string).
     */
    server?: any;
    /**
     * Indicate whether the channel will be encrypted while bypassing walking the certificate chain to validate trust, used by recommended version. Type: Boolean (or Expression with resultType boolean).
     */
    trustServerCertificate?: any;
    /**
     * Type of linked service.
     * Expected value is 'AmazonRdsForSqlServer'.
     */
    type: "AmazonRdsForSqlServer";
    /**
     * The on-premises Windows authentication user name. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity Amazon RDS for SQL Server source.
 */
export interface AmazonRdsForSqlServerSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Specifies the transaction locking behavior for the SQL source. Allowed values: ReadCommitted/ReadUncommitted/RepeatableRead/Serializable/Snapshot. The default value is ReadCommitted. Type: string (or Expression with resultType string).
     */
    isolationLevel?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange".
     */
    partitionOption?: any;
    /**
     * The settings that will be leveraged for Sql source partitioning.
     */
    partitionSettings?: SqlPartitionSettingsResponse;
    /**
     * Which additional types to produce.
     */
    produceAdditionalTypes?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * SQL reader query. Type: string (or Expression with resultType string).
     */
    sqlReaderQuery?: any;
    /**
     * Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string).
     */
    sqlReaderStoredProcedureName?: any;
    /**
     * Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".
     */
    storedProcedureParameters?: any;
    /**
     * Copy source type.
     * Expected value is 'AmazonRdsForSqlServerSource'.
     */
    type: "AmazonRdsForSqlServerSource";
}

/**
 * The Amazon RDS for SQL Server dataset.
 */
export interface AmazonRdsForSqlServerTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name of the SQL Server dataset. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * Type of dataset.
     * Expected value is 'AmazonRdsForSqlServerTable'.
     */
    type: "AmazonRdsForSqlServerTable";
}

/**
 * Linked service for Amazon Redshift.
 */
export interface AmazonRedshiftLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The database name of the Amazon Redshift source. Type: string (or Expression with resultType string).
     */
    database: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The password of the Amazon Redshift source.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The TCP port number that the Amazon Redshift server uses to listen for client connections. The default value is 5439. Type: integer (or Expression with resultType integer).
     */
    port?: any;
    /**
     * The name of the Amazon Redshift server. Type: string (or Expression with resultType string).
     */
    server: any;
    /**
     * Type of linked service.
     * Expected value is 'AmazonRedshift'.
     */
    type: "AmazonRedshift";
    /**
     * The username of the Amazon Redshift source. Type: string (or Expression with resultType string).
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity source for Amazon Redshift Source.
 */
export interface AmazonRedshiftSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Database query. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * The Amazon S3 settings needed for the interim Amazon S3 when copying from Amazon Redshift with unload. With this, data from Amazon Redshift source will be unloaded into S3 first and then copied into the targeted sink from the interim S3.
     */
    redshiftUnloadSettings?: RedshiftUnloadSettingsResponse;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'AmazonRedshiftSource'.
     */
    type: "AmazonRedshiftSource";
}

/**
 * The Amazon Redshift table dataset.
 */
export interface AmazonRedshiftTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The Amazon Redshift table name. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * This property will be retired. Please consider using schema + table properties instead.
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'AmazonRedshiftTable'.
     */
    type: "AmazonRedshiftTable";
}

/**
 * Linked service for Amazon S3 Compatible.
 */
export interface AmazonS3CompatibleLinkedServiceResponse {
    /**
     * The access key identifier of the Amazon S3 Compatible Identity and Access Management (IAM) user. Type: string (or Expression with resultType string).
     */
    accessKeyId?: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * If true, use S3 path-style access instead of virtual hosted-style access. Default value is false. Type: boolean (or Expression with resultType boolean).
     */
    forcePathStyle?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The secret access key of the Amazon S3 Compatible Identity and Access Management (IAM) user.
     */
    secretAccessKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * This value specifies the endpoint to access with the Amazon S3 Compatible Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string).
     */
    serviceUrl?: any;
    /**
     * Type of linked service.
     * Expected value is 'AmazonS3Compatible'.
     */
    type: "AmazonS3Compatible";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The location of Amazon S3 Compatible dataset.
 */
export interface AmazonS3CompatibleLocationResponse {
    /**
     * Specify the bucketName of Amazon S3 Compatible. Type: string (or Expression with resultType string)
     */
    bucketName?: any;
    /**
     * Specify the file name of dataset. Type: string (or Expression with resultType string).
     */
    fileName?: any;
    /**
     * Specify the folder path of dataset. Type: string (or Expression with resultType string)
     */
    folderPath?: any;
    /**
     * Type of dataset storage location.
     * Expected value is 'AmazonS3CompatibleLocation'.
     */
    type: "AmazonS3CompatibleLocation";
    /**
     * Specify the version of Amazon S3 Compatible. Type: string (or Expression with resultType string).
     */
    version?: any;
}

/**
 * Amazon S3 Compatible read settings.
 */
export interface AmazonS3CompatibleReadSettingsResponse {
    /**
     * Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    deleteFilesAfterCompletion?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Indicates whether to enable partition discovery. Type: boolean (or Expression with resultType boolean).
     */
    enablePartitionDiscovery?: any;
    /**
     * Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
     */
    fileListPath?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * The end of file's modified datetime. Type: string (or Expression with resultType string).
     */
    modifiedDatetimeEnd?: any;
    /**
     * The start of file's modified datetime. Type: string (or Expression with resultType string).
     */
    modifiedDatetimeStart?: any;
    /**
     * Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
     */
    partitionRootPath?: any;
    /**
     * The prefix filter for the S3 Compatible object name. Type: string (or Expression with resultType string).
     */
    prefix?: any;
    /**
     * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
     */
    recursive?: any;
    /**
     * The read setting type.
     * Expected value is 'AmazonS3CompatibleReadSettings'.
     */
    type: "AmazonS3CompatibleReadSettings";
    /**
     * Amazon S3 Compatible wildcardFileName. Type: string (or Expression with resultType string).
     */
    wildcardFileName?: any;
    /**
     * Amazon S3 Compatible wildcardFolderPath. Type: string (or Expression with resultType string).
     */
    wildcardFolderPath?: any;
}

/**
 * A single Amazon Simple Storage Service (S3) object or a set of S3 objects.
 */
export interface AmazonS3DatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * The name of the Amazon S3 bucket. Type: string (or Expression with resultType string).
     */
    bucketName: any;
    /**
     * The data compression method used for the Amazon S3 object.
     */
    compression?: DatasetCompressionResponse;
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * The format of files.
     */
    format?: AvroFormatResponse | JsonFormatResponse | OrcFormatResponse | ParquetFormatResponse | TextFormatResponse;
    /**
     * The key of the Amazon S3 object. Type: string (or Expression with resultType string).
     */
    key?: any;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * The end of S3 object's modified datetime. Type: string (or Expression with resultType string).
     */
    modifiedDatetimeEnd?: any;
    /**
     * The start of S3 object's modified datetime. Type: string (or Expression with resultType string).
     */
    modifiedDatetimeStart?: any;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The prefix filter for the S3 object name. Type: string (or Expression with resultType string).
     */
    prefix?: any;
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'AmazonS3Object'.
     */
    type: "AmazonS3Object";
    /**
     * The version for the S3 object. Type: string (or Expression with resultType string).
     */
    version?: any;
}

/**
 * Linked service for Amazon S3.
 */
export interface AmazonS3LinkedServiceResponse {
    /**
     * The access key identifier of the Amazon S3 Identity and Access Management (IAM) user. Type: string (or Expression with resultType string).
     */
    accessKeyId?: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The authentication type of S3. Allowed value: AccessKey (default) or TemporarySecurityCredentials. Type: string (or Expression with resultType string).
     */
    authenticationType?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The secret access key of the Amazon S3 Identity and Access Management (IAM) user.
     */
    secretAccessKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * This value specifies the endpoint to access with the S3 Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string).
     */
    serviceUrl?: any;
    /**
     * The session token for the S3 temporary security credential.
     */
    sessionToken?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Type of linked service.
     * Expected value is 'AmazonS3'.
     */
    type: "AmazonS3";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The location of amazon S3 dataset.
 */
export interface AmazonS3LocationResponse {
    /**
     * Specify the bucketName of amazon S3. Type: string (or Expression with resultType string)
     */
    bucketName?: any;
    /**
     * Specify the file name of dataset. Type: string (or Expression with resultType string).
     */
    fileName?: any;
    /**
     * Specify the folder path of dataset. Type: string (or Expression with resultType string)
     */
    folderPath?: any;
    /**
     * Type of dataset storage location.
     * Expected value is 'AmazonS3Location'.
     */
    type: "AmazonS3Location";
    /**
     * Specify the version of amazon S3. Type: string (or Expression with resultType string).
     */
    version?: any;
}

/**
 * Amazon S3 read settings.
 */
export interface AmazonS3ReadSettingsResponse {
    /**
     * Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    deleteFilesAfterCompletion?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Indicates whether to enable partition discovery. Type: boolean (or Expression with resultType boolean).
     */
    enablePartitionDiscovery?: any;
    /**
     * Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
     */
    fileListPath?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * The end of file's modified datetime. Type: string (or Expression with resultType string).
     */
    modifiedDatetimeEnd?: any;
    /**
     * The start of file's modified datetime. Type: string (or Expression with resultType string).
     */
    modifiedDatetimeStart?: any;
    /**
     * Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
     */
    partitionRootPath?: any;
    /**
     * The prefix filter for the S3 object name. Type: string (or Expression with resultType string).
     */
    prefix?: any;
    /**
     * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
     */
    recursive?: any;
    /**
     * The read setting type.
     * Expected value is 'AmazonS3ReadSettings'.
     */
    type: "AmazonS3ReadSettings";
    /**
     * AmazonS3 wildcardFileName. Type: string (or Expression with resultType string).
     */
    wildcardFileName?: any;
    /**
     * AmazonS3 wildcardFolderPath. Type: string (or Expression with resultType string).
     */
    wildcardFolderPath?: any;
}

/**
 * Linked service for AppFigures.
 */
export interface AppFiguresLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The client key for the AppFigures source.
     */
    clientKey: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The password of the AppFigures source.
     */
    password: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Type of linked service.
     * Expected value is 'AppFigures'.
     */
    type: "AppFigures";
    /**
     * The username of the Appfigures source. Type: string (or Expression with resultType string).
     */
    userName: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Append value for a Variable of type Array.
 */
export interface AppendVariableActivityResponse {
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Type of activity.
     * Expected value is 'AppendVariable'.
     */
    type: "AppendVariable";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
    /**
     * Value to be appended. Type: could be a static value matching type of the variable item or Expression with resultType matching type of the variable item
     */
    value?: any;
    /**
     * Name of the variable whose value needs to be appended to.
     */
    variableName?: string;
}

/**
 * A wrapper for an ARM resource id
 */
export interface ArmIdWrapperResponse {
    id: string;
}

/**
 * Linked service for Asana.
 */
export interface AsanaLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The api token for the Asana source.
     */
    apiToken: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Type of linked service.
     * Expected value is 'Asana'.
     */
    type: "Asana";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Avro dataset.
 */
export interface AvroDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * The data avroCompressionCodec. Type: string (or Expression with resultType string).
     */
    avroCompressionCodec?: any;
    avroCompressionLevel?: number;
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * The location of the avro storage.
     */
    location: AmazonS3CompatibleLocationResponse | AmazonS3LocationResponse | AzureBlobFSLocationResponse | AzureBlobStorageLocationResponse | AzureDataLakeStoreLocationResponse | AzureFileStorageLocationResponse | FileServerLocationResponse | FtpServerLocationResponse | GoogleCloudStorageLocationResponse | HdfsLocationResponse | HttpServerLocationResponse | LakeHouseLocationResponse | OracleCloudStorageLocationResponse | SftpLocationResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'Avro'.
     */
    type: "Avro";
}

/**
 * The data stored in Avro format.
 */
export interface AvroFormatResponse {
    /**
     * Deserializer. Type: string (or Expression with resultType string).
     */
    deserializer?: any;
    /**
     * Serializer. Type: string (or Expression with resultType string).
     */
    serializer?: any;
    /**
     * Type of dataset storage format.
     * Expected value is 'AvroFormat'.
     */
    type: "AvroFormat";
}

/**
 * A copy activity Avro sink.
 */
export interface AvroSinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Avro format settings.
     */
    formatSettings?: AvroWriteSettingsResponse;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Avro store settings.
     */
    storeSettings?: AzureBlobFSWriteSettingsResponse | AzureBlobStorageWriteSettingsResponse | AzureDataLakeStoreWriteSettingsResponse | AzureFileStorageWriteSettingsResponse | FileServerWriteSettingsResponse | LakeHouseWriteSettingsResponse | SftpWriteSettingsResponse;
    /**
     * Copy sink type.
     * Expected value is 'AvroSink'.
     */
    type: "AvroSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
}

/**
 * A copy activity Avro source.
 */
export interface AvroSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Avro store settings.
     */
    storeSettings?: AmazonS3CompatibleReadSettingsResponse | AmazonS3ReadSettingsResponse | AzureBlobFSReadSettingsResponse | AzureBlobStorageReadSettingsResponse | AzureDataLakeStoreReadSettingsResponse | AzureFileStorageReadSettingsResponse | FileServerReadSettingsResponse | FtpReadSettingsResponse | GoogleCloudStorageReadSettingsResponse | HdfsReadSettingsResponse | HttpReadSettingsResponse | LakeHouseReadSettingsResponse | OracleCloudStorageReadSettingsResponse | SftpReadSettingsResponse;
    /**
     * Copy source type.
     * Expected value is 'AvroSource'.
     */
    type: "AvroSource";
}

/**
 * Avro write settings.
 */
export interface AvroWriteSettingsResponse {
    /**
     * Specifies the file name pattern <fileNamePrefix>_<fileIndex>.<fileExtension> when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string).
     */
    fileNamePrefix?: any;
    /**
     * Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer).
     */
    maxRowsPerFile?: any;
    /**
     * Top level record name in write result, which is required in AVRO spec.
     */
    recordName?: string;
    /**
     * Record namespace in the write result.
     */
    recordNamespace?: string;
    /**
     * The write setting type.
     * Expected value is 'AvroWriteSettings'.
     */
    type: "AvroWriteSettings";
}

/**
 * The express custom setup of installing Azure PowerShell.
 */
export interface AzPowerShellSetupResponse {
    /**
     * The type of custom setup.
     * Expected value is 'AzPowerShellSetup'.
     */
    type: "AzPowerShellSetup";
    /**
     * The required version of Azure PowerShell to install.
     */
    version: string;
}

/**
 * Azure Batch linked service.
 */
export interface AzureBatchLinkedServiceResponse {
    /**
     * The Azure Batch account access key.
     */
    accessKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The Azure Batch account name. Type: string (or Expression with resultType string).
     */
    accountName: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The Azure Batch URI. Type: string (or Expression with resultType string).
     */
    batchUri: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The credential reference containing authentication information.
     */
    credential?: CredentialReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The Azure Storage linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The Azure Batch pool name. Type: string (or Expression with resultType string).
     */
    poolName: any;
    /**
     * Type of linked service.
     * Expected value is 'AzureBatch'.
     */
    type: "AzureBatch";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The Azure Blob storage.
 */
export interface AzureBlobDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * The data compression method used for the blob storage.
     */
    compression?: DatasetCompressionResponse;
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The name of the Azure Blob. Type: string (or Expression with resultType string).
     */
    fileName?: any;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * The path of the Azure Blob storage. Type: string (or Expression with resultType string).
     */
    folderPath?: any;
    /**
     * The format of the Azure Blob storage.
     */
    format?: AvroFormatResponse | JsonFormatResponse | OrcFormatResponse | ParquetFormatResponse | TextFormatResponse;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * The end of Azure Blob's modified datetime. Type: string (or Expression with resultType string).
     */
    modifiedDatetimeEnd?: any;
    /**
     * The start of Azure Blob's modified datetime. Type: string (or Expression with resultType string).
     */
    modifiedDatetimeStart?: any;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The root of blob path. Type: string (or Expression with resultType string).
     */
    tableRootLocation?: any;
    /**
     * Type of dataset.
     * Expected value is 'AzureBlob'.
     */
    type: "AzureBlob";
}

/**
 * The Azure Data Lake Storage Gen2 storage.
 */
export interface AzureBlobFSDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * The data compression method used for the blob storage.
     */
    compression?: DatasetCompressionResponse;
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The name of the Azure Data Lake Storage Gen2. Type: string (or Expression with resultType string).
     */
    fileName?: any;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * The path of the Azure Data Lake Storage Gen2 storage. Type: string (or Expression with resultType string).
     */
    folderPath?: any;
    /**
     * The format of the Azure Data Lake Storage Gen2 storage.
     */
    format?: AvroFormatResponse | JsonFormatResponse | OrcFormatResponse | ParquetFormatResponse | TextFormatResponse;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'AzureBlobFSFile'.
     */
    type: "AzureBlobFSFile";
}

/**
 * Azure Data Lake Storage Gen2 linked service.
 */
export interface AzureBlobFSLinkedServiceResponse {
    /**
     * Account key for the Azure Data Lake Storage Gen2 service. Type: string (or Expression with resultType string).
     */
    accountKey?: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
     */
    azureCloudType?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The credential reference containing authentication information.
     */
    credential?: CredentialReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The Azure key vault secret reference of sasToken in sas uri.
     */
    sasToken?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * SAS URI of the Azure Data Lake Storage Gen2 service. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    sasUri?: any;
    /**
     * The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
     */
    servicePrincipalCredential?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
     */
    servicePrincipalCredentialType?: any;
    /**
     * The ID of the application used to authenticate against the Azure Data Lake Storage Gen2 account. Type: string (or Expression with resultType string).
     */
    servicePrincipalId?: any;
    /**
     * The Key of the application used to authenticate against the Azure Data Lake Storage Gen2 account.
     */
    servicePrincipalKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
     */
    tenant?: any;
    /**
     * Type of linked service.
     * Expected value is 'AzureBlobFS'.
     */
    type: "AzureBlobFS";
    /**
     * Endpoint for the Azure Data Lake Storage Gen2 service. Type: string (or Expression with resultType string).
     */
    url?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The location of azure blobFS dataset.
 */
export interface AzureBlobFSLocationResponse {
    /**
     * Specify the file name of dataset. Type: string (or Expression with resultType string).
     */
    fileName?: any;
    /**
     * Specify the fileSystem of azure blobFS. Type: string (or Expression with resultType string).
     */
    fileSystem?: any;
    /**
     * Specify the folder path of dataset. Type: string (or Expression with resultType string)
     */
    folderPath?: any;
    /**
     * Type of dataset storage location.
     * Expected value is 'AzureBlobFSLocation'.
     */
    type: "AzureBlobFSLocation";
}

/**
 * Azure blobFS read settings.
 */
export interface AzureBlobFSReadSettingsResponse {
    /**
     * Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    deleteFilesAfterCompletion?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Indicates whether to enable partition discovery. Type: boolean (or Expression with resultType boolean).
     */
    enablePartitionDiscovery?: any;
    /**
     * Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
     */
    fileListPath?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * The end of file's modified datetime. Type: string (or Expression with resultType string).
     */
    modifiedDatetimeEnd?: any;
    /**
     * The start of file's modified datetime. Type: string (or Expression with resultType string).
     */
    modifiedDatetimeStart?: any;
    /**
     * Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
     */
    partitionRootPath?: any;
    /**
     * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
     */
    recursive?: any;
    /**
     * The read setting type.
     * Expected value is 'AzureBlobFSReadSettings'.
     */
    type: "AzureBlobFSReadSettings";
    /**
     * Azure blobFS wildcardFileName. Type: string (or Expression with resultType string).
     */
    wildcardFileName?: any;
    /**
     * Azure blobFS wildcardFolderPath. Type: string (or Expression with resultType string).
     */
    wildcardFolderPath?: any;
}

/**
 * A copy activity Azure Data Lake Storage Gen2 sink.
 */
export interface AzureBlobFSSinkResponse {
    /**
     * The type of copy behavior for copy sink. Type: string (or Expression with resultType string).
     */
    copyBehavior?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Specify the custom metadata to be added to sink data. Type: array of objects (or Expression with resultType array of objects).
     */
    metadata?: MetadataItemResponse[];
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'AzureBlobFSSink'.
     */
    type: "AzureBlobFSSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
}

/**
 * A copy activity Azure BlobFS source.
 */
export interface AzureBlobFSSourceResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
     */
    recursive?: any;
    /**
     * Number of header lines to skip from each blob. Type: integer (or Expression with resultType integer).
     */
    skipHeaderLineCount?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Treat empty as null. Type: boolean (or Expression with resultType boolean).
     */
    treatEmptyAsNull?: any;
    /**
     * Copy source type.
     * Expected value is 'AzureBlobFSSource'.
     */
    type: "AzureBlobFSSource";
}

/**
 * Azure blobFS write settings.
 */
export interface AzureBlobFSWriteSettingsResponse {
    /**
     * Indicates the block size(MB) when writing data to blob. Type: integer (or Expression with resultType integer).
     */
    blockSizeInMB?: any;
    /**
     * The type of copy behavior for copy sink.
     */
    copyBehavior?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Specify the custom metadata to be added to sink data. Type: array of objects (or Expression with resultType array of objects).
     */
    metadata?: MetadataItemResponse[];
    /**
     * The write setting type.
     * Expected value is 'AzureBlobFSWriteSettings'.
     */
    type: "AzureBlobFSWriteSettings";
}

/**
 * The azure blob storage linked service.
 */
export interface AzureBlobStorageLinkedServiceResponse {
    /**
     * The Azure key vault secret reference of accountKey in connection string.
     */
    accountKey?: AzureKeyVaultSecretReferenceResponse;
    /**
     * Specify the kind of your storage account. Allowed values are: Storage (general purpose v1), StorageV2 (general purpose v2), BlobStorage, or BlockBlobStorage. Type: string (or Expression with resultType string).
     */
    accountKind?: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The type used for authentication. Type: string.
     */
    authenticationType?: string;
    /**
     * Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
     */
    azureCloudType?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The connection string. It is mutually exclusive with sasUri, serviceEndpoint property. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * Container uri of the Azure Blob Storage resource only support for anonymous access. Type: string (or Expression with resultType string).
     */
    containerUri?: any;
    /**
     * The credential reference containing authentication information.
     */
    credential?: CredentialReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The Azure key vault secret reference of sasToken in sas uri.
     */
    sasToken?: AzureKeyVaultSecretReferenceResponse;
    /**
     * SAS URI of the Azure Blob Storage resource. It is mutually exclusive with connectionString, serviceEndpoint property. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    sasUri?: any;
    /**
     * Blob service endpoint of the Azure Blob Storage resource. It is mutually exclusive with connectionString, sasUri property.
     */
    serviceEndpoint?: any;
    /**
     * The ID of the service principal used to authenticate against Azure SQL Data Warehouse. Type: string (or Expression with resultType string).
     */
    servicePrincipalId?: any;
    /**
     * The key of the service principal used to authenticate against Azure SQL Data Warehouse.
     */
    servicePrincipalKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
     */
    tenant?: any;
    /**
     * Type of linked service.
     * Expected value is 'AzureBlobStorage'.
     */
    type: "AzureBlobStorage";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The location of azure blob dataset.
 */
export interface AzureBlobStorageLocationResponse {
    /**
     * Specify the container of azure blob. Type: string (or Expression with resultType string).
     */
    container?: any;
    /**
     * Specify the file name of dataset. Type: string (or Expression with resultType string).
     */
    fileName?: any;
    /**
     * Specify the folder path of dataset. Type: string (or Expression with resultType string)
     */
    folderPath?: any;
    /**
     * Type of dataset storage location.
     * Expected value is 'AzureBlobStorageLocation'.
     */
    type: "AzureBlobStorageLocation";
}

/**
 * Azure blob read settings.
 */
export interface AzureBlobStorageReadSettingsResponse {
    /**
     * Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    deleteFilesAfterCompletion?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Indicates whether to enable partition discovery. Type: boolean (or Expression with resultType boolean).
     */
    enablePartitionDiscovery?: any;
    /**
     * Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
     */
    fileListPath?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * The end of file's modified datetime. Type: string (or Expression with resultType string).
     */
    modifiedDatetimeEnd?: any;
    /**
     * The start of file's modified datetime. Type: string (or Expression with resultType string).
     */
    modifiedDatetimeStart?: any;
    /**
     * Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
     */
    partitionRootPath?: any;
    /**
     * The prefix filter for the Azure Blob name. Type: string (or Expression with resultType string).
     */
    prefix?: any;
    /**
     * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
     */
    recursive?: any;
    /**
     * The read setting type.
     * Expected value is 'AzureBlobStorageReadSettings'.
     */
    type: "AzureBlobStorageReadSettings";
    /**
     * Azure blob wildcardFileName. Type: string (or Expression with resultType string).
     */
    wildcardFileName?: any;
    /**
     * Azure blob wildcardFolderPath. Type: string (or Expression with resultType string).
     */
    wildcardFolderPath?: any;
}

/**
 * Azure blob write settings.
 */
export interface AzureBlobStorageWriteSettingsResponse {
    /**
     * Indicates the block size(MB) when writing data to blob. Type: integer (or Expression with resultType integer).
     */
    blockSizeInMB?: any;
    /**
     * The type of copy behavior for copy sink.
     */
    copyBehavior?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Specify the custom metadata to be added to sink data. Type: array of objects (or Expression with resultType array of objects).
     */
    metadata?: MetadataItemResponse[];
    /**
     * The write setting type.
     * Expected value is 'AzureBlobStorageWriteSettings'.
     */
    type: "AzureBlobStorageWriteSettings";
}

/**
 * Azure Data Explorer command activity.
 */
export interface AzureDataExplorerCommandActivityResponse {
    /**
     * A control command, according to the Azure Data Explorer command syntax. Type: string (or Expression with resultType string).
     */
    command: any;
    /**
     * Control command timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9]))..)
     */
    commandTimeout?: any;
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * Linked service reference.
     */
    linkedServiceName?: LinkedServiceReferenceResponse;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity policy.
     */
    policy?: ActivityPolicyResponse;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Type of activity.
     * Expected value is 'AzureDataExplorerCommand'.
     */
    type: "AzureDataExplorerCommand";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * Azure Data Explorer (Kusto) linked service.
 */
export interface AzureDataExplorerLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The credential reference containing authentication information.
     */
    credential?: CredentialReferenceResponse;
    /**
     * Database name for connection. Type: string (or Expression with resultType string).
     */
    database: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The endpoint of Azure Data Explorer (the engine's endpoint). URL will be in the format https://<clusterName>.<regionName>.kusto.windows.net. Type: string (or Expression with resultType string)
     */
    endpoint: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The ID of the service principal used to authenticate against Azure Data Explorer. Type: string (or Expression with resultType string).
     */
    servicePrincipalId?: any;
    /**
     * The key of the service principal used to authenticate against Kusto.
     */
    servicePrincipalKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
     */
    tenant?: any;
    /**
     * Type of linked service.
     * Expected value is 'AzureDataExplorer'.
     */
    type: "AzureDataExplorer";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity Azure Data Explorer sink.
 */
export interface AzureDataExplorerSinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * If set to true, any aggregation will be skipped. Default is false. Type: boolean.
     */
    flushImmediately?: any;
    /**
     * An explicit column mapping description provided in a json format. Type: string.
     */
    ingestionMappingAsJson?: any;
    /**
     * A name of a pre-created csv mapping that was defined on the target Kusto table. Type: string.
     */
    ingestionMappingName?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'AzureDataExplorerSink'.
     */
    type: "AzureDataExplorerSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
}

/**
 * A copy activity Azure Data Explorer (Kusto) source.
 */
export interface AzureDataExplorerSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * The name of the Boolean option that controls whether truncation is applied to result-sets that go beyond a certain row-count limit.
     */
    noTruncation?: any;
    /**
     * Database query. Should be a Kusto Query Language (KQL) query. Type: string (or Expression with resultType string).
     */
    query: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9]))..
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'AzureDataExplorerSource'.
     */
    type: "AzureDataExplorerSource";
}

/**
 * The Azure Data Explorer (Kusto) dataset.
 */
export interface AzureDataExplorerTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name of the Azure Data Explorer database. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * Type of dataset.
     * Expected value is 'AzureDataExplorerTable'.
     */
    type: "AzureDataExplorerTable";
}

/**
 * Azure Data Lake Analytics linked service.
 */
export interface AzureDataLakeAnalyticsLinkedServiceResponse {
    /**
     * The Azure Data Lake Analytics account name. Type: string (or Expression with resultType string).
     */
    accountName: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Azure Data Lake Analytics URI Type: string (or Expression with resultType string).
     */
    dataLakeAnalyticsUri?: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Data Lake Analytics account resource group name (if different from Data Factory account). Type: string (or Expression with resultType string).
     */
    resourceGroupName?: any;
    /**
     * The ID of the application used to authenticate against the Azure Data Lake Analytics account. Type: string (or Expression with resultType string).
     */
    servicePrincipalId?: any;
    /**
     * The Key of the application used to authenticate against the Azure Data Lake Analytics account.
     */
    servicePrincipalKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Data Lake Analytics account subscription ID (if different from Data Factory account). Type: string (or Expression with resultType string).
     */
    subscriptionId?: any;
    /**
     * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
     */
    tenant: any;
    /**
     * Type of linked service.
     * Expected value is 'AzureDataLakeAnalytics'.
     */
    type: "AzureDataLakeAnalytics";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Azure Data Lake Store dataset.
 */
export interface AzureDataLakeStoreDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * The data compression method used for the item(s) in the Azure Data Lake Store.
     */
    compression?: DatasetCompressionResponse;
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The name of the file in the Azure Data Lake Store. Type: string (or Expression with resultType string).
     */
    fileName?: any;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Path to the folder in the Azure Data Lake Store. Type: string (or Expression with resultType string).
     */
    folderPath?: any;
    /**
     * The format of the Data Lake Store.
     */
    format?: AvroFormatResponse | JsonFormatResponse | OrcFormatResponse | ParquetFormatResponse | TextFormatResponse;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'AzureDataLakeStoreFile'.
     */
    type: "AzureDataLakeStoreFile";
}

/**
 * Azure Data Lake Store linked service.
 */
export interface AzureDataLakeStoreLinkedServiceResponse {
    /**
     * Data Lake Store account name. Type: string (or Expression with resultType string).
     */
    accountName?: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
     */
    azureCloudType?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The credential reference containing authentication information.
     */
    credential?: CredentialReferenceResponse;
    /**
     * Data Lake Store service URI. Type: string (or Expression with resultType string).
     */
    dataLakeStoreUri: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Data Lake Store account resource group name (if different from Data Factory account). Type: string (or Expression with resultType string).
     */
    resourceGroupName?: any;
    /**
     * The ID of the application used to authenticate against the Azure Data Lake Store account. Type: string (or Expression with resultType string).
     */
    servicePrincipalId?: any;
    /**
     * The Key of the application used to authenticate against the Azure Data Lake Store account.
     */
    servicePrincipalKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Data Lake Store account subscription ID (if different from Data Factory account). Type: string (or Expression with resultType string).
     */
    subscriptionId?: any;
    /**
     * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
     */
    tenant?: any;
    /**
     * Type of linked service.
     * Expected value is 'AzureDataLakeStore'.
     */
    type: "AzureDataLakeStore";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The location of azure data lake store dataset.
 */
export interface AzureDataLakeStoreLocationResponse {
    /**
     * Specify the file name of dataset. Type: string (or Expression with resultType string).
     */
    fileName?: any;
    /**
     * Specify the folder path of dataset. Type: string (or Expression with resultType string)
     */
    folderPath?: any;
    /**
     * Type of dataset storage location.
     * Expected value is 'AzureDataLakeStoreLocation'.
     */
    type: "AzureDataLakeStoreLocation";
}

/**
 * Azure data lake store read settings.
 */
export interface AzureDataLakeStoreReadSettingsResponse {
    /**
     * Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    deleteFilesAfterCompletion?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Indicates whether to enable partition discovery. Type: boolean (or Expression with resultType boolean).
     */
    enablePartitionDiscovery?: any;
    /**
     * Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
     */
    fileListPath?: any;
    /**
     * Lists files after the value (exclusive) based on file/folder names’ lexicographical order. Applies under the folderPath in data set, and filter files/sub-folders under the folderPath. Type: string (or Expression with resultType string).
     */
    listAfter?: any;
    /**
     * Lists files before the value (inclusive) based on file/folder names’ lexicographical order. Applies under the folderPath in data set, and filter files/sub-folders under the folderPath. Type: string (or Expression with resultType string).
     */
    listBefore?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * The end of file's modified datetime. Type: string (or Expression with resultType string).
     */
    modifiedDatetimeEnd?: any;
    /**
     * The start of file's modified datetime. Type: string (or Expression with resultType string).
     */
    modifiedDatetimeStart?: any;
    /**
     * Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
     */
    partitionRootPath?: any;
    /**
     * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
     */
    recursive?: any;
    /**
     * The read setting type.
     * Expected value is 'AzureDataLakeStoreReadSettings'.
     */
    type: "AzureDataLakeStoreReadSettings";
    /**
     * ADLS wildcardFileName. Type: string (or Expression with resultType string).
     */
    wildcardFileName?: any;
    /**
     * ADLS wildcardFolderPath. Type: string (or Expression with resultType string).
     */
    wildcardFolderPath?: any;
}

/**
 * A copy activity Azure Data Lake Store sink.
 */
export interface AzureDataLakeStoreSinkResponse {
    /**
     * The type of copy behavior for copy sink. Type: string (or Expression with resultType string).
     */
    copyBehavior?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Single File Parallel.
     */
    enableAdlsSingleFileParallel?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'AzureDataLakeStoreSink'.
     */
    type: "AzureDataLakeStoreSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
}

/**
 * A copy activity Azure Data Lake source.
 */
export interface AzureDataLakeStoreSourceResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
     */
    recursive?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'AzureDataLakeStoreSource'.
     */
    type: "AzureDataLakeStoreSource";
}

/**
 * Azure data lake store write settings.
 */
export interface AzureDataLakeStoreWriteSettingsResponse {
    /**
     * The type of copy behavior for copy sink.
     */
    copyBehavior?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Specifies the expiry time of the written files. The time is applied to the UTC time zone in the format of "2018-12-01T05:00:00Z". Default value is NULL. Type: string (or Expression with resultType string).
     */
    expiryDateTime?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Specify the custom metadata to be added to sink data. Type: array of objects (or Expression with resultType array of objects).
     */
    metadata?: MetadataItemResponse[];
    /**
     * The write setting type.
     * Expected value is 'AzureDataLakeStoreWriteSettings'.
     */
    type: "AzureDataLakeStoreWriteSettings";
}

/**
 * Azure Databricks Delta Lake dataset.
 */
export interface AzureDatabricksDeltaLakeDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * The database name of delta table. Type: string (or Expression with resultType string).
     */
    database?: any;
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The name of delta table. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * Type of dataset.
     * Expected value is 'AzureDatabricksDeltaLakeDataset'.
     */
    type: "AzureDatabricksDeltaLakeDataset";
}

/**
 * Azure Databricks Delta Lake export command settings.
 */
export interface AzureDatabricksDeltaLakeExportCommandResponse {
    /**
     * Specify the date format for the csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string).
     */
    dateFormat?: any;
    /**
     * Specify the timestamp format for the csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string).
     */
    timestampFormat?: any;
    /**
     * The export setting type.
     * Expected value is 'AzureDatabricksDeltaLakeExportCommand'.
     */
    type: "AzureDatabricksDeltaLakeExportCommand";
}

/**
 * Azure Databricks Delta Lake import command settings.
 */
export interface AzureDatabricksDeltaLakeImportCommandResponse {
    /**
     * Specify the date format for csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string).
     */
    dateFormat?: any;
    /**
     * Specify the timestamp format for csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string).
     */
    timestampFormat?: any;
    /**
     * The import setting type.
     * Expected value is 'AzureDatabricksDeltaLakeImportCommand'.
     */
    type: "AzureDatabricksDeltaLakeImportCommand";
}

/**
 * Azure Databricks Delta Lake linked service.
 */
export interface AzureDatabricksDeltaLakeLinkedServiceResponse {
    /**
     * Access token for databricks REST API. Refer to https://docs.azuredatabricks.net/api/latest/authentication.html. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    accessToken?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The id of an existing interactive cluster that will be used for all runs of this job. Type: string (or Expression with resultType string).
     */
    clusterId?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The credential reference containing authentication information.
     */
    credential?: CredentialReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * <REGION>.azuredatabricks.net, domain name of your Databricks deployment. Type: string (or Expression with resultType string).
     */
    domain: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Type of linked service.
     * Expected value is 'AzureDatabricksDeltaLake'.
     */
    type: "AzureDatabricksDeltaLake";
    /**
     * Version of the linked service.
     */
    version?: string;
    /**
     * Workspace resource id for databricks REST API. Type: string (or Expression with resultType string).
     */
    workspaceResourceId?: any;
}

/**
 * A copy activity Azure Databricks Delta Lake sink.
 */
export interface AzureDatabricksDeltaLakeSinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Azure Databricks Delta Lake import settings.
     */
    importSettings?: AzureDatabricksDeltaLakeImportCommandResponse;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * SQL pre-copy script. Type: string (or Expression with resultType string).
     */
    preCopyScript?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'AzureDatabricksDeltaLakeSink'.
     */
    type: "AzureDatabricksDeltaLakeSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
}

/**
 * A copy activity Azure Databricks Delta Lake source.
 */
export interface AzureDatabricksDeltaLakeSourceResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Azure Databricks Delta Lake export settings.
     */
    exportSettings?: AzureDatabricksDeltaLakeExportCommandResponse;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Azure Databricks Delta Lake Sql query. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'AzureDatabricksDeltaLakeSource'.
     */
    type: "AzureDatabricksDeltaLakeSource";
}

/**
 * Azure Databricks linked service.
 */
export interface AzureDatabricksLinkedServiceResponse {
    /**
     * Access token for databricks REST API. Refer to https://docs.azuredatabricks.net/api/latest/authentication.html. Type: string (or Expression with resultType string).
     */
    accessToken?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * Required to specify MSI, if using Workspace resource id for databricks REST API. Type: string (or Expression with resultType string).
     */
    authentication?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The credential reference containing authentication information.
     */
    credential?: CredentialReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * <REGION>.azuredatabricks.net, domain name of your Databricks deployment. Type: string (or Expression with resultType string).
     */
    domain: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The id of an existing interactive cluster that will be used for all runs of this activity. Type: string (or Expression with resultType string).
     */
    existingClusterId?: any;
    /**
     * The id of an existing instance pool that will be used for all runs of this activity. Type: string (or Expression with resultType string).
     */
    instancePoolId?: any;
    /**
     * Additional tags for cluster resources. This property is ignored in instance pool configurations.
     */
    newClusterCustomTags?: {[key: string]: any};
    /**
     * The driver node type for the new job cluster. This property is ignored in instance pool configurations. Type: string (or Expression with resultType string).
     */
    newClusterDriverNodeType?: any;
    /**
     * Enable the elastic disk on the new cluster. This property is now ignored, and takes the default elastic disk behavior in Databricks (elastic disks are always enabled). Type: boolean (or Expression with resultType boolean).
     */
    newClusterEnableElasticDisk?: any;
    /**
     * User-defined initialization scripts for the new cluster. Type: array of strings (or Expression with resultType array of strings).
     */
    newClusterInitScripts?: any;
    /**
     * Specify a location to deliver Spark driver, worker, and event logs. Type: string (or Expression with resultType string).
     */
    newClusterLogDestination?: any;
    /**
     * The node type of the new job cluster. This property is required if newClusterVersion is specified and instancePoolId is not specified. If instancePoolId is specified, this property is ignored. Type: string (or Expression with resultType string).
     */
    newClusterNodeType?: any;
    /**
     * If not using an existing interactive cluster, this specifies the number of worker nodes to use for the new job cluster or instance pool. For new job clusters, this a string-formatted Int32, like '1' means numOfWorker is 1 or '1:10' means auto-scale from 1 (min) to 10 (max). For instance pools, this is a string-formatted Int32, and can only specify a fixed number of worker nodes, such as '2'. Required if newClusterVersion is specified. Type: string (or Expression with resultType string).
     */
    newClusterNumOfWorker?: any;
    /**
     * A set of optional, user-specified Spark configuration key-value pairs.
     */
    newClusterSparkConf?: {[key: string]: any};
    /**
     * A set of optional, user-specified Spark environment variables key-value pairs.
     */
    newClusterSparkEnvVars?: {[key: string]: any};
    /**
     * If not using an existing interactive cluster, this specifies the Spark version of a new job cluster or instance pool nodes created for each run of this activity. Required if instancePoolId is specified. Type: string (or Expression with resultType string).
     */
    newClusterVersion?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The policy id for limiting the ability to configure clusters based on a user defined set of rules. Type: string (or Expression with resultType string).
     */
    policyId?: any;
    /**
     * Type of linked service.
     * Expected value is 'AzureDatabricks'.
     */
    type: "AzureDatabricks";
    /**
     * Version of the linked service.
     */
    version?: string;
    /**
     * Workspace resource id for databricks REST API. Type: string (or Expression with resultType string).
     */
    workspaceResourceId?: any;
}

/**
 * Azure File Storage linked service.
 */
export interface AzureFileStorageLinkedServiceResponse {
    /**
     * The Azure key vault secret reference of accountKey in connection string.
     */
    accountKey?: AzureKeyVaultSecretReferenceResponse;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The connection string. It is mutually exclusive with sasUri property. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * The credential reference containing authentication information.
     */
    credential?: CredentialReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The azure file share name. It is required when auth with accountKey/sasToken. Type: string (or Expression with resultType string).
     */
    fileShare?: any;
    /**
     * Host name of the server. Type: string (or Expression with resultType string).
     */
    host?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Password to logon the server.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The Azure key vault secret reference of sasToken in sas uri.
     */
    sasToken?: AzureKeyVaultSecretReferenceResponse;
    /**
     * SAS URI of the Azure File resource. It is mutually exclusive with connectionString property. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    sasUri?: any;
    /**
     * File service endpoint of the Azure File Storage resource. It is mutually exclusive with connectionString, sasUri property.
     */
    serviceEndpoint?: any;
    /**
     * The azure file share snapshot version. Type: string (or Expression with resultType string).
     */
    snapshot?: any;
    /**
     * Type of linked service.
     * Expected value is 'AzureFileStorage'.
     */
    type: "AzureFileStorage";
    /**
     * User ID to logon the server. Type: string (or Expression with resultType string).
     */
    userId?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The location of file server dataset.
 */
export interface AzureFileStorageLocationResponse {
    /**
     * Specify the file name of dataset. Type: string (or Expression with resultType string).
     */
    fileName?: any;
    /**
     * Specify the folder path of dataset. Type: string (or Expression with resultType string)
     */
    folderPath?: any;
    /**
     * Type of dataset storage location.
     * Expected value is 'AzureFileStorageLocation'.
     */
    type: "AzureFileStorageLocation";
}

/**
 * Azure File Storage read settings.
 */
export interface AzureFileStorageReadSettingsResponse {
    /**
     * Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    deleteFilesAfterCompletion?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Indicates whether to enable partition discovery. Type: boolean (or Expression with resultType boolean).
     */
    enablePartitionDiscovery?: any;
    /**
     * Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
     */
    fileListPath?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * The end of file's modified datetime. Type: string (or Expression with resultType string).
     */
    modifiedDatetimeEnd?: any;
    /**
     * The start of file's modified datetime. Type: string (or Expression with resultType string).
     */
    modifiedDatetimeStart?: any;
    /**
     * Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
     */
    partitionRootPath?: any;
    /**
     * The prefix filter for the Azure File name starting from root path. Type: string (or Expression with resultType string).
     */
    prefix?: any;
    /**
     * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
     */
    recursive?: any;
    /**
     * The read setting type.
     * Expected value is 'AzureFileStorageReadSettings'.
     */
    type: "AzureFileStorageReadSettings";
    /**
     * Azure File Storage wildcardFileName. Type: string (or Expression with resultType string).
     */
    wildcardFileName?: any;
    /**
     * Azure File Storage wildcardFolderPath. Type: string (or Expression with resultType string).
     */
    wildcardFolderPath?: any;
}

/**
 * Azure File Storage write settings.
 */
export interface AzureFileStorageWriteSettingsResponse {
    /**
     * The type of copy behavior for copy sink.
     */
    copyBehavior?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Specify the custom metadata to be added to sink data. Type: array of objects (or Expression with resultType array of objects).
     */
    metadata?: MetadataItemResponse[];
    /**
     * The write setting type.
     * Expected value is 'AzureFileStorageWriteSettings'.
     */
    type: "AzureFileStorageWriteSettings";
}

/**
 * Azure Function activity.
 */
export interface AzureFunctionActivityResponse {
    /**
     * Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string).
     */
    body?: any;
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * Name of the Function that the Azure Function Activity will call. Type: string (or Expression with resultType string)
     */
    functionName: any;
    /**
     * Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string).
     */
    headers?: {[key: string]: any};
    /**
     * Linked service reference.
     */
    linkedServiceName?: LinkedServiceReferenceResponse;
    /**
     * Rest API method for target endpoint.
     */
    method: string;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity policy.
     */
    policy?: ActivityPolicyResponse;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Type of activity.
     * Expected value is 'AzureFunctionActivity'.
     */
    type: "AzureFunctionActivity";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * Azure Function linked service.
 */
export interface AzureFunctionLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * Type of authentication (Required to specify MSI) used to connect to AzureFunction. Type: string (or Expression with resultType string).
     */
    authentication?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The credential reference containing authentication information.
     */
    credential?: CredentialReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The endpoint of the Azure Function App. URL will be in the format https://<accountName>.azurewebsites.net. Type: string (or Expression with resultType string).
     */
    functionAppUrl: any;
    /**
     * Function or Host key for Azure Function App.
     */
    functionKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Allowed token audiences for azure function. Type: string (or Expression with resultType string).
     */
    resourceId?: any;
    /**
     * Type of linked service.
     * Expected value is 'AzureFunction'.
     */
    type: "AzureFunction";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Azure Key Vault linked service.
 */
export interface AzureKeyVaultLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The base URL of the Azure Key Vault. e.g. https://myakv.vault.azure.net Type: string (or Expression with resultType string).
     */
    baseUrl: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The credential reference containing authentication information.
     */
    credential?: CredentialReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Type of linked service.
     * Expected value is 'AzureKeyVault'.
     */
    type: "AzureKeyVault";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Azure Key Vault secret reference.
 */
export interface AzureKeyVaultSecretReferenceResponse {
    /**
     * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
     */
    secretName: any;
    /**
     * The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string).
     */
    secretVersion?: any;
    /**
     * The Azure Key Vault linked service reference.
     */
    store: LinkedServiceReferenceResponse;
    /**
     * Type of the secret.
     * Expected value is 'AzureKeyVaultSecret'.
     */
    type: "AzureKeyVaultSecret";
}

/**
 * Azure ML Batch Execution activity.
 */
export interface AzureMLBatchExecutionActivityResponse {
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * Key,Value pairs to be passed to the Azure ML Batch Execution Service endpoint. Keys must match the names of web service parameters defined in the published Azure ML web service. Values will be passed in the GlobalParameters property of the Azure ML batch execution request.
     */
    globalParameters?: {[key: string]: any};
    /**
     * Linked service reference.
     */
    linkedServiceName?: LinkedServiceReferenceResponse;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity policy.
     */
    policy?: ActivityPolicyResponse;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Type of activity.
     * Expected value is 'AzureMLBatchExecution'.
     */
    type: "AzureMLBatchExecution";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
    /**
     * Key,Value pairs, mapping the names of Azure ML endpoint's Web Service Inputs to AzureMLWebServiceFile objects specifying the input Blob locations.. This information will be passed in the WebServiceInputs property of the Azure ML batch execution request.
     */
    webServiceInputs?: {[key: string]: AzureMLWebServiceFileResponse};
    /**
     * Key,Value pairs, mapping the names of Azure ML endpoint's Web Service Outputs to AzureMLWebServiceFile objects specifying the output Blob locations. This information will be passed in the WebServiceOutputs property of the Azure ML batch execution request.
     */
    webServiceOutputs?: {[key: string]: AzureMLWebServiceFileResponse};
}

/**
 * Azure ML Execute Pipeline activity.
 */
export interface AzureMLExecutePipelineActivityResponse {
    /**
     * Whether to continue execution of other steps in the PipelineRun if a step fails. This information will be passed in the continueOnStepFailure property of the published pipeline execution request. Type: boolean (or Expression with resultType boolean).
     */
    continueOnStepFailure?: any;
    /**
     * Dictionary used for changing data path assignments without retraining. Values will be passed in the dataPathAssignments property of the published pipeline execution request. Type: object (or Expression with resultType object).
     */
    dataPathAssignments?: any;
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * Run history experiment name of the pipeline run. This information will be passed in the ExperimentName property of the published pipeline execution request. Type: string (or Expression with resultType string).
     */
    experimentName?: any;
    /**
     * Linked service reference.
     */
    linkedServiceName?: LinkedServiceReferenceResponse;
    /**
     * The parent Azure ML Service pipeline run id. This information will be passed in the ParentRunId property of the published pipeline execution request. Type: string (or Expression with resultType string).
     */
    mlParentRunId?: any;
    /**
     * ID of the published Azure ML pipeline endpoint. Type: string (or Expression with resultType string).
     */
    mlPipelineEndpointId?: any;
    /**
     * ID of the published Azure ML pipeline. Type: string (or Expression with resultType string).
     */
    mlPipelineId?: any;
    /**
     * Key,Value pairs to be passed to the published Azure ML pipeline endpoint. Keys must match the names of pipeline parameters defined in the published pipeline. Values will be passed in the ParameterAssignments property of the published pipeline execution request. Type: object with key value pairs (or Expression with resultType object).
     */
    mlPipelineParameters?: any;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity policy.
     */
    policy?: ActivityPolicyResponse;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Type of activity.
     * Expected value is 'AzureMLExecutePipeline'.
     */
    type: "AzureMLExecutePipeline";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
    /**
     * Version of the published Azure ML pipeline endpoint. Type: string (or Expression with resultType string).
     */
    version?: any;
}

/**
 * Azure ML Studio Web Service linked service.
 */
export interface AzureMLLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The API key for accessing the Azure ML model endpoint.
     */
    apiKey: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Type of authentication (Required to specify MSI) used to connect to AzureML. Type: string (or Expression with resultType string).
     */
    authentication?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The Batch Execution REST URL for an Azure ML Studio Web Service endpoint. Type: string (or Expression with resultType string).
     */
    mlEndpoint: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The ID of the service principal used to authenticate against the ARM-based updateResourceEndpoint of an Azure ML Studio web service. Type: string (or Expression with resultType string).
     */
    servicePrincipalId?: any;
    /**
     * The key of the service principal used to authenticate against the ARM-based updateResourceEndpoint of an Azure ML Studio web service.
     */
    servicePrincipalKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
     */
    tenant?: any;
    /**
     * Type of linked service.
     * Expected value is 'AzureML'.
     */
    type: "AzureML";
    /**
     * The Update Resource REST URL for an Azure ML Studio Web Service endpoint. Type: string (or Expression with resultType string).
     */
    updateResourceEndpoint?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Azure ML Service linked service.
 */
export interface AzureMLServiceLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * Type of authentication (Required to specify MSI) used to connect to AzureML. Type: string (or Expression with resultType string).
     */
    authentication?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Azure ML Service workspace name. Type: string (or Expression with resultType string).
     */
    mlWorkspaceName: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Azure ML Service workspace resource group name. Type: string (or Expression with resultType string).
     */
    resourceGroupName: any;
    /**
     * The ID of the service principal used to authenticate against the endpoint of a published Azure ML Service pipeline. Type: string (or Expression with resultType string).
     */
    servicePrincipalId?: any;
    /**
     * The key of the service principal used to authenticate against the endpoint of a published Azure ML Service pipeline.
     */
    servicePrincipalKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Azure ML Service workspace subscription ID. Type: string (or Expression with resultType string).
     */
    subscriptionId: any;
    /**
     * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
     */
    tenant?: any;
    /**
     * Type of linked service.
     * Expected value is 'AzureMLService'.
     */
    type: "AzureMLService";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Azure ML Update Resource management activity.
 */
export interface AzureMLUpdateResourceActivityResponse {
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * Linked service reference.
     */
    linkedServiceName?: LinkedServiceReferenceResponse;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity policy.
     */
    policy?: ActivityPolicyResponse;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * The relative file path in trainedModelLinkedService to represent the .ilearner file that will be uploaded by the update operation.  Type: string (or Expression with resultType string).
     */
    trainedModelFilePath: any;
    /**
     * Name of Azure Storage linked service holding the .ilearner file that will be uploaded by the update operation.
     */
    trainedModelLinkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Name of the Trained Model module in the Web Service experiment to be updated. Type: string (or Expression with resultType string).
     */
    trainedModelName: any;
    /**
     * Type of activity.
     * Expected value is 'AzureMLUpdateResource'.
     */
    type: "AzureMLUpdateResource";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * Azure ML WebService Input/Output file
 */
export interface AzureMLWebServiceFileResponse {
    /**
     * The relative file path, including container name, in the Azure Blob Storage specified by the LinkedService. Type: string (or Expression with resultType string).
     */
    filePath: any;
    /**
     * Reference to an Azure Storage LinkedService, where Azure ML WebService Input/Output file located.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
}

/**
 * Azure Database for MariaDB linked service.
 */
export interface AzureMariaDBLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    pwd?: AzureKeyVaultSecretReferenceResponse;
    /**
     * Type of linked service.
     * Expected value is 'AzureMariaDB'.
     */
    type: "AzureMariaDB";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity Azure MariaDB source.
 */
export interface AzureMariaDBSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'AzureMariaDBSource'.
     */
    type: "AzureMariaDBSource";
}

/**
 * Azure Database for MariaDB dataset.
 */
export interface AzureMariaDBTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'AzureMariaDBTable'.
     */
    type: "AzureMariaDBTable";
}

/**
 * Azure MySQL database linked service.
 */
export interface AzureMySqlLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    password?: AzureKeyVaultSecretReferenceResponse;
    /**
     * Type of linked service.
     * Expected value is 'AzureMySql'.
     */
    type: "AzureMySql";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity Azure MySql sink.
 */
export interface AzureMySqlSinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to execute before starting the copy. Type: string (or Expression with resultType string).
     */
    preCopyScript?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'AzureMySqlSink'.
     */
    type: "AzureMySqlSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
}

/**
 * A copy activity Azure MySQL source.
 */
export interface AzureMySqlSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Database query. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'AzureMySqlSource'.
     */
    type: "AzureMySqlSource";
}

/**
 * The Azure MySQL database dataset.
 */
export interface AzureMySqlTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The name of Azure MySQL database table. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * The Azure MySQL database table name. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'AzureMySqlTable'.
     */
    type: "AzureMySqlTable";
}

/**
 * Azure PostgreSQL linked service.
 */
export interface AzurePostgreSqlLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
     */
    azureCloudType?: any;
    /**
     * The time to wait (in seconds) while trying to execute a command before terminating the attempt and generating an error. Set to zero for infinity. Type: integer.
     */
    commandTimeout?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * The credential reference containing authentication information.
     */
    credential?: CredentialReferenceResponse;
    /**
     * Database name for connection. Type: string.
     */
    database?: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * Gets or sets the .NET encoding that will be used to encode/decode PostgreSQL string data. Type: string
     */
    encoding?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    password?: AzureKeyVaultSecretReferenceResponse;
    /**
     * The port for the connection. Type: integer.
     */
    port?: any;
    /**
     * Determines the size of the internal buffer uses when reading. Increasing may improve performance if transferring large values from the database. Type: integer.
     */
    readBufferSize?: any;
    /**
     * Server name for connection. Type: string.
     */
    server?: any;
    /**
     * The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
     */
    servicePrincipalCredentialType?: any;
    /**
     * Specify the base64 encoded certificate of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
     */
    servicePrincipalEmbeddedCert?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Specify the password of your certificate if your certificate has a password and you are using AadServicePrincipal authentication. Type: string (or Expression with resultType string).
     */
    servicePrincipalEmbeddedCertPassword?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The ID of the service principal used to authenticate against Azure Database for PostgreSQL Flexible server. Type: string (or Expression with resultType string).
     */
    servicePrincipalId?: any;
    /**
     * The key of the service principal used to authenticate against Azure Database for PostgreSQL Flexible server.
     */
    servicePrincipalKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * SSL mode for connection. Type: integer. 0: disable, 1:allow, 2: prefer, 3: require, 4: verify-ca, 5: verify-full. Type: integer.
     */
    sslMode?: any;
    /**
     * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
     */
    tenant?: any;
    /**
     * The time to wait (in seconds) while trying to establish a connection before terminating the attempt and generating an error. Type: integer.
     */
    timeout?: any;
    /**
     * Gets or sets the session timezone. Type: string.
     */
    timezone?: any;
    /**
     * Whether to trust the server certificate without validating it. Type: boolean.
     */
    trustServerCertificate?: any;
    /**
     * Type of linked service.
     * Expected value is 'AzurePostgreSql'.
     */
    type: "AzurePostgreSql";
    /**
     * Username for authentication. Type: string.
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity Azure Database for PostgreSQL sink.
 */
export interface AzurePostgreSqlSinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to execute before starting the copy. Type: string (or Expression with resultType string).
     */
    preCopyScript?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'AzurePostgreSqlSink'.
     */
    type: "AzurePostgreSqlSink";
    /**
     * Azure Database for PostgreSQL upsert option settings
     */
    upsertSettings?: AzurePostgreSqlSinkResponseUpsertSettings;
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
    /**
     * The write behavior for the operation. Default is Bulk Insert.
     */
    writeMethod?: string;
}

/**
 * Azure Database for PostgreSQL upsert option settings
 */
export interface AzurePostgreSqlSinkResponseUpsertSettings {
    /**
     * Key column names for unique row identification. Type: array of strings (or Expression with resultType array of strings).
     */
    keys?: any;
}

/**
 * A copy activity Azure Database for PostgreSQL source.
 */
export interface AzurePostgreSqlSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'AzurePostgreSqlSource'.
     */
    type: "AzurePostgreSqlSource";
}

/**
 * Azure PostgreSQL dataset.
 */
export interface AzurePostgreSqlTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name of the Azure PostgreSQL database. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * The table name of the Azure PostgreSQL database which includes both schema and table. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'AzurePostgreSqlTable'.
     */
    type: "AzurePostgreSqlTable";
}

/**
 * A copy activity Azure Queue sink.
 */
export interface AzureQueueSinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'AzureQueueSink'.
     */
    type: "AzureQueueSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
}

/**
 * The Azure Search Index.
 */
export interface AzureSearchIndexDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * The name of the Azure Search Index. Type: string (or Expression with resultType string).
     */
    indexName: any;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'AzureSearchIndex'.
     */
    type: "AzureSearchIndex";
}

/**
 * A copy activity Azure Search Index sink.
 */
export interface AzureSearchIndexSinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'AzureSearchIndexSink'.
     */
    type: "AzureSearchIndexSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
    /**
     * Specify the write behavior when upserting documents into Azure Search Index.
     */
    writeBehavior?: string;
}

/**
 * Linked service for Windows Azure Search Service.
 */
export interface AzureSearchLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Admin Key for Azure Search service
     */
    key?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Type of linked service.
     * Expected value is 'AzureSearch'.
     */
    type: "AzureSearch";
    /**
     * URL for Azure Search service. Type: string (or Expression with resultType string).
     */
    url: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Azure SQL Data Warehouse linked service.
 */
export interface AzureSqlDWLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The application workload type when connecting to a server, used by recommended version. Possible values are ReadOnly and ReadWrite. Type: string (or Expression with resultType string).
     */
    applicationIntent?: any;
    /**
     * The type used for authentication. Type: string.
     */
    authenticationType?: string;
    /**
     * Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
     */
    azureCloudType?: any;
    /**
     * The default wait time (in seconds) before terminating the attempt to execute a command and generating an error, used by recommended version. Type: integer (or Expression with resultType integer).
     */
    commandTimeout?: any;
    /**
     * The number of re-connections attempted after identifying that there was an idle connection failure, used by recommended version. This must be an integer between 0 and 255. Type: integer (or Expression with resultType integer).
     */
    connectRetryCount?: any;
    /**
     * The amount of time (in seconds) between each re-connection attempt after identifying that there was an idle connection failure, used by recommended version. This must be an integer between 1 and 60. Type: integer (or Expression with resultType integer).
     */
    connectRetryInterval?: any;
    /**
     * The length of time (in seconds) to wait for a connection to the server before terminating the attempt and generating an error, used by recommended version. Type: integer (or Expression with resultType integer).
     */
    connectTimeout?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * The credential reference containing authentication information.
     */
    credential?: CredentialReferenceResponse;
    /**
     * The name of the database, used by recommended version. Type: string (or Expression with resultType string).
     */
    database?: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * Indicate whether TLS encryption is required for all data sent between the client and server, used by recommended version. Possible values are true/yes/mandatory, false/no/optional and strict. Type: string (or Expression with resultType string).
     */
    encrypt?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The name or address of the partner server to connect to if the primary server is down, used by recommended version. Type: string (or Expression with resultType string).
     */
    failoverPartner?: any;
    /**
     * The host name to use when validating the server certificate for the connection. When not specified, the server name from the Data Source is used for certificate validation, used by recommended version. Type: string (or Expression with resultType string).
     */
    hostNameInCertificate?: any;
    /**
     * Indicate whether User ID and Password are specified in the connection (when false) or whether the current Windows account credentials are used for authentication (when true), used by recommended version. Type: Boolean (or Expression with resultType boolean).
     */
    integratedSecurity?: any;
    /**
     * The minimum time, in seconds, for the connection to live in the connection pool before being destroyed, used by recommended version. Type: integer (or Expression with resultType integer).
     */
    loadBalanceTimeout?: any;
    /**
     * The maximum number of connections allowed in the connection pool for this specific connection string, used by recommended version. Type: integer (or Expression with resultType integer).
     */
    maxPoolSize?: any;
    /**
     * The minimum number of connections allowed in the connection pool for this specific connection string, used by recommended version. Type: integer (or Expression with resultType integer).
     */
    minPoolSize?: any;
    /**
     * If your application is connecting to an AlwaysOn availability group (AG) on different subnets, setting MultiSubnetFailover=true provides faster detection of and connection to the (currently) active server, used by recommended version. Type: Boolean (or Expression with resultType boolean).
     */
    multiSubnetFailover?: any;
    /**
     * When true, an application can maintain multiple active result sets (MARS). When false, an application must process or cancel all result sets from one batch before it can execute any other batch on that connection, used by recommended version. Type: Boolean (or Expression with resultType boolean).
     */
    multipleActiveResultSets?: any;
    /**
     * The size in bytes of the network packets used to communicate with an instance of server, used by recommended version. Type: integer (or Expression with resultType integer).
     */
    packetSize?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    password?: AzureKeyVaultSecretReferenceResponse;
    /**
     * Indicate whether the connection will be pooled or explicitly opened every time that the connection is requested, used by recommended version. Type: Boolean (or Expression with resultType boolean).
     */
    pooling?: any;
    /**
     * The name or network address of the instance of SQL Server to which to connect, used by recommended version. Type: string (or Expression with resultType string).
     */
    server?: any;
    /**
     * The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
     */
    servicePrincipalCredential?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
     */
    servicePrincipalCredentialType?: any;
    /**
     * The ID of the service principal used to authenticate against Azure SQL Data Warehouse. Type: string (or Expression with resultType string).
     */
    servicePrincipalId?: any;
    /**
     * The key of the service principal used to authenticate against Azure SQL Data Warehouse.
     */
    servicePrincipalKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
     */
    tenant?: any;
    /**
     * Indicate whether the channel will be encrypted while bypassing walking the certificate chain to validate trust, used by recommended version. Type: Boolean (or Expression with resultType boolean).
     */
    trustServerCertificate?: any;
    /**
     * Type of linked service.
     * Expected value is 'AzureSqlDW'.
     */
    type: "AzureSqlDW";
    /**
     * The user name to be used when connecting to server. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The Azure SQL Data Warehouse dataset.
 */
export interface AzureSqlDWTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name of the Azure SQL Data Warehouse. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * This property will be retired. Please consider using schema + table properties instead.
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'AzureSqlDWTable'.
     */
    type: "AzureSqlDWTable";
}

/**
 * Microsoft Azure SQL Database linked service.
 */
export interface AzureSqlDatabaseLinkedServiceResponse {
    /**
     * Sql always encrypted properties.
     */
    alwaysEncryptedSettings?: SqlAlwaysEncryptedPropertiesResponse;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The application workload type when connecting to a server, used by recommended version. Possible values are ReadOnly and ReadWrite. Type: string (or Expression with resultType string).
     */
    applicationIntent?: any;
    /**
     * The type used for authentication. Type: string.
     */
    authenticationType?: string;
    /**
     * Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
     */
    azureCloudType?: any;
    /**
     * The default wait time (in seconds) before terminating the attempt to execute a command and generating an error, used by recommended version. Type: integer (or Expression with resultType integer).
     */
    commandTimeout?: any;
    /**
     * The number of re-connections attempted after identifying that there was an idle connection failure, used by recommended version. This must be an integer between 0 and 255. Type: integer (or Expression with resultType integer).
     */
    connectRetryCount?: any;
    /**
     * The amount of time (in seconds) between each re-connection attempt after identifying that there was an idle connection failure, used by recommended version. This must be an integer between 1 and 60. Type: integer (or Expression with resultType integer).
     */
    connectRetryInterval?: any;
    /**
     * The length of time (in seconds) to wait for a connection to the server before terminating the attempt and generating an error, used by recommended version. Type: integer (or Expression with resultType integer).
     */
    connectTimeout?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * The credential reference containing authentication information.
     */
    credential?: CredentialReferenceResponse;
    /**
     * The name of the database, used by recommended version. Type: string (or Expression with resultType string).
     */
    database?: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * Indicate whether TLS encryption is required for all data sent between the client and server, used by recommended version. Possible values are true/yes/mandatory, false/no/optional and strict. Type: string (or Expression with resultType string).
     */
    encrypt?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The name or address of the partner server to connect to if the primary server is down, used by recommended version. Type: string (or Expression with resultType string).
     */
    failoverPartner?: any;
    /**
     * The host name to use when validating the server certificate for the connection. When not specified, the server name from the Data Source is used for certificate validation, used by recommended version. Type: string (or Expression with resultType string).
     */
    hostNameInCertificate?: any;
    /**
     * Indicate whether User ID and Password are specified in the connection (when false) or whether the current Windows account credentials are used for authentication (when true), used by recommended version. Type: Boolean (or Expression with resultType boolean).
     */
    integratedSecurity?: any;
    /**
     * The minimum time, in seconds, for the connection to live in the connection pool before being destroyed, used by recommended version. Type: integer (or Expression with resultType integer).
     */
    loadBalanceTimeout?: any;
    /**
     * The maximum number of connections allowed in the connection pool for this specific connection string, used by recommended version. Type: integer (or Expression with resultType integer).
     */
    maxPoolSize?: any;
    /**
     * The minimum number of connections allowed in the connection pool for this specific connection string, used by recommended version. Type: integer (or Expression with resultType integer).
     */
    minPoolSize?: any;
    /**
     * If your application is connecting to an AlwaysOn availability group (AG) on different subnets, setting MultiSubnetFailover=true provides faster detection of and connection to the (currently) active server, used by recommended version. Type: Boolean (or Expression with resultType boolean).
     */
    multiSubnetFailover?: any;
    /**
     * When true, an application can maintain multiple active result sets (MARS). When false, an application must process or cancel all result sets from one batch before it can execute any other batch on that connection, used by recommended version. Type: Boolean (or Expression with resultType boolean).
     */
    multipleActiveResultSets?: any;
    /**
     * The size in bytes of the network packets used to communicate with an instance of server, used by recommended version. Type: integer (or Expression with resultType integer).
     */
    packetSize?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    password?: AzureKeyVaultSecretReferenceResponse;
    /**
     * Indicate whether the connection will be pooled or explicitly opened every time that the connection is requested, used by recommended version. Type: Boolean (or Expression with resultType boolean).
     */
    pooling?: any;
    /**
     * The name or network address of the instance of SQL Server to which to connect, used by recommended version. Type: string (or Expression with resultType string).
     */
    server?: any;
    /**
     * The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
     */
    servicePrincipalCredential?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
     */
    servicePrincipalCredentialType?: any;
    /**
     * The ID of the service principal used to authenticate against Azure SQL Database. Type: string (or Expression with resultType string).
     */
    servicePrincipalId?: any;
    /**
     * The key of the service principal used to authenticate against Azure SQL Database.
     */
    servicePrincipalKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
     */
    tenant?: any;
    /**
     * Indicate whether the channel will be encrypted while bypassing walking the certificate chain to validate trust, used by recommended version. Type: Boolean (or Expression with resultType boolean).
     */
    trustServerCertificate?: any;
    /**
     * Type of linked service.
     * Expected value is 'AzureSqlDatabase'.
     */
    type: "AzureSqlDatabase";
    /**
     * The user name to be used when connecting to server. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Azure SQL Managed Instance linked service.
 */
export interface AzureSqlMILinkedServiceResponse {
    /**
     * Sql always encrypted properties.
     */
    alwaysEncryptedSettings?: SqlAlwaysEncryptedPropertiesResponse;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The application workload type when connecting to a server, used by recommended version. Possible values are ReadOnly and ReadWrite. Type: string (or Expression with resultType string).
     */
    applicationIntent?: any;
    /**
     * The type used for authentication. Type: string.
     */
    authenticationType?: string;
    /**
     * Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
     */
    azureCloudType?: any;
    /**
     * The default wait time (in seconds) before terminating the attempt to execute a command and generating an error, used by recommended version. Type: integer (or Expression with resultType integer).
     */
    commandTimeout?: any;
    /**
     * The number of re-connections attempted after identifying that there was an idle connection failure, used by recommended version. This must be an integer between 0 and 255. Type: integer (or Expression with resultType integer).
     */
    connectRetryCount?: any;
    /**
     * The amount of time (in seconds) between each re-connection attempt after identifying that there was an idle connection failure, used by recommended version. This must be an integer between 1 and 60. Type: integer (or Expression with resultType integer).
     */
    connectRetryInterval?: any;
    /**
     * The length of time (in seconds) to wait for a connection to the server before terminating the attempt and generating an error, used by recommended version. Type: integer (or Expression with resultType integer).
     */
    connectTimeout?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * The credential reference containing authentication information.
     */
    credential?: CredentialReferenceResponse;
    /**
     * The name of the database, used by recommended version. Type: string (or Expression with resultType string).
     */
    database?: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * Indicate whether TLS encryption is required for all data sent between the client and server, used by recommended version. Possible values are true/yes/mandatory, false/no/optional and strict. Type: string (or Expression with resultType string).
     */
    encrypt?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The name or address of the partner server to connect to if the primary server is down, used by recommended version. Type: string (or Expression with resultType string).
     */
    failoverPartner?: any;
    /**
     * The host name to use when validating the server certificate for the connection. When not specified, the server name from the Data Source is used for certificate validation, used by recommended version. Type: string (or Expression with resultType string).
     */
    hostNameInCertificate?: any;
    /**
     * Indicate whether User ID and Password are specified in the connection (when false) or whether the current Windows account credentials are used for authentication (when true), used by recommended version. Type: Boolean (or Expression with resultType boolean).
     */
    integratedSecurity?: any;
    /**
     * The minimum time, in seconds, for the connection to live in the connection pool before being destroyed, used by recommended version. Type: integer (or Expression with resultType integer).
     */
    loadBalanceTimeout?: any;
    /**
     * The maximum number of connections allowed in the connection pool for this specific connection string, used by recommended version. Type: integer (or Expression with resultType integer).
     */
    maxPoolSize?: any;
    /**
     * The minimum number of connections allowed in the connection pool for this specific connection string, used by recommended version. Type: integer (or Expression with resultType integer).
     */
    minPoolSize?: any;
    /**
     * If your application is connecting to an AlwaysOn availability group (AG) on different subnets, setting MultiSubnetFailover=true provides faster detection of and connection to the (currently) active server, used by recommended version. Type: Boolean (or Expression with resultType boolean).
     */
    multiSubnetFailover?: any;
    /**
     * When true, an application can maintain multiple active result sets (MARS). When false, an application must process or cancel all result sets from one batch before it can execute any other batch on that connection, used by recommended version. Type: Boolean (or Expression with resultType boolean).
     */
    multipleActiveResultSets?: any;
    /**
     * The size in bytes of the network packets used to communicate with an instance of server, used by recommended version. Type: integer (or Expression with resultType integer).
     */
    packetSize?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    password?: AzureKeyVaultSecretReferenceResponse;
    /**
     * Indicate whether the connection will be pooled or explicitly opened every time that the connection is requested, used by recommended version. Type: Boolean (or Expression with resultType boolean).
     */
    pooling?: any;
    /**
     * The name or network address of the instance of SQL Server to which to connect, used by recommended version. Type: string (or Expression with resultType string).
     */
    server?: any;
    /**
     * The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
     */
    servicePrincipalCredential?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
     */
    servicePrincipalCredentialType?: any;
    /**
     * The ID of the service principal used to authenticate against Azure SQL Managed Instance. Type: string (or Expression with resultType string).
     */
    servicePrincipalId?: any;
    /**
     * The key of the service principal used to authenticate against Azure SQL Managed Instance.
     */
    servicePrincipalKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
     */
    tenant?: any;
    /**
     * Indicate whether the channel will be encrypted while bypassing walking the certificate chain to validate trust, used by recommended version. Type: Boolean (or Expression with resultType boolean).
     */
    trustServerCertificate?: any;
    /**
     * Type of linked service.
     * Expected value is 'AzureSqlMI'.
     */
    type: "AzureSqlMI";
    /**
     * The user name to be used when connecting to server. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The Azure SQL Managed Instance dataset.
 */
export interface AzureSqlMITableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name of the Azure SQL Managed Instance dataset. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * This property will be retired. Please consider using schema + table properties instead.
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'AzureSqlMITable'.
     */
    type: "AzureSqlMITable";
}

/**
 * A copy activity Azure SQL sink.
 */
export interface AzureSqlSinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * SQL pre-copy script. Type: string (or Expression with resultType string).
     */
    preCopyScript?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * SQL writer stored procedure name. Type: string (or Expression with resultType string).
     */
    sqlWriterStoredProcedureName?: any;
    /**
     * SQL writer table type. Type: string (or Expression with resultType string).
     */
    sqlWriterTableType?: any;
    /**
     * Whether to use table lock during bulk copy. Type: boolean (or Expression with resultType boolean).
     */
    sqlWriterUseTableLock?: any;
    /**
     * SQL stored procedure parameters.
     */
    storedProcedureParameters?: any;
    /**
     * The stored procedure parameter name of the table type. Type: string (or Expression with resultType string).
     */
    storedProcedureTableTypeParameterName?: any;
    /**
     * The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string).
     */
    tableOption?: any;
    /**
     * Copy sink type.
     * Expected value is 'AzureSqlSink'.
     */
    type: "AzureSqlSink";
    /**
     * SQL upsert settings.
     */
    upsertSettings?: SqlUpsertSettingsResponse;
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
    /**
     * Write behavior when copying data into Azure SQL. Type: SqlWriteBehaviorEnum (or Expression with resultType SqlWriteBehaviorEnum)
     */
    writeBehavior?: any;
}

/**
 * A copy activity Azure SQL source.
 */
export interface AzureSqlSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Specifies the transaction locking behavior for the SQL source. Allowed values: ReadCommitted/ReadUncommitted/RepeatableRead/Serializable/Snapshot. The default value is ReadCommitted. Type: string (or Expression with resultType string).
     */
    isolationLevel?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". Type: string (or Expression with resultType string).
     */
    partitionOption?: any;
    /**
     * The settings that will be leveraged for Sql source partitioning.
     */
    partitionSettings?: SqlPartitionSettingsResponse;
    /**
     * Which additional types to produce.
     */
    produceAdditionalTypes?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * SQL reader query. Type: string (or Expression with resultType string).
     */
    sqlReaderQuery?: any;
    /**
     * Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string).
     */
    sqlReaderStoredProcedureName?: any;
    /**
     * Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".
     */
    storedProcedureParameters?: any;
    /**
     * Copy source type.
     * Expected value is 'AzureSqlSource'.
     */
    type: "AzureSqlSource";
}

/**
 * The Azure SQL Server database dataset.
 */
export interface AzureSqlTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name of the Azure SQL database. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * This property will be retired. Please consider using schema + table properties instead.
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'AzureSqlTable'.
     */
    type: "AzureSqlTable";
}

/**
 * The storage account linked service.
 */
export interface AzureStorageLinkedServiceResponse {
    /**
     * The Azure key vault secret reference of accountKey in connection string.
     */
    accountKey?: AzureKeyVaultSecretReferenceResponse;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The connection string. It is mutually exclusive with sasUri property. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The Azure key vault secret reference of sasToken in sas uri.
     */
    sasToken?: AzureKeyVaultSecretReferenceResponse;
    /**
     * SAS URI of the Azure Storage resource. It is mutually exclusive with connectionString property. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    sasUri?: any;
    /**
     * Type of linked service.
     * Expected value is 'AzureStorage'.
     */
    type: "AzureStorage";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Azure Synapse Analytics (Artifacts) linked service.
 */
export interface AzureSynapseArtifactsLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * Required to specify MSI, if using system assigned managed identity as authentication method. Type: string (or Expression with resultType string).
     */
    authentication?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * https://<workspacename>.dev.azuresynapse.net, Azure Synapse Analytics workspace URL. Type: string (or Expression with resultType string).
     */
    endpoint: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Type of linked service.
     * Expected value is 'AzureSynapseArtifacts'.
     */
    type: "AzureSynapseArtifacts";
    /**
     * Version of the linked service.
     */
    version?: string;
    /**
     * The resource ID of the Synapse workspace. The format should be: /subscriptions/{subscriptionID}/resourceGroups/{resourceGroup}/providers/Microsoft.Synapse/workspaces/{workspaceName}. Type: string (or Expression with resultType string).
     */
    workspaceResourceId?: any;
}

/**
 * The Azure Table storage dataset.
 */
export interface AzureTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name of the Azure Table storage. Type: string (or Expression with resultType string).
     */
    tableName: any;
    /**
     * Type of dataset.
     * Expected value is 'AzureTable'.
     */
    type: "AzureTable";
}

/**
 * A copy activity Azure Table sink.
 */
export interface AzureTableSinkResponse {
    /**
     * Azure Table default partition key value. Type: string (or Expression with resultType string).
     */
    azureTableDefaultPartitionKeyValue?: any;
    /**
     * Azure Table insert type. Type: string (or Expression with resultType string).
     */
    azureTableInsertType?: any;
    /**
     * Azure Table partition key name. Type: string (or Expression with resultType string).
     */
    azureTablePartitionKeyName?: any;
    /**
     * Azure Table row key name. Type: string (or Expression with resultType string).
     */
    azureTableRowKeyName?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'AzureTableSink'.
     */
    type: "AzureTableSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
}

/**
 * A copy activity Azure Table source.
 */
export interface AzureTableSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * Azure Table source ignore table not found. Type: boolean (or Expression with resultType boolean).
     */
    azureTableSourceIgnoreTableNotFound?: any;
    /**
     * Azure Table source query. Type: string (or Expression with resultType string).
     */
    azureTableSourceQuery?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'AzureTableSource'.
     */
    type: "AzureTableSource";
}

/**
 * The azure table storage linked service.
 */
export interface AzureTableStorageLinkedServiceResponse {
    /**
     * The Azure key vault secret reference of accountKey in connection string.
     */
    accountKey?: AzureKeyVaultSecretReferenceResponse;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The connection string. It is mutually exclusive with sasUri property. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * The credential reference containing authentication information.
     */
    credential?: CredentialReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The Azure key vault secret reference of sasToken in sas uri.
     */
    sasToken?: AzureKeyVaultSecretReferenceResponse;
    /**
     * SAS URI of the Azure Storage resource. It is mutually exclusive with connectionString property. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    sasUri?: any;
    /**
     * Table service endpoint of the Azure Table Storage resource. It is mutually exclusive with connectionString, sasUri property.
     */
    serviceEndpoint?: any;
    /**
     * Type of linked service.
     * Expected value is 'AzureTableStorage'.
     */
    type: "AzureTableStorage";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Big data pool reference type.
 */
export interface BigDataPoolParametrizationReferenceResponse {
    /**
     * Reference big data pool name. Type: string (or Expression with resultType string).
     */
    referenceName: any;
    /**
     * Big data pool reference type.
     */
    type: string;
}

/**
 * Binary dataset.
 */
export interface BinaryDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * The data compression method used for the binary dataset.
     */
    compression?: DatasetCompressionResponse;
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * The location of the Binary storage.
     */
    location: AmazonS3CompatibleLocationResponse | AmazonS3LocationResponse | AzureBlobFSLocationResponse | AzureBlobStorageLocationResponse | AzureDataLakeStoreLocationResponse | AzureFileStorageLocationResponse | FileServerLocationResponse | FtpServerLocationResponse | GoogleCloudStorageLocationResponse | HdfsLocationResponse | HttpServerLocationResponse | LakeHouseLocationResponse | OracleCloudStorageLocationResponse | SftpLocationResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'Binary'.
     */
    type: "Binary";
}

/**
 * Binary read settings.
 */
export interface BinaryReadSettingsResponse {
    /**
     * Compression settings.
     */
    compressionProperties?: TarGZipReadSettingsResponse | TarReadSettingsResponse | ZipDeflateReadSettingsResponse;
    /**
     * The read setting type.
     * Expected value is 'BinaryReadSettings'.
     */
    type: "BinaryReadSettings";
}

/**
 * A copy activity Binary sink.
 */
export interface BinarySinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Binary store settings.
     */
    storeSettings?: AzureBlobFSWriteSettingsResponse | AzureBlobStorageWriteSettingsResponse | AzureDataLakeStoreWriteSettingsResponse | AzureFileStorageWriteSettingsResponse | FileServerWriteSettingsResponse | LakeHouseWriteSettingsResponse | SftpWriteSettingsResponse;
    /**
     * Copy sink type.
     * Expected value is 'BinarySink'.
     */
    type: "BinarySink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
}

/**
 * A copy activity Binary source.
 */
export interface BinarySourceResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Binary format settings.
     */
    formatSettings?: BinaryReadSettingsResponse;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Binary store settings.
     */
    storeSettings?: AmazonS3CompatibleReadSettingsResponse | AmazonS3ReadSettingsResponse | AzureBlobFSReadSettingsResponse | AzureBlobStorageReadSettingsResponse | AzureDataLakeStoreReadSettingsResponse | AzureFileStorageReadSettingsResponse | FileServerReadSettingsResponse | FtpReadSettingsResponse | GoogleCloudStorageReadSettingsResponse | HdfsReadSettingsResponse | HttpReadSettingsResponse | LakeHouseReadSettingsResponse | OracleCloudStorageReadSettingsResponse | SftpReadSettingsResponse;
    /**
     * Copy source type.
     * Expected value is 'BinarySource'.
     */
    type: "BinarySource";
}

/**
 * Trigger that runs every time a Blob event occurs.
 */
export interface BlobEventsTriggerResponse {
    /**
     * List of tags that can be used for describing the trigger.
     */
    annotations?: any[];
    /**
     * The blob path must begin with the pattern provided for trigger to fire. For example, '/records/blobs/december/' will only fire the trigger for blobs in the december folder under the records container. At least one of these must be provided: blobPathBeginsWith, blobPathEndsWith.
     */
    blobPathBeginsWith?: string;
    /**
     * The blob path must end with the pattern provided for trigger to fire. For example, 'december/boxes.csv' will only fire the trigger for blobs named boxes in a december folder. At least one of these must be provided: blobPathBeginsWith, blobPathEndsWith.
     */
    blobPathEndsWith?: string;
    /**
     * Trigger description.
     */
    description?: string;
    /**
     * The type of events that cause this trigger to fire.
     */
    events: string[];
    /**
     * If set to true, blobs with zero bytes will be ignored.
     */
    ignoreEmptyBlobs?: boolean;
    /**
     * Pipelines that need to be started.
     */
    pipelines?: TriggerPipelineReferenceResponse[];
    /**
     * Indicates if trigger is running or not. Updated when Start/Stop APIs are called on the Trigger.
     */
    runtimeState: string;
    /**
     * The ARM resource ID of the Storage Account.
     */
    scope: string;
    /**
     * Trigger type.
     * Expected value is 'BlobEventsTrigger'.
     */
    type: "BlobEventsTrigger";
}

/**
 * A copy activity Azure Blob sink.
 */
export interface BlobSinkResponse {
    /**
     * Blob writer add header. Type: boolean (or Expression with resultType boolean).
     */
    blobWriterAddHeader?: any;
    /**
     * Blob writer date time format. Type: string (or Expression with resultType string).
     */
    blobWriterDateTimeFormat?: any;
    /**
     * Blob writer overwrite files. Type: boolean (or Expression with resultType boolean).
     */
    blobWriterOverwriteFiles?: any;
    /**
     * The type of copy behavior for copy sink.
     */
    copyBehavior?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Specify the custom metadata to be added to sink data. Type: array of objects (or Expression with resultType array of objects).
     */
    metadata?: MetadataItemResponse[];
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'BlobSink'.
     */
    type: "BlobSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
}

/**
 * A copy activity Azure Blob source.
 */
export interface BlobSourceResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
     */
    recursive?: any;
    /**
     * Number of header lines to skip from each blob. Type: integer (or Expression with resultType integer).
     */
    skipHeaderLineCount?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Treat empty as null. Type: boolean (or Expression with resultType boolean).
     */
    treatEmptyAsNull?: any;
    /**
     * Copy source type.
     * Expected value is 'BlobSource'.
     */
    type: "BlobSource";
}

/**
 * Trigger that runs every time the selected Blob container changes.
 */
export interface BlobTriggerResponse {
    /**
     * List of tags that can be used for describing the trigger.
     */
    annotations?: any[];
    /**
     * Trigger description.
     */
    description?: string;
    /**
     * The path of the container/folder that will trigger the pipeline.
     */
    folderPath: string;
    /**
     * The Azure Storage linked service reference.
     */
    linkedService: LinkedServiceReferenceResponse;
    /**
     * The max number of parallel files to handle when it is triggered.
     */
    maxConcurrency: number;
    /**
     * Pipelines that need to be started.
     */
    pipelines?: TriggerPipelineReferenceResponse[];
    /**
     * Indicates if trigger is running or not. Updated when Start/Stop APIs are called on the Trigger.
     */
    runtimeState: string;
    /**
     * Trigger type.
     * Expected value is 'BlobTrigger'.
     */
    type: "BlobTrigger";
}

/**
 * Managed Identity used for CMK.
 */
export interface CMKIdentityDefinitionResponse {
    /**
     * The resource id of the user assigned identity to authenticate to customer's key vault.
     */
    userAssignedIdentity?: string;
}

/**
 * Linked service for Cassandra data source.
 */
export interface CassandraLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * AuthenticationType to be used for connection. Type: string (or Expression with resultType string).
     */
    authenticationType?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Host name for connection. Type: string (or Expression with resultType string).
     */
    host: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Password for authentication.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The port for the connection. Type: integer (or Expression with resultType integer).
     */
    port?: any;
    /**
     * Type of linked service.
     * Expected value is 'Cassandra'.
     */
    type: "Cassandra";
    /**
     * Username for authentication. Type: string (or Expression with resultType string).
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity source for a Cassandra database.
 */
export interface CassandraSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * The consistency level specifies how many Cassandra servers must respond to a read request before returning data to the client application. Cassandra checks the specified number of Cassandra servers for data to satisfy the read request. Must be one of cassandraSourceReadConsistencyLevels. The default value is 'ONE'. It is case-insensitive.
     */
    consistencyLevel?: string;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Database query. Should be a SQL-92 query expression or Cassandra Query Language (CQL) command. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'CassandraSource'.
     */
    type: "CassandraSource";
}

/**
 * The Cassandra database dataset.
 */
export interface CassandraTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * The keyspace of the Cassandra database. Type: string (or Expression with resultType string).
     */
    keyspace?: any;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name of the Cassandra database. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'CassandraTable'.
     */
    type: "CassandraTable";
}

/**
 * Trigger that allows the referenced pipeline to depend on other pipeline runs based on runDimension Name/Value pairs. Upstream pipelines should declare the same runDimension Name and their runs should have the values for those runDimensions. The referenced pipeline run would be triggered if the values for the runDimension match for all upstream pipeline runs.
 */
export interface ChainingTriggerResponse {
    /**
     * List of tags that can be used for describing the trigger.
     */
    annotations?: any[];
    /**
     * Upstream Pipelines.
     */
    dependsOn: PipelineReferenceResponse[];
    /**
     * Trigger description.
     */
    description?: string;
    /**
     * Pipeline for which runs are created when all upstream pipelines complete successfully.
     */
    pipeline: TriggerPipelineReferenceResponse;
    /**
     * Run Dimension property that needs to be emitted by upstream pipelines.
     */
    runDimension: string;
    /**
     * Indicates if trigger is running or not. Updated when Start/Stop APIs are called on the Trigger.
     */
    runtimeState: string;
    /**
     * Trigger type.
     * Expected value is 'ChainingTrigger'.
     */
    type: "ChainingTrigger";
}

/**
 * The folder that this CDC is in. If not specified, CDC will appear at the root level.
 */
export interface ChangeDataCaptureResponseFolder {
    /**
     * The name of the folder that this CDC is in.
     */
    name?: string;
}

/**
 * The custom setup of running cmdkey commands.
 */
export interface CmdkeySetupResponse {
    /**
     * The password of data source access.
     */
    password: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The server name of data source access. Type: string.
     */
    targetName: any;
    /**
     * The type of custom setup.
     * Expected value is 'CmdkeySetup'.
     */
    type: "CmdkeySetup";
    /**
     * The user name of data source access. Type: string.
     */
    userName: any;
}

/**
 * The Common Data Service for Apps entity dataset.
 */
export interface CommonDataServiceForAppsEntityDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The logical name of the entity. Type: string (or Expression with resultType string).
     */
    entityName?: any;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'CommonDataServiceForAppsEntity'.
     */
    type: "CommonDataServiceForAppsEntity";
}

/**
 * Common Data Service for Apps linked service.
 */
export interface CommonDataServiceForAppsLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The authentication type to connect to Common Data Service for Apps server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario. 'AADServicePrincipal' for Server-To-Server authentication in online scenario, 'Active Directory' for Dynamics on-premises with IFD. Type: string (or Expression with resultType string).
     */
    authenticationType: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The deployment type of the Common Data Service for Apps instance. 'Online' for Common Data Service for Apps Online and 'OnPremisesWithIfd' for Common Data Service for Apps on-premises with Ifd. Type: string (or Expression with resultType string).
     */
    deploymentType: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The Active Directory domain that will verify user credentials. Type: string (or Expression with resultType string).
     */
    domain?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The host name of the on-premises Common Data Service for Apps server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string).
     */
    hostName?: any;
    /**
     * The organization name of the Common Data Service for Apps instance. The property is required for on-prem and required for online when there are more than one Common Data Service for Apps instances associated with the user. Type: string (or Expression with resultType string).
     */
    organizationName?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Password to access the Common Data Service for Apps instance.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The port of on-premises Common Data Service for Apps server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    port?: any;
    /**
     * The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
     */
    servicePrincipalCredential?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
     */
    servicePrincipalCredentialType?: any;
    /**
     * The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string).
     */
    servicePrincipalId?: any;
    /**
     * The URL to the Microsoft Common Data Service for Apps server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string).
     */
    serviceUri?: any;
    /**
     * Type of linked service.
     * Expected value is 'CommonDataServiceForApps'.
     */
    type: "CommonDataServiceForApps";
    /**
     * User name to access the Common Data Service for Apps instance. Type: string (or Expression with resultType string).
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity Common Data Service for Apps sink.
 */
export interface CommonDataServiceForAppsSinkResponse {
    /**
     * The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string).
     */
    alternateKeyName?: any;
    /**
     * Controls the bypass of Dataverse custom business logic. Type: string (or Expression with resultType string). Type: string (or Expression with resultType string).
     */
    bypassBusinessLogicExecution?: any;
    /**
     * Controls the bypass of Power Automate flows. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    bypassPowerAutomateFlows?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The flag indicating whether to ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    ignoreNullValues?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'CommonDataServiceForAppsSink'.
     */
    type: "CommonDataServiceForAppsSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
    /**
     * The write behavior for the operation.
     */
    writeBehavior: string;
}

/**
 * A copy activity Common Data Service for Apps source.
 */
export interface CommonDataServiceForAppsSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * FetchXML is a proprietary query language that is used in Microsoft Common Data Service for Apps (online & on-premises). Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'CommonDataServiceForAppsSource'.
     */
    type: "CommonDataServiceForAppsSource";
}

/**
 * The custom setup of installing 3rd party components.
 */
export interface ComponentSetupResponse {
    /**
     * The name of the 3rd party component.
     */
    componentName: string;
    /**
     * The license key to activate the component.
     */
    licenseKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The type of custom setup.
     * Expected value is 'ComponentSetup'.
     */
    type: "ComponentSetup";
}

/**
 * Concur Service linked service.
 */
export interface ConcurLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * Application client_id supplied by Concur App Management.
     */
    clientId: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Properties used to connect to Concur. It is mutually exclusive with any other properties in the linked service. Type: object.
     */
    connectionProperties?: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The password corresponding to the user name that you provided in the username field.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Type of linked service.
     * Expected value is 'Concur'.
     */
    type: "Concur";
    /**
     * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
     */
    useEncryptedEndpoints?: any;
    /**
     * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
     */
    useHostVerification?: any;
    /**
     * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
     */
    usePeerVerification?: any;
    /**
     * The user name that you use to access Concur Service.
     */
    username: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Concur Service dataset.
 */
export interface ConcurObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'ConcurObject'.
     */
    type: "ConcurObject";
}

/**
 * A copy activity Concur Service source.
 */
export interface ConcurSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'ConcurSource'.
     */
    type: "ConcurSource";
}

/**
 * The connection state of a managed private endpoint
 */
export interface ConnectionStatePropertiesResponse {
    /**
     * The actions required on the managed private endpoint
     */
    actionsRequired: string;
    /**
     * The managed private endpoint description
     */
    description: string;
    /**
     * The approval status
     */
    status: string;
}

/**
 * Continuation settings for execute data flow activity.
 */
export interface ContinuationSettingsReferenceResponse {
    /**
     * Continuation TTL in minutes.
     */
    continuationTtlInMinutes?: any;
    /**
     * Customized checkpoint key.
     */
    customizedCheckpointKey?: any;
    /**
     * Idle condition.
     */
    idleCondition?: any;
}

/**
 * Base class for all control activities like IfCondition, ForEach , Until.
 */
export interface ControlActivityResponse {
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Type of activity.
     * Expected value is 'Container'.
     */
    type: "Container";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * Settings for copy activity log.
 */
export interface CopyActivityLogSettingsResponse {
    /**
     * Specifies whether to enable reliable logging. Type: boolean (or Expression with resultType boolean).
     */
    enableReliableLogging?: any;
    /**
     * Gets or sets the log level, support: Info, Warning. Type: string (or Expression with resultType string).
     */
    logLevel?: any;
}

/**
 * Copy activity.
 */
export interface CopyActivityResponse {
    /**
     * Maximum number of data integration units that can be used to perform this data movement. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    dataIntegrationUnits?: any;
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * Whether to skip incompatible row. Default value is false. Type: boolean (or Expression with resultType boolean).
     */
    enableSkipIncompatibleRow?: any;
    /**
     * Specifies whether to copy data via an interim staging. Default value is false. Type: boolean (or Expression with resultType boolean).
     */
    enableStaging?: any;
    /**
     * List of inputs for the activity.
     */
    inputs?: DatasetReferenceResponse[];
    /**
     * Linked service reference.
     */
    linkedServiceName?: LinkedServiceReferenceResponse;
    /**
     * Log settings customer needs provide when enabling log.
     */
    logSettings?: LogSettingsResponse;
    /**
     * (Deprecated. Please use LogSettings) Log storage settings customer need to provide when enabling session log.
     */
    logStorageSettings?: LogStorageSettingsResponse;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * List of outputs for the activity.
     */
    outputs?: DatasetReferenceResponse[];
    /**
     * Maximum number of concurrent sessions opened on the source or sink to avoid overloading the data store. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    parallelCopies?: any;
    /**
     * Activity policy.
     */
    policy?: ActivityPolicyResponse;
    /**
     * Preserve rules.
     */
    preserve?: any[];
    /**
     * Preserve Rules.
     */
    preserveRules?: any[];
    /**
     * Redirect incompatible row settings when EnableSkipIncompatibleRow is true.
     */
    redirectIncompatibleRowSettings?: RedirectIncompatibleRowSettingsResponse;
    /**
     * Copy activity sink.
     */
    sink: AvroSinkResponse | AzureBlobFSSinkResponse | AzureDataExplorerSinkResponse | AzureDataLakeStoreSinkResponse | AzureDatabricksDeltaLakeSinkResponse | AzureMySqlSinkResponse | AzurePostgreSqlSinkResponse | AzureQueueSinkResponse | AzureSearchIndexSinkResponse | AzureSqlSinkResponse | AzureTableSinkResponse | BinarySinkResponse | BlobSinkResponse | CommonDataServiceForAppsSinkResponse | CosmosDbMongoDbApiSinkResponse | CosmosDbSqlApiSinkResponse | DelimitedTextSinkResponse | DocumentDbCollectionSinkResponse | DynamicsCrmSinkResponse | DynamicsSinkResponse | FileSystemSinkResponse | IcebergSinkResponse | InformixSinkResponse | JsonSinkResponse | LakeHouseTableSinkResponse | MicrosoftAccessSinkResponse | MongoDbAtlasSinkResponse | MongoDbV2SinkResponse | OdbcSinkResponse | OracleSinkResponse | OrcSinkResponse | ParquetSinkResponse | RestSinkResponse | SalesforceServiceCloudSinkResponse | SalesforceServiceCloudV2SinkResponse | SalesforceSinkResponse | SalesforceV2SinkResponse | SapCloudForCustomerSinkResponse | SnowflakeSinkResponse | SnowflakeV2SinkResponse | SqlDWSinkResponse | SqlMISinkResponse | SqlServerSinkResponse | SqlSinkResponse | TeradataSinkResponse | WarehouseSinkResponse;
    /**
     * Specify the fault tolerance for data consistency.
     */
    skipErrorFile?: SkipErrorFileResponse;
    /**
     * Copy activity source.
     */
    source: AmazonMWSSourceResponse | AmazonRdsForOracleSourceResponse | AmazonRdsForSqlServerSourceResponse | AmazonRedshiftSourceResponse | AvroSourceResponse | AzureBlobFSSourceResponse | AzureDataExplorerSourceResponse | AzureDataLakeStoreSourceResponse | AzureDatabricksDeltaLakeSourceResponse | AzureMariaDBSourceResponse | AzureMySqlSourceResponse | AzurePostgreSqlSourceResponse | AzureSqlSourceResponse | AzureTableSourceResponse | BinarySourceResponse | BlobSourceResponse | CassandraSourceResponse | CommonDataServiceForAppsSourceResponse | ConcurSourceResponse | CosmosDbMongoDbApiSourceResponse | CosmosDbSqlApiSourceResponse | CouchbaseSourceResponse | Db2SourceResponse | DelimitedTextSourceResponse | DocumentDbCollectionSourceResponse | DrillSourceResponse | DynamicsAXSourceResponse | DynamicsCrmSourceResponse | DynamicsSourceResponse | EloquaSourceResponse | ExcelSourceResponse | FileSystemSourceResponse | GoogleAdWordsSourceResponse | GoogleBigQuerySourceResponse | GoogleBigQueryV2SourceResponse | GreenplumSourceResponse | HBaseSourceResponse | HdfsSourceResponse | HiveSourceResponse | HttpSourceResponse | HubspotSourceResponse | ImpalaSourceResponse | InformixSourceResponse | JiraSourceResponse | JsonSourceResponse | LakeHouseTableSourceResponse | MagentoSourceResponse | MariaDBSourceResponse | MarketoSourceResponse | MicrosoftAccessSourceResponse | MongoDbAtlasSourceResponse | MongoDbSourceResponse | MongoDbV2SourceResponse | MySqlSourceResponse | NetezzaSourceResponse | ODataSourceResponse | OdbcSourceResponse | Office365SourceResponse | OracleServiceCloudSourceResponse | OracleSourceResponse | OrcSourceResponse | ParquetSourceResponse | PaypalSourceResponse | PhoenixSourceResponse | PostgreSqlSourceResponse | PostgreSqlV2SourceResponse | PrestoSourceResponse | QuickBooksSourceResponse | RelationalSourceResponse | ResponsysSourceResponse | RestSourceResponse | SalesforceMarketingCloudSourceResponse | SalesforceServiceCloudSourceResponse | SalesforceServiceCloudV2SourceResponse | SalesforceSourceResponse | SalesforceV2SourceResponse | SapBwSourceResponse | SapCloudForCustomerSourceResponse | SapEccSourceResponse | SapHanaSourceResponse | SapOdpSourceResponse | SapOpenHubSourceResponse | SapTableSourceResponse | ServiceNowSourceResponse | ServiceNowV2SourceResponse | SharePointOnlineListSourceResponse | ShopifySourceResponse | SnowflakeSourceResponse | SnowflakeV2SourceResponse | SparkSourceResponse | SqlDWSourceResponse | SqlMISourceResponse | SqlServerSourceResponse | SqlSourceResponse | SquareSourceResponse | SybaseSourceResponse | TabularSourceResponse | TeradataSourceResponse | VerticaSourceResponse | WarehouseSourceResponse | WebSourceResponse | XeroSourceResponse | XmlSourceResponse | ZohoSourceResponse;
    /**
     * Specifies interim staging settings when EnableStaging is true.
     */
    stagingSettings?: StagingSettingsResponse;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Copy activity translator. If not specified, tabular translator is used.
     */
    translator?: any;
    /**
     * Type of activity.
     * Expected value is 'Copy'.
     */
    type: "Copy";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
    /**
     * Whether to enable Data Consistency validation. Type: boolean (or Expression with resultType boolean).
     */
    validateDataConsistency?: any;
}

/**
 * CopyComputeScale properties for managed integration runtime.
 */
export interface CopyComputeScalePropertiesResponse {
    /**
     * DIU number setting reserved for copy activity execution. Supported values are multiples of 4 in range 4-256.
     */
    dataIntegrationUnit?: number;
    /**
     * Time to live (in minutes) setting of integration runtime which will execute copy activity.
     */
    timeToLive?: number;
}

/**
 * Microsoft Azure Cosmos Database (CosmosDB) linked service.
 */
export interface CosmosDbLinkedServiceResponse {
    /**
     * The endpoint of the Azure CosmosDB account. Type: string (or Expression with resultType string)
     */
    accountEndpoint?: any;
    /**
     * The account key of the Azure CosmosDB account. Type: SecureString or AzureKeyVaultSecretReference.
     */
    accountKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
     */
    azureCloudType?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The connection mode used to access CosmosDB account. Type: string.
     */
    connectionMode?: string;
    /**
     * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * The credential reference containing authentication information.
     */
    credential?: CredentialReferenceResponse;
    /**
     * The name of the database. Type: string (or Expression with resultType string)
     */
    database?: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
     */
    servicePrincipalCredential?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string.
     */
    servicePrincipalCredentialType?: any;
    /**
     * The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string).
     */
    servicePrincipalId?: any;
    /**
     * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
     */
    tenant?: any;
    /**
     * Type of linked service.
     * Expected value is 'CosmosDb'.
     */
    type: "CosmosDb";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The CosmosDB (MongoDB API) database dataset.
 */
export interface CosmosDbMongoDbApiCollectionDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * The collection name of the CosmosDB (MongoDB API) database. Type: string (or Expression with resultType string).
     */
    collection: any;
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'CosmosDbMongoDbApiCollection'.
     */
    type: "CosmosDbMongoDbApiCollection";
}

/**
 * Linked service for CosmosDB (MongoDB API) data source.
 */
export interface CosmosDbMongoDbApiLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The CosmosDB (MongoDB API) connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString: any;
    /**
     * The name of the CosmosDB (MongoDB API) database that you want to access. Type: string (or Expression with resultType string).
     */
    database: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * Whether the CosmosDB (MongoDB API) server version is higher than 3.2. The default value is false. Type: boolean (or Expression with resultType boolean).
     */
    isServerVersionAbove32?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Type of linked service.
     * Expected value is 'CosmosDbMongoDbApi'.
     */
    type: "CosmosDbMongoDbApi";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity sink for a CosmosDB (MongoDB API) database.
 */
export interface CosmosDbMongoDbApiSinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'CosmosDbMongoDbApiSink'.
     */
    type: "CosmosDbMongoDbApiSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
    /**
     * Specifies whether the document with same key to be overwritten (upsert) rather than throw exception (insert). The default value is "insert". Type: string (or Expression with resultType string). Type: string (or Expression with resultType string).
     */
    writeBehavior?: any;
}

/**
 * A copy activity source for a CosmosDB (MongoDB API) database.
 */
export interface CosmosDbMongoDbApiSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * Specifies the number of documents to return in each batch of the response from MongoDB instance. In most cases, modifying the batch size will not affect the user or the application. This property's main purpose is to avoid hit the limitation of response size. Type: integer (or Expression with resultType integer).
     */
    batchSize?: any;
    /**
     * Cursor methods for Mongodb query.
     */
    cursorMethods?: MongoDbCursorMethodsPropertiesResponse;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). Type: string (or Expression with resultType string).
     */
    filter?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'CosmosDbMongoDbApiSource'.
     */
    type: "CosmosDbMongoDbApiSource";
}

/**
 * Microsoft Azure CosmosDB (SQL API) Collection dataset.
 */
export interface CosmosDbSqlApiCollectionDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * CosmosDB (SQL API) collection name. Type: string (or Expression with resultType string).
     */
    collectionName: any;
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'CosmosDbSqlApiCollection'.
     */
    type: "CosmosDbSqlApiCollection";
}

/**
 * A copy activity Azure CosmosDB (SQL API) Collection sink.
 */
export interface CosmosDbSqlApiSinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'CosmosDbSqlApiSink'.
     */
    type: "CosmosDbSqlApiSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
    /**
     * Describes how to write data to Azure Cosmos DB. Type: string (or Expression with resultType string). Allowed values: insert and upsert.
     */
    writeBehavior?: any;
}

/**
 * A copy activity Azure CosmosDB (SQL API) Collection source.
 */
export interface CosmosDbSqlApiSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * Whether detect primitive values as datetime values. Type: boolean (or Expression with resultType boolean).
     */
    detectDatetime?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Page size of the result. Type: integer (or Expression with resultType integer).
     */
    pageSize?: any;
    /**
     * Preferred regions. Type: array of strings (or Expression with resultType array of strings).
     */
    preferredRegions?: any;
    /**
     * SQL API query. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'CosmosDbSqlApiSource'.
     */
    type: "CosmosDbSqlApiSource";
}

/**
 * Couchbase server linked service.
 */
export interface CouchbaseLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * The Azure key vault secret reference of credString in connection string.
     */
    credString?: AzureKeyVaultSecretReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Type of linked service.
     * Expected value is 'Couchbase'.
     */
    type: "Couchbase";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity Couchbase server source.
 */
export interface CouchbaseSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'CouchbaseSource'.
     */
    type: "CouchbaseSource";
}

/**
 * Couchbase server dataset.
 */
export interface CouchbaseTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'CouchbaseTable'.
     */
    type: "CouchbaseTable";
}

/**
 * Credential reference type.
 */
export interface CredentialReferenceResponse {
    /**
     * Reference credential name.
     */
    referenceName: string;
    /**
     * Credential reference type.
     */
    type: string;
}

/**
 * Reference objects for custom activity
 */
export interface CustomActivityReferenceObjectResponse {
    /**
     * Dataset references.
     */
    datasets?: DatasetReferenceResponse[];
    /**
     * Linked service references.
     */
    linkedServices?: LinkedServiceReferenceResponse[];
}

/**
 * Custom activity type.
 */
export interface CustomActivityResponse {
    /**
     * Elevation level and scope for the user, default is nonadmin task. Type: string (or Expression with resultType double).
     */
    autoUserSpecification?: any;
    /**
     * Command for custom activity Type: string (or Expression with resultType string).
     */
    command: any;
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * User defined property bag. There is no restriction on the keys or values that can be used. The user specified custom activity has the full responsibility to consume and interpret the content defined.
     */
    extendedProperties?: {[key: string]: any};
    /**
     * Folder path for resource files Type: string (or Expression with resultType string).
     */
    folderPath?: any;
    /**
     * Linked service reference.
     */
    linkedServiceName?: LinkedServiceReferenceResponse;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity policy.
     */
    policy?: ActivityPolicyResponse;
    /**
     * Reference objects
     */
    referenceObjects?: CustomActivityReferenceObjectResponse;
    /**
     * Resource linked service reference.
     */
    resourceLinkedService?: LinkedServiceReferenceResponse;
    /**
     * The retention time for the files submitted for custom activity. Type: double (or Expression with resultType double).
     */
    retentionTimeInDays?: any;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Type of activity.
     * Expected value is 'Custom'.
     */
    type: "Custom";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * Custom linked service.
 */
export interface CustomDataSourceLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Type of linked service.
     * Expected value is 'CustomDataSource'.
     */
    type: "CustomDataSource";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The custom dataset.
 */
export interface CustomDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'CustomDataset'.
     */
    type: "CustomDataset";
}

/**
 * Trigger that runs every time a custom event is received.
 */
export interface CustomEventsTriggerResponse {
    /**
     * List of tags that can be used for describing the trigger.
     */
    annotations?: any[];
    /**
     * Trigger description.
     */
    description?: string;
    /**
     * The list of event types that cause this trigger to fire.
     */
    events: any[];
    /**
     * Pipelines that need to be started.
     */
    pipelines?: TriggerPipelineReferenceResponse[];
    /**
     * Indicates if trigger is running or not. Updated when Start/Stop APIs are called on the Trigger.
     */
    runtimeState: string;
    /**
     * The ARM resource ID of the Azure Event Grid Topic.
     */
    scope: string;
    /**
     * The event subject must begin with the pattern provided for trigger to fire. At least one of these must be provided: subjectBeginsWith, subjectEndsWith.
     */
    subjectBeginsWith?: string;
    /**
     * The event subject must end with the pattern provided for trigger to fire. At least one of these must be provided: subjectBeginsWith, subjectEndsWith.
     */
    subjectEndsWith?: string;
    /**
     * Trigger type.
     * Expected value is 'CustomEventsTrigger'.
     */
    type: "CustomEventsTrigger";
}

/**
 * Default value.
 */
export interface DWCopyCommandDefaultValueResponse {
    /**
     * Column name. Type: object (or Expression with resultType string).
     */
    columnName?: any;
    /**
     * The default value of the column. Type: object (or Expression with resultType string).
     */
    defaultValue?: any;
}

/**
 * DW Copy Command settings.
 */
export interface DWCopyCommandSettingsResponse {
    /**
     * Additional options directly passed to SQL DW in Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalOptions": { "MAXERRORS": "1000", "DATEFORMAT": "'ymd'" }
     */
    additionalOptions?: {[key: string]: string};
    /**
     * Specifies the default values for each target column in SQL DW. The default values in the property overwrite the DEFAULT constraint set in the DB, and identity column cannot have a default value. Type: array of objects (or Expression with resultType array of objects).
     */
    defaultValues?: DWCopyCommandDefaultValueResponse[];
}

/**
 * Data flow reference type.
 */
export interface DataFlowReferenceResponse {
    /**
     * Reference data flow parameters from dataset.
     */
    datasetParameters?: any;
    /**
     * Data flow parameters
     */
    parameters?: {[key: string]: any};
    /**
     * Reference data flow name.
     */
    referenceName: string;
    /**
     * Data flow reference type.
     */
    type: string;
}

/**
 * The folder that this data flow is in. If not specified, Data flow will appear at the root level.
 */
export interface DataFlowResponseFolder {
    /**
     * The name of the folder that this data flow is in.
     */
    name?: string;
}

/**
 * Transformation for data flow sink.
 */
export interface DataFlowSinkResponse {
    /**
     * Dataset reference.
     */
    dataset?: DatasetReferenceResponse;
    /**
     * Transformation description.
     */
    description?: string;
    /**
     * Flowlet Reference
     */
    flowlet?: DataFlowReferenceResponse;
    /**
     * Linked service reference.
     */
    linkedService?: LinkedServiceReferenceResponse;
    /**
     * Transformation name.
     */
    name: string;
    /**
     * Rejected data linked service reference.
     */
    rejectedDataLinkedService?: LinkedServiceReferenceResponse;
    /**
     * Schema linked service reference.
     */
    schemaLinkedService?: LinkedServiceReferenceResponse;
}

/**
 * Transformation for data flow source.
 */
export interface DataFlowSourceResponse {
    /**
     * Dataset reference.
     */
    dataset?: DatasetReferenceResponse;
    /**
     * Transformation description.
     */
    description?: string;
    /**
     * Flowlet Reference
     */
    flowlet?: DataFlowReferenceResponse;
    /**
     * Linked service reference.
     */
    linkedService?: LinkedServiceReferenceResponse;
    /**
     * Transformation name.
     */
    name: string;
    /**
     * Schema linked service reference.
     */
    schemaLinkedService?: LinkedServiceReferenceResponse;
}

/**
 * Staging info for execute data flow activity.
 */
export interface DataFlowStagingInfoResponse {
    /**
     * Folder path for staging blob. Type: string (or Expression with resultType string)
     */
    folderPath?: any;
    /**
     * Staging linked service reference.
     */
    linkedService?: LinkedServiceReferenceResponse;
}

/**
 * Data Lake Analytics U-SQL activity.
 */
export interface DataLakeAnalyticsUSQLActivityResponse {
    /**
     * Compilation mode of U-SQL. Must be one of these values : Semantic, Full and SingleBox. Type: string (or Expression with resultType string).
     */
    compilationMode?: any;
    /**
     * The maximum number of nodes simultaneously used to run the job. Default value is 1. Type: integer (or Expression with resultType integer), minimum: 1.
     */
    degreeOfParallelism?: any;
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * Linked service reference.
     */
    linkedServiceName?: LinkedServiceReferenceResponse;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Parameters for U-SQL job request.
     */
    parameters?: {[key: string]: any};
    /**
     * Activity policy.
     */
    policy?: ActivityPolicyResponse;
    /**
     * Determines which jobs out of all that are queued should be selected to run first. The lower the number, the higher the priority. Default value is 1000. Type: integer (or Expression with resultType integer), minimum: 1.
     */
    priority?: any;
    /**
     * Runtime version of the U-SQL engine to use. Type: string (or Expression with resultType string).
     */
    runtimeVersion?: any;
    /**
     * Script linked service reference.
     */
    scriptLinkedService: LinkedServiceReferenceResponse;
    /**
     * Case-sensitive path to folder that contains the U-SQL script. Type: string (or Expression with resultType string).
     */
    scriptPath: any;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Type of activity.
     * Expected value is 'DataLakeAnalyticsU-SQL'.
     */
    type: "DataLakeAnalyticsU-SQL";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * Source and target table mapping details.
 */
export interface DataMapperMappingResponse {
    /**
     * This holds the user provided attribute mapping information.
     */
    attributeMappingInfo?: MapperAttributeMappingsResponse;
    /**
     * The connection reference for the source connection.
     */
    sourceConnectionReference?: MapperConnectionReferenceResponse;
    /**
     * This holds the source denormalization information used while joining multiple sources.
     */
    sourceDenormalizeInfo?: any;
    /**
     * Name of the source table
     */
    sourceEntityName?: string;
    /**
     * Name of the target table
     */
    targetEntityName?: string;
}

/**
 * DatabricksNotebook activity.
 */
export interface DatabricksNotebookActivityResponse {
    /**
     * Base parameters to be used for each run of this job.If the notebook takes a parameter that is not specified, the default value from the notebook will be used.
     */
    baseParameters?: {[key: string]: any};
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * A list of libraries to be installed on the cluster that will execute the job.
     */
    libraries?: {[key: string]: any}[];
    /**
     * Linked service reference.
     */
    linkedServiceName?: LinkedServiceReferenceResponse;
    /**
     * Activity name.
     */
    name: string;
    /**
     * The absolute path of the notebook to be run in the Databricks Workspace. This path must begin with a slash. Type: string (or Expression with resultType string).
     */
    notebookPath: any;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity policy.
     */
    policy?: ActivityPolicyResponse;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Type of activity.
     * Expected value is 'DatabricksNotebook'.
     */
    type: "DatabricksNotebook";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * DatabricksSparkJar activity.
 */
export interface DatabricksSparkJarActivityResponse {
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * A list of libraries to be installed on the cluster that will execute the job.
     */
    libraries?: {[key: string]: any}[];
    /**
     * Linked service reference.
     */
    linkedServiceName?: LinkedServiceReferenceResponse;
    /**
     * The full name of the class containing the main method to be executed. This class must be contained in a JAR provided as a library. Type: string (or Expression with resultType string).
     */
    mainClassName: any;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Parameters that will be passed to the main method.
     */
    parameters?: any[];
    /**
     * Activity policy.
     */
    policy?: ActivityPolicyResponse;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Type of activity.
     * Expected value is 'DatabricksSparkJar'.
     */
    type: "DatabricksSparkJar";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * DatabricksSparkPython activity.
 */
export interface DatabricksSparkPythonActivityResponse {
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * A list of libraries to be installed on the cluster that will execute the job.
     */
    libraries?: {[key: string]: any}[];
    /**
     * Linked service reference.
     */
    linkedServiceName?: LinkedServiceReferenceResponse;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Command line parameters that will be passed to the Python file.
     */
    parameters?: any[];
    /**
     * Activity policy.
     */
    policy?: ActivityPolicyResponse;
    /**
     * The URI of the Python file to be executed. DBFS paths are supported. Type: string (or Expression with resultType string).
     */
    pythonFile: any;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Type of activity.
     * Expected value is 'DatabricksSparkPython'.
     */
    type: "DatabricksSparkPython";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * The compression method used on a dataset.
 */
export interface DatasetCompressionResponse {
    /**
     * The dataset compression level. Type: string (or Expression with resultType string).
     */
    level?: any;
    /**
     * Type of dataset compression. Type: string (or Expression with resultType string).
     */
    type: any;
}

/**
 * Dataset reference type.
 */
export interface DatasetReferenceResponse {
    /**
     * Arguments for dataset.
     */
    parameters?: {[key: string]: any};
    /**
     * Reference dataset name.
     */
    referenceName: string;
    /**
     * Dataset reference type.
     */
    type: string;
}

/**
 * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
 */
export interface DatasetResponseFolder {
    /**
     * The name of the folder that this Dataset is in.
     */
    name?: string;
}

/**
 * Linked service for Dataworld.
 */
export interface DataworldLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The api token for the Dataworld source.
     */
    apiToken: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Type of linked service.
     * Expected value is 'Dataworld'.
     */
    type: "Dataworld";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Linked service for DB2 data source.
 */
export interface Db2LinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * AuthenticationType to be used for connection. It is mutually exclusive with connectionString property.
     */
    authenticationType?: string;
    /**
     * Certificate Common Name when TLS is enabled. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string).
     */
    certificateCommonName?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The connection string. It is mutually exclusive with server, database, authenticationType, userName, packageCollection and certificateCommonName property. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * Database name for connection. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string).
     */
    database?: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. It is mutually exclusive with connectionString property. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Under where packages are created when querying database. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string).
     */
    packageCollection?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Password for authentication.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Server name for connection. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string).
     */
    server?: any;
    /**
     * Type of linked service.
     * Expected value is 'Db2'.
     */
    type: "Db2";
    /**
     * Username for authentication. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string).
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity source for Db2 databases.
 */
export interface Db2SourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Database query. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'Db2Source'.
     */
    type: "Db2Source";
}

/**
 * The Db2 table dataset.
 */
export interface Db2TableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The Db2 table name. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * This property will be retired. Please consider using schema + table properties instead.
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'Db2Table'.
     */
    type: "Db2Table";
}

/**
 * Delete activity.
 */
export interface DeleteActivityResponse {
    /**
     * Delete activity dataset reference.
     */
    dataset: DatasetReferenceResponse;
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * Whether to record detailed logs of delete-activity execution. Default value is false. Type: boolean (or Expression with resultType boolean).
     */
    enableLogging?: any;
    /**
     * Linked service reference.
     */
    linkedServiceName?: LinkedServiceReferenceResponse;
    /**
     * Log storage settings customer need to provide when enableLogging is true.
     */
    logStorageSettings?: LogStorageSettingsResponse;
    /**
     * The max concurrent connections to connect data source at the same time.
     */
    maxConcurrentConnections?: number;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity policy.
     */
    policy?: ActivityPolicyResponse;
    /**
     * If true, files or sub-folders under current folder path will be deleted recursively. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    recursive?: any;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Delete activity store settings.
     */
    storeSettings?: AmazonS3CompatibleReadSettingsResponse | AmazonS3ReadSettingsResponse | AzureBlobFSReadSettingsResponse | AzureBlobStorageReadSettingsResponse | AzureDataLakeStoreReadSettingsResponse | AzureFileStorageReadSettingsResponse | FileServerReadSettingsResponse | FtpReadSettingsResponse | GoogleCloudStorageReadSettingsResponse | HdfsReadSettingsResponse | HttpReadSettingsResponse | LakeHouseReadSettingsResponse | OracleCloudStorageReadSettingsResponse | SftpReadSettingsResponse;
    /**
     * Type of activity.
     * Expected value is 'Delete'.
     */
    type: "Delete";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * Delimited text dataset.
 */
export interface DelimitedTextDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * The column delimiter. Type: string (or Expression with resultType string).
     */
    columnDelimiter?: any;
    /**
     * The data compressionCodec. Type: string (or Expression with resultType string).
     */
    compressionCodec?: any;
    /**
     * The data compression method used for DelimitedText.
     */
    compressionLevel?: any;
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The code page name of the preferred encoding. If miss, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string).
     */
    encodingName?: any;
    /**
     * The escape character. Type: string (or Expression with resultType string).
     */
    escapeChar?: any;
    /**
     * When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean).
     */
    firstRowAsHeader?: any;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * The location of the delimited text storage.
     */
    location: AmazonS3CompatibleLocationResponse | AmazonS3LocationResponse | AzureBlobFSLocationResponse | AzureBlobStorageLocationResponse | AzureDataLakeStoreLocationResponse | AzureFileStorageLocationResponse | FileServerLocationResponse | FtpServerLocationResponse | GoogleCloudStorageLocationResponse | HdfsLocationResponse | HttpServerLocationResponse | LakeHouseLocationResponse | OracleCloudStorageLocationResponse | SftpLocationResponse;
    /**
     * The null value string. Type: string (or Expression with resultType string).
     */
    nullValue?: any;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The quote character. Type: string (or Expression with resultType string).
     */
    quoteChar?: any;
    /**
     * The row delimiter. Type: string (or Expression with resultType string).
     */
    rowDelimiter?: any;
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'DelimitedText'.
     */
    type: "DelimitedText";
}

/**
 * Delimited text read settings.
 */
export interface DelimitedTextReadSettingsResponse {
    /**
     * Compression settings.
     */
    compressionProperties?: TarGZipReadSettingsResponse | TarReadSettingsResponse | ZipDeflateReadSettingsResponse;
    /**
     * Indicates the number of non-empty rows to skip when reading data from input files. Type: integer (or Expression with resultType integer).
     */
    skipLineCount?: any;
    /**
     * The read setting type.
     * Expected value is 'DelimitedTextReadSettings'.
     */
    type: "DelimitedTextReadSettings";
}

/**
 * A copy activity DelimitedText sink.
 */
export interface DelimitedTextSinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * DelimitedText format settings.
     */
    formatSettings?: DelimitedTextWriteSettingsResponse;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * DelimitedText store settings.
     */
    storeSettings?: AzureBlobFSWriteSettingsResponse | AzureBlobStorageWriteSettingsResponse | AzureDataLakeStoreWriteSettingsResponse | AzureFileStorageWriteSettingsResponse | FileServerWriteSettingsResponse | LakeHouseWriteSettingsResponse | SftpWriteSettingsResponse;
    /**
     * Copy sink type.
     * Expected value is 'DelimitedTextSink'.
     */
    type: "DelimitedTextSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
}

/**
 * A copy activity DelimitedText source.
 */
export interface DelimitedTextSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * DelimitedText format settings.
     */
    formatSettings?: DelimitedTextReadSettingsResponse;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * DelimitedText store settings.
     */
    storeSettings?: AmazonS3CompatibleReadSettingsResponse | AmazonS3ReadSettingsResponse | AzureBlobFSReadSettingsResponse | AzureBlobStorageReadSettingsResponse | AzureDataLakeStoreReadSettingsResponse | AzureFileStorageReadSettingsResponse | FileServerReadSettingsResponse | FtpReadSettingsResponse | GoogleCloudStorageReadSettingsResponse | HdfsReadSettingsResponse | HttpReadSettingsResponse | LakeHouseReadSettingsResponse | OracleCloudStorageReadSettingsResponse | SftpReadSettingsResponse;
    /**
     * Copy source type.
     * Expected value is 'DelimitedTextSource'.
     */
    type: "DelimitedTextSource";
}

/**
 * Delimited text write settings.
 */
export interface DelimitedTextWriteSettingsResponse {
    /**
     * The file extension used to create the files. Type: string (or Expression with resultType string).
     */
    fileExtension: any;
    /**
     * Specifies the file name pattern <fileNamePrefix>_<fileIndex>.<fileExtension> when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string).
     */
    fileNamePrefix?: any;
    /**
     * Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer).
     */
    maxRowsPerFile?: any;
    /**
     * Indicates whether string values should always be enclosed with quotes. Type: boolean (or Expression with resultType boolean).
     */
    quoteAllText?: any;
    /**
     * The write setting type.
     * Expected value is 'DelimitedTextWriteSettings'.
     */
    type: "DelimitedTextWriteSettings";
}

/**
 * Distcp settings.
 */
export interface DistcpSettingsResponse {
    /**
     * Specifies the Distcp options. Type: string (or Expression with resultType string).
     */
    distcpOptions?: any;
    /**
     * Specifies the Yarn ResourceManager endpoint. Type: string (or Expression with resultType string).
     */
    resourceManagerEndpoint: any;
    /**
     * Specifies an existing folder path which will be used to store temp Distcp command script. The script file is generated by ADF and will be removed after Copy job finished. Type: string (or Expression with resultType string).
     */
    tempScriptPath: any;
}

/**
 * Microsoft Azure Document Database Collection dataset.
 */
export interface DocumentDbCollectionDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Document Database collection name. Type: string (or Expression with resultType string).
     */
    collectionName: any;
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'DocumentDbCollection'.
     */
    type: "DocumentDbCollection";
}

/**
 * A copy activity Document Database Collection sink.
 */
export interface DocumentDbCollectionSinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Nested properties separator. Default is . (dot). Type: string (or Expression with resultType string).
     */
    nestingSeparator?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'DocumentDbCollectionSink'.
     */
    type: "DocumentDbCollectionSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
    /**
     * Describes how to write data to Azure Cosmos DB. Type: string (or Expression with resultType string). Allowed values: insert and upsert.
     */
    writeBehavior?: any;
}

/**
 * A copy activity Document Database Collection source.
 */
export interface DocumentDbCollectionSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Nested properties separator. Type: string (or Expression with resultType string).
     */
    nestingSeparator?: any;
    /**
     * Documents query. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'DocumentDbCollectionSource'.
     */
    type: "DocumentDbCollectionSource";
}

/**
 * Drill server linked service.
 */
export interface DrillLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    pwd?: AzureKeyVaultSecretReferenceResponse;
    /**
     * Type of linked service.
     * Expected value is 'Drill'.
     */
    type: "Drill";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity Drill server source.
 */
export interface DrillSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'DrillSource'.
     */
    type: "DrillSource";
}

/**
 * Drill server dataset.
 */
export interface DrillTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name of the Drill. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * This property will be retired. Please consider using schema + table properties instead.
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'DrillTable'.
     */
    type: "DrillTable";
}

/**
 * Dynamics AX linked service.
 */
export interface DynamicsAXLinkedServiceResponse {
    /**
     * Specify the resource you are requesting authorization. Type: string (or Expression with resultType string).
     */
    aadResourceId: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Specify the application's client ID. Type: string (or Expression with resultType string).
     */
    servicePrincipalId: any;
    /**
     * Specify the application's key. Mark this field as a SecureString to store it securely in Data Factory, or reference a secret stored in Azure Key Vault. Type: string (or Expression with resultType string).
     */
    servicePrincipalKey: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Specify the tenant information (domain name or tenant ID) under which your application resides. Retrieve it by hovering the mouse in the top-right corner of the Azure portal. Type: string (or Expression with resultType string).
     */
    tenant: any;
    /**
     * Type of linked service.
     * Expected value is 'DynamicsAX'.
     */
    type: "DynamicsAX";
    /**
     * The Dynamics AX (or Dynamics 365 Finance and Operations) instance OData endpoint.
     */
    url: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The path of the Dynamics AX OData entity.
 */
export interface DynamicsAXResourceDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The path of the Dynamics AX OData entity. Type: string (or Expression with resultType string).
     */
    path: any;
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'DynamicsAXResource'.
     */
    type: "DynamicsAXResource";
}

/**
 * A copy activity Dynamics AX source.
 */
export interface DynamicsAXSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    httpRequestTimeout?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'DynamicsAXSource'.
     */
    type: "DynamicsAXSource";
}

/**
 * The Dynamics CRM entity dataset.
 */
export interface DynamicsCrmEntityDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The logical name of the entity. Type: string (or Expression with resultType string).
     */
    entityName?: any;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'DynamicsCrmEntity'.
     */
    type: "DynamicsCrmEntity";
}

/**
 * Dynamics CRM linked service.
 */
export interface DynamicsCrmLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The authentication type to connect to Dynamics CRM server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario, 'AADServicePrincipal' for Server-To-Server authentication in online scenario, 'Active Directory' for Dynamics on-premises with IFD. Type: string (or Expression with resultType string).
     */
    authenticationType: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The credential reference containing authentication information.
     */
    credential?: CredentialReferenceResponse;
    /**
     * The deployment type of the Dynamics CRM instance. 'Online' for Dynamics CRM Online and 'OnPremisesWithIfd' for Dynamics CRM on-premises with Ifd. Type: string (or Expression with resultType string).
     */
    deploymentType: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The Active Directory domain that will verify user credentials. Type: string (or Expression with resultType string).
     */
    domain?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The host name of the on-premises Dynamics CRM server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string).
     */
    hostName?: any;
    /**
     * The organization name of the Dynamics CRM instance. The property is required for on-prem and required for online when there are more than one Dynamics CRM instances associated with the user. Type: string (or Expression with resultType string).
     */
    organizationName?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Password to access the Dynamics CRM instance.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The port of on-premises Dynamics CRM server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    port?: any;
    /**
     * The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
     */
    servicePrincipalCredential?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
     */
    servicePrincipalCredentialType?: any;
    /**
     * The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string).
     */
    servicePrincipalId?: any;
    /**
     * The URL to the Microsoft Dynamics CRM server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string).
     */
    serviceUri?: any;
    /**
     * Type of linked service.
     * Expected value is 'DynamicsCrm'.
     */
    type: "DynamicsCrm";
    /**
     * User name to access the Dynamics CRM instance. Type: string (or Expression with resultType string).
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity Dynamics CRM sink.
 */
export interface DynamicsCrmSinkResponse {
    /**
     * The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string).
     */
    alternateKeyName?: any;
    /**
     * Controls the bypass of Dataverse custom business logic. Type: string (or Expression with resultType string). Type: string (or Expression with resultType string).
     */
    bypassBusinessLogicExecution?: any;
    /**
     * Controls the bypass of Power Automate flows. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    bypassPowerAutomateFlows?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The flag indicating whether to ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    ignoreNullValues?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'DynamicsCrmSink'.
     */
    type: "DynamicsCrmSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
    /**
     * The write behavior for the operation.
     */
    writeBehavior: string;
}

/**
 * A copy activity Dynamics CRM source.
 */
export interface DynamicsCrmSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * FetchXML is a proprietary query language that is used in Microsoft Dynamics CRM (online & on-premises). Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'DynamicsCrmSource'.
     */
    type: "DynamicsCrmSource";
}

/**
 * The Dynamics entity dataset.
 */
export interface DynamicsEntityDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The logical name of the entity. Type: string (or Expression with resultType string).
     */
    entityName?: any;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'DynamicsEntity'.
     */
    type: "DynamicsEntity";
}

/**
 * Dynamics linked service.
 */
export interface DynamicsLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The authentication type to connect to Dynamics server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario, 'AADServicePrincipal' for Server-To-Server authentication in online scenario, 'Active Directory' for Dynamics on-premises with IFD. Type: string (or Expression with resultType string).
     */
    authenticationType: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The credential reference containing authentication information.
     */
    credential?: CredentialReferenceResponse;
    /**
     * The deployment type of the Dynamics instance. 'Online' for Dynamics Online and 'OnPremisesWithIfd' for Dynamics on-premises with Ifd. Type: string (or Expression with resultType string).
     */
    deploymentType: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The Active Directory domain that will verify user credentials. Type: string (or Expression with resultType string).
     */
    domain?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The host name of the on-premises Dynamics server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string).
     */
    hostName?: any;
    /**
     * The organization name of the Dynamics instance. The property is required for on-prem and required for online when there are more than one Dynamics instances associated with the user. Type: string (or Expression with resultType string).
     */
    organizationName?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Password to access the Dynamics instance.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The port of on-premises Dynamics server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    port?: any;
    /**
     * The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
     */
    servicePrincipalCredential?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
     */
    servicePrincipalCredentialType?: any;
    /**
     * The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string).
     */
    servicePrincipalId?: any;
    /**
     * The URL to the Microsoft Dynamics server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string).
     */
    serviceUri?: any;
    /**
     * Type of linked service.
     * Expected value is 'Dynamics'.
     */
    type: "Dynamics";
    /**
     * User name to access the Dynamics instance. Type: string (or Expression with resultType string).
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity Dynamics sink.
 */
export interface DynamicsSinkResponse {
    /**
     * The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string).
     */
    alternateKeyName?: any;
    /**
     * Controls the bypass of Dataverse custom business logic. Type: string (or Expression with resultType string). Type: string (or Expression with resultType string).
     */
    bypassBusinessLogicExecution?: any;
    /**
     * Controls the bypass of Power Automate flows. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    bypassPowerAutomateFlows?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The flag indicating whether ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    ignoreNullValues?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'DynamicsSink'.
     */
    type: "DynamicsSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
    /**
     * The write behavior for the operation.
     */
    writeBehavior: string;
}

/**
 * A copy activity Dynamics source.
 */
export interface DynamicsSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * FetchXML is a proprietary query language that is used in Microsoft Dynamics (online & on-premises). Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'DynamicsSource'.
     */
    type: "DynamicsSource";
}

/**
 * Eloqua server linked service.
 */
export interface EloquaLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The endpoint of the Eloqua server. (i.e. eloqua.example.com)
     */
    endpoint: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The password corresponding to the user name.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Type of linked service.
     * Expected value is 'Eloqua'.
     */
    type: "Eloqua";
    /**
     * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
     */
    useEncryptedEndpoints?: any;
    /**
     * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
     */
    useHostVerification?: any;
    /**
     * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
     */
    usePeerVerification?: any;
    /**
     * The site name and user name of your Eloqua account in the form: sitename/username. (i.e. Eloqua/Alice)
     */
    username: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Eloqua server dataset.
 */
export interface EloquaObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'EloquaObject'.
     */
    type: "EloquaObject";
}

/**
 * A copy activity Eloqua server source.
 */
export interface EloquaSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'EloquaSource'.
     */
    type: "EloquaSource";
}

/**
 * Definition of CMK for the factory.
 */
export interface EncryptionConfigurationResponse {
    /**
     * User assigned identity to use to authenticate to customer's key vault. If not provided Managed Service Identity will be used.
     */
    identity?: CMKIdentityDefinitionResponse;
    /**
     * The name of the key in Azure Key Vault to use as Customer Managed Key.
     */
    keyName: string;
    /**
     * The version of the key used for CMK. If not provided, latest version will be used.
     */
    keyVersion?: string;
    /**
     * The url of the Azure Key Vault used for CMK.
     */
    vaultBaseUrl: string;
}

/**
 * The entity reference.
 */
export interface EntityReferenceResponse {
    /**
     * The name of this referenced entity.
     */
    referenceName?: string;
    /**
     * The type of this referenced entity.
     */
    type?: string;
}

/**
 * The custom setup of setting environment variable.
 */
export interface EnvironmentVariableSetupResponse {
    /**
     * The type of custom setup.
     * Expected value is 'EnvironmentVariableSetup'.
     */
    type: "EnvironmentVariableSetup";
    /**
     * The name of the environment variable.
     */
    variableName: string;
    /**
     * The value of the environment variable.
     */
    variableValue: string;
}

/**
 * Excel dataset.
 */
export interface ExcelDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * The data compression method used for the json dataset.
     */
    compression?: DatasetCompressionResponse;
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean).
     */
    firstRowAsHeader?: any;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * The location of the excel storage.
     */
    location: AmazonS3CompatibleLocationResponse | AmazonS3LocationResponse | AzureBlobFSLocationResponse | AzureBlobStorageLocationResponse | AzureDataLakeStoreLocationResponse | AzureFileStorageLocationResponse | FileServerLocationResponse | FtpServerLocationResponse | GoogleCloudStorageLocationResponse | HdfsLocationResponse | HttpServerLocationResponse | LakeHouseLocationResponse | OracleCloudStorageLocationResponse | SftpLocationResponse;
    /**
     * The null value string. Type: string (or Expression with resultType string).
     */
    nullValue?: any;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The partial data of one sheet. Type: string (or Expression with resultType string).
     */
    range?: any;
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * The sheet index of excel file and default value is 0. Type: integer (or Expression with resultType integer)
     */
    sheetIndex?: any;
    /**
     * The sheet name of excel file. Type: string (or Expression with resultType string).
     */
    sheetName?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'Excel'.
     */
    type: "Excel";
}

/**
 * A copy activity excel source.
 */
export interface ExcelSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Excel store settings.
     */
    storeSettings?: AmazonS3CompatibleReadSettingsResponse | AmazonS3ReadSettingsResponse | AzureBlobFSReadSettingsResponse | AzureBlobStorageReadSettingsResponse | AzureDataLakeStoreReadSettingsResponse | AzureFileStorageReadSettingsResponse | FileServerReadSettingsResponse | FtpReadSettingsResponse | GoogleCloudStorageReadSettingsResponse | HdfsReadSettingsResponse | HttpReadSettingsResponse | LakeHouseReadSettingsResponse | OracleCloudStorageReadSettingsResponse | SftpReadSettingsResponse;
    /**
     * Copy source type.
     * Expected value is 'ExcelSource'.
     */
    type: "ExcelSource";
}

/**
 * Execute data flow activity.
 */
export interface ExecuteDataFlowActivityResponse {
    /**
     * Compute properties for data flow activity.
     */
    compute?: ExecuteDataFlowActivityTypePropertiesResponseCompute;
    /**
     * Continuation settings for execute data flow activity.
     */
    continuationSettings?: ContinuationSettingsReferenceResponse;
    /**
     * Continue on error setting used for data flow execution. Enables processing to continue if a sink fails. Type: boolean (or Expression with resultType boolean)
     */
    continueOnError?: any;
    /**
     * Data flow reference.
     */
    dataFlow: DataFlowReferenceResponse;
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * The integration runtime reference.
     */
    integrationRuntime?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service reference.
     */
    linkedServiceName?: LinkedServiceReferenceResponse;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity policy.
     */
    policy?: ActivityPolicyResponse;
    /**
     * Concurrent run setting used for data flow execution. Allows sinks with the same save order to be processed concurrently. Type: boolean (or Expression with resultType boolean)
     */
    runConcurrently?: any;
    /**
     * Specify number of parallel staging for sources applicable to the sink. Type: integer (or Expression with resultType integer)
     */
    sourceStagingConcurrency?: any;
    /**
     * Staging info for execute data flow activity.
     */
    staging?: DataFlowStagingInfoResponse;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Trace level setting used for data flow monitoring output. Supported values are: 'coarse', 'fine', and 'none'. Type: string (or Expression with resultType string)
     */
    traceLevel?: any;
    /**
     * Type of activity.
     * Expected value is 'ExecuteDataFlow'.
     */
    type: "ExecuteDataFlow";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * Compute properties for data flow activity.
 */
export interface ExecuteDataFlowActivityTypePropertiesResponseCompute {
    /**
     * Compute type of the cluster which will execute data flow job. Possible values include: 'General', 'MemoryOptimized', 'ComputeOptimized'. Type: string (or Expression with resultType string)
     */
    computeType?: any;
    /**
     * Core count of the cluster which will execute data flow job. Supported values are: 8, 16, 32, 48, 80, 144 and 272. Type: integer (or Expression with resultType integer)
     */
    coreCount?: any;
}

/**
 * Execution policy for an execute pipeline activity.
 */
export interface ExecutePipelineActivityPolicyResponse {
    /**
     * When set to true, Input from activity is considered as secure and will not be logged to monitoring.
     */
    secureInput?: boolean;
}

/**
 * Execute pipeline activity.
 */
export interface ExecutePipelineActivityResponse {
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Pipeline parameters.
     */
    parameters?: {[key: string]: any};
    /**
     * Pipeline reference.
     */
    pipeline: PipelineReferenceResponse;
    /**
     * Execute pipeline activity policy.
     */
    policy?: ExecutePipelineActivityPolicyResponse;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Type of activity.
     * Expected value is 'ExecutePipeline'.
     */
    type: "ExecutePipeline";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
    /**
     * Defines whether activity execution will wait for the dependent pipeline execution to finish. Default is false.
     */
    waitOnCompletion?: boolean;
}

/**
 * Execute SSIS package activity.
 */
export interface ExecuteSSISPackageActivityResponse {
    /**
     * The integration runtime reference.
     */
    connectVia: IntegrationRuntimeReferenceResponse;
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * The environment path to execute the SSIS package. Type: string (or Expression with resultType string).
     */
    environmentPath?: any;
    /**
     * The package execution credential.
     */
    executionCredential?: SSISExecutionCredentialResponse;
    /**
     * Linked service reference.
     */
    linkedServiceName?: LinkedServiceReferenceResponse;
    /**
     * SSIS package execution log location.
     */
    logLocation?: SSISLogLocationResponse;
    /**
     * The logging level of SSIS package execution. Type: string (or Expression with resultType string).
     */
    loggingLevel?: any;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * The package level connection managers to execute the SSIS package.
     */
    packageConnectionManagers?: {[key: string]: {[key: string]: SSISExecutionParameterResponse}};
    /**
     * SSIS package location.
     */
    packageLocation: SSISPackageLocationResponse;
    /**
     * The package level parameters to execute the SSIS package.
     */
    packageParameters?: {[key: string]: SSISExecutionParameterResponse};
    /**
     * Activity policy.
     */
    policy?: ActivityPolicyResponse;
    /**
     * The project level connection managers to execute the SSIS package.
     */
    projectConnectionManagers?: {[key: string]: {[key: string]: SSISExecutionParameterResponse}};
    /**
     * The project level parameters to execute the SSIS package.
     */
    projectParameters?: {[key: string]: SSISExecutionParameterResponse};
    /**
     * The property overrides to execute the SSIS package.
     */
    propertyOverrides?: {[key: string]: SSISPropertyOverrideResponse};
    /**
     * Specifies the runtime to execute SSIS package. The value should be "x86" or "x64". Type: string (or Expression with resultType string).
     */
    runtime?: any;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Type of activity.
     * Expected value is 'ExecuteSSISPackage'.
     */
    type: "ExecuteSSISPackage";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * Execute power query activity.
 */
export interface ExecuteWranglingDataflowActivityResponse {
    /**
     * Compute properties for data flow activity.
     */
    compute?: ExecuteDataFlowActivityTypePropertiesResponseCompute;
    /**
     * Continuation settings for execute data flow activity.
     */
    continuationSettings?: ContinuationSettingsReferenceResponse;
    /**
     * Continue on error setting used for data flow execution. Enables processing to continue if a sink fails. Type: boolean (or Expression with resultType boolean)
     */
    continueOnError?: any;
    /**
     * Data flow reference.
     */
    dataFlow: DataFlowReferenceResponse;
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * The integration runtime reference.
     */
    integrationRuntime?: IntegrationRuntimeReferenceResponse;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity policy.
     */
    policy?: ActivityPolicyResponse;
    /**
     * List of mapping for Power Query mashup query to sink dataset(s).
     */
    queries?: PowerQuerySinkMappingResponse[];
    /**
     * Concurrent run setting used for data flow execution. Allows sinks with the same save order to be processed concurrently. Type: boolean (or Expression with resultType boolean)
     */
    runConcurrently?: any;
    /**
     * (Deprecated. Please use Queries). List of Power Query activity sinks mapped to a queryName.
     */
    sinks?: {[key: string]: PowerQuerySinkResponse};
    /**
     * Specify number of parallel staging for sources applicable to the sink. Type: integer (or Expression with resultType integer)
     */
    sourceStagingConcurrency?: any;
    /**
     * Staging info for execute data flow activity.
     */
    staging?: DataFlowStagingInfoResponse;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Trace level setting used for data flow monitoring output. Supported values are: 'coarse', 'fine', and 'none'. Type: string (or Expression with resultType string)
     */
    traceLevel?: any;
    /**
     * Type of activity.
     * Expected value is 'ExecuteWranglingDataflow'.
     */
    type: "ExecuteWranglingDataflow";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * Base class for all execution activities.
 */
export interface ExecutionActivityResponse {
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * Linked service reference.
     */
    linkedServiceName?: LinkedServiceReferenceResponse;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity policy.
     */
    policy?: ActivityPolicyResponse;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Type of activity.
     * Expected value is 'Execution'.
     */
    type: "Execution";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * Azure Data Factory expression definition.
 */
export interface ExpressionResponse {
    /**
     * Expression type.
     */
    type: string;
    /**
     * Expression value.
     */
    value: string;
}

/**
 * Nested representation of a complex expression.
 */
export interface ExpressionV2Response {
    /**
     * List of nested expressions.
     */
    operands?: ExpressionV2Response[];
    /**
     * Expression operator value Type: list of strings.
     */
    operators?: string[];
    /**
     * Type of expressions supported by the system. Type: string.
     */
    type?: string;
    /**
     * Value for Constant/Field Type: string.
     */
    value?: string;
}

/**
 * Factory's GitHub repo information.
 */
export interface FactoryGitHubConfigurationResponse {
    /**
     * Account name.
     */
    accountName: string;
    /**
     * GitHub bring your own app client id.
     */
    clientId?: string;
    /**
     * GitHub bring your own app client secret information.
     */
    clientSecret?: GitHubClientSecretResponse;
    /**
     * Collaboration branch.
     */
    collaborationBranch: string;
    /**
     * Disable manual publish operation in ADF studio to favor automated publish.
     */
    disablePublish?: boolean;
    /**
     * GitHub Enterprise host name. For example: `https://github.mydomain.com`
     */
    hostName?: string;
    /**
     * Last commit id.
     */
    lastCommitId?: string;
    /**
     * Repository name.
     */
    repositoryName: string;
    /**
     * Root folder.
     */
    rootFolder: string;
    /**
     * Type of repo configuration.
     * Expected value is 'FactoryGitHubConfiguration'.
     */
    type: "FactoryGitHubConfiguration";
}

/**
 * Identity properties of the factory resource.
 */
export interface FactoryIdentityResponse {
    /**
     * The principal id of the identity.
     */
    principalId: string;
    /**
     * The client tenant id of the identity.
     */
    tenantId: string;
    /**
     * The identity type.
     */
    type: string;
    /**
     * List of user assigned identities for the factory.
     */
    userAssignedIdentities?: {[key: string]: any};
}

/**
 * Factory's VSTS repo information.
 */
export interface FactoryVSTSConfigurationResponse {
    /**
     * Account name.
     */
    accountName: string;
    /**
     * Collaboration branch.
     */
    collaborationBranch: string;
    /**
     * Disable manual publish operation in ADF studio to favor automated publish.
     */
    disablePublish?: boolean;
    /**
     * Last commit id.
     */
    lastCommitId?: string;
    /**
     * VSTS project name.
     */
    projectName: string;
    /**
     * Repository name.
     */
    repositoryName: string;
    /**
     * Root folder.
     */
    rootFolder: string;
    /**
     * VSTS tenant id.
     */
    tenantId?: string;
    /**
     * Type of repo configuration.
     * Expected value is 'FactoryVSTSConfiguration'.
     */
    type: "FactoryVSTSConfiguration";
}

/**
 * This activity will fail within its own scope and output a custom error message and error code. The error message and code can provided either as a string literal or as an expression that can be evaluated to a string at runtime. The activity scope can be the whole pipeline or a control activity (e.g. foreach, switch, until), if the fail activity is contained in it.
 */
export interface FailActivityResponse {
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * The error code that categorizes the error type of the Fail activity. It can be dynamic content that's evaluated to a non empty/blank string at runtime. Type: string (or Expression with resultType string).
     */
    errorCode: any;
    /**
     * The error message that surfaced in the Fail activity. It can be dynamic content that's evaluated to a non empty/blank string at runtime. Type: string (or Expression with resultType string).
     */
    message: any;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Type of activity.
     * Expected value is 'Fail'.
     */
    type: "Fail";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * File system linked service.
 */
export interface FileServerLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Host name of the server. Type: string (or Expression with resultType string).
     */
    host: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Password to logon the server.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Type of linked service.
     * Expected value is 'FileServer'.
     */
    type: "FileServer";
    /**
     * User ID to logon the server. Type: string (or Expression with resultType string).
     */
    userId?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The location of file server dataset.
 */
export interface FileServerLocationResponse {
    /**
     * Specify the file name of dataset. Type: string (or Expression with resultType string).
     */
    fileName?: any;
    /**
     * Specify the folder path of dataset. Type: string (or Expression with resultType string)
     */
    folderPath?: any;
    /**
     * Type of dataset storage location.
     * Expected value is 'FileServerLocation'.
     */
    type: "FileServerLocation";
}

/**
 * File server read settings.
 */
export interface FileServerReadSettingsResponse {
    /**
     * Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    deleteFilesAfterCompletion?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Indicates whether to enable partition discovery. Type: boolean (or Expression with resultType boolean).
     */
    enablePartitionDiscovery?: any;
    /**
     * Specify a filter to be used to select a subset of files in the folderPath rather than all files. Type: string (or Expression with resultType string).
     */
    fileFilter?: any;
    /**
     * Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
     */
    fileListPath?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * The end of file's modified datetime. Type: string (or Expression with resultType string).
     */
    modifiedDatetimeEnd?: any;
    /**
     * The start of file's modified datetime. Type: string (or Expression with resultType string).
     */
    modifiedDatetimeStart?: any;
    /**
     * Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
     */
    partitionRootPath?: any;
    /**
     * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
     */
    recursive?: any;
    /**
     * The read setting type.
     * Expected value is 'FileServerReadSettings'.
     */
    type: "FileServerReadSettings";
    /**
     * FileServer wildcardFileName. Type: string (or Expression with resultType string).
     */
    wildcardFileName?: any;
    /**
     * FileServer wildcardFolderPath. Type: string (or Expression with resultType string).
     */
    wildcardFolderPath?: any;
}

/**
 * File server write settings.
 */
export interface FileServerWriteSettingsResponse {
    /**
     * The type of copy behavior for copy sink.
     */
    copyBehavior?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Specify the custom metadata to be added to sink data. Type: array of objects (or Expression with resultType array of objects).
     */
    metadata?: MetadataItemResponse[];
    /**
     * The write setting type.
     * Expected value is 'FileServerWriteSettings'.
     */
    type: "FileServerWriteSettings";
}

/**
 * An on-premises file system dataset.
 */
export interface FileShareDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * The data compression method used for the file system.
     */
    compression?: DatasetCompressionResponse;
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * Specify a filter to be used to select a subset of files in the folderPath rather than all files. Type: string (or Expression with resultType string).
     */
    fileFilter?: any;
    /**
     * The name of the on-premises file system. Type: string (or Expression with resultType string).
     */
    fileName?: any;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * The path of the on-premises file system. Type: string (or Expression with resultType string).
     */
    folderPath?: any;
    /**
     * The format of the files.
     */
    format?: AvroFormatResponse | JsonFormatResponse | OrcFormatResponse | ParquetFormatResponse | TextFormatResponse;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * The end of file's modified datetime. Type: string (or Expression with resultType string).
     */
    modifiedDatetimeEnd?: any;
    /**
     * The start of file's modified datetime. Type: string (or Expression with resultType string).
     */
    modifiedDatetimeStart?: any;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'FileShare'.
     */
    type: "FileShare";
}

/**
 * A copy activity file system sink.
 */
export interface FileSystemSinkResponse {
    /**
     * The type of copy behavior for copy sink.
     */
    copyBehavior?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'FileSystemSink'.
     */
    type: "FileSystemSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
}

/**
 * A copy activity file system source.
 */
export interface FileSystemSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
     */
    recursive?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'FileSystemSource'.
     */
    type: "FileSystemSource";
}

/**
 * Filter and return results from input array based on the conditions.
 */
export interface FilterActivityResponse {
    /**
     * Condition to be used for filtering the input.
     */
    condition: ExpressionResponse;
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * Input array on which filter should be applied.
     */
    items: ExpressionResponse;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Type of activity.
     * Expected value is 'Filter'.
     */
    type: "Filter";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * Data flow flowlet
 */
export interface FlowletResponse {
    /**
     * List of tags that can be used for describing the data flow.
     */
    annotations?: any[];
    /**
     * The description of the data flow.
     */
    description?: string;
    /**
     * The folder that this data flow is in. If not specified, Data flow will appear at the root level.
     */
    folder?: DataFlowResponseFolder;
    /**
     * Flowlet script.
     */
    script?: string;
    /**
     * Flowlet script lines.
     */
    scriptLines?: string[];
    /**
     * List of sinks in Flowlet.
     */
    sinks?: DataFlowSinkResponse[];
    /**
     * List of sources in Flowlet.
     */
    sources?: DataFlowSourceResponse[];
    /**
     * List of transformations in Flowlet.
     */
    transformations?: TransformationResponse[];
    /**
     * Type of data flow.
     * Expected value is 'Flowlet'.
     */
    type: "Flowlet";
}

/**
 * This activity is used for iterating over a collection and execute given activities.
 */
export interface ForEachActivityResponse {
    /**
     * List of activities to execute .
     */
    activities: (AppendVariableActivityResponse | AzureDataExplorerCommandActivityResponse | AzureFunctionActivityResponse | AzureMLBatchExecutionActivityResponse | AzureMLExecutePipelineActivityResponse | AzureMLUpdateResourceActivityResponse | ControlActivityResponse | CopyActivityResponse | CustomActivityResponse | DataLakeAnalyticsUSQLActivityResponse | DatabricksNotebookActivityResponse | DatabricksSparkJarActivityResponse | DatabricksSparkPythonActivityResponse | DeleteActivityResponse | ExecuteDataFlowActivityResponse | ExecutePipelineActivityResponse | ExecuteSSISPackageActivityResponse | ExecuteWranglingDataflowActivityResponse | ExecutionActivityResponse | FailActivityResponse | FilterActivityResponse | ForEachActivityResponse | GetMetadataActivityResponse | HDInsightHiveActivityResponse | HDInsightMapReduceActivityResponse | HDInsightPigActivityResponse | HDInsightSparkActivityResponse | HDInsightStreamingActivityResponse | IfConditionActivityResponse | LookupActivityResponse | ScriptActivityResponse | SetVariableActivityResponse | SqlServerStoredProcedureActivityResponse | SwitchActivityResponse | SynapseNotebookActivityResponse | SynapseSparkJobDefinitionActivityResponse | UntilActivityResponse | ValidationActivityResponse | WaitActivityResponse | WebActivityResponse | WebHookActivityResponse)[];
    /**
     * Batch count to be used for controlling the number of parallel execution (when isSequential is set to false).
     */
    batchCount?: number;
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * Should the loop be executed in sequence or in parallel (max 50)
     */
    isSequential?: boolean;
    /**
     * Collection to iterate.
     */
    items: ExpressionResponse;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Type of activity.
     * Expected value is 'ForEach'.
     */
    type: "ForEach";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * Ftp read settings.
 */
export interface FtpReadSettingsResponse {
    /**
     * Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    deleteFilesAfterCompletion?: any;
    /**
     * If true, disable parallel reading within each file. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableChunking?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Indicates whether to enable partition discovery. Type: boolean (or Expression with resultType boolean).
     */
    enablePartitionDiscovery?: any;
    /**
     * Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
     */
    fileListPath?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
     */
    partitionRootPath?: any;
    /**
     * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
     */
    recursive?: any;
    /**
     * The read setting type.
     * Expected value is 'FtpReadSettings'.
     */
    type: "FtpReadSettings";
    /**
     * Specify whether to use binary transfer mode for FTP stores. Type: boolean (or Expression with resultType boolean).
     */
    useBinaryTransfer?: any;
    /**
     * Ftp wildcardFileName. Type: string (or Expression with resultType string).
     */
    wildcardFileName?: any;
    /**
     * Ftp wildcardFolderPath. Type: string (or Expression with resultType string).
     */
    wildcardFolderPath?: any;
}

/**
 * A FTP server Linked Service.
 */
export interface FtpServerLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The authentication type to be used to connect to the FTP server.
     */
    authenticationType?: string;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * If true, validate the FTP server SSL certificate when connect over SSL/TLS channel. Default value is true. Type: boolean (or Expression with resultType boolean).
     */
    enableServerCertificateValidation?: any;
    /**
     * If true, connect to the FTP server over SSL/TLS channel. Default value is true. Type: boolean (or Expression with resultType boolean).
     */
    enableSsl?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Host name of the FTP server. Type: string (or Expression with resultType string).
     */
    host: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Password to logon the FTP server.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The TCP port number that the FTP server uses to listen for client connections. Default value is 21. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    port?: any;
    /**
     * Type of linked service.
     * Expected value is 'FtpServer'.
     */
    type: "FtpServer";
    /**
     * Username to logon the FTP server. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The location of ftp server dataset.
 */
export interface FtpServerLocationResponse {
    /**
     * Specify the file name of dataset. Type: string (or Expression with resultType string).
     */
    fileName?: any;
    /**
     * Specify the folder path of dataset. Type: string (or Expression with resultType string)
     */
    folderPath?: any;
    /**
     * Type of dataset storage location.
     * Expected value is 'FtpServerLocation'.
     */
    type: "FtpServerLocation";
}

/**
 * Activity to get metadata of dataset
 */
export interface GetMetadataActivityResponse {
    /**
     * GetMetadata activity dataset reference.
     */
    dataset: DatasetReferenceResponse;
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * Fields of metadata to get from dataset.
     */
    fieldList?: any[];
    /**
     * GetMetadata activity format settings.
     */
    formatSettings?: BinaryReadSettingsResponse | DelimitedTextReadSettingsResponse | JsonReadSettingsResponse | ParquetReadSettingsResponse | XmlReadSettingsResponse;
    /**
     * Linked service reference.
     */
    linkedServiceName?: LinkedServiceReferenceResponse;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity policy.
     */
    policy?: ActivityPolicyResponse;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * GetMetadata activity store settings.
     */
    storeSettings?: AmazonS3CompatibleReadSettingsResponse | AmazonS3ReadSettingsResponse | AzureBlobFSReadSettingsResponse | AzureBlobStorageReadSettingsResponse | AzureDataLakeStoreReadSettingsResponse | AzureFileStorageReadSettingsResponse | FileServerReadSettingsResponse | FtpReadSettingsResponse | GoogleCloudStorageReadSettingsResponse | HdfsReadSettingsResponse | HttpReadSettingsResponse | LakeHouseReadSettingsResponse | OracleCloudStorageReadSettingsResponse | SftpReadSettingsResponse;
    /**
     * Type of activity.
     * Expected value is 'GetMetadata'.
     */
    type: "GetMetadata";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * Client secret information for factory's bring your own app repository configuration.
 */
export interface GitHubClientSecretResponse {
    /**
     * Bring your own app client secret AKV URL.
     */
    byoaSecretAkvUrl?: string;
    /**
     * Bring your own app client secret name in AKV.
     */
    byoaSecretName?: string;
}

/**
 * Definition of a single parameter for an entity.
 */
export interface GlobalParameterSpecificationResponse {
    /**
     * Global Parameter type.
     */
    type: string;
    /**
     * Value of parameter.
     */
    value: any;
}

/**
 * Google AdWords service linked service.
 */
export interface GoogleAdWordsLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR.
     */
    authenticationType?: string;
    /**
     * The Client customer ID of the AdWords account that you want to fetch report data for. Type: string (or Expression with resultType string).
     */
    clientCustomerID?: any;
    /**
     * The client id of the google application used to acquire the refresh token. Type: string (or Expression with resultType string).
     */
    clientId?: any;
    /**
     * The client secret of the google application used to acquire the refresh token.
     */
    clientSecret?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * (Deprecated) Properties used to connect to GoogleAds. It is mutually exclusive with any other properties in the linked service. Type: object.
     */
    connectionProperties?: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The developer token associated with the manager account that you use to grant access to the AdWords API.
     */
    developerToken?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The service account email ID that is used for ServiceAuthentication and can only be used on self-hosted IR. Type: string (or Expression with resultType string).
     */
    email?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The Google Ads API major version such as v14. The supported major versions could be found on https://developers.google.com/google-ads/api/docs/release-notes. Type: string (or Expression with resultType string).
     */
    googleAdsApiVersion?: any;
    /**
     * (Deprecated) The full path to the .p12 key file that is used to authenticate the service account email address and can only be used on self-hosted IR. Type: string (or Expression with resultType string).
     */
    keyFilePath?: any;
    /**
     * The customer ID of the Google Ads Manager account through which you want to fetch report data of specific Customer. Type: string (or Expression with resultType string).
     */
    loginCustomerID?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The private key that is used to authenticate the service account email address and can only be used on self-hosted IR.
     */
    privateKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The refresh token obtained from Google for authorizing access to AdWords for UserAuthentication.
     */
    refreshToken?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Specifies whether to use the legacy data type mappings, which maps float, int32 and int64 from Google to string. Do not set this to true unless you want to keep backward compatibility with legacy driver's data type mappings. Type: boolean (or Expression with resultType boolean).
     */
    supportLegacyDataTypes?: any;
    /**
     * (Deprecated) The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. Type: string (or Expression with resultType string).
     */
    trustedCertPath?: any;
    /**
     * Type of linked service.
     * Expected value is 'GoogleAdWords'.
     */
    type: "GoogleAdWords";
    /**
     * (Deprecated) Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. Type: boolean (or Expression with resultType boolean).
     */
    useSystemTrustStore?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Google AdWords service dataset.
 */
export interface GoogleAdWordsObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'GoogleAdWordsObject'.
     */
    type: "GoogleAdWordsObject";
}

/**
 * A copy activity Google AdWords service source.
 */
export interface GoogleAdWordsSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'GoogleAdWordsSource'.
     */
    type: "GoogleAdWordsSource";
}

/**
 * Google BigQuery service linked service.
 */
export interface GoogleBigQueryLinkedServiceResponse {
    /**
     * A comma-separated list of public BigQuery projects to access. Type: string (or Expression with resultType string).
     */
    additionalProjects?: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR.
     */
    authenticationType: string;
    /**
     * The client id of the google application used to acquire the refresh token. Type: string (or Expression with resultType string).
     */
    clientId?: any;
    /**
     * The client secret of the google application used to acquire the refresh token.
     */
    clientSecret?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The service account email ID that is used for ServiceAuthentication and can only be used on self-hosted IR. Type: string (or Expression with resultType string).
     */
    email?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The full path to the .p12 key file that is used to authenticate the service account email address and can only be used on self-hosted IR. Type: string (or Expression with resultType string).
     */
    keyFilePath?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The default BigQuery project to query against. Type: string (or Expression with resultType string).
     */
    project: any;
    /**
     * The refresh token obtained from Google for authorizing access to BigQuery for UserAuthentication.
     */
    refreshToken?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Whether to request access to Google Drive. Allowing Google Drive access enables support for federated tables that combine BigQuery data with data from Google Drive. The default value is false. Type: string (or Expression with resultType string).
     */
    requestGoogleDriveScope?: any;
    /**
     * The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. Type: string (or Expression with resultType string).
     */
    trustedCertPath?: any;
    /**
     * Type of linked service.
     * Expected value is 'GoogleBigQuery'.
     */
    type: "GoogleBigQuery";
    /**
     * Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.Type: boolean (or Expression with resultType boolean).
     */
    useSystemTrustStore?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Google BigQuery service dataset.
 */
export interface GoogleBigQueryObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * The database name of the Google BigQuery. Type: string (or Expression with resultType string).
     */
    dataset?: any;
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name of the Google BigQuery. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * This property will be retired. Please consider using database + table properties instead.
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'GoogleBigQueryObject'.
     */
    type: "GoogleBigQueryObject";
}

/**
 * A copy activity Google BigQuery service source.
 */
export interface GoogleBigQuerySourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'GoogleBigQuerySource'.
     */
    type: "GoogleBigQuerySource";
}

/**
 * Google BigQuery service linked service.
 */
export interface GoogleBigQueryV2LinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The OAuth 2.0 authentication mechanism used for authentication.
     */
    authenticationType: string;
    /**
     * The client id of the google application used to acquire the refresh token. Type: string (or Expression with resultType string).
     */
    clientId?: any;
    /**
     * The client secret of the google application used to acquire the refresh token.
     */
    clientSecret?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The content of the .json key file that is used to authenticate the service account. Type: string (or Expression with resultType string).
     */
    keyFileContent?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The default BigQuery project id to query against. Type: string (or Expression with resultType string).
     */
    projectId: any;
    /**
     * The refresh token obtained from Google for authorizing access to BigQuery for UserAuthentication.
     */
    refreshToken?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Type of linked service.
     * Expected value is 'GoogleBigQueryV2'.
     */
    type: "GoogleBigQueryV2";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Google BigQuery service dataset.
 */
export interface GoogleBigQueryV2ObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * The database name of the Google BigQuery. Type: string (or Expression with resultType string).
     */
    dataset?: any;
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name of the Google BigQuery. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * Type of dataset.
     * Expected value is 'GoogleBigQueryV2Object'.
     */
    type: "GoogleBigQueryV2Object";
}

/**
 * A copy activity Google BigQuery service source.
 */
export interface GoogleBigQueryV2SourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'GoogleBigQueryV2Source'.
     */
    type: "GoogleBigQueryV2Source";
}

/**
 * Linked service for Google Cloud Storage.
 */
export interface GoogleCloudStorageLinkedServiceResponse {
    /**
     * The access key identifier of the Google Cloud Storage Identity and Access Management (IAM) user. Type: string (or Expression with resultType string).
     */
    accessKeyId?: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The secret access key of the Google Cloud Storage Identity and Access Management (IAM) user.
     */
    secretAccessKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * This value specifies the endpoint to access with the Google Cloud Storage Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string).
     */
    serviceUrl?: any;
    /**
     * Type of linked service.
     * Expected value is 'GoogleCloudStorage'.
     */
    type: "GoogleCloudStorage";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The location of Google Cloud Storage dataset.
 */
export interface GoogleCloudStorageLocationResponse {
    /**
     * Specify the bucketName of Google Cloud Storage. Type: string (or Expression with resultType string)
     */
    bucketName?: any;
    /**
     * Specify the file name of dataset. Type: string (or Expression with resultType string).
     */
    fileName?: any;
    /**
     * Specify the folder path of dataset. Type: string (or Expression with resultType string)
     */
    folderPath?: any;
    /**
     * Type of dataset storage location.
     * Expected value is 'GoogleCloudStorageLocation'.
     */
    type: "GoogleCloudStorageLocation";
    /**
     * Specify the version of Google Cloud Storage. Type: string (or Expression with resultType string).
     */
    version?: any;
}

/**
 * Google Cloud Storage read settings.
 */
export interface GoogleCloudStorageReadSettingsResponse {
    /**
     * Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    deleteFilesAfterCompletion?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Indicates whether to enable partition discovery. Type: boolean (or Expression with resultType boolean).
     */
    enablePartitionDiscovery?: any;
    /**
     * Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
     */
    fileListPath?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * The end of file's modified datetime. Type: string (or Expression with resultType string).
     */
    modifiedDatetimeEnd?: any;
    /**
     * The start of file's modified datetime. Type: string (or Expression with resultType string).
     */
    modifiedDatetimeStart?: any;
    /**
     * Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
     */
    partitionRootPath?: any;
    /**
     * The prefix filter for the Google Cloud Storage object name. Type: string (or Expression with resultType string).
     */
    prefix?: any;
    /**
     * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
     */
    recursive?: any;
    /**
     * The read setting type.
     * Expected value is 'GoogleCloudStorageReadSettings'.
     */
    type: "GoogleCloudStorageReadSettings";
    /**
     * Google Cloud Storage wildcardFileName. Type: string (or Expression with resultType string).
     */
    wildcardFileName?: any;
    /**
     * Google Cloud Storage wildcardFolderPath. Type: string (or Expression with resultType string).
     */
    wildcardFolderPath?: any;
}

/**
 * Linked service for GoogleSheets.
 */
export interface GoogleSheetsLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The api token for the GoogleSheets source.
     */
    apiToken: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Type of linked service.
     * Expected value is 'GoogleSheets'.
     */
    type: "GoogleSheets";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Greenplum Database linked service.
 */
export interface GreenplumLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The authentication type to use. Type: string. Only used for V2.
     */
    authenticationType?: string;
    /**
     * The time to wait (in seconds) while trying to execute a command before terminating the attempt and generating an error. Set to zero for infinity. Type: integer. Only used for V2.
     */
    commandTimeout?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * The time to wait (in seconds) while trying to establish a connection before terminating the attempt and generating an error. Type: integer. Only used for V2.
     */
    connectionTimeout?: any;
    /**
     * Database name for connection. Type: string. Only used for V2.
     */
    database?: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Host name for connection. Type: string. Only used for V2.
     */
    host?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The port for the connection. Type: integer. Only used for V2.
     */
    port?: any;
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    pwd?: AzureKeyVaultSecretReferenceResponse;
    /**
     * SSL mode for connection. Type: integer. 0: disable, 1:allow, 2: prefer, 3: require, 4: verify-ca, 5: verify-full. Type: integer. Only used for V2.
     */
    sslMode?: any;
    /**
     * Type of linked service.
     * Expected value is 'Greenplum'.
     */
    type: "Greenplum";
    /**
     * Username for authentication. Type: string. Only used for V2.
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity Greenplum Database source.
 */
export interface GreenplumSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'GreenplumSource'.
     */
    type: "GreenplumSource";
}

/**
 * Greenplum Database dataset.
 */
export interface GreenplumTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name of Greenplum. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * This property will be retired. Please consider using schema + table properties instead.
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'GreenplumTable'.
     */
    type: "GreenplumTable";
}

/**
 * HBase server linked service.
 */
export interface HBaseLinkedServiceResponse {
    /**
     * Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
     */
    allowHostNameCNMismatch?: any;
    /**
     * Specifies whether to allow self-signed certificates from the server. The default value is false.
     */
    allowSelfSignedServerCert?: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The authentication mechanism to use to connect to the HBase server.
     */
    authenticationType: string;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * Specifies whether the connections to the server are encrypted using SSL. The default value is false.
     */
    enableSsl?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The IP address or host name of the HBase server. (i.e. 192.168.222.160)
     */
    host: any;
    /**
     * The partial URL corresponding to the HBase server. (i.e. /gateway/sandbox/hbase/version)
     */
    httpPath?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The password corresponding to the user name.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The TCP port that the HBase instance uses to listen for client connections. The default value is 9090.
     */
    port?: any;
    /**
     * The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
     */
    trustedCertPath?: any;
    /**
     * Type of linked service.
     * Expected value is 'HBase'.
     */
    type: "HBase";
    /**
     * The user name used to connect to the HBase instance.
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * HBase server dataset.
 */
export interface HBaseObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'HBaseObject'.
     */
    type: "HBaseObject";
}

/**
 * A copy activity HBase server source.
 */
export interface HBaseSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'HBaseSource'.
     */
    type: "HBaseSource";
}

/**
 * HDInsight Hive activity type.
 */
export interface HDInsightHiveActivityResponse {
    /**
     * User specified arguments to HDInsightActivity.
     */
    arguments?: any[];
    /**
     * Allows user to specify defines for Hive job request.
     */
    defines?: {[key: string]: any};
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * Debug info option.
     */
    getDebugInfo?: string;
    /**
     * Linked service reference.
     */
    linkedServiceName?: LinkedServiceReferenceResponse;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity policy.
     */
    policy?: ActivityPolicyResponse;
    /**
     * Query timeout value (in minutes).  Effective when the HDInsight cluster is with ESP (Enterprise Security Package)
     */
    queryTimeout?: number;
    /**
     * Script linked service reference.
     */
    scriptLinkedService?: LinkedServiceReferenceResponse;
    /**
     * Script path. Type: string (or Expression with resultType string).
     */
    scriptPath?: any;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Storage linked service references.
     */
    storageLinkedServices?: LinkedServiceReferenceResponse[];
    /**
     * Type of activity.
     * Expected value is 'HDInsightHive'.
     */
    type: "HDInsightHive";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
    /**
     * User specified arguments under hivevar namespace.
     */
    variables?: {[key: string]: any};
}

/**
 * HDInsight linked service.
 */
export interface HDInsightLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * HDInsight cluster URI. Type: string (or Expression with resultType string).
     */
    clusterUri: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Specify the FileSystem if the main storage for the HDInsight is ADLS Gen2. Type: string (or Expression with resultType string).
     */
    fileSystem?: any;
    /**
     * A reference to the Azure SQL linked service that points to the HCatalog database.
     */
    hcatalogLinkedServiceName?: LinkedServiceReferenceResponse;
    /**
     * Specify if the HDInsight is created with ESP (Enterprise Security Package). Type: Boolean.
     */
    isEspEnabled?: any;
    /**
     * The Azure Storage linked service reference.
     */
    linkedServiceName?: LinkedServiceReferenceResponse;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * HDInsight cluster password.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Type of linked service.
     * Expected value is 'HDInsight'.
     */
    type: "HDInsight";
    /**
     * HDInsight cluster user name. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * HDInsight MapReduce activity type.
 */
export interface HDInsightMapReduceActivityResponse {
    /**
     * User specified arguments to HDInsightActivity.
     */
    arguments?: any[];
    /**
     * Class name. Type: string (or Expression with resultType string).
     */
    className: any;
    /**
     * Allows user to specify defines for the MapReduce job request.
     */
    defines?: {[key: string]: any};
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * Debug info option.
     */
    getDebugInfo?: string;
    /**
     * Jar path. Type: string (or Expression with resultType string).
     */
    jarFilePath: any;
    /**
     * Jar libs.
     */
    jarLibs?: any[];
    /**
     * Jar linked service reference.
     */
    jarLinkedService?: LinkedServiceReferenceResponse;
    /**
     * Linked service reference.
     */
    linkedServiceName?: LinkedServiceReferenceResponse;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity policy.
     */
    policy?: ActivityPolicyResponse;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Storage linked service references.
     */
    storageLinkedServices?: LinkedServiceReferenceResponse[];
    /**
     * Type of activity.
     * Expected value is 'HDInsightMapReduce'.
     */
    type: "HDInsightMapReduce";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * HDInsight ondemand linked service.
 */
export interface HDInsightOnDemandLinkedServiceResponse {
    /**
     * Specifies additional storage accounts for the HDInsight linked service so that the Data Factory service can register them on your behalf.
     */
    additionalLinkedServiceNames?: LinkedServiceReferenceResponse[];
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The prefix of cluster name, postfix will be distinct with timestamp. Type: string (or Expression with resultType string).
     */
    clusterNamePrefix?: any;
    /**
     * The password to access the cluster.
     */
    clusterPassword?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The resource group where the cluster belongs. Type: string (or Expression with resultType string).
     */
    clusterResourceGroup: any;
    /**
     * Number of worker/data nodes in the cluster. Suggestion value: 4. Type: int (or Expression with resultType int).
     */
    clusterSize: any;
    /**
     * The password to SSH remotely connect cluster’s node (for Linux).
     */
    clusterSshPassword?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The username to SSH remotely connect to cluster’s node (for Linux). Type: string (or Expression with resultType string).
     */
    clusterSshUserName?: any;
    /**
     * The cluster type. Type: string (or Expression with resultType string).
     */
    clusterType?: any;
    /**
     * The username to access the cluster. Type: string (or Expression with resultType string).
     */
    clusterUserName?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Specifies the core configuration parameters (as in core-site.xml) for the HDInsight cluster to be created.
     */
    coreConfiguration?: any;
    /**
     * The credential reference containing authentication information.
     */
    credential?: CredentialReferenceResponse;
    /**
     * Specifies the size of the data node for the HDInsight cluster.
     */
    dataNodeSize?: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Specifies the HBase configuration parameters (hbase-site.xml) for the HDInsight cluster.
     */
    hBaseConfiguration?: any;
    /**
     * The name of Azure SQL linked service that point to the HCatalog database. The on-demand HDInsight cluster is created by using the Azure SQL database as the metastore.
     */
    hcatalogLinkedServiceName?: LinkedServiceReferenceResponse;
    /**
     * Specifies the HDFS configuration parameters (hdfs-site.xml) for the HDInsight cluster.
     */
    hdfsConfiguration?: any;
    /**
     * Specifies the size of the head node for the HDInsight cluster.
     */
    headNodeSize?: any;
    /**
     * Specifies the hive configuration parameters (hive-site.xml) for the HDInsight cluster.
     */
    hiveConfiguration?: any;
    /**
     * The customer’s subscription to host the cluster. Type: string (or Expression with resultType string).
     */
    hostSubscriptionId: any;
    /**
     * Azure Storage linked service to be used by the on-demand cluster for storing and processing data.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Specifies the MapReduce configuration parameters (mapred-site.xml) for the HDInsight cluster.
     */
    mapReduceConfiguration?: any;
    /**
     * Specifies the Oozie configuration parameters (oozie-site.xml) for the HDInsight cluster.
     */
    oozieConfiguration?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Custom script actions to run on HDI ondemand cluster once it's up. Please refer to https://docs.microsoft.com/en-us/azure/hdinsight/hdinsight-hadoop-customize-cluster-linux?toc=%2Fen-us%2Fazure%2Fhdinsight%2Fr-server%2FTOC.json&bc=%2Fen-us%2Fazure%2Fbread%2Ftoc.json#understanding-script-actions.
     */
    scriptActions?: ScriptActionResponse[];
    /**
     * The service principal id for the hostSubscriptionId. Type: string (or Expression with resultType string).
     */
    servicePrincipalId?: any;
    /**
     * The key for the service principal id.
     */
    servicePrincipalKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The version of spark if the cluster type is 'spark'. Type: string (or Expression with resultType string).
     */
    sparkVersion?: any;
    /**
     * Specifies the Storm configuration parameters (storm-site.xml) for the HDInsight cluster.
     */
    stormConfiguration?: any;
    /**
     * The ARM resource ID for the subnet in the vNet. If virtualNetworkId was specified, then this property is required. Type: string (or Expression with resultType string).
     */
    subnetName?: any;
    /**
     * The Tenant id/name to which the service principal belongs. Type: string (or Expression with resultType string).
     */
    tenant: any;
    /**
     * The allowed idle time for the on-demand HDInsight cluster. Specifies how long the on-demand HDInsight cluster stays alive after completion of an activity run if there are no other active jobs in the cluster. The minimum value is 5 mins. Type: string (or Expression with resultType string).
     */
    timeToLive: any;
    /**
     * Type of linked service.
     * Expected value is 'HDInsightOnDemand'.
     */
    type: "HDInsightOnDemand";
    /**
     * Version of the linked service.
     */
    version: string;
    /**
     * The ARM resource ID for the vNet to which the cluster should be joined after creation. Type: string (or Expression with resultType string).
     */
    virtualNetworkId?: any;
    /**
     * Specifies the Yarn configuration parameters (yarn-site.xml) for the HDInsight cluster.
     */
    yarnConfiguration?: any;
    /**
     * Specifies the size of the Zoo Keeper node for the HDInsight cluster.
     */
    zookeeperNodeSize?: any;
}

/**
 * HDInsight Pig activity type.
 */
export interface HDInsightPigActivityResponse {
    /**
     * User specified arguments to HDInsightActivity. Type: array (or Expression with resultType array).
     */
    arguments?: any;
    /**
     * Allows user to specify defines for Pig job request.
     */
    defines?: {[key: string]: any};
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * Debug info option.
     */
    getDebugInfo?: string;
    /**
     * Linked service reference.
     */
    linkedServiceName?: LinkedServiceReferenceResponse;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity policy.
     */
    policy?: ActivityPolicyResponse;
    /**
     * Script linked service reference.
     */
    scriptLinkedService?: LinkedServiceReferenceResponse;
    /**
     * Script path. Type: string (or Expression with resultType string).
     */
    scriptPath?: any;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Storage linked service references.
     */
    storageLinkedServices?: LinkedServiceReferenceResponse[];
    /**
     * Type of activity.
     * Expected value is 'HDInsightPig'.
     */
    type: "HDInsightPig";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * HDInsight Spark activity.
 */
export interface HDInsightSparkActivityResponse {
    /**
     * The user-specified arguments to HDInsightSparkActivity.
     */
    arguments?: any[];
    /**
     * The application's Java/Spark main class.
     */
    className?: string;
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * The relative path to the root folder of the code/package to be executed. Type: string (or Expression with resultType string).
     */
    entryFilePath: any;
    /**
     * Debug info option.
     */
    getDebugInfo?: string;
    /**
     * Linked service reference.
     */
    linkedServiceName?: LinkedServiceReferenceResponse;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity policy.
     */
    policy?: ActivityPolicyResponse;
    /**
     * The user to impersonate that will execute the job. Type: string (or Expression with resultType string).
     */
    proxyUser?: any;
    /**
     * The root path in 'sparkJobLinkedService' for all the job’s files. Type: string (or Expression with resultType string).
     */
    rootPath: any;
    /**
     * Spark configuration property.
     */
    sparkConfig?: {[key: string]: any};
    /**
     * The storage linked service for uploading the entry file and dependencies, and for receiving logs.
     */
    sparkJobLinkedService?: LinkedServiceReferenceResponse;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Type of activity.
     * Expected value is 'HDInsightSpark'.
     */
    type: "HDInsightSpark";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * HDInsight streaming activity type.
 */
export interface HDInsightStreamingActivityResponse {
    /**
     * User specified arguments to HDInsightActivity.
     */
    arguments?: any[];
    /**
     * Combiner executable name. Type: string (or Expression with resultType string).
     */
    combiner?: any;
    /**
     * Command line environment values.
     */
    commandEnvironment?: any[];
    /**
     * Allows user to specify defines for streaming job request.
     */
    defines?: {[key: string]: any};
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * Linked service reference where the files are located.
     */
    fileLinkedService?: LinkedServiceReferenceResponse;
    /**
     * Paths to streaming job files. Can be directories.
     */
    filePaths: any[];
    /**
     * Debug info option.
     */
    getDebugInfo?: string;
    /**
     * Input blob path. Type: string (or Expression with resultType string).
     */
    input: any;
    /**
     * Linked service reference.
     */
    linkedServiceName?: LinkedServiceReferenceResponse;
    /**
     * Mapper executable name. Type: string (or Expression with resultType string).
     */
    mapper: any;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Output blob path. Type: string (or Expression with resultType string).
     */
    output: any;
    /**
     * Activity policy.
     */
    policy?: ActivityPolicyResponse;
    /**
     * Reducer executable name. Type: string (or Expression with resultType string).
     */
    reducer: any;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Storage linked service references.
     */
    storageLinkedServices?: LinkedServiceReferenceResponse[];
    /**
     * Type of activity.
     * Expected value is 'HDInsightStreaming'.
     */
    type: "HDInsightStreaming";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * Hadoop Distributed File System (HDFS) linked service.
 */
export interface HdfsLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * Type of authentication used to connect to the HDFS. Possible values are: Anonymous and Windows. Type: string (or Expression with resultType string).
     */
    authenticationType?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Password for Windows authentication.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Type of linked service.
     * Expected value is 'Hdfs'.
     */
    type: "Hdfs";
    /**
     * The URL of the HDFS service endpoint, e.g. http://myhostname:50070/webhdfs/v1 . Type: string (or Expression with resultType string).
     */
    url: any;
    /**
     * User name for Windows authentication. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The location of HDFS.
 */
export interface HdfsLocationResponse {
    /**
     * Specify the file name of dataset. Type: string (or Expression with resultType string).
     */
    fileName?: any;
    /**
     * Specify the folder path of dataset. Type: string (or Expression with resultType string)
     */
    folderPath?: any;
    /**
     * Type of dataset storage location.
     * Expected value is 'HdfsLocation'.
     */
    type: "HdfsLocation";
}

/**
 * HDFS read settings.
 */
export interface HdfsReadSettingsResponse {
    /**
     * Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    deleteFilesAfterCompletion?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Specifies Distcp-related settings.
     */
    distcpSettings?: DistcpSettingsResponse;
    /**
     * Indicates whether to enable partition discovery. Type: boolean (or Expression with resultType boolean).
     */
    enablePartitionDiscovery?: any;
    /**
     * Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
     */
    fileListPath?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * The end of file's modified datetime. Type: string (or Expression with resultType string).
     */
    modifiedDatetimeEnd?: any;
    /**
     * The start of file's modified datetime. Type: string (or Expression with resultType string).
     */
    modifiedDatetimeStart?: any;
    /**
     * Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
     */
    partitionRootPath?: any;
    /**
     * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
     */
    recursive?: any;
    /**
     * The read setting type.
     * Expected value is 'HdfsReadSettings'.
     */
    type: "HdfsReadSettings";
    /**
     * HDFS wildcardFileName. Type: string (or Expression with resultType string).
     */
    wildcardFileName?: any;
    /**
     * HDFS wildcardFolderPath. Type: string (or Expression with resultType string).
     */
    wildcardFolderPath?: any;
}

/**
 * A copy activity HDFS source.
 */
export interface HdfsSourceResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Specifies Distcp-related settings.
     */
    distcpSettings?: DistcpSettingsResponse;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
     */
    recursive?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'HdfsSource'.
     */
    type: "HdfsSource";
}

/**
 * Hive Server linked service.
 */
export interface HiveLinkedServiceResponse {
    /**
     * Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
     */
    allowHostNameCNMismatch?: any;
    /**
     * Specifies whether to allow self-signed certificates from the server. The default value is false.
     */
    allowSelfSignedServerCert?: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The authentication method used to access the Hive server.
     */
    authenticationType: string;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * Specifies whether the connections to the server are encrypted using SSL. The default value is false.
     */
    enableSsl?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * IP address or host name of the Hive server, separated by ';' for multiple hosts (only when serviceDiscoveryMode is enable).
     */
    host: any;
    /**
     * The partial URL corresponding to the Hive server.
     */
    httpPath?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The password corresponding to the user name that you provided in the Username field
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The TCP port that the Hive server uses to listen for client connections.
     */
    port?: any;
    /**
     * The type of Hive server.
     */
    serverType?: string;
    /**
     * true to indicate using the ZooKeeper service, false not.
     */
    serviceDiscoveryMode?: any;
    /**
     * The transport protocol to use in the Thrift layer.
     */
    thriftTransportProtocol?: string;
    /**
     * The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
     */
    trustedCertPath?: any;
    /**
     * Type of linked service.
     * Expected value is 'Hive'.
     */
    type: "Hive";
    /**
     * Specifies whether the driver uses native HiveQL queries,or converts them into an equivalent form in HiveQL.
     */
    useNativeQuery?: any;
    /**
     * Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.
     */
    useSystemTrustStore?: any;
    /**
     * The user name that you use to access Hive Server.
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
    /**
     * The namespace on ZooKeeper under which Hive Server 2 nodes are added.
     */
    zooKeeperNameSpace?: any;
}

/**
 * Hive Server dataset.
 */
export interface HiveObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name of the Hive. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * This property will be retired. Please consider using schema + table properties instead.
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'HiveObject'.
     */
    type: "HiveObject";
}

/**
 * A copy activity Hive Server source.
 */
export interface HiveSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'HiveSource'.
     */
    type: "HiveSource";
}

/**
 * A file in an HTTP web server.
 */
export interface HttpDatasetResponse {
    /**
     * The headers for the HTTP Request. e.g. request-header-name-1:request-header-value-1
     * ...
     * request-header-name-n:request-header-value-n Type: string (or Expression with resultType string).
     */
    additionalHeaders?: any;
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * The data compression method used on files.
     */
    compression?: DatasetCompressionResponse;
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * The format of files.
     */
    format?: AvroFormatResponse | JsonFormatResponse | OrcFormatResponse | ParquetFormatResponse | TextFormatResponse;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The relative URL based on the URL in the HttpLinkedService refers to an HTTP file Type: string (or Expression with resultType string).
     */
    relativeUrl?: any;
    /**
     * The body for the HTTP request. Type: string (or Expression with resultType string).
     */
    requestBody?: any;
    /**
     * The HTTP method for the HTTP request. Type: string (or Expression with resultType string).
     */
    requestMethod?: any;
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'HttpFile'.
     */
    type: "HttpFile";
}

/**
 * Linked service for an HTTP source.
 */
export interface HttpLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The additional HTTP headers in the request to RESTful API used for authorization. Type: key value pairs (value should be string type).
     */
    authHeaders?: any;
    /**
     * The authentication type to be used to connect to the HTTP server.
     */
    authenticationType?: string;
    /**
     * Thumbprint of certificate for ClientCertificate authentication. Only valid for on-premises copy. For on-premises copy with ClientCertificate authentication, either CertThumbprint or EmbeddedCertData/Password should be specified. Type: string (or Expression with resultType string).
     */
    certThumbprint?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * Base64 encoded certificate data for ClientCertificate authentication. For on-premises copy with ClientCertificate authentication, either CertThumbprint or EmbeddedCertData/Password should be specified. Type: string (or Expression with resultType string).
     */
    embeddedCertData?: any;
    /**
     * If true, validate the HTTPS server SSL certificate. Default value is true. Type: boolean (or Expression with resultType boolean).
     */
    enableServerCertificateValidation?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Password for Basic, Digest, Windows, or ClientCertificate with EmbeddedCertData authentication.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Type of linked service.
     * Expected value is 'HttpServer'.
     */
    type: "HttpServer";
    /**
     * The base URL of the HTTP endpoint, e.g. https://www.microsoft.com. Type: string (or Expression with resultType string).
     */
    url: any;
    /**
     * User name for Basic, Digest, or Windows authentication. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Http read settings.
 */
export interface HttpReadSettingsResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string).
     */
    additionalHeaders?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string).
     */
    requestBody?: any;
    /**
     * The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string).
     */
    requestMethod?: any;
    /**
     * Specifies the timeout for a HTTP client to get HTTP response from HTTP server. Type: string (or Expression with resultType string).
     */
    requestTimeout?: any;
    /**
     * The read setting type.
     * Expected value is 'HttpReadSettings'.
     */
    type: "HttpReadSettings";
}

/**
 * The location of http server.
 */
export interface HttpServerLocationResponse {
    /**
     * Specify the file name of dataset. Type: string (or Expression with resultType string).
     */
    fileName?: any;
    /**
     * Specify the folder path of dataset. Type: string (or Expression with resultType string)
     */
    folderPath?: any;
    /**
     * Specify the relativeUrl of http server. Type: string (or Expression with resultType string)
     */
    relativeUrl?: any;
    /**
     * Type of dataset storage location.
     * Expected value is 'HttpServerLocation'.
     */
    type: "HttpServerLocation";
}

/**
 * A copy activity source for an HTTP file.
 */
export interface HttpSourceResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Specifies the timeout for a HTTP client to get HTTP response from HTTP server. The default value is equivalent to System.Net.HttpWebRequest.Timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    httpRequestTimeout?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'HttpSource'.
     */
    type: "HttpSource";
}

/**
 * Hubspot Service linked service.
 */
export interface HubspotLinkedServiceResponse {
    /**
     * The access token obtained when initially authenticating your OAuth integration.
     */
    accessToken?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The client ID associated with your Hubspot application.
     */
    clientId: any;
    /**
     * The client secret associated with your Hubspot application.
     */
    clientSecret?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The refresh token obtained when initially authenticating your OAuth integration.
     */
    refreshToken?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Type of linked service.
     * Expected value is 'Hubspot'.
     */
    type: "Hubspot";
    /**
     * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
     */
    useEncryptedEndpoints?: any;
    /**
     * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
     */
    useHostVerification?: any;
    /**
     * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
     */
    usePeerVerification?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Hubspot Service dataset.
 */
export interface HubspotObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'HubspotObject'.
     */
    type: "HubspotObject";
}

/**
 * A copy activity Hubspot Service source.
 */
export interface HubspotSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'HubspotSource'.
     */
    type: "HubspotSource";
}

/**
 * Iceberg dataset.
 */
export interface IcebergDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * The location of the iceberg storage. Setting a file name is not allowed for iceberg format.
     */
    location: AmazonS3CompatibleLocationResponse | AmazonS3LocationResponse | AzureBlobFSLocationResponse | AzureBlobStorageLocationResponse | AzureDataLakeStoreLocationResponse | AzureFileStorageLocationResponse | FileServerLocationResponse | FtpServerLocationResponse | GoogleCloudStorageLocationResponse | HdfsLocationResponse | HttpServerLocationResponse | LakeHouseLocationResponse | OracleCloudStorageLocationResponse | SftpLocationResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'Iceberg'.
     */
    type: "Iceberg";
}

/**
 * A copy activity Iceberg sink.
 */
export interface IcebergSinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Iceberg format settings.
     */
    formatSettings?: IcebergWriteSettingsResponse;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Iceberg store settings.
     */
    storeSettings?: AzureBlobFSWriteSettingsResponse | AzureBlobStorageWriteSettingsResponse | AzureDataLakeStoreWriteSettingsResponse | AzureFileStorageWriteSettingsResponse | FileServerWriteSettingsResponse | LakeHouseWriteSettingsResponse | SftpWriteSettingsResponse;
    /**
     * Copy sink type.
     * Expected value is 'IcebergSink'.
     */
    type: "IcebergSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
}

/**
 * Iceberg write settings.
 */
export interface IcebergWriteSettingsResponse {
    /**
     * The write setting type.
     * Expected value is 'IcebergWriteSettings'.
     */
    type: "IcebergWriteSettings";
}

/**
 * This activity evaluates a boolean expression and executes either the activities under the ifTrueActivities property or the ifFalseActivities property depending on the result of the expression.
 */
export interface IfConditionActivityResponse {
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * An expression that would evaluate to Boolean. This is used to determine the block of activities (ifTrueActivities or ifFalseActivities) that will be executed.
     */
    expression: ExpressionResponse;
    /**
     * List of activities to execute if expression is evaluated to false. This is an optional property and if not provided, the activity will exit without any action.
     */
    ifFalseActivities?: (AppendVariableActivityResponse | AzureDataExplorerCommandActivityResponse | AzureFunctionActivityResponse | AzureMLBatchExecutionActivityResponse | AzureMLExecutePipelineActivityResponse | AzureMLUpdateResourceActivityResponse | ControlActivityResponse | CopyActivityResponse | CustomActivityResponse | DataLakeAnalyticsUSQLActivityResponse | DatabricksNotebookActivityResponse | DatabricksSparkJarActivityResponse | DatabricksSparkPythonActivityResponse | DeleteActivityResponse | ExecuteDataFlowActivityResponse | ExecutePipelineActivityResponse | ExecuteSSISPackageActivityResponse | ExecuteWranglingDataflowActivityResponse | ExecutionActivityResponse | FailActivityResponse | FilterActivityResponse | ForEachActivityResponse | GetMetadataActivityResponse | HDInsightHiveActivityResponse | HDInsightMapReduceActivityResponse | HDInsightPigActivityResponse | HDInsightSparkActivityResponse | HDInsightStreamingActivityResponse | IfConditionActivityResponse | LookupActivityResponse | ScriptActivityResponse | SetVariableActivityResponse | SqlServerStoredProcedureActivityResponse | SwitchActivityResponse | SynapseNotebookActivityResponse | SynapseSparkJobDefinitionActivityResponse | UntilActivityResponse | ValidationActivityResponse | WaitActivityResponse | WebActivityResponse | WebHookActivityResponse)[];
    /**
     * List of activities to execute if expression is evaluated to true. This is an optional property and if not provided, the activity will exit without any action.
     */
    ifTrueActivities?: (AppendVariableActivityResponse | AzureDataExplorerCommandActivityResponse | AzureFunctionActivityResponse | AzureMLBatchExecutionActivityResponse | AzureMLExecutePipelineActivityResponse | AzureMLUpdateResourceActivityResponse | ControlActivityResponse | CopyActivityResponse | CustomActivityResponse | DataLakeAnalyticsUSQLActivityResponse | DatabricksNotebookActivityResponse | DatabricksSparkJarActivityResponse | DatabricksSparkPythonActivityResponse | DeleteActivityResponse | ExecuteDataFlowActivityResponse | ExecutePipelineActivityResponse | ExecuteSSISPackageActivityResponse | ExecuteWranglingDataflowActivityResponse | ExecutionActivityResponse | FailActivityResponse | FilterActivityResponse | ForEachActivityResponse | GetMetadataActivityResponse | HDInsightHiveActivityResponse | HDInsightMapReduceActivityResponse | HDInsightPigActivityResponse | HDInsightSparkActivityResponse | HDInsightStreamingActivityResponse | IfConditionActivityResponse | LookupActivityResponse | ScriptActivityResponse | SetVariableActivityResponse | SqlServerStoredProcedureActivityResponse | SwitchActivityResponse | SynapseNotebookActivityResponse | SynapseSparkJobDefinitionActivityResponse | UntilActivityResponse | ValidationActivityResponse | WaitActivityResponse | WebActivityResponse | WebHookActivityResponse)[];
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Type of activity.
     * Expected value is 'IfCondition'.
     */
    type: "IfCondition";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * Impala server linked service.
 */
export interface ImpalaLinkedServiceResponse {
    /**
     * Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
     */
    allowHostNameCNMismatch?: any;
    /**
     * Specifies whether to allow self-signed certificates from the server. The default value is false.
     */
    allowSelfSignedServerCert?: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The authentication type to use.
     */
    authenticationType: string;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * Specifies whether the connections to the server are encrypted using SSL. The default value is false.
     */
    enableSsl?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The IP address or host name of the Impala server. (i.e. 192.168.222.160)
     */
    host: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The password corresponding to the user name when using UsernameAndPassword.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The TCP port that the Impala server uses to listen for client connections. The default value is 21050.
     */
    port?: any;
    /**
     * The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
     */
    trustedCertPath?: any;
    /**
     * Type of linked service.
     * Expected value is 'Impala'.
     */
    type: "Impala";
    /**
     * Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.
     */
    useSystemTrustStore?: any;
    /**
     * The user name used to access the Impala server. The default value is anonymous when using SASLUsername.
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Impala server dataset.
 */
export interface ImpalaObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name of the Impala. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * This property will be retired. Please consider using schema + table properties instead.
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'ImpalaObject'.
     */
    type: "ImpalaObject";
}

/**
 * A copy activity Impala server source.
 */
export interface ImpalaSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'ImpalaSource'.
     */
    type: "ImpalaSource";
}

/**
 * Informix linked service.
 */
export interface InformixLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * Type of authentication used to connect to the Informix as ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string).
     */
    authenticationType?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, or SecureString, or AzureKeyVaultSecretReference, or Expression with resultType string.
     */
    connectionString: any;
    /**
     * The access credential portion of the connection string specified in driver-specific property-value format.
     */
    credential?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Password for Basic authentication.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Type of linked service.
     * Expected value is 'Informix'.
     */
    type: "Informix";
    /**
     * User name for Basic authentication. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity Informix sink.
 */
export interface InformixSinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to execute before starting the copy. Type: string (or Expression with resultType string).
     */
    preCopyScript?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'InformixSink'.
     */
    type: "InformixSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
}

/**
 * A copy activity source for Informix.
 */
export interface InformixSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Database query. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'InformixSource'.
     */
    type: "InformixSource";
}

/**
 * The Informix table dataset.
 */
export interface InformixTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The Informix table name. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'InformixTable'.
     */
    type: "InformixTable";
}

/**
 * The compute resource properties for managed integration runtime.
 */
export interface IntegrationRuntimeComputePropertiesResponse {
    /**
     * CopyComputeScale properties for managed integration runtime.
     */
    copyComputeScaleProperties?: CopyComputeScalePropertiesResponse;
    /**
     * Data flow properties for managed integration runtime.
     */
    dataFlowProperties?: IntegrationRuntimeDataFlowPropertiesResponse;
    /**
     * The location for managed integration runtime. The supported regions could be found on https://docs.microsoft.com/en-us/azure/data-factory/data-factory-data-movement-activities
     */
    location?: string;
    /**
     * Maximum parallel executions count per node for managed integration runtime.
     */
    maxParallelExecutionsPerNode?: number;
    /**
     * The node size requirement to managed integration runtime.
     */
    nodeSize?: string;
    /**
     * The required number of nodes for managed integration runtime.
     */
    numberOfNodes?: number;
    /**
     * PipelineExternalComputeScale properties for managed integration runtime.
     */
    pipelineExternalComputeScaleProperties?: PipelineExternalComputeScalePropertiesResponse;
    /**
     * VNet properties for managed integration runtime.
     */
    vNetProperties?: IntegrationRuntimeVNetPropertiesResponse;
}

/**
 * Custom setup script properties for a managed dedicated integration runtime.
 */
export interface IntegrationRuntimeCustomSetupScriptPropertiesResponse {
    /**
     * The URI of the Azure blob container that contains the custom setup script.
     */
    blobContainerUri?: string;
    /**
     * The SAS token of the Azure blob container.
     */
    sasToken?: SecureStringResponse;
}

/**
 * The definition and properties of virtual network to which Azure-SSIS integration runtime will join.
 */
export interface IntegrationRuntimeCustomerVirtualNetworkResponse {
    /**
     * The ID of subnet to which Azure-SSIS integration runtime will join.
     */
    subnetId?: string;
}

/**
 * Data flow properties for managed integration runtime.
 */
export interface IntegrationRuntimeDataFlowPropertiesResponse {
    /**
     * Cluster will not be recycled and it will be used in next data flow activity run until TTL (time to live) is reached if this is set as false. Default is true.
     */
    cleanup?: boolean;
    /**
     * Compute type of the cluster which will execute data flow job.
     */
    computeType?: string;
    /**
     * Core count of the cluster which will execute data flow job. Supported values are: 8, 16, 32, 48, 80, 144 and 272.
     */
    coreCount?: number;
    /**
     * Custom properties are used to tune the data flow runtime performance.
     */
    customProperties?: IntegrationRuntimeDataFlowPropertiesResponseCustomProperties[];
    /**
     * Time to live (in minutes) setting of the cluster which will execute data flow job.
     */
    timeToLive?: number;
}

export interface IntegrationRuntimeDataFlowPropertiesResponseCustomProperties {
    /**
     * Name of custom property.
     */
    name?: string;
    /**
     * Value of custom property.
     */
    value?: string;
}

/**
 * Data proxy properties for a managed dedicated integration runtime.
 */
export interface IntegrationRuntimeDataProxyPropertiesResponse {
    /**
     * The self-hosted integration runtime reference.
     */
    connectVia?: EntityReferenceResponse;
    /**
     * The path to contain the staged data in the Blob storage.
     */
    path?: string;
    /**
     * The staging linked service reference.
     */
    stagingLinkedService?: EntityReferenceResponse;
}

/**
 * Integration runtime reference type.
 */
export interface IntegrationRuntimeReferenceResponse {
    /**
     * Arguments for integration runtime.
     */
    parameters?: {[key: string]: any};
    /**
     * Reference integration runtime name.
     */
    referenceName: string;
    /**
     * Type of integration runtime.
     */
    type: string;
}

/**
 * Catalog information for managed dedicated integration runtime.
 */
export interface IntegrationRuntimeSsisCatalogInfoResponse {
    /**
     * The password of the administrator user account of the catalog database.
     */
    catalogAdminPassword?: SecureStringResponse;
    /**
     * The administrator user name of catalog database.
     */
    catalogAdminUserName?: string;
    /**
     * The pricing tier for the catalog database. The valid values could be found in https://azure.microsoft.com/en-us/pricing/details/sql-database/
     */
    catalogPricingTier?: string;
    /**
     * The catalog database server URL.
     */
    catalogServerEndpoint?: string;
    /**
     * The dual standby pair name of Azure-SSIS Integration Runtimes to support SSISDB failover.
     */
    dualStandbyPairName?: string;
}

/**
 * SSIS properties for managed integration runtime.
 */
export interface IntegrationRuntimeSsisPropertiesResponse {
    /**
     * Catalog information for managed dedicated integration runtime.
     */
    catalogInfo?: IntegrationRuntimeSsisCatalogInfoResponse;
    /**
     * The credential reference containing authentication information.
     */
    credential?: CredentialReferenceResponse;
    /**
     * Custom setup script properties for a managed dedicated integration runtime.
     */
    customSetupScriptProperties?: IntegrationRuntimeCustomSetupScriptPropertiesResponse;
    /**
     * Data proxy properties for a managed dedicated integration runtime.
     */
    dataProxyProperties?: IntegrationRuntimeDataProxyPropertiesResponse;
    /**
     * The edition for the SSIS Integration Runtime
     */
    edition?: string;
    /**
     * Custom setup without script properties for a SSIS integration runtime.
     */
    expressCustomSetupProperties?: (AzPowerShellSetupResponse | CmdkeySetupResponse | ComponentSetupResponse | EnvironmentVariableSetupResponse)[];
    /**
     * License type for bringing your own license scenario.
     */
    licenseType?: string;
    /**
     * Package stores for the SSIS Integration Runtime.
     */
    packageStores?: PackageStoreResponse[];
}

/**
 * VNet properties for managed integration runtime.
 */
export interface IntegrationRuntimeVNetPropertiesResponse {
    /**
     * Resource IDs of the public IP addresses that this integration runtime will use.
     */
    publicIPs?: string[];
    /**
     * The name of the subnet this integration runtime will join.
     */
    subnet?: string;
    /**
     * The ID of subnet, to which this Azure-SSIS integration runtime will be joined.
     */
    subnetId?: string;
    /**
     * The ID of the VNet that this integration runtime will join.
     */
    vNetId?: string;
}

/**
 * Jira Service linked service.
 */
export interface JiraLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The IP address or host name of the Jira service. (e.g. jira.example.com)
     */
    host: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The password corresponding to the user name that you provided in the username field.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The TCP port that the Jira server uses to listen for client connections. The default value is 443 if connecting through HTTPS, or 8080 if connecting through HTTP.
     */
    port?: any;
    /**
     * Type of linked service.
     * Expected value is 'Jira'.
     */
    type: "Jira";
    /**
     * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
     */
    useEncryptedEndpoints?: any;
    /**
     * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
     */
    useHostVerification?: any;
    /**
     * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
     */
    usePeerVerification?: any;
    /**
     * The user name that you use to access Jira Service.
     */
    username: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Jira Service dataset.
 */
export interface JiraObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'JiraObject'.
     */
    type: "JiraObject";
}

/**
 * A copy activity Jira Service source.
 */
export interface JiraSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'JiraSource'.
     */
    type: "JiraSource";
}

/**
 * Json dataset.
 */
export interface JsonDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * The data compression method used for the json dataset.
     */
    compression?: DatasetCompressionResponse;
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The code page name of the preferred encoding. If not specified, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string).
     */
    encodingName?: any;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * The location of the json data storage.
     */
    location: AmazonS3CompatibleLocationResponse | AmazonS3LocationResponse | AzureBlobFSLocationResponse | AzureBlobStorageLocationResponse | AzureDataLakeStoreLocationResponse | AzureFileStorageLocationResponse | FileServerLocationResponse | FtpServerLocationResponse | GoogleCloudStorageLocationResponse | HdfsLocationResponse | HttpServerLocationResponse | LakeHouseLocationResponse | OracleCloudStorageLocationResponse | SftpLocationResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'Json'.
     */
    type: "Json";
}

/**
 * The data stored in JSON format.
 */
export interface JsonFormatResponse {
    /**
     * Deserializer. Type: string (or Expression with resultType string).
     */
    deserializer?: any;
    /**
     * The code page name of the preferred encoding. If not provided, the default value is 'utf-8', unless the byte order mark (BOM) denotes another Unicode encoding. The full list of supported values can be found in the 'Name' column of the table of encodings in the following reference: https://go.microsoft.com/fwlink/?linkid=861078. Type: string (or Expression with resultType string).
     */
    encodingName?: any;
    /**
     * File pattern of JSON. To be more specific, the way of separating a collection of JSON objects. The default value is 'setOfObjects'. It is case-sensitive.
     */
    filePattern?: any;
    /**
     * The JSONPath of the JSON array element to be flattened. Example: "$.ArrayPath". Type: string (or Expression with resultType string).
     */
    jsonNodeReference?: any;
    /**
     * The JSONPath definition for each column mapping with a customized column name to extract data from JSON file. For fields under root object, start with "$"; for fields inside the array chosen by jsonNodeReference property, start from the array element. Example: {"Column1": "$.Column1Path", "Column2": "Column2PathInArray"}. Type: object (or Expression with resultType object).
     */
    jsonPathDefinition?: any;
    /**
     * The character used to separate nesting levels. Default value is '.' (dot). Type: string (or Expression with resultType string).
     */
    nestingSeparator?: any;
    /**
     * Serializer. Type: string (or Expression with resultType string).
     */
    serializer?: any;
    /**
     * Type of dataset storage format.
     * Expected value is 'JsonFormat'.
     */
    type: "JsonFormat";
}

/**
 * Json read settings.
 */
export interface JsonReadSettingsResponse {
    /**
     * Compression settings.
     */
    compressionProperties?: TarGZipReadSettingsResponse | TarReadSettingsResponse | ZipDeflateReadSettingsResponse;
    /**
     * The read setting type.
     * Expected value is 'JsonReadSettings'.
     */
    type: "JsonReadSettings";
}

/**
 * A copy activity Json sink.
 */
export interface JsonSinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Json format settings.
     */
    formatSettings?: JsonWriteSettingsResponse;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Json store settings.
     */
    storeSettings?: AzureBlobFSWriteSettingsResponse | AzureBlobStorageWriteSettingsResponse | AzureDataLakeStoreWriteSettingsResponse | AzureFileStorageWriteSettingsResponse | FileServerWriteSettingsResponse | LakeHouseWriteSettingsResponse | SftpWriteSettingsResponse;
    /**
     * Copy sink type.
     * Expected value is 'JsonSink'.
     */
    type: "JsonSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
}

/**
 * A copy activity Json source.
 */
export interface JsonSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Json format settings.
     */
    formatSettings?: JsonReadSettingsResponse;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Json store settings.
     */
    storeSettings?: AmazonS3CompatibleReadSettingsResponse | AmazonS3ReadSettingsResponse | AzureBlobFSReadSettingsResponse | AzureBlobStorageReadSettingsResponse | AzureDataLakeStoreReadSettingsResponse | AzureFileStorageReadSettingsResponse | FileServerReadSettingsResponse | FtpReadSettingsResponse | GoogleCloudStorageReadSettingsResponse | HdfsReadSettingsResponse | HttpReadSettingsResponse | LakeHouseReadSettingsResponse | OracleCloudStorageReadSettingsResponse | SftpReadSettingsResponse;
    /**
     * Copy source type.
     * Expected value is 'JsonSource'.
     */
    type: "JsonSource";
}

/**
 * Json write settings.
 */
export interface JsonWriteSettingsResponse {
    /**
     * File pattern of JSON. This setting controls the way a collection of JSON objects will be treated. The default value is 'setOfObjects'. It is case-sensitive.
     */
    filePattern?: any;
    /**
     * The write setting type.
     * Expected value is 'JsonWriteSettings'.
     */
    type: "JsonWriteSettings";
}

/**
 * Microsoft Fabric Lakehouse linked service.
 */
export interface LakeHouseLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The ID of Microsoft Fabric Lakehouse artifact. Type: string (or Expression with resultType string).
     */
    artifactId?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
     */
    servicePrincipalCredential?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
     */
    servicePrincipalCredentialType?: any;
    /**
     * The ID of the application used to authenticate against Microsoft Fabric Lakehouse. Type: string (or Expression with resultType string).
     */
    servicePrincipalId?: any;
    /**
     * The Key of the application used to authenticate against Microsoft Fabric Lakehouse.
     */
    servicePrincipalKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
     */
    tenant?: any;
    /**
     * Type of linked service.
     * Expected value is 'Lakehouse'.
     */
    type: "Lakehouse";
    /**
     * Version of the linked service.
     */
    version?: string;
    /**
     * The ID of Microsoft Fabric workspace. Type: string (or Expression with resultType string).
     */
    workspaceId?: any;
}

/**
 * The location of Microsoft Fabric Lakehouse Files dataset.
 */
export interface LakeHouseLocationResponse {
    /**
     * Specify the file name of dataset. Type: string (or Expression with resultType string).
     */
    fileName?: any;
    /**
     * Specify the folder path of dataset. Type: string (or Expression with resultType string)
     */
    folderPath?: any;
    /**
     * Type of dataset storage location.
     * Expected value is 'LakeHouseLocation'.
     */
    type: "LakeHouseLocation";
}

/**
 * Microsoft Fabric Lakehouse Files read settings.
 */
export interface LakeHouseReadSettingsResponse {
    /**
     * Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    deleteFilesAfterCompletion?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Indicates whether to enable partition discovery. Type: boolean (or Expression with resultType boolean).
     */
    enablePartitionDiscovery?: any;
    /**
     * Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
     */
    fileListPath?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * The end of file's modified datetime. Type: string (or Expression with resultType string).
     */
    modifiedDatetimeEnd?: any;
    /**
     * The start of file's modified datetime. Type: string (or Expression with resultType string).
     */
    modifiedDatetimeStart?: any;
    /**
     * Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
     */
    partitionRootPath?: any;
    /**
     * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
     */
    recursive?: any;
    /**
     * The read setting type.
     * Expected value is 'LakeHouseReadSettings'.
     */
    type: "LakeHouseReadSettings";
    /**
     * Microsoft Fabric Lakehouse Files wildcardFileName. Type: string (or Expression with resultType string).
     */
    wildcardFileName?: any;
    /**
     * Microsoft Fabric Lakehouse Files wildcardFolderPath. Type: string (or Expression with resultType string).
     */
    wildcardFolderPath?: any;
}

/**
 * Microsoft Fabric Lakehouse Table.
 */
export interface LakeHouseTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The name of Microsoft Fabric Lakehouse Table. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * Type of dataset.
     * Expected value is 'LakehouseTable'.
     */
    type: "LakehouseTable";
}

/**
 * A copy activity for Microsoft Fabric Lakehouse Table sink.
 */
export interface LakeHouseTableSinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Specify the partition column names from sink columns. Type: array of objects (or Expression with resultType array of objects).
     */
    partitionNameList?: any;
    /**
     * Create partitions in folder structure based on one or multiple columns. Each distinct column value (pair) will be a new partition. Possible values include: "None", "PartitionByKey".
     */
    partitionOption?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * The type of table action for Lakehouse Table sink. Possible values include: "None", "Append", "Overwrite".
     */
    tableActionOption?: any;
    /**
     * Copy sink type.
     * Expected value is 'LakeHouseTableSink'.
     */
    type: "LakeHouseTableSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
}

/**
 * A copy activity source for Microsoft Fabric Lakehouse Table.
 */
export interface LakeHouseTableSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Query an older snapshot by timestamp. Type: string (or Expression with resultType string).
     */
    timestampAsOf?: any;
    /**
     * Copy source type.
     * Expected value is 'LakeHouseTableSource'.
     */
    type: "LakeHouseTableSource";
    /**
     * Query an older snapshot by version. Type: integer (or Expression with resultType integer).
     */
    versionAsOf?: any;
}

/**
 * Microsoft Fabric Lakehouse Files write settings.
 */
export interface LakeHouseWriteSettingsResponse {
    /**
     * The type of copy behavior for copy sink.
     */
    copyBehavior?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Specify the custom metadata to be added to sink data. Type: array of objects (or Expression with resultType array of objects).
     */
    metadata?: MetadataItemResponse[];
    /**
     * The write setting type.
     * Expected value is 'LakeHouseWriteSettings'.
     */
    type: "LakeHouseWriteSettings";
}

/**
 * The key authorization type integration runtime.
 */
export interface LinkedIntegrationRuntimeKeyAuthorizationResponse {
    /**
     * The authorization type for integration runtime sharing.
     * Expected value is 'Key'.
     */
    authorizationType: "Key";
    /**
     * The key used for authorization.
     */
    key: SecureStringResponse;
}

/**
 * The role based access control (RBAC) authorization type integration runtime.
 */
export interface LinkedIntegrationRuntimeRbacAuthorizationResponse {
    /**
     * The authorization type for integration runtime sharing.
     * Expected value is 'RBAC'.
     */
    authorizationType: "RBAC";
    /**
     * The credential reference containing authentication information.
     */
    credential?: CredentialReferenceResponse;
    /**
     * The resource identifier of the integration runtime to be shared.
     */
    resourceId: string;
}

/**
 * The linked integration runtime information.
 */
export interface LinkedIntegrationRuntimeResponse {
    /**
     * The creating time of the linked integration runtime.
     */
    createTime: string;
    /**
     * The location of the data factory for which the linked integration runtime belong to.
     */
    dataFactoryLocation: string;
    /**
     * The name of the data factory for which the linked integration runtime belong to.
     */
    dataFactoryName: string;
    /**
     * The name of the linked integration runtime.
     */
    name: string;
    /**
     * The subscription ID for which the linked integration runtime belong to.
     */
    subscriptionId: string;
}

/**
 * Linked service reference type.
 */
export interface LinkedServiceReferenceResponse {
    /**
     * Arguments for LinkedService.
     */
    parameters?: {[key: string]: any};
    /**
     * Reference LinkedService name.
     */
    referenceName: string;
    /**
     * Linked service reference type.
     */
    type: string;
}

/**
 * Log location settings.
 */
export interface LogLocationSettingsResponse {
    /**
     * Log storage linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * The path to storage for storing detailed logs of activity execution. Type: string (or Expression with resultType string).
     */
    path?: any;
}

/**
 * Log settings.
 */
export interface LogSettingsResponse {
    /**
     * Specifies settings for copy activity log.
     */
    copyActivityLogSettings?: CopyActivityLogSettingsResponse;
    /**
     * Specifies whether to enable copy activity log. Type: boolean (or Expression with resultType boolean).
     */
    enableCopyActivityLog?: any;
    /**
     * Log location settings customer needs to provide when enabling log.
     */
    logLocationSettings: LogLocationSettingsResponse;
}

/**
 * (Deprecated. Please use LogSettings) Log storage settings.
 */
export interface LogStorageSettingsResponse {
    /**
     * Specifies whether to enable reliable logging. Type: boolean (or Expression with resultType boolean).
     */
    enableReliableLogging?: any;
    /**
     * Log storage linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Gets or sets the log level, support: Info, Warning. Type: string (or Expression with resultType string).
     */
    logLevel?: any;
    /**
     * The path to storage for storing detailed logs of activity execution. Type: string (or Expression with resultType string).
     */
    path?: any;
}

/**
 * Lookup activity.
 */
export interface LookupActivityResponse {
    /**
     * Lookup activity dataset reference.
     */
    dataset: DatasetReferenceResponse;
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * Whether to return first row or all rows. Default value is true. Type: boolean (or Expression with resultType boolean).
     */
    firstRowOnly?: any;
    /**
     * Linked service reference.
     */
    linkedServiceName?: LinkedServiceReferenceResponse;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity policy.
     */
    policy?: ActivityPolicyResponse;
    /**
     * Dataset-specific source properties, same as copy activity source.
     */
    source: AmazonMWSSourceResponse | AmazonRdsForOracleSourceResponse | AmazonRdsForSqlServerSourceResponse | AmazonRedshiftSourceResponse | AvroSourceResponse | AzureBlobFSSourceResponse | AzureDataExplorerSourceResponse | AzureDataLakeStoreSourceResponse | AzureDatabricksDeltaLakeSourceResponse | AzureMariaDBSourceResponse | AzureMySqlSourceResponse | AzurePostgreSqlSourceResponse | AzureSqlSourceResponse | AzureTableSourceResponse | BinarySourceResponse | BlobSourceResponse | CassandraSourceResponse | CommonDataServiceForAppsSourceResponse | ConcurSourceResponse | CosmosDbMongoDbApiSourceResponse | CosmosDbSqlApiSourceResponse | CouchbaseSourceResponse | Db2SourceResponse | DelimitedTextSourceResponse | DocumentDbCollectionSourceResponse | DrillSourceResponse | DynamicsAXSourceResponse | DynamicsCrmSourceResponse | DynamicsSourceResponse | EloquaSourceResponse | ExcelSourceResponse | FileSystemSourceResponse | GoogleAdWordsSourceResponse | GoogleBigQuerySourceResponse | GoogleBigQueryV2SourceResponse | GreenplumSourceResponse | HBaseSourceResponse | HdfsSourceResponse | HiveSourceResponse | HttpSourceResponse | HubspotSourceResponse | ImpalaSourceResponse | InformixSourceResponse | JiraSourceResponse | JsonSourceResponse | LakeHouseTableSourceResponse | MagentoSourceResponse | MariaDBSourceResponse | MarketoSourceResponse | MicrosoftAccessSourceResponse | MongoDbAtlasSourceResponse | MongoDbSourceResponse | MongoDbV2SourceResponse | MySqlSourceResponse | NetezzaSourceResponse | ODataSourceResponse | OdbcSourceResponse | Office365SourceResponse | OracleServiceCloudSourceResponse | OracleSourceResponse | OrcSourceResponse | ParquetSourceResponse | PaypalSourceResponse | PhoenixSourceResponse | PostgreSqlSourceResponse | PostgreSqlV2SourceResponse | PrestoSourceResponse | QuickBooksSourceResponse | RelationalSourceResponse | ResponsysSourceResponse | RestSourceResponse | SalesforceMarketingCloudSourceResponse | SalesforceServiceCloudSourceResponse | SalesforceServiceCloudV2SourceResponse | SalesforceSourceResponse | SalesforceV2SourceResponse | SapBwSourceResponse | SapCloudForCustomerSourceResponse | SapEccSourceResponse | SapHanaSourceResponse | SapOdpSourceResponse | SapOpenHubSourceResponse | SapTableSourceResponse | ServiceNowSourceResponse | ServiceNowV2SourceResponse | SharePointOnlineListSourceResponse | ShopifySourceResponse | SnowflakeSourceResponse | SnowflakeV2SourceResponse | SparkSourceResponse | SqlDWSourceResponse | SqlMISourceResponse | SqlServerSourceResponse | SqlSourceResponse | SquareSourceResponse | SybaseSourceResponse | TabularSourceResponse | TeradataSourceResponse | VerticaSourceResponse | WarehouseSourceResponse | WebSourceResponse | XeroSourceResponse | XmlSourceResponse | ZohoSourceResponse;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Type of activity.
     * Expected value is 'Lookup'.
     */
    type: "Lookup";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * Magento server linked service.
 */
export interface MagentoLinkedServiceResponse {
    /**
     * The access token from Magento.
     */
    accessToken?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The URL of the Magento instance. (i.e. 192.168.222.110/magento3)
     */
    host: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Type of linked service.
     * Expected value is 'Magento'.
     */
    type: "Magento";
    /**
     * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
     */
    useEncryptedEndpoints?: any;
    /**
     * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
     */
    useHostVerification?: any;
    /**
     * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
     */
    usePeerVerification?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Magento server dataset.
 */
export interface MagentoObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'MagentoObject'.
     */
    type: "MagentoObject";
}

/**
 * A copy activity Magento server source.
 */
export interface MagentoSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'MagentoSource'.
     */
    type: "MagentoSource";
}

/**
 * Managed identity credential.
 */
export interface ManagedIdentityCredentialResponse {
    /**
     * List of tags that can be used for describing the Credential.
     */
    annotations?: any[];
    /**
     * Credential description.
     */
    description?: string;
    /**
     * The resource id of user assigned managed identity
     */
    resourceId?: string;
    /**
     * Type of credential.
     * Expected value is 'ManagedIdentity'.
     */
    type: "ManagedIdentity";
}

/**
 * Error definition for managed integration runtime.
 */
export interface ManagedIntegrationRuntimeErrorResponse {
    /**
     * Error code.
     */
    code: string;
    /**
     * Error message.
     */
    message: string;
    /**
     * Managed integration runtime error parameters.
     */
    parameters: string[];
    /**
     * The time when the error occurred.
     */
    time: string;
}

/**
 * Properties of integration runtime node.
 */
export interface ManagedIntegrationRuntimeNodeResponse {
    /**
     * The errors that occurred on this integration runtime node.
     */
    errors?: ManagedIntegrationRuntimeErrorResponse[];
    /**
     * The managed integration runtime node id.
     */
    nodeId: string;
    /**
     * The managed integration runtime node status.
     */
    status: string;
}

/**
 * Properties of managed integration runtime operation result.
 */
export interface ManagedIntegrationRuntimeOperationResultResponse {
    /**
     * The activity id for the operation request.
     */
    activityId: string;
    /**
     * The error code.
     */
    errorCode: string;
    /**
     * Managed integration runtime error parameters.
     */
    parameters: string[];
    /**
     * The operation result.
     */
    result: string;
    /**
     * The start time of the operation.
     */
    startTime: string;
    /**
     * The operation type. Could be start or stop.
     */
    type: string;
}

/**
 * Managed integration runtime, including managed elastic and managed dedicated integration runtimes.
 */
export interface ManagedIntegrationRuntimeResponse {
    /**
     * The compute resource for managed integration runtime.
     */
    computeProperties?: IntegrationRuntimeComputePropertiesResponse;
    /**
     * The name of virtual network to which Azure-SSIS integration runtime will join
     */
    customerVirtualNetwork?: IntegrationRuntimeCustomerVirtualNetworkResponse;
    /**
     * Integration runtime description.
     */
    description?: string;
    /**
     * Managed Virtual Network reference.
     */
    managedVirtualNetwork?: ManagedVirtualNetworkReferenceResponse;
    /**
     * SSIS properties for managed integration runtime.
     */
    ssisProperties?: IntegrationRuntimeSsisPropertiesResponse;
    /**
     * Integration runtime state, only valid for managed dedicated integration runtime.
     */
    state: string;
    /**
     * The type of integration runtime.
     * Expected value is 'Managed'.
     */
    type: "Managed";
}

/**
 * Managed integration runtime status.
 */
export interface ManagedIntegrationRuntimeStatusResponse {
    /**
     * The time at which the integration runtime was created, in ISO8601 format.
     */
    createTime: string;
    /**
     * The data factory name which the integration runtime belong to.
     */
    dataFactoryName: string;
    /**
     * The last operation result that occurred on this integration runtime.
     */
    lastOperation: ManagedIntegrationRuntimeOperationResultResponse;
    /**
     * The list of nodes for managed integration runtime.
     */
    nodes: ManagedIntegrationRuntimeNodeResponse[];
    /**
     * The errors that occurred on this integration runtime.
     */
    otherErrors: ManagedIntegrationRuntimeErrorResponse[];
    /**
     * The state of integration runtime.
     */
    state: string;
    /**
     * The type of integration runtime.
     * Expected value is 'Managed'.
     */
    type: "Managed";
}

/**
 * Properties of a managed private endpoint
 */
export interface ManagedPrivateEndpointResponse {
    /**
     * The managed private endpoint connection state
     */
    connectionState?: ConnectionStatePropertiesResponse;
    /**
     * Fully qualified domain names
     */
    fqdns?: string[];
    /**
     * The groupId to which the managed private endpoint is created
     */
    groupId?: string;
    /**
     * Denotes whether the managed private endpoint is reserved
     */
    isReserved: boolean;
    /**
     * The ARM resource ID of the resource to which the managed private endpoint is created
     */
    privateLinkResourceId?: string;
    /**
     * The managed private endpoint provisioning state
     */
    provisioningState: string;
}

/**
 * Managed Virtual Network reference type.
 */
export interface ManagedVirtualNetworkReferenceResponse {
    /**
     * Reference ManagedVirtualNetwork name.
     */
    referenceName: string;
    /**
     * Managed Virtual Network reference type.
     */
    type: string;
}

/**
 * Source and target column mapping details.
 */
export interface MapperAttributeMappingResponse {
    /**
     * Reference of the source column used in the mapping. It is used for 'Direct' mapping type only.
     */
    attributeReference?: MapperAttributeReferenceResponse;
    /**
     * List of references for source columns. It is used for 'Derived' and 'Aggregate' type mappings only.
     */
    attributeReferences?: MapperAttributeReferenceResponse[];
    /**
     * Expression used for 'Aggregate' and 'Derived' type mapping.
     */
    expression?: string;
    /**
     * Name of the function used for 'Aggregate' and 'Derived' (except 'Advanced') type mapping.
     */
    functionName?: string;
    /**
     * Name of the target column.
     */
    name?: string;
    /**
     * Type of the CDC attribute mapping. Note: 'Advanced' mapping type is also saved as 'Derived'.
     */
    type?: string;
}

/**
 * Attribute mapping details.
 */
export interface MapperAttributeMappingsResponse {
    /**
     * List of attribute mappings.
     */
    attributeMappings?: MapperAttributeMappingResponse[];
}

/**
 * Attribute reference details for the referred column.
 */
export interface MapperAttributeReferenceResponse {
    /**
     * Name of the table.
     */
    entity?: string;
    /**
     * The connection reference for the connection.
     */
    entityConnectionReference?: MapperConnectionReferenceResponse;
    /**
     * Name of the column.
     */
    name?: string;
}

/**
 * Source or target connection reference details.
 */
export interface MapperConnectionReferenceResponse {
    /**
     * Name of the connection
     */
    connectionName?: string;
    /**
     * Type of connection via linked service or dataset.
     */
    type?: string;
}

/**
 * Source connection details.
 */
export interface MapperConnectionResponse {
    /**
     * List of name/value pairs for connection properties.
     */
    commonDslConnectorProperties?: MapperDslConnectorPropertiesResponse[];
    /**
     * A boolean indicating whether linked service is of type inline dataset. Currently only inline datasets are supported.
     */
    isInlineDataset?: boolean;
    /**
     * Linked service reference.
     */
    linkedService?: LinkedServiceReferenceResponse;
    /**
     * Type of the linked service e.g.: AzureBlobFS.
     */
    linkedServiceType?: string;
    /**
     * Type of connection via linked service or dataset.
     */
    type: string;
}

/**
 * Connector properties of a CDC table in terms of name / value pairs.
 */
export interface MapperDslConnectorPropertiesResponse {
    /**
     * Name of the property.
     */
    name?: string;
    /**
     * Value of the property.
     */
    value?: any;
}

/**
 * CDC policy recurrence details.
 */
export interface MapperPolicyRecurrenceResponse {
    /**
     * Frequency of period in terms of 'Hour', 'Minute' or 'Second'.
     */
    frequency?: string;
    /**
     * Actual interval value as per chosen frequency.
     */
    interval?: number;
}

/**
 * CDC Policy.
 */
export interface MapperPolicyResponse {
    /**
     * Mode of running the CDC: batch vs continuous.
     */
    mode?: string;
    /**
     * Defines the frequency and interval for running the CDC for batch mode.
     */
    recurrence?: MapperPolicyRecurrenceResponse;
}

/**
 * A object which contains list of tables and connection details for a source connection.
 */
export interface MapperSourceConnectionsInfoResponse {
    /**
     * Source connection details.
     */
    connection?: MapperConnectionResponse;
    /**
     * List of source tables for a source connection.
     */
    sourceEntities?: MapperTableResponse[];
}

/**
 * CDC table details.
 */
export interface MapperTableResponse {
    /**
     * List of name/value pairs for connection properties.
     */
    dslConnectorProperties?: MapperDslConnectorPropertiesResponse[];
    /**
     * Name of the table.
     */
    name?: string;
    /**
     * List of columns for the source table.
     */
    schema?: MapperTableSchemaResponse[];
}

/**
 * Schema of a CDC table in terms of column names and their corresponding data types.
 */
export interface MapperTableSchemaResponse {
    /**
     * Data type of the column.
     */
    dataType?: string;
    /**
     * Name of the column.
     */
    name?: string;
}

/**
 * A object which contains list of tables and connection details for a target connection.
 */
export interface MapperTargetConnectionsInfoResponse {
    /**
     * Source connection details.
     */
    connection?: MapperConnectionResponse;
    /**
     * List of table mappings.
     */
    dataMapperMappings?: DataMapperMappingResponse[];
    /**
     * List of relationship info among the tables.
     */
    relationships?: any[];
    /**
     * List of source tables for a target connection.
     */
    targetEntities?: MapperTableResponse[];
}

/**
 * Mapping data flow.
 */
export interface MappingDataFlowResponse {
    /**
     * List of tags that can be used for describing the data flow.
     */
    annotations?: any[];
    /**
     * The description of the data flow.
     */
    description?: string;
    /**
     * The folder that this data flow is in. If not specified, Data flow will appear at the root level.
     */
    folder?: DataFlowResponseFolder;
    /**
     * DataFlow script.
     */
    script?: string;
    /**
     * Data flow script lines.
     */
    scriptLines?: string[];
    /**
     * List of sinks in data flow.
     */
    sinks?: DataFlowSinkResponse[];
    /**
     * List of sources in data flow.
     */
    sources?: DataFlowSourceResponse[];
    /**
     * List of transformations in data flow.
     */
    transformations?: TransformationResponse[];
    /**
     * Type of data flow.
     * Expected value is 'MappingDataFlow'.
     */
    type: "MappingDataFlow";
}

/**
 * MariaDB server linked service.
 */
export interface MariaDBLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * Database name for connection. Type: string.
     */
    database?: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The version of the MariaDB driver. Type: string. V1 or empty for legacy driver, V2 for new driver. V1 can support connection string and property bag, V2 can only support connection string. The legacy driver is scheduled for deprecation by October 2024.
     */
    driverVersion?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    password?: AzureKeyVaultSecretReferenceResponse;
    /**
     * The port for the connection. Type: integer.
     */
    port?: any;
    /**
     * Server name for connection. Type: string.
     */
    server?: any;
    /**
     * This option specifies whether the driver uses TLS encryption and verification when connecting to MariaDB. E.g., SSLMode=<0/1/2/3/4>. Options: DISABLED (0) / PREFERRED (1) (Default) / REQUIRED (2) / VERIFY_CA (3) / VERIFY_IDENTITY (4), REQUIRED (2) is recommended to only allow connections encrypted with SSL/TLS.
     */
    sslMode?: any;
    /**
     * Type of linked service.
     * Expected value is 'MariaDB'.
     */
    type: "MariaDB";
    /**
     * This option specifies whether to use a CA certificate from the system trust store, or from a specified PEM file. E.g. UseSystemTrustStore=<0/1>; Options: Enabled (1) / Disabled (0) (Default)
     */
    useSystemTrustStore?: any;
    /**
     * Username for authentication. Type: string.
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity MariaDB server source.
 */
export interface MariaDBSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'MariaDBSource'.
     */
    type: "MariaDBSource";
}

/**
 * MariaDB server dataset.
 */
export interface MariaDBTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'MariaDBTable'.
     */
    type: "MariaDBTable";
}

/**
 * Marketo server linked service.
 */
export interface MarketoLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The client Id of your Marketo service.
     */
    clientId: any;
    /**
     * The client secret of your Marketo service.
     */
    clientSecret?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The endpoint of the Marketo server. (i.e. 123-ABC-321.mktorest.com)
     */
    endpoint: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Type of linked service.
     * Expected value is 'Marketo'.
     */
    type: "Marketo";
    /**
     * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
     */
    useEncryptedEndpoints?: any;
    /**
     * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
     */
    useHostVerification?: any;
    /**
     * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
     */
    usePeerVerification?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Marketo server dataset.
 */
export interface MarketoObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'MarketoObject'.
     */
    type: "MarketoObject";
}

/**
 * A copy activity Marketo server source.
 */
export interface MarketoSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'MarketoSource'.
     */
    type: "MarketoSource";
}

/**
 * Specify the name and value of custom metadata item.
 */
export interface MetadataItemResponse {
    /**
     * Metadata item key name. Type: string (or Expression with resultType string).
     */
    name?: any;
    /**
     * Metadata item value. Type: string (or Expression with resultType string).
     */
    value?: any;
}

/**
 * Microsoft Access linked service.
 */
export interface MicrosoftAccessLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * Type of authentication used to connect to the Microsoft Access as ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string).
     */
    authenticationType?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, or SecureString, or AzureKeyVaultSecretReference, or Expression with resultType string.
     */
    connectionString: any;
    /**
     * The access credential portion of the connection string specified in driver-specific property-value format.
     */
    credential?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Password for Basic authentication.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Type of linked service.
     * Expected value is 'MicrosoftAccess'.
     */
    type: "MicrosoftAccess";
    /**
     * User name for Basic authentication. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity Microsoft Access sink.
 */
export interface MicrosoftAccessSinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to execute before starting the copy. Type: string (or Expression with resultType string).
     */
    preCopyScript?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'MicrosoftAccessSink'.
     */
    type: "MicrosoftAccessSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
}

/**
 * A copy activity source for Microsoft Access.
 */
export interface MicrosoftAccessSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Database query. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'MicrosoftAccessSource'.
     */
    type: "MicrosoftAccessSource";
}

/**
 * The Microsoft Access table dataset.
 */
export interface MicrosoftAccessTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The Microsoft Access table name. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'MicrosoftAccessTable'.
     */
    type: "MicrosoftAccessTable";
}

/**
 * The MongoDB Atlas database dataset.
 */
export interface MongoDbAtlasCollectionDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * The collection name of the MongoDB Atlas database. Type: string (or Expression with resultType string).
     */
    collection: any;
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'MongoDbAtlasCollection'.
     */
    type: "MongoDbAtlasCollection";
}

/**
 * Linked service for MongoDB Atlas data source.
 */
export interface MongoDbAtlasLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The MongoDB Atlas connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString: any;
    /**
     * The name of the MongoDB Atlas database that you want to access. Type: string (or Expression with resultType string).
     */
    database: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The driver version that you want to choose. Allowed value are v1 and v2. Type: string (or Expression with resultType string).
     */
    driverVersion?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Type of linked service.
     * Expected value is 'MongoDbAtlas'.
     */
    type: "MongoDbAtlas";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity MongoDB Atlas sink.
 */
export interface MongoDbAtlasSinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'MongoDbAtlasSink'.
     */
    type: "MongoDbAtlasSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
    /**
     * Specifies whether the document with same key to be overwritten (upsert) rather than throw exception (insert). The default value is "insert". Type: string (or Expression with resultType string). Type: string (or Expression with resultType string).
     */
    writeBehavior?: any;
}

/**
 * A copy activity source for a MongoDB Atlas database.
 */
export interface MongoDbAtlasSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * Specifies the number of documents to return in each batch of the response from MongoDB Atlas instance. In most cases, modifying the batch size will not affect the user or the application. This property's main purpose is to avoid hit the limitation of response size. Type: integer (or Expression with resultType integer).
     */
    batchSize?: any;
    /**
     * Cursor methods for Mongodb query
     */
    cursorMethods?: MongoDbCursorMethodsPropertiesResponse;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). Type: string (or Expression with resultType string).
     */
    filter?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'MongoDbAtlasSource'.
     */
    type: "MongoDbAtlasSource";
}

/**
 * The MongoDB database dataset.
 */
export interface MongoDbCollectionDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * The table name of the MongoDB database. Type: string (or Expression with resultType string).
     */
    collectionName: any;
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'MongoDbCollection'.
     */
    type: "MongoDbCollection";
}

/**
 * Cursor methods for Mongodb query
 */
export interface MongoDbCursorMethodsPropertiesResponse {
    /**
     * Specifies the maximum number of documents the server returns. limit() is analogous to the LIMIT statement in a SQL database. Type: integer (or Expression with resultType integer).
     */
    limit?: any;
    /**
     * Specifies the fields to return in the documents that match the query filter. To return all fields in the matching documents, omit this parameter. Type: string (or Expression with resultType string).
     */
    project?: any;
    /**
     * Specifies the how many documents skipped and where MongoDB begins returning results. This approach may be useful in implementing paginated results. Type: integer (or Expression with resultType integer).
     */
    skip?: any;
    /**
     * Specifies the order in which the query returns matching documents. Type: string (or Expression with resultType string). Type: string (or Expression with resultType string).
     */
    sort?: any;
}

/**
 * Linked service for MongoDb data source.
 */
export interface MongoDbLinkedServiceResponse {
    /**
     * Specifies whether to allow self-signed certificates from the server. The default value is false. Type: boolean (or Expression with resultType boolean).
     */
    allowSelfSignedServerCert?: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * Database to verify the username and password. Type: string (or Expression with resultType string).
     */
    authSource?: any;
    /**
     * The authentication type to be used to connect to the MongoDB database.
     */
    authenticationType?: string;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The name of the MongoDB database that you want to access. Type: string (or Expression with resultType string).
     */
    databaseName: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * Specifies whether the connections to the server are encrypted using SSL. The default value is false. Type: boolean (or Expression with resultType boolean).
     */
    enableSsl?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Password for authentication.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The TCP port number that the MongoDB server uses to listen for client connections. The default value is 27017. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    port?: any;
    /**
     * The IP address or server name of the MongoDB server. Type: string (or Expression with resultType string).
     */
    server: any;
    /**
     * Type of linked service.
     * Expected value is 'MongoDb'.
     */
    type: "MongoDb";
    /**
     * Username for authentication. Type: string (or Expression with resultType string).
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity source for a MongoDB database.
 */
export interface MongoDbSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Database query. Should be a SQL-92 query expression. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'MongoDbSource'.
     */
    type: "MongoDbSource";
}

/**
 * The MongoDB database dataset.
 */
export interface MongoDbV2CollectionDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * The collection name of the MongoDB database. Type: string (or Expression with resultType string).
     */
    collection: any;
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'MongoDbV2Collection'.
     */
    type: "MongoDbV2Collection";
}

/**
 * Linked service for MongoDB data source.
 */
export interface MongoDbV2LinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The MongoDB connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString: any;
    /**
     * The name of the MongoDB database that you want to access. Type: string (or Expression with resultType string).
     */
    database: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Type of linked service.
     * Expected value is 'MongoDbV2'.
     */
    type: "MongoDbV2";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity MongoDB sink.
 */
export interface MongoDbV2SinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'MongoDbV2Sink'.
     */
    type: "MongoDbV2Sink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
    /**
     * Specifies whether the document with same key to be overwritten (upsert) rather than throw exception (insert). The default value is "insert". Type: string (or Expression with resultType string). Type: string (or Expression with resultType string).
     */
    writeBehavior?: any;
}

/**
 * A copy activity source for a MongoDB database.
 */
export interface MongoDbV2SourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * Specifies the number of documents to return in each batch of the response from MongoDB instance. In most cases, modifying the batch size will not affect the user or the application. This property's main purpose is to avoid hit the limitation of response size. Type: integer (or Expression with resultType integer).
     */
    batchSize?: any;
    /**
     * Cursor methods for Mongodb query
     */
    cursorMethods?: MongoDbCursorMethodsPropertiesResponse;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). Type: string (or Expression with resultType string).
     */
    filter?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'MongoDbV2Source'.
     */
    type: "MongoDbV2Source";
}

/**
 * Base class for all triggers that support one to many model for trigger to pipeline.
 */
export interface MultiplePipelineTriggerResponse {
    /**
     * List of tags that can be used for describing the trigger.
     */
    annotations?: any[];
    /**
     * Trigger description.
     */
    description?: string;
    /**
     * Pipelines that need to be started.
     */
    pipelines?: TriggerPipelineReferenceResponse[];
    /**
     * Indicates if trigger is running or not. Updated when Start/Stop APIs are called on the Trigger.
     */
    runtimeState: string;
    /**
     * Trigger type.
     * Expected value is 'MultiplePipelineTrigger'.
     */
    type: "MultiplePipelineTrigger";
}

/**
 * Linked service for MySQL data source.
 */
export interface MySqlLinkedServiceResponse {
    /**
     * This allows the special “zero” date value 0000-00-00 to be retrieved from the database. Type: boolean.
     */
    allowZeroDateTime?: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * The length of time (in seconds) to wait for a connection to the server before terminating the attempt and generating an error. Type: integer.
     */
    connectionTimeout?: any;
    /**
     * True to return DateTime.MinValue for date or datetime columns that have disallowed values. Type: boolean.
     */
    convertZeroDateTime?: any;
    /**
     * Database name for connection. Type: string.
     */
    database?: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The version of the MySQL driver. Type: string. V1 or empty for legacy driver, V2 for new driver. V1 can support connection string and property bag, V2 can only support connection string.
     */
    driverVersion?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Determines which column type (if any) should be read as a GUID. Type: string. None: No column types are automatically read as a Guid; Char36: All CHAR(36) columns are read/written as a Guid using lowercase hex with hyphens, which matches UUID.
     */
    guidFormat?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    password?: AzureKeyVaultSecretReferenceResponse;
    /**
     * The port for the connection. Type: integer.
     */
    port?: any;
    /**
     * Server name for connection. Type: string.
     */
    server?: any;
    /**
     * The path to the client’s SSL certificate file in PEM format. SslKey must also be specified. Type: string.
     */
    sslCert?: any;
    /**
     * The path to the client’s SSL private key in PEM format. SslCert must also be specified. Type: string.
     */
    sslKey?: any;
    /**
     * SSL mode for connection. Type: integer. 0: disable, 1: prefer, 2: require, 3: verify-ca, 4: verify-full.
     */
    sslMode?: any;
    /**
     * When set to true, TINYINT(1) values are returned as booleans. Type: bool.
     */
    treatTinyAsBoolean?: any;
    /**
     * Type of linked service.
     * Expected value is 'MySql'.
     */
    type: "MySql";
    /**
     * Use system trust store for connection. Type: integer. 0: enable, 1: disable.
     */
    useSystemTrustStore?: any;
    /**
     * Username for authentication. Type: string.
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity source for MySQL databases.
 */
export interface MySqlSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Database query. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'MySqlSource'.
     */
    type: "MySqlSource";
}

/**
 * The MySQL table dataset.
 */
export interface MySqlTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The MySQL table name. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'MySqlTable'.
     */
    type: "MySqlTable";
}

/**
 * Netezza linked service.
 */
export interface NetezzaLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    pwd?: AzureKeyVaultSecretReferenceResponse;
    /**
     * Type of linked service.
     * Expected value is 'Netezza'.
     */
    type: "Netezza";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The settings that will be leveraged for Netezza source partitioning.
 */
export interface NetezzaPartitionSettingsResponse {
    /**
     * The name of the column in integer type that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
     */
    partitionColumnName?: any;
    /**
     * The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
     */
    partitionLowerBound?: any;
    /**
     * The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
     */
    partitionUpperBound?: any;
}

/**
 * A copy activity Netezza source.
 */
export interface NetezzaSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * The partition mechanism that will be used for Netezza read in parallel. Possible values include: "None", "DataSlice", "DynamicRange".
     */
    partitionOption?: any;
    /**
     * The settings that will be leveraged for Netezza source partitioning.
     */
    partitionSettings?: NetezzaPartitionSettingsResponse;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'NetezzaSource'.
     */
    type: "NetezzaSource";
}

/**
 * Netezza dataset.
 */
export interface NetezzaTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name of the Netezza. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * This property will be retired. Please consider using schema + table properties instead.
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'NetezzaTable'.
     */
    type: "NetezzaTable";
}

/**
 * Notebook parameter.
 */
export interface NotebookParameterResponse {
    /**
     * Notebook parameter type.
     */
    type?: string;
    /**
     * Notebook parameter value. Type: string (or Expression with resultType string).
     */
    value?: any;
}

/**
 * Open Data Protocol (OData) linked service.
 */
export interface ODataLinkedServiceResponse {
    /**
     * Specify the resource you are requesting authorization to use Directory. Type: string (or Expression with resultType string).
     */
    aadResourceId?: any;
    /**
     * Specify the credential type (key or cert) is used for service principal.
     */
    aadServicePrincipalCredentialType?: string;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The additional HTTP headers in the request to RESTful API used for authorization. Type: key value pairs (value should be string type).
     */
    authHeaders?: any;
    /**
     * Type of authentication used to connect to the OData service.
     */
    authenticationType?: string;
    /**
     * Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
     */
    azureCloudType?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Password of the OData service.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Specify the base64 encoded certificate of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
     */
    servicePrincipalEmbeddedCert?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Specify the password of your certificate if your certificate has a password and you are using AadServicePrincipal authentication. Type: string (or Expression with resultType string).
     */
    servicePrincipalEmbeddedCertPassword?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Specify the application id of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
     */
    servicePrincipalId?: any;
    /**
     * Specify the secret of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
     */
    servicePrincipalKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Specify the tenant information (domain name or tenant ID) under which your application resides. Type: string (or Expression with resultType string).
     */
    tenant?: any;
    /**
     * Type of linked service.
     * Expected value is 'OData'.
     */
    type: "OData";
    /**
     * The URL of the OData service endpoint. Type: string (or Expression with resultType string).
     */
    url: any;
    /**
     * User name of the OData service. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The Open Data Protocol (OData) resource dataset.
 */
export interface ODataResourceDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The OData resource path. Type: string (or Expression with resultType string).
     */
    path?: any;
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'ODataResource'.
     */
    type: "ODataResource";
}

/**
 * A copy activity source for OData source.
 */
export interface ODataSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    httpRequestTimeout?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * OData query. For example, "$top=1". Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'ODataSource'.
     */
    type: "ODataSource";
}

/**
 * Open Database Connectivity (ODBC) linked service.
 */
export interface OdbcLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * Type of authentication used to connect to the ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string).
     */
    authenticationType?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, or SecureString, or AzureKeyVaultSecretReference, or Expression with resultType string.
     */
    connectionString: any;
    /**
     * The access credential portion of the connection string specified in driver-specific property-value format.
     */
    credential?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Password for Basic authentication.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Type of linked service.
     * Expected value is 'Odbc'.
     */
    type: "Odbc";
    /**
     * User name for Basic authentication. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity ODBC sink.
 */
export interface OdbcSinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to execute before starting the copy. Type: string (or Expression with resultType string).
     */
    preCopyScript?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'OdbcSink'.
     */
    type: "OdbcSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
}

/**
 * A copy activity source for ODBC databases.
 */
export interface OdbcSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Database query. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'OdbcSource'.
     */
    type: "OdbcSource";
}

/**
 * The ODBC table dataset.
 */
export interface OdbcTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The ODBC table name. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'OdbcTable'.
     */
    type: "OdbcTable";
}

/**
 * The Office365 account.
 */
export interface Office365DatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * A predicate expression that can be used to filter the specific rows to extract from Office 365. Type: string (or Expression with resultType string).
     */
    predicate?: any;
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Name of the dataset to extract from Office 365. Type: string (or Expression with resultType string).
     */
    tableName: any;
    /**
     * Type of dataset.
     * Expected value is 'Office365Table'.
     */
    type: "Office365Table";
}

/**
 * Office365 linked service.
 */
export interface Office365LinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Azure tenant ID to which the Office 365 account belongs. Type: string (or Expression with resultType string).
     */
    office365TenantId: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The service principal credential type for authentication.'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. If not specified, 'ServicePrincipalKey' is in use. Type: string (or Expression with resultType string).
     */
    servicePrincipalCredentialType?: any;
    /**
     * Specify the base64 encoded certificate of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
     */
    servicePrincipalEmbeddedCert?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Specify the password of your certificate if your certificate has a password and you are using AadServicePrincipal authentication. Type: string (or Expression with resultType string).
     */
    servicePrincipalEmbeddedCertPassword?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Specify the application's client ID. Type: string (or Expression with resultType string).
     */
    servicePrincipalId: any;
    /**
     * Specify the application's key.
     */
    servicePrincipalKey: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Specify the tenant information under which your Azure AD web application resides. Type: string (or Expression with resultType string).
     */
    servicePrincipalTenantId: any;
    /**
     * Type of linked service.
     * Expected value is 'Office365'.
     */
    type: "Office365";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity source for an Office 365 service.
 */
export interface Office365SourceResponse {
    /**
     * The groups containing all the users. Type: array of strings (or Expression with resultType array of strings).
     */
    allowedGroups?: any;
    /**
     * The Column to apply the <paramref name="StartTime"/> and <paramref name="EndTime"/>. Type: string (or Expression with resultType string).
     */
    dateFilterColumn?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * End time of the requested range for this dataset. Type: string (or Expression with resultType string).
     */
    endTime?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * The columns to be read out from the Office 365 table. Type: array of objects (or Expression with resultType array of objects). itemType: OutputColumn. Example: [ { "name": "Id" }, { "name": "CreatedDateTime" } ]
     */
    outputColumns?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Start time of the requested range for this dataset. Type: string (or Expression with resultType string).
     */
    startTime?: any;
    /**
     * Copy source type.
     * Expected value is 'Office365Source'.
     */
    type: "Office365Source";
    /**
     * The user scope uri. Type: string (or Expression with resultType string).
     */
    userScopeFilterUri?: any;
}

/**
 * Linked service for Oracle Cloud Storage.
 */
export interface OracleCloudStorageLinkedServiceResponse {
    /**
     * The access key identifier of the Oracle Cloud Storage Identity and Access Management (IAM) user. Type: string (or Expression with resultType string).
     */
    accessKeyId?: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The secret access key of the Oracle Cloud Storage Identity and Access Management (IAM) user.
     */
    secretAccessKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * This value specifies the endpoint to access with the Oracle Cloud Storage Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string).
     */
    serviceUrl?: any;
    /**
     * Type of linked service.
     * Expected value is 'OracleCloudStorage'.
     */
    type: "OracleCloudStorage";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The location of Oracle Cloud Storage dataset.
 */
export interface OracleCloudStorageLocationResponse {
    /**
     * Specify the bucketName of Oracle Cloud Storage. Type: string (or Expression with resultType string)
     */
    bucketName?: any;
    /**
     * Specify the file name of dataset. Type: string (or Expression with resultType string).
     */
    fileName?: any;
    /**
     * Specify the folder path of dataset. Type: string (or Expression with resultType string)
     */
    folderPath?: any;
    /**
     * Type of dataset storage location.
     * Expected value is 'OracleCloudStorageLocation'.
     */
    type: "OracleCloudStorageLocation";
    /**
     * Specify the version of Oracle Cloud Storage. Type: string (or Expression with resultType string).
     */
    version?: any;
}

/**
 * Oracle Cloud Storage read settings.
 */
export interface OracleCloudStorageReadSettingsResponse {
    /**
     * Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    deleteFilesAfterCompletion?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Indicates whether to enable partition discovery. Type: boolean (or Expression with resultType boolean).
     */
    enablePartitionDiscovery?: any;
    /**
     * Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
     */
    fileListPath?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * The end of file's modified datetime. Type: string (or Expression with resultType string).
     */
    modifiedDatetimeEnd?: any;
    /**
     * The start of file's modified datetime. Type: string (or Expression with resultType string).
     */
    modifiedDatetimeStart?: any;
    /**
     * Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
     */
    partitionRootPath?: any;
    /**
     * The prefix filter for the Oracle Cloud Storage object name. Type: string (or Expression with resultType string).
     */
    prefix?: any;
    /**
     * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
     */
    recursive?: any;
    /**
     * The read setting type.
     * Expected value is 'OracleCloudStorageReadSettings'.
     */
    type: "OracleCloudStorageReadSettings";
    /**
     * Oracle Cloud Storage wildcardFileName. Type: string (or Expression with resultType string).
     */
    wildcardFileName?: any;
    /**
     * Oracle Cloud Storage wildcardFolderPath. Type: string (or Expression with resultType string).
     */
    wildcardFolderPath?: any;
}

/**
 * Oracle database. This linked service has supported version property. The Version 1.0 is scheduled for deprecation while your pipeline will continue to run after EOL but without any bug fix or new features.
 */
export interface OracleLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * Authentication type for connecting to the Oracle database. Only used for Version 2.0.
     */
    authenticationType?: string;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Only used for Version 1.0.
     */
    connectionString?: any;
    /**
     * Specifies the desired data integrity behavior when this client connects to a server. Supported values are accepted, rejected, requested or required, default value is required. Type: string. Only used for Version 2.0.
     */
    cryptoChecksumClient?: any;
    /**
     * Specifies the crypto-checksum algorithms that client can use. Supported values are SHA1, SHA256, SHA384, SHA512, default value is (SHA512). Type: string. Only used for Version 2.0.
     */
    cryptoChecksumTypesClient?: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * Specifies whether to use bulk copy or batch insert when loading data into the database, default value is true. Type: boolean. Only used for Version 2.0.
     */
    enableBulkLoad?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Specifies the encryption client behavior. Supported values are accepted, rejected, requested or required, default value is required. Type: string. Only used for Version 2.0.
     */
    encryptionClient?: any;
    /**
     * Specifies the encryption algorithms that client can use. Supported values are AES128, AES192, AES256, 3DES112, 3DES168, default value is (AES256). Type: string. Only used for Version 2.0.
     */
    encryptionTypesClient?: any;
    /**
     * Specifies the number of bytes that the driver allocates to fetch the data in one database round-trip, default value is 10485760. Type: integer. Only used for Version 2.0.
     */
    fetchSize?: any;
    /**
     * Specifies whether the driver returns column value with the TIMESTAMP WITH TIME ZONE data type as DateTime or string. This setting is ignored if supportV1DataTypes is not true, default value is true. Type: boolean. Only used for Version 2.0.
     */
    fetchTswtzAsTimestamp?: any;
    /**
     * Specifies the amount that the source initially fetches for LOB columns, default value is 0. Type: integer. Only used for Version 2.0.
     */
    initialLobFetchSize?: any;
    /**
     * Specifies a command that is issued immediately after connecting to the database to manage session settings. Type: string. Only used for Version 2.0.
     */
    initializationString?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    password?: AzureKeyVaultSecretReferenceResponse;
    /**
     * The location of Oracle database you want to connect to, the supported forms include connector descriptor, Easy Connect (Plus) Naming and Oracle Net Services Name (Only self-hosted IR). Type: string. Only used for Version 2.0.
     */
    server?: any;
    /**
     * Specifies the number of cursors or statements to be cached for each database connection, default value is 0. Type: integer. Only used for Version 2.0.
     */
    statementCacheSize?: any;
    /**
     * Specifies whether to use the Version 1.0 data type mappings. Do not set this to true unless you want to keep backward compatibility with Version 1.0's data type mappings, default value is false. Type: boolean. Only used for Version 2.0.
     */
    supportV1DataTypes?: any;
    /**
     * Type of linked service.
     * Expected value is 'Oracle'.
     */
    type: "Oracle";
    /**
     * The Oracle database username. Type: string. Only used for Version 2.0.
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The settings that will be leveraged for Oracle source partitioning.
 */
export interface OraclePartitionSettingsResponse {
    /**
     * The name of the column in integer type that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
     */
    partitionColumnName?: any;
    /**
     * The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
     */
    partitionLowerBound?: any;
    /**
     * Names of the physical partitions of Oracle table. 
     */
    partitionNames?: any[];
    /**
     * The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
     */
    partitionUpperBound?: any;
}

/**
 * Oracle Service Cloud linked service.
 */
export interface OracleServiceCloudLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The URL of the Oracle Service Cloud instance.
     */
    host: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The password corresponding to the user name that you provided in the username key.
     */
    password: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Type of linked service.
     * Expected value is 'OracleServiceCloud'.
     */
    type: "OracleServiceCloud";
    /**
     * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean).
     */
    useEncryptedEndpoints?: any;
    /**
     * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).
     */
    useHostVerification?: any;
    /**
     * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).
     */
    usePeerVerification?: any;
    /**
     * The user name that you use to access Oracle Service Cloud server.
     */
    username: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Oracle Service Cloud dataset.
 */
export interface OracleServiceCloudObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'OracleServiceCloudObject'.
     */
    type: "OracleServiceCloudObject";
}

/**
 * A copy activity Oracle Service Cloud source.
 */
export interface OracleServiceCloudSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'OracleServiceCloudSource'.
     */
    type: "OracleServiceCloudSource";
}

/**
 * A copy activity Oracle sink.
 */
export interface OracleSinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * SQL pre-copy script. Type: string (or Expression with resultType string).
     */
    preCopyScript?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'OracleSink'.
     */
    type: "OracleSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
}

/**
 * A copy activity Oracle source.
 */
export interface OracleSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Oracle reader query. Type: string (or Expression with resultType string).
     */
    oracleReaderQuery?: any;
    /**
     * The partition mechanism that will be used for Oracle read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange".
     */
    partitionOption?: any;
    /**
     * The settings that will be leveraged for Oracle source partitioning.
     */
    partitionSettings?: OraclePartitionSettingsResponse;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'OracleSource'.
     */
    type: "OracleSource";
}

/**
 * The on-premises Oracle database dataset.
 */
export interface OracleTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name of the on-premises Oracle database. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * This property will be retired. Please consider using schema + table properties instead.
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'OracleTable'.
     */
    type: "OracleTable";
}

/**
 * ORC dataset.
 */
export interface OrcDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * The location of the ORC data storage.
     */
    location: AmazonS3CompatibleLocationResponse | AmazonS3LocationResponse | AzureBlobFSLocationResponse | AzureBlobStorageLocationResponse | AzureDataLakeStoreLocationResponse | AzureFileStorageLocationResponse | FileServerLocationResponse | FtpServerLocationResponse | GoogleCloudStorageLocationResponse | HdfsLocationResponse | HttpServerLocationResponse | LakeHouseLocationResponse | OracleCloudStorageLocationResponse | SftpLocationResponse;
    /**
     * The data orcCompressionCodec. Type: string (or Expression with resultType string).
     */
    orcCompressionCodec?: any;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'Orc'.
     */
    type: "Orc";
}

/**
 * The data stored in Optimized Row Columnar (ORC) format.
 */
export interface OrcFormatResponse {
    /**
     * Deserializer. Type: string (or Expression with resultType string).
     */
    deserializer?: any;
    /**
     * Serializer. Type: string (or Expression with resultType string).
     */
    serializer?: any;
    /**
     * Type of dataset storage format.
     * Expected value is 'OrcFormat'.
     */
    type: "OrcFormat";
}

/**
 * A copy activity ORC sink.
 */
export interface OrcSinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * ORC format settings.
     */
    formatSettings?: OrcWriteSettingsResponse;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * ORC store settings.
     */
    storeSettings?: AzureBlobFSWriteSettingsResponse | AzureBlobStorageWriteSettingsResponse | AzureDataLakeStoreWriteSettingsResponse | AzureFileStorageWriteSettingsResponse | FileServerWriteSettingsResponse | LakeHouseWriteSettingsResponse | SftpWriteSettingsResponse;
    /**
     * Copy sink type.
     * Expected value is 'OrcSink'.
     */
    type: "OrcSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
}

/**
 * A copy activity ORC source.
 */
export interface OrcSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * ORC store settings.
     */
    storeSettings?: AmazonS3CompatibleReadSettingsResponse | AmazonS3ReadSettingsResponse | AzureBlobFSReadSettingsResponse | AzureBlobStorageReadSettingsResponse | AzureDataLakeStoreReadSettingsResponse | AzureFileStorageReadSettingsResponse | FileServerReadSettingsResponse | FtpReadSettingsResponse | GoogleCloudStorageReadSettingsResponse | HdfsReadSettingsResponse | HttpReadSettingsResponse | LakeHouseReadSettingsResponse | OracleCloudStorageReadSettingsResponse | SftpReadSettingsResponse;
    /**
     * Copy source type.
     * Expected value is 'OrcSource'.
     */
    type: "OrcSource";
}

/**
 * Orc write settings.
 */
export interface OrcWriteSettingsResponse {
    /**
     * Specifies the file name pattern <fileNamePrefix>_<fileIndex>.<fileExtension> when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string).
     */
    fileNamePrefix?: any;
    /**
     * Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer).
     */
    maxRowsPerFile?: any;
    /**
     * The write setting type.
     * Expected value is 'OrcWriteSettings'.
     */
    type: "OrcWriteSettings";
}

/**
 * Package store for the SSIS integration runtime.
 */
export interface PackageStoreResponse {
    /**
     * The name of the package store
     */
    name: string;
    /**
     * The package store linked service reference.
     */
    packageStoreLinkedService: EntityReferenceResponse;
}

/**
 * Definition of a single parameter for an entity.
 */
export interface ParameterSpecificationResponse {
    /**
     * Default value of parameter.
     */
    defaultValue?: any;
    /**
     * Parameter type.
     */
    type: string;
}

/**
 * Parquet dataset.
 */
export interface ParquetDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * The data compressionCodec. Type: string (or Expression with resultType string).
     */
    compressionCodec?: any;
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * The location of the parquet storage.
     */
    location: AmazonS3CompatibleLocationResponse | AmazonS3LocationResponse | AzureBlobFSLocationResponse | AzureBlobStorageLocationResponse | AzureDataLakeStoreLocationResponse | AzureFileStorageLocationResponse | FileServerLocationResponse | FtpServerLocationResponse | GoogleCloudStorageLocationResponse | HdfsLocationResponse | HttpServerLocationResponse | LakeHouseLocationResponse | OracleCloudStorageLocationResponse | SftpLocationResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'Parquet'.
     */
    type: "Parquet";
}

/**
 * The data stored in Parquet format.
 */
export interface ParquetFormatResponse {
    /**
     * Deserializer. Type: string (or Expression with resultType string).
     */
    deserializer?: any;
    /**
     * Serializer. Type: string (or Expression with resultType string).
     */
    serializer?: any;
    /**
     * Type of dataset storage format.
     * Expected value is 'ParquetFormat'.
     */
    type: "ParquetFormat";
}

/**
 * Parquet read settings.
 */
export interface ParquetReadSettingsResponse {
    /**
     * Compression settings.
     */
    compressionProperties?: TarGZipReadSettingsResponse | TarReadSettingsResponse | ZipDeflateReadSettingsResponse;
    /**
     * The read setting type.
     * Expected value is 'ParquetReadSettings'.
     */
    type: "ParquetReadSettings";
}

/**
 * A copy activity Parquet sink.
 */
export interface ParquetSinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Parquet format settings.
     */
    formatSettings?: ParquetWriteSettingsResponse;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Parquet store settings.
     */
    storeSettings?: AzureBlobFSWriteSettingsResponse | AzureBlobStorageWriteSettingsResponse | AzureDataLakeStoreWriteSettingsResponse | AzureFileStorageWriteSettingsResponse | FileServerWriteSettingsResponse | LakeHouseWriteSettingsResponse | SftpWriteSettingsResponse;
    /**
     * Copy sink type.
     * Expected value is 'ParquetSink'.
     */
    type: "ParquetSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
}

/**
 * A copy activity Parquet source.
 */
export interface ParquetSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Parquet format settings.
     */
    formatSettings?: ParquetReadSettingsResponse;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Parquet store settings.
     */
    storeSettings?: AmazonS3CompatibleReadSettingsResponse | AmazonS3ReadSettingsResponse | AzureBlobFSReadSettingsResponse | AzureBlobStorageReadSettingsResponse | AzureDataLakeStoreReadSettingsResponse | AzureFileStorageReadSettingsResponse | FileServerReadSettingsResponse | FtpReadSettingsResponse | GoogleCloudStorageReadSettingsResponse | HdfsReadSettingsResponse | HttpReadSettingsResponse | LakeHouseReadSettingsResponse | OracleCloudStorageReadSettingsResponse | SftpReadSettingsResponse;
    /**
     * Copy source type.
     * Expected value is 'ParquetSource'.
     */
    type: "ParquetSource";
}

/**
 * Parquet write settings.
 */
export interface ParquetWriteSettingsResponse {
    /**
     * Specifies the file name pattern <fileNamePrefix>_<fileIndex>.<fileExtension> when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string).
     */
    fileNamePrefix?: any;
    /**
     * Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer).
     */
    maxRowsPerFile?: any;
    /**
     * The write setting type.
     * Expected value is 'ParquetWriteSettings'.
     */
    type: "ParquetWriteSettings";
}

/**
 * Paypal Service linked service.
 */
export interface PaypalLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The client ID associated with your PayPal application.
     */
    clientId: any;
    /**
     * The client secret associated with your PayPal application.
     */
    clientSecret?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The URL of the PayPal instance. (i.e. api.sandbox.paypal.com)
     */
    host: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Type of linked service.
     * Expected value is 'Paypal'.
     */
    type: "Paypal";
    /**
     * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
     */
    useEncryptedEndpoints?: any;
    /**
     * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
     */
    useHostVerification?: any;
    /**
     * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
     */
    usePeerVerification?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Paypal Service dataset.
 */
export interface PaypalObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'PaypalObject'.
     */
    type: "PaypalObject";
}

/**
 * A copy activity Paypal Service source.
 */
export interface PaypalSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'PaypalSource'.
     */
    type: "PaypalSource";
}

/**
 * Phoenix server linked service.
 */
export interface PhoenixLinkedServiceResponse {
    /**
     * Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
     */
    allowHostNameCNMismatch?: any;
    /**
     * Specifies whether to allow self-signed certificates from the server. The default value is false.
     */
    allowSelfSignedServerCert?: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The authentication mechanism used to connect to the Phoenix server.
     */
    authenticationType: string;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * Specifies whether the connections to the server are encrypted using SSL. The default value is false.
     */
    enableSsl?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The IP address or host name of the Phoenix server. (i.e. 192.168.222.160)
     */
    host: any;
    /**
     * The partial URL corresponding to the Phoenix server. (i.e. /gateway/sandbox/phoenix/version). The default value is hbasephoenix if using WindowsAzureHDInsightService.
     */
    httpPath?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The password corresponding to the user name.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The TCP port that the Phoenix server uses to listen for client connections. The default value is 8765.
     */
    port?: any;
    /**
     * The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
     */
    trustedCertPath?: any;
    /**
     * Type of linked service.
     * Expected value is 'Phoenix'.
     */
    type: "Phoenix";
    /**
     * Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.
     */
    useSystemTrustStore?: any;
    /**
     * The user name used to connect to the Phoenix server.
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Phoenix server dataset.
 */
export interface PhoenixObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name of the Phoenix. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * This property will be retired. Please consider using schema + table properties instead.
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'PhoenixObject'.
     */
    type: "PhoenixObject";
}

/**
 * A copy activity Phoenix server source.
 */
export interface PhoenixSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'PhoenixSource'.
     */
    type: "PhoenixSource";
}

/**
 * Pipeline ElapsedTime Metric Policy.
 */
export interface PipelineElapsedTimeMetricPolicyResponse {
    /**
     * TimeSpan value, after which an Azure Monitoring Metric is fired.
     */
    duration?: any;
}

/**
 * PipelineExternalComputeScale properties for managed integration runtime.
 */
export interface PipelineExternalComputeScalePropertiesResponse {
    /**
     * Number of the the external nodes, which should be greater than 0 and less than 11.
     */
    numberOfExternalNodes?: number;
    /**
     * Number of the pipeline nodes, which should be greater than 0 and less than 11.
     */
    numberOfPipelineNodes?: number;
    /**
     * Time to live (in minutes) setting of integration runtime which will execute pipeline and external activity.
     */
    timeToLive?: number;
}

/**
 * Pipeline Policy.
 */
export interface PipelinePolicyResponse {
    /**
     * Pipeline ElapsedTime Metric Policy.
     */
    elapsedTimeMetric?: PipelineElapsedTimeMetricPolicyResponse;
}

/**
 * Pipeline reference type.
 */
export interface PipelineReferenceResponse {
    /**
     * Reference name.
     */
    name?: string;
    /**
     * Reference pipeline name.
     */
    referenceName: string;
    /**
     * Pipeline reference type.
     */
    type: string;
}

/**
 * The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level.
 */
export interface PipelineResponseFolder {
    /**
     * The name of the folder that this Pipeline is in.
     */
    name?: string;
}

/**
 * PolyBase settings.
 */
export interface PolybaseSettingsResponse {
    /**
     * Determines the number of rows to attempt to retrieve before the PolyBase recalculates the percentage of rejected rows. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    rejectSampleValue?: any;
    /**
     * Reject type.
     */
    rejectType?: string;
    /**
     * Specifies the value or the percentage of rows that can be rejected before the query fails. Type: number (or Expression with resultType number), minimum: 0.
     */
    rejectValue?: any;
    /**
     * Specifies how to handle missing values in delimited text files when PolyBase retrieves data from the text file. Type: boolean (or Expression with resultType boolean).
     */
    useTypeDefault?: any;
}

/**
 * Linked service for PostgreSQL data source.
 */
export interface PostgreSqlLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    password?: AzureKeyVaultSecretReferenceResponse;
    /**
     * Type of linked service.
     * Expected value is 'PostgreSql'.
     */
    type: "PostgreSql";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity source for PostgreSQL databases.
 */
export interface PostgreSqlSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Database query. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'PostgreSqlSource'.
     */
    type: "PostgreSqlSource";
}

/**
 * The PostgreSQL table dataset.
 */
export interface PostgreSqlTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The PostgreSQL table name. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * This property will be retired. Please consider using schema + table properties instead.
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'PostgreSqlTable'.
     */
    type: "PostgreSqlTable";
}

/**
 * Linked service for PostgreSQLV2 data source.
 */
export interface PostgreSqlV2LinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The authentication type to use. Type: string.
     */
    authenticationType: any;
    /**
     * The time to wait (in seconds) while trying to execute a command before terminating the attempt and generating an error. Set to zero for infinity. Type: integer.
     */
    commandTimeout?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The time to wait (in seconds) while trying to establish a connection before terminating the attempt and generating an error. Type: integer.
     */
    connectionTimeout?: any;
    /**
     * Database name for connection. Type: string.
     */
    database: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * Gets or sets the .NET encoding that will be used to encode/decode PostgreSQL string data. Type: string
     */
    encoding?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * When enabled, parameter values are logged when commands are executed. Type: boolean.
     */
    logParameters?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The Azure key vault secret reference of password in connection string. Type: string.
     */
    password?: AzureKeyVaultSecretReferenceResponse;
    /**
     * Whether connection pooling should be used. Type: boolean.
     */
    pooling?: any;
    /**
     * The port for the connection. Type: integer.
     */
    port?: any;
    /**
     * Determines the size of the internal buffer uses when reading. Increasing may improve performance if transferring large values from the database. Type: integer.
     */
    readBufferSize?: any;
    /**
     * Sets the schema search path. Type: string.
     */
    schema?: any;
    /**
     * Server name for connection. Type: string.
     */
    server: any;
    /**
     * Location of a client certificate to be sent to the server. Type: string.
     */
    sslCertificate?: any;
    /**
     * Location of a client key for a client certificate to be sent to the server. Type: string.
     */
    sslKey?: any;
    /**
     * SSL mode for connection. Type: integer. 0: disable, 1:allow, 2: prefer, 3: require, 4: verify-ca, 5: verify-full. Type: integer.
     */
    sslMode: any;
    /**
     * Password for a key for a client certificate. Type: string.
     */
    sslPassword?: any;
    /**
     * Gets or sets the session timezone. Type: string.
     */
    timezone?: any;
    /**
     * Whether to trust the server certificate without validating it. Type: boolean.
     */
    trustServerCertificate?: any;
    /**
     * Type of linked service.
     * Expected value is 'PostgreSqlV2'.
     */
    type: "PostgreSqlV2";
    /**
     * Username for authentication. Type: string.
     */
    username: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity source for PostgreSQL databases.
 */
export interface PostgreSqlV2SourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Database query. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'PostgreSqlV2Source'.
     */
    type: "PostgreSqlV2Source";
}

/**
 * The PostgreSQLV2 table dataset.
 */
export interface PostgreSqlV2TableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The PostgreSQL table name. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * Type of dataset.
     * Expected value is 'PostgreSqlV2Table'.
     */
    type: "PostgreSqlV2Table";
}

/**
 * Map Power Query mashup query to sink dataset(s).
 */
export interface PowerQuerySinkMappingResponse {
    /**
     * List of sinks mapped to Power Query mashup query.
     */
    dataflowSinks?: PowerQuerySinkResponse[];
    /**
     * Name of the query in Power Query mashup document.
     */
    queryName?: string;
}

/**
 * Power query sink.
 */
export interface PowerQuerySinkResponse {
    /**
     * Dataset reference.
     */
    dataset?: DatasetReferenceResponse;
    /**
     * Transformation description.
     */
    description?: string;
    /**
     * Flowlet Reference
     */
    flowlet?: DataFlowReferenceResponse;
    /**
     * Linked service reference.
     */
    linkedService?: LinkedServiceReferenceResponse;
    /**
     * Transformation name.
     */
    name: string;
    /**
     * Rejected data linked service reference.
     */
    rejectedDataLinkedService?: LinkedServiceReferenceResponse;
    /**
     * Schema linked service reference.
     */
    schemaLinkedService?: LinkedServiceReferenceResponse;
    /**
     * sink script.
     */
    script?: string;
}

/**
 * Power query source.
 */
export interface PowerQuerySourceResponse {
    /**
     * Dataset reference.
     */
    dataset?: DatasetReferenceResponse;
    /**
     * Transformation description.
     */
    description?: string;
    /**
     * Flowlet Reference
     */
    flowlet?: DataFlowReferenceResponse;
    /**
     * Linked service reference.
     */
    linkedService?: LinkedServiceReferenceResponse;
    /**
     * Transformation name.
     */
    name: string;
    /**
     * Schema linked service reference.
     */
    schemaLinkedService?: LinkedServiceReferenceResponse;
    /**
     * source script.
     */
    script?: string;
}

/**
 * Presto server linked service. This linked service has supported version property. The Version 1.0 is scheduled for deprecation while your pipeline will continue to run after EOL but without any bug fix or new features.
 */
export interface PrestoLinkedServiceResponse {
    /**
     * Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. Only used for Version 1.0.
     */
    allowHostNameCNMismatch?: any;
    /**
     * Specifies whether to allow self-signed certificates from the server. The default value is false. Only used for Version 1.0.
     */
    allowSelfSignedServerCert?: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The authentication mechanism used to connect to the Presto server.
     */
    authenticationType: string;
    /**
     * The catalog context for all request against the server.
     */
    catalog: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * Specifies whether the connections to the server will validate server certificate, the default value is True. Only used for Version 2.0
     */
    enableServerCertificateValidation?: any;
    /**
     * Specifies whether the connections to the server are encrypted using SSL. The default value for legacy version is False. The default value for version 2.0 is True.
     */
    enableSsl?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The IP address or host name of the Presto server. (i.e. 192.168.222.160)
     */
    host: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The password corresponding to the user name.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The TCP port that the Presto server uses to listen for client connections. The default value is 8080 when disable SSL, default value is 443 when enable SSL.
     */
    port?: any;
    /**
     * The version of the Presto server. (i.e. 0.148-t) Only used for Version 1.0.
     */
    serverVersion?: any;
    /**
     * The local time zone used by the connection. Valid values for this option are specified in the IANA Time Zone Database. The default value for Version 1.0 is the client system time zone. The default value for Version 2.0 is server system timeZone
     */
    timeZoneID?: any;
    /**
     * The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. Only used for Version 1.0.
     */
    trustedCertPath?: any;
    /**
     * Type of linked service.
     * Expected value is 'Presto'.
     */
    type: "Presto";
    /**
     * Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. Only used for Version 1.0.
     */
    useSystemTrustStore?: any;
    /**
     * The user name used to connect to the Presto server.
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Presto server dataset.
 */
export interface PrestoObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name of the Presto. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * This property will be retired. Please consider using schema + table properties instead.
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'PrestoObject'.
     */
    type: "PrestoObject";
}

/**
 * A copy activity Presto server source.
 */
export interface PrestoSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'PrestoSource'.
     */
    type: "PrestoSource";
}

/**
 * The state of a private link connection
 */
export interface PrivateLinkConnectionStateResponse {
    /**
     * ActionsRequired for a private link connection
     */
    actionsRequired?: string;
    /**
     * Description of a private link connection
     */
    description?: string;
    /**
     * Status of a private link connection
     */
    status?: string;
}

/**
 * Purview configuration.
 */
export interface PurviewConfigurationResponse {
    /**
     * Purview resource id.
     */
    purviewResourceId?: string;
}

/**
 * QuickBooks server linked service.
 */
export interface QuickBooksLinkedServiceResponse {
    /**
     * The access token for OAuth 1.0 authentication.
     */
    accessToken?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The access token secret for OAuth 1.0 authentication.
     */
    accessTokenSecret?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The company ID of the QuickBooks company to authorize.
     */
    companyId?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Properties used to connect to QuickBooks. It is mutually exclusive with any other properties in the linked service. Type: object.
     */
    connectionProperties?: any;
    /**
     * The consumer key for OAuth 1.0 authentication.
     */
    consumerKey?: any;
    /**
     * The consumer secret for OAuth 1.0 authentication.
     */
    consumerSecret?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The endpoint of the QuickBooks server. (i.e. quickbooks.api.intuit.com)
     */
    endpoint?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Type of linked service.
     * Expected value is 'QuickBooks'.
     */
    type: "QuickBooks";
    /**
     * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
     */
    useEncryptedEndpoints?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * QuickBooks server dataset.
 */
export interface QuickBooksObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'QuickBooksObject'.
     */
    type: "QuickBooksObject";
}

/**
 * A copy activity QuickBooks server source.
 */
export interface QuickBooksSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'QuickBooksSource'.
     */
    type: "QuickBooksSource";
}

/**
 * Linked service for Quickbase.
 */
export interface QuickbaseLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Type of linked service.
     * Expected value is 'Quickbase'.
     */
    type: "Quickbase";
    /**
     * The url to connect Quickbase source. Type: string (or Expression with resultType string).
     */
    url: any;
    /**
     * The user token for the Quickbase source.
     */
    userToken: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The recurrence schedule occurrence.
 */
export interface RecurrenceScheduleOccurrenceResponse {
    /**
     * The day of the week.
     */
    day?: string;
    /**
     * The occurrence.
     */
    occurrence?: number;
}

/**
 * The recurrence schedule.
 */
export interface RecurrenceScheduleResponse {
    /**
     * The hours.
     */
    hours?: number[];
    /**
     * The minutes.
     */
    minutes?: number[];
    /**
     * The month days.
     */
    monthDays?: number[];
    /**
     * The monthly occurrences.
     */
    monthlyOccurrences?: RecurrenceScheduleOccurrenceResponse[];
    /**
     * The days of the week.
     */
    weekDays?: string[];
}

/**
 * Redirect incompatible row settings
 */
export interface RedirectIncompatibleRowSettingsResponse {
    /**
     * Name of the Azure Storage, Storage SAS, or Azure Data Lake Store linked service used for redirecting incompatible row. Must be specified if redirectIncompatibleRowSettings is specified. Type: string (or Expression with resultType string).
     */
    linkedServiceName: any;
    /**
     * The path for storing the redirect incompatible row data. Type: string (or Expression with resultType string).
     */
    path?: any;
}

/**
 * The Amazon S3 settings needed for the interim Amazon S3 when copying from Amazon Redshift with unload. With this, data from Amazon Redshift source will be unloaded into S3 first and then copied into the targeted sink from the interim S3.
 */
export interface RedshiftUnloadSettingsResponse {
    /**
     * The bucket of the interim Amazon S3 which will be used to store the unloaded data from Amazon Redshift source. The bucket must be in the same region as the Amazon Redshift source. Type: string (or Expression with resultType string).
     */
    bucketName: any;
    /**
     * The name of the Amazon S3 linked service which will be used for the unload operation when copying from the Amazon Redshift source.
     */
    s3LinkedServiceName: LinkedServiceReferenceResponse;
}

/**
 * A copy activity source for various relational databases.
 */
export interface RelationalSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Database query. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'RelationalSource'.
     */
    type: "RelationalSource";
}

/**
 * The relational table dataset.
 */
export interface RelationalTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The relational table name. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'RelationalTable'.
     */
    type: "RelationalTable";
}

/**
 * A remote private endpoint connection
 */
export interface RemotePrivateEndpointConnectionResponse {
    /**
     * PrivateEndpoint of a remote private endpoint connection
     */
    privateEndpoint?: ArmIdWrapperResponse;
    /**
     * The state of a private link connection
     */
    privateLinkServiceConnectionState?: PrivateLinkConnectionStateResponse;
    provisioningState: string;
}

/**
 * Trigger that schedules pipeline reruns for all fixed time interval windows from a requested start time to requested end time.
 */
export interface RerunTumblingWindowTriggerResponse {
    /**
     * List of tags that can be used for describing the trigger.
     */
    annotations?: any[];
    /**
     * Trigger description.
     */
    description?: string;
    /**
     * The parent trigger reference.
     */
    parentTrigger: any;
    /**
     * The end time for the time period for which restatement is initiated. Only UTC time is currently supported.
     */
    requestedEndTime: string;
    /**
     * The start time for the time period for which restatement is initiated. Only UTC time is currently supported.
     */
    requestedStartTime: string;
    /**
     * The max number of parallel time windows (ready for execution) for which a rerun is triggered.
     */
    rerunConcurrency: number;
    /**
     * Indicates if trigger is running or not. Updated when Start/Stop APIs are called on the Trigger.
     */
    runtimeState: string;
    /**
     * Trigger type.
     * Expected value is 'RerunTumblingWindowTrigger'.
     */
    type: "RerunTumblingWindowTrigger";
}

/**
 * Responsys linked service.
 */
export interface ResponsysLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The client ID associated with the Responsys application. Type: string (or Expression with resultType string).
     */
    clientId: any;
    /**
     * The client secret associated with the Responsys application. Type: string (or Expression with resultType string).
     */
    clientSecret?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The endpoint of the Responsys server.
     */
    endpoint: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Type of linked service.
     * Expected value is 'Responsys'.
     */
    type: "Responsys";
    /**
     * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean).
     */
    useEncryptedEndpoints?: any;
    /**
     * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).
     */
    useHostVerification?: any;
    /**
     * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).
     */
    usePeerVerification?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Responsys dataset.
 */
export interface ResponsysObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'ResponsysObject'.
     */
    type: "ResponsysObject";
}

/**
 * A copy activity Responsys source.
 */
export interface ResponsysSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'ResponsysSource'.
     */
    type: "ResponsysSource";
}

/**
 * A Rest service dataset.
 */
export interface RestResourceDatasetResponse {
    /**
     * The additional HTTP headers in the request to the RESTful API.
     */
    additionalHeaders?: {[key: string]: any};
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * The pagination rules to compose next page requests.
     */
    paginationRules?: {[key: string]: any};
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The relative URL to the resource that the RESTful API provides. Type: string (or Expression with resultType string).
     */
    relativeUrl?: any;
    /**
     * The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string).
     */
    requestBody?: any;
    /**
     * The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string).
     */
    requestMethod?: any;
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'RestResource'.
     */
    type: "RestResource";
}

/**
 * Rest Service linked service.
 */
export interface RestServiceLinkedServiceResponse {
    /**
     * The resource you are requesting authorization to use. Type: string (or Expression with resultType string).
     */
    aadResourceId?: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The additional HTTP headers in the request to RESTful API used for authorization. Type: object (or Expression with resultType object).
     */
    authHeaders?: any;
    /**
     * Type of authentication used to connect to the REST service.
     */
    authenticationType: string;
    /**
     * Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
     */
    azureCloudType?: any;
    /**
     * The client ID associated with your application. Type: string (or Expression with resultType string).
     */
    clientId?: any;
    /**
     * The client secret associated with your application.
     */
    clientSecret?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The credential reference containing authentication information.
     */
    credential?: CredentialReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * Whether to validate server side SSL certificate when connecting to the endpoint.The default value is true. Type: boolean (or Expression with resultType boolean).
     */
    enableServerCertificateValidation?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The password used in Basic authentication type.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The target service or resource to which the access will be requested. Type: string (or Expression with resultType string).
     */
    resource?: any;
    /**
     * The scope of the access required. It describes what kind of access will be requested. Type: string (or Expression with resultType string).
     */
    scope?: any;
    /**
     * The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
     */
    servicePrincipalCredentialType?: any;
    /**
     * Specify the base64 encoded certificate of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
     */
    servicePrincipalEmbeddedCert?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Specify the password of your certificate if your certificate has a password and you are using AadServicePrincipal authentication. Type: string (or Expression with resultType string).
     */
    servicePrincipalEmbeddedCertPassword?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The application's client ID used in AadServicePrincipal authentication type. Type: string (or Expression with resultType string).
     */
    servicePrincipalId?: any;
    /**
     * The application's key used in AadServicePrincipal authentication type.
     */
    servicePrincipalKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The tenant information (domain name or tenant ID) used in AadServicePrincipal authentication type under which your application resides. Type: string (or Expression with resultType string).
     */
    tenant?: any;
    /**
     * The token endpoint of the authorization server to acquire access token. Type: string (or Expression with resultType string).
     */
    tokenEndpoint?: any;
    /**
     * Type of linked service.
     * Expected value is 'RestService'.
     */
    type: "RestService";
    /**
     * The base URL of the REST service. Type: string (or Expression with resultType string).
     */
    url: any;
    /**
     * The user name used in Basic authentication type. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity Rest service Sink.
 */
export interface RestSinkResponse {
    /**
     * The additional HTTP headers in the request to the RESTful API. Type: key value pairs (value should be string type).
     */
    additionalHeaders?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Http Compression Type to Send data in compressed format with Optimal Compression Level, Default is None. And The Only Supported option is Gzip. Type: string (or Expression with resultType string).
     */
    httpCompressionType?: any;
    /**
     * The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:01:40. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    httpRequestTimeout?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * The time to await before sending next request, in milliseconds 
     */
    requestInterval?: any;
    /**
     * The HTTP method used to call the RESTful API. The default is POST. Type: string (or Expression with resultType string).
     */
    requestMethod?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'RestSink'.
     */
    type: "RestSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
}

/**
 * A copy activity Rest service source.
 */
export interface RestSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: key value pairs (value should be string type).
     */
    additionalColumns?: any;
    /**
     * The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string).
     */
    additionalHeaders?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:01:40. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    httpRequestTimeout?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * The pagination rules to compose next page requests. Type: string (or Expression with resultType string).
     */
    paginationRules?: any;
    /**
     * The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string).
     */
    requestBody?: any;
    /**
     * The time to await before sending next page request. 
     */
    requestInterval?: any;
    /**
     * The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string).
     */
    requestMethod?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'RestSource'.
     */
    type: "RestSource";
}

/**
 * Execution policy for an activity.
 */
export interface RetryPolicyResponse {
    /**
     * Maximum ordinary retry attempts. Default is 0. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    count?: any;
    /**
     * Interval between retries in seconds. Default is 30.
     */
    intervalInSeconds?: number;
}

/**
 * SSIS access credential.
 */
export interface SSISAccessCredentialResponse {
    /**
     * Domain for windows authentication. Type: string (or Expression with resultType string).
     */
    domain: any;
    /**
     * Password for windows authentication.
     */
    password: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * UseName for windows authentication. Type: string (or Expression with resultType string).
     */
    userName: any;
}

/**
 * SSIS embedded child package.
 */
export interface SSISChildPackageResponse {
    /**
     * Content for embedded child package. Type: string (or Expression with resultType string).
     */
    packageContent: any;
    /**
     * Last modified date for embedded child package.
     */
    packageLastModifiedDate?: string;
    /**
     * Name for embedded child package.
     */
    packageName?: string;
    /**
     * Path for embedded child package. Type: string (or Expression with resultType string).
     */
    packagePath: any;
}

/**
 * SSIS package execution credential.
 */
export interface SSISExecutionCredentialResponse {
    /**
     * Domain for windows authentication. Type: string (or Expression with resultType string).
     */
    domain: any;
    /**
     * Password for windows authentication.
     */
    password: SecureStringResponse;
    /**
     * UseName for windows authentication. Type: string (or Expression with resultType string).
     */
    userName: any;
}

/**
 * SSIS execution parameter.
 */
export interface SSISExecutionParameterResponse {
    /**
     * SSIS package execution parameter value. Type: string (or Expression with resultType string).
     */
    value: any;
}

/**
 * SSIS package execution log location
 */
export interface SSISLogLocationResponse {
    /**
     * The package execution log access credential.
     */
    accessCredential?: SSISAccessCredentialResponse;
    /**
     * The SSIS package execution log path. Type: string (or Expression with resultType string).
     */
    logPath: any;
    /**
     * Specifies the interval to refresh log. The default interval is 5 minutes. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    logRefreshInterval?: any;
    /**
     * The type of SSIS log location.
     */
    type: string;
}

/**
 * SSIS package location.
 */
export interface SSISPackageLocationResponse {
    /**
     * The package access credential.
     */
    accessCredential?: SSISAccessCredentialResponse;
    /**
     * The embedded child package list.
     */
    childPackages?: SSISChildPackageResponse[];
    /**
     * The configuration file access credential.
     */
    configurationAccessCredential?: SSISAccessCredentialResponse;
    /**
     * The configuration file of the package execution. Type: string (or Expression with resultType string).
     */
    configurationPath?: any;
    /**
     * The embedded package content. Type: string (or Expression with resultType string).
     */
    packageContent?: any;
    /**
     * The embedded package last modified date.
     */
    packageLastModifiedDate?: string;
    /**
     * The package name.
     */
    packageName?: string;
    /**
     * Password of the package.
     */
    packagePassword?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The SSIS package path. Type: string (or Expression with resultType string).
     */
    packagePath?: any;
    /**
     * The type of SSIS package location.
     */
    type?: string;
}

/**
 * SSIS property override.
 */
export interface SSISPropertyOverrideResponse {
    /**
     * Whether SSIS package property override value is sensitive data. Value will be encrypted in SSISDB if it is true
     */
    isSensitive?: boolean;
    /**
     * SSIS package property override value. Type: string (or Expression with resultType string).
     */
    value: any;
}

/**
 * Linked service for Salesforce.
 */
export interface SalesforceLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The Salesforce API version used in ADF. Type: string (or Expression with resultType string).
     */
    apiVersion?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The URL of Salesforce instance. Default is 'https://login.salesforce.com'. To copy data from sandbox, specify 'https://test.salesforce.com'. To copy data from custom domain, specify, for example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string).
     */
    environmentUrl?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The password for Basic authentication of the Salesforce instance.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The security token is optional to remotely access Salesforce instance.
     */
    securityToken?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Type of linked service.
     * Expected value is 'Salesforce'.
     */
    type: "Salesforce";
    /**
     * The username for Basic authentication of the Salesforce instance. Type: string (or Expression with resultType string).
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Salesforce Marketing Cloud linked service.
 */
export interface SalesforceMarketingCloudLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The client ID associated with the Salesforce Marketing Cloud application. Type: string (or Expression with resultType string).
     */
    clientId?: any;
    /**
     * The client secret associated with the Salesforce Marketing Cloud application. Type: string (or Expression with resultType string).
     */
    clientSecret?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Properties used to connect to Salesforce Marketing Cloud. It is mutually exclusive with any other properties in the linked service. Type: object.
     */
    connectionProperties?: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Type of linked service.
     * Expected value is 'SalesforceMarketingCloud'.
     */
    type: "SalesforceMarketingCloud";
    /**
     * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean).
     */
    useEncryptedEndpoints?: any;
    /**
     * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).
     */
    useHostVerification?: any;
    /**
     * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).
     */
    usePeerVerification?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Salesforce Marketing Cloud dataset.
 */
export interface SalesforceMarketingCloudObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'SalesforceMarketingCloudObject'.
     */
    type: "SalesforceMarketingCloudObject";
}

/**
 * A copy activity Salesforce Marketing Cloud source.
 */
export interface SalesforceMarketingCloudSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'SalesforceMarketingCloudSource'.
     */
    type: "SalesforceMarketingCloudSource";
}

/**
 * The Salesforce object dataset.
 */
export interface SalesforceObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * The Salesforce object API name. Type: string (or Expression with resultType string).
     */
    objectApiName?: any;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'SalesforceObject'.
     */
    type: "SalesforceObject";
}

/**
 * Linked service for Salesforce Service Cloud.
 */
export interface SalesforceServiceCloudLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The Salesforce API version used in ADF. Type: string (or Expression with resultType string).
     */
    apiVersion?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The URL of Salesforce Service Cloud instance. Default is 'https://login.salesforce.com'. To copy data from sandbox, specify 'https://test.salesforce.com'. To copy data from custom domain, specify, for example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string).
     */
    environmentUrl?: any;
    /**
     * Extended properties appended to the connection string. Type: string (or Expression with resultType string).
     */
    extendedProperties?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The password for Basic authentication of the Salesforce instance.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The security token is optional to remotely access Salesforce instance.
     */
    securityToken?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Type of linked service.
     * Expected value is 'SalesforceServiceCloud'.
     */
    type: "SalesforceServiceCloud";
    /**
     * The username for Basic authentication of the Salesforce instance. Type: string (or Expression with resultType string).
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The Salesforce Service Cloud object dataset.
 */
export interface SalesforceServiceCloudObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * The Salesforce Service Cloud object API name. Type: string (or Expression with resultType string).
     */
    objectApiName?: any;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'SalesforceServiceCloudObject'.
     */
    type: "SalesforceServiceCloudObject";
}

/**
 * A copy activity Salesforce Service Cloud sink.
 */
export interface SalesforceServiceCloudSinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The name of the external ID field for upsert operation. Default value is 'Id' column. Type: string (or Expression with resultType string).
     */
    externalIdFieldName?: any;
    /**
     * The flag indicating whether or not to ignore null values from input dataset (except key fields) during write operation. Default value is false. If set it to true, it means ADF will leave the data in the destination object unchanged when doing upsert/update operation and insert defined default value when doing insert operation, versus ADF will update the data in the destination object to NULL when doing upsert/update operation and insert NULL value when doing insert operation. Type: boolean (or Expression with resultType boolean).
     */
    ignoreNullValues?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'SalesforceServiceCloudSink'.
     */
    type: "SalesforceServiceCloudSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
    /**
     * The write behavior for the operation. Default is Insert.
     */
    writeBehavior?: string;
}

/**
 * A copy activity Salesforce Service Cloud source.
 */
export interface SalesforceServiceCloudSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Database query. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * The read behavior for the operation. Default is Query. Allowed values: Query/QueryAll. Type: string (or Expression with resultType string).
     */
    readBehavior?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'SalesforceServiceCloudSource'.
     */
    type: "SalesforceServiceCloudSource";
}

/**
 * Linked service for Salesforce Service Cloud V2.
 */
export interface SalesforceServiceCloudV2LinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The Salesforce API version used in ADF. The version must be larger than or equal to 47.0 which is required by Salesforce BULK API 2.0. Type: string (or Expression with resultType string).
     */
    apiVersion?: any;
    /**
     * The authentication type to be used to connect to the Salesforce. Currently, we only support OAuth2ClientCredentials, it is also the default value
     */
    authenticationType?: any;
    /**
     * The client Id for OAuth 2.0 Client Credentials Flow authentication of the Salesforce instance. Type: string (or Expression with resultType string).
     */
    clientId?: any;
    /**
     * The client secret for OAuth 2.0 Client Credentials Flow authentication of the Salesforce instance.
     */
    clientSecret?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The URL of Salesforce Service Cloud instance. For example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string).
     */
    environmentUrl?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Type of linked service.
     * Expected value is 'SalesforceServiceCloudV2'.
     */
    type: "SalesforceServiceCloudV2";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The Salesforce Service Cloud V2 object dataset.
 */
export interface SalesforceServiceCloudV2ObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * The Salesforce Service Cloud V2 object API name. Type: string (or Expression with resultType string).
     */
    objectApiName?: any;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The Salesforce Service Cloud V2 reportId. Type: string (or Expression with resultType string).
     */
    reportId?: any;
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'SalesforceServiceCloudV2Object'.
     */
    type: "SalesforceServiceCloudV2Object";
}

/**
 * A copy activity Salesforce Service Cloud V2 sink.
 */
export interface SalesforceServiceCloudV2SinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The name of the external ID field for upsert operation. Default value is 'Id' column. Type: string (or Expression with resultType string).
     */
    externalIdFieldName?: any;
    /**
     * The flag indicating whether or not to ignore null values from input dataset (except key fields) during write operation. Default value is false. If set it to true, it means ADF will leave the data in the destination object unchanged when doing upsert/update operation and insert defined default value when doing insert operation, versus ADF will update the data in the destination object to NULL when doing upsert/update operation and insert NULL value when doing insert operation. Type: boolean (or Expression with resultType boolean).
     */
    ignoreNullValues?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'SalesforceServiceCloudV2Sink'.
     */
    type: "SalesforceServiceCloudV2Sink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
    /**
     * The write behavior for the operation. Default is Insert.
     */
    writeBehavior?: string;
}

/**
 * A copy activity Salesforce Service Cloud V2 source.
 */
export interface SalesforceServiceCloudV2SourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * This property control whether query result contains Deleted objects. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    includeDeletedObjects?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * You can only use Salesforce Object Query Language (SOQL) query with limitations. For SOQL limitations, see this article: https://developer.salesforce.com/docs/atlas.en-us.api_asynch.meta/api_asynch/queries.htm#SOQL%20Considerations. If query is not specified, all the data of the Salesforce object specified in ObjectApiName/reportId in dataset will be retrieved. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Deprecating, please use 'query' property instead. Type: string (or Expression with resultType string).
     */
    sOQLQuery?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'SalesforceServiceCloudV2Source'.
     */
    type: "SalesforceServiceCloudV2Source";
}

/**
 * A copy activity Salesforce sink.
 */
export interface SalesforceSinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The name of the external ID field for upsert operation. Default value is 'Id' column. Type: string (or Expression with resultType string).
     */
    externalIdFieldName?: any;
    /**
     * The flag indicating whether or not to ignore null values from input dataset (except key fields) during write operation. Default value is false. If set it to true, it means ADF will leave the data in the destination object unchanged when doing upsert/update operation and insert defined default value when doing insert operation, versus ADF will update the data in the destination object to NULL when doing upsert/update operation and insert NULL value when doing insert operation. Type: boolean (or Expression with resultType boolean).
     */
    ignoreNullValues?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'SalesforceSink'.
     */
    type: "SalesforceSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
    /**
     * The write behavior for the operation. Default is Insert.
     */
    writeBehavior?: string;
}

/**
 * A copy activity Salesforce source.
 */
export interface SalesforceSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Database query. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * The read behavior for the operation. Default is Query. Allowed values: Query/QueryAll. Type: string (or Expression with resultType string).
     */
    readBehavior?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'SalesforceSource'.
     */
    type: "SalesforceSource";
}

/**
 * Linked service for Salesforce V2.
 */
export interface SalesforceV2LinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The Salesforce API version used in ADF. The version must be larger than or equal to 47.0 which is required by Salesforce BULK API 2.0. Type: string (or Expression with resultType string).
     */
    apiVersion?: any;
    /**
     * The authentication type to be used to connect to the Salesforce. Currently, we only support OAuth2ClientCredentials, it is also the default value
     */
    authenticationType?: any;
    /**
     * The client Id for OAuth 2.0 Client Credentials Flow authentication of the Salesforce instance. Type: string (or Expression with resultType string).
     */
    clientId?: any;
    /**
     * The client secret for OAuth 2.0 Client Credentials Flow authentication of the Salesforce instance.
     */
    clientSecret?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The URL of Salesforce instance. For example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string).
     */
    environmentUrl?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Type of linked service.
     * Expected value is 'SalesforceV2'.
     */
    type: "SalesforceV2";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The Salesforce V2 object dataset.
 */
export interface SalesforceV2ObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * The Salesforce V2 object API name. Type: string (or Expression with resultType string).
     */
    objectApiName?: any;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The Salesforce V2 report Id. Type: string (or Expression with resultType string).
     */
    reportId?: any;
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'SalesforceV2Object'.
     */
    type: "SalesforceV2Object";
}

/**
 * A copy activity Salesforce V2 sink.
 */
export interface SalesforceV2SinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The name of the external ID field for upsert operation. Default value is 'Id' column. Type: string (or Expression with resultType string).
     */
    externalIdFieldName?: any;
    /**
     * The flag indicating whether or not to ignore null values from input dataset (except key fields) during write operation. Default value is false. If set it to true, it means ADF will leave the data in the destination object unchanged when doing upsert/update operation and insert defined default value when doing insert operation, versus ADF will update the data in the destination object to NULL when doing upsert/update operation and insert NULL value when doing insert operation. Type: boolean (or Expression with resultType boolean).
     */
    ignoreNullValues?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'SalesforceV2Sink'.
     */
    type: "SalesforceV2Sink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
    /**
     * The write behavior for the operation. Default is Insert.
     */
    writeBehavior?: string;
}

/**
 * A copy activity Salesforce V2 source.
 */
export interface SalesforceV2SourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * This property control whether query result contains Deleted objects. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    includeDeletedObjects?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Page size for each http request, too large pageSize will caused timeout, default 300,000. Type: integer (or Expression with resultType integer).
     */
    pageSize?: any;
    /**
     * You can only use Salesforce Object Query Language (SOQL) query with limitations. For SOQL limitations, see this article: https://developer.salesforce.com/docs/atlas.en-us.api_asynch.meta/api_asynch/queries.htm#SOQL%20Considerations. If query is not specified, all the data of the Salesforce object specified in ObjectApiName/reportId in dataset will be retrieved. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Deprecating, please use 'query' property instead. Type: string (or Expression with resultType string).
     */
    sOQLQuery?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'SalesforceV2Source'.
     */
    type: "SalesforceV2Source";
}

/**
 * SAP Business Warehouse Linked Service.
 */
export interface SapBWLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * Client ID of the client on the BW system. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string).
     */
    clientId: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Password to access the SAP BW server.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Host name of the SAP BW instance. Type: string (or Expression with resultType string).
     */
    server: any;
    /**
     * System number of the BW system. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string).
     */
    systemNumber: any;
    /**
     * Type of linked service.
     * Expected value is 'SapBW'.
     */
    type: "SapBW";
    /**
     * Username to access the SAP BW server. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The SAP BW cube dataset.
 */
export interface SapBwCubeDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'SapBwCube'.
     */
    type: "SapBwCube";
}

/**
 * A copy activity source for SapBW server via MDX.
 */
export interface SapBwSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * MDX query. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'SapBwSource'.
     */
    type: "SapBwSource";
}

/**
 * Linked service for SAP Cloud for Customer.
 */
export interface SapCloudForCustomerLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Either encryptedCredential or username/password must be provided. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The password for Basic authentication.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Type of linked service.
     * Expected value is 'SapCloudForCustomer'.
     */
    type: "SapCloudForCustomer";
    /**
     * The URL of SAP Cloud for Customer OData API. For example, '[https://[tenantname].crm.ondemand.com/sap/c4c/odata/v1]'. Type: string (or Expression with resultType string).
     */
    url: any;
    /**
     * The username for Basic authentication. Type: string (or Expression with resultType string).
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The path of the SAP Cloud for Customer OData entity.
 */
export interface SapCloudForCustomerResourceDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The path of the SAP Cloud for Customer OData entity. Type: string (or Expression with resultType string).
     */
    path: any;
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'SapCloudForCustomerResource'.
     */
    type: "SapCloudForCustomerResource";
}

/**
 * A copy activity SAP Cloud for Customer sink.
 */
export interface SapCloudForCustomerSinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    httpRequestTimeout?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'SapCloudForCustomerSink'.
     */
    type: "SapCloudForCustomerSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
    /**
     * The write behavior for the operation. Default is 'Insert'.
     */
    writeBehavior?: string;
}

/**
 * A copy activity source for SAP Cloud for Customer source.
 */
export interface SapCloudForCustomerSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    httpRequestTimeout?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * SAP Cloud for Customer OData query. For example, "$top=1". Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'SapCloudForCustomerSource'.
     */
    type: "SapCloudForCustomerSource";
}

/**
 * Linked service for SAP ERP Central Component(SAP ECC).
 */
export interface SapEccLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Either encryptedCredential or username/password must be provided. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The password for Basic authentication.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Type of linked service.
     * Expected value is 'SapEcc'.
     */
    type: "SapEcc";
    /**
     * The URL of SAP ECC OData API. For example, '[https://hostname:port/sap/opu/odata/sap/servicename/]'. Type: string (or Expression with resultType string).
     */
    url: any;
    /**
     * The username for Basic authentication. Type: string (or Expression with resultType string).
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The path of the SAP ECC OData entity.
 */
export interface SapEccResourceDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The path of the SAP ECC OData entity. Type: string (or Expression with resultType string).
     */
    path: any;
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'SapEccResource'.
     */
    type: "SapEccResource";
}

/**
 * A copy activity source for SAP ECC source.
 */
export interface SapEccSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    httpRequestTimeout?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * SAP ECC OData query. For example, "$top=1". Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'SapEccSource'.
     */
    type: "SapEccSource";
}

/**
 * SAP HANA Linked Service.
 */
export interface SapHanaLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The authentication type to be used to connect to the SAP HANA server.
     */
    authenticationType?: string;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * SAP HANA ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Password to access the SAP HANA server.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Host name of the SAP HANA server. Type: string (or Expression with resultType string).
     */
    server?: any;
    /**
     * Type of linked service.
     * Expected value is 'SapHana'.
     */
    type: "SapHana";
    /**
     * Username to access the SAP HANA server. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The settings that will be leveraged for SAP HANA source partitioning.
 */
export interface SapHanaPartitionSettingsResponse {
    /**
     * The name of the column that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
     */
    partitionColumnName?: any;
}

/**
 * A copy activity source for SAP HANA source.
 */
export interface SapHanaSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * The packet size of data read from SAP HANA. Type: integer(or Expression with resultType integer).
     */
    packetSize?: any;
    /**
     * The partition mechanism that will be used for SAP HANA read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "SapHanaDynamicRange". 
     */
    partitionOption?: any;
    /**
     * The settings that will be leveraged for SAP HANA source partitioning.
     */
    partitionSettings?: SapHanaPartitionSettingsResponse;
    /**
     * SAP HANA Sql query. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'SapHanaSource'.
     */
    type: "SapHanaSource";
}

/**
 * SAP HANA Table properties.
 */
export interface SapHanaTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name of SAP HANA. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * Type of dataset.
     * Expected value is 'SapHanaTable'.
     */
    type: "SapHanaTable";
}

/**
 * SAP ODP Linked Service.
 */
export interface SapOdpLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * Client ID of the client on the SAP system where the table is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string).
     */
    clientId?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Language of the SAP system where the table is located. The default value is EN. Type: string (or Expression with resultType string).
     */
    language?: any;
    /**
     * The Logon Group for the SAP System. Type: string (or Expression with resultType string).
     */
    logonGroup?: any;
    /**
     * The hostname of the SAP Message Server. Type: string (or Expression with resultType string).
     */
    messageServer?: any;
    /**
     * The service name or port number of the Message Server. Type: string (or Expression with resultType string).
     */
    messageServerService?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Password to access the SAP server where the table is located.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Host name of the SAP instance where the table is located. Type: string (or Expression with resultType string).
     */
    server?: any;
    /**
     * External security product's library to access the SAP server where the table is located. Type: string (or Expression with resultType string).
     */
    sncLibraryPath?: any;
    /**
     * SNC activation flag (Boolean) to access the SAP server where the table is located. Type: boolean (or Expression with resultType boolean).
     */
    sncMode?: any;
    /**
     * Initiator's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string).
     */
    sncMyName?: any;
    /**
     * Communication partner's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string).
     */
    sncPartnerName?: any;
    /**
     * SNC Quality of Protection. Allowed value include: 1, 2, 3, 8, 9. Type: string (or Expression with resultType string).
     */
    sncQop?: any;
    /**
     * The subscriber name. Type: string (or Expression with resultType string).
     */
    subscriberName?: any;
    /**
     * SystemID of the SAP system where the table is located. Type: string (or Expression with resultType string).
     */
    systemId?: any;
    /**
     * System number of the SAP system where the table is located. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string).
     */
    systemNumber?: any;
    /**
     * Type of linked service.
     * Expected value is 'SapOdp'.
     */
    type: "SapOdp";
    /**
     * Username to access the SAP server where the table is located. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
    /**
     * SNC X509 certificate file path. Type: string (or Expression with resultType string).
     */
    x509CertificatePath?: any;
}

/**
 * SAP ODP Resource properties.
 */
export interface SapOdpResourceDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * The context of the SAP ODP Object. Type: string (or Expression with resultType string).
     */
    context: any;
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * The name of the SAP ODP Object. Type: string (or Expression with resultType string).
     */
    objectName: any;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'SapOdpResource'.
     */
    type: "SapOdpResource";
}

/**
 * A copy activity source for SAP ODP source.
 */
export interface SapOdpSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The extraction mode. Allowed value include: Full, Delta and Recovery. The default value is Full. Type: string (or Expression with resultType string).
     */
    extractionMode?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Specifies the columns to be selected from source data. Type: array of objects(projection) (or Expression with resultType array of objects).
     */
    projection?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Specifies the selection conditions from source data. Type: array of objects(selection) (or Expression with resultType array of objects).
     */
    selection?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * The subscriber process to manage the delta process. Type: string (or Expression with resultType string).
     */
    subscriberProcess?: any;
    /**
     * Copy source type.
     * Expected value is 'SapOdpSource'.
     */
    type: "SapOdpSource";
}

/**
 * SAP Business Warehouse Open Hub Destination Linked Service.
 */
export interface SapOpenHubLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * Client ID of the client on the BW system where the open hub destination is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string).
     */
    clientId?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Language of the BW system where the open hub destination is located. The default value is EN. Type: string (or Expression with resultType string).
     */
    language?: any;
    /**
     * The Logon Group for the SAP System. Type: string (or Expression with resultType string).
     */
    logonGroup?: any;
    /**
     * The hostname of the SAP Message Server. Type: string (or Expression with resultType string).
     */
    messageServer?: any;
    /**
     * The service name or port number of the Message Server. Type: string (or Expression with resultType string).
     */
    messageServerService?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Password to access the SAP BW server where the open hub destination is located.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Host name of the SAP BW instance where the open hub destination is located. Type: string (or Expression with resultType string).
     */
    server?: any;
    /**
     * SystemID of the SAP system where the table is located. Type: string (or Expression with resultType string).
     */
    systemId?: any;
    /**
     * System number of the BW system where the open hub destination is located. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string).
     */
    systemNumber?: any;
    /**
     * Type of linked service.
     * Expected value is 'SapOpenHub'.
     */
    type: "SapOpenHub";
    /**
     * Username to access the SAP BW server where the open hub destination is located. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity source for SAP Business Warehouse Open Hub Destination source.
 */
export interface SapOpenHubSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * The ID of request for delta loading. Once it is set, only data with requestId larger than the value of this property will be retrieved. The default value is 0. Type: integer (or Expression with resultType integer ).
     */
    baseRequestId?: any;
    /**
     * Specifies the custom RFC function module that will be used to read data from SAP Table. Type: string (or Expression with resultType string).
     */
    customRfcReadTableFunctionModule?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Whether to exclude the records of the last request. The default value is true. Type: boolean (or Expression with resultType boolean).
     */
    excludeLastRequest?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * The single character that will be used as delimiter passed to SAP RFC as well as splitting the output data retrieved. Type: string (or Expression with resultType string).
     */
    sapDataColumnDelimiter?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'SapOpenHubSource'.
     */
    type: "SapOpenHubSource";
}

/**
 * Sap Business Warehouse Open Hub Destination Table properties.
 */
export interface SapOpenHubTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * The ID of request for delta loading. Once it is set, only data with requestId larger than the value of this property will be retrieved. The default value is 0. Type: integer (or Expression with resultType integer ).
     */
    baseRequestId?: any;
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * Whether to exclude the records of the last request. The default value is true. Type: boolean (or Expression with resultType boolean).
     */
    excludeLastRequest?: any;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * The name of the Open Hub Destination with destination type as Database Table. Type: string (or Expression with resultType string).
     */
    openHubDestinationName: any;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'SapOpenHubTable'.
     */
    type: "SapOpenHubTable";
}

/**
 * SAP Table Linked Service.
 */
export interface SapTableLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * Client ID of the client on the SAP system where the table is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string).
     */
    clientId?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Language of the SAP system where the table is located. The default value is EN. Type: string (or Expression with resultType string).
     */
    language?: any;
    /**
     * The Logon Group for the SAP System. Type: string (or Expression with resultType string).
     */
    logonGroup?: any;
    /**
     * The hostname of the SAP Message Server. Type: string (or Expression with resultType string).
     */
    messageServer?: any;
    /**
     * The service name or port number of the Message Server. Type: string (or Expression with resultType string).
     */
    messageServerService?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Password to access the SAP server where the table is located.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Host name of the SAP instance where the table is located. Type: string (or Expression with resultType string).
     */
    server?: any;
    /**
     * External security product's library to access the SAP server where the table is located. Type: string (or Expression with resultType string).
     */
    sncLibraryPath?: any;
    /**
     * SNC activation flag (Boolean) to access the SAP server where the table is located. Type: boolean (or Expression with resultType boolean).
     */
    sncMode?: any;
    /**
     * Initiator's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string).
     */
    sncMyName?: any;
    /**
     * Communication partner's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string).
     */
    sncPartnerName?: any;
    /**
     * SNC Quality of Protection. Allowed value include: 1, 2, 3, 8, 9. Type: string (or Expression with resultType string).
     */
    sncQop?: any;
    /**
     * SystemID of the SAP system where the table is located. Type: string (or Expression with resultType string).
     */
    systemId?: any;
    /**
     * System number of the SAP system where the table is located. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string).
     */
    systemNumber?: any;
    /**
     * Type of linked service.
     * Expected value is 'SapTable'.
     */
    type: "SapTable";
    /**
     * Username to access the SAP server where the table is located. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The settings that will be leveraged for SAP table source partitioning.
 */
export interface SapTablePartitionSettingsResponse {
    /**
     * The maximum value of partitions the table will be split into. Type: integer (or Expression with resultType string).
     */
    maxPartitionsNumber?: any;
    /**
     * The name of the column that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
     */
    partitionColumnName?: any;
    /**
     * The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
     */
    partitionLowerBound?: any;
    /**
     * The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
     */
    partitionUpperBound?: any;
}

/**
 * SAP Table Resource properties.
 */
export interface SapTableResourceDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The name of the SAP Table. Type: string (or Expression with resultType string).
     */
    tableName: any;
    /**
     * Type of dataset.
     * Expected value is 'SapTableResource'.
     */
    type: "SapTableResource";
}

/**
 * A copy activity source for SAP Table source.
 */
export interface SapTableSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * Specifies the maximum number of rows that will be retrieved at a time when retrieving data from SAP Table. Type: integer (or Expression with resultType integer).
     */
    batchSize?: any;
    /**
     * Specifies the custom RFC function module that will be used to read data from SAP Table. Type: string (or Expression with resultType string).
     */
    customRfcReadTableFunctionModule?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * The partition mechanism that will be used for SAP table read in parallel. Possible values include: "None", "PartitionOnInt", "PartitionOnCalendarYear", "PartitionOnCalendarMonth", "PartitionOnCalendarDate", "PartitionOnTime".
     */
    partitionOption?: any;
    /**
     * The settings that will be leveraged for SAP table source partitioning.
     */
    partitionSettings?: SapTablePartitionSettingsResponse;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * The fields of the SAP table that will be retrieved. For example, column0, column1. Type: string (or Expression with resultType string).
     */
    rfcTableFields?: any;
    /**
     * The options for the filtering of the SAP Table. For example, COLUMN0 EQ SOME VALUE. Type: string (or Expression with resultType string).
     */
    rfcTableOptions?: any;
    /**
     * The number of rows to be retrieved. Type: integer(or Expression with resultType integer).
     */
    rowCount?: any;
    /**
     * The number of rows that will be skipped. Type: integer (or Expression with resultType integer).
     */
    rowSkips?: any;
    /**
     * The single character that will be used as delimiter passed to SAP RFC as well as splitting the output data retrieved. Type: string (or Expression with resultType string).
     */
    sapDataColumnDelimiter?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'SapTableSource'.
     */
    type: "SapTableSource";
}

/**
 * The workflow trigger recurrence.
 */
export interface ScheduleTriggerRecurrenceResponse {
    /**
     * The end time.
     */
    endTime?: string;
    /**
     * The frequency.
     */
    frequency?: string;
    /**
     * The interval.
     */
    interval?: number;
    /**
     * The recurrence schedule.
     */
    schedule?: RecurrenceScheduleResponse;
    /**
     * The start time.
     */
    startTime?: string;
    /**
     * The time zone.
     */
    timeZone?: string;
}

/**
 * Trigger that creates pipeline runs periodically, on schedule.
 */
export interface ScheduleTriggerResponse {
    /**
     * List of tags that can be used for describing the trigger.
     */
    annotations?: any[];
    /**
     * Trigger description.
     */
    description?: string;
    /**
     * Pipelines that need to be started.
     */
    pipelines?: TriggerPipelineReferenceResponse[];
    /**
     * Recurrence schedule configuration.
     */
    recurrence: ScheduleTriggerRecurrenceResponse;
    /**
     * Indicates if trigger is running or not. Updated when Start/Stop APIs are called on the Trigger.
     */
    runtimeState: string;
    /**
     * Trigger type.
     * Expected value is 'ScheduleTrigger'.
     */
    type: "ScheduleTrigger";
}

/**
 * Custom script action to run on HDI ondemand cluster once it's up.
 */
export interface ScriptActionResponse {
    /**
     * The user provided name of the script action.
     */
    name: string;
    /**
     * The parameters for the script action.
     */
    parameters?: string;
    /**
     * The node types on which the script action should be executed.
     */
    roles: any;
    /**
     * The URI for the script action.
     */
    uri: string;
}

/**
 * Parameters of a script block.
 */
export interface ScriptActivityParameterResponse {
    /**
     * The direction of the parameter.
     */
    direction?: string;
    /**
     * The name of the parameter. Type: string (or Expression with resultType string).
     */
    name?: any;
    /**
     * The size of the output direction parameter.
     */
    size?: number;
    /**
     * The type of the parameter.
     */
    type?: string;
    /**
     * The value of the parameter. Type: string (or Expression with resultType string).
     */
    value?: any;
}

/**
 * Script activity type.
 */
export interface ScriptActivityResponse {
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Log settings of script activity.
     */
    logSettings?: ScriptActivityTypePropertiesResponseLogSettings;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity policy.
     */
    policy?: ActivityPolicyResponse;
    /**
     * Enable to retrieve result sets from multiple SQL statements and the number of rows affected by the DML statement. Supported connector: SnowflakeV2. Type: boolean (or Expression with resultType boolean).
     */
    returnMultistatementResult?: any;
    /**
     * ScriptBlock execution timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    scriptBlockExecutionTimeout?: any;
    /**
     * Array of script blocks. Type: array.
     */
    scripts?: ScriptActivityScriptBlockResponse[];
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Type of activity.
     * Expected value is 'Script'.
     */
    type: "Script";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * Script block of scripts.
 */
export interface ScriptActivityScriptBlockResponse {
    /**
     * Array of script parameters. Type: array.
     */
    parameters?: ScriptActivityParameterResponse[];
    /**
     * The query text. Type: string (or Expression with resultType string).
     */
    text: any;
    /**
     * The type of the query. Please refer to the ScriptType for valid options. Type: string (or Expression with resultType string).
     */
    type: any;
}

/**
 * Log settings of script activity.
 */
export interface ScriptActivityTypePropertiesResponseLogSettings {
    /**
     * The destination of logs. Type: string.
     */
    logDestination: string;
    /**
     * Log location settings customer needs to provide when enabling log.
     */
    logLocationSettings?: LogLocationSettingsResponse;
}

/**
 * Execution policy for an activity that supports secure input and output.
 */
export interface SecureInputOutputPolicyResponse {
    /**
     * When set to true, Input from activity is considered as secure and will not be logged to monitoring.
     */
    secureInput?: boolean;
    /**
     * When set to true, Output from activity is considered as secure and will not be logged to monitoring.
     */
    secureOutput?: boolean;
}

/**
 * Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.
 */
export interface SecureStringResponse {
    /**
     * Type of the secret.
     * Expected value is 'SecureString'.
     */
    type: "SecureString";
    /**
     * Value of secure string.
     */
    value: string;
}

/**
 * Self referenced tumbling window trigger dependency.
 */
export interface SelfDependencyTumblingWindowTriggerReferenceResponse {
    /**
     * Timespan applied to the start time of a tumbling window when evaluating dependency.
     */
    offset: string;
    /**
     * The size of the window when evaluating the dependency. If undefined the frequency of the tumbling window will be used.
     */
    size?: string;
    /**
     * The type of dependency reference.
     * Expected value is 'SelfDependencyTumblingWindowTriggerReference'.
     */
    type: "SelfDependencyTumblingWindowTriggerReference";
}

/**
 * Properties of Self-hosted integration runtime node.
 */
export interface SelfHostedIntegrationRuntimeNodeResponse {
    /**
     * The integration runtime capabilities dictionary
     */
    capabilities: {[key: string]: string};
    /**
     * Maximum concurrent jobs on the integration runtime node.
     */
    concurrentJobsLimit: number;
    /**
     * The time at which the integration runtime will expire in ISO8601 format.
     */
    expiryTime: string;
    /**
     * URI for the host machine of the integration runtime.
     */
    hostServiceUri: string;
    /**
     * Indicates whether this node is the active dispatcher for integration runtime requests.
     */
    isActiveDispatcher: boolean;
    /**
     * The most recent time at which the integration runtime was connected in ISO8601 format.
     */
    lastConnectTime: string;
    /**
     * The last time for the integration runtime node update end.
     */
    lastEndUpdateTime: string;
    /**
     * The time the node last started up.
     */
    lastStartTime: string;
    /**
     * The last time for the integration runtime node update start.
     */
    lastStartUpdateTime: string;
    /**
     * The integration runtime node last stop time.
     */
    lastStopTime: string;
    /**
     * The result of the last integration runtime node update.
     */
    lastUpdateResult: string;
    /**
     * Machine name of the integration runtime node.
     */
    machineName: string;
    /**
     * The maximum concurrent jobs in this integration runtime.
     */
    maxConcurrentJobs: number;
    /**
     * Name of the integration runtime node.
     */
    nodeName: string;
    /**
     * The time at which the integration runtime node was registered in ISO8601 format.
     */
    registerTime: string;
    /**
     * Status of the integration runtime node.
     */
    status: string;
    /**
     * Version of the integration runtime node.
     */
    version: string;
    /**
     * Status of the integration runtime node version.
     */
    versionStatus: string;
}

/**
 * Self-hosted integration runtime.
 */
export interface SelfHostedIntegrationRuntimeResponse {
    /**
     * Integration runtime description.
     */
    description?: string;
    /**
     * The base definition of a linked integration runtime.
     */
    linkedInfo?: LinkedIntegrationRuntimeKeyAuthorizationResponse | LinkedIntegrationRuntimeRbacAuthorizationResponse;
    /**
     * An alternative option to ensure interactive authoring function when your self-hosted integration runtime is unable to establish a connection with Azure Relay.
     */
    selfContainedInteractiveAuthoringEnabled?: boolean;
    /**
     * The type of integration runtime.
     * Expected value is 'SelfHosted'.
     */
    type: "SelfHosted";
}

/**
 * Self-hosted integration runtime status.
 */
export interface SelfHostedIntegrationRuntimeStatusResponse {
    /**
     * Whether Self-hosted integration runtime auto update has been turned on.
     */
    autoUpdate: string;
    /**
     * The estimated time when the self-hosted integration runtime will be updated.
     */
    autoUpdateETA: string;
    /**
     * Object with additional information about integration runtime capabilities.
     */
    capabilities: {[key: string]: string};
    /**
     * The time at which the integration runtime was created, in ISO8601 format.
     */
    createTime: string;
    /**
     * The data factory name which the integration runtime belong to.
     */
    dataFactoryName: string;
    /**
     * It is used to set the encryption mode for node-node communication channel (when more than 2 self-hosted integration runtime nodes exist).
     */
    internalChannelEncryption: string;
    /**
     * The latest version on download center.
     */
    latestVersion: string;
    /**
     * The list of linked integration runtimes that are created to share with this integration runtime.
     */
    links?: LinkedIntegrationRuntimeResponse[];
    /**
     * The local time zone offset in hours.
     */
    localTimeZoneOffset: string;
    /**
     * The list of nodes for this integration runtime.
     */
    nodes?: SelfHostedIntegrationRuntimeNodeResponse[];
    /**
     * The version that the integration runtime is going to update to.
     */
    pushedVersion: string;
    /**
     * The date at which the integration runtime will be scheduled to update, in ISO8601 format.
     */
    scheduledUpdateDate: string;
    /**
     * An alternative option to ensure interactive authoring function when your self-hosted integration runtime is unable to establish a connection with Azure Relay.
     */
    selfContainedInteractiveAuthoringEnabled: boolean;
    /**
     * The URLs for the services used in integration runtime backend service.
     */
    serviceUrls: string[];
    /**
     * The state of integration runtime.
     */
    state: string;
    /**
     * The task queue id of the integration runtime.
     */
    taskQueueId: string;
    /**
     * The type of integration runtime.
     * Expected value is 'SelfHosted'.
     */
    type: "SelfHosted";
    /**
     * The time in the date scheduled by service to update the integration runtime, e.g., PT03H is 3 hours
     */
    updateDelayOffset: string;
    /**
     * Version of the integration runtime.
     */
    version: string;
    /**
     * Status of the integration runtime version.
     */
    versionStatus: string;
}

/**
 * ServiceNow server linked service.
 */
export interface ServiceNowLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The authentication type to use.
     */
    authenticationType: string;
    /**
     * The client id for OAuth2 authentication.
     */
    clientId?: any;
    /**
     * The client secret for OAuth2 authentication.
     */
    clientSecret?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The endpoint of the ServiceNow server. (i.e. <instance>.service-now.com)
     */
    endpoint: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The password corresponding to the user name for Basic and OAuth2 authentication.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Type of linked service.
     * Expected value is 'ServiceNow'.
     */
    type: "ServiceNow";
    /**
     * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
     */
    useEncryptedEndpoints?: any;
    /**
     * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
     */
    useHostVerification?: any;
    /**
     * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
     */
    usePeerVerification?: any;
    /**
     * The user name used to connect to the ServiceNow server for Basic and OAuth2 authentication.
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * ServiceNow server dataset.
 */
export interface ServiceNowObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'ServiceNowObject'.
     */
    type: "ServiceNowObject";
}

/**
 * A copy activity ServiceNow server source.
 */
export interface ServiceNowSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'ServiceNowSource'.
     */
    type: "ServiceNowSource";
}

/**
 * ServiceNowV2 server linked service.
 */
export interface ServiceNowV2LinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The authentication type to use.
     */
    authenticationType: string;
    /**
     * The client id for OAuth2 authentication.
     */
    clientId?: any;
    /**
     * The client secret for OAuth2 authentication.
     */
    clientSecret?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The endpoint of the ServiceNowV2 server. (i.e. <instance>.service-now.com)
     */
    endpoint: any;
    /**
     * GrantType for OAuth2 authentication. Default value is password.
     */
    grantType?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The password corresponding to the user name for Basic and OAuth2 authentication.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Type of linked service.
     * Expected value is 'ServiceNowV2'.
     */
    type: "ServiceNowV2";
    /**
     * The user name used to connect to the ServiceNowV2 server for Basic and OAuth2 authentication.
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * ServiceNowV2 server dataset.
 */
export interface ServiceNowV2ObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'ServiceNowV2Object'.
     */
    type: "ServiceNowV2Object";
    /**
     * Type of value copied from source.
     */
    valueType?: string;
}

/**
 * A copy activity ServiceNowV2 server source.
 */
export interface ServiceNowV2SourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Expression to filter data from source.
     */
    expression?: ExpressionV2Response;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Page size of the result. Type: integer (or Expression with resultType integer).
     */
    pageSize?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'ServiceNowV2Source'.
     */
    type: "ServiceNowV2Source";
}

/**
 * Service principal credential.
 */
export interface ServicePrincipalCredentialResponse {
    /**
     * List of tags that can be used for describing the Credential.
     */
    annotations?: any[];
    /**
     * Credential description.
     */
    description?: string;
    /**
     * The app ID of the service principal used to authenticate
     */
    servicePrincipalId?: any;
    /**
     * The key of the service principal used to authenticate.
     */
    servicePrincipalKey?: AzureKeyVaultSecretReferenceResponse;
    /**
     * The ID of the tenant to which the service principal belongs
     */
    tenant?: any;
    /**
     * Type of credential.
     * Expected value is 'ServicePrincipal'.
     */
    type: "ServicePrincipal";
}

/**
 * Set value for a Variable.
 */
export interface SetVariableActivityResponse {
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity policy.
     */
    policy?: SecureInputOutputPolicyResponse;
    /**
     * If set to true, it sets the pipeline run return value.
     */
    setSystemVariable?: boolean;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Type of activity.
     * Expected value is 'SetVariable'.
     */
    type: "SetVariable";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
    /**
     * Value to be set. Could be a static value or Expression.
     */
    value?: any;
    /**
     * Name of the variable whose value needs to be set.
     */
    variableName?: string;
}

/**
 * The location of SFTP dataset.
 */
export interface SftpLocationResponse {
    /**
     * Specify the file name of dataset. Type: string (or Expression with resultType string).
     */
    fileName?: any;
    /**
     * Specify the folder path of dataset. Type: string (or Expression with resultType string)
     */
    folderPath?: any;
    /**
     * Type of dataset storage location.
     * Expected value is 'SftpLocation'.
     */
    type: "SftpLocation";
}

/**
 * Sftp read settings.
 */
export interface SftpReadSettingsResponse {
    /**
     * Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    deleteFilesAfterCompletion?: any;
    /**
     * If true, disable parallel reading within each file. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableChunking?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Indicates whether to enable partition discovery. Type: boolean (or Expression with resultType boolean).
     */
    enablePartitionDiscovery?: any;
    /**
     * Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
     */
    fileListPath?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * The end of file's modified datetime. Type: string (or Expression with resultType string).
     */
    modifiedDatetimeEnd?: any;
    /**
     * The start of file's modified datetime. Type: string (or Expression with resultType string).
     */
    modifiedDatetimeStart?: any;
    /**
     * Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
     */
    partitionRootPath?: any;
    /**
     * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
     */
    recursive?: any;
    /**
     * The read setting type.
     * Expected value is 'SftpReadSettings'.
     */
    type: "SftpReadSettings";
    /**
     * Sftp wildcardFileName. Type: string (or Expression with resultType string).
     */
    wildcardFileName?: any;
    /**
     * Sftp wildcardFolderPath. Type: string (or Expression with resultType string).
     */
    wildcardFolderPath?: any;
}

/**
 * A linked service for an SSH File Transfer Protocol (SFTP) server. 
 */
export interface SftpServerLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The authentication type to be used to connect to the FTP server.
     */
    authenticationType?: string;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The SFTP server host name. Type: string (or Expression with resultType string).
     */
    host: any;
    /**
     * The host key finger-print of the SFTP server. When SkipHostKeyValidation is false, HostKeyFingerprint should be specified. Type: string (or Expression with resultType string).
     */
    hostKeyFingerprint?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The password to decrypt the SSH private key if the SSH private key is encrypted.
     */
    passPhrase?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Password to logon the SFTP server for Basic authentication.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The TCP port number that the SFTP server uses to listen for client connections. Default value is 22. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    port?: any;
    /**
     * Base64 encoded SSH private key content for SshPublicKey authentication. For on-premises copy with SshPublicKey authentication, either PrivateKeyPath or PrivateKeyContent should be specified. SSH private key should be OpenSSH format.
     */
    privateKeyContent?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The SSH private key file path for SshPublicKey authentication. Only valid for on-premises copy. For on-premises copy with SshPublicKey authentication, either PrivateKeyPath or PrivateKeyContent should be specified. SSH private key should be OpenSSH format. Type: string (or Expression with resultType string).
     */
    privateKeyPath?: any;
    /**
     * If true, skip the SSH host key validation. Default value is false. Type: boolean (or Expression with resultType boolean).
     */
    skipHostKeyValidation?: any;
    /**
     * Type of linked service.
     * Expected value is 'Sftp'.
     */
    type: "Sftp";
    /**
     * The username used to log on to the SFTP server. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Sftp write settings.
 */
export interface SftpWriteSettingsResponse {
    /**
     * The type of copy behavior for copy sink.
     */
    copyBehavior?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Specify the custom metadata to be added to sink data. Type: array of objects (or Expression with resultType array of objects).
     */
    metadata?: MetadataItemResponse[];
    /**
     * Specifies the timeout for writing each chunk to SFTP server. Default value: 01:00:00 (one hour). Type: string (or Expression with resultType string).
     */
    operationTimeout?: any;
    /**
     * The write setting type.
     * Expected value is 'SftpWriteSettings'.
     */
    type: "SftpWriteSettings";
    /**
     * Upload to temporary file(s) and rename. Disable this option if your SFTP server doesn't support rename operation. Type: boolean (or Expression with resultType boolean).
     */
    useTempFileRename?: any;
}

/**
 * SharePoint Online List linked service.
 */
export interface SharePointOnlineListLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
     */
    servicePrincipalCredentialType?: any;
    /**
     * Specify the base64 encoded certificate of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
     */
    servicePrincipalEmbeddedCert?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Specify the password of your certificate if your certificate has a password and you are using AadServicePrincipal authentication. Type: string (or Expression with resultType string).
     */
    servicePrincipalEmbeddedCertPassword?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The application (client) ID of your application registered in Azure Active Directory. Make sure to grant SharePoint site permission to this application. Type: string (or Expression with resultType string).
     */
    servicePrincipalId: any;
    /**
     * The client secret of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
     */
    servicePrincipalKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The URL of the SharePoint Online site. For example, https://contoso.sharepoint.com/sites/siteName. Type: string (or Expression with resultType string).
     */
    siteUrl: any;
    /**
     * The tenant ID under which your application resides. You can find it from Azure portal Active Directory overview page. Type: string (or Expression with resultType string).
     */
    tenantId: any;
    /**
     * Type of linked service.
     * Expected value is 'SharePointOnlineList'.
     */
    type: "SharePointOnlineList";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The sharepoint online list resource dataset.
 */
export interface SharePointOnlineListResourceDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * The name of the SharePoint Online list. Type: string (or Expression with resultType string).
     */
    listName?: any;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'SharePointOnlineListResource'.
     */
    type: "SharePointOnlineListResource";
}

/**
 * A copy activity source for sharePoint online list source.
 */
export interface SharePointOnlineListSourceResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The wait time to get a response from SharePoint Online. Default value is 5 minutes (00:05:00). Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    httpRequestTimeout?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * The OData query to filter the data in SharePoint Online list. For example, "$top=1". Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'SharePointOnlineListSource'.
     */
    type: "SharePointOnlineListSource";
}

/**
 * Shopify Service linked service.
 */
export interface ShopifyLinkedServiceResponse {
    /**
     * The API access token that can be used to access Shopify’s data. The token won't expire if it is offline mode.
     */
    accessToken?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The endpoint of the Shopify server. (i.e. mystore.myshopify.com)
     */
    host: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Type of linked service.
     * Expected value is 'Shopify'.
     */
    type: "Shopify";
    /**
     * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
     */
    useEncryptedEndpoints?: any;
    /**
     * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
     */
    useHostVerification?: any;
    /**
     * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
     */
    usePeerVerification?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Shopify Service dataset.
 */
export interface ShopifyObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'ShopifyObject'.
     */
    type: "ShopifyObject";
}

/**
 * A copy activity Shopify Service source.
 */
export interface ShopifySourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'ShopifySource'.
     */
    type: "ShopifySource";
}

/**
 * Skip error file.
 */
export interface SkipErrorFileResponse {
    /**
     * Skip if source/sink file changed by other concurrent write. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    dataInconsistency?: any;
    /**
     * Skip if file is deleted by other client during copy. Default is true. Type: boolean (or Expression with resultType boolean).
     */
    fileMissing?: any;
}

/**
 * Linked service for Smartsheet.
 */
export interface SmartsheetLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The api token for the Smartsheet source.
     */
    apiToken: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Type of linked service.
     * Expected value is 'Smartsheet'.
     */
    type: "Smartsheet";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The snowflake dataset.
 */
export interface SnowflakeDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name of the Snowflake database. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * Type of dataset.
     * Expected value is 'SnowflakeTable'.
     */
    type: "SnowflakeTable";
}

/**
 * Snowflake export command settings.
 */
export interface SnowflakeExportCopyCommandResponse {
    /**
     * Additional copy options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalCopyOptions": { "DATE_FORMAT": "MM/DD/YYYY", "TIME_FORMAT": "'HH24:MI:SS.FF'" }
     */
    additionalCopyOptions?: {[key: string]: any};
    /**
     * Additional format options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalFormatOptions": { "OVERWRITE": "TRUE", "MAX_FILE_SIZE": "'FALSE'" }
     */
    additionalFormatOptions?: {[key: string]: any};
    /**
     * The name of the snowflake storage integration to use for the copy operation. Type: string (or Expression with resultType string).
     */
    storageIntegration?: any;
    /**
     * The export setting type.
     * Expected value is 'SnowflakeExportCopyCommand'.
     */
    type: "SnowflakeExportCopyCommand";
}

/**
 * Snowflake import command settings.
 */
export interface SnowflakeImportCopyCommandResponse {
    /**
     * Additional copy options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalCopyOptions": { "DATE_FORMAT": "MM/DD/YYYY", "TIME_FORMAT": "'HH24:MI:SS.FF'" }
     */
    additionalCopyOptions?: {[key: string]: any};
    /**
     * Additional format options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalFormatOptions": { "FORCE": "TRUE", "LOAD_UNCERTAIN_FILES": "'FALSE'" }
     */
    additionalFormatOptions?: {[key: string]: any};
    /**
     * The name of the snowflake storage integration to use for the copy operation. Type: string (or Expression with resultType string).
     */
    storageIntegration?: any;
    /**
     * The import setting type.
     * Expected value is 'SnowflakeImportCopyCommand'.
     */
    type: "SnowflakeImportCopyCommand";
}

/**
 * Snowflake linked service.
 */
export interface SnowflakeLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The connection string of snowflake. Type: string, SecureString.
     */
    connectionString: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    password?: AzureKeyVaultSecretReferenceResponse;
    /**
     * Type of linked service.
     * Expected value is 'Snowflake'.
     */
    type: "Snowflake";
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity snowflake sink.
 */
export interface SnowflakeSinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Snowflake import settings.
     */
    importSettings?: SnowflakeImportCopyCommandResponse;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * SQL pre-copy script. Type: string (or Expression with resultType string).
     */
    preCopyScript?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'SnowflakeSink'.
     */
    type: "SnowflakeSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
}

/**
 * A copy activity snowflake source.
 */
export interface SnowflakeSourceResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Snowflake export settings.
     */
    exportSettings: SnowflakeExportCopyCommandResponse;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Snowflake Sql query. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'SnowflakeSource'.
     */
    type: "SnowflakeSource";
}

/**
 * The snowflake dataset.
 */
export interface SnowflakeV2DatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name of the Snowflake database. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * Type of dataset.
     * Expected value is 'SnowflakeV2Table'.
     */
    type: "SnowflakeV2Table";
}

/**
 * Snowflake linked service.
 */
export interface SnowflakeV2LinkedServiceResponse {
    /**
     * The account identifier of your Snowflake account, e.g. xy12345.east-us-2.azure
     */
    accountIdentifier: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The type used for authentication. Type: string.
     */
    authenticationType?: string;
    /**
     * The client ID of the application registered in Azure Active Directory for AADServicePrincipal authentication.
     */
    clientId?: any;
    /**
     * The Azure key vault secret reference of client secret for AADServicePrincipal authentication.
     */
    clientSecret?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The name of the Snowflake database.
     */
    database: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The host name of the Snowflake account. Type: string (or Expression with resultType string).
     */
    host?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The Azure key vault secret reference of privateKey for KeyPair auth.
     */
    privateKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The Azure key vault secret reference of private key password for KeyPair auth with encrypted private key.
     */
    privateKeyPassphrase?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The default access control role to use in the Snowflake session. Type: string (or Expression with resultType string).
     */
    role?: any;
    /**
     * Schema name for connection. Type: string (or Expression with resultType string).
     */
    schema?: any;
    /**
     * The scope of the application registered in Azure Active Directory for AADServicePrincipal authentication.
     */
    scope?: any;
    /**
     * The tenant ID of the application registered in Azure Active Directory for AADServicePrincipal authentication.
     */
    tenantId?: any;
    /**
     * Type of linked service.
     * Expected value is 'SnowflakeV2'.
     */
    type: "SnowflakeV2";
    /**
     * The name of the Snowflake user.
     */
    user?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
    /**
     * The name of the Snowflake warehouse.
     */
    warehouse: any;
}
/**
 * snowflakeV2LinkedServiceResponseProvideDefaults sets the appropriate defaults for SnowflakeV2LinkedServiceResponse
 */
export function snowflakeV2LinkedServiceResponseProvideDefaults(val: SnowflakeV2LinkedServiceResponse): SnowflakeV2LinkedServiceResponse {
    return {
        ...val,
        authenticationType: (val.authenticationType) ?? "Basic",
    };
}

/**
 * A copy activity snowflake sink.
 */
export interface SnowflakeV2SinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Snowflake import settings.
     */
    importSettings?: SnowflakeImportCopyCommandResponse;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * SQL pre-copy script. Type: string (or Expression with resultType string).
     */
    preCopyScript?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'SnowflakeV2Sink'.
     */
    type: "SnowflakeV2Sink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
}

/**
 * A copy activity snowflake source.
 */
export interface SnowflakeV2SourceResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Snowflake export settings.
     */
    exportSettings: SnowflakeExportCopyCommandResponse;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Snowflake Sql query. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'SnowflakeV2Source'.
     */
    type: "SnowflakeV2Source";
}

/**
 * Spark configuration reference.
 */
export interface SparkConfigurationParametrizationReferenceResponse {
    /**
     * Reference spark configuration name. Type: string (or Expression with resultType string).
     */
    referenceName: any;
    /**
     * Spark configuration reference type.
     */
    type: string;
}

/**
 * Spark Server linked service.
 */
export interface SparkLinkedServiceResponse {
    /**
     * Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
     */
    allowHostNameCNMismatch?: any;
    /**
     * Specifies whether to allow self-signed certificates from the server. The default value is false.
     */
    allowSelfSignedServerCert?: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The authentication method used to access the Spark server.
     */
    authenticationType: string;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * Specifies whether the connections to the server are encrypted using SSL. The default value is false.
     */
    enableSsl?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * IP address or host name of the Spark server
     */
    host: any;
    /**
     * The partial URL corresponding to the Spark server.
     */
    httpPath?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The password corresponding to the user name that you provided in the Username field
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The TCP port that the Spark server uses to listen for client connections.
     */
    port: any;
    /**
     * The type of Spark server.
     */
    serverType?: string;
    /**
     * The transport protocol to use in the Thrift layer.
     */
    thriftTransportProtocol?: string;
    /**
     * The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
     */
    trustedCertPath?: any;
    /**
     * Type of linked service.
     * Expected value is 'Spark'.
     */
    type: "Spark";
    /**
     * Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.
     */
    useSystemTrustStore?: any;
    /**
     * The user name that you use to access Spark Server.
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Spark Server dataset.
 */
export interface SparkObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name of the Spark. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * This property will be retired. Please consider using schema + table properties instead.
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'SparkObject'.
     */
    type: "SparkObject";
}

/**
 * A copy activity Spark Server source.
 */
export interface SparkSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'SparkSource'.
     */
    type: "SparkSource";
}

/**
 * Sql always encrypted properties.
 */
export interface SqlAlwaysEncryptedPropertiesResponse {
    /**
     * Sql always encrypted AKV authentication type. Type: string.
     */
    alwaysEncryptedAkvAuthType: string;
    /**
     * The credential reference containing authentication information.
     */
    credential?: CredentialReferenceResponse;
    /**
     * The client ID of the application in Azure Active Directory used for Azure Key Vault authentication. Type: string (or Expression with resultType string).
     */
    servicePrincipalId?: any;
    /**
     * The key of the service principal used to authenticate against Azure Key Vault.
     */
    servicePrincipalKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
}

/**
 * A copy activity SQL Data Warehouse sink.
 */
export interface SqlDWSinkResponse {
    /**
     * Indicates to use Copy Command to copy data into SQL Data Warehouse. Type: boolean (or Expression with resultType boolean).
     */
    allowCopyCommand?: any;
    /**
     * Indicates to use PolyBase to copy data into SQL Data Warehouse when applicable. Type: boolean (or Expression with resultType boolean).
     */
    allowPolyBase?: any;
    /**
     * Specifies Copy Command related settings when allowCopyCommand is true.
     */
    copyCommandSettings?: DWCopyCommandSettingsResponse;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Specifies PolyBase-related settings when allowPolyBase is true.
     */
    polyBaseSettings?: PolybaseSettingsResponse;
    /**
     * SQL pre-copy script. Type: string (or Expression with resultType string).
     */
    preCopyScript?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Whether to use table lock during bulk copy. Type: boolean (or Expression with resultType boolean).
     */
    sqlWriterUseTableLock?: any;
    /**
     * The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string).
     */
    tableOption?: any;
    /**
     * Copy sink type.
     * Expected value is 'SqlDWSink'.
     */
    type: "SqlDWSink";
    /**
     * SQL DW upsert settings.
     */
    upsertSettings?: SqlDWUpsertSettingsResponse;
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
    /**
     * Write behavior when copying data into azure SQL DW. Type: SqlDWWriteBehaviorEnum (or Expression with resultType SqlDWWriteBehaviorEnum)
     */
    writeBehavior?: any;
}

/**
 * A copy activity SQL Data Warehouse source.
 */
export interface SqlDWSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Specifies the transaction locking behavior for the SQL source. Allowed values: ReadCommitted/ReadUncommitted/RepeatableRead/Serializable/Snapshot. The default value is ReadCommitted. Type: string (or Expression with resultType string).
     */
    isolationLevel?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". Type: string (or Expression with resultType string).
     */
    partitionOption?: any;
    /**
     * The settings that will be leveraged for Sql source partitioning.
     */
    partitionSettings?: SqlPartitionSettingsResponse;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * SQL Data Warehouse reader query. Type: string (or Expression with resultType string).
     */
    sqlReaderQuery?: any;
    /**
     * Name of the stored procedure for a SQL Data Warehouse source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string).
     */
    sqlReaderStoredProcedureName?: any;
    /**
     * Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". Type: object (or Expression with resultType object), itemType: StoredProcedureParameter.
     */
    storedProcedureParameters?: any;
    /**
     * Copy source type.
     * Expected value is 'SqlDWSource'.
     */
    type: "SqlDWSource";
}

/**
 * Sql DW upsert option settings
 */
export interface SqlDWUpsertSettingsResponse {
    /**
     * Schema name for interim table. Type: string (or Expression with resultType string).
     */
    interimSchemaName?: any;
    /**
     * Key column names for unique row identification. Type: array of strings (or Expression with resultType array of strings).
     */
    keys?: any;
}

/**
 * A copy activity Azure SQL Managed Instance sink.
 */
export interface SqlMISinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * SQL pre-copy script. Type: string (or Expression with resultType string).
     */
    preCopyScript?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * SQL writer stored procedure name. Type: string (or Expression with resultType string).
     */
    sqlWriterStoredProcedureName?: any;
    /**
     * SQL writer table type. Type: string (or Expression with resultType string).
     */
    sqlWriterTableType?: any;
    /**
     * Whether to use table lock during bulk copy. Type: boolean (or Expression with resultType boolean).
     */
    sqlWriterUseTableLock?: any;
    /**
     * SQL stored procedure parameters.
     */
    storedProcedureParameters?: any;
    /**
     * The stored procedure parameter name of the table type. Type: string (or Expression with resultType string).
     */
    storedProcedureTableTypeParameterName?: any;
    /**
     * The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string).
     */
    tableOption?: any;
    /**
     * Copy sink type.
     * Expected value is 'SqlMISink'.
     */
    type: "SqlMISink";
    /**
     * SQL upsert settings.
     */
    upsertSettings?: SqlUpsertSettingsResponse;
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
    /**
     * White behavior when copying data into azure SQL MI. Type: string (or Expression with resultType string)
     */
    writeBehavior?: any;
}

/**
 * A copy activity Azure SQL Managed Instance source.
 */
export interface SqlMISourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Specifies the transaction locking behavior for the SQL source. Allowed values: ReadCommitted/ReadUncommitted/RepeatableRead/Serializable/Snapshot. The default value is ReadCommitted. Type: string (or Expression with resultType string).
     */
    isolationLevel?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". Type: string (or Expression with resultType string).
     */
    partitionOption?: any;
    /**
     * The settings that will be leveraged for Sql source partitioning.
     */
    partitionSettings?: SqlPartitionSettingsResponse;
    /**
     * Which additional types to produce.
     */
    produceAdditionalTypes?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * SQL reader query. Type: string (or Expression with resultType string).
     */
    sqlReaderQuery?: any;
    /**
     * Name of the stored procedure for a Azure SQL Managed Instance source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string).
     */
    sqlReaderStoredProcedureName?: any;
    /**
     * Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".
     */
    storedProcedureParameters?: any;
    /**
     * Copy source type.
     * Expected value is 'SqlMISource'.
     */
    type: "SqlMISource";
}

/**
 * The settings that will be leveraged for Sql source partitioning.
 */
export interface SqlPartitionSettingsResponse {
    /**
     * The name of the column in integer or datetime type that will be used for proceeding partitioning. If not specified, the primary key of the table is auto-detected and used as the partition column. Type: string (or Expression with resultType string).
     */
    partitionColumnName?: any;
    /**
     * The minimum value of the partition column for partition range splitting. This value is used to decide the partition stride, not for filtering the rows in table. All rows in the table or query result will be partitioned and copied. Type: string (or Expression with resultType string).
     */
    partitionLowerBound?: any;
    /**
     * The maximum value of the partition column for partition range splitting. This value is used to decide the partition stride, not for filtering the rows in table. All rows in the table or query result will be partitioned and copied. Type: string (or Expression with resultType string).
     */
    partitionUpperBound?: any;
}

/**
 * SQL Server linked service.
 */
export interface SqlServerLinkedServiceResponse {
    /**
     * Sql always encrypted properties.
     */
    alwaysEncryptedSettings?: SqlAlwaysEncryptedPropertiesResponse;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The application workload type when connecting to a server, used by recommended version. Possible values are ReadOnly and ReadWrite. Type: string (or Expression with resultType string).
     */
    applicationIntent?: any;
    /**
     * The type used for authentication. Type: string.
     */
    authenticationType?: string;
    /**
     * The default wait time (in seconds) before terminating the attempt to execute a command and generating an error, used by recommended version. Type: integer (or Expression with resultType integer).
     */
    commandTimeout?: any;
    /**
     * The number of re-connections attempted after identifying that there was an idle connection failure, used by recommended version. This must be an integer between 0 and 255. Type: integer (or Expression with resultType integer).
     */
    connectRetryCount?: any;
    /**
     * The amount of time (in seconds) between each re-connection attempt after identifying that there was an idle connection failure, used by recommended version. This must be an integer between 1 and 60. Type: integer (or Expression with resultType integer).
     */
    connectRetryInterval?: any;
    /**
     * The length of time (in seconds) to wait for a connection to the server before terminating the attempt and generating an error, used by recommended version. Type: integer (or Expression with resultType integer).
     */
    connectTimeout?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * The credential reference containing authentication information.
     */
    credential?: CredentialReferenceResponse;
    /**
     * The name of the database, used by recommended version. Type: string (or Expression with resultType string).
     */
    database?: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * Indicate whether TLS encryption is required for all data sent between the client and server, used by recommended version. Possible values are true/yes/mandatory, false/no/optional and strict. Type: string (or Expression with resultType string).
     */
    encrypt?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The name or address of the partner server to connect to if the primary server is down, used by recommended version. Type: string (or Expression with resultType string).
     */
    failoverPartner?: any;
    /**
     * The host name to use when validating the server certificate for the connection. When not specified, the server name from the Data Source is used for certificate validation, used by recommended version. Type: string (or Expression with resultType string).
     */
    hostNameInCertificate?: any;
    /**
     * Indicate whether User ID and Password are specified in the connection (when false) or whether the current Windows account credentials are used for authentication (when true), used by recommended version. Type: Boolean (or Expression with resultType boolean).
     */
    integratedSecurity?: any;
    /**
     * The minimum time, in seconds, for the connection to live in the connection pool before being destroyed, used by recommended version. Type: integer (or Expression with resultType integer).
     */
    loadBalanceTimeout?: any;
    /**
     * The maximum number of connections allowed in the connection pool for this specific connection string, used by recommended version. Type: integer (or Expression with resultType integer).
     */
    maxPoolSize?: any;
    /**
     * The minimum number of connections allowed in the connection pool for this specific connection string, used by recommended version. Type: integer (or Expression with resultType integer).
     */
    minPoolSize?: any;
    /**
     * If your application is connecting to an AlwaysOn availability group (AG) on different subnets, setting MultiSubnetFailover=true provides faster detection of and connection to the (currently) active server, used by recommended version. Type: Boolean (or Expression with resultType boolean).
     */
    multiSubnetFailover?: any;
    /**
     * When true, an application can maintain multiple active result sets (MARS). When false, an application must process or cancel all result sets from one batch before it can execute any other batch on that connection, used by recommended version. Type: Boolean (or Expression with resultType boolean).
     */
    multipleActiveResultSets?: any;
    /**
     * The size in bytes of the network packets used to communicate with an instance of server, used by recommended version. Type: integer (or Expression with resultType integer).
     */
    packetSize?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The on-premises Windows authentication password.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Indicate whether the connection will be pooled or explicitly opened every time that the connection is requested, used by recommended version. Type: Boolean (or Expression with resultType boolean).
     */
    pooling?: any;
    /**
     * The name or network address of the instance of SQL Server to which to connect, used by recommended version. Type: string (or Expression with resultType string).
     */
    server?: any;
    /**
     * Indicate whether the channel will be encrypted while bypassing walking the certificate chain to validate trust, used by recommended version. Type: Boolean (or Expression with resultType boolean).
     */
    trustServerCertificate?: any;
    /**
     * Type of linked service.
     * Expected value is 'SqlServer'.
     */
    type: "SqlServer";
    /**
     * The on-premises Windows authentication user name. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity SQL server sink.
 */
export interface SqlServerSinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * SQL pre-copy script. Type: string (or Expression with resultType string).
     */
    preCopyScript?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * SQL writer stored procedure name. Type: string (or Expression with resultType string).
     */
    sqlWriterStoredProcedureName?: any;
    /**
     * SQL writer table type. Type: string (or Expression with resultType string).
     */
    sqlWriterTableType?: any;
    /**
     * Whether to use table lock during bulk copy. Type: boolean (or Expression with resultType boolean).
     */
    sqlWriterUseTableLock?: any;
    /**
     * SQL stored procedure parameters.
     */
    storedProcedureParameters?: any;
    /**
     * The stored procedure parameter name of the table type. Type: string (or Expression with resultType string).
     */
    storedProcedureTableTypeParameterName?: any;
    /**
     * The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string).
     */
    tableOption?: any;
    /**
     * Copy sink type.
     * Expected value is 'SqlServerSink'.
     */
    type: "SqlServerSink";
    /**
     * SQL upsert settings.
     */
    upsertSettings?: SqlUpsertSettingsResponse;
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
    /**
     * Write behavior when copying data into sql server. Type: string (or Expression with resultType string).
     */
    writeBehavior?: any;
}

/**
 * A copy activity SQL server source.
 */
export interface SqlServerSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Specifies the transaction locking behavior for the SQL source. Allowed values: ReadCommitted/ReadUncommitted/RepeatableRead/Serializable/Snapshot. The default value is ReadCommitted. Type: string (or Expression with resultType string).
     */
    isolationLevel?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". Type: string (or Expression with resultType string).
     */
    partitionOption?: any;
    /**
     * The settings that will be leveraged for Sql source partitioning.
     */
    partitionSettings?: SqlPartitionSettingsResponse;
    /**
     * Which additional types to produce.
     */
    produceAdditionalTypes?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * SQL reader query. Type: string (or Expression with resultType string).
     */
    sqlReaderQuery?: any;
    /**
     * Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string).
     */
    sqlReaderStoredProcedureName?: any;
    /**
     * Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".
     */
    storedProcedureParameters?: any;
    /**
     * Copy source type.
     * Expected value is 'SqlServerSource'.
     */
    type: "SqlServerSource";
}

/**
 * SQL stored procedure activity type.
 */
export interface SqlServerStoredProcedureActivityResponse {
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity policy.
     */
    policy?: ActivityPolicyResponse;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Stored procedure name. Type: string (or Expression with resultType string).
     */
    storedProcedureName: any;
    /**
     * Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".
     */
    storedProcedureParameters?: any;
    /**
     * Type of activity.
     * Expected value is 'SqlServerStoredProcedure'.
     */
    type: "SqlServerStoredProcedure";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * The on-premises SQL Server dataset.
 */
export interface SqlServerTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name of the SQL Server dataset. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * This property will be retired. Please consider using schema + table properties instead.
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'SqlServerTable'.
     */
    type: "SqlServerTable";
}

/**
 * A copy activity SQL sink.
 */
export interface SqlSinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * SQL pre-copy script. Type: string (or Expression with resultType string).
     */
    preCopyScript?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * SQL writer stored procedure name. Type: string (or Expression with resultType string).
     */
    sqlWriterStoredProcedureName?: any;
    /**
     * SQL writer table type. Type: string (or Expression with resultType string).
     */
    sqlWriterTableType?: any;
    /**
     * Whether to use table lock during bulk copy. Type: boolean (or Expression with resultType boolean).
     */
    sqlWriterUseTableLock?: any;
    /**
     * SQL stored procedure parameters.
     */
    storedProcedureParameters?: any;
    /**
     * The stored procedure parameter name of the table type. Type: string (or Expression with resultType string).
     */
    storedProcedureTableTypeParameterName?: any;
    /**
     * The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string).
     */
    tableOption?: any;
    /**
     * Copy sink type.
     * Expected value is 'SqlSink'.
     */
    type: "SqlSink";
    /**
     * SQL upsert settings.
     */
    upsertSettings?: SqlUpsertSettingsResponse;
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
    /**
     * Write behavior when copying data into sql. Type: string (or Expression with resultType string).
     */
    writeBehavior?: any;
}

/**
 * A copy activity SQL source.
 */
export interface SqlSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Specifies the transaction locking behavior for the SQL source. Allowed values: ReadCommitted/ReadUncommitted/RepeatableRead/Serializable/Snapshot. The default value is ReadCommitted. Type: string (or Expression with resultType string).
     */
    isolationLevel?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". Type: string (or Expression with resultType string).
     */
    partitionOption?: any;
    /**
     * The settings that will be leveraged for Sql source partitioning.
     */
    partitionSettings?: SqlPartitionSettingsResponse;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * SQL reader query. Type: string (or Expression with resultType string).
     */
    sqlReaderQuery?: any;
    /**
     * Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string).
     */
    sqlReaderStoredProcedureName?: any;
    /**
     * Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".
     */
    storedProcedureParameters?: any;
    /**
     * Copy source type.
     * Expected value is 'SqlSource'.
     */
    type: "SqlSource";
}

/**
 * Sql upsert option settings
 */
export interface SqlUpsertSettingsResponse {
    /**
     * Schema name for interim table. Type: string (or Expression with resultType string).
     */
    interimSchemaName?: any;
    /**
     * Key column names for unique row identification. Type: array of strings (or Expression with resultType array of strings).
     */
    keys?: any;
    /**
     * Specifies whether to use temp db for upsert interim table. Type: boolean (or Expression with resultType boolean).
     */
    useTempDB?: any;
}

/**
 * Square Service linked service.
 */
export interface SquareLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The client ID associated with your Square application.
     */
    clientId?: any;
    /**
     * The client secret associated with your Square application.
     */
    clientSecret?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Properties used to connect to Square. It is mutually exclusive with any other properties in the linked service. Type: object.
     */
    connectionProperties?: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The URL of the Square instance. (i.e. mystore.mysquare.com)
     */
    host?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The redirect URL assigned in the Square application dashboard. (i.e. http://localhost:2500)
     */
    redirectUri?: any;
    /**
     * Type of linked service.
     * Expected value is 'Square'.
     */
    type: "Square";
    /**
     * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
     */
    useEncryptedEndpoints?: any;
    /**
     * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
     */
    useHostVerification?: any;
    /**
     * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
     */
    usePeerVerification?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Square Service dataset.
 */
export interface SquareObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'SquareObject'.
     */
    type: "SquareObject";
}

/**
 * A copy activity Square Service source.
 */
export interface SquareSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'SquareSource'.
     */
    type: "SquareSource";
}

/**
 * Ssis environment reference.
 */
export interface SsisEnvironmentReferenceResponse {
    /**
     * Environment folder name.
     */
    environmentFolderName?: string;
    /**
     * Environment name.
     */
    environmentName?: string;
    /**
     * Environment reference id.
     */
    id?: number;
    /**
     * Reference type
     */
    referenceType?: string;
}

/**
 * Ssis environment.
 */
export interface SsisEnvironmentResponse {
    /**
     * Metadata description.
     */
    description?: string;
    /**
     * Folder id which contains environment.
     */
    folderId?: number;
    /**
     * Metadata id.
     */
    id?: number;
    /**
     * Metadata name.
     */
    name?: string;
    /**
     * The type of SSIS object metadata.
     * Expected value is 'Environment'.
     */
    type: "Environment";
    /**
     * Variable in environment
     */
    variables?: SsisVariableResponse[];
}

/**
 * Ssis folder.
 */
export interface SsisFolderResponse {
    /**
     * Metadata description.
     */
    description?: string;
    /**
     * Metadata id.
     */
    id?: number;
    /**
     * Metadata name.
     */
    name?: string;
    /**
     * The type of SSIS object metadata.
     * Expected value is 'Folder'.
     */
    type: "Folder";
}

/**
 * Ssis Package.
 */
export interface SsisPackageResponse {
    /**
     * Metadata description.
     */
    description?: string;
    /**
     * Folder id which contains package.
     */
    folderId?: number;
    /**
     * Metadata id.
     */
    id?: number;
    /**
     * Metadata name.
     */
    name?: string;
    /**
     * Parameters in package
     */
    parameters?: SsisParameterResponse[];
    /**
     * Project id which contains package.
     */
    projectId?: number;
    /**
     * Project version which contains package.
     */
    projectVersion?: number;
    /**
     * The type of SSIS object metadata.
     * Expected value is 'Package'.
     */
    type: "Package";
}

/**
 * Ssis parameter.
 */
export interface SsisParameterResponse {
    /**
     * Parameter type.
     */
    dataType?: string;
    /**
     * Default value of parameter.
     */
    defaultValue?: string;
    /**
     * Parameter description.
     */
    description?: string;
    /**
     * Design default value of parameter.
     */
    designDefaultValue?: string;
    /**
     * Parameter id.
     */
    id?: number;
    /**
     * Parameter name.
     */
    name?: string;
    /**
     * Whether parameter is required.
     */
    required?: boolean;
    /**
     * Whether parameter is sensitive.
     */
    sensitive?: boolean;
    /**
     * Default sensitive value of parameter.
     */
    sensitiveDefaultValue?: string;
    /**
     * Parameter value set.
     */
    valueSet?: boolean;
    /**
     * Parameter value type.
     */
    valueType?: string;
    /**
     * Parameter reference variable.
     */
    variable?: string;
}

/**
 * Ssis project.
 */
export interface SsisProjectResponse {
    /**
     * Metadata description.
     */
    description?: string;
    /**
     * Environment reference in project
     */
    environmentRefs?: SsisEnvironmentReferenceResponse[];
    /**
     * Folder id which contains project.
     */
    folderId?: number;
    /**
     * Metadata id.
     */
    id?: number;
    /**
     * Metadata name.
     */
    name?: string;
    /**
     * Parameters in project
     */
    parameters?: SsisParameterResponse[];
    /**
     * The type of SSIS object metadata.
     * Expected value is 'Project'.
     */
    type: "Project";
    /**
     * Project version.
     */
    version?: number;
}

/**
 * Ssis variable.
 */
export interface SsisVariableResponse {
    /**
     * Variable type.
     */
    dataType?: string;
    /**
     * Variable description.
     */
    description?: string;
    /**
     * Variable id.
     */
    id?: number;
    /**
     * Variable name.
     */
    name?: string;
    /**
     * Whether variable is sensitive.
     */
    sensitive?: boolean;
    /**
     * Variable sensitive value.
     */
    sensitiveValue?: string;
    /**
     * Variable value.
     */
    value?: string;
}

/**
 * Staging settings.
 */
export interface StagingSettingsResponse {
    /**
     * Specifies whether to use compression when copying data via an interim staging. Default value is false. Type: boolean (or Expression with resultType boolean).
     */
    enableCompression?: any;
    /**
     * Staging linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * The path to storage for storing the interim data. Type: string (or Expression with resultType string).
     */
    path?: any;
}

/**
 * This activity evaluates an expression and executes activities under the cases property that correspond to the expression evaluation expected in the equals property.
 */
export interface SwitchActivityResponse {
    /**
     * List of cases that correspond to expected values of the 'on' property. This is an optional property and if not provided, the activity will execute activities provided in defaultActivities.
     */
    cases?: SwitchCaseResponse[];
    /**
     * List of activities to execute if no case condition is satisfied. This is an optional property and if not provided, the activity will exit without any action.
     */
    defaultActivities?: (AppendVariableActivityResponse | AzureDataExplorerCommandActivityResponse | AzureFunctionActivityResponse | AzureMLBatchExecutionActivityResponse | AzureMLExecutePipelineActivityResponse | AzureMLUpdateResourceActivityResponse | ControlActivityResponse | CopyActivityResponse | CustomActivityResponse | DataLakeAnalyticsUSQLActivityResponse | DatabricksNotebookActivityResponse | DatabricksSparkJarActivityResponse | DatabricksSparkPythonActivityResponse | DeleteActivityResponse | ExecuteDataFlowActivityResponse | ExecutePipelineActivityResponse | ExecuteSSISPackageActivityResponse | ExecuteWranglingDataflowActivityResponse | ExecutionActivityResponse | FailActivityResponse | FilterActivityResponse | ForEachActivityResponse | GetMetadataActivityResponse | HDInsightHiveActivityResponse | HDInsightMapReduceActivityResponse | HDInsightPigActivityResponse | HDInsightSparkActivityResponse | HDInsightStreamingActivityResponse | IfConditionActivityResponse | LookupActivityResponse | ScriptActivityResponse | SetVariableActivityResponse | SqlServerStoredProcedureActivityResponse | SwitchActivityResponse | SynapseNotebookActivityResponse | SynapseSparkJobDefinitionActivityResponse | UntilActivityResponse | ValidationActivityResponse | WaitActivityResponse | WebActivityResponse | WebHookActivityResponse)[];
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * Activity name.
     */
    name: string;
    /**
     * An expression that would evaluate to a string or integer. This is used to determine the block of activities in cases that will be executed.
     */
    on: ExpressionResponse;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Type of activity.
     * Expected value is 'Switch'.
     */
    type: "Switch";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * Switch cases with have a value and corresponding activities.
 */
export interface SwitchCaseResponse {
    /**
     * List of activities to execute for satisfied case condition.
     */
    activities?: (AppendVariableActivityResponse | AzureDataExplorerCommandActivityResponse | AzureFunctionActivityResponse | AzureMLBatchExecutionActivityResponse | AzureMLExecutePipelineActivityResponse | AzureMLUpdateResourceActivityResponse | ControlActivityResponse | CopyActivityResponse | CustomActivityResponse | DataLakeAnalyticsUSQLActivityResponse | DatabricksNotebookActivityResponse | DatabricksSparkJarActivityResponse | DatabricksSparkPythonActivityResponse | DeleteActivityResponse | ExecuteDataFlowActivityResponse | ExecutePipelineActivityResponse | ExecuteSSISPackageActivityResponse | ExecuteWranglingDataflowActivityResponse | ExecutionActivityResponse | FailActivityResponse | FilterActivityResponse | ForEachActivityResponse | GetMetadataActivityResponse | HDInsightHiveActivityResponse | HDInsightMapReduceActivityResponse | HDInsightPigActivityResponse | HDInsightSparkActivityResponse | HDInsightStreamingActivityResponse | IfConditionActivityResponse | LookupActivityResponse | ScriptActivityResponse | SetVariableActivityResponse | SqlServerStoredProcedureActivityResponse | SwitchActivityResponse | SynapseNotebookActivityResponse | SynapseSparkJobDefinitionActivityResponse | UntilActivityResponse | ValidationActivityResponse | WaitActivityResponse | WebActivityResponse | WebHookActivityResponse)[];
    /**
     * Expected value that satisfies the expression result of the 'on' property.
     */
    value?: string;
}

/**
 * Linked service for Sybase data source.
 */
export interface SybaseLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * AuthenticationType to be used for connection.
     */
    authenticationType?: string;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Database name for connection. Type: string (or Expression with resultType string).
     */
    database: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Password for authentication.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Schema name for connection. Type: string (or Expression with resultType string).
     */
    schema?: any;
    /**
     * Server name for connection. Type: string (or Expression with resultType string).
     */
    server: any;
    /**
     * Type of linked service.
     * Expected value is 'Sybase'.
     */
    type: "Sybase";
    /**
     * Username for authentication. Type: string (or Expression with resultType string).
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity source for Sybase databases.
 */
export interface SybaseSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Database query. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'SybaseSource'.
     */
    type: "SybaseSource";
}

/**
 * The Sybase table dataset.
 */
export interface SybaseTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The Sybase table name. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'SybaseTable'.
     */
    type: "SybaseTable";
}

/**
 * Execute Synapse notebook activity.
 */
export interface SynapseNotebookActivityResponse {
    /**
     * Spark configuration properties, which will override the 'conf' of the notebook you provide.
     */
    conf?: any;
    /**
     * The type of the spark config.
     */
    configurationType?: string;
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * Number of core and memory to be used for driver allocated in the specified Spark pool for the session, which will be used for overriding 'driverCores' and 'driverMemory' of the notebook you provide. Type: string (or Expression with resultType string).
     */
    driverSize?: any;
    /**
     * Number of core and memory to be used for executors allocated in the specified Spark pool for the session, which will be used for overriding 'executorCores' and 'executorMemory' of the notebook you provide. Type: string (or Expression with resultType string).
     */
    executorSize?: any;
    /**
     * Linked service reference.
     */
    linkedServiceName?: LinkedServiceReferenceResponse;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Synapse notebook reference.
     */
    notebook: SynapseNotebookReferenceResponse;
    /**
     * Number of executors to launch for this session, which will override the 'numExecutors' of the notebook you provide. Type: integer (or Expression with resultType integer).
     */
    numExecutors?: any;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Notebook parameters.
     */
    parameters?: {[key: string]: NotebookParameterResponse};
    /**
     * Activity policy.
     */
    policy?: ActivityPolicyResponse;
    /**
     * Spark configuration property.
     */
    sparkConfig?: {[key: string]: any};
    /**
     * The name of the big data pool which will be used to execute the notebook.
     */
    sparkPool?: BigDataPoolParametrizationReferenceResponse;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * The spark configuration of the spark job.
     */
    targetSparkConfiguration?: SparkConfigurationParametrizationReferenceResponse;
    /**
     * Type of activity.
     * Expected value is 'SynapseNotebook'.
     */
    type: "SynapseNotebook";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * Synapse notebook reference type.
 */
export interface SynapseNotebookReferenceResponse {
    /**
     * Reference notebook name. Type: string (or Expression with resultType string).
     */
    referenceName: any;
    /**
     * Synapse notebook reference type.
     */
    type: string;
}

/**
 * Execute spark job activity.
 */
export interface SynapseSparkJobDefinitionActivityResponse {
    /**
     * User specified arguments to SynapseSparkJobDefinitionActivity.
     */
    arguments?: any[];
    /**
     * The fully-qualified identifier or the main class that is in the main definition file, which will override the 'className' of the spark job definition you provide. Type: string (or Expression with resultType string).
     */
    className?: any;
    /**
     * Spark configuration properties, which will override the 'conf' of the spark job definition you provide.
     */
    conf?: any;
    /**
     * The type of the spark config.
     */
    configurationType?: string;
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * Number of core and memory to be used for driver allocated in the specified Spark pool for the job, which will be used for overriding 'driverCores' and 'driverMemory' of the spark job definition you provide. Type: string (or Expression with resultType string).
     */
    driverSize?: any;
    /**
     * Number of core and memory to be used for executors allocated in the specified Spark pool for the job, which will be used for overriding 'executorCores' and 'executorMemory' of the spark job definition you provide. Type: string (or Expression with resultType string).
     */
    executorSize?: any;
    /**
     * The main file used for the job, which will override the 'file' of the spark job definition you provide. Type: string (or Expression with resultType string).
     */
    file?: any;
    /**
     * (Deprecated. Please use pythonCodeReference and filesV2) Additional files used for reference in the main definition file, which will override the 'files' of the spark job definition you provide.
     */
    files?: any[];
    /**
     * Additional files used for reference in the main definition file, which will override the 'jars' and 'files' of the spark job definition you provide.
     */
    filesV2?: any[];
    /**
     * Linked service reference.
     */
    linkedServiceName?: LinkedServiceReferenceResponse;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Number of executors to launch for this job, which will override the 'numExecutors' of the spark job definition you provide. Type: integer (or Expression with resultType integer).
     */
    numExecutors?: any;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity policy.
     */
    policy?: ActivityPolicyResponse;
    /**
     * Additional python code files used for reference in the main definition file, which will override the 'pyFiles' of the spark job definition you provide.
     */
    pythonCodeReference?: any[];
    /**
     * Scanning subfolders from the root folder of the main definition file, these files will be added as reference files. The folders named 'jars', 'pyFiles', 'files' or 'archives' will be scanned, and the folders name are case sensitive. Type: boolean (or Expression with resultType boolean).
     */
    scanFolder?: any;
    /**
     * Spark configuration property.
     */
    sparkConfig?: {[key: string]: any};
    /**
     * Synapse spark job reference.
     */
    sparkJob: SynapseSparkJobReferenceResponse;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * The name of the big data pool which will be used to execute the spark batch job, which will override the 'targetBigDataPool' of the spark job definition you provide.
     */
    targetBigDataPool?: BigDataPoolParametrizationReferenceResponse;
    /**
     * The spark configuration of the spark job.
     */
    targetSparkConfiguration?: SparkConfigurationParametrizationReferenceResponse;
    /**
     * Type of activity.
     * Expected value is 'SparkJob'.
     */
    type: "SparkJob";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * Synapse spark job reference type.
 */
export interface SynapseSparkJobReferenceResponse {
    /**
     * Reference spark job name. Expression with resultType string.
     */
    referenceName: any;
    /**
     * Synapse spark job reference type.
     */
    type: string;
}

/**
 * Copy activity sources of tabular type.
 */
export interface TabularSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'TabularSource'.
     */
    type: "TabularSource";
}

/**
 * The TarGZip compression read settings.
 */
export interface TarGZipReadSettingsResponse {
    /**
     * Preserve the compression file name as folder path. Type: boolean (or Expression with resultType boolean).
     */
    preserveCompressionFileNameAsFolder?: any;
    /**
     * The Compression setting type.
     * Expected value is 'TarGZipReadSettings'.
     */
    type: "TarGZipReadSettings";
}

/**
 * The Tar compression read settings.
 */
export interface TarReadSettingsResponse {
    /**
     * Preserve the compression file name as folder path. Type: boolean (or Expression with resultType boolean).
     */
    preserveCompressionFileNameAsFolder?: any;
    /**
     * The Compression setting type.
     * Expected value is 'TarReadSettings'.
     */
    type: "TarReadSettings";
}

/**
 * Linked service for TeamDesk.
 */
export interface TeamDeskLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The api token for the TeamDesk source.
     */
    apiToken?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The authentication type to use.
     */
    authenticationType: string;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The password of the TeamDesk source.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Type of linked service.
     * Expected value is 'TeamDesk'.
     */
    type: "TeamDesk";
    /**
     * The url to connect TeamDesk source. Type: string (or Expression with resultType string).
     */
    url: any;
    /**
     * The username of the TeamDesk source. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Teradata import command settings.
 */
export interface TeradataImportCommandResponse {
    /**
     * Additional format options for Teradata Copy Command. The format options only applies to direct copy from CSV source. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalFormatOptions": { "timeFormat": "HHhMImSSs" }
     */
    additionalFormatOptions?: any;
    /**
     * The import setting type.
     * Expected value is 'TeradataImportCommand'.
     */
    type: "TeradataImportCommand";
}

/**
 * Linked service for Teradata data source.
 */
export interface TeradataLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * AuthenticationType to be used for connection.
     */
    authenticationType?: string;
    /**
     * The character set to use for the connection. Type: string (or Expression with resultType string). Only applied for version 2.0.
     */
    characterSet?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Teradata ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Only applied for version 1.0.
     */
    connectionString?: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The port numbers when connecting to server through HTTPS/TLS connections. Type: integer (or Expression with resultType integer). Only applied for version 2.0.
     */
    httpsPortNumber?: any;
    /**
     * The maximum size of the response buffer for SQL requests, in bytes. Type: integer. Only applied for version 2.0.
     */
    maxRespSize?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Password for authentication.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The port numbers when connecting to server through non HTTPS/TLS connections. Type: integer (or Expression with resultType integer). Only used for V2. Only applied for version 2.0.
     */
    portNumber?: any;
    /**
     * Server name for connection. Type: string (or Expression with resultType string).
     */
    server?: any;
    /**
     * SSL mode for connection. Valid values including: “Disable”, “Allow”, “Prefer”, “Require”, “Verify-CA”, “Verify-Full”. Default value is “Verify-Full”. Type: string (or Expression with resultType string). Only applied for version 2.0.
     */
    sslMode?: any;
    /**
     * Type of linked service.
     * Expected value is 'Teradata'.
     */
    type: "Teradata";
    /**
     * Specifies whether to encrypt all communication with the Teradata database. Allowed values are 0 or 1. This setting will be ignored for HTTPS/TLS connections. Type: integer (or Expression with resultType integer). Only applied for version 2.0.
     */
    useDataEncryption?: any;
    /**
     * Username for authentication. Type: string (or Expression with resultType string).
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The settings that will be leveraged for teradata source partitioning.
 */
export interface TeradataPartitionSettingsResponse {
    /**
     * The name of the column that will be used for proceeding range or hash partitioning. Type: string (or Expression with resultType string).
     */
    partitionColumnName?: any;
    /**
     * The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
     */
    partitionLowerBound?: any;
    /**
     * The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
     */
    partitionUpperBound?: any;
}

/**
 * A copy activity Teradata sink.
 */
export interface TeradataSinkResponse {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Teradata import settings.
     */
    importSettings?: TeradataImportCommandResponse;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * Copy sink type.
     * Expected value is 'TeradataSink'.
     */
    type: "TeradataSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
}

/**
 * A copy activity Teradata source.
 */
export interface TeradataSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * The partition mechanism that will be used for teradata read in parallel. Possible values include: "None", "Hash", "DynamicRange".
     */
    partitionOption?: any;
    /**
     * The settings that will be leveraged for teradata source partitioning.
     */
    partitionSettings?: TeradataPartitionSettingsResponse;
    /**
     * Teradata query. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'TeradataSource'.
     */
    type: "TeradataSource";
}

/**
 * The Teradata database dataset.
 */
export interface TeradataTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * The database name of Teradata. Type: string (or Expression with resultType string).
     */
    database?: any;
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name of Teradata. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * Type of dataset.
     * Expected value is 'TeradataTable'.
     */
    type: "TeradataTable";
}

/**
 * The data stored in text format.
 */
export interface TextFormatResponse {
    /**
     * The column delimiter. Type: string (or Expression with resultType string).
     */
    columnDelimiter?: any;
    /**
     * Deserializer. Type: string (or Expression with resultType string).
     */
    deserializer?: any;
    /**
     * The code page name of the preferred encoding. If miss, the default value is ΓÇ£utf-8ΓÇ¥, unless BOM denotes another Unicode encoding. Refer to the ΓÇ£NameΓÇ¥ column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string).
     */
    encodingName?: any;
    /**
     * The escape character. Type: string (or Expression with resultType string).
     */
    escapeChar?: any;
    /**
     * When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean).
     */
    firstRowAsHeader?: any;
    /**
     * The null value string. Type: string (or Expression with resultType string).
     */
    nullValue?: any;
    /**
     * The quote character. Type: string (or Expression with resultType string).
     */
    quoteChar?: any;
    /**
     * The row delimiter. Type: string (or Expression with resultType string).
     */
    rowDelimiter?: any;
    /**
     * Serializer. Type: string (or Expression with resultType string).
     */
    serializer?: any;
    /**
     * The number of lines/rows to be skipped when parsing text files. The default value is 0. Type: integer (or Expression with resultType integer).
     */
    skipLineCount?: any;
    /**
     * Treat empty column values in the text file as null. The default value is true. Type: boolean (or Expression with resultType boolean).
     */
    treatEmptyAsNull?: any;
    /**
     * Type of dataset storage format.
     * Expected value is 'TextFormat'.
     */
    type: "TextFormat";
}

/**
 * A data flow transformation.
 */
export interface TransformationResponse {
    /**
     * Dataset reference.
     */
    dataset?: DatasetReferenceResponse;
    /**
     * Transformation description.
     */
    description?: string;
    /**
     * Flowlet Reference
     */
    flowlet?: DataFlowReferenceResponse;
    /**
     * Linked service reference.
     */
    linkedService?: LinkedServiceReferenceResponse;
    /**
     * Transformation name.
     */
    name: string;
}

/**
 * Trigger referenced dependency.
 */
export interface TriggerDependencyReferenceResponse {
    /**
     * Referenced trigger.
     */
    referenceTrigger: TriggerReferenceResponse;
    /**
     * The type of dependency reference.
     * Expected value is 'TriggerDependencyReference'.
     */
    type: "TriggerDependencyReference";
}

/**
 * Pipeline that needs to be triggered with the given parameters.
 */
export interface TriggerPipelineReferenceResponse {
    /**
     * Pipeline parameters.
     */
    parameters?: {[key: string]: any};
    /**
     * Pipeline reference.
     */
    pipelineReference?: PipelineReferenceResponse;
}

/**
 * Trigger reference type.
 */
export interface TriggerReferenceResponse {
    /**
     * Reference trigger name.
     */
    referenceName: string;
    /**
     * Trigger reference type.
     */
    type: string;
}

/**
 * Referenced tumbling window trigger dependency.
 */
export interface TumblingWindowTriggerDependencyReferenceResponse {
    /**
     * Timespan applied to the start time of a tumbling window when evaluating dependency.
     */
    offset?: string;
    /**
     * Referenced trigger.
     */
    referenceTrigger: TriggerReferenceResponse;
    /**
     * The size of the window when evaluating the dependency. If undefined the frequency of the tumbling window will be used.
     */
    size?: string;
    /**
     * The type of dependency reference.
     * Expected value is 'TumblingWindowTriggerDependencyReference'.
     */
    type: "TumblingWindowTriggerDependencyReference";
}

/**
 * Trigger that schedules pipeline runs for all fixed time interval windows from a start time without gaps and also supports backfill scenarios (when start time is in the past).
 */
export interface TumblingWindowTriggerResponse {
    /**
     * List of tags that can be used for describing the trigger.
     */
    annotations?: any[];
    /**
     * Specifies how long the trigger waits past due time before triggering new run. It doesn't alter window start and end time. The default is 0. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    delay?: any;
    /**
     * Triggers that this trigger depends on. Only tumbling window triggers are supported.
     */
    dependsOn?: (SelfDependencyTumblingWindowTriggerReferenceResponse | TriggerDependencyReferenceResponse | TumblingWindowTriggerDependencyReferenceResponse)[];
    /**
     * Trigger description.
     */
    description?: string;
    /**
     * The end time for the time period for the trigger during which events are fired for windows that are ready. Only UTC time is currently supported.
     */
    endTime?: string;
    /**
     * The frequency of the time windows.
     */
    frequency: string;
    /**
     * The interval of the time windows. The minimum interval allowed is 15 Minutes.
     */
    interval: number;
    /**
     * The max number of parallel time windows (ready for execution) for which a new run is triggered.
     */
    maxConcurrency: number;
    /**
     * Pipeline for which runs are created when an event is fired for trigger window that is ready.
     */
    pipeline: TriggerPipelineReferenceResponse;
    /**
     * Retry policy that will be applied for failed pipeline runs.
     */
    retryPolicy?: RetryPolicyResponse;
    /**
     * Indicates if trigger is running or not. Updated when Start/Stop APIs are called on the Trigger.
     */
    runtimeState: string;
    /**
     * The start time for the time period for the trigger during which events are fired for windows that are ready. Only UTC time is currently supported.
     */
    startTime: string;
    /**
     * Trigger type.
     * Expected value is 'TumblingWindowTrigger'.
     */
    type: "TumblingWindowTrigger";
}

/**
 * Linked service for Twilio.
 */
export interface TwilioLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The auth token of Twilio service.
     */
    password: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Type of linked service.
     * Expected value is 'Twilio'.
     */
    type: "Twilio";
    /**
     * The Account SID of Twilio service. Type: string (or Expression with resultType string).
     */
    userName: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * This activity executes inner activities until the specified boolean expression results to true or timeout is reached, whichever is earlier.
 */
export interface UntilActivityResponse {
    /**
     * List of activities to execute.
     */
    activities: (AppendVariableActivityResponse | AzureDataExplorerCommandActivityResponse | AzureFunctionActivityResponse | AzureMLBatchExecutionActivityResponse | AzureMLExecutePipelineActivityResponse | AzureMLUpdateResourceActivityResponse | ControlActivityResponse | CopyActivityResponse | CustomActivityResponse | DataLakeAnalyticsUSQLActivityResponse | DatabricksNotebookActivityResponse | DatabricksSparkJarActivityResponse | DatabricksSparkPythonActivityResponse | DeleteActivityResponse | ExecuteDataFlowActivityResponse | ExecutePipelineActivityResponse | ExecuteSSISPackageActivityResponse | ExecuteWranglingDataflowActivityResponse | ExecutionActivityResponse | FailActivityResponse | FilterActivityResponse | ForEachActivityResponse | GetMetadataActivityResponse | HDInsightHiveActivityResponse | HDInsightMapReduceActivityResponse | HDInsightPigActivityResponse | HDInsightSparkActivityResponse | HDInsightStreamingActivityResponse | IfConditionActivityResponse | LookupActivityResponse | ScriptActivityResponse | SetVariableActivityResponse | SqlServerStoredProcedureActivityResponse | SwitchActivityResponse | SynapseNotebookActivityResponse | SynapseSparkJobDefinitionActivityResponse | UntilActivityResponse | ValidationActivityResponse | WaitActivityResponse | WebActivityResponse | WebHookActivityResponse)[];
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * An expression that would evaluate to Boolean. The loop will continue until this expression evaluates to true
     */
    expression: ExpressionResponse;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Specifies the timeout for the activity to run. If there is no value specified, it takes the value of TimeSpan.FromDays(7) which is 1 week as default. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    timeout?: any;
    /**
     * Type of activity.
     * Expected value is 'Until'.
     */
    type: "Until";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * Get Data Plane read only token request definition.
 */
export interface UserAccessPolicyResponse {
    /**
     * The resource path to get access relative to factory. Currently only empty string is supported which corresponds to the factory resource.
     */
    accessResourcePath?: string;
    /**
     * Expiration time for the token. Maximum duration for the token is eight hours and by default the token will expire in eight hours.
     */
    expireTime?: string;
    /**
     * The string with permissions for Data Plane access. Currently only 'r' is supported which grants read only access.
     */
    permissions?: string;
    /**
     * The name of the profile. Currently only the default is supported. The default value is DefaultProfile.
     */
    profileName?: string;
    /**
     * Start time for the token. If not specified the current time will be used.
     */
    startTime?: string;
}

/**
 * User property.
 */
export interface UserPropertyResponse {
    /**
     * User property name.
     */
    name: string;
    /**
     * User property value. Type: string (or Expression with resultType string).
     */
    value: any;
}

/**
 * This activity verifies that an external resource exists.
 */
export interface ValidationActivityResponse {
    /**
     * Can be used if dataset points to a folder. If set to true, the folder must have at least one file. If set to false, the folder must be empty. Type: boolean (or Expression with resultType boolean).
     */
    childItems?: any;
    /**
     * Validation activity dataset reference.
     */
    dataset: DatasetReferenceResponse;
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * Can be used if dataset points to a file. The file must be greater than or equal in size to the value specified. Type: integer (or Expression with resultType integer).
     */
    minimumSize?: any;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * A delay in seconds between validation attempts. If no value is specified, 10 seconds will be used as the default. Type: integer (or Expression with resultType integer).
     */
    sleep?: any;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Specifies the timeout for the activity to run. If there is no value specified, it takes the value of TimeSpan.FromDays(7) which is 1 week as default. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    timeout?: any;
    /**
     * Type of activity.
     * Expected value is 'Validation'.
     */
    type: "Validation";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * Definition of a single variable for a Pipeline.
 */
export interface VariableSpecificationResponse {
    /**
     * Default value of variable.
     */
    defaultValue?: any;
    /**
     * Variable type.
     */
    type: string;
}

/**
 * Vertica linked service.
 */
export interface VerticaLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * Database name for connection. Type: string.
     */
    database?: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The port for the connection. Type: integer.
     */
    port?: any;
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    pwd?: AzureKeyVaultSecretReferenceResponse;
    /**
     * Server name for connection. Type: string.
     */
    server?: any;
    /**
     * Type of linked service.
     * Expected value is 'Vertica'.
     */
    type: "Vertica";
    /**
     * Username for authentication. Type: string.
     */
    uid?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity Vertica source.
 */
export interface VerticaSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'VerticaSource'.
     */
    type: "VerticaSource";
}

/**
 * Vertica dataset.
 */
export interface VerticaTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name of the Vertica. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * This property will be retired. Please consider using schema + table properties instead.
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'VerticaTable'.
     */
    type: "VerticaTable";
}

/**
 * This activity suspends pipeline execution for the specified interval.
 */
export interface WaitActivityResponse {
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Type of activity.
     * Expected value is 'Wait'.
     */
    type: "Wait";
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
    /**
     * Duration in seconds. Type: integer (or Expression with resultType integer).
     */
    waitTimeInSeconds: any;
}

/**
 * Microsoft Fabric Warehouse linked service.
 */
export interface WarehouseLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The ID of Microsoft Fabric Warehouse artifact. Type: string (or Expression with resultType string).
     */
    artifactId: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The endpoint of Microsoft Fabric Warehouse server. Type: string (or Expression with resultType string).
     */
    endpoint: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
     */
    servicePrincipalCredential?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
     */
    servicePrincipalCredentialType?: any;
    /**
     * The ID of the application used to authenticate against Microsoft Fabric Warehouse. Type: string (or Expression with resultType string).
     */
    servicePrincipalId?: any;
    /**
     * The Key of the application used to authenticate against Microsoft Fabric Warehouse.
     */
    servicePrincipalKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
     */
    tenant?: any;
    /**
     * Type of linked service.
     * Expected value is 'Warehouse'.
     */
    type: "Warehouse";
    /**
     * Version of the linked service.
     */
    version?: string;
    /**
     * The ID of Microsoft Fabric workspace. Type: string (or Expression with resultType string).
     */
    workspaceId?: any;
}

/**
 * A copy activity Microsoft Fabric Warehouse sink.
 */
export interface WarehouseSinkResponse {
    /**
     * Indicates to use Copy Command to copy data into SQL Data Warehouse. Type: boolean (or Expression with resultType boolean).
     */
    allowCopyCommand?: any;
    /**
     * Specifies Copy Command related settings when allowCopyCommand is true.
     */
    copyCommandSettings?: DWCopyCommandSettingsResponse;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * SQL pre-copy script. Type: string (or Expression with resultType string).
     */
    preCopyScript?: any;
    /**
     * Sink retry count. Type: integer (or Expression with resultType integer).
     */
    sinkRetryCount?: any;
    /**
     * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sinkRetryWait?: any;
    /**
     * The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string).
     */
    tableOption?: any;
    /**
     * Copy sink type.
     * Expected value is 'WarehouseSink'.
     */
    type: "WarehouseSink";
    /**
     * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    writeBatchSize?: any;
    /**
     * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    writeBatchTimeout?: any;
    /**
     * Write behavior when copying data into azure Microsoft Fabric Data Warehouse. Type: DWWriteBehaviorEnum (or Expression with resultType DWWriteBehaviorEnum)
     */
    writeBehavior?: any;
}

/**
 * A copy activity Microsoft Fabric Warehouse source.
 */
export interface WarehouseSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Specifies the transaction locking behavior for the Microsoft Fabric Warehouse source. Allowed values: ReadCommitted/ReadUncommitted/RepeatableRead/Serializable/Snapshot. The default value is ReadCommitted. Type: string (or Expression with resultType string).
     */
    isolationLevel?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange".
     */
    partitionOption?: any;
    /**
     * The settings that will be leveraged for Sql source partitioning.
     */
    partitionSettings?: SqlPartitionSettingsResponse;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Microsoft Fabric Warehouse reader query. Type: string (or Expression with resultType string).
     */
    sqlReaderQuery?: any;
    /**
     * Name of the stored procedure for a Microsoft Fabric Warehouse source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string).
     */
    sqlReaderStoredProcedureName?: any;
    /**
     * Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". Type: object (or Expression with resultType object), itemType: StoredProcedureParameter.
     */
    storedProcedureParameters?: any;
    /**
     * Copy source type.
     * Expected value is 'WarehouseSource'.
     */
    type: "WarehouseSource";
}

/**
 * Microsoft Fabric Warehouse dataset.
 */
export interface WarehouseTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name of the Microsoft Fabric Warehouse. Type: string (or Expression with resultType string).
     */
    table?: any;
    /**
     * Type of dataset.
     * Expected value is 'WarehouseTable'.
     */
    type: "WarehouseTable";
}

/**
 * Web activity authentication properties.
 */
export interface WebActivityAuthenticationResponse {
    /**
     * The credential reference containing authentication information.
     */
    credential?: CredentialReferenceResponse;
    /**
     * Password for the PFX file or basic authentication / Secret when used for ServicePrincipal
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Base64-encoded contents of a PFX file or Certificate when used for ServicePrincipal
     */
    pfx?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Resource for which Azure Auth token will be requested when using MSI Authentication. Type: string (or Expression with resultType string).
     */
    resource?: any;
    /**
     * Web activity authentication (Basic/ClientCertificate/MSI/ServicePrincipal)
     */
    type?: string;
    /**
     * TenantId for which Azure Auth token will be requested when using ServicePrincipal Authentication. Type: string (or Expression with resultType string).
     */
    userTenant?: any;
    /**
     * Web activity authentication user name for basic authentication or ClientID when used for ServicePrincipal. Type: string (or Expression with resultType string).
     */
    username?: any;
}

/**
 * Web activity.
 */
export interface WebActivityResponse {
    /**
     * Authentication method used for calling the endpoint.
     */
    authentication?: WebActivityAuthenticationResponse;
    /**
     * Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string).
     */
    body?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * List of datasets passed to web endpoint.
     */
    datasets?: DatasetReferenceResponse[];
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * When set to true, Certificate validation will be disabled.
     */
    disableCertValidation?: boolean;
    /**
     * Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string).
     */
    headers?: {[key: string]: any};
    /**
     * Timeout for the HTTP request to get a response. Format is in TimeSpan (hh:mm:ss). This value is the timeout to get a response, not the activity timeout. The default value is 00:01:00 (1 minute). The range is from 1 to 10 minutes
     */
    httpRequestTimeout?: any;
    /**
     * Linked service reference.
     */
    linkedServiceName?: LinkedServiceReferenceResponse;
    /**
     * List of linked services passed to web endpoint.
     */
    linkedServices?: LinkedServiceReferenceResponse[];
    /**
     * Rest API method for target endpoint.
     */
    method: string;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity policy.
     */
    policy?: ActivityPolicyResponse;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * Option to disable invoking HTTP GET on location given in response header of a HTTP 202 Response. If set true, it stops invoking HTTP GET on http location given in response header. If set false then continues to invoke HTTP GET call on location given in http response headers.
     */
    turnOffAsync?: boolean;
    /**
     * Type of activity.
     * Expected value is 'WebActivity'.
     */
    type: "WebActivity";
    /**
     * Web activity target endpoint and path. Type: string (or Expression with resultType string).
     */
    url: any;
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * A WebLinkedService that uses anonymous authentication to communicate with an HTTP endpoint.
 */
export interface WebAnonymousAuthenticationResponse {
    /**
     * Type of authentication used to connect to the web table source.
     * Expected value is 'Anonymous'.
     */
    authenticationType: "Anonymous";
    /**
     * The URL of the web service endpoint, e.g. https://www.microsoft.com . Type: string (or Expression with resultType string).
     */
    url: any;
}

/**
 * A WebLinkedService that uses basic authentication to communicate with an HTTP endpoint.
 */
export interface WebBasicAuthenticationResponse {
    /**
     * Type of authentication used to connect to the web table source.
     * Expected value is 'Basic'.
     */
    authenticationType: "Basic";
    /**
     * The password for Basic authentication.
     */
    password: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The URL of the web service endpoint, e.g. https://www.microsoft.com . Type: string (or Expression with resultType string).
     */
    url: any;
    /**
     * User name for Basic authentication. Type: string (or Expression with resultType string).
     */
    username: any;
}

/**
 * A WebLinkedService that uses client certificate based authentication to communicate with an HTTP endpoint. This scheme follows mutual authentication; the server must also provide valid credentials to the client.
 */
export interface WebClientCertificateAuthenticationResponse {
    /**
     * Type of authentication used to connect to the web table source.
     * Expected value is 'ClientCertificate'.
     */
    authenticationType: "ClientCertificate";
    /**
     * Password for the PFX file.
     */
    password: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Base64-encoded contents of a PFX file.
     */
    pfx: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The URL of the web service endpoint, e.g. https://www.microsoft.com . Type: string (or Expression with resultType string).
     */
    url: any;
}

/**
 * WebHook activity.
 */
export interface WebHookActivityResponse {
    /**
     * Authentication method used for calling the endpoint.
     */
    authentication?: WebActivityAuthenticationResponse;
    /**
     * Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string).
     */
    body?: any;
    /**
     * Activity depends on condition.
     */
    dependsOn?: ActivityDependencyResponse[];
    /**
     * Activity description.
     */
    description?: string;
    /**
     * Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string).
     */
    headers?: {[key: string]: any};
    /**
     * Rest API method for target endpoint.
     */
    method: string;
    /**
     * Activity name.
     */
    name: string;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: string;
    /**
     * Activity policy.
     */
    policy?: SecureInputOutputPolicyResponse;
    /**
     * When set to true, statusCode, output and error in callback request body will be consumed by activity. The activity can be marked as failed by setting statusCode >= 400 in callback request. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    reportStatusOnCallBack?: any;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: string;
    /**
     * The timeout within which the webhook should be called back. If there is no value specified, it defaults to 10 minutes. Type: string. Pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    timeout?: string;
    /**
     * Type of activity.
     * Expected value is 'WebHook'.
     */
    type: "WebHook";
    /**
     * WebHook activity target endpoint and path. Type: string (or Expression with resultType string).
     */
    url: any;
    /**
     * Activity user properties.
     */
    userProperties?: UserPropertyResponse[];
}

/**
 * Web linked service.
 */
export interface WebLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Type of linked service.
     * Expected value is 'Web'.
     */
    type: "Web";
    /**
     * Web linked service properties.
     */
    typeProperties: WebAnonymousAuthenticationResponse | WebBasicAuthenticationResponse | WebClientCertificateAuthenticationResponse;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * A copy activity source for web page table.
 */
export interface WebSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'WebSource'.
     */
    type: "WebSource";
}

/**
 * The dataset points to a HTML table in the web page.
 */
export interface WebTableDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * The zero-based index of the table in the web page. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    index: any;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The relative URL to the web page from the linked service URL. Type: string (or Expression with resultType string).
     */
    path?: any;
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'WebTable'.
     */
    type: "WebTable";
}

/**
 * Power Query data flow.
 */
export interface WranglingDataFlowResponse {
    /**
     * List of tags that can be used for describing the data flow.
     */
    annotations?: any[];
    /**
     * The description of the data flow.
     */
    description?: string;
    /**
     * Locale of the Power query mashup document.
     */
    documentLocale?: string;
    /**
     * The folder that this data flow is in. If not specified, Data flow will appear at the root level.
     */
    folder?: DataFlowResponseFolder;
    /**
     * Power query mashup script.
     */
    script?: string;
    /**
     * List of sources in Power Query.
     */
    sources?: PowerQuerySourceResponse[];
    /**
     * Type of data flow.
     * Expected value is 'WranglingDataFlow'.
     */
    type: "WranglingDataFlow";
}

/**
 * Xero Service linked service.
 */
export interface XeroLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Properties used to connect to Xero. It is mutually exclusive with any other properties in the linked service. Type: object.
     */
    connectionProperties?: any;
    /**
     * The consumer key associated with the Xero application.
     */
    consumerKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The endpoint of the Xero server. (i.e. api.xero.com)
     */
    host?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The private key from the .pem file that was generated for your Xero private application. You must include all the text from the .pem file, including the Unix line endings(
     * ).
     */
    privateKey?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Type of linked service.
     * Expected value is 'Xero'.
     */
    type: "Xero";
    /**
     * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
     */
    useEncryptedEndpoints?: any;
    /**
     * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
     */
    useHostVerification?: any;
    /**
     * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
     */
    usePeerVerification?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Xero Service dataset.
 */
export interface XeroObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'XeroObject'.
     */
    type: "XeroObject";
}

/**
 * A copy activity Xero Service source.
 */
export interface XeroSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'XeroSource'.
     */
    type: "XeroSource";
}

/**
 * Xml dataset.
 */
export interface XmlDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * The data compression method used for the json dataset.
     */
    compression?: DatasetCompressionResponse;
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The code page name of the preferred encoding. If not specified, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string).
     */
    encodingName?: any;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * The location of the json data storage.
     */
    location: AmazonS3CompatibleLocationResponse | AmazonS3LocationResponse | AzureBlobFSLocationResponse | AzureBlobStorageLocationResponse | AzureDataLakeStoreLocationResponse | AzureFileStorageLocationResponse | FileServerLocationResponse | FtpServerLocationResponse | GoogleCloudStorageLocationResponse | HdfsLocationResponse | HttpServerLocationResponse | LakeHouseLocationResponse | OracleCloudStorageLocationResponse | SftpLocationResponse;
    /**
     * The null value string. Type: string (or Expression with resultType string).
     */
    nullValue?: any;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * Type of dataset.
     * Expected value is 'Xml'.
     */
    type: "Xml";
}

/**
 * Xml read settings.
 */
export interface XmlReadSettingsResponse {
    /**
     * Compression settings.
     */
    compressionProperties?: TarGZipReadSettingsResponse | TarReadSettingsResponse | ZipDeflateReadSettingsResponse;
    /**
     * Indicates whether type detection is enabled when reading the xml files. Type: boolean (or Expression with resultType boolean).
     */
    detectDataType?: any;
    /**
     * Namespace uri to prefix mappings to override the prefixes in column names when namespace is enabled, if no prefix is defined for a namespace uri, the prefix of xml element/attribute name in the xml data file will be used. Example: "{"http://www.example.com/xml":"prefix"}" Type: object (or Expression with resultType object).
     */
    namespacePrefixes?: any;
    /**
     * Indicates whether namespace is enabled when reading the xml files. Type: boolean (or Expression with resultType boolean).
     */
    namespaces?: any;
    /**
     * The read setting type.
     * Expected value is 'XmlReadSettings'.
     */
    type: "XmlReadSettings";
    /**
     * Indicates what validation method is used when reading the xml files. Allowed values: 'none', 'xsd', or 'dtd'. Type: string (or Expression with resultType string).
     */
    validationMode?: any;
}

/**
 * A copy activity Xml source.
 */
export interface XmlSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Xml format settings.
     */
    formatSettings?: XmlReadSettingsResponse;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Xml store settings.
     */
    storeSettings?: AmazonS3CompatibleReadSettingsResponse | AmazonS3ReadSettingsResponse | AzureBlobFSReadSettingsResponse | AzureBlobStorageReadSettingsResponse | AzureDataLakeStoreReadSettingsResponse | AzureFileStorageReadSettingsResponse | FileServerReadSettingsResponse | FtpReadSettingsResponse | GoogleCloudStorageReadSettingsResponse | HdfsReadSettingsResponse | HttpReadSettingsResponse | LakeHouseReadSettingsResponse | OracleCloudStorageReadSettingsResponse | SftpReadSettingsResponse;
    /**
     * Copy source type.
     * Expected value is 'XmlSource'.
     */
    type: "XmlSource";
}

/**
 * Linked service for Zendesk.
 */
export interface ZendeskLinkedServiceResponse {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The api token for the Zendesk source.
     */
    apiToken?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * The authentication type to use.
     */
    authenticationType: string;
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * The password of the Zendesk source.
     */
    password?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * Type of linked service.
     * Expected value is 'Zendesk'.
     */
    type: "Zendesk";
    /**
     * The url to connect Zendesk source. Type: string (or Expression with resultType string).
     */
    url: any;
    /**
     * The username of the Zendesk source. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * The ZipDeflate compression read settings.
 */
export interface ZipDeflateReadSettingsResponse {
    /**
     * Preserve the zip file name as folder path. Type: boolean (or Expression with resultType boolean).
     */
    preserveZipFileNameAsFolder?: any;
    /**
     * The Compression setting type.
     * Expected value is 'ZipDeflateReadSettings'.
     */
    type: "ZipDeflateReadSettings";
}

/**
 * Zoho server linked service.
 */
export interface ZohoLinkedServiceResponse {
    /**
     * The access token for Zoho authentication.
     */
    accessToken?: AzureKeyVaultSecretReferenceResponse | SecureStringResponse;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: any[];
    /**
     * The integration runtime reference.
     */
    connectVia?: IntegrationRuntimeReferenceResponse;
    /**
     * Properties used to connect to Zoho. It is mutually exclusive with any other properties in the linked service. Type: object.
     */
    connectionProperties?: any;
    /**
     * Linked service description.
     */
    description?: string;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: string;
    /**
     * The endpoint of the Zoho server. (i.e. crm.zoho.com/crm/private)
     */
    endpoint?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Type of linked service.
     * Expected value is 'Zoho'.
     */
    type: "Zoho";
    /**
     * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
     */
    useEncryptedEndpoints?: any;
    /**
     * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
     */
    useHostVerification?: any;
    /**
     * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
     */
    usePeerVerification?: any;
    /**
     * Version of the linked service.
     */
    version?: string;
}

/**
 * Zoho server dataset.
 */
export interface ZohoObjectDatasetResponse {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: any[];
    /**
     * Dataset description.
     */
    description?: string;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: DatasetResponseFolder;
    /**
     * Linked service reference.
     */
    linkedServiceName: LinkedServiceReferenceResponse;
    /**
     * Parameters for dataset.
     */
    parameters?: {[key: string]: ParameterSpecificationResponse};
    /**
     * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
     */
    schema?: any;
    /**
     * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
     */
    structure?: any;
    /**
     * The table name. Type: string (or Expression with resultType string).
     */
    tableName?: any;
    /**
     * Type of dataset.
     * Expected value is 'ZohoObject'.
     */
    type: "ZohoObject";
}

/**
 * A copy activity Zoho server source.
 */
export interface ZohoSourceResponse {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
     */
    maxConcurrentConnections?: any;
    /**
     * A query to retrieve data from source. Type: string (or Expression with resultType string).
     */
    query?: any;
    /**
     * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    queryTimeout?: any;
    /**
     * Source retry count. Type: integer (or Expression with resultType integer).
     */
    sourceRetryCount?: any;
    /**
     * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    sourceRetryWait?: any;
    /**
     * Copy source type.
     * Expected value is 'ZohoSource'.
     */
    type: "ZohoSource";
}
